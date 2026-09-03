export const AWS_CLF_QUESTIONS_2 = [
  {
    id: "aws-clf-26",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Trade Upfront Expense for Variable Expense",
    scenario: "A company wants to replace large upfront capital expenditures on data centre hardware with low variable monthly operational expenses that scale with actual usage.",
    question: "Which advantage of cloud computing describes replacing upfront capital expenditure with ongoing variable expense?",
    options: [
      { id: 'A', text: "Increase speed and agility." },
      { id: 'B', text: "Stop guessing capacity." },
      { id: 'C', text: "Trade upfront expense for variable expense." },
      { id: 'D', text: "Benefit from massive economies of scale." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Trading upfront expense for variable expense allows organizations to pay only for the compute and storage resources they consume, shifting costs from CapEx to OpEx without heavy upfront investments in hardware facilities.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
    tags: ["Cloud Concepts", "CapEx vs OpEx", "Economics"]
  },
  {
    id: "aws-clf-27",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Adoption Framework (AWS CAF) Perspectives",
    scenario: "An enterprise is planning its digital cloud migration and is organizing stakeholder teams across Business, People, Governance, Platform, Security, and Operations.",
    question: "Which framework provides these six foundational perspectives to structure cloud transformation?",
    options: [
      { id: 'A', text: "AWS Control Tower" },
      { id: 'B', text: "AWS Migration Hub" },
      { id: 'C', text: "AWS Cloud Adoption Framework (AWS CAF)" },
      { id: 'D', text: "AWS Well-Architected Framework" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS Cloud Adoption Framework (AWS CAF) organizes guidance into six perspectives: Business, People, Governance (business-focused) and Platform, Security, Operations (technical-focused) to help organizations build an actionable roadmap for cloud transformation.",
    referenceUrl: "https://aws.amazon.com/professional-services/CAF/",
    tags: ["CAF", "Cloud Concepts", "Governance"]
  },
  {
    id: "aws-clf-28",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "IAM Role Assumption for EC2 Instances",
    scenario: "An application running on an Amazon EC2 instance needs to read and write records to an Amazon DynamoDB table without hardcoding AWS access keys in code or config files.",
    question: "Which IAM entity should be attached to the EC2 instance?",
    options: [
      { id: 'A', text: "An IAM Role assigned via an EC2 Instance Profile." },
      { id: 'B', text: "An IAM User with long-term secret access keys." },
      { id: 'C', text: "The AWS Account Root user credentials." },
      { id: 'D', text: "An IAM Group with DynamoDB permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM Roles deliver temporary security credentials automatically to applications running on EC2 instances through an Instance Profile. This eliminates the security hazard of embedding permanent access keys into application code.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
    tags: ["IAM", "IAM Roles", "EC2", "Security"]
  },
  {
    id: "aws-clf-29",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon GuardDuty Intelligent Threat Detection",
    scenario: "A security operations team requires continuous, intelligent threat detection that monitors AWS CloudTrail event logs, VPC Flow Logs, and DNS logs for suspicious activity such as cryptocurrency mining or unauthorized API calls.",
    question: "Which AWS security service provides continuous intelligent threat detection using machine learning?",
    options: [
      { id: 'A', text: "AWS Shield" },
      { id: 'B', text: "Amazon GuardDuty" },
      { id: 'C', text: "AWS WAF" },
      { id: 'D', text: "Amazon Inspector" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon GuardDuty is an intelligent threat detection service that continuously monitors malicious activity and unauthorized behavior across AWS accounts, workloads, and data stored in S3 by analyzing CloudTrail, VPC Flow, and DNS logs.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html",
    tags: ["GuardDuty", "Threat Detection", "Security"]
  },
  {
    id: "aws-clf-30",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Inspector Automated Vulnerability Management",
    scenario: "A devops team wants automated vulnerability scanning for software vulnerabilities and unintended network exposure on Amazon EC2 instances and container images in Amazon ECR.",
    question: "Which AWS service performs automated vulnerability assessments against operating system packages and container images?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "Amazon GuardDuty" },
      { id: 'C', text: "AWS Security Hub" },
      { id: 'D', text: "Amazon Inspector" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads (EC2 instances, ECR container images, Lambda functions) for software vulnerabilities and unintended network exposure.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Inspector", "Vulnerability Assessment", "Security"]
  },
  {
    id: "aws-clf-31",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie for Sensitive Data Discovery (PII)",
    scenario: "A compliance officer needs to scan millions of documents stored in Amazon S3 buckets to discover, classify, and protect Personally Identifiable Information (PII) such as credit card numbers and passports.",
    question: "Which AWS service uses machine learning and pattern matching to discover and protect sensitive data in Amazon S3?",
    options: [
      { id: 'A', text: "AWS KMS" },
      { id: 'B', text: "AWS Secrets Manager" },
      { id: 'C', text: "Amazon GuardDuty" },
      { id: 'D', text: "Amazon Macie" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to discover, monitor, and protect sensitive data (such as PII, PHI, and credentials) stored in Amazon S3.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Macie", "Sensitive Data", "PII", "S3", "Security"]
  },
  {
    id: "aws-clf-32",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Spot Instances for Fault-Tolerant Workloads",
    scenario: "A data analytics team runs batch processing and big data rendering tasks that can tolerate unexpected interruptions and needs compute capacity at up to a 90% discount compared to On-Demand rates.",
    question: "Which Amazon EC2 purchasing option provides the deepest discount for fault-tolerant workloads?",
    options: [
      { id: 'A', text: "Spot Instances" },
      { id: 'B', text: "Reserved Instances" },
      { id: 'C', text: "Dedicated Hosts" },
      { id: 'D', text: "On-Demand Instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EC2 Spot Instances allow customers to take advantage of unused EC2 capacity at steep discounts (up to 90% off On-Demand pricing), ideal for fault-tolerant, stateless, or batch processing workloads that can handle 2-minute termination notices.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
    tags: ["EC2", "Spot Instances", "Cost Optimization", "Compute"]
  },
  {
    id: "aws-clf-33",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EBS Volume Types: SSD vs HDD",
    scenario: "An administrator needs block-level persistent storage for an Amazon EC2 instance running a high-transaction OLTP database that requires consistent IOPS performance.",
    question: "Which Amazon EBS volume type is optimized for transactional database workloads requiring high IOPS?",
    options: [
      { id: 'A', text: "Amazon S3 Standard" },
      { id: 'B', text: "General Purpose SSD (gp3) or Provisioned IOPS SSD (io2)" },
      { id: 'C', text: "Throughput Optimized HDD (st1)" },
      { id: 'D', text: "Cold HDD (sc1)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EBS SSD-backed volumes (General Purpose gp2/gp3 and Provisioned IOPS io1/io2) are designed for transactional workloads, boot volumes, and databases requiring low latency and high IOPS. HDD-backed volumes (st1/sc1) are designed for large sequential throughput, not random IOPS.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html",
    tags: ["EBS", "Storage", "EC2", "IOPS"]
  },
  {
    id: "aws-clf-34",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic File System (EFS) Shared File Storage",
    scenario: "Multiple Linux Amazon EC2 instances running across different Availability Zones in a Region need concurrent read and write access to a shared POSIX-compliant filesystem.",
    question: "Which AWS storage service provides a fully managed shared NFS filesystem for Linux workloads?",
    options: [
      { id: 'A', text: "Amazon Elastic Block Store (Amazon EBS)" },
      { id: 'B', text: "Amazon S3 Glacier" },
      { id: 'C', text: "Amazon Elastic File System (Amazon EFS)" },
      { id: 'D', text: "AWS Storage Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon EFS provides simple, serverless, elastic shared file storage for use with AWS Cloud services and on-premises resources via the standard Network File System (NFSv4) protocol, accessible concurrently from thousands of EC2 instances.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
    tags: ["EFS", "NFS", "Shared Storage", "Storage"]
  },
  {
    id: "aws-clf-35",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon ElastiCache In-Memory Caching",
    scenario: "A high-traffic e-commerce database is experiencing latency due to repeated read queries for popular product catalog items. The engineering team wants to cache query results in memory to achieve microsecond response times.",
    question: "Which AWS service provides fully managed in-memory caching using Redis or Memcached?",
    options: [
      { id: 'A', text: "Amazon RDS Read Replicas" },
      { id: 'B', text: "Amazon DynamoDB Accelerator (DAX)" },
      { id: 'C', text: "Amazon ElastiCache" },
      { id: 'D', text: "Amazon CloudFront" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon ElastiCache is a fully managed in-memory data store and caching service compatible with Redis and Memcached, enabling sub-millisecond response times for read-heavy database workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html",
    tags: ["ElastiCache", "Caching", "In-Memory", "Databases"]
  },
  {
    id: "aws-clf-36",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Redshift Cloud Data Warehousing",
    scenario: "A business intelligence team needs to run complex SQL analytical queries across petabytes of structured historical sales data to generate quarterly executive dashboards.",
    question: "Which AWS service is purpose-built for petabyte-scale cloud data warehousing and analytical OLAP queries?",
    options: [
      { id: 'A', text: "Amazon RDS for PostgreSQL" },
      { id: 'B', text: "Amazon DynamoDB" },
      { id: 'C', text: "Amazon DocumentDB" },
      { id: 'D', text: "Amazon Redshift" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Redshift is a fully managed, petabyte-scale cloud data warehouse service that uses columnar storage and massively parallel processing (MPP) to execute complex analytical queries across massive datasets.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html",
    tags: ["Redshift", "Data Warehouse", "Analytics", "Databases"]
  },
  {
    id: "aws-clf-37",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Notification Service (SNS) Pub/Sub Messaging",
    scenario: "An application needs to broadcast promotional push notifications and email alerts simultaneously to millions of mobile subscriber devices when a flash sale begins.",
    question: "Which AWS service provides a fully managed Publish/Subscribe (Pub/Sub) messaging service for fan-out notifications?",
    options: [
      { id: 'A', text: "Amazon Simple Queue Service (Amazon SQS)" },
      { id: 'B', text: "Amazon Kinesis Data Streams" },
      { id: 'C', text: "Amazon MQ" },
      { id: 'D', text: "Amazon Simple Notification Service (Amazon SNS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SNS is a fully managed Pub/Sub messaging service that enables message fan-out to distributed endpoints (SQS queues, Lambda functions, HTTP webhooks) as well as end-user notifications via SMS, mobile push, and email.",
    referenceUrl: "https://docs.aws.amazon.com/sns/latest/dg/welcome.html",
    tags: ["SNS", "Messaging", "PubSub", "Application Integration"]
  },
  {
    id: "aws-clf-38",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Queue Service (SQS) for Decoupling Microservices",
    scenario: "An image processing pipeline receives customer photo uploads and processes them asynchronously. To prevent processing component failures from crashing the upload web server, the architecture must decouple the components.",
    question: "Which AWS service provides managed message queuing to decouple and scale distributed application components?",
    options: [
      { id: 'A', text: "Amazon SNS" },
      { id: 'B', text: "Amazon CloudWatch Events" },
      { id: 'C', text: "AWS Step Functions" },
      { id: 'D', text: "Amazon Simple Queue Service (Amazon SQS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SQS is a fully managed message queuing service that enables decoupling of microservices, distributed systems, and serverless applications, buffering messages reliably until processing workers pull and execute them.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
    tags: ["SQS", "Queuing", "Decoupling", "Application Integration"]
  },
  {
    id: "aws-clf-39",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CloudFormation Infrastructure as Code (IaC)",
    scenario: "A DevOps engineer needs to model and provision an entire multi-tier AWS infrastructure stack (VPC, subnets, EC2 instances, and databases) repeatedly and predictably using JSON or YAML declarative templates.",
    question: "Which AWS service provides Infrastructure as Code (IaC) template provisioning?",
    options: [
      { id: 'A', text: "AWS OpsWorks" },
      { id: 'B', text: "AWS CloudFormation" },
      { id: 'C', text: "AWS Elastic Beanstalk" },
      { id: 'D', text: "AWS CodeDeploy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudFormation allows you to model, provision, and manage AWS and third-party resources as code using declarative JSON or YAML templates, automating infrastructure deployment with version control and rollback support.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",
    tags: ["CloudFormation", "IaC", "Automation", "Management"]
  },
  {
    id: "aws-clf-40",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Direct Connect Dedicated Network Connection",
    scenario: "An enterprise requires a dedicated, private, physical 10 Gbps network connection between its corporate data centre and AWS to bypass the public internet and ensure consistent throughput with low latency.",
    question: "Which AWS networking service establishes a private dedicated physical connection from on-premises to AWS?",
    options: [
      { id: 'A', text: "AWS Direct Connect" },
      { id: 'B', text: "AWS Site-to-Site VPN" },
      { id: 'C', text: "Amazon Route 53" },
      { id: 'D', text: "AWS Transit Gateway" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Direct Connect links your internal network directly to an AWS Direct Connect location over a standard Ethernet fiber-optic cable, bypassing the public internet to deliver higher bandwidth, lower latency, and more consistent network performance than internet-based VPNs.",
    referenceUrl: "https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
    tags: ["Direct Connect", "Hybrid Networking", "Networking"]
  },
  {
    id: "aws-clf-41",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Marketplace for Pre-Configured Third-Party Software",
    scenario: "A company wants to find, test, buy, and instantly deploy third-party firewall appliances, database software, and DevOps tools on AWS with software charges consolidated onto their monthly AWS bill.",
    question: "Which digital catalog provides pre-configured software solutions from independent software vendors (ISVs)?",
    options: [
      { id: 'A', text: "AWS Quick Starts" },
      { id: 'B', text: "AWS Marketplace" },
      { id: 'C', text: "AWS Partner Network (APN)" },
      { id: 'D', text: "AWS Service Catalog" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Marketplace is a curated digital catalog that makes it easy for customers to find, buy, deploy, and manage third-party software, data, and services that run on AWS, with consolidated billing and simplified licensing.",
    referenceUrl: "https://aws.amazon.com/marketplace",
    tags: ["AWS Marketplace", "Third-Party", "Billing"]
  },
  {
    id: "aws-clf-42",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "Cost Allocation Tags for Departmental Billing Breakdown",
    scenario: "A finance director needs to allocate monthly cloud infrastructure charges to distinct cost centers (`Engineering`, `Marketing`, `Finance`) within a single AWS account.",
    question: "Which AWS billing feature allows categorizing and tracking AWS costs based on custom key-value metadata attached to resources?",
    options: [
      { id: 'A', text: "Consolidated Billing" },
      { id: 'B', text: "AWS Compute Optimizer" },
      { id: 'C', text: "AWS Budgets" },
      { id: 'D', text: "Cost Allocation Tags" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cost Allocation Tags are key-value pairs assigned to AWS resources that appear in Cost Explorer and Cost and Usage Reports (CUR), allowing organizations to categorize and track resource costs by project, department, or environment.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    tags: ["Cost Allocation Tags", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-43",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Compute Optimizer ML Recommendations",
    scenario: "An operations team wants to identify over-provisioned (wasteful) and under-provisioned (performance-constrained) EC2 instances, EBS volumes, and Lambda functions to optimize cost and performance.",
    question: "Which AWS service uses machine learning to analyze historical utilization metrics and recommend optimal instance types?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "Amazon CloudWatch Synthetics" },
      { id: 'C', text: "AWS Pricing Calculator" },
      { id: 'D', text: "AWS Compute Optimizer" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Compute Optimizer recommends optimal AWS resources (EC2 instance types, Auto Scaling groups, EBS volumes, and Lambda functions) for your workloads by applying machine learning to historical Amazon CloudWatch utilization metrics.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["Compute Optimizer", "Cost Optimization", "FinOps"]
  },
  {
    id: "aws-clf-44",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager vs AWS Systems Manager Parameter Store",
    scenario: "An enterprise application requires storing sensitive database credentials and requires automatic, scheduled rotation of MySQL database passwords without application downtime.",
    question: "Which AWS service provides built-in automatic credential rotation for Amazon RDS databases?",
    options: [
      { id: 'A', text: "AWS Certificate Manager" },
      { id: 'B', text: "AWS Systems Manager Parameter Store" },
      { id: 'C', text: "AWS Secrets Manager" },
      { id: 'D', text: "AWS KMS" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Secrets Manager helps manage, retrieve, and rotate database credentials, API keys, and other secrets throughout their lifecycle. It includes built-in native automated rotation support for Amazon RDS, Aurora, and DocumentDB.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
    tags: ["Secrets Manager", "Credential Rotation", "Security"]
  },
  {
    id: "aws-clf-45",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS WAF Web Application Firewall Protection",
    scenario: "A public web application needs protection against common web exploits such as SQL Injection (SQLi) and Cross-Site Scripting (XSS) that target Layer 7 application endpoints.",
    question: "Which AWS security service inspects incoming HTTP/HTTPS traffic and blocks web exploit attacks?",
    options: [
      { id: 'A', text: "AWS WAF (Web Application Firewall)" },
      { id: 'B', text: "Security Groups" },
      { id: 'C', text: "Network ACLs" },
      { id: 'D', text: "AWS Shield Standard" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS WAF is a web application firewall that monitors HTTP and HTTPS requests forwarded to Amazon CloudFront, Application Load Balancers, Amazon API Gateway, or AWS AppSync, allowing you to filter out SQL Injection, XSS, and custom rate-limiting rules.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
    tags: ["WAF", "SQL Injection", "XSS", "Security"]
  },
  {
    id: "aws-clf-46",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Well-Architected Framework: Reliability Pillar",
    scenario: "A cloud architect is designing an architecture that can automatically recover from infrastructure failures, dynamically scale to meet demand, and mitigate disruptions like misconfigurations.",
    question: "Which pillar of the AWS Well-Architected Framework encompasses failure recovery and workload resilience?",
    options: [
      { id: 'A', text: "Operational Excellence Pillar" },
      { id: 'B', text: "Security Pillar" },
      { id: 'C', text: "Reliability Pillar" },
      { id: 'D', text: "Performance Efficiency Pillar" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Reliability Pillar focuses on the ability of a workload to perform its intended function correctly and consistently when expected. Key principles include testing recovery procedures, automating recovery from failure, and scaling horizontally to increase aggregate system availability.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Well-Architected", "Reliability", "Cloud Concepts"]
  },
  {
    id: "aws-clf-47",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Global Accelerator vs Amazon CloudFront",
    scenario: "A real-time multiplayer gaming platform uses non-HTTP UDP and TCP protocols across global clients and needs fixed static anycast IP addresses to route traffic over the AWS global fiber network.",
    question: "Which AWS service provides two static anycast IP addresses and optimizes network paths for TCP and UDP traffic?",
    options: [
      { id: 'A', text: "Amazon CloudFront" },
      { id: 'B', text: "Elastic IP Addresses" },
      { id: 'C', text: "AWS Global Accelerator" },
      { id: 'D', text: "Amazon Route 53" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Global Accelerator uses static anycast IP addresses to route traffic over the AWS global private network, improving availability and performance for both HTTP and non-HTTP (TCP/UDP) protocols. CloudFront is optimized specifically for HTTP/HTTPS web content caching.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["Global Accelerator", "Anycast", "Networking", "Performance"]
  },
  {
    id: "aws-clf-48",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon CloudWatch Metrics and Alarms",
    scenario: "An administrator needs to monitor the CPU utilization of 50 Amazon EC2 instances and receive an automated email alert whenever average CPU utilization exceeds 85% for 10 minutes.",
    question: "Which AWS monitoring service collects performance metrics and triggers alarm actions?",
    options: [
      { id: 'A', text: "Amazon CloudWatch" },
      { id: 'B', text: "AWS Config" },
      { id: 'C', text: "AWS Health Dashboard" },
      { id: 'D', text: "AWS CloudTrail" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch collects and tracks metrics, collects and monitors log files, and sets alarms on resource utilization (such as CPU, Disk, and Network) to send notifications via Amazon SNS or trigger Auto Scaling actions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
    tags: ["CloudWatch", "Monitoring", "Alarms"]
  },
  {
    id: "aws-clf-49",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Config for Configuration Compliance Auditing",
    scenario: "A compliance auditor needs to track historical configuration changes to security groups and S3 buckets over time, and evaluate whether resources comply with internal compliance rules.",
    question: "Which AWS service records resource configuration history and evaluates configuration compliance against desired rules?",
    options: [
      { id: 'A', text: "Amazon CloudWatch" },
      { id: 'B', text: "AWS Config" },
      { id: 'C', text: "AWS Artifact" },
      { id: 'D', text: "AWS CloudTrail" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Config continually assesses, audits, and evaluates the configurations of AWS resources, recording configuration change history and evaluating whether configurations align with specified rules and compliance baselines.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html",
    tags: ["AWS Config", "Compliance", "Governance", "Auditing"]
  },
  {
    id: "aws-clf-50",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Savings Plans vs Reserved Instances",
    scenario: "A financial organization commits to consistent compute usage of $50/hour across EC2, Fargate, and Lambda for a 1-year term to achieve cost savings regardless of instance family or Region.",
    question: "Which AWS cost discount model provides flexible savings across EC2, AWS Fargate, and AWS Lambda?",
    options: [
      { id: 'A', text: "Standard Reserved Instances" },
      { id: 'B', text: "EC2 Instance Savings Plans" },
      { id: 'C', text: "Compute Savings Plans" },
      { id: 'D', text: "Spot Instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Compute Savings Plans offer the greatest flexibility, automatically applying discounts to EC2 instances (regardless of family, size, OS, or Region), AWS Fargate, and AWS Lambda usage in exchange for a commitment to a consistent amount of compute usage ($/hr) for 1 or 3 years.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["Savings Plans", "Compute Savings Plans", "FinOps", "Cost Optimization"]
  }
];

export default AWS_CLF_QUESTIONS_2;
