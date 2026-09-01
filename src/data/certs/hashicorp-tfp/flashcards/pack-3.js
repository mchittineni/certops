export const HASHICORP_TFP_FLASHCARDS_3 = [
  {
    id: 'hashicorp-tfp-fc-51', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Conditional creation of a single resource.',
    hint: 'The zero-or-one idiom.',
    back: '<code>count = var.enabled ? 1 : 0</code>, then reference it as <code>resource.name[0]</code> or, more safely, <code>one(resource.name)</code> — which returns <code>null</code> for an empty collection instead of erroring. HCL has no <code>if</code> block for resources.',
    tags: ['count', 'Conditionals']
  },
  {
    id: 'hashicorp-tfp-fc-52', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Stuck state lock — the safe procedure.',
    hint: 'Verify before you break it.',
    back: '1. <strong>Confirm nothing is actually running</strong> (check CI, ask the team). 2. <code>terraform force-unlock &lt;LOCK_ID&gt;</code> using the ID from the error. Never delete backend lock objects by hand as a first move, and never make <code>-lock=false</code> a permanent workaround.',
    tags: ['Locking', 'Recovery']
  },
  {
    id: 'hashicorp-tfp-fc-53', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Reference a module output.',
    hint: 'No intermediate keyword.',
    back: '<code>module.&lt;name&gt;.&lt;output&gt;</code> — for example <code>module.network.vpc_id</code>. With <code>for_each</code> on the module: <code>module.network["prod"].vpc_id</code>. There is no <code>.output.</code> segment, and a resource inside a child module is <strong>not</strong> addressable from the root — only its outputs are.',
    tags: ['Modules', 'Outputs']
  },
  {
    id: 'hashicorp-tfp-fc-54', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Constraint says ~> 5.0, lock file says 5.31.0, and 5.40.0 exists. What does init install?',
    hint: 'The lock wins.',
    back: '<strong>5.31.0.</strong> init honours the lock file whenever the recorded version still satisfies the constraints. Only <code>terraform init -upgrade</code> re-resolves and rewrites the lock — which you then commit. That determinism is the whole point of committing the file.',
    tags: ['Lock File', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-55', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'optional() inside an object type.',
    hint: 'Per-element defaults.',
    back: '<code>object({ name = string, tags = optional(map(string), {}), enabled = optional(bool, true) })</code>. Each element of a collection gets the default filled in when the attribute is omitted — which a variable-level <code>default</code> cannot do, since that only applies when the <em>whole</em> variable is missing.',
    tags: ['Types', 'optional']
  },
  {
    id: 'hashicorp-tfp-fc-56', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Reaching a private network from HCP Terraform.',
    hint: 'Outbound only.',
    back: 'A <strong>self-hosted agent</strong> in agent execution mode: it runs inside your network and polls HCP Terraform outbound, so no inbound firewall rule is needed, while runs keep central variables, logs, and policy. Allow-listing inbound IPs is the thing agents exist to avoid.',
    tags: ['Agents', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-57', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Terraform wants to create something that already exists.',
    hint: 'One word.',
    back: '<strong>Import.</strong> The object is absent from state — created by hand, or removed by <code>state rm</code> — so Terraform plans a create, and apply then fails with an already-exists error from the provider. Adopt it with an <code>import</code> block (reviewable) or <code>terraform import</code>.',
    tags: ['Import', 'Troubleshooting']
  },
  {
    id: 'hashicorp-tfp-fc-58', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What must a team backend provide?',
    hint: 'Three properties.',
    back: '<strong>Shared storage</strong> with access control and encryption at rest, <strong>state locking</strong> so two applies cannot interleave, and <strong>versioning</strong> so a bad write can be rolled back. A laptop plus chat has none of these.',
    tags: ['Backends', 'Collaboration']
  },
  {
    id: 'hashicorp-tfp-fc-59', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Requirements for publishing to a module registry.',
    hint: 'Name, layout, tags.',
    back: 'Repository named <code>terraform-&lt;PROVIDER&gt;-&lt;NAME&gt;</code>, standard structure (<code>main.tf</code>, <code>variables.tf</code>, <code>outputs.tf</code>, README, optional <code>examples/</code> and <code>modules/</code>), and <strong>semver git tags</strong> like <code>v1.2.0</code> which become the version list. No backend block, no exact provider pins.',
    tags: ['Registry', 'Publishing']
  },
  {
    id: 'hashicorp-tfp-fc-60', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Read something you do not manage.',
    hint: 'Read-only, refreshed each plan.',
    back: 'A <strong>data source</strong>: <code>data "aws_vpc" "shared" { filter … }</code>, referenced as <code>data.aws_vpc.shared.id</code>. It never creates, updates, or destroys. A singular data source <em>errors</em> if the query matches more than one object — so filter precisely or use the plural form.',
    tags: ['Data Sources', 'Composition']
  },
  {
    id: 'hashicorp-tfp-fc-61', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'terraform plan -detailed-exitcode — the three codes.',
    hint: '2 is the interesting one.',
    back: '<strong>0</strong> — succeeded, no changes. <strong>1</strong> — error. <strong>2</strong> — succeeded, changes present. Lets a pipeline skip the approval stage entirely when nothing would change, and makes scheduled <em>drift detection</em> a one-line check.',
    tags: ['Exit Codes', 'Automation']
  },
  {
    id: 'hashicorp-tfp-fc-62', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Plan succeeds, apply fails with an authorisation error. Why?',
    hint: 'Two different permission sets.',
    back: 'Plan is mostly <strong>reads</strong> (refresh and data sources); apply performs <strong>writes</strong>. A read-only identity therefore plans happily and fails at the first create. Check the role the runner actually assumed rather than the configuration.',
    tags: ['Permissions', 'Troubleshooting']
  },
  {
    id: 'hashicorp-tfp-fc-63', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Someone deleted the remote state. Infrastructure is untouched.',
    hint: 'Terraform now sees greenfield.',
    back: 'Terraform knows about <strong>nothing</strong> and would plan to create everything again. Recover from backend object <strong>versioning</strong> or a backup; failing that, re-import every resource. There is no automatic rediscovery — refresh only updates entries that already exist.',
    tags: ['State', 'Disaster Recovery']
  },
  {
    id: 'hashicorp-tfp-fc-64', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Run tasks — what are they for?',
    hint: 'External systems, in the run.',
    back: 'HTTP callouts at defined stages (<strong>pre-plan, post-plan, pre-apply</strong>) that let an external tool — a security scanner, a CMDB, a change-management system — inspect the run. Marked <strong>mandatory</strong>, a failing task <em>blocks</em> the run; advisory tasks only report.',
    tags: ['Run Tasks', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-65', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Depend on an entire module.',
    hint: 'It accepts a module address.',
    back: '<code>depends_on = [module.network]</code> waits for <strong>every</strong> resource in that module. Use it when there is no single output to reference; if there is one, referencing it is better because the dependency is then precise and self-documenting.',
    tags: ['depends_on', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-66', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Why are provisioners "a last resort"?',
    hint: 'Outside the model.',
    back: 'They are not represented in the plan, cannot be reliably retried, depend on network reachability and credentials Terraform does not manage, and leave no drift detection. Prefer <strong>baked images</strong> or <strong>cloud-init / user_data</strong>. If you must, understand that a failed provisioner marks the resource <em>tainted</em>.',
    tags: ['Provisioners', 'Best Practices']
  },
  {
    id: 'hashicorp-tfp-fc-67', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Migrating from local to a remote backend.',
    hint: 'init asks you.',
    back: 'Add the backend (or <code>cloud</code>) block and run <code>terraform init</code> — Terraform detects the change and offers to <strong>copy existing state</strong> to the new backend; <code>-migrate-state</code> confirms it non-interactively. Never destroy and recreate, and never hand-upload the file.',
    tags: ['Backends', 'Migration']
  },
  {
    id: 'hashicorp-tfp-fc-68', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Provider produced inconsistent final plan."',
    hint: 'Not your fault.',
    back: 'The provider returned a value during apply that differs from what it promised during plan — a violation of the plugin protocol, i.e. a <strong>provider bug</strong>. Try a different provider version, work around it with <code>ignore_changes</code> on the offending attribute, and report it upstream.',
    tags: ['Providers', 'Bugs']
  },
  {
    id: 'hashicorp-tfp-fc-69', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Accept a manual change instead of reverting it.',
    hint: 'One flag.',
    back: '<code>terraform apply -refresh-only</code> — updates state to match reality and <strong>changes no infrastructure</strong>. A normal apply would revert the manual change. Useful when someone fixed something by hand during an incident and the fix should stand.',
    tags: ['Drift', 'Refresh']
  },
  {
    id: 'hashicorp-tfp-fc-70', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'What can a policy actually see?',
    hint: 'The plan, the configuration, the state, the run.',
    back: 'Sentinel and OPA policies evaluate the <strong>plan JSON</strong> plus configuration, prior state, and run metadata — so they can assert on resource attributes, module sources, cost estimates, and who queued the run. They run <em>between plan and apply</em>, so they gate changes before anything is created.',
    tags: ['Policy', 'Governance']
  },
  {
    id: 'hashicorp-tfp-fc-71', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What belongs in outputs.tf?',
    hint: 'A contract, not a dump.',
    back: 'Exactly what consumers need to reference — ids, ARNs, endpoints, subnet lists — each with a <code>description</code> and, where useful, <code>sensitive = true</code>. Every extra output is a <strong>compatibility commitment</strong>: renaming or removing one later is a breaking change.',
    tags: ['Outputs', 'Interface']
  },
  {
    id: 'hashicorp-tfp-fc-72', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Render a template file.',
    hint: 'One function, not a provider.',
    back: '<code>templatefile("${path.module}/cloud-init.tftpl", { name = var.name })</code>. It replaced the old <code>template_file</code> data source from the deprecated template provider. Plain <code>file()</code> returns literal contents with <strong>no</strong> interpolation.',
    tags: ['templatefile', 'Functions']
  },
  {
    id: 'hashicorp-tfp-fc-73', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Speed up provider downloads across CI jobs.',
    hint: 'Cache or mirror.',
    back: '<code>TF_PLUGIN_CACHE_DIR</code> persisted between jobs, or a <strong>provider mirror</strong> (filesystem or network) configured in the CLI configuration file. Do not commit <code>.terraform</code> — it is large and platform-specific — and do not drop version constraints to "help" caching.',
    tags: ['Performance', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-74', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Plans take twenty minutes. What actually helps?',
    hint: 'Fewer objects, fewer reads.',
    back: '<strong>Split the state</strong> along ownership and rate-of-change lines, and <strong>remove unnecessary data sources</strong> or expensive collection reads. Plan time scales with managed objects and provider round trips. Lowering <code>-parallelism</code> makes it slower, not faster.',
    tags: ['Performance', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-75', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Why can an older Terraform binary refuse to run?',
    hint: 'State remembers who wrote it.',
    back: 'State records the Terraform version that last wrote it, and older binaries <strong>refuse to operate on newer state</strong> to avoid corrupting it. So minor-version upgrades must be coordinated across the team and CI — pin the version with <code>required_version</code> and in the build image.',
    tags: ['Versioning', 'State']
  }
];

export default HASHICORP_TFP_FLASHCARDS_3;
