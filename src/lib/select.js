/**
 * Question selection: difficulty filtering, domain-weighted sampling, and the
 * adaptive engine. Pure functions — no DOM, no storage — so they are testable
 * with `node scripts/test-select.mjs`.
 */
export const LEVELS = ['easy', 'medium', 'hard'];

export const DIFFICULTY_OPTIONS = [
  { id: 'easy', label: 'Easy', blurb: 'Recall and single-service questions. Build the vocabulary first.' },
  { id: 'medium', label: 'Medium', blurb: 'Applied scenarios with plausible distractors. Exam-realistic baseline.' },
  { id: 'hard', label: 'Hard', blurb: 'Multi-service trade-offs, multi-answer, and cost/RTO constraints.' },
  { id: 'mixed', label: 'Mixed', blurb: 'The real blueprint spread, sampled across every difficulty band.' },
  { id: 'adaptive', label: 'Adaptive', blurb: 'Starts medium, then escalates or eases with every answer. No going back.' }
];

/** Mulberry32 — a tiny seeded PRNG so a session can be reproduced from its seed. */
export function makeRng(seed = Date.now()) {
  let a = seed >>> 0;
  return function rng() {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle(items, rng = Math.random) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function filterByDifficulty(questions, difficulty) {
  if (!difficulty || difficulty === 'mixed' || difficulty === 'adaptive') return questions.slice();
  const exact = questions.filter(q => q.difficulty === difficulty);
  return exact.length ? exact : questions.slice();
}

export function countByDifficulty(items) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  for (const it of items) if (counts[it.difficulty] !== undefined) counts[it.difficulty]++;
  return counts;
}

/**
 * Sample `count` questions from a pool, distributing them across the
 * certification's domains in proportion to the published blueprint weights.
 * Falls back to a plain shuffle when a domain runs out of content.
 */
export function sampleWeightedByDomain(pool, cert, count, rng = Math.random) {
  if (!cert || !cert.domains || pool.length <= count) return shuffle(pool, rng).slice(0, count);

  const totalWeight = cert.domains.reduce((s, d) => s + (d.weight || 0), 0) || 1;
  const byDomain = new Map(cert.domains.map(d => [d.id, shuffle(pool.filter(q => q.domainId === d.id), rng)]));

  const picked = [];
  for (const d of cert.domains) {
    const quota = Math.round(((d.weight || 0) / totalWeight) * count);
    const bucket = byDomain.get(d.id) || [];
    picked.push(...bucket.splice(0, quota));
  }

  // Top up (or trim) to land exactly on `count`.
  if (picked.length < count) {
    const chosen = new Set(picked.map(q => q.id));
    const remainder = shuffle(pool.filter(q => !chosen.has(q.id)), rng);
    picked.push(...remainder.slice(0, count - picked.length));
  }
  return shuffle(picked.slice(0, count), rng);
}

/**
 * Build a fixed-length session for easy / medium / hard / mixed.
 * Adaptive sessions do not use this — they draw one question at a time.
 */
export function buildSession(questions, { cert, difficulty = 'mixed', count = 20, domainId = null, seed } = {}) {
  const rng = makeRng(seed);
  let pool = questions;
  if (domainId) {
    const scoped = pool.filter(q => q.domainId === domainId);
    if (scoped.length) pool = scoped;
  }
  pool = filterByDifficulty(pool, difficulty);
  const size = Math.min(count, pool.length);
  return difficulty === 'mixed'
    ? sampleWeightedByDomain(pool, cert, size, rng)
    : shuffle(pool, rng).slice(0, size);
}

/** Two right in a row escalates, two wrong in a row eases. */
export function nextAdaptiveLevel(level, results) {
  const idx = Math.max(0, LEVELS.indexOf(level));
  const tail = results.slice(-2);
  if (tail.length === 2 && tail.every(r => r === true)) return LEVELS[Math.min(LEVELS.length - 1, idx + 1)];
  if (tail.length === 2 && tail.every(r => r === false)) return LEVELS[Math.max(0, idx - 1)];
  return LEVELS[idx];
}

/** Draw the next unseen question at `level`, widening to neighbouring levels if that band is exhausted. */
export function drawAdaptive(pool, askedIds, level, rng = Math.random) {
  const seen = askedIds instanceof Set ? askedIds : new Set(askedIds);
  const unseen = pool.filter(q => !seen.has(q.id));
  if (!unseen.length) return null;
  const start = Math.max(0, LEVELS.indexOf(level));
  const order = [start, start - 1, start + 1, start - 2, start + 2]
    .filter(i => i >= 0 && i < LEVELS.length);
  for (const i of order) {
    const band = unseen.filter(q => q.difficulty === LEVELS[i]);
    if (band.length) return shuffle(band, rng)[0];
  }
  return shuffle(unseen, rng)[0];
}

export function isCorrect(question, answer) {
  const given = (answer || []).slice().sort().join(',');
  const expected = (question.correctAnswers || []).slice().sort().join(',');
  return given !== '' && given === expected;
}

/** Recommended session length per mode, capped by what the bank actually holds. */
export function recommendedCount(mode, available) {
  const target = { exam: 65, practice: 20, quick: 10, adaptive: 15 }[mode] || 20;
  return Math.max(1, Math.min(target, available));
}
