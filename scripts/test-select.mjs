#!/usr/bin/env node
/** Logic tests for the selection + adaptive engine:  npm test */
import assert from 'assert';
import {
  buildSession, filterByDifficulty, nextAdaptiveLevel, drawAdaptive,
  isCorrect, sampleWeightedByDomain, makeRng, recommendedCount
} from '../src/lib/select.js';
import { loadAllContent, flatten } from './lib/content-io.mjs';

const content = await loadAllContent();
const saa = content['aws-saa'];
const questions = flatten(saa.questionPacks).map(q => q.item);
const cert = saa.cert;
let passed = 0;
const check = (name, fn) => { fn(); console.log(`  ok  ${name}`); passed++; };

check('filterByDifficulty returns only the requested band', () => {
  for (const d of ['easy', 'medium', 'hard']) {
    const out = filterByDifficulty(questions, d);
    assert.ok(out.length > 0, `no ${d} questions`);
    assert.ok(out.every(q => q.difficulty === d));
  }
});

check('filterByDifficulty falls back to the full pool for mixed/adaptive', () => {
  assert.strictEqual(filterByDifficulty(questions, 'mixed').length, questions.length);
  assert.strictEqual(filterByDifficulty(questions, 'adaptive').length, questions.length);
});

check('filterByDifficulty degrades gracefully when a band is empty', () => {
  const easyOnly = questions.filter(q => q.difficulty === 'easy');
  assert.strictEqual(filterByDifficulty(easyOnly, 'hard').length, easyOnly.length);
});

check('buildSession honours difficulty, count, and never repeats a question', () => {
  const s = buildSession(questions, { cert, difficulty: 'hard', count: 2, seed: 7 });
  assert.strictEqual(s.length, 2);
  assert.ok(s.every(q => q.difficulty === 'hard'));
  assert.strictEqual(new Set(s.map(q => q.id)).size, s.length);
});

check('buildSession clamps to pool size instead of padding', () => {
  const s = buildSession(questions, { cert, difficulty: 'easy', count: 999, seed: 1 });
  assert.strictEqual(s.length, questions.filter(q => q.difficulty === 'easy').length);
});

check('buildSession is reproducible from its seed', () => {
  const a = buildSession(questions, { cert, difficulty: 'mixed', count: 5, seed: 42 }).map(q => q.id);
  const b = buildSession(questions, { cert, difficulty: 'mixed', count: 5, seed: 42 }).map(q => q.id);
  assert.deepStrictEqual(a, b);
});

check('buildSession scoped to a domain returns only that domain', () => {
  const s = buildSession(questions, { cert, difficulty: 'mixed', count: 5, domainId: 'd3', seed: 3 });
  assert.ok(s.length > 0);
  assert.ok(s.every(q => q.domainId === 'd3'));
});

check('sampleWeightedByDomain returns exactly the requested count', () => {
  const big = Array.from({ length: 400 }, (_, i) => ({
    id: 'q' + i,
    difficulty: 'medium',
    domainId: cert.domains[i % cert.domains.length].id
  }));
  const s = sampleWeightedByDomain(big, cert, 65, makeRng(9));
  assert.strictEqual(s.length, 65);
  assert.strictEqual(new Set(s.map(q => q.id)).size, 65);
  // Heaviest domain should be represented at least as often as the lightest.
  const counts = {};
  for (const q of s) counts[q.domainId] = (counts[q.domainId] || 0) + 1;
  const heaviest = cert.domains.slice().sort((a, b) => b.weight - a.weight)[0];
  const lightest = cert.domains.slice().sort((a, b) => a.weight - b.weight)[0];
  assert.ok(counts[heaviest.id] >= counts[lightest.id]);
});

check('nextAdaptiveLevel escalates on two correct and eases on two wrong', () => {
  assert.strictEqual(nextAdaptiveLevel('medium', [true, true]), 'hard');
  assert.strictEqual(nextAdaptiveLevel('medium', [false, false]), 'easy');
  assert.strictEqual(nextAdaptiveLevel('medium', [true, false]), 'medium');
  assert.strictEqual(nextAdaptiveLevel('hard', [true, true]), 'hard', 'hard is the ceiling');
  assert.strictEqual(nextAdaptiveLevel('easy', [false, false]), 'easy', 'easy is the floor');
  assert.strictEqual(nextAdaptiveLevel('medium', [true]), 'medium', 'one answer is not a trend');
});

check('drawAdaptive prefers the current band, then widens, then exhausts', () => {
  const asked = new Set();
  const q1 = drawAdaptive(questions, asked, 'hard');
  assert.strictEqual(q1.difficulty, 'hard');
  const hardIds = questions.filter(q => q.difficulty === 'hard').map(q => q.id);
  hardIds.forEach(id => asked.add(id));
  const q2 = drawAdaptive(questions, asked, 'hard');
  assert.ok(q2 && q2.difficulty !== 'hard', 'widens once the band is exhausted');
  questions.forEach(q => asked.add(q.id));
  assert.strictEqual(drawAdaptive(questions, asked, 'hard'), null, 'returns null when nothing is left');
});

