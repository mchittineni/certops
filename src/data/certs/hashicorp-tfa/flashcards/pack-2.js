export const HASHICORP_TFA_FLASHCARDS_2 = [
  {
    id: "hashicorp-tfa-fc-26",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Providers: Source Address Schema",
    hint: "hostname/namespace/type format.",
    back: "Provider source addresses follow the <strong>hostname/namespace/type</strong> schema (e.g. <code>registry.terraform.io/hashicorp/aws</code>).",
    tags: ["Terraform", "Providers", "Registry"]
  },
  {
    id: "hashicorp-tfa-fc-27",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: Pessimistic Version Operator (~>)",
    hint: "Locking major/minor versions while allowing patches.",
    back: "The <strong>~&gt; 3.2.0</strong> operator allows patch releases up to <strong>&lt; 3.3.0</strong>, protecting against breaking API changes.",
    tags: ["Terraform", "Version Constraints", "Pessimistic Operator"]
  },
  {
    id: "hashicorp-tfa-fc-28",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Providers: Multiple Configurations via Alias",
    hint: "Deploying across multiple regions.",
    back: "Use the <strong>alias</strong> attribute in a secondary provider block and reference it in resources with <code>provider = aws.alias_name</code>.",
    tags: ["Terraform", "Providers", "Alias"]
  },
  {
    id: "hashicorp-tfa-fc-29",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Provisioners: Last Resort Rule",
    hint: "Why provisioners undermine declarative IaC.",
    back: "Provisioners are a <strong>measure of last resort</strong> because they execute imperative scripts outside Terraform's declarative model and state tracking.",
    tags: ["Terraform", "Provisioners", "Best Practices"]
  },
  {
    id: "hashicorp-tfa-fc-30",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provisioners: local-exec Execution Context",
    hint: "Running commands on the Terraform CLI host.",
    back: "The <strong>local-exec provisioner</strong> runs shell commands locally on the machine executing Terraform, not on the remote cloud instance.",
    tags: ["Terraform", "Provisioners", "local-exec"]
  },
  {
    id: "hashicorp-tfa-fc-31",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provisioners: connection Block",
    hint: "Configuring SSH and WinRM credentials.",
    back: "A <strong>connection block</strong> (specifying SSH/WinRM protocol, user, and keys) is required for <code>remote-exec</code> and <code>file</code> provisioners.",
    tags: ["Terraform", "Provisioners", "remote-exec"]
  },
  {
    id: "hashicorp-tfa-fc-32",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provisioners: Failure Behavior",
    hint: "Default tainted status vs on_failure = continue.",
    back: "By default, failed provisioners mark the resource <strong>tainted</strong> and halt; set <strong>on_failure = continue</strong> to ignore non-critical script failures.",
    tags: ["Terraform", "Provisioners", "on_failure"]
  },
  {
    id: "hashicorp-tfa-fc-33",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Provisioners: Destroy-Time Provisioners",
    hint: "Running cleanup commands prior to resource deletion.",
    back: "Declare <strong>when = destroy</strong> in a provisioner block to execute cleanup scripts immediately before the resource is deleted from the cloud.",
    tags: ["Terraform", "Provisioners", "Destroy-Time"]
  },
  {
    id: "hashicorp-tfa-fc-34",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Destroy Provisioners: Failure Semantics",
    hint: "Halting teardown to protect resources.",
    back: "If a <strong>destroy-time provisioner fails</strong>, Terraform halts destruction and preserves the resource in state for troubleshooting.",
    tags: ["Terraform", "Provisioners", "Failure Handling"]
  },
  {
    id: "hashicorp-tfa-fc-35",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Registry: Provider Tiers",
    hint: "Official, Partner, and Community.",
    back: "<strong>Official providers</strong> are owned and maintained by HashiCorp; <strong>Partner providers</strong> are maintained by third-party vendors, and <strong>Community providers</strong> by individuals.",
    tags: ["Terraform", "Provider Tiers", "Registry"]
  },
  {
    id: "hashicorp-tfa-fc-36",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Dependencies: Implicit vs. Explicit",
    hint: "Automatic graph resolution via attribute references.",
    back: "Referencing another resource's attribute creates an <strong>implicit dependency</strong>; Terraform automatically orders provisioning in the DAG graph.",
    tags: ["Terraform", "Dependencies", "Implicit vs Explicit"]
  },
  {
    id: "hashicorp-tfa-fc-37",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: depends_on Meta-Argument",
    hint: "Declaring explicit ordering constraints.",
    back: "Use <strong>depends_on = [...]</strong> to enforce explicit ordering when resources depend on each other without direct attribute references.",
    tags: ["Terraform", "depends_on", "Dependencies"]
  },
  {
    id: "hashicorp-tfa-fc-38",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Remote Execution",
    hint: "Offloading CLI runs to cloud container runners.",
    back: "In Terraform Cloud, <strong>plan and apply execute remotely</strong> in managed container runners, centralizing credentials, state locking, and execution logs.",
    tags: ["Terraform Cloud", "Remote Execution", "Enterprise"]
  },
  {
    id: "hashicorp-tfa-fc-39",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Private Module Registry",
    hint: "Curating internal organizational modules.",
    back: "The <strong>Private Module Registry</strong> in Terraform Cloud securely hosts internal, versioned modules with automated docs and access controls.",
    tags: ["Terraform Cloud", "Private Registry", "Module Governance"]
  },
  {
    id: "hashicorp-tfa-fc-40",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Workspaces",
    hint: "Comprehensive operational and state units.",
    back: "A <strong>Terraform Cloud Workspace</strong> bundles configuration, state, variables, credentials, run history, and access policies into an autonomous management unit.",
    tags: ["Terraform Cloud", "Workspaces", "Governance"]
  },
  {
    id: "hashicorp-tfa-fc-41",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Speculative Plans in VCS",
    hint: "Automated plan validation on pull requests.",
    back: "Terraform Cloud automatically runs <strong>speculative plans on pull requests</strong>, displaying proposed resource changes directly on GitHub/GitLab before merging.",
    tags: ["Terraform Cloud", "VCS Workflow", "GitOps"]
  },
  {
    id: "hashicorp-tfa-fc-42",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Cloud: Speculative Plans are Read-Only",
    hint: "Previewing changes without apply risk.",
    back: "<strong>Speculative plans are strictly read-only</strong> and cannot be applied; they exist solely to preview diffs and test policy compliance during code reviews.",
    tags: ["Terraform Cloud", "Speculative Plans", "Safety"]
  },
  {
    id: "hashicorp-tfa-fc-43",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: required_providers Block",
    hint: "Declaring source addresses and version constraints.",
    back: "Declare provider requirements (source registry and version) inside <strong>terraform { required_providers { ... } }</strong>.",
    tags: ["Terraform", "required_providers", "Configuration"]
  },
  {
    id: "hashicorp-tfa-fc-44",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: Custom Provider Hostnames",
    hint: "Hosting in-house enterprise providers.",
    back: "Terraform supports <strong>custom registry hostnames</strong> (e.g. <code>registry.corp.com/team/provider</code>) for proprietary in-house provider distribution.",
    tags: ["Terraform", "Custom Providers", "Private Registry"]
  },
  {
    id: "hashicorp-tfa-fc-45",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform CLI: TF_PLUGIN_CACHE_DIR",
    hint: "Caching provider plugins centrally.",
    back: "Set <strong>TF_PLUGIN_CACHE_DIR</strong> to cache downloaded provider binaries globally, speeding up <code>terraform init</code> across projects.",
    tags: ["Terraform CLI", "TF_PLUGIN_CACHE_DIR", "Performance Tuning"]
  },
  {
    id: "hashicorp-tfa-fc-46",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: .terraform.lock.hcl",
    hint: "Locking exact provider versions and checksums.",
    back: "The <strong>.terraform.lock.hcl</strong> file locks exact provider versions and cryptographic checksums, guaranteeing reproducible builds and supply chain integrity.",
    tags: ["Terraform", "Lock File", "Supply Chain Security"]
  },
  {
    id: "hashicorp-tfa-fc-47",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: terraform init -upgrade",
    hint: "Updating locked provider dependencies.",
    back: "Run <strong>terraform init -upgrade</strong> to re-resolve version constraints and update the <code>.terraform.lock.hcl</code> dependency lock file.",
    tags: ["Terraform CLI", "terraform init -upgrade", "Dependencies"]
  },
  {
    id: "hashicorp-tfa-fc-48",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform S3 Backend: DynamoDB State Locking",
    hint: "Preventing concurrent race conditions.",
    back: "Pair the S3 backend with a <strong>DynamoDB table</strong> to enforce distributed state locking and block concurrent <code>terraform apply</code> runs.",
    tags: ["Terraform", "State Locking", "S3 and DynamoDB"]
  },
  {
    id: "hashicorp-tfa-fc-49",
    difficulty: "hard",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform: terraform force-unlock",
    hint: "Releasing orphaned state locks.",
    back: "Run <strong>terraform force-unlock &lt;LOCK-ID&gt;</strong> to release stuck locks after confirming no active runs are executing.",
    tags: ["Terraform CLI", "force-unlock", "Disaster Recovery"]
  },
  {
    id: "hashicorp-tfa-fc-50",
    difficulty: "medium",
    certId: "hashicorp-tfa",
    domainId: "d2",
    front: "Terraform Backends: Standard vs. Enhanced",
    hint: "State storage vs remote execution.",
    back: "<strong>Standard backends</strong> (S3, GCS, AzureRM) handle state storage and locking; <strong>Enhanced backends</strong> (Terraform Cloud) also orchestrate remote execution.",
    tags: ["Terraform", "Backends", "Standard vs Enhanced"]
  }
];

export default HASHICORP_TFA_FLASHCARDS_2;
