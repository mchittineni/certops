#!/usr/bin/env node
/**
 * Strips stale option-letter references from question explanations.
 *
 * scripts/shuffle-options.mjs re-orders options and re-keys correctAnswers, which
 * silently invalidates any explanation that names a letter. The parenthesised form
 * "<description of the option> (B)" always names the option's content immediately
 * before the letter, so deleting the letter leaves correct, complete prose.
 *
 * Prose references ("Option B inverts the two") carry meaning in the letter itself
 * and cannot be fixed mechanically — they are reported for manual rewriting.
 *
 * Run: node scripts/fix-explanation-letters.mjs [--dry-run]
 */
import fs from 'fs';
import path from 'path';

const DRY = process.argv.includes('--dry-run');
const CERTS_DIR = 'src/data/certs';

/** " (B)" or " (B)," immediately after descriptive text, inside an explanation. */
const PAREN_REF = / \(([A-F])\)(?=[\s,.;:]|$)/g;
/** "option B", "options B and D", "choice C" — needs a human. */
const PROSE_REF = /\b(?:option|choice|answer)s?\s+\(?[A-F]\)?/i;

const files = [];
for (const certId of fs.readdirSync(CERTS_DIR)) {
  const dir = path.join(CERTS_DIR, certId, 'questions');
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) files.push(path.join(dir, f));
}

let stripped = 0, touched = 0;
const manual = [];

for (const file of files.sort()) {
  const before = fs.readFileSync(file, 'utf8');
  const out = before.split('\n').map(line => {
    if (!/^\s*explanation:\s*/.test(line)) return line;
    if (PROSE_REF.test(line)) manual.push({ file, line: line.trim().slice(0, 110) });
    return line.replace(PAREN_REF, () => { stripped++; return ''; });
  }).join('\n');
  if (out !== before) {
    touched++;
    if (!DRY) fs.writeFileSync(file, out);
  }
}

console.log(`${DRY ? '[dry run] ' : ''}stripped ${stripped} parenthesised option-letter reference(s) across ${touched} pack(s)`);
if (manual.length) {
  console.log(`\n${manual.length} explanation(s) use prose letter references and need a manual rewrite:`);
  for (const m of manual) console.log(`  ${m.file}\n    ${m.line}`);
}
