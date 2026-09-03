export const HASHICORP_TFA_QUESTIONS_5 = [
  {
    id: "hashicorp-tfa-101",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Providers: Explicit vs Inferred Providers",
    scenario: "A configuration declares an `aws_instance` resource, but does not contain an explicit `provider \"aws\" { ... }` block.",
    question: "How does Terraform handle the missing provider configuration?",
    options: [
      { id: 'A', text: "Terraform infers the provider from the resource type prefix ('aws_') and attempts to initialize the official hashicorp/aws provider with default settings" },
      { id: 'B', text: "Terraform prompts the user to enter provider details interactively" },
      { id: 'C', text: "Terraform skips provisioning the resource" },
      { id: 'D', text: "Terraform fails immediately with a fatal syntax error" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "If a resource begins with a known provider prefix (e.g. `aws_instance`), Terraform infers the provider as `aws` (defaulting to `hashicorp/aws`) and attempts to initialize it with default empty settings and environment variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration",
    tags: ["Terraform", "Inferred Providers", "Provider Architecture"]
  },
  {
    id: "hashicorp-tfa-102",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Clean Working Directory Cleanup",
    scenario: "A developer wants to completely reset their local Terraform environment, removing downloaded provider binaries and cached modules without deleting `.tf` configuration files.",
    question: "Which directory in the project root should be deleted to reset the local initialized environment?",
    options: [
      { id: 'A', text: "terraform.tfstate" },
      { id: 'B', text: "src/ directory" },
      { id: 'C', text: ".terraform directory" },
      { id: 'D', text: ".terraform.lock.hcl alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `.terraform` hidden directory contains downloaded provider binaries, external modules, and backend cache. Deleting `.terraform` cleanly resets the environment, requiring a fresh `terraform init` to re-download plugins.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["Terraform CLI", ".terraform Directory", "Maintenance"]
  },
  {
    id: "hashicorp-tfa-103",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform state rm vs terraform destroy",
    scenario: "A DevOps engineer is cleaning up unused resources from a Terraform project.",
    question: "What is the fundamental difference between terraform state rm and terraform destroy?",
    options: [
      { id: 'A', text: "There is no difference; they are identical aliases" },
      { id: 'B', text: "terraform state rm only deletes the resource from the state file (leaving the real cloud asset intact); terraform destroy terminates the real cloud asset in the cloud provider" },
      { id: 'C', text: "terraform state rm is only supported in Terraform Cloud" },
      { id: 'D', text: "terraform state rm terminates cloud resources; terraform destroy leaves them running" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "This distinction is crucial: `terraform state rm` alters only Terraform's state tracking (the cloud resource remains running untouched). `terraform destroy` calls cloud APIs to actively terminate and delete the real-world infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["Terraform CLI", "state rm vs destroy", "Safety"]
  },
  {
    id: "hashicorp-tfa-104",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Target Multiple Resources (-target)",
    scenario: "A developer needs to run a targeted plan for two specific resources: `aws_instance.web` and `aws_security_group.web_sg`.",
    question: "Can the -target flag be specified multiple times in a single command?",
    options: [
      { id: 'A', text: "Yes, multiple -target flags can be passed simultaneously (e.g. -target=aws_instance.web -target=aws_security_group.web_sg)" },
      { id: 'B', text: "No, multiple targets require commas inside quotes" },
      { id: 'C', text: "Targeting multiple resources is prohibited by Terraform" },
      { id: 'D', text: "No, -target only accepts one single resource address" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform allows chaining multiple `-target` arguments in a single command (`terraform plan -target=res1 -target=res2`), scoping execution to the union of the specified resources and their direct dependencies.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#target-resource",
    tags: ["Terraform CLI", "-target Multiple", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfa-105",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform apply with Auto-Approve Destruction (-destroy -auto-approve)",
    scenario: "An automated teardown script in CI/CD needs to destroy all resources in an ephemeral preview environment without prompting for user confirmation.",
    question: "Which command combination executes non-interactive destruction of all managed infrastructure?",
    options: [
      { id: 'A', text: "terraform clean -all" },
      { id: 'B', text: "terraform delete -y" },
      { id: 'C', text: "terraform destroy --force" },
      { id: 'D', text: "terraform apply -destroy -auto-approve (or terraform destroy -auto-approve)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Both `terraform destroy -auto-approve` and `terraform apply -destroy -auto-approve` perform immediate, non-interactive destruction of all infrastructure tracked in the state file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["Terraform CLI", "Automated Teardown", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-106",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Plan: Refresh False Flag (-refresh=false)",
    scenario: "A developer with a slow internet connection is modifying a local tag and wants to quickly verify HCL logic without waiting for Terraform to query 500 cloud APIs to refresh state.",
    question: "Which flag skips the cloud API state refresh phase during terraform plan?",
    options: [
      { id: 'A', text: "-no-refresh" },
      { id: 'B', text: "-fast-plan" },
      { id: 'C', text: "-skip-api" },
      { id: 'D', text: "-refresh=false" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Passing `-refresh=false` instructs Terraform to bypass querying remote cloud APIs for current resource attributes during planning, relying strictly on attributes cached in the local state file to generate the plan quickly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-true",
    tags: ["Terraform CLI", "-refresh=false", "Performance"]
  },
  {
    id: "hashicorp-tfa-107",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Sensitive Output Suppression in CLI",
    scenario: "A Terraform output block exports an RDS master password with `sensitive = true`.",
    question: "How does `terraform output` display this value when run without flags in the terminal?",
    options: [
      { id: 'A', text: "It outputs a cryptographic hash" },
      { id: 'B', text: "It outputs the cleartext password" },
      { id: 'C', text: "It generates an error" },
      { id: 'D', text: "It displays '&lt;sensitive&gt;' to prevent credential leakage in terminal logs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When an output has `sensitive = true`, Terraform suppresses its value in normal CLI outputs (displaying `&lt;sensitive&gt;`). To view the cleartext value explicitly, the user must run `terraform output -raw &lt;name&gt;` or `terraform output -json`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive-suppressing-values-in-cli-output",
    tags: ["Terraform", "Sensitive Outputs", "Security"]
  },
  {
    id: "hashicorp-tfa-108",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform validate Detects What Class of Errors?",
    scenario: "A developer misspells a resource attribute name in HCL (`intance_type = \"t3.micro\"` instead of `instance_type`).",
    question: "Will terraform validate catch this error?",
    options: [
      { id: 'A', text: "Only if connected to the cloud provider API" },
      { id: 'B', text: "No, validate only checks matching brackets and braces" },
      { id: 'C', text: "No, attribute typos are only caught during terraform apply" },
      { id: 'D', text: "Yes, terraform validate compares declared attributes against downloaded provider schemas and reports unrecognized arguments" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform validate` verifies attribute names and types against the provider schemas downloaded during `init`. It immediately detects misspelled arguments (e.g. `intance_type`), undeclared variables, and invalid type assignments locally.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["Terraform CLI", "terraform validate", "Schema Validation"]
  },
  {
    id: "hashicorp-tfa-109",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform login and API Token Storage",
    scenario: "A developer runs `terraform login` to authenticate with Terraform Cloud or a private module registry.",
    question: "Where does Terraform store the generated API authentication token on the developer's local workstation?",
    options: [
      { id: 'A', text: "In the root module main.tf" },
      { id: 'B', text: "In the credentials.tfrc.json file inside ~/.terraform.d/ (or OS credential store)" },
      { id: 'C', text: "In the .terraform.lock.hcl file" },
      { id: 'D', text: "In terraform.tfstate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`terraform login` requests an API token via the browser and stores it in `~/.terraform.d/credentials.tfrc.json` (on Linux/macOS) or `%APPDATA%/terraform.d/credentials.tfrc.json` (on Windows), or delegates to the OS native credential store.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/login",
    tags: ["Terraform CLI", "terraform login", "Authentication"]
  },
  {
    id: "hashicorp-tfa-110",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform logout Revocation Behavior",
    scenario: "A developer finishes working on a shared staging machine and runs `terraform logout`.",
    question: "What action does terraform logout perform on the workstation?",
    options: [
      { id: 'A', text: "It terminates all cloud resources in the account" },
      { id: 'B', text: "It revokes all SSH keys on the machine" },
      { id: 'C', text: "It deletes the user's Terraform Cloud account permanently" },
      { id: 'D', text: "It deletes the locally stored API token for the specified hostname from credentials.tfrc.json" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform logout &lt;hostname&gt;` removes the saved API token for the specified registry hostname from the local workstation's `credentials.tfrc.json` file, preventing unauthorized future CLI operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/logout",
    tags: ["Terraform CLI", "terraform logout", "Credential Management"]
  },
  {
    id: "hashicorp-tfa-111",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Providers: Overriding Provider Binary Location via CLI Config",
    scenario: "An enterprise security policy blocks workstations from downloading binary files directly from public registries.",
    question: "Which configuration file allows administrators to define a 'provider_installation' block routing provider downloads to filesystem mirrors?",
    options: [
      { id: 'A', text: "The terraform.tfstate file" },
      { id: 'B', text: ".terraform.lock.hcl" },
      { id: 'C', text: "The CLI configuration file (~/.terraformrc or terraform.rc)" },
      { id: 'D', text: "The root module main.tf" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The CLI configuration file (`~/.terraformrc` on Unix, `%APPDATA%/terraform.rc` on Windows) configures global CLI behavior, including the `provider_installation` block which specifies `filesystem_mirror` or `network_mirror` locations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/config/config-file#provider-installation",
    tags: ["Terraform CLI", "CLI Configuration", "Filesystem Mirror"]
  },
  {
    id: "hashicorp-tfa-112",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Handling Deprecated Commands: terraform taint in Modern Terraform",
    scenario: "A developer trained on legacy Terraform 0.12 runs `terraform taint aws_instance.web`.",
    question: "What is the modern, recommended alternative to tainting resources in Terraform 1.0+?",
    options: [
      { id: 'A', text: "terraform mark-dirty aws_instance.web" },
      { id: 'B', text: "terraform rebuild aws_instance.web" },
      { id: 'C', text: "Use terraform apply -replace=\"aws_instance.web\" directly during planning and application" },
      { id: 'D', text: "terraform recreate aws_instance.web" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "While `terraform taint` still exists for backward compatibility, HashiCorp officially recommends `terraform apply -replace=...`. Unlike `taint` which immediately modifies state, `-replace` allows planning and previewing the recreation safely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/taint",
    tags: ["Terraform CLI", "Legacy Taint", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-113",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Safe State Manipulation: terraform state rm Module Scope",
    scenario: "A team wants to remove an entire child module and all of its encapsulated resources from Terraform management without destroying the cloud resources.",
    question: "Can terraform state rm target an entire module address?",
    options: [
      { id: 'A', text: "terraform state rm only supports single attributes" },
      { id: 'B', text: "Yes, running terraform state rm module.networking removes all resources encapsulated within that module from state in a single command" },
      { id: 'C', text: "No, each individual resource inside the module must be removed one by one" },
      { id: 'D', text: "No, modules cannot be untracked from state" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`terraform state rm` accepts resource addresses, individual instance addresses, or entire module addresses (e.g. `module.vpc` or `module.kubernetes`), removing all child resources belonging to that module from state at once.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["Terraform CLI", "terraform state rm", "Module Management"]
  },
  {
    id: "hashicorp-tfa-114",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Module Source: Public Registry Format",
    scenario: "A team uses an official AWS VPC module from the public Terraform Registry.",
    question: "What is the standard module source format for modules hosted on the public Terraform Registry?",
    options: [
      { id: 'A', text: "&lt;namespace&gt;/&lt;name&gt;/&lt;provider&gt; (e.g. terraform-aws-modules/vpc/aws)" },
      { id: 'B', text: "&lt;name&gt;/&lt;provider&gt;/&lt;version&gt;" },
      { id: 'C', text: "aws/&lt;namespace&gt;/&lt;name&gt;" },
      { id: 'D', text: "registry.com/&lt;module&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Public Terraform Registry modules use the source syntax `&lt;namespace&gt;/&lt;name&gt;/&lt;provider&gt;` (e.g. `terraform-aws-modules/vpc/aws`). Terraform Core recognizes this three-part schema and automatically routes download requests to `registry.terraform.io`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources#terraform-registry",
    tags: ["Terraform Modules", "Registry Source", "Module Sources"]
  },
  {
    id: "hashicorp-tfa-115",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Local Filesystem Module Sources (Relative Paths)",
    scenario: "A project structures reusable code into a subdirectory named `modules/database` within the same Git repository.",
    question: "Which source string syntax correctly references this local child module?",
    options: [
      { id: 'A', text: "source = \"file://modules/database\"" },
      { id: 'B', text: "source = \"./modules/database\" (or \"../modules/database\")" },
      { id: 'C', text: "source = \"modules/database\" (without leading dot-slash)" },
      { id: 'D', text: "source = \"local::modules/database\"" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A local file path must begin with `./` or `../` to indicate that it is a relative path. Without the leading `./`, Terraform attempts to parse the string as an external registry address and fails.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources#local-paths",
    tags: ["Terraform Modules", "Local Sources", "Relative Paths"]
  },
  {
    id: "hashicorp-tfa-116",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Pinning Git Module Sources to Specific Tags or Commits (?ref=)",
    scenario: "A team references a shared company module hosted on a private GitHub repository: `git::https://github.com/example/terraform-aws-vpc.git`.",
    question: "Which URL query parameter pins the module to a specific release tag or commit SHA?",
    options: [
      { id: 'A', text: "?branch=v2.1.0" },
      { id: 'B', text: "?tag=v2.1.0" },
      { id: 'C', text: "?version=v2.1.0" },
      { id: 'D', text: "?ref=v2.1.0 (or ?ref=commit-hash)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "For Git repositories (Generic Git, GitHub, GitLab, Bitbucket), the `ref` query parameter specifies the Git revision (branch, tag, or commit hash) to checkout: `source = \"git::https://example.com/vpc.git?ref=v2.1.0\"`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources#selecting-a-revision",
    tags: ["Terraform Modules", "Git Sources", "ref Parameter"]
  },
  {
    id: "hashicorp-tfa-117",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Version Constraint Support (version Argument)",
    scenario: "A developer attempts to pass `version = \"~> 1.0\"` inside a module block sourcing a local directory (`source = \"./modules/app\"`).",
    question: "Does Terraform support the version argument on local filesystem module calls?",
    options: [
      { id: 'A', text: "Yes, if package.json exists" },
      { id: 'B', text: "Terraform requires version on all module blocks" },
      { id: 'C', text: "No, the version argument is only supported for modules sourced from a Terraform Registry; local filesystem and generic Git sources do not support the version argument" },
      { id: 'D', text: "Yes, local files must have semantic version numbers in filenames" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `version` argument inside a `module` block is supported exclusively for modules loaded from a Terraform Registry (public or private). For Git sources, versioning is achieved via `?ref=`; for local paths, `version` is prohibited.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Terraform Modules", "version Argument", "Registry vs Local"]
  },
  {
    id: "hashicorp-tfa-118",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Accessing Child Module Outputs from the Root Module",
    scenario: "A child module declared as `module \"vpc\"` defines an output named `vpc_id`.",
    question: "How does the calling root module access this output value in its own resources?",
    options: [
      { id: 'A', text: "module.vpc.vpc_id" },
      { id: 'B', text: "vpc.outputs.vpc_id" },
      { id: 'C', text: "module.vpc_id" },
      { id: 'D', text: "module.vpc.output.vpc_id" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Outputs defined in a child module are exposed to the calling module through the syntax `module.&lt;MODULE_NAME&gt;.&lt;OUTPUT_NAME&gt;`. Other resources reference this expression directly (e.g. `module.vpc.vpc_id`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#accessing-module-outputs",
    tags: ["Terraform Modules", "Module Outputs", "Scope"]
  },
  {
    id: "hashicorp-tfa-119",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Variables to Child Modules (Encapsulation)",
    scenario: "A child module requires a CIDR block to create a subnet. The root module has a variable named `corporate_cidr`.",
    question: "How are variable values passed into a child module call?",
    options: [
      { id: 'A', text: "As explicit input arguments inside the module block (e.g. cidr_block = var.corporate_cidr)" },
      { id: 'B', text: "Child modules automatically inherit all root variables implicitly" },
      { id: 'C', text: "Via environment variables only" },
      { id: 'D', text: "By exporting global state" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform modules enforce strict encapsulation. Child modules do NOT automatically inherit variables from calling modules. All required input variables must be passed explicitly as arguments inside the `module` block.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#calling-a-child-module",
    tags: ["Terraform Modules", "Module Inputs", "Encapsulation"]
  },
  {
    id: "hashicorp-tfa-120",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Re-downloading Modules via terraform init",
    scenario: "A developer edits code inside an external Git repository referenced by a child module (`?ref=main`). Running `terraform plan` does not pick up the updated code from GitHub.",
    question: "Which command instructs Terraform to re-evaluate and download updated module source code?",
    options: [
      { id: 'A', text: "terraform sync" },
      { id: 'B', text: "terraform plan -refresh" },
      { id: 'C', text: "terraform init (or terraform get -update)" },
      { id: 'D', text: "terraform module update" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform init` installs and caches child modules into the local `.terraform/modules` directory. To update external modules from remote sources without a full init, developers can run `terraform get -update`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/get",
    tags: ["Terraform Modules", "terraform get", "Caching"]
  },
  {
    id: "hashicorp-tfa-121",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Meta-Argument: for_each on Modules (Terraform 0.13+)",
    scenario: "An enterprise needs to deploy 3 identical VPCs across 3 different departments (`dev`, `stage`, `prod`) using a single module block.",
    question: "How does modern Terraform instantiate multiple instances of a child module using a map or set?",
    options: [
      { id: 'A', text: "By duplicating the module block 3 times manually" },
      { id: 'B', text: "Modules do not support for_each" },
      { id: 'C', text: "Using a while loop in HCL" },
      { id: 'D', text: "By declaring the for_each meta-argument inside the module block" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Starting in Terraform 0.13, `for_each` is supported directly on `module` blocks. It instantiates multiple instances of the module based on a map or set of strings, creating addresses like `module.vpc[\"dev\"]` and `module.vpc[\"prod\"]`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["Terraform Modules", "for_each", "Multiple Instances"]
  },
  {
    id: "hashicorp-tfa-122",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Meta-Argument: count on Modules",
    scenario: "A developer needs to conditionally create an entire module only if a boolean flag `enable_monitoring` is true.",
    question: "How can the module creation be toggled conditionally using count?",
    options: [
      { id: 'A', text: "conditional = var.enable_monitoring" },
      { id: 'B', text: "count = var.enable_monitoring ? 1 : 0" },
      { id: 'C', text: "if = var.enable_monitoring" },
      { id: 'D', text: "enabled = var.enable_monitoring" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adding `count = var.enable_monitoring ? 1 : 0` to a `module` block creates exactly one instance of the module when true (`module.monitoring[0]`), and zero instances (does not create) when false.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count",
    tags: ["Terraform Modules", "count", "Conditional Creation"]
  },
  {
    id: "hashicorp-tfa-123",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Passing Alternate Provider Configurations to Modules (providers Map)",
    scenario: "A child module creates resources in AWS region `us-west-2`, while the root module's default provider is configured for `us-east-1`.",
    question: "Which meta-argument inside the module block passes an aliased provider configuration into the child module?",
    options: [
      { id: 'A', text: "provider = aws.west" },
      { id: 'B', text: "provider_alias = aws.west" },
      { id: 'C', text: "aws_provider = aws.west" },
      { id: 'D', text: "providers = { aws = aws.west }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To pass alternate or aliased provider configurations into a child module, the calling module uses the `providers` map argument: `providers = { aws = aws.west }`, mapping the child module's internal provider name to the caller's aliased configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-providers",
    tags: ["Terraform Modules", "providers Map", "Provider Inheritance"]
  },
  {
    id: "hashicorp-tfa-124",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Workspaces: State File Storage Structure in Local Backend",
    scenario: "A developer uses the standard local backend and creates two workspaces: `default` and `development`.",
    question: "Where is the state file for the development workspace stored on the local filesystem?",
    options: [
      { id: 'A', text: "In the root directory as terraform.tfstate" },
      { id: 'B', text: "In the terraform.tfstate.d/development/terraform.tfstate directory" },
      { id: 'C', text: "In the .terraform/modules directory" },
      { id: 'D', text: "In ~/.terraform/workspaces/development" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For the local backend, the `default` workspace stores state in `terraform.tfstate` in the current working directory. All other named workspaces store their state in `terraform.tfstate.d/&lt;WORKSPACE_NAME&gt;/terraform.tfstate`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#workspace-internals",
    tags: ["Terraform Workspaces", "State Storage", "terraform.tfstate.d"]
  },
  {
    id: "hashicorp-tfa-125",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Workspaces: Remote State Key Prefix (S3 Backend)",
    scenario: "An engineering team configures an Amazon S3 remote backend and uses multiple CLI workspaces.",
    question: "Where does Terraform store state files for named workspaces in the S3 bucket?",
    options: [
      { id: 'A', text: "In completely separate S3 buckets per workspace" },
      { id: 'B', text: "S3 backend does not support workspaces" },
      { id: 'C', text: "In the root of the bucket with workspace name as filename" },
      { id: 'D', text: "Under the S3 key path prefix: env:/&lt;WORKSPACE_NAME&gt;/&lt;key&gt;" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the `s3` remote backend, the `default` workspace writes to the exact key path configured in the backend block. Named workspaces are stored with the prefix `env:/&lt;workspace_name&gt;/&lt;key&gt;` (e.g. `env:/staging/terraform.tfstate`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3#workspaces",
    tags: ["Terraform Workspaces", "S3 Backend", "env:/ Prefix"]
  }
];

export default HASHICORP_TFA_QUESTIONS_5;
