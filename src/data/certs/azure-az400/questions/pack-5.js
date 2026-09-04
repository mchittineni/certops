export const AZURE_AZ400_QUESTIONS_5 = [
  {
    id: "azure-az400-101",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Agents Comparison",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "When is a Self-Hosted Agent pool mandatory over Microsoft-Hosted agents?",
    options: [
      { id: 'A', text: "When running standard open-source Python or Node.js tests" },
      { id: 'B', text: "When builds require access to private on-premises network resources via VPN/ExpressRoute or require custom licensed software that cannot be installed on fresh VMs within 5 minutes" },
      { id: 'C', text: "When compiling public GitHub repositories" },
      { id: 'D', text: "When deploying to Azure App Service" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft-hosted agents provide clean ephemeral VMs but have no direct connectivity to private corporate networks or on-premises resources. Self-hosted agents can be deployed inside corporate networks with persistent caches and specialized hardware.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents#agent-types",
    tags: ["Self-Hosted", "Hosted Agents", "Runners", "Architecture"]
  },
  {
    id: "azure-az400-102",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Virtual Machine Scale Set (VMSS) Agent Pools",
    scenario: "An organization needs self-hosted agents with custom software running inside a private VNet, but wants them to scale elastically from 0 to 50 instances based on pipeline queue demand and automatically re-image after each build.",
    question: "Which Azure DevOps agent pool solution provides this managed elastic scaling?",
    options: [
      { id: 'A', text: "Microsoft-hosted pools" },
      { id: 'B', text: "Azure Virtual Machine Scale Set (VMSS) agent pools" },
      { id: 'C', text: "Single stand-alone Azure VM" },
      { id: 'D', text: "Static on-premises physical servers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure VMSS agent pools combine the control of self-hosted agents (custom OS images, VNet connectivity) with automated elastic autoscaling managed by Azure DevOps, automatically provisioning fresh VMs on demand and discarding them after use.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/scale-set-agents",
    tags: ["VMSS", "Agent Pools", "Autoscaling", "Runners"]
  },
  {
    id: "azure-az400-103",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Configuring Self-Hosted Agent Service Account Permissions",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "When installing the Azure Pipelines agent service on a Linux virtual machine, what is the security best practice regarding user privileges?",
    options: [
      { id: 'A', text: "Run the agent with passwordless sudo on all commands" },
      { id: 'B', text: "Run the agent using the personal account of the CIO" },
      { id: 'C', text: "Run the agent as the root user" },
      { id: 'D', text: "Run the agent service as a non-root dedicated service user (e.g. azdevops) with least privilege" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To prevent malicious build scripts from compromising the host system or pivot-attacking the local network, self-hosted agents should always run under a dedicated, unprivileged non-root service account.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/v2-linux#security-principles",
    tags: ["Linux Agent", "Least Privilege", "Security", "Runners"]
  },
  {
    id: "azure-az400-104",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Personal Access Token (PAT) Scopes for Agent Registration",
    scenario: "An administrator provisions a new self-hosted agent pool and generates a Personal Access Token (PAT) to register the agents.",
    question: "Which minimal scope must be selected when generating the PAT?",
    options: [
      { id: 'A', text: "Agent Pools (read, manage)" },
      { id: 'B', text: "Full access" },
      { id: 'C', text: "Work Items (read)" },
      { id: 'D', text: "Code (read and write)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To register self-hosted agents, the PAT requires strictly the `Agent Pools (read, manage)` scope. Avoid granting `Full access` to adhere to the principle of least privilege.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/v2-windows#authenticate-with-a-personal-access-token-pat",
    tags: ["PAT", "Agent Pools", "Registration", "Security"]
  },
  {
    id: "azure-az400-105",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Agent Maintenance Jobs: Cleaning Agent Directories",
    scenario: "Self-hosted build agents on persistent virtual machines are running out of disk space due to accumulated work folders and source repositories.",
    question: "Which native Azure DevOps feature can be scheduled to delete stale work directories across agent pools?",
    options: [
      { id: 'A', text: "Maintenance jobs configured in Agent pool settings (deleting work directories on a schedule)" },
      { id: 'B', text: "Manually formatting the agent hard drive every month" },
      { id: 'C', text: "Disabling all builds" },
      { id: 'D', text: "Restarting the VM after every job" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Under Agent Pool settings, administrators can configure automated Maintenance Jobs. These run on a scheduled cadence (e.g. Sunday night) to clean up stale source repositories and temporary work directories on persistent agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/pools-queues#maintenance-jobs",
    tags: ["Maintenance Jobs", "Agent Pools", "Disk Cleanup", "Runners"]
  },
  {
    id: "azure-az400-106",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Actions Runner Controller (ARC) for Azure DevOps on Kubernetes",
    scenario: "A platform engineering team operates an Azure Kubernetes Service (AKS) cluster and wants to host containerized, ephemeral Azure DevOps agents that scale from 0 rapidly based on queue depth.",
    question: "Which modern open-source Kubernetes operator pattern enables containerized Azure DevOps agent autoscaling?",
    options: [
      { id: 'A', text: "Using Microsoft-hosted pools exclusively" },
      { id: 'B', text: "Running containerized agent pods scaled via KEDA (Kubernetes Event-driven Autoscaling) or custom AKS runners monitoring queue depth" },
      { id: 'C', text: "Running Windows 98 VMs" },
      { id: 'D', text: "Deploying physical blade servers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern cloud-native platform teams deploy containerized agent pools on AKS using KEDA to monitor Azure DevOps queue length metrics, spinning up ephemeral agent pods in seconds and terminating them upon job completion.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/docker",
    tags: ["Kubernetes", "AKS", "KEDA", "Ephemeral Runners"]
  },
  {
    id: "azure-az400-107",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Service Connections: Azure Resource Manager with Workload Identity Federation",
    scenario: "An organization must connect Azure Pipelines to an Azure subscription to deploy resources. Corporate security forbids storing long-lived client secrets or certificates.",
    question: "Which modern authentication mechanism should be configured for the ARM service connection?",
    options: [
      { id: 'A', text: "Service principal with certificate" },
      { id: 'B', text: "Workload identity federation (OIDC - OpenID Connect)" },
      { id: 'C', text: "Service principal with client secret (password)" },
      { id: 'D', text: "Personal user credentials" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Workload Identity Federation uses OpenID Connect (OIDC) to establish trust between Azure DevOps and Microsoft Entra ID. Short-lived tokens are exchanged dynamically during pipeline execution, eliminating permanent secrets and certificate rotation overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#workload-identity-federation",
    tags: ["Workload Identity", "OIDC", "Service Connection", "Security"]
  },
  {
    id: "azure-az400-108",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Restricting Service Connection Usage in YAML Pipelines",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A Production Azure Service Connection has Owner permissions on the corporate subscription. How can administrators ensure that only authorized release pipelines can use it?",
    options: [
      { id: 'A', text: "In Service Connection security settings, disable 'Grant access permission to all pipelines' and explicitly authorize specific pipeline files and branches" },
      { id: 'B', text: "Make the service connection public" },
      { id: 'C', text: "Use client secret authentication" },
      { id: 'D', text: "Delete the service connection after every deployment" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disabling 'Grant access permission to all pipelines' prevents untrusted feature pipelines from using high-privilege credentials. Administrators explicitly grant permissions only to vetted production release pipelines and secure branches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints#secure-a-service-connection",
    tags: ["Service Connections", "Pipeline Security", "Permissions", "Governance"]
  },
  {
    id: "azure-az400-109",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Concurrency and Parallel Jobs",
    scenario: "An organization's developers complain that pull request validation builds are stuck in the 'Waiting for an available agent' state for hours.",
    question: "Where does an administrator purchase or configure additional concurrent build pipelines?",
    options: [
      { id: 'A', text: "Under project work items" },
      { id: 'B', text: "Organization Settings → Pipelines → Parallel jobs" },
      { id: 'C', text: "In the git branch policies" },
      { id: 'D', text: "In the Azure Storage account" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure DevOps concurrency is governed by Parallel Jobs. In Organization Settings under 'Parallel jobs', administrators can purchase additional Microsoft-hosted or self-hosted parallel slots to increase concurrent job execution.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/licensing/concurrent-jobs",
    tags: ["Parallel Jobs", "Concurrency", "Licensing", "Runners"]
  },
  {
    id: "azure-az400-110",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Nuget Authenticate Task in Pipelines",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A .NET build pipeline needs to restore private packages from an Azure Artifacts feed within the same organization. Which task configures the NuGet credential provider?",
    options: [
      { id: 'A', text: "NuGetToolInstaller@1" },
      { id: 'B', text: "CopyFiles@2" },
      { id: 'C', text: "DotNetCoreCLI@2 with no auth" },
      { id: 'D', text: "NuGetAuthenticate@1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `NuGetAuthenticate@1` task automatically configures the Azure Artifacts credential provider, injecting authentication tokens for private NuGet feeds into the build environment without exposing secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1",
    tags: ["NuGetAuthenticate", "Azure Artifacts", "NuGet", "Authentication"]
  },
  {
    id: "azure-az400-111",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipelines Task: UseDotNet and Tool Installers",
    scenario: "A build pipeline running on `ubuntu-latest` requires .NET 8.0 SDK, but the hosted runner currently defaults to .NET 7.0.",
    question: "Which task should be added at the beginning of the job to dynamically install the required runtime version?",
    options: [
      { id: 'A', text: "DotNetCoreCLI@2" },
      { id: 'B', text: "UseDotNet@2 with packageType: sdk and version: '8.0.x'" },
      { id: 'C', text: "PowerShell task rebooting the machine" },
      { id: 'D', text: "Script task running apt-get update" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Tool installer tasks (like `UseDotNet@2`, `UseNode@1`, `UsePythonVersion@0`) check the local runner tool cache and dynamically download/configure the specified SDK version on demand, ensuring consistent build environments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/use-dotnet-v2",
    tags: ["UseDotNet", "Tool Installers", "Pipelines", "SDK"]
  },
  {
    id: "azure-az400-112",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Splitting Unit Tests Across Parallel Slices: slice",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A massive unit test suite takes 60 minutes to run sequentially on a single runner. How can Azure Pipelines run tests in parallel across 4 agents using slicing?",
    options: [
      { id: 'A', text: "strategy: { parallel: 4 } combined with the VSTest@2 task with testRunTitle and slice distribution" },
      { id: 'B', text: "Run the pipeline 4 times manually" },
      { id: 'C', text: "Decrease the test timeout to 15 minutes" },
      { id: 'D', text: "Delete half of the unit tests" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring `strategy.parallel: 4` creates 4 parallel job instances. The `VSTest@2` task automatically detects agent slicing (`Agent.JobPositionInPhase` and `Agent.TotalJobsInPhase`), distributing test assemblies evenly across agents to slash test execution time to 15 minutes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/test/parallel-testing-vstest",
    tags: ["Parallel Testing", "Slicing", "VSTest", "Performance"]
  },
  {
    id: "azure-az400-113",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker Build and Push to Azure Container Registry (ACR)",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Which official task in Azure Pipelines simplifies building Docker images and pushing them to Azure Container Registry (ACR) using a service connection?",
    options: [
      { id: 'A', text: "Docker@2 with command: 'buildAndPush' and containerRegistry service connection" },
      { id: 'B', text: "Bash@3 executing docker cli commands manually with plaintext credentials" },
      { id: 'C', text: "CopyFiles@2" },
      { id: 'D', text: "AzureCLI@2 running az acr import" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Docker@2` task provides built-in integration with Azure Container Registry (ACR) and Docker Hub. Setting `command: 'buildAndPush'` builds the image from a Dockerfile and pushes it securely using service connection authentication.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/docker-v2",
    tags: ["Docker@2", "ACR", "Containers", "CI/CD"]
  },
  {
    id: "azure-az400-114",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Managing Build Numbers and Semantic Versioning in Pipelines",
    scenario: "An enterprise wants build artifacts to be versioned dynamically with format `2026.09.03.<Rev:r>` on every pipeline execution.",
    question: "Where in the YAML pipeline file is this version numbering schema declared?",
    options: [
      { id: 'A', text: "pool: version-pool" },
      { id: 'B', text: "version: 1.0" },
      { id: 'C', text: "name: $(Date:yyyy.MM.dd)$(Rev:.r)" },
      { id: 'D', text: "variables: { build: 1 }" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The top-level `name:` property in Azure Pipelines YAML defines the build number format using built-in date and revision tokens (e.g. `$(Date:yyyy.MM.dd)$(Rev:.r)`), producing clean traceable build numbers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/run-number",
    tags: ["Build Number", "Versioning", "SemVer", "YAML"]
  },
  {
    id: "azure-az400-115",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Retry Failed Pipeline Tasks Automatically",
    scenario: "A network deployment step occasionally fails due to transient HTTP 503 gateway timeouts. The team wants the task to retry up to 2 times automatically before failing the job.",
    question: "Which task property configures automated retries on failure?",
    options: [
      { id: 'A', text: "condition: always()" },
      { id: 'B', text: "continueOnError: true" },
      { id: 'C', text: "timeoutInMinutes: 2" },
      { id: 'D', text: "retryCountOnTaskFailure: 2" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `retryCountOnTaskFailure: 2` on any pipeline task instructs the agent to automatically re-attempt the task up to 2 times if the previous attempt returns a non-zero exit code, neutralizing transient network hiccups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/tasks#task-retries",
    tags: ["Task Retries", "Resilience", "CI/CD", "Transient Errors"]
  },
  {
    id: "azure-az400-116",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Continue on Error vs Target Conditions",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "What is the operational difference between setting `continueOnError: true` on a task versus using `condition: always()` on downstream tasks?",
    options: [
      { id: 'A', text: "`continueOnError: true` treats task failure as a warning and marks the job status as partially succeeded; `condition: always()` allows subsequent tasks to run even if previous tasks formally failed" },
      { id: 'B', text: "continueOnError works only on Windows" },
      { id: 'C', text: "There is no difference between continueOnError and condition: always()" },
      { id: 'D', text: "condition: always() deletes failed build logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`continueOnError: true` prevents a task failure from failing the overall job, resulting in a green or yellow 'partially succeeded' build. In contrast, `condition: always()` lets downstream tasks run to perform cleanup while keeping the job formally failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/tasks#continue-on-error",
    tags: ["continueOnError", "Conditions", "Pipelines", "Error Handling"]
  },
  {
    id: "azure-az400-117",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Diagnostic Logging and Debugging",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A build pipeline fails with an ambiguous error message. How can an engineer re-run the pipeline with maximum verbose debug logs enabled?",
    options: [
      { id: 'A', text: "Queue a new run and check 'Enable system diagnostics', or set variable `system.debug = true`" },
      { id: 'B', text: "Reboot the developer workstation" },
      { id: 'C', text: "Export the pipeline to JSON" },
      { id: 'D', text: "Delete the pipeline and re-create it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Checking 'Enable system diagnostics' when triggering a pipeline (or setting the pipeline variable `system.debug: true`) instructs the agent and tasks to emit comprehensive verbose trace logs to diagnose failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/troubleshooting/review-logs#configure-verbose-logs",
    tags: ["Diagnostics", "system.debug", "Troubleshooting", "Pipelines"]
  },
  {
    id: "azure-az400-118",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Managing Pipeline Artifact Retention Policies",
    scenario: "An enterprise produces 50 GB of build artifacts daily. Storage costs are escalating rapidly because artifacts are never deleted.",
    question: "Where in Azure DevOps can administrators set global artifact retention policies to delete build outputs after 30 days?",
    options: [
      { id: 'A', text: "Project Settings → Pipelines → Settings → Retention policies (days to keep runs and artifacts)" },
      { id: 'B', text: "In the git repository branch policies" },
      { id: 'C', text: "In Azure Key Vault" },
      { id: 'D', text: "In Azure Boards iteration paths" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pipeline retention policies configured under Project Settings → Pipelines → Settings govern how long completed pipeline runs, symbols, and published artifacts are retained before automated deletion.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/policies/retention",
    tags: ["Retention", "Artifacts", "Cost Optimization", "Governance"]
  },
  {
    id: "azure-az400-119",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Step Targets: Executing Specific Steps on Host vs Container",
    scenario: "A job runs inside a Docker container, but one specific task (Docker in Docker) needs to communicate directly with the host VM's Docker socket.",
    question: "Which property on a step directs execution to the host runner instead of the job container?",
    options: [
      { id: 'A', text: "pool: host-pool" },
      { id: 'B', text: "target: host" },
      { id: 'C', text: "container: none" },
      { id: 'D', text: "runOnHost: true" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In a container job, setting `target: host` on an individual step tells the agent to execute that specific step directly on the underlying host operating system rather than inside the job container.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases#step-targets",
    tags: ["Step Targets", "Container Jobs", "Docker", "Runners"]
  },
  {
    id: "azure-az400-120",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Secure Files in Azure Pipelines Library",
    scenario: "An iOS build pipeline requires an Apple Developer signing certificate (`.p12`) and mobile provisioning profile (`.mobileprovision`) to sign release IPAs.",
    question: "Where should these binary certificate files be stored securely in Azure DevOps?",
    options: [
      { id: 'A', text: "In Azure Pipelines Library under 'Secure files', downloaded at runtime using the DownloadSecureFile@1 task" },
      { id: 'B', text: "Committed into the public Git repository" },
      { id: 'C', text: "Stored in an Azure Boards work item attachment" },
      { id: 'D', text: "Pasted into the pipeline YAML description" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secure Files in the Azure Pipelines Library provide encrypted cloud storage for sensitive files (certificates, provisioning profiles, SSH keys). Pipelines download them via `DownloadSecureFile@1` with automatic deletion after the job ends.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/secure-files",
    tags: ["Secure Files", "Certificates", "iOS", "Security"]
  },
  {
    id: "azure-az400-121",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "PowerShell Task: pwsh Core vs Windows PowerShell",
    scenario: "A DevOps engineer wants a PowerShell script step in `azure-pipelines.yml` to execute on both Linux and Windows hosted agents.",
    question: "Which setting on the PowerShell@2 task ensures cross-platform execution using PowerShell Core?",
    options: [
      { id: 'A', text: "os: cross-platform" },
      { id: 'B', text: "pwsh: true" },
      { id: 'C', text: "targetType: inline" },
      { id: 'D', text: "script: powershell.exe" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting `pwsh: true` on the `PowerShell@2` task instructs the agent to invoke cross-platform PowerShell Core (`pwsh`) on Windows, Linux, and macOS, rather than legacy Windows PowerShell (`powershell.exe`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/powershell-v2",
    tags: ["PowerShell", "pwsh", "Cross-Platform", "Scripting"]
  },
  {
    id: "azure-az400-122",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Bash vs CmdLine Tasks in Pipelines",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A team writes shell scripts in `azure-pipelines.yml` to build a Go application. What is the difference between Bash@3 and CmdLine@2?",
    options: [
      { id: 'A', text: "CmdLine@2 cannot accept script arguments" },
      { id: 'B', text: "Bash@3 runs bash shell scripts on Linux, macOS, and Windows (via Git Bash); CmdLine@2 runs cmd.exe on Windows or sh on Linux" },
      { id: 'C', text: "Bash@3 works only on Ubuntu" },
      { id: 'D', text: "There is no difference between Bash and CmdLine tasks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `Bash@3` task executes scripts using the Bash interpreter across all platforms (including Windows using Git Bash). `CmdLine@2` invokes the native operating system default shell (`cmd.exe` on Windows, `/bin/sh` on Linux).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/bash-v3",
    tags: ["Bash", "CmdLine", "Scripting", "Cross-Platform"]
  },
  {
    id: "azure-az400-123",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure CLI Task: Script Location (Inline vs Script File)",
    scenario: "An infrastructure deployment step runs Azure CLI commands to configure Cosmos DB. The security architect recommends storing the script in version control rather than inline YAML.",
    question: "Which configuration on AzureCLI@2 executes a checked-out script file?",
    options: [
      { id: 'A', text: "inlineScript: az cosmosdb create" },
      { id: 'B', text: "scriptType: inline" },
      { id: 'C', text: "target: external" },
      { id: 'D', text: "scriptType: bash, scriptLocation: scriptPath, scriptPath: '$(Build.SourcesDirectory)/scripts/setup-db.sh'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `scriptLocation: scriptPath` on `AzureCLI@2` points to a version-controlled script file in the repository. This enables local script linting, unit testing, and code review outside pipeline YAML.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-cli-v2",
    tags: ["AzureCLI@2", "Scripting", "Version Control", "IaC"]
  },
  {
    id: "azure-az400-124",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Disabling Telemetry and Tracking in Third-Party Tools via Pipeline Variables",
    scenario: "During CI builds, third-party CLI tools (like .NET SDK, Next.js, or Angular) attempt to phone home anonymous telemetry, causing transient socket delays.",
    question: "What environment variables should be defined at the pipeline root to disable telemetry across build tools?",
    options: [
      { id: 'A', text: "DISABLE_ALL: 'true'" },
      { id: 'B', text: "TELEMETRY: 'off'" },
      { id: 'C', text: "DOTNET_CLI_TELEMETRY_OPTOUT: '1' and NEXT_TELEMETRY_DISABLED: '1'" },
      { id: 'D', text: "NO_INTERNET: 'true'" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting environment variables like `DOTNET_CLI_TELEMETRY_OPTOUT: 1` and `NEXT_TELEMETRY_DISABLED: 1` suppresses tool telemetry calls, speeding up CI builds and preventing outbound network noise on runner agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/dotnet/core/tools/telemetry",
    tags: ["Telemetry", "Optimization", "CI/CD", "Environment Variables"]
  },
  {
    id: "azure-az400-125",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pool Permissions",
    scenario: "A developer cannot queue a pipeline that targets a newly created self-hosted pool named 'Finance-Runners', receiving error: 'Pool Finance-Runners not found or not permitted'.",
    question: "How does an administrator grant the pipeline permission to use the agent pool?",
    options: [
      { id: 'A', text: "Reboot the build agent" },
      { id: 'B', text: "Navigate to Project Settings → Agent pools → Finance-Runners → Security, and authorize the pipeline under Pipeline permissions" },
      { id: 'C', text: "Delete the agent pool" },
      { id: 'D', text: "Make the developer an Azure subscription owner" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Agent pools maintain independent security access control lists. Administrators must grant the target pipeline permission to use the pool under Agent Pool Security settings in Azure DevOps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/pools-queues#pool-security",
    tags: ["Agent Pools", "Permissions", "Security", "Troubleshooting"]
  }
];

export default AZURE_AZ400_QUESTIONS_5;
