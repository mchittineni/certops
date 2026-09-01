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
      { id: 'A', text: "Write var.name directly; wrapping a single reference in a template string is redundant and terraform fmt style guidance discourages it." },
      { id: 'B', text: "Wrap it in the tostring function." },
      { id: 'C', text: "Interpolation is required for all variable references." },
      { id: 'D', text: "Use ${{ var.name }} instead." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Define a new provider block in the grandchild." },
      { id: 'B', text: "Use depends_on to link the provider." },
      { id: 'C', text: "Pass the provider explicitly to the grandchild with its own providers argument, because implicit inheritance only carries default provider configurations." },
      { id: 'D', text: "Nothing - aliased providers are inherited automatically at every level." }
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
      { id: 'A', text: "terraform show module.network" },
      { id: 'B', text: "terraform state list --filter=module.network" },
      { id: 'C', text: "terraform state show module.network" },
      { id: 'D', text: "terraform state list module.network" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Reduce -parallelism so fewer concurrent provider operations are in flight." },
      { id: 'B', text: "Remove the dependency lock file." },
      { id: 'C', text: "Disable state locking to speed the run up." },
      { id: 'D', text: "Split the configuration so each run touches fewer resources." }
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
      { id: 'A', text: "Run terraform refresh to drop stale references." },
      { id: 'B', text: "Run terraform init to rebuild the reference index." },
      { id: 'C', text: "Every reference to the removed address must be updated or removed too, since Terraform resolves references statically before planning." },
      { id: 'D', text: "Add a moved block for the deleted resource." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "The organisation audit trail, streamed or exported for retention, complemented by per-workspace run history." },
      { id: 'B', text: "The state file history alone." },
      { id: 'C', text: "Provider debug logs." },
      { id: 'D', text: "The private registry publication log." }
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
      { id: 'A', text: "Compose the name in a local with join and lower, truncate with substr, and add a variable validation asserting the final pattern and length." },
      { id: 'B', text: "Concatenate the parts inline in every resource and hope they fit." },
      { id: 'C', text: "Use timestamp() in the name to avoid collisions." },
      { id: 'D', text: "Use uuid() so uniqueness is guaranteed." }
    ],
    correctAnswers: ['A'],
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
      { id: 'B', text: "Edit the default inside the module for production." },
      { id: 'C', text: "Pass the production value as an argument in the module block of the production root configuration." },
      { id: 'D', text: "Fork the module for production." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Delete the state and re-import everything, which is the fastest path." },
      { id: 'B', text: "Restore the correct state version from backend versioning or the HCP Terraform state history, verify with terraform plan showing no changes, and investigate how the push was permitted." },
      { id: 'C', text: "Run terraform refresh, which rebuilds the missing entries." },
      { id: 'D', text: "Apply the plan so state and reality agree again." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Only the speed of the apply." },
      { id: 'B', text: "Inconsistent tool and provider versions, unaudited use of personal credentials, no shared run history, and no enforced review or policy gate." },
      { id: 'C', text: "Nothing, provided everyone uses the same Terraform version." },
      { id: 'D', text: "Only the cost of cloud API calls." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "TF_LOG_PATH=provider.log, which filters by component." },
      { id: 'B', text: "TF_LOG=PROVIDER" },
      { id: 'C', text: "TF_LOG_PROVIDER, which sets the level for provider logs independently of TF_LOG_CORE." },
      { id: 'D', text: "TF_DEBUG_PROVIDER=1" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Declare the variable with no default, and run with -input=false so a missing value is an error instead of a prompt." },
      { id: 'B', text: "Declare it with required = true." },
      { id: 'C', text: "Declare it as sensitive, which forces the caller to supply it." },
      { id: 'D', text: "Declare it with default = null, which makes it required." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Setting parallelism to zero in the test file." },
      { id: 'B', text: "Marking the test file with dry_run = true." },
      { id: 'C', text: "Running terraform validate instead, which evaluates outputs." },
      { id: 'D', text: "Mock providers together with run blocks using command = plan, so resources are never really created." }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "The workspace and all its resources are destroyed." },
      { id: 'B', text: "The workspace is deleted and its state merged into default." },
      { id: 'C', text: "Terraform refuses unless the state is empty, because deleting it would orphan the managed resources; -force overrides at that cost." },
      { id: 'D', text: "The command always succeeds and state is archived." }
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
      { id: 'B', text: "Auto-apply enabled on development workspaces and disabled on production, where an authorised user confirms the plan." },
      { id: 'C', text: "Auto-apply is a global organisation setting and cannot vary." },
      { id: 'D', text: "Auto-apply everywhere with a policy that rejects production changes." }
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
      { id: 'A', text: "State is never written again." },
      { id: 'B', text: "The plan is identical but cached." },
      { id: 'C', text: "The plan is faster because provider reads are skipped, but it is computed against possibly stale state and will not show drift." },
      { id: 'D', text: "The plan refuses to run without a saved plan file." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Wrap the twenty blocks in a module and call it once." },
      { id: 'B', text: "Move the rule data into a map local or variable and create the rules with for_each, so the data and the resource shape are separate." },
      { id: 'C', text: "Generate the HCL with a shell script before each run." },
      { id: 'D', text: "Use count with twenty conditional expressions." }
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
      { id: 'A', text: "Apply uses a different provider version." },
      { id: 'B', text: "Plan does not contact the provider at all." },
      { id: 'C', text: "The plan file caches credentials that then expire." },
      { id: 'D', text: "Plan mostly performs read operations, so an identity with read but not write permissions can plan successfully and only fail when the write is attempted." }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Bump every consumer at once so problems are found quickly." },
      { id: 'B', text: "Publish the version and let consumers discover issues." },
      { id: 'C', text: "Adopt the new version in a low-risk environment first, run its tests and a plan review there, then promote the version constraint outward." },
      { id: 'D', text: "Skip testing because semantic versioning guarantees compatibility." }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Switch to the local backend, which has no size limit." },
      { id: 'B', text: "Compress the state file in the backend." },
      { id: 'C', text: "Split the configuration into several states along ownership and lifecycle boundaries, and remove resources that no longer need Terraform management." },
      { id: 'D', text: "Increase the backend timeout and continue." }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "The instance size as a Terraform variable and the credential as an environment variable marked sensitive." },
      { id: 'C', text: "The credential in the configuration provider block and the size as an environment variable." },
      { id: 'D', text: "Both as environment variables." }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Use the standalone rule resource, because mixing inline blocks with externally managed rules causes each apply to remove rules it does not know about." },
      { id: 'B', text: "Use inline blocks, because they plan faster." },
      { id: 'C', text: "Use both forms together for redundancy." },
      { id: 'D', text: "It makes no difference to behaviour." }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Retry indefinitely until the check responds." },
      { id: 'B', text: "Fail the pipeline and block the apply, because an unavailable check must not be treated as a pass." },
      { id: 'C', text: "Apply first and evaluate the policy afterwards." },
      { id: 'D', text: "Skip the check and continue, since the plan was already reviewed." }
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
      { id: 'A', text: "Terraform destroys resources by tag, so the tags overlap." },
      { id: 'B', text: "The working directory is pointed at the wrong state - a wrong backend key, workspace, or cloud workspace - so stop, confirm the backend and workspace, and inspect state before running anything." },
      { id: 'C', text: "The plan is showing resources from data sources." },
      { id: 'D', text: "Destroy always includes every resource in the account." }
    ],
    correctAnswers: ['B'],
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
      { id: 'B', text: "A backend block plus required_providers." },
      { id: 'C', text: "Only a required_version constraint, leaving providers undeclared." },
      { id: 'D', text: "required_providers entries with source addresses and permissive lower-bound constraints, and no provider configuration blocks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A shared module declares which providers it needs and the minimum versions whose features it relies on, leaving configuration and precise pinning to the root - exact pins inside a module can make it impossible to combine with others. Modules must not declare backends, and omitting required_providers risks resolving the wrong source.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Modules", "Providers", "Versioning"]
  }
];

export default HASHICORP_TFP_QUESTIONS_7;
