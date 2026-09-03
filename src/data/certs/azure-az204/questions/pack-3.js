export const AZURE_AZ204_QUESTIONS_3 = [
  {
    id: "azure-az204-51",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Diagnostic Logging: Application vs Web Server Logs",
    scenario: "A developer is debugging an unhandled exception thrown in ASP.NET Core application code running on Azure App Service.",
    question: "Where are application-level console error traces captured by default?",
    options: [
      { id: 'A', text: "Web Server Logging alone" },
      { id: 'B', text: "Detailed Error Messages alone" },
      { id: 'C', text: "Application Logging (Filesystem or Blob storage)" },
      { id: 'D', text: "Failed Request Tracing alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "App Service supports multiple logging streams. `Application Logging` captures logs emitted by the application code (e.g. `System.Diagnostics.Trace` or `ILogger`). `Web Server Logging` captures HTTP request metadata (IP, URI, status code) formatted as W3C logs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs",
    tags: ["App Service", "Diagnostics", "Logging"]
  },
  {
    id: "azure-az204-52",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Failed Request Tracing (FREB)",
    scenario: "A developer is diagnosing intermittent HTTP 500.19 errors in a legacy .NET Framework web application on App Service. Detailed IIS processing pipeline traces are needed.",
    question: "Which logging feature generates detailed XML event traces for failed HTTP requests in IIS?",
    options: [
      { id: 'A', text: "Application Logging" },
      { id: 'B', text: "Web Server Logging" },
      { id: 'C', text: "Failed Request Tracing (FREB)" },
      { id: 'D', text: "Detailed Error Messages" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Failed Request Tracing (FREB) captures detailed XML traces of IIS pipeline events for requests that match failure criteria (e.g. HTTP status >= 400 or duration > 10 seconds), pinpointing which IIS module caused the error.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs#detailed-error-messages",
    tags: ["App Service", "FREB", "Troubleshooting"]
  },
  {
    id: "azure-az204-53",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Deployment Credentials: User-Level vs App-Level",
    scenario: "A developer needs to deploy an application to Azure App Service using Git or FTP. Azure provides two scopes for deployment credentials.",
    question: "What is the difference between User-Level and App-Level deployment credentials?",
    options: [
      { id: 'A', text: "User-level credentials apply across all web apps in the Azure subscription; App-level credentials apply only to that specific web app" },
      { id: 'B', text: "User-level credentials are for Azure Portal login only" },
      { id: 'C', text: "App-level credentials can only be used once" },
      { id: 'D', text: "User-level credentials have no password; App-level credentials require MFA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure App Service supports `User-level deployment credentials` (one username/password per Azure user account valid across all apps where the user has deployment rights) and `App-level deployment credentials` (scoped specifically to a single app).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-ftp?tabs=portal#configure-deployment-credentials",
    tags: ["App Service", "Deployment Credentials", "Authentication"]
  },
  {
    id: "azure-az204-54",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Cosmos DB Trigger Lease Container Purpose",
    scenario: "When configuring an Azure Functions Cosmos DB trigger, the developer must specify a lease container.",
    question: "What is the function of the lease container in the Cosmos DB Change Feed processor?",
    options: [
      { id: 'A', text: "It stores state and checkpoint offsets across multiple function instances to coordinate distributed stream processing" },
      { id: 'B', text: "It stores cold backup copies of deleted documents" },
      { id: 'C', text: "It caches query results for 24 hours" },
      { id: 'D', text: "It indexes documents for full-text search" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The lease container acts as a distributed state coordinator for the Change Feed processor. It tracks which function instance owns which partition lease and records the last processed continuation token (checkpoint) for each partition.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger#lease-collection",
    tags: ["Azure Functions", "Cosmos DB", "Lease Container"]
  },
  {
    id: "azure-az204-55",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Maximum Concurrent Invocations Configuration",
    scenario: "A developer wants to prevent an Azure Function with an HTTP trigger from overwhelming a legacy backend database by limiting concurrent requests per instance.",
    question: "Where is the maximum concurrent HTTP request limit configured?",
    options: [
      { id: 'A', text: "In host.json under http.maxConcurrentRequests" },
      { id: 'B', text: "In local.settings.json under DatabaseConnection" },
      { id: 'C', text: "In the Azure Portal Function App CORS settings" },
      { id: 'D', text: "In Azure Active Directory" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Functions `host.json`, developers can configure `extensions: { http: { maxConcurrentRequests: 100 } }` to limit the number of HTTP requests processed simultaneously by each function host instance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json#http",
    tags: ["Azure Functions", "host.json", "Concurrency"]
  },
  {
    id: "azure-az204-56",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Purge Instance History API",
    scenario: "An enterprise Durable Functions application has accumulated 10 million orchestration execution history rows in Azure Storage tables over 2 years.",
    question: "Which API operation permanently removes execution history and metadata for completed orchestrations?",
    options: [
      { id: 'A', text: "PurgeInstanceHistoryAsync (or clean up via Durable Functions CLI)" },
      { id: 'B', text: "DropTableAsync in Azure Storage SDK" },
      { id: 'C', text: "DeleteAppServicePlan" },
      { id: 'D', text: "PurgeKeyVaultAsync" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Durable Functions provides the `PurgeInstanceHistoryAsync` API (available on `IDurableOrchestrationClient`). It allows developers to purge history, inputs, and outputs for completed, terminated, or failed orchestration instances based on creation date ranges.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-instance-management#purge-instance-history",
    tags: ["Durable Functions", "Purge History", "Storage Cleanup"]
  },
  {
    id: "azure-az204-57",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Container State Inspection",
    scenario: "A developer deploys a container to ACI that immediately terminates with an error. The developer needs to inspect the exit code and termination reason.",
    question: "Which Azure CLI command returns container state, exit codes, and start/finish timestamps?",
    options: [
      { id: 'A', text: "az container start" },
      { id: 'B', text: "az container show --resource-group myRG --name myContainerGroup" },
      { id: 'C', text: "az container logs only" },
      { id: 'D', text: "az container restart" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `az container show` command outputs detailed JSON metadata for the container group, including container instance states, current status (`Terminated` or `Waiting`), exact `exitCode`, and state transition timestamps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-troubleshooting#get-container-details",
    tags: ["ACI", "CLI", "Troubleshooting"]
  },
  {
    id: "azure-az204-58",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Streaming Logs",
    scenario: "A developer is debugging a live container on Azure Container Instances and needs to stream stdout/stderr log output in real time.",
    question: "Which Azure CLI command streams logs continuously to the terminal?",
    options: [
      { id: 'A', text: "az container stream" },
      { id: 'B', text: "az monitor log-analytics" },
      { id: 'C', text: "az container logs --resource-group myRG --name myContainerGroup --follow" },
      { id: 'D', text: "az container show --follow" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `az container logs` command with the `--follow` flag establishes a real-time stream of standard output and standard error from the designated container instance to the developer's console.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-log-streaming",
    tags: ["ACI", "Logging", "Streaming"]
  },
  {
    id: "azure-az204-59",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps CPU and Memory Allocation Profiles",
    scenario: "A developer deploys a high-throughput Go microservice on Azure Container Apps. The container requires 2.0 vCPUs and 4.0 GiB of memory.",
    question: "What are the valid supported CPU and memory combinations in Azure Container Apps?",
    options: [
      { id: 'A', text: "CPU and memory must be selected from predefined proportional pairs (e.g. 0.5 vCPU / 1.0 GiB, 1.0 vCPU / 2.0 GiB, 2.0 vCPU / 4.0 GiB)" },
      { id: 'B', text: "Any arbitrary floating-point number of megabytes" },
      { id: 'C', text: "Memory must always equal exactly 100 times the CPU value" },
      { id: 'D', text: "Container Apps allocates unbounded memory automatically" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps requires container CPU and memory requests to adhere to predefined supported ratio pairs (e.g. 0.25 vCPU / 0.5 GiB, 0.5 vCPU / 1.0 GiB, 1.0 vCPU / 2.0 GiB, up to 4.0 vCPU / 8.0 GiB).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/containers#configuration",
    tags: ["Container Apps", "Resource Limits", "CPU/Memory"]
  },
  {
    id: "azure-az204-60",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Zero-Downtime Rolling Updates",
    scenario: "A developer updates the container image of a single-revision microservice on Azure Container Apps.",
    question: "How does Azure Container Apps guarantee zero downtime during the revision rollout?",
    options: [
      { id: 'A', text: "It changes the DNS IP address to an external maintenance page" },
      { id: 'B', text: "It requires users to accept an HTTP 503 error for 2 minutes" },
      { id: 'C', text: "It terminates all existing replicas immediately before downloading the image" },
      { id: 'D', text: "Container Apps spins up the new revision and shifts traffic only after the new revision's readiness probes succeed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "During updates in Azure Container Apps, the platform provisions the new revision alongside existing replicas. Traffic continues flowing to the old revision until the new revision passes its startup and readiness health probes, guaranteeing zero downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/revisions#application-lifecycle",
    tags: ["Container Apps", "Rolling Update", "Zero Downtime"]
  },
  {
    id: "azure-az204-61",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Custom Domain Verification with TXT and CNAME",
    scenario: "A company wants to map `www.contoso.com` to an Azure App Service `contoso.azurewebsites.net`. Azure requires domain ownership verification before binding.",
    question: "Which DNS records are used to verify ownership and route traffic?",
    options: [
      { id: 'A', text: "A CNAME record pointing to contoso.azurewebsites.net or an asuid TXT record with the verification ID" },
      { id: 'B', text: "An PTR record pointing to 127.0.0.1" },
      { id: 'C', text: "An SOA record alone" },
      { id: 'D', text: "An MX record pointing to Microsoft 365" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To verify ownership of a custom subdomain in App Service, developers create a `CNAME` record pointing to the `azurewebsites.net` domain (or an `asuid.&lt;subdomain&gt;` TXT record with the App Service Verification ID for apex domains).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain",
    tags: ["App Service", "Custom Domains", "DNS"]
  },
  {
    id: "azure-az204-62",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Extension Bundles Configuration",
    scenario: "A developer builds a Python Azure Function that uses Cosmos DB and Service Bus bindings. The developer does not want to install .NET SDK tools on their local machine to compile binding extensions.",
    question: "Which feature in host.json downloads pre-compiled binding extension packages automatically?",
    options: [
      { id: 'A', text: "extensionBundle configuration in host.json" },
      { id: 'B', text: "nuget.config in the project root" },
      { id: 'C', text: "package.json dependencies" },
      { id: 'D', text: "pip install azure-functions-extensions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Extension Bundles in `host.json` allow non-.NET functions (Python, JavaScript, PowerShell, Java) to automatically download and consume pre-compiled binding extension packages without requiring the .NET Core SDK on the developer's machine.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-register#extension-bundles",
    tags: ["Azure Functions", "Extension Bundles", "host.json"]
  },
  {
    id: "azure-az204-63",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Scale Controller Event Monitoring",
    scenario: "An event-driven serverless system on the Azure Functions Consumption plan experiences an influx of thousands of messages arriving simultaneously.",
    question: "Which platform component monitors event source metrics and scales out function worker instances heuristically?",
    options: [
      { id: 'A', text: "Each function instance spawns EC2 VMs via bash scripts" },
      { id: 'B', text: "Traffic is scaled by DNS round-robin routing alone" },
      { id: 'C', text: "The Scale Controller component monitors event source metrics (e.g. queue length) and adds VM instances heuristically" },
      { id: 'D', text: "Scaling is purely fixed at 1 instance per second" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Functions Consumption and Premium plans use an internal component called the `Scale Controller`. It continuously monitors the rate of events (such as queue backlog, event hub partition lag) and heuristically provisions additional instances to match incoming load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling",
    tags: ["Azure Functions", "Scale Controller", "Autoscaling"]
  },
  {
    id: "azure-az204-64",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Rewind vs Restart for Failed Orchestrations",
    scenario: "A long-running Durable Functions workflow fails at step 8 of 10 due to an external API outage. The issue is resolved, and the developer wants to retry step 8 without re-executing steps 1 to 7.",
    question: "Which Durable Functions feature resumes execution from the point of failure using the existing execution history?",
    options: [
      { id: 'A', text: "Drop Azure Storage Tables" },
      { id: 'B', text: "StartNewBiDirectionalOrchestration" },
      { id: 'C', text: "PurgeInstanceHistory" },
      { id: 'D', text: "Rewind (or Restart from failed activity in v2.x)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Durable Functions supports rewinding failed orchestrations. When an orchestration is rewound, it uses the existing recorded execution history for previously successful activities (steps 1-7) and re-evaluates execution starting from the failed activity (step 8).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-instance-management#rewind",
    tags: ["Durable Functions", "Rewind", "Fault Tolerance"]
  },
  {
    id: "azure-az204-65",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Custom Domain and Managed Certificates",
    scenario: "A developer configures a custom domain `service.example.com` on Azure Container Apps. The developer needs an automated TLS certificate.",
    question: "Which feature issues and automatically binds a free managed TLS certificate in Azure Container Apps?",
    options: [
      { id: 'A', text: "Let's Encrypt cron job inside the container" },
      { id: 'B', text: "Container Apps Managed Certificate" },
      { id: 'C', text: "Self-signed certificate generated with OpenSSL" },
      { id: 'D', text: "App Service Certificate purchased in GoDaddy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Container Apps provides free Managed Certificates for custom domains. Once domain validation via CNAME/TXT records is verified, Azure issues and automatically renews the TLS certificate at zero cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-certificates",
    tags: ["Container Apps", "Managed Certificates", "TLS"]
  },
  {
    id: "azure-az204-66",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Health Probes: Liveness, Readiness, and Startup",
    scenario: "A Java Spring Boot container on Azure Container Apps takes 45 seconds to initialize before it can accept incoming traffic.",
    question: "Which health probe configuration prevents the container from being prematurely killed during its lengthy startup phase?",
    options: [
      { id: 'A', text: "Startup Probe" },
      { id: 'B', text: "Liveness Probe alone" },
      { id: 'C', text: "Readiness Probe alone" },
      { id: 'D', text: "Continuous Ping Probe" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Container Apps supports three probe types: `Startup` (verifies the app has initialized before other probes run, preventing premature container restarts), `Liveness` (detects container deadlocks to trigger restarts), and `Readiness` (controls traffic routing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/health-probes",
    tags: ["Container Apps", "Health Probes", "Startup Probe"]
  },
  {
    id: "azure-az204-67",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "App Service Web App Cloning across Azure Regions",
    scenario: "A company needs to clone an existing production App Service in `East US` to `West Europe` as part of a disaster recovery initiative.",
    question: "Which App Service feature creates an exact replica of an app including configuration, connection strings, and content in another region?",
    options: [
      { id: 'A', text: "App Service Cloning (az webapp up / az webapp create with --source-webapp)" },
      { id: 'B', text: "Deployment Slot Swap" },
      { id: 'C', text: "VNet Integration" },
      { id: 'D', text: "ARR Affinity" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Service cloning (supported on Premium and Isolated tiers) creates a new web app in another region or resource group, copying app settings, connection strings, and file content from the source app.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-web-app-cloning",
    tags: ["App Service", "Cloning", "Disaster Recovery"]
  },
  {
    id: "azure-az204-68",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions In-Process vs Isolated Worker Model Differences",
    scenario: "A development team is upgrading an Azure Functions app from .NET 6 in-process model to .NET 8 isolated worker model.",
    question: "What is the primary architectural difference between the in-process model and the isolated worker model?",
    options: [
      { id: 'A', text: "The isolated worker model runs user code in a separate worker process independent of the Functions host runtime, giving full control over dependencies and middleware" },
      { id: 'B', text: "The isolated worker model can only be deployed to on-premises servers" },
      { id: 'C', text: "The in-process model does not support HTTP triggers" },
      { id: 'D', text: "The isolated worker model does not support dependency injection" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the .NET isolated worker model, function code runs in an independent process separate from the Azure Functions host process. This eliminates package version conflicts with the host, gives full control over startup/middleware, and allows targeting new .NET versions immediately upon release.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-process-guide",
    tags: ["Azure Functions", "Isolated Worker", "Architecture"]
  },
  {
    id: "azure-az204-69",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Single-Threaded Execution of Entities",
    scenario: "An inventory service handles thousands of concurrent purchase requests for limited-edition concert tickets. Tickets must be decremented without race conditions.",
    question: "How do Durable Entities guarantee that concurrent purchase operations do not create race conditions?",
    options: [
      { id: 'A', text: "By rejecting all concurrent requests with HTTP 429" },
      { id: 'B', text: "Durable Entities execute operations sequentially (single-threaded) in the order messages are received in their work queue" },
      { id: 'C', text: "By using distributed database row locks" },
      { id: 'D', text: "By deploying dedicated physical server instances for each user" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Durable Entities guarantee single-threaded execution per entity ID. When multiple concurrent calls target the same entity, the Durable Task framework queues the operations and executes them sequentially one-by-one, guaranteeing serialized execution and preventing race conditions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-entities#entity-messaging",
    tags: ["Durable Functions", "Durable Entities", "Concurrency"]
  },
  {
    id: "azure-az204-70",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps Custom Startup Executable and Arguments",
    scenario: "A developer deploys a base Ubuntu container image to Azure Container Apps and needs to override the container entrypoint to execute a custom Python script `worker.py` with parameter `--batch-size 50`.",
    question: "Which properties in the container definition override the image entrypoint and command arguments?",
    options: [
      { id: 'A', text: "entrypoint and parameters" },
      { id: 'B', text: "runCommand and arguments" },
      { id: 'C', text: "command for entrypoint and args for command parameters" },
      { id: 'D', text: "startupScript and startupArgs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure Container Apps container definitions (aligned with Kubernetes pod specs), the `command` array overrides the container image `ENTRYPOINT`, and the `args` array provides the command-line arguments overriding `CMD`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/containers#entrypoint-and-command",
    tags: ["Container Apps", "Container Definition", "Command/Args"]
  },
  {
    id: "azure-az204-71",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection Criteria",
    scenario: "A developer designs an IoT telemetry database in Azure Cosmos DB storing millions of sensor readings per minute. Queries always filter by `deviceId` and specify time ranges.",
    question: "Which property should the developer choose as the partition key to ensure uniform distribution and prevent hot partitions?",
    options: [
      { id: 'A', text: "dateString (all devices writing to today's date)" },
      { id: 'B', text: "deviceType (only 3 distinct types exist across the fleet)" },
      { id: 'C', text: "firmwareVersion (95% of devices share the same version)" },
      { id: 'D', text: "deviceId (high cardinality with evenly distributed read and write traffic)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An optimal Cosmos DB partition key possesses high cardinality (millions of distinct values) and distributes write and read requests uniformly across physical partitions. Using `deviceId` ensures queries scoped to a device hit a single logical partition, while avoiding date-based hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Cosmos DB", "Partition Key", "High Cardinality"]
  },
  {
    id: "azure-az204-72",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Synthetic Partition Keys",
    scenario: "An order management system stores customer orders in Azure Cosmos DB. Neither `customerId` nor `orderDate` alone provides both high cardinality and balanced partition sizing.",
    question: "Which design pattern creates a synthetic partition key by concatenating multiple attributes?",
    options: [
      { id: 'A', text: "Random Number Generation pattern" },
      { id: 'B', text: "Normalized Relational Foreign Key pattern" },
      { id: 'C', text: "GUID replacement pattern" },
      { id: 'D', text: "Synthetic Partition Key pattern (e.g. customerId_orderYearMonth)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A synthetic partition key combines multiple property values (such as `customerId` and `yyyy-MM`) into a single concatenated string property. This satisfies high-cardinality requirements while distributing data evenly across physical storage partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/synthetic-partition-keys",
    tags: ["Cosmos DB", "Synthetic Partition Key", "Schema Design"]
  },
  {
    id: "azure-az204-73",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Request Units (RU) Baseline Calculation",
    scenario: "A developer is sizing an Azure Cosmos DB container. The application performs 1,000 point reads per second of items that are 1 KB in size.",
    question: "How many Request Units per second (RU/s) must be provisioned for these point reads under Session consistency?",
    options: [
      { id: 'A', text: "5,000 RU/s" },
      { id: 'B', text: "10,000 RU/s" },
      { id: 'C', text: "1,000 RU/s (1 RU per 1 KB point read)" },
      { id: 'D', text: "500 RU/s" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure Cosmos DB, reading a 1 KB item by ID and partition key (point read) consumes exactly 1 Request Unit (RU) under Session or Eventual consistency. Reading 1,000 items (1 KB each) per second requires 1,000 RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/request-units",
    tags: ["Cosmos DB", "Request Units", "Capacity Planning"]
  },
  {
    id: "azure-az204-74",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Autoscale Throughput Provisioning",
    scenario: "A retail web application on Azure Cosmos DB experiences sudden traffic surges during marketing promotions but remains idle overnight. The developer wants throughput to scale automatically between 400 RU/s and 4,000 RU/s.",
    question: "Which Cosmos DB throughput model should the developer configure?",
    options: [
      { id: 'A', text: "Autoscale throughput with max RU/s set to 4,000 RU/s" },
      { id: 'B', text: "Manual provisioned throughput set to 400 RU/s" },
      { id: 'C', text: "Serverless capacity mode alone" },
      { id: 'D', text: "Reserved capacity for 3 years" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Cosmos DB Autoscale throughput instantly scales container throughput between 10% of the configured maximum (e.g. 400 RU/s) and the maximum RU/s (4,000 RU/s) based on real-time request volume, charging per hour based on highest utilized RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/provision-throughput-autoscale",
    tags: ["Cosmos DB", "Autoscale", "Capacity Management"]
  },
  {
    id: "azure-az204-75",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Consistency Levels: Strong vs Eventual Spectrum",
    scenario: "A developer is evaluating consistency models in Azure Cosmos DB. The application requires global data replication and guaranteed monotonic reads without the high latency and availability penalties of Strong consistency.",
    question: "Which consistency level is the default setting in Azure Cosmos DB?",
    options: [
      { id: 'A', text: "Bounded Staleness consistency" },
      { id: 'B', text: "Strong consistency" },
      { id: 'C', text: "Eventual consistency" },
      { id: 'D', text: "Session consistency" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Cosmos DB offers five consistency levels: Strong, Bounded Staleness, Session, Consistent Prefix, and Eventual. `Session` consistency is the default and provides read-your-writes guarantees within the client's session token without sacrificing high availability or low latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
    tags: ["Cosmos DB", "Consistency Levels", "Session Consistency"]
  }
];

export default AZURE_AZ204_QUESTIONS_3;
