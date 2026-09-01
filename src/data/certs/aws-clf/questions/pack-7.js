export const AWS_CLF_QUESTIONS_7 = [
  {
    id: "aws-clf-151",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS X-Ray Distributed Tracing and Latency Analysis",
    scenario: "A microservices application experiences intermittent latency spikes across distributed calls spanning API Gateway, Lambda, and DynamoDB. Developers need a service map and trace visualizer.",
    question: "Which AWS developer service analyzes and debugs production distributed applications by tracing request flows across microservices?",
    options: [
      { id: 'A', text: "Amazon CloudWatch" },
      { id: 'B', text: "AWS X-Ray" },
      { id: 'C', text: "AWS CloudTrail" },
      { id: 'D', text: "AWS AppSync" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture, providing request tracing and service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["AWS X-Ray", "Distributed Tracing", "Microservices", "Observability"]
  },
  {
    id: "aws-clf-152",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS AppSync Managed GraphQL API Service",
    scenario: "A mobile development team needs a managed GraphQL API that provides real-time data subscriptions, offline data synchronization, and unified access to DynamoDB, Lambda, and OpenSearch.",
    question: "Which AWS service creates serverless GraphQL APIs with real-time updates and offline mobile sync?",
    options: [
      { id: 'A', text: "AWS AppSync" },
      { id: 'B', text: "Amazon EventBridge" },
      { id: 'C', text: "Amazon API Gateway" },
      { id: 'D', text: "Amazon SNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS AppSync is an enterprise-level, fully managed GraphQL and Pub/Sub API service that simplifies application development by securely connecting applications to data and events.",
    referenceUrl: "https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html",
    tags: ["AppSync", "GraphQL", "Serverless", "APIs"]
  },
  {
    id: "aws-clf-153",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Email Service (Amazon SES)",
    scenario: "An e-commerce website needs a cost-effective, high-volume cloud email sending service to transmit millions of transactional purchase receipts and marketing emails daily.",
    question: "Which AWS service provides high-deliverability cloud email sending and receiving for transactional and marketing messages?",
    options: [
      { id: 'A', text: "Amazon SNS" },
      { id: 'B', text: "Amazon Pinpoint" },
      { id: 'C', text: "Amazon Simple Email Service (Amazon SES)" },
      { id: 'D', text: "Amazon Connect" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon SES is a cost-effective, flexible, and scalable email service that enables developers to send transactional, marketing, or mass email communications from any application.",
    referenceUrl: "https://docs.aws.amazon.com/ses/latest/dg/Welcome.html",
    tags: ["SES", "Email", "Application Integration"]
  },
  {
    id: "aws-clf-154",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Pinpoint Multi-Channel Customer Engagement",
    scenario: "A marketing team wants to segment users by mobile engagement, send targeted push campaigns across SMS, email, and mobile push channels, and track conversion analytics.",
    question: "Which AWS service enables targeted multi-channel customer marketing campaigns and user engagement analytics?",
    options: [
      { id: 'A', text: "Amazon Pinpoint" },
      { id: 'B', text: "Amazon SES" },
      { id: 'C', text: "Amazon SNS" },
      { id: 'D', text: "Amazon Connect" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon Pinpoint is a multi-channel marketing and engagement service that enables you to deliver targeted, personalized communications over channels like email, SMS, push notifications, and voice.",
    referenceUrl: "https://docs.aws.amazon.com/pinpoint/latest/userguide/welcome.html",
    tags: ["Pinpoint", "Customer Engagement", "Marketing", "Analytics"]
  },
  {
    id: "aws-clf-155",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
    scenario: "A fintech team runs Apache Kafka clusters on-premises for stream processing and wants a fully managed Kafka service on AWS that manages Apache Kafka infrastructure and ZooKeeper/KRaft.",
    question: "Which AWS service provides fully managed Apache Kafka clusters for streaming data ingestion?",
    options: [
      { id: 'A', text: "Amazon Managed Streaming for Apache Kafka (Amazon MSK)" },
      { id: 'B', text: "Amazon SQS" },
      { id: 'C', text: "Amazon MQ" },
      { id: 'D', text: "Amazon Kinesis Data Streams" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon MSK is a fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data with native open-source compatibility.",
    referenceUrl: "https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html",
    tags: ["Amazon MSK", "Kafka", "Streaming", "Big Data"]
  },
  {
    id: "aws-clf-156",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon MQ Managed Message Broker (ActiveMQ and RabbitMQ)",
    scenario: "An enterprise migrating traditional enterprise messaging applications to the cloud requires industry-standard messaging protocols (JMS, AMQP, MQTT, STOMP) without rewriting code for Amazon SQS.",
    question: "Which AWS managed message broker service supports Apache ActiveMQ and RabbitMQ?",
    options: [
      { id: 'A', text: "Amazon SNS" },
      { id: 'B', text: "Amazon EventBridge" },
      { id: 'C', text: "Amazon SQS" },
      { id: 'D', text: "Amazon MQ" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to migrate to a message broker in the cloud without rewriting existing messaging applications.",
    referenceUrl: "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html",
    tags: ["Amazon MQ", "RabbitMQ", "ActiveMQ", "Messaging"]
  },
  {
    id: "aws-clf-157",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager vs Hardcoded Credentials",
    scenario: "During a code review, a security lead discovers hardcoded database credentials in application configuration files stored in Git repositories.",
    question: "What is the primary security risk of embedding permanent credentials directly in source code?",
    options: [
      { id: 'A', text: "Hardcoded credentials increase Amazon S3 storage costs." },
      { id: 'B', text: "AWS automatically terminates instances that contain plain-text strings." },
      { id: 'C', text: "Hardcoded credentials decrease network throughput on EC2." },
      { id: 'D', text: "Credentials can be exposed through source code leaks, version control history, and unauthorized repository access." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hardcoding credentials exposes sensitive passwords and API keys to anyone with access to code repositories, logs, or backups. AWS best practice mandates using IAM roles and AWS Secrets Manager instead.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials",
    tags: ["Security", "Best Practices", "Credentials", "Secrets Manager"]
  },
  {
    id: "aws-clf-158",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Control Tower Automated Multi-Account Landing Zones",
    scenario: "An enterprise wants to automate the creation and governance of a secure, compliant multi-account AWS environment with pre-configured Service Control Policies (guardrails) and AWS IAM Identity Center.",
    question: "Which AWS service automates the setup of a well-architected multi-account landing zone?",
    options: [
      { id: 'A', text: "AWS Systems Manager" },
      { id: 'B', text: "AWS Organizations alone" },
      { id: 'C', text: "AWS CloudFormation alone" },
      { id: 'D', text: "AWS Control Tower" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment (landing zone), establishing a blueprint that integrates AWS Organizations, IAM Identity Center, and preventative/detective guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Control Tower", "Landing Zone", "Multi-Account", "Governance"]
  },
  {
    id: "aws-clf-159",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Service Catalog for Approved Cloud Software Products",
    scenario: "A cloud governance team wants to allow developers to self-service provision approved EC2, RDS, and S3 architectures from a curated catalog while enforcing organizational compliance and tagging rules.",
    question: "Which AWS service allows organizations to create and manage catalogs of approved IT services that are governed for use on AWS?",
    options: [
      { id: 'A', text: "AWS Marketplace" },
      { id: 'B', text: "AWS CloudFormation" },
      { id: 'C', text: "AWS Systems Manager" },
      { id: 'D', text: "AWS Service Catalog" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS, enabling users to quickly deploy approved products with consistent governance.",
    referenceUrl: "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html",
    tags: ["Service Catalog", "Governance", "Compliance"]
  },
  {
    id: "aws-clf-160",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Loose Coupling vs Tight Coupling in Cloud Architecture",
    scenario: "An architect is designing an asynchronous messaging architecture where independent components communicate via queues so that the failure or latency of one service does not bring down the entire application.",
    question: "Which architectural design principle is demonstrated by using message queues (Amazon SQS) between components?",
    options: [
      { id: 'A', text: "Tight Coupling" },
      { id: 'B', text: "Loose Coupling" },
      { id: 'C', text: "Monolithic Architecture" },
      { id: 'D', text: "Vertical Scaling" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Loose coupling breaks interdependencies between components so that failures in one component are isolated and do not cascade to other parts of the application, increasing overall resilience and scalability.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/architecting-for-the-cloud-aws-best-practices/loose-coupling-sets-you-free.html",
    tags: ["Cloud Concepts", "Loose Coupling", "Architecture", "Resilience"]
  },
  {
    id: "aws-clf-161",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Disaster Recovery RTO and RPO Definitions",
    scenario: "During disaster recovery planning, the business specifies that the maximum allowable data loss in time is 15 minutes, and systems must be fully restored within 1 hour after a disaster.",
    question: "Which term represents the maximum acceptable amount of data loss measured in time?",
    options: [
      { id: 'A', text: "Mean Time to Failure (MTTF)" },
      { id: 'B', text: "Recovery Time Objective (RTO)" },
      { id: 'C', text: "Recovery Point Objective (RPO)" },
      { id: 'D', text: "Service Level Agreement (SLA)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured in time (e.g. 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of outage before recovery.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["RPO", "RTO", "Disaster Recovery", "Cloud Concepts"]
  },
  {
    id: "aws-clf-162",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Fault Injection Simulator (AWS FIS) Chaos Engineering",
    scenario: "An engineering team wants to run controlled chaos engineering experiments (e.g. simulating AZ outages, latency injection, and CPU spikes) to test application resiliency in production.",
    question: "Which AWS managed service provides a fully managed chaos engineering platform to run fault injection experiments on AWS workloads?",
    options: [
      { id: 'A', text: "AWS CloudWatch Synthetics" },
      { id: 'B', text: "AWS Fault Injection Simulator (AWS FIS)" },
      { id: 'C', text: "Amazon Inspector" },
      { id: 'D', text: "AWS Trusted Advisor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Fault Injection Simulator (AWS FIS) is a fully managed service for running fault injection experiments on AWS to improve workload resilience, uncover hidden bugs, and validate recovery mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["AWS FIS", "Chaos Engineering", "Resilience", "Testing"]
  },
  {
    id: "aws-clf-163",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon CloudWatch Logs Insights Interactive Log Analysis",
    scenario: "A DevOps engineer needs to quickly search and filter error logs across 10 million log lines delivered by 50 Lambda functions using a purpose-built interactive query syntax.",
    question: "Which Amazon CloudWatch feature enables interactive search and analysis of log data using query syntax?",
    options: [
      { id: 'A', text: "CloudWatch Logs Insights" },
      { id: 'B', text: "AWS CloudTrail" },
      { id: 'C', text: "CloudWatch Alarms" },
      { id: 'D', text: "Amazon Athena" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Logs Insights enables you to interactively search and analyze your log data in Amazon CloudWatch Logs with a powerful query language that supports aggregations and visualizations.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["CloudWatch", "Logs Insights", "Monitoring", "Observability"]
  },
  {
    id: "aws-clf-164",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon CloudWatch Synthetics User Canaries",
    scenario: "An online banking platform needs to run automated script canaries 24/7 that simulate user logins, click navigation paths, and transaction submissions to detect service degradation before real customers are impacted.",
    question: "Which Amazon CloudWatch capability uses modular scripts (canaries) to monitor endpoints and APIs around the clock?",
    options: [
      { id: 'A', text: "CloudWatch Metrics" },
      { id: 'B', text: "CloudWatch Synthetics" },
      { id: 'C', text: "AWS X-Ray" },
      { id: 'D', text: "CloudWatch Logs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudWatch Synthetics enables you to create canaries - configurable scripts that run on a schedule to monitor your endpoints and APIs by simulating customer interactions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["CloudWatch Synthetics", "Monitoring", "Canaries", "Availability"]
  },
  {
    id: "aws-clf-165",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Free Tier: Short-Term Trials",
    scenario: "A company wants to evaluate Amazon SageMaker and Amazon Redshift for 60 days before making a financial commitment.",
    question: "Which AWS Free Tier category provides short-term trial offers starting from the date a service is first activated?",
    options: [
      { id: 'A', text: "Always Free" },
      { id: 'B', text: "Reserved Instance Credits" },
      { id: 'C', text: "12 Months Free" },
      { id: 'D', text: "Free Trials" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Free Trials are short-term trial offers that activate from the time you first start using a specific service (such as 2 months of Amazon Redshift or Amazon SageMaker free trial).",
    referenceUrl: "https://aws.amazon.com/free/",
    tags: ["Free Tier", "Trials", "Billing", "Cost"]
  },
  {
    id: "aws-clf-166",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Health Dashboard (Personal vs Service Health)",
    scenario: "An operations engineer wants to view personalized alerts and notifications when an AWS infrastructure disruption specifically affects the EC2 instances and RDS databases in their own account.",
    question: "Which dashboard delivers personalized notifications regarding AWS health events and service disruptions affecting your specific resources?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "AWS Health Dashboard (Your Account Health)" },
      { id: 'C', text: "Amazon CloudWatch Dashboard" },
      { id: 'D', text: "AWS Global Service Health Dashboard (Public)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS Health Dashboard (specifically the Account Health view) provides personalized information about events that can affect your specific AWS infrastructure and resources, with proactive notifications.",
    referenceUrl: "https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html",
    tags: ["AWS Health Dashboard", "Operations", "Monitoring"]
  },
  {
    id: "aws-clf-167",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon S3 Block Public Access Account-Level Setting",
    scenario: "A CISO wants a single master switch at the AWS account level that guarantees no current or future Amazon S3 buckets can ever be made publicly accessible via bucket policies or ACLs.",
    question: "Which Amazon S3 feature provides centralized centralized control to block public access across all buckets in an account?",
    options: [
      { id: 'A', text: "Amazon S3 Block Public Access" },
      { id: 'B', text: "AWS KMS Key Policies" },
      { id: 'C', text: "AWS WAF" },
      { id: 'D', text: "IAM Access Analyzer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Block Public Access provides settings for access points, buckets, and accounts to help you manage public access to S3 resources, overriding permissive policies and ACLs.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
    tags: ["S3", "Block Public Access", "Security", "Compliance"]
  },
  {
    id: "aws-clf-168",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS IAM Policy Evaluation Logic (Explicit Deny vs Allow)",
    scenario: "An IAM user has two attached policies: Policy A explicitly denies access to `s3:DeleteObject`, while Policy B explicitly allows all S3 actions (`s3:*`).",
    question: "What is the resulting permission when the user attempts to delete an object from an S3 bucket?",
    options: [
      { id: 'A', text: "Access is DENIED because an explicit deny always overrides an explicit allow in IAM policy evaluation." },
      { id: 'B', text: "Access is ALLOWED because Policy B grants wildcard permissions." },
      { id: 'C', text: "Access is allowed only during business hours." },
      { id: 'D', text: "The request requires root user confirmation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In AWS IAM policy evaluation logic: by default, all requests are implicitly denied. An explicit allow overrides the default deny. However, an explicit deny in ANY applicable policy ALWAYS overrides all allows.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["IAM", "Policy Evaluation", "Explicit Deny", "Security"]
  },
  {
    id: "aws-clf-169",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Placement Groups: Cluster vs Spread vs Partition",
    scenario: "A high-performance computing (HPC) simulation requires placing Amazon EC2 instances in close physical proximity within a single Availability Zone to achieve ultra-low latency and maximum 100 Gbps network throughput.",
    question: "Which Amazon EC2 Placement Group strategy packs instances close together inside an Availability Zone?",
    options: [
      { id: 'A', text: "Auto Scaling Placement Group" },
      { id: 'B', text: "Partition Placement Group" },
      { id: 'C', text: "Spread Placement Group" },
      { id: 'D', text: "Cluster Placement Group" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Cluster Placement Group packs instances close together inside an Availability Zone to achieve the lowest latency network performance and highest packet-per-second throughput for HPC workloads.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster",
    tags: ["EC2", "Placement Groups", "HPC", "Compute"]
  },
  {
    id: "aws-clf-170",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Spread Placement Group for Critical Instance Isolation",
    scenario: "An architect needs to deploy 5 critical application servers where each instance must strictly reside on distinct underlying physical hardware racks with independent power and network feeds inside an AZ.",
    question: "Which Amazon EC2 Placement Group strategy strictly places each instance on distinct physical hardware racks?",
    options: [
      { id: 'A', text: "Cluster Placement Group" },
      { id: 'B', text: "Spread Placement Group" },
      { id: 'C', text: "Multi-AZ Group" },
      { id: 'D', text: "Partition Placement Group" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Spread Placement Group strictly places a small group of instances across distinct underlying hardware racks (each with its own network and power source) to reduce correlated hardware failures.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-spread",
    tags: ["EC2", "Spread Placement Group", "High Availability", "Compute"]
  },
  {
    id: "aws-clf-171",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Vertical Scaling vs Horizontal Scaling",
    scenario: "An architect needs to accommodate growing application traffic. They can either upgrade an EC2 instance from `t3.medium` to `c5.2xlarge` or add 4 additional `t3.medium` instances behind a load balancer.",
    question: "What term describes adding more instances of smaller size behind a load balancer rather than increasing the size of a single server?",
    options: [
      { id: 'A', text: "Horizontal Scaling (Scaling Out)" },
      { id: 'B', text: "Vertical Scaling (Scaling Up)" },
      { id: 'C', text: "Dynamic Tiering" },
      { id: 'D', text: "Instance Re-sizing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Horizontal Scaling (scaling out/in) involves adding or removing resources (such as adding multiple EC2 instances to an Auto Scaling group), which improves fault tolerance and avoids single-instance resource ceilings.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/architecting-for-the-cloud-aws-best-practices/scaling.html",
    tags: ["Cloud Concepts", "Horizontal Scaling", "Scalability", "Architecture"]
  },
  {
    id: "aws-clf-172",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Aurora Global Database for Worldwide Low-Latency Reads",
    scenario: "A global enterprise requires a relational database that replicates data across multiple AWS Regions with sub-second replication latency and enables fast disaster recovery failover in under 1 minute.",
    question: "Which database feature provides multi-region relational database replication with sub-second cross-region read latency?",
    options: [
      { id: 'A', text: "Amazon RDS Multi-AZ" },
      { id: 'B', text: "Amazon DynamoDB Local Secondary Indexes" },
      { id: 'C', text: "AWS Database Migration Service" },
      { id: 'D', text: "Amazon Aurora Global Database" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Aurora Global Database spans multiple AWS Regions, enabling low-latency global reads and fast cross-region disaster recovery with typical storage-level replication latency under 1 second.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html",
    tags: ["Aurora", "Global Database", "Disaster Recovery", "Databases"]
  },
  {
    id: "aws-clf-173",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon DynamoDB Global Tables for Multi-Region Multi-Active NoSQL",
    scenario: "A gaming backend requires a fully managed NoSQL database deployed in North America, Europe, and Asia where players in any Region can perform local sub-millisecond writes that replicate multi-actively.",
    question: "Which Amazon DynamoDB capability provides fully managed multi-region, multi-active table replication?",
    options: [
      { id: 'A', text: "Amazon Aurora Global Database" },
      { id: 'B', text: "Amazon DynamoDB Global Tables" },
      { id: 'C', text: "Amazon DynamoDB Streams" },
      { id: 'D', text: "Amazon DynamoDB Accelerator (DAX)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon DynamoDB Global Tables provide a fully managed, multi-region, multi-active database solution that automatically replicates data across your chosen AWS Regions for fast local read/write performance.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
    tags: ["DynamoDB", "Global Tables", "Multi-Region", "NoSQL"]
  },
  {
    id: "aws-clf-174",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Allocation Tag Inactive vs Active Status",
    scenario: "A financial analyst creates new resource tags (`ProjectCode` and `Owner`) in the EC2 console, but the tags do not appear in the AWS Cost Explorer filter menu.",
    question: "Why do newly created resource tags not immediately appear in Cost Explorer, and what step is required?",
    options: [
      { id: 'A', text: "Tags only apply to accounts subscribed to Enterprise Support." },
      { id: 'B', text: "User-defined cost allocation tags must be explicitly activated in the AWS Billing and Cost Management console before they appear in billing reports." },
      { id: 'C', text: "Tags must be written in JSON format." },
      { id: 'D', text: "Resource tags take 90 days to index in Cost Explorer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In AWS, tags on resources are not used for cost tracking until you explicitly activate them as Cost Allocation Tags in the Billing and Cost Management console. Once activated, AWS tracks usage against those tags.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#activating-tags",
    tags: ["Cost Allocation Tags", "Billing", "FinOps", "Cost Management"]
  },
  {
    id: "aws-clf-175",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon Macie Automated Sensitive Data Discovery",
    scenario: "A data governance officer requires automated discovery and mapping of sensitive data across all S3 buckets in an organization, with automated generation of interactive heat maps identifying buckets with sensitive findings.",
    question: "Which security service provides automated organization-wide sensitive data discovery and visualization for Amazon S3?",
    options: [
      { id: 'A', text: "AWS KMS" },
      { id: 'B', text: "Amazon Macie" },
      { id: 'C', text: "AWS Security Hub" },
      { id: 'D', text: "Amazon Inspector" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Macie continually evaluates your Amazon S3 bucket inventory and applies machine learning and pattern matching to provide automated sensitive data discovery across your AWS Organization.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Macie", "Sensitive Data", "Compliance", "Security", "S3"]
  }
];

export default AWS_CLF_QUESTIONS_7;
