export const AWS_DOP_QUESTIONS_13 = [
  {
    id: "aws-dop-301",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CodePipeline source stage polling the ECR repository for a new tag." },
      { id: 'B', text: "An EventBridge rule on the ECR image action event, targeting the pipeline." },
      { id: 'C', text: "A scheduled pipeline execution that checks for a new image each hour." },
      { id: 'D', text: "A Lambda subscribed to the ECR event that copies the image onward." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines","EventBridge CI/CD","Dr Failover"]
  },
  {
    id: "aws-dop-302",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CodePipeline source stage polling the ECR repository for a new tag." },
      { id: 'B', text: "A Lambda subscribed to the ECR event that copies the image onward." },
      { id: 'C', text: "An EventBridge rule on the ECR image action event, targeting the pipeline." },
      { id: 'D', text: "A scheduled pipeline execution that checks for a new image each hour." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines","EventBridge CI/CD","High Load Scale"]
  },
  {
    id: "aws-dop-303",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "An EventBridge rule on the ECR image action event, targeting the pipeline." },
      { id: 'B', text: "A CodePipeline source stage polling the ECR repository for a new tag." },
      { id: 'C', text: "A Lambda subscribed to the ECR event that copies the image onward." },
      { id: 'D', text: "A scheduled pipeline execution that checks for a new image each hour." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines","EventBridge CI/CD","Security Compliance"]
  },
  {
    id: "aws-dop-304",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A scheduled pipeline execution that checks for a new image each hour." },
      { id: 'B', text: "A CodePipeline source stage polling the ECR repository for a new tag." },
      { id: 'C', text: "An EventBridge rule on the ECR image action event, targeting the pipeline." },
      { id: 'D', text: "A Lambda subscribed to the ECR event that copies the image onward." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines","EventBridge CI/CD","Hybrid Migration"]
  },
  {
    id: "aws-dop-305",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Event-Driven CI/CD with Amazon EventBridge: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to trigger an automated CodePipeline execution whenever a new container image is pushed to Amazon ECR or a release tag is created in GitHub.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A Lambda subscribed to the ECR event that copies the image onward." },
      { id: 'B', text: "A CodePipeline source stage polling the ECR repository for a new tag." },
      { id: 'C', text: "A scheduled pipeline execution that checks for a new image each hour." },
      { id: 'D', text: "An EventBridge rule on the ECR image action event, targeting the pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule that matches the ECR `Image Action` or GitHub webhook event and targets the CodePipeline pipeline. Amazon EventBridge receives real-time events from AWS services (like ECR image pushes or CodeCommit commits) and third-party SaaS providers (GitHub). EventBridge rules filter matching events and invoke target pipelines without polling, enabling instant, event-driven CI/CD execution.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/trigger-with-eventbridge.html",
    tags: ["Event-Driven Pipelines","EventBridge CI/CD","Resilience Failure"]
  },
  {
    id: "aws-dop-306",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CloudFormation StackSet with service-managed permissions, auto-deploying to new accounts." },
      { id: 'B', text: "A CloudFormation StackSet with self-managed permissions and an explicit account list." },
      { id: 'C', text: "A pipeline that assumes a role in each account and deploys the stack in turn." },
      { id: 'D', text: "An account factory customisation that applies the stack when an account is created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets","StackSets","Dr Failover"]
  },
  {
    id: "aws-dop-307",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CloudFormation StackSet with service-managed permissions, auto-deploying to new accounts." },
      { id: 'B', text: "A CloudFormation StackSet with self-managed permissions and an explicit account list." },
      { id: 'C', text: "A pipeline that assumes a role in each account and deploys the stack in turn." },
      { id: 'D', text: "An account factory customisation that applies the stack when an account is created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets","StackSets","High Load Scale"]
  },
  {
    id: "aws-dop-308",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "An account factory customisation that applies the stack when an account is created." },
      { id: 'B', text: "A pipeline that assumes a role in each account and deploys the stack in turn." },
      { id: 'C', text: "A CloudFormation StackSet with self-managed permissions and an explicit account list." },
      { id: 'D', text: "A CloudFormation StackSet with service-managed permissions, auto-deploying to new accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets","StackSets","Security Compliance"]
  },
  {
    id: "aws-dop-309",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A pipeline that assumes a role in each account and deploys the stack in turn." },
      { id: 'B', text: "A CloudFormation StackSet with service-managed permissions, auto-deploying to new accounts." },
      { id: 'C', text: "A CloudFormation StackSet with self-managed permissions and an explicit account list." },
      { id: 'D', text: "An account factory customisation that applies the stack when an account is created." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets","StackSets","Hybrid Migration"]
  },
  {
    id: "aws-dop-310",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CloudFormation StackSets across AWS Organizations: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to deploy centralized security tooling and IAM roles consistently across hundreds of member accounts in an AWS Organization with automatic deployment to new accounts.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A pipeline that assumes a role in each account and deploys the stack in turn." },
      { id: 'B', text: "An account factory customisation that applies the stack when an account is created." },
      { id: 'C', text: "A CloudFormation StackSet with service-managed permissions, auto-deploying to new accounts." },
      { id: 'D', text: "A CloudFormation StackSet with self-managed permissions and an explicit account list." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudFormation StackSet with service-managed permissions linked to the AWS Organizations root, enabling automatic StackSet deployments for newly created accounts. CloudFormation StackSets with service-managed permissions integrate natively with AWS Organizations. They deploy and manage stacks across multiple accounts and regions in a single operation, automatically provisioning baseline infrastructure when new accounts are added to an Organizational Unit (OU).",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate.html",
    tags: ["CloudFormation StackSets","StackSets","Resilience Failure"]
  },
  {
    id: "aws-dop-311",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Run CloudFormation drift detection, review the drifted properties, and update or import." },
      { id: 'B', text: "Delete the stack and redeploy the template so the resources match it again." },
      { id: 'C', text: "Enable a stack policy that denies updates to the resources being changed by hand." },
      { id: 'D', text: "Enable termination protection so console users cannot alter the stack's resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection","Drift Detection","Dr Failover"]
  },
  {
    id: "aws-dop-312",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Run CloudFormation drift detection, review the drifted properties, and update or import." },
      { id: 'B', text: "Delete the stack and redeploy the template so the resources match it again." },
      { id: 'C', text: "Enable a stack policy that denies updates to the resources being changed by hand." },
      { id: 'D', text: "Enable termination protection so console users cannot alter the stack's resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection","Drift Detection","High Load Scale"]
  },
  {
    id: "aws-dop-313",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Run CloudFormation drift detection, review the drifted properties, and update or import." },
      { id: 'B', text: "Delete the stack and redeploy the template so the resources match it again." },
      { id: 'C', text: "Enable a stack policy that denies updates to the resources being changed by hand." },
      { id: 'D', text: "Enable termination protection so console users cannot alter the stack's resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection","Drift Detection","Security Compliance"]
  },
  {
    id: "aws-dop-314",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable termination protection so console users cannot alter the stack's resources." },
      { id: 'B', text: "Enable a stack policy that denies updates to the resources being changed by hand." },
      { id: 'C', text: "Delete the stack and redeploy the template so the resources match it again." },
      { id: 'D', text: "Run CloudFormation drift detection, review the drifted properties, and update or import." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection","Drift Detection","Hybrid Migration"]
  },
  {
    id: "aws-dop-315",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation Drift Detection and Remediation: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to detect when an engineer has manually modified security group ingress rules or EC2 instance types outside of the approved CloudFormation template.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Delete the stack and redeploy the template so the resources match it again." },
      { id: 'B', text: "Run CloudFormation drift detection, review the drifted properties, and update or import." },
      { id: 'C', text: "Enable termination protection so console users cannot alter the stack's resources." },
      { id: 'D', text: "Enable a stack policy that denies updates to the resources being changed by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute CloudFormation Drift Detection on the stack, review drifted resource properties, and update the template or import resources to restore alignment. CloudFormation Drift Detection compares the expected template resource configurations against the actual live resource attributes in AWS. Identifying drifted resources enables teams to remediate discrepancies by either reverting manual changes or updating templates to reflect approved updates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["Drift Detection","Drift Detection","Resilience Failure"]
  },
  {
    id: "aws-dop-316",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Author the templates in raw CloudFormation YAML held in the repository." },
      { id: 'B', text: "Author the resources as CLI calls in a shell script run by the pipeline." },
      { id: 'C', text: "Author the stacks with the Serverless Application Model for every resource." },
      { id: 'D', text: "Author the infrastructure with the CDK and deploy the synthesised template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK","AWS CDK","Dr Failover"]
  },
  {
    id: "aws-dop-317",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Author the infrastructure with the CDK and deploy the synthesised template." },
      { id: 'B', text: "Author the stacks with the Serverless Application Model for every resource." },
      { id: 'C', text: "Author the resources as CLI calls in a shell script run by the pipeline." },
      { id: 'D', text: "Author the templates in raw CloudFormation YAML held in the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK","AWS CDK","High Load Scale"]
  },
  {
    id: "aws-dop-318",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Author the stacks with the Serverless Application Model for every resource." },
      { id: 'B', text: "Author the resources as CLI calls in a shell script run by the pipeline." },
      { id: 'C', text: "Author the infrastructure with the CDK and deploy the synthesised template." },
      { id: 'D', text: "Author the templates in raw CloudFormation YAML held in the repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK","AWS CDK","Security Compliance"]
  },
  {
    id: "aws-dop-319",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Author the infrastructure with the CDK and deploy the synthesised template." },
      { id: 'B', text: "Author the stacks with the Serverless Application Model for every resource." },
      { id: 'C', text: "Author the resources as CLI calls in a shell script run by the pipeline." },
      { id: 'D', text: "Author the templates in raw CloudFormation YAML held in the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK","AWS CDK","Hybrid Migration"]
  },
  {
    id: "aws-dop-320",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK for Programmatic Infrastructure: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to define and provision complex, reusable cloud architectures with built-in security defaults using familiar object-oriented programming languages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Author the infrastructure with the CDK and deploy the synthesised template." },
      { id: 'B', text: "Author the stacks with the Serverless Application Model for every resource." },
      { id: 'C', text: "Author the resources as CLI calls in a shell script run by the pipeline." },
      { id: 'D', text: "Author the templates in raw CloudFormation YAML held in the repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AWS Cloud Development Kit (CDK) to author infrastructure constructs, synthesize CloudFormation templates, and deploy via `cdk deploy`. The AWS CDK allows developers to define cloud infrastructure using expressive programming languages (TypeScript, Python, Go, Java). CDK compiles high-level abstractions (constructs) into robust, validated CloudFormation templates, providing reusability, compile-time typing, and unit testing.",
    referenceUrl: "https://docs.aws.amazon.com/cdk/v2/guide/home.html",
    tags: ["AWS CDK","AWS CDK","Resilience Failure"]
  },
  {
    id: "aws-dop-321",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A user-data script, which runs each time an instance is launched by the group." },
      { id: 'B', text: "An instance refresh on the Auto Scaling group, run on a nightly schedule." },
      { id: 'C', text: "A Run Command invocation targeting the same tag, started by a schedule." },
      { id: 'D', text: "A State Manager association targeting instances by tag on a recurring schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager","SSM State Manager","Dr Failover"]
  },
  {
    id: "aws-dop-322",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A user-data script, which runs each time an instance is launched by the group." },
      { id: 'B', text: "A State Manager association targeting instances by tag on a recurring schedule." },
      { id: 'C', text: "An instance refresh on the Auto Scaling group, run on a nightly schedule." },
      { id: 'D', text: "A Run Command invocation targeting the same tag, started by a schedule." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager","SSM State Manager","High Load Scale"]
  },
  {
    id: "aws-dop-323",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "An instance refresh on the Auto Scaling group, run on a nightly schedule." },
      { id: 'B', text: "A State Manager association targeting instances by tag on a recurring schedule." },
      { id: 'C', text: "A Run Command invocation targeting the same tag, started by a schedule." },
      { id: 'D', text: "A user-data script, which runs each time an instance is launched by the group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager","SSM State Manager","Security Compliance"]
  },
  {
    id: "aws-dop-324",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A State Manager association targeting instances by tag on a recurring schedule." },
      { id: 'B', text: "An instance refresh on the Auto Scaling group, run on a nightly schedule." },
      { id: 'C', text: "A user-data script, which runs each time an instance is launched by the group." },
      { id: 'D', text: "A Run Command invocation targeting the same tag, started by a schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager","SSM State Manager","Hybrid Migration"]
  },
  {
    id: "aws-dop-325",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS Systems Manager State Manager and Associations: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to guarantee that all EC2 instances in an Auto Scaling group maintain required security configurations, antivirus agents, and software versions continuously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "An instance refresh on the Auto Scaling group, run on a nightly schedule." },
      { id: 'B', text: "A Run Command invocation targeting the same tag, started by a schedule." },
      { id: 'C', text: "A user-data script, which runs each time an instance is launched by the group." },
      { id: 'D', text: "A State Manager association targeting instances by tag on a recurring schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS Systems Manager State Manager association targeting instances by tag, executing an SSM Document on a recurring schedule. Systems Manager State Manager automates the process of keeping managed instances in a defined state. Associations link SSM documents (e.g., software installation, security baselines) to target instances on a recurring cron schedule, automatically remediating configuration drift without downtime.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["SSM State Manager","SSM State Manager","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_13;
