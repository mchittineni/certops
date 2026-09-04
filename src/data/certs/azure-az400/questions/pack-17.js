export const AZURE_AZ400_QUESTIONS_17 = [
  {
    id: "azure-az400-401",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Infrastructure Deployment with Bicep and Terraform in CI/CD: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates IaC Pipelines to validate and preview infrastructure changes in pull requests before automatically deploying them upon merge to the main branch.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Automating Bicep and Terraform validation, what-if/plan, and deployment in pipelines is under consideration.",
    options: [
      { id: 'A', text: "Run deployment scripts with manual confirmation directly from developer laptops." },
      { id: 'B', text: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main." },
      { id: 'C', text: "Apply unvalidated infrastructure templates directly to production without previews." },
      { id: 'D', text: "Disable infrastructure as code and configure Azure resources via the portal." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main. Modern IaC pipelines execute automated previews during pull request validation: `what-if` for Bicep/ARM or `terraform plan` for Terraform. Reviewers inspect proposed infrastructure changes in the PR, and the pipeline applies the changes automatically upon PR approval and merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cli#preview-changes",
    tags: ["IaC Pipelines", "IaC Pipelines", "Dr Failover"]
  },
  {
    id: "azure-az400-402",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Infrastructure Deployment with Bicep and Terraform in CI/CD: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates IaC Pipelines to validate and preview infrastructure changes in pull requests before automatically deploying them upon merge to the main branch.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Automating Bicep and Terraform validation, what-if/plan, and deployment in pipelines is under consideration.",
    options: [
      { id: 'A', text: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main." },
      { id: 'B', text: "Apply unvalidated infrastructure templates directly to production without previews." },
      { id: 'C', text: "Run deployment scripts with manual confirmation directly from developer laptops." },
      { id: 'D', text: "Disable infrastructure as code and configure Azure resources via the portal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main. Modern IaC pipelines execute automated previews during pull request validation: `what-if` for Bicep/ARM or `terraform plan` for Terraform. Reviewers inspect proposed infrastructure changes in the PR, and the pipeline applies the changes automatically upon PR approval and merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cli#preview-changes",
    tags: ["IaC Pipelines", "IaC Pipelines", "High Load Scale"]
  },
  {
    id: "azure-az400-403",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Infrastructure Deployment with Bicep and Terraform in CI/CD: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates IaC Pipelines to validate and preview infrastructure changes in pull requests before automatically deploying them upon merge to the main branch.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Automating Bicep and Terraform validation, what-if/plan, and deployment in pipelines is under consideration.",
    options: [
      { id: 'A', text: "Run deployment scripts with manual confirmation directly from developer laptops." },
      { id: 'B', text: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main." },
      { id: 'C', text: "Disable infrastructure as code and configure Azure resources via the portal." },
      { id: 'D', text: "Apply unvalidated infrastructure templates directly to production without previews." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main. Modern IaC pipelines execute automated previews during pull request validation: `what-if` for Bicep/ARM or `terraform plan` for Terraform. Reviewers inspect proposed infrastructure changes in the PR, and the pipeline applies the changes automatically upon PR approval and merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cli#preview-changes",
    tags: ["IaC Pipelines", "IaC Pipelines", "Security Compliance"]
  },
  {
    id: "azure-az400-404",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Infrastructure Deployment with Bicep and Terraform in CI/CD: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates IaC Pipelines to validate and preview infrastructure changes in pull requests before automatically deploying them upon merge to the main branch.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Automating Bicep and Terraform validation, what-if/plan, and deployment in pipelines is under consideration.",
    options: [
      { id: 'A', text: "Disable infrastructure as code and configure Azure resources via the portal." },
      { id: 'B', text: "Run deployment scripts with manual confirmation directly from developer laptops." },
      { id: 'C', text: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main." },
      { id: 'D', text: "Apply unvalidated infrastructure templates directly to production without previews." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main. Modern IaC pipelines execute automated previews during pull request validation: `what-if` for Bicep/ARM or `terraform plan` for Terraform. Reviewers inspect proposed infrastructure changes in the PR, and the pipeline applies the changes automatically upon PR approval and merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cli#preview-changes",
    tags: ["IaC Pipelines", "IaC Pipelines", "Hybrid Migration"]
  },
  {
    id: "azure-az400-405",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Infrastructure Deployment with Bicep and Terraform in CI/CD: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates IaC Pipelines to validate and preview infrastructure changes in pull requests before automatically deploying them upon merge to the main branch.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Automating Bicep and Terraform validation, what-if/plan, and deployment in pipelines is under consideration.",
    options: [
      { id: 'A', text: "Run deployment scripts with manual confirmation directly from developer laptops." },
      { id: 'B', text: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main." },
      { id: 'C', text: "Disable infrastructure as code and configure Azure resources via the portal." },
      { id: 'D', text: "Apply unvalidated infrastructure templates directly to production without previews." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `az deployment sub what-if` (or `terraform plan`) during pull request validation, and execute deployment only after merge to main. Modern IaC pipelines execute automated previews during pull request validation: `what-if` for Bicep/ARM or `terraform plan` for Terraform. Reviewers inspect proposed infrastructure changes in the PR, and the pipeline applies the changes automatically upon PR approval and merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cli#preview-changes",
    tags: ["IaC Pipelines", "IaC Pipelines", "Resilience Failure"]
  },
  {
    id: "azure-az400-406",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker and Kubernetes Deployments with Helm in Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Container Delivery to automate container building, pushing to Azure Container Registry (ACR), and deploying to Azure Kubernetes Service (AKS) using Helm.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Packaging container images with Helm charts and deploying to AKS via pipelines is under consideration.",
    options: [
      { id: 'A', text: "Manually execute `kubectl apply` commands over an SSH connection to an AKS node." },
      { id: 'B', text: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS." },
      { id: 'C', text: "Reinstall the AKS cluster for every new application version." },
      { id: 'D', text: "Bake application secrets into the container image and deploy using raw manifests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS. Standard container delivery pipelines in Azure DevOps use `Docker@2` to build and push tagged container images to Azure Container Registry (ACR). Next, the `HelmDeploy@0` task packages the manifests and executes `helm upgrade --install` against the AKS cluster via an authorized service connection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/kubernetes/aks-template",
    tags: ["Container Delivery", "Container Delivery", "Dr Failover"]
  },
  {
    id: "azure-az400-407",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker and Kubernetes Deployments with Helm in Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Container Delivery to automate container building, pushing to Azure Container Registry (ACR), and deploying to Azure Kubernetes Service (AKS) using Helm.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Packaging container images with Helm charts and deploying to AKS via pipelines is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the AKS cluster for every new application version." },
      { id: 'B', text: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS." },
      { id: 'C', text: "Manually execute `kubectl apply` commands over an SSH connection to an AKS node." },
      { id: 'D', text: "Bake application secrets into the container image and deploy using raw manifests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS. Standard container delivery pipelines in Azure DevOps use `Docker@2` to build and push tagged container images to Azure Container Registry (ACR). Next, the `HelmDeploy@0` task packages the manifests and executes `helm upgrade --install` against the AKS cluster via an authorized service connection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/kubernetes/aks-template",
    tags: ["Container Delivery", "Container Delivery", "High Load Scale"]
  },
  {
    id: "azure-az400-408",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker and Kubernetes Deployments with Helm in Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Container Delivery to automate container building, pushing to Azure Container Registry (ACR), and deploying to Azure Kubernetes Service (AKS) using Helm.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Packaging container images with Helm charts and deploying to AKS via pipelines is under consideration.",
    options: [
      { id: 'A', text: "Manually execute `kubectl apply` commands over an SSH connection to an AKS node." },
      { id: 'B', text: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS." },
      { id: 'C', text: "Reinstall the AKS cluster for every new application version." },
      { id: 'D', text: "Bake application secrets into the container image and deploy using raw manifests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS. Standard container delivery pipelines in Azure DevOps use `Docker@2` to build and push tagged container images to Azure Container Registry (ACR). Next, the `HelmDeploy@0` task packages the manifests and executes `helm upgrade --install` against the AKS cluster via an authorized service connection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/kubernetes/aks-template",
    tags: ["Container Delivery", "Container Delivery", "Security Compliance"]
  },
  {
    id: "azure-az400-409",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker and Kubernetes Deployments with Helm in Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Container Delivery to automate container building, pushing to Azure Container Registry (ACR), and deploying to Azure Kubernetes Service (AKS) using Helm.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Packaging container images with Helm charts and deploying to AKS via pipelines is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the AKS cluster for every new application version." },
      { id: 'B', text: "Manually execute `kubectl apply` commands over an SSH connection to an AKS node." },
      { id: 'C', text: "Bake application secrets into the container image and deploy using raw manifests." },
      { id: 'D', text: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS. Standard container delivery pipelines in Azure DevOps use `Docker@2` to build and push tagged container images to Azure Container Registry (ACR). Next, the `HelmDeploy@0` task packages the manifests and executes `helm upgrade --install` against the AKS cluster via an authorized service connection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/kubernetes/aks-template",
    tags: ["Container Delivery", "Container Delivery", "Hybrid Migration"]
  },
  {
    id: "azure-az400-410",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Docker and Kubernetes Deployments with Helm in Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Container Delivery to automate container building, pushing to Azure Container Registry (ACR), and deploying to Azure Kubernetes Service (AKS) using Helm.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Packaging container images with Helm charts and deploying to AKS via pipelines is under consideration.",
    options: [
      { id: 'A', text: "Bake application secrets into the container image and deploy using raw manifests." },
      { id: 'B', text: "Manually execute `kubectl apply` commands over an SSH connection to an AKS node." },
      { id: 'C', text: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS." },
      { id: 'D', text: "Reinstall the AKS cluster for every new application version." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `Docker@2` to build and push images to ACR, and `HelmDeploy@0` to upgrade or install the Helm release targeting AKS. Standard container delivery pipelines in Azure DevOps use `Docker@2` to build and push tagged container images to Azure Container Registry (ACR). Next, the `HelmDeploy@0` task packages the manifests and executes `helm upgrade --install` against the AKS cluster via an authorized service connection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/kubernetes/aks-template",
    tags: ["Container Delivery", "Container Delivery", "Resilience Failure"]
  },
  {
    id: "azure-az400-411",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators for Organization-Wide Governance: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Pipeline Decorators to enforce a requirement that every pipeline in an Azure DevOps organization must run a security compliance scan without modifying individual pipeline YAML files.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Injecting mandatory security and auditing tasks into all pipeline jobs transparently is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job." },
      { id: 'B', text: "Block all pipelines from executing permanently." },
      { id: 'C', text: "Trust all development teams to voluntarily remember to include the security scanner." },
      { id: 'D', text: "Open pull requests against 500 individual repositories to manually paste the security task." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job. Pipeline Decorators are custom extensions in Azure DevOps that inject steps at the beginning or end of every job across an entire organization. This allows central security and platform teams to enforce mandatory scanning or telemetry injection transparently without modifying individual team YAML files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator",
    tags: ["Pipeline Decorators", "Pipeline Decorators", "Dr Failover"]
  },
  {
    id: "azure-az400-412",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators for Organization-Wide Governance: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Pipeline Decorators to enforce a requirement that every pipeline in an Azure DevOps organization must run a security compliance scan without modifying individual pipeline YAML files.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Injecting mandatory security and auditing tasks into all pipeline jobs transparently is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job." },
      { id: 'B', text: "Open pull requests against 500 individual repositories to manually paste the security task." },
      { id: 'C', text: "Trust all development teams to voluntarily remember to include the security scanner." },
      { id: 'D', text: "Block all pipelines from executing permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job. Pipeline Decorators are custom extensions in Azure DevOps that inject steps at the beginning or end of every job across an entire organization. This allows central security and platform teams to enforce mandatory scanning or telemetry injection transparently without modifying individual team YAML files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator",
    tags: ["Pipeline Decorators", "Pipeline Decorators", "High Load Scale"]
  },
  {
    id: "azure-az400-413",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators for Organization-Wide Governance: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Pipeline Decorators to enforce a requirement that every pipeline in an Azure DevOps organization must run a security compliance scan without modifying individual pipeline YAML files.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Injecting mandatory security and auditing tasks into all pipeline jobs transparently is under consideration.",
    options: [
      { id: 'A', text: "Open pull requests against 500 individual repositories to manually paste the security task." },
      { id: 'B', text: "Trust all development teams to voluntarily remember to include the security scanner." },
      { id: 'C', text: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job." },
      { id: 'D', text: "Block all pipelines from executing permanently." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job. Pipeline Decorators are custom extensions in Azure DevOps that inject steps at the beginning or end of every job across an entire organization. This allows central security and platform teams to enforce mandatory scanning or telemetry injection transparently without modifying individual team YAML files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator",
    tags: ["Pipeline Decorators", "Pipeline Decorators", "Security Compliance"]
  },
  {
    id: "azure-az400-414",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators for Organization-Wide Governance: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Pipeline Decorators to enforce a requirement that every pipeline in an Azure DevOps organization must run a security compliance scan without modifying individual pipeline YAML files.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Injecting mandatory security and auditing tasks into all pipeline jobs transparently is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job." },
      { id: 'B', text: "Block all pipelines from executing permanently." },
      { id: 'C', text: "Open pull requests against 500 individual repositories to manually paste the security task." },
      { id: 'D', text: "Trust all development teams to voluntarily remember to include the security scanner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job. Pipeline Decorators are custom extensions in Azure DevOps that inject steps at the beginning or end of every job across an entire organization. This allows central security and platform teams to enforce mandatory scanning or telemetry injection transparently without modifying individual team YAML files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator",
    tags: ["Pipeline Decorators", "Pipeline Decorators", "Hybrid Migration"]
  },
  {
    id: "azure-az400-415",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Decorators for Organization-Wide Governance: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Pipeline Decorators to enforce a requirement that every pipeline in an Azure DevOps organization must run a security compliance scan without modifying individual pipeline YAML files.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Injecting mandatory security and auditing tasks into all pipeline jobs transparently is under consideration.",
    options: [
      { id: 'A', text: "Trust all development teams to voluntarily remember to include the security scanner." },
      { id: 'B', text: "Open pull requests against 500 individual repositories to manually paste the security task." },
      { id: 'C', text: "Block all pipelines from executing permanently." },
      { id: 'D', text: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom Azure DevOps Pipeline Decorator that automatically injects the security scanning task into every pipeline job. Pipeline Decorators are custom extensions in Azure DevOps that inject steps at the beginning or end of every job across an entire organization. This allows central security and platform teams to enforce mandatory scanning or telemetry injection transparently without modifying individual team YAML files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-pipeline-decorator",
    tags: ["Pipeline Decorators", "Pipeline Decorators", "Resilience Failure"]
  },
  {
    id: "azure-az400-416",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automating Database Deployments with DACPAC and Liquibase: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Database CI/CD to deploy relational database schema updates to Azure SQL Database automatically in continuous delivery pipelines without data loss.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Automated relational database deployments using SQL Server DACPACs or Liquibase is under consideration.",
    options: [
      { id: 'A', text: "Run ad-hoc SQL update scripts manually through SQL Server Management Studio during outages." },
      { id: 'B', text: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes." },
      { id: 'C', text: "Drop all tables and re-import data nightly." },
      { id: 'D', text: "Recreate the production database from scratch on every application release." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes. Database continuous delivery uses declarative schema packages (DACPAC) or migration tools (Liquibase/Flyway). The `SqlAzureDacpacDeployment` task compares the target database with the compiled DACPAC, generating and executing safe delta scripts to evolve schemas without dropping active data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb",
    tags: ["Database CI/CD", "Database CI/CD", "Dr Failover"]
  },
  {
    id: "azure-az400-417",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automating Database Deployments with DACPAC and Liquibase: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Database CI/CD to deploy relational database schema updates to Azure SQL Database automatically in continuous delivery pipelines without data loss.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Automated relational database deployments using SQL Server DACPACs or Liquibase is under consideration.",
    options: [
      { id: 'A', text: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes." },
      { id: 'B', text: "Run ad-hoc SQL update scripts manually through SQL Server Management Studio during outages." },
      { id: 'C', text: "Drop all tables and re-import data nightly." },
      { id: 'D', text: "Recreate the production database from scratch on every application release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes. Database continuous delivery uses declarative schema packages (DACPAC) or migration tools (Liquibase/Flyway). The `SqlAzureDacpacDeployment` task compares the target database with the compiled DACPAC, generating and executing safe delta scripts to evolve schemas without dropping active data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb",
    tags: ["Database CI/CD", "Database CI/CD", "High Load Scale"]
  },
  {
    id: "azure-az400-418",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automating Database Deployments with DACPAC and Liquibase: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Database CI/CD to deploy relational database schema updates to Azure SQL Database automatically in continuous delivery pipelines without data loss.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Automated relational database deployments using SQL Server DACPACs or Liquibase is under consideration.",
    options: [
      { id: 'A', text: "Run ad-hoc SQL update scripts manually through SQL Server Management Studio during outages." },
      { id: 'B', text: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes." },
      { id: 'C', text: "Drop all tables and re-import data nightly." },
      { id: 'D', text: "Recreate the production database from scratch on every application release." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes. Database continuous delivery uses declarative schema packages (DACPAC) or migration tools (Liquibase/Flyway). The `SqlAzureDacpacDeployment` task compares the target database with the compiled DACPAC, generating and executing safe delta scripts to evolve schemas without dropping active data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb",
    tags: ["Database CI/CD", "Database CI/CD", "Security Compliance"]
  },
  {
    id: "azure-az400-419",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automating Database Deployments with DACPAC and Liquibase: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Database CI/CD to deploy relational database schema updates to Azure SQL Database automatically in continuous delivery pipelines without data loss.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Automated relational database deployments using SQL Server DACPACs or Liquibase is under consideration.",
    options: [
      { id: 'A', text: "Recreate the production database from scratch on every application release." },
      { id: 'B', text: "Drop all tables and re-import data nightly." },
      { id: 'C', text: "Run ad-hoc SQL update scripts manually through SQL Server Management Studio during outages." },
      { id: 'D', text: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes. Database continuous delivery uses declarative schema packages (DACPAC) or migration tools (Liquibase/Flyway). The `SqlAzureDacpacDeployment` task compares the target database with the compiled DACPAC, generating and executing safe delta scripts to evolve schemas without dropping active data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb",
    tags: ["Database CI/CD", "Database CI/CD", "Hybrid Migration"]
  },
  {
    id: "azure-az400-420",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Automating Database Deployments with DACPAC and Liquibase: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Database CI/CD to deploy relational database schema updates to Azure SQL Database automatically in continuous delivery pipelines without data loss.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Automated relational database deployments using SQL Server DACPACs or Liquibase is under consideration.",
    options: [
      { id: 'A', text: "Recreate the production database from scratch on every application release." },
      { id: 'B', text: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes." },
      { id: 'C', text: "Run ad-hoc SQL update scripts manually through SQL Server Management Studio during outages." },
      { id: 'D', text: "Drop all tables and re-import data nightly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `SqlAzureDacpacDeployment@1` task or Liquibase CLI in the pipeline to generate and apply incremental schema changes. Database continuous delivery uses declarative schema packages (DACPAC) or migration tools (Liquibase/Flyway). The `SqlAzureDacpacDeployment` task compares the target database with the compiled DACPAC, generating and executing safe delta scripts to evolve schemas without dropping active data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/targets/azure-sqldb",
    tags: ["Database CI/CD", "Database CI/CD", "Resilience Failure"]
  },
  {
    id: "azure-az400-421",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Triggers and PR Validation Filters: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Pipeline Triggers to configure a pipeline to run comprehensive integration tests only on pull requests targeting `main` and run nightly builds on a schedule.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Configuring CI triggers, PR triggers, and scheduled cron triggers with branch filters is under consideration.",
    options: [
      { id: 'A', text: "Trigger the full 4-hour test suite on every single commit to all personal feature branches." },
      { id: 'B', text: "Disable all automated triggers and rely entirely on manual pipeline dispatches." },
      { id: 'C', text: "Require a developer to wake up at 2:00 AM every night to click the Run Pipeline button." },
      { id: 'D', text: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file. Azure Pipelines YAML supports granular trigger definitions. `pr` triggers evaluate pull requests targeting specific branches, `trigger` handles direct commits, and `schedules` defines cron-based executions, allowing efficient allocation of build agent resources across test tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Triggers", "Pipeline Triggers", "Dr Failover"]
  },
  {
    id: "azure-az400-422",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Triggers and PR Validation Filters: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Pipeline Triggers to configure a pipeline to run comprehensive integration tests only on pull requests targeting `main` and run nightly builds on a schedule.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Configuring CI triggers, PR triggers, and scheduled cron triggers with branch filters is under consideration.",
    options: [
      { id: 'A', text: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file." },
      { id: 'B', text: "Require a developer to wake up at 2:00 AM every night to click the Run Pipeline button." },
      { id: 'C', text: "Trigger the full 4-hour test suite on every single commit to all personal feature branches." },
      { id: 'D', text: "Disable all automated triggers and rely entirely on manual pipeline dispatches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file. Azure Pipelines YAML supports granular trigger definitions. `pr` triggers evaluate pull requests targeting specific branches, `trigger` handles direct commits, and `schedules` defines cron-based executions, allowing efficient allocation of build agent resources across test tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Triggers", "Pipeline Triggers", "High Load Scale"]
  },
  {
    id: "azure-az400-423",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Triggers and PR Validation Filters: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Pipeline Triggers to configure a pipeline to run comprehensive integration tests only on pull requests targeting `main` and run nightly builds on a schedule.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Configuring CI triggers, PR triggers, and scheduled cron triggers with branch filters is under consideration.",
    options: [
      { id: 'A', text: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file." },
      { id: 'B', text: "Disable all automated triggers and rely entirely on manual pipeline dispatches." },
      { id: 'C', text: "Trigger the full 4-hour test suite on every single commit to all personal feature branches." },
      { id: 'D', text: "Require a developer to wake up at 2:00 AM every night to click the Run Pipeline button." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file. Azure Pipelines YAML supports granular trigger definitions. `pr` triggers evaluate pull requests targeting specific branches, `trigger` handles direct commits, and `schedules` defines cron-based executions, allowing efficient allocation of build agent resources across test tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Triggers", "Pipeline Triggers", "Security Compliance"]
  },
  {
    id: "azure-az400-424",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Triggers and PR Validation Filters: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Pipeline Triggers to configure a pipeline to run comprehensive integration tests only on pull requests targeting `main` and run nightly builds on a schedule.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Configuring CI triggers, PR triggers, and scheduled cron triggers with branch filters is under consideration.",
    options: [
      { id: 'A', text: "Trigger the full 4-hour test suite on every single commit to all personal feature branches." },
      { id: 'B', text: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file." },
      { id: 'C', text: "Require a developer to wake up at 2:00 AM every night to click the Run Pipeline button." },
      { id: 'D', text: "Disable all automated triggers and rely entirely on manual pipeline dispatches." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file. Azure Pipelines YAML supports granular trigger definitions. `pr` triggers evaluate pull requests targeting specific branches, `trigger` handles direct commits, and `schedules` defines cron-based executions, allowing efficient allocation of build agent resources across test tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Triggers", "Pipeline Triggers", "Hybrid Migration"]
  },
  {
    id: "azure-az400-425",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Pipeline Triggers and PR Validation Filters: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Pipeline Triggers to configure a pipeline to run comprehensive integration tests only on pull requests targeting `main` and run nightly builds on a schedule.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring CI triggers, PR triggers, and scheduled cron triggers with branch filters is under consideration.",
    options: [
      { id: 'A', text: "Disable all automated triggers and rely entirely on manual pipeline dispatches." },
      { id: 'B', text: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file." },
      { id: 'C', text: "Require a developer to wake up at 2:00 AM every night to click the Run Pipeline button." },
      { id: 'D', text: "Trigger the full 4-hour test suite on every single commit to all personal feature branches." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `pr: branches: include: [main]` for pull requests and `schedules: - cron: \"0 2 * * *\"` for nightly executions in the YAML file. Azure Pipelines YAML supports granular trigger definitions. `pr` triggers evaluate pull requests targeting specific branches, `trigger` handles direct commits, and `schedules` defines cron-based executions, allowing efficient allocation of build agent resources across test tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/pipeline-triggers",
    tags: ["Pipeline Triggers", "Pipeline Triggers", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_17;
