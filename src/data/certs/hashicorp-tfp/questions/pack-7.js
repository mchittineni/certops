export const HASHICORP_TFP_QUESTIONS_7 = [
  {
    id: "hashicorp-tfp-151",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Interpolation That Is No Longer Needed",
    scenario: "A reviewer sees the expression \"${var.name}\" used as the whole value of an argument.",
    question: "What is the current idiom?",
    options: [
      { id: 'A', text: "Wrap it in `tostring()` so the type is explicit at the point of use." },
      { id: 'B', text: "Interpolation is required for every variable reference in an argument." },
      { id: 'C', text: "Write `var.name` directly; wrapping one reference in a template string is redundant." },
      { id: 'D', text: "Use the doubled-brace form, which is the current template syntax." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Since HCL2, expressions are first-class, so a bare reference is the correct form and template syntax is only needed when interpolating into a larger string. The doubled-brace form is not Terraform syntax, and an explicit conversion adds nothing for a value that is already a string.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/strings",
    tags: ["HCL", "Style", "Expressions"]
  },
  {
    id: "hashicorp-tfp-152",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Nested Module Provider Inheritance",
    scenario: "A root module passes an aliased provider to a child module, which in turn calls a grandchild module that also needs it.",
    question: "What must the child module do?",
    options: [
      { id: 'A', text: "Add `depends_on` between the modules so the provider is linked through." },
      { id: 'B', text: "Nothing: an aliased provider is inherited automatically at every level." },
      { id: 'C', text: "Pass the provider with `providers`, since only defaults are inherited." },
      { id: 'D', text: "Declare a new provider block inside the grandchild module itself." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Child modules inherit only the default (unaliased) provider configurations; anything aliased must be passed down explicitly at each level with the providers argument. Declaring a provider in the grandchild reintroduces the pattern that blocks iteration and clean removal, and depends_on has nothing to do with provider selection.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/providers",
    tags: ["Modules", "Providers", "Inheritance"]
  },
  {
    id: "hashicorp-tfp-153",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Listing Resources Matching a Pattern",
    scenario: "An operator wants only the state addresses belonging to a particular module.",
    question: "Which invocation narrows the list?",
    options: [
      { id: 'A', text: "terraform state list --filter=module.network" },
      { id: 'B', text: "terraform show module.network" },
      { id: 'C', text: "terraform state list module.network" },
      { id: 'D', text: "terraform state show module.network" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "state list accepts an address prefix and prints only the matching resources, which is the quickest way to scope a large state. There is no filter flag, show renders whole state or a plan, and state show expects a single full resource address.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/list",
    tags: ["State", "CLI", "Inspection"]
  },
  {
    id: "hashicorp-tfp-154",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Handling Provider Rate Limits",
    scenario: "Large applies intermittently fail with throttling errors from the cloud API.",
    question: "Which measures are appropriate? (Choose two.)",
    options: [
      { id: 'A', text: "Split the configuration so each run touches less." },
      { id: 'B', text: "Remove the dependency lock file." },
      { id: 'C', text: "Disable state locking to speed the run up." },
      { id: 'D', text: "Reduce `-parallelism` so fewer calls run at once." }
    ],
    correctAnswers: ['A', 'D'],
    type: "multiple",
    explanation: "Throttling is a function of request concurrency and volume, so lowering parallelism from its default of ten and shrinking the per-run resource count both reduce pressure, alongside provider-level retry settings where available. Locking and the lock file have no bearing on API request rates.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["Performance", "Rate Limits", "CLI"]
  },
  {
    id: "hashicorp-tfp-155",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Error After Removing a Resource That Others Reference",
    scenario: "A resource block was deleted, and plan now fails with a reference error in several other places.",
    question: "What must happen?",
    options: [
      { id: 'A', text: "Every reference to the removed address must go too." },
      { id: 'B', text: "Run `terraform refresh`, which drops the references that no longer resolve." },
      { id: 'C', text: "Run `terraform init`, which rebuilds the configuration's reference index." },
      { id: 'D', text: "Add a `moved` block for the deleted resource so the references follow." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "References are resolved from the configuration, so removing a resource that others reference is a configuration error that must be fixed in code. Initialisation and refresh operate on providers and state rather than references, and a moved block redirects an address rather than deleting one.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/references",
    tags: ["References", "Refactoring", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-156",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Auditing Organisation Activity",
    scenario: "A security team must review who changed workspace settings and who applied runs across the organisation over the last quarter.",
    question: "Which source provides that?",
    options: [
      { id: 'A', text: "The organisation audit trail, with per-workspace run history." },
      { id: 'B', text: "The provider debug logs collected from each of the runs." },
      { id: 'C', text: "The private registry's own module publication log." },
      { id: 'D', text: "The state file's version history on its own." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Audit trails record administrative and run events across the organisation and can be exported for long-term retention, with run history giving the per-workspace detail. State history shows what changed rather than who changed settings, registry logs cover module publication, and provider logs are local diagnostics.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/api-docs/audit-trails",
    tags: ["Audit", "Compliance", "HCP Terraform"]
  },
  {
    id: "hashicorp-tfp-157",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Building a Name From Parts Safely",
    scenario: "A resource name must combine a prefix, an environment, and a short hash, stay within a 32 character limit, and contain only lowercase letters, digits, and hyphens.",
    question: "Which combination of ideas is soundest?",
    options: [
      { id: 'A', text: "Include `timestamp()` in the name so collisions cannot occur at all." },
      { id: 'B', text: "Compose it in a local, truncate it, and validate the pattern." },
      { id: 'C', text: "Include `uuid()` in the name, which guarantees it stays unique." },
      { id: 'D', text: "Concatenate the parts inline at each resource and trust the length." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Computing the name once in a local keeps it consistent, and an explicit validation turns a provider-side naming rejection into an early, clear failure. Repeating the expression invites divergence, and uuid() and timestamp() change on every run, which forces perpetual resource replacement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/substr",
    tags: ["Functions", "Naming", "Validation"]
  },
  {
    id: "hashicorp-tfp-158",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Overriding a Module Input Per Environment",
    scenario: "A shared module has a sensible default instance size, and production must use a larger one.",
    question: "How is that expressed?",
    options: [
      { id: 'A', text: "Set an environment variable named after the module input." },
      { id: 'B', text: "Fork the module for production." },
      { id: 'C', text: "Edit the default inside the module for production." },
      { id: 'D', text: "Pass the production value in the module block of that root." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Module inputs exist precisely so each caller can supply its own values while sharing one implementation. Editing the default changes it for everyone, forking duplicates maintenance, and TF_VAR_ variables set root module variables rather than module block arguments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/syntax",
    tags: ["Modules", "Inputs", "Environments"]
  },
  {
    id: "hashicorp-tfp-159",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering From a Bad State Push",
    scenario: "Someone ran terraform state push with an old state file, and Terraform now plans to recreate resources that already exist.",
    question: "What is the recovery?",
    options: [
      { id: 'A', text: "Run `terraform refresh`, which rebuilds the missing entries from the live infrastructure." },
      { id: 'B', text: "Delete the state and import everything again, which is the fastest path back." },
      { id: 'C', text: "Restore the correct state version, confirm with a plan, then find the cause." },
      { id: 'D', text: "Apply the plan as it stands so that the state and reality agree once more." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "State versioning exists for exactly this, and a clean plan afterwards is the confirmation that the right version was restored. Applying would duplicate live infrastructure, refresh only updates entries that already exist, and mass re-import is a long last resort when no good version survives.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/push",
    tags: ["State", "Recovery", "Operations"]
  },
  {
    id: "hashicorp-tfp-160",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Why Applies Should Not Run From Laptops",
    scenario: "A team currently applies production changes from individual workstations with personal credentials.",
    question: "Which risks does moving to a central runner address?",
    options: [
      { id: 'A', text: "Only the cost of the cloud API calls each local run makes against the account." },
      { id: 'B', text: "Only the speed of the apply, since a laptop is slower than a build agent." },
      { id: 'C', text: "Nothing, as long as everyone is on the same Terraform and provider versions." },
      { id: 'D', text: "Inconsistent versions, unaudited credentials, no run history, no policy gate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralised execution standardises versions, replaces personal credentials with a scoped machine identity, and creates the audit trail and gating that laptop applies lack. Matching versions alone leaves credentials, auditability, and enforcement unsolved.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/remote-operations",
    tags: ["Operations", "Security", "Workflow"]
  },
  {
    id: "hashicorp-tfp-161",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Isolating Whether Core or Provider Is at Fault",
    scenario: "An engineer needs to see only the provider side of the debug log to file an accurate bug report.",
    question: "Which variable narrows the output?",
    options: [
      { id: 'A', text: "TF_DEBUG_PROVIDER=1" },
      { id: 'B', text: "`TF_LOG_PROVIDER`, which is set independently of core." },
      { id: 'C', text: "TF_LOG=PROVIDER" },
      { id: 'D', text: "TF_LOG_PATH=provider.log, which filters by component." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "TF_LOG_CORE and TF_LOG_PROVIDER set levels for the two halves separately, which is how a noisy trace is reduced to the relevant side. TF_LOG takes a level rather than a component, the debug variable does not exist, and the log path only chooses a destination file.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Logging", "Debugging", "Providers"]
  },
  {
    id: "hashicorp-tfp-162",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Declaring a Variable With No Default",
    scenario: "A module input must always be supplied by the caller, and a run that omits it should fail rather than prompt in automation.",
    question: "How is that achieved?",
    options: [
      { id: 'A', text: "Declare it as sensitive, which forces the caller to supply it." },
      { id: 'B', text: "Declare it with required = true." },
      { id: 'C', text: "Declare it with default = null, which makes it required." },
      { id: 'D', text: "No default on the variable, with `-input=false` on the run." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Omitting the default makes a variable required, and disabling input turns the interactive prompt into a hard error, which is what automation needs. A null default makes the variable optional with a null value, there is no required argument, and sensitivity is unrelated to whether a value must be supplied.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "Automation", "HCL"]
  },
  {
    id: "hashicorp-tfp-163",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Mocking Providers in Terraform Tests",
    scenario: "A module test should run quickly in CI without creating any real cloud resources, while still exercising the configuration logic and outputs.",
    question: "Which testing feature supports that?",
    options: [
      { id: 'A', text: "Running terraform validate instead, which evaluates outputs." },
      { id: 'B', text: "Mock providers with `run` blocks at `command = plan`." },
      { id: 'C', text: "Setting parallelism to zero in the test file." },
      { id: 'D', text: "Marking the test file with dry_run = true." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The test framework supports plan-only runs and mock providers that return synthetic values, giving fast credential-free tests of configuration logic. Parallelism does not disable creation, validate does not evaluate resource-derived outputs, and there is no dry_run attribute in test files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/tests",
    tags: ["Testing", "Mocks", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-164",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Effect of Deleting a Workspace",
    scenario: "An engineer tries terraform workspace delete dev while resources still exist in that workspace state.",
    question: "What happens?",
    options: [
      { id: 'A', text: "It always succeeds, and the state is archived rather than removed." },
      { id: 'B', text: "The workspace and every resource it manages are destroyed together." },
      { id: 'C', text: "It refuses unless the state is empty, to avoid orphaning." },
      { id: 'D', text: "The workspace is deleted and its state merged into the default one." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The guard exists because deleting a non-empty workspace discards the only record of live infrastructure, so the correct sequence is destroy first and then delete. Terraform never destroys resources as a side effect of workspace deletion and never merges state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/workspace/delete",
    tags: ["Workspaces", "State", "Safety"]
  },
  {
    id: "hashicorp-tfp-165",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Choosing Between Auto-Apply and Manual Apply",
    scenario: "A team wants fast feedback in development and a deliberate gate in production.",
    question: "Which configuration matches?",
    options: [
      { id: 'A', text: "Manual apply everywhere to keep the settings uniform." },
      { id: 'B', text: "Auto-apply on development and off in production, where a person confirms." },
      { id: 'C', text: "Auto-apply everywhere with a policy that rejects production changes." },
      { id: 'D', text: "Auto-apply is a global organisation setting and cannot vary." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Auto-apply is a per-workspace setting, so the two environments simply differ, which is the standard fast-in-dev, gated-in-prod arrangement. Rejecting all production changes by policy would block legitimate work, and uniform manual apply slows development for no safety gain.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings",
    tags: ["HCP Terraform", "Workflow", "Governance"]
  },
  {
    id: "hashicorp-tfp-166",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Effect of the -refresh=false Flag",
    scenario: "A pipeline adds -refresh=false to speed up plans on a large configuration.",
    question: "What is the trade-off?",
    options: [
      { id: 'A', text: "The state is never written again, so a later run has nothing to compare." },
      { id: 'B', text: "The plan is faster since the reads are skipped, but it may be stale and shows no drift." },
      { id: 'C', text: "The plan refuses to run at all without a previously saved plan file." },
      { id: 'D', text: "The plan is identical to a normal one, but served from a cache." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Skipping refresh removes the provider round trips that dominate plan time on large configurations, at the cost of planning against whatever state already says - so real drift is invisible. It is a deliberate speed-for-accuracy trade rather than a caching or workflow restriction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Performance", "Refresh", "CLI"]
  },
  {
    id: "hashicorp-tfp-167",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Expressing a Set of Firewall Rules Cleanly",
    scenario: "Twenty firewall rules differ only in port, protocol, and description, and the current configuration repeats a nearly identical block twenty times.",
    question: "Which refactor is idiomatic?",
    options: [
      { id: 'A', text: "Wrap the twenty blocks in a module and call that module once." },
      { id: 'B', text: "Move the rule data into a map and create the rules with `for_each`." },
      { id: 'C', text: "Generate the HCL from a script before each plan is run." },
      { id: 'D', text: "Use `count` with twenty conditional expressions over it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Separating the data from the resource definition and iterating with for_each keeps the configuration short, reviewable, and stable under additions and removals. A module around twenty literal blocks hides the duplication rather than removing it, count with per-index conditionals is unreadable, and code generation puts the real source of truth outside Terraform.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["for_each", "Refactoring", "HCL"]
  },
  {
    id: "hashicorp-tfp-168",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Terraform Plan Succeeds but Apply Fails on Permissions",
    scenario: "A plan completes cleanly and the apply fails immediately with an authorisation error from the cloud.",
    question: "Why can plan pass while apply fails?",
    options: [
      { id: 'A', text: "Apply resolves a different provider version from the one the plan was built with." },
      { id: 'B', text: "The saved plan caches the credentials, which have expired by the time apply runs." },
      { id: 'C', text: "Plan mostly reads, so an identity with read but not write succeeds until the write is attempted." },
      { id: 'D', text: "Plan never contacts the provider, so no permission is exercised until the apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The two phases exercise different permissions - reads during refresh and planning, writes during apply - so a read-only identity produces exactly this pattern. Plan does contact providers, both phases use the same provider version, and plan files do not store credentials.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["Permissions", "Troubleshooting", "Providers"]
  },
  {
    id: "hashicorp-tfp-169",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Testing Module Upgrades Before Rollout",
    scenario: "A new module version must be proven against a real environment before thirty consumers adopt it.",
    question: "Which practice fits?",
    options: [
      { id: 'A', text: "Bump every consumer at once, so any problem is found while attention is on it." },
      { id: 'B', text: "Skip the testing, since semantic versioning already guarantees compatibility." },
      { id: 'C', text: "Publish the version and let each consumer discover the issues in its own time." },
      { id: 'D', text: "Adopt it in a low-risk environment first, review a plan there, then promote the constraint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Canarying a module version in a low-risk environment gives real plan and apply evidence before the blast radius widens, which is the same discipline as any dependency upgrade. Big-bang adoption maximises damage, and semantic versioning is a promise about intent rather than a guarantee of behaviour.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/publish",
    tags: ["Modules", "Upgrades", "Release"]
  },
  {
    id: "hashicorp-tfp-170",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Dealing With a Very Large State File",
    scenario: "A state file has grown to hundreds of megabytes, plans are slow, and the backend occasionally times out.",
    question: "Which remedy addresses the cause?",
    options: [
      { id: 'A', text: "Compress the state object in the backend so each operation transfers less." },
      { id: 'B', text: "Raise the backend's timeout so the larger state has time to transfer." },
      { id: 'C', text: "Move to the local backend, which imposes no size limit on the state." },
      { id: 'D', text: "Split into several states by ownership, and drop what no longer needs managing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "State size is a symptom of too many resources in one configuration, so the durable fix is decomposition rather than tolerating a slow, fragile monolith. Compression and longer timeouts postpone the problem, and a local backend abandons collaboration and locking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["State", "Scaling", "Architecture"]
  },
  {
    id: "hashicorp-tfp-171",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Terraform Variables Versus Environment Variables in a Workspace",
    scenario: "A workspace needs an input variable for the instance size and a cloud credential for the provider.",
    question: "How should each be configured?",
    options: [
      { id: 'A', text: "Both as Terraform variables." },
      { id: 'B', text: "The credential in the configuration provider block and the size as an environment variable." },
      { id: 'C', text: "Both as environment variables." },
      { id: 'D', text: "The instance size as a Terraform variable and the credential as an environment variable marked sensitive." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "HCP Terraform workspaces distinguish Terraform variables, which feed input variables, from environment variables, which providers read for credentials - and sensitive marking prevents the value being displayed afterwards. Hard-coding a credential in the configuration commits it to version control.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/variables",
    tags: ["HCP Terraform", "Variables", "Credentials"]
  },
  {
    id: "hashicorp-tfp-172",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between a Nested Block and a Separate Resource",
    scenario: "A provider offers both an inline rule block on a security group and a standalone rule resource, and a team plans to manage some rules from another configuration.",
    question: "Which choice is correct and why?",
    options: [
      { id: 'A', text: "The inline blocks, since they plan faster and keep the rules beside the group." },
      { id: 'B', text: "It makes no behavioural difference, so either form may be used as preferred." },
      { id: 'C', text: "Both forms together, so the rules are expressed redundantly and survive drift." },
      { id: 'D', text: "The standalone rule resource, since inline blocks remove rules they do not know." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inline blocks make the parent resource authoritative over the whole set, so anything added elsewhere is deleted on the next apply; standalone rule resources allow shared ownership. Using both forms on the same group is explicitly warned against because they fight, and the difference is behavioural rather than cosmetic.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Resources", "Ownership", "Design"]
  },
  {
    id: "hashicorp-tfp-173",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Making a Pipeline Fail Closed on Policy",
    scenario: "A custom policy check runs in CI between plan and apply and occasionally errors out because of a network problem.",
    question: "How should the pipeline behave?",
    options: [
      { id: 'A', text: "Skip the check and continue, since the plan was already reviewed." },
      { id: 'B', text: "Fail the pipeline, since an unavailable check is not a pass." },
      { id: 'C', text: "Apply first and evaluate the policy afterwards." },
      { id: 'D', text: "Retry indefinitely until the check responds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A gate that silently passes when it cannot run is not a gate, so failing closed is the correct default, with bounded retries for transient errors. Continuing on error removes the control, unbounded retries hang the pipeline, and evaluating after apply means the change has already landed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["CI/CD", "Policy", "Safety"]
  },
  {
    id: "hashicorp-tfp-174",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "A Destroy Plan Wants to Remove More Than Expected",
    scenario: "A destroy plan for one small configuration lists resources the team believed belonged to another stack.",
    question: "What is the most likely cause and the safe response?",
    options: [
      { id: 'A', text: "Terraform destroys by tag, so another configuration's resources carry the same tags." },
      { id: 'B', text: "The plan is listing resources that come from data sources rather than from state." },
      { id: 'C', text: "A destroy always covers every resource in the account the credentials can reach." },
      { id: 'D', text: "The directory points at the wrong state, so confirm backend and workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A destroy plan covers exactly what is in the current state, so an unexpectedly large list almost always means the wrong state is selected - verifying the backend configuration and workspace before proceeding is the safe move. Terraform does not act on tags, data sources are read-only and are not destroyed, and destroy never reaches beyond managed state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/destroy",
    tags: ["destroy", "Safety", "State"]
  },
  {
    id: "hashicorp-tfp-175",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Handling Provider Requirements in a Shared Module",
    scenario: "A shared module uses two providers and must be usable by many roots without dictating exact versions.",
    question: "What should its versions.tf contain?",
    options: [
      { id: 'A', text: "Exact version pins for both providers and full provider configuration blocks." },
      { id: 'B', text: "Only a required_version constraint, leaving providers undeclared." },
      { id: 'C', text: "`required_providers` with source addresses and lower-bound constraints." },
      { id: 'D', text: "A backend block plus required_providers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A shared module declares which providers it needs and the minimum versions whose features it relies on, leaving configuration and precise pinning to the root - exact pins inside a module can make it impossible to combine with others. Modules must not declare backends, and omitting required_providers risks resolving the wrong source.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Modules", "Providers", "Versioning"]
  }
];

export default HASHICORP_TFP_QUESTIONS_7;
