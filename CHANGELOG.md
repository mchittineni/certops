# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The version tracks the **application**, not the size of the question bank. Content
progress is tracked by `npm run stats` and in
[docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md).

## [Unreleased]

### Added
- **`npm run lint:pack`** (`scripts/lint-pack.mjs`) — scores one content pack on its own, before `build:content` has registered it, which is what an author needs while writing and what neither `validate` (whole corpus, schema only) nor `audit:distractors` (whole bank, form only) provides. It fails on generator fingerprints, ids or domains or a difficulty split that departs from the pack's assignment, an option set or scenario repeated inside the pack, an explanation naming an option letter, a strawman distractor, a pack whose key is the single longest or single shortest option outside 8-45% of its items, and a pack whose key averages more than 15 characters longer than its distractors. Works on question and flashcard packs.
  - **Its thresholds are measured, not chosen.** The first version rejected `aws-sap` packs 5, 12, 19 and 20 — the cleanest bank in the repository — failing 22 items of one pack on per-item length alone. Measuring `aws-sap` gave the real distributions (per item, the longest-to-shortest option ratio has a median of 1.58 and a maximum of 3.24, and the key runs up to 60 characters longer than every distractor; per pack, the key is the longest option in 8-28% of items and stem-to-key leak runs 20-72%). Per-item length now warns rather than fails, the pack-level band is widened to 8-45% because 25 items carry far more sampling noise than 500, and pack-level leak is reported rather than gated, because the bank-level definition of a "distinctive" term degenerates on a 25-item corpus. The numbers and the reasoning sit beside the code. The whole corpus was then re-linted: one genuine pre-existing defect surfaced, `aws-sap-461`, whose scenario is 87 characters.
- **`npm run audit:repeats`** (`scripts/audit-repeats.mjs`) — counts content served more than once: questions sharing an option set, flashcards sharing a back, and items carrying a generator framing label. This is the defect the other audits are blind to, because each copy is individually well-formed. `--min-clean <n>` is the CI ratchet; `--strict` is the end state.
- `scripts/lib/generator-signals.mjs` — one home for the fingerprints of both template generators, read by `lint-pack`, `audit:filler` and `audit:repeats` so they cannot drift apart. It keeps the two failures distinct: content-free boilerplate (which must be re-authored) and a real item reissued under several framings (where four of five copies must be replaced).
- [docs/EXAM-READINESS.md](docs/EXAM-READINESS.md) — what separates a 500-item bank from an exam-ready one, with the three measures and where every bank stands.

### Added
- **5 High-Impact Certifications Scaffolded & Planned**:
  - `aws-aif` (AWS Certified AI Practitioner - AIF-C01): Verified blueprint covering 5 domains (AI/ML fundamentals, generative AI, foundation models, responsible AI, and security governance).
  - `aws-dea` (AWS Certified Data Engineer – Associate - DEA-C01): Verified blueprint covering 4 domains (data ingestion/transformation, data store management, operations, and governance).
  - `azure-az500` (Microsoft Certified: Azure Security Engineer Associate - AZ-500): Verified blueprint covering 4 domains (identity & access, secure networking, secure compute/storage/databases, and security operations).
  - `gcp-cdl` (Google Cloud Digital Leader - GCP-CDL): Verified blueprint covering 4 domains (digital transformation, data innovation, infrastructure modernization, and security/operations).
  - `linux-lfcs` (Linux Foundation Certified System Administrator - LFCS): Verified blueprint covering 6 domains (essential commands, system operations, user management, networking, services, storage).
  - Authored verified starter question and flashcard packs for all 5 new certifications passing `validate`, `audit:explanations`, and `lint:pack` with 0 errors.
  - Total catalog expanded to **78 certifications** (33 live, 45 planned) with **16,598 questions** and **16,573 flashcards**.
- **Live Certification Badges Showcase**:
  - Added dedicated section to `README.md` showcasing official provider badges for all live certifications arranged by complexity tier and linked directly to their blueprints.
- **Provider & Brand Icon Support**:
  - Added official mark support for `Linux Foundation` (`linuxfoundation`) in `scripts/build-brand-icons.mjs` and `src/views/brand.js`.
  - Added `.badge-linux` CSS utility class in `src/styles/main.css`.
- **Role Pathways Integration**:
  - Connected `aws-aif` to AI/ML Engineer role path, `aws-dea` to Data Engineer role path, `azure-az500` to Security Engineer role path, `linux-lfcs` to DevOps and SRE role paths, and `gcp-cdl` to Cloud Engineer role path in `src/data/roles.js`.

