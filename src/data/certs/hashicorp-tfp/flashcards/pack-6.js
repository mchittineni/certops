export const HASHICORP_TFP_FLASHCARDS_6 = [
  {
    id: 'hashicorp-tfp-fc-126', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'The splat operator.',
    hint: 'Project an attribute across instances.',
    back: '<code>aws_instance.web[*].id</code> returns a list of ids across all instances of a <code>count</code> resource. For a <code>for_each</code> resource use <code>values(aws_instance.web)[*].id</code>. The splat goes on the <em>collection</em>, never after the attribute.',
    tags: ['Splat', 'Expressions']
  },
  {
    id: 'hashicorp-tfp-fc-127', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Migrating count → for_each without destroying anything.',
    hint: 'One moved block per instance.',
    back: 'Instance addresses change from <code>this[0]</code> to <code>this["alpha"]</code>, so add a <code>moved</code> block for each: <code>moved { from = aws_x.this[0]  to = aws_x.this["alpha"] }</code>. Terraform re-keys the state entries instead of destroying and recreating.',
    tags: ['moved', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-128', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What can terraform validate never catch?',
    hint: 'Anything remote.',
    back: 'It is an <strong>offline</strong> consistency check — syntax, references, types, argument names. It cannot know about quotas, IAM permissions, name collisions with existing objects, or provider-side rules. Those surface only at plan or apply.',
    tags: ['validate', 'Limits']
  },
  {
    id: 'hashicorp-tfp-fc-129', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Passing a secret into a module.',
    hint: 'Declare it, and it propagates.',
    back: 'Declare the module variable with <code>sensitive = true</code> to document the contract and guarantee redaction inside; Terraform also <strong>propagates sensitivity automatically</strong> from any sensitive value passed in, including to derived expressions. Do not re-export it as an output.',
    tags: ['Modules', 'Sensitive']
  },
  {
    id: 'hashicorp-tfp-fc-130', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Apply times out on one resource.',
    hint: 'Two things to do.',
    back: 'Raise the resource <code>timeouts { create = "60m" }</code> if the provider supports it, and <strong>check whether the cloud operation actually succeeded</strong> — a timeout often leaves a half-created object that the next run will collide with. Do not just retry blindly.',
    tags: ['Timeouts', 'Troubleshooting']
  },
  {
    id: 'hashicorp-tfp-fc-131', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Sentinel or OPA?',
    hint: 'Both are supported.',
    back: 'HCP Terraform accepts policy sets in <strong>Sentinel</strong> or in <strong>Rego (OPA)</strong>, both evaluated against the plan between plan and apply. So an organisation already invested in Rego for Kubernetes admission can standardise on one language across both.',
    tags: ['OPA', 'Sentinel']
  },
  {
    id: 'hashicorp-tfp-fc-132', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Emit a nested block only sometimes.',
    hint: 'Iterate over an empty-or-single collection.',
    back: 'A <code>dynamic</code> block whose <code>for_each</code> is <code>var.logging == null ? [] : [var.logging]</code> — zero iterations means no block, one means one block. Blocks are <em>structural</em>, so you cannot make one disappear by assigning <code>null</code>.',
    tags: ['dynamic', 'Conditionals']
  },
  {
    id: 'hashicorp-tfp-fc-133', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What does selecting a CLI workspace change?',
    hint: 'Exactly one thing, plus an expression.',
    back: 'Which <strong>state</strong> is read and written, within the same backend and configuration — and the value of <code>terraform.workspace</code>. Not the configuration, not the backend, not the credentials. That is precisely why it is weak environment isolation.',
    tags: ['Workspaces', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-134', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Promotion across environments.',
    hint: 'Version, not branch.',
    back: 'Pin a <strong>module version</strong> per environment root and promote by bumping that version: dev → staging → production, each with its own state and its own gate. Never one apply looping over environments, and never mutating a single workspace between applies.',
    tags: ['Promotion', 'Environments']
  },
  {
    id: 'hashicorp-tfp-fc-135', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'When is writing a module the wrong call?',
    hint: 'Pass-through.',
    back: 'When it wraps a single resource and passes every argument straight through with no defaults, validation, or composition — you get indirection plus a release process and encapsulate nothing. Wait until there is real shared behaviour to capture.',
    tags: ['Modules', 'Anti-Patterns']
  },
  {
    id: 'hashicorp-tfp-fc-136', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Provider produced an unexpected new value" / null object.',
    hint: 'Protocol violation.',
    back: 'Terraform caught the provider breaking the plugin contract — a <strong>provider bug</strong>. Capture <code>TF_LOG</code> output, search the provider issue tracker, try a different provider version, and report it. Not a variable, ordering, or lock file problem.',
    tags: ['Providers', 'Bugs']
  },
  {
    id: 'hashicorp-tfp-fc-137', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'HCL comment syntax.',
    hint: 'Three forms, one idiomatic.',
    back: '<code>#</code> single line (idiomatic — <code>terraform fmt</code> normalises to it), <code>//</code> single line, and <code>/* … */</code> block. Use comments for <em>why</em>; the configuration already says what.',
    tags: ['HCL', 'Syntax']
  },
  {
    id: 'hashicorp-tfp-fc-138', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Two configurations manage the same resource and keep reverting each other.',
    hint: 'Not a race — a design fault.',
    back: 'Establish a <strong>single owner</strong>: remove it from one side with a <code>removed</code> block (destroy = false) or <code>state rm</code>, and have that side read the value via a data source or output. Ordering the runs only changes who wins last; <code>ignore_changes</code> on both means nobody manages it.',
    tags: ['Ownership', 'Architecture']
  },
  {
    id: 'hashicorp-tfp-fc-139', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'What do HCP Terraform projects give you?',
    hint: 'A grouping for permissions and variables.',
    back: 'A layer between the organisation and its workspaces: <strong>team permissions</strong> and <strong>variable sets</strong> can be scoped to a project. Group by the team or application that <em>owns</em> the workspaces — not by cloud provider, Terraform version, or alphabet.',
    tags: ['Projects', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-140', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Ordering CI stages by cost.',
    hint: 'Free, offline, then credentials.',
    back: '<code>fmt -check</code> → <code>validate</code> (offline) → <code>plan -out</code> → policy / security scan against the <strong>plan JSON</strong> → gated <code>apply tfplan</code>. Anything that needs credentials or minutes belongs after the checks that need neither.',
    tags: ['CI/CD', 'Pipeline Design']
  },
  {
    id: 'hashicorp-tfp-fc-141', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Override a module default for one environment.',
    hint: 'That is what inputs are for.',
    back: 'Pass the value as an argument in that environment <code>module</code> block. Do <strong>not</strong> edit the default inside the module (changes it for everyone) or fork the module (duplicates maintenance forever).',
    tags: ['Modules', 'Inputs']
  },
  {
    id: 'hashicorp-tfp-fc-142', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Read a nested resource address.',
    hint: 'It is a containment path.',
    back: '<code>module.platform.module.network.aws_subnet.this["a"]</code> = root → module <em>platform</em> → module <em>network</em> → resource <code>aws_subnet.this</code>, instance key <code>"a"</code>. It expresses <strong>containment</strong>, not dependency, and it tells you which directory to open.',
    tags: ['Addressing', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-143', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Renaming a module input without breaking callers.',
    hint: 'There is no aliasing.',
    back: 'Terraform has no variable aliasing, so: accept <strong>both</strong> names for a while, resolve them in a <code>local</code> preferring the new one, document the deprecation (a <code>check</code> block can warn), and remove the old input in the next <strong>major</strong> version.',
    tags: ['Deprecation', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-144', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What is inside a state version?',
    hint: 'Four kinds of thing.',
    back: 'Managed <strong>resource instances</strong> with their attribute values and dependency edges, <strong>output values</strong>, bookkeeping (<strong>serial</strong>, <strong>lineage</strong>, Terraform version), and the provider configuration address for each entry. Not the configuration, not the plan, not provider binaries.',
    tags: ['State', 'Internals']
  },
  {
    id: 'hashicorp-tfp-fc-145', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Restricting which module sources teams may use.',
    hint: 'Policy sees the configuration.',
    back: 'A <strong>hard-mandatory policy</strong> inspecting module sources in the plan, scoped to the production project — it blocks non-compliant runs automatically. Network restrictions are a blunt instrument that also breaks provider downloads; documentation enforces nothing.',
    tags: ['Policy', 'Supply Chain']
  },
  {
    id: 'hashicorp-tfp-fc-146', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Which tfvars files load automatically?',
    hint: 'Two patterns.',
    back: '<code>terraform.tfvars</code> / <code>terraform.tfvars.json</code>, and anything matching <code>*.auto.tfvars</code> / <code>*.auto.tfvars.json</code>. Any other name — <code>prod.tfvars</code>, <code>extra.tfvars</code> — is <strong>silently ignored</strong> unless you pass <code>-var-file</code>.',
    tags: ['Variables', 'tfvars']
  },
  {
    id: 'hashicorp-tfp-fc-147', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'check blocks — how do they differ from preconditions?',
    hint: 'Warning vs failure.',
    back: 'A <code>check</code> block runs <strong>continuous validation</strong> and a failed assertion produces a <em>warning</em>, so the run is not blocked; it can also scope its own data source. Preconditions, postconditions, and variable validation all <strong>fail</strong> the operation.',
    tags: ['check blocks', 'Validation']
  },
  {
    id: 'hashicorp-tfp-fc-148', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Local module paths in a monorepo — the trade-off.',
    hint: 'No version boundary.',
    back: 'Every root reads the module from disk, so a change lands for <strong>all consumers at once</strong>: fast iteration, wide blast radius, no per-consumer pinning. Registry or git sources with tags trade iteration speed for a version boundary. Neither is wrong — pick deliberately.',
    tags: ['Modules', 'Monorepo']
  },
  {
    id: 'hashicorp-tfp-fc-149', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'A cycle error naming a module output and a module input.',
    hint: 'Hoist the shared thing.',
    back: 'The two modules reference each other. Extract whatever both need into a <strong>third module or the root</strong> so both depend on it instead of on each other. Adding <code>depends_on</code> strengthens the cycle; locals cannot cross module boundaries.',
    tags: ['Cycles', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-150', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Encrypting state at rest — what does it take?',
    hint: 'Four backend controls.',
    back: '<strong>Server-side encryption</strong> with a managed key, <strong>access policies</strong> limiting reads to the pipeline identity, <strong>versioning</strong> for recovery, and <strong>access logging</strong> for audit. Sensitivity marking does none of this, and TLS only protects data in transit.',
    tags: ['State', 'Encryption']
  }
];

export default HASHICORP_TFP_FLASHCARDS_6;
