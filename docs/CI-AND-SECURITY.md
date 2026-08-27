# CI, Deployment, and Security

Converge is a static, dependency-free SPA. That shapes every decision here: there
is no server to compromise at runtime, so the attack surface is the **supply chain**
(what gets built) and the **browser** (what the page is allowed to do).

## Pipelines

| Workflow | Trigger | What it gates |
|---|---|---|
| `.github/workflows/ci.yml` | push / PR to `main` | Content index is in sync, content validates, tests pass on Node 20 + 22, coverage thresholds hold, production build succeeds |
| `.github/workflows/security.yml` | push / PR / weekly cron | CodeQL, dependency review, `npm audit` |
| `.github/workflows/deploy.yml` | push to `main` | Validates + tests, then builds and publishes to GitHub Pages |

### The drift gate

`src/data/catalog.generated.js`, `registry.generated.js`, and `manifest.generated.js`
are generated but **committed**, so the app runs with no build step. CI regenerates
them and fails if the result differs from the commit. Without that gate a forgotten
`npm run build:content` silently drops a whole certification from the catalogue —
the app would keep working, just with less content, which is the worst kind of bug.

### Actions are pinned to commit SHAs

Every `uses:` in every workflow names a full 40-character commit SHA, with the human
version in a trailing comment:

```yaml
- uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
```

A tag like `@v4` is a *mutable pointer* — whoever controls the action's repository can
move it to any commit, and every workflow in the world that references it runs the new
code on the next push. That is the shape of the tj-actions/changed-files compromise
(March 2025), where a moved tag turned a widely used action into a credential dumper.
A SHA cannot be moved.

This matters here even though the repository holds no secrets: the `deploy` job has
`pages: write` and `id-token: write`, and the CodeQL job has `security-events: write`.
A compromised action in either would be a real problem.

Staying current is Dependabot's job — it understands SHA pins, bumps the SHA, and
rewrites the version comment, so pinning trades a supply-chain risk for a monthly PR
rather than for staleness.

Pins currently target the **latest release of each action**, all of which run on the
`node24` runtime. Before a major bump lands, check that the inputs a workflow passes
still exist — that is the only thing a major version of these actions tends to break:

```bash
# What does this version accept?
gh api repos/actions/setup-node/contents/action.yml?ref=v7.0.0 --jq .content | base64 -d

# Resolve a tag to the SHA to pin.
gh api repos/actions/checkout/commits/v7.0.1 --jq .sha
```

### Why the security workflow blocks on production advisories only

The app ships **zero runtime dependencies**, so any advisory under
`npm audit --omit=dev` means something got into the shipped bundle that should not
be there — a hard failure. Dev-dependency advisories (Vite, simple-icons) are
reported as warnings; they affect the build machine, not users.

## Browser hardening

The Content Security Policy is defined in three places that must stay in sync:

| Where | Applies to |
|---|---|
| `server.js` → `SECURITY_HEADERS` | local `npm start` |
| `public/_headers` | Netlify / Cloudflare Pages (copied into `dist/` by Vite) |
| `<meta http-equiv>` in `index.html` | GitHub Pages, which cannot send custom headers |

Notable directives:

