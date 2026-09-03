export const AWS_DVA_QUESTIONS_6 = [
  {
    id: "aws-dva-126",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Glacier Vault Lock Immutable Compliance Policies",
    scenario: "An enterprise must enforce a strict SEC regulatory compliance policy on archive records in S3 Glacier where the policy itself can never be altered or deleted once initiated.",
    question: "Which feature locks the vault policy irreversibly following a 24-hour verification window?",
    options: [
      { id: 'A', text: "S3 Glacier Vault Notifications" },
      { id: 'B', text: "S3 Glacier Vault Lock (InitiateVaultLock and CompleteVaultLock)" },
      { id: 'C', text: "KMS Key Policy" },
      { id: 'D', text: "S3 Bucket Versioning" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "S3 Glacier Vault Lock allows you to easily deploy and enforce compliance controls for individual S3 Glacier vaults with a Vault Lock policy. Once locked with `CompleteVaultLock` within the 24-hour testing window, the policy becomes completely immutable and cannot be deleted or modified.",
    referenceUrl: "https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html",
    tags: ["S3 Glacier", "Vault Lock", "Compliance"]
  },
  {
    id: "aws-dva-127",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Encryption Context for Authenticated Additional Data (AAD)",
    scenario: "A developer uses AWS KMS to encrypt customer records. The developer wants to ensure that encrypted records cannot be swapped or decrypted under a different customer ID.",
    question: "Which KMS parameter acts as cryptographically authenticated additional data (AAD) during encryption and decryption?",
    options: [
      { id: 'A', text: "EncryptionContext" },
      { id: 'B', text: "GrantTokens" },
      { id: 'C', text: "KeySpec" },
      { id: 'D', text: "KeyId" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An `EncryptionContext` is an optional set of key-value pairs containing arbitrary, non-secret context data. When provided during `GenerateDataKey` or `Encrypt`, KMS cryptographically binds the context to the ciphertext. The exact same key-value pairs must be provided in the `Decrypt` request, or decryption fails.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context",
    tags: ["KMS", "Encryption Context", "Security"]
  },
  {
    id: "aws-dva-128",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Credential Reports for Auditing Inactive Credentials",
    scenario: "A security auditor requires a comprehensive list of all IAM users in the AWS account, including the status of their passwords, access key creation dates, and when keys were last rotated.",
    question: "Which IAM feature generates this account-wide credential audit file?",
    options: [
      { id: 'A', text: "AWS Config Snapshot" },
      { id: 'B', text: "IAM Credential Report (GenerateCredentialReport and GetCredentialReport)" },
      { id: 'C', text: "AWS Trusted Advisor Check" },
      { id: 'D', text: "IAM Access Analyzer" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An IAM Credential Report is a downloadable CSV file that lists all IAM users in your account and the status of their credentials, including password enabled status, last password change date, access key active statuses, and last used timestamps.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html",
    tags: ["IAM", "Credential Report", "Audit"]
  },
  {
    id: "aws-dva-129",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Access Analyzer for Public & Cross-Account Detection",
    scenario: "A company wants automated monitoring that continuously alerts security teams whenever an S3 bucket, KMS key, or IAM role is accidentally shared with external AWS accounts or made public.",
    question: "Which AWS service analyzes resource policies using automated mathematical reasoning?",
    options: [
      { id: 'A', text: "Amazon GuardDuty" },
      { id: 'B', text: "AWS WAF" },
      { id: 'C', text: "IAM Access Analyzer" },
      { id: 'D', text: "Amazon Inspector" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM Access Analyzer uses provable security (automated mathematical logic) to analyze resource-based policies attached to S3 buckets, IAM roles, KMS keys, SQS queues, and Secrets Manager secrets, generating findings whenever resources are accessible from outside the zone of trust.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM", "Access Analyzer", "Security"]
  },
  {
    id: "aws-dva-130",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS Secrets Manager Multi-Region Secret Replication",
    scenario: "A multi-region application deployed in `us-east-1` and `us-west-2` requires low-latency local access to database credentials in both regions.",
    question: "How should the developer replicate secrets across regions in Secrets Manager?",
    options: [
      { id: 'A', text: "Deploy an SQS queue to pass passwords across regions" },
      { id: 'B', text: "Configure Multi-Region Secret Replication on the secret in Secrets Manager" },
      { id: 'C', text: "Export the secret to an unencrypted public S3 bucket" },
      { id: 'D', text: "Write a cron job that calls PutSecretValue in both regions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Secrets Manager supports native multi-region secret replication. You create a primary secret in one region and replicate it to secondary regions. Secrets Manager automatically synchronizes secret values and rotation updates across all replica regions.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html",
    tags: ["Secrets Manager", "Replication", "Multi-Region"]
  },
  {
    id: "aws-dva-131",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Systems Manager Session Manager for SSH-less Bastion Access",
    scenario: "An enterprise security standard prohibits opening inbound port 22 (SSH) on EC2 instances and forbids managing static SSH private keys on developer laptops.",
    question: "Which AWS service provides secure, browser-based shell access to EC2 instances using IAM authentication?",
    options: [
      { id: 'A', text: "AWS Systems Manager Session Manager" },
      { id: 'B', text: "AWS Cloud9" },
      { id: 'C', text: "Amazon EC2 Instance Connect with open port 22" },
      { id: 'D', text: "Amazon WorkSpaces" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager Session Manager provides secure instance management without opening inbound ports, managing SSH keys, or deploying bastion hosts. Connections are authenticated through IAM, encrypted via TLS, and logged to Amazon S3 or CloudWatch Logs.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["Systems Manager", "Session Manager", "Security"]
  },
  {
    id: "aws-dva-132",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool User Migration Lambda Trigger",
    scenario: "A company is migrating 500,000 users from an on-premises LDAP user store to Amazon Cognito User Pools. Forcing all users to reset their passwords on day one will cause customer churn.",
    question: "Which Cognito feature enables seamless, just-in-time user and password migration as users log in?",
    options: [
      { id: 'A', text: "Pre Sign-up Trigger" },
      { id: 'B', text: "Post Authentication Trigger" },
      { id: 'C', text: "User Migration Lambda Trigger" },
      { id: 'D', text: "Cognito Sync" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `User Migration` Lambda trigger is invoked when a user attempts to sign in with a username that does not exist in the Cognito user pool. The Lambda function authenticates the user against the legacy user directory, imports the profile and password into Cognito, and allows the login to proceed seamlessly without a password reset.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-migrate-user.html",
    tags: ["Cognito", "User Migration", "Migration"]
  },
  {
    id: "aws-dva-133",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Client SSL Certificate for Backend Verification",
    scenario: "An API Gateway REST API forwards requests to an HTTP backend running on an EC2 instance. The backend must verify that incoming HTTP requests originated strictly from API Gateway and not from rogue network clients.",
    question: "Which API Gateway feature allows the backend server to authenticate API Gateway via SSL client certificates?",
    options: [
      { id: 'A', text: "API Gateway Usage Plans" },
      { id: 'B', text: "API Gateway Client Certificate" },
      { id: 'C', text: "AWS WAF Bot Control" },
      { id: 'D', text: "Amazon Route 53 DNSSEC" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "API Gateway can generate an SSL client certificate. When API Gateway makes HTTP requests to a backend HTTP endpoint, it presents the client certificate during the TLS handshake. The backend verifies the certificate to ensure traffic came exclusively from that API Gateway stage.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html",
    tags: ["API Gateway", "Client Certificates", "Security"]
  },
  {
    id: "aws-dva-134",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Requester Pays Buckets",
    scenario: "A scientific research agency hosts 100 TB of satellite imagery in an S3 bucket for open academic research. The agency wants users who download data to pay their own data transfer and request costs.",
    question: "Which S3 bucket configuration transfers network egress and request billing to the caller?",
    options: [
      { id: 'A', text: "S3 Object Lock" },
      { id: 'B', text: "Requester Pays" },
      { id: 'C', text: "S3 Storage Lens" },
      { id: 'D', text: "S3 Transfer Acceleration" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling `Requester Pays` on an S3 bucket transfers the cost of requests and data download transfers from the bucket owner to the requesting AWS account. Callers must include `x-amz-request-payer=requester` in their requests and authenticate with valid AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html",
    tags: ["S3", "Requester Pays", "Billing"]
  },
  {
    id: "aws-dva-135",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Lifecycle AbortIncompleteMultipartUpload",
    scenario: "A developer notices that an S3 bucket storage size is growing unexpectedly even though no new completed files have been added. Incomplete multipart uploads were abandoned after network failures.",
    question: "Which S3 Lifecycle rule automatically removes incomplete multipart upload parts after 7 days?",
    options: [
      { id: 'A', text: "Transition to S3 Glacier" },
      { id: 'B', text: "AbortIncompleteMultipartUpload" },
      { id: 'C', text: "NoncurrentVersionExpiration" },
      { id: 'D', text: "Expire Current Versions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `AbortIncompleteMultipartUpload` lifecycle action instructs Amazon S3 to abort any multipart uploads that have not completed within a specified number of days after initiation, permanently deleting the accumulated partial upload parts and eliminating ongoing storage costs.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html",
    tags: ["S3", "Lifecycle", "Multipart Upload"]
  },
  {
    id: "aws-dva-136",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Aliases for Decoupled Key Management",
    scenario: "An application encrypts data using a KMS key. Security teams periodically need to point the application to a new KMS key without changing application configuration files or redeploying code.",
    question: "Which KMS feature provides a friendly, mutable display name that can be pointed to different key IDs?",
    options: [
      { id: 'A', text: "KMS Key Alias (alias/my-key)" },
      { id: 'B', text: "KMS Grant Token" },
      { id: 'C', text: "KMS Key Tag" },
      { id: 'D', text: "KMS Key ARN" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A KMS Alias is a friendly, mutable display name (e.g. `alias/financial-data`) that maps to a specific KMS key ID. Developers configure applications to reference the alias, allowing administrators to update the underlying key ID (`UpdateAlias`) without modifying application code.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html",
    tags: ["KMS", "Aliases", "Key Management"]
  },
  {
    id: "aws-dva-137",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Role Maximum Session Duration Configuration",
    scenario: "A developer uses an assumed role to execute an 8-hour batch data processing job. By default, the temporary STS credentials expire after 1 hour.",
    question: "How should the administrator extend the validity of credentials obtained when assuming the role?",
    options: [
      { id: 'A', text: "Increase the Maximum Session Duration setting on the IAM role up to 12 hours (43,200 seconds)" },
      { id: 'B', text: "Switch to an IAM user instead of a role" },
      { id: 'C', text: "Request an IAM root user password reset" },
      { id: 'D', text: "Generate a new access key with no expiration date" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM roles have a `MaxSessionDuration` setting that can be configured between 1 hour (3,600 seconds) and 12 hours (43,200 seconds). Callers specify their desired duration when calling `sts:AssumeRole` up to this maximum limit.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-modify_max-session-duration",
    tags: ["IAM", "Roles", "Session Duration"]
  },
  {
    id: "aws-dva-138",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS Secrets Manager Attribute-Based Access Control (ABAC)",
    scenario: "A developer needs to ensure that engineering teams can only access secrets in Secrets Manager that have a tag `Project` matching their IAM principal tag `Project`.",
    question: "Which authorization strategy evaluates tags on both the caller and the secret dynamically?",
    options: [
      { id: 'A', text: "Role-Based Access Control (RBAC) with hardcoded ARNs" },
      { id: 'B', text: "Attribute-Based Access Control (ABAC) using the aws:ResourceTag and aws:PrincipalTag condition keys" },
      { id: 'C', text: "S3 Bucket Policies" },
      { id: 'D', text: "Cognito User Pool Groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Attribute-Based Access Control (ABAC) uses IAM policies that compare tags attached to the IAM principal (`aws:PrincipalTag/Project`) with tags attached to the AWS resource (`aws:ResourceTag/Project`), allowing dynamic, scalable access control without updating policies when new resources are added.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM", "ABAC", "Secrets Manager"]
  },
  {
    id: "aws-dva-139",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Systems Manager Parameter Store Change Notifications via EventBridge",
    scenario: "A microservice cache needs to be refreshed whenever an administrator updates a database endpoint parameter in Systems Manager Parameter Store.",
    question: "Which service receives parameter change events from Parameter Store and triggers downstream notification targets?",
    options: [
      { id: 'A', text: "Amazon Simple Email Service (SES)" },
      { id: 'B', text: "AWS CloudFormation Change Sets" },
      { id: 'C', text: "Amazon EventBridge" },
      { id: 'D', text: "Amazon QuickSight" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Systems Manager Parameter Store publishes events to Amazon EventBridge whenever parameters are created, updated, or deleted. EventBridge rules match parameter change events and trigger downstream targets like Lambda functions or SNS topics.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-events.html",
    tags: ["Parameter Store", "EventBridge", "Automation"]
  },
  {
    id: "aws-dva-140",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool Device Tracking & Remembered Devices",
    scenario: "A banking mobile app uses Cognito User Pools with MFA. The bank wants to challenge users for SMS MFA only when they log in from a new, unrecognized device.",
    question: "Which Amazon Cognito feature suppresses MFA challenges on recognized user devices?",
    options: [
      { id: 'A', text: "Device Tracking with Remembered Devices" },
      { id: 'B', text: "Identity Pools Guest Mode" },
      { id: 'C', text: "Cognito Sync" },
      { id: 'D', text: "Advanced Security Risk-Based Adaptive Authentication alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cognito User Pools support `Device Tracking`. When devices are 'Remembered', Cognito generates a device key and verifies the device during login, allowing applications to bypass second-factor MFA challenges on trusted devices while enforcing MFA on unknown devices.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html",
    tags: ["Cognito", "Device Tracking", "MFA"]
  },
  {
    id: "aws-dva-141",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito Identity Pools Enhanced vs Basic Authflow",
    scenario: "A developer uses Amazon Cognito Identity Pools to obtain temporary AWS credentials. In the legacy Basic flow, the mobile client made two separate network calls to STS.",
    question: "How does the Enhanced (Simplified) Authflow improve client performance?",
    options: [
      { id: 'A', text: "The client receives temporary AWS credentials directly from Cognito in a single API call to GetCredentialsForIdentity" },
      { id: 'B', text: "The client connects directly to DynamoDB without credentials" },
      { id: 'C', text: "The client downloads a long-term IAM access key file" },
      { id: 'D', text: "Cognito disables token verification completely" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the Enhanced (Simplified) Authflow, Amazon Cognito acts on behalf of the client to request credentials from STS, allowing the client to obtain temporary credentials in a single `GetCredentialsForIdentity` call rather than separate `GetId`, `GetOpenIdToken`, and `AssumeRoleWithWebIdentity` calls.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html",
    tags: ["Cognito", "Identity Pools", "Enhanced Authflow"]
  },
  {
    id: "aws-dva-142",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policy IP Whitelisting",
    scenario: "A company wants to allow access to an API Gateway REST API only from a specific partner office public IP address (`203.0.113.50/32`).",
    question: "Which condition operator in an API Gateway Resource Policy restricts access by IP?",
    options: [
      { id: 'A', text: "IpAddress: { aws:SourceIp: 203.0.113.50/32 }" },
      { id: 'B', text: "StringEquals: { aws:PrincipalType: IP }" },
      { id: 'C', text: "ArnEquals: { aws:SourceArn: 203.0.113.50 }" },
      { id: 'D', text: "Bool: { aws:SecureTransport: true }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway Resource Policies support IP condition operators (`IpAddress` and `NotIpAddress`). A policy granting access only when `\"IpAddress\": { \"aws:SourceIp\": \"203.0.113.50/32\" }` ensures requests from other IP addresses are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-examples.html#apigateway-resource-policies-source-ip-example",
    tags: ["API Gateway", "Resource Policy", "IP Whitelisting"]
  },
  {
    id: "aws-dva-143",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Versioning MFA Delete Protection",
    scenario: "A critical backup S3 bucket stores compliance archives. To protect against rogue administrators or compromised root credentials, permanently deleting an object version must require a physical hardware token code.",
    question: "Which Amazon S3 feature requires multi-factor authentication to delete object versions?",
    options: [
      { id: 'A', text: "S3 Versioning with MFA Delete enabled" },
      { id: 'B', text: "S3 Object Lock alone" },
      { id: 'C', text: "S3 Bucket Policies with Deny" },
      { id: 'D', text: "KMS Multi-Factor Encryption" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "S3 Versioning supports `MFA Delete`. When enabled via the AWS CLI using root account credentials, deleting an object version or altering the bucket versioning state requires the caller to provide an MFA code from a hardware or virtual TOTP device.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html",
    tags: ["S3", "MFA Delete", "Security"]
  },
  {
    id: "aws-dva-144",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Grants Retirement vs Revocation",
    scenario: "An application using a KMS grant finishes its batch encryption job and wants to cleanly retire its grant using its own grant credentials without requiring admin permissions.",
    question: "Which API operation allows the grantee principal to retire the grant independently?",
    options: [
      { id: 'A', text: "DisableKey" },
      { id: 'B', text: "DeleteKey" },
      { id: 'C', text: "RevokeGrant" },
      { id: 'D', text: "RetireGrant" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `RetireGrant` API allows the grantee principal (or the principal that created the grant) to voluntarily retire the grant when it is done using the KMS key. In contrast, `RevokeGrant` is typically called by administrators using key management permissions.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#retire-grant",
    tags: ["KMS", "Grants", "RetireGrant"]
  },
  {
    id: "aws-dva-145",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool Account Lockout and Adaptive Authentication",
    scenario: "A security audit requires that user accounts in Cognito User Pools must be protected against brute-force password guessing attacks.",
    question: "Which Cognito User Pool feature detects compromised credentials, monitors unusual IP activity, and locks accounts temporarily?",
    options: [
      { id: 'A', text: "IAM Credential Reports" },
      { id: 'B', text: "Cognito Identity Pools Basic Auth" },
      { id: 'C', text: "Cognito Sync" },
      { id: 'D', text: "Cognito Advanced Security Features (Adaptive Authentication)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cognito User Pools `Advanced Security Features` provide adaptive authentication and compromised credential monitoring. When suspicious sign-in attempts or brute-force password attacks are detected, Cognito can challenge the user for additional verification or temporarily block the account.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html",
    tags: ["Cognito", "Advanced Security", "Adaptive Authentication"]
  },
  {
    id: "aws-dva-146",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild buildspec.yml Phases Architecture",
    scenario: "A developer is writing a `buildspec.yml` file to compile a Java application, run unit tests, and prepare deployment artifacts on AWS CodeBuild.",
    question: "In which buildspec phase should the developer install runtime tools and package managers?",
    options: [
      { id: 'A', text: "The install phase" },
      { id: 'B', text: "The pre_build phase" },
      { id: 'C', text: "The build phase" },
      { id: 'D', text: "The post_build phase" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodeBuild executes build specifications across four distinct phases: `install` (installing build tools and runtimes like JDK or Python), `pre_build` (logging into ECR or installing dependencies), `build` (compiling code and running tests), and `post_build` (packaging artifacts and sending notifications).",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    tags: ["CodeBuild", "buildspec.yml", "CI/CD"]
  },
  {
    id: "aws-dva-147",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild Dependency Caching with Amazon S3",
    scenario: "A Node.js project on AWS CodeBuild takes 12 minutes to build, with 8 minutes spent repeatedly downloading `node_modules` on every run.",
    question: "How should the developer configure `buildspec.yml` to speed up build times?",
    options: [
      { id: 'A', text: "Configure the cache section in buildspec.yml to cache the node_modules directory in Amazon S3" },
      { id: 'B', text: "Disable unit tests during the build phase" },
      { id: 'C', text: "Store dependencies in an unversioned Git branch" },
      { id: 'D', text: "Hardcode node_modules inside the base Docker container image" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodeBuild supports caching project dependencies in Amazon S3 or a local Docker cache. Specifying directories in the `cache: paths:` block of `buildspec.yml` (e.g. `node_modules/**/*`) reuses dependencies across builds, slashing build durations.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["CodeBuild", "Caching", "Performance"]
  },
  {
    id: "aws-dva-148",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy appspec.yml Lifecycle Hooks for EC2",
    scenario: "A web application is deployed to EC2 instances using AWS CodeDeploy. The application must run a health check script to verify the web server is responding before CodeDeploy declares the deployment successful.",
    question: "Which lifecycle hook in `appspec.yml` is executed specifically to verify application health?",
    options: [
      { id: 'A', text: "AfterInstall" },
      { id: 'B', text: "ValidateService" },
      { id: 'C', text: "BeforeInstall" },
      { id: 'D', text: "ApplicationStart" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In CodeDeploy `appspec.yml` for EC2/on-premises deployments, the `ValidateService` hook is the final lifecycle event executed to verify that the application has started correctly and is responding to health checks. If the script fails, CodeDeploy triggers an automated rollback.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html",
    tags: ["CodeDeploy", "appspec.yml", "Lifecycle Hooks"]
  },
  {
    id: "aws-dva-149",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Lambda Deployment Lifecycle Hooks",
    scenario: "A development team deploys a new Lambda function version using AWS CodeDeploy with a Canary10Percent5Minutes configuration. The team needs to execute automated integration tests against the new version before user traffic shifts.",
    question: "Which CodeDeploy Lambda lifecycle hook executes test scripts prior to traffic shifting?",
    options: [
      { id: 'A', text: "BeforeAllowTraffic" },
      { id: 'B', text: "ValidateService" },
      { id: 'C', text: "BeforeInstall" },
      { id: 'D', text: "AfterAllowTraffic" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For AWS Lambda deployments, CodeDeploy defines two lifecycle hooks: `BeforeAllowTraffic` (executes a validation Lambda function before any production traffic is shifted to the new version) and `AfterAllowTraffic` (executes validation tests after all traffic has shifted).",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda",
    tags: ["CodeDeploy", "Lambda", "Hooks"]
  },
  {
    id: "aws-dva-150",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Deployment Configurations: Canary vs Linear",
    scenario: "A developer wants to release a new Lambda function by shifting 10% of traffic immediately, waiting 10 minutes to observe error rates, and then shifting the remaining 90% of traffic all at once.",
    question: "Which predefined CodeDeploy deployment configuration matches this strategy?",
    options: [
      { id: 'A', text: "Canary10Percent10Minutes" },
      { id: 'B', text: "Linear10PercentEvery1Minute" },
      { id: 'C', text: "AllAtOnce" },
      { id: 'D', text: "Rolling10PercentEvery10Minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Canary10Percent10Minutes` deployment configuration shifts 10% of traffic in the first increment, waits 10 minutes, and then shifts the remaining 90% in the second increment. In contrast, `Linear` configurations shift equal percentages at regular intervals (e.g. 10% every minute until 100%).",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["CodeDeploy", "Canary", "Configurations"]
  }
];

export default AWS_DVA_QUESTIONS_6;
