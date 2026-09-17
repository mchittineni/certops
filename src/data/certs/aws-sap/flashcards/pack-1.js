export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-1',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Service Control Policy vs. IAM identity policy — what does each one actually do?',
    hint: 'One is a filter, the other is a grant.',
    back: 'An <strong>SCP sets the maximum available permissions</strong> for an account — it never grants anything. An <strong>identity policy grants</strong>. An action succeeds only if the SCP allows it <em>and</em> an identity policy allows it. SCPs take no <code>Principal</code> element, apply to every IAM principal in a member account, and do not affect the management account or service-linked roles.',
    tags: ['Organizations', 'SCP', 'IAM']
  },
  {
    id: 'aws-sap-fc-2',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Resource Control Policy (RCP) vs. Service Control Policy (SCP)',
    hint: 'Which side of the request is being bounded?',
    back: '<strong>SCPs bound the principals</strong> in your accounts — they cannot restrict a caller from outside the organization. <strong>RCPs bound the resources</strong> in your accounts, evaluating on the resource side, so they constrain <em>anyone</em> reaching your S3 bucket or KMS key regardless of that resource\'s own policy. RCPs are what make a real data perimeter enforceable.',
    tags: ['Organizations', 'RCP', 'Data Perimeter']
  },
  {
    id: 'aws-sap-fc-3',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do SCPs inherit down an OU hierarchy?',
    hint: 'Intersection, not override.',
    back: 'Effective permissions are the <strong>intersection</strong> of every policy from the root to the account. A deny anywhere above an account is <strong>final</strong> — a child OU cannot restore the service. Attachment order is irrelevant, and proximity to the account confers no precedence. This is why you attach broad guardrails high and narrow exceptions by <em>moving accounts into a different OU</em>.',
    tags: ['Organizations', 'SCP', 'Inheritance']
  },
  {
    id: 'aws-sap-fc-4',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What can only the management account do?',
    hint: 'Structure, not services.',
    back: 'Creating and deleting <strong>OUs</strong>, <strong>moving accounts</strong> between them, <strong>inviting and removing</strong> accounts, enabling policy types, and enabling trusted access. None of this is delegable. Delegated administration covers the <em>integrated services</em> (GuardDuty, Config, Security Hub, Macie, StackSets), which is why security tooling should live outside the management account.',
    tags: ['Organizations', 'Management Account', 'Governance']
  },
  {
    id: 'aws-sap-fc-5',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Which condition keys build an organization data perimeter?',
    hint: 'Three "org" keys and one endpoint key.',
    back: '<code>aws:PrincipalOrgID</code> — only callers from my organization. <code>aws:ResourceOrgID</code> — my principals may only touch resources in my organization. <code>aws:PrincipalOrgPaths</code> — scope to an OU subtree. <code>aws:SourceVpce</code> / <code>aws:SourceVpc</code> — only through my VPC endpoints. Together they stop both <strong>unintended access</strong> and <strong>data exfiltration</strong>.',
    tags: ['IAM', 'Data Perimeter', 'Condition Keys']
  },
  {
    id: 'aws-sap-fc-6',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does an IAM Identity Center permission set become in a member account?',
    hint: 'It is materialised, not referenced.',
    back: 'A <strong>provisioned IAM role</strong> in each account the set is assigned to, carrying the policies the set defines. One permission set therefore delivers identical access across many accounts. Group membership decides <em>who</em> gets an assignment; the set decides <em>what</em> the assignment contains.',
    tags: ['IAM Identity Center', 'Permission Sets', 'Federation']
  },
  {
    id: 'aws-sap-fc-7',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Permissions boundary vs. session policy vs. SCP — which can grant?',
    hint: 'None of them.',
    back: 'All three only <strong>subtract</strong>. A <strong>permissions boundary</strong> caps what an identity policy can achieve for a principal (used to let teams create roles safely). A <strong>session policy</strong> caps a single assumed-role session. An <strong>SCP</strong> caps an account. Effective permission is the intersection of every applicable layer, plus at least one explicit allow.',
    tags: ['IAM', 'Permissions Boundary', 'Policy Evaluation']
  },
  {
    id: 'aws-sap-fc-8',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Application Load Balancer vs. Network Load Balancer vs. Gateway Load Balancer',
    hint: 'Layer 7, layer 4, and layer 3 bump-in-the-wire.',
    back: '<strong>ALB</strong> — HTTP/HTTPS, routes on host, path, header, query; target types instance, IP, Lambda. <strong>NLB</strong> — TCP/UDP/TLS, ultra-low latency, static IP per AZ, preserves the client address. <strong>GWLB</strong> — transparently steers traffic through third-party inspection appliances using GENEVE encapsulation, with endpoints in each spoke VPC.',
    tags: ['ELB', 'Networking', 'Load Balancing']
  },
  {
    id: 'aws-sap-fc-9',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Reserved concurrency vs. provisioned concurrency in Lambda',
    hint: 'One is a limit, the other is warm capacity.',
    back: '<strong>Reserved</strong> concurrency is a ceiling <em>and</em> a floor: the function never exceeds it, and that slice is carved out of the account pool so nothing else can take it. <strong>Provisioned</strong> concurrency keeps execution environments initialised to remove cold starts, and is billed for whether used or not. They solve different problems and can be combined.',
    tags: ['Lambda', 'Concurrency', 'Serverless']
  },
  {
    id: 'aws-sap-fc-10',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Step Functions Standard vs. Express workflows',
    hint: 'Durability versus event rate.',
    back: '<strong>Standard</strong> — exactly-once, up to 1 year duration, full durable execution history, priced <em>per state transition</em>. <strong>Express</strong> — at-least-once, 5-minute maximum, history to CloudWatch Logs, priced by <em>invocation count and duration</em>. Choose Express for high-volume short-lived orchestration; Standard where you need auditability and long-running human steps.',
    tags: ['Step Functions', 'Orchestration', 'Serverless']
  },
  {
    id: 'aws-sap-fc-11',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'EventBridge event bus vs. SNS topic — when does the bus earn its place?',
    hint: 'Look at the payload.',
    back: 'An <strong>EventBridge rule matches on the event body</strong> and routes only what fits the pattern, with schema registry, archive and replay, and 20+ targets without code. <strong>SNS</strong> is higher-throughput, lower-latency pub/sub with message filtering on <em>attributes</em> rather than the body, plus SMS/email/mobile push. Fan-out alone does not justify the bus.',
    tags: ['EventBridge', 'SNS', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-12',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'SQS standard vs. FIFO — what do you give up and gain?',
    hint: 'Throughput against order.',
    back: '<strong>Standard</strong> — nearly unlimited throughput, at-least-once delivery, <em>best-effort ordering</em>. <strong>FIFO</strong> — strict order within a <code>MessageGroupId</code>, exactly-once processing via a 5-minute deduplication window, 300 TPS per API call or 3,000 with batching (much higher in high-throughput mode). Ordering is per group, so the group key is your parallelism unit.',
    tags: ['SQS', 'Messaging', 'Ordering']
  },
  {
    id: 'aws-sap-fc-13',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What makes a good DynamoDB partition key?',
    hint: 'Cardinality, not query convenience.',
    back: '<strong>High cardinality and even access</strong>. A low-cardinality attribute like <code>status</code> creates hot partitions that cap throughput. Do not pick a key to match a filter — that is what GSIs are for. Adaptive capacity smooths uneven traffic but cannot rescue a fundamentally bad key. For time-series, add a <em>write-sharding suffix</em> to avoid a hot current partition.',
    tags: ['DynamoDB', 'Partition Key', 'Data Modeling']
  },
  {
    id: 'aws-sap-fc-14',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'S3 durability and consistency in one card',
    hint: 'Eleven nines, and no more eventual reads.',
    back: '<strong>99.999999999%</strong> durability in S3 Standard, from redundant storage across <em>at least three Availability Zones</em>; availability design target 99.99%. Since 2020 S3 gives <strong>strong read-after-write consistency</strong> for GET, PUT and LIST — new objects and overwrites, every Region, no extra cost and no performance penalty.',
    tags: ['S3', 'Durability', 'Consistency']
  },
  {
    id: 'aws-sap-fc-15',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Which CloudWatch alarm setting stops an empty queue paging on-call?',
    hint: 'Absent data is not a failure.',
    back: 'Set <strong>missing data treatment to <code>notBreaching</code></strong>. SQS publishes no <code>ApproximateAgeOfOldestMessage</code> data point when the queue is empty, so the default <code>missing</code> drives the alarm to INSUFFICIENT_DATA. Lengthening the period only delays it. The other values are <code>breaching</code>, <code>ignore</code> (hold the last state) and <code>missing</code>.',
    tags: ['CloudWatch', 'Alarms', 'Alert Fatigue']
  },
  {
    id: 'aws-sap-fc-16',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Where do instance right-sizing recommendations come from?',
    hint: 'Analysis, not display.',
    back: '<strong>AWS Compute Optimizer</strong> analyses CloudWatch utilisation history per resource and recommends a better-fitting family and size (EC2, ASGs, EBS, Lambda, ECS on Fargate, RDS). Cost Explorer <em>displays</em> rightsizing recommendations but surfaces Compute Optimizer\'s analysis rather than generating it. Enable <strong>memory metrics</strong> via the CloudWatch agent for meaningful results.',
    tags: ['Compute Optimizer', 'Right-Sizing', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-17',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you turn a log line into an alarm?',
    hint: 'Logs are not metrics until you make them one.',
    back: 'A <strong>metric filter</strong> on the log group matches a pattern as events arrive and publishes a numeric CloudWatch metric; an alarm then watches that metric. A <em>subscription filter</em> forwards matching events to Lambda, Firehose or Kinesis for processing but produces no metric. An alarm can only ever watch a metric — never a log group directly.',
    tags: ['CloudWatch', 'Logs', 'Alarms']
  },
  {
    id: 'aws-sap-fc-18',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'gp2 vs. gp3 vs. io2 Block Express — how is performance bought?',
    hint: 'Coupled to size, or not.',
    back: '<strong>gp2</strong> — 3 IOPS per GiB, so performance is bought with capacity. <strong>gp3</strong> — 3,000 IOPS and 125 MB/s baseline <em>independent of size</em>, provision up to 16,000 IOPS; usually cheaper and the default choice. <strong>io2 Block Express</strong> — up to 256,000 IOPS, 4,000 MB/s, sub-millisecond latency, 99.999% durability, for tier-1 databases.',
    tags: ['EBS', 'Performance', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-19',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Savings Plans vs. Reserved Instances — which flexes where?',
    hint: 'Commit to spend or to shape.',
    back: '<strong>Compute Savings Plan</strong> — commit to $/hour; discount follows family, size, Region, OS, tenancy, <em>and</em> Fargate and Lambda. <strong>EC2 Instance SP</strong> — locked to one family in one Region. <strong>Standard RI</strong> — resize within a family only, but sellable in the Marketplace. <strong>Convertible RI</strong> — exchangeable for equal-or-greater value and equal-or-longer term.',
    tags: ['Savings Plans', 'Reserved Instances', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-20',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does enabling EC2 detailed monitoring change?',
    hint: 'Frequency, not breadth.',
    back: 'Instance metrics publish every <strong>1 minute</strong> instead of every 5, billed per instance. It does <em>not</em> add memory or disk-utilisation metrics — those are guest-level and need the <strong>CloudWatch agent</strong>. One-second granularity comes from custom high-resolution metrics, not from this setting.',
    tags: ['CloudWatch', 'EC2', 'Monitoring']
  },
  {
    id: 'aws-sap-fc-21',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Name the 7 Rs of migration.',
    hint: 'Two mean "do not migrate".',
    back: '<strong>Retire</strong> (switch off), <strong>Retain</strong>/revisit (leave in place), <strong>Relocate</strong> (VMware wholesale, no conversion), <strong>Rehost</strong> (lift and shift), <strong>Replatform</strong> (change part of the stack, keep the code), <strong>Repurchase</strong> (drop and shop to a different product), <strong>Refactor</strong> (rewrite). Cost and risk rise left to right.',
    tags: ['Migration Strategies', '7 Rs', 'Portfolio']
  },
  {
    id: 'aws-sap-fc-22',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What does DMS change data capture add to a full load?',
    hint: 'The source never stopped.',
    back: 'CDC reads the source <strong>transaction log</strong> and applies everything that happened from the moment the full load began, so the target converges with a source that kept taking writes — the basis of a near-zero-downtime cutover. Separately, <strong>data validation</strong> compares rows, and task <em>checkpoints</em> let a failed task resume without a full reload.',
    tags: ['DMS', 'CDC', 'Migration']
  },
  {
    id: 'aws-sap-fc-23',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Which service aggregates migration progress across tools?',
    hint: 'One portfolio view.',
    back: '<strong>AWS Migration Hub</strong>. MGN, DMS and partner tools report into it, giving one status view per application. <strong>Application Discovery Service</strong> feeds it inventory and dependency data (agentless collector for VMware, or an agent per server) but tracks no progress itself. Migration Hub also hosts <em>Refactor Spaces</em> and the strategy recommendations.',
    tags: ['Migration Hub', 'Discovery', 'Tracking']
  },
  {
    id: 'aws-sap-fc-24',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'When does physical transfer beat the network?',
    hint: 'Do the arithmetic before you argue.',
    back: 'Compute the transfer time: <strong>TB ÷ effective Gbps</strong>. A 500 Mbps link shared with production moves well under 50 TB a week, so 400 TB takes months. Snowball Edge (80 TB usable) or Snowmobile (100 PB) wins on any large one-off with a deadline. Remember <strong>Direct Connect takes weeks to provision</strong>, so it never rescues a near-term date.',
    tags: ['Snowball', 'Data Transfer', 'Migration']
  },
  {
    id: 'aws-sap-fc-25',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'DataSync vs. Storage Gateway — which do you pick?',
    hint: 'Move it, or keep serving it.',
    back: '<strong>DataSync</strong> is a transfer engine: scheduled or one-time copies between NFS/SMB/HDFS/object storage and S3, EFS or FSx, with integrity verification, and nothing left deployed afterwards. <strong>Storage Gateway</strong> is a permanent hybrid presence — File, Volume, or Tape gateway — that keeps giving on-premises systems local access to cloud-backed storage.',
    tags: ['DataSync', 'Storage Gateway', 'Hybrid']
  }
];

export default AWS_SAP_FLASHCARDS;