- `script-src 'self'` — no inline scripts, no CDN. The app is ESM from origin only.
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` — `'unsafe-inline'`
  is required because views set per-provider brand colors through
  `style="--brand: #..."` attributes (`src/views/brand.js`). The narrower
  `style-src-attr` would be correct but Safari does not support it, so it would
  break styling there. Inline **scripts** remain blocked, which is what matters.
- `connect-src 'self'` — the app makes no network calls; a smuggled exfil attempt fails.
- `frame-ancestors 'none'` / `X-Frame-Options: DENY` — no clickjacking a quiz.
- `frame-ancestors` is header-only and is deliberately absent from the meta tag.

`scripts/test-server.mjs` asserts all of this against the real server, including
that `script-src` never gains `'unsafe-inline'` and that `default-src` never gains
a wildcard. It also covers path traversal (plain and percent-encoded), NUL bytes,
non-GET methods, and symlink escape via `fs.realpath`.

## Content escaping, and the one exception

Views assemble HTML strings and assign them with `innerHTML`, but every content field
is passed through `escapeHtml()` on the way — question titles, scenarios, prompts,
options, explanations, tags, and flashcard fronts.

**One field is deliberately not escaped:** a flashcard's `back`, so that `<code>` and
`<strong>` render inside an answer. That is the field the markup rules below actually
protect. They are applied to every content field regardless, because defence in depth
across a 26,000-item bank costs nothing and a second raw-HTML field would otherwise be
one careless PR away.

`scripts/validate-content.mjs` fails the build on:

- `<script>`, `<iframe>`, `<object>`, `<embed>`, `<link>`, `<style>`, `<svg>`,
  `<form>`, `<meta>`, `<base>`
- any `on*=` event-handler attribute
- `javascript:` and `data:text/html` URLs
- any HTML tag outside the allow-list `em strong code kbd br ul ol li p`

This matters most when content is pasted out of an exam guide or a vendor doc, which is
exactly how a stray tag gets in.

## Deploying elsewhere

The build is a plain static directory. `BASE_PATH` controls the URL prefix:

```bash
BASE_PATH=/converge/ npm run build   # GitHub Pages project site
npm run build                        # root domain / Netlify / Cloudflare Pages
```

Any host works, with two requirements: serve `index.html` for unknown paths
(the deploy workflow copies it to `404.html` for Pages), and send the headers from
`public/_headers` if the host supports them.

## Coverage

`npm run coverage` runs the whole suite under c8 and enforces the thresholds in
[.c8rc.json](../.c8rc.json). `npm run check` uses it, so coverage cannot regress
without failing the same command that gates a commit.

| Metric | Threshold | Current |
|---|---|---|
| statements | 90% | 99% |
| branches | 82% | 87% |
| functions | 90% | 98% |
| lines | 90% | 99% |

The thresholds sit below current coverage on purpose — a threshold pinned to the
exact current number fails on the next honest refactor, which teaches everyone to
lower it. The gap is the working room; the gate still catches a real drop.

**Scope.** `src/data/certs/**` and `*.generated.js` are excluded. Content packs and
generated index files are data, not logic: importing them once would report 100%
and drag the whole average up, hiding the branches that matter. Content is checked
by `npm run validate` instead, which is a much stronger gate than "it parsed".

**Where the tests are.**

| Suite | Covers |
|---|---|
| `test-select.mjs` | difficulty filtering, domain-weighted sampling, adaptive escalation, scoring |
| `test-lib.mjs` | spaced repetition, daily challenge, attempt history — including corrupt JSON and blocked storage |
| `test-loader.mjs` | lazy chunk loading: caching, in-flight de-duplication, failure and retry |
| `test-storage-migration.mjs` | the one-time `opsquiz_*` → `converge_*` key migration |
| `test-app.mjs` | end-to-end flows against a headless DOM shim, driven by real `data-action` clicks and keydowns |
| `test-scaffold.mjs` | the authoring lifecycle: scaffold → index → validate → remove |
| `test-server.mjs` | security headers and path handling against the real server |

**What is deliberately not covered.** A handful of defensive branches are
unreachable through the app: an empty quiz pool (validation rejects a live
certification with no questions), an off-band difficulty in `drawAdaptive`
(validation rejects it in a pack). They are tested directly as unit calls where
that is possible, and otherwise left as the guard rails they are.

The headless DOM shim (`scripts/lib/dom-shim.mjs`) is what makes app coverage
possible without a browser. Two parts matter for testability:

- **Intervals are captured, not scheduled.** `dom.advanceSeconds(n)` steps the quiz
  clock synchronously, so a test can watch a 20-minute exam run out and assert the
  auto-submit. A real interval would make the suite both slow and flaky.
- **`querySelector` returns real element stubs** for the timer box and the search
  inputs, so the focus-restore and countdown code paths are actually reachable.
