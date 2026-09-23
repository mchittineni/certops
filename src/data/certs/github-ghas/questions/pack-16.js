export const GITHUB_GHAS_QUESTIONS_16 = [
  {
    id: "gh-500-376",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable code scanning default setup, which picks the languages and query suites itself." },
      { id: 'B', text: "Add an advanced setup workflow per repository, written by hand for its own build system." },
      { id: 'C', text: "Have developers run the CodeQL CLI locally and upload the SARIF before each merge." },
      { id: 'D', text: "Add a required workflow at organization level that calls a shared analysis template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes","Setup Modes","Enterprise Rollout"]
  },
  {
    id: "gh-500-377",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable code scanning default setup, which picks the languages and query suites itself." },
      { id: 'B', text: "Add a required workflow at organization level that calls a shared analysis template." },
      { id: 'C', text: "Add an advanced setup workflow per repository, written by hand for its own build system." },
      { id: 'D', text: "Have developers run the CodeQL CLI locally and upload the SARIF before each merge." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes","Setup Modes","Supply Chain Defense"]
  },
  {
    id: "gh-500-378",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Have developers run the CodeQL CLI locally and upload the SARIF before each merge." },
      { id: 'B', text: "Add an advanced setup workflow per repository, written by hand for its own build system." },
      { id: 'C', text: "Add a required workflow at organization level that calls a shared analysis template." },
      { id: 'D', text: "Enable code scanning default setup, which picks the languages and query suites itself." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes","Setup Modes","Secret Leak Prevention"]
  },
  {
    id: "gh-500-379",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Add a required workflow at organization level that calls a shared analysis template." },
      { id: 'B', text: "Add an advanced setup workflow per repository, written by hand for its own build system." },
      { id: 'C', text: "Enable code scanning default setup, which picks the languages and query suites itself." },
      { id: 'D', text: "Have developers run the CodeQL CLI locally and upload the SARIF before each merge." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes","Setup Modes","Static Analysis Codeql"]
  },
  {
    id: "gh-500-380",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable code scanning default setup, which picks the languages and query suites itself." },
      { id: 'B', text: "Add an advanced setup workflow per repository, written by hand for its own build system." },
      { id: 'C', text: "Have developers run the CodeQL CLI locally and upload the SARIF before each merge." },
      { id: 'D', text: "Add a required workflow at organization level that calls a shared analysis template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes","Setup Modes","Governance And Compliance"]
  },
  {
    id: "gh-500-381",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Disable query suites to prevent finding any security alerts." },
      { id: 'B', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'C', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'D', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites","Query Suites","Enterprise Rollout"]
  },
  {
    id: "gh-500-382",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'B', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'C', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'D', text: "Disable query suites to prevent finding any security alerts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites","Query Suites","Supply Chain Defense"]
  },
  {
    id: "gh-500-383",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'B', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'C', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'D', text: "Disable query suites to prevent finding any security alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites","Query Suites","Secret Leak Prevention"]
  },
  {
    id: "gh-500-384",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'B', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'C', text: "Disable query suites to prevent finding any security alerts." },
      { id: 'D', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites","Query Suites","Static Analysis Codeql"]
  },
  {
    id: "gh-500-385",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'B', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'C', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'D', text: "Disable query suites to prevent finding any security alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites","Query Suites","Governance And Compliance"]
  },
  {
    id: "gh-500-386",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use a CodeQL metric query counting the database calls each request handler makes." },
      { id: 'B', text: "Use CodeQL taint tracking: the HTTP parameter as source, the query call as sink." },
      { id: 'C', text: "Use the default query suite, which flags any string concatenation in a query call." },
      { id: 'D', text: "Use a custom secret pattern that matches the SQL keywords appearing in the source." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking","Taint Tracking","Enterprise Rollout"]
  },
  {
    id: "gh-500-387",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use the default query suite, which flags any string concatenation in a query call." },
      { id: 'B', text: "Use CodeQL taint tracking: the HTTP parameter as source, the query call as sink." },
      { id: 'C', text: "Use a custom secret pattern that matches the SQL keywords appearing in the source." },
      { id: 'D', text: "Use a CodeQL metric query counting the database calls each request handler makes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking","Taint Tracking","Supply Chain Defense"]
  },
  {
    id: "gh-500-388",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use CodeQL taint tracking: the HTTP parameter as source, the query call as sink." },
      { id: 'B', text: "Use a CodeQL metric query counting the database calls each request handler makes." },
      { id: 'C', text: "Use a custom secret pattern that matches the SQL keywords appearing in the source." },
      { id: 'D', text: "Use the default query suite, which flags any string concatenation in a query call." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking","Taint Tracking","Secret Leak Prevention"]
  },
  {
    id: "gh-500-389",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use a CodeQL metric query counting the database calls each request handler makes." },
      { id: 'B', text: "Use the default query suite, which flags any string concatenation in a query call." },
      { id: 'C', text: "Use a custom secret pattern that matches the SQL keywords appearing in the source." },
      { id: 'D', text: "Use CodeQL taint tracking: the HTTP parameter as source, the query call as sink." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking","Taint Tracking","Static Analysis Codeql"]
  },
  {
    id: "gh-500-390",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use a custom secret pattern that matches the SQL keywords appearing in the source." },
      { id: 'B', text: "Use CodeQL taint tracking: the HTTP parameter as source, the query call as sink." },
      { id: 'C', text: "Use a CodeQL metric query counting the database calls each request handler makes." },
      { id: 'D', text: "Use the default query suite, which flags any string concatenation in a query call." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking","Taint Tracking","Governance And Compliance"]
  },
  {
    id: "gh-500-391",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Path Queries and Interactive Data Flow Graphs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Read the alert's data flow path in the UI, stepping through each intermediate variable." },
      { id: 'B', text: "Read the SARIF file's `codeFlows` array and follow the locations it lists in order." },
      { id: 'C', text: "Reproduce the finding by sending the payloads the alert's description suggests." },
      { id: 'D', text: "Dismiss the alert as a false positive, since the source and sink are in different files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries","Path Queries","Enterprise Rollout"]
  },
  {
    id: "gh-500-392",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Path Queries and Interactive Data Flow Graphs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Read the alert's data flow path in the UI, stepping through each intermediate variable." },
      { id: 'B', text: "Read the SARIF file's `codeFlows` array and follow the locations it lists in order." },
      { id: 'C', text: "Reproduce the finding by sending the payloads the alert's description suggests." },
      { id: 'D', text: "Dismiss the alert as a false positive, since the source and sink are in different files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries","Path Queries","Supply Chain Defense"]
  },
  {
    id: "gh-500-393",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Path Queries and Interactive Data Flow Graphs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Read the alert's data flow path in the UI, stepping through each intermediate variable." },
      { id: 'B', text: "Read the SARIF file's `codeFlows` array and follow the locations it lists in order." },
      { id: 'C', text: "Reproduce the finding by sending the payloads the alert's description suggests." },
      { id: 'D', text: "Dismiss the alert as a false positive, since the source and sink are in different files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries","Path Queries","Secret Leak Prevention"]
  },
  {
    id: "gh-500-394",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Path Queries and Interactive Data Flow Graphs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Read the SARIF file's `codeFlows` array and follow the locations it lists in order." },
      { id: 'B', text: "Read the alert's data flow path in the UI, stepping through each intermediate variable." },
      { id: 'C', text: "Dismiss the alert as a false positive, since the source and sink are in different files." },
      { id: 'D', text: "Reproduce the finding by sending the payloads the alert's description suggests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries","Path Queries","Static Analysis Codeql"]
  },
  {
    id: "gh-500-395",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Path Queries and Interactive Data Flow Graphs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Read the alert's data flow path in the UI, stepping through each intermediate variable." },
      { id: 'B', text: "Read the SARIF file's `codeFlows` array and follow the locations it lists in order." },
      { id: 'C', text: "Reproduce the finding by sending the payloads the alert's description suggests." },
      { id: 'D', text: "Dismiss the alert as a false positive, since the source and sink are in different files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries","Path Queries","Governance And Compliance"]
  },
  {
    id: "gh-500-396",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Authoring Custom CodeQL Queries and QL Packs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Write a custom CodeQL query and ship it as a versioned query pack via `qlpack.yml`." },
      { id: 'B', text: "Write a custom secret scanning pattern and publish it at the organization level instead." },
      { id: 'C', text: "Write a CodeQL model pack that adds the framework's own sources and sinks only." },
      { id: 'D', text: "Write a CodeQL config file that extends the default query suite with its rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries","Custom CodeQL Queries","Enterprise Rollout"]
  },
  {
    id: "gh-500-397",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Authoring Custom CodeQL Queries and QL Packs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Write a CodeQL config file that extends the default query suite with its rules." },
      { id: 'B', text: "Write a custom secret scanning pattern and publish it at the organization level instead." },
      { id: 'C', text: "Write a custom CodeQL query and ship it as a versioned query pack via `qlpack.yml`." },
      { id: 'D', text: "Write a CodeQL model pack that adds the framework's own sources and sinks only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries","Custom CodeQL Queries","Supply Chain Defense"]
  },
  {
    id: "gh-500-398",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Authoring Custom CodeQL Queries and QL Packs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Write a custom CodeQL query and ship it as a versioned query pack via `qlpack.yml`." },
      { id: 'B', text: "Write a custom secret scanning pattern and publish it at the organization level instead." },
      { id: 'C', text: "Write a CodeQL model pack that adds the framework's own sources and sinks only." },
      { id: 'D', text: "Write a CodeQL config file that extends the default query suite with its rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries","Custom CodeQL Queries","Secret Leak Prevention"]
  },
  {
    id: "gh-500-399",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Authoring Custom CodeQL Queries and QL Packs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Write a custom CodeQL query and ship it as a versioned query pack via `qlpack.yml`." },
      { id: 'B', text: "Write a CodeQL config file that extends the default query suite with its rules." },
      { id: 'C', text: "Write a custom secret scanning pattern and publish it at the organization level instead." },
      { id: 'D', text: "Write a CodeQL model pack that adds the framework's own sources and sinks only." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries","Custom CodeQL Queries","Static Analysis Codeql"]
  },
  {
    id: "gh-500-400",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Authoring Custom CodeQL Queries and QL Packs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Write a custom CodeQL query and ship it as a versioned query pack via `qlpack.yml`." },
      { id: 'B', text: "Write a custom secret scanning pattern and publish it at the organization level instead." },
      { id: 'C', text: "Write a CodeQL model pack that adds the framework's own sources and sinks only." },
      { id: 'D', text: "Write a CodeQL config file that extends the default query suite with its rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries","Custom CodeQL Queries","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_16;
