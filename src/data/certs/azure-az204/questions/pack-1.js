export const AZURE_AZ204_QUESTIONS_1 = [
  {
    id: "azure-az204-1",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Deployment Slots Swap",
    scenario: "A development team deploys an updated ASP.NET Core web application to an Azure App Service deployment slot named staging. After validating the staging slot, the team initiates a slot swap to production.",
    question: "What happens to network traffic and the host processes during an Azure App Service deployment slot swap?",
    options: [
      { id: 'A', text: "The production instance is terminated and restarted with a new virtual IP address" },
      { id: 'B', text: "Traffic redirection is instantaneous with zero downtime because routing rules are swapped at the front-end load balancer after the target worker processes are warmed up" },
      { id: 'C', text: "DNS records must be updated manually with a 24-hour TTL propagation delay" },
      { id: 'D', text: "The staging slot content is permanently deleted and reprovisioned" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure App Service deployment slot swaps redirect traffic seamlessly by swapping virtual IP routing rules on the front-end load balancer. Before the swap completes, App Service warms up the staging worker processes against production configuration, guaranteeing zero downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["App Service", "Deployment Slots", "Zero Downtime"]
  },
  {
    id: "azure-az204-2",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Deployment Slot Settings (Sticky Settings)",
    scenario: "A developer configures database connection strings for an App Service with production and staging slots. The staging slot must connect to the staging database even after a slot swap.",
    question: "Which App Service configuration prevents an app setting or connection string from swapping across slots?",
    options: [
      { id: 'A', text: "Mark the configuration setting as a Deployment slot setting (Sticky setting)" },
      { id: 'B', text: "Hardcode the staging database credentials in appsettings.json" },
      { id: 'C', text: "Store the connection string in an unencrypted Blob storage container" },
      { id: 'D', text: "Disable deployment slot swaps on the App Service Plan" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When an app setting or connection string is designated as a 'Deployment slot setting' (sticky setting), Azure App Service pins the setting to that specific slot. When a slot swap occurs, sticky settings remain with their respective slot rather than moving with the application code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#which-settings-are-swapped",
    tags: ["App Service", "Slot Settings", "Sticky Settings"]
  },
  {
    id: "azure-az204-3",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Regional VNet Integration",
    scenario: "A web app in Azure App Service needs to securely query an Azure SQL Database that has a Private Endpoint inside an Azure Virtual Network without routing traffic across the public internet.",
    question: "Which App Service networking feature enables outbound traffic from the web app into a private subnet?",
    options: [
      { id: 'A', text: "App Service Access Restrictions alone" },
      { id: 'B', text: "Azure ExpressRoute Gateway" },
      { id: 'C', text: "Hybrid Connections" },
      { id: 'D', text: "Regional VNet Integration" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Regional VNet Integration connects an App Service app to a dedicated delegated subnet in an Azure Virtual Network. Outbound traffic from the App Service routes privately across the VNet, enabling secure access to private endpoints, Azure SQL, and private VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-vnet-integration",
    tags: ["App Service", "VNet Integration", "Networking"]
  },
  {
    id: "azure-az204-4",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Autoscale Rules Based on Queue Depth",
    scenario: "A background worker web app on App Service processes customer orders from an Azure Service Bus queue. During flash sales, order volume surges and queue length grows.",
    question: "Which metric source and scale rule should the developer configure to scale App Service instances out?",
    options: [
      { id: 'A', text: "Azure Monitor Autoscale metric rule targeting the Service Bus queue ActiveMessageCount metric" },
      { id: 'B', text: "Scale up the App Service Plan tier manually each morning" },
      { id: 'C', text: "Scale out based on App Service CPU Percentage only" },
      { id: 'D', text: "Scale out based on HTTP 404 response counts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Monitor Autoscale supports scaling App Service Plans based on metrics from external resources, such as an Azure Service Bus queue. Configuring an autoscale rule based on `ActiveMessageCount` (e.g. scale out if messages > 1,000) adjusts capacity directly to processing backlog.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-best-practices",
    tags: ["App Service", "Autoscale", "Service Bus"]
  },
  {
    id: "azure-az204-5",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Consumption Plan vs Premium Plan",
    scenario: "An enterprise API built with Azure Functions experiences high latency on initial requests due to cold starts, and must also connect outbound into an internal corporate VNet.",
    question: "Which Azure Functions hosting plan eliminates cold starts with pre-warmed instances and provides native VNet integration?",
    options: [
      { id: 'A', text: "Azure Functions Premium Plan (Elastic Premium)" },
      { id: 'B', text: "Azure Functions Consumption Plan" },
      { id: 'C', text: "Azure Functions Dedicated Basic Tier" },
      { id: 'D', text: "Azure Container Instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold starts, dynamic elastic scaling, native virtual network integration, and extended execution durations (default 30 minutes, configurable up to unbounded). Consumption plans suffer cold starts and lack VNet connectivity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Premium Plan", "Cold Starts"]
  },
  {
    id: "azure-az204-6",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Triggers vs Input/Output Bindings",
    scenario: "A developer writes an Azure Function that runs whenever a new document is inserted into Azure Cosmos DB and writes a summary message into an Azure Queue Storage queue.",
    question: "Which combination of triggers and bindings describes this function architecture?",
    options: [
      { id: 'A', text: "Queue Storage Trigger with a Cosmos DB Output Binding" },
      { id: 'B', text: "Cosmos DB Trigger with a Queue Storage Output Binding" },
      { id: 'C', text: "Timer Trigger with manual SDK connections" },
      { id: 'D', text: "Cosmos DB Input Binding with an HTTP Trigger" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Azure Functions, a `Trigger` defines how a function is invoked (exactly one trigger per function, here the `Cosmos DB Trigger` using the Change Feed). An `Output Binding` allows the function to declaratively send data to another service (here `Queue Storage Output Binding`) without boilerplate SDK client code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
    tags: ["Azure Functions", "Triggers", "Bindings"]
  },
  {
    id: "azure-az204-7",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Orchestrator Function Determinism Rules",
    scenario: "A developer builds an order fulfillment workflow using Azure Durable Functions. The workflow fails with non-deterministic execution errors during replay.",
    question: "Which coding practice violates the determinism constraints of an Azure Durable Functions orchestrator function?",
    options: [
      { id: 'A', text: "Awaiting other sub-orchestrators" },
      { id: 'B', text: "Creating timers using CreateTimer" },
      { id: 'C', text: "Calling activity functions using CallActivityAsync" },
      { id: 'D', text: "Generating random GUIDs or calling DateTime.UtcNow directly inside the orchestrator function code" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Durable Functions orchestrators must be strictly deterministic because they replay execution history to rebuild state. Orchestrators must never generate random numbers/GUIDs, call current time APIs (`DateTime.UtcNow`), read environment variables, or make direct network calls. Deterministic context methods (e.g. `context.CurrentUtcDateTime`) must be used instead.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-code-constraints",
    tags: ["Durable Functions", "Orchestrator", "Determinism"]
  },
  {
    id: "azure-az204-8",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Application Patterns: Fan-out / Fan-in",
    scenario: "An image processing workflow needs to split a batch of 100 images, process each image concurrently across multiple serverless activity functions, and then aggregate the results into a single report.",
    question: "Which Durable Functions pattern coordinates concurrent parallel execution and subsequent synchronization?",
    options: [
      { id: 'A', text: "Fan-out / Fan-in pattern using Task.WhenAll" },
      { id: 'B', text: "Function Chaining pattern" },
      { id: 'C', text: "Async HTTP APIs pattern" },
      { id: 'D', text: "Human Interaction pattern" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Fan-out / Fan-in` pattern executes multiple activity functions in parallel (fan-out) and awaits completion of all tasks using `Task.WhenAll` (in C#) or `Promise.all` (in JavaScript) to aggregate results (fan-in) before proceeding to downstream workflow steps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp#fan-in-out",
    tags: ["Durable Functions", "Fan-out/Fan-in", "Concurrency"]
  },
  {
    id: "azure-az204-9",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction & External Events",
    scenario: "A financial loan approval workflow requires human approval from a loan officer. If approval is not received within 72 hours, the application must automatically cancel.",
    question: "Which Durable Functions API waits for an external approval event or a timeout timer?",
    options: [
      { id: 'A', text: "context.WaitForExternalEvent paired with context.CreateTimer and Task.WhenAny" },
      { id: 'B', text: "Thread.Sleep for 72 hours" },
      { id: 'C', text: "A standard HTTP Webhook with an infinite timeout" },
      { id: 'D', text: "A continuous while loop querying Azure SQL" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Durable Functions `Human Interaction` pattern combines `WaitForExternalEvent` (which pauses the orchestrator until an external approval event is raised via API) with `CreateTimer` (durable timer) using `Task.WhenAny`. Whichever task finishes first determines the approval or cancellation branch.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp#human-approval",
    tags: ["Durable Functions", "External Events", "Human Approval"]
  },
  {
    id: "azure-az204-10",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Restart Policies",
    scenario: "A developer runs a short-lived data migration batch job on Azure Container Instances (ACI). The container must execute a database migration script and stop, without restarting when the script exits with status code 0.",
    question: "Which restart policy should the developer configure for the ACI container group?",
    options: [
      { id: 'A', text: "Always" },
      { id: 'B', text: "OnFailure" },
      { id: 'C', text: "Never" },
      { id: 'D', text: "Default" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Container Instances supports three restart policies: `Always` (restarts on any exit), `Never` (never restarts), and `OnFailure` (restarts only if the container process crashes or exits with a non-zero exit code). For batch jobs, `OnFailure` ensures successful runs stop cleanly while failures are retried.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["ACI", "Restart Policy", "Batch Processing"]
  },
  {
    id: "azure-az204-11",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Secure Environment Variables",
    scenario: "A container running in Azure Container Instances requires a database password. The password must be passed to the container environment at startup but must never be visible in the Azure portal or in deployment template JSON outputs.",
    question: "Which ACI configuration protects sensitive environment variable values?",
    options: [
      { id: 'A', text: "Passing passwords in the container command arguments" },
      { id: 'B', text: "Hardcoding the password in the container Dockerfile" },
      { id: 'C', text: "Secure Environment Variables (secureValue property)" },
      { id: 'D', text: "Standard environment variables in the pod YAML" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ACI supports `secureValue` environment variables. When a variable is defined with `secureValue`, Azure secures the value in transit and at rest, injects it into the container runtime, and hides the value from `GET` API queries, Azure CLI inspect commands, and the Azure Portal.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["ACI", "Secure Environment Variables", "Security"]
  },
  {
    id: "azure-az204-12",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Volume Mounts with Azure Files",
    scenario: "An application running on Azure Container Instances needs persistent file storage shared across multiple restarts and container instances.",
    question: "Which Azure storage service can be mounted directly as a volume inside an ACI container?",
    options: [
      { id: 'A', text: "Azure Queue Storage" },
      { id: 'B', text: "Azure Files file share mounted via SMB" },
      { id: 'C', text: "Azure Table Storage" },
      { id: 'D', text: "Azure Blob Storage container via NFS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Container Instances supports mounting persistent volumes backed by Azure Files shares over the SMB protocol. The container accesses the files as a standard local directory path, and data persists independently of container instance lifecycles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["ACI", "Azure Files", "Persistent Storage"]
  },
  {
    id: "azure-az204-13",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) KEDA Autoscaling",
    scenario: "A microservice running on Azure Container Apps processes messages from an Azure Service Bus queue. The service must scale down to zero replicas when the queue is empty and scale out rapidly as messages arrive.",
    question: "Which autoscaling engine is built into Azure Container Apps to support event-driven scaling to zero?",
    options: [
      { id: 'A', text: "Kubernetes Event-driven Autoscaling (KEDA)" },
      { id: 'B', text: "Azure Virtual Machine Scale Sets autoscale" },
      { id: 'C', text: "Kubernetes Horizontal Pod Autoscaler CPU only" },
      { id: 'D', text: "App Service Autoscale rules" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps natively integrates KEDA (Kubernetes Event-driven Autoscaling). KEDA allows container apps to scale dynamically based on a wide variety of event triggers (e.g. Service Bus queue depth, Kafka topics, HTTP traffic) and supports scaling completely to zero instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
    tags: ["Container Apps", "KEDA", "Scale to Zero"]
  },
  {
    id: "azure-az204-14",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Traffic Splitting Across Revisions",
    scenario: "A team deploys a new revision of a microservice on Azure Container Apps. The team wants to test the revision by routing 15% of public HTTP traffic to the new revision while keeping 85% on the previous revision.",
    question: "Which Container Apps feature facilitates percentage-based traffic distribution across active revisions?",
    options: [
      { id: 'A', text: "App Service Slot Swap" },
      { id: 'B', text: "DNS round-robin records" },
      { id: 'C', text: "Traffic Splitting rules in Multiple revision mode" },
      { id: 'D', text: "Azure Traffic Manager routing profile" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When an Azure Container App is configured in `Multiple revision mode`, developers can define `Traffic Splitting` rules. You can assign specific percentages of incoming HTTP traffic (e.g. 85% to revision 1, 15% to revision 2) to validate canary deployments smoothly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
    tags: ["Container Apps", "Revisions", "Traffic Splitting"]
  },
  {
    id: "azure-az204-15",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Microservice Communication with Dapr",
    scenario: "A developer designs a distributed microservices system on Azure Container Apps. Microservices need service-to-service discovery, automatic mutual TLS (mTLS), and distributed tracing without embedding vendor SDKs.",
    question: "Which distributed application runtime is integrated natively into Azure Container Apps as an opt-in sidecar?",
    options: [
      { id: 'A', text: "Distributed Application Runtime (Dapr)" },
      { id: 'B', text: "Apache ZooKeeper" },
      { id: 'C', text: "Spring Cloud Gateway" },
      { id: 'D', text: "Istio Service Mesh alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps natively integrates Dapr (Distributed Application Runtime) as an optional managed sidecar. Dapr provides standardized building blocks for service-to-service invocation, state management, pub/sub messaging, secret management, and distributed tracing with automatic mTLS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/dapr-overview",
    tags: ["Container Apps", "Dapr", "Microservices"]
  },
  {
    id: "azure-az204-16",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Blob Trigger Poison Blob Handling",
    scenario: "An Azure Function with a Blob trigger fails repeatedly when processing a corrupted image file.",
    question: "Where does Azure Functions move the failure notification metadata after reaching maxDequeueCount?",
    options: [
      { id: 'A', text: "The root container" },
      { id: 'B', text: "The Azure Recycle Bin" },
      { id: 'C', text: "A poison queue named webjobs-blobtrigger-poison in the default storage account" },
      { id: 'D', text: "A Dead Letter Queue in Service Bus" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When an Azure Functions Blob trigger fails repeatedly and reaches `maxDequeueCount`, the WebJobs SDK moves a notification message describing the failure to a poison queue named `webjobs-blobtrigger-poison` for investigation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger#poison-blobs",
    tags: ["Azure Functions", "Blob Trigger", "Poison Blobs"]
  },
  {
    id: "azure-az204-17",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Host.json Function Timeout Configuration",
    scenario: "A developer runs a long data cleanup job on an Azure Functions Consumption plan. The function terminates abruptly after 5 minutes.",
    question: "What is the maximum configurable execution duration for an Azure Function running on a Consumption plan?",
    options: [
      { id: 'A', text: "10 minutes (configured via functionTimeout in host.json)" },
      { id: 'B', text: "5 minutes hard limit" },
      { id: 'C', text: "Unlimited" },
      { id: 'D', text: "30 minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On the Azure Functions Consumption plan, the default timeout is 5 minutes, and the maximum configurable execution timeout is 10 minutes (set via `functionTimeout: '00:10:00'` in `host.json`). Premium and Dedicated plans support longer or unbounded durations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json#functiontimeout",
    tags: ["Azure Functions", "host.json", "Timeout"]
  },
  {
    id: "azure-az204-18",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Proxies and Migration to API Management",
    scenario: "A legacy serverless project uses Azure Functions Proxies to mock API responses. The team is upgrading to Azure Functions runtime version 4.x.",
    question: "Which service is recommended by Microsoft to replace deprecated Functions Proxies for advanced routing and mocking?",
    options: [
      { id: 'A', text: "Azure Application Gateway alone" },
      { id: 'B', text: "Azure API Management (APIM)" },
      { id: 'C', text: "App Service hybrid connections" },
      { id: 'D', text: "Azure Front Door alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Functions Proxies are deprecated in Azure Functions v4.x. Microsoft recommends migrating to Azure API Management (APIM) for API routing, mocking, transformations, rate limiting, and security policies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/legacy-proxies",
    tags: ["Azure Functions", "Proxies", "APIM"]
  },
  {
    id: "azure-az204-19",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Managed Certificate (Free SSL)",
    scenario: "A developer binds a custom domain `api.contoso.com` to an App Service and needs an SSL/TLS certificate that automatically renews at zero financial cost.",
    question: "Which feature provides free, automated SSL certificates for App Service custom domains?",
    options: [
      { id: 'A', text: "Self-signed certificate uploaded to Key Vault" },
      { id: 'B', text: "App Service Certificate purchased via GoDaddy" },
      { id: 'C', text: "App Service Managed Certificate (ASMC)" },
      { id: 'D', text: "Let's Encrypt manual cron script" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "App Service Managed Certificates provide free, fully managed TLS/SSL certificates for custom domains. Azure automatically binds and renews the certificate before expiration, provided the domain has a valid CNAME record pointing to the App Service.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate#create-a-free-managed-certificate",
    tags: ["App Service", "SSL", "Managed Certificates"]
  },
  {
    id: "azure-az204-20",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Custom Startup Script on Linux Containers",
    scenario: "A developer deploys a custom container to Azure App Service for Linux. The application requires a custom startup shell script to run before the main process launches.",
    question: "Which configuration setting specifies the custom startup script or command in App Service?",
    options: [
      { id: 'A', text: "Startup Command in General Settings (or startup-file in Azure CLI)" },
      { id: 'B', text: "Entrypoint Dockerfile argument only" },
      { id: 'C', text: "Linux crontab schedule" },
      { id: 'D', text: "Azure Automation Runbook" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure App Service for Linux and custom containers, the `Startup Command` setting in the portal (or `az webapp config set --startup-file`) executes custom initialization commands or scripts before starting the main container application process.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container#configure-startup-command",
    tags: ["App Service", "Linux", "Startup Command"]
  },
  {
    id: "azure-az204-21",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Always On Feature to Prevent Worker Unloading",
    scenario: "A web app hosted on a Basic App Service Plan experiences cold start delays after 20 minutes of inactivity because IIS shuts down idle worker processes.",
    question: "Which App Service setting keeps the worker process loaded in memory continuously?",
    options: [
      { id: 'A', text: "ARR Affinity setting" },
      { id: 'B', text: "Always On setting in Configuration" },
      { id: 'C', text: "HTTP 2.0 setting" },
      { id: 'D', text: "FTP State Disabled" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `Always On` setting keeps web apps loaded even when there is no traffic, preventing cold starts caused by idle timeouts. It is supported on Basic, Standard, and Premium tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-common#configure-general-settings",
    tags: ["App Service", "Always On", "Performance"]
  },
  {
    id: "azure-az204-22",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service ARR Affinity Cookie for Stateful Sessions",
    scenario: "A stateful web application stores in-memory user session state on the specific VM instance handling the user's initial request.",
    question: "Which App Service feature routes subsequent client requests to the same server instance?",
    options: [
      { id: 'A', text: "ARR Affinity (Application Request Routing Cookie)" },
      { id: 'B', text: "Always On" },
      { id: 'C', text: "Session State Provider" },
      { id: 'D', text: "Client Affinity Token" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Service ARR (Application Request Routing) affinity injects an `ARRAffinity` cookie into client responses, ensuring all subsequent requests from that client browser route to the same VM instance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-common#configure-general-settings",
    tags: ["App Service", "ARR Affinity", "Session State"]
  },
  {
    id: "azure-az204-23",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Access Restrictions for Inbound IP Filtering",
    scenario: "A corporate backend web app must be accessible only from a partner company's office CIDR block (`198.51.100.0/24`).",
    question: "Which App Service networking feature restricts inbound HTTP requests based on IP address or VNet subnet?",
    options: [
      { id: 'A', text: "Access Restrictions" },
      { id: 'B', text: "Hybrid Connections" },
      { id: 'C', text: "Private Link alone" },
      { id: 'D', text: "Service Endpoints without policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Service Access Restrictions evaluate incoming client IP addresses and subnets, enforcing Allow/Deny rules at the front-end load balancer before requests reach the application code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-ip-restrictions",
    tags: ["App Service", "Access Restrictions", "Security"]
  },
  {
    id: "azure-az204-24",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Service Bus Topic Trigger Subscription",
    scenario: "An Azure Function must execute whenever a new message is published to a specific subscription `AuditSub` of an Azure Service Bus topic `Orders`.",
    question: "Which two parameters must be configured in the Service Bus trigger definition?",
    options: [
      { id: 'A', text: "topicName and subscriptionName" },
      { id: 'B', text: "queueName and topicName" },
      { id: 'C', text: "tableName and partitionKey" },
      { id: 'D', text: "eventHubName and consumerGroup" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Bus Topic triggers in Azure Functions require specifying both the `topicName` and the specific `subscriptionName` that the function monitors for incoming messages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger",
    tags: ["Azure Functions", "Service Bus", "Topic Trigger"]
  },
  {
    id: "azure-az204-25",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Event Hub Trigger Checkpointing in Storage",
    scenario: "An Azure Function processes high-volume telemetry streams from Azure Event Hubs. The function must resume from the last processed offset if the host crashes.",
    question: "How does the Event Hubs trigger persist stream checkpoint offsets?",
    options: [
      { id: 'A', text: "In Azure Cache for Redis" },
      { id: 'B', text: "In a local SQLite database on the worker VM" },
      { id: 'C', text: "Using an Azure Blob Storage container configured in AzureWebJobsStorage" },
      { id: 'D', text: "In an in-memory dictionary" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Functions Event Hubs trigger uses an Event Processor Host that writes partition ownership leases and stream checkpoints to an Azure Blob Storage container to ensure seamless resumption upon failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger",
    tags: ["Azure Functions", "Event Hubs", "Checkpointing"]
  }
];

export default AZURE_AZ204_QUESTIONS_1;
