export const GITHUB_GHAS_QUESTIONS_13 = [
  {
    id: "gh-500-301",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Internal Secrets to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Custom regex rules detecting database connection URIs, private RSA keys, and JWT signing tokens is under consideration.",
    options: [
      { id: 'A', text: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`)." },
      { id: 'B', text: "Wait for database administrators to detect unauthorized logins from unauthorized IP addresses." },
      { id: 'C', text: "Store database connection strings in public repository README files." },
      { id: 'D', text: "Rely on partner patterns which only detect public cloud vendor tokens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets", "Internal Secrets", "Enterprise Rollout"]
  },
  {
    id: "gh-500-302",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Internal Secrets to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Custom regex rules detecting database connection URIs, private RSA keys, and JWT signing tokens is under consideration.",
    options: [
      { id: 'A', text: "Store database connection strings in public repository README files." },
      { id: 'B', text: "Wait for database administrators to detect unauthorized logins from unauthorized IP addresses." },
      { id: 'C', text: "Rely on partner patterns which only detect public cloud vendor tokens." },
      { id: 'D', text: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets", "Internal Secrets", "Supply Chain Defense"]
  },
  {
    id: "gh-500-303",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Internal Secrets to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Custom regex rules detecting database connection URIs, private RSA keys, and JWT signing tokens is under consideration.",
    options: [
      { id: 'A', text: "Rely on partner patterns which only detect public cloud vendor tokens." },
      { id: 'B', text: "Wait for database administrators to detect unauthorized logins from unauthorized IP addresses." },
      { id: 'C', text: "Store database connection strings in public repository README files." },
      { id: 'D', text: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets", "Internal Secrets", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-304",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Internal Secrets to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Custom regex rules detecting database connection URIs, private RSA keys, and JWT signing tokens is under consideration.",
    options: [
      { id: 'A', text: "Rely on partner patterns which only detect public cloud vendor tokens." },
      { id: 'B', text: "Store database connection strings in public repository README files." },
      { id: 'C', text: "Wait for database administrators to detect unauthorized logins from unauthorized IP addresses." },
      { id: 'D', text: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets", "Internal Secrets", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-305",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Internal Secrets to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Custom regex rules detecting database connection URIs, private RSA keys, and JWT signing tokens is under consideration.",
    options: [
      { id: 'A', text: "Store database connection strings in public repository README files." },
      { id: 'B', text: "Wait for database administrators to detect unauthorized logins from unauthorized IP addresses." },
      { id: 'C', text: "Rely on partner patterns which only detect public cloud vendor tokens." },
      { id: 'D', text: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets", "Internal Secrets", "Governance And Compliance"]
  },
  {
    id: "gh-500-306",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Audit Streaming to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Exporting secret scanning events and push bypasses to Splunk or Amazon S3 in real time is under consideration.",
    options: [
      { id: 'A', text: "Manually download CSV audit logs once a month and upload them to Splunk via web forms." },
      { id: 'B', text: "Rely on email notifications sent to individual repository administrators." },
      { id: 'C', text: "Disable audit log export to save external SIEM ingestion costs." },
      { id: 'D', text: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming", "Audit Streaming", "Enterprise Rollout"]
  },
  {
    id: "gh-500-307",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Audit Streaming to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Exporting secret scanning events and push bypasses to Splunk or Amazon S3 in real time is under consideration.",
    options: [
      { id: 'A', text: "Manually download CSV audit logs once a month and upload them to Splunk via web forms." },
      { id: 'B', text: "Disable audit log export to save external SIEM ingestion costs." },
      { id: 'C', text: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination." },
      { id: 'D', text: "Rely on email notifications sent to individual repository administrators." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming", "Audit Streaming", "Supply Chain Defense"]
  },
  {
    id: "gh-500-308",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Audit Streaming to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Exporting secret scanning events and push bypasses to Splunk or Amazon S3 in real time is under consideration.",
    options: [
      { id: 'A', text: "Manually download CSV audit logs once a month and upload them to Splunk via web forms." },
      { id: 'B', text: "Rely on email notifications sent to individual repository administrators." },
      { id: 'C', text: "Disable audit log export to save external SIEM ingestion costs." },
      { id: 'D', text: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming", "Audit Streaming", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-309",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Audit Streaming to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Exporting secret scanning events and push bypasses to Splunk or Amazon S3 in real time is under consideration.",
    options: [
      { id: 'A', text: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination." },
      { id: 'B', text: "Disable audit log export to save external SIEM ingestion costs." },
      { id: 'C', text: "Manually download CSV audit logs once a month and upload them to Splunk via web forms." },
      { id: 'D', text: "Rely on email notifications sent to individual repository administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming", "Audit Streaming", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-310",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Audit Streaming to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Exporting secret scanning events and push bypasses to Splunk or Amazon S3 in real time is under consideration.",
    options: [
      { id: 'A', text: "Manually download CSV audit logs once a month and upload them to Splunk via web forms." },
      { id: 'B', text: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination." },
      { id: 'C', text: "Rely on email notifications sent to individual repository administrators." },
      { id: 'D', text: "Disable audit log export to save external SIEM ingestion costs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming", "Audit Streaming", "Governance And Compliance"]
  },
  {
    id: "gh-500-311",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Dependency Graph to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Real-time mapping of direct and transitive dependencies across supported package managers is under consideration.",
    options: [
      { id: 'A', text: "Disable dependency tracking to prevent discovering vulnerable packages." },
      { id: 'B', text: "Compile all third-party open-source code into obfuscated binary blobs with no version tracking." },
      { id: 'C', text: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml)." },
      { id: 'D', text: "Instruct developers to manually update an Excel spreadsheet listing every dependency their software imports." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph", "Dependency Graph", "Enterprise Rollout"]
  },
  {
    id: "gh-500-312",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Dependency Graph to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Real-time mapping of direct and transitive dependencies across supported package managers is under consideration.",
    options: [
      { id: 'A', text: "Disable dependency tracking to prevent discovering vulnerable packages." },
      { id: 'B', text: "Compile all third-party open-source code into obfuscated binary blobs with no version tracking." },
      { id: 'C', text: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml)." },
      { id: 'D', text: "Instruct developers to manually update an Excel spreadsheet listing every dependency their software imports." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph", "Dependency Graph", "Supply Chain Defense"]
  },
  {
    id: "gh-500-313",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Dependency Graph to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Real-time mapping of direct and transitive dependencies across supported package managers is under consideration.",
    options: [
      { id: 'A', text: "Disable dependency tracking to prevent discovering vulnerable packages." },
      { id: 'B', text: "Instruct developers to manually update an Excel spreadsheet listing every dependency their software imports." },
      { id: 'C', text: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml)." },
      { id: 'D', text: "Compile all third-party open-source code into obfuscated binary blobs with no version tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph", "Dependency Graph", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-314",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Dependency Graph to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Real-time mapping of direct and transitive dependencies across supported package managers is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to manually update an Excel spreadsheet listing every dependency their software imports." },
      { id: 'B', text: "Disable dependency tracking to prevent discovering vulnerable packages." },
      { id: 'C', text: "Compile all third-party open-source code into obfuscated binary blobs with no version tracking." },
      { id: 'D', text: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph", "Dependency Graph", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-315",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Dependency Graph to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Real-time mapping of direct and transitive dependencies across supported package managers is under consideration.",
    options: [
      { id: 'A', text: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml)." },
      { id: 'B', text: "Compile all third-party open-source code into obfuscated binary blobs with no version tracking." },
      { id: 'C', text: "Instruct developers to manually update an Excel spreadsheet listing every dependency their software imports." },
      { id: 'D', text: "Disable dependency tracking to prevent discovering vulnerable packages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph", "Dependency Graph", "Governance And Compliance"]
  },
  {
    id: "gh-500-316",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Dependabot Alerts to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Advisory database notifications, CVSS severity, and Exploit Prediction Scoring System (EPSS) is under consideration.",
    options: [
      { id: 'A', text: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage." },
      { id: 'B', text: "Disable Dependabot alerts to reduce notification email volume." },
      { id: 'C', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'D', text: "Ignore all dependency alerts until a security breach is publicly reported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts", "Dependabot Alerts", "Enterprise Rollout"]
  },
  {
    id: "gh-500-317",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Dependabot Alerts to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Advisory database notifications, CVSS severity, and Exploit Prediction Scoring System (EPSS) is under consideration.",
    options: [
      { id: 'A', text: "Ignore all dependency alerts until a security breach is publicly reported." },
      { id: 'B', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'C', text: "Disable Dependabot alerts to reduce notification email volume." },
      { id: 'D', text: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts", "Dependabot Alerts", "Supply Chain Defense"]
  },
  {
    id: "gh-500-318",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Dependabot Alerts to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Advisory database notifications, CVSS severity, and Exploit Prediction Scoring System (EPSS) is under consideration.",
    options: [
      { id: 'A', text: "Ignore all dependency alerts until a security breach is publicly reported." },
      { id: 'B', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'C', text: "Disable Dependabot alerts to reduce notification email volume." },
      { id: 'D', text: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts", "Dependabot Alerts", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-319",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Dependabot Alerts to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Advisory database notifications, CVSS severity, and Exploit Prediction Scoring System (EPSS) is under consideration.",
    options: [
      { id: 'A', text: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage." },
      { id: 'B', text: "Ignore all dependency alerts until a security breach is publicly reported." },
      { id: 'C', text: "Disable Dependabot alerts to reduce notification email volume." },
      { id: 'D', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts", "Dependabot Alerts", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-320",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Dependabot Alerts to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Advisory database notifications, CVSS severity, and Exploit Prediction Scoring System (EPSS) is under consideration.",
    options: [
      { id: 'A', text: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage." },
      { id: 'B', text: "Disable Dependabot alerts to reduce notification email volume." },
      { id: 'C', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'D', text: "Ignore all dependency alerts until a security breach is publicly reported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts", "Dependabot Alerts", "Governance And Compliance"]
  },
  {
    id: "gh-500-321",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Security Updates to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automating minimal-bump pull requests to resolve vulnerable dependencies automatically is under consideration.",
    options: [
      { id: 'A', text: "Force update all dependencies to the latest major alpha release without testing compatibility." },
      { id: 'B', text: "Instruct developers to ignore security updates to maintain package version stability." },
      { id: 'C', text: "Wait for developers to perform annual manual framework upgrades across all services." },
      { id: 'D', text: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates", "Security Updates", "Enterprise Rollout"]
  },
  {
    id: "gh-500-322",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Security Updates to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automating minimal-bump pull requests to resolve vulnerable dependencies automatically is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version." },
      { id: 'B', text: "Wait for developers to perform annual manual framework upgrades across all services." },
      { id: 'C', text: "Force update all dependencies to the latest major alpha release without testing compatibility." },
      { id: 'D', text: "Instruct developers to ignore security updates to maintain package version stability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates", "Security Updates", "Supply Chain Defense"]
  },
  {
    id: "gh-500-323",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Security Updates to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automating minimal-bump pull requests to resolve vulnerable dependencies automatically is under consideration.",
    options: [
      { id: 'A', text: "Force update all dependencies to the latest major alpha release without testing compatibility." },
      { id: 'B', text: "Wait for developers to perform annual manual framework upgrades across all services." },
      { id: 'C', text: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version." },
      { id: 'D', text: "Instruct developers to ignore security updates to maintain package version stability." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates", "Security Updates", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-324",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Security Updates to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automating minimal-bump pull requests to resolve vulnerable dependencies automatically is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to ignore security updates to maintain package version stability." },
      { id: 'B', text: "Force update all dependencies to the latest major alpha release without testing compatibility." },
      { id: 'C', text: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version." },
      { id: 'D', text: "Wait for developers to perform annual manual framework upgrades across all services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates", "Security Updates", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-325",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Security Updates to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automating minimal-bump pull requests to resolve vulnerable dependencies automatically is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version." },
      { id: 'B', text: "Wait for developers to perform annual manual framework upgrades across all services." },
      { id: 'C', text: "Instruct developers to ignore security updates to maintain package version stability." },
      { id: 'D', text: "Force update all dependencies to the latest major alpha release without testing compatibility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates", "Security Updates", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_13;
