export const HASHICORP_TFP_QUESTIONS_4 = [
  {
    id: "hashicorp-tfp-76",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Merging Default and Caller-Supplied Tags",
    scenario: "Every resource must carry a standard set of tags, and callers may add their own or override individual standard values.",
    question: "Which expression produces the combined map with caller values winning?",
    options: [
      { id: 'A', text: "merge(var.tags, local.default_tags)" },
      { id: 'B', text: "merge(local.default_tags, var.tags)" },
      { id: 'C', text: "concat(local.default_tags, var.tags)" },
      { id: 'D', text: "setunion(local.default_tags, var.tags)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "merge combines maps left to right with later arguments overriding earlier ones, so putting the caller map last lets it win. Reversing the order makes defaults override the caller, concat works on lists rather than maps, and setunion operates on sets.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/merge",
    tags: ["Functions", "Tags", "HCL"]
  },
  {
    id: "hashicorp-tfp-77",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Reducing Blast Radius by Splitting State",
    scenario: "A single state file holds networking, shared data stores, and a dozen applications. A mistake in one application plan risks the whole environment.",
    question: "Which restructuring addresses the risk?",
    options: [
      { id: 'A', text: "Split into separate states by lifecycle, wired together by outputs." },
      { id: 'B', text: "Keep one state file but always apply it with `-target` on the changed part." },
      { id: 'C', text: "Move every resource into one large module so the graph is easier to read." },
      { id: 'D', text: "Enable versioning on the state bucket so a bad apply can be rolled back." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Blast radius follows state boundaries, so separating by rate of change and ownership is the structural fix and cross-references keep the dependencies explicit. Habitual targeting leaves state inconsistent, versioning helps recovery after damage rather than preventing it, and a single giant module does not change the state boundary at all.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["State", "Architecture", "Blast Radius"]
  },
  {
    id: "hashicorp-tfp-78",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Where the Root Module Lives",
    scenario: "A newcomer asks which directory constitutes the root module in a Terraform project.",
    question: "Which answer is correct?",
    options: [
      { id: 'A', text: "The top level of the git repository." },
      { id: 'B', text: "The directory Terraform runs in: its `.tf` files are the root module." },
      { id: 'C', text: "Whichever directory contains the backend block, regardless of where Terraform runs." },
      { id: 'D', text: "The directory named root or modules/root." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The root module is defined by the working directory of the run, which is why the same repository can hold several roots. Naming conventions and repository layout are organisational choices, and although only a root module may declare a backend, it is the working directory that makes it the root.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Modules", "Fundamentals", "Structure"]
  },
  {
    id: "hashicorp-tfp-79",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Speeding Up Provider Downloads in CI",
    scenario: "Every CI job spends minutes downloading the same providers from the internet, and the network is metered.",
    question: "Which mechanism removes the repeated downloads?",
    options: [
      { id: 'A', text: "A provider plugin cache directory persisted between jobs, or a mirror." },
      { id: 'B', text: "Removing version constraints so any cached version is accepted." },
      { id: 'C', text: "Running terraform init -upgrade on every job." },
      { id: 'D', text: "Committing the .terraform directory to the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The plugin cache reuses already-downloaded provider binaries across working directories and jobs, and a filesystem or network mirror serves them internally. Committing .terraform is large and platform-specific, -upgrade forces re-resolution rather than avoiding it, and dropping constraints harms reproducibility without helping caching.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/config/config-file",
    tags: ["CI/CD", "Providers", "Performance"]
  },
  {
    id: "hashicorp-tfp-80",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Referencing an Instance Created With for_each",
    scenario: "A resource uses for_each over a map keyed by environment name, and another resource must reference the instance for \"prod\".",
    question: "Which reference is correct?",
    options: [
      { id: 'A', text: "each.value[\"prod\"].id" },
      { id: 'B', text: "aws_subnet.this[\"prod\"].id" },
      { id: 'C', text: "aws_subnet.this[0].id" },
      { id: 'D', text: "aws_subnet.this.prod.id" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "for_each produces a map of instances addressed by string key in square brackets. Numeric indices belong to count, attribute-style access is not valid for instance keys, and each is only in scope inside the resource that declares for_each.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/for_each",
    tags: ["for_each", "References", "HCL"]
  },
  {
    id: "hashicorp-tfp-81",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Sensitive Value Cannot Be Used Here",
    scenario: "A plan fails with an error stating that a sensitive value cannot be used as a for_each argument or a resource identifier.",
    question: "Why does Terraform refuse, and what is the reasonable response?",
    options: [
      { id: 'A', text: "A sensitive value is null at plan time, so the variable needs a default for planning." },
      { id: 'B', text: "The provider does not support sensitive inputs at this version, so upgrade it." },
      { id: 'C', text: "Wrap the value in `nonsensitive()`, which is the standard fix for this error." },
      { id: 'D', text: "Instance keys appear in plan output, so derive them from a non-sensitive source." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resource addresses are printed everywhere, so Terraform refuses to build them from values marked sensitive; the correct fix is to key on something that is not secret. Sensitive values are not null, provider support is irrelevant, and reaching for nonsensitive() deliberately strips a safety marking and should be rare and justified.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Sensitive", "for_each", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-82",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Sharing State Between HCP Terraform Workspaces",
    scenario: "An application workspace needs outputs published by a networking workspace in the same organisation, with access controlled centrally.",
    question: "Which approach is idiomatic?",
    options: [
      { id: 'A', text: "Copy the values into the workspace variables after each networking run." },
      { id: 'B', text: "Use the `tfe_outputs` data source and grant the consumer remote state access." },
      { id: 'C', text: "Give the application workspace write access to the networking state." },
      { id: 'D', text: "Download the state file and commit it into the application repository." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "HCP Terraform exposes another workspace outputs through a data source, gated by explicit remote state sharing settings, which keeps a single owner and an auditable permission. Committing state leaks secrets, manual copying drifts, and write access invites two configurations to fight over the same resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/state",
    tags: ["HCP Terraform", "Remote State", "Composition"]
  },
  {
    id: "hashicorp-tfp-83",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Reading Output Values Later",
    scenario: "A pipeline stage after apply needs the value of the output named endpoint, in a form a shell script can consume.",
    question: "Which command is appropriate?",
    options: [
      { id: 'A', text: "terraform show endpoint" },
      { id: 'B', text: "terraform output -raw endpoint" },
      { id: 'C', text: "terraform console -var endpoint" },
      { id: 'D', text: "terraform state show endpoint" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "terraform output prints declared outputs from state, with -raw emitting a bare string and -json giving structured data for parsing. show renders whole state or a plan, state show expects a resource address, and console is interactive.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output",
    tags: ["Outputs", "CLI", "Automation"]
  },
  {
    id: "hashicorp-tfp-84",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Nesting Depth in Module Design",
    scenario: "A configuration calls a module that calls a module that calls a module, and debugging a value now requires tracing four levels of variable pass-through.",
    question: "Which guidance applies?",
    options: [
      { id: 'A', text: "Deep nesting is what makes reuse possible, so it should be increased." },
      { id: 'B', text: "Terraform forbids more than two levels of module nesting outright." },
      { id: 'C', text: "Keep nesting shallow, since each layer hides where values come from." },
      { id: 'D', text: "Nesting depth is irrelevant, since the graph is flattened at plan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Terraform permits arbitrary nesting but every level multiplies boilerplate variables and outputs and makes provenance hard to follow, so shallow composition with a thin root is the recommended shape. The graph being flattened does not remove the human cost, and there is no hard depth limit.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/composition",
    tags: ["Modules", "Design", "Maintainability"]
  },
  {
    id: "hashicorp-tfp-85",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Develop and troubleshoot dynamic configuration",
    title: "Replacing a Resource When Another Changes",
    scenario: "An instance must be recreated whenever a particular launch configuration resource changes, even though the instance does not reference any attribute that forces replacement.",
    question: "Which lifecycle argument expresses that?",
    options: [
      { id: 'A', text: "ignore_changes = [aws_launch_configuration.this]" },
      { id: 'B', text: "create_before_destroy = true" },
      { id: 'C', text: "depends_on = [aws_launch_configuration.this]" },
      { id: 'D', text: "replace_triggered_by = [aws_launch_configuration.this]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "replace_triggered_by forces replacement of this resource when the referenced resource or attribute changes, which is the declarative version of a manual taint. depends_on only orders operations, ignore_changes suppresses diffs, and create_before_destroy changes replacement order rather than triggering it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle",
    tags: ["lifecycle", "Replacement", "HCL"]
  },
  {
    id: "hashicorp-tfp-86",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Drift Detection as a Scheduled Job",
    scenario: "An organisation wants to be alerted when infrastructure no longer matches its configuration, without automatically correcting it.",
    question: "Which approach implements that?",
    options: [
      { id: 'A', text: "Run `apply -auto-approve` nightly so any drift is corrected at once." },
      { id: 'B', text: "Run `terraform refresh` nightly and diff the two state files by hand." },
      { id: 'C', text: "Enable state versioning and compare the serial between the versions." },
      { id: 'D', text: "Run `plan -detailed-exitcode` on a schedule and alert on exit code 2." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A scheduled plan with a detailed exit code turns drift into a machine-checkable signal without changing anything, and HCP Terraform health assessments productise the same idea. Applying nightly corrects drift rather than reporting it, manual state diffing does not scale, and state serials count writes rather than divergence from reality.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/health",
    tags: ["Drift", "Automation", "Operations"]
  },
  {
    id: "hashicorp-tfp-87",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Reference to Undeclared Resource",
    scenario: "terraform validate reports \"Reference to undeclared resource: a managed resource aws_subnet.private has not been declared in the root module\".",
    question: "Which cause fits?",
    options: [
      { id: 'A', text: "It is declared in a child module, so the root must read a module output instead." },
      { id: 'B', text: "The provider has not been initialised in the root working directory." },
      { id: 'C', text: "The state file has not been refreshed since the resource was added." },
      { id: 'D', text: "The resource exists in the cloud account but not yet in the state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resource addresses are scoped to the module that declares them, so a root module can only reach a child module resource through an output. Provider initialisation, refresh state, and unmanaged cloud objects all produce different errors and do not affect name resolution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules",
    tags: ["Modules", "Scope", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-88",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Effect of terraform state rm",
    scenario: "An engineer runs terraform state rm aws_s3_bucket.logs.",
    question: "What happens?",
    options: [
      { id: 'A', text: "Terraform forgets it: the bucket remains but unmanaged, and would be recreated." },
      { id: 'B', text: "The bucket is marked for replacement, so the next apply destroys and recreates it." },
      { id: 'C', text: "The bucket is deleted from the cloud along with its entry in the state file." },
      { id: 'D', text: "The resource block is removed from the configuration files as well as state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "state rm only edits state, leaving the real object untouched and unmanaged - which is why the still-present configuration then plans a create that collides with the existing bucket. Deletion is terraform destroy, replacement is -replace, and Terraform never edits your configuration files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["State", "CLI", "Operations"]
  },
  {
    id: "hashicorp-tfp-89",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "Making a Module Work in Several Clouds Regions Safely",
    scenario: "A module is used in eight regions by eight root configurations. A change is needed that would break the two oldest consumers.",
    question: "Which release approach limits disruption?",
    options: [
      { id: 'A', text: "Fork the module into two copies and let consumers move between them at their own pace." },
      { id: 'B', text: "Add it behind an optional input with a compatible default, in a minor release." },
      { id: 'C', text: "Make the breaking change now as a major release and tell consumers to update their calls." },
      { id: 'D', text: "Drop the version constraints so every consumer tracks the module's default branch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An additive, defaulted input keeps existing callers working while new callers opt in, and the deprecation window gives the laggards time before a major version removes the old path. Immediate breakage, permanent forks, and unpinned consumption all shift cost onto consumers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop",
    tags: ["Modules", "Versioning", "Compatibility"]
  },
  {
    id: "hashicorp-tfp-90",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Configure and use Terraform providers",
    title: "Multiple Provider Configurations",
    scenario: "Resources must be created in two AWS regions from one configuration.",
    question: "How is that expressed?",
    options: [
      { id: 'A', text: "Two `required_providers` entries for the same provider source." },
      { id: 'B', text: "Two provider blocks, one default and one aliased, selected per resource." },
      { id: 'C', text: "A `for_each` on the provider block over the region list." },
      { id: 'D', text: "One provider block whose region argument takes a list." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provider aliases let one configuration hold several configurations of the same provider, and resources or modules pick one with the provider meta-argument. A provider region is a single value, required_providers declares source and version rather than instances, and provider blocks do not support for_each.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration",
    tags: ["Providers", "Aliases", "Multi-Region"]
  },
  {
    id: "hashicorp-tfp-91",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "Collaborate on infrastructure as code using HCP Terraform",
    title: "Soft Versus Hard Policy Enforcement",
    scenario: "A cost policy should warn on expensive plans in development but block them entirely in production.",
    question: "Which Sentinel enforcement levels express that?",
    options: [
      { id: 'A', text: "advisory or soft-mandatory in development, and hard-mandatory in production." },
      { id: 'B', text: "Enforcement levels apply per organisation only, so two policy sets are impossible." },
      { id: 'C', text: "hard-mandatory everywhere, with exceptions granted per run." },
      { id: 'D', text: "advisory everywhere, relying on reviewers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sentinel has three levels: advisory logs a warning, soft-mandatory can be overridden by an authorised user, and hard-mandatory cannot be overridden at all - so the two environments simply use different levels via separate policy sets. Policy sets are scoped to workspaces or projects rather than only the whole organisation.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/manage-policy-sets",
    tags: ["Sentinel", "Governance", "Policy"]
  },
  {
    id: "hashicorp-tfp-92",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Ordering of the Core Workflow",
    scenario: "A new team member asks for the canonical Terraform workflow for a change.",
    question: "Which sequence is correct?",
    options: [
      { id: 'A', text: "Init, then apply, then plan to verify." },
      { id: 'B', text: "Write, then init, then plan and review, then apply." },
      { id: 'C', text: "Plan, then init, then apply." },
      { id: 'D', text: "Apply, then validate, then plan." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The documented core workflow is write, init to install dependencies and configure the backend, plan to preview and review, then apply. Planning requires an initialised working directory, and applying before reviewing defeats the purpose of the plan.",
    referenceUrl: "https://developer.hashicorp.com/terraform/intro/core-workflow",
    tags: ["Workflow", "Fundamentals", "CLI"]
  },
  {
    id: "hashicorp-tfp-93",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Slow Plans on a Large Configuration",
    scenario: "A configuration with several thousand resources takes twenty minutes to plan, dominated by provider API calls during refresh.",
    question: "Which measures genuinely help? (Choose two.)",
    options: [
      { id: 'A', text: "Split into smaller state files by ownership." },
      { id: 'B', text: "Set -parallelism=1 to reduce provider load." },
      { id: 'C', text: "Remove the dependency lock file." },
      { id: 'D', text: "Remove data sources that re-read large collections." }
    ],
    correctAnswers: ['A', 'D'],
    type: "multiple",
    explanation: "Plan time scales with the number of managed objects and data source reads, so smaller states and fewer expensive lookups both cut it directly. Lowering parallelism makes refresh slower rather than faster, and the lock file has no bearing on plan duration.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Performance", "State", "Scaling"]
  },
  {
    id: "hashicorp-tfp-94",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Terraform Version Upgrades and State",
    scenario: "A team upgrades Terraform from an older minor version, applies once, and then a colleague on the old version cannot run plan.",
    question: "Why?",
    options: [
      { id: 'A', text: "The backend rejects connections from clients whose version does not match its own." },
      { id: 'B', text: "State records the version that wrote it, and an older binary refuses to operate on newer state." },
      { id: 'C', text: "The dependency lock file pins the CLI version as well as the provider versions." },
      { id: 'D', text: "The state format is unreadable to any version other than the one that wrote it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform stores the writing version in state and deliberately blocks older binaries from operating on newer state to prevent corruption, so version upgrades must be coordinated - often pinned with required_version. Backends are version-agnostic and the lock file records providers, not the CLI.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Versioning", "State", "Upgrades"]
  },
  {
    id: "hashicorp-tfp-95",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Constraining the Terraform Version",
    scenario: "A configuration uses language features introduced in a recent release and must fail clearly on older CLI versions.",
    question: "Which block declares that?",
    options: [
      { id: 'A', text: "A required_providers entry for terraform." },
      { id: 'B', text: "terraform { required_version = \">= 1.5.0\" }" },
      { id: 'C', text: "variable \"terraform_version\" { default = \"1.5.0\" }" },
      { id: 'D', text: "provider \"terraform\" { version = \">= 1.5.0\" }" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "required_version inside the terraform block constrains the CLI itself and produces an immediate, clear error on an unsupported version. required_providers constrains providers, there is no terraform provider to configure this way, and a variable enforces nothing.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings",
    tags: ["required_version", "Settings", "HCL"]
  },
  {
    id: "hashicorp-tfp-96",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Create, maintain, and use Terraform modules",
    title: "What Belongs in outputs.tf",
    scenario: "A module creates a VPC, subnets, and a route table, and its consumers need to attach further resources.",
    question: "Which outputs are most useful?",
    options: [
      { id: 'A', text: "The provider credentials the module used during the run." },
      { id: 'B', text: "Every attribute of every resource, so nothing can be missing." },
      { id: 'C', text: "The input variables, echoed back for the caller to confirm." },
      { id: 'D', text: "The identifiers consumers reference, such as `vpc_id`, typed and described." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Outputs are the module public interface, so they should expose exactly what callers need and no more - every extra output is a compatibility commitment. Echoing inputs adds noise, dumping everything makes the interface unstable, and credentials must never be output.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs",
    tags: ["Modules", "Outputs", "Design"]
  },
  {
    id: "hashicorp-tfp-97",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "Collaborate on infrastructure as code using HCP Terraform",
    title: "No-Code Provisioning",
    scenario: "An organisation wants application teams to create standard infrastructure from a catalogue without writing Terraform or having repository access.",
    question: "Which capability supports that?",
    options: [
      { id: 'A', text: "A variable set applied across the whole organisation's workspaces." },
      { id: 'B', text: "No-code modules in the private registry, instantiated into new workspaces." },
      { id: 'C', text: "A Sentinel policy that creates the resources when a run passes." },
      { id: 'D', text: "A run task that generates the configuration before each plan." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "No-code modules let platform teams publish a curated module that consumers instantiate through a form, with HCP Terraform generating the workspace and configuration. Run tasks integrate external checks, variable sets carry values, and policies evaluate plans rather than provisioning anything.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/no-code-provisioning",
    tags: ["No-Code", "Self-Service", "HCP Terraform"]
  },
  {
    id: "hashicorp-tfp-98",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Preventing Plan and Apply Divergence",
    scenario: "A pipeline plans on a pull request and applies after merge, several hours later. Occasionally the apply does something the reviewer did not see.",
    question: "Which change makes the applied change equal the reviewed one?",
    options: [
      { id: 'A', text: "Re-run the plan at apply time and compare the two text outputs by eye." },
      { id: 'B', text: "Use `-auto-approve` so no human has to compare anything at all." },
      { id: 'C', text: "Disable refresh during the apply so the state cannot have moved." },
      { id: 'D', text: "Save the plan and apply that file, so a state change fails the apply." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A saved plan is bound to the state serial it was produced from, so applying it either performs exactly the reviewed actions or fails - which is the guarantee the scenario needs. Manual comparison is unreliable, auto-approve removes review rather than divergence, and skipping refresh trades one correctness problem for another.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/apply",
    tags: ["CI/CD", "Plan File", "Governance"]
  },
  {
    id: "hashicorp-tfp-99",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Manage resource lifecycle",
    title: "Objects Deleted Outside Terraform",
    scenario: "An operator deleted a managed database by hand in the console. The next Terraform plan is run.",
    question: "What does Terraform do?",
    options: [
      { id: 'A', text: "Refresh sees it is gone and the plan proposes to create it again." },
      { id: 'B', text: "Terraform silently removes the resource from the configuration." },
      { id: 'C', text: "Terraform restores the deleted object from state." },
      { id: 'D', text: "Terraform errors out and refuses to plan until state is repaired." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Refresh notices the missing object, marks it as needing creation, and the plan converges reality back to the configuration - which is the whole point of a declarative tool. Terraform never edits your configuration and cannot resurrect data from state, which holds only metadata.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Drift", "Refresh", "Plan"]
  },
  {
    id: "hashicorp-tfp-100",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "Develop collaborative Terraform workflows",
    title: "Auditing Who Changed What",
    scenario: "A production resource changed unexpectedly and the team needs to know which run made the change and who approved it.",
    question: "Which source answers that most directly?",
    options: [
      { id: 'A', text: "The `terraform graph` output for the configuration at that revision." },
      { id: 'B', text: "The dependency lock file, which records the versions and their checksums." },
      { id: 'C', text: "The current state file, which records the author of each attribute." },
      { id: 'D', text: "The run history — plan, applier and resulting state version — in the platform or CI." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attribution lives in run history and state versioning - who queued the run, what the plan contained, and which state version resulted - which is a strong argument for a remote workflow over laptop applies. State itself records values rather than authorship, the lock file records providers, and the graph shows dependencies.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/run/manage",
    tags: ["Audit", "Operations", "HCP Terraform"]
  }
];

export default HASHICORP_TFP_QUESTIONS_4;
