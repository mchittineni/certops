export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-126',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you deploy infrastructure into every account in an OU?',
    hint: 'Two permission models, one right answer.',
    back: '<strong>CloudFormation StackSets with service-managed permissions</strong>: with Organizations trusted access enabled it creates the roles it needs, targets OUs directly, and <strong>auto-deploys to accounts added later</strong>. Self-managed permissions is the model that makes you pre-create an execution role in every target account. Terraform users have Control Tower\'s Account Factory for Terraform.',
    tags: ['StackSets', 'Organizations', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-127',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'AWS Backup organization policy — what does it give you?',
    hint: 'Backup as a guardrail, not a habit.',
    back: 'A <strong>backup policy attached to an OU</strong> pushes backup plans into every member account, so protection does not depend on each team remembering. Add <strong>vault lock in compliance mode</strong> so backups cannot be shortened or deleted even by an account administrator, and copy to a <em>separate account and Region</em> for ransomware isolation.',
    tags: ['AWS Backup', 'Organizations', 'Ransomware']
  },
  {
    id: 'aws-sap-fc-128',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What can an SCP not protect you from?',
    hint: 'Four blind spots.',
    back: 'The <strong>management account</strong> (never restricted), <strong>service-linked roles</strong>, anything outside the organization, and resource-based grants made <em>to</em> external principals — an SCP bounds your principals, not other people\'s. Use <strong>RCPs</strong> for the resource side, and move workloads out of the management account so guardrails actually apply to them.',
    tags: ['Organizations', 'SCP', 'Governance']
  },
  {
    id: 'aws-sap-fc-129',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you attribute shared platform cost to teams?',
    hint: 'Tags alone will not do it.',
    back: 'Tag what you can and <strong>activate the keys as cost allocation tags</strong>; then use <strong>Cost Categories</strong> to encode allocation rules for the untaggable — shared clusters, NAT, support charges — and <strong>split cost allocation data</strong> for ECS/EKS so pod-level usage is apportioned. Publish it with <strong>showback</strong> before charging anyone, or the numbers get argued rather than acted on.',
    tags: ['Cost Allocation', 'Cost Categories', 'FinOps']
  },
  {
    id: 'aws-sap-fc-130',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you give auditors access without standing privilege?',
    hint: 'Read-only, time-bound, logged.',
    back: 'A <strong>federated role</strong> via IAM Identity Center with the managed <code>ReadOnlyAccess</code> or <code>SecurityAudit</code> policy, assumed for a short session, with every action in the <strong>organization CloudTrail</strong>. No IAM users, no long-lived keys. For evidence rather than console access, give them <strong>Audit Manager</strong> reports or an S3 prefix of Config snapshots instead.',
    tags: ['IAM', 'Auditing', 'Least Privilege']
  },
  {
    id: 'aws-sap-fc-131',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does IAM Access Analyzer unused-access analysis find?',
    hint: 'The other half of least privilege.',
    back: 'Roles, users, permissions and services <strong>granted but not used</strong> within a lookback window — the evidence you need to shrink over-broad policies without guessing. Its sibling, <strong>external access analysis</strong>, reports resources reachable from outside a zone of trust. Both analyse policy and activity rather than waiting for an incident.',
    tags: ['IAM Access Analyzer', 'Least Privilege', 'Security']
  },
  {
    id: 'aws-sap-fc-132',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'ECS vs. EKS — how do you actually choose?',
    hint: 'Ecosystem and team, not features.',
    back: '<strong>ECS</strong> — simplest path on AWS, deep IAM and ALB integration, no control-plane concepts to learn, no control-plane charge. <strong>EKS</strong> — conformant Kubernetes, so the CNCF ecosystem (Helm, operators, Karpenter, service meshes) and portability come free, at the cost of an hourly control plane and real operational surface. Both run on Fargate or EC2.',
    tags: ['ECS', 'EKS', 'Containers']
  },
  {
    id: 'aws-sap-fc-133',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How does a pod get AWS permissions on EKS?',
    hint: 'Two generations of the same idea.',
    back: '<strong>IRSA</strong> — the cluster\'s OIDC provider is trusted by an IAM role, and a service account annotation projects a token the SDK exchanges via STS. <strong>EKS Pod Identity</strong> — the newer, simpler association with no OIDC trust policy to maintain and support for role chaining. Both beat node instance roles, which give <em>every</em> pod the same permissions.',
    tags: ['EKS', 'IRSA', 'IAM']
  },
  {
    id: 'aws-sap-fc-134',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does Lambda SnapStart do?',
    hint: 'Snapshot the initialised runtime.',
    back: 'It takes an encrypted <strong>snapshot of the initialised execution environment</strong> after <code>Init</code> and restores from it, cutting cold starts dramatically for slow-starting runtimes such as JVM frameworks. Code must be <strong>snapshot-safe</strong>: re-seed randomness, do not cache credentials or connections across restore, and use the runtime hooks for anything unique per environment.',
    tags: ['Lambda', 'SnapStart', 'Cold Starts']
  },
  {
    id: 'aws-sap-fc-135',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What changes when you put a Lambda function in a VPC?',
    hint: 'And what no longer does.',
    back: 'The function gets ENIs in your subnets, so it can reach private resources — but it then has <strong>no internet route unless you add a NAT gateway</strong>, and reaching AWS APIs privately needs <strong>VPC endpoints</strong>. Since Hyperplane ENIs, VPC attachment no longer adds per-invocation cold-start penalty. Do not attach a function that only calls public AWS APIs.',
    tags: ['Lambda', 'VPC', 'Networking']
  },
  {
    id: 'aws-sap-fc-136',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'EventBridge Pipes vs. rules vs. Scheduler',
    hint: 'Point-to-point, pub-sub, or cron.',
    back: '<strong>Pipes</strong> — point-to-point source to target with optional filter, enrichment and transform, replacing glue Lambdas between a stream or queue and a consumer. <strong>Rules on a bus</strong> — pattern-matched fan-out to many targets. <strong>Scheduler</strong> — managed cron or one-time schedules at scale, with retries and a DLQ, replacing rate-based rules.',
    tags: ['EventBridge', 'Pipes', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-137',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Kinesis Data Streams vs. Firehose vs. MSK',
    hint: 'Replayable, managed delivery, or Kafka.',
    back: '<strong>Data Streams</strong> — millisecond, replayable, multiple independent consumers, you manage shards or use on-demand. <strong>Firehose</strong> — no consumers to write, buffers and delivers to S3, Redshift, OpenSearch or Splunk with transform and format conversion, near-real-time. <strong>MSK</strong> — managed Apache Kafka when you need the Kafka API, ecosystem or existing tooling.',
    tags: ['Kinesis', 'Firehose', 'MSK']
  },
  {
    id: 'aws-sap-fc-138',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Which purpose-built database for which shape?',
    hint: 'Stop forcing it into a relational table.',
    back: '<strong>DynamoDB</strong> key-value at scale · <strong>DocumentDB</strong> MongoDB-compatible documents · <strong>Neptune</strong> graphs and relationship traversal · <strong>Timestream</strong> time-series with tiering · <strong>Keyspaces</strong> Cassandra-compatible wide column · <strong>MemoryDB</strong> durable in-memory · <strong>Redshift</strong> analytics warehouse · <strong>OpenSearch</strong> search and log analytics.',
    tags: ['Databases', 'Purpose-Built', 'Data Modeling']
  },
  {
    id: 'aws-sap-fc-139',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AWS Resilience Hub assess?',
    hint: 'Your RTO/RPO claim, tested.',
    back: 'It takes an application definition, compares its configuration against your <strong>stated RTO and RPO</strong>, and reports where the architecture cannot meet them — plus recommended remediations, alarms and <strong>FIS experiment templates</strong> to prove it. It turns a resilience <em>target</em> into a measured score you can track in CI.',
    tags: ['Resilience Hub', 'RTO', 'Resilience']
  },
  {
    id: 'aws-sap-fc-140',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'CloudWatch Synthetics vs. RUM vs. Evidently',
    hint: 'Robot, real user, experiment.',
    back: '<strong>Synthetics canaries</strong> — scripted checks on a schedule from AWS, so you detect an outage with no users awake. <strong>RUM</strong> — real-user telemetry from the browser: page load, JS errors, geography. <strong>Evidently</strong> — feature flags and A/B experiments with statistical results. Alarm on canaries; diagnose with RUM.',
    tags: ['CloudWatch', 'Synthetics', 'Observability']
  },
  {
    id: 'aws-sap-fc-141',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What is an error budget burn-rate alarm, and why prefer it?',
    hint: 'Speed of consumption, not a raw threshold.',
    back: 'It alarms on <strong>how fast the SLO\'s error budget is being consumed</strong> rather than on a fixed error rate. A fast burn (say 14.4× over 1 hour) pages immediately; a slow burn (3× over 6 hours) raises a ticket. This catches both a sharp outage and a slow leak, while a static threshold either pages constantly or misses the leak entirely.',
    tags: ['SLO', 'Error Budget', 'Alerting']
  },
  {
    id: 'aws-sap-fc-142',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you diagnose a hot partition in DynamoDB?',
    hint: 'CloudWatch Contributor Insights.',
    back: 'Enable <strong>CloudWatch Contributor Insights</strong> for the table: it ranks the <em>most accessed and most throttled partition keys</em>, which is how you identify the offender rather than guessing. Fixes: <strong>write sharding</strong> with a suffix, a better key, caching with DAX for read hotspots, or moving the access pattern to a GSI.',
    tags: ['DynamoDB', 'Contributor Insights', 'Performance']
  },
  {
    id: 'aws-sap-fc-143',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Redshift concurrency scaling vs. RA3 vs. Serverless',
    hint: 'Bursts, storage, or no cluster at all.',
    back: '<strong>Concurrency scaling</strong> adds transient clusters during query bursts, earning free credits with usage. <strong>RA3</strong> nodes separate compute from managed storage, so you size for compute and use data sharing. <strong>Serverless</strong> removes cluster management and bills RPUs per second — right for spiky or intermittent analytics rather than a steady 24/7 load.',
    tags: ['Redshift', 'Analytics', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-144',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AWS Cost Anomaly Detection do that a budget cannot?',
    hint: 'Learned baseline, not a fixed number.',
    back: 'It builds a <strong>machine-learned baseline per monitor</strong> (service, account, cost category or tag) and alerts on statistically unusual spend with a root-cause breakdown — so it catches a surprise in week one rather than when a monthly threshold trips. Budgets are still needed for <em>intent</em>: a commitment you have chosen not to exceed.',
    tags: ['Cost Anomaly Detection', 'Budgets', 'FinOps']
  },
  {
    id: 'aws-sap-fc-145',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you patch a fleet without a maintenance outage?',
    hint: 'Replace, do not repair.',
    back: 'Bake a <strong>golden AMI</strong> with EC2 Image Builder, then roll it through the Auto Scaling group with an <strong>instance refresh</strong> honouring minimum healthy percentage — capacity stays up and rollback is the previous launch template version. <strong>SSM Patch Manager</strong> with maintenance windows remains the answer for long-lived or stateful instances.',
    tags: ['Patch Manager', 'Image Builder', 'Operations']
  },
  {
    id: 'aws-sap-fc-146',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'DMS Fleet Advisor and DMS Serverless — what are they for?',
    hint: 'Inventory first, then capacity you do not size.',
    back: '<strong>Fleet Advisor</strong> discovers database and analytics servers on-premises, collects metadata and utilisation, and recommends target engines — sizing the migration before you commit. <strong>DMS Serverless</strong> provisions and scales replication capacity automatically, so you stop guessing replication instance class for a variable change rate.',
    tags: ['DMS', 'Fleet Advisor', 'Migration']
  },
  {
    id: 'aws-sap-fc-147',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is Babelfish, and when does it change a migration?',
    hint: 'The wire protocol, not just the SQL.',
    back: '<strong>Babelfish for Aurora PostgreSQL</strong> understands the SQL Server <strong>TDS wire protocol and T-SQL</strong>, so many applications connect with their existing driver and queries unchanged. It converts a heterogeneous rewrite into something much closer to a replatform — but coverage is not total, so the assessment still decides feasibility.',
    tags: ['Babelfish', 'Aurora', 'Migration']
  },
  {
    id: 'aws-sap-fc-148',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a self-managed Kafka estate?',
    hint: 'Replicate, then move consumers.',
    back: 'Stand up <strong>MSK</strong>, mirror topics with <strong>MSK Replicator</strong> or MirrorMaker 2, move <strong>consumers first</strong> (they can read from both), then producers, then retire the old cluster. Watch offset translation, topic configuration parity, and ACLs. Consider <strong>MSK Serverless</strong> where throughput is unpredictable, or Kinesis if you can drop the Kafka API.',
    tags: ['MSK', 'Kafka', 'Migration']
  },
  {
    id: 'aws-sap-fc-149',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What do you do with an application nobody owns?',
    hint: 'Do not migrate it by default.',
    back: 'Establish evidence before spending: <strong>network connection data</strong> from Discovery Agents shows who still calls it, access logs show whether anyone uses it. No callers and no users means a <strong>retire</strong> candidate — park it with a documented decommission date and a snapshot for recovery. Migrating unowned workloads is how a programme inherits permanent liabilities.',
    tags: ['Portfolio', 'Retire', 'Discovery']
  },
  {
    id: 'aws-sap-fc-150',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep a rollback option through a database cutover?',
    hint: 'Reverse replication.',
    back: 'Set up <strong>reverse CDC from the new target back to the old source</strong> before releasing traffic, so the legacy database stays current and rollback is a connection-string change rather than a restore. Keep it running through hypercare, define the <strong>abort criteria and decision owner</strong> in advance, and rehearse the rollback at least once.',
    tags: ['Cutover', 'Rollback', 'DMS']
  }
];

export default AWS_SAP_FLASHCARDS;