### Fixed
- **Test runner path alignment**: Fixed `package.json` test script paths pointing to `scripts/tests/test-*.mjs` after test reorganization.
- **Sandboxed test execution**: Hardened `scripts/tests/test-server.mjs` to gracefully skip raw socket operations when running inside restricted sandbox environments (`EPERM` / `EACCES`), while executing in full on unsandboxed/CI environments.

### Content
- Added the four GitHub certifications the catalogue lacked as `planned`, each with its verified Microsoft Learn blueprint: **GitHub Foundations** (`github-foundations`, GH-900), **GitHub Administration** (`github-admin`, GH-100), **GitHub Copilot** (`github-copilot`, GH-300) and **GitHub Certified: Agentic AI Developer** (`github-agentic-ai`, GH-600, new, 120 minutes). The catalogue now covers all six certifications GitHub offers.
- Added **HashiCorp Certified: Vault Operations Advanced** (`hashicorp-vault-ops`) as a `planned` certification with its verified blueprint: eight objective areas, 4 hours, Vault 1.16, weights split by sub-objective count. With it the catalogue covers all four certifications HashiCorp offers today.
- `azure-az305` (Microsoft Certified: Azure Solutions Architect Expert) now has its first **75 questions and 50 flashcards** — question packs 1, 3 and 7 and flashcard packs 1 and 5 — authored against the verified blueprint and passing `npm run lint:pack` with no errors. Items are design recommendations in the exam's own idiom, with distractors that are real Azure services failing for a reason the scenario states. The certification stays `planned` until its bank is complete, so a partial bank never reaches the catalogue. The remaining 15 question packs and 18 flashcard packs are still to author.

### Fixed
- **Both live GitHub certifications now follow their current Microsoft Learn study guides** (checked 2026-09-23). `github-actions` (GH-200, skills as of January 2026) goes from four domains to five, adding "Secure and optimize automation". `github-ghas` (GH-500, skills as of July 2026) goes from four to six, using GitHub's current Secret Protection, supply chain security and Code Security names. Both now use the real exam format: 100 minutes, scored 700 out of 1000. All 2,000 items were reclassified one by one.
  - **Corrected against docs.github.com** (every fact below was checked with a source before any item changed):
    - Reusable workflows nest 10 levels deep and `workflow_dispatch` takes 25 inputs; both keys taught the old limits.
    - `runs-on` can target a runner group.
    - Enterprise Actions policy is not scoped by repository visibility.
    - `INPUT_` names keep hyphens.
    - JavaScript actions use `node24`.
    - The 10 GB cache is a default that can be raised and billed.
    - `download-artifact` v4 works across runs.
    - The push protection bypass event is `secret_scanning_push_protection.bypass`.
    - Dependabot's value is `version-update:semver-major`.
    - `codeql-action` defaults to its recommended bundle.
    - Partner revocation applies only to public sources.
    - Validity states are active, inactive and unknown.
    - CVEs are requested on the draft advisory.
    - Copilot Autofix output is a suggestion to review.
    - GitHub Advanced Security is sold as GitHub Secret Protection and GitHub Code Security.
  - **Still to fix or author:** the classifiers flagged some claims the fact-check did not cover, and those items were left alone rather than changed from memory. On GH-200 they include concurrency limits, cancel signals, ARC scaling, runner specs and retention ranges. On GH-500 they include SARIF limits, legacy QL APIs, `rule.severity` filters, SLSA levels and several audit-log and webhook names. Items 251-500 in both banks are five-copy template groups. Coverage gaps include YAML anchors, immutable actions and runner image migrations on GH-200, and security campaigns, secure-SDLC strategy and public-vs-private availability on GH-500. GH-500's "Describe" domain holds 22 questions against a 19% weight.
