export const HASHICORP_TFP_FLASHCARDS_2 = [
  {
    id: 'hashicorp-tfp-fc-26', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Turn a list of objects into a map for for_each.',
    hint: 'Object-form for expression.',
    back: '<code>{ for o in var.items : o.name =&gt; o }</code> — the <code>key =&gt; value</code> form builds a map. Add a filter with <code>if o.enabled</code>. The bracket form <code>[ for … ]</code> builds a list. Keys must be <strong>stable</strong> and known at plan time, or you get mass replacement.',
    tags: ['for expressions', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-27', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Moving resources between two different state files.',
    hint: 'moved blocks will not help you here.',
    back: '<code>moved</code> only works <em>within</em> one state. Across states: back up both, then either <code>terraform state mv -state-out=other.tfstate ADDR ADDR</code>, or <strong>import</strong> into the new configuration and <code>removed</code> (destroy = false) from the old. Never copy a whole state file into a configuration that does not declare those resources.',
    tags: ['State', 'Migration']
  },
  {
    id: 'hashicorp-tfp-fc-28', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Variable precedence, lowest to highest.',
    hint: 'Command line wins.',
    back: '<code>TF_VAR_*</code> environment variables → <code>terraform.tfvars</code> → <code>*.auto.tfvars</code> (alphabetical) → <code>-var-file</code> → <code>-var</code>. Later command-line occurrences beat earlier ones. Only <code>terraform.tfvars</code> and <code>*.auto.tfvars</code> are <strong>auto-loaded</strong> — an arbitrarily named file is silently ignored.',
    tags: ['Variables', 'Precedence']
  },
  {
    id: 'hashicorp-tfp-fc-29', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Valid module source forms.',
    hint: 'Registry, git, local — and the double slash.',
    back: 'Registry: <code>terraform-aws-modules/vpc/aws</code> + <code>version</code>. Git: <code>git::ssh://git@host/org/repo.git//sub/dir?ref=v1.2.0</code> — note <strong>//</strong> for the subdirectory and <code>?ref=</code> for the tag. Local: <code>../modules/network</code> (no version boundary — every consumer moves together).',
    tags: ['Modules', 'Sources']
  },
  {
    id: 'hashicorp-tfp-fc-30', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Variable sets — what problem do they solve?',
    hint: 'Twenty workspaces, one rotation.',
    back: 'They define variables once and apply them to the whole <strong>organisation</strong>, a <strong>project</strong>, or a chosen list of <strong>workspaces</strong> — so rotating a credential or changing standard tags is one edit rather than twenty. Workspace-level variables override set values when both define the same key.',
    tags: ['HCP Terraform', 'Variable Sets']
  },
  {
    id: 'hashicorp-tfp-fc-31', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: '"Provider configuration not present" during destroy.',
    hint: 'State remembers who created each object.',
    back: 'Each state entry records the provider configuration that created it. Removing that configuration (often by deleting a module that declared its own provider) leaves the resources unmanageable. Fix: <strong>temporarily restore an equivalent provider configuration</strong>, destroy or move the resources, then remove it. This is why modules must not declare providers.',
    tags: ['Providers', 'State']
  },
  {
    id: 'hashicorp-tfp-fc-32', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Inspect what Terraform is managing.',
    hint: 'Two commands, scoped.',
    back: '<code>terraform state list [ADDRESS_PREFIX]</code> — the addresses, optionally scoped to a module. <code>terraform state show ADDRESS</code> — the recorded attributes of one resource. Prefer these over downloading the whole state file, which is full of secrets.',
    tags: ['State', 'CLI']
  },
  {
    id: 'hashicorp-tfp-fc-33', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Why is -target a last resort?',
    hint: 'It is semantic, not mechanical.',
    back: 'It applies only <strong>part of the dependency graph</strong>, so values elsewhere can be left stale and the next full plan shows surprising changes. HashiCorp documents it for <em>recovering from errors</em>, not routine speed. It still locks state and works with any backend — the problem is consistency, not mechanics.',
    tags: ['CLI', 'Targeting']
  },
  {
    id: 'hashicorp-tfp-fc-34', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'terraform test in one card.',
    hint: '.tftest.hcl, run, assert.',
    back: 'Files named <code>*.tftest.hcl</code> contain <code>run</code> blocks (<code>command = plan</code> or <code>apply</code>, with their own <code>variables</code>) and <code>assert</code> blocks with a <code>condition</code> and <code>error_message</code>. Applied objects are destroyed at the end. <strong>Mock providers</strong> plus plan-only runs give fast, credential-free tests.',
    tags: ['Testing', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-35', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'Type constraints worth knowing.',
    hint: 'Structural types plus optional().',
    back: '<code>string</code>, <code>number</code>, <code>bool</code>; <code>list()</code>, <code>set()</code>, <code>map()</code>; <code>object({...})</code>, <code>tuple([...])</code>; <code>any</code>. Inside an object, <code>optional(map(string), {})</code> marks an attribute omittable <em>with a per-element default</em> — different from a variable-level default, which only applies when the whole variable is omitted.',
    tags: ['Types', 'Variables']
  },
  {
    id: 'hashicorp-tfp-fc-36', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'What does refresh do — and does it change anything real?',
    hint: 'Read-only.',
    back: 'It reads current attributes from the providers and <strong>updates state to match reality</strong>. It never modifies remote objects. Missing objects are then planned for recreation rather than silently dropped. <code>terraform apply -refresh-only</code> accepts drift into state without changing infrastructure.',
    tags: ['Refresh', 'Drift']
  },
  {
    id: 'hashicorp-tfp-fc-37', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'The cheapest CI checks, and what they cannot catch.',
    hint: 'No credentials required.',
    back: '<code>terraform fmt -check -recursive</code> and <code>terraform validate</code> (after <code>init -backend=false</code>) catch style, syntax, references, types, and bad argument names — offline, in seconds. They <strong>cannot</strong> see quotas, permissions, existing object names, or anything provider-side; that needs a plan.',
    tags: ['validate', 'CI/CD']
  },
  {
    id: 'hashicorp-tfp-fc-38', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Best-practice provider authentication in CI.',
    hint: 'No standing secret at all.',
    back: '<strong>OIDC / workload identity federation</strong> — the CI job exchanges a short-lived signed token for cloud credentials at run time, so there is no long-lived key to leak or rotate. HCP Terraform calls this dynamic provider credentials. Passing keys via <code>-var</code> is the worst option: they leak into process lists and logs.',
    tags: ['Security', 'Credentials']
  },
  {
    id: 'hashicorp-tfp-fc-39', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'Can modules use count and for_each?',
    hint: 'Yes — with one exception.',
    back: 'Yes: <code>module "x" { for_each = var.teams … }</code>, referenced as <code>module.x["platform"].output</code>. The exception: a module that declares its own <code>provider</code> blocks cannot use <code>count</code>, <code>for_each</code>, or <code>depends_on</code> — another reason providers belong in the root.',
    tags: ['Modules', 'for_each']
  },
  {
    id: 'hashicorp-tfp-fc-40', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'CLI workspaces vs HCP Terraform workspaces.',
    hint: 'Same word, very different things.',
    back: '<strong>CLI workspace</strong> — an alternate state within the <em>same</em> backend and configuration; no separate credentials, no separate backend. Weak environment isolation. <strong>HCP Terraform workspace</strong> — a first-class object with its own state, variables, credentials, permissions, and run history.',
    tags: ['Workspaces', 'HCP Terraform']
  },
  {
    id: 'hashicorp-tfp-fc-41', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Why is a state file a secret?',
    hint: 'Sensitive marking does not help here.',
    back: 'It stores <strong>every attribute value in plain text</strong>, including generated passwords, keys, and anything marked sensitive (marking affects display only). So: encrypted remote backend, tight access policies, versioning for recovery, access logging — and never in git.',
    tags: ['State', 'Security']
  },
  {
    id: 'hashicorp-tfp-fc-42', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'depends_on — when do you actually need it?',
    hint: 'Only when there is no reference.',
    back: 'Terraform infers ordering from <strong>references</strong>, so <code>depends_on</code> is only for hidden dependencies — an IAM policy that must exist before an app starts, with no attribute in common. It accepts whole modules too. Overusing it adds false edges and can create cycles.',
    tags: ['depends_on', 'Graph']
  },
  {
    id: 'hashicorp-tfp-fc-43', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'Apply failed halfway. What is the state of the world?',
    hint: 'There is no rollback.',
    back: 'Terraform has <strong>no transactions</strong>: objects created before the failure are already written to state. Fix the cause and run plan + apply again — it continues from where it stopped. Do <em>not</em> restore a state backup (that orphans the created objects) or destroy everything.',
    tags: ['Apply', 'Failure Recovery']
  },
  {
    id: 'hashicorp-tfp-fc-44', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'The core workflow, and where each check fits.',
    hint: 'Cheapest first.',
    back: '<strong>Write → init → plan → apply.</strong> In CI: <code>fmt -check</code> → <code>validate</code> → <code>plan -out</code> → policy and security scans <em>against the plan JSON</em> → gated <code>apply tfplan</code>. Anything that costs credentials or time goes after the free checks.',
    tags: ['Workflow', 'CI/CD']
  },
  {
    id: 'hashicorp-tfp-fc-45', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd2',
    front: 'How granular should a module be?',
    hint: 'Both extremes hurt.',
    back: 'A module should encapsulate <strong>a coherent unit with a stable interface</strong>. Too large: untestable, hard to change, everyone waits on it. Too small (a pass-through wrapper around one resource): pure indirection plus a release process. Plan time scales with resource count, not module count.',
    tags: ['Modules', 'Design']
  },
  {
    id: 'hashicorp-tfp-fc-46', difficulty: 'easy', certId: 'hashicorp-tfp', domainId: 'd1',
    front: 'create_before_destroy — what does it need to work?',
    hint: 'Two things can collide.',
    back: 'It inverts the replacement order so the new object exists before the old is destroyed — essential for zero downtime. It requires that the two can <strong>coexist</strong>: unique names, no exclusive attachment, enough quota. Often paired with <code>name_prefix</code> instead of <code>name</code>.',
    tags: ['lifecycle', 'Zero Downtime']
  },
  {
    id: 'hashicorp-tfp-fc-47', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd6',
    front: 'Private module registry — what does it give you over a git source?',
    hint: 'Discovery and documentation.',
    back: 'Modules published from VCS tags get a short registry address, an enumerated <strong>version list</strong>, and rendered documentation of inputs, outputs, and examples — so consumers can discover and pin them without knowing repository URLs. It is scoped to one organisation.',
    tags: ['Private Registry', 'Modules']
  },
  {
    id: 'hashicorp-tfp-fc-48', difficulty: 'hard', certId: 'hashicorp-tfp', domainId: 'd3',
    front: 'Partial backend configuration — why and how?',
    hint: 'Backends cannot use variables.',
    back: 'Backend blocks accept <strong>no expressions, variables, or locals</strong>. So omit the varying settings and supply them at init: <code>terraform init -backend-config=prod.hcl</code> or <code>-backend-config="key=prod/terraform.tfstate"</code>. This is how one configuration serves several environments.',
    tags: ['Backends', 'Environments']
  },
  {
    id: 'hashicorp-tfp-fc-49', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd5',
    front: 'terraform console — what is it for?',
    hint: 'A REPL with your state loaded.',
    back: 'An interactive evaluator for expressions against the current <strong>configuration and state</strong> — test a gnarly <code>for</code> expression, check what a function returns, inspect a resource attribute, before committing anything. Far faster than plan-driven trial and error.',
    tags: ['console', 'Debugging']
  },
  {
    id: 'hashicorp-tfp-fc-50', difficulty: 'medium', certId: 'hashicorp-tfp', domainId: 'd4',
    front: 'Non-interactive apply flags for a pipeline.',
    hint: 'Never let it prompt.',
    back: 'Apply a <strong>saved plan</strong> (no approval prompt at all), plus <code>-input=false</code> so a missing value is an error rather than a hang, and <code>-no-color</code> for clean logs. Avoid <code>-lock=false</code>. <code>-auto-approve</code> is only for when you are re-planning at apply time.',
    tags: ['Automation', 'CLI']
  }
];

export default HASHICORP_TFP_FLASHCARDS_2;
