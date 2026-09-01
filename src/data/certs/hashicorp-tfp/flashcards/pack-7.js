export const HASHICORP_TFP_FLASHCARDS_7 = [
  {
    id: 'hashicorp-tfp-fc-151', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Do child modules inherit aliased providers?',
    hint: 'Only the default one.',
    back: '<strong>No.</strong> Only <em>default</em> (unaliased) provider configurations are inherited implicitly. Anything aliased must be passed explicitly with <code>providers = { … }</code> at <strong>every</strong> level, including from a child to a grandchild.',
    tags: ['Providers', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-152', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Applies keep hitting cloud API throttling.',
    hint: 'Concurrency and volume.',
    back: 'Lower <code>-parallelism</code> (default 10) so fewer operations are in flight, and <strong>split the configuration</strong> so each run touches fewer resources. Some providers also expose retry settings. Locking and the lock file have nothing to do with request rates.',
    tags: ['Rate Limits', 'Performance']
  },
  {
    id: 'hashicorp-tfp-fc-153', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'You deleted a resource block and now plan fails everywhere.',
    hint: 'References resolve statically.',
    back: 'Every reference to the removed address must be updated or removed too — Terraform resolves references from the <strong>configuration</strong> before planning. Not something <code>init</code>, <code>refresh</code>, or a <code>moved</code> block fixes.',
    tags: ['References', 'Refactoring']
  },
  {
    id: 'hashicorp-tfp-fc-154', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Auditing who did what across an organisation.',
    hint: 'Two sources.',
    back: 'The organisation <strong>audit trail</strong> (administrative and run events, exportable for retention) plus per-workspace <strong>run history</strong> and <strong>state versions</strong>. This attribution is one of the strongest arguments against applying from laptops.',
    tags: ['Audit', 'Compliance']
  },
  {
    id: 'hashicorp-tfp-fc-155', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Never put these two functions in a resource name.',
    hint: 'They change every run.',
    back: '<code>uuid()</code> and <code>timestamp()</code>. They produce a new value on every evaluation, so anything derived from them shows a permanent diff and forces endless replacement. Build names from stable inputs, and validate the final pattern and length.',
    tags: ['Functions', 'Naming']
  },
  {
    id: 'hashicorp-tfp-fc-156', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Someone pushed an old state file. Recovery?',
    hint: 'Restore, then prove it.',
    back: 'Restore the correct version from backend <strong>object versioning</strong> or HCP Terraform <strong>state history</strong>, then run a plan and confirm it shows <strong>no changes</strong> — that is the proof. Do not apply the bad plan; it would duplicate live infrastructure.',
    tags: ['State', 'Recovery']
  },
  {
    id: 'hashicorp-tfp-fc-157', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Fast, credential-free module tests.',
    hint: 'Two features together.',
    back: '<code>run</code> blocks with <code>command = plan</code>, plus <strong>mock providers</strong> returning synthetic values. Configuration logic and outputs are exercised without creating anything. Reserve <code>command = apply</code> tests for a sandbox and fewer cases.',
    tags: ['Testing', 'Mocks']
  },
  {
    id: 'hashicorp-tfp-fc-158', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'The trade-off of -refresh=false.',
    hint: 'Speed for accuracy.',
    back: 'Skips provider reads, so plans get much faster on large configurations — but the plan is computed against possibly stale state and <strong>will not show drift</strong>. Reasonable for a quick iteration; dangerous as a permanent pipeline setting.',
    tags: ['Refresh', 'Performance']
  },
  {
    id: 'hashicorp-tfp-fc-159', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'terraform workspace delete on a non-empty workspace.',
    hint: 'It refuses, for a reason.',
    back: 'Terraform refuses unless the state is empty, because deleting it would <strong>orphan the managed resources</strong>. Correct order: <code>destroy</code>, then <code>workspace delete</code>. <code>-force</code> exists but takes on exactly that orphaning risk.',
    tags: ['Workspaces', 'Safety']
  },
  {
    id: 'hashicorp-tfp-fc-160', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Inline nested blocks vs standalone rule resources.',
    hint: 'Who is authoritative?',
    back: 'An <strong>inline block</strong> makes the parent authoritative over the whole set — anything added elsewhere is deleted on the next apply. A <strong>standalone rule resource</strong> allows shared ownership. Never mix both forms on the same object: they will fight every run.',
    tags: ['Resources', 'Ownership']
  },
  {
    id: 'hashicorp-tfp-fc-161', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Auto-apply: where does it belong?',
    hint: 'It is per workspace.',
    back: 'Enabled on <strong>development</strong> workspaces for fast feedback, disabled on <strong>production</strong> where a person with apply permission confirms the plan. It is a per-workspace setting, so the two can differ — which is the whole point.',
    tags: ['HCP Terraform', 'Workflow']
  },
  {
    id: 'hashicorp-tfp-fc-162', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Make a variable genuinely required in automation.',
    hint: 'Two halves.',
    back: 'Declare it with <strong>no default</strong>, and run with <code>-input=false</code> so a missing value is a hard error instead of an interactive prompt that hangs the pipeline. <code>default = null</code> makes it optional-with-null, not required.',
    tags: ['Variables', 'Automation']
  },
  {
    id: 'hashicorp-tfp-fc-163', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Which half is broken — core or provider?',
    hint: 'Two log variables.',
    back: '<code>TF_LOG_CORE</code> and <code>TF_LOG_PROVIDER</code> set levels independently, so you can silence one side and read the other. Essential before filing a bug: it tells you whether Terraform or the plugin misbehaved.',
    tags: ['Logging', 'Debugging']
  },
  {
    id: 'hashicorp-tfp-fc-164', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Rolling out a new module version to thirty consumers.',
    hint: 'Canary, then widen.',
    back: 'Adopt it in a <strong>low-risk environment</strong> first, run its tests and review the plan there, then promote the constraint outward. Semantic versioning states intent; it does not guarantee behaviour. Big-bang adoption maximises the blast radius of a regression.',
    tags: ['Modules', 'Upgrades']
  },
  {
    id: 'hashicorp-tfp-fc-165', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'State file is hundreds of megabytes and plans time out.',
    hint: 'Symptom, not cause.',
    back: 'Size is a symptom of <strong>too many resources in one configuration</strong>. Split by ownership and lifecycle, and drop resources that no longer need managing. Compression, longer timeouts, and switching to the local backend all postpone or worsen the problem.',
    tags: ['State', 'Scaling']
  },
  {
    id: 'hashicorp-tfp-fc-166', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What does moving applies off laptops actually fix?',
    hint: 'Four things.',
    back: 'Inconsistent <strong>tool and provider versions</strong>, unaudited use of <strong>personal credentials</strong>, no shared <strong>run history</strong>, and no enforced <strong>review or policy gate</strong>. Matching everyone Terraform version solves only the first.',
    tags: ['Operations', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-167', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Twenty near-identical rule blocks. Refactor how?',
    hint: 'Separate data from shape.',
    back: 'Move the varying data into a <strong>map local or variable</strong> and create the rules with <code>for_each</code>. One resource definition, one data table — reviewable, and stable when entries are added or removed. Not a module around twenty literal blocks, and not generated HCL.',
    tags: ['for_each', 'Refactoring']
  },
  {
    id: 'hashicorp-tfp-fc-168', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'A hard-mandatory policy blocks an urgent production fix.',
    hint: 'There is no override, by design.',
    back: 'Either <strong>change the plan to comply</strong>, or have an authorised owner <strong>amend the policy set</strong> — both leave an audit record. Re-queuing re-evaluates the same policy, and switching execution mode to dodge the control is a governance failure, not a workaround.',
    tags: ['Policy', 'Incident Response']
  },
  {
    id: 'hashicorp-tfp-fc-169', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Keeping the examples directory honest.',
    hint: 'Execute it.',
    back: 'Treat each example as a real root configuration that CI <strong>plans or tests against the local module source</strong>. Unexecuted snippets rot within months, and pointing them at the published registry version stops them validating the change under review.',
    tags: ['Modules', 'Testing']
  },
  {
    id: 'hashicorp-tfp-fc-170', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'A singular data source returns multiple matches.',
    hint: 'Two ways out.',
    back: '<strong>Tighten the filters</strong> so exactly one object matches, or switch to the <strong>plural</strong> data source and select deterministically (sort, then pick). A singular data source is contractually one object — <code>count</code> and <code>try()</code> do not change what the query matches.',
    tags: ['Data Sources', 'Determinism']
  },
  {
    id: 'hashicorp-tfp-fc-171', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What is the state serial for?',
    hint: 'Optimistic concurrency.',
    back: 'It increments on every write, so the backend can reject a write based on a stale read — a <strong>serial mismatch</strong> means another run wrote in between. Re-plan against current state. Distinct from a <em>lineage</em> mismatch, which means an entirely different state history.',
    tags: ['State', 'Concurrency']
  },
  {
    id: 'hashicorp-tfp-fc-172', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Making a policy gate fail closed.',
    hint: 'Unavailable is not a pass.',
    back: 'If the check cannot run, <strong>block the apply</strong> — with bounded retries for transient errors. A gate that silently passes when its service is down is not a gate. Evaluating after apply means the change has already landed.',
    tags: ['CI/CD', 'Safety']
  },
  {
    id: 'hashicorp-tfp-fc-173', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Your for_each keys come from a data source and everything keeps replacing.',
    hint: 'Key stability.',
    back: 'The data source returns values in a different order or with different content, so the <strong>keys change</strong> and Terraform sees new instances. Key on stable business identifiers, and sort or filter the source data deterministically. Disabling refresh only hides it.',
    tags: ['for_each', 'Determinism']
  },
  {
    id: 'hashicorp-tfp-fc-174', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Who can download raw state in HCP Terraform?',
    hint: 'A separate capability.',
    back: 'Access to raw <strong>state versions</strong> is a distinct permission, not implied by plan or write access — grant it deliberately, because state contains every secret in plain text. Sensitivity marking and execution mode have no effect on it.',
    tags: ['Permissions', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-175', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What should versions.tf contain in a shared module?',
    hint: 'Declare, do not configure or pin hard.',
    back: '<code>required_providers</code> with <strong>source addresses and permissive lower bounds</strong>, plus a <code>required_version</code>. No <code>provider</code> blocks, no <code>backend</code> block, and no exact provider pins — a hard pin inside a module can make it impossible to combine with others.',
    tags: ['Modules', 'Versioning']
  }
];

export default HASHICORP_TFP_FLASHCARDS_7;
