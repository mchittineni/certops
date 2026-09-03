export const HASHICORP_TFA_FLASHCARDS_7 = [
  {
    id: "hashicorp-tfa-fc-151",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Plaintext Sensitive Data Risk",
    hint: "Why state files contain unencrypted secrets.",
    back: "The <strong>terraform.tfstate file contains secrets in plaintext</strong>; protect state with encryption at rest, TLS in transit, and strict IAM access controls.",
    tags: ["Terraform State", "Sensitive Data", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-152",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Lineage & Serial",
    hint: "Tracking state identity and preventing regressions.",
    back: "Terraform protects state using a unique <strong>lineage UUID</strong> and an incrementing <strong>serial number</strong> to reject stale overwrites.",
    tags: ["Terraform State", "Lineage and Serial", "State Metadata"]
  },
  {
    id: "hashicorp-tfa-fc-153",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: terraform_remote_state Data Source",
    hint: "Reading outputs from external state files.",
    back: "Use the <strong>terraform_remote_state</strong> data source to consume output values from external, decoupled state files.",
    tags: ["Terraform State", "terraform_remote_state", "Cross-Project Architecture"]
  },
  {
    id: "hashicorp-tfa-fc-154",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Distributed Locking",
    hint: "Preventing concurrent race conditions.",
    back: "<strong>State locking</strong> blocks concurrent operations, returning <code>Error acquiring the state lock</code> to prevent state file corruption.",
    tags: ["Terraform State", "State Locking", "Concurrency"]
  },
  {
    id: "hashicorp-tfa-fc-155",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: Supported Locking Solutions",
    hint: "GCS, Azure Blob, S3+DynamoDB, and Terraform Cloud.",
    back: "Native locking is provided by <strong>GCS, AzureRM, Terraform Cloud, and S3 (with DynamoDB)</strong>; standard S3 alone lacks locking.",
    tags: ["Terraform Backends", "Supported Locking", "Architecture"]
  },
  {
    id: "hashicorp-tfa-fc-156",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: State Migration to Remote Backends",
    hint: "Safely uploading local state to remote storage.",
    back: "Run <strong>terraform init -migrate-state</strong> to copy existing state files safely from local disk into remote cloud backends.",
    tags: ["Terraform State", "State Migration", "-migrate-state"]
  },
  {
    id: "hashicorp-tfa-fc-157",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Never Edit State Files Manually",
    hint: "Preventing syntax and serial corruption.",
    back: "<strong>Never edit terraform.tfstate manually</strong>; use safe CLI commands (<code>state mv</code>, <code>state rm</code>) to avoid corrupting state metadata.",
    tags: ["Terraform State", "Manual Edits", "State Safety"]
  },
  {
    id: "hashicorp-tfa-fc-158",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: terraform.tfstate.backup",
    hint: "Automatic pre-modification state snapshots.",
    back: "Terraform creates <strong>terraform.tfstate.backup</strong> before writing modifications, providing a safety net for local state recovery.",
    tags: ["Terraform State", "State Backup", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-fc-159",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "S3 State Storage: Encryption & Versioning",
    hint: "Mandatory security standards for remote state.",
    back: "Always enable <strong>Server-Side Encryption (KMS)</strong> and <strong>Bucket Versioning</strong> on S3 state buckets to protect secrets and enable point-in-time recovery.",
    tags: ["Terraform State", "S3 Backend", "Encryption and Versioning"]
  },
  {
    id: "hashicorp-tfa-fc-160",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Partial State on Failure",
    hint: "Tracking successfully created assets after crashes.",
    back: "Terraform saves <strong>partial state</strong> during failed runs, recording all successfully created resources so they are not orphaned or duplicated.",
    tags: ["Terraform State", "Partial State", "Resilience"]
  },
  {
    id: "hashicorp-tfa-fc-161",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform CLI: terraform state push",
    hint: "Uploading recovered state files to remote backends.",
    back: "Use <strong>terraform state push &lt;file&gt;</strong> to upload recovered state snapshots directly to remote backends during disaster recovery.",
    tags: ["Terraform CLI", "terraform state push", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-fc-162",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Disaster Recovery: S3 State Versioning",
    hint: "Rolling back to prior state object versions.",
    back: "Enable <strong>S3 Bucket Versioning</strong> on state buckets to effortlessly restore prior state snapshots if corruption occurs.",
    tags: ["Terraform State", "S3 Versioning", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-fc-163",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: No Variables Allowed",
    hint: "Why backend blocks cannot interpolate variables.",
    back: "<strong>Variables and functions are not allowed in backend blocks</strong> because the backend must initialize before variables are parsed.",
    tags: ["Terraform Backends", "Backend Variables", "Partial Configuration"]
  },
  {
    id: "hashicorp-tfa-fc-164",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: Partial Configuration via -backend-config",
    hint: "Supplying backend parameters dynamically.",
    back: "Use <strong>terraform init -backend-config=&lt;file_or_arg&gt;</strong> to inject dynamic backend settings like bucket names during initialization.",
    tags: ["Terraform Backends", "-backend-config", "Partial Configuration"]
  },
  {
    id: "hashicorp-tfa-fc-165",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform 1.1+: The cloud Configuration Block",
    hint: "Native Terraform Cloud backend configuration.",
    back: "Use the <strong>terraform { cloud { ... } }</strong> block in Terraform 1.1+ to configure Terraform Cloud organizations and workspaces cleanly.",
    tags: ["Terraform 1.1+", "cloud Block", "Terraform Cloud"]
  },
  {
    id: "hashicorp-tfa-fc-166",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: schema_version",
    hint: "Enabling automated provider state schema migrations.",
    back: "The <strong>schema_version</strong> attribute allows providers to detect older state structures and automatically migrate them during provider upgrades.",
    tags: ["Terraform State", "schema_version", "State Migration"]
  },
  {
    id: "hashicorp-tfa-fc-167",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: GCS Backend",
    hint: "Google Cloud Storage backend configuration.",
    back: "Configure <strong>backend \"gcs\" { bucket = ... prefix = ... }</strong> for Google Cloud state storage with native object locking.",
    tags: ["Terraform Backends", "GCS Backend", "Google Cloud"]
  },
  {
    id: "hashicorp-tfa-fc-168",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: azurerm Backend",
    hint: "Azure Blob Storage state with native blob leases.",
    back: "Configure <strong>backend \"azurerm\"</strong> with storage account, container, and key for Azure state storage and automated lease locking.",
    tags: ["Terraform Backends", "azurerm Backend", "Azure"]
  },
  {
    id: "hashicorp-tfa-fc-169",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: JSON Data Format",
    hint: "Standard JSON serialization schema.",
    back: "Terraform state files are formatted as <strong>standard JSON</strong>, containing version, serial, lineage, outputs, and resource instances.",
    tags: ["Terraform State", "JSON Format", "Internals"]
  },
  {
    id: "hashicorp-tfa-fc-170",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "State Locking: Lock Info Output",
    hint: "ID, Who, Operation, and Created timestamp.",
    back: "Lock collision errors output the <strong>Lock ID, Who (user@host), Operation, and Created timestamp</strong> to diagnose concurrent runs.",
    tags: ["Terraform State", "Lock Info", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfa-fc-171",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Configuration Drift: Tag Stripping",
    hint: "Reverting out-of-band tag additions.",
    back: "Terraform detects out-of-band tags during refresh and plans an <strong>in-place update to remove unmanaged tags</strong> to match declared code.",
    tags: ["Terraform State", "Drift Remediation", "In-Place Updates"]
  },
  {
    id: "hashicorp-tfa-fc-172",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Plan: -/+ replace Action",
    hint: "Destroy and recreate for ForceNew attributes.",
    back: "When an attribute cannot be altered in-place (ForceNew), Terraform plans a <strong>-/+ replace</strong> action (destroying old, creating new).",
    tags: ["Terraform Plan", "Resource Replacement", "ForceNew"]
  },
  {
    id: "hashicorp-tfa-fc-173",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Lifecycle: create_before_destroy",
    hint: "Preventing downtime during resource replacements.",
    back: "Configure <strong>lifecycle { create_before_destroy = true }</strong> to create replacement instances before terminating older resources.",
    tags: ["Terraform Lifecycle", "create_before_destroy", "Zero Downtime"]
  },
  {
    id: "hashicorp-tfa-fc-174",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Lifecycle: prevent_destroy",
    hint: "Safety latch blocking accidental resource deletion.",
    back: "Set <strong>lifecycle { prevent_destroy = true }</strong> on production databases to reject any plan that attempts to destroy the resource.",
    tags: ["Terraform Lifecycle", "prevent_destroy", "Safety Latch"]
  },
  {
    id: "hashicorp-tfa-fc-175",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Lifecycle: ignore_changes",
    hint: "Preventing conflicts with external autoscalers.",
    back: "Use <strong>lifecycle { ignore_changes = [desired_capacity] }</strong> to prevent Terraform from fighting external autoscaling modifications.",
    tags: ["Terraform Lifecycle", "ignore_changes", "Autoscaling"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_7;
