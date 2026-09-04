export const AZURE_AZ204_QUESTIONS_8 = [
  {
    id: "azure-az204-176",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Cache-Aside Pattern with StackExchange.Redis",
    scenario: "An application reads product details from an Azure SQL Database. The application must check Azure Cache for Redis first. On a cache miss, it queries the database, caches the result with a TTL, and returns the data.",
    question: "Which architectural caching pattern is implemented here?",
    options: [
      { id: 'A', text: "Write-Behind pattern" },
      { id: 'B', text: "Refresh-Ahead pattern" },
      { id: 'C', text: "Write-Through pattern" },
      { id: 'D', text: "Cache-Aside pattern (Lazy Loading)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the `Cache-Aside` pattern, application code explicitly manages the cache: querying the cache first, falling back to the database upon a cache miss, writing the fetched record into Redis with an expiration, and returning the result.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
    tags: ["Redis", "Cache-Aside", "Caching Pattern"]
  },
  {
    id: "azure-az204-177",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis ConnectionMultiplexer Singleton Lifecycle",
    scenario: "A developer is writing a C# web API using the `StackExchange.Redis` library to interact with Azure Cache for Redis.",
    question: "What is the recommended lifecycle and best practice for managing the ConnectionMultiplexer instance?",
    options: [
      { id: 'A', text: "Create a static thread-local instance per thread" },
      { id: 'B', text: "Create and share a single ConnectionMultiplexer instance as a singleton throughout the application lifetime" },
      { id: 'C', text: "Instantiate a new ConnectionMultiplexer instance inside every HTTP request and dispose it" },
      { id: 'D', text: "Store ConnectionMultiplexer in client browser cookies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In `StackExchange.Redis`, the `ConnectionMultiplexer` is designed to be shared and reused across callers. It is fully thread-safe and multiplexes commands over a single underlying TCP connection. Creating a new instance per request exhausts socket connections and degrades performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache#connect-to-the-cache",
    tags: ["Redis", "StackExchange.Redis", "ConnectionMultiplexer"]
  },
  {
    id: "azure-az204-178",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Tiers: Basic vs Standard vs Premium",
    scenario: "A mission-critical financial application requires an in-memory cache with an SLA, automated primary-to-replica failover, data persistence, and Virtual Network (VNet) private isolation.",
    question: "Which Azure Cache for Redis tier provides Redis clustering, data persistence (RDB/AOF), and VNet hosting?",
    options: [
      { id: 'A', text: "General Purpose tier" },
      { id: 'B', text: "Premium tier" },
      { id: 'C', text: "Basic tier (single node, no SLA)" },
      { id: 'D', text: "Standard tier (two nodes, no VNet or persistence)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Cache for Redis `Premium` tier provides high availability with replication, Redis clustering, data persistence (RDB snapshots and AOF logs), virtual network deployment, and higher network bandwidth. The Standard tier lacks clustering, persistence, and VNet integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview#service-tiers",
    tags: ["Redis", "Premium Tier", "Clustering"]
  },
  {
    id: "azure-az204-179",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Data Persistence: RDB vs AOF",
    scenario: "A developer configures data persistence on an Azure Cache for Redis Premium instance. The application requires point-in-time snapshot backups stored in an Azure Storage account.",
    question: "Which Redis persistence mode creates point-in-time snapshot files?",
    options: [
      { id: 'A', text: "RDB (Redis Database) persistence" },
      { id: 'B', text: "AOF (Append-Only File) persistence" },
      { id: 'C', text: "In-Memory Snapshotting alone" },
      { id: 'D', text: "Redis Transaction Logging" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Redis supports two persistence modes: `RDB` (creates point-in-time snapshots of the dataset at specified intervals and writes them to an Azure Storage Blob container) and `AOF` (logs every write operation to an append-only log). RDB is ideal for disaster recovery backups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-how-to-premium-persistence",
    tags: ["Redis", "Persistence", "RDB"]
  },
  {
    id: "azure-az204-180",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Eviction Policies: volatile-lru vs allkeys-lru",
    scenario: "An Azure Cache for Redis instance reaches its memory ceiling. The developer wants Redis to automatically evict the least recently used keys, but only from keys configured with a Time to Live (TTL) expiration.",
    question: "Which maxmemory eviction policy should the developer configure?",
    options: [
      { id: 'A', text: "noeviction" },
      { id: 'B', text: "allkeys-random" },
      { id: 'C', text: "allkeys-lru" },
      { id: 'D', text: "volatile-lru" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`volatile-lru` evicts the least recently used keys among those that have an expiration set. `allkeys-lru` evicts any least recently used key regardless of TTL. `noeviction` returns errors when memory is exhausted.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure#maxmemory-policy",
    tags: ["Redis", "Eviction Policy", "volatile-lru"]
  },
  {
    id: "azure-az204-181",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door vs Azure CDN Architecture Comparison",
    scenario: "An architect is choosing between Azure Front Door and Azure CDN. The application requires global Anycast routing, automated SSL offload, instant failover across multiple cloud regions, and Layer 7 Web Application Firewall (WAF).",
    question: "Which service is designed specifically as a global Layer 7 application accelerator and load balancer?",
    options: [
      { id: 'A', text: "Azure Traffic Manager alone" },
      { id: 'B', text: "Azure Application Gateway alone" },
      { id: 'C', text: "Azure CDN Standard" },
      { id: 'D', text: "Azure Front Door" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Front Door is a global Layer 7 load balancer, application accelerator, and content delivery network. It uses Microsoft's global Anycast network to split TCP handshakes at the edge, provides instant multi-region failover, SSL offload, and integrated WAF protection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview",
    tags: ["Azure Front Door", "Global Load Balancing", "Architecture"]
  },
  {
    id: "azure-az204-182",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Caching Behavior with Query Strings",
    scenario: "A product image URL `https://cdn.contoso.com/images/shoe.jpg?size=small` and `https://cdn.contoso.com/images/shoe.jpg?size=large` deliver different image resolutions.",
    question: "Which caching query string behavior should the developer configure on the endpoint routing rule?",
    options: [
      { id: 'A', text: "Standard query stripping" },
      { id: 'B', text: "Bypass caching" },
      { id: 'C', text: "Cache every unique URL" },
      { id: 'D', text: "Ignore query strings" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure Front Door / CDN, setting Query String Caching to `Cache every unique URL` instructs edge servers to treat each unique query string variation as a distinct cached asset, ensuring `size=small` and `size=large` are cached separately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-caching#query-string-caching",
    tags: ["Azure Front Door", "Caching", "Query Strings"]
  },
  {
    id: "azure-az204-183",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Rules Engine for URL Redirections",
    scenario: "A marketing website needs to automatically redirect legacy HTTP requests from `/old-promo` to `https://contoso.com/new-campaign` with a 301 Permanent Redirect at the edge without reaching backend servers.",
    question: "Which Azure Front Door feature executes URL rewrites and HTTP redirects at edge locations?",
    options: [
      { id: 'A', text: "Traffic Manager profiles" },
      { id: 'B', text: "Health Probe settings" },
      { id: 'C', text: "Azure Front Door Rules Engine" },
      { id: 'D', text: "Origin Groups" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Front Door `Rules Engine` allows developers to customize how HTTP requests are handled at the edge. Rules evaluate request headers, paths, or query strings, and apply actions such as URL redirects (HTTP 301/302), URL rewrites, or custom response headers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine",
    tags: ["Azure Front Door", "Rules Engine", "URL Redirect"]
  },
  {
    id: "azure-az204-184",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Dynamic Site Acceleration (DSA)",
    scenario: "A dynamic API cannot cache JSON responses because data changes every second. However, international mobile users in Asia and Europe experience high latency connecting to the US backend.",
    question: "How does Azure Front Door Dynamic Site Acceleration (DSA) improve latency for uncacheable dynamic requests?",
    options: [
      { id: 'A', text: "By terminating TCP/TLS handshakes at the nearest global Edge location and utilizing warm, persistent connection pools over Microsoft's private global fiber network to the origin" },
      { id: 'B', text: "By caching dynamic data in memory for 24 hours" },
      { id: 'C', text: "By deploying dedicated physical servers in every city" },
      { id: 'D', text: "By compressing JSON files using lossy audio codecs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dynamic Site Acceleration (DSA) optimizes dynamic, non-cacheable traffic by terminating TCP handshakes at the edge PoP nearest to the user, using TCP route optimization, and routing traffic to the origin over pre-warmed, persistent TCP connections on Microsoft's private global backbone.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-routing-architecture",
    tags: ["Azure Front Door", "DSA", "Latency Optimization"]
  },
  {
    id: "azure-az204-185",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Purge Cache API for Immediate Invalidation",
    scenario: "A developer accidentally deployed an erroneous JavaScript bundle to production that is cached across global Azure Front Door edge nodes with a 7-day TTL.",
    question: "Which action immediately removes the cached asset from all edge locations worldwide?",
    options: [
      { id: 'A', text: "Execute a Cache Purge operation specifying the asset path (e.g. /* or /scripts/app.js)" },
      { id: 'B', text: "Wait for the 7-day TTL to expire" },
      { id: 'C', text: "Restart the backend origin server" },
      { id: 'D', text: "Delete the Azure subscription and recreate it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Purge Cache` operation in Azure Front Door purges cached assets from all edge points of presence globally. Developers specify exact paths (e.g. `/scripts/app.js`) or wildcards (`/*`), forcing subsequent requests to fetch the fresh version from the origin.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-caching#cache-purge",
    tags: ["Azure Front Door", "Cache Purge", "Invalidation"]
  },
  {
    id: "azure-az204-186",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Event Tracking with Properties and Metrics",
    scenario: "A developer tracks a user checkout event in Application Insights: `telemetryClient.TrackEvent('CheckoutCompleted', properties, metrics);`.",
    question: "What is the difference between the `properties` dictionary and the `metrics` dictionary in TrackEvent?",
    options: [
      { id: 'A', text: "properties contains string key-value pairs for categorical filtering; metrics contains numerical key-value pairs for aggregation and charting" },
      { id: 'B', text: "properties is only for timestamps; metrics is for error messages" },
      { id: 'C', text: "properties can only contain integers; metrics contains strings" },
      { id: 'D', text: "Both dictionaries are identical in functionality" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `TrackEvent`, the `properties` dictionary (`IDictionary<string, string>`) holds dimensional metadata for slicing and grouping in Analytics. The `metrics` dictionary (`IDictionary<string, double>`) holds numeric values that can be averaged, summed, or graphed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics#trackevent",
    tags: ["Application Insights", "TrackEvent", "Custom Telemetry"]
  },
  {
    id: "azure-az204-187",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Smart Detection Anomaly Detection",
    scenario: "An operations engineer receives an automated email from Application Insights stating that the failure rate for an API endpoint spiked abnormally compared to historical baselines.",
    question: "Which built-in Application Insights feature uses machine learning to detect proactive performance anomalies without manual alarm thresholds?",
    options: [
      { id: 'A', text: "Continuous Profiler" },
      { id: 'B', text: "Smart Detection (Failure Anomalies)" },
      { id: 'C', text: "Availability Web Tests" },
      { id: 'D', text: "Azure Advisor alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Application Insights `Smart Detection` uses machine learning algorithms to automatically analyze application telemetry. It identifies anomalies in failure rates, performance degradation, memory leaks, and trace degradation without requiring manual threshold configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/proactive-diagnostics",
    tags: ["Application Insights", "Smart Detection", "Machine Learning"]
  },
  {
    id: "azure-az204-188",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Diagnostic Settings Ingestion Architecture",
    scenario: "An enterprise security standard requires that all resource diagnostic logs (from Key Vault, App Service, and Cosmos DB) must be retained for 365 days in long-term cold storage.",
    question: "Which destination in Diagnostic Settings provides lowest-cost long-term retention?",
    options: [
      { id: 'A', text: "An Azure Storage Account container" },
      { id: 'B', text: "A Log Analytics workspace" },
      { id: 'C', text: "An Azure Event Hub" },
      { id: 'D', text: "Application Insights" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Monitor Diagnostic Settings, logs can be routed to three destinations: `Log Analytics workspace` (for interactive querying and alerting), `Event Hubs` (for real-time streaming to third-party SIEMs), and `Storage Account` (for low-cost, long-term compliance archiving).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings",
    tags: ["Azure Monitor", "Diagnostic Settings", "Archiving"]
  },
  {
    id: "azure-az204-189",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Log Analytics Workspace Data Retention and Archive Tiers",
    scenario: "A company wants to store security logs in Log Analytics for 2 years. Interactive querying is only required for the most recent 90 days.",
    question: "How should the workspace retention be configured to optimize storage costs?",
    options: [
      { id: 'A', text: "Set interactive retention to 90 days and enable Total Retention (Archive tier) for 730 days" },
      { id: 'B', text: "Set interactive retention to 730 days" },
      { id: 'C', text: "Delete logs older than 90 days" },
      { id: 'D', text: "Export logs to a local on-premises server" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Log Analytics workspaces support two retention tiers: `Interactive retention` (typically 30-90 days, full analytical query performance) and `Archive retention` (up to 7 years, low-cost cold storage where data can be searched via search jobs or restored when needed).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive",
    tags: ["Log Analytics", "Data Retention", "Archive Tier"]
  },
  {
    id: "azure-az204-190",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Redis StackExchange.Redis Server-Assisted Client-Side Caching",
    scenario: "A high-frequency web service reads the same product configuration key 10,000 times per second from Azure Cache for Redis. The team wants to cache the value in local application memory and invalidate it only when changed in Redis.",
    question: "Which advanced caching capability invalidates local in-memory caches using Redis tracking?",
    options: [
      { id: 'A', text: "Client-Side Caching (Tracking / Invalidation Messages)" },
      { id: 'B', text: "Manual polling loops" },
      { id: 'C', text: "Redis Pub/Sub alone" },
      { id: 'D', text: "Setting TTL to 1 millisecond" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Redis 6+ supports server-assisted `Client-Side Caching`. The client stores requested keys in local in-memory dictionaries. When another client modifies a key in Redis, the Redis server sends an asynchronous invalidation message to the client, evicting the stale local cache entry.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices-development",
    tags: ["Redis", "Client-Side Caching", "Optimization"]
  },
  {
    id: "azure-az204-191",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Web Application Firewall (WAF) Integration",
    scenario: "A public web application receives malicious HTTP payloads containing SQL injection strings in request query parameters.",
    question: "Which security service integrated with Azure Front Door inspects and blocks malicious Layer 7 traffic at the edge?",
    options: [
      { id: 'A', text: "Network Security Groups on VMs" },
      { id: 'B', text: "App Service IP Restrictions alone" },
      { id: 'C', text: "Azure DDoS Protection Standard alone" },
      { id: 'D', text: "Azure Web Application Firewall (WAF) on Azure Front Door" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Web Application Firewall (WAF) can be deployed directly on Azure Front Door edge points of presence. It evaluates incoming requests against the Default Rule Set (DRS) based on OWASP Top 10 vulnerabilities (SQLi, XSS, RCE), blocking attacks at the edge before they reach backend origins.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview",
    tags: ["Azure Front Door", "WAF", "Layer 7 Security"]
  },
  {
    id: "azure-az204-192",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "KQL Time Series Analysis with make-series Operator",
    scenario: "A developer is analyzing API response times over 7 days. The query must produce a regular, continuous time series array suitable for graphing, filling missing intervals with zero.",
    question: "Which KQL operator generates regularized time series arrays?",
    options: [
      { id: 'A', text: "summarize" },
      { id: 'B', text: "make-series" },
      { id: 'C', text: "project" },
      { id: 'D', text: "render" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `make-series` KQL operator generates a series of specified aggregated values along a specified axis (typically time). Unlike `summarize`, `make-series` automatically fills gaps with default values (such as 0), producing clean arrays for machine learning and charting.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/make-series-operator",
    tags: ["KQL", "make-series", "Time Series"]
  },
  {
    id: "azure-az204-193",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Application Map Health KPIs & Filters",
    scenario: "In the Application Insights Application Map, an engineer notices a dependency node for an external payment gateway is glowing red.",
    question: "What metric does the red color and error percentage on a dependency node indicate?",
    options: [
      { id: 'A', text: "A high failure rate (percentage of dependency calls that returned HTTP 4XX/5XX or failed exceptions)" },
      { id: 'B', text: "That the external API is using an expired SSL certificate" },
      { id: 'C', text: "That the external API has exceeded its daily billing quota" },
      { id: 'D', text: "That the developer's laptop is disconnected from the internet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Map color-codes dependency nodes and call links based on health KPIs. A red circle or red connecting line indicates that a statistically significant percentage of calls to that component resulted in failures or exceptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map",
    tags: ["Application Insights", "Application Map", "Troubleshooting"]
  },
  {
    id: "azure-az204-194",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Cache for Redis Clustering Scale and Hash Slots",
    scenario: "An enterprise Redis cache dataset requires 200 GB of memory and 50,000 operations per second. A single Redis node cannot handle this workload.",
    question: "How does Redis clustering shard keys across multiple nodes?",
    options: [
      { id: 'A', text: "By dividing the keyspace into 16,384 logical hash slots distributed across primary cluster nodes" },
      { id: 'B', text: "By running a round-robin DNS server" },
      { id: 'C', text: "By creating duplicate copies of every key on every node" },
      { id: 'D', text: "By hashing keys into 100 fixed partitions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Redis clustering partitions data horizontally across up to 10 shards (up to 500 shards in Enterprise). Every key is assigned to one of 16,384 logical hash slots (`CRC16(key) mod 16384`), and each node is responsible for a subset of the hash slots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-how-to-premium-clustering",
    tags: ["Redis", "Clustering", "Hash Slots"]
  },
  {
    id: "azure-az204-195",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Front Door Geo-Filtering Rules",
    scenario: "A video streaming service holds broadcasting licenses valid only in the United States and Canada. Users connecting from any other country must be blocked with an HTTP 403 Forbidden.",
    question: "Which Azure Front Door WAF feature enforces geographical access restrictions based on client IP country codes?",
    options: [
      { id: 'A', text: "Geo-filtering custom rules in WAF policy" },
      { id: 'B', text: "Application Gateway URL path maps" },
      { id: 'C', text: "Azure Route 53 Geolocation" },
      { id: 'D', text: "DNS blackholing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Front Door WAF supports `Geo-filtering` custom rules. The rule matches the client IP address against a country code database (ISO 3166-1 alpha-2) and applies an `Allow` or `Block` action at edge locations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/web-application-firewall/afds/waf-front-door-geo-filtering",
    tags: ["Azure Front Door", "Geo-Filtering", "WAF"]
  },
  {
    id: "azure-az204-196",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure API Management Architecture Planes",
    scenario: "A developer is evaluating the architectural layers of Azure API Management (APIM).",
    question: "Which APIM component acts as the reverse proxy that accepts API calls, validates JWT tokens, enforces rate limits, and routes requests to backend services?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "The API Gateway (Data Plane)" },
      { id: 'C', text: "The Management Plane" },
      { id: 'D', text: "The Developer Portal" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure API Management consists of three core components: the `API Gateway` (data plane proxy that intercepts incoming calls, executes policies, and routes traffic), the `Management Plane` (administrative REST API and portal), and the `Developer Portal` (self-service API documentation and key management for consumers).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts",
    tags: ["APIM", "API Gateway", "Architecture"]
  },
  {
    id: "azure-az204-197",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure API Management Policy Execution Sections",
    scenario: "In Azure API Management, an XML policy document defines transformations across the request and response pipeline.",
    question: "In which policy section should a developer modify request headers before the request is forwarded to the backend service?",
    options: [
      { id: 'A', text: "The &lt;on-error&gt; section" },
      { id: 'B', text: "The &lt;inbound&gt; section" },
      { id: 'C', text: "The &lt;backend&gt; section" },
      { id: 'D', text: "The &lt;outbound&gt; section" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "APIM policies are divided into four sequential execution blocks: `&lt;inbound&gt;` (executes before request is forwarded to backend), `&lt;backend&gt;` (controls forwarding to backend), `&lt;outbound&gt;` (executes after receiving response from backend before returning to client), and `&lt;on-error&gt;` (executes if an exception occurs in any section).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-policies",
    tags: ["APIM", "Policies", "Inbound"]
  },
  {
    id: "azure-az204-198",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: rate-limit-by-key for Client Throttling",
    scenario: "A public weather API in API Management needs to limit each individual client application to a maximum of 100 requests per minute based on the caller's subscription key or client IP.",
    question: "Which APIM policy statement enforces key-based request rate limiting?",
    options: [
      { id: 'A', text: "&lt;rate-limit-by-key calls='100' renewal-period='60' counter-key='@(context.Subscription.Key)' /&gt;" },
      { id: 'B', text: "&lt;quota-by-key calls='100' renewal-period='60' /&gt;" },
      { id: 'C', text: "&lt;throttle calls='100' /&gt;" },
      { id: 'D', text: "&lt;validate-jwt calls='100' /&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `&lt;rate-limit-by-key&gt;` policy tracks and enforces call rate limits per custom key (such as subscription key, IP address, or JWT claim) over a short renewal period (e.g. 60 seconds), returning an HTTP 429 Too Many Requests when the limit is breached.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["APIM", "Policies", "Rate Limiting"]
  },
  {
    id: "azure-az204-199",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: validate-jwt for Token Authentication",
    scenario: "An API Management instance receives requests with OAuth 2.0 access tokens. APIM must verify that the token was signed by Microsoft Entra ID and contains an audience claim matching the API's client ID.",
    question: "Which APIM policy validates JSON Web Tokens and enforces required claims?",
    options: [
      { id: 'A', text: "&lt;check-header&gt;" },
      { id: 'B', text: "&lt;validate-jwt&gt;" },
      { id: 'C', text: "&lt;set-variable&gt;" },
      { id: 'D', text: "&lt;authenticate-basic&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `&lt;validate-jwt&gt;` policy validates the cryptographic signature, expiration dates, and required claims of incoming JWT tokens against openid-configuration metadata before routing requests to backend services.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-jwt-policy",
    tags: ["APIM", "validate-jwt", "OAuth"]
  },
  {
    id: "azure-az204-200",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: rewrite-uri for Backend URL Mapping",
    scenario: "An API Management gateway exposes a public endpoint `/api/v1/customers/{id}`. The backend REST service expects the request at `/services/crm/customer-lookup?cid={id}`.",
    question: "Which APIM policy modifies the URL path and query parameters sent to the backend?",
    options: [
      { id: 'A', text: "&lt;rewrite-uri template='/services/crm/customer-lookup?cid=@(context.Request.MatchedParameters[\"id\"])' /&gt;" },
      { id: 'B', text: "&lt;set-header name='X-Original-URL' /&gt;" },
      { id: 'C', text: "&lt;forward-request /&gt;" },
      { id: 'D', text: "&lt;redirect-url /&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `&lt;rewrite-uri&gt;` policy transforms the request URL path and query string before sending it to the backend service, decoupling the public API design from internal backend URL structures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rewrite-uri-policy",
    tags: ["APIM", "rewrite-uri", "Routing"]
  }
];

export default AZURE_AZ204_QUESTIONS_8;
