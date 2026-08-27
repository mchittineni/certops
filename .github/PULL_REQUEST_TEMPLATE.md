## What this changes

<!-- One or two sentences. If it fixes an issue, write "Fixes #123". -->

## Type

- [ ] Content — new questions or flashcards
- [ ] Content fix — a wrong answer or explanation
- [ ] Certification — taking one from `planned` to `live`, or adding a new one
- [ ] App — bug fix or feature
- [ ] Docs / tooling

## Checks

- [ ] `npm run check` passes locally (backup → index → validate → tests with coverage)
- [ ] Generated files (`src/data/*.generated.js`) are committed if content changed
- [ ] One logical change — content and app changes are in separate PRs

## For content changes

- [ ] Every question is answerable from public vendor documentation
- [ ] No material recalled from a real exam (see [CONTRIBUTING.md](../blob/main/CONTRIBUTING.md))
- [ ] Each explanation says why the right answer is right **and** why each distractor is wrong
- [ ] `referenceUrl` points at official documentation, over HTTPS
- [ ] Difficulty bands are honest — `hard` means competing constraints, not just longer

## For app changes

- [ ] No new runtime dependencies (the shipped app has zero)
- [ ] Content still goes through `escapeHtml()`
- [ ] Colours come from tokens — no literal hex below the token layer
- [ ] New logic has tests; coverage thresholds unchanged
- [ ] Checked in both light and dark themes
