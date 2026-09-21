# Exam readiness

A bank is exam-ready when a candidate who has prepared finds it representative, and a
candidate who has not cannot score above chance by reading its form. Three machine checks
stand between the current banks and that bar. All three are reporting commands, and all
three are printed into every CI run's job summary.

```bash
npm run audit:distractors   # can the answer be picked from the shape of the options?
npm run audit:filler        # do the items assert anything a candidate could know?
npm run audit:repeats       # is the same item or card served several times over?
npm run lint:pack -- --file <pack> --cert <id> --start <n> --end <m> --quota 7/12/6
```

## Where the banks stand

| Measure | Corpus | Banks clean |
| --- | --- | --- |
| Answer given away by option form | 25 of 33 pass every threshold | 25 |
| Content-free templated items | 2,000 questions and 2,000 flashcards across 8 banks | 25 |
| Repeated content (shared option set or card back) | 70% of questions, 68% of cards | **1** |

Run the commands for live numbers. The third row is the one that reframes the other two:
**32 of the 33 live banks repeat themselves, and only `aws-sap` does not.**

## The three defects, and why they need separate names

**1. The answer is visible in the form of the options.** The key is the longest choice, or
the only plausible one, or the only one echoing a term from the stem. Measured by
`audit:distractors`; thresholds, history and the authoring rules are in
[DISTRACTOR-REMEDIATION.md](DISTRACTOR-REMEDIATION.md). Remedy: rewrite the distractors.

**2. The item asserts nothing.** A generator interpolated the topic into fixed prose —
*"Deploy native automation for four opengitops principles … utilizing declarative
specifications"* — and paired it with three anti-patterns. Rewriting the distractors cannot
rescue it, because there is nothing to be right or wrong about. Measured by `audit:filler`:
250 questions and 250 flashcards in each of `gcp-pmle`, `gcp-pcdoe`, `cncf-cgoa`,
`cncf-otca`, `cncf-cba`, `cncf-cnpa`, `cncf-cnpe`, `isc2-ccsp`. Remedy: author them again
from the blueprint. The flashcard half of this (2,000 cards, one sentence with the topic
dropped in) went unreported until the card signals were extended.

**3. The same item is served several times.** A second generator wrote one real item, then
reissued it four more times behind different framing sentences, labelling each copy in its
title — *"Startup Probes for Slow-Starting Legacy Workloads: Dr Failover"*, *"… : High Load
Scale"*, *"… : Security Compliance"*. Each copy is individually sound and passes every other
check. The defect only appears when you count: `hashicorp-vault` draws its 500 questions
from **21 distinct option sets**, `aws-mla` and `azure-ai102` from 16 each, and 24 further
banks reuse every option set at least twice. A learner meets the same fact five times and a
spaced-repetition deck schedules five copies of it, which is precisely what spacing is meant
to prevent. Measured by `audit:repeats`. Remedy: keep one copy, author the rest.

Defects 2 and 3 are both generator artefacts, so their fingerprints live in one place,
[`scripts/lib/generator-signals.mjs`](../scripts/lib/generator-signals.mjs), and the
linter and both audits read them from there rather than keeping private copies that drift.

## Blueprints

Eight live certifications also carry blueprints that do not match the published exam guide:
`cncf-cgoa`, `cncf-otca`, `cncf-cba`, `cncf-cnpa`, `cncf-cnpe`, `gcp-pcdoe`, `gcp-pmle`
(verified against their official sources and found wrong), plus whatever a check of
`isc2-ccsp` turns up. Each now says `blueprintVerified: false` and names its published
domains in a header comment.

The correction cannot land on its own. Every question stores its `domainName` as a string
the validator matches against the blueprint, so changing the domains fails `npm run validate`
on all 250 authored questions in each bank. **Blueprint and bank are rewritten in one
change.**

Each blueprint was checked against its official source in September 2026:

| Certification | Source | Verdict |
| --- | --- | --- |
| `azure-az305` | learn.microsoft.com study guide, skills measured as of 17 April 2026 | corrected in place; it is `planned` with no content, so nothing broke |
| `cncf-cgoa` | training.linuxfoundation.org curriculum | five domains published, four declared |
| `cncf-cnpa` | training.linuxfoundation.org curriculum | six published, four declared |
| `cncf-otca`, `cncf-cba`, `cncf-cnpe` | training.linuxfoundation.org curriculum | four published, four declared, different subjects and weights |
| `gcp-pcdoe` | exam guide PDF linked from cloud.google.com | five sections published, five declared, none matching |
| `gcp-pmle` | exam guide PDF dated 1 June 2026 | six sections published, four declared |
| `isc2-ccsp` | not re-checked | unknown |

