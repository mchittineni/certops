#!/usr/bin/env node
/**
 * Audits question explanations for references to option letters.
 *
 * scripts/shuffle-options.mjs re-orders options and re-keys correctAnswers, so any
 * explanation that names a letter ("option B", "(C)") silently goes stale the next
 * time options are shuffled. This reports every such reference so it can be rewritten
 * to name the option's content instead.
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';

/* Three forms, all case-sensitive on the letter so citations such as "17a-4(f)"
   are not flagged:
     prose         "option B", "choice C", "answers A and B"
     parenthesised " (C)."
     bare verdict  "(D is wrong)", "B is incorrect" — the form that reads as prose
                   but still breaks the moment the shuffler re-orders the options. */
const LETTER_REF = new RegExp([
  /\b(?:[Oo]ption|[Cc]hoice|[Aa]nswer)s?\s+\(?([A-F])\)?\b/,
  /\s\(([A-F])\)(?=[\s,.;:]|$)/,
  /\(([A-F])\s+(?:is|are)\b[^)]*\)/,
  /\b([A-F])\s+(?:is|are)\s+(?:wrong|incorrect|correct|right)/
].map(r => r.source).join('|'), 'g');

const content = await loadAllContent();
let total = 0, flagged = 0;
const byCert = {};

for (const [certId, entry] of Object.entries(content)) {
  for (const { item, pack } of flatten(entry.questionPacks)) {
    total++;
    const text = String(item.explanation || '');
    const hits = [...text.matchAll(LETTER_REF)].map(m => m.slice(1).find(Boolean).toUpperCase());
    if (!hits.length) continue;
    flagged++;
    byCert[certId] = byCert[certId] || [];
    byCert[certId].push({ id: item.id, pack, hits: [...new Set(hits)].join(',') });
  }
}

for (const [certId, rows] of Object.entries(byCert)) {
  console.log(`\n${certId}: ${rows.length} explanation(s) reference option letters`);
  for (const r of rows.slice(0, 200)) console.log(`  ${r.id}  [${r.hits}]  ${r.pack}`);
}
console.log(`\n${flagged} of ${total} questions reference option letters in their explanation.`);
process.exit(flagged ? 1 : 0);
