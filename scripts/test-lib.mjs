#!/usr/bin/env node
/**
 * Unit tests for the persistence libraries: spaced repetition, daily challenge,
 * and attempt history.
 *
 * These modules all read localStorage at call time and are written to survive a
 * hostile store — corrupt JSON from an older schema, a quota-full setItem, a
 * browser with storage blocked entirely. Those paths never run in the happy-path
 * app tests, so they are exercised explicitly here: a silent throw out of any of
 * them takes down a render.
 */
import assert from 'assert';

let passed = 0;
const check = async (name, fn) => {
  await fn();
  console.log(`  ok  ${name}`);
  passed++;
};

/** Swappable stores, so a test can choose how localStorage misbehaves. */
function memoryStore(initial = {}) {
  const data = { ...initial };
  return {
    data,
    getItem: k => (k in data ? data[k] : null),
    setItem: (k, v) => { data[k] = String(v); },
    removeItem: k => { delete data[k]; },
    clear: () => { for (const k of Object.keys(data)) delete data[k]; }
  };
}

/** A browser with storage disabled: every access throws, as Safari private mode used to. */
function throwingStore() {
  const boom = () => { throw new Error('SecurityError: storage is disabled'); };
  return { getItem: boom, setItem: boom, removeItem: boom, clear: boom };
}

const use = store => { globalThis.localStorage = store; };
use(memoryStore());

const { KEYS, migrateLegacyStorage } = await import('../src/lib/storage.js');
const srs = await import('../src/lib/srs.js');
const daily = await import('../src/lib/daily.js');
const progress = await import('../src/lib/progress.js');

const cards = [{ id: 'c1' }, { id: 'c2' }, { id: 'c3' }];
const DAY = 24 * 60 * 60 * 1000;
const T0 = 1_700_000_000_000;   // fixed clock — no Date.now() in assertions

// ---------------------------------------------------------------- srs

await check('a new card starts in box 0, unseen and due', () => {
  use(memoryStore());
  const state = srs.getCardState('c1');
  assert.deepEqual(state, { box: 0, dueAt: 0, reviews: 0, lapses: 0 });
});

await check('a correct review promotes one box and schedules by the box interval', () => {
  use(memoryStore());
  const first = srs.recordReview('c1', 'good', T0);
  assert.equal(first.box, 1);
  assert.equal(first.dueAt, T0 + srs.BOX_INTERVALS_DAYS[1] * DAY);
  assert.equal(first.reviews, 1);
  assert.equal(first.lapses, 0);

  const second = srs.recordReview('c1', 'good', T0);
  assert.equal(second.box, 2);
  assert.equal(second.dueAt, T0 + srs.BOX_INTERVALS_DAYS[2] * DAY);
  assert.equal(second.reviews, 2);
});

await check('promotion stops at the last box instead of running off the interval table', () => {
  use(memoryStore());
  let state;
  for (let i = 0; i < 10; i++) state = srs.recordReview('c1', 'good', T0);
  assert.equal(state.box, srs.BOX_INTERVALS_DAYS.length - 1);
  assert.equal(state.dueAt, T0 + srs.BOX_INTERVALS_DAYS.at(-1) * DAY);
  assert.ok(Number.isFinite(state.dueAt), 'dueAt must stay a real timestamp at the ceiling');
});

await check('"again" resets to box 0, counts a lapse, and makes the card due now', () => {
  use(memoryStore());
  srs.recordReview('c1', 'good', T0);
  srs.recordReview('c1', 'good', T0);
  const lapsed = srs.recordReview('c1', 'again', T0);
  assert.equal(lapsed.box, 0);
  assert.equal(lapsed.lapses, 1);
  assert.equal(lapsed.dueAt, T0, 'a failed card must come back in the same session');
  assert.equal(lapsed.reviews, 3, 'a lapse is still a review');
});

await check('study order is due cards, then new cards, then scheduled by soonest due', () => {
  use(memoryStore());
  srs.recordReview('c1', 'good', T0 - 5 * DAY);          // box 1, due 4 days ago
  srs.recordReview('c3', 'good', T0);                    // box 1, due tomorrow
  const order = srs.orderForStudy(cards, T0).map(c => c.id);
  assert.deepEqual(order, ['c1', 'c2', 'c3']);
});

