export const HASHICORP_TFP_QUESTIONS_3 = [
  {
    id: "hashicorp-tfp-51",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Conditional Resource Creation",
    scenario: "A monitoring dashboard resource should be created only when var.enable_monitoring is true, with no other change to the configuration.",
    question: "Which idiom expresses that?",
    options: [
      { id: 'A', text: "A conditional expression inside the resource body." },
      { id: 'B', text: "An if block around the resource." },
      { id: 'C', text: "depends_on = [var.enable_monitoring]" },
      { id: 'D', text: "count = var.enable_monitoring ? 1 : 0 on the resource, referencing it as resource.name[0]." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The count zero-or-one idiom is how Terraform expresses optional resources, and the instance is then addressed with an index or via one(). HCL has no if block for resources, a conditional inside the body cannot suppress the resource itself, and depends_on takes resource references rather than variables.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/count",
    tags: ["count", "Conditionals", "HCL"]
  },
  {
    id: "hashicorp-tfp-52",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Recovering From a Stuck State Lock",
    scenario: "A CI job was killed mid-apply and every subsequent run fails with \"Error acquiring the state lock\", quoting a lock ID and the dead job.",
    question: "What is the correct procedure?",
    options: [
      { id: 'A', text: "Confirm no operation is actually running, then run terraform force-unlock with the reported lock ID." },
      { id: 'B', text: "Run terraform apply -lock=false as the permanent workaround." },
      { id: 'C', text: "Delete the state file and reinitialise." },
      { id: 'D', text: "Delete the lock table or lock object directly as the first step." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "force-unlock is the supported release path, but only after verifying that no run is genuinely in progress - unlocking a live apply risks two writers. Deleting state destroys the record of managed infrastructure, deleting backend lock objects by hand is a blunter version of the same thing, and disabling locking permanently removes the protection entirely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/force-unlock",
    tags: ["Locking", "State", "Recovery"]
  },
  {
    id: "hashicorp-tfp-53",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Referencing a Module Output",
    scenario: "A module named network declares an output called vpc_id, and a resource in the root module needs that value.",
    question: "Which reference is correct?",
    options: [
      { id: 'A', text: "module.network.output.vpc_id" },
      { id: 'B', text: "data.module.network.vpc_id" },
      { id: 'C', text: "module.network.vpc_id" },
      { id: 'D', text: "var.network.vpc_id" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Module outputs are referenced as module.NAME.OUTPUT. There is no intermediate output keyword, var refers to input variables of the current module, and data addresses data sources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/outputs",
    tags: ["Modules", "Outputs", "References"]
  },
  {
    id: "hashicorp-tfp-54",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Provider Version Constraints Versus the Lock File",
    scenario: "required_providers pins aws to ~> 5.0 and the lock file records 5.31.0. A newer 5.40.0 has been released.",
    question: "What happens on the next terraform init in CI?",
    options: [
      { id: 'A', text: "Terraform fails because the lock file is out of date." },
      { id: 'B', text: "Terraform installs 5.31.0 as recorded in the lock file; upgrading requires terraform init -upgrade and a lock file commit." },
      { id: 'C', text: "Terraform installs the newest version and silently rewrites the lock file." },
      { id: 'D', text: "Terraform installs 5.40.0 because it satisfies the constraint." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The lock file makes provider selection reproducible: init honours the recorded version whenever it satisfies the constraints, and only -upgrade re-resolves and rewrites the lock. That determinism is exactly why the file is committed.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/files/dependency-lock",
    tags: ["Providers", "Lock File", "Versioning"]
  },
  {
    id: "hashicorp-tfp-55",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Optional Object Attributes With Defaults",
    scenario: "A module input is an object where callers may omit the tags and enabled attributes, which should then default to an empty map and true respectively.",
    question: "Which type expression supports that?",
    options: [
      { id: 'A', text: "any, with coalesce applied in a local" },
      { id: 'B', text: "object({ name = string, tags = map(string), enabled = bool }) with a variable default" },
      { id: 'C', text: "map(string) with documented keys" },
      { id: 'D', text: "object({ name = string, tags = optional(map(string), {}), enabled = optional(bool, true) })" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The optional() modifier inside an object type marks an attribute as omittable and can supply a default that Terraform fills in per element, which is exactly the requirement. A variable-level default only applies when the whole variable is omitted, any abandons type checking, and a flat string map cannot hold mixed types.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/expressions/type-constraints",
    tags: ["Types", "optional", "Variables"]
  },
  {
    id: "hashicorp-tfp-56",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Reaching Private Infrastructure From HCP Terraform",
    scenario: "Runs must reach a Terraform provider API that is only available inside a private network with no inbound internet access.",
    question: "Which execution option supports that?",
    options: [
      { id: 'A', text: "A self-hosted agent in agent execution mode, which polls HCP Terraform outbound and runs the operation inside the private network." },
      { id: 'B', text: "Local execution with state stored remotely, which is the only option." },
      { id: 'C', text: "A run task that proxies provider traffic." },
      { id: 'D', text: "Remote execution with an allow-list of HCP Terraform IP addresses inbound." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Agents run inside the customer network and connect outbound to HCP Terraform, so no inbound path is needed while runs still get central logging, variables, and policy. Inbound allow-listing is exactly what the scenario forbids, local execution loses centralised runs, and run tasks are webhooks rather than network proxies.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/agents",
    tags: ["HCP Terraform", "Agents", "Networking"]
  },
  {
    id: "hashicorp-tfp-57",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Resource Exists but Terraform Wants to Create It",
    scenario: "A plan proposes to create a resource that clearly already exists in the cloud, and apply then fails with an already-exists error from the provider.",
    question: "What is the underlying situation?",
    options: [
      { id: 'A', text: "The provider cache is stale; run terraform init -upgrade." },
      { id: 'B', text: "The plan file is out of date; regenerate it." },
      { id: 'C', text: "The resource needs prevent_destroy set." },
      { id: 'D', text: "The object is not in Terraform state - it was created outside Terraform or removed from state - so it must be imported." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform plans creation for anything in configuration but absent from state, so the fix is to bring the existing object under management with an import block or terraform import. Provider caches, stale plan files, and lifecycle guards do not change what state contains.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/import",
    tags: ["Import", "Troubleshooting", "State"]
  },
  {
    id: "hashicorp-tfp-58",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Choosing a Backend for a Team",
    scenario: "A team of eight engineers currently keeps terraform.tfstate on one laptop and shares it over chat.",
    question: "Which properties should the replacement backend provide? (Choose two.)",
    options: [
      { id: 'A', text: "Storage of provider binaries alongside state." },
      { id: 'B', text: "State locking to serialise concurrent operations." },
      { id: 'C', text: "Shared remote storage with access control and encryption." },
      { id: 'D', text: "Automatic rollback of failed applies." }
    ],
    correctAnswers: ['B', 'C'],
    type: "multiple",
    explanation: "A team backend needs a single shared, access-controlled, encrypted location for state and a locking mechanism so two applies cannot interleave; versioning for recovery is a common third property. Terraform has no apply rollback, and provider binaries are fetched by init rather than stored with state.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/backend",
    tags: ["Backends", "State", "Collaboration"]
  },
  {
    id: "hashicorp-tfp-59",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Publishing a Module to a Registry",
    scenario: "A module should be publishable to a Terraform registry and consumed by version constraint.",
    question: "Which requirements must be met?",
    options: [
      { id: 'A', text: "A backend block declaring where the module state lives." },
      { id: 'B', text: "A provider block pinning the exact provider version." },
      { id: 'C', text: "A repository named terraform-PROVIDER-NAME, a standard file layout with main.tf, variables.tf, and outputs.tf, and semver git tags such as v1.2.0." },
      { id: 'D', text: "A single main.tf file and any repository name." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Registries derive the module address from the repository name convention and the version list from semantic-version git tags, and expect the standard module structure so documentation can be generated. Modules must not declare backends, and pinning an exact provider inside a shared module makes it unusable alongside others.",
    referenceUrl: "https://developer.hashicorp.com/terraform/registry/modules/publish",
    tags: ["Registry", "Modules", "Publishing"]
  },
  {
    id: "hashicorp-tfp-60",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Non-Interactive Apply in a Pipeline",
    scenario: "An automated pipeline runs apply without a terminal and must never wait for a prompt or emit colour codes into the log.",
    question: "Which flag combination is appropriate?",
    options: [
      { id: 'A', text: "terraform apply -lock=false -no-color" },
      { id: 'B', text: "terraform apply -auto-approve -input=true" },
      { id: 'C', text: "terraform apply -input=false -no-color, applying a saved plan file" },
      { id: 'D', text: "terraform apply -refresh=false" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Applying a saved plan needs no approval prompt at all, -input=false makes any missing value an error rather than a hang, and -no-color keeps logs clean. Enabling input invites a hang, disabling locking is unsafe, and skipping refresh changes correctness rather than interactivity.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/run",
    tags: ["Automation", "CLI", "CI/CD"]
  },
  {
    id: "hashicorp-tfp-61",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Reading Existing Infrastructure Without Managing It",
    scenario: "A configuration must look up the id of a VPC created by another team and use it, without ever modifying or owning that VPC.",
    question: "Which construct is correct?",
    options: [
      { id: 'A', text: "A resource block with lifecycle { ignore_changes = all }." },
      { id: 'B', text: "An import block for the VPC." },
      { id: 'C', text: "A data source that filters on the VPC tags or name." },
      { id: 'D', text: "A variable containing the hard-coded id." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data sources read existing objects at plan time without taking ownership, which is precisely the read-only cross-team dependency described. A resource block claims ownership even with changes ignored, importing takes over management, and a hard-coded id is brittle and undocumented - though passing it as a variable is a legitimate looser alternative.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/data-sources",
    tags: ["Data Sources", "Composition", "HCL"]
  },
  {
    id: "hashicorp-tfp-62",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Plan Shows Replacement for an Unchanged Resource",
    scenario: "A plan reports that an instance must be replaced, with the reason \"# forces replacement\" next to an attribute nobody edited.",
    question: "Which investigation step is most useful first?",
    options: [
      { id: 'A', text: "Immediately run terraform state rm on the resource." },
      { id: 'B', text: "Disable refresh so the plan stops noticing." },
      { id: 'C', text: "Read the plan diff carefully to see which attribute changed and why - typically a computed upstream value, a provider default change, or drift - then decide whether to fix the source or ignore it." },
      { id: 'D', text: "Downgrade Terraform to the previous version." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The plan output names the exact attribute forcing replacement, and the cause is usually an upstream reference that changed, a provider upgrade altering defaults, or genuine drift - all visible before doing anything destructive. Removing state, downgrading blindly, and disabling refresh all hide the signal instead of explaining it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["Plan", "Replacement", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-63",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Who Can Approve an Apply",
    scenario: "An organisation wants developers to be able to queue plans but only a platform team to approve applies in production workspaces.",
    question: "Which mechanism enforces that?",
    options: [
      { id: 'A', text: "A variable set marked sensitive." },
      { id: 'B', text: "Setting the workspace to auto-apply." },
      { id: 'C', text: "A Sentinel policy checking the username." },
      { id: 'D', text: "Team access permissions on the workspace, granting plan-only to developers and apply to the platform team." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Workspace-level team permissions distinguish read, plan, write, and admin, which directly expresses queue-but-cannot-apply. Policies evaluate plan content rather than acting as an access control list, variable sets carry values, and auto-apply removes the approval gate entirely.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/users-teams-organizations/permissions",
    tags: ["HCP Terraform", "RBAC", "Governance"]
  },
  {
    id: "hashicorp-tfp-64",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Migrating Between Backends",
    scenario: "A configuration must move its state from the local backend to a remote one, keeping all managed resources.",
    question: "What is the supported procedure?",
    options: [
      { id: 'A', text: "Add the new backend configuration and run terraform init, accepting the prompt to copy existing state to the new backend." },
      { id: 'B', text: "Run terraform destroy, change the backend, then apply again." },
      { id: 'C', text: "Manually upload terraform.tfstate and delete .terraform." },
      { id: 'D', text: "Use terraform workspace new to create the remote state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform detects a backend change during init and offers to migrate the existing state, which is the safe supported path (with -migrate-state to confirm non-interactively). Destroying and recreating discards real infrastructure, hand-uploading skips consistency checks, and workspaces do not migrate backends.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/backend",
    tags: ["Backends", "Migration", "State"]
  },
  {
    id: "hashicorp-tfp-65",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Depending on a Whole Module",
    scenario: "Resources in the root module must not be created until every resource inside a called module exists, and there is no single output to reference.",
    question: "Which construct expresses that?",
    options: [
      { id: 'A', text: "Setting count on the module." },
      { id: 'B', text: "Referencing module.network directly in a resource argument." },
      { id: 'C', text: "depends_on = [module.network] on the dependent resource." },
      { id: 'D', text: "Moving the resources inside the module." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "depends_on accepts a whole module address and waits for every resource in it, which is the intended tool when no attribute reference exists. A bare module reference is not a valid expression, count controls instance counts, and relocating resources changes the design rather than expressing ordering.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/depends_on",
    tags: ["Modules", "depends_on", "Ordering"]
  },
  {
    id: "hashicorp-tfp-66",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Avoiding Provisioners",
    scenario: "A configuration uses a remote-exec provisioner to install packages on every new virtual machine, and runs frequently fail when SSH is briefly unavailable.",
    question: "Which alternative does HashiCorp recommend?",
    options: [
      { id: 'A', text: "Add a longer timeout and retry loop to the provisioner." },
      { id: 'B', text: "Bake the software into a machine image or use cloud-init / user_data, treating provisioners as a last resort." },
      { id: 'C', text: "Run the provisioner with when = destroy instead." },
      { id: 'D', text: "Move the provisioner to a null_resource with triggers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provisioners are documented as a last resort because they are outside the provider model, are not represented in the plan, and cannot be reliably retried; immutable images or instance user data solve the problem declaratively. Timeouts, null_resource wrappers, and destroy-time provisioners all keep the same fragility.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/provisioners/syntax",
    tags: ["Provisioners", "Best Practices", "Immutable Infrastructure"]
  },
  {
    id: "hashicorp-tfp-67",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "What -detailed-exitcode Reports",
    scenario: "A pipeline runs terraform plan -detailed-exitcode to decide whether to proceed to an approval step.",
    question: "What do the exit codes mean?",
    options: [
      { id: 'A', text: "0 means no changes, 1 means changes, 2 means a policy failure." },
      { id: 'B', text: "0 means success with changes, 1 means no changes, 2 means an error." },
      { id: 'C', text: "Any non-zero code means an error." },
      { id: 'D', text: "0 means no changes, 1 means an error, 2 means changes are present." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With -detailed-exitcode, 0 is a successful plan with no differences, 1 is an error, and 2 is a successful plan that contains changes - which lets a pipeline skip the approval step entirely when nothing would change. Without the flag, any change still exits 0.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan",
    tags: ["CLI", "Exit Codes", "Automation"]
  },
  {
    id: "hashicorp-tfp-68",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Understanding a Provider Authentication Failure",
    scenario: "A run fails immediately with \"error configuring Terraform AWS Provider: no valid credential sources found\".",
    question: "Where should the engineer look?",
    options: [
      { id: 'A', text: "The state file, which stores credentials." },
      { id: 'B', text: "The credential chain available to the process - environment variables, shared config files, instance or workload identity - rather than the Terraform configuration itself." },
      { id: 'C', text: "The resource blocks, which must each declare credentials." },
      { id: 'D', text: "The dependency lock file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provider configuration errors happen before any resource work and point at the authentication chain the provider searches; in CI this is usually a missing environment variable or an unassumed role. State does not store provider credentials, the lock file records versions, and resources never carry credentials.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/configuration",
    tags: ["Providers", "Credentials", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-69",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Consequences of Deleting State",
    scenario: "Someone deletes the remote state file for a live environment. The infrastructure is untouched.",
    question: "What is the impact and the recovery path?",
    options: [
      { id: 'A', text: "Nothing changes, because state is derived from the configuration." },
      { id: 'B', text: "Terraform no longer knows about any resource and would plan to create everything again; recover from backend versioning or a backup, otherwise re-import every resource." },
      { id: 'C', text: "The provider blocks the next apply until state is restored." },
      { id: 'D', text: "Terraform rebuilds state automatically on the next refresh." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "State is the only record linking configuration addresses to real object ids, so losing it means Terraform sees a greenfield and would duplicate everything; versioned buckets and backups exist precisely for this. There is no automatic rediscovery - refresh only updates entries that already exist.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["State", "Recovery", "Backends"]
  },
  {
    id: "hashicorp-tfp-70",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d6",
    domainName: "HCP Terraform Collaboration and Governance",
    title: "Integrating an External Scanner Into a Run",
    scenario: "A security tool must inspect every plan and be able to block the run if it finds a critical issue, without the tool being a Terraform provider or policy language.",
    question: "Which HCP Terraform feature is designed for that?",
    options: [
      { id: 'A', text: "A private registry module wrapping the tool." },
      { id: 'B', text: "A notification configuration posting to the tool." },
      { id: 'C', text: "A variable set holding the tool API key." },
      { id: 'D', text: "A run task attached at the post-plan stage, configured as mandatory so a failing result stops the run." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run tasks call an external HTTP service at defined stages - pre-plan, post-plan, pre-apply - and a mandatory task that reports failure blocks the run. Notifications are one-way and advisory, a variable set only supplies the key, and a module cannot gate a run.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cloud-docs/workspaces/settings/run-tasks",
    tags: ["Run Tasks", "HCP Terraform", "Security"]
  },
  {
    id: "hashicorp-tfp-71",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    domainName: "Authoring Terraform Configuration",
    title: "Safely Handling a Possibly Empty Collection",
    scenario: "An expression must return the single element of a list that has either zero or one element, yielding null when it is empty, without an index error.",
    question: "Which function does that?",
    options: [
      { id: 'A', text: "one(list)" },
      { id: 'B', text: "element(list, 0)" },
      { id: 'C', text: "try(list[0])" },
      { id: 'D', text: "coalesce(list...)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "one() returns the single element of a one-element collection, null for an empty one, and errors for more than one - designed for exactly the count zero-or-one pattern. element wraps around and errors on empty lists, try masks unrelated errors too, and coalesce picks the first non-null argument rather than handling emptiness.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/one",
    tags: ["Functions", "count", "HCL"]
  },
  {
    id: "hashicorp-tfp-72",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    domainName: "Modules and Reuse",
    title: "Upgrading a Shared Module Safely",
    scenario: "A widely used internal module has a breaking change to its input interface, and thirty consumers pin it with ~> 2.0.",
    question: "What is the right release strategy?",
    options: [
      { id: 'A', text: "Force-push a new tag over 2.8.0." },
      { id: 'B', text: "Release it as 3.0.0 following semantic versioning, document the migration, and let consumers move their constraint deliberately." },
      { id: 'C', text: "Ask consumers to stop pinning versions." },
      { id: 'D', text: "Release it as 2.9.0 so consumers pick it up automatically and find out quickly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Breaking interface changes are a major version by definition, and the pessimistic constraint then protects consumers until they choose to upgrade. Shipping a break as a minor version breaks thirty pipelines at once, retagging an existing version is a supply-chain hazard, and removing pins makes every release a surprise.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/publish",
    tags: ["Versioning", "Modules", "Release"]
  },
  {
    id: "hashicorp-tfp-73",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d4",
    domainName: "Workflows, CLI and Automation",
    title: "Where Terraform Looks for Variable Values",
    scenario: "A run has the same variable set by a tfvars file, an environment variable, and a command-line flag.",
    question: "Which source wins?",
    options: [
      { id: 'A', text: "The -var command-line flag, which has the highest precedence." },
      { id: 'B', text: "The TF_VAR_ environment variable." },
      { id: 'C', text: "Whichever is evaluated first, which is non-deterministic." },
      { id: 'D', text: "terraform.tfvars, because files are authoritative." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Precedence runs from environment variables (lowest) through terraform.tfvars and *.auto.tfvars to -var-file and -var on the command line (highest), with later command-line occurrences overriding earlier ones. The ordering is fully defined rather than arbitrary.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables",
    tags: ["Variables", "Precedence", "CLI"]
  },
  {
    id: "hashicorp-tfp-74",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d5",
    domainName: "Debugging and Troubleshooting",
    title: "Inconsistent Final Plan Error",
    scenario: "An apply fails with \"Provider produced inconsistent final plan\" naming an attribute the provider set differently from the planned value.",
    question: "What does this indicate?",
    options: [
      { id: 'A', text: "The state file is corrupt and must be restored." },
      { id: 'B', text: "Terraform core is out of date and must be downgraded." },
      { id: 'C', text: "Two applies ran concurrently." },
      { id: 'D', text: "A provider bug or a mismatch between the planned and applied value; workarounds include upgrading the provider, adding ignore_changes for that attribute, or reporting it upstream." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "That error is Terraform detecting that the provider violated its own plan contract, which is a provider-side defect; upgrading the provider usually fixes it and ignore_changes can work around it meanwhile. It is not a state corruption, a core version problem, or a concurrency symptom - concurrency shows up as lock errors.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/behavior",
    tags: ["Providers", "Errors", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfp-75",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    domainName: "State Management and Operations",
    title: "Partial Backend Configuration",
    scenario: "The same configuration is used for several environments whose backends differ only in the state key, and the key must not be hard-coded in the repository.",
    question: "Which mechanism supports that?",
    options: [
      { id: 'A', text: "A partial backend block plus terraform init -backend-config=env.hcl or -backend-config=\"key=...\" at init time." },
      { id: 'B', text: "Interpolating a variable into the backend block." },
      { id: 'C', text: "Passing -var=\"key=...\" to terraform init." },
      { id: 'D', text: "A locals block computing the key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Backend blocks cannot use variables, locals, or any expression, so the supported pattern is to omit the varying settings and supply them at init with -backend-config as a file or key-value pairs. Input variables are not available to the backend at all.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/backend",
    tags: ["Backends", "Configuration", "Environments"]
  }
];

export default HASHICORP_TFP_QUESTIONS_3;
