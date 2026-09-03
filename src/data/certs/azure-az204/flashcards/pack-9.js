export const AZURE_AZ204_FLASHCARDS_9 = [
  {
    id: "azure-az204-fc-201",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Response Caching Policies",
    hint: "cache-lookup and cache-store.",
    back: "Pair <strong>&lt;cache-lookup&gt;</strong> in the inbound section with <strong>&lt;cache-store&gt;</strong> in the outbound section to cache backend responses at the gateway.",
    tags: ["APIM", "Caching", "Policies"]
  },
  {
    id: "azure-az204-fc-202",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Products and Subscriptions",
    hint: "Packaging APIs for consumer access.",
    back: "A <strong>Product</strong> groups multiple APIs, defines terms of use, and governs subscription access keys for API consumers.",
    tags: ["APIM", "Products", "Subscriptions"]
  },
  {
    id: "azure-az204-fc-203",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Versions vs. Revisions",
    hint: "Breaking releases vs safe staging.",
    back: "Use <strong>API Versions</strong> (e.g. <code>/v2</code>) for breaking interface changes. Use <strong>API Revisions</strong> for safe testing and non-breaking updates.",
    tags: ["APIM", "Versions", "Revisions"]
  },
  {
    id: "azure-az204-fc-204",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Named Values with Key Vault",
    hint: "Secure secret injection in policies.",
    back: "<strong>Named Values</strong> store reusable configuration strings, and can link to <strong>Azure Key Vault secrets</strong> for secure, audited credential injection.",
    tags: ["APIM", "Named Values", "Key Vault"]
  },
  {
    id: "azure-az204-fc-205",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Self-Hosted Gateway",
    hint: "On-premises containerized API gateway.",
    back: "The <strong>Self-Hosted Gateway</strong> container runs in local data centers or Kubernetes clusters, processing data plane traffic locally while synchronizing policies with Azure.",
    tags: ["APIM", "Self-Hosted Gateway", "Hybrid Cloud"]
  },
  {
    id: "azure-az204-fc-206",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Core Architecture",
    hint: "Sources, Topics, Subscriptions, and Handlers.",
    back: "Event Sources publish to <strong>Topics</strong>; <strong>Event Subscriptions</strong> filter and route events; and <strong>Event Handlers</strong> (Functions/Webhooks) consume them.",
    tags: ["Event Grid", "Topics", "Architecture"]
  },
  {
    id: "azure-az204-fc-207",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: CloudEvents v1.0 Schema",
    hint: "Open standard cross-cloud event format.",
    back: "Selecting the <strong>CloudEvents v1.0 schema</strong> ensures cross-platform interoperability across cloud providers conforming to the CNCF serverless event specification.",
    tags: ["Event Grid", "CloudEvents", "CNCF"]
  },
  {
    id: "azure-az204-fc-208",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Webhook Validation Handshake",
    hint: "Proving endpoint ownership.",
    back: "Webhooks must echo back the received <code>validationCode</code> in a <strong>{\"validationResponse\": \"...\"}</strong> JSON payload with HTTP 200 to activate subscriptions.",
    tags: ["Event Grid", "Webhook", "Validation Handshake"]
  },
  {
    id: "azure-az204-fc-209",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Advanced Filtering",
    hint: "Evaluating nested payload properties.",
    back: "<strong>Advanced Filtering</strong> evaluates JSON payload attributes using operators like <code>NumberGreaterThan</code> and <code>StringEquals</code> to filter events at the source.",
    tags: ["Event Grid", "Advanced Filtering", "Routing"]
  },
  {
    id: "azure-az204-fc-210",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Dead-Lettering to Blob Storage",
    hint: "Capturing undelivered events.",
    back: "Undeliverable events exceeding retry counts or TTL are stored as JSON files in an <strong>Azure Storage Blob container</strong> for offline remediation.",
    tags: ["Event Grid", "Dead-Lettering", "Blob Storage"]
  },
  {
    id: "azure-az204-fc-211",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Partitions and Concurrency",
    hint: "Ordered logs and parallel consumption.",
    back: "<strong>Partitions</strong> provide independent, ordered event sequences, enabling multiple worker instances to process high-throughput streams in parallel.",
    tags: ["Event Hubs", "Partitions", "Scalability"]
  },
  {
    id: "azure-az204-fc-212",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Consumer Groups",
    hint: "Independent views of the event stream.",
    back: "A <strong>Consumer Group</strong> gives each reading application an independent view of partition offsets, allowing multiple consumers to read at their own pace.",
    tags: ["Event Hubs", "Consumer Groups", "Pub/Sub"]
  },
  {
    id: "azure-az204-fc-213",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "EventProcessorClient: Blob Checkpointing",
    hint: "Resilient distributed stream processing.",
    back: "The <strong>EventProcessorClient</strong> coordinates partition leases and saves checkpoint offsets to <strong>Azure Blob Storage</strong> for seamless crash recovery.",
    tags: ["Event Hubs", "EventProcessorClient", "Checkpointing"]
  },
  {
    id: "azure-az204-fc-214",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Capture Feature",
    hint: "Zero-code stream archiving.",
    back: "<strong>Event Hubs Capture</strong> automatically streams incoming data to Azure Blob or Data Lake Storage in Avro or Parquet format based on time/size windows.",
    tags: ["Event Hubs", "Capture", "Data Lake"]
  },
  {
    id: "azure-az204-fc-215",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Kafka Protocol Compatibility",
    hint: "Native Kafka endpoint emulation.",
    back: "Event Hubs exposes a <strong>Kafka-compatible endpoint</strong> on port 9093, allowing existing Kafka applications to connect without rewriting code.",
    tags: ["Event Hubs", "Kafka", "Interoperability"]
  },
  {
    id: "azure-az204-fc-216",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Queues vs. Topics",
    hint: "Point-to-point vs Publish-Subscribe.",
    back: "<strong>Queues</strong> provide point-to-point delivery (one consumer processes each message). <strong>Topics and Subscriptions</strong> broadcast messages to multiple independent subscribers.",
    tags: ["Service Bus", "Topics", "Pub/Sub"]
  },
  {
    id: "azure-az204-fc-217",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Message Sessions",
    hint: "Strict FIFO ordering per session ID.",
    back: "Enabling <strong>Message Sessions</strong> and setting a <code>SessionId</code> guarantees serialized, first-in-first-out (FIFO) message processing for related messages.",
    tags: ["Service Bus", "Message Sessions", "FIFO"]
  },
  {
    id: "azure-az204-fc-218",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Duplicate Detection",
    hint: "Automated deduplication within a time window.",
    back: "<strong>Duplicate Detection</strong> discards messages with identical <code>MessageId</code> values received within the <code>DuplicateDetectionHistoryTimeWindow</code>.",
    tags: ["Service Bus", "Duplicate Detection", "MessageId"]
  },
  {
    id: "azure-az204-fc-219",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: PeekLock vs. ReceiveAndDelete",
    hint: "At-least-once vs at-most-once delivery.",
    back: "<strong>PeekLock</strong> locks messages during processing, requiring explicit completion (at-least-once). <strong>ReceiveAndDelete</strong> deletes messages immediately upon receipt (at-most-once).",
    tags: ["Service Bus", "PeekLock", "Reliability"]
  },
  {
    id: "azure-az204-fc-220",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Dead-Letter Queue (DLQ)",
    hint: "Isolating poison messages after maxDeliveryCount.",
    back: "Messages exceeding <strong>maxDeliveryCount</strong> are automatically moved to the sub-queue <strong>$DeadLetterQueue</strong>, preventing endless processing loops.",
    tags: ["Service Bus", "DLQ", "Dead-Letter Queue"]
  },
  {
    id: "azure-az204-fc-221",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Subscription Filters",
    hint: "Selective message routing.",
    back: "<strong>Correlation Filters</strong> and <strong>SQL Filters</strong> evaluate message headers and properties, routing matching messages to specific subscriptions while dropping non-matching ones.",
    tags: ["Service Bus", "Topic Filters", "Correlation Filter"]
  },
  {
    id: "azure-az204-fc-222",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Queue Storage vs. Service Bus Queues",
    hint: "Capacity vs Enterprise features.",
    back: "<strong>Queue Storage</strong> accommodates massive total queue sizes (&gt; 80 GB up to petabytes). <strong>Service Bus</strong> offers enterprise features (FIFO, duplicate detection, transactions).",
    tags: ["Queue Storage", "Service Bus", "Architecture"]
  },
  {
    id: "azure-az204-fc-223",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Queue Storage: Visibility Timeout",
    hint: "Temporary message invisibility.",
    back: "Queue Storage hides dequeued messages for <strong>30 seconds (VisibilityTimeout)</strong> by default. Workers call <strong>UpdateMessage</strong> to extend visibility for long-running tasks.",
    tags: ["Queue Storage", "Visibility Timeout", "Concurrency"]
  },
  {
    id: "azure-az204-fc-224",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Queue Storage: Message Limits",
    hint: "64 KB message size limit.",
    back: "Azure Queue Storage enforces a hard <strong>64 KB maximum message size</strong>. Payloads exceeding 64 KB should use the <strong>Claim Check pattern</strong> with Blob storage.",
    tags: ["Queue Storage", "Message Limits", "TTL"]
  },
  {
    id: "azure-az204-fc-225",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Queue Storage: DequeueCount Property",
    hint: "Detecting poison messages.",
    back: "The <strong>DequeueCount</strong> property increments each time a message is retrieved. Code checks this value to identify and move repeatedly failing poison messages.",
    tags: ["Queue Storage", "DequeueCount", "Poison Messages"]
  }
];

export default AZURE_AZ204_FLASHCARDS_9;
