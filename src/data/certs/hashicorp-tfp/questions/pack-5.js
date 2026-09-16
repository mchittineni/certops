export const HASHICORP_TFP_QUESTIONS_5 = [
  {
    id: "hashicorp-tfp-101",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Filtering While Building a Collection",
    scenario: "A local must contain only the subnets from a map whose public attribute is true, keyed by the same names.",
    question: "Which expression does that?",
    options: [
      { id: 'A', text: "[ for k, v in var.subnets : k if v.public ]" },
      { id: 'B', text: "{ for k, v in var.subnets : k => v if v.public }" },
      { id: 'C', text: "matchkeys(var.subnets, keys(var.subnets), [\"public\"])" },
      { id: 'D', text: "lookup(var.subnets, \"public\", {})" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A for expression in object form with an if clause filters while preserving the key and value, producing the filtered map required. The bracket form returns a list of names rather than a map, lookup fetches one key by name, and matchkeys pairs two lists rather than filtering a map by an attribute.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/for",
    tags: ["for expressions", "Filtering", "HCL"]
  },
  {
    id: "hashicorp-tfp-102",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "A Module That Cannot Be Used With for_each",
    scenario: "A team tries to add for_each to a module block and gets an error stating that modules with provider configurations cannot be used with count, for_each, or depends_on.",
    question: "What must change?",
    options: [
      { id: 'A', text: "Add a provider alias inside the module for each iteration of the call." },
      { id: 'B', text: "Replace the `for_each` with a `dynamic` block over the same values." },
      { id: 'C', text: "Drop the provider blocks, declare `configuration_aliases`, pass providers in." },
      { id: 'D', text: "Upgrade the provider to a version that supports module iteration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A module that configures its own providers is a legacy pattern that Terraform cannot instantiate repeatedly, because each instance would need its own provider configuration; moving provider configuration to the caller resolves it. Adding more aliases inside the module makes the problem worse, dynamic blocks do not create module instances, and no provider version changes this language rule.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/providers",
    tags: ["Modules", "Providers", "for_each"]
  },
  {
    id: "hashicorp-tfp-103",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Purpose of the terraform.tfstate.backup File",
    scenario: "A local state directory contains terraform.tfstate and terraform.tfstate.backup.",
    question: "What is the backup file?",
    options: [
      { id: 'A', text: "An encrypted copy of the state as it currently stands." },
      { id: 'B', text: "A full history of every state version ever written." },
      { id: 'C', text: "The state written before the last operation, as a one-step safety net." },
      { id: 'D', text: "The state belonging to the previously selected workspace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The local backend writes the prior state to a .backup file before overwriting, giving exactly one step of rollback. It is not a version history - remote backends with object versioning provide that - it is not encrypted, and workspaces keep separate state files under terraform.tfstate.d.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["State", "Backends", "Recovery"]
  },
  {
    id: "hashicorp-tfp-104",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform in a Pull Request Pipeline",
    scenario: "A team wants pull request feedback that is safe to run on untrusted forks, with no access to production credentials.",
    question: "Which stage design is appropriate?",
    options: [
      { id: 'A', text: "Run a full apply in a sandbox account for every pull request, including those from forks." },
      { id: 'B', text: "Run a full plan with the production credentials on every pull request that is opened." },
      { id: 'C', text: "`fmt`, `validate -backend=false` and analysis on forks; plan only on trusted branches." },
      { id: 'D', text: "Skip the automated checks on forks entirely and rely on the human review instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Fork pull requests can execute attacker-controlled configuration, so credential-free checks are the only safe automatic stage, with privileged plans reserved for trusted branches. Exposing production credentials to fork code is a straightforward compromise path, applying is worse still, and skipping checks discards cheap feedback.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/run",
    tags: ["CI/CD", "Security", "Workflow"]
  },
  {
    id: "hashicorp-tfp-105",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Unsupported Argument Error After a Provider Upgrade",
    scenario: "After upgrading a provider, plan fails with \"An argument named X is not expected here\" on a resource that previously worked.",
    question: "What is the most likely explanation?",
    options: [
      { id: 'A', text: "The argument went in a major provider version; read the upgrade guide." },
      { id: 'B', text: "The state file is incompatible with the new provider and must be recreated." },
      { id: 'C', text: "Terraform core needs upgrading before the provider schema will load at all." },
      { id: 'D', text: "The argument has moved into the resource's `lifecycle` block in this version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provider schemas define which arguments exist, so an unexpected-argument error immediately after an upgrade points at a schema change documented in the provider upgrade guide. State compatibility failures and core version problems report differently, and lifecycle accepts only its own meta-arguments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Upgrades", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-106",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Structuring Workspaces for Many Environments",
    scenario: "An organisation runs the same application stack in four environments across three regions and wants consistent naming, access control, and variable inheritance.",
    question: "Which structure fits HCP Terraform best?",
    options: [
      { id: 'A', text: "One workspace per developer, so each can plan without blocking the others." },
      { id: 'B', text: "One workspace per resource type, so a change touches the smallest state." },
      { id: 'C', text: "One workspace per environment and region, grouped into projects." },
      { id: 'D', text: "One workspace for everything, with the environment chosen by a variable." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A workspace corresponds to one state and one deployment target, so environment-region is the natural unit, and projects give a grouping for permissions and shared variable sets. A single shared workspace destroys isolation, per-resource-type workspaces fragment ownership, and per-developer workspaces have no relationship to the infrastructure being managed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["HCP Terraform", "Workspaces", "Organisation"]
  },
  {
    id: "hashicorp-tfp-107",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Rendering a Configuration File From a Template",
    scenario: "A cloud-init file must be rendered from a template with values interpolated, and the result passed as user data.",
    question: "Which mechanism is current?",
    options: [
      { id: 'A', text: "A local-exec provisioner running envsubst." },
      { id: 'B', text: "The deprecated template_file data source from the template provider." },
      { id: 'C', text: "The file function with string concatenation." },
      { id: 'D', text: "The `templatefile` function, reading the file and substituting the values." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "templatefile is the built-in function for rendering a template with a map of values, and it replaced the external template provider data source. The plain file function returns literal contents without interpolation, and shelling out to a provisioner reintroduces all the fragility provisioners are warned about.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/templatefile",
    tags: ["Functions", "Templates", "HCL"]
  },
  {
    id: "hashicorp-tfp-108",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Re-running init After Changing a Module Source",
    scenario: "A module version constraint is bumped in the configuration and terraform plan reports that module installation is required.",
    question: "Which command resolves it?",
    options: [
      { id: 'A', text: "terraform get -update only, which is required before every plan." },
      { id: 'B', text: "terraform refresh." },
      { id: 'C', text: "Deleting the lock file." },
      { id: 'D', text: "`terraform init`, or `init -upgrade` for a newer allowed version." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "init installs and updates modules as well as providers, and -upgrade re-resolves version constraints for both. terraform get exists but init supersedes it in normal use, refresh touches state, and the dependency lock file records providers rather than modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["Modules", "init", "CLI"]
  },
  {
    id: "hashicorp-tfp-109",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Importing Many Resources at Once",
    scenario: "Forty existing security groups must be brought under management, and hand-writing forty resource blocks is error-prone.",
    question: "Which capability reduces that work?",
    options: [
      { id: 'A', text: "`terraform state push` with a state document generated from the API." },
      { id: 'B', text: "A data source for each security group, read into the configuration." },
      { id: 'C', text: "`terraform import -all`, which discovers and imports everything." },
      { id: 'D', text: "`import` blocks with `plan -generate-config-out` for the configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Config-driven import can generate a starting configuration for each imported address, which is then reviewed and committed - a large saving on brownfield adoption. There is no import-all command, hand-generating state bypasses every safety check, and data sources read resources without managing them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import/generating-configuration",
    tags: ["Import", "Brownfield", "Automation"]
  },
  {
    id: "hashicorp-tfp-110",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Keeping Secrets Out of Plan Output",
    scenario: "A plan posted to a pull request comment must not reveal a generated password that appears in a resource attribute.",
    question: "Which measures actually help? (Choose two.)",
    options: [
      { id: 'A', text: "Encrypt the plan file, which prevents display of the value." },
      { id: 'B', text: "Use -no-color so values are not highlighted." },
      { id: 'C', text: "Restrict who can read state and run logs, since state holds it in clear." },
      { id: 'D', text: "Mark the variables and outputs sensitive so the output is redacted." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "Sensitivity marking suppresses the value in human-readable output, and access control on state and logs addresses the fact that the real value is still stored in state and inside the plan file. Encrypting the artifact does not change what Terraform prints, and colour settings are purely cosmetic.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["Secrets", "Sensitive", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-111",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Values Not Known Until Apply",
    scenario: "A plan shows (known after apply) for an attribute another resource depends on, and a count elsewhere fails because of it.",
    question: "What is the general principle?",
    options: [
      { id: 'A', text: "The keys must be known at plan time, so unknown values must be restructured." },
      { id: 'B', text: "An unknown value can be forced known by wrapping it in the `tolist` function." },
      { id: 'C', text: "Unknown values occur only on the first apply and never on a later run." },
      { id: 'D', text: "A value known after apply always indicates a defect in the provider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform builds the resource graph during plan, so instance counts and keys must be known then; ordinary attribute values may legitimately be unknown and get filled in during apply. Unknown markers are normal rather than provider bugs, type functions cannot resolve unknown values, and any replacement can reintroduce unknowns later.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/references",
    tags: ["Plan", "Unknown Values", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-112",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Declaring Where a Provider Comes From",
    scenario: "A configuration uses a provider published under a namespace other than hashicorp and must resolve it reliably.",
    question: "Which declaration is required?",
    options: [
      { id: 'A', text: "An entry in the dependency lock file only." },
      { id: 'B', text: "A provider block alone, since Terraform infers the source from the name." },
      { id: 'C', text: "A required_providers entry giving source = \"namespace/name\" and a version constraint." },
      { id: 'D', text: "A module block pointing at the provider repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "required_providers maps the local provider name to a full registry source address and constrains its version, which is what lets Terraform install a non-hashicorp provider. A bare provider block would make Terraform assume the hashicorp namespace, the lock file records what was selected rather than where to look, and modules are not providers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "required_providers", "Registry"]
  },
  {
    id: "hashicorp-tfp-113",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Estimating Cost Before Apply",
    scenario: "Reviewers want to see the monthly cost delta of a change while reviewing the plan.",
    question: "Which capability surfaces that inside the run?",
    options: [
      { id: 'A', text: "Speculative plans, which include the cost figure by definition." },
      { id: 'B', text: "Cost estimation, which runs after plan and can be gated by a policy." },
      { id: 'C', text: "The private module registry's own published metadata." },
      { id: 'D', text: "The state version history for the workspace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cost estimation produces a projected monthly delta for supported resources as part of the run, and policies can act on that figure. State history shows past versions, the registry publishes modules, and a speculative plan is simply a plan that cannot be applied.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/cost-estimation",
    tags: ["Cost Estimation", "HCP Terraform", "Governance"]
  },
  {
    id: "hashicorp-tfp-114",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Writing an Assertion in a Terraform Test",
    scenario: "A test must apply a module in a sandbox and confirm that the created bucket name starts with the configured prefix.",
    question: "Which construct expresses the check?",
    options: [
      { id: 'A', text: "A `run` block at `command = apply` with an `assert` on the output." },
      { id: 'B', text: "A `precondition` declared on the test file's own provider block." },
      { id: 'C', text: "A variable `validation` block declared inside the test file." },
      { id: 'D', text: "A Sentinel policy placed in the module's test directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Test files contain run blocks that plan or apply and assert blocks that evaluate a condition with an error message, which is exactly the described check. Variable validation constrains inputs rather than results, Sentinel governs runs in HCP Terraform, and providers have no precondition block.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Testing", "Modules", "Assertions"]
  },
  {
    id: "hashicorp-tfp-115",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Choosing Between Data Sources and Remote State",
    scenario: "A team debates reading another stack VPC id from its remote state versus looking it up with a provider data source by tag.",
    question: "Which trade-off is stated correctly?",
    options: [
      { id: 'A', text: "Remote state is deprecated in favour of data sources, so the choice is already made." },
      { id: 'B', text: "Both approaches let the consumer modify the producer's resources, so neither is safer." },
      { id: 'C', text: "Data sources are faster and never fail, so they are preferable in every situation." },
      { id: 'D', text: "Remote state couples you to the state layout; a data source to a convention." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The genuine difference is what the consumer depends on and what access it needs: the producer state file and its outputs, or a stable tag or name that the cloud can be queried for. Data source lookups still make API calls that can fail or return ambiguous results, remote state remains supported, and neither approach grants write access.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data",
    tags: ["Remote State", "Data Sources", "Composition"]
  },
  {
    id: "hashicorp-tfp-116",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Destroying an Environment Safely",
    scenario: "An ephemeral review environment must be torn down completely at the end of a pull request, from automation.",
    question: "Which invocation is appropriate?",
    options: [
      { id: 'A', text: "`terraform destroy -auto-approve`, scoped to that environment's own configuration and state." },
      { id: 'B', text: "Deleting the state file from the backend so the resources fall out of management." },
      { id: 'C', text: "`terraform apply -refresh-only`, which reconciles the state with what is left." },
      { id: 'D', text: "`terraform state rm` for each resource, then removing the configuration files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Destroy plans and removes every managed object in that state, which is what tearing down an ephemeral environment means, and the destroy plan can even be reviewed first. Removing state entries or deleting the state file leaves the real infrastructure running and unmanaged, and a refresh-only apply changes nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["destroy", "Ephemeral Environments", "CLI"]
  },
  {
    id: "hashicorp-tfp-117",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Guarding Against Missing Map Keys",
    scenario: "An expression reads var.settings[\"timeout\"], but some callers omit that key and the run fails.",
    question: "Which approach handles the absence cleanly?",
    options: [
      { id: 'A', text: "`lookup(var.settings, \"timeout\", 30)`, or an `optional()` attribute." },
      { id: 'B', text: "Set the variable's type to `any`, so a missing attribute is tolerated." },
      { id: 'C', text: "`coalesce(var.settings)`, which fills in the keys that are missing." },
      { id: 'D', text: "`try(var.settings[\"timeout\"])` with no fallback value supplied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "lookup with a third argument returns the default when the key is missing, and an optional attribute with a default in the type constraint is the more self-documenting version of the same idea. try with no alternative value still fails, coalesce picks the first non-null argument rather than filling map keys, and any merely removes type checking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/lookup",
    tags: ["Functions", "Defaults", "HCL"]
  },
  {
    id: "hashicorp-tfp-118",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Duplicate Resources After a Failed Pipeline",
    scenario: "A pipeline timed out during apply and was retried. Now two load balancers exist but state records only one.",
    question: "What most likely happened and how is it corrected?",
    options: [
      { id: 'A', text: "The provider duplicated the resource because the parallelism setting was too high for its API." },
      { id: 'B', text: "Terraform deduplicates the two objects on the next plan, so the state converges by itself." },
      { id: 'C', text: "State locking failed on the retry, which is what always produces a duplicated object." },
      { id: 'D', text: "The first apply created it but died before writing state; reconcile and fix locking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Losing the process between the provider create call and the state write leaves a real object with no state entry, and the next run creates another; the cleanup is to import the one you want to keep and remove the other. Parallelism does not duplicate resources, locking prevents concurrent writers rather than this failure mode, and Terraform cannot see objects that are absent from state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Failure Recovery", "State", "Operations"]
  },
  {
    id: "hashicorp-tfp-119",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Documenting a Module",
    scenario: "A module is being prepared for wide internal use and reviewers ask for its interface to be self-describing.",
    question: "Which practices contribute most?",
    options: [
      { id: 'A', text: "Descriptions and types on every variable, plus tested examples." },
      { id: 'B', text: "A comment at the top of `main.tf` listing the resources created." },
      { id: 'C', text: "Publishing without a version so consumers always read the newest." },
      { id: 'D', text: "Naming the variables after the provider attributes they set." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Typed, described inputs and outputs plus runnable examples are what registries render and what consumers rely on, and tests keep the examples honest. A resource list comment goes stale, mirroring provider attribute names is not documentation, and unversioned publishing removes the consumer safety net.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Documentation", "Quality"]
  },
  {
    id: "hashicorp-tfp-120",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Triggering Downstream Workspaces",
    scenario: "When the networking workspace applies successfully, the dependent application workspaces should plan automatically.",
    question: "Which feature provides that?",
    options: [
      { id: 'A', text: "A notification webhook that developers act on manually." },
      { id: 'B', text: "A shared variable set." },
      { id: 'C', text: "Remote state sharing, which automatically re-runs consumers." },
      { id: 'D', text: "Run triggers, which queue a run when the source workspace applies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run triggers create an explicit dependency between workspaces so a successful apply upstream queues runs downstream. Notifications inform without acting, variable sets only distribute values, and reading another workspace state does not by itself schedule a run.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Run Triggers", "HCP Terraform", "Orchestration"]
  },
  {
    id: "hashicorp-tfp-121",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Accepting Drift Into State Without Changing Infrastructure",
    scenario: "Someone changed a tag by hand and the team decides to keep the manual value, updating state to match rather than reverting it.",
    question: "Which command records reality into state without altering infrastructure?",
    options: [
      { id: 'A', text: "terraform apply -auto-approve" },
      { id: 'B', text: "terraform force-unlock" },
      { id: 'C', text: "terraform apply -refresh-only" },
      { id: 'D', text: "terraform state push" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A refresh-only apply updates state to match the real objects and makes no changes to infrastructure, which is the supported way to accept drift. A normal apply would revert the manual change, state push overwrites state wholesale, and force-unlock only releases a lock.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["Drift", "Refresh", "CLI"]
  },
  {
    id: "hashicorp-tfp-122",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Avoiding a Perpetual Diff on Generated Values",
    scenario: "A resource attribute is generated by the cloud on every read - a rotating token - and appears as a change in every plan even though nothing is wrong.",
    question: "Which handling is appropriate?",
    options: [
      { id: 'A', text: "Set the attribute to `null` so Terraform stops tracking its value." },
      { id: 'B', text: "Disable refresh for the whole configuration so drift is not seen." },
      { id: 'C', text: "Add `ignore_changes` for it, and read it from a data source if needed." },
      { id: 'D', text: "Remove the resource from state before each plan is generated." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Targeted ignore_changes stops Terraform reconciling an attribute it cannot meaningfully own, while everything else on the resource stays under drift detection. Disabling refresh globally hides real drift, setting null usually means unset rather than untracked, and repeatedly removing state abandons management.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["lifecycle", "Drift", "HCL"]
  },
  {
    id: "hashicorp-tfp-123",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Where the CLI Configuration File Lives",
    scenario: "An operator needs to configure a provider mirror and credentials for a private registry for all Terraform runs on a machine.",
    question: "Which file holds that?",
    options: [
      { id: 'A', text: "The dependency lock file, which records the versions and their checksums." },
      { id: 'B', text: "The backend block of each configuration, which carries the installation settings." },
      { id: 'C', text: "The `terraform.tfvars` in each working directory, read on every CLI invocation." },
      { id: 'D', text: "The CLI configuration file, which holds credentials and installation settings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The CLI configuration file holds machine-wide settings such as registry credentials, provider installation methods including mirrors, and the plugin cache directory. Variable files supply input values, backend blocks configure state storage, and the lock file records selected provider versions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/config/config-file",
    tags: ["CLI Configuration", "Mirrors", "Credentials"]
  },
  {
    id: "hashicorp-tfp-124",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Reading a Saved Plan Later",
    scenario: "A plan file produced yesterday must be reviewed again before approval, in both human and machine form.",
    question: "Which commands do that?",
    options: [
      { id: 'A', text: "`terraform output -json tfplan` for the structured rendering." },
      { id: 'B', text: "`terraform state show tfplan` for the resource-by-resource view." },
      { id: 'C', text: "`terraform show tfplan`, or `show -json` for the structured form." },
      { id: 'D', text: "`terraform plan tfplan` to re-render the saved plan file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "terraform show renders a saved plan file either for humans or as documented JSON, which is how reviews and policy tooling consume it. plan generates a new plan rather than reading one, output reads state outputs, and state show expects a resource address.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/show",
    tags: ["Plan File", "CLI", "Review"]
  },
  {
    id: "hashicorp-tfp-125",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Wrapper Modules Around Public Modules",
    scenario: "A platform team wraps a popular public module in an internal module that sets organisational defaults and exposes a narrower interface.",
    question: "Which assessment of that pattern is fair?",
    options: [
      { id: 'A', text: "It is always wrong, since the extra layer adds indirection without any benefit." },
      { id: 'B', text: "It stops consumers ever meeting an upstream breaking change in the module." },
      { id: 'C', text: "A reasonable way to encode standards, at the cost of a layer to maintain." },
      { id: 'D', text: "It removes the need to pin the upstream module version in each caller." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Wrapping is a standard platform technique for enforcing defaults and shrinking the surface area, and its real cost is the maintenance of another versioned layer that must track upstream. Version pinning is still required, and upstream breaking changes still arrive - the wrapper only controls when consumers experience them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Modules", "Platform Engineering", "Design"]
  }
];

export default HASHICORP_TFP_QUESTIONS_5;