await check('study order is stable for cards in the same bucket', () => {
  use(memoryStore());
  const order = srs.orderForStudy(cards, T0).map(c => c.id);
  assert.deepEqual(order, ['c1', 'c2', 'c3'], 'all-new deck keeps authored order');
});

await check('deck stats separate mastered, learning, due, and unseen', () => {
  use(memoryStore());
  for (let i = 0; i < srs.MASTERED_BOX; i++) srs.recordReview('c1', 'good', T0);
  srs.recordReview('c2', 'good', T0 - 5 * DAY);
  const stats = srs.deckStats(cards, T0);
  assert.equal(stats.total, 3);
  assert.equal(stats.mastered, 1, 'c1 reached the mastered box');
  assert.equal(stats.learning, 1, 'c2 is still learning');
  assert.equal(stats.unseen, 1, 'c3 was never reviewed');
  assert.equal(stats.due, 1, 'only c2 has come due');
  assert.equal(stats.masteryPct, 33);
});

await check('deck stats on an empty deck report 0%, not NaN', () => {
  use(memoryStore());
  const stats = srs.deckStats([], T0);
  assert.deepEqual(stats, { total: 0, mastered: 0, learning: 0, due: 0, unseen: 0, masteryPct: 0 });
});

await check('resetting a deck clears its cards and leaves other decks alone', () => {
  use(memoryStore());
  srs.recordReview('c1', 'good', T0);
  srs.recordReview('other-deck-card', 'good', T0);
  srs.resetDeck(cards);
  assert.equal(srs.getCardState('c1').reviews, 0, 'reset card is unseen again');
  assert.equal(srs.getCardState('other-deck-card').reviews, 1, 'another deck must survive');
});

await check('corrupt srs JSON is treated as an empty schedule, not a crash', () => {
  use(memoryStore({ [KEYS.srs]: '{not json' }));
  assert.deepEqual(srs.getCardState('c1'), { box: 0, dueAt: 0, reviews: 0, lapses: 0 });
  assert.equal(srs.deckStats(cards, T0).unseen, 3);
  assert.deepEqual(srs.orderForStudy(cards, T0).map(c => c.id), ['c1', 'c2', 'c3']);
  assert.equal(srs.recordReview('c1', 'good', T0).box, 1, 'a review still works over corrupt data');
});

await check('reviews still work in-session when storage is blocked', () => {
  use(throwingStore());
  const state = srs.recordReview('c1', 'good', T0);
  assert.equal(state.box, 1, 'the review is computed even though it cannot be saved');
  assert.deepEqual(srs.getCardState('c1'), { box: 0, dueAt: 0, reviews: 0, lapses: 0 });
  assert.doesNotThrow(() => srs.resetDeck(cards));
  assert.doesNotThrow(() => srs.deckStats(cards, T0));
});

// ---------------------------------------------------------------- daily

await check('the day key is zero-padded so it sorts lexicographically', () => {
  assert.equal(daily.todayKey(new Date(2026, 0, 5)), '2026-01-05');
  assert.equal(daily.todayKey(new Date(2026, 10, 30)), '2026-11-30');
});

await check('the same date always produces the same challenge', () => {
  const ids = ['aws-clf', 'aws-saa', 'azure-az900', 'gcp-ace', 'k8s-cka'];
  const a = daily.pickDailyCertIds(ids, '2026-03-04');
  const b = daily.pickDailyCertIds(ids.slice().reverse(), '2026-03-04');
  assert.deepEqual(a, b, 'input order must not change the day\'s picks');
  assert.equal(a.length, daily.DAILY_CERT_COUNT);
});

await check('a different date produces a different challenge', () => {
  const ids = ['aws-clf', 'aws-saa', 'azure-az900', 'gcp-ace', 'k8s-cka', 'extra-1', 'extra-2'];
  const days = ['2026-03-04', '2026-03-05', '2026-03-06', '2026-03-07'];
  const picks = days.map(d => daily.pickDailyCertIds(ids, d).join(','));
  assert.ok(new Set(picks).size > 1, 'four consecutive days should not all be identical');
});

