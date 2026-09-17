export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-426',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle an account that needs two sets of controls?',
    hint: 'It usually needs to be two accounts.',
    back: 'If one account genuinely requires conflicting guardrails — say regulated and unregulated workloads — <strong>split it</strong>, because SCPs apply to the whole account and an intersection of both policies serves neither. Accounts are free; the boundary is the strongest isolation AWS offers, and it also cleans up cost allocation and blast radius.',
    tags: ['Account Design', 'Organizations', 'Governance']
  },
  {
    id: 'aws-sap-fc-427',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you limit what developers can provision?',
    hint: 'Deny the expensive shapes, not the services.',
    back: 'An SCP with conditions on the <strong>shape</strong> rather than a service block-list: deny instance families above a size, deny expensive storage classes, require encryption and tags, restrict Regions. Pair it with <strong>Service Catalog or a CDK construct library</strong> so the approved path is the easy path, and a Budget action as the backstop.',
    tags: ['Organizations', 'SCP', 'Cost Control']
  },
  {
    id: 'aws-sap-fc-428',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you enforce log retention centrally?',
    hint: 'Two places, two mechanisms.',
    back: 'Set retention on the <strong>CloudWatch Logs group</strong> (default is never expire, which is the usual cost surprise) via a Config rule with auto-remediation or a StackSet, and set <strong>S3 lifecycle plus Object Lock</strong> on the archive for the regulatory floor. An SCP can stop anyone shortening the archive retention.',
    tags: ['CloudWatch Logs', 'Retention', 'Config']
  },
  {
    id: 'aws-sap-fc-429',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you centralise certificate issuance for internal services?',
    hint: 'One private CA hierarchy, shared.',
    back: 'A <strong>Private CA hierarchy</strong> — an offline root, subordinate CAs per environment — <strong>shared with RAM</strong> so workload accounts request certificates without owning a CA. Automate issuance and renewal (cert-manager on EKS, or ACM-integrated services), and monitor expiry as a metric, since a silent expiry is a self-inflicted outage.',
    tags: ['Private CA', 'RAM', 'TLS']
  },
  {
    id: 'aws-sap-fc-430',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you resolve private endpoints from on premises?',
    hint: 'Interface endpoints have private DNS.',
    back: 'Interface endpoints get a <strong>private hosted zone entry</strong> that only resolves inside the VPC, so on-premises clients need a <strong>Route 53 Resolver inbound endpoint</strong> to query it, with a conditional forwarder on your own DNS pointing at that endpoint\'s addresses. Share the Resolver rules with RAM so every VPC behaves consistently.',
    tags: ['PrivateLink', 'Route 53 Resolver', 'Hybrid DNS']
  },
  {
    id: 'aws-sap-fc-431',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you fail over a hybrid link without manual steps?',
    hint: 'BGP does the work.',
    back: 'Run <strong>Direct Connect plus a Site-to-Site VPN as a backup attachment</strong> on the same Transit Gateway and let <strong>BGP</strong> choose: advertise the DX path with a shorter AS path or higher local preference so the VPN takes over automatically when DX drops. Test it by shutting the DX BGP session, and size the VPN for degraded-mode throughput.',
    tags: ['Direct Connect', 'VPN', 'BGP']
  },
  {
    id: 'aws-sap-fc-432',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between Aurora and RDS as a migration target?',
    hint: 'Storage architecture is the difference.',
    back: '<strong>Aurora</strong> — distributed storage across three AZs with six copies, up to 15 low-lag readers, faster failover, Backtrack, Global Database, Serverless v2; higher baseline cost and MySQL/PostgreSQL only. <strong>RDS</strong> — the other engines (Oracle, SQL Server, MariaDB, Db2), simpler pricing, and BYOL paths. For a homogeneous MySQL or PostgreSQL move, Aurora is usually the better target.',
    tags: ['Aurora', 'RDS', 'Migration']
  },
  {
    id: 'aws-sap-fc-433',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you scale a write-heavy relational workload?',
    hint: 'Replicas do not help writes.',
    back: 'Options in order: <strong>reduce write amplification</strong> (batching, fewer indexes, no chatty ORM), <strong>scale the writer up</strong> (there is one), <strong>offload</strong> non-transactional writes to a stream or a purpose-built store, then <strong>shard</strong> by tenant or key — application-level, or Aurora Limitless. Read replicas add read capacity only.',
    tags: ['Aurora', 'Sharding', 'Scaling']
  },
  {
    id: 'aws-sap-fc-434',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you pick a service for server-side rendering?',
    hint: 'Latency profile and runtime control.',
    back: '<strong>CloudFront plus Lambda@Edge or CloudFront Functions</strong> for light personalisation at the edge, <strong>Lambda behind an ALB or API Gateway</strong> for request-scoped rendering with no servers, and <strong>ECS or App Runner</strong> where the framework needs a long-lived process, warm caches or a large dependency tree. Cache aggressively whatever you choose.',
    tags: ['CloudFront', 'Lambda', 'Web Applications']
  },
  {
    id: 'aws-sap-fc-435',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve a global single-page application?',
    hint: 'Static at the edge, API separately.',
    back: 'Static assets in <strong>S3 behind CloudFront with OAC</strong>, long cache TTLs on hashed filenames and a short TTL on <code>index.html</code>, and <strong>custom error responses</strong> mapping 403/404 to the app shell for client-side routing. The API is a separate origin or distribution behaviour, so it is not cached with the assets.',
    tags: ['CloudFront', 'S3', 'Web Applications']
  },
  {
    id: 'aws-sap-fc-436',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve personalised content near the user?',
    hint: 'Vary the cache key deliberately.',
    back: 'Keep the response cacheable by putting the personalisation in a <strong>narrow cache key</strong> — a country header, a device class, a small cohort id — via a <strong>CloudFront cache policy</strong>, and compute it in a <strong>CloudFront Function</strong>. Per-user variation destroys the hit ratio, so render the shell at the edge and fetch user data client-side instead.',
    tags: ['CloudFront', 'Caching', 'Personalisation']
  },
  {
    id: 'aws-sap-fc-437',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose a consistency model for a booking system?',
    hint: 'Double-booking is not acceptable.',
    back: 'The inventory decrement must be <strong>strongly consistent and atomic</strong> — a conditional write in DynamoDB, or a transaction in Aurora — so two customers cannot claim the same seat. Everything around it can be eventual: search, availability display, confirmations. Model the <em>reservation</em> as a short-lived hold, which lets you keep the hot path small.',
    tags: ['Consistency', 'DynamoDB', 'Transactions']
  },
  {
    id: 'aws-sap-fc-438',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the cost of an over-replicated cache?',
    hint: 'Ask what failure it protects against.',
    back: 'A cache whose loss is survivable does not need multi-AZ replicas — run fewer nodes and accept a warm-up after failure. Keep replicas where <strong>a cold cache would overwhelm the origin</strong> or the store is durable (MemoryDB). Right-size node types to the working set, enable <strong>data tiering</strong> on r6gd, and set TTLs so the set does not grow unbounded.',
    tags: ['ElastiCache', 'Cost Optimization', 'Caching']
  },
  {
    id: 'aws-sap-fc-439',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you keep a cache warm across a failover?',
    hint: 'Do not let the origin take the full load.',
    back: 'Use a <strong>replica that is promoted rather than a cold replacement</strong> (Redis with multi-AZ), and on a genuinely cold start protect the origin with <strong>request coalescing, a concurrency cap and staged traffic ramp-up</strong> while the cache fills. A pre-warming job that replays the top keys turns an outage into a slow minute.',
    tags: ['ElastiCache', 'Failover', 'Resilience']
  },
  {
    id: 'aws-sap-fc-440',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why did a cache hit rate fall without a code change?',
    hint: 'Something changed the key or the set.',
    back: 'Common causes: a <strong>new query-string or header entered the cache key</strong>, the working set outgrew the cache so evictions rose, a TTL was shortened, traffic shifted to long-tail content, or a deployment invalidated everything. Check <strong>evictions, memory usage and the cache key configuration</strong> before adding capacity.',
    tags: ['Caching', 'CloudFront', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-441',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you diagnose uneven load across Kinesis shards?',
    hint: 'The partition key distribution.',
    back: 'Enable <strong>enhanced shard-level metrics</strong> and compare incoming bytes and records per shard — skew means the partition key has low cardinality or a dominant value. Fix the key (add a suffix or use a higher-cardinality attribute), or move to <strong>on-demand mode</strong> which redistributes automatically. Resharding without fixing the key just moves the hotspot.',
    tags: ['Kinesis', 'Shards', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-442',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you fix throughput limited by a single consumer?',
    hint: 'Parallelism has a ceiling per shard.',
    back: 'Add consumers up to the shard count, then use <strong>enhanced fan-out</strong> so each gets its own 2 MB/s, raise <strong>parallelisation factor</strong> on a Lambda event-source mapping to run multiple batches per shard, and increase shards if the key distribution allows. If ordering per key permits it, <strong>batch and process concurrently within a shard</strong>.',
    tags: ['Kinesis', 'Lambda', 'Throughput']
  },
  {
    id: 'aws-sap-fc-443',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle an expensive query nobody owns?',
    hint: 'Attribute it, then bound it.',
    back: 'Identify it via <strong>Performance Insights top SQL</strong> or Redshift WLM, then attribute it — per-service database credentials and <strong>query tags or application_name</strong> are what make ownership provable. Bound the damage with a <strong>statement timeout, a WLM queue or a dedicated replica</strong> for ad-hoc work, then take the fix to the owning team.',
    tags: ['Performance Insights', 'Governance', 'Databases']
  },
  {
    id: 'aws-sap-fc-444',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you choose what to automate first?',
    hint: 'Frequency times pain times risk.',
    back: 'Rank toil by <strong>how often it happens, how long it takes, and how badly it goes wrong when done by hand</strong>. The best first candidates are frequent, mechanical and error-prone — patching, access grants, environment provisioning, routine incident responses. Automating a rare, complex task yields a script nobody trusts by the time it is needed.',
    tags: ['Automation', 'Toil', 'Operational Excellence']
  },
  {
    id: 'aws-sap-fc-445',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a highly available pair without losing redundancy?',
    hint: 'Never run on one leg.',
    back: 'Extend the cluster rather than moving it: add an AWS member, let it sync, verify quorum, then retire an on-premises member — so there are always at least two healthy nodes. Watch the <strong>quorum and witness placement</strong> across the hybrid link, and confirm latency is inside the cluster\'s tolerance before you start.',
    tags: ['High Availability', 'Migration', 'Quorum']
  },
  {
    id: 'aws-sap-fc-446',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you move container workloads into AWS?',
    hint: 'Match the orchestrator first.',
    back: 'Self-managed Kubernetes maps to <strong>EKS</strong> (manifests and Helm charts largely port; rework storage classes, load balancer annotations and IAM), and Docker Compose or simple orchestration maps well to <strong>ECS</strong>. Replicate images to <strong>ECR</strong>, rebuild for the target architecture if moving to Graviton, and treat cluster add-ons as their own migration.',
    tags: ['EKS', 'ECS', 'Migration']
  },
  {
    id: 'aws-sap-fc-447',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you choose an approach for a VMware estate?',
    hint: 'Speed versus native benefit.',
    back: '<strong>Relocate</strong> to a VMware-based environment on AWS keeps tooling and moves fastest with minimal downtime, but retains VMware cost and operating model. <strong>Rehost with MGN</strong> converts VMs to native EC2 — more change, but unlocks native services, Graviton, managed databases and Savings Plans. Many programmes relocate to exit the data centre, then rehost selectively.',
    tags: ['VMware', 'Relocate', 'Migration Strategies']
  },
  {
    id: 'aws-sap-fc-448',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you move a large object store from another cloud?',
    hint: 'Managed copy with verification.',
    back: '<strong>DataSync</strong> supports other clouds\' object storage as a source, handling parallelism, retries, incremental re-runs and <strong>integrity verification</strong>; <strong>S3 Batch Operations</strong> can then transform or re-tier once landed. Budget for the source provider\'s <strong>egress charges</strong>, which usually dominate, and consider Snow devices for very large one-offs.',
    tags: ['DataSync', 'S3', 'Multi-Cloud']
  },
  {
    id: 'aws-sap-fc-449',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design for a site with no reliable network link?',
    hint: 'Compute must survive disconnection.',
    back: '<strong>Snowball Edge or Snowcone</strong> for intermittent edge collection and processing, or <strong>Outposts servers</strong> where the site needs persistent local compute — both keep working while disconnected and sync when the link returns. Design the application for <strong>local-first writes with eventual upload</strong>, and never put a synchronous cloud call on the critical path.',
    tags: ['Snow Family', 'Outposts', 'Edge']
  },
  {
    id: 'aws-sap-fc-450',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you modernise a reporting process that blocks a migration?',
    hint: 'It is usually reading the production database.',
    back: 'Break the coupling before the wave: point reporting at a <strong>replica, a CDC-fed copy, or S3 plus Athena</strong>, and replace direct database access with a defined interface. That removes reporting from the cutover\'s critical path, kills the "we cannot move because finance queries it at month-end" objection, and usually improves the transactional workload too.',
    tags: ['Analytics', 'CDC', 'Modernization']
  }
];

export default AWS_SAP_FLASHCARDS;
