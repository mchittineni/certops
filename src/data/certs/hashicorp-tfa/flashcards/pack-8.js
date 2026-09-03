export const HASHICORP_TFA_FLASHCARDS_8 = [
  {
    id: "hashicorp-tfa-fc-176",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Lifecycle: ignore_changes = all",
    hint: "Ignoring all future drift after initial creation.",
    back: "Use <strong>lifecycle { ignore_changes = all }</strong> to manage initial provisioning while ignoring all subsequent live modifications.",
    tags: ["Terraform Lifecycle", "ignore_changes = all", "Drift Ignoring"]
  },
  {
    id: "hashicorp-tfa-fc-177",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform 1.2+: replace_triggered_by",
    hint: "Declarative replacement triggers.",
    back: "Configure <strong>lifecycle { replace_triggered_by = [...] }</strong> in Terraform 1.2+ to automatically replace a resource when dependencies change.",
    tags: ["Terraform 1.2+", "replace_triggered_by", "Lifecycle"]
  },
  {
    id: "hashicorp-tfa-fc-178",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: IAM Role Authentication",
    hint: "Secure passwordless backend authentication.",
    back: "Configure remote backends to use <strong>IAM Instance Profiles or OIDC Web Identity</strong> to authenticate without hardcoded static access keys.",
    tags: ["Terraform Backends", "Authentication", "IAM Roles"]
  },
  {
    id: "hashicorp-tfa-fc-179",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: -refresh-only Plan Semantics",
    hint: "Reconciling state to reality without touching cloud assets.",
    back: "A <strong>-refresh-only plan</strong> proposes updating the state file to adopt out-of-band cloud modifications without altering live infrastructure.",
    tags: ["Terraform CLI", "-refresh-only", "Drift Reconciliation"]
  },
  {
    id: "hashicorp-tfa-fc-180",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Piping state pull to jq",
    hint: "Programmatic querying of raw state JSON.",
    back: "Pipe <strong>terraform state pull | jq '...'</strong> to query raw resource attributes, IDs, and metadata from remote backends programmatically.",
    tags: ["Terraform CLI", "state pull and jq", "Scripting"]
  },
  {
    id: "hashicorp-tfa-fc-181",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: Consul Key-Value Backend",
    hint: "Native session-based locking for on-prem state.",
    back: "The <strong>consul backend</strong> uses Consul KV sessions to store state and manage distributed state locking natively.",
    tags: ["Terraform Backends", "Consul Backend", "On-Premises"]
  },
  {
    id: "hashicorp-tfa-fc-182",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Backends: HTTP Backend",
    hint: "RESTful state storage for custom platforms.",
    back: "The <strong>http backend</strong> stores state via standard REST endpoints (GET, POST, LOCK, UNLOCK), powering solutions like GitLab-managed state.",
    tags: ["Terraform Backends", "HTTP Backend", "GitLab State"]
  },
  {
    id: "hashicorp-tfa-fc-183",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Architecture: State File Decoupling",
    hint: "Confining blast radius and accelerating plan times.",
    back: "Splitting infrastructure into <strong>multiple independent state files</strong> confines blast radius and accelerates deployment performance.",
    tags: ["Terraform Architecture", "State Decoupling", "Blast Radius"]
  },
  {
    id: "hashicorp-tfa-fc-184",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Remote State Security: Plaintext Credential Exposure",
    hint: "Why broad state read access leaks secrets.",
    back: "Granting read access to remote state exposes <strong>all plaintext secrets in that state file</strong>; isolate sensitive states into separate restricted buckets.",
    tags: ["Terraform State", "terraform_remote_state Security", "Least Privilege"]
  },
  {
    id: "hashicorp-tfa-fc-185",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Taint: State-Level Marking",
    hint: "Flagging resources for recreation during apply.",
    back: "Tainting a resource flags it as <strong>tainted in state</strong>, causing Terraform to destroy and recreate it on the next apply.",
    tags: ["Terraform CLI", "Taint Internals", "State Mechanics"]
  },
  {
    id: "hashicorp-tfa-fc-186",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform CLI: -lock-timeout Flag",
    hint: "Retrying lock acquisition during transient concurrency.",
    back: "Use <strong>-lock-timeout=&lt;duration&gt;</strong> to instruct Terraform to retry acquiring busy state locks before failing.",
    tags: ["Terraform CLI", "-lock-timeout", "Concurrency Tuning"]
  },
  {
    id: "hashicorp-tfa-fc-187",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform CLI: -lock=false Flag",
    hint: "Bypassing state locks for emergency read-only plans.",
    back: "Use <strong>-lock=false</strong> for read-only plans when troubleshooting, but avoid using it during apply to prevent state corruption.",
    tags: ["Terraform CLI", "-lock=false", "Troubleshooting"]
  },
  {
    id: "hashicorp-tfa-fc-188",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: Resource Address Schema",
    hint: "&lt;type&gt;.&lt;name&gt; canonical addressing.",
    back: "Terraform maps code to cloud resources using canonical <strong>resource addresses</strong> (e.g. <code>aws_instance.web[\"prod\"]</code>).",
    tags: ["Terraform State", "Resource Addresses", "Core Concepts"]
  },
  {
    id: "hashicorp-tfa-fc-189",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Refactoring: moved Blocks & state mv",
    hint: "Restructuring code with zero infrastructure destruction.",
    back: "Use <strong>moved blocks</strong> or <strong>terraform state mv</strong> to update state addresses when refactoring, preventing resource destruction.",
    tags: ["Terraform State", "Refactoring", "moved blocks vs state mv"]
  },
  {
    id: "hashicorp-tfa-fc-190",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Detecting Code Deletions",
    hint: "Why state is necessary for resource destruction.",
    back: "The <strong>state file tracks previously created resources</strong>; when code blocks are deleted, Terraform references state to destroy the cloud asset.",
    tags: ["Terraform State", "Purpose of State", "Declarative Deletion"]
  },
  {
    id: "hashicorp-tfa-fc-191",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: terraform_version Check",
    hint: "Blocking older CLI binaries from corrupting newer state.",
    back: "Older Terraform CLI binaries <strong>refuse to modify state created by newer versions</strong> to prevent state corruption.",
    tags: ["Terraform State", "terraform_version", "Compatibility"]
  },
  {
    id: "hashicorp-tfa-fc-192",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Architecture: Multi-Account State Management",
    hint: "Centralized vs localized state bucket architecture.",
    back: "Isolate state files using <strong>per-account buckets or a centralized hardened management account</strong> with cross-account IAM role assumption.",
    tags: ["Terraform State", "Multi-Account Architecture", "Security"]
  },
  {
    id: "hashicorp-tfa-fc-193",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: Standard Plan vs. Refresh-Only Plan",
    hint: "Aligning cloud to code vs aligning state to cloud.",
    back: "<strong>Standard plan</strong> aligns cloud assets to declared code; <strong>refresh-only plan</strong> aligns the state file to live cloud reality.",
    tags: ["Terraform CLI", "Plan vs Refresh-Only", "State Synchronization"]
  },
  {
    id: "hashicorp-tfa-fc-194",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "S3 Backend: DynamoDB LockID Schema",
    hint: "Mandatory String partition key named LockID.",
    back: "The DynamoDB state locking table must use <strong>LockID (String)</strong> as its primary partition key.",
    tags: ["Terraform Backends", "DynamoDB Schema", "LockID"]
  },
  {
    id: "hashicorp-tfa-fc-195",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform CLI: terraform state push Disaster Recovery",
    hint: "Restoring stranded state to remote backends.",
    back: "Use <strong>terraform state push &lt;file&gt;</strong> to cleanly upload and re-register stranded state files with remote backends.",
    tags: ["Terraform CLI", "terraform state push", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-fc-196",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Attribute Caching",
    hint: "Preventing API rate limiting during graph resolution.",
    back: "Caching attributes in the <strong>state file eliminates redundant cloud API queries</strong>, preventing API throttling on large infrastructure stacks.",
    tags: ["Terraform State", "Performance", "API Rate Limiting"]
  },
  {
    id: "hashicorp-tfa-fc-197",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform: Content Hash Change Detection",
    hint: "Using filemd5 and state attributes for upload triggers.",
    back: "Terraform compares <strong>filemd5()</strong> hashes against state <code>etag</code> attributes to detect local file changes and trigger re-uploads.",
    tags: ["Terraform Functions", "filemd5", "Change Detection"]
  },
  {
    id: "hashicorp-tfa-fc-198",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform Import: Inline Attribute Population",
    hint: "How provider Read methods populate state.",
    back: "Importing a resource invokes the provider's <strong>Read API method</strong>, automatically populating all inline schema attributes into state.",
    tags: ["Terraform CLI", "terraform import", "Resource Schemas"]
  },
  {
    id: "hashicorp-tfa-fc-199",
    difficulty: "easy",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Never Commit State to Git",
    hint: "Plaintext secret leakage and concurrency race conditions.",
    back: "<strong>Never commit terraform.tfstate to Git</strong>; it leaks plaintext secrets into repository history and lacks distributed locking.",
    tags: ["Terraform State", ".gitignore", "Security Best Practices"]
  },
  {
    id: "hashicorp-tfa-fc-200",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d5",
    front: "Terraform State: Concurrency Control in CI/CD",
    hint: "Backend-level distributed locking across runners.",
    back: "<strong>Distributed backend locking</strong> provides mutual exclusion across parallel CI/CD runners, guaranteeing that concurrent applies cannot corrupt state.",
    tags: ["Terraform State", "CI/CD Safety", "Distributed Locking"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_8;
