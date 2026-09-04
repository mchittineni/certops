export const GITHUB_GHAS_QUESTIONS_19 = [
  {
    id: "gh-500-451",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Webhook Notifications and Automation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Scanning Webhooks to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Triggering incident tickets and compliance workflows via code_scanning_alert webhook payloads is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`." },
      { id: 'B', text: "Instruct security engineers to manually check the GitHub website every hour for new alerts." },
      { id: 'C', text: "Rely on developers to voluntarily create Jira tickets when their pull requests fail." },
      { id: 'D', text: "Disable webhook integrations to reduce server network load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks", "Scanning Webhooks", "Enterprise Rollout"]
  },
  {
    id: "gh-500-452",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Webhook Notifications and Automation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Scanning Webhooks to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Triggering incident tickets and compliance workflows via code_scanning_alert webhook payloads is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`." },
      { id: 'B', text: "Instruct security engineers to manually check the GitHub website every hour for new alerts." },
      { id: 'C', text: "Rely on developers to voluntarily create Jira tickets when their pull requests fail." },
      { id: 'D', text: "Disable webhook integrations to reduce server network load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks", "Scanning Webhooks", "Supply Chain Defense"]
  },
  {
    id: "gh-500-453",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Webhook Notifications and Automation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Scanning Webhooks to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Triggering incident tickets and compliance workflows via code_scanning_alert webhook payloads is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`." },
      { id: 'B', text: "Instruct security engineers to manually check the GitHub website every hour for new alerts." },
      { id: 'C', text: "Rely on developers to voluntarily create Jira tickets when their pull requests fail." },
      { id: 'D', text: "Disable webhook integrations to reduce server network load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks", "Scanning Webhooks", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-454",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Webhook Notifications and Automation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Scanning Webhooks to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Triggering incident tickets and compliance workflows via code_scanning_alert webhook payloads is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`." },
      { id: 'B', text: "Instruct security engineers to manually check the GitHub website every hour for new alerts." },
      { id: 'C', text: "Rely on developers to voluntarily create Jira tickets when their pull requests fail." },
      { id: 'D', text: "Disable webhook integrations to reduce server network load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks", "Scanning Webhooks", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-455",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Webhook Notifications and Automation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Scanning Webhooks to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Triggering incident tickets and compliance workflows via code_scanning_alert webhook payloads is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`." },
      { id: 'B', text: "Instruct security engineers to manually check the GitHub website every hour for new alerts." },
      { id: 'C', text: "Rely on developers to voluntarily create Jira tickets when their pull requests fail." },
      { id: 'D', text: "Disable webhook integrations to reduce server network load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks", "Scanning Webhooks", "Governance And Compliance"]
  },
  {
    id: "gh-500-456",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Database Export to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Exporting CodeQL databases from GitHub Actions for offline security researcher investigation in VS Code is under consideration.",
    options: [
      { id: 'A', text: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code." },
      { id: 'B', text: "Give external researchers direct SSH access to production build runner servers." },
      { id: 'C', text: "Force researchers to guess AST node structures without access to the CodeQL database." },
      { id: 'D', text: "Decompile production container images to extract source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export", "Database Export", "Enterprise Rollout"]
  },
  {
    id: "gh-500-457",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Database Export to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Exporting CodeQL databases from GitHub Actions for offline security researcher investigation in VS Code is under consideration.",
    options: [
      { id: 'A', text: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code." },
      { id: 'B', text: "Give external researchers direct SSH access to production build runner servers." },
      { id: 'C', text: "Force researchers to guess AST node structures without access to the CodeQL database." },
      { id: 'D', text: "Decompile production container images to extract source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export", "Database Export", "Supply Chain Defense"]
  },
  {
    id: "gh-500-458",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Database Export to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Exporting CodeQL databases from GitHub Actions for offline security researcher investigation in VS Code is under consideration.",
    options: [
      { id: 'A', text: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code." },
      { id: 'B', text: "Give external researchers direct SSH access to production build runner servers." },
      { id: 'C', text: "Force researchers to guess AST node structures without access to the CodeQL database." },
      { id: 'D', text: "Decompile production container images to extract source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export", "Database Export", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-459",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Database Export to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Exporting CodeQL databases from GitHub Actions for offline security researcher investigation in VS Code is under consideration.",
    options: [
      { id: 'A', text: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code." },
      { id: 'B', text: "Give external researchers direct SSH access to production build runner servers." },
      { id: 'C', text: "Force researchers to guess AST node structures without access to the CodeQL database." },
      { id: 'D', text: "Decompile production container images to extract source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export", "Database Export", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-460",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Database Export to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Exporting CodeQL databases from GitHub Actions for offline security researcher investigation in VS Code is under consideration.",
    options: [
      { id: 'A', text: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code." },
      { id: 'B', text: "Give external researchers direct SSH access to production build runner servers." },
      { id: 'C', text: "Force researchers to guess AST node structures without access to the CodeQL database." },
      { id: 'D', text: "Decompile production container images to extract source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export", "Database Export", "Governance And Compliance"]
  },
  {
    id: "gh-500-461",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Security Configurations and Global Enablement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Security Configurations to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Deploying standardized GHAS settings (Secret Scanning, Dependabot, CodeQL) across all repositories is under consideration.",
    options: [
      { id: 'A', text: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories." },
      { id: 'B', text: "Navigate to the settings tab of each of the 1,000 repositories manually to toggle individual checkboxes." },
      { id: 'C', text: "Send an email to repository owners asking them to enable security features voluntarily." },
      { id: 'D', text: "Disable central governance and allow every team to choose their own security posture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations", "Security Configurations", "Enterprise Rollout"]
  },
  {
    id: "gh-500-462",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Security Configurations and Global Enablement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Security Configurations to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Deploying standardized GHAS settings (Secret Scanning, Dependabot, CodeQL) across all repositories is under consideration.",
    options: [
      { id: 'A', text: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories." },
      { id: 'B', text: "Navigate to the settings tab of each of the 1,000 repositories manually to toggle individual checkboxes." },
      { id: 'C', text: "Send an email to repository owners asking them to enable security features voluntarily." },
      { id: 'D', text: "Disable central governance and allow every team to choose their own security posture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations", "Security Configurations", "Supply Chain Defense"]
  },
  {
    id: "gh-500-463",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Security Configurations and Global Enablement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Security Configurations to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Deploying standardized GHAS settings (Secret Scanning, Dependabot, CodeQL) across all repositories is under consideration.",
    options: [
      { id: 'A', text: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories." },
      { id: 'B', text: "Navigate to the settings tab of each of the 1,000 repositories manually to toggle individual checkboxes." },
      { id: 'C', text: "Send an email to repository owners asking them to enable security features voluntarily." },
      { id: 'D', text: "Disable central governance and allow every team to choose their own security posture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations", "Security Configurations", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-464",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Security Configurations and Global Enablement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Security Configurations to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Deploying standardized GHAS settings (Secret Scanning, Dependabot, CodeQL) across all repositories is under consideration.",
    options: [
      { id: 'A', text: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories." },
      { id: 'B', text: "Navigate to the settings tab of each of the 1,000 repositories manually to toggle individual checkboxes." },
      { id: 'C', text: "Send an email to repository owners asking them to enable security features voluntarily." },
      { id: 'D', text: "Disable central governance and allow every team to choose their own security posture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations", "Security Configurations", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-465",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Security Configurations and Global Enablement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Security Configurations to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Deploying standardized GHAS settings (Secret Scanning, Dependabot, CodeQL) across all repositories is under consideration.",
    options: [
      { id: 'A', text: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories." },
      { id: 'B', text: "Navigate to the settings tab of each of the 1,000 repositories manually to toggle individual checkboxes." },
      { id: 'C', text: "Send an email to repository owners asking them to enable security features voluntarily." },
      { id: 'D', text: "Disable central governance and allow every team to choose their own security posture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations", "Security Configurations", "Governance And Compliance"]
  },
  {
    id: "gh-500-466",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Rulesets and Security Status Checks: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Repository Rulesets to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Enforcing branch rulesets requiring passing CodeQL and Dependency Review status checks is under consideration.",
    options: [
      { id: 'A', text: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins." },
      { id: 'B', text: "Rely on informal developer agreements not to push unreviewed code to the main branch." },
      { id: 'C', text: "Grant full administrative bypass permissions to all engineers in the company." },
      { id: 'D', text: "Disable branch protection to speed up release delivery deadlines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets", "Repository Rulesets", "Enterprise Rollout"]
  },
  {
    id: "gh-500-467",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Rulesets and Security Status Checks: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Repository Rulesets to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Enforcing branch rulesets requiring passing CodeQL and Dependency Review status checks is under consideration.",
    options: [
      { id: 'A', text: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins." },
      { id: 'B', text: "Rely on informal developer agreements not to push unreviewed code to the main branch." },
      { id: 'C', text: "Grant full administrative bypass permissions to all engineers in the company." },
      { id: 'D', text: "Disable branch protection to speed up release delivery deadlines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets", "Repository Rulesets", "Supply Chain Defense"]
  },
  {
    id: "gh-500-468",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Rulesets and Security Status Checks: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Repository Rulesets to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Enforcing branch rulesets requiring passing CodeQL and Dependency Review status checks is under consideration.",
    options: [
      { id: 'A', text: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins." },
      { id: 'B', text: "Rely on informal developer agreements not to push unreviewed code to the main branch." },
      { id: 'C', text: "Grant full administrative bypass permissions to all engineers in the company." },
      { id: 'D', text: "Disable branch protection to speed up release delivery deadlines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets", "Repository Rulesets", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-469",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Rulesets and Security Status Checks: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Repository Rulesets to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Enforcing branch rulesets requiring passing CodeQL and Dependency Review status checks is under consideration.",
    options: [
      { id: 'A', text: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins." },
      { id: 'B', text: "Rely on informal developer agreements not to push unreviewed code to the main branch." },
      { id: 'C', text: "Grant full administrative bypass permissions to all engineers in the company." },
      { id: 'D', text: "Disable branch protection to speed up release delivery deadlines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets", "Repository Rulesets", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-470",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Repository Rulesets and Security Status Checks: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Repository Rulesets to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Enforcing branch rulesets requiring passing CodeQL and Dependency Review status checks is under consideration.",
    options: [
      { id: 'A', text: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins." },
      { id: 'B', text: "Rely on informal developer agreements not to push unreviewed code to the main branch." },
      { id: 'C', text: "Grant full administrative bypass permissions to all engineers in the company." },
      { id: 'D', text: "Disable branch protection to speed up release delivery deadlines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets", "Repository Rulesets", "Governance And Compliance"]
  },
  {
    id: "gh-500-471",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Organization Security Overview Dashboard: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Security Overview to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Centralized posture visualization, risk metrics, and Mean Time to Remediate (MTTR) tracking is under consideration.",
    options: [
      { id: 'A', text: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status." },
      { id: 'B', text: "Compile manual security spreadsheets by emailing 50 engineering managers every week." },
      { id: 'C', text: "Ignore security posture metrics and assume software is secure." },
      { id: 'D', text: "Log into each repository individually to count open alerts on a notepad." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Security Overview", "Enterprise Rollout"]
  },
  {
    id: "gh-500-472",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Organization Security Overview Dashboard: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Security Overview to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Centralized posture visualization, risk metrics, and Mean Time to Remediate (MTTR) tracking is under consideration.",
    options: [
      { id: 'A', text: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status." },
      { id: 'B', text: "Compile manual security spreadsheets by emailing 50 engineering managers every week." },
      { id: 'C', text: "Ignore security posture metrics and assume software is secure." },
      { id: 'D', text: "Log into each repository individually to count open alerts on a notepad." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Security Overview", "Supply Chain Defense"]
  },
  {
    id: "gh-500-473",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Organization Security Overview Dashboard: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Security Overview to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Centralized posture visualization, risk metrics, and Mean Time to Remediate (MTTR) tracking is under consideration.",
    options: [
      { id: 'A', text: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status." },
      { id: 'B', text: "Compile manual security spreadsheets by emailing 50 engineering managers every week." },
      { id: 'C', text: "Ignore security posture metrics and assume software is secure." },
      { id: 'D', text: "Log into each repository individually to count open alerts on a notepad." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Security Overview", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-474",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Organization Security Overview Dashboard: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Security Overview to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Centralized posture visualization, risk metrics, and Mean Time to Remediate (MTTR) tracking is under consideration.",
    options: [
      { id: 'A', text: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status." },
      { id: 'B', text: "Compile manual security spreadsheets by emailing 50 engineering managers every week." },
      { id: 'C', text: "Ignore security posture metrics and assume software is secure." },
      { id: 'D', text: "Log into each repository individually to count open alerts on a notepad." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Security Overview", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-475",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Organization Security Overview Dashboard: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Security Overview to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Centralized posture visualization, risk metrics, and Mean Time to Remediate (MTTR) tracking is under consideration.",
    options: [
      { id: 'A', text: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status." },
      { id: 'B', text: "Compile manual security spreadsheets by emailing 50 engineering managers every week." },
      { id: 'C', text: "Ignore security posture metrics and assume software is secure." },
      { id: 'D', text: "Log into each repository individually to count open alerts on a notepad." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Security Overview", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_19;
