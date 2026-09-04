# Security policy

## Reporting a vulnerability

**Do not open a public issue.** Use GitHub's private vulnerability reporting:

> **Security** tab → **Report a vulnerability**

That opens a private advisory visible only to the maintainers. Include what you found,
how to reproduce it, and the impact you think it has. Expect an acknowledgement within
a week.

If private reporting is not enabled on the repository yet, open a normal issue saying
only *"I have a security report, please enable private reporting"* — with no details.

## What this project is

CertOps is a static single-page application with **no backend and no user accounts**.
There is no server to compromise at runtime, no database, and no credentials anywhere in
the stack. All state — attempt history, flashcard schedules, the daily streak, and the
theme — lives in the visitor's own `localStorage` and is never transmitted. The shipped
application has **zero runtime dependencies**.

That shape determines what is and isn't a vulnerability here.

## In scope

| Area | Example |
| --- | --- |
| **Content injection** | Markup in a content pack that escapes escaping and executes. A flashcard's `back` field is intentionally rendered as HTML; a bypass of the validator's tag allow-list is a real finding. |
| **CSP weakness** | A directive that allows script execution or exfiltration that the app does not need. The policy lives in `server.js`, `public/_headers`, and a `<meta>` tag in `index.html`. |
| **Path handling in `server.js`** | Serving a file outside the project directory: traversal, encoded traversal, symlink escape, NUL truncation. |
| **Supply chain** | A build or CI step that could execute untrusted code, or a workflow permission wider than the job needs. |
| **Stored-data disclosure** | Anything that would leak one visitor's `localStorage` off their device. |

## Out of scope

- **`localStorage` is readable by the page and the user.** That is how the app works; it
  is per-browser, per-origin, and never uploaded. Progress is not a secret.
- **Missing rate limiting or authentication.** There is no API and no accounts.
- **`server.js` used as a production server.** It is a zero-dependency dev/preview server.
  Production is a static host; see [docs/CI-AND-SECURITY.md](docs/CI-AND-SECURITY.md).
- **`style-src 'unsafe-inline'`.** Documented and deliberate: views set per-provider brand
  colours through `style="--brand: #..."` attributes, and Safari does not support the
  narrower `style-src-attr`. Inline **scripts** remain blocked.
- **Google Fonts as a third-party origin.** The CSP allows exactly two font hosts and
  nothing else. A report that "the page loads an external stylesheet" is not a finding.
- Findings from automated scanners with no demonstrated impact.

## Supported versions

The `main` branch is the only supported version. There are no released branches to
backport to; fixes ship to `main`.

## What we run continuously

CodeQL, dependency review, `npm audit` (blocking on the production tree, advisory on dev) — on every push and pull request, plus a weekly schedule. See
[.github/workflows/security.yml](.github/workflows/security.yml).
