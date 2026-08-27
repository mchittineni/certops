export const AWS_SAA_FLASHCARDS_4 = [
  {
    id: 'aws-saa-fc-76',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Application Migration Service (MGN) — primary use case',
    hint: 'Automated lift-and-shift block-level server migration.',
    back: 'AWS MGN is the primary AWS tool for <strong>lift-and-shift server migrations</strong>. It performs non-disruptive, continuous block-level data replication from physical, virtual (VMware/Hyper-V), or cloud servers to AWS staging areas with minimal cutover downtime.',
    tags: ['AWS MGN', 'Migration', 'Resilience', 'EC2']
  },
  {
    id: 'aws-saa-fc-77',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Application Migration Service (MGN) vs Database Migration Service (DMS)',
    hint: 'Server lift-and-shift vs database engine migration.',
    back: '<strong>AWS MGN</strong>: continuous block-level replication of physical/virtual OS servers directly to Amazon EC2.<br><strong>AWS DMS</strong>: homogenous/heterogenous live database replication and schema conversion (with SCT).',
    tags: ['AWS MGN', 'AWS DMS', 'Migration', 'Resilience']
  },
  {
    id: 'aws-saa-fc-78',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Aurora Global Database: Managed Planned Failover vs Unplanned Failover',
    hint: 'Scheduled drill with zero data loss vs emergency outage promotion.',
    back: '<strong>Managed Planned Failover</strong>: synchronizes secondary cluster with primary before switching roles, ensuring <strong>zero data loss (RPO=0)</strong> in minutes.<br><strong>Unplanned Failover</strong>: detaches secondary cluster in disaster recovery with potential data loss from replication lag.',
    tags: ['Aurora Global Database', 'Disaster Recovery', 'RPO/RTO', 'Resilience']
  },
  {
    id: 'aws-saa-fc-79',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon S3 Replication Time Control (S3 RTC) — what SLA does it guarantee?',
    hint: '15-minute replication guarantee with CloudWatch metrics.',
    back: 'S3 RTC provides a <strong>99.9% SLA</strong> guaranteeing that 99.99% of new objects are replicated to the destination bucket within <strong>15 minutes</strong> of upload, backed by CloudWatch metrics for replication latency and pending operations.',
    tags: ['S3', 'S3 RTC', 'Replication', 'SLA', 'Disaster Recovery']
  },
  {
    id: 'aws-saa-fc-80',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon EFS Replication — RPO and operational characteristics',
    hint: 'Native cross-Region and same-Region continuous file replication.',
    back: 'Provides native, automated replication of file systems within the same or across AWS Regions, providing an <strong>RPO under 15 minutes</strong> with zero custom scripts or DataSync scheduling.',
    tags: ['EFS', 'Replication', 'Disaster Recovery', 'Storage']
  },
  {
    id: 'aws-saa-fc-81',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SQS FIFO MessageGroupId vs MessageDeduplicationId',
    hint: 'Sequential partition grouping vs deduplication window.',
    back: '<strong>MessageGroupId</strong>: tag specifying which group a message belongs to; messages in the same group are processed in strict sequence, while different groups process concurrently.<br><strong>MessageDeduplicationId</strong>: token used for 5-minute deduplication window.',
    tags: ['SQS', 'FIFO', 'MessageGroupId', 'Decoupling']
  },
  {
    id: 'aws-saa-fc-82',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Disaster Recovery Strategies: Warm Standby vs Pilot Light vs Multi-Site',
    hint: 'Scaled-down live copy vs scaled-to-zero compute vs full multi-region active/active.',
    back: '• <strong>Pilot Light</strong>: core data replicated live, compute stopped / scaled to 0 (RTO ~ tens of mins).<br>• <strong>Warm Standby</strong>: scaled-down minimal live system running 24/7 (RTO < 10 mins).<br>• <strong>Multi-Site Active/Active</strong>: full capacity live in both regions (RTO ~ 0).',
    tags: ['Disaster Recovery', 'Warm Standby', 'Pilot Light', 'Architecture']
  },
  {
    id: 'aws-saa-fc-83',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'EC2 Enhanced Networking: ENA vs VF (Virtual Function)',
    hint: 'Elastic Network Adapter up to 100 Gbps.',
    back: 'Enhanced Networking uses SR-IOV to provide high throughput and low jitter. <strong>ENA (Elastic Network Adapter)</strong> delivers up to 100 Gbps on modern instances. <strong>Intel 82599 Virtual Function (VF)</strong> is legacy on older instance families.',
    tags: ['EC2', 'Enhanced Networking', 'ENA', 'Performance']
  },
  {
    id: 'aws-saa-fc-84',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Kinesis Data Firehose — key streaming destinations and transformations',
    hint: 'Serverless streaming delivery to S3, Redshift, OpenSearch, Splunk.',
    back: 'Fully managed serverless streaming ETL service that buffers, converts to columnar Parquet/ORC, transforms via Lambda, and delivers data to <strong>Amazon S3, Amazon Redshift, Amazon OpenSearch, Snowflake, HTTP endpoints, and Splunk</strong>.',
    tags: ['Kinesis Data Firehose', 'Streaming', 'ETL', 'Data Lake']
  },
  {
    id: 'aws-saa-fc-85',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Global Accelerator vs Amazon CloudFront — when to choose Global Accelerator',
    hint: 'Non-HTTP (TCP/UDP), static Anycast IPs, and uncacheable routing.',
    back: 'Choose <strong>AWS Global Accelerator</strong> for: non-HTTP/HTTPS traffic (UDP gaming, VoIP, IoT), static Anycast IP requirements for firewall allowlisting, and fast deterministic failover across regional ALBs/NLBs. Choose <strong>CloudFront</strong> for HTTP content caching at edge POPs.',
    tags: ['Global Accelerator', 'CloudFront', 'Networking', 'Performance']
  },
  {
    id: 'aws-saa-fc-86',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon RDS Proxy — what core problem does it solve for serverless workloads?',
    hint: 'Connection pooling to prevent database exhaustion from Lambda bursts.',
    back: 'RDS Proxy maintains a pool of established database connections and multiplexes thousands of ephemeral Lambda function connections, preventing database memory exhaustion and reducing connection latency during serverless bursts.',
    tags: ['RDS Proxy', 'Lambda', 'Databases', 'Serverless']
  },
  {
    id: 'aws-saa-fc-87',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Elastic Fabric Adapter (EFA) — primary use case and architecture',
    hint: 'OS-bypass network interface for MPI and machine learning clusters.',
    back: 'An EFA is a custom network interface with <strong>OS-bypass capabilities</strong>, allowing Linux applications to communicate directly with hardware for ultra-low latency Message Passing Interface (MPI) and NCCL in HPC and distributed deep learning.',
    tags: ['EFA', 'HPC', 'MPI', 'Performance']
  },
  {
    id: 'aws-saa-fc-88',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Redshift Spectrum — how does it query S3 data lakes?',
    hint: 'Querying external S3 tables defined in Glue Catalog without loading.',
    back: 'Redshift Spectrum enables running SQL queries directly on exabytes of unstructured/semi-structured data in Amazon S3 by referencing external tables in the <strong>AWS Glue Data Catalog</strong> without consuming local cluster storage.',
    tags: ['Redshift Spectrum', 'S3', 'Data Lake', 'Analytics']
  },
  {
    id: 'aws-saa-fc-89',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Block Public Access — four key protection settings',
    hint: 'ACLs and policies at bucket and account levels.',
    back: '1. Block public ACLs<br>2. Ignore public ACLs<br>3. Block public bucket policies<br>4. Restrict public bucket policies. Can be enabled at account, organization, bucket, or access point levels.',
    tags: ['S3', 'Block Public Access', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-90',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Security Hub — core capabilities and standard benchmarks',
    hint: 'Centralized security findings aggregated in ASFF format.',
    back: 'Aggregates, formats, and prioritizes findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, and Firewall Manager into AWS Security Finding Format (ASFF), evaluating against <strong>CIS AWS Foundations, PCI DSS, and AWS Best Practices</strong>.',
    tags: ['Security Hub', 'CSPM', 'Compliance', 'Security']
  },
  {
    id: 'aws-saa-fc-91',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Attribute-Based Access Control (ABAC) in AWS IAM — how does it work?',
    hint: 'Matching principal tags to resource tags in IAM policy conditions.',
    back: 'ABAC defines IAM policies with conditions comparing <code>aws:PrincipalTag/TagKey</code> to <code>aws:ResourceTag/TagKey</code>. Permissions scale automatically as resources and identities are created with matching tags, removing policy update bottlenecks.',
    tags: ['IAM', 'ABAC', 'Security', 'Governance']
  },
  {
    id: 'aws-saa-fc-92',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Config Rules and Automated Remediation',
    hint: 'Continuous compliance recording with SSM Automation execution.',
    back: 'AWS Config records configuration changes and evaluates them against compliance rules. When non-compliant resources are detected, it triggers automated remediation via <strong>AWS Systems Manager (SSM) Automation documents</strong>.',
    tags: ['AWS Config', 'SSM', 'Compliance', 'Governance']
  },
  {
    id: 'aws-saa-fc-93',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS WAF Rate-Based Rules — evaluation period and actions',
    hint: 'Requests per 5-minute sliding window.',
    back: 'Tracks request counts from individual IP addresses over a <strong>5-minute sliding window</strong>. If an IP exceeds the configured limit (e.g. 100 requests / 5 mins), WAF applies Block, CAPTCHA, or Count actions automatically until the rate subsides.',
    tags: ['AWS WAF', 'Rate Limiting', 'Security', 'ALB']
  },
  {
    id: 'aws-saa-fc-94',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'VPC Gateway Endpoint Policy for S3 Data Exfiltration Prevention',
    hint: 'Restricting outbound S3 access to specific bucket ARNs.',
    back: 'Attach an <strong>Endpoint Policy</strong> directly to the S3 Gateway VPC Endpoint specifying <code>Resource: "arn:aws:s3:::corporate-bucket/*"</code>. Any outbound call from the VPC to unauthorized external or personal S3 buckets is immediately blocked.',
    tags: ['VPC Endpoint Policy', 'S3', 'Data Exfiltration', 'Security']
  },
  {
    id: 'aws-saa-fc-95',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'S3 Incomplete Multipart Upload Lifecycle Rule (AbortIncompleteMultipartUpload)',
    hint: 'Automated cleanup of abandoned upload parts.',
    back: 'Configuring an S3 Lifecycle rule with <strong>AbortIncompleteMultipartUpload</strong> deletes abandoned partial object chunks after N days (e.g. 7 days), preventing hidden, accumulating storage fees for failed uploads.',
    tags: ['S3', 'Lifecycle', 'Multipart Upload', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-96',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'EC2 Spot Fleet Allocation Strategies: capacity-optimized vs lowest-price',
    hint: 'Minimizing interruption probability vs absolute lowest price.',
    back: '• <strong>capacity-optimized</strong>: launches into Spot pools with the highest available capacity, minimizing interruption rate (best for big data/ML).<br>• <strong>lowest-price</strong>: launches into the cheapest pool (higher interruption risk).<br>• <strong>diversified</strong>: distributes evenly across pools.',
    tags: ['EC2', 'Spot Fleet', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-97',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Reducing Amazon CloudWatch Costs: Logs & Custom Metrics',
    hint: 'Retention periods, S3 tiering, and dimension cardinality aggregation.',
    back: '1. Set <strong>Log Group retention policies</strong> (expire after 30/90 days or export to S3 Glacier).<br>2. Avoid high-cardinality custom metric dimensions (which multiply billed custom metrics).<br>3. Use metric math and aggregation before publishing.',
    tags: ['CloudWatch', 'Logs', 'Metrics', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'aws-saa-fc-98',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Serverless vs Provisioned Compute Cost Tipping Point',
    hint: 'Sporadic bursty execution vs continuous 24/7 baseline load.',
    back: '<strong>AWS Lambda / API Gateway</strong> is dramatically cheaper for sporadic, bursty, or low-frequency APIs (pay-per-millisecond, $0 when idle). <strong>EC2 / ECS Fargate</strong> becomes more cost-effective when traffic is sustained and continuous 24/7 at high utilization.',
    tags: ['Serverless', 'Lambda', 'EC2', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-99',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Cost Allocation Tags — User-Defined vs AWS-Generated',
    hint: 'Activating tags in Billing console for Cost Explorer breakdown.',
    back: '• <strong>AWS-Generated</strong>: prefixed with <code>aws:</code> (e.g. <code>aws:createdBy</code>).<br>• <strong>User-Defined</strong>: custom tags (e.g. <code>Environment</code>, <code>CostCenter</code>). Must be explicitly <strong>activated in Billing Console</strong> before appearing in Cost Explorer / CUR.',
    tags: ['Cost Allocation Tags', 'FinOps', 'Cost Explorer']
  },
  {
    id: 'aws-saa-fc-100',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Aurora Global Database vs Multi-Region RDS Read Replicas — replication architecture',
    hint: 'Physical storage engine replication vs logical binlog replication.',
    back: '<strong>Aurora Global Database</strong> uses dedicated physical storage engine replication across regions (< 1s lag, RPO < 1s, zero database CPU impact). <strong>RDS Read Replicas</strong> use logical database engine replication, creating significant replication lag during high write loads.',
    tags: ['Aurora', 'RDS', 'Replication', 'Disaster Recovery']
  }
];

export default AWS_SAA_FLASHCARDS_4;
