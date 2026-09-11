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
| `longest%` | the single longest option is the key | **62.7%** | 12-40% |
| `shortest%` | the single shortest option is the key | **11.5%** | 12-40% |
| `strawman%` | items with a distractor nobody would pick | **4.6%** | ≤5% |
| `leak%` | the stem names a distinctive term the key uses and no distractor does | **22.3%** | ≤35% |
| `len gap` | mean key length minus mean distractor length | **+31 chars** | ≤+15 |

`longest%` and `shortest%` are held inside one band rather than merely capped. Chance is
~25% each on four options; far above the band "always pick it" works, far below it
"always eliminate it" works. Both are tells. Trimming keys to fix `longest%` overshoots
into the opposite tell if left unwatched — `finops-focp` reached 64.5% `shortest%` mid-
rewrite, exactly as exploitable as the problem it replaced.

18 of 32 live certifications still breach at least one target.

### What measuring honestly required

Three corrections to the ruler, each of which changed which banks counted as passing:

1. **Leak was measured on words English shares, not words the subject distinguishes.**
   Counting any repeated term made `azure` a leak in an Azure exam. It now counts a term
   only when it is distinctive within that bank — used by at most 2% of its own stems —
   which drops the vendor noise and keeps the real giveaways (`gvisor`, `snapstart`,
   `distroless`).
2. **Leak ignored the scenario, then counted the title.** The scenario is read alongside
   the question, so it counts. The title is not shown while answering (see below), so it
   does not.
3. **Only the long tell was measured.** Adding `shortest%` revealed that five banks from
   the earlier pass sat at 0% — the key was never the shortest option, so eliminating it
   always worked.

### What the verification found

Four structural problems, none visible from the per-bank scores alone:

- **The question title was rendered above the scenario while answering**, and named the
  answer in 4,795 items. Real exams do not title their questions; the title now appears
  only in the bank browser and results review, where the answer is already visible.
- **6,746 questions carried scaffolding that restated the topic after the question had
  already been asked** — `"...security controls? AWS WAF layer 7 web application
  protection is under consideration."` — under five wordings plus 246 fragments left
  truncated by an internal abbreviation.
- **4,000 scenarios named the topic before asking about it**: `"The security engineer
  evaluates Amazon GuardDuty to isolate an EC2 instance..."`. The clause after `to` is
  the real situation; the name in front of it was the giveaway.
- **`audit:filler` was reporting a false all-clear.** A second template family went
  undetected; it now correctly reports 2,000 content-free questions across 8 banks.

Together these took corpus `leak%` from 78.2% to 22.3% without touching a single option.

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

0. **Fix the ruler before the content.** Every threshold here has been wrong at least
   once, and each time it made banks look better or worse than they were. When a score
   moves a long way for a small edit, suspect the measure first.
1. **Every distractor is a real thing.** A named service, setting, or command that
   exists in the exam's blueprint. Never an invented anti-pattern.
2. **Wrong for a stated reason.** Each distractor fails against something the scenario
   says — wrong latency, wrong consistency model, wrong trust boundary, wrong cost
   profile. If it fails for no scenario reason, the scenario is underspecified.
3. **Length parity, in both directions.** Keep all four options within ~20% of each
   other. Trimming an over-long key is usually right — the removed clause is nearly
   always already in the explanation — but trim past the distractors and the key becomes
   identifiable as the short one instead. `shortest%` catches that.
4. **Do not name the key in the stem.** Generated stems like *"…requirements for
   sagemaker data wrangler"* hand over the answer. Ask what the workload needs, not
   which named service to confirm.
5. **Spread the vocabulary.** If the key mentions a term, at least one distractor
   should too, so term-matching does not shortcut reading.
6. **No option letters in prose.** Explanations that say "Option B" break under
   `npm run shuffle`. `npm run audit:explanations` already guards this.

## Where each bank stands

Run `npm run audit:distractors` for live numbers. Three groups:

### Passing (14)

`hashicorp-vault`, `aws-mla`, `finops-focus`, `azure-ai102`, `cncf-opa` (the generator
banks), plus `azure-az900`, `aws-clf`, `gcp-pca`, `azure-az204`, `aws-dva`, `gcp-ace`,
`azure-az104`, `aws-saa`, `finops-focp`.

The generators for the first five **have since been deleted** at the maintainer's
request, so the JS packs under `src/data/certs/<cert>/questions/` are the only source of
truth. Edit the packs directly; a rerun would overwrite the rewritten content.

One limitation remains in those five: they draw 500 questions from ~20 topics each, so a
topic recurs about 25 times in different scenario framing. That repetition is inherent to
how the banks were built and distractor work does not address it.

### Repairable, still breaching (10)

`k8s-ckad`, `azure-az400`, `k8s-cka`, `k8s-cks`, `hashicorp-tfa`, `hashicorp-tfp`,
`github-actions`, `github-ghas`, `aws-dop`, `aws-scs`.

These are genuinely hand-authored and the questions are good; the key is simply more
complete than the distractors. Two of them are part-done. The cost is roughly 200-300
authored strings each, and it does not compress: unlike the generator banks, where one
edit covered 30 questions, these average 2.3 questions per distinct option set. Much of
the remainder is YAML and CLI keys, where the fix is not to trim the key — a correct
command cannot be shortened — but to write distractors of equal specificity. Several
existing ones are invented (`kubectl clone pod`, `helm install --fake`) or jokes
(`Checking email`), which is a content defect independent of length.

### Blocked on authoring, not repair (8)

`gcp-pcdoe`, `isc2-ccsp`, `cncf-cgoa`, `cncf-otca`, `cncf-cnpa`, `cncf-cnpe`,
`gcp-pmle`, `cncf-cba`.

Half of each of these banks — 2,000 questions — is content-free filler whose key is
boilerplate with the topic name interpolated into it (`npm run audit:filler` lists them).
Rewriting distractors cannot rescue an item that asserts nothing. These need real
questions written, and until they are, the whole-bank scores stay bad however good the
authored half is. `cncf-cba`'s authored half already meets every target while the bank
as a whole does not.

Two changes were considered here and rejected as metric-gaming rather than improvement:
stripping trailing parentheticals corpus-wide (it would turn `AWS Key Management Service
(AWS KMS)` into a worse option for a learner), and trimming the boilerplate filler keys
(it would move the score without making the item answerable).

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
