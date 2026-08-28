# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version tracks the **application**, not the size of the question bank. Content
progress is tracked by `npm run stats` and in
[docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md).

## [Unreleased]

### Content
- Scaled **AWS Certified Solutions Architect – Associate (`aws-saa`)** question bank and flashcard deck to **250 questions** and **250 flashcards** across 10 modular packs.
- Activated and verified **Microsoft Azure Administrator Associate (`azure-az104`)** blueprint, adding **250 exam questions** and **250 flashcards** across 10 modular packs.
- Balanced and randomized option placement across all 536 questions in the bank to ensure even distribution across choices A, B, C, and D.
- Added `scripts/shuffle-options.mjs` utility for maintaining balanced option positions.

## [0.1.0] — 2026-08-27

First public release. The application is complete; the content bank is not — 47
questions against a 500-per-certification target, which is the whole roadmap.

### Study modes

- **Exam simulation** — timed, domain-weighted sampling in published blueprint
  proportions, scored against the real passing threshold, with per-domain and
  per-difficulty breakdowns, flag-for-review, and a question navigator.
- **Practice & study** — untimed, with an explicit *Check Answer* step so a
  multi-answer question is not spoiled by the first click.
- **Quick quiz** — ten questions, answers lock once checked.
- **Flashcards** — Leitner-box spaced repetition across five boxes; due cards return
  first, "Again" requeues within the session, mastery persists.
- **Question bank** — full-text search over every scenario, option, and explanation,
  filtered by certification, difficulty, and domain, paginated at 25 per page.
- **Daily challenge** — ten questions drawn from three certifications, identical for
  everyone on a given day and reproducible from the date alone, with a completion streak.

### Difficulty

- Easy / medium / hard / mixed / **adaptive** — one selector governing every mode.
- Adaptive starts at medium; two correct in a row escalates a band, two wrong eases one.
  Linear with no going back, and in exam mode it adapts without revealing correctness.
- Mixed samples across both difficulty bands and domains in blueprint proportions.

### Catalogue

- 52 certifications scaffolded across six disciplines: Cloud Engineering, DevOps & SRE,
  Kubernetes & Cloud Native, Platform Engineering, FinOps, and DevSecOps & Security.
- 5 live with authored content; 47 `planned` with placeholder blueprints, visible on the
  roadmap panel but not launchable.
- Filters by discipline, provider, and tier, plus catalogue search.

### Architecture

- Vanilla ESM single-page app with **zero runtime dependencies**. Runs from
  `node server.js` with no build step; Vite is optional for HMR and production bundling.
- Filesystem-as-source-of-truth content: one folder per certification, packs of ≤150
  items, and three generated-but-committed index files. See
  [ADR 0001](docs/adr/0001-content-architecture.md).
- Lazy per-certification loading with literal `import()` specifiers, so a production build
  emits one chunk per pack. The catalogue renders from counts only, so landing-page cost
  stays flat as the bank grows.
- `npm run validate` fails the build on duplicate ids, near-duplicate scenarios,
  blueprint/domain mismatches, domain weights that don't sum to 100, malformed answer
  sets, non-HTTPS references, disallowed markup, and — for a `live` certification — any
  remaining TODO placeholder.
- Scaffolders (`new:cert`, `new:pack`, `seed:catalog`) and content backups
  (`.content-backups/`, taken automatically by `npm run check`).

### Design

- Light-first token system: `:root` holds the complete light palette and
  `[data-theme="dark"]` overrides the same token names, with no literal colours below the
  token layer.
- Three type roles — Chakra Petch (display), Sora (body), JetBrains Mono (data) — with
  tabular numerals on all figures.
- Provider marks from [Simple Icons](https://simpleicons.org) (CC0) with contrast-checked
  per-theme colour pairs. AWS and Azure render lettermarks, since both were removed from
  Simple Icons at the trademark owners' request.

### Privacy

- No backend, no accounts, no analytics, no network calls. History, flashcard schedules,
  the daily streak, and the theme live in `localStorage` and are never transmitted.

### Security

- Strict CSP (`script-src 'self'`, `connect-src 'self'`, `frame-ancestors 'none'`) sent
  from `server.js`, `public/_headers`, and a `<meta>` fallback for GitHub Pages.
- Path handling in `server.js` hardened against traversal, encoded traversal, symlink
  escape, and NUL truncation, with non-GET methods refused.
- CodeQL, dependency review, `npm audit` run on every push and weekly.
- Every GitHub Action is pinned to a full commit SHA, so a moved tag in an upstream
  action cannot change what CI runs. Dependabot keeps the pins current.

### Quality

- 123 checks across seven suites: selection and adaptive logic, persistence libraries,
  the lazy loader, storage migration, end-to-end app flows against a headless DOM shim,
  the authoring lifecycle, and server headers.
- Coverage thresholds enforced by `.c8rc.json` (99% statements, 87% branches at release).

[Unreleased]: https://github.com/mchittineni/converge/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/mchittineni/converge/releases/tag/v0.1.0
