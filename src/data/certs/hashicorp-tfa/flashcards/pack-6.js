export const HASHICORP_TFA_FLASHCARDS_6 = [
  {
    id: "hashicorp-tfa-fc-126",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: terraform.workspace Interpolation",
    hint: "Dynamic naming based on active workspace.",
    back: "Reference <strong>terraform.workspace</strong> in HCL expressions to dynamically inject the active workspace name into resource names or tags.",
    tags: ["Terraform Workspaces", "terraform.workspace", "Interpolation"]
  },
  {
    id: "hashicorp-tfa-fc-127",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: When Not to Use CLI Workspaces",
    hint: "Why Dev and Prod require separate backends.",
    back: "CLI workspaces <strong>share credentials and backends</strong>; use completely separate directories or Terraform Cloud workspaces to isolate Dev and Prod safely.",
    tags: ["Terraform Workspaces", "Best Practices", "Separation of Environments"]
  },
  {
    id: "hashicorp-tfa-fc-128",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: The default Workspace",
    hint: "The persistent, non-deletable root workspace.",
    back: "Every Terraform project begins in the <strong>default</strong> workspace, which cannot be deleted.",
    tags: ["Terraform Workspaces", "default Workspace", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-fc-129",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: terraform workspace delete",
    hint: "Removing empty named workspaces.",
    back: "Run <strong>terraform workspace delete &lt;name&gt;</strong> from another active workspace to delete an empty named workspace.",
    tags: ["Terraform Workspaces", "terraform workspace delete", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-fc-130",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Workspaces: delete -force",
    hint: "Overriding non-empty state checks.",
    back: "Pass <strong>-force</strong> to <code>terraform workspace delete</code> to remove a workspace containing residual state records.",
    tags: ["Terraform Workspaces", "delete -force", "State Clean-Up"]
  },
  {
    id: "hashicorp-tfa-fc-131",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Double-Slash (//) Subdirectory Syntax",
    hint: "Loading child modules from mono-repos.",
    back: "Use <strong>//</strong> in Git source URLs (e.g. <code>repo.git//modules/vpc</code>) to target modules located in package subdirectories.",
    tags: ["Terraform Modules", "Sub-directory Sources", "// Syntax"]
  },
  {
    id: "hashicorp-tfa-fc-132",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Shallow Module Composition",
    hint: "Avoiding brittle deep nesting hierarchies.",
    back: "Design <strong>shallow, flat module hierarchies</strong> (1\u20132 levels max); deep nesting creates brittle, hard-to-maintain abstractions.",
    tags: ["Terraform Modules", "Module Composition", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-fc-133",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Standard File Structure",
    hint: "main.tf, variables.tf, outputs.tf.",
    back: "Every standard Terraform module should include <strong>main.tf, variables.tf, outputs.tf</strong>, and a <strong>README.md</strong>.",
    tags: ["Terraform Modules", "Standard Structure", "File Conventions"]
  },
  {
    id: "hashicorp-tfa-fc-134",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Module Outputs: sensitive = true",
    hint: "Redacting secrets exposed by child modules.",
    back: "Set <strong>sensitive = true</strong> on child module outputs to prevent passwords or private keys from displaying in terminal output.",
    tags: ["Terraform Modules", "Sensitive Outputs", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-135",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: depends_on Meta-Argument",
    hint: "Sequencing entire modules in the dependency graph.",
    back: "Add <strong>depends_on = [module.&lt;name&gt;]</strong> to a module block to enforce that all resources in the dependency module complete first.",
    tags: ["Terraform Modules", "depends_on", "Module Dependencies"]
  },
  {
    id: "hashicorp-tfa-fc-136",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Supported Remote Sources",
    hint: "S3, GCS, Git, and HTTP archives.",
    back: "Terraform natively supports loading modules from <strong>Amazon S3 buckets, GCS buckets, Git, and HTTPS archives</strong>.",
    tags: ["Terraform Modules", "Supported Sources", "S3 and GCS"]
  },
  {
    id: "hashicorp-tfa-fc-137",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Module Variables: Custom validation Blocks",
    hint: "Enforcing input constraints with custom errors.",
    back: "Use <strong>validation { condition = ... error_message = ... }</strong> inside variable blocks to enforce input constraints at plan time.",
    tags: ["Terraform Modules", "Custom Validation", "Input Variables"]
  },
  {
    id: "hashicorp-tfa-fc-138",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Types: optional() Modifier",
    hint: "Optional attributes with defaults in object types.",
    back: "Use <strong>optional(type, default_value)</strong> within object type definitions to declare optional fields with automatic default fallbacks.",
    tags: ["Terraform Types", "optional()", "Complex Object Types"]
  },
  {
    id: "hashicorp-tfa-fc-139",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Registry: Module Repo Naming Requirement",
    hint: "terraform-&lt;provider&gt;-&lt;name&gt; schema.",
    back: "Public Registry module repositories on GitHub must be named <strong>terraform-&lt;PROVIDER&gt;-&lt;NAME&gt;</strong> to be recognized and indexed.",
    tags: ["Terraform Registry", "Publishing Modules", "Naming Conventions"]
  },
  {
    id: "hashicorp-tfa-fc-140",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform CLI: terraform workspace show",
    hint: "Displaying the currently active workspace name.",
    back: "Run <strong>terraform workspace show</strong> to quickly identify the currently active workspace before running modifications.",
    tags: ["Terraform CLI", "workspace show", "Active Workspace"]
  },
  {
    id: "hashicorp-tfa-fc-141",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Types: list(object({ ... }))",
    hint: "Enforcing structured records in module inputs.",
    back: "Define <strong>list(object({ key = type, ... }))</strong> to accept structured, typed collections in module inputs.",
    tags: ["Terraform Types", "Complex Objects", "Type Constraints"]
  },
  {
    id: "hashicorp-tfa-fc-142",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform 1.1+: Declarative moved Blocks",
    hint: "Refactoring resource addresses in code without destruction.",
    back: "Use declarative <strong>moved { from = ... to = ... }</strong> blocks to rename resources in code without triggering destructive recreations.",
    tags: ["Terraform 1.1+", "moved Blocks", "State Refactoring"]
  },
  {
    id: "hashicorp-tfa-fc-143",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform: Cross-Module moved Statements",
    hint: "Migrating resources into child modules seamlessly.",
    back: "<strong>moved blocks</strong> seamlessly migrate resources across module boundaries (e.g. from root into a child module) without downtime.",
    tags: ["Terraform 1.1+", "moved Blocks", "Cross-Module Refactoring"]
  },
  {
    id: "hashicorp-tfa-fc-144",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform: terraform_remote_state Scope",
    hint: "Exposing only root module outputs.",
    back: "<code>terraform_remote_state</code> can only access values explicitly exposed as <strong>root module outputs</strong> in the upstream project.",
    tags: ["Terraform State", "terraform_remote_state", "Root Outputs"]
  },
  {
    id: "hashicorp-tfa-fc-145",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform: override.tf Files",
    hint: "Non-intrusive argument overrides for local testing.",
    back: "Name files <strong>override.tf</strong> or <strong>*_override.tf</strong> to selectively override arguments without altering tracked source code.",
    tags: ["Terraform", "Override Files", "Development Pattern"]
  },
  {
    id: "hashicorp-tfa-fc-146",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Functions: can() Expression Safety",
    hint: "Safely testing expressions without throwing errors.",
    back: "Use <strong>can(expression)</strong> in validation conditions to safely test regexes or lookups without crashing on invalid inputs.",
    tags: ["Terraform Functions", "can() Function", "Variable Validation"]
  },
  {
    id: "hashicorp-tfa-fc-147",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Unversioned Registry Calls",
    hint: "Defaulting to the newest stable release.",
    back: "Omitting <code>version</code> on registry modules installs the <strong>latest stable release</strong>; always pin versions in production.",
    tags: ["Terraform Modules", "Default Version", "Registry"]
  },
  {
    id: "hashicorp-tfa-fc-148",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Architecture: Directory-Based Environment Isolation",
    hint: "Strict IAM and state isolation.",
    back: "Use <strong>separate directories with distinct backend configurations</strong> to guarantee complete IAM credential and state isolation between Dev and Prod.",
    tags: ["Terraform Architecture", "Environment Isolation", "Directory Layout"]
  },
  {
    id: "hashicorp-tfa-fc-149",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Sibling Module Data Passing",
    hint: "Root module as the communication orchestrator.",
    back: "Sibling modules pass data via the root module: assign <strong>module.&lt;first&gt;.&lt;output&gt;</strong> as an input parameter into the second module.",
    tags: ["Terraform Modules", "Module Orchestration", "Sibling Modules"]
  },
  {
    id: "hashicorp-tfa-fc-150",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d4",
    front: "Terraform Modules: Independent Namespaces",
    hint: "Strict encapsulation without ambient globals.",
    back: "Child modules operate in <strong>isolated namespaces</strong>; all consumed variables must be explicitly defined in that module's <code>variables.tf</code>.",
    tags: ["Terraform Modules", "Encapsulation", "Namespaces"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_6;
