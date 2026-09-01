# Content architecture — scaling to 500+ questions per certification

> **Layout and rationale now live in [adr/0001-content-architecture.md](adr/0001-content-architecture.md);
> the certification list and the planned→live workflow live in
> [CERTIFICATION-ROADMAP.md](CERTIFICATION-ROADMAP.md).** This document is the authoring
> reference: schemas, difficulty conventions, and how to get a bank to 500.

Target state: **52 certifications × 500 questions ≈ 26,000 questions** plus flashcards —
roughly 39 MB raw, ~13 MB gzipped, of which a user ever downloads one certification's worth
(~244 KB gzipped). Current state: `npm run stats`. The two things that break at that size
are *load time* (if it all ships in one bundle) and *review quality* (if correctness depends
on humans noticing a broken question in a PR).

This project solves both mechanically.

---

## 1. Content lives in small packs, registered in one file

```
src/data/certs/aws-saa/cert.js               ← blueprint (domains, weights, status, category)
src/data/certs/aws-saa/questions/pack-1.js   ← pack: default-exports an array
src/data/certs/aws-saa/questions/pack-2.js   ← next 100 questions
src/data/certs/aws-saa/flashcards/pack-1.js
```

Nothing outside the certification's folder needs editing. `npm run build:content` scans the
filesystem and regenerates the catalog, registry, and manifest.

**Why packs and not one big file per certification:** a 500-question file is a
5,000-line file. Two people authoring in it at once conflict on every commit.
Keep packs at **≤150 items** and diffs stay readable and merges stay boring.

**Why the generated registry uses literal import specifiers:**

```js
questions: [pack('./certs/aws-saa/questions/pack-1.js', () => import('./certs/aws-saa/questions/pack-1.js'))]
```

The path string is for validator error messages; the arrow function's literal
specifier is what lets a bundler statically see the module. `npm run build`
therefore emits **one lazily-fetched chunk per pack** — confirmed in the build
output — while plain `node server.js` loads the same modules natively with no
build step at all. A dynamic `import(variable)` would have broken the production
build silently.

## 2. The app never loads content it isn't showing

- `src/data/loader.js` loads and caches **one certification at a time**, on demand.
- `src/data/manifest.generated.js` is generated and holds only *counts* (per difficulty, per
  domain, per certification). The catalogue page, the navbar total, and the
  difficulty chips all render from the manifest, so the home page cost stays flat
  whether the bank holds 47 questions or 2,500.
- The question bank paginates (25/page) and scopes to one certification.

Net effect at 2,500 questions: initial load stays ~60 KB of app shell; opening a
module fetches ~250 KB for that certification only.

## 3. Correctness is enforced by a machine, not by review discipline

`npm run validate` fails the build on:

- missing required fields; unknown `difficulty`; `domainId` not in the certification's
  blueprint; `domainName` disagreeing with `domainId`
- option count outside 3–6; duplicate option ids; `correctAnswers` pointing at an
  option that doesn't exist; every option marked correct
- `type: 'single'` with ≠1 answer; `type: 'multiple'` with <2 answers
- **duplicate ids anywhere in the bank** and **near-duplicate questions** (same
  normalised scenario + question text) — the failure mode you actually hit when
  authoring hundreds of items
- non-HTTPS `referenceUrl`
- **markup that must never reach `innerHTML`** — `<script>`, `<iframe>`, `<object>`,
  `<embed>`, `<link>`, `<style>`, `<svg>`, `<form>`, `<meta>`, `<base>`, any `on*=`
  handler, and `javascript:` / `data:text/html` URLs
- any HTML tag outside the allow-list `em strong code kbd br ul ol li p` — checked on
  question `scenario`/`question`/`options`/`explanation` **and** on flashcard
  `front`/`hint`/`back`
- **any explanation that names an option letter** — see below

And warns on: a difficulty band with zero questions, a domain with zero questions,
multi-answer questions that don't say "Choose TWO", thin explanations, and progress
below the 500-per-certification target.

