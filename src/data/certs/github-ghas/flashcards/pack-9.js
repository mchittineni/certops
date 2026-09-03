export const GITHUB_GHAS_FLASHCARDS_9 = [
  {
    id: "github-ghas-fc-201",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Ruby and Bundler Support",
    hint: "Updating Gemfile and Gemfile.lock dependencies.",
    back: "Dependabot inspects <code>Gemfile</code> and <code>Gemfile.lock</code>, evaluating Ruby version constraints and generating pull requests with Rubygems changelogs.",
    tags: ["Dependabot", "Ruby", "Bundler"]
  },
  {
    id: "github-ghas-fc-202",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Rust and Cargo Support",
    hint: "Managing dependencies in Cargo.toml and Cargo.lock.",
    back: "Configure <code>package-ecosystem: 'cargo'</code> in <code>dependabot.yml</code>. Dependabot parses crates.io dependencies and updates lockfiles according to semantic version rules.",
    tags: ["Dependabot", "Rust", "Cargo"]
  },
  {
    id: "github-ghas-fc-203",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    front: "Supply Chain: Typosquatting Attack Mechanics",
    hint: "How malicious actors publish package names differing by one letter.",
    back: "Attackers publish malicious packages with names mimicking popular libraries (e.g. <code>cross-envv</code> instead of <code>cross-env</code>). Dependency Review and lockfile verification defend against typosquatting.",
    tags: ["Supply Chain", "Typosquatting", "Security"]
  },
  {
    id: "github-ghas-fc-204",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Auto-Merge Integration",
    hint: "Enabling automatic merging of safe Dependabot patch updates.",
    back: "Combine GitHub Actions with <code>gh pr merge --auto --squash</code> and Dependabot metadata to automatically merge minor patch updates when all CI checks pass.",
    tags: ["Dependabot", "Auto-Merge", "Automation"]
  },
  {
    id: "github-ghas-fc-205",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Alerts: Email Digest Frequency",
    hint: "Configuring daily vs. weekly summary emails for dependency vulnerabilities.",
    back: "Users can configure whether Dependabot sends an individual email immediately for every alert, or bundles alerts into a single <strong>daily or weekly digest email</strong>.",
    tags: ["Dependabot", "Email", "Notifications"]
  },
  {
    id: "github-ghas-fc-206",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Extractor Architecture",
    hint: "How CodeQL hooks into compilers and AST parsers.",
    back: "For compiled languages, the CodeQL <strong>Extractor</strong> intercepts calls to compiler binaries, capturing intermediate representations and AST nodes to build the relational database.",
    tags: ["CodeQL", "Extractor", "Compilers", "Architecture"]
  },
  {
    id: "github-ghas-fc-207",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Predicate Recursion and Termination",
    hint: "Ensuring recursive predicates in QL evaluate over finite relations.",
    back: "Because QL is based on Datalog, all recursion must be <strong>monotonic</strong>. The CodeQL evaluator guarantees termination by evaluating relations over fixed-point sets.",
    tags: ["CodeQL", "QL Language", "Datalog", "Recursion"]
  },
  {
    id: "github-ghas-fc-208",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Inter-Procedural Data Flow Analysis",
    hint: "Tracking tainted data flow across multiple function calls and class boundaries.",
    back: "CodeQL evaluates <strong>inter-procedural data flow</strong>, tracing untrusted input through nested function arguments, return values, and object properties across multiple source files.",
    tags: ["CodeQL", "Data Flow", "Inter-Procedural", "SAST"]
  },
  {
    id: "github-ghas-fc-209",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Pack Dependencies",
    hint: "Declaring standard library dependencies in qlpack.yml.",
    back: "In <code>qlpack.yml</code>, specify dependencies such as <code>codeql/java-all: '*'</code> to import standard control flow and taint tracking libraries when authoring custom queries.",
    tags: ["qlpack.yml", "CodeQL Packs", "Dependencies"]
  },
  {
    id: "github-ghas-fc-210",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alerts: Filtering by Branch",
    hint: "Viewing code scanning findings on develop vs. main branches.",
    back: "The Code Scanning alert UI allows filtering by <strong>Branch</strong>, showing which vulnerabilities exist on feature branches versus code merged into production default branches.",
    tags: ["Code Scanning", "UI", "Branching"]
  },
  {
    id: "github-ghas-fc-211",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL: Scanning C/C++ Projects with Custom Compilers",
    hint: "Wrapping non-standard compilers during CodeQL database creation.",
    back: "When using specialized cross-compilers (e.g. embedded GCC toolchains), specify the compiler command explicitly in <code>codeql database create --command='make CC=arm-gcc'</code>.",
    tags: ["CodeQL", "C++", "Compilers", "Embedded"]
  },
  {
    id: "github-ghas-fc-212",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis: Handling Swift and Xcode Projects",
    hint: "Building Swift projects on macOS runners with codeql-action.",
    back: "CodeQL Swift analysis requires a <strong>macOS runner</strong> (e.g. <code>macos-latest</code>). The build step executes <code>xcodebuild</code> or <code>swift build</code> to extract the AST.",
    tags: ["CodeQL", "Swift", "macOS", "Apple"]
  },
  {
    id: "github-ghas-fc-213",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Alert Severity Badges: Error, Warning, Note",
    hint: "How CodeQL problem severity levels map to GitHub alert icons.",
    back: "CodeQL <code>@problem.severity error</code> maps to a red <strong>Error</strong> badge; <code>warning</code> maps to a yellow <strong>Warning</strong> badge; <code>recommendation</code> maps to a blue <strong>Note</strong> badge.",
    tags: ["CodeQL", "Severity", "UI"]
  },
  {
    id: "github-ghas-fc-214",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning REST API: Updating Alert State",
    hint: "Resolving code scanning alerts programmatically via API.",
    back: "Execute <code>PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}</code> with <code>state: 'dismissed'</code> and <code>dismissed_reason: 'false positive'</code> from automated scripts.",
    tags: ["Code Scanning", "REST API", "Automation"]
  },
  {
    id: "github-ghas-fc-215",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Custom Queries: Writing a Unit Test",
    hint: "Testing custom QL queries against test codebases with .expected files.",
    back: "CodeQL CLI supports running query tests via <code>codeql test run</code>. It executes queries against small snippet test files and verifies outputs match expected <code>.expected</code> result files.",
    tags: ["CodeQL", "Testing", "Unit Tests", "Custom Queries"]
  },
  {
    id: "github-ghas-fc-216",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "SARIF Upload Limits: File Size and Alert Counts",
    hint: "10 MB gzip file size limit and 5,000 alert ceiling per SARIF upload.",
    back: "GitHub enforces upload boundaries on SARIF files: max <strong>10 MB gzipped (or 200 MB uncompressed)</strong> and a maximum of <strong>5,000 results per upload</strong>.",
    tags: ["SARIF", "upload-sarif", "Limits"]
  },
  {
    id: "github-ghas-fc-217",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis: Pull Request Merge Base",
    hint: "Why CodeQL requires checkout of pull request merge commit.",
    back: "<code>actions/checkout</code> in pull request workflows checks out <code>refs/pull/{num}/merge</code>, ensuring CodeQL analyzes the exact code state resulting from merging the PR.",
    tags: ["CodeQL", "Pull Requests", "checkout", "Git"]
  },
  {
    id: "github-ghas-fc-218",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alert Dismissal Audit Trail",
    hint: "Recording who dismissed an alert, when, and their written comment.",
    back: "When an alert is dismissed, GitHub permanently records the dismissing user, timestamp, selected dismissal reason, and mandatory explanatory comment for compliance auditing.",
    tags: ["Code Scanning", "Audit Trail", "Compliance", "Triage"]
  },
  {
    id: "github-ghas-fc-219",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "Modeling Custom Sanitizers in CodeQL",
    hint: "Teaching CodeQL that an internal encoding function prevents SQLi.",
    back: "Extend <code>TaintTracking::Configuration</code> and override <code>isSanitizer(DataFlow::Node node)</code> to include calls to your proprietary validation method, clearing false positive alerts.",
    tags: ["CodeQL", "Sanitizer", "Custom Queries", "Taint Tracking"]
  },
  {
    id: "github-ghas-fc-220",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Compilation Cache",
    hint: "How the CodeQL evaluator caches compiled QL queries.",
    back: "The CodeQL evaluator caches compiled query representations in the <code>~/.codeql/</code> cache directory, drastically accelerating subsequent analysis runs on persistent self-hosted runners.",
    tags: ["CodeQL", "Performance", "Caching"]
  },
  {
    id: "github-ghas-fc-221",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning: Integration with Microsoft Defender for Cloud",
    hint: "Streaming GitHub code scanning findings into Azure Defender.",
    back: "Native integration between GitHub and Microsoft Defender for Cloud streams CodeQL findings and secret alerts directly into Azure's unified security operations center (SOC) dashboard.",
    tags: ["Azure", "Defender", "Integration", "SOC"]
  },
  {
    id: "github-ghas-fc-222",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL: C# .NET Solutions and MSBuild",
    hint: "Extracting C# projects using dotnet build or msbuild.",
    back: "CodeQL automatically tracks C# compilation via <code>dotnet build</code> or <code>msbuild</code>. Ensure packages are restored beforehand with <code>dotnet restore</code>.",
    tags: ["CodeQL", "C#", ".NET", "Compilation"]
  },
  {
    id: "github-ghas-fc-223",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Suites: Filtering Queries by Tag",
    hint: "Running only CWE-validated queries using query suite filters.",
    back: "In custom query suite YAML files, filter queries by tag: <code>include: { tags: ['security', 'cwe/cwe-079'] }</code> to focus scanning strictly on XSS vulnerabilities.",
    tags: ["CodeQL", "Query Suites", "CWE", "Filtering"]
  },
  {
    id: "github-ghas-fc-224",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL: Kotlin Support alongside Java",
    hint: "Unified JVM analysis across mixed Java and Kotlin codebases.",
    back: "CodeQL analyzes Kotlin source code and Java together under the <strong><code>java-kotlin</code></strong> language extractor, tracing taint flow across mixed Java/Kotlin class boundaries seamlessly.",
    tags: ["CodeQL", "Kotlin", "Java", "JVM"]
  },
  {
    id: "github-ghas-fc-225",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "Viewing CodeQL Raw SARIF in Workflow Artifacts",
    hint: "Debugging SARIF outputs before uploading to GitHub.",
    back: "Add <code>actions/upload-artifact</code> pointing to <code>../results/*.sarif</code> to inspect the raw JSON SARIF output produced by <code>codeql-action/analyze</code> for troubleshooting.",
    tags: ["SARIF", "Debugging", "Artifacts"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_9;
