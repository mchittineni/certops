export const AWS_DOP_QUESTIONS_11 = [
  {
    id: "aws-dop-251",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-Account CodePipeline Deployment: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS CodePipeline to deploy built application artifacts from a centralized DevOps tooling account into multiple workload accounts (staging, prod) securely.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? KMS Customer Managed Keys and cross-account IAM role assumption is under consideration.",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts." },
      { id: 'B', text: "Use default aws/s3 KMS encryption and grant public read access to the artifact bucket." },
      { id: 'C', text: "Copy artifacts manually via SCP across VPC peering connections." },
      { id: 'D', text: "Deploy independent standalone pipelines in each target account pulling from unauthenticated Git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts. Cross-account CodePipeline deployments require a KMS Customer Managed Key (CMK) because the default AWS-managed `aws/s3` key cannot be shared across AWS accounts. The pipeline assumes a role in each target account with permissions to read from S3 and decrypt artifacts using the CMK.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "Cross-Account CI/CD", "Dr Failover"]
  },
  {
    id: "aws-dop-252",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-Account CodePipeline Deployment: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS CodePipeline to deploy built application artifacts from a centralized DevOps tooling account into multiple workload accounts (staging, prod) securely.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? KMS Customer Managed Keys and cross-account IAM role assumption is under consideration.",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts." },
      { id: 'B', text: "Use default aws/s3 KMS encryption and grant public read access to the artifact bucket." },
      { id: 'C', text: "Copy artifacts manually via SCP across VPC peering connections." },
      { id: 'D', text: "Deploy independent standalone pipelines in each target account pulling from unauthenticated Git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts. Cross-account CodePipeline deployments require a KMS Customer Managed Key (CMK) because the default AWS-managed `aws/s3` key cannot be shared across AWS accounts. The pipeline assumes a role in each target account with permissions to read from S3 and decrypt artifacts using the CMK.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "Cross-Account CI/CD", "High Load Scale"]
  },
  {
    id: "aws-dop-253",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-Account CodePipeline Deployment: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS CodePipeline to deploy built application artifacts from a centralized DevOps tooling account into multiple workload accounts (staging, prod) securely.",
    question: "Which solution implements these mandatory compliance and security controls? KMS Customer Managed Keys and cross-account IAM role assumption is under consideration.",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts." },
      { id: 'B', text: "Use default aws/s3 KMS encryption and grant public read access to the artifact bucket." },
      { id: 'C', text: "Copy artifacts manually via SCP across VPC peering connections." },
      { id: 'D', text: "Deploy independent standalone pipelines in each target account pulling from unauthenticated Git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts. Cross-account CodePipeline deployments require a KMS Customer Managed Key (CMK) because the default AWS-managed `aws/s3` key cannot be shared across AWS accounts. The pipeline assumes a role in each target account with permissions to read from S3 and decrypt artifacts using the CMK.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "Cross-Account CI/CD", "Security Compliance"]
  },
  {
    id: "aws-dop-254",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-Account CodePipeline Deployment: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS CodePipeline to deploy built application artifacts from a centralized DevOps tooling account into multiple workload accounts (staging, prod) securely.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? KMS Customer Managed Keys and cross-account IAM role assumption is under consideration.",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts." },
      { id: 'B', text: "Use default aws/s3 KMS encryption and grant public read access to the artifact bucket." },
      { id: 'C', text: "Copy artifacts manually via SCP across VPC peering connections." },
      { id: 'D', text: "Deploy independent standalone pipelines in each target account pulling from unauthenticated Git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts. Cross-account CodePipeline deployments require a KMS Customer Managed Key (CMK) because the default AWS-managed `aws/s3` key cannot be shared across AWS accounts. The pipeline assumes a role in each target account with permissions to read from S3 and decrypt artifacts using the CMK.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "Cross-Account CI/CD", "Hybrid Migration"]
  },
  {
    id: "aws-dop-255",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-Account CodePipeline Deployment: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS CodePipeline to deploy built application artifacts from a centralized DevOps tooling account into multiple workload accounts (staging, prod) securely.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? KMS Customer Managed Keys and cross-account IAM role assumption is under consideration.",
    options: [
      { id: 'A', text: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts." },
      { id: 'B', text: "Use default aws/s3 KMS encryption and grant public read access to the artifact bucket." },
      { id: 'C', text: "Copy artifacts manually via SCP across VPC peering connections." },
      { id: 'D', text: "Deploy independent standalone pipelines in each target account pulling from unauthenticated Git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encrypt the S3 artifact bucket with an AWS KMS Customer Managed Key (CMK) granting decrypt permissions to workload account roles, and configure CodePipeline stages to assume deployment roles in target accounts. Cross-account CodePipeline deployments require a KMS Customer Managed Key (CMK) because the default AWS-managed `aws/s3` key cannot be shared across AWS accounts. The pipeline assumes a role in each target account with permissions to read from S3 and decrypt artifacts using the CMK.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-create-cross-account.html",
    tags: ["AWS CodePipeline", "Cross-Account CI/CD", "Resilience Failure"]
  },
  {
    id: "aws-dop-256",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Blue/Green Deployments for ECS: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS CodeDeploy to deploy containerized microservices to Amazon ECS with automated canary traffic routing and automated rollback on elevated CloudWatch alarm thresholds.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Canary and linear traffic shifting for Amazon ECS with CodeDeploy is under consideration.",
    options: [
      { id: 'A', text: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks." },
      { id: 'B', text: "Perform an in-place rolling update replacing all container tasks simultaneously." },
      { id: 'C', text: "Update the ECS task definition and reboot the EC2 container instances manually." },
      { id: 'D', text: "Deploy a secondary duplicate ECS cluster and update public Route 53 DNS records manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks. AWS CodeDeploy Blue/Green deployments for Amazon ECS utilize Application Load Balancer target groups to route traffic. Canary (e.g., 10% for 5 minutes) or linear shifting gradually shifts traffic, monitoring CloudWatch alarms to trigger instantaneous automated rollbacks if errors spike.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html",
    tags: ["AWS CodeDeploy", "ECS Blue/Green", "Dr Failover"]
  },
  {
    id: "aws-dop-257",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Blue/Green Deployments for ECS: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS CodeDeploy to deploy containerized microservices to Amazon ECS with automated canary traffic routing and automated rollback on elevated CloudWatch alarm thresholds.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Canary and linear traffic shifting for Amazon ECS with CodeDeploy is under consideration.",
    options: [
      { id: 'A', text: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks." },
      { id: 'B', text: "Perform an in-place rolling update replacing all container tasks simultaneously." },
      { id: 'C', text: "Update the ECS task definition and reboot the EC2 container instances manually." },
      { id: 'D', text: "Deploy a secondary duplicate ECS cluster and update public Route 53 DNS records manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks. AWS CodeDeploy Blue/Green deployments for Amazon ECS utilize Application Load Balancer target groups to route traffic. Canary (e.g., 10% for 5 minutes) or linear shifting gradually shifts traffic, monitoring CloudWatch alarms to trigger instantaneous automated rollbacks if errors spike.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html",
    tags: ["AWS CodeDeploy", "ECS Blue/Green", "High Load Scale"]
  },
  {
    id: "aws-dop-258",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Blue/Green Deployments for ECS: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS CodeDeploy to deploy containerized microservices to Amazon ECS with automated canary traffic routing and automated rollback on elevated CloudWatch alarm thresholds.",
    question: "Which solution implements these mandatory compliance and security controls? Canary and linear traffic shifting for Amazon ECS with CodeDeploy is under consideration.",
    options: [
      { id: 'A', text: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks." },
      { id: 'B', text: "Perform an in-place rolling update replacing all container tasks simultaneously." },
      { id: 'C', text: "Update the ECS task definition and reboot the EC2 container instances manually." },
      { id: 'D', text: "Deploy a secondary duplicate ECS cluster and update public Route 53 DNS records manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks. AWS CodeDeploy Blue/Green deployments for Amazon ECS utilize Application Load Balancer target groups to route traffic. Canary (e.g., 10% for 5 minutes) or linear shifting gradually shifts traffic, monitoring CloudWatch alarms to trigger instantaneous automated rollbacks if errors spike.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html",
    tags: ["AWS CodeDeploy", "ECS Blue/Green", "Security Compliance"]
  },
  {
    id: "aws-dop-259",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Blue/Green Deployments for ECS: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS CodeDeploy to deploy containerized microservices to Amazon ECS with automated canary traffic routing and automated rollback on elevated CloudWatch alarm thresholds.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Canary and linear traffic shifting for Amazon ECS with CodeDeploy is under consideration.",
    options: [
      { id: 'A', text: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks." },
      { id: 'B', text: "Perform an in-place rolling update replacing all container tasks simultaneously." },
      { id: 'C', text: "Update the ECS task definition and reboot the EC2 container instances manually." },
      { id: 'D', text: "Deploy a secondary duplicate ECS cluster and update public Route 53 DNS records manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks. AWS CodeDeploy Blue/Green deployments for Amazon ECS utilize Application Load Balancer target groups to route traffic. Canary (e.g., 10% for 5 minutes) or linear shifting gradually shifts traffic, monitoring CloudWatch alarms to trigger instantaneous automated rollbacks if errors spike.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html",
    tags: ["AWS CodeDeploy", "ECS Blue/Green", "Hybrid Migration"]
  },
  {
    id: "aws-dop-260",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Blue/Green Deployments for ECS: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS CodeDeploy to deploy containerized microservices to Amazon ECS with automated canary traffic routing and automated rollback on elevated CloudWatch alarm thresholds.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Canary and linear traffic shifting for Amazon ECS with CodeDeploy is under consideration.",
    options: [
      { id: 'A', text: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks." },
      { id: 'B', text: "Perform an in-place rolling update replacing all container tasks simultaneously." },
      { id: 'C', text: "Update the ECS task definition and reboot the EC2 container instances manually." },
      { id: 'D', text: "Deploy a secondary duplicate ECS cluster and update public Route 53 DNS records manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an ECS Blue/Green deployment using AWS CodeDeploy with a canary traffic-shifting routing preference (e.g., CodeDeployDefault.ECSCanary10Percent5Minutes) and CloudWatch alarm rollbacks. AWS CodeDeploy Blue/Green deployments for Amazon ECS utilize Application Load Balancer target groups to route traffic. Canary (e.g., 10% for 5 minutes) or linear shifting gradually shifts traffic, monitoring CloudWatch alarms to trigger instantaneous automated rollbacks if errors spike.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html",
    tags: ["AWS CodeDeploy", "ECS Blue/Green", "Resilience Failure"]
  },
  {
    id: "aws-dop-261",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Deployment Configurations for EC2/On-Premises: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS CodeDeploy to deploy an update across a fleet of 100 EC2 instances while ensuring that at least 85 instances remain active and serving traffic at all times during deployment.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Custom deployment configurations with minimum healthy hosts constraints is under consideration.",
    options: [
      { id: 'A', text: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`." },
      { id: 'B', text: "Use `CodeDeployDefault.AllAtOnce` deployment configuration." },
      { id: 'C', text: "Use `CodeDeployDefault.OneAtATime` which guarantees only 50% capacity." },
      { id: 'D', text: "Terminate 15 instances manually and launch 15 new instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`. AWS CodeDeploy allows authoring custom deployment configurations where `MinimumHealthyHosts` can be specified as a percentage or absolute count. Setting `FLEET_PERCENT: 85` guarantees CodeDeploy upgrades instances in batches that never drop active serving capacity below 85%.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "Deployment Configurations", "Dr Failover"]
  },
  {
    id: "aws-dop-262",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Deployment Configurations for EC2/On-Premises: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS CodeDeploy to deploy an update across a fleet of 100 EC2 instances while ensuring that at least 85 instances remain active and serving traffic at all times during deployment.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Custom deployment configurations with minimum healthy hosts constraints is under consideration.",
    options: [
      { id: 'A', text: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`." },
      { id: 'B', text: "Use `CodeDeployDefault.AllAtOnce` deployment configuration." },
      { id: 'C', text: "Use `CodeDeployDefault.OneAtATime` which guarantees only 50% capacity." },
      { id: 'D', text: "Terminate 15 instances manually and launch 15 new instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`. AWS CodeDeploy allows authoring custom deployment configurations where `MinimumHealthyHosts` can be specified as a percentage or absolute count. Setting `FLEET_PERCENT: 85` guarantees CodeDeploy upgrades instances in batches that never drop active serving capacity below 85%.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "Deployment Configurations", "High Load Scale"]
  },
  {
    id: "aws-dop-263",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Deployment Configurations for EC2/On-Premises: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS CodeDeploy to deploy an update across a fleet of 100 EC2 instances while ensuring that at least 85 instances remain active and serving traffic at all times during deployment.",
    question: "Which solution implements these mandatory compliance and security controls? Custom deployment configurations with minimum healthy hosts constraints is under consideration.",
    options: [
      { id: 'A', text: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`." },
      { id: 'B', text: "Use `CodeDeployDefault.AllAtOnce` deployment configuration." },
      { id: 'C', text: "Use `CodeDeployDefault.OneAtATime` which guarantees only 50% capacity." },
      { id: 'D', text: "Terminate 15 instances manually and launch 15 new instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`. AWS CodeDeploy allows authoring custom deployment configurations where `MinimumHealthyHosts` can be specified as a percentage or absolute count. Setting `FLEET_PERCENT: 85` guarantees CodeDeploy upgrades instances in batches that never drop active serving capacity below 85%.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "Deployment Configurations", "Security Compliance"]
  },
  {
    id: "aws-dop-264",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Deployment Configurations for EC2/On-Premises: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS CodeDeploy to deploy an update across a fleet of 100 EC2 instances while ensuring that at least 85 instances remain active and serving traffic at all times during deployment.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Custom deployment configurations with minimum healthy hosts constraints is under consideration.",
    options: [
      { id: 'A', text: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`." },
      { id: 'B', text: "Use `CodeDeployDefault.AllAtOnce` deployment configuration." },
      { id: 'C', text: "Use `CodeDeployDefault.OneAtATime` which guarantees only 50% capacity." },
      { id: 'D', text: "Terminate 15 instances manually and launch 15 new instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`. AWS CodeDeploy allows authoring custom deployment configurations where `MinimumHealthyHosts` can be specified as a percentage or absolute count. Setting `FLEET_PERCENT: 85` guarantees CodeDeploy upgrades instances in batches that never drop active serving capacity below 85%.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "Deployment Configurations", "Hybrid Migration"]
  },
  {
    id: "aws-dop-265",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeDeploy Deployment Configurations for EC2/On-Premises: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS CodeDeploy to deploy an update across a fleet of 100 EC2 instances while ensuring that at least 85 instances remain active and serving traffic at all times during deployment.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Custom deployment configurations with minimum healthy hosts constraints is under consideration.",
    options: [
      { id: 'A', text: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`." },
      { id: 'B', text: "Use `CodeDeployDefault.AllAtOnce` deployment configuration." },
      { id: 'C', text: "Use `CodeDeployDefault.OneAtATime` which guarantees only 50% capacity." },
      { id: 'D', text: "Terminate 15 instances manually and launch 15 new instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom CodeDeploy deployment configuration specifying `MinimumHealthyHosts` with type `FLEET_PERCENT` set to `85`. AWS CodeDeploy allows authoring custom deployment configurations where `MinimumHealthyHosts` can be specified as a percentage or absolute count. Setting `FLEET_PERCENT: 85` guarantees CodeDeploy upgrades instances in batches that never drop active serving capacity below 85%.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["AWS CodeDeploy", "Deployment Configurations", "Resilience Failure"]
  },
  {
    id: "aws-dop-266",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild Multi-Architecture and Caching Strategies: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS CodeBuild to reduce build duration for high-frequency container builds in AWS CodeBuild where downloading dependencies takes up 80% of build time.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Local Docker layer caching and S3 cache optimization in CodeBuild is under consideration.",
    options: [
      { id: 'A', text: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`." },
      { id: 'B', text: "Run CodeBuild with `--no-cache` on every single build to guarantee clean state." },
      { id: 'C', text: "Store dependencies on ephemeral EC2 instance store disks without cache configuration." },
      { id: 'D', text: "Download all dependencies over public Git repositories sequentially on every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`. AWS CodeBuild supports local caching (modes: `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_SOURCE_CACHE`, `LOCAL_CUSTOM_CACHE`) on the build host and remote Amazon S3 caching. Enabling Docker layer caching avoids rebuilding unchanged intermediate image layers, drastically cutting build duration.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["AWS CodeBuild", "CodeBuild Caching", "Dr Failover"]
  },
  {
    id: "aws-dop-267",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild Multi-Architecture and Caching Strategies: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS CodeBuild to reduce build duration for high-frequency container builds in AWS CodeBuild where downloading dependencies takes up 80% of build time.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Local Docker layer caching and S3 cache optimization in CodeBuild is under consideration.",
    options: [
      { id: 'A', text: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`." },
      { id: 'B', text: "Run CodeBuild with `--no-cache` on every single build to guarantee clean state." },
      { id: 'C', text: "Store dependencies on ephemeral EC2 instance store disks without cache configuration." },
      { id: 'D', text: "Download all dependencies over public Git repositories sequentially on every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`. AWS CodeBuild supports local caching (modes: `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_SOURCE_CACHE`, `LOCAL_CUSTOM_CACHE`) on the build host and remote Amazon S3 caching. Enabling Docker layer caching avoids rebuilding unchanged intermediate image layers, drastically cutting build duration.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["AWS CodeBuild", "CodeBuild Caching", "High Load Scale"]
  },
  {
    id: "aws-dop-268",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild Multi-Architecture and Caching Strategies: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS CodeBuild to reduce build duration for high-frequency container builds in AWS CodeBuild where downloading dependencies takes up 80% of build time.",
    question: "Which solution implements these mandatory compliance and security controls? Local Docker layer caching and S3 cache optimization in CodeBuild is under consideration.",
    options: [
      { id: 'A', text: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`." },
      { id: 'B', text: "Run CodeBuild with `--no-cache` on every single build to guarantee clean state." },
      { id: 'C', text: "Store dependencies on ephemeral EC2 instance store disks without cache configuration." },
      { id: 'D', text: "Download all dependencies over public Git repositories sequentially on every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`. AWS CodeBuild supports local caching (modes: `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_SOURCE_CACHE`, `LOCAL_CUSTOM_CACHE`) on the build host and remote Amazon S3 caching. Enabling Docker layer caching avoids rebuilding unchanged intermediate image layers, drastically cutting build duration.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["AWS CodeBuild", "CodeBuild Caching", "Security Compliance"]
  },
  {
    id: "aws-dop-269",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild Multi-Architecture and Caching Strategies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS CodeBuild to reduce build duration for high-frequency container builds in AWS CodeBuild where downloading dependencies takes up 80% of build time.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Local Docker layer caching and S3 cache optimization in CodeBuild is under consideration.",
    options: [
      { id: 'A', text: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`." },
      { id: 'B', text: "Run CodeBuild with `--no-cache` on every single build to guarantee clean state." },
      { id: 'C', text: "Store dependencies on ephemeral EC2 instance store disks without cache configuration." },
      { id: 'D', text: "Download all dependencies over public Git repositories sequentially on every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`. AWS CodeBuild supports local caching (modes: `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_SOURCE_CACHE`, `LOCAL_CUSTOM_CACHE`) on the build host and remote Amazon S3 caching. Enabling Docker layer caching avoids rebuilding unchanged intermediate image layers, drastically cutting build duration.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["AWS CodeBuild", "CodeBuild Caching", "Hybrid Migration"]
  },
  {
    id: "aws-dop-270",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild Multi-Architecture and Caching Strategies: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS CodeBuild to reduce build duration for high-frequency container builds in AWS CodeBuild where downloading dependencies takes up 80% of build time.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Local Docker layer caching and S3 cache optimization in CodeBuild is under consideration.",
    options: [
      { id: 'A', text: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`." },
      { id: 'B', text: "Run CodeBuild with `--no-cache` on every single build to guarantee clean state." },
      { id: 'C', text: "Store dependencies on ephemeral EC2 instance store disks without cache configuration." },
      { id: 'D', text: "Download all dependencies over public Git repositories sequentially on every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CodeBuild local caching for Docker layers and source dependencies, or configure an Amazon S3 build cache in `buildspec.yml`. AWS CodeBuild supports local caching (modes: `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_SOURCE_CACHE`, `LOCAL_CUSTOM_CACHE`) on the build host and remote Amazon S3 caching. Enabling Docker layer caching avoids rebuilding unchanged intermediate image layers, drastically cutting build duration.",
    referenceUrl: "https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html",
    tags: ["AWS CodeBuild", "CodeBuild Caching", "Resilience Failure"]
  },
  {
    id: "aws-dop-271",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline Manual Approval Gates with SNS: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Pipeline Governance to enforce a requirement where production deployments in AWS CodePipeline must be explicitly reviewed and approved by an authorized release manager.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Manual approval actions linked to Amazon SNS topics and authorized IAM roles is under consideration.",
    options: [
      { id: 'A', text: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies." },
      { id: 'B', text: "Pause the pipeline by deleting the production deployment stage before every release." },
      { id: 'C', text: "Rely on verbal confirmation without recording the approver's identity in the pipeline history." },
      { id: 'D', text: "Use a sleep step of 24 hours in buildspec.yml to simulate an approval gate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies. CodePipeline includes native `Approval` action types. Configuring an approval action publishes a notification to an Amazon SNS topic (email/SMS/chat). Authorized users review artifacts and approve or reject via the AWS Console or API (`PutApprovalResult`), recording an immutable audit trail.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["Pipeline Governance", "Approval Gates", "Dr Failover"]
  },
  {
    id: "aws-dop-272",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline Manual Approval Gates with SNS: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Pipeline Governance to enforce a requirement where production deployments in AWS CodePipeline must be explicitly reviewed and approved by an authorized release manager.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Manual approval actions linked to Amazon SNS topics and authorized IAM roles is under consideration.",
    options: [
      { id: 'A', text: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies." },
      { id: 'B', text: "Pause the pipeline by deleting the production deployment stage before every release." },
      { id: 'C', text: "Rely on verbal confirmation without recording the approver's identity in the pipeline history." },
      { id: 'D', text: "Use a sleep step of 24 hours in buildspec.yml to simulate an approval gate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies. CodePipeline includes native `Approval` action types. Configuring an approval action publishes a notification to an Amazon SNS topic (email/SMS/chat). Authorized users review artifacts and approve or reject via the AWS Console or API (`PutApprovalResult`), recording an immutable audit trail.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["Pipeline Governance", "Approval Gates", "High Load Scale"]
  },
  {
    id: "aws-dop-273",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline Manual Approval Gates with SNS: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Pipeline Governance to enforce a requirement where production deployments in AWS CodePipeline must be explicitly reviewed and approved by an authorized release manager.",
    question: "Which solution implements these mandatory compliance and security controls? Manual approval actions linked to Amazon SNS topics and authorized IAM roles is under consideration.",
    options: [
      { id: 'A', text: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies." },
      { id: 'B', text: "Pause the pipeline by deleting the production deployment stage before every release." },
      { id: 'C', text: "Rely on verbal confirmation without recording the approver's identity in the pipeline history." },
      { id: 'D', text: "Use a sleep step of 24 hours in buildspec.yml to simulate an approval gate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies. CodePipeline includes native `Approval` action types. Configuring an approval action publishes a notification to an Amazon SNS topic (email/SMS/chat). Authorized users review artifacts and approve or reject via the AWS Console or API (`PutApprovalResult`), recording an immutable audit trail.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["Pipeline Governance", "Approval Gates", "Security Compliance"]
  },
  {
    id: "aws-dop-274",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline Manual Approval Gates with SNS: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Pipeline Governance to enforce a requirement where production deployments in AWS CodePipeline must be explicitly reviewed and approved by an authorized release manager.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Manual approval actions linked to Amazon SNS topics and authorized IAM roles is under consideration.",
    options: [
      { id: 'A', text: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies." },
      { id: 'B', text: "Pause the pipeline by deleting the production deployment stage before every release." },
      { id: 'C', text: "Rely on verbal confirmation without recording the approver's identity in the pipeline history." },
      { id: 'D', text: "Use a sleep step of 24 hours in buildspec.yml to simulate an approval gate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies. CodePipeline includes native `Approval` action types. Configuring an approval action publishes a notification to an Amazon SNS topic (email/SMS/chat). Authorized users review artifacts and approve or reject via the AWS Console or API (`PutApprovalResult`), recording an immutable audit trail.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["Pipeline Governance", "Approval Gates", "Hybrid Migration"]
  },
  {
    id: "aws-dop-275",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline Manual Approval Gates with SNS: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Pipeline Governance to enforce a requirement where production deployments in AWS CodePipeline must be explicitly reviewed and approved by an authorized release manager.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Manual approval actions linked to Amazon SNS topics and authorized IAM roles is under consideration.",
    options: [
      { id: 'A', text: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies." },
      { id: 'B', text: "Pause the pipeline by deleting the production deployment stage before every release." },
      { id: 'C', text: "Rely on verbal confirmation without recording the approver's identity in the pipeline history." },
      { id: 'D', text: "Use a sleep step of 24 hours in buildspec.yml to simulate an approval gate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Insert a Manual Approval stage in CodePipeline configured with an Amazon SNS notification topic, restricting approval permissions via IAM policies. CodePipeline includes native `Approval` action types. Configuring an approval action publishes a notification to an Amazon SNS topic (email/SMS/chat). Authorized users review artifacts and approve or reject via the AWS Console or API (`PutApprovalResult`), recording an immutable audit trail.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals.html",
    tags: ["Pipeline Governance", "Approval Gates", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_11;
