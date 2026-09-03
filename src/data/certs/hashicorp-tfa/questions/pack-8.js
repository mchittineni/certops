export const HASHICORP_TFA_QUESTIONS_8 = [
  {
    id: "hashicorp-tfa-176",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "ignore_changes = all for Full Drift Ignoring",
    scenario: "A developer provisions a virtual machine for a one-off developer sandbox. After initial creation, all future manual modifications made by the developer must be ignored by Terraform.",
    question: "Which syntax ignores all resource attributes after initial creation?",
    options: [
      { id: 'A', text: "lifecycle { ignore_changes = [\"*\"] }" },
      { id: 'B', text: "lifecycle { static = true }" },
      { id: 'C', text: "lifecycle { freeze = true }" },
      { id: 'D', text: "lifecycle { ignore_changes = all }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `ignore_changes = all` instructs Terraform to create the resource initially, but completely disregard any future attribute drift or changes in live infrastructure on subsequent plan/apply runs.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#ignore_changes",
    tags: ["Terraform Lifecycle", "ignore_changes = all", "Drift Ignoring"]
  },
  {
    id: "hashicorp-tfa-177",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "replace_triggered_by Lifecycle Meta-Argument (Terraform 1.2+)",
    scenario: "A virtual machine needs to be recreated whenever a specific launch template or user_data script changes.",
    question: "Which lifecycle argument introduced in Terraform 1.2 forces a resource replacement when referenced resources change?",
    options: [
      { id: 'A', text: "lifecycle { recreate_on = [aws_launch_template.app] }" },
      { id: 'B', text: "lifecycle { triggers_replace = [aws_launch_template.app] }" },
      { id: 'C', text: "lifecycle { depends_on_replace = [aws_launch_template.app] }" },
      { id: 'D', text: "lifecycle { replace_triggered_by = [aws_launch_template.app] }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Introduced in Terraform 1.2, `replace_triggered_by` accepts references to other resources. If any referenced resource or attribute changes, Terraform automatically plans a replacement of the declaring resource, eliminating hacky null_resource triggers.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#replace_triggered_by",
    tags: ["Terraform 1.2+", "replace_triggered_by", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-178",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State Backend Authentication: Cloud IAM Roles",
    scenario: "A DevOps team uses Amazon S3 as the remote backend in a GitHub Actions CI runner hosted on an AWS EC2 instance.",
    question: "How should the backend authenticate to the S3 bucket and DynamoDB table without storing static access keys?",
    options: [
      { id: 'A', text: "By hardcoding credentials into main.tf" },
      { id: 'B', text: "By allowing Terraform to automatically inherit the IAM Instance Profile (or OIDC Web Identity) assigned to the runner host" },
      { id: 'C', text: "By committing AWS_SECRET_ACCESS_KEY into Git" },
      { id: 'D', text: "By using unauthenticated public S3 buckets" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform backends leverage standard cloud SDK credential chains. On AWS, the S3 backend automatically inherits credentials from IAM Instance Profiles, ECS task roles, or OIDC Web Identity federation, eliminating static credential leakage.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3#assumerole",
    tags: ["Terraform Backends", "Authentication", "IAM Roles"]
  },
  {
    id: "hashicorp-tfa-179",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Refresh-Only Plan Output Inspection",
    scenario: "An administrator runs `terraform plan -refresh-only` and Terraform detects that an S3 bucket has new tags added via the AWS console.",
    question: "What does the plan output propose to do with the detected tags?",
    options: [
      { id: 'A', text: "It proposes deleting the S3 bucket" },
      { id: 'B', text: "It fails with an error" },
      { id: 'C', text: "It proposes deleting the tags from the S3 bucket" },
      { id: 'D', text: "It proposes updating the state file to include the new tags, leaving the cloud infrastructure completely unchanged" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `-refresh-only` run compares cloud infrastructure against the state file. If drift is found, it plans to update the `state file` to match reality, allowing users to synchronize state without making any modifications to real cloud resources.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only",
    tags: ["Terraform CLI", "-refresh-only", "Drift Reconciliation"]
  },
  {
    id: "hashicorp-tfa-180",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State Inspecting with jq (State Pull Piping)",
    scenario: "A platform engineer wants to list all EC2 instance IDs tracked in a remote S3 backend using a single bash command line.",
    question: "Which command combination achieves this cleanly?",
    options: [
      { id: 'A', text: "cat terraform.tfstate | grep id" },
      { id: 'B', text: "terraform state list | grep id" },
      { id: 'C', text: "terraform state pull | jq '.resources[] | select(.type==\"aws_instance\") | .instances[].attributes.id'" },
      { id: 'D', text: "terraform show -raw id" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Because `terraform state pull` outputs the current state as valid JSON to `stdout`, it pairs seamlessly with `jq` to query attributes, search for resource types, or audit security properties programmatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/pull",
    tags: ["Terraform CLI", "state pull and jq", "Scripting"]
  },
  {
    id: "hashicorp-tfa-181",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Consul Backend for Dynamic Distributed State Storage",
    scenario: "An organization running HashiCorp Consul on-premises uses Consul's Key-Value store for Terraform state storage.",
    question: "Which native Consul capability provides distributed state locking?",
    options: [
      { id: 'A', text: "External DynamoDB tables" },
      { id: 'B', text: "Consul Raft log rotation" },
      { id: 'C', text: "Consul Connect service mesh" },
      { id: 'D', text: "Consul Key-Value sessions and locks" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `consul` backend stores state in Consul's distributed KV store and natively utilizes Consul `sessions` to acquire and release state locks automatically without requiring external databases.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/consul",
    tags: ["Terraform Backends", "Consul Backend", "On-Premises"]
  },
  {
    id: "hashicorp-tfa-182",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform HTTP Backend for Custom REST Endpoints",
    scenario: "A company builds an internal developer platform that stores Terraform state via a custom REST API supporting HTTP GET, POST, and DELETE requests.",
    question: "Which standard Terraform backend integrates with custom RESTful endpoints?",
    options: [
      { id: 'A', text: "api backend" },
      { id: 'B', text: "http backend" },
      { id: 'C', text: "rest backend" },
      { id: 'D', text: "custom backend" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `http` backend stores state using a simple REST client. It issues HTTP `GET` to read state, `POST` to update state, and supports HTTP `LOCK` and `UNLOCK` methods for custom state locking implementations (e.g. GitLab Managed Terraform State).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/http",
    tags: ["Terraform Backends", "HTTP Backend", "GitLab State"]
  },
  {
    id: "hashicorp-tfa-183",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Decoupling Microservices via Multiple State Files",
    scenario: "An enterprise migrates from a single monolithic 5,000-resource state file to 20 smaller state files (networking, shared-services, apps-tier).",
    question: "Which two major operational benefits are achieved by this state decoupling?",
    options: [
      { id: 'A', text: "Eliminates the need for writing HCL code" },
      { id: 'B', text: "Cloud providers discount infrastructure costs by 50%" },
      { id: 'C', text: "Automates cloud provider account creation" },
      { id: 'D', text: "Drastically reduced blast radius (errors in one app cannot destroy networking) and faster plan/apply execution times" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Decoupling infrastructure into multiple isolated state files limits the blast radius of misconfigurations, isolates team permissions, and drastically slashes `terraform plan` execution times by reducing the number of cloud API calls per run.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["Terraform Architecture", "State Decoupling", "Blast Radius"]
  },
  {
    id: "hashicorp-tfa-184",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Cross-State Output Referencing via terraform_remote_state Security",
    scenario: "A junior developer configures `terraform_remote_state` to read a VPC ID. The developer uses an IAM role that has read access to the entire networking state bucket.",
    question: "Why is granting broad read access to remote state files a significant security risk?",
    options: [
      { id: 'A', text: "Because state files contain all secrets and passwords in plaintext; reading remote state grants access to every sensitive attribute in that state file" },
      { id: 'B', text: "Remote state data sources do not access state files" },
      { id: 'C', text: "Because remote state files can execute arbitrary shell scripts" },
      { id: 'D', text: "Because reading state deletes the remote resources" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because `terraform_remote_state` downloads the complete state JSON, any user or CI job with permission to read the state bucket can read every secret, password, and private key stored in that state file, violating least privilege.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/remote-state-data#accessing-state-files",
    tags: ["Terraform State", "terraform_remote_state Security", "Least Privilege"]
  },
  {
    id: "hashicorp-tfa-185",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Tainted Resources Marking and Replacement",
    scenario: "In a legacy Terraform 0.12 workflow, an engineer ran `terraform taint aws_instance.app`.",
    question: "What did this command modify behind the scenes?",
    options: [
      { id: 'A', text: "It terminated the cloud virtual machine immediately" },
      { id: 'B', text: "It corrupted the dependency lock file" },
      { id: 'C', text: "It deleted the resource block from main.tf" },
      { id: 'D', text: "It modified the state file by adding a 'status: tainted' attribute to that resource instance, without touching the cloud resource" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`terraform taint` modified only the state file: it flagged the resource record as `tainted`. On the subsequent `terraform apply`, Terraform read this flag, planned the resource's destruction and recreation, and cleared the tainted flag.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/taint",
    tags: ["Terraform CLI", "Taint Internals", "State Mechanics"]
  },
  {
    id: "hashicorp-tfa-186",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Lock Timeout Configuration (-lock-timeout)",
    scenario: "In automated CI/CD pipelines, another job might be finishing an apply and holding a state lock for 15 seconds. By default, Terraform fails immediately if a lock cannot be acquired instantaneously.",
    question: "Which flag instructs Terraform to wait and retry acquiring the lock for up to a specified duration before erroring?",
    options: [
      { id: 'A', text: "-lock-timeout=30s (e.g. -lock-timeout=5m)" },
      { id: 'B', text: "-lock-retry=3" },
      { id: 'C', text: "-wait-lock=30s" },
      { id: 'D', text: "-retry-lock=30s" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `-lock-timeout=&lt;duration&gt;` flag configures Terraform to wait and continuously retry acquiring the state lock for the specified duration (e.g. `60s` or `5m`) before giving up, preventing transient race conditions in parallel CI pipelines.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#lock-timeout-0s",
    tags: ["Terraform CLI", "-lock-timeout", "Concurrency Tuning"]
  },
  {
    id: "hashicorp-tfa-187",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Disabling State Locking for Read-Only Inspection (-lock=false)",
    scenario: "A developer wants to run `terraform plan` to quickly inspect a proposed change locally, but a long-running pipeline currently holds the state lock for an apply.",
    question: "Which flag allows running plan without acquiring a state lock (at the risk of viewing a stale plan)?",
    options: [
      { id: 'A', text: "-force" },
      { id: 'B', text: "-skip-lock" },
      { id: 'C', text: "-lock=false" },
      { id: 'D', text: "-read-only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Passing `-lock=false` bypasses state lock acquisition. While useful for quick read-only planning when an apply is running, it risks reading partially written state and should never be used during `apply`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#lock-true",
    tags: ["Terraform CLI", "-lock=false", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfa-188",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Resource Tracking by Unique Address",
    scenario: "A software engineer examines how Terraform Core resolves dependencies and maps cloud objects.",
    question: "How does Terraform uniquely identify and track resource instances across HCL files and the state file?",
    options: [
      { id: 'A', text: "Through unique resource addresses formatted as &lt;resource_type&gt;.&lt;resource_name&gt;[&lt;index_or_key&gt;] (e.g. aws_instance.web[0])" },
      { id: 'B', text: "By the file creation date" },
      { id: 'C', text: "Through random cloud UUIDs assigned by AWS" },
      { id: 'D', text: "Through the line number where the resource is defined in main.tf" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform tracks every resource by its canonical `resource address`: `&lt;type&gt;.&lt;name&gt;` (or `module.&lt;mod&gt;.&lt;type&gt;.&lt;name&gt;[&lt;key&gt;]`), ensuring stable mapping between declared HCL blocks and physical cloud IDs regardless of file organization.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/resources/syntax#resource-syntax",
    tags: ["Terraform State", "Resource Addresses", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-189",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Preserving Cloud Resources during Refactoring",
    scenario: "A team organizes flat configuration files into modular subdirectories. Running plan indicates Terraform will destroy 40 resources and recreate them under new module addresses.",
    question: "What two approaches preserve the cloud resources and update state without any destruction?",
    options: [
      { id: 'A', text: "Renaming the cloud resources in the cloud web console" },
      { id: 'B', text: "Using declarative 'moved' blocks in code (Terraform 1.1+) or running imperative 'terraform state mv' CLI commands" },
      { id: 'C', text: "Deleting the state file and running init" },
      { id: 'D', text: "Running terraform apply -force" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Both declarative `moved` blocks and imperative `terraform state mv` commands update the state file's address mapping, allowing teams to restructure code without triggering destruction of live infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/modules/develop/refactoring",
    tags: ["Terraform State", "Refactoring", "moved blocks vs state mv"]
  },
  {
    id: "hashicorp-tfa-190",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Cleaning up Forgotten Resources",
    scenario: "A developer deletes an entire `.tf` configuration file containing an S3 bucket definition and runs `terraform apply`.",
    question: "How does Terraform know the bucket needs to be deleted from the cloud when its code no longer exists in any file?",
    options: [
      { id: 'A', text: "Terraform cannot know; the bucket remains orphaned forever" },
      { id: 'B', text: "Terraform searches Git commit history" },
      { id: 'C', text: "The bucket is still recorded in the state file; comparing the state file against the configuration reveals the resource was deleted from code" },
      { id: 'D', text: "Cloud providers alert Terraform via webhooks" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "This is the core reason Terraform maintains state: by comparing the state file (which tracks what was provisioned previously) against the current configuration files, Terraform detects that a previously created resource is missing from code and plans its destruction.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["Terraform State", "Purpose of State", "Declarative Deletion"]
  },
  {
    id: "hashicorp-tfa-191",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State File Metadata: terraform_version Field",
    scenario: "An enterprise state file contains `\"terraform_version\": \"1.5.7\"`. A developer attempts to run `terraform apply` on this state using an older Terraform v1.0.0 CLI binary.",
    question: "What action does the Terraform CLI take when encountering state written by a newer Terraform version?",
    options: [
      { id: 'A', text: "It refuses to run and errors immediately: 'State file was written by a newer version of Terraform'" },
      { id: 'B', text: "It ignores the version and runs normally" },
      { id: 'C', text: "It deletes the state file" },
      { id: 'D', text: "It downgrades the state file automatically and corrupts data" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform state files track `terraform_version`. An older Terraform CLI binary refuses to modify a state file written by a newer version of Terraform to prevent syntax regressions and data corruption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state",
    tags: ["Terraform State", "terraform_version", "Compatibility"]
  },
  {
    id: "hashicorp-tfa-192",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Managing State Across Multiple Cloud Accounts",
    scenario: "An organization manages 50 separate AWS accounts across diverse development teams.",
    question: "How should Terraform state files be structured across these accounts?",
    options: [
      { id: 'A', text: "Store state files in a centralized, secure security/ops AWS account with strict access controls, or maintain isolated state buckets within each individual account" },
      { id: 'B', text: "Store all 50 accounts in a single shared unencrypted public S3 bucket" },
      { id: 'C', text: "Store state on developers' USB thumb drives" },
      { id: 'D', text: "State files cannot be used with multiple accounts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enterprise state architecture either isolates state buckets inside each target account with localized IAM, or centralizes state buckets inside a dedicated, hardened management account accessed via cross-account IAM role assumption.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose",
    tags: ["Terraform State", "Multi-Account Architecture", "Security"]
  },
  {
    id: "hashicorp-tfa-193",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State File Synchronization: Refresh on Plan vs Refresh-Only",
    scenario: "A DevOps engineer compares different planning options in the Terraform CLI.",
    question: "What is the operational difference between a standard terraform plan and a terraform plan -refresh-only?",
    options: [
      { id: 'A', text: "Standard plan does not query cloud APIs; refresh-only queries APIs" },
      { id: 'B', text: "A standard plan proposes infrastructure changes to match declared code after refreshing; refresh-only proposes state file updates to match reality without proposing any cloud changes" },
      { id: 'C', text: "There is no difference" },
      { id: 'D', text: "Standard plan modifies cloud resources; refresh-only does not" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A standard `terraform plan` queries APIs to refresh state and then calculates actions needed to bring cloud infrastructure into alignment with declared HCL code. A `refresh-only plan` only updates the state file to match cloud reality without altering cloud infrastructure.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/plan#refresh-only",
    tags: ["Terraform CLI", "Plan vs Refresh-Only", "State Synchronization"]
  },
  {
    id: "hashicorp-tfa-194",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Locking: DynamoDB Table Schema Requirement (LockID)",
    scenario: "An administrator creates a new Amazon DynamoDB table for Terraform state locking.",
    question: "What primary partition key name (and type) must be configured on the DynamoDB table for Terraform state locking to function?",
    options: [
      { id: 'A', text: "LockID (Type: String)" },
      { id: 'B', text: "StateID (Type: String)" },
      { id: 'C', text: "terraform_lock (Type: Number)" },
      { id: 'D', text: "id (Type: Binary)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS S3 backend requires the DynamoDB table to have a single primary partition key named exactly `LockID` of type `String`. If named anything else, Terraform cannot write lock metadata and errors during `init`.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/settings/backends/s3#dynamodb_table",
    tags: ["Terraform Backends", "DynamoDB Schema", "LockID"]
  },
  {
    id: "hashicorp-tfa-195",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Pull and Push for Backend Migration Disasters",
    scenario: "During a backend reconfiguration, the automated migration crashes and leaves state stranded in a local temporary file.",
    question: "How can an administrator safely restore the stranded state to the new remote backend manually?",
    options: [
      { id: 'A', text: "Delete the .terraform directory" },
      { id: 'B', text: "Copy the file directly into the S3 bucket using AWS CLI" },
      { id: 'C', text: "Run terraform apply -restore" },
      { id: 'D', text: "Run terraform state push <path-to-stranded-state.json>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running `terraform state push` validates the state file's lineage and serial numbers and uploads it through the configured backend API, properly handling backend metadata and locking.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/state/push",
    tags: ["Terraform CLI", "terraform state push", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-196",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State File Caching: Preventing API Rate Limits with Large Topologies",
    scenario: "An enterprise configuration manages 2,000 resources. Cloud providers enforce API rate limits of 10 requests per second.",
    question: "How does Terraform's state file prevent API rate limit exhaustion during dependency calculations?",
    options: [
      { id: 'A', text: "Terraform runs only at midnight" },
      { id: 'B', text: "Terraform caches resource attribute metadata in state, enabling local graph calculations without making thousands of cloud API calls for static attributes" },
      { id: 'C', text: "Terraform ignores cloud rate limits" },
      { id: 'D', text: "Terraform bypasses cloud APIs entirely" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "By recording current attributes, IDs, and references in the state file, Terraform can resolve dependency expressions (e.g. finding a subnet ID to attach a VM) locally in memory without querying the cloud provider API repeatedly.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/purpose#performance",
    tags: ["Terraform State", "Performance", "API Rate Limiting"]
  },
  {
    id: "hashicorp-tfa-197",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Detecting External Resource Modifications via Checksum Hashes",
    scenario: "A developer uses the `local_file` or `aws_s3_object` resource with `etag = filemd5(\"app.zip\")`.",
    question: "How does Terraform detect that the local file has changed and needs to be re-uploaded?",
    options: [
      { id: 'A', text: "Terraform asks the developer interactively" },
      { id: 'B', text: "Terraform monitors file timestamps on the OS" },
      { id: 'C', text: "Terraform uploads the file every single second" },
      { id: 'D', text: "Terraform calculates the new MD5 hash, compares it against the etag stored in the state file, and plans an update when hashes differ" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By computing cryptographic hashes (e.g. `filemd5()` or `filesha256()`) and storing them in state attributes like `etag`, Terraform detects content modifications during `plan` and triggers updates only when file contents actually change.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/functions/filemd5",
    tags: ["Terraform Functions", "filemd5", "Change Detection"]
  },
  {
    id: "hashicorp-tfa-198",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Terraform State: Importing Resources with Sub-Resources",
    scenario: "An engineer imports an existing AWS Security Group into Terraform state using `terraform import aws_security_group.sg sg-0123456789`.",
    question: "Does importing the security group automatically import inline egress and ingress rules associated with it?",
    options: [
      { id: 'A', text: "Rules must always be separate resources" },
      { id: 'B', text: "Only if imported with -all-rules flag" },
      { id: 'C', text: "Yes, if the security group resource schema defines inline rules, the provider queries and populates their attributes into the security group's state record" },
      { id: 'D', text: "No, security group rules can never be imported" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When importing a resource, the provider's `Read` function queries the cloud API for the complete resource representation. If attributes (like inline ingress/egress rules) belong to the resource's schema, they are populated into state automatically.",
    referenceUrl: "https://developer.hashicorp.com/terraform/cli/commands/import",
    tags: ["Terraform CLI", "terraform import", "Resource Schemas"]
  },
  {
    id: "hashicorp-tfa-199",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "State Storage Best Practice: Never Commit State to Version Control",
    scenario: "A security reviewer audits a company's Git repository and checks the .gitignore file.",
    question: "Why does industry best practice strictly forbid committing terraform.tfstate files to Git repositories?",
    options: [
      { id: 'A', text: "Git repositories cannot store JSON files" },
      { id: 'B', text: "State files contain plaintext secrets, passwords, and private keys, and Git cannot provide concurrent state locking, leading to state corruption" },
      { id: 'C', text: "Terraform CLI deletes Git repositories if state is detected" },
      { id: 'D', text: "State files are too small for Git" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Committing state to Git poses two fatal risks: `Security Vulnerability` (passwords and API keys in state are permanently exposed in Git history) and `Concurrency Failure` (Git cannot provide real-time distributed locking, causing merge conflicts and state corruption).",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/sensitive-data",
    tags: ["Terraform State", ".gitignore", "Security Best Practices"]
  },
  {
    id: "hashicorp-tfa-200",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    domainName: "Manage Terraform state",
    title: "Automated State File Locking in CI/CD Pipelines",
    scenario: "An organization implements GitOps with multiple automated GitHub Actions runners executing plans and applies.",
    question: "What guarantees that two parallel pull request merges do not execute terraform apply concurrently and corrupt the backend state?",
    options: [
      { id: 'A', text: "Running terraform with -parallelism=1" },
      { id: 'B', text: "Writing shell scripts that check file timestamps" },
      { id: 'C', text: "The remote backend's distributed state locking mechanism (e.g. DynamoDB, Azure Blob Lease, or Terraform Cloud locking)" },
      { id: 'D', text: "GitHub Actions queue priority alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Distributed state locking provided by modern backends is the foundational guarantee of safe automation. Even if multiple CI/CD runners start simultaneously across different physical servers, the backend's distributed lock enforces strict mutual exclusion.",
    referenceUrl: "https://developer.hashicorp.com/terraform/language/state/locking",
    tags: ["Terraform State", "CI/CD Safety", "Distributed Locking"]
  }
];

export default HASHICORP_TFA_QUESTIONS_8;
