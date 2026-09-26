export const AZURE_AZ305_FLASHCARDS_15 = [
  {
    id: "azure-az305-fc-351",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Functions hosting options: which one is the default for new serverless apps, and when do the others win?",
    hint: "One is now called legacy.",
    back: "<strong>Flex Consumption</strong>: the default serverless plan; scale to zero, VNet integration, always-ready instances, Linux only. <strong>Premium</strong>: prewarmed instances, Windows or Linux, custom Linux containers, longer or continuous workloads, always at least one instance billed. <strong>Dedicated</strong> (App Service plan): predictable billing, reuse of existing plans, App Service Environment isolation. <strong>Container Apps</strong>: containerised functions beside other microservices, GPU options. <strong>Consumption</strong>: legacy, mainly for Windows-dependent apps; migrate to Flex.",
    tags: ["Azure Functions", "Hosting plans"]
  },
  {
    id: "azure-az305-fc-352",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Flex Consumption plan: what are its distinguishing features and limits?",
    hint: "Per-function scale and a warm baseline you choose.",
    back: "Features: <strong>per-function scaling</strong> (each trigger type scales on its own instances, HTTP triggers together), up to 1,000 instances, <strong>always-ready</strong> instances to cut cold starts, instance memory of <strong>512 MB, 2 GB or 4 GB</strong>, <strong>VNet integration</strong> and private endpoints, pay per execution plus any always-ready baseline. Limits: <strong>Linux only</strong>, code deployments only (no containers), one app per plan and no deployment slots.",
    tags: ["Azure Functions", "Flex Consumption"]
  },
  {
    id: "azure-az305-fc-353",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Why does an HTTP-triggered function fail after about four minutes even with an unbounded timeout?",
    hint: "The limit is in front of the function, not in host.json.",
    back: "Regardless of <code>functionTimeout</code> or plan, an HTTP-triggered function must return a response within <strong>230 seconds</strong>, the idle timeout of the Azure load balancer in front of the app. For longer work, return quickly and finish in the background: use the <strong>Durable Functions async HTTP pattern</strong> (202 Accepted plus a status URL) or put the work on a queue and let a queue-triggered function process it.",
    tags: ["Azure Functions", "HTTP trigger", "Timeouts"]
  },
  {
    id: "azure-az305-fc-354",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Name the Durable Functions application patterns and the problem each solves.",
    hint: "Six classic shapes of stateful workflow.",
    back: "<strong>Function chaining</strong>: run steps in sequence, passing outputs along. <strong>Fan-out/fan-in</strong>: run many activities in parallel, then aggregate. <strong>Async HTTP APIs</strong>: long-running work behind a 202 and status endpoint. <strong>Monitor</strong>: flexible recurring polling until a condition is met. <strong>Human interaction</strong>: wait for an external event, such as an approval, with a durable timer for escalation. <strong>Aggregator</strong>: durable entities that accumulate state from many events.",
    tags: ["Durable Functions", "Patterns"]
  },
  {
    id: "azure-az305-fc-355",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Why must Durable Functions orchestrator code be deterministic, and what does that forbid?",
    hint: "The orchestrator is replayed from history.",
    back: "An orchestrator is <strong>replayed</strong> from its event history every time it wakes, so it must make the same decisions each time. Do not read the current time directly (use the context's current UTC time), generate random numbers or GUIDs outside the context, call I/O, HTTP or databases directly (do it in activities), use threads or blocking waits, or loop forever (use <strong>ContinueAsNew</strong> for eternal orchestrations). Put all non-deterministic work in <strong>activity functions</strong>.",
    tags: ["Durable Functions", "Orchestrators"]
  },
  {
    id: "azure-az305-fc-356",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Logic Apps Consumption vs Standard: what are the deciding differences?",
    hint: "Multitenant per-action billing vs single-tenant hosting.",
    back: "<strong>Consumption</strong>: multitenant, one workflow per logic app resource, billed per action execution, stateful workflows only; quick to start with no infrastructure. <strong>Standard</strong>: single-tenant, runs on the Functions runtime with a hosting plan, <strong>many workflows per app</strong>, <strong>stateful and stateless</strong> workflows, <strong>VNet integration and private endpoints</strong>, built-in connectors that run in-process, and local development in VS Code. Private networking or high throughput usually means Standard.",
    tags: ["Logic Apps", "Standard", "Consumption"]
  },
  {
    id: "azure-az305-fc-357",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Functions vs Azure Logic Apps: how do you choose between them for an integration task?",
    hint: "Code-first or designer-first.",
    back: "<strong>Logic Apps</strong> is <strong>designer-first</strong> orchestration with hundreds of prebuilt connectors (SaaS, SAP, EDI, Office 365), suited to integration workflows that analysts or integration teams maintain. <strong>Functions</strong> is <strong>code-first</strong>: custom logic in C#, Python, JavaScript and others, triggered by events, with full control over the code and its testing. They combine well: a Logic App can call a function for complex logic, and Durable Functions covers code-first orchestration.",
    tags: ["Azure Functions", "Logic Apps"]
  },
  {
    id: "azure-az305-fc-358",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Functions triggers vs bindings: what is the difference?",
    hint: "One starts the function; the others move data in and out.",
    back: "A <strong>trigger</strong> defines how a function is invoked, and every function has exactly one: HTTP, timer, queue, Service Bus, Event Hubs, Event Grid, blob, Cosmos DB change feed and others. <strong>Bindings</strong> declaratively connect the function to data: <strong>input bindings</strong> read from a service and <strong>output bindings</strong> write to one, without writing SDK connection code. A function can have several input and output bindings.",
    tags: ["Azure Functions", "Triggers", "Bindings"]
  },
  {
    id: "azure-az305-fc-359",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Batch building blocks: account, pool, node, job and task. What is each?",
    hint: "From the container of everything down to one command.",
    back: "The <strong>Batch account</strong> holds everything and has quotas. A <strong>pool</strong> is a set of compute <strong>nodes</strong> (VMs) of one size and image, dedicated or Spot, fixed or autoscaled. A <strong>job</strong> is a collection of tasks that runs on one pool. A <strong>task</strong> is a unit of computation, typically a command line, that Batch schedules onto a node, retries on failure and whose output you collect, usually to Azure Storage.",
    tags: ["Azure Batch", "Concepts"]
  },
  {
    id: "azure-az305-fc-360",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Batch pool allocation modes: Batch service vs user subscription. When do you need user subscription mode?",
    hint: "Whose subscription do the VMs live in?",
    back: "<strong>Batch service</strong> (default): pool VMs are created in Batch-managed subscriptions and count against the Batch account's quotas; simplest to run. <strong>User subscription</strong>: VMs are created in <strong>your subscription</strong>, count against your subscription's vCPU quota, and can use <strong>reserved instances</strong> and other subscription-level benefits and policies; it requires the account to be linked to an Azure Key Vault. Choose it when you need those benefits or direct visibility of the VMs.",
    tags: ["Azure Batch", "Pool allocation mode"]
  },
  {
    id: "azure-az305-fc-361",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Batch start task vs job preparation/release tasks vs application packages: when is each used?",
    hint: "Per node, per job, or versioned software.",
    back: "A <strong>start task</strong> runs on every node when it joins the pool or restarts: install software, configure the OS. A <strong>job preparation task</strong> runs on a node before the first task of a job there (download job data); a <strong>job release task</strong> runs when the job ends (clean up). <strong>Application packages</strong> deploy versioned zip files from the Batch account to nodes at pool or task level, letting different jobs use different versions without custom images.",
    tags: ["Azure Batch", "Start task", "Application packages"]
  },
  {
    id: "azure-az305-fc-362",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Batch vs Azure CycleCloud for HPC: which one fits which organisation?",
    hint: "A new scheduler or the one you already have.",
    back: "<strong>Azure Batch</strong> is a platform service with its own scheduler and API: you submit jobs and tasks and Batch manages pools; ideal for new, cloud-native parallel workloads. <strong>Azure CycleCloud</strong> deploys and autoscales clusters that run <strong>traditional HPC schedulers</strong> such as Slurm, PBS Pro or LSF, so existing scripts and user workflows carry over; ideal for extending or moving an on-premises HPC cluster.",
    tags: ["Azure Batch", "Azure CycleCloud", "HPC"]
  },
  {
    id: "azure-az305-fc-363",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "What does a Batch pool autoscale formula work with, and how often is it evaluated?",
    hint: "Service-defined variables in, target counts out.",
    back: "The formula reads service-defined variables such as <code>$PendingTasks</code>, <code>$ActiveTasks</code>, <code>$RunningTasks</code>, CPU metrics and <code>$PreemptedNodeCount</code>, and sets <code>$TargetDedicatedNodes</code> and <code>$TargetLowPriorityNodes</code> (Spot), plus <code>$NodeDeallocationOption</code> to control what happens to running tasks on scale-in (requeue, terminate, taskcompletion, retaineddata). It is evaluated on an interval of at least <strong>5 minutes</strong>, so scaling is not instant.",
    tags: ["Azure Batch", "Autoscale"]
  },
  {
    id: "azure-az305-fc-364",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Container Apps jobs: what trigger types exist and when do you use a job instead of an app?",
    hint: "Run to completion, not run forever.",
    back: "A <strong>job</strong> runs containers that start, do finite work and exit, whereas an <strong>app</strong> serves continuously. Trigger types: <strong>manual</strong> (on demand via API or CLI), <strong>schedule</strong> (cron expression) and <strong>event</strong> (KEDA scale rules, for example one execution per queue message, scaling to zero). Use jobs for batch processing, data imports, scheduled maintenance and per-message processing that should not hold replicas running.",
    tags: ["Container Apps", "Jobs"]
  },
  {
    id: "azure-az305-fc-365",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Azure Queue Storage vs Service Bus queues: which requirements point to each?",
    hint: "Simple and huge, or rich broker features.",
    back: "<strong>Queue Storage</strong>: simple, cheap, part of a storage account, queues that can exceed <strong>80 GB</strong>, 64 KB messages, at-least-once delivery, progress tracking and server-side logs. <strong>Service Bus queues</strong>: FIFO through <strong>sessions</strong>, <strong>duplicate detection</strong>, <strong>transactions</strong>, dead-lettering, scheduled messages, topics for publish-subscribe, AMQP and larger messages (256 KB Standard, 100 MB Premium). Choose Service Bus as soon as ordering or transactional guarantees appear.",
    tags: ["Queue Storage", "Service Bus"]
  },
  {
    id: "azure-az305-fc-366",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Service Bus Basic vs Standard vs Premium: what does each tier add?",
    hint: "Queues only, then shared features, then dedicated resources.",
    back: "<strong>Basic</strong>: queues only, no topics, sessions, transactions or duplicate detection. <strong>Standard</strong>: adds <strong>topics and subscriptions</strong>, sessions, transactions, duplicate detection and auto-forwarding on shared, multitenant capacity with 256 KB messages. <strong>Premium</strong>: <strong>dedicated messaging units</strong> for predictable performance, messages up to <strong>100 MB</strong>, <strong>private endpoints and VNet</strong> integration, customer-managed keys and <strong>geo-disaster recovery</strong>.",
    tags: ["Service Bus", "Tiers"]
  },
  {
    id: "azure-az305-fc-367",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Service Bus peek-lock vs receive-and-delete: what happens if the consumer crashes?",
    hint: "Is the message removed before or after processing?",
    back: "<strong>Receive-and-delete</strong> removes the message as soon as it is delivered, so a crash during processing <strong>loses</strong> it (at-most-once). <strong>Peek-lock</strong> locks the message for a lock duration; the consumer then <strong>completes</strong>, abandons, defers or dead-letters it, and if it crashes the lock expires and the message is <strong>redelivered</strong> (at-least-once). Use peek-lock for anything that must not be lost, with idempotent processing.",
    tags: ["Service Bus", "Receive modes"]
  },
  {
    id: "azure-az305-fc-368",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "What do Service Bus message sessions guarantee?",
    hint: "Order and exclusivity within a group.",
    back: "Messages with the same <strong>session ID</strong> are delivered <strong>in order</strong>, and a session is <strong>locked to one receiver</strong> at a time, so a group such as one customer's orders is processed sequentially while other sessions are handled in parallel by other receivers. Sessions must be enabled when the queue or subscription is created, every message then needs a session ID, and session state can store workflow progress. This is how Service Bus provides FIFO.",
    tags: ["Service Bus", "Sessions"]
  },
  {
    id: "azure-az305-fc-369",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "Why do messages end up in a Service Bus dead-letter queue?",
    hint: "The broker's reasons and the application's.",
    back: "The broker moves a message to the <strong>dead-letter subqueue</strong> when it exceeds the <strong>maximum delivery count</strong> (default 10), when its <strong>time to live expires</strong> and dead-lettering on expiration is enabled, when a subscription's <strong>filter evaluation fails</strong>, or when headers are too large. Applications can also dead-letter a message explicitly with a reason. Dead-lettered messages never expire on their own; monitor the count and process or resubmit them.",
    tags: ["Service Bus", "Dead-letter queue"]
  },
  {
    id: "azure-az305-fc-370",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Service Bus subscription filters: SQL vs correlation vs boolean. Which should you prefer?",
    hint: "Flexibility against evaluation cost.",
    back: "<strong>SQL filters</strong> evaluate a SQL-like expression over message properties, flexible but the most expensive to evaluate, and can be paired with <strong>actions</strong> that modify properties. <strong>Correlation filters</strong> match on equality of system or user properties (such as <code>subject</code> or a custom property) and are far more efficient, so prefer them when equality is enough. <strong>Boolean filters</strong> (<code>TrueFilter</code>, the default, and <code>FalseFilter</code>) accept all or nothing.",
    tags: ["Service Bus", "Topics", "Filters"]
  },
  {
    id: "azure-az305-fc-371",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Service Bus geo-disaster recovery: what does it replicate, and what does it not?",
    hint: "The alias moves; the messages don't.",
    back: "Geo-disaster recovery (Premium) pairs a primary and secondary namespace behind an <strong>alias</strong> connection string and continuously replicates <strong>metadata</strong>: queues, topics, subscriptions, filters and settings. It does <strong>not</strong> replicate messages, so messages in the primary are unavailable after failover until it recovers. Failover is customer-initiated and one-way; pairing must then be recreated. The separate Geo-Replication feature is the option that also replicates message data.",
    tags: ["Service Bus", "Geo-disaster recovery"]
  },
  {
    id: "azure-az305-fc-372",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "What is the claim-check pattern and when does a messaging design need it?",
    hint: "Send the ticket, not the luggage.",
    back: "Store the large payload in external storage such as Blob Storage and send only a <strong>reference</strong> (the claim check) through the message broker; the consumer fetches the payload with the reference. Use it when payloads exceed the broker's limits (64 KB Queue Storage, 256 KB Service Bus Standard, 1 MB Event Grid) or to keep the broker fast and cheap. Service Bus Premium's 100 MB messages avoid it only when the producer cannot change.",
    tags: ["Messaging patterns", "Claim-check"]
  },
  {
    id: "azure-az305-fc-373",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d4",
    front: "Queue-based load leveling and competing consumers: what does each pattern solve?",
    hint: "Smooth the spikes; share the work.",
    back: "<strong>Queue-based load leveling</strong> puts a durable queue between a producer and a service so bursts are buffered and the service processes at a steady, sustainable rate without being overwhelmed or losing requests. <strong>Competing consumers</strong> run several workers reading the same queue so throughput scales out and a failed worker does not stop processing. Together they decouple tiers and let each scale independently.",
    tags: ["Messaging patterns", "Load leveling"]
  },
  {
    id: "azure-az305-fc-374",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d4",
    front: "What does Service Bus auto-forwarding do, and what is it useful for?",
    hint: "Chaining entities inside a namespace.",
    back: "Auto-forwarding automatically moves messages from a queue or subscription to another queue or topic in the <strong>same namespace</strong>. Uses: <strong>fan-in</strong> many subscriptions into one queue for a single processor, <strong>scale out</strong> topics by chaining them, or decouple senders from receivers so receivers can be reorganised. The source entity cannot be read by receivers while forwarding is on, and forwarding does not run application logic.",
    tags: ["Service Bus", "Auto-forwarding"]
  },
  {
    id: "azure-az305-fc-375",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d4",
    front: "Service Bus duplicate detection: how does it decide a message is a duplicate, and what window applies?",
    hint: "The sender controls one property.",
    back: "When enabled on a queue or topic (at creation), the broker records each <strong>MessageId</strong> for the <strong>duplicate detection history window</strong>, configurable from <strong>20 seconds to 7 days</strong> (default 10 minutes), and silently drops any later message with the same ID within that window. The sender must set a deterministic MessageId, such as the order number, rather than a random GUID. Longer windows cost throughput, so size the window to the retry period.",
    tags: ["Service Bus", "Duplicate detection"]
  }
];

export default AZURE_AZ305_FLASHCARDS_15;
