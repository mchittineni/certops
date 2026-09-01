export const AWS_CLF_QUESTIONS_1 = [
  {
    id: "aws-clf-1",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Shared Responsibility Model - Customer Responsibility",
    scenario: "A company is moving a web application onto Amazon EC2 instances and wants to confirm which security tasks remain its own responsibility rather than AWS's under the AWS Shared Responsibility Model.",
    question: "Which task is the responsibility of the customer?",
    options: [
      { id: 'A', text: "Replacing failed physical disks in the AWS data centre." },
      { id: 'B', text: "Patching the hypervisor that hosts EC2 instances." },
      { id: 'C', text: "Applying operating system and application security patches on the EC2 instances." },
      { id: 'D', text: "Maintaining physical access controls at AWS Availability Zones." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Under the Shared Responsibility Model, AWS is responsible for security OF the cloud - hardware, the physical facilities, and the virtualisation layer - while the customer is responsible for security IN the cloud. For EC2, that includes guest OS patching, application patching, security group configuration, and data encryption. Replacing failed physical disks, maintaining physical access controls at Availability Zones, and patching the hypervisor all describe AWS-managed infrastructure the customer cannot access.",
    referenceUrl: "https://aws.amazon.com/compliance/shared-responsibility-model/",
    tags: ["Shared Responsibility", "Security", "EC2"]
  },
  {
    id: "aws-clf-2",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "Consolidated Billing and Cost Optimization",
    scenario: "An enterprise runs 12 AWS accounts for separate business units. Finance wants a single monthly invoice, and the platform team wants unused Reserved Instance and Savings Plan capacity purchased in one account to benefit workloads in the others.",
    question: "Which AWS feature provides both outcomes?",
    options: [
      { id: 'A', text: "A separate AWS Budget in each account with an alert at 100% of the monthly forecast." },
      { id: 'B', text: "Cost allocation tags applied consistently across all 12 accounts." },
      { id: 'C', text: "AWS Cost Explorer with a monthly scheduled report emailed to finance." },
      { id: 'D', text: "Consolidated billing in AWS Organizations, which aggregates usage across member accounts and shares Reserved Instance and Savings Plans discounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Consolidated billing in AWS Organizations produces one invoice for the whole organisation, aggregates usage so accounts reach volume-pricing tiers sooner, and shares Reserved Instance and Savings Plans benefits across member accounts by default. Cost Explorer reports on spend but does not change billing or discount sharing, Budgets only alert, and cost allocation tags attribute spend without consolidating it.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    tags: ["Organizations", "Consolidated Billing", "Savings Plans", "Cost"]
  },
  {
    id: "aws-clf-3",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Serverless Compute Architecture",
    scenario: "A team wants to run a short image-resizing function whenever a file is uploaded to Amazon S3. They do not want to provision, patch, or scale any servers, and they want to pay only for the time the code actually runs.",
    question: "Which AWS service should they use?",
    options: [
      { id: 'A', text: "AWS Lambda" },
      { id: 'B', text: "Amazon Lightsail" },
      { id: 'C', text: "Amazon EC2 with an Auto Scaling group" },
      { id: 'D', text: "AWS Elastic Beanstalk" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Lambda is the serverless compute service: it runs code in response to events such as an S3 upload, scales automatically, requires no server management, and bills per millisecond of execution. EC2 and Lightsail both mean managing instances you pay for while idle, and Elastic Beanstalk provisions and bills for the underlying EC2 capacity even though it automates deployment.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
    tags: ["Lambda", "Serverless", "Compute"]
  },
  {
    id: "aws-clf-4",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Multi-Factor Authentication (MFA) Best Practice",
    scenario: "A new AWS account has been created and the team is reviewing the security recommendations in the IAM console before granting anyone access.",
    question: "Which action is an AWS security best practice for the account root user?",
    options: [
      { id: 'A', text: "Create root user access keys and store them in the application configuration." },
      { id: 'B', text: "Use the root user for daily administration but rotate its password monthly." },
      { id: 'C', text: "Share the root user password with all administrators so they can respond to incidents." },
      { id: 'D', text: "Enable multi-factor authentication on the root user, then create individual IAM identities for daily work and stop using root." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS recommends locking away the root user: enable MFA on it, do not create root access keys, and perform everyday work with individual IAM users or roles that have least-privilege permissions. Sharing root credentials destroys auditability, root access keys are an explicit anti-pattern, and using root for daily work means every action runs with unrestricted permissions.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
    tags: ["IAM", "MFA", "Root User", "Security"]
  },
  {
    id: "aws-clf-5",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Choosing the Right Migration Service",
    scenario: "A retailer must move 400 TB of historical sales archives from an on-premises SAN into Amazon S3. The site has a 100 Mbps internet uplink that is already 70% utilised during business hours, and the migration must finish within three weeks.",
    question: "Which AWS service should the company use?",
    options: [
      { id: 'A', text: "AWS Database Migration Service (DMS) with a full-load task." },
      { id: 'B', text: "AWS DataSync over the existing internet connection." },
      { id: 'C', text: "AWS Snowball Edge Storage Optimized devices shipped to the AWS Region." },
      { id: 'D', text: "The S3 console multipart upload feature run overnight." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "At an effective 30 Mbps of spare bandwidth, 400 TB would take well over a year to transfer online, so a physical offline transfer device is the only option that meets the deadline. AWS Snowball Edge ships ruggedised appliances you fill locally and return to AWS. DataSync and multipart upload are still bound by the uplink, and DMS is for databases, not file archives.",
    referenceUrl: "https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html",
    tags: ["Snowball", "Migration", "Data Transfer"]
  },
  {
    id: "aws-clf-6",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Which Service Answers an Auditor Asking Who Deleted a Resource",
    scenario: "During a compliance audit, the security team must produce evidence of which identity deleted a specific Amazon S3 bucket, when, and from which source IP address.",
    question: "Which AWS service provides this record?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor security checks." },
      { id: 'B', text: "Amazon CloudWatch metrics for the S3 namespace." },
      { id: 'C', text: "AWS CloudTrail event history." },
      { id: 'D', text: "Amazon Inspector assessment reports." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS CloudTrail records management-plane API activity - the identity, timestamp, source IP, request parameters, and response for every call - which is exactly the audit trail required. CloudWatch reports performance metrics, Trusted Advisor gives best-practice recommendations, and Amazon Inspector scans workloads for software vulnerabilities.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
    tags: ["CloudTrail", "Auditing", "Compliance"]
  },
  {
    id: "aws-clf-7",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "Separating Estimation, Analysis, and Enforcement of Cloud Spend",
    scenario: "A finance team wants three distinct capabilities: model the monthly cost of a not-yet-built architecture, break down last quarter's actual spend by team using cost allocation tags, and receive an alert plus an automated action when a project account exceeds 80% of its monthly allowance.",
    question: "Which services deliver these three capabilities, in that order?",
    options: [
      { id: 'A', text: "AWS Pricing Calculator, AWS Cost Explorer, AWS Budgets with budget actions." },
      { id: 'B', text: "AWS Trusted Advisor, AWS Pricing Calculator, Amazon CloudWatch billing alarms." },
      { id: 'C', text: "AWS Budgets, AWS Cost and Usage Report, AWS Compute Optimizer." },
      { id: 'D', text: "AWS Cost Explorer, AWS Budgets, AWS Pricing Calculator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS Pricing Calculator models the cost of a planned architecture before it exists. Cost Explorer visualises and filters historical spend, including by cost allocation tag. AWS Budgets sets thresholds, sends alerts, and - through budget actions - can automatically apply an IAM or SCP restriction or stop instances when a threshold is crossed. The other orderings invert the purpose of each tool.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
    tags: ["Pricing Calculator", "Cost Explorer", "Budgets", "Billing"]
  },
  {
    id: "aws-clf-8",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Guardrails Across a Multi-Account Organization",
    scenario: "A company with 60 AWS accounts under AWS Organizations must guarantee that no workload account can create resources outside eu-central-1 and eu-west-1, even if an account administrator holds full IAM administrator permissions in that account.",
    question: "Which mechanism enforces this requirement?",
    options: [
      { id: 'A', text: "IAM Access Analyzer findings reviewed weekly by the security team." },
      { id: 'B', text: "A Service Control Policy attached to the workload OU that denies actions outside the two approved Regions." },
      { id: 'C', text: "An AWS Config rule that flags resources created in non-approved Regions." },
      { id: 'D', text: "An IAM permissions policy with a Region condition attached to every user in each account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Service Control Policy sets the maximum available permissions for every principal in the accounts beneath it, so even a local account administrator cannot exceed it - the defining property this scenario requires. Per-user IAM policies can be edited or bypassed by a local admin, while AWS Config and IAM Access Analyzer detect and report after the fact rather than preventing the action.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations", "SCP", "Governance", "Security"]
  },
  {
    id: "aws-clf-9",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Agility and Elasticity Benefits of Cloud Computing",
    scenario: "A startup experiences sudden viral spikes in web traffic during product launches and needs computing resources that automatically scale up in minutes and scale back down when traffic returns to normal.",
    question: "Which cloud computing principle enables dynamic scaling based on real-time demand?",
    options: [
      { id: 'A', text: "Reliability" },
      { id: 'B', text: "Elasticity" },
      { id: 'C', text: "Global Reach" },
      { id: 'D', text: "Fixed Capacity" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Elasticity is the ability to acquire resources as you need them and release them when you no longer need them. In AWS, elasticity allows workloads to automatically expand and contract in response to traffic fluctuations, eliminating the need to pre-provision expensive hardware for peak loads.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
    tags: ["Cloud Concepts", "Elasticity", "Scalability"]
  },
  {
    id: "aws-clf-10",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "High Availability vs Fault Tolerance",
    scenario: "An architect designs an application to run across multiple Availability Zones in an AWS Region so that the system remains accessible even if a single data centre experiences a power failure.",
    question: "Which cloud architectural concept is demonstrated by deploying across multiple Availability Zones?",
    options: [
      { id: 'A', text: "Cost Reduction" },
      { id: 'B', text: "High Availability" },
      { id: 'C', text: "Strict Latency Optimization" },
      { id: 'D', text: "Data Sovereignty" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "High Availability (HA) ensures that systems operate continuously without failing for long periods by deploying redundant components across independent fault domains, such as multiple AWS Availability Zones. If one AZ fails, traffic is routed to operational AZs with minimal or no downtime.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-fault-tolerance.html",
    tags: ["Cloud Concepts", "High Availability", "Availability Zones"]
  },
  {
    id: "aws-clf-11",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Well-Architected Framework: Sustainability Pillar",
    scenario: "A company wants to minimize the environmental impact of its cloud workloads by selecting efficient processor architectures and reducing idle compute resources.",
    question: "Which pillar of the AWS Well-Architected Framework focuses on minimizing environmental impacts?",
    options: [
      { id: 'A', text: "Performance Efficiency Pillar" },
      { id: 'B', text: "Operational Excellence Pillar" },
      { id: 'C', text: "Sustainability Pillar" },
      { id: 'D', text: "Cost Optimization Pillar" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Sustainability Pillar focuses on environmental impacts, especially energy consumption and efficiency. Best practices include maximizing resource utilization, adopting efficient hardware (like AWS Graviton processors), and scaling down unneeded resources.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/welcome.html",
    tags: ["Well-Architected", "Sustainability", "Cloud Concepts"]
  },
  {
    id: "aws-clf-12",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Principle of Least Privilege",
    scenario: "A junior software developer needs access to read objects in an S3 bucket named `company-media` for testing, but should not have permission to delete objects or access any other S3 buckets.",
    question: "Which security best practice should be applied when crafting the IAM policy?",
    options: [
      { id: 'A', text: "Allow full S3 access (`s3:*`) across all AWS resources." },
      { id: 'B', text: "Grant full administrator access to avoid blocking development progress." },
      { id: 'C', text: "Grant least privilege by allowing only `s3:GetObject` on `arn:aws:s3:::company-media/*`." },
      { id: 'D', text: "Attach the AWS managed `AdministratorAccess` policy with a temporary expiration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The principle of least privilege states that users should be granted only the minimum permissions required to perform their specific job functions. Granting `s3:GetObject` on the specific bucket path enforces least privilege without exposing sensitive delete operations or other buckets.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege",
    tags: ["IAM", "Least Privilege", "Security"]
  },
  {
    id: "aws-clf-13",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Shield Standard vs AWS Shield Advanced",
    scenario: "A financial portal requires automated Distributed Denial of Service (DDoS) protection at Layers 3 and 4 at no additional cost for all AWS customers.",
    question: "Which AWS service provides automatic DDoS protection out-of-the-box for all AWS workloads?",
    options: [
      { id: 'A', text: "AWS Network Firewall" },
      { id: 'B', text: "AWS Shield Advanced" },
      { id: 'C', text: "AWS WAF" },
      { id: 'D', text: "AWS Shield Standard" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Shield Standard is automatically enabled for all AWS customers at no additional cost. It protects against the most common infrastructure (Layer 3 and 4) DDoS attacks, such as SYN/UDP floods and reflection attacks, safeguarding CloudFront distributions, Route 53, and Elastic Load Balancers.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html",
    tags: ["AWS Shield", "DDoS", "Security"]
  },
  {
    id: "aws-clf-14",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Key Management Service (KMS) for Data at Rest",
    scenario: "A healthcare provider must encrypt sensitive patient data stored in Amazon S3 buckets using encryption keys that can be centrally created, rotated, and audited.",
    question: "Which AWS managed service manages encryption keys and integrates natively with AWS storage services?",
    options: [
      { id: 'A', text: "AWS Certificate Manager (ACM)" },
      { id: 'B', text: "AWS CloudHSM" },
      { id: 'C', text: "AWS Secrets Manager" },
      { id: 'D', text: "AWS Key Management Service (AWS KMS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Key Management Service (AWS KMS) makes it easy to create and control cryptographic keys used to encrypt data across AWS services and applications. KMS integrates with AWS CloudTrail to provide logs of all key usage for regulatory compliance.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
    tags: ["AWS KMS", "Encryption", "Security"]
  },
  {
    id: "aws-clf-15",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Artifact for On-Demand Compliance Reports",
    scenario: "An enterprise auditor requests copies of AWS compliance certifications, including SOC 2 reports and ISO 27001 certifications, to verify regulatory adherence.",
    question: "Which AWS portal provides on-demand access to AWS security and compliance documents?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "AWS Audit Manager" },
      { id: 'C', text: "AWS Artifact" },
      { id: 'D', text: "AWS Security Hub" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Artifact is a self-service audit portal that provides on-demand downloads of AWS security and compliance reports (such as SOC, PCI-DSS, and ISO certifications) as well as select agreements (such as Business Associate Addendum / BAA).",
    referenceUrl: "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
    tags: ["AWS Artifact", "Compliance", "Security"]
  },
  {
    id: "aws-clf-16",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Classes: S3 Standard vs S3 Glacier",
    scenario: "A legal firm needs to archive closed client case records for 10 years to comply with regulatory mandates. Files are rarely retrieved, and retrieval times of 3-5 hours are acceptable.",
    question: "Which Amazon S3 storage class offers the lowest storage cost for long-term archival with asynchronous retrieval?",
    options: [
      { id: 'A', text: "S3 Standard" },
      { id: 'B', text: "S3 Glacier Flexible Retrieval" },
      { id: 'C', text: "S3 One Zone-IA" },
      { id: 'D', text: "S3 Standard-Infrequent Access (S3 Standard-IA)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "S3 Glacier Flexible Retrieval (formerly S3 Glacier) is a secure, durable, and low-cost storage class for archival data that is accessed 1-2 times per year, offering retrieval options from minutes to hours. S3 Standard is for active data, and Standard-IA is for monthly access.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["S3", "Storage Classes", "Glacier", "Storage"]
  },
  {
    id: "aws-clf-17",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Automated Backups and Multi-AZ Deployments",
    scenario: "A banking web app requires high availability and automatic failover for its PostgreSQL database in the event of an infrastructure outage in an Availability Zone.",
    question: "Which Amazon Relational Database Service (Amazon RDS) feature provides synchronous data replication and automated failover?",
    options: [
      { id: 'A', text: "Amazon ElastiCache Redis cluster" },
      { id: 'B', text: "Amazon RDS Multi-AZ deployment" },
      { id: 'C', text: "Amazon DynamoDB global tables" },
      { id: 'D', text: "Amazon RDS Read Replicas" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon RDS Multi-AZ deployments synchronously replicate database writes to a standby replica in a different Availability Zone. In the event of planned maintenance or host failure, RDS automatically fails over to the standby instance without manual administrative intervention.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
    tags: ["RDS", "Multi-AZ", "Databases", "High Availability"]
  },
  {
    id: "aws-clf-18",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon DynamoDB NoSQL Key-Value Database",
    scenario: "A gaming company needs a fully managed, serverless database that delivers single-digit millisecond latency at any scale for player session state and leaderboards.",
    question: "Which AWS database service meets these requirements?",
    options: [
      { id: 'A', text: "Amazon DynamoDB" },
      { id: 'B', text: "Amazon Aurora Serverless PostgreSQL" },
      { id: 'C', text: "Amazon Redshift" },
      { id: 'D', text: "Amazon RDS for MySQL" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database that provides single-digit millisecond performance at any scale, automatic multi-AZ data replication, and serverless on-demand capacity scaling.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
    tags: ["DynamoDB", "NoSQL", "Databases", "Serverless"]
  },
  {
    id: "aws-clf-19",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon CloudFront Global Content Delivery Network",
    scenario: "An international e-commerce site wants to speed up delivery of static images, CSS stylesheets, and videos to global customers by caching content near end users.",
    question: "Which AWS service provides low-latency content delivery via a global network of Edge Locations?",
    options: [
      { id: 'A', text: "Amazon Route 53" },
      { id: 'B', text: "AWS Transit Gateway" },
      { id: 'C', text: "Amazon CloudFront" },
      { id: 'D', text: "AWS Direct Connect" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon CloudFront is a fast Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds using AWS Edge Locations.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
    tags: ["CloudFront", "CDN", "Edge Locations", "Networking"]
  },
  {
    id: "aws-clf-20",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Virtual Private Cloud (VPC) Security Groups vs Network ACLs",
    scenario: "A network engineer wants to filter inbound and outbound traffic to specific Amazon EC2 instances. The firewall must operate at the instance/ENI level and be stateful.",
    question: "Which AWS networking security feature should be configured?",
    options: [
      { id: 'A', text: "Network Access Control Lists (NACLs)" },
      { id: 'B', text: "Route Tables" },
      { id: 'C', text: "Internet Gateways" },
      { id: 'D', text: "Security Groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security Groups act as virtual firewalls at the instance/network interface (ENI) level and are **stateful** (return traffic is automatically allowed regardless of inbound/outbound rules). Network ACLs operate at the subnet level and are stateless.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
    tags: ["VPC", "Security Groups", "Networking", "Security"]
  },
  {
    id: "aws-clf-21",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Free Tier Types: Always Free, 12 Months Free, and Short-Term Trials",
    scenario: "A developer wants to explore AWS and understand which Free Tier offerings never expire even after the initial 12-month sign-up period.",
    question: "Which AWS Free Tier category provides perpetual free usage allowances each month?",
    options: [
      { id: 'A', text: "Short-term Trials" },
      { id: 'B', text: "Enterprise Discount Program" },
      { id: 'C', text: "12 Months Free" },
      { id: 'D', text: "Always Free" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Free Tier offers three categories: **Always Free** (available indefinitely to all customers, such as 1 million free Lambda requests/month and 25 GB of DynamoDB storage), **12 Months Free** (available for the first year after sign-up), and **Trials**.",
    referenceUrl: "https://aws.amazon.com/free/",
    tags: ["Free Tier", "Billing", "Cost"]
  },
  {
    id: "aws-clf-22",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Trusted Advisor Best Practice Categories",
    scenario: "A system administrator runs a health check to identify unattached Amazon EBS volumes, overly permissive security groups, and underutilized Amazon EC2 instances.",
    question: "Which AWS service provides automated recommendations across cost, performance, security, fault tolerance, and service limits?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "AWS Compute Optimizer" },
      { id: 'C', text: "AWS Systems Manager" },
      { id: 'D', text: "AWS Cost Anomaly Detection" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Trusted Advisor continuously inspects AWS environments and provides real-time recommendations across five pillars: Cost Optimization, Security, Fault Tolerance, Performance, and Service Quotas (Limits).",
    referenceUrl: "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
    tags: ["Trusted Advisor", "Best Practices", "Cost", "Security"]
  },
  {
    id: "aws-clf-23",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Support Plans: Technical Account Manager (TAM)",
    scenario: "An enterprise customer requires a dedicated primary technical contact (TAM) at AWS who provides architectural guidance, proactive operational reviews, and designated event support.",
    question: "Which AWS Support tier is the minimum required to receive a Technical Account Manager (TAM)?",
    options: [
      { id: 'A', text: "Business Support" },
      { id: 'B', text: "Basic Support" },
      { id: 'C', text: "Enterprise Support (or Enterprise On-Ramp)" },
      { id: 'D', text: "Developer Support" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enterprise Support (and Enterprise On-Ramp) is the support tier that assigns a dedicated **Technical Account Manager (TAM)** who acts as a trusted technical advisor, coordinates access to Subject Matter Experts, and conducts Well-Architected reviews.",
    referenceUrl: "https://aws.amazon.com/premiumsupport/plans/",
    tags: ["Support Plans", "Enterprise Support", "TAM", "Billing"]
  },
  {
    id: "aws-clf-24",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Route 53 Routing Policies: Latency vs Geolocation",
    scenario: "A global web application is hosted in both `us-east-1` and `eu-central-1`. The team wants incoming DNS queries routed automatically to the AWS Region that provides the lowest network latency for the requesting user.",
    question: "Which Amazon Route 53 routing policy should be configured?",
    options: [
      { id: 'A', text: "Failover Routing Policy" },
      { id: 'B', text: "Geolocation Routing Policy" },
      { id: 'C', text: "Latency Routing Policy" },
      { id: 'D', text: "Weighted Routing Policy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Latency Routing directs client traffic to the AWS Region that gives the user the lowest network round-trip time based on AWS worldwide network measurements. Geolocation routes based on physical geographic location (e.g. continent/country), not measured speed.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html",
    tags: ["Route 53", "DNS", "Latency Routing", "Networking"]
  },
  {
    id: "aws-clf-25",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Elastic Load Balancing (ELB) Types: ALB vs NLB",
    scenario: "A microservices application routes HTTP and HTTPS requests based on URL path rules (e.g. `/orders` vs `/catalog`) to different container target groups.",
    question: "Which Elastic Load Balancer type operates at Layer 7 and supports path-based and host-based routing?",
    options: [
      { id: 'A', text: "Network Load Balancer (NLB)" },
      { id: 'B', text: "Gateway Load Balancer (GWLB)" },
      { id: 'C', text: "Classic Load Balancer (CLB)" },
      { id: 'D', text: "Application Load Balancer (ALB)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Application Load Balancer (ALB) operates at Layer 7 (Application Layer) and supports advanced HTTP/HTTPS routing features such as path-based routing, host-based routing, HTTP/2, and native container integration. NLB operates at Layer 4 (TCP/UDP) for extreme performance.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
    tags: ["ELB", "ALB", "Load Balancing", "Networking"]
  }
];

export default AWS_CLF_QUESTIONS_1;