await check('the certification count is bounded so a 10-question quiz cannot fetch 50 packs', () => {
  const many = Array.from({ length: 50 }, (_, i) => `cert-${i}`);
  assert.equal(daily.pickDailyCertIds(many, '2026-03-04').length, daily.DAILY_CERT_COUNT);
});

await check('the daily set is capped and deterministic, and takes what exists when short', () => {
  const questions = Array.from({ length: 40 }, (_, i) => ({ id: `q-${String(i).padStart(2, '0')}` }));
  const picked = daily.buildDailyQuestions(questions, '2026-03-04');
  assert.equal(picked.length, daily.DAILY_SIZE);
  assert.deepEqual(picked, daily.buildDailyQuestions(questions.slice().reverse(), '2026-03-04'));
  assert.equal(new Set(picked.map(q => q.id)).size, daily.DAILY_SIZE, 'no repeats within a day');
  assert.equal(daily.buildDailyQuestions(questions.slice(0, 4), '2026-03-04').length, 4);
});

await check('a recorded result is readable back for that day only', () => {
  use(memoryStore());
  assert.equal(daily.getDailyResult('2026-03-04'), null);
  daily.recordDailyResult({ correct: 8, total: 10, percentage: 80 }, '2026-03-04');
  const saved = daily.getDailyResult('2026-03-04');
  assert.equal(saved.correct, 8);
  assert.equal(saved.percentage, 80);
  assert.equal(daily.getDailyResult('2026-03-05'), null, 'tomorrow is a fresh challenge');
});

await check('the streak counts consecutive days back from today and stops at the gap', () => {
  use(memoryStore());
  const today = new Date(2026, 2, 10);
  for (const key of ['2026-03-10', '2026-03-09', '2026-03-08', '2026-03-06']) {
    daily.recordDailyResult({ correct: 5, total: 10, percentage: 50 }, key);
  }
  assert.equal(daily.dailyStreak(today), 3, 'the 7th is missing, so the streak stops there');
});

await check('the streak is 0 with nothing recorded and survives a month boundary', () => {
  use(memoryStore());
  assert.equal(daily.dailyStreak(new Date(2026, 2, 10)), 0);
  for (const key of ['2026-03-01', '2026-02-28', '2026-02-27']) {
    daily.recordDailyResult({ correct: 5, total: 10, percentage: 50 }, key);
  }
  assert.equal(daily.dailyStreak(new Date(2026, 2, 1)), 3, 'March 1 must count back into February');
});

await check('corrupt daily JSON reads as no result and a 0 streak', () => {
  use(memoryStore({ [KEYS.daily]: 'null}{' }));
  assert.equal(daily.getDailyResult('2026-03-04'), null);
  assert.equal(daily.dailyStreak(new Date(2026, 2, 10)), 0);
  assert.doesNotThrow(() => daily.recordDailyResult({ correct: 1, total: 1, percentage: 100 }, '2026-03-04'));
});

await check('blocked storage degrades the daily challenge instead of breaking it', () => {
  use(throwingStore());
  assert.equal(daily.getDailyResult('2026-03-04'), null);
  assert.equal(daily.dailyStreak(new Date(2026, 2, 10)), 0);
  assert.doesNotThrow(() => daily.recordDailyResult({ correct: 1, total: 1, percentage: 100 }, '2026-03-04'));
});

// ---------------------------------------------------------------- progress

const attempt = (certId, percentage, extra = {}) => ({
  certId, percentage, correct: percentage, total: 100, mode: 'practice', ...extra
});

await check('attempts are stored newest first and filtered by certification', () => {
  use(memoryStore());
  progress.recordAttempt(attempt('aws-saa', 60));
  progress.recordAttempt(attempt('gcp-ace', 70));
  progress.recordAttempt(attempt('aws-saa', 80));
  assert.equal(progress.getAttempts().length, 3);
  assert.deepEqual(progress.getAttempts('aws-saa').map(a => a.percentage), [80, 60]);
  assert.equal(progress.getAttempts('nope').length, 0);
  assert.ok(progress.getAttempts()[0].at, 'each attempt is timestamped');
});

