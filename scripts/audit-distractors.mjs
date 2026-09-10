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
 * Reporting only by default, so it can run against a bank that is still being
 * rewritten. Pass --strict to exit non-zero when a threshold is breached, which
 * is how this becomes a build gate once the rewrite lands.
 *
 * Run: npm run audit:distractors [-- --strict] [-- --cert <id>]
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';

/** With 4 options, picking the longest should win ~25% of the time. */
const THRESHOLDS = { longest: 40, strawman: 5, leak: 35, delta: 15 };

const argv = process.argv.slice(2);
const strict = argv.includes('--strict');
const only = argv.includes('--cert') ? argv[argv.indexOf('--cert') + 1] : null;

const STRAWMAN = [
  /\bmanually (inspect|copy|review|edit|track|check|transcribe)\b/i,
  /\bhardcode/i, /\bspreadsheet\b/i, /\bdo nothing\b/i, /\bunversioned\b/i,
  /\bemail (the|a) (secret|credential|password|key|token)/i,
  /\bwithout (any |centralized |proper )?(encryption|monitoring|logging|authentication|validation|review|oversight|backups?)\b/i,
  /\bdelete all\b/i, /\bnotepad\b/i, /\bsticky note/i, /\bUSB drive\b/i,
  /\bstore (all )?(secrets|credentials|passwords|keys) in (plain|a text|source|the code)/i,
  /\b(public|world-readable) S3 bucket\b/i, /\bmonolithic shared\b/i, /\bon every click\b/i,
  /\bplaintext configmap\b/i, /\broot token(s)? (in|to)\b/i,
];

/** Words too common to signal that a stem and its key are talking about the same thing. */
const STOP = new Set((
  'the a an of for in to and or with using use on is are which best most that this by as from ' +
  'all any into your their its when what how it be can should would need needs requirement ' +
  'requirements service services solution solutions configuration configure architecture ' +
  'satisfies these following approach option options team company customer data cloud'
).split(/\s+/));

const terms = s => new Set(
  ((s || '').toLowerCase().match(/[a-z][a-z0-9-]{3,}/g) || []).filter(w => !STOP.has(w))
);

const content = await loadAllContent();
const rows = [];

for (const [certId, entry] of Object.entries(content)) {
  if (only && certId !== only) continue;
  const questions = flatten(entry.questionPacks)
    .map(x => x.item)
    .filter(q => q.options?.length && q.correctAnswers?.length);
  if (!questions.length) continue;

  let longestHit = 0, longestN = 0, strawQ = 0, leakQ = 0;
  let keyLen = 0, keyN = 0, distLen = 0, distN = 0;
  const worst = [];

  for (const q of questions) {
    const key = new Set(q.correctAnswers);
    const opts = q.options.map(o => ({ ok: key.has(o.id), text: o.text || '', len: (o.text || '').length }));
    const keys = opts.filter(o => o.ok);
    const distractors = opts.filter(o => !o.ok);
    if (!keys.length || !distractors.length) continue;

    const max = Math.max(...opts.map(o => o.len));
    const longest = opts.filter(o => o.len === max);
    if (longest.length === 1) { longestN++; if (longest[0].ok) longestHit++; }

    keyLen += keys.reduce((s, o) => s + o.len, 0); keyN += keys.length;
    distLen += distractors.reduce((s, o) => s + o.len, 0); distN += distractors.length;

    const straw = distractors.some(o => STRAWMAN.some(re => re.test(o.text)));
    if (straw) strawQ++;

    const stem = terms(`${q.title} ${q.question}`);
    const keyTerms = new Set(keys.flatMap(o => [...terms(o.text)]));
    const distTerms = new Set(distractors.flatMap(o => [...terms(o.text)]));
    const leaked = [...keyTerms].filter(t => stem.has(t) && !distTerms.has(t));
    if (leaked.length) leakQ++;

    if (worst.length < 3 && straw && leaked.length && longest.length === 1 && longest[0].ok) {
      worst.push({ id: q.id, leaked: leaked.slice(0, 3) });
    }
  }

  rows.push({
    certId,
    status: entry.cert.status,
    n: questions.length,
    longest: (100 * longestHit) / longestN,
    strawman: (100 * strawQ) / questions.length,
    leak: (100 * leakQ) / questions.length,
    delta: keyLen / keyN - distLen / distN,
    worst
  });
}

if (!rows.length) {
  console.log(only ? `No questions found for cert "${only}".` : 'No questions found.');
  process.exit(0);
}

const weighted = k => rows.reduce((s, r) => s + r[k] * r.n, 0) / rows.reduce((s, r) => s + r.n, 0);
const flag = (v, t) => (v > t ? '!' : ' ');

rows.sort((a, b) => b.longest + b.strawman + b.leak - (a.longest + a.strawman + a.leak));

console.log('How often each bank gives its answer away by form rather than content.\n');
console.log('  cert                  n     longest%   strawman%     leak%    len gap');
console.log('  ' + '-'.repeat(66));
for (const r of rows) {
  console.log(
    `  ${r.certId.padEnd(20)} ${String(r.n).padStart(4)}   ` +
    `${r.longest.toFixed(1).padStart(6)}${flag(r.longest, THRESHOLDS.longest)}  ` +
    `${r.strawman.toFixed(1).padStart(6)}${flag(r.strawman, THRESHOLDS.strawman)}  ` +
    `${r.leak.toFixed(1).padStart(6)}${flag(r.leak, THRESHOLDS.leak)}  ` +
    `${('+' + r.delta.toFixed(0)).padStart(6)}${flag(r.delta, THRESHOLDS.delta)}`
  );
}

const totals = {
  longest: weighted('longest'), strawman: weighted('strawman'),
  leak: weighted('leak'), delta: weighted('delta')
};
console.log('  ' + '-'.repeat(66));
console.log(
  `  ${'CORPUS'.padEnd(20)} ${String(rows.reduce((s, r) => s + r.n, 0)).padStart(4)}   ` +
  `${totals.longest.toFixed(1).padStart(6)}   ${totals.strawman.toFixed(1).padStart(6)}   ` +
  `${totals.leak.toFixed(1).padStart(6)}   ${('+' + totals.delta.toFixed(0)).padStart(6)}`
);

console.log(
  `\nTargets: longest <=${THRESHOLDS.longest}% (chance is ~25% on 4 options), ` +
  `strawman <=${THRESHOLDS.strawman}%, leak <=${THRESHOLDS.leak}%, len gap <=+${THRESHOLDS.delta} chars.`
);

const breached = rows.filter(r =>
  r.longest > THRESHOLDS.longest || r.strawman > THRESHOLDS.strawman ||
  r.leak > THRESHOLDS.leak || r.delta > THRESHOLDS.delta
);

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
