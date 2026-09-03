export const AZURE_AZ204_FLASHCARDS_10 = [
  {
    id: "azure-az204-fc-226",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: validate-content Policy",
    hint: "Enforcing OpenAPI schema validation.",
    back: "The <strong>&lt;validate-content&gt;</strong> policy validates request payloads against OpenAPI schemas at the gateway, rejecting invalid payloads before backend invocation.",
    tags: ["APIM", "validate-content", "Schema Validation"]
  },
  {
    id: "azure-az204-fc-227",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: ip-filter Policy",
    hint: "Filtering incoming callers by IP CIDR.",
    back: "The <strong>&lt;ip-filter&gt;</strong> policy allows or denies incoming requests based on single IP addresses or CIDR blocks at the gateway level.",
    tags: ["APIM", "ip-filter", "Security"]
  },
  {
    id: "azure-az204-fc-228",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: mock-response Policy",
    hint: "Returning sample mock responses.",
    back: "The <strong>&lt;mock-response&gt;</strong> policy serves sample responses directly from gateway definitions, enabling rapid frontend prototyping before backends exist.",
    tags: ["APIM", "mock-response", "Prototyping"]
  },
  {
    id: "azure-az204-fc-229",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: send-request Policy",
    hint: "Invoking external HTTP services from policies.",
    back: "The <strong>&lt;send-request&gt;</strong> policy performs out-of-band HTTP calls to external APIs, storing response data in variables for subsequent policy evaluation.",
    tags: ["APIM", "send-request", "Sideband"]
  },
  {
    id: "azure-az204-fc-230",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: cors Policy",
    hint: "Automated browser CORS handling.",
    back: "The <strong>&lt;cors&gt;</strong> policy handles browser preflight OPTIONS handshakes and injects CORS response headers automatically.",
    tags: ["APIM", "CORS", "Policies"]
  },
  {
    id: "azure-az204-fc-231",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Event Domains",
    hint: "Managing thousands of tenant topics.",
    back: "<strong>Event Domains</strong> manage up to 40,000 topics under a single endpoint, simplifying multi-tenant event architecture and authorization.",
    tags: ["Event Grid", "Event Domains", "Multi-Tenant"]
  },
  {
    id: "azure-az204-fc-232",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: Retry Policies",
    hint: "Configuring attempts and TTL.",
    back: "Configure <strong>maxDeliveryAttempts</strong> (1-30) and <strong>eventTimeToLiveInMinutes</strong> on the Event Subscription to govern delivery retries before dead-lettering.",
    tags: ["Event Grid", "Retry Policy", "Delivery Properties"]
  },
  {
    id: "azure-az204-fc-233",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Auto-Inflate",
    hint: "Automated throughput unit scaling.",
    back: "<strong>Auto-Inflate</strong> scales Throughput Units (TUs) automatically as traffic increases, preventing throttling up to an administrator-defined ceiling.",
    tags: ["Event Hubs", "Auto-Inflate", "Throughput Units"]
  },
  {
    id: "azure-az204-fc-234",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: PartitionKey Hashing",
    hint: "Deterministic partition routing for ordering.",
    back: "Setting a <strong>PartitionKey</strong> hashes events to the same partition, guaranteeing strict sequential order for related entities (e.g. <code>truckId</code>).",
    tags: ["Event Hubs", "Partition Key", "Ordering"]
  },
  {
    id: "azure-az204-fc-235",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Auto-Forwarding",
    hint: "Broker-level message chaining.",
    back: "The <strong>ForwardTo</strong> property automatically transfers messages from source queues or subscriptions into a central queue without client compute.",
    tags: ["Service Bus", "Auto-Forwarding", "Architecture"]
  },
  {
    id: "azure-az204-fc-236",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Scheduled Messages",
    hint: "Delaying message availability.",
    back: "Setting <strong>ScheduledEnqueueTimeUtc</strong> holds messages in the broker until a designated future time before making them visible to consumers.",
    tags: ["Service Bus", "Scheduled Messages", "Deferred Execution"]
  },
  {
    id: "azure-az204-fc-237",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Cross-Entity Transactions",
    hint: "Atomic operations across queues.",
    back: "Service Bus supports <strong>TransactionScope with Send-Via</strong> to atomically receive from one entity and send to another within the same namespace.",
    tags: ["Service Bus", "Transactions", "Atomicity"]
  },
  {
    id: "azure-az204-fc-238",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Standard vs. Premium",
    hint: "Multi-tenant vs dedicated enterprise capacity.",
    back: "<strong>Premium tier</strong> provides dedicated Messaging Units, <strong>100 MB message sizes</strong>, VNet integration, and predictable performance.",
    tags: ["Service Bus", "Premium Tier", "Enterprise"]
  },
  {
    id: "azure-az204-fc-239",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Geo-Disaster Recovery",
    hint: "Cross-region namespace metadata pairing.",
    back: "<strong>Geo-DR</strong> pairs primary and secondary namespaces with an alias connection string, enabling instant failover of messaging metadata during regional outages.",
    tags: ["Service Bus", "Geo-DR", "Disaster Recovery"]
  },
  {
    id: "azure-az204-fc-240",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Azure.Messaging.ServiceBus: Client Lifetime",
    hint: "Singleton AMQP connection reuse.",
    back: "<strong>ServiceBusClient</strong> and senders maintain persistent AMQP connections and should be managed as <strong>singletons</strong> to optimize performance.",
    tags: ["Service Bus", "ServiceBusClient", "Best Practices"]
  },
  {
    id: "azure-az204-fc-241",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: set-header and set-body",
    hint: "Transforming headers and payload content.",
    back: "Use <strong>&lt;set-header&gt;</strong> to modify HTTP headers and <strong>&lt;set-body&gt;</strong> to transform payload structures using C# expressions or Liquid templates.",
    tags: ["APIM", "set-header", "set-body"]
  },
  {
    id: "azure-az204-fc-242",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: Backend Circuit Breaker",
    hint: "Fault-tolerant backend pooling.",
    back: "Configuring <strong>Circuit Breaker</strong> rules on APIM Backend Pools isolates failing replicas and reroutes traffic to healthy backend endpoints automatically.",
    tags: ["APIM", "Circuit Breaker", "Backend Pools"]
  },
  {
    id: "azure-az204-fc-243",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: System Topics",
    hint: "Built-in event streams for Azure services.",
    back: "<strong>System Topics</strong> are built-in topics generated by Azure resources (Blob created, VM restarted) without manual infrastructure setup.",
    tags: ["Event Grid", "System Topics", "Azure Events"]
  },
  {
    id: "azure-az204-fc-244",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Hubs: Dedicated Tier",
    hint: "Single-tenant petabyte-scale streaming.",
    back: "The <strong>Dedicated tier</strong> allocates physical Capacity Units (CUs) for single-tenant extreme throughput workloads with guaranteed performance.",
    tags: ["Event Hubs", "Dedicated Tier", "Enterprise Scale"]
  },
  {
    id: "azure-az204-fc-245",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Message Settlement Options",
    hint: "Complete, Abandon, Defer, and DeadLetter.",
    back: "Call <strong>AbandonMessageAsync</strong> to immediately release locks for retry. Call <strong>CompleteMessageAsync</strong> on success, and <strong>DeadLetterMessageAsync</strong> for fatal errors.",
    tags: ["Service Bus", "AbandonMessage", "Settlement"]
  },
  {
    id: "azure-az204-fc-246",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: Message Deferral",
    hint: "Holding messages for out-of-band retrieval.",
    back: "<strong>DeferMessageAsync</strong> moves messages into a deferred state, allowing retrieval later by <code>SequenceNumber</code> without incrementing delivery counts.",
    tags: ["Service Bus", "Deferral", "Workflow"]
  },
  {
    id: "azure-az204-fc-247",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Queue Storage: PeekMessages",
    hint: "Inspecting messages non-destructively.",
    back: "<strong>PeekMessages</strong> retrieves messages without altering their visibility timeout or removing them, allowing non-destructive queue inspection.",
    tags: ["Queue Storage", "PeekMessages", "Inspection"]
  },
  {
    id: "azure-az204-fc-248",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "APIM: return-response Policy",
    hint: "Immediate pipeline termination.",
    back: "The <strong>&lt;return-response&gt;</strong> policy halts policy evaluation immediately to return custom status codes and JSON payloads directly from the gateway.",
    tags: ["APIM", "return-response", "Security"]
  },
  {
    id: "azure-az204-fc-249",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    front: "Event Grid: At-Least-Once Delivery",
    hint: "Handling duplicate events idempotently.",
    back: "Event Grid guarantees <strong>at-least-once delivery</strong>. Event handlers must be idempotent, utilizing event IDs to deduplicate incoming messages.",
    tags: ["Event Grid", "At-Least-Once", "Idempotency"]
  },
  {
    id: "azure-az204-fc-250",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    front: "Service Bus: TrueFilter",
    hint: "Subscribing to all topic messages.",
    back: "The default <strong>TrueFilter (1 = 1)</strong> matches all published messages, ensuring the subscription receives an unfiltered broadcast of the topic stream.",
    tags: ["Service Bus", "TrueFilter", "Subscriptions"]
  }
];

export default AZURE_AZ204_FLASHCARDS_10;
