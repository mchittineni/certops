export const AWS_SCS_QUESTIONS_19 = [
  {
    id: "aws-scs-451",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Object Lock: Compliance vs Governance Mode: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates S3 Object Lock Modes to protect regulatory financial records from deletion by anyone including AWS account root, while allowing test logs to be deleted by administrators.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Comparing Governance Mode (overridable with s3:BypassGovernanceRetention) vs Compliance Mode (immutable) is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs." },
      { id: 'B', text: "Use Compliance Mode for test logs, resulting in storage costs for data that can never be deleted before the timer expires." },
      { id: 'C', text: "Use standard S3 bucket versioning alone without Object Lock protection." },
      { id: 'D', text: "Disable S3 versioning and permit unrestricted permanent deletion of objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs. S3 Object Lock provides two retention modes: `Compliance Mode` (no user, including root, can delete objects or alter retention until it expires) and `Governance Mode` (protects objects from accidental deletion, but users with `s3:BypassGovernanceRetention` can delete them when necessary).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Enterprise Governance"]
  },
  {
    id: "aws-scs-452",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Object Lock: Compliance vs Governance Mode: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates S3 Object Lock Modes to protect regulatory financial records from deletion by anyone including AWS account root, while allowing test logs to be deleted by administrators.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Comparing Governance Mode (overridable with s3:BypassGovernanceRetention) vs Compliance Mode (immutable) is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs." },
      { id: 'B', text: "Use Compliance Mode for test logs, resulting in storage costs for data that can never be deleted before the timer expires." },
      { id: 'C', text: "Use standard S3 bucket versioning alone without Object Lock protection." },
      { id: 'D', text: "Disable S3 versioning and permit unrestricted permanent deletion of objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs. S3 Object Lock provides two retention modes: `Compliance Mode` (no user, including root, can delete objects or alter retention until it expires) and `Governance Mode` (protects objects from accidental deletion, but users with `s3:BypassGovernanceRetention` can delete them when necessary).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Incident Containment"]
  },
  {
    id: "aws-scs-453",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Object Lock: Compliance vs Governance Mode: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates S3 Object Lock Modes to protect regulatory financial records from deletion by anyone including AWS account root, while allowing test logs to be deleted by administrators.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Comparing Governance Mode (overridable with s3:BypassGovernanceRetention) vs Compliance Mode (immutable) is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs." },
      { id: 'B', text: "Use Compliance Mode for test logs, resulting in storage costs for data that can never be deleted before the timer expires." },
      { id: 'C', text: "Use standard S3 bucket versioning alone without Object Lock protection." },
      { id: 'D', text: "Disable S3 versioning and permit unrestricted permanent deletion of objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs. S3 Object Lock provides two retention modes: `Compliance Mode` (no user, including root, can delete objects or alter retention until it expires) and `Governance Mode` (protects objects from accidental deletion, but users with `s3:BypassGovernanceRetention` can delete them when necessary).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-454",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Object Lock: Compliance vs Governance Mode: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates S3 Object Lock Modes to protect regulatory financial records from deletion by anyone including AWS account root, while allowing test logs to be deleted by administrators.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Comparing Governance Mode (overridable with s3:BypassGovernanceRetention) vs Compliance Mode (immutable) is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs." },
      { id: 'B', text: "Use Compliance Mode for test logs, resulting in storage costs for data that can never be deleted before the timer expires." },
      { id: 'C', text: "Use standard S3 bucket versioning alone without Object Lock protection." },
      { id: 'D', text: "Disable S3 versioning and permit unrestricted permanent deletion of objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs. S3 Object Lock provides two retention modes: `Compliance Mode` (no user, including root, can delete objects or alter retention until it expires) and `Governance Mode` (protects objects from accidental deletion, but users with `s3:BypassGovernanceRetention` can delete them when necessary).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Data Protection"]
  },
  {
    id: "aws-scs-455",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Object Lock: Compliance vs Governance Mode: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates S3 Object Lock Modes to protect regulatory financial records from deletion by anyone including AWS account root, while allowing test logs to be deleted by administrators.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Comparing Governance Mode (overridable with s3:BypassGovernanceRetention) vs Compliance Mode (immutable) is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs." },
      { id: 'B', text: "Use Compliance Mode for test logs, resulting in storage costs for data that can never be deleted before the timer expires." },
      { id: 'C', text: "Use standard S3 bucket versioning alone without Object Lock protection." },
      { id: 'D', text: "Disable S3 versioning and permit unrestricted permanent deletion of objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use S3 Object Lock in Compliance Mode for financial records, and Governance Mode with `s3:BypassGovernanceRetention` for operational test logs. S3 Object Lock provides two retention modes: `Compliance Mode` (no user, including root, can delete objects or alter retention until it expires) and `Governance Mode` (protects objects from accidental deletion, but users with `s3:BypassGovernanceRetention` can delete them when necessary).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html",
    tags: ["S3 Object Lock Modes", "S3 Retention Modes", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-456",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon EBS Account-Level Default Encryption: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates EBS Default Encryption to guarantee that no unencrypted Amazon EBS volume or snapshot can ever be created in an enterprise AWS account.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Enforcing account-level encryption by default for all new EBS volumes and snapshot copies is under consideration.",
    options: [
      { id: 'A', text: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key." },
      { id: 'B', text: "Rely on developers to manually check the 'Encrypt' checkbox when launching every EC2 instance." },
      { id: 'C', text: "Disable volume encryption to increase disk I/O performance." },
      { id: 'D', text: "Store unencrypted EBS snapshots in public S3 buckets for backup purposes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key. Enabling EBS Encryption by Default ensures that all new EBS volumes and snapshot copies created in that region are encrypted using the specified KMS key. Any attempt to create an unencrypted volume is automatically converted to an encrypted volume, guaranteeing compliance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default",
    tags: ["EBS Default Encryption", "EBS Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-457",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon EBS Account-Level Default Encryption: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates EBS Default Encryption to guarantee that no unencrypted Amazon EBS volume or snapshot can ever be created in an enterprise AWS account.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Enforcing account-level encryption by default for all new EBS volumes and snapshot copies is under consideration.",
    options: [
      { id: 'A', text: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key." },
      { id: 'B', text: "Rely on developers to manually check the 'Encrypt' checkbox when launching every EC2 instance." },
      { id: 'C', text: "Disable volume encryption to increase disk I/O performance." },
      { id: 'D', text: "Store unencrypted EBS snapshots in public S3 buckets for backup purposes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key. Enabling EBS Encryption by Default ensures that all new EBS volumes and snapshot copies created in that region are encrypted using the specified KMS key. Any attempt to create an unencrypted volume is automatically converted to an encrypted volume, guaranteeing compliance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default",
    tags: ["EBS Default Encryption", "EBS Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-458",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon EBS Account-Level Default Encryption: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates EBS Default Encryption to guarantee that no unencrypted Amazon EBS volume or snapshot can ever be created in an enterprise AWS account.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Enforcing account-level encryption by default for all new EBS volumes and snapshot copies is under consideration.",
    options: [
      { id: 'A', text: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key." },
      { id: 'B', text: "Rely on developers to manually check the 'Encrypt' checkbox when launching every EC2 instance." },
      { id: 'C', text: "Disable volume encryption to increase disk I/O performance." },
      { id: 'D', text: "Store unencrypted EBS snapshots in public S3 buckets for backup purposes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key. Enabling EBS Encryption by Default ensures that all new EBS volumes and snapshot copies created in that region are encrypted using the specified KMS key. Any attempt to create an unencrypted volume is automatically converted to an encrypted volume, guaranteeing compliance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default",
    tags: ["EBS Default Encryption", "EBS Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-459",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon EBS Account-Level Default Encryption: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates EBS Default Encryption to guarantee that no unencrypted Amazon EBS volume or snapshot can ever be created in an enterprise AWS account.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Enforcing account-level encryption by default for all new EBS volumes and snapshot copies is under consideration.",
    options: [
      { id: 'A', text: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key." },
      { id: 'B', text: "Rely on developers to manually check the 'Encrypt' checkbox when launching every EC2 instance." },
      { id: 'C', text: "Disable volume encryption to increase disk I/O performance." },
      { id: 'D', text: "Store unencrypted EBS snapshots in public S3 buckets for backup purposes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key. Enabling EBS Encryption by Default ensures that all new EBS volumes and snapshot copies created in that region are encrypted using the specified KMS key. Any attempt to create an unencrypted volume is automatically converted to an encrypted volume, guaranteeing compliance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default",
    tags: ["EBS Default Encryption", "EBS Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-460",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon EBS Account-Level Default Encryption: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates EBS Default Encryption to guarantee that no unencrypted Amazon EBS volume or snapshot can ever be created in an enterprise AWS account.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Enforcing account-level encryption by default for all new EBS volumes and snapshot copies is under consideration.",
    options: [
      { id: 'A', text: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key." },
      { id: 'B', text: "Rely on developers to manually check the 'Encrypt' checkbox when launching every EC2 instance." },
      { id: 'C', text: "Disable volume encryption to increase disk I/O performance." },
      { id: 'D', text: "Store unencrypted EBS snapshots in public S3 buckets for backup purposes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable EBS Encryption by Default at the region/account level, specifying a customer-managed KMS key. Enabling EBS Encryption by Default ensures that all new EBS volumes and snapshot copies created in that region are encrypted using the specified KMS key. Any attempt to create an unencrypted volume is automatically converted to an encrypted volume, guaranteeing compliance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default",
    tags: ["EBS Default Encryption", "EBS Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-461",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting Existing Unencrypted Amazon RDS / Aurora Databases: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates RDS Database Encryption to encrypt an existing unencrypted Amazon Aurora PostgreSQL cluster in production with zero data loss.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Encrypting unencrypted database instances via snapshot copy with KMS key specification is under consideration.",
    options: [
      { id: 'A', text: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot." },
      { id: 'B', text: "Run an in-place `ALTER DATABASE ENCRYPT` SQL query on the live production cluster." },
      { id: 'C', text: "Export all database tables to unencrypted CSV files on developer laptops and re-import them." },
      { id: 'D', text: "It is impossible to encrypt an existing RDS database without writing custom application-layer encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot. Amazon RDS and Aurora storage cannot be encrypted after creation in-place. The official migration workflow requires: 1) creating a manual snapshot of the unencrypted database, 2) copying the snapshot while specifying a KMS encryption key, and 3) restoring a new encrypted cluster from the encrypted snapshot.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
    tags: ["RDS Database Encryption", "RDS Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-462",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting Existing Unencrypted Amazon RDS / Aurora Databases: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates RDS Database Encryption to encrypt an existing unencrypted Amazon Aurora PostgreSQL cluster in production with zero data loss.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Encrypting unencrypted database instances via snapshot copy with KMS key specification is under consideration.",
    options: [
      { id: 'A', text: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot." },
      { id: 'B', text: "Run an in-place `ALTER DATABASE ENCRYPT` SQL query on the live production cluster." },
      { id: 'C', text: "Export all database tables to unencrypted CSV files on developer laptops and re-import them." },
      { id: 'D', text: "It is impossible to encrypt an existing RDS database without writing custom application-layer encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot. Amazon RDS and Aurora storage cannot be encrypted after creation in-place. The official migration workflow requires: 1) creating a manual snapshot of the unencrypted database, 2) copying the snapshot while specifying a KMS encryption key, and 3) restoring a new encrypted cluster from the encrypted snapshot.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
    tags: ["RDS Database Encryption", "RDS Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-463",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting Existing Unencrypted Amazon RDS / Aurora Databases: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates RDS Database Encryption to encrypt an existing unencrypted Amazon Aurora PostgreSQL cluster in production with zero data loss.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Encrypting unencrypted database instances via snapshot copy with KMS key specification is under consideration.",
    options: [
      { id: 'A', text: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot." },
      { id: 'B', text: "Run an in-place `ALTER DATABASE ENCRYPT` SQL query on the live production cluster." },
      { id: 'C', text: "Export all database tables to unencrypted CSV files on developer laptops and re-import them." },
      { id: 'D', text: "It is impossible to encrypt an existing RDS database without writing custom application-layer encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot. Amazon RDS and Aurora storage cannot be encrypted after creation in-place. The official migration workflow requires: 1) creating a manual snapshot of the unencrypted database, 2) copying the snapshot while specifying a KMS encryption key, and 3) restoring a new encrypted cluster from the encrypted snapshot.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
    tags: ["RDS Database Encryption", "RDS Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-464",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting Existing Unencrypted Amazon RDS / Aurora Databases: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates RDS Database Encryption to encrypt an existing unencrypted Amazon Aurora PostgreSQL cluster in production with zero data loss.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Encrypting unencrypted database instances via snapshot copy with KMS key specification is under consideration.",
    options: [
      { id: 'A', text: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot." },
      { id: 'B', text: "Run an in-place `ALTER DATABASE ENCRYPT` SQL query on the live production cluster." },
      { id: 'C', text: "Export all database tables to unencrypted CSV files on developer laptops and re-import them." },
      { id: 'D', text: "It is impossible to encrypt an existing RDS database without writing custom application-layer encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot. Amazon RDS and Aurora storage cannot be encrypted after creation in-place. The official migration workflow requires: 1) creating a manual snapshot of the unencrypted database, 2) copying the snapshot while specifying a KMS encryption key, and 3) restoring a new encrypted cluster from the encrypted snapshot.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
    tags: ["RDS Database Encryption", "RDS Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-465",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting Existing Unencrypted Amazon RDS / Aurora Databases: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates RDS Database Encryption to encrypt an existing unencrypted Amazon Aurora PostgreSQL cluster in production with zero data loss.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Encrypting unencrypted database instances via snapshot copy with KMS key specification is under consideration.",
    options: [
      { id: 'A', text: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot." },
      { id: 'B', text: "Run an in-place `ALTER DATABASE ENCRYPT` SQL query on the live production cluster." },
      { id: 'C', text: "Export all database tables to unencrypted CSV files on developer laptops and re-import them." },
      { id: 'D', text: "It is impossible to encrypt an existing RDS database without writing custom application-layer encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Take a snapshot of the unencrypted cluster, copy the snapshot while specifying a KMS CMK to encrypt it, and restore a new cluster from the encrypted snapshot. Amazon RDS and Aurora storage cannot be encrypted after creation in-place. The official migration workflow requires: 1) creating a manual snapshot of the unencrypted database, 2) copying the snapshot while specifying a KMS encryption key, and 3) restoring a new encrypted cluster from the encrypted snapshot.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Enabling",
    tags: ["RDS Database Encryption", "RDS Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-466",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Control Tower Guardrails and Landing Zone Baselines: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Control Tower to enforce mandatory organizational security baselines automatically whenever a new AWS account is vended to a development team.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Preventive (SCPs) and Detective (AWS Config) guardrails for automated landing zone governance is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails." },
      { id: 'B', text: "Manually configure security settings, IAM roles, and logging on each new account using interactive console clicks." },
      { id: 'C', text: "Allow developers to create standalone personal AWS accounts with corporate credit cards." },
      { id: 'D', text: "Disable organizational landing zones to minimize AWS management fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails. AWS Control Tower automates multi-account governance. It provisions an Account Factory to vend standardized accounts with baseline security: preventive guardrails (enforced by Service Control Policies) and detective guardrails (monitored by AWS Config rules) ensure continuous compliance.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
    tags: ["Control Tower", "Control Tower Guardrails", "Enterprise Governance"]
  },
  {
    id: "aws-scs-467",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Control Tower Guardrails and Landing Zone Baselines: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Control Tower to enforce mandatory organizational security baselines automatically whenever a new AWS account is vended to a development team.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Preventive (SCPs) and Detective (AWS Config) guardrails for automated landing zone governance is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails." },
      { id: 'B', text: "Manually configure security settings, IAM roles, and logging on each new account using interactive console clicks." },
      { id: 'C', text: "Allow developers to create standalone personal AWS accounts with corporate credit cards." },
      { id: 'D', text: "Disable organizational landing zones to minimize AWS management fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails. AWS Control Tower automates multi-account governance. It provisions an Account Factory to vend standardized accounts with baseline security: preventive guardrails (enforced by Service Control Policies) and detective guardrails (monitored by AWS Config rules) ensure continuous compliance.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
    tags: ["Control Tower", "Control Tower Guardrails", "Incident Containment"]
  },
  {
    id: "aws-scs-468",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Control Tower Guardrails and Landing Zone Baselines: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Control Tower to enforce mandatory organizational security baselines automatically whenever a new AWS account is vended to a development team.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Preventive (SCPs) and Detective (AWS Config) guardrails for automated landing zone governance is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails." },
      { id: 'B', text: "Manually configure security settings, IAM roles, and logging on each new account using interactive console clicks." },
      { id: 'C', text: "Allow developers to create standalone personal AWS accounts with corporate credit cards." },
      { id: 'D', text: "Disable organizational landing zones to minimize AWS management fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails. AWS Control Tower automates multi-account governance. It provisions an Account Factory to vend standardized accounts with baseline security: preventive guardrails (enforced by Service Control Policies) and detective guardrails (monitored by AWS Config rules) ensure continuous compliance.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
    tags: ["Control Tower", "Control Tower Guardrails", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-469",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Control Tower Guardrails and Landing Zone Baselines: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Control Tower to enforce mandatory organizational security baselines automatically whenever a new AWS account is vended to a development team.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Preventive (SCPs) and Detective (AWS Config) guardrails for automated landing zone governance is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails." },
      { id: 'B', text: "Manually configure security settings, IAM roles, and logging on each new account using interactive console clicks." },
      { id: 'C', text: "Allow developers to create standalone personal AWS accounts with corporate credit cards." },
      { id: 'D', text: "Disable organizational landing zones to minimize AWS management fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails. AWS Control Tower automates multi-account governance. It provisions an Account Factory to vend standardized accounts with baseline security: preventive guardrails (enforced by Service Control Policies) and detective guardrails (monitored by AWS Config rules) ensure continuous compliance.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
    tags: ["Control Tower", "Control Tower Guardrails", "Data Protection"]
  },
  {
    id: "aws-scs-470",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Control Tower Guardrails and Landing Zone Baselines: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Control Tower to enforce mandatory organizational security baselines automatically whenever a new AWS account is vended to a development team.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Preventive (SCPs) and Detective (AWS Config) guardrails for automated landing zone governance is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails." },
      { id: 'B', text: "Manually configure security settings, IAM roles, and logging on each new account using interactive console clicks." },
      { id: 'C', text: "Allow developers to create standalone personal AWS accounts with corporate credit cards." },
      { id: 'D', text: "Disable organizational landing zones to minimize AWS management fees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Control Tower, establishing a multi-account Landing Zone with mandatory preventive SCPs and detective Config guardrails. AWS Control Tower automates multi-account governance. It provisions an Account Factory to vend standardized accounts with baseline security: preventive guardrails (enforced by Service Control Policies) and detective guardrails (monitored by AWS Config rules) ensure continuous compliance.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html",
    tags: ["Control Tower", "Control Tower Guardrails", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-471",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config Conformance Packs for Regulatory Compliance: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Conformance Packs to demonstrate compliance with the CIS AWS Foundations Benchmark across 150 enterprise accounts using automated conformance packs.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Deploying bundled collections of AWS Config rules and remediation documents across all accounts is under consideration.",
    options: [
      { id: 'A', text: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account." },
      { id: 'B', text: "Manually create 50 individual Config rules in each of the 150 accounts." },
      { id: 'C', text: "Falsify regulatory compliance reports and submit them to external auditors." },
      { id: 'D', text: "Disable compliance monitoring to prevent generating non-compliance alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account. AWS Config Conformance Packs are collections of AWS Config rules and remediation documents packaged into a single YAML template. Security teams deploy organization conformance packs from the management account, automatically enforcing regulatory frameworks (CIS, PCI-DSS, HIPAA) across all member accounts.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["Conformance Packs", "Conformance Packs", "Enterprise Governance"]
  },
  {
    id: "aws-scs-472",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config Conformance Packs for Regulatory Compliance: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Conformance Packs to demonstrate compliance with the CIS AWS Foundations Benchmark across 150 enterprise accounts using automated conformance packs.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Deploying bundled collections of AWS Config rules and remediation documents across all accounts is under consideration.",
    options: [
      { id: 'A', text: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account." },
      { id: 'B', text: "Manually create 50 individual Config rules in each of the 150 accounts." },
      { id: 'C', text: "Falsify regulatory compliance reports and submit them to external auditors." },
      { id: 'D', text: "Disable compliance monitoring to prevent generating non-compliance alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account. AWS Config Conformance Packs are collections of AWS Config rules and remediation documents packaged into a single YAML template. Security teams deploy organization conformance packs from the management account, automatically enforcing regulatory frameworks (CIS, PCI-DSS, HIPAA) across all member accounts.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["Conformance Packs", "Conformance Packs", "Incident Containment"]
  },
  {
    id: "aws-scs-473",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config Conformance Packs for Regulatory Compliance: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Conformance Packs to demonstrate compliance with the CIS AWS Foundations Benchmark across 150 enterprise accounts using automated conformance packs.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Deploying bundled collections of AWS Config rules and remediation documents across all accounts is under consideration.",
    options: [
      { id: 'A', text: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account." },
      { id: 'B', text: "Manually create 50 individual Config rules in each of the 150 accounts." },
      { id: 'C', text: "Falsify regulatory compliance reports and submit them to external auditors." },
      { id: 'D', text: "Disable compliance monitoring to prevent generating non-compliance alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account. AWS Config Conformance Packs are collections of AWS Config rules and remediation documents packaged into a single YAML template. Security teams deploy organization conformance packs from the management account, automatically enforcing regulatory frameworks (CIS, PCI-DSS, HIPAA) across all member accounts.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["Conformance Packs", "Conformance Packs", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-474",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config Conformance Packs for Regulatory Compliance: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Conformance Packs to demonstrate compliance with the CIS AWS Foundations Benchmark across 150 enterprise accounts using automated conformance packs.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Deploying bundled collections of AWS Config rules and remediation documents across all accounts is under consideration.",
    options: [
      { id: 'A', text: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account." },
      { id: 'B', text: "Manually create 50 individual Config rules in each of the 150 accounts." },
      { id: 'C', text: "Falsify regulatory compliance reports and submit them to external auditors." },
      { id: 'D', text: "Disable compliance monitoring to prevent generating non-compliance alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account. AWS Config Conformance Packs are collections of AWS Config rules and remediation documents packaged into a single YAML template. Security teams deploy organization conformance packs from the management account, automatically enforcing regulatory frameworks (CIS, PCI-DSS, HIPAA) across all member accounts.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["Conformance Packs", "Conformance Packs", "Data Protection"]
  },
  {
    id: "aws-scs-475",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config Conformance Packs for Regulatory Compliance: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Conformance Packs to demonstrate compliance with the CIS AWS Foundations Benchmark across 150 enterprise accounts using automated conformance packs.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Deploying bundled collections of AWS Config rules and remediation documents across all accounts is under consideration.",
    options: [
      { id: 'A', text: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account." },
      { id: 'B', text: "Manually create 50 individual Config rules in each of the 150 accounts." },
      { id: 'C', text: "Falsify regulatory compliance reports and submit them to external auditors." },
      { id: 'D', text: "Disable compliance monitoring to prevent generating non-compliance alerts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the CIS AWS Foundations Conformance Pack across the organization using the Organizations management account. AWS Config Conformance Packs are collections of AWS Config rules and remediation documents packaged into a single YAML template. Security teams deploy organization conformance packs from the management account, automatically enforcing regulatory frameworks (CIS, PCI-DSS, HIPAA) across all member accounts.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["Conformance Packs", "Conformance Packs", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_19;
