#!/usr/bin/env node
/** Human-readable progress toward the target bank size:  npm run stats */
import { loadAllContent, flatten, countByDifficulty, DIFFICULTIES } from './lib/content-io.mjs';

const TARGET = Number(process.env.TARGET_PER_CERT || 500);
const content = await loadAllContent();
const bar = (n, total, width = 24) => {
  const filled = Math.min(width, Math.round((n / total) * width));
  return '█'.repeat(filled) + '·'.repeat(width - filled);
};

console.log(`\nTarget: ${TARGET} questions per certification\n`);
let grand = 0;
let live = 0;
for (const [certId, bundle] of Object.entries(content)) {
  const qs = flatten(bundle.questionPacks).map(q => q.item);
  const fcs = flatten(bundle.flashcardPacks).map(c => c.item);
  const d = countByDifficulty(qs);
  const planned = bundle.cert.status === 'planned';
  if (!planned) { grand += qs.length; live++; }
  console.log(`${certId.padEnd(16)} ${bar(qs.length, TARGET)} ${String(qs.length).padStart(4)}/${TARGET}  ` +
    DIFFICULTIES.map(k => `${k[0].toUpperCase()}:${String(d[k]).padStart(3)}`).join(' ') +
    `  cards:${String(fcs.length).padStart(3)}  packs:${bundle.questionPacks.length}` +
    `  ${planned ? '(planned)' : bundle.cert.tier}`);
}
const target = TARGET * Math.max(1, live);
console.log(`\nTOTAL          ${bar(grand, target)} ${grand}/${target} questions (${Math.round((grand / target) * 100)}%)\n`);
