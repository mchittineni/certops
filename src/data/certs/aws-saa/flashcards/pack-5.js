export const AWS_SAA_FLASHCARDS_5 = [
  {
    id: 'aws-saa-fc-101',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon Inspector — scanning coverage and integrations',
    hint: 'Automated vulnerability management for EC2 and ECR.',
    back: 'Continuously scans <strong>EC2 instances</strong> (for OS and application package CVEs) and <strong>Amazon ECR container images</strong> (on push and continuous monitoring), delivering prioritized findings in AWS Security Hub.',
    tags: ['Inspector', 'ECR', 'EC2', 'Security', 'Vulnerabilities']
  },
  {
    id: 'aws-saa-fc-102',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Backup — centralized backup management features',
    hint: 'Automated backup plans across EBS, RDS, DynamoDB, EFS, S3.',
    back: 'Centralized policy-based backup service supporting <strong>EBS, RDS, Aurora, DynamoDB, EFS, FSx, EC2, and S3</strong>. Automates scheduling, retention, lifecycle transitions to cold storage, and cross-account/cross-Region backup copies.',
    tags: ['AWS Backup', 'Disaster Recovery', 'Backup', 'Resilience']
  },
  {
    id: 'aws-saa-fc-103',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Backup Vault Lock — compliance vs governance lock',
    hint: 'WORM immutable protection against ransomware deletion.',
    back: 'AWS Backup Vault Lock enforces <strong>WORM (Write Once, Read Many)</strong> compliance. In Compliance mode, nobody — including AWS root — can delete backups or alter retention periods before expiry, providing absolute protection against ransomware or rogue deletion.',
    tags: ['AWS Backup', 'Vault Lock', 'Ransomware', 'Compliance', 'Security']
  },
  {
    id: 'aws-saa-fc-104',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SNS Subscription Filter Policies — how do they reduce consumer costs?',
    hint: 'Filtering message attributes before delivering to SQS queues.',
    back: 'SNS evaluates JSON filter policies on message attributes <em>before</em> sending to subscriptions. Downstream SQS queues and Lambda functions receive only relevant messages, eliminating compute spend on discarding messages.',
    tags: ['SNS', 'Message Filtering', 'Decoupling', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-105',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon Aurora Global Database replication latency and failover speed',
    hint: 'Storage layer physical replication: < 1s RPO, < 2 min RTO.',
    back: 'Aurora Global Database replicates data at the <strong>storage layer</strong> across regions with typical lag of <strong>under 1 second (RPO < 1s)</strong>, and allows promoting a secondary region cluster to full read/write in <strong>under 2 minutes (RTO < 2m)</strong> with zero impact on primary database performance.',
    tags: ['Aurora Global Database', 'Disaster Recovery', 'RPO/RTO', 'Resilience']
  },
  {
    id: 'aws-saa-fc-106',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'ElastiCache Redis Cluster Mode Enabled vs Disabled — architectural difference',
    hint: 'Sharding partitions across nodes vs single primary node.',
    back: '<strong>Cluster Mode Disabled</strong>: 1 primary node (all writes) + up to 5 read replicas (limited to single node RAM).<br><strong>Cluster Mode Enabled</strong>: shards data across up to 500 shards/nodes (supports petabytes of RAM, scales writes horizontally).',
    tags: ['ElastiCache', 'Redis', 'Cluster Mode', 'Performance']
  },
  {
    id: 'aws-saa-fc-107',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Cache Policy vs Origin Request Policy',
    hint: 'What is included in the cache key vs what is forwarded to the origin.',
    back: '• <strong>Cache Policy</strong>: defines which headers, cookies, and query strings are included in the <em>cache key</em> (determining cache hit/miss).<br>• <strong>Origin Request Policy</strong>: controls what headers/cookies/query strings are forwarded to origin <em>without</em> fragmenting the cache key.',
    tags: ['CloudFront', 'Cache Policy', 'Origin Request Policy', 'Performance']
  },
  {
    id: 'aws-saa-fc-108',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Step Functions: Standard vs Express Workflows comparison',
    hint: 'Pricing per state transition vs duration/memory, 1 year vs 5 min.',
    back: '• <strong>Standard</strong>: up to 1 year, exactly-once, visual debugger, priced per state transition (ideal for long-running workflows).<br>• <strong>Express</strong>: up to 5 mins, at-least-once, 100k+ executions/sec, priced by duration & memory (ideal for high-throughput streaming/APIs).',
    tags: ['Step Functions', 'Serverless', 'Workflows', 'Performance']
  },
  {
    id: 'aws-saa-fc-109',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon OpenSearch Service — best fit use cases',
    hint: 'Full-text search, log analytics, OpenSearch Dashboards / Kibana.',
    back: 'Fully managed search and analytics suite for <strong>real-time application monitoring, log analytics (ELK stack), full-text search with fuzzy matching</strong>, and interactive dashboard visualizations.',
    tags: ['OpenSearch', 'Full-Text Search', 'Log Analytics', 'Performance']
  },
  {
    id: 'aws-saa-fc-110',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Redshift Distribution Styles: KEY vs ALL vs EVEN vs AUTO',
    hint: 'Colocating join keys vs full copy vs round-robin.',
    back: '• <strong>KEY</strong>: colocates matching join keys on the same node slice (fast joins).<br>• <strong>ALL</strong>: copies entire table to every node (small dimension tables <3M rows).<br>• <strong>EVEN</strong>: round-robin distribution (tables with no clear join key).<br>• <strong>AUTO</strong>: Redshift chooses ALL then transitions to EVEN as table grows.',
    tags: ['Redshift', 'Distribution Styles', 'Data Warehouse', 'Performance']
  },
  {
    id: 'aws-saa-fc-111',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Aurora Global Database Reader Endpoints for Global Low-Latency Reads',
    hint: 'Local read endpoints across continents.',
    back: 'Secondary region clusters in an Aurora Global Database provide local <strong>Reader Endpoints</strong> that serve read queries with single-digit millisecond latency locally in Europe/Asia without making cross-ocean database requests.',
    tags: ['Aurora', 'Global Database', 'Read Scalability', 'Performance']
  },
  {
    id: 'aws-saa-fc-112',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS App Mesh — key capabilities for microservices',
    hint: 'Service mesh with Envoy proxy sidecars for mTLS and routing.',
    back: 'Provides application-level networking using <strong>Envoy sidecar proxies</strong> on ECS/EKS. Delivers end-to-end <strong>mutual TLS (mTLS) encryption</strong>, circuit breaking, traffic shifting, and distributed tracing across microservices with zero application code changes.',
    tags: ['App Mesh', 'mTLS', 'Microservices', 'Security']
  },
  {
    id: 'aws-saa-fc-113',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Secrets Manager: Interface VPC Endpoint and Private Subnet Rotation',
    hint: 'Rotating RDS credentials without internet access.',
    back: 'Configure a <strong>Secrets Manager Interface VPC Endpoint (PrivateLink)</strong> so instances query secrets privately. The rotation Lambda function must be placed inside the VPC subnets with security groups permitting access to both RDS and the Secrets Manager VPC endpoint.',
    tags: ['Secrets Manager', 'PrivateLink', 'RDS', 'Security']
  },
  {
    id: 'aws-saa-fc-114',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS IAM Identity Center (AWS SSO) — workforce identity federation',
    hint: 'SAML 2.0 and SCIM across multi-account AWS Organizations.',
    back: 'Centralized workforce portal connecting corporate identity providers (Okta, Azure AD, Ping) via <strong>SAML 2.0 and SCIM</strong>. Automatically provisions users, assigns permission sets, and provides single sign-on across all accounts in AWS Organizations.',
    tags: ['IAM Identity Center', 'SSO', 'SAML', 'Security']
  },
  {
    id: 'aws-saa-fc-115',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Network Firewall — domain name filtering vs Security Groups',
    hint: 'Filtering by FQDN at the VPC boundary.',
    back: 'AWS Network Firewall performs <strong>stateful Layer 7 domain filtering</strong> (e.g. allowing outbound HTTP/HTTPS strictly to <code>*.example.com</code>) and Suricata IPS/IDS rules. Security groups can only filter by Layer 4 IP CIDR ranges and port numbers.',
    tags: ['AWS Network Firewall', 'Domain Filtering', 'Security', 'VPC']
  },
  {
    id: 'aws-saa-fc-116',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Restricting S3 Bucket Access to a VPC Endpoint using aws:sourceVpce',
    hint: 'Explicit Deny with StringNotEquals condition.',
    back: 'In the S3 Bucket Policy, add a <strong>Deny</strong> statement with <code>"Condition": {"StringNotEquals": {"aws:sourceVpce": "vpce-xxxx"}}</code>. Requests originating outside that specific VPC endpoint are denied immediately.',
    tags: ['S3', 'Bucket Policy', 'VPC Endpoint', 'Security']
  },
  {
    id: 'aws-saa-fc-117',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'API Gateway Lambda Authorizers — Token-based vs Request-based',
    hint: 'Custom JWT bearer validation vs multi-parameter context evaluation.',
    back: '• <strong>Token-based</strong>: validates bearer tokens (e.g. <code>Authorization: Bearer xyz</code>).<br>• <strong>Request-based</strong>: evaluates combinations of headers, query strings, stage variables, and source IP. Both return an IAM policy document and custom context claims.',
    tags: ['API Gateway', 'Lambda Authorizer', 'JWT', 'Security']
  },
  {
    id: 'aws-saa-fc-118',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon S3 Glacier Deep Archive — cost and retrieval times',
    hint: 'Lowest cost cloud storage: ~$1 per TB/month, 12 to 48 hour retrieval.',
    back: 'Lowest cost storage class in AWS (<strong>$0.00099/GB/month</strong>, 180-day min). Offers <strong>Standard Retrieval (12 hours)</strong> and <strong>Bulk Retrieval (48 hours)</strong>, designed for compliance records accessed once every 1–2 years.',
    tags: ['S3 Glacier Deep Archive', 'Archiving', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-119',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Compute Optimizer — four supported resource types',
    hint: 'Machine learning rightsizing for compute.',
    back: 'Generates ML-driven rightsizing and cost-optimization recommendations for: <strong>1) Amazon EC2 instances, 2) Amazon EBS volumes, 3) AWS Lambda functions, and 4) Amazon ECS services on AWS Fargate</strong>.',
    tags: ['Compute Optimizer', 'FinOps', 'Rightsizing', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-120',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Budgets vs AWS Budgets Actions — key difference',
    hint: 'Notifications vs automated enforcement actions.',
    back: '<strong>AWS Budgets</strong> sends alerts (email/SNS) when actual or forecasted spend/usage exceeds thresholds. <strong>AWS Budgets Actions</strong> can automatically execute corrective actions (apply IAM policy, attach SCP, stop EC2/RDS instances via SSM) upon breach.',
    tags: ['AWS Budgets', 'Budgets Actions', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-121',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'S3 Lifecycle Transition Hierarchy — minimum storage duration per tier',
    hint: '30-day and 90-day minimums.',
    back: 'Standard (0 days) → Standard-IA / One Zone-IA (30 days minimum) → Glacier Instant Retrieval (90 days minimum) → Glacier Flexible (90 days minimum) → Glacier Deep Archive (180 days minimum).',
    tags: ['S3', 'Lifecycle', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-122',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon FSx for Lustre: Scratch vs. Persistent deployment types',
    hint: 'Temporary burst compute vs long-term replicated storage.',
    back: '• <strong>Scratch</strong>: un-replicated file system for temporary burst ML/HPC processing; cheapest price per GB/throughput.<br>• <strong>Persistent</strong>: data replicated within the AZ for longer-term workloads with high availability.',
    tags: ['FSx for Lustre', 'HPC', 'Machine Learning', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-123',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Elastic Disaster Recovery (AWS DRS) — primary use case and RPO/RTO',
    hint: 'Continuous server replication to AWS staging area with sub-second RPO.',
    back: 'Continuously replicates on-premises physical/virtual (VMware/Hyper-V) or cloud servers at the block level into a low-cost AWS staging subnet. Delivers <strong>sub-second RPO</strong> and automated drill recovery in <strong>minutes (RTO < 15m)</strong>.',
    tags: ['AWS DRS', 'Disaster Recovery', 'VMware', 'Resilience']
  },
  {
    id: 'aws-saa-fc-124',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'RDS Multi-AZ vs RDS Read Replicas — comparison summary',
    hint: 'Synchronous HA failover vs asynchronous horizontal read scale.',
    back: '• <strong>Multi-AZ</strong>: synchronous standby in another AZ, automatic DNS failover, zero read traffic served on standby.<br>• <strong>Read Replicas</strong>: asynchronous replication, independent endpoints, scales read query throughput.',
    tags: ['RDS', 'Multi-AZ', 'Read Replicas', 'Performance', 'Resilience']
  },
  {
    id: 'aws-saa-fc-125',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'How to encrypt an existing unencrypted Amazon EBS volume with KMS',
    hint: 'Snapshot -> Encrypted Snapshot Copy -> Create Encrypted Volume.',
    back: '1. Take a snapshot of the unencrypted EBS volume.<br>2. Copy the snapshot and select <strong>Encrypt this snapshot</strong> with the KMS CMK.<br>3. Create a new volume from the encrypted snapshot.<br>4. Attach the new volume to the EC2 instance.',
    tags: ['EBS', 'KMS', 'Encryption', 'Security']
  }
];

export default AWS_SAA_FLASHCARDS_5;
