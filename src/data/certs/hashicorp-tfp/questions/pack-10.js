export const HASHICORP_TFP_QUESTIONS_10 = [
  {
    id: "hashicorp-tfp-226",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between setproduct and Nested for",
    scenario: "Every combination of three regions and four instance sizes must be produced as a list of pairs.",
    question: "Which function builds the cross product directly?",
    options: [
      { id: 'A', text: "merge(var.regions, var.sizes)" },
      { id: 'B', text: "concat(var.regions, var.sizes)" },
      { id: 'C', text: "zipmap(var.regions, var.sizes)" },
      { id: 'D', text: "setproduct(var.regions, var.sizes)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "setproduct returns the Cartesian product of the given collections as a list of tuples, which is then usually flattened into a keyed map for for_each. zipmap pairs elements positionally into a map, concat appends lists end to end, and merge combines maps.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/setproduct",
    tags: ["Functions", "for_each", "HCL"]
  },
  {
    id: "hashicorp-tfp-227",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Effect of Deleting the .terraform Directory",
    scenario: "An engineer deletes .terraform to clear a strange error.",
    question: "What is the consequence?",
    options: [
      { id: 'A', text: "Providers, modules, and backend configuration must be reinstalled by running terraform init again; no state or configuration is lost." },
      { id: 'B', text: "The state file is deleted along with it." },
      { id: 'C', text: "The workspace selection is permanently lost." },
      { id: 'D', text: "The dependency lock file is invalidated and must be regenerated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The .terraform directory is a local working cache of providers, modules, and backend settings, so removing it costs only a re-init. Remote state is untouched, the committed lock file remains valid and is reused, and workspace selection is re-established on init.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init",
    tags: ["init", "CLI", "Fundamentals"]
  },
  {
    id: "hashicorp-tfp-228",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Planning a Multi-Team State Layout",
    scenario: "A platform team owns networking and shared services; six product teams own their own applications and deploy many times a day.",
    question: "Which layout best matches those rates of change and ownership?",
    options: [
      { id: 'A', text: "One state per environment containing everything, applied by the platform team on request." },
      { id: 'B', text: "One state per cloud account regardless of team." },
      { id: 'C', text: "A platform state per environment for networking and shared services, plus one state per product team per environment, with product states reading platform outputs." },
      { id: 'D', text: "One state per resource type across all teams." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "State boundaries should follow ownership and rate of change so fast-moving teams are not serialised behind slow-moving shared infrastructure, with explicit output consumption expressing the dependency. A shared everything-state creates a queue and a single point of failure, and account or resource-type boundaries do not correspond to who changes what.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Architecture", "State", "Platform Engineering"]
  },
  {
    id: "hashicorp-tfp-229",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "A Change Plans Differently for Two Engineers",
    scenario: "Two engineers plan the same commit against the same workspace and see different results.",
    question: "Which causes are plausible? (Choose two.)",
    options: [
      { id: 'A', text: "Different resource ordering in the configuration files." },
      { id: 'B', text: "Different terminal colour settings." },
      { id: 'C', text: "Different provider versions because one of them has not honoured the committed lock file." },
      { id: 'D', text: "Different variable values supplied locally, for example from an uncommitted tfvars file or environment variables." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "Plan output is a function of configuration, variables, provider versions, and current state, so divergence almost always comes from inputs or dependency versions differing between the two machines. Display settings change nothing, and block ordering within files does not affect the graph.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Reproducibility", "Troubleshooting", "Variables"]
  },
  {
    id: "hashicorp-tfp-230",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Naming Resources Inside a Module",
    scenario: "A module creates exactly one bucket and the author is choosing a resource label.",
    question: "Which convention is recommended?",
    options: [
      { id: 'A', text: "Include the environment in the label." },
      { id: 'B', text: "Repeat the module name in the label, for example aws_s3_bucket.logging_module_bucket." },
      { id: 'C', text: "A short label such as this or main, since the module name already provides the context in the full address." },
      { id: 'D', text: "Use a random suffix to guarantee uniqueness." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Addresses already read as module.logging.aws_s3_bucket.this, so repeating the module or environment in the label produces stuttering names and bakes deployment context into reusable code. A random label would change the address and force replacement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Naming", "Style"]
  },
  {
    id: "hashicorp-tfp-231",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Emergency Change Under Policy Enforcement",
    scenario: "A hard-mandatory policy blocks an urgent production fix during an incident.",
    question: "What is the correct handling?",
    options: [
      { id: 'A', text: "Deleting the run and re-queuing it bypasses the policy." },
      { id: 'B', text: "Hard-mandatory policies cannot be overridden, so either the change must be adjusted to comply or an authorised owner must temporarily amend the policy set - both of which leave an audit record." },
      { id: 'C', text: "Switching the workspace to local execution bypasses the policy legitimately." },
      { id: 'D', text: "Any workspace admin can override a hard-mandatory policy for a single run." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The distinction between soft-mandatory and hard-mandatory is precisely whether an override exists, so a hard failure must be resolved by changing the plan or deliberately and visibly changing the policy. Re-queuing re-evaluates the same policy, and moving execution to evade a control is a governance failure rather than a supported workflow.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy", "Incident Response", "Governance"]
  },
  {
    id: "hashicorp-tfp-232",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Marking a Variable Sensitive Versus Ephemeral Handling",
    scenario: "A team believes marking a variable sensitive prevents the value being stored anywhere.",
    question: "Which correction is accurate?",
    options: [
      { id: 'A', text: "Sensitive variables are never written to state." },
      { id: 'B', text: "Sensitive variables are stored encrypted in state." },
      { id: 'C', text: "Sensitive variables cannot be used in resource arguments." },
      { id: 'D', text: "Sensitive controls display only - the value still reaches state and the plan file - so storage must be protected separately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sensitivity is a redaction marker propagated through expressions and honoured in CLI output; anything Terraform must remember to detect drift is still written to state in plain text. Sensitive values are freely usable in arguments, with the notable exception of places that would expose them in addresses such as for_each keys.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Sensitive", "State", "Security"]
  },
  {
    id: "hashicorp-tfp-233",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Reviewing a State File Safely",
    scenario: "An engineer needs to inspect state contents during an incident without downloading secrets to a laptop.",
    question: "Which approach is preferable?",
    options: [
      { id: 'A', text: "Use terraform state list and state show for the specific addresses needed, ideally from the controlled runner, rather than downloading the whole state file." },
      { id: 'B', text: "Email the state file to the incident channel." },
      { id: 'C', text: "Print the state to the CI log for shared visibility." },
      { id: 'D', text: "Download the state file and open it in an editor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Targeted state queries reveal only what is needed and leave no full copy of a secret-bearing file lying around. Downloading, sharing, or logging whole state spreads every credential it contains into places with weaker controls and longer retention.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/show",
    tags: ["State", "Security", "Operations"]
  },
  {
    id: "hashicorp-tfp-234",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Bootstrapping the Backend Itself",
    scenario: "The bucket and lock table that will store remote state must themselves be created by Terraform, which needs a backend.",
    question: "How is that chicken-and-egg problem usually solved?",
    options: [
      { id: 'A', text: "Store the bootstrap state in the same bucket before it exists." },
      { id: 'B', text: "Create the backend resources in a small bootstrap configuration using local state, then migrate that configuration to the remote backend it created, or provision them outside Terraform." },
      { id: 'C', text: "Use a backend block that references the resources it defines." },
      { id: 'D', text: "Terraform creates missing backend resources automatically on init." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A tiny bootstrap configuration with local state creates the storage and locking resources, after which its own state can be migrated into them - or the resources are created once by other means. Terraform never provisions backend storage itself, and a backend block cannot reference configuration values at all.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/backend",
    tags: ["Bootstrap", "Backends", "Operations"]
  },
  {
    id: "hashicorp-tfp-235",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Error: Duplicate Resource Configuration",
    scenario: "terraform validate reports that a resource with the same type and name is declared twice in the same module.",
    question: "Why is this an error?",
    options: [
      { id: 'A', text: "It is only an error when the two blocks differ." },
      { id: 'B', text: "It is allowed if the blocks are in different files." },
      { id: 'C', text: "Terraform allows it but the provider does not." },
      { id: 'D', text: "The pair of type and name forms a unique address within a module, so two declarations would map to the same state entry." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Addresses must be unique within a module because state is keyed by them, and Terraform concatenates all .tf files in a directory, so splitting the duplicates across files changes nothing. To create several similar objects, use for_each or count rather than repeated blocks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/syntax",
    tags: ["Addressing", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-236",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Consuming a Module Version From the Public Registry",
    scenario: "A configuration uses a public registry module and the author wants both the source and a version constraint.",
    question: "Which module block is well formed?",
    options: [
      { id: 'A', text: "module \"vpc\" { source = \"terraform-aws-modules/vpc/aws@5.0\" ... }" },
      { id: 'B', text: "module \"vpc\" { source = \"registry.terraform.io/terraform-aws-modules/vpc/aws\" version = \"latest\" ... }" },
      { id: 'C', text: "module \"vpc\" { source = \"terraform-aws-modules/vpc/aws\" ref = \"v5.0.0\" ... }" },
      { id: 'D', text: "module \"vpc\" { source = \"terraform-aws-modules/vpc/aws\"  version = \"~> 5.0\"  ... }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Registry modules use a three-part address and a separate version argument accepting standard constraints. Version suffixes in the source, a literal latest, and a ref argument are all invalid for registry sources - ref belongs to git sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Modules", "Registry", "Versioning"]
  },
  {
    id: "hashicorp-tfp-237",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Designing for Safe Destroys",
    scenario: "A configuration is used for ephemeral environments that are created and destroyed daily, but destroys keep failing because of dependency ordering and retained resources.",
    question: "Which practices make destroys reliable?",
    options: [
      { id: 'A', text: "Avoid prevent_destroy in ephemeral configurations, ensure deletion protection flags are variables that default off there, and let Terraform own the full dependency chain rather than importing shared resources." },
      { id: 'B', text: "Delete the state after each environment instead of destroying." },
      { id: 'C', text: "Always destroy with -target in dependency order." },
      { id: 'D', text: "Set create_before_destroy on every resource." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reliable teardown comes from not embedding production-style guards in ephemeral stacks and from Terraform owning the whole graph so it can order deletions itself. Targeted destroys are manual and error-prone, discarding state leaks real resources, and create_before_destroy addresses replacement rather than deletion.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["destroy", "Ephemeral Environments", "Design"]
  },
  {
    id: "hashicorp-tfp-238",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Speculative Plans Versus Regular Plans",
    scenario: "A workspace shows two kinds of runs in its history, one of which can never be applied.",
    question: "What distinguishes a speculative plan?",
    options: [
      { id: 'A', text: "It is a plan that runs without provider credentials." },
      { id: 'B', text: "It is a plan queued by an administrator only." },
      { id: 'C', text: "It is a plan-only run used for review, typically triggered by a pull request or terraform plan against the cloud backend, and it cannot be applied." },
      { id: 'D', text: "It is a plan that ignores the current state." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Speculative plans exist to give feedback on proposed changes without any possibility of applying them, which is what makes them safe to run automatically on every pull request. They use the real state and credentials, and anyone with plan permission can trigger them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/remote-operations",
    tags: ["HCP Terraform", "Runs", "Review"]
  },
  {
    id: "hashicorp-tfp-239",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Tracking Which Provider Owns a State Entry",
    scenario: "While splitting a configuration, an engineer needs to know which provider configuration each state entry was created with.",
    question: "Where is that recorded?",
    options: [
      { id: 'A', text: "In the .terraform/providers directory." },
      { id: 'B', text: "Nowhere; it is inferred from the configuration at run time." },
      { id: 'C', text: "In the dependency lock file." },
      { id: 'D', text: "In the state entry itself, which stores the provider configuration address such as provider[\"registry.terraform.io/hashicorp/aws\"].west." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Each managed resource in state records the provider configuration that created it, which is why removing an aliased provider configuration while resources still reference it produces an error. The lock file records versions and the providers directory holds binaries.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration",
    tags: ["State", "Providers", "Internals"]
  },
  {
    id: "hashicorp-tfp-240",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Deciding Whether to Expose a Resource or a Behaviour",
    scenario: "A module could either accept a list of raw provider rule objects or accept high-level intents such as allow_https_from_internet.",
    question: "Which consideration should guide the choice?",
    options: [
      { id: 'A', text: "Raw pass-through is always better because it is future-proof." },
      { id: 'B', text: "The two are equivalent in practice." },
      { id: 'C', text: "Intent-based inputs encode organisational decisions and are easier to govern, while raw pass-through inputs are more flexible but shift responsibility for correctness back to every caller." },
      { id: 'D', text: "Intent-based inputs are required by the registry." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The choice is really about where correctness lives: a curated intent interface lets the platform encode and enforce decisions, while raw structures make the module a thin alias that cannot guarantee anything. Neither is universally right, and the registry imposes no such requirement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Interface Design", "Platform Engineering"]
  },
  {
    id: "hashicorp-tfp-241",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "First Question When a Plan Looks Wrong",
    scenario: "A plan proposes changes nobody expects.",
    question: "Which check should come first?",
    options: [
      { id: 'A', text: "Confirm which working directory, workspace, backend, and variable values the plan actually used, because the commonest cause is planning the wrong thing." },
      { id: 'B', text: "Immediately raise a provider bug report." },
      { id: 'C', text: "Delete the lock file and re-init." },
      { id: 'D', text: "Run apply to see what really happens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Wrong-context plans - the wrong workspace, the wrong backend key, a stale variable file - are far more common than tool defects, and confirming context costs seconds. Applying to investigate is exactly the wrong direction, and blindly changing dependency versions adds a variable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Troubleshooting", "Discipline", "Plan"]
  },
  {
    id: "hashicorp-tfp-242",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Running Terraform for Many Directories",
    scenario: "A repository contains fifteen root configurations and CI currently runs every one on every commit, taking an hour.",
    question: "Which improvement is most appropriate?",
    options: [
      { id: 'A', text: "Detect which roots are affected by the changed files, including shared module paths, and plan only those." },
      { id: 'B', text: "Run all roots in parallel with no change detection." },
      { id: 'C', text: "Merge the fifteen roots into one configuration." },
      { id: 'D', text: "Plan only the first root and assume the rest are similar." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Change detection that accounts for shared module dependencies keeps feedback fast while still covering everything a commit can affect. Blind parallelism only hides the waste and multiplies API load, merging roots destroys isolation, and sampling one root leaves real breakage undetected.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/run",
    tags: ["CI/CD", "Monorepo", "Performance"]
  },
  {
    id: "hashicorp-tfp-243",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Retiring a Configuration Without Destroying Its Resources",
    scenario: "A configuration is being decommissioned as code, but the resources it manages must be handed to another team and stay running.",
    question: "Which path is correct?",
    options: [
      { id: 'A', text: "Delete the old state file and let the resources become unmanaged permanently." },
      { id: 'B', text: "Run terraform destroy and let the other team recreate everything." },
      { id: 'C', text: "Have the receiving configuration import the resources (or move the state entries across), then remove them from the old state without destroying, and finally delete the old configuration." },
      { id: 'D', text: "Copy the old state file into the new backend and keep both configurations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Handover means transferring management, so the new owner takes the resources into its state and the old state releases them without deletion, leaving exactly one owner. Destroying loses the running infrastructure, abandoning state leaves it unmanaged, and duplicating state creates two owners that will fight.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/import",
    tags: ["State", "Migration", "Ownership"]
  },
  {
    id: "hashicorp-tfp-244",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Keeping Configuration Readable at Scale",
    scenario: "A root configuration has grown to a single 2,000-line main.tf and reviews have become difficult.",
    question: "Which refactor helps most without changing behaviour?",
    options: [
      { id: 'A', text: "Reorder the blocks alphabetically." },
      { id: 'B', text: "Split the file across several directories." },
      { id: 'C', text: "Move half the resources into a child module, which is behaviour-neutral." },
      { id: 'D', text: "Split the file by concern into several .tf files in the same directory, since Terraform concatenates them and addresses are unchanged." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "All .tf files in a directory form one module, so splitting by concern improves readability with zero effect on addresses, state, or the plan. Moving resources into a module does change their addresses and needs moved blocks, separate directories create separate root modules and states, and reordering does not reduce size.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files",
    tags: ["Structure", "Refactoring", "HCL"]
  },
  {
    id: "hashicorp-tfp-245",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "What the cloud Block Replaces",
    scenario: "A configuration contains a terraform block with a nested cloud block naming an organisation and workspaces.",
    question: "What does that block do?",
    options: [
      { id: 'A', text: "It configures HCP Terraform as the state store and remote execution target for this configuration, taking the place of a backend block." },
      { id: 'B', text: "It sets the required Terraform version." },
      { id: 'C', text: "It is documentation only and has no effect." },
      { id: 'D', text: "It declares a provider for HCP Terraform resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The cloud block integrates the configuration with HCP Terraform for state and runs, and it is mutually exclusive with a backend block. Managing HCP Terraform objects themselves is the job of the tfe provider, and version constraints live in required_version.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/cloud/settings",
    tags: ["HCP Terraform", "cloud block", "Backends"]
  },
  {
    id: "hashicorp-tfp-246",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Handling a Module That Must Support Two Providers",
    scenario: "A module must be usable against two different cloud providers with the same interface.",
    question: "Which design is soundest?",
    options: [
      { id: 'A', text: "One module with both providers configured internally." },
      { id: 'B', text: "One module that takes the provider name as a string and uses it in resource types." },
      { id: 'C', text: "One module with conditionals selecting resources from either provider." },
      { id: 'D', text: "Write one module per provider with a deliberately similar interface, rather than one module branching internally on a provider variable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resource types are static in HCL and cannot be selected at run time, so a single cross-cloud module degenerates into two disjoint halves guarded by counts - separate modules with parallel interfaces are clearer and testable. Configuring providers inside a module also blocks iteration and clean removal.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Multi-Cloud", "Design"]
  },
  {
    id: "hashicorp-tfp-247",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Terraform Hangs During Plan",
    scenario: "A plan appears to hang for a long time with no output.",
    question: "Which diagnostic steps are appropriate? (Choose two.)",
    options: [
      { id: 'A', text: "Assume the binary is corrupt and reinstall Terraform." },
      { id: 'B', text: "Check for a state lock being waited on, and for slow or unreachable provider endpoints." },
      { id: 'C', text: "Enable TF_LOG to see which provider call is outstanding." },
      { id: 'D', text: "Delete the configuration and rewrite it." }
    ],
    correctAnswers: ['B', 'C'],
    type: "multiple",
    explanation: "Logging reveals exactly which request is outstanding, and the two common causes are waiting on a state lock and a slow or unreachable provider API. Rewriting the configuration and reinstalling the binary are shots in the dark that discard the evidence.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Debugging", "Logging", "Locking"]
  },
  {
    id: "hashicorp-tfp-248",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Choosing What to Pin and What to Float",
    scenario: "A team must balance reproducibility against the effort of dependency upgrades.",
    question: "Which combination is a reasonable default?",
    options: [
      { id: 'A', text: "Pin providers but let the Terraform binary float." },
      { id: 'B', text: "Pin the Terraform version, commit the provider lock file, and use pessimistic constraints on providers and modules so upgrades are deliberate rather than accidental." },
      { id: 'C', text: "Float everything to latest so upgrades happen continuously." },
      { id: 'D', text: "Pin every provider and module to an exact version and never update." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The standard posture makes every version change an explicit, reviewable commit while still allowing compatible updates when the team chooses. Exact pins forever accumulate security debt, floating everything makes builds irreproducible, and an unpinned binary reintroduces the version skew the lock file was meant to eliminate.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Versioning", "Reproducibility", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-249",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Ordering Destroy Operations",
    scenario: "A destroy must remove a database before the security group it uses, and Terraform is choosing the reverse order.",
    question: "How does Terraform order destroys?",
    options: [
      { id: 'A', text: "In reverse dependency order, so a resource is destroyed before the things it depends on - meaning a missing reference or depends_on is the reason an order looks wrong." },
      { id: 'B', text: "In the same order as creation." },
      { id: 'C', text: "In the order the blocks appear in the files." },
      { id: 'D', text: "Alphabetically by resource address." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Destroy walks the dependency graph backwards, so dependents go first and their dependencies afterwards; when the order looks wrong the graph is usually missing an edge that a reference or depends_on would supply. File order and naming never influence the graph.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/graph",
    tags: ["destroy", "Graph", "Dependencies"]
  },
  {
    id: "hashicorp-tfp-250",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Rolling Out a New Standard to Existing Workspaces",
    scenario: "A new tagging and encryption standard must apply to two hundred existing workspaces without breaking current deployments overnight.",
    question: "Which rollout sequence is sensible?",
    options: [
      { id: 'A', text: "Apply the standard only to new workspaces and leave existing ones alone permanently." },
      { id: 'B', text: "Fix all two hundred workspaces manually before announcing the policy." },
      { id: 'C', text: "Enable hard-mandatory enforcement immediately so nobody can add new violations." },
      { id: 'D', text: "Publish the policy in advisory mode first to measure the gap, provide a compliant module and variable set, then move to soft-mandatory and finally hard-mandatory with a communicated deadline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Escalating enforcement levels turns a policy rollout into a measured migration: advisory quantifies the work, a paved path makes compliance cheap, and the deadline is enforced only once teams can meet it. Immediate hard enforcement blocks unrelated urgent work, exempting existing workspaces never closes the gap, and manual remediation at that scale does not hold.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/manage-policy-sets",
    tags: ["Governance", "Rollout", "Policy"]
  }
];

export default HASHICORP_TFP_QUESTIONS_10;
