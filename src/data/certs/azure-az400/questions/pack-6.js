export const AZURE_AZ400_QUESTIONS_6 = [
  {
    id: "azure-az400-126",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Environments: Targeting Kubernetes, VMs, and Web Apps",
    scenario: "An enterprise models their multi-stage release pipeline in YAML targeting Dev, QA, and Production environments. They want deployment history and traceability tracked on each target.",
    question: "Which YAML concept represents the target deployment boundary with integrated approvals and health tracking?",
    options: [
      { id: 'A', text: "stage: 'Production'" },
      { id: 'B', text: "workspace: 'Production'" },
      { id: 'C', text: "environment: 'Production'" },
      { id: 'D', text: "pool: 'Production'" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An `environment` in Azure Pipelines represents a collection of deployment targets (Kubernetes clusters, VMs, App Services). Declaring `environment: Production` inside a deployment job enables deployment history, approvals, and security gates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Deployment", "CD", "Governance"]
  },
  {
    id: "azure-az400-127",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Manual Approvals on Production Environments",
    scenario: "A compliance policy requires that deployments to the Production environment must be formally approved by at least two Release Managers before any deployment tasks can execute.",
    question: "Where are these approval checks configured for YAML pipelines?",
    options: [
      { id: 'A', text: "In branch protection rules" },
      { id: 'B', text: "In Project Settings → Pipelines → Environments → Production → Approvals and checks" },
      { id: 'C', text: "Hardcoded inside azure-pipelines.yml as a bash script" },
      { id: 'D', text: "In Azure Key Vault" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Approvals and checks are configured directly on the Environment resource in the Azure DevOps portal. When a deployment job targets that environment, pipeline execution pauses automatically until designated approvers review and approve the run.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals",
    tags: ["Approvals", "Environments", "Governance", "Compliance"]
  },
  {
    id: "azure-az400-128",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automated Gates: Querying Azure Monitor Alerts Before Deployment",
    scenario: "A release pipeline deploys microservices sequentially across three regions. Before deploying to Region 2, the pipeline must verify that no High severity alerts fired in Azure Monitor for Region 1 over the past 30 minutes.",
    question: "Which automated check on an Environment implements this operational verification?",
    options: [
      { id: 'A', text: "Invoke REST API gate" },
      { id: 'B', text: "Manual approval by developer" },
      { id: 'C', text: "Query Azure Monitor alerts gate" },
      { id: 'D', text: "Branch policy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'Query Azure Monitor alerts' gate automatically queries Azure Monitor for active alerts matching configured criteria. If any unacknowledged alerts are open during the evaluation window, the gate blocks progression to subsequent deployment stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates#query-azure-monitor-alerts",
    tags: ["Gates", "Azure Monitor", "Deployment Gates", "Quality"]
  },
  {
    id: "azure-az400-129",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Canary Deployment Strategy",
    scenario: "A team wants to deploy a new version of a web service to 10% of users first, evaluate error rates for 15 minutes, and then roll out to the remaining 90% if health metrics remain normal.",
    question: "Which deployment strategy supported in Azure Pipelines deployment jobs implements this canary pattern?",
    options: [
      { id: 'A', text: "Recreate deployment strategy" },
      { id: 'B', text: "strategy: { canary: { increments: [10, 100], routeTraffic: { ... } } }" },
      { id: 'C', text: "strategy: { runOnce: { deploy: { ... } } }" },
      { id: 'D', text: "strategy: { rolling: { ... } }" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `canary` deployment strategy in Azure Pipelines deployment jobs automates canary rollouts: routing traffic to increments (e.g. 10%, then 100%), executing postRouteTraffic validation tests, and rolling back if metrics degrade.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs#canary-deployment-strategy",
    tags: ["Canary", "Deployment Strategies", "Progressive Delivery", "Resilience"]
  },
  {
    id: "azure-az400-130",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Blue/Green Deployment with App Service Slots",
    scenario: "An organization deploys web applications using Blue/Green deployments to eliminate production downtime. New code is tested in a staging slot before switching production traffic.",
    question: "Which Azure Pipelines task swaps Azure App Service deployment slots?",
    options: [
      { id: 'A', text: "AzureCLI@2 with az vm restart" },
      { id: 'B', text: "CopyFiles@2" },
      { id: 'C', text: "AzureAppServiceManage@0 with action: 'Swap Slots'" },
      { id: 'D', text: "AzureWebApp@1" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `AzureAppServiceManage@0` task provides management operations for Azure App Service, including 'Swap Slots', which atomically directs production DNS routing to the newly validated staging slot with zero downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-app-service-manage-v0",
    tags: ["Blue/Green", "Deployment Slots", "App Service", "Zero-Downtime"]
  },
  {
    id: "azure-az400-131",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling Deployment on VM Virtual Machine Pools",
    scenario: "A legacy stateful application runs across a pool of 10 virtual machines. The release pipeline must update 2 virtual machines at a time, keeping the other 8 VMs serving traffic.",
    question: "Which deployment strategy on an Environment containing Virtual Machine resources handles this batched update?",
    options: [
      { id: 'A', text: "strategy: { runOnce: { deploy: { ... } } }" },
      { id: 'B', text: "strategy: { rolling: { maxParallel: 2, deploy: { ... } } }" },
      { id: 'C', text: "strategy: { recreate: true }" },
      { id: 'D', text: "strategy: { canary: { increments: [50] } }" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `rolling` deployment strategy iterates through target machines in a deployment group or VM environment, updating batches according to `maxParallel` (e.g. 2 instances at a time) to ensure continuous application availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs#rolling-deployment-strategy",
    tags: ["Rolling", "Deployment Strategies", "Virtual Machines", "High Availability"]
  },
  {
    id: "azure-az400-132",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automated Rollback on Deployment Failure",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "During a canary deployment, an automated smoke test task in the `postRouteTraffic` hook fails. How does Azure Pipelines execute rollback logic?",
    options: [
      { id: 'A', text: "By executing tasks defined in the `on: { failure: { ... } }` lifecycle hook of the deployment strategy" },
      { id: 'B', text: "Rollbacks cannot be automated in YAML pipelines" },
      { id: 'C', text: "By deleting the entire Azure resource group" },
      { id: 'D', text: "By shutting down all virtual machines" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Pipelines deployment jobs support explicit lifecycle failure hooks (`on: { failure: { ... } }`). If any validation step in `deploy` or `postRouteTraffic` fails, the failure hook runs automatically to restore previous configurations or reroute traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs#descriptions-of-lifecycle-hooks",
    tags: ["Rollback", "Lifecycle Hooks", "Resilience", "CD"]
  },
  {
    id: "azure-az400-133",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Business Hours Deployment Checks: Exclusive Lock and Business Hours",
    scenario: "An enterprise policy strictly forbids deploying updates to production systems during weekend business peak hours. Deployments to production must only occur between 1:00 AM and 4:00 AM on Tuesdays.",
    question: "Which Environment check enforces this scheduling restriction?",
    options: [
      { id: 'A', text: "Writing a cron job on developer laptops" },
      { id: 'B', text: "Disabling the pipeline manually on Friday" },
      { id: 'C', text: "Business Hours check on the Environment" },
      { id: 'D', text: "Setting a 48-hour timeout" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'Business Hours' check on an Azure Pipelines Environment defines allowed time windows during which deployment jobs may run. If a pipeline requests deployment outside approved hours, it pauses until the window opens.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals#business-hours",
    tags: ["Business Hours", "Environments", "Governance", "Deployment Windows"]
  },
  {
    id: "azure-az400-134",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Exclusive Lock Check on Shared Environments",
    scenario: "Two developers trigger release pipelines simultaneously that target the shared 'Staging' environment. Concurrent deployments will corrupt the shared database state.",
    question: "Which check on the Environment guarantees that only one pipeline can deploy to Staging at any given time?",
    options: [
      { id: 'A', text: "Exclusive lock check" },
      { id: 'B', text: "Branch policy" },
      { id: 'C', text: "Manual approval check" },
      { id: 'D', text: "Azure Monitor alert gate" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring the 'Exclusive lock' check on an Environment ensures that only a single pipeline run can execute on that environment at a time, queuing subsequent deployment runs sequentially to avoid race conditions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals#exclusive-lock",
    tags: ["Exclusive Lock", "Environments", "Concurrency", "Race Conditions"]
  },
  {
    id: "azure-az400-135",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Invoke REST API Gate for External ServiceNow Change Management",
    scenario: "An enterprise requires that a release pipeline must open a Change Request ticket in ServiceNow, poll the change request status, and proceed only after ServiceNow approves the ticket.",
    question: "Which check should be configured on the production Environment?",
    options: [
      { id: 'A', text: "Manual email confirmation" },
      { id: 'B', text: "Branch policy check" },
      { id: 'C', text: "Artifact download task" },
      { id: 'D', text: "Invoke REST API gate (or ServiceNow Change Management extension gate)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'Invoke REST API' check allows Azure Pipelines to call external REST endpoints (such as ServiceNow or custom approval engines) and parse the JSON response, verifying that external change approvals are granted before proceeding.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates#invoke-rest-api",
    tags: ["ServiceNow", "Invoke REST API", "Gates", "Change Management"]
  },
  {
    id: "azure-az400-136",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Invoke Azure Function Gate: Custom Serverless Validation",
    scenario: "A team wants to run a complex custom validation algorithm hosted on an Azure Function before allowing a pipeline to deploy to production.",
    question: "Which Environment gate invokes an Azure Function and evaluates its HTTP response?",
    options: [
      { id: 'A', text: "Azure Monitor alert gate" },
      { id: 'B', text: "Query Work Items gate" },
      { id: 'C', text: "Manual intervention task" },
      { id: 'D', text: "Invoke Azure Function gate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'Invoke Azure Function' gate calls a serverless Azure Function endpoint. The function processes signals and returns a success or failure status code to let Azure Pipelines decide whether to permit deployment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates#invoke-azure-function",
    tags: ["Azure Functions", "Gates", "Automation", "Validation"]
  },
  {
    id: "azure-az400-137",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Query Work Items Gate: Verifying Sprint Readiness",
    scenario: "Before deploying a release to UAT, a project policy mandates that there must be zero open blocker bugs in Azure Boards for the current milestone.",
    question: "Which check queries work items before permitting environment deployment?",
    options: [
      { id: 'A', text: "Build validation pipeline" },
      { id: 'B', text: "Azure Artifacts upstream source" },
      { id: 'C', text: "Delivery Plans" },
      { id: 'D', text: "Query Work Items gate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'Query Work Items' gate executes a shared Azure Boards work item query. If the query returns any matching active blocker bugs, the gate fails and halts deployment to the target environment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates#query-work-items",
    tags: ["Query Work Items", "Gates", "Azure Boards", "Quality"]
  },
  {
    id: "azure-az400-138",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Download Pipeline Artifacts in Release Stages",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A multi-stage YAML pipeline compiles an ASP.NET application in the 'Build' stage and deploys it in the 'Production' stage. How does the Production stage retrieve the compiled zip package?",
    options: [
      { id: 'A', text: "By running git clone in the production stage" },
      { id: 'B', text: "By copying files over an open SMB share" },
      { id: 'C', text: "By recompiling the source code from scratch on the production agent" },
      { id: 'D', text: "Using the `download: current` step (or `DownloadPipelineArtifact@2`)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `download: current` step (or `DownloadPipelineArtifact@2`) downloads artifacts produced by prior stages in the same pipeline run. Best practice builds and packages code once in CI and deploys the identical immutable binary across environments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts#download-artifacts",
    tags: ["Download Artifacts", "Immutability", "Pipelines", "CD"]
  },
  {
    id: "azure-az400-139",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deploying to Azure Kubernetes Service (AKS) via KubernetesManifest Task",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Which native Azure Pipelines task bakes Helm charts or Kustomize overlays and deploys manifests to an AKS cluster with automatic rollout tracking?",
    options: [
      { id: 'A', text: "KubernetesManifest@1 with action: 'deploy'" },
      { id: 'B', text: "Bash@3 running kubectl manually" },
      { id: 'C', text: "CopyFiles@2" },
      { id: 'D', text: "AzureCLI@2 with az aks start" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `KubernetesManifest@1` task integrates natively with Azure Kubernetes Service. It handles manifest substitution, deploys resources, annotates objects for traceability, and monitors deployment rollout status until pods are healthy.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v1",
    tags: ["KubernetesManifest", "AKS", "Kubernetes", "CD"]
  },
  {
    id: "azure-az400-140",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Bake Manifests Task: Helm and Kustomize Integration",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A GitOps release pipeline maintains application configurations as Helm templates. Which task compiles Helm charts into raw Kubernetes YAML manifests before applying them?",
    options: [
      { id: 'A', text: "PublishBuildArtifacts@1" },
      { id: 'B', text: "KubernetesManifest@1 with action: 'bake' and renderType: 'helm'" },
      { id: 'C', text: "ArchiveFiles@2" },
      { id: 'D', text: "Docker@2 with action: build" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `bake` action of the `KubernetesManifest@1` task uses Helm, Kustomize, or Kompose to render templated configurations into raw Kubernetes YAML manifests, preparing them for canary or direct cluster deployment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v1#bake-action",
    tags: ["Bake", "Helm", "Kubernetes", "Manifests"]
  },
  {
    id: "azure-az400-141",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Classic Release Pipelines vs Multi-Stage YAML Pipelines",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Why does Microsoft recommend modern Multi-Stage YAML pipelines over Classic Release Pipelines?",
    options: [
      { id: 'A', text: "Classic pipelines are free; YAML pipelines require extra payment" },
      { id: 'B', text: "YAML pipelines cannot deploy to Azure" },
      { id: 'C', text: "YAML pipelines enable Pipeline-as-Code: pipeline definitions are versioned in Git alongside application code, branched, code-reviewed in PRs, and audited in commit history" },
      { id: 'D', text: "Classic pipelines run faster than YAML" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-stage YAML pipelines treat CI/CD definitions as first-class code (Pipeline-as-Code). They live in the repository, undergo branch reviews and pull request gates, and track revisions alongside application source code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines#why-use-azure-pipelines",
    tags: ["Pipeline as Code", "YAML", "Git", "DevOps Standards"]
  },
  {
    id: "azure-az400-142",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Task Groups vs YAML Step Templates",
    scenario: "A team migrating from Classic pipelines to YAML wants to replicate reusable collections of tasks across multiple pipelines.",
    question: "What is the YAML equivalent of Classic Task Groups?",
    options: [
      { id: 'A', text: "Variable Groups" },
      { id: 'B', text: "Agent Pools" },
      { id: 'C', text: "Service Connections" },
      { id: 'D', text: "YAML Step Templates (`template: steps/common-tasks.yml`)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In YAML pipelines, reusable sets of tasks are defined as Step Templates (e.g. `template: templates/npm-build.yml`). Pipelines reference them with parameters, replacing legacy Classic Task Groups with version-controlled code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates#step-templates",
    tags: ["Templates", "Step Templates", "Reusability", "YAML"]
  },
  {
    id: "azure-az400-143",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Groups vs Environments in Azure DevOps",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "What is the difference between Classic Deployment Groups and modern YAML Environments when managing virtual machine targets?",
    options: [
      { id: 'A', text: "Deployment Groups are legacy Classic constructs; Environments are the modern YAML construct supporting virtual machines, Kubernetes clusters, and resource health tracking" },
      { id: 'B', text: "Deployment Groups only support Linux; Environments only support Windows" },
      { id: 'C', text: "Deployment Groups run in the cloud; Environments run only on-premises" },
      { id: 'D', text: "Environments do not support virtual machines" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "YAML Environments supersede Classic Deployment Groups. Environments provide unified management for both virtual machines and Kubernetes clusters, incorporating approvals, checks, and deployment history directly into YAML pipelines.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments-virtual-machines",
    tags: ["Environments", "Deployment Groups", "Virtual Machines", "Pipelines"]
  },
  {
    id: "azure-az400-144",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure App Service Deployment: AzureWebApp@1",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Which official Azure Pipelines task is purpose-built to deploy packaged web applications, container images, and zip bundles to Azure App Service?",
    options: [
      { id: 'A', text: "FTPUpload@2" },
      { id: 'B', text: "AzureCLI@2 with az vm run-command" },
      { id: 'C', text: "CopyFiles@2" },
      { id: 'D', text: "AzureWebApp@1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `AzureWebApp@1` task deploys web applications (Java, .NET, Node.js, Python, PHP) and custom container images directly to Azure App Service instances on Windows or Linux using zip deploy and Kudu APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-web-app-v1",
    tags: ["AzureWebApp", "App Service", "Web Deploy", "CD"]
  },
  {
    id: "azure-az400-145",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Function App Deployment: AzureFunctionApp@2",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Which pipeline task deploys serverless code packages directly to Azure Function Apps?",
    options: [
      { id: 'A', text: "AzureFunctionApp@2" },
      { id: 'B', text: "AzureWebApp@1" },
      { id: 'C', text: "PublishBuildArtifacts@1" },
      { id: 'D', text: "AzureResourceManagerTemplateDeployment@3" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`AzureFunctionApp@2` is optimized for deploying serverless functions to Azure Functions on Windows, Linux, Consumption, and Premium plans, supporting both code zip packages and custom container images.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-function-app-v2",
    tags: ["Azure Functions", "Serverless", "AzureFunctionApp", "CD"]
  },
  {
    id: "azure-az400-146",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Database Schema Migrations in Pipelines: Entity Framework and Flyway",
    scenario: "An application pipeline deploys an updated backend service to Azure App Service and must apply schema migrations to Azure SQL Database before the new code starts handling traffic.",
    question: "Where should the database migration step be positioned in the deployment pipeline?",
    options: [
      { id: 'A', text: "In a post-deployment step after 100% of traffic is switched" },
      { id: 'B', text: "After deleting the production database" },
      { id: 'C', text: "Database migrations should only be executed manually by developers" },
      { id: 'D', text: "In a pre-deployment step or pre-deploy lifecycle hook before routing traffic to the updated code" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Database schema migrations (e.g. using Entity Framework migrations, Flyway, or Liquibase) must execute in pre-deployment hooks before new application instances start serving user traffic to ensure required tables and columns exist.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldatabase",
    tags: ["Database Migrations", "Schema", "Azure SQL", "Release"]
  },
  {
    id: "azure-az400-147",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts: Upstream Sources for Public Registries",
    scenario: "An enterprise builds Node.js applications that consume npm packages. Corporate security requires that once a public npm package version is used, a cached copy must be preserved internally even if the author unpublishes it from public npm.",
    question: "Which Azure Artifacts feature ensures package immutability and protection against upstream deletion?",
    options: [
      { id: 'A', text: "Configuring npmjs.org as an Upstream Source on an internal Azure Artifacts feed" },
      { id: 'B', text: "Downloading all 2 million npm packages onto a local hard drive" },
      { id: 'C', text: "Disabling external package dependencies" },
      { id: 'D', text: "Committing node_modules into git" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When an upstream source (such as `npmjs.org` or `nuget.org`) is enabled on an Azure Artifacts feed, the first time a package version is requested, Azure Artifacts saves an immutable copy in the internal feed, insulating teams from external registry outages or package unpublishing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources",
    tags: ["Azure Artifacts", "Upstream Sources", "npm", "Supply Chain"]
  },
  {
    id: "azure-az400-148",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Artifacts Feed Views: Release and Prerelease Promotion",
    scenario: "A library team wants consumers to install only thoroughly tested package versions, while internal CI builds can test release-candidate builds without polluting the production feed.",
    question: "Which Azure Artifacts feature isolates production packages from prerelease builds within a single feed?",
    options: [
      { id: 'A', text: "Deleting prerelease packages after 5 minutes" },
      { id: 'B', text: "Renaming the package on every build" },
      { id: 'C', text: "Creating 50 separate Azure DevOps organizations" },
      { id: 'D', text: "Feed Views (@local, @prerelease, @release)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Feed Views allow teams to share a curated subset of package versions with consumers. Packages enter the feed at `@local` and are formally promoted to `@prerelease` or `@release` views after passing automated testing and quality verification.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/feeds/feed-views",
    tags: ["Feed Views", "Package Management", "Azure Artifacts", "Governance"]
  },
  {
    id: "azure-az400-149",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Universal Packages: Storing Heavy Build Outputs",
    scenario: "A machine learning pipeline generates 8 GB compiled binary model files and custom datasets that need to be versioned, downloaded by release pipelines, and shared across projects.",
    question: "Which package type supported by Azure Artifacts is designed for arbitrary large files and directories up to 4 TB?",
    options: [
      { id: 'A', text: "NuGet packages" },
      { id: 'B', text: "npm packages" },
      { id: 'C', text: "Maven artifacts" },
      { id: 'D', text: "Universal Packages" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Universal Packages in Azure Artifacts store collections of files and directories up to 4 TB in size with semantic versioning, providing fast multi-threaded chunked downloads for datasets, tools, and compiled runtime binaries.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/quickstarts/universal-packages",
    tags: ["Universal Packages", "Azure Artifacts", "Big Data", "Storage"]
  },
  {
    id: "azure-az400-150",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Package Retention Policies in Azure Artifacts",
    scenario: "An automated continuous integration pipeline publishes a new NuGet package version on every commit to main (100 builds per day), quickly exhausting Azure Artifacts storage limits.",
    question: "How can administrators automatically purge old minor package versions while retaining promoted releases?",
    options: [
      { id: 'A', text: "Manually click delete on 100 packages every evening" },
      { id: 'B', text: "Stop publishing packages to Azure Artifacts" },
      { id: 'C', text: "Configure automatic package retention policies on the feed, specifying the maximum number of versions to preserve per package" },
      { id: 'D', text: "Convert NuGet packages into text files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Feed settings in Azure Artifacts provide automated Package Retention Policies. Administrators set a maximum number of recent versions to retain (e.g. keep latest 20 versions), automatically purging stale untagged builds while preserving promoted versions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/artifacts/how-to/delete-and-recover-packages#automatically-delete-old-package-versions-with-retention-policies",
    tags: ["Retention", "Azure Artifacts", "Storage Optimization", "Cost Management"]
  }
];

export default AZURE_AZ400_QUESTIONS_6;
