export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-201',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Where should a shared services VPC sit in a landing zone?',
    hint: 'Spoke, not hub.',
    back: 'As a <strong>spoke attached to the Transit Gateway</strong>, in its own account, holding the things every workload consumes — directory services, private CA, artifact repositories, monitoring collectors, DNS Resolver endpoints. Keep the <strong>TGW itself in the network account</strong> and share it with RAM, so shared services can be patched without touching the hub.',
    tags: ['Landing Zone', 'Shared Services', 'Networking']
  },
  {
    id: 'aws-sap-fc-202',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you control which AWS services teams may use?',
    hint: 'Allow-list at the OU.',
    back: 'An <strong>SCP with an allow-list of service namespaces</strong> attached to the workload OU, so anything not explicitly permitted is outside the account\'s maximum permissions. Pair it with a lightweight exception process (move the account, or amend the OU policy) and <strong>Config rules</strong> to detect what teams are actually trying to use.',
    tags: ['Organizations', 'SCP', 'Governance']
  },
  {
    id: 'aws-sap-fc-203',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you enforce a tag before the resource exists?',
    hint: 'Request-time conditions.',
    back: 'A policy condition on <strong><code>aws:RequestTag/&lt;key&gt;</code></strong> plus <strong><code>aws:TagKeys</code></strong> denies the create call unless the tag is supplied — that is prevention. A <em>tag policy</em> governs permitted values and reports compliance, and <em>Config</em> detects untagged resources after the fact. Use all three: deny at creation, constrain values, detect drift.',
    tags: ['IAM', 'Tagging', 'Governance']
  },
  {
    id: 'aws-sap-fc-204',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you give one team access to another team\'s SQS queue?',
    hint: 'Resource policy, no role needed.',
    back: 'Attach a <strong>queue policy</strong> naming the consumer\'s role or account as principal, scoped to the specific actions — cross-account access to a resource with its own policy needs no role assumption at all. Keep it tight with <code>aws:PrincipalOrgID</code>, and remember the <strong>KMS key policy</strong> must also allow the consumer if the queue is encrypted.',
    tags: ['SQS', 'Cross-Account', 'Resource Policies']
  },
  {
    id: 'aws-sap-fc-205',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you delegate network administration safely?',
    hint: 'Separate who builds from who connects.',
    back: 'Keep <strong>VPCs, TGW attachments and route tables in a network account</strong> administered by the network team, and give workload teams only <em>shared subnets</em> via RAM — they launch resources but cannot change routing. Back it with an SCP denying <code>ec2:CreateRoute</code>, gateway attachment and peering in workload accounts.',
    tags: ['Networking', 'RAM', 'Delegation']
  },
  {
    id: 'aws-sap-fc-206',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you aggregate security findings without losing account context?',
    hint: 'Security Hub keeps the metadata.',
    back: '<strong>Security Hub in the delegated administrator account</strong> ingests findings from every member in the normalised <strong>ASFF</strong> format, which retains account ID, Region, resource ARN and severity — so you can route to the owning team rather than triaging a flat list. Add <strong>automation rules</strong> to suppress known-accepted findings and enrich severity.',
    tags: ['Security Hub', 'ASFF', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-207',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you trace an unexpected change back to a person?',
    hint: 'Two identity fields.',
    back: 'In the CloudTrail event, <strong><code>userIdentity.sessionContext</code></strong> carries the role and the <strong>session name</strong> — which, with federation, is the human\'s identifier. Enforce that by requiring <code>sts:RoleSessionName</code> and <strong>session tags</strong>, and by banning shared IAM users. Config then shows <em>what</em> changed; CloudTrail shows <em>who</em>.',
    tags: ['CloudTrail', 'Attribution', 'Auditing']
  },
  {
    id: 'aws-sap-fc-208',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Aurora Serverless v2 — what does it change?',
    hint: 'ACUs, in place, in fractions.',
    back: 'Capacity scales in fine-grained <strong>Aurora Capacity Units</strong> in place, in under a second, from a configured minimum to maximum — and unlike v1 it supports <strong>Multi-AZ, read replicas, Global Database and mixed clusters</strong> with provisioned instances. Right for spiky or unpredictable load; a steady 24/7 baseline is usually cheaper provisioned.',
    tags: ['Aurora', 'Serverless', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-209',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'DynamoDB global tables — what do you give up?',
    hint: 'Multi-writer means conflicts.',
    back: 'You get multi-Region, multi-active replication with single-digit-millisecond local reads and writes. You give up strong consistency across Regions, and conflicts resolve <strong>last-writer-wins by timestamp</strong> — so any workload where two Regions can update the same item needs either partitioning by Region or application-level reconciliation.',
    tags: ['DynamoDB', 'Global Tables', 'Consistency']
  },
  {
    id: 'aws-sap-fc-210',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve two consistency requirements from one store?',
    hint: 'Split the read path.',
    back: 'Route <strong>authoritative reads to the primary with strongly consistent reads</strong> (DynamoDB <code>ConsistentRead</code>, or the Aurora writer), and everything else to replicas or a cache. Where the split is large, adopt <strong>CQRS</strong>: one write model, purpose-built read projections fed by streams. Make the choice explicit per use case rather than defaulting the whole application.',
    tags: ['Consistency', 'CQRS', 'Architecture']
  },
  {
    id: 'aws-sap-fc-211',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you isolate tenants in a shared data plane?',
    hint: 'Silo, pool, or bridge.',
    back: '<strong>Silo</strong> — separate stack or account per tenant: strongest isolation, highest cost. <strong>Pool</strong> — shared infrastructure with tenant partitioning enforced by <strong>dynamically scoped IAM policies and session tags</strong> (leading-key conditions on DynamoDB, prefix conditions on S3). <strong>Bridge</strong> — pooled compute, siloed data for the customers who demand it.',
    tags: ['Multi-Tenancy', 'SaaS', 'Isolation']
  },
  {
    id: 'aws-sap-fc-212',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Where do you put business logic at the edge?',
    hint: 'Two runtimes, very different limits.',
    back: '<strong>CloudFront Functions</strong> — sub-millisecond, JavaScript, viewer request/response only, no network access; for header rewrites, redirects, URL normalisation and cheap token checks at massive scale. <strong>Lambda@Edge</strong> — full Node/Python runtime, origin events too, can call other services; use it when you need a network call or a larger dependency.',
    tags: ['CloudFront', 'Edge Computing', 'Lambda@Edge']
  },
  {
    id: 'aws-sap-fc-213',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle very large uploads to S3?',
    hint: 'Split it, and do not proxy it.',
    back: '<strong>Multipart upload</strong> — required above 5 GB, recommended above 100 MB, gives parallelism and per-part retry. Have clients upload <em>directly</em> with <strong>pre-signed URLs</strong>, optionally via <strong>S3 Transfer Acceleration</strong> for distant users. Always add a lifecycle rule to <strong>abort incomplete multipart uploads</strong>, or you pay for invisible parts forever.',
    tags: ['S3', 'Multipart Upload', 'Performance']
  },
  {
    id: 'aws-sap-fc-214',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design a long-running workflow with human approval?',
    hint: 'Do not hold a compute thread.',
    back: '<strong>Step Functions Standard</strong> with the <code>waitForTaskToken</code> pattern: the state machine pauses (up to a year) while a task token sits with the approver, and resumes on <code>SendTaskSuccess</code>. Nothing is billed for waiting, the state is durable and inspectable, and timeouts and escalation are modelled as states rather than cron jobs.',
    tags: ['Step Functions', 'Orchestration', 'Task Token']
  },
  {
    id: 'aws-sap-fc-215',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make sense of a slow multi-service request?',
    hint: 'Trace first, then the one hop.',
    back: 'Start with the <strong>X-Ray service map</strong> to find which hop owns the latency, then look at that service\'s own signals — Performance Insights for a database, queue age for async work, Contributor Insights for a hot key. Add a <strong>correlation ID propagated through every hop and into logs</strong>, or you cannot join traces to log lines.',
    tags: ['X-Ray', 'Tracing', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-216',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why does a cache sometimes make latency worse?',
    hint: 'Low hit rate plus an extra hop.',
    back: 'Every miss now pays the <strong>cache round trip plus the origin</strong>, so with a poor hit rate you have added latency and cost for nothing. Causes: keys too specific, TTL too short, cache smaller than the working set, or a <strong>thundering herd</strong> on expiry. Measure hit rate and evictions first; fix the key design before adding nodes.',
    tags: ['Caching', 'Performance', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-217',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you verify that backups can actually be restored?',
    hint: 'An untested backup is a hope.',
    back: 'Schedule an <strong>automated restore test</strong> — AWS Backup restore testing plans do this natively — into an isolated account, then run <strong>application-level validation</strong> (row counts, a synthetic transaction), and record the measured <strong>restore time against the stated RTO</strong>. Alarm when a test fails or has not run. Backup success metrics alone prove nothing.',
    tags: ['AWS Backup', 'Restore Testing', 'Resilience']
  },
  {
    id: 'aws-sap-fc-218',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you shorten recovery time for a very large volume?',
    hint: 'The first read is the slow part.',
    back: 'A volume restored from a snapshot lazy-loads blocks, so the first read of each block is slow. Use <strong>EBS Fast Snapshot Restore</strong> for fully-initialised volumes (per snapshot, per AZ, charged hourly), or pre-warm by reading the volume. Better still, avoid the restore: keep a <strong>warm standby with replication</strong> when the RTO is tight.',
    tags: ['EBS', 'Fast Snapshot Restore', 'Recovery']
  },
  {
    id: 'aws-sap-fc-219',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut the cost of an idle development fleet?',
    hint: 'Nights and weekends are two thirds of the week.',
    back: '<strong>Stop them on a schedule</strong> — EventBridge Scheduler plus SSM Automation, or Instance Scheduler — which alone saves roughly 65% of a weekday-only workload. Then right-size, move to <strong>Spot</strong> for stateless dev, use <strong>Aurora Serverless v2 or RDS stop</strong> for databases, and clean up unattached volumes and idle load balancers.',
    tags: ['Cost Optimization', 'Scheduling', 'Development']
  },
  {
    id: 'aws-sap-fc-220',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce toil in an on-call rotation?',
    hint: 'Delete alerts, then automate.',
    back: 'Audit every page for <strong>actionability</strong> and delete or downgrade the ones nobody acts on; alarm on symptoms with <strong>composite alarms</strong> to collapse cascades. Then automate the top repeated responses as <strong>SSM runbooks triggered by the alarm</strong>, and feed incident reviews into a backlog with owners — otherwise the same page returns next month.',
    tags: ['Operations', 'Alert Fatigue', 'Automation']
  },
  {
    id: 'aws-sap-fc-221',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you move 600 TB over a constrained circuit?',
    hint: 'Split history from the delta.',
    back: 'Ship the <strong>bulk history on Snowball Edge devices</strong> and move only the <strong>ongoing delta over the network</strong> with DataSync or CDC, so the circuit carries what it can. Sequence it so the delta window is short, verify with checksums, and keep the source authoritative until validation passes.',
    tags: ['Snowball', 'DataSync', 'Data Transfer']
  },
  {
    id: 'aws-sap-fc-222',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you handle data gravity in a phased migration?',
    hint: 'Move the data last, or first — never halfway.',
    back: 'Either keep the database on premises and move stateless tiers first (accepting hybrid latency, measured not assumed), or move the <strong>data first with CDC replication</strong> and let applications follow. What fails is splitting a chatty application from its database <em>across the link</em>. Group by dependency and cut over the tightly-coupled set together.',
    tags: ['Data Gravity', 'Migration Waves', 'Latency']
  },
  {
    id: 'aws-sap-fc-223',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What breaks when an application hard-codes IP addresses?',
    hint: 'Everything elastic.',
    back: 'Replacement, scaling and failover all change addresses, so hard-coded IPs break the moment the environment behaves normally. Fix with <strong>DNS and service discovery</strong> (Cloud Map, private hosted zones, load balancer names). Where a rewrite is impossible, <strong>static private addressing</strong> or an NLB with fixed IPs buys time — but it is debt, not a solution.',
    tags: ['Migration', 'Service Discovery', 'Legacy']
  },
  {
    id: 'aws-sap-fc-224',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload with a tight latency budget to the user?',
    hint: 'Measure the whole path first.',
    back: 'Baseline the <em>current</em> end-to-end latency, then decide by distance: an in-country <strong>Region</strong>, a <strong>Local Zone</strong> for metro users, <strong>Outposts</strong> when it must stay on site, plus <strong>Global Accelerator or CloudFront</strong> to shorten the internet path. Keep chatty components together, and stage the move so one hop changes at a time.',
    tags: ['Latency', 'Local Zones', 'Migration']
  },
  {
    id: 'aws-sap-fc-225',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is the Migration Acceleration Program?',
    hint: 'Method plus funding.',
    back: 'AWS\'s structured programme: <strong>assess</strong> (Migration Evaluator business case, readiness assessment), <strong>mobilise</strong> (landing zone, skills, migration plan, a pilot), <strong>migrate and modernise</strong> at scale — with partner engagement and <strong>funding or credits tied to milestones</strong>. Its main value to an architect is the sequencing discipline it imposes.',
    tags: ['MAP', 'Migration', 'Programme']
  }
];

export default AWS_SAP_FLASHCARDS;
