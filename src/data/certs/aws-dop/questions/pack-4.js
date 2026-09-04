export const AWS_DOP_QUESTIONS_4 = [
  {
    id: "aws-dop-76",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Automating OS Baseline Hardening with EC2 Image Builder and Systems Manager",
    scenario: "A security policy requires all golden Amazon Machine Images (AMIs) to undergo automated CIS Benchmark Level 1 hardening and security testing before being approved and distributed to production AWS accounts. The build pipeline must run weekly and distribute the tested AMI to five AWS Regions.",
    question: "Which native AWS service provides an end-to-end automated solution for this workflow?",
    options: [
      { id: 'A', text: "An AWS CodeBuild job running a Packer script on a local Docker container that launches an EC2 instance via SSH" },
      { id: 'B', text: "An AWS Lambda function triggered by a weekly EventBridge rule that takes an EBS snapshot of a running bastion host" },
      { id: 'C', text: "AWS EC2 Image Builder configured with an image recipe, CIS benchmark build component, automated test components, and a distribution configuration targeting multiple regions" },
      { id: 'D', text: "An AWS Systems Manager State Manager association executing a bash script that writes an AMI directly to Amazon S3" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "EC2 Image Builder is a fully managed AWS service that automates the creation, management, and deployment of customized, secure, and up-to-date server images. It allows defining an image recipe (base OS + components such as CIS hardening), running automated validation tests against the newly built AMI, and distributing the validated image across multiple AWS Regions and accounts automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EC2ImageBuilder", "AMI", "Hardening"]
  },
  {
    id: "aws-dop-77",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Patching Linux EC2 Fleets by Tag using SSM Patch Baselines and Maintenance Windows",
    scenario: "An organization classifies its EC2 instances into Development, Staging, and Production environments using the 'Environment' resource tag. Security baselines require critical security updates to be installed within 2 days of release for Development and 7 days for Production. Production patching must occur strictly on Saturday between 02:00 and 04:00 UTC.",
    question: "How should the DevOps engineer configure Systems Manager to enforce these patching rules?",
    options: [
      { id: 'A', text: "Configure AWS Config rules with automated remediation documents that run yum update when instance uptime exceeds 7 days" },
      { id: 'B', text: "Run AWS Systems Manager Inventory across all instances and execute yum update manually via Session Manager during the weekend" },
      { id: 'C', text: "Write an AWS Lambda function that queries the AWS Security Bulletin RSS feed and reboots instances using the EC2 StopInstances API" },
      { id: 'D', text: "Create separate Patch Baselines with auto-approval delays (2 days vs 7 days), create SSM Maintenance Windows scheduled accordingly, and assign instance targets using tag-based filtering (Environment=Production)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Patch Manager uses Patch Baselines to define which patches are approved (e.g., operating system, severity level, and auto-approval delay in days). By defining distinct Patch Baselines with appropriate auto-approval windows for Development and Production, and scheduling SSM Maintenance Windows that target instances by tag ('Environment=Production') during the permitted maintenance window, patching is completely automated without operational risk.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "PatchManager", "Tags"]
  },
  {
    id: "aws-dop-78",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Macros for Global Template Transformations",
    scenario: "An enterprise wants to enforce a company-wide standard that automatically adds specific cost-center and compliance tags to every taggable AWS resource defined in any CloudFormation template submitted by developers, without requiring developers to write boilerplate tag blocks manually.",
    question: "Which CloudFormation capability allows pre-processing and injecting properties into templates during execution?",
    options: [
      { id: 'A', text: "A CloudFormation dynamic reference pointing to an Amazon DynamoDB table holding required tag definitions" },
      { id: 'B', text: "AWS CloudFormation StackSets with override parameters configured in the account administration settings" },
      { id: 'C', text: "An Amazon EventBridge rule that catches resource creation events and runs an SSM Automation runbook to add tags" },
      { id: 'D', text: "AWS CloudFormation Macros backed by an AWS Lambda function that parses the template JSON/YAML and injects the required tags before CloudFormation creates the change set" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFormation Macros enable custom template processing. When a developer includes the 'Transform: [MacroName]' declaration in a template, CloudFormation invokes an AWS Lambda function backing the macro. The Lambda function receives the raw template AST, processes or modifies the resource properties (such as injecting organizational tags into all taggable resources), and returns the transformed template back to CloudFormation for processing.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "Macros", "Governance"]
  },
  {
    id: "aws-dop-79",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Managing CloudFormation Stack Updates with UpdatePolicy for Auto Scaling Groups",
    scenario: "A high-traffic web application's Auto Scaling group is defined in CloudFormation. When the LaunchTemplate version is updated in CloudFormation, new instances must be launched in rolling batches of 25%, verified by the load balancer health checks, and old instances terminated only after new instances are healthy. If any batch fails health checks, the update must halt and roll back automatically.",
    question: "Which attribute should be configured on the AWS::AutoScaling::AutoScalingGroup resource?",
    options: [
      { id: 'A', text: "Configure an UpdatePolicy attribute with AutoScalingRollingUpdate specifying MaxBatchSize, MinInstancesInService, and WaitOnResourceSignals" },
      { id: 'B', text: "Configure an AWS::CloudFormation::WaitCondition resource that receives signals from the ALB target group" },
      { id: 'C', text: "Configure an UpdateReplacePolicy attribute set to Retain on the LaunchTemplate resource" },
      { id: 'D', text: "Configure a CreationPolicy attribute with ResourceSignal set to count 4 and a timeout of 10 minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'UpdatePolicy' attribute on an 'AWS::AutoScaling::AutoScalingGroup' controls how CloudFormation handles rolling updates when the launch configuration or launch template changes. By configuring 'AutoScalingRollingUpdate' with 'MaxBatchSize', 'MinInstancesInService' (to maintain minimum application capacity), and 'WaitOnResourceSignals: true' (combined with cfn-signal in user data or ALB health checks), CloudFormation safely performs zero-downtime rolling updates with automatic rollback on signal failure.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "AutoScaling", "RollingUpdate"]
  },
  {
    id: "aws-dop-80",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Protecting CloudFormation Stacks from Accidental Deletion with Stack Termination Protection",
    scenario: "A company has core production VPC and transit gateway stacks managed in CloudFormation. During maintenance, a junior engineer accidentally selects a core stack and initiates a stack deletion, causing network disruption. The DevOps manager requires an immediate safeguard to prevent any user or script from deleting production stacks via the console or CLI.",
    question: "Which setting should be enabled on the production CloudFormation stacks?",
    options: [
      { id: 'A', text: "Set the stack status to ROLLBACK_COMPLETE and lock the template in Amazon S3" },
      { id: 'B', text: "Configure DeletionPolicy: Retain on all individual resources in the template" },
      { id: 'C', text: "Attach an IAM permission boundary to all users that denies cloudformation:DescribeStacks" },
      { id: 'D', text: "Enable Termination Protection on the CloudFormation stack" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFormation Termination Protection prevents a stack from being accidentally deleted. If termination protection is enabled, any attempt to delete the stack (via the AWS Management Console, CLI, or API) immediately fails with an error. To delete the stack, an authorized user must explicitly disable termination protection first.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "Governance", "Security"]
  },
  {
    id: "aws-dop-81",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Inventory and AWS Config Integration for Software Auditing",
    scenario: "An enterprise audit requires listing all EC2 instances running vulnerable versions of OpenSSL or Apache Log4j across hundreds of AWS accounts. The data must be queryable using standard SQL in Amazon Athena, and non-compliant instances must be flagged automatically.",
    question: "Which architecture provides this centralized software inventory and query capability?",
    options: [
      { id: 'A', text: "Configure an AWS Lambda function triggered by instance reboot events to inspect the /opt directory via SSM Run Command" },
      { id: 'B', text: "Use Amazon CloudWatch Logs Insights to search for package manager stdout logs across all EC2 system logs" },
      { id: 'C', text: "Deploy an SSH bastion script that connects to each instance, runs rpm -qa, and appends output to a local CSV file" },
      { id: 'D', text: "Configure AWS Systems Manager Inventory on all managed instances, enable Resource Data Sync to an Amazon S3 bucket in a central account, and query the synchronized inventory data using Amazon Athena" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Inventory collects metadata from managed instances (installed applications, network configurations, OS details). By configuring 'Resource Data Sync', Systems Manager automatically aggregates inventory data from multiple accounts and regions into a centralized Amazon S3 bucket. Administrators can then query the entire enterprise software fleet using Amazon Athena and generate instant audit reports.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "Inventory", "Athena"]
  },
  {
    id: "aws-dop-82",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Refactoring without Resource Recreation (Resource Import)",
    scenario: "A large monolithic CloudFormation stack contains an Amazon RDS database and several microservices. The DevOps team wants to break the monolithic stack into smaller, independent stacks for each microservice. The Amazon RDS database must be moved into a dedicated 'database-stack' without being deleted, recreated, or experiencing downtime.",
    question: "How can the team migrate the existing live database into a new CloudFormation stack without downtime?",
    options: [
      { id: 'A', text: "Use AWS Database Migration Service (AWS DMS) to replicate the database to a newly created RDS instance in the new stack" },
      { id: 'B', text: "Execute a CloudFormation Change Set with Replacement set to Conditional on the monolithic template" },
      { id: 'C', text: "Set DeletionPolicy to Retain on the RDS instance, remove it from the monolithic stack template, update the stack so the resource is retained, and then use the CloudFormation 'Import Existing Resources' feature in the new stack" },
      { id: 'D', text: "Take an RDS snapshot, delete the monolithic stack, and launch the new stack from the snapshot using CloudFormation CLI" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To move an existing AWS resource between CloudFormation stacks without recreating it: 1) Add 'DeletionPolicy: Retain' to the resource in the existing stack; 2) Remove the resource from the existing stack's template and apply the update (the resource is detached from the stack but remains running); 3) Use CloudFormation's 'Import Existing Resources' feature on the new stack, specifying the resource's physical identifier (e.g., DBInstanceIdentifier).",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "ResourceImport", "Refactoring"]
  },
  {
    id: "aws-dop-83",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Run Command Rate Control (Concurrency & Error Threshold)",
    scenario: "An operations team needs to execute an ad-hoc emergency vulnerability mitigation script across 1,000 Linux EC2 instances using AWS Systems Manager Run Command. To protect backend internal services, no more than 50 instances should run the command simultaneously. If more than 10 instances fail to execute the command successfully, the execution should stop immediately.",
    question: "Which Run Command parameters configure these execution boundaries?",
    options: [
      { id: 'A', text: "Configure an Auto Scaling lifecycle hook with a heartbeat timeout of 50 seconds" },
      { id: 'B', text: "Set MaxConcurrency to 50 and MaxErrors to 10 in the SendCommand API request" },
      { id: 'C', text: "Configure an Amazon SQS FIFO queue with a maximum receive count of 10" },
      { id: 'D', text: "Set TimeoutSeconds to 50 and ExecutionLimit to 10 in the SSM Document parameters" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Run Command (and Automation) provides built-in rate controls via 'MaxConcurrency' and 'MaxErrors'. MaxConcurrency specifies the maximum number or percentage of managed nodes that can run the command at the same time (e.g., 50). MaxErrors specifies the maximum number or percentage of errors allowed before Systems Manager stops sending the command to additional nodes (e.g., 10).",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "RunCommand", "Operations"]
  },
  {
    id: "aws-dop-84",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Dynamic References: SSM Parameter Store vs. Secrets Manager",
    scenario: "A template requires an environment-specific non-sensitive configuration string (the API base URL) and an encrypted third-party API token. The API base URL changes frequently and should update whenever a stack update is executed without modifying the template. The API token must remain encrypted and masked in all CloudFormation logs and events.",
    question: "Which combination of dynamic reference types meets both requirements securely?",
    options: [
      { id: 'A', text: "Use '{{resolve:ssm:ApiBaseUrl}}' for the base URL, and '{{resolve:secretsmanager:ApiToken:SecretString:token}}' for the API token" },
      { id: 'B', text: "Use '{{resolve:s3:MyBucket/config.json}}' for both parameters using an S3 pre-signed URL" },
      { id: 'C', text: "Use CloudFormation Parameters with Default values hardcoded in a parameter file committed to Git" },
      { id: 'D', text: "Use Fn::ImportValue for both values exported from a shared infrastructure stack" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudFormation dynamic references provide dedicated resolvers for different security levels: '{{resolve:ssm:parameter-name}}' resolves standard plaintext strings from Systems Manager Parameter Store at runtime; '{{resolve:secretsmanager:secret-id:SecretString:json-key}}' resolves sensitive credentials from AWS Secrets Manager, masking the returned values from CloudFormation console logs, CLI outputs, and stack events.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "SecretsManager", "ParameterStore"]
  },
  {
    id: "aws-dop-85",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Detecting and Auto-Remediating Unattached EBS Volumes with AWS Config and SSM",
    scenario: "To optimize cloud expenditure, a company policy mandates that all unattached Amazon EBS volumes that have remained detached for more than 7 days must be snapshotted and deleted automatically.",
    question: "Which native AWS serverless architecture fulfills this requirement?",
    options: [
      { id: 'A', text: "Configure an Amazon S3 Lifecycle rule to transition EBS volume snapshots to S3 Glacier Deep Archive" },
      { id: 'B', text: "Deploy the AWS Config managed rule 'ec2-volume-inuse-check', configure an automatic remediation action pointing to an SSM Automation document that snapshots and deletes the detached volume, and set the remediation parameter to execute when non-compliant" },
      { id: 'C', text: "Create an Amazon CloudWatch billing alarm that triggers an Amazon SNS topic when EBS storage costs increase" },
      { id: 'D', text: "Schedule a cron job on a management EC2 instance that runs an AWS CLI command to delete all volumes without tags" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Config continuously monitors resource configurations against compliance rules. The managed rule 'ec2-volume-inuse-check' flags any EBS volume not attached to an EC2 instance. AWS Config supports automated remediation via AWS Systems Manager Automation: by binding an SSM Automation document (e.g., AWS-CreateSnapshot followed by AWS-DeleteVolume) to the rule, non-compliant volumes are remediated automatically without human intervention.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "SystemsManager", "FinOps"]
  },
  {
    id: "aws-dop-86",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Failure and Debugging Rollback Triggers",
    scenario: "A DevOps team is developing a complex CloudFormation template with multiple custom resources and EC2 instances. During initial testing, a resource failure causes CloudFormation to immediately roll back and delete all newly created resources and logs, preventing the team from logging into the EC2 instance to inspect /var/log/cfn-init.log.",
    question: "Which CloudFormation deployment flag or setting allows the team to preserve provisioned resources for troubleshooting upon failure?",
    options: [
      { id: 'A', text: "Set TerminationProtection to 'Enabled' on the stack" },
      { id: 'B', text: "Configure an Amazon SQS Dead-Letter Queue on the CloudFormation service role" },
      { id: 'C', text: "Set Rollback on failure to 'Disabled' (or use the --disable-rollback CLI flag) during stack creation" },
      { id: 'D', text: "Add DeletionPolicy: Retain to all resources in the template" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, CloudFormation rolls back on error and deletes all resources created prior to the failure. When developing or debugging templates, engineers can disable rollback by selecting 'Preserve successfully provisioned resources' in the console or passing the '--disable-rollback' flag in the AWS CLI. This leaves failed and successfully created resources running in the CREATE_FAILED state, allowing engineers to connect to instances and review error logs.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "Troubleshooting", "CI/CD"]
  },
  {
    id: "aws-dop-87",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Cross-Account IAM Role Assumption in CloudFormation StackSets",
    scenario: "An enterprise uses self-managed CloudFormation StackSets to deploy security tooling from an Administrator account to hundreds of Target accounts. During a deployment, stack instances fail with the error: 'Account 123456789012: AccessDenied: User: arn:aws:sts::111122223333:assumed-role/AWSCloudFormationStackSetAdministrationRole is not authorized to perform: sts:AssumeRole on resource: arn:aws:iam::123456789012:role/AWSCloudFormationStackSetExecutionRole'.",
    question: "How should the trust policy on the execution role in the target account be updated?",
    options: [
      { id: 'A', text: "Attach an administrator access policy to the target account's root user credentials" },
      { id: 'B', text: "Add an S3 bucket policy granting s3:GetObject to all IAM roles across the organization" },
      { id: 'C', text: "Update the trust relationship of AWSCloudFormationStackSetExecutionRole in account 123456789012 to allow the sts:AssumeRole action from the administrator account's AWSCloudFormationStackSetAdministrationRole ARN" },
      { id: 'D', text: "Configure the administrator role to use AWS Organizations SCP bypass permissions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In self-managed CloudFormation StackSets, the administrator account role (AWSCloudFormationStackSetAdministrationRole) assumes the execution role (AWSCloudFormationStackSetExecutionRole) in each target member account. The execution role in the target account must have an IAM trust policy that explicitly allows the administrator account's administration role ARN to perform 'sts:AssumeRole'.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "IAM", "StackSets"]
  },
  {
    id: "aws-dop-88",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Centralized Patch Baseline Sharing across AWS Organizations",
    scenario: "An enterprise cloud engineering team maintains a rigorously tested Linux OS patch baseline with approved CVE patches and package blacklists. All 50 member accounts in the AWS Organization must use this single validated baseline to prevent fragmented or inconsistent patching policies.",
    question: "How can the engineering team distribute and enforce the custom patch baseline across all member accounts efficiently?",
    options: [
      { id: 'A', text: "Write a Python script that runs daily in each account to download the patch list from an Amazon S3 bucket" },
      { id: 'B', text: "Deploy an AWS Config rule that terminates EC2 instances not using the default AWS-managed patch baseline" },
      { id: 'C', text: "Manually copy-paste the Patch Baseline JSON configuration into each member account's Systems Manager console" },
      { id: 'D', text: "Share the custom Patch Baseline from the management or delegated administrator account across the organization using AWS Resource Access Manager (AWS RAM)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Patch Manager integrates with AWS Resource Access Manager (AWS RAM) to share patch baselines across an entire AWS Organization or specific Organizational Units (OUs). Member accounts can set the shared baseline as their default patch baseline, ensuring consistent, organization-wide patch compliance without duplicating configuration.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "AWSRAM", "Organizations"]
  },
  {
    id: "aws-dop-89",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Init (cfn-init) Metadata and User Data Orchestration",
    scenario: "A company provisions Amazon EC2 instances using CloudFormation. The instances require complex package installations, configuration file templating, and service startup. The DevOps engineer uses the AWS::CloudFormation::Init metadata key and cfn-init helper script. If any package fails to install, the stack creation must fail and notify CloudFormation immediately.",
    question: "Which combination of helper scripts in the EC2 user data script ensures proper signaling?",
    options: [
      { id: 'A', text: "Run cfn-get-metadata and parse the JSON output using a custom python script in the user data" },
      { id: 'B', text: "Execute curl against the instance metadata service (IMDS) and send an SNS notification upon failure" },
      { id: 'C', text: "Run /opt/aws/bin/cfn-hup in daemon mode and reboot the instance using shutdown -r now" },
      { id: 'D', text: "Run /opt/aws/bin/cfn-init to process the AWS::CloudFormation::Init metadata, followed immediately by /opt/aws/bin/cfn-signal with --exit-code $? passed to the stack WaitCondition or CreationPolicy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When provisioning EC2 instances via CloudFormation, the recommended pattern is: 1) The template defines configuration in 'AWS::CloudFormation::Init'; 2) The user data runs 'cfn-init' to install packages, create files, and start services; 3) The user data then invokes 'cfn-signal' passing the exit code of cfn-init ('--exit-code $?'). CloudFormation monitors this signal via a 'CreationPolicy' on the instance or Auto Scaling group, failing and rolling back if a non-zero exit code is received.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "cfn-init", "EC2"]
  },
  {
    id: "aws-dop-90",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Zero-Downtime Infrastructure As Code Upgrades with CloudFormation Blue/Green",
    scenario: "An API service running on ECS Fargate is defined in AWS CloudFormation. The DevOps team needs to deploy new application versions with canary traffic shifting (10% for 10 minutes, then 100%) and automatic rollback if HTTP 500 error rates spike, all declared within CloudFormation.",
    question: "Which CloudFormation transform and resource configuration enables this capability?",
    options: [
      { id: 'A', text: "Use CloudFormation Fn::Join to merge two different ECS task definitions into a single container definition" },
      { id: 'B', text: "Configure an EC2 Auto Scaling group with a target tracking scaling policy set to CPUUtilization 50%" },
      { id: 'C', text: "Include the 'Transform: AWS::CodeDeployBlueGreen' declaration in the template and define an AWS::CodeDeploy::BlueGreen hook specifying the ECS service, test listener, and target groups" },
      { id: 'D', text: "Deploy two distinct CloudFormation stacks and toggle an AWS Route 53 Weighted CNAME record manually" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudFormation supports blue/green deployments for ECS services using the 'AWS::CodeDeployBlueGreen' macro/transform. By declaring this transform and configuring the 'AWS::CodeDeploy::BlueGreen' hook in the template, CloudFormation automatically delegates traffic shifting to AWS CodeDeploy, allowing canary or linear shifting between target groups, running test traffic against a test listener, and rolling back if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "CodeDeploy", "ECS"]
  },
  {
    id: "aws-dop-91",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Config Conformance Packs for CIS Benchmarks",
    scenario: "An enterprise must comply with the CIS AWS Foundations Benchmark across all 80 member accounts in an organization. The security architect wants to deploy a pre-packaged bundle of 40 AWS Config rules and automated remediation actions with a single command, ensuring individual account owners cannot modify or delete the rules.",
    question: "Which AWS Config feature provides this packaged, organization-level compliance enforcement?",
    options: [
      { id: 'A', text: "AWS Config Conformance Packs deployed at the AWS Organizations level as an Organization Conformance Pack" },
      { id: 'B', text: "Individual AWS Config rules deployed via manual CloudFormation templates in each account" },
      { id: 'C', text: "An AWS Systems Manager State Manager association executing a shell script that verifies CIS controls" },
      { id: 'D', text: "An AWS Organizations Service Control Policy (SCP) blocking all console actions except read-only access" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An AWS Config Conformance Pack is a collection of AWS Config rules and remediation actions packaged in a single YAML template. When deployed as an Organization Conformance Pack from the AWS Organizations management or delegated administrator account, the conformance pack is automatically deployed across all member accounts, and member account users cannot modify or delete the centrally managed rules.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "ConformancePacks", "Compliance"]
  },
  {
    id: "aws-dop-92",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Parameter Store Parameter Tiering: Standard vs. Advanced",
    scenario: "A microservice configuration requires storing large application configuration payloads (over 6 KB each) with parameter policies that enforce parameter expiration after 90 days. The developer attempts to store this in AWS Systems Manager Parameter Store but receives a parameter size limit error.",
    question: "How should the developer resolve this issue in Parameter Store?",
    options: [
      { id: 'A', text: "Upgrade the parameter tier from Standard to Advanced to allow parameter sizes up to 8 KB and support Parameter Policies (such as expiration)" },
      { id: 'B', text: "Split the configuration into two separate AWS Secrets Manager secrets" },
      { id: 'C', text: "Compress the configuration payload using gzip and encode it in Base64 before saving as a Standard parameter" },
      { id: 'D', text: "Store the configuration file in an Amazon S3 bucket and save the S3 pre-signed URL in Parameter Store" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager Parameter Store offers two tiers: Standard and Advanced. Standard parameters support up to 4 KB per parameter at no charge. Advanced parameters support larger payloads up to 8 KB, parameter policies (such as expiration notifications and automatic deletion policies), and higher throughput limits for intensive API call volumes.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "ParameterStore", "Configuration"]
  },
  {
    id: "aws-dop-93",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Validating CloudFormation Templates in CI/CD using cfn-lint and TaskCat",
    scenario: "A software vendor publishes AWS CloudFormation partner templates that must be deployed cleanly across all 30 commercial AWS Regions without syntax errors, circular dependencies, or resource limit failures. The team wants an automated testing stage in their CI pipeline that deploys test stacks into multiple regions concurrently, verifies provisioning, and tears them down.",
    question: "Which open-source tool developed by AWS is designed specifically for multi-region CloudFormation automated testing?",
    options: [
      { id: 'A', text: "Terraform Validator" },
      { id: 'B', text: "cfn-nag" },
      { id: 'C', text: "TaskCat" },
      { id: 'D', text: "Checkov" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "TaskCat is an open-source tool developed by AWS Quick Start teams designed specifically to test AWS CloudFormation templates across multiple AWS Regions and availability zones simultaneously. It spins up real CloudFormation stacks, monitors provisioning to completion, generates comprehensive test reports, and cleans up all provisioned resources automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "Testing", "TaskCat"]
  },
  {
    id: "aws-dop-94",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager Parameter Store Hierarchical Path Access Control",
    scenario: "A company uses AWS Systems Manager Parameter Store to manage application settings. The hierarchy is organized as '/app/dev/*', '/app/test/*', and '/app/prod/*'. The security team mandates that developers can read and write development and test parameters, but only the CI/CD pipeline role can access production parameters under '/app/prod/'.",
    question: "Which IAM policy statement restricts developer access according to the principle of least privilege?",
    options: [
      { id: 'A', text: "Grant ssm:* on Resource '*' with a Condition checking the principal's IP address" },
      { id: 'B', text: "Grant ssm:DescribeParameters on all resources and deny ssm:GetParameter in the account SCP" },
      { id: 'C', text: "Grant ssm:GetParameters*, ssm:PutParameter on Resource 'arn:aws:ssm:region:account:parameter/app/dev/*' and 'arn:aws:ssm:region:account:parameter/app/test/*'" },
      { id: 'D', text: "Store production parameters in an encrypted S3 bucket and grant developers read-only permissions to S3" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Systems Manager Parameter Store parameters support hierarchical naming paths (e.g., '/app/prod/database/password'). In IAM policies, you can use wildcards on the parameter resource ARN to control access at any branch level (e.g., 'arn:aws:ssm:*:*:parameter/app/dev/*'). This enables clean, path-based role segregation without complex condition keys.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "ParameterStore", "IAM"]
  },
  {
    id: "aws-dop-95",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Deletion Failures Caused by Non-Empty S3 Buckets",
    scenario: "A development team regularly deploys and tears down ephemeral test environments using CloudFormation. The stack creates an Amazon S3 bucket that holds test execution logs. When deleting the stack, the deletion fails with the error: 'The bucket you are trying to delete is not empty'.",
    question: "How can the team ensure the CloudFormation stack deletes completely and cleanly without manual intervention?",
    options: [
      { id: 'A', text: "Configure an S3 lifecycle rule to expire current versions after 1 day" },
      { id: 'B', text: "Add a CloudFormation custom resource backed by Lambda that empties all object versions and delete markers from the S3 bucket during the Delete request before the bucket is deleted" },
      { id: 'C', text: "Set the DeletionPolicy attribute on the S3 bucket resource to Delete in the CloudFormation template" },
      { id: 'D', text: "Attach an S3 bucket policy denying s3:PutObject during stack deletion" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudFormation cannot delete an Amazon S3 bucket if it contains objects or object versions; attempting to do so returns an error and causes stack deletion to fail. The standard pattern to allow clean automated stack teardown is to deploy a custom resource backed by a Lambda function. On 'Delete' events, the Lambda function lists and deletes all object versions and delete markers from the bucket, allowing CloudFormation to delete the empty bucket cleanly.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "S3", "CustomResource"]
  },
  {
    id: "aws-dop-96",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Automating Patch Compliance Reporting with Systems Manager Quick Setup",
    scenario: "An operations manager wants to enforce daily patch scans across all EC2 instances in an AWS account and display an executive compliance dashboard showing patch status, without manually writing SSM documents, IAM roles, or maintenance windows.",
    question: "Which Systems Manager feature enables one-click fleet-wide patch baseline and scan automation?",
    options: [
      { id: 'A', text: "AWS Systems Manager AppConfig" },
      { id: 'B', text: "AWS Systems Manager Quick Setup Host Management" },
      { id: 'C', text: "AWS Systems Manager Parameter Store" },
      { id: 'D', text: "AWS Systems Manager Run Command" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Quick Setup simplifies onboarding and configuration of AWS resources. With 'Host Management' in Quick Setup, administrators can deploy recommended best practices with a single click, including automated daily patch scanning, CloudWatch agent deployment, automated SSM Agent updates, and basic inventory collection across all instances in the account or organization.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "QuickSetup", "Governance"]
  },
  {
    id: "aws-dop-97",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Stack Policy to Prevent Accidental Production Resource Updates",
    scenario: "A production CloudFormation stack provisions an Amazon Aurora PostgreSQL cluster and several application instances. A DevOps team wants to allow stack updates for application instances and scaling parameters, but wants to strictly prevent any stack update from replacing or modifying the Aurora database cluster.",
    question: "Which CloudFormation mechanism enforces this protection during stack updates?",
    options: [
      { id: 'A', text: "Apply a CloudFormation Stack Policy to the stack that has an 'Effect: Deny' on 'Update:*' actions targeting the Aurora cluster resource logical ID" },
      { id: 'B', text: "Enable Termination Protection on the CloudFormation stack in the console" },
      { id: 'C', text: "Attach an IAM permission boundary to developer roles denying rds:ModifyDBCluster" },
      { id: 'D', text: "Set UpdateReplacePolicy: Retain on the Aurora DBCluster resource in the template" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CloudFormation Stack Policy is a JSON document that defines the update actions that can be performed on designated resources during stack updates. By applying a Stack Policy with an explicit 'Deny' on 'Update:*' for the logical ID of the Aurora database cluster (while allowing updates on other resources), CloudFormation blocks any update that would modify or replace the database, even if the user has full IAM administrator permissions.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "StackPolicy", "Security"]
  },
  {
    id: "aws-dop-98",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Blue/Green Traffic Shifting on API Gateway with Canary Deployments",
    scenario: "A backend REST API running on Amazon API Gateway receives 10,000 requests per second. The engineering team wants to release a new deployment stage with 5% of production traffic routed to the new version for 1 hour. If client-side errors (4xx) or server-side errors (5xx) increase, traffic must revert to 100% on the stable version with zero downtime.",
    question: "Which native API Gateway deployment feature provides this functionality?",
    options: [
      { id: 'A', text: "Use an AWS Lambda function URL with alias weighted routing configured" },
      { id: 'B', text: "Enable Canary Settings on the API Gateway deployment stage, configure percentage weight to 5.0%, and promote or drop the canary based on CloudWatch metrics" },
      { id: 'C', text: "Deploy two separate API Gateway APIs and use Route 53 Weighted routing to split traffic" },
      { id: 'D', text: "Deploy an AWS Application Load Balancer in front of API Gateway with weighted target groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon API Gateway REST APIs natively support canary release deployments on stages. By enabling canary settings on a stage and setting the canary percentage (e.g., 5%), API Gateway automatically splits incoming traffic. The canary writes logs and metrics to separate CloudWatch metrics (e.g., 5XXError on canary vs prod). If errors occur, the canary can be discarded immediately; if healthy, the canary is promoted to become the new production stage.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["APIGateway", "Canary", "CI/CD"]
  },
  {
    id: "aws-dop-99",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling Lifecycle Hooks for Graceful Termination",
    scenario: "An application runs worker nodes on Amazon EC2 instances inside an Auto Scaling group that process long-running batch jobs (up to 15 minutes each). When the Auto Scaling group scales in, worker instances must finish their active jobs and upload results to S3 before terminating, rather than being killed immediately.",
    question: "Which architectural feature enables this graceful termination?",
    options: [
      { id: 'A', text: "Set the EC2 instance shutdown behavior to Stop instead of Terminate" },
      { id: 'B', text: "Attach an Elastic Load Balancer connection draining timeout set to 60 seconds" },
      { id: 'C', text: "Configure an Auto Scaling lifecycle hook for autoscaling:EC2_INSTANCE_TERMINATING, send a heartbeat signal while the job finishes, and complete the lifecycle action when processing completes" },
      { id: 'D', text: "Increase the Auto Scaling scale-in cooldown period to 24 hours" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Auto Scaling lifecycle hooks put instances into a Terminating:Wait state before termination. This allows an agent or script on the instance (or an EventBridge rule triggering a Lambda function) to detect termination, finish active jobs, upload outputs to S3, send heartbeats if needed, and call complete-lifecycle-action to terminate cleanly.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",
    tags: ["Auto Scaling", "Lifecycle Hooks", "EC2", "Resilience"]
  },
  {
    id: "aws-dop-100",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-Region Active-Active with Aurora Global Database",
    scenario: "A global financial platform requires a multi-region database architecture with sub-second replication latency across continents, local read performance in Europe and Asia, and the ability to execute an unplanned regional disaster recovery failover in under 1 minute with zero data loss.",
    question: "Which database architecture meets these strict RPO and RTO criteria?",
    options: [
      { id: 'A', text: "Amazon RDS for MySQL with cross-region read replicas using asynchronous binlog replication" },
      { id: 'B', text: "Amazon DynamoDB single-region table with periodic nightly S3 export backups" },
      { id: 'C', text: "EC2 instances running self-managed PostgreSQL with custom rsync scripts over VPN" },
      { id: 'D', text: "Amazon Aurora Global Database with managed storage-level replication across target regions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Aurora Global Database uses dedicated storage-level replication infrastructure with typical replication latency under 1 second. It supports cross-region read scaling and enables fast disaster recovery: an unplanned failover promotes a secondary region to full read/write in under 1 minute with RPO measured in single-digit seconds.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html",
    tags: ["Aurora", "Global Database", "Multi-Region", "Disaster Recovery"]
  }
];

export default AWS_DOP_QUESTIONS_4;
