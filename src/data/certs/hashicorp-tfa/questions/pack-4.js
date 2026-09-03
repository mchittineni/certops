export const HASHICORP_TFA_QUESTIONS_4 = [
  {
    id: "hashicorp-tfa-76",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Refactoring and Renaming Resources via terraform state mv",
    scenario: "A developer renames a resource in HCL from `resource \"aws_s3_bucket\" \"bucket\"` to `resource \"aws_s3_bucket\" \"data_bucket\"`. Without intervention, Terraform plans to destroy the existing bucket and create a new one.",
    question: "Which command moves the state binding to prevent resource recreation?",
    options: [
      { id: 'A', text: "terraform state mv aws_s3_bucket.bucket aws_s3_bucket.data_bucket" },
      { id: 'B', text: "terraform state rename bucket data_bucket" },
      { id: 'C', text: "terraform rename aws_s3_bucket.bucket aws_s3_bucket.data_bucket" },
      { id: 'D', text: "terraform state update --rename" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform state mv` renames resource addresses within the state file. By moving the state record to match the new HCL name, Terraform recognizes that the existing cloud resource corresponds to the renamed code, avoiding destructive recreations.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/mv",
    tags: ["Terraform CLI", "terraform state mv", "Refactoring"]
  },
  {
    id: "hashicorp-tfa-77",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Removing Resources from State via terraform state rm",
    scenario: "A team wants to stop managing an existing virtual machine through Terraform, but the virtual machine must continue running in the cloud untouched.",
    question: "Which command removes the resource from the state file without deleting the cloud instance?",
    options: [
      { id: 'A', text: "terraform untrack aws_instance.legacy_vm" },
      { id: 'B', text: "terraform state rm aws_instance.legacy_vm" },
      { id: 'C', text: "terraform destroy -target=aws_instance.legacy_vm" },
      { id: 'D', text: "terraform delete aws_instance.legacy_vm" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`terraform state rm` removes items from the state file. The real-world cloud resource continues running in the cloud, but Terraform ceases tracking or managing it.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/rm",
    tags: ["Terraform CLI", "terraform state rm", "Untracking Resources"]
  },
  {
    id: "hashicorp-tfa-78",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Pulling Remote State Locally via terraform state pull",
    scenario: "A team uses an Amazon S3 remote backend. An administrator needs to view the raw JSON state file or pipe it to `jq` for advanced debugging.",
    question: "Which command downloads the current state from the remote backend and outputs raw JSON to stdout?",
    options: [
      { id: 'A', text: "terraform state export" },
      { id: 'B', text: "terraform state get" },
      { id: 'C', text: "terraform state download" },
      { id: 'D', text: "terraform state pull" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform state pull` downloads the state from its configured remote backend and outputs the raw JSON state data directly to `stdout`, where it can be piped into file redirects or tools like `jq`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["Terraform CLI", "terraform state pull", "Debugging"]
  },
  {
    id: "hashicorp-tfa-79",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Importing Existing Cloud Infrastructure (terraform import)",
    scenario: "A legacy S3 bucket named `prod-assets-corp` was created manually via the AWS Console. A developer writes a matching `resource \"aws_s3_bucket\" \"assets\"` block in HCL.",
    question: "Which CLI command attaches the existing cloud bucket to the Terraform state file?",
    options: [
      { id: 'A', text: "terraform state link aws_s3_bucket.assets prod-assets-corp" },
      { id: 'B', text: "terraform attach aws_s3_bucket.assets prod-assets-corp" },
      { id: 'C', text: "terraform import aws_s3_bucket.assets prod-assets-corp" },
      { id: 'D', text: "terraform state add aws_s3_bucket.assets prod-assets-corp" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform import &lt;resource_address&gt; &lt;cloud_id&gt;` binds an existing real-world cloud resource to a declared resource block in the state file. After importing, the resource is tracked and managed like any normally provisioned resource.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["Terraform CLI", "terraform import", "Importing Infrastructure"]
  },
  {
    id: "hashicorp-tfa-80",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Declarative Import Blocks in Terraform 1.5+",
    scenario: "Starting in Terraform v1.5, developers import pre-existing infrastructure into state.",
    question: "How can teams import existing infrastructure into state declaratively using code rather than running imperative CLI commands?",
    options: [
      { id: 'A', text: "By declaring an 'import' block in HCL with 'to' and 'id' arguments (e.g. import { to = aws_s3_bucket.b id = \"my-bucket\" })" },
      { id: 'B', text: "Terraform does not support declarative imports" },
      { id: 'C', text: "By using the terraform_import resource" },
      { id: 'D', text: "By writing a shell script in user_data" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform 1.5 introduced declarative `import` blocks (`import { to = ... id = ... }`). During `terraform plan`, Terraform previews the import action and can even generate initial HCL configuration via `terraform plan -generate-config-out=generated.tf`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/import",
    tags: ["Terraform 1.5+", "import Blocks", "Declarative Import"]
  },
  {
    id: "hashicorp-tfa-81",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Testing Expressions Interactively via terraform console",
    scenario: "A developer writes a complex HCL expression involving `flatten`, `lookup`, and `can` functions. The developer wants to test the expression against the current state interactively before embedding it into code.",
    question: "Which Terraform CLI command launches an interactive REPL shell for evaluating expressions?",
    options: [
      { id: 'A', text: "terraform shell" },
      { id: 'B', text: "terraform eval" },
      { id: 'C', text: "terraform console" },
      { id: 'D', text: "terraform repl" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`terraform console` opens an interactive command-line environment for evaluating and experimenting with HCL expressions, built-in functions, variables, and state attributes against the current project context.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/console",
    tags: ["Terraform CLI", "terraform console", "Interactive REPL"]
  },
  {
    id: "hashicorp-tfa-82",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Displaying Outputs via terraform output",
    scenario: "A Terraform configuration defines an output value named `lb_dns_name`. A shell script needs to capture this value for downstream curl testing.",
    question: "Which command outputs the raw unquoted string value of an output variable?",
    options: [
      { id: 'A', text: "terraform get output lb_dns_name" },
      { id: 'B', text: "terraform show output lb_dns_name" },
      { id: 'C', text: "terraform output -clean lb_dns_name" },
      { id: 'D', text: "terraform output -raw lb_dns_name" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform output -raw &lt;name&gt;` prints the value of an output variable directly as a raw unquoted string without enclosing quotation marks, ideal for shell script variable assignment (`DNS=$(terraform output -raw lb_dns_name)`).",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output#raw",
    tags: ["Terraform CLI", "terraform output -raw", "Outputs"]
  },
  {
    id: "hashicorp-tfa-83",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Extracting Outputs in JSON Format via terraform output -json",
    scenario: "An automated Python deployment script needs to parse all output variables from a completed Terraform run.",
    question: "Which command outputs all defined outputs in valid JSON format?",
    options: [
      { id: 'A', text: "terraform output --export-json" },
      { id: 'B', text: "terraform show -outputs" },
      { id: 'C', text: "terraform state show -json" },
      { id: 'D', text: "terraform output -json" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform output -json` formats all output values as a standard JSON object containing types and values, enabling easy ingestion by Python, Node.js, and CI/CD tools.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/output#json",
    tags: ["Terraform CLI", "terraform output -json", "JSON Parsing"]
  },
  {
    id: "hashicorp-tfa-84",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Visualizing Dependency Graphs via terraform graph",
    scenario: "A systems architect needs to visualize the resource dependency relationships and execution order of a Terraform project.",
    question: "Which command generates a visual representation of the dependency graph in Graphviz DOT format?",
    options: [
      { id: 'A', text: "terraform graph" },
      { id: 'B', text: "terraform visualize" },
      { id: 'C', text: "terraform diagram" },
      { id: 'D', text: "terraform map" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terraform graph` outputs the internal execution dependency graph in Graphviz DOT format. Piping the output to `dot -Tpng graph.dot -o graph.png` renders a visual diagram of resource dependencies.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/graph",
    tags: ["Terraform CLI", "terraform graph", "Visualization"]
  },
  {
    id: "hashicorp-tfa-85",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Log Levels (TF_LOG)",
    scenario: "A developer encounters an unexpected API authentication error with a provider and needs detailed HTTP request and response trace logs.",
    question: "Which environment variable configures verbose internal debugging logs for Terraform?",
    options: [
      { id: 'A', text: "TF_VERBOSE" },
      { id: 'B', text: "TF_LOG (e.g. TF_LOG=DEBUG or TF_LOG=TRACE)" },
      { id: 'C', text: "TERRAFORM_DEBUG" },
      { id: 'D', text: "LOG_LEVEL" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting `TF_LOG` controls internal logging. Supported log levels in order of increasing verbosity are: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, and `TRACE`. `TRACE` logs full HTTP request/response payloads.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging",
    tags: ["Terraform CLI", "TF_LOG", "Debugging"]
  },
  {
    id: "hashicorp-tfa-86",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Writing Terraform Logs to a File (TF_LOG_PATH)",
    scenario: "When running verbose `TF_LOG=TRACE` runs, the terminal output is overwhelmed by thousands of lines of logs.",
    question: "Which environment variable directs the debug log output to a dedicated file on disk?",
    options: [
      { id: 'A', text: "TF_OUTPUT_FILE" },
      { id: 'B', text: "TF_LOG_FILE" },
      { id: 'C', text: "TF_LOG_PATH" },
      { id: 'D', text: "TERRAFORM_LOG_DEST" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting `TF_LOG_PATH=/path/to/debug.log` directs all logging enabled by `TF_LOG` to the specified file rather than polluting the standard output terminal stream.",
    referenceUrl: "https://developer.hashicorp.com/terraform/internals/debugging#tf_log_path",
    tags: ["Terraform CLI", "TF_LOG_PATH", "Logging"]
  },
  {
    id: "hashicorp-tfa-87",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Passing Command-Line Variables via -var",
    scenario: "A developer wants to override the declared variable `environment = \"staging\"` during a one-off plan without editing any configuration files.",
    question: "Which CLI option sets an individual input variable value directly on the command line?",
    options: [
      { id: 'A', text: "-param environment=staging" },
      { id: 'B', text: "-set environment=staging" },
      { id: 'C', text: "-var=\"environment=staging\"" },
      { id: 'D', text: "-input environment=staging" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `-var=\"key=value\"` flag specifies variable values directly on the command line. Multiple `-var` arguments can be passed simultaneously to override defaults or `.tfvars` files.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variables-on-the-command-line",
    tags: ["Terraform CLI", "-var Flag", "Variables"]
  },
  {
    id: "hashicorp-tfa-88",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Passing Variable Definitions Files via -var-file",
    scenario: "A project maintains separate variable definition files for each environment (`dev.tfvars`, `prod.tfvars`).",
    question: "Which CLI flag instructs terraform plan to load variables from a specific `.tfvars` file?",
    options: [
      { id: 'A', text: "-vars=\"prod.tfvars\"" },
      { id: 'B', text: "-config=\"prod.tfvars\"" },
      { id: 'C', text: "-file=\"prod.tfvars\"" },
      { id: 'D', text: "-var-file=\"prod.tfvars\"" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `-var-file=&lt;filename&gt;` flag instructs Terraform to read variable definitions from the specified file, allowing teams to maintain distinct variable files for different environments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Terraform CLI", "-var-file", "Environment Configuration"]
  },
  {
    id: "hashicorp-tfa-89",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Automatic Loading of .auto.tfvars Files",
    scenario: "A developer creates a file named `database.auto.tfvars` in the root module directory.",
    question: "Does the developer need to pass `-var-file=\"database.auto.tfvars\"` explicitly on the command line?",
    options: [
      { id: 'A', text: "No, but only if the file is named terraform.tfvars" },
      { id: 'B', text: "Automatic loading is only supported in Terraform Enterprise" },
      { id: 'C', text: "Yes, all .tfvars files require explicit -var-file flags" },
      { id: 'D', text: "No, Terraform automatically loads all files ending in .auto.tfvars or .auto.tfvars.json without explicit CLI flags" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Terraform automatically discovers and loads variable definitions from: `terraform.tfvars`, `terraform.tfvars.json`, and any files matching `*.auto.tfvars` or `*.auto.tfvars.json` in alphabetical order.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",
    tags: ["Terraform", ".auto.tfvars", "Variable Loading"]
  },
  {
    id: "hashicorp-tfa-90",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Environment Variables for Input Variables (TF_VAR_name)",
    scenario: "A developer wants to supply a database password to Terraform from the shell environment without writing plaintext passwords to any disk files or command histories.",
    question: "What is the standard environment variable prefix recognized by Terraform for setting input variables?",
    options: [
      { id: 'A', text: "TF_INPUT_" },
      { id: 'B', text: "TF_VAR_ (e.g. TF_VAR_db_password=\"secret123\")" },
      { id: 'C', text: "VAR_" },
      { id: 'D', text: "TERRAFORM_VAR_" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform searches the shell environment for variables prefixed with `TF_VAR_&lt;variable_name&gt;` (e.g. `TF_VAR_region=us-east-1`). Any matching environment variable is automatically mapped to the corresponding declared input variable.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#environment-variables",
    tags: ["Terraform CLI", "TF_VAR_", "Environment Variables"]
  },
  {
    id: "hashicorp-tfa-91",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Variable Precedence Hierarchy in Terraform",
    scenario: "An input variable `instance_type` is assigned in multiple locations: `terraform.tfvars`, a file passed with `-var-file`, a `TF_VAR_instance_type` environment variable, and a `-var` CLI flag.",
    question: "Which source takes highest precedence and wins the variable value assignment?",
    options: [
      { id: 'A', text: "-var or -var-file passed on the command line (CLI flags take highest precedence)" },
      { id: 'B', text: "TF_VAR_ environment variables" },
      { id: 'C', text: "terraform.tfvars" },
      { id: 'D', text: "Default values in the variable block" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The variable precedence order (from lowest to highest) is: default value in configuration, `TF_VAR_` environment variables, `terraform.tfvars`, `*.auto.tfvars`, and finally `-var` or `-var-file` CLI arguments.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence",
    tags: ["Terraform", "Variable Precedence", "Hierarchy"]
  },
  {
    id: "hashicorp-tfa-92",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Backend Reconfiguration (-reconfigure)",
    scenario: "A developer modifies a backend block in HCL and wants to reinitialize the backend completely, discarding any previous backend configuration without migrating state.",
    question: "Which flag should be passed to terraform init?",
    options: [
      { id: 'A', text: "-force" },
      { id: 'B', text: "-clean" },
      { id: 'C', text: "-reconfigure" },
      { id: 'D', text: "-migrate-state" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`-reconfigure` instructs `terraform init` to reconfigure the backend from scratch, ignoring any existing backend settings or cached state configuration stored in `.terraform/terraform.tfstate`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#reconfigure",
    tags: ["Terraform CLI", "-reconfigure", "Backend Initialization"]
  },
  {
    id: "hashicorp-tfa-93",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Plugin Directory Override (-plugin-dir)",
    scenario: "In an air-gapped secure environment without internet access, provider binaries have been pre-downloaded to `/opt/terraform/plugins`.",
    question: "Which flag instructs terraform init to load providers exclusively from the local directory and skip querying the public Terraform Registry?",
    options: [
      { id: 'A', text: "-cache-dir=/opt/terraform/plugins" },
      { id: 'B', text: "-local-only" },
      { id: 'C', text: "-plugin-dir=/opt/terraform/plugins" },
      { id: 'D', text: "-offline" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`-plugin-dir=&lt;dir&gt;` restricts provider discovery to the specified local filesystem directory, enabling completely offline and air-gapped `terraform init` execution.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#plugin-dir",
    tags: ["Terraform CLI", "-plugin-dir", "Air-Gapped"]
  },
  {
    id: "hashicorp-tfa-94",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform init Module Upgrade (-upgrade)",
    scenario: "A root module calls an external module from the Terraform Registry. A new version of the module was released that matches the version constraint.",
    question: "Which flag passed to terraform init forces upgrading downloaded child modules to the newest matching version?",
    options: [
      { id: 'A', text: "-force" },
      { id: 'B', text: "-refresh" },
      { id: 'C', text: "-update-modules" },
      { id: 'D', text: "-upgrade" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `-upgrade` flag on `terraform init` checks all registered providers AND external modules for newer versions allowed by the configuration's version constraints and downloads them.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/init#upgrade",
    tags: ["Terraform CLI", "terraform init -upgrade", "Modules"]
  },
  {
    id: "hashicorp-tfa-95",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Displaying Human-Readable State via terraform show",
    scenario: "An administrator needs to read the entire current state file or a saved plan file in human-readable text format.",
    question: "Which command prints a human-readable summary of the current state or plan file?",
    options: [
      { id: 'A', text: "terraform display" },
      { id: 'B', text: "terraform inspect" },
      { id: 'C', text: "terraform read" },
      { id: 'D', text: "terraform show" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform show` reads the current state file or a specified plan file and prints a comprehensive, human-readable summary of all resources and attributes.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/show",
    tags: ["Terraform CLI", "terraform show", "Inspection"]
  },
  {
    id: "hashicorp-tfa-96",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "terraform show -json for Programmatic Plan Parsing",
    scenario: "A security scanning script in a CI pipeline needs to parse the actions proposed by a saved plan file (`tfplan.binary`).",
    question: "Which command converts the binary plan file into a structured JSON representation?",
    options: [
      { id: 'A', text: "terraform plan -json tfplan.binary" },
      { id: 'B', text: "terraform show -json tfplan.binary" },
      { id: 'C', text: "terraform convert tfplan.binary" },
      { id: 'D', text: "terraform export -json tfplan.binary" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`terraform show -json &lt;planfile&gt;` outputs the complete plan data as machine-readable JSON, including proposed resource changes, prior state, configuration values, and provider versions, powering tools like Sentinel, tfsec, and OPA.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/show#json",
    tags: ["Terraform CLI", "terraform show -json", "Policy Enforcement"]
  },
  {
    id: "hashicorp-tfa-97",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Compact Warnings Output (-compact-warnings)",
    scenario: "A Terraform plan produces 40 non-fatal deprecation warnings, causing important resource diffs to scroll off the terminal screen.",
    question: "Which CLI flag condenses warning messages to single-line summaries?",
    options: [
      { id: 'A', text: "-suppress-warnings" },
      { id: 'B', text: "-compact-warnings" },
      { id: 'C', text: "-quiet-warnings" },
      { id: 'D', text: "-no-warnings" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `-compact-warnings` flag condenses warning messages into concise single-line summaries unless errors occur, keeping the terminal output focused on critical planned actions.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#compact-warnings",
    tags: ["Terraform CLI", "-compact-warnings", "CLI Output"]
  },
  {
    id: "hashicorp-tfa-98",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Non-Interactive Input Disabling (-input=false)",
    scenario: "An automated Jenkins script executes `terraform plan`. If an undeclared input variable has no default, Terraform hangs indefinitely waiting for keyboard input from stdin.",
    question: "Which flag disables interactive prompt queries, causing Terraform to immediately return an error instead of hanging?",
    options: [
      { id: 'A', text: "-input=false" },
      { id: 'B', text: "-batch" },
      { id: 'C', text: "-silent" },
      { id: 'D', text: "-no-interactive" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Passing `-input=false` disables interactive prompts for missing variables. If any required variable is unspecified, Terraform terminates immediately with an error rather than hanging in headless CI/CD runners.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#input-true",
    tags: ["Terraform CLI", "-input=false", "Headless CI/CD"]
  },
  {
    id: "hashicorp-tfa-99",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Terraform Workspace CLI Subcommands (list, new, select, delete)",
    scenario: "An engineer needs to switch from the `default` workspace to a workspace named `staging` in the local directory.",
    question: "Which Terraform CLI command switches active workspaces?",
    options: [
      { id: 'A', text: "terraform checkout staging" },
      { id: 'B', text: "terraform workspace use staging" },
      { id: 'C', text: "terraform workspace switch staging" },
      { id: 'D', text: "terraform workspace select staging" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `terraform workspace` CLI subcommands manage local state directories: `list` (show all workspaces), `new &lt;name&gt;` (create a new workspace), `select &lt;name&gt;` (switch active workspace), and `delete &lt;name&gt;` (remove an empty workspace).",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/workspace/select",
    tags: ["Terraform CLI", "workspaces", "Workspace Management"]
  },
  {
    id: "hashicorp-tfa-100",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d3",
    domainName: "Understand Terraform CLI",
    title: "Locking Down Provider Versions in production",
    scenario: "A financial institution requires strict reproducibility for production deployments.",
    question: "Why should production Terraform configurations lock provider versions using exact (=) constraints or dependency lock files?",
    options: [
      { id: 'A', text: "Because Terraform cannot download providers without exact version numbers" },
      { id: 'B', text: "To prevent automated upgrades to newer provider versions that could introduce breaking changes or altered default behaviors unexpectedly" },
      { id: 'C', text: "Because cloud providers delete old APIs every week" },
      { id: 'D', text: "Exact version constraints reduce cloud bandwidth costs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Locking provider versions (via exact constraints or `.terraform.lock.hcl`) guarantees that every run uses the exact same validated provider binary, preventing unvetted upstream releases from altering production infrastructure behavior.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/providers/requirements#version-constraints",
    tags: ["Terraform", "Provider Versioning", "Production Best Practices"]
  }
];

export default HASHICORP_TFA_QUESTIONS_4;
