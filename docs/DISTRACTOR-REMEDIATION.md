# Distractor remediation plan

The observation that started this: **the correct option is noticeably longer than the
wrong ones.** That is true, and measuring it turned up two further tells that give the
answer away just as cheaply. Together they mean a large share of the bank can be
answered without knowing the material — the opposite of showcasing real exam experience.

Run `npm run audit:distractors` for the current numbers. Add `--strict` to make it
exit non-zero, which is how this becomes a build gate once the content lands.

## What the audit measures

| Tell | What it detects | Corpus now | Target |
| --- | --- | --- | --- |
| `longest%` | the single longest option is the key | **90.0%** | ≤40% (chance is ~25% on four options) |
| `strawman%` | items with a distractor nobody would pick | **10.7%** | ≤5% |
| `leak%` | the stem names a term the key uses and no distractor does | **82.9%** | ≤35% |
| `len gap` | mean key length minus mean distractor length | **+52 chars** | ≤+15 |

27 of 32 live certifications still breach at least one target. The five in phase 1 below
now pass all four; the remaining 27 cover ~13,500 questions and ~40,500 distractors.

### Why length alone is not the fix

Padding distractors to match the key would move `longest%` to ~25% and change nothing
real. The items would still be answerable, because the other two tells survive padding.
A worked example from `hashicorp-vault`:

```
* A (128) Configure the AppRole auth engine with a static role_id and dynamically
          generated secret_id bound to CIDR subnets and short TTLs.
  B  (74) Hardcode root tokens in environment variables inside container definitions.
  C  (62) Deploy a single shared token to all production application instances.
  D  (71) Store long-lived API keys in a plaintext configmap mounted to pods.
```

B, C and D are anti-patterns. No candidate weighs them. The item is 1-way, not 4-way,
and lengthening them leaves it 1-way. The rewrite has to replace them with real
alternatives that are wrong only because a better one exists:

```
* A (128) Configure the AppRole auth engine with a static role_id and dynamically
          generated secret_id bound to CIDR subnets and short TTLs.
  B (133) Enable the Kubernetes auth method and bind roles to the workload service
          account, validating pod identity through the cluster TokenReview API.
  C (119) Issue a periodic token scoped to the workload policy and renew it from a
          sidecar before each period elapses.
  D (126) Enable the TLS certificate auth method and issue per-workload client
          certificates from Vault's PKI secrets engine.
```

Four real Vault auth methods, length-matched, each defensible until you know AppRole is
the one built for CIDR-bound machine identity. That is the bar for every rewritten item.

## Authoring rules

1. **Every distractor is a real thing.** A named service, setting, or command that
   exists in the exam's blueprint. Never an invented anti-pattern.
2. **Wrong for a stated reason.** Each distractor fails against something the scenario
   says — wrong latency, wrong consistency model, wrong trust boundary, wrong cost
   profile. If it fails for no scenario reason, the scenario is underspecified.
3. **Length parity.** Keep all four options within ~20% of each other. The audit's
   `len gap` catches drift.
4. **Do not name the key in the stem.** Generated stems like *"…requirements for
   sagemaker data wrangler"* hand over the answer. Ask what the workload needs, not
   which named service to confirm.
5. **Spread the vocabulary.** If the key mentions a term, at least one distractor
   should too, so term-matching does not shortcut reading.
6. **No option letters in prose.** Explanations that say "Option B" break under
   `npm run shuffle`. `npm run audit:explanations` already guards this.

## Sequencing

Ordered by leverage. Phase 1 is complete; phases 2 and 3 remain.

### Phase 1 — the five worst certifications (done)

These five were emitted by generator templates and were the worst-scoring banks in
the corpus, all at 100% `longest%`. All 276 distractors across their 92 topics were
rewritten as real alternatives, each losing only on a requirement the scenario states.

| Cert | `longest%` | `strawman%` | `leak%` | len gap |
| --- | --- | --- | --- | --- |
| `hashicorp-vault` | 100.0 → **19.4** | 29.2 → **0.0** | 63.6 → **0.0** | +48 → **+6** |
| `aws-mla` | 100.0 → **27.8** | 26.2 → **0.0** | 89.0 → **0.2** | +58 → **+8** |
| `finops-focus` | 100.0 → **30.0** | 25.2 → **0.0** | 70.2 → **0.0** | +65 → **+12** |
| `azure-ai102` | 100.0 → **31.6** | 30.0 → **0.0** | 93.8 → **0.2** | +59 → **+12** |
| `cncf-opa` | 100.0 → **30.6** | 26.4 → **0.0** | 73.4 → **32.2** | +57 → **+14** |

Two structural fixes came with it. Each topic gained a solution-neutral challenge
label used for the question title, and the stem stopped interpolating the topic name —
between them these removed the `leak%` tell at the source. Scenarios also gained a
per-pack environment clause, because dropping the old `cycle N.N` suffix had been the
only thing keeping them unique in domains with more packs than topics.

**The generators have since been deleted** at the maintainer's request, so the JS packs
under `src/data/certs/<cert>/questions/` are now the only source of truth for these five
banks. Edit the packs directly; there is nothing left to regenerate from, and a rerun
would overwrite the rewritten content.

One limitation this leaves in place: these five banks draw 500 questions from ~20 topics
each, so a topic recurs roughly 25 times wrapped in different scenario contexts, and the
context is generic framing that rarely bears on the answer. That repetition is inherent
to how the banks were built and is not something the distractor rewrite addresses.

### Phase 2 — hand-authored certs at 98%+ (~3,500 questions)

`cncf-cba`, `gcp-pcdoe`, `cncf-cnpa`, `cncf-cnpe`, `cncf-cgoa`, `isc2-ccsp`, `cncf-otca`.
No generator; these are JS packs edited in place. Batch by pack (25 items each) and
re-audit per cert with `npm run audit:distractors -- --cert <id>`.

### Phase 3 — the remaining 20 certs (~10,000 questions)

Work down the audit table. `azure-az900` (50.3%) and `aws-clf` (66.6%) are closest to
target and cheapest to finish; the 90%+ group needs the same treatment as phase 2.

## Guardrails during the rewrite

```bash
npm run backup                            # packs are irreplaceable — always first
npm run audit:distractors -- --cert <id>  # score one cert before and after
npm run validate                          # schema + answer keys + explanation letters
npm run shuffle                           # rebalance A/B/C/D after any option edit
npm run build:content                     # regenerate the index
```

`npm run shuffle` matters here: rewriting options changes their order-independence
assumptions, and the shuffler re-letters everything. Run `npm run audit:explanations`
after it to confirm no explanation refers to a letter that moved.

Once a phase brings its certs under target, wire the gate in:

```json
"validate": "node scripts/validate-content.mjs && npm run audit:explanations && npm run audit:distractors -- --strict"
```
