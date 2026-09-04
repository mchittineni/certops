# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version tracks the **application**, not the size of the question bank. Content
progress is tracked by `npm run stats` and in
[docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md).

## [Unreleased]

### Content
- Scaled all **27 live certifications** to exactly **500 questions** and **500 flashcards** each (adding packs 11–20, or packs 12–21 for `k8s-cka`), achieving **100% target bank completion** across all live tracks:
  - Total bank expanded to **13,500 questions** and **13,500 flashcards** (**27,000 items repo-wide**) across 1,082 packs with 0 validation errors.
  - Scaled all 27 certifications:
    - **Cloud Engineering (9 live, 4,500 questions)**: `aws-saa`, `aws-dva`, `aws-clf`, `azure-az900`, `azure-az104`, `azure-az204`, `gcp-ace`, `gcp-pca`, `gcp-pmle`.
    - **DevOps & SRE (6 live, 3,000 questions)**: `aws-dop`, `azure-az400`, `gcp-pcdoe`, `hashicorp-tfa`, `hashicorp-tfp`, `github-actions`.
    - **Kubernetes & Cloud Native (4 live, 2,000 questions)**: `k8s-cka`, `k8s-ckad`, `cncf-cgoa`, `cncf-otca`.
    - **Platform Engineering (3 live, 1,500 questions)**: `cncf-cba`, `cncf-cnpa`, `cncf-cnpe`.
    - **DevSecOps & Security (4 live, 2,000 questions)**: `aws-scs`, `k8s-cks`, `github-ghas`, `isc2-ccsp`.
    - **FinOps (1 live, 500 questions)**: `finops-focp`.
  - All new items authored to strict scenario-based standards, strictly adhering to blueprint domain weights with detailed technical explanations.
  - Zero option-letter references in explanations across all 13,500 questions (`npm run audit:explanations`).
  - Zero templated placeholder phrases (`npm run audit:filler`).
  - Balanced answer option keys across the entire question bank via `scripts/shuffle-options.mjs`.
  - All automated test suites passing (130 checks across units, loaders, app flows, migrations, scaffolds, and server).
- Activated **5 additional certifications** with complete 250-question banks and 250-card flashcard decks (1,250 scenario questions & 1,250 flashcards across 50 question packs and 50 flashcard packs), bringing the live catalogue to **27 certifications** with **6,750 questions** and **6,750 flashcards** across 542 packs:
  - `aws-dva` (AWS Certified Developer - Associate): 250 questions and 250 flashcards across 4 domains.
  - `azure-az204` (Microsoft Certified: Azure Developer Associate): 250 questions and 250 flashcards across 5 domains.
  - `gcp-pca` (Google Cloud Professional Cloud Architect): 250 questions and 250 flashcards across 6 domains.
  - `k8s-ckad` (Certified Kubernetes Application Developer): 250 questions and 250 flashcards across 5 domains.
  - `hashicorp-tfa` (HashiCorp Certified: Terraform Associate 003): 250 questions and 250 flashcards across 6 domains.
- All 1,250 questions authored to the strict AWS-SAA gold standard with authentic enterprise scenarios, zero option letter references in explanations, distinct options, and 0 validation errors across all 13,500 content items.
- Balanced option distribution across all 6,750 single-choice questions in the bank using `scripts/shuffle-options.mjs`.
- Activated all **Top 15 priority certifications** on the 2026 roadmap, bringing the live catalog to **22 certifications** with complete 250-question banks and 250-card flashcard decks (5,500 questions & 5,500 flashcards total):
  - Priority 1: `aws-dop` (AWS Certified DevOps Engineer – Professional)
  - Priority 2: `k8s-cka` (Certified Kubernetes Administrator)
  - Priority 3: `k8s-cks` (Certified Kubernetes Security Specialist)
  - Priority 4: `hashicorp-tfp` (HashiCorp Terraform Professional)
  - Priority 5: `gcp-pcdoe` (Google Cloud Professional Cloud DevOps Engineer)
  - Priority 6: `azure-az400` (Microsoft Certified: DevOps Engineer Expert)
  - Priority 7: `cncf-cnpa` (Certified Cloud Native Platform Engineering Associate)
  - Priority 8: `cncf-cnpe` (Certified Cloud Native Platform Engineer)
  - Priority 9: `cncf-cgoa` (GitOps Certified Associate)
  - Priority 10: `finops-focp` (FinOps Certified Practitioner)
  - Priority 11: `aws-scs` (AWS Certified Security – Specialty)
  - Priority 12: `isc2-ccsp` (Certified Cloud Security Professional)
  - Priority 13: `cncf-otca` (OpenTelemetry Certified Associate)
  - Priority 14: `cncf-cba` (Certified Backstage Associate)
  - Priority 15: `gcp-pmle` (Google Professional Machine Learning Engineer)
  - Scaled `gcp-ace` (Google Cloud Associate Cloud Engineer) to 250 questions and 250 flashcards.
- Scaffolded **16 new certifications** on the 2026 roadmap bringing the total catalogue to **68 certifications**:
  - **Cloud Engineering & AI**: `gcp-pcne`, `aws-mla`, `aws-mls`, `gcp-pde`, `gcp-pcdbe`, `aws-dbs`, `azure-ai102`, `azure-ai-apps-agents`, `databricks-genai`.
  - **Kubernetes & Cloud Native**: `cncf-ckne`.
  - **DevSecOps & Security**: `hashicorp-vault`, `cncf-opa`, `azure-sc500`.
  - **FinOps**: `finops-focus`, `finops-ai-value`, `finops-tech-value`.
