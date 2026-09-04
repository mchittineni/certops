export const AWS_DVA_QUESTIONS_8 = [
  {
    id: "aws-dva-176",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "SAM CLI sam local start-api for Local HTTP Emulation",
    scenario: "A developer wants to run an HTTP server on their local machine that emulates API Gateway and invokes Lambda functions in Docker containers locally.",
    question: "Which AWS SAM CLI command runs a local HTTP development server?",
    options: [
      { id: 'A', text: "sam sync" },
      { id: 'B', text: "sam local invoke" },
      { id: 'C', text: "sam build" },
      { id: 'D', text: "sam local start-api" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`sam local start-api` spawns a local HTTP server (default port 3000) that parses the SAM template, routes incoming HTTP requests to Docker containers emulating AWS Lambda runtimes, and supports hot-reloading code changes without redeploying.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html",
    tags: ["SAM", "SAM CLI", "Local Emulation"]
  },
  {
    id: "aws-dva-177",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "SAM Globals Section for Shared Serverless Configuration",
    scenario: "A SAM template defines 10 serverless Lambda functions. All 10 functions require the same Timeout of 30 seconds and runtime of nodejs18.x.",
    question: "Where should the developer define these common properties in template.yml to avoid repetition?",
    options: [
      { id: 'A', text: "In an external JSON file in S3" },
      { id: 'B', text: "In the Mappings section" },
      { id: 'C', text: "In the Globals: Function: section of the template" },
      { id: 'D', text: "In the Parameters section" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Globals` section in AWS SAM allows developers to define common configuration properties (such as `Runtime`, `Timeout`, `MemorySize`, and `Environment`) once. All resources of that type (e.g. `Function` or `Api`) automatically inherit these settings.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-globals.html",
    tags: ["SAM", "Globals", "DRY"]
  },
  {
    id: "aws-dva-178",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "SAM Policy Templates for Scoped IAM Roles",
    scenario: "A developer is writing a SAM template for a Lambda function that only needs read access to a specific Amazon S3 bucket.",
    question: "Which SAM feature generates a scoped IAM role using predefined AWS policy templates?",
    options: [
      { id: 'A', text: "The Policies property using SAM Policy Templates (e.g. S3ReadPolicy)" },
      { id: 'B', text: "Hardcode IAM user credentials in the function code" },
      { id: 'C', text: "Attach AdministratorAccess in template Parameters" },
      { id: 'D', text: "Disable IAM authentication on the S3 bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS SAM provides a library of pre-built Policy Templates (e.g. `S3ReadPolicy`, `DynamoDBCrudPolicy`, `SQSPollerPolicy`). Developers specify the template name and parameters (e.g. `BucketName: !Ref MyBucket`), and SAM generates the least-privilege IAM execution role automatically.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-policy-templates.html",
    tags: ["SAM", "Policy Templates", "IAM"]
  },
  {
    id: "aws-dva-179",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Mappings Section and !FindInMap",
    scenario: "A CloudFormation template needs to select the correct AMI ID dynamically based on the AWS Region where the stack is deployed.",
    question: "Which CloudFormation section and intrinsic function should the developer use?",
    options: [
      { id: 'A', text: "The Mappings section with the !FindInMap intrinsic function" },
      { id: 'B', text: "The Outputs section with !ImportValue" },
      { id: 'C', text: "The Parameters section with !Ref" },
      { id: 'D', text: "The Metadata section with !Sub" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Mappings` section defines static key-value lookup tables (e.g. Region to AMI ID). The `!FindInMap [MapName, TopLevelKey, SecondLevelKey]` intrinsic function retrieves the matching value dynamically based on pseudo parameters like `AWS::Region`.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-findinmap.html",
    tags: ["CloudFormation", "Mappings", "!FindInMap"]
  },
  {
    id: "aws-dva-180",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Conditions Section and !If Intrinsic Function",
    scenario: "A CloudFormation template needs to create an Amazon RDS Multi-AZ replica only when an environment parameter `Env` equals `prod`, while deploying a single-AZ instance in `dev`.",
    question: "Which CloudFormation section and function control conditional resource provisioning?",
    options: [
      { id: 'A', text: "The Transform section with SAM macros" },
      { id: 'B', text: "The Parameters section Default value" },
      { id: 'C', text: "The Conditions section using !Equals, paired with the Condition attribute on the resource or !If function" },
      { id: 'D', text: "The Mappings section with !FindInMap" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudFormation `Conditions` evaluate boolean expressions using functions like `!Equals`, `!Not`, `!And`, and `!Or`. Resources can include the `Condition: IsProduction` attribute or properties can use `!If [IsProduction, ValueIfTrue, ValueIfFalse]` to toggle provisioning.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html",
    tags: ["CloudFormation", "Conditions", "!If"]
  },
  {
    id: "aws-dva-181",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Cross-Stack References: Export and !ImportValue",
    scenario: "A networking team provisions a VPC in Stack A. An application team deploys microservices in Stack B and needs to reference the VPC ID created in Stack A.",
    question: "How should Stack A expose the VPC ID and how should Stack B consume it?",
    options: [
      { id: 'A', text: "Stack A exports the VPC ID in its Outputs section using Export: Name, and Stack B references it using !ImportValue" },
      { id: 'B', text: "Stack B hardcodes the VPC ID string in its Parameters section" },
      { id: 'C', text: "Stack A saves the VPC ID in an unencrypted S3 file" },
      { id: 'D', text: "Stack B queries Stack A using the DescribeStacks CLI inside user data" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In CloudFormation, cross-stack references allow one stack to share resources with others. Stack A defines an `Output` with an `Export: Name: MyVPCId`. Stack B consumes this exported value using the `!ImportValue MyVPCId` intrinsic function.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html",
    tags: ["CloudFormation", "Cross-Stack", "!ImportValue"]
  },
  {
    id: "aws-dva-182",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Change Sets for Safe Previews",
    scenario: "A developer modifies a CloudFormation template to update a production database instance type. Before executing the update, the developer must verify whether the change will replace the database instance.",
    question: "Which CloudFormation feature generates a preview of proposed changes and their replacement impact?",
    options: [
      { id: 'A', text: "CloudFormation Change Sets (CreateChangeSet)" },
      { id: 'B', text: "CloudFormation StackSets" },
      { id: 'C', text: "CloudFormation Drift Detection" },
      { id: 'D', text: "CloudFormation Nested Stacks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudFormation Change Sets provide a detailed preview of how proposed changes will affect running resources before executing the update. The change set indicates whether resources will be modified in-place or deleted and replaced.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html",
    tags: ["CloudFormation", "Change Sets", "Safety"]
  },
  {
    id: "aws-dva-183",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation StackSets for Multi-Account Deployments",
    scenario: "An enterprise security administrator needs to deploy an IAM audit role and AWS Config rules across 50 AWS accounts in 3 AWS Regions from a central management account.",
    question: "Which CloudFormation feature orchestrates stack provisioning across multiple accounts and regions simultaneously?",
    options: [
      { id: 'A', text: "CloudFormation Change Sets" },
      { id: 'B', text: "AWS CloudFormation Nested Stacks" },
      { id: 'C', text: "AWS Service Catalog" },
      { id: 'D', text: "AWS CloudFormation StackSets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS CloudFormation StackSets extends the functionality of stacks by enabling developers to create, update, or delete stacks across multiple AWS accounts and multiple AWS Regions with a single CloudFormation template and management operation.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation", "StackSets", "Multi-Account"]
  },
  {
    id: "aws-dva-184",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation DeletionPolicy (Retain vs Snapshot vs Delete)",
    scenario: "A developer creates a production DynamoDB table via CloudFormation. If the CloudFormation stack is accidentally deleted, the DynamoDB table and its data must remain untouched.",
    question: "Which attribute should the developer add to the DynamoDB resource declaration?",
    options: [
      { id: 'A', text: "DependsOn: ProtectedTable" },
      { id: 'B', text: "UpdateReplacePolicy: Delete" },
      { id: 'C', text: "DeletionPolicy: Retain" },
      { id: 'D', text: "DeletionPolicy: Snapshot" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `DeletionPolicy: Retain` attribute instructs CloudFormation to preserve the resource when its stack is deleted, leaving the underlying AWS resource (e.g. DynamoDB table or S3 bucket) active in the account rather than deleting it.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html",
    tags: ["CloudFormation", "DeletionPolicy", "Data Protection"]
  },
  {
    id: "aws-dva-185",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Nested Stacks Architecture",
    scenario: "A developer designs an infrastructure template that exceeds the 1 MB CloudFormation template body size limit and reaches the 500-resource limit.",
    question: "Which architectural pattern decomposes monolithic templates into modular, reusable sub-stacks?",
    options: [
      { id: 'A', text: "CloudFormation Nested Stacks using the AWS::CloudFormation::Stack resource type" },
      { id: 'B', text: "CloudFormation Macros alone" },
      { id: 'C', text: "Multiple CLI commands in a bash script" },
      { id: 'D', text: "Manual CloudFormation console uploads" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Nested Stacks allow developers to compose modular templates. The root template declares `AWS::CloudFormation::Stack` resources pointing to child templates stored in Amazon S3, overcoming template size limits and promoting component reusability.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html",
    tags: ["CloudFormation", "Nested Stacks", "Modular Architecture"]
  },
  {
    id: "aws-dva-186",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Drift Detection for Unmanaged Modifications",
    scenario: "An engineer suspects that another administrator modified security group rules directly in the AWS Console without updating the CloudFormation template.",
    question: "Which CloudFormation feature detects differences between the expected template configuration and actual live resource states?",
    options: [
      { id: 'A', text: "CloudFormation Drift Detection (DetectStackDrift)" },
      { id: 'B', text: "CloudFormation Change Sets" },
      { id: 'C', text: "CloudFormation Rollback Triggers" },
      { id: 'D', text: "AWS Config Conformance Packs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudFormation Drift Detection identifies differences between the expected configuration of resources defined in the stack template and their actual live configuration in AWS, reporting whether resources are `IN_SYNC` or `DRIFTED`.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["CloudFormation", "Drift Detection", "Governance"]
  },
  {
    id: "aws-dva-187",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Rolling with Additional Batch Deployment",
    scenario: "A production web application on AWS Elastic Beanstalk has 4 EC2 instances. Deployments must maintain 100% capacity (4 active instances) at all times to prevent service degradation.",
    question: "Which deployment policy launches a temporary extra batch of instances before taking existing instances out of service?",
    options: [
      { id: 'A', text: "Rolling with additional batch" },
      { id: 'B', text: "Rolling" },
      { id: 'C', text: "All at once" },
      { id: 'D', text: "Traffic splitting" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Rolling with additional batch` deployment policy launches an extra batch of instances running the new version first. Only when the new batch passes health checks are existing instances updated or replaced, guaranteeing 100% serving capacity throughout the deployment.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["Elastic Beanstalk", "Deployment Policies", "High Availability"]
  },
  {
    id: "aws-dva-188",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Traffic Splitting Deployment Policy",
    scenario: "A developer wants to release a new version of a web application on Elastic Beanstalk by directing 5% of real user traffic to the new version for 15 minutes to validate health before completing the rollout.",
    question: "Which Elastic Beanstalk deployment policy implements automated percentage-based canary testing?",
    options: [
      { id: 'A', text: "All at once" },
      { id: 'B', text: "Immutable" },
      { id: 'C', text: "Rolling" },
      { id: 'D', text: "Traffic Splitting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Traffic Splitting` deployment policy creates a secondary instance group running the new version and routes an initial percentage of production traffic (e.g. 5%) to it for an evaluation period. If health checks pass, all traffic shifts; if an alarm triggers, traffic reroutes back.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.traffic-splitting.html",
    tags: ["Elastic Beanstalk", "Traffic Splitting", "Canary"]
  },
  {
    id: "aws-dva-189",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Procfile Process Declaration",
    scenario: "A Python web application deployed to AWS Elastic Beanstalk requires running both a Gunicorn web server process and a Celery background worker process concurrently.",
    question: "Which file in the source bundle root declares multiple process types for the environment?",
    options: [
      { id: 'A', text: "Procfile" },
      { id: 'B', text: "buildspec.yml" },
      { id: 'C', text: "appspec.yml" },
      { id: 'D', text: "Dockerfile" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Elastic Beanstalk Amazon Linux 2 platforms, developers use a `Procfile` at the root of the source bundle to define custom application processes (e.g. `web: gunicorn --bind :5000 application:app` and `worker: celery -A tasks worker`).",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-linux-extend.procfile.html",
    tags: ["Elastic Beanstalk", "Procfile", "Processes"]
  },
  {
    id: "aws-dva-190",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk CNAME Swap for Blue/Green Deployments",
    scenario: "A company maintains two active Elastic Beanstalk environments: `env-blue` and `env-green`. Once `env-green` is tested, the team needs to switch user traffic instantly without DNS propagation delays.",
    question: "Which Elastic Beanstalk feature swaps environment URLs instantly?",
    options: [
      { id: 'A', text: "Rebuild Environment" },
      { id: 'B', text: "Swap Environment CNAMEs" },
      { id: 'C', text: "Terminate Environment" },
      { id: 'D', text: "Clone Environment" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Elastic Beanstalk environments have unique CNAME URLs. The `Swap Environment CNAMEs` feature redirects traffic between environments instantly at the DNS level without downtime or re-provisioning infrastructure.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html",
    tags: ["Elastic Beanstalk", "CNAME Swap", "Blue/Green"]
  },
  {
    id: "aws-dva-191",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Fargate Spot for Cost Optimization",
    scenario: "A batch processing service on Amazon ECS runs fault-tolerant containerized tasks that can tolerate interruptions. The company needs to minimize compute costs.",
    question: "Which ECS capacity provider strategy should the developer implement?",
    options: [
      { id: 'A', text: "Fargate Spot Capacity Provider (FARGATE_SPOT)" },
      { id: 'B', text: "On-Demand EC2 instances" },
      { id: 'C', text: "Dedicated Hosts" },
      { id: 'D', text: "AWS App Runner alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Fargate Spot allows ECS tasks to run on spare AWS compute capacity at up to a 70% discount compared to standard Fargate pricing. If AWS requires the capacity back, tasks receive a two-minute warning before termination, making it ideal for fault-tolerant workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-capacity-providers.html",
    tags: ["ECS", "Fargate Spot", "Cost Optimization"]
  },
  {
    id: "aws-dva-192",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Task Placement Strategies: binpack vs spread",
    scenario: "A company runs ECS tasks on a cluster of EC2 instances. To minimize the number of active EC2 instances and reduce cost, tasks must be densely packed onto instances with the least available CPU or memory.",
    question: "Which task placement strategy should the developer configure in the ECS service definition?",
    options: [
      { id: 'A', text: "binpack (memory or cpu)" },
      { id: 'B', text: "spread (attribute:ecs.availability-zone)" },
      { id: 'C', text: "random" },
      { id: 'D', text: "distinctInstance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `binpack` task placement strategy places tasks on container instances with the least available amount of CPU or memory, maximizing resource utilization on running instances and minimizing total EC2 instance count.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html",
    tags: ["ECS", "Task Placement", "binpack"]
  },
  {
    id: "aws-dva-193",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Task Placement Strategy: spread for High Availability",
    scenario: "An ECS service runs 6 container tasks on EC2 instances. To maximize fault tolerance, tasks must be distributed evenly across all available Availability Zones in the region.",
    question: "Which task placement strategy satisfies this distribution requirement?",
    options: [
      { id: 'A', text: "spread (attribute:ecs.availability-zone)" },
      { id: 'B', text: "binpack (memory)" },
      { id: 'C', text: "random" },
      { id: 'D', text: "distinctInstance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `spread` task placement strategy places tasks evenly across the cluster based on specified attributes, such as `attribute:ecs.availability-zone` or `instanceId`, ensuring that an AZ outage does not take down all replicas of the service.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html",
    tags: ["ECS", "Task Placement", "spread"]
  },
  {
    id: "aws-dva-194",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Task Placement Constraints: distinctInstance",
    scenario: "A developer needs to ensure that no two tasks from the same ECS service ever run on the same EC2 container instance host.",
    question: "Which task placement constraint enforces this rule?",
    options: [
      { id: 'A', text: "binpack" },
      { id: 'B', text: "distinctInstance" },
      { id: 'C', text: "spread" },
      { id: 'D', text: "memberOf (attribute:ecs.instance-type == t3.large)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `distinctInstance` task placement constraint guarantees that each task in the service is placed on a different container instance, ensuring that no EC2 host runs more than one task from that service.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html",
    tags: ["ECS", "Placement Constraints", "distinctInstance"]
  },
  {
    id: "aws-dva-195",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Container Health Checks in Task Definitions",
    scenario: "A microservice running inside an ECS container occasionally enters a deadlock state where the process is running but not responding to internal HTTP requests.",
    question: "How can the developer configure ECS to detect this failure and restart the unhealthy container automatically?",
    options: [
      { id: 'A', text: "Attach an Elastic IP to the container" },
      { id: 'B', text: "Enable CloudWatch Logs metric filters" },
      { id: 'C', text: "Configure a healthCheck command in the container definition (e.g. curl -f http://localhost:8080/health || exit 1)" },
      { id: 'D', text: "Increase the container memory limit" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ECS Task Definitions allow developers to specify a `healthCheck` command (e.g. `CMD-SHELL, curl -f http://localhost/health || exit 1`) directly in the container definition. ECS periodically runs this check inside the container; if it fails, the container is marked unhealthy and replaced.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definition_healthcheck",
    tags: ["ECS", "Health Check", "Resilience"]
  },
  {
    id: "aws-dva-196",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECR Image Scanning on Push",
    scenario: "A security policy mandates that all container images pushed to Amazon ECR must be automatically scanned for known Common Vulnerabilities and Exposures (CVEs).",
    question: "Which repository setting enables automated vulnerability scanning upon image upload?",
    options: [
      { id: 'A', text: "Tag Immutability" },
      { id: 'B', text: "KMS Encryption at rest" },
      { id: 'C', text: "Scan on Push (scanOnPush: true)" },
      { id: 'D', text: "Lifecycle Policy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon ECR supports `Scan on Push`. When enabled on a repository, ECR automatically scans container images against the CVE database upon push, publishing vulnerability findings directly in the ECR console and EventBridge.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html",
    tags: ["ECR", "Image Scanning", "Security"]
  },
  {
    id: "aws-dva-197",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECR Tag Immutability",
    scenario: "A developer accidentally overwrote the production container image tagged `v1.0.0` with an untested bug fix, causing an unexpected production outage.",
    question: "Which Amazon ECR setting prevents container tags from being overwritten by subsequent pushes?",
    options: [
      { id: 'A', text: "KMS CMK Encryption" },
      { id: 'B', text: "Lifecycle Policy" },
      { id: 'C', text: "Scan on Push" },
      { id: 'D', text: "Tag Immutability (imageTagMutability: IMMUTABLE)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enabling `Tag Immutability` on an Amazon ECR repository prevents image tags from being overwritten. Once an image is pushed with a specific tag (e.g. `v1.0.0`), subsequent attempts to push another image with that same tag are rejected.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html",
    tags: ["ECR", "Tag Immutability", "Governance"]
  },
  {
    id: "aws-dva-198",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECR Lifecycle Policies for Image Expiration",
    scenario: "An ECR repository contains 5,000 untagged image layers generated by daily CI/CD pipeline builds, incurring unnecessary storage charges.",
    question: "Which ECR feature automatically deletes untagged images older than 14 days?",
    options: [
      { id: 'A', text: "Amazon S3 Lifecycle Rules" },
      { id: 'B', text: "ECR Lifecycle Policies" },
      { id: 'C', text: "CloudWatch Metric Alarms" },
      { id: 'D', text: "ECR Scan on Push" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon ECR Lifecycle Policies allow developers to define automated expiration rules (e.g. expire untagged images older than 14 days, or retain only the last 30 images matching tag prefix `release-`), keeping repository storage costs under control.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html",
    tags: ["ECR", "Lifecycle Policies", "Cost Optimization"]
  },
  {
    id: "aws-dva-199",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeCommit Pull Request Notifications via EventBridge",
    scenario: "An engineering team wants to send a Slack notification whenever a pull request is created or approved in AWS CodeCommit.",
    question: "Which service receives CodeCommit pull request events and routes them to notification targets?",
    options: [
      { id: 'A', text: "Amazon EventBridge" },
      { id: 'B', text: "CodeCommit Repository Triggers alone" },
      { id: 'C', text: "CloudWatch Logs Insights" },
      { id: 'D', text: "AWS Systems Manager" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CodeCommit emits events to Amazon EventBridge for all pull request state changes (such as `PullRequestCreated`, `PullRequestStatusChanged`, and `PullRequestApprovalStateChanged`), allowing EventBridge rules to trigger Lambda functions or SNS topics.",
    referenceUrl: "https://docs.aws.amazon.com/codecommit/latest/userguide/monitoring-events.html",
    tags: ["CodeCommit", "EventBridge", "Notifications"]
  },
  {
    id: "aws-dva-200",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild Build Badges for Repository Documentation",
    scenario: "A developer wants to embed a dynamic build status badge (showing Passing or Failing) in the project's GitHub README file.",
    question: "Which CodeBuild feature provides a public URL for build status SVG badges?",
    options: [
      { id: 'A', text: "CodeBuild Build Badges" },
      { id: 'B', text: "CodeDeploy Status Reports" },
      { id: 'C', text: "CloudWatch Dashboard URL" },
      { id: 'D', text: "CodePipeline Public Webhook" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodeBuild provides dynamic `Build Badges` that generate SVG images indicating the current build status of a project branch. The badge URL can be embedded in markdown README files and updates in real time.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/sample-build-badges.html",
    tags: ["CodeBuild", "Build Badges", "Documentation"]
  }
];

export default AWS_DVA_QUESTIONS_8;
