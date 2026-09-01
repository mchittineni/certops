# Contributing to Converge

Thanks for helping. There are three useful ways to contribute, in rough order of
how much the project needs them:

1. **Fix a wrong question.** A wrong answer or a misleading explanation actively
   teaches someone the wrong thing before an exam they paid for. This is the
   highest-value contribution and the fastest to review.
2. **Author content.** The bank is at 47 questions against a 500-per-certification
   target, so almost everything is missing. See [Authoring content](#authoring-content).
3. **Improve the app.** Bugs, accessibility, and the [open issues](../../issues).

By contributing you agree that your code is licensed under [MIT](LICENSE) and
your content under [CC BY-SA 4.0](LICENSE-CONTENT), matching the rest of the
project.

---

## Ground rules for content

**Write from public documentation only.** Every question must be answerable from
the vendor's published docs and exam guide. Do not use, paraphrase, or reconstruct
material from a real exam — braindumps are a violation of every certification body's
NDA, they get candidates decertified, and any PR containing them is closed without
discussion.

**Cite an official source.** `referenceUrl` must be vendor documentation, HTTPS,
and specific to the concept being tested. The validator rejects non-HTTPS.

**Explain the distractors.** The explanation must say why the right answer is right
*and* why each wrong option is wrong. A question that only reveals the answer letter
teaches recall, not architecture, and will be sent back in review.

**Never name an option letter in an explanation.** Write "a NodePort Service maps ports
rather than paths", not "option B is wrong". `npm run shuffle` re-orders options and
re-keys answers from option text, so a letter reference becomes false the next time it
runs — and a stale one tells the learner the correct answer is the wrong one. This is a
build failure, not a style preference: `npm run validate` rejects `option B`, `(C)`, and
`(B, C)` / `(D is wrong)` forms alike.

**One pack per pull request.** A pack is ≤150 items and is the natural review unit.
A PR touching five packs across three certifications cannot be reviewed carefully.

---

## Getting set up

```bash
git clone https://github.com/mchittineni/converge.git
cd converge
npm install          # dev tooling only — the app itself has no runtime dependencies

node server.js       # http://localhost:3000, no build step
# or
npm run dev          # Vite dev server with HMR
```

Node 20 or newer. CI tests on 20 and 22.

## The one command that matters

```bash
npm run check
```

Backs up content, regenerates the index, validates every item, and runs the full
test suite under coverage thresholds. **Run it before every commit.** If it passes,
CI will pass; if it fails, it tells you exactly which item and which field.

## Authoring content

```bash
# 1. Scaffold — never start from a blank file.
npm run new:pack -- --cert aws-saa --kind questions --count 25 --difficulty hard --domain d3

# 2. Fill in the templates. Schemas: docs/CONTENT-ARCHITECTURE.md
$EDITOR src/data/certs/aws-saa/questions/pack-2.js

# 3. Gate it.
npm run check

# 4. See where you are.
npm run stats
```

There is no registry to edit and no index to update by hand — a pack is picked up
because the file exists. `npm run build:content` (which `npm run check` runs) rewrites
the generated files.

Aim for roughly **30 / 45 / 25** easy / medium / hard, so Mixed difficulty feels like
the real exam and the Hard filter has enough content to fill a session.

### Taking a certification from `planned` to `live`

47 of the 52 certifications are scaffolded with **placeholder blueprints**. Before a
certification can go live, its `cert.js` needs real domains and weights from the
official exam guide, `blueprintSource` set to that guide's URL, and
`blueprintVerified: true`. Full walkthrough:
[docs/CERTIFICATION-ROADMAP.md](docs/CERTIFICATION-ROADMAP.md#taking-one-certification-from-planned-to-live).

The validator will not let a `live` certification ship TODO placeholders or zero
questions, so an incomplete promotion fails loudly rather than shipping an empty module.

## Reporting a content error

Use the **Content error** issue template. Include the question `id` — it is shown in
the question bank — and say what the correct answer should be and which official doc
says so. That turns a report into a one-line fix.

## Code contributions

The house style is the existing code. Specifically:

- **No runtime dependencies.** The shipped app is vanilla ESM with zero `dependencies`,
  and that is a feature, not an accident. A PR adding one needs to argue for it first.
- **Vanilla ESM, no framework.** Views are template-literal functions returning HTML
  strings; state lives in `src/state.js`; every interaction is a `data-action` attribute
  handled by the one delegated dispatcher in `src/app.js`.
- **Escape content by default.** Everything from a content pack goes through
  `escapeHtml()`. The single exception is a flashcard's `back`, which renders as HTML so
  `<code>` works — and is therefore restricted to an allow-list of tags by the validator.
  Do not add a second exception.
- **Colours come from tokens.** `src/styles/main.css` defines a complete light palette on
  `:root` and overrides the same token names under `[data-theme="dark"]`. There are no
  literal colours below the token layer; a hardcoded hex in a component is a bug that
  shows up as invisible text in one theme.
- **Tests are behavioural.** They drive real `data-action` clicks and keydowns through a
  headless DOM shim. Assert on intent ("the explanation appears after Check Answer"), not
  on exact counts or markup, so the suite survives a redesign.
- **Coverage thresholds are enforced** by `.c8rc.json`. New logic needs tests; lowering a
  threshold to make CI pass is not the fix.

## Commits and pull requests

- Present tense, imperative: `add 25 hard CKA questions for domain d3`.
- One logical change per PR. Content and app changes go in separate PRs.
- Fill in the PR template — it asks whether `npm run check` passed, and that is the
  only question CI can't answer for you before it runs.

## Security

Do not open a public issue for a vulnerability. See [SECURITY.md](SECURITY.md).
