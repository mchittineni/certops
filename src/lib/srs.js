/**
 * Leitner-box spaced repetition for flashcards, persisted in localStorage.
 * Five boxes, doubling-ish intervals. "Again" always resets to box 0 so a card
 * you got wrong comes back in the same session.
 */
import { KEYS } from './storage.js';

const KEY = KEYS.srs;
const DAY = 24 * 60 * 60 * 1000;
export const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 21];
export const MASTERED_BOX = 3;

function readStore() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

function writeStore(store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* storage full or blocked — reviews stay in-memory for this session */
  }
}

export function getCardState(cardId) {
  return readStore()[cardId] || { box: 0, dueAt: 0, reviews: 0, lapses: 0 };
}

export function recordReview(cardId, grade, now = Date.now()) {
  const store = readStore();
  const prev = store[cardId] || { box: 0, dueAt: 0, reviews: 0, lapses: 0 };
  const box = grade === 'again' ? 0 : Math.min(BOX_INTERVALS_DAYS.length - 1, prev.box + 1);
  const next = {
    box,
    dueAt: now + BOX_INTERVALS_DAYS[box] * DAY,
    reviews: prev.reviews + 1,
    lapses: prev.lapses + (grade === 'again' ? 1 : 0),
    lastReviewedAt: now
  };
  store[cardId] = next;
  writeStore(store);
  return next;
}

/** Due cards first, then never-seen cards, then everything else by soonest due. */
export function orderForStudy(cards, now = Date.now()) {
  const store = readStore();
  const bucket = card => {
    const s = store[card.id];
    if (!s) return 1;                 // new
    return s.dueAt <= now ? 0 : 2;    // due, then scheduled
  };
  return cards
    .map((card, i) => ({ card, i, bucket: bucket(card), dueAt: (store[card.id] || {}).dueAt || 0 }))
    .sort((a, b) => a.bucket - b.bucket || a.dueAt - b.dueAt || a.i - b.i)
    .map(x => x.card);
}

export function deckStats(cards, now = Date.now()) {
  const store = readStore();
  let mastered = 0, learning = 0, due = 0, unseen = 0;
  for (const card of cards) {
    const s = store[card.id];
    if (!s) { unseen++; continue; }
    if (s.box >= MASTERED_BOX) mastered++; else learning++;
    if (s.dueAt <= now) due++;
  }
  const total = cards.length || 1;
  return { total: cards.length, mastered, learning, due, unseen, masteryPct: Math.round((mastered / total) * 100) };
}

export function resetDeck(cards) {
  const store = readStore();
  for (const card of cards) delete store[card.id];
  writeStore(store);
}
