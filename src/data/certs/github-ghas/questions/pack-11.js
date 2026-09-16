export const GITHUB_GHAS_QUESTIONS_11 = [
  {
    id: "gh-500-251",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable secret scanning alerts and triage the queue on a weekly cadence." },
      { id: 'B', text: "Distribute a pre-commit hook that runs the same patterns before each push." },
      { id: 'C', text: "Enable push protection only for the custom patterns the platform team owns." },
      { id: 'D', text: "Enable secret scanning push protection across the organization's repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection","Push Protection","Enterprise Rollout"]
  },
  {
    id: "gh-500-252",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable secret scanning alerts and triage the queue on a weekly cadence." },
      { id: 'B', text: "Enable secret scanning push protection across the organization's repositories." },
      { id: 'C', text: "Distribute a pre-commit hook that runs the same patterns before each push." },
      { id: 'D', text: "Enable push protection only for the custom patterns the platform team owns." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection","Push Protection","Supply Chain Defense"]
  },
  {
    id: "gh-500-253",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable secret scanning push protection across the organization's repositories." },
      { id: 'B', text: "Enable secret scanning alerts and triage the queue on a weekly cadence." },
      { id: 'C', text: "Enable push protection only for the custom patterns the platform team owns." },
      { id: 'D', text: "Distribute a pre-commit hook that runs the same patterns before each push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection","Push Protection","Secret Leak Prevention"]
  },
  {
    id: "gh-500-254",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable secret scanning push protection across the organization's repositories." },
      { id: 'B', text: "Enable secret scanning alerts and triage the queue on a weekly cadence." },
      { id: 'C', text: "Enable push protection only for the custom patterns the platform team owns." },
      { id: 'D', text: "Distribute a pre-commit hook that runs the same patterns before each push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection","Push Protection","Static Analysis Codeql"]
  },
  {
    id: "gh-500-255",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection for Secret Scanning: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent developers from accidentally pushing hardcoded AWS or OpenAI API tokens to remote GitHub repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable secret scanning push protection across the organization's repositories." },
      { id: 'B', text: "Enable secret scanning alerts and triage the queue on a weekly cadence." },
      { id: 'C', text: "Enable push protection only for the custom patterns the platform team owns." },
      { id: 'D', text: "Distribute a pre-commit hook that runs the same patterns before each push." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning Push Protection across organization repositories to intercept and reject commits containing secrets. Push Protection acts as a proactive security gate. When a developer pushes commits, GitHub scans the diff in real time. If a supported secret pattern is detected, the push is rejected immediately unless the developer provides an auditable bypass reason.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-push-protection",
    tags: ["Push Protection","Push Protection","Governance And Compliance"]
  },
  {
    id: "gh-500-256",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Rely on partner pattern scanning, which notifies the token issuer so it can revoke the leak." },
      { id: 'B', text: "Rely on push protection, which blocks the commit before the token reaches the remote at all." },
      { id: 'C', text: "Rely on the alert webhook, which lets an internal workflow revoke the token on detection." },
      { id: 'D', text: "Rely on validity checks, which mark the alert active or inactive against the provider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns","Partner Patterns","Enterprise Rollout"]
  },
  {
    id: "gh-500-257",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Rely on validity checks, which mark the alert active or inactive against the provider." },
      { id: 'B', text: "Rely on push protection, which blocks the commit before the token reaches the remote at all." },
      { id: 'C', text: "Rely on partner pattern scanning, which notifies the token issuer so it can revoke the leak." },
      { id: 'D', text: "Rely on the alert webhook, which lets an internal workflow revoke the token on detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns","Partner Patterns","Supply Chain Defense"]
  },
  {
    id: "gh-500-258",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Rely on the alert webhook, which lets an internal workflow revoke the token on detection." },
      { id: 'B', text: "Rely on push protection, which blocks the commit before the token reaches the remote at all." },
      { id: 'C', text: "Rely on validity checks, which mark the alert active or inactive against the provider." },
      { id: 'D', text: "Rely on partner pattern scanning, which notifies the token issuer so it can revoke the leak." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns","Partner Patterns","Secret Leak Prevention"]
  },
  {
    id: "gh-500-259",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Rely on partner pattern scanning, which notifies the token issuer so it can revoke the leak." },
      { id: 'B', text: "Rely on push protection, which blocks the commit before the token reaches the remote at all." },
      { id: 'C', text: "Rely on the alert webhook, which lets an internal workflow revoke the token on detection." },
      { id: 'D', text: "Rely on validity checks, which mark the alert active or inactive against the provider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns","Partner Patterns","Static Analysis Codeql"]
  },
  {
    id: "gh-500-260",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Partner Pattern Secret Scanning and Automated Revocation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to ensure compromised cloud access tokens published in public or private repositories are revoked immediately by the token issuer.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Rely on partner pattern scanning, which notifies the token issuer so it can revoke the leak." },
      { id: 'B', text: "Rely on push protection, which blocks the commit before the token reaches the remote at all." },
      { id: 'C', text: "Rely on the alert webhook, which lets an internal workflow revoke the token on detection." },
      { id: 'D', text: "Rely on validity checks, which mark the alert active or inactive against the provider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on GitHub Partner Pattern Secret Scanning, which sends real-time leak notifications to token partners for automated validation and revocation. GitHub partners with over 100 token providers (AWS, Azure, Google Cloud, Slack, Stripe). When a partner secret is detected in public repositories (or private repos with GHAS), GitHub immediately forwards the payload to the partner, who validates and automatically revokes the credential.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns",
    tags: ["Partner Patterns","Partner Patterns","Governance And Compliance"]
  },
  {
    id: "gh-500-261",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Publish a custom secret pattern at the enterprise level, dry-run against history first." },
      { id: 'B', text: "Publish the pattern as a push protection bypass rule scoped to the affected repositories." },
      { id: 'C', text: "Add the pattern to a CodeQL query pack and run it from each repository's scan workflow." },
      { id: 'D', text: "Add the pattern to a pre-commit hook the platform team distributes to every developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns","Custom Patterns","Enterprise Rollout"]
  },
  {
    id: "gh-500-262",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Publish a custom secret pattern at the enterprise level, dry-run against history first." },
      { id: 'B', text: "Publish the pattern as a push protection bypass rule scoped to the affected repositories." },
      { id: 'C', text: "Add the pattern to a CodeQL query pack and run it from each repository's scan workflow." },
      { id: 'D', text: "Add the pattern to a pre-commit hook the platform team distributes to every developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns","Custom Patterns","Supply Chain Defense"]
  },
  {
    id: "gh-500-263",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Publish a custom secret pattern at the enterprise level, dry-run against history first." },
      { id: 'B', text: "Publish the pattern as a push protection bypass rule scoped to the affected repositories." },
      { id: 'C', text: "Add the pattern to a CodeQL query pack and run it from each repository's scan workflow." },
      { id: 'D', text: "Add the pattern to a pre-commit hook the platform team distributes to every developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns","Custom Patterns","Secret Leak Prevention"]
  },
  {
    id: "gh-500-264",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Add the pattern to a pre-commit hook the platform team distributes to every developer." },
      { id: 'B', text: "Publish a custom secret pattern at the enterprise level, dry-run against history first." },
      { id: 'C', text: "Add the pattern to a CodeQL query pack and run it from each repository's scan workflow." },
      { id: 'D', text: "Publish the pattern as a push protection bypass rule scoped to the affected repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns","Custom Patterns","Static Analysis Codeql"]
  },
  {
    id: "gh-500-265",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Secret Patterns and Regular Expressions: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect proprietary internal corporate API keys formatted as `CORP_SEC_[0-9A-Z]{32}` across enterprise repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Add the pattern to a CodeQL query pack and run it from each repository's scan workflow." },
      { id: 'B', text: "Publish the pattern as a push protection bypass rule scoped to the affected repositories." },
      { id: 'C', text: "Add the pattern to a pre-commit hook the platform team distributes to every developer." },
      { id: 'D', text: "Publish a custom secret pattern at the enterprise level, dry-run against history first." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a Custom Secret Pattern at the enterprise or organization level, testing the regular expression against historical commit data before publishing. Enterprise administrators author Custom Secret Patterns to detect proprietary credentials. Patterns use regular expressions, optional prefix/suffix delimiters, and can be dry-run against historical commits to evaluate finding volume and false positive rates before enabling push protection.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns","Custom Patterns","Governance And Compliance"]
  },
  {
    id: "gh-500-266",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable validity checks, which confirm each token's status with the provider." },
      { id: 'B', text: "Enable partner pattern scanning, which lets the provider revoke the token itself." },
      { id: 'C', text: "Enable push protection, so the credential never reaches the remote to begin with." },
      { id: 'D', text: "Enable auto-triage rules that close alerts on paths the team marks as fixtures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks","Validity Checks","Enterprise Rollout"]
  },
  {
    id: "gh-500-267",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable auto-triage rules that close alerts on paths the team marks as fixtures." },
      { id: 'B', text: "Enable validity checks, which confirm each token's status with the provider." },
      { id: 'C', text: "Enable push protection, so the credential never reaches the remote to begin with." },
      { id: 'D', text: "Enable partner pattern scanning, which lets the provider revoke the token itself." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks","Validity Checks","Supply Chain Defense"]
  },
  {
    id: "gh-500-268",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable validity checks, which confirm each token's status with the provider." },
      { id: 'B', text: "Enable push protection, so the credential never reaches the remote to begin with." },
      { id: 'C', text: "Enable auto-triage rules that close alerts on paths the team marks as fixtures." },
      { id: 'D', text: "Enable partner pattern scanning, which lets the provider revoke the token itself." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks","Validity Checks","Secret Leak Prevention"]
  },
  {
    id: "gh-500-269",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable partner pattern scanning, which lets the provider revoke the token itself." },
      { id: 'B', text: "Enable validity checks, which confirm each token's status with the provider." },
      { id: 'C', text: "Enable auto-triage rules that close alerts on paths the team marks as fixtures." },
      { id: 'D', text: "Enable push protection, so the credential never reaches the remote to begin with." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks","Validity Checks","Static Analysis Codeql"]
  },
  {
    id: "gh-500-270",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Validity Checks: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to help security responders prioritize high-risk active credentials over obsolete, inactive test tokens in secret scanning alerts.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable validity checks, which confirm each token's status with the provider." },
      { id: 'B', text: "Enable partner pattern scanning, which lets the provider revoke the token itself." },
      { id: 'C', text: "Enable push protection, so the credential never reaches the remote to begin with." },
      { id: 'D', text: "Enable auto-triage rules that close alerts on paths the team marks as fixtures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Validity Checks to automatically verify token status directly with partner APIs (e.g., AWS, GitHub, Slack). Secret Validity Checks allow GitHub to query partner endpoints dynamically to verify whether a detected secret is active. Alerts display a 'valid', 'invalid', or 'revoked' badge, enabling security teams to prioritize live production credentials during incident response.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#validity-checks",
    tags: ["Validity Checks","Validity Checks","Governance And Compliance"]
  },
  {
    id: "gh-500-271",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable AI-powered generic secret detection, which finds unstructured credentials." },
      { id: 'B', text: "Enable push protection for custom patterns so unstructured secrets are blocked." },
      { id: 'C', text: "Enable a custom pattern per credential shape the platform team can enumerate." },
      { id: 'D', text: "Enable validity checks so only credentials that still authenticate are alerted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets","Generic Secrets","Enterprise Rollout"]
  },
  {
    id: "gh-500-272",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable a custom pattern per credential shape the platform team can enumerate." },
      { id: 'B', text: "Enable AI-powered generic secret detection, which finds unstructured credentials." },
      { id: 'C', text: "Enable push protection for custom patterns so unstructured secrets are blocked." },
      { id: 'D', text: "Enable validity checks so only credentials that still authenticate are alerted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets","Generic Secrets","Supply Chain Defense"]
  },
  {
    id: "gh-500-273",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable push protection for custom patterns so unstructured secrets are blocked." },
      { id: 'B', text: "Enable a custom pattern per credential shape the platform team can enumerate." },
      { id: 'C', text: "Enable AI-powered generic secret detection, which finds unstructured credentials." },
      { id: 'D', text: "Enable validity checks so only credentials that still authenticate are alerted." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets","Generic Secrets","Secret Leak Prevention"]
  },
  {
    id: "gh-500-274",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable a custom pattern per credential shape the platform team can enumerate." },
      { id: 'B', text: "Enable validity checks so only credentials that still authenticate are alerted." },
      { id: 'C', text: "Enable AI-powered generic secret detection, which finds unstructured credentials." },
      { id: 'D', text: "Enable push protection for custom patterns so unstructured secrets are blocked." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets","Generic Secrets","Static Analysis Codeql"]
  },
  {
    id: "gh-500-275",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "AI-Powered Generic Secret Detection: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect unformatted database passwords, RSA private keys, and high-entropy authentication strings that lack vendor prefixes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable push protection for custom patterns so unstructured secrets are blocked." },
      { id: 'B', text: "Enable validity checks so only credentials that still authenticate are alerted." },
      { id: 'C', text: "Enable a custom pattern per credential shape the platform team can enumerate." },
      { id: 'D', text: "Enable AI-powered generic secret detection, which finds unstructured credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AI-powered Generic Secret Detection in Secret Scanning to catch unstructured secrets using machine learning models. Generic secret detection complements pattern-based matching by using machine learning models trained on code syntax. It identifies high-entropy strings, passwords assigned to sensitive variable names (e.g., `db_password = '...'`), and private keys that lack vendor-specific prefixes.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#generic-secrets",
    tags: ["Generic Secrets","Generic Secrets","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_11;
