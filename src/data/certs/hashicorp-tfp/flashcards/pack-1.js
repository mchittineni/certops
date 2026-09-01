export const HASHICORP_TFP_FLASHCARDS_1 = [
  {
    id: 'hashicorp-tfp-fc-1', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'count vs for_each — when does the choice actually bite?',
    hint: 'Think about removing the first element.',
    back: '<strong>count</strong> keys instances by <em>position</em>, so removing an early element shifts every later index and Terraform plans a cascade of replacements. <strong>for_each</strong> keys by a stable string, so removing one entry destroys only that instance. Use count only for zero-or-one conditionals and truly interchangeable instances.',
    tags: ['count', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-2', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'The four refactoring blocks that live in configuration.',
    hint: 'Declarative replacements for CLI state surgery.',
    back: '<code>moved</code> — an address changed (rename, into a module, count→for_each). <code>import</code> — adopt an existing object, plannable and reviewable. <code>removed</code> — forget a resource, with <code>lifecycle { destroy = false }</code> to keep the real object. <code>replace_triggered_by</code> — recreate when something else changes. All versioned; none require a manual CLI step.',
    tags: ['moved', 'import', 'removed']
  },
  {
    id: 'hashicorp-tfp-fc-3', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Why save a plan file instead of re-planning at apply time?',
    hint: 'What is reviewed must be what is applied.',
    back: '<code>terraform plan -out=tfplan</code> then <code>terraform apply tfplan</code>. The saved plan records the exact actions <em>and</em> the state serial it was based on, so applying it either does precisely what was reviewed or <strong>fails</strong>. Re-planning at apply time can silently apply something else, and it never prompts.',
    tags: ['Plan File', 'CI/CD']
  },
  {
    id: 'hashicorp-tfp-fc-4', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'How does a reusable module get a non-default provider?',
    hint: 'The module declares, the caller supplies.',
    back: 'The module lists <code>configuration_aliases = [aws.replica]</code> in its <code>required_providers</code>; the caller passes <code>providers = { aws.replica = aws.west }</code>. A module must <strong>never</strong> declare its own <code>provider</code> block — that makes it unusable with <code>count</code>, <code>for_each</code>, and <code>depends_on</code>, and leaves resources unmanageable when it is removed.',
    tags: ['Modules', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-5', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'The four ways to constrain or assert a value.',
    hint: 'Input, before, after, continuous.',
    back: '<strong>variable validation</strong> — checks the raw input. <strong>precondition</strong> — asserts assumptions before a resource is created or read. <strong>postcondition</strong> — asserts guarantees about the result. <strong>check block</strong> — continuous validation that emits a <em>warning</em> rather than failing the run.',
    tags: ['Validation', 'Custom Conditions']
  },
  {
    id: 'hashicorp-tfp-fc-6', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What does state locking prevent — and what does it not?',
    hint: 'Serialisation, not safety in general.',
    back: 'It serialises state-mutating operations so two applies cannot interleave and clobber each other. It does <strong>not</strong> prevent drift, bad plans, or a killed process leaving a created object unrecorded. <code>terraform force-unlock &lt;ID&gt;</code> releases a stale lock — only after confirming nothing is really running.',
    tags: ['Locking', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-7', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Turn on Terraform debug logging.',
    hint: 'Level, destination, and which half.',
    back: '<code>TF_LOG=TRACE|DEBUG|INFO|WARN|ERROR</code>, <code>TF_LOG_PATH=./tf.log</code> to write to a file, and <code>TF_LOG_CORE</code> / <code>TF_LOG_PROVIDER</code> to set the two halves separately — essential for isolating whether core or the provider is misbehaving before filing a bug.',
    tags: ['Logging', 'Debugging']
  },
  {
    id: 'hashicorp-tfp-fc-8', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'dynamic blocks: what problem do they solve, and what do they not?',
    hint: 'Nested blocks, not instances.',
    back: 'A <code>dynamic</code> block generates a variable number of <strong>nested blocks inside one resource</strong> (ingress rules, tags blocks), iterating with <code>for_each</code> and emitting a <code>content</code> block. It does <em>not</em> create multiple resources — that is <code>for_each</code> on the resource itself. Overuse hurts readability; prefer literal blocks when the count is fixed.',
    tags: ['dynamic', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-9', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Sentinel enforcement levels.',
    hint: 'Three, and only one is truly unstoppable.',
    back: '<strong>advisory</strong> — logs a warning, run continues. <strong>soft-mandatory</strong> — fails, but an authorised user can override. <strong>hard-mandatory</strong> — fails, no override; the plan must change or the policy must be amended. Policy sets attach at organisation, project, or workspace scope, and run between plan and apply.',
    tags: ['Sentinel', 'Policy']
  },
  {
    id: 'hashicorp-tfp-fc-10', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Module version constraint operators.',
    hint: 'The pessimistic one is the default choice.',
    back: '<code>~&gt; 3.0</code> allows 3.1 and 3.9 but not 4.0. <code>~&gt; 3.1.2</code> allows 3.1.3 but not 3.2.0. <code>&gt;= 3.0, &lt; 4.0</code> is the explicit equivalent. An exact pin blocks patch fixes; no constraint at all makes every release a surprise. Module versions come from <strong>git tags</strong>, not the lock file.',
    tags: ['Versioning', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-11', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Config-driven import: why prefer it over terraform import?',
    hint: 'One is code, the other is a keystroke.',
    back: 'An <code>import</code> block is committed, reviewed, planned (you see what will be adopted before it happens), repeatable in CI, and can emit starting configuration with <code>terraform plan -generate-config-out=gen.tf</code>. The CLI command is imperative, leaves no artifact, and is easy to forget on the next environment.',
    tags: ['Import', 'Brownfield']
  },
  {
    id: 'hashicorp-tfp-fc-12', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What does terraform init actually do?',
    hint: 'Four things.',
    back: 'Initialises the <strong>backend</strong>, installs <strong>providers</strong>, installs <strong>modules</strong>, and writes or verifies <strong>.terraform.lock.hcl</strong>. It does not refresh state, validate variable values, or create backend storage. <code>-upgrade</code> re-resolves versions; <code>-backend=false</code> skips backend setup for credential-free validation.',
    tags: ['init', 'CLI']
  },
  {
    id: 'hashicorp-tfp-fc-13', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'The lifecycle meta-arguments.',
    hint: 'Five of them.',
    back: '<code>create_before_destroy</code> — build the replacement first (needs unique names). <code>prevent_destroy</code> — error on any plan that would destroy it. <code>ignore_changes</code> — cede specific attributes to an external owner. <code>replace_triggered_by</code> — recreate when something else changes. <code>precondition</code> / <code>postcondition</code> — custom assertions.',
    tags: ['lifecycle', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-14', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Invalid for_each argument … cannot be determined until apply". What now?',
    hint: 'The graph is built at plan time.',
    back: 'Instance <strong>keys</strong> must be known during plan, so they cannot derive from another resource computed attribute. Fix by keying on variables, locals, or data known in advance — or split the work into two applies. The same rule produces "Invalid count argument".',
    tags: ['for_each', 'Unknown Values']
  },
  {
    id: 'hashicorp-tfp-fc-15', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Two ways to consume another stack outputs, and their trade-off.',
    hint: 'State access vs naming convention.',
    back: '<strong>terraform_remote_state</strong> / <strong>tfe_outputs</strong> — reads the producer outputs; couples you to its state layout and needs state read access. <strong>Data source lookup</strong> by tag or name — couples you to a naming convention and needs only provider read access. Either is fine; copying values by hand is not.',
    tags: ['Remote State', 'Composition']
  },
  {
    id: 'hashicorp-tfp-fc-16', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'What does sensitive = true actually do?',
    hint: 'Less than people assume.',
    back: 'It <strong>redacts the value in CLI output</strong> and propagates that marking to derived values. It does <em>not</em> encrypt anything: the real value still lands in <strong>state</strong> and in the <strong>plan file</strong> in plain text. Protect those with encryption at rest and access control. Sensitive values also cannot be used as <code>for_each</code> keys.',
    tags: ['Sensitive', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-17', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Replace one resource — the current command.',
    hint: 'taint is deprecated.',
    back: '<code>terraform apply -replace="aws_instance.web"</code> (or <code>plan -replace=</code> first). It shows up in the plan, so the intent is reviewable. <code>terraform taint</code> is deprecated in favour of this, and <code>state rm</code> makes Terraform <em>forget</em> the resource rather than recreate it.',
    tags: ['CLI', 'Replace']
  },
  {
    id: 'hashicorp-tfp-fc-18', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'You get "Error: Cycle: …". What is wrong and how do you fix it?',
    hint: 'The graph must be acyclic.',
    back: 'Two resources reference each other, so there is no valid ordering. Break it by extracting the mutual reference — typically into a <strong>standalone rule / attachment resource</strong> that references both sides. Adding <code>depends_on</code> makes it worse; <code>terraform graph</code> helps you see it.',
    tags: ['Cycles', 'Graph']
  },
  {
    id: 'hashicorp-tfp-fc-19', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'HCP Terraform execution modes.',
    hint: 'Three, and one is for private networks.',
    back: '<strong>Remote</strong> — plan and apply run on HCP Terraform infrastructure; central variables, logs, policy. <strong>Local</strong> — HCP Terraform stores state only; the run happens on your machine. <strong>Agent</strong> — a self-hosted agent polls outbound and runs inside your private network, so no inbound access is needed.',
    tags: ['HCP Terraform', 'Execution Mode']
  },
  {
    id: 'hashicorp-tfp-fc-20', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'locals vs variables vs outputs.',
    hint: 'In, internal, out.',
    back: '<strong>variable</strong> — the module input; callers may override. <strong>local</strong> — an internal named expression; callers cannot touch it, ideal for derived values used repeatedly. <strong>output</strong> — the module public result, consumed by callers and stored in state. Variables and outputs together are the module contract.',
    tags: ['locals', 'Variables', 'Outputs']
  },
  {
    id: 'hashicorp-tfp-fc-21', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Should .terraform.lock.hcl be committed?',
    hint: 'Yes — and here is why.',
    back: '<strong>Yes.</strong> It pins the selected provider versions <em>and their checksums</em>, so CI and every developer resolve identical binaries — the difference between "works on my machine" and reproducible plans. Update it deliberately with <code>terraform init -upgrade</code> and commit the change. It does <em>not</em> track modules.',
    tags: ['Lock File', 'Reproducibility']
  },
  {
    id: 'hashicorp-tfp-fc-22', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'How should automation inspect a plan?',
    hint: 'Never grep the human output.',
    back: '<code>terraform plan -out=tfplan</code> then <code>terraform show -json tfplan</code>, and parse <code>resource_changes[].change.actions</code> for <code>delete</code> / <code>replace</code>. It is a documented, versioned format. <code>-detailed-exitcode</code> is a coarser signal: <strong>0</strong> no changes, <strong>1</strong> error, <strong>2</strong> changes present.',
    tags: ['JSON', 'Automation']
  },
  {
    id: 'hashicorp-tfp-fc-23', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What does NOT belong in a reusable module interface?',
    hint: 'Three categories.',
    back: '<strong>Credentials</strong>, <strong>region / provider configuration</strong>, and <strong>backend settings</strong> — all root-module concerns. A child module cannot declare a backend at all, and taking provider config as variables makes the module impossible to compose. Take only inputs describing <em>what to build</em>.',
    tags: ['Modules', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-24', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'A plan proposes the same change on every run. Diagnose it.',
    hint: 'Something else owns that attribute.',
    back: 'An external system is writing the attribute (an autoscaler, a tagging robot, a rotating token). Fix with a <strong>targeted</strong> <code>ignore_changes = [that_attribute]</code>, which cedes one field while keeping drift detection on everything else. Never reach for <code>ignore_changes = all</code> or permanent <code>-refresh=false</code>.',
    tags: ['Drift', 'lifecycle']
  },
  {
    id: 'hashicorp-tfp-fc-25', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'What does a pull request do to a VCS-connected workspace?',
    hint: 'It can never apply.',
    back: 'It triggers a <strong>speculative plan</strong> — a plan-only run whose result is posted back for review and which cannot be applied. Applies come from merges to the tracked branch, subject to the auto-apply setting or a manual approval by someone with apply permission.',
    tags: ['HCP Terraform', 'VCS']
  }
];

export default HASHICORP_TFP_FLASHCARDS_1;