### Why explanations must never name an option letter

`npm run shuffle` re-orders every question's options and re-keys `correctAnswers` from
the option *text*. That keeps answer positions evenly distributed across A–D, but it
means an explanation that says "option B is wrong" or "(C, E)" becomes false the moment
it runs — and a stale letter reference does not merely read oddly, it tells the learner
the correct answer is the wrong one. Explanations must describe an option by its
content, never its position.

`npm run audit:explanations` runs inside `npm run validate` and fails the build on three
forms:

| Form | Example |
| --- | --- |
| prose | `option B`, `choice C`, `answers A and B` |
| bare citation | `… is unsupported (C).` |
| letter list | `(B, C)`, `(incorrect A)`, `(D is wrong)` |

The third form is detected by tokenising each parenthesised group: it counts as a letter
reference only when *every* token is either a single uppercase A–F or a qualifier word
(`wrong`, `incorrect`, `and`, `is`, …). That is what lets it flag `(B, C)` while leaving
prose such as `(an A/AAAA record with an alias flag)` alone.

`npm run fix:explanations` strips the bare-citation form in bulk; the prose and
letter-list forms need a human rewrite, because only a human knows what the letter was
pointing at.

Two further audits exist that report rather than gate:

- `npm run audit:answers` scores the token overlap between each option and the
  explanation, and flags questions where a distractor out-scores the keyed answer. It
  produces false positives by design — a good explanation spends more words rebutting
  distractors than restating the answer — so treat every hit as a prompt to read the
  question, not as a defect.
- `npm run audit:filler` inventories generated placeholder content: items whose text
  matches patterns like `best addresses requirement #77` or an option labelled
  `(Optimal recommended solution)`. Their answers cannot be verified because the
  questions have no substance, and they break under the shuffler because the option text
  hard-codes a letter. This audit never fails the build — deleting a quarter of the bank
  is a decision, not a lint rule.

Run `npm run check` before every commit — it backs up content, regenerates the index,
validates, and runs the test suite under coverage thresholds. CI runs the same gates, plus
a check that the committed generated index matches what the filesystem produces
(see [CI-AND-SECURITY.md](CI-AND-SECURITY.md)).

## 4. Authoring workflow

```bash
# 1. scaffold — never start from a blank file
npm run new:pack -- --cert aws-saa --kind questions --count 50 --difficulty hard --domain d3

# 2. fill in the templates (see the schema below)

# 3. gate it — backup, regenerate the index, validate, test
npm run check

# 4. track progress
npm run stats
```

There is no registry to edit: the pack is picked up because it exists.

The scaffolder pre-fills `certId`, `domainId`, `domainName`, `difficulty`, and unique
ids, so authoring is only about the content itself. `TODO` strings survive validation
on purpose — the *warnings* tell you what's still thin, and the errors catch what is
actually broken.

### Question schema

```js
{
  id: 'aws-saa-42',              // globally unique across the whole bank
  difficulty: 'medium',          // easy | medium | hard
  certId: 'aws-saa',
  domainId: 'd3',                // must exist in this certification's cert.js
  domainName: 'Design Secure Applications and Architectures',  // must match domainId
  title: 'Short scannable title',
  scenario: 'The situation the candidate is given.',
  question: 'What is actually being asked? (Choose TWO)',
  options: [{ id: 'A', text: '…' }, /* 3–6 of them */],
  correctAnswers: ['A', 'B'],
  type: 'multiple',              // single | multiple
  explanation: 'Why the answer is right AND why each distractor is wrong.',
  referenceUrl: 'https://docs…', // official docs only
  tags: ['VPC', 'Security']
}
```

### Flashcard schema

```js
{
  id: 'aws-saa-fc-13',
  difficulty: 'medium',
  certId: 'aws-saa',
  domainId: 'd1',
  front: 'The prompt — ideally a comparison or a "when would you".',
  hint: 'Optional nudge shown on the front.',
  back: 'The answer. Inline <strong> and <code> are rendered.',
  tags: ['RDS']
}
```