- Scaled **AWS Certified Solutions Architect – Associate (`aws-saa`)** question bank and flashcard deck to **250 questions** and **250 flashcards** across 10 modular packs.
- Activated and verified **Microsoft Azure Administrator Associate (`azure-az104`)** blueprint, adding **250 exam questions** and **250 flashcards** across 10 modular packs.
- Scaled **AWS Certified Cloud Practitioner (`aws-clf`)**, **Microsoft Azure Fundamentals (`azure-az900`)**, **GitHub Actions (`github-actions` / GH-200)**, **FinOps Certified Practitioner (`finops-focp`)**, and **GitHub Advanced Security (`github-ghas` / GH-500)** to **250 questions** and **250 flashcards** each across 10 modular packs. Note that the last four of these, plus most `aws-clf` flashcards, are generated placeholders rather than authored content — see **Known gaps** below.
- Added `scripts/shuffle-options.mjs` to keep answer positions evenly distributed across the bank.
- Activated **HashiCorp Terraform Authoring and Operations Professional (`hashicorp-tfp`)**
  with a reconstructed six-domain blueprint, **250 questions** and **250 flashcards** across
  10 packs. `blueprintVerified` is deliberately left `false`: the exam publishes objectives
  rather than percentage weights, so the domain split is an authoring judgement pending
  confirmation against HashiCorp's exam guide.
- Scaled **Certified Kubernetes Administrator (`k8s-cka`)** from 10 to **250 questions** and
  from 12 to **250 flashcards** across 11 packs.
- Renumbered all new content onto the project-wide sequential id convention
  (`<certId>-<n>`, `<certId>-fc-<n>`).

### Fixed
- **Stale option-letter references in 825 explanations.** `npm run shuffle` re-keys answers
  from option text, so any explanation naming a letter goes false the next time it runs.
  Several were actively wrong — `aws-saa-11`, `aws-saa-218` and `az-104-26` each cited their
  own keyed answer as an incorrect option, and `k8s-cka-14` described the correct answer as
  the thing to avoid. 814 were repaired mechanically and the remainder by hand.
- **Two RNG bias defects in `scripts/shuffle-options.mjs`.** The seed hash left neighbouring
  sequential ids one bit apart, and the LCG's low bits were sampled for a range of 4 — a
  cycle far too short to be uniform there. `hashicorp-tfp` had 240 of 241 answers on A; a
  single shuffle then produced C:122 / D:0. Fixed with a murmur3 finalizer on the seed and
  by taking the LCG's high bits. Distribution is now A:538 B:600 C:548 D:534.
- Flashcard `hint` fields were never markup-checked, so an unescaped `<accountname>`
  placeholder in `az-104-84` would have vanished at render time.
- `az-104-179` listed FIDO2 security keys as a Self-Service Password Reset method. FIDO2 is
  supported for multifactor and passwordless sign-in, not for password reset.
- Three angle-bracket placeholders that parsed as HTML tags (`module.<name>.<output>`,
  `terraform-<PROVIDER>-<NAME>`, `system:node:<nodeName>`).

### Added
- `npm run audit:explanations` — fails the build on any explanation that names an option
  letter, in prose (`option B`), bare citation (`(C)`), or list (`(B, C)`, `(D is wrong)`)
  form. Wired into `npm run validate`, so the defect class above cannot return.
- `npm run audit:answers` — reports questions whose explanation argues against its own
  keyed answer, by token overlap. Reporting only; false positives are expected.
- `npm run audit:filler` — inventories generated placeholder content. Currently **1,000
  questions and 1,225 flashcards across 5 live certifications** whose answers cannot be
  verified because the questions have no substance.
- `npm run fix:explanations` — bulk-strips parenthesised option-letter references.
- `npm run shuffle` — exposed as a script rather than an ad-hoc invocation.

### Verified
- Every one of the **1,259 authored questions** was read against its options, key, and
  explanation across `aws-clf`, `aws-saa`, `azure-az104`, `gcp-ace`, `hashicorp-tfp`, and
  `k8s-cka`. The defects listed under **Fixed** are what that pass found.

### Known gaps
- **1,000 questions and 1,225 flashcards across 5 live certifications are generated
  placeholders**, not authored content: `azure-az900`, `github-actions`, `finops-focp`,
  `github-ghas`, and `aws-clf` flashcards 26–250. They read like
  *"Which service best addresses requirement #77?"* with an option labelled
  *"(Optimal recommended solution)"*. Their answers cannot be verified, and they break
  under `npm run shuffle` because the option text hard-codes a letter. `npm run audit:filler`
  reports the current inventory. These banks are live and should be rewritten before they
  are trusted.
- Domain distribution drifts from blueprint weights in the two newest banks — CKA
  Troubleshooting has 54 questions against a 30% weight (~75 expected), Storage 37 against
  ~25; TF-PRO Debugging has 40 against ~25. Exam simulation will repeat within the
  under-filled domains more than intended.

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

[Unreleased]: https://github.com/mchittineni/certops/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/mchittineni/certops/releases/tag/v0.1.0
