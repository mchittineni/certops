export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-301',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you inspect traffic between spoke VPCs?',
    hint: 'Route it through a chokepoint.',
    back: 'Give each spoke a TGW route to an <strong>inspection VPC</strong> holding Network Firewall endpoints or a GWLB appliance fleet, with the TGW attachment in <strong>appliance mode</strong> so flows stay symmetric. Use separate TGW route tables so spokes cannot reach each other directly, and centralise egress through the same VPC if you want one chokepoint.',
    tags: ['Transit Gateway', 'Network Firewall', 'Inspection']
  },
  {
    id: 'aws-sap-fc-302',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you prevent data exfiltration through VPC endpoints?',
    hint: 'An endpoint is a door out, too.',
    back: 'Attach <strong>endpoint policies</strong> restricting which buckets, tables or accounts are reachable, and enforce <strong><code>aws:ResourceOrgID</code></strong> so your principals can only touch your organization\'s resources. Combine with <strong>RCPs</strong> on your own resources and DNS Firewall to stop resolution of unapproved domains. Endpoints without policies are an open path to any account\'s bucket.',
    tags: ['VPC Endpoints', 'Data Perimeter', 'Exfiltration']
  },
  {
    id: 'aws-sap-fc-303',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you restrict a bucket to a single VPC?',
    hint: 'Two related condition keys.',
    back: '<strong><code>aws:SourceVpce</code></strong> restricts to a specific endpoint ID; <strong><code>aws:SourceVpc</code></strong> restricts to a VPC. Use a deny with <code>Bool aws:ViaAWSService false</code> so AWS services acting on your behalf are not blocked, and remember these keys only apply when traffic actually arrives via the endpoint — public paths need blocking separately.',
    tags: ['S3', 'VPC Endpoints', 'Condition Keys']
  },
  {
    id: 'aws-sap-fc-304',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you share a Transit Gateway with another organization?',
    hint: 'RAM crosses the boundary; policy does not.',
    back: '<strong>RAM can share a TGW outside your organization</strong> (sharing with non-organization accounts must be enabled), and the other party accepts the attachment. What does <em>not</em> cross is your governance: their accounts are not subject to your SCPs. Prefer <strong>PrivateLink</strong> for a single service, and use separate TGW route tables to limit what the partner can reach.',
    tags: ['RAM', 'Transit Gateway', 'Partner Access']
  },
  {
    id: 'aws-sap-fc-305',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you authorize third-party access without shared keys?',
    hint: 'A role they assume.',
    back: 'Create a <strong>cross-account role with a unique <code>sts:ExternalId</code></strong> per vendor, least-privilege permissions, and optionally an IP or endpoint condition — then give them the role ARN, never an access key. You can revoke by editing the trust policy, and every action they take appears in <strong>your</strong> CloudTrail under their session name.',
    tags: ['IAM', 'External ID', 'Third Party']
  },
  {
    id: 'aws-sap-fc-306',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you enforce encryption on resources that already exist?',
    hint: 'Prevention does not fix history.',
    back: 'An SCP or RCP stops <em>new</em> unencrypted resources; existing ones need remediation. Use <strong>Config rules with SSM Automation auto-remediation</strong>, and accept that some resources must be <strong>recreated</strong> — an unencrypted EBS volume or RDS instance is re-encrypted by snapshot, copy-with-key, restore. Plan that as a migration, not a policy change.',
    tags: ['Config', 'Encryption', 'Remediation']
  },
  {
    id: 'aws-sap-fc-307',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you meet a regulatory requirement for key custody?',
    hint: 'Ask who must be able to say no.',
    back: 'If the regulator needs <strong>sole custody and the ability to deny AWS access</strong>, use <strong>CloudHSM</strong> or a <strong>KMS External Key Store</strong> backed by your own HSM. If they need <em>customer-managed</em> keys with auditability, a KMS CMK with a strict key policy, rotation and CloudTrail suffices. XKS makes you responsible for the availability of every decrypt.',
    tags: ['CloudHSM', 'XKS', 'Compliance']
  },
  {
    id: 'aws-sap-fc-308',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you pick a database for a document-shaped workload?',
    hint: 'Three defensible answers.',
    back: '<strong>DynamoDB</strong> if access patterns are known and you want scale with no operations. <strong>DocumentDB</strong> if the team needs MongoDB API compatibility and ad-hoc queries over documents. <strong>Aurora PostgreSQL with JSONB</strong> if you want documents <em>and</em> relational joins and transactions in one engine. Choose by access pattern and team skill, not by the word "document".',
    tags: ['DynamoDB', 'DocumentDB', 'Data Modeling']
  },
  {
    id: 'aws-sap-fc-309',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'When is a graph database the right answer?',
    hint: 'Relationships are the query.',
    back: 'When the <strong>relationships themselves are what you traverse</strong> — fraud rings, recommendations, identity resolution, network topology, knowledge graphs — and the query depth is variable. <strong>Neptune</strong> supports Gremlin, openCypher and SPARQL. If you only ever join two levels deep, a relational index is simpler and faster.',
    tags: ['Neptune', 'Graph', 'Purpose-Built']
  },
  {
    id: 'aws-sap-fc-310',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Which store for time-series telemetry?',
    hint: 'Ingest rate and retention shape.',
    back: '<strong>Timestream</strong> — purpose-built, automatic memory-to-magnetic tiering, time-series functions; the default for metrics and IoT telemetry. <strong>DynamoDB</strong> with a composite key works if you need single-item lookups and you shard writes. <strong>OpenSearch or Prometheus</strong> where you need ad-hoc exploration and alerting over the same data.',
    tags: ['Timestream', 'Time Series', 'IoT']
  },
  {
    id: 'aws-sap-fc-311',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a write path for very high ingest?',
    hint: 'Buffer, then batch.',
    back: 'Put a <strong>stream or queue in front</strong> so producers are never blocked by the store, then batch writes downstream. <strong>Firehose</strong> to S3 for analytics (buffering and format conversion included), <strong>Kinesis or MSK</strong> where multiple consumers need the same records, <strong>DynamoDB with a sharded key</strong> for high-rate point writes. Direct synchronous writes to a relational primary is the pattern that fails first.',
    tags: ['Kinesis', 'Firehose', 'Ingestion']
  },
  {
    id: 'aws-sap-fc-312',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you stream change data out of a transactional store?',
    hint: 'One mechanism per engine.',
    back: '<strong>DynamoDB Streams</strong> (or Kinesis Data Streams for DynamoDB) for DynamoDB, <strong>DMS with CDC</strong> or native logical replication for RDS and Aurora, and <strong>Aurora with the activity stream</strong> for audit. Consume with Lambda or Pipes. Avoid application dual-writes — they drift the moment one of the two writes fails.',
    tags: ['CDC', 'DynamoDB Streams', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-313',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you guarantee order across a partitioned stream?',
    hint: 'Pick the partition key deliberately.',
    back: 'Order exists only <strong>within a partition or shard</strong>, so the partition key must be the entity whose order matters — customer ID, account ID, aggregate ID. That also sets your parallelism and your hot-partition risk. If a single entity\'s throughput exceeds one shard, you cannot have both total order and scale: <strong>relax ordering or reshape the entity</strong>.',
    tags: ['Kinesis', 'Ordering', 'Partitioning']
  },
  {
    id: 'aws-sap-fc-314',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve many accounts from one data lake?',
    hint: 'Governed, not copied.',
    back: '<strong>Lake Formation</strong> holds the permissions — database, table, column and row-level — and grants cross-account access through the Glue Data Catalog, so consumers query in place with Athena, Redshift Spectrum or EMR. That beats copying extracts per team, which multiplies cost and creates as many versions of the truth as there are consumers.',
    tags: ['Lake Formation', 'Data Lake', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-315',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you spot an over-provisioned fleet quickly?',
    hint: 'Two metrics and one caveat.',
    back: 'Look for sustained <strong>low CPU with low network</strong>, and cross-check <strong>memory via the CloudWatch agent</strong> — without memory metrics, Compute Optimizer under-reports and you may downsize a memory-bound host. Also check whether load is <em>bursty</em>: a fleet sized for a daily peak needs autoscaling, not a smaller instance type.',
    tags: ['Right-Sizing', 'Compute Optimizer', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-316',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What causes tail latency on an EBS-backed workload?',
    hint: 'Three separate ceilings.',
    back: '<strong>Volume IOPS/throughput limits</strong>, the <strong>instance\'s EBS bandwidth ceiling</strong> (an under-sized instance throttles a fast volume), and <strong>burst credit exhaustion</strong> on gp2 or small gp3 configurations. Check <code>VolumeQueueLength</code> and <code>EBSIOBalance%</code>, and make sure the instance is EBS-optimised and large enough for the volume you attached.',
    tags: ['EBS', 'Latency', 'Performance']
  },
  {
    id: 'aws-sap-fc-317',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce cross-zone data transfer charges?',
    hint: 'Keep the conversation local.',
    back: 'Make chatty callers <strong>zone-aware</strong> so a request is served within its own AZ — topology-aware routing in a service mesh, zonal endpoints, or per-AZ deployments with zonal load balancing. Cache locally to cut cross-AZ reads. Balance this against resilience: pure zonal affinity reduces cost but must still fail over when a zone degrades.',
    tags: ['Data Transfer', 'Availability Zones', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-318',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you quantify the risk in a single-Region design?',
    hint: 'Make it a number the business owns.',
    back: 'State the <strong>plausible failure modes and their impact in business terms</strong> — revenue per hour of downtime, regulatory exposure, contractual penalties — against the cost and complexity of multi-Region. Then let the business choose the RTO/RPO and fund it. An architect\'s job is to price the risk, not to declare multi-Region mandatory.',
    tags: ['Disaster Recovery', 'Risk', 'RTO']
  },
  {
    id: 'aws-sap-fc-319',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle a Region that is degraded but not down?',
    hint: 'The hardest failure mode.',
    back: 'Partial failure is worse than total, because health checks pass and retries amplify it. You need <strong>pre-agreed evacuation criteria</strong> and a manual <strong>routing control</strong> (ARC) to shift traffic deliberately, plus load shedding to protect what still works. Deciding mid-incident whether a degraded Region counts as "down" is how outages get extended.',
    tags: ['ARC', 'Disaster Recovery', 'Incident Response']
  },
  {
    id: 'aws-sap-fc-320',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the blast radius of a shared database?',
    hint: 'Partition the failure domain.',
    back: 'Split by <strong>bounded context</strong> so a schema change affects one service, or by <strong>cell/shard</strong> so a failure affects a subset of customers. Interim measures: separate read replicas per consumer, <strong>connection and concurrency limits per client</strong>, and per-service credentials so one runaway consumer cannot exhaust the primary for everyone.',
    tags: ['Blast Radius', 'Cell Architecture', 'Resilience']
  },
  {
    id: 'aws-sap-fc-321',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you estimate migration cost before committing?',
    hint: 'Two sides and a one-off.',
    back: '<strong>Migration Evaluator</strong> for the current-state baseline and a modelled AWS run cost from real utilisation, plus the <strong>Pricing Calculator</strong> for the target design. Then add the <strong>one-off cost</strong>: tooling, partner or internal effort, dual-running during waves, and training. Forecast with right-sizing applied, otherwise the estimate reflects on-premises over-provisioning.',
    tags: ['Migration Evaluator', 'TCO', 'Business Case']
  },
  {
    id: 'aws-sap-fc-322',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep costs visible during a migration?',
    hint: 'Dual-running is the surprise.',
    back: 'Tag every migrated resource with its <strong>wave and application</strong>, activate the keys, and track <strong>AWS spend beside the un-decommissioned source</strong> — the overlap is what blows the business case. Enforce a <strong>decommission date per workload</strong> as a wave exit criterion, and report cost per application rather than a single account total.',
    tags: ['Cost Allocation', 'Migration', 'FinOps']
  },
  {
    id: 'aws-sap-fc-323',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you track progress of a large migration programme?',
    hint: 'One place, per application.',
    back: '<strong>Migration Hub</strong> as the aggregation point, with each application\'s status fed automatically by MGN and DMS, plus the portfolio held in a wave plan. Report <strong>applications fully cut over and sources decommissioned</strong>, not servers replicating — a server in staging for three months is not progress.',
    tags: ['Migration Hub', 'Programme', 'Metrics']
  },
  {
    id: 'aws-sap-fc-324',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you reduce risk in a big-bang cutover?',
    hint: 'Turn it into many small ones.',
    back: 'Decompose it: migrate <strong>read traffic first</strong>, use <strong>weighted DNS or a canary share</strong> to ramp, keep <strong>reverse replication</strong> so rollback is a repoint, and rehearse the full runbook against test instances. Where a single window is unavoidable, shorten it by pre-staging data with CDC and agreeing explicit abort criteria in advance.',
    tags: ['Cutover', 'Risk', 'Rollback']
  },
  {
    id: 'aws-sap-fc-325',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What do you do with applications that fail their assessment?',
    hint: 'Failing is a decision, not a blocker.',
    back: 'Route them deliberately: <strong>retain</strong> with a review date, <strong>retire</strong> if unused, <strong>repurchase</strong> if a product exists, or schedule <strong>remediation</strong> (version upgrade, licence change, dependency replacement) as its own piece of work before a later wave. What stalls programmes is leaving them unclassified in the backlog.',
    tags: ['Portfolio', 'Assessment', 'Migration Strategies']
  }
];

export default AWS_SAP_FLASHCARDS;
