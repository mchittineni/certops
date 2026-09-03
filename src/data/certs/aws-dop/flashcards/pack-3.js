export const AWS_DOP_FLASHCARDS_3 = [
  {
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Git Pull Request Automation: AWS CodeCommit / GitHub Webhooks with Lambda",
    "hint": "Enforcing PR validation checks, automated linting, and reviewer assignment.",
    "back": "Pull request events trigger EventBridge rules or webhooks that invoke a Lambda function. The function inspects the PR diff, triggers a CodeBuild validation matrix, posts automated lint/security scan comments to the PR conversation, and blocks merging if status checks fail.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-51"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Feature Toggles: Canary Testing vs. Kill Switches",
    "hint": "Gradual user onboarding vs. immediate blast-radius containment.",
    "back": "<strong>Canary Feature Toggles</strong> evaluate user context (e.g., user ID, tenant ID, or geolocation) to expose new features to 5% of users. <strong>Kill Switches</strong> provide an emergency operational lever in AWS AppConfig or DynamoDB to immediately disable a buggy feature system-wide in milliseconds without redeployment.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-52"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline CloudFormation StackSets Action: Multi-Account Rollouts",
    "hint": "Automating organizational infrastructure delivery with failure tolerance.",
    "back": "CodePipeline provides a native <strong>StackSets deploy action</strong> to deploy CloudFormation templates across hundreds of AWS accounts and regions in an AWS Organization. It supports parameters for <code>MaxConcurrentCount</code> and <code>FailureToleranceCount</code> to control rollout speed and abort on errors.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-53"
  },
  {
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "Secret Rotation in CI/CD: Dynamic IAM Roles vs. Static API Keys",
    "hint": "Eliminating hardcoded long-term credentials in delivery pipelines.",
    "back": "Never store static AWS credentials in CI/CD runners. Use <strong>IAM Roles with OpenID Connect (OIDC)</strong> for external runners (GitHub Actions, GitLab CI) or instance profiles for AWS CodeBuild. For third-party SaaS keys, use <strong>AWS Secrets Manager</strong> with automated Lambda rotation and fetch secrets dynamically at build/runtime.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-54"
  },
  {
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d1",
    "front": "CodePipeline S3 Source: Versioning vs. EventBridge Notification",
    "hint": "Mandatory bucket configuration for reliable artifact trigger detection.",
    "back": "When an S3 bucket is used as a CodePipeline source, <strong>Bucket Versioning MUST be enabled</strong> so that each new object version produces a unique artifact ID. Additionally, configure Amazon EventBridge notifications (Amazon S3 Event Notifications) rather than polling for immediate trigger latency.",
    "tags": [
      "DevOps",
      "CI/CD",
      "SDLC"
    ],
    "id": "aws-dop-fc-55"
  },
  {
    "id": "aws-dop-fc-56",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "CloudFormation Custom Resources with Lambda",
    "hint": "Handling third-party provisioning APIs declaratively.",
    "back": "An <strong>AWS::CloudFormation::CustomResource</strong> delegates provisioning to an AWS Lambda function. The function receives <code>RequestType</code> (Create, Update, Delete) and must post a JSON response containing <code>Status: SUCCESS/FAILED</code> to the pre-signed S3 URL using the <code>cfn-response</code> library.",
    "tags": [
      "CloudFormation",
      "Custom Resources",
      "Lambda"
    ]
  },
  {
    "id": "aws-dop-fc-57",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "CloudFormation StackSets: Self-Managed vs. Service-Managed",
    "hint": "Manual cross-account IAM roles vs. native AWS Organizations integration.",
    "back": "<strong>Self-Managed StackSets</strong> require creating manual <code>AWSCloudFormationStackSetAdministrationRole</code> and execution roles in each account. <strong>Service-Managed StackSets</strong> integrate natively with AWS Organizations, automatically deploying stacks to target Organizational Units (OUs) and auto-deploying to newly added accounts.",
    "tags": [
      "CloudFormation",
      "StackSets",
      "Organizations"
    ]
  },
  {
    "id": "aws-dop-fc-58",
    "difficulty": "easy",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "CloudFormation DeletionPolicy: Retain vs. Snapshot vs. Delete",
    "hint": "Preserving critical databases and storage upon stack teardown.",
    "back": "<code>DeletionPolicy: Retain</code> keeps the physical resource intact when its stack is deleted. <code>DeletionPolicy: Snapshot</code> creates an automated backup snapshot prior to deleting the resource (supported on RDS, EBS, Redshift, ElastiCache). <code>Delete</code> is the default behavior.",
    "tags": [
      "CloudFormation",
      "DeletionPolicy",
      "Safety"
    ]
  },
  {
    "id": "aws-dop-fc-59",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "CloudFormation Cross-Stack References vs. Nested Stacks",
    "hint": "Loose export/import coupling vs. tightly coupled parent-child templates.",
    "back": "<strong>Cross-Stack References</strong> use <code>Export</code> and <code>Fn::ImportValue</code> to share resource outputs (e.g. VPC ID) across independent stacks; the exporting stack cannot be modified if exports are in use. <strong>Nested Stacks</strong> use <code>AWS::CloudFormation::Stack</code> to decompose monolithic templates into manageable parent-child hierarchies that deploy as a single unit.",
    "tags": [
      "CloudFormation",
      "Nested Stacks",
      "Export"
    ]
  },
  {
    "id": "aws-dop-fc-60",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "Systems Manager State Manager vs. Run Command",
    "hint": "Continuous desired-state enforcement vs. one-time ad-hoc script execution.",
    "back": "<strong>State Manager</strong> continuously enforces configurations on EC2 instances and on-premises nodes using scheduled associations (e.g. ensuring security agents remain installed). <strong>Run Command</strong> executes immediate, one-off administrative scripts or commands across a fleet without maintaining state.",
    "tags": [
      "Systems Manager",
      "State Manager",
      "Run Command"
    ]
  },
  {
    "id": "aws-dop-fc-61",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "Systems Manager Parameter Store: Standard vs. Advanced Tiers",
    "hint": "10k free parameters (4 KB) vs. 100k parameters (8 KB) with policies.",
    "back": "<strong>Standard Tier</strong>: up to 10,000 parameters per account/region, 4 KB max size, free of charge. <strong>Advanced Tier</strong>: up to 100,000 parameters, 8 KB max size, supports parameter policies (expiration notifications, TTLs), billed per parameter-month and per API request.",
    "tags": [
      "Systems Manager",
      "Parameter Store",
      "Configuration"
    ]
  },
  {
    "id": "aws-dop-fc-62",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #1",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #1</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-63",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #2",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #2</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-64",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #3",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #3</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-65",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #4",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #4</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-66",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #5",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #5</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-67",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #6",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #6</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-68",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #7",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #7</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-69",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #8",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #8</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-70",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #9",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #9</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-71",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #10",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #10</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-72",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #11",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #11</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-73",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #12",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #12</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-74",
    "difficulty": "medium",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #13",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #13</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  },
  {
    "id": "aws-dop-fc-75",
    "difficulty": "hard",
    "certId": "aws-dop",
    "domainId": "d2",
    "front": "IaC & Configuration Pattern #14",
    "hint": "Core CloudFormation attribute, SSM policy, or drift management tool.",
    "back": "<strong>IaC & Configuration Pattern #14</strong> ensures reproducible, version-controlled infrastructure definitions, automated drift detection, and safe state management across enterprise cloud fleets.",
    "tags": [
      "CloudFormation",
      "Systems Manager",
      "IaC"
    ]
  }
];

export default AWS_DOP_FLASHCARDS_3;
