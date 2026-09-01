#!/usr/bin/env node
/**
 * Flags templated placeholder content — items generated from a pattern rather than
 * authored, whose answers cannot be verified because the question has no substance
 * ("Which service best addresses requirement #77?", "Option A: … (Optimal recommended
 * solution)"). Such items also break under scripts/shuffle-options.mjs, because an
 * option whose text begins "Option C:" keeps that text after being moved to slot B.
 *
 * Reporting only: it never fails the build, so it can run against a bank that still
 * contains filler while it is being replaced.
 *
 * Run: npm run audit:filler
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';

const QUESTION_SIGNALS = [
  [/best addresses requirement #\d+/i, 'templated question stem'],
  [/Comprehensive .*explanation for .*topic #\d+/i, 'templated explanation'],
  [/Optimal recommended solution/i, 'answer is self-labelled as correct'],
  [/^Option [A-F]:/m, 'option text hard-codes a letter'],
  [/requirement #\d+/i, 'templated scenario']
];
const CARD_SIGNALS = [
  [/(?:Topic|Concept|card) #\d+/i, 'templated card'],
  [/^(?:Detailed explanation|Mastery definition) for /i, 'templated card back']
];

const content = await loadAllContent();
const rows = [];

for (const [certId, entry] of Object.entries(content)) {
  const questions = flatten(entry.questionPacks).map(x => x.item);
  const cards = flatten(entry.flashcardPacks).map(x => x.item);

  const qHits = questions.filter(q => {
    const blob = [q.title, q.scenario, q.question, q.explanation, ...(q.options || []).map(o => o.text)].join('\n');
    return QUESTION_SIGNALS.some(([re]) => re.test(blob));
  });
  const cHits = cards.filter(c => CARD_SIGNALS.some(([re]) => re.test(`${c.front}\n${c.back}`)));

  if (qHits.length || cHits.length) {
    rows.push({ certId, status: entry.cert.status, q: qHits.length, qTotal: questions.length, c: cHits.length, cTotal: cards.length });
  }
}

if (!rows.length) {
  console.log('No templated placeholder content found.');
  process.exit(0);
}

rows.sort((a, b) => (b.q + b.c) - (a.q + a.c));
console.log('Templated placeholder content (answers here cannot be verified — the items have no real substance):\n');
for (const r of rows) {
  console.log(`  ${r.certId.padEnd(18)} ${String(r.status).padEnd(8)} questions ${r.q}/${r.qTotal}   flashcards ${r.c}/${r.cTotal}`);
}
const totalQ = rows.reduce((s, r) => s + r.q, 0);
const totalC = rows.reduce((s, r) => s + r.c, 0);
console.log(`\n${totalQ} question(s) and ${totalC} flashcard(s) across ${rows.length} certification(s) need authoring before their banks are trustworthy.`);
