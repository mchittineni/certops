export const AWS_SCS_QUESTIONS_9 = [
  {
    id: "aws-scs-201",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon Aurora Database Backups: Cross-Account Snapshot Copy Encryption",
    scenario: "An organization copies Amazon Aurora database cluster snapshots from a Production account to a Disaster Recovery account daily. Snapshots are encrypted with a Customer Managed Key in the Production account.",
    question: "Which permissions and actions are required in the Destination account to use the shared snapshot?",
    options: [
      { id: 'A', text: "The snapshot must be converted to unencrypted prior to copying" },
      { id: 'B', text: "The destination account can restore the cluster directly using the source KMS key without copying" },
      { id: 'C', text: "The destination account must copy the shared snapshot into its own account, re-encrypting it with a Customer Managed Key owned by the destination account" },
      { id: 'D', text: "Aurora cluster snapshots cannot be shared across AWS accounts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A shared encrypted DB cluster snapshot cannot be restored directly by a target account. The target account must copy the shared snapshot to create a local copy within the target account, re-encrypting the snapshot with a KMS CMK owned by the target account before restoring the cluster.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Aurora", "Snapshot-Sharing", "Cross-Account", "KMS"]
  },
  {
    id: "aws-scs-202",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS Key Policies: Limiting Administration vs. Cryptographic Usage",
    scenario: "A security policy requires separating duties: Cloud administrators must be able to manage KMS key metadata (tags, descriptions, rotation) but must be strictly prevented from using the key to encrypt or decrypt sensitive data.",
    question: "How is this separation of duties achieved in the KMS Key Policy?",
    options: [
      { id: 'A', text: "Use IAM permissions boundaries alone without modifying the key policy" },
      { id: 'B', text: "Create two statements in the Key Policy: Statement 1 grants administrators management actions (<code>kms:Describe*</code>, <code>kms:Put*</code>, <code>kms:Update*</code>, <code>kms:TagResource</code>); Statement 2 grants only the application role cryptographic actions (<code>kms:Encrypt</code>, <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>)" },
      { id: 'C', text: "Grant <code>kms:*</code> to both administrators and applications" },
      { id: 'D', text: "Convert the key to an AWS managed key" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "KMS key policies natively enable separation of duties. Key administrators can be granted administrative actions (e.g. `kms:ScheduleKeyDeletion`, `kms:EnableKeyRotation`, `kms:DescribeKey`) without granting cryptographic operations (`kms:Encrypt`, `kms:Decrypt`, `kms:GenerateDataKey`), preventing administrators from reading sensitive encrypted data.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["KMS", "Separation-of-Duties", "Key-Policy", "Least-Privilege"]
  },
  {
    id: "aws-scs-203",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Systems Manager Parameter Store Cross-Account Access with KMS",
    scenario: "A central configuration account stores shared database endpoints in Parameter Store as SecureString parameters encrypted with a KMS CMK. Applications in member accounts need to read these parameters.",
    question: "Does Systems Manager Parameter Store natively support cross-account parameter sharing?",
    options: [
      { id: 'A', text: "Parameter Store supports resource policies natively like Secrets Manager" },
      { id: 'B', text: "Parameters must be stored in plaintext to be accessed cross-account" },
      { id: 'C', text: "Parameters are automatically replicated to all member accounts" },
      { id: 'D', text: "Parameter Store does not support cross-account resource policies directly; member accounts must assume an IAM role in the central configuration account that has permissions to <code>ssm:GetParameter</code> and <code>kms:Decrypt</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unlike AWS Secrets Manager (which supports resource-based policies for direct cross-account sharing), Systems Manager Parameter Store does not support resource policies. Cross-account access requires calling instances or roles to assume an IAM role in the configuration-holding account that has permissions to read the parameter and decrypt via KMS.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Parameter-Store", "Cross-Account", "KMS", "IAM-Role-Assumption"]
  },
  {
    id: "aws-scs-204",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "S3 Glacier Vault Lock for Write-Once-Read-Many (WORM) Compliance",
    scenario: "A financial institution must archive transaction logs in Amazon S3 Glacier for 7 years to comply with SEC Rule 17a-4. Once locked, the archive policy must be immutable, preventing any administrative override.",
    question: "Which process commits an immutable S3 Glacier Vault Lock policy?",
    options: [
      { id: 'A', text: "Enable S3 Transfer Acceleration" },
      { id: 'B', text: "Export the vault data to AWS Snowball" },
      { id: 'C', text: "Initiate the vault lock using <code>InitiateVaultLock</code>, test the policy within the 24-hour testing window, and call <code>CompleteVaultLock</code> with the lock ID to lock the policy permanently" },
      { id: 'D', text: "Apply an S3 bucket policy with an explicit Deny" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Glacier Vault Lock enforces compliance controls. The two-step process calls `InitiateVaultLock` (which attaches the policy and provides a 24-hour validation window). Calling `CompleteVaultLock` before the window expires permanently locks the policy, after which it can never be altered or deleted by anyone.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Glacier", "Vault-Lock", "WORM", "SEC-17a-4"]
  },
  {
    id: "aws-scs-205",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "KMS Asymmetric Key Verification: Public Key Export",
    scenario: "A digital certificate authority signs internal tokens using an asymmetric KMS key. Mobile applications on client smartphones must verify token authenticity without having AWS IAM credentials.",
    question: "How can mobile client applications obtain the public key for offline cryptographic verification?",
    options: [
      { id: 'A', text: "Call the <code>GetPublicKey</code> API once (or distribute the public key PEM file with the app), and use standard crypto libraries to verify the signature locally" },
      { id: 'B', text: "Store the KMS private key in the mobile application binary" },
      { id: 'C', text: "Use an AWS STS temporary session on every mobile phone" },
      { id: 'D', text: "Require mobile apps to call <code>kms:Decrypt</code> over the public internet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The public key of an asymmetric KMS key pair can be downloaded at any time using the `GetPublicKey` API in PEM or DER format. Clients can embed or fetch this public key and verify digital signatures locally using standard open-source libraries (e.g. OpenSSL, BouncyCastle) with zero AWS calls or credentials.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["KMS", "Asymmetric", "GetPublicKey", "Digital-Signature"]
  },
  {
    id: "aws-scs-206",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Enforcing Encryption of CloudWatch Logs with AWS KMS",
    scenario: "A security requirement mandates that all log data stored in Amazon CloudWatch Logs must be encrypted at rest using a Customer Managed KMS Key (CMK).",
    question: "What permission must be added to the KMS key policy to permit CloudWatch Logs to encrypt log groups?",
    options: [
      { id: 'A', text: "Disable TLS on CloudWatch log streams" },
      { id: 'B', text: "Grant <code>kms:*</code> to the IAM user who created the log group" },
      { id: 'C', text: "Attach an S3 bucket policy to the CloudWatch log group" },
      { id: 'D', text: "Grant the service principal <code>logs.&lt;region&gt;.amazonaws.com</code> permissions to <code>kms:Encrypt*</code>, <code>kms:Decrypt*</code>, <code>kms:ReEncrypt*</code>, <code>kms:GenerateDataKey*</code>, and <code>kms:Describe*</code> with an <code>arn:aws:logs</code> encryption context condition" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudWatch Logs supports customer managed key encryption. The KMS key policy must explicitly permit `logs.&lt;region&gt;.amazonaws.com` to execute cryptographic actions, scoped with an `kms:EncryptionContext:aws:logs:arn` condition matching the log group ARN to prevent confused deputy misuse.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudWatch-Logs", "KMS-Encryption", "Key-Policy", "Encryption-at-Rest"]
  },
  {
    id: "aws-scs-207",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Encrypting EBS Snapshots with Customer Managed Keys vs. AWS Managed Keys",
    scenario: "A junior administrator attempts to share an EBS snapshot with an external partner account, but receives an error stating that snapshots encrypted with default keys cannot be shared.",
    question: "Why does AWS prevent sharing snapshots encrypted with the default `aws/ebs` key?",
    options: [
      { id: 'A', text: "External accounts can only access unencrypted snapshots" },
      { id: 'B', text: "Snapshots encrypted with default keys are automatically deleted after 24 hours" },
      { id: 'C', text: "Default keys do not use AES-256 encryption" },
      { id: 'D', text: "The default `aws/ebs` key is an AWS Managed Key owned by the source account; its key policy cannot be modified to grant cross-account access, so snapshots must be encrypted with a Customer Managed Key to be shareable" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Managed Keys (such as `aws/ebs` or `aws/s3`) have default key policies managed exclusively by AWS that cannot be edited. Because cross-account sharing requires modifying the key policy to grant the external account `kms:Decrypt` access, snapshots encrypted with `aws/ebs` cannot be shared cross-account.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["EBS", "AWS-Managed-Key", "Customer-Managed-Key", "Snapshot-Sharing"]
  },
  {
    id: "aws-scs-208",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager Secret Caching for High-Throughput Lambda Functions",
    scenario: "A high-concurrency serverless application on AWS Lambda retrieves database secrets from Secrets Manager on every invocation. The application experiences high Secrets Manager API throttling (429 TooManyRequests) and elevated API costs.",
    question: "Which software architectural pattern resolves the throttling and reduces API costs?",
    options: [
      { id: 'A', text: "Increase the Lambda timeout to 15 minutes" },
      { id: 'B', text: "Create 10 duplicate secrets in Secrets Manager" },
      { id: 'C', text: "Hardcode the database password into the Lambda function code" },
      { id: 'D', text: "Use the AWS Secrets Manager **caching client** library (or the AWS Parameters and Secrets Lambda Extension) to cache secret values in function memory across execution invocations" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS Secrets Manager caching client (and the AWS Parameters and Secrets Lambda Extension) caches secrets in memory for a configurable TTL. This avoids calling `GetSecretValue` on every function invocation, dramatically reducing latency, API request costs, and eliminating throttling errors.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Secrets-Manager", "Lambda", "Caching", "Throttling"]
  },
  {
    id: "aws-scs-209",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Detecting Plaintext Secrets in Code Repositories with Amazon CodeGuru Security",
    scenario: "A software engineering organization wants automated static application security testing (SAST) in CI/CD pipelines to detect hardcoded AWS credentials, SQL injection risks, and insecure cryptographic ciphers before code is merged.",
    question: "Which AWS developer security service performs automated code security analysis and secret detection?",
    options: [
      { id: 'A', text: "Amazon CodeGuru Security" },
      { id: 'B', text: "Amazon CloudWatch Synthetics" },
      { id: 'C', text: "AWS Trusted Advisor" },
      { id: 'D', text: "Amazon Macie" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CodeGuru Security is a developer tool that performs automated static application security testing (SAST). It analyzes source code for vulnerabilities (including hardcoded secrets, SQL injection, insecure dependencies, and cryptographic weaknesses) and provides remediation guidance.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CodeGuru-Security", "SAST", "Secret-Detection", "DevSecOps"]
  },
  {
    id: "aws-scs-210",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS CloudHSM Quorum Authentication (M-of-N Access Control)",
    scenario: "A high-security defense contractor mandates that critical administrative actions on physical HSMs (such as creating users or deleting keys) must require the cryptographic approval of at least 3 out of 5 designated security officers.",
    question: "Which CloudHSM capability enforces multi-party administrative authorization?",
    options: [
      { id: 'A', text: "AWS Organizations Service Control Policies (SCPs)" },
      { id: 'B', text: "AWS IAM Multi-Factor Authentication (MFA)" },
      { id: 'C', text: "CloudHSM **Quorum Authentication** (M-of-N access control)" },
      { id: 'D', text: "Amazon S3 Object Lock Governance mode" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS CloudHSM supports **Quorum Authentication** (also called M-of-N access control). It requires that an administrative operation (such as adding or removing an HSM user) cannot be executed by a single individual; instead, M of N authorized crypto officers must cryptographically sign the command before the HSM executes it.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["CloudHSM", "Quorum-Authentication", "M-of-N", "Hardware-Security"]
  },
  {
    id: "aws-scs-211",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 Default Encryption vs. Bucket Policy Enforcement",
    scenario: "An S3 bucket has Amazon S3 default encryption enabled with SSE-S3. A developer uploads an object with the header `x-amz-server-side-encryption: aws:kms`. What encryption is applied to the object?",
    question: "How does Amazon S3 handle object uploads when both default encryption and explicit request encryption headers are present?",
    options: [
      { id: 'A', text: "The upload uses **SSE-KMS** as specified in the request header; default encryption only applies when an incoming upload does not specify an encryption header" },
      { id: 'B', text: "The upload defaults to SSE-S3 and ignores the request header" },
      { id: 'C', text: "The upload is rejected with a 400 Bad Request error" },
      { id: 'D', text: "The object is encrypted twice (double encryption)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 default encryption acts as a fallback: it encrypts any object that does NOT include an encryption header at upload time. If an upload request explicitly includes an encryption header (such as `x-amz-server-side-encryption: aws:kms`), S3 honors the request header and encrypts using the requested algorithm/key.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["S3", "Default-Encryption", "SSE-KMS", "SSE-S3"]
  },
  {
    id: "aws-scs-212",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "KMS Symmetric Key Specifications: AES-GCM 256",
    scenario: "A cryptographic compliance review audits the underlying symmetric encryption algorithm used by AWS KMS Customer Managed Keys.",
    question: "Which cryptographic algorithm and mode does AWS KMS use for symmetric encryption keys?",
    options: [
      { id: 'A', text: "RSA with 2048-bit keys in PKCS#1 v1.5 padding" },
      { id: 'B', text: "Advanced Encryption Standard (AES) in Galois/Counter Mode (GCM) with 256-bit keys (**AES-GCM-256**)" },
      { id: 'C', text: "Data Encryption Standard (3DES) in Cipher Block Chaining (CBC) mode" },
      { id: 'D', text: "Blowfish in Electronic Codebook (ECB) mode" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS KMS symmetric encryption keys use the Advanced Encryption Standard (AES) in Galois/Counter Mode (GCM) with 256-bit keys (`SYMMETRIC_DEFAULT`). AES-GCM provides authenticated encryption, ensuring both confidentiality and data authenticity/integrity.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["KMS", "Cryptography", "AES-GCM-256", "Symmetric-Encryption"]
  },
  {
    id: "aws-scs-213",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Certificate Manager (ACM) Private Key Security and Exportability",
    scenario: "An administrator wants to provision an SSL/TLS certificate using AWS Certificate Manager (ACM) and export the private key to install on an on-premises web server.",
    question: "Can private keys of public SSL/TLS certificates generated by AWS Certificate Manager (ACM) be exported?",
    options: [
      { id: 'A', text: "No, private keys for public certificates managed by ACM cannot be exported; they are protected by AWS KMS and can only be used on integrated AWS services (ALB, CloudFront, API Gateway)" },
      { id: 'B', text: "Yes, but only if the certificate was validated via email" },
      { id: 'C', text: "Yes, private keys can be exported using the AWS CLI command get-private-key" },
      { id: 'D', text: "Yes, private keys are sent via email to the account root address" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Public certificates provisioned directly through AWS Certificate Manager (ACM) are non-exportable. Their private keys are securely generated, stored, and managed within AWS KMS, and can only be deployed on supported AWS integrated services (such as CloudFront, ALB, NLB, and API Gateway). Note that AWS Private CA certificates *can* be exported.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["ACM", "Private-Keys", "Non-Exportable", "TLS"]
  },
  {
    id: "aws-scs-214",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS External Key Stores (XKS) for Sovereign Key Custody",
    scenario: "A European financial institution has strict data sovereignty requirements mandating that cryptographic root keys must reside in on-premises physical HSMs outside of AWS infrastructure, and encryption/decryption requests must be processed outside AWS.",
    question: "Which AWS KMS capability connects KMS to physical hardware outside the AWS cloud?",
    options: [
      { id: 'A', text: "AWS Systems Manager Parameter Store with SecureString" },
      { id: 'B', text: "Importing key material directly into standard KMS" },
      { id: 'C', text: "AWS KMS **External Key Store (XKS)** using an external key store proxy" },
      { id: 'D', text: "AWS CloudHSM in the local VPC" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS KMS External Key Stores (XKS) allows customers to back their KMS keys with an external HSM that resides outside of AWS (e.g. in on-premises data centers). All cryptographic operations on XKS keys route through an external key store proxy to the customer's on-premises HSM, ensuring zero key material is stored in AWS.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["KMS", "External-Key-Store", "XKS", "Data-Sovereignty"]
  },
  {
    id: "aws-scs-215",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon Redshift Encryption at Rest with KMS",
    scenario: "A security architect is configuring encryption at rest for an Amazon Redshift data warehouse cluster storing sensitive analytics data.",
    question: "How does Amazon Redshift manage encryption keys using AWS KMS?",
    options: [
      { id: 'A', text: "Redshift uses a 4-tier key hierarchy: the AWS KMS Customer Managed Key encrypts a cluster key, the cluster key encrypts database keys, and database keys encrypt individual data block encryption keys" },
      { id: 'B', text: "Redshift relies on Linux dm-crypt on EC2 instances" },
      { id: 'C', text: "Redshift sends all raw database queries to the KMS API for decryption" },
      { id: 'D', text: "Redshift uses unencrypted ephemeral keys stored in S3" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon Redshift uses a multi-tier envelope encryption hierarchy for KMS: the KMS Customer Managed Key encrypts the cluster key, which encrypts database keys, which in turn encrypt the individual data block keys in the database. This architecture provides high-throughput parallel data warehousing without bottlenecking KMS API limits.",
    referenceUrl: "https://docs.aws.amazon.com/security/",
    tags: ["Redshift", "Encryption-at-Rest", "KMS", "Data-Warehouse"]
  },
  {
    id: "aws-scs-216",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Service Control Policies (SCPs) and the Deny-Override Rule",
    scenario: "An enterprise security team wants to ensure that no developer or administrator in any member account can disable Amazon GuardDuty or delete CloudTrail trails. They attach an SCP with an explicit Deny for guardduty:* and cloudtrail:* to the Root organizational unit.",
    question: "Which statement accurately describes the effect of this SCP?",
    options: [
      { id: 'A', text: "SCPs apply to the management account itself, locking the security team out" },
      { id: 'B', text: "SCPs only apply to member accounts if explicitly accepted by the member account administrator" },
      { id: 'C', text: "The actions are blocked for all IAM users and roles in all member accounts, including the member account root user, and can only be modified or detached by the management account" },
      { id: 'D', text: "The SCP blocks actions for standard IAM users, but member account root users can bypass it" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Service Control Policies (SCPs) are organization-level guardrails that define maximum permissions. An explicit Deny in an SCP overrides all allowances and affects all principals in member accounts—including the member account root user. Crucially, SCPs do NOT affect the management account or service-linked roles.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations", "SCPs", "Governance", "Security"]
  },
  {
    id: "aws-scs-217",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #1",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #1?",
    options: [
      { id: 'A', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" },
      { id: 'B', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'C', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'D', text: "Disabling AWS Config recording across production accounts to avoid recording charges" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-218",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #2",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #2?",
    options: [
      { id: 'A', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'B', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'C', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'D', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-219",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #3",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #3?",
    options: [
      { id: 'A', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'B', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'C', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'D', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-220",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #4",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #4?",
    options: [
      { id: 'A', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" },
      { id: 'B', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'C', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'D', text: "Deleting all security audit trails immediately after compliance reviews finish" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-221",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #5",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #5?",
    options: [
      { id: 'A', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'B', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'C', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" },
      { id: 'D', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-222",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #6",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #6?",
    options: [
      { id: 'A', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'B', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'C', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'D', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-223",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #7",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #7?",
    options: [
      { id: 'A', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'B', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" },
      { id: 'C', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'D', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-224",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #8",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #8?",
    options: [
      { id: 'A', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" },
      { id: 'B', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'C', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'D', text: "Disabling AWS Config recording across production accounts to avoid recording charges" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  },
  {
    id: "aws-scs-225",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security Governance Scenario #9",
    scenario: "An enterprise governance committee is establishing landing zones, compliance conformance packs, and audit readiness across hundreds of AWS accounts.",
    question: "Which governance architecture best fulfills objective #9?",
    options: [
      { id: 'A', text: "Disabling AWS Config recording across production accounts to avoid recording charges" },
      { id: 'B', text: "Allowing unmanaged standalone AWS accounts without central organizational oversight" },
      { id: 'C', text: "Deleting all security audit trails immediately after compliance reviews finish" },
      { id: 'D', text: "Deploying AWS Control Tower with mandatory guardrails, AWS Config conformance packs, and AWS Audit Manager evidence collection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security governance in AWS relies on AWS Organizations SCP guardrails, AWS Control Tower landing zones, AWS Config continuous compliance packs, and Audit Manager automated reporting.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Governance", "Control Tower", "Config", "Compliance"]
  }
];

export default AWS_SCS_QUESTIONS_9;