> **Flashcard `back` is the one field rendered as raw HTML**, so `<code>` and `<strong>`
> work inside an answer. Everything else — every question field, every option, every card
> front — goes through `escapeHtml()` before it reaches the DOM.
>
> That single exception is why `npm run validate` enforces a tag allow-list
> (`em strong code kbd br ul ol li p`) and rejects handlers and `javascript:` URLs on every
> content field. Authoring is in-repo and reviewed, but a snippet pasted out of a vendor doc
> can carry a tag along with it, and this is the guard. Do not add a second raw-HTML field.

### Difficulty conventions

| Band | Looks like |
| --- | --- |
| **easy** | One service, one correct concept. "Which service gives 11 nines of durability?" |
| **medium** | A scenario with a constraint and plausible distractors. The exam's baseline. |
| **hard** | Two or more constraints in tension (cost *and* RPO), multi-answer, or a service pair that is genuinely easy to confuse. |

Aim for roughly **30 / 45 / 25** easy / medium / hard so Mixed feels like the real
exam and the Hard filter has enough content to fill a session.

## 5. Getting to 500 per certification

Ordered by cost-effectiveness:

1. **Blueprint-first, not vibes-first.** Take the official exam guide's task
   statements. For each one, target `500 × domain weight` questions. `npm run stats`
   plus the per-domain counts in the manifest tell you which task statements are thin.
2. **Generate drafts, gate them hard.** Draft in bulk from official documentation with
   an LLM into the scaffolded pack format, then let `npm run validate` and a human
   pass over the *explanations* be the quality bar. The validator catches the classes
   of error bulk generation actually produces (duplicate scenarios, answers that
   don't match the option list, wrong domain).
3. **Add a `review` field when you have contributors.** `review: 'pending' | 'approved'`
   on a question, filtered out of Exam mode until approved, lets you accept community
   content without degrading the exam simulation. One line in `loader.js`.
4. **One pack per authoring session.** A pack is a natural PR unit: `aws-saa-pack-7.js`
   plus one registry line.

## 6. When to change the storage format

The current format (JS modules, lazy chunks) is right up to roughly **5,000
questions**. Migrate only when one of these is actually true:

| Signal | Change |
| --- | --- |
| Non-engineers need to author | Move packs to YAML/JSON and add a build step that emits the JS. The validator already works on plain objects, so it survives the move. |
| Bank exceeds ~5,000 questions | Emit per-domain JSON shards to `public/data/` and `fetch()` them instead of importing. |
| Catalogue exceeds ~150 certifications | Blueprints are eagerly loaded (~24 KB gz at 52). Split the catalogue per category and lazy-load each tab. |
| You want per-user history across devices | That's a backend, not a content change. Keep content static and add an API for progress only. |
| You want SEO on individual questions | Pre-render the bank to static HTML at build time. |

Do not do these pre-emptively — each one adds a build step you have to maintain.

## 7. Would Docusaurus help here?

**Not for the quiz app — yes, potentially, for a study-notes site beside it.**

Docusaurus is a documentation static-site generator: MDX content, versioned docs,
sidebars, search, SEO. This project's core is a *stateful application* — timers,
adaptive question drawing, locked answers, spaced-repetition scheduling, an exam
navigator. None of that gets easier inside a docs framework; you would be fighting
its routing and page model, adopting React plus a mandatory build step, and
rewriting all five views to gain nothing the current 60 KB shell doesn't already do.

Where it *would* pay off is the thing this repo doesn't have yet: long-form study
material — per-service cheat sheets, domain deep-dives, "how to read a SAA question"
guides — where MDX authoring, versioning per exam revision, built-in search, and
indexable pages are genuinely valuable. The clean split is a separate `docs-site/`
Docusaurus project that links into the quiz app (and could import the same content
packs to render a static, SEO-friendly question index).

If you only want *one* thing: keep this app as-is. Flashcards plus the question bank
already cover the study-reference need.
