export const AWS_CLF_QUESTIONS_3 = [
  {
    id: "aws-clf-51",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Global Infrastructure: Points of Presence (Edge Locations)",
    scenario: "An engineer wants to deliver cached static files to users around the world with minimum network latency.",
    question: "Which component of the AWS Global Infrastructure delivers cached web content closest to end users globally?",
    options: [
      { id: 'A', text: "AWS Availability Zones" },
      { id: 'B', text: "AWS Regions" },
      { id: 'C', text: "AWS Outposts" },
      { id: 'D', text: "AWS Edge Locations (Points of Presence)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Edge Locations are points of presence located in major metropolitan areas globally that cache static data using Amazon CloudFront to reduce network latency for end users.",
    referenceUrl: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
    tags: ["Global Infrastructure", "Edge Locations", "CloudFront"]
  },
  {
    id: "aws-clf-52",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Outposts for On-Premises Hybrid Deployments",
    scenario: "A manufacturing plant has industrial robotics that require single-digit millisecond latency to on-premises control equipment while using native AWS APIs.",
    question: "Which AWS hybrid service extends native AWS infrastructure, services, and APIs directly into a customer data centre?",
    options: [
      { id: 'A', text: "AWS Local Zones" },
      { id: 'B', text: "AWS Outposts" },
      { id: 'C', text: "AWS Wavelength" },
      { id: 'D', text: "AWS Direct Connect" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Outposts delivers fully managed physical AWS hardware racks directly to on-premises data centres, running native AWS services for a consistent hybrid cloud experience.",
    referenceUrl: "https://aws.amazon.com/outposts/",
    tags: ["Outposts", "Hybrid Cloud", "Infrastructure"]
  },
  {
    id: "aws-clf-53",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Local Zones for Metro Area Latency",
    scenario: "A media streaming company needs compute and storage resources close to end users in a specific metropolitan city that does not have an AWS Region.",
    question: "Which AWS infrastructure deployment option places compute and storage close to large population and industrial centers?",
    options: [
      { id: 'A', text: "AWS Regions" },
      { id: 'B', text: "AWS Outposts" },
      { id: 'C', text: "AWS Direct Connect" },
      { id: 'D', text: "AWS Local Zones" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Local Zones place compute, storage, database, and select AWS services close to large population and industry centers where no AWS Region currently exists.",
    referenceUrl: "https://aws.amazon.com/about-aws/global-infrastructure/localzones/",
    tags: ["Local Zones", "Infrastructure", "Latency"]
  },
  {
    id: "aws-clf-54",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Wavelength for 5G Ultra-Low Latency",
    scenario: "An autonomous vehicle fleet needs single-digit millisecond latency to mobile 5G network devices by hosting application components inside telecommunication carrier data centres.",
    question: "Which AWS infrastructure deployment brings AWS services to the edge of the 5G network?",
    options: [
      { id: 'A', text: "AWS Local Zones" },
      { id: 'B', text: "AWS Outposts" },
      { id: 'C', text: "AWS Snowcone" },
      { id: 'D', text: "AWS Wavelength" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Wavelength embeds AWS compute and storage services within 5G networks of telecommunications carriers, providing ultra-low latencies to 5G mobile devices.",
    referenceUrl: "https://aws.amazon.com/wavelength/",
    tags: ["Wavelength", "5G", "Edge Computing"]
  },
  {
    id: "aws-clf-55",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Operational Excellence Pillar of Well-Architected",
    scenario: "An engineering team adopts infrastructure as code, conducts blameless post-mortems after incidents, and continuously refines runbooks to improve operations.",
    question: "Which pillar of the AWS Well-Architected Framework focuses on running and monitoring systems to deliver business value and continually improving processes?",
    options: [
      { id: 'A', text: "Security Pillar" },
      { id: 'B', text: "Operational Excellence Pillar" },
      { id: 'C', text: "Performance Efficiency Pillar" },
      { id: 'D', text: "Reliability Pillar" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Operational Excellence pillar focuses on executing operations as code, making frequent small reversible changes, refining procedures, and learning from operational failures.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html",
    tags: ["Well-Architected", "Operational Excellence", "Cloud Concepts"]
  },
  {
    id: "aws-clf-56",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM User Groups for Team Permissions",
    scenario: "A system administrator needs to apply identical S3 and EC2 permissions to 15 newly hired quality assurance engineers without attaching policies to each user individually.",
    question: "Which IAM concept allows managing permissions for multiple users collectively?",
    options: [
      { id: 'A', text: "IAM Instance Profiles" },
      { id: 'B', text: "IAM User Groups" },
      { id: 'C', text: "IAM Roles" },
      { id: 'D', text: "Service Linked Roles" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An IAM User Group is a collection of IAM users. Groups allow you to specify permissions for multiple users at once, simplifying permission management across teams.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
    tags: ["IAM", "IAM Groups", "Security"]
  },
  {
    id: "aws-clf-57",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Credential Report for Account Auditing",
    scenario: "A compliance auditor requires a comprehensive report listing all IAM users in the AWS account, password statuses, access key rotation age, and MFA device status.",
    question: "Which IAM feature generates a downloadable CSV audit report of all credentials in the account?",
    options: [
      { id: 'A', text: "IAM Credential Report" },
      { id: 'B', text: "AWS Security Hub" },
      { id: 'C', text: "AWS Config" },
      { id: 'D', text: "IAM Access Analyzer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An IAM Credential Report lists all IAM users in your account and the status of their credentials (passwords, access keys, MFA devices, and signing certificates) in a downloadable CSV report.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html",
    tags: ["IAM", "Credential Report", "Security", "Auditing"]
  },
  {
    id: "aws-clf-58",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Access Analyzer for Public S3 Buckets",
    scenario: "A security engineer wants to automatically detect whether any Amazon S3 buckets or KMS keys allow access to external AWS accounts or the public internet.",
    question: "Which AWS feature analyzes resource-based policies using mathematical logic to identify unintended external access?",
    options: [
      { id: 'A', text: "Amazon GuardDuty" },
      { id: 'B', text: "IAM Access Analyzer" },
      { id: 'C', text: "Amazon Inspector" },
      { id: 'D', text: "AWS Trusted Advisor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IAM Access Analyzer uses automated reasoning to evaluate resource-based policies (for S3, KMS, SQS, IAM roles) and alerts administrators if resources are accessible from outside your AWS Organization or account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM", "Access Analyzer", "Security"]
  },
  {
    id: "aws-clf-59",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Security Hub Centralized Posture Management",
    scenario: "A CISO wants a single pane of glass dashboard that aggregates and prioritizes security findings from GuardDuty, Inspector, Macie, and AWS Firewall Manager.",
    question: "Which AWS security service provides a comprehensive view of security posture across accounts against security standards like CIS benchmarks?",
    options: [
      { id: 'A', text: "AWS Artifact" },
      { id: 'B', text: "Amazon CloudWatch" },
      { id: 'C', text: "AWS Security Hub" },
      { id: 'D', text: "AWS CloudTrail" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Security Hub is a cloud security posture management service that aggregates, organizes, and prioritizes security findings from multiple AWS services and third-party tools, evaluating compliance against CIS benchmarks.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["Security Hub", "Compliance", "Security"]
  },
  {
    id: "aws-clf-60",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Certificate Manager (ACM) for TLS Certificates",
    scenario: "A web team needs to provision and automatically renew public SSL/TLS certificates for custom domain names on Application Load Balancers at zero additional software cost.",
    question: "Which AWS service manages and automatically renews SSL/TLS certificates?",
    options: [
      { id: 'A', text: "AWS CloudHSM" },
      { id: 'B', text: "AWS Certificate Manager (ACM)" },
      { id: 'C', text: "AWS Secrets Manager" },
      { id: 'D', text: "AWS KMS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Certificate Manager (ACM) provisions, manages, and deploys public and private SSL/TLS certificates for use with AWS services (ELB, CloudFront, API Gateway), providing free public certificates with automated renewal.",
    referenceUrl: "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
    tags: ["ACM", "SSL/TLS", "Security", "Certificates"]
  },
  {
    id: "aws-clf-61",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "EC2 Memory Optimized Instance Family",
    scenario: "A data science team needs to run memory-intensive in-memory data processing engines (such as Apache Spark and SAP HANA) on EC2.",
    question: "Which Amazon EC2 instance family is optimized for workloads that process large datasets in memory?",
    options: [
      { id: 'A', text: "Accelerated Computing (P and G instance families)" },
      { id: 'B', text: "Storage Optimized (I and D instance families)" },
      { id: 'C', text: "Compute Optimized (C instance family)" },
      { id: 'D', text: "Memory Optimized (R and X instance families)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Memory Optimized instances (such as R6g, R5, X2gd) deliver fast performance for workloads that process large data sets in memory, such as in-memory caches and high-performance databases.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html",
    tags: ["EC2", "Instance Types", "Compute"]
  },
  {
    id: "aws-clf-62",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "EC2 Auto Scaling Target Tracking Policies",
    scenario: "A web application's traffic fluctuates throughout the day. The infrastructure must maintain average fleet CPU utilization at 60% by automatically adding and terminating EC2 instances.",
    question: "Which Amazon EC2 Auto Scaling scaling policy dynamically adjusts capacity based on a specific metric target value?",
    options: [
      { id: 'A', text: "Scheduled Scaling" },
      { id: 'B', text: "Target Tracking Scaling Policy" },
      { id: 'C', text: "Manual Scaling" },
      { id: 'D', text: "Predictive Scaling" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With Target Tracking Scaling, you specify a target metric value (e.g. 60% average CPU utilization), and Amazon EC2 Auto Scaling automatically adjusts instance capacity to maintain that target.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
    tags: ["Auto Scaling", "EC2", "Compute", "Elasticity"]
  },
  {
    id: "aws-clf-63",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EKS Managed Kubernetes Service",
    scenario: "An enterprise has existing Kubernetes manifests and tooling and wants to run managed Kubernetes clusters on AWS without managing control plane nodes.",
    question: "Which AWS managed container service provides full compatibility with open-source Kubernetes?",
    options: [
      { id: 'A', text: "Amazon Elastic Container Service (Amazon ECS)" },
      { id: 'B', text: "Amazon Lightsail" },
      { id: 'C', text: "Amazon Elastic Kubernetes Service (Amazon EKS)" },
      { id: 'D', text: "AWS Elastic Beanstalk" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon EKS is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain Kubernetes control plane nodes.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html",
    tags: ["EKS", "Kubernetes", "Containers"]
  },
  {
    id: "aws-clf-64",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Fargate Serverless Compute for Containers",
    scenario: "A developer wants to run Docker containers on Amazon ECS without provisioning, configuring, patching, or scaling the underlying virtual machine instances.",
    question: "Which AWS serverless compute engine for containers removes the need to manage EC2 server instances?",
    options: [
      { id: 'A', text: "Amazon Lightsail" },
      { id: 'B', text: "Amazon EC2" },
      { id: 'C', text: "AWS Fargate" },
      { id: 'D', text: "AWS Batch" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Fargate is a serverless, pay-as-you-go compute engine for containers that works with both Amazon ECS and Amazon EKS, eliminating the need to manage EC2 servers.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html",
    tags: ["Fargate", "Serverless", "Containers"]
  },
  {
    id: "aws-clf-65",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Intelligent-Tiering Storage Class",
    scenario: "A data lake contains petabytes of analytical files with unpredictable access patterns. The company wants automated cost savings without paying retrieval fees.",
    question: "Which Amazon S3 storage class automatically moves objects between frequent, infrequent, and archive tiers without retrieval charges?",
    options: [
      { id: 'A', text: "S3 Intelligent-Tiering" },
      { id: 'B', text: "S3 Standard" },
      { id: 'C', text: "S3 Glacier Instant Retrieval" },
      { id: 'D', text: "S3 Standard-IA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "S3 Intelligent-Tiering delivers automatic cost savings by moving objects between access tiers when access patterns change, with zero operational overhead and no retrieval fees.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["S3", "Intelligent-Tiering", "Cost Optimization", "Storage"]
  },
  {
    id: "aws-clf-66",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Glacier Deep Archive Storage Class",
    scenario: "A regulatory agency requires medical records to be stored for 20 years. Data is accessed at most once or twice a decade, and a 12-hour retrieval window is acceptable.",
    question: "Which Amazon S3 storage class provides the lowest storage cost across all of AWS?",
    options: [
      { id: 'A', text: "S3 Glacier Flexible Retrieval" },
      { id: 'B', text: "S3 Glacier Deep Archive" },
      { id: 'C', text: "S3 Standard-IA" },
      { id: 'D', text: "S3 One Zone-IA" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class, designed for long-term retention and digital preservation of data that is accessed rarely (retrieval within 12 hours).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier-deep-arc",
    tags: ["S3", "Glacier Deep Archive", "Storage", "Archival"]
  },
  {
    id: "aws-clf-67",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora High Performance Relational Database",
    scenario: "An enterprise requires a MySQL/PostgreSQL-compatible relational database that delivers up to 5x standard MySQL throughput, replicates data 6 ways across 3 AZs, and auto-scales storage.",
    question: "Which AWS proprietary relational database engine offers enterprise-grade speed and reliability with open-source compatibility?",
    options: [
      { id: 'A', text: "Amazon DynamoDB" },
      { id: 'B', text: "Amazon RDS for MariaDB" },
      { id: 'C', text: "Amazon Aurora" },
      { id: 'D', text: "Amazon DocumentDB" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database built for the cloud that combines high-end commercial database performance with open-source simplicity and cost-effectiveness.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html",
    tags: ["Aurora", "RDS", "Databases", "High Availability"]
  },
  {
    id: "aws-clf-68",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Athena Serverless Interactive SQL Analytics",
    scenario: "A security analyst needs to run ad-hoc SQL queries directly against raw CSV and JSON log files stored in Amazon S3 without loading them into a database or managing servers.",
    question: "Which interactive, serverless query service allows querying data in Amazon S3 using standard SQL?",
    options: [
      { id: 'A', text: "Amazon Redshift" },
      { id: 'B', text: "Amazon Athena" },
      { id: 'C', text: "Amazon OpenSearch Service" },
      { id: 'D', text: "Amazon EMR" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Athena is an interactive, serverless query service that makes it easy to analyze data in Amazon S3 using standard SQL, with no infrastructure to manage and billing per query scanned.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
    tags: ["Athena", "SQL", "Serverless", "Analytics", "S3"]
  },
  {
    id: "aws-clf-69",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EventBridge Serverless Event Bus Integration",
    scenario: "An architecture needs to trigger automated AWS Step Functions workflows whenever a third-party SaaS partner (such as Zendesk or Datadog) emits an event.",
    question: "Which serverless event bus service connects SaaS applications and AWS services together using events?",
    options: [
      { id: 'A', text: "Amazon SNS" },
      { id: 'B', text: "Amazon EventBridge" },
      { id: 'C', text: "AWS AppSync" },
      { id: 'D', text: "Amazon MQ" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is-how-it-works.html",
    tags: ["EventBridge", "Event-Driven", "Serverless", "Application Integration"]
  },
  {
    id: "aws-clf-70",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Beanstalk PaaS Application Hosting",
    scenario: "A developer wants to upload a Java web application package and have AWS handle deployment, provisioning, load balancing, auto-scaling, and health monitoring automatically.",
    question: "Which AWS PaaS service provides easy deployment and scaling of web applications?",
    options: [
      { id: 'A', text: "AWS Elastic Beanstalk" },
      { id: 'B', text: "AWS CodePipeline" },
      { id: 'C', text: "AWS App Runner" },
      { id: 'D', text: "AWS CloudFormation" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar web servers.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html",
    tags: ["Elastic Beanstalk", "PaaS", "Compute", "Deployment"]
  },
  {
    id: "aws-clf-71",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost and Usage Report (CUR) Detailed Billing",
    scenario: "A financial data team needs the most granular AWS billing dataset available, detailing hourly resource usage, line-item metadata, pricing, and tax across the entire organization.",
    question: "Which AWS billing report provides the most comprehensive and detailed breakdown of AWS costs and usage data?",
    options: [
      { id: 'A', text: "AWS Budgets Report" },
      { id: 'B', text: "AWS Cost and Usage Report (AWS CUR)" },
      { id: 'C', text: "Monthly Billing Invoice PDF" },
      { id: 'D', text: "AWS Cost Explorer" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS Cost and Usage Report (AWS CUR) delivers comprehensive billing data, publishing hourly or daily line-item records into an Amazon S3 bucket for analysis.",
    referenceUrl: "https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",
    tags: ["CUR", "Billing", "FinOps", "Cost Management"]
  },
  {
    id: "aws-clf-72",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Budgets Alerting on Forecasted Spend",
    scenario: "A cloud administrator wants to be notified via email when the monthly cost of EC2 instances is forecasted to exceed $5,000 before the billing cycle ends.",
    question: "Which AWS feature can evaluate and alert on both actual and forecasted cloud expenditures?",
    options: [
      { id: 'A', text: "AWS Pricing Calculator" },
      { id: 'B', text: "AWS Trusted Advisor" },
      { id: 'C', text: "AWS Budgets" },
      { id: 'D', text: "AWS Cost Anomaly Detection" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
    tags: ["AWS Budgets", "Billing", "Alerts", "FinOps"]
  },
  {
    id: "aws-clf-73",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Business Support 24x7 Response SLA",
    scenario: "A production workload requires 24x7 phone, email, and chat access to Cloud Support Engineers with a 1-hour response time SLA for production-system down issues.",
    question: "Which AWS Support Plan provides 24x7 technical support via phone and chat for production workloads?",
    options: [
      { id: 'A', text: "AWS Developer Support" },
      { id: 'B', text: "AWS Basic Support" },
      { id: 'C', text: "AWS Business Support" },
      { id: 'D', text: "AWS Free Tier" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Business Support provides 24x7 phone, email, and chat access to Cloud Support Engineers with a <1 hour response time for production system down cases and access to all Trusted Advisor checks.",
    referenceUrl: "https://aws.amazon.com/premiumsupport/plans/business/",
    tags: ["Support Plans", "Business Support", "Billing"]
  },
  {
    id: "aws-clf-74",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "Consolidated Billing Tiered Volume Discounts",
    scenario: "Three separate development accounts across an enterprise each transfer 10 TB of outbound internet data. Under a standalone billing model, each account pays tier-1 data transfer rates.",
    question: "How does enabling Consolidated Billing in AWS Organizations benefit data transfer costs?",
    options: [
      { id: 'A', text: "All outbound data transfer fees are waived for members of an organization." },
      { id: 'B', text: "Data transfer is billed at a fixed flat rate regardless of volume." },
      { id: 'C', text: "Usage across all member accounts is aggregated, allowing the organization to reach higher volume discount pricing tiers faster." },
      { id: 'D', text: "AWS provides a 50% discount on all compute services automatically." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Organizations aggregates usage from all member accounts in the organization, enabling the combined volume to qualify for tiered pricing discounts for services like S3 storage and data transfer.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    tags: ["Organizations", "Consolidated Billing", "Volume Discounts", "Billing"]
  },
  {
    id: "aws-clf-75",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Disaster Recovery Strategies: Active-Active Multi-Region",
    scenario: "A disaster recovery planner is evaluating DR strategies on AWS. The company needs the lowest Recovery Time Objective (RTO) and Recovery Point Objective (RPO) and is willing to pay for continuous multi-region active infrastructure.",
    question: "Which AWS disaster recovery strategy provides near-zero RTO and RPO by serving traffic from multiple AWS Regions simultaneously?",
    options: [
      { id: 'A', text: "Pilot Light" },
      { id: 'B', text: "Backup and Restore" },
      { id: 'C', text: "Multi-Region Active-Active" },
      { id: 'D', text: "Warm Standby" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-Region Active-Active serves traffic from multiple full-scale active Regions simultaneously, achieving near-zero RTO and RPO at the highest implementation cost.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "RTO", "RPO", "Cloud Concepts", "Reliability"]
  }
];

export default AWS_CLF_QUESTIONS_3;
