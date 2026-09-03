export const AWS_DVA_FLASHCARDS_8 = [
  {
    id: "aws-dva-fc-176",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "SAM CLI: sam local start-api",
    hint: "Local API Gateway emulation.",
    back: "<strong>sam local start-api</strong> runs a local HTTP server emulating API Gateway endpoints and dispatching requests to local Dockerized Lambda containers.",
    tags: ["SAM", "SAM CLI", "Local Emulation"]
  },
  {
    id: "aws-dva-fc-177",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "SAM: Globals Section",
    hint: "Inheriting shared configuration.",
    back: "The <strong>Globals</strong> section in SAM templates defines shared properties (e.g. <code>Timeout: 30</code>, <code>Runtime</code>) inherited by all functions, eliminating boilerplate.",
    tags: ["SAM", "Globals", "DRY"]
  },
  {
    id: "aws-dva-fc-178",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "SAM: Policy Templates",
    hint: "Pre-built least-privilege IAM roles.",
    back: "SAM <strong>Policy Templates</strong> (e.g. <code>S3ReadPolicy</code>, <code>DynamoDBCrudPolicy</code>) generate scoped IAM execution roles with minimal YAML syntax.",
    tags: ["SAM", "Policy Templates", "IAM"]
  },
  {
    id: "aws-dva-fc-179",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Mappings & !FindInMap",
    hint: "Static lookup tables.",
    back: "The <strong>Mappings</strong> section paired with <strong>!FindInMap</strong> looks up values based on conditions or regions (e.g. mapping AMI IDs across AWS Regions).",
    tags: ["CloudFormation", "Mappings", "!FindInMap"]
  },
  {
    id: "aws-dva-fc-180",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Conditions & !If",
    hint: "Conditional resource provisioning.",
    back: "The <strong>Conditions</strong> section evaluates parameters (e.g. <code>!Equals [!Ref Env, prod]</code>) to conditionally provision resources or configure properties using <strong>!If</strong>.",
    tags: ["CloudFormation", "Conditions", "!If"]
  },
  {
    id: "aws-dva-fc-181",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Export & !ImportValue",
    hint: "Cross-stack resource sharing.",
    back: "A stack exports resource IDs in its <strong>Outputs</strong> block with <code>Export: Name: ...</code>. Other stacks consume these values using <strong>!ImportValue</strong>.",
    tags: ["CloudFormation", "Cross-Stack", "!ImportValue"]
  },
  {
    id: "aws-dva-fc-182",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Change Sets",
    hint: "Previewing infrastructure modifications.",
    back: "<strong>Change Sets</strong> preview planned changes to a stack before execution, highlighting which resources will be added, modified, or replaced.",
    tags: ["CloudFormation", "Change Sets", "Safety"]
  },
  {
    id: "aws-dva-fc-183",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: StackSets",
    hint: "Multi-account multi-region orchestration.",
    back: "<strong>StackSets</strong> deploy CloudFormation stacks across multiple AWS accounts and AWS Regions simultaneously from a central administrator account.",
    tags: ["CloudFormation", "StackSets", "Multi-Account"]
  },
  {
    id: "aws-dva-fc-184",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: DeletionPolicy: Retain",
    hint: "Protecting stateful resources.",
    back: "Setting <strong>DeletionPolicy: Retain</strong> prevents CloudFormation from deleting sensitive resources (DynamoDB, RDS, S3) when a stack is deleted.",
    tags: ["CloudFormation", "DeletionPolicy", "Data Protection"]
  },
  {
    id: "aws-dva-fc-185",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Nested Stacks",
    hint: "Overcoming template size limits.",
    back: "<strong>Nested Stacks</strong> use the <code>AWS::CloudFormation::Stack</code> resource to reference child templates in S3, modularizing complex architectures and bypassing resource limits.",
    tags: ["CloudFormation", "Nested Stacks", "Modular Architecture"]
  },
  {
    id: "aws-dva-fc-186",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Drift Detection",
    hint: "Detecting out-of-band console changes.",
    back: "<strong>Drift Detection</strong> compares stack template definitions against actual live infrastructure states, flagging unmanaged manual changes as <code>DRIFTED</code>.",
    tags: ["CloudFormation", "Drift Detection", "Governance"]
  },
  {
    id: "aws-dva-fc-187",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: Rolling with Additional Batch",
    hint: "Zero-capacity drop deployments.",
    back: "<strong>Rolling with additional batch</strong> provisions a temporary fresh batch of instances first, maintaining <strong>100% full capacity</strong> throughout the software update.",
    tags: ["Elastic Beanstalk", "Deployment Policies", "High Availability"]
  },
  {
    id: "aws-dva-fc-188",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: Traffic Splitting",
    hint: "Automated canary testing on Beanstalk.",
    back: "<strong>Traffic Splitting</strong> routes a specified percentage of live traffic to the new version for an evaluation window before performing full fleet promotion.",
    tags: ["Elastic Beanstalk", "Traffic Splitting", "Canary"]
  },
  {
    id: "aws-dva-fc-189",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: Procfile",
    hint: "Declaring custom application processes.",
    back: "A <strong>Procfile</strong> at the root of the source bundle defines commands to start custom web servers and background worker processes on Amazon Linux 2.",
    tags: ["Elastic Beanstalk", "Procfile", "Processes"]
  },
  {
    id: "aws-dva-fc-190",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: CNAME Swap",
    hint: "Instant zero-downtime environment cutover.",
    back: "<strong>Swap Environment CNAMEs</strong> exchanges the routing URLs between two active Beanstalk environments, achieving instant blue/green cutover without DNS propagation delays.",
    tags: ["Elastic Beanstalk", "CNAME Swap", "Blue/Green"]
  },
  {
    id: "aws-dva-fc-191",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Fargate Spot Capacity Provider",
    hint: "Discounted serverless containers.",
    back: "<strong>FARGATE_SPOT</strong> runs container tasks on spare AWS capacity at deep discounts (up to 70%), providing a two-minute interruption notification before task reclamation.",
    tags: ["ECS", "Fargate Spot", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-192",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Task Placement Strategy (binpack)",
    hint: "Packing instances to minimize cost.",
    back: "The <strong>binpack</strong> strategy clusters tasks onto instances with the least remaining CPU/memory to maximize density and enable instance scale-in.",
    tags: ["ECS", "Task Placement", "binpack"]
  },
  {
    id: "aws-dva-fc-193",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Task Placement Strategy (spread)",
    hint: "Even multi-AZ distribution.",
    back: "The <strong>spread</strong> strategy distributes tasks evenly across Availability Zones or host instances to prevent single points of failure.",
    tags: ["ECS", "Task Placement", "spread"]
  },
  {
    id: "aws-dva-fc-194",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: distinctInstance Constraint",
    hint: "One task per container host.",
    back: "The <strong>distinctInstance</strong> constraint ensures that no two tasks from the same service run on the same physical EC2 instance host.",
    tags: ["ECS", "Placement Constraints", "distinctInstance"]
  },
  {
    id: "aws-dva-fc-195",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Container Health Checks",
    hint: "In-container health probing.",
    back: "Defining a <strong>healthCheck</strong> command in the container definition allows ECS to probe application endpoints directly inside the container and restart deadlocked instances.",
    tags: ["ECS", "Health Check", "Resilience"]
  },
  {
    id: "aws-dva-fc-196",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECR: Scan on Push",
    hint: "Automated CVE vulnerability detection.",
    back: "Enabling <strong>Scan on Push</strong> in ECR triggers automated CVE vulnerability scanning every time a Docker image is pushed to the repository.",
    tags: ["ECR", "Image Scanning", "Security"]
  },
  {
    id: "aws-dva-fc-197",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECR: Tag Immutability",
    hint: "Preventing image tag overwrites.",
    back: "Configuring <strong>Tag Immutability</strong> on an ECR repository guarantees that once a tag is assigned to an image digest, it cannot be modified or overwritten.",
    tags: ["ECR", "Tag Immutability", "Governance"]
  },
  {
    id: "aws-dva-fc-198",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECR: Lifecycle Policies",
    hint: "Automated container cleanup.",
    back: "<strong>ECR Lifecycle Policies</strong> automatically purge untagged images or old image tags based on age or count, reducing registry storage costs.",
    tags: ["ECR", "Lifecycle Policies", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-199",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeCommit: EventBridge Events",
    hint: "Tracking pull request lifecycles.",
    back: "CodeCommit publishes pull request events to <strong>Amazon EventBridge</strong>, enabling automated Slack notifications and compliance webhooks upon PR creation or review.",
    tags: ["CodeCommit", "EventBridge", "Notifications"]
  },
  {
    id: "aws-dva-fc-200",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: Build Badges",
    hint: "Dynamic build status SVG badges.",
    back: "CodeBuild generates dynamic <strong>Build Badges</strong> embeddable in repository README files to display real-time CI status.",
    tags: ["CodeBuild", "Build Badges", "Documentation"]
  }
];

export default AWS_DVA_FLASHCARDS_8;
