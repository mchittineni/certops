export const HASHICORP_TFP_QUESTIONS_6 = [
  {
    id: "hashicorp-tfp-126",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Splat Expressions for Collecting Attributes",
    scenario: "A configuration must collect the id of every instance created by a resource that uses count.",
    question: "Which expression returns the list of ids?",
    options: [
      { id: 'A', text: "values(aws_instance.web).id" },
      { id: 'B', text: "aws_instance.web.id[*]" },
      { id: 'C', text: "aws_instance.web.*" },
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
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Refactoring a count Resource Into for_each",
    scenario: "A resource currently uses count over a list and must move to for_each keyed by name, without destroying the three existing objects.",
    question: "Which approach preserves them?",
    options: [
      { id: 'A', text: "Change the meta-argument and accept the replacement it produces." },
      { id: 'B', text: "Delete the state entries and import each object at its new address." },
      { id: 'C', text: "Run `terraform refresh`, which re-keys the instances automatically." },
      { id: 'D', text: "Add `moved` blocks mapping each old indexed address to its new keyed one." }
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
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "What terraform validate Cannot Catch",
    scenario: "A pipeline runs validate on every commit and a change still fails at apply with a cloud quota error.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "`validate` checks formatting only, which is why the error was not caught." },
      { id: 'B', text: "`validate` did not run, because the backend had not been initialised." },
      { id: 'C', text: "`validate` would have caught it had the `-check` flag been passed." },
      { id: 'D', text: "`validate` checks offline and cannot know quotas or existing names." }
    ],
    correctAnswers: ['D'],
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
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Passing Sensitive Values Into a Module",
    scenario: "A module needs a database password supplied by the root module, and the value must stay redacted in output.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Return it as an output of the calling module, which marks it on the way out." },
      { id: 'B', text: "Nothing is needed, since every module input is treated as sensitive." },
      { id: 'C', text: "Pass it through a `local` first, which strips the sensitive marking." },
      { id: 'D', text: "Declare the variable `sensitive = true`; it also propagates in." }
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
    domainName: "Configure and use Terraform providers",
    title: "Understanding a Timeout During Apply",
    scenario: "A resource creation fails after several minutes with a context deadline exceeded error from the provider.",
    question: "Which responses are reasonable? (Choose two.)",
    options: [
      { id: 'A', text: "Check whether the cloud operation is genuinely still running." },
      { id: 'B', text: "Delete the state file and retry the apply from a clean start." },
      { id: 'C', text: "Downgrade the provider to the oldest version still available." },
      { id: 'D', text: "Raise the resource's `timeouts` block for the create operation." }
    ],
    correctAnswers: ['A', 'D'],
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
    domainName: "Collaborate on infrastructure as code using HCP Terraform",
    title: "Choosing Between Sentinel and OPA",
    scenario: "An organisation already runs Open Policy Agent for Kubernetes admission and wants one policy language across both.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "Both Sentinel and OPA are supported, so the Rego work carries over." },
      { id: 'B', text: "Only OPA is supported now, since Sentinel has been retired." },
      { id: 'C', text: "Only Sentinel is supported; OPA has to run as a run task." },
      { id: 'D', text: "Policies have to be written in HCL rather than either." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Policy sets can be written in Sentinel or in Rego for OPA, both evaluated against the plan between plan and apply, which lets teams standardise on one language. Neither has been retired, and policies are not written in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["OPA", "Sentinel", "Policy"]
  },
  {
    id: "hashicorp-tfp-132",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Choosing Between try and can",
    scenario: "An expression must return a fallback when a deeply nested attribute is absent, and elsewhere a validation condition must test whether an expression is valid without producing a value.",
    question: "Which functions fit those two jobs?",
    options: [
      { id: 'A', text: "lookup for both." },
      { id: 'B', text: "can for the fallback value, and try for the boolean test." },
      { id: 'C', text: "`try` for the fallback value, `can` for the boolean validity test." },
      { id: 'D', text: "coalesce for both." }
    ],
    correctAnswers: ['C'],
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
    domainName: "Develop collaborative Terraform workflows",
    title: "Effect of Changing a Workspace",
    scenario: "An engineer runs terraform workspace select dev and then terraform plan.",
    question: "What changes?",
    options: [
      { id: 'A', text: "It switches to a different backend configured for that workspace." },
      { id: 'B', text: "It reads and writes the dev state within the same backend." },
      { id: 'C', text: "It loads a different configuration directory for that workspace." },
      { id: 'D', text: "It uses a different set of provider credentials automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A workspace selects an alternate state within one backend and configuration, and configurations may branch on the terraform.workspace value. It does not change the configuration source, the backend, or the credentials - which is exactly why workspaces alone are weak environment isolation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/workspaces",
    tags: ["Workspaces", "State", "CLI"]
  },
  {
    id: "hashicorp-tfp-134",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Promoting a Change Through Environments",
    scenario: "The same module version must be rolled out to dev, then staging, then production, with an approval before production.",
    question: "Which pipeline design expresses that cleanly?",
    options: [
      { id: 'A', text: "One workspace with the environment supplied as a variable changed between applies." },
      { id: 'B', text: "One pipeline per environment on a pinned version, with approval before production." },
      { id: 'C', text: "One apply that loops over the three environments within a single state file." },
      { id: 'D', text: "Auto-apply to every environment at once and roll production back on failure." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Promotion means the same versioned artifact advances through separately-stated environments with gates between them, which keeps blast radius small and makes what is deployed where explicit. A single state for all environments removes isolation, blind auto-apply removes the gate, and mutating one workspace between applies leaves no record of what each environment runs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces",
    tags: ["Promotion", "CI/CD", "Environments"]
  },
  {
    id: "hashicorp-tfp-135",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "When Not to Write a Module",
    scenario: "A team proposes a module that wraps a single resource, passing every argument straight through with no defaults or logic.",
    question: "Which critique is sound?",
    options: [
      { id: 'A', text: "Every resource should be wrapped, which keeps the call sites consistent across teams." },
      { id: 'B', text: "Wrapping a single resource improves plan performance by narrowing the graph." },
      { id: 'C', text: "A pass-through wrapper adds indirection and a version to maintain without encapsulating anything." },
      { id: 'D', text: "A module is required in order to use `for_each` over a set of resources." }
    ],
    correctAnswers: ['C'],
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
    domainName: "Configure and use Terraform providers",
    title: "Provider Produced Null Object",
    scenario: "An apply fails with an error saying the provider produced an unexpected new value or a null object for a resource after creation.",
    question: "What class of problem is this?",
    options: [
      { id: 'A', text: "A corrupted dependency lock file; delete it and re-run `init` to resolve afresh." },
      { id: 'B', text: "A malformed variable definition; the type constraint does not match the value." },
      { id: 'C', text: "A missing `depends_on`; the graph evaluated the resources in the wrong order." },
      { id: 'D', text: "A provider defect breaking the plugin contract; capture `TF_LOG` and report it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Errors phrased as the provider producing an unexpected or null value are Terraform detecting a violation of the provider protocol, which is a bug on the provider side; logs and a version change are the practical next steps. Variable syntax, ordering, and lock files produce quite different messages.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Providers", "Bugs", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-137",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Where Comments Belong",
    scenario: "A reviewer asks for the comment syntax supported by HCL.",
    question: "Which forms are valid?",
    options: [
      { id: 'A', text: "A hash for one line, and slash-star for a block." },
      { id: 'B', text: "Only the hash form, for a single line at a time." },
      { id: 'C', text: "A semicolon for one line, and no block form." },
      { id: 'D', text: "Only the XML-style comment delimiters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HCL accepts hash and double-slash line comments and C-style block comments, with the hash form being the idiomatic default that terraform fmt preserves. XML delimiters and semicolons are not comment syntax in HCL.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/syntax/configuration",
    tags: ["HCL", "Syntax", "Style"]
  },
  {
    id: "hashicorp-tfp-138",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Two Configurations Managing One Resource",
    scenario: "Two separate configurations both declare and manage the same load balancer, and each apply reverts the other changes.",
    question: "What is the correct resolution?",
    options: [
      { id: 'A', text: "Add `ignore_changes` for the shared attributes to both of the configurations." },
      { id: 'B', text: "Run the two configurations in a fixed order so the later one always wins." },
      { id: 'C', text: "Give it a single owner: remove it from one side's state, and read it there as a data source." },
      { id: 'D', text: "Enable state locking on both backends so the two runs cannot overlap." }
    ],
    correctAnswers: ['C'],
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
    domainName: "Collaborate on infrastructure as code using HCP Terraform",
    title: "Locking a Workspace",
    scenario: "During a migration, no runs should be queued against a production workspace for several hours.",
    question: "Which control does that?",
    options: [
      { id: 'A', text: "Setting the workspace to local execution, which keeps the state off the platform." },
      { id: 'B', text: "Locking the workspace, which prevents new runs from being queued until it is unlocked." },
      { id: 'C', text: "Removing all workspace variables." },
      { id: 'D', text: "Deleting the VCS connection temporarily." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A workspace lock is the built-in mechanism for pausing all runs, and it records who locked it and why. Disconnecting VCS blocks one trigger but not manual or API runs, changing execution mode does not stop runs, and deleting variables just makes runs fail confusingly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings",
    tags: ["HCP Terraform", "Workspaces", "Operations"]
  },
  {
    id: "hashicorp-tfp-140",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Terraform in a Container Image for CI",
    scenario: "A build image pins the Terraform binary version, and a configuration declares required_version = \"~> 1.6\".",
    question: "Why does pinning both matter?",
    options: [
      { id: 'A', text: "`required_version` installs the matching binary, so the image pin is belt and braces." },
      { id: 'B', text: "The image pin is redundant, since `required_version` already enforces the version." },
      { id: 'C', text: "Both are ignored when a remote backend runs the operation on its own agents." },
      { id: 'D', text: "The image pin makes runs reproducible, and `required_version` fails fast on an incompatible binary." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The two controls complement each other: the image decides which binary actually runs, and the constraint turns a mismatch anywhere into an immediate, understandable error rather than a strange failure. Terraform never installs itself from a constraint, and backends do not change version enforcement.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings",
    tags: ["CI/CD", "Versioning", "Reproducibility"]
  },
  {
    id: "hashicorp-tfp-141",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Standard Module Structure",
    scenario: "A module repository is being laid out for publication.",
    question: "Which layout follows the standard structure?",
    options: [
      { id: 'A', text: "One file per resource, named after the resource type, with no variables file." },
      { id: 'B', text: "A src/ directory containing all .tf files." },
      { id: 'C', text: "main.tf, variables.tf, outputs.tf, versions.tf and README.md, plus examples/" },
      { id: 'D', text: "A single terraform.tf containing everything, with no README." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The documented standard structure separates resources, inputs, outputs, and version constraints into predictable files with a README, and allows examples and nested modules directories that registries understand. The other layouts hide the interface and break the conventions tooling relies on.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Structure", "Conventions"]
  },
  {
    id: "hashicorp-tfp-142",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Deprecating a Module Input Gracefully",
    scenario: "A module input is being renamed. Existing callers must keep working for one more minor version but should be warned.",
    question: "Which approach fits the language?",
    options: [
      { id: 'A', text: "Remove the old variable in the next patch release and note it in the changelog." },
      { id: 'B', text: "Add a `moved` block for the variable so the old name resolves to the new one." },
      { id: 'C', text: "Rename it and rely on Terraform to map the old name for one more version." },
      { id: 'D', text: "Keep both, prefer the new one, and warn until the next major release." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform has no automatic variable aliasing, so a graceful rename means accepting both names for a while, resolving them in a local, and communicating the deprecation before removing the old input in a major version. Patch-level removal breaks callers, and moved blocks apply to resource addresses rather than variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Modules", "Deprecation", "Compatibility"]
  },
  {
    id: "hashicorp-tfp-143",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Interpreting a Cycle Involving a Module",
    scenario: "A cycle error names a module output and a module input, indicating the two modules reference each other.",
    question: "Which restructuring resolves it?",
    options: [
      { id: 'A', text: "Convert one module's output into a local so the other can read it directly." },
      { id: 'B', text: "Add `depends_on` between the two modules so the graph can order them." },
      { id: 'C', text: "Break the cycle by extracting the shared resource into a third module." },
      { id: 'D', text: "Apply the two modules with `-target` in sequence as a standing practice." }
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
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "What a State Version Contains",
    scenario: "A team reviews a stored state version after an incident.",
    question: "Which items are recorded in it?",
    options: [
      { id: 'A', text: "The resource instances and attributes, the outputs, the serial and lineage." },
      { id: 'B', text: "The provider binaries used for the run, so the same versions can be reinstalled." },
      { id: 'C', text: "The configuration files that produced it, so the run can be reproduced exactly." },
      { id: 'D', text: "The plan that was applied, so the change can be replayed against another state." }
    ],
    correctAnswers: ['A'],
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
    domainName: "Collaborate on infrastructure as code using HCP Terraform",
    title: "Restricting Which Modules Teams May Use",
    scenario: "Only modules from the organisation private registry may be used in production workspaces, and public registry sources must be rejected.",
    question: "Which enforcement is appropriate?",
    options: [
      { id: 'A', text: "A README stating the rule for every team to follow." },
      { id: 'B', text: "Removing internet access from the agents, which suffices." },
      { id: 'C', text: "A variable set listing the approved module sources." },
      { id: 'D', text: "A policy on module sources, attached hard-mandatory to production." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A hard-mandatory policy inspecting module sources in the plan blocks non-compliant runs automatically and is scoped to the workspaces that need it. Variable sets carry values rather than rules, network restrictions are a blunt control that also breaks provider downloads and can be circumvented by vendoring, and documentation enforces nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Policy", "Supply Chain", "Governance"]
  },
  {
    id: "hashicorp-tfp-146",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Auto-Loaded Variable Files",
    scenario: "A working directory contains terraform.tfvars, prod.auto.tfvars, and extra.tfvars.",
    question: "Which files are loaded without a command-line flag?",
    options: [
      { id: 'A', text: "terraform.tfvars, then the -var flag" },
      { id: 'B', text: "prod.auto.tfvars, then terraform.tfvars" },
      { id: 'C', text: "terraform.tfvars, then prod.auto.tfvars" },
      { id: 'D', text: "terraform.tfvars only, with the rest ignored" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform automatically loads terraform.tfvars, terraform.tfvars.json, and any file ending in .auto.tfvars or .auto.tfvars.json; anything else needs an explicit -var-file. That is why an arbitrarily named file is silently ignored, which is a common source of confusion.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "tfvars", "CLI"]
  },
  {
    id: "hashicorp-tfp-147",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Continuous Validation With check Blocks",
    scenario: "A team wants an ongoing assertion that a deployed endpoint returns healthy, reported as a warning rather than failing the apply.",
    question: "Which construct is designed for that?",
    options: [
      { id: 'A', text: "An output with a condition." },
      { id: 'B', text: "A `validation` block on the variable that carries the value in question." },
      { id: 'C', text: "A precondition on the resource." },
      { id: 'D', text: "A check block containing an optional data source and one or more assert conditions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "check blocks perform continuous validation: they may scope a data source and evaluate assertions whose failure produces a warning rather than blocking the run, which suits health assertions. Preconditions and variable validation block the operation, and outputs carry postconditions rather than standalone checks.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/checks",
    tags: ["check blocks", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-148",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Local Module Paths in a Monorepo",
    scenario: "A monorepo holds shared modules under modules/ and several root configurations under live/. A root configuration references ../../modules/network.",
    question: "What is the consequence of using a relative local path?",
    options: [
      { id: 'A', text: "The lock file records the module's content hash, so a change fails `init` until relocked." },
      { id: 'B', text: "Local paths are not supported for modules, so the source must be a registry address." },
      { id: 'C', text: "There is no version boundary: every root picks up module changes at once, for better and worse." },
      { id: 'D', text: "Terraform copies the module into `.terraform` and pins that copy at `init` time." }
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
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "State Lineage Mismatch",
    scenario: "A backend operation fails with an error about mismatched state lineage.",
    question: "What does that mean?",
    options: [
      { id: 'A', text: "The state being written has a different lineage — usually a wrong backend key." },
      { id: 'B', text: "The provider schema changed between the two runs, so the stored state cannot be read." },
      { id: 'C', text: "The Terraform version differs from the one that wrote the state, so the format mismatches." },
      { id: 'D', text: "A resource was renamed without a `moved` block, so the addresses no longer line up." }
    ],
    correctAnswers: ['A'],
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
    domainName: "Develop collaborative Terraform workflows",
    title: "Encrypting State at Rest",
    scenario: "Compliance requires that state be encrypted at rest and that access be auditable.",
    question: "Which combination satisfies that for an object-storage backend?",
    options: [
      { id: 'A', text: "Marking every sensitive variable, which encrypts those values inside the state." },
      { id: 'B', text: "Committing the state to a private git repository with restricted access." },
      { id: 'C', text: "Server-side encryption, a scoped bucket policy, versioning and access logs." },
      { id: 'D', text: "Relying on TLS to the backend, which also encrypts the state at rest." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Protection at rest is a backend responsibility: encryption with a managed key, tight access policies, versioning for recovery, and logs for audit. Sensitivity marking only affects display, a private repository is still plain text with wide read access, and TLS protects data in transit.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["State", "Encryption", "Compliance"]
  }
];

export default HASHICORP_TFP_QUESTIONS_6;
