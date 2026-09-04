export const AZURE_AZ204_QUESTIONS_9 = [
  {
    id: "azure-az204-201",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy: cache-lookup and cache-store for Response Caching",
    scenario: "A product catalog API returns identical JSON responses that only change once an hour. The developer wants API Management to cache responses in memory and return them directly.",
    question: "Which combination of APIM policies implements response caching?",
    options: [
      { id: 'A', text: "&lt;cache-lookup&gt; in the &lt;inbound&gt; section and &lt;cache-store&gt; in the &lt;outbound&gt; section" },
      { id: 'B', text: "&lt;memory-cache&gt; in &lt;on-error&gt;" },
      { id: 'C', text: "&lt;cache-lookup&gt; in &lt;backend&gt; only" },
      { id: 'D', text: "&lt;cache-store&gt; in &lt;inbound&gt; and &lt;cache-lookup&gt; in &lt;outbound&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Response caching in APIM requires `&lt;cache-lookup&gt;` in the `&lt;inbound&gt;` block (to check if a cached response exists and return it immediately) and `&lt;cache-store duration='3600'&gt;` in the `&lt;outbound&gt;` block (to save the backend response into cache for subsequent requests).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-cache",
    tags: ["APIM", "Caching", "Policies"]
  },
  {
    id: "azure-az204-202",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions Scoping Model",
    scenario: "In Azure API Management, an administrator bundles 5 different APIs together for partner companies and requires approval before issuing access keys.",
    question: "Which APIM construct groups APIs together and controls subscription terms and approval workflows?",
    options: [
      { id: 'A', text: "A Product" },
      { id: 'B', text: "A Named Value" },
      { id: 'C', text: "A Policy Fragment" },
      { id: 'D', text: "An API Revision" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In APIM, a `Product` contains one or more APIs, terms of use, and call quotas. Products can be `Open` (no approval needed) or `Protected` (requires subscription and optional administrator approval) to issue subscription keys.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["APIM", "Products", "Subscriptions"]
  },
  {
    id: "azure-az204-203",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM API Versions vs API Revisions",
    scenario: "A development team needs to make a breaking change to an existing API (e.g. changing XML payload to JSON). The team also needs to test non-breaking bug fixes safely in staging.",
    question: "Which APIM features should be used for breaking changes and non-breaking staging updates respectively?",
    options: [
      { id: 'A', text: "API Versions for breaking changes; API Revisions for non-breaking iterations and safe staging" },
      { id: 'B', text: "API Revisions for breaking changes; API Versions for non-breaking changes" },
      { id: 'C', text: "API Versions for both scenarios" },
      { id: 'D', text: "API Revisions for both scenarios" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`API Versions` represent distinct, breaking changes exposed to consumers (e.g. `v1` vs `v2` via path, header, or query string). `API Revisions` allow developers to make and test non-breaking changes safely in a private staging URL before making the revision current.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-versions-revisions",
    tags: ["APIM", "Versions", "Revisions"]
  },
  {
    id: "azure-az204-204",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Named Values and Key Vault Integration",
    scenario: "An APIM policy needs to use a sensitive third-party API key when calling a backend service. The key must be stored securely in Azure Key Vault.",
    question: "How should the developer reference the Key Vault secret in API Management?",
    options: [
      { id: 'A', text: "Store the secret in an unencrypted environment variable" },
      { id: 'B', text: "Pass the key in client HTTP request headers" },
      { id: 'C', text: "Embed the key directly in the policy XML string" },
      { id: 'D', text: "Create a Named Value in APIM backed by an Azure Key Vault secret reference" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "APIM `Named Values` store constants and configuration values accessible in policies (via `{{NamedValueKey}}`). Backing a Named Value with an Azure Key Vault secret reference ensures credentials remain encrypted and automatically synchronize updates via Managed Identity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-properties",
    tags: ["APIM", "Named Values", "Key Vault"]
  },
  {
    id: "azure-az204-205",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Self-Hosted Gateway for Hybrid Deployments",
    scenario: "An enterprise organization runs backend services in an on-premises data center. Due to regulatory data sovereignty requirements, API traffic between local clients and local backends must never leave the on-premises network.",
    question: "Which APIM feature deploys a containerized API Management gateway on-premises while maintaining centralized management in Azure?",
    options: [
      { id: 'A', text: "The Self-Hosted Gateway" },
      { id: 'B', text: "Azure ExpressRoute Gateway" },
      { id: 'C', text: "Azure Front Door" },
      { id: 'D', text: "App Service Hybrid Connections" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The APIM `Self-Hosted Gateway` is a containerized version of the default managed gateway packaged as a Docker container. It deploys on-premises or in other clouds, processing local traffic locally while connecting outbound to Azure only for telemetry and policy configuration updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/self-hosted-gateway-overview",
    tags: ["APIM", "Self-Hosted Gateway", "Hybrid Cloud"]
  },
  {
    id: "azure-az204-206",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Architecture: Sources, Topics, and Handlers",
    scenario: "A developer is architecting a reactive event-driven pipeline using Azure Event Grid.",
    question: "Which component receives events published by applications and routes them to subscribers based on event subscription filters?",
    options: [
      { id: 'A', text: "A Topic" },
      { id: 'B', text: "An Event Source" },
      { id: 'C', text: "An Event Hub" },
      { id: 'D', text: "An Event Handler" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Event Grid architecture: `Event Sources` emit events; `Topics` receive incoming event streams; `Event Subscriptions` define routing rules and filters; and `Event Handlers` (Webhooks, Azure Functions, Logic Apps) consume and process the events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/concepts",
    tags: ["Event Grid", "Topics", "Architecture"]
  },
  {
    id: "azure-az204-207",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Event Schemas: Event Grid vs CloudEvents v1.0",
    scenario: "A company is building an open, interoperable event architecture that integrates Azure Event Grid with Google Cloud and AWS services using the CNCF open standard.",
    question: "Which event schema should the developer select when creating the Event Grid topic?",
    options: [
      { id: 'A', text: "CloudEvents v1.0 schema" },
      { id: 'B', text: "Event Grid schema" },
      { id: 'C', text: "Custom JSON dictionary" },
      { id: 'D', text: "Apache Avro binary schema" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Event Grid natively supports both the proprietary `Event Grid schema` and the open CNCF standard `CloudEvents v1.0 schema` (`specversion`, `type`, `source`, `id`, `time`, `data`). CloudEvents ensures cross-cloud interoperability without custom payload wrappers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/cloudevents-schema",
    tags: ["Event Grid", "CloudEvents", "CNCF"]
  },
  {
    id: "azure-az204-208",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Webhook Event Delivery Validation Handshake",
    scenario: "When a developer registers a new HTTP Webhook endpoint in an Event Grid subscription, Event Grid sends an initial HTTP POST request to the webhook before any events are delivered.",
    question: "How must the webhook respond to complete the validation handshake?",
    options: [
      { id: 'A', text: "Return an HTTP 200 OK with a JSON response containing the validationCode received in the request" },
      { id: 'B', text: "Event Grid does not validate webhook endpoints" },
      { id: 'C', text: "Send an email to Azure Support confirming the endpoint" },
      { id: 'D', text: "Return an HTTP 204 No Content with no body" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To prevent webhook spam and prove endpoint ownership, Event Grid sends a validation event containing a `validationCode`. The webhook must extract `validationCode` and return a JSON payload: `{\"validationResponse\": \"&lt;validationCode&gt;\"}` with HTTP 200 OK to complete the subscription creation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/webhook-event-delivery#validation-details",
    tags: ["Event Grid", "Webhook", "Validation Handshake"]
  },
  {
    id: "azure-az204-209",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Advanced Filtering on JSON Properties",
    scenario: "An application subscribes to an Event Grid topic but only wants to receive events where `data.orderTotal` is greater than 1,000 and `data.currency` equals `USD`.",
    question: "Which Event Grid subscription feature evaluates nested JSON data fields before delivering events?",
    options: [
      { id: 'A', text: "Advanced Filtering using NumberGreaterThan and StringEquals operators on the data payload" },
      { id: 'B', text: "Subject Begins With filtering alone" },
      { id: 'C', text: "Event Type filtering alone" },
      { id: 'D', text: "Azure Stream Analytics query" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Event Grid `Advanced Filtering` supports evaluating values in the `data` payload using operators like `NumberGreaterThan`, `NumberIn`, `StringBeginsWith`, `StringContains`, and `BoolEquals`, preventing unnecessary delivery of irrelevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering#advanced-filtering",
    tags: ["Event Grid", "Advanced Filtering", "Routing"]
  },
  {
    id: "azure-az204-210",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Event Grid Dead-Lettering to Azure Blob Storage",
    scenario: "An Azure Event Grid subscription attempts to deliver events to an external partner webhook that has been offline for 24 hours. The events exceed maximum delivery attempts.",
    question: "Where does Event Grid move unconsumed, undeliverable events when dead-lettering is configured?",
    options: [
      { id: 'A', text: "A container in an Azure Storage Blob account" },
      { id: 'B', text: "An Azure Service Bus Dead Letter Queue" },
      { id: 'C', text: "The Azure Recycle Bin" },
      { id: 'D', text: "An Azure Cosmos DB collection" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Event Grid supports dead-lettering for undeliverable events (due to webhook errors, timeouts, or TTL expiration). Dead-lettered events are serialized as JSON blobs and written into a designated container in an `Azure Storage account` for investigation and replay.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery#set-dead-letter-location",
    tags: ["Event Grid", "Dead-Lettering", "Blob Storage"]
  },
  {
    id: "azure-az204-211",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Architecture: Partitions and Offsets",
    scenario: "An IoT telemetry ingestion system receives 20,000 sensor readings per second in Azure Event Hubs.",
    question: "Why does Azure Event Hubs divide an event stream into multiple Partitions?",
    options: [
      { id: 'A', text: "Partitions act as separate physical backup copies across different cloud providers" },
      { id: 'B', text: "Partitions automatically compress JSON data into MP4 video files" },
      { id: 'C', text: "Partitions eliminate the need for consumer applications" },
      { id: 'D', text: "Partitions allow concurrent consumption across multiple consumer workers and provide ordered log sequences within each individual partition" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Event Hubs uses a partitioned consumer model. Each partition is an ordered sequence of events. Increasing partition count enables horizontal scale-out by allowing multiple consumer worker instances to read from distinct partitions concurrently without blocking each other.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-scalability#partitions",
    tags: ["Event Hubs", "Partitions", "Scalability"]
  },
  {
    id: "azure-az204-212",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Consumer Groups for Multiple Applications",
    scenario: "A real-time telemetry stream in Azure Event Hubs must be processed simultaneously by two independent systems: an instant fraud detection microservice and a long-term data warehouse archiver.",
    question: "Which Event Hubs concept allows both applications to read the stream at their own independent speeds and offsets?",
    options: [
      { id: 'A', text: "Multiple Partitions" },
      { id: 'B', text: "Consumer Groups (each application reads from its own dedicated Consumer Group)" },
      { id: 'C', text: "Event Grid Subscriptions" },
      { id: 'D', text: "Storage Account Containers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `Consumer Group` provides a separate view (state and offsets) of an entire Event Hub. Each consumer application connects via its own consumer group, enabling multiple downstream systems to read the same stream independently at their own pace without interference.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Event Hubs", "Consumer Groups", "Pub/Sub"]
  },
  {
    id: "azure-az204-213",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs EventProcessorClient with Blob Checkpointing",
    scenario: "A C# microservice consumes events from Azure Event Hubs using the `EventProcessorClient`. If a consumer host crashes, a replacement worker must resume reading from the exact last processed position.",
    question: "Where does `EventProcessorClient` store partition ownership leases and checkpoint offsets?",
    options: [
      { id: 'A', text: "In an Azure Storage Blob container" },
      { id: 'B', text: "In an Azure SQL database" },
      { id: 'C', text: "In an in-memory dictionary on the worker VM" },
      { id: 'D', text: "In local text files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `EventProcessorClient` in the Azure Event Hubs SDK integrates with an Azure Storage Blob container. It writes partition ownership leases and periodically records stream checkpoint offsets in blob metadata, ensuring resilient failover across consumer instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send#receive-events",
    tags: ["Event Hubs", "EventProcessorClient", "Checkpointing"]
  },
  {
    id: "azure-az204-214",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Avro or Parquet",
    scenario: "An enterprise data engineering team needs to automatically dump raw event streams from Event Hubs into Azure Data Lake Storage Gen2 without writing custom streaming consumer code.",
    question: "Which built-in Event Hubs feature captures stream data automatically into Blob or Data Lake Storage?",
    options: [
      { id: 'A', text: "Log Analytics streaming" },
      { id: 'B', text: "Azure Data Factory Trigger" },
      { id: 'C', text: "Event Hubs Capture" },
      { id: 'D', text: "Event Hubs Checkpointing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Event Hubs `Capture` automatically batches and dumps streaming data into Azure Blob Storage or Azure Data Lake Storage Gen2 in Apache Avro or Parquet format based on time (e.g. every 5 minutes) or size (e.g. every 300 MB) thresholds at zero compute maintenance cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Event Hubs", "Capture", "Data Lake"]
  },
  {
    id: "azure-az204-215",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Kafka Protocol Compatibility",
    scenario: "A company has existing microservices written in Java using the Apache Kafka client library (`kafka-clients`). The company wants to migrate to Azure Event Hubs without rewriting application code.",
    question: "How does Azure Event Hubs support Apache Kafka producer and consumer applications?",
    options: [
      { id: 'A', text: "Kafka code must be completely rewritten using Event Hubs SDKs" },
      { id: 'B', text: "Event Hubs does not support Kafka protocols" },
      { id: 'C', text: "Event Hubs provides an Apache Kafka 1.0+ compatible endpoint (port 9093) that accepts existing Kafka client traffic by changing only configuration connection strings" },
      { id: 'D', text: "By deploying an Apache Kafka cluster inside a dedicated VM" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Event Hubs exposes an Apache Kafka-compatible endpoint. Existing Kafka applications simply update their `bootstrap.servers` configuration to point to the Event Hubs namespace (`&lt;namespace&gt;.servicebus.windows.net:9093`) and authenticate via SASL/PLAIN or OAuth.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-for-kafka-ecosystem-overview",
    tags: ["Event Hubs", "Kafka", "Interoperability"]
  },
  {
    id: "azure-az204-216",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions",
    scenario: "A developer is evaluating Azure Service Bus. A billing service needs to broadcast order events so that both the Inventory Service and the Shipping Service receive a copy of every message.",
    question: "Which Service Bus messaging entity facilitates publish-subscribe distribution to multiple consumers?",
    options: [
      { id: 'A', text: "Service Bus Topics and Subscriptions" },
      { id: 'B', text: "Service Bus Queues" },
      { id: 'C', text: "Azure Queue Storage" },
      { id: 'D', text: "Event Hubs Partition" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Service Bus Queues` provide point-to-point communication where each message is processed by exactly one competing consumer. `Service Bus Topics and Subscriptions` provide a 1-to-many publish-subscribe model where each subscription receives an independent copy of published messages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
    tags: ["Service Bus", "Topics", "Pub/Sub"]
  },
  {
    id: "azure-az204-217",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Message Sessions for FIFO Ordering",
    scenario: "A banking application processes financial ledger transactions from an Azure Service Bus queue. Transactions for a specific bank account must be processed in strict first-in-first-out (FIFO) order, while transactions for different accounts can be processed concurrently.",
    question: "Which Service Bus feature guarantees strict FIFO ordering within a group of related messages?",
    options: [
      { id: 'A', text: "Duplicate Detection History" },
      { id: 'B', text: "Correlation Filters" },
      { id: 'C', text: "Partition Keys alone" },
      { id: 'D', text: "Message Sessions (using SessionId)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service Bus `Message Sessions` guarantee first-in, first-out (FIFO) ordered processing for messages sharing the same `SessionId`. A receiver locks a specific session, processes all messages in that session sequentially, and releases the session when done, enabling ordered processing without bottlenecking other sessions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Service Bus", "Message Sessions", "FIFO"]
  },
  {
    id: "azure-az204-218",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection Window",
    scenario: "A network glitch causes a client to submit the exact same purchase message twice within 30 seconds to an Azure Service Bus queue. The queue must automatically drop the second message.",
    question: "Which Service Bus feature detects and discards duplicate messages using MessageId?",
    options: [
      { id: 'A', text: "Message Sessions" },
      { id: 'B', text: "Dead-Letter Queue" },
      { id: 'C', text: "Auto-forwarding" },
      { id: 'D', text: "Duplicate Detection with a DuplicateDetectionHistoryTimeWindow" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enabling `Duplicate Detection` on a Service Bus queue or topic instructs the broker to track all `MessageId` values received within a configurable time window (`DuplicateDetectionHistoryTimeWindow`, default 10 minutes up to 7 days). Any message arriving with a previously seen `MessageId` is automatically discarded.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Service Bus", "Duplicate Detection", "MessageId"]
  },
  {
    id: "azure-az204-219",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Receive Modes: PeekLock vs ReceiveAndDelete",
    scenario: "A financial processing worker reads messages from Azure Service Bus. If the worker crashes or throws an exception while processing a message, the message must remain in the queue to be retried by another worker.",
    question: "Which message receive mode must the developer configure on the ServiceBusReceiver?",
    options: [
      { id: 'A', text: "ServiceBusReceiveMode.PeekLock" },
      { id: 'B', text: "ServiceBusReceiveMode.DirectRead" },
      { id: 'C', text: "ServiceBusReceiveMode.ReceiveAndDelete" },
      { id: 'D', text: "ServiceBusReceiveMode.ContinuousPeek" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `PeekLock` mode (default), the broker hides the message from other consumers and holds a lock. The worker must explicitly call `CompleteMessageAsync` to delete it; if the worker crashes or abandons the message, the lock expires and the message becomes available for reprocessing. `ReceiveAndDelete` deletes the message immediately from the queue upon receipt.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement#settling-receive-operations",
    tags: ["Service Bus", "PeekLock", "Reliability"]
  },
  {
    id: "azure-az204-220",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Dead-Letter Queue (DLQ) and maxDeliveryCount",
    scenario: "A poisoned message with malformed JSON causes an application worker to throw an exception every time it is read from an Azure Service Bus queue.",
    question: "How does Service Bus prevent this message from looping infinitely and blocking other messages?",
    options: [
      { id: 'A', text: "Service Bus shuts down the consumer application" },
      { id: 'B', text: "Service Bus sends an SMS alert to the account root user" },
      { id: 'C', text: "When the delivery attempt count exceeds maxDeliveryCount, Service Bus automatically moves the message to the Dead-Letter Queue ($DeadLetterQueue)" },
      { id: 'D', text: "Service Bus permanently deletes the message after the first failure" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each Service Bus queue and subscription tracks delivery attempts. When a message is abandoned or its lock expires, `DeliveryCount` increments. When `DeliveryCount` exceeds `maxDeliveryCount` (default 10), Service Bus automatically moves the poison message to the sub-queue `$DeadLetterQueue` for offline inspection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
    tags: ["Service Bus", "DLQ", "Dead-Letter Queue"]
  },
  {
    id: "azure-az204-221",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Service Bus Subscription Correlation Filters and SQL Filters",
    scenario: "An orders topic receives messages with application properties `Region` and `Priority`. A subscriber only wants messages where `Region = 'EMEA'` and `Priority = 'High'`.",
    question: "Which Service Bus filter type evaluates application message properties with highest execution performance and lowest cost?",
    options: [
      { id: 'A', text: "Correlation Filter (or SQL Filter)" },
      { id: 'B', text: "Message Sessions" },
      { id: 'C', text: "Dead-Letter Filter" },
      { id: 'D', text: "Auto-forwarding rule" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Bus subscriptions support `Correlation Filters` (which evaluate key-value equality conditions against message properties very efficiently) and `SQL Filters` (which support SQL-92 expressions like `Region = 'EMEA' AND Priority = 'High'`), ensuring subscribers receive only relevant messages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/topic-filters",
    tags: ["Service Bus", "Topic Filters", "Correlation Filter"]
  },
  {
    id: "azure-az204-222",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Queue Storage vs Service Bus Queues Comparison",
    scenario: "A developer is choosing between Azure Queue Storage and Azure Service Bus Queues. The application requires storing over 100 TB of total queued messages, but does not require FIFO ordering, duplicate detection, or pub/sub topics.",
    question: "Which messaging service is the most cost-effective solution for massive queue storage exceeding 80 GB?",
    options: [
      { id: 'A', text: "Azure Queue Storage (supports queue sizes up to storage account capacity limits)" },
      { id: 'B', text: "Azure Service Bus Queues (capped at 80 GB per queue in Standard tier)" },
      { id: 'C', text: "Azure Event Grid" },
      { id: 'D', text: "Azure Event Hubs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Queue Storage can scale to the maximum capacity of an Azure Storage account (up to 5 PB), making it ideal for simple workloads requiring queues larger than 80 GB. Azure Service Bus Queues cap individual queue sizes at 80 GB (or 1 TB in partitioned mode) but provide advanced features like sessions and transactions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted",
    tags: ["Queue Storage", "Service Bus", "Architecture"]
  },
  {
    id: "azure-az204-223",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Queue Storage Invisibility Timeout (VisibilityTimeout)",
    scenario: "A background worker dequeues a message from Azure Queue Storage. The message becomes invisible to other workers for a default duration while processing.",
    question: "What is the default visibility timeout for Azure Queue Storage messages, and which API extends it if processing takes longer?",
    options: [
      { id: 'A', text: "30 seconds default; extended using the UpdateMessage (UpdateMessageAsync) API" },
      { id: 'B', text: "1 hour default; cannot be extended" },
      { id: 'C', text: "10 seconds default; extended via PeekMessage" },
      { id: 'D', text: "5 minutes default; extended via RenewLock" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a message is retrieved from Queue Storage (`GetMessages`), it becomes invisible to other workers for the `visibilityTimeout` (default 30 seconds). If processing takes longer, the worker must call `UpdateMessage` with a new visibility timeout to prevent another worker from picking it up prematurely.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/queues/storage-dotnet-how-to-use-queues#change-the-contents-of-a-queued-message",
    tags: ["Queue Storage", "Visibility Timeout", "Concurrency"]
  },
  {
    id: "azure-az204-224",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Queue Storage Maximum Message Size and Lifespan (TTL)",
    scenario: "A developer is implementing an asynchronous task queue using Azure Queue Storage.",
    question: "What is the maximum allowable size for a single message in Azure Queue Storage?",
    options: [
      { id: 'A', text: "64 KB" },
      { id: 'B', text: "256 KB" },
      { id: 'C', text: "1 MB" },
      { id: 'D', text: "100 MB" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Queue Storage has a maximum message size of 64 KB (and 48 KB if Base64 encoded). For messages larger than 64 KB, developers use the Claim Check pattern: storing the large payload in Azure Blob Storage and putting the blob URI into the queue message.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction#queue-service-concepts",
    tags: ["Queue Storage", "Message Limits", "TTL"]
  },
  {
    id: "azure-az204-225",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Queue Storage DequeueCount for Poison Messages",
    scenario: "A worker service crashes every time it encounters a specific malformed message in Azure Queue Storage.",
    question: "How can the application detect that a message has repeatedly failed processing?",
    options: [
      { id: 'A', text: "Inspect the NextVisibleTime" },
      { id: 'B', text: "Inspect the DequeueCount property on the retrieved QueueMessage" },
      { id: 'C', text: "Inspect the MessageId property" },
      { id: 'D', text: "Check the InsertionTime timestamp" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Azure Queue Storage, each message contains a `DequeueCount` property that increments every time the message is retrieved. If `DequeueCount` exceeds a threshold (e.g. 5 attempts), application code should delete the message from the queue and forward it to a custom poison queue.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/queues/storage-dotnet-how-to-use-queues#dequeue-the-next-message",
    tags: ["Queue Storage", "DequeueCount", "Poison Messages"]
  }
];

export default AZURE_AZ204_QUESTIONS_9;
