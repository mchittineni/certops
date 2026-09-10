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

All 32 live certifications breach at least one target. 16,000 live questions,
~48,000 distractors.

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

Ordered by leverage: fix the source, not the output, wherever a source exists.

### Phase 1 — generator-backed certs (~2,500 questions, deterministic)

Five certifications are emitted by templates in `scripts/data_gen/`, so the fix is a
bounded edit to ~100 topic tuples per generator plus a regenerate. These are also the
worst-scoring certs in the bank — all five sit at 100% `longest%`.

| Cert | Generator | `longest%` | `strawman%` | `leak%` |
| --- | --- | --- | --- | --- |
| `azure-ai102` | `azure_ai.py` | 100.0 | 30.0 | 93.8 |
| `aws-mla` | `aws_mla.py` | 100.0 | 26.2 | 89.0 |
| `cncf-opa` | `opa.py` | 100.0 | 26.4 | 73.4 |
| `hashicorp-vault` | `vault.py` | 100.0 | 29.2 | 63.6 |
| `finops-focus` | `finops_focus.py` | 100.0 | 0.0 | 70.2 |

Each topic is a tuple of `(title, context, key, distractor1..3, explanation, tags)`.
The three distractor slots are where the strawmen live. Rewrite those slots and the
templated stem, then `python scripts/data_gen/run_all.py` and re-audit.

The generators also fix `leak%` at the source: the stem template interpolates the topic
name, which is why *"…for sagemaker data wrangler"* names the answer. Change the stem
template once and 500 items stop leaking.

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
