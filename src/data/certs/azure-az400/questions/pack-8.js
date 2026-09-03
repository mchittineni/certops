export const AZURE_AZ400_QUESTIONS_8 = [
  {
    id: "azure-az400-176",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Vulnerability Scanning with Microsoft Defender for DevOps",
    scenario: "A software security policy requires continuous, automated vulnerability scanning of open-source libraries and container images integrated directly into pull request workflows in Azure DevOps, alerting developers to critical CVEs before merging.",
    question: "Which integrated security solution fulfills this requirement?",
    options: [
      { id: 'A', text: "Azure Network Watcher packet capturing" },
      { id: 'B', text: "Microsoft Defender for DevOps (or GitHub Advanced Security for Azure DevOps)" },
      { id: 'C', text: "Reviewing CVE lists manually on government advisory websites" },
      { id: 'D', text: "Running Windows Defender locally on developer workstations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Defender for DevOps (and GitHub Advanced Security for Azure DevOps) natively integrates security posture management and dependency analysis into Azure DevOps. It scans repositories for known vulnerabilities, exposed secrets, and infrastructure-as-code misconfigurations directly within pull request checks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-devops-introduction",
    tags: ["Security", "Defender for DevOps", "Vulnerability Scanning", "Compliance"]
  },
  {
    id: "azure-az400-177",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Pipeline Secret Scanning and Prevention",
    scenario: "A security audit discovers that developers occasionally commit hardcoded API keys, connection strings, and private certificates into Azure Repos Git branches.",
    question: "What is the most effective way to prevent secrets from ever entering the codebase?",
    options: [
      { id: 'A', text: "Write an email reminder to all engineers asking them to review commits" },
      { id: 'B', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps" },
      { id: 'C', text: "Rely on weekly static code analysis reports run after deployments" },
      { id: 'D', text: "Add a .gitignore rule containing the word 'password'" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Secret Scanning with Push Protection scans Git pushes in real time. If a commit contains a recognized secret pattern (such as an Azure storage account key or API token), the push is immediately rejected at the server level, preventing the secret from ever entering repository history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/secret-scanning-overview",
    tags: ["Security", "Secret Scanning", "Push Protection", "Azure Repos"]
  },
  {
    id: "azure-az400-178",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "GitHub Advanced Security for Azure DevOps (GHAzDO) Overview",
    scenario: "An enterprise uses Azure Repos and wants native Secret Scanning with Push Protection, CodeQL code scanning, and Dependency Scanning integrated directly into Azure DevOps.",
    question: "Which feature suite provides these GitHub-powered security capabilities natively inside Azure DevOps?",
    options: [
      { id: 'A', text: "GitHub Advanced Security for Azure DevOps (GHAzDO)" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Azure Bastion" },
      { id: 'D', text: "Microsoft Sentinel" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GitHub Advanced Security for Azure DevOps (GHAzDO) brings GitHub's premier security tooling directly into Azure Repos and Azure Pipelines, delivering Secret Scanning, Push Protection, CodeQL static analysis, and Dependency Scanning.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-for-azure-devops",
    tags: ["GHAzDO", "Secret Scanning", "CodeQL", "DevSecOps"]
  },
  {
    id: "azure-az400-179",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Enforcing Push Protection in Azure Repos via GHAzDO",
    scenario: "A developer attempts to execute `git push` containing an active Azure Storage connection string into an Azure Repos Git repository with GHAzDO Push Protection enabled.",
    question: "What happens to the git push command?",
    options: [
      { id: 'A', text: "The developer's Azure subscription is canceled" },
      { id: 'B', text: "The push is rejected at the server with a message identifying the secret type and file location, blocking the commit until the secret is removed or an approved bypass is granted" },
      { id: 'C', text: "The file is encrypted automatically" },
      { id: 'D', text: "The push succeeds and an email is sent to Microsoft Support" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Push Protection intercepts the push transaction before commits are stored on the server. It detects the credential, rejects the push, and outputs remediation instructions directly to the developer's terminal.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-secret-scanning-github-advanced-security#push-protection",
    tags: ["Push Protection", "Secret Scanning", "GHAzDO", "Azure Repos"]
  },
  {
    id: "azure-az400-180",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "CodeQL Analysis Task in Azure Pipelines (AdvancedSecurity-Codeql-Analyze)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "How is CodeQL static application security testing configured inside an Azure Pipelines YAML file for an active GHAzDO repository?",
    options: [
      { id: 'A', text: "Install a third-party bash script from an unverified URL" },
      { id: 'B', text: "CodeQL cannot run in Azure Pipelines" },
      { id: 'C', text: "Run git status in an inline script" },
      { id: 'D', text: "Include AdvancedSecurity-Codeql-Init@1, build the code, and run AdvancedSecurity-Codeql-Analyze@1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GHAzDO provides official pipeline tasks: `AdvancedSecurity-Codeql-Init@1` initializes the database, the build compiles the code, and `AdvancedSecurity-Codeql-Analyze@1` queries the database and publishes findings to the repository Advanced Security tab.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-codeql-analyze-v1",
    tags: ["CodeQL", "GHAzDO", "SAST", "Azure Pipelines"]
  },
  {
    id: "azure-az400-181",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning in GHAzDO: AdvancedSecurity-Dependency-Scanning",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Which Azure Pipelines task analyzes project manifest and lock files (package-lock.json, pom.xml) to detect open-source libraries with known CVE vulnerabilities?",
    options: [
      { id: 'A', text: "Docker@2" },
      { id: 'B', text: "PublishBuildArtifacts@1" },
      { id: 'C', text: "CopyFiles@2" },
      { id: 'D', text: "AdvancedSecurity-Dependency-Scanning@1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `AdvancedSecurity-Dependency-Scanning@1` task scans direct and transitive package dependencies against the GitHub Advisory Database, surfacing vulnerabilities with CVSS severity scores in Azure DevOps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-dependency-scanning-v1",
    tags: ["Dependency Scanning", "GHAzDO", "SCA", "Security"]
  },
  {
    id: "azure-az400-182",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "SonarQube / SonarCloud Integration: Quality Gates in Pipelines",
    scenario: "An organization requires that pull requests must fail if new code introduces technical debt exceeding 5%, duplicate lines exceeding 3%, or any new security hotspots.",
    question: "How is this static code quality enforcement implemented with SonarQube in Azure Pipelines?",
    options: [
      { id: 'A', text: "Run SonarQubePrepare@5, compile code, execute SonarQubeAnalyze@5, and attach SonarQubePublish@5 with the SonarQube Quality Gate build breaker task" },
      { id: 'B', text: "Manually review code lines with a calculator" },
      { id: 'C', text: "Disable unit tests" },
      { id: 'D', text: "Use plain grep commands in bash" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The official SonarQube extension integrates via `SonarQubePrepare`, `SonarQubeAnalyze`, and `SonarQubePublish` tasks. The Quality Gate status task queries the Sonar server and halts the pipeline if defined code standards are breached.",
    referenceUrl: "https://docs.sonarsource.com/sonarqube/latest/devops-platform-integration/azure-devops-integration/",
    tags: ["SonarQube", "Quality Gate", "Static Analysis", "Code Quality"]
  },
  {
    id: "azure-az400-183",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Software Composition Analysis (SCA) Tools: Mend and Snyk",
    scenario: "A software compliance policy mandates checking third-party open-source components for both CVE security flaws and copyleft open-source licenses (GPL/AGPL) that could jeopardize proprietary IP.",
    question: "Which category of DevSecOps security scanning satisfies this dual vulnerability and licensing requirement?",
    options: [
      { id: 'A', text: "Dynamic Application Security Testing (DAST)" },
      { id: 'B', text: "Network Penetration Testing" },
      { id: 'C', text: "Static Application Security Testing (SAST)" },
      { id: 'D', text: "Software Composition Analysis (SCA)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Software Composition Analysis (SCA) tools (like Mend, Snyk, and Dependency Review) scan dependencies to detect known vulnerabilities (CVEs) and evaluate open-source license compliance against corporate intellectual property policies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-for-azure-devops",
    tags: ["SCA", "Licensing", "Supply Chain", "Compliance"]
  },
  {
    id: "azure-az400-184",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Containers",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "A CI pipeline pushes Docker images to Azure Container Registry (ACR). How can security teams automatically scan every pushed container image for OS and package vulnerabilities?",
    options: [
      { id: 'A', text: "Run apt-get upgrade inside developer laptops" },
      { id: 'B', text: "Enable Microsoft Defender for Containers on the Azure subscription containing the ACR registry" },
      { id: 'C', text: "Convert all containers into virtual machines" },
      { id: 'D', text: "Disable container deployment" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Defender for Containers automatically scans images upon push to Azure Container Registry (powered by Qualys and Microsoft vulnerability engines), reporting CVEs, severity levels, and remediation steps in Defender for Cloud.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-introduction",
    tags: ["Defender for Containers", "ACR", "Vulnerability Scanning", "Container Security"]
  },
  {
    id: "azure-az400-185",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Staging Pipelines: OWASP ZAP",
    scenario: "After deploying a web application to a staging environment, an automated pipeline step runs active HTTP penetration attacks (SQLi, XSS probing) against running endpoints.",
    question: "Which security testing methodology does OWASP ZAP represent in this pipeline stage?",
    options: [
      { id: 'A', text: "Static Application Security Testing (SAST)" },
      { id: 'B', text: "Software Composition Analysis (SCA)" },
      { id: 'C', text: "Interactive Application Security Testing (IAST)" },
      { id: 'D', text: "Dynamic Application Security Testing (DAST)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dynamic Application Security Testing (DAST)—such as OWASP ZAP—evaluates applications from the outside while they are actively running, simulating black-box attacker techniques without requiring source code access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/solution-ideas/articles/devsecops-in-azure",
    tags: ["DAST", "OWASP ZAP", "Penetration Testing", "Security"]
  },
  {
    id: "azure-az400-186",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Shift-Left Security Philosophy in DevOps",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the fundamental objective of the 'Shift-Left' security philosophy in modern DevOps pipelines?",
    options: [
      { id: 'A', text: "Delaying security audits until after production release" },
      { id: 'B', text: "Transferring all security responsibilities to external third parties" },
      { id: 'C', text: "Identifying and remediating security defects, misconfigurations, and vulnerabilities as early as possible in the development lifecycle (in IDEs, pre-commit, and PR validation) rather than in production" },
      { id: 'D', text: "Moving all security engineers to night shifts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Shift-Left moves security testing earlier in the software development lifecycle. Addressing issues during code authoring and pull request reviews reduces remediation costs, prevents data breaches, and avoids emergency production hotfixes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/secure/devsecops",
    tags: ["Shift-Left", "DevSecOps", "Culture", "Best Practices"]
  },
  {
    id: "azure-az400-187",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Trivy Container Scanning in Azure Pipelines",
    scenario: "An engineer wants a fast, lightweight open-source scanner in Azure Pipelines to scan Docker container images and fail the build if any Critical severity vulnerabilities are found.",
    question: "Which pipeline task or command pattern accomplishes this with Trivy?",
    options: [
      { id: 'A', text: "Reboot the build agent" },
      { id: 'B', text: "Run `trivy image --exit-code 1 --severity CRITICAL myimage:tag` in a script task" },
      { id: 'C', text: "Run docker push immediately" },
      { id: 'D', text: "Upload image to blob storage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trivy can be executed in a pipeline step with `--exit-code 1 --severity CRITICAL`. If any Critical vulnerabilities are detected in the container image OS or language packages, Trivy returns exit code 1, breaking the build before the image is pushed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/solution-ideas/articles/devsecops-in-azure",
    tags: ["Trivy", "Containers", "Vulnerability Scanning", "CI/CD"]
  },
  {
    id: "azure-az400-188",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Microsoft Security DevOps (MSDO) CLI in Pipelines",
    scenario: "Microsoft provides a unified CLI extension (`Microsoft.Security.DevOps.Cli`) for Azure Pipelines that consolidates multiple static analysis tools (anti-malware, CredScan, template analyzers) into a single task.",
    question: "Which Azure Pipelines task executes this unified Microsoft scanner?",
    options: [
      { id: 'A', text: "PublishBuildArtifacts@1" },
      { id: 'B', text: "CopyFiles@2" },
      { id: 'C', text: "MicrosoftSecurityDevOps@1" },
      { id: 'D', text: "Docker@2" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `MicrosoftSecurityDevOps@1` task executes Microsoft Security DevOps (MSDO) tools—including CredScan, Template Analyzer, and container security scanners—outputting standardized SARIF results to Azure DevOps and Defender for Cloud.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/azure-devops-extension",
    tags: ["MSDO", "Microsoft Security DevOps", "SARIF", "DevSecOps"]
  },
  {
    id: "azure-az400-189",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Security Findings in SARIF Format",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the industry standard specification used by CodeQL, Trivy, and Microsoft Security DevOps to output structured static analysis findings?",
    options: [
      { id: 'A', text: "CSV spreadsheet" },
      { id: 'B', text: "Plain text log" },
      { id: 'C', text: "SARIF (Static Analysis Results Interchange Format)" },
      { id: 'D', text: "HTML web page" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SARIF (OASIS standard) is a standardized JSON-based format for static analysis tools. Azure DevOps, GitHub, and IDEs parse SARIF files to render rich vulnerability alerts with source code line numbers and remediation advice.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/advanced-security-publish-v1",
    tags: ["SARIF", "Standards", "Static Analysis", "Interoperability"]
  },
  {
    id: "azure-az400-190",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Credential Scanning: CredScan in Azure Pipelines",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Which Microsoft-developed static scanning rule engine specifically searches source code for hardcoded passwords, private keys, connection strings, and certificates?",
    options: [
      { id: 'A', text: "Webpack bundler" },
      { id: 'B', text: "Roslyn compiler" },
      { id: 'C', text: "Babel parser" },
      { id: 'D', text: "CredScan (Credential Scanner)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CredScan is Microsoft's internal credential scanning engine, made available via Microsoft Security DevOps. It scans source code and build outputs for hardcoded secrets, database credentials, and cryptographic certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/azure-devops-extension",
    tags: ["CredScan", "Secrets", "Static Analysis", "Security"]
  },
  {
    id: "azure-az400-191",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy in CI/CD Pipelines: az policy state check",
    scenario: "A platform team wants deployment pipelines to verify compliance against organizational Azure Policies and fail the release if target resource groups contain non-compliant resources.",
    question: "Which command or task evaluates compliance state during pipeline execution?",
    options: [
      { id: 'A', text: "Running git commit" },
      { id: 'B', text: "Restarting the virtual machine" },
      { id: 'C', text: "AzureCLI@2 executing `az policy state trigger-scan` and evaluating compliance results" },
      { id: 'D', text: "Checking email" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pipelines can trigger on-demand policy evaluation scans using `az policy state trigger-scan` and query compliance results via the Azure CLI, halting release pipelines if non-compliant configurations are detected.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data#azure-cli",
    tags: ["Azure Policy", "Compliance", "CI/CD", "Governance"]
  },
  {
    id: "azure-az400-192",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Zero Problem and Hardware Security Modules (HSM)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "In enterprise DevSecOps, what is the 'Secret Zero' problem?",
    options: [
      { id: 'A', text: "A bug in binary arithmetic where zero cannot be encrypted" },
      { id: 'B', text: "The first commit in a Git repository" },
      { id: 'C', text: "The fundamental security challenge of how to securely authenticate and bootstrap the initial identity or master credential needed to access all other secrets" },
      { id: 'D', text: "A password that has zero characters" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'Secret Zero' dilemma refers to how an automated pipeline or application securely retrieves initial credentials to access a secrets vault without embedding a hardcoded master secret in source code or configuration files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview",
    tags: ["Secret Zero", "Security Architecture", "Managed Identities", "IAM"]
  },
  {
    id: "azure-az400-193",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Solving Secret Zero: Azure Managed Identities and OIDC",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "How do Azure Managed Identities and Workload Identity Federation eliminate the 'Secret Zero' problem for workloads running on Azure?",
    options: [
      { id: 'A', text: "By sharing passwords over Slack" },
      { id: 'B', text: "By storing passwords in public DNS records" },
      { id: 'C', text: "By providing automatically rotated, platform-managed Entra ID tokens via internal instance metadata endpoints without any human-managed passwords or stored secrets" },
      { id: 'D', text: "By disabling authentication entirely" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Managed Identities allow cloud resources (and CI/CD pipelines via OIDC) to obtain short-lived Microsoft Entra tokens automatically from the Azure fabric, completely eliminating stored credentials and secret rotation overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview",
    tags: ["Managed Identities", "Secret Zero", "Entra ID", "Zero Trust"]
  },
  {
    id: "azure-az400-194",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Signed Commits Verification in Pull Requests",
    scenario: "An audit mandates verifying that all Git commits merged into main were cryptographically signed by verified corporate developers.",
    question: "Which cryptographic technology verifies commit author identity in Git and Azure Repos?",
    options: [
      { id: 'A', text: "MD5 hashing" },
      { id: 'B', text: "GPG (GNU Privacy Guard) or SSH commit signing" },
      { id: 'C', text: "DES encryption" },
      { id: 'D', text: "Base64 encoding" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GPG and SSH commit signing allow developers to cryptographically sign Git commits using private keys. Server-side verification confirms that commits originated from authorized authors and were not modified in transit.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/set-git-repository-permissions",
    tags: ["Commit Signing", "GPG", "Cryptography", "Integrity"]
  },
  {
    id: "azure-az400-195",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open-Source License Risk Management: Copyleft Licenses",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Why do corporate legal teams prohibit linking proprietary commercial enterprise software with libraries licensed under GNU General Public License v3 (GPLv3)?",
    options: [
      { id: 'A', text: "GPLv3 is a strong copyleft license that requires derivative works and statically linked software to disclose their full source code under the same open-source license" },
      { id: 'B', text: "GPLv3 software cannot run on Linux servers" },
      { id: 'C', text: "GPLv3 requires paying royalties to the Free Software Foundation" },
      { id: 'D', text: "GPLv3 code runs slower than MIT licensed code" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Strong copyleft licenses (like GPL and AGPL) contain viral reciprocity terms: if proprietary code links against them, the entire application may legally be required to be open-sourced, posing massive intellectual property risk.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-for-azure-devops",
    tags: ["Copyleft", "GPL", "Licensing", "Compliance"]
  },
  {
    id: "azure-az400-196",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Security Technical Debt and Vulnerability SLAs",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An enterprise establishes a security SLA: Critical CVEs must be patched within 7 days, and High CVEs within 30 days. How should this policy be enforced in pipelines?",
    options: [
      { id: 'A', text: "Disable automated dependency scanning" },
      { id: 'B', text: "Reclassify all Critical vulnerabilities to Low" },
      { id: 'C', text: "Configure automated CI gates with severity break thresholds and track MTTR in Security Overview dashboards" },
      { id: 'D', text: "Ignore vulnerabilities until annual penetration testing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforcing vulnerability SLAs requires automated pipeline gates (breaking builds when unpatched Critical CVEs exceed SLA windows) and central governance dashboards tracking Mean Time to Remediate (MTTR).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/view-alerts",
    tags: ["Vulnerability SLA", "MTTR", "Governance", "DevSecOps"]
  },
  {
    id: "azure-az400-197",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secure Supply Chain: Cosign and Sigstore Container Signing",
    scenario: "A Kubernetes production cluster must reject any container image that has not been cryptographically signed by the corporate release pipeline.",
    question: "Which tool pair signs container images in CI and enforces signature verification in Kubernetes using admission controllers?",
    options: [
      { id: 'A', text: "WinZip" },
      { id: 'B', text: "Docker build and push" },
      { id: 'C', text: "Cosign (Sigstore) and Kyverno / Gatekeeper" },
      { id: 'D', text: "CopyFiles@2" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cosign (part of the Linux Foundation Sigstore project) signs container images using ephemeral OIDC keys. Kubernetes admission controllers (like Kyverno or OPA Gatekeeper) verify cryptographic signatures before allowing pods to start.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/cluster-security",
    tags: ["Cosign", "Sigstore", "Supply Chain", "Kubernetes"]
  },
  {
    id: "azure-az400-198",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Software Bill of Materials (SBOM) Generation: CycloneDX and SPDX",
    scenario: "Federal compliance standards mandate that every production release binary must include a verifiable Software Bill of Materials (SBOM) listing all nested components.",
    question: "Which open-source specification formats are industry standards for machine-readable SBOM metadata?",
    options: [
      { id: 'A', text: "CSV and XML spreadsheets" },
      { id: 'B', text: "Markdown and PDF files" },
      { id: 'C', text: "PNG and JPEG images" },
      { id: 'D', text: "SPDX (Software Package Data Exchange) and CycloneDX" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SPDX and CycloneDX are the two recognized international standards for machine-readable Software Bill of Materials (SBOM), capturing exact package names, versions, license declarations, and cryptographic hashes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/spdx-v1",
    tags: ["SBOM", "SPDX", "CycloneDX", "Compliance"]
  },
  {
    id: "azure-az400-199",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Penetration Testing Policies on Microsoft Azure",
    scenario: "A financial customer wants to perform authorized penetration testing against their web application hosted on Azure App Service.",
    question: "What is Microsoft's policy regarding customer-conducted penetration testing on Azure infrastructure?",
    options: [
      { id: 'A', text: "Customers must pay Microsoft $50,000 for permission to test" },
      { id: 'B', text: "Penetration testing requires a 6-month written notice by certified mail" },
      { id: 'C', text: "Customers are permitted to conduct penetration tests against their own Azure resources without prior notification to Microsoft, provided they comply with the Azure Penetration Testing Rules of Engagement" },
      { id: 'D', text: "Penetration testing is illegal and prohibited on all cloud services" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft permits customers to conduct penetration testing against their own deployed Azure resources without advance notice, provided testing conforms strictly to the Cloud Penetration Testing Rules of Engagement (e.g. no DDoS or shared infrastructure attacks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/pen-testing",
    tags: ["Penetration Testing", "Security Policy", "Rules of Engagement", "Compliance"]
  },
  {
    id: "azure-az400-200",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Continuous Security Compliance Monitoring: CIS Benchmarks",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Which organization publishes standardized, consensus-based cybersecurity configuration benchmarks for hardening operating systems, Kubernetes clusters, and cloud platforms?",
    options: [
      { id: 'A', text: "Universal Postal Union" },
      { id: 'B', text: "World Health Organization (WHO)" },
      { id: 'C', text: "IEEE Electrical Engineers" },
      { id: 'D', text: "Center for Internet Security (CIS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Center for Internet Security (CIS) publishes industry-standard CIS Benchmarks detailing prescriptive configuration baselines for hardening Azure subscriptions, Kubernetes, Linux, and Windows systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/samples/cis-azure-1-4-0",
    tags: ["CIS", "Hardening", "Compliance", "Security Standards"]
  }
];

export default AZURE_AZ400_QUESTIONS_8;
