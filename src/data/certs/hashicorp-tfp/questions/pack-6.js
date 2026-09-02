export const HASHICORP_TFP_QUESTIONS_6 = [
  {
    id: "hashicorp-tfp-126",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Splat Expressions for Collecting Attributes",
    scenario: "A configuration must collect the id of every instance created by a resource that uses count.",
    question: "Which expression returns the list of ids?",
    options: [
      { id: 'A', text: "aws_instance.web.id[*]" },
      { id: 'B', text: "aws_instance.web.*" },
      { id: 'C', text: "values(aws_instance.web).id" },
      { id: 'D', text: "aws_instance.web[*].id" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The splat operator applied to the instance collection projects the named attribute across every instance, returning a list. Placing the splat after the attribute is a syntax error, values() converts a map to a list but does not project an attribute, and a bare splat with no attribute is incomplete.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/splat",
    tags: ["Splat", "Expressions", "HCL"]
  },
  {
    id: "hashicorp-tfp-127",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Refactoring a count Resource Into for_each",
    scenario: "A resource currently uses count over a list and must move to for_each keyed by name, without destroying the three existing objects.",
    question: "Which approach preserves them?",
    options: [
      { id: 'A', text: "Change the meta-argument and accept the replacement." },
      { id: 'B', text: "Run terraform refresh, which re-keys instances automatically." },
      { id: 'C', text: "Delete the state entries and re-import each object." },
      { id: 'D', text: "Add moved blocks mapping each old indexed address to its new keyed address, for example from resource.this[0] to resource.this[\"alpha\"]." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instance addresses change when the keying scheme changes, and moved blocks declare that mapping so Terraform re-keys the state entries instead of destroying and recreating. Accepting replacement destroys live objects, refresh never re-keys, and delete-and-reimport is a slower manual version of the same outcome with more risk.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/moved",
    tags: ["moved", "for_each", "Refactoring"]
  },
  {
    id: "hashicorp-tfp-128",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "What terraform validate Cannot Catch",
    scenario: "A pipeline runs validate on every commit and a change still fails at apply with a cloud quota error.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "validate checks configuration consistency offline; it cannot know provider-side state such as quotas, permissions, or existing object names." },
      { id: 'B', text: "validate would have caught it with the -check flag." },
      { id: 'C', text: "validate only checks formatting." },
      { id: 'D', text: "validate failed to run because the backend was not initialised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Validation is a static check of syntax, references, and types with no remote calls, so anything that depends on the real environment surfaces only at plan or apply. Formatting is fmt rather than validate, and validate has no -check flag.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/validate",
    tags: ["validate", "CI/CD", "Limits"]
  },
  {
    id: "hashicorp-tfp-129",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Passing Sensitive Values Into a Module",
    scenario: "A module needs a database password supplied by the root module, and the value must stay redacted in output.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Nothing, because module inputs are always sensitive." },
      { id: 'B', text: "Pass it through a local first to strip the marking." },
      { id: 'C', text: "Store it in an output of the calling module." },
      { id: 'D', text: "Declare the module variable with sensitive = true; sensitivity also propagates automatically from a sensitive value passed in." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Marking the module variable sensitive documents the contract and guarantees redaction inside the module, and Terraform also propagates sensitivity through expressions derived from a sensitive value. Inputs are not sensitive by default, routing through a local does not strip the marking and would be undesirable if it did, and publishing it as an output spreads the secret further.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Modules", "Sensitive", "Security"]
  },
  {
    id: "hashicorp-tfp-130",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Understanding a Timeout During Apply",
    scenario: "A resource creation fails after several minutes with a context deadline exceeded error from the provider.",
    question: "Which responses are reasonable? (Choose two.)",
    options: [
      { id: 'A', text: "Delete the state file and retry." },
      { id: 'B', text: "Increase the resource timeouts block for the create operation if the provider supports it." },
      { id: 'C', text: "Lower the provider version to the oldest available." },
      { id: 'D', text: "Check whether the underlying cloud operation is genuinely slow or stuck, since the object may still be being created." }
    ],
    correctAnswers: ['B', 'D'],
    type: "multiple",
    explanation: "Many resources expose a timeouts block for create, update, and delete, and a timeout often means the cloud operation is simply slower than the default - so verifying what actually happened matters before retrying, because a half-created object may exist. Downgrading blindly and deleting state both create new problems.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/syntax",
    tags: ["Timeouts", "Troubleshooting", "Providers"]
  },
  {
    id: "hashicorp-tfp-131",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Choosing Between Sentinel and OPA",
    scenario: "An organisation already runs Open Policy Agent for Kubernetes admission and wants one policy language across both.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Only Sentinel is supported; OPA must run as an external run task." },
      { id: 'B', text: "Only OPA is supported since Sentinel was retired." },
      { id: 'C', text: "Policies must be written in HCL." },
      { id: 'D', text: "HCP Terraform supports both Sentinel and OPA policy sets, so an existing Rego investment can be reused for Terraform runs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Policy sets can be written in Sentinel or in Rego for OPA, both evaluated against the plan between plan and apply, which lets teams standardise on one language. Neither has been retired, and policies are not written in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["OPA", "Sentinel", "Policy"]
  },
  {
    id: "hashicorp-tfp-132",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between try and can",
    scenario: "An expression must return a fallback when a deeply nested attribute is absent, and elsewhere a validation condition must test whether an expression is valid without producing a value.",
    question: "Which functions fit those two jobs?",
    options: [
      { id: 'A', text: "lookup for both." },
      { id: 'B', text: "try for the fallback value, and can for the boolean validity test inside a condition." },
      { id: 'C', text: "can for the fallback value, and try for the boolean test." },
      { id: 'D', text: "coalesce for both." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "try evaluates its arguments in order and returns the first that succeeds, while can returns true or false depending on whether an expression evaluates without error - which is why can is the idiomatic helper inside validation conditions. coalesce selects the first non-null value and lookup reads a map key, neither of which handles evaluation errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/try",
    tags: ["Functions", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-133",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Effect of Changing a Workspace",
    scenario: "An engineer runs terraform workspace select dev and then terraform plan.",
    question: "What changes?",
    options: [
      { id: 'A', text: "Terraform reads and writes the dev state within the same backend and configuration; terraform.workspace can also alter expressions." },
      { id: 'B', text: "Terraform loads a different configuration directory." },
      { id: 'C', text: "Terraform switches to a different backend." },
      { id: 'D', text: "Terraform uses different provider credentials automatically." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A workspace selects an alternate state within one backend and configuration, and configurations may branch on the terraform.workspace value. It does not change the configuration source, the backend, or the credentials - which is exactly why workspaces alone are weak environment isolation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "State", "CLI"]
  },
  {
    id: "hashicorp-tfp-134",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Promoting a Change Through Environments",
    scenario: "The same module version must be rolled out to dev, then staging, then production, with an approval before production.",
    question: "Which pipeline design expresses that cleanly?",
    options: [
      { id: 'A', text: "Use one workspace and change a variable between applies." },
      { id: 'B', text: "A single apply that loops over all three environments in one state." },
      { id: 'C', text: "One pipeline per environment consuming a pinned module version, promoted by bumping that version in each environment configuration, with a manual approval gate before the production apply." },
      { id: 'D', text: "Auto-apply everywhere and roll back if production breaks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Promotion means the same versioned artifact advances through separately-stated environments with gates between them, which keeps blast radius small and makes what is deployed where explicit. A single state for all environments removes isolation, blind auto-apply removes the gate, and mutating one workspace between applies leaves no record of what each environment runs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["Promotion", "CI/CD", "Environments"]
  },
  {
    id: "hashicorp-tfp-135",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "When Not to Write a Module",
    scenario: "A team proposes a module that wraps a single resource, passing every argument straight through with no defaults or logic.",
    question: "Which critique is sound?",
    options: [
      { id: 'A', text: "A pass-through wrapper adds indirection and a version to maintain without encapsulating anything; use the resource directly until there is real shared behaviour to capture." },
      { id: 'B', text: "Every resource should be wrapped for consistency." },
      { id: 'C', text: "Wrapping a single resource improves plan performance." },
      { id: 'D', text: "Modules are required in order to use for_each." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modules should encapsulate a decision or a composition; wrapping one resource with no added behaviour costs a release process and an extra layer of variable plumbing for nothing. There is no performance benefit, and for_each works on resources directly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Design", "Anti-Patterns"]
  },
  {
    id: "hashicorp-tfp-136",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Provider Produced Null Object",
    scenario: "An apply fails with an error saying the provider produced an unexpected new value or a null object for a resource after creation.",
    question: "What class of problem is this?",
    options: [
      { id: 'A', text: "A corrupted lock file." },
      { id: 'B', text: "A malformed variable definition." },
      { id: 'C', text: "A provider defect violating the plugin contract; capture TF_LOG output, check the provider issue tracker, and try a different provider version." },
      { id: 'D', text: "A missing depends_on." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Errors phrased as the provider producing an unexpected or null value are Terraform detecting a violation of the provider protocol, which is a bug on the provider side; logs and a version change are the practical next steps. Variable syntax, ordering, and lock files produce quite different messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Providers", "Bugs", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-137",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Where Comments Belong",
    scenario: "A reviewer asks for the comment syntax supported by HCL.",
    question: "Which forms are valid?",
    options: [
      { id: 'A', text: "Only the hash form." },
      { id: 'B', text: "Only XML-style comment delimiters." },
      { id: 'C', text: "Semicolon for a single line." },
      { id: 'D', text: "Hash for a single line, double slash for a single line, and slash-star to star-slash for a block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "HCL accepts hash and double-slash line comments and C-style block comments, with the hash form being the idiomatic default that terraform fmt preserves. XML delimiters and semicolons are not comment syntax in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/syntax/configuration",
    tags: ["HCL", "Syntax", "Style"]
  },
  {
    id: "hashicorp-tfp-138",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Two Configurations Managing One Resource",
    scenario: "Two separate configurations both declare and manage the same load balancer, and each apply reverts the other changes.",
    question: "What is the correct resolution?",
    options: [
      { id: 'A', text: "Enable state locking on both backends." },
      { id: 'B', text: "Add ignore_changes to both configurations." },
      { id: 'C', text: "Run the two configurations in a fixed order." },
      { id: 'D', text: "Establish a single owner: remove the resource from one configuration and state with a removed block or state rm, and have that side consume it via a data source or output." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Two owners for one object is a design fault rather than a race, so the fix is to make exactly one configuration authoritative and let the other read the value. Ignoring changes on both sides means neither manages it, ordering only alternates who wins last, and locking protects one state file rather than coordinating two.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Ownership", "State", "Architecture"]
  },
  {
    id: "hashicorp-tfp-139",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Locking a Workspace",
    scenario: "During a migration, no runs should be queued against a production workspace for several hours.",
    question: "Which control does that?",
    options: [
      { id: 'A', text: "Locking the workspace, which prevents new runs from being queued until it is unlocked." },
      { id: 'B', text: "Setting the workspace to local execution." },
      { id: 'C', text: "Deleting the VCS connection temporarily." },
      { id: 'D', text: "Removing all workspace variables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A workspace lock is the built-in mechanism for pausing all runs, and it records who locked it and why. Disconnecting VCS blocks one trigger but not manual or API runs, changing execution mode does not stop runs, and deleting variables just makes runs fail confusingly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings",
    tags: ["HCP Terraform", "Workspaces", "Operations"]
  },
  {
    id: "hashicorp-tfp-140",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Terraform in a Container Image for CI",
    scenario: "A build image pins the Terraform binary version, and a configuration declares required_version = \"~> 1.6\".",
    question: "Why does pinning both matter?",
    options: [
      { id: 'A', text: "The image pin is unnecessary because required_version enforces it." },
      { id: 'B', text: "The image pin makes runs reproducible across jobs, and required_version fails fast with a clear message if someone runs an incompatible binary locally or in another pipeline." },
      { id: 'C', text: "Both are ignored when a remote backend is used." },
      { id: 'D', text: "required_version installs the correct binary automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The two controls complement each other: the image decides which binary actually runs, and the constraint turns a mismatch anywhere into an immediate, understandable error rather than a strange failure. Terraform never installs itself from a constraint, and backends do not change version enforcement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings",
    tags: ["CI/CD", "Versioning", "Reproducibility"]
  },
  {
    id: "hashicorp-tfp-141",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Standard Module Structure",
    scenario: "A module repository is being laid out for publication.",
    question: "Which layout follows the standard structure?",
    options: [
      { id: 'A', text: "main.tf, variables.tf, outputs.tf, versions.tf, README.md, plus optional examples/ and modules/ directories." },
      { id: 'B', text: "A single terraform.tf containing everything, with no README." },
      { id: 'C', text: "A src/ directory containing all .tf files." },
      { id: 'D', text: "One file per resource, named after the resource type, with no variables file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The documented standard structure separates resources, inputs, outputs, and version constraints into predictable files with a README, and allows examples and nested modules directories that registries understand. The other layouts hide the interface and break the conventions tooling relies on.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Structure", "Conventions"]
  },
  {
    id: "hashicorp-tfp-142",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Deprecating a Module Input Gracefully",
    scenario: "A module input is being renamed. Existing callers must keep working for one more minor version but should be warned.",
    question: "Which approach fits the language?",
    options: [
      { id: 'A', text: "Add a moved block for the variable." },
      { id: 'B', text: "Rename it and rely on Terraform to map the old name automatically." },
      { id: 'C', text: "Keep both variables, prefer the new one with a coalesce-style local, and surface a warning through a check block or documented deprecation note until the old one is removed in a major release." },
      { id: 'D', text: "Remove the old variable immediately in a patch release." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform has no automatic variable aliasing, so a graceful rename means accepting both names for a while, resolving them in a local, and communicating the deprecation before removing the old input in a major version. Patch-level removal breaks callers, and moved blocks apply to resource addresses rather than variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Modules", "Deprecation", "Compatibility"]
  },
  {
    id: "hashicorp-tfp-143",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Interpreting a Cycle Involving a Module",
    scenario: "A cycle error names a module output and a module input, indicating the two modules reference each other.",
    question: "Which restructuring resolves it?",
    options: [
      { id: 'A', text: "Apply the modules with -target in sequence permanently." },
      { id: 'B', text: "Convert one module output to a local." },
      { id: 'C', text: "Break the mutual dependency by extracting the shared resource into a third module or the root, so both modules depend on it rather than on each other." },
      { id: 'D', text: "Add depends_on between the two modules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A cycle is a structural problem, and the standard fix is to hoist whatever both sides need into a common dependency so the graph becomes acyclic. Adding depends_on strengthens the cycle, locals cannot cross module boundaries, and habitual targeting is a workaround that leaves the design broken.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/graph",
    tags: ["Cycles", "Modules", "Architecture"]
  },
  {
    id: "hashicorp-tfp-144",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "What a State Version Contains",
    scenario: "A team reviews a stored state version after an incident.",
    question: "Which items are recorded in it?",
    options: [
      { id: 'A', text: "The plan that was applied." },
      { id: 'B', text: "The provider binaries used." },
      { id: 'C', text: "The managed resource instances with their attribute values and dependencies, the output values, the serial and lineage, and the Terraform version that wrote it." },
      { id: 'D', text: "The configuration files that produced it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "State captures instances, attributes, dependency edges, outputs, and bookkeeping such as serial, lineage, and writer version - which is why it is both essential and sensitive. It does not embed the configuration, the plan, or provider binaries.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["State", "Internals", "Audit"]
  },
  {
    id: "hashicorp-tfp-145",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Restricting Which Modules Teams May Use",
    scenario: "Only modules from the organisation private registry may be used in production workspaces, and public registry sources must be rejected.",
    question: "Which enforcement is appropriate?",
    options: [
      { id: 'A', text: "A README stating the rule." },
      { id: 'B', text: "A policy evaluating the plan configuration for module sources, attached as a hard-mandatory policy set to the production project." },
      { id: 'C', text: "Removing internet access from the agents, which is sufficient on its own." },
      { id: 'D', text: "A variable set listing approved modules." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A hard-mandatory policy inspecting module sources in the plan blocks non-compliant runs automatically and is scoped to the workspaces that need it. Variable sets carry values rather than rules, network restrictions are a blunt control that also breaks provider downloads and can be circumvented by vendoring, and documentation enforces nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy", "Supply Chain", "Governance"]
  },
  {
    id: "hashicorp-tfp-146",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Auto-Loaded Variable Files",
    scenario: "A working directory contains terraform.tfvars, prod.auto.tfvars, and extra.tfvars.",
    question: "Which files are loaded without a command-line flag?",
    options: [
      { id: 'A', text: "terraform.tfvars and prod.auto.tfvars" },
      { id: 'B', text: "Only terraform.tfvars" },
      { id: 'C', text: "All three" },
      { id: 'D', text: "None of them" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform automatically loads terraform.tfvars, terraform.tfvars.json, and any file ending in .auto.tfvars or .auto.tfvars.json; anything else needs an explicit -var-file. That is why an arbitrarily named file is silently ignored, which is a common source of confusion.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "tfvars", "CLI"]
  },
  {
    id: "hashicorp-tfp-147",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Continuous Validation With check Blocks",
    scenario: "A team wants an ongoing assertion that a deployed endpoint returns healthy, reported as a warning rather than failing the apply.",
    question: "Which construct is designed for that?",
    options: [
      { id: 'A', text: "A check block containing an optional data source and one or more assert conditions." },
      { id: 'B', text: "A variable validation block." },
      { id: 'C', text: "A precondition on the resource." },
      { id: 'D', text: "An output with a condition." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "check blocks perform continuous validation: they may scope a data source and evaluate assertions whose failure produces a warning rather than blocking the run, which suits health assertions. Preconditions and variable validation block the operation, and outputs carry postconditions rather than standalone checks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["check blocks", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-148",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Local Module Paths in a Monorepo",
    scenario: "A monorepo holds shared modules under modules/ and several root configurations under live/. A root configuration references ../../modules/network.",
    question: "What is the consequence of using a relative local path?",
    options: [
      { id: 'A', text: "Local paths are not supported for modules." },
      { id: 'B', text: "Terraform copies the module and pins it at init." },
      { id: 'C', text: "There is no version boundary - every root picks up module changes immediately - which is fast for iteration but means a change can break many roots at once." },
      { id: 'D', text: "The lock file records the module content hash." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Local module sources are read from disk with no version constraint, so all consumers in the repository move together - a real trade-off between iteration speed and blast radius that registry or git sources with tags avoid. Terraform does record local modules in .terraform but does not pin their content, and the lock file covers providers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources",
    tags: ["Modules", "Monorepo", "Versioning"]
  },
  {
    id: "hashicorp-tfp-149",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "State Lineage Mismatch",
    scenario: "A backend operation fails with an error about mismatched state lineage.",
    question: "What does that mean?",
    options: [
      { id: 'A', text: "A resource was renamed without a moved block." },
      { id: 'B', text: "The state being written has a different lineage identifier from the one stored, indicating the two states came from different initialisations - usually a wrong backend key or a state overwritten from elsewhere." },
      { id: 'C', text: "The provider schema changed." },
      { id: 'D', text: "The Terraform version differs from the one that wrote state." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Lineage is a unique identifier assigned when a state is first created, and a mismatch is Terraform refusing to conflate two unrelated state histories - typically caused by pointing at the wrong key or restoring the wrong file. Version, schema, and rename problems all report distinctly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["State", "Lineage", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-150",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Encrypting State at Rest",
    scenario: "Compliance requires that state be encrypted at rest and that access be auditable.",
    question: "Which combination satisfies that for an object-storage backend?",
    options: [
      { id: 'A', text: "Committing state to a private git repository." },
      { id: 'B', text: "Relying on TLS to the backend, which encrypts state at rest." },
      { id: 'C', text: "Server-side encryption with a managed key, bucket policies restricting access to the pipeline identity, versioning, and access logging." },
      { id: 'D', text: "Marking every sensitive variable, which encrypts the values in state." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Protection at rest is a backend responsibility: encryption with a managed key, tight access policies, versioning for recovery, and logs for audit. Sensitivity marking only affects display, a private repository is still plain text with wide read access, and TLS protects data in transit.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State", "Encryption", "Compliance"]
  }
];

export default HASHICORP_TFP_QUESTIONS_6;
