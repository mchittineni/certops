export const HASHICORP_TFP_QUESTIONS_9 = [
  {
    id: "hashicorp-tfp-201",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Choosing Between a Conditional and a Lookup Map",
    scenario: "Instance size must be selected from environment: dev gets small, staging medium, prod large, and more environments are expected.",
    question: "Which construct scales better?",
    options: [
      { id: 'A', text: "A separate resource block per environment guarded by count." },
      { id: 'B', text: "Nested conditional expressions, one per environment." },
      { id: 'C', text: "A map local keyed by environment with a lookup and a sensible default." },
      { id: 'D', text: "A workspace-specific tfvars file per environment containing the literal size." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A lookup table keeps the mapping in one readable place and grows by one line per environment, which is why it is the standard idiom. Nested conditionals become unreadable quickly, per-environment resource blocks duplicate the definition, and while per-environment variable files are legitimate they scatter one decision across many files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/lookup",
    tags: ["locals", "Maps", "HCL"]
  },
  {
    id: "hashicorp-tfp-202",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Apply Succeeded but the Application Is Broken",
    scenario: "Terraform reports a successful apply, yet the deployed service returns errors because a security group rule is missing that a colleague deleted manually last week.",
    question: "Why did Terraform not restore it?",
    options: [
      { id: 'A', text: "The provider cached the previous result." },
      { id: 'B', text: "Apply always skips security groups." },
      { id: 'C', text: "The rule is managed as an inline block or is not in the configuration at all, or the run did not refresh - Terraform only reconciles what its configuration and state describe." },
      { id: 'D', text: "Terraform never repairs deleted resources." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform converges only the objects it manages, so a rule created outside the configuration, owned by a different configuration, or missed because refresh was disabled will not be restored. Terraform does normally recreate managed objects that were deleted, and providers do not cache resource existence between runs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Drift", "Ownership", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-203",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Selecting a Subdirectory of a Git Repository",
    scenario: "A git repository holds many modules under a modules directory, and only one is needed.",
    question: "Which source syntax selects it?",
    options: [
      { id: 'A', text: "A double slash before the subdirectory, as in git::https://example.com/repo.git//modules/vpc?ref=v1.0.0" },
      { id: 'B', text: "A subdir argument alongside source." },
      { id: 'C', text: "A single slash before the subdirectory." },
      { id: 'D', text: "A path argument in the module block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The double slash separates the repository from the subdirectory within it, and ref selects a tag, branch, or commit. A single slash is read as part of the repository path, and there are no subdir or path arguments on a module block.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources",
    tags: ["Modules", "Sources", "Git"]
  },
  {
    id: "hashicorp-tfp-204",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Verifying a Restore Was Correct",
    scenario: "After restoring a state version following an incident, the team must confirm the restore is right before resuming normal operations.",
    question: "Which check gives that confidence?",
    options: [
      { id: 'A', text: "Checking that terraform state list returns any output." },
      { id: 'B', text: "Confirming the state serial increased." },
      { id: 'C', text: "Comparing state file sizes." },
      { id: 'D', text: "A full terraform plan showing no changes, which proves state, configuration, and reality agree." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An empty plan is the strongest available evidence that the restored state matches both the configuration and the live infrastructure. File size, a non-empty listing, and a higher serial say nothing about whether the contents are correct.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["State", "Recovery", "Verification"]
  },
  {
    id: "hashicorp-tfp-205",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Coordinating a Change Across Several Configurations",
    scenario: "A network change must land before an application change in a different state, and both are managed by different pipelines.",
    question: "Which approach makes the ordering reliable?",
    options: [
      { id: 'A', text: "Apply the application change twice." },
      { id: 'B', text: "Schedule the two pipelines a few minutes apart." },
      { id: 'C', text: "Make the dependency explicit - run triggers or a pipeline dependency - and have the consumer read the producer outputs so it fails clearly if the change has not landed." },
      { id: 'D', text: "Merge both configurations into one state permanently." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cross-state ordering must be expressed as an explicit dependency plus a data dependency that fails loudly when unmet, rather than left to timing. Time-based coordination is a race, merging states surrenders the isolation that motivated the split, and retrying hides the ordering problem.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-triggers",
    tags: ["Orchestration", "CI/CD", "Composition"]
  },
  {
    id: "hashicorp-tfp-206",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Managing HCP Terraform Itself as Code",
    scenario: "Workspaces, variable sets, and team permissions are currently clicked together in the UI and drift from the documented standard.",
    question: "Which approach addresses that?",
    options: [
      { id: 'A', text: "Export the settings to a spreadsheet weekly." },
      { id: 'B', text: "Write a runbook describing the manual steps precisely." },
      { id: 'C', text: "Restrict UI access to one administrator." },
      { id: 'D', text: "Manage the organisation with the tfe provider from a dedicated administration configuration, so workspaces and permissions are themselves reviewed code." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The tfe provider lets the platform itself be declared, reviewed, and versioned, which is the standard answer to configuration drift in the control plane. Runbooks and spreadsheets document rather than enforce, and funnelling changes through one person creates a bottleneck without an audit trail of intent.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/api-docs",
    tags: ["tfe provider", "Platform", "HCP Terraform"]
  },
  {
    id: "hashicorp-tfp-207",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Heredoc Strings in HCL",
    scenario: "A multi-line policy document must be embedded in a configuration with consistent indentation.",
    question: "Which syntax is appropriate?",
    options: [
      { id: 'A', text: "A single-quoted multi-line string." },
      { id: 'B', text: "Concatenating lines with the plus operator." },
      { id: 'C', text: "An indented heredoc introduced with <<-EOT and terminated by EOT, which strips the leading indentation." },
      { id: 'D', text: "Backtick-delimited template literals." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "HCL heredocs carry multi-line text, and the dash form removes the common leading whitespace so the document stays readable in context; jsonencode is often preferable for JSON policies. HCL has no single-quoted or backtick string forms, and string concatenation is not done with plus.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/strings",
    tags: ["HCL", "Strings", "Syntax"]
  },
  {
    id: "hashicorp-tfp-208",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Embedding JSON Documents Safely",
    scenario: "An IAM policy document is currently a heredoc containing hand-written JSON, and a missing comma broke a deployment.",
    question: "Which alternative is more robust?",
    options: [
      { id: 'A', text: "Keep the heredoc but validate it with a shell script before apply." },
      { id: 'B', text: "Store the JSON in a file and read it with the file function." },
      { id: 'C', text: "Base64-encode the JSON to avoid syntax issues." },
      { id: 'D', text: "Build the document as an HCL object and pass it through jsonencode, or use the provider dedicated policy document data source." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Constructing the structure in HCL and encoding it means the language checks the syntax and interpolation is type-safe, and policy document data sources add provider-side validation. External scripts add a separate toolchain, a file still contains hand-written JSON, and encoding hides errors rather than preventing them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/jsonencode",
    tags: ["jsonencode", "Policies", "HCL"]
  },
  {
    id: "hashicorp-tfp-209",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Deciding Whether to Import or Recreate",
    scenario: "A handful of manually created development resources could be imported or simply destroyed and recreated by Terraform.",
    question: "Which consideration should decide it?",
    options: [
      { id: 'A', text: "Import is always preferable because it is faster." },
      { id: 'B', text: "Recreation is always preferable because imported resources cannot be managed normally." },
      { id: 'C', text: "Whether the objects hold state or identity that cannot be recreated cheaply - data, DNS names, certificates, allow-list entries - in which case import; otherwise recreation is simpler and yields cleaner configuration." },
      { id: 'D', text: "The decision depends only on the provider." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Import earns its extra effort when destroying the object would lose something irreplaceable or externally referenced; where nothing is lost, letting Terraform create the object gives configuration that certainly matches reality. Imported resources are managed exactly like any other once their configuration matches.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/import",
    tags: ["Import", "Brownfield", "Decisions"]
  },
  {
    id: "hashicorp-tfp-210",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Error: Invalid Count Argument",
    scenario: "A plan fails with \"Invalid count argument: the count value depends on resource attributes that cannot be determined until apply\".",
    question: "Which remedy is correct?",
    options: [
      { id: 'A', text: "Derive the count from values known at plan time, such as variables or the length of an input list, rather than from an attribute produced by another resource." },
      { id: 'B', text: "Add depends_on so the other resource is created first." },
      { id: 'C', text: "Increase parallelism so the value resolves sooner." },
      { id: 'D', text: "Wrap the count expression in tonumber." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform must know instance counts while building the graph, so the count expression cannot depend on anything computed during apply; the fix is to source it from known input data or split the work into stages. Type conversion cannot make an unknown value known, and ordering does not change when the value becomes available within a single plan.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count",
    tags: ["count", "Unknown Values", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-211",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Checking Which Providers a Configuration Requires",
    scenario: "An engineer inheriting a configuration wants to see every provider it needs, including those pulled in by modules.",
    question: "Which command reports that?",
    options: [
      { id: 'A', text: "terraform providers" },
      { id: 'B', text: "terraform state list" },
      { id: 'C', text: "terraform version" },
      { id: 'D', text: "terraform output" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "terraform providers prints the provider requirements of the configuration as a tree including those declared by child modules. version reports the CLI and installed provider versions without the module tree, state list shows managed resources, and output reads output values.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/providers",
    tags: ["CLI", "Providers", "Discovery"]
  },
  {
    id: "hashicorp-tfp-212",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Avoiding an Unstable for_each Key",
    scenario: "A for_each is keyed by an availability zone id fetched from a data source, and occasionally the plan proposes to destroy and recreate every instance.",
    question: "What is happening and how is it fixed?",
    options: [
      { id: 'A', text: "The provider is caching the data source incorrectly; disable refresh." },
      { id: 'B', text: "for_each cannot be used with data sources at all." },
      { id: 'C', text: "The state file has lost its lineage." },
      { id: 'D', text: "The data source returns zones in a different order or with different values, changing the keys; key on stable business identifiers and sort or filter the data deterministically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instance identity is the for_each key, so any instability in the values that produce those keys shows up as mass replacement; deriving keys from stable names and sorting the source data removes the churn. for_each works fine with data sources when the results are deterministic, and disabling refresh only hides the change.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["for_each", "Determinism", "HCL"]
  },
  {
    id: "hashicorp-tfp-213",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Restricting Who Can Read State",
    scenario: "State for a payments workspace contains sensitive values and only two people should be able to download it.",
    question: "Which control applies?",
    options: [
      { id: 'A', text: "Enabling remote state sharing, which restricts access." },
      { id: 'B', text: "Workspace team permissions, where the state download capability is granted by admin or explicitly configured custom permissions rather than by plan or write access alone." },
      { id: 'C', text: "Marking every output sensitive, which blocks downloads." },
      { id: 'D', text: "Setting the workspace to local execution." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Access to raw state versions is a distinct capability in the permissions model, so it is granted deliberately rather than implied by the ability to plan. Sensitivity marking affects display, remote state sharing widens rather than narrows access, and execution mode is unrelated.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["HCP Terraform", "Permissions", "Security"]
  },
  {
    id: "hashicorp-tfp-214",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Reviewing a Module Pull Request",
    scenario: "A pull request adds a new input to a shared module and changes a default.",
    question: "Which review points matter most?",
    options: [
      { id: 'A', text: "Only whether the resource names are consistent." },
      { id: 'B', text: "Only whether terraform fmt passes." },
      { id: 'C', text: "Whether the module pins exact provider versions." },
      { id: 'D', text: "Whether the new input is typed, described, and defaulted compatibly, and whether the changed default alters existing consumers plans - which would make it a breaking change." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The interface and the behavioural impact on existing callers are what a module review is for, since a changed default silently alters everyone next plan. Formatting and naming matter but are secondary, and exact provider pins inside a shared module are usually undesirable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Review", "Compatibility"]
  },
  {
    id: "hashicorp-tfp-215",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Terraform and Externally Mutable Resources",
    scenario: "An autoscaling group desired capacity is changed constantly by an autoscaler, and Terraform keeps trying to reset it.",
    question: "Which handling is correct?",
    options: [
      { id: 'A', text: "Run Terraform more frequently so it wins." },
      { id: 'B', text: "Add ignore_changes for the capacity attribute so the external system owns it, while Terraform continues to own the rest of the resource." },
      { id: 'C', text: "Remove the resource from Terraform management entirely." },
      { id: 'D', text: "Disable the autoscaler." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attribute-level ownership is exactly what ignore_changes expresses, letting a runtime system manage one field while Terraform manages the definition. Abandoning management loses everything else, disabling the autoscaler solves the conflict by removing a needed capability, and racing two controllers guarantees churn.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["lifecycle", "Drift", "Ownership"]
  },
  {
    id: "hashicorp-tfp-216",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Reading the Symbols in a Plan",
    scenario: "A plan shows lines beginning with plus, minus, tilde, and a minus followed by a plus.",
    question: "What do those indicate?",
    options: [
      { id: 'A', text: "Create, destroy, update in place, and destroy then create (replacement) respectively." },
      { id: 'B', text: "Managed, unmanaged, imported, and tainted." },
      { id: 'C', text: "Warning, error, info, and debug." },
      { id: 'D', text: "Added, removed, renamed, and moved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The plan legend maps those symbols to create, destroy, in-place update, and replacement, with a plus-minus form indicating create before destroy. Reading them correctly is the quickest way to spot an unintended replacement before approving.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Plan", "Fundamentals", "Review"]
  },
  {
    id: "hashicorp-tfp-217",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Making Plan Output Reviewable in a Pull Request",
    scenario: "Plans posted to pull requests are thousands of lines long and reviewers stop reading them.",
    question: "Which improvements genuinely help? (Choose two.)",
    options: [
      { id: 'A', text: "Run plan with -no-color so the output is shorter." },
      { id: 'B', text: "Post only the exit code." },
      { id: 'C', text: "Summarise the change counts and highlight destroy and replace actions from the JSON plan, collapsing the full output behind a details block." },
      { id: 'D', text: "Reduce the size of each configuration so a typical change touches fewer resources." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "Reviewability improves by surfacing the dangerous actions from the structured plan and by keeping the blast radius of a single configuration small enough that plans stay human-sized. Colour settings do not reduce length, and an exit code alone removes the review entirely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/json-format",
    tags: ["Review", "CI/CD", "JSON"]
  },
  {
    id: "hashicorp-tfp-218",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Blocking a Provider Version Across the Organisation",
    scenario: "A provider release has a known data-loss bug and no workspace may use it until a fix ships.",
    question: "Which combination is most effective?",
    options: [
      { id: 'A', text: "Setting the lock file to read-only." },
      { id: 'B', text: "Deleting the provider from the plugin cache on the agents." },
      { id: 'C', text: "An email asking teams not to upgrade." },
      { id: 'D', text: "A policy that fails runs using the affected version, plus updating the shared module and root constraints to exclude it, for example with a != or upper-bound constraint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforcement plus a corrected constraint gives both an automatic block and a corrected default path, which is how a bad dependency version is contained. Communication alone is unreliable, clearing a cache only delays re-download, and file permissions on a lock file do not prevent a deliberate upgrade.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Policy", "Providers", "Supply Chain"]
  },
  {
    id: "hashicorp-tfp-219",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Where to Put Provider Version Constraints",
    scenario: "A root configuration and two child modules all declare required_providers for the same provider with different constraints.",
    question: "How does Terraform resolve it?",
    options: [
      { id: 'A', text: "The root module constraint always wins." },
      { id: 'B', text: "The newest constraint encountered wins." },
      { id: 'C', text: "Each module gets its own provider version." },
      { id: 'D', text: "It selects a single version satisfying the intersection of every constraint in the configuration, and fails if no such version exists." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "One provider version is used for the whole configuration, chosen to satisfy every declared constraint, which is why overly tight pins inside shared modules cause unresolvable conflicts. Modules do not get separate provider instances by version, and no single declaration overrides the others.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements",
    tags: ["Providers", "Versioning", "Modules"]
  },
  {
    id: "hashicorp-tfp-220",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Purpose of versions.tf",
    scenario: "A module repository contains a file named versions.tf.",
    question: "What does it conventionally hold?",
    options: [
      { id: 'A', text: "A changelog of module releases." },
      { id: 'B', text: "The terraform block with required_version and required_providers." },
      { id: 'C', text: "The module semantic version number." },
      { id: 'D', text: "Provider credentials." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "By convention versions.tf isolates the terraform settings block declaring the CLI and provider requirements, keeping them easy to find and review. Module versions come from git tags, changelogs live in markdown, and credentials never belong in configuration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/structure",
    tags: ["Modules", "Structure", "Conventions"]
  },
  {
    id: "hashicorp-tfp-221",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "What Happens on the Very First Apply",
    scenario: "A brand new configuration is applied against an empty backend.",
    question: "Which sequence describes it?",
    options: [
      { id: 'A', text: "Terraform scans the cloud account and adopts matching resources automatically." },
      { id: 'B', text: "Terraform creates a new state with a fresh lineage, plans every resource as a create, applies them, and writes each created object into state as it goes." },
      { id: 'C', text: "Terraform requires an explicit terraform state init command first." },
      { id: 'D', text: "Terraform writes state only after every resource succeeds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A first apply starts from empty state, so everything is a create, and state is written progressively rather than only at the end - which is why a failure part-way leaves the successful resources recorded. Terraform never adopts existing objects without an explicit import, and there is no separate state init command.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["State", "Apply", "Fundamentals"]
  },
  {
    id: "hashicorp-tfp-222",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "A Module Works Locally but Not From the Registry",
    scenario: "A module applies correctly from a local path but fails when consumed from the private registry at the same version tag.",
    question: "Which cause should be checked first?",
    options: [
      { id: 'A', text: "Registry modules ignore variable defaults." },
      { id: 'B', text: "Registry modules cannot use for_each." },
      { id: 'C', text: "Local modules use a different provider version." },
      { id: 'D', text: "The published tag does not contain the same code - the change was never committed, tagged, or the tag points at an older commit - so compare the published contents with the local working tree." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A local path reads the working tree while a registry source reads a published immutable tag, so the first hypothesis is that the two differ. Registry modules have identical language semantics, and provider resolution is driven by the whole configuration rather than the module source type.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/sources",
    tags: ["Modules", "Registry", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-223",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Keeping a Plan Artifact Secure",
    scenario: "A pipeline stores plan files as build artifacts so they can be applied after approval.",
    question: "Which precaution matters?",
    options: [
      { id: 'A', text: "Convert the plan to JSON, which redacts secrets." },
      { id: 'B', text: "Nothing, because plan files contain only action verbs." },
      { id: 'C', text: "Nothing, because plan files are encrypted by Terraform." },
      { id: 'D', text: "Treat the plan file as sensitive, because it can contain resource attribute values including secrets, and restrict who can download build artifacts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A saved plan embeds the values Terraform intends to write, so it must be protected like state; Terraform does not encrypt it and the JSON rendering marks sensitivity without removing every value. Restricting artifact access and lifetime is the practical control.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Plan File", "Security", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-224",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Expressing Optional Nested Configuration",
    scenario: "A resource has an optional logging block that should only appear when a variable supplies logging settings.",
    question: "Which construct emits the block conditionally?",
    options: [
      { id: 'A', text: "A dynamic \"logging\" block whose for_each iterates over a list that is empty when logging is disabled." },
      { id: 'B', text: "count on the resource." },
      { id: 'C', text: "A conditional expression returning null for the whole block." },
      { id: 'D', text: "An if statement before the block." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A dynamic block over a collection that is empty or single-element is the standard way to include a nested block conditionally, since blocks are structural rather than values. HCL has no if statement, count would remove the whole resource, and a block cannot be replaced by a null expression.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks",
    tags: ["dynamic", "Conditionals", "HCL"]
  },
  {
    id: "hashicorp-tfp-225",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Sharing Modules Across Organisations",
    scenario: "Two business units with separate HCP Terraform organisations need the same internal modules.",
    question: "Which options are realistic?",
    options: [
      { id: 'A', text: "Publish the modules to a git repository both can read and consume them by git source with tags, or publish them in each organisation private registry from the same repository." },
      { id: 'B', text: "Private registries are automatically shared across all organisations in an account." },
      { id: 'C', text: "Copy the module files into each consuming repository." },
      { id: 'D', text: "Use a local path that crosses organisation boundaries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private registry is scoped to its organisation, so cross-organisation reuse means either consuming a shared git source directly or publishing the same repository into both registries. Copying files forks maintenance immediately, and local paths only work within one working directory tree.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/registry/publish-modules",
    tags: ["Registry", "Modules", "Organisation"]
  }
];

export default HASHICORP_TFP_QUESTIONS_9;
