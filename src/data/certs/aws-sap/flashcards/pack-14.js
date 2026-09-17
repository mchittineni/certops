export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-326',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you give developers safe production read access?',
    hint: 'Read-only is not harmless.',
    back: 'A <strong>time-bound, federated read-only role</strong> — but scope it: <code>ReadOnlyAccess</code> includes reading object and item <em>data</em>, so use <code>ViewOnlyAccess</code> or a custom policy that permits describe/list without <code>s3:GetObject</code> and <code>dynamodb:GetItem</code>. Prefer giving them <strong>logs, traces and dashboards</strong>, which is usually what they actually need.',
    tags: ['IAM', 'Least Privilege', 'Operations']
  },
  {
    id: 'aws-sap-fc-327',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you audit who can reach a sensitive role?',
    hint: 'Trust policies plus who can edit them.',
    back: 'Enumerate the role\'s <strong>trust policy principals</strong>, then everyone with an identity policy allowing <code>sts:AssumeRole</code> on it — and crucially everyone who can <strong>edit the trust policy</strong> (<code>iam:UpdateAssumeRolePolicy</code>), which is an indirect path in. <strong>IAM Access Analyzer</strong> and policy simulation answer this far faster than reading JSON by hand.',
    tags: ['IAM', 'Access Analyzer', 'Auditing']
  },
  {
    id: 'aws-sap-fc-328',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you enforce least privilege on a brand-new service role?',
    hint: 'Start from observed behaviour.',
    back: 'Run it in a non-production account with a broad-but-bounded policy, then use <strong>IAM Access Analyzer policy generation from CloudTrail activity</strong> to produce a policy from what it actually called. Refine with conditions and resource ARNs, attach a <strong>permissions boundary</strong>, and re-check with unused-access findings after a few weeks.',
    tags: ['IAM', 'Least Privilege', 'Access Analyzer']
  },
  {
    id: 'aws-sap-fc-329',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle personally identifiable data in logs?',
    hint: 'Stop it at the source, then detect.',
    back: 'Redact in the application and in the <strong>log agent or Firehose transform</strong> before delivery, use <strong>CloudWatch Logs data protection policies</strong> to mask known identifier patterns automatically, and scan storage with <strong>Macie</strong>. Set short retention on anything that might carry it, and treat a leak into logs as an incident, since logs fan out to many consumers.',
    tags: ['Logging', 'Macie', 'Privacy']
  },
  {
    id: 'aws-sap-fc-330',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you design data retention that satisfies two conflicting rules?',
    hint: 'Minimum and maximum at once.',
    back: 'Separate the data: a <strong>retain-for-seven-years</strong> obligation and a <strong>delete-on-request</strong> right coexist by keeping the regulated record set immutable (Object Lock) while <strong>personal identifiers live separately and can be deleted or crypto-shredded</strong> — destroy the per-subject KMS key and the data is unrecoverable. Document the lawful basis for each set.',
    tags: ['Retention', 'Object Lock', 'Compliance']
  },
  {
    id: 'aws-sap-fc-331',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you keep an audit trail of data access?',
    hint: 'Management events are not enough.',
    back: 'Enable <strong>CloudTrail data events</strong> for the relevant S3 prefixes, DynamoDB tables or Lambda functions — they are off by default and billed per event, so scope them by prefix rather than account-wide. Add <strong>S3 server access logs</strong> or <strong>CloudTrail Lake</strong> for queryable history, and deliver everything to the write-only log archive account.',
    tags: ['CloudTrail', 'Data Events', 'Auditing']
  },
  {
    id: 'aws-sap-fc-332',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between copying data and referencing it?',
    hint: 'Copies drift; references couple.',
    back: 'Reference (query in place via <strong>Lake Formation, Redshift data sharing, Athena federation</strong>) when the data is large, changes often, or must have one source of truth. Copy when the consumer needs <strong>a different shape, isolation from the producer\'s load, or independent availability</strong> — and then make the copy a derived projection you can rebuild, never hand-maintained.',
    tags: ['Data Architecture', 'Lake Formation', 'Data Sharing']
  },
  {
    id: 'aws-sap-fc-333',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design a tenant onboarding pipeline?',
    hint: 'Provisioning as code, from day one.',
    back: 'An automated flow that creates the tenant record, provisions <strong>only what the tier requires</strong> (pooled resources need a config row; siloed tiers need a stack or account via Control Tower Account Factory), seeds configuration, registers monitoring and cost tags, then runs a smoke test. Manual onboarding caps growth and guarantees per-tenant drift.',
    tags: ['SaaS', 'Multi-Tenancy', 'Automation']
  },
  {
    id: 'aws-sap-fc-334',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design tenant-aware logging?',
    hint: 'Tenant ID on every line.',
    back: 'Emit a <strong>tenant identifier as a structured field on every log, metric and trace</strong>, so you can slice noisy-neighbour investigations, per-tenant SLOs and cost attribution. Keep tenants in shared log groups with the field rather than a log group per tenant (which hits quotas), and be careful the field never carries personal data.',
    tags: ['Multi-Tenancy', 'Logging', 'Observability']
  },
  {
    id: 'aws-sap-fc-335',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you build a read-through cache correctly?',
    hint: 'Three failure modes to pre-empt.',
    back: 'Handle the <strong>thundering herd</strong> (single-flight locking or jittered TTLs so one key\'s expiry does not stampede the origin), <strong>negative caching</strong> so repeated misses on absent keys do not hammer the database, and a <strong>fail-open path</strong> so a cache outage degrades latency rather than availability. Then measure hit rate, not just node CPU.',
    tags: ['Caching', 'ElastiCache', 'Resilience']
  },
  {
    id: 'aws-sap-fc-336',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle a downstream partner that is unreliable?',
    hint: 'Buffer, bound, and be honest.',
    back: 'Accept the request, <strong>persist it, and respond immediately with a status reference</strong>; a worker drains the buffer with backoff, a circuit breaker, and a DLQ for permanent failures. Expose <strong>status to the caller</strong> so they can poll rather than retry blindly, and set a business rule for how long you keep trying before you give up visibly.',
    tags: ['Resilience', 'Asynchronous', 'Integration']
  },
  {
    id: 'aws-sap-fc-337',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design a queue consumer that cannot fall behind?',
    hint: 'Scale on the backlog, not on CPU.',
    back: 'Scale the consumer on <strong>queue depth or age of oldest message</strong> (a target-tracking policy on backlog-per-instance), cap concurrency to protect downstream, and alarm on <strong>age</strong> rather than depth — age is the metric that maps to customer impact. Then make sure the work is <em>shardable</em>, or one slow partition sets your ceiling regardless of consumer count.',
    tags: ['SQS', 'Auto Scaling', 'Backlog']
  },
  {
    id: 'aws-sap-fc-338',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle poison messages?',
    hint: 'Isolate, alert, replay.',
    back: 'Set <strong><code>maxReceiveCount</code> on a redrive policy</strong> so a repeatedly-failing message moves to a <strong>DLQ</strong> instead of blocking the queue and burning retries. Alarm on DLQ depth (it should normally be zero), inspect the payload, fix the handler, then <strong>redrive</strong> the messages back. Without a DLQ, one bad message can stall a FIFO group indefinitely.',
    tags: ['SQS', 'DLQ', 'Reliability']
  },
  {
    id: 'aws-sap-fc-339',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you alarm on what users experience?',
    hint: 'Outside-in, then inside-out.',
    back: 'Page on <strong>edge or client-side signals</strong>: ALB or CloudFront 5xx rate and p99 latency, canary success from multiple Regions, RUM error rate. These catch DNS, certificate, edge and capacity failures that internal metrics miss entirely. Keep internal metrics for <em>diagnosis</em>, and tie the page to an <strong>SLO burn rate</strong> rather than a raw count.',
    tags: ['Alerting', 'SLO', 'Observability']
  },
  {
    id: 'aws-sap-fc-340',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why might an alarm never fire during a real incident?',
    hint: 'Aggregation hides it.',
    back: 'Common causes: the statistic is an <strong>average that a partial failure cannot move</strong>, the period is too long, the metric <strong>stops being published</strong> so the alarm sits in INSUFFICIENT_DATA, the dimension is too coarse to see one tenant or AZ, or the threshold was set from a healthy week. Fix with percentiles, shorter periods, missing-data treatment and per-dimension alarms.',
    tags: ['CloudWatch', 'Alarms', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-341',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you backfill a metric nobody recorded?',
    hint: 'Usually from logs.',
    back: 'Derive it from data you already kept: <strong>Logs Insights or Athena over archived logs</strong>, ALB access logs in S3, or CloudTrail history — then publish the computed series with <code>PutMetricData</code> using explicit <strong>timestamps</strong> (CloudWatch accepts up to two weeks in the past). The durable lesson is to emit business metrics at the time, since alarms cannot be retroactive.',
    tags: ['CloudWatch', 'Logs Insights', 'Metrics']
  },
  {
    id: 'aws-sap-fc-342',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you prove a system tolerates the failures it claims to?',
    hint: 'A claim is not evidence.',
    back: 'Convert each resilience claim into a <strong>FIS experiment with a steady-state hypothesis and stop conditions</strong> — kill an AZ, throttle a dependency, fail a database over — and run it on a schedule, in production eventually. Track the measured RTO against the stated one with <strong>Resilience Hub</strong>, and treat a failed experiment as a defect.',
    tags: ['FIS', 'Resilience Hub', 'Chaos Engineering']
  },
  {
    id: 'aws-sap-fc-343',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle throttling discovered only at peak?',
    hint: 'Find the ceiling before your customers do.',
    back: 'Instrument <strong>throttle and error metrics per API and per quota</strong> with alarms well below the limit, then load-test to the real peak rather than an average. Mitigate with <strong>batching, caching, exponential backoff with jitter, and request sharding across accounts or Regions</strong>, and raise the quota in advance of a known event.',
    tags: ['Throttling', 'Service Quotas', 'Load Testing']
  },
  {
    id: 'aws-sap-fc-344',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find unused spend across many accounts?',
    hint: 'A checklist, run on a schedule.',
    back: 'Unattached EBS volumes and old snapshots, idle load balancers and NAT gateways, unassociated Elastic IPs, stopped instances still holding volumes, empty EKS node groups, over-retained logs, and <strong>incomplete multipart uploads</strong>. Find them with <strong>Trusted Advisor, Compute Optimizer and a CUR query</strong>, and automate the cleanup rather than running a one-off sweep.',
    tags: ['Cost Optimization', 'Trusted Advisor', 'Waste']
  },
  {
    id: 'aws-sap-fc-345',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you set up cost anomaly alerts teams will trust?',
    hint: 'Scope the monitor to the owner.',
    back: 'Create a <strong>monitor per team, service or cost category</strong> rather than one account-wide monitor, set a <strong>dollar threshold that matters to that team</strong>, and route alerts to the owning channel with the root-cause breakdown attached. A single noisy organization-wide monitor is ignored within a fortnight, which is worse than having none.',
    tags: ['Cost Anomaly Detection', 'FinOps', 'Alerting']
  },
  {
    id: 'aws-sap-fc-346',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload with strict change windows?',
    hint: 'Do the work outside the window.',
    back: 'Continuous replication is what makes this tractable: <strong>MGN or DMS CDC runs for weeks</strong>, and the window contains only the final sync, DNS change and validation. Rehearse with test instances until the runbook fits inside the window with margin, and pre-agree the <strong>abort time</strong> — the point at which you roll back rather than continue.',
    tags: ['MGN', 'Cutover', 'Change Management']
  },
  {
    id: 'aws-sap-fc-347',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you cut over a chatty application in waves?',
    hint: 'You usually cannot.',
    back: 'A chatty set has to move <strong>together</strong>, because splitting it puts every internal call across the hybrid link. If the set is too big for one window, first <strong>reduce the chatter</strong> — batch calls, add caching, introduce an API boundary — and only then split. Measure the actual call volume between components before promising a phased cutover.',
    tags: ['Migration Waves', 'Latency', 'Dependencies']
  },
  {
    id: 'aws-sap-fc-348',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you cut over DNS with a short rollback window?',
    hint: 'Lower the TTL first.',
    back: '<strong>Reduce the record TTL days in advance</strong> (to 60 seconds or less) so the change and any rollback propagate quickly, then use a <strong>weighted or failover policy</strong> to shift traffic gradually and shift it back instantly. Remember clients and some resolvers ignore TTLs, so keep the old endpoint serving until connections drain.',
    tags: ['Route 53', 'DNS', 'Cutover']
  },
  {
    id: 'aws-sap-fc-349',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you validate a database migration before cutover?',
    hint: 'Structure, rows, and behaviour.',
    back: 'Three layers: <strong>SCT assessment</strong> confirms the schema and code converted, <strong>DMS data validation</strong> compares rows continuously and reports mismatches, and an <strong>application test suite plus query-plan comparison</strong> confirms behaviour and performance. Row counts alone miss collation, time-zone, precision and index differences that surface as production bugs.',
    tags: ['DMS', 'Validation', 'Migration']
  },
  {
    id: 'aws-sap-fc-350',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you handle time-zone assumptions after a move?',
    hint: 'The host clock changed.',
    back: 'AWS instances default to <strong>UTC</strong>, so code that relied on a local system clock silently shifts — affecting batch boundaries, report cut-offs, scheduled jobs and stored timestamps. Audit for local-time assumptions, store <strong>UTC with an explicit offset</strong>, set the database time zone deliberately, and test month-end and daylight-saving transitions before cutover.',
    tags: ['Migration', 'Time Zones', 'Legacy']
  }
];

export default AWS_SAP_FLASHCARDS;
