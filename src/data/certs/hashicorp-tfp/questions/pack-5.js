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
      { id: 'A', text: "{ for k, v in var.subnets : k => v if v.public }" },
      { id: 'B', text: "lookup(var.subnets, \"public\", {})" },
      { id: 'C', text: "[ for k, v in var.subnets : k if v.public ]" },
      { id: 'D', text: "matchkeys(var.subnets, keys(var.subnets), [\"public\"])" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Add a provider alias inside the module for each iteration." },
      { id: 'B', text: "Remove the provider blocks from the module and have it declare configuration_aliases instead, with the caller passing providers explicitly." },
      { id: 'C', text: "Upgrade the provider to a version that supports module iteration." },
      { id: 'D', text: "Replace for_each with a dynamic block." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "The previous state written before the most recent operation, kept as a one-step safety net for the local backend." },
      { id: 'B', text: "A full history of every state version ever written." },
      { id: 'C', text: "The state of the previous workspace." },
      { id: 'D', text: "An encrypted copy of the current state." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Run fmt -check, validate with -backend=false, and static analysis on the fork; run plan against real credentials only for branches in the trusted repository." },
      { id: 'B', text: "Run a full plan with production credentials on every fork pull request." },
      { id: 'C', text: "Run apply in a sandbox account for every pull request." },
      { id: 'D', text: "Skip all checks on forks and rely on review." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "The state file is incompatible and must be recreated." },
      { id: 'B', text: "The argument was removed or renamed in a new major provider version; consult the upgrade guide and change the configuration or pin the previous version." },
      { id: 'C', text: "Terraform core needs upgrading." },
      { id: 'D', text: "The argument must be moved into a lifecycle block." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "One workspace holding all environments, switched by a variable." },
      { id: 'B', text: "One workspace per developer." },
      { id: 'C', text: "One workspace per environment-region combination, grouped into projects with variable sets scoped to the project and team permissions on the project." },
      { id: 'D', text: "One workspace per resource type." }
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
      { id: 'A', text: "The deprecated template_file data source from the template provider." },
      { id: 'B', text: "The file function with string concatenation." },
      { id: 'C', text: "The templatefile function, reading a file from disk and substituting the supplied variables." },
      { id: 'D', text: "A local-exec provisioner running envsubst." }
    ],
    correctAnswers: ['C'],
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
      { id: 'C', text: "terraform init, which reinstalls modules into .terraform/modules; add -upgrade to move to a newer allowed version." },
      { id: 'D', text: "Deleting the lock file." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "terraform state push with a generated state file." },
      { id: 'B', text: "Import blocks combined with terraform plan -generate-config-out=generated.tf, which writes candidate resource configuration for review." },
      { id: 'C', text: "A data source per security group." },
      { id: 'D', text: "terraform import -all, which discovers and imports everything." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Mark the relevant variables and outputs sensitive so Terraform redacts them in plan and apply output." },
      { id: 'B', text: "Restrict who can read the state and the run logs, since state stores the value in plain text regardless." },
      { id: 'C', text: "Encrypt the plan file, which prevents display of the value." },
      { id: 'D', text: "Use -no-color so values are not highlighted." }
    ],
    correctAnswers: ['A', 'B'],
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
      { id: 'A', text: "Unknown values only occur on first apply and never afterwards." },
      { id: 'B', text: "(known after apply) always indicates an error in the provider." },
      { id: 'C', text: "Unknown values can be forced known with the tolist function." },
      { id: 'D', text: "count and for_each keys must be resolvable at plan time, so anything derived from an unknown attribute must be restructured or applied in stages." }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "A module block pointing at the provider repository." },
      { id: 'B', text: "An entry in the dependency lock file only." },
      { id: 'C', text: "A required_providers entry giving source = \"namespace/name\" and a version constraint." },
      { id: 'D', text: "A provider block alone, since Terraform infers the source from the name." }
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
      { id: 'A', text: "Speculative plans, which include cost by definition." },
      { id: 'B', text: "Cost estimation, which runs after plan for supported providers and can be gated by a policy on the estimate." },
      { id: 'C', text: "The private module registry." },
      { id: 'D', text: "The state version history." }
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
      { id: 'A', text: "A precondition on the test provider." },
      { id: 'B', text: "A run block with command = apply containing an assert block whose condition compares the module output to the expected prefix." },
      { id: 'C', text: "A Sentinel policy in the test directory." },
      { id: 'D', text: "A variable validation block inside the test file." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Remote state couples the consumer to the producer state layout and requires state access, while a data source couples it to a discoverable naming or tagging convention and needs only provider read access." },
      { id: 'B', text: "Both approaches give the consumer the ability to modify the producer resources." },
      { id: 'C', text: "Remote state is deprecated in favour of data sources." },
      { id: 'D', text: "Data sources are always faster and never fail." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "terraform apply -refresh-only." },
      { id: 'B', text: "Deleting the state file from the backend." },
      { id: 'C', text: "terraform state rm for every resource." },
      { id: 'D', text: "terraform apply -destroy -auto-approve, or terraform destroy -auto-approve, scoped to that environment configuration and state." }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Setting the variable type to any." },
      { id: 'B', text: "coalesce(var.settings) to fill missing keys." },
      { id: 'C', text: "lookup(var.settings, \"timeout\", 30) to supply a default, or declare the attribute as optional with a default in the variable type." },
      { id: 'D', text: "try(var.settings[\"timeout\"]) with no fallback." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "State locking failed, which always causes duplicates." },
      { id: 'B', text: "The first apply created the object but was killed before writing state, so the retry created a second; reconcile by importing or deleting the orphan, and prevent recurrence with reliable state locking and longer timeouts." },
      { id: 'C', text: "Terraform automatically deduplicates on the next plan." },
      { id: 'D', text: "The provider duplicated the resource because parallelism was too high." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "A comment at the top of main.tf listing the resources." },
      { id: 'B', text: "Publishing the module without a version so consumers always get the latest documentation." },
      { id: 'C', text: "Naming variables after the provider attributes they set." },
      { id: 'D', text: "Descriptions and precise types on every variable and output, a README with usage examples, and an examples directory that is exercised by tests." }
    ],
    correctAnswers: ['D'],
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
      { id: 'B', text: "Run triggers, which queue a run in a workspace when a source workspace completes an apply." },
      { id: 'C', text: "Remote state sharing, which automatically re-runs consumers." },
      { id: 'D', text: "A shared variable set." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Set the attribute to null so Terraform stops tracking it." },
      { id: 'B', text: "Remove the resource from state before each plan." },
      { id: 'C', text: "Disable refresh for the whole configuration." },
      { id: 'D', text: "Add ignore_changes for that attribute, and if the value is genuinely needed downstream read it through a data source at use time." }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "The CLI configuration file - .terraformrc or terraform.rc in the user home directory - which can define credentials, provider_installation, and the plugin cache." },
      { id: 'B', text: "terraform.tfvars in each working directory." },
      { id: 'C', text: "The dependency lock file." },
      { id: 'D', text: "The backend block of every configuration." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "terraform show tfplan for the readable rendering and terraform show -json tfplan for the structured form." },
      { id: 'B', text: "terraform output -json tfplan" },
      { id: 'C', text: "terraform plan tfplan" },
      { id: 'D', text: "terraform state show tfplan" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "It removes the need to pin the upstream module version." },
      { id: 'B', text: "It is a reasonable way to encode standards and reduce choice, at the cost of an extra layer to maintain and upgrade whenever the upstream module changes." },
      { id: 'C', text: "It prevents consumers from ever hitting upstream breaking changes." },
      { id: 'D', text: "It is always wrong because it adds indirection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Wrapping is a standard platform technique for enforcing defaults and shrinking the surface area, and its real cost is the maintenance of another versioned layer that must track upstream. Version pinning is still required, and upstream breaking changes still arrive - the wrapper only controls when consumers experience them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Modules", "Platform Engineering", "Design"]
  }
];

export default HASHICORP_TFP_QUESTIONS_5;
