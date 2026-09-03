export const GITHUB_GHAS_FLASHCARDS_3 = [
  {
    id: "github-ghas-fc-51",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "What is CodeQL?",
    hint: "Semantic code analysis engine treating source code as relational data.",
    back: "<strong>CodeQL</strong> is GitHub's industry-leading static analysis engine. It extracts source code into a relational database, allowing queries written in QL to identify semantic vulnerabilities like SQLi, XSS, and buffer overflows.",
    tags: ["CodeQL", "Code Scanning", "SAST"]
  },
  {
    id: "github-ghas-fc-52",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Default Setup vs. Advanced Setup",
    hint: "Zero-configuration automated analysis vs. customizable workflow YAML.",
    back: "<strong>Default setup</strong> enables CodeQL scanning automatically with zero workflow files, auto-detecting languages and scheduling runs. <strong>Advanced setup</strong> generates a customizable <code>codeql.yml</code> workflow for custom builds and queries.",
    tags: ["CodeQL", "Default Setup", "Advanced Setup"]
  },
  {
    id: "github-ghas-fc-53",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Compiled Languages vs. Interpreted Languages in CodeQL",
    hint: "Interpreted languages scan directly; compiled languages require build compilation.",
    back: "Interpreted languages (JavaScript, Python, Ruby) are extracted directly from source files. Compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) require a compiler build step to observe AST and data flow.",
    tags: ["CodeQL", "Compilers", "Languages", "Architecture"]
  },
  {
    id: "github-ghas-fc-54",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL autobuild Step: github/codeql-action/autobuild",
    hint: "Automated heuristic build runner for compiled languages.",
    back: "The <strong><code>autobuild</code></strong> action attempts to detect and run the build system automatically (e.g. <code>mvn compile</code>, <code>gradle build</code>, <code>make</code>). If autobuild fails, replace it with explicit build commands.",
    tags: ["CodeQL", "autobuild", "Compilation"]
  },
  {
    id: "github-ghas-fc-55",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Suites: default vs. security-extended vs. security-and-quality",
    hint: "High-precision default suite vs. comprehensive security vs. code quality rules.",
    back: "<strong>Default suite</strong>: Low false-positive security queries. <strong><code>security-extended</code></strong>: Adds lower-severity security queries. <strong><code>security-and-quality</code></strong>: Adds maintainability, reliability, and code quality checks.",
    tags: ["CodeQL", "Query Suites", "Configuration"]
  },
  {
    id: "github-ghas-fc-56",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Three-Stage Workflow Architecture",
    hint: "init -> build/autobuild -> analyze.",
    back: "A standard CodeQL workflow executes three sequential actions: <strong><code>codeql-action/init</code></strong> (creates DB), the <strong>build step</strong> (compiles source), and <strong><code>codeql-action/analyze</code></strong> (runs queries and posts SARIF).",
    tags: ["CodeQL", "Workflow", "Architecture"]
  },
  {
    id: "github-ghas-fc-57",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Taint Tracking: Sources, Sinks, and Sanitizers",
    hint: "Modeling the path of untrusted user input to sensitive execution functions.",
    back: "In CodeQL: a <strong>Source</strong> is untrusted user input (e.g. HTTP request parameter). A <strong>Sink</strong> is a vulnerable execution function (e.g. SQL query, shell command). A <strong>Sanitizer</strong> is validation logic neutralizing the payload.",
    tags: ["CodeQL", "Taint Tracking", "SAST", "Vulnerability"]
  },
  {
    id: "github-ghas-fc-58",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Triaging Code Scanning Alerts: Dismissal Reasons",
    hint: "False positive, Used in tests, Won't fix.",
    back: "Code scanning alerts can be dismissed by selecting: <strong>'False positive'</strong> (CodeQL misidentified behavior), <strong>'Used in tests'</strong> (test fixture), or <strong>'Won't fix'</strong> (accepted business risk).",
    tags: ["Code Scanning", "Triage", "Alerts"]
  },
  {
    id: "github-ghas-fc-59",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Uploading Third-Party SARIF Results: upload-sarif",
    hint: "Displaying findings from Trivy, Snyk, or SonarQube in GitHub Code Scanning.",
    back: "Third-party static analysis tools export findings in standard SARIF format, uploaded via <strong><code>github/codeql-action/upload-sarif@v3</code></strong> using <code>sarif_file: results.sarif</code>.",
    tags: ["SARIF", "upload-sarif", "Integrations", "Code Scanning"]
  },
  {
    id: "github-ghas-fc-60",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "SARIF Category Parameter in Matrix Builds",
    hint: "Distinguishing SARIF upload results across matrix jobs.",
    back: "When uploading SARIF in a matrix build, configure <strong><code>category: '/language:${{ matrix.language }}'</code></strong> in <code>upload-sarif</code> to prevent uploads from overwriting each other.",
    tags: ["SARIF", "upload-sarif", "Matrix", "Category"]
  },
  {
    id: "github-ghas-fc-61",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Pull Request Checks",
    hint: "Blocking pull request merges when high-severity security vulnerabilities are detected.",
    back: "Code Scanning automatically runs on pull requests, checking the diff against the target branch. In branch protection, require the CodeQL check to pass to block merging vulnerable code.",
    tags: ["Pull Requests", "Code Scanning", "Branch Protection"]
  },
  {
    id: "github-ghas-fc-62",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis: Pull Request Diff-Based Analysis",
    hint: "Alerting only on new vulnerabilities introduced by the pull request.",
    back: "CodeQL compares the PR head commit against the merge base commit. It only fails the PR check if the pull request <strong>introduces new alerts</strong>, preventing historical legacy alerts from blocking PR merges.",
    tags: ["CodeQL", "Pull Requests", "Diff-Based", "Alerts"]
  },
  {
    id: "github-ghas-fc-63",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Language Matrix Configuration",
    hint: "Analyzing multiple languages concurrently across parallel runner jobs.",
    back: "In <code>codeql.yml</code>, use a matrix strategy: <code>strategy.matrix: { language: ['javascript-typescript', 'python'] }</code> to extract and analyze each language in parallel on clean runners.",
    tags: ["CodeQL", "Matrix", "Languages", "Optimization"]
  },
  {
    id: "github-ghas-fc-64",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Compilation Overhead",
    hint: "Why CodeQL requires compiling code from a clean state.",
    back: "CodeQL hooks into the compiler during build execution. To ensure complete extraction, code must be built from a <strong>clean state</strong> (e.g. running <code>mvn clean</code> or <code>make clean</code> before compiling).",
    tags: ["CodeQL", "Compilation", "Database", "Performance"]
  },
  {
    id: "github-ghas-fc-65",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Custom Queries: The .ql Language",
    hint: "Writing bespoke enterprise security rules using object-oriented QL.",
    back: "Security teams author custom queries in <strong>QL</strong> (a declarative, object-oriented query language) stored in <code>.ql</code> files or query packs to detect internal proprietary API misuse.",
    tags: ["CodeQL", "Custom Queries", "QL Language"]
  },
  {
    id: "github-ghas-fc-66",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Specifying Custom Queries in codeql-action/init",
    hint: "Referencing external query packs in the workflow configuration.",
    back: "In <code>codeql-action/init</code>, configure <strong><code>queries: 'security-extended,./.github/codeql/custom.ql'</code></strong> or reference an published GitHub CodeQL pack (<code>queries: 'octocat/custom-pack@1.0.0'</code>).",
    tags: ["CodeQL", "Custom Queries", "Packs", "Configuration"]
  },
  {
    id: "github-ghas-fc-67",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "Supported Languages in CodeQL",
    hint: "C/C++, C#, Go, Java/Kotlin, JavaScript/TypeScript, Python, Ruby, Swift.",
    back: "CodeQL natively supports <strong>C/C++, C#, Go, Java/Kotlin, JavaScript/TypeScript, Python, Ruby, and Swift</strong>, covering the vast majority of modern enterprise software stacks.",
    tags: ["CodeQL", "Languages", "Coverage"]
  },
  {
    id: "github-ghas-fc-68",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL CLI: Running Analysis Locally and in Custom CI",
    hint: "Executing CodeQL database extraction and query execution from the command line.",
    back: "The <strong>CodeQL CLI</strong> is a standalone binary that lets security engineers extract code databases (<code>codeql database create</code>), run queries (<code>codeql database analyze</code>), and produce SARIF files locally.",
    tags: ["CodeQL CLI", "Local Testing", "CI/CD"]
  },
  {
    id: "github-ghas-fc-69",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alerts Lifecycle in Pull Requests",
    hint: "Automatic dismissal when vulnerable code is fixed in subsequent PR commits.",
    back: "When a developer pushes a new commit to a PR that fixes the vulnerable code, CodeQL automatically marks the alert as <strong>resolved (fixed)</strong> and turns the PR check green.",
    tags: ["Pull Requests", "Code Scanning", "Lifecycle", "Automation"]
  },
  {
    id: "github-ghas-fc-70",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Excluding Files from Code Scanning Analysis: paths-ignore",
    hint: "Skipping test suites, vendored libraries, and minified bundles from CodeQL.",
    back: "In <code>codeql-action/init</code>, configure <code>paths-ignore: ['tests/**', 'dist/**', 'vendor/**']</code> to prevent CodeQL from analyzing non-production or vendored code, slashing scan times.",
    tags: ["CodeQL", "paths-ignore", "Optimization", "Triage"]
  },
  {
    id: "github-ghas-fc-71",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL RAM and Thread Tuning for Large Codebases",
    hint: "Allocating compute resources to CodeQL analysis with --ram and --threads.",
    back: "For massive codebases, configure <strong><code>ram: 14336</code></strong> (MB) and <strong><code>threads: 4</code></strong> in <code>codeql-action/init</code> or <code>analyze</code> to optimize query evaluation performance and avoid OOM crashes.",
    tags: ["CodeQL", "Performance", "RAM", "Tuning"]
  },
  {
    id: "github-ghas-fc-72",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Packs: Publishing and Distributing Query Suites",
    hint: "Packaging QL queries as versioned artifacts on GitHub Packages.",
    back: "<strong>CodeQL packs</strong> package queries and library dependencies with a <code>qlpack.yml</code> manifest, published to GitHub Container Registry as OCI artifacts for organization-wide reuse.",
    tags: ["CodeQL Packs", "Packaging", "Distribution", "Enterprise"]
  },
  {
    id: "github-ghas-fc-73",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alerts: Exporting and REST API",
    hint: "Fetching code scanning findings for enterprise reporting.",
    back: "Query <code>GET /repos/{owner}/{repo}/code-scanning/alerts</code> to retrieve open alerts, tool names, rule descriptions, and severity levels for central SIEM dashboard integration.",
    tags: ["Code Scanning", "REST API", "Reporting", "Automation"]
  },
  {
    id: "github-ghas-fc-74",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Protection Rules: Failure Thresholds",
    hint: "Configuring whether High or Medium severity alerts block pull request merging.",
    back: "In repository Code Scanning settings, administrators configure <strong>'Check failure threshold'</strong>: choose whether <strong>'Only Critical and High'</strong> or <strong>'Critical, High, and Medium'</strong> alerts fail PR checks.",
    tags: ["Code Scanning", "Thresholds", "Governance", "Branch Protection"]
  },
  {
    id: "github-ghas-fc-75",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Download for Security Research",
    hint: "Downloading compiled CodeQL databases for deep offline security investigation.",
    back: "Authorized security researchers can export compiled CodeQL databases generated by Actions via API or UI to investigate complex multi-stage vulnerabilities offline using VS Code CodeQL extension.",
    tags: ["CodeQL Database", "Security Research", "VS Code"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_3;
