export const HASHICORP_TFA_QUESTIONS_6 = [
  {
    id: "hashicorp-tfa-126",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Interpolating Current Workspace Name in HCL (terraform.workspace)",
    scenario: "A developer wants virtual machines in a single configuration to be named automatically based on the active workspace (e.g. `web-dev` or `web-prod`).",
    question: "Which built-in named value references the active workspace name inside HCL expressions?",
    options: [
      { id: 'A', text: "workspace.name" },
      { id: 'B', text: "terraform.workspace" },
      { id: 'C', text: "env.WORKSPACE" },
      { id: 'D', text: "var.workspace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The built-in expression `terraform.workspace` returns the string name of the currently selected workspace (e.g. `name = \"web-${terraform.workspace}\"`), allowing dynamic naming and sizing across environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#current-workspace-interpolation",
    tags: ["Terraform Workspaces", "terraform.workspace", "Interpolation"]
  },
  {
    id: "hashicorp-tfa-127",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "When NOT to Use Open-Source CLI Workspaces",
    scenario: "An enterprise architect reviews using open-source CLI workspaces to separate Production from Development.",
    question: "Why does HashiCorp advise against using CLI workspaces as the sole mechanism for separating Dev and Prod?",
    options: [
      { id: 'A', text: "Workspaces share the exact same backend configuration, credentials, and code; a misconfiguration or accidental CLI command can destroy production infrastructure" },
      { id: 'B', text: "CLI workspaces cannot create virtual machines" },
      { id: 'C', text: "CLI workspaces only support Azure" },
      { id: 'D', text: "Cloud providers ban workspaces" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HashiCorp guidance states that CLI workspaces are ideal for identical ephemeral feature branches, but NOT for separating environments with different access controls, security boundaries, or regions. Production should use separate directories, state files, and credentials.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Terraform Workspaces", "Best Practices", "Separation of Environments"]
  },
  {
    id: "hashicorp-tfa-128",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "The Default Workspace in Terraform",
    scenario: "A developer initializes a brand-new Terraform configuration directory using terraform init.",
    question: "Which workspace is automatically created and active initially?",
    options: [
      { id: 'A', text: "master" },
      { id: 'B', text: "root" },
      { id: 'C', text: "main" },
      { id: 'D', text: "default" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Every Terraform configuration directory has an initial workspace named `default`. The default workspace cannot be deleted via `terraform workspace delete`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#using-workspaces",
    tags: ["Terraform Workspaces", "default Workspace", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-129",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Deleting Workspaces (terraform workspace delete)",
    scenario: "A developer finishes testing an ephemeral environment in workspace `feature-x` and runs `terraform destroy` to tear down all resources.",
    question: "Which command deletes the empty workspace from the system?",
    options: [
      { id: 'A', text: "terraform workspace clear feature-x" },
      { id: 'B', text: "terraform workspace drop feature-x" },
      { id: 'C', text: "terraform workspace rm feature-x" },
      { id: 'D', text: "terraform workspace delete feature-x" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running `terraform workspace delete &lt;name&gt;` removes the named workspace. By default, Terraform refuses to delete a workspace that still contains tracked resources in state or is currently selected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/workspace/delete",
    tags: ["Terraform Workspaces", "terraform workspace delete", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-130",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Forcing Deletion of Non-Empty Workspaces (-force)",
    scenario: "A developer needs to delete a workspace whose cloud resources were already deleted out-of-band, but state still contains dangling records.",
    question: "Which flag forces workspace deletion even if the state file is non-empty?",
    options: [
      { id: 'A', text: "-force" },
      { id: 'B', text: "-yes" },
      { id: 'C', text: "-f" },
      { id: 'D', text: "-ignore-state" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform workspace delete -force &lt;name&gt;` deletes the workspace even if its state file contains resource records, discarding the state file permanently.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/workspace/delete#force",
    tags: ["Terraform Workspaces", "delete -force", "State Clean-Up"]
  },
  {
    id: "hashicorp-tfa-131",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Package Sub-Directories in Git URLs (// Syntax)",
    scenario: "A single GitHub repository (`https://github.com/corp/infrastructure.git`) houses 10 different reusable Terraform modules in subdirectories (`/modules/vpc`, `/modules/eks`).",
    question: "Which syntax instructs Terraform to download the Git repository and load a module from a specific subdirectory?",
    options: [
      { id: 'A', text: "Double forward slash (//) e.g. git::https://github.com/corp/infrastructure.git//modules/vpc" },
      { id: 'B', text: "Query parameter ?path=modules/vpc" },
      { id: 'C', text: "#modules/vpc fragment identifier" },
      { id: 'D', text: "Single slash / e.g. .../infrastructure.git/modules/vpc" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The double forward slash `//` separates the remote repository URL from the inner subdirectory path. Terraform clones the entire Git repository and resolves the module root to that specific inner folder.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources#modules-in-package-sub-directories",
    tags: ["Terraform Modules", "Sub-directory Sources", "// Syntax"]
  },
  {
    id: "hashicorp-tfa-132",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Composition: Flattening Deep Module Hierarchies",
    scenario: "A software engineering team builds nested modules 6 levels deep (module A calls module B, which calls module C...). During deployments, debugging variable passing becomes unmanageable.",
    question: "What architectural design practice does HashiCorp recommend regarding module nesting depth?",
    options: [
      { id: 'A', text: "Favor shallow, flat module composition over deep nesting (modules should rarely nest more than 1 or 2 levels deep)" },
      { id: 'B', text: "Nest modules at least 10 levels deep for maximum abstraction" },
      { id: 'C', text: "Put every single resource in its own child module" },
      { id: 'D', text: "Never use modules at all" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HashiCorp recommends shallow module composition. Deeply nested modules create brittle abstractions, obscure dependencies, make variable passing tedious, and hinder code refactoring. Child modules should be simple, composable building blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Terraform Modules", "Module Composition", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-133",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Standard Module Structure (main.tf, variables.tf, outputs.tf)",
    scenario: "An engineer prepares a reusable infrastructure module for publication to the public Terraform Registry.",
    question: "According to HashiCorp conventions, what are the three standard core files expected in every module root?",
    options: [
      { id: 'A', text: "main.tf, variables.tf, and outputs.tf" },
      { id: 'B', text: "module.tf, input.tf, and result.tf" },
      { id: 'C', text: "app.tf, vars.tf, and return.tf" },
      { id: 'D', text: "index.tf, config.tf, and export.tf" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The HashiCorp standard module structure expects: `main.tf` (primary resource declarations), `variables.tf` (input variable definitions), and `outputs.tf` (output value definitions), alongside a `README.md` and `LICENSE`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Terraform Modules", "Standard Structure", "File Conventions"]
  },
  {
    id: "hashicorp-tfa-134",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module outputs: Marking Child Outputs as Sensitive",
    scenario: "A child module creates a database and exposes `master_password` via an output block.",
    question: "How should the child module declare this output to prevent its value from appearing in console logs when consumed by the root module?",
    options: [
      { id: 'A', text: "mask = true" },
      { id: 'B', text: "sensitive = true inside the output block" },
      { id: 'C', text: "hidden = true" },
      { id: 'D', text: "private = true" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Declaring `sensitive = true` on a module's `output` block instructs Terraform to redact the value in CLI plan and apply summaries (`&lt;sensitive&gt;`), protecting secrets from leaking into CI/CD build logs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs#sensitive",
    tags: ["Terraform Modules", "Sensitive Outputs", "Security"]
  },
  {
    id: "hashicorp-tfa-135",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module depends_on Meta-Argument",
    scenario: "A root module calls `module \"kubernetes_apps\"`. All resources inside this module require `module \"eks_cluster\"` to be completely provisioned and operational first.",
    question: "How can the root module declare that the entire applications module depends on the EKS cluster module?",
    options: [
      { id: 'A', text: "order = 2" },
      { id: 'B', text: "depends_on = [module.eks_cluster] inside the module \"kubernetes_apps\" block" },
      { id: 'C', text: "wait_for = [module.eks_cluster]" },
      { id: 'D', text: "after = [module.eks_cluster]" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Terraform 0.13+, `depends_on` can be added to a `module` block. This forces Terraform to finish creating all resources within the prerequisite module (`module.eks_cluster`) before starting any resource in `module.kubernetes_apps`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Terraform Modules", "depends_on", "Module Dependencies"]
  },
  {
    id: "hashicorp-tfa-136",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Sourcing Modules from Generic Mercurial or S3 Buckets",
    scenario: "An enterprise architect evaluates remote module storage options for an internal infrastructure library.",
    question: "In addition to Git and the public Registry, which of the following is a valid native source protocol supported by Terraform for loading modules?",
    options: [
      { id: 'A', text: "Docker images (docker://...)" },
      { id: 'B', text: "FTP servers (ftp://...)" },
      { id: 'C', text: "Amazon S3 buckets (s3::https://s3.amazonaws.com/bucket/module.zip) and GCS buckets (gcs::https://...)" },
      { id: 'D', text: "NFS mount paths" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform natively supports sourcing modules from: Local paths, Terraform Registry, GitHub, Bitbucket, Generic Git, Generic Mercurial, HTTP/HTTPS URLs (pointing to archives), Amazon S3 buckets, and Google Cloud Storage (GCS) buckets.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources",
    tags: ["Terraform Modules", "Supported Sources", "S3 and GCS"]
  },
  {
    id: "hashicorp-tfa-137",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Input Variables: Validation Blocks within Modules",
    scenario: "A module author creates an input variable `environment_type` in `variables.tf`. The module should only accept the values `dev`, `stage`, or `prod`.",
    question: "How can the module author enforce this rule and provide a custom error message natively inside the variable definition?",
    options: [
      { id: 'A', text: "Variable validation is not supported in modules" },
      { id: 'B', text: "By using a Sentinel policy only" },
      { id: 'C', text: "By writing a bash script in main.tf" },
      { id: 'D', text: "By defining a validation block with condition = contains([\"dev\", \"stage\", \"prod\"], var.environment_type) and error_message" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform `validation` blocks inside `variable` declarations define custom `condition` rules and descriptive `error_message` strings, executing early during `terraform validate` and `terraform plan`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules",
    tags: ["Terraform Modules", "Custom Validation", "Input Variables"]
  },
  {
    id: "hashicorp-tfa-138",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Inputs: Optional Attributes in Object Types (optional())",
    scenario: "A module author defines an input variable for a complex object type representing server configuration. The attribute `monitoring_port` should default to `9090` if omitted by callers.",
    question: "Which Terraform type constraint modifier specifies an optional attribute with a default value?",
    options: [
      { id: 'A', text: "maybe(number, 9090)" },
      { id: 'B', text: "optional(number, 9090)" },
      { id: 'C', text: "default(number, 9090)" },
      { id: 'D', text: "nullable(number, 9090)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `optional()` modifier in type constraints (e.g. `type = object({ port = optional(number, 9090) })`) marks object attributes as optional and optionally provides a default fallback value if omitted.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#optional-object-type-attributes",
    tags: ["Terraform Types", "optional()", "Complex Object Types"]
  },
  {
    id: "hashicorp-tfa-139",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Publishing Requirements for the Public Terraform Registry",
    scenario: "An engineer wants to publish an open-source module to the public Terraform Registry.",
    question: "Which repository naming format is required by the public Terraform Registry for GitHub repositories?",
    options: [
      { id: 'A', text: "terraform-&lt;PROVIDER&gt;-&lt;NAME&gt; (e.g. terraform-aws-vault)" },
      { id: 'B', text: "tf-module-&lt;NAME&gt;" },
      { id: 'C', text: "hashicorp-&lt;NAME&gt;" },
      { id: 'D', text: "terraform-module-&lt;PROVIDER&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The public Terraform Registry requires module repositories on GitHub to strictly follow the naming pattern `terraform-&lt;PROVIDER&gt;-&lt;NAME&gt;` (e.g. `terraform-aws-vpc` or `terraform-azurerm-aks`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish#requirements",
    tags: ["Terraform Registry", "Publishing Modules", "Naming Conventions"]
  },
  {
    id: "hashicorp-tfa-140",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Terraform Workspaces: Showing Active Workspace via CLI",
    scenario: "An engineer wants to verify which workspace is currently active before running an apply command.",
    question: "Which command outputs only the name of the currently selected workspace?",
    options: [
      { id: 'A', text: "terraform workspace show" },
      { id: 'B', text: "terraform workspace current" },
      { id: 'C', text: "terraform workspace whoami" },
      { id: 'D', text: "terraform workspace active" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform workspace show` outputs the single string name of the currently selected workspace (e.g. `production` or `default`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/workspace/show",
    tags: ["Terraform CLI", "workspace show", "Active Workspace"]
  },
  {
    id: "hashicorp-tfa-141",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Calling Conventions: Passing Complex Objects",
    scenario: "A child module creates multiple firewall rules. Rather than passing 10 separate scalar variables, the author accepts a list of objects.",
    question: "Which type constraint represents a list of structured records?",
    options: [
      { id: 'A', text: "list(object({ port = number, protocol = string, cidr = string }))" },
      { id: 'B', text: "array(map(string))" },
      { id: 'C', text: "set(dictionary)" },
      { id: 'D', text: "list(json)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `list(object({ ... }))` type constraint enforces that the passed argument must be an array of objects where each element contains the defined key-value schema.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints#complex-types",
    tags: ["Terraform Types", "Complex Objects", "Type Constraints"]
  },
  {
    id: "hashicorp-tfa-142",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Refactoring via moved Blocks (Terraform 1.1+)",
    scenario: "A module author refactors an internal resource from `aws_instance.server` to `aws_instance.web_server`. Callers updating the module face destructive resource recreation.",
    question: "Which declarative block introduced in Terraform 1.1 records internal module refactorings without requiring state mv CLI commands?",
    options: [
      { id: 'A', text: "moved block (e.g. moved { from = aws_instance.server to = aws_instance.web_server })" },
      { id: 'B', text: "rename block" },
      { id: 'C', text: "refactor block" },
      { id: 'D', text: "migrate block" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Starting in Terraform 1.1, `moved` blocks (`moved { from = ... to = ... }`) declare refactorings directly in HCL code. When callers run `terraform plan`, Terraform automatically migrates the state addresses without destroying resources or requiring manual `state mv` CLI commands.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Terraform 1.1+", "moved Blocks", "State Refactoring"]
  },
  {
    id: "hashicorp-tfa-143",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Refactoring across Module Boundaries with moved Blocks",
    scenario: "A resource previously declared in the root module (`aws_security_group.sg`) is moved inside a child module (`module.network.aws_security_group.sg`).",
    question: "Can moved blocks migrate resources across module boundaries?",
    options: [
      { id: 'A', text: "No, moved blocks only work within the exact same file" },
      { id: 'B', text: "No, cross-module migrations require deleting the resource" },
      { id: 'C', text: "Yes, moved blocks support moving resources between root modules and child modules (e.g. from = aws_security_group.sg to = module.network.aws_security_group.sg)" },
      { id: 'D', text: "Only in Terraform Enterprise" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`moved` blocks fully support cross-module boundaries: `moved { from = aws_security_group.sg to = module.network.aws_security_group.sg }`, allowing seamless architectural modularization of legacy flat configurations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring#cross-module-move-statements",
    tags: ["Terraform 1.1+", "moved Blocks", "Cross-Module Refactoring"]
  },
  {
    id: "hashicorp-tfa-144",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Root Outputs for Remote State Consumption",
    scenario: "An enterprise uses `terraform_remote_state` data sources to allow an applications team to read the subnet IDs created by a core networking project.",
    question: "Which outputs from the networking project are accessible via terraform_remote_state?",
    options: [
      { id: 'A', text: "Only the root module outputs defined in the networking configuration's outputs.tf" },
      { id: 'B', text: "All internal child module outputs automatically" },
      { id: 'C', text: "All resource attributes in state regardless of outputs" },
      { id: 'D', text: "None; remote state only exposes variable values" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform_remote_state` only exposes root-level output values defined in the remote state file. If a child module creates a resource, its output must be re-exported by the root module's `outputs.tf` to be visible to external states.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Terraform State", "terraform_remote_state", "Root Outputs"]
  },
  {
    id: "hashicorp-tfa-145",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Development: The Override Files Pattern (_override.tf)",
    scenario: "A developer is locally testing modifications to a vendor-provided module without modifying the original source code files in Git.",
    question: "Which naming convention tells Terraform to load a file last and merge/override specific block arguments?",
    options: [
      { id: 'A', text: "Files ending in override.tf or override.tf.json (e.g. main_override.tf)" },
      { id: 'B', text: "Files ending in .dev.tf" },
      { id: 'C', text: "Files starting with test_" },
      { id: 'D', text: "Files in the overrides/ folder" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform treats any file ending with `override.tf` or `override.tf.json` as an override file. Terraform loads them after all other files and merges their contents, overriding specific arguments without editing original source code.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/override",
    tags: ["Terraform", "Override Files", "Development Pattern"]
  },
  {
    id: "hashicorp-tfa-146",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Variable Validation Condition Expressions (can vs try)",
    scenario: "A module author validates that an input variable `endpoint_url` starts with `https://`. The condition must safely evaluate to false rather than throwing a runtime error if the user supplies a malformed string.",
    question: "Which built-in function returns true if an expression evaluates without errors and false if it fails?",
    options: [
      { id: 'A', text: "can(regex(\"^https://\", var.endpoint_url))" },
      { id: 'B', text: "try(regex(\"^https://\", var.endpoint_url))" },
      { id: 'C', text: "catch(var.endpoint_url)" },
      { id: 'D', text: "valid(var.endpoint_url)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`can(expression)` evaluates an expression and returns boolean `true` if it succeeds, or `false` if it produces an error. It is widely used in `validation` blocks to test regex matches and object attribute lookups safely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/can",
    tags: ["Terraform Functions", "can() Function", "Variable Validation"]
  },
  {
    id: "hashicorp-tfa-147",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Version Selection in Public Registry Calls",
    scenario: "A developer sources a module from the Terraform Registry: `source = \"terraform-aws-modules/security-group/aws\"` but omits the `version` argument.",
    question: "Which version of the module does Terraform install during terraform init?",
    options: [
      { id: 'A', text: "Terraform refuses to run without an explicit version" },
      { id: 'B', text: "The oldest release" },
      { id: 'C', text: "The latest available stable release of the module in the registry" },
      { id: 'D', text: "Version 1.0.0 always" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "If the `version` argument is omitted on a registry module, Terraform selects and downloads the newest available stable version. Best practice, however, mandates pinning module versions to avoid unexpected breaking updates.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax#version",
    tags: ["Terraform Modules", "Default Version", "Registry"]
  },
  {
    id: "hashicorp-tfa-148",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "State Isolation: Workspaces vs Directory Layouts",
    scenario: "An enterprise security standard mandates strict physical IAM credential isolation between Staging and Production environments.",
    question: "Which repository architecture guarantees that Staging credentials cannot accidentally modify Production infrastructure?",
    options: [
      { id: 'A', text: "Separate directories with separate backend configurations and separate CI/CD pipelines using environment-specific IAM credentials" },
      { id: 'B', text: "A single main.tf file with ternary operators" },
      { id: 'C', text: "Running terraform with -var=\"env=prod\" from a developer's laptop" },
      { id: 'D', text: "A single directory using CLI workspaces (terraform workspace)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLI workspaces share the same backend credentials. For true security isolation, organizations use separate directory structures (e.g. `environments/dev/`, `environments/prod/`) backed by distinct state buckets and isolated IAM service principals.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces#when-to-use-multiple-workspaces",
    tags: ["Terraform Architecture", "Environment Isolation", "Directory Layout"]
  },
  {
    id: "hashicorp-tfa-149",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Outputs: Passing Outputs Between Sibling Child Modules",
    scenario: "A root module calls `module \"vpc\"` and `module \"web_app\"`. The web app needs the subnet IDs generated inside the VPC module.",
    question: "How does the root module pass the subnet IDs from module.vpc to module.web_app?",
    options: [
      { id: 'A', text: "By capturing module.vpc.subnet_ids and passing it as an input argument inside the module \"web_app\" block" },
      { id: 'B', text: "Sibling modules can read each other's outputs directly without root module involvement" },
      { id: 'C', text: "By writing the subnet IDs to a local text file" },
      { id: 'D', text: "Using global HCL variables" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sibling modules cannot communicate directly. The calling root module acts as the orchestrator: it captures the output of the first module (`module.vpc.subnet_ids`) and assigns it as an input argument to the second module (`subnets = module.vpc.subnet_ids`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition#composition-types",
    tags: ["Terraform Modules", "Module Orchestration", "Sibling Modules"]
  },
  {
    id: "hashicorp-tfa-150",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    domainName: "Work with Terraform modules and workspaces",
    title: "Module Immutability: Avoiding Global Variables in Modules",
    scenario: "A junior engineer writes a child module and attempts to reference variables from the calling configuration without declaring them.",
    question: "Why should reusable child modules avoid referencing root-level variables directly via undeclared identifiers?",
    options: [
      { id: 'A', text: "Global variables slow down network transfer speed" },
      { id: 'B', text: "Variables in child modules are prohibited" },
      { id: 'C', text: "Child modules have their own independent variable namespace; undeclared variables cause syntax compilation errors during terraform validate" },
      { id: 'D', text: "Terraform automatically converts all variables to strings" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Child modules have completely self-contained namespaces. Every variable consumed within a child module must be declared in that child module's `variables.tf`. Terraform has no concept of ambient global variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Terraform Modules", "Encapsulation", "Namespaces"]
  }
];

export default HASHICORP_TFA_QUESTIONS_6;
