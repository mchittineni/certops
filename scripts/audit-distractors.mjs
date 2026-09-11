#!/usr/bin/env node
/**
 * Scores how much each question bank gives its own answer away.
 *
 * A well-written certification item can only be answered by knowing the material.
 * Generated banks leak the key through form rather than content, and three leaks
 * dominate this corpus:
 *
 *   length   the correct option is visibly the longest one, so test-takers can
 *            score well above chance by picking the wordiest choice
 *   strawman distractors are anti-patterns nobody would plausibly choose
 *            ("hardcode root tokens", "email the credentials"), which collapses
 *            a 4-way item into a 1-way item
 *   leak     the stem names the very service the key names, and no distractor
 *            mentions it, so the answer can be matched without reading further
 *
 * The scoring itself lives in lib/distractor-metrics.mjs so that the dataset
 * card written by export-hf-dataset.mjs reports the same numbers.
 *
 * Reporting only by default, so it can run against a bank that is still being
 * rewritten. Pass --strict to exit non-zero when a threshold is breached, which
 * is how this becomes a build gate once the rewrite lands.
 *
 * Run: npm run audit:distractors [-- --strict] [-- --cert <id>]
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';
import { scoreCertification, THRESHOLDS } from './lib/distractor-metrics.mjs';

const argv = process.argv.slice(2);
const strict = argv.includes('--strict');
const only = argv.includes('--cert') ? argv[argv.indexOf('--cert') + 1] : null;

const content = await loadAllContent();
const rows = [];

for (const [certId, entry] of Object.entries(content)) {
  if (only && certId !== only) continue;
  const questions = flatten(entry.questionPacks).map(x => x.item);
  const score = scoreCertification(questions);
  if (!score) continue;
  rows.push({ certId, status: entry.cert.status, ...score });
}

if (!rows.length) {
  console.log(only ? `No questions found for cert "${only}".` : 'No questions found.');
  process.exit(0);
}

const weighted = k => rows.reduce((s, r) => s + r[k] * r.n, 0) / rows.reduce((s, r) => s + r.n, 0);
const flag = (v, t) => (v > t ? '!' : ' ');
const floorFlag = (v, t) => (v !== null && v < t ? '!' : ' ');

rows.sort((a, b) => b.longest + b.strawman + b.leak - (a.longest + a.strawman + a.leak));

console.log('How often each bank gives its answer away by form rather than content.\n');
console.log('  cert                  n     longest%  shortest%  strawman%     leak%    len gap');
console.log('  ' + '-'.repeat(77));
for (const r of rows) {
  console.log(
    `  ${r.certId.padEnd(20)} ${String(r.n).padStart(4)}   ` +
    `${r.longest.toFixed(1).padStart(6)}${flag(r.longest, THRESHOLDS.longest)}  ` +
    `${(r.shortest === null ? '-' : r.shortest.toFixed(1)).padStart(7)}${floorFlag(r.shortest, THRESHOLDS.shortest)}  ` +
    `${r.strawman.toFixed(1).padStart(6)}${flag(r.strawman, THRESHOLDS.strawman)}  ` +
    `${r.leak.toFixed(1).padStart(6)}${flag(r.leak, THRESHOLDS.leak)}  ` +
    `${('+' + r.delta.toFixed(0)).padStart(6)}${flag(r.delta, THRESHOLDS.delta)}`
  );
}

const totals = {
  longest: weighted('longest'), shortest: weighted('shortest'), strawman: weighted('strawman'),
  leak: weighted('leak'), delta: weighted('delta')
};
console.log('  ' + '-'.repeat(77));
console.log(
  `  ${'CORPUS'.padEnd(20)} ${String(rows.reduce((s, r) => s + r.n, 0)).padStart(4)}   ` +
  `${totals.longest.toFixed(1).padStart(6)}   ${totals.shortest.toFixed(1).padStart(7)}   ` +
  `${totals.strawman.toFixed(1).padStart(6)}   ` +
  `${totals.leak.toFixed(1).padStart(6)}   ${('+' + totals.delta.toFixed(0)).padStart(6)}`
);

console.log(
  `\nTargets: longest <=${THRESHOLDS.longest}% and shortest >=${THRESHOLDS.shortest}% ` +
  `(chance is ~25% each on 4 options, so either extreme becomes a rule), ` +
  `strawman <=${THRESHOLDS.strawman}%, leak <=${THRESHOLDS.leak}%, len gap <=+${THRESHOLDS.delta} chars.`
);

const breached = rows.filter(r => r.breached);

if (breached.length) {
  console.log(`\n${breached.length} of ${rows.length} certification(s) breach at least one target.`);
  const sample = rows.find(r => r.worst.length);
  if (sample) {
    console.log(`\nExample items leaking all three ways (${sample.certId}):`);
    for (const w of sample.worst) {
      console.log(`  ${w.id}  stem shares "${w.leaked.join('", "')}" with the key and no distractor`);
    }
  }
}

if (strict && breached.length) process.exit(1);
