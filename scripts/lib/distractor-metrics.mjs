/**
 * Scores how much a question bank gives its own answer away through the form of
 * its options rather than their content.
 *
 * Shared by scripts/audit-distractors.mjs (which reports it) and
 * scripts/export-hf-dataset.mjs (which publishes it in the dataset card), so
 * the numbers in the card are the same ones the audit prints.
 */

/** With 4 options, picking the longest should win ~25% of the time. */
export const THRESHOLDS = { longest: 40, strawman: 5, leak: 35, delta: 15 };

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
export function scoreCertification(questions) {
  const usable = (questions || []).filter(q => q.options?.length && q.correctAnswers?.length);
  if (!usable.length) return null;

  let longestHit = 0, longestN = 0, strawQ = 0, leakQ = 0;
  let keyLen = 0, keyN = 0, distLen = 0, distN = 0;
  const worst = [];

  for (const q of usable) {
    const key = new Set(q.correctAnswers);
    const opts = q.options.map(o => ({ ok: key.has(o.id), text: o.text || '', len: (o.text || '').length }));
    const keys = opts.filter(o => o.ok);
    const distractors = opts.filter(o => !o.ok);
    if (!keys.length || !distractors.length) continue;

    const max = Math.max(...opts.map(o => o.len));
    const longest = opts.filter(o => o.len === max);
    if (longest.length === 1) { longestN++; if (longest[0].ok) longestHit++; }

    keyLen += keys.reduce((s, o) => s + o.len, 0); keyN += keys.length;
    distLen += distractors.reduce((s, o) => s + o.len, 0); distN += distractors.length;

    const straw = distractors.some(o => STRAWMAN.some(re => re.test(o.text)));
    if (straw) strawQ++;

    const stem = terms(`${q.title} ${q.question}`);
    const keyTerms = new Set(keys.flatMap(o => [...terms(o.text)]));
    const distTerms = new Set(distractors.flatMap(o => [...terms(o.text)]));
    const leaked = [...keyTerms].filter(t => stem.has(t) && !distTerms.has(t));
    if (leaked.length) leakQ++;

    if (worst.length < 3 && straw && leaked.length && longest.length === 1 && longest[0].ok) {
      worst.push({ id: q.id, leaked: leaked.slice(0, 3) });
    }
  }

  if (!longestN || !keyN || !distN) return null;

  const score = {
    n: usable.length,
    longest: (100 * longestHit) / longestN,
    strawman: (100 * strawQ) / usable.length,
    leak: (100 * leakQ) / usable.length,
    delta: keyLen / keyN - distLen / distN,
    worst
  };
  score.breached = score.longest > THRESHOLDS.longest || score.strawman > THRESHOLDS.strawman ||
    score.leak > THRESHOLDS.leak || score.delta > THRESHOLDS.delta;
  return score;
}
