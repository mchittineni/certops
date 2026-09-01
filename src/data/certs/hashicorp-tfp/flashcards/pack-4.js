export const HASHICORP_TFP_FLASHCARDS_4 = [
  {
    id: 'hashicorp-tfp-fc-76', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'merge() argument order.',
    hint: 'Later wins.',
    back: '<code>merge(local.default_tags, var.tags)</code> — later arguments override earlier ones, so the caller map goes <strong>last</strong> if callers should win. Reverse the order and your defaults silently clobber caller intent. <code>concat</code> is for lists; <code>setunion</code> for sets.',
    tags: ['Functions', 'Tags']
  },
  {
    id: 'hashicorp-tfp-fc-77', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What determines blast radius in Terraform?',
    hint: 'Not the module boundary.',
    back: 'The <strong>state boundary</strong>. Everything in one state is planned, locked, and applied together, so one mistake can touch all of it. Split by <em>ownership</em> and <em>rate of change</em>, and wire the pieces together with outputs or data sources. Modules organise code; states organise risk.',
    tags: ['State', 'Architecture']
  },
  {
    id: 'hashicorp-tfp-fc-78', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What makes a directory the root module?',
    hint: 'Not its name.',
    back: 'The <strong>working directory Terraform runs in</strong>. Its <code>.tf</code> files are the root module; <code>module</code> blocks in them call children. One repository can hold many roots. Only a root module may declare a <code>backend</code> or <code>cloud</code> block.',
    tags: ['Modules', 'Fundamentals']
  },
  {
    id: 'hashicorp-tfp-fc-79', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Detect drift without correcting it.',
    hint: 'Scheduled, plan-only.',
    back: 'Run <code>terraform plan -detailed-exitcode</code> on a schedule and alert on exit code <strong>2</strong>; HCP Terraform packages this as <strong>health assessments</strong>. A nightly <em>apply</em> would silently revert deliberate emergency fixes — reporting and remediation should be separate decisions.',
    tags: ['Drift', 'Automation']
  },
  {
    id: 'hashicorp-tfp-fc-80', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Reference an instance created with for_each.',
    hint: 'Square brackets, string key.',
    back: '<code>aws_subnet.this["prod"].id</code>. With <code>count</code> it is a numeric index: <code>aws_subnet.this[0].id</code>, and <code>aws_subnet.this[*].id</code> splats every id into a list. <code>each.key</code> / <code>each.value</code> are only in scope <em>inside</em> the block that declares <code>for_each</code>.',
    tags: ['for_each', 'References']
  },
  {
    id: 'hashicorp-tfp-fc-81', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Why can a sensitive value not be a for_each key?',
    hint: 'Where do keys show up?',
    back: 'Instance keys become part of the <strong>resource address</strong>, which is printed in plans, logs, and state listings — so using a secret would expose it everywhere. Key on something non-secret. Reaching for <code>nonsensitive()</code> strips a safety marking and should be rare and justified.',
    tags: ['Sensitive', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-82', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Share outputs between HCP Terraform workspaces.',
    hint: 'A data source plus a permission.',
    back: 'Publish outputs in the producer, enable <strong>remote state sharing</strong> to the consuming workspaces, and read them with the <code>tfe_outputs</code> data source (or <code>terraform_remote_state</code> with the cloud backend). One owner, explicit permission, auditable.',
    tags: ['Remote State', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-83', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Get an output value for a shell script.',
    hint: 'Two useful flags.',
    back: '<code>terraform output -raw endpoint</code> for a bare string, <code>terraform output -json</code> for everything structured. Outputs are read from <strong>state</strong>, which is why the command works without contacting any provider.',
    tags: ['Outputs', 'CLI']
  },
  {
    id: 'hashicorp-tfp-fc-84', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'How deep should module nesting go?',
    hint: 'Each level costs plumbing.',
    back: 'Usually <strong>one or two levels</strong>. Terraform permits arbitrary depth, but every layer adds pass-through variables and outputs and obscures where a value came from. Prefer a thin root composing a few focused modules over a deep tree.',
    tags: ['Modules', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-85', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'replace_triggered_by — what is it for?',
    hint: 'A declarative taint.',
    back: '<code>lifecycle { replace_triggered_by = [aws_launch_configuration.this] }</code> recreates <em>this</em> resource whenever the referenced resource or attribute changes — even when nothing on this resource forces replacement. It is the reviewable, in-configuration version of a manual taint.',
    tags: ['lifecycle', 'Replacement']
  },
  {
    id: 'hashicorp-tfp-fc-86', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Reference to undeclared resource" for something you can see in the code.',
    hint: 'Scope.',
    back: 'Resource addresses are <strong>scoped to the module that declares them</strong>. A root module cannot reference <code>aws_subnet.private</code> declared in a child — it must go through a child <strong>output</strong>. Same rule in reverse: a child cannot see root resources except through its variables.',
    tags: ['Modules', 'Scope']
  },
  {
    id: 'hashicorp-tfp-fc-87', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What does terraform state rm do?',
    hint: 'Nothing to the cloud.',
    back: 'Terraform <strong>forgets</strong> the resource; the real object keeps running, unmanaged. If the configuration still declares it, the next plan proposes a <em>create</em> that will collide. The declarative equivalent is a <code>removed</code> block with <code>lifecycle { destroy = false }</code>.',
    tags: ['State', 'CLI']
  },
  {
    id: 'hashicorp-tfp-fc-88', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Two providers, two regions, one configuration.',
    hint: 'alias.',
    back: 'A default <code>provider "aws" {}</code> plus <code>provider "aws" { alias = "west"  region = "us-west-2" }</code>, and resources choose with <code>provider = aws.west</code>. Modules receive them via <code>providers = { aws = aws.west }</code>. Aliased providers are <strong>not</strong> inherited implicitly by child modules.',
    tags: ['Providers', 'Aliases']
  },
  {
    id: 'hashicorp-tfp-fc-89', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Shipping a breaking change to a shared module.',
    hint: 'Additive first, removal later.',
    back: 'Add the new behaviour behind an <strong>optional input with a backwards-compatible default</strong>, release it as a <em>minor</em> version, document the deprecation, then remove the old path in the next <strong>major</strong> version. Consumers pinned with <code>~&gt; 2.0</code> upgrade when they choose.',
    tags: ['Versioning', 'Compatibility']
  },
  {
    id: 'hashicorp-tfp-fc-90', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'required_version vs required_providers.',
    hint: 'CLI vs plugins.',
    back: 'Both live in the <code>terraform</code> block (conventionally <code>versions.tf</code>). <code>required_version = "~&gt; 1.6"</code> constrains the <strong>CLI</strong>. <code>required_providers</code> maps each local provider name to a <code>source</code> address and a <code>version</code> constraint. Neither installs anything by itself.',
    tags: ['Settings', 'Versioning']
  },
  {
    id: 'hashicorp-tfp-fc-91', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Who can approve an apply?',
    hint: 'Permissions, not policy.',
    back: '<strong>Workspace team permissions</strong> — read, plan, write, admin, or custom. Grant developers <em>plan</em> and the platform team <em>apply</em>. Policies gate <em>what</em> may change; permissions gate <em>who</em> may change it. Auto-apply removes the gate entirely.',
    tags: ['RBAC', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-92', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Two people plan the same commit and see different results.',
    hint: 'Inputs or dependencies.',
    back: 'Plan output depends on configuration + <strong>variables</strong> + <strong>provider versions</strong> + current state. So: an uncommitted <code>tfvars</code>, a stray <code>TF_VAR_</code> in one shell, or a bypassed lock file resolving a different provider. Block ordering and colour settings change nothing.',
    tags: ['Reproducibility', 'Troubleshooting']
  },
  {
    id: 'hashicorp-tfp-fc-93', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What is state lineage, and when do you meet it?',
    hint: 'A mismatch error.',
    back: 'A unique identifier assigned when a state is first created. A <strong>lineage mismatch</strong> means you are writing a state with a different history than the one stored — usually the wrong backend key, the wrong workspace, or a restored file from elsewhere. Terraform refuses rather than conflating two histories.',
    tags: ['State', 'Lineage']
  },
  {
    id: 'hashicorp-tfp-fc-94', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Where do machine-wide Terraform settings live?',
    hint: 'Not in the configuration.',
    back: 'The <strong>CLI configuration file</strong>: <code>~/.terraformrc</code> (or <code>%APPDATA%\\terraform.rc</code>). It holds registry <code>credentials</code>, <code>provider_installation</code> blocks for mirrors and dev overrides, and <code>plugin_cache_dir</code>. Nothing here is per-configuration.',
    tags: ['CLI Configuration', 'Mirrors']
  },
  {
    id: 'hashicorp-tfp-fc-95', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Standard module file layout.',
    hint: 'Four files plus a README.',
    back: '<code>main.tf</code> (resources), <code>variables.tf</code> (inputs), <code>outputs.tf</code> (results), <code>versions.tf</code> (terraform + required_providers), <code>README.md</code>, plus optional <code>examples/</code> and nested <code>modules/</code>. Registries rely on this to render documentation.',
    tags: ['Modules', 'Structure']
  },
  {
    id: 'hashicorp-tfp-fc-96', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'try() vs can() vs coalesce() vs lookup().',
    hint: 'Four different failure modes.',
    back: '<code>try(a, b)</code> — first argument that evaluates without error. <code>can(expr)</code> — boolean "did it evaluate?", the idiomatic helper inside <code>validation</code>. <code>coalesce(a, b)</code> — first <strong>non-null</strong> value. <code>lookup(map, key, default)</code> — map access with a fallback.',
    tags: ['Functions', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-97', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Managing HCP Terraform itself as code.',
    hint: 'There is a provider for it.',
    back: 'The <strong>tfe provider</strong>: declare workspaces, variable sets, teams, permissions, policy sets, and run triggers from a dedicated administration configuration. Turns control-plane drift into reviewable pull requests instead of undocumented UI clicks.',
    tags: ['tfe provider', 'Platform']
  },
  {
    id: 'hashicorp-tfp-fc-98', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'A destroy plan lists far more than expected. Stop — what do you check?',
    hint: 'Which state are you pointed at?',
    back: 'Destroy covers exactly what is in the <strong>current state</strong>, so an oversized list almost always means the wrong context: wrong backend key, wrong CLI workspace, wrong HCP Terraform workspace, wrong directory. Verify all four <em>before</em> typing yes.',
    tags: ['destroy', 'Safety']
  },
  {
    id: 'hashicorp-tfp-fc-99', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Renaming a module call — what does Terraform plan?',
    hint: 'Addresses are state keys.',
    back: '<strong>Destroy and recreate everything under it</strong>, because every resource address beneath the module changed. Add <code>moved { from = module.net  to = module.network }</code> and Terraform re-keys the state entries instead. The same applies to moving resources into or out of a module.',
    tags: ['moved', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-100', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Terraform .gitignore essentials.',
    hint: 'One of them is committed, contrary to instinct.',
    back: '<strong>Ignore:</strong> <code>.terraform/</code>, <code>*.tfstate</code>, <code>*.tfstate.backup</code>, <code>crash.log</code>, any secret-bearing <code>*.tfvars</code>. <strong>Commit:</strong> the configuration and <code>.terraform.lock.hcl</code> — that one is deliberate, for reproducible provider resolution.',
    tags: ['Version Control', 'Hygiene']
  }
];

export default HASHICORP_TFP_FLASHCARDS_4;
