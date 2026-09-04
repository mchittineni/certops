#!/usr/bin/env node
/**
 * Storage key migration test: verify returning users with converge_* data
 * have their theme, history, flashcard SRS schedule, daily streak, and role
 * seamlessly migrated to certops_* keys on boot.
 */
import assert from 'assert';

const store = {};
globalThis.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};

// a returning user's data, written under previous keys
const legacyHistory = [{ certId: 'aws-saa', percentage: 82, passed: true, total: 11, correct: 9, byDifficulty: {} }];
const legacySrs = { 'aws-saa-fc-1': { box: 3, dueAt: 0, reviews: 4, lapses: 1 } };
const legacyDaily = { '2026-08-20': { correct: 8, total: 10, percentage: 80, at: 1 } };
store.converge_theme = 'dark';
store.converge_history = JSON.stringify(legacyHistory);
store.converge_flashcard_srs = JSON.stringify(legacySrs);
store.converge_daily = JSON.stringify(legacyDaily);
store.converge_role = 'sre';

const { KEYS, migrateLegacyStorage } = await import('../src/lib/storage.js');
const moved = migrateLegacyStorage();

let passed = 0;
const check = async (name, fn) => { await fn(); console.log(`  ok  ${name}`); passed++; };

await check('all five keys are carried over', () => {
  assert.strictEqual(moved, 5);
  assert.strictEqual(localStorage.getItem(KEYS.theme), 'dark');
  assert.deepStrictEqual(JSON.parse(localStorage.getItem(KEYS.history)), legacyHistory);
  assert.deepStrictEqual(JSON.parse(localStorage.getItem(KEYS.srs)), legacySrs);
  assert.deepStrictEqual(JSON.parse(localStorage.getItem(KEYS.daily)), legacyDaily);
  assert.strictEqual(localStorage.getItem(KEYS.role), 'sre');
});

await check('the legacy keys are cleaned up', () => {
  for (const k of ['converge_theme', 'converge_history', 'converge_flashcard_srs', 'converge_daily', 'converge_role']) {
    assert.strictEqual(localStorage.getItem(k), null, `${k} should be removed`);
  }
});

await check('the modules read the migrated data', async () => {
  const progress = await import('../src/lib/progress.js');
  const srs = await import('../src/lib/srs.js');
  const daily = await import('../src/lib/daily.js');
  assert.strictEqual(progress.getAttempts('aws-saa').length, 1);
  assert.strictEqual(progress.getCertSummary('aws-saa').best.percentage, 82);
  assert.strictEqual(srs.getCardState('aws-saa-fc-1').box, 3);
  assert.deepStrictEqual(daily.getDailyResult('2026-08-20'), legacyDaily['2026-08-20']);
});

await check('migrating again is a no-op and never clobbers newer data', () => {
  localStorage.setItem(KEYS.theme, 'light');
  store.converge_theme = 'dark';           // a stale legacy value reappears
  assert.strictEqual(migrateLegacyStorage(), 0, 'nothing should be moved');
  assert.strictEqual(localStorage.getItem(KEYS.theme), 'light', 'current data must win');
  assert.strictEqual(localStorage.getItem('converge_theme'), null, 'stale key still cleaned up');
});

await check('a first-time user migrates nothing', () => {
  for (const k of Object.keys(store)) delete store[k];
  assert.strictEqual(migrateLegacyStorage(), 0);
  assert.strictEqual(localStorage.getItem(KEYS.history), null);
});

console.log(`\n${passed} migration checks passed\n`);