check('a full adaptive walk never repeats and stays inside the pool', () => {
  const asked = new Set();
  const results = [];
  let level = 'medium';
  for (let i = 0; i < questions.length; i++) {
    const q = drawAdaptive(questions, asked, level, makeRng(i + 1));
    assert.ok(q, 'pool should not run dry early');
    assert.ok(!asked.has(q.id));
    asked.add(q.id);
    results.push(i % 3 !== 0);
    level = nextAdaptiveLevel(level, results);
  }
  assert.strictEqual(asked.size, questions.length);
});

check('isCorrect requires an exact set match, order-insensitive', () => {
  const multi = questions.find(q => q.type === 'multiple');
  assert.ok(isCorrect(multi, multi.correctAnswers.slice().reverse()));
  assert.ok(!isCorrect(multi, [multi.correctAnswers[0]]), 'partial answers are wrong');
  assert.ok(!isCorrect(multi, []), 'blank is wrong');
  const single = questions.find(q => q.type === 'single');
  assert.ok(isCorrect(single, single.correctAnswers));
});

check('recommendedCount never exceeds what the bank holds', () => {
  assert.strictEqual(recommendedCount('exam', 11), 11);
  assert.strictEqual(recommendedCount('quick', 500), 10);
  assert.strictEqual(recommendedCount('exam', 500), 65);
});

check('domain sampling tops up when rounded quotas underfill the request', () => {
  // Quotas are rounded per domain, so three domains at 33/33/34 of 10 questions
  // land on 3+3+3=9. The top-up path has to find the tenth from the remainder,
  // without repeating anything already picked.
  const domains = [
    { id: 'a', name: 'A', weight: 33 },
    { id: 'b', name: 'B', weight: 33 },
    { id: 'c', name: 'C', weight: 34 }
  ];
  const pool = [];
  for (const d of domains) {
    for (let i = 0; i < 20; i++) pool.push({ id: `${d.id}-${i}`, domainId: d.id, difficulty: 'medium' });
  }
  const out = sampleWeightedByDomain(pool, { domains }, 10, makeRng(9));
  assert.strictEqual(out.length, 10, 'must land exactly on the requested count');
  assert.strictEqual(new Set(out.map(q => q.id)).size, 10, 'top-up must not duplicate a question');
});

check('domain sampling still fills the count when a domain has no content', () => {
  const domains = [
    { id: 'a', name: 'A', weight: 50 },
    { id: 'empty', name: 'Empty', weight: 50 }
  ];
  const pool = Array.from({ length: 30 }, (_, i) => ({ id: `a-${i}`, domainId: 'a', difficulty: 'easy' }));
  const out = sampleWeightedByDomain(pool, { domains }, 12, makeRng(3));
  assert.strictEqual(out.length, 12, 'an empty domain must not shrink the session');
  assert.strictEqual(new Set(out.map(q => q.id)).size, 12);
});

check('domain sampling degrades to a plain shuffle without a blueprint', () => {
  const pool = Array.from({ length: 8 }, (_, i) => ({ id: `q-${i}`, domainId: 'a', difficulty: 'easy' }));
  assert.strictEqual(sampleWeightedByDomain(pool, null, 5, makeRng(1)).length, 5);
  assert.strictEqual(sampleWeightedByDomain(pool, { domains: [] }, 5, makeRng(1)).length, 5);
  assert.strictEqual(sampleWeightedByDomain(pool, { domains: [{ id: 'a', weight: 0 }] }, 5, makeRng(1)).length, 5,
    'zero total weight must not divide by zero');
  assert.strictEqual(sampleWeightedByDomain(pool, { domains: [{ id: 'a', weight: 100 }] }, 20, makeRng(1)).length, 8,
    'asking for more than the pool holds returns the pool');
});

check('the adaptive draw still returns a question when no band matches', () => {
  // Defensive path: validation rejects an off-band difficulty, so this only
  // happens if a pack slips through. It must degrade, not hand back undefined.
  const odd = [{ id: 'x1', difficulty: 'expert' }, { id: 'x2', difficulty: 'expert' }];
  const drawn = drawAdaptive(odd, new Set(), 'medium', makeRng(5));
  assert.ok(drawn && odd.includes(drawn), 'must fall back to whatever is unseen');
});

check('the adaptive draw returns nothing once every question is seen', () => {
  const seen = new Set(questions.map(q => q.id));
  assert.strictEqual(drawAdaptive(questions, seen, 'easy', makeRng(1)), null);
  assert.strictEqual(drawAdaptive([], [], 'easy', makeRng(1)), null, 'an array of asked ids works too');
});

console.log(`\n${passed} test groups passed\n`);
