export const GITHUB_GHAS_QUESTIONS_12 = [
  {
    id: "gh-500-276",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Revoke the secret with the provider, confirm rotation, then resolve the alert as `Revoked`." },
      { id: 'B', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'C', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'D', text: "Leave the alert open permanently to maintain historical record visibility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle","Alert Lifecycle","Enterprise Rollout"]
  },
  {
    id: "gh-500-277",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Revoke the secret with the provider, confirm rotation, then resolve the alert as `Revoked`." },
      { id: 'B', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'C', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'D', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle","Alert Lifecycle","Supply Chain Defense"]
  },
  {
    id: "gh-500-278",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Revoke the secret with the provider, confirm rotation, then resolve the alert as `Revoked`." },
      { id: 'B', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'C', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'D', text: "Leave the alert open permanently to maintain historical record visibility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle","Alert Lifecycle","Secret Leak Prevention"]
  },
  {
    id: "gh-500-279",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'B', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'C', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." },
      { id: 'D', text: "Revoke the secret with the provider, confirm rotation, then resolve the alert as `Revoked`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle","Alert Lifecycle","Static Analysis Codeql"]
  },
  {
    id: "gh-500-280",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Lifecycle and Remediation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to resolve a secret scanning alert after the engineering team successfully rotates the compromised production API key.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Mark the alert as `False positive` to clear the security queue quickly without rotating the credential." },
      { id: 'B', text: "Leave the alert open permanently to maintain historical record visibility." },
      { id: 'C', text: "Revoke the secret with the provider, confirm rotation, then resolve the alert as `Revoked`." },
      { id: 'D', text: "Delete the git commit history using a force push and assume the secret is safe without rotating the key." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Revoke the secret with the provider, verify rotation, and resolve the GitHub alert with the resolution reason `Revoked`. Resolving a secret scanning alert requires first revoking or rotating the secret at the provider, as git commit deletion does not guarantee the secret was not cached or scraped. The alert is then closed in GitHub with an accurate reason (`Revoked`, `False positive`, `Used in tests`).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle","Alert Lifecycle","Governance And Compliance"]
  },
  {
    id: "gh-500-281",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable push protection, which checks each new push as it reaches the remote." },
      { id: 'B', text: "Enable the scanning API and submit each historical commit range to it in turn." },
      { id: 'C', text: "Enable secret scanning after rewriting history so only current branches remain." },
      { id: 'D', text: "Enable secret scanning, which scans the full commit history on activation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning","Historical Scanning","Enterprise Rollout"]
  },
  {
    id: "gh-500-282",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable secret scanning, which scans the full commit history on activation." },
      { id: 'B', text: "Enable push protection, which checks each new push as it reaches the remote." },
      { id: 'C', text: "Enable secret scanning after rewriting history so only current branches remain." },
      { id: 'D', text: "Enable the scanning API and submit each historical commit range to it in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning","Historical Scanning","Supply Chain Defense"]
  },
  {
    id: "gh-500-283",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable push protection, which checks each new push as it reaches the remote." },
      { id: 'B', text: "Enable the scanning API and submit each historical commit range to it in turn." },
      { id: 'C', text: "Enable secret scanning after rewriting history so only current branches remain." },
      { id: 'D', text: "Enable secret scanning, which scans the full commit history on activation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning","Historical Scanning","Secret Leak Prevention"]
  },
  {
    id: "gh-500-284",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable secret scanning, which scans the full commit history on activation." },
      { id: 'B', text: "Enable secret scanning after rewriting history so only current branches remain." },
      { id: 'C', text: "Enable the scanning API and submit each historical commit range to it in turn." },
      { id: 'D', text: "Enable push protection, which checks each new push as it reaches the remote." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning","Historical Scanning","Static Analysis Codeql"]
  },
  {
    id: "gh-500-285",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Historical Commit Scanning on GHAS Enablement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to ensure all historical commits pushed over the past five years are thoroughly analyzed for leaked credentials when enabling GHAS.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable push protection, which checks each new push as it reaches the remote." },
      { id: 'B', text: "Enable secret scanning, which scans the full commit history on activation." },
      { id: 'C', text: "Enable the scanning API and submit each historical commit range to it in turn." },
      { id: 'D', text: "Enable secret scanning after rewriting history so only current branches remain." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning on the repository, which automatically triggers a comprehensive scan across all historical commits and branches. When Secret Scanning is enabled on an existing repository, GitHub automatically queues a full historical scan of the entire git commit tree, including all branches, tags, and commits dating back to repository creation, generating alerts for any historical credentials found.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Historical Scanning","Historical Scanning","Governance And Compliance"]
  },
  {
    id: "gh-500-286",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable secret scanning over the non-code surfaces too: wikis, issues and pull request comments." },
      { id: 'B', text: "Enable push protection on the default branch, which covers whatever reaches the repository." },
      { id: 'C', text: "Disable the repository wikis and issue templates so credentials cannot be pasted into them." },
      { id: 'D', text: "Add a moderation workflow that scans new issue comments with the organization's patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning","Non-Code Scanning","Enterprise Rollout"]
  },
  {
    id: "gh-500-287",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable secret scanning over the non-code surfaces too: wikis, issues and pull request comments." },
      { id: 'B', text: "Enable push protection on the default branch, which covers whatever reaches the repository." },
      { id: 'C', text: "Disable the repository wikis and issue templates so credentials cannot be pasted into them." },
      { id: 'D', text: "Add a moderation workflow that scans new issue comments with the organization's patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning","Non-Code Scanning","Supply Chain Defense"]
  },
  {
    id: "gh-500-288",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Add a moderation workflow that scans new issue comments with the organization's patterns." },
      { id: 'B', text: "Disable the repository wikis and issue templates so credentials cannot be pasted into them." },
      { id: 'C', text: "Enable push protection on the default branch, which covers whatever reaches the repository." },
      { id: 'D', text: "Enable secret scanning over the non-code surfaces too: wikis, issues and pull request comments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning","Non-Code Scanning","Secret Leak Prevention"]
  },
  {
    id: "gh-500-289",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable secret scanning over the non-code surfaces too: wikis, issues and pull request comments." },
      { id: 'B', text: "Enable push protection on the default branch, which covers whatever reaches the repository." },
      { id: 'C', text: "Disable the repository wikis and issue templates so credentials cannot be pasted into them." },
      { id: 'D', text: "Add a moderation workflow that scans new issue comments with the organization's patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning","Non-Code Scanning","Static Analysis Codeql"]
  },
  {
    id: "gh-500-290",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning in Wikis and Pull Request Comments: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent engineers from pasting sensitive production credentials into repository wiki pages, issue descriptions, or PR comments.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable push protection on the default branch, which covers whatever reaches the repository." },
      { id: 'B', text: "Add a moderation workflow that scans new issue comments with the organization's patterns." },
      { id: 'C', text: "Disable the repository wikis and issue templates so credentials cannot be pasted into them." },
      { id: 'D', text: "Enable secret scanning over the non-code surfaces too: wikis, issues and pull request comments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning across non-code surfaces including repository Wikis, issue descriptions, and pull request comments. GitHub Secret Scanning extends beyond source code repositories to encompass non-code surfaces: repository Wikis, issue bodies, pull request descriptions, and comments are monitored for secret leaks, raising alerts when tokens are pasted into discussions.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Non-Code Scanning","Non-Code Scanning","Governance And Compliance"]
  },
  {
    id: "gh-500-291",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Subscribe to the audit log stream and drive the SOAR from its secret scanning entries." },
      { id: 'B', text: "Poll the code scanning alerts API on a schedule and open a ticket for each new entry." },
      { id: 'C', text: "Forward the organization's security alert emails into the SOAR's intake mailbox." },
      { id: 'D', text: "Subscribe to `secret_scanning_alert` webhooks and drive the SOAR from the alerts API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs","Secret APIs","Enterprise Rollout"]
  },
  {
    id: "gh-500-292",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Subscribe to `secret_scanning_alert` webhooks and drive the SOAR from the alerts API." },
      { id: 'B', text: "Forward the organization's security alert emails into the SOAR's intake mailbox." },
      { id: 'C', text: "Poll the code scanning alerts API on a schedule and open a ticket for each new entry." },
      { id: 'D', text: "Subscribe to the audit log stream and drive the SOAR from its secret scanning entries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs","Secret APIs","Supply Chain Defense"]
  },
  {
    id: "gh-500-293",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Subscribe to the audit log stream and drive the SOAR from its secret scanning entries." },
      { id: 'B', text: "Poll the code scanning alerts API on a schedule and open a ticket for each new entry." },
      { id: 'C', text: "Forward the organization's security alert emails into the SOAR's intake mailbox." },
      { id: 'D', text: "Subscribe to `secret_scanning_alert` webhooks and drive the SOAR from the alerts API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs","Secret APIs","Secret Leak Prevention"]
  },
  {
    id: "gh-500-294",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Subscribe to `secret_scanning_alert` webhooks and drive the SOAR from the alerts API." },
      { id: 'B', text: "Forward the organization's security alert emails into the SOAR's intake mailbox." },
      { id: 'C', text: "Poll the code scanning alerts API on a schedule and open a ticket for each new entry." },
      { id: 'D', text: "Subscribe to the audit log stream and drive the SOAR from its secret scanning entries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs","Secret APIs","Static Analysis Codeql"]
  },
  {
    id: "gh-500-295",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning REST APIs and Webhook Automation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to integrate GitHub Secret Scanning alerts directly into an enterprise Security Operations Center (SOC) SOAR platform.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Subscribe to the audit log stream and drive the SOAR from its secret scanning entries." },
      { id: 'B', text: "Forward the organization's security alert emails into the SOAR's intake mailbox." },
      { id: 'C', text: "Subscribe to `secret_scanning_alert` webhooks and drive the SOAR from the alerts API." },
      { id: 'D', text: "Poll the code scanning alerts API on a schedule and open a ticket for each new entry." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `secret_scanning_alert` webhook events and query the Secret Scanning REST API to trigger automated SOAR ticketing and containment. The GitHub Secret Scanning REST API (`/repos/{owner}/{repo}/secret-scanning/alerts`) and webhook events (`secret_scanning_alert`) allow security automation engines to ingest alerts in real time, create Jira tickets, and execute automated token revocation workflows.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning",
    tags: ["Secret APIs","Secret APIs","Governance And Compliance"]
  },
  {
    id: "gh-500-296",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Alert on the push protection bypass audit events, and have security managers review the reasons." },
      { id: 'B', text: "Require a second approver on each bypass, configured through the repository's own ruleset." },
      { id: 'C', text: "Allow bypasses only from the organization owners, who record the reason in the audit trail." },
      { id: 'D', text: "Ban bypasses outright, so a false positive is resolved by adding a pattern exclusion instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance","Bypass Governance","Enterprise Rollout"]
  },
  {
    id: "gh-500-297",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Ban bypasses outright, so a false positive is resolved by adding a pattern exclusion instead." },
      { id: 'B', text: "Allow bypasses only from the organization owners, who record the reason in the audit trail." },
      { id: 'C', text: "Require a second approver on each bypass, configured through the repository's own ruleset." },
      { id: 'D', text: "Alert on the push protection bypass audit events, and have security managers review the reasons." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance","Bypass Governance","Supply Chain Defense"]
  },
  {
    id: "gh-500-298",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Alert on the push protection bypass audit events, and have security managers review the reasons." },
      { id: 'B', text: "Require a second approver on each bypass, configured through the repository's own ruleset." },
      { id: 'C', text: "Allow bypasses only from the organization owners, who record the reason in the audit trail." },
      { id: 'D', text: "Ban bypasses outright, so a false positive is resolved by adding a pattern exclusion instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance","Bypass Governance","Secret Leak Prevention"]
  },
  {
    id: "gh-500-299",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Allow bypasses only from the organization owners, who record the reason in the audit trail." },
      { id: 'B', text: "Ban bypasses outright, so a false positive is resolved by adding a pattern exclusion instead." },
      { id: 'C', text: "Alert on the push protection bypass audit events, and have security managers review the reasons." },
      { id: 'D', text: "Require a second approver on each bypass, configured through the repository's own ruleset." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance","Bypass Governance","Static Analysis Codeql"]
  },
  {
    id: "gh-500-300",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Bypass Delegation and Security Manager Governance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to ensure security teams maintain oversight when developers bypass push protection for urgent production deployments.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Alert on the push protection bypass audit events, and have security managers review the reasons." },
      { id: 'B', text: "Require a second approver on each bypass, configured through the repository's own ruleset." },
      { id: 'C', text: "Allow bypasses only from the organization owners, who record the reason in the audit trail." },
      { id: 'D', text: "Ban bypasses outright, so a false positive is resolved by adding a pattern exclusion instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Monitor `secret_scanning_push_protection.bypass` audit log events and configure Security Manager roles to review bypass justifications. When a developer bypasses push protection, GitHub records the event in the audit log (`secret_scanning_push_protection.bypass`), noting the committer, repository, timestamp, secret type, and justification. Security managers review these bypasses to ensure policies are not abused.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations#viewing-audit-logs-for-bypasses",
    tags: ["Bypass Governance","Bypass Governance","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_12;
