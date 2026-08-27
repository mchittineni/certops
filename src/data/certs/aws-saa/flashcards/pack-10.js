export const AWS_SAA_FLASHCARDS_10 = [
  {
    id: 'aws-saa-fc-226',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Elastic Disaster Recovery (AWS DRS) — supported source environments',
    hint: 'Physical servers, VMware vSphere, Microsoft Hyper-V, and cloud instances.',
    back: 'Replicates physical servers, <strong>VMware vSphere</strong>, <strong>Microsoft Hyper-V</strong>, and other cloud virtual machines at the block level into AWS staging subnets, providing continuous data protection and automated recovery orchestration.',
    tags: ['AWS DRS', 'Disaster Recovery', 'VMware', 'Hyper-V', 'Resilience']
  },
  {
    id: 'aws-saa-fc-227',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon RDS Proxy — connection pooling during database failover',
    hint: 'Preserving client connections and cutting application failover time by up to 66%.',
    back: 'Maintains open client application connections during Multi-AZ database failovers, seamlessly switching backend traffic to the newly promoted standby instance. <strong>Reduces application failover recovery times by up to 66%</strong>.',
    tags: ['RDS Proxy', 'Multi-AZ', 'Failover', 'High Availability']
  },
  {
    id: 'aws-saa-fc-228',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon MSK Replicator — cross-cluster and cross-Region Kafka replication',
    hint: 'Managed replication of topics, consumer groups, schema registries, and offsets.',
    back: 'Fully managed cross-cluster and cross-Region replication for <strong>Amazon MSK (Apache Kafka)</strong>. Automatically synchronizes topics, consumer group offsets, schemas, and ACLs across clusters without managing MirrorMaker2.',
    tags: ['MSK', 'Kafka', 'MSK Replicator', 'Multi-Region', 'Resilience']
  },
  {
    id: 'aws-saa-fc-229',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Monitoring Amazon SQS Dead-Letter Queues (DLQ) with CloudWatch',
    hint: 'ApproximateNumberOfMessagesVisible > 0.',
    back: 'Set a CloudWatch Alarm on the DLQ metric <strong>ApproximateNumberOfMessagesVisible > 0</strong> with an Amazon SNS email/Slack notification action to immediately alert on unprocessable poison-pill messages.',
    tags: ['SQS', 'DLQ', 'CloudWatch', 'SNS', 'Resilience']
  },
  {
    id: 'aws-saa-fc-230',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Resolver DNS Firewall — outbound VPC DNS inspection',
    hint: 'Filtering domain names against malware and C2 lists before DNS resolution.',
    back: 'Stateful firewall that inspects and filters <strong>outbound DNS queries</strong> originating from inside VPCs, blocking access to known malicious domains, botnets, and C2 servers before IP resolution occurs.',
    tags: ['Route 53 Resolver', 'DNS Firewall', 'Security', 'Resilience']
  },
  {
    id: 'aws-saa-fc-231',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Timestream — time-series storage tiering architecture',
    hint: 'In-memory store for recent data + magnetic store for historical data.',
    back: 'Serverless time-series database with built-in dual storage tiers: <strong>Memory Store</strong> (optimized for high-throughput recent writes and sub-second queries) and <strong>Magnetic Store</strong> (cost-effective tier for historical data).',
    tags: ['Amazon Timestream', 'Time-Series', 'IoT', 'Performance']
  },
  {
    id: 'aws-saa-fc-232',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Global Accelerator — Anycast IP address benefits',
    hint: 'Two static anycast IPs for firewall allow-listing and private backbone routing.',
    back: 'Provides <strong>two static Anycast IPv4 addresses</strong>. Ingests client traffic (TCP and UDP) at edge locations and routes it over the congestion-free AWS private global network backbone directly to regional ALBs, NLBs, or EC2 instances.',
    tags: ['Global Accelerator', 'Anycast', 'UDP', 'Networking', 'Performance']
  },
  {
    id: 'aws-saa-fc-233',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'FSx for Windows File Server Multi-AZ — SQL Server Always On FCIs',
    hint: 'Shared SMB storage with synchronous replication and DFS Namespaces across AZs.',
    back: 'Provides shared SMB storage across multiple AZs with continuous synchronous replication and automated failover in seconds. Recommended shared storage backend for <strong>SQL Server Always On Failover Cluster Instances (FCI)</strong>.',
    tags: ['FSx for Windows', 'Multi-AZ', 'SQL Server', 'Storage', 'Performance']
  },
  {
    id: 'aws-saa-fc-234',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Redshift Materialized Views with Automated Refresh',
    hint: 'Precomputing complex SQL queries and updating incrementally on base table change.',
    back: 'Precomputes and stores query results for complex joins and aggregations. With <strong>Automated Refresh</strong>, Redshift incrementally refreshes the view as underlying table data changes, reducing query times from minutes to milliseconds.',
    tags: ['Redshift', 'Materialized Views', 'Data Warehouse', 'Performance']
  },
  {
    id: 'aws-saa-fc-235',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS AppSync Pipeline Resolvers — sequential multi-source execution',
    hint: 'Chaining multiple function resolvers across DynamoDB, HTTP, Lambda in 1 mutation.',
    back: 'Executes a series of discrete <strong>Function Resolvers</strong> in sequential order across multiple heterogeneous data sources (DynamoDB, Lambda, HTTP endpoints, OpenSearch) within a single GraphQL query or mutation.',
    tags: ['AppSync', 'Pipeline Resolvers', 'GraphQL', 'DynamoDB', 'Performance']
  },
  {
    id: 'aws-saa-fc-236',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS CloudTrail Log File Integrity Validation — cryptographic mechanism',
    hint: 'SHA-256 and RSA signatures via digest files.',
    back: 'Uses <strong>SHA-256 hashing and RSA digital signatures</strong> delivered in digest files to mathematically prove whether CloudTrail log files were modified, tampered with, or deleted after delivery to Amazon S3.',
    tags: ['CloudTrail', 'Log Integrity', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-237',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Gateway Load Balancer (GWLB) — GENEVE protocol and transparent appliance routing',
    hint: 'Layer 3 gateway and load balancer for third-party next-gen firewalls.',
    back: 'Transparently inserts and scales third-party virtual security appliances (firewalls, IPS/IDS) into the traffic path using <strong>GENEVE protocol encapsulation (port 6081)</strong>, preserving original source/destination IP packet headers.',
    tags: ['GWLB', 'Firewall', 'GENEVE', 'Networking', 'Security']
  },
  {
    id: 'aws-saa-fc-238',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS IAM Identity Center Permission Sets — lifecycle and provisioning',
    hint: 'Centrally defined IAM policies mapped to corporate IdP groups across accounts.',
    back: 'Collections of administrator-defined IAM policies and session duration settings. Centrally assigned to corporate IdP groups (Okta/Azure AD) across specific accounts in AWS Organizations, automatically provisioning IAM roles in target accounts.',
    tags: ['IAM Identity Center', 'Permission Sets', 'AWS Organizations', 'Security']
  },
  {
    id: 'aws-saa-fc-239',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon ECR Enhanced Scanning vs Basic Scanning',
    hint: 'Continuous OS & programming language CVE scanning via Inspector vs push-only OS scanning.',
    back: '• <strong>Enhanced Scanning (Inspector)</strong>: continuous scanning for OS and programming language package (Node, Python, Java, Go) CVEs.<br>• <strong>Basic Scanning (Clair)</strong>: scan-on-push for operating system packages only.',
    tags: ['ECR', 'Inspector', 'Enhanced Scanning', 'Security', 'Containers']
  },
  {
    id: 'aws-saa-fc-240',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Access Points — avoiding the 20 KB bucket policy limit',
    hint: 'Dedicated hostnames with independent access policies per team or VPC.',
    back: 'Unique hostnames with dedicated IAM access policies describing how data can be accessed. Eliminates monolithic 20 KB bucket policy limits by giving each team or microservice its own dedicated access point (e.g. <code>finance-ap</code>, <code>analytics-ap</code>).',
    tags: ['S3', 'Access Points', 'Security', 'Data Lake']
  },
  {
    id: 'aws-saa-fc-241',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Spot Instances for CI/CD Build Runners — cost optimization fit',
    hint: 'Stateless, short-lived, restartable jobs with up to 90% savings.',
    back: 'CI/CD automated test builds are stateless and restartable. Running CI/CD runners on <strong>Amazon EC2 Spot Instances</strong> reduces compute build costs by up to <strong>90%</strong> compared to On-Demand instances.',
    tags: ['EC2', 'Spot Instances', 'CI/CD', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-242',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'VPC Sharing (AWS RAM) — eliminating redundant NAT Gateways across accounts',
    hint: 'Shared central VPC subnets in AWS Organizations.',
    back: 'A central network account shares subnets with member accounts via AWS RAM. Member accounts launch EC2/RDS into shared subnets, <strong>sharing a single set of NAT Gateways and eliminating dozens of idle per-account NAT Gateways</strong>.',
    tags: ['VPC Sharing', 'AWS RAM', 'NAT Gateway', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'aws-saa-fc-243',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon Redshift RA3 Nodes with Redshift Managed Storage (RMS)',
    hint: 'Decoupling compute from storage scaling using local NVMe cache + S3 storage.',
    back: 'RA3 instances decouple compute from storage by using local NVMe SSDs for hot data caching and offloading cold data to S3-backed <strong>Redshift Managed Storage (RMS)</strong>. Pay only for the compute and storage you actually use.',
    tags: ['Redshift', 'RA3', 'RMS', 'Cost Optimization', 'Data Warehouse']
  },
  {
    id: 'aws-saa-fc-244',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'EBS gp3 Independent IOPS and Throughput Configuration',
    hint: 'Provision up to 64,000 IOPS and 1,000 MB/s independently of volume size.',
    back: 'Unlike gp2 (which tied IOPS to volume size at 3 IOPS/GB), <strong>gp3</strong> lets you independently configure up to 64,000 IOPS and 1,000 MB/s throughput on small volumes, eliminating the cost of over-provisioning storage capacity.',
    tags: ['EBS', 'gp3', 'IOPS', 'Cost Optimization', 'Performance']
  },
  {
    id: 'aws-saa-fc-245',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Cost Explorer EC2 Rightsizing Recommendations',
    hint: '14-day utilization trend analysis identifying underutilized/oversized instances.',
    back: 'Analyzes historical CloudWatch CPU and memory metrics over the last 14 days to identify underutilized or idle EC2 instances, providing estimated monthly dollar savings for downsizing or terminating instances.',
    tags: ['Cost Explorer', 'Rightsizing', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-246',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon Kinesis Data Streams On-Demand Capacity Mode',
    hint: 'Automatic scaling up to 200 MB/s write without shard management.',
    back: 'Automatically scales stream throughput up to <strong>200 MB/s write and 400 MB/s read</strong> with zero shard management, capacity planning, or provisioned throughput throttling errors, charging strictly per GB ingested/retrieved.',
    tags: ['Kinesis', 'On-Demand', 'Streaming', 'Resilience', 'Performance']
  },
  {
    id: 'aws-saa-fc-247',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon FSx for OpenZFS — performance and snapshot capabilities',
    hint: 'Million-plus IOPS, sub-millisecond latencies, and near-instant ZFS snapshots for Linux.',
    back: 'Fully managed open-source OpenZFS storage for Linux NFS workloads. Delivers <strong>1 million+ IOPS and sub-millisecond latency</strong> with instantaneous point-in-time ZFS snapshots and data cloning.',
    tags: ['FSx for OpenZFS', 'NFS', 'POSIX', 'Performance', 'Storage']
  },
  {
    id: 'aws-saa-fc-248',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS AppConfig — feature flags and automated rollback deployment',
    hint: 'Runtime configuration deployment with CloudWatch alarm rollbacks.',
    back: 'Deploys application configurations and feature flags dynamically at runtime without restarting code. Supports gradual rollouts (e.g. 10% per minute), schema validators, and <strong>automatic rollback if CloudWatch alarms trigger</strong>.',
    tags: ['AWS AppConfig', 'Feature Flags', 'Deployment', 'Security', 'Resilience']
  },
  {
    id: 'aws-saa-fc-249',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'S3 Lifecycle: Expiration vs NoncurrentVersionExpiration',
    hint: 'Creating delete marker on current version vs permanently deleting older versions.',
    back: '• <strong>Expiration</strong>: applies a Delete Marker to the live current version.<br>• <strong>NoncurrentVersionExpiration</strong>: permanently deletes older historical non-current versions after N days to prevent storage cost accumulation.',
    tags: ['S3', 'Lifecycle', 'Versioning', 'Noncurrent Versions', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-250',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Calculated Health Checks with CloudWatch Composite Alarms',
    hint: 'Combining multiple health conditions (e.g. ALB health AND error rate metric).',
    back: 'Combines multiple metric alarms and health checks using boolean logic (<code>AND</code>, <code>OR</code>, <code>NOT</code>) in a <strong>Route 53 Calculated Health Check</strong> to trigger DNS failover only when all composite criteria are met, eliminating false positives.',
    tags: ['Route 53', 'CloudWatch', 'Composite Alarms', 'Disaster Recovery', 'Resilience']
  }
];

export default AWS_SAA_FLASHCARDS_10;
