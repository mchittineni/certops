# ADR 0001 — Filesystem-as-source-of-truth content architecture

**Status:** Accepted · **Date:** 2026-08-27

## Context

The target is **~50 certifications × 500 questions ≈ 25,000 questions** plus flashcards,
authored incrementally over a long period, potentially by several people. (The catalogue
settled at 52 folders — the Top-50 list plus two foundational extras — so the real target is
nearer 26,000. The measurements below were taken at 50 and are not re-scaled; the conclusion
is not sensitive to 4%.)

Measured cost of the existing content: **1.5 KB per question** raw JavaScript,
**3.06× gzip ratio** (measured, not assumed).

| Scope | Raw | Gzipped |
| --- | --- | --- |
| 500 questions (one certification) | 747 KB | ~244 KB |
| 25,000 questions (all 50) | ~37 MB | ~12 MB |
| 52 blueprints (no questions) | ~110 KB | ~24 KB |

The conclusion that shaped everything else: **delivery is not the hard problem.** A
244 KB gzipped fetch, once per certification, browser-cached, is unremarkable — nobody
ever needs more than one certification's questions at a time. The hard problems are
(a) never shipping all of it at once, and (b) authoring 25,000 items without the
repository becoming unmaintainable.

## Decision

**1. One folder per certification; the filesystem is the source of truth.**

```
src/data/certs/<certId>/
  cert.js               blueprint: provider, code, category, tier, domains, weights, status
  questions/pack-*.js   default-exported arrays, ≤150 items each
  flashcards/pack-*.js
```

Everything about a certification is inside its folder. Nothing outside it needs editing
to add content — which is the property that makes 50 certifications and ~150 packs
tractable, and makes per-certification ownership (CODEOWNERS) possible.

**2. Three generated, committed index files.** `npm run build:content` scans the
filesystem and writes:

| File | Contents | Loaded |
| --- | --- | --- |
| `catalog.generated.js` | imports of all blueprints | eagerly (~24 KB gz) |
| `registry.generated.js` | one literal `import()` per non-empty pack | lazily, per pack |
| `manifest.generated.js` | counts by difficulty and domain | eagerly (small) |

A hand-maintained registry was the first design and was rejected: at ~150 packs it is a
single-file merge-conflict hotspot and pure tedium. Generation removes the step entirely.

**3. Import specifiers stay literal.** `pack('./x.js', () => import('./x.js'))` — the path
string is for validator messages, the arrow function's literal specifier is what lets the
bundler emit one lazily-fetched chunk per pack. `import(variable)` would break the
production build silently, which is why the registry is generated rather than dynamic.

**4. Empty packs are excluded from the registry.** A scaffolded certification has no
content; registering empty packs emitted 94 useless chunks at 47 planned certifications
(106 assets → 12).

**5. The catalogue renders from the manifest, never from content.** Counts, difficulty
spreads, and filters need numbers, not questions. This is what keeps the landing page cost
flat as the bank grows.

**6. Correctness is machine-enforced.** `npm run validate` fails on duplicate ids,
near-duplicate scenarios (same normalised scenario + question — the failure mode bulk
authoring actually produces), blueprint/domain mismatches, domain weights that do not sum
to 100, single-answer questions with ≠1 answer, non-HTTPS references, markup outside a
small tag allow-list, and — for a `live` certification — any remaining TODO placeholder or
zero content.

**7. `status: planned | live` gates the catalogue.** All 50 certifications exist as folders
immediately; only those with real content are launchable. This makes the roadmap concrete
without shipping empty modules.

## Consequences

**Good**

- Adding a certification is one command; adding content is one command plus authoring.
- Delivery stays flat: ~24 KB gz shell + blueprints, then ~244 KB gz per certification opened.
- Small packs mean readable diffs and near-zero merge conflicts.
- The 2026 roadmap is visible in the product, not just a document.

**Costs accepted**

- Three generated files must be regenerated after content changes (`npm run check` does it).
- Blueprints are eagerly loaded. At 52 that is ~24 KB gz; if the catalogue ever reaches
  several hundred certifications, split the catalogue by category and lazy-load per tab.
- 52 blueprint modules add 52 entries to the module graph. Kept deliberately (over inlining
  the blueprints as one JSON blob) because per-certification diffs stay readable.

## Alternatives rejected

| Option | Why not |
| --- | --- |
| Per-domain JSON shards fetched at runtime | Solves a delivery problem that does not exist at 500/cert; adds a build step and a fetch layer. |
| A backend + database | Nothing here needs a server. Reconsider only for cross-device progress sync, which is a progress feature, not a content one. |
| YAML/Markdown content + build step | Right answer *if* non-engineers start authoring. The validator already operates on plain objects, so the migration stays cheap. Not yet needed. |
| Docusaurus for the whole app | It is a docs SSG; this is a stateful app (timers, adaptive drawing, SRS scheduling). See `docs/CONTENT-ARCHITECTURE.md` §7. |

## Revisit when

- The bank passes ~5,000 questions → measure again; consider per-domain shards.
- Non-engineers start authoring → move packs to YAML with a build step.
- The catalogue passes ~150 certifications → lazy-load blueprints per category.
