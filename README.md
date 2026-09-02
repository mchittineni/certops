<div align="center">

# Converge

**Certification practice for cloud, DevOps, Kubernetes, platform, FinOps, and security engineers.**

*Converge on mastery.* The adaptive engine works like a reconciliation loop:
every answer moves your difficulty band toward your actual level.

[![CI](https://github.com/mchittineni/converge/actions/workflows/ci.yml/badge.svg)](https://github.com/mchittineni/converge/actions/workflows/ci.yml)
[![Security](https://github.com/mchittineni/converge/actions/workflows/security.yml/badge.svg)](https://github.com/mchittineni/converge/actions/workflows/security.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![Content: CC BY-SA 4.0](https://img.shields.io/badge/content-CC%20BY--SA%204.0-lightgrey.svg)](LICENSE-CONTENT)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)](package.json)
[![Runtime dependencies: 0](https://img.shields.io/badge/runtime%20dependencies-0-success.svg)](package.json)

</div>

---

## Project status

**Early. The application is complete; the question bank is not.**

| | |
| --- | --- |
| Certifications scaffolded | **68** across six disciplines |
| Live (launchable, with content) | **10** — `aws-saa` `aws-clf` `azure-az104` `azure-az900` `github-actions` `finops-focp` `github-ghas` `gcp-ace` `k8s-cka` `hashicorp-tfp` |
| Questions authored | **2,259** of a 34,000 target (500 × 68) |
| Flashcards authored | **2,260** |

Run
`npm run audit:filler` for the current inventory — those banks are listed as live but
their answers are not trustworthy until the items are rewritten.

The 42 remaining certifications exist as folders with **placeholder blueprints** — they
appear on the roadmap panel but cannot be launched. That is the honest state of things,
and it is exactly where contributions land: see [CONTRIBUTING.md](CONTRIBUTING.md).

Everything that makes 500 questions per certification *tractable* is built:
per-certification folders, scaffolders, a machine-enforced validator, lazy per-pack chunks,
and progress tracking. What remains is authoring.

## Quick start

```bash
git clone https://github.com/mchittineni/converge.git
cd converge

node server.js               # http://localhost:3000 — no install, no build step
```

That is not a simplification: the app has **zero runtime dependencies** and runs straight
from source as native ES modules. `npm install` is only needed for the dev tooling:

```bash
npm install
npm run dev                  # Vite dev server with HMR
npm run build                # production bundle → dist/ (one lazy chunk per content pack)
```

Node 20 or newer. CI tests on 20 and 22.

---

## Features

### Every certification is a study module

| Mode | What it does |
| --- | --- |
| **Exam Simulation** | Timed, domain-weighted sampling, scored against the real passing threshold, per-domain and per-difficulty breakdown, flag-for-review, question navigator. |
| **Practice & Study** | Untimed, with an explicit *Check Answer* step so multi-answer questions aren't spoiled by the first click, then the full architecture explanation. |
| **Quick Quiz** | Ten questions, instant verdict, answers lock once checked. |
| **Flashcards** | Flip cards with Leitner-box spaced repetition. Due cards return first, "Again" requeues in-session, mastery persists. |
| **Question Bank** | Full-text search over every scenario, answer, and explanation with certification / difficulty / domain filters. |

### Daily Challenge

Ten questions drawn from three certifications, the same set for everyone that day and
reproducible from the date alone — no backend involved. Tracks a completion streak.

### Difficulty filters

One selector governs every mode:

- **Easy** — recall and single-service questions
- **Medium** — applied scenarios with plausible distractors
- **Hard** — multi-service trade-offs, multi-answer, cost/RTO constraints
- **Mixed** — sampled across bands *and* domains in published blueprint proportions
- **Adaptive** — starts medium; two right escalates a band, two wrong eases one. Linear,
  no going back — and in exam mode it adapts silently without revealing correctness.

### Six disciplines

☁️ Cloud Engineering · 🚀 DevOps & SRE · ☸️ Kubernetes & Cloud Native ·
🏗️ Platform Engineering · 💰 FinOps · 🔐 DevSecOps & Security

All 52 certifications and the priority order:
**[docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md)**.

---

## Documentation

| Document | What's in it |
| --- | --- |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Setup, the one command that matters, and the ground rules for content |
| [docs/CONTENT-ARCHITECTURE.md](docs/CONTENT-ARCHITECTURE.md) | Authoring reference: schemas, difficulty conventions, how to get a bank to 500 |
| [docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md) | All 52 certifications, priority order, and the `planned` → `live` walkthrough |
| [docs/CI-AND-SECURITY.md](docs/CI-AND-SECURITY.md) | Pipelines, SHA-pinned actions, CSP, coverage thresholds, and where the tests live |
| [docs/adr/0001-content-architecture.md](docs/adr/0001-content-architecture.md) | Why the content layout is what it is, with measurements and rejected alternatives |
| [docs/adr/0002-licensing.md](docs/adr/0002-licensing.md) | Why the code and the questions carry different licenses |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Contributor Covenant 2.1, plus the no-braindumps rule |
| [SECURITY.md](SECURITY.md) | What counts as a vulnerability here, and how to report one |
| [CHANGELOG.md](CHANGELOG.md) | Release history |

## Maintenance commands

```bash
npm run check         # backup → regenerate index → validate → test with coverage.
                      # Run before every commit. If it passes, CI passes.

npm run build:content # regenerate catalog/registry/manifest from the filesystem
npm run validate      # schema, duplicate, markup, option-letter, and coverage gate
                      # (--verbose expands planned certs)
npm test              # selection · libraries · loader · migration · app flows · scaffolds · server
npm run coverage      # the same suite under c8, thresholds from .c8rc.json enforced
npm run audit         # fail on any advisory in the shipped (production) dependency tree
npm run stats         # progress toward 500 questions per certification
npm run backup        # snapshot all authored content to .content-backups/

npm run audit:explanations  # fail if any explanation names an option letter (part of validate)
npm run audit:answers       # flag questions whose explanation argues against its own keyed answer
npm run audit:filler        # inventory generated placeholder content (reports, never fails)
npm run fix:explanations    # strip parenthesised option-letter references in bulk
npm run shuffle             # re-randomise option order and re-key answers across every pack
npm run build         # build:content → validate → vite build

npm run new:cert -- --id aws-dop --provider AWS --code DOP-C02 \
  --title "AWS Certified DevOps Engineer - Professional" \
  --category "DevOps & SRE" --tier professional
npm run new:pack -- --cert aws-dop --kind questions --count 50 --difficulty medium
npm run seed:catalog  # (re-)seed the Top-50 roadmap; idempotent
npm run icons         # regenerate brand marks from simple-icons (devDependency)
```

## Architecture in one screen

**Filesystem as source of truth.** Everything about a certification lives in its own
folder; nothing outside it needs editing to add content. `npm run build:content` scans the
tree and regenerates three committed index files, so the app still runs with no build step.

```
src/data/certs/aws-saa/
├── cert.js                 # blueprint: domains, weights, category, tier, status
├── questions/pack-1.js     # default-exported array, ≤150 items
└── flashcards/pack-1.js
```

**Delivery is not the bottleneck; authoring is.** At a measured 1.5 KB per question and a
3.06× gzip ratio, one certification's 500 questions is ~244 KB gzipped — fetched once,
browser-cached, and never needed alongside another certification's. So the design spends
its complexity on making 26,000 items *writable*: scaffolders, a validator that fails the
build on the errors bulk authoring actually produces, and packs small enough to review.
Full reasoning and the rejected alternatives are in
[ADR 0001](docs/adr/0001-content-architecture.md).

**The catalogue renders from counts, never from content**, so the landing page costs the
same whether the bank holds 47 questions or 26,000.

<details>
<summary>Full project structure</summary>

```
converge/
├── index.html                      # single entry point; CSP meta fallback for GitHub Pages
├── server.js                       # zero-dependency static server with security headers
├── vite.config.js                  # optional: dev HMR + production bundling
├── .c8rc.json                      # coverage thresholds, enforced by npm run coverage
├── public/_headers                 # production security headers (Netlify / Cloudflare)
├── docs/                           # architecture, roadmap, CI & security, ADRs
├── scripts/                        # stdlib Node only, no dependencies
│   ├── build-content-index.mjs     # filesystem → catalog + registry + manifest
│   ├── validate-content.mjs        # the content gate
│   ├── seed-catalog.mjs            # Top-50 roadmap seeder
│   ├── new-cert.mjs / new-pack.mjs # scaffolders
│   ├── backup-content.mjs          # content snapshots
│   ├── content-stats.mjs / coverage-summary.mjs
│   ├── lib/dom-shim.mjs            # headless DOM: runs the whole app in Node
│   └── test-*.mjs                  # seven suites, 123 checks
└── src/
    ├── app.js                      # router + one delegated data-action dispatcher
    ├── state.js
    ├── data/
    │   ├── certs/<certId>/         # ← everything about a certification lives here
    │   ├── loader.js               # lazy per-certification loading + cache
    │   └── *.generated.js          # GENERATED — never edit by hand
    ├── lib/
    │   ├── select.js               # difficulty filter, weighted sampling, adaptive engine
    │   ├── daily.js                # date-seeded daily challenge
    │   ├── srs.js                  # Leitner-box spaced repetition
    │   ├── progress.js             # attempt history + per-difficulty accuracy
    │   └── storage.js              # localStorage keys, in one place
    ├── views/                      # home · cert module · quiz · results · flashcards · bank
    └── styles/main.css             # light-first token system
```

</details>

## Design system

| Role | Face | Used for |
| --- | --- | --- |
| Display | Chakra Petch | headings, brand, cert codes, chips, all figures (tabular) |
| Body | Sora | exam scenarios, explanations, card backs |
| Data | JetBrains Mono | CLI commands in flashcards, key hints |

Light-first: `:root` holds the complete light palette, `[data-theme="dark"]` overrides the
same token names. Components reference only tokens — there are no literal colours below the
token layer, because a hardcoded hex shows up as invisible text in the other theme.
Swapping a typeface is one line in the token block plus the `<link>` in `index.html`.

Provider marks come from [Simple Icons](https://simpleicons.org) (CC0) where a freely
licensed mark exists, with contrast-checked colour pairs per theme. AWS and Azure were
removed from Simple Icons at the trademark owners' request, so those render a lettermark in
the official brand colour; supply your own path data in `src/views/brand-icons.local.js`
to override. See [NOTICE](NOTICE).

## Keyboard shortcuts

| Key | Where | Action |
| --- | --- | --- |
| `A`–`F` | Quiz | Select that option |
| `→` | Quiz | Check answer, then advance |
| `←` | Quiz | Previous question (non-linear modes) |
| `Space` / `Enter` | Flashcards | Flip the card |
| `1` / `2` | Flashcards | Grade "Again" / "Got it" |

## Privacy

No backend, no accounts, no analytics, no network calls of any kind — the CSP sets
`connect-src 'self'` and the app never uses it. Attempt history, flashcard scheduling, the
daily streak, and the theme live in `localStorage` in your own browser. Nothing is uploaded
anywhere.

Keys are prefixed `converge_`; data written under the previous `opsquiz_` prefix is migrated
once on boot and then removed ([src/lib/storage.js](src/lib/storage.js)).

## Contributing

The bank is at 2% of target, so content is the bottleneck — and a **wrong answer is the
highest-priority bug**, because it teaches someone the wrong thing before an exam they paid
for. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

```bash
npm run new:pack -- --cert <id> --kind questions --count 25
# author the templates, then:
npm run check
```

One rule worth stating on the front page: **every question must be written from public
documentation.** Material recalled from a real exam violates every certification body's NDA
and puts candidates at risk of decertification. Those PRs are closed without discussion.

## Deploying

The build is a plain static directory — any host works.

```bash
npm run build                        # → dist/, for a root domain
BASE_PATH=/converge/ npm run build   # for a GitHub Pages project site
```

Two requirements: serve `index.html` for unknown paths, and send the headers in
[public/_headers](public/_headers) if your host supports them. Pushing to `main` deploys to
GitHub Pages automatically ([deploy.yml](.github/workflows/deploy.yml)).

## License

**Code — [MIT](LICENSE).** Everything in `src/` except the content packs, plus `scripts/`,
`server.js`, `index.html`, and the configuration.

**Content — [CC BY-SA 4.0](LICENSE-CONTENT).** The questions, scenarios, options,
explanations, and flashcards in `src/data/certs/*/questions/` and
`src/data/certs/*/flashcards/`. Reuse them freely, including commercially — credit the
project and keep derived banks under the same license.

Writing a good exam question is the expensive part of this project, which is why the prose
carries share-alike and the code does not.

Third-party assets and trademark notices: [NOTICE](NOTICE).

> Converge is an independent project. It is not endorsed by, sponsored by, or affiliated
> with AWS, Microsoft, Google, the Linux Foundation, CNCF, HashiCorp, GitHub, Docker, the
> FinOps Foundation, the DevOps Institute, ISC2, OffSec, or any other certification body.
> Certification names and exam codes are trademarks of their respective owners, used only
> to identify which exam a study module prepares you for.
