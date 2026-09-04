export const GITHUB_GHAS_QUESTIONS_16 = [
  {
    id: "gh-500-376",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Setup Modes to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Comparing zero-configuration Default Setup vs customized GitHub Actions Advanced Setup workflows is under consideration.",
    options: [
      { id: 'A', text: "Write bespoke, multi-hundred line GitHub Actions YAML workflows by hand for every single repository." },
      { id: 'B', text: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites." },
      { id: 'C', text: "Require developers to install the CodeQL CLI on their laptops and run scans manually before committing." },
      { id: 'D', text: "Use third-party bash scripts that invoke unverified web scrapers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes", "Setup Modes", "Enterprise Rollout"]
  },
  {
    id: "gh-500-377",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Setup Modes to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Comparing zero-configuration Default Setup vs customized GitHub Actions Advanced Setup workflows is under consideration.",
    options: [
      { id: 'A', text: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites." },
      { id: 'B', text: "Require developers to install the CodeQL CLI on their laptops and run scans manually before committing." },
      { id: 'C', text: "Use third-party bash scripts that invoke unverified web scrapers." },
      { id: 'D', text: "Write bespoke, multi-hundred line GitHub Actions YAML workflows by hand for every single repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes", "Setup Modes", "Supply Chain Defense"]
  },
  {
    id: "gh-500-378",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Setup Modes to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Comparing zero-configuration Default Setup vs customized GitHub Actions Advanced Setup workflows is under consideration.",
    options: [
      { id: 'A', text: "Use third-party bash scripts that invoke unverified web scrapers." },
      { id: 'B', text: "Write bespoke, multi-hundred line GitHub Actions YAML workflows by hand for every single repository." },
      { id: 'C', text: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites." },
      { id: 'D', text: "Require developers to install the CodeQL CLI on their laptops and run scans manually before committing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes", "Setup Modes", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-379",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Setup Modes to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Comparing zero-configuration Default Setup vs customized GitHub Actions Advanced Setup workflows is under consideration.",
    options: [
      { id: 'A', text: "Require developers to install the CodeQL CLI on their laptops and run scans manually before committing." },
      { id: 'B', text: "Write bespoke, multi-hundred line GitHub Actions YAML workflows by hand for every single repository." },
      { id: 'C', text: "Use third-party bash scripts that invoke unverified web scrapers." },
      { id: 'D', text: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes", "Setup Modes", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-380",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Setup: Default Setup vs Advanced Setup: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Setup Modes to enable CodeQL scanning across 200 standard Python and JavaScript repositories in an enterprise organization with zero configuration.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Comparing zero-configuration Default Setup vs customized GitHub Actions Advanced Setup workflows is under consideration.",
    options: [
      { id: 'A', text: "Write bespoke, multi-hundred line GitHub Actions YAML workflows by hand for every single repository." },
      { id: 'B', text: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites." },
      { id: 'C', text: "Use third-party bash scripts that invoke unverified web scrapers." },
      { id: 'D', text: "Require developers to install the CodeQL CLI on their laptops and run scans manually before committing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Code Scanning Default Setup, allowing GitHub to automatically detect languages, compile code, and run standard query suites. GitHub provides two CodeQL setup modes: `Default Setup` (zero-configuration, automatically builds interpreted and supported languages, maintains schedules, and updates queries automatically) and `Advanced Setup` (a fully customizable GitHub Actions YAML workflow for compiled languages and custom queries).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning",
    tags: ["Setup Modes", "Setup Modes", "Governance And Compliance"]
  },
  {
    id: "gh-500-381",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Query Suites to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Selecting query suites: default (high precision), security-extended (broader coverage), and security-and-quality is under consideration.",
    options: [
      { id: 'A', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'B', text: "Disable query suites to prevent finding any security alerts." },
      { id: 'C', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'D', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites", "Query Suites", "Enterprise Rollout"]
  },
  {
    id: "gh-500-382",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Query Suites to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Selecting query suites: default (high precision), security-extended (broader coverage), and security-and-quality is under consideration.",
    options: [
      { id: 'A', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'B', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'C', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'D', text: "Disable query suites to prevent finding any security alerts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites", "Query Suites", "Supply Chain Defense"]
  },
  {
    id: "gh-500-383",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Query Suites to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Selecting query suites: default (high precision), security-extended (broader coverage), and security-and-quality is under consideration.",
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
    tags: ["Query Suites", "Query Suites", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-384",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Query Suites to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Selecting query suites: default (high precision), security-extended (broader coverage), and security-and-quality is under consideration.",
    options: [
      { id: 'A', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'B', text: "Disable query suites to prevent finding any security alerts." },
      { id: 'C', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." },
      { id: 'D', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites", "Query Suites", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-385",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Query Suites: Default, Extended, and Quality: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Query Suites to configure CodeQL to maximize security coverage and detect lower-severity code quality bugs and maintainability issues.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Selecting query suites: default (high precision), security-extended (broader coverage), and security-and-quality is under consideration.",
    options: [
      { id: 'A', text: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration." },
      { id: 'B', text: "Disable query suites to prevent finding any security alerts." },
      { id: 'C', text: "Write thousands of custom CodeQL queries from scratch to cover basic CWEs." },
      { id: 'D', text: "Rely on the default suite which only runs high-precision security queries and excludes code quality rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `queries: security-and-quality` in the CodeQL Advanced Setup workflow configuration. CodeQL provides curated query suites: `default` (high-precision security queries with minimal false positives), `security-extended` (includes lower-severity security queries and CWE coverage), and `security-and-quality` (adds maintainability, reliability, and code quality checks).",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-queries-in-ql-packs",
    tags: ["Query Suites", "Query Suites", "Governance And Compliance"]
  },
  {
    id: "gh-500-386",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Taint Tracking to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Tracking untrusted user input from Sources through Sanitizers into dangerous Sinks is under consideration.",
    options: [
      { id: 'A', text: "Rely on unit tests that only execute happy-path hardcoded inputs." },
      { id: 'B', text: "Disable static analysis and wait for penetration testers to find SQL injection manually." },
      { id: 'C', text: "Search for string occurrences of 'SELECT' in source code using simple text grep commands." },
      { id: 'D', text: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Taint Tracking", "Enterprise Rollout"]
  },
  {
    id: "gh-500-387",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Taint Tracking to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Tracking untrusted user input from Sources through Sanitizers into dangerous Sinks is under consideration.",
    options: [
      { id: 'A', text: "Search for string occurrences of 'SELECT' in source code using simple text grep commands." },
      { id: 'B', text: "Disable static analysis and wait for penetration testers to find SQL injection manually." },
      { id: 'C', text: "Rely on unit tests that only execute happy-path hardcoded inputs." },
      { id: 'D', text: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Taint Tracking", "Supply Chain Defense"]
  },
  {
    id: "gh-500-388",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Taint Tracking to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Tracking untrusted user input from Sources through Sanitizers into dangerous Sinks is under consideration.",
    options: [
      { id: 'A', text: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path." },
      { id: 'B', text: "Rely on unit tests that only execute happy-path hardcoded inputs." },
      { id: 'C', text: "Search for string occurrences of 'SELECT' in source code using simple text grep commands." },
      { id: 'D', text: "Disable static analysis and wait for penetration testers to find SQL injection manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Taint Tracking", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-389",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Taint Tracking to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Tracking untrusted user input from Sources through Sanitizers into dangerous Sinks is under consideration.",
    options: [
      { id: 'A', text: "Disable static analysis and wait for penetration testers to find SQL injection manually." },
      { id: 'B', text: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path." },
      { id: 'C', text: "Rely on unit tests that only execute happy-path hardcoded inputs." },
      { id: 'D', text: "Search for string occurrences of 'SELECT' in source code using simple text grep commands." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Taint Tracking", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-390",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Taint Tracking and Data Flow Analysis in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Taint Tracking to detect a complex SQL injection vulnerability where untrusted HTTP request parameters flow through five helper functions before reaching a query.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Tracking untrusted user input from Sources through Sanitizers into dangerous Sinks is under consideration.",
    options: [
      { id: 'A', text: "Search for string occurrences of 'SELECT' in source code using simple text grep commands." },
      { id: 'B', text: "Rely on unit tests that only execute happy-path hardcoded inputs." },
      { id: 'C', text: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path." },
      { id: 'D', text: "Disable static analysis and wait for penetration testers to find SQL injection manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage CodeQL Taint Tracking: define the HTTP parameter as a `Source`, database execution as a `Sink`, and trace the dataflow path. Taint tracking is the core analysis engine of CodeQL. It models untrusted user inputs (`Sources`), tracks how data propagates through variables, function calls, and transformations (`Data Flow`), and alerts if tainted data reaches a security-sensitive operation (`Sink`) without passing through a `Sanitizer`.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Taint Tracking", "Taint Tracking", "Governance And Compliance"]
  },
  {
    id: "gh-500-391",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Path Queries and Interactive Data Flow Graphs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Path Queries to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Visualizing step-by-step alert trajectories from source to sink in the GitHub Security UI is under consideration.",
    options: [
      { id: 'A', text: "Attempt to reproduce the vulnerability by guessing random HTTP payloads in a web browser." },
      { id: 'B', text: "Read a single-line error message without any context or variable tracing." },
      { id: 'C', text: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call." },
      { id: 'D', text: "Dismiss the alert as a false positive because the sink is in a different file from the source." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries", "Path Queries", "Enterprise Rollout"]
  },
  {
    id: "gh-500-392",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Path Queries and Interactive Data Flow Graphs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Path Queries to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Visualizing step-by-step alert trajectories from source to sink in the GitHub Security UI is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert as a false positive because the sink is in a different file from the source." },
      { id: 'B', text: "Attempt to reproduce the vulnerability by guessing random HTTP payloads in a web browser." },
      { id: 'C', text: "Read a single-line error message without any context or variable tracing." },
      { id: 'D', text: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries", "Path Queries", "Supply Chain Defense"]
  },
  {
    id: "gh-500-393",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Path Queries and Interactive Data Flow Graphs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Path Queries to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Visualizing step-by-step alert trajectories from source to sink in the GitHub Security UI is under consideration.",
    options: [
      { id: 'A', text: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call." },
      { id: 'B', text: "Attempt to reproduce the vulnerability by guessing random HTTP payloads in a web browser." },
      { id: 'C', text: "Read a single-line error message without any context or variable tracing." },
      { id: 'D', text: "Dismiss the alert as a false positive because the sink is in a different file from the source." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries", "Path Queries", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-394",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Path Queries and Interactive Data Flow Graphs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Path Queries to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Visualizing step-by-step alert trajectories from source to sink in the GitHub Security UI is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert as a false positive because the sink is in a different file from the source." },
      { id: 'B', text: "Attempt to reproduce the vulnerability by guessing random HTTP payloads in a web browser." },
      { id: 'C', text: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call." },
      { id: 'D', text: "Read a single-line error message without any context or variable tracing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries", "Path Queries", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-395",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Path Queries and Interactive Data Flow Graphs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Path Queries to help a software engineer understand and fix a cross-site scripting (XSS) vulnerability by reviewing the exact path user data took through the code.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Visualizing step-by-step alert trajectories from source to sink in the GitHub Security UI is under consideration.",
    options: [
      { id: 'A', text: "Read a single-line error message without any context or variable tracing." },
      { id: 'B', text: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call." },
      { id: 'C', text: "Dismiss the alert as a false positive because the sink is in a different file from the source." },
      { id: 'D', text: "Attempt to reproduce the vulnerability by guessing random HTTP payloads in a web browser." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect the interactive data flow path graph in the Code Scanning alert UI, stepping through each intermediate variable and function call. CodeQL path queries (`@kind path-problem`) generate multi-step data flow graphs. In the GitHub UI, developers can expand the alert to visually trace the exact path tainted data took from the user input source, through intermediate assignments and calls, directly to the vulnerable sink.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#exploring-the-data-flow-path",
    tags: ["Path Queries", "Path Queries", "Governance And Compliance"]
  },
  {
    id: "gh-500-396",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Authoring Custom CodeQL Queries and QL Packs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Custom CodeQL Queries to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Writing custom .ql queries using DataFlow and TaintTracking libraries, packaged as QL packs is under consideration.",
    options: [
      { id: 'A', text: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`)." },
      { id: 'B', text: "Manually review every line of code committed across 500 repositories." },
      { id: 'C', text: "Write a custom bash script that scans source files using fragile regex patterns." },
      { id: 'D', text: "Disable static code analysis for internal proprietary functions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries", "Custom CodeQL Queries", "Enterprise Rollout"]
  },
  {
    id: "gh-500-397",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Authoring Custom CodeQL Queries and QL Packs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Custom CodeQL Queries to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Writing custom .ql queries using DataFlow and TaintTracking libraries, packaged as QL packs is under consideration.",
    options: [
      { id: 'A', text: "Manually review every line of code committed across 500 repositories." },
      { id: 'B', text: "Write a custom bash script that scans source files using fragile regex patterns." },
      { id: 'C', text: "Disable static code analysis for internal proprietary functions." },
      { id: 'D', text: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries", "Custom CodeQL Queries", "Supply Chain Defense"]
  },
  {
    id: "gh-500-398",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Authoring Custom CodeQL Queries and QL Packs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Custom CodeQL Queries to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Writing custom .ql queries using DataFlow and TaintTracking libraries, packaged as QL packs is under consideration.",
    options: [
      { id: 'A', text: "Write a custom bash script that scans source files using fragile regex patterns." },
      { id: 'B', text: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`)." },
      { id: 'C', text: "Manually review every line of code committed across 500 repositories." },
      { id: 'D', text: "Disable static code analysis for internal proprietary functions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries", "Custom CodeQL Queries", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-399",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Authoring Custom CodeQL Queries and QL Packs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Custom CodeQL Queries to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Writing custom .ql queries using DataFlow and TaintTracking libraries, packaged as QL packs is under consideration.",
    options: [
      { id: 'A', text: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`)." },
      { id: 'B', text: "Manually review every line of code committed across 500 repositories." },
      { id: 'C', text: "Disable static code analysis for internal proprietary functions." },
      { id: 'D', text: "Write a custom bash script that scans source files using fragile regex patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries", "Custom CodeQL Queries", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-400",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Authoring Custom CodeQL Queries and QL Packs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Custom CodeQL Queries to detect unauthorized usage of an internal proprietary cryptography function that has been deprecated across enterprise microservices.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Writing custom .ql queries using DataFlow and TaintTracking libraries, packaged as QL packs is under consideration.",
    options: [
      { id: 'A', text: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`)." },
      { id: 'B', text: "Disable static code analysis for internal proprietary functions." },
      { id: 'C', text: "Manually review every line of code committed across 500 repositories." },
      { id: 'D', text: "Write a custom bash script that scans source files using fragile regex patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a custom CodeQL query (`.ql`) importing language security libraries, and package it into a versioned CodeQL query pack (`qlpack.yml`). Security teams write custom CodeQL queries using QL, an object-oriented query language. Queries are organized into CodeQL packs (`qlpack.yml`) with dependencies and published to GitHub Container Registry (GHCR) as OCI artifacts, allowing organizations to share custom rules fleet-wide.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/using-custom-queries-with-code-scanning",
    tags: ["Custom CodeQL Queries", "Custom CodeQL Queries", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_16;
