export const HASHICORP_TFP_FLASHCARDS_10 = [
  {
    id: 'hashicorp-tfp-fc-226', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'The three things a plan depends on.',
    hint: 'Diverging plans always come from one of them.',
    back: '<strong>Configuration</strong> + <strong>input variables</strong> + <strong>provider versions</strong>, evaluated against <strong>current state</strong>. Pin the first three and the plan is reproducible; leave any of them floating and two people see different results from the same commit.',
    tags: ['Plan', 'Reproducibility']
  },
  {
    id: 'hashicorp-tfp-fc-227', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Which operations write state, and which only read it?',
    hint: 'More write than you think.',
    back: '<strong>Write:</strong> apply, destroy, refresh-only apply, <code>state mv/rm/push/import</code>, and plan when it persists refreshed state. <strong>Read:</strong> <code>state list/show</code>, <code>output</code>, <code>show</code>, <code>console</code>, <code>graph</code>. Anything that writes takes a lock.',
    tags: ['State', 'Locking']
  },
  {
    id: 'hashicorp-tfp-fc-228', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'A well-formed registry module block.',
    hint: 'Source and version are separate.',
    back: '<code>module "vpc" { source = "terraform-aws-modules/vpc/aws"  version = "~&gt; 5.0" … }</code>. A version suffix in the source, <code>version = "latest"</code>, and a <code>ref</code> argument are all invalid for registry sources — <code>ref</code> belongs to git sources.',
    tags: ['Modules', 'Registry']
  },
  {
    id: 'hashicorp-tfp-fc-229', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What a good nightly Terraform job looks like.',
    hint: 'Report, do not repair.',
    back: 'A <strong>plan-only drift detection run</strong> that reports differences and leaves remediation to a human. An unattended nightly apply can silently revert a deliberate emergency fix — reporting and remediation should be separate decisions.',
    tags: ['Drift', 'Safety']
  },
  {
    id: 'hashicorp-tfp-fc-230', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Making destroys reliable for ephemeral stacks.',
    hint: 'Do not import production habits.',
    back: 'No <code>prevent_destroy</code>, deletion-protection flags as <strong>variables defaulting off</strong> there, and Terraform owning the <strong>whole dependency chain</strong> so it can order deletions itself. Targeted destroys and shared imported resources are what make teardown flaky.',
    tags: ['destroy', 'Ephemeral Environments']
  },
  {
    id: 'hashicorp-tfp-fc-231', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'The three questions that resolve most Terraform incidents.',
    hint: 'Context, ownership, evidence.',
    back: '1. <strong>Which state am I pointed at?</strong> (directory, workspace, backend key). 2. <strong>Who owns this object?</strong> (this configuration, another one, or a human). 3. <strong>What does the evidence say?</strong> (plan diff, events, <code>TF_LOG</code>) — before changing anything.',
    tags: ['Troubleshooting', 'Discipline']
  },
  {
    id: 'hashicorp-tfp-fc-232', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Terraform variables vs environment variables in a workspace.',
    hint: 'Inputs vs credentials.',
    back: '<strong>Terraform variables</strong> feed <code>variable</code> blocks. <strong>Environment variables</strong> are what providers read for credentials (and what <code>TF_*</code> settings use) — mark those sensitive. Hard-coding a credential in a provider block commits it to version control.',
    tags: ['HCP Terraform', 'Variables']
  },
  {
    id: 'hashicorp-tfp-fc-233', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Two module inputs that are almost always a smell.',
    hint: 'They belong to the root.',
    back: '<strong>Credentials</strong> and <strong>backend settings</strong> — plus, usually, region. Those are root-module and provider concerns; a child module cannot even declare a backend. A module should take only inputs describing what to build.',
    tags: ['Modules', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-234', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Drift: the three responses.',
    hint: 'Revert, accept, or cede.',
    back: '<strong>Revert</strong> — a normal apply puts reality back. <strong>Accept</strong> — <code>apply -refresh-only</code> records the manual change into state. <strong>Cede</strong> — <code>ignore_changes</code> on that attribute, because another system legitimately owns it. Choose deliberately.',
    tags: ['Drift', 'Operations']
  },
  {
    id: 'hashicorp-tfp-fc-235', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Everything you can put in a terraform block.',
    hint: 'Five things.',
    back: '<code>required_version</code>, <code>required_providers</code>, <code>backend</code> <em>or</em> <code>cloud</code> (root only, mutually exclusive), and <code>experiments</code>. None of them may use variables, locals, or any expression — which is why partial backend configuration exists.',
    tags: ['Settings', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-236', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'The two exit-code habits worth building.',
    hint: 'One for style, one for change.',
    back: '<code>terraform fmt -check -recursive</code> — non-zero if anything is unformatted, without rewriting the tree. <code>terraform plan -detailed-exitcode</code> — <strong>2</strong> means changes, which drives both drift alerts and skip-the-approval logic.',
    tags: ['CI/CD', 'Exit Codes']
  },
  {
    id: 'hashicorp-tfp-fc-237', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Where does each kind of Terraform error come from?',
    hint: 'Four layers.',
    back: '<strong>Syntax / reference / type</strong> → configuration, caught by <code>validate</code>. <strong>Unknown value / cycle</strong> → the graph, caught at plan. <strong>Auth / quota / already-exists</strong> → the provider and cloud, caught at plan or apply. <strong>Lock / serial / lineage</strong> → the backend.',
    tags: ['Troubleshooting', 'Mental Model']
  },
  {
    id: 'hashicorp-tfp-fc-238', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Sharing modules across two HCP Terraform organisations.',
    hint: 'A private registry is scoped to one.',
    back: 'Either consume a <strong>shared git source with tags</strong> from both, or <strong>publish the same repository into each organisation registry</strong>. Private registries do not span organisations, and copying the files forks maintenance from day one.',
    tags: ['Registry', 'Organisation']
  },
  {
    id: 'hashicorp-tfp-fc-239', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'The full life of a managed resource.',
    hint: 'Five stages.',
    back: '<strong>Declared</strong> in configuration → <strong>planned</strong> against state and refreshed reality → <strong>created</strong> by the provider and written to state → <strong>reconciled</strong> on every subsequent plan (drift, updates, replacement) → <strong>destroyed</strong>, or released via <code>removed</code> / <code>state rm</code>.',
    tags: ['Lifecycle', 'Mental Model']
  },
  {
    id: 'hashicorp-tfp-fc-240', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'The four HCP Terraform gates on a run.',
    hint: 'Who, what, external, human.',
    back: '<strong>Permissions</strong> — who may plan or apply. <strong>Policy sets</strong> — what the plan may contain (advisory / soft / hard). <strong>Run tasks</strong> — external systems that can block. <strong>Manual apply</strong> — a person confirms. Cost estimation feeds the second.',
    tags: ['Governance', 'Runs']
  },
  {
    id: 'hashicorp-tfp-fc-241', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Which volume of Terraform state is safe to expose?',
    hint: 'None of it.',
    back: 'None. State holds <strong>every attribute in plain text</strong>, sensitivity markings included. Treat the state file, the plan file, and verbose run logs as three copies of the same secret material and control access to all three.',
    tags: ['Security', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-242', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What belongs in a saved-plan pipeline, in order?',
    hint: 'Six steps.',
    back: '<code>init</code> → <code>fmt -check</code> → <code>validate</code> → <code>plan -out=tfplan</code> → policy / security scan on <code>show -json tfplan</code> → gated <code>apply tfplan</code>. The artifact carries the reviewed decision from one stage to the next.',
    tags: ['CI/CD', 'Plan File']
  },
  {
    id: 'hashicorp-tfp-fc-243', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What makes a module interface breaking to change?',
    hint: 'Three kinds of change.',
    back: 'Removing or renaming an <strong>input</strong>, removing or renaming an <strong>output</strong>, or changing a <strong>default</strong> in a way that alters existing consumers plans. All three belong in a <em>major</em> version, with a deprecation window first.',
    tags: ['Versioning', 'Interface']
  },
  {
    id: 'hashicorp-tfp-fc-244', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'When is ignore_changes the wrong answer?',
    hint: 'It hides as well as cedes.',
    back: 'When nothing else genuinely owns the attribute — then you are just <strong>hiding drift</strong> you should investigate. And <code>ignore_changes = all</code> is almost always wrong: it blinds the resource entirely. Cede specific attributes to specific owners.',
    tags: ['lifecycle', 'Drift']
  },
  {
    id: 'hashicorp-tfp-fc-245', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Which file is committed, which is never?',
    hint: 'Two lookalikes.',
    back: '<strong>Committed:</strong> <code>.terraform.lock.hcl</code> — provider versions and checksums, for reproducibility. <strong>Never:</strong> <code>*.tfstate</code> — plain-text secrets and merge conflicts waiting to happen. Also ignore <code>.terraform/</code> and secret-bearing tfvars.',
    tags: ['Version Control', 'Lock File']
  },
  {
    id: 'hashicorp-tfp-fc-246', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Three ways to make a plan fail early instead of at apply.',
    hint: 'Shift left within the language.',
    back: '<strong>Type constraints</strong> on variables, <strong>validation</strong> blocks on inputs, and <strong>preconditions</strong> on resources and data sources. Each turns a provider-side rejection minutes into an apply into a clear message during plan.',
    tags: ['Validation', 'Quality']
  },
  {
    id: 'hashicorp-tfp-fc-247', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'The paved-road pattern for a standard.',
    hint: 'Help, then enforce.',
    back: 'Make compliance the <strong>easy default</strong> (a module, provider <code>default_tags</code>, a variable set), <em>then</em> add the <strong>gate</strong> that catches the exceptions. Enforcement without help creates friction and workarounds; help without enforcement never closes the gap.',
    tags: ['Governance', 'Platform Engineering']
  },
  {
    id: 'hashicorp-tfp-fc-248', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Which flags should never become permanent in CI?',
    hint: 'Three of them.',
    back: '<code>-lock=false</code> (removes concurrency protection), <code>-refresh=false</code> (hides drift), and habitual <code>-target</code> (applies a partial graph, leaving state inconsistent). Each is a legitimate one-off tool and a liability as a default.',
    tags: ['CLI', 'Anti-Patterns']
  },
  {
    id: 'hashicorp-tfp-fc-249', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'The module maturity checklist.',
    hint: 'Six items.',
    back: 'Typed and described <strong>inputs</strong> and <strong>outputs</strong>; <strong>no provider or backend blocks</strong>; <strong>semver tags</strong>; a <strong>README</strong> with usage; <strong>examples</strong> exercised by CI; and <strong>tests</strong> (<code>*.tftest.hcl</code>) covering the main paths.',
    tags: ['Modules', 'Quality']
  },
  {
    id: 'hashicorp-tfp-fc-250', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'The one-sentence summary of state.',
    hint: 'Why it exists at all.',
    back: 'State is the <strong>mapping from configuration addresses to real object ids</strong>, plus the last-known attribute values used to compute diffs. That is why addresses matter (<code>moved</code>), why losing state means Terraform sees greenfield, and why state is as sensitive as the infrastructure it describes.',
    tags: ['State', 'Mental Model']
  }
];

export default HASHICORP_TFP_FLASHCARDS_10;
