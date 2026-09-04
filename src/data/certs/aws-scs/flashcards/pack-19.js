export const AWS_SCS_FLASHCARDS_19 = [
  {
    id: "aws-scs-fc-451",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "S3 Object Lock: Compliance vs Governance Mode (Enterprise Governance)",
    hint: "Selecting immutable Compliance Mode for regulatory data and flexible Governance Mode for operational logs.",
    back: "<strong>Compliance Mode</strong> in S3 Object Lock prevents any identity (including root) from deleting data, while <strong>Governance Mode</strong> allows authorized admins to bypass retention.",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-452",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "S3 Object Lock: Compliance vs Governance Mode (Incident Containment)",
    hint: "Selecting immutable Compliance Mode for regulatory data and flexible Governance Mode for operational logs.",
    back: "<strong>Compliance Mode</strong> in S3 Object Lock prevents any identity (including root) from deleting data, while <strong>Governance Mode</strong> allows authorized admins to bypass retention.",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-453",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "S3 Object Lock: Compliance vs Governance Mode (Zero Trust Iam)",
    hint: "Selecting immutable Compliance Mode for regulatory data and flexible Governance Mode for operational logs.",
    back: "<strong>Compliance Mode</strong> in S3 Object Lock prevents any identity (including root) from deleting data, while <strong>Governance Mode</strong> allows authorized admins to bypass retention.",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-454",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "S3 Object Lock: Compliance vs Governance Mode (Data Protection)",
    hint: "Selecting immutable Compliance Mode for regulatory data and flexible Governance Mode for operational logs.",
    back: "<strong>Compliance Mode</strong> in S3 Object Lock prevents any identity (including root) from deleting data, while <strong>Governance Mode</strong> allows authorized admins to bypass retention.",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Data Protection"]
  },
  {
    id: "aws-scs-fc-455",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "S3 Object Lock: Compliance vs Governance Mode (Infrastructure Defense)",
    hint: "Selecting immutable Compliance Mode for regulatory data and flexible Governance Mode for operational logs.",
    back: "<strong>Compliance Mode</strong> in S3 Object Lock prevents any identity (including root) from deleting data, while <strong>Governance Mode</strong> allows authorized admins to bypass retention.",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-456",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "EBS Encryption by Default at the Account Level (Enterprise Governance)",
    hint: "Enforcing automatic KMS encryption on all newly provisioned EBS volumes and snapshots.",
    back: "Enabling <strong>EBS Encryption by Default</strong> at the account level guarantees that all newly created EBS volumes and snapshots are automatically <strong>encrypted with KMS</strong>.",
    tags: ["EBS Default Encryption", "EBS Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-457",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "EBS Encryption by Default at the Account Level (Incident Containment)",
    hint: "Enforcing automatic KMS encryption on all newly provisioned EBS volumes and snapshots.",
    back: "Enabling <strong>EBS Encryption by Default</strong> at the account level guarantees that all newly created EBS volumes and snapshots are automatically <strong>encrypted with KMS</strong>.",
    tags: ["EBS Default Encryption", "EBS Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-458",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "EBS Encryption by Default at the Account Level (Zero Trust Iam)",
    hint: "Enforcing automatic KMS encryption on all newly provisioned EBS volumes and snapshots.",
    back: "Enabling <strong>EBS Encryption by Default</strong> at the account level guarantees that all newly created EBS volumes and snapshots are automatically <strong>encrypted with KMS</strong>.",
    tags: ["EBS Default Encryption", "EBS Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-459",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "EBS Encryption by Default at the Account Level (Data Protection)",
    hint: "Enforcing automatic KMS encryption on all newly provisioned EBS volumes and snapshots.",
    back: "Enabling <strong>EBS Encryption by Default</strong> at the account level guarantees that all newly created EBS volumes and snapshots are automatically <strong>encrypted with KMS</strong>.",
    tags: ["EBS Default Encryption", "EBS Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-fc-460",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "EBS Encryption by Default at the Account Level (Infrastructure Defense)",
    hint: "Enforcing automatic KMS encryption on all newly provisioned EBS volumes and snapshots.",
    back: "Enabling <strong>EBS Encryption by Default</strong> at the account level guarantees that all newly created EBS volumes and snapshots are automatically <strong>encrypted with KMS</strong>.",
    tags: ["EBS Default Encryption", "EBS Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-461",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    front: "Encrypting Existing Unencrypted RDS / Aurora Databases (Enterprise Governance)",
    hint: "Migrating unencrypted databases to encrypted storage via snapshot copy with KMS keys.",
    back: "Encrypting an existing unencrypted RDS database requires <strong>snapshotting the database, copying the snapshot with a KMS key to encrypt it</strong>, and restoring a new cluster.",
    tags: ["RDS Database Encryption", "RDS Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-462",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Encrypting Existing Unencrypted RDS / Aurora Databases (Incident Containment)",
    hint: "Migrating unencrypted databases to encrypted storage via snapshot copy with KMS keys.",
    back: "Encrypting an existing unencrypted RDS database requires <strong>snapshotting the database, copying the snapshot with a KMS key to encrypt it</strong>, and restoring a new cluster.",
    tags: ["RDS Database Encryption", "RDS Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-463",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Encrypting Existing Unencrypted RDS / Aurora Databases (Zero Trust Iam)",
    hint: "Migrating unencrypted databases to encrypted storage via snapshot copy with KMS keys.",
    back: "Encrypting an existing unencrypted RDS database requires <strong>snapshotting the database, copying the snapshot with a KMS key to encrypt it</strong>, and restoring a new cluster.",
    tags: ["RDS Database Encryption", "RDS Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-464",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    front: "Encrypting Existing Unencrypted RDS / Aurora Databases (Data Protection)",
    hint: "Migrating unencrypted databases to encrypted storage via snapshot copy with KMS keys.",
    back: "Encrypting an existing unencrypted RDS database requires <strong>snapshotting the database, copying the snapshot with a KMS key to encrypt it</strong>, and restoring a new cluster.",
    tags: ["RDS Database Encryption", "RDS Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-fc-465",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    front: "Encrypting Existing Unencrypted RDS / Aurora Databases (Infrastructure Defense)",
    hint: "Migrating unencrypted databases to encrypted storage via snapshot copy with KMS keys.",
    back: "Encrypting an existing unencrypted RDS database requires <strong>snapshotting the database, copying the snapshot with a KMS key to encrypt it</strong>, and restoring a new cluster.",
    tags: ["RDS Database Encryption", "RDS Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-466",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Control Tower Preventive and Detective Guardrails (Enterprise Governance)",
    hint: "Automating multi-account landing zone baselines using SCPs and AWS Config guardrails.",
    back: "<strong>AWS Control Tower</strong> governs multi-account environments using <strong>preventive guardrails (SCPs)</strong> to stop non-compliant actions and <strong>detective guardrails (Config)</strong> to monitor compliance.",
    tags: ["Control Tower", "Control Tower Guardrails", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-467",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Control Tower Preventive and Detective Guardrails (Incident Containment)",
    hint: "Automating multi-account landing zone baselines using SCPs and AWS Config guardrails.",
    back: "<strong>AWS Control Tower</strong> governs multi-account environments using <strong>preventive guardrails (SCPs)</strong> to stop non-compliant actions and <strong>detective guardrails (Config)</strong> to monitor compliance.",
    tags: ["Control Tower", "Control Tower Guardrails", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-468",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Control Tower Preventive and Detective Guardrails (Zero Trust Iam)",
    hint: "Automating multi-account landing zone baselines using SCPs and AWS Config guardrails.",
    back: "<strong>AWS Control Tower</strong> governs multi-account environments using <strong>preventive guardrails (SCPs)</strong> to stop non-compliant actions and <strong>detective guardrails (Config)</strong> to monitor compliance.",
    tags: ["Control Tower", "Control Tower Guardrails", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-469",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Control Tower Preventive and Detective Guardrails (Data Protection)",
    hint: "Automating multi-account landing zone baselines using SCPs and AWS Config guardrails.",
    back: "<strong>AWS Control Tower</strong> governs multi-account environments using <strong>preventive guardrails (SCPs)</strong> to stop non-compliant actions and <strong>detective guardrails (Config)</strong> to monitor compliance.",
    tags: ["Control Tower", "Control Tower Guardrails", "Data Protection"]
  },
  {
    id: "aws-scs-fc-470",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Control Tower Preventive and Detective Guardrails (Infrastructure Defense)",
    hint: "Automating multi-account landing zone baselines using SCPs and AWS Config guardrails.",
    back: "<strong>AWS Control Tower</strong> governs multi-account environments using <strong>preventive guardrails (SCPs)</strong> to stop non-compliant actions and <strong>detective guardrails (Config)</strong> to monitor compliance.",
    tags: ["Control Tower", "Control Tower Guardrails", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-fc-471",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Config Conformance Packs for Enterprise Compliance (Enterprise Governance)",
    hint: "Deploying pre-packaged collections of Config rules and auto-remediations across organization accounts.",
    back: "<strong>AWS Config Conformance Packs</strong> package bundles of compliance rules (like CIS Benchmarks) and <strong>automated remediations</strong> across all accounts in an organization.",
    tags: ["Conformance Packs", "Conformance Packs", "Enterprise Governance"]
  },
  {
    id: "aws-scs-fc-472",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Config Conformance Packs for Enterprise Compliance (Incident Containment)",
    hint: "Deploying pre-packaged collections of Config rules and auto-remediations across organization accounts.",
    back: "<strong>AWS Config Conformance Packs</strong> package bundles of compliance rules (like CIS Benchmarks) and <strong>automated remediations</strong> across all accounts in an organization.",
    tags: ["Conformance Packs", "Conformance Packs", "Incident Containment"]
  },
  {
    id: "aws-scs-fc-473",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Config Conformance Packs for Enterprise Compliance (Zero Trust Iam)",
    hint: "Deploying pre-packaged collections of Config rules and auto-remediations across organization accounts.",
    back: "<strong>AWS Config Conformance Packs</strong> package bundles of compliance rules (like CIS Benchmarks) and <strong>automated remediations</strong> across all accounts in an organization.",
    tags: ["Conformance Packs", "Conformance Packs", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-fc-474",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Config Conformance Packs for Enterprise Compliance (Data Protection)",
    hint: "Deploying pre-packaged collections of Config rules and auto-remediations across organization accounts.",
    back: "<strong>AWS Config Conformance Packs</strong> package bundles of compliance rules (like CIS Benchmarks) and <strong>automated remediations</strong> across all accounts in an organization.",
    tags: ["Conformance Packs", "Conformance Packs", "Data Protection"]
  },
  {
    id: "aws-scs-fc-475",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    front: "AWS Config Conformance Packs for Enterprise Compliance (Infrastructure Defense)",
    hint: "Deploying pre-packaged collections of Config rules and auto-remediations across organization accounts.",
    back: "<strong>AWS Config Conformance Packs</strong> package bundles of compliance rules (like CIS Benchmarks) and <strong>automated remediations</strong> across all accounts in an organization.",
    tags: ["Conformance Packs", "Conformance Packs", "Infrastructure Defense"]
  }
];

export default AWS_SCS_FLASHCARDS_19;
