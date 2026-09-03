export const AWS_DOP_QUESTIONS_10 = [
  {
    id: "aws-dop-226",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing Organization-Wide Tagging Policies with AWS Organizations Tag Policies",
    scenario: "A corporate finance team mandates that every taggable AWS resource created across 100 AWS member accounts must include specific standardized tags ('CostCenter', 'Environment', 'Owner') with validated casing and allowed values. Non-compliant tag values must be blocked at creation time.",
    question: "Which AWS Organizations governance capability enforces standardized tagging across accounts?",
    options: [
      { id: 'A', text: "Attach an AWS Organizations Tag Policy with enforcement enabled ('enforced_for') to the organization root or target OUs" },
      { id: 'B', text: "Deploy an AWS Lambda function in each account that runs a daily tagging audit" },
      { id: 'C', text: "Create an Amazon CloudWatch billing alarm that alerts on untagged resources" },
      { id: 'D', text: "Instruct engineers to follow a wiki guide when creating resources" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Organizations Tag Policies allow administrators to define tag keys and allowed values across an entire organization. When enforcement is enabled ('enforced_for' specific resource types), AWS Organizations prevents users from creating or modifying resources that do not adhere to the specified tag capitalization and value requirements.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Organizations", "TagPolicies", "Governance"]
  },
  {
    id: "aws-dop-227",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Preventing Public Exposure of Private S3 Buckets with S3 Block Public Access",
    scenario: "A company policy states that Amazon S3 buckets in account 'data-lake' must never be accessible to the public under any circumstance, overriding any current or future bucket policies, ACLs, or cross-account permissions.",
    question: "Which setting ensures that public access is blocked unconditionally across all buckets in the account?",
    options: [
      { id: 'A', text: "Enable Amazon S3 Block Public Access at the AWS Account level, enabling all four settings (BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy, RestrictPublicBuckets)" },
      { id: 'B', text: "Deploy an AWS WAF Web ACL on all S3 buckets" },
      { id: 'C', text: "Remove all IAM users from the AWS account" },
      { id: 'D', text: "Configure a VPC Endpoint for S3 and delete the VPC Internet Gateway" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Block Public Access can be applied at the AWS account level, applying to all existing and future buckets in that account. Enabling all four settings ensures that public ACLs are blocked and ignored, and bucket policies granting public access are rejected and restricted, providing a centralized security blanket that cannot be bypassed by bucket-level edits.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["S3", "BlockPublicAccess", "Security"]
  },
  {
    id: "aws-dop-228",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Real-Time Detection of Unused IAM Permissions with IAM Access Analyzer",
    scenario: "A security auditor requires that all production IAM roles and users be reviewed to identify permissions granted in policies that have not been used in the last 90 days, so that over-privileged policies can be right-sized according to least privilege.",
    question: "Which IAM Access Analyzer feature identifies unused roles, access keys, and policy actions?",
    options: [
      { id: 'A', text: "IAM Access Analyzer Unused Access Analyzer" },
      { id: 'B', text: "Amazon GuardDuty IAM findings" },
      { id: 'C', text: "IAM Access Analyzer External Access Analyzer" },
      { id: 'D', text: "AWS Trusted Advisor Security Checks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM Access Analyzer provides two types of analyzers: External Access Analyzers (which identify resources shared outside your trust zone) and Unused Access Analyzers (which continuously monitor and flag unused IAM roles, unused IAM access keys, and unused policy permissions based on CloudTrail last-accessed data), enabling automated least-privilege policy generation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "AccessAnalyzer", "LeastPrivilege"]
  },
  {
    id: "aws-dop-229",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Cross-Account Centralized Security Logging with AWS CloudTrail Organization Trail",
    scenario: "A company needs an audit log of all management and data events across 200 member accounts in an AWS Organization. The logs must be aggregated into an Amazon S3 bucket in a dedicated Log Archive account, encrypted with a KMS key, and protected so member account administrators cannot disable or tamper with the trail.",
    question: "Which CloudTrail deployment architecture fulfills these enterprise auditing requirements?",
    options: [
      { id: 'A', text: "Create an AWS Organizations Organization Trail in the management (or delegated administrator) account that logs to an S3 bucket in the Log Archive account encrypted with a Customer Managed Key (CMK)" },
      { id: 'B', text: "Configure an EC2 syslog daemon to pull CloudTrail logs via the AWS API" },
      { id: 'C', text: "Create separate regional trails manually in each member account console" },
      { id: 'D', text: "Export CloudWatch Logs to an S3 bucket in each account weekly" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An AWS CloudTrail Organization Trail is created in the management account or delegated administrator account. It automatically logs events for all member accounts in the organization. Member accounts cannot modify, disable, or delete the organizational trail. The logs are stored in a centralized, secure S3 bucket in the dedicated Log Archive account, encrypted with an organizational KMS key.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudTrail", "Organizations", "Auditing"]
  },
  {
    id: "aws-dop-230",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Remediation of Open Security Groups with AWS Config and Systems Manager",
    scenario: "A security compliance rule requires that security groups must not permit inbound traffic on port 22 (SSH) from 0.0.0.0/0. When an engineer accidentally adds such a rule, the violation must be detected and revoked automatically within 2 minutes.",
    question: "Which combination of AWS Config rule and remediation action achieves this?",
    options: [
      { id: 'A', text: "Deploy an Amazon Inspector assessment targeting EC2 instances" },
      { id: 'B', text: "Deploy the AWS Config managed rule 'restricted-ssh' with an automatic remediation action that executes the SSM Automation document 'AWS-DisablePublicAccessForSecurityGroup'" },
      { id: 'C', text: "Create an AWS WAF rule that filters port 22 traffic" },
      { id: 'D', text: "Configure an IAM policy that denies the ec2:CreateSecurityGroup action" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS Config managed rule 'restricted-ssh' checks whether security groups allow unrestricted incoming SSH traffic (0.0.0.0/0). Setting up automated remediation with the pre-built AWS Systems Manager Automation document 'AWS-DisablePublicAccessForSecurityGroup' ensures that as soon as the rule detects the violation, the non-compliant rule is automatically removed.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "SecurityGroups", "AutoRemediation"]
  },
  {
    id: "aws-dop-231",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Securing API Gateway with Mutual TLS (mTLS) Authentication",
    scenario: "A business-to-business (B2B) REST API hosted on Amazon API Gateway requires mutual TLS (mTLS) authentication to ensure that only authorized partner clients presenting a valid certificate signed by a corporate Private Certificate Authority (CA) can establish a connection.",
    question: "How should the DevOps engineer configure API Gateway for mutual TLS?",
    options: [
      { id: 'A', text: "Use Amazon Cognito user pools with SMS multi-factor authentication" },
      { id: 'B', text: "Deploy an Application Load Balancer in front of API Gateway with basic authentication headers" },
      { id: 'C', text: "Create a custom domain name in API Gateway, enable Mutual TLS, and upload the truststore PEM file (containing CA root and intermediate certificates) to an Amazon S3 bucket referenced by API Gateway" },
      { id: 'D', text: "Configure an API Gateway Lambda authorizer to inspect the client IP address" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon API Gateway supports mutual TLS (mTLS) for custom domain names. To enable mTLS, you configure a custom domain name with mutual TLS enabled and provide an S3 URI pointing to a truststore PEM file that contains the public certificates of the trusted root or intermediate certificate authorities. API Gateway verifies the client certificate during the TLS handshake before routing the request.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["APIGateway", "mTLS", "Security"]
  },
  {
    id: "aws-dop-232",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Sensitive Data Discovery with Amazon Macie",
    scenario: "An enterprise data lake contains thousands of Amazon S3 buckets storing petabytes of raw customer data. The data governance officer needs an automated discovery tool to scan the S3 buckets, classify sensitive personal data (credit card numbers, social security numbers, medical records), and alert security teams to unencrypted or publicly accessible buckets containing PII.",
    question: "Which AWS service provides automated sensitive data discovery and classification in S3?",
    options: [
      { id: 'A', text: "Amazon GuardDuty" },
      { id: 'B', text: "Amazon Macie" },
      { id: 'C', text: "AWS Glue DataBrew" },
      { id: 'D', text: "Amazon Inspector" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data (PII, financial data, credentials) stored in Amazon S3. Macie generates detailed findings and can trigger automated remediation via EventBridge.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AmazonMacie", "S3", "DataPrivacy"]
  },
  {
    id: "aws-dop-233",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Securing Lambda Container Images with ECR KMS Encryption and IAM",
    scenario: "A financial microservices team packages AWS Lambda functions as container images stored in Amazon ECR. Corporate policy dictates that container images must be encrypted using a KMS Customer Managed Key (CMK), and Lambda must have permissions to pull images from the ECR repository.",
    question: "Which configuration allows AWS Lambda to deploy and execute container images from an encrypted ECR repository?",
    options: [
      { id: 'A', text: "Disable KMS encryption on the Amazon ECR repository" },
      { id: 'B', text: "Store the container image in a public Docker Hub repository" },
      { id: 'C', text: "Grant the Lambda function full AdministratorAccess IAM permissions" },
      { id: 'D', text: "Ensure the ECR repository is encrypted with a KMS CMK, configure the KMS key policy to grant 'kms:Decrypt' to the AWS Lambda service principal (or execution role), and configure an ECR repository policy granting 'ecr:BatchGetImage' and 'ecr:GetDownloadUrlForLayer' to Lambda" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When deploying Lambda functions from container images stored in Amazon ECR encrypted with a KMS Customer Managed Key (CMK), the KMS key policy must allow the Lambda service (or the role deploying the function) the 'kms:Decrypt' and 'kms:DescribeKey' permissions. Furthermore, the ECR repository policy must grant the Lambda service permissions to access the image layers.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Lambda", "ECR", "KMS"]
  },
  {
    id: "aws-dop-234",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Zero-Trust Private VPC Endpoint Communication with VPC Endpoint Policies",
    scenario: "A company uses an AWS VPC Gateway Endpoint for Amazon S3 to allow instances in private subnets to access S3. The security team discovers that an infected instance could exfiltrate data to an external personal S3 bucket using the gateway endpoint. The endpoint must allow access ONLY to the company's internal S3 buckets in account 111122223333.",
    question: "Which security control restricts data transfers through the VPC Gateway Endpoint?",
    options: [
      { id: 'A', text: "Enable S3 Transfer Acceleration on internal buckets" },
      { id: 'B', text: "Disable VPC Endpoint and route traffic through a NAT Gateway" },
      { id: 'C', text: "Attach a VPC Endpoint Policy to the S3 Gateway Endpoint that specifies an 'Allow' on 's3:*' only for resources matching 'arn:aws:s3:::company-*' or with a Condition on 'aws:ResourceAccount' equal to '111122223333'" },
      { id: 'D', text: "Modify the EC2 instance security group outbound rules" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "VPC Endpoint Policies are IAM resource policies attached directly to VPC endpoints (Gateway or Interface). By default, an endpoint policy allows full access to the target service. By replacing the default policy with a restrictive endpoint policy (e.g., restricting access to specific bucket ARNs or using the 'aws:ResourceAccount' condition key), the endpoint blocks any attempt to access external or unauthorized S3 buckets, preventing data exfiltration.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["VPC", "Endpoints", "ZeroTrust"]
  },
  {
    id: "aws-dop-235",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating Multi-Region KMS Key Replication for Disaster Recovery",
    scenario: "An enterprise runs an active-active application in us-east-1 and us-west-2. Encrypted data written to Amazon DynamoDB in us-east-1 is replicated to us-west-2 using Global Tables. The application in us-west-2 must be able to decrypt the replicated ciphertext using the same key ID without re-encrypting data across regions.",
    question: "Which AWS KMS feature allows the same encryption key material and Key ID to exist across multiple regions?",
    options: [
      { id: 'A', text: "AWS KMS Multi-Region Keys (MRKs)" },
      { id: 'B', text: "AWS CloudHSM classic clusters" },
      { id: 'C', text: "Exporting private keys to an S3 bucket with Cross-Region Replication" },
      { id: 'D', text: "Using default AWS-managed keys in each region" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS KMS Multi-Region Keys (MRKs) are AWS KMS keys in different AWS Regions that share the same key ID, key material, and key rotation status. A multi-region primary key created in one region can be replicated to other regions. This allows client applications to encrypt data in one region and decrypt it in another region without making cross-region KMS API calls or re-encrypting data.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["KMS", "MultiRegion", "Encryption"]
  },
  {
    id: "aws-dop-236",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing HTTPS Only on Amazon S3 with Bucket Policies",
    scenario: "A compliance standard requires that Amazon S3 buckets must reject any HTTP request that does not use TLS/HTTPS encryption in transit. If a client attempts an unencrypted HTTP GET or PUT, S3 must immediately deny the request.",
    question: "Which S3 bucket policy statement enforces encrypted transport?",
    options: [
      { id: 'A', text: "A policy statement with 'Effect: Allow' and a Condition 'StringEquals: { \"aws:Protocol\": \"https\" }'" },
      { id: 'B', text: "Enabling default SSE-KMS encryption on the bucket properties" },
      { id: 'C', text: "Configuring an Amazon CloudFront distribution with Origin Access Control" },
      { id: 'D', text: "A policy statement with 'Effect: Deny', 'Principal: *', 'Action: s3:*', and a Condition 'Bool: { \"aws:SecureTransport\": \"false\" }'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To enforce encryption in transit on Amazon S3, you add a bucket policy statement that explicitly denies all actions ('s3:*') when 'aws:SecureTransport' is false ('Bool: { \"aws:SecureTransport\": \"false\" }'). Because explicit denies override any allows, any unencrypted HTTP request sent to the bucket is rejected immediately with an HTTP 403 Forbidden response.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["S3", "Security", "Encryption"]
  },
  {
    id: "aws-dop-237",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Centrally Managing Firewall Rules across AWS Accounts with AWS Firewall Manager",
    scenario: "A large enterprise with 200 member accounts in an AWS Organization needs to centrally deploy and manage AWS WAF rules, VPC security group audits, and AWS Shield Advanced protections across all Application Load Balancers and CloudFront distributions.",
    question: "Which AWS service provides centralized, organization-wide firewall policy management?",
    options: [
      { id: 'A', text: "AWS Systems Manager Run Command" },
      { id: 'B', text: "Amazon GuardDuty" },
      { id: 'C', text: "AWS Trusted Advisor" },
      { id: 'D', text: "AWS Firewall Manager" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Firewall Manager simplifies administration of security rules across multiple accounts and resources in AWS Organizations. From a central administrator account, Firewall Manager deploys and enforces AWS WAF rules, AWS Shield Advanced protections, VPC security groups, and Amazon Route 53 Resolver DNS Firewall rules across new and existing resources automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["FirewallManager", "AWSWAF", "Organizations"]
  },
  {
    id: "aws-dop-238",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Secret Rotation Grace Period and Multi-Staged Testing",
    scenario: "A continuous delivery pipeline automatically rotates third-party SaaS API tokens stored in AWS Secrets Manager every 60 days. The database or external API requires that both the old token and the new token remain valid during a 1-hour grace period while running microservices drain existing requests and adopt the new token.",
    question: "How does AWS Secrets Manager support dual-secret validity during rotation?",
    options: [
      { id: 'A', text: "Secrets Manager pauses all application microservices for 1 hour during rotation" },
      { id: 'B', text: "Developers must manually update application config files in Git" },
      { id: 'C', text: "Secrets Manager uses staging labels: AWSPENDING (new secret being tested), AWSCURRENT (active secret), and AWSPREVIOUS (previous secret retained for rollback), allowing the rotation Lambda function to manage both tokens during rotation" },
      { id: 'D', text: "Secrets Manager creates two separate secrets with different ARNs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Secrets Manager uses version staging labels during rotation: 'AWSCURRENT' marks the active secret, 'AWSPENDING' marks the new version undergoing validation tests, and 'AWSPREVIOUS' preserves the previous secret. The custom rotation Lambda function can coordinate with backend services so that both the old and new secrets remain accepted until all clients transition.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SecretsManager", "Rotation", "Architecture"]
  },
  {
    id: "aws-dop-239",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Continuous Vulnerability Scanning of EC2 Instances with Amazon Inspector",
    scenario: "A healthcare enterprise requires continuous vulnerability management for its fleet of Amazon EC2 instances. Scans must identify unpatched operating system vulnerabilities and insecure software packages, updating findings automatically as software is installed or patched, without running heavy scheduled network scans.",
    question: "Which service provides continuous, event-driven vulnerability scanning for EC2?",
    options: [
      { id: 'A', text: "Amazon GuardDuty VPC Flow Log analysis" },
      { id: 'B', text: "AWS Config managed rules evaluated periodically" },
      { id: 'C', text: "Amazon Inspector (v2) using the AWS Systems Manager Agent (SSM Agent)" },
      { id: 'D', text: "AWS Security Hub CIS benchmark checks" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Inspector (v2) provides automated, continuous vulnerability management for Amazon EC2, AWS Lambda, and Amazon ECR. For EC2 instances, it leverages the AWS Systems Manager (SSM) Agent already installed on instances, continuously evaluating installed software against CVE databases without requiring scheduled scan windows or external network probes.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AmazonInspector", "VulnerabilityScanning", "EC2"]
  },
  {
    id: "aws-dop-240",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Preventing Accidental AWS KMS Key Deletion",
    scenario: "A security engineer attempts to delete an AWS KMS Customer Managed Key (CMK) that encrypts the primary corporate database. The company needs safeguards to ensure that no KMS key can be deleted immediately by any single administrator.",
    question: "How does AWS KMS enforce protection against immediate key destruction?",
    options: [
      { id: 'A', text: "AWS KMS enforces a mandatory waiting period of 7 to 30 days for any key deletion request (ScheduleKeyDeletion), during which the key enters the PendingDeletion state and can be cancelled" },
      { id: 'B', text: "KMS keys can be deleted immediately if the administrator passes the --force flag in the AWS CLI" },
      { id: 'C', text: "KMS requires physical authorization via an on-premises HSM smart card" },
      { id: 'D', text: "KMS keys are automatically recreated by CloudFormation if deleted" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS KMS strictly prohibits the immediate deletion of customer managed keys. When an administrator calls 'ScheduleKeyDeletion', KMS enforces a mandatory waiting period between 7 and 30 days (default is 30 days). The key enters the 'PendingDeletion' state, allowing administrators to detect the pending deletion via alarms and cancel it using 'CancelKeyDeletion' before permanent data loss occurs.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["KMS", "DataProtection", "Governance"]
  },
  {
    id: "aws-dop-241",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing IMDSv2 across All EC2 Instances to Prevent SSRF Vulnerabilities",
    scenario: "A security audit identifies that several legacy Amazon EC2 instances still allow the use of Instance Metadata Service Version 1 (IMDSv1), which is vulnerable to Server-Side Request Forgery (SSRF) attacks. The security architect mandates that all existing and future EC2 instances must require IMDSv2 (token-based metadata requests).",
    question: "Which combination of controls enforces IMDSv2 across the environment?",
    options: [
      { id: 'A', text: "Disable the EC2 Instance Metadata Service entirely on all instances" },
      { id: 'B', text: "Apply an IAM Service Control Policy (SCP) denying 'ec2:RunInstances' unless 'ec2:MetadataHttpTokens' is set to 'required', and update existing instances using the modify-instance-metadata-options CLI command with HttpTokens set to required" },
      { id: 'C', text: "Block port 80 outbound in all VPC security groups" },
      { id: 'D', text: "Deploy an AWS WAF rule that blocks HTTP requests to 169.254.169.254" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforcing IMDSv2 prevents SSRF vulnerabilities because IMDSv2 requires a session token via an HTTP PUT request with a custom header ('X-aws-ec2-metadata-token'). To enforce IMDSv2: 1) Update existing instances via 'modify-instance-metadata-options --http-tokens required'; 2) Enforce an SCP or IAM policy denying 'ec2:RunInstances' unless the request specifies 'ec2:MetadataHttpTokens: required'.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EC2", "IMDSv2", "Security"]
  },
  {
    id: "aws-dop-242",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Auditing Administrative Actions with CloudTrail Lake SQL Queries",
    scenario: "A forensic investigator needs to search 2 years of audit logs across 50 AWS accounts to identify all IAM role assumptions and policy changes performed by a terminated contractor. Standard CloudTrail Event History only retains 90 days of management events.",
    question: "Which AWS CloudTrail feature enables multi-year, multi-account SQL query investigations without maintaining custom Big Data pipelines?",
    options: [
      { id: 'A', text: "AWS CloudTrail Lake with an event data store configured to retain events for up to 7 years" },
      { id: 'B', text: "Amazon DynamoDB with automated TTL" },
      { id: 'C', text: "CloudTrail standard Event History in the console" },
      { id: 'D', text: "CloudWatch Logs Insights with default retention" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CloudTrail Lake is a managed data lake for CloudTrail audit events. It allows organizations to aggregate and immutably store management and data events across multiple accounts and regions with a configurable retention period of up to 7 years. Investigators can run complex ANSI SQL queries directly in the CloudTrail Lake console or via the AWS CLI without provisioning Athena, Glue, or S3 pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudTrail", "CloudTrailLake", "Forensics"]
  },
  {
    id: "aws-dop-243",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Isolating Multi-Tenant S3 Data with Dynamic IAM Session Policies",
    scenario: "A SaaS application serves thousands of corporate tenants from a shared backend compute fleet. The application generates temporary AWS credentials for workers processing tenant jobs. The security architect must guarantee that a worker thread processing Tenant A's job can only access 's3://shared-bucket/tenant-a/*', even if the worker's base IAM role allows broader S3 access.",
    question: "Which STS feature restricts the effective permissions of an assumed role dynamically at runtime?",
    options: [
      { id: 'A', text: "Create thousands of distinct IAM roles, one for each tenant" },
      { id: 'B', text: "Modify the S3 bucket policy synchronously before each job execution" },
      { id: 'C', text: "Encrypt each tenant's folder with a different client-side password" },
      { id: 'D', text: "Pass an inline IAM Session Policy when calling STS AssumeRole (or AssumeRoleWithWebIdentity) that scopes down the session to only Tenant A's S3 path" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IAM Session Policies are inline policies passed as a parameter when an application assumes a role using AWS STS (e.g., 'AssumeRole', 'AssumeRoleWithWebIdentity'). The resulting session's permissions are the intersection of the role's identity-based policy and the session policy. This allows dynamic, runtime scope-down to specific tenant prefixes ('/tenant-a/*') without managing thousands of separate IAM roles.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "STS", "MultiTenant"]
  },
  {
    id: "aws-dop-244",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Centralizing AWS WAF Log Analysis with Kinesis Data Firehose",
    scenario: "An enterprise requires all AWS WAF access logs from multiple regional Application Load Balancers and CloudFront distributions to be centralized, partitioned by year/month/day, and stored in an Amazon S3 bucket for security analysis with Amazon Athena.",
    question: "How should the AWS WAF logging configuration be established?",
    options: [
      { id: 'A', text: "Write a Python script on an EC2 instance that queries the AWS WAF API every 5 minutes" },
      { id: 'B', text: "Configure AWS WAF to send logs to an Amazon Kinesis Data Firehose delivery stream named with the required 'aws-waf-logs-' prefix, pointing to the centralized Amazon S3 bucket with dynamic partitioning enabled" },
      { id: 'C', text: "Stream logs directly to Amazon DynamoDB using an EventBridge rule" },
      { id: 'D', text: "Download WAF logs manually from the CloudWatch Metrics console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS WAF supports streaming comprehensive access logs to Amazon Kinesis Data Firehose, Amazon CloudWatch Logs, or Amazon S3. When using Kinesis Data Firehose, the delivery stream name must begin with 'aws-waf-logs-'. Firehose delivers logs to Amazon S3 with built-in compression and dynamic partitioning, allowing security analysts to query logs efficiently with Amazon Athena.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSWAF", "Firehose", "S3"]
  },
  {
    id: "aws-dop-245",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating Golden AMI Distribution and Account Sharing with EC2 Image Builder",
    scenario: "A central security team builds hardened golden AMIs weekly using EC2 Image Builder. The hardened AMI must be shared automatically with 40 member accounts in an AWS Organization and copied to three AWS Regions, with launch permissions granted to member account IDs.",
    question: "Which EC2 Image Builder component automates multi-account and multi-region AMI distribution?",
    options: [
      { id: 'A', text: "An EC2 Image Builder Distribution Configuration specifying the target regions, target AWS account IDs (or AWS Organizations ARN), and AMI launch permissions" },
      { id: 'B', text: "An AWS Lambda function that copies snapshots manually using the ec2:CopySnapshot API" },
      { id: 'C', text: "An S3 bucket policy with public read access to raw VMDK files" },
      { id: 'D', text: "An AWS CloudFormation StackSet deployed to every account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In EC2 Image Builder, a 'Distribution Configuration' defines how and where newly built and tested AMIs are distributed. It allows specifying target AWS Regions, KMS encryption keys per region, and target AWS account IDs or an AWS Organization ARN to share launch permissions automatically upon successful test completion.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EC2ImageBuilder", "AMI", "Distribution"]
  },
  {
    id: "aws-dop-246",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Protecting Critical Production Workloads from DDoS with AWS Shield Advanced",
    scenario: "A multinational media company expects high-profile live streaming events with elevated risk of targeted Layer 3, Layer 4, and Layer 7 DDoS attacks. The company needs 24/7 direct access to the AWS Shield Response Team (SRT) to write custom WAF mitigation rules during active attacks, as well as cost protection against auto-scaling bill surges caused by DDoS attacks.",
    question: "Which AWS security offering provides these capabilities?",
    options: [
      { id: 'A', text: "AWS Network Firewall" },
      { id: 'B', text: "AWS Shield Advanced" },
      { id: 'C', text: "Amazon GuardDuty" },
      { id: 'D', text: "AWS Shield Standard" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Shield Standard is included automatically at no extra cost for all AWS customers (providing Layer 3/4 baseline protection). AWS Shield Advanced provides enhanced DDoS detection, financial DDoS cost protection (protecting against scaling spikes during attacks), 24/7 direct access to the AWS Shield Response Team (SRT) to write custom WAF rules during an attack, and included AWS WAF licenses.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSShield", "DDoS", "Security"]
  },
  {
    id: "aws-dop-247",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing Least Privilege on S3 with AWS IAM Access Analyzer",
    scenario: "A cloud security architect wants to ensure that no Amazon S3 bucket, SQS queue, or KMS key in the account is inadvertently shared with public internet access or with untrusted external AWS accounts.",
    question: "Which service continuously analyzes resource-based policies to identify external access grants?",
    options: [
      { id: 'A', text: "Amazon CloudWatch Synthetics" },
      { id: 'B', text: "AWS Trusted Advisor Performance check" },
      { id: 'C', text: "AWS IAM Access Analyzer (External Access Analyzer)" },
      { id: 'D', text: "AWS Service Catalog" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS IAM Access Analyzer External Access Analyzer continuously evaluates resource-based policies (for S3 buckets, KMS keys, SQS queues, IAM roles, and Secrets Manager secrets) using automated reasoning. It flags any policy that grants access to an external principal outside your defined zone of trust (account or organization), providing instant visibility into unintended public or cross-account access.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AccessAnalyzer", "IAM", "Governance"]
  },
  {
    id: "aws-dop-248",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Encrypting Amazon CloudWatch Logs with AWS KMS Customer Managed Keys",
    scenario: "A financial auditor discovers that application log groups in Amazon CloudWatch Logs are currently encrypted using default AWS-managed encryption. Regulatory standards mandate that all log data at rest must be encrypted using a customer-controlled KMS Customer Managed Key (CMK) with annual rotation.",
    question: "How can the DevOps engineer associate a customer-managed KMS key with a CloudWatch log group?",
    options: [
      { id: 'A', text: "CloudWatch Logs only supports AWS-managed encryption keys" },
      { id: 'B', text: "Re-create all log groups with SSE-S3 encryption enabled" },
      { id: 'C', text: "Deploy an EC2 instance to encrypt log files locally before sending to CloudWatch" },
      { id: 'D', text: "Associate the KMS Key ARN with the log group using the 'aws logs associate-kms-key' CLI command, ensuring the KMS key policy grants the regional CloudWatch Logs service principal permissions to generate data keys and decrypt" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon CloudWatch Logs allows encrypting log data using an AWS KMS Customer Managed Key (CMK). The association is established via the 'associate-kms-key' API/CLI. The KMS key policy must grant permissions to the regional CloudWatch Logs service principal ('logs.&lt;region&gt;.amazonaws.com') to perform 'kms:Encrypt*', 'kms:Decrypt*', 'kms:ReEncrypt*', 'kms:GenerateDataKey*', and 'kms:DescribeKey'.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "KMS", "Encryption"]
  },
  {
    id: "aws-dop-249",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Remediation of Non-Compliant IAM Passwords with AWS Config",
    scenario: "An enterprise password policy mandates that all IAM user passwords must be at least 14 characters long, require numbers and symbols, and expire every 90 days. An automated control must detect non-compliant account password policies and reconfigure them to the compliant standard.",
    question: "Which combination of AWS Config and Systems Manager enforces account password policies?",
    options: [
      { id: 'A', text: "Deploy the AWS Config managed rule 'iam-password-policy' with an automated remediation action executing the SSM Automation document 'AWS-UpdateAccountPasswordPolicy'" },
      { id: 'B', text: "Deploy an AWS Lambda function that deletes users without passwords" },
      { id: 'C', text: "Attach an IAM permission boundary to all IAM users" },
      { id: 'D', text: "Enable MFA on the AWS root user account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS Config managed rule 'iam-password-policy' verifies whether the account's IAM password policy meets specified complexity and expiration requirements. When non-compliant, AWS Config triggers the SSM Automation document 'AWS-UpdateAccountPasswordPolicy' to update the account password policy parameters automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "IAM", "Compliance"]
  },
  {
    id: "aws-dop-250",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating Secret Rotation with Multi-User Secrets Manager Pattern",
    scenario: "An Amazon RDS MySQL database requires zero downtime during secret rotation. When Secrets Manager rotates the master password, existing active database connections must not be abruptly terminated, and new connections must seamlessly transition to the new credentials.",
    question: "Which rotation strategy maintains zero connection drops during password rotation?",
    options: [
      { id: 'A', text: "Hardcode credentials in application memory and disable rotation" },
      { id: 'B', text: "Deploy an AWS WAF rule that buffers SQL requests during rotation" },
      { id: 'C', text: "Use the Secrets Manager 'Multi-User Rotation' strategy with two database users: one user rotates and updates its password in Secrets Manager while the alternate user services active client connections, swapping roles alternately on each rotation" },
      { id: 'D', text: "Use the Single-User Rotation strategy with a 10-minute database reboot" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS Secrets Manager 'Multi-User Rotation' strategy is designed for applications where credentials cannot be updated simultaneously on all clients. It uses two users (User A and User B) managed by a master credential. While the application connects using User A, Secrets Manager updates and rotates the password for User B. Secrets Manager then swaps the credentials, allowing seamless, zero-downtime rotation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SecretsManager", "Rotation", "HighAvailability"]
  }
];

export default AWS_DOP_QUESTIONS_10;
