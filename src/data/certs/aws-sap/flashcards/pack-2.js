export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-26',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does AWS Control Tower add on top of Organizations?',
    hint: 'An opinionated landing zone.',
    back: 'A <strong>managed landing zone</strong>: a prescribed OU structure, log archive and audit accounts, an <strong>Account Factory</strong> for provisioning, and <strong>controls</strong> (preventive via SCPs, detective via Config rules, proactive via CloudFormation Hooks). It <em>uses</em> Organizations rather than replacing it, and reports <strong>drift</strong> when someone changes the baseline by hand.',
    tags: ['Control Tower', 'Landing Zone', 'Governance']
  },
  {
    id: 'aws-sap-fc-27',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does a CloudTrail organization trail capture?',
    hint: 'Including the account you create it from.',
    back: 'Management events from the <strong>management account and every member account</strong>, with accounts added later <em>enrolled automatically</em>, delivered to one bucket the organization controls. Make it multi-Region. Data events (S3 object-level, Lambda invokes) are <strong>opt-in and billed separately</strong> — the usual gap in an audit story.',
    tags: ['CloudTrail', 'Organizations', 'Auditing']
  },
  {
    id: 'aws-sap-fc-28',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'AWS RAM — what does sharing a subnet actually give the consumer?',
    hint: 'No second VPC.',
    back: 'Consumer accounts <strong>launch resources into the owner\'s subnet</strong>, inheriting its route tables, NAT, and address plan. The owner keeps the VPC, route tables and gateways; the consumer manages only its own resources. This beats peering or Transit Gateway when the goal is <em>not duplicating a VPC</em>. Commonly shared: subnets, Transit Gateways, Resolver rules, License Manager, Aurora clusters.',
    tags: ['RAM', 'VPC Sharing', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-29',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'KMS key policy vs. grant vs. IAM policy',
    hint: 'One is programmatic and temporary.',
    back: 'The <strong>key policy</strong> is the root of trust — a KMS key is unusable unless its own policy allows access. <strong>IAM policies</strong> work only if the key policy delegates to the account. A <strong>grant</strong> is temporary, programmatic delegation of specific operations, created and <em>retired</em> by a service without editing the key policy — which is how AWS services get scoped, short-lived use of your key.',
    tags: ['KMS', 'Grants', 'Encryption']
  },
  {
    id: 'aws-sap-fc-30',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Centralised egress vs. an inspection VPC — what is each for?',
    hint: 'Cost versus traffic inspection.',
    back: '<strong>Centralised egress</strong> puts NAT gateways in one VPC behind a Transit Gateway so spokes share them — cutting NAT cost and consolidating public IPs. An <strong>inspection VPC</strong> routes east-west and north-south traffic through Network Firewall or a GWLB appliance fleet. They are often the same VPC, but the driver differs: <em>economics</em> versus <em>control</em>.',
    tags: ['Transit Gateway', 'Networking', 'Centralized Egress']
  },
  {
    id: 'aws-sap-fc-31',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How does consolidated billing change volume pricing?',
    hint: 'Aggregate first, then tier.',
    back: 'Usage across <strong>all member accounts is aggregated</strong> before volume tiers are applied, so six accounts each moving 20 TB are priced as 120 TB. The same pooling applies to <strong>Reserved Instance and Savings Plans discounts</strong>, which are shared across the organization by default — turn sharing off per account if a team must keep its own.',
    tags: ['Consolidated Billing', 'Cost Optimization', 'Organizations']
  },
  {
    id: 'aws-sap-fc-32',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Aurora cluster endpoints — writer, reader, custom, instance',
    hint: 'Four names, four jobs.',
    back: '<strong>Writer</strong> follows the primary through failover. <strong>Reader</strong> resolves to a different replica <em>per new connection</em> — not per query — so pooled clients must open several. <strong>Custom</strong> endpoints group chosen instances (e.g. a large reporting replica). <strong>Instance</strong> endpoints address one node directly, useful for diagnostics but brittle in application code.',
    tags: ['Aurora', 'Endpoints', 'Scaling']
  },
  {
    id: 'aws-sap-fc-33',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Multi-AZ instance vs. Multi-AZ DB cluster vs. read replica in RDS',
    hint: 'Three different promises.',
    back: '<strong>Multi-AZ instance</strong> — one synchronous standby, no read traffic, ~60–120s failover. <strong>Multi-AZ DB cluster</strong> — two <em>readable</em> standbys, semi-synchronous, failover typically under 35s. <strong>Read replica</strong> — asynchronous, own endpoint, for read scaling and cross-Region DR; it is not a failover target until manually promoted.',
    tags: ['RDS', 'High Availability', 'Read Replicas']
  },
  {
    id: 'aws-sap-fc-34',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'DynamoDB GSI vs. LSI',
    hint: 'One can be added later.',
    back: '<strong>GSI</strong> — different partition <em>and</em> sort key, added or dropped any time, own provisioned throughput, <strong>eventually consistent only</strong>, no size limit. <strong>LSI</strong> — same partition key with an alternative sort key, must be created <em>with the table</em>, shares the table\'s throughput, supports strongly consistent reads, and caps an item collection at 10 GB.',
    tags: ['DynamoDB', 'Indexes', 'Data Modeling']
  },
  {
    id: 'aws-sap-fc-35',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How long do Kinesis Data Streams records stay readable?',
    hint: 'A window, not a queue.',
    back: 'The <strong>retention period</strong>: 24 hours by default, extendable to 7 days at standard rates and up to <strong>365 days</strong> with long-term retention. Records are <em>not</em> deleted when a consumer reads them, which is what lets a new consumer replay history — the key difference from a queue.',
    tags: ['Kinesis', 'Streaming', 'Retention']
  },
  {
    id: 'aws-sap-fc-36',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does Fargate take away, and what does it hand you?',
    hint: 'The instance layer disappears.',
    back: 'Gone: patching, scaling and right-sizing a fleet, plus capacity providers and AMIs. Yours instead: <strong>declaring CPU and memory per task</strong>, because that is what gets provisioned and billed per second. Task IAM roles, awsvpc networking in private subnets and EFS volumes all still work. Idle capacity becomes <em>more</em> expensive to hold, not less.',
    tags: ['ECS', 'Fargate', 'Containers']
  },
  {
    id: 'aws-sap-fc-37',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Cluster vs. spread vs. partition placement groups',
    hint: 'Pack, separate, or bucket.',
    back: '<strong>Cluster</strong> — one AZ, instances packed on nearby hardware for lowest latency and highest throughput (HPC, with EFA). <strong>Spread</strong> — each instance on distinct hardware, max 7 per AZ, for small critical sets. <strong>Partition</strong> — logical partitions on separate racks, up to 7 per AZ, for large distributed stores like HDFS, Cassandra and Kafka.',
    tags: ['EC2', 'Placement Groups', 'HPC']
  },
  {
    id: 'aws-sap-fc-38',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Global Accelerator vs. CloudFront',
    hint: 'Anycast IPs versus a cache.',
    back: '<strong>Global Accelerator</strong> gives two <em>static anycast IPs</em>, carries TCP and UDP, does no caching, and shifts traffic across Regions on health — right for game servers, VoIP, and IP-allowlisted clients. <strong>CloudFront</strong> is an HTTP/HTTPS cache with edge compute (Functions, Lambda@Edge) and is right for content and web APIs.',
    tags: ['Global Accelerator', 'CloudFront', 'Networking']
  },
  {
    id: 'aws-sap-fc-39',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Aurora Backtrack vs. point-in-time restore vs. snapshot restore',
    hint: 'In place, or a new cluster?',
    back: '<strong>Backtrack</strong> rewinds an Aurora MySQL cluster <em>in place</em> within its window — minutes, same endpoint, no new cluster — ideal for a recent bad write. <strong>PITR</strong> and <strong>snapshot restore</strong> both create a <strong>new cluster</strong> that the application must be repointed at. Readers share the writer\'s volume, so failing over never escapes logical corruption.',
    tags: ['Aurora', 'Backtrack', 'Recovery']
  },
  {
    id: 'aws-sap-fc-40',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Which four DR patterns map to which RTO/RPO?',
    hint: 'Cost climbs with every tier.',
    back: '<strong>Backup and restore</strong> — hours, cheapest. <strong>Pilot light</strong> — tens of minutes; data replicating, core services off. <strong>Warm standby</strong> — minutes; a scaled-down but <em>running</em> copy. <strong>Multi-site active-active</strong> — near-zero RTO/RPO, highest cost and hardest consistency story. Pick from the business RTO/RPO, then prove it with a real failover test.',
    tags: ['Disaster Recovery', 'RTO', 'Resilience']
  },
  {
    id: 'aws-sap-fc-41',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does RDS Proxy fix?',
    hint: 'Serverless meets connection limits.',
    back: '<strong>Connection pooling and multiplexing</strong> in front of RDS/Aurora, so thousands of Lambda invocations do not exhaust database connections. It also <strong>shortens failover</strong> (holding client connections while the endpoint moves, cutting perceived downtime up to ~66%) and integrates with Secrets Manager and IAM authentication instead of embedded passwords.',
    tags: ['RDS Proxy', 'Lambda', 'Connections']
  },
  {
    id: 'aws-sap-fc-42',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'S3 Glacier Flexible Retrieval — the cost trap in a lifecycle rule',
    hint: 'Minimum billable duration.',
    back: 'A <strong>90-day minimum storage duration</strong>: an object deleted after 20 days is still billed as if stored for 90, so transitioning short-lived data early <em>increases</em> cost. Also watch the <strong>per-request transition charge</strong> and the fact that objects <strong>under 128 KB are not transitioned</strong>. Minimums: Standard-IA and One Zone-IA 30 days, Glacier IR 90, Deep Archive 180.',
    tags: ['S3', 'Lifecycle', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-43',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AWS Trusted Advisor report?',
    hint: 'Five pillars of standing checks.',
    back: 'Standing checks across <strong>cost optimisation, performance, security, fault tolerance and service limits</strong> — idle resources, missing redundancy, exposed access, quota headroom. Compare: the <em>Health Dashboard</em> reports AWS-side events; the <em>Well-Architected Tool</em> derives risks from answers a human gives; <em>Inspector</em> finds vulnerabilities and unintended exposure.',
    tags: ['Trusted Advisor', 'Cost Optimization', 'Operations']
  },
  {
    id: 'aws-sap-fc-44',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How much warning does a Spot interruption give?',
    hint: 'Two signals, different timing.',
    back: 'A <strong>two-minute interruption notice</strong> in instance metadata and as an EventBridge event. Earlier and weaker, the <strong>rebalance recommendation</strong> warns that risk has risen — useful for draining before the hard notice. Design for it: checkpoint, use capacity-optimized allocation, diversify instance types, and combine Spot with On-Demand in one ASG.',
    tags: ['EC2 Spot', 'Interruption', 'Resilience']
  },
  {
    id: 'aws-sap-fc-45',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does a Cost and Usage Report give you that Cost Explorer cannot?',
    hint: 'One row per usage record per hour.',
    back: 'Line-item granularity: <strong>hourly (or resource-level) rows naming the reservation or Savings Plan that covered each record</strong>, delivered to S3 and queryable with Athena. Cost Explorer deliberately aggregates, so it cannot be reconciled row by row. Use the CUR for chargeback, amortised-cost views and discount reconciliation.',
    tags: ['Cost and Usage Report', 'FinOps', 'Athena']
  },
  {
    id: 'aws-sap-fc-46',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What does a Migration Readiness Assessment produce?',
    hint: 'Organisational, not technical.',
    back: 'A <strong>scored view against the six CAF perspectives</strong> — business, people, governance, platform, security, operations — with the gaps and a prioritised plan to close them. It is about <em>readiness</em>, not design: sizing, target architectures and wave plans come later, and server inventory comes from Application Discovery Service.',
    tags: ['Migration Readiness', 'CAF', 'Planning']
  },
  {
    id: 'aws-sap-fc-47',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What should drive migration wave grouping?',
    hint: 'Follow the dependency map.',
    back: '<strong>Dependency boundaries</strong> — everything that talks to everything else moves together, or you leave a chatty link spanning the data centre and AWS and turn a cutover into a latency incident. Utilisation and tool "readiness" scores are inputs, not the rule. Sequence low-risk waves first to build the runbook, then accelerate.',
    tags: ['Migration Waves', 'Dependencies', 'Planning']
  },
  {
    id: 'aws-sap-fc-48',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'VM Import/Export vs. Application Migration Service',
    hint: 'Is the source still running?',
    back: '<strong>VM Import/Export</strong> ingests an offline image (OVA, VMDK, VHD) and produces an AMI — the only path when nothing can run on the source. <strong>MGN</strong> installs an agent on a <em>live</em> server and replicates disks block-level and continuously into a staging subnet, so cutover launches from data seconds behind the source.',
    tags: ['VM Import/Export', 'MGN', 'Migration']
  },
  {
    id: 'aws-sap-fc-49',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How does the strangler fig pattern retire a monolith?',
    hint: 'A routing layer does the work.',
    back: 'Put a <strong>routing layer</strong> (proxy, ALB rules, API Gateway, or Migration Hub Refactor Spaces) in front of the monolith and move <strong>one route at a time</strong> to a new service, proving each extraction under real traffic before deleting the old code path. Forking the monolith creates drifting copies; letting the monolith <em>call</em> the new services leaves it on the critical path forever.',
    tags: ['Modernization', 'Strangler Pattern', 'Microservices']
  },
  {
    id: 'aws-sap-fc-50',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Bring your own licence vs. licence included on RDS',
    hint: 'Do you already own the entitlement?',
    back: '<strong>BYOL</strong> applies licences you already own — right for perpetual Oracle entitlements with active support, and the only option for Oracle Enterprise Edition. <strong>Licence included</strong> bundles the licence into the hourly price, available for Oracle SE2 and SQL Server. The rates differ, so choosing LI when you already own licences means <em>paying twice</em>.',
    tags: ['RDS', 'Licensing', 'Cost Optimization']
  }
];

export default AWS_SAP_FLASHCARDS;
