export const AWS_SAA_FLASHCARDS_6 = [
  {
    id: 'aws-saa-fc-126',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Elastic Disaster Recovery (AWS DRS) vs AWS Application Migration Service (AWS MGN)',
    hint: 'Ongoing continuous disaster recovery vs one-time lift-and-shift migration.',
    back: '<strong>AWS DRS</strong>: continuous 24/7 block replication for ongoing disaster recovery and periodic drills (sub-second RPO).<br><strong>AWS MGN</strong>: designed for one-time server lift-and-shift migrations with cutover windows.',
    tags: ['AWS DRS', 'AWS MGN', 'Disaster Recovery', 'Migration']
  },
  {
    id: 'aws-saa-fc-127',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon S3 Same-Region Replication (SRR) — key use cases',
    hint: 'Compliance aggregation, log consolidation, and cross-account isolation in 1 Region.',
    back: 'Replicates objects across buckets in the <strong>same AWS Region</strong>. Use cases: 1) Aggregate logs across multiple accounts into a central security account, 2) Change object ownership to the destination account, 3) Re-encrypt objects with a different KMS key.',
    tags: ['S3', 'SRR', 'Replication', 'Compliance']
  },
  {
    id: 'aws-saa-fc-128',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon Route 53 Application Recovery Controller (ARC) — routing controls',
    hint: 'Deterministic five-region highly available failover switches.',
    back: 'Provides <strong>failover routing controls (switches)</strong> distributed across 5 AWS Regions to safely shift traffic away from an impaired region or cell in seconds, independent of regional control planes or standard DNS TTL propagation delays.',
    tags: ['Route 53 ARC', 'Disaster Recovery', 'High Availability']
  },
  {
    id: 'aws-saa-fc-129',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'EC2 Auto Scaling: Target Tracking vs Scheduled vs Step Scaling',
    hint: 'Thermostat metric tracking vs calendar schedules vs custom step adjustments.',
    back: '• <strong>Target Tracking</strong>: maintains metric at a target value (e.g. CPU at 60%).<br>• <strong>Scheduled</strong>: scales based on specific date/time for predictable traffic.<br>• <strong>Step Scaling</strong>: applies tiered scaling adjustments based on alarm breach magnitudes.',
    tags: ['Auto Scaling', 'Target Tracking', 'Scheduled Scaling', 'Resilience']
  },
  {
    id: 'aws-saa-fc-130',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon S3 Batch Operations — capabilities and manifest sources',
    hint: 'Billions of objects tagged, copied, restored, or transformed with Lambda.',
    back: 'Executes automated batch jobs across billions of objects in an S3 bucket using an <strong>S3 Inventory CSV or report</strong> manifest. Supported actions: PutObjectTagging, CopyObject (re-encrypt), S3 Glacier Restore, PutObjectAcl, and Lambda function invocation.',
    tags: ['S3', 'Batch Operations', 'Inventory', 'Resilience']
  },
  {
    id: 'aws-saa-fc-131',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Transfer Family — supported protocols and storage backends',
    hint: 'Managed SFTP, FTPS, FTP, AS2 directly to S3 or EFS.',
    back: 'Fully managed endpoints for <strong>SFTP, FTPS, FTP, and AS2</strong> that transfer files directly into <strong>Amazon S3</strong> or <strong>Amazon EFS</strong>, integrating with Microsoft Active Directory, Okta/custom IdPs, or IAM for user authentication.',
    tags: ['AWS Transfer Family', 'SFTP', 'S3', 'EFS', 'Performance']
  },
  {
    id: 'aws-saa-fc-132',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon MemoryDB for Redis vs Amazon ElastiCache for Redis',
    hint: 'Primary transactional in-memory database with Multi-AZ log vs cache layer.',
    back: '<strong>MemoryDB</strong>: primary durable in-memory database with an immutable Multi-AZ write-ahead transaction log (RPO = 0, microsecond reads, ms writes). <strong>ElastiCache</strong>: in-memory cache layer with asynchronous replication (risk of data loss on primary failure).',
    tags: ['MemoryDB', 'ElastiCache', 'Redis', 'Performance', 'Durability']
  },
  {
    id: 'aws-saa-fc-133',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Lambda@Edge Dynamic Origin Selection (Origin Request Event)',
    hint: 'Modifying request.origin.custom.domainName at edge.',
    back: 'Triggered on <strong>Origin Request</strong> events, Lambda@Edge can inspect request headers/location and dynamically change the destination origin server (<code>request.origin.custom.domainName</code>) to route requests to different regional backends.',
    tags: ['Lambda@Edge', 'CloudFront', 'Dynamic Routing', 'Performance']
  },
  {
    id: 'aws-saa-fc-134',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Kinesis Data Streams: Shard Split vs Shard Merge',
    hint: 'Increasing capacity for hot keys vs reducing cost for cold shards.',
    back: '• <strong>Shard Split</strong>: divides 1 shard into 2 child shards to increase write throughput (1 MB/s → 2 MB/s) for hot hash key ranges.<br>• <strong>Shard Merge</strong>: combines 2 under-utilized shards into 1 to decrease stream costs.',
    tags: ['Kinesis', 'Shards', 'Resharding', 'Performance']
  },
  {
    id: 'aws-saa-fc-135',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon EventBridge Pipes — four core pipeline stages',
    hint: 'Source -> Filter -> Enrichment -> Target without glue code.',
    back: '1. <strong>Source</strong>: DynamoDB Streams, Kinesis, SQS, MSK, Kafka.<br>2. <strong>Filter</strong>: JSON event pattern filter.<br>3. <strong>Enrichment</strong>: Lambda, Step Functions, API Destinations.<br>4. <strong>Target</strong>: SQS, SNS, Kinesis, Step Functions, EventBridge bus.',
    tags: ['EventBridge Pipes', 'Serverless', 'Integration', 'Decoupling']
  },
  {
    id: 'aws-saa-fc-136',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Object Lock: Compliance Mode vs Legal Hold',
    hint: 'Fixed retention period cannot be bypassed vs indefinite manual flag.',
    back: '• <strong>Compliance Mode</strong>: strict WORM; object cannot be deleted or overwritten by anyone (including root) until the retention period expires.<br>• <strong>Legal Hold</strong>: indefinite hold placed on an object version with no expiration date, removed manually.',
    tags: ['S3', 'Object Lock', 'WORM', 'Compliance', 'Security']
  },
  {
    id: 'aws-saa-fc-137',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS PrivateLink (VPC Endpoint Services) — benefits over VPC Peering',
    hint: 'No CIDR overlap issues, unidirectional service exposure behind NLB.',
    back: 'PrivateLink exposes a service hosted behind an NLB to consumer VPCs via private ENIs. Unlike VPC peering, PrivateLink <strong>supports overlapping IP CIDR blocks</strong>, requires no route table updates, and exposes only the specific service port rather than full network connectivity.',
    tags: ['PrivateLink', 'VPC Endpoint Service', 'NLB', 'Security', 'Networking']
  },
  {
    id: 'aws-saa-fc-138',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS KMS Envelope Encryption: GenerateDataKey workflow',
    hint: 'Plaintext key encrypts data locally; encrypted key stored with ciphertext.',
    back: '1. App calls <code>kms:GenerateDataKey</code> returning Plaintext & Ciphertext Data Key.<br>2. App encrypts file locally with Plaintext key.<br>3. Plaintext key is erased from memory.<br>4. Encrypted data key is stored alongside the ciphertext file.',
    tags: ['KMS', 'Envelope Encryption', 'GenerateDataKey', 'Security']
  },
  {
    id: 'aws-saa-fc-139',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS CloudTrail Lake — SQL audit query data store',
    hint: 'Aggregated immutable multi-account audit log store with ANSI SQL.',
    back: 'CloudTrail Lake provides an immutable data store that aggregates and retains management and data events for <strong>up to 10 years</strong> across AWS Organizations, allowing security teams to run direct ANSI SQL queries without managing Athena or S3 pipelines.',
    tags: ['CloudTrail Lake', 'Audit', 'Security', 'SQL']
  },
  {
    id: 'aws-saa-fc-140',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS WAF Geo Match Statements — how do they work?',
    hint: 'Matching request IP against 2-letter ISO country codes.',
    back: 'Inspects client IP addresses against a managed GeoIP database and matches on <strong>two-letter ISO country codes</strong> (e.g. US, CA, GB). Can be configured to allow or block traffic originating from specific countries at CloudFront, ALB, or API Gateway.',
    tags: ['AWS WAF', 'Geo Match', 'Security', 'ALB']
  },
  {
    id: 'aws-saa-fc-141',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'S3 Standard vs S3 Glacier Deep Archive — cost comparison',
    hint: '$0.023/GB vs $0.00099/GB (23x cheaper).',
    back: '<strong>S3 Standard</strong> costs ~$0.023/GB/month (zero retrieval fees, ms latency). <strong>S3 Glacier Deep Archive</strong> costs ~$0.00099/GB/month (~$1/TB/month, ~23x cheaper), ideal for rare compliance retrievals within 12–48 hours.',
    tags: ['S3', 'Glacier Deep Archive', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-142',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon DynamoDB Time to Live (TTL) — capacity cost impact',
    hint: 'Zero WCU/RCU consumed for automatic expiration deletions.',
    back: 'DynamoDB TTL deletes expired items automatically within 48 hours based on an epoch timestamp attribute. <strong>TTL deletions consume zero read capacity units (RCU) and zero write capacity units (WCU)</strong>, making cleanup 100% free.',
    tags: ['DynamoDB', 'TTL', 'Cost Optimization', 'Serverless']
  },
  {
    id: 'aws-saa-fc-143',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Transit Gateway Inter-Region Peering — cost and architecture optimization',
    hint: 'Consolidating cross-region VPC connectivity over encrypted AWS backbone.',
    back: 'Interconnects regional Transit Gateways across AWS regions over the AWS global network backbone. Eliminates complex VPC peering meshes and allows sharing centralized NAT and inspection VPCs, optimizing routing and data transfer management.',
    tags: ['Transit Gateway', 'TGW Peering', 'Networking', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-144',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Batch on Fargate Spot — cost savings and use case',
    hint: 'Serverless containerized batch processing with up to 70% discount.',
    back: 'Runs batch container jobs serverlessly without managing EC2 instances, leveraging <strong>Fargate Spot</strong> for up to <strong>70% discount</strong> compared to standard Fargate for fault-tolerant, restartable container simulations and ETL tasks.',
    tags: ['AWS Batch', 'Fargate Spot', 'Containers', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-145',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Why is the CloudWatch Agent required to monitor EC2 Memory Utilization?',
    hint: 'Hypervisor metrics do not have access to OS-level RAM.',
    back: 'Default and Detailed EC2 monitoring only inspects the hypervisor (CPU, disk I/O, network). Memory (RAM) and disk space are guest OS metrics; capturing <code>mem_used_percent</code> requires installing the <strong>unified Amazon CloudWatch Agent</strong>.',
    tags: ['CloudWatch Agent', 'Memory', 'EC2', 'Rightsizing']
  },
  {
    id: 'aws-saa-fc-146',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Step Functions Distributed Map — high-concurrency data processing',
    hint: 'Up to 10,000 concurrent child executions over S3 datasets.',
    back: 'Launches up to <strong>10,000 concurrent child workflow executions</strong> to process massive S3 datasets (millions of objects, CSV/JSON/Parquet files). Includes built-in error isolation, batching, and per-item retry policies.',
    tags: ['Step Functions', 'Distributed Map', 'Serverless', 'Resilience']
  },
  {
    id: 'aws-saa-fc-147',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon SNS Mobile Push Notifications — supported platform endpoints',
    hint: 'Direct mobile push to APNs, FCM, ADM, WNS.',
    back: 'SNS supports direct high-throughput mobile push notifications to: <strong>Apple Push Notification service (APNs)</strong>, <strong>Firebase Cloud Messaging (FCM for Android)</strong>, <strong>Amazon Device Messaging (ADM)</strong>, and <strong>Windows Push Notification Services (WNS)</strong>.',
    tags: ['SNS', 'Mobile Push', 'APNs', 'FCM', 'Performance']
  },
  {
    id: 'aws-saa-fc-148',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Automating Security Remediation with AWS Config and SSM Automation',
    hint: 'Config rule breach triggers Systems Manager runbook automatically.',
    back: 'When an AWS Config rule detects a non-compliant resource (e.g. unencrypted S3 bucket, open port 22), it automatically invokes an <strong>AWS Systems Manager (SSM) Automation document</strong> to remediate the resource immediately.',
    tags: ['AWS Config', 'SSM Automation', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-149',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon CloudFront Price Classes: Price Class 100 vs 200 vs All',
    hint: 'Selecting geographic edge POP tiers to reduce CDN costs.',
    back: '• <strong>Price Class 100</strong>: NA, Europe, Israel (cheapest).<br>• <strong>Price Class 200</strong>: Class 100 + Asia, Africa, Middle East.<br>• <strong>Price Class All</strong>: all worldwide edge locations including Australia & South America.',
    tags: ['CloudFront', 'Price Class', 'Cost Optimization', 'CDN']
  },
  {
    id: 'aws-saa-fc-150',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon ECS IAM Task Role vs Task Execution Role',
    hint: 'Permissions for application code vs permissions for ECS container agent.',
    back: '• <strong>Task Role</strong>: permissions for application code running inside the container (e.g. access to S3, DynamoDB, Secrets Manager).<br>• <strong>Task Execution Role</strong>: permissions for ECS container agent (pull images from ECR, send logs to CloudWatch).',
    tags: ['ECS', 'IAM Task Role', 'Task Execution Role', 'Security', 'Containers']
  }
];

export default AWS_SAA_FLASHCARDS_6;
