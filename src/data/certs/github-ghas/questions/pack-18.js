export const GITHUB_GHAS_QUESTIONS_18 = [
  {
    id: "gh-500-426",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use a `strategy: matrix` over the three languages so the analyses run in parallel." },
      { id: 'B', text: "Run the three languages sequentially in one job, which keeps the database shared." },
      { id: 'C', text: "Split the repository so each language is analysed in its own repository's workflow." },
      { id: 'D', text: "Run the analysis on a schedule rather than per push, so the runtime does not matter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning","Matrix Scanning","Enterprise Rollout"]
  },
  {
    id: "gh-500-427",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use a `strategy: matrix` over the three languages so the analyses run in parallel." },
      { id: 'B', text: "Split the repository so each language is analysed in its own repository's workflow." },
      { id: 'C', text: "Run the analysis on a schedule rather than per push, so the runtime does not matter." },
      { id: 'D', text: "Run the three languages sequentially in one job, which keeps the database shared." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning","Matrix Scanning","Supply Chain Defense"]
  },
  {
    id: "gh-500-428",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use a `strategy: matrix` over the three languages so the analyses run in parallel." },
      { id: 'B', text: "Run the three languages sequentially in one job, which keeps the database shared." },
      { id: 'C', text: "Split the repository so each language is analysed in its own repository's workflow." },
      { id: 'D', text: "Run the analysis on a schedule rather than per push, so the runtime does not matter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning","Matrix Scanning","Secret Leak Prevention"]
  },
  {
    id: "gh-500-429",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use a `strategy: matrix` over the three languages so the analyses run in parallel." },
      { id: 'B', text: "Run the three languages sequentially in one job, which keeps the database shared." },
      { id: 'C', text: "Split the repository so each language is analysed in its own repository's workflow." },
      { id: 'D', text: "Run the analysis on a schedule rather than per push, so the runtime does not matter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning","Matrix Scanning","Static Analysis Codeql"]
  },
  {
    id: "gh-500-430",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Run the analysis on a schedule rather than per push, so the runtime does not matter." },
      { id: 'B', text: "Use a `strategy: matrix` over the three languages so the analyses run in parallel." },
      { id: 'C', text: "Split the repository so each language is analysed in its own repository's workflow." },
      { id: 'D', text: "Run the three languages sequentially in one job, which keeps the database shared." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning","Matrix Scanning","Governance And Compliance"]
  },
  {
    id: "gh-500-431",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Set `queries: security-extended`, which adds the argument-handling queries to the suite." },
      { id: 'B', text: "Write a model pack declaring the CLI's argument parser as an additional taint source." },
      { id: 'C', text: "Set `threat-models: [local, remote]` so arguments and environment variables count as sources." },
      { id: 'D', text: "Keep the default threat model, which treats network sockets and HTTP parameters as sources." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models","Threat Models","Enterprise Rollout"]
  },
  {
    id: "gh-500-432",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Write a model pack declaring the CLI's argument parser as an additional taint source." },
      { id: 'B', text: "Set `queries: security-extended`, which adds the argument-handling queries to the suite." },
      { id: 'C', text: "Keep the default threat model, which treats network sockets and HTTP parameters as sources." },
      { id: 'D', text: "Set `threat-models: [local, remote]` so arguments and environment variables count as sources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models","Threat Models","Supply Chain Defense"]
  },
  {
    id: "gh-500-433",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Write a model pack declaring the CLI's argument parser as an additional taint source." },
      { id: 'B', text: "Keep the default threat model, which treats network sockets and HTTP parameters as sources." },
      { id: 'C', text: "Set `threat-models: [local, remote]` so arguments and environment variables count as sources." },
      { id: 'D', text: "Set `queries: security-extended`, which adds the argument-handling queries to the suite." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models","Threat Models","Secret Leak Prevention"]
  },
  {
    id: "gh-500-434",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Set `queries: security-extended`, which adds the argument-handling queries to the suite." },
      { id: 'B', text: "Write a model pack declaring the CLI's argument parser as an additional taint source." },
      { id: 'C', text: "Set `threat-models: [local, remote]` so arguments and environment variables count as sources." },
      { id: 'D', text: "Keep the default threat model, which treats network sockets and HTTP parameters as sources." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models","Threat Models","Static Analysis Codeql"]
  },
  {
    id: "gh-500-435",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Set `threat-models: [local, remote]` so arguments and environment variables count as sources." },
      { id: 'B', text: "Keep the default threat model, which treats network sockets and HTTP parameters as sources." },
      { id: 'C', text: "Set `queries: security-extended`, which adds the argument-handling queries to the suite." },
      { id: 'D', text: "Write a model pack declaring the CLI's argument parser as an additional taint source." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models","Threat Models","Governance And Compliance"]
  },
  {
    id: "gh-500-436",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Declare the validator as a `Sanitizer` or `BarrierGuard` in the dataflow configuration." },
      { id: 'B', text: "Disable the SQL injection queries across the enterprise's default scan configuration." },
      { id: 'C', text: "Dismiss the recurring alerts as false positives with an auto-triage rule per repository." },
      { id: 'D', text: "Inline the validation at each call site so the analysis sees the check on the taint path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards","Sanitizers & Guards","Enterprise Rollout"]
  },
  {
    id: "gh-500-437",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Inline the validation at each call site so the analysis sees the check on the taint path." },
      { id: 'B', text: "Dismiss the recurring alerts as false positives with an auto-triage rule per repository." },
      { id: 'C', text: "Disable the SQL injection queries across the enterprise's default scan configuration." },
      { id: 'D', text: "Declare the validator as a `Sanitizer` or `BarrierGuard` in the dataflow configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards","Sanitizers & Guards","Supply Chain Defense"]
  },
  {
    id: "gh-500-438",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Disable the SQL injection queries across the enterprise's default scan configuration." },
      { id: 'B', text: "Declare the validator as a `Sanitizer` or `BarrierGuard` in the dataflow configuration." },
      { id: 'C', text: "Inline the validation at each call site so the analysis sees the check on the taint path." },
      { id: 'D', text: "Dismiss the recurring alerts as false positives with an auto-triage rule per repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards","Sanitizers & Guards","Secret Leak Prevention"]
  },
  {
    id: "gh-500-439",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Declare the validator as a `Sanitizer` or `BarrierGuard` in the dataflow configuration." },
      { id: 'B', text: "Disable the SQL injection queries across the enterprise's default scan configuration." },
      { id: 'C', text: "Dismiss the recurring alerts as false positives with an auto-triage rule per repository." },
      { id: 'D', text: "Inline the validation at each call site so the analysis sees the check on the taint path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards","Sanitizers & Guards","Static Analysis Codeql"]
  },
  {
    id: "gh-500-440",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Inline the validation at each call site so the analysis sees the check on the taint path." },
      { id: 'B', text: "Dismiss the recurring alerts as false positives with an auto-triage rule per repository." },
      { id: 'C', text: "Disable the SQL injection queries across the enterprise's default scan configuration." },
      { id: 'D', text: "Declare the validator as a `Sanitizer` or `BarrierGuard` in the dataflow configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards","Sanitizers & Guards","Governance And Compliance"]
  },
  {
    id: "gh-500-441",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Split the analysis by language so each CodeQL job builds a smaller database." },
      { id: 'B', text: "Keep the default runner and add `--threads=1` so the analysis uses less memory." },
      { id: 'C', text: "Move the analysis to a larger hosted runner and pass `--ram` to the CodeQL init step." },
      { id: 'D', text: "Restrict the analysis to the paths changed in the pull request with a path filter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning","Performance Tuning","Enterprise Rollout"]
  },
  {
    id: "gh-500-442",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Move the analysis to a larger hosted runner and pass `--ram` to the CodeQL init step." },
      { id: 'B', text: "Restrict the analysis to the paths changed in the pull request with a path filter." },
      { id: 'C', text: "Split the analysis by language so each CodeQL job builds a smaller database." },
      { id: 'D', text: "Keep the default runner and add `--threads=1` so the analysis uses less memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning","Performance Tuning","Supply Chain Defense"]
  },
  {
    id: "gh-500-443",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Restrict the analysis to the paths changed in the pull request with a path filter." },
      { id: 'B', text: "Keep the default runner and add `--threads=1` so the analysis uses less memory." },
      { id: 'C', text: "Split the analysis by language so each CodeQL job builds a smaller database." },
      { id: 'D', text: "Move the analysis to a larger hosted runner and pass `--ram` to the CodeQL init step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning","Performance Tuning","Secret Leak Prevention"]
  },
  {
    id: "gh-500-444",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Split the analysis by language so each CodeQL job builds a smaller database." },
      { id: 'B', text: "Keep the default runner and add `--threads=1` so the analysis uses less memory." },
      { id: 'C', text: "Move the analysis to a larger hosted runner and pass `--ram` to the CodeQL init step." },
      { id: 'D', text: "Restrict the analysis to the paths changed in the pull request with a path filter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning","Performance Tuning","Static Analysis Codeql"]
  },
  {
    id: "gh-500-445",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Keep the default runner and add `--threads=1` so the analysis uses less memory." },
      { id: 'B', text: "Split the analysis by language so each CodeQL job builds a smaller database." },
      { id: 'C', text: "Restrict the analysis to the paths changed in the pull request with a path filter." },
      { id: 'D', text: "Move the analysis to a larger hosted runner and pass `--ram` to the CodeQL init step." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning","Performance Tuning","Governance And Compliance"]
  },
  {
    id: "gh-500-446",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Add a model pack that declares each interface method as a taint step for the analysis." },
      { id: 'B', text: "Rely on CodeQL's call graph, which resolves virtual dispatch and tracks taint through interfaces." },
      { id: 'C', text: "Add a custom query that follows the concrete implementations the build actually links." },
      { id: 'D', text: "Extend the default suite with the security-extended queries, which cross interfaces." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch","Virtual Dispatch","Enterprise Rollout"]
  },
  {
    id: "gh-500-447",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Add a model pack that declares each interface method as a taint step for the analysis." },
      { id: 'B', text: "Extend the default suite with the security-extended queries, which cross interfaces." },
      { id: 'C', text: "Rely on CodeQL's call graph, which resolves virtual dispatch and tracks taint through interfaces." },
      { id: 'D', text: "Add a custom query that follows the concrete implementations the build actually links." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch","Virtual Dispatch","Supply Chain Defense"]
  },
  {
    id: "gh-500-448",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Add a custom query that follows the concrete implementations the build actually links." },
      { id: 'B', text: "Add a model pack that declares each interface method as a taint step for the analysis." },
      { id: 'C', text: "Rely on CodeQL's call graph, which resolves virtual dispatch and tracks taint through interfaces." },
      { id: 'D', text: "Extend the default suite with the security-extended queries, which cross interfaces." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch","Virtual Dispatch","Secret Leak Prevention"]
  },
  {
    id: "gh-500-449",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Rely on CodeQL's call graph, which resolves virtual dispatch and tracks taint through interfaces." },
      { id: 'B', text: "Extend the default suite with the security-extended queries, which cross interfaces." },
      { id: 'C', text: "Add a custom query that follows the concrete implementations the build actually links." },
      { id: 'D', text: "Add a model pack that declares each interface method as a taint step for the analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch","Virtual Dispatch","Static Analysis Codeql"]
  },
  {
    id: "gh-500-450",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Rely on CodeQL's call graph, which resolves virtual dispatch and tracks taint through interfaces." },
      { id: 'B', text: "Add a custom query that follows the concrete implementations the build actually links." },
      { id: 'C', text: "Add a model pack that declares each interface method as a taint step for the analysis." },
      { id: 'D', text: "Extend the default suite with the security-extended queries, which cross interfaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch","Virtual Dispatch","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_18;
