#!/usr/bin/env node
/**
 * Applies authored option and explanation rewrites to a certification's packs.
 *
 * Rewrites are keyed on the content hash that list-length-tells.mjs prints for
 * each option, not on a question id and letter, for three reasons. Option letters
 * are not stable — npm run shuffle re-letters every item. Banks reuse one option
 * set across many stems, so content keying applies one authored rewrite to every
 * item that shares it and keeps their wording identical. And a hash cannot be
 * mistyped into a near-match the way 200 characters of backticks and HTML
 * entities can: a handle that resolves to nothing is an error, not a silent skip.
 *
 * Only option text and explanation prose change. correctAnswers is never
 * touched: an option keeps its id, so a rewrite that preserves the meaning of
 * the option preserves the key. That is the author's responsibility, and the
 * checks below only catch the mechanical ways it can go wrong — a rewrite that
 * matches nothing, two options in one item collapsing to the same text, or a key
 * left longer than its distractors after all the edits land.
 *
 * Patch file (JSON):
 *   {
 *     "options":      [{ "hash": "<8-char handle>", "to": "<new text>" }],
 *     "explanations": [{ "id": "<question id>", "to": "<new explanation>" }]
 *   }
 *
 * Run: node scripts/apply-option-rewrites.mjs --cert <id> --file <patch.json> [--dry]
 */
import fs from 'fs';
import { certPackFiles, readPack, writePack, lengthGap, optionHash } from './lib/pack-io.mjs';

const argv = process.argv.slice(2);
const arg = (name, fallback) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : fallback);
const certId = arg('--cert');
const patchFile = arg('--file');
const dry = argv.includes('--dry');

if (!certId || !patchFile) {
  console.error('Usage: node scripts/apply-option-rewrites.mjs --cert <id> --file <patch.json> [--dry]');
  process.exit(2);
}

const patch = JSON.parse(fs.readFileSync(patchFile, 'utf8'));
const optionEdits = new Map();
for (const e of patch.options || []) {
  if (!e.hash || !e.to) { console.error(`Edit missing "hash" or "to": ${JSON.stringify(e)}`); process.exit(1); }
  if (optionEdits.has(e.hash) && optionEdits.get(e.hash) !== e.to) {
    console.error(`Two different rewrites for option ${e.hash}`);
    process.exit(1);
  }
  optionEdits.set(e.hash, e.to);
}
const explanationEdits = new Map((patch.explanations || []).map(e => [e.id, e.to]));

const used = new Set();
const seenIds = new Set();
const errors = [];
let optionsChanged = 0, itemsChanged = 0, explanationsChanged = 0;
const stillLong = [];

for (const file of certPackFiles(certId)) {
  const { exportName, items } = await readPack(file);
  let touched = false;

  for (const q of items) {
    seenIds.add(q.id);
    let itemTouched = false;

    for (const o of q.options || []) {
      const handle = optionHash(o.text);
      const next = optionEdits.get(handle);
      if (next === undefined) continue;
      used.add(handle);
      if (next === o.text) continue;
      o.text = next;
      optionsChanged++;
      itemTouched = true;
    }

    if (explanationEdits.has(q.id)) {
      const next = explanationEdits.get(q.id);
      explanationEdits.set(q.id, undefined); // mark consumed
      if (next !== q.explanation) { q.explanation = next; explanationsChanged++; itemTouched = true; }
    }

    if (!itemTouched) continue;
    itemsChanged++;
    touched = true;

    const texts = (q.options || []).map(o => o.text);
    if (new Set(texts).size !== texts.length) errors.push(`${q.id}: two options now have identical text`);
    for (const o of q.options || []) {
      if (!String(o.text || '').trim()) errors.push(`${q.id}: option ${o.id} is empty`);
    }
    const gap = lengthGap(q);
    if (gap !== null && gap > 15) stillLong.push(`${q.id} (+${gap})`);
  }

  if (touched && !dry) writePack(file, exportName, items);
}

for (const hash of optionEdits.keys()) {
  if (!used.has(hash)) errors.push(`no option in ${certId} has handle ${hash} (already rewritten, or wrong cert)`);
}
for (const [id, to] of explanationEdits) {
  if (to !== undefined) errors.push(`no question ${id} in ${certId}${seenIds.has(id) ? '' : ' (unknown id)'}`);
}

console.log(`${dry ? '[dry run] ' : ''}${certId}: rewrote ${optionsChanged} option(s) and ${explanationsChanged} explanation(s) across ${itemsChanged} item(s).`);
if (stillLong.length) {
  console.log(`\n${stillLong.length} rewritten item(s) still have a key longer than every distractor by >15 chars:`);
  console.log('  ' + stillLong.slice(0, 40).join(', ') + (stillLong.length > 40 ? ', ...' : ''));
}
if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
