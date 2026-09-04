export const HASHICORP_TFA_QUESTIONS_1 = [
  {
    id: "hashicorp-tfa-1",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative vs Imperative Infrastructure as Code",
    scenario: "A systems engineering team is comparing configuration management tools like Ansible and Bash scripts against Terraform.",
    question: "What is the primary architectural difference between declarative and imperative IaC approaches?",
    options: [
      { id: 'A', text: "Declarative IaC specifies the desired end-state of infrastructure without describing step-by-step actions, whereas imperative IaC specifies the exact sequence of execution steps" },
      { id: 'B', text: "Declarative IaC requires writing compiled C++ code, while imperative uses YAML" },
      { id: 'C', text: "Imperative IaC automatically calculates reverse dependencies, while declarative cannot" },
      { id: 'D', text: "Declarative IaC only manages on-premises hardware" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform uses a declarative paradigm where users define the desired end state (e.g. 'I want 3 VMs and a VPC'). Terraform's engine calculates the current state, compares it with desired state, and determines the necessary actions. Imperative tools (like shell scripts) require users to script explicit step-by-step commands.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC", "Declarative", "Terraform Concepts"]
  },
  {
    id: "hashicorp-tfa-2",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotency in Infrastructure Provisioning",
    scenario: "A DevOps engineer executes `terraform apply` on an existing production environment where no configuration files or cloud resources have changed.",
    question: "What is the expected outcome of running an idempotent IaC tool against an unchanged environment?",
    options: [
      { id: 'A', text: "Terraform detects no differences between desired state and actual infrastructure, performing zero changes ('No changes. Your infrastructure matches the configuration.')" },
      { id: 'B', text: "Terraform terminates and recreates all cloud resources from scratch" },
      { id: 'C', text: "Terraform generates duplicate copies of all existing virtual machines" },
      { id: 'D', text: "The command fails with a state collision error" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Idempotency` means that applying the same configuration multiple times results in the exact same infrastructure state without unexpected side effects or duplicate resource creation. If the real-world infrastructure already matches declared code, Terraform takes no action.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro#why-terraform",
    tags: ["IaC", "Idempotency", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-3",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure as Code Version Control Benefits",
    scenario: "An organization moves from manual cloud console provisioning to storing all Terraform `.tf` files in a Git repository.",
    question: "Which operational benefit does version control bring to cloud infrastructure management?",
    options: [
      { id: 'A', text: "Enables peer code reviews, pull requests, automated linting/testing, and an immutable audit trail of who changed what and when" },
      { id: 'B', text: "Guarantees 100% cloud provider uptime SLAs" },
      { id: 'C', text: "Automatically eliminates the need to pay for cloud computing resources" },
      { id: 'D', text: "Bypasses cloud provider API rate limits" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Managing infrastructure code in Git allows teams to adopt software engineering practices: conducting pull request peer reviews, tracking commit history, rolling back breaking changes, enforcing branch policies, and triggering automated CI/CD pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/cloud-get-started/cloud-overview",
    tags: ["IaC", "Version Control", "GitOps"]
  },
  {
    id: "hashicorp-tfa-4",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Configuration Drift Detection and Reconciliation",
    scenario: "A network engineer manually opens port 22 in a cloud security group via the web management console to troubleshoot an emergency. The change is not documented in the Terraform code repository.",
    question: "How does Terraform handle this configuration drift during the next execution of terraform plan or apply?",
    options: [
      { id: 'A', text: "Terraform ignores the cloud security group completely" },
      { id: 'B', text: "The terraform command crashes and corrupts the state file" },
      { id: 'C', text: "Terraform refreshes state from cloud APIs, detects the out-of-band port 22 rule, and proposes modifying the security group to remove the unmanaged rule to restore desired state" },
      { id: 'D', text: "Terraform automatically updates the local .tf files to include the manual console change" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Configuration drift` occurs when real-world resources are altered out-of-band. During `terraform plan`, Terraform queries cloud provider APIs, compares actual infrastructure against the declared `.tf` configuration, and proposes changes to revert or reconcile the drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["IaC", "Configuration Drift", "State Refresh"]
  },
  {
    id: "hashicorp-tfa-5",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Cloud-Agnostic vs Cloud-Specific Infrastructure as Code",
    scenario: "An enterprise operates workloads across Amazon Web Services, Microsoft Azure, and VMware on-premises. The architect wants a single unified IaC workflow rather than learning AWS CloudFormation and Azure Bicep separately.",
    question: "Why is Terraform considered cloud-agnostic compared to native cloud provider template engines?",
    options: [
      { id: 'A', text: "Terraform provides a uniform workflow and syntax (HCL) that interfaces with hundreds of heterogeneous cloud providers and on-premises platforms via modular Providers" },
      { id: 'B', text: "Terraform converts AWS EC2 resource declarations directly into Azure VMs automatically without provider blocks" },
      { id: 'C', text: "Terraform code executes without making API calls to cloud providers" },
      { id: 'D', text: "Terraform is owned and maintained by AWS and Microsoft jointly" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform is `cloud-agnostic` because its core engine, HashiCorp Configuration Language (HCL), and CLI workflow (`init`, `plan`, `apply`) remain consistent across any infrastructure target. While resource types differ per provider, the tooling and workflow are universally unified.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro#why-terraform",
    tags: ["IaC", "Cloud-Agnostic", "Providers"]
  },
  {
    id: "hashicorp-tfa-6",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Cattle vs Pets Infrastructure Paradigm",
    scenario: "A cloud architect designs a scalable microservice cluster using immutable infrastructure principles.",
    question: "When a virtual machine encounters an OS kernel error, what action is taken under the cattle paradigm?",
    options: [
      { id: 'A', text: "Engineers spend hours manually patching and debugging the specific broken server" },
      { id: 'B', text: "The unhealthy virtual machine is terminated and replaced by a fresh, identical instance provisioned automatically from code" },
      { id: 'C', text: "The VM is converted to a physical bare-metal server" },
      { id: 'D', text: "The VM is preserved permanently with a unique human nickname" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Under the `Cattle, not Pets` paradigm, servers are disposable, stateless, and interchangeable. Instead of treating servers like irreplaceable 'pets' requiring manual repairs, systems treat them like 'cattle': terminating broken nodes and spinning up fresh, automated replacements from IaC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["IaC", "Cattle vs Pets", "Immutable Infrastructure"]
  },
  {
    id: "hashicorp-tfa-7",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Day 0, Day 1, and Day 2 Infrastructure Lifecycle Operations",
    scenario: "An enterprise models its infrastructure lifecycle across distinct operational phases.",
    question: "Which operational phase represents ongoing maintenance, patch management, capacity scaling, and configuration updates?",
    options: [
      { id: 'A', text: "Day 2 Operations" },
      { id: 'B', text: "Day 0 Operations (planning and architecture)" },
      { id: 'C', text: "Day 1 Operations (initial deployment and provisioning)" },
      { id: 'D', text: "Day 3 Operations" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In software and cloud operations: `Day 0` is planning and architectural design. `Day 1` is initial installation and deployment. `Day 2` encompasses ongoing operational lifecycle management: upgrades, scaling, drift remediation, and disaster recovery.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro",
    tags: ["IaC", "Lifecycle", "Day 2 Operations"]
  },
  {
    id: "hashicorp-tfa-8",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Repeatability and Environment Parity in IaC",
    scenario: "A development team struggles with 'it works in staging but fails in production' bugs caused by subtle configuration mismatches between environments.",
    question: "How does Infrastructure as Code eliminate environment disparity?",
    options: [
      { id: 'A', text: "By manually synchronizing cloud console screens" },
      { id: 'B', text: "By provisioning development, staging, and production environments from the exact same version-controlled code modules with environment-specific variables" },
      { id: 'C', text: "By deploying only to production and eliminating staging environments" },
      { id: 'D', text: "By running all environments on the exact same physical server" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Environment parity` ensures that development, staging, and production environments are identical in architecture and topology. IaC accomplishes this by reusing the exact same modular code, varying only input variables (like instance size or replica counts).",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/modules/module-create",
    tags: ["IaC", "Environment Parity", "Repeatability"]
  },
  {
    id: "hashicorp-tfa-9",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Self-Documenting Infrastructure via Declarative Code",
    scenario: "A newly hired engineer needs to understand the VPC CIDR blocks, subnet layout, and database topology of a complex cloud platform.",
    question: "How does Infrastructure as Code serve as living technical documentation?",
    options: [
      { id: 'A', text: "The declared HCL configuration files in version control represent the exact, up-to-date architectural blueprint of deployed infrastructure" },
      { id: 'B', text: "Engineers must read outdated Word documents written three years ago" },
      { id: 'C', text: "By inspecting raw network packets with Wireshark" },
      { id: 'D', text: "Terraform generates audio recordings of cloud architects" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative code acts as `living documentation`. Unlike static diagrams or documentation wikis that quickly become obsolete, Terraform code reflects the authoritative, executable blueprint of real infrastructure currently deployed in the cloud.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro#why-terraform",
    tags: ["IaC", "Documentation", "HCL"]
  },
  {
    id: "hashicorp-tfa-10",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Automated Disaster Recovery via Infrastructure as Code",
    scenario: "A primary cloud region suffers a catastrophic power and networking outage. The operations team must stand up an identical full-stack application environment in a secondary region immediately.",
    question: "How does Infrastructure as Code accelerate Disaster Recovery (DR) and minimize Recovery Time Objective (RTO)?",
    options: [
      { id: 'A', text: "By applying the same Terraform modules to the secondary region with updated region variables, provisioning complete VPCs, compute, and databases in minutes" },
      { id: 'B', text: "IaC cannot be used for disaster recovery" },
      { id: 'C', text: "By restoring VM tape backups shipped via courier" },
      { id: 'D', text: "By manually clicking through the secondary region console for 14 hours" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automated IaC drastically slashes `Recovery Time Objective` (RTO). Rather than manually configuring hundreds of cloud resources under disaster pressure, teams run automated deployment pipelines targeting the secondary region using pre-tested Terraform code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/disaster-recovery",
    tags: ["IaC", "Disaster Recovery", "RTO"]
  },
  {
    id: "hashicorp-tfa-11",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Immutable Infrastructure vs Mutable In-Place Modification",
    scenario: "An enterprise upgrades its fleet of web servers to a new security-patched Linux AMI. The team decides to use an immutable infrastructure pattern rather than mutable updates.",
    question: "What action does the deployment pipeline take under the immutable infrastructure model?",
    options: [
      { id: 'A', text: "It provisions a brand-new fleet of VMs with the updated AMI, verifies health, redirects traffic, and terminates the old VM fleet" },
      { id: 'B', text: "It SSHs into each existing running server and runs 'yum update' in-place" },
      { id: 'C', text: "It reboots each running VM without installing patches" },
      { id: 'D', text: "It modifies the BIOS firmware on physical hardware" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Immutable infrastructure` replaces components rather than modifying them in-place. Instead of patching live servers over SSH (mutable infrastructure, which causes configuration drift), immutable pipelines deploy completely new, pre-baked machine images and terminate older instances.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro#why-terraform",
    tags: ["IaC", "Immutable Infrastructure", "Architecture"]
  },
  {
    id: "hashicorp-tfa-12",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Static Analysis and Security Scanning of IaC Code",
    scenario: "Before running `terraform apply`, a security officer wants to check that no S3 buckets are configured as publicly readable and all EBS volumes have encryption enabled.",
    question: "Which stage of the CI/CD pipeline evaluates IaC code against security policies without provisioning real cloud resources?",
    options: [
      { id: 'A', text: "Static Analysis / Policy as Code scanning (e.g. Checkov, tfsec, Sentinel, or OPA)" },
      { id: 'B', text: "Runtime cloud billing audit" },
      { id: 'C', text: "Physical hardware inspection" },
      { id: 'D', text: "Post-deployment penetration testing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Static analysis tools (like `tfsec`, `Checkov`, and `Sentinel`) inspect Terraform HCL files and plan JSON outputs in CI/CD pipelines. They detect security misconfigurations (open security groups, unencrypted disks) before resources are provisioned in live accounts.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/cloud/sentinel-policy",
    tags: ["IaC", "Security Scanning", "Policy as Code"]
  },
  {
    id: "hashicorp-tfa-13",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Policy as Code (Sentinel and OPA) Guardrails",
    scenario: "A financial institution mandates that developers may only provision Compute Engine and EC2 instances of machine series `t3.micro` or `t3.small` in development accounts.",
    question: "Which capability enforces automated programmatic governance rules on Terraform plans prior to execution?",
    options: [
      { id: 'A', text: "Periodic monthly billing reviews" },
      { id: 'B', text: "Writing comments in README.md" },
      { id: 'C', text: "IAM user passwords alone" },
      { id: 'D', text: "Policy as Code (e.g. HashiCorp Sentinel or Open Policy Agent)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Policy as Code` (such as HashiCorp Sentinel or OPA) introduces automated guardrails into deployment pipelines. Policies evaluate Terraform plan outputs against organizational rules, automatically blocking deployments that violate compliance standards.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/cloud/sentinel-policy",
    tags: ["IaC", "Policy as Code", "Governance"]
  },
  {
    id: "hashicorp-tfa-14",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Cost Estimation and FinOps Shift-Left with IaC",
    scenario: "A junior developer accidentally writes a Terraform resource block requesting a 128-core memory-optimized virtual machine costing $10,000 per month.",
    question: "How does integrating cost estimation tools (e.g. Infracost or Terraform Cloud Cost Estimation) into pull requests protect organizations?",
    options: [
      { id: 'A', text: "It calculates the monthly financial cost delta of the proposed changes directly in the pull request before infrastructure is provisioned" },
      { id: 'B', text: "It negotiates discounts with the cloud provider automatically" },
      { id: 'C', text: "It cancels the developer's cloud account" },
      { id: 'D', text: "It forces the cloud provider to run the VM for free" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrating cost estimation into the IaC pull request workflow 'shifts FinOps left'. Developers and managers see the exact dollar impact of infrastructure changes (e.g. '+$10,000/mo') before approving and applying the code, preventing runaway expenditures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["FinOps", "Cost Estimation", "Shift-Left"]
  },
  {
    id: "hashicorp-tfa-15",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Dependency Graph and Parallel Execution in Terraform",
    scenario: "A Terraform configuration declares a VPC, an internet gateway, 3 subnets, and 10 independent virtual machines across the subnets.",
    question: "How does Terraform optimize the deployment speed of independent resources?",
    options: [
      { id: 'A', text: "Terraform builds an internal Directed Acyclic Graph (DAG) of resource dependencies and provisions independent resources concurrently in parallel" },
      { id: 'B', text: "Terraform provisions all resources strictly one-by-one in alphabetical order" },
      { id: 'C', text: "Terraform provisions resources in reverse order of file names" },
      { id: 'D', text: "Terraform cannot run tasks in parallel" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform parses resource references and constructs a `Directed Acyclic Graph` (DAG). Resources with dependencies are ordered correctly, while resources with no dependencies on each other are provisioned concurrently in parallel, dramatically accelerating deployment speed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/graph",
    tags: ["Terraform", "Dependency Graph", "DAG"]
  },
  {
    id: "hashicorp-tfa-16",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Blast Radius Reduction via Modular Decomposition",
    scenario: "A single monolithic Terraform configuration manages an enterprise's root networking, core production databases, and 50 microservices in one single state file.",
    question: "Why does this monolithic architecture pose a severe operational risk?",
    options: [
      { id: 'A', text: "Terraform cannot manage more than 2 resources per file" },
      { id: 'B', text: "Monolithic architectures execute faster than modular designs" },
      { id: 'C', text: "A small mistake or state file corruption in a microservice rollout can accidentally destroy the root networking or production database (large blast radius)" },
      { id: 'D', text: "Monolithic state files are not supported by cloud providers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Blast radius` refers to the scope of potential damage caused by an error. Storing all organizational infrastructure in one state file creates a massive blast radius: an accidental deletion or race condition can bring down the entire company. Decoupling into smaller state files confines risk.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/modules/module-create",
    tags: ["IaC", "Blast Radius", "Architecture Best Practices"]
  },
  {
    id: "hashicorp-tfa-17",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Ephemeral Testing Environments via IaC",
    scenario: "A software engineering team wants to test pull requests in dedicated, isolated staging environments that exist only for the duration of the automated integration test suite.",
    question: "How does Infrastructure as Code facilitate ephemeral (preview) testing environments?",
    options: [
      { id: 'A', text: "Automated CI pipelines run terraform apply to spin up isolated test infrastructure per pull request, and run terraform destroy once tests conclude" },
      { id: 'B', text: "By mocking all cloud APIs locally without ever running real infrastructure" },
      { id: 'C', text: "By deploying untested code directly into production" },
      { id: 'D', text: "By keeping permanent staging clusters running 24/7" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Ephemeral environments` (or preview environments) spin up dedicated cloud resources on-demand for a specific branch or test suite using `terraform apply`, and tear them down completely (`terraform destroy`) after testing, slashing idle cloud costs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["IaC", "Ephemeral Environments", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-18",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Idempotent Resource Deletion (terraform destroy)",
    scenario: "A QA team finishes performance testing on an ephemeral cloud environment.",
    question: "Which Terraform command safely reads the state file, determines resource dependencies in reverse, and deletes all managed infrastructure?",
    options: [
      { id: 'A', text: "terraform clean --all" },
      { id: 'B', text: "rm -rf .terraform" },
      { id: 'C', text: "terraform destroy (or terraform apply -destroy)" },
      { id: 'D', text: "terraform delete" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform destroy` is an alias for `terraform apply -destroy`. It inspects the state file, inverts the dependency graph, and terminates all tracked resources in safe reverse order, ensuring clean teardown without leaving orphaned cloud assets.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["Terraform CLI", "terraform destroy", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-19",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Golden Images (Packer) vs Just-In-Time Provisioning (Cloud-Init/UserData)",
    scenario: "An autoscaling web tier needs virtual machines to boot and begin serving production traffic within 30 seconds. Running complex package installations via `user_data` shell scripts on every VM boot takes 12 minutes.",
    question: "Which architectural approach pre-bakes all software dependencies into an immutable machine image prior to deployment?",
    options: [
      { id: 'A', text: "Running apt-get update on a cron job" },
      { id: 'B', text: "Golden Images built with HashiCorp Packer" },
      { id: 'C', text: "Longer user_data scripts in Terraform" },
      { id: 'D', text: "Manual SSH installation on live VMs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Golden Images` (built via tools like HashiCorp Packer) pre-install and configure all software, libraries, and security agents into a static VM image (AMI/VHD). When Terraform provisions the VM, it boots in seconds without executing slow package downloads at runtime.",
    referenceUrl: "https://developer.hashicorp.com/packer/intro",
    tags: ["IaC", "Packer", "Golden Images"]
  },
  {
    id: "hashicorp-tfa-20",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Role of Providers in the Terraform Ecosystem",
    scenario: "A software engineer examines the internal plug-in architecture of Terraform.",
    question: "What is the fundamental architectural role of a Provider in Terraform?",
    options: [
      { id: 'A', text: "A compiler that converts HCL into machine assembly code" },
      { id: 'B', text: "A plugin that translates Terraform declarative HCL resource requests into downstream cloud provider API calls" },
      { id: 'C', text: "A web dashboard for viewing cloud billing reports" },
      { id: 'D', text: "A cloud storage backend that stores encrypted state files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform Core is an agnostic engine. `Providers` are executable plugins (distributed via the Terraform Registry) that implement resource types, understand target cloud APIs (AWS, Azure, GCP, GitHub), and execute the actual REST calls to create, read, update, and delete resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers",
    tags: ["Terraform Architecture", "Providers", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-21",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Infrastructure Drift: Out-of-Band Deletion",
    scenario: "A developer accidentally deletes a production database instance through the AWS or Azure web management console. The database is still declared in the team's Terraform configuration files.",
    question: "What does Terraform propose during the next terraform plan?",
    options: [
      { id: 'A', text: "Terraform detects the database is missing from the cloud, refreshes state to reflect its absence, and proposes creating a brand-new database instance to restore desired state" },
      { id: 'B', text: "Terraform claims the infrastructure is unchanged" },
      { id: 'C', text: "Terraform deletes the local configuration file to match the cloud" },
      { id: 'D', text: "Terraform crashes and refuses to run" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When an external entity deletes a resource out-of-band, Terraform's refresh phase discovers the resource returns HTTP 404. It removes the resource from the state file and plans a `+ create` action to recreate the missing resource so real infrastructure matches declared code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/state/drift",
    tags: ["IaC", "Configuration Drift", "Reconciliation"]
  },
  {
    id: "hashicorp-tfa-22",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "State as the Single Source of Truth in Terraform",
    scenario: "A DevOps engineer is optimizing Terraform performance across large multi-cloud environments.",
    question: "Why does Terraform maintain a state file rather than querying cloud provider APIs from scratch on every run?",
    options: [
      { id: 'A', text: "State files are optional and never recommended" },
      { id: 'B', text: "To store user credit card information for cloud billing" },
      { id: 'C', text: "Because cloud providers do not have APIs" },
      { id: 'D', text: "To map real-world cloud resource IDs to declared HCL blocks, track metadata, cache attributes for performance, and resolve dependency graphs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `state file` is essential: it creates the binding between real-world cloud resource IDs and declared HCL code names, stores dependency metadata, caches attributes to prevent API rate-limiting on large environments, and supports multi-user collaboration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Terraform State", "Purpose of State", "Core Architecture"]
  },
  {
    id: "hashicorp-tfa-23",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Declarative IaC: Automated Destruction of Omitted Resources",
    scenario: "A developer removes a resource block (`resource \"aws_s3_bucket\" \"temp\"`) from their Terraform configuration file and runs `terraform apply`.",
    question: "What action does Terraform take on the real-world S3 bucket in the cloud?",
    options: [
      { id: 'A', text: "Terraform errors and terminates" },
      { id: 'B', text: "The S3 bucket remains running in the cloud forever as an untracked resource" },
      { id: 'C', text: "Terraform plans and executes the destruction (- destroy) of the S3 bucket in the cloud to match the declared configuration" },
      { id: 'D', text: "Terraform restores the deleted code block back into the file" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a declarative system, the codebase represents the total desired state. If a resource previously tracked in state is removed from the configuration, Terraform determines it should no longer exist and destroys it in the cloud.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro#why-terraform",
    tags: ["IaC", "Declarative Management", "Resource Lifecycle"]
  },
  {
    id: "hashicorp-tfa-24",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Terraform Core vs Terraform Providers Architecture",
    scenario: "The Terraform architecture is cleanly split into two distinct layers: Terraform Core and Terraform Plugins (Providers).",
    question: "Which task is the responsibility of Terraform Core rather than the Provider?",
    options: [
      { id: 'A', text: "Reading configuration files, managing the state file, building the dependency graph, and executing the plan/apply workflow" },
      { id: 'B', text: "Executing REST API calls against the Google Cloud Compute engine" },
      { id: 'C', text: "Authenticating directly to the AWS EC2 API endpoint" },
      { id: 'D', text: "Defining the specific JSON schema for Azure storage accounts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Terraform Core` is the compiled CLI binary. It reads HCL, constructs the Directed Acyclic Graph (DAG), manages the state file, and orchestrates the lifecycle. It delegates all resource-specific API calls, schema definitions, and cloud authentications to external `Providers`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/architecture",
    tags: ["Terraform Architecture", "Core vs Plugins", "Internals"]
  },
  {
    id: "hashicorp-tfa-25",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d1",
    domainName: "Understand infrastructure as code (IaC) concepts",
    title: "Continuous Integration / Continuous Deployment (CI/CD) for IaC",
    scenario: "An enterprise implements an automated CI/CD pipeline for infrastructure changes using GitHub Actions or GitLab CI.",
    question: "What is the industry-standard workflow for validating and applying Terraform code in CI/CD?",
    options: [
      { id: 'A', text: "Pull requests run 'terraform fmt -check', 'terraform validate', security scans, and 'terraform plan'; merges to the main branch trigger 'terraform apply'" },
      { id: 'B', text: "Developers run 'terraform apply' from their local laptops directly to production" },
      { id: 'C', text: "The pipeline runs 'terraform apply' on every commit to every feature branch" },
      { id: 'D', text: "All changes are applied manually through the cloud web console" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Best practices mandate automated CI validation: open pull requests trigger static formatting (`fmt`), syntax validation (`validate`), security scans, and speculative `plan` generation for peer review. Only merged commits to the protected default branch execute `terraform apply`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform",
    tags: ["IaC", "CI/CD Best Practices", "GitOps"]
  }
];

export default HASHICORP_TFA_QUESTIONS_1;
