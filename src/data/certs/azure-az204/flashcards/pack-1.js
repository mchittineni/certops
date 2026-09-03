export const AZURE_AZ204_FLASHCARDS_1 = [
  {
    id: "azure-az204-fc-1",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Deployment Slot Swapping",
    hint: "Zero-downtime release mechanism.",
    back: "Slot swaps change <strong>routing rules at the load balancer level</strong> without dropping connections, ensuring zero downtime after warming up the target worker processes.",
    tags: ["App Service", "Deployment Slots", "Zero Downtime"]
  },
  {
    id: "azure-az204-fc-2",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Sticky Slot Settings",
    hint: "Pinning settings to specific slots.",
    back: "Marking a setting as a <strong>Deployment slot setting</strong> ensures it sticks to its current slot (e.g. staging DB connection) rather than swapping into production.",
    tags: ["App Service", "Slot Settings", "Sticky Settings"]
  },
  {
    id: "azure-az204-fc-3",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Regional VNet Integration",
    hint: "Outbound private network routing.",
    back: "<strong>Regional VNet Integration</strong> connects an App Service to a delegated subnet, allowing outbound calls to resolve <strong>Private Endpoints</strong> inside the virtual network.",
    tags: ["App Service", "VNet Integration", "Networking"]
  },
  {
    id: "azure-az204-fc-4",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Queue-Based Autoscaling",
    hint: "Scaling compute against message backlogs.",
    back: "Autoscale rules can monitor external resource metrics like <strong>Service Bus ActiveMessageCount</strong> to scale App Service instances out when queue backlogs accumulate.",
    tags: ["App Service", "Autoscale", "Service Bus"]
  },
  {
    id: "azure-az204-fc-5",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Premium Plan",
    hint: "Eliminating cold starts and enabling VNet.",
    back: "The <strong>Premium Plan</strong> provides <strong>pre-warmed instances</strong> (no cold starts), <strong>VNet integration</strong>, and high-performance compute with elastic autoscaling.",
    tags: ["Azure Functions", "Premium Plan", "Cold Starts"]
  },
  {
    id: "azure-az204-fc-6",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Triggers vs. Bindings",
    hint: "Declarative serverless event contracts.",
    back: "A function has <strong>exactly one Trigger</strong> that invokes execution (e.g. Cosmos DB Change Feed) and can have zero or more <strong>Input/Output Bindings</strong> to read/write external data.",
    tags: ["Azure Functions", "Triggers", "Bindings"]
  },
  {
    id: "azure-az204-fc-7",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Determinism Constraints",
    hint: "Rules for orchestrator replays.",
    back: "Orchestrator functions must be <strong>deterministic</strong>: no random numbers, no current timestamps (<code>DateTime.UtcNow</code>), and no direct I/O. Use <code>context.CurrentUtcDateTime</code> and Activity functions instead.",
    tags: ["Durable Functions", "Orchestrator", "Determinism"]
  },
  {
    id: "azure-az204-fc-8",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Fan-out / Fan-in",
    hint: "Parallel execution and synchronization.",
    back: "In <strong>Fan-out / Fan-in</strong>, an orchestrator launches multiple Activity tasks concurrently and aggregates their results using <code>Task.WhenAll</code> before continuing.",
    tags: ["Durable Functions", "Fan-out/Fan-in", "Concurrency"]
  },
  {
    id: "azure-az204-fc-9",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Human Approval Pattern",
    hint: "Handling long-running external events.",
    back: "Combines <strong>WaitForExternalEvent</strong> and <strong>CreateTimer</strong> via <code>Task.WhenAny</code> to pause workflows until human input arrives or a durable SLA timeout expires.",
    tags: ["Durable Functions", "External Events", "Human Approval"]
  },
  {
    id: "azure-az204-fc-10",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: Restart Policies",
    hint: "Controlling container lifecycle on exit.",
    back: "ACI supports 3 restart policies: <strong>Always</strong> (web servers), <strong>Never</strong> (run-once tasks), and <strong>OnFailure</strong> (batch jobs that stop on code 0 and retry on errors).",
    tags: ["ACI", "Restart Policy", "Batch Processing"]
  },
  {
    id: "azure-az204-fc-11",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: Secure Environment Variables",
    hint: "Hiding secrets in container definitions.",
    back: "Using <strong>secureValue</strong> for environment variables prevents credentials from showing in ARM template outputs, CLI inspect commands, or the Azure portal UI.",
    tags: ["ACI", "Secure Environment Variables", "Security"]
  },
  {
    id: "azure-az204-fc-12",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: Azure Files Volume Mount",
    hint: "Persistent storage for container instances.",
    back: "ACI supports mounting <strong>Azure Files shares</strong> as container volumes over SMB, providing persistent state that survives container restarts.",
    tags: ["ACI", "Azure Files", "Persistent Storage"]
  },
  {
    id: "azure-az204-fc-13",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Container Apps: KEDA Autoscaling",
    hint: "Event-driven serverless container scaling.",
    back: "Azure Container Apps uses built-in <strong>KEDA</strong> to scale containers dynamically based on queue depth, HTTP requests, or external events, including <strong>scale to zero</strong>.",
    tags: ["Container Apps", "KEDA", "Scale to Zero"]
  },
  {
    id: "azure-az204-fc-14",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Traffic Splitting",
    hint: "Canary testing across container revisions.",
    back: "In <strong>Multiple revision mode</strong>, Container Apps allows developers to split traffic percentages (e.g. 85% / 15%) across multiple active revisions for canary releases.",
    tags: ["Container Apps", "Revisions", "Traffic Splitting"]
  },
  {
    id: "azure-az204-fc-15",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Dapr Integration",
    hint: "Managed microservices building blocks.",
    back: "Azure Container Apps natively integrates <strong>Dapr sidecars</strong>, providing service invocation, state management, pub/sub, and automatic mTLS out of the box.",
    tags: ["Container Apps", "Dapr", "Microservices"]
  },
  {
    id: "azure-az204-fc-16",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Poison Blob Handling",
    hint: "Dead-lettering for failed blob executions.",
    back: "Repeatedly failing Blob triggers write metadata to the <strong>webjobs-blobtrigger-poison</strong> queue after reaching the max retry threshold.",
    tags: ["Azure Functions", "Blob Trigger", "Poison Blobs"]
  },
  {
    id: "azure-az204-fc-17",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Consumption Plan Timeout",
    hint: "Host execution limits.",
    back: "Consumption plan functions have a default <strong>5-minute timeout</strong> and a maximum configurable limit of <strong>10 minutes</strong> in <code>host.json</code>.",
    tags: ["Azure Functions", "host.json", "Timeout"]
  },
  {
    id: "azure-az204-fc-18",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Proxies Deprecation",
    hint: "Migrating to Azure API Management.",
    back: "Functions Proxies are deprecated in v4.x; Microsoft recommends <strong>Azure API Management (APIM)</strong> for API gateway routing and transformations.",
    tags: ["Azure Functions", "Proxies", "APIM"]
  },
  {
    id: "azure-az204-fc-19",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Managed Certificates",
    hint: "Zero-cost automated SSL renewal.",
    back: "<strong>App Service Managed Certificates</strong> provide free SSL certificates for custom domains with automated zero-touch renewals.",
    tags: ["App Service", "SSL", "Managed Certificates"]
  },
  {
    id: "azure-az204-fc-20",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service Linux: Startup Command",
    hint: "Executing pre-launch shell scripts.",
    back: "The <strong>Startup Command</strong> in App Service configuration runs custom commands or shell scripts prior to launching the main container application process.",
    tags: ["App Service", "Linux", "Startup Command"]
  },
  {
    id: "azure-az204-fc-21",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Always On",
    hint: "Preventing worker idle unload.",
    back: "Enabling <strong>Always On</strong> prevents IIS/Kestrel from unloading idle worker processes, eliminating cold start latency.",
    tags: ["App Service", "Always On", "Performance"]
  },
  {
    id: "azure-az204-fc-22",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: ARR Affinity",
    hint: "Sticky sessions via load balancer cookies.",
    back: "<strong>ARR Affinity</strong> injects a cookie to bind client sessions to a specific server instance for stateful applications.",
    tags: ["App Service", "ARR Affinity", "Session State"]
  },
  {
    id: "azure-az204-fc-23",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Access Restrictions",
    hint: "Inbound IP and subnet firewalling.",
    back: "<strong>Access Restrictions</strong> filter inbound traffic by IP CIDR or VNet subnet at the front-end load balancer.",
    tags: ["App Service", "Access Restrictions", "Security"]
  },
  {
    id: "azure-az204-fc-24",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Service Bus Topic Trigger",
    hint: "Subscribing to topic events.",
    back: "Service Bus Topic triggers require both <strong>topicName</strong> and <strong>subscriptionName</strong> parameters to listen to topic subscriptions.",
    tags: ["Azure Functions", "Service Bus", "Topic Trigger"]
  },
  {
    id: "azure-az204-fc-25",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Event Hubs Checkpointing",
    hint: "Stream offset persistence in Blob storage.",
    back: "Event Hub triggers store partition checkpoints in <strong>Azure Blob Storage</strong> to resume stream processing accurately after restarts.",
    tags: ["Azure Functions", "Event Hubs", "Checkpointing"]
  }
];

export default AZURE_AZ204_FLASHCARDS_1;
