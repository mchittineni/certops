export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-76',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'GuardDuty vs. Security Hub vs. Inspector vs. Macie',
    hint: 'Detect, aggregate, scan, classify.',
    back: '<strong>GuardDuty</strong> — threat detection from CloudTrail, VPC Flow Logs, DNS and EKS audit logs. <strong>Security Hub</strong> — aggregates findings from all of them plus standards scoring (CIS, FSBP, PCI). <strong>Inspector</strong> — continuous vulnerability and unintended-network-exposure scanning for EC2, ECR images and Lambda. <strong>Macie</strong> — discovers and classifies sensitive data in S3.',
    tags: ['GuardDuty', 'Security Hub', 'Security']
  },
  {
    id: 'aws-sap-fc-77',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does AWS Firewall Manager centralise?',
    hint: 'Policy, not packets.',
    back: 'Organization-wide <strong>policies</strong> for WAF web ACLs, Shield Advanced protections, security group audit and baseline rules, Network Firewall, and Route 53 Resolver DNS Firewall — automatically applied to <em>existing and future</em> accounts and resources. It needs Organizations trusted access and a delegated administrator, and it enforces rather than merely reporting.',
    tags: ['Firewall Manager', 'WAF', 'Governance']
  },
  {
    id: 'aws-sap-fc-78',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Transit Gateway appliance mode — what breaks without it?',
    hint: 'Asymmetric routing through an appliance.',
    back: 'Without it, TGW may pick a <em>different AZ\'s</em> attachment ENI for each direction of a flow, so a stateful inspection appliance sees only half the conversation and drops it. <strong>Appliance mode on the inspection VPC attachment</strong> pins both directions to the same AZ, keeping flow symmetry. Essential for any firewall or IDS in the path.',
    tags: ['Transit Gateway', 'Inspection', 'Networking']
  },
  {
    id: 'aws-sap-fc-79',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Direct Connect gateway vs. Transit Gateway — how do they combine?',
    hint: 'One associates, the other routes.',
    back: 'A <strong>Direct Connect gateway</strong> is a global object that associates private VIFs with VPCs or Transit Gateways across Regions and accounts. A <strong>transit VIF</strong> plus DX gateway plus TGW is the standard pattern for many VPCs over one circuit. For resilience use <strong>two circuits at two locations</strong>, and a VPN backup with BGP for graceful failover.',
    tags: ['Direct Connect', 'Transit Gateway', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-80',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you resolve DNS in both directions with on-premises?',
    hint: 'Two endpoint types plus rules.',
    back: 'A Route 53 Resolver <strong>inbound endpoint</strong> lets on-premises resolvers query AWS private zones. An <strong>outbound endpoint</strong> plus <strong>forwarding rules</strong> sends queries for on-premises domains from the VPC to your own servers. Share the rules with <strong>RAM</strong> so every account inherits them — or use <em>Route 53 Profiles</em> to distribute a whole DNS configuration.',
    tags: ['Route 53', 'Resolver', 'Hybrid DNS']
  },
  {
    id: 'aws-sap-fc-81',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'The confused deputy problem — and the fix for third-party roles',
    hint: 'External ID.',
    back: 'A SaaS vendor assumes a role in <em>many</em> customers\' accounts; if the trust policy names only the vendor\'s account, one customer could trick it into acting on another. The fix is a unique <strong><code>sts:ExternalId</code></strong> condition per customer. For AWS services acting on your behalf, use <code>aws:SourceArn</code> and <code>aws:SourceAccount</code> instead.',
    tags: ['IAM', 'Cross-Account', 'Security']
  },
  {
    id: 'aws-sap-fc-82',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Secrets Manager vs. SSM Parameter Store',
    hint: 'Rotation is the dividing line.',
    back: '<strong>Secrets Manager</strong> — built-in <em>automatic rotation</em> with Lambda, cross-Region replication, native RDS integration, per-secret charge. <strong>Parameter Store</strong> — free standard tier, hierarchical parameters, SecureString with KMS, no managed rotation; advanced tier adds size and policy expiry. Use Parameter Store for configuration, Secrets Manager for credentials that must rotate.',
    tags: ['Secrets Manager', 'Parameter Store', 'Security']
  },
  {
    id: 'aws-sap-fc-83',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Cognito user pool vs. identity pool',
    hint: 'Authenticate versus authorise to AWS.',
    back: 'A <strong>user pool</strong> is the directory and token issuer — sign-up, sign-in, MFA, hosted UI, federation — returning JWTs your API validates. An <strong>identity pool</strong> exchanges a token (from a user pool, Google, SAML, or none at all) for <strong>temporary AWS credentials</strong> scoped by an IAM role, so a mobile client can reach S3 or DynamoDB directly.',
    tags: ['Cognito', 'Authentication', 'Serverless']
  },
  {
    id: 'aws-sap-fc-84',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Route 53 routing policies — name them and their use',
    hint: 'Seven of them.',
    back: '<strong>Simple</strong>, <strong>Weighted</strong> (gradual release, A/B), <strong>Latency</strong> (nearest Region by measured latency), <strong>Failover</strong> (active-passive with health checks), <strong>Geolocation</strong> (by user location, for compliance or language), <strong>Geoproximity</strong> (with a bias to shift traffic), <strong>Multivalue answer</strong> (up to 8 healthy records, cheap client-side spread).',
    tags: ['Route 53', 'DNS', 'Traffic Management']
  },
  {
    id: 'aws-sap-fc-85',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you stop traffic bypassing CloudFront and hitting the origin?',
    hint: 'Identity at the origin, plus a secret header.',
    back: 'For S3 use <strong>Origin Access Control</strong> so only the distribution can read the bucket. For an ALB or custom origin, have CloudFront inject a <strong>secret custom header</strong> the origin requires, and restrict the security group to the <strong>CloudFront managed prefix list</strong>. Add <strong>WAF at the distribution</strong> so rate limits cannot be sidestepped.',
    tags: ['CloudFront', 'OAC', 'Security']
  },
  {
    id: 'aws-sap-fc-86',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does S3 Replication Time Control guarantee?',
    hint: 'An SLA, not best effort.',
    back: '<strong>RTC replicates 99.99% of objects within 15 minutes</strong>, backed by an SLA, with replication metrics and event notifications. Plain CRR/SRR is best-effort. Replication needs <em>versioning on both buckets</em>, is asynchronous, and by default does not copy existing objects — use <strong>Batch Replication</strong> for the backlog — nor delete markers unless enabled.',
    tags: ['S3', 'Replication', 'Resilience']
  },
  {
    id: 'aws-sap-fc-87',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'SQS visibility timeout, long polling and DLQ redrive',
    hint: 'Three knobs that cause most queue bugs.',
    back: '<strong>Visibility timeout</strong> must exceed the worst-case processing time or the message is redelivered and processed twice — extend it with a heartbeat for long jobs. <strong>Long polling</strong> (<code>WaitTimeSeconds</code> up to 20) cuts empty receives and cost. A <strong>DLQ</strong> with <code>maxReceiveCount</code> quarantines poison messages, and <em>redrive</em> replays them after the fix.',
    tags: ['SQS', 'Messaging', 'Reliability']
  },
  {
    id: 'aws-sap-fc-88',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Aurora Global Database vs. cross-Region read replica',
    hint: 'Replication in storage, not the engine.',
    back: '<strong>Aurora Global Database</strong> replicates at the <em>storage layer</em>: typically under 1 second lag, up to 5 secondary Regions, managed <strong>unplanned failover</strong> with an RPO around 1 second and RTO under a minute, plus write forwarding. A conventional cross-Region read replica uses engine-level replication with higher lag and manual promotion.',
    tags: ['Aurora', 'Global Database', 'Disaster Recovery']
  },
  {
    id: 'aws-sap-fc-89',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AWS X-Ray give you that logs and metrics cannot?',
    hint: 'One request across many services.',
    back: 'A <strong>trace</strong> stitching one request\'s segments across services into a <strong>service map</strong>, showing where the latency actually went and which dependency failed. Use <em>sampling</em> to control cost, add <strong>annotations</strong> (indexed, filterable) and metadata, and prefer <strong>ADOT</strong>/OpenTelemetry when you need vendor-neutral instrumentation.',
    tags: ['X-Ray', 'Tracing', 'Observability']
  },
  {
    id: 'aws-sap-fc-90',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What is AWS Fault Injection Service for, and what makes an experiment valid?',
    hint: 'A hypothesis and a stop condition.',
    back: 'FIS injects real failures — instance termination, AZ impairment, API throttling, network latency, EBS pause — to prove a system tolerates what it claims. A valid experiment has a <strong>steady-state hypothesis</strong>, a defined <strong>blast radius</strong>, and <strong>stop conditions</strong> wired to CloudWatch alarms that abort automatically. Run in production eventually, or you have not tested production.',
    tags: ['FIS', 'Chaos Engineering', 'Resilience']
  },
  {
    id: 'aws-sap-fc-91',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Read-through vs. write-through vs. cache-aside',
    hint: 'Who populates the cache?',
    back: '<strong>Cache-aside (lazy)</strong> — the app checks the cache, misses, reads the database, and populates; only requested data is cached, but every miss pays full latency. <strong>Write-through</strong> — writes update the cache too, so reads are always warm at the cost of write latency and cached data nobody reads. Combine with a <strong>TTL</strong> to bound staleness, and beware the <em>thundering herd</em> on expiry.',
    tags: ['ElastiCache', 'Caching', 'Performance']
  },
  {
    id: 'aws-sap-fc-92',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut CloudWatch Logs cost without losing evidence?',
    hint: 'Ingestion is the expensive part.',
    back: 'Reduce <strong>ingestion volume</strong> first — drop debug chatter and sample high-cardinality lines. Then set <strong>retention per log group</strong> (never "never expire" by default), export or tier cold data to <strong>S3 via Firehose</strong> and query with Athena, and use <strong>Infrequent Access log class</strong> for rarely-read groups. Keep the audit trail in S3 with Object Lock, not in Logs.',
    tags: ['CloudWatch Logs', 'Cost Optimization', 'Retention']
  },
  {
    id: 'aws-sap-fc-93',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AWS Config add over CloudTrail?',
    hint: 'State versus calls.',
    back: '<strong>CloudTrail</strong> records <em>who called what, when</em>. <strong>Config</strong> records <em>what each resource looked like over time</em>, evaluates it against rules, and can <strong>auto-remediate</strong> via SSM Automation. An <strong>aggregator</strong> gives one multi-account, multi-Region view, and <strong>conformance packs</strong> ship rule bundles as code.',
    tags: ['Config', 'CloudTrail', 'Compliance']
  },
  {
    id: 'aws-sap-fc-94',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Session Manager vs. bastion hosts',
    hint: 'No inbound ports at all.',
    back: 'Session Manager gives shell access with <strong>no inbound ports, no bastion, and no SSH keys</strong> — the agent makes an outbound call, so instances can stay in private subnets with a closed security group. Access is IAM-controlled, every session is <strong>logged to CloudTrail and optionally recorded to S3 or CloudWatch Logs</strong>, and it works over VPC endpoints without internet.',
    tags: ['Systems Manager', 'Session Manager', 'Security']
  },
  {
    id: 'aws-sap-fc-95',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Application Discovery Service — agentless vs. agent',
    hint: 'Breadth versus depth.',
    back: 'The <strong>Agentless Collector</strong> (an OVA in vCenter) inventories VMs, utilisation and — with database discovery — schema details, with no touch on guests. The <strong>Discovery Agent</strong> installs per server and adds <strong>running processes and network connections</strong>, which is what you need for real <em>dependency mapping</em> before wave planning. Both feed Migration Hub.',
    tags: ['Application Discovery Service', 'Dependencies', 'Migration']
  },
  {
    id: 'aws-sap-fc-96',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'MGN test instances vs. cutover instances',
    hint: 'Replication keeps running through one of them.',
    back: '<strong>Test instances</strong> launch from the staged data as often as you like, <em>without stopping replication</em>, so you rehearse and validate repeatedly — AWS expects you to test before every wave. <strong>Cutover</strong> launches the final instance, then you stop the source and <em>finalise</em>, which terminates the staging area. Keep the source intact until finalised so rollback is a DNS change.',
    tags: ['MGN', 'Cutover', 'Testing']
  },
  {
    id: 'aws-sap-fc-97',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Elastic Disaster Recovery vs. Application Migration Service',
    hint: 'Same engine, different intent.',
    back: 'Both use block-level continuous replication into a low-cost staging area. <strong>MGN</strong> is for a <em>one-way migration</em> ending in finalisation. <strong>DRS</strong> is for <em>ongoing DR</em> — it keeps replicating indefinitely, supports drills, point-in-time recovery from snapshots, and <strong>failback</strong> to the source once the primary returns.',
    tags: ['Elastic Disaster Recovery', 'MGN', 'Disaster Recovery']
  },
  {
    id: 'aws-sap-fc-98',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Which paths exist for a mainframe workload?',
    hint: 'Automated refactor, replatform, or leave it.',
    back: '<strong>AWS Mainframe Modernization</strong> offers automated <em>refactoring</em> (Blu Age — COBOL to Java) and <em>replatforming</em> onto a managed runtime (Micro Focus) that keeps the COBOL. Alternatives: <strong>augment</strong> by exposing APIs and moving new work to AWS, or <strong>retain</strong> and integrate via data replication. Full rewrites are high-risk and rarely the first move.',
    tags: ['Mainframe Modernization', 'Refactor', 'Modernization']
  },
  {
    id: 'aws-sap-fc-99',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is an anti-corruption layer, and when do you need one?',
    hint: 'Do not let the legacy model leak.',
    back: 'A translation boundary between a new service and a legacy system, so the legacy data model and protocol do <strong>not leak into the new design</strong>. Use it when extracting from a monolith whose schema you cannot change, or when wrapping a SOAP or non-idempotent API — often as a Lambda or API Gateway mapping in front of the old system.',
    tags: ['Modernization', 'Anti-Corruption Layer', 'Microservices']
  },
  {
    id: 'aws-sap-fc-100',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What belongs in a migration business case?',
    hint: 'Not just server costs.',
    back: 'Current-state <strong>TCO</strong> including hardware refresh, data-centre space, power, licences, and the staff time spent on undifferentiated work — against AWS run cost plus <strong>one-off migration cost</strong>. Then the value side: avoided refresh, faster delivery, retired workloads. <strong>Migration Evaluator</strong> builds the baseline, and <strong>MAP</strong> can fund part of the programme.',
    tags: ['Business Case', 'TCO', 'Migration']
  }
];

export default AWS_SAP_FLASHCARDS;
