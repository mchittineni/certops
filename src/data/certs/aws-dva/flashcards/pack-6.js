export const AWS_DVA_FLASHCARDS_6 = [
  {
    id: "aws-dva-fc-126",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3 Glacier: Vault Lock",
    hint: "Immutable compliance archiving.",
    back: "<strong>S3 Glacier Vault Lock</strong> enforces write-once-read-many (WORM) policies. Once locked after validation, the policy is permanently immutable and cannot be deleted by anyone.",
    tags: ["S3 Glacier", "Vault Lock", "Compliance"]
  },
  {
    id: "aws-dva-fc-127",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Encryption Context",
    hint: "Cryptographic context binding.",
    back: "The <strong>EncryptionContext</strong> is key-value non-secret data that KMS cryptographically binds to the ciphertext as Authenticated Additional Data (AAD), preventing ciphertext tampering.",
    tags: ["KMS", "Encryption Context", "Security"]
  },
  {
    id: "aws-dva-fc-128",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Credential Reports",
    hint: "Account-wide credential auditing.",
    back: "The <strong>IAM Credential Report</strong> outputs a CSV of all users, password statuses, and access key last-used dates to identify stale or unrotated credentials across the account.",
    tags: ["IAM", "Credential Report", "Audit"]
  },
  {
    id: "aws-dva-fc-129",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Access Analyzer",
    hint: "Automated reasoning for external access.",
    back: "<strong>IAM Access Analyzer</strong> evaluates resource policies mathematically to identify resources shared with external accounts or the public internet, generating actionable security findings.",
    tags: ["IAM", "Access Analyzer", "Security"]
  },
  {
    id: "aws-dva-fc-130",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager: Multi-Region Replication",
    hint: "Automated cross-region credential sync.",
    back: "Secrets Manager natively replicates secrets from a primary region to <strong>replica regions</strong>, ensuring low-latency local reads and synchronized automated rotations for disaster recovery.",
    tags: ["Secrets Manager", "Replication", "Multi-Region"]
  },
  {
    id: "aws-dva-fc-131",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Systems Manager: Session Manager",
    hint: "Secure port-less shell access.",
    back: "<strong>Session Manager</strong> provides interactive shell access to EC2 instances over HTTPS via the SSM Agent, requiring no open inbound ports, no bastion hosts, and no SSH keys.",
    tags: ["Systems Manager", "Session Manager", "Security"]
  },
  {
    id: "aws-dva-fc-132",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: User Migration Trigger",
    hint: "Just-in-time seamless user import.",
    back: "The <strong>User Migration</strong> trigger imports legacy users into Cognito upon their first login, validating credentials against the old system without forcing mass password resets.",
    tags: ["Cognito", "User Migration", "Migration"]
  },
  {
    id: "aws-dva-fc-133",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "API Gateway: Client SSL Certificates",
    hint: "Backend authentication of API Gateway.",
    back: "API Gateway generates <strong>Client SSL Certificates</strong> presented during TLS handshakes to backend servers, allowing backends to verify that requests originated from API Gateway.",
    tags: ["API Gateway", "Client Certificates", "Security"]
  },
  {
    id: "aws-dva-fc-134",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Requester Pays",
    hint: "Shifting egress transfer costs to consumers.",
    back: "When <strong>Requester Pays</strong> is enabled, the caller's AWS account pays for data transfer and request charges rather than the bucket owner, ideal for large public research datasets.",
    tags: ["S3", "Requester Pays", "Billing"]
  },
  {
    id: "aws-dva-fc-135",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: AbortIncompleteMultipartUpload",
    hint: "Cleaning up abandoned upload parts.",
    back: "The <strong>AbortIncompleteMultipartUpload</strong> lifecycle rule purges incomplete multipart parts after a set number of days (e.g. 7 days), preventing ghost storage costs.",
    tags: ["S3", "Lifecycle", "Multipart Upload"]
  },
  {
    id: "aws-dva-fc-136",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Key Aliases",
    hint: "Decoupled mutable key references.",
    back: "A <strong>KMS Alias</strong> provides a friendly name (e.g. <code>alias/app-key</code>) mapped to a key ID. Aliases can be repointed to new keys without updating application code or configurations.",
    tags: ["KMS", "Aliases", "Key Management"]
  },
  {
    id: "aws-dva-fc-137",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: MaxSessionDuration",
    hint: "Configuring role credential lifespan.",
    back: "The <strong>MaxSessionDuration</strong> setting on an IAM role specifies the maximum credential lifespan (from <strong>1 hour up to 12 hours</strong>) when assuming the role via STS.",
    tags: ["IAM", "Roles", "Session Duration"]
  },
  {
    id: "aws-dva-fc-138",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Attribute-Based Access Control (ABAC)",
    hint: "Dynamic tag-based authorization.",
    back: "<strong>ABAC</strong> grants permissions by matching tags on the IAM principal (<code>aws:PrincipalTag</code>) with tags on the resource (<code>aws:ResourceTag</code>), scaling access control effortlessly.",
    tags: ["IAM", "ABAC", "Secrets Manager"]
  },
  {
    id: "aws-dva-fc-139",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Parameter Store: EventBridge Integration",
    hint: "Event-driven configuration tracking.",
    back: "Parameter Store emits events to <strong>Amazon EventBridge</strong> on parameter creation, modification, or deletion, triggering automated Lambda cache invalidations or alerts.",
    tags: ["Parameter Store", "EventBridge", "Automation"]
  },
  {
    id: "aws-dva-fc-140",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Device Tracking",
    hint: "Remembering trusted user devices.",
    back: "Cognito <strong>Device Tracking</strong> assigns cryptographic device keys to trusted clients, enabling apps to suppress redundant MFA challenges on remembered devices.",
    tags: ["Cognito", "Device Tracking", "MFA"]
  },
  {
    id: "aws-dva-fc-141",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Enhanced Authflow",
    hint: "Streamlined temporary credential vending.",
    back: "The <strong>Enhanced (Simplified) Authflow</strong> returns temporary AWS credentials directly from <code>GetCredentialsForIdentity</code> in one call, reducing mobile network latency.",
    tags: ["Cognito", "Identity Pools", "Enhanced Authflow"]
  },
  {
    id: "aws-dva-fc-142",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "API Gateway: IP Whitelisting Resource Policy",
    hint: "Restricting APIs by client IP.",
    back: "An API Gateway Resource Policy with <code>Effect: Allow</code> and <strong>IpAddress: { aws:SourceIp: ... }</strong> restricts API invocation to authorized public IP ranges.",
    tags: ["API Gateway", "Resource Policy", "IP Whitelisting"]
  },
  {
    id: "aws-dva-fc-143",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: MFA Delete",
    hint: "Hardware token requirement for version deletion.",
    back: "<strong>MFA Delete</strong> requires an MFA code (from the AWS root account) to permanently delete object versions or change bucket versioning states, preventing accidental or malicious deletion.",
    tags: ["S3", "MFA Delete", "Security"]
  },
  {
    id: "aws-dva-fc-144",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: RetireGrant vs. RevokeGrant",
    hint: "Cleaning up programmatic permissions.",
    back: "<strong>RetireGrant</strong> allows grantee applications to clean up their own grants when work completes. <strong>RevokeGrant</strong> is an administrative revocation action.",
    tags: ["KMS", "Grants", "RetireGrant"]
  },
  {
    id: "aws-dva-fc-145",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Advanced Security Features",
    hint: "Brute-force and threat protection.",
    back: "Cognito <strong>Advanced Security Features</strong> evaluate risk levels for sign-in attempts, detecting brute-force attacks, compromised credentials, and enforcing adaptive MFA challenges.",
    tags: ["Cognito", "Advanced Security", "Adaptive Authentication"]
  },
  {
    id: "aws-dva-fc-146",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: buildspec.yml Phases",
    hint: "Lifecycle phases in CodeBuild.",
    back: "CodeBuild phases: <strong>install</strong> (tools/packages), <strong>pre_build</strong> (logins/dependencies), <strong>build</strong> (compile/test), and <strong>post_build</strong> (packaging/notifications).",
    tags: ["CodeBuild", "buildspec.yml", "CI/CD"]
  },
  {
    id: "aws-dva-fc-147",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: Dependency Caching",
    hint: "Slashing CI build durations.",
    back: "Adding directories (such as <code>node_modules</code> or Maven <code>.m2</code>) to the <strong>cache: paths:</strong> section in <code>buildspec.yml</code> stores dependencies in S3 for fast reuse.",
    tags: ["CodeBuild", "Caching", "Performance"]
  },
  {
    id: "aws-dva-fc-148",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: EC2 Lifecycle Hooks",
    hint: "Hook execution order in appspec.yml.",
    back: "EC2 hooks order: <strong>BeforeInstall</strong> -> <strong>AfterInstall</strong> -> <strong>ApplicationStart</strong> -> <strong>ValidateService</strong>. <code>ValidateService</code> verifies health checks before marking success.",
    tags: ["CodeDeploy", "appspec.yml", "Lifecycle Hooks"]
  },
  {
    id: "aws-dva-fc-149",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: Lambda Lifecycle Hooks",
    hint: "Validating serverless deployments.",
    back: "Lambda deployments support two hooks: <strong>BeforeAllowTraffic</strong> (runs pre-traffic shift integration tests) and <strong>AfterAllowTraffic</strong> (runs post-shift verification).",
    tags: ["CodeDeploy", "Lambda", "Hooks"]
  },
  {
    id: "aws-dva-fc-150",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: Canary vs. Linear Configurations",
    hint: "Traffic shifting models.",
    back: "<strong>Canary10Percent10Minutes</strong> shifts 10%, waits 10 minutes, then shifts the remaining 90%. <strong>Linear10PercentEvery1Minute</strong> shifts 10% every minute in 10 equal steps.",
    tags: ["CodeDeploy", "Canary", "Configurations"]
  }
];

export default AWS_DVA_FLASHCARDS_6;
