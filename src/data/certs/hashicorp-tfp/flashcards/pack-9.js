export const HASHICORP_TFP_FLASHCARDS_9 = [
  {
    id: 'hashicorp-tfp-fc-201', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Environment-to-value mapping: conditional or lookup?',
    hint: 'Think about the fourth environment.',
    back: 'A <strong>map local plus lookup with a default</strong> keeps the mapping in one readable place and grows by one line per environment. Nested conditionals become unreadable at three branches and unmaintainable at five.',
    tags: ['locals', 'Maps']
  },
  {
    id: 'hashicorp-tfp-fc-202', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Apply succeeded but the missing rule was not restored.',
    hint: 'Terraform only fixes what it manages.',
    back: 'Either the rule is <strong>not in the configuration</strong>, it is an <strong>inline block</strong> on a resource owned elsewhere, it belongs to <strong>another configuration</strong>, or the run had <strong>refresh disabled</strong>. Terraform converges only what its configuration and state describe.',
    tags: ['Drift', 'Ownership']
  },
  {
    id: 'hashicorp-tfp-fc-203', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Select one module from a big git repository.',
    hint: 'Double slash.',
    back: '<code>git::https://host/org/repo.git//modules/vpc?ref=v1.0.0</code> — <strong>//</strong> separates the repository from the subdirectory, and <code>?ref=</code> pins a tag, branch, or commit. A single slash is read as part of the repository path.',
    tags: ['Modules', 'Git']
  },
  {
    id: 'hashicorp-tfp-fc-204', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'How do you prove a state restore was correct?',
    hint: 'One command, one expected result.',
    back: 'A full <code>terraform plan</code> showing <strong>no changes</strong> — that is the only evidence that state, configuration, and reality all agree. File size, a non-empty <code>state list</code>, and a higher serial say nothing about correctness.',
    tags: ['Recovery', 'Verification']
  },
  {
    id: 'hashicorp-tfp-fc-205', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Ordering a change across two states owned by two pipelines.',
    hint: 'Explicit dependency plus a loud failure.',
    back: 'Express the dependency (a <strong>run trigger</strong> or pipeline dependency) <em>and</em> have the consumer <strong>read the producer output</strong>, so it fails clearly if the upstream change has not landed. Scheduling the two a few minutes apart is a race, not a design.',
    tags: ['Orchestration', 'Composition']
  },
  {
    id: 'hashicorp-tfp-fc-206', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Embedding a JSON policy document.',
    hint: 'Do not hand-write JSON.',
    back: 'Build it as an <strong>HCL object and pass it through <code>jsonencode()</code></strong>, or use the provider dedicated policy document data source. The language then checks the syntax and interpolation is type-safe — no more deployments broken by a missing comma.',
    tags: ['jsonencode', 'Policies']
  },
  {
    id: 'hashicorp-tfp-fc-207', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Indented heredoc.',
    hint: 'The dash matters.',
    back: '<code>&lt;&lt;-EOT … EOT</code> strips the common leading indentation so an embedded document stays readable inside a nested block. <code>&lt;&lt;EOT</code> keeps it verbatim. HCL has no single-quoted or backtick strings, and no <code>+</code> concatenation.',
    tags: ['HCL', 'Strings']
  },
  {
    id: 'hashicorp-tfp-fc-208', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Import or recreate? How do you decide?',
    hint: 'What would be lost.',
    back: '<strong>Import</strong> when the object holds state or identity that cannot be cheaply recreated — data, DNS names, certificates, allow-list entries, anything externally referenced. <strong>Recreate</strong> when nothing is lost: it is simpler and guarantees the configuration matches reality.',
    tags: ['Import', 'Brownfield']
  },
  {
    id: 'hashicorp-tfp-fc-209', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Invalid count argument … not known until apply."',
    hint: 'Same root cause as the for_each version.',
    back: 'The count expression depends on an attribute computed during apply, but the <strong>graph is built at plan time</strong>. Derive it from variables, locals, or the length of an input list — or split into two applies. Type conversion and <code>depends_on</code> cannot help.',
    tags: ['count', 'Unknown Values']
  },
  {
    id: 'hashicorp-tfp-fc-210', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'List every provider a configuration needs, including from modules.',
    hint: 'One command.',
    back: '<code>terraform providers</code> — prints the requirements as a tree covering child modules. <code>terraform version</code> shows the CLI and installed provider versions without the tree; <code>terraform providers schema -json</code> dumps full schemas.',
    tags: ['CLI', 'Providers']
  },
  {
    id: 'hashicorp-tfp-fc-211', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'What is a speculative plan?',
    hint: 'It can never be applied.',
    back: 'A <strong>plan-only run</strong> — from a pull request, or from <code>terraform plan</code> against the cloud backend — used purely for review. It uses real state and credentials but has no apply path, which is what makes it safe to run automatically on every PR.',
    tags: ['HCP Terraform', 'Runs']
  },
  {
    id: 'hashicorp-tfp-fc-212', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Reviewing a module pull request — what matters most?',
    hint: 'Interface and impact.',
    back: 'Is the new input <strong>typed, described, and defaulted compatibly</strong>? Does the changed default <strong>alter existing consumers plans</strong> — which would make this a breaking change? Formatting and naming are secondary; a silently changed default is the classic incident.',
    tags: ['Modules', 'Review']
  },
  {
    id: 'hashicorp-tfp-fc-213', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'An autoscaler keeps changing desired capacity and Terraform keeps resetting it.',
    hint: 'Attribute-level ownership.',
    back: '<code>lifecycle { ignore_changes = [desired_capacity] }</code> — the external system owns that one field, Terraform owns the rest of the resource. Removing the resource from management loses everything else, and racing two controllers guarantees churn.',
    tags: ['lifecycle', 'Drift']
  },
  {
    id: 'hashicorp-tfp-fc-214', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Two modules and the root all constrain the same provider. What version is used?',
    hint: 'One provider for the whole configuration.',
    back: 'A <strong>single version satisfying the intersection</strong> of every constraint — and if no such version exists, init fails. Modules do not get their own provider versions, which is exactly why tight pins inside shared modules cause unresolvable conflicts.',
    tags: ['Providers', 'Versioning']
  },
  {
    id: 'hashicorp-tfp-fc-215', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'What is conventionally in versions.tf?',
    hint: 'One block.',
    back: 'The <code>terraform</code> block: <code>required_version</code> and <code>required_providers</code>. Isolating it makes the constraints easy to find and review. Module versions come from git tags, not from any file in the module.',
    tags: ['Modules', 'Conventions']
  },
  {
    id: 'hashicorp-tfp-fc-216', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What happens on the very first apply?',
    hint: 'Empty state, progressive writes.',
    back: 'A new state with a fresh <strong>lineage</strong> is created, everything plans as a <em>create</em>, and each object is written to state <strong>as it is created</strong> — not at the end. That is why a mid-run failure leaves the successful resources recorded and safe to continue from.',
    tags: ['State', 'Apply']
  },
  {
    id: 'hashicorp-tfp-fc-217', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'A provider release has a data-loss bug. Block it organisation-wide.',
    hint: 'Enforce and correct.',
    back: 'A <strong>policy that fails runs using that version</strong>, plus updating shared module and root constraints to exclude it (<code>!= 5.31.0</code> or an upper bound). Enforcement stops the bad path; the constraint fixes the default one. Email alone is not a control.',
    tags: ['Supply Chain', 'Policy']
  },
  {
    id: 'hashicorp-tfp-fc-218', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Terraform in a container image plus required_version — why both?',
    hint: 'They do different jobs.',
    back: 'The <strong>image pin</strong> decides which binary actually runs in CI; <code>required_version</code> turns a mismatch <em>anywhere</em> — a laptop, another pipeline — into an immediate, clear error. Terraform never installs itself from a constraint.',
    tags: ['Versioning', 'Reproducibility']
  },
  {
    id: 'hashicorp-tfp-fc-219', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'What does deleting .terraform cost you?',
    hint: 'One command.',
    back: 'Just a re-<code>init</code> — it is a local cache of providers, modules, and backend settings. <strong>No state is lost</strong>, the committed lock file stays valid and is reused, and the workspace selection is re-established.',
    tags: ['init', 'Fundamentals']
  },
  {
    id: 'hashicorp-tfp-fc-220', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Cross product of two lists.',
    hint: 'One function.',
    back: '<code>setproduct(var.regions, var.sizes)</code> returns every combination as a list of tuples — usually flattened into a keyed map for <code>for_each</code>. <code>zipmap</code> pairs positionally, <code>concat</code> appends, <code>merge</code> combines maps.',
    tags: ['setproduct', 'Functions']
  },
  {
    id: 'hashicorp-tfp-fc-221', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Naming a resource inside a module.',
    hint: 'The address already has context.',
    back: 'Short labels — <code>this</code> or <code>main</code> — because the full address already reads <code>module.logging.aws_s3_bucket.this</code>. Repeating the module name or baking in the environment produces stuttering addresses and couples reusable code to one deployment.',
    tags: ['Modules', 'Naming']
  },
  {
    id: 'hashicorp-tfp-fc-222', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Designing state layout for a platform team plus six product teams.',
    hint: 'Ownership and rate of change.',
    back: 'A <strong>platform state per environment</strong> for networking and shared services, plus <strong>one state per product team per environment</strong>, with product states reading platform outputs. Fast-moving teams then never queue behind slow-moving shared infrastructure.',
    tags: ['Architecture', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-223', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Inspecting state during an incident without leaking secrets.',
    hint: 'Query, do not download.',
    back: '<code>terraform state list</code> and <code>state show &lt;ADDRESS&gt;</code> for just what you need, ideally from the controlled runner. Downloading the whole file, emailing it, or printing it into a CI log spreads every secret it contains into places with weaker controls.',
    tags: ['State', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-224', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'In what order does destroy happen?',
    hint: 'Backwards.',
    back: '<strong>Reverse dependency order</strong> — dependents first, their dependencies after. So when the order looks wrong, the graph is usually <em>missing an edge</em>: add the reference or a <code>depends_on</code>. File order and naming never influence it.',
    tags: ['destroy', 'Graph']
  },
  {
    id: 'hashicorp-tfp-fc-225', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Rolling a new standard out to 200 existing workspaces.',
    hint: 'Escalate enforcement.',
    back: '<strong>Advisory</strong> first to measure the gap, ship a <strong>compliant module and variable set</strong> so complying is cheap, then <strong>soft-mandatory</strong>, then <strong>hard-mandatory</strong> at a communicated deadline. Immediate hard enforcement blocks unrelated urgent work.',
    tags: ['Governance', 'Rollout']
  }
];

export default HASHICORP_TFP_FLASHCARDS_9;
