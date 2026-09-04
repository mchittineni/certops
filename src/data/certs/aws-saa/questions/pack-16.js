export const AWS_SAA_QUESTIONS_16 = [
  {
    id: "aws-saa-376",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "KMS Multi-Region Customer Managed Keys: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS KMS to encrypt data in one region and decrypt it in another region with identical key material and key ID without re-encrypting data across regional endpoints.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS KMS Multi-Region Customer Managed Keys (CMKs) is being evaluated.",
    options: [
      { id: 'A', text: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region." },
      { id: 'B', text: "Export the KMS key material and import it into an external HSM in the secondary region." },
      { id: 'C', text: "Configure an S3 Bucket Policy allowing cross-region principal access to the single-region KMS key." },
      { id: 'D', text: "Use AWS Certificate Manager to generate a shared regional public key certificate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region. KMS multi-Region keys are AWS KMS keys in different AWS Regions that have the same key material and key ID. They allow client applications to encrypt data in one region and decrypt it in another region locally without making cross-region network calls to KMS.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["AWS KMS", "KMS", "Dr Failover"]
  },
  {
    id: "aws-saa-377",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "KMS Multi-Region Customer Managed Keys: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS KMS to encrypt data in one region and decrypt it in another region with identical key material and key ID without re-encrypting data across regional endpoints.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS KMS Multi-Region Customer Managed Keys (CMKs) is being evaluated.",
    options: [
      { id: 'A', text: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region." },
      { id: 'B', text: "Export the KMS key material and import it into an external HSM in the secondary region." },
      { id: 'C', text: "Configure an S3 Bucket Policy allowing cross-region principal access to the single-region KMS key." },
      { id: 'D', text: "Use AWS Certificate Manager to generate a shared regional public key certificate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region. KMS multi-Region keys are AWS KMS keys in different AWS Regions that have the same key material and key ID. They allow client applications to encrypt data in one region and decrypt it in another region locally without making cross-region network calls to KMS.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["AWS KMS", "KMS", "High Load Scale"]
  },
  {
    id: "aws-saa-378",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "KMS Multi-Region Customer Managed Keys: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS KMS to encrypt data in one region and decrypt it in another region with identical key material and key ID without re-encrypting data across regional endpoints.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS KMS Multi-Region Customer Managed Keys (CMKs) is being evaluated.",
    options: [
      { id: 'A', text: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region." },
      { id: 'B', text: "Export the KMS key material and import it into an external HSM in the secondary region." },
      { id: 'C', text: "Configure an S3 Bucket Policy allowing cross-region principal access to the single-region KMS key." },
      { id: 'D', text: "Use AWS Certificate Manager to generate a shared regional public key certificate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region. KMS multi-Region keys are AWS KMS keys in different AWS Regions that have the same key material and key ID. They allow client applications to encrypt data in one region and decrypt it in another region locally without making cross-region network calls to KMS.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["AWS KMS", "KMS", "Security Compliance"]
  },
  {
    id: "aws-saa-379",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "KMS Multi-Region Customer Managed Keys: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS KMS to encrypt data in one region and decrypt it in another region with identical key material and key ID without re-encrypting data across regional endpoints.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS KMS Multi-Region Customer Managed Keys (CMKs) is being evaluated.",
    options: [
      { id: 'A', text: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region." },
      { id: 'B', text: "Export the KMS key material and import it into an external HSM in the secondary region." },
      { id: 'C', text: "Configure an S3 Bucket Policy allowing cross-region principal access to the single-region KMS key." },
      { id: 'D', text: "Use AWS Certificate Manager to generate a shared regional public key certificate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region. KMS multi-Region keys are AWS KMS keys in different AWS Regions that have the same key material and key ID. They allow client applications to encrypt data in one region and decrypt it in another region locally without making cross-region network calls to KMS.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["AWS KMS", "KMS", "Hybrid Migration"]
  },
  {
    id: "aws-saa-380",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "KMS Multi-Region Customer Managed Keys: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS KMS to encrypt data in one region and decrypt it in another region with identical key material and key ID without re-encrypting data across regional endpoints.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS KMS Multi-Region Customer Managed Keys (CMKs) is being evaluated.",
    options: [
      { id: 'A', text: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region." },
      { id: 'B', text: "Export the KMS key material and import it into an external HSM in the secondary region." },
      { id: 'C', text: "Configure an S3 Bucket Policy allowing cross-region principal access to the single-region KMS key." },
      { id: 'D', text: "Use AWS Certificate Manager to generate a shared regional public key certificate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a multi-Region primary key in the source region and replicate it as a multi-Region replica key to the destination region. KMS multi-Region keys are AWS KMS keys in different AWS Regions that have the same key material and key ID. They allow client applications to encrypt data in one region and decrypt it in another region locally without making cross-region network calls to KMS.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["AWS KMS", "KMS", "Resilience Failure"]
  },
  {
    id: "aws-saa-381",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Secrets Manager Automatic Rotation: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Secrets Manager to automatically rotate database administrative passwords every 30 days without application downtime or manual credential updates.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Secrets Manager automatic secret rotation with Lambda is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK." },
      { id: 'B', text: "Store the database password in an unencrypted environment variable in the EC2 instance user data." },
      { id: 'C', text: "Configure an AWS Systems Manager Parameter Store String parameter and update it manually every month." },
      { id: 'D', text: "Deploy an AWS Config rule to terminate instances that have credentials older than 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK. AWS Secrets Manager natively integrates with Amazon RDS to rotate database credentials automatically using an AWS Lambda function on a defined schedule (e.g. every 30 days), testing and updating both the database and the secret seamlessly without application downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Dr Failover"]
  },
  {
    id: "aws-saa-382",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Secrets Manager Automatic Rotation: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Secrets Manager to automatically rotate database administrative passwords every 30 days without application downtime or manual credential updates.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Secrets Manager automatic secret rotation with Lambda is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK." },
      { id: 'B', text: "Store the database password in an unencrypted environment variable in the EC2 instance user data." },
      { id: 'C', text: "Configure an AWS Systems Manager Parameter Store String parameter and update it manually every month." },
      { id: 'D', text: "Deploy an AWS Config rule to terminate instances that have credentials older than 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK. AWS Secrets Manager natively integrates with Amazon RDS to rotate database credentials automatically using an AWS Lambda function on a defined schedule (e.g. every 30 days), testing and updating both the database and the secret seamlessly without application downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "High Load Scale"]
  },
  {
    id: "aws-saa-383",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Secrets Manager Automatic Rotation: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Secrets Manager to automatically rotate database administrative passwords every 30 days without application downtime or manual credential updates.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Secrets Manager automatic secret rotation with Lambda is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK." },
      { id: 'B', text: "Store the database password in an unencrypted environment variable in the EC2 instance user data." },
      { id: 'C', text: "Configure an AWS Systems Manager Parameter Store String parameter and update it manually every month." },
      { id: 'D', text: "Deploy an AWS Config rule to terminate instances that have credentials older than 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK. AWS Secrets Manager natively integrates with Amazon RDS to rotate database credentials automatically using an AWS Lambda function on a defined schedule (e.g. every 30 days), testing and updating both the database and the secret seamlessly without application downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Security Compliance"]
  },
  {
    id: "aws-saa-384",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Secrets Manager Automatic Rotation: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Secrets Manager to automatically rotate database administrative passwords every 30 days without application downtime or manual credential updates.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Secrets Manager automatic secret rotation with Lambda is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK." },
      { id: 'B', text: "Store the database password in an unencrypted environment variable in the EC2 instance user data." },
      { id: 'C', text: "Configure an AWS Systems Manager Parameter Store String parameter and update it manually every month." },
      { id: 'D', text: "Deploy an AWS Config rule to terminate instances that have credentials older than 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK. AWS Secrets Manager natively integrates with Amazon RDS to rotate database credentials automatically using an AWS Lambda function on a defined schedule (e.g. every 30 days), testing and updating both the database and the secret seamlessly without application downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Hybrid Migration"]
  },
  {
    id: "aws-saa-385",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Secrets Manager Automatic Rotation: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Secrets Manager to automatically rotate database administrative passwords every 30 days without application downtime or manual credential updates.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Secrets Manager automatic secret rotation with Lambda is being evaluated.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK." },
      { id: 'B', text: "Store the database password in an unencrypted environment variable in the EC2 instance user data." },
      { id: 'C', text: "Configure an AWS Systems Manager Parameter Store String parameter and update it manually every month." },
      { id: 'D', text: "Deploy an AWS Config rule to terminate instances that have credentials older than 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automatic rotation using an AWS-provided rotation Lambda function and update applications to fetch secrets via SDK. AWS Secrets Manager natively integrates with Amazon RDS to rotate database credentials automatically using an AWS Lambda function on a defined schedule (e.g. every 30 days), testing and updating both the database and the secret seamlessly without application downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["AWS Secrets Manager", "Secrets Manager", "Resilience Failure"]
  },
  {
    id: "aws-saa-386",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Organizations Regional SCPs: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Organizations to prevent all member AWS accounts within an enterprise organization from launching any resources outside approved geographic regions (e.g. us-east-1 and us-west-2).",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Organizations Service Control Policies (SCPs) denying unapproved regions is being evaluated.",
    options: [
      { id: 'A', text: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services." },
      { id: 'B', text: "Configure IAM user policies in each member account with regional Deny statements individually." },
      { id: 'C', text: "Deploy AWS Config rules in each account to terminate non-compliant EC2 instances after launch." },
      { id: 'D', text: "Remove the default VPC in all unapproved regions across all member accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services. Service Control Policies (SCPs) act as central guardrails across all accounts in an AWS Organization. A regional restriction SCP with an explicit Deny on `aws:RequestedRegion` blocks any API action outside permitted regions for all IAM users and roles (including root) across member accounts, while exempting global services like IAM and Route 53.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
    tags: ["AWS Organizations", "AWS Organizations", "Dr Failover"]
  },
  {
    id: "aws-saa-387",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Organizations Regional SCPs: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Organizations to prevent all member AWS accounts within an enterprise organization from launching any resources outside approved geographic regions (e.g. us-east-1 and us-west-2).",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Organizations Service Control Policies (SCPs) denying unapproved regions is being evaluated.",
    options: [
      { id: 'A', text: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services." },
      { id: 'B', text: "Configure IAM user policies in each member account with regional Deny statements individually." },
      { id: 'C', text: "Deploy AWS Config rules in each account to terminate non-compliant EC2 instances after launch." },
      { id: 'D', text: "Remove the default VPC in all unapproved regions across all member accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services. Service Control Policies (SCPs) act as central guardrails across all accounts in an AWS Organization. A regional restriction SCP with an explicit Deny on `aws:RequestedRegion` blocks any API action outside permitted regions for all IAM users and roles (including root) across member accounts, while exempting global services like IAM and Route 53.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
    tags: ["AWS Organizations", "AWS Organizations", "High Load Scale"]
  },
  {
    id: "aws-saa-388",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Organizations Regional SCPs: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Organizations to prevent all member AWS accounts within an enterprise organization from launching any resources outside approved geographic regions (e.g. us-east-1 and us-west-2).",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Organizations Service Control Policies (SCPs) denying unapproved regions is being evaluated.",
    options: [
      { id: 'A', text: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services." },
      { id: 'B', text: "Configure IAM user policies in each member account with regional Deny statements individually." },
      { id: 'C', text: "Deploy AWS Config rules in each account to terminate non-compliant EC2 instances after launch." },
      { id: 'D', text: "Remove the default VPC in all unapproved regions across all member accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services. Service Control Policies (SCPs) act as central guardrails across all accounts in an AWS Organization. A regional restriction SCP with an explicit Deny on `aws:RequestedRegion` blocks any API action outside permitted regions for all IAM users and roles (including root) across member accounts, while exempting global services like IAM and Route 53.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
    tags: ["AWS Organizations", "AWS Organizations", "Security Compliance"]
  },
  {
    id: "aws-saa-389",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Organizations Regional SCPs: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Organizations to prevent all member AWS accounts within an enterprise organization from launching any resources outside approved geographic regions (e.g. us-east-1 and us-west-2).",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Organizations Service Control Policies (SCPs) denying unapproved regions is being evaluated.",
    options: [
      { id: 'A', text: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services." },
      { id: 'B', text: "Configure IAM user policies in each member account with regional Deny statements individually." },
      { id: 'C', text: "Deploy AWS Config rules in each account to terminate non-compliant EC2 instances after launch." },
      { id: 'D', text: "Remove the default VPC in all unapproved regions across all member accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services. Service Control Policies (SCPs) act as central guardrails across all accounts in an AWS Organization. A regional restriction SCP with an explicit Deny on `aws:RequestedRegion` blocks any API action outside permitted regions for all IAM users and roles (including root) across member accounts, while exempting global services like IAM and Route 53.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
    tags: ["AWS Organizations", "AWS Organizations", "Hybrid Migration"]
  },
  {
    id: "aws-saa-390",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Organizations Regional SCPs: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Organizations to prevent all member AWS accounts within an enterprise organization from launching any resources outside approved geographic regions (e.g. us-east-1 and us-west-2).",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Organizations Service Control Policies (SCPs) denying unapproved regions is being evaluated.",
    options: [
      { id: 'A', text: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services." },
      { id: 'B', text: "Configure IAM user policies in each member account with regional Deny statements individually." },
      { id: 'C', text: "Deploy AWS Config rules in each account to terminate non-compliant EC2 instances after launch." },
      { id: 'D', text: "Remove the default VPC in all unapproved regions across all member accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach a Service Control Policy (SCP) to the organization root with a Deny action matching `StringNotEquals: {'aws:RequestedRegion': ['us-east-1', 'us-west-2']}` with exceptions for global services. Service Control Policies (SCPs) act as central guardrails across all accounts in an AWS Organization. A regional restriction SCP with an explicit Deny on `aws:RequestedRegion` blocks any API action outside permitted regions for all IAM users and roles (including root) across member accounts, while exempting global services like IAM and Route 53.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_general.html#example-scp-deny-region",
    tags: ["AWS Organizations", "AWS Organizations", "Resilience Failure"]
  },
  {
    id: "aws-saa-391",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Permissions Boundaries: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS IAM to allow project leads to create IAM roles and users for their teams while guaranteeing that they cannot grant permissions greater than an administrator-approved maximum policy.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? IAM Permissions Boundaries for delegated administration is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary." },
      { id: 'B', text: "Attach an IAM Deny policy to the AWS account root user." },
      { id: 'C', text: "Configure an AWS Organizations Service Control Policy that lists individual developer names." },
      { id: 'D', text: "Restrict developers to using only pre-existing AWS managed policies without custom policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary. IAM permissions boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). By requiring developers to attach the permissions boundary to any role they create, organizations can safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-saa-392",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Permissions Boundaries: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS IAM to allow project leads to create IAM roles and users for their teams while guaranteeing that they cannot grant permissions greater than an administrator-approved maximum policy.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? IAM Permissions Boundaries for delegated administration is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary." },
      { id: 'B', text: "Attach an IAM Deny policy to the AWS account root user." },
      { id: 'C', text: "Configure an AWS Organizations Service Control Policy that lists individual developer names." },
      { id: 'D', text: "Restrict developers to using only pre-existing AWS managed policies without custom policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary. IAM permissions boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). By requiring developers to attach the permissions boundary to any role they create, organizations can safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-saa-393",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Permissions Boundaries: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS IAM to allow project leads to create IAM roles and users for their teams while guaranteeing that they cannot grant permissions greater than an administrator-approved maximum policy.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM Permissions Boundaries for delegated administration is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary." },
      { id: 'B', text: "Attach an IAM Deny policy to the AWS account root user." },
      { id: 'C', text: "Configure an AWS Organizations Service Control Policy that lists individual developer names." },
      { id: 'D', text: "Restrict developers to using only pre-existing AWS managed policies without custom policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary. IAM permissions boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). By requiring developers to attach the permissions boundary to any role they create, organizations can safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-saa-394",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Permissions Boundaries: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS IAM to allow project leads to create IAM roles and users for their teams while guaranteeing that they cannot grant permissions greater than an administrator-approved maximum policy.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? IAM Permissions Boundaries for delegated administration is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary." },
      { id: 'B', text: "Attach an IAM Deny policy to the AWS account root user." },
      { id: 'C', text: "Configure an AWS Organizations Service Control Policy that lists individual developer names." },
      { id: 'D', text: "Restrict developers to using only pre-existing AWS managed policies without custom policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary. IAM permissions boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). By requiring developers to attach the permissions boundary to any role they create, organizations can safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-saa-395",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Permissions Boundaries: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS IAM to allow project leads to create IAM roles and users for their teams while guaranteeing that they cannot grant permissions greater than an administrator-approved maximum policy.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? IAM Permissions Boundaries for delegated administration is being evaluated.",
    options: [
      { id: 'A', text: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary." },
      { id: 'B', text: "Attach an IAM Deny policy to the AWS account root user." },
      { id: 'C', text: "Configure an AWS Organizations Service Control Policy that lists individual developer names." },
      { id: 'D', text: "Restrict developers to using only pre-existing AWS managed policies without custom policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permissions Boundary policy to developer roles and require that any role created by developers must include the Permissions Boundary. IAM permissions boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity (user or role). By requiring developers to attach the permissions boundary to any role they create, organizations can safely delegate role creation without risking privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  },
  {
    id: "aws-saa-396",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Attribute-Based Access Control (ABAC): Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS IAM to scale access control management across hundreds of projects by granting developers access to EC2 instances and S3 buckets only if the resource tag matches the user principal tag.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? IAM Attribute-Based Access Control (ABAC) using tags is being evaluated.",
    options: [
      { id: 'A', text: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys." },
      { id: 'B', text: "Create a separate IAM group and policy for every individual project and update policies on each team change." },
      { id: 'C', text: "Grant full AdministratorAccess to developers and audit actions after the fact using AWS CloudTrail." },
      { id: 'D', text: "Configure AWS Systems Manager Session Manager with hardcoded user IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys. Attribute-Based Access Control (ABAC) uses tags attached to IAM principals (users/roles) and AWS resources to make authorization decisions dynamically. A single policy that checks `aws:PrincipalTag/project == aws:ResourceTag/project` scales automatically as new projects and resources are added without updating IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["AWS IAM", "IAM", "Dr Failover"]
  },
  {
    id: "aws-saa-397",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Attribute-Based Access Control (ABAC): High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS IAM to scale access control management across hundreds of projects by granting developers access to EC2 instances and S3 buckets only if the resource tag matches the user principal tag.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? IAM Attribute-Based Access Control (ABAC) using tags is being evaluated.",
    options: [
      { id: 'A', text: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys." },
      { id: 'B', text: "Create a separate IAM group and policy for every individual project and update policies on each team change." },
      { id: 'C', text: "Grant full AdministratorAccess to developers and audit actions after the fact using AWS CloudTrail." },
      { id: 'D', text: "Configure AWS Systems Manager Session Manager with hardcoded user IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys. Attribute-Based Access Control (ABAC) uses tags attached to IAM principals (users/roles) and AWS resources to make authorization decisions dynamically. A single policy that checks `aws:PrincipalTag/project == aws:ResourceTag/project` scales automatically as new projects and resources are added without updating IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["AWS IAM", "IAM", "High Load Scale"]
  },
  {
    id: "aws-saa-398",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Attribute-Based Access Control (ABAC): Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS IAM to scale access control management across hundreds of projects by granting developers access to EC2 instances and S3 buckets only if the resource tag matches the user principal tag.",
    question: "Which solution properly implements these mandatory security and governance controls? IAM Attribute-Based Access Control (ABAC) using tags is being evaluated.",
    options: [
      { id: 'A', text: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys." },
      { id: 'B', text: "Create a separate IAM group and policy for every individual project and update policies on each team change." },
      { id: 'C', text: "Grant full AdministratorAccess to developers and audit actions after the fact using AWS CloudTrail." },
      { id: 'D', text: "Configure AWS Systems Manager Session Manager with hardcoded user IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys. Attribute-Based Access Control (ABAC) uses tags attached to IAM principals (users/roles) and AWS resources to make authorization decisions dynamically. A single policy that checks `aws:PrincipalTag/project == aws:ResourceTag/project` scales automatically as new projects and resources are added without updating IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["AWS IAM", "IAM", "Security Compliance"]
  },
  {
    id: "aws-saa-399",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Attribute-Based Access Control (ABAC): Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS IAM to scale access control management across hundreds of projects by granting developers access to EC2 instances and S3 buckets only if the resource tag matches the user principal tag.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? IAM Attribute-Based Access Control (ABAC) using tags is being evaluated.",
    options: [
      { id: 'A', text: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys." },
      { id: 'B', text: "Create a separate IAM group and policy for every individual project and update policies on each team change." },
      { id: 'C', text: "Grant full AdministratorAccess to developers and audit actions after the fact using AWS CloudTrail." },
      { id: 'D', text: "Configure AWS Systems Manager Session Manager with hardcoded user IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys. Attribute-Based Access Control (ABAC) uses tags attached to IAM principals (users/roles) and AWS resources to make authorization decisions dynamically. A single policy that checks `aws:PrincipalTag/project == aws:ResourceTag/project` scales automatically as new projects and resources are added without updating IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["AWS IAM", "IAM", "Hybrid Migration"]
  },
  {
    id: "aws-saa-400",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "IAM Attribute-Based Access Control (ABAC): Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS IAM to scale access control management across hundreds of projects by granting developers access to EC2 instances and S3 buckets only if the resource tag matches the user principal tag.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? IAM Attribute-Based Access Control (ABAC) using tags is being evaluated.",
    options: [
      { id: 'A', text: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys." },
      { id: 'B', text: "Create a separate IAM group and policy for every individual project and update policies on each team change." },
      { id: 'C', text: "Grant full AdministratorAccess to developers and audit actions after the fact using AWS CloudTrail." },
      { id: 'D', text: "Configure AWS Systems Manager Session Manager with hardcoded user IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement IAM Attribute-Based Access Control (ABAC) policies using the `aws:PrincipalTag` and `aws:ResourceTag` condition keys. Attribute-Based Access Control (ABAC) uses tags attached to IAM principals (users/roles) and AWS resources to make authorization decisions dynamically. A single policy that checks `aws:PrincipalTag/project == aws:ResourceTag/project` scales automatically as new projects and resources are added without updating IAM policies.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["AWS IAM", "IAM", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_16;
