export const AWS_DOP_FLASHCARDS_1 = [
  {
    "id": "aws-dop-fc-1",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Cross-Account CodePipeline: S3 Artifact Key Requirements",
    "hint": "Why the default AWS managed key fails across account boundaries.",
    "back": "Artifacts in cross-account pipelines must be encrypted with an <strong>AWS KMS Customer Managed Key (CMK)</strong>, not the default <code>aws/s3</code> key. The KMS key policy and S3 bucket policy in the pipeline account must grant <code>kms:Decrypt</code> and <code>s3:GetObject</code> permissions to the target account's deployment role.",
    "tags": [
      "CodePipeline",
      "KMS",
      "Cross-Account"
    ]
  },
  {
    "id": "aws-dop-fc-2",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy Traffic Shifting: Canary vs. Linear",
    "hint": "Immediate batch split vs. incremental stepping.",
    "back": "<strong>Canary</strong> shifts a small percentage immediately (e.g. <code>Canary10Percent15Minutes</code>), waits the designated interval while monitoring CloudWatch alarms, and shifts the remaining 90% in one step. <strong>Linear</strong> shifts equal increments at regular intervals (e.g. <code>Linear10PercentEvery1Minute</code> shifts 10% each minute until 100%).",
    "tags": [
      "CodeDeploy",
      "Canary",
      "Linear",
      "Lambda"
    ]
  },
  {
    "id": "aws-dop-fc-3",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy ECS Hooks: AfterAllowTestTraffic vs. BeforeAllowTraffic",
    "hint": "Testing on a non-production listener vs. final prep before prod traffic.",
    "back": "<strong>AfterAllowTestTraffic</strong> triggers integration tests against the replacement task set using a test listener port (e.g. 8080) before any production traffic shifts. <strong>BeforeAllowTraffic</strong> runs last-minute pre-traffic validation just before production traffic is routed to the new target group.",
    "tags": [
      "CodeDeploy",
      "ECS",
      "Lifecycle Hooks"
    ]
  },
  {
    "id": "aws-dop-fc-4",
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Buildspec.yml vs. AppSpec.yml",
    "hint": "Compiling artifacts vs. orchestrating instance/service deployments.",
    "back": "<strong>buildspec.yml</strong> is used by <strong>AWS CodeBuild</strong> to define build phases (install, pre_build, build, post_build), cache settings, and artifact outputs. <strong>appspec.yml</strong> is used by <strong>AWS CodeDeploy</strong> to specify file mapping, permissions, and lifecycle hook scripts.",
    "tags": [
      "CodeBuild",
      "CodeDeploy",
      "Buildspec",
      "AppSpec"
    ]
  },
  {
    "id": "aws-dop-fc-5",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild Caching: S3 vs. Local Cache",
    "hint": "Cross-build persistence vs. fast node-local Docker layer caching.",
    "back": "<strong>S3 Caching</strong> stores build cache archives in an Amazon S3 bucket, suitable for intermediate build artifacts across build runs. <strong>Local Caching</strong> stores cache locally on the build host (supporting Source, Docker layer, and custom directory caching), providing much faster execution without S3 network latency.",
    "tags": [
      "CodeBuild",
      "Caching",
      "Performance"
    ]
  },
  {
    "id": "aws-dop-fc-6",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Elastic Beanstalk: Immutable vs. Blue/Green Deployment",
    "hint": "New Auto Scaling group in existing env vs. swapping CNAME between environments.",
    "back": "<strong>Immutable</strong> deployments launch a full temporary Auto Scaling group alongside the existing one within the same environment, verifies health, and terminates the old instances. <strong>Blue/Green</strong> deployments create an entirely separate Elastic Beanstalk environment and swap environment CNAMEs via the console or CLI.",
    "tags": [
      "Elastic Beanstalk",
      "Deployments",
      "Blue/Green"
    ]
  },
  {
    "id": "aws-dop-fc-7",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy Automated Rollback Triggers",
    "hint": "Reverting deployments immediately upon CloudWatch threshold breaches.",
    "back": "CodeDeploy deployment groups can be configured with <strong>CloudWatch alarm rollback triggers</strong>. If an alarm breaches (e.g. HTTP 5xx errors or instance CPU > 80%), CodeDeploy automatically stops the deployment and immediately rolls back to the previous healthy revision.",
    "tags": [
      "CodeDeploy",
      "Rollback",
      "CloudWatch"
    ]
  },
  {
    "id": "aws-dop-fc-8",
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS CodeStar Connections (CodeConnections)",
    "hint": "Connecting external Git providers without personal access tokens.",
    "back": "<strong>AWS CodeConnections</strong> provides secure, OAuth-based integration between CodePipeline and external source providers (GitHub, GitHub Enterprise, GitLab, Bitbucket), creating webhooks and using secure app credentials rather than storing plain-text personal access tokens.",
    "tags": [
      "CodePipeline",
      "GitHub",
      "CodeConnections"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy Deployment Types: In-Place vs. Blue/Green for EC2/On-Premises",
    "hint": "Overwriting existing instances versus launching an isolated replacement set.",
    "back": "<strong>In-Place Deployment</strong> stops the application service, installs the new revision, and restarts instances sequentially or in batches; capacity is temporarily reduced during deployment. <strong>Blue/Green Deployment</strong> launches a fresh replacement Auto Scaling group, installs the revision, routes load balancer traffic to the green group, and terminates the blue group after an optional wait time, ensuring zero downtime and instant rollback.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-9"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy ECS Deployment Configurations: Canary vs. Linear",
    "hint": "Single initial increment followed by the remainder vs. steady periodic increments.",
    "back": "<strong>Canary</strong> (e.g., <code>CodeDeployDefault.ECSCanary10Percent5Minutes</code>) shifts an initial percentage (e.g., 10%), pauses for the specified duration (5 minutes) while running validation tests, and then shifts the remaining 90% in one step. <strong>Linear</strong> (e.g., <code>CodeDeployDefault.ECSLinear10PercentEvery1Minute</code>) shifts equal increments (e.g., 10%) at regular intervals until 100% traffic is shifted.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-10"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy ECS Lifecycle Hooks: Execution Order & Purpose",
    "hint": "Five distinct phases controlling container traffic shifting.",
    "back": "The sequence is: <code>BeforeInstall</code> &rarr; <code>Install</code> &rarr; <code>AfterInstall</code> &rarr; <code>AfterAllowTestTraffic</code> (runs integration tests against the ALB test listener) &rarr; <code>BeforeAllowTraffic</code> &rarr; <em>Traffic Shifting</em> &rarr; <code>AfterAllowTraffic</code> (verifies production metrics) &rarr; <code>AfterWaitTermination</code> (cleans up blue tasks).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-11"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeDeploy AppSpec: EC2 (hooks) vs. ECS/Lambda (resources + hooks)",
    "hint": "YAML structure differences between VM scripts and container/serverless task definitions.",
    "back": "For <strong>EC2/On-Premises</strong>, <code>appspec.yml</code> defines file mappings and lifecycle hook scripts (<code>ApplicationStop</code>, <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>ApplicationStart</code>, <code>ValidateService</code>). For <strong>ECS/Lambda</strong>, <code>appspec.yaml</code> defines <code>resources</code> (TaskDefinition ARN, container name, target port) and only points hooks to validation <strong>AWS Lambda function ARNs</strong> (not shell scripts).",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-12"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Cross-Account CodePipeline: S3 Bucket & KMS Key Requirements",
    "hint": "Why default AWS-managed keys fail across account boundaries.",
    "back": "Cross-account artifact sharing requires a <strong>Customer Managed Key (CMK)</strong> in AWS KMS because the default <code>aws/s3</code> AWS-managed key policy cannot grant permissions to external accounts. The artifact S3 bucket policy must allow <code>s3:GetObject*</code> and <code>s3:PutObject*</code> to the external account's deployment role, and the KMS key policy must grant <code>kms:Decrypt</code> and <code>kms:GenerateDataKey</code> to that role.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-13"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild Artifact Caching: Amazon S3 vs. Local Caching",
    "hint": "Remote network transfer vs. persistent host mount for ephemeral build containers.",
    "back": "<strong>S3 Caching</strong> stores cached files in an S3 bucket; works across all compute types but incurs network latency and transfer overhead. <strong>Local Caching</strong> mounts a persistent cache directory directly on the build host; dramatically faster for Git metadata (<code>LOCAL_SOURCE_CACHE</code>), Docker layers (<code>LOCAL_DOCKER_LAYER_CACHE</code>), and package dependencies (<code>LOCAL_CUSTOM_CACHE</code>), but only works on custom VPC or provisioned build instances.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-14"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild Privileged Mode: When is it mandatory?",
    "hint": "Docker-in-Docker container daemon requirement.",
    "back": "<strong>Privileged Mode</strong> (<code>privilegedMode: true</code>) must be enabled in the CodeBuild project configuration whenever the build job builds Docker container images using the Docker daemon (Docker-in-Docker) or needs access to raw Linux kernel capabilities.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-15"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeBuild buildspec.yml Phases: Execution Order & Failure Behavior",
    "hint": "install, pre_build, build, post_build differences.",
    "back": "Phases run in order: <code>install</code> (installs toolchains, runtimes, and packages) &rarr; <code>pre_build</code> (signs into registries, checks prerequisites) &rarr; <code>build</code> (compiles code, runs unit tests) &rarr; <code>post_build</code> (packages artifacts, tags images). By default, if any command fails in a phase, subsequent phases still run <em>except</em> when <code>finally</code> blocks or explicit phase status checks fail; check <code>$CODEBUILD_BUILD_SUCCEEDING</code> in post_build.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-16"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline Trigger Mechanisms: EventBridge Rule vs. Polling",
    "hint": "Real-time event push vs. periodic API scans.",
    "back": "<strong>Amazon EventBridge</strong> rules (recommended) trigger the pipeline within milliseconds when a source change occurs (CodeCommit commit, ECR image push, GitHub webhook via CodeStar Connection). <strong>Periodic Polling</strong> repeatedly calls <code>ListBranches</code>/<code>DescribeImages</code> APIs every few minutes, introducing deployment lag and consuming AWS API rate limits.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-17"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline Manual Approval: Notification & Expiration Mechanisms",
    "hint": "SNS integration and custom authorization policies.",
    "back": "A <strong>Manual Approval action</strong> publishes an Amazon SNS notification with review comments and console deep links. Reviewers must have the <code>codepipeline:PutApprovalResult</code> IAM permission. The pipeline pauses in the action state until approved or rejected; if no action is taken before the pipeline action timeout (7 days), it fails automatically.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-18"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "AWS CodeArtifact: Repository vs. Domain vs. External Connection",
    "hint": "Hierarchy of package management and public mirror caching.",
    "back": "A <strong>Domain</strong> is an administrative boundary managing storage, KMS encryption, and global permissions across multiple repositories. A <strong>Repository</strong> stores polyglot package versions (npm, PyPI, Maven, NuGet). An <strong>External Connection</strong> links a repository to a public upstream (e.g., <code>public:npmjs</code>), caching packages locally on first fetch to prevent public outage impacts.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-19"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodeArtifact Upstream Repositories: Multi-Tier Inheritance",
    "hint": "How packages resolve across internal team tiers before external registries.",
    "back": "A repository can designate up to 10 <strong>upstream repositories</strong>. When a client requests a package version, CodeArtifact searches the downstream repo first, then walks the upstream graph. This enables a central team to publish vetted core libraries into a parent repository that all departmental child repositories inherit automatically.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-20"
  },
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Blue/Green Deployment with ALB: Test Traffic Listener vs. Production Listener",
    "hint": "Port-based routing separation during Canary/Linear shifts.",
    "back": "The ALB uses a <strong>Production Listener</strong> (port 443/80) routing live user traffic to Target Group 1 (Blue) and a separate <strong>Test Listener</strong> (port 8443) routing to Target Group 2 (Green). Automated test suites or synthetic canaries hit port 8443 during the <code>AfterAllowTestTraffic</code> hook before CodeDeploy begins shifting live production traffic.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-21"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Automated Deployment Rollback: CloudWatch Alarms vs. Manual Stop",
    "hint": "Proactive automated metric breach response.",
    "back": "CodeDeploy allows configuring <strong>CloudWatch Alarm Rollbacks</strong> (e.g., HTTP 5xx rate > 1%, latency p99 > 500ms). When an alarm enters <code>ALARM</code> state during deployment or within the baking period, CodeDeploy immediately aborts the deployment, shifts all traffic back to the original blue fleet, and marks the deployment as failed.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-22"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "ECR Image Tag Immutability vs. Mutability",
    "hint": "Preventing accidental deployment overwrites of production images.",
    "back": "<strong>Tag Immutability</strong> prevents pushing a new container image with an existing tag (e.g., <code>v1.2.3</code>). This guarantees reproducible CI/CD deployments and prevents malicious or accidental poisoning of production tags. Mutable tags (like <code>latest</code>) should only be used in non-production development sandboxes.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-23"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "ECR Pull Through Cache vs. Direct Public Registry Pulls",
    "hint": "Managing Docker Hub / Quay rate limits and air-gapped resiliency.",
    "back": "<strong>ECR Pull Through Cache</strong> automatically caches upstream public repositories (Docker Hub, Quay, ECR Public, GitHub Packages) in your private ECR registry upon first pull. It handles credential management, avoids public rate-limiting errors (HTTP 429), and keeps container builds working during third-party outages.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-24"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Git Branching Strategy: Trunk-Based Development vs. GitFlow in CI/CD",
    "hint": "Short-lived feature branches with feature flags vs. long-lived release branches.",
    "back": "<strong>Trunk-Based Development</strong> merges small, frequent commits into <code>main</code> multiple times daily, gating unreleased features behind feature flags; this minimizes merge debt and maximizes CI throughput. <strong>GitFlow</strong> maintains long-lived <code>develop</code>, <code>release</code>, and <code>hotfix</code> branches, resulting in batch release bottlenecks and complex merge conflicts.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-25"
  }
];

export default AWS_DOP_FLASHCARDS_1;
