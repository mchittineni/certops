export const AZURE_AZ204_QUESTIONS_20 = [
  {
    id: "azure-az204-476",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Partitions and Consumer Groups: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Event Hubs to ingest millions of telemetry events per second and allow two independent applications (real-time alerting and archival storage) to read the stream at their own pace.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Event Hubs partitioned consumer architecture with independent consumer groups is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Service Bus queue without sessions." },
      { id: 'B', text: "Deploy an Azure Queue Storage queue shared by both applications." },
      { id: 'C', text: "Use a single-threaded SQL database table to store all streaming telemetry." },
      { id: 'D', text: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups. Azure Event Hubs is a big data streaming platform and event ingestion service. Partitions enable horizontal scale by dividing data streams, while Consumer Groups provide independent views of the stream, allowing multiple consuming applications to read data concurrently at different speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Azure Event Hubs", "Event Hubs", "Dr Failover"]
  },
  {
    id: "azure-az204-477",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Partitions and Consumer Groups: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Event Hubs to ingest millions of telemetry events per second and allow two independent applications (real-time alerting and archival storage) to read the stream at their own pace.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Event Hubs partitioned consumer architecture with independent consumer groups is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Service Bus queue without sessions." },
      { id: 'B', text: "Use a single-threaded SQL database table to store all streaming telemetry." },
      { id: 'C', text: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups." },
      { id: 'D', text: "Deploy an Azure Queue Storage queue shared by both applications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups. Azure Event Hubs is a big data streaming platform and event ingestion service. Partitions enable horizontal scale by dividing data streams, while Consumer Groups provide independent views of the stream, allowing multiple consuming applications to read data concurrently at different speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Azure Event Hubs", "Event Hubs", "High Load Scale"]
  },
  {
    id: "azure-az204-478",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Partitions and Consumer Groups: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Event Hubs to ingest millions of telemetry events per second and allow two independent applications (real-time alerting and archival storage) to read the stream at their own pace.",
    question: "Which solution properly implements these mandatory security and governance controls? Event Hubs partitioned consumer architecture with independent consumer groups is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Service Bus queue without sessions." },
      { id: 'B', text: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups." },
      { id: 'C', text: "Use a single-threaded SQL database table to store all streaming telemetry." },
      { id: 'D', text: "Deploy an Azure Queue Storage queue shared by both applications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups. Azure Event Hubs is a big data streaming platform and event ingestion service. Partitions enable horizontal scale by dividing data streams, while Consumer Groups provide independent views of the stream, allowing multiple consuming applications to read data concurrently at different speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Azure Event Hubs", "Event Hubs", "Security Compliance"]
  },
  {
    id: "azure-az204-479",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Partitions and Consumer Groups: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Event Hubs to ingest millions of telemetry events per second and allow two independent applications (real-time alerting and archival storage) to read the stream at their own pace.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Event Hubs partitioned consumer architecture with independent consumer groups is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Service Bus queue without sessions." },
      { id: 'B', text: "Deploy an Azure Queue Storage queue shared by both applications." },
      { id: 'C', text: "Use a single-threaded SQL database table to store all streaming telemetry." },
      { id: 'D', text: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups. Azure Event Hubs is a big data streaming platform and event ingestion service. Partitions enable horizontal scale by dividing data streams, while Consumer Groups provide independent views of the stream, allowing multiple consuming applications to read data concurrently at different speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Azure Event Hubs", "Event Hubs", "Hybrid Migration"]
  },
  {
    id: "azure-az204-480",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Partitions and Consumer Groups: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Event Hubs to ingest millions of telemetry events per second and allow two independent applications (real-time alerting and archival storage) to read the stream at their own pace.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Event Hubs partitioned consumer architecture with independent consumer groups is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Service Bus queue without sessions." },
      { id: 'B', text: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups." },
      { id: 'C', text: "Use a single-threaded SQL database table to store all streaming telemetry." },
      { id: 'D', text: "Deploy an Azure Queue Storage queue shared by both applications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure Event Hubs with multiple partitions and two distinct Consumer Groups. Azure Event Hubs is a big data streaming platform and event ingestion service. Partitions enable horizontal scale by dividing data streams, while Consumer Groups provide independent views of the stream, allowing multiple consuming applications to read data concurrently at different speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features#consumer-groups",
    tags: ["Azure Event Hubs", "Event Hubs", "Resilience Failure"]
  },
  {
    id: "azure-az204-481",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Blob / Data Lake: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Event Hubs to automatically deliver streaming telemetry events from Event Hubs to Azure Data Lake Storage in Avro or Parquet format without writing custom consumer code.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Event Hubs Capture delivering automated zero-code streaming ingest is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly script to download events via the Event Hubs REST API." },
      { id: 'B', text: "Write a custom background worker application running on 10 Azure Virtual Machines." },
      { id: 'C', text: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window." },
      { id: 'D', text: "Use an Azure Logic App triggered every second to append records to a CSV file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window. Event Hubs Capture is the easiest way to automatically deliver streaming data into an Azure Blob storage or Azure Data Lake Storage account. It operates with zero code, capturing data in Avro format based on time (e.g. 5 minutes) or size (e.g. 300 MB) intervals.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Azure Event Hubs", "Event Hubs", "Dr Failover"]
  },
  {
    id: "azure-az204-482",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Blob / Data Lake: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Event Hubs to automatically deliver streaming telemetry events from Event Hubs to Azure Data Lake Storage in Avro or Parquet format without writing custom consumer code.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Event Hubs Capture delivering automated zero-code streaming ingest is under consideration.",
    options: [
      { id: 'A', text: "Schedule an hourly script to download events via the Event Hubs REST API." },
      { id: 'B', text: "Write a custom background worker application running on 10 Azure Virtual Machines." },
      { id: 'C', text: "Use an Azure Logic App triggered every second to append records to a CSV file." },
      { id: 'D', text: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window. Event Hubs Capture is the easiest way to automatically deliver streaming data into an Azure Blob storage or Azure Data Lake Storage account. It operates with zero code, capturing data in Avro format based on time (e.g. 5 minutes) or size (e.g. 300 MB) intervals.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Azure Event Hubs", "Event Hubs", "High Load Scale"]
  },
  {
    id: "azure-az204-483",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Blob / Data Lake: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Event Hubs to automatically deliver streaming telemetry events from Event Hubs to Azure Data Lake Storage in Avro or Parquet format without writing custom consumer code.",
    question: "Which solution properly implements these mandatory security and governance controls? Event Hubs Capture delivering automated zero-code streaming ingest is under consideration.",
    options: [
      { id: 'A', text: "Write a custom background worker application running on 10 Azure Virtual Machines." },
      { id: 'B', text: "Use an Azure Logic App triggered every second to append records to a CSV file." },
      { id: 'C', text: "Schedule an hourly script to download events via the Event Hubs REST API." },
      { id: 'D', text: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window. Event Hubs Capture is the easiest way to automatically deliver streaming data into an Azure Blob storage or Azure Data Lake Storage account. It operates with zero code, capturing data in Avro format based on time (e.g. 5 minutes) or size (e.g. 300 MB) intervals.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Azure Event Hubs", "Event Hubs", "Security Compliance"]
  },
  {
    id: "azure-az204-484",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Blob / Data Lake: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Event Hubs to automatically deliver streaming telemetry events from Event Hubs to Azure Data Lake Storage in Avro or Parquet format without writing custom consumer code.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Event Hubs Capture delivering automated zero-code streaming ingest is under consideration.",
    options: [
      { id: 'A', text: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window." },
      { id: 'B', text: "Write a custom background worker application running on 10 Azure Virtual Machines." },
      { id: 'C', text: "Use an Azure Logic App triggered every second to append records to a CSV file." },
      { id: 'D', text: "Schedule an hourly script to download events via the Event Hubs REST API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window. Event Hubs Capture is the easiest way to automatically deliver streaming data into an Azure Blob storage or Azure Data Lake Storage account. It operates with zero code, capturing data in Avro format based on time (e.g. 5 minutes) or size (e.g. 300 MB) intervals.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Azure Event Hubs", "Event Hubs", "Hybrid Migration"]
  },
  {
    id: "azure-az204-485",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Hubs Capture to Blob / Data Lake: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Event Hubs to automatically deliver streaming telemetry events from Event Hubs to Azure Data Lake Storage in Avro or Parquet format without writing custom consumer code.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Event Hubs Capture delivering automated zero-code streaming ingest is under consideration.",
    options: [
      { id: 'A', text: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window." },
      { id: 'B', text: "Schedule an hourly script to download events via the Event Hubs REST API." },
      { id: 'C', text: "Write a custom background worker application running on 10 Azure Virtual Machines." },
      { id: 'D', text: "Use an Azure Logic App triggered every second to append records to a CSV file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Event Hubs Capture and specify the target Azure Storage container and time/size window. Event Hubs Capture is the easiest way to automatically deliver streaming data into an Azure Blob storage or Azure Data Lake Storage account. It operates with zero code, capturing data in Avro format based on time (e.g. 5 minutes) or size (e.g. 300 MB) intervals.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview",
    tags: ["Azure Event Hubs", "Event Hubs", "Resilience Failure"]
  },
  {
    id: "azure-az204-486",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Service Bus to distribute customer order messages to multiple downstream systems (inventory, billing, shipping), allowing each system to filter and receive relevant order types.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Point-to-point queues vs Publish/Subscribe topics with subscription rules is under consideration.",
    options: [
      { id: 'A', text: "Send customer order details via unencrypted email notifications." },
      { id: 'B', text: "Use Azure Table Storage to store order records and have all systems poll the table." },
      { id: 'C', text: "Deploy a single Azure Service Bus Queue shared by all downstream systems." },
      { id: 'D', text: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters. Azure Service Bus Topics and Subscriptions provide a publish/subscribe messaging model. While Queues deliver messages point-to-point to a single receiver, Topics broadcast messages to multiple independent subscriptions. Each subscription can use SQL filters to receive specific message subsets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions",
    tags: ["Azure Service Bus", "Service Bus", "Dr Failover"]
  },
  {
    id: "azure-az204-487",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Service Bus to distribute customer order messages to multiple downstream systems (inventory, billing, shipping), allowing each system to filter and receive relevant order types.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Point-to-point queues vs Publish/Subscribe topics with subscription rules is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single Azure Service Bus Queue shared by all downstream systems." },
      { id: 'B', text: "Use Azure Table Storage to store order records and have all systems poll the table." },
      { id: 'C', text: "Send customer order details via unencrypted email notifications." },
      { id: 'D', text: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters. Azure Service Bus Topics and Subscriptions provide a publish/subscribe messaging model. While Queues deliver messages point-to-point to a single receiver, Topics broadcast messages to multiple independent subscriptions. Each subscription can use SQL filters to receive specific message subsets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions",
    tags: ["Azure Service Bus", "Service Bus", "High Load Scale"]
  },
  {
    id: "azure-az204-488",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Service Bus to distribute customer order messages to multiple downstream systems (inventory, billing, shipping), allowing each system to filter and receive relevant order types.",
    question: "Which solution properly implements these mandatory security and governance controls? Point-to-point queues vs Publish/Subscribe topics with subscription rules is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single Azure Service Bus Queue shared by all downstream systems." },
      { id: 'B', text: "Send customer order details via unencrypted email notifications." },
      { id: 'C', text: "Use Azure Table Storage to store order records and have all systems poll the table." },
      { id: 'D', text: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters. Azure Service Bus Topics and Subscriptions provide a publish/subscribe messaging model. While Queues deliver messages point-to-point to a single receiver, Topics broadcast messages to multiple independent subscriptions. Each subscription can use SQL filters to receive specific message subsets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions",
    tags: ["Azure Service Bus", "Service Bus", "Security Compliance"]
  },
  {
    id: "azure-az204-489",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Service Bus to distribute customer order messages to multiple downstream systems (inventory, billing, shipping), allowing each system to filter and receive relevant order types.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Point-to-point queues vs Publish/Subscribe topics with subscription rules is under consideration.",
    options: [
      { id: 'A', text: "Use Azure Table Storage to store order records and have all systems poll the table." },
      { id: 'B', text: "Send customer order details via unencrypted email notifications." },
      { id: 'C', text: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters." },
      { id: 'D', text: "Deploy a single Azure Service Bus Queue shared by all downstream systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters. Azure Service Bus Topics and Subscriptions provide a publish/subscribe messaging model. While Queues deliver messages point-to-point to a single receiver, Topics broadcast messages to multiple independent subscriptions. Each subscription can use SQL filters to receive specific message subsets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions",
    tags: ["Azure Service Bus", "Service Bus", "Hybrid Migration"]
  },
  {
    id: "azure-az204-490",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Queues vs Topics/Subscriptions: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Service Bus to distribute customer order messages to multiple downstream systems (inventory, billing, shipping), allowing each system to filter and receive relevant order types.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Point-to-point queues vs Publish/Subscribe topics with subscription rules is under consideration.",
    options: [
      { id: 'A', text: "Send customer order details via unencrypted email notifications." },
      { id: 'B', text: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters." },
      { id: 'C', text: "Deploy a single Azure Service Bus Queue shared by all downstream systems." },
      { id: 'D', text: "Use Azure Table Storage to store order records and have all systems poll the table." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Azure Service Bus Topic with distinct Subscriptions and SQL correlation filters. Azure Service Bus Topics and Subscriptions provide a publish/subscribe messaging model. While Queues deliver messages point-to-point to a single receiver, Topics broadcast messages to multiple independent subscriptions. Each subscription can use SQL filters to receive specific message subsets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions",
    tags: ["Azure Service Bus", "Service Bus", "Resilience Failure"]
  },
  {
    id: "azure-az204-491",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Sessions (FIFO Ordering): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Service Bus to ensure that financial ledger transaction messages belonging to a specific bank account are processed in strict chronological order across multi-threaded worker instances.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Message sessions ensuring strict FIFO ordering across interleaved message streams is under consideration.",
    options: [
      { id: 'A', text: "Use Azure Queue Storage with 32 worker threads." },
      { id: 'B', text: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId." },
      { id: 'C', text: "Configure a standard queue and rely on consumer processing speed." },
      { id: 'D', text: "Add an incremental integer sequence number into the message payload without sessions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId. Azure Service Bus Message Sessions enable joint and ordered handling of unbounded sequences of related messages. By specifying a `SessionId` on messages, Service Bus guarantees that all messages with that session ID are processed in strict First-In, First-Out (FIFO) order by a single consumer lock.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Azure Service Bus", "Service Bus", "Dr Failover"]
  },
  {
    id: "azure-az204-492",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Sessions (FIFO Ordering): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Service Bus to ensure that financial ledger transaction messages belonging to a specific bank account are processed in strict chronological order across multi-threaded worker instances.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Message sessions ensuring strict FIFO ordering across interleaved message streams is under consideration.",
    options: [
      { id: 'A', text: "Configure a standard queue and rely on consumer processing speed." },
      { id: 'B', text: "Add an incremental integer sequence number into the message payload without sessions." },
      { id: 'C', text: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId." },
      { id: 'D', text: "Use Azure Queue Storage with 32 worker threads." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId. Azure Service Bus Message Sessions enable joint and ordered handling of unbounded sequences of related messages. By specifying a `SessionId` on messages, Service Bus guarantees that all messages with that session ID are processed in strict First-In, First-Out (FIFO) order by a single consumer lock.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Azure Service Bus", "Service Bus", "High Load Scale"]
  },
  {
    id: "azure-az204-493",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Sessions (FIFO Ordering): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Service Bus to ensure that financial ledger transaction messages belonging to a specific bank account are processed in strict chronological order across multi-threaded worker instances.",
    question: "Which solution properly implements these mandatory security and governance controls? Message sessions ensuring strict FIFO ordering across interleaved message streams is under consideration.",
    options: [
      { id: 'A', text: "Add an incremental integer sequence number into the message payload without sessions." },
      { id: 'B', text: "Use Azure Queue Storage with 32 worker threads." },
      { id: 'C', text: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId." },
      { id: 'D', text: "Configure a standard queue and rely on consumer processing speed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId. Azure Service Bus Message Sessions enable joint and ordered handling of unbounded sequences of related messages. By specifying a `SessionId` on messages, Service Bus guarantees that all messages with that session ID are processed in strict First-In, First-Out (FIFO) order by a single consumer lock.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Azure Service Bus", "Service Bus", "Security Compliance"]
  },
  {
    id: "azure-az204-494",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Sessions (FIFO Ordering): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Service Bus to ensure that financial ledger transaction messages belonging to a specific bank account are processed in strict chronological order across multi-threaded worker instances.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Message sessions ensuring strict FIFO ordering across interleaved message streams is under consideration.",
    options: [
      { id: 'A', text: "Use Azure Queue Storage with 32 worker threads." },
      { id: 'B', text: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId." },
      { id: 'C', text: "Add an incremental integer sequence number into the message payload without sessions." },
      { id: 'D', text: "Configure a standard queue and rely on consumer processing speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId. Azure Service Bus Message Sessions enable joint and ordered handling of unbounded sequences of related messages. By specifying a `SessionId` on messages, Service Bus guarantees that all messages with that session ID are processed in strict First-In, First-Out (FIFO) order by a single consumer lock.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Azure Service Bus", "Service Bus", "Hybrid Migration"]
  },
  {
    id: "azure-az204-495",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Sessions (FIFO Ordering): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Service Bus to ensure that financial ledger transaction messages belonging to a specific bank account are processed in strict chronological order across multi-threaded worker instances.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Message sessions ensuring strict FIFO ordering across interleaved message streams is under consideration.",
    options: [
      { id: 'A', text: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId." },
      { id: 'B', text: "Use Azure Queue Storage with 32 worker threads." },
      { id: 'C', text: "Configure a standard queue and rely on consumer processing speed." },
      { id: 'D', text: "Add an incremental integer sequence number into the message payload without sessions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Message Sessions on the Service Bus queue and assign the bank account ID as the SessionId. Azure Service Bus Message Sessions enable joint and ordered handling of unbounded sequences of related messages. By specifying a `SessionId` on messages, Service Bus guarantees that all messages with that session ID are processed in strict First-In, First-Out (FIFO) order by a single consumer lock.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
    tags: ["Azure Service Bus", "Service Bus", "Resilience Failure"]
  },
  {
    id: "azure-az204-496",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Service Bus to prevent duplicate message processing when network retries cause a producer application to transmit the same order message twice within a 10-minute window.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? MessageId-based duplicate detection window is under consideration.",
    options: [
      { id: 'A', text: "Disable network acknowledgment headers on the message producer." },
      { id: 'B', text: "Instruct clients to never retry failed network requests." },
      { id: 'C', text: "Write custom application code to store all processed message IDs in a relational database table forever." },
      { id: 'D', text: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window. Azure Service Bus Duplicate Detection enables the queue or topic to detect and drop duplicate messages sent by a producer. By inspecting the `MessageId` property within a configurable history window (up to 7 days), Service Bus automatically discards duplicate messages without raising errors.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Azure Service Bus", "Service Bus", "Dr Failover"]
  },
  {
    id: "azure-az204-497",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Service Bus to prevent duplicate message processing when network retries cause a producer application to transmit the same order message twice within a 10-minute window.",
    question: "Which architectural approach should the team select to manage this demand efficiently? MessageId-based duplicate detection window is under consideration.",
    options: [
      { id: 'A', text: "Write custom application code to store all processed message IDs in a relational database table forever." },
      { id: 'B', text: "Disable network acknowledgment headers on the message producer." },
      { id: 'C', text: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window." },
      { id: 'D', text: "Instruct clients to never retry failed network requests." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window. Azure Service Bus Duplicate Detection enables the queue or topic to detect and drop duplicate messages sent by a producer. By inspecting the `MessageId` property within a configurable history window (up to 7 days), Service Bus automatically discards duplicate messages without raising errors.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Azure Service Bus", "Service Bus", "High Load Scale"]
  },
  {
    id: "azure-az204-498",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Service Bus to prevent duplicate message processing when network retries cause a producer application to transmit the same order message twice within a 10-minute window.",
    question: "Which solution properly implements these mandatory security and governance controls? MessageId-based duplicate detection window is under consideration.",
    options: [
      { id: 'A', text: "Write custom application code to store all processed message IDs in a relational database table forever." },
      { id: 'B', text: "Disable network acknowledgment headers on the message producer." },
      { id: 'C', text: "Instruct clients to never retry failed network requests." },
      { id: 'D', text: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window. Azure Service Bus Duplicate Detection enables the queue or topic to detect and drop duplicate messages sent by a producer. By inspecting the `MessageId` property within a configurable history window (up to 7 days), Service Bus automatically discards duplicate messages without raising errors.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Azure Service Bus", "Service Bus", "Security Compliance"]
  },
  {
    id: "azure-az204-499",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Service Bus to prevent duplicate message processing when network retries cause a producer application to transmit the same order message twice within a 10-minute window.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? MessageId-based duplicate detection window is under consideration.",
    options: [
      { id: 'A', text: "Write custom application code to store all processed message IDs in a relational database table forever." },
      { id: 'B', text: "Disable network acknowledgment headers on the message producer." },
      { id: 'C', text: "Instruct clients to never retry failed network requests." },
      { id: 'D', text: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window. Azure Service Bus Duplicate Detection enables the queue or topic to detect and drop duplicate messages sent by a producer. By inspecting the `MessageId` property within a configurable history window (up to 7 days), Service Bus automatically discards duplicate messages without raising errors.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Azure Service Bus", "Service Bus", "Hybrid Migration"]
  },
  {
    id: "azure-az204-500",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Service Bus Duplicate Detection: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Service Bus to prevent duplicate message processing when network retries cause a producer application to transmit the same order message twice within a 10-minute window.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? MessageId-based duplicate detection window is under consideration.",
    options: [
      { id: 'A', text: "Disable network acknowledgment headers on the message producer." },
      { id: 'B', text: "Instruct clients to never retry failed network requests." },
      { id: 'C', text: "Write custom application code to store all processed message IDs in a relational database table forever." },
      { id: 'D', text: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Duplicate Detection on the Service Bus queue and configure a 10-minute duplicate detection history window. Azure Service Bus Duplicate Detection enables the queue or topic to detect and drop duplicate messages sent by a producer. By inspecting the `MessageId` property within a configurable history window (up to 7 days), Service Bus automatically discards duplicate messages without raising errors.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
    tags: ["Azure Service Bus", "Service Bus", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_20;
