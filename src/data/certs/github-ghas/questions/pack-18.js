export const GITHUB_GHAS_QUESTIONS_18 = [
  {
    id: "gh-500-426",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Matrix Scanning to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Using GitHub Actions matrix strategies to parallelize CodeQL extraction across polyglot repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel." },
      { id: 'B', text: "Run CodeQL sequentially for all three languages in a single job, exceeding the workflow execution timeout." },
      { id: 'C', text: "Scan only one language and ignore the other two programming languages completely." },
      { id: 'D', text: "Disable parallel runner allocation to save GitHub Actions compute credits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning", "Matrix Scanning", "Enterprise Rollout"]
  },
  {
    id: "gh-500-427",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Matrix Scanning to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Using GitHub Actions matrix strategies to parallelize CodeQL extraction across polyglot repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel." },
      { id: 'B', text: "Run CodeQL sequentially for all three languages in a single job, exceeding the workflow execution timeout." },
      { id: 'C', text: "Scan only one language and ignore the other two programming languages completely." },
      { id: 'D', text: "Disable parallel runner allocation to save GitHub Actions compute credits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning", "Matrix Scanning", "Supply Chain Defense"]
  },
  {
    id: "gh-500-428",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Matrix Scanning to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Using GitHub Actions matrix strategies to parallelize CodeQL extraction across polyglot repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel." },
      { id: 'B', text: "Run CodeQL sequentially for all three languages in a single job, exceeding the workflow execution timeout." },
      { id: 'C', text: "Scan only one language and ignore the other two programming languages completely." },
      { id: 'D', text: "Disable parallel runner allocation to save GitHub Actions compute credits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning", "Matrix Scanning", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-429",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Matrix Scanning to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Using GitHub Actions matrix strategies to parallelize CodeQL extraction across polyglot repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel." },
      { id: 'B', text: "Run CodeQL sequentially for all three languages in a single job, exceeding the workflow execution timeout." },
      { id: 'C', text: "Scan only one language and ignore the other two programming languages completely." },
      { id: 'D', text: "Disable parallel runner allocation to save GitHub Actions compute credits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning", "Matrix Scanning", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-430",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Matrix Scanning Across Multiple Languages: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Matrix Scanning to optimize CodeQL analysis execution time in a large polyglot repository containing Java, JavaScript, and Python services.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Using GitHub Actions matrix strategies to parallelize CodeQL extraction across polyglot repositories is under consideration.",
    options: [
      { id: 'A', text: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel." },
      { id: 'B', text: "Run CodeQL sequentially for all three languages in a single job, exceeding the workflow execution timeout." },
      { id: 'C', text: "Scan only one language and ignore the other two programming languages completely." },
      { id: 'D', text: "Disable parallel runner allocation to save GitHub Actions compute credits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a GitHub Actions `strategy: matrix: language: [java-kotlin, javascript-typescript, python]` to run jobs in parallel. In polyglot repositories, CodeQL scans each language independently. Using a GitHub Actions matrix (`strategy.matrix.language`) runs separate parallel runner jobs for each language, drastically reducing total pipeline wall-clock time and isolating language build errors.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed",
    tags: ["Matrix Scanning", "Matrix Scanning", "Governance And Compliance"]
  },
  {
    id: "gh-500-431",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Threat Models to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Configuring experimental threat models to expand untrusted sources to local files and CLI arguments is under consideration.",
    options: [
      { id: 'A', text: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources." },
      { id: 'B', text: "Rely on default threat models which only consider remote network sockets and HTTP parameters as untrusted sources." },
      { id: 'C', text: "Disable taint tracking and assume command-line arguments can never contain malicious shell characters." },
      { id: 'D', text: "Rewrite the CLI utility as a web service to satisfy CodeQL's default assumptions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models", "Threat Models", "Enterprise Rollout"]
  },
  {
    id: "gh-500-432",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Threat Models to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Configuring experimental threat models to expand untrusted sources to local files and CLI arguments is under consideration.",
    options: [
      { id: 'A', text: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources." },
      { id: 'B', text: "Rely on default threat models which only consider remote network sockets and HTTP parameters as untrusted sources." },
      { id: 'C', text: "Disable taint tracking and assume command-line arguments can never contain malicious shell characters." },
      { id: 'D', text: "Rewrite the CLI utility as a web service to satisfy CodeQL's default assumptions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models", "Threat Models", "Supply Chain Defense"]
  },
  {
    id: "gh-500-433",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Threat Models to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Configuring experimental threat models to expand untrusted sources to local files and CLI arguments is under consideration.",
    options: [
      { id: 'A', text: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources." },
      { id: 'B', text: "Rely on default threat models which only consider remote network sockets and HTTP parameters as untrusted sources." },
      { id: 'C', text: "Disable taint tracking and assume command-line arguments can never contain malicious shell characters." },
      { id: 'D', text: "Rewrite the CLI utility as a web service to satisfy CodeQL's default assumptions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models", "Threat Models", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-434",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Threat Models to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Configuring experimental threat models to expand untrusted sources to local files and CLI arguments is under consideration.",
    options: [
      { id: 'A', text: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources." },
      { id: 'B', text: "Rely on default threat models which only consider remote network sockets and HTTP parameters as untrusted sources." },
      { id: 'C', text: "Disable taint tracking and assume command-line arguments can never contain malicious shell characters." },
      { id: 'D', text: "Rewrite the CLI utility as a web service to satisfy CodeQL's default assumptions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models", "Threat Models", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-435",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Threat Models and Remote Source Customization: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Threat Models to detect command injection in a desktop CLI utility where untrusted input comes from command-line flags rather than remote HTTP requests.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Configuring experimental threat models to expand untrusted sources to local files and CLI arguments is under consideration.",
    options: [
      { id: 'A', text: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources." },
      { id: 'B', text: "Rely on default threat models which only consider remote network sockets and HTTP parameters as untrusted sources." },
      { id: 'C', text: "Disable taint tracking and assume command-line arguments can never contain malicious shell characters." },
      { id: 'D', text: "Rewrite the CLI utility as a web service to satisfy CodeQL's default assumptions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure CodeQL `threat-models: [local, remote]` in the workflow to include command-line arguments and environment variables as sources. By default, CodeQL models `remote` inputs (HTTP requests, RPC calls) as untrusted sources. For CLI tools, desktop apps, or IoT firmware, platform engineers configure `threat-models: [local, remote]` to expand taint sources to include command-line arguments, local files, and environment variables.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#analyzing-with-additional-threat-models",
    tags: ["Threat Models", "Threat Models", "Governance And Compliance"]
  },
  {
    id: "gh-500-436",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Sanitizers & Guards to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Modeling validation routines and barrier guards in QL to eliminate false-positive alerts is under consideration.",
    options: [
      { id: 'A', text: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration." },
      { id: 'B', text: "Disable CodeQL SQL injection rules completely across the entire enterprise." },
      { id: 'C', text: "Require developers to manually dismiss thousands of false-positive alerts every month." },
      { id: 'D', text: "Remove the validation function from source code so developers use manual typecasts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards", "Sanitizers & Guards", "Enterprise Rollout"]
  },
  {
    id: "gh-500-437",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Sanitizers & Guards to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Modeling validation routines and barrier guards in QL to eliminate false-positive alerts is under consideration.",
    options: [
      { id: 'A', text: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration." },
      { id: 'B', text: "Disable CodeQL SQL injection rules completely across the entire enterprise." },
      { id: 'C', text: "Require developers to manually dismiss thousands of false-positive alerts every month." },
      { id: 'D', text: "Remove the validation function from source code so developers use manual typecasts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards", "Sanitizers & Guards", "Supply Chain Defense"]
  },
  {
    id: "gh-500-438",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Sanitizers & Guards to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Modeling validation routines and barrier guards in QL to eliminate false-positive alerts is under consideration.",
    options: [
      { id: 'A', text: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration." },
      { id: 'B', text: "Disable CodeQL SQL injection rules completely across the entire enterprise." },
      { id: 'C', text: "Require developers to manually dismiss thousands of false-positive alerts every month." },
      { id: 'D', text: "Remove the validation function from source code so developers use manual typecasts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards", "Sanitizers & Guards", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-439",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Sanitizers & Guards to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Modeling validation routines and barrier guards in QL to eliminate false-positive alerts is under consideration.",
    options: [
      { id: 'A', text: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration." },
      { id: 'B', text: "Disable CodeQL SQL injection rules completely across the entire enterprise." },
      { id: 'C', text: "Require developers to manually dismiss thousands of false-positive alerts every month." },
      { id: 'D', text: "Remove the validation function from source code so developers use manual typecasts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards", "Sanitizers & Guards", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-440",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Sanitizers and Barrier Guards in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Sanitizers & Guards to teach CodeQL that an internal company validation helper function `isValidUUID()` successfully neutralizes SQL injection risks.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Modeling validation routines and barrier guards in QL to eliminate false-positive alerts is under consideration.",
    options: [
      { id: 'A', text: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration." },
      { id: 'B', text: "Disable CodeQL SQL injection rules completely across the entire enterprise." },
      { id: 'C', text: "Require developers to manually dismiss thousands of false-positive alerts every month." },
      { id: 'D', text: "Remove the validation function from source code so developers use manual typecasts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a custom CodeQL `Sanitizer` or `BarrierGuard` matching calls to `isValidUUID()` in the dataflow configuration. When applications validate or escape inputs using proprietary sanitizers, CodeQL may raise false positives if it doesn't recognize the custom function. Authoring a custom QL extension modeling the function as a `Sanitizer` stops taint propagation past that node, clearing alerts automatically.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/#sanitizers",
    tags: ["Sanitizers & Guards", "Sanitizers & Guards", "Governance And Compliance"]
  },
  {
    id: "gh-500-441",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Performance Tuning to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Tuning runner memory, CPU threads, and CodeQL database caching for large codebases is under consideration.",
    options: [
      { id: 'A', text: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step." },
      { id: 'B', text: "Reduce source code quality by deleting half of the company's microservices." },
      { id: 'C', text: "Disable CodeQL static analysis because monorepos are too large to scan." },
      { id: 'D', text: "Run CodeQL on small 2-core runners with swap disabled, expecting jobs to finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning", "Performance Tuning", "Enterprise Rollout"]
  },
  {
    id: "gh-500-442",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Performance Tuning to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Tuning runner memory, CPU threads, and CodeQL database caching for large codebases is under consideration.",
    options: [
      { id: 'A', text: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step." },
      { id: 'B', text: "Reduce source code quality by deleting half of the company's microservices." },
      { id: 'C', text: "Disable CodeQL static analysis because monorepos are too large to scan." },
      { id: 'D', text: "Run CodeQL on small 2-core runners with swap disabled, expecting jobs to finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning", "Performance Tuning", "Supply Chain Defense"]
  },
  {
    id: "gh-500-443",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Performance Tuning to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Tuning runner memory, CPU threads, and CodeQL database caching for large codebases is under consideration.",
    options: [
      { id: 'A', text: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step." },
      { id: 'B', text: "Reduce source code quality by deleting half of the company's microservices." },
      { id: 'C', text: "Disable CodeQL static analysis because monorepos are too large to scan." },
      { id: 'D', text: "Run CodeQL on small 2-core runners with swap disabled, expecting jobs to finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning", "Performance Tuning", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-444",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Performance Tuning to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Tuning runner memory, CPU threads, and CodeQL database caching for large codebases is under consideration.",
    options: [
      { id: 'A', text: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step." },
      { id: 'B', text: "Reduce source code quality by deleting half of the company's microservices." },
      { id: 'C', text: "Disable CodeQL static analysis because monorepos are too large to scan." },
      { id: 'D', text: "Run CodeQL on small 2-core runners with swap disabled, expecting jobs to finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning", "Performance Tuning", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-445",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Performance Optimization and RAM Management: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Performance Tuning to prevent CodeQL analysis jobs from running out of memory (OOM) on massive enterprise monorepos with millions of lines of code.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Tuning runner memory, CPU threads, and CodeQL database caching for large codebases is under consideration.",
    options: [
      { id: 'A', text: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step." },
      { id: 'B', text: "Reduce source code quality by deleting half of the company's microservices." },
      { id: 'C', text: "Disable CodeQL static analysis because monorepos are too large to scan." },
      { id: 'D', text: "Run CodeQL on small 2-core runners with swap disabled, expecting jobs to finish." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure larger GitHub-hosted runners (e.g., 16-core / 64GB RAM) and pass `--ram=60000` to the CodeQL initialization step. Analyzing massive codebases requires substantial memory for relational joins. In GitHub Actions, platform teams assign larger runners, specify memory allocations via `ram: 60000` in `codeql-action/init`, and tune thread counts to prevent out-of-memory errors during database analysis.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql",
    tags: ["Performance Tuning", "Performance Tuning", "Governance And Compliance"]
  },
  {
    id: "gh-500-446",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Virtual Dispatch to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Accurate inter-procedural taint propagation through interfaces, virtual methods, and lambda expressions is under consideration.",
    options: [
      { id: 'A', text: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations." },
      { id: 'B', text: "Assume static analysis engines can only track direct, static function invocations." },
      { id: 'C', text: "Refactor the entire application into procedural spaghetti code without interfaces or polymorphism." },
      { id: 'D', text: "Disable taint tracking across interface boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch", "Virtual Dispatch", "Enterprise Rollout"]
  },
  {
    id: "gh-500-447",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Virtual Dispatch to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Accurate inter-procedural taint propagation through interfaces, virtual methods, and lambda expressions is under consideration.",
    options: [
      { id: 'A', text: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations." },
      { id: 'B', text: "Assume static analysis engines can only track direct, static function invocations." },
      { id: 'C', text: "Refactor the entire application into procedural spaghetti code without interfaces or polymorphism." },
      { id: 'D', text: "Disable taint tracking across interface boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch", "Virtual Dispatch", "Supply Chain Defense"]
  },
  {
    id: "gh-500-448",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Virtual Dispatch to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Accurate inter-procedural taint propagation through interfaces, virtual methods, and lambda expressions is under consideration.",
    options: [
      { id: 'A', text: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations." },
      { id: 'B', text: "Assume static analysis engines can only track direct, static function invocations." },
      { id: 'C', text: "Refactor the entire application into procedural spaghetti code without interfaces or polymorphism." },
      { id: 'D', text: "Disable taint tracking across interface boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch", "Virtual Dispatch", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-449",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Virtual Dispatch to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Accurate inter-procedural taint propagation through interfaces, virtual methods, and lambda expressions is under consideration.",
    options: [
      { id: 'A', text: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations." },
      { id: 'B', text: "Assume static analysis engines can only track direct, static function invocations." },
      { id: 'C', text: "Refactor the entire application into procedural spaghetti code without interfaces or polymorphism." },
      { id: 'D', text: "Disable taint tracking across interface boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch", "Virtual Dispatch", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-450",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Indirect Calls and Virtual Dispatch in CodeQL: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Virtual Dispatch to trace tainted data correctly in an enterprise Java application where input flows through an interface implemented by multiple classes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Accurate inter-procedural taint propagation through interfaces, virtual methods, and lambda expressions is under consideration.",
    options: [
      { id: 'A', text: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations." },
      { id: 'B', text: "Assume static analysis engines can only track direct, static function invocations." },
      { id: 'C', text: "Refactor the entire application into procedural spaghetti code without interfaces or polymorphism." },
      { id: 'D', text: "Disable taint tracking across interface boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on CodeQL's semantic call graph resolution, which computes virtual dispatch targets and tracks taint through interface implementations. CodeQL models object-oriented semantics with high precision. Its inter-procedural dataflow analysis resolves virtual method calls, interface dispatches, and lambda expressions, ensuring tainted data is tracked accurately across polymorphic boundaries without losing dataflow context.",
    referenceUrl: "https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/",
    tags: ["Virtual Dispatch", "Virtual Dispatch", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_18;
