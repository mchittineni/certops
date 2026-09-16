export const GITHUB_GHAS_QUESTIONS_13 = [
  {
    id: "gh-500-301",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Add a custom pattern matching the database connection URI format in use." },
      { id: 'B', text: "Add a custom pattern matching the database hostnames that appear in code." },
      { id: 'C', text: "Rely on the partner patterns, which cover the cloud vendors' own tokens." },
      { id: 'D', text: "Rely on generic secret detection, which scores unstructured credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets","Internal Secrets","Enterprise Rollout"]
  },
  {
    id: "gh-500-302",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Add a custom pattern matching the database connection URI format in use." },
      { id: 'B', text: "Add a custom pattern matching the database hostnames that appear in code." },
      { id: 'C', text: "Rely on the partner patterns, which cover the cloud vendors' own tokens." },
      { id: 'D', text: "Rely on generic secret detection, which scores unstructured credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets","Internal Secrets","Supply Chain Defense"]
  },
  {
    id: "gh-500-303",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Rely on generic secret detection, which scores unstructured credentials." },
      { id: 'B', text: "Add a custom pattern matching the database hostnames that appear in code." },
      { id: 'C', text: "Add a custom pattern matching the database connection URI format in use." },
      { id: 'D', text: "Rely on the partner patterns, which cover the cloud vendors' own tokens." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets","Internal Secrets","Secret Leak Prevention"]
  },
  {
    id: "gh-500-304",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Add a custom pattern matching the database hostnames that appear in code." },
      { id: 'B', text: "Add a custom pattern matching the database connection URI format in use." },
      { id: 'C', text: "Rely on generic secret detection, which scores unstructured credentials." },
      { id: 'D', text: "Rely on the partner patterns, which cover the cloud vendors' own tokens." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets","Internal Secrets","Static Analysis Codeql"]
  },
  {
    id: "gh-500-305",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Non-Provider Secret Pattern Scanning: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to detect hardcoded internal JDBC database connection strings containing embedded passwords across enterprise repositories.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Add a custom pattern matching the database connection URI format in use." },
      { id: 'B', text: "Add a custom pattern matching the database hostnames that appear in code." },
      { id: 'C', text: "Rely on the partner patterns, which cover the cloud vendors' own tokens." },
      { id: 'D', text: "Rely on generic secret detection, which scores unstructured credentials." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure custom secret patterns targeting database connection URI formats (`jdbc:postgresql://user:pass@host/db`). Partner patterns only cover tokens issued by integrated service providers. For enterprise internal credentials (e.g., database connection URIs, internal Kerberos tokens, proprietary JWT signing keys), platform teams implement custom regular expressions with precise delimiter matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Internal Secrets","Internal Secrets","Governance And Compliance"]
  },
  {
    id: "gh-500-306",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Forward the administrators' security notification emails into the SIEM intake." },
      { id: 'B', text: "Stream the enterprise audit log to S3, Event Hubs or the SIEM's own endpoint." },
      { id: 'C', text: "Poll the audit log REST API on a schedule and post each page to the SIEM." },
      { id: 'D', text: "Export the audit log to CSV monthly and load the file into the SIEM by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming","Audit Streaming","Enterprise Rollout"]
  },
  {
    id: "gh-500-307",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Poll the audit log REST API on a schedule and post each page to the SIEM." },
      { id: 'B', text: "Stream the enterprise audit log to S3, Event Hubs or the SIEM's own endpoint." },
      { id: 'C', text: "Export the audit log to CSV monthly and load the file into the SIEM by hand." },
      { id: 'D', text: "Forward the administrators' security notification emails into the SIEM intake." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming","Audit Streaming","Supply Chain Defense"]
  },
  {
    id: "gh-500-308",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Forward the administrators' security notification emails into the SIEM intake." },
      { id: 'B', text: "Stream the enterprise audit log to S3, Event Hubs or the SIEM's own endpoint." },
      { id: 'C', text: "Poll the audit log REST API on a schedule and post each page to the SIEM." },
      { id: 'D', text: "Export the audit log to CSV monthly and load the file into the SIEM by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming","Audit Streaming","Secret Leak Prevention"]
  },
  {
    id: "gh-500-309",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Stream the enterprise audit log to S3, Event Hubs or the SIEM's own endpoint." },
      { id: 'B', text: "Export the audit log to CSV monthly and load the file into the SIEM by hand." },
      { id: 'C', text: "Poll the audit log REST API on a schedule and post each page to the SIEM." },
      { id: 'D', text: "Forward the administrators' security notification emails into the SIEM intake." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming","Audit Streaming","Static Analysis Codeql"]
  },
  {
    id: "gh-500-310",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Audit Log Streaming for Enterprise Secret Governance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to stream all enterprise GitHub secret scanning events and push protection bypasses directly into an external Splunk SIEM.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Stream the enterprise audit log to S3, Event Hubs or the SIEM's own endpoint." },
      { id: 'B', text: "Export the audit log to CSV monthly and load the file into the SIEM by hand." },
      { id: 'C', text: "Poll the audit log REST API on a schedule and post each page to the SIEM." },
      { id: 'D', text: "Forward the administrators' security notification emails into the SIEM intake." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure GitHub Enterprise Audit Log Streaming to an Amazon S3, Azure Event Hubs, or Datadog destination. GitHub Enterprise Audit Log Streaming exports high-volume security telemetry continuously. Secret scanning events, alert state changes, and push protection bypasses stream immediately to cloud storage or SIEMs (Splunk, Datadog), satisfying enterprise compliance requirements.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Streaming","Audit Streaming","Governance And Compliance"]
  },
  {
    id: "gh-500-311",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable the dependency graph everywhere, so manifests and lock files are parsed automatically." },
      { id: 'B', text: "Submit the resolved dependency set from each build through the dependency submission API." },
      { id: 'C', text: "Generate an SBOM per repository on a schedule and store the output as a release asset." },
      { id: 'D', text: "Enable Dependabot alerts alone, which infer the dependency set from the advisories that are raised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph","Dependency Graph","Enterprise Rollout"]
  },
  {
    id: "gh-500-312",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable the dependency graph everywhere, so manifests and lock files are parsed automatically." },
      { id: 'B', text: "Submit the resolved dependency set from each build through the dependency submission API." },
      { id: 'C', text: "Generate an SBOM per repository on a schedule and store the output as a release asset." },
      { id: 'D', text: "Enable Dependabot alerts alone, which infer the dependency set from the advisories that are raised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph","Dependency Graph","Supply Chain Defense"]
  },
  {
    id: "gh-500-313",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable the dependency graph everywhere, so manifests and lock files are parsed automatically." },
      { id: 'B', text: "Submit the resolved dependency set from each build through the dependency submission API." },
      { id: 'C', text: "Generate an SBOM per repository on a schedule and store the output as a release asset." },
      { id: 'D', text: "Enable Dependabot alerts alone, which infer the dependency set from the advisories that are raised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph","Dependency Graph","Secret Leak Prevention"]
  },
  {
    id: "gh-500-314",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Generate an SBOM per repository on a schedule and store the output as a release asset." },
      { id: 'B', text: "Enable Dependabot alerts alone, which infer the dependency set from the advisories that are raised." },
      { id: 'C', text: "Enable the dependency graph everywhere, so manifests and lock files are parsed automatically." },
      { id: 'D', text: "Submit the resolved dependency set from each build through the dependency submission API." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph","Dependency Graph","Static Analysis Codeql"]
  },
  {
    id: "gh-500-315",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph and Package Ecosystem Visibility: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to maintain complete, real-time visibility into all direct and transitive open-source dependencies used across 500 applications.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable the dependency graph everywhere, so manifests and lock files are parsed automatically." },
      { id: 'B', text: "Generate an SBOM per repository on a schedule and store the output as a release asset." },
      { id: 'C', text: "Enable Dependabot alerts alone, which infer the dependency set from the advisories that are raised." },
      { id: 'D', text: "Submit the resolved dependency set from each build through the dependency submission API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub Dependency Graph across all repositories, automatically parsing manifest and lock files (package-lock.json, pom.xml). The GitHub Dependency Graph analyzes manifest and lock files (e.g., `package.json`, `pom.xml`, `requirements.txt`, `Gemfile.lock`) to maintain an accurate inventory of direct and transitive dependencies. It serves as the foundation for Dependabot alerts and SBOM exports.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph",
    tags: ["Dependency Graph","Dependency Graph","Governance And Compliance"]
  },
  {
    id: "gh-500-316",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Review Dependabot alerts by CVSS severity score and EPSS exploit-prediction percentage." },
      { id: 'B', text: "Ignore all dependency alerts until a security breach is publicly reported." },
      { id: 'C', text: "Disable Dependabot alerts entirely to reduce the volume of notification email." },
      { id: 'D', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts","Dependabot Alerts","Enterprise Rollout"]
  },
  {
    id: "gh-500-317",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Disable Dependabot alerts entirely to reduce the volume of notification email." },
      { id: 'B', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'C', text: "Review Dependabot alerts by CVSS severity score and EPSS exploit-prediction percentage." },
      { id: 'D', text: "Ignore all dependency alerts until a security breach is publicly reported." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts","Dependabot Alerts","Supply Chain Defense"]
  },
  {
    id: "gh-500-318",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Disable Dependabot alerts entirely to reduce the volume of notification email." },
      { id: 'B', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'C', text: "Review Dependabot alerts by CVSS severity score and EPSS exploit-prediction percentage." },
      { id: 'D', text: "Ignore all dependency alerts until a security breach is publicly reported." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts","Dependabot Alerts","Secret Leak Prevention"]
  },
  {
    id: "gh-500-319",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Review Dependabot alerts by CVSS severity score and EPSS exploit-prediction percentage." },
      { id: 'B', text: "Disable Dependabot alerts entirely to reduce the volume of notification email." },
      { id: 'C', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." },
      { id: 'D', text: "Ignore all dependency alerts until a security breach is publicly reported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts","Dependabot Alerts","Static Analysis Codeql"]
  },
  {
    id: "gh-500-320",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Alerts and Vulnerability Scoring: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prioritize patching critical open-source package vulnerabilities that have active, known in-the-wild exploits.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Review Dependabot alerts by CVSS severity score and EPSS exploit-prediction percentage." },
      { id: 'B', text: "Ignore all dependency alerts until a security breach is publicly reported." },
      { id: 'C', text: "Disable Dependabot alerts entirely to reduce the volume of notification email." },
      { id: 'D', text: "Treat all 500 open dependency alerts with identical urgency regardless of CVSS severity or exploit status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review Dependabot alerts prioritized by CVSS severity score and Exploit Prediction Scoring System (EPSS) percentage. Dependabot correlates the Dependency Graph against the GitHub Advisory Database. Alerts detail the CVE, vulnerable version ranges, CVSS base score, and EPSS (Exploit Prediction Scoring System) probability, enabling teams to remediate actively exploited vulnerabilities first.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Dependabot Alerts","Dependabot Alerts","Governance And Compliance"]
  },
  {
    id: "gh-500-321",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Enable Dependabot version updates on a weekly schedule for every one of the manifests." },
      { id: 'B', text: "Enable Dependabot security updates, which open PRs to the minimum fixed version." },
      { id: 'C', text: "Enable the dependency graph alone, so the alerts list what needs updating." },
      { id: 'D', text: "Enable grouped updates that move each package to its latest major release." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates","Security Updates","Enterprise Rollout"]
  },
  {
    id: "gh-500-322",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable Dependabot security updates, which open PRs to the minimum fixed version." },
      { id: 'B', text: "Enable Dependabot version updates on a weekly schedule for every one of the manifests." },
      { id: 'C', text: "Enable grouped updates that move each package to its latest major release." },
      { id: 'D', text: "Enable the dependency graph alone, so the alerts list what needs updating." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates","Security Updates","Supply Chain Defense"]
  },
  {
    id: "gh-500-323",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Enable Dependabot security updates, which open PRs to the minimum fixed version." },
      { id: 'B', text: "Enable Dependabot version updates on a weekly schedule for every one of the manifests." },
      { id: 'C', text: "Enable grouped updates that move each package to its latest major release." },
      { id: 'D', text: "Enable the dependency graph alone, so the alerts list what needs updating." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates","Security Updates","Secret Leak Prevention"]
  },
  {
    id: "gh-500-324",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Enable Dependabot version updates on a weekly schedule for every one of the manifests." },
      { id: 'B', text: "Enable Dependabot security updates, which open PRs to the minimum fixed version." },
      { id: 'C', text: "Enable the dependency graph alone, so the alerts list what needs updating." },
      { id: 'D', text: "Enable grouped updates that move each package to its latest major release." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates","Security Updates","Static Analysis Codeql"]
  },
  {
    id: "gh-500-325",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates: Automated Patch PRs: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to ensure vulnerable dependencies are patched with minimal risk of introducing breaking application changes.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Enable Dependabot security updates, which open PRs to the minimum fixed version." },
      { id: 'B', text: "Enable Dependabot version updates on a weekly schedule for every one of the manifests." },
      { id: 'C', text: "Enable grouped updates that move each package to its latest major release." },
      { id: 'D', text: "Enable the dependency graph alone, so the alerts list what needs updating." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependabot Security Updates to automatically generate pull requests updating vulnerable packages to the minimum secure version. Dependabot Security Updates generate automated pull requests as soon as a vulnerability is detected. Crucially, Dependabot calculates the minimal necessary version bump that resolves the CVE (e.g., upgrading from 1.2.3 to 1.2.4 rather than 2.0.0), minimizing regression risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Security Updates","Security Updates","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_13;
