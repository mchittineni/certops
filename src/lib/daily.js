/**
 * Daily Challenge — a mixed-certification quiz that is the same for the whole
 * day and reproducible from the date alone, so returning tomorrow gives a new
 * set without any server involvement.
 */
import { makeRng, shuffle } from './select.js';
import { KEYS } from './storage.js';

const KEY = KEYS.daily;
export const DAILY_SIZE = 10;
export const DAILY_CERT_COUNT = 3;

export function todayKey(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/** Seed derived from the date only — everyone gets the same challenge on the same day. */
export function dailySeed(key = todayKey()) {
  return Number(key.replace(/-/g, ''));
}

/**
 * Pick a bounded number of certifications for today rather than loading all of
 * them: at 50 live certifications, sampling the whole catalogue would mean 50
 * network fetches for a 10-question quiz.
 */
export function pickDailyCertIds(candidateIds, key = todayKey()) {
  return shuffle(candidateIds.slice().sort(), makeRng(dailySeed(key))).slice(0, DAILY_CERT_COUNT);
}

export function buildDailyQuestions(questions, key = todayKey()) {
  const ordered = questions.slice().sort((a, b) => a.id.localeCompare(b.id));
  return shuffle(ordered, makeRng(dailySeed(key) + 7)).slice(0, DAILY_SIZE);
}

export function getDailyResult(key = todayKey()) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    return all[key] || null;
  } catch {
    return null;
  }
}

export function recordDailyResult(result, key = todayKey()) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    all[key] = { correct: result.correct, total: result.total, percentage: result.percentage, at: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* ignore */
  }
}

/** Consecutive days completed, counting back from today. */
export function dailyStreak(now = new Date()) {
  let all;
  try {
    all = JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return 0;
  }
  let streak = 0;
  const cursor = new Date(now);
  while (all[todayKey(cursor)]) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
