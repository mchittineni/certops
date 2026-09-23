export const GITHUB_GHAS_QUESTIONS_19 = [
  {
    id: "gh-500-451",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Webhook Notifications and Automation: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Subscribe to `repository_advisory` events and filter them on the published severity field." },
      { id: 'B', text: "Subscribe to `code_scanning_alert` with action `created`, filtering on critical severity." },
      { id: 'C', text: "Poll the code scanning alerts API hourly and open a ticket for each unseen alert ID." },
      { id: 'D', text: "Forward the security alert emails into the ticketing system's own intake address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks","Scanning Webhooks","Enterprise Rollout"]
  },
  {
    id: "gh-500-452",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Webhook Notifications and Automation: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Poll the code scanning alerts API hourly and open a ticket for each unseen alert ID." },
      { id: 'B', text: "Subscribe to `code_scanning_alert` with action `created`, filtering on critical severity." },
      { id: 'C', text: "Forward the security alert emails into the ticketing system's own intake address." },
      { id: 'D', text: "Subscribe to `repository_advisory` events and filter them on the published severity field." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks","Scanning Webhooks","Supply Chain Defense"]
  },
  {
    id: "gh-500-453",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Webhook Notifications and Automation: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Subscribe to `repository_advisory` events and filter them on the published severity field." },
      { id: 'B', text: "Poll the code scanning alerts API hourly and open a ticket for each unseen alert ID." },
      { id: 'C', text: "Forward the security alert emails into the ticketing system's own intake address." },
      { id: 'D', text: "Subscribe to `code_scanning_alert` with action `created`, filtering on critical severity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks","Scanning Webhooks","Secret Leak Prevention"]
  },
  {
    id: "gh-500-454",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Webhook Notifications and Automation: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Subscribe to `code_scanning_alert` with action `created`, filtering on critical severity." },
      { id: 'B', text: "Forward the security alert emails into the ticketing system's own intake address." },
      { id: 'C', text: "Poll the code scanning alerts API hourly and open a ticket for each unseen alert ID." },
      { id: 'D', text: "Subscribe to `repository_advisory` events and filter them on the published severity field." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks","Scanning Webhooks","Static Analysis Codeql"]
  },
  {
    id: "gh-500-455",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Configure and use Code Security",
    title: "Code Scanning Webhook Notifications and Automation: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to automatically create an urgent Jira issue whenever a new Critical severity CodeQL alert is introduced into the default branch.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Subscribe to `code_scanning_alert` with action `created`, filtering on critical severity." },
      { id: 'B', text: "Subscribe to `repository_advisory` events and filter them on the published severity field." },
      { id: 'C', text: "Forward the security alert emails into the ticketing system's own intake address." },
      { id: 'D', text: "Poll the code scanning alerts API hourly and open a ticket for each unseen alert ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Subscribe to the `code_scanning_alert` webhook with action `created` and filter on `alert.rule.severity == 'critical'`. The `code_scanning_alert` webhook event emits notifications when alerts are `created`, `reopened`, `closed_by_user`, or `fixed`. Security teams automate triage pipelines by intercepting these payloads to open Jira tickets, notify Slack channels, or update security dashboards in real time.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#code_scanning_alert",
    tags: ["Scanning Webhooks","Scanning Webhooks","Governance And Compliance"]
  },
  {
    id: "gh-500-456",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Set `upload-database: true` in the workflow, or fetch the database from the REST API." },
      { id: 'B', text: "Set `debug: true` in the workflow, which attaches the analysis logs to the run." },
      { id: 'C', text: "Set `add-snippets: true` on the upload step so that the SARIF carries the source lines." },
      { id: 'D', text: "Publish the SARIF file as a workflow artifact for the researchers to download." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export","Database Export","Enterprise Rollout"]
  },
  {
    id: "gh-500-457",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Set `debug: true` in the workflow, which attaches the analysis logs to the run." },
      { id: 'B', text: "Set `upload-database: true` in the workflow, or fetch the database from the REST API." },
      { id: 'C', text: "Publish the SARIF file as a workflow artifact for the researchers to download." },
      { id: 'D', text: "Set `add-snippets: true` on the upload step so that the SARIF carries the source lines." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export","Database Export","Supply Chain Defense"]
  },
  {
    id: "gh-500-458",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Set `upload-database: true` in the workflow, or fetch the database from the REST API." },
      { id: 'B', text: "Set `add-snippets: true` on the upload step so that the SARIF carries the source lines." },
      { id: 'C', text: "Publish the SARIF file as a workflow artifact for the researchers to download." },
      { id: 'D', text: "Set `debug: true` in the workflow, which attaches the analysis logs to the run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export","Database Export","Secret Leak Prevention"]
  },
  {
    id: "gh-500-459",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Set `upload-database: true` in the workflow, or fetch the database from the REST API." },
      { id: 'B', text: "Set `debug: true` in the workflow, which attaches the analysis logs to the run." },
      { id: 'C', text: "Set `add-snippets: true` on the upload step so that the SARIF carries the source lines." },
      { id: 'D', text: "Publish the SARIF file as a workflow artifact for the researchers to download." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export","Database Export","Static Analysis Codeql"]
  },
  {
    id: "gh-500-460",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CodeQL Code Scanning Database Export and Offline Analysis: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to allow an enterprise internal red team security researcher to run experimental interactive queries locally against a production repository's AST.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Set `debug: true` in the workflow, which attaches the analysis logs to the run." },
      { id: 'B', text: "Set `add-snippets: true` on the upload step so that the SARIF carries the source lines." },
      { id: 'C', text: "Set `upload-database: true` in the workflow, or fetch the database from the REST API." },
      { id: 'D', text: "Publish the SARIF file as a workflow artifact for the researchers to download." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `upload-database: true` in the CodeQL workflow or use the REST API to download the compiled CodeQL database zip file for VS Code. GitHub allows exporting compiled CodeQL databases. By setting `upload-database: true` in the workflow or calling the API (`/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`), security teams download the database into VS Code with the CodeQL extension for offline query development.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#uploading-codeql-databases",
    tags: ["Database Export","Database Export","Governance And Compliance"]
  },
  {
    id: "gh-500-461",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Security Configurations and Global Enablement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Apply the settings through a script that walks the repositories and toggles each one by API." },
      { id: 'B', text: "Apply an organization-level ruleset that requires the security features before any merge is allowed." },
      { id: 'C', text: "Apply a custom enterprise security configuration as the default for current and future repositories." },
      { id: 'D', text: "Apply the GitHub-recommended security configuration, which each team may then opt out of." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations","Security Configurations","Enterprise Rollout"]
  },
  {
    id: "gh-500-462",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Security Configurations and Global Enablement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Apply an organization-level ruleset that requires the security features before any merge is allowed." },
      { id: 'B', text: "Apply the settings through a script that walks the repositories and toggles each one by API." },
      { id: 'C', text: "Apply the GitHub-recommended security configuration, which each team may then opt out of." },
      { id: 'D', text: "Apply a custom enterprise security configuration as the default for current and future repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations","Security Configurations","Supply Chain Defense"]
  },
  {
    id: "gh-500-463",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Security Configurations and Global Enablement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Apply a custom enterprise security configuration as the default for current and future repositories." },
      { id: 'B', text: "Apply the settings through a script that walks the repositories and toggles each one by API." },
      { id: 'C', text: "Apply an organization-level ruleset that requires the security features before any merge is allowed." },
      { id: 'D', text: "Apply the GitHub-recommended security configuration, which each team may then opt out of." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations","Security Configurations","Secret Leak Prevention"]
  },
  {
    id: "gh-500-464",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Security Configurations and Global Enablement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Apply the GitHub-recommended security configuration, which each team may then opt out of." },
      { id: 'B', text: "Apply the settings through a script that walks the repositories and toggles each one by API." },
      { id: 'C', text: "Apply a custom enterprise security configuration as the default for current and future repositories." },
      { id: 'D', text: "Apply an organization-level ruleset that requires the security features before any merge is allowed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations","Security Configurations","Static Analysis Codeql"]
  },
  {
    id: "gh-500-465",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Security Configurations and Global Enablement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to enforce Secret Scanning Push Protection and Dependabot Security Updates automatically on all 1,000 repositories in an enterprise.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Apply a custom enterprise security configuration as the default for current and future repositories." },
      { id: 'B', text: "Apply the settings through a script that walks the repositories and toggles each one by API." },
      { id: 'C', text: "Apply an organization-level ruleset that requires the security features before any merge is allowed." },
      { id: 'D', text: "Apply the GitHub-recommended security configuration, which each team may then opt out of." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create and apply a custom GitHub Enterprise Security Configuration, setting it as the default for all current and future repositories. GitHub Enterprise Security Configurations allow administrators to define bundles of GHAS features (Secret Scanning, Push Protection, Dependabot, CodeQL). Applying a configuration across organizations ensures uniform security posture and automatically enforces settings on newly created repositories.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enforcing-policies-for-code-security-in-your-organization/about-security-configurations",
    tags: ["Security Configurations","Security Configurations","Governance And Compliance"]
  },
  {
    id: "gh-500-466",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Repository Rulesets and Security Status Checks: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Configure classic branch protection on default branches, leaving the admin bypass in place." },
      { id: 'B', text: "Configure a repository ruleset on default branches requiring the security checks, with no bypass." },
      { id: 'C', text: "Configure a required workflow at the organization level and let each repository opt into it later." },
      { id: 'D', text: "Configure a `CODEOWNERS` file for the security files so a reviewer is always requested." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets","Repository Rulesets","Enterprise Rollout"]
  },
  {
    id: "gh-500-467",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Repository Rulesets and Security Status Checks: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Configure classic branch protection on default branches, leaving the admin bypass in place." },
      { id: 'B', text: "Configure a required workflow at the organization level and let each repository opt into it later." },
      { id: 'C', text: "Configure a `CODEOWNERS` file for the security files so a reviewer is always requested." },
      { id: 'D', text: "Configure a repository ruleset on default branches requiring the security checks, with no bypass." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets","Repository Rulesets","Supply Chain Defense"]
  },
  {
    id: "gh-500-468",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Repository Rulesets and Security Status Checks: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Configure a required workflow at the organization level and let each repository opt into it later." },
      { id: 'B', text: "Configure a `CODEOWNERS` file for the security files so a reviewer is always requested." },
      { id: 'C', text: "Configure classic branch protection on default branches, leaving the admin bypass in place." },
      { id: 'D', text: "Configure a repository ruleset on default branches requiring the security checks, with no bypass." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets","Repository Rulesets","Secret Leak Prevention"]
  },
  {
    id: "gh-500-469",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Repository Rulesets and Security Status Checks: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Configure a repository ruleset on default branches requiring the security checks, with no bypass." },
      { id: 'B', text: "Configure classic branch protection on default branches, leaving the admin bypass in place." },
      { id: 'C', text: "Configure a `CODEOWNERS` file for the security files so a reviewer is always requested." },
      { id: 'D', text: "Configure a required workflow at the organization level and let each repository opt into it later." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets","Repository Rulesets","Static Analysis Codeql"]
  },
  {
    id: "gh-500-470",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Repository Rulesets and Security Status Checks: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent anyone, including repository administrators, from bypassing security scans and pushing code directly to protected branches.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Configure a required workflow at the organization level and let each repository opt into it later." },
      { id: 'B', text: "Configure a `CODEOWNERS` file for the security files so a reviewer is always requested." },
      { id: 'C', text: "Configure classic branch protection on default branches, leaving the admin bypass in place." },
      { id: 'D', text: "Configure a repository ruleset on default branches requiring the security checks, with no bypass." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Repository Ruleset targeting default branches, requiring passing security status checks and disabling bypasses for admins. Repository Rulesets replace legacy branch protection with granular, layered policy control. Rulesets can require specific status checks (like CodeQL and Dependency Review) to pass, block force pushes, enforce linear history, and strictly prevent repository admins from bypassing rules.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Repository Rulesets","Repository Rulesets","Governance And Compliance"]
  },
  {
    id: "gh-500-471",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Organization Security Overview Dashboard: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use the security overview, filtered by risk, alert type, MTTR and enablement." },
      { id: 'B', text: "Use the audit log stream, aggregated per repository by the security team itself." },
      { id: 'C', text: "Use the alerts REST API and rebuild the equivalent view in a spreadsheet." },
      { id: 'D', text: "Use each repository's own security tab and total the open alerts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview","Security Overview","Enterprise Rollout"]
  },
  {
    id: "gh-500-472",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Organization Security Overview Dashboard: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use the security overview, filtered by risk, alert type, MTTR and enablement." },
      { id: 'B', text: "Use the alerts REST API and rebuild the equivalent view in a spreadsheet." },
      { id: 'C', text: "Use each repository's own security tab and total the open alerts by hand." },
      { id: 'D', text: "Use the audit log stream, aggregated per repository by the security team itself." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview","Security Overview","Supply Chain Defense"]
  },
  {
    id: "gh-500-473",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Organization Security Overview Dashboard: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use the security overview, filtered by risk, alert type, MTTR and enablement." },
      { id: 'B', text: "Use the audit log stream, aggregated per repository by the security team itself." },
      { id: 'C', text: "Use the alerts REST API and rebuild the equivalent view in a spreadsheet." },
      { id: 'D', text: "Use each repository's own security tab and total the open alerts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview","Security Overview","Secret Leak Prevention"]
  },
  {
    id: "gh-500-474",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Organization Security Overview Dashboard: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use the security overview, filtered by risk, alert type, MTTR and enablement." },
      { id: 'B', text: "Use the audit log stream, aggregated per repository by the security team itself." },
      { id: 'C', text: "Use the alerts REST API and rebuild the equivalent view in a spreadsheet." },
      { id: 'D', text: "Use each repository's own security tab and total the open alerts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview","Security Overview","Static Analysis Codeql"]
  },
  {
    id: "gh-500-475",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Organization Security Overview Dashboard: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to give an enterprise Chief Information Security Officer (CISO) a single-pane-of-glass view into vulnerability posture and MTTR.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use the security overview, filtered by risk, alert type, MTTR and enablement." },
      { id: 'B', text: "Use the audit log stream, aggregated per repository by the security team itself." },
      { id: 'C', text: "Use the alerts REST API and rebuild the equivalent view in a spreadsheet." },
      { id: 'D', text: "Use each repository's own security tab and total the open alerts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the GitHub Security Overview dashboard, filtering by risk level, alert type, MTTR, and repository enablement status. The GitHub Security Overview dashboard aggregates security posture across organizations and enterprises. It provides executive-level visibility into enablement percentages, open alert volumes (Secret Scanning, Dependabot, Code Scanning), severity breakdowns, and Mean Time to Remediate (MTTR) trends.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview","Security Overview","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_19;
