export const GITHUB_GHAS_QUESTIONS_11 = [
  {
    id: "gh-500-251",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Push Protection to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Blocking commits containing secrets in real time with bypass reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Disable git commit hooks to accelerate local development speed." },
      { id: 'B', text: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets." },
      { id: 'C', text: "Instruct developers to memorize all secret token formats and check commits manually." },
      { id: 'D', text: "Allow developers to push secrets and run batch scans every Friday afternoon." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection", "Push Protection", "Enterprise Rollout"]
  },
  {
    id: "gh-500-252",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Push Protection to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Blocking commits containing secrets in real time with bypass reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to memorize all secret token formats and check commits manually." },
      { id: 'B', text: "Disable git commit hooks to accelerate local development speed." },
      { id: 'C', text: "Allow developers to push secrets and run batch scans every Friday afternoon." },
      { id: 'D', text: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection", "Push Protection", "Supply Chain Defense"]
  },
  {
    id: "gh-500-253",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Push Protection to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Blocking commits containing secrets in real time with bypass reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Disable git commit hooks to accelerate local development speed." },
      { id: 'B', text: "Allow developers to push secrets and run batch scans every Friday afternoon." },
      { id: 'C', text: "Instruct developers to memorize all secret token formats and check commits manually." },
      { id: 'D', text: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection", "Push Protection", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-254",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Push Protection to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Blocking commits containing secrets in real time with bypass reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets." },
      { id: 'B', text: "Allow developers to push secrets and run batch scans every Friday afternoon." },
      { id: 'C', text: "Instruct developers to memorize all secret token formats and check commits manually." },
      { id: 'D', text: "Disable git commit hooks to accelerate local development speed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection", "Push Protection", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-255",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Push Protection to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Blocking commits containing secrets in real time with bypass reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets." },
      { id: 'B', text: "Allow developers to push secrets and run batch scans every Friday afternoon." },
      { id: 'C', text: "Instruct developers to memorize all secret token formats and check commits manually." },
      { id: 'D', text: "Disable git commit hooks to accelerate local development speed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection", "Push Protection", "Governance And Compliance"]
  },
  {
    id: "gh-500-256",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Partner Patterns to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Notifying cloud providers and SaaS partners automatically when published tokens are leaked is under consideration.",
    options: [
      { id: 'A', text: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation." },
      { id: 'B', text: "Manually email customer support at the cloud provider whenever a token leak occurs." },
      { id: 'C', text: "Assume leaked tokens will naturally expire without taking containment action." },
      { id: 'D', text: "Prohibit scanning for vendor tokens to protect developer privacy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns", "Partner Patterns", "Enterprise Rollout"]
  },
  {
    id: "gh-500-257",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Partner Patterns to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Notifying cloud providers and SaaS partners automatically when published tokens are leaked is under consideration.",
    options: [
      { id: 'A', text: "Assume leaked tokens will naturally expire without taking containment action." },
      { id: 'B', text: "Manually email customer support at the cloud provider whenever a token leak occurs." },
      { id: 'C', text: "Prohibit scanning for vendor tokens to protect developer privacy." },
      { id: 'D', text: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns", "Partner Patterns", "Supply Chain Defense"]
  },
  {
    id: "gh-500-258",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Partner Patterns to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Notifying cloud providers and SaaS partners automatically when published tokens are leaked is under consideration.",
    options: [
      { id: 'A', text: "Prohibit scanning for vendor tokens to protect developer privacy." },
      { id: 'B', text: "Manually email customer support at the cloud provider whenever a token leak occurs." },
      { id: 'C', text: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation." },
      { id: 'D', text: "Assume leaked tokens will naturally expire without taking containment action." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns", "Partner Patterns", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-259",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Partner Patterns to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Notifying cloud providers and SaaS partners automatically when published tokens are leaked is under consideration.",
    options: [
      { id: 'A', text: "Manually email customer support at the cloud provider whenever a token leak occurs." },
      { id: 'B', text: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation." },
      { id: 'C', text: "Assume leaked tokens will naturally expire without taking containment action." },
      { id: 'D', text: "Prohibit scanning for vendor tokens to protect developer privacy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns", "Partner Patterns", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-260",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Partner Patterns to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Notifying cloud providers and SaaS partners automatically when published tokens are leaked is under consideration.",
    options: [
      { id: 'A', text: "Manually email customer support at the cloud provider whenever a token leak occurs." },
      { id: 'B', text: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation." },
      { id: 'C', text: "Assume leaked tokens will naturally expire without taking containment action." },
      { id: 'D', text: "Prohibit scanning for vendor tokens to protect developer privacy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns", "Partner Patterns", "Governance And Compliance"]
  },
  {
    id: "gh-500-261",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Custom Patterns to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Defining enterprise-specific regex patterns with prefix, start/end delimiters, and test runs is under consideration.",
    options: [
      { id: 'A', text: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing." },
      { id: 'B', text: "Ask developers to write custom bash grep scripts that run on local laptops." },
      { id: 'C', text: "Hardcode proprietary regex strings inside third-party browser extensions." },
      { id: 'D', text: "Disable custom secret detection and scan only for public cloud tokens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Custom Patterns", "Enterprise Rollout"]
  },
  {
    id: "gh-500-262",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Custom Patterns to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Defining enterprise-specific regex patterns with prefix, start/end delimiters, and test runs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode proprietary regex strings inside third-party browser extensions." },
      { id: 'B', text: "Disable custom secret detection and scan only for public cloud tokens." },
      { id: 'C', text: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing." },
      { id: 'D', text: "Ask developers to write custom bash grep scripts that run on local laptops." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Custom Patterns", "Supply Chain Defense"]
  },
  {
    id: "gh-500-263",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Custom Patterns to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Defining enterprise-specific regex patterns with prefix, start/end delimiters, and test runs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode proprietary regex strings inside third-party browser extensions." },
      { id: 'B', text: "Disable custom secret detection and scan only for public cloud tokens." },
      { id: 'C', text: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing." },
      { id: 'D', text: "Ask developers to write custom bash grep scripts that run on local laptops." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Custom Patterns", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-264",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Custom Patterns to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Defining enterprise-specific regex patterns with prefix, start/end delimiters, and test runs is under consideration.",
    options: [
      { id: 'A', text: "Ask developers to write custom bash grep scripts that run on local laptops." },
      { id: 'B', text: "Disable custom secret detection and scan only for public cloud tokens." },
      { id: 'C', text: "Hardcode proprietary regex strings inside third-party browser extensions." },
      { id: 'D', text: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Custom Patterns", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-265",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Custom Patterns to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Defining enterprise-specific regex patterns with prefix, start/end delimiters, and test runs is under consideration.",
    options: [
      { id: 'A', text: "Disable custom secret detection and scan only for public cloud tokens." },
      { id: 'B', text: "Ask developers to write custom bash grep scripts that run on local laptops." },
      { id: 'C', text: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing." },
      { id: 'D', text: "Hardcode proprietary regex strings inside third-party browser extensions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Custom Patterns", "Governance And Compliance"]
  },
  {
    id: "gh-500-266",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Validity Checks to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automatically verifying whether detected tokens are active, inactive, or revoked via partner APIs is under consideration.",
    options: [
      { id: 'A', text: "Assume all detected secrets are active and permanently delete corresponding repositories." },
      { id: 'B', text: "Treat all secret alerts with identical priority regardless of whether tokens are valid." },
      { id: 'C', text: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack)." },
      { id: 'D', text: "Instruct security analysts to test every leaked token manually against live production APIs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks", "Validity Checks", "Enterprise Rollout"]
  },
  {
    id: "gh-500-267",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Validity Checks to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automatically verifying whether detected tokens are active, inactive, or revoked via partner APIs is under consideration.",
    options: [
      { id: 'A', text: "Instruct security analysts to test every leaked token manually against live production APIs." },
      { id: 'B', text: "Treat all secret alerts with identical priority regardless of whether tokens are valid." },
      { id: 'C', text: "Assume all detected secrets are active and permanently delete corresponding repositories." },
      { id: 'D', text: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks", "Validity Checks", "Supply Chain Defense"]
  },
  {
    id: "gh-500-268",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Validity Checks to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automatically verifying whether detected tokens are active, inactive, or revoked via partner APIs is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack)." },
      { id: 'B', text: "Treat all secret alerts with identical priority regardless of whether tokens are valid." },
      { id: 'C', text: "Instruct security analysts to test every leaked token manually against live production APIs." },
      { id: 'D', text: "Assume all detected secrets are active and permanently delete corresponding repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks", "Validity Checks", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-269",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Validity Checks to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automatically verifying whether detected tokens are active, inactive, or revoked via partner APIs is under consideration.",
    options: [
      { id: 'A', text: "Assume all detected secrets are active and permanently delete corresponding repositories." },
      { id: 'B', text: "Treat all secret alerts with identical priority regardless of whether tokens are valid." },
      { id: 'C', text: "Instruct security analysts to test every leaked token manually against live production APIs." },
      { id: 'D', text: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks", "Validity Checks", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-270",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Validity Checks to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automatically verifying whether detected tokens are active, inactive, or revoked via partner APIs is under consideration.",
    options: [
      { id: 'A', text: "Treat all secret alerts with identical priority regardless of whether tokens are valid." },
      { id: 'B', text: "Instruct security analysts to test every leaked token manually against live production APIs." },
      { id: 'C', text: "Assume all detected secrets are active and permanently delete corresponding repositories." },
      { id: 'D', text: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks", "Validity Checks", "Governance And Compliance"]
  },
  {
    id: "gh-500-271",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Generic Secrets to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Machine learning detection of unstructured credentials, passwords, and private keys is under consideration.",
    options: [
      { id: 'A', text: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models." },
      { id: 'B', text: "Require developers to write custom regexes for every possible password string." },
      { id: 'C', text: "Disable secret scanning for all non-standard token formats." },
      { id: 'D', text: "Rely solely on rigid regex patterns that miss unstructured passwords." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets", "Generic Secrets", "Enterprise Rollout"]
  },
  {
    id: "gh-500-272",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Generic Secrets to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Machine learning detection of unstructured credentials, passwords, and private keys is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write custom regexes for every possible password string." },
      { id: 'B', text: "Disable secret scanning for all non-standard token formats." },
      { id: 'C', text: "Rely solely on rigid regex patterns that miss unstructured passwords." },
      { id: 'D', text: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets", "Generic Secrets", "Supply Chain Defense"]
  },
  {
    id: "gh-500-273",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Generic Secrets to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Machine learning detection of unstructured credentials, passwords, and private keys is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write custom regexes for every possible password string." },
      { id: 'B', text: "Rely solely on rigid regex patterns that miss unstructured passwords." },
      { id: 'C', text: "Disable secret scanning for all non-standard token formats." },
      { id: 'D', text: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets", "Generic Secrets", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-274",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Generic Secrets to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Machine learning detection of unstructured credentials, passwords, and private keys is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write custom regexes for every possible password string." },
      { id: 'B', text: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models." },
      { id: 'C', text: "Rely solely on rigid regex patterns that miss unstructured passwords." },
      { id: 'D', text: "Disable secret scanning for all non-standard token formats." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets", "Generic Secrets", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-275",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Generic Secrets to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Machine learning detection of unstructured credentials, passwords, and private keys is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write custom regexes for every possible password string." },
      { id: 'B', text: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models." },
      { id: 'C', text: "Disable secret scanning for all non-standard token formats." },
      { id: 'D', text: "Rely solely on rigid regex patterns that miss unstructured passwords." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets", "Generic Secrets", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_11;
