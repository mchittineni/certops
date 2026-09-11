/**
 * Scores how much a question bank gives its own answer away through the form of
 * its options rather than their content.
 *
 * Shared by scripts/audit-distractors.mjs (which reports it) and
 * scripts/export-hf-dataset.mjs (which publishes it in the dataset card), so
 * the numbers in the card are the same ones the audit prints.
 */

/**
 * With 4 options, picking the longest — or the shortest — wins about 25% of the
 * time by chance. Either figure is a tell in both directions: too high and
 * "always pick it" works, too low and "always eliminate it" works. So both are
 * held inside one band around chance rather than merely capped.
 */
export const LENGTH_BAND = { min: 12, max: 40 };
export const THRESHOLDS = { ...LENGTH_BAND, strawman: 5, leak: 35, delta: 15 };

/** Distractors no candidate would weigh, which collapse a 4-way item to 1-way. */
export const STRAWMAN = [
  /\bmanually (inspect|copy|review|edit|track|check|transcribe)\b/i,
  /\bhardcode/i, /\bspreadsheet\b/i, /\bdo nothing\b/i, /\bunversioned\b/i,
  /\bemail (the|a) (secret|credential|password|key|token)/i,
  /\bwithout (any |centralized |proper )?(encryption|monitoring|logging|authentication|validation|review|oversight|backups?)\b/i,
  /\bdelete all\b/i, /\bnotepad\b/i, /\bsticky note/i, /\bUSB drive\b/i,
  /\bstore (all )?(secrets|credentials|passwords|keys) in (plain|a text|source|the code)/i,
  /\b(public|world-readable) S3 bucket\b/i, /\bmonolithic shared\b/i, /\bon every click\b/i,
  /\bplaintext configmap\b/i, /\broot token(s)? (in|to)\b/i
];

/** Words too common to signal that a stem and its key discuss the same thing. */
const STOP = new Set((
  'the a an of for in to and or with using use on is are which best most that this by as from ' +
  'all any into your their its when what how it be can should would need needs requirement ' +
  'requirements service services solution solutions configuration configure architecture ' +
  'satisfies these following approach option options team company customer data cloud'
).split(/\s+/));

export const terms = s => new Set(
  ((s || '').toLowerCase().match(/[a-z][a-z0-9-]{3,}/g) || []).filter(w => !STOP.has(w))
);

/**
 * @param {object[]} questions items with options[] and correctAnswers[]
 * @returns {null|{n, longest, strawman, leak, delta, breached, worst}} percentages,
 *   or null when nothing in the list is scoreable.
 */
/**
 * How often a term may appear across a bank's stems and still count as a
 * giveaway. A word the bank uses everywhere ("azure" in an Azure exam) tells a
 * candidate nothing; a word used by a handful of items ("gvisor", "snapstart")
 * points straight at one answer.
 */
const distinctiveCap = n => Math.max(3, Math.round(n * 0.02));

/**
 * The text a candidate actually reads while answering. Titles are deliberately
 * excluded: src/views/quiz.js renders the scenario and the question, and the
 * bank browser and results review are the only places a title is shown, where
 * the answer is already visible anyway.
 */
const stemOf = q => `${q.question} ${q.scenario}`;

const splitOptions = q => {
  const key = new Set(q.correctAnswers);
  const keys = q.options.filter(o => key.has(o.id));
  return { keys, distractors: q.options.filter(o => !key.has(o.id)) };
};

/**
 * @param {object[]} questions items with options[] and correctAnswers[]
 * @returns {null|{n, longest, strawman, leak, delta, breached, worst}} percentages,
 *   or null when nothing in the list is scoreable.
 */
export function scoreCertification(questions) {
  const usable = (questions || []).filter(q => q.options?.length && q.correctAnswers?.length);
  if (!usable.length) return null;

  // How widely each term is used across this bank's own stems, so that
  // distinctiveness is judged against the subject matter rather than English.
  const df = new Map();
  for (const q of usable) {
    for (const t of terms(stemOf(q))) df.set(t, (df.get(t) || 0) + 1);
  }
  const cap = distinctiveCap(usable.length);

  let longestHit = 0, longestN = 0, shortestHit = 0, shortestN = 0;
  let strawQ = 0, leakQ = 0;
  let keyLen = 0, keyN = 0, distLen = 0, distN = 0;
  const worst = [];

  for (const q of usable) {
    const { keys, distractors } = splitOptions(q);
    if (!keys.length || !distractors.length) continue;

    const lens = q.options.map(o => (o.text || '').length);
    const max = Math.max(...lens);
    const longest = q.options.filter(o => (o.text || '').length === max);
    const keyIds = new Set(keys.map(o => o.id));
    if (longest.length === 1) { longestN++; if (keyIds.has(longest[0].id)) longestHit++; }

    const min = Math.min(...lens);
    const shortest = q.options.filter(o => (o.text || '').length === min);
    if (shortest.length === 1) { shortestN++; if (keyIds.has(shortest[0].id)) shortestHit++; }

    keyLen += keys.reduce((s, o) => s + (o.text || '').length, 0); keyN += keys.length;
    distLen += distractors.reduce((s, o) => s + (o.text || '').length, 0); distN += distractors.length;

    const straw = distractors.some(o => STRAWMAN.some(re => re.test(o.text || '')));
    if (straw) strawQ++;

    const stem = terms(stemOf(q));
    const keyTerms = new Set(keys.flatMap(o => [...terms(o.text || '')]));
    const distTerms = new Set(distractors.flatMap(o => [...terms(o.text || '')]));
    const leaked = [...keyTerms].filter(
      t => stem.has(t) && !distTerms.has(t) && (df.get(t) || 0) <= cap
    );
    if (leaked.length) leakQ++;

    if (worst.length < 3 && straw && leaked.length && longest.length === 1 && keyIds.has(longest[0].id)) {
      worst.push({ id: q.id, leaked: leaked.slice(0, 3) });
    }
  }

  if (!longestN || !keyN || !distN) return null;

  const score = {
    n: usable.length,
    longest: (100 * longestHit) / longestN,
    shortest: shortestN ? (100 * shortestHit) / shortestN : null,
    strawman: (100 * strawQ) / usable.length,
    leak: (100 * leakQ) / usable.length,
    delta: keyLen / keyN - distLen / distN,
    worst
  };
  const outOfBand = v => v !== null && (v < LENGTH_BAND.min || v > LENGTH_BAND.max);
  score.breached = outOfBand(score.longest) || outOfBand(score.shortest) ||
    score.strawman > THRESHOLDS.strawman || score.leak > THRESHOLDS.leak ||
    score.delta > THRESHOLDS.delta;
  return score;
}
