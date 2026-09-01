#!/usr/bin/env node
/**
 * Heuristic check that each question's answer key agrees with its explanation.
 *
 * A well-written explanation opens by justifying the correct option, so the keyed
 * option's distinctive words should overlap the explanation more than any distractor's.
 * When a distractor scores clearly higher, the key and the prose disagree — usually a
 * genuine answer-key error, occasionally just an explanation that leads with a caveat.
 *
 * Heuristic, not a proof: it produces a review list, not a verdict.
 *
 * Run: node scripts/audit-answer-keys.mjs [--margin 2]
 */
import { loadAllContent, flatten } from './lib/content-io.mjs';

const MARGIN = Number(process.argv[process.argv.indexOf('--margin') + 1]) || 2;

const STOP = new Set(('the a an and or of to in on for with is are be by that this it as at from not no ' +
  'which what when where who how why can cannot does do not will would should must may might all any each ' +
  'one two three both only also than then there their they them its it s use used uses using set sets ' +
  'value values option options answer correct because so while but if into over under per via such same ' +
  'other others every none more most less least new old first second next last').split(/\s+/));

const tokens = s => new Set(String(s).toLowerCase().replace(/<[^>]+>/g, ' ')
  .split(/[^a-z0-9.:/_-]+/).filter(w => w.length > 2 && !STOP.has(w)));

const content = await loadAllContent();
const flagged = [];
let total = 0;

for (const [certId, entry] of Object.entries(content)) {
  for (const { item, pack } of flatten(entry.questionPacks)) {
    if (!Array.isArray(item.options) || !Array.isArray(item.correctAnswers)) continue;
    total++;
    const expl = tokens(item.explanation);
    const score = o => [...tokens(o.text)].filter(w => expl.has(w)).length;
    const correct = new Set(item.correctAnswers);
    const keyed = item.options.filter(o => correct.has(o.id));
    const distractors = item.options.filter(o => !correct.has(o.id));
    if (!keyed.length || !distractors.length) continue;

    const bestKeyed = Math.max(...keyed.map(score));
    const worst = distractors.map(o => ({ id: o.id, s: score(o) })).sort((a, b) => b.s - a.s)[0];
    if (worst.s - bestKeyed >= MARGIN) {
      flagged.push({ certId, id: item.id, pack, keyed: [...correct].join(','), keyedScore: bestKeyed, rival: worst.id, rivalScore: worst.s });
    }
  }
}

flagged.sort((a, b) => (b.rivalScore - b.keyedScore) - (a.rivalScore - a.keyedScore));
for (const f of flagged) {
  console.log(`${f.id.padEnd(18)} key=${f.keyed} (${f.keyedScore})  rival=${f.rival} (${f.rivalScore})  ${f.pack}`);
}
console.log(`\n${flagged.length} of ${total} questions have a distractor that matches the explanation more closely than the keyed answer (margin >= ${MARGIN}).`);
