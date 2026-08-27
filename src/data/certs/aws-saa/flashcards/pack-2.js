export const AWS_SAA_FLASHCARDS_2 = [
  {
    id: 'aws-saa-fc-26',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Transit Gateway vs. VPC Peering — when do you choose Transit Gateway?',
    hint: 'Hub-and-spoke topology vs point-to-point mesh.',
    back: '<strong>VPC Peering</strong> is point-to-point, non-transitive, has no hourly cost, and is best for connecting a few VPCs (1:1). <strong>Transit Gateway (TGW)</strong> acts as a cloud router in a hub-and-spoke model connecting thousands of VPCs and on-premises networks, supports transitive routing, multicast, and central route tables, but incurs an hourly attachment fee and data processing charge.',
    tags: ['Transit Gateway', 'VPC Peering', 'Networking', 'Security']
  },
  {
    id: 'aws-saa-fc-27',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Direct Connect (DX) vs. AWS Site-to-Site VPN',
    hint: 'Dedicated physical circuit vs IPsec tunnel over public internet.',
    back: '<strong>Site-to-Site VPN</strong> sets up in minutes over the public internet, encrypts traffic with IPsec, but bandwidth is limited to 1.25 Gbps per tunnel and latency depends on the internet. <strong>Direct Connect</strong> provides a dedicated, private physical fiber connection (1 Gbps to 100 Gbps) with consistent low latency and lower egress rates, but takes weeks to provision and is unencrypted by default (can combine with MACsec or VPN on top).',
    tags: ['Direct Connect', 'VPN', 'Hybrid Cloud', 'Networking']
  },
  {
    id: 'aws-saa-fc-28',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SQS Standard Queue vs. SQS FIFO Queue',
    hint: 'Throughput vs ordering & deduplication guarantee.',
    back: '<strong>SQS Standard</strong> offers nearly unlimited throughput, at-least-once delivery, and best-effort ordering (occasional duplicates and out-of-order deliveries). <strong>SQS FIFO</strong> guarantees strictly once processing and exact first-in-first-out ordering per message group ID, but caps standard throughput at 300 msg/s (3,000 msg/s with batching) or higher with high-throughput mode.',
    tags: ['SQS', 'FIFO', 'Decoupling', 'Resilience']
  },
  {
    id: 'aws-saa-fc-29',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Object Lock: Governance Mode vs. Compliance Mode',
    hint: 'Can root or an admin bypass the retention lock?',
    back: 'In <strong>Governance Mode</strong>, protected object versions cannot be overwritten or deleted during the retention period unless a user possesses the special <code>s3:BypassGovernanceRetention</code> permission. In <strong>Compliance Mode</strong>, NO user — including the AWS account root user — can overwrite or delete the object version or shorten the retention period until it expires (strict WORM compliance).',
    tags: ['S3', 'Object Lock', 'WORM', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-30',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS KMS: AWS Managed Key vs. Customer Managed Key (CMK)',
    hint: 'Who controls the key policy and rotation schedule?',
    back: '<strong>AWS Managed Keys</strong> (e.g. <code>aws/s3</code>) are created and managed by AWS for specific services; they are free to store, auto-rotated every year, but you cannot edit their key policies or audit access independently. <strong>Customer Managed Keys (CMKs)</strong> cost $1/month, give full control over key policies, IAM access, cryptographic grants, manual/annual auto-rotation, and deletion scheduling.',
    tags: ['KMS', 'Encryption', 'Security']
  },
  {
    id: 'aws-saa-fc-31',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Functions vs. Lambda@Edge — when to use which?',
    hint: 'Sub-millisecond lightweight manipulation vs complex full compute.',
    back: '<strong>CloudFront Functions</strong> run lightweight JavaScript at 600+ edge locations in sub-milliseconds with ultra-low cost, ideal for simple header manipulation, URL rewrites/redirects, and token validation (no network access or request body access). <strong>Lambda@Edge</strong> runs Node.js or Python in regional edge caches, supports external HTTP requests, network access, request body parsing, and longer execution time (up to 30 seconds).',
    tags: ['CloudFront', 'Lambda@Edge', 'Serverless', 'Performance']
  },
  {
    id: 'aws-saa-fc-32',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Shield Standard vs. AWS Shield Advanced',
    hint: 'Automatic baseline protection vs 24/7 SRT team and DDoS cost protection.',
    back: '<strong>Shield Standard</strong> is automatically enabled for all AWS customers at no extra cost, defending against common Layer 3 and Layer 4 DDoS attacks (SYN floods, UDP reflection). <strong>Shield Advanced</strong> ($3,000/month) provides 24/7 access to the AWS Shield Response Team (SRT), real-time metrics, automated Layer 7 DDoS mitigation via WAF, and financial DDoS cost protection against scaling charges during attacks.',
    tags: ['AWS Shield', 'DDoS', 'Security']
  },
  {
    id: 'aws-saa-fc-33',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'DynamoDB Streams vs. Amazon Kinesis Data Streams',
    hint: 'Change data capture on a table vs general multi-tenant telemetry ingestion.',
    back: '<strong>DynamoDB Streams</strong> captures time-ordered item-level modifications (insert/modify/delete) on a DynamoDB table with 24-hour retention, 2 concurrent readers per shard, and native 1:1 integration with AWS Lambda. <strong>Kinesis Data Streams</strong> ingests arbitrary high-volume data streams from any source, retains data up to 365 days, and supports enhanced fan-out for multiple parallel consumer applications.',
    tags: ['DynamoDB', 'Kinesis', 'CDC', 'Streaming']
  },
  {
    id: 'aws-saa-fc-34',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Storage Gateway Types: S3 File Gateway vs Volume Gateway vs Tape Gateway',
    hint: 'NFS/SMB file sharing vs iSCSI block storage vs virtual tape library.',
    back: '<strong>S3 File Gateway</strong> exposes NFS/SMB shares backed directly by S3 objects with local caching. <strong>Volume Gateway</strong> exposes iSCSI block storage in Cached mode (hot data local, all data in S3) or Stored mode (all data local, asynchronous backup snapshots to S3). <strong>Tape Gateway</strong> replaces physical tape automation with a virtual tape library (VTL) backed by S3 Glacier and Deep Archive.',
    tags: ['Storage Gateway', 'Hybrid', 'Storage', 'Disaster Recovery']
  },
  {
    id: 'aws-saa-fc-35',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon Aurora Serverless v2 vs. Aurora Provisioned',
    hint: 'Instant granular auto-scaling vs static instance sizing.',
    back: '<strong>Aurora Serverless v2</strong> scales database capacity dynamically in fractions of a second in fine-grained increments of 0.5 ACUs (Aurora Capacity Units), ideal for spiky, variable, or development workloads without connection drops. <strong>Aurora Provisioned</strong> runs fixed database instance classes (e.g. <code>db.r6g.2xlarge</code>), which is more cost-effective for predictable, continuous 24/7 baseline production workloads.',
    tags: ['Aurora', 'Serverless', 'Databases', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-36',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Network Firewall vs. AWS WAF',
    hint: 'VPC layer 3–7 network perimeter vs layer 7 HTTP application inspection.',
    back: '<strong>AWS WAF</strong> inspects Layer 7 HTTP/HTTPS traffic attached to ALBs, API Gateways, CloudFront, or AppSync, blocking SQLi, XSS, and rate attacks. <strong>AWS Network Firewall</strong> is a stateful Layer 3–7 firewall deployed in VPCs that inspects all IP traffic (TCP, UDP, ICMP), performs outbound domain/URL filtering, custom Suricata IPS/IDS rules, and protects the entire VPC perimeter.',
    tags: ['AWS Network Firewall', 'AWS WAF', 'Security', 'Networking']
  },
  {
    id: 'aws-saa-fc-37',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Cross-Account S3 Access: S3 Bucket Policy vs. IAM Role Assumption',
    hint: 'Stay in your account identity vs assume a role in the target account.',
    back: 'With a <strong>Bucket Policy</strong>, the principal in Account A retains their original IAM identity and permissions while accessing the bucket in Account B directly (best for single-service access). With <strong>IAM Role Assumption</strong>, the user in Account A calls <code>sts:AssumeRole</code> to adopt a temporary role in Account B, giving them full target-account session context and access to multiple resources beyond S3.',
    tags: ['S3', 'IAM', 'Cross-Account', 'Security']
  },
  {
    id: 'aws-saa-fc-38',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Disaster Recovery Strategies: Rank by RPO/RTO and cost from lowest to highest.',
    hint: 'Backup & restore -> Pilot light -> Warm standby -> Multi-site active/active.',
    back: '1. <strong>Backup & Restore</strong>: highest RPO/RTO (hours/days), lowest cost.<br>2. <strong>Pilot Light</strong>: core data replicated, compute scaled to 0 until disaster.<br>3. <strong>Warm Standby</strong>: minimal scaled-down version running 24/7.<br>4. <strong>Multi-Site Active/Active</strong>: near-zero RPO/RTO (seconds/sub-second), highest cost.',
    tags: ['Disaster Recovery', 'RTO/RPO', 'Resilience', 'Architecture']
  },
  {
    id: 'aws-saa-fc-39',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon EBS Volume Types: gp3 vs io2 Block Express vs st1 vs sc1',
    hint: 'General SSD vs extreme IOPS SSD vs throughput HDD vs cold HDD.',
    back: '<strong>gp3</strong>: General purpose SSD, baseline 3,000 IOPS and 125 MB/s independent of size.<br><strong>io2 Block Express</strong>: Sub-millisecond latency, up to 256,000 IOPS and 99.999% durability for mission-critical databases.<br><strong>st1</strong>: Throughput-optimized HDD for sequential big data / data warehouses.<br><strong>sc1</strong>: Cold HDD, lowest cost per GB for infrequently accessed sequential workloads.',
    tags: ['EBS', 'Storage', 'Performance', 'Architecture']
  },
  {
    id: 'aws-saa-fc-40',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Compute Optimizer — what recommendations does it provide?',
    hint: 'Machine-learning rightsizing for four compute resources.',
    back: 'AWS Compute Optimizer uses machine learning on CloudWatch utilization metrics to recommend optimal rightsizing and purchasing for: <strong>Amazon EC2 instances</strong>, <strong>Amazon EBS volumes</strong>, <strong>AWS Lambda functions</strong>, and <strong>Amazon ECS services on AWS Fargate</strong>, identifying over-provisioned (wasteful) and under-provisioned (bottlenecked) resources.',
    tags: ['Compute Optimizer', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'aws-saa-fc-41',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Geoproximity Routing vs Geolocation Routing',
    hint: 'Traffic flow bias based on distance vs strict geographic boundary.',
    back: '<strong>Geolocation</strong> routes strictly based on client IP geographic location (country/continent/US state). <strong>Geoproximity</strong> routes based on geographic location of resources and users, and lets you apply <strong>bias</strong> (-99 to +99) to shift traffic boundaries dynamically.',
    tags: ['Route 53', 'Geoproximity', 'Geolocation', 'Resilience']
  },
  {
    id: 'aws-saa-fc-42',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Signed Cookies vs Signed URLs — when to use each?',
    hint: 'Access to multiple files vs single specific download link.',
    back: 'Use <strong>Signed Cookies</strong> when granting access to multiple private files (e.g. an entire course catalog) without changing application URLs. Use <strong>Signed URLs</strong> when providing individual download links for a single specific file or for clients that do not support cookies.',
    tags: ['CloudFront', 'Signed Cookies', 'Signed URLs', 'Security']
  },
  {
    id: 'aws-saa-fc-43',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS RAM (Resource Access Manager) — cross-account sharing capabilities',
    hint: 'Share subnets, Transit Gateways, and Route 53 rules without duplicating.',
    back: 'AWS RAM allows sharing centrally managed resources (<strong>Subnets, Transit Gateways, Route 53 Resolver rules, License Manager configurations</strong>) across accounts in AWS Organizations, eliminating resource duplication and cutting networking costs.',
    tags: ['AWS RAM', 'AWS Organizations', 'Security', 'Networking']
  },
  {
    id: 'aws-saa-fc-44',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'DynamoDB On-Demand vs Provisioned Capacity Mode — cost considerations',
    hint: 'Pay-per-request for unknown workloads vs predictable baseline with auto-scaling.',
    back: '<strong>On-Demand</strong>: pay purely per read/write request unit ($0 when idle), perfect for unpredictable or spiky workloads. <strong>Provisioned</strong>: pay per provisioned RCU/WCU hour, more cost-effective when utilization is steady and predictable (can use Auto Scaling and Reserved Capacity).',
    tags: ['DynamoDB', 'On-Demand', 'Provisioned', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-45',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon S3 Batch Replication — when is it required over standard CRR?',
    hint: 'Replicating existing historical objects created before CRR was enabled.',
    back: 'Standard S3 CRR/SRR only replicates objects created <em>after</em> the rule is enabled. <strong>S3 Batch Replication</strong> (powered by S3 Batch Operations) is used to replicate pre-existing historical objects, objects that previously failed replication, or replicated objects to another destination.',
    tags: ['S3', 'Batch Replication', 'Replication', 'Resilience']
  },
  {
    id: 'aws-saa-fc-46',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Step Functions: Standard Workflows vs Express Workflows',
    hint: 'Exactly-once long-running audit vs high-volume at-least-once sub-5 min.',
    back: '<strong>Standard Workflows</strong>: run up to 1 year, exactly-once execution, full visual execution history, priced per state transition (ideal for payment processing).<br><strong>Express Workflows</strong>: run up to 5 mins, at-least-once, up to 100,000+ executions/sec, priced by duration and memory (ideal for high-volume IoT/ingestion).',
    tags: ['Step Functions', 'Serverless', 'Workflows', 'Performance']
  },
  {
    id: 'aws-saa-fc-47',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS KMS Key Policies vs IAM Policies — why KMS key policies are mandatory',
    hint: 'Primary access control document for KMS keys.',
    back: 'A <strong>KMS Key Policy</strong> is mandatory and is the primary access control mechanism for a KMS key. IAM policies cannot grant access to a KMS key unless the KMS key policy itself explicitly enables IAM delegation (e.g. giving permission to <code>"Principal": {"AWS": "arn:aws:iam::account-id:root"}</code>).',
    tags: ['KMS', 'Key Policy', 'IAM', 'Security']
  },
  {
    id: 'aws-saa-fc-48',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Cost Anomaly Detection — how does it alert on unexpected spend?',
    hint: 'Machine-learning anomaly detection with automated root-cause analysis.',
    back: 'AWS Cost Anomaly Detection uses machine learning to continuously monitor cost and usage, identifying anomalous spend spikes, isolating the root cause (account, service, region), and alerting via email or SNS/Slack without manual threshold tuning.',
    tags: ['Cost Anomaly Detection', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-49',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon Route 53 Resolver (DNS) Endpoints: Inbound vs Outbound',
    hint: 'Hybrid on-premises to AWS DNS forwarding and vice versa.',
    back: '<strong>Inbound Resolver</strong>: allows on-premises DNS servers to resolve AWS Route 53 private hosted zones.<br><strong>Outbound Resolver</strong>: allows EC2 instances and VPC resources to forward queries to on-premises DNS servers for local corporate domains.',
    tags: ['Route 53 Resolver', 'Hybrid', 'DNS', 'Networking']
  },
  {
    id: 'aws-saa-fc-50',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Object Versioning — delete markers and object protection',
    hint: 'Accidental overwrite/delete recovery.',
    back: 'Versioning preserves all past versions of objects. Deleting an object creates a <strong>Delete Marker</strong> (the object can be restored by deleting the marker). Permanently deleting specific versions requires specifying the exact <code>versionId</code> or enabling <strong>MFA Delete</strong>.',
    tags: ['S3', 'Versioning', 'Delete Marker', 'Security']
  }
];

export default AWS_SAA_FLASHCARDS_2;
