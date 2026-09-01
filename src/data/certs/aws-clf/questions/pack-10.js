export const AWS_CLF_QUESTIONS_10 = [
  {
    id: "aws-clf-226",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Marketplace 1-Click AMIs and SaaS Subscriptions",
    scenario: "A security operations team wants to deploy a third-party next-generation firewall appliance on Amazon EC2 with software licensing billed by the hour directly through AWS.",
    question: "Which AWS portal enables purchasing and launching pre-configured third-party software with consolidated AWS billing?",
    options: [
      { id: 'A', text: "AWS Partner Central" },
      { id: 'B', text: "Amazon AppStream 2.0" },
      { id: 'C', text: "AWS Service Catalog" },
      { id: 'D', text: "AWS Marketplace" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Marketplace is a curated digital catalog that makes it easy for customers to find, buy, deploy, and manage third-party software, data, and services with pay-as-you-go billing on their AWS invoice.",
    referenceUrl: "https://aws.amazon.com/marketplace",
    tags: ["AWS Marketplace", "Third-Party", "Billing", "Procurement"]
  },
  {
    id: "aws-clf-227",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Allocation Tags in AWS Cost Explorer",
    scenario: "A finance manager filters monthly costs by the `CostCenter` tag in AWS Cost Explorer, but some EC2 instances do not show up under any tag value.",
    question: "Why do some EC2 instances show up as untagged in Cost Explorer reports?",
    options: [
      { id: 'A', text: "Cost Explorer only tags compute instances in `us-east-1`." },
      { id: 'B', text: "Tags require manual approval by AWS Support." },
      { id: 'C', text: "The resources were launched without the `CostCenter` tag key or the tag was assigned after usage occurred." },
      { id: 'D', text: "Cost allocation tags do not apply to EC2 instances." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cost Allocation Tags apply from the time of tag activation and assignment onward; resources that lack the specified tag or generated usage prior to tag activation appear as untagged.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    tags: ["Cost Allocation Tags", "Cost Explorer", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-228",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS) Automatic Key Rotation",
    scenario: "A security policy requires that all cryptographic keys used to encrypt sensitive financial records be rotated automatically once every year (365 days).",
    question: "How does AWS Key Management Service (AWS KMS) handle automatic key rotation for Customer Managed Keys?",
    options: [
      { id: 'A', text: "Key rotation is only available in AWS CloudHSM." },
      { id: 'B', text: "KMS changes the key ARN and breaks existing application code." },
      { id: 'C', text: "KMS deletes the old key and requires re-encrypting all data manually." },
      { id: 'D', text: "AWS KMS automatically rotates the backing key material once every year (or customized period) without changing the key ID or ARN." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When you enable automatic key rotation for a customer managed KMS key, AWS KMS rotates the backing cryptographic material every year (or specified period) while keeping the same key ID, ARN, and policies transparently.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
    tags: ["KMS", "Key Rotation", "Security", "Encryption"]
  },
  {
    id: "aws-clf-229",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Email Service (SES) IP Reputation and Deliverability",
    scenario: "An email marketing application sends millions of newsletter emails and needs to maintain high sender reputation, handle bounce/complaint feedback loops, and isolate dedicated IP pools.",
    question: "Which AWS cloud service manages sender reputation and delivers high-volume email at scale?",
    options: [
      { id: 'A', text: "Amazon Connect" },
      { id: 'B', text: "Amazon Simple Email Service (Amazon SES)" },
      { id: 'C', text: "Amazon Pinpoint" },
      { id: 'D', text: "Amazon SNS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon SES is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails with reputation management.",
    referenceUrl: "https://docs.aws.amazon.com/ses/latest/dg/Welcome.html",
    tags: ["SES", "Email", "Application Integration"]
  },
  {
    id: "aws-clf-230",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CloudFormation Change Sets Before Updating Stacks",
    scenario: "A DevOps engineer wants to preview the exact changes and potential resource replacements (e.g. database restarts or IP changes) that will occur before applying a CloudFormation template update.",
    question: "Which AWS CloudFormation feature allows you to preview the impact of template changes before executing the update?",
    options: [
      { id: 'A', text: "AWS Config Rules" },
      { id: 'B', text: "CloudFormation Drift Detection" },
      { id: 'C', text: "CloudFormation Change Sets" },
      { id: 'D', text: "CloudFormation StackSets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudFormation Change Sets allow you to preview how proposed changes to a stack might affect your running resources before you execute the update, highlighting potential resource replacements.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html",
    tags: ["CloudFormation", "Change Sets", "IaC", "Automation"]
  },
  {
    id: "aws-clf-231",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CloudFormation Drift Detection for Manual Changes",
    scenario: "An engineer wants to identify if anyone has manually modified security group rules or EC2 instance types outside of the official CloudFormation template that originally provisioned the stack.",
    question: "Which AWS CloudFormation feature detects differences between actual provisioned resource configurations and the stack template?",
    options: [
      { id: 'A', text: "AWS Config" },
      { id: 'B', text: "CloudFormation Change Sets" },
      { id: 'C', text: "CloudFormation Drift Detection" },
      { id: 'D', text: "CloudTrail Insights" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudFormation Drift Detection enables you to detect whether stack resources have drifted (changed) from their expected template configurations due to out-of-band manual changes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["CloudFormation", "Drift Detection", "IaC", "Governance"]
  },
  {
    id: "aws-clf-232",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CloudFormation StackSets Across Multiple Accounts and Regions",
    scenario: "A security engineering team needs to automatically deploy an IAM role, AWS Config rules, and an encrypted S3 logging bucket across 100 AWS accounts and 5 Regions in an AWS Organization.",
    question: "Which AWS CloudFormation feature enables provisioning stacks across multiple AWS accounts and Regions in a single operation?",
    options: [
      { id: 'A', text: "CloudFormation StackSets" },
      { id: 'B', text: "AWS Control Tower" },
      { id: 'C', text: "CloudFormation Change Sets" },
      { id: 'D', text: "CloudFormation Nested Stacks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CloudFormation StackSets lets you create, update, or delete stacks across multiple AWS accounts and multiple AWS Regions with a single CloudFormation template operation.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",
    tags: ["CloudFormation", "StackSets", "Multi-Account", "Automation"]
  },
  {
    id: "aws-clf-233",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact Agreements for HIPAA and BAA Acceptance",
    scenario: "A healthcare startup must accept the AWS Business Associate Addendum (BAA) to store protected health information (PHI) on AWS under HIPAA compliance regulations.",
    question: "Where in the AWS Management Console can customers review, accept, and track legal agreements with AWS such as the BAA?",
    options: [
      { id: 'A', text: "AWS Billing Preferences" },
      { id: 'B', text: "AWS Artifact Agreements" },
      { id: 'C', text: "AWS Trusted Advisor" },
      { id: 'D', text: "AWS IAM Console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Artifact Agreements enables customers to review, accept, and track the status of AWS agreements (such as the Business Associate Addendum for HIPAA compliance) for their account or organization.",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html",
    tags: ["AWS Artifact", "Compliance", "HIPAA", "Security"]
  },
  {
    id: "aws-clf-234",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Spot Fleet and Auto Scaling Mixed Instances",
    scenario: "A big data processing workload wants to combine On-Demand Instances for baseline capacity with Spot Instances across multiple instance types to maximize compute power at lowest cost.",
    question: "Which Amazon EC2 feature allows an Auto Scaling group to launch a mix of On-Demand and Spot instances across multiple instance families?",
    options: [
      { id: 'A', text: "Dedicated Hosts" },
      { id: 'B', text: "Placement Groups" },
      { id: 'C', text: "Capacity Reservations" },
      { id: 'D', text: "Auto Scaling Mixed Instances Policy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An EC2 Auto Scaling Mixed Instances Policy allows you to launch and automatically scale a fleet of On-Demand and Spot instances across multiple instance types and purchasing models in a single Auto Scaling group.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html",
    tags: ["Auto Scaling", "Spot Instances", "EC2", "Cost Optimization"]
  },
  {
    id: "aws-clf-235",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Free Tier: DynamoDB Always Free Allowances",
    scenario: "A developer builds a personal side project using Amazon DynamoDB and wants to confirm the permanent free tier monthly allowance.",
    question: "What is the monthly 'Always Free' storage allowance provided by Amazon DynamoDB?",
    options: [
      { id: 'A', text: "DynamoDB does not offer a free tier." },
      { id: 'B', text: "1 TB of storage indefinitely." },
      { id: 'C', text: "25 GB of storage along with 25 provisioned Write and Read Capacity Units." },
      { id: 'D', text: "5 GB of storage for 12 months only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon DynamoDB includes 25 GB of data storage, 25 WCU, 25 RCU, and up to 200 million requests per month in the AWS Always Free tier perpetually for all AWS accounts.",
    referenceUrl: "https://aws.amazon.com/dynamodb/pricing/",
    tags: ["DynamoDB", "Free Tier", "Billing", "NoSQL"]
  },
  {
    id: "aws-clf-236",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Glacier Select for In-Place SQL Querying",
    scenario: "A compliance auditor needs to filter and extract a few specific records from a 10 GB archived log file stored in Amazon S3 Glacier without restoring the entire 10 GB archive file.",
    question: "Which feature allows running SQL queries directly on data stored in Amazon S3 Glacier archives?",
    options: [
      { id: 'A', text: "AWS Glue" },
      { id: 'B', text: "Amazon Redshift Spectrum" },
      { id: 'C', text: "Amazon Athena" },
      { id: 'D', text: "S3 Glacier Select" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "S3 Glacier Select allows you to run queries directly on data stored in S3 Glacier archives using simple SQL statements, retrieving only the filtered subset of data you need without unarchiving the whole object.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-select.html",
    tags: ["S3", "Glacier Select", "Analytics", "Storage"]
  },
  {
    id: "aws-clf-237",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Trusted Advisor Security Pillar Checks in Free vs Paid Support",
    scenario: "An administrator with AWS Basic Support runs AWS Trusted Advisor. They notice only core security checks are available, while full checks require upgraded support.",
    question: "Which AWS Support tiers unlock all AWS Trusted Advisor checks across all five categories?",
    options: [
      { id: 'A', text: "All checks are free for all customers." },
      { id: 'B', text: "Business Support and Enterprise Support (including Enterprise On-Ramp)" },
      { id: 'C', text: "Basic Support" },
      { id: 'D', text: "Developer Support" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Basic and Developer Support include only core Trusted Advisor checks (such as basic S3 bucket permissions and IAM MFA). Business and Enterprise Support tiers unlock the full suite of Trusted Advisor checks.",
    referenceUrl: "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
    tags: ["Trusted Advisor", "Support Plans", "Security", "Best Practices"]
  },
  {
    id: "aws-clf-238",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 On-Demand Capacity Reservations",
    scenario: "A broadcasting company is hosting a live international sports event next month and needs guaranteed compute capacity for 20 `c5.4xlarge` EC2 instances in a specific AZ without a 1-year term commitment.",
    question: "Which EC2 capability reserves compute capacity in a specific Availability Zone for any duration without requiring a 1-year or 3-year financial commitment?",
    options: [
      { id: 'A', text: "Dedicated Hosts" },
      { id: 'B', text: "On-Demand Capacity Reservations" },
      { id: 'C', text: "Standard Reserved Instances" },
      { id: 'D', text: "Spot Instances" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "On-Demand Capacity Reservations enable you to reserve compute capacity for your Amazon EC2 instances in a specific Availability Zone for any duration, giving capacity assurance with On-Demand billing rates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
    tags: ["EC2", "Capacity Reservations", "Compute"]
  },
  {
    id: "aws-clf-239",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Global Infrastructure: Number of Availability Zones per Region",
    scenario: "An architect is selecting an AWS Region to deploy a multi-tier high-availability architecture across multiple data centres.",
    question: "What is the minimum number of Availability Zones contained in every AWS Region?",
    options: [
      { id: 'A', text: "At least 3 Availability Zones (minimum 2 in select legacy Regions)" },
      { id: 'B', text: "At least 10 Availability Zones" },
      { id: 'C', text: "Each Region contains only 1 server rack" },
      { id: 'D', text: "Exactly 1 Availability Zone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Every modern AWS Region consists of multiple, isolated, and physically separate Availability Zones within a geographic area, typically three or more (minimum two in select legacy regions).",
    referenceUrl: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
    tags: ["Global Infrastructure", "Availability Zones", "Regions"]
  },
  {
    id: "aws-clf-240",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Inventory Reports for Data Asset Auditing",
    scenario: "A compliance team needs a scheduled weekly CSV report listing all 50 million objects in an S3 bucket along with their encryption status, size, storage class, and replication status.",
    question: "Which Amazon S3 feature generates scheduled CSV, ORC, or Parquet inventory lists of all objects in a bucket?",
    options: [
      { id: 'A', text: "AWS CloudTrail" },
      { id: 'B', text: "S3 Lifecycle" },
      { id: 'C', text: "Amazon S3 Inventory" },
      { id: 'D', text: "S3 Storage Lens" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Inventory provides scheduled CSV, ORC, or Parquet output files that list your objects and their respective metadata on a daily or weekly basis for an S3 bucket or a shared prefix.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html",
    tags: ["S3", "Inventory", "Auditing", "Storage"]
  },
  {
    id: "aws-clf-241",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Root Account Access Keys Best Practice: Do Not Generate",
    scenario: "A new cloud security administrator is performing an initial security audit of an AWS account.",
    question: "What is the official AWS security best practice regarding access keys for the AWS Account Root User?",
    options: [
      { id: 'A', text: "Rotate root access keys every 7 days." },
      { id: 'B', text: "Store root access keys in a public GitHub repository." },
      { id: 'C', text: "Share root access keys with all lead developers." },
      { id: 'D', text: "Do not generate root user access keys; if they exist, delete them immediately." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS strongly recommends that you do not create access keys for the AWS account root user. If root access keys exist, delete them immediately and use IAM users or roles with least-privilege permissions.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials",
    tags: ["IAM", "Root User", "Access Keys", "Security"]
  },
  {
    id: "aws-clf-242",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Explorer Forecasting Functionality",
    scenario: "A chief financial officer asks for a projected forecast of the company's AWS spend for the next 3 to 12 months based on historical consumption trends.",
    question: "Which AWS cost management tool provides automated cost forecasting models based on past usage history?",
    options: [
      { id: 'A', text: "AWS Pricing Calculator" },
      { id: 'B', text: "AWS Cost Explorer" },
      { id: 'C', text: "AWS Compute Optimizer" },
      { id: 'D', text: "AWS Trusted Advisor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Cost Explorer includes a forecasting feature that uses machine learning algorithms based on your historical usage patterns to project future cloud costs up to 12 months in advance.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-forecast.html",
    tags: ["Cost Explorer", "Forecasting", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-243",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 AMI Community vs Marketplace vs Custom AMIs",
    scenario: "A developer wants to launch an EC2 instance pre-configured with a commercial software package provided by an independent software vendor (ISV) with licensing charges included.",
    question: "From which catalog can developers launch verified third-party commercial AMIs?",
    options: [
      { id: 'A', text: "AWS Marketplace AMIs" },
      { id: 'B', text: "Community AMIs" },
      { id: 'C', text: "My AMIs" },
      { id: 'D', text: "Quick Start AMIs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Marketplace provides a digital catalog of verified commercial AMIs sold by independent software vendors (ISVs) with licensing billed directly to your AWS account.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html#market-place-amis",
    tags: ["AMI", "Marketplace", "EC2", "Compute"]
  },
  {
    id: "aws-clf-244",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Automated Compliance Evaluation",
    scenario: "A security manager needs continuous security scoring and automated evaluation of all AWS resources against the Center for Internet Security (CIS) AWS Foundations Benchmark.",
    question: "Which AWS service performs continuous automated compliance checks against security standards like CIS and PCI-DSS?",
    options: [
      { id: 'A', text: "Amazon GuardDuty" },
      { id: 'B', text: "AWS CloudTrail" },
      { id: 'C', text: "AWS Artifact" },
      { id: 'D', text: "AWS Security Hub" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Security Hub automatically runs continuous, account-level configuration and security checks against security standards like CIS AWS Foundations Benchmark, AWS Foundational Security Best Practices, and PCI-DSS.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html",
    tags: ["Security Hub", "CIS Benchmark", "Compliance", "Security"]
  },
  {
    id: "aws-clf-245",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Default Encryption: SSE-S3 (256-bit AES)",
    scenario: "A developer creates a new Amazon S3 bucket. They want to know what default encryption is applied to new objects uploaded to the bucket without configuring custom keys.",
    question: "What encryption is applied by default to all newly uploaded objects in Amazon S3 buckets at no additional charge?",
    options: [
      { id: 'A', text: "Server-Side Encryption with Amazon S3 managed keys (SSE-S3) using 256-bit AES." },
      { id: 'B', text: "AWS CloudHSM hardware encryption." },
      { id: 'C', text: "No encryption is applied unless explicitly enabled." },
      { id: 'D', text: "Client-side PGP encryption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 automatically applies server-side encryption with Amazon S3 managed keys (SSE-S3) using 256-bit Advanced Encryption Standard (AES-256) as the base default for all new objects uploaded to S3 at no additional cost.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html",
    tags: ["S3", "Encryption", "SSE-S3", "Security", "Storage"]
  },
  {
    id: "aws-clf-246",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Benefits of Cloud: Stop Spending Money Running Data Centres",
    scenario: "An enterprise leadership team calculates that their engineers spend 40% of their time racking servers, replacing failed power supplies, and managing HVAC systems in physical facilities.",
    question: "Which advantage of cloud computing describes eliminating the undifferentiated heavy lifting of managing physical data centre infrastructure?",
    options: [
      { id: 'A', text: "Stop guessing capacity." },
      { id: 'B', text: "Stop spending money running and maintaining data centres." },
      { id: 'C', text: "Benefit from massive economies of scale." },
      { id: 'D', text: "Trade capital expense for variable expense." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stop spending money running and maintaining data centres: focus on projects that differentiate your business rather than managing infrastructure (racking, stacking, and powering servers).",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
    tags: ["Cloud Concepts", "Value Proposition", "Undifferentiated Heavy Lifting"]
  },
  {
    id: "aws-clf-247",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Concierge Support Team for Enterprise Customers",
    scenario: "An enterprise finance director needs assistance understanding complex billing questions, analyzing consolidated invoices, and optimizing billing structures with a dedicated billing specialist.",
    question: "Which AWS Support resource is a dedicated billing and account expert provided exclusively to Enterprise Support customers?",
    options: [
      { id: 'A', text: "Technical Account Manager (TAM)" },
      { id: 'B', text: "Cloud Support Associate" },
      { id: 'C', text: "AWS Partner Network" },
      { id: 'D', text: "AWS Concierge Support Team" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS Concierge Support team is a senior customer service partner assigned to Enterprise Support customers who specializes in resolving billing, invoicing, and account management queries.",
    referenceUrl: "https://aws.amazon.com/premiumsupport/plans/enterprise/",
    tags: ["AWS Concierge", "Support Plans", "Billing", "Enterprise"]
  },
  {
    id: "aws-clf-248",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Multi-AZ Standby Deployment Architecture",
    scenario: "An engineer creates an Amazon RDS Multi-AZ PostgreSQL database. They want to know if the standby replica instance can be used by developers for read-only reporting queries.",
    question: "Can an application directly connect to and query the standby replica instance in a standard Amazon RDS Multi-AZ deployment?",
    options: [
      { id: 'A', text: "Yes, the standby replica automatically load-balances read traffic." },
      { id: 'B', text: "Yes, by connecting to the standby's public IP address." },
      { id: 'C', text: "Yes, if provisioned with SSD gp3 storage." },
      { id: 'D', text: "No, in a standard RDS Multi-AZ deployment, the standby replica is strictly for high availability and failover and cannot accept read connections (unlike Read Replicas)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In a standard Amazon RDS Multi-AZ deployment, the standby replica synchronously mirrors the primary DB for automatic failover but cannot serve active read connections. To scale reads, you deploy RDS Read Replicas.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["RDS", "Multi-AZ", "Databases", "High Availability"]
  },
  {
    id: "aws-clf-249",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon GuardDuty Continuous Threat Intelligence Sources",
    scenario: "A security analyst is reviewing how Amazon GuardDuty detects threat actors scanning AWS resources.",
    question: "Which primary data sources are analyzed automatically by Amazon GuardDuty without enabling log exports manually?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor scan logs." },
      { id: 'B', text: "Operating system application event logs on EC2." },
      { id: 'C', text: "AWS CloudTrail management events, VPC Flow Logs, and DNS query logs." },
      { id: 'D', text: "Amazon S3 server access logs only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon GuardDuty automatically consumes and processes AWS CloudTrail management event logs, CloudTrail S3 data events, Amazon VPC Flow Logs, EKS audit logs, and DNS query logs directly from the AWS infrastructure.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html",
    tags: ["GuardDuty", "Threat Intelligence", "Security", "Logs"]
  },
  {
    id: "aws-clf-250",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Explorer Group By Dimension Analysis",
    scenario: "A financial analyst wants to analyze monthly AWS spending trends broken down by service (`Amazon EC2`, `Amazon S3`, `Amazon RDS`) across the past 6 months to identify the fastest growing cost driver.",
    question: "Which AWS tool provides visual charts with multi-dimensional grouping (by Service, Usage Type, Region, and Tag) for historical spend analysis?",
    options: [
      { id: 'A', text: "AWS Cost Explorer" },
      { id: 'B', text: "AWS Budgets" },
      { id: 'C', text: "AWS Pricing Calculator" },
      { id: 'D', text: "AWS Compute Optimizer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time, grouping by dimensions like Service, Linked Account, Region, and Cost Allocation Tag.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
    tags: ["Cost Explorer", "FinOps", "Billing", "Cost Management"]
  }
];

export default AWS_CLF_QUESTIONS_10;
