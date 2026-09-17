export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-476',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you choose a boundary for regulated workloads?',
    hint: 'The account is the audit boundary.',
    back: 'Put the regulated scope in <strong>its own accounts under a dedicated OU</strong>, so guardrails, logging, key custody and cost are all scoped to something an auditor can point at. Then restrict connectivity to it deliberately with TGW segments and endpoint policies. Sharing an account between in-scope and out-of-scope workloads expands the audit to everything.',
    tags: ['Compliance', 'Account Design', 'Organizations']
  },
  {
    id: 'aws-sap-fc-477',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you keep workloads inside one country?',
    hint: 'Deny, do not merely prefer.',
    back: 'An <strong>SCP denying every Region except the approved ones</strong> (remembering global services are billed in us-east-1 and need exempting), plus controls on the data\'s <em>metadata</em> path: KMS key Region, log and backup destinations, replication targets, and support case contents. Where no Region exists, use <strong>Outposts or Dedicated Local Zones</strong>.',
    tags: ['Data Residency', 'SCP', 'Compliance']
  },
  {
    id: 'aws-sap-fc-478',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle shared responsibility for a managed service?',
    hint: 'Know where the line falls.',
    back: 'AWS owns the infrastructure, patching and availability of the managed component; <strong>you own configuration, access control, encryption choices, network exposure and your data</strong>. Most managed-service incidents are on the customer side of that line — a public endpoint, an over-broad policy, no backups. Document the split per service in your control matrix.',
    tags: ['Shared Responsibility', 'Compliance', 'Security']
  },
  {
    id: 'aws-sap-fc-479',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you run a licensed workload on dedicated hardware?',
    hint: 'Hosts, not instances.',
    back: '<strong>Dedicated Hosts</strong> give you a physical server with visible sockets and cores plus <strong>host affinity</strong>, which is what per-core licensing and BYOL terms usually require. <em>Dedicated Instances</em> only guarantee hardware isolation from other customers, with no core visibility or affinity. Track entitlement with <strong>License Manager</strong> and check vendor mobility terms first.',
    tags: ['Dedicated Hosts', 'License Manager', 'Licensing']
  },
  {
    id: 'aws-sap-fc-480',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you control who can share resources externally?',
    hint: 'RAM sharing needs its own guardrail.',
    back: 'Disable <strong>sharing with accounts outside the organization</strong> at the Organizations level, and add an SCP denying <code>ram:CreateResourceShare</code> where <code>ram:RequestedAllowsExternalPrincipals</code> is true. Do the same for the service-specific paths — snapshot sharing, AMI launch permissions, S3 and KMS policies — and detect with Access Analyzer.',
    tags: ['RAM', 'SCP', 'Data Perimeter']
  },
  {
    id: 'aws-sap-fc-481',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you name the boundary for consolidated billing?',
    hint: 'One payer, one organization.',
    back: 'An organization has exactly <strong>one management account, which is the payer</strong> for every member; discounts, volume tiers and commitments pool across it. That makes the organization the natural boundary for a legal entity\'s billing — a separate entity that must be invoiced independently needs <strong>its own organization</strong>, not just its own OU.',
    tags: ['Consolidated Billing', 'Organizations', 'FinOps']
  },
  {
    id: 'aws-sap-fc-482',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a model for a shared container platform?',
    hint: 'Cluster per team, or namespace per team.',
    back: '<strong>Namespace per tenant</strong> in a shared cluster — cheapest, one control plane, isolation by quotas, network policies and Pod Identity; fine for teams inside one trust boundary. <strong>Cluster (or account) per tenant</strong> — hard isolation, independent upgrades, but a control-plane charge and operational multiplier each. Decide by the trust boundary, not team count.',
    tags: ['EKS', 'Multi-Tenancy', 'Platform Engineering']
  },
  {
    id: 'aws-sap-fc-483',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you run a shared CI platform for many teams?',
    hint: 'Isolate the build, not just the repo.',
    back: 'Give each team its own <strong>build role and account or namespace</strong>, so one team\'s pipeline cannot deploy into another\'s environment or read its secrets. Use <strong>OIDC federation</strong> rather than stored keys, ephemeral build environments, and a shared <strong>CodeArtifact</strong> registry. The shared thing should be the <em>platform</em>, never the credentials.',
    tags: ['CI/CD', 'Multi-Account', 'Platform Engineering']
  },
  {
    id: 'aws-sap-fc-484',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a deployment unit for a scheduled task?',
    hint: 'Runtime and duration decide.',
    back: '<strong>Lambda</strong> under 15 minutes with modest memory, <strong>ECS or EKS scheduled task</strong> for a container with a long runtime or big dependencies, <strong>AWS Batch</strong> for compute-heavy work that benefits from Spot and queueing. Trigger all of them from <strong>EventBridge Scheduler</strong> rather than a cron on an instance you now have to keep alive.',
    tags: ['EventBridge Scheduler', 'Lambda', 'Compute']
  },
  {
    id: 'aws-sap-fc-485',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you store large binary attachments?',
    hint: 'Metadata and bytes go to different places.',
    back: 'Bytes in <strong>S3</strong>, metadata and the object key in the database — so the database stays small and fast and the object benefits from lifecycle, versioning and edge delivery. Clients upload and download <strong>directly with pre-signed URLs</strong>. Storing blobs in a relational table inflates backups, restore time and replication lag for no benefit.',
    tags: ['S3', 'Pre-Signed URLs', 'Data Modeling']
  },
  {
    id: 'aws-sap-fc-486',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you expose internal metrics safely?',
    hint: 'Do not put the scrape endpoint on the internet.',
    back: 'Keep the scrape path private — <strong>PrivateLink or a VPC-internal collector</strong> — and push to a managed backend (<strong>Amazon Managed Service for Prometheus</strong> or CloudWatch) with IAM-signed writes. Expose dashboards through an authenticated front door such as <strong>Amazon Managed Grafana with your IdP</strong>, and strip anything sensitive from labels.',
    tags: ['Prometheus', 'PrivateLink', 'Observability']
  },
  {
    id: 'aws-sap-fc-487',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Why can a multi-Region design still fail as one?',
    hint: 'Find the shared dependency.',
    back: 'Because something is global or single-Region: a <strong>control plane, a single DNS or certificate authority, a config store, an identity provider, a shared deployment pipeline</strong>, or a database whose only writer lives in one Region. Map every dependency and ask which Region it lives in — then make the standby <strong>statically stable</strong> so failover needs no control-plane call.',
    tags: ['Multi-Region', 'Static Stability', 'Resilience']
  },
  {
    id: 'aws-sap-fc-488',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design around a shared service that cannot scale?',
    hint: 'Protect it, then remove the dependency.',
    back: 'Short term: put a <strong>queue and a concurrency cap in front</strong>, cache its responses aggressively, and batch calls so it sees a fraction of the traffic. Medium term: <strong>replicate a read-only projection</strong> so consumers stop calling it for reads. Long term: replace or shard it. Do not let every new consumer add load to an unscalable component.',
    tags: ['Resilience', 'Caching', 'Architecture']
  },
  {
    id: 'aws-sap-fc-489',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce log ingestion cost without losing evidence?',
    hint: 'Separate alarms from archive.',
    back: 'Route the <strong>full fidelity stream to S3</strong> (cheap, Object Lock, Athena-queryable) and send only the subset you alarm and tail on into CloudWatch Logs. Then cut volume at source: drop debug, sample repetitive lines, and remove unused fields with a <strong>Firehose transform</strong>. Retention and log class come last, after volume.',
    tags: ['CloudWatch Logs', 'Firehose', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-490',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make sense of cost across shared Kubernetes clusters?',
    hint: 'The bill is per node, the work is per pod.',
    back: 'Enable <strong>split cost allocation data</strong> for ECS and EKS in the CUR, which apportions each node\'s cost to pods by their <em>requested</em> CPU and memory, and tag namespaces or use Kubecost for the team view. The lever it reveals is usually <strong>over-requested pods</strong>, since requests drive both scheduling waste and the allocation.',
    tags: ['EKS', 'Split Cost Allocation', 'FinOps']
  },
  {
    id: 'aws-sap-fc-491',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find which resources a cost spike came from?',
    hint: 'Group by, then drill to resource.',
    back: 'In <strong>Cost Explorer</strong> group by service, then usage type and account, to localise it; then query the <strong>CUR with resource-level detail</strong> to name the individual resource and the hour it started. <strong>Cost Anomaly Detection</strong> gives the root-cause breakdown automatically. Correlate the start time with CloudTrail to find the change.',
    tags: ['Cost Explorer', 'CUR', 'FinOps']
  },
  {
    id: 'aws-sap-fc-492',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you clean up storage nobody owns?',
    hint: 'Inventory, notify, then act.',
    back: 'Inventory with <strong>S3 Storage Lens and a CUR query</strong> for unattached volumes, old snapshots and orphaned buckets; attribute by tag or by the CloudTrail creation event where tags are missing. Then <strong>notify owners with a deadline, move to a cheap class, and delete on expiry</strong> — and prevent recurrence with mandatory tags and lifecycle rules by default.',
    tags: ['Storage Lens', 'Cost Optimization', 'Governance']
  },
  {
    id: 'aws-sap-fc-493',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What do you do about an unused Reserved Instance?',
    hint: 'Three options, depending on type.',
    back: '<strong>Modify</strong> it (change AZ, scope, or size within the family), <strong>exchange</strong> it if Convertible, or <strong>sell</strong> it on the Reserved Instance Marketplace if Standard. If none applies, make it useful by <strong>shifting a matching workload onto that family</strong>. Then fix the process: prefer Savings Plans, and commit only to the demonstrated baseline.',
    tags: ['Reserved Instances', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'aws-sap-fc-494',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce storage cost on an unpredictable access pattern?',
    hint: 'Let the class decide.',
    back: '<strong>S3 Intelligent-Tiering</strong>: it moves objects between frequent, infrequent and archive tiers automatically based on observed access, with <strong>no retrieval charges and no minimum duration</strong> beyond a small per-object monitoring fee. That is exactly the case where hand-written lifecycle rules guess wrong and either lose latency or lose the saving.',
    tags: ['S3', 'Intelligent-Tiering', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-495',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload with licence-bound storage?',
    hint: 'Check what the licence is tied to.',
    back: 'Some licences bind to a storage array, a WWN or a host identifier, so lifting the data breaks entitlement. Establish what the key is, then choose: <strong>re-license on AWS</strong>, <strong>repurchase</strong> an equivalent, run on <strong>Dedicated Hosts</strong> where host affinity satisfies the terms, or <strong>retain</strong>. Resolve it during assessment, not in the cutover window.',
    tags: ['Licensing', 'Dedicated Hosts', 'Migration']
  },
  {
    id: 'aws-sap-fc-496',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you handle an application that depends on local storage performance?',
    hint: 'Match the I/O profile, then verify.',
    back: 'Measure the actual IOPS, throughput and latency profile first, then map it: <strong>io2 Block Express</strong> for durable sub-millisecond needs, <strong>instance store NVMe</strong> for ephemeral scratch at the highest throughput (with replication above it, since it does not survive a stop), or <strong>FSx for Lustre</strong> for parallel throughput. Validate on a test instance before committing the wave.',
    tags: ['EBS', 'Instance Store', 'Migration']
  },
  {
    id: 'aws-sap-fc-497',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you reduce licence cost by changing product?',
    hint: 'Repurchase the engine.',
    back: 'Move off the commercial engine: <strong>SQL Server to Aurora PostgreSQL with Babelfish</strong>, Oracle to Aurora PostgreSQL via <strong>SCT and DMS</strong>, a licensed broker to <strong>Amazon MQ or SQS</strong>, commercial Linux to Amazon Linux. The saving is real and recurring, but so is the conversion effort — let the <strong>SCT assessment</strong> size it before you promise the number.',
    tags: ['Babelfish', 'Licensing', 'Repurchase']
  },
  {
    id: 'aws-sap-fc-498',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you reduce licence cost when moving Windows workloads?',
    hint: 'Three levers.',
    back: '<strong>License Included</strong> instances where you own no entitlement, <strong>BYOL on Dedicated Hosts</strong> where you do and the terms allow it, and <strong>reduce the licensed footprint</strong> — consolidate onto fewer, larger hosts, move .NET workloads to Linux containers, and replace Windows file servers with FSx. Track it all in <strong>License Manager</strong> so the count is provable.',
    tags: ['Windows', 'License Manager', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-499',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you containerise an application without rewriting it?',
    hint: 'One tool exists for exactly this.',
    back: '<strong>App2Container</strong> analyses a running Java or .NET application and generates the Dockerfile, image and ECS, EKS or App Runner artefacts plus a pipeline. Expect to still handle <strong>state, configuration, logging to stdout, and graceful shutdown</strong> — the container is the easy part, and treating the container as stateless is the real work.',
    tags: ['App2Container', 'Containers', 'Replatform']
  },
  {
    id: 'aws-sap-fc-500',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose a first modernization after a successful migration?',
    hint: 'Pick the one that pays and teaches.',
    back: 'Choose something with a <strong>fast, measurable payback that also builds capability</strong> — usually replacing a self-managed database with RDS or Aurora, or moving a cron host to EventBridge and Lambda. It removes real toil, cuts cost, is reversible, and gives the team a managed-service pattern to reuse. Save a decomposition for after that confidence exists.',
    tags: ['Modernization', 'Prioritisation', 'Post-Migration']
  }
];

export default AWS_SAP_FLASHCARDS;
