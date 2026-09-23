export const GITHUB_GHAS_QUESTIONS_8 = [
  {
    id: "gh-500-176",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "CodeQL Default Setup vs. Advanced Setup Workflow",
    scenario: "An organization wants to enable automated CodeQL code scanning across 200 standard Python repositories with zero YAML maintenance.",
    question: "Which CodeQL enablement method should the team choose?",
    options: [
      { id: 'A', text: "Third-party CLI wrapper scripts executed on local developer machines" },
      { id: 'B', text: "Advanced setup, which creates a bespoke .github/workflows/codeql.yml file in every repository" },
      { id: 'C', text: "Default setup, which automatically detects languages and schedules scans without committing a workflow file" },
      { id: 'D', text: "Manual SARIF file uploads via curl" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Default setup provides zero-configuration code scanning: GitHub automatically determines repository languages, query suites, and scheduling without committing a `.github/workflows/codeql.yml` file into source control.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Default Setup", "CodeQL", "Automation", "Configuration"]
  },
  {
    id: "gh-500-177",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL autobuild Step for Compiled Languages",
    scenario: "A Java project using Gradle fails during the autobuild step of the CodeQL workflow with a heap memory allocation error.",
    question: "What is the recommended remediation to ensure successful database extraction?",
    options: [
      { id: 'A', text: "Keep `autobuild` and raise the runner size so the Gradle daemon has memory to finish" },
      { id: 'B', text: "Replace `autobuild` with the project's own Gradle command between the init and analyze steps" },
      { id: 'C', text: "Keep `autobuild` and commit the Gradle wrapper so the build resolves its own version" },
      { id: 'D', text: "Switch the language to a build-mode of `none`, which skips compilation altogether" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When the heuristic `autobuild` action fails on compiled languages (Java, C++, C#, Go), the standard best practice is removing `autobuild` and inserting custom compilation commands with explicit memory and compiler flags between `init` and `analyze`.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages",
    tags: ["autobuild", "Java", "Gradle", "Compilation"]
  },
  {
    id: "gh-500-178",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: security-extended vs. default",
    scenario: "A fintech team requires code scanning to detect not only critical vulnerabilities, but also medium- and lower-severity security issues and OWASP Top 10 recommendations.",
    question: "Which query suite should be specified in codeql-action/init?",
    options: [
      { id: 'A', text: "queries: security-extended" },
      { id: 'B', text: "queries: default" },
      { id: 'C', text: "queries: minimal" },
      { id: 'D', text: "queries: experimental" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `security-extended` suite includes all default high-precision queries plus lower-severity security queries, defense-in-depth rules, and comprehensive OWASP/CWE checks.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-an-alternative-query-suite",
    tags: ["Query Suites", "security-extended", "CodeQL", "OWASP"]
  },
  {
    id: "gh-500-179",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Database Compilation Requirements",
    scenario: "A developer attempts to run CodeQL on an already-compiled C++ project where object files (.o) and binaries exist in the workspace before the workflow runs.",
    question: "Why does CodeQL fail to extract the source code properly?",
    options: [
      { id: 'A', text: "The pre-built objects are committed to git, and the extractor skips files that the index reports as binary" },
      { id: 'B', text: "The extractor needs network access to fetch the C++ language pack, which the build environment blocks" },
      { id: 'C', text: "The extractor supports only the languages listed in default setup, and this project is not among them" },
      { id: 'D', text: "The extractor observes compiler invocations, and a pre-built tree recompiles nothing, so the database is empty" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL acts as a compiler tracer: it monitors active invocations of `gcc`, `clang`, or `cl.exe`. If the build system uses cached artifacts or incremental builds without recompiling, CodeQL cannot extract the AST, requiring a clean build step (`make clean`).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages",
    tags: ["Compilation", "C++", "Tracer", "CodeQL Database"]
  },
  {
    id: "gh-500-180",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Uploading Third-Party SARIF Scans with category",
    scenario: "A workflow runs both CodeQL and Trivy container vulnerability scanner, uploading SARIF results from both tools in the same job.",
    question: "What parameter in github/codeql-action/upload-sarif ensures the two tools do not overwrite each other's alerts?",
    options: [
      { id: 'A', text: "force-overwrite: false" },
      { id: 'B', text: "token: ${{ secrets.GITHUB_TOKEN }}" },
      { id: 'C', text: "category: '/tool:trivy'" },
      { id: 'D', text: "name: trivy-scan" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `category` string distinguishes separate analysis runs and tools. Setting a unique category (e.g. `/tool:trivy` and `/tool:codeql`) prevents results from clobbering each other in the Code Scanning dashboard.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions",
    tags: ["SARIF", "upload-sarif", "Category", "Integrations"]
  },
  {
    id: "gh-500-181",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Workflow Token Permissions: security-events",
    scenario: "A new advanced setup CodeQL workflow fails during the upload-sarif step with HTTP 403 Forbidden.",
    question: "Which permission must be explicitly declared in the workflow YAML permissions block?",
    options: [
      { id: 'A', text: "contents: write" },
      { id: 'B', text: "id-token: write" },
      { id: 'C', text: "actions: read" },
      { id: 'D', text: "security-events: write" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Uploading code scanning results or SARIF files to GitHub's code security APIs strictly requires the `security-events: write` permission on `GITHUB_TOKEN`.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#recommended-permissions-for-the-github_token",
    tags: ["permissions", "security-events", "GITHUB_TOKEN", "Troubleshooting"]
  },
  {
    id: "gh-500-182",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Pull Request Check Failure Thresholds",
    scenario: "An organization wants CodeQL status checks on pull requests to fail only if Critical or High severity vulnerabilities are detected, but allow Medium and Low alerts without blocking merges.",
    question: "Where is this failure threshold configured in repository settings?",
    options: [
      { id: 'A', text: "In .github/workflows/codeql.yml under fail-fast" },
      { id: 'B', text: "As a security field in package.json, which the package registry surfaces" },
      { id: 'C', text: "In branch protection rules under required status checks" },
      { id: 'D', text: "In Settings → Code security and analysis → Code scanning → Check failure threshold" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Under repository code scanning settings, administrators configure the 'Check failure threshold' (e.g. 'Only Critical and High' vs. 'Critical, High, and Medium') to define what severity triggers a failing PR status check.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels",
    tags: ["Thresholds", "Severity", "Pull Requests", "Governance"]
  },
  {
    id: "gh-500-183",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL RAM and Thread Tuning for Enterprise Codebases",
    scenario: "A 5-million line C# repository experiences CodeQL analyze step timeouts after 6 hours on standard 2-core GitHub-hosted runners.",
    question: "Which scaling and optimization adjustment resolves the performance bottleneck?",
    options: [
      { id: 'A', text: "Move to a larger hosted runner and pass the ram and threads options to the analyse step" },
      { id: 'B', text: "Split the analysis by language so each job builds a smaller database of its own" },
      { id: 'C', text: "Narrow the analysis with a paths filter so unchanged directories are skipped" },
      { id: 'D', text: "Run the analysis only on pull requests, never on the default branch schedule" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enterprise codebases require substantial CPU and memory for inter-procedural AST analysis. Moving to Larger Runners and tuning `threads: 16` and `ram: 28000` dramatically accelerates query execution.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-threads-and-ram",
    tags: ["Performance", "Larger Runners", "RAM", "Tuning"]
  },
  {
    id: "gh-500-184",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Interpreted Languages in CodeQL: No Build Step Required",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Which group of programming languages can be analyzed by CodeQL directly from source code without any compilation or build step?",
    options: [
      { id: 'A', text: "Java, Kotlin and Scala" },
      { id: 'B', text: "Go, Swift and Rust" },
      { id: 'C', text: "C, C++ and C#" },
      { id: 'D', text: "JavaScript, Python and Ruby" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Interpreted languages (JavaScript, TypeScript, Python, Ruby) do not require a build step. CodeQL directly extracts the files from the repository directory.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/about-code-scanning-with-codeql",
    tags: ["Languages", "Interpreted", "Extraction"]
  },
  {
    id: "gh-500-185",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Triage Lifecycle: Dismissing Code Scanning Alerts",
    scenario: "A code scanning alert flags an SQL query as an injection vulnerability. However, the query is executed against a hardcoded static SQLite in-memory database used solely for client-side unit testing.",
    question: "Which dismissal reason should the developer select?",
    options: [
      { id: 'A', text: "False positive" },
      { id: 'B', text: "Used in tests" },
      { id: 'C', text: "Revoked" },
      { id: 'D', text: "Won't fix" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When vulnerable patterns are intentionally contained within test fixtures or mock frameworks, 'Used in tests' accurately records the context while dismissing the alert.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["Triage", "Alerts", "Dismissal", "Code Scanning"]
  },
  {
    id: "gh-500-186",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Pull Request Diff-Based Gating",
    scenario: "A legacy repository has 45 existing open CodeQL alerts on the default branch. A developer opens a pull request fixing a minor CSS bug.",
    question: "Will the CodeQL PR status check fail because of the 45 existing alerts?",
    options: [
      { id: 'A', text: "Yes: any open alert in the repository fails the check on every pull request" },
      { id: 'B', text: "Yes: the 45 legacy alerts must be resolved before this pull request can merge" },
      { id: 'C', text: "No: the analysis runs only on the default branch, never on a pull request" },
      { id: 'D', text: "No: it compares the head against the merge base and fails only on newly introduced alerts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CodeQL pull request analysis is diff-aware: it identifies the merge base and reports alerts introduced by the pull request's changed lines, preventing legacy technical debt from blocking active development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["Diff-Based", "Pull Requests", "CodeQL", "Branch Protection"]
  },
  {
    id: "gh-500-187",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Language Matrix Strategy in Advanced Workflows",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A repository contains a Go backend service and a TypeScript frontend. How should the advanced setup workflow be structured to analyze both?",
    options: [
      { id: 'A', text: "One job that builds both languages, so a single database covers the repository" },
      { id: 'B', text: "Two schedules, running the Go analysis and the TypeScript analysis on alternate days" },
      { id: 'C', text: "Two repositories, one per language, each with its own default setup enabled" },
      { id: 'D', text: "A matrix over `['go', 'javascript-typescript']` so each language is analysed in parallel" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Actions matrix strategies let developers specify `language: ['go', 'javascript-typescript']`, spinning up isolated runners to create clean independent CodeQL databases for each language concurrently.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix", "Multi-Language", "Optimization", "Workflow"]
  },
  {
    id: "gh-500-188",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "SARIF Upload File Limits and Constraints",
    scenario: "A security team generates a massive SARIF file from a third-party tool and attempts to upload it via codeql-action/upload-sarif, but the upload fails.",
    question: "What are the hard size and result limits enforced by GitHub on uploaded SARIF files?",
    options: [
      { id: 'A', text: "500 KB gzipped, and at most 100 results" },
      { id: 'B', text: "1 GB uncompressed, and 100,000 results" },
      { id: 'C', text: "10 MB gzipped, and at most 5,000 results" },
      { id: 'D', text: "No size limit, and no result ceiling" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub limits SARIF uploads to a maximum file size of 10 MB (gzip compressed) or 200 MB uncompressed, with a ceiling of 5,000 result items per upload to maintain UI responsiveness.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF", "Limits", "upload-sarif", "Integrations"]
  },
  {
    id: "gh-500-189",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Excluding Test Paths in CodeQL: paths-ignore",
    scenario: "A Python project includes a `tests/` directory with 500 unit test files that slow down CodeQL analysis and generate false positive alerts.",
    question: "How can the team exclude the tests directory from CodeQL extraction in advanced setup?",
    options: [
      { id: 'A', text: "Set `paths: ['src/**']` in the analyse step's own parameters" },
      { id: 'B', text: "Delete the tests directory in a workflow step before analysis" },
      { id: 'C', text: "Annotate the test files so the extractor skips them on parse" },
      { id: 'D', text: "Set `paths-ignore: ['tests/**']` in the init step or the config file" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the CodeQL configuration file or under `paths-ignore` in `codeql-action/init`, defining path patterns like `tests/**` instructs the extractor to skip test directories, reducing scan times and false positives.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-paths-to-scan",
    tags: ["paths-ignore", "Exclusions", "Performance", "Optimization"]
  },
  {
    id: "gh-500-190",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Tool Status Page Troubleshooting",
    scenario: "A code scanning workflow runs without failing the GitHub Actions job, but no alerts appear in the repository Security tab.",
    question: "Where should the administrator navigate to view diagnostic ingestion and processing errors?",
    options: [
      { id: 'A', text: "Settings, then webhooks, then the delivery log" },
      { id: 'B', text: "Insights, then the dependency graph's own view" },
      { id: 'C', text: "Security, then code scanning, then the tool status view" },
      { id: 'D', text: "Settings, then Actions, then the runner's logs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Tool Status page in the Code Scanning alert view details processing health, SARIF validation warnings, rule configurations, and upload timestamps for every tool sending data to GitHub.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page",
    tags: ["Tool Status", "Debugging", "Code Scanning", "Diagnostics"]
  },
  {
    id: "gh-500-191",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Taint Tracking: Sources, Sinks, and Sanitizers",
    scenario: "In static application security testing with CodeQL, what represents a 'Sink'?",
    question: "Which code component matches the definition of a Sink in taint analysis?",
    options: [
      { id: 'A', text: "The commit metadata recording who last changed the affected line" },
      { id: 'B', text: "Untrusted input arriving from an HTTP request parameter or header" },
      { id: 'C', text: "A validation routine that neutralises the payload before it is used" },
      { id: 'D', text: "A sensitive call such as a database query, file read or shell execution" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In CodeQL taint tracking: a Source is where untrusted data enters the application (e.g. HTTP query parameter), a Sink is the sensitive execution target (e.g. `db.execute()`, `exec()`), and a Sanitizer cleanses the data.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Sources", "Sinks", "SAST"]
  },
  {
    id: "gh-500-192",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Scheduled Analysis for Dormant Repositories",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Why is it a security best practice to include a weekly cron schedule trigger in codeql.yml even for repositories that rarely change?",
    options: [
      { id: 'A', text: "So newly published queries are run against code that has not changed" },
      { id: 'B', text: "So the repository consumes its allocated runner minutes each week" },
      { id: 'C', text: "So the repository is not archived for inactivity by the platform" },
      { id: 'D', text: "So the analysis database is rebuilt before its cache expires" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "As GitHub's security research team publishes new CodeQL queries and CVE definitions weekly, scheduled scans catch vulnerabilities in existing dormant code even when no new commits have been pushed.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#scanning-on-a-schedule",
    tags: ["schedule", "Cron", "CodeQL", "Best Practices"]
  },
  {
    id: "gh-500-193",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Copilot Autofix for Code Scanning Alerts",
    scenario: "A developer views a Cross-Site Scripting (XSS) CodeQL alert on a pull request. A button labeled 'Generate fix' appears next to the alert.",
    question: "How does GitHub Copilot Autofix assist in remediating code scanning alerts?",
    options: [
      { id: 'A', text: "It reads the alert's source and sink and suggests a diff for the developer to review" },
      { id: 'B', text: "It opens a tracking issue with the suggested remediation steps attached" },
      { id: 'C', text: "It pushes the generated fix to the branch once the checks have passed" },
      { id: 'D', text: "It dismisses the alert when it judges the finding to be unreachable" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Copilot Autofix uses the alert's CodeQL analysis to suggest a code change and an explanation directly on the alert. The output is a suggestion that the developer must review and test before committing: it may fail to fix the issue or even introduce new vulnerabilities, so it is never a verified fix. It does not push commits, open issues or dismiss alerts on its own.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning",
    tags: ["Copilot Autofix", "AI Security", "Remediation", "Code Scanning"]
  },
  {
    id: "gh-500-194",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Custom Queries: The .ql File Structure",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A security team authors a custom CodeQL query to detect an insecure proprietary logging method. What metadata comment header is mandatory?",
    options: [
      { id: 'A', text: "A `package:` declaration naming the pack the query belongs to" },
      { id: 'B', text: "A comment block with `@id`, `@kind`, `@problem.severity` and `@precision`" },
      { id: 'C', text: "A `version:` field matching the query pack's published version" },
      { id: 'D', text: "An `author:` field naming the team that maintains the query" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CodeQL queries require structured comment metadata tags (@id, @kind problem/path-problem, @problem.severity error/warning, @precision very-high/high) so the engine can format and prioritize the alert in the UI and SARIF output.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/",
    tags: ["Metadata", "Custom Queries", "QL Language", "CodeQL"]
  },
  {
    id: "gh-500-195",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Downloading CodeQL Databases for Offline Security Research",
    scenario: "A security engineer wants to run experimental custom QL queries against a production repository's AST without running them in CI.",
    question: "How can the engineer obtain the compiled CodeQL database?",
    options: [
      { id: 'A', text: "Clone the repository and build the database locally" },
      { id: 'B', text: "Databases cannot leave the runner that created them" },
      { id: 'C', text: "Request an export of the database from GitHub support" },
      { id: 'D', text: "Download the database bundle produced by the workflow run" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Authorized users with appropriate security permissions can download the compiled CodeQL database bundle from GitHub, allowing offline query exploration and AST debugging using the VS Code CodeQL extension.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-your-code-scanning-configuration/about-codeql-database-generation#downloading-a-codeql-database",
    tags: ["CodeQL Database", "VS Code", "Security Research", "CLI"]
  },
  {
    id: "gh-500-196",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL Multi-Language Monorepo Compilation Tracing",
    scenario: "A monorepo has a C++ core engine, a Go API service, and a Python client. The team wants to use Advanced Setup.",
    question: "How should the compilation and extraction steps be configured across jobs?",
    options: [
      { id: 'A', text: "One job that builds all three, since a single database covers the whole repository" },
      { id: 'B', text: "Matrix jobs where Go and C++ run their own build commands and Python runs without one" },
      { id: 'C', text: "Matrix jobs where each language runs `autobuild`, which detects the build per language" },
      { id: 'D', text: "One job per language, each analysing the whole tree with a path filter for its files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In multi-language monorepos, matrix jobs isolate language extraction: compiled languages execute their specific build scripts (e.g. `make` for C++, `go build` for Go), while interpreted languages execute clean AST extraction in parallel.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning",
    tags: ["Monorepo", "Matrix", "Compilation", "Architecture"]
  },
  {
    id: "gh-500-197",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Alerts in Branch Renames",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A repository administrator renames the default branch from 'master' to 'main'. What happens to historical code scanning alerts?",
    options: [
      { id: 'A', text: "The repository locks until every scan has been re-run" },
      { id: 'B', text: "The open alerts are converted into repository issues" },
      { id: 'C', text: "The historical alerts are deleted with the old branch" },
      { id: 'D', text: "Alert tracking follows the rename, so nothing is lost" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub natively preserves alert history, resolution states, and fingerprints across default branch renames, seamlessly re-pointing existing alerts to the new default branch.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts",
    tags: ["Branch Renaming", "Alert Lifecycle", "Code Scanning"]
  },
  {
    id: "gh-500-198",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Model Packs: Custom Data Extensions",
    scenario: "An enterprise uses an internal framework function `DBUtils.rawQuery()` that CodeQL does not recognize as a SQL sink by default.",
    question: "How can security engineers register this function as a sink without authoring a brand new query?",
    options: [
      { id: 'A', text: "Rewrite the internal helper so it calls the standard library the models cover" },
      { id: 'B', text: "Disable the SQL injection queries until the helper has been refactored away" },
      { id: 'C', text: "Add a model pack whose data extension maps the function as a sql-injection sink" },
      { id: 'D', text: "Fork the CodeQL libraries and add the sink to the upstream query pack" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CodeQL data extensions (Model Packs) allow teams to define YAML configuration mappings declaring custom internal methods as sources, sinks, or neutral summaries, immediately extending existing standard security queries.",
    referenceUrl: "https://codeql.github.com/docs/codeql-for-visual-studio-code/customizing-library-models-for-codeql-analysis/",
    tags: ["Model Packs", "Data Extensions", "Custom Sinks", "Extensibility"]
  },
  {
    id: "gh-500-199",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Viewing Attack Paths in CodeQL Alerts",
    scenario: "A developer reviewing a Path-Problem CodeQL alert in the GitHub UI clicks 'Show paths'.",
    question: "What information does the visual path graph display?",
    options: [
      { id: 'A', text: "A list of the commits and authors that last modified each file on the path" },
      { id: 'B', text: "A step-by-step trace of the untrusted data from its source through to the sink" },
      { id: 'C', text: "The call stack captured while the analysis executed the affected request" },
      { id: 'D', text: "The directory tree of the repository with the affected files highlighted" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Path queries display an interactive step-by-step call graph in the web UI, showing precisely how untrusted data flows from an HTTP source through intermediate assignments and helper functions into the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-details",
    tags: ["PathGraph", "Data Flow", "UI", "Triage"]
  },
  {
    id: "gh-500-200",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "CodeQL CLI: Creating Databases Locally",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A security analyst tests CodeQL locally using the CodeQL CLI. Which command extracts a new database from a Go repository?",
    options: [
      { id: 'A', text: "`codeql database create db --language=go`" },
      { id: 'B', text: "`codeql database scan --all-languages`" },
      { id: 'C', text: "`codeql build --target=go --output=db`" },
      { id: 'D', text: "`codeql init --language=go --db=db`" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `codeql database create [database-dir] --language=[language]` command initializes, extracts, and compiles the source code into a queryable relational CodeQL database locally.",
    referenceUrl: "https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/",
    tags: ["CodeQL CLI", "Database Creation", "Local Testing"]
  }
];

export default GITHUB_GHAS_QUESTIONS_8;
