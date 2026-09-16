#!/usr/bin/env node
/**
 * Worklist for the length tell: the items whose correct option is visibly longer
 * than every distractor, grouped so each distinct option set is authored once.
 *
 * audit:distractors scores a bank; this names the items to fix. The grouping is
 * the point. Several banks reuse one option set across 7-12 differently-framed
 * stems, so a flat list of 480 items is really 60 rewrites, and rewriting them
 * item-by-item would produce inconsistent wording for the same four choices.
 * Groups are keyed on the option texts sorted, because npm run shuffle re-letters
 * options and the letters carry no meaning.
 *
 * Run: node scripts/list-length-tells.mjs --cert <id> [--gap 15] [--limit 20]
 *                                         [--offset 0] [--json]
 */
import { certPackFiles, readPack, lengthGap, optionSignature, optionHash } from './lib/pack-io.mjs';

const argv = process.argv.slice(2);
const arg = (name, fallback) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : fallback);
const certId = arg('--cert');
const minGap = Number(arg('--gap', 15));
const limit = Number(arg('--limit', 20));
const offset = Number(arg('--offset', 0));
const asJson = argv.includes('--json');
/** Explanations mostly restate the key, so a long worklist does not need them in full. */
const brief = argv.includes('--brief');

if (!certId) {
  console.error('Usage: node scripts/list-length-tells.mjs --cert <id> [--gap 15] [--limit 20] [--offset 0] [--json]');
  process.exit(2);
}

const groups = new Map();
let scanned = 0;

for (const file of certPackFiles(certId)) {
  const { items } = await readPack(file);
  for (const q of items) {
    scanned++;
    const gap = lengthGap(q);
    if (gap === null || gap <= minGap) continue;
    const sig = optionSignature(q);
    if (!groups.has(sig)) {
      const key = new Set(q.correctAnswers);
      groups.set(sig, {
        ids: [],
        gap,
        stems: [],
        explanation: q.explanation,
        options: q.options.map(o => ({ hash: optionHash(o.text), correct: key.has(o.id), len: (o.text || '').length, text: o.text }))
      });
    }
    const g = groups.get(sig);
    g.ids.push(q.id);
    if (g.stems.length < 3) g.stems.push({ scenario: q.scenario, question: q.question });
  }
}

const all = [...groups.values()].sort((a, b) => b.ids.length * b.gap - a.ids.length * a.gap);
const page = all.slice(offset, offset + limit);

if (asJson) {
  console.log(JSON.stringify({
    cert: certId,
    scanned,
    groupsTotal: all.length,
    itemsTotal: all.reduce((s, g) => s + g.ids.length, 0),
    offset,
    returned: page.length,
    groups: page
  }, null, 1));
} else {
  console.log(`${certId}: ${all.length} distinct option sets over ${all.reduce((s, g) => s + g.ids.length, 0)} of ${scanned} items have a key longer than every distractor by >${minGap} chars.`);
  console.log(`Showing ${page.length} starting at ${offset}.\n`);
  for (const g of page) {
    console.log(`--- ${g.ids.length} item(s), gap +${g.gap}: ${g.ids.slice(0, 6).join(', ')}${g.ids.length > 6 ? ', ...' : ''}`);
    console.log(`  S: ${g.stems[0].scenario}`);
    console.log(`  Q: ${g.stems[0].question}`);
    for (const o of g.options) console.log(`   ${o.correct ? '*' : ' '} ${o.hash} (${String(o.len).padStart(3)}) ${o.text}`);
    console.log(`  E: ${brief ? String(g.explanation).slice(0, 200) : g.explanation}`);
    console.log('');
  }
}
