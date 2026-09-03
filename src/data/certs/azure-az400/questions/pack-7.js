export const AZURE_AZ400_QUESTIONS_7 = [
  {
    id: "azure-az400-151",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Bicep What-If Deployment Verification in CI/CD",
    scenario: "Before applying a Bicep template deployment to production, an engineer wants to preview which Azure resources will be created, modified, or destroyed without actually applying the changes.",
    question: "Which Azure CLI command or operation generates this predictive change preview?",
    options: [
      { id: 'A', text: "az bicep build" },
      { id: 'B', text: "az deployment group create --validate" },
      { id: 'C', text: "az resource list" },
      { id: 'D', text: "az deployment group what-if (What-If operation)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `az deployment group what-if` operation evaluates the template against the live state of Azure resources, generating a color-coded diff showing resources that will be created (+), modified (~), deleted (-), or unchanged (=) prior to execution.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-what-if",
    tags: ["Bicep", "What-If", "IaC", "CI/CD"]
  },
  {
    id: "azure-az400-152",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Bicep Modules for Standardized Enterprise Architectures",
    scenario: "A cloud platform team develops standard, hardened networking patterns (VNet, subnets, NSGs, route tables) that application teams must reuse across 30 projects.",
    question: "How should reusable infrastructure components be structured and distributed using Bicep?",
    options: [
      { id: 'A', text: "Email Bicep files to application developers" },
      { id: 'B', text: "Copy and paste the code into every repository" },
      { id: 'C', text: "Hardcode all parameters inside application templates" },
      { id: 'D', text: "Author reusable Bicep modules and publish them as OCI artifacts to an Azure Container Registry (ACR) private Bicep registry" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Bicep modules allow decomposing complex infrastructure into reusable, parameterized building blocks. Publishing modules to an Azure Container Registry (ACR) provides versioned, enterprise-governed distribution referenced via `br:myregistry.azurecr.io/bicep/modules/vnet:v1`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/private-module-registry",
    tags: ["Bicep", "Modules", "ACR", "Private Registry"]
  },
  {
    id: "azure-az400-153",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "ARM Template Deployment Modes: Incremental vs Complete",
    scenario: "A developer deploys an ARM template to an existing resource group containing 5 virtual machines. The template defines only 2 virtual machines and uses 'Complete' deployment mode.",
    question: "What happens to the 3 virtual machines that are not defined in the template?",
    options: [
      { id: 'A', text: "The 3 virtual machines are moved to a backup subscription" },
      { id: 'B', text: "The 3 undefined virtual machines are permanently deleted from the resource group" },
      { id: 'C', text: "The 3 virtual machines remain unchanged" },
      { id: 'D', text: "The deployment fails with an error" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In `Complete` deployment mode, Resource Manager deletes any existing resources in the resource group that are not declared in the template. In `Incremental` mode (the default), Resource Manager leaves undeclared existing resources untouched.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-modes",
    tags: ["Deployment Modes", "ARM", "Complete Mode", "Incremental Mode"]
  },
  {
    id: "azure-az400-154",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Terraform Remote State Management on Azure: State Locking",
    scenario: "Two DevOps engineers execute `terraform apply` concurrently against the same production infrastructure. Without state locking, race conditions will corrupt the state file.",
    question: "Where should Terraform remote state be stored on Azure to provide automated state locking and encryption at rest?",
    options: [
      { id: 'A', text: "In a public GitHub repository" },
      { id: 'B', text: "In an email attachment" },
      { id: 'C', text: "On the engineer's local desktop hard drive" },
      { id: 'D', text: "In an Azure Storage Account Blob Container with Azure Blob Lease state locking" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The official Terraform AzureRM backend stores `terraform.tfstate` in an Azure Blob Storage container. It natively leverages Azure Blob storage leases to automatically lock the state file during execution, preventing concurrent writes and state corruption.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage",
    tags: ["Terraform", "Remote State", "State Locking", "Azure Storage"]
  },
  {
    id: "azure-az400-155",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Terraform CI/CD Workflow in Azure Pipelines",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An automated pull request pipeline must validate Terraform changes safely before merging. What sequence of Terraform commands should run during the PR validation build?",
    options: [
      { id: 'A', text: "terraform import" },
      { id: 'B', text: "terraform apply -auto-approve" },
      { id: 'C', text: "terraform destroy" },
      { id: 'D', text: "terraform fmt -check && terraform init -backend=false && terraform validate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In PR validation pipelines, best practice runs `terraform fmt -check` to verify code formatting, followed by `terraform init -backend=false` and `terraform validate` to verify syntax and internal consistency without creating cloud resources or acquiring state locks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/developer/terraform/best-practices",
    tags: ["Terraform", "CI/CD", "Validation", "Pull Requests"]
  },
  {
    id: "azure-az400-156",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Managing Secrets in Terraform: Sensitive Variables and Key Vault",
    scenario: "A Terraform configuration provisions an Azure SQL database requiring an administrator password. The password must not be written to console logs or exposed in plain text in `.tf` files.",
    question: "How should the secret be supplied to Terraform in an Azure Pipeline?",
    options: [
      { id: 'A', text: "Pass the password as an unquoted command line argument terraform apply -var db_password=plain" },
      { id: 'B', text: "Hardcode the password in main.tf" },
      { id: 'C', text: "Retrieve the password from Azure Key Vault in the pipeline, map it to an environment variable named `TF_VAR_db_password`, and declare `variable \"db_password\" { sensitive = true }`" },
      { id: 'D', text: "Commit the terraform.tfstate file to git" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform automatically maps environment variables prefixed with `TF_VAR_` to configuration variables. Marking the variable with `sensitive = true` prevents Terraform from displaying the secret in console plan and apply outputs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#suppressing-values-in-cli-output",
    tags: ["Terraform", "Secrets", "Key Vault", "Sensitive Variables"]
  },
  {
    id: "azure-az400-157",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Ansible in Azure DevOps: Configuration Management",
    scenario: "A platform team uses Ansible playbooks in an Azure Pipeline to configure software packages and security settings on a fleet of 50 Linux virtual machines post-deployment.",
    question: "Which tool or task executes Ansible playbooks securely within an Azure DevOps agent job?",
    options: [
      { id: 'A', text: "CopyFiles@2" },
      { id: 'B', text: "AzureWebApp@1" },
      { id: 'C', text: "Ansible@0 task (or a Bash@3 step invoking ansible-playbook with dynamic Azure inventory)" },
      { id: 'D', text: "Docker@2" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Ansible@0` task or a shell script invoking `ansible-playbook` uses dynamic Azure inventory modules (`azure.azcollection.azure_rm`) to discover target VMs and execute configuration playbooks securely over SSH.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/developer/ansible/overview",
    tags: ["Ansible", "Configuration Management", "Linux", "Automation"]
  },
  {
    id: "azure-az400-158",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Custom Script Extension: VM Bootstrapping",
    scenario: "An ARM template provisions a Windows Server VM that needs to download and execute a PowerShell configuration script (`bootstrap.ps1`) immediately upon VM startup.",
    question: "Which Azure VM feature automates post-provisioning script execution without requiring an open RDP/SSH port?",
    options: [
      { id: 'A', text: "Azure Custom Script Extension" },
      { id: 'B', text: "Network Security Group rule" },
      { id: 'C', text: "Azure Bastion" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Custom Script Extension runs post-creation scripts inside virtual machines, downloading scripts from Azure Storage accounts and executing configuration commands automatically without needing public IP addresses or management ports.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Custom Script Extension", "Bootstrapping", "VMs", "Automation"]
  },
  {
    id: "azure-az400-159",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Cloud-Init for Linux VM Provisioning",
    scenario: "An engineer needs to install nginx, configure firewall rules, and mount a disk on an Ubuntu VM automatically during initial boot using cloud-native declarative configuration.",
    question: "Which industry-standard initialization framework does Azure use to bootstrap Linux VMs from custom data?",
    options: [
      { id: 'A', text: "cloud-init" },
      { id: 'B', text: "Active Directory Group Policy" },
      { id: 'C', text: "Sysprep" },
      { id: 'D', text: "Windows Setup.exe" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`cloud-init` is the cross-platform standard for bootstrapping cloud Linux instances. In Azure, users pass cloud-init YAML scripts via the `customData` property during VM creation to install packages and configure files on first boot.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/using-cloud-init",
    tags: ["cloud-init", "Linux", "CustomData", "Bootstrapping"]
  },
  {
    id: "azure-az400-160",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure VM Image Builder: Building Hardened Golden Images",
    scenario: "An enterprise security policy mandates that all virtual machines must boot from pre-patched, CIS-hardened golden images with security agents pre-installed.",
    question: "Which managed Azure service automates the pipeline-driven creation of custom Windows and Linux VM images based on HashiCorp Packer?",
    options: [
      { id: 'A', text: "Azure Backup" },
      { id: 'B', text: "Azure Site Recovery" },
      { id: 'C', text: "Azure VM Image Builder" },
      { id: 'D', text: "Azure Migrate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure VM Image Builder is a fully managed cloud service built on HashiCorp Packer. It integrates with Azure Pipelines to automate patching, hardening, and publishing custom VM images directly into an Azure Compute Gallery.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/image-builder-overview",
    tags: ["VM Image Builder", "Packer", "Golden Image", "Security"]
  },
  {
    id: "azure-az400-161",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Compute Gallery (Shared Image Gallery): Global Image Sharing",
    scenario: "An enterprise needs to share a standardized hardened VM image across 20 Azure subscriptions and replicate it to 5 global regions with version control.",
    question: "Which Azure service provides centralized image sharing and cross-region replication?",
    options: [
      { id: 'A', text: "Azure Files SMB share" },
      { id: 'B', text: "Azure Data Box" },
      { id: 'C', text: "Azure Blob Storage public container" },
      { id: 'D', text: "Azure Compute Gallery" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Compute Gallery (formerly Shared Image Gallery) organizes, versions, and shares custom VM images and application packages across subscriptions and tenants, automatically replicating images to multiple global Azure regions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/azure-compute-gallery",
    tags: ["Compute Gallery", "Golden Images", "Global Replication", "Infrastructure"]
  },
  {
    id: "azure-az400-162",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "GitOps on Azure Kubernetes Service (AKS): Flux Extension",
    scenario: "A platform team wants cluster configurations and deployments on Azure Kubernetes Service (AKS) to be reconciled automatically from a Git repository without pushing credentials to CI runners.",
    question: "Which native GitOps extension does Microsoft provide for AKS?",
    options: [
      { id: 'A', text: "Jenkins agent" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure DevOps agent pod" },
      { id: 'D', text: "Flux v2 cluster extension for AKS" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AKS Flux v2 cluster extension implements GitOps: a controller inside the AKS cluster pulls desired state manifests from a Git repository and reconciles differences, eliminating the need to store cluster credentials in CI/CD pipelines.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-arc/kubernetes/tutorial-gitops-flux-v2",
    tags: ["GitOps", "Flux", "AKS", "Kubernetes"]
  },
  {
    id: "azure-az400-163",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Helm Chart Versioning and Publishing to Azure Container Registry (ACR)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "How can an engineering team version and store Helm charts securely alongside Docker container images in Azure Container Registry (ACR)?",
    options: [
      { id: 'A', text: "By packaging Helm charts as OCI (Open Container Initiative) artifacts and pushing them via `helm push` to ACR" },
      { id: 'B', text: "By emailing zip files to the cluster administrator" },
      { id: 'C', text: "Helm charts cannot be stored in ACR" },
      { id: 'D', text: "By storing charts in an unencrypted Git branch" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Registry fully supports the OCI artifact specification. Teams can use `helm package` and `helm push` to store, version, and manage Helm charts securely within ACR alongside container images.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-helm-repos",
    tags: ["Helm", "ACR", "OCI", "Containers"]
  },
  {
    id: "azure-az400-164",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Container Registry (ACR) Tasks: Automated Patching",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "A containerized application relies on a base Ubuntu image (`ubuntu:22.04`). When Canonical releases a security update for the base image, how can ACR automatically rebuild the application image?",
    options: [
      { id: 'A', text: "Base images cannot be automatically patched" },
      { id: 'B', text: "Re-deploying the virtual machine scale set" },
      { id: 'C', text: "A manual cron job on developer laptops" },
      { id: 'D', text: "ACR Tasks with base image update triggers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ACR Tasks supports base image update triggers. When ACR detects an update to a tracked upstream base container image, it automatically triggers a build task to re-compile the application container, ensuring security patches are applied immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-base-images",
    tags: ["ACR Tasks", "Base Images", "Vulnerability Management", "Containers"]
  },
  {
    id: "azure-az400-165",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Helm Deployments in Azure Pipelines: HelmDeploy Task",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Which dedicated Azure Pipelines task packages, installs, and upgrades Helm charts on an Azure Kubernetes Service (AKS) cluster using an authorized Kubernetes service connection?",
    options: [
      { id: 'A', text: "Docker@2" },
      { id: 'B', text: "AzureCLI@2 with az aks install-cli" },
      { id: 'C', text: "Kubernetes@1" },
      { id: 'D', text: "HelmDeploy@0" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `HelmDeploy@0` task manages Helm charts in Azure Pipelines. It supports operations like `package`, `install`, `upgrade`, `rollback`, and `test`, connecting securely to Kubernetes clusters via service connections.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/helm-deploy-v0",
    tags: ["HelmDeploy", "Helm", "AKS", "Kubernetes"]
  },
  {
    id: "azure-az400-166",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Kustomize Overlays for Multi-Environment Kubernetes Deployments",
    scenario: "A microservices team wants to deploy a base set of Kubernetes manifests to Dev, Staging, and Production without using template engines, customizing replica counts and CPU limits per environment.",
    question: "Which Kubernetes-native configuration tool uses `kustomization.yaml` overlays to patch base resources without templates?",
    options: [
      { id: 'A', text: "Kustomize" },
      { id: 'B', text: "Chef" },
      { id: 'C', text: "Ansible" },
      { id: 'D', text: "Helm" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kustomize is a template-free configuration management tool built into `kubectl`. It uses base manifests and environment-specific overlays (`kustomization.yaml`) to patch values (replicas, environment variables, resource limits) cleanly per target environment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/kubernetes-manifest-v1#bake-action",
    tags: ["Kustomize", "Kubernetes", "Overlays", "Declarative"]
  },
  {
    id: "azure-az400-167",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Terraform Plan Export to Pipeline Artifacts",
    scenario: "In a multi-stage Terraform pipeline, Stage 1 generates an execution plan. Stage 2 executes the deployment after manual approval.",
    question: "What command parameter guarantees that Stage 2 applies the exact changes reviewed and approved in Stage 1?",
    options: [
      { id: 'A', text: "Re-run terraform plan in Stage 2" },
      { id: 'B', text: "Run terraform apply with no plan file" },
      { id: 'C', text: "Take a screenshot of the plan output" },
      { id: 'D', text: "Generate a plan file with `terraform plan -out=tfplan` in Stage 1 and execute `terraform apply tfplan` in Stage 2" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Passing `-out=tfplan` to `terraform plan` serializes the planned changes to an immutable binary plan file. Passing that exact `tfplan` file to `terraform apply` guarantees that only the approved changes are executed, preventing drift between review and apply.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#out-path",
    tags: ["Terraform", "tfplan", "Immutability", "Approval Gates"]
  },
  {
    id: "azure-az400-168",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Static Analysis of Infrastructure as Code: tfsec and Checkov",
    scenario: "A security architect requires that all Terraform and Bicep pull requests must be scanned for misconfigurations (such as unencrypted storage accounts or open ingress 0.0.0.0/0 rules) before merging.",
    question: "Which open-source static analysis security tools should be integrated into the PR validation pipeline?",
    options: [
      { id: 'A', text: "ESLint" },
      { id: 'B', text: "Checkov or tfsec / Trivy" },
      { id: 'C', text: "JUnit" },
      { id: 'D', text: "Valgrind" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Checkov, tfsec, and Trivy are specialized static analysis tools for Infrastructure as Code (IaC). They scan Terraform, Bicep, ARM templates, and Helm charts for security vulnerabilities and compliance policy violations during CI pull request validation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/developer/terraform/best-practices",
    tags: ["Checkov", "tfsec", "IaC Security", "Shift-Left"]
  },
  {
    id: "azure-az400-169",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Bicep Linter Integration in Azure Pipelines",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "A developer writes a Bicep file that violates naming conventions and hardcodes a storage account location string. How does the Bicep CLI catch these issues during the build?",
    options: [
      { id: 'A', text: "By submitting the template to Microsoft Support" },
      { id: 'B', text: "By running the template on a virtual machine" },
      { id: 'C', text: "The Bicep CLI does not support linting" },
      { id: 'D', text: "The Bicep linter automatically runs during `bicep build` and checks code against rules defined in `bicepconfig.json`" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Bicep CLI includes a built-in linter that runs automatically during `az bicep build` or validation tasks. It evaluates code against rules declared in `bicepconfig.json` (such as detecting unused parameters, hardcoded locations, or insecure secrets).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/linter",
    tags: ["Bicep Linter", "bicepconfig.json", "Code Quality", "IaC"]
  },
  {
    id: "azure-az400-170",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Idempotency in Infrastructure as Code",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What does the concept of 'Idempotency' mean in the context of Infrastructure as Code (IaC) deployment pipelines?",
    options: [
      { id: 'A', text: "Running the same deployment template multiple times against an environment produces the exact same end state without duplicating resources or throwing errors" },
      { id: 'B', text: "The deployment requires human intervention on every run" },
      { id: 'C', text: "The template can only be executed once in its lifetime" },
      { id: 'D', text: "Every deployment creates a brand new set of virtual machines" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Idempotency guarantees that applying an infrastructure template repeatedly yields the identical desired state regardless of the starting state. If a resource already matches the template specification, the engine makes no changes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/framework/devops/automation",
    tags: ["Idempotency", "IaC", "Concepts", "Architecture"]
  },
  {
    id: "azure-az400-171",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Managing Feature Flags with Azure App Configuration",
    scenario: "A software team practices continuous deployment but needs the ability to toggle new experimental features on or off in production instantly without redeploying code.",
    question: "Which Azure service provides centralized dynamic feature flag management and configuration key-value storage?",
    options: [
      { id: 'A', text: "Azure Key Vault" },
      { id: 'B', text: "Azure App Configuration (with Feature Manager)" },
      { id: 'C', text: "Azure Storage Tables" },
      { id: 'D', text: "Azure Service Bus" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure App Configuration provides a centralized service to manage application settings and feature flags dynamically. Feature Manager allows applications to evaluate toggles in real time without restarting or redeploying code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview",
    tags: ["Feature Flags", "App Configuration", "Progressive Delivery", "DevOps"]
  },
  {
    id: "azure-az400-172",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Dark Launching and Ring-Based Deployments",
    scenario: "An enterprise introduces major changes by deploying updates first to internal dogfood users (Ring 0), then to 1% of public users (Ring 1), then 20% (Ring 2), and finally 100% (Ring 3).",
    question: "What is this progressive exposure deployment strategy called?",
    options: [
      { id: 'A', text: "Cold failover deployment" },
      { id: 'B', text: "Ring-based deployment" },
      { id: 'C', text: "Big Bang deployment" },
      { id: 'D', text: "Recreate deployment" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Ring-based deployment (progressive exposure) deploys software changes incrementally across user rings, monitoring health metrics at each ring to catch defects early before exposing the entire customer base to risk.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/release-flow#ring-based-deployment",
    tags: ["Ring-Based", "Progressive Exposure", "Deployment Strategies", "Resilience"]
  },
  {
    id: "azure-az400-173",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "A/B Testing with Traffic Routing in Azure App Service",
    scenario: "A marketing department wants to compare two different checkout page designs by routing 50% of real user traffic to production slot and 50% to staging slot, measuring conversion rates.",
    question: "Which Azure App Service feature accomplishes this traffic splitting?",
    options: [
      { id: 'A', text: "Azure Front Door DNS failover" },
      { id: 'B', text: "Testing in production (traffic routing percentages across deployment slots)" },
      { id: 'C', text: "Manual round-robin load balancer" },
      { id: 'D', text: "Azure Traffic Manager geographic routing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure App Service deployment slots support 'Testing in production' traffic routing: administrators allocate percentage shares (e.g. 50%/50%) between slots, enabling A/B hypothesis testing on live production users.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#route-traffic",
    tags: ["A/B Testing", "Deployment Slots", "App Service", "Traffic Routing"]
  },
  {
    id: "azure-az400-174",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Kubernetes Service (AKS) Pod Disruption Budgets (PDB)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "During automated rolling deployments on AKS, how do administrators guarantee that at least 80% of application pods remain available to handle traffic during node drains and cluster upgrades?",
    options: [
      { id: 'A', text: "Configure a PodDisruptionBudget (PDB) resource specifying minAvailable: 80%" },
      { id: 'B', text: "Disable cluster upgrades permanently" },
      { id: 'C', text: "Run only a single pod" },
      { id: 'D', text: "Increase node CPU size" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A PodDisruptionBudget (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as node drains, upgrades, or autoscaling events), ensuring high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/operator-best-practices-cluster-security#use-pod-disruption-budgets",
    tags: ["PDB", "AKS", "Kubernetes", "High Availability"]
  },
  {
    id: "azure-az400-175",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Immutable Infrastructure Principles",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the core premise of the 'Immutable Infrastructure' pattern in modern DevOps engineering?",
    options: [
      { id: 'A', text: "Servers and container environments are never modified or patched in-place; any update replaces old instances with brand new, version-controlled images" },
      { id: 'B', text: "Developers are not allowed to update application code" },
      { id: 'C', text: "Servers must never be powered off" },
      { id: 'D', text: "Hardware must remain in datacenters for 20 years" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Immutable Infrastructure dictates that servers and containers are replaced rather than modified in-place. If an update or patch is needed, a new image is built, tested, and deployed, completely eliminating configuration drift.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/framework/devops/automation",
    tags: ["Immutable Infrastructure", "Configuration Drift", "Best Practices", "Architecture"]
  }
];

export default AZURE_AZ400_QUESTIONS_7;
