export const AWS_DOP_QUESTIONS_2 = [
  {
    id: "aws-dop-26",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #11",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #11?",
    options: [
      { id: 'A', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-27",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #12",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #12?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-28",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #13",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #13?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-29",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #14",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #14?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-30",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #15",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #15?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'C', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-31",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #16",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #16?",
    options: [
      { id: 'A', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-32",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #17",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #17?",
    options: [
      { id: 'A', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-33",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #18",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #18?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-34",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #19",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #19?",
    options: [
      { id: 'A', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-35",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #20",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #20?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-36",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #21",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #21?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-37",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #22",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #22?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-38",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #23",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #23?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'C', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-39",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #24",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #24?",
    options: [
      { id: 'A', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-40",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #25",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #25?",
    options: [
      { id: 'A', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-41",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #26",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #26?",
    options: [
      { id: 'A', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-42",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #27",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #27?",
    options: [
      { id: 'A', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'B', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'C', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-43",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #28",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #28?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-44",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #29",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #29?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-45",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #30",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #30?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-46",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #31",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #31?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'C', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'D', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-47",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #32",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #32?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-48",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #33",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #33?",
    options: [
      { id: 'A', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'B', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'C', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-49",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #34",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #34?",
    options: [
      { id: 'A', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" },
      { id: 'B', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'C', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'D', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  },
  {
    id: "aws-dop-50",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "SDLC Pipeline Scenario #35",
    scenario: "A DevOps team is standardizing multi-account delivery workflows, automated testing gates, and deployment policies for microservices.",
    question: "Which SDLC automation architecture best satisfies deployment scenario #35?",
    options: [
      { id: 'A', text: "CodeDeploy triggered from each account's own pipeline, with artifacts copied between buckets" },
      { id: 'B', text: "CodePipeline with a single-account role, the default S3 key, and a manual approval before deploy" },
      { id: 'C', text: "CodeBuild running the deploy commands directly, with credentials held in the build project" },
      { id: 'D', text: "CodePipeline with cross-account role assumption, a customer-managed KMS key, and rollback alarms" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS DevOps Professional best practices emphasize automated pipelines using cross-account IAM roles, KMS Customer Managed Keys, and CloudWatch alarm integration to ensure zero-downtime, secure, and auditable releases.",
    referenceUrl: "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html",
    tags: ["SDLC", "CodePipeline", "Best Practices"]
  }
];

export default AWS_DOP_QUESTIONS_2;
