export const AZURE_AZ204_QUESTIONS_2 = [
  {
    id: "azure-az204-26",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Hybrid Connections for On-Premises Relaying",
    scenario: "A web app hosted on Azure App Service needs to query an on-premises Microsoft SQL Server database located behind corporate firewalls without setting up a site-to-site VPN.",
    question: "Which App Service feature facilitates outbound TCP connections to on-premises endpoints via Azure Relay?",
    options: [
      { id: 'A', text: "VNet Peering" },
      { id: 'B', text: "App Service Hybrid Connections" },
      { id: 'C', text: "Azure ExpressRoute" },
      { id: 'D', text: "Private Link" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure App Service Hybrid Connections use Azure Relay to provide secure, outbound-only connectivity over port 443 to on-premises resources (TCP port/host combinations) without requiring inbound firewall openings or a site-to-site VPN.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-hybrid-connections",
    tags: ["App Service", "Hybrid Connections", "On-Premises"]
  },
  {
    id: "azure-az204-27",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Backup and Restore Capabilities",
    scenario: "An operations engineer configures automated backups for an Azure App Service web app and its associated Azure SQL database.",
    question: "What storage destination is required by Azure App Service to store backup zip archives?",
    options: [
      { id: 'A', text: "An Amazon S3 bucket" },
      { id: 'B', text: "A container in an Azure Storage account with a SAS token or managed identity" },
      { id: 'C', text: "An on-premises FTP server" },
      { id: 'D', text: "A Git repository in Azure DevOps" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "App Service backups require an Azure Storage account container and write permissions (via SAS URL or Managed Identity). Backups capture app configurations, file content, and linked databases into a compressed archive.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-backup",
    tags: ["App Service", "Backup", "Disaster Recovery"]
  },
  {
    id: "azure-az204-28",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Health Check Path for Unhealthy Instance Eviction",
    scenario: "An App Service Plan runs 4 instances behind an Azure front-end load balancer. One instance becomes unresponsive due to memory starvation.",
    question: "Which feature instructs the load balancer to remove the failing instance from routing rotation?",
    options: [
      { id: 'A', text: "Enabling ARR Affinity cookies" },
      { id: 'B', text: "Restarting the App Service Plan manually" },
      { id: 'C', text: "Configuring a Health Check path in App Service Monitoring" },
      { id: 'D', text: "Increasing the scaling threshold to 10 instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring a `Health check` path (e.g. `/health`) in App Service instructs the platform to ping each instance every minute. If an instance fails health probes, the load balancer stops routing traffic to it and automatically replaces it if failure persists.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/monitor-instances-health-check",
    tags: ["App Service", "Health Check", "Resilience"]
  },
  {
    id: "azure-az204-29",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service TLS 1.2 Minimum Version Enforcement",
    scenario: "A security compliance mandate requires all web applications to reject deprecated TLS 1.0 and 1.1 handshakes.",
    question: "Where is the minimum TLS version configured in Azure App Service?",
    options: [
      { id: 'A', text: "In the web.config file using custom rewrite rules" },
      { id: 'B', text: "In General Settings under Configuration, set Minimum TLS Version to 1.2" },
      { id: 'C', text: "In Azure Key Vault certificate policies" },
      { id: 'D', text: "In Route 53 DNS records" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure App Service provides a native configuration setting under `General settings` where administrators select the `Minimum TLS Version` (1.2 or 1.3). Any client attempting to connect using TLS 1.0 or 1.1 is dropped at the front-end load balancer.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-bindings#enforce-tls-versions",
    tags: ["App Service", "TLS", "Compliance"]
  },
  {
    id: "azure-az204-30",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Multi-Container Deployment with Docker Compose",
    scenario: "A developer needs to deploy a multi-container solution consisting of a WordPress web frontend and a Redis cache container onto a single App Service Plan.",
    question: "Which configuration format does Azure App Service for Linux support for multi-container deployments?",
    options: [
      { id: 'A', text: "Docker Compose configuration file (docker-compose.yml)" },
      { id: 'B', text: "Kubernetes Pod manifest YAML" },
      { id: 'C', text: "Helm chart bundle" },
      { id: 'D', text: "Vagrantfile" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure App Service for Linux supports multi-container deployments using `Docker Compose`. Developers provide a `docker-compose.yml` file defining container images, port mappings, and inter-container networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container#use-docker-compose",
    tags: ["App Service", "Docker Compose", "Containers"]
  },
  {
    id: "azure-az204-31",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions NCRONTAB Timer Trigger Expressions",
    scenario: "A developer configures an Azure Function with a Timer trigger to execute every business day (Monday through Friday) at 9:30 AM UTC.",
    question: "Which 6-field NCRONTAB expression defines this schedule?",
    options: [
      { id: 'A', text: "0 30 9 * * 1-5" },
      { id: 'B', text: "0 9 30 * * 1-5" },
      { id: 'C', text: "30 9 * * 1-5" },
      { id: 'D', text: "* 30 9 * * MON-FRI" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Functions uses a 6-field NCRONTAB format: `{second} {minute} {hour} {day} {month} {day-of-week}`. Here, `0` seconds, `30` minutes, `9` hours, `*` day, `*` month, and `1-5` (Monday-Friday) correctly represents 9:30:00 AM Mon-Fri.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer#ncrontab-expressions",
    tags: ["Azure Functions", "Timer Trigger", "NCRONTAB"]
  },
  {
    id: "azure-az204-32",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions HTTP Trigger Authorization Levels",
    scenario: "An Azure Function exposes an HTTP API endpoint that must be invoked by client applications passing an API key in the `x-functions-key` request header.",
    question: "Which authorization level should the developer configure on the HTTP trigger?",
    options: [
      { id: 'A', text: "Function authorization level" },
      { id: 'B', text: "Anonymous authorization level" },
      { id: 'C', text: "Admin authorization level" },
      { id: 'D', text: "User authorization level" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Functions HTTP triggers support three authorization levels: `Anonymous` (no key required), `Function` (requires a function-specific or host API key), and `Admin` (requires the master key).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger#authorization-keys",
    tags: ["Azure Functions", "HTTP Trigger", "Authorization Levels"]
  },
  {
    id: "azure-az204-33",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Queue Storage Output Binding Declarative Messages",
    scenario: "A developer writes a C# Azure Function that outputs messages to an Azure Queue Storage queue named `orders-out`.",
    question: "How should the developer declare the output binding in C# isolated worker model?",
    options: [
      { id: 'A', text: "Write messages to a local text file and upload via FTP" },
      { id: 'B', text: "Instantiate a new QueueClient directly inside the method body without bindings" },
      { id: 'C', text: "Decorate the method with [BlobOutput('orders-out')]" },
      { id: 'D', text: "Decorate the return value or out parameter with [QueueOutput('orders-out', Connection = 'StorageConnection')]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Azure Functions isolated worker model, output bindings are declared declaratively using binding attributes such as `[QueueOutput('orders-out', Connection = 'StorageConnection')]`, allowing functions to dispatch queue items simply by returning the payload.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-output",
    tags: ["Azure Functions", "Queue Storage", "Output Binding"]
  },
  {
    id: "azure-az204-34",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Dependency Injection in Isolated Worker",
    scenario: "An enterprise C# Azure Function running in the isolated worker process needs to inject an `HttpClientFactory` and custom logging services into function classes.",
    question: "Where are dependency injection services configured in an isolated worker project?",
    options: [
      { id: 'A', text: "In local.settings.json" },
      { id: 'B', text: "In Program.cs using HostBuilder ConfigureServices" },
      { id: 'C', text: "In an external XML configuration file" },
      { id: 'D', text: "In host.json under the extensions block" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Functions .NET isolated worker model runs as a standard .NET console app. Services and dependencies are registered in `Program.cs` using the `HostBuilder.ConfigureServices` method, standardizing DI with ASP.NET Core.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-process-guide#dependency-injection",
    tags: ["Azure Functions", "Isolated Worker", "Dependency Injection"]
  },
  {
    id: "azure-az204-35",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Zip Deployment and Run-From-Package",
    scenario: "A DevOps engineer configures a deployment pipeline for an Azure Function App. The app has thousands of small npm packages, causing slow deployment times and occasional file locks.",
    question: "Which application setting runs the function app directly from a mounted read-only zip package?",
    options: [
      { id: 'A', text: "WEBSITE_RUN_FROM_PACKAGE = 1" },
      { id: 'B', text: "WEBSITE_ZIP_DEPLOY = true" },
      { id: 'C', text: "FUNCTIONS_WORKER_RUNTIME = node" },
      { id: 'D', text: "SCM_DO_BUILD_DURING_DEPLOYMENT = false" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `WEBSITE_RUN_FROM_PACKAGE = 1` mounts the deployed zip package as a read-only virtual filesystem (`/home/site/wwwroot`). It guarantees atomic deployments, eliminates file lock conflicts, and accelerates cold start package loading.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/run-functions-from-deployment-package",
    tags: ["Azure Functions", "Run From Package", "Deployment"]
  },
  {
    id: "azure-az204-36",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Function Chaining Pattern",
    scenario: "A developer builds a workflow that must execute Function A, pass its result to Function B, and then pass B's result to Function C in strict sequence.",
    question: "Which Durable Functions pattern and language construct coordinates this sequential execution?",
    options: [
      { id: 'A', text: "Function Chaining pattern using sequential await calls to CallActivityAsync" },
      { id: 'B', text: "Fan-out / Fan-in pattern with Task.WhenAny" },
      { id: 'C', text: "Async HTTP APIs pattern" },
      { id: 'D', text: "Event Hub consumer pattern" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the Function Chaining pattern, an orchestrator executes activity functions in an explicit sequence by awaiting each call (`var x = await context.CallActivityAsync('F1'); var y = await context.CallActivityAsync('F2', x);`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp#chaining",
    tags: ["Durable Functions", "Function Chaining", "Sequential"]
  },
  {
    id: "azure-az204-37",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Async HTTP APIs Pattern (202 Accepted)",
    scenario: "A long-running report generation process takes 15 minutes. Client web browsers timeout if an HTTP request stays open longer than 60 seconds.",
    question: "Which Durable Functions pattern returns an immediate HTTP 202 response with a status query URL?",
    options: [
      { id: 'A', text: "Durable Entities pattern" },
      { id: 'B', text: "Async HTTP APIs pattern using CreateCheckStatusResponse" },
      { id: 'C', text: "Function Chaining pattern" },
      { id: 'D', text: "Human Interaction pattern" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Async HTTP APIs pattern uses Durable Functions client binding method `client.CreateCheckStatusResponse(req, instanceId)`. It returns an HTTP `202 Accepted` response with a `Location` header containing the status query URL for clients to poll.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp#async-http",
    tags: ["Durable Functions", "Async HTTP", "202 Accepted"]
  },
  {
    id: "azure-az204-38",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Monitoring Pattern with Durable Timers",
    scenario: "A workflow must poll an external payment gateway every 5 minutes until the transaction status transitions to `Settled` or 1 hour elapses.",
    question: "Which Durable Functions pattern implements this recurring polling loop without burning compute charges while sleeping?",
    options: [
      { id: 'A', text: "A continuous SQL query polling script" },
      { id: 'B', text: "The Monitor pattern using a while loop with context.CreateTimer" },
      { id: 'C', text: "Thread.Sleep in a standard Azure Function" },
      { id: 'D', text: "An infinite while loop with no delays" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Durable Functions `Monitor` pattern uses `context.CreateTimer` inside a loop. The orchestrator sleeps and yields compute resources between polling checks, waking up only when the timer fires to check status without incurring execution costs while idle.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?tabs=csharp#monitoring",
    tags: ["Durable Functions", "Monitor Pattern", "Durable Timers"]
  },
  {
    id: "azure-az204-39",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Durable Entities (Actor Model)",
    scenario: "A multiplayer gaming application requires stateful, single-threaded counters that track player scores in real time without provisioning a database for every user.",
    question: "Which Durable Functions feature provides stateful serverless actors with operations and implicit state persistence?",
    options: [
      { id: 'A', text: "Azure Table Storage without functions" },
      { id: 'B', text: "Activity functions alone" },
      { id: 'C', text: "Orchestrator functions alone" },
      { id: 'D', text: "Durable Entities (Entity Functions)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Durable Entities provide an actor-based programming model for serverless state. Entities are addressed by Entity ID, execute operations sequentially (preventing race conditions), and maintain state in durable storage across invocations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-entities",
    tags: ["Durable Functions", "Durable Entities", "Actor Model"]
  },
  {
    id: "azure-az204-40",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Sub-Orchestrations for Complex Workflows",
    scenario: "An enterprise ERP workflow coordinates provisioning across 10 distinct cloud environments. Each environment requires a complex multi-step provisioning routine.",
    question: "Which Durable Functions feature decomposes large orchestrator functions into reusable child orchestrators?",
    options: [
      { id: 'A', text: "Sub-orchestrator functions called via context.CallSubOrchestratorAsync" },
      { id: 'B', text: "Activity functions alone" },
      { id: 'C', text: "WebJobs SDK triggers" },
      { id: 'D', text: "Durable Entities alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`CallSubOrchestratorAsync` enables an orchestrator to invoke another orchestrator function as a child task. Sub-orchestrators break down complex workflows, provide separate execution histories, and allow modular error handling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-sub-orchestrations",
    tags: ["Durable Functions", "Sub-Orchestrations", "Modularity"]
  },
  {
    id: "azure-az204-41",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Multi-Container Group Architecture",
    scenario: "A developer needs to run a web application container alongside a Fluentd log-forwarding sidecar container sharing the same network namespace, lifecycle, and localhost interface.",
    question: "Which ACI feature models this co-located multi-container architecture?",
    options: [
      { id: 'A', text: "App Service Hybrid Connections" },
      { id: 'B', text: "Single container instances deployed in parallel" },
      { id: 'C', text: "Azure Virtual Machines with Docker" },
      { id: 'D', text: "Container Groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure Container Instance `Container Group` is a collection of containers that are scheduled on the same host machine, sharing the same lifecycle, local network (listening on different ports on `localhost`), storage volumes, and public/private IP address.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-container-groups",
    tags: ["ACI", "Container Groups", "Sidecar"]
  },
  {
    id: "azure-az204-42",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Resource Allocation (CPU and Memory)",
    scenario: "A developer is defining the resource requirements for a machine learning model inference container in Azure Container Instances (ACI) requiring 4 vCPUs and 16 GB RAM.",
    question: "Where are these compute specifications configured in the deployment template?",
    options: [
      { id: 'A', text: "In the Azure subscription quota settings" },
      { id: 'B', text: "In the container Dockerfile EXPOSE statement" },
      { id: 'C', text: "In the container group resource requests section of the deployment template" },
      { id: 'D', text: "In Azure Active Directory claims" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In ACI deployment templates (ARM, Bicep, or YAML), developers specify `resources: { requests: { cpu: 4, memoryInGB: 16 } }` per container. The total group resources equal the sum of requests across containers in the group.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-container-groups#resource-allocation",
    tags: ["ACI", "Resource Allocation", "Compute"]
  },
  {
    id: "azure-az204-43",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Private VNet Subnet Delegation",
    scenario: "A company mandates that all containerized workloads must reside entirely within private subnets without public IP addresses.",
    question: "What prerequisite must be configured on an Azure VNet subnet before deploying ACI with virtual network integration?",
    options: [
      { id: 'A', text: "Open inbound port 80 to 0.0.0.0/0" },
      { id: 'B', text: "Disable Network Security Groups" },
      { id: 'C', text: "Enable public IP assignment on the subnet" },
      { id: 'D', text: "Delegate the subnet to Microsoft.ContainerInstance/containerGroups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To deploy ACI into an Azure Virtual Network, the target subnet must be delegated specifically to `Microsoft.ContainerInstance/containerGroups`. ACI assigns private network interfaces to the container group within that subnet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-vnet",
    tags: ["ACI", "VNet Integration", "Subnet Delegation"]
  },
  {
    id: "azure-az204-44",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Revision Modes: Single vs Multiple",
    scenario: "A developer is evaluating revision management in Azure Container Apps. The microservice needs to support blue/green deployments and percentage-based traffic splits across active versions.",
    question: "Which revision mode must be configured on the Azure Container App?",
    options: [
      { id: 'A', text: "Multiple revision mode" },
      { id: 'B', text: "Single revision mode" },
      { id: 'C', text: "Continuous revision mode" },
      { id: 'D', text: "Manual revision mode" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps supports two revision modes: `Single revision mode` (only one active revision, new deploys immediately replace old ones) and `Multiple revision mode` (multiple active revisions coexist, enabling traffic splitting, blue/green, and canary deployments).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/revisions#revision-mode",
    tags: ["Container Apps", "Revision Mode", "Blue/Green"]
  },
  {
    id: "azure-az204-45",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Ingress Settings (External vs Internal)",
    scenario: "A backend payments microservice on Azure Container Apps must only accept HTTP requests originating from other microservices in the same Container Apps Environment.",
    question: "Which ingress configuration prevents public internet traffic while permitting intra-environment calls?",
    options: [
      { id: 'A', text: "Attach a public Elastic IP" },
      { id: 'B', text: "Set external to true with an allow-all IP filter" },
      { id: 'C', text: "Disable Ingress completely" },
      { id: 'D', text: "Enable Ingress and set external to false (Internal Ingress)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Azure Container Apps, setting `ingress: { external: false }` creates an internal ingress endpoint accessible only to other container apps residing inside the same Container Apps Environment or Virtual Network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview",
    tags: ["Container Apps", "Ingress", "Security"]
  },
  {
    id: "azure-az204-46",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Dapr State Management Component",
    scenario: "A microservice on Azure Container Apps uses Dapr to persist shopping cart state into Azure Cosmos DB without hardcoding Cosmos DB client libraries.",
    question: "Which configuration artifact defines the Dapr state store connection in Azure Container Apps?",
    options: [
      { id: 'A', text: "An App Service connection string" },
      { id: 'B', text: "A Dockerfile environment variable" },
      { id: 'C', text: "A Kubernetes Ingress controller rule" },
      { id: 'D', text: "A Dapr Component YAML manifest with type state.azure.cosmosdb" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dapr uses declarative Component manifests. Developers deploy a Dapr component of type `state.azure.cosmosdb` specifying metadata (database name, collection name, master key/managed identity). The container app interacts with Dapr's local HTTP API (`/v1.0/state/statestore`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/dapr-overview#dapr-components",
    tags: ["Container Apps", "Dapr", "State Management"]
  },
  {
    id: "azure-az204-47",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Dapr Pub/Sub with Azure Service Bus",
    scenario: "Two decoupled microservices on Azure Container Apps communicate asynchronously. Service A publishes events, and Service B subscribes to them via an Azure Service Bus topic.",
    question: "Which Dapr component type facilitates pub/sub messaging via Azure Service Bus?",
    options: [
      { id: 'A', text: "pubsub.azure.servicebus" },
      { id: 'B', text: "bindings.azure.blobstorage" },
      { id: 'C', text: "state.azure.tablestorage" },
      { id: 'D', text: "middleware.http.cors" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dapr provides a standardized pub/sub building block. Configuring a Dapr component with type `pubsub.azure.servicebus` allows microservices to publish and subscribe to topics using simple HTTP POST requests, while Dapr handles queueing, retries, and dead-lettering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/dapr-overview",
    tags: ["Container Apps", "Dapr", "Pub/Sub"]
  },
  {
    id: "azure-az204-48",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Secrets and Managed Identity Integration",
    scenario: "An Azure Container App requires an API key. Security teams mandate that secrets must be referenced securely in the container definition without storing plain text in ARM templates.",
    question: "How should secrets be configured and consumed in Azure Container Apps?",
    options: [
      { id: 'A', text: "Define secrets in the app secrets section and reference them in environment variables using secretRef" },
      { id: 'B', text: "Pass plain text secrets in the container args array" },
      { id: 'C', text: "Hardcode secrets directly in the container image layers" },
      { id: 'D', text: "Store secrets in an unencrypted public GitHub repository" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps supports an application-level `secrets` array. Container definitions reference these secrets securely via `valueFrom: { secretRef: 'secret-name' }`, keeping credentials encrypted and masked in deployment templates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
    tags: ["Container Apps", "Secrets", "Configuration"]
  },
  {
    id: "azure-az204-49",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Scale Up vs Scale Out",
    scenario: "A web app on Azure App Service experiences increased memory demand requiring 16 GB of RAM per instance, and also needs to handle 5,000 concurrent requests across multiple instances.",
    question: "Which actions represent scaling up and scaling out respectively?",
    options: [
      { id: 'A', text: "Scaling up and scaling out are identical operations in Azure" },
      { id: 'B', text: "Scaling up changes the App Service Plan pricing tier to a higher compute size; scaling out increases the number of VM instances" },
      { id: 'C', text: "Scaling up increases instance count; scaling out increases RAM" },
      { id: 'D', text: "Scaling up moves to another Azure region; scaling out enables ARR affinity" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Scale up` (vertical scaling) upgrades the App Service Plan pricing tier (e.g. from Standard S1 to Premium P2v3) to get more CPU cores, RAM, and disk space. `Scale out` (horizontal scaling) increases the number of VM instances running the application.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["App Service", "Scaling", "Architecture"]
  },
  {
    id: "azure-az204-50",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Dedicated Hosting Plan (App Service Plan)",
    scenario: "An enterprise organization runs predictive analytics batch jobs that run continuously 24/7. The company already has unused capacity on an existing Premium App Service Plan.",
    question: "Which Azure Functions hosting plan runs functions on existing dedicated VM instances with predictable monthly pricing?",
    options: [
      { id: 'A', text: "Azure Functions Consumption Plan" },
      { id: 'B', text: "Azure Functions Dedicated (App Service) Plan" },
      { id: 'C', text: "Azure Logic Apps Consumption" },
      { id: 'D', text: "Azure Container Instances alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Dedicated (App Service) Plan runs Azure Functions on dedicated virtual machines associated with an App Service Plan. It is cost-effective when you already have underutilized App Service instances and need predictable monthly billing with continuous long-running jobs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/dedicated-plan",
    tags: ["Azure Functions", "Dedicated Plan", "Cost Management"]
  }
];

export default AZURE_AZ204_QUESTIONS_2;
