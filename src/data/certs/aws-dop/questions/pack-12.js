export const AWS_DOP_QUESTIONS_12 = [
  {
    id: "aws-dop-276",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Run the migration as a CodeDeploy lifecycle hook after the new tasks have taken traffic." },
      { id: 'B', text: "Run the migration from Lambda with the expand/contract pattern before traffic shifts" },
      { id: 'C', text: "Run the migration in a maintenance window with the application stopped throughout." },
      { id: 'D', text: "Run the migration from the build stage so the schema is ready before deployment." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery","Database Delivery","Dr Failover"]
  },
  {
    id: "aws-dop-277",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Run the migration from Lambda with the expand/contract pattern before traffic shifts" },
      { id: 'B', text: "Run the migration from the build stage so the schema is ready before deployment." },
      { id: 'C', text: "Run the migration in a maintenance window with the application stopped throughout." },
      { id: 'D', text: "Run the migration as a CodeDeploy lifecycle hook after the new tasks have taken traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery","Database Delivery","High Load Scale"]
  },
  {
    id: "aws-dop-278",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Run the migration in a maintenance window with the application stopped throughout." },
      { id: 'B', text: "Run the migration as a CodeDeploy lifecycle hook after the new tasks have taken traffic." },
      { id: 'C', text: "Run the migration from Lambda with the expand/contract pattern before traffic shifts" },
      { id: 'D', text: "Run the migration from the build stage so the schema is ready before deployment." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery","Database Delivery","Security Compliance"]
  },
  {
    id: "aws-dop-279",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Run the migration from Lambda with the expand/contract pattern before traffic shifts" },
      { id: 'B', text: "Run the migration from the build stage so the schema is ready before deployment." },
      { id: 'C', text: "Run the migration in a maintenance window with the application stopped throughout." },
      { id: 'D', text: "Run the migration as a CodeDeploy lifecycle hook after the new tasks have taken traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery","Database Delivery","Hybrid Migration"]
  },
  {
    id: "aws-dop-280",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Run the migration as a CodeDeploy lifecycle hook after the new tasks have taken traffic." },
      { id: 'B', text: "Run the migration from Lambda with the expand/contract pattern before traffic shifts" },
      { id: 'C', text: "Run the migration in a maintenance window with the application stopped throughout." },
      { id: 'D', text: "Run the migration from the build stage so the schema is ready before deployment." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery","Database Delivery","Resilience Failure"]
  },
  {
    id: "aws-dop-281",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Attach the CloudWatch alarms to the CodeDeploy deployment group so a breach rolls back." },
      { id: 'B', text: "Attach the alarms to an SNS topic that pages the on-call engineer to roll back." },
      { id: 'C', text: "Attach the alarms to an EventBridge rule that stops the pipeline's next stage." },
      { id: 'D', text: "Attach the alarms to a dashboard that the release engineer watches throughout the deploy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback","Automated Rollback","Dr Failover"]
  },
  {
    id: "aws-dop-282",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Attach the alarms to an EventBridge rule that stops the pipeline's next stage." },
      { id: 'B', text: "Attach the CloudWatch alarms to the CodeDeploy deployment group so a breach rolls back." },
      { id: 'C', text: "Attach the alarms to an SNS topic that pages the on-call engineer to roll back." },
      { id: 'D', text: "Attach the alarms to a dashboard that the release engineer watches throughout the deploy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback","Automated Rollback","High Load Scale"]
  },
  {
    id: "aws-dop-283",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Attach the CloudWatch alarms to the CodeDeploy deployment group so a breach rolls back." },
      { id: 'B', text: "Attach the alarms to a dashboard that the release engineer watches throughout the deploy." },
      { id: 'C', text: "Attach the alarms to an SNS topic that pages the on-call engineer to roll back." },
      { id: 'D', text: "Attach the alarms to an EventBridge rule that stops the pipeline's next stage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback","Automated Rollback","Security Compliance"]
  },
  {
    id: "aws-dop-284",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Attach the CloudWatch alarms to the CodeDeploy deployment group so a breach rolls back." },
      { id: 'B', text: "Attach the alarms to a dashboard that the release engineer watches throughout the deploy." },
      { id: 'C', text: "Attach the alarms to an SNS topic that pages the on-call engineer to roll back." },
      { id: 'D', text: "Attach the alarms to an EventBridge rule that stops the pipeline's next stage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback","Automated Rollback","Hybrid Migration"]
  },
  {
    id: "aws-dop-285",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Attach the CloudWatch alarms to the CodeDeploy deployment group so a breach rolls back." },
      { id: 'B', text: "Attach the alarms to a dashboard that the release engineer watches throughout the deploy." },
      { id: 'C', text: "Attach the alarms to an SNS topic that pages the on-call engineer to roll back." },
      { id: 'D', text: "Attach the alarms to an EventBridge rule that stops the pipeline's next stage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback","Automated Rollback","Resilience Failure"]
  },
  {
    id: "aws-dop-286",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CodeArtifact domain and repository with upstream connections and resource policies." },
      { id: 'B', text: "An S3 bucket serving the packages, with a bucket policy limited to the build role only." },
      { id: 'C', text: "A private ECR registry holding the packages as OCI artifacts for the builds." },
      { id: 'D', text: "A vendored copy of each dependency committed into the application repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance","AWS CodeArtifact","Dr Failover"]
  },
  {
    id: "aws-dop-287",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CodeArtifact domain and repository with upstream connections and resource policies." },
      { id: 'B', text: "A vendored copy of each dependency committed into the application repository." },
      { id: 'C', text: "An S3 bucket serving the packages, with a bucket policy limited to the build role only." },
      { id: 'D', text: "A private ECR registry holding the packages as OCI artifacts for the builds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance","AWS CodeArtifact","High Load Scale"]
  },
  {
    id: "aws-dop-288",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A private ECR registry holding the packages as OCI artifacts for the builds." },
      { id: 'B', text: "An S3 bucket serving the packages, with a bucket policy limited to the build role only." },
      { id: 'C', text: "A vendored copy of each dependency committed into the application repository." },
      { id: 'D', text: "A CodeArtifact domain and repository with upstream connections and resource policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance","AWS CodeArtifact","Security Compliance"]
  },
  {
    id: "aws-dop-289",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A vendored copy of each dependency committed into the application repository." },
      { id: 'B', text: "A CodeArtifact domain and repository with upstream connections and resource policies." },
      { id: 'C', text: "A private ECR registry holding the packages as OCI artifacts for the builds." },
      { id: 'D', text: "An S3 bucket serving the packages, with a bucket policy limited to the build role only." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance","AWS CodeArtifact","Hybrid Migration"]
  },
  {
    id: "aws-dop-290",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A vendored copy of each dependency committed into the application repository." },
      { id: 'B', text: "A private ECR registry holding the packages as OCI artifacts for the builds." },
      { id: 'C', text: "An S3 bucket serving the packages, with a bucket policy limited to the build role only." },
      { id: 'D', text: "A CodeArtifact domain and repository with upstream connections and resource policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance","AWS CodeArtifact","Resilience Failure"]
  },
  {
    id: "aws-dop-291",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Feature flags in AppConfig, with a gradual deployment strategy and alarm rollback." },
      { id: 'B', text: "Feature flags held in Parameter Store, which the application reads on every start-up." },
      { id: 'C', text: "A separate branch per experiment, merged once the feature has been proven." },
      { id: 'D', text: "A weighted target group per version, shifted by the deployment pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery","Feature Flags","Dr Failover"]
  },
  {
    id: "aws-dop-292",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Feature flags in AppConfig, with a gradual deployment strategy and alarm rollback." },
      { id: 'B', text: "A separate branch per experiment, merged once the feature has been proven." },
      { id: 'C', text: "A weighted target group per version, shifted by the deployment pipeline." },
      { id: 'D', text: "Feature flags held in Parameter Store, which the application reads on every start-up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery","Feature Flags","High Load Scale"]
  },
  {
    id: "aws-dop-293",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A separate branch per experiment, merged once the feature has been proven." },
      { id: 'B', text: "Feature flags in AppConfig, with a gradual deployment strategy and alarm rollback." },
      { id: 'C', text: "Feature flags held in Parameter Store, which the application reads on every start-up." },
      { id: 'D', text: "A weighted target group per version, shifted by the deployment pipeline." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery","Feature Flags","Security Compliance"]
  },
  {
    id: "aws-dop-294",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Feature flags in AppConfig, with a gradual deployment strategy and alarm rollback." },
      { id: 'B', text: "Feature flags held in Parameter Store, which the application reads on every start-up." },
      { id: 'C', text: "A separate branch per experiment, merged once the feature has been proven." },
      { id: 'D', text: "A weighted target group per version, shifted by the deployment pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery","Feature Flags","Hybrid Migration"]
  },
  {
    id: "aws-dop-295",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Feature flags in AppConfig, with a gradual deployment strategy and alarm rollback." },
      { id: 'B', text: "A separate branch per experiment, merged once the feature has been proven." },
      { id: 'C', text: "A weighted target group per version, shifted by the deployment pipeline." },
      { id: 'D', text: "Feature flags held in Parameter Store, which the application reads on every start-up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery","Feature Flags","Resilience Failure"]
  },
  {
    id: "aws-dop-296",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "An EC2 Image Builder pipeline with build and test components and a distribution configuration." },
      { id: 'B', text: "A Packer build stage in the pipeline that produces the image and then copies it into every region." },
      { id: 'C', text: "A configuration management run from user-data on each instance as it launches." },
      { id: 'D', text: "A golden image built once per quarter and shared to the accounts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images","EC2 Image Builder","Dr Failover"]
  },
  {
    id: "aws-dop-297",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A configuration management run from user-data on each instance as it launches." },
      { id: 'B', text: "A golden image built once per quarter and shared to the accounts by hand." },
      { id: 'C', text: "An EC2 Image Builder pipeline with build and test components and a distribution configuration." },
      { id: 'D', text: "A Packer build stage in the pipeline that produces the image and then copies it into every region." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images","EC2 Image Builder","High Load Scale"]
  },
  {
    id: "aws-dop-298",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "An EC2 Image Builder pipeline with build and test components and a distribution configuration." },
      { id: 'B', text: "A Packer build stage in the pipeline that produces the image and then copies it into every region." },
      { id: 'C', text: "A configuration management run from user-data on each instance as it launches." },
      { id: 'D', text: "A golden image built once per quarter and shared to the accounts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images","EC2 Image Builder","Security Compliance"]
  },
  {
    id: "aws-dop-299",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "An EC2 Image Builder pipeline with build and test components and a distribution configuration." },
      { id: 'B', text: "A Packer build stage in the pipeline that produces the image and then copies it into every region." },
      { id: 'C', text: "A configuration management run from user-data on each instance as it launches." },
      { id: 'D', text: "A golden image built once per quarter and shared to the accounts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images","EC2 Image Builder","Hybrid Migration"]
  },
  {
    id: "aws-dop-300",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "An EC2 Image Builder pipeline with build and test components and a distribution configuration." },
      { id: 'B', text: "A Packer build stage in the pipeline that produces the image and then copies it into every region." },
      { id: 'C', text: "A configuration management run from user-data on each instance as it launches." },
      { id: 'D', text: "A golden image built once per quarter and shared to the accounts by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images","EC2 Image Builder","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_12;
