# ADR 0002 — MIT for the code, CC BY-SA 4.0 for the content

**Status:** Accepted · **Date:** 2026-08-27

## Context

Publishing this project means licensing two different kinds of asset that happen to
live in the same repository:

- **Software** — the app shell, the adaptive engine, the spaced-repetition scheduler,
  the validator, the scaffolders, the server. Roughly 2,400 statements of vanilla ESM.
- **Prose** — exam scenarios, answer options, and explanations. At the target size this
  is ~26,000 items, and it is the part that takes years of person-time to write. A good
  question needs a realistic scenario, distractors that are wrong for interesting
  reasons, and an explanation of *why* each one is wrong.

A single permissive license over both is the path of least resistance, and it is what
most projects in this space do. It also means a commercial exam-prep vendor can lift the
entire bank into a paid product, add nothing, and share nothing back — while the
project keeps absorbing the authoring cost.

A single strong-copyleft license over both (AGPL) protects the bank but taxes the
software: it discourages the casual "I forked this to add my company's internal
certification" use, which is exactly the adoption this project wants.

## Decision

Split the license along the line where the value actually differs.

| Scope | License |
| --- | --- |
| `src/` except content packs, `scripts/`, `server.js`, `index.html`, config | MIT ([LICENSE](../../LICENSE)) |
| `src/data/certs/*/questions/*.js`, `src/data/certs/*/flashcards/*.js` | CC BY-SA 4.0 ([LICENSE-CONTENT](../../LICENSE-CONTENT)) |
| `src/data/certs/*/cert.js` (blueprints) | MIT — factual descriptions of published exam guides |

Reasoning per line:

**MIT for the software.** Nothing here is a competitive moat. The engine is a few hundred
lines of well-tested logic; the value is in having written it, not in owning it. Maximum
reuse costs nothing and buys contributors.

**CC BY-SA 4.0 for the content.** A Creative Commons license, not a software license,
because the packs are prose — CC licenses are drafted for exactly this and their terms
("Adapted Material", attribution, ShareAlike) map onto a question bank in a way MIT's
"Software" language does not. ShareAlike keeps commercial reuse open: a vendor may ship
the bank in a paid course, and must license their improved version the same way.
Attribution means the project gets credit wherever the questions surface.

**Blueprints stay MIT.** A list of exam domains and their published weights is a
statement of fact about a vendor's exam guide, not creative work. Putting share-alike on
it would be over-claiming, and it would make the catalogue awkward to reuse.

`package.json` declares `"license": "MIT"` because SPDX has no way to express "two
licenses over different paths"; `LICENSE` names the content exception explicitly and
points at `LICENSE-CONTENT`.

## Consequences

**Good**

- The expensive asset is protected in the way that matters — derivatives stay open.
- The software stays trivially adoptable, including inside companies.
- Contributors are told, in `CONTRIBUTING.md`, which license their contribution falls
  under, before they open a PR.

**Costs accepted**

- Two license files, and a scope statement that has to be kept accurate if the
  directory layout changes. `LICENSE`, `LICENSE-CONTENT`, `README.md`, and
  `CONTRIBUTING.md` all state the split; they must move together.
- CC BY-SA 4.0 is not GPL-compatible in either direction. Nobody can vendor the packs
  into a GPL project's source tree, and this project cannot absorb GPL-licensed
  questions. Given that the realistic source of contributed questions is people writing
  them from vendor docs, this is close to theoretical.
- GitHub's licence detector reads `LICENSE` and will label the whole repository "MIT".
  The README states the split above the fold to compensate.
- Relicensing later requires the consent of every content contributor, which is why this
  is decided before the first external PR rather than after.

## Alternatives rejected

| Option | Why not |
| --- | --- |
| MIT for everything | A vendor can close-source the bank and contribute nothing back. The bank is the expensive part; it is the one thing worth protecting. |
| Apache-2.0 for everything | The patent grant solves a problem this project does not have (there is nothing patentable here), and it still leaves the content unprotected. |
| AGPL-3.0 for everything | Protects the bank, but a study app being run as a service is the *intended* use, and AGPL makes most companies refuse to touch the code. Wrong tax on the wrong asset. |
| CC BY-NC-SA for the content | The non-commercial clause would bar a trainer from using a question in a paid course — a use worth encouraging, as long as improvements come back. NC is also notoriously ambiguous about what counts as commercial. |
| CC0 / public domain for the content | Maximum reuse, zero reciprocity. Same failure as MIT-for-everything, without even attribution. |

## Notes

The content license also carries the project's independence statement: questions are
written from public documentation, and the project is not affiliated with any
certification body. That is a licensing-adjacent claim about *provenance*, and it belongs
next to the license so a reuser sees it. Trademark and third-party asset notices live in
[NOTICE](../../NOTICE).
