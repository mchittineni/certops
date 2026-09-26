export const AZURE_AZ305_FLASHCARDS_16 = [
  {
    id: "azure-az305-fc-376",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event, event stream or message: which Azure service fits each?",
    hint: "Did something happen, is it a firehose, or is someone expecting work done?",
    back: "A <strong>discrete event</strong> (a notification that something happened, such as a blob created) fits <strong>Event Grid</strong>: push delivery, filtering, no payload guarantees beyond the event. An <strong>event stream</strong> (high-volume telemetry analysed over time, replayable) fits <strong>Event Hubs</strong>. A <strong>message</strong> (a command or business transaction the sender expects to be processed, with ordering, transactions or dead-lettering) fits <strong>Service Bus</strong>. Many designs combine all three.",
    tags: ["Event Grid", "Event Hubs", "Service Bus"]
  },
  {
    id: "azure-az305-fc-377",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Grid topic types: system, custom, partner and namespace topics. What publishes to each?",
    hint: "Azure services, your apps, SaaS vendors, and the newer resource model.",
    back: "<strong>System topics</strong> carry events from Azure services such as Storage, Key Vault or resource groups. <strong>Custom topics</strong> receive events your applications publish over HTTP. <strong>Partner topics</strong> deliver events from SaaS partners into your subscription. <strong>Namespace topics</strong>, in Event Grid namespaces, accept CloudEvents over HTTP, support <strong>pull</strong> as well as push delivery, and sit alongside the MQTT broker.",
    tags: ["Event Grid", "Topics"]
  },
  {
    id: "azure-az305-fc-378",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Grid push delivery vs pull delivery: when would you choose pull?",
    hint: "Who controls the pace and the network path?",
    back: "<strong>Push</strong> (classic topics and namespace push subscriptions): Event Grid calls your handler (webhook, Function, Service Bus, Event Hubs, Storage queue) as events arrive, with retries. <strong>Pull</strong> (namespace topics only): consumers connect and receive events at their own pace, then acknowledge, release or reject them, similar to a queue. Choose pull when consumers cannot expose a public endpoint, need to control their throughput, or sit behind private networking.",
    tags: ["Event Grid", "Delivery"]
  },
  {
    id: "azure-az305-fc-379",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "How does Event Grid retry failed deliveries, and what happens when retries run out?",
    hint: "Two limits, then either the bin or a container.",
    back: "Event Grid retries with an <strong>exponential backoff</strong> until either the <strong>maximum delivery attempts</strong> (default 30) or the <strong>event time to live</strong> (default 1,440 minutes, 24 hours) is reached; both are configurable per subscription. Some errors, such as 400 Bad Request or 413, are not retried. When retries are exhausted the event is <strong>dropped</strong> unless a <strong>dead-letter</strong> Blob Storage container is configured, where it is stored for replay.",
    tags: ["Event Grid", "Retry", "Dead-lettering"]
  },
  {
    id: "azure-az305-fc-380",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Grid schema vs CloudEvents schema: which should a new design use?",
    hint: "One is an open standard.",
    back: "<strong>CloudEvents v1.0</strong> is the CNCF open standard for describing events, supported for input and output on Event Grid topics and <strong>required by Event Grid namespaces</strong>; it improves interoperability across clouds and tools. The proprietary <strong>Event Grid schema</strong> is the original format used by classic topics and many existing handlers. Prefer CloudEvents for new designs unless existing consumers depend on the Event Grid schema.",
    tags: ["Event Grid", "CloudEvents"]
  },
  {
    id: "azure-az305-fc-381",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Hubs Basic, Standard, Premium and Dedicated: what changes between tiers?",
    hint: "Kafka, Capture, retention, and whether you share hardware.",
    back: "<strong>Basic</strong>: one consumer group, one-day retention, no Kafka endpoint or Capture. <strong>Standard</strong>: multiple consumer groups, up to 7-day retention, <strong>Kafka endpoint</strong>, Capture (extra charge), throughput units with auto-inflate. <strong>Premium</strong>: isolated resources in processing units, up to 90-day retention, Capture included, partitions that can be increased. <strong>Dedicated</strong>: single-tenant clusters in capacity units for the largest, most demanding workloads.",
    tags: ["Event Hubs", "Tiers"]
  },
  {
    id: "azure-az305-fc-382",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Hubs partitions: what do they give you, and how do you keep related events in order?",
    hint: "Order exists only inside one partition.",
    back: "Partitions are ordered, append-only logs that let the hub scale: each partition is read by at most one active reader per consumer group, so partition count caps parallelism. Events are ordered <strong>only within a partition</strong>, so send related events (one device, one account) with the same <strong>partition key</strong> to keep them in order. Round-robin sends spread load but lose ordering. Choose the partition count up front; Standard cannot change it later.",
    tags: ["Event Hubs", "Partitions"]
  },
  {
    id: "azure-az305-fc-383",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Hubs consumer groups and checkpointing: what does each provide?",
    hint: "Independent views and bookmarks.",
    back: "A <strong>consumer group</strong> is an independent view of the whole stream, so each downstream application (alerting, archiving, analytics) reads all events at its own pace without affecting the others. <strong>Checkpointing</strong> records, per partition, the offset a reader has processed, typically in Blob Storage through the event processor client, so a restarted or rebalanced reader resumes where it stopped instead of from the start.",
    tags: ["Event Hubs", "Consumer groups", "Checkpointing"]
  },
  {
    id: "azure-az305-fc-384",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Event Hubs capacity: throughput units vs processing units vs capacity units. What does each buy?",
    hint: "One per tier, from Standard to Dedicated.",
    back: "<strong>Throughput units</strong> (Basic and Standard): each allows about <strong>1 MB/s or 1,000 events/s ingress</strong> and 2 MB/s egress; exceed them and requests are throttled, so enable <strong>auto-inflate</strong> to add units automatically. <strong>Processing units</strong> (Premium): isolated CPU and memory with no fixed per-unit event limit, giving more predictable latency. <strong>Capacity units</strong> (Dedicated): a single-tenant cluster sized for very high ingress.",
    tags: ["Event Hubs", "Throughput units", "Scaling"]
  },
  {
    id: "azure-az305-fc-385",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "What does Event Hubs Capture do, and what does it save you from building?",
    hint: "The stream lands in storage by itself.",
    back: "Capture automatically writes the events flowing through an event hub to <strong>Blob Storage or Data Lake Storage</strong> in <strong>Avro</strong> files, partitioned by time, whenever a configured <strong>time or size window</strong> is reached. It removes the need to write, host and scale a consumer that archives the stream, and it runs alongside real-time consumers. It is available on Standard (as an add-on), Premium and Dedicated.",
    tags: ["Event Hubs", "Capture"]
  },
  {
    id: "azure-az305-fc-386",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Devices and messaging: IoT Hub vs Event Grid MQTT broker vs Event Hubs?",
    hint: "Manage devices, broker between them, or just ingest.",
    back: "<strong>IoT Hub</strong>: per-device identity, <strong>device twins</strong>, direct methods and cloud-to-device messages, device provisioning and telemetry ingestion; choose it to manage and command devices. <strong>Event Grid MQTT broker</strong>: MQTT v3.1.1 and v5 <strong>publish-subscribe between clients</strong> on hierarchical topics, with routing into Event Grid; choose it for many-to-many messaging. <strong>Event Hubs</strong>: high-throughput ingestion over AMQP, HTTPS or Kafka with no device management.",
    tags: ["IoT Hub", "Event Grid", "MQTT"]
  },
  {
    id: "azure-az305-fc-387",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Saga pattern: choreography vs orchestration. How do you keep a multi-service business transaction consistent without a distributed transaction?",
    hint: "Every step has an undo; the question is who decides what runs next.",
    back: "A <strong>saga</strong> splits the transaction into local transactions, each with a <strong>compensating transaction</strong> that undoes it if a later step fails. In <strong>choreography</strong>, each service publishes events (for example on Service Bus topics or Event Grid) and the next service reacts; there is no central coordinator, but the flow gets hard to trace as steps grow. In <strong>orchestration</strong>, a coordinator such as Durable Functions or Logic Apps calls each step and runs compensations in reverse on failure, giving one place to see state at the cost of a central component. Either way the result is eventual, not immediate, consistency.",
    tags: ["Saga pattern", "Distributed transactions", "Durable Functions"]
  },
  {
    id: "azure-az305-fc-388",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management tiers: Consumption, Developer, classic Basic/Standard/Premium and the v2 tiers. How do you narrow the choice?",
    hint: "Production or not, network isolation, regions.",
    back: "<strong>Consumption</strong>: serverless, billed per call, no built-in cache or VNet. <strong>Developer</strong>: full features for non-production, <strong>no SLA</strong>. <strong>Basic v2 / Standard v2</strong>: fast-deploying production tiers; Standard v2 adds outbound <strong>VNet integration</strong>. <strong>Premium</strong> (classic) and <strong>Premium v2</strong>: VNet injection for a fully private gateway, availability zones and higher scale; classic Premium adds <strong>multi-region</strong> gateways and self-hosted gateways. Start from networking and region needs.",
    tags: ["API Management", "Tiers"]
  },
  {
    id: "azure-az305-fc-389",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management policies: which sections and scopes exist, and how do scopes combine?",
    hint: "Four sections, several levels, and one element that inherits.",
    back: "A policy document has <strong>inbound</strong> (before the backend: auth, rate limits, transforms), <strong>backend</strong> (forwarding, retries), <strong>outbound</strong> (response transforms, caching) and <strong>on-error</strong> sections. Policies can be set at <strong>global</strong>, <strong>workspace</strong>, <strong>product</strong>, <strong>API</strong> and <strong>operation</strong> scope; the <code>&lt;base /&gt;</code> element places the parent scope's policies at that point, so a narrower scope can run before, after or instead of the broader ones.",
    tags: ["API Management", "Policies"]
  },
  {
    id: "azure-az305-fc-390",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management products and subscriptions: how do consumers get access to APIs?",
    hint: "A bundle, a key, and optionally an approval.",
    back: "A <strong>product</strong> bundles one or more APIs with usage policies, and can be open or require a <strong>subscription</strong>. A subscription issues <strong>primary and secondary keys</strong> that callers send in the <code>Ocp-Apim-Subscription-Key</code> header. Subscriptions can be scoped to a product, a single API or all APIs, and a product can require <strong>administrator approval</strong> before a subscription becomes active. Developers request them through the developer portal.",
    tags: ["API Management", "Products", "Subscriptions"]
  },
  {
    id: "azure-az305-fc-391",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management rate-limit vs quota policies: which one protects the backend from bursts?",
    hint: "Short window vs long window.",
    back: "<strong>Rate limit</strong> policies (<code>rate-limit</code>, <code>rate-limit-by-key</code>) cap calls over a <strong>short renewal period</strong>, such as 100 calls per minute, returning 429 when exceeded, which protects the backend from spikes. <strong>Quota</strong> policies (<code>quota</code>, <code>quota-by-key</code>) cap total calls or bandwidth over a <strong>long period</strong>, such as a month, enforcing commercial plan limits. The <strong>-by-key</strong> variants count by any expression, for example an IP address or token claim.",
    tags: ["API Management", "Rate limiting", "Quotas"]
  },
  {
    id: "azure-az305-fc-392",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management self-hosted gateway: what is it and what does it need?",
    hint: "The same gateway, running in your environment.",
    back: "A <strong>containerised API Management gateway</strong> deployed to Kubernetes, Docker or Arc-enabled clusters on premises or in other clouds. It pulls API and policy configuration from the Azure instance and sends telemetry back over <strong>outbound HTTPS</strong>, while API traffic stays local to where it runs. It needs a tier that supports it (Premium for production, Developer for testing) and a gateway resource defined on the instance.",
    tags: ["API Management", "Self-hosted gateway", "Hybrid"]
  },
  {
    id: "azure-az305-fc-393",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management workspaces: what problem do they solve?",
    hint: "Many teams, one instance.",
    back: "Workspaces let <strong>decentralised API teams</strong> manage their own APIs, products, subscriptions and policies inside a <strong>shared API Management instance</strong>, with Azure RBAC isolating each team's resources, while a central platform team keeps control of the instance, global policies and networking. Workspaces can be associated with dedicated <strong>workspace gateways</strong> for runtime isolation. They replace running one instance per team, which is costly and hard to govern.",
    tags: ["API Management", "Workspaces"]
  },
  {
    id: "azure-az305-fc-394",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure API Center vs Azure API Management: how do their roles differ?",
    hint: "Design-time catalogue vs runtime gateway.",
    back: "<strong>API Center</strong> is a <strong>design-time</strong> inventory: it catalogues every API across API Management instances, other gateways and unmanaged services, with custom metadata, versions, deployments, API analysis (linting) against governance rules and a discovery portal. <strong>API Management</strong> is the <strong>runtime</strong> gateway that proxies calls, enforces policies and hosts a developer portal. Use both: API Center for governance and discovery, API Management for traffic.",
    tags: ["API Center", "API Management", "Governance"]
  },
  {
    id: "azure-az305-fc-395",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "API Management backend pools and circuit breakers: what do they add over a single backend URL?",
    hint: "Spread the load and stop hammering a failing target.",
    back: "A <strong>load-balanced pool</strong> groups several backends and distributes requests by <strong>round-robin, weight or priority</strong>, so traffic spreads across instances or regions and fails over to lower-priority backends. A <strong>circuit breaker</strong> rule on a backend trips when failures (for example HTTP 429 or 5xx) exceed a threshold in a window, stops sending it requests for a set duration, and can honour Retry-After. Together they protect throttled services such as Azure OpenAI deployments.",
    tags: ["API Management", "Backend pools", "Circuit breaker"]
  },
  {
    id: "azure-az305-fc-396",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Caching patterns: cache-aside vs read-through vs write-through vs write-behind?",
    hint: "Who loads the cache, and when is the database written?",
    back: "<strong>Cache-aside</strong>: the application reads the cache, loads from the database on a miss and populates the cache; the most common pattern with Redis. <strong>Read-through</strong>: the cache itself loads missing items from the store. <strong>Write-through</strong>: writes go to the cache and the store synchronously, keeping them consistent. <strong>Write-behind</strong>: writes go to the cache and are flushed to the store asynchronously, faster but risking loss. Always set expiry to bound staleness.",
    tags: ["Caching", "Patterns"]
  },
  {
    id: "azure-az305-fc-397",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Managed Redis performance tiers: how do Memory Optimized, Balanced, Compute Optimized and Flash Optimized differ?",
    hint: "The ratio of memory to vCPU.",
    back: "<strong>Memory Optimized</strong>: the highest memory-to-vCPU ratio, for large datasets with modest throughput, such as dev/test or big key spaces. <strong>Balanced</strong>: a general-purpose ratio that suits most applications. <strong>Compute Optimized</strong>: more vCPU per GB for the highest throughput and lowest latency. <strong>Flash Optimized</strong>: keeps hot keys in RAM and less-used values on NVMe flash for very large, cost-sensitive caches. High availability across zones is on by default; non-HA suits dev/test.",
    tags: ["Azure Managed Redis", "Tiers"]
  },
  {
    id: "azure-az305-fc-398",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Cache for Redis or Azure Managed Redis: which should a new design use?",
    hint: "One of them has retirement dates.",
    back: "<strong>Azure Managed Redis</strong>. Azure Cache for Redis <strong>Enterprise</strong> tiers retire on 31 March 2027 and <strong>Basic, Standard and Premium</strong> on 30 September 2028, and Microsoft recommends migrating now. Azure Managed Redis runs Redis Enterprise software, is zone redundant by default, supports modules such as RediSearch and RedisJSON, <strong>active geo-replication</strong> and Entra ID authentication, and is clustered by default, so clients must support cluster mode.",
    tags: ["Azure Managed Redis", "Azure Cache for Redis"]
  },
  {
    id: "azure-az305-fc-399",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Redis cache design: how do expiry and eviction policies keep a cache healthy?",
    hint: "One removes stale data on purpose, the other makes room under pressure.",
    back: "<strong>Expiry (TTL)</strong> removes keys after a set time, bounding staleness and memory use; set it on nearly every cached item and add jitter so keys do not expire together and stampede the database. <strong>Eviction policies</strong> decide what Redis removes when memory is full: <code>volatile-lru</code> evicts least-recently-used keys that have a TTL, <code>allkeys-lru</code> any key, <code>noeviction</code> rejects writes. Pick the policy to match whether the cache holds only disposable data.",
    tags: ["Redis", "Eviction", "Expiry"]
  },
  {
    id: "azure-az305-fc-400",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Cosmos DB integrated cache: how does it work and what are its conditions?",
    hint: "A dedicated gateway, weaker consistency, and a staleness knob.",
    back: "The integrated cache lives in a <strong>dedicated gateway</strong> in front of the account: an <strong>item cache</strong> for point reads and a <strong>query cache</strong> for queries, both LRU. Cache hits consume <strong>no request units</strong>. Clients must connect through the dedicated gateway endpoint in <strong>gateway mode</strong> and use <strong>session or eventual</strong> consistency; <code>MaxIntegratedCacheStaleness</code> sets how old a cached result may be. Each gateway node keeps its own cache, so hit rates depend on node count.",
    tags: ["Cosmos DB", "Integrated cache"]
  }
];

export default AZURE_AZ305_FLASHCARDS_16;
