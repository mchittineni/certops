#!/usr/bin/env node
/**
 * Uploads the export built by export-hf-dataset.mjs to a Hugging Face dataset repo.
 *
 * This is the only script in the project that sends content anywhere, so it is
 * deliberately awkward to run by accident: it publishes nothing without both an
 * explicit --repo and an HF_TOKEN, and it refuses to run unless --confirm is
 * passed. Everything else is a dry run that prints what would be uploaded.
 *
 * Run: HF_TOKEN=hf_... node scripts/publish-hf-dataset.mjs \
 *        --repo <user>/<dataset> --confirm [--private] [--dir dist-dataset]
 */
import { readFileSync } from 'fs';
import path from 'path';
import { whoAmI, repoExists, createRepo, uploadFiles } from '@huggingface/hub';

const argv = process.argv.slice(2);
const arg = (name, fallback = null) =>
  argv.includes(name) ? argv[argv.indexOf(name) + 1] : fallback;

const repoName = arg('--repo');
const dir = arg('--dir', 'dist-dataset');
const confirm = argv.includes('--confirm');
const isPrivate = argv.includes('--private');
const accessToken = process.env.HF_TOKEN;

const FILES = ['README.md', 'certifications.jsonl', 'questions.jsonl', 'flashcards.jsonl'];

if (!repoName) {
  console.error('Missing --repo <user>/<dataset>. Nothing was published.');
  process.exit(1);
}
if (!/^[^/\s]+\/[^/\s]+$/.test(repoName)) {
  console.error(`--repo must look like "<user>/<dataset>", got "${repoName}".`);
  process.exit(1);
}

const repo = { type: 'dataset', name: repoName };

// Read each file outright rather than checking that it exists first. Testing
// and then reading leaves a window in which the file can change, and it means
// the bytes that get uploaded are not necessarily the ones that were checked.
// A single read settles both questions, and its own size is the size reported.
let files;
try {
  files = FILES.map(name => {
    const content = readFileSync(path.join(dir, name));
    return { path: name, size: content.length, content: new Blob([content]) };
  });
} catch (err) {
  if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
    console.error(`Cannot read ${err.path ?? dir}.`);
    console.error(`Run "npm run dataset:export" to build the export before publishing.`);
    process.exit(1);
  }
  throw err;
}

const mb = n => `${(n / 1024 / 1024).toFixed(1)} MB`;
console.log(`Dataset : ${repoName}${isPrivate ? '  (private)' : ''}`);
console.log(`Source  : ${dir}/`);
for (const f of files) console.log(`  ${f.path.padEnd(22)} ${mb(f.size).padStart(9)}`);

if (!confirm) {
  console.log('\nDry run — nothing was uploaded. Pass --confirm to publish.');
  process.exit(0);
}
if (!accessToken) {
  console.error('\nHF_TOKEN is not set. Nothing was published.');
  process.exit(1);
}

const me = await whoAmI({ accessToken });
console.log(`\nAuthenticated as ${me.name}.`);

if (await repoExists({ repo, accessToken })) {
  console.log('Dataset exists — publishing a new commit over it.');
} else {
  console.log('Dataset does not exist — creating it.');
  await createRepo({
    repo,
    accessToken,
    license: 'cc-by-sa-4.0',
    visibility: isPrivate ? 'private' : 'public'
  });
}

const commit = await uploadFiles({
  repo,
  accessToken,
  files: files.map(({ path: p, content }) => ({ path: p, content })),
  commitTitle: 'Update CertOps certification question bank',
  commitDescription:
    'Exported from https://github.com/mchittineni/certops with npm run dataset:export.\n' +
    'Content is CC BY-SA 4.0. See README.md for known limitations.'
});

console.log(`\nPublished: https://huggingface.co/datasets/${repoName}`);
if (commit?.commit?.url) console.log(`Commit:    ${commit.commit.url}`);
