#!/usr/bin/env node
/**
 * Measures repeated content — the defect audit:filler and audit:distractors both miss.
 *
 * A generator that reissues one item under five framing sentences produces five
 * questions with one option set and five cards with one back. Every one of them
 * passes the schema, and the distractor audit sees five well-formed items. A
 * learner sees the same question five times and a spaced-repetition deck that
 * schedules five copies of one fact. This audit counts:
 *
 *   shared-set%   questions whose option set (order-independent) is shared with
 *                 at least one other question in the bank
 *   distinct      how many distinct option sets those shared items collapse to
 *   framed        items whose title or front ends in a generator framing label
 *   shared-back%  flashcards whose back text is shared with another card
 *   template      flashcards from the boilerplate generator
 *
 * Reporting only by default; --strict exits 1 when any bank repeats itself.
 *
 * Run: npm run audit:repeats [-- --cert <id>] [-- --strict]
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';
import { FRAMING, FRAMING_PROSE, CARD_TEMPLATE, stripFraming } from './lib/generator-signals.mjs';

const argv = process.argv.slice(2);
const only = argv.includes('--cert') ? argv[argv.indexOf('--cert') + 1] : null;
const strict = argv.includes('--strict');
/**
 * --strict fails while any bank repeats itself, which is every bank but one, so it
 * cannot guard the corpus yet. --min-clean <n> is the ratchet for that state: it
 * fails only when the number of banks with no repetition drops below n, so a bank
 * authored clean cannot silently regress while the rest are rewritten.
 */
const minClean = argv.includes('--min-clean') ? Number(argv[argv.indexOf('--min-clean') + 1]) : null;
if (minClean !== null && !Number.isInteger(minClean)) {
  console.error('--min-clean needs a whole number, as in --min-clean 1.');
  process.exit(2);
}

const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const signature = q => (q.options || []).map(o => norm(o.text)).sort().join('\u0000');

const content = await loadAllContent();
const rows = [];

for (const [certId, entry] of Object.entries(content)) {
  if (only && certId !== only) continue;
  const qs = flatten(entry.questionPacks).map(x => x.item);
  const cs = flatten(entry.flashcardPacks).map(x => x.item);
  if (!qs.length && !cs.length) continue;

  const bySet = new Map();
  for (const q of qs) { const k = signature(q); bySet.set(k, (bySet.get(k) || 0) + 1); }
  const sharedSets = [...bySet.values()].filter(n => n > 1);
  const qShared = sharedSets.reduce((s, n) => s + n, 0);
  const framed = t => FRAMING.test(String(t.title || t.front || '')) || FRAMING_PROSE.some(re => re.test(`${t.scenario || ''} ${t.question || ''}`));
  const qFramed = qs.filter(framed).length;

  const byBack = new Map();
  for (const c of cs) { const k = norm(c.back); byBack.set(k, (byBack.get(k) || 0) + 1); }
  const sharedBacks = [...byBack.values()].filter(n => n > 1);
  const cShared = sharedBacks.reduce((s, n) => s + n, 0);
  const cFramed = cs.filter(c => FRAMING.test(String(c.front || ''))).length;
  const cTemplate = cs.filter(c => CARD_TEMPLATE.some(re => re.test(`${c.front}\n${c.back}`))).length;
  const cDistinctFronts = new Set(cs.map(c => norm(stripFraming(c.front)))).size;

  rows.push({
    certId, status: entry.cert.status,
    qn: qs.length, qShared, qSets: sharedSets.length, qFramed,
    cn: cs.length, cShared, cBacks: sharedBacks.length, cFramed, cTemplate, cDistinctFronts
  });
}

if (!rows.length) { console.log('No content found.'); process.exit(0); }

const pct = (a, b) => (b ? (100 * a / b).toFixed(0) + '%' : '-');
rows.sort((a, b) => (b.qShared + b.cShared + b.cTemplate) - (a.qShared + a.cShared + a.cTemplate));

console.log('Repeated content: one item reissued under several framings, or one card duplicated.\n');
console.log('  cert                  questions  shared-set%  distinct  framed   |  cards  shared-back%  template  framed  distinct-fronts');
console.log('  ' + '-'.repeat(118));
for (const r of rows) {
  console.log(
    `  ${r.certId.padEnd(20)} ${String(r.qn).padStart(8)}   ${pct(r.qShared, r.qn).padStart(9)}  ${String(r.qSets).padStart(8)}  ${String(r.qFramed).padStart(6)}   |  ` +
    `${String(r.cn).padStart(5)}  ${pct(r.cShared, r.cn).padStart(11)}  ${String(r.cTemplate).padStart(8)}  ${String(r.cFramed).padStart(6)}  ${String(r.cDistinctFronts).padStart(15)}`
  );
}
const tq = rows.reduce((s, r) => s + r.qn, 0), tqs = rows.reduce((s, r) => s + r.qShared, 0);
const tc = rows.reduce((s, r) => s + r.cn, 0), tcs = rows.reduce((s, r) => s + r.cShared, 0), tct = rows.reduce((s, r) => s + r.cTemplate, 0);
console.log('  ' + '-'.repeat(118));
console.log(`  ${'CORPUS'.padEnd(20)} ${String(tq).padStart(8)}   ${pct(tqs, tq).padStart(9)}  ${''.padStart(8)}  ${String(rows.reduce((s, r) => s + r.qFramed, 0)).padStart(6)}   |  ${String(tc).padStart(5)}  ${pct(tcs, tc).padStart(11)}  ${String(tct).padStart(8)}  ${String(rows.reduce((s, r) => s + r.cFramed, 0)).padStart(6)}`);

const clean = rows.filter(r => !r.qShared && !r.cShared && !r.cTemplate && !r.qFramed && !r.cFramed);
console.log(`\n${clean.length} of ${rows.length} certification(s) have no repeated or templated content.`);
console.log('Target: 0% shared option sets, 0% shared card backs, 0 templated or framed items in every bank.');

if (strict && clean.length < rows.length) process.exit(1);

if (minClean !== null && clean.length < minClean) {
  console.error(
    `\nRegression: ${clean.length} certification(s) have no repeated content, but at least ${minClean} are expected. ` +
    'A bank that used to be free of repetition no longer is.'
  );
  process.exit(1);
}
