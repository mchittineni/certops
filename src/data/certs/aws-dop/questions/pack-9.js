export const AWS_DOP_QUESTIONS_9 = [
  {
    id: "aws-dop-201",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated S3 Cross-Region Replication Failure Alerts",
    scenario: "A compliance policy requires all objects uploaded to an S3 bucket in us-east-1 to be replicated to us-west-2 within 15 minutes. The compliance team needs real-time alerts whenever replication latency exceeds 15 minutes or replication operations fail.",
    question: "Which Amazon S3 feature provides replication monitoring and alerting?",
    options: [
      { id: 'A', text: "Write a Python script that compares S3 bucket inventory files daily using Athena" },
      { id: 'B', text: "Enable S3 Transfer Acceleration on both buckets" },
      { id: 'C', text: "Enable S3 Replication Time Control (S3 RTC) and configure CloudWatch alarms on the ReplicationLatency and OperationsFailedReplication metrics" },
      { id: 'D', text: "Configure S3 Object Lock with legal hold enabled" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Replication Time Control (S3 RTC) provides a 99.99% SLA to replicate objects within 15 minutes of upload. S3 RTC publishes granular CloudWatch metrics including 'ReplicationLatency' and 'OperationsFailedReplication', allowing teams to configure real-time CloudWatch alarms and receive immediate alerts on replication delays.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["S3", "Replication", "Compliance"]
  },
  {
    id: "aws-dop-202",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating Multi-Account Security Remediation with AWS Systems Manager Quick Setup",
    scenario: "A security team wants to ensure that all EC2 instances launched across 50 member accounts in an AWS Organization automatically have the Amazon CloudWatch Agent and AWS Systems Manager Agent installed and kept up-to-date without writing custom scripts.",
    question: "Which native AWS capability configures this across an entire AWS Organization?",
    options: [
      { id: 'A', text: "A manual bash script executed via SSH on each instance" },
      { id: 'B', text: "An AWS CloudFormation template applied manually in each member account console" },
      { id: 'C', text: "An AWS Organizations SCP denying instance launches without tags" },
      { id: 'D', text: "AWS Systems Manager Quick Setup deployed at the AWS Organizations management level targeting all member accounts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Quick Setup supports deployment across an entire AWS Organization or specific OUs. With a few clicks, administrators can configure automated agent installation, periodic SSM Agent updates, and baseline host configuration across all instances in all member accounts simultaneously.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "QuickSetup", "Organizations"]
  },
  {
    id: "aws-dop-203",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Step Functions for Long-Running Incident Remediation Workflows",
    scenario: "A disaster recovery runbook requires executing a sequence of steps: stopping non-critical EC2 instances, taking a snapshot of a database, waiting 15 minutes for the snapshot to complete, launching a pilot light infrastructure stack, running health check scripts, and waiting for manual human sign-off before routing DNS. The entire workflow can take up to 4 hours.",
    question: "Which AWS service is best suited to orchestrate this long-running, multi-step incident remediation workflow?",
    options: [
      { id: 'A', text: "AWS Lambda with a 15-minute execution limit" },
      { id: 'B', text: "Amazon SQS with message delay timers" },
      { id: 'C', text: "Amazon EventBridge rules with cron expressions" },
      { id: 'D', text: "AWS Step Functions Standard Workflows" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Step Functions Standard Workflows can run for up to one year. They provide native state machine coordination, error handling, retries, wait states (waiting for snapshots or baking periods), and task tokens for human approval workflows, making them ideal for complex, long-running disaster recovery and incident response automation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["StepFunctions", "DisasterRecovery", "Automation"]
  },
  {
    id: "aws-dop-204",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating DynamoDB Global Tables Disaster Recovery Failover",
    scenario: "An application uses Amazon DynamoDB Global Tables replicated between us-east-1 and eu-west-1. If an entire AWS Region experiences a service degradation, the application routing layer must seamlessly direct database read and write requests to the healthy region without data divergence.",
    question: "How do DynamoDB Global Tables handle multi-region replication and conflict resolution?",
    options: [
      { id: 'A', text: "DynamoDB Global Tables provide active-active multi-region replication with automatic 'last-writer-wins' conflict resolution; applications simply redirect requests to the healthy regional DynamoDB endpoint" },
      { id: 'B', text: "Applications must execute a manual failover command in the DynamoDB console to promote the replica table" },
      { id: 'C', text: "Write operations are blocked during a regional outage until an administrator restores a backup" },
      { id: 'D', text: "DynamoDB Global Tables require an external Redis cluster to synchronize distributed transaction locks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon DynamoDB Global Tables are fully managed, multi-region, active-active databases. Writes made in any replica region are automatically propagated to other regions within seconds using 'last-writer-wins' conflict resolution based on timestamp. If a region fails, client applications simply point their database client SDK to the healthy region's endpoint with zero downtime or failover commands.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["DynamoDB", "GlobalTables", "HighAvailability"]
  },
  {
    id: "aws-dop-205",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Configuring Systems Manager OpsCenter for Centralized Incident Tracking",
    scenario: "An enterprise operations center needs a centralized operational console to aggregate, investigate, and remediate operational issues (OpsItems) generated by Amazon CloudWatch Alarms, AWS Config rules, and Amazon GuardDuty findings across all business units.",
    question: "Which AWS Systems Manager capability provides this operational issue dashboard?",
    options: [
      { id: 'A', text: "AWS Systems Manager OpsCenter" },
      { id: 'B', text: "AWS Systems Manager Maintenance Windows" },
      { id: 'C', text: "AWS Systems Manager State Manager" },
      { id: 'D', text: "AWS Systems Manager Parameter Store" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager OpsCenter provides a central location where operations engineers and SREs view, investigate, and resolve operational issues (OpsItems). OpsCenter aggregates events from CloudWatch, AWS Config, and Security Hub, displays contextual resource metadata and relationships, and provides one-click execution of relevant SSM Automation runbooks.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "OpsCenter", "Operations"]
  },
  {
    id: "aws-dop-206",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating EBS Snapshot Lifecycle with Amazon Data Lifecycle Manager (DLM)",
    scenario: "A company requires automated daily backups of 200 Amazon EBS volumes attached to production instances. Snapshots must be taken at 01:00 UTC, retained for 14 days, and copied to a secondary AWS Region for disaster recovery, with older snapshots pruned automatically.",
    question: "Which native AWS feature automates this backup and retention lifecycle without writing custom scripts?",
    options: [
      { id: 'A', text: "AWS CloudFormation custom resources that recreate volumes daily" },
      { id: 'B', text: "An AWS Lambda function triggered by an EventBridge scheduled rule running a custom snapshot script" },
      { id: 'C', text: "Amazon Data Lifecycle Manager (Amazon DLM) lifecycle policies targeting volumes by resource tags" },
      { id: 'D', text: "A scheduled cron job on an EC2 instance that executes the ec2:CreateSnapshot API" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Data Lifecycle Manager (Amazon DLM) automates the creation, retention, and deletion of Amazon EBS snapshots and EBS-backed AMIs. By defining a DLM lifecycle policy that targets volumes by resource tags (e.g., 'Backup=True'), DLM handles scheduled snapshot generation, retention pruning, and cross-region snapshot copying automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["DLM", "EBS", "DisasterRecovery"]
  },
  {
    id: "aws-dop-207",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Investigating Operational Events with AWS CloudTrail Insights",
    scenario: "An operations team notices an unusual surge in AWS API call volume that causes API rate-limiting and service degradation across the account. The team needs to immediately identify which IAM principal, IP address, and API call experienced the anomaly without manually scanning millions of raw CloudTrail events.",
    question: "Which CloudTrail feature automatically detects and alerts on anomalous API activity?",
    options: [
      { id: 'A', text: "AWS CloudTrail Event History with standard filters" },
      { id: 'B', text: "AWS CloudTrail Insights" },
      { id: 'C', text: "AWS Trusted Advisor Service Limits check" },
      { id: 'D', text: "Amazon Macie data discovery" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudTrail Insights continuously analyzes CloudTrail management events to establish a baseline of normal API activity. When an anomaly occurs (such as an unusual spike in call volume or error rates), CloudTrail Insights generates an Insight event that pinpoints the exact API name, IAM identity, and timeframe responsible for the anomaly.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudTrail", "Insights", "Troubleshooting"]
  },
  {
    id: "aws-dop-208",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating Canary Rollbacks with AWS CodeDeploy and CloudWatch Alarms",
    scenario: "A deployment pipeline uses AWS CodeDeploy to update a mission-critical serverless application on AWS Lambda using the 'LambdaCanary10Percent5Minutes' configuration. During the first 5 minutes of traffic shifting, the Lambda function's error rate spikes due to an unhandled exception.",
    question: "How does CodeDeploy automatically protect production traffic from the buggy release?",
    options: [
      { id: 'A', text: "CodeDeploy monitors the CloudWatch alarm configured on the deployment group; when the alarm triggers, CodeDeploy immediately aborts the deployment, shifts 100% of traffic back to the previous Lambda version, and marks the deployment as failed" },
      { id: 'B', text: "CodeDeploy retries the deployment 3 times before terminating the Lambda function" },
      { id: 'C', text: "API Gateway returns HTTP 503 until a developer pushes a hotfix to CodeCommit" },
      { id: 'D', text: "The engineer must manually click 'Stop and roll back deployment' in the CodeDeploy console" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodeDeploy natively integrates with Amazon CloudWatch alarms for automated deployment rollbacks. If any configured alarm triggers during the canary traffic shift or baking period, CodeDeploy immediately halts the rollout, shifts all traffic back to the original stable version without human intervention, and prevents customer-facing outage expansion.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CodeDeploy", "Rollback", "Lambda"]
  },
  {
    id: "aws-dop-209",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS Key Policies vs. IAM Policies",
    scenario: "A DevOps engineer creates a customer managed key (CMK) in AWS KMS to encrypt sensitive pipeline artifacts. An IAM role in the same account has an attached IAM policy granting kms:* permissions, but the role receives an AccessDeniedException when attempting to use the key.",
    question: "What is the cause of this permission failure?",
    options: [
      { id: 'A', text: "KMS keys cannot be accessed by IAM roles within the same AWS account" },
      { id: 'B', text: "The IAM role must be assigned an Elastic IP address to authenticate with KMS" },
      { id: 'C', text: "The KMS key policy does not contain a statement delegating access to the account root or specifically authorizing the IAM role" },
      { id: 'D', text: "KMS Customer Managed Keys only support symmetrical encryption via AWS CLI root credentials" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In AWS KMS, key policies are the primary access control mechanism. An IAM policy alone is not sufficient to access a KMS key; the KMS key policy must either explicitly grant access to the IAM principal OR include a statement enabling the AWS account root (arn:aws:iam::account-id:root) to delegate permissions via IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS", "Key Policies", "IAM", "Security"]
  },
  {
    id: "aws-dop-210",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for Amazon RDS",
    scenario: "An enterprise database security standard mandates that database administrator passwords for Amazon RDS PostgreSQL instances must be automatically rotated every 30 days without manual intervention.",
    question: "Which architecture implements this automated password rotation?",
    options: [
      { id: 'A', text: "Write an on-premises batch script that changes passwords and emails credentials to developers" },
      { id: 'B', text: "Store passwords in clear text in an S3 bucket with versioning and object lock enabled" },
      { id: 'C', text: "Configure AWS Secrets Manager with automatic rotation enabled, using the built-in AWS Lambda rotation function template within the database VPC" },
      { id: 'D', text: "Rotate passwords manually during quarterly maintenance downtime windows" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Secrets Manager provides native automated credential rotation for Amazon RDS. Enabling rotation creates a managed AWS Lambda function deployed inside the database's VPC that connects to the database, alters the user password, and updates the secret in Secrets Manager seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secrets Manager", "RDS", "Rotation", "Security"]
  },
  {
    id: "aws-dop-211",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing Region Restrictions Organization-Wide with Service Control Policies (SCPs)",
    scenario: "A European enterprise strictly mandates that no resources (EC2, S3, RDS, DynamoDB) may be provisioned outside of the eu-west-1 and eu-central-1 regions across any of its 75 member accounts in AWS Organizations. Certain global services (IAM, Route 53, CloudFront, AWS Support) must continue functioning without disruption.",
    question: "Which Service Control Policy (SCP) structure enforces this geographic boundary without breaking global services?",
    options: [
      { id: 'A', text: "An AWS Config rule that automatically terminates instances launched outside of the approved European regions" },
      { id: 'B', text: "An SCP with an explicit 'Allow' statement that lists only 'eu-west-1' and 'eu-central-1' in the Action element" },
      { id: 'C', text: "An SCP with an explicit 'Deny' on '*' with a StringNotEquals condition on 'aws:RequestedRegion' for 'eu-west-1' and 'eu-central-1', combined with a StringNotLike condition excluding services like 'iam:*', 'route53:*', 'cloudfront:*', and 'support:*'" },
      { id: 'D', text: "An IAM permission boundary applied to individual IAM users in member accounts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To enforce regional boundaries across an AWS Organization, an SCP uses a 'Deny' effect on all actions ('*') when 'aws:RequestedRegion' is not in the approved regions list ('eu-west-1', 'eu-central-1'). Crucially, global services (IAM, CloudFront, Route 53, AWS Support) make API calls to endpoints like us-east-1; therefore, the SCP must explicitly exclude these global service prefixes from the Deny statement via 'StringNotLike' or 'NotAction' conditions to avoid locking administrators out of identity management.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Organizations", "SCP", "Compliance"]
  },
  {
    id: "aws-dop-212",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Multi-Account Secret Rotation with AWS Secrets Manager and Lambda",
    scenario: "An enterprise multi-account environment stores Amazon Aurora database administrator passwords in AWS Secrets Manager in each application account. Corporate policy mandates automatic password rotation every 30 days. The database instances reside in private subnets with no internet access.",
    question: "Which network and security architecture enables Secrets Manager to rotate the database passwords automatically?",
    options: [
      { id: 'A', text: "Deploy the rotation Lambda function in the same VPC and private subnets as the Aurora database, configure a Secrets Manager VPC Interface Endpoint (PrivateLink) with appropriate security group rules, and configure Secrets Manager automatic rotation" },
      { id: 'B', text: "Write a Python script on an on-premises server that connects over public internet to change the password" },
      { id: 'C', text: "Attach an Internet Gateway to the database private subnets to allow the rotation Lambda to reach AWS endpoints" },
      { id: 'D', text: "Store database credentials in plaintext in an Amazon S3 bucket with versioning enabled" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When an AWS Secrets Manager rotation Lambda function runs inside a VPC to access private RDS/Aurora databases, it needs connectivity back to the AWS Secrets Manager service endpoint to retrieve the pending secret and complete rotation. Creating an AWS PrivateLink VPC Interface Endpoint for Secrets Manager inside the VPC allows the rotation Lambda function to communicate privately with Secrets Manager without requiring public internet access or NAT gateways.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SecretsManager", "VPC", "Security"]
  },
  {
    id: "aws-dop-213",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Delegating IAM Role Creation with IAM Permission Boundaries",
    scenario: "A DevOps lead wants to delegate permissions to development teams so they can independently create IAM roles for their AWS Lambda functions and EC2 instances. However, developers must not be able to escalate their own privileges by granting administrator permissions to these roles.",
    question: "Which IAM mechanism restricts the maximum permissions developers can assign to newly created roles?",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to developer identities requiring that any 'iam:CreateRole' or 'iam:PutRolePolicy' call must specify the same permission boundary ARN" },
      { id: 'B', text: "Configure an AWS Config rule that triggers an alert when a role with AdministratorAccess is created" },
      { id: 'C', text: "Use Service Control Policies (SCPs) to deny IAM role creation across all member accounts" },
      { id: 'D', text: "Grant developers IAM ReadOnlyAccess and require support tickets for all role requests" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM Permission Boundaries set the maximum permissions an IAM entity (user or role) can possess. By attaching a policy that allows developers to create roles only when those roles include an explicit permission boundary (using the 'iam:PermissionsBoundary' condition key), developers can create roles freely, but the roles can never exceed the permissions defined in the boundary policy, effectively preventing privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "PermissionBoundaries", "Governance"]
  },
  {
    id: "aws-dop-214",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating Container Vulnerability Scanning in Amazon ECR",
    scenario: "A DevOps pipeline pushes container images to Amazon ECR. The security team mandates that every container image pushed to ECR must be scanned for operating system and application language package vulnerabilities immediately, with continuous daily rescans as new CVEs are published.",
    question: "Which Amazon ECR configuration fulfills continuous scanning with the least operational overhead?",
    options: [
      { id: 'A', text: "Enable Amazon ECR Enhanced Scanning powered by Amazon Inspector, configured with continuous scanning on repositories" },
      { id: 'B', text: "Run an open-source scanner in the local Docker daemon on developer laptops before pushing" },
      { id: 'C', text: "Deploy an EC2 instance running a vulnerability scanner that pulls images from ECR hourly" },
      { id: 'D', text: "Enable ECR Basic Scanning on push and run a daily cron job that triggers scans via the AWS CLI" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon ECR Enhanced Scanning is powered by Amazon Inspector. It provides automated, continuous vulnerability scanning for container images, evaluating both operating system packages and application programming language dependencies. It automatically scans images upon push and continuously re-evaluates images as new vulnerabilities (CVEs) are discovered, publishing findings directly to AWS Security Hub.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["ECR", "AmazonInspector", "ContainerSecurity"]
  },
  {
    id: "aws-dop-215",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Cross-Account KMS Key Access for Encrypted S3 Bucket Sharing",
    scenario: "Account A contains an Amazon S3 bucket encrypted with an AWS KMS Customer Managed Key (CMK). A CI/CD deployment pipeline running in Account B needs to read deployment artifacts from the S3 bucket in Account A.",
    question: "Which combination of policies must be configured to grant Account B access to the encrypted data?",
    options: [
      { id: 'A', text: "The KMS Key Policy in Account A must grant 'kms:Decrypt' to Account B (or the pipeline role ARN), the S3 Bucket Policy in Account A must grant 's3:GetObject' to Account B, and the IAM Role in Account B must have permissions for both 's3:GetObject' and 'kms:Decrypt' targeting the Key ARN in Account A" },
      { id: 'B', text: "Disable encryption on the S3 bucket in Account A" },
      { id: 'C', text: "Create an IAM user in Account A and hardcode its static access keys in Account B" },
      { id: 'D', text: "Attach the AWS-managed 'aws/s3' KMS key policy to the Account B IAM role" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cross-account access to KMS-encrypted S3 objects requires three synchronized permissions: 1) The KMS Key Policy in Account A must explicitly allow Account B to perform 'kms:Decrypt'; 2) The S3 Bucket Policy in Account A must allow Account B 's3:GetObject'; 3) The IAM identity in Account B must possess IAM permissions allowing 's3:GetObject' on the bucket ARN and 'kms:Decrypt' on Account A's KMS key ARN.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["KMS", "S3", "CrossAccount"]
  },
  {
    id: "aws-dop-216",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Enforcing HTTPS Only and Secure TLS Ciphers on CloudFront and ALB",
    scenario: "A compliance audit requires that all web traffic to a public-facing e-commerce application must use HTTPS with TLS version 1.2 or higher. Insecure HTTP requests must be redirected to HTTPS, and insecure legacy cipher suites must be blocked.",
    question: "Which configuration combination on Amazon CloudFront and Application Load Balancer (ALB) enforces these requirements?",
    options: [
      { id: 'A', text: "Disable port 80 in the VPC security group and configure a self-signed certificate on the EC2 instances" },
      { id: 'B', text: "Configure the CloudFront cache behavior with 'Viewer Protocol Policy: Redirect HTTP to HTTPS', set the CloudFront Security Policy to TLSv1.2_2021, and configure the ALB HTTPS listener with a modern predefined SSL Security Policy (such as ELBSecurityPolicy-TLS13-1-2-2021-06)" },
      { id: 'C', text: "Deploy an AWS WAF rule that blocks HTTP requests with a 403 status code" },
      { id: 'D', text: "Enable Route 53 DNSSEC on the domain hosted zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudFront enforces TLS policies at the edge. By configuring the Viewer Protocol Policy to 'Redirect HTTP to HTTPS' and setting the Minimum Protocol Version to 'TLSv1.2_2021' (or latest recommended security policy), CloudFront automatically redirects HTTP requests and rejects connections with outdated TLS versions or weak ciphers. On the origin ALB, applying a modern SSL policy (like ELBSecurityPolicy-TLS13-1-2) ensures end-to-end encryption compliance.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFront", "ALB", "TLS"]
  },
  {
    id: "aws-dop-217",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating Security Standard Compliance with AWS Security Hub",
    scenario: "An enterprise needs to evaluate all AWS accounts against the AWS Foundational Security Best Practices standard and CIS AWS Foundations Benchmark. Compliance reports must be generated weekly, and non-compliant findings must automatically trigger notification emails to account owners.",
    question: "Which AWS service provides centralized security posture management with automated compliance scoring?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor Cost Optimization dashboard" },
      { id: 'B', text: "AWS Security Hub with automated security standards enabled across all member accounts" },
      { id: 'C', text: "AWS Systems Manager Run Command executing OpenSCAP scripts" },
      { id: 'D', text: "Amazon CloudWatch Billing Alarms" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Security Hub provides a comprehensive view of security posture across AWS accounts. It automatically checks environments against industry standards and frameworks (such as AWS Foundational Security Best Practices and CIS AWS Foundations Benchmark). Security Hub aggregates findings in AWS Security Finding Format (ASFF) and can route non-compliant alerts via EventBridge to SNS for automated notifications.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SecurityHub", "Compliance", "CIS"]
  },
  {
    id: "aws-dop-218",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Attribute-Based Access Control (ABAC) for Multi-Tenant Development Teams",
    scenario: "A company has 20 development teams sharing a single AWS account. The company wants to implement an access control model where developers can only start, stop, or modify EC2 instances and Lambda functions that have a 'Project' tag matching the developer's own 'Project' tag, without needing IAM policy updates when new projects are created.",
    question: "Which IAM policy condition implements this Attribute-Based Access Control (ABAC) pattern?",
    options: [
      { id: 'A', text: "Use Service Control Policies with an explicit deny for all EC2 actions" },
      { id: 'B', text: "Create 20 separate IAM policies explicitly hardcoding the resource ARNs for each project" },
      { id: 'C', text: "Use the Condition 'StringEquals: { \"aws:ResourceTag/Project\": \"${aws:PrincipalTag/Project}\" }' in the IAM policy attached to the developer role" },
      { id: 'D', text: "Deploy an AWS Lambda function that checks tags every 5 minutes and terminates non-compliant instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Attribute-Based Access Control (ABAC) allows scaling permissions by comparing principal tags against resource tags. The condition 'StringEquals: { \"aws:ResourceTag/Project\": \"${aws:PrincipalTag/Project}\" }' grants access dynamically only when the resource's 'Project' tag exactly matches the requesting IAM principal's 'Project' tag, eliminating the need to update IAM policies as teams and projects grow.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "ABAC", "Governance"]
  },
  {
    id: "aws-dop-219",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated Remediation of Unencrypted Amazon EBS Volumes with AWS Config and SSM",
    scenario: "Corporate security policy mandates that all Amazon EBS volumes must be encrypted at rest. The security team needs an automated control that immediately detects any unencrypted volume and executes an AWS Systems Manager Automation runbook to remediate the non-compliance.",
    question: "Which configuration establishes this automated detection and remediation loop?",
    options: [
      { id: 'A', text: "Create an IAM policy denying the ec2:CreateVolume API action" },
      { id: 'B', text: "Deploy the AWS Config managed rule 'encrypted-volumes', configure an Automatic Remediation targeting an SSM Automation runbook that creates an encrypted copy and updates the instance attachment" },
      { id: 'C', text: "Schedule an AWS Lambda function to poll all EBS volumes once a week" },
      { id: 'D', text: "Deploy an AWS WAF rule targeting EBS API endpoints" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Config continuously records resource configurations and evaluates them against rules. When the 'encrypted-volumes' managed rule flags an unencrypted volume as NON_COMPLIANT, AWS Config's automated remediation feature triggers an AWS Systems Manager Automation document to perform remediation without manual operator intervention.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "EBS", "AutoRemediation"]
  },
  {
    id: "aws-dop-220",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Securing CI/CD Workflows with GitHub Actions and AWS IAM OpenID Connect (OIDC)",
    scenario: "A DevOps team uses GitHub Actions to deploy infrastructure and code to AWS. Previously, developers stored static AWS access keys (AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY) in GitHub repository secrets. The security director mandates eliminating all long-term static AWS credentials from external CI/CD platforms.",
    question: "Which modern security architecture replaces static credentials with temporary, short-lived tokens?",
    options: [
      { id: 'A', text: "Configure an IAM OpenID Connect (OIDC) identity provider for GitHub in AWS, and create an IAM role with a trust policy allowing GitHub Actions to assume the role using the sts:AssumeRoleWithWebIdentity action with repository-specific Subject (sub) conditions" },
      { id: 'B', text: "Generate temporary AWS credentials using AWS CloudShell and paste them into GitHub before each build" },
      { id: 'C', text: "Deploy an EC2 instance in a public subnet to act as a self-hosted GitHub Actions runner" },
      { id: 'D', text: "Rotate the static IAM access keys manually every 7 days in the GitHub secrets settings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring AWS IAM with an OpenID Connect (OIDC) identity provider for GitHub allows GitHub Actions workflows to receive short-lived AWS temporary credentials via 'sts:AssumeRoleWithWebIdentity'. The IAM role's trust policy validates the OIDC token claims (such as the repository name and branch via the 'sub' claim), completely eliminating the need to store long-term static AWS credentials in third-party CI/CD systems.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "OIDC", "GitHubActions"]
  },
  {
    id: "aws-dop-221",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automating AWS Certificate Manager (ACM) DNS Validation via Route 53",
    scenario: "A company manages hundreds of public SSL/TLS certificates across multiple domains using AWS Certificate Manager (ACM). The DevOps team needs to ensure all certificates renew automatically every year without human intervention, email confirmation delays, or expiring unnoticed.",
    question: "Which ACM validation method enables seamless, automated certificate renewal?",
    options: [
      { id: 'A', text: "Use DNS Validation and add the generated CNAME records to the domain's Amazon Route 53 hosted zone; ACM automatically validates and renews the certificates as long as the CNAME records remain in place" },
      { id: 'B', text: "Purchase certificates from a third-party CA and import them into ACM annually" },
      { id: 'C', text: "Use Email Validation and configure an automated email parsing Lambda function" },
      { id: 'D', text: "Write a script that calls the acm:RequestCertificate API every 90 days" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Certificate Manager provides two validation methods: DNS validation and Email validation. DNS validation is the recommended best practice because once the unique CNAME records are added to the DNS zone (e.g., in Route 53), ACM validates domain ownership automatically and continues to renew the certificates automatically every year with zero administrative action.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["ACM", "Route53", "TLS"]
  },
  {
    id: "aws-dop-222",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Protecting Web Endpoints against Layer 7 DDoS and SQL Injection with AWS WAF",
    scenario: "A public API on Amazon API Gateway experiences malicious SQL injection payloads and automated bot scraping that overwhelms backend services. The DevOps engineer needs to deploy a security layer that inspects incoming HTTP request bodies for SQL injection patterns, enforces rate-limiting per client IP, and blocks known malicious IPs.",
    question: "Which AWS WAF configuration implements these protections?",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution with an origin access control (OAC)" },
      { id: 'B', text: "Enable Amazon GuardDuty S3 Protection in the account" },
      { id: 'C', text: "Create an AWS WAF Web ACL associated with the API Gateway stage, adding the AWSManagedRulesSQLiRuleSet, the AWSManagedRulesAmazonIpReputationList, and a custom Rate-Based Rule with an action of Block" },
      { id: 'D', text: "Configure an EC2 security group allowing inbound traffic only from port 443" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS WAF protects web applications and APIs from common web exploits. By associating an AWS WAF Web ACL with API Gateway, teams can leverage AWS Managed Rules (such as AWSManagedRulesSQLiRuleSet for SQL injection defense and AWSManagedRulesAmazonIpReputationList for blocking known threat actors) alongside custom rate-based rules that block IP addresses exceeding request thresholds.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSWAF", "APIGateway", "Security"]
  },
  {
    id: "aws-dop-223",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Validating IAM Policies in CI/CD with IAM Access Analyzer Policy Validation",
    scenario: "An infrastructure team commits IAM policies written in JSON/YAML to a Git repository. To prevent syntax errors, overly permissive wildcards (e.g., Action: '*'), and security warnings from reaching production, the team wants to run automated policy validation checks in their CI/CD pipeline.",
    question: "Which AWS CLI command and service validates IAM policies against AWS best practices during CI/CD builds?",
    options: [
      { id: 'A', text: "Run 'aws iam get-account-summary' to check policy quota limits" },
      { id: 'B', text: "Execute 'aws cloudtrail lookup-events' to verify IAM API calls" },
      { id: 'C', text: "Run 'aws accessanalyzer validate-policy' in the CI build step to check policies for syntax errors, security warnings, and general recommendations" },
      { id: 'D', text: "Deploy the policies to a production account and check CloudWatch alarms" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS IAM Access Analyzer provides the 'validate-policy' API (and CLI command) which evaluates IAM policy documents against security best practices and grammar rules. It returns actionable findings categorized by severity (ERROR, SECURITY_WARNING, WARNING, SUGGESTION), making it ideal as a static analysis linting gate in CI/CD pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IAM", "AccessAnalyzer", "CI/CD"]
  },
  {
    id: "aws-dop-224",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Automated S3 Ransomware Protection with S3 Object Lock and Versioning",
    scenario: "A financial institution requires that historical regulatory compliance logs stored in Amazon S3 must be completely immutable for 7 years: no user, including account root or AWS administrators, can delete, overwrite, or alter the objects before the retention period expires.",
    question: "Which Amazon S3 storage configuration guarantees write-once-read-many (WORM) immutability?",
    options: [
      { id: 'A', text: "Enable S3 Server-Side Encryption with Customer-Provided Keys (SSE-C)" },
      { id: 'B', text: "Configure an S3 Bucket Policy with an explicit Deny on s3:DeleteObject" },
      { id: 'C', text: "Enable S3 Versioning and S3 Object Lock in Compliance Mode with a retention period of 7 years on the bucket" },
      { id: 'D', text: "Enable S3 Object Lock in Governance Mode with a retention period of 7 years" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Object Lock provides WORM (Write Once, Read Many) protection. In 'Compliance Mode', a protected object version cannot be overwritten or deleted by any user, including the root user in your AWS account, for the duration of the retention period. (In contrast, 'Governance mode' allows users with specific IAM permissions to bypass retention).",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["S3", "ObjectLock", "Compliance"]
  },
  {
    id: "aws-dop-225",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Detecting Compromised EKS Clusters with Amazon GuardDuty EKS Audit Log Monitoring",
    scenario: "A security operations center needs to detect malicious activity within an Amazon EKS cluster, such as attempts by unauthorized entities to deploy privileged pods, modify cluster RBAC roles, or communicate with known malicious command-and-control servers from inside a pod.",
    question: "Which native AWS security service provides threat detection for Kubernetes clusters without requiring host agent software?",
    options: [
      { id: 'A', text: "Configure Amazon Inspector on EC2 worker nodes" },
      { id: 'B', text: "Deploy an open-source Falco DaemonSet that writes logs to a local file" },
      { id: 'C', text: "Enable AWS Config managed rules for EC2 instances" },
      { id: 'D', text: "Enable Amazon GuardDuty with EKS Audit Log Monitoring and GuardDuty EKS Runtime Monitoring" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon GuardDuty provides specialized protection for Amazon EKS. GuardDuty EKS Audit Log Monitoring ingests and analyzes Kubernetes API audit logs directly from the EKS control plane (without requiring host agents), while GuardDuty EKS Runtime Monitoring uses a lightweight security agent to detect container-level runtime threats such as reverse shells and privilege escalations.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["GuardDuty", "EKS", "ThreatDetection"]
  }
];

export default AWS_DOP_QUESTIONS_9;
