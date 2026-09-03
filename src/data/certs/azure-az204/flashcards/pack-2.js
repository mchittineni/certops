export const AZURE_AZ204_FLASHCARDS_2 = [
  {
    id: "azure-az204-fc-26",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Hybrid Connections",
    hint: "Secure outbound relaying to on-prem.",
    back: "<strong>Hybrid Connections</strong> route outbound traffic to on-premises TCP endpoints over port 443 via Azure Relay without requiring VPNs or firewall pinholes.",
    tags: ["App Service", "Hybrid Connections", "On-Premises"]
  },
  {
    id: "azure-az204-fc-27",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Automated Backups",
    hint: "Preserving app files and linked databases.",
    back: "App Service backups export application files, configs, and connected SQL databases to an <strong>Azure Storage account container</strong>.",
    tags: ["App Service", "Backup", "Disaster Recovery"]
  },
  {
    id: "azure-az204-fc-28",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Health Check Probes",
    hint: "Evicting failing instances automatically.",
    back: "A configured <strong>Health Check path</strong> allows Azure front-ends to probe instance responsiveness and remove unhealthy instances from load balancing rotation.",
    tags: ["App Service", "Health Check", "Resilience"]
  },
  {
    id: "azure-az204-fc-29",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Minimum TLS Version",
    hint: "Enforcing modern transport encryption.",
    back: "Selecting <strong>Minimum TLS Version 1.2</strong> in App Service configuration rejects legacy TLS 1.0 and 1.1 handshakes at the edge load balancer.",
    tags: ["App Service", "TLS", "Compliance"]
  },
  {
    id: "azure-az204-fc-30",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Multi-Container Apps",
    hint: "Co-locating containers via Docker Compose.",
    back: "App Service for Linux natively supports <strong>Docker Compose</strong> to deploy and network multi-container applications on a single plan.",
    tags: ["App Service", "Docker Compose", "Containers"]
  },
  {
    id: "azure-az204-fc-31",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: NCRONTAB Format",
    hint: "6-field schedule expressions.",
    back: "Azure Functions Timer triggers use <strong>6 fields</strong>: <code>{sec} {min} {hour} {day} {month} {day-of-week}</code> (e.g. <code>0 30 9 * * 1-5</code>).",
    tags: ["Azure Functions", "Timer Trigger", "NCRONTAB"]
  },
  {
    id: "azure-az204-fc-32",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: HTTP Auth Levels",
    hint: "Securing serverless endpoints.",
    back: "HTTP triggers support 3 auth levels: <strong>Anonymous</strong> (public), <strong>Function</strong> (requires function/host key), and <strong>Admin</strong> (requires master key).",
    tags: ["Azure Functions", "HTTP Trigger", "Authorization Levels"]
  },
  {
    id: "azure-az204-fc-33",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Queue Output Binding",
    hint: "Declarative message dispatch.",
    back: "Using <strong>[QueueOutput]</strong> attributes sends method return values or properties directly to Azure Queue Storage without manual SDK client management.",
    tags: ["Azure Functions", "Queue Storage", "Output Binding"]
  },
  {
    id: "azure-az204-fc-34",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: .NET Isolated DI",
    hint: "Standard ASP.NET Core dependency injection.",
    back: "Isolated worker functions register services in <strong>Program.cs</strong> via <code>HostBuilder.ConfigureServices</code>, bringing standard .NET DI patterns to serverless.",
    tags: ["Azure Functions", "Isolated Worker", "Dependency Injection"]
  },
  {
    id: "azure-az204-fc-35",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Run From Package",
    hint: "Atomic read-only zip deployments.",
    back: "Setting <strong>WEBSITE_RUN_FROM_PACKAGE = 1</strong> mounts the deployment zip file directly as read-only wwwroot, eliminating file locks and improving startup times.",
    tags: ["Azure Functions", "Run From Package", "Deployment"]
  },
  {
    id: "azure-az204-fc-36",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Function Chaining",
    hint: "Sequential activity execution.",
    back: "<strong>Function Chaining</strong> executes activities in sequence by sequentially awaiting <code>context.CallActivityAsync</code>, passing the output of one step into the next.",
    tags: ["Durable Functions", "Function Chaining", "Sequential"]
  },
  {
    id: "azure-az204-fc-37",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Async HTTP Pattern",
    hint: "Long-running HTTP orchestration.",
    back: "The <strong>Async HTTP APIs</strong> pattern returns <strong>202 Accepted</strong> with polling URLs, allowing web clients to track long-running jobs without socket timeouts.",
    tags: ["Durable Functions", "Async HTTP", "202 Accepted"]
  },
  {
    id: "azure-az204-fc-38",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Monitor Pattern",
    hint: "Zero-cost periodic polling.",
    back: "The <strong>Monitor pattern</strong> uses <code>context.CreateTimer</code> in a loop to poll external APIs, sleeping with zero compute cost between checks.",
    tags: ["Durable Functions", "Monitor Pattern", "Durable Timers"]
  },
  {
    id: "azure-az204-fc-39",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Durable Entities",
    hint: "Stateful serverless virtual actors.",
    back: "<strong>Durable Entities</strong> provide actor-like stateful micro-objects with explicit operations, executing sequentially to prevent concurrent race conditions.",
    tags: ["Durable Functions", "Durable Entities", "Actor Model"]
  },
  {
    id: "azure-az204-fc-40",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Sub-Orchestrations",
    hint: "Decomposing complex workflows.",
    back: "<strong>CallSubOrchestratorAsync</strong> allows parent orchestrators to launch modular child orchestrators with independent history tables and lifecycle tracking.",
    tags: ["Durable Functions", "Sub-Orchestrations", "Modularity"]
  },
  {
    id: "azure-az204-fc-41",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: Container Groups",
    hint: "Co-located multi-container pod model.",
    back: "An ACI <strong>Container Group</strong> schedules multiple containers on the same physical host, sharing <code>localhost</code>, volumes, and lifecycle (similar to a Kubernetes Pod).",
    tags: ["ACI", "Container Groups", "Sidecar"]
  },
  {
    id: "azure-az204-fc-42",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: Resource Requests",
    hint: "Allocating CPU and RAM to containers.",
    back: "Specify CPU and RAM in the <strong>resources: requests</strong> block of the container definition to allocate dedicated compute capacity to ACI containers.",
    tags: ["ACI", "Resource Allocation", "Compute"]
  },
  {
    id: "azure-az204-fc-43",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: VNet Subnet Delegation",
    hint: "Private container network interfaces.",
    back: "Subnets hosting ACI container groups must be delegated to <strong>Microsoft.ContainerInstance/containerGroups</strong> to enable private VNet IP assignment.",
    tags: ["ACI", "VNet Integration", "Subnet Delegation"]
  },
  {
    id: "azure-az204-fc-44",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Single vs. Multiple Revision Mode",
    hint: "Enabling canary traffic splits.",
    back: "<strong>Multiple revision mode</strong> allows multiple container revisions to run concurrently with custom traffic splitting rules. <strong>Single mode</strong> deactivates older revisions instantly.",
    tags: ["Container Apps", "Revision Mode", "Blue/Green"]
  },
  {
    id: "azure-az204-fc-45",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Internal vs. External Ingress",
    hint: "Isolating backend microservices.",
    back: "Configuring <strong>external: false</strong> (Internal Ingress) restricts HTTP traffic to intra-environment microservice calls, blocking all public internet access.",
    tags: ["Container Apps", "Ingress", "Security"]
  },
  {
    id: "azure-az204-fc-46",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Dapr State Components",
    hint: "Abstracting storage via Dapr sidecars.",
    back: "Dapr applications store state by publishing to local sidecar endpoints mapped to declarative <strong>Dapr Component YAML</strong> files (e.g. <code>state.azure.cosmosdb</code>).",
    tags: ["Container Apps", "Dapr", "State Management"]
  },
  {
    id: "azure-az204-fc-47",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Dapr Pub/Sub",
    hint: "Decoupled asynchronous event messaging.",
    back: "A Dapr component of type <strong>pubsub.azure.servicebus</strong> enables serverless pub/sub messaging across Container Apps via simple HTTP APIs.",
    tags: ["Container Apps", "Dapr", "Pub/Sub"]
  },
  {
    id: "azure-az204-fc-48",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Secrets Management",
    hint: "Secure secret references.",
    back: "Define credentials in the Container App <strong>secrets</strong> collection and map them to environment variables using <strong>secretRef</strong> to avoid plain-text leakage.",
    tags: ["Container Apps", "Secrets", "Configuration"]
  },
  {
    id: "azure-az204-fc-49",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Scale Up vs. Scale Out",
    hint: "Vertical vs Horizontal scaling.",
    back: "<strong>Scale Up</strong> increases instance size (CPU/RAM by upgrading tier). <strong>Scale Out</strong> increases the number of VM instances in the plan.",
    tags: ["App Service", "Scaling", "Architecture"]
  },
  {
    id: "azure-az204-fc-50",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Dedicated Hosting Plan",
    hint: "Running serverless on App Service VMs.",
    back: "The <strong>Dedicated (App Service) Plan</strong> runs functions on existing dedicated App Service instances, providing predictable monthly costs for continuous 24/7 workloads.",
    tags: ["Azure Functions", "Dedicated Plan", "Cost Management"]
  }
];

export default AZURE_AZ204_FLASHCARDS_2;
