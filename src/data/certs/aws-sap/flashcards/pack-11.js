export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-251',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you provide break-glass access to a locked backup vault?',
    hint: 'Compliance mode has no override.',
    back: 'You cannot unlock a <strong>vault locked in compliance mode</strong> — that is the point, and it is why the lock has a <strong>cooling-off period</strong> before it becomes immutable. Plan instead: keep a second vault with a shorter retention for operational restores, and document who can perform a restore (which is always permitted) versus a deletion (which is not).',
    tags: ['AWS Backup', 'Vault Lock', 'Immutability']
  },
  {
    id: 'aws-sap-fc-252',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle two business units with conflicting requirements?',
    hint: 'Separate OUs, shared baseline.',
    back: 'Put them in <strong>different OUs under a common baseline OU</strong>: the shared guardrails live high, the divergent controls live per OU. Where the conflict is regulatory (data residency, key custody), separate <strong>accounts and Regions</strong>. A single policy with per-account exemptions satisfies neither party and becomes unreviewable.',
    tags: ['Organizations', 'OU Design', 'Governance']
  },
  {
    id: 'aws-sap-fc-253',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you prevent deletion of security controls?',
    hint: 'Deny the disable verbs.',
    back: 'An <strong>SCP denying the disable and delete actions</strong> for CloudTrail, Config, GuardDuty, Security Hub and the log bucket — applied to every workload OU, so even an account administrator cannot switch off the evidence. Combine with <strong>S3 Object Lock</strong> on the log archive and alarms on any attempt, which is itself a strong compromise signal.',
    tags: ['Organizations', 'SCP', 'Security']
  },
  {
    id: 'aws-sap-fc-254',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you audit container images across an estate?',
    hint: 'Scan at the registry, gate at deploy.',
    back: '<strong>Amazon Inspector</strong> scans ECR images continuously (on push and on new CVE disclosure) and reports into Security Hub. Enforce with <strong>ECR repository policies, image tag immutability, and a pipeline gate</strong> that fails on critical findings, plus signing with Signer or Notation so only verified images deploy.',
    tags: ['ECR', 'Inspector', 'Supply Chain']
  },
  {
    id: 'aws-sap-fc-255',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you limit what a third-party agent on your instances can reach?',
    hint: 'Assume it will be compromised.',
    back: 'Run it with a <strong>narrow task or instance role</strong>, in its own security group with egress restricted to the vendor endpoint, behind a <strong>VPC endpoint or proxy rather than open internet</strong>, and on instances that hold no credentials it could harvest. Set <strong>IMDSv2 required</strong> with a hop limit of 1 so the agent cannot reach the metadata service through a proxy.',
    tags: ['Third Party', 'IMDSv2', 'Security']
  },
  {
    id: 'aws-sap-fc-256',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you remove a secret already committed to a repository?',
    hint: 'Rotation first, history second.',
    back: '<strong>Rotate or revoke the credential immediately</strong> — it is compromised the moment it is pushed, and rewriting history does not un-clone it. Then purge history, add <strong>secret scanning in the pipeline and a pre-commit hook</strong>, and remove the need entirely by moving to <strong>OIDC federation and Secrets Manager</strong>. Review CloudTrail for use of the leaked key.',
    tags: ['Secrets', 'Incident Response', 'CI/CD']
  },
  {
    id: 'aws-sap-fc-257',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you report on resources across every Region and account?',
    hint: 'Two complementary tools.',
    back: '<strong>AWS Config aggregator</strong> for configuration state, relationships and compliance, queryable with advanced queries across the organization. <strong>Resource Explorer</strong> for fast ad-hoc search by tag, type or Region. Add <strong>Resource Groups and Tag Editor</strong> for bulk tag remediation, and the CUR for anything cost-shaped.',
    tags: ['Config', 'Resource Explorer', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-258',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between synchronous and asynchronous integration?',
    hint: 'Does the caller need the answer now?',
    back: '<strong>Synchronous</strong> when the user waits on the result and the operation is fast — but you inherit the callee\'s availability and latency, multiplied along the chain. <strong>Asynchronous</strong> (queue, stream, event) decouples availability, absorbs bursts, and enables retry — at the cost of eventual consistency and the need for <strong>idempotency and status feedback</strong>.',
    tags: ['Integration', 'Event-Driven', 'Architecture']
  },
  {
    id: 'aws-sap-fc-259',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Step Functions vs. EventBridge for coordination',
    hint: 'Do you need to know where you are?',
    back: '<strong>Step Functions</strong> owns a workflow: explicit state, ordering, retries, catch and compensation, and you can inspect any execution — right when the process has steps and failure handling. <strong>EventBridge</strong> is choreography: publishers do not know consumers, which scales organisationally but leaves no single place that knows whether the overall process succeeded.',
    tags: ['Step Functions', 'EventBridge', 'Orchestration']
  },
  {
    id: 'aws-sap-fc-260',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you fan out to several consumers with different needs?',
    hint: 'A topic in front of queues.',
    back: 'The <strong>SNS fan-out to SQS</strong> pattern: one publish, a queue per consumer, so each consumer retries, scales and fails independently with its own DLQ and backlog. Add <strong>message filtering</strong> so each queue receives only what it needs. Publishing straight to many consumers couples the producer to every one of them.',
    tags: ['SNS', 'SQS', 'Fan-Out']
  },
  {
    id: 'aws-sap-fc-261',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you guarantee zero data loss on ingestion?',
    hint: 'Durable before you acknowledge.',
    back: 'Write to a <strong>durable, replicated store before returning success</strong> — Kinesis (three-AZ synchronous), SQS, or a direct S3 put — and never acknowledge from memory or a local disk buffer. Then make downstream processing <strong>replayable</strong> from that store, with a DLQ for poison records so nothing is silently dropped.',
    tags: ['Kinesis', 'Durability', 'Data Pipelines']
  },
  {
    id: 'aws-sap-fc-262',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you size a Kinesis stream?',
    hint: 'Two limits per shard, and the consumer side.',
    back: 'Each shard takes <strong>1 MB/s or 1,000 records/s in</strong>, and <strong>2 MB/s out</strong> shared by standard consumers — so five consumers need enhanced fan-out (2 MB/s each, dedicated) or you throttle. Size on <em>peak</em>, not average, add headroom for retries, and prefer <strong>on-demand mode</strong> when the pattern is unknown.',
    tags: ['Kinesis', 'Shards', 'Capacity Planning']
  },
  {
    id: 'aws-sap-fc-263',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you stop duplicate processing of an S3 upload?',
    hint: 'Notifications are at-least-once.',
    back: 'S3 event notifications can deliver more than once, so make the handler <strong>idempotent</strong> — key on bucket, object key and <strong>version ID or ETag</strong>, and record it with a conditional write in DynamoDB. Use <strong>EventBridge</strong> for richer filtering, and be aware notifications are per-event, so a single object can also trigger multiple configured destinations.',
    tags: ['S3', 'Idempotency', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-264',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose storage for many small files?',
    hint: 'Per-object overhead dominates.',
    back: 'If the access pattern is analytical, <strong>compact into larger objects</strong> (Parquet, 128 MB+) — millions of tiny objects make Athena and Spark slow and expensive in request charges. If they must stay individual, S3 scales fine with a <strong>high-cardinality key prefix</strong>. For POSIX semantics and shared mutation, use <strong>EFS</strong>, or FSx for Lustre for HPC throughput.',
    tags: ['S3', 'Small Files', 'Performance']
  },
  {
    id: 'aws-sap-fc-265',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve reads from the closest Region?',
    hint: 'Routing plus replication.',
    back: '<strong>Latency-based Route 53 records or Global Accelerator</strong> to steer the user, with the data already local — <strong>Aurora Global Database</strong> secondaries or <strong>DynamoDB global tables</strong>. Writes still need a decision: forward them to the primary (accepting the round trip), or accept multi-active writes and own the conflict resolution.',
    tags: ['Multi-Region', 'Route 53', 'Global Tables']
  },
  {
    id: 'aws-sap-fc-266',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the time to detect a regional problem?',
    hint: 'Watch from outside.',
    back: '<strong>Synthetics canaries running from multiple Regions</strong> against your public endpoint, plus <strong>Route 53 health checks</strong> (which are themselves external and distributed), and <strong>RUM</strong> to see what users experience. Internal metrics can look healthy while the path to the user is broken, so at least one detector must live outside the failing Region.',
    tags: ['Synthetics', 'Health Checks', 'Multi-Region']
  },
  {
    id: 'aws-sap-fc-267',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut the cost of an over-replicated dataset?',
    hint: 'Ask what each copy is for.',
    back: 'Inventory the copies and their purpose: <strong>replication for DR, versions for recovery, snapshots for point-in-time, analytics extracts</strong>. Then apply lifecycle rules to non-current versions, replicate <em>selectively by prefix or tag</em> rather than whole buckets, move DR copies to a cheaper class, and delete extracts that a query against the source would replace.',
    tags: ['S3', 'Replication', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-268',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you diagnose connection exhaustion under serverless scale?',
    hint: 'Concurrency times connections per invocation.',
    back: 'Look at <strong><code>DatabaseConnections</code> against <code>max_connections</code></strong> alongside Lambda <strong><code>ConcurrentExecutions</code></strong> — each environment holds its own connection, so 1,000 concurrent invocations means 1,000 connections. Fix with <strong>RDS Proxy</strong> for pooling, reserved concurrency as a hard cap, and connection reuse outside the handler.',
    tags: ['Lambda', 'RDS Proxy', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-269',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you remove a bottleneck from a read-heavy API?',
    hint: 'In order of cheapness.',
    back: 'Work outward: <strong>edge caching</strong> at CloudFront for anything cacheable, then an <strong>application cache</strong> (ElastiCache or DAX), then <strong>read replicas</strong> with the read path routed to them, then query and index tuning. Adding replicas before caching moves the cost without reducing the work, and each layer needs an invalidation story.',
    tags: ['Caching', 'Read Replicas', 'Performance']
  },
  {
    id: 'aws-sap-fc-270',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you provide evidence that a control is effective?',
    hint: 'Continuous, not annual.',
    back: 'Instrument the control: a <strong>Config rule with a compliance history</strong>, a Security Hub standard score over time, or <strong>Audit Manager</strong> collecting evidence against a named framework — so you can show it was effective <em>throughout</em> the period, not on the day of the audit. Add an alarm on non-compliance so gaps are incidents rather than findings.',
    tags: ['Config', 'Audit Manager', 'Compliance']
  },
  {
    id: 'aws-sap-fc-271',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut the cost of chatty NAT gateway traffic?',
    hint: 'Most of it should not be there.',
    back: 'Add <strong>gateway endpoints for S3 and DynamoDB</strong> (free) and <strong>interface endpoints</strong> for the AWS services you call most, so that traffic never touches NAT and its per-GB processing charge. Then check for chatty cross-AZ paths and, for pure egress workloads, consider whether a public subnet with strict security groups is more appropriate.',
    tags: ['NAT Gateway', 'VPC Endpoints', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-272',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate Active Directory dependencies?',
    hint: 'Trust, extend, or replace.',
    back: 'Three patterns: <strong>AD Connector</strong> to keep authenticating on premises, <strong>AWS Managed Microsoft AD with a forest trust</strong> so AWS resources use existing identities while the directory lives in AWS, or a <strong>resource forest</strong> for AWS-only objects. Replacing AD entirely with Identity Center is a separate, larger project — do not couple it to a migration wave.',
    tags: ['Directory Service', 'Active Directory', 'Migration']
  },
  {
    id: 'aws-sap-fc-273',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you handle per-server or per-core licensing on AWS?',
    hint: 'Track it, and control placement.',
    back: 'Use <strong>License Manager</strong> to define rules and count entitlements, and enforce them at launch. Where the vendor licenses by physical core or requires dedicated hardware, use <strong>Dedicated Hosts</strong> with host affinity — which also enables BYOL for Windows and some Oracle terms. Check the vendor\'s cloud mobility terms before assuming the licence travels.',
    tags: ['License Manager', 'Dedicated Hosts', 'Licensing']
  },
  {
    id: 'aws-sap-fc-274',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is App2Container for?',
    hint: 'Containerise without the source.',
    back: 'It analyses a <strong>running Java or .NET application</strong>, generates a Dockerfile and image, and produces ECS, EKS or App Runner deployment artefacts plus a CI/CD pipeline — so a legacy app can be replatformed onto containers <em>without a source-level rewrite</em>. It is the tooling behind the "containerise without rewriting" answer.',
    tags: ['App2Container', 'Containers', 'Replatform']
  },
  {
    id: 'aws-sap-fc-275',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you sequence a database and application move?',
    hint: 'Three orders, three risk profiles.',
    back: '<strong>Database first</strong> with the app on premises pointing at it — only viable if latency tolerates it. <strong>App first</strong> reading back to the on-premises database — the same problem mirrored. <strong>Both together in one cutover window</strong> with CDC keeping the target current — usually the right answer for a chatty pair, and why dependency grouping drives wave design.',
    tags: ['Migration Waves', 'DMS', 'Cutover']
  }
];

export default AWS_SAP_FLASHCARDS;
