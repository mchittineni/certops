#!/usr/bin/env node
/**
 * Audits question explanations for references to option letters.
 *
 * scripts/shuffle-options.mjs re-orders options and re-keys correctAnswers, so any
 * explanation that names a letter ("option B", "(C, E)", "(D is wrong)") silently goes
 * stale the next time options are shuffled — and a stale reference does not merely read
 * oddly, it tells the learner the correct answer is the wrong one. This reports every
 * such reference so it can be rewritten to name the option's content instead.
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';

/* Prose form: "option B", "choice C", "answers A and B". Case-insensitive on the
   keyword but the letter must be uppercase, so "options for..." is not a hit. */
const PROSE = /\b(?:option|choice|answer)s?\s+\(?([A-F])\)?\b/g;

/* Parenthesised form: " (C)." — a bare letter standing alone as a citation. */
const BARE_PAREN = /\s\(([A-F])\)(?=[\s,.;:]|$)/g;

/* Letter-list form: "(B, C)", "(incorrect A)", "(D is wrong)", "(C and E)".
   Detected by tokenising the parenthesised text: it is a letter reference only when
   every token is either a single uppercase A–F or one of a small qualifier vocabulary.
   That admits "(B, C)" while rejecting prose such as "(an A/AAAA record with an alias
   flag)", which the earlier regex-only approach could not separate. */
const QUALIFIERS = new Set([
  'incorrect', 'wrong', 'correct', 'right', 'and', 'or', 'is', 'are', 'not',
  'option', 'options', 'choice', 'choices', 'answer', 'answers', 'both', 'all'
]);
const isLetter = t => /^[A-F]$/.test(t);

function letterList(text) {
  const hits = [];
  for (const m of text.matchAll(/\(([^)]{1,60})\)/g)) {
    const tokens = m[1].split(/[\s,;&/]+/).filter(Boolean);
    if (!tokens.length) continue;
    if (!tokens.some(isLetter)) continue;
    if (!tokens.every(t => isLetter(t) || QUALIFIERS.has(t.toLowerCase().replace(/[.,;:]$/, '')))) continue;
    hits.push(...tokens.filter(isLetter));
  }
  return hits;
}

const content = await loadAllContent();
let total = 0, flagged = 0;
const byCert = {};

for (const [certId, entry] of Object.entries(content)) {
  for (const { item, pack } of flatten(entry.questionPacks)) {
    total++;
    const text = String(item.explanation || '');
    const hits = [
      ...[...text.matchAll(PROSE)].map(m => m[1]),
      ...[...text.matchAll(BARE_PAREN)].map(m => m[1]),
      ...letterList(text)
    ];
    if (!hits.length) continue;
    flagged++;
    (byCert[certId] ||= []).push({ id: item.id, pack, hits: [...new Set(hits)].join(',') });
  }
}

for (const [certId, rows] of Object.entries(byCert)) {
  console.log(`\n${certId}: ${rows.length} explanation(s) reference option letters`);
  for (const r of rows.slice(0, 200)) console.log(`  ${r.id}  [${r.hits}]  ${r.pack}`);
}
console.log(`\n${flagged} of ${total} questions reference option letters in their explanation.`);
process.exit(flagged ? 1 : 0);
