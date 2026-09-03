export const AWS_DVA_QUESTIONS_7 = [
  {
    id: "aws-dva-151",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Manual Approval Actions Architecture",
    scenario: "A CI/CD pipeline on AWS CodePipeline must compile code in CodeBuild, pause for a release manager to approve the release, and then deploy to production in CodeDeploy.",
    question: "Which CodePipeline action type halts the pipeline until a designated user confirms the release?",
    options: [
      { id: 'A', text: "A CloudWatch Alarm trigger" },
      { id: 'B', text: "A Manual Approval action" },
      { id: 'C', text: "A Step Functions Wait state" },
      { id: 'D', text: "A Lambda Invocation action" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CodePipeline supports `Manual Approval` actions. When a pipeline reaches a manual approval action, execution halts, an Amazon SNS notification is sent to approvers, and execution only proceeds once an authorized user approves the release through the console or API.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["CodePipeline", "Manual Approval", "CI/CD"]
  },
  {
    id: "aws-dva-152",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM template.yml Transform Macro Declaration",
    scenario: "A developer is building a serverless application consisting of Lambda functions, API Gateway HTTP endpoints, and DynamoDB tables using AWS Serverless Application Model (SAM).",
    question: "Which declaration at the top of the template instructs CloudFormation to process SAM serverless resource types?",
    options: [
      { id: 'A', text: "TemplateVersion: SAM-v2" },
      { id: 'B', text: "Transform: AWS::Serverless-2016-10-31" },
      { id: 'C', text: "Type: AWS::Serverless::Application" },
      { id: 'D', text: "AWSTemplateFormatVersion: 2010-09-09 alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `Transform: AWS::Serverless-2016-10-31` macro header instructs CloudFormation to expand concise SAM resources (such as `AWS::Serverless::Function`, `AWS::Serverless::Api`, and `AWS::Serverless::SimpleTable`) into standard CloudFormation resources during deployment.",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html",
    tags: ["SAM", "CloudFormation", "Serverless"]
  },
  {
    id: "aws-dva-153",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "AWS SAM CLI Commands: sam build vs sam deploy",
    scenario: "A developer is writing code for a serverless microservice on their local development workstation using the AWS SAM CLI.",
    question: "Which AWS SAM CLI command compiles dependencies and builds the deployment artifacts into the .aws-sam directory?",
    options: [
      { id: 'A', text: "sam build" },
      { id: 'B', text: "sam local invoke" },
      { id: 'C', text: "sam deploy" },
      { id: 'D', text: "sam package" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `sam build` command iterates through function runtimes, compiles code, downloads language dependencies (e.g. from npm or pip), and packages artifacts into the `.aws-sam/build` directory, preparing them for local simulation (`sam local invoke`) or deployment (`sam deploy`).",
    referenceUrl: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html",
    tags: ["SAM", "SAM CLI", "sam build"]
  },
  {
    id: "aws-dva-154",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Intrinsic Functions: !Sub vs !Ref",
    scenario: "A CloudFormation template needs to dynamically generate a resource name by combining an environment parameter `Env` and an account ID: `my-bucket-${Env}-${AWS::AccountId}`.",
    question: "Which CloudFormation intrinsic function performs this string variable substitution?",
    options: [
      { id: 'A', text: "!Join with a single argument" },
      { id: 'B', text: "!GetAtt" },
      { id: 'C', text: "!Ref" },
      { id: 'D', text: "!Sub" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `!Sub` (Fn::Sub) intrinsic function substitutes variables in an input string with values that you specify or attributes from pseudo parameters (like `${AWS::AccountId}`) and template parameters (like `${Env}`). `!Ref` returns only the literal value of a single parameter or resource identifier.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html",
    tags: ["CloudFormation", "Intrinsic Functions", "!Sub"]
  },
  {
    id: "aws-dva-155",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Intrinsic Functions: !GetAtt for Attributes",
    scenario: "A CloudFormation template declares an Amazon S3 bucket and needs to retrieve the bucket's Amazon Resource Name (ARN) to configure an IAM policy statement.",
    question: "Which intrinsic function retrieves resource-specific attributes like Arn?",
    options: [
      { id: 'A', text: "!GetAtt MyBucket.Arn" },
      { id: 'B', text: "!Select MyBucket" },
      { id: 'C', text: "!Ref MyBucket" },
      { id: 'D', text: "!Sub MyBucket.Arn" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `!GetAtt` (Fn::GetAtt) intrinsic function returns the value of an attribute from a resource in the template. For an S3 bucket, `!Ref` returns only the bucket name, whereas `!GetAtt MyBucket.Arn` returns the full ARN string (`arn:aws:s3:::mybucket`).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html",
    tags: ["CloudFormation", "Intrinsic Functions", "!GetAtt"]
  },
  {
    id: "aws-dva-156",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Explicit Sequencing with DependsOn",
    scenario: "A CloudFormation stack fails because a database user initialization script attempts to run before the database instance is completely available, even though no direct parameter reference links the two resources.",
    question: "Which CloudFormation attribute explicitly forces one resource to be created after another?",
    options: [
      { id: 'A', text: "Condition" },
      { id: 'B', text: "DependsOn" },
      { id: 'C', text: "DeletionPolicy" },
      { id: 'D', text: "Metadata" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `DependsOn` attribute specifies that the creation of a specific resource follows another. When a developer adds `DependsOn: MyDatabase` to a resource, CloudFormation guarantees that `MyDatabase` is successfully provisioned and ready before creating the dependent resource.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html",
    tags: ["CloudFormation", "DependsOn", "Orchestration"]
  },
  {
    id: "aws-dva-157",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation EC2 Bootstrapping: cfn-init and cfn-signal",
    scenario: "An EC2 instance in a CloudFormation template runs an Apache installation script during launch. CloudFormation must wait until Apache is running before signaling stack creation success.",
    question: "Which combination of CloudFormation helper scripts coordinates package installation and status notification?",
    options: [
      { id: 'A', text: "Use cfn-init to install packages defined in AWS::CloudFormation::Init metadata and cfn-signal to notify CloudFormation of success" },
      { id: 'B', text: "Use cfn-hup alone with cron jobs" },
      { id: 'C', text: "Use cfn-get-metadata and reboot the instance" },
      { id: 'D', text: "Hardcode a 30-minute sleep command in the user data script" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `cfn-init` helper reads and processes the `AWS::CloudFormation::Init` metadata block to fetch files, install packages, and start services. The `cfn-signal` helper sends a success or failure status back to a `CreationPolicy` or `WaitCondition` in CloudFormation.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-init.html",
    tags: ["CloudFormation", "cfn-init", "cfn-signal"]
  },
  {
    id: "aws-dva-158",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Immutable Deployment Policy",
    scenario: "A mission-critical financial web service hosted on AWS Elastic Beanstalk requires zero-downtime deployments and guaranteed quick rollback to pristine hardware if any error occurs.",
    question: "Which Elastic Beanstalk deployment policy deploys the new version to a completely fresh Auto Scaling group of instances before terminating the old instances?",
    options: [
      { id: 'A', text: "Immutable" },
      { id: 'B', text: "All at once" },
      { id: 'C', text: "Rolling" },
      { id: 'D', text: "Rolling with additional batch" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Immutable` deployment policy creates a brand new, separate Auto Scaling group containing a full batch of instances running the new version. Once health checks pass, traffic shifts and the old Auto Scaling group is terminated, ensuring zero impact on live instances and quick rollback upon failure.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    tags: ["Elastic Beanstalk", "Deployment Policies", "Immutable"]
  },
  {
    id: "aws-dva-159",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Configuration Bundles: .ebextensions and .platform",
    scenario: "A developer needs to configure custom Nginx reverse proxy directives and install operating system dependencies on an Amazon Linux 2 Elastic Beanstalk environment.",
    question: "Where should custom configuration files and platform hooks be placed in the source bundle?",
    options: [
      { id: 'A', text: "In an Amazon S3 public bucket root" },
      { id: 'B', text: "In the .ebextensions/ directory for YAML configs and .platform/hooks/ for shell scripts" },
      { id: 'C', text: "In the package.json dependencies array" },
      { id: 'D', text: "In the /var/log/eb-engine/ directory" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Elastic Beanstalk, `.ebextensions/*.config` files configure AWS resources, packages, and environment options, while the `.platform/` directory (introduced in Amazon Linux 2 platforms) allows developers to place shell scripts in `hooks/prebuild`, `hooks/predeploy`, and `hooks/postdeploy`.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html",
    tags: ["Elastic Beanstalk", ".ebextensions", "Configuration"]
  },
  {
    id: "aws-dva-160",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Elastic Beanstalk Worker Tier and sqsd Daemon",
    scenario: "A developer deploys a long-running video processing application on Elastic Beanstalk. The application processes tasks from an Amazon SQS queue without handling direct HTTP web requests.",
    question: "Which Elastic Beanstalk environment tier is designed for asynchronous background workers?",
    options: [
      { id: 'A', text: "Worker Environment Tier" },
      { id: 'B', text: "Web Server Environment Tier" },
      { id: 'C', text: "Single Instance Tier" },
      { id: 'D', text: "Serverless Fargate Tier" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Elastic Beanstalk Worker Environment Tiers automatically provision an Amazon SQS queue and an SQS daemon (`sqsd`) on each EC2 instance. The daemon polls the queue and forwards messages as local HTTP POST requests (`http://localhost/`) to the application, simplifying background processing.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html",
    tags: ["Elastic Beanstalk", "Worker Tier", "SQS"]
  },
  {
    id: "aws-dva-161",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS awsvpc Network Mode Features",
    scenario: "An enterprise microservice running on Amazon ECS on AWS Fargate must receive its own dedicated Elastic Network Interface (ENI) and private IP address within the VPC.",
    question: "Which network mode must be specified in the ECS task definition?",
    options: [
      { id: 'A', text: "host" },
      { id: 'B', text: "none" },
      { id: 'C', text: "awsvpc" },
      { id: 'D', text: "bridge" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `awsvpc` network mode assigns each ECS task its own Elastic Network Interface (ENI) and private IP address directly inside the VPC. `awsvpc` is required for AWS Fargate and enables task-level security groups, VPC Flow Logs, and private subnet routing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html",
    tags: ["ECS", "Fargate", "awsvpc"]
  },
  {
    id: "aws-dva-162",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Dynamic Host Port Mapping in bridge Mode",
    scenario: "Multiple container instances of the same service run on a single EC2 container host using the Amazon ECS `bridge` network mode.",
    question: "How can an Application Load Balancer route traffic to these container instances without port collisions?",
    options: [
      { id: 'A', text: "Set hostPort to 0 in the task definition port mapping to enable dynamic host port assignment" },
      { id: 'B', text: "Assign a unique static host port to every container manually" },
      { id: 'C', text: "Switch the EC2 instance to the awsvpc mode" },
      { id: 'D', text: "Disable security groups on the container instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In ECS `bridge` network mode, setting `hostPort: 0` instructs Docker to assign an ephemeral dynamic port (between 32768 and 65535) on the container instance. The Application Load Balancer registers this dynamic port automatically, allowing multiple copies of the same task to run on a single host.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#portmappings",
    tags: ["ECS", "Dynamic Ports", "ALB"]
  },
  {
    id: "aws-dva-163",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "Amazon ECS Task Role vs Task Execution Role",
    scenario: "An ECS task definition requires permissions to pull container images from Amazon ECR and send logs to CloudWatch, while the application code inside the container needs permissions to query a DynamoDB table.",
    question: "How should the developer configure IAM roles in the task definition?",
    options: [
      { id: 'A', text: "Assign all permissions to the Task Role only" },
      { id: 'B', text: "Hardcode IAM access keys inside the Dockerfile" },
      { id: 'C', text: "Assign the ECR and CloudWatch permissions to the Task Execution Role, and assign the DynamoDB permissions to the Task Role" },
      { id: 'D', text: "Assign all permissions to the EC2 instance profile only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Task Execution Role` grants permissions to the ECS container agent (to pull images from ECR, decrypt secrets from Secrets Manager, and push logs to CloudWatch). The `Task Role` grants permissions to the application running inside the container (e.g. calling DynamoDB, S3, or SQS).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
    tags: ["ECS", "IAM", "Task Role"]
  },
  {
    id: "aws-dva-164",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeCommit Branch Protection and Approval Rules",
    scenario: "A team wants to prevent direct commits to the `main` branch in AWS CodeCommit and require approval from at least two senior engineers on all pull requests.",
    question: "Which combination of features enforces this governance workflow?",
    options: [
      { id: 'A', text: "IAM deny policy on codecommit:GitPush for the main branch paired with a CodeCommit Approval Rule Template" },
      { id: 'B', text: "An S3 bucket lifecycle rule" },
      { id: 'C', text: "A CloudWatch Events rule with SNS" },
      { id: 'D', text: "A Lambda function polling Git logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To protect CodeCommit branches, an IAM policy statement with `Deny` on `codecommit:GitPush` targeting `refs/heads/main` prevents direct pushing. An Approval Rule Template enforces pull request approval rules (e.g. minimum 2 approvers) across repositories.",
    referenceUrl: "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-create-approval-rule-template.html",
    tags: ["CodeCommit", "Branch Protection", "Pull Requests"]
  },
  {
    id: "aws-dva-165",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeCommit Repository Triggers for SNS and Lambda",
    scenario: "Whenever code is pushed to a specific branch in AWS CodeCommit, a notification must be published to Amazon SNS and a build script must execute in AWS Lambda.",
    question: "Which CodeCommit feature directly triggers downstream notifications upon repository events?",
    options: [
      { id: 'A', text: "CodeCommit Repository Triggers" },
      { id: 'B', text: "Git pre-commit hooks in client local repositories" },
      { id: 'C', text: "CloudFront distribution invalidation" },
      { id: 'D', text: "S3 event notifications" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CodeCommit repository triggers can be created for events such as pushes to specific branches or creation/deletion of branches. The trigger sends notifications directly to an Amazon SNS topic or invokes an AWS Lambda function automatically.",
    referenceUrl: "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify.html",
    tags: ["CodeCommit", "Triggers", "SNS"]
  },
  {
    id: "aws-dva-166",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild Secondary Artifacts and Output Bundles",
    scenario: "A CodeBuild project builds an application and generates two distinct output artifacts: a compiled production zip and a code coverage test report.",
    question: "How can the developer output both distinct files into separate Amazon S3 locations from buildspec.yml?",
    options: [
      { id: 'A', text: "Run two independent CodeBuild projects sequentially" },
      { id: 'B', text: "Define a secondary-artifacts block in the artifacts section of buildspec.yml" },
      { id: 'C', text: "Secondary artifacts are not supported in AWS CodeBuild" },
      { id: 'D', text: "Manually call aws s3 cp in the post_build phase without artifact declarations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CodeBuild supports multiple artifact outputs via the `secondary-artifacts` block in `buildspec.yml`. Each secondary artifact identifier can specify its own file pattern, base directory, and discard-paths setting.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-artifacts",
    tags: ["CodeBuild", "Artifacts", "Secondary Artifacts"]
  },
  {
    id: "aws-dva-167",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild Environment Variables from SSM Parameter Store",
    scenario: "A developer needs to securely inject an API key stored in Systems Manager Parameter Store into a CodeBuild container without hardcoding it in source control.",
    question: "Which section of `buildspec.yml` references Parameter Store parameters directly?",
    options: [
      { id: 'A', text: "cache: paths:" },
      { id: 'B', text: "env: parameter-store: section" },
      { id: 'C', text: "phases: install: commands:" },
      { id: 'D', text: "env: variables: section" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In `buildspec.yml`, the `env: parameter-store:` section maps environment variable names directly to Systems Manager Parameter Store parameter keys. CodeBuild automatically fetches and decrypts values before running build phases.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-env",
    tags: ["CodeBuild", "Parameter Store", "Environment Variables"]
  },
  {
    id: "aws-dva-168",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeBuild Privileged Mode for Docker Builds",
    scenario: "A developer is using AWS CodeBuild to build a Docker container image and push it to Amazon ECR. The build fails with `Cannot connect to the Docker daemon`.",
    question: "Which setting must be enabled on the CodeBuild project to allow running Docker inside Docker?",
    options: [
      { id: 'A', text: "Privileged Mode (privilegedMode: true)" },
      { id: 'B', text: "Root User Account execution" },
      { id: 'C', text: "VPC Endpoint for ECR" },
      { id: 'D', text: "Enhanced Networking Mode" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To build Docker images inside an AWS CodeBuild container, the `Privileged` mode flag must be enabled on the project configuration. Privileged mode grants the build container root daemon access required to run the Docker daemon.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/sample-docker.html",
    tags: ["CodeBuild", "Docker", "Privileged Mode"]
  },
  {
    id: "aws-dva-169",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Rollback Triggers on CloudWatch Alarms",
    scenario: "A web deployment on EC2 causes HTTP 500 error spikes. The team needs CodeDeploy to automatically halt the deployment and roll back to the prior version immediately when error rates spike.",
    question: "How should the developer configure automated rollbacks in CodeDeploy?",
    options: [
      { id: 'A', text: "Configure Rollback Triggers in the deployment group associated with a CloudWatch Alarm monitoring 5XX errors" },
      { id: 'B', text: "Write a Lambda function that deletes the deployment group" },
      { id: 'C', text: "Deploy an immutable stack in CloudFormation manually" },
      { id: 'D', text: "CodeDeploy does not support automated rollbacks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodeDeploy allows developers to specify CloudWatch Alarms as deployment rollback triggers. If any configured alarm transitions to `ALARM` state during deployment, CodeDeploy instantly halts traffic shifting and redeploys the last known successful revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html#deployments-rollback-alarms",
    tags: ["CodeDeploy", "Alarms", "Rollback"]
  },
  {
    id: "aws-dva-170",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Agent Installation and IAM Permissions",
    scenario: "A developer launches an EC2 instance to participate in CodeDeploy deployments. Deployments fail with `The CodeDeploy agent did not register`.",
    question: "Which two prerequisites must be met on the EC2 instance for CodeDeploy to operate?",
    options: [
      { id: 'A', text: "Docker must be installed and port 80 must be open to 0.0.0.0/0" },
      { id: 'B', text: "The CodeDeploy Agent must be installed and running, and the instance must have an IAM instance profile with AmazonEC2RoleforAWSCodeDeploy permissions" },
      { id: 'C', text: "CodeCommit credentials must be placed in /root/.gitconfig" },
      { id: 'D', text: "The instance must have a static Elastic IP and root SSH enabled" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The CodeDeploy agent must be installed on the instance OS, and the instance must have an IAM instance profile granting permissions to communicate with CodeDeploy and download artifacts from Amazon S3.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent.html",
    tags: ["CodeDeploy", "Agent", "EC2"]
  },
  {
    id: "aws-dva-171",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Traffic Rerouting with ALB Target Groups",
    scenario: "A developer deploys a new version of an EC2 web application using CodeDeploy Blue/Green. CodeDeploy must shift HTTP traffic smoothly from the original instances to replacement instances.",
    question: "Which AWS service component reroutes user traffic between the Blue and Green instance sets?",
    options: [
      { id: 'A', text: "Network Access Control Lists" },
      { id: 'B', text: "NAT Gateway route tables" },
      { id: 'C', text: "Application Load Balancer (ALB) Target Groups" },
      { id: 'D', text: "Amazon Route 53 DNS record weighting alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In CodeDeploy Blue/Green deployments for EC2, CodeDeploy integrates with Application Load Balancer Target Groups. It registers the replacement instances to a new target group and reroutes production listener traffic to the replacement target group once health checks pass.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elb.html",
    tags: ["CodeDeploy", "ALB", "Blue/Green"]
  },
  {
    id: "aws-dva-172",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy ECS Blue/Green Deployments with Task Definition",
    scenario: "A team uses CodeDeploy to deploy container updates on Amazon ECS. The deployment must create a replacement task set, run tests on a test port, and shift production traffic.",
    question: "Which deployment controller must be specified in the Amazon ECS service definition?",
    options: [
      { id: 'A', text: "CODE_DEPLOY" },
      { id: 'B', text: "ECS (Rolling update)" },
      { id: 'C', text: "EXTERNAL" },
      { id: 'D', text: "KUBERNETES" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To enable Blue/Green deployments with traffic shifting for Amazon ECS, the service definition must configure `deploymentController: { type: 'CODE_DEPLOY' }`, enabling CodeDeploy to manage task set creation and ALB listener rule routing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html",
    tags: ["ECS", "CodeDeploy", "Deployment Controller"]
  },
  {
    id: "aws-dva-173",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Webhook Triggers from External Git Providers",
    scenario: "A developer uses GitHub for version control and AWS CodePipeline for CI/CD. The pipeline must trigger immediately within seconds whenever code is pushed to the repository.",
    question: "Which mechanism enables instant pipeline execution upon GitHub push events?",
    options: [
      { id: 'A', text: "A CodePipeline Webhook (or AWS CodeStar Source Connections)" },
      { id: 'B', text: "A 1-minute cron poll schedule in CodePipeline" },
      { id: 'C', text: "An S3 bucket notification on commit logs" },
      { id: 'D', text: "CloudTrail monitoring of GitHub API calls" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodePipeline webhooks (and AWS CodeStar Connections) receive real-time push event payloads from external Git providers via HTTPS webhooks, triggering pipeline executions instantaneously rather than relying on periodic polling.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-github.html",
    tags: ["CodePipeline", "GitHub", "Webhooks"]
  },
  {
    id: "aws-dva-174",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Cross-Account Artifact Encryption with KMS CMK",
    scenario: "A company deploys a pipeline in Account A that deploys application infrastructure into Account B. Artifacts stored in the CodePipeline S3 bucket fail to decrypt in Account B.",
    question: "What is required to allow Account B to decrypt pipeline artifacts in Account A's S3 bucket?",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with a Customer Managed Key (CMK) and grant Account B kms:Decrypt permissions in the key policy" },
      { id: 'B', text: "Copy artifacts via public unauthenticated URLs" },
      { id: 'C', text: "Use the default AWS-managed aws/s3 KMS key" },
      { id: 'D', text: "Disable all encryption on the artifact S3 bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CodePipeline artifact buckets default to the AWS-managed `aws/s3` key, which cannot be shared across accounts. Cross-account pipelines require a Customer Managed Key (CMK) whose key policy explicitly grants decrypt permissions to the target account's cross-account deployment role.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["CodePipeline", "Cross-Account", "KMS"]
  },
  {
    id: "aws-dva-175",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodePipeline Artifact S3 Lifecycle Rules",
    scenario: "A development team runs 200 builds per day. The CodePipeline S3 artifact bucket contains tens of thousands of old zip archives, incurring high storage charges.",
    question: "How should the developer automatically clean up old pipeline artifacts?",
    options: [
      { id: 'A', text: "Configure an Amazon S3 Lifecycle rule on the artifact bucket to expire noncurrent versions or objects after 30 days" },
      { id: 'B', text: "Write a daily cron job that deletes the entire S3 bucket" },
      { id: 'C', text: "Disable artifact generation in CodeBuild buildspec.yml" },
      { id: 'D', text: "Move the CodePipeline to AWS Organizations root account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring an Amazon S3 Lifecycle rule on the CodePipeline artifact bucket to delete or transition objects older than 30 days automatically cleans up ephemeral deployment bundles, preventing runaway storage costs.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-manage.html#pipelines-manage-s3-bucket-cleanup",
    tags: ["CodePipeline", "S3", "Lifecycle"]
  }
];

export default AWS_DVA_QUESTIONS_7;
