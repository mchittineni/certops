/** Attempt history and personal bests, persisted in localStorage. */
import { KEYS } from './storage.js';

const KEY = KEYS.history;
const MAX_ENTRIES = 200;

function read() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(entries) {
  try {
    localStorage.setItem(KEY, JSON.stringify(entries.slice(0, MAX_ENTRIES)));
  } catch {
    /* ignore */
  }
}

export function recordAttempt(attempt) {
  const entries = read();
  entries.unshift({ ...attempt, at: Date.now() });
  write(entries);
  return entries;
}

export function getAttempts(certId) {
  const entries = read();
  return certId ? entries.filter(e => e.certId === certId) : entries;
}

export function getCertSummary(certId) {
  const attempts = getAttempts(certId);
  if (!attempts.length) return null;
  const best = attempts.reduce((a, b) => (b.percentage > a.percentage ? b : a));
  const last = attempts[0];
  const avg = Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / attempts.length);
  return { attempts: attempts.length, best, last, avg };
}

/** Per-difficulty accuracy across all recorded attempts — drives the "weakest band" hint. */
export function getDifficultyAccuracy(certId) {
  const acc = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
  for (const attempt of getAttempts(certId)) {
    for (const [band, stats] of Object.entries(attempt.byDifficulty || {})) {
      if (!acc[band]) continue;
      acc[band].correct += stats.correct || 0;
      acc[band].total += stats.total || 0;
    }
  }
  return acc;
}

export function clearHistory() {
  write([]);
}
