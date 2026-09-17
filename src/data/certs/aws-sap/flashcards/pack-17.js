export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-401',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle a team that needs a Region the guardrail denies?',
    hint: 'Move the account, not the policy.',
    back: 'Put that business unit\'s accounts in an <strong>OU whose SCP permits the additional Region</strong>, leaving every other account\'s control untouched. Opening the Region organization-wide weakens the guardrail for everyone, and per-account exemption conditions inside one shared policy become unreadable as they accumulate.',
    tags: ['Organizations', 'SCP', 'Region Control']
  },
  {
    id: 'aws-sap-fc-402',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you federate a partner workforce you do not control?',
    hint: 'Their IdP, your roles.',
    back: 'Add the partner\'s IdP as an <strong>external identity provider in IAM Identity Center</strong> (or a SAML provider with a role per persona), so <em>they</em> manage joiners and leavers and you manage permissions. Never create accounts per partner person. Scope with <strong>session tags</strong> and keep session duration short, and audit via session names in CloudTrail.',
    tags: ['IAM Identity Center', 'Federation', 'Partner Access']
  },
  {
    id: 'aws-sap-fc-403',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you structure organizational units?',
    hint: 'By control need, not by org chart.',
    back: 'Group accounts that need the <strong>same guardrails</strong>: Security, Infrastructure, Workloads (with Prod and Non-Prod beneath), Sandbox, Suspended, and a Transitional OU for acquisitions. Reporting lines change often and policy should not churn with them — use <strong>tags and Cost Categories</strong> for the org chart view instead.',
    tags: ['Organizations', 'OU Design', 'Landing Zone']
  },
  {
    id: 'aws-sap-fc-404',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle an account that must leave the organization?',
    hint: 'Prerequisites, then policy cleanup.',
    back: 'The account needs its <strong>own billing details and a valid payment method</strong> before it can be removed, and it loses consolidated billing, shared RIs and RAM shares immediately. Plan the sequence: migrate shared resources, detach from Control Tower, export its logs to the archive, then remove — and revoke any cross-account roles pointing at it.',
    tags: ['Organizations', 'Account Management', 'Divestiture']
  },
  {
    id: 'aws-sap-fc-405',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you recover control of an organization?',
    hint: 'Root of the management account.',
    back: 'Regain the <strong>management account root credentials</strong> (via AWS Support and the account contact process if MFA or email access is lost) — it is the only identity no SCP can restrict. Then rotate everything, review the organization for unexpected accounts, trusted access and delegated administrators, and check the log archive for what happened.',
    tags: ['Organizations', 'Root User', 'Incident Response']
  },
  {
    id: 'aws-sap-fc-406',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you run analytics on data that must not leave the account?',
    hint: 'Bring the query to the data.',
    back: 'Keep the data where it is and grant <strong>cross-account query access rather than copies</strong>: Lake Formation permissions over the Glue catalog, Redshift data sharing, or Athena against the owner\'s bucket with an <strong>S3 Access Point</strong> policy. Audit every access with CloudTrail data events so the owner can prove nothing was extracted.',
    tags: ['Lake Formation', 'Data Sharing', 'Compliance']
  },
  {
    id: 'aws-sap-fc-407',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you encrypt data with keys the customer controls?',
    hint: 'Per-tenant keys, imported or external.',
    back: 'Give each customer their own <strong>KMS key</strong> — imported key material, or an <strong>External Key Store</strong> if they must hold it outside AWS — and bind usage with <strong>encryption context</strong> per tenant. Revocation becomes real: disable the key and their data is unreadable. Design for the availability and latency cost of an external key before promising it.',
    tags: ['KMS', 'BYOK', 'Multi-Tenancy']
  },
  {
    id: 'aws-sap-fc-408',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a load balancer for a protocol without HTTP?',
    hint: 'Layer 4, and watch the client address.',
    back: 'A <strong>Network Load Balancer</strong> in TCP or UDP mode — it does not parse the payload, gives a static IP per AZ, and <strong>preserves the client source address</strong> for instance and IP targets. Add <strong>TLS listeners</strong> if you want termination without HTTP awareness, and a Gateway Load Balancer only when appliances must inspect the flow.',
    tags: ['NLB', 'Networking', 'Load Balancing']
  },
  {
    id: 'aws-sap-fc-409',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you give a load-balanced service a static private address?',
    hint: 'Only one of them can.',
    back: 'An <strong>NLB supports a specified private IPv4 address per subnet</strong>, which is how you satisfy a partner firewall rule or a legacy client that will not use DNS. An ALB\'s addresses are managed and change, so front it with an NLB if you need both layer-7 routing and a fixed address. Prefer fixing the client to use DNS where you can.',
    tags: ['NLB', 'Static IP', 'Networking']
  },
  {
    id: 'aws-sap-fc-410',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a container registry strategy across Regions?',
    hint: 'Pull locally, build once.',
    back: 'Build once in a shared account and use <strong>ECR cross-Region and cross-account replication</strong> so every Region pulls locally — this cuts pull latency, avoids cross-Region data transfer on every deploy, and survives a Region event. Add <strong>pull-through cache rules</strong> for upstream public images so builds do not depend on an external registry.',
    tags: ['ECR', 'Replication', 'Multi-Region']
  },
  {
    id: 'aws-sap-fc-411',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you shrink a long container image build?',
    hint: 'Layers and caching.',
    back: 'Order the Dockerfile so <strong>dependencies are cached above application code</strong>, use <strong>multi-stage builds</strong> so the runtime image carries no toolchain, pick a minimal base, and enable a remote layer cache in CodeBuild. Then check you are not rebuilding unchanged images at all — content-addressed tags let the pipeline skip the build entirely.',
    tags: ['Docker', 'CodeBuild', 'CI/CD']
  },
  {
    id: 'aws-sap-fc-412',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you distribute a shared library to many teams?',
    hint: 'A package registry, versioned.',
    back: '<strong>CodeArtifact</strong> as a private npm/PyPI/Maven/NuGet registry with upstream proxying to public repositories, publishing <strong>semantically versioned</strong> releases that consumers pin. Copying source into each repository guarantees divergence, and a Lambda layer or shared S3 object gives you no dependency resolution or version history.',
    tags: ['CodeArtifact', 'Dependencies', 'Developer Experience']
  },
  {
    id: 'aws-sap-fc-413',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design active-active multi-Region writes for a session store?',
    hint: 'Session data forgives what ledgers do not.',
    back: '<strong>DynamoDB global tables</strong> suit sessions well: multi-active writes, low local latency, and <strong>last-writer-wins is acceptable</strong> because a lost session update is tolerable. Keep sessions small, set a TTL, and pin a user to one Region with routing so concurrent cross-Region writes for the same key are rare rather than relied upon.',
    tags: ['Global Tables', 'Multi-Region', 'Sessions']
  },
  {
    id: 'aws-sap-fc-414',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find why a deployment doubled database load?',
    hint: 'Usually a query pattern, not traffic.',
    back: 'Compare <strong>Performance Insights top SQL and wait events before and after</strong> — the usual causes are a lost index, an N+1 introduced by an ORM change, a cache that stopped being used, or a new query with a bad plan. Confirm request volume is flat first, so you are not chasing an application change that was really a traffic change.',
    tags: ['Performance Insights', 'Troubleshooting', 'Databases']
  },
  {
    id: 'aws-sap-fc-415',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What limits the throughput a single instance can deliver?',
    hint: 'Four ceilings to size against.',
    back: 'Size the instance against all four: <strong>network bandwidth for the instance type</strong> (smaller sizes have a burst allowance that runs out), <strong>dedicated EBS bandwidth</strong>, <strong>vCPU and single-thread performance</strong>, and application limits such as connection or thread pools. Confirm <strong>ENA and enhanced networking</strong> are enabled, and use EFA for HPC interconnect traffic.',
    tags: ['EC2', 'Instance Types', 'Performance']
  },
  {
    id: 'aws-sap-fc-416',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce data transfer cost for a media workload?',
    hint: 'Serve from the edge.',
    back: 'Put <strong>CloudFront</strong> in front: edge-to-origin traffic is far smaller than origin-to-internet, CloudFront egress is cheaper than direct S3 egress, and cache hit ratio is the lever to optimise. Then check <strong>origin shield</strong>, byte-range caching for large files, and whether you are paying for cross-Region reads that a local origin would avoid.',
    tags: ['CloudFront', 'Data Transfer', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-417',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut the cost of a chatty service mesh?',
    hint: 'Sidecars are not free.',
    back: 'Every sidecar consumes CPU and memory per pod and adds hops. Reduce it by <strong>trimming what the mesh does</strong> (drop mTLS where a VPC boundary suffices, reduce telemetry cardinality and sampling), scoping the mesh to services that need it, or moving to a lighter option such as <strong>ECS Service Connect</strong> or plain ALB routing with IAM auth.',
    tags: ['Service Mesh', 'EKS', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-418',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the cost of an idle Kubernetes control plane?',
    hint: 'Consolidate clusters.',
    back: 'The EKS control plane is charged per cluster per hour regardless of use, so many small clusters are pure overhead. Consolidate with <strong>namespaces, quotas and network policies for tenancy</strong> instead of a cluster per team, keep separate clusters only for hard isolation boundaries, and delete ephemeral clusters automatically after their environment expires.',
    tags: ['EKS', 'Cost Optimization', 'Multi-Tenancy']
  },
  {
    id: 'aws-sap-fc-419',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle a slow leak that fails weekly?',
    hint: 'The interval is the clue.',
    back: 'A failure with a regular period points to a <strong>monotonically growing resource</strong>: memory or file-descriptor leak, connection pool exhaustion, an unbounded in-memory cache, or disk filling with logs. Graph the resource over the full cycle rather than the incident window, add an alarm on the <em>trend</em>, and mitigate with scheduled recycling while you fix the cause.',
    tags: ['Troubleshooting', 'Memory Leaks', 'Reliability']
  },
  {
    id: 'aws-sap-fc-420',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you trim a large CloudTrail bill?',
    hint: 'The first trail is free.',
    back: 'One <strong>management-event trail per organization is free</strong>; additional copies of the same events are charged, so consolidate rather than letting each account run its own. <strong>Data events</strong> are the usual culprit — scope them to specific prefixes and functions rather than account-wide, and use <strong>CloudTrail Lake</strong> selectively for the history you actually query.',
    tags: ['CloudTrail', 'Cost Optimization', 'Auditing']
  },
  {
    id: 'aws-sap-fc-421',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep on-premises file access during a gradual move?',
    hint: 'Cloud is the source of truth; cache locally.',
    back: '<strong>Storage Gateway in File Gateway mode</strong> presents an SMB or NFS share backed by S3, with a <strong>local cache</strong> for hot data — so on-premises users keep their share while the authoritative copy is already in AWS. <strong>FSx File Gateway</strong> does the same for FSx for Windows. Migrate the bulk with DataSync first, then cut the share over.',
    tags: ['Storage Gateway', 'Hybrid', 'Migration']
  },
  {
    id: 'aws-sap-fc-422',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep two databases in step during a phased cutover?',
    hint: 'One writer at a time.',
    back: 'Keep a <strong>single authoritative writer</strong> and replicate one way with CDC — forward before cutover, reverse after. <strong>Avoid dual-write</strong>, where both sides accept writes, because conflicts and partial failures are near-impossible to reconcile. If both must write, partition by key so no row is owned by two systems.',
    tags: ['DMS', 'CDC', 'Cutover']
  },
  {
    id: 'aws-sap-fc-423',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you validate an application after it moves?',
    hint: 'Functional, then non-functional.',
    back: 'Run the <strong>regression suite and a smoke test of the critical user journeys</strong>, then the non-functional checks people skip: <strong>latency against the old baseline</strong>, throughput at peak, batch window duration, integration with anything left on premises, and backup and restore. Compare against pre-migration measurements, not against a feeling.',
    tags: ['Validation', 'Testing', 'Migration']
  },
  {
    id: 'aws-sap-fc-424',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose what to modernise after a lift and shift?',
    hint: 'Follow the pain and the bill.',
    back: 'Rank by <strong>run cost, change frequency, and operational toil</strong>: replace self-managed databases with RDS or Aurora, self-managed brokers with SQS or Amazon MQ, cron hosts with EventBridge Scheduler, and bespoke deployment scripts with a managed pipeline. These are replatform moves with a fast payback, unlike a speculative rewrite.',
    tags: ['Modernization', 'Replatform', 'Post-Migration']
  },
  {
    id: 'aws-sap-fc-425',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you modernise session state during a lift and shift?',
    hint: 'A small change with a large payoff.',
    back: 'Move sessions out of instance memory into <strong>ElastiCache or DynamoDB</strong>, or to signed client-side tokens, and turn off load-balancer stickiness. It is usually a small, low-risk code change, and it is what unlocks <strong>autoscaling, rolling deployment and instance replacement</strong> — so it often pays for itself in the first wave rather than later.',
    tags: ['Sessions', 'ElastiCache', 'Modernization']
  }
];

export default AWS_SAP_FLASHCARDS;
