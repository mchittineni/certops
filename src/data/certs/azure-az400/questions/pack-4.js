export const AZURE_AZ400_QUESTIONS_4 = [
  {
    id: "azure-az400-76",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections via Workload Identity Federation (OIDC)",
    scenario: "A DevOps engineer is configuring an Azure Pipelines service connection to deploy infrastructure to an Azure subscription. Company security policy forbids storing long-lived service principal client secrets or certificates in the Azure DevOps portal.",
    question: "Which service connection authentication mechanism satisfies this strict security requirement?",
    options: [
      { id: 'A', text: "Managed identity assigned to a Microsoft-hosted agent pool" },
      { id: 'B', text: "Service principal with an auto-generated client secret expiring in 2 years" },
      { id: 'C', text: "Azure Resource Manager service connection using Workload Identity federation (automatic or manual OIDC)" },
      { id: 'D', text: "Personal Access Token (PAT) generated with full administrator privileges" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure DevOps supports Workload Identity federation for Azure Resource Manager service connections using OpenID Connect (OIDC). The pipeline requests a short-lived OIDC token from Azure DevOps and exchanges it with Microsoft Entra ID for a federated access token, eliminating the need to store, manage, or rotate static secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation",
    tags: ["Azure Pipelines", "Workload Identity", "OIDC", "Security"]
  },
  {
    id: "azure-az400-77",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "App Service Zero-Downtime Deployment with Deployment Slots",
    scenario: "A mission-critical web application runs on Azure App Service. The team needs to deploy updates with zero downtime, warm up cache and database connections before exposing the update to public traffic, and instantly revert if unexpected errors occur in production.",
    question: "Which deployment pattern and Azure App Service feature should be used?",
    options: [
      { id: 'A', text: "Deploy to a staging deployment slot, execute warm-up requests, and perform a slot swap with production" },
      { id: 'B', text: "Deploy a second App Service in a different region and delete the primary instance" },
      { id: 'C', text: "Scale out the App Service plan from 1 instance to 10 instances during deployment" },
      { id: 'D', text: "Stop the App Service instance, upload new binaries via FTP, and restart the instance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure App Service deployment slots allow deploying new revisions to an isolated staging slot. The staging slot can be warmed up and validated before swapping. Swapping slots re-routes traffic instantly via a virtual IP swap with zero downtime, and if an issue arises, swapping back instantly rolls back.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service", "Deployment Slots", "Blue/Green", "Zero Downtime"]
  },
  {
    id: "azure-az400-78",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Self-Hosted Agents vs. Microsoft-Hosted Agents",
    scenario: "A build pipeline compiles a specialized C++ application requiring proprietary hardware acceleration drivers, custom installed SDKs, and local access to an on-premises database unreachable from the public internet.",
    question: "Which agent strategy must be implemented in Azure Pipelines?",
    options: [
      { id: 'A', text: "Self-hosted build agents installed on private virtual machines or physical servers connected to the private corporate network" },
      { id: 'B', text: "Running the compilation directly inside an Azure Cloud Shell browser window" },
      { id: 'C', text: "Microsoft-hosted Ubuntu-latest agent pool with public IP firewall rules" },
      { id: 'D', text: "Azure Container Instances deployed in the public cloud without VNet integration" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft-hosted agents run in isolated Azure VMs with fresh images on every build, but they lack custom proprietary drivers and cannot reach on-premises networks without public ingress. Self-hosted agents give full control over installed software, persistent caches, and private network connectivity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Azure Pipelines", "Self-Hosted Agents", "Build Infrastructure"]
  },
  {
    id: "azure-az400-79",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Upstream Sources",
    scenario: "A development team uses Azure Artifacts feeds to manage internal NuGet and npm packages. They also consume external packages from public registries (npmjs.com and nuget.org). They must ensure that external dependencies remain available even if the public registries experience outages, and prevent malicious package tampering.",
    question: "Which feature of Azure Artifacts should be configured?",
    options: [
      { id: 'A', text: "Azure Blob Storage sync" },
      { id: 'B', text: "Universal Packages" },
      { id: 'C', text: "Upstream sources" },
      { id: 'D', text: "Pipeline Artifacts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Upstream sources in Azure Artifacts allow a single feed to serve both internal custom packages and packages from external public registries (like nuget.org, npmjs.com, Maven Central). When an external package is first requested, Azure Artifacts saves a cached copy in the feed, ensuring build reproducibility and immunity to external registry outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Upstream Sources", "Package Management"]
  },
  {
    id: "azure-az400-80",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Feature Flags with Azure App Configuration",
    scenario: "An engineering team wants to decouple code deployment from feature exposure, allowing new frontend features to be toggled on or off for specific percentages of users in production without redeploying code or restarting web applications.",
    question: "Which Azure service provides centralized dynamic feature flag management?",
    options: [
      { id: 'A', text: "Azure Key Vault secrets" },
      { id: 'B', text: "Azure Service Bus topics" },
      { id: 'C', text: "Azure App Configuration with Feature Manager" },
      { id: 'D', text: "Azure Monitor alert rules" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure App Configuration provides a centralized service to manage application settings and feature flags. Through Feature Manager, teams can define boolean feature flags or targeted rollout filters (e.g. enabling a feature for 10% of users or internal IP ranges) that applications query dynamically without restarting.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["App Configuration", "Feature Flags", "DevOps"]
  },
  {
    id: "azure-az400-81",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #1",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #1?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-82",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #2",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #2?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-83",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #3",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #3?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-84",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #4",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #4?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-85",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #5",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #5?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-86",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #6",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #6?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-87",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #7",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #7?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-88",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #8",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #8?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-89",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #9",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #9?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-90",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #10",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #10?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-91",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #11",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #11?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-92",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #12",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #12?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-93",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #13",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #13?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'C', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-94",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #14",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #14?",
    options: [
      { id: 'A', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-95",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #15",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #15?",
    options: [
      { id: 'A', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'D', text: "Disabling all test tasks and build validation to accelerate deployment speed" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-96",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #16",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #16?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-97",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #17",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #17?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-98",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #18",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #18?",
    options: [
      { id: 'A', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'B', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'C', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-99",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #19",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #19?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" },
      { id: 'D', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  },
  {
    id: "azure-az400-100",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Build and Release Pipeline Scenario #20",
    scenario: "A DevOps engineer is designing multi-stage YAML pipelines, container builds with ACR, and automated rollback gates.",
    question: "Which pipeline implementation best satisfies deployment requirement #20?",
    options: [
      { id: 'A', text: "Disabling all test tasks and build validation to accelerate deployment speed" },
      { id: 'B', text: "Using manual unversioned GUI release scripts executed sequentially by engineers" },
      { id: 'C', text: "Structuring multi-stage YAML pipelines with environment deployment gates, variable group secrets, and automated rollback conditions" },
      { id: 'D', text: "Storing plain-text administrative passwords in open pipeline YAML repository files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modern Azure Pipelines design mandates modular YAML definitions, deployment environments with manual and automated approval gates, and secure secret retrieval via Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema",
    tags: ["Azure Pipelines", "YAML", "CI/CD"]
  }
];

export default AZURE_AZ400_QUESTIONS_4;
