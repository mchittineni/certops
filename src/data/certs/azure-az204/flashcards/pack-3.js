export const AZURE_AZ204_FLASHCARDS_3 = [
  {
    id: "azure-az204-fc-51",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Diagnostic Logging Types",
    hint: "Application code vs HTTP server logs.",
    back: "<strong>Application Logging</strong> captures stdout/stderr and code traces. <strong>Web Server Logging</strong> records raw W3C HTTP transaction metadata.",
    tags: ["App Service", "Diagnostics", "Logging"]
  },
  {
    id: "azure-az204-fc-52",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Failed Request Tracing",
    hint: "Granular IIS pipeline diagnostics.",
    back: "<strong>Failed Request Tracing (FREB)</strong> generates in-depth XML logs of IIS modules and pipeline stages for requests exceeding failure or latency thresholds.",
    tags: ["App Service", "FREB", "Troubleshooting"]
  },
  {
    id: "azure-az204-fc-53",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Deployment Credentials",
    hint: "User-scoped vs App-scoped credentials.",
    back: "<strong>User-level credentials</strong> provide a single login for all subscription web apps. <strong>App-level credentials</strong> are unique per web app (found in the publish profile).",
    tags: ["App Service", "Deployment Credentials", "Authentication"]
  },
  {
    id: "azure-az204-fc-54",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Cosmos DB Lease Container",
    hint: "Distributed Change Feed coordination.",
    back: "The <strong>lease container</strong> tracks partition ownership and offset checkpoints across multiple worker instances processing the Cosmos DB Change Feed.",
    tags: ["Azure Functions", "Cosmos DB", "Lease Container"]
  },
  {
    id: "azure-az204-fc-55",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: maxConcurrentRequests",
    hint: "Throttling concurrent invocations.",
    back: "Configuring <strong>extensions.http.maxConcurrentRequests</strong> in <code>host.json</code> caps concurrent HTTP executions per instance to protect backend databases.",
    tags: ["Azure Functions", "host.json", "Concurrency"]
  },
  {
    id: "azure-az204-fc-56",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: PurgeInstanceHistory",
    hint: "Cleaning up orchestration state storage.",
    back: "<strong>PurgeInstanceHistoryAsync</strong> deletes execution history tables and blob outputs for completed orchestrations to recover storage and maintain performance.",
    tags: ["Durable Functions", "Purge History", "Storage Cleanup"]
  },
  {
    id: "azure-az204-fc-57",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: az container show",
    hint: "Inspecting container exit codes and state.",
    back: "Use <strong>az container show</strong> to inspect container status, exact exit codes, and lifecycle timestamps when diagnosing crashes.",
    tags: ["ACI", "CLI", "Troubleshooting"]
  },
  {
    id: "azure-az204-fc-58",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "ACI: az container logs --follow",
    hint: "Real-time container log streaming.",
    back: "Running <strong>az container logs --follow</strong> streams real-time stdout/stderr logs from an active ACI container to your local terminal.",
    tags: ["ACI", "Logging", "Streaming"]
  },
  {
    id: "azure-az204-fc-59",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Supported Compute Ratios",
    hint: "Predefined CPU and memory pairs.",
    back: "Container Apps enforces <strong>predefined proportional CPU/memory pairs</strong> (e.g. 1.0 vCPU / 2.0 GiB, 2.0 vCPU / 4.0 GiB) for container definitions.",
    tags: ["Container Apps", "Resource Limits", "CPU/Memory"]
  },
  {
    id: "azure-az204-fc-60",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Zero-Downtime Rolling Updates",
    hint: "Readiness-gated traffic cutover.",
    back: "Container Apps deploys new revisions alongside active ones, shifting traffic only after <strong>readiness probes pass</strong> to prevent downtime.",
    tags: ["Container Apps", "Rolling Update", "Zero Downtime"]
  },
  {
    id: "azure-az204-fc-61",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: Custom Domain Verification",
    hint: "Validating domain ownership via DNS.",
    back: "Domain ownership is verified via <strong>CNAME records</strong> or an <strong>asuid TXT record</strong> containing the unique App Service Verification ID.",
    tags: ["App Service", "Custom Domains", "DNS"]
  },
  {
    id: "azure-az204-fc-62",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Extension Bundles",
    hint: "Automated binding package resolution.",
    back: "The <strong>extensionBundle</strong> block in <code>host.json</code> enables non-.NET functions to resolve binding extensions automatically without local .NET toolchains.",
    tags: ["Azure Functions", "Extension Bundles", "host.json"]
  },
  {
    id: "azure-az204-fc-63",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Scale Controller",
    hint: "Heuristic event-driven scaling engine.",
    back: "The <strong>Scale Controller</strong> monitors message arrival rates and backlog depth across event sources to provision worker instances dynamically.",
    tags: ["Azure Functions", "Scale Controller", "Autoscaling"]
  },
  {
    id: "azure-az204-fc-64",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Functions: Rewind Execution",
    hint: "Resuming failed workflows from the point of failure.",
    back: "The <strong>Rewind</strong> capability replays successful historical steps and resumes execution directly from the failed activity, avoiding redundant re-processing.",
    tags: ["Durable Functions", "Rewind", "Fault Tolerance"]
  },
  {
    id: "azure-az204-fc-65",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Managed Certificates",
    hint: "Zero-cost automated SSL certificates.",
    back: "Azure Container Apps provides <strong>free Managed Certificates</strong> for custom domains with automated validation and lifecycle renewals.",
    tags: ["Container Apps", "Managed Certificates", "TLS"]
  },
  {
    id: "azure-az204-fc-66",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Startup vs. Liveness Probes",
    hint: "Managing container initialization.",
    back: "A <strong>Startup Probe</strong> protects slow-starting applications by disabling liveness and readiness checks until the initialization sequence finishes successfully.",
    tags: ["Container Apps", "Health Probes", "Startup Probe"]
  },
  {
    id: "azure-az204-fc-67",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "App Service: App Cloning",
    hint: "Replicating web apps across regions.",
    back: "<strong>App Service Cloning</strong> duplicates an app's configuration, files, and settings into a new region or resource group for disaster recovery.",
    tags: ["App Service", "Cloning", "Disaster Recovery"]
  },
  {
    id: "azure-az204-fc-68",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Azure Functions: Isolated Worker Architecture",
    hint: "Independent process execution.",
    back: "The <strong>isolated worker model</strong> runs function code in a separate process from the host runtime, eliminating dependency conflicts and enabling custom middleware.",
    tags: ["Azure Functions", "Isolated Worker", "Architecture"]
  },
  {
    id: "azure-az204-fc-69",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    front: "Durable Entities: Serialized Execution",
    hint: "Single-threaded operations.",
    back: "Durable Entities process incoming operations <strong>sequentially in a single thread per entity ID</strong>, completely eliminating concurrency race conditions.",
    tags: ["Durable Functions", "Durable Entities", "Concurrency"]
  },
  {
    id: "azure-az204-fc-70",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    front: "Container Apps: Command and Args Overrides",
    hint: "Customizing container execution.",
    back: "Use <strong>command</strong> to override the container image entrypoint and <strong>args</strong> to pass command-line arguments in Container Apps.",
    tags: ["Container Apps", "Container Definition", "Command/Args"]
  },
  {
    id: "azure-az204-fc-71",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Partition Key Selection",
    hint: "Uniform throughput distribution.",
    back: "A good partition key has <strong>high cardinality</strong> and spreads read/write request units evenly across physical partitions (e.g. <code>deviceId</code> or <code>userId</code>).",
    tags: ["Cosmos DB", "Partition Key", "High Cardinality"]
  },
  {
    id: "azure-az204-fc-72",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Synthetic Partition Keys",
    hint: "Concatenating attributes for optimal distribution.",
    back: "A <strong>synthetic partition key</strong> combines multiple properties (e.g. <code>userId_year</code>) into a single composite value to achieve high cardinality and even distribution.",
    tags: ["Cosmos DB", "Synthetic Partition Key", "Schema Design"]
  },
  {
    id: "azure-az204-fc-73",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: RU Calculation",
    hint: "1 RU = 1 KB point read.",
    back: "A point read of a <strong>1 KB item</strong> consumes exactly <strong>1 Request Unit (RU)</strong> under Session consistency. Writes consume roughly 5-10x more RUs due to indexing.",
    tags: ["Cosmos DB", "Request Units", "Capacity Planning"]
  },
  {
    id: "azure-az204-fc-74",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Autoscale Throughput",
    hint: "Dynamic 10x throughput scaling.",
    back: "Autoscale provisions throughput that scales instantly between <strong>10% and 100% of the configured maximum RU/s</strong> (e.g. 400 to 4,000 RU/s).",
    tags: ["Cosmos DB", "Autoscale", "Capacity Management"]
  },
  {
    id: "azure-az204-fc-75",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Five Consistency Levels",
    hint: "Consistency spectrum from Strong to Eventual.",
    back: "Cosmos DB defaults to <strong>Session consistency</strong> (read-your-own-writes per session token). Strong consistency provides linearizability but is limited to a single region's write latency.",
    tags: ["Cosmos DB", "Consistency Levels", "Session Consistency"]
  }
];

export default AZURE_AZ204_FLASHCARDS_3;