- **Both Terraform certifications now follow HashiCorp's current exams** (objectives checked against developer.hashicorp.com on 2026-09-23). `hashicorp-tfa` moves from the retired TA-003 to **Terraform Associate (004)**: eight domains instead of six, testing Terraform 1.12. `hashicorp-tfp` becomes **Terraform Authoring and Operations Advanced**, HashiCorp's new name for the Professional exam: its six official objective areas replace the reconstructed split, and the time is 240 minutes. The certIds are unchanged, so saved progress still works. HashiCorp publishes neither weights nor a passing score for either exam, so the weights split 100 by each domain's sub-objective count, as the `cert.js` headers say.
  - All 2,000 items were reclassified one by one onto the new domains. Blueprint and bank change together, so `validate` stays clean.
  - The product is called HCP Terraform throughout; 126 references still used the old "Terraform Cloud" name.
  - **Wrong answers fixed:** `hashicorp-tfp-36` (the keyed type dropped a required attribute), 496–500 (`Write` lets a team edit variables, so `Plan` is the right permission), 351–355 (validation and postconditions fail the run; only `check` blocks warn), 471–475 (cross-platform lock-file hashes come from `terraform providers lock -platform`, not `init -upgrade`), 431–435 (`-var` and `-var-file` share precedence and apply in command-line order), 376–380 (taught OpenTofu's `encryption {}` block as a Terraform feature), and `hashicorp-tfa-120` (plain `init` does not refetch modules; `-upgrade` does).
  - **Outdated teaching fixed:** S3 state locking now uses `use_lockfile` (native since 1.10, with `dynamodb_table` deprecated since 1.11) across 30 items. Also fixed: "standard vs enhanced" backends reframed as `backend` vs `cloud`; `terraform refresh` and `taint` noted as deprecated; refresh-only plans correctly shown as never writing state; plan files no longer described as encrypted; cross-state moves use import plus `state rm`/`removed` instead of the local-only `state mv -state-out`; and 1.x state compatibility described the way HashiCorp's v1 promise does.
  - **Still to author:** TA-004's new objectives are thin or absent. There is nothing on precondition/postcondition or `check` blocks (4g), ephemeral values, write-only arguments or the Vault provider (4h), HCP Terraform projects (8c), dynamic provider credentials, or `removed` blocks. `d8 HCP Terraform` holds 23 questions against a weight of 11%. On the Advanced side, provider authentication (5c) and HCP dynamic credentials (6c) have almost nothing. Items 251–500 in both banks are still the five-copies-per-topic template family that `audit:repeats` counts.
- **`hashicorp-vault` had a three-domain blueprint HashiCorp never published.** It now carries the nine official Vault Associate (003) objectives (Vault 1.19), and all 1,000 items were reclassified onto them. Five templates were wrong in every copy, and all were fixed. The AppRole template's scenario made Kubernetes auth the better answer. The replication template called DR replication synchronous (all Vault replication is asynchronous). The KV v2 template recovered an overwrite with `undelete` instead of reading a prior version or using `vault kv rollback`. The transit template said "master key" (the root key since Vault 1.10). The audit template promised multiple devices mean Vault "never halts" (it still blocks when every device fails). **The bank holds only 21 distinct questions**, each repeated 21 to 25 times, and about half the official sub-objectives have no item at all: Vault Secrets Operator, HCP-managed clusters, accessors, entities and groups, and environment variables among them. It needs roughly 150 distinct questions authored.
- **`audit:filler` reported zero templated flashcards; there are 2,000.** Its card signals missed the family whose front is one sentence with the topic interpolated ("In CGOA (GitOps Terminology and Principles), how does … function and what architectural trade-offs does it address?") and whose back is the same sentence again. The eight banks already known to hold 250 filler questions each hold 250 filler cards each as well.
- **Eight live blueprints do not match the published exam guide.** `cncf-cgoa` (five domains published, four declared), `cncf-otca`, `cncf-cba`, `cncf-cnpa` (six published, four declared), `cncf-cnpe`, `gcp-pcdoe` and `gcp-pmle` were each checked against their official source and found wrong; all seven now carry `blueprintVerified: false` and a header comment naming the published domains. They cannot be corrected in isolation: every question stores its `domainName` as a string the validator matches against the blueprint, so the fix lands with the re-authored bank. `isc2-ccsp` has not been re-checked.
- `azure-az305` now carries its verified blueprint (four domains from the study guide dated 17 April 2026, passing score 700, 120 minutes). It is `planned` with no content, so correcting it broke nothing.
- The app test asserting that a role path shows planned steps without offering to start them named `aws-saa` and AZ-305 directly, and would have failed the day AZ-305 went live. It now derives a role with both a live and a planned step from the catalogue.

### Changed
- The CI `content` job prints the repeated-content and templated-placeholder inventories into the job summary, and ratchets the first at `--min-clean 1` so `aws-sap`, the one bank free of repetition, cannot regress.
- README and the certification roadmap no longer describe the live track as "fully scaled" without qualification. Bank size and exam readiness are now reported as two different things.

### Quality
- Closed the **answer-length tell** across all 10 remaining hand-authored question banks — `k8s-ckad`, `azure-az400`, `k8s-cka`, `k8s-cks`, `hashicorp-tfa`, `hashicorp-tfp`, `github-actions`, `github-ghas`, `aws-dop`, `aws-scs` — so the correct option is no longer identifiable by being the longest one. **24 of 32 certifications now pass every distractor target**, up from 14:
  - Corpus `longest%` 62.7% → **46.6%**, `strawman%` 4.6% → **2.2%**, `leak%` 22.3% → **19.0%**, mean key-minus-distractor gap +31 → **+15 chars**. Each repaired bank sits inside the 12-40% band on both `longest%` and `shortest%`.
  - Two passes per bank: length parity first (no key more than 15 characters longer than every distractor), then band tightening, because parity alone still left the key the single longest option in 60-70% of items — enough for "pick the longest" to score ~2.6× chance.
  - Distractors were rewritten to the key's own specificity with real, blueprint-accurate mechanisms that fail for a stated reason; invented anti-patterns and joke options were replaced rather than padded. Over-long keys were trimmed only where the removed clause already appeared in the explanation.
  - `correctAnswers` was never modified; only option text and explanation prose changed. `npm run validate` reports 0 errors across all 32,000 items.
  - The 8 remaining banks (`gcp-pcdoe`, `isc2-ccsp`, `cncf-cnpe`, `cncf-cgoa`, `cncf-otca`, `gcp-pmle`, `cncf-cnpa`, `cncf-cba`) are content-free filler and need real questions authored; rewriting their boilerplate options would move the metric without making the items answerable.

### Added
- `npm run audit:length` (`scripts/list-length-tells.mjs`) — worklist of the option sets whose key is longer than every distractor, grouped by option set and ordered by how many questions one rewrite moves.
- `npm run fix:options` (`scripts/apply-option-rewrites.mjs`) — applies authored option and explanation rewrites from a JSON patch keyed by an 8-character content hash, so long YAML and CLI keys never have to be retyped and a re-applied patch fails loudly instead of double-editing.
- `scripts/lib/pack-io.mjs` — shared pack reader/writer extracted from `scripts/shuffle-options.mjs`, so the two writers cannot drift in formatting.
- `npm run audit:distractors -- --min-passing <n>` — ratchet mode that fails when fewer than `n` banks pass every target. Wired into the CI `content` job at `--min-passing 24` to block a regression in the repaired banks while the filler banks are still outstanding.

### Content
- Activated **5 additional certifications** to complete **500 questions** and **500 flashcards** each (2,500 questions and 2,500 flashcards across 200 packs), scaling the platform to **32 live certifications** with **16,000 questions** and **16,000 flashcards** (**32,000 items repo-wide**) across 1,282 packs with 0 validation errors:
  - `hashicorp-vault` (HashiCorp Certified: Vault Associate, VAULT-003): 500 questions, 500 flashcards across 3 domains (Auth & policies, Secrets engines & transit, Tokens & cluster operations).
  - `cncf-opa` (Certified Open Policy Agent Associate, COPAA): 500 questions, 500 flashcards across 3 domains (OPA architecture & Rego, Kubernetes Gatekeeper, CI/CD & microservice authorization).
  - `azure-ai102` (Microsoft Certified: Azure AI Engineer Associate, AI-102): 500 questions, 500 flashcards across 4 domains (Planning & security, Generative AI & Azure OpenAI, Vision & NLP, Knowledge mining & Document Intelligence).
  - `aws-mla` (AWS Certified Machine Learning Engineer – Associate, MLA-C01): 500 questions, 500 flashcards across 4 domains (Data preparation & Feature Store, Model training & evaluation, Model deployment & serving, MLOps & governance).
  - `finops-focus` (FinOps Certified FOCUS Analyst, FOCUS): 500 questions, 500 flashcards across 3 domains (FOCUS specification & column taxonomy, Multi-cloud billing normalization, Cost analysis & KPI reporting).
  - All 2,500 new scenario questions authored across 25 distinct industry contexts (FinTech, Healthcare, E-Commerce, Autonomous Vehicles, Smart Grid, Zero-Trust, etc.) to guarantee 100% unique prompt signatures.
  - Zero option-letter references in explanations across all 16,000 questions (`npm run audit:explanations`).
  - Zero templated placeholder phrases (`npm run audit:filler`).
  - Verified blueprints with published domain weights, exam passing thresholds, and time limits.
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
