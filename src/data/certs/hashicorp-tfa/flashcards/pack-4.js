export const HASHICORP_TFA_FLASHCARDS_4 = [
  {
    id: "hashicorp-tfa-fc-76",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform state mv",
    hint: "Renaming resources in state without cloud destruction.",
    back: "Use <strong>terraform state mv &lt;old&gt; &lt;new&gt;</strong> to rename resources in state, preventing destruction when refactoring code.",
    tags: ["Terraform CLI", "terraform state mv", "Refactoring"]
  },
  {
    id: "hashicorp-tfa-fc-77",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform state rm",
    hint: "Stopping management without destroying cloud assets.",
    back: "Run <strong>terraform state rm &lt;address&gt;</strong> to stop managing a resource in Terraform without terminating the real cloud asset.",
    tags: ["Terraform CLI", "terraform state rm", "Untracking Resources"]
  },
  {
    id: "hashicorp-tfa-fc-78",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform state pull",
    hint: "Exporting raw state JSON from remote backends.",
    back: "Run <strong>terraform state pull</strong> to download remote state and stream raw JSON to stdout for inspection or scripting.",
    tags: ["Terraform CLI", "terraform state pull", "Debugging"]
  },
  {
    id: "hashicorp-tfa-fc-79",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform import",
    hint: "Bringing pre-existing cloud assets under Terraform management.",
    back: "Execute <strong>terraform import &lt;address&gt; &lt;cloud_id&gt;</strong> to link existing cloud infrastructure into the state file.",
    tags: ["Terraform CLI", "terraform import", "Importing Infrastructure"]
  },
  {
    id: "hashicorp-tfa-fc-80",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform 1.5+: Declarative import Blocks",
    hint: "Importing resources via code and auto-generating HCL.",
    back: "Use <strong>import { to = ... id = ... }</strong> blocks in Terraform 1.5+ to import existing infrastructure declaratively via <code>terraform plan</code>.",
    tags: ["Terraform 1.5+", "import Blocks", "Declarative Import"]
  },
  {
    id: "hashicorp-tfa-fc-81",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform console",
    hint: "Interactive REPL for testing HCL expressions.",
    back: "Launch <strong>terraform console</strong> to test functions, filters, and state expressions interactively before adding them to code.",
    tags: ["Terraform CLI", "terraform console", "Interactive REPL"]
  },
  {
    id: "hashicorp-tfa-fc-82",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform output -raw",
    hint: "Extracting unquoted strings for shell scripts.",
    back: "Use <strong>terraform output -raw &lt;name&gt;</strong> to extract raw unquoted output values for automated scripting.",
    tags: ["Terraform CLI", "terraform output -raw", "Outputs"]
  },
  {
    id: "hashicorp-tfa-fc-83",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform output -json",
    hint: "Streaming all outputs in structured JSON.",
    back: "Run <strong>terraform output -json</strong> to export all defined outputs in structured JSON format for automated pipelines.",
    tags: ["Terraform CLI", "terraform output -json", "JSON Parsing"]
  },
  {
    id: "hashicorp-tfa-fc-84",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform graph",
    hint: "Generating Graphviz DOT dependency diagrams.",
    back: "Execute <strong>terraform graph</strong> to output the Directed Acyclic Graph in DOT format for visualization with Graphviz.",
    tags: ["Terraform CLI", "terraform graph", "Visualization"]
  },
  {
    id: "hashicorp-tfa-fc-85",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: TF_LOG Environment Variable",
    hint: "TRACE and DEBUG logging levels.",
    back: "Set <strong>TF_LOG=DEBUG</strong> or <strong>TF_LOG=TRACE</strong> to view detailed internal logs and HTTP request/response traces.",
    tags: ["Terraform CLI", "TF_LOG", "Debugging"]
  },
  {
    id: "hashicorp-tfa-fc-86",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: TF_LOG_PATH",
    hint: "Persisting debug logs to disk.",
    back: "Set <strong>TF_LOG_PATH=&lt;path&gt;</strong> alongside <code>TF_LOG</code> to redirect verbose debug logs to a local disk file.",
    tags: ["Terraform CLI", "TF_LOG_PATH", "Logging"]
  },
  {
    id: "hashicorp-tfa-fc-87",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -var Flag",
    hint: "Passing variable values via CLI.",
    back: "Pass <strong>-var=\"key=value\"</strong> to override input variable values directly on the command line.",
    tags: ["Terraform CLI", "-var Flag", "Variables"]
  },
  {
    id: "hashicorp-tfa-fc-88",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -var-file Flag",
    hint: "Loading environment-specific variable files.",
    back: "Use <strong>-var-file=&lt;file.tfvars&gt;</strong> to load variable values from dedicated environment configuration files.",
    tags: ["Terraform CLI", "-var-file", "Environment Configuration"]
  },
  {
    id: "hashicorp-tfa-fc-89",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Automatic .auto.tfvars Loading",
    hint: "Zero-flag variable loading.",
    back: "Terraform automatically loads all files ending in <strong>.auto.tfvars</strong> or <strong>.auto.tfvars.json</strong> without requiring CLI flags.",
    tags: ["Terraform", ".auto.tfvars", "Variable Loading"]
  },
  {
    id: "hashicorp-tfa-fc-90",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: TF_VAR_ Prefix",
    hint: "Injecting secrets via shell environment variables.",
    back: "Prefix environment variables with <strong>TF_VAR_&lt;name&gt;</strong> to populate input variables automatically without saving secrets to disk.",
    tags: ["Terraform CLI", "TF_VAR_", "Environment Variables"]
  },
  {
    id: "hashicorp-tfa-fc-91",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Variable Precedence Hierarchy",
    hint: "Defaults &lt; Env Vars &lt; tfvars &lt; CLI flags.",
    back: "Variable values passed on the <strong>command line (-var / -var-file) take highest precedence</strong>, overriding tfvars and environment variables.",
    tags: ["Terraform", "Variable Precedence", "Hierarchy"]
  },
  {
    id: "hashicorp-tfa-fc-92",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -reconfigure Flag",
    hint: "Reinitializing backends from scratch.",
    back: "Use <strong>terraform init -reconfigure</strong> to reconfigure the backend cleanly while disregarding past cached backend configurations.",
    tags: ["Terraform CLI", "-reconfigure", "Backend Initialization"]
  },
  {
    id: "hashicorp-tfa-fc-93",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -plugin-dir Flag",
    hint: "Offline provider loading in air-gapped environments.",
    back: "Pass <strong>-plugin-dir=&lt;dir&gt;</strong> to force <code>terraform init</code> to load providers exclusively from local disk without internet access.",
    tags: ["Terraform CLI", "-plugin-dir", "Air-Gapped"]
  },
  {
    id: "hashicorp-tfa-fc-94",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "terraform init: -upgrade Flag",
    hint: "Upgrading both providers and external modules.",
    back: "Run <strong>terraform init -upgrade</strong> to update both provider plugins and external child modules to the latest allowed versions.",
    tags: ["Terraform CLI", "terraform init -upgrade", "Modules"]
  },
  {
    id: "hashicorp-tfa-fc-95",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform show",
    hint: "Printing human-readable state and plan details.",
    back: "Use <strong>terraform show</strong> to display the entire state file or a saved plan file in human-readable text.",
    tags: ["Terraform CLI", "terraform show", "Inspection"]
  },
  {
    id: "hashicorp-tfa-fc-96",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform show -json",
    hint: "Converting binary plan files to structured JSON.",
    back: "Run <strong>terraform show -json &lt;planfile&gt;</strong> to transform binary execution plans into structured JSON for automated policy scans.",
    tags: ["Terraform CLI", "terraform show -json", "Policy Enforcement"]
  },
  {
    id: "hashicorp-tfa-fc-97",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -compact-warnings Flag",
    hint: "Condensing non-fatal deprecation warnings.",
    back: "Use <strong>-compact-warnings</strong> to collapse repetitive deprecation warnings into single lines, improving output readability.",
    tags: ["Terraform CLI", "-compact-warnings", "CLI Output"]
  },
  {
    id: "hashicorp-tfa-fc-98",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: -input=false Flag",
    hint: "Preventing headless CI/CD scripts from hanging.",
    back: "Pass <strong>-input=false</strong> in CI/CD pipelines to fail immediately on missing variables instead of hanging on interactive stdin prompts.",
    tags: ["Terraform CLI", "-input=false", "Headless CI/CD"]
  },
  {
    id: "hashicorp-tfa-fc-99",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform CLI: terraform workspace select",
    hint: "Switching between local workspaces.",
    back: "Use <strong>terraform workspace select &lt;name&gt;</strong> to switch the active workspace and its corresponding state file.",
    tags: ["Terraform CLI", "workspaces", "Workspace Management"]
  },
  {
    id: "hashicorp-tfa-fc-100",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    front: "Terraform: Locking Provider Versions",
    hint: "Preventing unexpected breaking changes in production.",
    back: "Lock provider versions in production to ensure <strong>deterministic behavior</strong> and insulate critical environments from unexpected upstream provider updates.",
    tags: ["Terraform", "Provider Versioning", "Production Best Practices"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_4;
