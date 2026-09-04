export const AWS_SCS_QUESTIONS_18 = [
  {
    id: "aws-scs-426",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Cryptographic Access Control and Separation of Duties: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates KMS Key Policies to prevent KMS key administrators from decrypting sensitive corporate payroll data while allowing payroll applications to use the key.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Separating Key Administrators from Key Users and restricting service context via kms:ViaService is under consideration.",
    options: [
      { id: 'A', text: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`." },
      { id: 'B', text: "Grant full administrative wildcard `kms:*` permissions to both key administrators and application service roles." },
      { id: 'C', text: "Allow all IAM users in the account to perform `kms:Decrypt` unconditionally." },
      { id: 'D', text: "Disable key policies and rely exclusively on IAM identity policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`. KMS key policies enforce separation of duties. Key administrators manage key lifecycles (rotation, permissions, deletion) but lack `kms:Decrypt` and `kms:GenerateDataKey`. Furthermore, the `kms:ViaService` condition restricts key usage strictly through authorized services (e.g., S3 or Secrets Manager).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Enterprise Governance"]
  },
  {
    id: "aws-scs-427",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Cryptographic Access Control and Separation of Duties: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates KMS Key Policies to prevent KMS key administrators from decrypting sensitive corporate payroll data while allowing payroll applications to use the key.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Separating Key Administrators from Key Users and restricting service context via kms:ViaService is under consideration.",
    options: [
      { id: 'A', text: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`." },
      { id: 'B', text: "Grant full administrative wildcard `kms:*` permissions to both key administrators and application service roles." },
      { id: 'C', text: "Allow all IAM users in the account to perform `kms:Decrypt` unconditionally." },
      { id: 'D', text: "Disable key policies and rely exclusively on IAM identity policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`. KMS key policies enforce separation of duties. Key administrators manage key lifecycles (rotation, permissions, deletion) but lack `kms:Decrypt` and `kms:GenerateDataKey`. Furthermore, the `kms:ViaService` condition restricts key usage strictly through authorized services (e.g., S3 or Secrets Manager).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Incident Containment"]
  },
  {
    id: "aws-scs-428",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Cryptographic Access Control and Separation of Duties: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates KMS Key Policies to prevent KMS key administrators from decrypting sensitive corporate payroll data while allowing payroll applications to use the key.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Separating Key Administrators from Key Users and restricting service context via kms:ViaService is under consideration.",
    options: [
      { id: 'A', text: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`." },
      { id: 'B', text: "Grant full administrative wildcard `kms:*` permissions to both key administrators and application service roles." },
      { id: 'C', text: "Allow all IAM users in the account to perform `kms:Decrypt` unconditionally." },
      { id: 'D', text: "Disable key policies and rely exclusively on IAM identity policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`. KMS key policies enforce separation of duties. Key administrators manage key lifecycles (rotation, permissions, deletion) but lack `kms:Decrypt` and `kms:GenerateDataKey`. Furthermore, the `kms:ViaService` condition restricts key usage strictly through authorized services (e.g., S3 or Secrets Manager).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-429",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Cryptographic Access Control and Separation of Duties: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates KMS Key Policies to prevent KMS key administrators from decrypting sensitive corporate payroll data while allowing payroll applications to use the key.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Separating Key Administrators from Key Users and restricting service context via kms:ViaService is under consideration.",
    options: [
      { id: 'A', text: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`." },
      { id: 'B', text: "Grant full administrative wildcard `kms:*` permissions to both key administrators and application service roles." },
      { id: 'C', text: "Allow all IAM users in the account to perform `kms:Decrypt` unconditionally." },
      { id: 'D', text: "Disable key policies and rely exclusively on IAM identity policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`. KMS key policies enforce separation of duties. Key administrators manage key lifecycles (rotation, permissions, deletion) but lack `kms:Decrypt` and `kms:GenerateDataKey`. Furthermore, the `kms:ViaService` condition restricts key usage strictly through authorized services (e.g., S3 or Secrets Manager).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Data Protection"]
  },
  {
    id: "aws-scs-430",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Cryptographic Access Control and Separation of Duties: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates KMS Key Policies to prevent KMS key administrators from decrypting sensitive corporate payroll data while allowing payroll applications to use the key.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Separating Key Administrators from Key Users and restricting service context via kms:ViaService is under consideration.",
    options: [
      { id: 'A', text: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`." },
      { id: 'B', text: "Grant full administrative wildcard `kms:*` permissions to both key administrators and application service roles." },
      { id: 'C', text: "Allow all IAM users in the account to perform `kms:Decrypt` unconditionally." },
      { id: 'D', text: "Disable key policies and rely exclusively on IAM identity policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate Key Administrator permissions (`kms:Create*`, `kms:Put*`) from Key User permissions (`kms:Decrypt`), and enforce `kms:ViaService`. KMS key policies enforce separation of duties. Key administrators manage key lifecycles (rotation, permissions, deletion) but lack `kms:Decrypt` and `kms:GenerateDataKey`. Furthermore, the `kms:ViaService` condition restricts key usage strictly through authorized services (e.g., S3 or Secrets Manager).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS Key Policies", "KMS Separation of Duties", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-431",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Envelope Encryption and GenerateDataKey Architecture: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Envelope Encryption to encrypt large 50-gigabyte video files efficiently without sending massive binary payloads across the network to AWS KMS.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Client-side encryption using plaintext and ciphertext data keys via AWS KMS GenerateDataKey is under consideration.",
    options: [
      { id: 'A', text: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file." },
      { id: 'B', text: "Send the entire 50-gigabyte video file directly to the KMS `Encrypt` API, exceeding the 4KB payload limit." },
      { id: 'C', text: "Hardcode a static AES encryption key inside the application source code for all video files." },
      { id: 'D', text: "Store files in plaintext on unencrypted storage to avoid encryption overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file. AWS KMS `Encrypt` has a maximum payload limit of 4 KB. For larger datasets, envelope encryption is used: the application calls `kms:GenerateDataKey`, which returns a plaintext data key (to encrypt data locally with AES-256) and a ciphertext data key (stored with the encrypted object).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["Envelope Encryption", "Envelope Encryption", "Enterprise Governance"]
  },
  {
    id: "aws-scs-432",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Envelope Encryption and GenerateDataKey Architecture: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Envelope Encryption to encrypt large 50-gigabyte video files efficiently without sending massive binary payloads across the network to AWS KMS.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Client-side encryption using plaintext and ciphertext data keys via AWS KMS GenerateDataKey is under consideration.",
    options: [
      { id: 'A', text: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file." },
      { id: 'B', text: "Send the entire 50-gigabyte video file directly to the KMS `Encrypt` API, exceeding the 4KB payload limit." },
      { id: 'C', text: "Hardcode a static AES encryption key inside the application source code for all video files." },
      { id: 'D', text: "Store files in plaintext on unencrypted storage to avoid encryption overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file. AWS KMS `Encrypt` has a maximum payload limit of 4 KB. For larger datasets, envelope encryption is used: the application calls `kms:GenerateDataKey`, which returns a plaintext data key (to encrypt data locally with AES-256) and a ciphertext data key (stored with the encrypted object).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["Envelope Encryption", "Envelope Encryption", "Incident Containment"]
  },
  {
    id: "aws-scs-433",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Envelope Encryption and GenerateDataKey Architecture: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Envelope Encryption to encrypt large 50-gigabyte video files efficiently without sending massive binary payloads across the network to AWS KMS.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Client-side encryption using plaintext and ciphertext data keys via AWS KMS GenerateDataKey is under consideration.",
    options: [
      { id: 'A', text: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file." },
      { id: 'B', text: "Send the entire 50-gigabyte video file directly to the KMS `Encrypt` API, exceeding the 4KB payload limit." },
      { id: 'C', text: "Hardcode a static AES encryption key inside the application source code for all video files." },
      { id: 'D', text: "Store files in plaintext on unencrypted storage to avoid encryption overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file. AWS KMS `Encrypt` has a maximum payload limit of 4 KB. For larger datasets, envelope encryption is used: the application calls `kms:GenerateDataKey`, which returns a plaintext data key (to encrypt data locally with AES-256) and a ciphertext data key (stored with the encrypted object).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["Envelope Encryption", "Envelope Encryption", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-434",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Envelope Encryption and GenerateDataKey Architecture: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Envelope Encryption to encrypt large 50-gigabyte video files efficiently without sending massive binary payloads across the network to AWS KMS.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Client-side encryption using plaintext and ciphertext data keys via AWS KMS GenerateDataKey is under consideration.",
    options: [
      { id: 'A', text: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file." },
      { id: 'B', text: "Send the entire 50-gigabyte video file directly to the KMS `Encrypt` API, exceeding the 4KB payload limit." },
      { id: 'C', text: "Hardcode a static AES encryption key inside the application source code for all video files." },
      { id: 'D', text: "Store files in plaintext on unencrypted storage to avoid encryption overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file. AWS KMS `Encrypt` has a maximum payload limit of 4 KB. For larger datasets, envelope encryption is used: the application calls `kms:GenerateDataKey`, which returns a plaintext data key (to encrypt data locally with AES-256) and a ciphertext data key (stored with the encrypted object).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["Envelope Encryption", "Envelope Encryption", "Data Protection"]
  },
  {
    id: "aws-scs-435",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Envelope Encryption and GenerateDataKey Architecture: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Envelope Encryption to encrypt large 50-gigabyte video files efficiently without sending massive binary payloads across the network to AWS KMS.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Client-side encryption using plaintext and ciphertext data keys via AWS KMS GenerateDataKey is under consideration.",
    options: [
      { id: 'A', text: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file." },
      { id: 'B', text: "Send the entire 50-gigabyte video file directly to the KMS `Encrypt` API, exceeding the 4KB payload limit." },
      { id: 'C', text: "Hardcode a static AES encryption key inside the application source code for all video files." },
      { id: 'D', text: "Store files in plaintext on unencrypted storage to avoid encryption overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Envelope Encryption: call `kms:GenerateDataKey`, encrypt the file locally using the plaintext data key, erase it from RAM, and store the ciphertext data key alongside the file. AWS KMS `Encrypt` has a maximum payload limit of 4 KB. For larger datasets, envelope encryption is used: the application calls `kms:GenerateDataKey`, which returns a plaintext data key (to encrypt data locally with AES-256) and a ciphertext data key (stored with the encrypted object).",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["Envelope Encryption", "Envelope Encryption", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-436",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Automated Multi-User Secret Rotation: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Secrets Manager Rotation to rotate production Amazon RDS PostgreSQL master database credentials every 30 days automatically without disconnecting active applications.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Zero-downtime database credential rotation using alternating user accounts and Lambda is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret." },
      { id: 'B', text: "Rotate credentials manually every 30 days by typing new passwords into database shells during scheduled application outages." },
      { id: 'C', text: "Never rotate database passwords to avoid the risk of application connection failures." },
      { id: 'D', text: "Hardcode database credentials in application environment variables that require full redeployments to update." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret. Secrets Manager automates credential rotation via AWS Lambda. In the multi-user rotation strategy, an administrative user rotates credentials for a second user without breaking active connections: User 1 is active while User 2 is updated, and applications toggle seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-strategies_multi-user",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Enterprise Governance"]
  },
  {
    id: "aws-scs-437",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Automated Multi-User Secret Rotation: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Secrets Manager Rotation to rotate production Amazon RDS PostgreSQL master database credentials every 30 days automatically without disconnecting active applications.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Zero-downtime database credential rotation using alternating user accounts and Lambda is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret." },
      { id: 'B', text: "Rotate credentials manually every 30 days by typing new passwords into database shells during scheduled application outages." },
      { id: 'C', text: "Never rotate database passwords to avoid the risk of application connection failures." },
      { id: 'D', text: "Hardcode database credentials in application environment variables that require full redeployments to update." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret. Secrets Manager automates credential rotation via AWS Lambda. In the multi-user rotation strategy, an administrative user rotates credentials for a second user without breaking active connections: User 1 is active while User 2 is updated, and applications toggle seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-strategies_multi-user",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Incident Containment"]
  },
  {
    id: "aws-scs-438",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Automated Multi-User Secret Rotation: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Secrets Manager Rotation to rotate production Amazon RDS PostgreSQL master database credentials every 30 days automatically without disconnecting active applications.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Zero-downtime database credential rotation using alternating user accounts and Lambda is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret." },
      { id: 'B', text: "Rotate credentials manually every 30 days by typing new passwords into database shells during scheduled application outages." },
      { id: 'C', text: "Never rotate database passwords to avoid the risk of application connection failures." },
      { id: 'D', text: "Hardcode database credentials in application environment variables that require full redeployments to update." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret. Secrets Manager automates credential rotation via AWS Lambda. In the multi-user rotation strategy, an administrative user rotates credentials for a second user without breaking active connections: User 1 is active while User 2 is updated, and applications toggle seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-strategies_multi-user",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-439",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Automated Multi-User Secret Rotation: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Secrets Manager Rotation to rotate production Amazon RDS PostgreSQL master database credentials every 30 days automatically without disconnecting active applications.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Zero-downtime database credential rotation using alternating user accounts and Lambda is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret." },
      { id: 'B', text: "Rotate credentials manually every 30 days by typing new passwords into database shells during scheduled application outages." },
      { id: 'C', text: "Never rotate database passwords to avoid the risk of application connection failures." },
      { id: 'D', text: "Hardcode database credentials in application environment variables that require full redeployments to update." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret. Secrets Manager automates credential rotation via AWS Lambda. In the multi-user rotation strategy, an administrative user rotates credentials for a second user without breaking active connections: User 1 is active while User 2 is updated, and applications toggle seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-strategies_multi-user",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Data Protection"]
  },
  {
    id: "aws-scs-440",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Automated Multi-User Secret Rotation: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Secrets Manager Rotation to rotate production Amazon RDS PostgreSQL master database credentials every 30 days automatically without disconnecting active applications.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Zero-downtime database credential rotation using alternating user accounts and Lambda is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret." },
      { id: 'B', text: "Rotate credentials manually every 30 days by typing new passwords into database shells during scheduled application outages." },
      { id: 'C', text: "Never rotate database passwords to avoid the risk of application connection failures." },
      { id: 'D', text: "Hardcode database credentials in application environment variables that require full redeployments to update." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using the multi-user rotation Lambda strategy with an administrative secret. Secrets Manager automates credential rotation via AWS Lambda. In the multi-user rotation strategy, an administrative user rotates credentials for a second user without breaking active connections: User 1 is active while User 2 is updated, and applications toggle seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-strategies_multi-user",
    tags: ["Secrets Manager Rotation", "Secrets Manager Rotation", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-441",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) and Private Certificate Authority: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS ACM & Private CA to provide public websites with automatically renewing SSL/TLS certificates and issue private certificates for internal microservices.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Automating public TLS certificate renewal and deploying private enterprise PKI is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS." },
      { id: 'B', text: "Purchase manual public certificates that require yearly manual CSR generation, renewal, and server installation." },
      { id: 'C', text: "Disable TLS and operate all internal microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Use self-signed certificates that trigger browser security warnings for all customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS. AWS Certificate Manager (ACM) manages public TLS certificates with automated renewal via DNS validation (CNAME records). For internal architectures, AWS Private CA establishes an enterprise private PKI, issuing and revoking private certificates for microservices and containers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Enterprise Governance"]
  },
  {
    id: "aws-scs-442",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) and Private Certificate Authority: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS ACM & Private CA to provide public websites with automatically renewing SSL/TLS certificates and issue private certificates for internal microservices.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Automating public TLS certificate renewal and deploying private enterprise PKI is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS." },
      { id: 'B', text: "Purchase manual public certificates that require yearly manual CSR generation, renewal, and server installation." },
      { id: 'C', text: "Disable TLS and operate all internal microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Use self-signed certificates that trigger browser security warnings for all customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS. AWS Certificate Manager (ACM) manages public TLS certificates with automated renewal via DNS validation (CNAME records). For internal architectures, AWS Private CA establishes an enterprise private PKI, issuing and revoking private certificates for microservices and containers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Incident Containment"]
  },
  {
    id: "aws-scs-443",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) and Private Certificate Authority: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS ACM & Private CA to provide public websites with automatically renewing SSL/TLS certificates and issue private certificates for internal microservices.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Automating public TLS certificate renewal and deploying private enterprise PKI is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS." },
      { id: 'B', text: "Purchase manual public certificates that require yearly manual CSR generation, renewal, and server installation." },
      { id: 'C', text: "Disable TLS and operate all internal microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Use self-signed certificates that trigger browser security warnings for all customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS. AWS Certificate Manager (ACM) manages public TLS certificates with automated renewal via DNS validation (CNAME records). For internal architectures, AWS Private CA establishes an enterprise private PKI, issuing and revoking private certificates for microservices and containers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-444",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) and Private Certificate Authority: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS ACM & Private CA to provide public websites with automatically renewing SSL/TLS certificates and issue private certificates for internal microservices.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Automating public TLS certificate renewal and deploying private enterprise PKI is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS." },
      { id: 'B', text: "Purchase manual public certificates that require yearly manual CSR generation, renewal, and server installation." },
      { id: 'C', text: "Disable TLS and operate all internal microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Use self-signed certificates that trigger browser security warnings for all customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS. AWS Certificate Manager (ACM) manages public TLS certificates with automated renewal via DNS validation (CNAME records). For internal architectures, AWS Private CA establishes an enterprise private PKI, issuing and revoking private certificates for microservices and containers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Data Protection"]
  },
  {
    id: "aws-scs-445",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) and Private Certificate Authority: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS ACM & Private CA to provide public websites with automatically renewing SSL/TLS certificates and issue private certificates for internal microservices.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Automating public TLS certificate renewal and deploying private enterprise PKI is under consideration.",
    options: [
      { id: 'A', text: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS." },
      { id: 'B', text: "Purchase manual public certificates that require yearly manual CSR generation, renewal, and server installation." },
      { id: 'C', text: "Disable TLS and operate all internal microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Use self-signed certificates that trigger browser security warnings for all customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use AWS Certificate Manager (ACM) with DNS validation for public endpoints, and AWS Private CA for internal microservice mTLS. AWS Certificate Manager (ACM) manages public TLS certificates with automated renewal via DNS validation (CNAME records). For internal architectures, AWS Private CA establishes an enterprise private PKI, issuing and revoking private certificates for microservices and containers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["AWS ACM & Private CA", "ACM & Private CA", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-446",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Bucket Security Hardening and TLS Enforcement: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates S3 Hardening to ensure all data transmitted to and from an S3 bucket is encrypted in transit and all stored objects use customer-managed KMS encryption.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Enforcing TLS via aws:SecureTransport, default SSE-KMS, and account Block Public Access is under consideration.",
    options: [
      { id: 'A', text: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK." },
      { id: 'B', text: "Allow plaintext HTTP connections to the S3 bucket to support legacy clients." },
      { id: 'C', text: "Disable S3 bucket encryption to save CPU processing cycles." },
      { id: 'D', text: "Turn off S3 Block Public Access to simplify third-party file uploads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK. Hardening Amazon S3 requires defense-in-depth: 1) S3 Block Public Access at the account level, 2) a bucket policy denying any request where `aws:SecureTransport: false` (forcing TLS 1.2+ in transit), and 3) default bucket encryption configured with a customer-managed KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3 Hardening", "S3 Hardening", "Enterprise Governance"]
  },
  {
    id: "aws-scs-447",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Bucket Security Hardening and TLS Enforcement: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates S3 Hardening to ensure all data transmitted to and from an S3 bucket is encrypted in transit and all stored objects use customer-managed KMS encryption.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Enforcing TLS via aws:SecureTransport, default SSE-KMS, and account Block Public Access is under consideration.",
    options: [
      { id: 'A', text: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK." },
      { id: 'B', text: "Allow plaintext HTTP connections to the S3 bucket to support legacy clients." },
      { id: 'C', text: "Disable S3 bucket encryption to save CPU processing cycles." },
      { id: 'D', text: "Turn off S3 Block Public Access to simplify third-party file uploads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK. Hardening Amazon S3 requires defense-in-depth: 1) S3 Block Public Access at the account level, 2) a bucket policy denying any request where `aws:SecureTransport: false` (forcing TLS 1.2+ in transit), and 3) default bucket encryption configured with a customer-managed KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3 Hardening", "S3 Hardening", "Incident Containment"]
  },
  {
    id: "aws-scs-448",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Bucket Security Hardening and TLS Enforcement: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates S3 Hardening to ensure all data transmitted to and from an S3 bucket is encrypted in transit and all stored objects use customer-managed KMS encryption.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Enforcing TLS via aws:SecureTransport, default SSE-KMS, and account Block Public Access is under consideration.",
    options: [
      { id: 'A', text: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK." },
      { id: 'B', text: "Allow plaintext HTTP connections to the S3 bucket to support legacy clients." },
      { id: 'C', text: "Disable S3 bucket encryption to save CPU processing cycles." },
      { id: 'D', text: "Turn off S3 Block Public Access to simplify third-party file uploads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK. Hardening Amazon S3 requires defense-in-depth: 1) S3 Block Public Access at the account level, 2) a bucket policy denying any request where `aws:SecureTransport: false` (forcing TLS 1.2+ in transit), and 3) default bucket encryption configured with a customer-managed KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3 Hardening", "S3 Hardening", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-449",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Bucket Security Hardening and TLS Enforcement: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates S3 Hardening to ensure all data transmitted to and from an S3 bucket is encrypted in transit and all stored objects use customer-managed KMS encryption.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Enforcing TLS via aws:SecureTransport, default SSE-KMS, and account Block Public Access is under consideration.",
    options: [
      { id: 'A', text: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK." },
      { id: 'B', text: "Allow plaintext HTTP connections to the S3 bucket to support legacy clients." },
      { id: 'C', text: "Disable S3 bucket encryption to save CPU processing cycles." },
      { id: 'D', text: "Turn off S3 Block Public Access to simplify third-party file uploads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK. Hardening Amazon S3 requires defense-in-depth: 1) S3 Block Public Access at the account level, 2) a bucket policy denying any request where `aws:SecureTransport: false` (forcing TLS 1.2+ in transit), and 3) default bucket encryption configured with a customer-managed KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3 Hardening", "S3 Hardening", "Data Protection"]
  },
  {
    id: "aws-scs-450",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Bucket Security Hardening and TLS Enforcement: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates S3 Hardening to ensure all data transmitted to and from an S3 bucket is encrypted in transit and all stored objects use customer-managed KMS encryption.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Enforcing TLS via aws:SecureTransport, default SSE-KMS, and account Block Public Access is under consideration.",
    options: [
      { id: 'A', text: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK." },
      { id: 'B', text: "Allow plaintext HTTP connections to the S3 bucket to support legacy clients." },
      { id: 'C', text: "Disable S3 bucket encryption to save CPU processing cycles." },
      { id: 'D', text: "Turn off S3 Block Public Access to simplify third-party file uploads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an S3 bucket policy with an explicit Deny when `aws:SecureTransport` is false, and configure bucket default encryption with a KMS CMK. Hardening Amazon S3 requires defense-in-depth: 1) S3 Block Public Access at the account level, 2) a bucket policy denying any request where `aws:SecureTransport: false` (forcing TLS 1.2+ in transit), and 3) default bucket encryption configured with a customer-managed KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3 Hardening", "S3 Hardening", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_18;