await check('history is capped so localStorage cannot grow without bound', () => {
  use(memoryStore());
  for (let i = 0; i < 240; i++) progress.recordAttempt(attempt('aws-saa', i % 100));
  assert.equal(progress.getAttempts().length, 200);
});

await check('the summary reports best, last, and average — and null with no attempts', () => {
  use(memoryStore());
  assert.equal(progress.getCertSummary('aws-saa'), null);
  progress.recordAttempt(attempt('aws-saa', 40));
  progress.recordAttempt(attempt('aws-saa', 90));
  progress.recordAttempt(attempt('aws-saa', 50));
  const summary = progress.getCertSummary('aws-saa');
  assert.equal(summary.attempts, 3);
  assert.equal(summary.best.percentage, 90);
  assert.equal(summary.last.percentage, 50, 'last means most recent, not best');
  assert.equal(summary.avg, 60);
});

await check('difficulty accuracy accumulates across attempts and ignores unknown bands', () => {
  use(memoryStore());
  progress.recordAttempt(attempt('aws-saa', 50, {
    byDifficulty: { easy: { correct: 4, total: 5 }, hard: { correct: 1, total: 4 }, expert: { correct: 9, total: 9 } }
  }));
  progress.recordAttempt(attempt('aws-saa', 50, { byDifficulty: { easy: { correct: 3, total: 3 } } }));
  progress.recordAttempt(attempt('aws-saa', 50));   // no byDifficulty at all
  const acc = progress.getDifficultyAccuracy('aws-saa');
  assert.deepEqual(acc.easy, { correct: 7, total: 8 });
  assert.deepEqual(acc.medium, { correct: 0, total: 0 });
  assert.deepEqual(acc.hard, { correct: 1, total: 4 });
  assert.equal(acc.expert, undefined, 'an unknown band must not be invented');
});

await check('clearing history empties it without touching other keys', () => {
  const store = memoryStore({ [KEYS.theme]: 'dark' });
  use(store);
  progress.recordAttempt(attempt('aws-saa', 50));
  progress.clearHistory();
  assert.equal(progress.getAttempts().length, 0);
  assert.equal(store.getItem(KEYS.theme), 'dark', 'theme is not history');
});

await check('history that is corrupt or the wrong shape reads as empty', () => {
  use(memoryStore({ [KEYS.history]: '{"not":"an array"}' }));
  assert.deepEqual(progress.getAttempts(), [], 'an object where an array belongs is discarded');
  use(memoryStore({ [KEYS.history]: '[[[' }));
  assert.deepEqual(progress.getAttempts(), []);
  assert.equal(progress.getCertSummary('aws-saa'), null);
});

await check('blocked storage keeps history read-only rather than throwing', () => {
  use(throwingStore());
  assert.deepEqual(progress.getAttempts(), []);
  assert.doesNotThrow(() => progress.recordAttempt(attempt('aws-saa', 50)));
  assert.doesNotThrow(() => progress.clearHistory());
  assert.deepEqual(progress.getDifficultyAccuracy('aws-saa').easy, { correct: 0, total: 0 });
});

// ---------------------------------------------------------------- storage keys

await check('every key is namespaced and unique', () => {
  const values = Object.values(KEYS);
  assert.equal(new Set(values).size, values.length, 'two features sharing a key would overwrite each other');
  for (const v of values) assert.ok(v.startsWith('certops_'), `${v} is not namespaced`);
});

await check('migration returns the number of keys it moved', () => {
  use(memoryStore({ converge_history: '[]', converge_theme: 'dark' }));
  assert.equal(migrateLegacyStorage(), 2);
  assert.equal(migrateLegacyStorage(), 0, 'a second boot has nothing left to move');
});

await check('migration is a no-op when storage is blocked', () => {
  use(throwingStore());
  assert.equal(migrateLegacyStorage(), 0);
});

console.log(`\n${passed} library checks passed`);
