export const AWS_DVA_FLASHCARDS_7 = [
  {
    id: "aws-dva-fc-151",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodePipeline: Manual Approvals",
    hint: "Gating production promotions.",
    back: "A <strong>Manual Approval</strong> action in CodePipeline pauses execution and publishes an SNS notification, requiring human review and approval before promoting artifacts to downstream stages.",
    tags: ["CodePipeline", "Manual Approval", "CI/CD"]
  },
  {
    id: "aws-dva-fc-152",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "SAM: Transform Header",
    hint: "Activating SAM macro expansion.",
    back: "The <strong>Transform: AWS::Serverless-2016-10-31</strong> header at the root of a template signals CloudFormation to translate SAM syntax into full CloudFormation primitives.",
    tags: ["SAM", "CloudFormation", "Serverless"]
  },
  {
    id: "aws-dva-fc-153",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "SAM CLI: Core Workflow",
    hint: "Build, test, and deploy commands.",
    back: "The SAM workflow: <strong>sam build</strong> (resolves dependencies into <code>.aws-sam</code>), <strong>sam local invoke</strong> (local Docker emulation), and <strong>sam deploy --guided</strong> (CloudFormation deployment).",
    tags: ["SAM", "SAM CLI", "sam build"]
  },
  {
    id: "aws-dva-fc-154",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: !Sub vs. !Ref",
    hint: "Variable string interpolation.",
    back: "<strong>!Sub</strong> evaluates string templates with embedded variables (e.g. <code>${Env}-${AWS::AccountId}</code>). <strong>!Ref</strong> returns the value of a single parameter or resource identifier.",
    tags: ["CloudFormation", "Intrinsic Functions", "!Sub"]
  },
  {
    id: "aws-dva-fc-155",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: !GetAtt vs. !Ref",
    hint: "Fetching resource attributes.",
    back: "For an S3 bucket, <strong>!Ref</strong> returns only the bucket name string, whereas <strong>!GetAtt MyBucket.Arn</strong> retrieves the full ARN attribute.",
    tags: ["CloudFormation", "Intrinsic Functions", "!GetAtt"]
  },
  {
    id: "aws-dva-fc-156",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: DependsOn Attribute",
    hint: "Enforcing explicit resource provisioning order.",
    back: "The <strong>DependsOn</strong> attribute explicitly defines creation order between resources when there is no implicit dependency (such as a <code>!Ref</code> or <code>!GetAtt</code>) linking them.",
    tags: ["CloudFormation", "DependsOn", "Orchestration"]
  },
  {
    id: "aws-dva-fc-157",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: cfn-init & cfn-signal",
    hint: "Bootstrapping EC2 instances.",
    back: "<strong>cfn-init</strong> installs packages and creates files from <code>AWS::CloudFormation::Init</code> metadata. <strong>cfn-signal</strong> communicates completion back to CloudFormation CreationPolicies.",
    tags: ["CloudFormation", "cfn-init", "cfn-signal"]
  },
  {
    id: "aws-dva-fc-158",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: Immutable Deployment",
    hint: "Zero-impact fresh instance deployments.",
    back: "The <strong>Immutable</strong> deployment policy deploys new code to a temporary new Auto Scaling group alongside existing instances, guaranteeing clean rollback and zero impact on production capacity.",
    tags: ["Elastic Beanstalk", "Deployment Policies", "Immutable"]
  },
  {
    id: "aws-dva-fc-159",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: .ebextensions & .platform",
    hint: "Customizing environment runtime and proxies.",
    back: "Place <code>.config</code> files in <strong>.ebextensions/</strong> to customize packages and resources. Place platform scripts and proxy configs in <strong>.platform/</strong> on Amazon Linux 2 platforms.",
    tags: ["Elastic Beanstalk", ".ebextensions", "Configuration"]
  },
  {
    id: "aws-dva-fc-160",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "Elastic Beanstalk: Worker Tier & sqsd",
    hint: "Asynchronous background queue processing.",
    back: "A <strong>Worker Tier</strong> includes a managed SQS daemon (<code>sqsd</code>) on each instance that polls an SQS queue and relays messages as local HTTP POST requests to the application.",
    tags: ["Elastic Beanstalk", "Worker Tier", "SQS"]
  },
  {
    id: "aws-dva-fc-161",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: awsvpc Network Mode",
    hint: "Dedicated ENI per task.",
    back: "The <strong>awsvpc</strong> network mode allocates a dedicated ENI and private IP address to every task, enabling task-level security groups. It is required for AWS Fargate tasks.",
    tags: ["ECS", "Fargate", "awsvpc"]
  },
  {
    id: "aws-dva-fc-162",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Dynamic Port Mapping (hostPort 0)",
    hint: "Preventing port collisions on EC2.",
    back: "In <code>bridge</code> network mode, setting <strong>hostPort: 0</strong> causes ECS to assign a dynamic ephemeral port, allowing multiple identical containers to run on the same EC2 instance behind an ALB.",
    tags: ["ECS", "Dynamic Ports", "ALB"]
  },
  {
    id: "aws-dva-fc-163",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: Task Role vs. Task Execution Role",
    hint: "Container agent vs container application permissions.",
    back: "<strong>Task Execution Role</strong> is used by the ECS infrastructure/agent (ECR image pull, CloudWatch logs). <strong>Task Role</strong> is used by the application code running inside the container (calling AWS APIs).",
    tags: ["ECS", "IAM", "Task Role"]
  },
  {
    id: "aws-dva-fc-164",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeCommit: Branch Protection & Approval Rules",
    hint: "Enforcing peer review.",
    back: "Direct pushes to main are blocked via an <strong>IAM Deny policy on codecommit:GitPush</strong> for <code>refs/heads/main</code>. Peer review is enforced via <strong>Approval Rule Templates</strong>.",
    tags: ["CodeCommit", "Branch Protection", "Pull Requests"]
  },
  {
    id: "aws-dva-fc-165",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeCommit: Repository Triggers",
    hint: "Event-driven repository automation.",
    back: "<strong>Repository Triggers</strong> in CodeCommit automatically fire upon branch push or merge events, invoking an <strong>AWS Lambda function</strong> or sending messages to an <strong>Amazon SNS topic</strong>.",
    tags: ["CodeCommit", "Triggers", "SNS"]
  },
  {
    id: "aws-dva-fc-166",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: Secondary Artifacts",
    hint: "Multiple build output bundles.",
    back: "CodeBuild supports <strong>secondary-artifacts</strong> in <code>buildspec.yml</code> to package and upload multiple independent artifacts to distinct S3 locations.",
    tags: ["CodeBuild", "Artifacts", "Secondary Artifacts"]
  },
  {
    id: "aws-dva-fc-167",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: Parameter Store Integration",
    hint: "Secure parameter injection.",
    back: "The <strong>env: parameter-store:</strong> block in <code>buildspec.yml</code> retrieves and decrypts SSM parameters automatically into build container environment variables.",
    tags: ["CodeBuild", "Parameter Store", "Environment Variables"]
  },
  {
    id: "aws-dva-fc-168",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeBuild: Privileged Mode",
    hint: "Building Docker images inside CodeBuild.",
    back: "Enabling <strong>Privileged Mode</strong> in CodeBuild is required to start the Docker daemon and build Docker container images inside the build environment.",
    tags: ["CodeBuild", "Docker", "Privileged Mode"]
  },
  {
    id: "aws-dva-fc-169",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: Automated Rollback Triggers",
    hint: "Alarm-driven deployment rollback.",
    back: "Associating <strong>CloudWatch Alarms</strong> with CodeDeploy Deployment Groups triggers instant automated rollbacks if application error metrics spike during deployment.",
    tags: ["CodeDeploy", "Alarms", "Rollback"]
  },
  {
    id: "aws-dva-fc-170",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: EC2 Agent & Instance Role",
    hint: "Instance prerequisites.",
    back: "EC2 instances require the <strong>CodeDeploy Agent</strong> running and an <strong>IAM Instance Profile</strong> with permissions to poll CodeDeploy and download S3 artifacts.",
    tags: ["CodeDeploy", "Agent", "EC2"]
  },
  {
    id: "aws-dva-fc-171",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: ALB Target Group Traffic Shifting",
    hint: "Zero-downtime routing.",
    back: "CodeDeploy shifts live traffic between Blue and Green fleets by swapping <strong>Application Load Balancer Target Groups</strong> upon successful health validation.",
    tags: ["CodeDeploy", "ALB", "Blue/Green"]
  },
  {
    id: "aws-dva-fc-172",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "ECS: CODE_DEPLOY Deployment Controller",
    hint: "Serverless container blue/green.",
    back: "Setting <strong>deploymentController: CODE_DEPLOY</strong> in ECS allows CodeDeploy to orchestrate blue/green container deployments with dual ALB target groups.",
    tags: ["ECS", "CodeDeploy", "Deployment Controller"]
  },
  {
    id: "aws-dva-fc-173",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodePipeline: Git Webhook Triggers",
    hint: "Real-time pipeline initiation.",
    back: "<strong>CodeStar Source Connections</strong> and webhooks listen for Git push events, triggering AWS CodePipeline executions within milliseconds without polling.",
    tags: ["CodePipeline", "GitHub", "Webhooks"]
  },
  {
    id: "aws-dva-fc-174",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodePipeline: Cross-Account KMS Encryption",
    hint: "Enabling multi-account pipelines.",
    back: "Cross-account CodePipelines require an S3 artifact bucket encrypted with a <strong>Customer Managed Key (CMK)</strong> whose key policy grants <code>kms:Decrypt</code> to the target account.",
    tags: ["CodePipeline", "Cross-Account", "KMS"]
  },
  {
    id: "aws-dva-fc-175",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodePipeline: S3 Artifact Lifecycle",
    hint: "Purging historical build artifacts.",
    back: "An S3 <strong>Lifecycle expiration rule</strong> (e.g. expire after 30 days) on the artifact bucket removes obsolete deployment bundles automatically.",
    tags: ["CodePipeline", "S3", "Lifecycle"]
  }
];

export default AWS_DVA_FLASHCARDS_7;
