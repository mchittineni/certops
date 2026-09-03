export const HASHICORP_TFA_FLASHCARDS_5 = [
  {
    id: "hashicorp-tfa-fc-101",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Inferred Provider Configuration",
    hint: "Automatic provider resolution from resource prefixes.",
    back: "Terraform automatically infers default providers from <strong>resource type prefixes</strong> (e.g. <code>aws_</code> implies the AWS provider) if no explicit provider block is defined.",
    tags: ["Terraform", "Inferred Providers", "Provider Architecture"]
  },
  {
    id: "hashicorp-tfa-fc-102",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: .terraform Directory",
    hint: "Local cache for downloaded modules and provider binaries.",
    back: "Deleting the hidden <strong>.terraform</strong> directory clears downloaded provider plugins and cached modules without affecting configuration source code.",
    tags: ["Terraform CLI", ".terraform Directory", "Maintenance"]
  },
  {
    id: "hashicorp-tfa-fc-103",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: state rm vs. destroy",
    hint: "Untracking from state vs terminating cloud assets.",
    back: "<strong>terraform state rm</strong> untracks resources from state leaving cloud assets running; <strong>terraform destroy</strong> terminates real cloud resources.",
    tags: ["Terraform CLI", "state rm vs destroy", "Safety"]
  },
  {
    id: "hashicorp-tfa-fc-104",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: Multiple -target Flags",
    hint: "Targeting multiple specific resource addresses.",
    back: "You can supply <strong>multiple -target flags</strong> in a single command to scope operations to multiple specific resources simultaneously.",
    tags: ["Terraform CLI", "-target Multiple", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfa-fc-105",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -destroy -auto-approve",
    hint: "Non-interactive destruction in automated scripts.",
    back: "Use <strong>terraform destroy -auto-approve</strong> to tear down all managed infrastructure automatically in non-interactive CI/CD pipelines.",
    tags: ["Terraform CLI", "Automated Teardown", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-fc-106",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -refresh=false Flag",
    hint: "Skipping cloud API queries during planning.",
    back: "Use <strong>-refresh=false</strong> on plan or apply to skip remote cloud API queries, speeding up local planning runs.",
    tags: ["Terraform CLI", "-refresh=false", "Performance"]
  },
  {
    id: "hashicorp-tfa-fc-107",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform Outputs: sensitive = true",
    hint: "Masking secrets in standard terminal output.",
    back: "Outputs marked with <strong>sensitive = true</strong> display as <code>&lt;sensitive&gt;</code> in CLI output, requiring <code>-raw</code> or <code>-json</code> to view values.",
    tags: ["Terraform", "Sensitive Outputs", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-108",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "terraform validate: Attribute Schema Checking",
    hint: "Detecting typos in resource arguments locally.",
    back: "<strong>terraform validate</strong> validates attribute names against provider schemas, catching misspelled arguments like <code>intance_type</code> before deployment.",
    tags: ["Terraform CLI", "terraform validate", "Schema Validation"]
  },
  {
    id: "hashicorp-tfa-fc-109",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform login",
    hint: "Storing credentials in credentials.tfrc.json.",
    back: "Running <strong>terraform login</strong> authenticates with registries and saves API tokens to <code>credentials.tfrc.json</code>.",
    tags: ["Terraform CLI", "terraform login", "Authentication"]
  },
  {
    id: "hashicorp-tfa-fc-110",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform logout",
    hint: "Removing saved API tokens from local disk.",
    back: "Run <strong>terraform logout</strong> to purge saved API tokens from local configuration files on shared workstations.",
    tags: ["Terraform CLI", "terraform logout", "Credential Management"]
  },
  {
    id: "hashicorp-tfa-fc-111",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: CLI Config File (~/.terraformrc)",
    hint: "Configuring global provider installation mirrors.",
    back: "Configure <strong>~/.terraformrc</strong> to set up provider filesystem mirrors and global CLI settings across all projects.",
    tags: ["Terraform CLI", "CLI Configuration", "Filesystem Mirror"]
  },
  {
    id: "hashicorp-tfa-fc-112",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Modern -replace vs. Legacy taint",
    hint: "Previewing recreations before execution.",
    back: "Replace legacy <code>terraform taint</code> with <strong>terraform apply -replace=&lt;address&gt;</strong> to preview and execute resource recreations safely.",
    tags: ["Terraform CLI", "Legacy Taint", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-fc-113",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: Removing Entire Modules from State",
    hint: "Targeting module addresses with state rm.",
    back: "Run <strong>terraform state rm module.&lt;name&gt;</strong> to untrack an entire module and all its child resources from state simultaneously.",
    tags: ["Terraform CLI", "terraform state rm", "Module Management"]
  },
  {
    id: "hashicorp-tfa-fc-114",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Public Registry Format",
    hint: "namespace/name/provider syntax.",
    back: "Public Registry modules follow the <strong>namespace/name/provider</strong> format (e.g. <code>terraform-aws-modules/vpc/aws</code>).",
    tags: ["Terraform Modules", "Registry Source", "Module Sources"]
  },
  {
    id: "hashicorp-tfa-fc-115",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Local Relative Paths",
    hint: "Mandatory leading ./ or ../.",
    back: "Local module sources must start with <strong>./ or ../</strong> (e.g. <code>./modules/vpc</code>) so Terraform recognizes them as relative filesystem paths.",
    tags: ["Terraform Modules", "Local Sources", "Relative Paths"]
  },
  {
    id: "hashicorp-tfa-fc-116",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Git ref Parameter",
    hint: "Pinning Git modules to tags or commits.",
    back: "Append <strong>?ref=&lt;tag_or_sha&gt;</strong> to Git module source URLs to pin modules to specific release tags or commits.",
    tags: ["Terraform Modules", "Git Sources", "ref Parameter"]
  },
  {
    id: "hashicorp-tfa-fc-117",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: version Argument Scope",
    hint: "Registry-only constraint support.",
    back: "The <strong>version</strong> argument is only valid for <strong>Registry modules</strong>; local filesystem and raw Git sources do not support it.",
    tags: ["Terraform Modules", "version Argument", "Registry vs Local"]
  },
  {
    id: "hashicorp-tfa-fc-118",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Accessing Outputs",
    hint: "module.&lt;name&gt;.&lt;output&gt; syntax.",
    back: "Access child module outputs in calling configurations using <strong>module.&lt;module_name&gt;.&lt;output_name&gt;</strong>.",
    tags: ["Terraform Modules", "Module Outputs", "Scope"]
  },
  {
    id: "hashicorp-tfa-fc-119",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Explicit Variable Passing",
    hint: "Strict module encapsulation boundaries.",
    back: "Child modules <strong>never inherit variables automatically</strong>; all inputs must be explicitly passed as arguments in the <code>module</code> block.",
    tags: ["Terraform Modules", "Module Inputs", "Encapsulation"]
  },
  {
    id: "hashicorp-tfa-fc-120",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: terraform get -update",
    hint: "Refreshing remote child module code.",
    back: "Run <strong>terraform get -update</strong> or <code>terraform init</code> to download updated remote module code into <code>.terraform/modules</code>.",
    tags: ["Terraform Modules", "terraform get", "Caching"]
  },
  {
    id: "hashicorp-tfa-fc-121",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: for_each on Modules",
    hint: "Instantiating multiple module copies from maps.",
    back: "Use <strong>for_each</strong> on a <code>module</code> block to provision multiple distinct module instances from a map or set.",
    tags: ["Terraform Modules", "for_each", "Multiple Instances"]
  },
  {
    id: "hashicorp-tfa-fc-122",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Conditional Module Creation with count",
    hint: "Toggling modules via ternary expressions.",
    back: "Use <strong>count = var.enabled ? 1 : 0</strong> on a module block to conditionally create or skip an entire module.",
    tags: ["Terraform Modules", "count", "Conditional Creation"]
  },
  {
    id: "hashicorp-tfa-fc-123",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: providers Map Meta-Argument",
    hint: "Passing aliased providers to child modules.",
    back: "Use <strong>providers = { aws = aws.west }</strong> inside a module block to pass aliased provider configurations to child modules.",
    tags: ["Terraform Modules", "providers Map", "Provider Inheritance"]
  },
  {
    id: "hashicorp-tfa-fc-124",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: terraform.tfstate.d Directory",
    hint: "Directory structure for named workspaces.",
    back: "Named local workspaces store their state files under <strong>terraform.tfstate.d/&lt;workspace&gt;/terraform.tfstate</strong>.",
    tags: ["Terraform Workspaces", "State Storage", "terraform.tfstate.d"]
  },
  {
    id: "hashicorp-tfa-fc-125",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: S3 env:/ Path Prefix",
    hint: "How S3 isolates multi-workspace state.",
    back: "In S3 backends, named workspaces store state under the <strong>env:/&lt;workspace_name&gt;/&lt;key&gt;</strong> path prefix.",
    tags: ["Terraform Workspaces", "S3 Backend", "env:/ Prefix"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_5;
