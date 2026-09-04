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
      { id: 'A', text: "select exec() from java" },
      { id: 'B', text: "from MethodCall call where call.getMethod().hasQualifiedName('java.lang', 'Runtime', 'exec') select call" },
      { id: 'C', text: "from Import i where i.getName() = 'Runtime' select i" },
      { id: 'D', text: "from Class c where c.getName() = 'Runtime' select c" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "uses: github/codeql-action/init@4f3212b61722c71c2555fb9ccf081dd56aa4038f # v3.25.11" },
      { id: 'B', text: "uses: codeql/init" },
      { id: 'C', text: "uses: github/codeql-action/init@latest" },
      { id: 'D', text: "uses: github/codeql-action/init@v3" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "on: { pull_request: { types: [queued] } }" },
      { id: 'B', text: "on: { push: { branches: [merge-queue] } }" },
      { id: 'C', text: "Merge Queues do not support CodeQL" },
      { id: 'D', text: "on: { merge_group: {} }" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "It acts as an external compiler flag" },
      { id: 'B', text: "It acts as a Sanitizer, halting the propagation of taint from source to sink and resolving the alert" },
      { id: 'C', text: "It acts as a Source" },
      { id: 'D', text: "It acts as a Sink" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Disabling all queries except one" },
      { id: 'B', text: "Mounting a persistent volume to cache the CodeQL query compilation cache directory (~/.codeql/cache)" },
      { id: 'C', text: "Running CodeQL without query packs" },
      { id: 'D', text: "Deleting the runner application between jobs" }
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
      { id: 'A', text: "Severity is generated by AI" },
      { id: 'B', text: "They represent the exact same calculation with different labels" },
      { id: 'C', text: "Severity (Error/Warning/Note) is defined by the query author based on rule type; Security Severity (0.0–10.0) is a CVSS-aligned score indicating security exploitability risk" },
      { id: 'D', text: "Severity applies only to pull requests; Security Severity applies only to default branches" }
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
      { id: 'A', text: "qlpack.yml" },
      { id: 'B', text: "package.json" },
      { id: 'C', text: "codeql.config" },
      { id: 'D', text: "action.yml" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "queries: none" },
      { id: 'B', text: "ram: 28000 on a 32 GB Larger Runner" },
      { id: 'C', text: "threads: 0" },
      { id: 'D', text: "timeout-minutes: 5" }
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
      { id: 'A', text: "Require status checks to pass before merging, selecting the CodeQL analysis job as a required status check" },
      { id: 'B', text: "Require a pull request before merging" },
      { id: 'C', text: "Require signed commits" },
      { id: 'D', text: "Enable auto-merge" }
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
      { id: 'A', text: "Precision only applies to secret scanning" },
      { id: 'B', text: "Low-precision queries run faster" },
      { id: 'C', text: "Low-precision queries are not written in QL" },
      { id: 'D', text: "High-precision queries minimize false positive alerts, maintaining developer trust and avoiding alert fatigue during pull request reviews" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Go is interpreted and requires no build" },
      { id: 'B', text: "CodeQL monitors the Go toolchain (go build / go test) or extracts pure Go source files via the Go AST parser" },
      { id: 'C', text: "CodeQL converts Go into Java bytecode" },
      { id: 'D', text: "Go applications cannot be analyzed if they use CGO" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "CSV spreadsheet" },
      { id: 'B', text: "JSON with custom schema" },
      { id: 'C', text: "SARIF (Static Analysis Results Interchange Format)" },
      { id: 'D', text: "Plain text log output" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Local data flow tracks values within a single function; Global data flow tracks values across multiple function calls and procedural boundaries" },
      { id: 'B', text: "Local data flow runs on laptops; Global data flow runs on cloud runners" },
      { id: 'C', text: "Local data flow applies to Python; Global data flow applies to C++" },
      { id: 'D', text: "Local data flow tracks network packets; Global data flow tracks files" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "The alert is moved to a quarantine folder" },
      { id: 'B', text: "CodeQL automatically detects that the data flow path from source to sink has been broken and marks the alert as 'Closed (fixed)'" },
      { id: 'C', text: "A notification asks the security team to re-audit" },
      { id: 'D', text: "The alert remains open until manually deleted" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Permanently in the repository git history" },
      { id: 'B', text: "In Amazon S3 under GitHub's account" },
      { id: 'C', text: "In the user's personal storage quota" },
      { id: 'D', text: "In the ephemeral runner workspace, deleted automatically when the job completes unless explicitly uploaded as an artifact" }
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
      { id: 'B', text: "Swift can only be analyzed through third-party cloud APIs" },
      { id: 'C', text: "A macOS runner (e.g. macos-latest) with Xcode toolchains installed" },
      { id: 'D', text: "A Windows runner with Visual Studio" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "The developer forgot to add unit tests" },
      { id: 'B', text: "CodeQL does not understand JSON" },
      { id: 'C', text: "Base64 decoding and JSON parsing transform data representations but do not validate or sanitize malicious payloads, meaning the data remains tainted" },
      { id: 'D', text: "The base64 function is deprecated" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "GET /repos/{owner}/{repo}/security/all" },
      { id: 'B', text: "GET /repos/{owner}/{repo}/code-scanning/alerts" },
      { id: 'C', text: "POST /repos/{owner}/{repo}/alerts/export" },
      { id: 'D', text: "GET /repos/{owner}/{repo}/sarif/download" }
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
      { id: 'A', text: "Disable CodeQL on Kubernetes" },
      { id: 'B', text: "Pre-bake the CodeQL bundle into the custom Docker runner container image in the runner tool cache" },
      { id: 'C', text: "Download CodeQL over FTP" },
      { id: 'D', text: "Run jobs sequentially on a single runner" }
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
      { id: 'A', text: "Emailing zip files to repository maintainers" },
      { id: 'B', text: "Publishing the pack as an OCI container artifact to GitHub Packages / GitHub Container Registry (ghcr.io)" },
      { id: 'C', text: "Pasting queries into repository README files" },
      { id: 'D', text: "Committing query files into every branch" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "9.0 to 10.0" },
      { id: 'B', text: "4.0 to 6.9" },
      { id: 'C', text: "0.0 to 3.9" },
      { id: 'D', text: "7.0 to 8.9" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "git rm -rf vendor/" },
      { id: 'B', text: "exclude-js: true" },
      { id: 'C', text: "paths-ignore: ['**/vendor/**', '**/*.min.js']" },
      { id: 'D', text: "skip-all-files: true" }
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
      { id: 'A', text: "Generated automatically by AI on the fly" },
      { id: 'B', text: "From an external Wikipedia link" },
      { id: 'C', text: "From the git commit log" },
      { id: 'D', text: "From the companion .qhelp XML/Markdown file located alongside the .ql query in the query pack" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Check the 'Diagnostics' section on the Code Scanning alerts page or inspect the generated SARIF telemetry" },
      { id: 'B', text: "Diagnostics cannot be inspected by users" },
      { id: 'C', text: "Re-run the workflow with debugging disabled" },
      { id: 'D', text: "Delete the compiler toolchain" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "It compiles the CLI from source code on every run" },
      { id: 'B', text: "It connects to local developer machines" },
      { id: 'C', text: "It hardcodes a single CLI version permanently" },
      { id: 'D', text: "It checks GitHub's tool cache on the runner and automatically downloads the latest stable CLI release if not already cached" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `codeql-action` inspects the runner's tool cache and dynamically downloads the latest stable release of the CodeQL CLI engine if the pinned or default version is not pre-installed.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/about-code-scanning-with-codeql",
    tags: ["codeql-action", "Tool Cache", "CLI", "Automation"]
  }
];

export default GITHUB_GHAS_QUESTIONS_9;
