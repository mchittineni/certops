export const AWS_DOP_QUESTIONS_1 = [
  {
    "id": "aws-dop-1",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "Cross-Account CodePipeline Artifact Deployment",
    "scenario": "A company uses a central shared-services AWS account to host AWS CodePipeline pipelines. The pipeline builds container artifacts and needs to deploy them into Amazon ECS clusters running in multiple distinct development, staging, and production member accounts.",
    "question": "Which configuration enables CodePipeline to securely deploy artifacts across accounts with least privilege?",
    "options": [
      {
        "id": "A",
        "text": "Deploy a separate standalone CodePipeline in every member account and pull source code over unauthenticated public Git endpoints"
      },
      {
        "id": "B",
        "text": "Configure VPC Peering between all accounts and share IAM user static access keys stored in environment variables across build jobs"
      },
      {
        "id": "C",
        "text": "Use the default AWS-managed aws/s3 key for artifact encryption and grant public read access on the pipeline S3 bucket to target accounts"
      },
      {
        "id": "D",
        "text": "Configure a Customer Managed Key (CMK) in AWS KMS in the pipeline account, grant cross-account KMS usage and S3 artifact bucket permissions to deployment roles in the target member accounts, and configure CodePipeline stages to assume the target account roles"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Cross-account CodePipeline deployments require an S3 artifact bucket encrypted with an AWS KMS Customer Managed Key (CMK) because the default aws/s3 key cannot be shared across AWS accounts. The pipeline assumes an IAM role in each target account that has permissions to decrypt with the CMK and access the S3 artifact bucket.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    "tags": [
      "CodePipeline",
      "KMS",
      "Cross-Account",
      "IAM"
    ]
  },
  {
    "id": "aws-dop-2",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "CodeDeploy Blue/Green Deployment with Lambda",
    "scenario": "A DevOps engineer is modernizing a serverless REST API running on AWS Lambda. To minimize blast radius during releases, production traffic must be shifted to the new Lambda version gradually: 10% of traffic on initial deployment, followed by the remaining 90% after 15 minutes of successful operation without CloudWatch alarm triggers.",
    "question": "Which CodeDeploy deployment configuration satisfies this requirement?",
    "options": [
      {
        "id": "A",
        "text": "CodeDeployLinear10PercentEvery1Minute combined with a CloudWatch alarm trigger or Canary10Percent15Minutes in the AppSpec file"
      },
      {
        "id": "B",
        "text": "Route 53 weighted routing using latency-based DNS records updated every 60 seconds"
      },
      {
        "id": "C",
        "text": "CodeDeployDefault.AllAtOnce with an immediate alias pointer update"
      },
      {
        "id": "D",
        "text": "AWS Lambda provisioned concurrency configured to 10% with manual alias version tagging"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS CodeDeploy supports native Canary and Linear deployment configurations for AWS Lambda. Canary10Percent15Minutes shifts 10% of traffic to the new version, waits 15 minutes while monitoring associated CloudWatch metric alarms (such as HTTP 5xx errors), and shifts the remaining 90% only if alarms remain healthy.",
    "referenceUrl": "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    "tags": [
      "CodeDeploy",
      "Lambda",
      "Canary",
      "AppSpec"
    ]
  },
  {
    "id": "aws-dop-3",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "CodeDeploy Lifecycle Event Hooks for Amazon ECS",
    "scenario": "An enterprise deploys a microservice to Amazon ECS using AWS CodeDeploy blue/green deployments. Before routing production user traffic to the replacement task set, the platform team must execute a suite of synthetic integration tests against the replacement tasks.",
    "question": "Which CodeDeploy lifecycle hook should be used in the AppSpec file to trigger the test suite?",
    "options": [
      {
        "id": "A",
        "text": "AfterAllowTraffic"
      },
      {
        "id": "B",
        "text": "BeforeInstall"
      },
      {
        "id": "C",
        "text": "AfterAllowTestTraffic"
      },
      {
        "id": "D",
        "text": "AfterInstall"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "In an Amazon ECS blue/green deployment with CodeDeploy, lifecycle hooks execute in a specific order: BeforeInstall \u2192 AfterInstall \u2192 AfterAllowTestTraffic \u2192 BeforeAllowTraffic \u2192 AfterAllowTraffic. The AfterAllowTestTraffic hook allows test traffic on a designated test listener (e.g. port 8080) to validate replacement tasks before production traffic is routed via BeforeAllowTraffic.",
    "referenceUrl": "https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html",
    "tags": [
      "CodeDeploy",
      "ECS",
      "AppSpec",
      "Lifecycle Hooks"
    ]
  },
  {
    "id": "aws-dop-4",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "CodeBuild Private VPC Integration",
    "scenario": "A team uses AWS CodeBuild to compile and test a Java application. During unit testing, the build runner must connect to an internal enterprise database hosted inside a private VPC subnet with no internet access. The build runner must also access third-party dependencies from an internal Nexus repository running on-premises via Direct Connect.",
    "question": "How should CodeBuild be configured to access these internal network resources?",
    "options": [
      {
        "id": "A",
        "text": "Configure the CodeBuild project to run inside the VPC by specifying the VPC ID, private subnets, and security groups that have network routes to the database and Direct Connect gateway"
      },
      {
        "id": "B",
        "text": "Deploy an internet-facing Application Load Balancer in front of the private database and allow all inbound connections"
      },
      {
        "id": "C",
        "text": "Download the database tables to an S3 bucket before the build begins using a pre-build shell script"
      },
      {
        "id": "D",
        "text": "Assign a public IPv4 address to the CodeBuild compute container and configure NAT Gateway port forwarding"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS CodeBuild supports VPC integration, allowing build containers to run within private subnets of a VPC. This grants the build containers direct, secure private network connectivity to internal RDS databases, VPC endpoints, and on-premises resources reachable through Direct Connect or VPN.",
    "referenceUrl": "https://docs.aws.amazon.com/codebuild/latest/userguide/vpc-support.html",
    "tags": [
      "CodeBuild",
      "VPC",
      "Networking",
      "Security"
    ]
  },
  {
    "id": "aws-dop-5",
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "CodeBuild Build Caching Optimization",
    "scenario": "A software team notices that their AWS CodeBuild jobs take over 18 minutes to complete because Node.js npm dependencies and Docker base layers are downloaded from scratch on every build execution.",
    "question": "Which configuration is the most effective way to reduce build runtimes?",
    "options": [
      {
        "id": "A",
        "text": "Enable local caching (Source and Docker layer cache) or Amazon S3 caching in the CodeBuild project settings and define the cache directories in the buildspec.yml file"
      },
      {
        "id": "B",
        "text": "Disable unit testing and static code analysis during the build phase"
      },
      {
        "id": "C",
        "text": "Store all node_modules dependencies directly in the Git source code repository"
      },
      {
        "id": "D",
        "text": "Scale up the CodeBuild compute type to GPU-accelerated instances without caching"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS CodeBuild provides native caching capabilities, supporting both Amazon S3 bucket caching and local Docker layer and custom directory caching. Specifying cached directories (such as ~/.npm or Docker layers) in buildspec.yml avoids redundant downloads on subsequent builds, substantially decreasing build durations.",
    "referenceUrl": "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    "tags": [
      "CodeBuild",
      "Caching",
      "Performance",
      "Optimization"
    ]
  },
  {
    "id": "aws-dop-6",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "Automated Rollback Triggers in CodeDeploy",
    "scenario": "An operations team wants AWS CodeDeploy to automatically halt an ongoing deployment to an Amazon EC2 Auto Scaling group and immediately roll back to the previous healthy revision if the application error rate exceeds 2% or instance CPU utilization exceeds 85%.",
    "question": "Which configuration implements this automated rollback mechanism?",
    "options": [
      {
        "id": "A",
        "text": "Configure Route 53 health checks to switch DNS records to an S3 error page"
      },
      {
        "id": "B",
        "text": "Rely on Auto Scaling group scale-in policies to terminate unhealthy instances during deployments"
      },
      {
        "id": "C",
        "text": "Write a cron job on the EC2 instances that checks metrics and calls the AWS CLI rollback command"
      },
      {
        "id": "D",
        "text": "Attach Amazon CloudWatch alarms monitoring error rate and CPU metrics to the CodeDeploy deployment group's automatic rollback configuration"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "CodeDeploy deployment groups support automated rollback triggers tied to Amazon CloudWatch alarms. When a configured alarm breaches its threshold (such as elevated HTTP 5xx errors or CPU spikes) during a deployment, CodeDeploy immediately stops the rollout and deploys the last known healthy application revision.",
    "referenceUrl": "https://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-cloudwatch-alarms.html",
    "tags": [
      "CodeDeploy",
      "Rollback",
      "CloudWatch",
      "Alarms"
    ]
  },
  {
    "id": "aws-dop-7",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "Multi-Region CodePipeline Deployment Orchestration",
    "scenario": "An enterprise requires an automated CI/CD pipeline that builds an application once, runs automated verification in a primary region (us-east-1), and upon passing tests, replicates and deploys the identical build artifact simultaneously to secondary regions (eu-west-1 and ap-southeast-1).",
    "question": "How should the deployment architecture be structured in AWS CodePipeline?",
    "options": [
      {
        "id": "A",
        "text": "Write custom shell scripts in CodeBuild that use the AWS CLI to copy files over the public internet to regional S3 buckets"
      },
      {
        "id": "B",
        "text": "Use AWS Snowball to physically transport build artifacts between regional datacenters"
      },
      {
        "id": "C",
        "text": "Create three completely independent pipelines that each clone the source repository and run their own builds in parallel"
      },
      {
        "id": "D",
        "text": "Configure a single CodePipeline pipeline with cross-region actions, defining an artifact bucket in each region encrypted with that region's KMS CMK, and specify action providers in the target regions within the pipeline stages"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "AWS CodePipeline natively supports cross-region actions within a single pipeline definition. When cross-region actions are configured, CodePipeline requires an S3 artifact store in each target region and orchestrates the automatic replication and encryption of build artifacts across regions.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-create-cross-region.html",
    "tags": [
      "CodePipeline",
      "Multi-Region",
      "KMS",
      "Artifacts"
    ]
  },
  {
    "id": "aws-dop-8",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "Elastic Beanstalk Deployment Policy Trade-Offs",
    "scenario": "A company hosts an e-commerce website on AWS Elastic Beanstalk. During application deployments, the site must maintain 100% of its provisioned capacity to avoid performance degradation, but management does not want to pay for a full duplicate set of instances during the update.",
    "question": "Which deployment policy best balances these requirements?",
    "options": [
      {
        "id": "A",
        "text": "All at once"
      },
      {
        "id": "B",
        "text": "Rolling"
      },
      {
        "id": "C",
        "text": "Immutable"
      },
      {
        "id": "D",
        "text": "Rolling with additional batch"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "The 'Rolling with additional batch' policy provisions an extra batch of new instances before taking any existing instances out of service. This ensures the application maintains full capacity throughout the entire deployment process, while only incurring the temporary cost of a single additional batch rather than doubling the entire fleet.",
    "referenceUrl": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rolling-version-deploy.html",
    "tags": [
      "Elastic Beanstalk",
      "Deployment Policies",
      "Compute"
    ]
  },
  {
    "id": "aws-dop-9",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "CodeStar Connections for GitHub Integration",
    "scenario": "A company is migrating its source code repositories to GitHub Enterprise Cloud and wants to trigger AWS CodePipeline executions automatically whenever pull requests are merged into the main branch, using secure OAuth/App authentication without hardcoding personal access tokens.",
    "question": "Which AWS service feature connects CodePipeline to external Git repositories?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeStar Connections (AWS CodeConnections)"
      },
      {
        "id": "B",
        "text": "AWS Directory Service"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager Session Manager"
      },
      {
        "id": "D",
        "text": "Amazon Cognito User Pools"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS CodeConnections (formerly AWS CodeStar Connections) provides secure, managed integration between AWS developer tools and third-party source control providers like GitHub, GitLab, and Bitbucket. It utilizes OAuth app authorization and webhooks without requiring long-lived personal access tokens.",
    "referenceUrl": "https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html",
    "tags": [
      "CodePipeline",
      "GitHub",
      "CodeConnections",
      "SDLC"
    ]
  },
  {
    "id": "aws-dop-10",
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "AppSpec.yml vs. Buildspec.yml Responsibilities",
    "scenario": "A newly hired engineer asks about the distinct roles of buildspec.yml and appspec.yml in an AWS CI/CD pipeline.",
    "question": "Which statement accurately distinguishes their purposes?",
    "options": [
      {
        "id": "A",
        "text": "Both files are identical and can be used interchangeably in any AWS developer tool"
      },
      {
        "id": "B",
        "text": "buildspec.yml defines build, compile, and packaging instructions for AWS CodeBuild, whereas appspec.yml defines deployment lifecycle hooks and file copy instructions for AWS CodeDeploy"
      },
      {
        "id": "C",
        "text": "buildspec.yml is used exclusively by AWS CloudFormation, whereas appspec.yml is used by Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "appspec.yml compiles source code into binaries, whereas buildspec.yml assigns IAM role permissions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "The buildspec.yml file is executed by AWS CodeBuild to define environment variables, build phases (install, pre_build, build, post_build), and output artifacts. The appspec.yml file is read by AWS CodeDeploy to orchestrate deployment phases, file destination paths, permissions, and lifecycle event hooks.",
    "referenceUrl": "https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html",
    "tags": [
      "CodeBuild",
      "CodeDeploy",
      "Buildspec",
      "AppSpec"
    ]
  },
  {
    "id": "aws-dop-11",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Automation: CodePipeline Manual Approval Stage",
    "scenario": "An enterprise cloud engineering team is architecting automated continuous integration and delivery pipelines for codepipeline manual approval stage.",
    "question": "Which configuration or architectural pattern satisfies these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Disabling CodePipeline until an administrator restarts it manually"
      },
      {
        "id": "B",
        "text": "A cron job that pauses execution for 24 hours automatically"
      },
      {
        "id": "C",
        "text": "A manual approval action backed by Amazon SNS topic notifications and IAM authorization"
      },
      {
        "id": "D",
        "text": "Hardcoding a 10-minute sleep command inside the buildspec.yml file"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "Configuring an SNS notification topic and manual approval action in CodePipeline to pause production deployments until approved by authorized leads. Understanding these SDLC patterns is central to passing the AWS Certified DevOps Engineer - Professional exam.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "CI/CD"
    ]
  },
  {
    "id": "aws-dop-12",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Automation: CodeDeploy Traffic Shifting with Canary",
    "scenario": "An enterprise cloud engineering team is architecting automated continuous integration and delivery pipelines for codedeploy traffic shifting with canary.",
    "question": "Which configuration or architectural pattern satisfies these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Canary10Percent10Minutes deployment configuration using an ALB listener rule"
      },
      {
        "id": "B",
        "text": "AllAtOnce deployment configuration bypassing ALB health checks"
      },
      {
        "id": "C",
        "text": "Manual ECS service replica updates using the AWS CLI"
      },
      {
        "id": "D",
        "text": "Route 53 round-robin DNS records configured with 0-second TTL"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Deploying a new ECS task set by routing 10% of traffic to the test target group for 10 minutes before routing 100% of production traffic. Understanding these SDLC patterns is central to passing the AWS Certified DevOps Engineer - Professional exam.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "CI/CD"
    ]
  },
  {
    "id": "aws-dop-13",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Automation: CodeBuild Batch Builds",
    "scenario": "An enterprise cloud engineering team is architecting automated continuous integration and delivery pipelines for codebuild batch builds.",
    "question": "Which configuration or architectural pattern satisfies these requirements?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeBuild batch build matrix configuration"
      },
      {
        "id": "B",
        "text": "Running tests sequentially on a single EC2 instance"
      },
      {
        "id": "C",
        "text": "Triggering Lambda functions with synchronous HTTP polling"
      },
      {
        "id": "D",
        "text": "Launching hundreds of independent CodePipeline pipelines manually"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Running parallel matrix test suites across multiple operating system architectures and language runtime versions simultaneously. Understanding these SDLC patterns is central to passing the AWS Certified DevOps Engineer - Professional exam.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "CI/CD"
    ]
  },
  {
    "id": "aws-dop-14",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Automation: CodeDeploy In-Place vs Blue/Green",
    "scenario": "An enterprise cloud engineering team is architecting automated continuous integration and delivery pipelines for codedeploy in-place vs blue/green.",
    "question": "Which configuration or architectural pattern satisfies these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Blue/green deployments permanently overwrite existing instances without replacement"
      },
      {
        "id": "B",
        "text": "Blue/green deployments provision new replacement instances and reroute traffic, enabling near-instant rollbacks"
      },
      {
        "id": "C",
        "text": "In-place deployments require zero downtime across all workloads"
      },
      {
        "id": "D",
        "text": "Both deployment types execute identical hardware replacement procedures"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "In-place deployments stop and update software directly on existing instances, whereas blue/green provisions replacement instances, verifies health, and reroutes traffic. Understanding these SDLC patterns is central to passing the AWS Certified DevOps Engineer - Professional exam.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "CI/CD"
    ]
  },
  {
    "id": "aws-dop-15",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Automation: Amazon ECR Image Vulnerability Scanning",
    "scenario": "An enterprise cloud engineering team is architecting automated continuous integration and delivery pipelines for amazon ecr image vulnerability scanning.",
    "question": "Which configuration or architectural pattern satisfies these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Manually inspecting container base layers via SSH terminal sessions"
      },
      {
        "id": "B",
        "text": "Running anti-virus software inside live production containers"
      },
      {
        "id": "C",
        "text": "Restricting container image sizes to under 50 megabytes"
      },
      {
        "id": "D",
        "text": "Enabling Amazon ECR enhanced scanning with continuous vulnerability assessments powered by Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "type": "single",
    "explanation": "Configuring enhanced scanning in Amazon ECR powered by Amazon Inspector to automatically scan container images for software vulnerabilities upon push. Understanding these SDLC patterns is central to passing the AWS Certified DevOps Engineer - Professional exam.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "CI/CD"
    ]
  },
  {
    "id": "aws-dop-16",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #1",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #1?",
    "options": [
      {
        "id": "A",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "B",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "C",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "D",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-17",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #2",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #2?",
    "options": [
      {
        "id": "A",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "B",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "C",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "D",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-18",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #3",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #3?",
    "options": [
      {
        "id": "A",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "B",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "C",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "D",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-19",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #4",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #4?",
    "options": [
      {
        "id": "A",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "B",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "C",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "D",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-20",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #5",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #5?",
    "options": [
      {
        "id": "A",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "B",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "C",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "D",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-21",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #6",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #6?",
    "options": [
      {
        "id": "A",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "B",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "C",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "D",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-22",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #7",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #7?",
    "options": [
      {
        "id": "A",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "B",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "C",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "D",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-23",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #8",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #8?",
    "options": [
      {
        "id": "A",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      },
      {
        "id": "B",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "C",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "D",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-24",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #9",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #9?",
    "options": [
      {
        "id": "A",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "B",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "C",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "D",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  },
  {
    "id": "aws-dop-25",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "domainName": "SDLC Automation",
    "title": "SDLC Pipeline Scenario #10",
    "scenario": "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    "question": "Which SDLC automation architecture best satisfies deployment scenario #10?",
    "options": [
      {
        "id": "A",
        "text": "Relying on scheduled off-peak batch scripts without automated health validation"
      },
      {
        "id": "B",
        "text": "Implementing AWS CodePipeline with cross-account IAM role assumption, customer-managed KMS encryption, and automated rollback alarms"
      },
      {
        "id": "C",
        "text": "Using manual FTP uploads to transfer build artifacts directly to production instances"
      },
      {
        "id": "D",
        "text": "Granting full administrator access to deployment scripts with unencrypted artifact storage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "type": "single",
    "explanation": "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    "referenceUrl": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    "tags": [
      "SDLC",
      "CodePipeline",
      "Best Practices"
    ]
  }
];

export default AWS_DOP_QUESTIONS_1;
