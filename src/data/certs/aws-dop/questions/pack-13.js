export const AWS_DOP_QUESTIONS_13 = [
  {
    id: "aws-dop-301",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Event-Driven Pipelines to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Triggering CodePipeline executions based on GitHub webhooks and AWS events via EventBridge is under consideration.",
    options: [
      { id: 'A', text: "Run a cron job polling the ECR repository API every 10 seconds from an EC2 instance." },
      { id: 'B', text: "Require developers to manually log in to the AWS Console and click 'Release change'." },
      { id: 'C', text: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline." },
      { id: 'D', text: "Disable automated triggers and run deployments on a fixed monthly schedule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines", "EventBridge CI/CD", "Dr Failover"]
  },
  {
    id: "aws-dop-302",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Event-Driven Pipelines to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Triggering CodePipeline executions based on GitHub webhooks and AWS events via EventBridge is under consideration.",
    options: [
      { id: 'A', text: "Run a cron job polling the ECR repository API every 10 seconds from an EC2 instance." },
      { id: 'B', text: "Require developers to manually log in to the AWS Console and click 'Release change'." },
      { id: 'C', text: "Disable automated triggers and run deployments on a fixed monthly schedule." },
      { id: 'D', text: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines", "EventBridge CI/CD", "High Load Scale"]
  },
  {
    id: "aws-dop-303",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Event-Driven Pipelines to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which solution implements these mandatory compliance and security controls? Triggering CodePipeline executions based on GitHub webhooks and AWS events via EventBridge is under consideration.",
    options: [
      { id: 'A', text: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline." },
      { id: 'B', text: "Disable automated triggers and run deployments on a fixed monthly schedule." },
      { id: 'C', text: "Run a cron job polling the ECR repository API every 10 seconds from an EC2 instance." },
      { id: 'D', text: "Require developers to manually log in to the AWS Console and click 'Release change'." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines", "EventBridge CI/CD", "Security Compliance"]
  },
  {
    id: "aws-dop-304",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Event-Driven Pipelines to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Triggering CodePipeline executions based on GitHub webhooks and AWS events via EventBridge is under consideration.",
    options: [
      { id: 'A', text: "Require developers to manually log in to the AWS Console and click 'Release change'." },
      { id: 'B', text: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline." },
      { id: 'C', text: "Run a cron job polling the ECR repository API every 10 seconds from an EC2 instance." },
      { id: 'D', text: "Disable automated triggers and run deployments on a fixed monthly schedule." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines", "EventBridge CI/CD", "Hybrid Migration"]
  },
  {
    id: "aws-dop-305",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Event-Driven Pipelines to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Triggering CodePipeline executions based on GitHub webhooks and AWS events via EventBridge is under consideration.",
    options: [
      { id: 'A', text: "Run a cron job polling the ECR repository API every 10 seconds from an EC2 instance." },
      { id: 'B', text: "Disable automated triggers and run deployments on a fixed monthly schedule." },
      { id: 'C', text: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline." },
      { id: 'D', text: "Require developers to manually log in to the AWS Console and click 'Release change'." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines", "EventBridge CI/CD", "Resilience Failure"]
  },
  {
    id: "aws-dop-306",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates CloudFormation StackSets to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Deploying infrastructure across multiple accounts and regions with AWS Organizations is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Python script that runs raw AWS CLI commands sequentially over SSH." },
      { id: 'B', text: "Log in to each AWS account manually and deploy individual CloudFormation stacks via the console." },
      { id: 'C', text: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts." },
      { id: 'D', text: "Share the root account credentials with all member accounts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets", "StackSets", "Dr Failover"]
  },
  {
    id: "aws-dop-307",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates CloudFormation StackSets to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Deploying infrastructure across multiple accounts and regions with AWS Organizations is under consideration.",
    options: [
      { id: 'A', text: "Log in to each AWS account manually and deploy individual CloudFormation stacks via the console." },
      { id: 'B', text: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts." },
      { id: 'C', text: "Share the root account credentials with all member accounts." },
      { id: 'D', text: "Write a custom Python script that runs raw AWS CLI commands sequentially over SSH." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets", "StackSets", "High Load Scale"]
  },
  {
    id: "aws-dop-308",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates CloudFormation StackSets to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which solution implements these mandatory compliance and security controls? Deploying infrastructure across multiple accounts and regions with AWS Organizations is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Python script that runs raw AWS CLI commands sequentially over SSH." },
      { id: 'B', text: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts." },
      { id: 'C', text: "Share the root account credentials with all member accounts." },
      { id: 'D', text: "Log in to each AWS account manually and deploy individual CloudFormation stacks via the console." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets", "StackSets", "Security Compliance"]
  },
  {
    id: "aws-dop-309",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates CloudFormation StackSets to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Deploying infrastructure across multiple accounts and regions with AWS Organizations is under consideration.",
    options: [
      { id: 'A', text: "Log in to each AWS account manually and deploy individual CloudFormation stacks via the console." },
      { id: 'B', text: "Write a custom Python script that runs raw AWS CLI commands sequentially over SSH." },
      { id: 'C', text: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts." },
      { id: 'D', text: "Share the root account credentials with all member accounts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets", "StackSets", "Hybrid Migration"]
  },
  {
    id: "aws-dop-310",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates CloudFormation StackSets to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Deploying infrastructure across multiple accounts and regions with AWS Organizations is under consideration.",
    options: [
      { id: 'A', text: "Share the root account credentials with all member accounts." },
      { id: 'B', text: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts." },
      { id: 'C', text: "Log in to each AWS account manually and deploy individual CloudFormation stacks via the console." },
      { id: 'D', text: "Write a custom Python script that runs raw AWS CLI commands sequentially over SSH." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets", "StackSets", "Resilience Failure"]
  },
  {
    id: "aws-dop-311",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Drift Detection to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Detecting out-of-band changes to CloudFormation resources and remediating drift is under consideration.",
    options: [
      { id: 'A', text: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment." },
      { id: 'B', text: "Delete the entire CloudFormation stack and rebuild infrastructure from scratch." },
      { id: 'C', text: "Disable AWS CloudTrail logging to prevent tracking manual modifications." },
      { id: 'D', text: "Assume CloudFormation automatically prevents all manual console alterations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection", "Drift Detection", "Dr Failover"]
  },
  {
    id: "aws-dop-312",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Drift Detection to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Detecting out-of-band changes to CloudFormation resources and remediating drift is under consideration.",
    options: [
      { id: 'A', text: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment." },
      { id: 'B', text: "Disable AWS CloudTrail logging to prevent tracking manual modifications." },
      { id: 'C', text: "Delete the entire CloudFormation stack and rebuild infrastructure from scratch." },
      { id: 'D', text: "Assume CloudFormation automatically prevents all manual console alterations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection", "Drift Detection", "High Load Scale"]
  },
  {
    id: "aws-dop-313",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Drift Detection to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which solution implements these mandatory compliance and security controls? Detecting out-of-band changes to CloudFormation resources and remediating drift is under consideration.",
    options: [
      { id: 'A', text: "Assume CloudFormation automatically prevents all manual console alterations." },
      { id: 'B', text: "Disable AWS CloudTrail logging to prevent tracking manual modifications." },
      { id: 'C', text: "Delete the entire CloudFormation stack and rebuild infrastructure from scratch." },
      { id: 'D', text: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection", "Drift Detection", "Security Compliance"]
  },
  {
    id: "aws-dop-314",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Drift Detection to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Detecting out-of-band changes to CloudFormation resources and remediating drift is under consideration.",
    options: [
      { id: 'A', text: "Delete the entire CloudFormation stack and rebuild infrastructure from scratch." },
      { id: 'B', text: "Assume CloudFormation automatically prevents all manual console alterations." },
      { id: 'C', text: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment." },
      { id: 'D', text: "Disable AWS CloudTrail logging to prevent tracking manual modifications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection", "Drift Detection", "Hybrid Migration"]
  },
  {
    id: "aws-dop-315",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Drift Detection to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Detecting out-of-band changes to CloudFormation resources and remediating drift is under consideration.",
    options: [
      { id: 'A', text: "Assume CloudFormation automatically prevents all manual console alterations." },
      { id: 'B', text: "Disable AWS CloudTrail logging to prevent tracking manual modifications." },
      { id: 'C', text: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment." },
      { id: 'D', text: "Delete the entire CloudFormation stack and rebuild infrastructure from scratch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection", "Drift Detection", "Resilience Failure"]
  },
  {
    id: "aws-dop-316",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS CDK to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Defining cloud infrastructure using TypeScript/Python with constructs and synthesizers is under consideration.",
    options: [
      { id: 'A', text: "Write imperative shell scripts calling the AWS CLI." },
      { id: 'B', text: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`." },
      { id: 'C', text: "Avoid using infrastructure as code and configure resources via the AWS Console exclusively." },
      { id: 'D', text: "Hand-craft raw 10,000-line JSON CloudFormation templates without validation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK", "AWS CDK", "Dr Failover"]
  },
  {
    id: "aws-dop-317",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS CDK to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Defining cloud infrastructure using TypeScript/Python with constructs and synthesizers is under consideration.",
    options: [
      { id: 'A', text: "Avoid using infrastructure as code and configure resources via the AWS Console exclusively." },
      { id: 'B', text: "Write imperative shell scripts calling the AWS CLI." },
      { id: 'C', text: "Hand-craft raw 10,000-line JSON CloudFormation templates without validation." },
      { id: 'D', text: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK", "AWS CDK", "High Load Scale"]
  },
  {
    id: "aws-dop-318",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS CDK to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which solution implements these mandatory compliance and security controls? Defining cloud infrastructure using TypeScript/Python with constructs and synthesizers is under consideration.",
    options: [
      { id: 'A', text: "Write imperative shell scripts calling the AWS CLI." },
      { id: 'B', text: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`." },
      { id: 'C', text: "Hand-craft raw 10,000-line JSON CloudFormation templates without validation." },
      { id: 'D', text: "Avoid using infrastructure as code and configure resources via the AWS Console exclusively." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK", "AWS CDK", "Security Compliance"]
  },
  {
    id: "aws-dop-319",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS CDK to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Defining cloud infrastructure using TypeScript/Python with constructs and synthesizers is under consideration.",
    options: [
      { id: 'A', text: "Hand-craft raw 10,000-line JSON CloudFormation templates without validation." },
      { id: 'B', text: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`." },
      { id: 'C', text: "Avoid using infrastructure as code and configure resources via the AWS Console exclusively." },
      { id: 'D', text: "Write imperative shell scripts calling the AWS CLI." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK", "AWS CDK", "Hybrid Migration"]
  },
  {
    id: "aws-dop-320",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS CDK to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Defining cloud infrastructure using TypeScript/Python with constructs and synthesizers is under consideration.",
    options: [
      { id: 'A', text: "Avoid using infrastructure as code and configure resources via the AWS Console exclusively." },
      { id: 'B', text: "Hand-craft raw 10,000-line JSON CloudFormation templates without validation." },
      { id: 'C', text: "Write imperative shell scripts calling the AWS CLI." },
      { id: 'D', text: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK", "AWS CDK", "Resilience Failure"]
  },
  {
    id: "aws-dop-321",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates SSM State Manager to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Enforcing continuous OS configuration baselines and patch levels across EC2 fleets is under consideration.",
    options: [
      { id: 'A', text: "Rebuild the entire Auto Scaling group every 30 minutes to apply updates." },
      { id: 'B', text: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule." },
      { id: 'C', text: "SSH into each instance nightly and execute bash update commands manually." },
      { id: 'D', text: "Rely on EC2 user-data scripts that only execute once during initial instance launch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager", "SSM State Manager", "Dr Failover"]
  },
  {
    id: "aws-dop-322",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates SSM State Manager to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Enforcing continuous OS configuration baselines and patch levels across EC2 fleets is under consideration.",
    options: [
      { id: 'A', text: "Rebuild the entire Auto Scaling group every 30 minutes to apply updates." },
      { id: 'B', text: "SSH into each instance nightly and execute bash update commands manually." },
      { id: 'C', text: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule." },
      { id: 'D', text: "Rely on EC2 user-data scripts that only execute once during initial instance launch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager", "SSM State Manager", "High Load Scale"]
  },
  {
    id: "aws-dop-323",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates SSM State Manager to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which solution implements these mandatory compliance and security controls? Enforcing continuous OS configuration baselines and patch levels across EC2 fleets is under consideration.",
    options: [
      { id: 'A', text: "Rely on EC2 user-data scripts that only execute once during initial instance launch." },
      { id: 'B', text: "Rebuild the entire Auto Scaling group every 30 minutes to apply updates." },
      { id: 'C', text: "SSH into each instance nightly and execute bash update commands manually." },
      { id: 'D', text: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager", "SSM State Manager", "Security Compliance"]
  },
  {
    id: "aws-dop-324",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates SSM State Manager to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Enforcing continuous OS configuration baselines and patch levels across EC2 fleets is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule." },
      { id: 'B', text: "SSH into each instance nightly and execute bash update commands manually." },
      { id: 'C', text: "Rebuild the entire Auto Scaling group every 30 minutes to apply updates." },
      { id: 'D', text: "Rely on EC2 user-data scripts that only execute once during initial instance launch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager", "SSM State Manager", "Hybrid Migration"]
  },
  {
    id: "aws-dop-325",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates SSM State Manager to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Enforcing continuous OS configuration baselines and patch levels across EC2 fleets is under consideration.",
    options: [
      { id: 'A', text: "SSH into each instance nightly and execute bash update commands manually." },
      { id: 'B', text: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule." },
      { id: 'C', text: "Rebuild the entire Auto Scaling group every 30 minutes to apply updates." },
      { id: 'D', text: "Rely on EC2 user-data scripts that only execute once during initial instance launch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager", "SSM State Manager", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_13;
