import { CONTENT_REGISTRY } from './registry.generated.js';

export { getCertById, CERTIFICATIONS, LIVE_CERTIFICATIONS, PROVIDERS, TIERS } from './catalog.generated.js';

const cache = new Map();
const inflight = new Map();

async function loadPacks(packs) {
  const modules = await Promise.all(packs.map(p => p.load()));
  return modules.flatMap(m => m.default || []);
}

/**
 * Lazily load every question and flashcard for one certification.
 * Cached after the first call, so switching between modes is instant.
 */
export function loadCertContent(certId) {
  if (cache.has(certId)) return Promise.resolve(cache.get(certId));
  if (inflight.has(certId)) return inflight.get(certId);

  const entry = CONTENT_REGISTRY[certId] || { questions: [], flashcards: [] };
  const promise = Promise.all([
    loadPacks(entry.questions || []),
    loadPacks(entry.flashcards || [])
  ]).then(([questions, flashcards]) => {
    const content = { certId, questions, flashcards };
    cache.set(certId, content);
    inflight.delete(certId);
    return content;
  }).catch(err => {
    inflight.delete(certId);
    throw err;
  });

  inflight.set(certId, promise);
  return promise;
}

export function getCachedCertContent(certId) {
  return cache.get(certId) || null;
}

