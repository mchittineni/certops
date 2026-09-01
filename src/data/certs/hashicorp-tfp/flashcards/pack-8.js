export const HASHICORP_TFP_FLASHCARDS_8 = [
  {
    id: 'hashicorp-tfp-fc-176', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'for_each over nested data.',
    hint: 'flatten, then key.',
    back: '<code>for_each</code> iterates <strong>one level</strong>. Build a flat list with a nested <code>for</code>, run it through <code>flatten()</code>, then convert to a map with a <strong>composite key</strong> like <code>"${vpc}-${subnet}"</code>. Do not fall back to <code>count</code> over the total — that reintroduces positional keys.',
    tags: ['flatten', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-177', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Why does terraform output work offline?',
    hint: 'Where do outputs live?',
    back: 'Applied output values are <strong>recorded in state</strong>, so the command reads them from there rather than calling any provider. It is also one more reason sensitive outputs do not make state safe to share.',
    tags: ['Outputs', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-178', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'What makes a Terraform pipeline safe to re-run?',
    hint: 'Four properties.',
    back: 'Reliable <strong>state locking</strong>, applying a <strong>saved plan</strong>, <strong>pinned</strong> provider and module versions, and Terraform own <strong>convergent</strong> apply semantics. Then a retry after a transient failure continues rather than duplicating. <code>-auto-approve</code> only removes a prompt; deleting state guarantees duplication.',
    tags: ['Idempotency', 'CI/CD']
  },
  {
    id: 'hashicorp-tfp-fc-179', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Terraform has no inheritance. So how do environments share configuration?',
    hint: 'Composition.',
    back: 'One <strong>shared module</strong> parameterised by variables, called by <strong>thin root configurations</strong> that pass different values and hold their own state. Not duplicated directories, not conditionals on <code>terraform.workspace</code> scattered through the code.',
    tags: ['Modules', 'Environments']
  },
  {
    id: 'hashicorp-tfp-fc-180', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'What does terraform graph show you?',
    hint: 'Configuration, not infrastructure.',
    back: 'The internal <strong>dependency graph</strong> in DOT format — the edges Terraform derived from references and <code>depends_on</code>, which constrain ordering. It is how you see a cycle. It is not network topology, creation history, or a list of API calls.',
    tags: ['graph', 'Dependencies']
  },
  {
    id: 'hashicorp-tfp-fc-181', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Moving an existing local configuration into HCP Terraform.',
    hint: 'One block, then init.',
    back: 'Add a <code>cloud</code> block naming the organisation and workspace, run <code>terraform init</code> and <strong>confirm the state migration</strong>, then set variables and execution mode in the workspace. Never destroy and recreate; never hand-upload the state file first.',
    tags: ['HCP Terraform', 'Migration']
  },
  {
    id: 'hashicorp-tfp-fc-182', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Address a data source.',
    hint: 'One extra prefix.',
    back: '<code>data.&lt;type&gt;.&lt;name&gt;.&lt;attribute&gt;</code> — for example <code>data.aws_ami.ubuntu.id</code>. Dropping the <code>data.</code> prefix refers to a <em>managed resource</em> of that type, which is a different (and probably non-existent) object.',
    tags: ['Data Sources', 'References']
  },
  {
    id: 'hashicorp-tfp-fc-183', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Consumers keep forking your curated module. What do you do?',
    hint: 'Relieve pressure without abandoning the abstraction.',
    back: 'Add a <strong>small number of well-typed pass-through inputs</strong> for the arguments people genuinely need, and <strong>output resource ids</strong> so callers can attach their own resources around it. Exposing everything makes it a verbose alias; refusing everything causes the forks.',
    tags: ['Modules', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-184', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'When is count still the right tool?',
    hint: 'Two cases.',
    back: '<strong>Conditional creation</strong> (<code>count = var.enabled ? 1 : 0</code>) and instances that are genuinely <strong>interchangeable</strong> with no meaningful identity. Everything else — anything with names, keys, or per-item configuration — wants <code>for_each</code>.',
    tags: ['count', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-185', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Move three resources from the root into a new child module.',
    hint: 'Their addresses change.',
    back: 'Create the module, move the blocks, and add a <code>moved</code> block for each: <code>moved { from = aws_x.this  to = module.new.aws_x.this }</code>. Terraform does not match by type and name across addresses, so without them it destroys and recreates.',
    tags: ['moved', 'Refactoring']
  },
  {
    id: 'hashicorp-tfp-fc-186', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Fifteen root configurations, one hour of CI. Fix?',
    hint: 'Only plan what changed.',
    back: '<strong>Change detection</strong>: work out which roots are affected by the changed files, <em>including shared module paths</em>, and plan only those. Blind parallelism hides the waste; merging the roots destroys isolation; sampling one root misses real breakage.',
    tags: ['CI/CD', 'Monorepo']
  },
  {
    id: 'hashicorp-tfp-fc-187', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Reading the plan symbols.',
    hint: 'Four of them.',
    back: '<code>+</code> create, <code>-</code> destroy, <code>~</code> update in place, <code>-/+</code> destroy then create (<strong>replacement</strong>), and <code>+/-</code> create then destroy when <code>create_before_destroy</code> is set. Spotting an unintended <code>-/+</code> is the main reason to read a plan.',
    tags: ['Plan', 'Review']
  },
  {
    id: 'hashicorp-tfp-fc-188', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Making a huge plan reviewable.',
    hint: 'Summarise, and shrink the source.',
    back: 'Extract change counts and highlight <strong>delete / replace</strong> actions from the plan JSON, collapsing the full text behind a details block — and <strong>reduce configuration size</strong> so a typical change touches fewer resources. <code>-no-color</code> does not shorten anything.',
    tags: ['Review', 'JSON']
  },
  {
    id: 'hashicorp-tfp-fc-189', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What is recorded about the provider in each state entry?',
    hint: 'Its configuration address.',
    back: 'Something like <code>provider["registry.terraform.io/hashicorp/aws"].west</code> — the exact provider <em>configuration</em> that created the object. This is why removing an aliased provider while its resources still exist yields "Provider configuration not present".',
    tags: ['State', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-190', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Intent-based inputs vs raw pass-through.',
    hint: 'Where does correctness live?',
    back: '<strong>Intent</strong> inputs (<code>allow_https_from_internet</code>) let the platform encode and enforce decisions, and are easy to govern. <strong>Raw</strong> pass-through is flexible but pushes correctness back to every caller and makes the module a thin alias. Neither is universally right.',
    tags: ['Interface Design', 'Platform Engineering']
  },
  {
    id: 'hashicorp-tfp-fc-191', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'A plan looks wrong. What do you check first?',
    hint: 'Context beats cleverness.',
    back: 'Which <strong>directory, workspace, backend key, and variable values</strong> the plan actually used. Planning the wrong thing is far more common than a tool defect — and confirming it costs seconds. Never apply "to see what happens".',
    tags: ['Troubleshooting', 'Discipline']
  },
  {
    id: 'hashicorp-tfp-fc-192', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Bootstrapping the backend that will store your state.',
    hint: 'Chicken and egg.',
    back: 'A small <strong>bootstrap configuration with local state</strong> creates the bucket, lock table, and keys — then migrate <em>its own</em> state into what it just created (or provision those few resources outside Terraform once). Terraform never creates backend storage automatically.',
    tags: ['Bootstrap', 'Backends']
  },
  {
    id: 'hashicorp-tfp-fc-193', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Why is a duplicate resource label an error?',
    hint: 'Address uniqueness.',
    back: 'Type + name is the <strong>address</strong>, and state is keyed by it, so two declarations would map to one entry. Splitting them across files changes nothing — Terraform concatenates every <code>.tf</code> in a directory. Use <code>for_each</code> or <code>count</code> for several similar objects.',
    tags: ['Addressing', 'HCL']
  },
  {
    id: 'hashicorp-tfp-fc-194', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Handing resources to another team without downtime.',
    hint: 'Exactly one owner at the end.',
    back: 'The receiving configuration <strong>imports</strong> them (or the entries are <code>state mv</code>-ed across), then the old configuration <strong>removes</strong> them without destroying, and finally the old configuration is deleted. Never destroy-and-recreate, never leave both states holding the same objects.',
    tags: ['Migration', 'Ownership']
  },
  {
    id: 'hashicorp-tfp-fc-195', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'A 2,000-line main.tf. Safest first refactor?',
    hint: 'Addresses must not change.',
    back: 'Split it into <strong>several .tf files in the same directory</strong> by concern — Terraform concatenates them, so addresses, state, and the plan are unchanged. Moving resources into a child module <em>does</em> change addresses and needs <code>moved</code> blocks.',
    tags: ['Structure', 'Refactoring']
  },
  {
    id: 'hashicorp-tfp-fc-196', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'What does the cloud block do?',
    hint: 'It replaces something.',
    back: 'It makes HCP Terraform the <strong>state store and remote execution target</strong> for the configuration, and is mutually exclusive with a <code>backend</code> block. Managing HCP Terraform <em>objects</em> is a different thing — that is the <code>tfe</code> provider.',
    tags: ['cloud block', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-197', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'One module for two clouds?',
    hint: 'Resource types are static.',
    back: 'Write <strong>one module per provider with deliberately parallel interfaces</strong>. Resource types cannot be selected at run time, so a single cross-cloud module degenerates into two disjoint halves guarded by <code>count</code> — harder to read, test, and maintain than two modules.',
    tags: ['Modules', 'Multi-Cloud']
  },
  {
    id: 'hashicorp-tfp-fc-198', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Is a plan file safe to store as a build artifact?',
    hint: 'Treat it like state.',
    back: 'Only with care: it embeds the <strong>values Terraform intends to write</strong>, including secrets, and Terraform does not encrypt it. Restrict who can download build artifacts and keep the retention short. The JSON rendering marks sensitivity but does not remove every value.',
    tags: ['Plan File', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-199', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Same commit, different provider version in CI. Why?',
    hint: 'One file was not committed.',
    back: 'The <strong>dependency lock file</strong> is missing, uncommitted, or being ignored, so CI re-resolved and picked a different version — and provider versions change schemas, defaults, and plan output. Commit <code>.terraform.lock.hcl</code> and stop passing <code>-upgrade</code> in CI.',
    tags: ['Lock File', 'Reproducibility']
  },
  {
    id: 'hashicorp-tfp-fc-200', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'A resource generates a password. How do you limit exposure?',
    hint: 'You cannot keep it out of state.',
    back: 'Terraform must record attribute values to detect drift, so the secret <strong>is</strong> in state. Limit exposure with <strong>encryption at rest</strong>, <strong>tight read access</strong> to state and logs, short-lived credentials, and <strong>rotation</strong> through the system that owns the secret.',
    tags: ['Secrets', 'Compliance']
  }
];

export default HASHICORP_TFP_FLASHCARDS_8;
