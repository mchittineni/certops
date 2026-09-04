export const AWS_DOP_QUESTIONS_3 = [
  {
    id: "aws-dop-51",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #36",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #36?",
    options: [
      { id: 'A', text: "Granting full administrator access to deployment scripts with unencrypted artifact storage" },
      { id: 'B', text: "Using manual FTP uploads to transfer build artifacts directly to production instances" },
      { id: 'C', text: "Relying on scheduled off-peak batch scripts without automated health validation" },
      { id: 'D', text: "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-52",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #37",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #37?",
    options: [
      { id: 'A', text: "Using manual FTP uploads to transfer build artifacts directly to production instances" },
      { id: 'B', text: "Granting full administrator access to deployment scripts with unencrypted artifact storage" },
      { id: 'C', text: "Relying on scheduled off-peak batch scripts without automated health validation" },
      { id: 'D', text: "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-53",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #38",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #38?",
    options: [
      { id: 'A', text: "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms" },
      { id: 'B', text: "Using manual FTP uploads to transfer build artifacts directly to production instances" },
      { id: 'C', text: "Relying on scheduled off-peak batch scripts without automated health validation" },
      { id: 'D', text: "Granting full administrator access to deployment scripts with unencrypted artifact storage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-54",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #39",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #39?",
    options: [
      { id: 'A', text: "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms" },
      { id: 'B', text: "Using manual FTP uploads to transfer build artifacts directly to production instances" },
      { id: 'C', text: "Relying on scheduled off-peak batch scripts without automated health validation" },
      { id: 'D', text: "Granting full administrator access to deployment scripts with unencrypted artifact storage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-55",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #40",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #40?",
    options: [
      { id: 'A', text: "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms" },
      { id: 'B', text: "Using manual FTP uploads to transfer build artifacts directly to production instances" },
      { id: 'C', text: "Relying on scheduled off-peak batch scripts without automated health validation" },
      { id: 'D', text: "Granting full administrator access to deployment scripts with unencrypted artifact storage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-56",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Custom Resource Lifecycle with Lambda",
    scenario: "A DevOps team uses AWS CloudFormation to provision an application stack. The stack requires generating an external SSL certificate from a third-party certificate authority API and retrieving its ARN during stack creation, as well as revoking the certificate when the stack is deleted.",
    question: "How should this external integration be modeled in the CloudFormation template?",
    options: [
      { id: 'A', text: "Use CloudFormation Fn::ImportValue to directly query the external third-party REST API" },
      { id: 'B', text: "Hardcode the certificate values in the template parameters and update them manually before deletion" },
      { id: 'C', text: "Create an AWS::CloudFormation::CustomResource backed by an AWS Lambda function that handles Create, Update, and Delete event types and responds with status and physical resource IDs to the pre-signed S3 response URL" },
      { id: 'D', text: "Write an EC2 user data script that calls the third-party API and stores the certificate in a local text file" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS CloudFormation Custom Resources allow developers to write custom provisioning logic in AWS Lambda. The Lambda function receives an event object containing the RequestType (Create, Update, Delete) and must send a response JSON object back to the pre-signed S3 URL using the cfn-response module to notify CloudFormation of success or failure.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html",
    tags: ["CloudFormation", "Custom Resources", "Lambda", "IaC"]
  },
  {
    id: "aws-dop-57",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation StackSets for Multi-Account Governance",
    scenario: "An enterprise security team requires an identical set of IAM roles, AWS Config rules, and CloudWatch log forwarders to be deployed automatically to all current and future AWS accounts within their AWS Organization across three specified regions.",
    question: "Which CloudFormation feature should be implemented?",
    options: [
      { id: 'A', text: "A shell script executing aws cloudformation create-stack sequentially over an SSH loop" },
      { id: 'B', text: "A single global CloudFormation template deployed only in the management account" },
      { id: 'C', text: "AWS CloudFormation StackSets with service-managed permissions and auto-deployment enabled for target Organizational Units (OUs)" },
      { id: 'D', text: "Nested stacks configured with cross-region export and import values" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS CloudFormation StackSets allows administrators to deploy stacks across multiple AWS accounts and multiple AWS regions with a single operation. When integrated with AWS Organizations using service-managed permissions, StackSets automatically deploys stacks to any new account added to specified Organizational Units.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation", "StackSets", "Organizations", "Multi-Account"]
  },
  {
    id: "aws-dop-58",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation DeletionPolicy and UpdateReplacePolicy",
    scenario: "A team is managing an Amazon RDS database and Amazon S3 buckets using CloudFormation. They must ensure that if the CloudFormation stack is accidentally deleted, the production database and S3 buckets are preserved rather than destroyed.",
    question: "Which attribute should be configured on the database and S3 resources in the CloudFormation template?",
    options: [
      { id: 'A', text: "UpdatePolicy: Ignore" },
      { id: 'B', text: "Metadata: DoNotDelete" },
      { id: 'C', text: "DeletionPolicy: Retain" },
      { id: 'D', text: "Condition: IsProduction" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The DeletionPolicy attribute in CloudFormation controls what happens to a resource when its stack is deleted. Setting DeletionPolicy to Retain preserves the resource (such as an RDS DB instance or S3 bucket) when the stack is removed. Setting DeletionPolicy to Snapshot creates a final snapshot before deletion (supported on RDS, EBS, Redshift).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["CloudFormation", "DeletionPolicy", "IaC", "Safety"]
  },
  {
    id: "aws-dop-59",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager State Manager vs. Run Command",
    scenario: "An operations team needs to enforce that all Linux EC2 instances in an Auto Scaling group continuously maintain a specific security agent daemon running. If an instance restarts or the agent stops, the configuration must be reapplied automatically.",
    question: "Which AWS Systems Manager capability provides this continuous desired-state enforcement?",
    options: [
      { id: 'A', text: "AWS Systems Manager State Manager associations applied on a defined schedule using instance tags" },
      { id: 'B', text: "AWS Systems Manager Run Command executed manually after an outage" },
      { id: 'C', text: "AWS CloudTrail alerts triggering an SNS notification to administrators" },
      { id: 'D', text: "Amazon Inspector scheduled network reachability scans" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager State Manager automates the process of keeping managed nodes in a defined state. State Manager associations define configuration settings (such as running SSM documents to install agents or update software) and apply them on a recurring schedule to target instances matching specific tags.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["Systems Manager", "State Manager", "Configuration Management"]
  },
  {
    id: "aws-dop-60",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager Parameter Store vs. Secrets Manager",
    scenario: "A company needs to store database connection strings and passwords. The passwords must be automatically rotated every 30 days against an Amazon RDS MySQL instance without requiring application downtime.",
    question: "Which AWS service natively provides automated credential rotation?",
    options: [
      { id: 'A', text: "AWS KMS Customer Managed Keys" },
      { id: 'B', text: "AWS Systems Manager Parameter Store Standard tier" },
      { id: 'C', text: "Amazon S3 bucket with versioning enabled" },
      { id: 'D', text: "AWS Secrets Manager with built-in Lambda rotation functions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Secrets Manager is specifically designed for managing, retrieving, and automatically rotating database credentials, API keys, and secrets. It includes built-in, pre-configured Lambda rotation templates for Amazon RDS, Redshift, and DocumentDB, whereas Parameter Store requires building and maintaining custom rotation mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["Secrets Manager", "SSM", "Rotation", "Security"]
  },
  {
    id: "aws-dop-61",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation StackSets Service-Managed Permissions in AWS Organizations",
    scenario: "A DevOps team manages a multi-account environment governed by AWS Organizations. The team needs to deploy security and baseline monitoring resources to every member account across three AWS Regions using AWS CloudFormation StackSets. When new member accounts are created in the organization, the baseline stacks must automatically deploy without administrative intervention, and removing an account from an OU must automatically delete the resources.",
    question: "Which StackSets configuration meets these requirements with the LEAST operational overhead?",
    options: [
      { id: 'A', text: "Configure an EventBridge rule matching CreateAccount that triggers an AWS Systems Manager Automation document to run CloudFormation CLI commands" },
      { id: 'B', text: "Use service-managed permissions with trusted access enabled between AWS Organizations and CloudFormation, and enable automatic deployments with retain stacks set to false" },
      { id: 'C', text: "Use self-managed permissions with manually provisioned AWSCloudFormationStackSetAdministrationRole and execution roles in each member account" },
      { id: 'D', text: "Deploy a custom Lambda function triggered by AWS Organizations account creation events to invoke CreateStackInstances API calls manually" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudFormation StackSets with service-managed permissions integrates natively with AWS Organizations. With trusted access enabled, StackSets automatically creates the necessary IAM roles across all accounts in target Organization Units (OUs). Enabling 'Automatic deployments' ensures that whenever a new account is added to a target OU, StackSets automatically deploys stack instances to it. Setting 'Retain stacks' to false ensures that when an account is removed from an OU, its stack instances are automatically deleted.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "StackSets", "Organizations"]
  },
  {
    id: "aws-dop-62",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Preventing Pre-Deployment Infrastructure Violations with CloudFormation Hooks",
    scenario: "An enterprise security policy dictates that all Amazon S3 buckets and Amazon EBS volumes provisioned across AWS accounts must be encrypted at rest using KMS Customer Managed Keys. Developers currently submit CloudFormation templates that occasionally contain unencrypted storage definitions, causing reactive AWS Config non-compliance alerts after resources are already provisioned.",
    question: "Which approach enforces this compliance rule PROACTIVELY before any non-compliant resources are created?",
    options: [
      { id: 'A', text: "Create a pre-commit Git hook that executes a local bash script to parse CloudFormation JSON/YAML files on developer laptops" },
      { id: 'B', text: "Deploy an Amazon EventBridge rule that detects CloudFormation CreateStack API calls in AWS CloudTrail and invokes a Lambda function to cancel the stack" },
      { id: 'C', text: "Implement an AWS Config rule with an automated remediation action that terminates non-compliant resources within 5 minutes of creation" },
      { id: 'D', text: "Develop and publish an AWS CloudFormation Hook with a target filter for S3 buckets and EBS volumes configured with failure mode set to FAIL" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS CloudFormation Hooks allow organizations to evaluate resource configurations proactively before CloudFormation provisions them. By authoring a CloudFormation Hook targeting AWS::S3::Bucket and AWS::EC2::Volume resources and setting the Hook's target action to target pre-create and pre-update with failure mode set to FAIL, CloudFormation evaluates the template properties during stack operations. If the encryption criteria are not satisfied, the stack creation or update is rejected immediately before any resources are launched in AWS.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "Hooks", "Compliance"]
  },
  {
    id: "aws-dop-63",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Handling CloudFormation Custom Resource Lambda Failures and Timeouts",
    scenario: "A DevOps engineer created an AWS CloudFormation custom resource backed by an AWS Lambda function to generate a complex database schema during stack creation. During a stack update, the Lambda function encounters an unhandled exception before reaching the cfn-response module, leaving the CloudFormation stack stuck in the UPDATE_IN_PROGRESS state for hours.",
    question: "How should the engineer design the Lambda function and custom resource to prevent the stack from hanging indefinitely?",
    options: [
      { id: 'A', text: "Configure the custom resource in the CloudFormation template with an explicit DeletionPolicy set to Retain" },
      { id: 'B', text: "Increase the Lambda function timeout from 3 minutes to 15 minutes to allow sufficient time for CloudFormation to time out the stack" },
      { id: 'C', text: "Wrap the entire Lambda handler logic in a comprehensive try/finally block that sends a FAILED response with the original RequestId, StackId, and PhysicalResourceId to the pre-signed S3 response URL" },
      { id: 'D', text: "Configure an Amazon SQS dead-letter queue (DLQ) on the Lambda function to store failed events and trigger an automated stack rollback" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudFormation custom resources require an explicit HTTP PUT response to the pre-signed S3 URL containing Status (SUCCESS or FAILED), PhysicalResourceId, StackId, RequestId, and LogicalResourceId. If the Lambda function terminates abnormally or encounters an unhandled exception before sending this response, CloudFormation waits until its internal operation timeout (up to several hours). Wrapping all logic in a try/finally block ensures that even on runtime errors or near-timeout conditions, a FAILED status payload is reliably sent back to CloudFormation, triggering an immediate and clean stack rollback.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "CustomResource", "Lambda"]
  },
  {
    id: "aws-dop-64",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Breaking Circular Dependencies Across CloudFormation Stacks",
    scenario: "A company uses two CloudFormation stacks: Stack A provisions an Amazon VPC and an Application Load Balancer, while Stack B provisions an Auto Scaling group with EC2 instances. Stack A exports the ALB Security Group ID, which Stack B imports to authorize inbound traffic. Now, security requirements require Stack A's ALB Security Group to only allow outbound traffic to Stack B's instance security group, creating a circular dependency during updates.",
    question: "Which architecture pattern resolves this circular dependency without recreating the stacks?",
    options: [
      { id: 'A', text: "Move the security group ingress/egress rules into standalone AWS::EC2::SecurityGroupIngress and AWS::EC2::SecurityGroupEgress resources defined in a separate dedicated stack or Stack B" },
      { id: 'B', text: "Disable rollback on both CloudFormation stacks and run the stack updates concurrently using AWS CLI" },
      { id: 'C', text: "Configure AWS Systems Manager Parameter Store dynamic references to retrieve the security group IDs at deploy time instead of using CloudFormation exports" },
      { id: 'D', text: "Combine both stacks into a single nested stack that imports values using Fn::GetAtt across parent and child templates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Circular dependencies occur when Stack A depends on an export from Stack B, while Stack B simultaneously depends on an export from Stack A. By extracting the cross-referencing security group rules out of the core AWS::EC2::SecurityGroup definitions and creating standalone AWS::EC2::SecurityGroupIngress / AWS::EC2::SecurityGroupEgress resources, the dependency is decoupled. Stack A creates the ALB security group and Stack B creates the instance security group independently; the standalone ingress/egress resource then bridges the two without causing circular stack lock.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "VPC", "SecurityGroups"]
  },
  {
    id: "aws-dop-65",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation",
    scenario: "A critical production workload managed by AWS CloudFormation has experienced out-of-band modifications made directly in the AWS Management Console during an urgent incident. The DevOps engineer needs to identify the exact property differences across resources, verify that no drift is missed, and bring the CloudFormation stack back into alignment without recreating stateful resources.",
    question: "What is the recommended workflow to resolve the drift safely?",
    options: [
      { id: 'A', text: "Terminate the CloudFormation stack with Retain on stateful resources and recreate the entire stack from scratch" },
      { id: 'B', text: "Run CloudFormation CancelUpdateStack and execute an Import Existing Resources operation on all modified resources" },
      { id: 'C', text: "Delete the drifted resources manually in the console and run a CloudFormation UpdateStack operation with rollback disabled" },
      { id: 'D', text: "Execute CloudFormation Drift Detection on the stack, inspect the Drift Details in the console or CLI, update the CloudFormation template to match the drifted live state, and execute a Change Set" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFormation Drift Detection identifies differences between the expected template configuration and the actual live resource properties. To remediate drift safely without causing unexpected resource destruction or replacement, the engineer reviews the drift status (MODIFIED or DELETED), updates the CloudFormation template code to accurately reflect the desired live state (or reverts the console change out-of-band), and applies a Change Set to synchronize the stack state smoothly.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "DriftDetection", "IaC"]
  },
  {
    id: "aws-dop-66",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Zero-Downtime EC2 Fleet OS Patching with SSM Patch Manager and Auto Scaling",
    scenario: "A web application runs on a fleet of 50 Amazon EC2 instances within an Auto Scaling group (ASG) behind an Application Load Balancer. The operations team must apply critical Linux operating system security patches weekly using AWS Systems Manager Patch Manager without causing application downtime or 5xx errors for active users.",
    question: "Which combination of steps achieves seamless, zero-downtime automated OS patching?",
    options: [
      { id: 'A', text: "Reboot all EC2 instances using an Amazon EventBridge scheduled rule that invokes an AWS Systems Manager Run Command targeting the instances' AWS tags" },
      { id: 'B', text: "Create an SSM Maintenance Window that runs the AWS-RunPatchBaseline SSM document targeting all 50 instances simultaneously with MaxConcurrency set to 100%" },
      { id: 'C', text: "Deploy an AWS Lambda function that disables the ALB target group, runs yum update on all instances via SSH, and re-enables the target group" },
      { id: 'D', text: "Configure an ASG Lifecycle Hook for instance launch and terminate, use SSM Run Command to patch instances in batches using an SSM Maintenance Window with MaxConcurrency set to 20% and MaxErrors set to 0" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Zero-downtime patching of an active fleet requires controlled concurrency and proper connection draining. By scheduling an SSM Maintenance Window running AWS-RunPatchBaseline with a concurrency rate limit (e.g., MaxConcurrency=20% or a small batch number) and MaxErrors=0 (stop immediately if a patch fails on any node), and integrating with ASG lifecycle hooks, the fleet maintains sufficient healthy instances behind the ALB at all times while nodes are patched and rebooted.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "PatchManager", "AutoScaling"]
  },
  {
    id: "aws-dop-67",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Dynamic Secrets and Configuration Retrieval in CloudFormation",
    scenario: "An enterprise deployment pipeline uses AWS CloudFormation to provision Amazon RDS database instances and AWS Lambda functions. The database administrator credentials must not appear in plaintext in the CloudFormation template, parameter files, or Git repositories, and password changes in Secrets Manager must be consumable without manual template modification.",
    question: "Which CloudFormation feature should the DevOps engineer implement?",
    options: [
      { id: 'A', text: "Store the database credentials in an Amazon S3 bucket encrypted with SSE-S3 and fetch them using an AWS Lambda backed custom resource" },
      { id: 'B', text: "Hardcode an encrypted KMS ciphertext blob in the template and decrypt it inside the user data script using the AWS CLI" },
      { id: 'C', text: "Pass the credentials as sensitive CloudFormation input parameters with the NoEcho property set to true in the template parameters section" },
      { id: 'D', text: "Use CloudFormation dynamic references with the 'resolve:secretsmanager' and 'resolve:ssm-secure' pattern in the resource properties" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFormation dynamic references allow templates to retrieve values directly from AWS Secrets Manager (e.g., '{{resolve:secretsmanager:MySecret:SecretString:password}}') and SSM Parameter Store (e.g., '{{resolve:ssm-secure:MyParam}}') during stack creation and updates. CloudFormation securely fetches and masks the secret values at runtime without ever exposing them in template files, change sets, or stack events.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "SecretsManager", "Security"]
  },
  {
    id: "aws-dop-68",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Continuous OS Drift Remediation with AWS Systems Manager State Manager",
    scenario: "A compliance standard requires that specific system daemons (auditd and fail2ban) are continuously running and configuration files remain unchanged across all enterprise EC2 instances. If an unauthorized administrator stops a daemon or alters a configuration file, the system must automatically detect and revert the change within 30 minutes.",
    question: "Which AWS Systems Manager feature provides this continuous enforcement?",
    options: [
      { id: 'A', text: "AWS Systems Manager Session Manager with port forwarding configured to inspect daemon status over SSH" },
      { id: 'B', text: "AWS Systems Manager Run Command triggered manually by security operators during scheduled weekly audits" },
      { id: 'C', text: "AWS Systems Manager Parameter Store configured with parameter change notification EventBridge rules" },
      { id: 'D', text: "AWS Systems Manager State Manager association configured with an SSM document targeting instances by tag on a 30-minute schedule" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager State Manager automates the process of keeping managed nodes in a defined state. By creating a State Manager association that targets instances (by tag, resource group, or individual IDs) and executes an SSM document (or Ansible playbook) on a 30-minute cron/rate schedule, State Manager regularly assesses node compliance and automatically reapplies the desired configuration to remediate drift.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "StateManager", "Compliance"]
  },
  {
    id: "aws-dop-69",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Safely Replacing Stateful EC2 Instances with CloudFormation DeletionPolicy and UpdateReplacePolicy",
    scenario: "A CloudFormation template provisions an Amazon RDS DBInstance and an Amazon OpenSearch Service domain. A developer proposes an update that modifies the MasterUsername property of the database, which requires physical resource replacement. The DevOps lead must ensure that if this replacement or stack update is accidentally triggered, existing database storage is not destroyed without a recoverable point-in-time snapshot.",
    question: "Which template configuration protects stateful resources against accidental deletion or replacement?",
    options: [
      { id: 'A', text: "Add a DependsOn attribute linking the RDS instance to an Amazon S3 bucket holding daily backups" },
      { id: 'B', text: "Configure DeletionPolicy: Snapshot and UpdateReplacePolicy: Snapshot on the stateful resources in the CloudFormation template" },
      { id: 'C', text: "Enable TerminationProtection: true on the CloudFormation stack settings in the AWS Management Console" },
      { id: 'D', text: "Attach an IAM permission boundary to all CloudFormation execution roles denying the rds:DeleteDBInstance action" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFormation provides two critical resource-level attributes for data protection: DeletionPolicy and UpdateReplacePolicy. Setting DeletionPolicy: Snapshot ensures that if the resource is deleted when the stack is deleted, CloudFormation creates an RDS final DB snapshot. Setting UpdateReplacePolicy: Snapshot ensures that if a property change requires resource replacement, CloudFormation takes a snapshot of the old resource before creating the replacement.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "DataProtection", "RDS"]
  },
  {
    id: "aws-dop-70",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Cross-Stack Artifact Sharing: Fn::ImportValue vs. SSM Parameter Store",
    scenario: "A software company with 50 development teams deploys microservices across hundreds of CloudFormation stacks. Teams frequently share resource identifiers such as VPC subnet IDs and KMS Key ARNs. The infrastructure team finds that using CloudFormation Exports and 'Fn::ImportValue' prevents them from modifying or updating the core networking stack because other stacks hold active locks on exported values.",
    question: "How should the infrastructure team restructure the resource sharing architecture to decouple stack lifecycles?",
    options: [
      { id: 'A', text: "Consolidate all microservices and networking components into a monolithic single-template CloudFormation stack" },
      { id: 'B', text: "Publish shared configuration values and ARNs to AWS Systems Manager Parameter Store (or AWS AppConfig), and have consuming stacks reference them using CloudFormation dynamic references" },
      { id: 'C', text: "Create a nested stack hierarchy with a single root template that imports all child outputs via Fn::GetAtt" },
      { id: 'D', text: "Delete the importing stacks temporarily, update the core networking exports, and redeploy the importing stacks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFormation exports enforce strict referential integrity: an export cannot be deleted or modified if any other stack imports it via 'Fn::ImportValue'. Storing shared resource attributes in SSM Parameter Store (e.g., '/infra/prod/vpc/subnet-a') allows producing stacks to update values independently, and consuming stacks resolve them dynamically at deploy time via dynamic references ('{{resolve:ssm:/infra/prod/vpc/subnet-a}}') without hard export locks.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "SystemsManager", "Architecture"]
  },
  {
    id: "aws-dop-71",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Multi-Account Systems Manager Automation with Concurrency Controls",
    scenario: "An enterprise security operations team needs to execute an emergency disk forensic collection script across 500 EC2 instances distributed across 20 AWS member accounts in an AWS Organization. The collection process consumes significant network bandwidth, so no more than 20 instances can run the script at any one time, and if more than 5 instances fail, the entire automation must halt immediately.",
    question: "Which solution fulfills these operational constraints?",
    options: [
      { id: 'A', text: "Write a multi-threaded Python script using Boto3 on a local bastion host to iterate through each account sequentially" },
      { id: 'B', text: "Use AWS Systems Manager Automation with multi-account and multi-region execution, specifying an administration role, MaxConcurrency set to 20, and MaxErrors set to 5" },
      { id: 'C', text: "Deploy an AWS Lambda function with concurrency set to 20 that triggers SSH commands on each target EC2 instance" },
      { id: 'D', text: "Configure an AWS OpsWorks for Puppet Enterprise master server to run an ad-hoc puppet agent task across all nodes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Automation supports multi-account and multi-region execution natively. By specifying the AWS Organizations target accounts, regions, and an IAM administration role with execution roles in member accounts, the operator can configure 'MaxConcurrency' (set to 20 instances or a percentage) and 'MaxErrors' (set to 5 or an error threshold), providing granular operational rate-limiting and automated circuit-breaking on failure.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "Automation", "IncidentResponse"]
  },
  {
    id: "aws-dop-72",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Deploying CloudFormation Templates from Git with AWS CodePipeline and Change Sets",
    scenario: "A DevOps team wants to implement an automated CI/CD pipeline for CloudFormation templates using AWS CodePipeline. The pipeline must generate a preview of all proposed infrastructure modifications, automatically pause for a human reviewer to approve the changes, and apply the modifications only after approval.",
    question: "Which combination of CodePipeline actions should be included in the deployment stage?",
    options: [
      { id: 'A', text: "A CodeBuild action running cfn-lint, followed by a CloudFormation action with ActionMode set to DELETE_ONLY" },
      { id: 'B', text: "A CloudFormation action with ActionMode set to CHANGE_SET_REPLACE, followed by a Manual Approval action, followed by a CloudFormation action with ActionMode set to CHANGE_SET_EXECUTE" },
      { id: 'C', text: "A Step Functions action running a custom Python script that invokes the AWS CLI cloudformation create-stack command" },
      { id: 'D', text: "A CloudFormation action with ActionMode set to CREATE_UPDATE, followed immediately by an S3 put action" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In AWS CodePipeline, the recommended GitOps deployment pattern for CloudFormation stacks consists of three sequential steps: 1) A CloudFormation deployment action with ActionMode 'CHANGE_SET_REPLACE' (or 'CHANGE_SET_CREATE') which evaluates template changes against the live stack without applying them; 2) A 'Manual approval' action where reviewers inspect the change set diff; 3) A CloudFormation deployment action with ActionMode 'CHANGE_SET_EXECUTE' that executes the approved change set.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "CodePipeline", "CI/CD"]
  },
  {
    id: "aws-dop-73",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Preventing Unencrypted S3 Bucket Deployments using AWS Config Proactive Rules",
    scenario: "A security governance team wants developers to receive immediate feedback when creating CloudFormation templates if an Amazon S3 bucket does not have default server-side encryption enabled. The evaluation must take place during CI/CD before any infrastructure deployment occurs.",
    question: "Which AWS Config feature provides this evaluation mechanism?",
    options: [
      { id: 'A', text: "An AWS Organizations Service Control Policy (SCP) denying the s3:CreateBucket API call unless an MFA token is present" },
      { id: 'B', text: "AWS Config Proactive Rules evaluated using the CloudFormation Guard or AWS Config SDK in the CI/CD pipeline before stack execution" },
      { id: 'C', text: "AWS Config Conformance Packs deployed with automated SSM remediation documents targeting S3 PutBucketEncryption" },
      { id: 'D', text: "AWS Config Detective Rules running on a periodic 24-hour evaluation schedule across member accounts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Config supports proactive evaluation ('Proactive Rules') using CloudFormation Guard. By running proactive rule evaluations in the CI/CD pipeline (e.g., using the AWS CLI or CloudFormation Guard CLI) prior to applying a template, developers and CI/CD pipelines can evaluate proposed resource definitions against organization-wide compliance rules, blocking deployments before resources are provisioned.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "Compliance", "IaC"]
  },
  {
    id: "aws-dop-74",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Centralized Systems Manager Session Manager Logging with KMS Encryption",
    scenario: "A financial institution mandates that all administrative shell sessions on Amazon EC2 instances must be initiated via AWS Systems Manager Session Manager without open inbound SSH ports. All session commands, keystrokes, and output must be encrypted in transit and at rest using an AWS KMS Customer Managed Key (CMK), and logs must be streamed to a central Amazon CloudWatch Logs log group in real time.",
    question: "Which configuration fulfills these auditing requirements?",
    options: [
      { id: 'A', text: "Install an OpenSSH server on EC2 instances and write a cron job that uploads /var/log/secure to an S3 bucket every 5 minutes" },
      { id: 'B', text: "Enable VPC Flow Logs on the instance subnet and configure a CloudWatch metric filter for port 22 traffic" },
      { id: 'C', text: "Configure Session Manager preferences in the AWS Systems Manager console to enable CloudWatch logging and KMS encryption specifying the CMK ARN, and ensure the EC2 instance profile has kms:GenerateDataKey and kms:Decrypt permissions" },
      { id: 'D', text: "Attach an IAM policy allowing the ssm:StartSession action with a Condition key requiring an active VPN tunnel" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Systems Manager Session Manager allows administrators to configure organization-wide or account-wide preferences. In Session Manager preferences, you can enable streaming of session logs directly to Amazon CloudWatch Logs and/or Amazon S3, and mandate AWS KMS encryption for both session data in transit and session log storage. The EC2 instance profile must have the required IAM permissions to decrypt with the KMS key and put log events to CloudWatch.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "SessionManager", "Auditing"]
  },
  {
    id: "aws-dop-75",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Nested Stacks for Reusable Multi-Tier Architecture",
    scenario: "An enterprise DevOps team builds standardized application templates that provision a VPC, a database tier, and an Auto Scaling web tier. Multiple development teams need to reuse these validated infrastructure components while managing their own application-specific configurations.",
    question: "Which CloudFormation design pattern best implements this modular, reusable structure?",
    options: [
      { id: 'A', text: "Use the AWS::CloudFormation::WaitCondition resource to poll individual stacks deployed sequentially from developer workstations" },
      { id: 'B', text: "Use CloudFormation Exports exclusively and trigger cross-account CloudFormation updates via an Amazon SNS topic" },
      { id: 'C', text: "Write a monolithic CloudFormation template exceeding 1 MB and compress it using GZIP before uploading to the AWS CLI" },
      { id: 'D', text: "Store root and child templates in an Amazon S3 bucket, and reference the child template URLs using the AWS::CloudFormation::Stack resource in the root template" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFormation Nested Stacks allow composing complex architectures from modular, reusable child templates. The child templates are hosted in an Amazon S3 bucket, and the parent (root) template references them using the 'AWS::CloudFormation::Stack' resource specifying the 'TemplateURL' property. Parameters are passed from the root stack into the child stacks, and child outputs can be consumed by other resources in the root stack.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudFormation", "NestedStacks", "Architecture"]
  }
];

export default AWS_DOP_QUESTIONS_3;
