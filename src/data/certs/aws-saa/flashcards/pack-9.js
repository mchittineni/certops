export const AWS_SAA_FLASHCARDS_9 = [
  {
    id: 'aws-saa-fc-201',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Control Tower — automated landing zone capabilities',
    hint: 'Account Factory, mandatory SCP guardrails, centralized logging, SSO.',
    back: 'Orchestrates the automated setup of secure, compliant multi-account environments. Provides <strong>Account Factory</strong> (vended accounts), preventative & detective guardrails (SCPs & AWS Config), centralized log archives, and IAM Identity Center SSO.',
    tags: ['Control Tower', 'Landing Zone', 'Governance', 'Security']
  },
  {
    id: 'aws-saa-fc-202',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Aurora Global Database Unplanned Failover procedure',
    hint: 'Detach secondary cluster from global database and promote to standalone.',
    back: 'During a regional disaster, failover is executed by <strong>detaching the secondary Aurora cluster</strong> from the Global Database and <strong>promoting it to a standalone read/write regional cluster</strong> (completing in under 1–2 mins with minimal data loss).',
    tags: ['Aurora', 'Global Database', 'Disaster Recovery', 'Promotion']
  },
  {
    id: 'aws-saa-fc-203',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SQS Delay Queues vs Visibility Timeout',
    hint: 'Delaying delivery on message post vs hiding message while worker processes.',
    back: '• <strong>Delay Queue</strong>: postpones initial message delivery for 0 to 15 minutes upon send (invisible to all consumers).<br>• <strong>Visibility Timeout</strong>: hides a message temporarily <em>after</em> a consumer pulls it off the queue.',
    tags: ['SQS', 'Delay Queue', 'Visibility Timeout', 'Decoupling']
  },
  {
    id: 'aws-saa-fc-204',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'OpenSearch Production High Availability Configuration',
    hint: '3 AZs, 3 Dedicated Master Nodes, 1 replica shard per primary.',
    back: 'Deploy across <strong>3 Availability Zones</strong> with <strong>3 Dedicated Master Nodes</strong> (preventing split-brain quorum failures) and configure at least <strong>1 replica shard</strong> per primary shard, ensuring zero data loss during an AZ outage.',
    tags: ['OpenSearch', 'Multi-AZ', 'Dedicated Master', 'Resilience']
  },
  {
    id: 'aws-saa-fc-205',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon RDS Multi-AZ DB Cluster (Two Readable Standbys)',
    hint: 'Sub-35 second failover across 3 AZs with readable standby instances.',
    back: 'Provisions 1 primary writer and <strong>2 readable standby instances across 3 AZs</strong> using semi-synchronous replication. Delivers automated failovers in <strong>under 35 seconds</strong> and serves read traffic via a cluster reader endpoint.',
    tags: ['RDS', 'Multi-AZ DB Cluster', 'High Availability', 'Resilience']
  },
  {
    id: 'aws-saa-fc-206',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Neptune — primary use cases and graph models',
    hint: 'Property Graph (Gremlin, openCypher) & RDF (SPARQL) for fraud detection.',
    back: 'Purpose-built graph database engine for querying billions of relationships with millisecond latency. Supports <strong>Property Graph (Gremlin, openCypher)</strong> and <strong>W3C RDF (SPARQL)</strong> for fraud graphs, knowledge graphs, and identity networks.',
    tags: ['Amazon Neptune', 'Graph Database', 'Fraud Detection', 'Performance']
  },
  {
    id: 'aws-saa-fc-207',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Kinesis Enhanced Fan-Out — throughput and delivery protocol',
    hint: 'Dedicated 2 MB/sec per shard per consumer via HTTP/2 streaming.',
    back: 'Provides <strong>dedicated 2 MB/sec read throughput per shard</strong> to each registered consumer application independently (up to 20 consumers per stream) using HTTP/2 push delivery, eliminating consumer read throughput contention.',
    tags: ['Kinesis', 'Enhanced Fan-Out', 'Streaming', 'Performance']
  },
  {
    id: 'aws-saa-fc-208',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon DocumentDB — architecture and scaling capabilities',
    hint: 'MongoDB API compatibility on decoupled cloud-native storage up to 128 TB.',
    back: 'Fully managed <strong>MongoDB-compatible document database</strong> built on decoupled distributed storage (6 copies across 3 AZs). Automatically scales storage up to 128 TB and supports up to 15 read replicas with millisecond latencies.',
    tags: ['DocumentDB', 'MongoDB', 'JSON', 'NoSQL', 'Performance']
  },
  {
    id: 'aws-saa-fc-209',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Route 53 Geoproximity Routing Bias Range and Tuning',
    hint: '-99 to +99 bias values in Route 53 Traffic Flow.',
    back: 'Routes traffic based on geographic distance. Applying a positive bias (up to <strong>+99</strong>) expands a region\'s geographic serving radius; applying a negative bias (down to <strong>-99</strong>) shrinks its radius dynamically.',
    tags: ['Route 53', 'Geoproximity', 'Traffic Flow', 'Performance']
  },
  {
    id: 'aws-saa-fc-210',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon File Cache — hybrid storage acceleration',
    hint: 'Sub-millisecond temporary caching for on-premises NFS, FSx, and S3.',
    back: 'A temporary high-speed cache on AWS that provides <strong>sub-millisecond latency and hundreds of GB/s throughput</strong> for workloads processing data stored across disparate storage (on-premises NFS, FSx, Amazon S3).',
    tags: ['Amazon File Cache', 'Hybrid', 'Storage', 'Performance']
  },
  {
    id: 'aws-saa-fc-211',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS CloudTrail Insights — what anomalies does it detect?',
    hint: 'Unusual spikes in write API volume and error rate anomalies.',
    back: 'Continuously analyzes CloudTrail management events to detect <strong>abnormal surges in write API call volume</strong> or <strong>sudden spikes in error codes</strong> (e.g. permission brute-forcing), emitting Insight events to EventBridge.',
    tags: ['CloudTrail Insights', 'Anomaly Detection', 'Security', 'Audit']
  },
  {
    id: 'aws-saa-fc-212',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon API Gateway Resource Policies — source VPC restrictions',
    hint: 'Restricting private REST API invocations via aws:sourceVpc condition.',
    back: 'Attach a Resource Policy to a Private REST API with <code>"Condition": {"StringEquals": {"aws:sourceVpc": "vpc-xxxx"}}</code>. This strictly restricts API execution to traffic originating from that specific VPC endpoint.',
    tags: ['API Gateway', 'Resource Policy', 'VPC Endpoint', 'Security']
  },
  {
    id: 'aws-saa-fc-213',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Mutual TLS (mTLS) on Application Load Balancer — trust store verification',
    hint: 'Validating client X.509 certificates against S3-hosted trust store.',
    back: 'ALB verifies client X.509 certificates directly during TLS handshake against an <strong>S3-hosted Trust Store</strong> (CA certificates and revocation lists), passing client certificate attributes to backend microservices via HTTP headers.',
    tags: ['ALB', 'mTLS', 'X.509', 'Security', 'Authentication']
  },
  {
    id: 'aws-saa-fc-214',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS KMS Grants — when to use them over Key Policies',
    hint: 'Programmatic temporary delegation of cryptographic permissions to IAM principals.',
    back: 'KMS Grants allow applications and AWS services to <strong>programmatically delegate temporary, fine-grained cryptographic permissions</strong> on a CMK to an IAM principal without altering the root KMS key policy.',
    tags: ['KMS', 'Grants', 'Cross-Account', 'Security', 'Encryption']
  },
  {
    id: 'aws-saa-fc-215',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS IAM Access Analyzer — mathematical automated reasoning',
    hint: 'Identifies resources shared with external accounts or the public internet.',
    back: 'Uses automated reasoning logic proofs to analyze resource policies on S3, KMS, SQS, IAM roles, and Secrets Manager, generating findings for any resource accessible to <strong>external accounts or the public internet</strong>.',
    tags: ['IAM Access Analyzer', 'Security', 'Compliance', 'Governance']
  },
  {
    id: 'aws-saa-fc-216',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon DynamoDB Write Capacity Unit (WCU) calculation rules',
    hint: '1 WCU = 1 write/sec up to 1 KB (round up to nearest 1 KB).',
    back: '1 WCU provides 1 write/second for items up to 1 KB. For larger items, calculate: <code>ceil(ItemSizeKB / 1 KB) * WritesPerSec</code>. (Example: 3.5 KB = 4 KB = 4 WCU per item * 10 writes/sec = 40 WCU).',
    tags: ['DynamoDB', 'WCU', 'Capacity Planning', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-217',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Graviton Processors — price-performance advantages',
    hint: 'ARM64 architecture providing up to 40% better price-performance at 20% lower cost.',
    back: 'Custom 64-bit ARM silicon built by AWS. Delivers up to <strong>40% better price-performance</strong> over comparable current-generation x86 (Intel/AMD) instances at a <strong>20% lower hourly cost</strong> for container and cloud workloads.',
    tags: ['Graviton', 'ARM64', 'Cost Optimization', 'EC2']
  },
  {
    id: 'aws-saa-fc-218',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'S3 Intelligent-Tiering: Archive Access & Deep Archive Access tiers',
    hint: 'Optional asynchronous deep cold tiers with zero retrieval fees.',
    back: '• <strong>Archive Access Tier</strong>: objects unaccessed for 90–730 days (Glacier Flexible rates, 3–5h retrieval).<br>• <strong>Deep Archive Access Tier</strong>: objects unaccessed for 180–730 days (Deep Archive rates, 12h retrieval, zero retrieval fee).',
    tags: ['S3 Intelligent-Tiering', 'Deep Archive', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-219',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon Redshift Serverless — billing and capacity unit',
    hint: 'Redshift Processing Units (RPUs), billed per second, $0 when idle.',
    back: 'Automatically scales data warehouse capacity in <strong>Redshift Processing Units (RPUs)</strong>, scaling up/down to match query concurrency and shutting down completely during idle periods, billing strictly for compute-seconds consumed.',
    tags: ['Redshift Serverless', 'Data Warehouse', 'Cost Optimization', 'Analytics']
  },
  {
    id: 'aws-saa-fc-220',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon EFS Elastic Throughput Mode — cost optimization benefits',
    hint: 'Pay-per-GB read/write for spiky workloads without provisioned throughput fees.',
    back: 'Automatically provides the exact throughput required by spiky workloads (up to 3 GiB/s read, 1 GiB/s write) with zero provisioning, billing strictly for the data read and written per GB, eliminating idle provisioned throughput costs.',
    tags: ['EFS', 'Elastic Throughput', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-221',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Transit Gateway Route Tables for Network Segmentation (VRFs)',
    hint: 'Isolating Prod and Dev VPC routing without firewalls.',
    back: 'Assign distinct Transit Gateway Route Tables to different VPC attachments (e.g. Production TGW route table vs Development TGW route table) to enforce <strong>complete network segmentation and isolation at the routing layer</strong>.',
    tags: ['Transit Gateway', 'Route Tables', 'Segmentation', 'Networking']
  },
  {
    id: 'aws-saa-fc-222',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon DynamoDB Accelerator (DAX) Production HA Cluster Sizing',
    hint: 'Minimum 3 nodes across 3 AZs (1 primary + 2 read replicas).',
    back: 'Deploy at least <strong>3 nodes across 3 Availability Zones</strong> (1 primary writer node and 2 read replicas). If the primary node fails, DAX automatically promotes a replica to primary with zero cache downtime.',
    tags: ['DynamoDB', 'DAX', 'High Availability', 'Caching', 'Performance']
  },
  {
    id: 'aws-saa-fc-223',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Verified Access — Zero Trust application access without VPN',
    hint: 'Evaluating IdP claims and device security posture per request.',
    back: 'Enables secure, VPN-less access to corporate applications on AWS using <strong>Zero Trust principles</strong>. Evaluates user identity claims (via OIDC/IdP) and device posture (CrowdStrike/Jamf) on every single request before allowing access.',
    tags: ['AWS Verified Access', 'Zero Trust', 'Security', 'VPN-less']
  },
  {
    id: 'aws-saa-fc-224',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Cross-Account Encrypted Amazon RDS Snapshot Sharing',
    hint: 'Share snapshot + grant KMS CMK decrypt permissions in key policy.',
    back: 'Encrypt the DB snapshot with a <strong>Customer Managed Key (CMK)</strong>, share the snapshot directly with the target account in the console, and grant the target account <code>kms:Decrypt</code> and <code>kms:CreateGrant</code> in the KMS key policy.',
    tags: ['RDS', 'Snapshot Sharing', 'Cross-Account', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-225',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'CloudFront Origin Groups and Automated Origin Failover',
    hint: 'Primary and secondary origins with 5xx status code failover criteria.',
    back: 'Configures a primary and secondary origin in a <strong>CloudFront Origin Group</strong>. If the primary origin returns specified HTTP errors (500, 502, 503, 504) or timeouts, CloudFront automatically retries against the secondary origin.',
    tags: ['CloudFront', 'Origin Groups', 'Origin Failover', 'Resilience']
  }
];

export default AWS_SAA_FLASHCARDS_9;
