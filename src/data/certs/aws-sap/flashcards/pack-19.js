export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-451',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you connect a VPC to many SaaS consumers?',
    hint: 'You are the provider now.',
    back: 'Publish an <strong>endpoint service</strong> behind an NLB and let each consumer create an interface endpoint — you accept or auto-accept connections, see them individually, and can revoke one without affecting the rest. Consumers need no route changes and <strong>overlapping CIDRs do not matter</strong>, which is what makes PrivateLink the standard SaaS delivery pattern.',
    tags: ['PrivateLink', 'SaaS', 'Networking']
  },
  {
    id: 'aws-sap-fc-452',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you design network access for a vendor\'s managed service in your VPC?',
    hint: 'Least privilege applies to networks too.',
    back: 'Give it a <strong>dedicated subnet and security group</strong> with egress only to what it needs, no route to production data paths, and access to AWS APIs through <strong>VPC endpoints with endpoint policies</strong> rather than open internet. Grant its role narrowly, require <code>sts:ExternalId</code>, and log its activity so the vendor\'s blast radius is visible.',
    tags: ['Third Party', 'VPC', 'Security']
  },
  {
    id: 'aws-sap-fc-453',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you share subnets instead of duplicating VPCs?',
    hint: 'RAM, and know who owns what.',
    back: 'Share subnets with <strong>RAM</strong>: the owner keeps the VPC, route tables, gateways, NACLs and flow logs; participants launch resources and manage their own security groups. It saves address space and NAT cost and centralises routing — but participants cannot change the network, which is exactly why platform teams like it.',
    tags: ['RAM', 'VPC Sharing', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-454',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you scale a Direct Connect estate?',
    hint: 'Resilience model first, then aggregation.',
    back: 'For high resilience use <strong>two connections at two separate DX locations</strong> (AWS\'s recommendation for critical workloads), with <strong>LAGs</strong> to aggregate bandwidth at a location and a <strong>DX gateway plus Transit Gateway</strong> so many VPCs share the circuits. Add a VPN backup, and test failover by shutting a BGP session rather than assuming.',
    tags: ['Direct Connect', 'Resilience', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-455',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you size a landing zone for future growth?',
    hint: 'Account vending and address space.',
    back: 'Assume the account count grows by an order of magnitude: automate <strong>account vending</strong> from day one, reserve <strong>IPAM address space</strong> per Region and environment with room for acquisitions, design OUs by control need, and keep the baseline in code. Retrofitting automation onto 300 hand-made accounts is the expensive alternative.',
    tags: ['Landing Zone', 'IPAM', 'Scalability']
  },
  {
    id: 'aws-sap-fc-456',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you extend an address plan that has run out?',
    hint: 'Secondary CIDRs, then endpoints.',
    back: 'Add <strong>secondary CIDR blocks to the VPC</strong> and create subnets in them — the simplest fix, though the new ranges must not overlap anything reachable. Where you have exhausted RFC 1918 space, use <strong>non-routable CGNAT space (100.64.0.0/10)</strong> for internal-only subnets, adopt <strong>IPv6</strong>, and cut demand by sharing subnets and using PrivateLink instead of peering.',
    tags: ['VPC', 'CIDR', 'IPAM']
  },
  {
    id: 'aws-sap-fc-457',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you diagnose packet loss on a hybrid path?',
    hint: 'Work outwards from the VPC.',
    back: 'Check <strong>VPC Flow Logs</strong> for rejects, <strong>Reachability Analyzer</strong> for a configuration-level path check, <strong>Network Access Analyzer</strong> for unintended paths, and the <strong>DX or VPN CloudWatch metrics</strong> (BGP state, bits per second, tunnel status) for the link itself. Then MTU: an unadjusted 9001-byte MTU across a 1500-byte tunnel causes exactly this symptom.',
    tags: ['Flow Logs', 'Reachability Analyzer', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-458',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a pattern for multi-step file processing?',
    hint: 'Event in, workflow after.',
    back: '<strong>S3 event or EventBridge</strong> triggers a <strong>Step Functions</strong> execution that orchestrates the steps with retries, error branches and a <strong>Map state for per-item fan-out</strong> (distributed map for very large sets). Chaining Lambdas directly leaves no place that knows the overall status, and nowhere to resume a partial failure.',
    tags: ['Step Functions', 'S3', 'Orchestration']
  },
  {
    id: 'aws-sap-fc-459',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle bursty report generation?',
    hint: 'Accept fast, produce slowly.',
    back: 'Accept the request and return a <strong>job id immediately</strong>, queue the work, and have a bounded pool of workers generate the report to <strong>S3, notifying the user with a pre-signed URL</strong>. This keeps the API latency flat under a burst, caps the load on the data store, and gives natural retry — where synchronous generation times out and blocks everything.',
    tags: ['SQS', 'Asynchronous', 'S3']
  },
  {
    id: 'aws-sap-fc-460',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you pick a pattern for scheduled data export?',
    hint: 'Managed export beats a query loop.',
    back: 'Prefer the service\'s own export: <strong>DynamoDB export to S3</strong> (no read capacity consumed), <strong>RDS or Aurora snapshot export to S3 in Parquet</strong>, or <strong>Redshift UNLOAD</strong>. Schedule with EventBridge Scheduler. A cron job paginating through a table consumes production capacity and produces an inconsistent point-in-time view.',
    tags: ['DynamoDB', 'S3', 'Data Export']
  },
  {
    id: 'aws-sap-fc-461',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you filter events without writing routing code?',
    hint: 'The bus does it declaratively.',
    back: '<strong>EventBridge event patterns</strong> match on the payload — prefix, numeric range, exists, anything-but — and route only matching events to each target, with <strong>input transformers</strong> to reshape before delivery. For SNS, <strong>subscription filter policies</strong> match on message attributes. Both remove the Lambda that existed only to look at an event and decide where it goes.',
    tags: ['EventBridge', 'Filtering', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-462',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you pick a pattern for request validation?',
    hint: 'Reject early, cheaply.',
    back: 'Validate structure at the edge with an <strong>API Gateway request model</strong> (REST APIs) or a schema check in the handler\'s first lines, so malformed requests never reach business logic or a database. Keep <strong>business-rule validation in the service</strong> that owns the invariant. WAF handles malicious shapes; neither replaces the other.',
    tags: ['API Gateway', 'Validation', 'Security']
  },
  {
    id: 'aws-sap-fc-463',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design around an eventually consistent read?',
    hint: 'Do not read back what you just wrote.',
    back: 'Return the <strong>value you wrote</strong> from the write path rather than re-reading, use a <strong>strongly consistent read</strong> for the few paths that need it, or make the UI optimistic and reconcile. Where a downstream consumer must see the write, pass the data <strong>in the event</strong> instead of a pointer it will immediately dereference.',
    tags: ['Consistency', 'DynamoDB', 'Architecture']
  },
  {
    id: 'aws-sap-fc-464',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design a distributed counter?',
    hint: 'One row is a hot partition.',
    back: 'Shard it: write to <strong>one of N sub-counters keyed by a random suffix</strong> and sum on read, which trades read cost for write throughput. Where exact real-time totals are not required, <strong>aggregate from a stream</strong> (Kinesis into a periodic rollup) instead. A single DynamoDB item or relational row caps you at its per-item write limit.',
    tags: ['DynamoDB', 'Sharding', 'Counters']
  },
  {
    id: 'aws-sap-fc-465',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a Route 53 policy for a gradual release?',
    hint: 'Weights, with a caveat.',
    back: '<strong>Weighted routing</strong> shifts a percentage to the new stack, and combining it with health checks gives automatic withdrawal. The caveat is that <strong>DNS is coarse and TTL-bound</strong> — clients cache, and the split is per resolver, not per request. For fine-grained, instant control use <strong>ALB weighted target groups</strong> or CodeDeploy canary instead.',
    tags: ['Route 53', 'Canary', 'Release']
  },
  {
    id: 'aws-sap-fc-466',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make a multi-account deployment auditable?',
    hint: 'Who deployed what, where, when.',
    back: 'Deploy only through a pipeline with <strong>per-account deployment roles</strong> assumed from a central account, so every change carries an identity in <strong>CloudTrail with the session name</strong>. Record the artefact version and commit in the stack\'s tags or outputs, and use <strong>StackSet operation history plus drift detection</strong> as the evidence trail.',
    tags: ['StackSets', 'Auditing', 'CI/CD']
  },
  {
    id: 'aws-sap-fc-467',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you remove a bottleneck in a deployment pipeline?',
    hint: 'Measure the stages first.',
    back: 'Instrument stage durations, then attack the top one: <strong>cache dependencies and Docker layers</strong>, parallelise tests by shard, move slow end-to-end suites off the critical path into a post-deploy canary gate, and use <strong>larger or Graviton build fleets</strong>. Also count the wait time in approvals, which is often larger than all the compute.',
    tags: ['CI/CD', 'CodeBuild', 'Lead Time']
  },
  {
    id: 'aws-sap-fc-468',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you speed up a pipeline that waits on approvals?',
    hint: 'Approve classes of change, not instances.',
    back: 'Reduce the number of changes that need a human: <strong>pre-approve low-risk change classes</strong> with automated policy checks, make the risky ones smaller and more frequent, and replace manual sign-off with <strong>automated gates plus a canary and auto-rollback</strong>. Keep approval where a human genuinely adds judgement, such as a data migration.',
    tags: ['CI/CD', 'Change Management', 'Lead Time']
  },
  {
    id: 'aws-sap-fc-469',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you remove a single point of failure in a pipeline?',
    hint: 'Including the pipeline itself.',
    back: 'Identify the parts with no redundancy — a single build host, one artefact store in one Region, a self-hosted runner, credentials only one person holds — and make each replaceable: <strong>managed build compute, cross-Region artefact replication, and infrastructure-as-code for the pipeline</strong>. Then confirm you can deploy when the pipeline is down.',
    tags: ['CI/CD', 'Resilience', 'Single Point of Failure']
  },
  {
    id: 'aws-sap-fc-470',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you prevent an expensive mistake from recurring?',
    hint: 'A guardrail, not a reminder.',
    back: 'Convert the lesson into a <strong>machine-enforced control</strong>: an SCP or RCP that makes the action impossible, a Config rule with auto-remediation, a <strong>CloudFormation Hook or proactive control</strong> that blocks it before deployment, or a Budget action. Documentation and training decay; a guardrail applies to the next engineer who has never heard the story.',
    tags: ['Guardrails', 'SCP', 'Operational Excellence']
  },
  {
    id: 'aws-sap-fc-471',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the cost of development data?',
    hint: 'Do not clone production.',
    back: 'Use a <strong>subset plus synthetic or masked data</strong> rather than a full copy — smaller instances, shorter retention, no multi-AZ, and no need to protect a production dataset in a low-trust environment. <strong>Aurora cloning</strong> gives a fast copy-on-write clone where you really need production shape, and it should still be short-lived.',
    tags: ['Cost Optimization', 'Development', 'Data Masking']
  },
  {
    id: 'aws-sap-fc-472',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you preserve audit continuity when retiring a source system?',
    hint: 'Export before you decommission.',
    back: 'Export the historical audit and transaction records to <strong>S3 with Object Lock and a documented schema</strong>, verify they are queryable (Athena) <em>before</em> the source is switched off, and record the chain of custody plus the exact cut-over timestamp. Confirm the retention period with compliance — it usually outlives the system by years.',
    tags: ['Auditing', 'Object Lock', 'Decommissioning']
  },
  {
    id: 'aws-sap-fc-473',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you name the right migration strategy for a given constraint?',
    hint: 'Let the constraint pick.',
    back: 'Contract keeps it in place → <strong>retain</strong>. No users → <strong>retire</strong>. VMware, fastest exit → <strong>relocate</strong>. Time pressure, no code change → <strong>rehost</strong>. Swap a component for a managed one → <strong>replatform</strong>. Commercial product available → <strong>repurchase</strong>. Requirement the current design cannot meet → <strong>refactor</strong>.',
    tags: ['Migration Strategies', '7 Rs', 'Assessment']
  },
  {
    id: 'aws-sap-fc-474',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you decide what success looks like for a migration?',
    hint: 'Agree it before wave one.',
    back: 'Write down measurable exit criteria with the business: <strong>data-centre exit date, run cost target, RTO/RPO met and tested, change lead time, incident rate, and workloads decommissioned</strong>. Baseline each one <em>before</em> you start, or you cannot demonstrate improvement and the programme is judged on anecdote.',
    tags: ['Migration', 'Business Outcomes', 'Metrics']
  },
  {
    id: 'aws-sap-fc-475',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose how to modernise a batch estate?',
    hint: 'Look at the scheduler, not the jobs.',
    back: 'Replace the scheduler and the fleet, not the business logic: <strong>AWS Batch on Spot</strong> for compute-heavy jobs, <strong>Step Functions plus EventBridge Scheduler</strong> for orchestration and dependencies, <strong>Glue or EMR Serverless</strong> for data transformation. Keep the job code initially so failures are attributable, then refactor the jobs that are genuinely expensive.',
    tags: ['AWS Batch', 'Step Functions', 'Modernization']
  }
];

export default AWS_SAP_FLASHCARDS;
