export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-176',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you recover from a deleted production account?',
    hint: 'Closure is not instant.',
    back: 'A closed account enters a <strong>90-day post-closure window</strong> in which AWS Support can reopen it — so the first action is a support case, not a rebuild. The real lesson is prevention: an <strong>SCP denying <code>organizations:LeaveOrganization</code> and account closure</strong>, plus backups replicated to a separate account so recovery never depends on the deleted one.',
    tags: ['Organizations', 'Account Closure', 'Recovery']
  },
  {
    id: 'aws-sap-fc-177',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you respond to a compromised workload account?',
    hint: 'Contain, preserve, then evict.',
    back: '<strong>Contain</strong> by attaching a restrictive SCP or moving the account to a quarantine OU, revoking active sessions (deny on <code>aws:TokenIssueTime</code>), and rotating credentials. <strong>Preserve</strong> evidence — snapshots and logs are already in the log archive account, out of the attacker\'s reach. Then rebuild from infrastructure as code rather than cleaning in place.',
    tags: ['Incident Response', 'Organizations', 'Security']
  },
  {
    id: 'aws-sap-fc-178',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Why should a guardrail live at the OU rather than the account?',
    hint: 'Exceptions become movements.',
    back: 'Because policy then follows <strong>account placement</strong>: granting an exception means <em>moving the account into a different OU</em>, which is reviewable, reversible and self-documenting. Per-account condition exemptions inside one shared policy accumulate until nobody can say what the control actually does — and they hit SCP size limits.',
    tags: ['Organizations', 'OU Design', 'Governance']
  },
  {
    id: 'aws-sap-fc-179',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you roll out a restrictive SCP without breaking workloads?',
    hint: 'Measure before you enforce.',
    back: 'Find the actual callers first with <strong>CloudTrail queries or Athena over the organization trail</strong>, then apply the policy to a <strong>sandbox OU</strong>, then a canary account, watching for access-denied events. Use <strong>IAM Access Analyzer policy generation</strong> from activity to scope it, and keep an agreed rollback. Never attach a new deny at the root first.',
    tags: ['Organizations', 'SCP', 'Change Management']
  },
  {
    id: 'aws-sap-fc-180',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you prevent IAM privilege escalation?',
    hint: 'The dangerous verbs are IAM verbs.',
    back: 'Deny or boundary the escalation paths: <code>iam:CreatePolicyVersion</code>, <code>iam:AttachRolePolicy</code>, <code>iam:PassRole</code> without a condition, <code>iam:UpdateAssumeRolePolicy</code>, and <code>lambda</code>/<code>glue</code> role passing. Require a <strong>permissions boundary on every role a team creates</strong> (enforced by an SCP condition), and audit with Access Analyzer.',
    tags: ['IAM', 'Privilege Escalation', 'Security']
  },
  {
    id: 'aws-sap-fc-181',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you keep golden images patched across an estate?',
    hint: 'A pipeline, not a person.',
    back: '<strong>EC2 Image Builder</strong> runs a scheduled pipeline: build, apply patches, run component tests, then <strong>distribute the AMI to every account and Region</strong> with the right launch permissions. Publish the ID to <strong>Parameter Store</strong> so launch templates resolve it by alias, and deprecate old AMIs so nothing launches a stale image.',
    tags: ['Image Builder', 'Patching', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-182',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design for a predictable traffic spike?',
    hint: 'Do not rely on reactive scaling.',
    back: 'Pre-scale with a <strong>scheduled action</strong>, guarantee the capacity exists with an <strong>On-Demand Capacity Reservation</strong> (or Capacity Blocks for accelerated instances), pre-warm caches and connection pools, and keep target tracking underneath for the unexpected. Reactive scaling alone loses the first minutes of the spike — exactly the minutes that matter.',
    tags: ['Auto Scaling', 'Capacity Reservations', 'Elasticity']
  },
  {
    id: 'aws-sap-fc-183',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'On-Demand Capacity Reservation vs. Reserved Instance vs. Savings Plan',
    hint: 'Only one reserves capacity.',
    back: '<strong>ODCR</strong> reserves <em>capacity</em> in a specific AZ, billed whether used or not, with no term commitment and no inherent discount. <strong>Zonal RIs</strong> give a discount <em>and</em> a capacity reservation. <strong>Regional RIs and Savings Plans</strong> give only a <em>billing discount</em> — no capacity guarantee. Combine an ODCR with a Savings Plan to get both.',
    tags: ['Capacity Reservations', 'Savings Plans', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-184',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Outposts vs. Local Zones vs. Wavelength',
    hint: 'Your rack, a metro, or a telco network.',
    back: '<strong>Outposts</strong> — AWS-managed racks in <em>your</em> data centre, for data residency and single-digit-millisecond links to local systems. <strong>Local Zones</strong> — AWS-operated infrastructure in a metro area for latency-sensitive users. <strong>Wavelength</strong> — compute inside a carrier\'s 5G network for mobile-edge workloads.',
    tags: ['Outposts', 'Local Zones', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-185',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you make a stateless service truly stateless?',
    hint: 'Find where state is hiding.',
    back: 'Move <strong>sessions</strong> to ElastiCache or DynamoDB (or signed tokens), <strong>uploads and temp files</strong> to S3 or EFS, <strong>caches</strong> to a shared tier, <strong>scheduled work</strong> to EventBridge Scheduler instead of a cron on one node, and <strong>sticky-session affinity</strong> out of the load balancer. Then any instance can be replaced without a user noticing.',
    tags: ['Statelessness', 'Sessions', 'Architecture']
  },
  {
    id: 'aws-sap-fc-186',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle a payload too large for a queue?',
    hint: 'Claim check.',
    back: 'The <strong>claim-check pattern</strong>: store the payload in S3 and put a <em>pointer</em> in the message — the SQS Extended Client Library does this for you, supporting up to 2 GB against the 256 KB message limit. Keep authorisation on the S3 object, set a lifecycle rule so orphans expire, and make the consumer tolerate a missing object.',
    tags: ['SQS', 'Claim Check', 'Messaging']
  },
  {
    id: 'aws-sap-fc-187',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Where should authorization be enforced in a layered API?',
    hint: 'Not only at the edge.',
    back: 'Coarse checks at the <strong>edge</strong> (authorizer: is this a valid caller, is the token good) and <strong>fine-grained, resource-level checks in the service that owns the data</strong> — because only it knows whether this tenant owns this record. Edge-only authorization fails the moment anything else can reach the service; consider <strong>Verified Permissions</strong> for policy-as-code.',
    tags: ['Authorization', 'API Gateway', 'Security']
  },
  {
    id: 'aws-sap-fc-188',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you bound concurrency against a fragile dependency?',
    hint: 'Queue in front, cap the consumer.',
    back: 'Put an <strong>SQS queue</strong> between producer and consumer, then cap the consumer: <strong>reserved concurrency</strong> on Lambda plus a small <code>maxConcurrency</code> on the event-source mapping, or a fixed worker pool. The queue absorbs the burst, the cap protects the dependency, and the <strong>queue age metric</strong> tells you whether you are keeping up.',
    tags: ['SQS', 'Concurrency', 'Resilience']
  },
  {
    id: 'aws-sap-fc-189',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Which metrics belong in a customer-facing SLO?',
    hint: 'What the user experiences.',
    back: '<strong>Availability measured as successful requests over total</strong> at the entry point, and <strong>latency at p99 (or p99.9)</strong> — never the mean, which hides the tail. Measure <em>client-side or at the load balancer</em>, not inside the service, so you capture failures that never reached your code. Then define the error budget and alarm on burn rate.',
    tags: ['SLO', 'Latency', 'Observability']
  },
  {
    id: 'aws-sap-fc-190',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find why one Availability Zone is slower?',
    hint: 'Dimension everything by AZ.',
    back: 'Add an <strong>AZ dimension to your metrics</strong> and compare per-zone p99, plus <code>HealthyHostCount</code> and <code>TargetResponseTime</code> per zone on the load balancer. Common causes: a cross-AZ dependency, an unbalanced target count, or a genuinely impaired zone. The mitigation is <strong>zonal evacuation</strong> — shift traffic away with ARC zonal shift while you investigate.',
    tags: ['Availability Zones', 'Troubleshooting', 'Resilience']
  },
  {
    id: 'aws-sap-fc-191',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What is Route 53 Application Recovery Controller for?',
    hint: 'Failover you can trust.',
    back: 'Two things: <strong>readiness checks</strong> that continuously verify a standby Region really is capable (quotas, capacity, configuration parity), and <strong>routing controls</strong> — highly available on/off switches on a cluster of five endpoints — so you can fail over deliberately rather than hoping a health check fires. It also provides <strong>zonal shift</strong>.',
    tags: ['ARC', 'Disaster Recovery', 'Failover']
  },
  {
    id: 'aws-sap-fc-192',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why might a failover not trigger when the Region is degraded?',
    hint: 'The control plane is part of the blast radius.',
    back: 'Because the failover mechanism itself depends on the failing Region — a health check on a shallow endpoint still returns 200, DNS TTLs are long, or the automation needs a control-plane API that is impaired. Design for <strong>static stability</strong>: pre-provision the standby, prefer <strong>data-plane over control-plane</strong> actions, and keep a manual routing control.',
    tags: ['Disaster Recovery', 'Static Stability', 'Failover']
  },
  {
    id: 'aws-sap-fc-193',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does a Well-Architected review produce?',
    hint: 'Risks, not a score to brag about.',
    back: 'A list of <strong>high and medium risk items</strong> across the six pillars — operational excellence, security, reliability, performance efficiency, cost optimisation, sustainability — with an improvement plan. Its value is the <em>conversation and the prioritised backlog</em>; lenses tailor it to serverless, SaaS, machine learning and more.',
    tags: ['Well-Architected', 'Review', 'Operations']
  },
  {
    id: 'aws-sap-fc-194',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make a runbook executable?',
    hint: 'Turn prose into an SSM document.',
    back: 'Encode it as an <strong>SSM Automation document</strong> with parameters, approval steps, and a defined rollback, then trigger it from an alarm via EventBridge or from <strong>Incident Manager</strong> as a response plan. Every run is logged and auditable, drift between the document and reality shows up as a failed step, and toil stops depending on who is on call.',
    tags: ['Systems Manager', 'Automation', 'Runbooks']
  },
  {
    id: 'aws-sap-fc-195',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What do you do with a workload whose dependencies are undocumented?',
    hint: 'Observe before you move.',
    back: 'Install <strong>Discovery Agents</strong> to capture running processes and <strong>network connections</strong> over a full business cycle — including month-end — then corroborate with firewall logs and VPC Flow Logs after a pilot move. Migrating on an incomplete map is the classic cause of a wave that breaks something nobody knew was connected.',
    tags: ['Discovery', 'Dependencies', 'Migration']
  },
  {
    id: 'aws-sap-fc-196',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload with no test environment?',
    hint: 'Replication gives you one.',
    back: '<strong>Launch MGN test instances into an isolated VPC</strong> — that <em>is</em> the test environment, built from production data without touching production. Sanitise data where needed, run synthetic transactions, and repeat as often as required since replication continues throughout. This is usually cheaper than building a parallel test estate on premises.',
    tags: ['MGN', 'Testing', 'Migration']
  },
  {
    id: 'aws-sap-fc-197',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How should you pick the first workload to migrate?',
    hint: 'Optimise for learning, not for value.',
    back: 'Low business risk, a <strong>willing and available owner</strong>, few dependencies, and enough substance to exercise the landing zone, pipeline, monitoring and cutover runbook end to end. The goal of wave one is a <em>proven, repeatable process</em>; leading with the most valuable or most complex workload usually stalls the programme.',
    tags: ['Migration Waves', 'Planning', 'Portfolio']
  },
  {
    id: 'aws-sap-fc-198',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you move a workload that uses multicast or broadcast discovery?',
    hint: 'VPCs do not forward it.',
    back: 'A VPC supports neither broadcast nor native multicast, so either use <strong>Transit Gateway multicast domains</strong> (IGMPv2, supported instance types only), or <strong>replace discovery</strong> with Cloud Map, DNS, or an explicit peer list. Clustering products relying on layer-2 adjacency often need a configuration change rather than a lift and shift.',
    tags: ['Transit Gateway', 'Multicast', 'Migration']
  },
  {
    id: 'aws-sap-fc-199',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload that cannot be restarted?',
    hint: 'Nothing is truly restart-proof.',
    back: 'Challenge the constraint first — usually it means "restart is undocumented and nobody has tried". Practise recovery on an <strong>MGN test instance</strong> until start-up is understood and scripted. If a genuinely stateful in-memory process cannot be stopped, the honest options are <strong>retain</strong> until it is replaced, or accept a planned outage negotiated with the business.',
    tags: ['Migration', 'Legacy', 'Risk']
  },
  {
    id: 'aws-sap-fc-200',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What should a migration programme actually measure?',
    hint: 'Not servers moved.',
    back: 'Business outcomes agreed up front: <strong>run cost per unit of work</strong>, change lead time and deployment frequency, incident rate and MTTR, data-centre exit milestones, and <strong>workloads retired</strong>. Servers migrated measures activity, not value — and rewards moving things that should have been switched off.',
    tags: ['Migration', 'Business Outcomes', 'Metrics']
  }
];

export default AWS_SAP_FLASHCARDS;
