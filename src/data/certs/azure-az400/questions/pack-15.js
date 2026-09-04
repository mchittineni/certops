export const AZURE_AZ400_QUESTIONS_15 = [
  {
    id: "azure-az400-351",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Artifacts: Publish and Download: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Artifact Management to pass compiled application binaries from the `Build` stage to subsequent `Staging` and `Production` deployment stages in a multi-stage YAML pipeline.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Publishing and downloading pipeline artifacts across stages with PublishPipelineArtifact is under consideration.",
    options: [
      { id: 'A', text: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it." },
      { id: 'B', text: "Store compiled binaries in temporary agent local folders that are wiped between jobs." },
      { id: 'C', text: "Commit compiled binary executables directly to the Git source code repository." },
      { id: 'D', text: "Email compiled binaries between engineering team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it. Pipeline Artifacts are the recommended way to share files between stages in Azure Pipelines. The `publish` task uploads build outputs to Azure DevOps artifact storage, where subsequent stages and deployment jobs retrieve them using the `download` task, ensuring artifact immutability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifact Management", "Pipeline Artifacts", "Dr Failover"]
  },
  {
    id: "azure-az400-352",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Artifacts: Publish and Download: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Artifact Management to pass compiled application binaries from the `Build` stage to subsequent `Staging` and `Production` deployment stages in a multi-stage YAML pipeline.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Publishing and downloading pipeline artifacts across stages with PublishPipelineArtifact is under consideration.",
    options: [
      { id: 'A', text: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it." },
      { id: 'B', text: "Store compiled binaries in temporary agent local folders that are wiped between jobs." },
      { id: 'C', text: "Commit compiled binary executables directly to the Git source code repository." },
      { id: 'D', text: "Email compiled binaries between engineering team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it. Pipeline Artifacts are the recommended way to share files between stages in Azure Pipelines. The `publish` task uploads build outputs to Azure DevOps artifact storage, where subsequent stages and deployment jobs retrieve them using the `download` task, ensuring artifact immutability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifact Management", "Pipeline Artifacts", "High Load Scale"]
  },
  {
    id: "azure-az400-353",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Artifacts: Publish and Download: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Artifact Management to pass compiled application binaries from the `Build` stage to subsequent `Staging` and `Production` deployment stages in a multi-stage YAML pipeline.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Publishing and downloading pipeline artifacts across stages with PublishPipelineArtifact is under consideration.",
    options: [
      { id: 'A', text: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it." },
      { id: 'B', text: "Store compiled binaries in temporary agent local folders that are wiped between jobs." },
      { id: 'C', text: "Commit compiled binary executables directly to the Git source code repository." },
      { id: 'D', text: "Email compiled binaries between engineering team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it. Pipeline Artifacts are the recommended way to share files between stages in Azure Pipelines. The `publish` task uploads build outputs to Azure DevOps artifact storage, where subsequent stages and deployment jobs retrieve them using the `download` task, ensuring artifact immutability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifact Management", "Pipeline Artifacts", "Security Compliance"]
  },
  {
    id: "azure-az400-354",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Artifacts: Publish and Download: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Artifact Management to pass compiled application binaries from the `Build` stage to subsequent `Staging` and `Production` deployment stages in a multi-stage YAML pipeline.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Publishing and downloading pipeline artifacts across stages with PublishPipelineArtifact is under consideration.",
    options: [
      { id: 'A', text: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it." },
      { id: 'B', text: "Store compiled binaries in temporary agent local folders that are wiped between jobs." },
      { id: 'C', text: "Commit compiled binary executables directly to the Git source code repository." },
      { id: 'D', text: "Email compiled binaries between engineering team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it. Pipeline Artifacts are the recommended way to share files between stages in Azure Pipelines. The `publish` task uploads build outputs to Azure DevOps artifact storage, where subsequent stages and deployment jobs retrieve them using the `download` task, ensuring artifact immutability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifact Management", "Pipeline Artifacts", "Hybrid Migration"]
  },
  {
    id: "azure-az400-355",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Artifacts: Publish and Download: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Artifact Management to pass compiled application binaries from the `Build` stage to subsequent `Staging` and `Production` deployment stages in a multi-stage YAML pipeline.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Publishing and downloading pipeline artifacts across stages with PublishPipelineArtifact is under consideration.",
    options: [
      { id: 'A', text: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it." },
      { id: 'B', text: "Store compiled binaries in temporary agent local folders that are wiped between jobs." },
      { id: 'C', text: "Commit compiled binary executables directly to the Git source code repository." },
      { id: 'D', text: "Email compiled binaries between engineering team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `publish: $(Build.ArtifactStagingDirectory)` to publish a Pipeline Artifact, and `download: current` in deployment jobs to consume it. Pipeline Artifacts are the recommended way to share files between stages in Azure Pipelines. The `publish` task uploads build outputs to Azure DevOps artifact storage, where subsequent stages and deployment jobs retrieve them using the `download` task, ensuring artifact immutability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/artifacts/pipeline-artifacts",
    tags: ["Artifact Management", "Pipeline Artifacts", "Resilience Failure"]
  },
  {
    id: "azure-az400-356",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Environments and Approvals in Azure Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Environments to protect production deployments by requiring manual approval from designated release managers and business hour execution checks.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Targeting environments with approvals, checks, and deployment history is under consideration.",
    options: [
      { id: 'A', text: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps." },
      { id: 'B', text: "Write a sleep loop of 12 hours in a bash deployment script." },
      { id: 'C', text: "Delete the production deployment stage until approval is verbally granted." },
      { id: 'D', text: "Disable automated deployment and perform all production updates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps. Environments in Azure DevOps represent collection of target resources (Kubernetes, VMs). Configuring Approvals and Checks on an Environment pauses pipeline execution targeting that environment until specified reviewers approve or automated checks (business hours, branch control, REST API) pass.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Environments", "Dr Failover"]
  },
  {
    id: "azure-az400-357",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Environments and Approvals in Azure Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Environments to protect production deployments by requiring manual approval from designated release managers and business hour execution checks.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Targeting environments with approvals, checks, and deployment history is under consideration.",
    options: [
      { id: 'A', text: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps." },
      { id: 'B', text: "Write a sleep loop of 12 hours in a bash deployment script." },
      { id: 'C', text: "Delete the production deployment stage until approval is verbally granted." },
      { id: 'D', text: "Disable automated deployment and perform all production updates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps. Environments in Azure DevOps represent collection of target resources (Kubernetes, VMs). Configuring Approvals and Checks on an Environment pauses pipeline execution targeting that environment until specified reviewers approve or automated checks (business hours, branch control, REST API) pass.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Environments", "High Load Scale"]
  },
  {
    id: "azure-az400-358",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Environments and Approvals in Azure Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Environments to protect production deployments by requiring manual approval from designated release managers and business hour execution checks.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Targeting environments with approvals, checks, and deployment history is under consideration.",
    options: [
      { id: 'A', text: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps." },
      { id: 'B', text: "Write a sleep loop of 12 hours in a bash deployment script." },
      { id: 'C', text: "Delete the production deployment stage until approval is verbally granted." },
      { id: 'D', text: "Disable automated deployment and perform all production updates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps. Environments in Azure DevOps represent collection of target resources (Kubernetes, VMs). Configuring Approvals and Checks on an Environment pauses pipeline execution targeting that environment until specified reviewers approve or automated checks (business hours, branch control, REST API) pass.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Environments", "Security Compliance"]
  },
  {
    id: "azure-az400-359",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Environments and Approvals in Azure Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Environments to protect production deployments by requiring manual approval from designated release managers and business hour execution checks.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Targeting environments with approvals, checks, and deployment history is under consideration.",
    options: [
      { id: 'A', text: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps." },
      { id: 'B', text: "Write a sleep loop of 12 hours in a bash deployment script." },
      { id: 'C', text: "Delete the production deployment stage until approval is verbally granted." },
      { id: 'D', text: "Disable automated deployment and perform all production updates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps. Environments in Azure DevOps represent collection of target resources (Kubernetes, VMs). Configuring Approvals and Checks on an Environment pauses pipeline execution targeting that environment until specified reviewers approve or automated checks (business hours, branch control, REST API) pass.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Environments", "Hybrid Migration"]
  },
  {
    id: "azure-az400-360",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Environments and Approvals in Azure Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Environments to protect production deployments by requiring manual approval from designated release managers and business hour execution checks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Targeting environments with approvals, checks, and deployment history is under consideration.",
    options: [
      { id: 'A', text: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps." },
      { id: 'B', text: "Write a sleep loop of 12 hours in a bash deployment script." },
      { id: 'C', text: "Delete the production deployment stage until approval is verbally granted." },
      { id: 'D', text: "Disable automated deployment and perform all production updates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an `environment: 'production'` in the deployment job and configure Approvals and Business Hours checks on the Environment in Azure DevOps. Environments in Azure DevOps represent collection of target resources (Kubernetes, VMs). Configuring Approvals and Checks on an Environment pauses pipeline execution targeting that environment until specified reviewers approve or automated checks (business hours, branch control, REST API) pass.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/environments",
    tags: ["Environments", "Environments", "Resilience Failure"]
  },
  {
    id: "azure-az400-361",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling, Canary, and Blue-Green: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Deployment Strategies to deploy an update to a fleet of virtual machines in batches of 25% while monitoring health checks between batches.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Configuring runOnce, rolling, and canary deployment strategies in deployment jobs is under consideration.",
    options: [
      { id: 'A', text: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks." },
      { id: 'B', text: "Deploy all instances simultaneously using a standard script without health checks." },
      { id: 'C', text: "Terminate the entire fleet of virtual machines before deploying new code." },
      { id: 'D', text: "Deploy to one machine and let the remaining 99 machines run old code permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks. Deployment jobs support dedicated strategies: `runOnce` (all targets at once), `rolling` (updates targets in batches defined by `maxParallel`), and `canary` (deploys to a small percentage first). Strategy lifecycle hooks (`preDeploy`, `deploy`, `routeTraffic`, `postRouteTraffic`) enable automated validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs",
    tags: ["Deployment Strategies", "Deployment Strategies", "Dr Failover"]
  },
  {
    id: "azure-az400-362",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling, Canary, and Blue-Green: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Deployment Strategies to deploy an update to a fleet of virtual machines in batches of 25% while monitoring health checks between batches.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Configuring runOnce, rolling, and canary deployment strategies in deployment jobs is under consideration.",
    options: [
      { id: 'A', text: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks." },
      { id: 'B', text: "Deploy all instances simultaneously using a standard script without health checks." },
      { id: 'C', text: "Terminate the entire fleet of virtual machines before deploying new code." },
      { id: 'D', text: "Deploy to one machine and let the remaining 99 machines run old code permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks. Deployment jobs support dedicated strategies: `runOnce` (all targets at once), `rolling` (updates targets in batches defined by `maxParallel`), and `canary` (deploys to a small percentage first). Strategy lifecycle hooks (`preDeploy`, `deploy`, `routeTraffic`, `postRouteTraffic`) enable automated validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs",
    tags: ["Deployment Strategies", "Deployment Strategies", "High Load Scale"]
  },
  {
    id: "azure-az400-363",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling, Canary, and Blue-Green: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Deployment Strategies to deploy an update to a fleet of virtual machines in batches of 25% while monitoring health checks between batches.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Configuring runOnce, rolling, and canary deployment strategies in deployment jobs is under consideration.",
    options: [
      { id: 'A', text: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks." },
      { id: 'B', text: "Deploy all instances simultaneously using a standard script without health checks." },
      { id: 'C', text: "Terminate the entire fleet of virtual machines before deploying new code." },
      { id: 'D', text: "Deploy to one machine and let the remaining 99 machines run old code permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks. Deployment jobs support dedicated strategies: `runOnce` (all targets at once), `rolling` (updates targets in batches defined by `maxParallel`), and `canary` (deploys to a small percentage first). Strategy lifecycle hooks (`preDeploy`, `deploy`, `routeTraffic`, `postRouteTraffic`) enable automated validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs",
    tags: ["Deployment Strategies", "Deployment Strategies", "Security Compliance"]
  },
  {
    id: "azure-az400-364",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling, Canary, and Blue-Green: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Deployment Strategies to deploy an update to a fleet of virtual machines in batches of 25% while monitoring health checks between batches.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Configuring runOnce, rolling, and canary deployment strategies in deployment jobs is under consideration.",
    options: [
      { id: 'A', text: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks." },
      { id: 'B', text: "Deploy all instances simultaneously using a standard script without health checks." },
      { id: 'C', text: "Terminate the entire fleet of virtual machines before deploying new code." },
      { id: 'D', text: "Deploy to one machine and let the remaining 99 machines run old code permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks. Deployment jobs support dedicated strategies: `runOnce` (all targets at once), `rolling` (updates targets in batches defined by `maxParallel`), and `canary` (deploys to a small percentage first). Strategy lifecycle hooks (`preDeploy`, `deploy`, `routeTraffic`, `postRouteTraffic`) enable automated validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs",
    tags: ["Deployment Strategies", "Deployment Strategies", "Hybrid Migration"]
  },
  {
    id: "azure-az400-365",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Deployment Strategies: Rolling, Canary, and Blue-Green: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Deployment Strategies to deploy an update to a fleet of virtual machines in batches of 25% while monitoring health checks between batches.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring runOnce, rolling, and canary deployment strategies in deployment jobs is under consideration.",
    options: [
      { id: 'A', text: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks." },
      { id: 'B', text: "Deploy all instances simultaneously using a standard script without health checks." },
      { id: 'C', text: "Terminate the entire fleet of virtual machines before deploying new code." },
      { id: 'D', text: "Deploy to one machine and let the remaining 99 machines run old code permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `deployment` job targeting an environment with `strategy: rolling: maxParallel: 25%` and health verification hooks. Deployment jobs support dedicated strategies: `runOnce` (all targets at once), `rolling` (updates targets in batches defined by `maxParallel`), and `canary` (deploys to a small percentage first). Strategy lifecycle hooks (`preDeploy`, `deploy`, `routeTraffic`, `postRouteTraffic`) enable automated validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs",
    tags: ["Deployment Strategies", "Deployment Strategies", "Resilience Failure"]
  },
  {
    id: "azure-az400-366",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Templates for Reusability and Governance: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Pipeline Templates to standardize build and security scanning steps across 200 microservice repositories while maintaining centralized template governance.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Step, job, and stage templates for standardized, reusable pipeline definitions is under consideration.",
    options: [
      { id: 'A', text: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`." },
      { id: 'B', text: "Copy-paste 500 lines of identical YAML code across all 200 repositories." },
      { id: 'C', text: "Allow each team to write completely unstructured deployment scripts." },
      { id: 'D', text: "Hardcode security scanning commands in each developer's personal shell profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`. YAML templates allow reusing steps, jobs, or entire stages across repositories. Centralizing templates enables organizations to mandate security scanning, compliance checks, and build standards across hundreds of repositories from a single, peer-reviewed source of truth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates",
    tags: ["Pipeline Templates", "Pipeline Templates", "Dr Failover"]
  },
  {
    id: "azure-az400-367",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Templates for Reusability and Governance: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Pipeline Templates to standardize build and security scanning steps across 200 microservice repositories while maintaining centralized template governance.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Step, job, and stage templates for standardized, reusable pipeline definitions is under consideration.",
    options: [
      { id: 'A', text: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`." },
      { id: 'B', text: "Copy-paste 500 lines of identical YAML code across all 200 repositories." },
      { id: 'C', text: "Allow each team to write completely unstructured deployment scripts." },
      { id: 'D', text: "Hardcode security scanning commands in each developer's personal shell profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`. YAML templates allow reusing steps, jobs, or entire stages across repositories. Centralizing templates enables organizations to mandate security scanning, compliance checks, and build standards across hundreds of repositories from a single, peer-reviewed source of truth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates",
    tags: ["Pipeline Templates", "Pipeline Templates", "High Load Scale"]
  },
  {
    id: "azure-az400-368",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Templates for Reusability and Governance: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Pipeline Templates to standardize build and security scanning steps across 200 microservice repositories while maintaining centralized template governance.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Step, job, and stage templates for standardized, reusable pipeline definitions is under consideration.",
    options: [
      { id: 'A', text: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`." },
      { id: 'B', text: "Copy-paste 500 lines of identical YAML code across all 200 repositories." },
      { id: 'C', text: "Allow each team to write completely unstructured deployment scripts." },
      { id: 'D', text: "Hardcode security scanning commands in each developer's personal shell profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`. YAML templates allow reusing steps, jobs, or entire stages across repositories. Centralizing templates enables organizations to mandate security scanning, compliance checks, and build standards across hundreds of repositories from a single, peer-reviewed source of truth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates",
    tags: ["Pipeline Templates", "Pipeline Templates", "Security Compliance"]
  },
  {
    id: "azure-az400-369",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Templates for Reusability and Governance: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Pipeline Templates to standardize build and security scanning steps across 200 microservice repositories while maintaining centralized template governance.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Step, job, and stage templates for standardized, reusable pipeline definitions is under consideration.",
    options: [
      { id: 'A', text: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`." },
      { id: 'B', text: "Copy-paste 500 lines of identical YAML code across all 200 repositories." },
      { id: 'C', text: "Allow each team to write completely unstructured deployment scripts." },
      { id: 'D', text: "Hardcode security scanning commands in each developer's personal shell profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`. YAML templates allow reusing steps, jobs, or entire stages across repositories. Centralizing templates enables organizations to mandate security scanning, compliance checks, and build standards across hundreds of repositories from a single, peer-reviewed source of truth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates",
    tags: ["Pipeline Templates", "Pipeline Templates", "Hybrid Migration"]
  },
  {
    id: "azure-az400-370",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Templates for Reusability and Governance: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Pipeline Templates to standardize build and security scanning steps across 200 microservice repositories while maintaining centralized template governance.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Step, job, and stage templates for standardized, reusable pipeline definitions is under consideration.",
    options: [
      { id: 'A', text: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`." },
      { id: 'B', text: "Copy-paste 500 lines of identical YAML code across all 200 repositories." },
      { id: 'C', text: "Allow each team to write completely unstructured deployment scripts." },
      { id: 'D', text: "Hardcode security scanning commands in each developer's personal shell profile." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author centralized YAML templates in a central governance repository and reference them in microservice pipelines using `template: steps.yml@templates-repo`. YAML templates allow reusing steps, jobs, or entire stages across repositories. Centralizing templates enables organizations to mandate security scanning, compliance checks, and build standards across hundreds of repositories from a single, peer-reviewed source of truth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/templates",
    tags: ["Pipeline Templates", "Pipeline Templates", "Resilience Failure"]
  },
  {
    id: "azure-az400-371",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups and Azure Key Vault Integration: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Variable Groups to inject production database connection strings and third-party API keys securely into pipelines without exposing secret values in plaintext YAML.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Linking Azure Key Vault secrets to Azure Pipelines Variable Groups is under consideration.",
    options: [
      { id: 'A', text: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection." },
      { id: 'B', text: "Store secrets in plaintext variables committed to the Git repository." },
      { id: 'C', text: "Echo secret tokens to build logs to verify they exist." },
      { id: 'D', text: "Pass secret passwords as plaintext command-line arguments in scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection. Variable Groups can link directly to an Azure Key Vault. When linked, secret keys in the vault become available as pipeline variables. The values are retrieved securely at runtime and automatically masked (`***`) in build logs, eliminating credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Variable Groups", "Dr Failover"]
  },
  {
    id: "azure-az400-372",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups and Azure Key Vault Integration: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Variable Groups to inject production database connection strings and third-party API keys securely into pipelines without exposing secret values in plaintext YAML.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Linking Azure Key Vault secrets to Azure Pipelines Variable Groups is under consideration.",
    options: [
      { id: 'A', text: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection." },
      { id: 'B', text: "Store secrets in plaintext variables committed to the Git repository." },
      { id: 'C', text: "Echo secret tokens to build logs to verify they exist." },
      { id: 'D', text: "Pass secret passwords as plaintext command-line arguments in scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection. Variable Groups can link directly to an Azure Key Vault. When linked, secret keys in the vault become available as pipeline variables. The values are retrieved securely at runtime and automatically masked (`***`) in build logs, eliminating credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Variable Groups", "High Load Scale"]
  },
  {
    id: "azure-az400-373",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups and Azure Key Vault Integration: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Variable Groups to inject production database connection strings and third-party API keys securely into pipelines without exposing secret values in plaintext YAML.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Linking Azure Key Vault secrets to Azure Pipelines Variable Groups is under consideration.",
    options: [
      { id: 'A', text: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection." },
      { id: 'B', text: "Store secrets in plaintext variables committed to the Git repository." },
      { id: 'C', text: "Echo secret tokens to build logs to verify they exist." },
      { id: 'D', text: "Pass secret passwords as plaintext command-line arguments in scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection. Variable Groups can link directly to an Azure Key Vault. When linked, secret keys in the vault become available as pipeline variables. The values are retrieved securely at runtime and automatically masked (`***`) in build logs, eliminating credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Variable Groups", "Security Compliance"]
  },
  {
    id: "azure-az400-374",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups and Azure Key Vault Integration: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Variable Groups to inject production database connection strings and third-party API keys securely into pipelines without exposing secret values in plaintext YAML.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Linking Azure Key Vault secrets to Azure Pipelines Variable Groups is under consideration.",
    options: [
      { id: 'A', text: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection." },
      { id: 'B', text: "Store secrets in plaintext variables committed to the Git repository." },
      { id: 'C', text: "Echo secret tokens to build logs to verify they exist." },
      { id: 'D', text: "Pass secret passwords as plaintext command-line arguments in scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection. Variable Groups can link directly to an Azure Key Vault. When linked, secret keys in the vault become available as pipeline variables. The values are retrieved securely at runtime and automatically masked (`***`) in build logs, eliminating credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Variable Groups", "Hybrid Migration"]
  },
  {
    id: "azure-az400-375",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Variable Groups and Azure Key Vault Integration: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Variable Groups to inject production database connection strings and third-party API keys securely into pipelines without exposing secret values in plaintext YAML.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Linking Azure Key Vault secrets to Azure Pipelines Variable Groups is under consideration.",
    options: [
      { id: 'A', text: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection." },
      { id: 'B', text: "Store secrets in plaintext variables committed to the Git repository." },
      { id: 'C', text: "Echo secret tokens to build logs to verify they exist." },
      { id: 'D', text: "Pass secret passwords as plaintext command-line arguments in scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Variable Group in Azure DevOps linked directly to an Azure Key Vault, authorizing the pipeline service connection. Variable Groups can link directly to an Azure Key Vault. When linked, secret keys in the vault become available as pipeline variables. The values are retrieved securely at runtime and automatically masked (`***`) in build logs, eliminating credential leakage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups#link-secrets-from-an-azure-key-vault",
    tags: ["Variable Groups", "Variable Groups", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_15;
