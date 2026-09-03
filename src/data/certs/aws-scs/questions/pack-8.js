export const AWS_SCS_QUESTIONS_8 = [
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Optimizing KMS Costs with Amazon S3 Bucket Keys",
    "scenario": "A big data analytics platform writes millions of small objects per hour to an S3 bucket encrypted with SSE-KMS. The monthly AWS KMS bill is excessively high due to millions of kms:GenerateDataKey requests.",
    "question": "Which S3 configuration reduces KMS request volume and cost by up to 99%?",
    "options": [
      {
        "id": "A",
        "text": "Enable **Amazon S3 Bucket Keys** on the bucket configuration"
      },
      {
        "id": "B",
        "text": "Switch the encryption from SSE-KMS to client-side encryption with KMS"
      },
      {
        "id": "C",
        "text": "Disable S3 bucket versioning"
      },
      {
        "id": "D",
        "text": "Increase the KMS key deletion waiting period from 7 to 30 days"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "When S3 Bucket Keys are enabled, S3 creates a short-lived bucket-level key negotiated with KMS, and uses that key within S3 to derive data encryption keys for objects in the bucket. This reduces calls from S3 to KMS by up to 99%, dramatically lowering KMS request costs while maintaining strong SSE-KMS security.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "Bucket-Keys",
      "KMS-Cost",
      "Optimization"
    ],
    "id": "aws-scs-176"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Enforcing In-Transit Encryption with S3 Bucket Policies",
    "scenario": "A security policy mandates that all data transferred to and from an S3 bucket must use TLS/HTTPS encryption. Any unencrypted HTTP connection attempt must be explicitly rejected.",
    "question": "Which S3 bucket policy statement enforces TLS for all bucket operations?",
    "options": [
      {
        "id": "A",
        "text": "A statement with <code>\"Effect\": \"Deny\"</code>, <code>\"Action\": \"s3:*\"</code>, and <code>\"Condition\": { \"Bool\": { \"aws:SecureTransport\": \"false\" } }</code>"
      },
      {
        "id": "B",
        "text": "A statement with <code>\"Effect\": \"Allow\"</code> and <code>\"Condition\": { \"StringEquals\": { \"s3:x-amz-server-side-encryption\": \"AES256\" } }</code>"
      },
      {
        "id": "C",
        "text": "A statement with <code>\"Effect\": \"Deny\"</code> on port 80 in a Network ACL"
      },
      {
        "id": "D",
        "text": "Configuring an AWS WAF rule that blocks HTTP requests"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The global condition key `aws:SecureTransport` evaluates whether the request was transmitted over TLS/HTTPS. Creating an explicit Deny statement for `s3:*` where `aws:SecureTransport` is `false` rejects any unencrypted HTTP requests, satisfying compliance requirements.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3-Bucket-Policy",
      "aws-SecureTransport",
      "TLS",
      "Encryption-in-Transit"
    ],
    "id": "aws-scs-177"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Sharing Encrypted EBS Snapshots Across AWS Accounts",
    "scenario": "Account A needs to share an encrypted Amazon EBS snapshot of an application volume with Account B. The snapshot is encrypted with a Customer Managed KMS Key in Account A.",
    "question": "Which combination of steps allows Account B to access and copy the encrypted snapshot?",
    "options": [
      {
        "id": "A",
        "text": "In Account A, modify the snapshot permissions to share with Account B's account ID, and update the KMS key policy in Account A to grant Account B permissions to use the key; in Account B, copy the snapshot and re-encrypt it with a KMS key owned by Account B"
      },
      {
        "id": "B",
        "text": "Share the default AWS managed key (aws/ebs) with Account B"
      },
      {
        "id": "C",
        "text": "Change the snapshot to unencrypted before sharing"
      },
      {
        "id": "D",
        "text": "Export the snapshot to an S3 bucket with public read access"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Snapshots encrypted with the default `aws/ebs` key cannot be shared across accounts. For snapshots encrypted with a customer managed key, the sharing account (Account A) must share the snapshot permissions AND update the KMS key policy to permit the target account (Account B) to use `kms:CreateGrant` / `kms:Decrypt`. The target account must then copy the snapshot, re-encrypting it with its own local KMS key.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EBS",
      "Snapshot-Sharing",
      "KMS",
      "Cross-Account"
    ],
    "id": "aws-scs-178"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Zero-Downtime Database Credential Rotation in Secrets Manager",
    "scenario": "A security architect configures automated 30-day password rotation in AWS Secrets Manager for an Amazon RDS PostgreSQL database used by a mission-critical financial application that cannot tolerate any connection downtime.",
    "question": "Which Secrets Manager rotation strategy prevents application downtime during credential changes?",
    "options": [
      {
        "id": "A",
        "text": "A **multi-user rotation** strategy using two alternating database user accounts (master and application/clone user)"
      },
      {
        "id": "B",
        "text": "A single-user rotation strategy executed during business hours"
      },
      {
        "id": "C",
        "text": "Writing the database password into an unencrypted EC2 User Data script"
      },
      {
        "id": "D",
        "text": "Disabling database authentication during password update windows"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "In **multi-user rotation**, Secrets Manager maintains two user credentials: User A and User B. While User A is in active production use, Secrets Manager updates the password for User B on the database, updates the secret to point to User B, and tests the connection. When the next rotation occurs, it alternates back to User A. This ensures zero connection downtime for active client pools.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Secrets-Manager",
      "Multi-User-Rotation",
      "RDS",
      "High-Availability"
    ],
    "id": "aws-scs-179"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "AWS CloudHSM vs. AWS KMS Custom Key Store",
    "scenario": "A payment processing application must comply with PCI-DSS mandates requiring dedicated hardware security modules certified to FIPS 140-2 Level 3, where the customer maintains exclusive cryptographic ownership of key generation and storage.",
    "question": "Which AWS solution satisfies FIPS 140-2 Level 3 dedicated hardware compliance?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudHSM (or an AWS KMS Custom Key Store backed by CloudHSM)"
      },
      {
        "id": "B",
        "text": "Standard AWS KMS with multi-tenant hardware security modules (FIPS 140-2 Level 2)"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager Parameter Store with SecureString"
      },
      {
        "id": "D",
        "text": "Amazon S3 with SSE-S3 default encryption"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Standard AWS KMS uses multi-tenant HSMs validated to FIPS 140-2 Level 2 (with Level 3 physical security). For strict regulatory requirements mandating dedicated single-tenant FIPS 140-2 Level 3 hardware under direct customer administrative control, **AWS CloudHSM** (or a KMS Custom Key Store backed by a CloudHSM cluster) must be selected.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "CloudHSM",
      "FIPS-140-2-Level-3",
      "PCI-DSS",
      "KMS-Custom-Key-Store"
    ],
    "id": "aws-scs-180"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Enforcing S3 Object Lock in Compliance Mode vs. Governance Mode",
    "scenario": "A healthcare provider must store patient records in Amazon S3 for a mandatory 7-year regulatory retention period. The files must be protected such that no user, including the AWS account root user, can delete or modify them before 7 years elapse.",
    "question": "Which S3 Object Lock retention mode satisfies this requirement?",
    "options": [
      {
        "id": "A",
        "text": "S3 Object Lock in **Compliance mode** with a 7-year retention period"
      },
      {
        "id": "B",
        "text": "S3 Object Lock in **Governance mode**"
      },
      {
        "id": "C",
        "text": "S3 Legal Hold alone without a retention period"
      },
      {
        "id": "D",
        "text": "S3 Glacier Vault Archive without Object Lock"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "In S3 Object Lock **Compliance mode**, protected object versions cannot be overwritten or deleted by any user, including the root user in the AWS account. The retention period cannot be decreased or bypassed. In contrast, **Governance mode** allows users with the `s3:BypassGovernanceRetention` permission to delete objects or override settings.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "Object-Lock",
      "Compliance-Mode",
      "WORM"
    ],
    "id": "aws-scs-181"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "AWS KMS Grants vs. Key Policies for Temporary Access",
    "scenario": "An auto-scaling application running on Amazon EC2 needs temporary, programmatically delegated permission to use a KMS key to attach encrypted EBS volumes dynamically, without constantly updating the KMS key policy.",
    "question": "Which KMS mechanism allows programmatic, temporary delegation of key permissions?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS **Grants** created using the <code>CreateGrant</code> API with retiring capabilities"
      },
      {
        "id": "B",
        "text": "Modifying the root IAM policy on every instance launch"
      },
      {
        "id": "C",
        "text": "Exporting the KMS private key to an EC2 instance metadata tag"
      },
      {
        "id": "D",
        "text": "Using AWS Secrets Manager to store the KMS master key"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS KMS Grants provide an advanced mechanism to delegate temporary permissions to a grantee principal programmatically without modifying the static key policy. Services like Amazon EBS and Amazon DynamoDB use grants extensively to attach temporary decryption and data key generation permissions, which are retired when no longer needed.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "Grants",
      "CreateGrant",
      "Delegation"
    ],
    "id": "aws-scs-182"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Restricting KMS Key Access by Calling Service using kms:ViaService",
    "scenario": "A company wants to ensure that a specific Customer Managed KMS Key is used only when requests originate from Amazon S3 in the us-west-2 Region, preventing users from calling kms:Decrypt directly through the AWS CLI or other services.",
    "question": "Which condition key in the KMS key policy enforces this service origin restriction?",
    "options": [
      {
        "id": "A",
        "text": "<code>\"Condition\": { \"StringEquals\": { \"kms:ViaService\": \"s3.us-west-2.amazonaws.com\" } }</code>"
      },
      {
        "id": "B",
        "text": "<code>\"Condition\": { \"StringEquals\": { \"aws:RequestedService\": \"s3\" } }</code>"
      },
      {
        "id": "C",
        "text": "<code>\"Condition\": { \"ArnEquals\": { \"aws:SourceArn\": \"arn:aws:s3:::*\" } }</code>"
      },
      {
        "id": "D",
        "text": "<code>\"Condition\": { \"Bool\": { \"kms:GrantIsForAWSResource\": \"true\" } }</code>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The `kms:ViaService` condition key limits the use of a KMS key to requests that originate from specific authorized AWS services (and Regions). Setting `kms:ViaService: s3.us-west-2.amazonaws.com` blocks direct CLI/SDK calls to `kms:Decrypt`, ensuring the key can only be invoked when interacting with S3 objects in us-west-2.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "kms-ViaService",
      "Key-Policy",
      "Least-Privilege"
    ],
    "id": "aws-scs-183"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Cross-Account Access to AWS Secrets Manager",
    "scenario": "An application in Account A (Production) must retrieve a database credential secret stored in AWS Secrets Manager in Account B (Security Tooling), which is encrypted with a Customer Managed KMS Key in Account B.",
    "question": "Which two permission configurations are required for cross-account secret retrieval?",
    "options": [
      {
        "id": "A",
        "text": "A resource-based policy on the secret in Account B granting Account A's IAM role <code>secretsmanager:GetSecretValue</code>, AND a key policy on the KMS key in Account B granting Account A's IAM role <code>kms:Decrypt</code>"
      },
      {
        "id": "B",
        "text": "Only an IAM policy attached to the application role in Account A"
      },
      {
        "id": "C",
        "text": "Disabling encryption on the secret in Account B"
      },
      {
        "id": "D",
        "text": "Creating an S3 bucket in Account B with public read access"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cross-account access in Secrets Manager requires: 1. A resource policy attached directly to the secret in Account B permitting `secretsmanager:GetSecretValue` to the IAM role in Account A; 2. A KMS key policy on the CMK in Account B permitting `kms:Decrypt` to the IAM role in Account A (AWS managed keys cannot be used cross-account).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Secrets-Manager",
      "Cross-Account",
      "KMS",
      "Resource-Policy"
    ],
    "id": "aws-scs-184"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "KMS Multi-Region Keys for Disaster Recovery",
    "scenario": "A multi-region application deployed in us-east-1 and us-west-2 encrypts user records locally. In the event of a regional disaster in us-east-1, the application in us-west-2 must be able to decrypt existing stored data without making cross-region API calls back to us-east-1.",
    "question": "Which AWS KMS capability provides identical cryptographic keys across multiple AWS Regions?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS **Multi-Region Keys** (creating a primary key in us-east-1 and replicating it to us-west-2)"
      },
      {
        "id": "B",
        "text": "Exporting the private key material to an S3 bucket replicated with Cross-Region Replication"
      },
      {
        "id": "C",
        "text": "Creating two separate independent KMS keys with identical aliases in each Region"
      },
      {
        "id": "D",
        "text": "Using default AWS managed keys in both Regions"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS KMS Multi-Region Keys are primary and replica keys that share the same key material, Key ID, and cryptographic algorithm across different Regions. Ciphertext encrypted by the primary key in us-east-1 can be decrypted directly by the replica key in us-west-2 completely locally, eliminating cross-region latency and dependencies during DR failovers.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "Multi-Region-Keys",
      "Disaster-Recovery",
      "Cryptography"
    ],
    "id": "aws-scs-185"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "S3 Server-Side Encryption Options: SSE-S3 vs. SSE-KMS vs. SSE-C",
    "scenario": "A client has strict compliance requirements requiring that they manage their own encryption keys on-premises, but want AWS to execute the AES-256 symmetric encryption and storage on S3 without AWS ever storing or persisting their encryption keys.",
    "question": "Which Amazon S3 server-side encryption option satisfies this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Server-Side Encryption with Customer-Provided Keys (**SSE-C**)"
      },
      {
        "id": "B",
        "text": "Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)"
      },
      {
        "id": "C",
        "text": "Server-Side Encryption with AWS KMS keys (SSE-KMS)"
      },
      {
        "id": "D",
        "text": "Client-side encryption using the AWS Encryption SDK"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "With **SSE-C**, the client provides their own encryption key in the HTTPS request headers (`x-amz-server-side-encryption-customer-algorithm`, `x-amz-server-side-encryption-customer-key`). S3 executes the AES-256 encryption in memory, writes the ciphertext to disk, and immediately purges the plaintext key from memory. AWS never stores the key.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "SSE-C",
      "Encryption-at-Rest",
      "Compliance"
    ],
    "id": "aws-scs-186"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "AWS Certificate Manager Private Certificate Authority (ACM Private CA)",
    "scenario": "An organization must establish an internal Public Key Infrastructure (PKI) to issue private TLS certificates for microservices running in a service mesh on private VPCs, with certificate revocation lists (CRLs) published to Amazon S3.",
    "question": "Which AWS service provides managed private PKI and certificate lifecycle management?",
    "options": [
      {
        "id": "A",
        "text": "AWS Certificate Manager Private CA (AWS Private CA)"
      },
      {
        "id": "B",
        "text": "Public AWS Certificate Manager (ACM)"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager with auto-rotation"
      },
      {
        "id": "D",
        "text": "AWS CloudHSM CLI tool"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS Private CA is a managed private certificate authority service that enables enterprises to create private root and subordinate CAs to issue x509 certificates for internal microservices, IoT devices, and VPNs, supporting automated CRL publishing and OCSP revocation verification.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "ACM-Private-CA",
      "PKI",
      "Internal-TLS",
      "mTLS"
    ],
    "id": "aws-scs-187"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Systems Manager Parameter Store: Standard vs. Advanced Parameters",
    "scenario": "A development team needs to store an application license key that is 6 KB in size, and wants to configure automated notification when the parameter is about to expire.",
    "question": "Which Parameter Store tier must be used to support parameters larger than 4 KB and parameter policies?",
    "options": [
      {
        "id": "A",
        "text": "**Advanced parameters**"
      },
      {
        "id": "B",
        "text": "Standard parameters"
      },
      {
        "id": "C",
        "text": "Free tier parameters"
      },
      {
        "id": "D",
        "text": "AWS Secrets Manager Basic tier"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Systems Manager Parameter Store **Standard parameters** support up to 4 KB payload and are free of charge. **Advanced parameters** support payloads up to 8 KB, allow up to 100,000 parameters per account/region, and support Parameter Policies (e.g. Expiration dates and Notification events via EventBridge).",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Parameter-Store",
      "Advanced-Parameters",
      "Secrets",
      "Systems-Manager"
    ],
    "id": "aws-scs-188"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Migrating an Unencrypted EBS Root Volume to Encrypted",
    "scenario": "A legacy production EC2 instance has an unencrypted EBS root volume. The security policy requires that all volumes must be encrypted with a Customer Managed KMS Key with minimal downtime.",
    "question": "What is the recommended operational sequence to encrypt the root volume?",
    "options": [
      {
        "id": "A",
        "text": "Stop the EC2 instance, take a snapshot of the root volume, create an encrypted copy of the snapshot specifying the Customer Managed KMS Key, create an AMI from the encrypted snapshot, and launch a new instance from that AMI (or attach the new encrypted volume)"
      },
      {
        "id": "B",
        "text": "Enable encryption on the live running volume using the AWS CLI modify-volume command"
      },
      {
        "id": "C",
        "text": "Copy the root filesystem over SSH to an S3 bucket"
      },
      {
        "id": "D",
        "text": "Reboot the instance with the --encrypt-root flag"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Existing EBS volumes cannot be encrypted in-place. The standard migration procedure is: 1. Stop the instance (to ensure filesystem consistency); 2. Create a snapshot of the unencrypted volume; 3. Copy the snapshot, selecting encryption and specifying the KMS CMK; 4. Register an AMI or create a new volume from the encrypted snapshot and attach it as `/dev/xvda`.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EBS",
      "Root-Volume",
      "Encryption-Migration",
      "KMS"
    ],
    "id": "aws-scs-189"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Asymmetric KMS Keys for External Code Signing and Verification",
    "scenario": "A software vendor distributes firmware updates to external client devices. The vendor wants to sign firmware binaries in AWS using an RSA private key stored in KMS, while allowing external clients to verify the digital signature using a public key without granting clients access to AWS.",
    "question": "Which AWS KMS key configuration facilitates this public verification architecture?",
    "options": [
      {
        "id": "A",
        "text": "Create an **Asymmetric KMS key** with key usage set to `SIGN_VERIFY` and key spec `RSA_4096`, sign firmware in AWS using `kms:Sign`, and distribute the downloaded public key to clients to verify signatures locally"
      },
      {
        "id": "B",
        "text": "Use a Symmetric KMS key and share the key ARN with clients"
      },
      {
        "id": "C",
        "text": "Use AWS Secrets Manager to store a shared secret symmetric key"
      },
      {
        "id": "D",
        "text": "Create a CloudHSM cluster with public internet endpoints"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Asymmetric KMS keys consist of an mathematically linked public and private key pair. For code signing, creating an asymmetric key with key spec RSA (or ECC) and usage `SIGN_VERIFY` allows signing payloads via the `kms:Sign` API (the private key never leaves the HSM), while the public key can be downloaded and distributed publicly for offline verification.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "Asymmetric-Keys",
      "Code-Signing",
      "Digital-Signatures"
    ],
    "id": "aws-scs-190"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Importing Custom Key Material into AWS KMS (BYOK)",
    "scenario": "A regulated enterprise must generate its own encryption key material on an on-premises physical HSM and import that key material into AWS KMS to satisfy sovereign data control laws.",
    "question": "Which steps are required to import external key material into an AWS KMS key?",
    "options": [
      {
        "id": "A",
        "text": "Create a KMS key with origin set to `EXTERNAL`, download the wrapping public key and import token from KMS, encrypt the on-premises key material using the wrapping key, and upload the encrypted material and import token to KMS"
      },
      {
        "id": "B",
        "text": "Export the AWS root CA certificate and install it on the on-premises HSM"
      },
      {
        "id": "C",
        "text": "Paste the raw AES-256 hexadecimal string directly into the AWS Management Console"
      },
      {
        "id": "D",
        "text": "Create a VPN connection between the on-premises HSM and the KMS control plane"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "To Bring Your Own Key (BYOK) to KMS: 1. Create a key with origin `EXTERNAL (Imported)`; 2. Download the wrapping public key and import token; 3. Use the wrapping key to encrypt the raw binary key material on-premises; 4. Call `ImportKeyMaterial` passing the wrapped key material and import token. Note that imported key material does not support automated rotation.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "BYOK",
      "ImportKeyMaterial",
      "Compliance"
    ],
    "id": "aws-scs-191"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Replicating KMS-Encrypted Objects with S3 Cross-Region Replication",
    "scenario": "S3 Cross-Region Replication (CRR) fails to replicate objects encrypted with SSE-KMS from a source bucket in us-east-1 to a destination bucket in eu-west-1.",
    "question": "What configuration is required for S3 CRR to replicate SSE-KMS encrypted objects?",
    "options": [
      {
        "id": "A",
        "text": "Enable replication of KMS-encrypted objects in the replication rule, specify a destination KMS key ARN in eu-west-1, and grant the replication IAM role permissions to `kms:Decrypt` on the source key and `kms:Encrypt` on the destination key"
      },
      {
        "id": "B",
        "text": "Disable S3 bucket versioning on the destination bucket"
      },
      {
        "id": "C",
        "text": "Convert the source bucket encryption to SSE-S3"
      },
      {
        "id": "D",
        "text": "Use AWS DataSync instead of S3 replication"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "By default, S3 CRR does not replicate objects encrypted with SSE-KMS. To enable it: 1. Explicitly enable KMS encrypted object replication in the rule; 2. Specify a destination KMS key in the target Region; 3. Grant the S3 replication IAM role `kms:Decrypt` on the source CMK and `kms:GenerateDataKey`/`kms:Encrypt` on the destination CMK.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3",
      "Cross-Region-Replication",
      "SSE-KMS",
      "Data-Protection"
    ],
    "id": "aws-scs-192"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "AWS Secrets Manager Multi-Region Secret Replication",
    "scenario": "A global web application deployed across us-east-1 and ap-southeast-1 accesses an Amazon Aurora Global Database. The application in ap-southeast-1 must read database credentials locally with low latency.",
    "question": "How should Secrets Manager be configured for multi-region availability?",
    "options": [
      {
        "id": "A",
        "text": "Configure primary secret replication in Secrets Manager to create read-only replica secrets in the destination Regions (ap-southeast-1), which are automatically synchronized when the primary secret rotates"
      },
      {
        "id": "B",
        "text": "Manually copy and paste the secret string into each Region monthly"
      },
      {
        "id": "C",
        "text": "Create a DynamoDB global table to store plaintext passwords"
      },
      {
        "id": "D",
        "text": "Configure cross-region VPC peering to query the primary secret over HTTPS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS Secrets Manager supports multi-Region secret replication. The primary secret in us-east-1 is replicated to replica secrets in target Regions. Replicas are read-only copies encrypted with regional KMS keys in the target Region, and Secrets Manager automatically keeps replica values in sync whenever the primary rotates.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Secrets-Manager",
      "Multi-Region-Replication",
      "Disaster-Recovery",
      "Latency"
    ],
    "id": "aws-scs-193"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Auditing and Discovering Sensitive Data with Amazon Macie",
    "scenario": "An enterprise wants to scan hundreds of S3 buckets across multiple accounts to discover exposed sensitive data, such as unencrypted credit card numbers and passport scans.",
    "question": "Which Amazon Macie feature continuously evaluates S3 bucket security posture and sensitive data presence?",
    "options": [
      {
        "id": "A",
        "text": "Enable Amazon Macie across the organization, which provides automated bucket posture inventory (evaluating public accessibility and encryption) and automated sensitive data discovery jobs using managed data identifiers"
      },
      {
        "id": "B",
        "text": "Run Amazon Inspector on EC2 instances to inspect mounted S3 buckets"
      },
      {
        "id": "C",
        "text": "Deploy a custom Python script that downloads all S3 objects locally to run grep"
      },
      {
        "id": "D",
        "text": "Configure S3 Storage Lens with cost optimization metrics"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Amazon Macie uses machine learning and pattern matching to discover sensitive data in S3. It provides an automated S3 bucket inventory (evaluating public access, encryption status, and replication) and runs discovery jobs across targeted buckets using managed and custom data identifiers.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Macie",
      "Sensitive-Data",
      "S3",
      "Data-Discovery"
    ],
    "id": "aws-scs-194"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Preventing Accidental Deletion of KMS Customer Managed Keys",
    "scenario": "A security administrator needs to delete an obsolete Customer Managed Key (CMK) in AWS KMS, but wants to ensure that a safety buffer exists in case an application still relies on the key.",
    "question": "What is the minimum and maximum waiting period enforced by AWS KMS before a key is permanently destroyed?",
    "options": [
      {
        "id": "A",
        "text": "A minimum of **7 days** and a maximum of **30 days** (default 30 days)"
      },
      {
        "id": "B",
        "text": "KMS keys are deleted immediately upon API invocation"
      },
      {
        "id": "C",
        "text": "A minimum of 24 hours and a maximum of 7 days"
      },
      {
        "id": "D",
        "text": "A mandatory 90-day waiting period"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS KMS strictly enforces a mandatory waiting period for key deletion. When `ScheduleKeyDeletion` is called, the key enters the Pending Deletion state for a duration between 7 and 30 days (default is 30 days). The key cannot be used during this period, but deletion can be cancelled via `CancelKeyDeletion` if errors occur.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "KMS",
      "ScheduleKeyDeletion",
      "Pending-Deletion",
      "Safety-Buffer"
    ],
    "id": "aws-scs-195"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "DynamoDB Encryption at Rest with Customer Managed Keys",
    "scenario": "A financial application requires that all DynamoDB tables be encrypted at rest using a Customer Managed KMS Key (CMK), and the key must be rotated automatically each year.",
    "question": "How is DynamoDB table encryption with a CMK configured?",
    "options": [
      {
        "id": "A",
        "text": "Select **KMS - Customer Managed Key** during table creation (or update existing tables in-place) and specify the CMK ARN; DynamoDB automatically creates grants to access the key"
      },
      {
        "id": "B",
        "text": "Deploy an EC2 proxy to encrypt items before calling PutItem"
      },
      {
        "id": "C",
        "text": "DynamoDB only supports AWS owned encryption keys"
      },
      {
        "id": "D",
        "text": "Enable S3 bucket default encryption"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Amazon DynamoDB supports zero-downtime encryption at rest using AWS Owned Keys (default), AWS Managed Keys, or Customer Managed Keys (CMKs). Selecting a Customer Managed Key allows customers to enforce key rotation, key policies, and access auditing via CloudTrail for all table data, indexes, and streams.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "DynamoDB",
      "Encryption-at-Rest",
      "KMS",
      "Compliance"
    ],
    "id": "aws-scs-196"
  },
  {
    "difficulty": "easy",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Amazon EFS Encryption at Rest and in Transit",
    "scenario": "An enterprise deploys a shared file system using Amazon EFS for a fleet of EC2 instances. The file system must be encrypted at rest using a customer managed KMS key, and all NFS traffic between EC2 and EFS must be encrypted in transit.",
    "question": "How are both encryption requirements implemented for Amazon EFS?",
    "options": [
      {
        "id": "A",
        "text": "Enable encryption at rest during EFS file system creation specifying the KMS CMK, and mount the file system on EC2 instances using the **Amazon EFS mount helper** with the <code>-o tls</code> mount option"
      },
      {
        "id": "B",
        "text": "Enable encryption at rest after creation using the AWS CLI, and configure an SSH tunnel for NFS traffic"
      },
      {
        "id": "C",
        "text": "Mount the file system using standard NFSv4 without parameters"
      },
      {
        "id": "D",
        "text": "Rely on VPC Network ACLs to encrypt NFS packets"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "EFS encryption at rest must be enabled at creation time using KMS. For encryption in transit, the Amazon EFS mount helper (`amazon-efs-utils`) establishes a TLS tunnel (using stunnel) between the client instance and the EFS service when mounted with the `-o tls` option.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "EFS",
      "Encryption-at-Rest",
      "Encryption-in-Transit",
      "TLS"
    ],
    "id": "aws-scs-197"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "AWS Secrets Manager Secret Deletion Safeguards",
    "scenario": "An engineer attempts to delete an active production API secret in AWS Secrets Manager using the AWS CLI, but wants to prevent immediate catastrophic data loss.",
    "question": "What is the default behavior when calling DeleteSecret in AWS Secrets Manager?",
    "options": [
      {
        "id": "A",
        "text": "Secrets Manager schedules the secret for deletion after a recovery window of **30 days** (configurable from 7 to 30 days), during which the secret can be restored using `RestoreSecret`"
      },
      {
        "id": "B",
        "text": "The secret is immediately and permanently destroyed"
      },
      {
        "id": "C",
        "text": "The secret is moved to an S3 bucket in another AWS Region"
      },
      {
        "id": "D",
        "text": "Secrets Manager prompts for root account multi-factor authentication"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "By default, calling `DeleteSecret` initiates a soft delete with a default 30-day recovery window (can be set between 7 and 30 days). The secret cannot be read during this window, but can be restored with `RestoreSecret`. Immediate permanent deletion requires passing `--force-delete-without-recovery`.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "Secrets-Manager",
      "DeleteSecret",
      "Recovery-Window",
      "RestoreSecret"
    ],
    "id": "aws-scs-198"
  },
  {
    "difficulty": "medium",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "RDS Database Storage Encryption Constraints",
    "scenario": "An existing production Amazon RDS MySQL database was created without encryption. Corporate policy now requires that the database must be encrypted at rest using an AWS KMS key.",
    "question": "How can encryption at rest be applied to an existing unencrypted Amazon RDS instance?",
    "options": [
      {
        "id": "A",
        "text": "Take a DB snapshot of the unencrypted RDS instance, copy the snapshot while specifying a KMS key to encrypt the copy, and restore a new DB instance from the encrypted snapshot"
      },
      {
        "id": "B",
        "text": "Modify the running RDS DB instance configuration to enable encryption directly"
      },
      {
        "id": "C",
        "text": "Export database tables to CSV and upload them to an encrypted S3 bucket"
      },
      {
        "id": "D",
        "text": "Attach an AWS WAF rule to the database endpoint"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Like EBS, existing unencrypted Amazon RDS DB instances cannot be encrypted in-place. The migration path requires taking a DB snapshot, copying the snapshot with encryption enabled using an AWS KMS key, and restoring a new encrypted DB instance from the encrypted snapshot copy.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "RDS",
      "Snapshot-Copy",
      "Encryption-Migration",
      "KMS"
    ],
    "id": "aws-scs-199"
  },
  {
    "difficulty": "hard",
    "certId": "aws-scs",
    "domainId": "d5",
    "domainName": "Data Protection",
    "title": "Enforcing SSE-KMS on S3 Object Uploads via Bucket Policies",
    "scenario": "A compliance mandate dictates that all objects uploaded to an S3 bucket must explicitly use SSE-KMS encryption with a designated Customer Managed Key (CMK), rejecting any upload using SSE-S3 or unencrypted uploads.",
    "question": "Which bucket policy condition statement enforces upload encryption with the designated KMS key?",
    "options": [
      {
        "id": "A",
        "text": "A Deny statement on <code>s3:PutObject</code> with condition <code>StringNotEquals</code> for <code>s3:x-amz-server-side-encryption-aws-kms-key-id</code> matching the CMK ARN"
      },
      {
        "id": "B",
        "text": "An Allow statement on <code>s3:GetObject</code>"
      },
      {
        "id": "C",
        "text": "A Deny statement on <code>s3:DeleteObject</code>"
      },
      {
        "id": "D",
        "text": "An S3 Lifecycle rule that deletes unencrypted objects"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "To mandate a specific KMS key, the bucket policy denies `s3:PutObject` if the header `s3:x-amz-server-side-encryption` is not `aws:kms`, OR if the `s3:x-amz-server-side-encryption-aws-kms-key-id` condition does not match the required CMK ARN.",
    "referenceUrl": "https://docs.aws.amazon.com/security/",
    "tags": [
      "S3-Bucket-Policy",
      "SSE-KMS",
      "PutObject",
      "Key-Enforcement"
    ],
    "id": "aws-scs-200"
  }
];

export default AWS_SCS_QUESTIONS_8;
