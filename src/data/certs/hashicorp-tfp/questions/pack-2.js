export const HASHICORP_TFP_QUESTIONS_2 = [
  {
    id: "hashicorp-tfp-26",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Transforming a List Into a Map",
    scenario: "A variable holds a list of objects with a name attribute, and a resource must use for_each keyed by that name.",
    question: "Which expression produces the required map?",
    options: [
      { id: 'A', text: "merge(var.items...)" },
      { id: 'B', text: "toset(var.items)" },
      { id: 'C', text: "{ for o in var.items : o.name => o }" },
      { id: 'D', text: "[ for o in var.items : o.name ]" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An object-form for expression with a key => value pair builds a map from the list, giving for_each stable keys. The bracket form produces a list of names, toset over objects yields a set whose keys would be the whole object, and merge expects maps rather than a list of objects.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for expressions", "for_each", "HCL"]
  },
  {
    id: "hashicorp-tfp-27",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Moving Resources Between State Files",
    scenario: "A monolithic configuration is being split, and a set of resources must move from the old state to a new configuration state without recreating anything.",
    question: "Which sequence is appropriate?",
    options: [
      { id: 'A', text: "`terraform state mv -state-out` against the target state, after backing up both copies." },
      { id: 'B', text: "A `moved` block, which also works across two separate state files." },
      { id: 'C', text: "Deleting them from the old configuration and applying, then adding them to the new." },
      { id: 'D', text: "Copying the whole old state file into the new configuration's backend." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cross-state moves are a state surgery operation: state mv with a target state file, or an import into the new configuration, both preceded by backups. moved blocks only work inside one state, deleting and reapplying destroys and recreates the infrastructure, and copying the entire state brings resources the new configuration does not declare.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["State", "Refactoring", "Migration"]
  },
  {
    id: "hashicorp-tfp-28",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Supplying Variables in Automation",
    scenario: "A CI job must set the variable environment without a tfvars file and without an interactive prompt.",
    question: "Which mechanisms work? (Choose two.)",
    options: [
      { id: 'A', text: "Setting the environment variable TERRAFORM_environment." },
      { id: 'B', text: "Passing -var=\"environment=prod\" on the command line." },
      { id: 'C', text: "Exporting environment=prod in the shell." },
      { id: 'D', text: "Setting the environment variable TF_VAR_environment." }
    ],
    correctAnswers: ['B', 'D'],
    type: "multiple",
    explanation: "Terraform reads input variables from TF_VAR_ prefixed environment variables and from -var and -var-file flags, both of which are non-interactive. A TERRAFORM_ prefix is not recognised, and a bare shell variable of the same name is invisible to Terraform.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "Automation", "CLI"]
  },
  {
    id: "hashicorp-tfp-29",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Module Source Types",
    scenario: "A team consumes modules from the public registry, a private git repository over SSH, and a local path during development.",
    question: "Which source value is invalid?",
    options: [
      { id: 'A', text: "source = \"https://example.com/modules.zip?ref=v1\"" },
      { id: 'B', text: "source = \"../modules/network\"" },
      { id: 'C', text: "source = \"terraform-aws-modules/vpc/aws\"" },
      { id: 'D', text: "source = \"git::ssh://git@github.com/org/repo.git//modules/vpc?ref=v1.2.0\"" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A plain HTTP URL with a ref query is not a supported module source form; HTTP sources must point at an archive that Terraform can fetch and unpack, and the ref parameter belongs to git sources. Registry addresses, git sources with a subdirectory and ref, and relative local paths are all valid.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources",
    tags: ["Modules", "Sources", "Registry"]
  },
  {
    id: "hashicorp-tfp-30",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Asserting an Invariant After Apply",
    scenario: "A module must fail the run if the AMI it selected is not owned by an approved account, and the check must run against the resolved value rather than the input.",
    question: "Which construct expresses that?",
    options: [
      { id: 'A', text: "A `validation` block on the variable that carries the value in question." },
      { id: 'B', text: "An output marked `sensitive = true`, which fails when the value is wrong." },
      { id: 'C', text: "A `check` block scoped to the provider that runs after each apply." },
      { id: 'D', text: "A `lifecycle` precondition with a condition and `error_message` on the resource." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Preconditions and postconditions are custom condition checks attached to resources, data sources, and outputs, and they can assert on resolved attribute values rather than raw inputs. Variable validation only sees the input value, providers have no check block, and marking an output sensitive asserts nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Custom Conditions", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-31",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Reusing Variables Across Many Workspaces",
    scenario: "Twenty workspaces all need the same set of cloud credentials and standard tags, and rotating them one workspace at a time is error-prone.",
    question: "Which HCP Terraform feature solves this?",
    options: [
      { id: 'A', text: "A variable set scoped to the organisation or chosen workspaces." },
      { id: 'B', text: "A workspace template that clones variables on creation." },
      { id: 'C', text: "A .tfvars file committed to each repository." },
      { id: 'D', text: "A run task that injects variables at plan time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Variable sets define variables once and apply them to the whole organisation, a project, or selected workspaces, so a rotation is a single edit. Cloning at creation time would not propagate later changes, committed tfvars files scatter secrets across repositories, and run tasks integrate external systems rather than supplying variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables",
    tags: ["HCP Terraform", "Variable Sets", "Secrets"]
  },
  {
    id: "hashicorp-tfp-32",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Error: Provider Configuration Not Present",
    scenario: "After removing a module that defined its own provider block, destroy fails with \"Provider configuration not present: to work with resource X its original provider configuration is required\".",
    question: "What is the correct recovery?",
    options: [
      { id: 'A', text: "Run `terraform init -reconfigure`, which regenerates the provider configuration." },
      { id: 'B', text: "Set any provider version in `required_providers` so the plugin loads again." },
      { id: 'C', text: "Delete the state file and start the configuration again from scratch." },
      { id: 'D', text: "Restore an equivalent provider configuration so the orphans can be destroyed, then remove both." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "State entries record which provider configuration created them, so removing that configuration while the resources still exist leaves them unmanageable; restoring an equivalent configuration long enough to destroy or move them is the supported path. Deleting state orphans real infrastructure, re-initialising does not invent configurations, and a version constraint is not a configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration",
    tags: ["Providers", "Troubleshooting", "State"]
  },
  {
    id: "hashicorp-tfp-33",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Inspecting What Terraform Is Managing",
    scenario: "An engineer needs the list of resource addresses in the current state, then the attributes of one of them.",
    question: "Which two commands answer that?",
    options: [
      { id: 'A', text: "terraform show -json, then terraform output" },
      { id: 'B', text: "terraform validate, then terraform fmt" },
      { id: 'C', text: "terraform state list, then terraform state show ADDRESS" },
      { id: 'D', text: "terraform providers, then terraform graph" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "state list enumerates managed addresses and state show prints the recorded attributes of one of them. The JSON show plus outputs pair answers different questions, providers and graph describe dependencies, and validate and fmt check configuration syntax and style.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/list",
    tags: ["State", "CLI", "Inspection"]
  },
  {
    id: "hashicorp-tfp-34",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Why -target Is a Last Resort",
    scenario: "An engineer routinely applies with -target to speed up runs in a large configuration.",
    question: "Which criticism is accurate?",
    options: [
      { id: 'A', text: "Targeting only works with the local backend, so a remote backend rejects the flag." },
      { id: 'B', text: "Targeting skips the state lock, so a concurrent run can corrupt the state file." },
      { id: 'C', text: "Targeting applies a partial graph, so state can diverge; it is for recovery." },
      { id: 'D', text: "Targeting is unsupported in recent versions and fails with a deprecation error." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "HashiCorp documents -target as an exceptional tool: it applies only part of the dependency graph, so dependent values may be left stale and the next full plan can show surprising changes. It remains supported, still locks state, and works with any backend - the problem is semantic rather than mechanical.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI", "Targeting", "Best Practices"]
  },
  {
    id: "hashicorp-tfp-35",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Testing a Module With the Built-In Test Framework",
    scenario: "A module author wants automated tests that create real resources in a sandbox, assert on outputs, and clean up afterwards, using only Terraform tooling.",
    question: "Which capability provides that?",
    options: [
      { id: 'A', text: "Sentinel policies attached to the module." },
      { id: 'B', text: "terraform plan -detailed-exitcode in a loop." },
      { id: 'C', text: "terraform test with .tftest.hcl files containing run blocks and assert conditions." },
      { id: 'D', text: "terraform validate, which executes assertions against real infrastructure." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The native test framework runs .tftest.hcl files whose run blocks perform plan or apply operations and evaluate assert conditions, destroying created objects at the end. validate only checks configuration consistency without touching infrastructure, exit codes report change presence rather than assertions, and Sentinel governs runs rather than testing modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Testing", "Modules", "Quality"]
  },
  {
    id: "hashicorp-tfp-36",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing an Appropriate Variable Type",
    scenario: "A module input must accept a collection of subnet definitions, each with a cidr string and an availability_zone string, and reject anything else at plan time.",
    question: "Which type constraint is best?",
    options: [
      { id: 'A', text: "map(object({ cidr = string, az = string }))" },
      { id: 'B', text: "list(object({ cidr = string }))" },
      { id: 'C', text: "map(object({ cidr = string }))." },
      { id: 'D', text: "map(list(string))" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A map of a structural object type documents the expected shape and makes Terraform reject malformed input during evaluation, and keying by name also gives stable for_each keys. any and map(any) defer all checking, and list(string) cannot express two attributes per element.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints",
    tags: ["Types", "Variables", "HCL"]
  },
  {
    id: "hashicorp-tfp-37",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "What Refresh Actually Does",
    scenario: "A colleague asks whether terraform plan changes anything in the real world when it refreshes.",
    question: "Which description is accurate?",
    options: [
      { id: 'A', text: "Refresh reads the managed objects' current attributes into state; it never changes them." },
      { id: 'B', text: "Refresh rewrites the remote objects so that they match the configuration." },
      { id: 'C', text: "Refresh deletes the state entries for resources it can no longer find." },
      { id: 'D', text: "Refresh is a no-op whenever a remote backend is in use for the state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Refreshing is a read operation that syncs state with reality so the plan can show accurate drift; it never mutates infrastructure. Making reality match configuration is what apply does, resources found deleted are marked for recreation in the plan rather than silently dropped, and refresh behaviour is independent of the backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/refresh",
    tags: ["Refresh", "Drift", "State"]
  },
  {
    id: "hashicorp-tfp-38",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Catching Errors Before Plan",
    scenario: "A pull request pipeline should reject configuration with syntax errors, undefined references, or bad argument names as cheaply as possible, without credentials.",
    question: "Which command belongs in that stage?",
    options: [
      { id: 'A', text: "terraform state list" },
      { id: 'B', text: "terraform plan with fake credentials" },
      { id: 'C', text: "terraform apply -auto-approve in a sandbox" },
      { id: 'D', text: "terraform validate, after terraform init -backend=false" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "validate checks internal consistency - syntax, references, types, argument names - without contacting any remote system, and initialising with -backend=false lets it run without backend credentials. Planning needs real provider access, applying is far beyond a lint stage, and state list requires existing state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["validate", "CI/CD", "Quality"]
  },
  {
    id: "hashicorp-tfp-39",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Handling Provider Authentication in CI",
    scenario: "A pipeline must authenticate to a cloud provider without storing long-lived access keys anywhere in the repository or the CI configuration.",
    question: "Which approach best meets that requirement?",
    options: [
      { id: 'A', text: "Commit an encrypted credentials file and decrypt it inside the job." },
      { id: 'B', text: "Use OIDC federation so the job exchanges a short-lived token at run time." },
      { id: 'C', text: "Pass the access key as a `-var` value on the command line." },
      { id: 'D', text: "Store the key in a Terraform variable marked as sensitive." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Federated short-lived credentials remove the standing secret entirely, which is the strongest control and now standard across major CI systems and clouds. Encrypted files still contain a long-lived key, command-line variables leak into process listings and logs, and marking a variable sensitive only hides it in output.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials",
    tags: ["Security", "CI/CD", "Credentials"]
  },
  {
    id: "hashicorp-tfp-40",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Iterating Over Module Instances",
    scenario: "One module must be instantiated once per team, with different inputs, and referenced individually by team name elsewhere in the configuration.",
    question: "Which construct supports that?",
    options: [
      { id: 'A', text: "`for_each` on the module block, read by key." },
      { id: 'B', text: "depends_on with a list of team names." },
      { id: 'C', text: "A dynamic block wrapping the module." },
      { id: 'D', text: "Copying the module block once per team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modules accept count and for_each just as resources do, and for_each gives each instance a stable string key usable in references. dynamic blocks generate nested blocks rather than module instances, duplicating blocks does not scale, and depends_on only orders operations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/module-for_each",
    tags: ["Modules", "for_each", "Composition"]
  },
  {
    id: "hashicorp-tfp-41",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "VCS-Driven Runs",
    scenario: "A workspace is connected to a git repository. A pull request is opened that changes the Terraform code.",
    question: "What happens by default?",
    options: [
      { id: 'A', text: "The workspace is locked until the pull request is closed." },
      { id: 'B', text: "A speculative plan runs and reports on the pull request, but cannot apply." },
      { id: 'C', text: "A full plan and apply runs immediately." },
      { id: 'D', text: "Nothing happens until the branch is merged and a run is queued manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A pull request against a VCS-connected workspace triggers a speculative plan whose result is posted back for review; it can never apply. Applies come from merges to the tracked branch, subject to the auto-apply or manual approval setting, and the workspace is not locked by the pull request.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/ui",
    tags: ["HCP Terraform", "VCS", "Runs"]
  },
  {
    id: "hashicorp-tfp-42",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Creating an Explicit Dependency",
    scenario: "An application resource must be created only after an IAM policy attachment exists, but the application configuration does not reference any attribute of the attachment.",
    question: "How is that ordering guaranteed?",
    options: [
      { id: 'A', text: "A provisioner that sleeps before the application is created." },
      { id: 'B', text: "Placing the attachment block earlier in the file." },
      { id: 'C', text: "Wrapping both in the same module." },
      { id: 'D', text: "`depends_on` on the application resource, naming the attachment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform infers ordering from references, so when there is no reference the dependency must be declared with depends_on. File order is irrelevant to the graph, sleeping provisioners are a fragile hack, and co-locating resources in a module creates no ordering by itself.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["depends_on", "Graph", "HCL"]
  },
  {
    id: "hashicorp-tfp-43",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Why State Files Are Sensitive",
    scenario: "A team proposes committing terraform.tfstate to a public repository so everyone can see the current infrastructure.",
    question: "Which objection is correct?",
    options: [
      { id: 'A', text: "State files are binary and cannot be diffed, so version control adds nothing useful." },
      { id: 'B', text: "State holds every attribute in clear, so it belongs in an encrypted backend." },
      { id: 'C', text: "State is regenerated on each plan, so committing a copy has no lasting effect." },
      { id: 'D', text: "Only the lock file needs protecting, since the state itself is already redacted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sensitive marking affects display only - state records the real values, including generated passwords and keys - so state belongs in an encrypted, access-controlled remote backend. It is human-readable JSON, it is not regenerated from scratch each run, and nothing in it is redacted.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State", "Security", "Backends"]
  },
  {
    id: "hashicorp-tfp-44",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Apply Fails Halfway Through",
    scenario: "An apply creates six of ten resources and then fails on the seventh because of a provider quota error. The engineer wants to know the safe next step.",
    question: "What is the state of the world and the right action?",
    options: [
      { id: 'A', text: "Terraform rolls the six created resources back automatically when the apply fails." },
      { id: 'B', text: "The state file is now invalid and has to be restored from the backend's backup." },
      { id: 'C', text: "The six created resources are in state; fix the quota and re-run, which creates only the rest." },
      { id: 'D', text: "A `terraform destroy` has to be run before the apply can safely be retried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform has no transaction rollback: successfully created objects are written to state as it goes, so a re-plan after fixing the cause simply continues from where it stopped. Restoring a backup would orphan the six real resources, and destroying everything discards good work for no reason.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["Apply", "Failure Recovery", "State"]
  },
  {
    id: "hashicorp-tfp-45",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Keeping Formatting Consistent",
    scenario: "A repository must reject any commit whose Terraform files are not canonically formatted, without the pipeline rewriting files itself.",
    question: "Which command belongs in CI?",
    options: [
      { id: 'A', text: "terraform fmt -write" },
      { id: 'B', text: "terraform fmt -check -recursive" },
      { id: 'C', text: "terraform console" },
      { id: 'D', text: "terraform validate -json" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "fmt -check exits non-zero when files would change and -recursive covers nested module directories, so the build fails without modifying the tree. Writing files in CI hides the problem, validate checks semantics rather than style, and console is an interactive expression evaluator.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/fmt",
    tags: ["fmt", "CI/CD", "Style"]
  },
  {
    id: "hashicorp-tfp-46",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Deciding Module Granularity",
    scenario: "A team is debating whether to build one large module that provisions an entire environment or several focused modules composed by a thin root configuration.",
    question: "Which consideration should drive the decision?",
    options: [
      { id: 'A', text: "Fewer modules always plan faster, so a single module is the preferable structure." },
      { id: 'B', text: "A module should encapsulate a coherent unit with a stable interface." },
      { id: 'C', text: "Every resource should sit in its own module, which gives the maximum reuse." },
      { id: 'D', text: "The module count should track the number of cloud accounts being managed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Good module boundaries follow cohesion and interface stability, the same judgement as any software abstraction; both extremes cause pain. Plan time is dominated by resource count rather than module count, a module wrapping a single resource usually just adds indirection, and account topology is a separate concern from module design.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Modules", "Architecture", "Design"]
  },
  {
    id: "hashicorp-tfp-47",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Safely Replacing a Resource With Zero Downtime",
    scenario: "A load-balanced instance must be replaced when its AMI changes, but the new instance has to exist and be healthy before the old one is destroyed.",
    question: "Which lifecycle setting supports that?",
    options: [
      { id: 'A', text: "`create_before_destroy = true`, with unique naming." },
      { id: 'B', text: "replace_triggered_by = [aws_ami.this]" },
      { id: 'C', text: "prevent_destroy = true" },
      { id: 'D', text: "ignore_changes = [ami]" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "create_before_destroy inverts the default order so the replacement is created first, which requires that any uniquely-named attributes do not collide. prevent_destroy blocks the change entirely, ignoring the AMI attribute means the replacement never happens, and replace_triggered_by decides when to replace rather than in which order.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["lifecycle", "Zero Downtime", "HCL"]
  },
  {
    id: "hashicorp-tfp-48",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Private Module Registry Benefits",
    scenario: "An organisation wants internal modules to be discoverable, versioned, and consumable by a short address rather than a git URL with a ref.",
    question: "Which capability provides that?",
    options: [
      { id: 'A', text: "A Sentinel policy that rewrites each module source to the approved one." },
      { id: 'B', text: "A workspace variable set holding the approved module source paths." },
      { id: 'C', text: "A run task that fetches the modules before the plan is evaluated." },
      { id: 'D', text: "The private module registry, publishing tagged modules from connected repositories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The private registry indexes modules from VCS tags, renders their inputs and outputs, and gives each a registry address with version constraints. Variable sets carry values, run tasks integrate external systems, and policies evaluate plans rather than rewriting configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry",
    tags: ["Private Registry", "Modules", "HCP Terraform"]
  },
  {
    id: "hashicorp-tfp-49",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "CLI Workspaces Versus Separate Configurations",
    scenario: "A team uses terraform workspace new prod and terraform workspace new dev inside one configuration and one backend, and is now hitting problems isolating credentials and blast radius.",
    question: "Which assessment is accurate?",
    options: [
      { id: 'A', text: "CLI workspaces require the local backend, so a remote backend cannot use them." },
      { id: 'B', text: "CLI workspaces only switch state within one backend, so isolation needs more." },
      { id: 'C', text: "CLI workspaces are deprecated and were removed in a recent Terraform release." },
      { id: 'D', text: "CLI workspaces isolate fully, including separate credentials and backends." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A CLI workspace is just an alternate state within the same backend and configuration - good for short-lived variations, weak for production and non-production separation where different credentials, permissions, and blast radius matter. They are neither removed nor limited to the local backend.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "State", "Environments"]
  },
  {
    id: "hashicorp-tfp-50",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Exploring Expressions Interactively",
    scenario: "An engineer wants to test a complex for expression against real state values before committing it.",
    question: "Which tool helps?",
    options: [
      { id: 'A', text: "terraform graph, which renders the dependency graph." },
      { id: 'B', text: "terraform providers schema -json." },
      { id: 'C', text: "`terraform console`, which evaluates against the current state." },
      { id: 'D', text: "terraform force-unlock." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "terraform console gives an interactive REPL where expressions, functions, variables, and state values can be evaluated immediately. graph visualises dependencies, the schema command dumps provider schemas, and force-unlock releases a stuck state lock.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/console",
    tags: ["console", "Expressions", "Debugging"]
  }
];

export default HASHICORP_TFP_QUESTIONS_2;
