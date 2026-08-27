import { CERTIFICATIONS } from '../../src/data/catalog.generated.js';
import { CONTENT_REGISTRY, DIFFICULTIES } from '../../src/data/registry.generated.js';

export { CERTIFICATIONS, CONTENT_REGISTRY, DIFFICULTIES };

async function loadPacks(packs) {
  const out = [];
  for (const p of packs) {
    const mod = await p.load();
    if (!Array.isArray(mod.default)) throw new Error(`Pack ${p.path} does not default-export an array`);
    out.push({ pack: p.path, items: mod.default });
  }
  return out;
}

/** Load every pack for every certification, keeping pack provenance for error messages. */
export async function loadAllContent() {
  const result = {};
  for (const cert of CERTIFICATIONS) {
    const entry = CONTENT_REGISTRY[cert.id] || {};
    result[cert.id] = {
      cert,
      questionPacks: await loadPacks(entry.questions || []),
      flashcardPacks: await loadPacks(entry.flashcards || [])
    };
  }
  return result;
}

export function flatten(packs) {
  return packs.flatMap(p => p.items.map(item => ({ item, pack: p.pack })));
}

export function countByDifficulty(items) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  for (const it of items) if (counts[it.difficulty] !== undefined) counts[it.difficulty]++;
  return counts;
}

export function countByDomain(items) {
  const counts = {};
  for (const it of items) counts[it.domainId] = (counts[it.domainId] || 0) + 1;
  return counts;
}
