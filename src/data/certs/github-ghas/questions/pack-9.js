export const GITHUB_GHAS_QUESTIONS_9 = [
  {
    id: "gh-500-201",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Writing CodeQL Predicates: hasQualifiedName",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A security team authors a custom QL query for Java targeting invocations of `Runtime.getRuntime().exec()`. Which QL class and predicate identify this method call?",
    options: [
      { id: 'A', text: "`from Class c where c.hasQualifiedName('java.lang', 'Runtime') select c`" },
      { id: 'B', text: "`from Import i where i.getName() = 'java.lang.Runtime' select i`" },
      { id: 'C', text: "`from Method m where m.getName() = 'exec' select m.getCallers()`" },
      { id: 'D', text: "`from MethodCall c where c.getMethod().hasQualifiedName('java.lang','Runtime','exec')`" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In CodeQL Java analysis, `MethodCall` represents invocations, and `hasQualifiedName('package', 'class', 'method')` precisely matches the target method without ambiguous string matching.",
    referenceUrl: "https://codeql.github.com/docs/codeql-language-guides/navigating-the-call-graph/",
    tags: ["QL Language", "Predicates", "Java", "Custom Queries"]
  },
  {
    id: "gh-500-202",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Managing CodeQL Action Version Pinning",
    scenario: "An enterprise security policy mandates pinning all Actions in CI/CD workflows to full immutable 40-character commit SHAs.",
    question: "How should github/codeql-action steps be declared in workflow files?",
    options: [
      { id: 'A', text: "`uses: github/codeql-action/init@latest` for the newest release" },
      { id: 'B', text: "`uses: github/codeql-action/init@v3` for the major version tag" },
      { id: 'C', text: "`uses: github/codeql-action/init@main` for the tracking branch" },
      { id: 'D', text: "`uses: github/codeql-action/init@4f3212b6...` pinned by commit SHA" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pinning actions by full commit SHA with an inline comment denoting the semantic version guarantees cryptographic immutability, preventing supply chain attacks from malicious tag modifications.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions",
    tags: ["Supply Chain", "Pinning", "Commit SHA", "Security"]
  },
  {
    id: "gh-500-203",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Analysis in Merge Queues",
    scenario: "An engineering organization adopts GitHub Merge Queues to prevent main branch breakage. CodeQL checks are required in branch protection.",
    question: "How must the codeql.yml trigger be updated to support Merge Queue evaluation?",
    options: [
      { id: 'A', text: "on: { push: { branches: [merge-queue] } }" },
      { id: 'B', text: "Merge Queues do not support CodeQL" },
      { id: 'C', text: "on: { merge_group: {} }" },
      { id: 'D', text: "on: { pull_request: { types: [queued] } }" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Workflows required by Merge Queues must listen to the `merge_group` trigger (`on: { merge_group: {} }`) so GitHub can evaluate code scanning on temporary merged candidate batches.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue",
    tags: ["Merge Queue", "Triggers", "CI/CD", "CodeQL"]
  },
  {
    id: "gh-500-204",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking Sanitizer Implementation in CodeQL",
    scenario: "A developer writes a custom sanitization function `StringEscapeUtils.escapeHtml4()` to protect against Cross-Site Scripting (XSS).",
    question: "In CodeQL taint tracking, what role does this escape function play in resolving alerts?",
    options: [
      { id: 'A', text: "It acts as a sanitizer, stopping taint propagating to the sink" },
      { id: 'B', text: "It acts as an additional source of tainted data" },
      { id: 'C', text: "It acts as a barrier guard on the enclosing branch" },
      { id: 'D', text: "It acts as the sink the query is looking for" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Sanitizer in CodeQL data flow models a function that validates or encodes untrusted input, neutralizing malicious payloads so that tainted data cannot reach the sink, successfully clearing the alert.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Sanitizer", "XSS", "Data Flow"]
  },
  {
    id: "gh-500-205",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Compilation in Ephemeral Runners",
    scenario: "A self-hosted runner pool executes CodeQL analysis for dozens of repositories. Each job re-downloads and compiles standard query packs from scratch.",
    question: "What mechanism can accelerate query compilation across jobs on persistent self-hosted runners?",
    options: [
      { id: 'A', text: "Reinstall the runner application between jobs to clear stale state" },
      { id: 'B', text: "Mount a persistent volume over the CodeQL compilation cache directory" },
      { id: 'C', text: "Restrict the run to a single query so compilation is trivial" },
      { id: 'D', text: "Run the queries from source rather than from a published pack" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The CodeQL CLI caches pre-compiled query representations under `~/.codeql/cache`. Persisting this directory across runs avoids recompiling QL packs on every job execution.",
    referenceUrl: "https://codeql.github.com/docs/codeql-cli/codeql-cli-reference/#codeql-compilation-cache",
    tags: ["Performance", "Caching", "Self-Hosted", "CodeQL CLI"]
  },
  {
    id: "gh-500-206",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Severity vs. Security Severity",
    scenario: "When inspecting a Code Scanning alert, the interface displays both 'Severity: Error' and 'Security Severity: 8.5 (High)'.",
    question: "What is the difference between CodeQL Severity and Security Severity?",
    options: [
      { id: 'A', text: "They are the same calculation presented under two different labels in the interface" },
      { id: 'B', text: "Severity applies on pull requests and security severity on the default branch alone" },
      { id: 'C', text: "Severity is the query author's rule classification; security severity is a CVSS-aligned score" },
      { id: 'D', text: "Severity is set per repository, and security severity comes from the advisory feed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CodeQL Severity represents static analysis rule classification (Error, Warning, Note). Security Severity is a quantitative CVSS-aligned score (0.0 to 10.0) defined via `@security-severity` metadata for security vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels",
    tags: ["Severity", "Security Severity", "CVSS", "Metrics"]
  },
  {
    id: "gh-500-207",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Custom Queries: qlpack.yml Manifest Configuration",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A security team authors a collection of company-specific queries. Which file at the directory root declares the pack name, version, and dependencies?",
    options: [
      { id: 'A', text: "package.json" },
      { id: 'B', text: "qlpack.yml" },
      { id: 'C', text: "action.yml" },
      { id: 'D', text: "codeql.config" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `qlpack.yml` manifest declares query pack metadata—including `name:`, `version:`, `dependencies:` (such as `codeql/javascript-all`), and directory paths for custom queries.",
    referenceUrl: "https://codeql.github.com/docs/codeql-cli/about-codeql-packs/",
    tags: ["qlpack.yml", "CodeQL Packs", "Metadata", "Configuration"]
  },
  {
    id: "gh-500-208",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Troubleshooting CodeQL Memory Allocations: --ram",
    scenario: "During extraction of a complex monolithic Java application, the CodeQL analyze step aborts with exit code 137 (OOM killed).",
    question: "How should the advanced setup workflow be adjusted in codeql-action/init or analyze?",
    options: [
      { id: 'A', text: "`queries: none` on the analyse step" },
      { id: 'B', text: "`ram: 28000` on a 32 GB larger runner" },
      { id: 'C', text: "`threads: 0` to use every core" },
      { id: 'D', text: "`timeout-minutes: 5` on the job" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Exit code 137 indicates the Linux kernel killed the process due to memory exhaustion. Specifying `ram: 28000` (in MB) on a 32 GB GitHub-hosted Larger Runner provides adequate heap for large inter-procedural call graphs.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-threads-and-ram",
    tags: ["OOM", "RAM", "Larger Runners", "Performance"]
  },
  {
    id: "gh-500-209",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Pull Request Gating with Required Status Checks",
    scenario: "A development team wants to ensure that pull requests cannot be merged if CodeQL detects any new Critical security vulnerabilities.",
    question: "What configuration in GitHub branch protection rules enforces this requirement?",
    options: [
      { id: 'A', text: "Require status checks before merging, including the analysis job" },
      { id: 'B', text: "Require signed commits on the protected default branch" },
      { id: 'C', text: "Enable auto-merge once the required reviews are in" },
      { id: 'D', text: "Require a pull request before merging to the branch" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling 'Require status checks to pass before merging' and checking the CodeQL job name in branch protection or Rulesets ensures that pull requests with failing code scanning status checks are blocked from merging.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Branch Protection", "Status Checks", "Governance", "CodeQL"]
  },
  {
    id: "gh-500-210",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Filtering Code Scanning Alerts by Precision",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Why does GitHub recommend running queries with 'High' or 'Very-High' precision in continuous integration pull request checks?",
    options: [
      { id: 'A', text: "Precision governs how deeply the analysis follows data flow, and deeper analysis is slower" },
      { id: 'B', text: "High-precision queries keep false positives low, which is what preserves developer trust in the check" },
      { id: 'C', text: "Low-precision queries are experimental and are not included in any published query pack" },
      { id: 'D', text: "Low-precision queries are excluded from SARIF upload, so their findings never reach alerts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Query precision reflects the certainty that a match is a true vulnerability. Running high- and very-high precision queries in CI guarantees minimal false positives, ensuring developers take blocking alerts seriously.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/#precision",
    tags: ["Precision", "False Positives", "CI/CD", "Quality"]
  },
  {
    id: "gh-500-211",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Analyzing Compiled Go Applications with CodeQL",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A Go application uses CGO to bind with local C libraries. How does CodeQL extract Go source code during the build step?",
    options: [
      { id: 'A', text: "It parses Go as an interpreted language, so no build is required" },
      { id: 'B', text: "It compiles Go to an intermediate form the extractor then reads" },
      { id: 'C', text: "It cannot analyse a Go project that binds to C through CGO" },
      { id: 'D', text: "It watches the Go toolchain as it builds, or parses the pure Go sources" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL extracts Go code by monitoring the `go build` compiler toolchain or directly indexing Go source packages. For CGO bindings, the compiler tracer captures both C and Go AST nodes.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages",
    tags: ["Go", "Compilation", "CGO", "CodeQL"]
  },
  {
    id: "gh-500-212",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Third-Party SAST Upload: Integrating Snyk with Code Scanning",
    scenario: "A security team executes Snyk CLI in a GitHub Actions workflow and wants the vulnerability results to display natively in GitHub's Code Scanning alerts tab.",
    question: "What file format must Snyk output to be ingested by GitHub Code Scanning?",
    options: [
      { id: 'A', text: "JSON against the tool's own schema" },
      { id: 'B', text: "Plain text, parsed by the upload action" },
      { id: 'C', text: "CSV, one row per reported finding" },
      { id: 'D', text: "SARIF, the static analysis interchange format" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Code Scanning relies on the industry-standard OASIS SARIF JSON specification. Any third-party tool (Snyk, Checkov, Trivy, SonarQube) emitting valid SARIF can upload findings via `upload-sarif`.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/about-sarif-support-for-code-scanning",
    tags: ["SARIF", "Snyk", "Integrations", "Standards"]
  },
  {
    id: "gh-500-213",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Custom Queries: Local vs. Global Data Flow",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "What is the difference between Local Data Flow and Global Data Flow in CodeQL analysis?",
    options: [
      { id: 'A', text: "Local flow runs on the developer's machine; global flow runs on hosted runners" },
      { id: 'B', text: "Local flow tracks values inside one function; global flow follows them across calls" },
      { id: 'C', text: "Local flow tracks values in memory; global flow tracks them through the database" },
      { id: 'D', text: "Local flow is available for Python; global flow only for the compiled languages" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Local data flow analysis models value flow intra-procedurally within a single function or block. Global data flow (inter-procedural) models data flow across function calls, return statements, and class hierarchies across the entire codebase.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Data Flow", "Inter-Procedural", "Intra-Procedural", "Concepts"]
  },
  {
    id: "gh-500-214",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning: Auto-Resolution of Fixed Vulnerabilities",
    scenario: "A developer pushes a commit that sanitizes untrusted input on line 42, addressing a SQL injection vulnerability.",
    question: "What happens to the CodeQL alert on the default branch once the commit is merged?",
    options: [
      { id: 'A', text: "The alert stays open until somebody dismisses it by hand" },
      { id: 'B', text: "The alert moves to a pending state awaiting security review" },
      { id: 'C', text: "A later analysis no longer finds the path, so the alert closes as fixed" },
      { id: 'D', text: "The alert reopens on the next run so the fix can be audited" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CodeQL continuously verifies alert existence on subsequent default branch scans. When the data flow path no longer connects source to sink, GitHub automatically marks the alert as closed (fixed).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["Alert Lifecycle", "Automation", "Remediation", "Code Scanning"]
  },
  {
    id: "gh-500-215",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Managing CodeQL Database Retention in Storage",
    scenario: "A DevOps engineer asks whether CodeQL databases generated in Actions workflows consume billable GitHub storage quotas.",
    question: "Where are CodeQL databases stored by default during workflow runs?",
    options: [
      { id: 'A', text: "In the repository's package storage, counted against its own quota" },
      { id: 'B', text: "In the platform's object storage, retained for the alert's lifetime" },
      { id: 'C', text: "In the repository's git history, committed by the analysis workflow" },
      { id: 'D', text: "In the runner's workspace, discarded when the job ends unless uploaded" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL databases exist temporarily inside the runner's ephemeral scratch disk during execution. Once `analyze` posts the SARIF file to the API, the database is deleted when the runner finishes unless saved via `upload-artifact`.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/about-code-scanning-with-codeql",
    tags: ["Storage", "Runners", "Database", "Ephemeral"]
  },
  {
    id: "gh-500-216",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Swift Analysis Requirements",
    scenario: "An iOS engineering team configures CodeQL for a Swift application repository. The workflow fails immediately on `ubuntu-latest`.",
    question: "What runner requirement is mandatory for compiling and extracting Swift CodeQL databases?",
    options: [
      { id: 'A', text: "A Linux runner with wine installed" },
      { id: 'B', text: "A Windows runner with Visual Studio" },
      { id: 'C', text: "Swift can only be analyzed through third-party cloud APIs" },
      { id: 'D', text: "A macOS runner (e.g. macos-latest) with Xcode toolchains installed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL analysis for Swift relies on Apple's Xcode build toolchain and Darwin system APIs, requiring execution on macOS runners (e.g. `macos-13` or `macos-14`).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-codeql-for-swift",
    tags: ["Swift", "iOS", "macOS", "Runners"]
  },
  {
    id: "gh-500-217",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Evaluating Path Exploitability in CodeQL Taint Graphs",
    scenario: "A security team evaluates a high-severity alert. The path shows untrusted input passing through a base64 decode and an JSON parser before reaching the sink.",
    question: "Why did CodeQL not clear the alert automatically?",
    options: [
      { id: 'A', text: "Decoding and parsing change the representation but do not validate it, so the data stays tainted" },
      { id: 'B', text: "The decoder is a deprecated API that the analysis no longer models as a taint step" },
      { id: 'C', text: "The new code has no unit tests, so the analysis cannot confirm the fix is effective" },
      { id: 'D', text: "The analysis has no model for the JSON library, so it treats its output as a source" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CodeQL taint tracking tracks semantic influence: decoding base64 or parsing JSON deserializes data but does not prevent malicious payloads (e.g. SQL injection strings) from reaching execution sinks, correctly preserving taint.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Sanitizer", "Exploitability", "Concepts"]
  },
  {
    id: "gh-500-218",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning REST API: Automated Alert Export",
    scenario: "An enterprise security operations center (SOC) synchronizes open Code Scanning alerts every night into Splunk for executive dashboards.",
    question: "Which GitHub REST API endpoint retrieves all code scanning alerts for a repository?",
    options: [
      { id: 'A', text: "GET /repos/{owner}/{repo}/sarif/download" },
      { id: 'B', text: "GET /repos/{owner}/{repo}/code-scanning/alerts" },
      { id: 'C', text: "POST /repos/{owner}/{repo}/alerts/export" },
      { id: 'D', text: "GET /repos/{owner}/{repo}/security/all" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The endpoint `GET /repos/{owner}/{repo}/code-scanning/alerts` returns an array of code scanning findings with tool details, rule IDs, severity, state, and file locations for SIEM integration.",
    referenceUrl: "https://docs.github.com/en/rest/code-scanning/code-scanning#list-code-scanning-alerts-for-a-repository",
    tags: ["REST API", "SIEM", "Splunk", "Automation"]
  },
  {
    id: "gh-500-219",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Caching in Ephemeral Kubernetes Runners (ARC)",
    scenario: "When running CodeQL inside Actions Runner Controller (ARC) ephemeral pods, analysis steps take 20 minutes downloading CodeQL bundles every run.",
    question: "How can platform teams optimize CodeQL action startup times in ephemeral runner pods?",
    options: [
      { id: 'A', text: "Fetch the CodeQL bundle from an internal mirror per job" },
      { id: 'B', text: "Bake the CodeQL bundle into the runner image's tool cache" },
      { id: 'C', text: "Run the analysis outside the cluster on hosted runners" },
      { id: 'D', text: "Run the jobs sequentially so the cache survives between them" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pre-caching the CodeQL action and CLI bundles in the runner container image's tool cache directory (`/opt/hostedtoolcache/CodeQL`) eliminates repeated multi-hundred-megabyte network downloads on ephemeral runners.",
    referenceUrl: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller",
    tags: ["ARC", "Kubernetes", "Optimization", "Runners"]
  },
  {
    id: "gh-500-220",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Pack Distribution: OCI Artifacts",
    scenario: "An enterprise authors a shared pack of proprietary security queries and wants to distribute it securely across 500 enterprise repositories.",
    question: "What artifact distribution mechanism does GitHub support for sharing CodeQL query packs?",
    options: [
      { id: 'A', text: "Publish the pack as a release asset on the query repository" },
      { id: 'B', text: "Publish the pack as a git submodule each repository pulls in" },
      { id: 'C', text: "Publish the pack as an OCI artifact to the container registry" },
      { id: 'D', text: "Commit the query files into every repository's own branches" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CodeQL query packs and model packs can be published directly to GitHub Container Registry as OCI artifacts, allowing workflows across the enterprise to reference them versioned via `queries: 'my-org/custom-pack@1.2.0'`.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["CodeQL Packs", "OCI", "GHCR", "Enterprise"]
  },
  {
    id: "gh-500-221",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Security Severity Score Ranges",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "In GitHub Code Scanning, which Security Severity numerical range corresponds to 'Critical' severity?",
    options: [
      { id: 'A', text: "7.0 to 8.9" },
      { id: 'B', text: "0.0 to 3.9" },
      { id: 'C', text: "9.0 to 10.0" },
      { id: 'D', text: "4.0 to 6.9" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security severity aligns with standard CVSS scoring: Low is 0.0–3.9, Medium is 4.0–6.9, High is 7.0–8.9, and Critical is 9.0–10.0.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels",
    tags: ["Security Severity", "CVSS", "Metrics"]
  },
  {
    id: "gh-500-222",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Analysis: Excluding Vendored and Minified JavaScript",
    scenario: "A React project includes large third-party bundles in `public/vendor/` that cause out-of-memory errors during CodeQL JavaScript extraction.",
    question: "Which configuration in codeql-action/init excludes these minified files from extraction?",
    options: [
      { id: 'A', text: "`exclude: ['vendor', 'minified']` in the config" },
      { id: 'B', text: "`git rm -r --cached vendor/` before the scan" },
      { id: 'C', text: "`paths-ignore: ['**/vendor/**', '**/*.min.js']`" },
      { id: 'D', text: "`skip-queries: ['js/**']` on the analyse step" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specifying `paths-ignore` in `codeql-action/init` ensures minified and vendored libraries are bypassed during JavaScript AST extraction, preventing parser crashes and conserving memory.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-paths-to-scan",
    tags: ["JavaScript", "paths-ignore", "Performance", "Optimization"]
  },
  {
    id: "gh-500-223",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Custom CodeQL Query Help: Authoring .qhelp Documentation",
    scenario: "When developers click a custom CodeQL alert in GitHub, the interface displays an alert description, risk explanation, and example fix.",
    question: "Where does GitHub extract this rich guidance documentation for custom queries?",
    options: [
      { id: 'A', text: "From the commit message on the query's own last change" },
      { id: 'B', text: "From the companion `.qhelp` file beside the query in the pack" },
      { id: 'C', text: "From the query's metadata block, rendered into prose" },
      { id: 'D', text: "From the CWE entry the query's metadata references" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Every CodeQL query is accompanied by a `.qhelp` file that documents vulnerability mechanics, remediation guidance, and secure code examples rendered directly in GitHub's alert view.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/query-help-files/",
    tags: ["qhelp", "Documentation", "Custom Queries", "UI"]
  },
  {
    id: "gh-500-224",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Diagnostic Alerts",
    scenario: "A C++ code scanning run completes, but a banner appears stating 'Extraction warnings occurred for 12 source files'.",
    question: "How can developers investigate which compiler files failed extraction?",
    options: [
      { id: 'A', text: "Diagnostics are internal and cannot be inspected by the repository" },
      { id: 'B', text: "Re-run the workflow with the debug option turned off to shorten logs" },
      { id: 'C', text: "Read the extractor's own log, published as a release asset per run" },
      { id: 'D', text: "Read the diagnostics section on the alerts page, or the SARIF telemetry" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL emits diagnostic results in SARIF telemetry: developers can review compiler warnings and unextracted files under the Code Scanning alerts diagnostic view or workflow run summary.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-diagnostic-information",
    tags: ["Diagnostics", "Troubleshooting", "Compilers", "SARIF"]
  },
  {
    id: "gh-500-225",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Action: Dynamic Tool Caching",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "How does codeql-action ensure it uses the latest compatible CodeQL CLI version on GitHub-hosted runners?",
    options: [
      { id: 'A', text: "It pins one CLI version per action release and never updates within it" },
      { id: 'B', text: "It resolves the CLI version from the repository's own configuration file" },
      { id: 'C', text: "It compiles the CLI from the source bundled with the action on each run" },
      { id: 'D', text: "It checks the runner's tool cache and downloads the latest stable CLI if absent" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `codeql-action` inspects the runner's tool cache and dynamically downloads the latest stable release of the CodeQL CLI engine if the pinned or default version is not pre-installed.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/about-code-scanning-with-codeql",
    tags: ["codeql-action", "Tool Cache", "CLI", "Automation"]
  }
];

export default GITHUB_GHAS_QUESTIONS_9;
