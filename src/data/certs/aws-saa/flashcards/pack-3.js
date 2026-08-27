export const AWS_SAA_FLASHCARDS_3 = [
  {
    id: 'aws-saa-fc-51',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'EC2 Placement Groups: Cluster vs Spread vs Partition',
    hint: 'Single-AZ low latency vs hardware failure isolation vs large distributed partitions.',
    back: '<strong>Cluster</strong>: tightly packed in 1 AZ for ultra-low latency HPC / network bandwidth.<br><strong>Spread</strong>: strictly placed on distinct hardware racks (max 7 per AZ) for critical HA.<br><strong>Partition</strong>: divides group into partitions on separate racks for HDFS/Cassandra/Kafka.',
    tags: ['EC2', 'Placement Groups', 'Resilience']
  },
  {
    id: 'aws-saa-fc-52',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Auto Scaling Lifecycle Hooks: when and why do you use them?',
    hint: 'Pause instance launch or termination transitions.',
    back: 'Lifecycle hooks pause an instance in a <code>Pending:Wait</code> or <code>Terminating:Wait</code> state. This allows custom scripts or SSM automation to install software/warm caches on launch, or safely drain connections and save log files before termination.',
    tags: ['Auto Scaling', 'Lifecycle Hooks', 'Resilience']
  },
  {
    id: 'aws-saa-fc-53',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon DynamoDB Global Tables — how does replication work?',
    hint: 'Multi-Region active-active with conflict resolution.',
    back: 'DynamoDB Global Tables provide fully managed <strong>active-active multi-Region replication</strong>. Writes to any regional replica table are asynchronously replicated to all other regions within seconds using DynamoDB Streams, with "last writer wins" conflict resolution.',
    tags: ['DynamoDB', 'Global Tables', 'Multi-Region', 'Resilience']
  },
  {
    id: 'aws-saa-fc-54',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon Data Lifecycle Manager (DLM) — what does it automate?',
    hint: 'EBS snapshots and EBS-backed AMIs.',
    back: 'Amazon DLM automates the scheduled creation, cross-Region copy, and retention deletion of <strong>EBS volume snapshots</strong> and <strong>EBS-backed AMIs</strong> based on resource tags with zero custom code or cron infrastructure.',
    tags: ['DLM', 'EBS', 'Snapshots', 'Backup']
  },
  {
    id: 'aws-saa-fc-55',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon EventBridge vs. Amazon SNS — key architectural differences',
    hint: 'Content-based JSON routing vs high-throughput topic fanout.',
    back: '<strong>EventBridge</strong>: serverless event bus with advanced content-based JSON pattern matching, schema registry, SaaS partner sources, and direct routing to 20+ AWS targets.<br><strong>SNS</strong>: high-throughput topic pub/sub fanout to SQS, Lambda, email, SMS, and HTTP webhooks.',
    tags: ['EventBridge', 'SNS', 'Decoupling', 'Architecture']
  },
  {
    id: 'aws-saa-fc-56',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon S3 Multi-Region Access Points (MRAP) — how do they route traffic?',
    hint: 'Single global hostname backed by Global Accelerator.',
    back: 'S3 MRAP provides a single global endpoint (<code>*.mrap.accesspoint.s3-global.amazonaws.com</code>) that uses AWS Global Accelerator to route client requests over the private AWS backbone to the lowest-latency S3 bucket, with active-passive failover controls.',
    tags: ['S3', 'MRAP', 'Global Accelerator', 'Multi-Region']
  },
  {
    id: 'aws-saa-fc-57',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon EBS gp2 vs. gp3 — why migrate to gp3?',
    hint: 'Decoupled IOPS/throughput and 20% lower cost.',
    back: '<strong>gp2</strong> ties IOPS strictly to storage volume size (3 IOPS/GB). <strong>gp3</strong> provides baseline 3,000 IOPS and 125 MB/s throughput included free, allows scaling IOPS and throughput independently of storage capacity, and costs <strong>20% less per GB</strong>.',
    tags: ['EBS', 'gp3', 'gp2', 'Performance', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-58',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'ElastiCache Redis vs Memcached — when must you choose Redis?',
    hint: 'Replication, failover, data structures, and backup.',
    back: 'Choose <strong>Redis</strong> when you need: in-memory persistence/snapshots, Multi-AZ with automatic failover, Read Replicas, complex data types (sets, hashes, sorted sets, geospatial), pub/sub messaging, or RBAC security. Choose <strong>Memcached</strong> only for simple multithreaded key-value caching.',
    tags: ['ElastiCache', 'Redis', 'Memcached', 'Caching']
  },
  {
    id: 'aws-saa-fc-59',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Origin Access Control (OAC) vs Origin Access Identity (OAI)',
    hint: 'Why OAC superseded OAI.',
    back: '<strong>OAC</strong> is the modern standard: supports all S3 buckets in all regions, SSE-KMS customer managed keys, dynamic HTTP methods (PUT/POST/DELETE), and fine-grained IAM resource policies. <strong>OAI</strong> is legacy and cannot support KMS or new AWS regions.',
    tags: ['CloudFront', 'OAC', 'OAI', 'Security', 'S3']
  },
  {
    id: 'aws-saa-fc-60',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon FSx for Windows File Server — key capabilities',
    hint: 'Native Windows SMB storage with Active Directory.',
    back: 'Fully managed native Microsoft Windows Server storage supporting <strong>SMB 2.0–3.1.1</strong>, Microsoft Active Directory domain integration, NTFS ACLs, Volume Shadow Copies (VSS), DFS Namespaces, and Multi-AZ high availability with sub-millisecond latencies.',
    tags: ['FSx for Windows', 'SMB', 'Active Directory', 'Storage']
  },
  {
    id: 'aws-saa-fc-61',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon API Gateway: REST API vs HTTP API vs WebSocket API',
    hint: 'Feature-rich vs low-cost/low-latency vs bidirectional.',
    back: '<strong>HTTP API</strong>: low-cost, low-latency, OIDC/OAuth2 auth, core proxying.<br><strong>REST API</strong>: advanced features (stage caching, API keys, usage plans, request validation, WAF).<br><strong>WebSocket API</strong>: persistent bidirectional real-time push connections.',
    tags: ['API Gateway', 'REST', 'HTTP API', 'WebSockets']
  },
  {
    id: 'aws-saa-fc-62',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'How do you prevent hot partitions in Amazon DynamoDB?',
    hint: 'High-cardinality keys, composite keys, and write sharding.',
    back: 'Use partition keys with <strong>high cardinality</strong> (e.g. user_id, order_id, device_id). Avoid dates or status flags as partition keys. If writing to a small set of keys, use <strong>write sharding (salting)</strong> by appending a random or calculated suffix (e.g. <code>orderDate_1..N</code>).',
    tags: ['DynamoDB', 'Partition Key', 'Sharding', 'Performance']
  },
  {
    id: 'aws-saa-fc-63',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'IAM Permissions Boundary — what does it control?',
    hint: 'Maximum permissions an entity can have.',
    back: 'An IAM Permissions Boundary uses a managed policy to set the <strong>maximum possible permissions</strong> that identity-based policies can grant to an IAM user or role. An action is allowed ONLY if permitted by both the identity policy AND the permissions boundary.',
    tags: ['IAM', 'Permissions Boundary', 'Security']
  },
  {
    id: 'aws-saa-fc-64',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon GuardDuty — what data sources does it inspect?',
    hint: 'Continuous serverless log analysis without agents.',
    back: 'GuardDuty analyzes <strong>AWS CloudTrail event logs</strong>, <strong>CloudTrail S3 data events</strong>, <strong>VPC Flow Logs</strong>, <strong>DNS query logs</strong>, <strong>EKS audit logs</strong>, and EBS volume data using machine learning to identify compromised instances, crypto-mining, and unauthorized access.',
    tags: ['GuardDuty', 'Security', 'Threat Detection']
  },
  {
    id: 'aws-saa-fc-65',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Network Firewall — where and how is it deployed?',
    hint: 'VPC endpoints with Suricata stateful rules.',
    back: 'AWS Network Firewall deploys dedicated firewall endpoints into VPC subnets. It provides <strong>stateful Layer 3–7 packet inspection</strong>, outbound domain allowlisting/filtering, custom Suricata IPS/IDS rules, and integrates with Transit Gateway for centralized inspection VPC topologies.',
    tags: ['AWS Network Firewall', 'VPC', 'Security', 'Suricata']
  },
  {
    id: 'aws-saa-fc-66',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon Macie — primary function and integration',
    hint: 'Discovering sensitive PII in S3 buckets.',
    back: 'Amazon Macie uses machine learning and pattern matching to automatically discover, classify, and protect <strong>sensitive data (PII, credit cards, passport numbers)</strong> stored in Amazon S3, generating findings in AWS Security Hub and EventBridge.',
    tags: ['Macie', 'S3', 'PII', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-67',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Certificate Manager (ACM) — how does automatic renewal work?',
    hint: 'DNS validation vs email validation.',
    back: 'Public certificates validated using <strong>DNS validation</strong> (via a CNAME record in Route 53) are automatically renewed by ACM indefinitely with zero manual intervention. Email-validated certificates require responding to annual validation emails.',
    tags: ['ACM', 'TLS', 'Certificates', 'Security']
  },
  {
    id: 'aws-saa-fc-68',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS KMS Multi-Region Keys — how do primary and replica keys interact?',
    hint: 'Shared key ID and key material across regions.',
    back: 'A KMS Multi-Region Key consists of a primary key in one region and replica keys in other regions sharing the <strong>exact same key ID and key material</strong>. Data encrypted in Region A can be decrypted locally in Region B without cross-region network calls.',
    tags: ['KMS', 'Multi-Region Keys', 'Encryption', 'Security']
  },
  {
    id: 'aws-saa-fc-69',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Lambda pricing model — what are you billed for?',
    hint: 'Invocations and duration in ms.',
    back: 'Billed based on: 1) <strong>Total number of requests</strong> ($0.20 per million requests), and 2) <strong>Execution duration</strong> measured in milliseconds based on allocated memory size. 1 million free requests and 3.2M compute-seconds monthly in Free Tier.',
    tags: ['Lambda', 'Serverless', 'Pricing', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-70',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Inter-Instance Data Transfer Pricing rules',
    hint: 'Same AZ vs different AZ vs public IPs.',
    back: '• <strong>Same AZ via Private IP</strong>: Free ($0.00/GB)<br>• <strong>Cross-AZ within same Region</strong>: $0.01/GB in + $0.01/GB out<br>• <strong>Public IP / Elastic IP in same Region</strong>: Incurs public data transfer charges even in same AZ.<br>• <strong>Cross-Region</strong>: Standard internet/inter-region egress rates.',
    tags: ['Data Transfer', 'VPC', 'Networking', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-71',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon S3 Storage Lens — key features for FinOps',
    hint: 'Organization-wide storage visibility and actionable recommendations.',
    back: 'Provides organization-wide dashboards across hundreds of accounts and buckets. Identifies cost-saving opportunities: <strong>incomplete multipart uploads</strong>, <strong>non-current version accumulation</strong>, and <strong>buckets missing lifecycle transition rules</strong>.',
    tags: ['S3', 'Storage Lens', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-72',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon Athena vs. Amazon EMR for SQL Analytics Cost Optimization',
    hint: 'Serverless per-TB scan vs provisioned 24/7 cluster nodes.',
    back: 'Use <strong>Amazon Athena</strong> for ad-hoc, intermittent SQL queries directly on S3 data lakes ($5.00/TB scanned, zero idle server cost). Use <strong>Amazon EMR</strong> for continuous, intensive big data batch pipelines using Spark/Flink requiring dedicated hardware.',
    tags: ['Athena', 'EMR', 'Analytics', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-73',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon RDS Point-in-Time Recovery (PITR) — how does it work?',
    hint: 'Automated snapshots plus continuous transaction logs.',
    back: 'RDS automatically captures daily snapshots and continuously uploads transaction write-ahead logs (WAL) to S3. PITR creates a <strong>brand-new DB instance</strong> restored to any second within the backup retention period (up to 35 days, down to last 5 mins).',
    tags: ['RDS', 'PITR', 'Backup', 'Resilience']
  },
  {
    id: 'aws-saa-fc-74',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'SNS + SQS Fanout Architecture pattern',
    hint: 'Publish once, distribute to multiple independent worker queues.',
    back: 'A single publisher pushes events to an <strong>Amazon SNS topic</strong>. Multiple independent <strong>Amazon SQS queues</strong> subscribe to the topic (optionally with subscription filter policies). Each microservice polls its own queue at its own rate with isolated failure blast radiuses.',
    tags: ['SNS', 'SQS', 'Fanout', 'Architecture', 'Decoupling']
  },
  {
    id: 'aws-saa-fc-75',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'IAM Database Authentication for RDS & Aurora — how it works',
    hint: 'Eliminate hardcoded database passwords using temporary STS tokens.',
    back: 'Applications authenticate to RDS/Aurora MySQL or PostgreSQL using IAM credentials and <strong>temporary authentication tokens</strong> (valid for 15 mins) generated via the AWS SDK. Access is governed by the <code>rds-db:connect</code> IAM action without storing database passwords.',
    tags: ['IAM', 'RDS', 'Aurora', 'Security']
  }
];

export default AWS_SAA_FLASHCARDS_3;
