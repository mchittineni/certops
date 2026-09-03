export const AZURE_AZ204_FLASHCARDS_8 = [
  {
    id: "azure-az204-fc-176",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Cache for Redis: Cache-Aside Pattern",
    hint: "On-demand data caching.",
    back: "In <strong>Cache-Aside</strong>, the application queries cache first, populating it from the database upon misses, optimizing memory utilization for read-heavy workloads.",
    tags: ["Redis", "Cache-Aside", "Caching Pattern"]
  },
  {
    id: "azure-az204-fc-177",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "StackExchange.Redis: ConnectionMultiplexer",
    hint: "Reusing a shared singleton connection.",
    back: "<strong>ConnectionMultiplexer</strong> is thread-safe and must be managed as a <strong>singleton</strong>, multiplexing requests across a single TCP socket.",
    tags: ["Redis", "StackExchange.Redis", "ConnectionMultiplexer"]
  },
  {
    id: "azure-az204-fc-178",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Cache for Redis: Service Tiers",
    hint: "Basic vs. Standard vs. Premium capabilities.",
    back: "<strong>Basic</strong> is a single node (dev/test). <strong>Standard</strong> provides replication/SLA. <strong>Premium</strong> adds clustering, RDB/AOF persistence, and VNet integration.",
    tags: ["Redis", "Premium Tier", "Clustering"]
  },
  {
    id: "azure-az204-fc-179",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Redis Persistence: RDB vs. AOF",
    hint: "Snapshots vs append logs.",
    back: "<strong>RDB persistence</strong> writes periodic point-in-time snapshots to Blob storage. <strong>AOF persistence</strong> logs every write transaction for minimal data loss.",
    tags: ["Redis", "Persistence", "RDB"]
  },
  {
    id: "azure-az204-fc-180",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Redis: Memory Eviction Policies",
    hint: "Reclaiming memory on capacity limits.",
    back: "<strong>volatile-lru</strong> evicts the least recently used keys that have an expiration (TTL). <strong>allkeys-lru</strong> evicts any LRU key regardless of TTL.",
    tags: ["Redis", "Eviction Policy", "volatile-lru"]
  },
  {
    id: "azure-az204-fc-181",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door vs. Azure CDN",
    hint: "Global Anycast Layer 7 routing.",
    back: "<strong>Azure Front Door</strong> combines global Anycast routing, instant multi-region failover, and WAF. <strong>Azure CDN</strong> focuses primarily on static media edge caching.",
    tags: ["Azure Front Door", "Global Load Balancing", "Architecture"]
  },
  {
    id: "azure-az204-fc-182",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Query String Caching",
    hint: "Caching variations by URL parameter.",
    back: "Setting <strong>Cache every unique URL</strong> ensures edge nodes cache distinct responses for each unique query parameter string.",
    tags: ["Azure Front Door", "Caching", "Query Strings"]
  },
  {
    id: "azure-az204-fc-183",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Rules Engine",
    hint: "Edge-based routing and transformations.",
    back: "The <strong>Rules Engine</strong> applies URL redirects, rewrites, and header modifications directly at global edge locations without hitting backend origins.",
    tags: ["Azure Front Door", "Rules Engine", "URL Redirect"]
  },
  {
    id: "azure-az204-fc-184",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Dynamic Site Acceleration",
    hint: "Anycast edge termination and private backbone.",
    back: "<strong>DSA</strong> terminates TCP connections at edge nodes and reuses pre-warmed connections across Microsoft's private global network to accelerate uncacheable traffic.",
    tags: ["Azure Front Door", "DSA", "Latency Optimization"]
  },
  {
    id: "azure-az204-fc-185",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Cache Purge",
    hint: "Instant global asset invalidation.",
    back: "Executing a <strong>Cache Purge</strong> removes stale or erroneous assets across all edge locations worldwide, forcing edge nodes to re-fetch from origin.",
    tags: ["Azure Front Door", "Cache Purge", "Invalidation"]
  },
  {
    id: "azure-az204-fc-186",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: TrackEvent Parameters",
    hint: "Dimensions vs numeric metrics.",
    back: "In <code>TrackEvent</code>, <strong>properties</strong> store string dimensions for filtering, while <strong>metrics</strong> store numeric values for charting and aggregation.",
    tags: ["Application Insights", "TrackEvent", "Custom Telemetry"]
  },
  {
    id: "azure-az204-fc-187",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Smart Detection",
    hint: "Automated anomaly detection.",
    back: "<strong>Smart Detection</strong> applies machine learning to telemetry streams to proactively identify abnormal error rate spikes and performance regressions without manual alarm thresholds.",
    tags: ["Application Insights", "Smart Detection", "Machine Learning"]
  },
  {
    id: "azure-az204-fc-188",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Monitor: Diagnostic Settings Destinations",
    hint: "Log Analytics vs Event Hubs vs Storage.",
    back: "Diagnostic Settings route logs to <strong>Storage Accounts</strong> (cheap long-term compliance storage), <strong>Log Analytics</strong> (querying), or <strong>Event Hubs</strong> (SIEM streaming).",
    tags: ["Azure Monitor", "Diagnostic Settings", "Archiving"]
  },
  {
    id: "azure-az204-fc-189",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Log Analytics: Interactive vs. Archive Retention",
    hint: "Balancing query speed and cost.",
    back: "Configure <strong>Interactive retention</strong> for active query needs (e.g. 90 days) and extend <strong>Total Retention</strong> to archive older data at reduced storage costs.",
    tags: ["Log Analytics", "Data Retention", "Archive Tier"]
  },
  {
    id: "azure-az204-fc-190",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Redis: Client-Side Caching",
    hint: "Server-assisted in-memory invalidation.",
    back: "<strong>Client-Side Caching</strong> keeps hot keys in local application memory while Redis sends invalidation messages whenever keys are modified, minimizing network round-trips.",
    tags: ["Redis", "Client-Side Caching", "Optimization"]
  },
  {
    id: "azure-az204-fc-191",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Integrated WAF",
    hint: "Edge-based Layer 7 threat mitigation.",
    back: "<strong>Azure WAF on Front Door</strong> blocks OWASP Top 10 threats (SQL injection, cross-site scripting) at global edge PoPs before traffic reaches your application.",
    tags: ["Azure Front Door", "WAF", "Layer 7 Security"]
  },
  {
    id: "azure-az204-fc-192",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "KQL: make-series Operator",
    hint: "Generating regularized time series data.",
    back: "The <strong>make-series</strong> operator produces continuous time series arrays with automatic gap filling (zero-fill), ideal for metric graphs and anomaly detection.",
    tags: ["KQL", "make-series", "Time Series"]
  },
  {
    id: "azure-az204-fc-193",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Map: Failure Indicators",
    hint: "Visualizing degraded dependencies.",
    back: "Red nodes in <strong>Application Map</strong> flag elevated failure rates or exceptions in downstream services, enabling immediate isolation of broken dependencies.",
    tags: ["Application Insights", "Application Map", "Troubleshooting"]
  },
  {
    id: "azure-az204-fc-194",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Redis Clustering: 16,384 Hash Slots",
    hint: "Horizontal data sharding.",
    back: "Redis Cluster shards data by assigning keys across <strong>16,384 hash slots</strong> distributed among cluster shards, scaling memory and throughput linearly.",
    tags: ["Redis", "Clustering", "Hash Slots"]
  },
  {
    id: "azure-az204-fc-195",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Front Door: Geo-Filtering Rules",
    hint: "Restricting content access by country.",
    back: "<strong>Geo-filtering WAF rules</strong> evaluate caller IP country codes to permit or block access by geographic region at global edge locations.",
    tags: ["Azure Front Door", "Geo-Filtering", "WAF"]
  },
  {
    id: "azure-az204-fc-196",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Core Architecture Planes",
    hint: "Gateway, Management, and Developer Portal.",
    back: "The <strong>API Gateway</strong> processes data plane traffic (policies, routing, caching), the <strong>Management Plane</strong> handles administration, and the <strong>Developer Portal</strong> serves consumers.",
    tags: ["APIM", "API Gateway", "Architecture"]
  },
  {
    id: "azure-az204-fc-197",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM Policies: Execution Sections",
    hint: "Inbound, Backend, Outbound, and On-Error.",
    back: "Policies execute sequentially: <strong>&lt;inbound&gt;</strong> (pre-backend), <strong>&lt;backend&gt;</strong> (routing), <strong>&lt;outbound&gt;</strong> (post-backend), and <strong>&lt;on-error&gt;</strong> (exception handling).",
    tags: ["APIM", "Policies", "Inbound"]
  },
  {
    id: "azure-az204-fc-198",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: rate-limit-by-key Policy",
    hint: "Throttling client request bursts.",
    back: "The <strong>&lt;rate-limit-by-key&gt;</strong> policy caps request rates over short windows (e.g. 100 calls per 60s) based on caller IP or subscription key.",
    tags: ["APIM", "Policies", "Rate Limiting"]
  },
  {
    id: "azure-az204-fc-199",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: validate-jwt Policy",
    hint: "Pre-backend JWT signature and claims validation.",
    back: "The <strong>&lt;validate-jwt&gt;</strong> policy inspects tokens at the gateway, validating signatures, expiration, and audience claims before forwarding to backends.",
    tags: ["APIM", "validate-jwt", "OAuth"]
  },
  {
    id: "azure-az204-fc-200",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: rewrite-uri Policy",
    hint: "Transforming public paths to backend URLs.",
    back: "The <strong>&lt;rewrite-uri&gt;</strong> policy rewrites the path and query parameters forwarded to the backend, decoupling public endpoints from internal route schemas.",
    tags: ["APIM", "rewrite-uri", "Routing"]
  }
];

export default AZURE_AZ204_FLASHCARDS_8;
