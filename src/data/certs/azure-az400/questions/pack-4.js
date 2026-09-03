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
      { id: 'A', text: "Service principal with an auto-generated client secret expiring in 2 years" },
      { id: 'B', text: "Managed identity assigned to a Microsoft-hosted agent pool" },
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
      { id: 'A', text: "Deploy a second App Service in a different region and delete the primary instance" },
      { id: 'B', text: "Stop the App Service instance, upload new binaries via FTP, and restart the instance" },
      { id: 'C', text: "Deploy to a staging deployment slot, execute warm-up requests, and perform a slot swap with production" },
      { id: 'D', text: "Scale out the App Service plan from 1 instance to 10 instances during deployment" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Microsoft-hosted Ubuntu-latest agent pool with public IP firewall rules" },
      { id: 'B', text: "Azure Container Instances deployed in the public cloud without VNet integration" },
      { id: 'C', text: "Self-hosted build agents installed on private virtual machines or physical servers connected to the private corporate network" },
      { id: 'D', text: "Running the compilation directly inside an Azure Cloud Shell browser window" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Pipeline Artifacts" },
      { id: 'B', text: "Upstream sources" },
      { id: 'C', text: "Universal Packages" },
      { id: 'D', text: "Azure Blob Storage sync" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Azure Monitor alert rules" },
      { id: 'B', text: "Azure Service Bus topics" },
      { id: 'C', text: "Azure Key Vault secrets" },
      { id: 'D', text: "Azure App Configuration with Feature Manager" }
    ],
    correctAnswers: ['D'],
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
    title: "YAML Pipeline Anatomy: Stages, Jobs, and Steps Hierarchy",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "An engineer structures an enterprise Azure Pipeline in YAML. What is the correct structural hierarchy from top-level container down to granular tasks?",
    options: [
      { id: 'A', text: "Pipeline → Tasks → Environments → Deployments" },
      { id: 'B', text: "Pipeline → Jobs → Stages → Steps" },
      { id: 'C', text: "Pipeline → Stages → Jobs → Steps (Tasks/Scripts)" },
      { id: 'D', text: "Pipeline → Steps → Jobs → Stages" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Pipelines YAML follows a strict hierarchy: a Pipeline contains one or more Stages (major milestones like Build, Test, Deploy), each Stage contains one or more Jobs (units of work run on an agent), and each Job contains an ordered sequence of Steps (tasks or scripts).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/pipeline",
    tags: ["YAML", "Pipelines", "Stages", "Jobs"]
  },
  {
    id: "azure-az400-82",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Trigger Filters: Path and Branch Inclusions/Exclusions",
    scenario: "A monorepo has two applications: `/src/frontend/` and `/src/backend/`. The frontend pipeline should trigger on pushes to `main` only when frontend files are modified, and ignore markdown documentation.",
    question: "Which trigger block configuration implements this filtering?",
    options: [
      { id: 'A', text: "trigger: [main]" },
      { id: 'B', text: "trigger: none" },
      { id: 'C', text: "trigger: { paths: ['*'] }" },
      { id: 'D', text: "trigger: { branches: { include: ['main'] }, paths: { include: ['src/frontend/*'], exclude: ['**/*.md'] } }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Azure Pipelines YAML, the `trigger` block supports granular branch and path filters: `include:` specifies matching directory paths, and `exclude:` skips triggers for specified patterns like documentation updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#paths",
    tags: ["Triggers", "Path Filters", "Monorepo", "CI/CD"]
  },
  {
    id: "azure-az400-83",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "PR Triggers in Azure Pipelines YAML vs GitHub",
    scenario: "A developer configures `pr: [main]` in `azure-pipelines.yml` inside an Azure Repos Git repository, but notices PR builds do not trigger.",
    question: "Why does the YAML `pr:` block not trigger pull request builds on Azure Repos?",
    options: [
      { id: 'A', text: "YAML pipelines do not support pull requests" },
      { id: 'B', text: "Azure Repos requires paid add-ons for PR triggers" },
      { id: 'C', text: "Azure Repos ignores the YAML `pr:` block; pull request validation builds in Azure Repos must be configured as a Branch Policy on the target branch" },
      { id: 'D', text: "The developer must run the build manually" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "While GitHub uses the YAML `pr:` block to trigger pull request runs, Azure Repos enforces PR builds through Branch Policies: administrators must configure the pipeline as a Build Validation policy on the target branch.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/azure-repos-git#pr-triggers",
    tags: ["PR Triggers", "Branch Policies", "Azure Repos", "YAML"]
  },
  {
    id: "azure-az400-84",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Scheduled Triggers (Cron) with Batching",
    scenario: "A QA team requires a nightly regression test suite to run every weekday at 2:00 AM UTC against the main branch, but only if new code was committed since the last run.",
    question: "Which scheduled trigger configuration satisfies this requirement?",
    options: [
      { id: 'A', text: "trigger: nightly" },
      { id: 'B', text: "schedules: [ { cron: '0 2 * * 1-5', displayName: 'Nightly', branches: { include: ['main'] }, always: false } ]" },
      { id: 'C', text: "pool: nightly-pool" },
      { id: 'D', text: "schedules: [ { cron: '* * * * *', always: true } ]" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `schedules` block accepts standard 5-part cron syntax. Setting `always: false` ensures the scheduled pipeline only triggers if code changes were committed since the previous scheduled execution, avoiding wasteful test runs on idle code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/scheduled-triggers",
    tags: ["Cron", "Scheduled Triggers", "Optimization", "Pipelines"]
  },
  {
    id: "azure-az400-85",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Pipeline Templates: Extends vs Includes",
    scenario: "An enterprise central security team wants to enforce mandatory compliance scans on all application pipelines without allowing individual application teams to remove or bypass the security stages.",
    question: "Which YAML template pattern should the enterprise mandate?",
    options: [
      { id: 'A', text: "Running security scans after production deployment" },
      { id: 'B', text: "The `extends:` template syntax (defining an outer pipeline structure that applications extend)" },
      { id: 'C', text: "Copying security tasks into every repository" },
      { id: 'D', text: "The `includes:` step template syntax" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `extends:` keyword in Azure Pipelines allows a central repository to define an authoritative pipeline template (with mandatory pre-build, security scanning, and approval stages). Application repos extend this template, preventing developers from bypassing required compliance steps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates#extend-from-a-template",
    tags: ["Templates", "extends", "Compliance", "Governance"]
  },
  {
    id: "azure-az400-86",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Passing Variables Between Jobs and Stages",
    scenario: "Job A in Stage 1 calculates an artifact semantic version number (`OutputVersion`). Job B in Stage 2 needs to consume this value.",
    question: "How must the variable be emitted in Job A and referenced in Job B?",
    options: [
      { id: 'A', text: "Variables cannot be passed across stages" },
      { id: 'B', text: "Set an operating system environment variable export OutputVersion=1.2.3" },
      { id: 'C', text: "Write the variable to a local text file on the agent disk" },
      { id: 'D', text: "Emit via `echo '##vso[task.setvariable variable=OutputVersion;isOutput=true]1.2.3'` and reference as `$[stageDependencies.Stage1.JobA.outputs['StepName.OutputVersion']]`" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To pass variables across jobs or stages in Azure Pipelines, the producer task uses the `task.setvariable` logging command with `isOutput=true`. Downstream jobs reference it via dependency output expressions (`stageDependencies.[Stage].[Job].outputs['[Step].[Var]']`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/set-variables-scripts",
    tags: ["Variables", "Logging Commands", "Cross-Stage", "YAML"]
  },
  {
    id: "azure-az400-87",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Caching: Accelerating Dependency Installation",
    scenario: "A Node.js build pipeline spends 7 minutes running `npm install` on every build. The `package-lock.json` file rarely changes.",
    question: "Which pipeline task should be added to cache `~/.npm` across runs?",
    options: [
      { id: 'A', text: "CopyFiles@2 task" },
      { id: 'B', text: "PublishBuildArtifacts@1 task" },
      { id: 'C', text: "ArchiveFiles@2 task" },
      { id: 'D', text: "Cache@2 task with key: 'npm | \"$(Agent.OS)\" | package-lock.json' and path: $(npm_config_cache)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Cache@2` task stores and restores package caches based on a dynamic hash key. If `package-lock.json` has not changed, the cache hits and restores packages in seconds, bypassing long network installations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching",
    tags: ["Pipeline Caching", "Cache@2", "npm", "Performance"]
  },
  {
    id: "azure-az400-88",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Publishing Code Coverage and Test Results",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "A .NET CI build executes unit tests with coverlet. How should test results and code coverage metrics be published so they appear natively in the Azure DevOps build summary tabs?",
    options: [
      { id: 'A', text: "PowerShell script writing to console" },
      { id: 'B', text: "echo ##vso[task.logissue]" },
      { id: 'C', text: "PublishTestResults@2 (for TRX/JUnit) and PublishCodeCoverageResults@2 (for Cobertura/JaCoCo)" },
      { id: 'D', text: "CopyFiles@2 and PublishBuildArtifacts@1" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `PublishTestResults@2` and `PublishCodeCoverageResults@2` tasks ingest standardized test and coverage XML reports, populating interactive 'Tests' and 'Code Coverage' summary tabs with trend charts directly inside the Azure DevOps pipeline UI.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/publish-test-results-v2",
    tags: ["Test Results", "Code Coverage", "Reporting", "CI/CD"]
  },
  {
    id: "azure-az400-89",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Publishing Build Artifacts: PublishPipelineArtifact vs PublishBuildArtifacts",
    scenario: "An enterprise DevOps engineering team is implementing automated CI/CD pipelines, source control governance, and continuous delivery on Microsoft Azure.",
    question: "Which modern pipeline task is recommended by Microsoft for high-speed artifact publishing in YAML pipelines?",
    options: [
      { id: 'A', text: "PublishBuildArtifacts@1 (legacy)" },
      { id: 'B', text: "FTPUpload@2" },
      { id: 'C', text: "PublishPipelineArtifact@1" },
      { id: 'D', text: "CopyFiles@2" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`PublishPipelineArtifact@1` is the modern, high-performance artifact publishing task designed specifically for YAML pipelines, offering significantly faster multi-threaded upload and download speeds compared to legacy `PublishBuildArtifacts`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifacts", "PublishPipelineArtifact", "Pipelines", "Performance"]
  },
  {
    id: "azure-az400-90",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Condition Expressions: Succeeded, Failed, and Always",
    scenario: "A cleanup task in an Azure Pipeline must execute to deallocate cloud resources even if previous compilation or testing tasks failed.",
    question: "Which condition expression must be declared on the cleanup step?",
    options: [
      { id: 'A', text: "condition: failed()" },
      { id: 'B', text: "condition: always()" },
      { id: 'C', text: "condition: succeeded()" },
      { id: 'D', text: "condition: succeededOrFailed()" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `always()` condition guarantees that a job or step runs regardless of whether prior tasks succeeded or failed, making it essential for teardown, resource cleanup, and diagnostic log collection steps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/conditions",
    tags: ["Conditions", "always()", "Error Handling", "Pipelines"]
  },
  {
    id: "azure-az400-91",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Canceling Pipeline Execution: Timeouts",
    scenario: "A runaway integration test suite hangs indefinitely on an agent, blocking runner concurrency for 6 hours until hitting the organization limit.",
    question: "Which property should be configured on the job to enforce a strict 30-minute execution ceiling?",
    options: [
      { id: 'A', text: "retryCountOnTaskFailure: 0" },
      { id: 'B', text: "timeoutInMinutes: 30" },
      { id: 'C', text: "cancelTimeoutInMinutes: 5" },
      { id: 'D', text: "pool: fast-pool" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting `timeoutInMinutes: 30` instructs the Azure Pipelines agent to terminate the job if it exceeds 30 minutes, preventing hung integration tests from consuming concurrent runner pools.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/phases#timeouts",
    tags: ["Timeouts", "timeoutInMinutes", "Resource Management", "Runners"]
  },
  {
    id: "azure-az400-92",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Matrix Strategies for Cross-Platform Testing",
    scenario: "A library author wants to execute automated unit tests across three operating systems (Ubuntu, Windows, macOS) and two Node versions (18, 20) simultaneously.",
    question: "How should the strategy block be configured in the YAML job?",
    options: [
      { id: 'A', text: "strategy: { matrix: { Linux_Node18: { image: 'ubuntu-latest', node: '18' }, Windows_Node20: { image: 'windows-latest', node: '20' } } }" },
      { id: 'B', text: "Run three separate pipeline files sequentially" },
      { id: 'C', text: "loop: [ubuntu, windows, macos]" },
      { id: 'D', text: "pool: all-platforms" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `strategy.matrix` configuration spins up multiple parallel job instances, each receiving distinct matrix variable combinations (OS image, runtime version), enabling comprehensive cross-platform validation concurrently.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/phases#matrix-strategies",
    tags: ["Matrix", "Parallelism", "Cross-Platform", "Testing"]
  },
  {
    id: "azure-az400-93",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators: Injecting Security Tasks Organization-Wide",
    scenario: "An enterprise security team wants to automatically inject a mandatory vulnerability scanning step into every build pipeline in the organization without modifying hundreds of individual YAML files.",
    question: "Which Azure DevOps extensibility feature enables global task injection?",
    options: [
      { id: 'A', text: "Branch policies" },
      { id: 'B', text: "Custom Pipeline Decorators" },
      { id: 'C', text: "Service Hooks" },
      { id: 'D', text: "Task Groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Custom Pipeline Decorators are custom extensions installed at the organization level. They inject steps before or after pipeline jobs automatically across all pipelines in all projects, ensuring universal security scanning enforcement.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/pipeline-decorator",
    tags: ["Pipeline Decorator", "Extensibility", "Governance", "Security"]
  },
  {
    id: "azure-az400-94",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups Linked to Azure Key Vault",
    scenario: "A production release pipeline requires access to database passwords. The security team mandates that secrets must be stored in Azure Key Vault and never in pipeline YAML or plaintext files.",
    question: "How can Azure Pipelines securely access Key Vault secrets as pipeline variables?",
    options: [
      { id: 'A', text: "Paste the database password in the commit message" },
      { id: 'B', text: "Create a Variable Group in Azure Pipelines Library, enable 'Link secrets from an Azure key vault', select the Azure service connection, and map the secrets" },
      { id: 'C', text: "Write a bash script that downloads the secrets over an unencrypted HTTP endpoint" },
      { id: 'D', text: "Hardcode the secrets as clear text inside azure-pipelines.yml" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Pipelines Library Variable Groups can link directly to an Azure Key Vault via an authorized Azure Resource Manager Service Connection. Secrets are retrieved dynamically at runtime and automatically masked in build logs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Key Vault", "Secrets", "Security"]
  },
  {
    id: "azure-az400-95",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Secret Variable Masking in Console Logs",
    scenario: "A pipeline script accidentally runs `echo $(DatabasePassword)`. The variable was created as a secret variable in the pipeline UI.",
    question: "How does Azure Pipelines handle the secret string in the console build log?",
    options: [
      { id: 'A', text: "The pipeline aborts immediately with a compiler error" },
      { id: 'B', text: "The agent machine is formatted" },
      { id: 'C', text: "The password is printed in plaintext" },
      { id: 'D', text: "Azure Pipelines automatically replaces the secret value with asterisks (***) in the console log" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Pipelines automatically sanitizes console logs by masking the values of all declared secret variables with `***`, preventing accidental credential exposure in build logs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/set-secret-variables",
    tags: ["Secrets", "Masking", "Console Logs", "Security"]
  },
  {
    id: "azure-az400-96",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Resource Triggers: Triggering on Pipeline Completion",
    scenario: "An end-to-end integration test pipeline should trigger automatically whenever the core API build pipeline (`MyApiBuild`) successfully completes a build on the `main` branch.",
    question: "Which YAML resource definition configures this pipeline-chaining trigger?",
    options: [
      { id: 'A', text: "resources: { pipelines: [ { pipeline: api-build, source: MyApiBuild, trigger: { branches: ['main'] } } ] }" },
      { id: 'B', text: "pool: api-pool" },
      { id: 'C', text: "trigger: pipeline(MyApiBuild)" },
      { id: 'D', text: "dependsOn: MyApiBuild" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using `resources.pipelines` allows one pipeline to declare a dependency on another pipeline's artifacts and completion events. Setting `trigger: { branches: ['main'] }` automatically kicks off downstream test pipelines upon upstream build completion.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Resources", "Chaining", "Triggers", "CI/CD"]
  },
  {
    id: "azure-az400-97",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Container Jobs: Running Steps Inside Docker Containers",
    scenario: "A pipeline requires legacy Linux build tools and libraries that are not installed on standard hosted runners. The team maintains a custom Docker image (`mycorp/build-env:v1`).",
    question: "How can a YAML job be configured to run all its steps inside this container?",
    options: [
      { id: 'A', text: "Specify `container: mycorp/build-env:v1` at the job level" },
      { id: 'B', text: "Run docker run inside every script step manually" },
      { id: 'C', text: "Convert the project to Windows" },
      { id: 'D', text: "Install the tools using sudo apt-get on every run" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specifying `container: [image]` on a job instructs the agent to spin up the designated container image, mount the workspace, and execute all job steps directly inside the container environment, ensuring reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Containers", "Container Jobs", "Docker", "Runners"]
  },
  {
    id: "azure-az400-98",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Sidecar Containers in Pipelines: Service Containers",
    scenario: "An integration test suite requires a live Redis cache and PostgreSQL database running alongside the application tests on the runner.",
    question: "Which Azure Pipelines feature starts helper containers linked to the job over localhost?",
    options: [
      { id: 'A', text: "docker-compose in a background daemon" },
      { id: 'B', text: "Deploying live Azure SQL databases for every test" },
      { id: 'C', text: "Running mocks only" },
      { id: 'D', text: "services: { postgres: 'postgres:15', redis: 'redis:alpine' }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `services:` section in a YAML job defines service (sidecar) containers. The agent starts these containers before steps run and maps their networking ports to localhost, providing isolated databases or caches for integration testing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/service-containers",
    tags: ["Service Containers", "Sidecars", "Integration Testing", "Docker"]
  },
  {
    id: "azure-az400-99",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Restricting Job Token Permissions in Pipelines",
    scenario: "To adhere to the principle of least privilege, a pipeline that only compiles static CSS files should not have write access to Azure Repos or pull request APIs.",
    question: "Where can administrators restrict default `System.AccessToken` permissions organization-wide?",
    options: [
      { id: 'A', text: "In the git config file" },
      { id: 'B', text: "In the branch protection rules" },
      { id: 'C', text: "In package.json" },
      { id: 'D', text: "Project Settings → Pipelines → Settings → 'Limit job authorization scope to current project' and 'Protect access to repositories in YAML pipelines'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Pipelines project settings provide options to restrict the build service account's authorization scope strictly to the current project and prevent untrusted pipelines from accessing sensitive repositories.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/access-tokens",
    tags: ["AccessToken", "Security", "Least Privilege", "Governance"]
  },
  {
    id: "azure-az400-100",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Demand Matching on Self-Hosted Agent Pools",
    scenario: "A specific build job requires an agent with Visual Studio 2022 Enterprise and GPU acceleration installed.",
    question: "Which YAML property routes the job to agents with matching capabilities?",
    options: [
      { id: 'A', text: "pool: all" },
      { id: 'B', text: "demands: [ 'VisualStudio', 'GPU' ]" },
      { id: 'C', text: "requires: [ 'VisualStudio' ]" },
      { id: 'D', text: "tags: [ 'GPU' ]" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `demands:` block specifies agent capabilities (user-defined or system-discovered). The Azure Pipelines scheduler assigns the job only to self-hosted agents in the target pool that satisfy all declared demands.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Demands", "Agent Pools", "Capabilities", "Runners"]
  }
];

export default AZURE_AZ400_QUESTIONS_4;
