export const HASHICORP_TFP_QUESTIONS_1 = [
  {
    id: "hashicorp-tfp-1",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between count and for_each",
    scenario: "A module creates one S3 bucket per entry in a set of names. Today the set is [\"logs\", \"media\", \"backups\"]. When \"logs\" is removed, the remaining buckets must not be destroyed and recreated.",
    question: "Which meta-argument should the resource use?",
    options: [
      { id: 'A', text: "A separate resource block per name" },
      { id: 'B', text: "A dynamic block over var.names" },
      { id: 'C', text: "count = length(var.names), indexing with count.index" },
      { id: 'D', text: "for_each = toset(var.names), referencing each.value" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "for_each keys instances by a stable string, so removing \"logs\" only destroys that instance and leaves the others untouched. count keys instances by position, so removing the first element shifts every later index and forces recreation. A dynamic block generates nested blocks inside one resource rather than multiple instances, and hand-writing a block per name does not scale.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["for_each", "count", "HCL"]
  },
  {
    id: "hashicorp-tfp-2",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Renaming a Resource Without Destroying It",
    scenario: "A resource is being renamed from aws_instance.web to aws_instance.frontend as part of a refactor. The running instance must not be replaced, and the change must be reproducible for every colleague and for CI.",
    question: "Which approach is preferred in modern Terraform?",
    options: [
      { id: 'A', text: "Add a moved block declaring from aws_instance.web to aws_instance.frontend." },
      { id: 'B', text: "Run terraform state mv on every workstation and in CI." },
      { id: 'C', text: "Import the instance under the new address and remove the old state entry." },
      { id: 'D', text: "Apply the rename and accept the replacement." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A moved block lives in the configuration, so the refactor is versioned, reviewed, and applied automatically wherever the code runs - no one has to remember a manual command. terraform state mv works but is imperative and easy to forget in CI, import plus removal is a longer path to the same place, and accepting replacement destroys the instance.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/moved",
    tags: ["moved", "Refactoring", "State"]
  },
  {
    id: "hashicorp-tfp-3",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Separating Plan and Apply in CI",
    scenario: "A pipeline must produce a plan for human review and then apply exactly that plan later, with no chance of the infrastructure changing between the two steps being silently accepted.",
    question: "Which workflow does that?",
    options: [
      { id: 'A', text: "terraform plan -out=tfplan, store the artifact, then terraform apply tfplan." },
      { id: 'B', text: "terraform plan then terraform apply -auto-approve in the same job." },
      { id: 'C', text: "terraform apply -refresh=false twice." },
      { id: 'D', text: "terraform show followed by terraform apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A saved plan file records the exact set of actions and the state serial it was based on, and applying it never prompts and never silently substitutes a different plan - if the state has moved on, the apply fails. Re-planning at apply time can apply something different from what was reviewed, and the other options do not bind the review to the applied changes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CI/CD", "Plan File", "Automation"]
  },
  {
    id: "hashicorp-tfp-4",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing a Provider Configuration to a Module",
    scenario: "A module must create resources in a secondary AWS region using a provider alias defined in the root module as aws.replica.",
    question: "How is that wired correctly?",
    options: [
      { id: 'A', text: "Declare configuration_aliases in the module required_providers, and pass providers = { aws = aws.replica } in the module block." },
      { id: 'B', text: "Define the aliased provider block inside the module." },
      { id: 'C', text: "Set a region variable on the module and let it inherit the default provider." },
      { id: 'D', text: "Use a provider meta-argument on each resource inside the module." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A reusable module should not define its own provider blocks; it declares the configuration aliases it expects in required_providers and the caller maps real providers to them with the providers argument. Defining providers inside a module makes it impossible to use with for_each or count and complicates removal, and a region variable cannot change the provider a resource uses.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/providers",
    tags: ["Modules", "Providers", "Aliases"]
  },
  {
    id: "hashicorp-tfp-5",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Validating an Input Variable",
    scenario: "A variable named environment must only accept the values dev, staging, or prod, and the error must be reported during plan rather than by the cloud API at apply time.",
    question: "Which construct enforces that?",
    options: [
      { id: 'A', text: "A local value that calls the fail function." },
      { id: 'B', text: "A precondition block on every resource that uses the variable." },
      { id: 'C', text: "Setting the variable type to string and documenting the allowed values." },
      { id: 'D', text: "A validation block inside the variable with a condition and an error_message." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A validation block evaluates its condition against the supplied value and fails early with a custom message, which is the idiomatic way to constrain inputs. Preconditions belong to resource lifecycle checks rather than input validation, Terraform has no fail function, and documentation enforces nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-6",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Why Remote State Locking Matters",
    scenario: "Two engineers run terraform apply against the same S3-backed state at the same time.",
    question: "What does state locking prevent, and how is it provided for the S3 backend?",
    options: [
      { id: 'A', text: "It prevents reading state while an apply runs, using S3 object versioning." },
      { id: 'B', text: "It prevents concurrent writes from corrupting state or duplicating resources; the S3 backend supports locking via DynamoDB or S3 native lockfile support depending on the configuration." },
      { id: 'C', text: "It prevents drift by refreshing state before every plan." },
      { id: 'D', text: "It encrypts the state file so simultaneous writes are rejected." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Locking serialises state-mutating operations so two applies cannot interleave and clobber each other, which would otherwise leave orphaned or duplicated resources. Versioning helps recovery rather than mutual exclusion, refreshing addresses drift rather than concurrency, and encryption protects confidentiality.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State", "Locking", "Backends"]
  },
  {
    id: "hashicorp-tfp-7",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Turning On Detailed Terraform Logs",
    scenario: "A provider call is failing with an unhelpful message and the engineer needs to see the underlying API requests, written to a file rather than the terminal.",
    question: "Which environment variables do that?",
    options: [
      { id: 'A', text: "TF_LOG_PROVIDER=on only" },
      { id: 'B', text: "TF_LOG=DEBUG (or TRACE) together with TF_LOG_PATH=./terraform.log" },
      { id: 'C', text: "TERRAFORM_DEBUG=1 and TERRAFORM_LOGFILE=./terraform.log" },
      { id: 'D', text: "TF_VAR_log=debug and TF_OUTPUT=file" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "TF_LOG sets the verbosity - TRACE, DEBUG, INFO, WARN, ERROR - and TF_LOG_PATH redirects the output to a file; TF_LOG_CORE and TF_LOG_PROVIDER can narrow it to one side. The other variable names do not exist, and TF_VAR_ prefixed variables set input variables rather than logging.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Debugging", "Logging", "CLI"]
  },
  {
    id: "hashicorp-tfp-8",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Generating Repeated Nested Blocks",
    scenario: "A security group resource needs one ingress block per entry in a list of port and CIDR pairs, and the list length varies by environment.",
    question: "Which language feature produces the repeated nested blocks?",
    options: [
      { id: 'A', text: "for_each on the security group resource itself." },
      { id: 'B', text: "A for expression assigned directly to the ingress argument." },
      { id: 'C', text: "A dynamic \"ingress\" block with for_each over the list and a content block." },
      { id: 'D', text: "count on the security group resource." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "dynamic blocks exist precisely to generate a variable number of nested blocks inside one resource, iterating with for_each and emitting a content block per element. Putting for_each or count on the resource would create several security groups instead of several rules, and a bare for expression cannot produce block syntax.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["dynamic", "HCL", "Expressions"]
  },
  {
    id: "hashicorp-tfp-9",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Enforcing Policy Before Apply",
    scenario: "An organisation must block any run that would create an unencrypted storage bucket, across every workspace, without relying on reviewers noticing it.",
    question: "Which HCP Terraform capability enforces that automatically?",
    options: [
      { id: 'A', text: "A required manual apply approval." },
      { id: 'B', text: "A policy set (Sentinel or OPA) attached to the organisation or a project, evaluated between plan and apply." },
      { id: 'C', text: "A run task that posts a comment on the pull request." },
      { id: 'D', text: "A workspace variable marked sensitive." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Policy sets run against the plan output after plan and before apply, and a hard-mandatory policy fails the run outright, which is the automated gate described. Run tasks integrate external tools but a comment does not block, sensitive variables only hide values, and manual approval still depends on a human noticing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Sentinel", "OPA", "Governance"]
  },
  {
    id: "hashicorp-tfp-10",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Pinning a Registry Module Version",
    scenario: "A root module consumes a module from the public registry and must never pick up a new major version automatically, while still receiving patch fixes of the 3.x line.",
    question: "Which version constraint expresses that?",
    options: [
      { id: 'A', text: "version = \"3.0.0\"" },
      { id: 'B', text: "Omitting version and relying on the lock file" },
      { id: 'C', text: "version = \">= 3.0\"" },
      { id: 'D', text: "version = \"~> 3.0\"" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The pessimistic operator ~> 3.0 allows 3.1 and 3.4 but never 4.0, giving compatible updates without a major-version surprise. >= 3.0 admits 4.x, an exact pin blocks even patch fixes, and the dependency lock file records provider versions rather than module versions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Modules", "Versioning", "Registry"]
  },
  {
    id: "hashicorp-tfp-11",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Bringing Existing Infrastructure Under Management",
    scenario: "A production database was created by hand and must now be managed by Terraform, with the change reviewable in a pull request and repeatable in CI.",
    question: "Which mechanism fits that requirement best?",
    options: [
      { id: 'A', text: "terraform state push with a hand-edited state file." },
      { id: 'B', text: "An import block in the configuration naming the target address and the resource id." },
      { id: 'C', text: "Recreating the database with Terraform and migrating the data." },
      { id: 'D', text: "terraform import run once by an engineer on their laptop." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Config-driven import blocks are declarative, reviewable, and planned - terraform plan shows what will be imported and can even generate the resource configuration - so the same run works in CI. The CLI import command is imperative and leaves no artifact, hand-editing state is dangerous, and recreating a production database is unnecessary risk.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Import", "State", "Brownfield"]
  },
  {
    id: "hashicorp-tfp-12",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "What terraform init Actually Does",
    scenario: "A new clone of a repository is checked out in CI and terraform init runs before plan.",
    question: "Which tasks does init perform?",
    options: [
      { id: 'A', text: "Validates variable values against their type constraints." },
      { id: 'B', text: "Refreshes state against the real infrastructure and reports drift." },
      { id: 'C', text: "Initialises the backend, installs required providers and modules, and writes or verifies the dependency lock file." },
      { id: 'D', text: "Creates the remote state bucket if it does not exist." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "init configures the backend, downloads providers and modules into .terraform, and reconciles .terraform.lock.hcl. Refreshing happens during plan and apply, variable validation happens when values are evaluated, and Terraform does not create backend storage for you.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["CLI", "init", "Providers"]
  },
  {
    id: "hashicorp-tfp-13",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Preventing Accidental Destruction",
    scenario: "A production database resource must never be destroyed by a Terraform run, even if a configuration change would otherwise force replacement.",
    question: "Which configuration achieves that?",
    options: [
      { id: 'A', text: "A depends_on entry pointing at the database." },
      { id: 'B', text: "Setting the resource count to 1 permanently." },
      { id: 'C', text: "A lifecycle block with ignore_changes = all." },
      { id: 'D', text: "A lifecycle block with prevent_destroy = true." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "prevent_destroy makes Terraform error out on any plan that would destroy the resource, forcing a deliberate configuration change first. ignore_changes suppresses drift on named attributes but still allows destruction, depends_on only orders operations, and a fixed count does not stop replacement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["lifecycle", "Safety", "HCL"]
  },
  {
    id: "hashicorp-tfp-14",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Error: Invalid for_each Argument",
    scenario: "A plan fails with \"Invalid for_each argument: the for_each value depends on resource attributes that cannot be determined until apply\".",
    question: "What causes this and how is it commonly resolved?",
    options: [
      { id: 'A', text: "The for_each keys derive from values unknown until apply; restructure so keys come from known inputs, or split the apply into stages." },
      { id: 'B', text: "Terraform needs -parallelism=1 to evaluate for_each." },
      { id: 'C', text: "The provider version is too old; upgrade it." },
      { id: 'D', text: "The for_each value is a list; convert it to a set with toset." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform must know the instance keys at plan time to build the graph, so keys that depend on attributes computed during apply are rejected; the fix is to derive keys from variables, locals, or data known in advance. A list is legal for for_each only when converted, but that produces a different error, and neither provider versions nor parallelism affects key determinability.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["for_each", "Troubleshooting", "Plan"]
  },
  {
    id: "hashicorp-tfp-15",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Sharing Data Between Independently Applied Configurations",
    scenario: "A networking configuration and an application configuration live in separate state files and separate pipelines. The application needs the VPC and subnet ids produced by the networking run.",
    question: "Which approach is the most maintainable?",
    options: [
      { id: 'A', text: "Merge the two configurations into one state file." },
      { id: 'B', text: "Import the networking resources into the application state as well." },
      { id: 'C', text: "Copy the ids into the application variables file after each networking apply." },
      { id: 'D', text: "Publish the values as outputs of the networking workspace and consume them with terraform_remote_state or an HCP Terraform outputs data source." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Exposing outputs and reading them from the other configuration keeps a single owner for each resource while making the dependency explicit and automatic; data sources that look the resources up by tag are an equally valid loose-coupling alternative. Manual copying drifts, merging removes the blast-radius separation that motivated the split, and importing the same resource into two states means two owners fighting over it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Remote State", "Composition", "Outputs"]
  },
  {
    id: "hashicorp-tfp-16",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Removing a Resource From State Without Destroying It",
    scenario: "A resource should stop being managed by this configuration but must keep existing in the cloud, and the change should be part of the codebase.",
    question: "Which construct expresses that?",
    options: [
      { id: 'A', text: "A removed block with lifecycle { destroy = false } for the resource address." },
      { id: 'B', text: "Adding prevent_destroy and deleting the block." },
      { id: 'C', text: "Deleting the resource block from the configuration and applying." },
      { id: 'D', text: "Running terraform destroy -target on the resource." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A removed block with destroy = false tells Terraform to forget the resource while leaving the real object in place, and being configuration it is reviewable and repeatable. Simply deleting the block plans a destroy, prevent_destroy makes that plan fail rather than forgetting the resource, and destroy -target deletes the real infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/syntax",
    tags: ["removed", "State", "Refactoring"]
  },
  {
    id: "hashicorp-tfp-17",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Marking an Output as Sensitive",
    scenario: "A module outputs a generated password that must not be printed in CLI output or run logs.",
    question: "Which declaration is correct?",
    options: [
      { id: 'A', text: "Setting sensitive = true on the output block." },
      { id: 'B', text: "Wrapping the value in the nonsensitive function." },
      { id: 'C', text: "Storing the value in a local instead of an output." },
      { id: 'D', text: "Naming the output with a leading underscore." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "sensitive = true redacts the value in plan, apply, and output display, and the sensitivity propagates to anything derived from it. nonsensitive does the opposite by stripping the marking, naming conventions have no effect, and a local cannot be consumed by a calling module. Note that the value is still stored in plain text in state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs",
    tags: ["Outputs", "Sensitive", "Security"]
  },
  {
    id: "hashicorp-tfp-18",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Replacing a Single Resource",
    scenario: "One virtual machine has drifted into a broken state and must be destroyed and recreated on the next apply, without affecting anything else.",
    question: "Which current command does that?",
    options: [
      { id: 'A', text: "terraform refresh -target=aws_instance.web" },
      { id: 'B', text: "terraform taint aws_instance.web" },
      { id: 'C', text: "terraform state rm aws_instance.web" },
      { id: 'D', text: "terraform apply -replace=\"aws_instance.web\"" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The -replace option marks the resource for replacement as part of a normal plan and apply, so the intent is visible in the plan output. terraform taint is deprecated in favour of -replace, refresh only updates state, and state rm makes Terraform forget the resource instead of recreating it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI", "Replace", "Operations"]
  },
  {
    id: "hashicorp-tfp-19",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing a Dependency Cycle",
    scenario: "terraform plan fails with \"Error: Cycle: aws_security_group.a, aws_security_group_rule.b, aws_security_group.c\".",
    question: "What is the usual root cause and remedy?",
    options: [
      { id: 'A', text: "The provider is not initialised; run terraform init -upgrade." },
      { id: 'B', text: "Parallelism is too high; rerun with -parallelism=1." },
      { id: 'C', text: "The state file is corrupt; restore it from a backup." },
      { id: 'D', text: "Two resources reference each other, so the graph has no valid order; break the cycle by extracting the mutual reference into a separate resource such as a standalone rule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform builds a directed acyclic graph, so a mutual reference - two security groups each naming the other - has no topological order and must be broken by moving one side into a separate resource that references both. Re-initialising, restoring state, and lowering parallelism do not change the graph shape.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/graph",
    tags: ["Graph", "Cycles", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-20",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Remote Versus Local Execution Mode",
    scenario: "A team wants runs to execute on HCP Terraform infrastructure with centralised logging, variables, and policy enforcement, while still triggering plans from developer laptops.",
    question: "Which workspace execution mode fits?",
    options: [
      { id: 'A', text: "Agent execution, which is required for any remote run." },
      { id: 'B', text: "Remote execution, where the CLI streams the run to HCP Terraform and the plan and apply happen there." },
      { id: 'C', text: "No execution mode change is needed; the CLI always runs remotely once a cloud block exists." },
      { id: 'D', text: "Local execution, where HCP Terraform stores only the state." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Remote execution runs plan and apply on HCP Terraform infrastructure while the developer CLI streams the output, giving central variables, logs, and policy checks. Local execution uses HCP Terraform purely as a state backend, agent mode is for reaching private networks and is not required generally, and the execution mode is a workspace setting rather than an automatic consequence of the cloud block.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings",
    tags: ["HCP Terraform", "Execution Mode", "Workspaces"]
  },
  {
    id: "hashicorp-tfp-21",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between locals and variables",
    scenario: "A configuration computes a naming prefix from the environment and project inputs, used in a dozen places. The value must not be overridable by the caller.",
    question: "Where should it be defined?",
    options: [
      { id: 'A', text: "In an output, so it is computed once." },
      { id: 'B', text: "In a locals block, because locals are internal computed values that callers cannot override." },
      { id: 'C', text: "In a variable with a default, because defaults cannot be changed." },
      { id: 'D', text: "In a data source, so it refreshes each run." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Locals are named expressions internal to a module - ideal for derived values used repeatedly and deliberately not part of the interface. A variable default is overridable by definition, outputs expose values to callers rather than computing internal ones, and data sources read external systems.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/locals",
    tags: ["locals", "Variables", "HCL"]
  },
  {
    id: "hashicorp-tfp-22",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "What the Dependency Lock File Records",
    scenario: "A repository contains .terraform.lock.hcl and the team debates whether to commit it.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "It records selected provider versions and their checksums and should be committed so every run uses identical providers." },
      { id: 'B', text: "It records module versions and is regenerated on every plan, so it should be ignored." },
      { id: 'C', text: "It stores backend credentials and must be encrypted before committing." },
      { id: 'D', text: "It contains resource state and must never be committed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The lock file pins provider versions and hashes so CI and every developer resolve the same binaries, which is exactly why it belongs in version control. It does not track modules, holds no state or credentials, and is updated deliberately with terraform init -upgrade.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Lock File", "Providers", "Reproducibility"]
  },
  {
    id: "hashicorp-tfp-23",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Machine-Readable Plan Output",
    scenario: "A pipeline must programmatically detect whether a plan deletes any resource, and fail the build if it does.",
    question: "Which approach is reliable?",
    options: [
      { id: 'A', text: "Reading the state file before and after the run." },
      { id: 'B', text: "Using terraform plan -detailed-exitcode, which returns a distinct code for deletions." },
      { id: 'C', text: "terraform plan -out=tfplan then terraform show -json tfplan, parsing resource_changes actions with a JSON tool." },
      { id: 'D', text: "Grepping the human-readable plan output for the word destroy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The JSON plan representation is a stable documented format listing each resource change and its actions, which is what automation should consume. Grepping human output is fragile and locale-sensitive, comparing states happens too late, and -detailed-exitcode only distinguishes no-changes from changes and errors, not deletions specifically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/json-format",
    tags: ["Automation", "JSON", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-24",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Designing a Module Interface",
    scenario: "A platform team is reviewing a module whose variables include vpc_id, subnet_ids, instance_type, and also aws_region, aws_access_key, and tf_state_bucket.",
    question: "Which review comment is correct?",
    options: [
      { id: 'A', text: "Credentials, region, and backend settings do not belong in a module interface; they are provider and root-level concerns." },
      { id: 'B', text: "Region should stay but subnet_ids should be looked up with a data source inside the module." },
      { id: 'C', text: "All six should become required variables with no defaults." },
      { id: 'D', text: "The module should define its own backend block so it can be applied directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A reusable module should take only the inputs describing what to build; authentication, region, and state storage are the responsibility of the root module and its provider and backend configuration. Child modules cannot declare backends, and hiding network lookups inside the module makes it less predictable and harder to test.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Design", "Best Practices"]
  },
  {
    id: "hashicorp-tfp-25",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "A Plan Shows Changes Every Run",
    scenario: "Every plan proposes to update the same tag on a resource, even immediately after a successful apply. Another system adds that tag automatically.",
    question: "Which configuration stops the perpetual diff appropriately?",
    options: [
      { id: 'A', text: "Removing the resource from state after each apply." },
      { id: 'B', text: "lifecycle { ignore_changes = all } on the resource." },
      { id: 'C', text: "Running plan with -refresh=false permanently." },
      { id: 'D', text: "A lifecycle block with ignore_changes on that specific tag attribute." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Targeted ignore_changes tells Terraform not to reconcile that one externally-managed attribute while still detecting drift everywhere else. Ignoring all changes blinds the resource entirely, disabling refresh hides real drift, and removing state each run abandons management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["Drift", "lifecycle", "Troubleshooting"]
  }
];

export default HASHICORP_TFP_QUESTIONS_1;
