export const GITHUB_GHAS_FLASHCARDS_4 = [
  {
    id: "github-ghas-fc-76",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "Data Flow Analysis vs. Taint Tracking in CodeQL",
    hint: "Exact value preservation vs. tracking untrusted flow through transformations.",
    back: "<strong>Data Flow analysis</strong> tracks whether an exact unchanged value reaches a point in code. <strong>Taint Tracking</strong> models whether data flow has been influenced by untrusted inputs even if transformed (e.g. string concatenation).",
    tags: ["CodeQL", "Taint Tracking", "Data Flow", "Concepts"]
  },
  {
    id: "github-ghas-fc-77",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL VS Code Extension",
    hint: "Developing and testing custom QL queries locally against downloaded databases.",
    back: "The <strong>CodeQL extension for VS Code</strong> provides query authoring assistance, syntax highlighting, AST visualization, and lets engineers run QL queries locally against real code databases.",
    tags: ["VS Code", "CodeQL", "Developer Tools"]
  },
  {
    id: "github-ghas-fc-78",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Handling Build Failures in CodeQL: Replacing autobuild",
    hint: "Troubleshooting compiled language extraction failures.",
    back: "When <code>codeql-action/autobuild</code> fails on complex Java/C++ projects, remove autobuild and write explicit build commands (e.g. <code>run: mvn package -DskipTests</code>) between <code>init</code> and <code>analyze</code>.",
    tags: ["CodeQL", "autobuild", "Troubleshooting", "Compilation"]
  },
  {
    id: "github-ghas-fc-79",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Caching and Performance",
    hint: "Ensuring runner disk space is sufficient for multi-gigabyte CodeQL databases.",
    back: "CodeQL databases can reach 5\u201310 GB on large enterprise codebases. Ensure runner disks have adequate free storage, and consider running CodeQL on dedicated larger runners.",
    tags: ["CodeQL", "Performance", "Disk Space", "Runners"]
  },
  {
    id: "github-ghas-fc-80",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alert Annotations on Code Diff",
    hint: "Clickable step-by-step data flow path paths rendered in GitHub UI.",
    back: "When viewing a CodeQL alert on GitHub, clicking <strong>'Show paths'</strong> renders an interactive visual call graph highlighting each step the untrusted input took from source to sink.",
    tags: ["UI", "Data Flow", "Code Scanning", "Triage"]
  },
  {
    id: "github-ghas-fc-81",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Model Packs: Extending Framework Support",
    hint: "Modeling proprietary internal sanitizers and custom database frameworks.",
    back: "<strong>CodeQL Model Packs</strong> use data extensions (YAML files) to declare proprietary methods as sources, sinks, or neutral summaries without rewriting complex QL queries.",
    tags: ["CodeQL", "Model Packs", "Extensibility", "Custom Frameworks"]
  },
  {
    id: "github-ghas-fc-82",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Configuring CodeQL Schedule Scans",
    hint: "Weekly baseline scanning to detect newly published CVE patterns on dormant repos.",
    back: "CodeQL workflows should include a <strong>schedule trigger</strong> (e.g. <code>cron: '0 3 * * 1'</code>) so repositories are scanned weekly against updated query suites even when no commits are pushed.",
    tags: ["CodeQL", "schedule", "Cron", "Automation"]
  },
  {
    id: "github-ghas-fc-83",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Analyzing JavaScript and TypeScript Monorepos with CodeQL",
    hint: "Ensuring all sub-packages are indexed during database extraction.",
    back: "For large TypeScript monorepos, ensure all dependencies are resolved before analysis (<code>npm ci</code>) so CodeQL's type inference engine can resolve types across package boundaries.",
    tags: ["CodeQL", "TypeScript", "Monorepo", "JavaScript"]
  },
  {
    id: "github-ghas-fc-84",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "Preventing CodeQL ReDoS Vulnerabilities in Custom Queries",
    hint: "Authoring efficient QL predicates without polynomial evaluation explosions.",
    back: "When authoring custom QL queries, ensure predicates are properly bound and avoid non-linear recursion that can cause the query evaluator to consume excessive CPU or timeout.",
    tags: ["CodeQL", "Custom Queries", "Performance", "ReDoS"]
  },
  {
    id: "github-ghas-fc-85",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Tool Status Page",
    hint: "Diagnosing configuration errors, failed uploads, and scanning health.",
    back: "The <strong>Tool status page</strong> in repository settings lists all active code scanning configurations, displaying error logs, SARIF validation issues, and extraction warnings.",
    tags: ["Tool Status", "Debugging", "Code Scanning", "Monitoring"]
  },
  {
    id: "github-ghas-fc-86",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Support for Multi-Language Repositories",
    hint: "Managing independent databases and parallel analysis jobs.",
    back: "For repositories with multiple languages (e.g. Go backend and React frontend), configure a matrix job so each language is extracted into its own independent database in parallel.",
    tags: ["CodeQL", "Matrix", "Multi-Language"]
  },
  {
    id: "github-ghas-fc-87",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Dismissing Alerts via Commit Messages or Comments",
    hint: "Can CodeQL alerts be dismissed via inline source code comments?",
    back: "Unlike linters, CodeQL alerts <strong>cannot be dismissed via inline code comments</strong> (e.g. <code>// ignore-alert</code>) to prevent developers from silently bypassing security controls without audit trails.",
    tags: ["CodeQL", "Governance", "Audit Trail", "Triage"]
  },
  {
    id: "github-ghas-fc-88",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Code Scanning Alert Severity vs. Precision",
    hint: "Understanding Error/Warning/Recommendation and High/Medium/Low precision.",
    back: "CodeQL queries define both <strong>Severity</strong> (Error, Warning, Recommendation) and <strong>Precision</strong> (Very-High, High, Medium, Low). High-precision queries ensure low false-positive rates.",
    tags: ["CodeQL", "Severity", "Precision", "Quality"]
  },
  {
    id: "github-ghas-fc-89",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "SARIF File Format Schema and Validation",
    hint: "Standard JSON specification for static analysis results interchange.",
    back: "SARIF is an OASIS standard JSON format defining <code>runs[].results[]</code>, <code>rules[]</code>, and code locations. GitHub validates SARIF uploads against standard schemas before displaying alerts.",
    tags: ["SARIF", "Standards", "Code Scanning"]
  },
  {
    id: "github-ghas-fc-90",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Using CodeQL with Self-Hosted Runners",
    hint: "System requirements and container permissions for self-hosted execution.",
    back: "Running CodeQL on self-hosted runners requires Git, Python 3, modern glibc, and at least 8 GB RAM. Ensure the runner user has write permissions to create temporary database directories.",
    tags: ["Self-Hosted", "CodeQL", "Runners", "Infrastructure"]
  },
  {
    id: "github-ghas-fc-91",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Token Permissions: security-events: write",
    hint: "The mandatory permission required for uploading SARIF results.",
    back: "To upload CodeQL analysis results or third-party SARIF files, the workflow job must possess <strong><code>permissions: { security-events: write }</code></strong>.",
    tags: ["permissions", "security-events", "GITHUB_TOKEN", "SARIF"]
  },
  {
    id: "github-ghas-fc-92",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis on Merge Queues",
    hint: "Validating code scanning checks in GitHub merge queue workflows.",
    back: "When using GitHub Merge Queues, configure CodeQL to run on <code>merge_group</code> triggers: <code>on: { merge_group: {} }</code> to prevent merged pull requests from breaking the main branch.",
    tags: ["Merge Queue", "Triggers", "CI/CD"]
  },
  {
    id: "github-ghas-fc-93",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "Customizing CodeQL Build Tracing with codeql-runner (Legacy vs Action)",
    hint: "Why the official codeql-action is preferred over manual legacy runners.",
    back: "The <strong>codeql-action</strong> automatically handles tool caching, database creation, environment variables, and SARIF upload, replacing older legacy manual runner wrapper scripts.",
    tags: ["CodeQL", "codeql-action", "Best Practices"]
  },
  {
    id: "github-ghas-fc-94",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Diagnosing CodeQL Alert False Positives",
    hint: "Inspecting data flow paths to verify whether input was neutralized.",
    back: "When triaging suspected false positives, trace the data flow path in the UI. If a custom validation or encoding function is used, author a custom model extension to register it as a sanitizer.",
    tags: ["False Positives", "Triage", "CodeQL", "Sanitizer"]
  },
  {
    id: "github-ghas-fc-95",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis Timeout Configuration",
    hint: "Configuring query execution timeouts in codeql-action/analyze.",
    back: "For complex enterprise codebases, set <strong><code>timeout-minutes: 60</code></strong> on the analysis job to allow deep inter-procedural taint tracking queries sufficient time to complete.",
    tags: ["CodeQL", "Timeouts", "Performance"]
  },
  {
    id: "github-ghas-fc-96",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Auto-Remediation with GitHub Copilot Autofix for CodeQL",
    hint: "AI-generated code fixes suggested directly on Code Scanning alerts.",
    back: "<strong>GitHub Copilot Autofix</strong> analyzes CodeQL alert contexts and automatically drafts verified code suggestions and pull request diffs to remediate detected vulnerabilities.",
    tags: ["Copilot Autofix", "AI Security", "Remediation", "Code Scanning"]
  },
  {
    id: "github-ghas-fc-97",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Retention and Storage",
    hint: "Where are CodeQL databases stored during workflow execution?",
    back: "CodeQL databases are stored temporarily in the runner's working directory during workflow execution and deleted when the runner workspace is cleaned. They are not uploaded to GitHub unless configured.",
    tags: ["CodeQL Database", "Storage", "Runners"]
  },
  {
    id: "github-ghas-fc-98",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Third-Party SAST Tools in GitHub Security Overview",
    hint: "Aggregating SARIF results from multiple scanners in one dashboard.",
    back: "Results from all tools uploading valid SARIF files (CodeQL, Trivy, Checkov, SonarQube) are aggregated side-by-side in GitHub's <strong>Security Overview</strong> dashboard.",
    tags: ["SARIF", "Security Overview", "Third-Party", "Integrations"]
  },
  {
    id: "github-ghas-fc-99",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Diagnostic Information in SARIF",
    hint: "Extracting compilation warnings and telemetry from analysis outputs.",
    back: "The generated SARIF file includes <code>runs[].invocations[]</code> containing execution telemetry, extraction metrics, and compiler warnings to verify what percentage of code was successfully analyzed.",
    tags: ["SARIF", "Telemetry", "CodeQL", "Auditing"]
  },
  {
    id: "github-ghas-fc-100",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Pack Registration: qlpack.yml",
    hint: "The manifest declaring query suite dependencies and target language.",
    back: "A <strong><code>qlpack.yml</code></strong> file defines the pack name, version, dependencies (e.g. <code>codeql/javascript-all</code>), and query directory structure for custom query collections.",
    tags: ["qlpack.yml", "CodeQL Packs", "Metadata"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_4;
