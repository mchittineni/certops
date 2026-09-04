export const GITHUB_GHAS_QUESTIONS_12 = [
  {
    id: "gh-500-276",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Alert Lifecycle to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Managing alert resolution states: revoked, false positive, used in tests, and close reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'B', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'C', text: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`." },
      { id: 'D', text: "Leave the alert open permanently to maintain historical record visibility." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Alert Lifecycle", "Enterprise Rollout"]
  },
  {
    id: "gh-500-277",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Alert Lifecycle to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Managing alert resolution states: revoked, false positive, used in tests, and close reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`." },
      { id: 'B', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'C', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'D', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Alert Lifecycle", "Supply Chain Defense"]
  },
  {
    id: "gh-500-278",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Alert Lifecycle to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Managing alert resolution states: revoked, false positive, used in tests, and close reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`." },
      { id: 'B', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'C', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'D', text: "Leave the alert open permanently to maintain historical record visibility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Alert Lifecycle", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-279",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Alert Lifecycle to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Managing alert resolution states: revoked, false positive, used in tests, and close reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'B', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'C', text: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`." },
      { id: 'D', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Alert Lifecycle", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-280",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Alert Lifecycle to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Managing alert resolution states: revoked, false positive, used in tests, and close reason auditing is under consideration.",
    options: [
      { id: 'A', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'B', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'C', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'D', text: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Alert Lifecycle", "Governance And Compliance"]
  },
  {
    id: "gh-500-281",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Historical Scanning to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automatic back-scanning of full repository git history upon enabling Secret Scanning is under consideration.",
    options: [
      { id: 'A', text: "Delete repository git history prior to enabling GHAS to reduce scan processing times." },
      { id: 'B', text: "Manually checkout every historical git commit and run local regex search scripts." },
      { id: 'C', text: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches." },
      { id: 'D', text: "Assume credentials committed in past years are expired and skip historical scanning." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning", "Historical Scanning", "Enterprise Rollout"]
  },
  {
    id: "gh-500-282",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Historical Scanning to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automatic back-scanning of full repository git history upon enabling Secret Scanning is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches." },
      { id: 'B', text: "Delete repository git history prior to enabling GHAS to reduce scan processing times." },
      { id: 'C', text: "Manually checkout every historical git commit and run local regex search scripts." },
      { id: 'D', text: "Assume credentials committed in past years are expired and skip historical scanning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning", "Historical Scanning", "Supply Chain Defense"]
  },
  {
    id: "gh-500-283",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Historical Scanning to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automatic back-scanning of full repository git history upon enabling Secret Scanning is under consideration.",
    options: [
      { id: 'A', text: "Delete repository git history prior to enabling GHAS to reduce scan processing times." },
      { id: 'B', text: "Manually checkout every historical git commit and run local regex search scripts." },
      { id: 'C', text: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches." },
      { id: 'D', text: "Assume credentials committed in past years are expired and skip historical scanning." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning", "Historical Scanning", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-284",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Historical Scanning to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automatic back-scanning of full repository git history upon enabling Secret Scanning is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches." },
      { id: 'B', text: "Assume credentials committed in past years are expired and skip historical scanning." },
      { id: 'C', text: "Delete repository git history prior to enabling GHAS to reduce scan processing times." },
      { id: 'D', text: "Manually checkout every historical git commit and run local regex search scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning", "Historical Scanning", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-285",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Historical Scanning to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automatic back-scanning of full repository git history upon enabling Secret Scanning is under consideration.",
    options: [
      { id: 'A', text: "Manually checkout every historical git commit and run local regex search scripts." },
      { id: 'B', text: "Assume credentials committed in past years are expired and skip historical scanning." },
      { id: 'C', text: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches." },
      { id: 'D', text: "Delete repository git history prior to enabling GHAS to reduce scan processing times." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning", "Historical Scanning", "Governance And Compliance"]
  },
  {
    id: "gh-500-286",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Non-Code Scanning to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Extending secret scanning to repository wikis, issues, pull request descriptions, and comments is under consideration.",
    options: [
      { id: 'A', text: "Disable repository wikis to prevent any potential documentation leaks." },
      { id: 'B', text: "Rely on manual human moderators to read every issue comment posted across the organization." },
      { id: 'C', text: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments." },
      { id: 'D', text: "Assume developers only ever store credentials inside source code files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning", "Non-Code Scanning", "Enterprise Rollout"]
  },
  {
    id: "gh-500-287",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Non-Code Scanning to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Extending secret scanning to repository wikis, issues, pull request descriptions, and comments is under consideration.",
    options: [
      { id: 'A', text: "Assume developers only ever store credentials inside source code files." },
      { id: 'B', text: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments." },
      { id: 'C', text: "Disable repository wikis to prevent any potential documentation leaks." },
      { id: 'D', text: "Rely on manual human moderators to read every issue comment posted across the organization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning", "Non-Code Scanning", "Supply Chain Defense"]
  },
  {
    id: "gh-500-288",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Non-Code Scanning to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Extending secret scanning to repository wikis, issues, pull request descriptions, and comments is under consideration.",
    options: [
      { id: 'A', text: "Disable repository wikis to prevent any potential documentation leaks." },
      { id: 'B', text: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments." },
      { id: 'C', text: "Rely on manual human moderators to read every issue comment posted across the organization." },
      { id: 'D', text: "Assume developers only ever store credentials inside source code files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning", "Non-Code Scanning", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-289",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Non-Code Scanning to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Extending secret scanning to repository wikis, issues, pull request descriptions, and comments is under consideration.",
    options: [
      { id: 'A', text: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments." },
      { id: 'B', text: "Assume developers only ever store credentials inside source code files." },
      { id: 'C', text: "Rely on manual human moderators to read every issue comment posted across the organization." },
      { id: 'D', text: "Disable repository wikis to prevent any potential documentation leaks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning", "Non-Code Scanning", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-290",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Non-Code Scanning to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Extending secret scanning to repository wikis, issues, pull request descriptions, and comments is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual human moderators to read every issue comment posted across the organization." },
      { id: 'B', text: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments." },
      { id: 'C', text: "Disable repository wikis to prevent any potential documentation leaks." },
      { id: 'D', text: "Assume developers only ever store credentials inside source code files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning", "Non-Code Scanning", "Governance And Compliance"]
  },
  {
    id: "gh-500-291",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Secret APIs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automating SIEM ingestion, Jira ticket creation, and containment workflows via webhooks and REST APIs is under consideration.",
    options: [
      { id: 'A', text: "Scrape the GitHub HTML web console using automated browser emulation scripts." },
      { id: 'B', text: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment." },
      { id: 'C', text: "Disable external security integrations to avoid API rate limits." },
      { id: 'D', text: "Instruct SOC analysts to log into GitHub manually every morning and refresh the web interface." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs", "Secret APIs", "Enterprise Rollout"]
  },
  {
    id: "gh-500-292",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Secret APIs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automating SIEM ingestion, Jira ticket creation, and containment workflows via webhooks and REST APIs is under consideration.",
    options: [
      { id: 'A', text: "Instruct SOC analysts to log into GitHub manually every morning and refresh the web interface." },
      { id: 'B', text: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment." },
      { id: 'C', text: "Scrape the GitHub HTML web console using automated browser emulation scripts." },
      { id: 'D', text: "Disable external security integrations to avoid API rate limits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs", "Secret APIs", "Supply Chain Defense"]
  },
  {
    id: "gh-500-293",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Secret APIs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automating SIEM ingestion, Jira ticket creation, and containment workflows via webhooks and REST APIs is under consideration.",
    options: [
      { id: 'A', text: "Instruct SOC analysts to log into GitHub manually every morning and refresh the web interface." },
      { id: 'B', text: "Disable external security integrations to avoid API rate limits." },
      { id: 'C', text: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment." },
      { id: 'D', text: "Scrape the GitHub HTML web console using automated browser emulation scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs", "Secret APIs", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-294",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Secret APIs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automating SIEM ingestion, Jira ticket creation, and containment workflows via webhooks and REST APIs is under consideration.",
    options: [
      { id: 'A', text: "Scrape the GitHub HTML web console using automated browser emulation scripts." },
      { id: 'B', text: "Disable external security integrations to avoid API rate limits." },
      { id: 'C', text: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment." },
      { id: 'D', text: "Instruct SOC analysts to log into GitHub manually every morning and refresh the web interface." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs", "Secret APIs", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-295",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Secret APIs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automating SIEM ingestion, Jira ticket creation, and containment workflows via webhooks and REST APIs is under consideration.",
    options: [
      { id: 'A', text: "Scrape the GitHub HTML web console using automated browser emulation scripts." },
      { id: 'B', text: "Instruct SOC analysts to log into GitHub manually every morning and refresh the web interface." },
      { id: 'C', text: "Disable external security integrations to avoid API rate limits." },
      { id: 'D', text: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs", "Secret APIs", "Governance And Compliance"]
  },
  {
    id: "gh-500-296",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Bypass Governance to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Reviewing push protection bypass audit log events and restricting bypass privileges via Security Manager is under consideration.",
    options: [
      { id: 'A', text: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications." },
      { id: 'B', text: "Allow anonymous unauthenticated users to bypass push protection without justification." },
      { id: 'C', text: "Disable audit logging to prevent capturing bypass explanations." },
      { id: 'D', text: "Ban all push protection bypasses permanently, causing complete deployment freezes during false positive incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance", "Bypass Governance", "Enterprise Rollout"]
  },
  {
    id: "gh-500-297",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Bypass Governance to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Reviewing push protection bypass audit log events and restricting bypass privileges via Security Manager is under consideration.",
    options: [
      { id: 'A', text: "Disable audit logging to prevent capturing bypass explanations." },
      { id: 'B', text: "Ban all push protection bypasses permanently, causing complete deployment freezes during false positive incidents." },
      { id: 'C', text: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications." },
      { id: 'D', text: "Allow anonymous unauthenticated users to bypass push protection without justification." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance", "Bypass Governance", "Supply Chain Defense"]
  },
  {
    id: "gh-500-298",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Bypass Governance to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Reviewing push protection bypass audit log events and restricting bypass privileges via Security Manager is under consideration.",
    options: [
      { id: 'A', text: "Allow anonymous unauthenticated users to bypass push protection without justification." },
      { id: 'B', text: "Ban all push protection bypasses permanently, causing complete deployment freezes during false positive incidents." },
      { id: 'C', text: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications." },
      { id: 'D', text: "Disable audit logging to prevent capturing bypass explanations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance", "Bypass Governance", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-299",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Bypass Governance to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Reviewing push protection bypass audit log events and restricting bypass privileges via Security Manager is under consideration.",
    options: [
      { id: 'A', text: "Ban all push protection bypasses permanently, causing complete deployment freezes during false positive incidents." },
      { id: 'B', text: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications." },
      { id: 'C', text: "Disable audit logging to prevent capturing bypass explanations." },
      { id: 'D', text: "Allow anonymous unauthenticated users to bypass push protection without justification." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance", "Bypass Governance", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-300",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Bypass Governance to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Reviewing push protection bypass audit log events and restricting bypass privileges via Security Manager is under consideration.",
    options: [
      { id: 'A', text: "Ban all push protection bypasses permanently, causing complete deployment freezes during false positive incidents." },
      { id: 'B', text: "Disable audit logging to prevent capturing bypass explanations." },
      { id: 'C', text: "Allow anonymous unauthenticated users to bypass push protection without justification." },
      { id: 'D', text: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance", "Bypass Governance", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_12;
