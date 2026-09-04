export const HASHICORP_TFA_QUESTIONS_2 = [
  {
    id: "hashicorp-tfa-26",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Provider Source Address Format",
    scenario: "A developer configures the AWS provider in a Terraform configuration file.",
    question: "What is the three-part fully qualified source address format for providers in the Terraform Registry?",
    options: [
      { id: 'A', text: "hostname/namespace/type (e.g. registry.terraform.io/hashicorp/aws)" },
      { id: 'B', text: "namespace/type/version" },
      { id: 'C', text: "type/namespace/cloud" },
      { id: 'D', text: "github.com/hashicorp/aws" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform provider source addresses consist of three components: `&lt;hostname&gt;/&lt;namespace&gt;/&lt;type&gt;`. The default hostname is `registry.terraform.io`, the namespace represents the publisher (e.g. `hashicorp`), and the type is the provider name (e.g. `aws`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements#source-addresses",
    tags: ["Terraform", "Providers", "Registry"]
  },
  {
    id: "hashicorp-tfa-27",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Pessimistic Version Constraint Operator (~>)",
    scenario: "A team specifies a provider version constraint as `version = \"~> 3.2.0\"`.",
    question: "Which provider versions are permitted to be installed under this constraint?",
    options: [
      { id: 'A', text: "Any version >= 3.2.0 and < 4.0.0" },
      { id: 'B', text: "Any version >= 3.2.0 and < 3.3.0 (e.g. 3.2.1, 3.2.5, but not 3.3.0)" },
      { id: 'C', text: "Any version in the 3.x series" },
      { id: 'D', text: "Only exactly version 3.2.0" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The pessimistic constraint operator `~>` allows only the rightmost version component to increment. Specifying `~> 3.2.0` permits patch updates (`3.2.1`, `3.2.9`), but blocks minor version updates (`3.3.0`). Conversely, `~> 3.2` would allow minor updates up to `< 4.0`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/version-constraints#operator-behavior",
    tags: ["Terraform", "Version Constraints", "Pessimistic Operator"]
  },
  {
    id: "hashicorp-tfa-28",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Multiple Provider Instances with Alias",
    scenario: "An enterprise architecture deploys resources into two different AWS regions (`us-east-1` and `eu-west-1`) within the same Terraform configuration file.",
    question: "How does Terraform distinguish between multiple configurations of the same provider?",
    options: [
      { id: 'A', text: "By creating two separate .tfstate files in the same directory" },
      { id: 'B', text: "Terraform strictly prohibits deploying to two regions in one configuration" },
      { id: 'C', text: "By installing two different versions of the Terraform CLI binary" },
      { id: 'D', text: "By defining a primary default provider block and a secondary provider block with an 'alias' attribute" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform allows multiple configurations of the same provider using the `alias` meta-argument. The un-aliased block serves as the default, while resources specify `provider = aws.&lt;alias&gt;` (e.g. `provider = aws.eu`) to use the secondary configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration#alias-multiple-provider-configurations",
    tags: ["Terraform", "Providers", "Alias"]
  },
  {
    id: "hashicorp-tfa-29",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Provisioners as a Measure of Last Resort",
    scenario: "A developer considers using a `remote-exec` provisioner to run shell scripts on a freshly provisioned virtual machine to install Docker.",
    question: "Why does HashiCorp explicitly advise that provisioners should be used only as a last resort?",
    options: [
      { id: 'A', text: "Provisioners break idempotency, do not model resource dependencies declaratively, and execute outside Terraform's state graph management" },
      { id: 'B', text: "Provisioners delete the state file after execution" },
      { id: 'C', text: "Provisioners charge extra cloud fees" },
      { id: 'D', text: "Provisioners are only supported on Windows operating systems" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HashiCorp documentation warns that provisioners are a measure of last resort. They introduce non-declarative imperative commands, cannot be planned or validated during `terraform plan`, make code brittle, and are better replaced by cloud-init or Packer images.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#provisioners-are-a-last-resort",
    tags: ["Terraform", "Provisioners", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-30",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "local-exec Provisioner Execution Environment",
    scenario: "A Terraform configuration defines a `local-exec` provisioner inside a resource block.",
    question: "On which machine does the local-exec provisioner command execute?",
    options: [
      { id: 'A', text: "On the cloud provider's API server gateway" },
      { id: 'B', text: "On HashiCorp's hosted cloud servers" },
      { id: 'C', text: "Inside the target virtual machine in the cloud" },
      { id: 'D', text: "On the local machine where the Terraform CLI binary is currently running" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `local-exec` provisioner invokes a local executable or shell command on the machine running the Terraform CLI (the developer's laptop or the CI/CD runner runner), NOT on the remote cloud resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/local-exec",
    tags: ["Terraform", "Provisioners", "local-exec"]
  },
  {
    id: "hashicorp-tfa-31",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "remote-exec Provisioner Connection Requirements",
    scenario: "A `remote-exec` provisioner is declared to run a script on a cloud Linux instance.",
    question: "Which nested block is mandatory inside the resource or provisioner to specify SSH or WinRM credentials?",
    options: [
      { id: 'A', text: "connection block (specifying type, user, private_key, or password)" },
      { id: 'B', text: "credentials block" },
      { id: 'C', text: "auth block" },
      { id: 'D', text: "ssh block" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `remote-exec` provisioner requires a `connection` block (either inside the resource or nested within the provisioner) that declares the connection `type` (`ssh` or `winrm`), `user`, `private_key` / `password`, and target `host`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/connection",
    tags: ["Terraform", "Provisioners", "remote-exec"]
  },
  {
    id: "hashicorp-tfa-32",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Provisioner Failure Behavior (on_failure = continue vs fail)",
    scenario: "A non-critical diagnostic logging script executed by a local-exec provisioner occasionally returns an exit code 1.",
    question: "By default, how does Terraform handle a provisioner that returns a non-zero exit code?",
    options: [
      { id: 'A', text: "Terraform fails the deployment immediately, marks the resource as tainted in state, and halts the run" },
      { id: 'B', text: "Terraform ignores the error and continues silently" },
      { id: 'C', text: "Terraform retries the script 100 times" },
      { id: 'D', text: "Terraform deletes the entire state file" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default (`on_failure = fail`), if a provisioner fails, Terraform errors, marks the enclosing resource as `tainted` in state (meaning it will be recreated on next apply), and aborts. Setting `on_failure = continue` instructs Terraform to ignore the error.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#failure-behavior",
    tags: ["Terraform", "Provisioners", "on_failure"]
  },
  {
    id: "hashicorp-tfa-33",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Destroy-Time Provisioners (when = destroy)",
    scenario: "A developer needs to execute a deregistration script when a virtual machine is destroyed via `terraform destroy`.",
    question: "Which parameter marks a provisioner as a destroy-time provisioner?",
    options: [
      { id: 'A', text: "when = destroy" },
      { id: 'B', text: "type = destroy" },
      { id: 'C', text: "action = delete" },
      { id: 'D', text: "on_destroy = true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adding `when = destroy` to a `provisioner` block runs the provisioner before the resource is destroyed in the cloud, allowing graceful cleanup, license deregistration, or draining before termination.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#destroy-time-provisioners",
    tags: ["Terraform", "Provisioners", "Destroy-Time"]
  },
  {
    id: "hashicorp-tfa-34",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Creation-Time vs Destroy-Time Provisioner Failure Semantics",
    scenario: "A destroy-time provisioner is configured on an infrastructure resource with default failure behavior.",
    question: "What happens if a destroy-time provisioner fails during terraform destroy when on_failure is set to fail?",
    options: [
      { id: 'A', text: "Terraform deletes the resource anyway and corrupts state" },
      { id: 'B', text: "The resource is marked tainted" },
      { id: 'C', text: "Terraform stops the destroy process, leaves the resource intact, and allows the user to re-run destroy after fixing the issue" },
      { id: 'D', text: "The resource is converted to an unmanaged resource" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "If a destroy-time provisioner fails, Terraform halts execution immediately without destroying the resource. The resource remains in state so that the user can fix the issue and safely re-attempt destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax#destroy-time-provisioners",
    tags: ["Terraform", "Provisioners", "Failure Handling"]
  },
  {
    id: "hashicorp-tfa-35",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Provider Tiers: Official vs Partner vs Community",
    scenario: "When browsing the public Terraform Registry, an engineer notices badge indicators next to providers.",
    question: "Which tier represents providers maintained directly by HashiCorp (e.g. AWS, Azure, Google, Vault)?",
    options: [
      { id: 'A', text: "Enterprise Providers" },
      { id: 'B', text: "Official Providers" },
      { id: 'C', text: "Community Providers" },
      { id: 'D', text: "Partner Providers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Terraform Registry classifies providers into three tiers: `Official` (owned and maintained by HashiCorp), `Partner` (maintained by third-party technology partners like Datadog, Snowflake, or MongoDB), and `Community` (published by individual open-source contributors).",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/providers",
    tags: ["Terraform", "Provider Tiers", "Registry"]
  },
  {
    id: "hashicorp-tfa-36",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Inversion: Explicit vs Implicit Dependencies",
    scenario: "A developer creates an AWS S3 bucket and a virtual machine that reads from the bucket. The VM resource references `aws_s3_bucket.data.bucket` in its configuration.",
    question: "What type of dependency is established between the virtual machine and the S3 bucket?",
    options: [
      { id: 'A', text: "A circular dependency" },
      { id: 'B', text: "An unmanaged dependency" },
      { id: 'C', text: "An explicit dependency (declared via depends_on)" },
      { id: 'D', text: "An implicit dependency (automatically detected by Terraform from the expression reference)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform automatically infers `implicit dependencies` when one resource references an attribute of another resource (e.g. `aws_s3_bucket.data.id`). Terraform automatically provisions the S3 bucket before the virtual machine without requiring manual configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior#implicit-and-explicit-dependencies",
    tags: ["Terraform", "Dependencies", "Implicit vs Explicit"]
  },
  {
    id: "hashicorp-tfa-37",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Explicit Dependencies via depends_on Meta-Argument",
    scenario: "A virtual machine requires an IAM role assignment to be active in the cloud before starting, but the VM resource does not directly reference any attributes of the role assignment.",
    question: "Which meta-argument explicitly forces Terraform to wait until the IAM role is created before provisioning the VM?",
    options: [
      { id: 'A', text: "before = [aws_iam_role_policy_attachment.app]" },
      { id: 'B', text: "depends_on = [aws_iam_role_policy_attachment.app]" },
      { id: 'C', text: "waitFor = [aws_iam_role_policy_attachment.app]" },
      { id: 'D', text: "after = [aws_iam_role_policy_attachment.app]" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When an implicit dependency cannot be established via attribute references (e.g. an invisible cloud API timing requirement), the `depends_on` meta-argument explicitly defines an ordering constraint, forcing Terraform to complete the listed resources first.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Terraform", "depends_on", "Dependencies"]
  },
  {
    id: "hashicorp-tfa-38",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud: Remote Execution vs Local CLI Execution",
    scenario: "An organization adopts Terraform Cloud, and developers execute commands from their local workstations.",
    question: "When a developer executes terraform plan or terraform apply locally, where does the execution actually take place?",
    options: [
      { id: 'A', text: "Locally on the developer's laptop using local memory" },
      { id: 'B', text: "Remotely in a secure, isolated container runner managed by Terraform Cloud" },
      { id: 'C', text: "On the developer's company Git server" },
      { id: 'D', text: "Inside the cloud provider's root billing console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In standard Terraform Cloud remote execution mode, the local CLI acts as a thin client: it bundles the local configuration files, transmits them to Terraform Cloud, and executes `plan` and `apply` inside a remote container runner with centralized environment variables and state locking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run",
    tags: ["Terraform Cloud", "Remote Execution", "Enterprise"]
  },
  {
    id: "hashicorp-tfa-39",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Private Module Registry",
    scenario: "An enterprise develops internal, proprietary Terraform modules containing hardened security architectures. The modules must be shared across 50 internal development teams but kept strictly private.",
    question: "Which Terraform Cloud feature hosts private, version-controlled reusable modules for organizational members?",
    options: [
      { id: 'A', text: "Terraform Cloud Private Module Registry" },
      { id: 'B', text: "Local filesystem folders alone" },
      { id: 'C', text: "Public Terraform Registry" },
      { id: 'D', text: "GitHub Releases public bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Terraform Cloud Private Module Registry` provides a secure, centralized repository for sharing vetted, versioned infrastructure modules within an organization, supporting semantic versioning, automated documentation rendering, and access controls.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Terraform Cloud", "Private Registry", "Module Governance"]
  },
  {
    id: "hashicorp-tfa-40",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Cloud Workspaces vs CLI Workspaces",
    scenario: "An engineer familiar with open-source CLI workspaces transitions to Terraform Cloud.",
    question: "In Terraform Cloud, what does a Workspace represent?",
    options: [
      { id: 'A', text: "A complete management unit containing its own configuration source, state file, variables, secrets, run history, and RBAC permissions" },
      { id: 'B', text: "Only a temporary Git branch" },
      { id: 'C', text: "A physical data center location" },
      { id: 'D', text: "A user's login account name" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Terraform Cloud, a `Workspace` is a comprehensive operational unit. Unlike CLI workspaces that only isolate state files, a Terraform Cloud workspace encapsulates VCS repository links, environment variables, cloud credentials, execution history, and team RBAC.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["Terraform Cloud", "Workspaces", "Governance"]
  },
  {
    id: "hashicorp-tfa-41",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "VCS-Driven Workflow in Terraform Cloud",
    scenario: "A company links a Terraform Cloud workspace to a GitHub repository's main branch.",
    question: "What automated action occurs when a developer opens a pull request against main?",
    options: [
      { id: 'A', text: "Terraform Cloud automatically triggers a speculative plan, validating code and displaying proposed infrastructure changes directly in the pull request discussion" },
      { id: 'B', text: "Terraform Cloud immediately provisions all resources to production" },
      { id: 'C', text: "Terraform Cloud merges the pull request without human review" },
      { id: 'D', text: "Terraform Cloud deletes the branch" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `VCS-driven workflow`, opening a pull request automatically triggers a `speculative plan`. Terraform Cloud plans the changes against live state and posts the plan summary as a commit status check on GitHub, enabling peer review before merging.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/vcs",
    tags: ["Terraform Cloud", "VCS Workflow", "GitOps"]
  },
  {
    id: "hashicorp-tfa-42",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Speculative Plans in Terraform Cloud",
    scenario: "A speculative plan is triggered on a pull request in Terraform Cloud.",
    question: "Can a speculative plan be applied directly to modify live infrastructure?",
    options: [
      { id: 'A', text: "No, speculative plans are strictly read-only and can never be applied; they exist only to preview proposed changes" },
      { id: 'B', text: "Yes, any developer can apply a speculative plan immediately" },
      { id: 'C', text: "Yes, if the pull request is older than 24 hours" },
      { id: 'D', text: "Speculative plans modify only staging environments" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Speculative plans` in Terraform Cloud are strictly ephemeral, read-only plan outputs. They cannot be applied to live infrastructure. Their sole purpose is providing feedback on the plan output and Sentinel policy compliance prior to merge.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/states#speculative-plans",
    tags: ["Terraform Cloud", "Speculative Plans", "Safety"]
  },
  {
    id: "hashicorp-tfa-43",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: required_providers Block Structure",
    scenario: "A developer creates a new project using modern Terraform versions.",
    question: "In modern Terraform (0.13+), where must external provider requirements, source addresses, and version constraints be declared?",
    options: [
      { id: 'A', text: "Inside the provider \"aws\" block directly" },
      { id: 'B', text: "Inside the terraform { required_providers { ... } } block" },
      { id: 'C', text: "In environment variables" },
      { id: 'D', text: "In a file named providers.json" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Terraform 0.13+, all provider requirements must be declared inside the `terraform { required_providers { ... } }` configuration block, defining each provider's local name, registry `source` address, and `version` constraint.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements#requiring-providers",
    tags: ["Terraform", "required_providers", "Configuration"]
  },
  {
    id: "hashicorp-tfa-44",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Providers: In-House and Custom Providers",
    scenario: "An enterprise develops a proprietary in-house Terraform provider for internal bare-metal datacenter provisioning.",
    question: "Which hostname namespace in a provider source address represents an internal private registry?",
    options: [
      { id: 'A', text: "Custom hostnames are not supported by Terraform" },
      { id: 'B', text: "registry.terraform.io only" },
      { id: 'C', text: "A custom enterprise domain (e.g. terraform.company.internal/it-ops/baremetal)" },
      { id: 'D', text: "github.com exclusively" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform fully supports custom hostnames in provider source addresses (e.g. `mycorp.registry.com/ops/customcloud`), allowing organizations to distribute in-house providers via private registries or local filesystem mirrors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements#source-addresses",
    tags: ["Terraform", "Custom Providers", "Private Registry"]
  },
  {
    id: "hashicorp-tfa-45",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Plugin Cache Directory (TF_PLUGIN_CACHE_DIR)",
    scenario: "A developer runs `terraform init` across 20 different project directories on their workstation. Each initialization downloads the same 200 MB AWS provider binary, consuming 4 GB of disk space.",
    question: "Which environment variable configures a global centralized cache directory for downloaded provider plugins?",
    options: [
      { id: 'A', text: "TF_GLOBAL_DIR" },
      { id: 'B', text: "TERRAFORM_CACHE_PATH" },
      { id: 'C', text: "TF_PROVIDER_CACHE" },
      { id: 'D', text: "TF_PLUGIN_CACHE_DIR" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `TF_PLUGIN_CACHE_DIR=\"$HOME/.terraform.d/plugin-cache\"` instructs Terraform to maintain a centralized cache directory for provider plugins. Downloaded provider binaries are cached once and symlinked, saving disk space and speeding up `init`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/config/config-file#provider-plugin-cache",
    tags: ["Terraform CLI", "TF_PLUGIN_CACHE_DIR", "Performance Tuning"]
  },
  {
    id: "hashicorp-tfa-46",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Dependency Lock File (.terraform.lock.hcl)",
    scenario: "A developer runs terraform init and checks in the newly generated dependency lock file to Git.",
    question: "What is the primary architectural purpose of the .terraform.lock.hcl dependency lock file?",
    options: [
      { id: 'A', text: "It locks the exact provider versions and cryptographic checksums used by the project, ensuring all team members and CI/CD use identical provider binaries" },
      { id: 'B', text: "It locks the state file so concurrent users cannot edit it" },
      { id: 'C', text: "It stores encrypted API passwords" },
      { id: 'D', text: "It prevents developers from modifying .tf files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Introduced in Terraform 0.14, `.terraform.lock.hcl` records the exact version and multi-platform cryptographic checksums (hashes) of all provider plugins selected for the configuration, guaranteeing reproducible builds across machines and protecting against supply-chain tampering.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Terraform", "Lock File", "Supply Chain Security"]
  },
  {
    id: "hashicorp-tfa-47",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Upgrading Locked Provider Dependencies (terraform init -upgrade)",
    scenario: "A new minor version of the AWS provider is released that fixes a critical bug. The project's `.terraform.lock.hcl` file locks the provider to version 4.10.0.",
    question: "Which command instructs Terraform to ignore the lock file and update providers to the newest version allowed by configuration constraints?",
    options: [
      { id: 'A', text: "terraform refresh" },
      { id: 'B', text: "terraform upgrade --all" },
      { id: 'C', text: "terraform update" },
      { id: 'D', text: "terraform init -upgrade" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running `terraform init -upgrade` instructs Terraform to re-evaluate the version constraints in configuration files, download the newest matching provider versions, and update the `.terraform.lock.hcl` file with new version numbers and checksums.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Terraform CLI", "terraform init -upgrade", "Dependencies"]
  },
  {
    id: "hashicorp-tfa-48",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform State Locking with Remote Backends",
    scenario: "Two team members run `terraform apply` at the exact same second targeting the same AWS S3 backend.",
    question: "How does Terraform prevent concurrent state corruption when using Amazon S3 as a backend?",
    options: [
      { id: 'A', text: "By queuing the second user in an SQS message queue" },
      { id: 'B', text: "By creating two separate AWS accounts automatically" },
      { id: 'C', text: "The S3 backend does not support locking" },
      { id: 'D', text: "By utilizing an Amazon DynamoDB table configured for state locking; the second user receives an 'Error acquiring the state lock'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The standard Terraform `s3` backend uses an Amazon DynamoDB table (`dynamodb_table` setting) to enforce distributed state locking. When a run begins, Terraform acquires a lock in DynamoDB, blocking concurrent executions and releasing the lock upon completion.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3#dynamodb-state-locking",
    tags: ["Terraform", "State Locking", "S3 and DynamoDB"]
  },
  {
    id: "hashicorp-tfa-49",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Force Unlocking a Stuck State Lock (terraform force-unlock)",
    scenario: "A CI/CD runner crashes midway through a `terraform apply` due to a power failure. Subsequent runs fail with: `Error: Error acquiring the state lock: Lock Info: ID: 3e8f...`.",
    question: "Which command manually releases the orphaned lock after verifying no other process is actively running?",
    options: [
      { id: 'A', text: "terraform state unlock" },
      { id: 'B', text: "rm -rf .terraform" },
      { id: 'C', text: "terraform force-unlock &lt;LOCK-ID&gt;" },
      { id: 'D', text: "terraform unlock --all" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform force-unlock &lt;LOCK-ID&gt;` manually removes a stuck or orphaned lock on the backend state. It must be used with extreme caution after confirming that no other process or colleague is actively modifying state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["Terraform CLI", "force-unlock", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-50",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    domainName: "Understand Terraform's purpose and basics",
    title: "Terraform Backend Types: Standard vs Enhanced",
    scenario: "A cloud platform architect compares different backend implementations for state storage.",
    question: "In Terraform architecture, what is the distinction between a Standard backend and an Enhanced backend?",
    options: [
      { id: 'A', text: "Standard backends are free; Enhanced backends require enterprise licenses" },
      { id: 'B', text: "A Standard backend only stores state and provides locking (e.g. S3, GCS, azurerm); an Enhanced backend also supports remote plan and apply execution (e.g. Terraform Cloud / remote)" },
      { id: 'C', text: "Standard backends do not support locking" },
      { id: 'D', text: "Standard backends run in RAM; Enhanced backends run on disk" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Backends in Terraform are categorized into: `Standard` backends (e.g. `s3`, `gcs`, `azurerm`, `consul`, `http`) which store state and provide locking; and `Enhanced` backends (such as `cloud` or `remote`) which store state AND can execute operations remotely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration#types",
    tags: ["Terraform", "Backends", "Standard vs Enhanced"]
  }
];

export default HASHICORP_TFA_QUESTIONS_2;
