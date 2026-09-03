export const HASHICORP_TFP_QUESTIONS_8 = [
  {
    id: "hashicorp-tfp-176",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Flattening Nested Data for for_each",
    scenario: "A variable holds a map of VPCs, each containing a list of subnets, and one subnet resource must be created for every VPC and subnet combination.",
    question: "Which approach produces suitable for_each keys?",
    options: [
      { id: 'A', text: "Build a flattened list of objects with a nested for expression, then convert it to a map keyed by a composite string such as \"vpc-subnet\"." },
      { id: 'B', text: "Use for_each directly on the nested map, which iterates all levels." },
      { id: 'C', text: "Create one module instance per VPC and use count inside it." },
      { id: 'D', text: "Use count with the total number of subnets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "for_each iterates one level, so nested data must be flattened into a single collection and given stable composite keys, which is the documented pattern. Counting the total reintroduces positional keys that shift on removal, and pushing count inside a per-VPC module hides rather than solves the indexing problem.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/flatten",
    tags: ["flatten", "for_each", "HCL"]
  },
  {
    id: "hashicorp-tfp-177",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Where Outputs Are Stored",
    scenario: "A colleague asks how terraform output can return values without contacting the cloud.",
    question: "Which explanation is right?",
    options: [
      { id: 'A', text: "Output values are recorded in state during apply, so the command reads them from state rather than from the provider." },
      { id: 'B', text: "Outputs are stored in the dependency lock file." },
      { id: 'C', text: "Outputs are recomputed by calling the provider each time." },
      { id: 'D', text: "Outputs are cached in the .terraform directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Applied output values are persisted in state, which is why they are available offline and why sensitive outputs are one more reason to protect state. The .terraform directory holds providers and modules, and the lock file records provider selections.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs",
    tags: ["Outputs", "State", "CLI"]
  },
  {
    id: "hashicorp-tfp-178",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Designing an Idempotent Pipeline",
    scenario: "A pipeline must be safe to re-run after a transient failure at any stage, without creating duplicates or requiring manual cleanup.",
    question: "Which properties matter most?",
    options: [
      { id: 'A', text: "Running with -auto-approve so no prompt blocks the retry." },
      { id: 'B', text: "Reliable state locking, applying a saved plan, deterministic provider and module versions, and idempotent apply semantics so a re-run converges rather than duplicates." },
      { id: 'C', text: "Using -target to retry only the failed resource." },
      { id: 'D', text: "Deleting state before each attempt for a clean slate." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform apply is convergent by design, so re-runs are safe when state is protected by locking, versions are pinned, and the plan being applied is the reviewed one. Auto-approve only removes a prompt, deleting state guarantees duplication, and habitual targeting leaves the configuration and state inconsistent.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/run",
    tags: ["CI/CD", "Idempotency", "Reliability"]
  },
  {
    id: "hashicorp-tfp-179",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Choosing Between Composition and Inheritance of Configuration",
    scenario: "Two environments share ninety percent of their configuration and differ in a few resource counts and sizes.",
    question: "Which approach is idiomatic in Terraform?",
    options: [
      { id: 'A', text: "One configuration with conditionals on terraform.workspace throughout." },
      { id: 'B', text: "Symbolic links between the two directories." },
      { id: 'C', text: "One shared module with input variables, called by two thin root configurations that pass different values." },
      { id: 'D', text: "Two copies of the configuration kept in sync manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform has no inheritance, so sharing happens through modules parameterised by variables, with each environment root supplying its own values and holding its own state. Duplication drifts, workspace conditionals scatter environment logic through the code, and symlinks obscure what is actually being applied.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Modules", "Environments", "Design"]
  },
  {
    id: "hashicorp-tfp-180",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Understanding terraform graph Output",
    scenario: "An engineer generates a graph to understand why a resource is created before another.",
    question: "What does the graph show?",
    options: [
      { id: 'A', text: "The order in which resources were created historically." },
      { id: 'B', text: "The physical network topology of the created infrastructure." },
      { id: 'C', text: "The dependency relationships Terraform derived from references and depends_on, which determine the order operations may run in." },
      { id: 'D', text: "The provider API calls that will be made." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "terraform graph renders the internal dependency graph in DOT format, which is what constrains ordering and reveals cycles. It describes configuration relationships rather than network topology, historical order, or individual API calls.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/graph",
    tags: ["graph", "Dependencies", "Debugging"]
  },
  {
    id: "hashicorp-tfp-181",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Migrating a Local Configuration Into HCP Terraform",
    scenario: "An existing configuration with local state must move to HCP Terraform with its resources intact.",
    question: "What is the supported sequence?",
    options: [
      { id: 'A', text: "Create the workspace, run terraform destroy locally, then apply remotely." },
      { id: 'B', text: "Upload terraform.tfstate through the UI as the first step, then add the cloud block." },
      { id: 'C', text: "Rename the state file to match the workspace name." },
      { id: 'D', text: "Add a cloud block naming the organisation and workspace, run terraform init and confirm the state migration, then set variables and execution mode in the workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform detects the new cloud block during init and offers to migrate existing state into the named workspace, after which variables and execution settings are configured there. Destroying and recreating discards live infrastructure, and manual state upload skips the consistency checks the migration performs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/cloud/migrating",
    tags: ["HCP Terraform", "Migration", "State"]
  },
  {
    id: "hashicorp-tfp-182",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Referencing a Data Source",
    scenario: "A data source is declared as data \"aws_ami\" \"ubuntu\" and an instance must use its id.",
    question: "Which reference is correct?",
    options: [
      { id: 'A', text: "data.aws_ami.ubuntu.id" },
      { id: 'B', text: "var.data.aws_ami.ubuntu.id" },
      { id: 'C', text: "data.ubuntu.aws_ami.id" },
      { id: 'D', text: "aws_ami.ubuntu.id" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data sources are addressed with a leading data prefix followed by type, name, and attribute. Omitting the prefix refers to a managed resource of that type, and the other forms scramble the address components.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "References", "HCL"]
  },
  {
    id: "hashicorp-tfp-183",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Consequences of Renaming a Module Call",
    scenario: "A module block is renamed from module \"net\" to module \"network\" with no other change.",
    question: "What does Terraform plan?",
    options: [
      { id: 'A', text: "Destruction of everything under the old address and creation under the new one, unless a moved block maps module.net to module.network." },
      { id: 'B', text: "Nothing, because the module content is unchanged." },
      { id: 'C', text: "An error refusing to plan." },
      { id: 'D', text: "An in-place update of the module addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "State is keyed by address, so renaming the module call renames every resource address beneath it and Terraform sees the old ones as removed; a moved block declares the mapping and avoids the churn. Terraform does not infer renames on its own.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/moved",
    tags: ["moved", "Modules", "Refactoring"]
  },
  {
    id: "hashicorp-tfp-184",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Providing Escape Hatches in a Module",
    scenario: "A curated internal module keeps getting feature requests for provider arguments it does not expose, and forking is becoming common.",
    question: "Which design response is reasonable?",
    options: [
      { id: 'A', text: "Expose every provider argument as an input to prevent all future requests." },
      { id: 'B', text: "Encourage teams to fork and maintain their own copies." },
      { id: 'C', text: "Add a small number of well-typed pass-through inputs for the genuinely needed arguments, and expose resource ids as outputs so callers can attach their own resources." },
      { id: 'D', text: "Refuse all requests to keep the interface small." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A curated module stays useful by adding the specific inputs people actually need and by publishing ids so callers can extend around it, which relieves pressure without abandoning the abstraction. Exposing everything turns the module into a verbose alias of the resource, and blanket refusal drives the forking the team is trying to stop.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Design", "Platform Engineering"]
  },
  {
    id: "hashicorp-tfp-185",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Ordering fmt, validate, plan, and Policy Checks",
    scenario: "A pipeline is being designed to give the cheapest feedback first.",
    question: "Which ordering is sensible?",
    options: [
      { id: 'A', text: "apply, then validate, then policy checks." },
      { id: 'B', text: "plan, then fmt, then validate, then apply." },
      { id: 'C', text: "policy checks, then fmt, then plan, then validate." },
      { id: 'D', text: "fmt -check, then validate, then plan, then policy and security checks against the plan, then a gated apply." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cheap offline checks come first so obvious problems fail in seconds, the plan then produces the artifact that policy and security tools inspect, and apply is gated last. Any ordering that plans or applies before the free checks wastes time and credentials, and policy checks need a plan to evaluate.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/run",
    tags: ["CI/CD", "Pipeline Design", "Quality"]
  },
  {
    id: "hashicorp-tfp-186",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "When count Is Still the Right Choice",
    scenario: "A team has adopted for_each everywhere and asks whether count has any remaining legitimate use.",
    question: "Which use remains idiomatic?",
    options: [
      { id: 'A', text: "Nothing - count is deprecated." },
      { id: 'B', text: "Any collection of resources, since count and for_each are equivalent." },
      { id: 'C', text: "Conditional creation of a single resource with the zero-or-one pattern, and cases where identical instances genuinely have no meaningful identity." },
      { id: 'D', text: "Only inside modules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "count remains the natural expression of an optional resource and of truly interchangeable instances; for_each is preferred whenever instances have identities that must survive additions and removals. count is not deprecated, and neither meta-argument is restricted to modules.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count",
    tags: ["count", "for_each", "Design"]
  },
  {
    id: "hashicorp-tfp-187",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Finding Which Module Declared a Resource",
    scenario: "A plan mentions module.platform.module.network.aws_subnet.this[\"a\"] and an engineer needs to locate the code.",
    question: "What does the address tell them?",
    options: [
      { id: 'A', text: "The resource lives in the root module with a compound name." },
      { id: 'B', text: "Two separate resources named platform and network." },
      { id: 'C', text: "The resource is declared in a module called network, which is itself called by a module called platform from the root, and the instance key is \"a\"." },
      { id: 'D', text: "The subnet depends on the platform module." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resource addresses read as a path of module calls from the root down to the resource type, name, and instance key, which is how a nested address is traced back to its source directory. It expresses containment rather than dependency.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/state/resource-addressing",
    tags: ["Addressing", "Modules", "Debugging"]
  },
  {
    id: "hashicorp-tfp-188",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Zero-Downtime Migration of a Managed Resource to a Module",
    scenario: "Three resources in the root module must move inside a new child module without being recreated.",
    question: "Which change accomplishes it?",
    options: [
      { id: 'A', text: "Rename the resources so the addresses coincide." },
      { id: 'B', text: "Move the blocks and let Terraform match them by type and name." },
      { id: 'C', text: "Create the module, move the resource blocks into it, and add moved blocks mapping each old root address to its new module address." },
      { id: 'D', text: "Use terraform import inside the module after deleting the root resources." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Relocating a resource into a module changes its address, and moved blocks are the declarative way to tell Terraform that the old and new addresses are the same object. Terraform does not match by type and name across addresses, deleting first would destroy the resources, and renaming cannot make a root address equal a module address.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/moved",
    tags: ["moved", "Modules", "Refactoring"]
  },
  {
    id: "hashicorp-tfp-189",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Deciding What Belongs in a Project",
    scenario: "An organisation with two hundred workspaces wants a grouping layer for permissions and shared variables.",
    question: "Which grouping is most useful?",
    options: [
      { id: 'A', text: "Group alphabetically for findability." },
      { id: 'B', text: "Group workspaces by the team or application that owns them, so project-level permissions and variable sets match real ownership." },
      { id: 'C', text: "Group by cloud provider only." },
      { id: 'D', text: "Group by Terraform version." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Projects exist to align access control and shared configuration with ownership boundaries, which is what makes permissions and variable sets meaningful. Provider, version, and alphabetical groupings do not correspond to who should be allowed to change what.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/projects/manage",
    tags: ["HCP Terraform", "Projects", "Organisation"]
  },
  {
    id: "hashicorp-tfp-190",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "What Belongs in the examples Directory",
    scenario: "A module repository has an examples directory that has not been touched in a year and no longer works.",
    question: "Which practice keeps it valuable?",
    options: [
      { id: 'A', text: "Delete the directory, since the README is enough." },
      { id: 'B', text: "Treat each example as a real root configuration exercised by automated tests or at least a plan in CI, so breakage is caught immediately." },
      { id: 'C', text: "Point the examples at the published registry version rather than the local module." },
      { id: 'D', text: "Keep the examples as documentation snippets that are never executed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Examples are only trustworthy if they are executed, which is why the standard structure treats them as real configurations and CI plans or tests them against the local module source. Unexecuted snippets rot, deleting them removes the best onboarding material, and pointing at the published version stops the example validating the change under review.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Testing", "Documentation"]
  },
  {
    id: "hashicorp-tfp-191",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Precondition Versus Postcondition Placement",
    scenario: "A configuration must assert that a chosen instance type is in an approved list before creation, and separately that the created instance ended up in the expected availability zone.",
    question: "Where do those two checks belong?",
    options: [
      { id: 'A', text: "The approved-list assertion in a precondition, and the resulting-zone assertion in a postcondition." },
      { id: 'B', text: "Both in postconditions." },
      { id: 'C', text: "Both in preconditions." },
      { id: 'D', text: "Both in variable validation blocks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Preconditions guard assumptions before an object is created or read, while postconditions assert guarantees about the resulting object, so an input-shape check and an outcome check belong in different places. Variable validation could cover the list check for a raw input but cannot see the created resource attributes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/custom-conditions",
    tags: ["Custom Conditions", "Validation", "HCL"]
  },
  {
    id: "hashicorp-tfp-192",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "What Belongs in .gitignore",
    scenario: "A new Terraform repository is being set up.",
    question: "Which files should be ignored, and which committed?",
    options: [
      { id: 'A', text: "Commit state so the team can share it." },
      { id: 'B', text: "Ignore all .tf files in modules directories." },
      { id: 'C', text: "Ignore .terraform.lock.hcl so each machine resolves fresh providers." },
      { id: 'D', text: "Ignore .terraform/, *.tfstate, *.tfstate.backup, crash logs, and any tfvars containing secrets; commit .terraform.lock.hcl and the configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Local caches, state, and secret-bearing variable files must stay out of version control, while the lock file is committed precisely so every environment resolves identical providers. Committing state exposes secrets and invites conflicts, and ignoring the lock file destroys reproducibility.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Version Control", "Hygiene", "Security"]
  },
  {
    id: "hashicorp-tfp-193",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "A Data Source Returns Multiple Matches",
    scenario: "A singular data source fails with an error saying the query returned more than one result.",
    question: "Which fix is appropriate?",
    options: [
      { id: 'A', text: "Wrap the data source in try()." },
      { id: 'B', text: "Re-run with -refresh=false." },
      { id: 'C', text: "Tighten the filters so exactly one object matches, or switch to the plural data source and select deterministically from the results." },
      { id: 'D', text: "Add count = 1 to the data source." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A singular data source is contractually required to match one object, so either the query must be made precise or the plural form used with an explicit selection rule. Adding count does not change how many objects the query matches, try would swallow a genuine ambiguity, and skipping refresh does not affect data source reads in the plan.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Troubleshooting", "Determinism"]
  },
  {
    id: "hashicorp-tfp-194",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Serial Numbers and Concurrent Writes",
    scenario: "A remote backend rejects a state write, reporting a serial mismatch.",
    question: "What does that indicate?",
    options: [
      { id: 'A', text: "The state file is corrupt." },
      { id: 'B', text: "The stored state advanced since this operation read it, meaning another run wrote in between; re-run so the operation is based on current state." },
      { id: 'C', text: "The Terraform version is too new." },
      { id: 'D', text: "The lineage identifier changed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The serial increments on every write and acts as an optimistic concurrency check, so a mismatch means the state moved on and the safe response is to re-plan against the current state. Corruption, version skew, and lineage mismatches all produce different, distinctly worded errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["State", "Concurrency", "Backends"]
  },
  {
    id: "hashicorp-tfp-195",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Standardising Tagging Across an Organisation",
    scenario: "Every resource must carry owner and cost-centre tags, and teams keep forgetting.",
    question: "Which combination is most effective?",
    options: [
      { id: 'A', text: "A policy alone, with no help for teams to comply." },
      { id: 'B', text: "A wiki page describing the standard." },
      { id: 'C', text: "Provider default_tags or a shared tagging module for the happy path, plus a mandatory policy that fails runs whose plan contains untagged resources." },
      { id: 'D', text: "A post-apply script that adds missing tags outside Terraform." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Combining a paved path that makes compliance automatic with a gate that catches the exceptions is what makes a standard stick. Enforcement without help creates friction, documentation enforces nothing, and tagging outside Terraform creates perpetual drift.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
    tags: ["Governance", "Tagging", "Policy"]
  },
  {
    id: "hashicorp-tfp-196",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "The Difference Between a Resource and a Data Source",
    scenario: "A newcomer asks why some blocks start with resource and others with data.",
    question: "Which distinction is correct?",
    options: [
      { id: 'A', text: "A data source is a resource that is created but never destroyed." },
      { id: 'B', text: "Data sources are read from state, resources from the provider." },
      { id: 'C', text: "Resources are for cloud objects and data sources for local files only." },
      { id: 'D', text: "A resource is an object Terraform creates, updates, and destroys; a data source only reads information about something Terraform does not manage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Managed resources have a full lifecycle in state, while data sources perform read-only lookups that are refreshed each plan and never created or destroyed. Both types are served by providers, and data sources cover far more than local files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Fundamentals", "Data Sources", "Resources"]
  },
  {
    id: "hashicorp-tfp-197",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Keeping Module Outputs Stable",
    scenario: "A module output is renamed in what is published as a minor release, and several consumers break.",
    question: "Which principle was violated?",
    options: [
      { id: 'A', text: "Consumers should not pin versions." },
      { id: 'B', text: "Outputs are internal, so consumers should not have depended on them." },
      { id: 'C', text: "Only variables form the interface; outputs may change freely." },
      { id: 'D', text: "Outputs are part of the public interface, so renaming or removing one is a breaking change that belongs in a major version." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A module contract runs in both directions - the inputs it accepts and the outputs it promises - so removing or renaming an output breaks callers exactly as removing an input would. The remedy is to add the new output, keep the old one for a deprecation period, and remove it in a major release.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs",
    tags: ["Modules", "Versioning", "Interface"]
  },
  {
    id: "hashicorp-tfp-198",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Choosing What to Run on a Schedule",
    scenario: "A platform team wants nightly automation that improves safety without surprising anyone in the morning.",
    question: "Which scheduled job is the safest high-value choice?",
    options: [
      { id: 'A', text: "A plan-only drift detection run that reports differences, leaving remediation to a human decision." },
      { id: 'B', text: "A nightly destroy and rebuild of production." },
      { id: 'C', text: "A nightly state push from a backup." },
      { id: 'D', text: "A nightly apply that reconciles all drift automatically." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scheduled plans surface divergence with no risk of unattended change, which is why drift detection is the standard nightly job. Unattended applies can undo deliberate emergency fixes, rebuilding production is catastrophic, and pushing state from a backup overwrites current reality.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Drift", "Automation", "Safety"]
  },
  {
    id: "hashicorp-tfp-199",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Diagnosing a Failure That Only Happens in CI",
    scenario: "A configuration plans cleanly on a laptop and fails in CI with a different provider version in the error message.",
    question: "Which cause is most likely?",
    options: [
      { id: 'A', text: "The dependency lock file is not committed or is being ignored, so CI resolved a different provider version." },
      { id: 'B', text: "Provider versions are irrelevant to plan output." },
      { id: 'C', text: "The backend differs between the two environments by design." },
      { id: 'D', text: "CI machines cannot run Terraform reliably." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Different provider versions between environments is exactly what the lock file exists to prevent, so an uncommitted or bypassed lock file is the first thing to check when behaviour diverges. Provider versions materially change schemas, defaults, and plan output.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Lock File", "CI/CD", "Reproducibility"]
  },
  {
    id: "hashicorp-tfp-200",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Handling Secrets That End Up in State",
    scenario: "A resource generates a password that Terraform necessarily stores in state, and compliance asks how the exposure is limited.",
    question: "Which answer is accurate?",
    options: [
      { id: 'A', text: "Marking the resource attribute sensitive removes it from state." },
      { id: 'B', text: "Using a write-only provider argument means nothing is stored anywhere." },
      { id: 'C', text: "The value cannot be kept out of state, so exposure is limited by encrypting state at rest, restricting who can read it, and rotating the secret through the system that owns it." },
      { id: 'D', text: "State stores only a hash of secret values." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform must record attribute values to detect drift, so a secret the provider generates is managed through encryption, access control, and rotation rather than removed. Sensitivity marking affects display only, and state stores real values rather than hashes. Write-only arguments do keep a value out of state, but they are input arguments a caller supplies - they cannot carry a value the provider itself generates.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["Secrets", "State", "Compliance"]
  }
];

export default HASHICORP_TFP_QUESTIONS_8;
