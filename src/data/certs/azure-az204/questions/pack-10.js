export const AZURE_AZ204_QUESTIONS_10 = [
  {
    id: "azure-az204-226",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: validate-content for Schema Validation",
    scenario: "A developer publishes a REST API on Azure API Management. Incoming HTTP request JSON payloads must conform strictly to an OpenAPI 3.0 schema definition before forwarding to backend servers.",
    question: "Which APIM policy validates request and response bodies against schemas?",
    options: [
      { id: 'A', text: "&lt;validate-jwt&gt;" },
      { id: 'B', text: "&lt;check-header&gt;" },
      { id: 'C', text: "&lt;validate-content&gt;" },
      { id: 'D', text: "&lt;validate-parameters&gt;" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `&lt;validate-content&gt;` policy validates the size and JSON/XML schema of request or response bodies against API schemas defined in API Management, rejecting malformed payloads with an HTTP 400 Bad Request.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/validate-content-policy",
    tags: ["APIM", "validate-content", "Schema Validation"]
  },
  {
    id: "azure-az204-227",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: ip-filter for Inbound Whitelisting",
    scenario: "A financial banking API exposed on Azure API Management must accept traffic only from an authorized enterprise partner's IP range (`203.0.113.0/24`).",
    question: "Which APIM policy restricts incoming caller traffic based on IP address ranges?",
    options: [
      { id: 'A', text: "&lt;validate-client-certificate&gt;" },
      { id: 'B', text: "&lt;cors&gt;" },
      { id: 'C', text: "&lt;ip-filter action='allow'&gt;" },
      { id: 'D', text: "&lt;rate-limit-by-key&gt;" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `&lt;ip-filter action='allow'&gt;` policy filters incoming traffic by caller IP address or CIDR range in the `&lt;inbound&gt;` block, dropping unlisted IP connections with an HTTP 403 Forbidden.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/ip-filter-policy",
    tags: ["APIM", "ip-filter", "Security"]
  },
  {
    id: "azure-az204-228",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: mock-response for Frontend Prototyping",
    scenario: "A frontend development team needs to build client UI components against an API before the backend engineers finish writing the backend microservices.",
    question: "Which APIM policy mocks API responses by returning sample JSON payloads directly from the gateway?",
    options: [
      { id: 'A', text: "&lt;return-response&gt;" },
      { id: 'B', text: "&lt;mock-response&gt;" },
      { id: 'C', text: "&lt;cache-lookup&gt;" },
      { id: 'D', text: "&lt;send-request&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `&lt;mock-response&gt;` policy enables developers to return simulated mock responses directly from API Management without contacting backend services. Responses can be defined manually or generated automatically from schema examples.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/mock-response-policy",
    tags: ["APIM", "mock-response", "Prototyping"]
  },
  {
    id: "azure-az204-229",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: send-request for Sideband Invocations",
    scenario: "During inbound processing, an APIM policy needs to call an external security validation HTTP endpoint and use the returned JSON token in subsequent backend calls.",
    question: "Which APIM policy executes an out-of-band HTTP request from the gateway?",
    options: [
      { id: 'A', text: "&lt;forward-request&gt;" },
      { id: 'B', text: "&lt;rewrite-uri&gt;" },
      { id: 'C', text: "&lt;send-request&gt;" },
      { id: 'D', text: "&lt;set-body&gt;" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `&lt;send-request&gt;` policy allows the API Gateway to make an arbitrary HTTP request to an external service and store the response in a policy variable (e.g. `response-variable-name='tokenResponse'`), enabling complex sideband workflows inside policies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/send-request-policy",
    tags: ["APIM", "send-request", "Sideband"]
  },
  {
    id: "azure-az204-230",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: cors for Cross-Origin Resource Sharing",
    scenario: "A browser-based single-page application hosted on `https://portal.example.com` receives CORS errors when calling an Azure API Management gateway `https://api.example.com`.",
    question: "Which APIM policy adds the required CORS headers and handles preflight OPTIONS requests?",
    options: [
      { id: 'A', text: "&lt;validate-jwt&gt;" },
      { id: 'B', text: "&lt;cross-domain&gt; in &lt;outbound&gt;" },
      { id: 'C', text: "&lt;cors&gt; in the &lt;inbound&gt; section" },
      { id: 'D', text: "&lt;set-header name='Access-Control-Allow-Origin' * /&gt; manually" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `&lt;cors&gt;` policy automatically handles cross-origin resource sharing. When placed in the `&lt;inbound&gt;` section, it responds to browser preflight `OPTIONS` requests automatically and injects appropriate `Access-Control-Allow-Origin` headers into responses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/cors-policy",
    tags: ["APIM", "CORS", "Policies"]
  },
  {
    id: "azure-az204-231",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Domain Topics for Multi-Tenant Architectures",
    scenario: "A multi-tenant SaaS application manages events for 5,000 distinct customer organizations. Managing 5,000 individual Event Grid topics exceeds subscription resource limits.",
    question: "Which Event Grid feature manages thousands of individual tenant topics under a single management endpoint?",
    options: [
      { id: 'A', text: "Event Hubs Dedicated" },
      { id: 'B', text: "System Topics alone" },
      { id: 'C', text: "Custom Topics alone" },
      { id: 'D', text: "Event Grid Event Domains" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Event Grid Domains` allow management of up to 40,000 domain topics under a single architecture. Applications publish all tenant events to a single domain endpoint, and Event Grid handles authentication and routing to individual tenant domain topics efficiently.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-domains",
    tags: ["Event Grid", "Event Domains", "Multi-Tenant"]
  },
  {
    id: "azure-az204-232",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Retry Policy and Time to Live Configuration",
    scenario: "An Event Grid subscription delivers notifications to a webhook. The developer wants Event Grid to attempt delivery for a maximum of 2 hours and retry up to 10 times before dead-lettering.",
    question: "Where are event retry schedules and time-to-live configured in Event Grid?",
    options: [
      { id: 'A', text: "In the Event Subscription Delivery Properties (maxDeliveryAttempts and eventTimeToLiveInMinutes)" },
      { id: 'B', text: "In the Webhook HTTP response header" },
      { id: 'C', text: "In the Event Grid Topic definition" },
      { id: 'D', text: "In Azure Key Vault" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Event delivery retry behavior is configured directly on the `Event Subscription`. Developers set `maxDeliveryAttempts` (1 to 30) and `eventTimeToLiveInMinutes` (1 to 1440 minutes, or 24 hours), controlling backoff intervals before dead-lettering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery#set-retry-policy",
    tags: ["Event Grid", "Retry Policy", "Delivery Properties"]
  },
  {
    id: "azure-az204-233",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Hubs Throughput Units (TUs) and Auto-Inflate",
    scenario: "An Event Hubs namespace experiences traffic spikes that temporarily exceed its provisioned 2 Throughput Units (TUs), causing requests to be throttled.",
    question: "Which feature automatically increases Throughput Units up to a configured ceiling when incoming traffic spikes?",
    options: [
      { id: 'A', text: "Event Hubs Auto-Inflate" },
      { id: 'B', text: "Event Hubs Partition Scaling" },
      { id: 'C', text: "KEDA autoscale alone" },
      { id: 'D', text: "Event Hubs Capture" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Event Hubs `Auto-Inflate` automatically scales up the number of Throughput Units (TUs) in response to usage surges, preventing `ServerBusyException` throttling while allowing administrators to set an upper ceiling limit on TUs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-auto-inflate",
    tags: ["Event Hubs", "Auto-Inflate", "Throughput Units"]
  },
  {
    id: "azure-az204-234",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Hubs Partition Keys for Related Event Ordering",
    scenario: "A fleet tracking system sends GPS coordinates for thousands of delivery trucks to Azure Event Hubs. All telemetry messages for a specific truck ID must be processed in strict order.",
    question: "How should the producer client assign events to partitions?",
    options: [
      { id: 'A', text: "Set the PartitionKey property on EventData to the truck ID" },
      { id: 'B', text: "Specify a random partition ID on every event" },
      { id: 'C', text: "Send all events to Partition 0 only" },
      { id: 'D', text: "Hardcode the EventHub connection string per truck" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When producers specify a `PartitionKey` (e.g. `truckId`), Event Hubs hashes the partition key to deterministically route all events with that same key to the same physical partition, guaranteeing sequential ordering within that partition.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#mapping-of-events-to-partitions",
    tags: ["Event Hubs", "Partition Key", "Ordering"]
  },
  {
    id: "azure-az204-235",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Auto-Forwarding Pattern",
    scenario: "A developer designs an Azure Service Bus architecture where messages sent to 5 different regional queues must be automatically aggregated into a single central processing queue.",
    question: "Which Service Bus feature automatically moves messages from one queue or subscription to another within the same namespace?",
    options: [
      { id: 'A', text: "Correlation Filters alone" },
      { id: 'B', text: "Auto-Forwarding (ForwardTo property)" },
      { id: 'C', text: "Message Sessions" },
      { id: 'D', text: "Dead-Lettering" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Service Bus `Auto-Forwarding` chains queues and subscriptions. Configuring `ForwardTo: 'central-queue'` on a queue or subscription causes the broker to automatically transfer messages to the target queue without intermediate consumer compute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-auto-forwarding",
    tags: ["Service Bus", "Auto-Forwarding", "Architecture"]
  },
  {
    id: "azure-az204-236",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Scheduled Messages (ScheduledEnqueueTimeUtc)",
    scenario: "An invoice payment system sends a payment reminder message to a Service Bus queue on Monday, but the message must not be visible or processed until Thursday at 09:00 UTC.",
    question: "Which message property delays message delivery to a specific future timestamp?",
    options: [
      { id: 'A', text: "CorrelationId" },
      { id: 'B', text: "ScheduledEnqueueTimeUtc" },
      { id: 'C', text: "SessionId" },
      { id: 'D', text: "TimeToLive" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting `ScheduledEnqueueTimeUtc` on a `ServiceBusMessage` instructs the broker to hold the message in a delayed state. The message is not visible in the queue until the specified UTC timestamp arrives, enabling native scheduled processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sequencing#scheduled-messages",
    tags: ["Service Bus", "Scheduled Messages", "Deferred Execution"]
  },
  {
    id: "azure-az204-237",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Cross-Entity Transactions via send-via Pattern",
    scenario: "A worker reads a message from Queue A, processes data, and sends an outgoing message to Queue B while completing the original message in Queue A. Both operations must commit atomically.",
    question: "Which Service Bus mechanism ensures atomic multi-entity operations within the same namespace?",
    options: [
      { id: 'A', text: "Two-phase commit across external databases" },
      { id: 'B', text: "Message Sessions alone" },
      { id: 'C', text: "Auto-forwarding alone" },
      { id: 'D', text: "Service Bus Transactions using the Send-Via pattern with TransactionScope" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service Bus supports transactions across entities in the same namespace using the `Send-Via` transfer queue pattern inside a `TransactionScope`. If an error occurs, both the send to Queue B and the completion of Queue A roll back together.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-transactions",
    tags: ["Service Bus", "Transactions", "Atomicity"]
  },
  {
    id: "azure-az204-238",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Standard vs Premium Tier Differences",
    scenario: "An enterprise organization requires support for messages up to 100 MB in size, dedicated compute resources with zero latency jitter, and Virtual Network (VNet) private isolation.",
    question: "Which Azure Service Bus tier meets these enterprise criteria?",
    options: [
      { id: 'A', text: "Azure Queue Storage" },
      { id: 'B', text: "Service Bus Standard tier (capped at 256 KB messages, multi-tenant)" },
      { id: 'C', text: "Service Bus Premium tier" },
      { id: 'D', text: "Service Bus Basic tier" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Service Bus `Premium` tier provides dedicated capacity (Messaging Units), predictable latency, support for messages up to 100 MB (compared to 256 KB in Standard), private VNet integration, and geo-disaster recovery.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-premium-messaging",
    tags: ["Service Bus", "Premium Tier", "Enterprise"]
  },
  {
    id: "azure-az204-239",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Geo-Disaster Recovery (Geo-DR)",
    scenario: "An enterprise messaging infrastructure must survive a regional datacenter outage. Metadata and namespace configurations must replicate to a secondary region with instantaneous alias failover.",
    question: "Which Azure Service Bus feature pairs namespaces across regions for metadata disaster recovery?",
    options: [
      { id: 'A', text: "Availability Zones alone" },
      { id: 'B', text: "Azure Backup Vault" },
      { id: 'C', text: "Geo-Disaster Recovery (Geo-DR)" },
      { id: 'D', text: "Geo-Replication alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Service Bus `Geo-Disaster Recovery` pairs a primary namespace with a secondary namespace in another region. It continuously replicates metadata (queues, topics, rules) and uses an alias connection string that can be failed over instantly without client configuration changes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-geo-dr",
    tags: ["Service Bus", "Geo-DR", "Disaster Recovery"]
  },
  {
    id: "azure-az204-240",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "ServiceBusClient Singleton Lifecycle Management",
    scenario: "A developer is writing a high-throughput C# application using the `Azure.Messaging.ServiceBus` SDK.",
    question: "What is the recommended lifecycle practice for managing `ServiceBusClient`, `ServiceBusSender`, and `ServiceBusReceiver` instances?",
    options: [
      { id: 'A', text: "Store clients in temporary disk files" },
      { id: 'B', text: "Instantiate a new ServiceBusClient and dispose it inside every method call" },
      { id: 'C', text: "Register and cache ServiceBusClient and ServiceBusSender as singletons across the entire application lifecycle" },
      { id: 'D', text: "Create a static client per HTTP thread" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In `Azure.Messaging.ServiceBus`, `ServiceBusClient`, `ServiceBusSender`, and `ServiceBusReceiver` are thread-safe and establish long-lived AMQP connections. They must be registered as singletons and reused throughout the application lifetime to avoid socket exhaustion.",
    referenceUrl: "https://learn.microsoft.com/en-us/dotnet/api/overview/azure/messaging.servicebus-readme?view=azure-dotnet#lifetime",
    tags: ["Service Bus", "ServiceBusClient", "Best Practices"]
  },
  {
    id: "azure-az204-241",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: set-header and set-body Transformations",
    scenario: "An incoming API request contains a custom header `X-User-Role`. The developer needs to inject this value into the outgoing HTTP request body as a JSON property before sending it to the backend.",
    question: "Which combination of APIM policies modifies headers and transforms the payload body?",
    options: [
      { id: 'A', text: "&lt;set-header&gt; and &lt;set-body&gt;" },
      { id: 'B', text: "&lt;rewrite-uri&gt; and &lt;mock-response&gt;" },
      { id: 'C', text: "&lt;cors&gt; and &lt;validate-jwt&gt;" },
      { id: 'D', text: "&lt;cache-store&gt; and &lt;cache-lookup&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `&lt;set-header&gt;` policy adds, modifies, or deletes HTTP headers on requests or responses. The `&lt;set-body&gt;` policy constructs or transforms the payload body using Liquid templates or C# expressions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/set-body-policy",
    tags: ["APIM", "set-header", "set-body"]
  },
  {
    id: "azure-az204-242",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Backend Circuit Breaker and Load Balancing",
    scenario: "An API Management gateway routes requests across three backend microservice replicas. If one replica returns HTTP 503 errors repeatedly, APIM must temporarily stop sending requests to it.",
    question: "Which APIM feature configures health probes and automatic circuit breaking across backend pool endpoints?",
    options: [
      { id: 'A', text: "APIM Backend Circuit Breaker in a Backend Pool" },
      { id: 'B', text: "App Service Slot Swap" },
      { id: 'C', text: "Azure Front Door alone" },
      { id: 'D', text: "Route 53 latency routing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "APIM allows developers to group backends into a `Backend Pool` with round-robin or weighted load balancing and configure `Circuit Breaker` rules. If a backend fails consecutive health checks, APIM trips the breaker and stops routing traffic to it until it recovers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/backends",
    tags: ["APIM", "Circuit Breaker", "Backend Pools"]
  },
  {
    id: "azure-az204-243",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid System Topics for Azure Resource Events",
    scenario: "A developer needs an automated event to fire whenever a new virtual machine is created or a Blob is uploaded in an Azure subscription.",
    question: "Which type of Event Grid topic is automatically provisioned and managed by Azure services for built-in resource events?",
    options: [
      { id: 'A', text: "System Topics" },
      { id: 'B', text: "Custom Topics" },
      { id: 'C', text: "Domain Topics" },
      { id: 'D', text: "Event Hubs Topics" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`System Topics` are built-in topics provided by Azure services (such as Azure Storage, Azure Event Hubs, and Azure IoT Hub). They represent event streams generated by Azure resources and are managed directly by the platform.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/system-topics",
    tags: ["Event Grid", "System Topics", "Azure Events"]
  },
  {
    id: "azure-az204-244",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Hubs Dedicated Tier for Ultra-High Throughput",
    scenario: "A connected vehicle platform streams 5 GB of data per second with sub-millisecond processing requirements and requires complete physical single-tenant isolation.",
    question: "Which Event Hubs tier provides dedicated Capacity Units (CUs) and single-tenant hosting?",
    options: [
      { id: 'A', text: "Event Hubs Dedicated tier" },
      { id: 'B', text: "Event Hubs Standard tier" },
      { id: 'C', text: "Event Hubs Basic tier" },
      { id: 'D', text: "Azure Queue Storage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Event Hubs `Dedicated` tier is designed for large-scale enterprise deployments requiring extreme throughput (gigabytes per second) with single-tenant isolation, predictable latency, and zero resource contention.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-dedicated-overview",
    tags: ["Event Hubs", "Dedicated Tier", "Enterprise Scale"]
  },
  {
    id: "azure-az204-245",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Abandon vs DeadLetter vs Complete Settlement",
    scenario: "A worker reading a message in PeekLock mode encounters a transient database timeout and wants the message to become immediately available for another worker to retry.",
    question: "Which settlement method should the worker call?",
    options: [
      { id: 'A', text: "DeferMessageAsync" },
      { id: 'B', text: "AbandonMessageAsync" },
      { id: 'C', text: "DeadLetterMessageAsync" },
      { id: 'D', text: "CompleteMessageAsync" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Service Bus PeekLock settlement: `CompleteMessageAsync` permanently deletes the message upon success; `AbandonMessageAsync` immediately releases the lock, incrementing delivery count and making the message visible to other workers; and `DeadLetterMessageAsync` moves it directly to the DLQ.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement#settling-receive-operations",
    tags: ["Service Bus", "AbandonMessage", "Settlement"]
  },
  {
    id: "azure-az204-246",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Message Deferral Pattern",
    scenario: "A message processing worker reads an order from a Service Bus queue, but cannot process it until a separate customer verification document arrives. The message must not block the queue or count against maxDeliveryCount.",
    question: "Which Service Bus feature defers a message by sequence number so it can be retrieved explicitly later?",
    options: [
      { id: 'A', text: "DeferMessageAsync (Message Deferral)" },
      { id: 'B', text: "AbandonMessageAsync" },
      { id: 'C', text: "DeadLetterMessageAsync" },
      { id: 'D', text: "CompleteMessageAsync" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`DeferMessageAsync` moves a message into a deferred state. It remains in the queue but is hidden from normal receive operations and does not increment delivery count. The application saves the `SequenceNumber` and retrieves the message later via `ReceiveDeferredMessageAsync`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-deferral",
    tags: ["Service Bus", "Deferral", "Workflow"]
  },
  {
    id: "azure-az204-247",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Queue Storage Peeking Messages Without Hiding",
    scenario: "An administrator wants to inspect the top 10 messages in an Azure Queue Storage queue to check message format without hiding them from active processing workers.",
    question: "Which Azure Queue Storage API operation reads messages without altering visibility timeout?",
    options: [
      { id: 'A', text: "ReceiveMessages" },
      { id: 'B', text: "DeleteMessage" },
      { id: 'C', text: "UpdateMessage" },
      { id: 'D', text: "PeekMessages (PeekMessagesAsync)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `PeekMessages` API in Azure Queue Storage reads up to 32 messages from the front of the queue. Unlike `ReceiveMessages`, peeking does not alter the visibility timeout, so active workers are unaffected.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/queues/storage-dotnet-how-to-use-queues#peek-at-the-next-message",
    tags: ["Queue Storage", "PeekMessages", "Inspection"]
  },
  {
    id: "azure-az204-248",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: return-response for Immediate Termination",
    scenario: "An inbound policy in API Management evaluates an API key. If the key is invalid, the policy must immediately terminate execution and return an HTTP 401 Unauthorized with custom JSON without contacting backend servers.",
    question: "Which APIM policy halts pipeline execution and returns an immediate response?",
    options: [
      { id: 'A', text: "&lt;forward-request&gt;" },
      { id: 'B', text: "&lt;return-response&gt;" },
      { id: 'C', text: "&lt;mock-response&gt;" },
      { id: 'D', text: "&lt;send-request&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `&lt;return-response&gt;` policy aborts normal pipeline execution immediately and returns a specified HTTP status code, headers, and body directly to the client, preventing unnecessary backend invocations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/return-response-policy",
    tags: ["APIM", "return-response", "Security"]
  },
  {
    id: "azure-az204-249",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Push-to-Webhook Delivery Guarantees",
    scenario: "A developer is designing an event handler microservice subscribed to an Azure Event Grid webhook topic.",
    question: "What delivery guarantee does Azure Event Grid provide for event delivery to subscriber endpoints?",
    options: [
      { id: 'A', text: "Zero-latency synchronous execution" },
      { id: 'B', text: "At-least-once delivery (subscribers must be idempotent to handle occasional duplicate events)" },
      { id: 'C', text: "At-most-once delivery (events are never duplicated but can be dropped)" },
      { id: 'D', text: "Exactly-once delivery guaranteed under all conditions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Event Grid provides `at-least-once` delivery. Due to network retries, timeouts, or re-deliveries, subscribers may occasionally receive the same event more than once. Subscriber handlers must be idempotent, using `event.id` to deduplicate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
    tags: ["Event Grid", "At-Least-Once", "Idempotency"]
  },
  {
    id: "azure-az204-250",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Topic Filter: TrueFilter vs FalseFilter",
    scenario: "A developer creates a subscription on an Azure Service Bus topic that should accept every single published message without applying any property filters.",
    question: "Which built-in filter rule evaluates to true for every incoming message?",
    options: [
      { id: 'A', text: "TrueFilter (1 = 1)" },
      { id: 'B', text: "FalseFilter (1 = 0)" },
      { id: 'C', text: "CorrelationFilter with empty parameters" },
      { id: 'D', text: "AllFilter" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Service Bus subscriptions, the `TrueFilter` (`1 = 1`) is the default filter rule. It evaluates to true for every message, ensuring the subscription receives a copy of every message published to the topic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters#filters",
    tags: ["Service Bus", "TrueFilter", "Subscriptions"]
  }
];

export default AZURE_AZ204_QUESTIONS_10;
