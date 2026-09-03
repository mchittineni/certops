export const HASHICORP_TFA_FLASHCARDS_3 = [
  {
    id: "hashicorp-tfa-fc-51",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Supported Cost Estimation Providers",
    hint: "AWS, Azure, and Google Cloud.",
    back: "Terraform Cloud natively computes cost deltas for <strong>AWS, Microsoft Azure, and GCP</strong> workloads prior to execution.",
    tags: ["Terraform Cloud", "Cost Estimation", "FinOps"]
  },
  {
    id: "hashicorp-tfa-fc-52",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Audit Trail API",
    hint: "Streaming governance events to enterprise SIEMs.",
    back: "The <strong>Audit Trail API</strong> in Terraform Cloud streams tamper-proof event logs (who ran plans, modified secrets, or read state) to external SIEM platforms.",
    tags: ["Terraform Cloud", "Audit Logging", "Compliance"]
  },
  {
    id: "hashicorp-tfa-fc-53",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Run Triggers",
    hint: "Automating downstream workspace runs.",
    back: "Configure <strong>Run Triggers</strong> in Terraform Cloud to automatically execute runs in downstream workspaces when upstream infrastructure changes.",
    tags: ["Terraform Cloud", "Run Triggers", "Workspace Orchestration"]
  },
  {
    id: "hashicorp-tfa-fc-54",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Sentinel Enforcement Levels: Advisory, Soft, Hard",
    hint: "Strict compliance enforcement.",
    back: "<strong>Hard-Mandatory</strong> policies strictly block execution without override; <strong>Soft-Mandatory</strong> permits authorized admin overrides; <strong>Advisory</strong> only warns.",
    tags: ["Terraform Cloud", "Sentinel", "Enforcement Levels"]
  },
  {
    id: "hashicorp-tfa-fc-55",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "HashiCorp: Terraform Enterprise (TFE)",
    hint: "Self-hosted private deployment for air-gapped compliance.",
    back: "<strong>Terraform Enterprise (TFE)</strong> delivers self-hosted Terraform Cloud capabilities inside private datacenters for strict regulatory compliance.",
    tags: ["Terraform Enterprise", "Self-Hosted", "Air-Gapped"]
  },
  {
    id: "hashicorp-tfa-fc-56",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Agents (TFC Agents)",
    hint: "Provisioning private infrastructure via outbound polling.",
    back: "Deploy <strong>Terraform Cloud Agents</strong> in private networks to execute runs locally via outbound-only HTTPS without opening inbound firewall ports.",
    tags: ["Terraform Cloud", "Agents", "Hybrid Cloud"]
  },
  {
    id: "hashicorp-tfa-fc-57",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Variable Sets",
    hint: "Centrally sharing credentials across workspaces.",
    back: "Use <strong>Variable Sets</strong> in Terraform Cloud to centrally manage and share credentials across multiple workspaces without duplication.",
    tags: ["Terraform Cloud", "Variable Sets", "Credential Management"]
  },
  {
    id: "hashicorp-tfa-fc-58",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Sensitive Variables",
    hint: "Masking secrets in the UI and API.",
    back: "Mark variables as <strong>Sensitive</strong> in Terraform Cloud to permanently mask values from the console UI and API responses.",
    tags: ["Terraform Cloud", "Sensitive Variables", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-59",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: null_resource & terraform_data",
    hint: "Encapsulating standalone provisioners and triggers.",
    back: "Use <strong>null_resource</strong> or modern <strong>terraform_data</strong> to execute standalone provisioners without coupling to physical cloud assets.",
    tags: ["Terraform", "null_resource", "terraform_data"]
  },
  {
    id: "hashicorp-tfa-fc-60",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform 1.4+: terraform_data Resource",
    hint: "Built-in alternative to null_resource.",
    back: "<strong>terraform_data</strong> is built into Terraform Core (1.4+), eliminating the null provider dependency for provisioners and triggers.",
    tags: ["Terraform", "terraform_data", "Built-In Resources"]
  },
  {
    id: "hashicorp-tfa-fc-61",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: -migrate-state vs. -reconfigure",
    hint: "Copying state to new backends safely.",
    back: "Use <strong>terraform init -migrate-state</strong> to copy existing state to a new backend; <strong>-reconfigure</strong> re-initializes while ignoring past state.",
    tags: ["Terraform CLI", "terraform init", "Backend Migration"]
  },
  {
    id: "hashicorp-tfa-fc-62",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "terraform plan: -detailed-exitcode",
    hint: "Programmatic CI/CD exit status codes.",
    back: "Use <strong>-detailed-exitcode</strong> on terraform plan: returns <strong>0</strong> for no changes, <strong>2</strong> if changes exist, and <strong>1</strong> on errors.",
    tags: ["Terraform CLI", "detailed-exitcode", "CI/CD Automation"]
  },
  {
    id: "hashicorp-tfa-fc-63",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Workspace Permissions",
    hint: "Granular Read, Plan, Write, and Admin roles.",
    back: "Grant <strong>Plan permissions</strong> to allow junior engineers to run speculative plans on PRs while restricting <strong>Write (apply)</strong> to lead engineers.",
    tags: ["Terraform Cloud", "RBAC", "Workspace Permissions"]
  },
  {
    id: "hashicorp-tfa-fc-64",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform fmt",
    hint: "Rewriting files into canonical format.",
    back: "Run <strong>terraform fmt</strong> to automatically reformat all HCL files in the current directory to canonical HashiCorp conventions.",
    tags: ["Terraform CLI", "terraform fmt", "Formatting"]
  },
  {
    id: "hashicorp-tfa-fc-65",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform fmt -check",
    hint: "Non-zero exit codes for unformatted code in CI.",
    back: "Use <strong>terraform fmt -check</strong> in CI pipelines to return a non-zero exit code if unformatted Terraform files are detected.",
    tags: ["Terraform CLI", "terraform fmt -check", "CI/CD"]
  },
  {
    id: "hashicorp-tfa-fc-66",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform validate",
    hint: "Static syntax and schema validation.",
    back: "<strong>terraform validate</strong> statically verifies HCL syntax, attribute types, and schemas locally without querying remote cloud APIs.",
    tags: ["Terraform CLI", "terraform validate", "Syntax Checking"]
  },
  {
    id: "hashicorp-tfa-fc-67",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "terraform validate Prerequisite: terraform init",
    hint: "Initializing provider schemas before validation.",
    back: "You must execute <strong>terraform init</strong> before <code>terraform validate</code> so provider schemas are downloaded and accessible locally.",
    tags: ["Terraform CLI", "terraform init", "Validation Prerequisite"]
  },
  {
    id: "hashicorp-tfa-fc-68",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Saving Plans with -out",
    hint: "Ensuring deterministic apply execution.",
    back: "Use <strong>terraform plan -out=&lt;file&gt;</strong> to save the execution plan and apply it deterministically via <code>terraform apply &lt;file&gt;</code>.",
    tags: ["Terraform CLI", "terraform plan -out", "Safe Deployments"]
  },
  {
    id: "hashicorp-tfa-fc-69",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform apply: Applying Saved Plans",
    hint: "Immediate execution without interactive prompts.",
    back: "When passing a saved plan file (<code>terraform apply tfplan</code>), Terraform <strong>does not prompt for confirmation</strong>; it applies immediately.",
    tags: ["Terraform CLI", "terraform apply", "Automation"]
  },
  {
    id: "hashicorp-tfa-fc-70",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -auto-approve Flag",
    hint: "Bypassing interactive confirmation prompts.",
    back: "Use <strong>-auto-approve</strong> with <code>terraform apply</code> or <code>terraform destroy</code> in automated scripts to bypass interactive confirmation prompts.",
    tags: ["Terraform CLI", "-auto-approve", "Non-Interactive"]
  },
  {
    id: "hashicorp-tfa-fc-71",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -target Flag",
    hint: "Scoping runs to specific resources.",
    back: "Use <strong>-target=&lt;resource_address&gt;</strong> for emergency troubleshooting to apply or destroy a single resource and its direct dependencies.",
    tags: ["Terraform CLI", "-target", "Targeted Operations"]
  },
  {
    id: "hashicorp-tfa-fc-72",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -replace Flag",
    hint: "Modern replacement for terraform taint.",
    back: "Use <strong>terraform apply -replace=&lt;address&gt;</strong> to cleanly destroy and recreate an unhealthy resource without editing code.",
    tags: ["Terraform CLI", "-replace", "Recreation"]
  },
  {
    id: "hashicorp-tfa-fc-73",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -refresh-only",
    hint: "Updating state to match reality without changing cloud assets.",
    back: "Use <strong>terraform apply -refresh-only</strong> to update the state file to match out-of-band cloud modifications without modifying cloud infrastructure.",
    tags: ["Terraform CLI", "-refresh-only", "State Refresh"]
  },
  {
    id: "hashicorp-tfa-fc-74",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform state list",
    hint: "Listing all tracked resource addresses.",
    back: "Run <strong>terraform state list</strong> to display all resource addresses currently tracked in the state file.",
    tags: ["Terraform CLI", "terraform state list", "State Inspection"]
  },
  {
    id: "hashicorp-tfa-fc-75",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform state show",
    hint: "Displaying detailed attributes of a specific resource.",
    back: "Execute <strong>terraform state show &lt;resource_address&gt;</strong> to print all attributes and IDs recorded in state for a specific resource.",
    tags: ["Terraform CLI", "terraform state show", "State Inspection"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_3;
