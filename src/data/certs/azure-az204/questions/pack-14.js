export const AZURE_AZ204_QUESTIONS_14 = [
  {
    id: "azure-az204-326",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Consistency Levels (5 Models): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cosmos DB to select the optimal Cosmos DB consistency level for an e-commerce shopping cart requiring read-your-own-writes guarantees within a client session at the lowest cost and latency.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, Eventual is under consideration.",
    options: [
      { id: 'A', text: "Configure Session consistency (default level providing read-your-writes guarantees within a session)." },
      { id: 'B', text: "Configure Strong consistency across all global regions for non-financial read traffic." },
      { id: 'C', text: "Configure Eventual consistency and accept stale reads during active customer shopping sessions." },
      { id: 'D', text: "Disable database consistency checks entirely to minimize billing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Session consistency (default level providing read-your-writes guarantees within a session). Cosmos DB provides five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. Session consistency is the default and most widely used level, providing monotonic reads, monotonic writes, and read-your-writes guarantees scoped to a client session token.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Dr Failover"]
  },
  {
    id: "azure-az204-327",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Consistency Levels (5 Models): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cosmos DB to select the optimal Cosmos DB consistency level for an e-commerce shopping cart requiring read-your-own-writes guarantees within a client session at the lowest cost and latency.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, Eventual is under consideration.",
    options: [
      { id: 'A', text: "Configure Session consistency (default level providing read-your-writes guarantees within a session)." },
      { id: 'B', text: "Configure Strong consistency across all global regions for non-financial read traffic." },
      { id: 'C', text: "Configure Eventual consistency and accept stale reads during active customer shopping sessions." },
      { id: 'D', text: "Disable database consistency checks entirely to minimize billing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Session consistency (default level providing read-your-writes guarantees within a session). Cosmos DB provides five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. Session consistency is the default and most widely used level, providing monotonic reads, monotonic writes, and read-your-writes guarantees scoped to a client session token.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Azure Cosmos DB", "Cosmos DB", "High Load Scale"]
  },
  {
    id: "azure-az204-328",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Consistency Levels (5 Models): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cosmos DB to select the optimal Cosmos DB consistency level for an e-commerce shopping cart requiring read-your-own-writes guarantees within a client session at the lowest cost and latency.",
    question: "Which solution properly implements these mandatory security and governance controls? Five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, Eventual is under consideration.",
    options: [
      { id: 'A', text: "Configure Session consistency (default level providing read-your-writes guarantees within a session)." },
      { id: 'B', text: "Configure Strong consistency across all global regions for non-financial read traffic." },
      { id: 'C', text: "Configure Eventual consistency and accept stale reads during active customer shopping sessions." },
      { id: 'D', text: "Disable database consistency checks entirely to minimize billing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Session consistency (default level providing read-your-writes guarantees within a session). Cosmos DB provides five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. Session consistency is the default and most widely used level, providing monotonic reads, monotonic writes, and read-your-writes guarantees scoped to a client session token.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Security Compliance"]
  },
  {
    id: "azure-az204-329",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Consistency Levels (5 Models): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cosmos DB to select the optimal Cosmos DB consistency level for an e-commerce shopping cart requiring read-your-own-writes guarantees within a client session at the lowest cost and latency.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, Eventual is under consideration.",
    options: [
      { id: 'A', text: "Configure Session consistency (default level providing read-your-writes guarantees within a session)." },
      { id: 'B', text: "Configure Strong consistency across all global regions for non-financial read traffic." },
      { id: 'C', text: "Configure Eventual consistency and accept stale reads during active customer shopping sessions." },
      { id: 'D', text: "Disable database consistency checks entirely to minimize billing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Session consistency (default level providing read-your-writes guarantees within a session). Cosmos DB provides five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. Session consistency is the default and most widely used level, providing monotonic reads, monotonic writes, and read-your-writes guarantees scoped to a client session token.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Hybrid Migration"]
  },
  {
    id: "azure-az204-330",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Consistency Levels (5 Models): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cosmos DB to select the optimal Cosmos DB consistency level for an e-commerce shopping cart requiring read-your-own-writes guarantees within a client session at the lowest cost and latency.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, Eventual is under consideration.",
    options: [
      { id: 'A', text: "Configure Session consistency (default level providing read-your-writes guarantees within a session)." },
      { id: 'B', text: "Configure Strong consistency across all global regions for non-financial read traffic." },
      { id: 'C', text: "Configure Eventual consistency and accept stale reads during active customer shopping sessions." },
      { id: 'D', text: "Disable database consistency checks entirely to minimize billing charges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Session consistency (default level providing read-your-writes guarantees within a session). Cosmos DB provides five well-defined consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. Session consistency is the default and most widely used level, providing monotonic reads, monotonic writes, and read-your-writes guarantees scoped to a client session token.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Resilience Failure"]
  },
  {
    id: "azure-az204-331",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Processor: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cosmos DB to build an event-driven microservice that processes inserted and updated documents in Azure Cosmos DB in order with automatic state checkpointing and worker load balancing.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Change Feed Processor library with persistent lease container checkpointing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container." },
      { id: 'B', text: "Run a cron job that executes a SELECT * FROM c query across the entire database every 5 seconds." },
      { id: 'C', text: "Trigger an Azure VM restart whenever a document is modified in Cosmos DB." },
      { id: 'D', text: "Poll the database using manual HTTP REST calls without checkpointing progress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container. The Cosmos DB Change Feed Processor library simplifies reading the change feed and distributes event processing across multiple worker instances. It uses a dedicated lease container to maintain state and checkpoints progress automatically, guaranteeing at-least-once processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Dr Failover"]
  },
  {
    id: "azure-az204-332",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Processor: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cosmos DB to build an event-driven microservice that processes inserted and updated documents in Azure Cosmos DB in order with automatic state checkpointing and worker load balancing.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Change Feed Processor library with persistent lease container checkpointing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container." },
      { id: 'B', text: "Run a cron job that executes a SELECT * FROM c query across the entire database every 5 seconds." },
      { id: 'C', text: "Trigger an Azure VM restart whenever a document is modified in Cosmos DB." },
      { id: 'D', text: "Poll the database using manual HTTP REST calls without checkpointing progress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container. The Cosmos DB Change Feed Processor library simplifies reading the change feed and distributes event processing across multiple worker instances. It uses a dedicated lease container to maintain state and checkpoints progress automatically, guaranteeing at-least-once processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor",
    tags: ["Azure Cosmos DB", "Cosmos DB", "High Load Scale"]
  },
  {
    id: "azure-az204-333",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Processor: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cosmos DB to build an event-driven microservice that processes inserted and updated documents in Azure Cosmos DB in order with automatic state checkpointing and worker load balancing.",
    question: "Which solution properly implements these mandatory security and governance controls? Change Feed Processor library with persistent lease container checkpointing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container." },
      { id: 'B', text: "Run a cron job that executes a SELECT * FROM c query across the entire database every 5 seconds." },
      { id: 'C', text: "Trigger an Azure VM restart whenever a document is modified in Cosmos DB." },
      { id: 'D', text: "Poll the database using manual HTTP REST calls without checkpointing progress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container. The Cosmos DB Change Feed Processor library simplifies reading the change feed and distributes event processing across multiple worker instances. It uses a dedicated lease container to maintain state and checkpoints progress automatically, guaranteeing at-least-once processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Security Compliance"]
  },
  {
    id: "azure-az204-334",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Processor: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cosmos DB to build an event-driven microservice that processes inserted and updated documents in Azure Cosmos DB in order with automatic state checkpointing and worker load balancing.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Change Feed Processor library with persistent lease container checkpointing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container." },
      { id: 'B', text: "Run a cron job that executes a SELECT * FROM c query across the entire database every 5 seconds." },
      { id: 'C', text: "Trigger an Azure VM restart whenever a document is modified in Cosmos DB." },
      { id: 'D', text: "Poll the database using manual HTTP REST calls without checkpointing progress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container. The Cosmos DB Change Feed Processor library simplifies reading the change feed and distributes event processing across multiple worker instances. It uses a dedicated lease container to maintain state and checkpoints progress automatically, guaranteeing at-least-once processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Hybrid Migration"]
  },
  {
    id: "azure-az204-335",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Processor: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cosmos DB to build an event-driven microservice that processes inserted and updated documents in Azure Cosmos DB in order with automatic state checkpointing and worker load balancing.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Change Feed Processor library with persistent lease container checkpointing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container." },
      { id: 'B', text: "Run a cron job that executes a SELECT * FROM c query across the entire database every 5 seconds." },
      { id: 'C', text: "Trigger an Azure VM restart whenever a document is modified in Cosmos DB." },
      { id: 'D', text: "Poll the database using manual HTTP REST calls without checkpointing progress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Cosmos DB Change Feed Processor library with a dedicated lease container. The Cosmos DB Change Feed Processor library simplifies reading the change feed and distributes event processing across multiple worker instances. It uses a dedicated lease container to maintain state and checkpoints progress automatically, guaranteeing at-least-once processing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/change-feed-processor",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Resilience Failure"]
  },
  {
    id: "azure-az204-336",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculations: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cosmos DB to estimate the provisioned throughput required for a Cosmos DB container performing 2,000 point reads per second of items that are 1 KB in size under Session consistency.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? RU/s capacity planning: 1 RU = 1 KB point read is under consideration.",
    options: [
      { id: 'A', text: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency)." },
      { id: 'B', text: "Provision 500 RU/s and rely on client HTTP retries for throttled requests." },
      { id: 'C', text: "Provision 100,000 RU/s regardless of workload size." },
      { id: 'D', text: "Configure a static compute pool on an Azure Virtual Machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency). In Azure Cosmos DB, reading a 1 KB item by ID and partition key value (point read) consumes approximately 1 Request Unit (RU) under Session or Eventual consistency. Reading 2,000 items (1 KB each) per second requires provisioning at least 2,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Dr Failover"]
  },
  {
    id: "azure-az204-337",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculations: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cosmos DB to estimate the provisioned throughput required for a Cosmos DB container performing 2,000 point reads per second of items that are 1 KB in size under Session consistency.",
    question: "Which architectural approach should the team select to manage this demand efficiently? RU/s capacity planning: 1 RU = 1 KB point read is under consideration.",
    options: [
      { id: 'A', text: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency)." },
      { id: 'B', text: "Provision 500 RU/s and rely on client HTTP retries for throttled requests." },
      { id: 'C', text: "Provision 100,000 RU/s regardless of workload size." },
      { id: 'D', text: "Configure a static compute pool on an Azure Virtual Machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency). In Azure Cosmos DB, reading a 1 KB item by ID and partition key value (point read) consumes approximately 1 Request Unit (RU) under Session or Eventual consistency. Reading 2,000 items (1 KB each) per second requires provisioning at least 2,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Azure Cosmos DB", "Cosmos DB", "High Load Scale"]
  },
  {
    id: "azure-az204-338",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculations: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cosmos DB to estimate the provisioned throughput required for a Cosmos DB container performing 2,000 point reads per second of items that are 1 KB in size under Session consistency.",
    question: "Which solution properly implements these mandatory security and governance controls? RU/s capacity planning: 1 RU = 1 KB point read is under consideration.",
    options: [
      { id: 'A', text: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency)." },
      { id: 'B', text: "Provision 500 RU/s and rely on client HTTP retries for throttled requests." },
      { id: 'C', text: "Provision 100,000 RU/s regardless of workload size." },
      { id: 'D', text: "Configure a static compute pool on an Azure Virtual Machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency). In Azure Cosmos DB, reading a 1 KB item by ID and partition key value (point read) consumes approximately 1 Request Unit (RU) under Session or Eventual consistency. Reading 2,000 items (1 KB each) per second requires provisioning at least 2,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Security Compliance"]
  },
  {
    id: "azure-az204-339",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculations: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cosmos DB to estimate the provisioned throughput required for a Cosmos DB container performing 2,000 point reads per second of items that are 1 KB in size under Session consistency.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? RU/s capacity planning: 1 RU = 1 KB point read is under consideration.",
    options: [
      { id: 'A', text: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency)." },
      { id: 'B', text: "Provision 500 RU/s and rely on client HTTP retries for throttled requests." },
      { id: 'C', text: "Provision 100,000 RU/s regardless of workload size." },
      { id: 'D', text: "Configure a static compute pool on an Azure Virtual Machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency). In Azure Cosmos DB, reading a 1 KB item by ID and partition key value (point read) consumes approximately 1 Request Unit (RU) under Session or Eventual consistency. Reading 2,000 items (1 KB each) per second requires provisioning at least 2,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Hybrid Migration"]
  },
  {
    id: "azure-az204-340",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculations: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cosmos DB to estimate the provisioned throughput required for a Cosmos DB container performing 2,000 point reads per second of items that are 1 KB in size under Session consistency.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? RU/s capacity planning: 1 RU = 1 KB point read is under consideration.",
    options: [
      { id: 'A', text: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency)." },
      { id: 'B', text: "Provision 500 RU/s and rely on client HTTP retries for throttled requests." },
      { id: 'C', text: "Provision 100,000 RU/s regardless of workload size." },
      { id: 'D', text: "Configure a static compute pool on an Azure Virtual Machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision 2,000 RU/s (1 RU per 1 KB point read under Session consistency). In Azure Cosmos DB, reading a 1 KB item by ID and partition key value (point read) consumes approximately 1 Request Unit (RU) under Session or Eventual consistency. Reading 2,000 items (1 KB each) per second requires provisioning at least 2,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Resilience Failure"]
  },
  {
    id: "azure-az204-341",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Optimistic Concurrency Control (ETags): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cosmos DB to prevent lost updates when multiple concurrent users attempt to update the same document simultaneously in Azure Cosmos DB.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Optimistic Concurrency Control using _etag and AccessCondition is under consideration.",
    options: [
      { id: 'A', text: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header." },
      { id: 'B', text: "Implement pessimistic locks by shutting down other user connections on the network." },
      { id: 'C', text: "Allow all writes to overwrite existing data blindly using last-write-wins without version checks." },
      { id: 'D', text: "Delete the document before every update to avoid conflicting write states." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header. Cosmos DB supports Optimistic Concurrency Control (OCC) using the system-generated `_etag` property on every document. When updating an item, clients pass the `_etag` in an `If-Match` access condition; if the document was modified by another process, Cosmos DB rejects the write with HTTP 412 Precondition Failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/database-transactions-optimistic-concurrency",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Dr Failover"]
  },
  {
    id: "azure-az204-342",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Optimistic Concurrency Control (ETags): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cosmos DB to prevent lost updates when multiple concurrent users attempt to update the same document simultaneously in Azure Cosmos DB.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Optimistic Concurrency Control using _etag and AccessCondition is under consideration.",
    options: [
      { id: 'A', text: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header." },
      { id: 'B', text: "Implement pessimistic locks by shutting down other user connections on the network." },
      { id: 'C', text: "Allow all writes to overwrite existing data blindly using last-write-wins without version checks." },
      { id: 'D', text: "Delete the document before every update to avoid conflicting write states." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header. Cosmos DB supports Optimistic Concurrency Control (OCC) using the system-generated `_etag` property on every document. When updating an item, clients pass the `_etag` in an `If-Match` access condition; if the document was modified by another process, Cosmos DB rejects the write with HTTP 412 Precondition Failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/database-transactions-optimistic-concurrency",
    tags: ["Azure Cosmos DB", "Cosmos DB", "High Load Scale"]
  },
  {
    id: "azure-az204-343",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Optimistic Concurrency Control (ETags): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cosmos DB to prevent lost updates when multiple concurrent users attempt to update the same document simultaneously in Azure Cosmos DB.",
    question: "Which solution properly implements these mandatory security and governance controls? Optimistic Concurrency Control using _etag and AccessCondition is under consideration.",
    options: [
      { id: 'A', text: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header." },
      { id: 'B', text: "Implement pessimistic locks by shutting down other user connections on the network." },
      { id: 'C', text: "Allow all writes to overwrite existing data blindly using last-write-wins without version checks." },
      { id: 'D', text: "Delete the document before every update to avoid conflicting write states." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header. Cosmos DB supports Optimistic Concurrency Control (OCC) using the system-generated `_etag` property on every document. When updating an item, clients pass the `_etag` in an `If-Match` access condition; if the document was modified by another process, Cosmos DB rejects the write with HTTP 412 Precondition Failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/database-transactions-optimistic-concurrency",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Security Compliance"]
  },
  {
    id: "azure-az204-344",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Optimistic Concurrency Control (ETags): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cosmos DB to prevent lost updates when multiple concurrent users attempt to update the same document simultaneously in Azure Cosmos DB.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Optimistic Concurrency Control using _etag and AccessCondition is under consideration.",
    options: [
      { id: 'A', text: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header." },
      { id: 'B', text: "Implement pessimistic locks by shutting down other user connections on the network." },
      { id: 'C', text: "Allow all writes to overwrite existing data blindly using last-write-wins without version checks." },
      { id: 'D', text: "Delete the document before every update to avoid conflicting write states." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header. Cosmos DB supports Optimistic Concurrency Control (OCC) using the system-generated `_etag` property on every document. When updating an item, clients pass the `_etag` in an `If-Match` access condition; if the document was modified by another process, Cosmos DB rejects the write with HTTP 412 Precondition Failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/database-transactions-optimistic-concurrency",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Hybrid Migration"]
  },
  {
    id: "azure-az204-345",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Optimistic Concurrency Control (ETags): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cosmos DB to prevent lost updates when multiple concurrent users attempt to update the same document simultaneously in Azure Cosmos DB.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Optimistic Concurrency Control using _etag and AccessCondition is under consideration.",
    options: [
      { id: 'A', text: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header." },
      { id: 'B', text: "Implement pessimistic locks by shutting down other user connections on the network." },
      { id: 'C', text: "Allow all writes to overwrite existing data blindly using last-write-wins without version checks." },
      { id: 'D', text: "Delete the document before every update to avoid conflicting write states." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Optimistic Concurrency Control (OCC) using the _etag property and an HTTP If-Match header. Cosmos DB supports Optimistic Concurrency Control (OCC) using the system-generated `_etag` property on every document. When updating an item, clients pass the `_etag` in an `If-Match` access condition; if the document was modified by another process, Cosmos DB rejects the write with HTTP 412 Precondition Failed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/database-transactions-optimistic-concurrency",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Resilience Failure"]
  },
  {
    id: "azure-az204-346",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata and Tags: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Storage to tag millions of PDF files stored in Azure Blob Storage with customer IDs and document categories so they can be queried and filtered without scanning containers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Blob index tags vs blob metadata for queryable search is under consideration.",
    options: [
      { id: 'A', text: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API." },
      { id: 'B', text: "Store customer IDs in custom blob metadata and write code to iterate and read metadata on every blob." },
      { id: 'C', text: "Create a separate blob container for every individual customer ID in the system." },
      { id: 'D', text: "Append customer IDs into the binary image content of the PDF files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API. Blob Index Tags categorize data in your storage account using key-value tag attributes. Azure automatically indexes these tags and exposes a multi-dimensional search index, allowing applications to discover blobs instantly using the `Find Blobs by Tags` API without listing entire containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Azure Storage", "Blob Storage", "Dr Failover"]
  },
  {
    id: "azure-az204-347",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata and Tags: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Storage to tag millions of PDF files stored in Azure Blob Storage with customer IDs and document categories so they can be queried and filtered without scanning containers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Blob index tags vs blob metadata for queryable search is under consideration.",
    options: [
      { id: 'A', text: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API." },
      { id: 'B', text: "Store customer IDs in custom blob metadata and write code to iterate and read metadata on every blob." },
      { id: 'C', text: "Create a separate blob container for every individual customer ID in the system." },
      { id: 'D', text: "Append customer IDs into the binary image content of the PDF files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API. Blob Index Tags categorize data in your storage account using key-value tag attributes. Azure automatically indexes these tags and exposes a multi-dimensional search index, allowing applications to discover blobs instantly using the `Find Blobs by Tags` API without listing entire containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Azure Storage", "Blob Storage", "High Load Scale"]
  },
  {
    id: "azure-az204-348",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata and Tags: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Storage to tag millions of PDF files stored in Azure Blob Storage with customer IDs and document categories so they can be queried and filtered without scanning containers.",
    question: "Which solution properly implements these mandatory security and governance controls? Blob index tags vs blob metadata for queryable search is under consideration.",
    options: [
      { id: 'A', text: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API." },
      { id: 'B', text: "Store customer IDs in custom blob metadata and write code to iterate and read metadata on every blob." },
      { id: 'C', text: "Create a separate blob container for every individual customer ID in the system." },
      { id: 'D', text: "Append customer IDs into the binary image content of the PDF files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API. Blob Index Tags categorize data in your storage account using key-value tag attributes. Azure automatically indexes these tags and exposes a multi-dimensional search index, allowing applications to discover blobs instantly using the `Find Blobs by Tags` API without listing entire containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Azure Storage", "Blob Storage", "Security Compliance"]
  },
  {
    id: "azure-az204-349",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata and Tags: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Storage to tag millions of PDF files stored in Azure Blob Storage with customer IDs and document categories so they can be queried and filtered without scanning containers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Blob index tags vs blob metadata for queryable search is under consideration.",
    options: [
      { id: 'A', text: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API." },
      { id: 'B', text: "Store customer IDs in custom blob metadata and write code to iterate and read metadata on every blob." },
      { id: 'C', text: "Create a separate blob container for every individual customer ID in the system." },
      { id: 'D', text: "Append customer IDs into the binary image content of the PDF files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API. Blob Index Tags categorize data in your storage account using key-value tag attributes. Azure automatically indexes these tags and exposes a multi-dimensional search index, allowing applications to discover blobs instantly using the `Find Blobs by Tags` API without listing entire containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Azure Storage", "Blob Storage", "Hybrid Migration"]
  },
  {
    id: "azure-az204-350",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata and Tags: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Storage to tag millions of PDF files stored in Azure Blob Storage with customer IDs and document categories so they can be queried and filtered without scanning containers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Blob index tags vs blob metadata for queryable search is under consideration.",
    options: [
      { id: 'A', text: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API." },
      { id: 'B', text: "Store customer IDs in custom blob metadata and write code to iterate and read metadata on every blob." },
      { id: 'C', text: "Create a separate blob container for every individual customer ID in the system." },
      { id: 'D', text: "Append customer IDs into the binary image content of the PDF files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Blob Index Tags (key-value attributes) and query blobs using Find Blobs by Tags API. Blob Index Tags categorize data in your storage account using key-value tag attributes. Azure automatically indexes these tags and exposes a multi-dimensional search index, allowing applications to discover blobs instantly using the `Find Blobs by Tags` API without listing entire containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Azure Storage", "Blob Storage", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_14;
