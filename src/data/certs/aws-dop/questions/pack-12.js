export const AWS_DOP_QUESTIONS_12 = [
  {
    id: "aws-dop-276",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Database Delivery to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Decoupling database schema migrations with AWS Step Functions and CodePipeline is under consideration.",
    options: [
      { id: 'A', text: "Run SQL alter statements directly on the production database master during peak traffic." },
      { id: 'B', text: "Never alter database schemas to avoid breaking running applications." },
      { id: 'C', text: "Shut down all application servers for 6 hours while executing manual migration scripts." },
      { id: 'D', text: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery", "Database Delivery", "Dr Failover"]
  },
  {
    id: "aws-dop-277",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Database Delivery to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Decoupling database schema migrations with AWS Step Functions and CodePipeline is under consideration.",
    options: [
      { id: 'A', text: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code." },
      { id: 'B', text: "Never alter database schemas to avoid breaking running applications." },
      { id: 'C', text: "Shut down all application servers for 6 hours while executing manual migration scripts." },
      { id: 'D', text: "Run SQL alter statements directly on the production database master during peak traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery", "Database Delivery", "High Load Scale"]
  },
  {
    id: "aws-dop-278",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Database Delivery to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which solution implements these mandatory compliance and security controls? Decoupling database schema migrations with AWS Step Functions and CodePipeline is under consideration.",
    options: [
      { id: 'A', text: "Run SQL alter statements directly on the production database master during peak traffic." },
      { id: 'B', text: "Shut down all application servers for 6 hours while executing manual migration scripts." },
      { id: 'C', text: "Never alter database schemas to avoid breaking running applications." },
      { id: 'D', text: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery", "Database Delivery", "Security Compliance"]
  },
  {
    id: "aws-dop-279",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Database Delivery to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Decoupling database schema migrations with AWS Step Functions and CodePipeline is under consideration.",
    options: [
      { id: 'A', text: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code." },
      { id: 'B', text: "Run SQL alter statements directly on the production database master during peak traffic." },
      { id: 'C', text: "Shut down all application servers for 6 hours while executing manual migration scripts." },
      { id: 'D', text: "Never alter database schemas to avoid breaking running applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery", "Database Delivery", "Hybrid Migration"]
  },
  {
    id: "aws-dop-280",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automating Database Migrations in CI/CD: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Database Delivery to execute relational database schema migrations automatically during deployment without causing downtime or query errors for active application instances.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Decoupling database schema migrations with AWS Step Functions and CodePipeline is under consideration.",
    options: [
      { id: 'A', text: "Run SQL alter statements directly on the production database master during peak traffic." },
      { id: 'B', text: "Never alter database schemas to avoid breaking running applications." },
      { id: 'C', text: "Shut down all application servers for 6 hours while executing manual migration scripts." },
      { id: 'D', text: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Trigger database migrations via an AWS Lambda function or AWS Step Functions state machine using the Expand/Contract (Parallel Run) pattern before routing traffic to new code. Database schema changes in continuous delivery require the Expand/Contract pattern. An AWS Lambda task or Step Functions workflow in the pipeline applies backward-compatible schema changes (Expand phase), allowing both old and new application versions to operate concurrently before traffic cutover.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-four-stage-pipeline.html",
    tags: ["Database Delivery", "Database Delivery", "Resilience Failure"]
  },
  {
    id: "aws-dop-281",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Automated Rollback to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Integrating CloudWatch composite alarms and synthetic canaries into deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach." },
      { id: 'B', text: "Rely on customer support ticket volume to decide whether to roll back." },
      { id: 'C', text: "Instruct on-call engineers to manually monitor dashboards and click cancel if errors occur." },
      { id: 'D', text: "Configure CloudWatch to shut down the AWS account if error rates rise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback", "Automated Rollback", "Dr Failover"]
  },
  {
    id: "aws-dop-282",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Automated Rollback to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Integrating CloudWatch composite alarms and synthetic canaries into deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Instruct on-call engineers to manually monitor dashboards and click cancel if errors occur." },
      { id: 'B', text: "Rely on customer support ticket volume to decide whether to roll back." },
      { id: 'C', text: "Configure CloudWatch to shut down the AWS account if error rates rise." },
      { id: 'D', text: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback", "Automated Rollback", "High Load Scale"]
  },
  {
    id: "aws-dop-283",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Automated Rollback to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which solution implements these mandatory compliance and security controls? Integrating CloudWatch composite alarms and synthetic canaries into deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach." },
      { id: 'B', text: "Instruct on-call engineers to manually monitor dashboards and click cancel if errors occur." },
      { id: 'C', text: "Configure CloudWatch to shut down the AWS account if error rates rise." },
      { id: 'D', text: "Rely on customer support ticket volume to decide whether to roll back." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback", "Automated Rollback", "Security Compliance"]
  },
  {
    id: "aws-dop-284",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Automated Rollback to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Integrating CloudWatch composite alarms and synthetic canaries into deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach." },
      { id: 'B', text: "Configure CloudWatch to shut down the AWS account if error rates rise." },
      { id: 'C', text: "Instruct on-call engineers to manually monitor dashboards and click cancel if errors occur." },
      { id: 'D', text: "Rely on customer support ticket volume to decide whether to roll back." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback", "Automated Rollback", "Hybrid Migration"]
  },
  {
    id: "aws-dop-285",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated Rollback on CloudWatch Alarms: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Automated Rollback to automatically halt and roll back an ongoing AWS CodeDeploy release if Amazon CloudWatch Synthetic Canaries detect increased 5xx errors or elevated latency.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Integrating CloudWatch composite alarms and synthetic canaries into deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Configure CloudWatch to shut down the AWS account if error rates rise." },
      { id: 'B', text: "Rely on customer support ticket volume to decide whether to roll back." },
      { id: 'C', text: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach." },
      { id: 'D', text: "Instruct on-call engineers to manually monitor dashboards and click cancel if errors occur." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Associate CloudWatch Alarms directly with the CodeDeploy Deployment Group configuration to trigger immediate automatic deployment rollback upon alarm breach. CodeDeploy supports automated rollbacks based on CloudWatch alarms. When specified alarms enter the `ALARM` state during a deployment or within an optional bake time post-deployment, CodeDeploy immediately halts traffic routing and restores the previous healthy revision.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html",
    tags: ["Automated Rollback", "Automated Rollback", "Resilience Failure"]
  },
  {
    id: "aws-dop-286",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Package Governance to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Publishing and consuming internal dependencies securely with AWS CodeArtifact is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies." },
      { id: 'B', text: "Instruct developers to download packages directly from untrusted personal GitHub repos." },
      { id: 'C', text: "Check raw third-party binary zip files directly into Git version control." },
      { id: 'D', text: "Store all software packages in an unauthenticated public Amazon S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance", "AWS CodeArtifact", "Dr Failover"]
  },
  {
    id: "aws-dop-287",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Package Governance to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Publishing and consuming internal dependencies securely with AWS CodeArtifact is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to download packages directly from untrusted personal GitHub repos." },
      { id: 'B', text: "Store all software packages in an unauthenticated public Amazon S3 bucket." },
      { id: 'C', text: "Check raw third-party binary zip files directly into Git version control." },
      { id: 'D', text: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance", "AWS CodeArtifact", "High Load Scale"]
  },
  {
    id: "aws-dop-288",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Package Governance to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which solution implements these mandatory compliance and security controls? Publishing and consuming internal dependencies securely with AWS CodeArtifact is under consideration.",
    options: [
      { id: 'A', text: "Store all software packages in an unauthenticated public Amazon S3 bucket." },
      { id: 'B', text: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies." },
      { id: 'C', text: "Instruct developers to download packages directly from untrusted personal GitHub repos." },
      { id: 'D', text: "Check raw third-party binary zip files directly into Git version control." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance", "AWS CodeArtifact", "Security Compliance"]
  },
  {
    id: "aws-dop-289",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Package Governance to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Publishing and consuming internal dependencies securely with AWS CodeArtifact is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to download packages directly from untrusted personal GitHub repos." },
      { id: 'B', text: "Store all software packages in an unauthenticated public Amazon S3 bucket." },
      { id: 'C', text: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies." },
      { id: 'D', text: "Check raw third-party binary zip files directly into Git version control." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance", "AWS CodeArtifact", "Hybrid Migration"]
  },
  {
    id: "aws-dop-290",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact for Secure Private Package Management: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Package Governance to manage internal software dependencies (npm, PyPI, Maven, NuGet) securely across multiple development accounts with upstream public repository caching.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Publishing and consuming internal dependencies securely with AWS CodeArtifact is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to download packages directly from untrusted personal GitHub repos." },
      { id: 'B', text: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies." },
      { id: 'C', text: "Store all software packages in an unauthenticated public Amazon S3 bucket." },
      { id: 'D', text: "Check raw third-party binary zip files directly into Git version control." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an AWS CodeArtifact domain and repository with external connections to public package managers and restrict access using repository resource policies. AWS CodeArtifact is a fully managed artifact repository service. It securely stores internal software packages and fetches dependencies from public registries (npm, PyPI, Maven) via external connections, caching them internally to protect against upstream outages or tampered dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["Package Governance", "AWS CodeArtifact", "Resilience Failure"]
  },
  {
    id: "aws-dop-291",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Progressive Delivery to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Decoupling deployment from feature release using AWS AppConfig feature flags is under consideration.",
    options: [
      { id: 'A', text: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms." },
      { id: 'B', text: "Deploy new code only to developer laptops and never release to production." },
      { id: 'C', text: "Use hardcoded boolean flags in code that require recompiling and redeploying the entire service." },
      { id: 'D', text: "Maintain separate Git branches for every experimental feature and merge only after 6 months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery", "Feature Flags", "Dr Failover"]
  },
  {
    id: "aws-dop-292",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Progressive Delivery to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Decoupling deployment from feature release using AWS AppConfig feature flags is under consideration.",
    options: [
      { id: 'A', text: "Deploy new code only to developer laptops and never release to production." },
      { id: 'B', text: "Maintain separate Git branches for every experimental feature and merge only after 6 months." },
      { id: 'C', text: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms." },
      { id: 'D', text: "Use hardcoded boolean flags in code that require recompiling and redeploying the entire service." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery", "Feature Flags", "High Load Scale"]
  },
  {
    id: "aws-dop-293",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Progressive Delivery to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which solution implements these mandatory compliance and security controls? Decoupling deployment from feature release using AWS AppConfig feature flags is under consideration.",
    options: [
      { id: 'A', text: "Use hardcoded boolean flags in code that require recompiling and redeploying the entire service." },
      { id: 'B', text: "Deploy new code only to developer laptops and never release to production." },
      { id: 'C', text: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms." },
      { id: 'D', text: "Maintain separate Git branches for every experimental feature and merge only after 6 months." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery", "Feature Flags", "Security Compliance"]
  },
  {
    id: "aws-dop-294",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Progressive Delivery to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Decoupling deployment from feature release using AWS AppConfig feature flags is under consideration.",
    options: [
      { id: 'A', text: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms." },
      { id: 'B', text: "Deploy new code only to developer laptops and never release to production." },
      { id: 'C', text: "Use hardcoded boolean flags in code that require recompiling and redeploying the entire service." },
      { id: 'D', text: "Maintain separate Git branches for every experimental feature and merge only after 6 months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery", "Feature Flags", "Hybrid Migration"]
  },
  {
    id: "aws-dop-295",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Feature Toggles and Progressive Delivery: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Progressive Delivery to deploy code to production continuously while keeping new, untested user features hidden until operational stability is verified across customer segments.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Decoupling deployment from feature release using AWS AppConfig feature flags is under consideration.",
    options: [
      { id: 'A', text: "Use hardcoded boolean flags in code that require recompiling and redeploying the entire service." },
      { id: 'B', text: "Maintain separate Git branches for every experimental feature and merge only after 6 months." },
      { id: 'C', text: "Deploy new code only to developer laptops and never release to production." },
      { id: 'D', text: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement feature flags using AWS AppConfig with gradual deployment strategies, validators, and automated rollbacks on CloudWatch alarms. AWS AppConfig feature flags decouple code deployment from feature release. Engineering teams can safely deploy dormant code to production, validate operational performance, and progressively enable features for specific user cohorts with automated rollbacks if alarms trigger.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-feature-flags.html",
    tags: ["Progressive Delivery", "Feature Flags", "Resilience Failure"]
  },
  {
    id: "aws-dop-296",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Golden Images to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Automated golden AMI creation and vulnerability testing with EC2 Image Builder is under consideration.",
    options: [
      { id: 'A', text: "Use unpatched public community AMIs from unknown publishers." },
      { id: 'B', text: "Run configuration management scripts on every instance launch via user-data, adding 20 minutes to boot time." },
      { id: 'C', text: "Launch an EC2 instance manually, apply patches by hand, create an AMI, and share it manually." },
      { id: 'D', text: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images", "EC2 Image Builder", "Dr Failover"]
  },
  {
    id: "aws-dop-297",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Golden Images to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Automated golden AMI creation and vulnerability testing with EC2 Image Builder is under consideration.",
    options: [
      { id: 'A', text: "Use unpatched public community AMIs from unknown publishers." },
      { id: 'B', text: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts." },
      { id: 'C', text: "Launch an EC2 instance manually, apply patches by hand, create an AMI, and share it manually." },
      { id: 'D', text: "Run configuration management scripts on every instance launch via user-data, adding 20 minutes to boot time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images", "EC2 Image Builder", "High Load Scale"]
  },
  {
    id: "aws-dop-298",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Golden Images to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which solution implements these mandatory compliance and security controls? Automated golden AMI creation and vulnerability testing with EC2 Image Builder is under consideration.",
    options: [
      { id: 'A', text: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts." },
      { id: 'B', text: "Run configuration management scripts on every instance launch via user-data, adding 20 minutes to boot time." },
      { id: 'C', text: "Launch an EC2 instance manually, apply patches by hand, create an AMI, and share it manually." },
      { id: 'D', text: "Use unpatched public community AMIs from unknown publishers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images", "EC2 Image Builder", "Security Compliance"]
  },
  {
    id: "aws-dop-299",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Golden Images to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated golden AMI creation and vulnerability testing with EC2 Image Builder is under consideration.",
    options: [
      { id: 'A', text: "Run configuration management scripts on every instance launch via user-data, adding 20 minutes to boot time." },
      { id: 'B', text: "Use unpatched public community AMIs from unknown publishers." },
      { id: 'C', text: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts." },
      { id: 'D', text: "Launch an EC2 instance manually, apply patches by hand, create an AMI, and share it manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images", "EC2 Image Builder", "Hybrid Migration"]
  },
  {
    id: "aws-dop-300",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated AMI Baking Pipelines with EC2 Image Builder: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Golden Images to automate the creation, security hardening, patching, and testing of golden Amazon Machine Images (AMIs) across multiple AWS regions and accounts.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Automated golden AMI creation and vulnerability testing with EC2 Image Builder is under consideration.",
    options: [
      { id: 'A', text: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts." },
      { id: 'B', text: "Run configuration management scripts on every instance launch via user-data, adding 20 minutes to boot time." },
      { id: 'C', text: "Launch an EC2 instance manually, apply patches by hand, create an AMI, and share it manually." },
      { id: 'D', text: "Use unpatched public community AMIs from unknown publishers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an EC2 Image Builder pipeline with build components (OS hardening, agent installation), test components, and distribution settings to target regions and accounts. EC2 Image Builder automates the creation, management, and deployment of customized, secure, and up-to-date server images. Pipelines execute build components, run automated validation tests, and distribute approved golden AMIs across multiple AWS regions and accounts seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["Golden Images", "EC2 Image Builder", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_12;
