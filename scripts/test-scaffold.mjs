#!/usr/bin/env node
/**
 * Integration test for the content lifecycle: scaffold a certification, add a
 * pack, rebuild the index, validate, then clean up. This is the workflow the
 * whole architecture rests on, so it is tested rather than just documented.
 */
import assert from 'assert';
import fs from 'fs';
import { execFileSync } from 'child_process';

const ID = 'zz-scaffold-test';
const DIR = `src/data/certs/${ID}`;
const run = (script, args = []) => execFileSync('node', [script, ...args], { encoding: 'utf8' });
let passed = 0;
const check = (name, fn) => { fn(); console.log(`  ok  ${name}`); passed++; };

const baseline = (fs.readFileSync('src/data/catalog.generated.js', 'utf8').match(/^import CERT_/gm) || []).length;
const snapshot = ['catalog', 'registry', 'manifest'].map(n => [`src/data/${n}.generated.js`, fs.readFileSync(`src/data/${n}.generated.js`, 'utf8')]);

function cleanup() {
  fs.rmSync(DIR, { recursive: true, force: true });
  for (const [file, content] of snapshot) fs.writeFileSync(file, content);
}
process.on('exit', cleanup);

try {
  check('the generator is idempotent', () => {
    run('scripts/build-content-index.mjs');
    for (const [file, content] of snapshot) {
      assert.strictEqual(fs.readFileSync(file, 'utf8'), content, `${file} changed on a no-op rebuild`);
    }
  });

  check('new:cert scaffolds a certification folder', () => {
    run('scripts/new-cert.mjs', ['--id', ID, '--provider', 'AWS', '--code', 'TEST-C01', '--title', 'Scaffold Test Certification', '--category', 'FinOps', '--tier', 'specialty']);
    assert.ok(fs.existsSync(`${DIR}/cert.js`));
    assert.ok(fs.statSync(`${DIR}/questions`).isDirectory());
    assert.ok(fs.statSync(`${DIR}/flashcards`).isDirectory());
    assert.strictEqual(fs.readdirSync(`${DIR}/questions`).length, 0, 'no empty pack file should be created — it would emit a useless bundle chunk');
    const cert = fs.readFileSync(`${DIR}/cert.js`, 'utf8');
    assert.ok(cert.includes('"status": "planned"'), 'new certs start as planned');
    assert.ok(cert.includes('"category": "FinOps"'), 'category must be recorded');
  });

  check('rebuilding the index picks it up with no registry edit', () => {
    const out = run('scripts/build-content-index.mjs');
    assert.ok(out.includes(`${baseline + 1} certifications`), out);
    const registry = fs.readFileSync('src/data/registry.generated.js', 'utf8');
    assert.ok(registry.includes(`'${ID}'`), 'the new certification was not registered');
    assert.ok(fs.readFileSync('src/data/catalog.generated.js', 'utf8').includes(`certs/${ID}/cert.js`));
  });

  check('a planned certification with TODO domains validates with warnings, not errors', () => {
    const out = run('scripts/validate-content.mjs');
    assert.ok(out.includes('0 error(s)'), out);
    assert.ok(out.includes('PLANNED') && out.includes(ID), 'planned warnings are collapsed into one line');
    assert.ok(!out.includes('TODO Domain 1'), 'collapsed by default so real warnings stay visible');

    const verbose = run('scripts/validate-content.mjs', ['--verbose']);
    assert.ok(verbose.includes('TODO Domain 1'), '--verbose must expand the collapsed warnings');
  });

  check('new:pack adds a pack inside the certification folder', () => {
    const out = run('scripts/new-pack.mjs', ['--cert', ID, '--kind', 'questions', '--count', '3']);
    assert.ok(fs.existsSync(`${DIR}/questions/pack-1.js`), out);
    const pack = fs.readFileSync(`${DIR}/questions/pack-1.js`, 'utf8');
    assert.ok(pack.includes(`certId: '${ID}'`));
    assert.ok(pack.includes("difficulty: 'medium'"));
    assert.ok(pack.trimEnd().endsWith('export default ZZ_SCAFFOLD_TEST_QUESTIONS_1;'), 'pack must default-export');
  });

  check('empty packs are kept out of the registry', () => {
    fs.writeFileSync(`${DIR}/flashcards/pack-1.js`, 'export default [];\n');
    run('scripts/build-content-index.mjs');
    const registry = fs.readFileSync('src/data/registry.generated.js', 'utf8');
    assert.ok(registry.includes(`${ID}/questions/pack-1.js`), 'the non-empty pack must be registered');
    assert.ok(!registry.includes(`${ID}/flashcards/pack-1.js`), 'the empty pack must be skipped');
  });

  check('a fresh scaffold still passes validation, with warnings', () => {
    run('scripts/build-content-index.mjs');
    const out = run('scripts/validate-content.mjs', ['--verbose']);
    assert.ok(out.includes('0 error(s)'), out);
    assert.ok(/status is "planned" but it has \d+ questions/.test(out), out);
    assert.ok(out.includes('unfilled template field'), 'TODO content should be warned about while planned');
  });

  check('a live certification cannot ship TODO content', () => {
    fs.writeFileSync(`${DIR}/cert.js`, fs.readFileSync(`${DIR}/cert.js`, 'utf8').replace('"status": "planned"', '"status": "live"'));
    run('scripts/build-content-index.mjs');
    let failed = false;
    try { run('scripts/validate-content.mjs'); } catch (e) {
      failed = true;
      assert.ok(e.stdout.includes('cannot ship TODO content'), e.stdout);
    }
    assert.ok(failed, 'validator should exit non-zero');
  });

  check('a live certification with no questions at all is an error', () => {
    fs.rmSync(`${DIR}/questions/pack-1.js`, { force: true });
    run('scripts/build-content-index.mjs');
    let failed = false;
    try { run('scripts/validate-content.mjs'); } catch (e) { failed = true; assert.ok(e.stdout.includes('no questions'), e.stdout); }
    assert.ok(failed, 'validator should exit non-zero');
  });

  check('removing the folder removes it from the index', () => {
    fs.rmSync(DIR, { recursive: true, force: true });
    const out = run('scripts/build-content-index.mjs');
    assert.ok(out.includes(`${baseline} certifications`), out);
    assert.ok(!fs.readFileSync('src/data/registry.generated.js', 'utf8').includes(ID));
  });

  console.log(`\n${passed} scaffold flows passed\n`);
} catch (err) {
  console.error(`\nFAILED after ${passed} checks:\n`, err.message);
  process.exitCode = 1;
}
