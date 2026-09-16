export const GITHUB_GHAS_QUESTIONS_20 = [
  {
    id: "gh-500-476",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers and Role-Based Access Control: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to allow the corporate security operations team to view all alerts, triage findings, and configure security policies without granting them source code write access.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Assign the `Security Manager` role to the security team at the organization level." },
      { id: 'B', text: "Prohibit the security team from viewing developer repositories to protect code privacy." },
      { id: 'C', text: "Grant the security team full Owner or Admin rights across all repositories, giving them permissions to delete production code." },
      { id: 'D', text: "Create individual personal accounts for security engineers and add them manually to every repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the `Security Manager` role to the security team at the organization level. The `Security Manager` role gives designated teams read access to all repositories across an organization and full management access to security alerts (Secret Scanning, Dependabot, Code Scanning) and security policies, without granting repository write or administrative permissions.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Manager Role","Security Manager Role","Enterprise Rollout"]
  },
  {
    id: "gh-500-477",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers and Role-Based Access Control: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to allow the corporate security operations team to view all alerts, triage findings, and configure security policies without granting them source code write access.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Grant the security team full Owner or Admin rights across all repositories, giving them permissions to delete production code." },
      { id: 'B', text: "Create individual personal accounts for security engineers and add them manually to every repository." },
      { id: 'C', text: "Assign the `Security Manager` role to the security team at the organization level." },
      { id: 'D', text: "Prohibit the security team from viewing developer repositories to protect code privacy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Assign the `Security Manager` role to the security team at the organization level. The `Security Manager` role gives designated teams read access to all repositories across an organization and full management access to security alerts (Secret Scanning, Dependabot, Code Scanning) and security policies, without granting repository write or administrative permissions.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Manager Role","Security Manager Role","Supply Chain Defense"]
  },
  {
    id: "gh-500-478",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers and Role-Based Access Control: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to allow the corporate security operations team to view all alerts, triage findings, and configure security policies without granting them source code write access.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Create individual personal accounts for security engineers and add them manually to every repository." },
      { id: 'B', text: "Grant the security team full Owner or Admin rights across all repositories, giving them permissions to delete production code." },
      { id: 'C', text: "Prohibit the security team from viewing developer repositories to protect code privacy." },
      { id: 'D', text: "Assign the `Security Manager` role to the security team at the organization level." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign the `Security Manager` role to the security team at the organization level. The `Security Manager` role gives designated teams read access to all repositories across an organization and full management access to security alerts (Secret Scanning, Dependabot, Code Scanning) and security policies, without granting repository write or administrative permissions.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Manager Role","Security Manager Role","Secret Leak Prevention"]
  },
  {
    id: "gh-500-479",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers and Role-Based Access Control: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to allow the corporate security operations team to view all alerts, triage findings, and configure security policies without granting them source code write access.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Assign the `Security Manager` role to the security team at the organization level." },
      { id: 'B', text: "Grant the security team full Owner or Admin rights across all repositories, giving them permissions to delete production code." },
      { id: 'C', text: "Create individual personal accounts for security engineers and add them manually to every repository." },
      { id: 'D', text: "Prohibit the security team from viewing developer repositories to protect code privacy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the `Security Manager` role to the security team at the organization level. The `Security Manager` role gives designated teams read access to all repositories across an organization and full management access to security alerts (Secret Scanning, Dependabot, Code Scanning) and security policies, without granting repository write or administrative permissions.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Manager Role","Security Manager Role","Static Analysis Codeql"]
  },
  {
    id: "gh-500-480",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers and Role-Based Access Control: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to allow the corporate security operations team to view all alerts, triage findings, and configure security policies without granting them source code write access.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Grant the security team full Owner or Admin rights across all repositories, giving them permissions to delete production code." },
      { id: 'B', text: "Prohibit the security team from viewing developer repositories to protect code privacy." },
      { id: 'C', text: "Create individual personal accounts for security engineers and add them manually to every repository." },
      { id: 'D', text: "Assign the `Security Manager` role to the security team at the organization level." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign the `Security Manager` role to the security team at the organization level. The `Security Manager` role gives designated teams read access to all repositories across an organization and full management access to security alerts (Secret Scanning, Dependabot, Code Scanning) and security policies, without granting repository write or administrative permissions.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Manager Role","Security Manager Role","Governance And Compliance"]
  },
  {
    id: "gh-500-481",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Security Advisories and Private Vulnerability Reporting: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to enable external security researchers to report vulnerabilities privately without disclosing zero-day bugs in public issues.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable private vulnerability reporting, and hold the fix in a private mirror repository." },
      { id: 'B', text: "Direct reporters to a `SECURITY.md` mailbox, and track the fix in a private issue." },
      { id: 'C', text: "Direct reporters to open a draft advisory themselves, and fix on the default branch." },
      { id: 'D', text: "Enable private vulnerability reporting, and use security advisories to fix in a private fork." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Private Vulnerability Reporting and use Repository Security Advisories to collaborate on fixes in private forks and request CVEs. Private Vulnerability Reporting allows researchers to submit confidential reports directly to repository maintainers. Maintainers use Repository Security Advisories to discuss findings, collaborate on patches in a temporary private fork, and request a CVE number directly from GitHub as a CNA.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["Security Advisories","Security Advisories","Enterprise Rollout"]
  },
  {
    id: "gh-500-482",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Security Advisories and Private Vulnerability Reporting: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to enable external security researchers to report vulnerabilities privately without disclosing zero-day bugs in public issues.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable private vulnerability reporting, and use security advisories to fix in a private fork." },
      { id: 'B', text: "Direct reporters to open a draft advisory themselves, and fix on the default branch." },
      { id: 'C', text: "Direct reporters to a `SECURITY.md` mailbox, and track the fix in a private issue." },
      { id: 'D', text: "Enable private vulnerability reporting, and hold the fix in a private mirror repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Private Vulnerability Reporting and use Repository Security Advisories to collaborate on fixes in private forks and request CVEs. Private Vulnerability Reporting allows researchers to submit confidential reports directly to repository maintainers. Maintainers use Repository Security Advisories to discuss findings, collaborate on patches in a temporary private fork, and request a CVE number directly from GitHub as a CNA.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["Security Advisories","Security Advisories","Supply Chain Defense"]
  },
  {
    id: "gh-500-483",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Security Advisories and Private Vulnerability Reporting: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to enable external security researchers to report vulnerabilities privately without disclosing zero-day bugs in public issues.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Direct reporters to open a draft advisory themselves, and fix on the default branch." },
      { id: 'B', text: "Enable private vulnerability reporting, and use security advisories to fix in a private fork." },
      { id: 'C', text: "Enable private vulnerability reporting, and hold the fix in a private mirror repository." },
      { id: 'D', text: "Direct reporters to a `SECURITY.md` mailbox, and track the fix in a private issue." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Private Vulnerability Reporting and use Repository Security Advisories to collaborate on fixes in private forks and request CVEs. Private Vulnerability Reporting allows researchers to submit confidential reports directly to repository maintainers. Maintainers use Repository Security Advisories to discuss findings, collaborate on patches in a temporary private fork, and request a CVE number directly from GitHub as a CNA.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["Security Advisories","Security Advisories","Secret Leak Prevention"]
  },
  {
    id: "gh-500-484",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Security Advisories and Private Vulnerability Reporting: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to enable external security researchers to report vulnerabilities privately without disclosing zero-day bugs in public issues.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Direct reporters to open a draft advisory themselves, and fix on the default branch." },
      { id: 'B', text: "Direct reporters to a `SECURITY.md` mailbox, and track the fix in a private issue." },
      { id: 'C', text: "Enable private vulnerability reporting, and use security advisories to fix in a private fork." },
      { id: 'D', text: "Enable private vulnerability reporting, and hold the fix in a private mirror repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Private Vulnerability Reporting and use Repository Security Advisories to collaborate on fixes in private forks and request CVEs. Private Vulnerability Reporting allows researchers to submit confidential reports directly to repository maintainers. Maintainers use Repository Security Advisories to discuss findings, collaborate on patches in a temporary private fork, and request a CVE number directly from GitHub as a CNA.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["Security Advisories","Security Advisories","Static Analysis Codeql"]
  },
  {
    id: "gh-500-485",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Security Advisories and Private Vulnerability Reporting: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to enable external security researchers to report vulnerabilities privately without disclosing zero-day bugs in public issues.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable private vulnerability reporting, and use security advisories to fix in a private fork." },
      { id: 'B', text: "Direct reporters to open a draft advisory themselves, and fix on the default branch." },
      { id: 'C', text: "Direct reporters to a `SECURITY.md` mailbox, and track the fix in a private issue." },
      { id: 'D', text: "Enable private vulnerability reporting, and hold the fix in a private mirror repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Private Vulnerability Reporting and use Repository Security Advisories to collaborate on fixes in private forks and request CVEs. Private Vulnerability Reporting allows researchers to submit confidential reports directly to repository maintainers. Maintainers use Repository Security Advisories to discuss findings, collaborate on patches in a temporary private fork, and request a CVE number directly from GitHub as a CNA.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["Security Advisories","Security Advisories","Governance And Compliance"]
  },
  {
    id: "gh-500-486",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "SECURITY.md Responsible Disclosure Policies: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to instruct external researchers and customers on how to responsibly disclose security vulnerabilities found in your software.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Add a `CODEOWNERS` entry routing security reports to the response team." },
      { id: 'B', text: "Add an issue template that asks reporters for the vulnerability details." },
      { id: 'C', text: "Add a repository security advisory draft for researchers to comment on." },
      { id: 'D', text: "Add a `SECURITY.md` with the contact route, keys and disclosure policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `SECURITY.md` file in the `.github` repository or project root detailing contact instructions, PGP keys, and disclosure policies. A `SECURITY.md` file provides standardized vulnerability disclosure instructions. Placing it in the repository root or `.github` folder displays a security policy banner across issues and security tabs, directing researchers to secure reporting channels (like Private Vulnerability Reporting).",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md","SECURITY.md","Enterprise Rollout"]
  },
  {
    id: "gh-500-487",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "SECURITY.md Responsible Disclosure Policies: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to instruct external researchers and customers on how to responsibly disclose security vulnerabilities found in your software.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Add a `SECURITY.md` with the contact route, keys and disclosure policy." },
      { id: 'B', text: "Add a `CODEOWNERS` entry routing security reports to the response team." },
      { id: 'C', text: "Add a repository security advisory draft for researchers to comment on." },
      { id: 'D', text: "Add an issue template that asks reporters for the vulnerability details." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `SECURITY.md` file in the `.github` repository or project root detailing contact instructions, PGP keys, and disclosure policies. A `SECURITY.md` file provides standardized vulnerability disclosure instructions. Placing it in the repository root or `.github` folder displays a security policy banner across issues and security tabs, directing researchers to secure reporting channels (like Private Vulnerability Reporting).",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md","SECURITY.md","Supply Chain Defense"]
  },
  {
    id: "gh-500-488",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "SECURITY.md Responsible Disclosure Policies: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to instruct external researchers and customers on how to responsibly disclose security vulnerabilities found in your software.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Add an issue template that asks reporters for the vulnerability details." },
      { id: 'B', text: "Add a `SECURITY.md` with the contact route, keys and disclosure policy." },
      { id: 'C', text: "Add a repository security advisory draft for researchers to comment on." },
      { id: 'D', text: "Add a `CODEOWNERS` entry routing security reports to the response team." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add a `SECURITY.md` file in the `.github` repository or project root detailing contact instructions, PGP keys, and disclosure policies. A `SECURITY.md` file provides standardized vulnerability disclosure instructions. Placing it in the repository root or `.github` folder displays a security policy banner across issues and security tabs, directing researchers to secure reporting channels (like Private Vulnerability Reporting).",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md","SECURITY.md","Secret Leak Prevention"]
  },
  {
    id: "gh-500-489",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "SECURITY.md Responsible Disclosure Policies: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to instruct external researchers and customers on how to responsibly disclose security vulnerabilities found in your software.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Add a `CODEOWNERS` entry routing security reports to the response team." },
      { id: 'B', text: "Add an issue template that asks reporters for the vulnerability details." },
      { id: 'C', text: "Add a repository security advisory draft for researchers to comment on." },
      { id: 'D', text: "Add a `SECURITY.md` with the contact route, keys and disclosure policy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add a `SECURITY.md` file in the `.github` repository or project root detailing contact instructions, PGP keys, and disclosure policies. A `SECURITY.md` file provides standardized vulnerability disclosure instructions. Placing it in the repository root or `.github` folder displays a security policy banner across issues and security tabs, directing researchers to secure reporting channels (like Private Vulnerability Reporting).",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md","SECURITY.md","Static Analysis Codeql"]
  },
  {
    id: "gh-500-490",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "SECURITY.md Responsible Disclosure Policies: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to instruct external researchers and customers on how to responsibly disclose security vulnerabilities found in your software.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Add a `SECURITY.md` with the contact route, keys and disclosure policy." },
      { id: 'B', text: "Add an issue template that asks reporters for the vulnerability details." },
      { id: 'C', text: "Add a `CODEOWNERS` entry routing security reports to the response team." },
      { id: 'D', text: "Add a repository security advisory draft for researchers to comment on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a `SECURITY.md` file in the `.github` repository or project root detailing contact instructions, PGP keys, and disclosure policies. A `SECURITY.md` file provides standardized vulnerability disclosure instructions. Placing it in the repository root or `.github` folder displays a security policy banner across issues and security tabs, directing researchers to secure reporting channels (like Private Vulnerability Reporting).",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md","SECURITY.md","Governance And Compliance"]
  },
  {
    id: "gh-500-491",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GHAS REST and GraphQL APIs for Enterprise Auditing: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to extract all open High and Critical Code Scanning, Dependabot, and Secret Scanning alerts across 500 repos for an executive audit report.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Query the REST and GraphQL APIs with a GitHub App holding the security read scopes." },
      { id: 'B', text: "Query the audit log API with a personal access token holding the admin read scopes." },
      { id: 'C', text: "Export each repository's alerts to CSV from the security overview and combine them." },
      { id: 'D', text: "Subscribe the compliance mailbox to the organization's own security alert digests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub REST and GraphQL APIs using a fine-grained personal access token or GitHub App with security permissions. GitHub provides comprehensive REST and GraphQL APIs for all GHAS features (`/orgs/{org}/code-scanning/alerts`, `/secret-scanning/alerts`, `/dependabot/alerts`). Enterprise teams use these endpoints with GitHub Apps to automate compliance evidence collection, metrics dashboards, and SIEM syncing.",
    referenceUrl: "https://docs.github.com/en/rest/code-security",
    tags: ["GHAS APIs","GHAS APIs","Enterprise Rollout"]
  },
  {
    id: "gh-500-492",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GHAS REST and GraphQL APIs for Enterprise Auditing: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to extract all open High and Critical Code Scanning, Dependabot, and Secret Scanning alerts across 500 repos for an executive audit report.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Query the REST and GraphQL APIs with a GitHub App holding the security read scopes." },
      { id: 'B', text: "Query the audit log API with a personal access token holding the admin read scopes." },
      { id: 'C', text: "Export each repository's alerts to CSV from the security overview and combine them." },
      { id: 'D', text: "Subscribe the compliance mailbox to the organization's own security alert digests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub REST and GraphQL APIs using a fine-grained personal access token or GitHub App with security permissions. GitHub provides comprehensive REST and GraphQL APIs for all GHAS features (`/orgs/{org}/code-scanning/alerts`, `/secret-scanning/alerts`, `/dependabot/alerts`). Enterprise teams use these endpoints with GitHub Apps to automate compliance evidence collection, metrics dashboards, and SIEM syncing.",
    referenceUrl: "https://docs.github.com/en/rest/code-security",
    tags: ["GHAS APIs","GHAS APIs","Supply Chain Defense"]
  },
  {
    id: "gh-500-493",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GHAS REST and GraphQL APIs for Enterprise Auditing: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to extract all open High and Critical Code Scanning, Dependabot, and Secret Scanning alerts across 500 repos for an executive audit report.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Export each repository's alerts to CSV from the security overview and combine them." },
      { id: 'B', text: "Subscribe the compliance mailbox to the organization's own security alert digests." },
      { id: 'C', text: "Query the REST and GraphQL APIs with a GitHub App holding the security read scopes." },
      { id: 'D', text: "Query the audit log API with a personal access token holding the admin read scopes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Query the GitHub REST and GraphQL APIs using a fine-grained personal access token or GitHub App with security permissions. GitHub provides comprehensive REST and GraphQL APIs for all GHAS features (`/orgs/{org}/code-scanning/alerts`, `/secret-scanning/alerts`, `/dependabot/alerts`). Enterprise teams use these endpoints with GitHub Apps to automate compliance evidence collection, metrics dashboards, and SIEM syncing.",
    referenceUrl: "https://docs.github.com/en/rest/code-security",
    tags: ["GHAS APIs","GHAS APIs","Secret Leak Prevention"]
  },
  {
    id: "gh-500-494",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GHAS REST and GraphQL APIs for Enterprise Auditing: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to extract all open High and Critical Code Scanning, Dependabot, and Secret Scanning alerts across 500 repos for an executive audit report.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Query the REST and GraphQL APIs with a GitHub App holding the security read scopes." },
      { id: 'B', text: "Query the audit log API with a personal access token holding the admin read scopes." },
      { id: 'C', text: "Export each repository's alerts to CSV from the security overview and combine them." },
      { id: 'D', text: "Subscribe the compliance mailbox to the organization's own security alert digests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub REST and GraphQL APIs using a fine-grained personal access token or GitHub App with security permissions. GitHub provides comprehensive REST and GraphQL APIs for all GHAS features (`/orgs/{org}/code-scanning/alerts`, `/secret-scanning/alerts`, `/dependabot/alerts`). Enterprise teams use these endpoints with GitHub Apps to automate compliance evidence collection, metrics dashboards, and SIEM syncing.",
    referenceUrl: "https://docs.github.com/en/rest/code-security",
    tags: ["GHAS APIs","GHAS APIs","Static Analysis Codeql"]
  },
  {
    id: "gh-500-495",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GHAS REST and GraphQL APIs for Enterprise Auditing: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to extract all open High and Critical Code Scanning, Dependabot, and Secret Scanning alerts across 500 repos for an executive audit report.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Query the REST and GraphQL APIs with a GitHub App holding the security read scopes." },
      { id: 'B', text: "Query the audit log API with a personal access token holding the admin read scopes." },
      { id: 'C', text: "Export each repository's alerts to CSV from the security overview and combine them." },
      { id: 'D', text: "Subscribe the compliance mailbox to the organization's own security alert digests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Query the GitHub REST and GraphQL APIs using a fine-grained personal access token or GitHub App with security permissions. GitHub provides comprehensive REST and GraphQL APIs for all GHAS features (`/orgs/{org}/code-scanning/alerts`, `/secret-scanning/alerts`, `/dependabot/alerts`). Enterprise teams use these endpoints with GitHub Apps to automate compliance evidence collection, metrics dashboards, and SIEM syncing.",
    referenceUrl: "https://docs.github.com/en/rest/code-security",
    tags: ["GHAS APIs","GHAS APIs","Governance And Compliance"]
  },
  {
    id: "gh-500-496",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise GHAS Licensing and Committer Quotas: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to understand how GitHub Advanced Security licenses are counted and how to optimize license consumption across an enterprise.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days." },
      { id: 'B', text: "Assume licenses are billed based on the total number of employee email accounts in the company." },
      { id: 'C', text: "Believe that an engineer requires five separate licenses if they commit to five different repositories." },
      { id: 'D', text: "Assume read-only repository viewers consume full GHAS committer licenses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days. GHAS licensing is based on active committers. An active committer is any user who has made a commit to a GHAS-enabled private/internal repository within the last 90 days. Each committer consumes only one license regardless of how many repositories or organizations they contribute to.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS Licensing","GHAS Licensing","Enterprise Rollout"]
  },
  {
    id: "gh-500-497",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise GHAS Licensing and Committer Quotas: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to understand how GitHub Advanced Security licenses are counted and how to optimize license consumption across an enterprise.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Assume licenses are billed based on the total number of employee email accounts in the company." },
      { id: 'B', text: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days." },
      { id: 'C', text: "Assume read-only repository viewers consume full GHAS committer licenses." },
      { id: 'D', text: "Believe that an engineer requires five separate licenses if they commit to five different repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days. GHAS licensing is based on active committers. An active committer is any user who has made a commit to a GHAS-enabled private/internal repository within the last 90 days. Each committer consumes only one license regardless of how many repositories or organizations they contribute to.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS Licensing","GHAS Licensing","Supply Chain Defense"]
  },
  {
    id: "gh-500-498",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise GHAS Licensing and Committer Quotas: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to understand how GitHub Advanced Security licenses are counted and how to optimize license consumption across an enterprise.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days." },
      { id: 'B', text: "Assume licenses are billed based on the total number of employee email accounts in the company." },
      { id: 'C', text: "Believe that an engineer requires five separate licenses if they commit to five different repositories." },
      { id: 'D', text: "Assume read-only repository viewers consume full GHAS committer licenses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days. GHAS licensing is based on active committers. An active committer is any user who has made a commit to a GHAS-enabled private/internal repository within the last 90 days. Each committer consumes only one license regardless of how many repositories or organizations they contribute to.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS Licensing","GHAS Licensing","Secret Leak Prevention"]
  },
  {
    id: "gh-500-499",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise GHAS Licensing and Committer Quotas: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to understand how GitHub Advanced Security licenses are counted and how to optimize license consumption across an enterprise.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days." },
      { id: 'B', text: "Assume licenses are billed based on the total number of employee email accounts in the company." },
      { id: 'C', text: "Believe that an engineer requires five separate licenses if they commit to five different repositories." },
      { id: 'D', text: "Assume read-only repository viewers consume full GHAS committer licenses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days. GHAS licensing is based on active committers. An active committer is any user who has made a commit to a GHAS-enabled private/internal repository within the last 90 days. Each committer consumes only one license regardless of how many repositories or organizations they contribute to.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS Licensing","GHAS Licensing","Static Analysis Codeql"]
  },
  {
    id: "gh-500-500",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise GHAS Licensing and Committer Quotas: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to understand how GitHub Advanced Security licenses are counted and how to optimize license consumption across an enterprise.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days." },
      { id: 'B', text: "Assume licenses are billed based on the total number of employee email accounts in the company." },
      { id: 'C', text: "Believe that an engineer requires five separate licenses if they commit to five different repositories." },
      { id: 'D', text: "Assume read-only repository viewers consume full GHAS committer licenses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track 'active committers' who have pushed code to GHAS-enabled private repositories within the last 90 days. GHAS licensing is based on active committers. An active committer is any user who has made a commit to a GHAS-enabled private/internal repository within the last 90 days. Each committer consumes only one license regardless of how many repositories or organizations they contribute to.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS Licensing","GHAS Licensing","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_20;