Google's exam guides need a text-extraction proxy; the PDFs do not return readable text
from a direct fetch.

## Authoring gate

`npm run lint:pack` scores a single pack before `build:content` has registered it, which is
what an author needs and what neither `validate` (whole corpus, schema only) nor
`audit:distractors` (whole bank, form only) can give.

It **fails** on: the generator fingerprints above; an id, domain or difficulty split that
departs from the pack's assignment; an option set or a scenario repeated inside the pack;
an explanation naming an option letter; a strawman distractor; a pack whose key is the
single longest — or single shortest — option in fewer than 8% or more than 45% of its
items; a pack whose key averages more than 15 characters longer than its distractors; and
the indefensible per-item extremes (options spread more than 3.3x, or a key more than 80
characters longer than every distractor).

It **warns** on: stem-to-key vocabulary leaks item by item, options spread more than 2.3x,
a key more than 20 characters longer than every distractor, thin scenarios and explanations,
and an option text repeated three times inside one pack.

### Those thresholds were measured, not chosen

The first version of this linter failed 22 of the 25 items in one `aws-sap` pack and
rejected `aws-sap` packs 5, 12, 19 and 20 outright — the best bank in the repository, the
one bank free of repetition and passing every bank-level target. The thresholds were guesses
and the guesses were wrong, in the way this repository has seen three times before (see
[DISTRACTOR-REMEDIATION.md](DISTRACTOR-REMEDIATION.md), "Fix the ruler before the content").

Measuring `aws-sap`'s 500 items and 20 packs gave the real distributions:

| Per item | median | p90 | max |
| --- | --- | --- | --- |
| longest-to-shortest option ratio | 1.58 | 2.31 | 3.24 |
| key minus longest distractor | -28 chars | +7 | +60 |

| Per pack (20 packs) | min | median | max |
| --- | --- | --- | --- |
| key is the single longest option | 8% | 21% | 28% |
| key is the single shortest option | 24% | 25% | 30% |
| stem-to-key vocabulary leak | 20% | 48% | 72% |

Three conclusions, all now encoded in the script with the numbers beside them. Per-item
length must warn, not fail: what makes a bank exploitable is the key being *reliably* the
longest, not any single item being lopsided. The pack-level band must be wider than the
bank's 12-40%, because 25 items carry far more sampling noise than 500; 8-45% contains every
`aws-sap` pack and still rejects the generator packs sitting at 100% and 0%. And pack-level
leak cannot be gated at all: the bank-level measure calls a term distinctive when at most 2%
of stems use it, which in a 25-item pack is a floor of 3 stems, or 12%, so nearly every
service name qualifies and the figure inflates to a median of 48% in content that scores 33%
as a bank. It is reported per item, where it is actionable and true.

Running the new linter across the existing corpus surfaced one genuine pre-existing defect:
`aws-sap-461` has an 87-character scenario, below the 100-character floor for an item that
is meant to give a candidate a situation and its constraints.

Both ratchets are wired into the CI `content` job so repaired work cannot regress:

```bash
npm run audit:distractors -- --min-passing 24   # fails if fewer than 24 banks pass
npm run audit:repeats -- --min-clean 1          # fails if fewer than 1 bank is repeat-free
```

Raise each number as banks land. `--strict` on either is the end state.

## What "done" looks like

For each of the nine certifications that need a bank: 500 questions and 500 flashcards, every
pack passing `lint:pack` with no errors, the bank passing `audit:distractors`, zero rows in
`audit:filler` and `audit:repeats`, the verified blueprint applied with
`blueprintVerified: true`, and `azure-az305` flipped from `planned` to `live`. That is
roughly 9,000 authored items, which is the same order of work as the existing corpus.

`azure-az305` has the first 125 of them: question packs 1, 3 and 7 (75 items) and flashcard
packs 1 and 5 (50 cards), each passing `lint:pack` with no errors. It stays `planned` until
its bank is complete, so a partial bank never reaches the catalogue. Those five packs are
the worked example of the standard. Read one before authoring another.
