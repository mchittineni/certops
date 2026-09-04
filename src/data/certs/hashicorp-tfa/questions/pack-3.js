export const HASHICORP_TFA_QUESTIONS_3 = [
  {
    id: "hashicorp-tfa-51",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Cost Estimation Requirements and Capabilities",
    scenario: "A FinOps director activates Cost Estimation in Terraform Cloud.",
    question: "Which cloud providers are natively supported by Terraform Cloud Cost Estimation for computing hourly and monthly cost deltas?",
    options: [
      { id: 'A', text: "AWS only" },
      { id: 'B', text: "VMware vSphere only" },
      { id: 'C', text: "Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)" },
      { id: 'D', text: "Any provider in the Terraform Registry" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform Cloud provides built-in cost estimation for major public cloud providers: AWS, Microsoft Azure, and Google Cloud Platform. It analyzes resource changes against cloud pricing APIs before apply.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Terraform Cloud", "Cost Estimation", "FinOps"]
  },
  {
    id: "hashicorp-tfa-52",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Audit Logging and SOC 2 Compliance",
    scenario: "An enterprise security audit requires logging every user interaction in Terraform Cloud, including who viewed state files, who triggered runs, and who modified environment variables.",
    question: "Which Terraform Cloud feature exports immutable event streams to enterprise SIEM platforms via Splunk or Datadog integrations?",
    options: [
      { id: 'A', text: "Audit Trails / Audit Logging API" },
      { id: 'B', text: "VCS commit log alone" },
      { id: 'C', text: "Terraform CLI output" },
      { id: 'D', text: "State file metadata" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform Cloud provides an `Audit Logging API` (Audit Trail) that records comprehensive, tamper-proof logs of all user actions, run initiations, secret modifications, and state accesses, exportable to external SIEM systems for compliance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/audit-trails",
    tags: ["Terraform Cloud", "Audit Logging", "Compliance"]
  },
  {
    id: "hashicorp-tfa-53",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Run Triggers for Cross-Workspace Coordination",
    scenario: "An enterprise maintains a `networking-workspace` (VPCs, subnets) and a separate `applications-workspace` (compute instances). When `networking-workspace` finishes an apply that changes subnet CIDRs, `applications-workspace` must automatically run a plan.",
    question: "Which Terraform Cloud feature coordinates automated execution across workspaces?",
    options: [
      { id: 'A', text: "Run Triggers" },
      { id: 'B', text: "VCS Webhooks alone" },
      { id: 'C', text: "Notification Webhooks" },
      { id: 'D', text: "Manual API polling scripts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Run Triggers` allow workspaces to be connected. When a source workspace (e.g. networking) successfully applies a run, it automatically triggers a plan in connected downstream workspaces (e.g. applications), orchestrating multi-workspace architectures.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Terraform Cloud", "Run Triggers", "Workspace Orchestration"]
  },
  {
    id: "hashicorp-tfa-54",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Sentinel Policy Enforcement Levels: Advisory vs Soft-Mandatory vs Hard-Mandatory",
    scenario: "A security team defines an organizational Sentinel policy. If the policy is violated, the run must be blocked immediately, and CANNOT be overridden by any user or administrator under any circumstances.",
    question: "Which Sentinel enforcement level enforces this non-overridable restriction?",
    options: [
      { id: 'A', text: "Optional" },
      { id: 'B', text: "Advisory (prints warnings only)" },
      { id: 'C', text: "Soft-Mandatory (can be overridden by authorized users)" },
      { id: 'D', text: "Hard-Mandatory" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sentinel has three enforcement levels: `Advisory` (prints a warning but allows apply), `Soft-Mandatory` (blocks apply, but authorized users can override), and `Hard-Mandatory` (strictly blocks apply with zero override allowed under any condition).",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/sentinel#enforcement-levels",
    tags: ["Terraform Cloud", "Sentinel", "Enforcement Levels"]
  },
  {
    id: "hashicorp-tfa-55",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Enterprise Self-Hosted Architecture",
    scenario: "A government agency with strict air-gapped security mandates requires all Terraform Cloud capabilities (VCS integration, private registry, remote execution, Sentinel) hosted inside their private, self-contained data center.",
    question: "Which HashiCorp product provides self-hosted private deployments of Terraform Cloud?",
    options: [
      { id: 'A', text: "HashiCorp Consul alone" },
      { id: 'B', text: "Terraform Enterprise (TFE)" },
      { id: 'C', text: "Terraform CLI local" },
      { id: 'D', text: "Terraform Community Edition" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Terraform Enterprise` (TFE) is the self-hosted, air-gapped distribution of Terraform Cloud. It installs on customer-owned infrastructure (VMs, Kubernetes) and provides complete organizational governance, private registries, and remote execution isolated from the public internet.",
    referenceUrl: "https://developer.hashicorp.com/terraform/enterprise",
    tags: ["Terraform Enterprise", "Self-Hosted", "Air-Gapped"]
  },
  {
    id: "hashicorp-tfa-56",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Agents for Private Infrastructure Provisioning",
    scenario: "An enterprise uses hosted Terraform Cloud (SaaS) but needs to provision resources inside an isolated on-premises datacenter that has no inbound public internet connectivity.",
    question: "Which Terraform Cloud component runs inside the private network to execute remote runs locally?",
    options: [
      { id: 'A', text: "Opening inbound SSH port 22 on the corporate firewall" },
      { id: 'B', text: "Terraform Cloud cannot manage private infrastructure" },
      { id: 'C', text: "Public NAT gateways on the internet" },
      { id: 'D', text: "Terraform Cloud Agents (TFC Agents)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Terraform Cloud Agents` allow hosted Terraform Cloud to communicate with private, isolated infrastructure. The agent runs inside the private network, polls Terraform Cloud via outbound-only HTTPS, executes the run locally, and returns state updates.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/agents",
    tags: ["Terraform Cloud", "Agents", "Hybrid Cloud"]
  },
  {
    id: "hashicorp-tfa-57",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Variable Sets in Terraform Cloud",
    scenario: "An organization manages 100 workspaces in Terraform Cloud. All 100 workspaces require the exact same AWS credentials (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`).",
    question: "Which Terraform Cloud feature shares a unified set of environment or Terraform variables across multiple workspaces?",
    options: [
      { id: 'A', text: "Copying and pasting credentials 100 times manually" },
      { id: 'B', text: "Variable Sets" },
      { id: 'C', text: "Sentinel Policies" },
      { id: 'D', text: "Global State Files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Variable Sets` in Terraform Cloud allow administrators to define a group of variables (sensitive credentials or common configuration values) once and apply them globally across all workspaces or to selected workspace subsets.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables/variable-sets",
    tags: ["Terraform Cloud", "Variable Sets", "Credential Management"]
  },
  {
    id: "hashicorp-tfa-58",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Secure Environment Variables (HCL vs Sensitive)",
    scenario: "A developer adds a database master password as a variable in a Terraform Cloud workspace. Other developers with workspace read access must not be able to view the password in the UI or API.",
    question: "Which setting on the Terraform Cloud variable hides its value after creation?",
    options: [
      { id: 'A', text: "Sensitive checkbox (write-only)" },
      { id: 'B', text: "HCL checkbox" },
      { id: 'C', text: "Environment variable checkbox" },
      { id: 'D', text: "Private tag" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Marking a variable as `Sensitive` in Terraform Cloud encrypts the value with Vault and makes it write-only. The value is permanently masked in the UI and API, visible only during run execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables#sensitive-values",
    tags: ["Terraform Cloud", "Sensitive Variables", "Security"]
  },
  {
    id: "hashicorp-tfa-59",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Local-Only Provisioners (Null Provider & null_resource)",
    scenario: "A developer needs to run a local script after several resources are created, but does not want to attach the provisioner to any real cloud resource block.",
    question: "Which utility resource from the HashiCorp null provider is traditionally used to encapsulate standalone provisioners?",
    options: [
      { id: 'A', text: "null_resource (or terraform_data in Terraform 1.4+)" },
      { id: 'B', text: "local_file" },
      { id: 'C', text: "custom_resource" },
      { id: 'D', text: "dummy_resource" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `null_resource` (and modern `terraform_data` built-in) provides a standard resource lifecycle without provisioning real cloud infrastructure. It is commonly used to house `local-exec` or `remote-exec` provisioners with `triggers`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/terraform-data",
    tags: ["Terraform", "null_resource", "terraform_data"]
  },
  {
    id: "hashicorp-tfa-60",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "terraform_data Replacement for null_resource in Terraform 1.4+",
    scenario: "A platform engineer upgrades configurations to modern Terraform versions.",
    question: "Starting in Terraform v1.4, which built-in managed resource replaces the external HashiCorp null_resource without requiring external provider downloads?",
    options: [
      { id: 'A', text: "null_resource v2" },
      { id: 'B', text: "terraform_data" },
      { id: 'C', text: "builtin_data" },
      { id: 'D', text: "local_resource" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`terraform_data` is built directly into Terraform Core (v1.4+). It requires no external provider plugin, stores arbitrary values in state, triggers lifecycle recreations using `triggers_replace`, and replaces `null_resource` cleanly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/terraform-data",
    tags: ["Terraform", "terraform_data", "Built-In Resources"]
  },
  {
    id: "hashicorp-tfa-61",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Init Backend Initialization (-reconfigure vs -migrate-state)",
    scenario: "A developer modifies the backend block from a local backend to an Amazon S3 backend in their Terraform code.",
    question: "Which command initializes the new backend while prompting to automatically copy existing state data to the new S3 bucket?",
    options: [
      { id: 'A', text: "terraform init -migrate-state" },
      { id: 'B', text: "terraform init -reconfigure (which ignores existing state)" },
      { id: 'C', text: "terraform init -force" },
      { id: 'D', text: "terraform state push" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running `terraform init -migrate-state` instructs Terraform to copy existing state data from the old backend to the new backend. In contrast, `-reconfigure` disregards any existing state and reinitializes from scratch.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#backend-initialization",
    tags: ["Terraform CLI", "terraform init", "Backend Migration"]
  },
  {
    id: "hashicorp-tfa-62",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Plan: Detailed Exit Codes (-detailed-exitcode)",
    scenario: "An automated CI/CD bash script needs to determine whether `terraform plan` detected any infrastructure changes without parsing human-readable text output.",
    question: "Which flag instructs terraform plan to return exit code 0 for no changes, exit code 2 for changes present, and exit code 1 for errors?",
    options: [
      { id: 'A', text: "-detailed-exitcode" },
      { id: 'B', text: "-json-exit" },
      { id: 'C', text: "-exit-on-diff" },
      { id: 'D', text: "-status-code" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `-detailed-exitcode` flag returns specific exit codes: `0` (succeeded, empty plan / no changes), `1` (error occurred), and `2` (succeeded, non-empty plan / changes are present), enabling automated CI/CD pipeline conditionals.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#detailed-exitcode",
    tags: ["Terraform CLI", "detailed-exitcode", "CI/CD Automation"]
  },
  {
    id: "hashicorp-tfa-63",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Enterprise Team & Governance Access Controls",
    scenario: "A platform team configures access for 50 junior engineers in Terraform Cloud. The junior engineers must be able to view workspaces and run speculative plans on pull requests, but must be blocked from executing `terraform apply` directly to production.",
    question: "Which workspace permission level should be granted to the junior engineers team?",
    options: [
      { id: 'A', text: "Read-only permission alone" },
      { id: 'B', text: "Write permission (Apply)" },
      { id: 'C', text: "Admin permission" },
      { id: 'D', text: "Plan permission (Read + Plan)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform Cloud provides granular workspace permissions: `Read` (view runs/state), `Plan` (trigger and view speculative plans), `Write` (execute applies), and `Admin` (full workspace configuration and secret management).",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions#workspace-permissions",
    tags: ["Terraform Cloud", "RBAC", "Workspace Permissions"]
  },
  {
    id: "hashicorp-tfa-64",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform fmt: Standard Formatting Enforcement",
    scenario: "A development team needs to ensure all Terraform `.tf` files adhere to standard canonical formatting and indentation conventions.",
    question: "Which Terraform CLI command rewrites configuration files into canonical format?",
    options: [
      { id: 'A', text: "terraform fmt" },
      { id: 'B', text: "terraform clean" },
      { id: 'C', text: "terraform style" },
      { id: 'D', text: "terraform lint" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform fmt` rewrites Terraform configuration files to canonical format and style, adjusting whitespace, indentation, alignment of equals signs, and block formatting across all `.tf` files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/fmt",
    tags: ["Terraform CLI", "terraform fmt", "Formatting"]
  },
  {
    id: "hashicorp-tfa-65",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform fmt -check in CI/CD Pipelines",
    scenario: "A DevOps engineer wants automated pull request checks in GitHub Actions to fail if a developer submits unformatted Terraform code, without modifying files in the Git runner.",
    question: "Which flag instructs terraform fmt to return exit code 3 when unformatted files are found?",
    options: [
      { id: 'A', text: "-check" },
      { id: 'B', text: "-verify" },
      { id: 'C', text: "-test" },
      { id: 'D', text: "-diff" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running `terraform fmt -check` lists any unformatted files and returns exit code 0 if all files are properly formatted, or non-zero (exit code 3) if any file needs formatting, making it ideal for CI/CD pipeline gating.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/fmt#check",
    tags: ["Terraform CLI", "terraform fmt -check", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-66",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate Purpose and Scope",
    scenario: "A developer writes new Terraform code on an airplane with no internet connection.",
    question: "What does terraform validate verify without accessing remote APIs or state?",
    options: [
      { id: 'A', text: "Whether cloud provider services are currently online" },
      { id: 'B', text: "Whether real cloud resources exist in AWS or Azure" },
      { id: 'C', text: "Syntactic correctness, internal consistency of attribute names and types, and provider schema compliance within configuration files" },
      { id: 'D', text: "Whether the cloud credentials have administrator IAM permissions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform validate` checks configuration files purely locally for internal syntax correctness, attribute validation against downloaded provider schemas, and undeclared variables. It does not access remote services, cloud APIs, or state files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["Terraform CLI", "terraform validate", "Syntax Checking"]
  },
  {
    id: "hashicorp-tfa-67",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Prerequisite for Running terraform validate",
    scenario: "A developer clones a fresh repository and immediately runs `terraform validate` without executing any prior commands. The command fails with: `Error: Could not satisfy a provider requirement`.",
    question: "Which command must be executed prior to terraform validate to initialize the working directory and download provider schemas?",
    options: [
      { id: 'A', text: "terraform init" },
      { id: 'B', text: "terraform login" },
      { id: 'C', text: "terraform refresh" },
      { id: 'D', text: "terraform plan" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform validate` relies on local provider schemas to verify resource attributes. If `terraform init` has not been run in the directory to install the required provider plugins, validate cannot inspect schemas and fails.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["Terraform CLI", "terraform init", "Validation Prerequisite"]
  },
  {
    id: "hashicorp-tfa-68",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Saving Execution Plans via terraform plan -out",
    scenario: "In an enterprise deployment pipeline, the plan generated and reviewed in staging must be the exact plan applied to production, guaranteeing no new changes or drift alter the execution in between.",
    question: "Which flag saves an execution plan to an encrypted binary file for deterministic application?",
    options: [
      { id: 'A', text: "-out=&lt;path&gt; (e.g. terraform plan -out=tfplan.binary)" },
      { id: 'B', text: "-save=&lt;path&gt;" },
      { id: 'C', text: "-export=&lt;path&gt;" },
      { id: 'D', text: "-file=&lt;path&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running `terraform plan -out=tfplan` writes the calculated execution plan to a file. Applying that file (`terraform apply tfplan`) guarantees that Terraform executes the exact actions planned, preventing drift or concurrent changes from slipping in.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#out-path",
    tags: ["Terraform CLI", "terraform plan -out", "Safe Deployments"]
  },
  {
    id: "hashicorp-tfa-69",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Applying Saved Plan Files via terraform apply",
    scenario: "A CI/CD runner executes `terraform apply tfplan` referencing a plan file generated in a previous step.",
    question: "Does Terraform ask for interactive confirmation ('Do you want to perform these actions? yes/no') when applying a saved plan file?",
    options: [
      { id: 'A', text: "No, Terraform applies the saved plan immediately without interactive confirmation" },
      { id: 'B', text: "Yes, the user must still type yes" },
      { id: 'C', text: "Yes, unless -force is provided" },
      { id: 'D', text: "Applying plan files is not supported" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When `terraform apply` is provided with an explicit plan file created by `terraform plan -out`, Terraform does NOT prompt for interactive confirmation. The plan was already reviewed when created, so it executes immediately.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["Terraform CLI", "terraform apply", "Automation"]
  },
  {
    id: "hashicorp-tfa-70",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Automating Apply Confirmation via -auto-approve",
    scenario: "A fully automated nightly pipeline builds ephemeral testing environments without human operators present.",
    question: "Which flag bypasses interactive confirmation when running terraform apply without a saved plan file?",
    options: [
      { id: 'A', text: "-auto-approve" },
      { id: 'B', text: "-force" },
      { id: 'C', text: "-skip-prompt" },
      { id: 'D', text: "-yes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `-auto-approve` flag instructs `terraform apply` to skip interactive approval prompts, automatically accepting the proposed changes. It is commonly used in automated non-interactive CI/CD execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply#auto-approve",
    tags: ["Terraform CLI", "-auto-approve", "Non-Interactive"]
  },
  {
    id: "hashicorp-tfa-71",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Targeted Resource Operations via -target Flag",
    scenario: "A developer is debugging an urgent issue with a single security group (`aws_security_group.sg_debug`). Applying the entire configuration would modify 50 other unrelated production resources.",
    question: "Which flag isolates execution to a single specific resource and its dependencies?",
    options: [
      { id: 'A', text: "-target=aws_security_group.sg_debug" },
      { id: 'B', text: "-resource=aws_security_group.sg_debug" },
      { id: 'C', text: "-filter=aws_security_group.sg_debug" },
      { id: 'D', text: "-only=aws_security_group.sg_debug" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `-target` flag restricts `plan`, `apply`, or `destroy` to a specific resource address (or module) and its dependencies. HashiCorp recommends using `-target` only for exceptional emergency troubleshooting, as it can cause state isolation drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#target-resource",
    tags: ["Terraform CLI", "-target", "Targeted Operations"]
  },
  {
    id: "hashicorp-tfa-72",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Replacing Tainted Resources via terraform apply -replace",
    scenario: "A virtual machine instance is corrupted due to an operating system crash, but its Terraform configuration has not changed. The engineer needs Terraform to recreate the VM.",
    question: "Which modern command instructs Terraform to destroy and recreate a specific resource during the next apply?",
    options: [
      { id: 'A', text: "terraform taint aws_instance.web (deprecated legacy command)" },
      { id: 'B', text: "terraform recreate aws_instance.web" },
      { id: 'C', text: "terraform apply -replace=\"aws_instance.web\"" },
      { id: 'D', text: "terraform delete aws_instance.web" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Starting in Terraform 0.152 and v1.0, `-replace` on `plan` or `apply` is the recommended method to force recreation of a resource. It supersedes the legacy `terraform taint` command, allowing safe previewing during planning.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#replace-resource",
    tags: ["Terraform CLI", "-replace", "Recreation"]
  },
  {
    id: "hashicorp-tfa-73",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Refreshing State Without Modifying Infrastructure (-refresh-only)",
    scenario: "An administrator suspects that resources were modified manually out-of-band in the cloud console. The administrator wants to update the state file to match reality without proposing any corrective infrastructure changes.",
    question: "Which command and flag performs a refresh-only inspection and updates state?",
    options: [
      { id: 'A', text: "terraform apply -refresh-only (or terraform plan -refresh-only)" },
      { id: 'B', text: "terraform refresh (legacy command)" },
      { id: 'C', text: "terraform sync --state" },
      { id: 'D', text: "terraform update-state" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform apply -refresh-only` queries remote cloud APIs, compares live reality against the state file, displays drift, and prompts to update the state file to match reality WITHOUT making any changes to cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only",
    tags: ["Terraform CLI", "-refresh-only", "State Refresh"]
  },
  {
    id: "hashicorp-tfa-74",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Listing Tracked Resources via terraform state list",
    scenario: "A developer needs to see all resource addresses currently recorded in the Terraform state file.",
    question: "Which command outputs a flat list of all resource instances managed by the configuration?",
    options: [
      { id: 'A', text: "terraform state list" },
      { id: 'B', text: "terraform list resources" },
      { id: 'C', text: "terraform show --all" },
      { id: 'D', text: "terraform get" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform state list` lists all resources within the state file matching any provided address filters. It is commonly used to find exact resource addresses before running `state show`, `state mv`, or `-target`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/list",
    tags: ["Terraform CLI", "terraform state list", "State Inspection"]
  },
  {
    id: "hashicorp-tfa-75",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Inspecting Resource Attributes via terraform state show",
    scenario: "An engineer needs to inspect the current attributes, IDs, and IP addresses of resource `aws_instance.db` recorded in state.",
    question: "Which command prints detailed state attributes for a single resource?",
    options: [
      { id: 'A', text: "terraform describe aws_instance.db" },
      { id: 'B', text: "terraform state get aws_instance.db" },
      { id: 'C', text: "terraform inspect aws_instance.db" },
      { id: 'D', text: "terraform state show aws_instance.db" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform state show &lt;address&gt;` displays the full set of attributes, IDs, and metadata recorded in the state file for a single specific resource or data source.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/show",
    tags: ["Terraform CLI", "terraform state show", "State Inspection"]
  }
];

export default HASHICORP_TFA_QUESTIONS_3;
