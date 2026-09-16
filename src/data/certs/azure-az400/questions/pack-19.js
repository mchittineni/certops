export const AZURE_AZ400_QUESTIONS_19 = [
  {
    id: "azure-az400-451",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Install the Azure Policy add-on for AKS and assign the restricted Pod Security Standards initiative." },
      { id: 'B', text: "Install Gatekeeper directly and write a ConstraintTemplate that audits the running pods weekly." },
      { id: 'C', text: "Install the AKS deployment safeguards in warning mode so violations are reported to the cluster." },
      { id: 'D', text: "Enable Microsoft Defender for Containers and act on the pod hardening recommendations it raises." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance","Azure Policy AKS","Dr Failover"]
  },
  {
    id: "azure-az400-452",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Install the Azure Policy add-on for AKS and assign the restricted Pod Security Standards initiative." },
      { id: 'B', text: "Enable Microsoft Defender for Containers and act on the pod hardening recommendations it raises." },
      { id: 'C', text: "Install Gatekeeper directly and write a ConstraintTemplate that audits the running pods weekly." },
      { id: 'D', text: "Install the AKS deployment safeguards in warning mode so violations are reported to the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance","Azure Policy AKS","High Load Scale"]
  },
  {
    id: "azure-az400-453",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Containers and act on the pod hardening recommendations it raises." },
      { id: 'B', text: "Install the AKS deployment safeguards in warning mode so violations are reported to the cluster." },
      { id: 'C', text: "Install Gatekeeper directly and write a ConstraintTemplate that audits the running pods weekly." },
      { id: 'D', text: "Install the Azure Policy add-on for AKS and assign the restricted Pod Security Standards initiative." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance","Azure Policy AKS","Security Compliance"]
  },
  {
    id: "azure-az400-454",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Install the Azure Policy add-on for AKS and assign the restricted Pod Security Standards initiative." },
      { id: 'B', text: "Enable Microsoft Defender for Containers and act on the pod hardening recommendations it raises." },
      { id: 'C', text: "Install Gatekeeper directly and write a ConstraintTemplate that audits the running pods weekly." },
      { id: 'D', text: "Install the AKS deployment safeguards in warning mode so violations are reported to the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance","Azure Policy AKS","Hybrid Migration"]
  },
  {
    id: "azure-az400-455",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Install the Azure Policy add-on for AKS and assign the restricted Pod Security Standards initiative." },
      { id: 'B', text: "Enable Microsoft Defender for Containers and act on the pod hardening recommendations it raises." },
      { id: 'C', text: "Install Gatekeeper directly and write a ConstraintTemplate that audits the running pods weekly." },
      { id: 'D', text: "Install the AKS deployment safeguards in warning mode so violations are reported to the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance","Azure Policy AKS","Resilience Failure"]
  },
  {
    id: "azure-az400-456",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Register an app registration with a client secret and read the vault with the Key Vault REST API at startup." },
      { id: 'B', text: "Mount the vault as an Azure Files share and read the password from `appsettings.Production.json` on boot." },
      { id: 'C', text: "Add a release-pipeline variable group linked to the vault, so the values are baked in at deployment time." },
      { id: 'D', text: "Enable a system-assigned managed identity, grant it Key Vault access, and use `@Microsoft.KeyVault(...)` App Settings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration","Key Vault References","Dr Failover"]
  },
  {
    id: "azure-az400-457",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable a system-assigned managed identity, grant it Key Vault access, and use `@Microsoft.KeyVault(...)` App Settings." },
      { id: 'B', text: "Mount the vault as an Azure Files share and read the password from `appsettings.Production.json` on boot." },
      { id: 'C', text: "Register an app registration with a client secret and read the vault with the Key Vault REST API at startup." },
      { id: 'D', text: "Add a release-pipeline variable group linked to the vault, so the values are baked in at deployment time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration","Key Vault References","High Load Scale"]
  },
  {
    id: "azure-az400-458",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable a system-assigned managed identity, grant it Key Vault access, and use `@Microsoft.KeyVault(...)` App Settings." },
      { id: 'B', text: "Mount the vault as an Azure Files share and read the password from `appsettings.Production.json` on boot." },
      { id: 'C', text: "Register an app registration with a client secret and read the vault with the Key Vault REST API at startup." },
      { id: 'D', text: "Add a release-pipeline variable group linked to the vault, so the values are baked in at deployment time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration","Key Vault References","Security Compliance"]
  },
  {
    id: "azure-az400-459",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Enable a system-assigned managed identity, grant it Key Vault access, and use `@Microsoft.KeyVault(...)` App Settings." },
      { id: 'B', text: "Register an app registration with a client secret and read the vault with the Key Vault REST API at startup." },
      { id: 'C', text: "Add a release-pipeline variable group linked to the vault, so the values are baked in at deployment time." },
      { id: 'D', text: "Mount the vault as an Azure Files share and read the password from `appsettings.Production.json` on boot." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration","Key Vault References","Hybrid Migration"]
  },
  {
    id: "azure-az400-460",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable a system-assigned managed identity, grant it Key Vault access, and use `@Microsoft.KeyVault(...)` App Settings." },
      { id: 'B', text: "Mount the vault as an Azure Files share and read the password from `appsettings.Production.json` on boot." },
      { id: 'C', text: "Register an app registration with a client secret and read the vault with the Key Vault REST API at startup." },
      { id: 'D', text: "Add a release-pipeline variable group linked to the vault, so the values are baked in at deployment time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration","Key Vault References","Resilience Failure"]
  },
  {
    id: "azure-az400-461",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add an upstream source in Azure Artifacts and review each package's license as it is promoted." },
      { id: 'B', text: "Add a dependency vulnerability scan that fails the build on high-severity advisories." },
      { id: 'C', text: "Add a policy that requires a legal reviewer on any pull request touching the lock file." },
      { id: 'D', text: "Add a license compliance scan to the build that fails on disallowed license types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance","License Compliance","Dr Failover"]
  },
  {
    id: "azure-az400-462",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Add an upstream source in Azure Artifacts and review each package's license as it is promoted." },
      { id: 'B', text: "Add a license compliance scan to the build that fails on disallowed license types." },
      { id: 'C', text: "Add a dependency vulnerability scan that fails the build on high-severity advisories." },
      { id: 'D', text: "Add a policy that requires a legal reviewer on any pull request touching the lock file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance","License Compliance","High Load Scale"]
  },
  {
    id: "azure-az400-463",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Add a license compliance scan to the build that fails on disallowed license types." },
      { id: 'B', text: "Add a policy that requires a legal reviewer on any pull request touching the lock file." },
      { id: 'C', text: "Add a dependency vulnerability scan that fails the build on high-severity advisories." },
      { id: 'D', text: "Add an upstream source in Azure Artifacts and review each package's license as it is promoted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance","License Compliance","Security Compliance"]
  },
  {
    id: "azure-az400-464",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add an upstream source in Azure Artifacts and review each package's license as it is promoted." },
      { id: 'B', text: "Add a policy that requires a legal reviewer on any pull request touching the lock file." },
      { id: 'C', text: "Add a license compliance scan to the build that fails on disallowed license types." },
      { id: 'D', text: "Add a dependency vulnerability scan that fails the build on high-severity advisories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance","License Compliance","Hybrid Migration"]
  },
  {
    id: "azure-az400-465",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a policy that requires a legal reviewer on any pull request touching the lock file." },
      { id: 'B', text: "Add a license compliance scan to the build that fails on disallowed license types." },
      { id: 'C', text: "Add an upstream source in Azure Artifacts and review each package's license as it is promoted." },
      { id: 'D', text: "Add a dependency vulnerability scan that fails the build on high-severity advisories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance","License Compliance","Resilience Failure"]
  },
  {
    id: "azure-az400-466",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add a DAST scan such as OWASP ZAP to the release pipeline, pointed at the staging URL." },
      { id: 'B', text: "Add a SAST scan of the source and a secret scan of the repository to the build pipeline." },
      { id: 'C', text: "Add a container image scan of the deployed tag to the release pipeline before the swap." },
      { id: 'D', text: "Add a web application firewall in detection mode in front of the staging slot and read its log." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST","OWASP ZAP DAST","Dr Failover"]
  },
  {
    id: "azure-az400-467",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Add a DAST scan such as OWASP ZAP to the release pipeline, pointed at the staging URL." },
      { id: 'B', text: "Add a SAST scan of the source and a secret scan of the repository to the build pipeline." },
      { id: 'C', text: "Add a container image scan of the deployed tag to the release pipeline before the swap." },
      { id: 'D', text: "Add a web application firewall in detection mode in front of the staging slot and read its log." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST","OWASP ZAP DAST","High Load Scale"]
  },
  {
    id: "azure-az400-468",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Add a web application firewall in detection mode in front of the staging slot and read its log." },
      { id: 'B', text: "Add a container image scan of the deployed tag to the release pipeline before the swap." },
      { id: 'C', text: "Add a SAST scan of the source and a secret scan of the repository to the build pipeline." },
      { id: 'D', text: "Add a DAST scan such as OWASP ZAP to the release pipeline, pointed at the staging URL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST","OWASP ZAP DAST","Security Compliance"]
  },
  {
    id: "azure-az400-469",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a DAST scan such as OWASP ZAP to the release pipeline, pointed at the staging URL." },
      { id: 'B', text: "Add a SAST scan of the source and a secret scan of the repository to the build pipeline." },
      { id: 'C', text: "Add a container image scan of the deployed tag to the release pipeline before the swap." },
      { id: 'D', text: "Add a web application firewall in detection mode in front of the staging slot and read its log." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST","OWASP ZAP DAST","Hybrid Migration"]
  },
  {
    id: "azure-az400-470",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a web application firewall in detection mode in front of the staging slot and read its log." },
      { id: 'B', text: "Add a DAST scan such as OWASP ZAP to the release pipeline, pointed at the staging URL." },
      { id: 'C', text: "Add a container image scan of the deployed tag to the release pipeline before the swap." },
      { id: 'D', text: "Add a SAST scan of the source and a secret scan of the repository to the build pipeline." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST","OWASP ZAP DAST","Resilience Failure"]
  },
  {
    id: "azure-az400-471",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Instrument the services with the Application Insights SDK so requests and dependencies correlate." },
      { id: 'B', text: "Enable VM insights on each tier and read the guest performance counters it collects per host." },
      { id: 'C', text: "Enable diagnostic settings on each resource and join the log tables on their time stamps." },
      { id: 'D', text: "Enable the Application Insights availability tests and read the failure counts they record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights","Application Insights","Dr Failover"]
  },
  {
    id: "azure-az400-472",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable the Application Insights availability tests and read the failure counts they record." },
      { id: 'B', text: "Instrument the services with the Application Insights SDK so requests and dependencies correlate." },
      { id: 'C', text: "Enable diagnostic settings on each resource and join the log tables on their time stamps." },
      { id: 'D', text: "Enable VM insights on each tier and read the guest performance counters it collects per host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights","Application Insights","High Load Scale"]
  },
  {
    id: "azure-az400-473",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Instrument the services with the Application Insights SDK so requests and dependencies correlate." },
      { id: 'B', text: "Enable VM insights on each tier and read the guest performance counters it collects per host." },
      { id: 'C', text: "Enable diagnostic settings on each resource and join the log tables on their time stamps." },
      { id: 'D', text: "Enable the Application Insights availability tests and read the failure counts they record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights","Application Insights","Security Compliance"]
  },
  {
    id: "azure-az400-474",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Enable diagnostic settings on each resource and join the log tables on their time stamps." },
      { id: 'B', text: "Enable VM insights on each tier and read the guest performance counters it collects per host." },
      { id: 'C', text: "Enable the Application Insights availability tests and read the failure counts they record." },
      { id: 'D', text: "Instrument the services with the Application Insights SDK so requests and dependencies correlate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights","Application Insights","Hybrid Migration"]
  },
  {
    id: "azure-az400-475",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Instrument the services with the Application Insights SDK so requests and dependencies correlate." },
      { id: 'B', text: "Enable VM insights on each tier and read the guest performance counters it collects per host." },
      { id: 'C', text: "Enable diagnostic settings on each resource and join the log tables on their time stamps." },
      { id: 'D', text: "Enable the Application Insights availability tests and read the failure counts they record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights","Application Insights","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_19;
