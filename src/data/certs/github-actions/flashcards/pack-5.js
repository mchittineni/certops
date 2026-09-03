export const GITHUB_ACTIONS_FLASHCARDS_5 = [
  {
    id: "github-actions-fc-101",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Third-Party Marketplace Actions Security Review",
    hint: "Evaluating creator reputation, source code, and release tags before adoption.",
    back: "Best practices for adopting Marketplace actions: verify the publisher badge (Verified Creator or GitHub), inspect open-source repo activity, audit dependencies, and pin actions to full 40-character commit SHAs.",
    tags: ["Marketplace", "Security", "Supply Chain"]
  },
  {
    id: "github-actions-fc-102",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Action Pinning Tools: Step-Security and Dependabot",
    hint: "Automating the replacement of mutable tags with immutable commit SHAs.",
    back: "Tools like StepSecurity and Dependabot automatically convert mutable action tags (<code>@v4</code>) into immutable commit SHAs accompanied by inline comments indicating the semantic version.",
    tags: ["Security", "Pinning", "Supply Chain"]
  },
  {
    id: "github-actions-fc-103",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Official Actions: The actions/* and github/* Namespaces",
    hint: "First-party actions maintained directly by GitHub engineering teams.",
    back: "Actions under the <strong><code>actions/</code></strong> (e.g. checkout, cache, setup-node) and <strong><code>github/</code></strong> (e.g. codeql-action) namespaces are officially developed, vetted, and maintained by GitHub.",
    tags: ["Official Actions", "GitHub", "Best Practices"]
  },
  {
    id: "github-actions-fc-104",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "actions/setup-node: Node.js Runtime Setup",
    hint: "Installing specific Node.js versions, configuring npm auth, and package caching.",
    back: "<strong><code>actions/setup-node@v4</code></strong> installs designated Node.js versions (supporting semantic ranges like <code>20.x</code>), creates <code>.npmrc</code> authentication files for private registries, and caches npm/yarn dependencies.",
    tags: ["setup-node", "Node.js", "Runtime"]
  },
  {
    id: "github-actions-fc-105",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "actions/setup-python: Python Runtime Setup",
    hint: "Managing Python versions, PyPI credentials, and pip caching.",
    back: "<strong><code>actions/setup-python@v5</code></strong> downloads and configures specific Python versions or PyPy, integrates with pip/pipenv/poetry caching, and configures authentication to private package indexes.",
    tags: ["setup-python", "Python", "Runtime"]
  },
  {
    id: "github-actions-fc-106",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "actions/setup-java: Java JDK Distribution Setup",
    hint: "Installing JDKs from Temurin, Zulu, Corretto with Maven/Gradle caching.",
    back: "<strong><code>actions/setup-java@v4</code></strong> installs specific Java JDK versions from multiple distributions (Temurin, Corretto, Zulu) and automates caching for Maven, Gradle, or sbt.",
    tags: ["setup-java", "Java", "Runtime"]
  },
  {
    id: "github-actions-fc-107",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "actions/setup-go: Go Environment Setup",
    hint: "Configuring Go toolchains and go.mod caching.",
    back: "<strong><code>actions/setup-go@v5</code></strong> sets up the Go programming language environment, configures <code>GOPATH</code>, and automatically caches downloaded Go modules based on <code>go.sum</code>.",
    tags: ["setup-go", "Go", "Runtime"]
  },
  {
    id: "github-actions-fc-108",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Publishing NPM Packages via GitHub Actions",
    hint: "Configuring NODE_AUTH_TOKEN with GITHUB_TOKEN or NPM_TOKEN.",
    back: "To publish packages to GitHub Packages npm registry, configure <code>registry-url: 'https://npm.pkg.github.com'</code> in <code>setup-node</code> and pass <code>NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}</code>.",
    tags: ["NPM", "Publishing", "GitHub Packages"]
  },
  {
    id: "github-actions-fc-109",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Publishing Container Images to GitHub Container Registry (ghcr.io)",
    hint: "Using docker/login-action and docker/build-push-action with GITHUB_TOKEN.",
    back: "Authenticate to <strong><code>ghcr.io</code></strong> using <code>docker/login-action</code> with <code>username: ${{ github.actor }}</code> and <code>password: ${{ secrets.GITHUB_TOKEN }}</code>, then build and push multi-platform images.",
    tags: ["Docker", "GHCR", "Containers", "Publishing"]
  },
  {
    id: "github-actions-fc-110",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Automating PR Comments from Actions",
    hint: "Posting automated test coverage or preview links using github-script or APIs.",
    back: "Actions can post comments on pull requests using <strong><code>actions/github-script</code></strong> or the REST API, provided <code>permissions: { pull-requests: write }</code> is granted to the workflow job.",
    tags: ["Pull Requests", "Automation", "github-script"]
  },
  {
    id: "github-actions-fc-111",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "actions/github-script: Inline Octokit JavaScript Execution",
    hint: "Executing Node.js scripts using pre-authenticated Octokit client directly in YAML.",
    back: "<strong><code>actions/github-script@v7</code></strong> allows you to write JavaScript directly inside your workflow to interact with the GitHub API. It pre-authenticates Octokit and injects repository context variables automatically.",
    tags: ["github-script", "Octokit", "API", "Automation"]
  },
  {
    id: "github-actions-fc-112",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Enforcing Code Formatting Checks in CI",
    hint: "Failing builds when code does not adhere to Prettier or linter rules.",
    back: "Run <code>prettier --check .</code> in a step. If formatting deviates, the step exits with code 1, failing the status check and preventing non-compliant code from merging.",
    tags: ["Linting", "CI", "Quality"]
  },
  {
    id: "github-actions-fc-113",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Automated Release Notes Generation",
    hint: "Generating changelogs automatically from merged pull request labels.",
    back: "GitHub Actions can invoke GitHub's automated release notes API (<code>POST /repos/{owner}/{repo}/releases/generate-notes</code>) to automatically categorize merged PRs into categorized markdown changelogs.",
    tags: ["Releases", "Changelog", "Automation"]
  },
  {
    id: "github-actions-fc-114",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Auto-Merging Pull Requests via GitHub Actions",
    hint: "Enabling GitHub auto-merge when required status checks pass.",
    back: "Workflows can call <code>gh pr merge --auto --squash</code> when automated tests pass, delegating final merge execution to GitHub once all required review approvals and status checks succeed.",
    tags: ["Auto-Merge", "Pull Requests", "GitHub CLI"]
  },
  {
    id: "github-actions-fc-115",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Labeling PRs Based on Changed Paths",
    hint: "Using actions/labeler to categorize PRs automatically.",
    back: "<strong><code>actions/labeler@v5</code></strong> inspects changed files against configuration rules in <code>.github/labeler.yml</code> and automatically adds labels (e.g. <code>frontend</code>, <code>backend</code>) to pull requests.",
    tags: ["Labeler", "Triage", "Pull Requests"]
  },
  {
    id: "github-actions-fc-116",
    difficulty: "hard",
    certId: "github-actions",
    domainId: "d2",
    front: "Preventing Script Injection in Workflow Inline Scripts",
    hint: "Never interpolate untrusted context variables directly into run: shell commands.",
    back: "Do NOT write: <code>run: echo '${{ github.event.issue.title }}'</code> because malicious users can inject shell commands. Instead, pass untrusted input via environment variables: <code>env: { TITLE: ${{ github.event.issue.title }} }</code>.",
    tags: ["Security", "Script Injection", "Best Practices"]
  },
  {
    id: "github-actions-fc-117",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "GitHub Actions Support for monorepos",
    hint: "Using path filters, dynamic matrixes, and working-directory for microservices.",
    back: "Monorepo workflows optimize resource use by combining <code>on.push.paths</code> filters (triggering only for changed apps) with dynamic matrixes to build only modified microservice packages.",
    tags: ["Monorepo", "Architecture", "Optimization"]
  },
  {
    id: "github-actions-fc-118",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Artifact Attestations in GitHub Actions",
    hint: "Cryptographically signing and proving build provenance with Sigstore.",
    back: "Using <strong><code>actions/attest-build-provenance</code></strong> generates verifiable SLSA build attestations signed cryptographically via Sigstore, proving the artifact was built from untampered source code.",
    tags: ["Attestation", "SLSA", "Supply Chain", "Security"]
  },
  {
    id: "github-actions-fc-119",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Triggering Downstream Workflows: workflow_run Event",
    hint: "Triggering deployment workflows only after test workflows pass on default branch.",
    back: "Configure <code>on: { workflow_run: { workflows: ['CI'], types: [completed] } }</code>. Check <code>if: github.event.workflow_run.conclusion == 'success'</code> to run downstream deployment workflows.",
    tags: ["workflow_run", "Chaining", "Triggers"]
  },
  {
    id: "github-actions-fc-120",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Handling Matrix Job Failures with Needs Context",
    hint: "Evaluating the aggregate conclusion of all matrix nodes in downstream jobs.",
    back: "A job with <code>needs: [test-matrix]</code> can check <code>needs.test-matrix.result == 'success'</code>. If any matrix node failed, the result evaluates to <code>failure</code>.",
    tags: ["Matrix", "needs", "Status Evaluation"]
  },
  {
    id: "github-actions-fc-121",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Creating Annotations via Workflow Commands",
    hint: "Emitting compiler warnings and error locations directly to GitHub UI.",
    back: "Echoing <code>::error file={name},line={line},col={col}::{message}</code> allows linters and compilers to mark precise code lines on GitHub PR reviews with zero third-party integrations.",
    tags: ["Workflow Commands", "Annotations", "UI"]
  },
  {
    id: "github-actions-fc-122",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Environment Protection: Deployment Branches vs. Tags",
    hint: "Restricting production releases to signed git release tags.",
    back: "Environment rules can require matching tags (e.g. <code>v*.*.*</code>), ensuring that production deployments trigger only when an official release tag is created by authorized release managers.",
    tags: ["Environments", "Tags", "Release Governance"]
  },
  {
    id: "github-actions-fc-123",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Exporting Test Results in SARIF Format",
    hint: "Displaying security and linter findings in GitHub Code Scanning tab.",
    back: "Linters and security scanners export results to standard <strong>SARIF (Static Analysis Results Interchange Format)</strong> JSON, uploaded via <code>github/codeql-action/upload-sarif</code>.",
    tags: ["SARIF", "Code Scanning", "Security"]
  },
  {
    id: "github-actions-fc-124",
    difficulty: "easy",
    certId: "github-actions",
    domainId: "d2",
    front: "Configuring Job Names Dynamically in Matrix",
    hint: "Displaying clear per-permutation names in the workflow execution graph.",
    back: "Set <strong><code>name: Build (${{ matrix.os }} - Node ${{ matrix.node }})</code></strong> at the job level so each matrix job displays its specific configuration clearly in the Actions UI list.",
    tags: ["Matrix", "name", "UI"]
  },
  {
    id: "github-actions-fc-125",
    difficulty: "medium",
    certId: "github-actions",
    domainId: "d2",
    front: "Using Composite Actions from Same Repository",
    hint: "Sharing common multi-step logic locally without publishing to marketplace.",
    back: "Reference a local action stored in the repository using relative path syntax: <strong><code>uses: ./.github/actions/setup-environment</code></strong>.",
    tags: ["Composite Actions", "Local Actions", "DRY"]
  }
];

export default GITHUB_ACTIONS_FLASHCARDS_5;
