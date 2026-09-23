export const HASHICORP_TFP_FLASHCARDS_16 = [
  {
    id: "hashicorp-tfp-fc-376",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Terraform State Encryption at Rest (Dr Failover)",
    hint: "Terraform encrypts state through the backend, not the configuration.",
    back: "Terraform has <strong>no client-side state encryption block</strong> (that is OpenTofu). Protect state at rest with backend encryption under a customer-managed KMS key, e.g. S3 <code>encrypt = true</code> plus <code>kms_key_id</code> with key rotation, or rely on HCP Terraform, which encrypts state itself.",
    tags: ["State Encryption", "Backend Encryption", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-377",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Terraform State Encryption at Rest (High Load Scale)",
    hint: "Terraform encrypts state through the backend, not the configuration.",
    back: "Terraform has <strong>no client-side state encryption block</strong> (that is OpenTofu). Protect state at rest with backend encryption under a customer-managed KMS key, e.g. S3 <code>encrypt = true</code> plus <code>kms_key_id</code> with key rotation, or rely on HCP Terraform, which encrypts state itself.",
    tags: ["State Encryption", "Backend Encryption", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-378",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Terraform State Encryption at Rest (Security Compliance)",
    hint: "Terraform encrypts state through the backend, not the configuration.",
    back: "Terraform has <strong>no client-side state encryption block</strong> (that is OpenTofu). Protect state at rest with backend encryption under a customer-managed KMS key, e.g. S3 <code>encrypt = true</code> plus <code>kms_key_id</code> with key rotation, or rely on HCP Terraform, which encrypts state itself.",
    tags: ["State Encryption", "Backend Encryption", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-379",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Terraform State Encryption at Rest (Hybrid Migration)",
    hint: "Terraform encrypts state through the backend, not the configuration.",
    back: "Terraform has <strong>no client-side state encryption block</strong> (that is OpenTofu). Protect state at rest with backend encryption under a customer-managed KMS key, e.g. S3 <code>encrypt = true</code> plus <code>kms_key_id</code> with key rotation, or rely on HCP Terraform, which encrypts state itself.",
    tags: ["State Encryption", "Backend Encryption", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-380",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Terraform State Encryption at Rest (Resilience Failure)",
    hint: "Terraform encrypts state through the backend, not the configuration.",
    back: "Terraform has <strong>no client-side state encryption block</strong> (that is OpenTofu). Protect state at rest with backend encryption under a customer-managed KMS key, e.g. S3 <code>encrypt = true</code> plus <code>kms_key_id</code> with key rotation, or rely on HCP Terraform, which encrypts state itself.",
    tags: ["State Encryption", "Backend Encryption", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-381",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Manual State Repair with state pull and state push (Dr Failover)",
    hint: "Surgically repairing state with serial validation and safety checks.",
    back: "Using <strong>terraform state pull and terraform state push</strong> enables controlled state inspection and repair while enforcing serial number checks to prevent overwriting newer state.",
    tags: ["State Disaster Recovery", "state pull and push", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-382",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Manual State Repair with state pull and state push (High Load Scale)",
    hint: "Surgically repairing state with serial validation and safety checks.",
    back: "Using <strong>terraform state pull and terraform state push</strong> enables controlled state inspection and repair while enforcing serial number checks to prevent overwriting newer state.",
    tags: ["State Disaster Recovery", "state pull and push", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-383",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Manual State Repair with state pull and state push (Security Compliance)",
    hint: "Surgically repairing state with serial validation and safety checks.",
    back: "Using <strong>terraform state pull and terraform state push</strong> enables controlled state inspection and repair while enforcing serial number checks to prevent overwriting newer state.",
    tags: ["State Disaster Recovery", "state pull and push", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-384",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Manual State Repair with state pull and state push (Hybrid Migration)",
    hint: "Surgically repairing state with serial validation and safety checks.",
    back: "Using <strong>terraform state pull and terraform state push</strong> enables controlled state inspection and repair while enforcing serial number checks to prevent overwriting newer state.",
    tags: ["State Disaster Recovery", "state pull and push", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-385",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Manual State Repair with state pull and state push (Resilience Failure)",
    hint: "Surgically repairing state with serial validation and safety checks.",
    back: "Using <strong>terraform state pull and terraform state push</strong> enables controlled state inspection and repair while enforcing serial number checks to prevent overwriting newer state.",
    tags: ["State Disaster Recovery", "state pull and push", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-386",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Decomposing Monolithic State into Micro-States (Dr Failover)",
    hint: "Partitioning large state files to accelerate plans and avoid API throttling.",
    back: "Partitioning monolithic state into <strong>smaller, decoupled state files</strong> speeds up plan generation, prevents cloud API rate limiting, and minimizes lock contention across teams.",
    tags: ["State Architecture", "State Decomposition", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-387",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Decomposing Monolithic State into Micro-States (High Load Scale)",
    hint: "Partitioning large state files to accelerate plans and avoid API throttling.",
    back: "Partitioning monolithic state into <strong>smaller, decoupled state files</strong> speeds up plan generation, prevents cloud API rate limiting, and minimizes lock contention across teams.",
    tags: ["State Architecture", "State Decomposition", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-388",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Decomposing Monolithic State into Micro-States (Security Compliance)",
    hint: "Partitioning large state files to accelerate plans and avoid API throttling.",
    back: "Partitioning monolithic state into <strong>smaller, decoupled state files</strong> speeds up plan generation, prevents cloud API rate limiting, and minimizes lock contention across teams.",
    tags: ["State Architecture", "State Decomposition", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-389",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Decomposing Monolithic State into Micro-States (Hybrid Migration)",
    hint: "Partitioning large state files to accelerate plans and avoid API throttling.",
    back: "Partitioning monolithic state into <strong>smaller, decoupled state files</strong> speeds up plan generation, prevents cloud API rate limiting, and minimizes lock contention across teams.",
    tags: ["State Architecture", "State Decomposition", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-390",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d3",
    front: "Decomposing Monolithic State into Micro-States (Resilience Failure)",
    hint: "Partitioning large state files to accelerate plans and avoid API throttling.",
    back: "Partitioning monolithic state into <strong>smaller, decoupled state files</strong> speeds up plan generation, prevents cloud API rate limiting, and minimizes lock contention across teams.",
    tags: ["State Architecture", "State Decomposition", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-391",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Purging Historical Sensitive Data from State (Dr Failover)",
    hint: "Rotating exposed secrets and purging historical state bucket snapshots.",
    back: "Remediating leaked secrets in state requires <strong>rotating the credential in the cloud</strong> and purging older state revisions from versioned backend storage buckets.",
    tags: ["State Sanitization", "State Sanitization", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-392",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Purging Historical Sensitive Data from State (High Load Scale)",
    hint: "Rotating exposed secrets and purging historical state bucket snapshots.",
    back: "Remediating leaked secrets in state requires <strong>rotating the credential in the cloud</strong> and purging older state revisions from versioned backend storage buckets.",
    tags: ["State Sanitization", "State Sanitization", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-393",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Purging Historical Sensitive Data from State (Security Compliance)",
    hint: "Rotating exposed secrets and purging historical state bucket snapshots.",
    back: "Remediating leaked secrets in state requires <strong>rotating the credential in the cloud</strong> and purging older state revisions from versioned backend storage buckets.",
    tags: ["State Sanitization", "State Sanitization", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-394",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Purging Historical Sensitive Data from State (Hybrid Migration)",
    hint: "Rotating exposed secrets and purging historical state bucket snapshots.",
    back: "Remediating leaked secrets in state requires <strong>rotating the credential in the cloud</strong> and purging older state revisions from versioned backend storage buckets.",
    tags: ["State Sanitization", "State Sanitization", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-395",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d2",
    front: "Purging Historical Sensitive Data from State (Resilience Failure)",
    hint: "Rotating exposed secrets and purging historical state bucket snapshots.",
    back: "Remediating leaked secrets in state requires <strong>rotating the credential in the cloud</strong> and purging older state revisions from versioned backend storage buckets.",
    tags: ["State Sanitization", "State Sanitization", "Resilience Failure"]
  },
  {
    id: "hashicorp-tfp-fc-396",
    difficulty: "hard",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Operational Risks of -target in Production (Dr Failover)",
    hint: "Recognizing state divergence risks and reserving targeting for emergency recovery.",
    back: "Relying on <strong>-target</strong> bypasses dependency evaluation and introduces state drift; it should be reserved for bootstrapping or emergency recovery, not daily operational workflows.",
    tags: ["Targeting Risks", "Targeting Risks", "Dr Failover"]
  },
  {
    id: "hashicorp-tfp-fc-397",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Operational Risks of -target in Production (High Load Scale)",
    hint: "Recognizing state divergence risks and reserving targeting for emergency recovery.",
    back: "Relying on <strong>-target</strong> bypasses dependency evaluation and introduces state drift; it should be reserved for bootstrapping or emergency recovery, not daily operational workflows.",
    tags: ["Targeting Risks", "Targeting Risks", "High Load Scale"]
  },
  {
    id: "hashicorp-tfp-fc-398",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Operational Risks of -target in Production (Security Compliance)",
    hint: "Recognizing state divergence risks and reserving targeting for emergency recovery.",
    back: "Relying on <strong>-target</strong> bypasses dependency evaluation and introduces state drift; it should be reserved for bootstrapping or emergency recovery, not daily operational workflows.",
    tags: ["Targeting Risks", "Targeting Risks", "Security Compliance"]
  },
  {
    id: "hashicorp-tfp-fc-399",
    difficulty: "easy",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Operational Risks of -target in Production (Hybrid Migration)",
    hint: "Recognizing state divergence risks and reserving targeting for emergency recovery.",
    back: "Relying on <strong>-target</strong> bypasses dependency evaluation and introduces state drift; it should be reserved for bootstrapping or emergency recovery, not daily operational workflows.",
    tags: ["Targeting Risks", "Targeting Risks", "Hybrid Migration"]
  },
  {
    id: "hashicorp-tfp-fc-400",
    difficulty: "medium",
    certId: "hashicorp-tfp",
    domainId: "d1",
    front: "Operational Risks of -target in Production (Resilience Failure)",
    hint: "Recognizing state divergence risks and reserving targeting for emergency recovery.",
    back: "Relying on <strong>-target</strong> bypasses dependency evaluation and introduces state drift; it should be reserved for bootstrapping or emergency recovery, not daily operational workflows.",
    tags: ["Targeting Risks", "Targeting Risks", "Resilience Failure"]
  }
];

export default HASHICORP_TFP_FLASHCARDS_16;
