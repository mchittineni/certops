export const AWS_SAA_QUESTIONS_9 = [
  {
    id: "aws-saa-201",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Automated Multi-Account Setup and Governance with AWS Control Tower",
    scenario: "An enterprise is setting up a new multi-account cloud environment for 50 business departments. The CISO mandates setting up automated landing zones, mandatory security guardrails (Service Control Policies and AWS Config rules), single sign-on federation, and centralized log archiving with minimal manual configuration.",
    question: "Which AWS service orchestrates the automated provisioning of well-architected multi-account landing zones and baseline guardrails?",
    options: [
      { id: 'A', text: "AWS Systems Manager Explorer." },
      { id: 'B', text: "AWS CloudFormation StackSets only." },
      { id: 'C', text: "AWS Control Tower." },
      { id: 'D', text: "Amazon Inspector." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment (landing zone) based on best practice blueprints. It automates account provisioning via Account Factory, applies mandatory preventative guardrails (SCPs) and detective guardrails (AWS Config rules), and centralizes logging with IAM Identity Center SSO. StackSets deploys templates but lacks automated landing zone orchestration. Systems Manager Explorer is an operations dashboard. Inspector is a CVE scanner.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["AWS Control Tower", "Landing Zone", "Governance", "Security", "Resilience"]
  },
  {
    id: "aws-saa-202",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Disaster Recovery for Relational Databases: Aurora Global Database Headroom and Cross-Region Promotion",
    scenario: "An international e-commerce application runs on Amazon Aurora MySQL Global Database with a primary DB cluster in us-east-1 and a secondary read-only cluster in eu-central-1. During an unexpected regional service disruption in us-east-1, the disaster recovery team must promote the eu-central-1 cluster to take full read/write traffic.",
    question: "What is the correct procedure to fail over and promote the secondary Aurora cluster during a disaster?",
    options: [
      { id: 'A', text: "Detach the secondary Aurora cluster from the Global Database and promote it to a standalone read/write regional database cluster." },
      { id: 'B', text: "Enable Aurora Auto Scaling on the primary cluster." },
      { id: 'C', text: "Modify the VPC route tables in us-east-1." },
      { id: 'D', text: "Restore the most recent daily snapshot in eu-central-1." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In an unplanned regional disaster scenario, the secondary Aurora cluster in eu-central-1 is detached from the Global Database and promoted to a standalone regional read/write cluster (completing in under 1–2 minutes with minimal data loss based on replication lag). Auto Scaling cannot fix an offline region. Restoring a snapshot takes hours and loses hours of recent data. Modifying VPC routes in the failed region does not promote the secondary database.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.unplanned",
    tags: ["Aurora Global Database", "Disaster Recovery", "Promotion", "Resilience"]
  },
  {
    id: "aws-saa-203",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Decoupling Microservices with Amazon SQS Delay Queues and Message Timers",
    scenario: "An e-commerce order processing system requires delaying order fulfillment processing by exactly 15 minutes after customer checkout to allow users time to edit or cancel their orders before warehouse dispatch.",
    question: "Which SQS configuration introduces a 15-minute delay before messages become visible to consumer worker fleets?",
    options: [
      { id: 'A', text: "Set the SQS Message Retention Period to 900 seconds." },
      { id: 'B', text: "Set the SQS Visibility Timeout to 900 seconds." },
      { id: 'C', text: "Set ReceiveMessageWaitTimeSeconds to 900 seconds." },
      { id: 'D', text: "Configure the Amazon SQS queue Delivery Delay (Delay Queue) parameter to 900 seconds (15 minutes)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SQS Delay Queues postpone the delivery of new messages added to the queue for a specified delay interval (up to 15 minutes / 900 seconds). During the delay period, the message remains invisible to consumer worker fleets. Visibility Timeout defines how long a message is hidden *after* being consumed. Message Retention deletes messages after the interval. `ReceiveMessageWaitTimeSeconds` configures long polling (max 20 seconds).",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html",
    tags: ["SQS", "Delay Queue", "Decoupling", "Resilience"]
  },
  {
    id: "aws-saa-204",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "High Availability Multi-AZ Architecture for Amazon OpenSearch Service",
    scenario: "An e-commerce catalog search cluster running on Amazon OpenSearch Service must maintain high availability, survive the loss of an entire Availability Zone without search downtime, and support dedicated master nodes for cluster stability.",
    question: "Which Amazon OpenSearch cluster architecture satisfies these high-availability criteria?",
    options: [
      { id: 'A', text: "Deploy a single data node in 1 Availability Zone with automated daily snapshots." },
      { id: 'B', text: "Mount an Amazon EFS file system to an EC2 OpenSearch node." },
      { id: 'C', text: "Deploy OpenSearch with 3 Availability Zones, 3 Dedicated Master Nodes, and at least 1 replica shard per primary shard." },
      { id: 'D', text: "Deploy 2 data nodes in 1 AZ with 2 dedicated master nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For production OpenSearch clusters, the AWS best practice is deploying across 3 Availability Zones with 3 Dedicated Master Nodes (to prevent split-brain issues) and configuring at least 1 replica shard per primary shard. This guarantees that if any single AZ fails, the remaining 2 AZs retain a complete copy of all data and maintain active cluster quorum. Single-AZ setups, whether one data node or two, have single points of failure. EFS is not supported for OpenSearch internal cluster data.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html",
    tags: ["OpenSearch", "Multi-AZ", "Dedicated Master", "High Availability", "Resilience"]
  },
  {
    id: "aws-saa-205",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Disaster Recovery for Relational Databases: Amazon RDS Multi-AZ DB Cluster with Two Readable Standbys",
    scenario: "A transaction processing database on Amazon RDS for PostgreSQL requires automated failover with an RTO under 35 seconds, combined with native read scalability across multiple Availability Zones without creating separate asynchronous read replica endpoints.",
    question: "Which Amazon RDS deployment option provides high-availability failover in under 35 seconds and readable standby DB instances?",
    options: [
      { id: 'A', text: "Amazon RDS Multi-AZ DB Cluster deployment (one primary writer and two readable standby instances across 3 AZs)." },
      { id: 'B', text: "Amazon RDS Multi-AZ DB Instance deployment (one primary and one non-readable standby)." },
      { id: 'C', text: "AWS Database Migration Service (DMS) continuous sync." },
      { id: 'D', text: "Amazon RDS Single-AZ instance with cross-region replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Amazon RDS Multi-AZ DB Cluster deployment provisions one primary writer and two readable standby DB instances across three Availability Zones. It uses semi-synchronous replication with transaction commit confirmation, delivering typical automated failovers in under 35 seconds (faster than Multi-AZ DB instance) while allowing standby instances to serve read traffic via a cluster reader endpoint. Multi-AZ DB Instance has a non-readable standby and 60–120 second failovers. Single-AZ and DMS lack automated sub-35s cluster failover.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html",
    tags: ["RDS", "Multi-AZ DB Cluster", "PostgreSQL", "High Availability", "Resilience"]
  },
  {
    id: "aws-saa-206",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Graph Database Queries for Social Networks and Fraud Detection: Amazon Neptune",
    scenario: "A financial fraud investigation platform needs to navigate complex relationships and connections between bank accounts, phone numbers, IP addresses, and identities. Queries require traversing graph relationships 5 to 10 degrees deep with millisecond latencies.",
    question: "Which managed AWS graph database service is built specifically for property graph and RDF relationship queries?",
    options: [
      { id: 'A', text: "Amazon RDS for MySQL." },
      { id: 'B', text: "Amazon Neptune." },
      { id: 'C', text: "Amazon DocumentDB." },
      { id: 'D', text: "Amazon DynamoDB." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Neptune is a fast, reliable, fully managed graph database engine optimized for storing billions of relationships and querying graphs with millisecond latency using popular graph query languages (Apache TinkerPop Gremlin, openCypher, and W3C SPARQL). Relational databases and document or key-value stores degrade severely when executing multi-hop recursive relationship queries.",
    referenceUrl: "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    tags: ["Amazon Neptune", "Graph Database", "Fraud Detection", "Performance"]
  },
  {
    id: "aws-saa-207",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "High-Throughput Consumer Streaming with Kinesis Enhanced Fan-Out",
    scenario: "A real-time financial data stream in Amazon Kinesis Data Streams has 10 independent downstream consumer applications (fraud detection, real-time metrics, ML scoring, audit logging, archiving). The consumers are experiencing read throughput throttling because standard consumers share the 2 MB/sec read limit per shard.",
    question: "Which Kinesis feature provides dedicated 2 MB/sec read throughput per shard for each consumer application?",
    options: [
      { id: 'A', text: "Convert the Kinesis Data Stream to an SQS FIFO queue." },
      { id: 'B', text: "Deploy an Amazon ElastiCache cluster in front of Kinesis." },
      { id: 'C', text: "Register the consumer applications using Kinesis Enhanced Fan-Out with HTTP/2 streaming." },
      { id: 'D', text: "Increase the stream retention period to 365 days." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kinesis Enhanced Fan-Out provisions dedicated 2 MB/sec read throughput per shard for each registered consumer application independently using HTTP/2 push delivery. This allows multiple consumer applications (up to 20 per stream) to read from the same stream in parallel without competing for read throughput or throttling each other. Retention period stores data longer. SQS FIFO has lower throughput caps and deletes messages on read. ElastiCache cannot front Kinesis streams.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html",
    tags: ["Kinesis", "Enhanced Fan-Out", "Streaming", "Performance"]
  },
  {
    id: "aws-saa-208",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Serverless Document Database Performance with Amazon DocumentDB",
    scenario: "A gaming company is migrating a MongoDB database storing user inventories and JSON game states to AWS. The application requires full MongoDB 4.0/5.0 API compatibility, millisecond read/write latency, automatic storage scaling up to 128 TB, and 15 read replicas with automated failover.",
    question: "Which AWS managed database service provides MongoDB compatibility with a cloud-native decoupled storage architecture?",
    options: [
      { id: 'A', text: "Amazon DynamoDB." },
      { id: 'B', text: "Amazon DocumentDB (with MongoDB compatibility)." },
      { id: 'C', text: "Amazon RDS for MySQL." },
      { id: 'D', text: "Amazon Neptune." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon DocumentDB is a fully managed document database service designed for JSON workloads with full MongoDB API compatibility. Built on a cloud-native distributed storage system that replicates 6 copies of data across 3 Availability Zones, it scales storage automatically up to 128 TB and supports up to 15 read replicas with sub-millisecond latencies. DynamoDB uses a proprietary NoSQL API. RDS MySQL is a relational database. Neptune is a graph database.",
    referenceUrl: "https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html",
    tags: ["DocumentDB", "MongoDB", "JSON", "NoSQL", "Performance"]
  },
  {
    id: "aws-saa-209",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Global Performance Acceleration with Amazon Route 53 Geoproximity Routing and Bias",
    scenario: "A company operates web server clusters in AWS regions in us-east-1 and us-west-2. During peak East Coast business hours, the us-east-1 cluster CPU utilization reaches 90%. The company wants to shift 25% of the geographic boundary of user traffic dynamically to the us-west-2 region without changing client code.",
    question: "Which Route 53 routing policy allows expanding or shrinking the geographic reach of a region using a bias value?",
    options: [
      { id: 'A', text: "Route 53 Geoproximity Routing policy with configured routing bias in Route 53 Traffic Flow." },
      { id: 'B', text: "Route 53 Failover routing policy." },
      { id: 'C', text: "Route 53 Simple routing policy." },
      { id: 'D', text: "Route 53 Multivalue Answer policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Route 53 Geoproximity Routing (configured using Route 53 Traffic Flow visual editor) lets you route traffic based on the geographic location of users and resources, and use bias values (from -99 to +99) to dynamically expand or shrink the geographic footprint served by a specific AWS region. Simple, Failover, and Multivalue do not support geographic bias expansion/contraction.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html",
    tags: ["Route 53", "Geoproximity", "Traffic Flow", "Performance"]
  },
  {
    id: "aws-saa-210",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "High-Performance Hybrid Windows File Storage with Amazon FSx for Windows File Server and File Caching",
    scenario: "A global media company has corporate offices in London and New York. On-premises video editing workstations in London require sub-millisecond access over SMB to video assets hosted on an Amazon FSx for Windows File Server in the us-east-1 AWS Region over an AWS Direct Connect link.",
    question: "Which AWS feature caches cloud-hosted file systems on-premises with local NVMe SSD speeds?",
    options: [
      { id: 'A', text: "Amazon File Cache (or AWS Storage Gateway S3 File Gateway)." },
      { id: 'B', text: "AWS DataSync scheduled batch transfers." },
      { id: 'C', text: "AWS Snowball Edge." },
      { id: 'D', text: "Amazon S3 Glacier Instant Retrieval." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon File Cache is a fully managed, high-speed temporary cache on AWS that provides sub-millisecond access to file data stored in on-premises NFS storage or cloud file systems (FSx and S3). For on-premises Windows workloads, AWS Storage Gateway (Amazon FSx File Gateway mode) also provides local on-premises SMB caching of FSx for Windows File Server in the cloud. Snowball Edge is for offline bulk transfer. Glacier is archive storage. DataSync is batch transfer without live caching.",
    referenceUrl: "https://docs.aws.amazon.com/filecache/latest/userguide/what-is.html",
    tags: ["Amazon File Cache", "Storage Gateway", "FSx for Windows", "Hybrid", "Performance"]
  },
  {
    id: "aws-saa-211",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Detecting Anomalous API Activity with AWS CloudTrail Insights",
    scenario: "A security operations center (SOC) needs automated detection and alerting whenever an unusual surge in write API calls (such as a sudden spike in `AuthorizeSecurityGroupIngress` or `CreateUser` calls) occurs in an AWS account.",
    question: "Which AWS CloudTrail feature continuously analyzes management event baselines and generates anomaly events?",
    options: [
      { id: 'A', text: "AWS Config conformance packs." },
      { id: 'B', text: "AWS CloudTrail Insights." },
      { id: 'C', text: "Amazon Inspector." },
      { id: 'D', text: "Amazon GuardDuty." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudTrail Insights continuously analyzes historical CloudTrail management events to establish a normal baseline of API call rates and error rates. When unusual spikes in API volume or abnormal error rate spikes occur (e.g. IAM permission brute-forcing or rapid resource modifications), CloudTrail Insights automatically generates an Insight event that can trigger Amazon EventBridge alerts. GuardDuty monitors threat signatures across VPC/DNS/CloudTrail. AWS Config audits resource configuration states. Inspector scans for software vulnerabilities.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html",
    tags: ["CloudTrail Insights", "Anomaly Detection", "Security", "Audit"]
  },
  {
    id: "aws-saa-212",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Securing Serverless Microservices with API Gateway Resource Policies",
    scenario: "A company hosts a microservices REST API on Amazon API Gateway in Account A. The API must be accessible ONLY to requests originating from a specific VPC in Account B (`vpc-99887766`), while blocking all requests from the public internet and other VPCs.",
    question: "Which API Gateway security mechanism restricts API invocations strictly to a specific source VPC?",
    options: [
      { id: 'A', text: "Configure an API Gateway Resource Policy with an `Allow` statement conditioned on `\"StringEquals\": {\"aws:sourceVpc\": \"vpc-99887766\"}`." },
      { id: 'B', text: "Enable API Gateway Standard API Keys." },
      { id: 'C', text: "Configure Route 53 Geolocation routing." },
      { id: 'D', text: "Attach a Security Group to the API Gateway REST API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway Resource Policies are JSON policy documents attached directly to REST APIs to control who can invoke the API. By creating a Private REST API and applying a resource policy with `\"Condition\": {\"StringEquals\": {\"aws:sourceVpc\": \"vpc-99887766\"}}`, only traffic originating from that specific VPC (via an Interface VPC Endpoint) is permitted. API Gateway does not support attached Security Groups directly. API keys meter usage, not network VPC boundaries. Route 53 is DNS.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html",
    tags: ["API Gateway", "Resource Policy", "VPC Endpoint", "Security"]
  },
  {
    id: "aws-saa-213",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Protecting Sensitive Data in Transit with Mutual TLS (mTLS) on Application Load Balancers",
    scenario: "A B2B financial exchange requires certificate-based mutual TLS (mTLS) authentication for all incoming client API connections to an Application Load Balancer. The ALB must verify the client's X.509 certificate against an enterprise Trust Store stored in Amazon S3 before establishing the connection.",
    question: "Which Application Load Balancer feature supports native client certificate verification without offloading to backend EC2 instances?",
    options: [
      { id: 'A', text: "AWS WAF client token inspection." },
      { id: 'B', text: "Application Load Balancer Mutual TLS (mTLS) with an S3-hosted Trust Store." },
      { id: 'C', text: "Amazon CloudFront standard HTTPS listener." },
      { id: 'D', text: "Network Load Balancer TCP passthrough." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Application Load Balancers natively support Mutual TLS (mTLS) authentication. The ALB verifies client X.509 certificates during TLS handshake negotiation against a Trust Store (CA bundle and CRLs) stored in an Amazon S3 bucket, passing client certificate attributes to backend target groups via HTTP headers. NLB TCP passthrough offloads all TLS processing to backend instances. AWS WAF inspects HTTP payloads, not TLS handshakes. CloudFront standard HTTPS does not terminate custom enterprise client mTLS trust stores directly.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/mutual-tls.html",
    tags: ["ALB", "mTLS", "X.509", "Security", "Authentication"]
  },
  {
    id: "aws-saa-214",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Securing S3 Buckets Across Accounts with Cross-Account KMS Key Grants",
    scenario: "Account A stores encrypted customer archives in Amazon S3 using a Customer Managed Key (CMK) in AWS KMS. An analytics application running on Amazon EMR in Account B needs temporary programmatic access to decrypt and read objects from the bucket during nightly batch jobs.",
    question: "Which AWS KMS feature allows programmatically delegating temporary, granular cryptographic permissions to external IAM principals?",
    options: [
      { id: 'A', text: "Make the KMS key public in AWS Organizations." },
      { id: 'B', text: "Create an AWS KMS Grant on the CMK in Account A specifying Account B's EMR IAM role as the grantee principal." },
      { id: 'C', text: "Export the KMS master private key to Account B." },
      { id: 'D', text: "Use SSE-S3 encryption." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An AWS KMS Grant is an advanced mechanism to programmatically delegate long-term or temporary granular permissions on a KMS Customer Managed Key to an IAM principal (grantee) without modifying the root KMS key policy. KMS master keys can never be exported. KMS keys cannot be made public. SSE-S3 removes CMK encryption control.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["KMS", "Grants", "Cross-Account", "Security", "Encryption"]
  },
  {
    id: "aws-saa-215",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Auditing Resource Access with IAM Access Analyzer",
    scenario: "A cloud security team needs an automated tool that continuously analyzes resource policies across S3 buckets, KMS keys, SQS queues, IAM roles, and Secrets Manager secrets to detect any resources that are accessible to external AWS accounts or the public internet.",
    question: "Which AWS service performs mathematical provable security analysis to identify external resource exposure?",
    options: [
      { id: 'A', text: "AWS Systems Manager Patch Manager." },
      { id: 'B', text: "AWS IAM Access Analyzer." },
      { id: 'C', text: "AWS Shield Standard." },
      { id: 'D', text: "Amazon Inspector." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS IAM Access Analyzer uses automated reasoning (mathematical logic proofs) to analyze resource-based policies across S3, KMS, SQS, Secrets Manager, and IAM roles, generating findings whenever a resource is accessible to an external entity, another AWS account, or the public internet. Inspector scans for software vulnerabilities. Shield protects against DDoS. Patch Manager applies OS patches.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Security", "Compliance", "Governance"]
  },
  {
    id: "aws-saa-216",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost Optimization for DynamoDB: Sizing Read and Write Capacity Units",
    scenario: "An application writes 10 items per second to Amazon DynamoDB, where each item is 3.5 KB in size. The team needs to calculate the minimum provisioned Write Capacity Units (WCU) required to avoid write throttling.",
    question: "How many WCUs are required for this workload?",
    options: [
      { id: 'A', text: "4 WCU." },
      { id: 'B', text: "35 WCU." },
      { id: 'C', text: "40 WCU (each 1 KB requires 1 WCU; 3.5 KB rounds up to 4 KB per item = 4 WCU per write * 10 writes/sec = 40 WCU)." },
      { id: 'D', text: "10 WCU." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Amazon DynamoDB, 1 Write Capacity Unit (WCU) provides 1 write per second for items up to 1 KB in size. For items larger than 1 KB, the size is rounded up to the nearest 1 KB boundary: 3.5 KB rounds up to 4 KB (requiring 4 WCUs per item). Writing 10 items per second requires `4 WCU * 10 = 40 WCU`.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ItemSizeCalculations.Writes",
    tags: ["DynamoDB", "WCU", "Capacity Planning", "Cost Optimization"]
  },
  {
    id: "aws-saa-217",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost-Optimized Compute: Graviton Processors vs Intel/AMD x86 Instances",
    scenario: "A company operates hundreds of Java microservices on Amazon EC2 `c5.2xlarge` instances (Intel x86). The engineering team wants to reduce EC2 compute costs by up to 20% and improve price-performance by 40% without changing application architecture.",
    question: "Which EC2 instance family upgrade delivers this price-performance improvement for cloud workloads?",
    options: [
      { id: 'A', text: "Migrate to `c5a` (AMD) instance types only." },
      { id: 'B', text: "Increase instance size to `c5.metal`." },
      { id: 'C', text: "Convert instances to Dedicated Hosts." },
      { id: 'D', text: "Migrate to AWS Graviton-based `c7g` / `c6g` (ARM64) instance types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Graviton processors (custom ARM64 silicon built by AWS) deliver up to 40% better price-performance over comparable current-generation x86-based instances at a 20% lower hourly cost. Most Linux container, Java, Python, Node.js, and Go applications run seamlessly on Graviton ARM64 architecture with simple recompilation or container rebuild. Dedicated Hosts and Metal instances are significantly more expensive.",
    referenceUrl: "https://aws.amazon.com/ec2/graviton/",
    tags: ["Graviton", "ARM64", "Cost Optimization", "EC2"]
  },
  {
    id: "aws-saa-218",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost-Optimized S3 Storage Tiering with S3 Intelligent-Tiering Deep Archive Tiers",
    scenario: "A research organization stores petabytes of scientific imaging data in Amazon S3. The data has completely unpredictable access patterns — some files are accessed frequently, while others are never accessed for months or years. The organization wants automated tiering down to Glacier Deep Archive price points without paying retrieval fees when data is accessed.",
    question: "Which Amazon S3 storage class configuration delivers automatic multi-tier archiving with zero retrieval fees?",
    options: [
      { id: 'A', text: "Amazon S3 Intelligent-Tiering with Archive Access and Deep Archive Access tiers opted-in." },
      { id: 'B', text: "Amazon S3 One Zone-IA with Glacier flexible transitions." },
      { id: 'C', text: "Amazon EBS gp3 Snapshots Archive." },
      { id: 'D', text: "Amazon S3 Standard with standard S3 Lifecycle rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Intelligent-Tiering automatically moves objects between access tiers: Frequent (0d), Infrequent (30d), Archive Instant (90d), and optional asynchronous Archive Access (90–730d) and Deep Archive Access (180–730d) tiers, providing storage cost savings down to Glacier Deep Archive rates ($0.00099/GB) with zero retrieval fees when objects are accessed. Manual S3 Lifecycle transitions - whether from One Zone-IA or from S3 Standard - incur retrieval fees and early deletion penalties when cold data is accessed. EBS is block storage.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
    tags: ["S3 Intelligent-Tiering", "Deep Archive", "Cost Optimization", "Storage"]
  },
  {
    id: "aws-saa-219",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost-Optimized Analytics Architecture: Amazon Redshift Serverless vs Provisioned RA3",
    scenario: "A retail company runs analytical SQL queries against a 20 TB data warehouse only during business hours (9:00 AM to 5:00 PM, Monday through Friday) and during monthly closing periods. Running a provisioned Redshift RA3 cluster 24/7 results in thousands of dollars in idle compute charges overnight and on weekends.",
    question: "Which Amazon Redshift deployment option automatically starts up, scales compute capacity up and down in RPU seconds, and shuts down during idle periods?",
    options: [
      { id: 'A', text: "Amazon RDS for MySQL single-AZ." },
      { id: 'B', text: "Amazon Redshift Provisioned `ra3.4xlarge` cluster." },
      { id: 'C', text: "Amazon Redshift Serverless." },
      { id: 'D', text: "Amazon DynamoDB On-Demand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Redshift Serverless automatically provisions, scales, and manages data warehouse capacity in Redshift Processing Units (RPUs), scaling capacity dynamically to match workload demands and automatically shutting down during idle periods, billing strictly for the compute seconds consumed. This eliminates 100% of idle weekend/nightly costs. Provisioned RA3 charges continuously 24/7. RDS MySQL is a transactional database. DynamoDB cannot run data warehouse analytical SQL joins.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html",
    tags: ["Redshift Serverless", "Data Warehouse", "Cost Optimization", "Analytics"]
  },
  {
    id: "aws-saa-220",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost-Effective Storage Architecture: Amazon EFS Elastic Throughput Mode",
    scenario: "A company operates shared web servers mounting an Amazon Elastic File System (Amazon EFS). The workload has unpredictable, spiky traffic with long idle periods and occasional bursts up to 500 MB/s. In the current Provisioned Throughput mode, the company pays high monthly fees for unused throughput.",
    question: "Which Amazon EFS throughput mode automatically scales throughput to meet spiky application demands while paying only for data read and written?",
    options: [
      { id: 'A', text: "Amazon EFS Elastic Throughput mode." },
      { id: 'B', text: "Amazon S3 Standard." },
      { id: 'C', text: "Amazon EFS Provisioned Throughput mode set to 500 MB/s." },
      { id: 'D', text: "Amazon EBS io2 Block Express." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EFS Elastic Throughput is designed for spiky and unpredictable workloads. It automatically provides the exact throughput required by the application (up to 3 GiB/s read and 1 GiB/s write per file system) with zero capacity provisioning or monitoring, billing strictly for the data read and written per GB. Provisioned Throughput charges a continuous hourly rate for peak bandwidth even when idle. EBS io2 is single-AZ block storage. S3 is object storage.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/performance.html#throughput-modes",
    tags: ["EFS", "Elastic Throughput", "Cost Optimization", "Storage"]
  },
  {
    id: "aws-saa-221",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Disaster Recovery for Hybrid Architectures: AWS Transit Gateway Route Tables and Blackhole Prevention",
    scenario: "An enterprise connects on-premises networks to 100 VPCs across two AWS Regions using AWS Transit Gateways and Direct Connect. The network architect must ensure that traffic between isolated security domains (e.g. Production vs Development VPCs) is strictly segmented at the routing layer without inspecting traffic with expensive firewall instances.",
    question: "Which Transit Gateway feature isolates network traffic between different VPC groups using dedicated routing domains?",
    options: [
      { id: 'A', text: "VPC Peering connections between all VPCs." },
      { id: 'B', text: "Multiple AWS Transit Gateway Route Tables with specific route table associations and propagations." },
      { id: 'C', text: "Route 53 Private Hosted Zones." },
      { id: 'D', text: "Security Groups applied to Transit Gateway attachments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Transit Gateway supports multiple distinct Transit Gateway Route Tables. By associating production VPC attachments with a Production TGW route table and development attachments with a Development TGW route table (and controlling route propagations), network traffic is completely segmented and isolated into virtual routing domains (VRFs) without deploying third-party firewalls. Transit Gateway attachments do not have Security Groups. VPC Peering creates point-to-point meshes. Route 53 is DNS.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway", "Route Tables", "Network Segmentation", "Resilience", "Networking"]
  },
  {
    id: "aws-saa-222",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "High-Performance Real-Time Caching with DynamoDB Accelerator (DAX) Cluster Sizing",
    scenario: "A mobile application experiences millions of read requests per second on popular catalog items in Amazon DynamoDB. The team adds an Amazon DynamoDB Accelerator (DAX) cluster. The application requires high availability, automatic primary node failover, and read scaling across multiple Availability Zones.",
    question: "What is the recommended minimum DAX cluster node configuration for production high availability?",
    options: [
      { id: 'A', text: "Deploy 2 DAX clusters in the same AZ." },
      { id: 'B', text: "Deploy a DAX cluster with a minimum of 3 nodes across 3 Availability Zones (1 primary node and 2 read replicas)." },
      { id: 'C', text: "Enable DynamoDB Global Tables without DAX." },
      { id: 'D', text: "Deploy a single DAX node in 1 Availability Zone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For production high availability, AWS recommends deploying a DAX cluster with at least 3 nodes across 3 different Availability Zones (1 primary node for writes/cache management and 2 read replicas for read scaling). If the primary node fails, DAX automatically promotes one of the read replicas to primary in seconds without cache downtime. Single node is a single point of failure. Same-AZ clusters fail if the AZ has an outage. Global Tables replicates tables across regions, not in-memory microsecond read caching.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster-architecture.html",
    tags: ["DynamoDB", "DAX", "High Availability", "Performance", "Caching"]
  },
  {
    id: "aws-saa-223",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Securing Sensitive Microservices with AWS Verified Access (Zero Trust)",
    scenario: "A company wants to provide remote corporate employees secure access to internal private web applications hosted on AWS without requiring employees to connect to a corporate Virtual Private Network (VPN) client.",
    question: "Which AWS service implements Zero Trust network access by evaluating corporate identity provider claims and device security posture before granting application access?",
    options: [
      { id: 'A', text: "AWS Verified Access." },
      { id: 'B', text: "AWS Client VPN." },
      { id: 'C', text: "AWS Site-to-Site VPN." },
      { id: 'D', text: "AWS Direct Connect." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Verified Access enables secure, VPN-less access to corporate applications running on AWS using Zero Trust principles. It integrates with corporate identity providers (via OIDC / IAM Identity Center) and device management partners (CrowdStrike, Jamf) to evaluate user identity claims and device security posture for every single application request before granting access. AWS Client VPN requires managing VPN clients. Site-to-Site VPN and Direct Connect connect static networks.",
    referenceUrl: "https://docs.aws.amazon.com/verified-access/latest/admin/what-is-verified-access.html",
    tags: ["AWS Verified Access", "Zero Trust", "VPN-less", "Security"]
  },
  {
    id: "aws-saa-224",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d4",
    domainName: "Design Cost-Optimized Architectures",
    title: "Cost-Optimized Database Snapshots: Sharing Snapshots Across Accounts vs S3 Export",
    scenario: "A development team needs to copy a 2 TB Amazon RDS PostgreSQL production database snapshot to a staging AWS account for monthly QA testing without paying high data transfer or storage duplication fees.",
    question: "What is the most cost-effective method to share an encrypted RDS database snapshot across AWS accounts?",
    options: [
      { id: 'A', text: "Replicate the entire RDS cluster with active Multi-AZ." },
      { id: 'B', text: "Share the encrypted RDS snapshot with the staging account using a shared Customer Managed Key (CMK), and restore directly in the staging account." },
      { id: 'C', text: "Export the database to Amazon S3 as CSV files and import with AWS DMS." },
      { id: 'D', text: "Run an AWS DataSync task between the database instances." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon RDS allows sharing manual DB snapshots with other AWS accounts directly. By encrypting the snapshot with a Customer Managed KMS Key (CMK) and granting the staging account decrypt permissions in the KMS key policy, the staging account can restore a new database instance directly from the shared snapshot without costly data export pipelines or intermediate storage fees. S3 CSV exports and DataSync introduce compute, storage, and transformation overhead. Active Multi-AZ is for high availability.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html",
    tags: ["RDS", "Snapshot Sharing", "Cross-Account", "Cost Optimization"]
  },
  {
    id: "aws-saa-225",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d1",
    domainName: "Design Resilient Architectures",
    title: "Disaster Recovery for High-Throughput Web Applications: CloudFront Origin Groups and Failover Criteria",
    scenario: "A critical e-commerce storefront serves dynamic web content through Amazon CloudFront backed by a primary Application Load Balancer in us-east-1 and a disaster recovery standby ALB in us-west-2. If the primary ALB returns HTTP 500, 502, 503, or 504 server errors, CloudFront must immediately fail over to the secondary ALB without returning error pages to shoppers.",
    question: "Which Amazon CloudFront feature provides automated, sub-second origin failover on specific HTTP status codes?",
    options: [
      { id: 'A', text: "Create Route 53 Weighted DNS records pointing to both ALBs." },
      { id: 'B', text: "Configure a CloudFront Origin Group with the primary and secondary ALBs and specify failover HTTP status codes (500, 502, 503, 504)." },
      { id: 'C', text: "Configure custom error pages returning static S3 HTML." },
      { id: 'D', text: "Deploy an AWS Global Accelerator with standard health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFront Origin Groups allow grouping a primary and a secondary origin together. If CloudFront receives specific HTTP error status codes (e.g. 500, 502, 503, 504) or a timeout from the primary origin, it automatically retries the request against the secondary origin in the origin group, providing seamless origin failover without showing error pages to users. Route 53 DNS requires DNS TTL expiration. Global Accelerator routes TCP/UDP traffic, not HTTP status code failover. Custom error pages return static maintenance pages instead of live standby responses.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html",
    tags: ["CloudFront", "Origin Groups", "Origin Failover", "High Availability", "Resilience"]
  }
];

export default AWS_SAA_QUESTIONS_9;
