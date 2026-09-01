export const HASHICORP_TFP_FLASHCARDS_5 = [
  {
    id: 'hashicorp-tfp-fc-101', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Filter while building a map.',
    hint: 'if clause on a for expression.',
    back: '<code>{ for k, v in var.subnets : k =&gt; v if v.public }</code>. The object form preserves keys; the bracket form <code>[ for k, v in … : k if … ]</code> returns a list of keys. Filtering at the collection level is far clearer than conditionals scattered through resource bodies.',
    tags: ['for expressions', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-102', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Why can this module not use for_each?',
    hint: 'Look for a provider block inside it.',
    back: 'A module that declares its own <code>provider</code> blocks cannot use <code>count</code>, <code>for_each</code>, or <code>depends_on</code> — each instance would need its own provider configuration. Move provider configuration to the caller and declare <code>configuration_aliases</code> in the module instead.',
    tags: ['Modules', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-103', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What is terraform.tfstate.backup?',
    hint: 'One step, local backend only.',
    back: 'The previous state, written by the <strong>local backend</strong> before it overwrites the current one — a single step of rollback. It is not a version history; remote backends with object versioning (or HCP Terraform state versions) provide that.',
    tags: ['State', 'Backends']
  },
  {
    id: 'hashicorp-tfp-fc-104', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Safe CI for pull requests from forks.',
    hint: 'Fork code is untrusted code.',
    back: 'On forks run only <strong>credential-free</strong> checks: <code>fmt -check</code>, <code>validate</code> with <code>-backend=false</code>, static analysis. Reserve plans with real credentials for branches in the trusted repository. A fork PR can execute attacker-controlled configuration.',
    tags: ['CI/CD', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-105', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"An argument named X is not expected here" right after a provider upgrade.',
    hint: 'Schemas changed.',
    back: 'Provider <strong>schemas</strong> define which arguments exist, so a major upgrade can rename or remove one. Read the provider upgrade guide, adjust the configuration, or pin back to the previous major version while you migrate. Nothing to do with core or state.',
    tags: ['Providers', 'Upgrades']
  },
  {
    id: 'hashicorp-tfp-fc-106', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'How should workspaces map to reality?',
    hint: 'One workspace, one state, one target.',
    back: 'One workspace per <strong>environment-and-region deployment target</strong>, grouped into <strong>projects</strong> by owning team so permissions and variable sets align with ownership. Not one per developer, not one per resource type, and not one shared workspace switched by a variable.',
    tags: ['Workspaces', 'Organisation']
  },
  {
    id: 'hashicorp-tfp-fc-107', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Bringing forty existing resources under management.',
    hint: 'Import blocks scale; the CLI does not.',
    back: '<code>import</code> blocks for each target, then <code>terraform plan -generate-config-out=generated.tf</code> writes candidate resource configuration for you to review, tidy, and commit. Far faster and safer than forty hand-written blocks plus forty CLI invocations.',
    tags: ['Import', 'Brownfield']
  },
  {
    id: 'hashicorp-tfp-fc-108', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Tear down an ephemeral environment from automation.',
    hint: 'Destroy, not state surgery.',
    back: '<code>terraform apply -destroy -auto-approve</code> (or <code>terraform destroy -auto-approve</code>) against that environment configuration and state. Deleting the state file or removing entries leaves the real resources running and unmanaged — the classic source of orphaned cloud spend.',
    tags: ['destroy', 'Ephemeral Environments']
  },
  {
    id: 'hashicorp-tfp-fc-109', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Handle a map key that might be missing.',
    hint: 'Two good options.',
    back: '<code>lookup(var.settings, "timeout", 30)</code> for a fallback, or declare the attribute as <code>optional(number, 30)</code> in the variable type — the second is more self-documenting because the default lives in the interface. Bare <code>var.settings["timeout"]</code> errors on absence.',
    tags: ['Functions', 'Defaults']
  },
  {
    id: 'hashicorp-tfp-fc-110', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Pipeline died mid-apply; now there are two load balancers.',
    hint: 'State is written as it goes.',
    back: 'The first run created the object but was killed <strong>before writing state</strong>, so the retry created another. Reconcile by importing the one to keep and deleting the orphan. Prevent it with reliable locking, sensible timeouts, and not killing applies.',
    tags: ['Failure Recovery', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-111', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Cost estimation — where does it fit?',
    hint: 'After plan, before apply.',
    back: 'HCP Terraform estimates the monthly cost delta for supported resources as part of the run, and a <strong>policy can act on that figure</strong> — warn in development, block in production. It appears alongside the plan for reviewers.',
    tags: ['Cost Estimation', 'Governance']
  },
  {
    id: 'hashicorp-tfp-fc-112', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'You bumped a module version and plan complains. What is missing?',
    hint: 'One command.',
    back: '<code>terraform init</code> — it installs and updates <strong>modules</strong> as well as providers, into <code>.terraform/modules</code>. Add <code>-upgrade</code> to move to a newer version allowed by the constraint. Module versions are not tracked by the dependency lock file.',
    tags: ['Modules', 'init']
  },
  {
    id: 'hashicorp-tfp-fc-113', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Remote state vs data source lookup — how do you choose?',
    hint: 'What are you willing to couple to?',
    back: '<strong>Remote state:</strong> couples you to the producer state layout and its outputs, and needs state read access. <strong>Data source:</strong> couples you to a naming or tagging convention, needs only provider read access, but can return zero or many matches. Both beat copying values by hand.',
    tags: ['Composition', 'Remote State']
  },
  {
    id: 'hashicorp-tfp-fc-114', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'What is unknown at plan time, and why does it matter?',
    hint: '(known after apply).',
    back: 'Attributes the provider only computes during apply. Ordinary arguments may consume them happily. But <strong>count and for_each keys must be known at plan time</strong>, because the graph is built then — so anything derived from an unknown value must come from inputs instead, or be applied in stages.',
    tags: ['Unknown Values', 'Plan']
  },
  {
    id: 'hashicorp-tfp-fc-115', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Keeping secrets out of a plan posted to a pull request.',
    hint: 'Two layers.',
    back: 'Mark variables and outputs <code>sensitive</code> so Terraform <strong>redacts them in output</strong>, and restrict who can read <strong>state, run logs, and plan artifacts</strong> — because the real values are stored there regardless. Encrypting the artifact does not change what Terraform prints.',
    tags: ['Secrets', 'CI/CD']
  },
  {
    id: 'hashicorp-tfp-fc-116', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Read a saved plan file later.',
    hint: 'Two renderings.',
    back: '<code>terraform show tfplan</code> for the human rendering, <code>terraform show -json tfplan</code> for the documented structured form that policy and review tooling consume. <code>terraform plan tfplan</code> does not read a plan — it would try to write one.',
    tags: ['Plan File', 'CLI']
  },
  {
    id: 'hashicorp-tfp-fc-117', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Wrapper modules around public modules — worth it?',
    hint: 'A real trade, not a rule.',
    back: 'Yes for encoding organisational defaults and narrowing choice; the cost is <strong>another versioned layer</strong> that must track upstream releases. It does not remove the need to pin the upstream version, and it does not prevent upstream breaking changes — it only controls when teams meet them.',
    tags: ['Modules', 'Platform Engineering']
  },
  {
    id: 'hashicorp-tfp-fc-118', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Run triggers.',
    hint: 'Upstream apply, downstream plan.',
    back: 'A workspace can be configured to queue a run automatically when a <strong>source workspace completes an apply</strong> — the way to express cross-workspace ordering (networking, then applications). Remote state sharing alone does <em>not</em> schedule anything.',
    tags: ['Run Triggers', 'Orchestration']
  },
  {
    id: 'hashicorp-tfp-fc-119', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Document a module so the registry renders it well.',
    hint: 'Types and descriptions do the work.',
    back: 'Precise <code>type</code> and <code>description</code> on <strong>every</strong> variable and output, a README with a usage example, and an <code>examples/</code> directory that CI actually plans or tests — otherwise the examples rot and nobody trusts them.',
    tags: ['Documentation', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-120', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Where does a provider find its credentials?',
    hint: 'Not from Terraform.',
    back: 'From its own <strong>credential chain</strong> — environment variables, shared config files, instance or workload identity — configured outside Terraform. "No valid credential sources found" is therefore an environment problem, not a configuration one. Never hard-code keys in a provider block.',
    tags: ['Providers', 'Credentials']
  },
  {
    id: 'hashicorp-tfp-fc-121', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Pin what, float what?',
    hint: 'Three decisions.',
    back: 'Pin the <strong>Terraform binary</strong> (image + <code>required_version</code>), commit the <strong>provider lock file</strong>, and use <strong>pessimistic constraints</strong> (<code>~&gt;</code>) on providers and modules. Every version change then becomes a deliberate, reviewable commit rather than a surprise.',
    tags: ['Versioning', 'Reproducibility']
  },
  {
    id: 'hashicorp-tfp-fc-122', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Terraform hangs during plan with no output.',
    hint: 'Two usual suspects.',
    back: 'Either it is <strong>waiting on a state lock</strong>, or a <strong>provider API call is slow or unreachable</strong>. <code>TF_LOG=DEBUG</code> shows which request is outstanding. Rewriting the configuration or reinstalling the binary throws away the evidence.',
    tags: ['Debugging', 'Locking']
  },
  {
    id: 'hashicorp-tfp-fc-123', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'A module works from a local path but fails from the registry.',
    hint: 'Compare what was published.',
    back: 'A local path reads your <strong>working tree</strong>; a registry source reads an <strong>immutable published tag</strong>. First hypothesis: the change was never committed, never tagged, or the tag points at an older commit. Language semantics are identical either way.',
    tags: ['Modules', 'Registry']
  },
  {
    id: 'hashicorp-tfp-fc-124', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Locking a workspace.',
    hint: 'Pause everything, on purpose.',
    back: 'Locking a workspace <strong>prevents new runs from being queued</strong> and records who locked it and why — the right control during a migration or an incident. Disconnecting VCS blocks only one trigger; changing execution mode blocks nothing.',
    tags: ['HCP Terraform', 'Operations']
  },
  {
    id: 'hashicorp-tfp-fc-125', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Is "${var.name}" still correct?',
    hint: 'HCL2 changed this.',
    back: 'Write <code>var.name</code>. Since HCL2 expressions are first-class, so wrapping a single reference in template syntax is redundant. Interpolation is for embedding a value <em>inside a larger string</em>: <code>"app-${var.env}-web"</code>.',
    tags: ['HCL', 'Style']
  }
];

export default HASHICORP_TFP_FLASHCARDS_5;
