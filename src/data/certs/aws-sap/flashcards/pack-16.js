export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-376',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you reserve capacity discounts across accounts?',
    hint: 'Sharing is on by default.',
    back: 'RI and Savings Plans discounts are <strong>shared across the organization by default</strong>, applied by the payer to whichever account has matching usage. Turn sharing <em>off</em> for an account that must keep its own commitment (a business unit with its own budget). Buy from the <strong>management account</strong> for maximum reach, and track utilisation centrally.',
    tags: ['Savings Plans', 'Consolidated Billing', 'FinOps']
  },
  {
    id: 'aws-sap-fc-377',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What is the scope of a Reserved Instance?',
    hint: 'Regional or zonal, and it matters.',
    back: '<strong>Regional</strong> RIs apply across AZs in a Region and give <em>instance size flexibility</em> within a family (Linux, default tenancy) but <strong>no capacity reservation</strong>. <strong>Zonal</strong> RIs are pinned to one AZ and <strong>do reserve capacity</strong>, with no size flexibility. Pick zonal only when you need the capacity guarantee.',
    tags: ['Reserved Instances', 'Capacity', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-378',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you choose the unit for cost allocation?',
    hint: 'Match it to a decision someone can make.',
    back: 'Allocate to whoever can <strong>change the spend</strong> — usually a team or product, not a cost centre in a finance hierarchy. Encode it as a mandatory tag enforced at creation, use <strong>Cost Categories</strong> to roll it up, and add a <strong>unit metric</strong> (cost per order, per tenant, per build) so a rising bill can be distinguished from a growing business.',
    tags: ['Cost Allocation', 'FinOps', 'Tagging']
  },
  {
    id: 'aws-sap-fc-379',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you pick the right support tier for a production estate?',
    hint: 'Response time and who you get.',
    back: '<strong>Business</strong> — 1-hour response on production-down, full Trusted Advisor, third-party software guidance; the practical minimum for production. <strong>Enterprise On-Ramp</strong> — 30 minutes on business-critical, pooled TAM. <strong>Enterprise</strong> — 15 minutes, a designated TAM, well-architected reviews, incident detection and response. Buy on the <strong>cost of an hour of downtime</strong>.',
    tags: ['AWS Support', 'Operations', 'Risk']
  },
  {
    id: 'aws-sap-fc-380',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What is the blast radius of a shared control plane?',
    hint: 'Ask what one mistake can reach.',
    back: 'Anything the control plane can change, it can break everywhere at once — a bad StackSet, a mis-scoped SCP, a pipeline with organization-wide credentials. Bound it: <strong>stage changes through OUs</strong>, use <strong>per-environment deployment roles</strong>, require approvals for organization-wide actions, and keep a manual path that does not depend on the automation you just broke.',
    tags: ['Blast Radius', 'StackSets', 'Governance']
  },
  {
    id: 'aws-sap-fc-381',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you recognise what belongs in the security account?',
    hint: 'Findings and response, not logs.',
    back: 'The <strong>delegated administrator consoles</strong> (GuardDuty, Security Hub, Config, Macie, Inspector, Detective), incident-response tooling and forensic roles, and the automation that reacts to findings. It does <strong>not</strong> hold the raw log archive — that is a separate write-only account — and it should not run workloads of its own.',
    tags: ['Landing Zone', 'Security', 'Account Design']
  },
  {
    id: 'aws-sap-fc-382',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between provisioned and on-demand throughput?',
    hint: 'Predictability, not size.',
    back: '<strong>On-demand</strong> when the pattern is unknown, spiky, or the workload is new — you pay a premium per request to avoid planning and throttling. <strong>Provisioned with auto scaling</strong> when there is a predictable baseline, which is materially cheaper and can be reserved. Start on-demand, observe for a month, then move the steady portion.',
    tags: ['DynamoDB', 'Capacity', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-383',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between provisioned and serverless analytics?',
    hint: 'Duty cycle.',
    back: 'A cluster you keep busy most of the day (Redshift provisioned, EMR on persistent clusters) is cheaper per query. <strong>Serverless</strong> — Redshift Serverless, EMR Serverless, Athena — wins on <strong>intermittent, unpredictable or bursty</strong> use because you pay nothing between queries. Compute the duty cycle before choosing; "serverless is cheaper" is only true below a threshold.',
    tags: ['Redshift', 'Athena', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-384',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you select a compute option for a long-running daemon?',
    hint: 'Lambda has a ceiling.',
    back: 'Lambda caps at <strong>15 minutes</strong>, so a persistent listener or long poll belongs on <strong>ECS or EKS as a long-running service</strong> (Fargate if you want no instances), or an EC2 instance in an ASG. If the work is event-driven but long, restructure it: Lambda triggers a <strong>Step Functions</strong> workflow or an ECS task rather than trying to stay alive.',
    tags: ['Lambda', 'ECS', 'Compute']
  },
  {
    id: 'aws-sap-fc-385',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you select a deployment strategy for a stateful service?',
    hint: 'Ordered, with a disruption budget.',
    back: 'Replace instances <strong>one at a time in a defined order</strong>, waiting for the replacement to rejoin and re-sync before continuing — StatefulSets with a <strong>pod disruption budget</strong> on EKS, or a one-at-a-time rolling policy on ECS. Never blue/green a quorum-based cluster wholesale, and verify the <strong>quorum survives</strong> each step.',
    tags: ['Deployment', 'Stateful', 'EKS']
  },
  {
    id: 'aws-sap-fc-386',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design for a predictable daily batch window?',
    hint: 'Buy capacity only for the window.',
    back: 'Scale up on a <strong>scheduled action</strong> ahead of the window and back to near zero afterwards, run the work on <strong>Spot via AWS Batch</strong> with checkpointing, and use <strong>on-demand capacity reservations</strong> only if the batch must not be interrupted. Keep the storage layer sized for the window\'s I/O, which is usually the real constraint.',
    tags: ['AWS Batch', 'Spot', 'Scheduling']
  },
  {
    id: 'aws-sap-fc-387',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design for a workload with unknown access patterns?',
    hint: 'Keep the options open.',
    back: 'Prefer stores that do not force an early commitment: <strong>S3 plus a query engine</strong>, or a relational engine where new queries are an index away, and <strong>on-demand capacity</strong> so you are not sizing a guess. Instrument heavily, then migrate the hot paths to a purpose-built store once patterns are real. DynamoDB rewards known patterns and punishes unknown ones.',
    tags: ['Data Modeling', 'DynamoDB', 'Architecture']
  },
  {
    id: 'aws-sap-fc-388',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you select storage for a write-heavy transaction log?',
    hint: 'Append-only, durable, ordered.',
    back: 'A purpose-built append log: <strong>Kinesis or MSK</strong> for a replayable stream, <strong>DynamoDB with a sharded key</strong> for high-rate indexed appends, or <strong>io2 Block Express</strong> where a database engine owns the log and needs sub-millisecond synchronous writes. Buffer before S3 — millions of tiny objects is the wrong shape for an S3 write path.',
    tags: ['Storage', 'Kinesis', 'io2']
  },
  {
    id: 'aws-sap-fc-389',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce recovery time for a large database?',
    hint: 'Restores scale with size; replicas do not.',
    back: 'Stop relying on restore: keep a <strong>read replica or standby you can promote</strong> (Aurora Global Database for cross-Region), which turns hours into minutes. Where restore is unavoidable, use <strong>Aurora\'s shared storage volume</strong>, parallel restore, or <strong>EBS Fast Snapshot Restore</strong>, and measure the actual time so the stated RTO is evidence rather than an aspiration.',
    tags: ['Aurora', 'RTO', 'Recovery']
  },
  {
    id: 'aws-sap-fc-390',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you recover from a corrupted replication stream?',
    hint: 'Stop, do not let it spread.',
    back: '<strong>Halt replication immediately</strong> so corruption does not propagate further, then determine the last known-good point and rebuild the target from a <strong>full load plus CDC from that point</strong> rather than trying to repair in place. Keep the source authoritative throughout, and use DMS validation to confirm parity before repointing anything.',
    tags: ['DMS', 'Replication', 'Recovery']
  },
  {
    id: 'aws-sap-fc-391',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you recover a deleted object after a bad script?',
    hint: 'Versioning is the whole answer.',
    back: 'With <strong>versioning on</strong>, a delete writes a <em>delete marker</em> — remove it and the object is back. Without versioning, the object is gone unless <strong>replication or a backup</strong> holds a copy. This is why versioning plus a lifecycle rule for non-current versions is the default posture, and why replication should target a <em>different account</em>.',
    tags: ['S3', 'Versioning', 'Recovery']
  },
  {
    id: 'aws-sap-fc-392',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you recover from a bad infrastructure change?',
    hint: 'The stack knows the previous state.',
    back: '<strong>CloudFormation automatic rollback</strong> on failure, or deploy the previous template version; for stacks that must not be rolled back mid-flight, use a <strong>change set reviewed before execution</strong>. Add <strong>stack policies</strong> to protect stateful resources from replacement, and keep <code>DeletionPolicy: Retain</code> on databases so a rollback cannot destroy data.',
    tags: ['CloudFormation', 'Rollback', 'Change Management']
  },
  {
    id: 'aws-sap-fc-393',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce risk from a single shared account?',
    hint: 'Split by blast radius, then migrate.',
    back: 'Create accounts per <strong>environment and workload</strong>, then move workloads incrementally — new work goes to new accounts first, so the shared account shrinks rather than needing a big-bang split. Use <strong>RAM and PrivateLink</strong> so the split does not require re-architecting networking, and keep the old account until it is empty.',
    tags: ['Account Design', 'Blast Radius', 'Migration']
  },
  {
    id: 'aws-sap-fc-394',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'A dependency only fails at scale. How do you find it before customers do?',
    hint: 'Load-test the dependency, not your tier.',
    back: 'Load-test to <strong>real peak plus headroom</strong> against a production-like dependency, watching <em>its</em> saturation signals — connections, quota throttles, lock waits, partition throughput — not just your own latency. Then add the missing guards: <strong>concurrency caps, pooling, quota alarms and backpressure</strong>, and re-test. Staging with a tenth of the data proves nothing.',
    tags: ['Load Testing', 'Scaling', 'Bottlenecks']
  },
  {
    id: 'aws-sap-fc-395',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose between migrating and rebuilding?',
    hint: 'Compare against the cheaper option honestly.',
    back: 'Rebuild only when the existing system <strong>cannot meet a requirement that matters</strong> and no lesser strategy closes the gap — and price it against rehost-then-modernise, which delivers the data-centre exit years sooner. Rebuilds lose undocumented business logic accumulated over a decade, which is the risk that is always underestimated.',
    tags: ['Refactor', 'Migration Strategies', 'Risk']
  },
  {
    id: 'aws-sap-fc-396',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you sequence a modernization with limited team capacity?',
    hint: 'Highest change frequency first.',
    back: 'Rank candidates by <strong>change frequency × pain</strong>, not by architectural ugliness: the component teams touch weekly repays decoupling immediately, while a stable module repays nothing. Do one at a time to completion, keep the <strong>strangler routing layer</strong> in place between them, and measure lead time before and after to prove the value.',
    tags: ['Modernization', 'Prioritisation', 'Strangler Pattern']
  },
  {
    id: 'aws-sap-fc-397',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose where to break up a monolith first?',
    hint: 'Find a seam, not a layer.',
    back: 'Pick a <strong>bounded context with few inbound dependencies, its own data, and a clear API surface</strong> — often a read-mostly capability such as search, notifications or reporting. Avoid starting with the shared core or a horizontal layer, because the data untangling dominates and the first extraction should build confidence, not consume a year.',
    tags: ['Modernization', 'Bounded Context', 'Microservices']
  },
  {
    id: 'aws-sap-fc-398',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you decide what not to migrate?',
    hint: 'The cheapest workload is a deleted one.',
    back: 'Challenge every workload before costing a move: <strong>no users or no owner → retire</strong>; duplicated capability → consolidate; a commercial equivalent exists → repurchase; a hard constraint (dongle, latency, licence) → retain with a review date. A portfolio rationalisation that retires 10–20% pays for a large part of the programme.',
    tags: ['Portfolio', 'Retire', 'Migration Strategies']
  },
  {
    id: 'aws-sap-fc-399',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you prepare an organization for migration, not just the tech?',
    hint: 'People and governance are the usual blocker.',
    back: 'Stand up a <strong>CCoE</strong>, agree the operating model and who owns what after cutover, train the operations team <em>before</em> wave one, and settle the governance questions — tagging, account vending, change process, on-call — while the landing zone is being built. Programmes stall on unresolved ownership far more often than on technology.',
    tags: ['CCoE', 'Operating Model', 'Migration']
  },
  {
    id: 'aws-sap-fc-400',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you fund a migration programme?',
    hint: 'Milestones, not a lump sum.',
    back: 'Tie funding to <strong>wave milestones with measurable exit criteria</strong> — workloads cut over, sources decommissioned, run cost realised — so the business case is re-tested as you go. Use <strong>MAP</strong> credits and partner funding for the assess and mobilise phases, and account for <strong>dual-running cost</strong> explicitly; it is the line that derails forecasts.',
    tags: ['MAP', 'Business Case', 'Programme']
  }
];

export default AWS_SAP_FLASHCARDS;
