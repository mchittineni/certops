export const AWS_CLF_QUESTIONS = [
  {
    id: 'aws-clf-1',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd1',
    domainName: 'Cloud Concepts',
    title: 'Shared Responsibility Model - Customer Responsibility',
    scenario: 'A company is moving a web application onto Amazon EC2 instances and wants to confirm which security tasks remain its own responsibility rather than AWS\'s under the AWS Shared Responsibility Model.',
    question: 'Which task is the responsibility of the customer?',
    options: [
      { id: 'A', text: 'Applying operating system and application security patches on the EC2 instances.' },
      { id: 'B', text: 'Replacing failed physical disks in the AWS data centre.' },
      { id: 'C', text: 'Maintaining physical access controls at AWS Availability Zones.' },
      { id: 'D', text: 'Patching the hypervisor that hosts EC2 instances.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Under the Shared Responsibility Model, AWS is responsible for security OF the cloud - hardware, the physical facilities, and the virtualisation layer - while the customer is responsible for security IN the cloud. For EC2, that includes guest OS patching, application patching, security group configuration, and data encryption. Options B, C, and D all describe AWS-managed infrastructure the customer cannot access.',
    referenceUrl: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
    tags: ['Shared Responsibility', 'Security', 'EC2']
  },
  {
    id: 'aws-clf-2',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd4',
    domainName: 'Billing, Pricing, and Support',
    title: 'Consolidated Billing and Cost Optimization',
    scenario: 'An enterprise runs 12 AWS accounts for separate business units. Finance wants a single monthly invoice, and the platform team wants unused Reserved Instance and Savings Plan capacity purchased in one account to benefit workloads in the others.',
    question: 'Which AWS feature provides both outcomes?',
    options: [
      { id: 'A', text: 'Consolidated billing in AWS Organizations, which aggregates usage across member accounts and shares Reserved Instance and Savings Plans discounts.' },
      { id: 'B', text: 'AWS Cost Explorer with a monthly scheduled report emailed to finance.' },
      { id: 'C', text: 'A separate AWS Budget in each account with an alert at 100% of the monthly forecast.' },
      { id: 'D', text: 'Cost allocation tags applied consistently across all 12 accounts.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Consolidated billing in AWS Organizations produces one invoice for the whole organisation, aggregates usage so accounts reach volume-pricing tiers sooner, and shares Reserved Instance and Savings Plans benefits across member accounts by default. Cost Explorer (B) reports on spend but does not change billing or discount sharing, Budgets (C) only alert, and cost allocation tags (D) attribute spend without consolidating it.',
    referenceUrl: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
    tags: ['Organizations', 'Consolidated Billing', 'Savings Plans', 'Cost']
  },
  {
    id: 'aws-clf-3',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd3',
    domainName: 'Cloud Technology and Services',
    title: 'Serverless Compute Architecture',
    scenario: 'A team wants to run a short image-resizing function whenever a file is uploaded to Amazon S3. They do not want to provision, patch, or scale any servers, and they want to pay only for the time the code actually runs.',
    question: 'Which AWS service should they use?',
    options: [
      { id: 'A', text: 'AWS Lambda' },
      { id: 'B', text: 'Amazon EC2 with an Auto Scaling group' },
      { id: 'C', text: 'Amazon Lightsail' },
      { id: 'D', text: 'AWS Elastic Beanstalk' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'AWS Lambda is the serverless compute service: it runs code in response to events such as an S3 upload, scales automatically, requires no server management, and bills per millisecond of execution. EC2 and Lightsail both mean managing instances you pay for while idle, and Elastic Beanstalk provisions and bills for the underlying EC2 capacity even though it automates deployment.',
    referenceUrl: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',
    tags: ['Lambda', 'Serverless', 'Compute']
  },
  {
    id: 'aws-clf-4',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd2',
    domainName: 'Security and Compliance',
    title: 'Multi-Factor Authentication (MFA) Best Practice',
    scenario: 'A new AWS account has been created and the team is reviewing the security recommendations in the IAM console before granting anyone access.',
    question: 'Which action is an AWS security best practice for the account root user?',
    options: [
      { id: 'A', text: 'Enable multi-factor authentication on the root user, then create individual IAM identities for daily work and stop using root.' },
      { id: 'B', text: 'Share the root user password with all administrators so they can respond to incidents.' },
      { id: 'C', text: 'Create root user access keys and store them in the application configuration.' },
      { id: 'D', text: 'Use the root user for daily administration but rotate its password monthly.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'AWS recommends locking away the root user: enable MFA on it, do not create root access keys, and perform everyday work with individual IAM users or roles that have least-privilege permissions. Sharing root credentials (B) destroys auditability, root access keys (C) are an explicit anti-pattern, and using root for daily work (D) means every action runs with unrestricted permissions.',
    referenceUrl: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html',
    tags: ['IAM', 'MFA', 'Root User', 'Security']
  },
  {
    id: 'aws-clf-5',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd3',
    domainName: 'Cloud Technology and Services',
    title: 'Choosing the Right Migration Service',
    scenario: 'A retailer must move 400 TB of historical sales archives from an on-premises SAN into Amazon S3. The site has a 100 Mbps internet uplink that is already 70% utilised during business hours, and the migration must finish within three weeks.',
    question: 'Which AWS service should the company use?',
    options: [
      { id: 'A', text: 'AWS Snowball Edge Storage Optimized devices shipped to the AWS Region.' },
      { id: 'B', text: 'AWS DataSync over the existing internet connection.' },
      { id: 'C', text: 'AWS Database Migration Service (DMS) with a full-load task.' },
      { id: 'D', text: 'The S3 console multipart upload feature run overnight.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'At an effective 30 Mbps of spare bandwidth, 400 TB would take well over a year to transfer online, so a physical offline transfer device is the only option that meets the deadline. AWS Snowball Edge ships ruggedised appliances you fill locally and return to AWS. DataSync and multipart upload are still bound by the uplink, and DMS is for databases, not file archives.',
    referenceUrl: 'https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html',
    tags: ['Snowball', 'Migration', 'Data Transfer']
  },
  {
    id: 'aws-clf-6',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd2',
    domainName: 'Security and Compliance',
    title: 'Which Service Answers an Auditor Asking Who Deleted a Resource',
    scenario: 'During a compliance audit, the security team must produce evidence of which identity deleted a specific Amazon S3 bucket, when, and from which source IP address.',
    question: 'Which AWS service provides this record?',
    options: [
      { id: 'A', text: 'AWS CloudTrail event history.' },
      { id: 'B', text: 'Amazon CloudWatch metrics for the S3 namespace.' },
      { id: 'C', text: 'AWS Trusted Advisor security checks.' },
      { id: 'D', text: 'Amazon Inspector assessment reports.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'AWS CloudTrail records management-plane API activity - the identity, timestamp, source IP, request parameters, and response for every call - which is exactly the audit trail required. CloudWatch reports performance metrics, Trusted Advisor gives best-practice recommendations, and Amazon Inspector scans workloads for software vulnerabilities.',
    referenceUrl: 'https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html',
    tags: ['CloudTrail', 'Auditing', 'Compliance']
  },
  {
    id: 'aws-clf-7',
    difficulty: 'hard',
    certId: 'aws-clf',
    domainId: 'd4',
    domainName: 'Billing, Pricing, and Support',
    title: 'Separating Estimation, Analysis, and Enforcement of Cloud Spend',
    scenario: 'A finance team wants three distinct capabilities: model the monthly cost of a not-yet-built architecture, break down last quarter\'s actual spend by team using cost allocation tags, and receive an alert plus an automated action when a project account exceeds 80% of its monthly allowance.',
    question: 'Which services deliver these three capabilities, in that order?',
    options: [
      { id: 'A', text: 'AWS Pricing Calculator, AWS Cost Explorer, AWS Budgets with budget actions.' },
      { id: 'B', text: 'AWS Cost Explorer, AWS Budgets, AWS Pricing Calculator.' },
      { id: 'C', text: 'AWS Budgets, AWS Cost and Usage Report, AWS Compute Optimizer.' },
      { id: 'D', text: 'AWS Trusted Advisor, AWS Pricing Calculator, Amazon CloudWatch billing alarms.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The AWS Pricing Calculator models the cost of a planned architecture before it exists. Cost Explorer visualises and filters historical spend, including by cost allocation tag. AWS Budgets sets thresholds, sends alerts, and - through budget actions - can automatically apply an IAM or SCP restriction or stop instances when a threshold is crossed. The other orderings invert the purpose of each tool.',
    referenceUrl: 'https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html',
    tags: ['Pricing Calculator', 'Cost Explorer', 'Budgets', 'Billing']
  },
  {
    id: 'aws-clf-8',
    difficulty: 'hard',
    certId: 'aws-clf',
    domainId: 'd2',
    domainName: 'Security and Compliance',
    title: 'Guardrails Across a Multi-Account Organization',
    scenario: 'A company with 60 AWS accounts under AWS Organizations must guarantee that no workload account can create resources outside eu-central-1 and eu-west-1, even if an account administrator holds full IAM administrator permissions in that account.',
    question: 'Which mechanism enforces this requirement?',
    options: [
      { id: 'A', text: 'A Service Control Policy attached to the workload OU that denies actions outside the two approved Regions.' },
      { id: 'B', text: 'An IAM permissions policy with a Region condition attached to every user in each account.' },
      { id: 'C', text: 'An AWS Config rule that flags resources created in non-approved Regions.' },
      { id: 'D', text: 'IAM Access Analyzer findings reviewed weekly by the security team.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A Service Control Policy sets the maximum available permissions for every principal in the accounts beneath it, so even a local account administrator cannot exceed it - the defining property this scenario requires. Per-user IAM policies can be edited or bypassed by a local admin, while AWS Config and IAM Access Analyzer detect and report after the fact rather than preventing the action.',
    referenceUrl: 'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html',
    tags: ['Organizations', 'SCP', 'Governance', 'Security']
  }
];

export default AWS_CLF_QUESTIONS;
