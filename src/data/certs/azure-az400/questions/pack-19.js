export const AZURE_AZ400_QUESTIONS_19 = [
  {
    id: "azure-az400-451",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Kubernetes Governance to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Enforcing pod security and compliance standards on AKS using Azure Policy is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative." },
      { id: 'B', text: "Disable Kubernetes admission controllers to prevent deployment errors." },
      { id: 'C', text: "Ask developers to voluntarily verify that their manifests do not use root." },
      { id: 'D', text: "Inspect pod manifests manually by running kubectl get pods once a week." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance", "Azure Policy AKS", "Dr Failover"]
  },
  {
    id: "azure-az400-452",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Kubernetes Governance to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Enforcing pod security and compliance standards on AKS using Azure Policy is under consideration.",
    options: [
      { id: 'A', text: "Inspect pod manifests manually by running kubectl get pods once a week." },
      { id: 'B', text: "Disable Kubernetes admission controllers to prevent deployment errors." },
      { id: 'C', text: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative." },
      { id: 'D', text: "Ask developers to voluntarily verify that their manifests do not use root." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance", "Azure Policy AKS", "High Load Scale"]
  },
  {
    id: "azure-az400-453",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Kubernetes Governance to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Enforcing pod security and compliance standards on AKS using Azure Policy is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes admission controllers to prevent deployment errors." },
      { id: 'B', text: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative." },
      { id: 'C', text: "Inspect pod manifests manually by running kubectl get pods once a week." },
      { id: 'D', text: "Ask developers to voluntarily verify that their manifests do not use root." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance", "Azure Policy AKS", "Security Compliance"]
  },
  {
    id: "azure-az400-454",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Kubernetes Governance to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Enforcing pod security and compliance standards on AKS using Azure Policy is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative." },
      { id: 'B', text: "Disable Kubernetes admission controllers to prevent deployment errors." },
      { id: 'C', text: "Inspect pod manifests manually by running kubectl get pods once a week." },
      { id: 'D', text: "Ask developers to voluntarily verify that their manifests do not use root." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance", "Azure Policy AKS", "Hybrid Migration"]
  },
  {
    id: "azure-az400-455",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Policy for Kubernetes and Cluster Governance: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Kubernetes Governance to enforce a compliance rule that no pods in an Azure Kubernetes Service (AKS) cluster can run as root or mount the host filesystem.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Enforcing pod security and compliance standards on AKS using Azure Policy is under consideration.",
    options: [
      { id: 'A', text: "Inspect pod manifests manually by running kubectl get pods once a week." },
      { id: 'B', text: "Ask developers to voluntarily verify that their manifests do not use root." },
      { id: 'C', text: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative." },
      { id: 'D', text: "Disable Kubernetes admission controllers to prevent deployment errors." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Azure Policy add-on for AKS and assign the baseline or restricted Pod Security Standards built-in initiative. The Azure Policy add-on for AKS extends Gatekeeper (Open Policy Agent) to enforce cluster governance. By assigning built-in policy initiatives, non-compliant pod creation requests (e.g., root execution, hostPath mounts) are blocked at the admission controller stage, ensuring continuous compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-for-kubernetes",
    tags: ["Kubernetes Governance", "Azure Policy AKS", "Resilience Failure"]
  },
  {
    id: "azure-az400-456",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Secret Integration to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Referencing Azure Key Vault secrets directly in App Service configuration without code changes is under consideration.",
    options: [
      { id: 'A', text: "Store the database password in a public GitHub repository." },
      { id: 'B', text: "Hardcode the database password in the web.config or appsettings.json file." },
      { id: 'C', text: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings." },
      { id: 'D', text: "Pass the password in plain text via URL query parameters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration", "Key Vault References", "Dr Failover"]
  },
  {
    id: "azure-az400-457",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Secret Integration to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Referencing Azure Key Vault secrets directly in App Service configuration without code changes is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the database password in the web.config or appsettings.json file." },
      { id: 'B', text: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings." },
      { id: 'C', text: "Store the database password in a public GitHub repository." },
      { id: 'D', text: "Pass the password in plain text via URL query parameters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration", "Key Vault References", "High Load Scale"]
  },
  {
    id: "azure-az400-458",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Secret Integration to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Referencing Azure Key Vault secrets directly in App Service configuration without code changes is under consideration.",
    options: [
      { id: 'A', text: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings." },
      { id: 'B', text: "Pass the password in plain text via URL query parameters." },
      { id: 'C', text: "Hardcode the database password in the web.config or appsettings.json file." },
      { id: 'D', text: "Store the database password in a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration", "Key Vault References", "Security Compliance"]
  },
  {
    id: "azure-az400-459",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Secret Integration to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Referencing Azure Key Vault secrets directly in App Service configuration without code changes is under consideration.",
    options: [
      { id: 'A', text: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings." },
      { id: 'B', text: "Store the database password in a public GitHub repository." },
      { id: 'C', text: "Hardcode the database password in the web.config or appsettings.json file." },
      { id: 'D', text: "Pass the password in plain text via URL query parameters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration", "Key Vault References", "Hybrid Migration"]
  },
  {
    id: "azure-az400-460",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Managing Sensitive Data with Azure Key Vault References: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Secret Integration to allow an Azure App Service application to read database passwords stored in Azure Key Vault without writing custom Key Vault SDK code.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Referencing Azure Key Vault secrets directly in App Service configuration without code changes is under consideration.",
    options: [
      { id: 'A', text: "Store the database password in a public GitHub repository." },
      { id: 'B', text: "Pass the password in plain text via URL query parameters." },
      { id: 'C', text: "Hardcode the database password in the web.config or appsettings.json file." },
      { id: 'D', text: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable System-Assigned Managed Identity on the App Service, grant Key Vault access, and use Key Vault reference syntax (`@Microsoft.KeyVault(...)`) in App Settings. Azure Key Vault references allow App Service and Azure Functions to resolve secrets from Key Vault transparently. Using the syntax `@Microsoft.KeyVault(SecretUri=...)` in App Settings resolves the secret value at runtime using the app's Managed Identity, keeping secrets out of code and configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["Secret Integration", "Key Vault References", "Resilience Failure"]
  },
  {
    id: "azure-az400-461",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates License Governance to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Auditing and enforcing open-source license compliance (e.g., blocking AGPL) in CI is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to read the legal license text of every transitive dependency." },
      { id: 'B', text: "Assume all packages published on npm and NuGet are in the public domain." },
      { id: 'C', text: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types." },
      { id: 'D', text: "Allow all open-source licenses without legal review." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance", "License Compliance", "Dr Failover"]
  },
  {
    id: "azure-az400-462",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates License Governance to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Auditing and enforcing open-source license compliance (e.g., blocking AGPL) in CI is under consideration.",
    options: [
      { id: 'A', text: "Rely on developers to read the legal license text of every transitive dependency." },
      { id: 'B', text: "Assume all packages published on npm and NuGet are in the public domain." },
      { id: 'C', text: "Allow all open-source licenses without legal review." },
      { id: 'D', text: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance", "License Compliance", "High Load Scale"]
  },
  {
    id: "azure-az400-463",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates License Governance to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Auditing and enforcing open-source license compliance (e.g., blocking AGPL) in CI is under consideration.",
    options: [
      { id: 'A', text: "Assume all packages published on npm and NuGet are in the public domain." },
      { id: 'B', text: "Allow all open-source licenses without legal review." },
      { id: 'C', text: "Rely on developers to read the legal license text of every transitive dependency." },
      { id: 'D', text: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance", "License Compliance", "Security Compliance"]
  },
  {
    id: "azure-az400-464",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates License Governance to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Auditing and enforcing open-source license compliance (e.g., blocking AGPL) in CI is under consideration.",
    options: [
      { id: 'A', text: "Allow all open-source licenses without legal review." },
      { id: 'B', text: "Rely on developers to read the legal license text of every transitive dependency." },
      { id: 'C', text: "Assume all packages published on npm and NuGet are in the public domain." },
      { id: 'D', text: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance", "License Compliance", "Hybrid Migration"]
  },
  {
    id: "azure-az400-465",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Open Source License Compliance and Blacklisting: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates License Governance to prevent developers from introducing open-source libraries with restrictive copyleft licenses (such as GPL or AGPL) into proprietary commercial software.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Auditing and enforcing open-source license compliance (e.g., blocking AGPL) in CI is under consideration.",
    options: [
      { id: 'A', text: "Assume all packages published on npm and NuGet are in the public domain." },
      { id: 'B', text: "Allow all open-source licenses without legal review." },
      { id: 'C', text: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types." },
      { id: 'D', text: "Rely on developers to read the legal license text of every transitive dependency." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate an automated license compliance scanner (e.g., Snyk, Mend, WhiteSource) into the build pipeline to fail builds on blacklisted license types. Open-source packages carry diverse license obligations. Using Software Composition Analysis (SCA) tooling in CI pipelines audits declared and transitive package licenses against corporate legal policies, flagging or blocking builds that introduce incompatible copyleft licenses (e.g., AGPL-3.0).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["License Governance", "License Compliance", "Resilience Failure"]
  },
  {
    id: "azure-az400-466",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates DAST to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Running automated vulnerability scanning against running test environments with OWASP ZAP is under consideration.",
    options: [
      { id: 'A', text: "Assume web applications deployed behind firewalls cannot have runtime vulnerabilities." },
      { id: 'B', text: "Perform dynamic security testing directly on the live production environment during peak business hours." },
      { id: 'C', text: "Rely exclusively on static code analysis of raw source files." },
      { id: 'D', text: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST", "OWASP ZAP DAST", "Dr Failover"]
  },
  {
    id: "azure-az400-467",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates DAST to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Running automated vulnerability scanning against running test environments with OWASP ZAP is under consideration.",
    options: [
      { id: 'A', text: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL." },
      { id: 'B', text: "Rely exclusively on static code analysis of raw source files." },
      { id: 'C', text: "Assume web applications deployed behind firewalls cannot have runtime vulnerabilities." },
      { id: 'D', text: "Perform dynamic security testing directly on the live production environment during peak business hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST", "OWASP ZAP DAST", "High Load Scale"]
  },
  {
    id: "azure-az400-468",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates DAST to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Running automated vulnerability scanning against running test environments with OWASP ZAP is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on static code analysis of raw source files." },
      { id: 'B', text: "Assume web applications deployed behind firewalls cannot have runtime vulnerabilities." },
      { id: 'C', text: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL." },
      { id: 'D', text: "Perform dynamic security testing directly on the live production environment during peak business hours." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST", "OWASP ZAP DAST", "Security Compliance"]
  },
  {
    id: "azure-az400-469",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates DAST to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Running automated vulnerability scanning against running test environments with OWASP ZAP is under consideration.",
    options: [
      { id: 'A', text: "Perform dynamic security testing directly on the live production environment during peak business hours." },
      { id: 'B', text: "Assume web applications deployed behind firewalls cannot have runtime vulnerabilities." },
      { id: 'C', text: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL." },
      { id: 'D', text: "Rely exclusively on static code analysis of raw source files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST", "OWASP ZAP DAST", "Hybrid Migration"]
  },
  {
    id: "azure-az400-470",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dynamic Application Security Testing (DAST) in Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates DAST to test a deployed web application in a staging environment for runtime security vulnerabilities (such as SQL injection, XSS, and broken auth).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Running automated vulnerability scanning against running test environments with OWASP ZAP is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on static code analysis of raw source files." },
      { id: 'B', text: "Assume web applications deployed behind firewalls cannot have runtime vulnerabilities." },
      { id: 'C', text: "Perform dynamic security testing directly on the live production environment during peak business hours." },
      { id: 'D', text: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate an automated Dynamic Application Security Testing (DAST) tool (e.g., OWASP ZAP) into the release pipeline targeting the running staging URL. Dynamic Application Security Testing (DAST) tests running applications from the outside, probing APIs and endpoints for active vulnerabilities like cross-site scripting (XSS), SQL injection, and insecure HTTP headers. Running DAST against staging environments catches runtime flaws pre-production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/",
    tags: ["DAST", "OWASP ZAP DAST", "Resilience Failure"]
  },
  {
    id: "azure-az400-471",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Application Insights to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? End-to-end request tracking, dependency calls, and failure analysis with Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions." },
      { id: 'B', text: "Print timestamps to stdout and attempt to match them manually across distributed servers." },
      { id: 'C', text: "Inspect individual VM event viewer logs without request correlation." },
      { id: 'D', text: "Restart web servers whenever an exception occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "Application Insights", "Dr Failover"]
  },
  {
    id: "azure-az400-472",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Application Insights to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? End-to-end request tracking, dependency calls, and failure analysis with Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Inspect individual VM event viewer logs without request correlation." },
      { id: 'B', text: "Restart web servers whenever an exception occurs." },
      { id: 'C', text: "Print timestamps to stdout and attempt to match them manually across distributed servers." },
      { id: 'D', text: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "Application Insights", "High Load Scale"]
  },
  {
    id: "azure-az400-473",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Application Insights to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? End-to-end request tracking, dependency calls, and failure analysis with Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions." },
      { id: 'B', text: "Restart web servers whenever an exception occurs." },
      { id: 'C', text: "Print timestamps to stdout and attempt to match them manually across distributed servers." },
      { id: 'D', text: "Inspect individual VM event viewer logs without request correlation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "Application Insights", "Security Compliance"]
  },
  {
    id: "azure-az400-474",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Application Insights to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? End-to-end request tracking, dependency calls, and failure analysis with Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Restart web servers whenever an exception occurs." },
      { id: 'B', text: "Inspect individual VM event viewer logs without request correlation." },
      { id: 'C', text: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions." },
      { id: 'D', text: "Print timestamps to stdout and attempt to match them manually across distributed servers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "Application Insights", "Hybrid Migration"]
  },
  {
    id: "azure-az400-475",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Telemetry: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Application Insights to trace user transactions across frontend web applications, backend APIs, and Azure SQL databases to pinpoint intermittent request failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? End-to-end request tracking, dependency calls, and failure analysis with Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions." },
      { id: 'B', text: "Inspect individual VM event viewer logs without request correlation." },
      { id: 'C', text: "Print timestamps to stdout and attempt to match them manually across distributed servers." },
      { id: 'D', text: "Restart web servers whenever an exception occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument applications with the Application Insights SDK or OpenTelemetry, enabling automated correlation of requests, dependencies, and exceptions. Azure Application Insights (part of Azure Monitor) provides deep application performance monitoring (APM). By auto-correlating distributed traces across HTTP calls, message queues, and database queries, it visualizes full transaction paths and pinpoints root-cause failure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "Application Insights", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_19;
