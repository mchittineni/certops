#!/usr/bin/env node
/**
 * Unit tests for the lazy content loader.
 *
 * Packs arrive as separate chunks over the network, so the interesting cases are
 * the ones the app tests never hit: a chunk that fails to load, two views asking
 * for the same certification at once, and a certification with no packs at all.
 */
import assert from 'assert';

let passed = 0;
const check = async (name, fn) => {
  await fn();
  console.log(`  ok  ${name}`);
  passed++;
};

const { CONTENT_REGISTRY } = await import('../src/data/registry.generated.js');
const { loadCertContent, getCachedCertContent } = await import('../src/data/loader.js');

// Registry entries are plain objects, so a test can stand in its own packs.
let loadCount = 0;
CONTENT_REGISTRY['test-ok'] = {
  questions: [{ path: 'test/q', load: async () => { loadCount++; return { default: [{ id: 'q1' }, { id: 'q2' }] }; } }],
  flashcards: [{ path: 'test/f', load: async () => ({ default: [{ id: 'c1' }] }) }]
};
CONTENT_REGISTRY['test-broken'] = {
  questions: [{ path: 'test/broken', load: async () => { throw new Error('Failed to fetch dynamically imported module'); } }],
  flashcards: []
};
CONTENT_REGISTRY['test-multi-pack'] = {
  questions: [
    { path: 'test/p1', load: async () => ({ default: [{ id: 'a' }] }) },
    { path: 'test/p2', load: async () => ({ default: [{ id: 'b' }] }) },
    { path: 'test/p3', load: async () => ({ default: undefined }) }
  ],
  flashcards: []
};

await check('nothing is cached before the first load', () => {
  assert.strictEqual(getCachedCertContent('test-ok'), null);
});

await check('a load returns questions and flashcards together', async () => {
  const content = await loadCertContent('test-ok');
  assert.strictEqual(content.certId, 'test-ok');
  assert.deepStrictEqual(content.questions.map(q => q.id), ['q1', 'q2']);
  assert.deepStrictEqual(content.flashcards.map(c => c.id), ['c1']);
  assert.strictEqual(getCachedCertContent('test-ok'), content, 'the cache returns the same object');
});

await check('a second load is served from cache without re-fetching the chunk', async () => {
  const before = loadCount;
  const content = await loadCertContent('test-ok');
  assert.strictEqual(loadCount, before, 'a cached certification must not hit the network again');
  assert.strictEqual(content.questions.length, 2);
});

await check('concurrent loads share one in-flight request', async () => {
  let calls = 0;
  CONTENT_REGISTRY['test-race'] = {
    questions: [{ path: 'test/race', load: async () => { calls++; return { default: [{ id: 'r1' }] }; } }],
    flashcards: []
  };
  const [a, b, c] = await Promise.all([
    loadCertContent('test-race'),
    loadCertContent('test-race'),
    loadCertContent('test-race')
  ]);
  assert.strictEqual(calls, 1, 'three views opening at once must not fetch three times');
  assert.strictEqual(a, b);
  assert.strictEqual(b, c);
});

await check('packs are concatenated in registry order and an empty pack is skipped', async () => {
  const content = await loadCertContent('test-multi-pack');
  assert.deepStrictEqual(content.questions.map(q => q.id), ['a', 'b'],
    'a pack exporting nothing must not become undefined in the pool');
});

await check('a certification with no registry entry loads as empty, not as an error', async () => {
  const content = await loadCertContent('cert-that-has-no-packs');
  assert.deepStrictEqual(content, { certId: 'cert-that-has-no-packs', questions: [], flashcards: [] });
});

await check('a failed chunk rejects and is not cached', async () => {
  await assert.rejects(() => loadCertContent('test-broken'), /dynamically imported module/);
  assert.strictEqual(getCachedCertContent('test-broken'), null, 'a failure must not poison the cache');
});

await check('a failed load can be retried after the network comes back', async () => {
  let attempt = 0;
  CONTENT_REGISTRY['test-retry'] = {
    questions: [{
      path: 'test/retry',
      load: async () => {
        attempt++;
        if (attempt === 1) throw new Error('offline');
        return { default: [{ id: 'later' }] };
      }
    }],
    flashcards: []
  };
  await assert.rejects(() => loadCertContent('test-retry'), /offline/);
  const content = await loadCertContent('test-retry');
  assert.deepStrictEqual(content.questions.map(q => q.id), ['later'],
    'the in-flight entry must be cleared on failure, or a retry would return the old rejection');
});

await check('every real registry entry is shaped the way the loader expects', () => {
  for (const [certId, entry] of Object.entries(CONTENT_REGISTRY)) {
    if (certId.startsWith('test-')) continue;
    for (const kind of ['questions', 'flashcards']) {
      for (const pack of entry[kind] || []) {
        assert.ok(typeof pack.path === 'string' && pack.path, `${certId} ${kind} pack has no path`);
        assert.strictEqual(typeof pack.load, 'function', `${certId} ${pack.path} is not loadable`);
      }
    }
  }
});

console.log(`\n${passed} loader checks passed`);
