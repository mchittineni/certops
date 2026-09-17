export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-101',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Multi-Region KMS keys — what do they solve and what do they not?',
    hint: 'Same key material, independent policies.',
    back: 'A multi-Region key has <strong>the same key ID and material in several Regions</strong>, so ciphertext encrypted in one can be decrypted in another — which is what makes cross-Region S3 replication and DR of encrypted data workable. Each replica has its <em>own key policy, grants and aliases</em>. They are not global: replicas are managed independently.',
    tags: ['KMS', 'Multi-Region', 'Encryption']
  },
  {
    id: 'aws-sap-fc-102',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'KMS vs. CloudHSM vs. External Key Store',
    hint: 'Who holds and controls the HSM?',
    back: '<strong>KMS</strong> — multi-tenant managed HSMs, FIPS 140-3 validated, deeply integrated with AWS services. <strong>CloudHSM</strong> — single-tenant HSM cluster you administer, for PKCS#11/JCE workloads and regulators demanding sole custody. <strong>XKS</strong> — a KMS key whose material lives in <em>your</em> HSM outside AWS, so you can cut access, at the cost of owning the availability path.',
    tags: ['KMS', 'CloudHSM', 'Compliance']
  },
  {
    id: 'aws-sap-fc-103',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does KMS encryption context buy you?',
    hint: 'Bound, logged, and assertable.',
    back: 'Non-secret key-value pairs cryptographically <strong>bound to the ciphertext</strong> — decryption fails unless the same context is supplied. It appears in <strong>CloudTrail</strong>, making access auditable per tenant or object, and can be asserted in a key policy or grant via <code>kms:EncryptionContext:</code> conditions, so one shared key enforces per-tenant separation.',
    tags: ['KMS', 'Encryption Context', 'Multi-Tenancy']
  },
  {
    id: 'aws-sap-fc-104',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you handle overlapping CIDRs after an acquisition?',
    hint: 'Transit Gateway will not route duplicates.',
    back: 'Options in rising order of effort: <strong>PrivateLink</strong> to expose only the needed services (overlap becomes irrelevant), <strong>NAT</strong> the overlapping range to a unique one, or <strong>re-address</strong> the smaller estate. Long term, run <strong>IPAM</strong> so address space is allocated centrally and the problem does not recur.',
    tags: ['VPC', 'CIDR', 'PrivateLink']
  },
  {
    id: 'aws-sap-fc-105',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Where should a landing zone send its logs?',
    hint: 'A separate account nobody logs into.',
    back: 'A dedicated <strong>log archive account</strong>, write-only from the rest of the organization, with an <strong>organization CloudTrail</strong>, Config history, and VPC Flow Logs delivered there. Protect them with <strong>S3 Object Lock</strong> in compliance mode plus an SCP denying deletion, so an attacker with production admin still cannot erase the evidence.',
    tags: ['Landing Zone', 'Logging', 'Governance']
  },
  {
    id: 'aws-sap-fc-106',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How should break-glass access be designed?',
    hint: 'Assume the identity provider is down.',
    back: 'A small number of <strong>pre-created IAM roles or users independent of the IdP</strong>, protected by hardware MFA, with credentials split and stored offline. Every use must <strong>alarm loudly</strong> (EventBridge on the assume-role event to the security team) and be reviewed afterwards. Test it on a schedule — an untested break-glass path is not a control.',
    tags: ['IAM', 'Break-Glass', 'Resilience']
  },
  {
    id: 'aws-sap-fc-107',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Why is a role-chained session capped at one hour?',
    hint: 'And what it means for long jobs.',
    back: 'When a role assumes another role, the <strong>maximum session duration is 1 hour</strong> regardless of the role\'s configured maximum, and <code>DurationSeconds</code> beyond that is rejected. Long-running jobs must therefore <strong>refresh credentials</strong>, not assume once at start-up. Assuming directly (not chained) can reach up to <strong>12 hours</strong> if the role allows it.',
    tags: ['IAM', 'STS', 'Role Chaining']
  },
  {
    id: 'aws-sap-fc-108',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'API Gateway REST vs. HTTP vs. WebSocket API',
    hint: 'Features, price, or persistent connection.',
    back: '<strong>REST</strong> — request validation, usage plans and API keys, private endpoints, WAF, caching; most expensive. <strong>HTTP</strong> — roughly 70% cheaper and lower latency, JWT authorizers, but a smaller feature set. <strong>WebSocket</strong> — persistent bidirectional connections with routes and a callback URL for server push. All three integrate with Lambda.',
    tags: ['API Gateway', 'Serverless', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-109',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'API Gateway authorizer options',
    hint: 'Four ways to say yes.',
    back: '<strong>IAM</strong> (SigV4) — service-to-service and internal callers. <strong>Cognito user pool</strong> — validates a user-pool JWT directly. <strong>JWT authorizer</strong> (HTTP APIs) — any OIDC issuer. <strong>Lambda authorizer</strong> — custom logic for anything else, returning a policy document, with <em>caching by token or request</em> to keep the cost down.',
    tags: ['API Gateway', 'Authorization', 'Security']
  },
  {
    id: 'aws-sap-fc-110',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you get exactly-once side effects from an at-least-once stream?',
    hint: 'You cannot; you make retries harmless.',
    back: 'Make the consumer <strong>idempotent</strong>: derive a deterministic key from the event (or carry an idempotency token) and record it in a <strong>conditional write</strong> — DynamoDB <code>attribute_not_exists</code> — so a replay is a no-op. Combine with a <strong>transactional write</strong> of state and marker together. Exactly-once <em>delivery</em> is not available; exactly-once <em>effect</em> is.',
    tags: ['Idempotency', 'Streaming', 'Event-Driven']
  },
  {
    id: 'aws-sap-fc-111',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you coordinate a transaction across services?',
    hint: 'No distributed locks.',
    back: 'Use a <strong>saga</strong>: a sequence of local transactions, each with a <strong>compensating action</strong> if a later step fails. Orchestrate it with <strong>Step Functions</strong> (visible state, retries, catch blocks, and explicit compensation branches) rather than chaining events, so failure handling is inspectable. Two-phase commit across AWS services is not an option.',
    tags: ['Saga', 'Step Functions', 'Microservices']
  },
  {
    id: 'aws-sap-fc-112',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'DynamoDB on-demand vs. provisioned capacity',
    hint: 'Unknown shape versus known baseline.',
    back: '<strong>On-demand</strong> — no capacity planning, instant scaling, pay per request; right for unknown or spiky patterns, and roughly 6–7× the per-request price of well-utilised provisioned. <strong>Provisioned with auto scaling</strong> — cheaper for a steady predictable baseline, and eligible for reserved capacity. Switching modes is allowed once every 24 hours.',
    tags: ['DynamoDB', 'Capacity', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-113',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'When does DAX beat ElastiCache in front of DynamoDB?',
    hint: 'API-compatible, write-through.',
    back: '<strong>DAX</strong> is DynamoDB-specific, API-compatible (no application rewrite), write-through, and delivers microsecond reads — ideal for read-heavy, eventually-consistent access. <strong>ElastiCache</strong> is general purpose and needed when you cache <em>computed results</em> or non-DynamoDB data, or want Redis data structures. DAX does not help strongly consistent reads.',
    tags: ['DynamoDB', 'DAX', 'Caching']
  },
  {
    id: 'aws-sap-fc-114',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'ElastiCache Redis vs. Memcached vs. MemoryDB',
    hint: 'Durability is the discriminator.',
    back: '<strong>Memcached</strong> — simple multi-threaded cache, no persistence, no replication. <strong>ElastiCache for Redis</strong> — data structures, replicas, cluster mode, snapshots; a cache that <em>can</em> persist. <strong>MemoryDB</strong> — Redis-compatible <strong>durable primary database</strong> with a multi-AZ transaction log, microsecond reads and single-digit-millisecond writes.',
    tags: ['ElastiCache', 'MemoryDB', 'Caching']
  },
  {
    id: 'aws-sap-fc-115',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Which service recommends a Graviton move, and what is the catch?',
    hint: 'Recompile, then measure.',
    back: '<strong>Compute Optimizer</strong> flags Graviton candidates and estimates the gain — typically up to ~40% better price-performance. The catch is <strong>architecture</strong>: container images and any native dependencies must be built for arm64, so audit your base images, agents and compiled libraries. Migrate a canary first and compare p99, not just cost.',
    tags: ['Graviton', 'Compute Optimizer', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-116',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you stop a retry storm amplifying an outage?',
    hint: 'Three techniques, all needed.',
    back: '<strong>Exponential backoff with jitter</strong> so clients do not synchronise. A <strong>circuit breaker</strong> that fails fast once a dependency is clearly down, instead of queueing work against it. And a <strong>retry budget or token bucket</strong> capping retries as a fraction of traffic. Also make retries <em>idempotent</em>, and never retry a 4xx.',
    tags: ['Resilience', 'Retries', 'Circuit Breaker']
  },
  {
    id: 'aws-sap-fc-117',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does a good health check actually test?',
    hint: 'Shallow lies, deep cascades.',
    back: 'A <strong>shallow</strong> check (process alive) keeps a broken instance in service. A <strong>deep</strong> check that calls every dependency makes one dependency failure eject the whole fleet. The answer is a <em>local</em> readiness check on things the instance itself owns, with dependency health handled by <strong>load shedding and circuit breakers</strong>, plus separate deep checks feeding alarms rather than the load balancer.',
    tags: ['Health Checks', 'Resilience', 'Load Balancing']
  },
  {
    id: 'aws-sap-fc-118',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Auto Scaling lifecycle hooks and warm pools — what are they for?',
    hint: 'Slow boot, fast scale.',
    back: '<strong>Lifecycle hooks</strong> pause an instance at launch or terminate so you can bootstrap, register, or drain gracefully. A <strong>warm pool</strong> keeps pre-initialised instances <em>stopped</em> (or hibernated) so scale-out skips a long boot at a fraction of running cost — the fix when the app takes minutes to become ready and traffic arrives faster than that.',
    tags: ['Auto Scaling', 'Warm Pools', 'Elasticity']
  },
  {
    id: 'aws-sap-fc-119',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make an Athena query on S3 cheap and fast?',
    hint: 'Scan less.',
    back: 'Athena bills per <strong>TB scanned</strong>, so: <strong>partition</strong> on the filter columns (and use partition projection for predictable layouts), store <strong>columnar Parquet or ORC</strong> with compression, <strong>compact small files</strong> into 128 MB+ objects, and select only the columns you need. Table statistics and cost-based optimisation help joins.',
    tags: ['Athena', 'Partitioning', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-120',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does S3 Storage Lens tell you that the bucket console does not?',
    hint: 'Organization-wide, with trends.',
    back: 'Organization-wide <strong>usage and activity metrics with 15 months of trend</strong>, broken down by account, Region, bucket and prefix, plus recommendations — incomplete multipart uploads, non-current version bloat, buckets with no lifecycle rule. The advanced tier adds prefix-level and activity metrics. Pair it with <strong>S3 Inventory</strong> for per-object detail.',
    tags: ['S3', 'Storage Lens', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-121',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Homogeneous vs. heterogeneous database migration',
    hint: 'Does the engine change?',
    back: '<strong>Homogeneous</strong> (Oracle to Oracle, MySQL to Aurora MySQL) — native tools or DMS, no schema conversion, low risk. <strong>Heterogeneous</strong> (Oracle to PostgreSQL) — needs <strong>SCT</strong> for schema and procedural code, application changes for SQL dialect and driver, and a much longer test cycle. The engine change is where the project cost actually lives.',
    tags: ['DMS', 'SCT', 'Migration']
  },
  {
    id: 'aws-sap-fc-122',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Which Snow device for which job?',
    hint: 'Terabytes, or petabytes.',
    back: '<strong>Snowcone</strong> — 8–14 TB, rugged and tiny, edge collection. <strong>Snowball Edge Storage Optimized</strong> — ~80 TB usable, the workhorse for bulk transfer. <strong>Snowball Edge Compute Optimized</strong> — less storage, adds vCPU/GPU for edge processing. <strong>Snowmobile</strong> — up to 100 PB in a shipping container. Cluster Snowballs for petabyte jobs needing durability in transit.',
    tags: ['Snow Family', 'Data Transfer', 'Migration']
  },
  {
    id: 'aws-sap-fc-123',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is Migration Hub Refactor Spaces for?',
    hint: 'The plumbing for a strangler.',
    back: 'It provisions and manages the <strong>routing and network infrastructure</strong> a strangler migration needs — an API Gateway, VPC Links, a Transit Gateway and cross-account routes — so teams can add a new service and shift one route at a time <em>without building the refactor scaffolding themselves</em>. It supports multi-account, which is the usual complication.',
    tags: ['Refactor Spaces', 'Strangler Pattern', 'Modernization']
  },
  {
    id: 'aws-sap-fc-124',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you decompose a shared database during modernization?',
    hint: 'Views, then CDC, then ownership.',
    back: 'Stop new cross-domain joins first. Then give each service a <strong>read-only view or replica</strong> of what it needs, move to <strong>CDC-published events</strong> (DMS or DynamoDB/Aurora streams) so consumers keep their own projections, and finally transfer <strong>write ownership</strong> of each table to exactly one service. Dual-write windows need reconciliation — expect them to be the hard part.',
    tags: ['Modernization', 'Database Decomposition', 'CDC']
  },
  {
    id: 'aws-sap-fc-125',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is hypercare, and why does it belong in the plan?',
    hint: 'The wave is not done at cutover.',
    back: 'A defined period after cutover — typically 2–4 weeks — with <strong>heightened monitoring, the migration team still on call, and a live rollback option</strong>, before the workload is handed to business-as-usual operations. Exit criteria are explicit: error budget intact, no open severity-1 issues, runbooks updated, and the receiving team trained.',
    tags: ['Cutover', 'Hypercare', 'Operations']
  }
];

export default AWS_SAP_FLASHCARDS;
