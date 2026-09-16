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
 * --strict fails while any bank breaches, so it cannot guard a corpus that still
 * holds filler banks awaiting real questions. --min-passing <n> is the ratchet
 * for that state: it fails only when the number of passing banks drops below n,
 * so the banks already rewritten cannot regress while the rest are worked on.
 *
 * Run: npm run audit:distractors [-- --strict] [-- --min-passing <n>] [-- --cert <id>]
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';
import { scoreCertification, THRESHOLDS, LENGTH_BAND } from './lib/distractor-metrics.mjs';

const argv = process.argv.slice(2);
const strict = argv.includes('--strict');
const only = argv.includes('--cert') ? argv[argv.indexOf('--cert') + 1] : null;
const minPassing = argv.includes('--min-passing')
  ? Number(argv[argv.indexOf('--min-passing') + 1])
  : null;

if (minPassing !== null && !Number.isInteger(minPassing)) {
  console.error('--min-passing needs a whole number, as in --min-passing 24.');
  process.exit(2);
}

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
const bandFlag = v => (v !== null && (v < LENGTH_BAND.min || v > LENGTH_BAND.max) ? '!' : ' ');
const signed = v => (v >= 0 ? '+' : '') + v.toFixed(0);

rows.sort((a, b) => b.longest + b.strawman + b.leak - (a.longest + a.strawman + a.leak));

console.log('How often each bank gives its answer away by form rather than content.\n');
console.log('  cert                  n     longest%  shortest%  strawman%     leak%    len gap');
console.log('  ' + '-'.repeat(77));
for (const r of rows) {
  console.log(
    `  ${r.certId.padEnd(20)} ${String(r.n).padStart(4)}   ` +
    `${r.longest.toFixed(1).padStart(6)}${bandFlag(r.longest)}  ` +
    `${(r.shortest === null ? '-' : r.shortest.toFixed(1)).padStart(7)}${bandFlag(r.shortest)}  ` +
    `${r.strawman.toFixed(1).padStart(6)}${flag(r.strawman, THRESHOLDS.strawman)}  ` +
    `${r.leak.toFixed(1).padStart(6)}${flag(r.leak, THRESHOLDS.leak)}  ` +
    `${signed(r.delta).padStart(6)}${flag(r.delta, THRESHOLDS.delta)}`
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
  `${totals.leak.toFixed(1).padStart(6)}   ${signed(totals.delta).padStart(6)}`
);

console.log(
  `\nTargets: longest% and shortest% both within ${LENGTH_BAND.min}-${LENGTH_BAND.max}% ` +
  `(chance is ~25% each on 4 options; outside the band, "always pick it" or ` +
  `"always eliminate it" starts to work), ` +
  `strawman <=${THRESHOLDS.strawman}%, leak <=${THRESHOLDS.leak}%, len gap <=+${THRESHOLDS.delta} chars.`
);

const breached = rows.filter(r => r.breached);
const passing = rows.length - breached.length;

console.log(`\n${passing} of ${rows.length} certification(s) pass every target.`);

if (breached.length) {
  const sample = rows.find(r => r.worst.length);
  if (sample) {
    console.log(`\nExample items leaking all three ways (${sample.certId}):`);
    for (const w of sample.worst) {
      console.log(`  ${w.id}  stem shares "${w.leaked.join('", "')}" with the key and no distractor`);
    }
  }
}

if (strict && breached.length) process.exit(1);

if (minPassing !== null && passing < minPassing) {
  console.error(
    `\nRegression: ${passing} certification(s) pass, but at least ${minPassing} are expected. ` +
    `A bank that used to meet every target no longer does.`
  );
  process.exit(1);
}
