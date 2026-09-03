export const AZURE_AZ204_FLASHCARDS_7 = [
  {
    id: "azure-az204-fc-151",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Azure RBAC: Role Definition Anatomy",
    hint: "Actions, DataActions, and AssignableScopes.",
    back: "RBAC roles define <strong>Actions</strong> (management plane), <strong>DataActions</strong> (data plane like blob reads), and <strong>AssignableScopes</strong> (where roles can be assigned).",
    tags: ["Azure RBAC", "Custom Roles", "Security"]
  },
  {
    id: "azure-az204-fc-152",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Event Grid Integration",
    hint: "Event-driven certificate expiration alerts.",
    back: "Key Vault emits <strong>CertificateNearExpiry</strong> events to <strong>Azure Event Grid</strong>, triggering automated rotation runbooks or notifications.",
    tags: ["Key Vault", "Event Grid", "Certificates"]
  },
  {
    id: "azure-az204-fc-153",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Security Defaults vs. Conditional Access",
    hint: "Mutually exclusive security configurations.",
    back: "<strong>Security Defaults</strong> provides baseline protection (MFA for all). Creating fine-grained <strong>Conditional Access</strong> policies requires disabling Security Defaults.",
    tags: ["Microsoft Entra ID", "Security Defaults", "Conditional Access"]
  },
  {
    id: "azure-az204-fc-154",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: softDeleteRetentionInDays",
    hint: "Customizing recovery windows.",
    back: "<strong>softDeleteRetentionInDays</strong> defines how long deleted Key Vault items stay recoverable (configurable from <strong>7 to 90 days</strong>).",
    tags: ["Key Vault", "Soft Delete", "Retention Period"]
  },
  {
    id: "azure-az204-fc-155",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage SAS: sp Permissions String",
    hint: "Fine-grained operation permissions.",
    back: "The <strong>sp</strong> parameter specifies permitted operations: <code>r</code> (read), <code>w</code> (write), <code>d</code> (delete), <code>l</code> (list), <code>c</code> (create).",
    tags: ["Storage", "SAS", "sp Parameter"]
  },
  {
    id: "azure-az204-fc-156",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Certificate Credentials",
    hint: "Asymmetric client authentication.",
    back: "Using <strong>asymmetric certificates</strong> for confidential client auth is more secure than client secrets because private keys never leave local host security stores.",
    tags: ["Microsoft Entra ID", "Certificates", "Client Secrets"]
  },
  {
    id: "azure-az204-fc-157",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Trusted Services Bypass",
    hint: "Enabling secure internal platform access.",
    back: "Enabling <strong>bypass = AzureServices</strong> allows authorized Azure platform services to access Key Vault through private Microsoft backbones despite firewalls.",
    tags: ["Key Vault", "Firewall", "Trusted Services"]
  },
  {
    id: "azure-az204-fc-158",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Microsoft Graph: JSON Batching ($batch)",
    hint: "Combining up to 20 requests in one payload.",
    back: "The <strong>$batch endpoint</strong> combines up to 20 independent Graph requests into a single HTTP POST, slashing mobile network latency.",
    tags: ["Microsoft Graph", "Batching", "Performance"]
  },
  {
    id: "azure-az204-fc-159",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Microsoft Graph: Delta Query",
    hint: "Tracking incremental entity changes.",
    back: "<strong>Delta Query</strong> returns an <code>@odata.deltaLink</code> token to retrieve only newly added, edited, or deleted objects on subsequent synchronization cycles.",
    tags: ["Microsoft Graph", "Delta Query", "Synchronization"]
  },
  {
    id: "azure-az204-fc-160",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage: Key 1 vs. Key 2 Equivalence",
    hint: "Identical permissions for seamless rotation.",
    back: "Key 1 and Key 2 have <strong>identical full permissions</strong>. Azure provides two keys solely to enable zero-downtime key rotation.",
    tags: ["Storage", "Access Keys", "Key Rotation"]
  },
  {
    id: "azure-az204-fc-161",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Connection Strings",
    hint: "Modern telemetry routing endpoints.",
    back: "Modern Application Insights SDKs require <strong>APPLICATIONINSIGHTS_CONNECTION_STRING</strong>, replacing legacy Instrumentation Keys with endpoint-aware connection strings.",
    tags: ["Application Insights", "Connection String", "Telemetry"]
  },
  {
    id: "azure-az204-fc-162",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: TelemetryClient Methods",
    hint: "Recording custom events and metrics.",
    back: "Use <strong>TrackMetric</strong> for numerical data (aggregates, values) and <strong>TrackEvent</strong> for named business occurrences (e.g. OrderCompleted).",
    tags: ["Application Insights", "TelemetryClient", "Custom Metrics"]
  },
  {
    id: "azure-az204-fc-163",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Telemetry Initializers",
    hint: "Global telemetry enrichment.",
    back: "Implement <strong>ITelemetryInitializer</strong> to append global properties (e.g. <code>TenantId</code>) to every trace, request, and exception automatically.",
    tags: ["Application Insights", "Telemetry Initializer", "Enrichment"]
  },
  {
    id: "azure-az204-fc-164",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Telemetry Processors",
    hint: "Dropping unwanted traces before ingestion.",
    back: "Implement <strong>ITelemetryProcessor</strong> to evaluate telemetry client-side and discard unwanted traces (e.g. <code>/health</code> pings) before network transmission.",
    tags: ["Application Insights", "Telemetry Processor", "Filtering"]
  },
  {
    id: "azure-az204-fc-165",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Sampling Types",
    hint: "Adaptive, Fixed-rate, and Ingestion sampling.",
    back: "<strong>Adaptive Sampling</strong> automatically adjusts sample rates client-side to manage volume. <strong>Fixed-rate</strong> uses a static percentage. <strong>Ingestion sampling</strong> filters at the cloud gateway.",
    tags: ["Application Insights", "Sampling", "Adaptive Sampling"]
  },
  {
    id: "azure-az204-fc-166",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Live Metrics Stream",
    hint: "Sub-second real-time diagnostics.",
    back: "<strong>Live Metrics Stream</strong> graphs requests, errors, and system health with <strong>1-second latency</strong>, ideal for monitoring deployments and diagnosing live outages.",
    tags: ["Application Insights", "Live Metrics", "Real-Time"]
  },
  {
    id: "azure-az204-fc-167",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Application Map",
    hint: "Visual dependency topology.",
    back: "<strong>Application Map</strong> automatically diagrams microservice dependencies, databases, and external APIs with visual health indicators and latency metrics.",
    tags: ["Application Insights", "Application Map", "Dependencies"]
  },
  {
    id: "azure-az204-fc-168",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Standard Web Tests",
    hint: "Global synthetic URL ping tests.",
    back: "<strong>Standard Web Tests</strong> probe HTTP endpoints from global geographic locations to verify uptime, response time, and SSL validity.",
    tags: ["Application Insights", "Availability Tests", "Web Tests"]
  },
  {
    id: "azure-az204-fc-169",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "KQL: Summarize and Bin Operators",
    hint: "Aggregating log events into time buckets.",
    back: "KQL uses <code>where</code> for filtering and <strong>summarize count() by bin(timestamp, 1h)</strong> to aggregate metric counts into hourly intervals.",
    tags: ["KQL", "Log Analytics", "Queries"]
  },
  {
    id: "azure-az204-fc-170",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "KQL: extend vs. project",
    hint: "Calculating and projecting columns.",
    back: "Use <strong>extend</strong> to create calculated columns (e.g. <code>extend durSec = duration / 1000</code>) and <strong>project</strong> to choose which columns to output.",
    tags: ["KQL", "extend", "project"]
  },
  {
    id: "azure-az204-fc-171",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "KQL: Cross-Workspace Queries",
    hint: "Querying across multiple workspaces.",
    back: "Use <strong>workspace('name')</strong> or <strong>app('name')</strong> in KQL to query and join log tables across multiple Log Analytics workspaces or Application Insights resources.",
    tags: ["KQL", "Cross-Workspace", "Log Analytics"]
  },
  {
    id: "azure-az204-fc-172",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Monitor: Metric vs. Log Alerts",
    hint: "Fast metric thresholds vs rich log queries.",
    back: "<strong>Metric Alerts</strong> evaluate numeric metrics frequently (every minute) for rapid alerting. <strong>Log Search Alerts</strong> run complex KQL queries on a slower schedule.",
    tags: ["Azure Monitor", "Metric Alerts", "Alerting"]
  },
  {
    id: "azure-az204-fc-173",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Azure Monitor: Action Groups",
    hint: "Multi-channel notifications and webhooks.",
    back: "An <strong>Action Group</strong> consolidates notification destinations (SMS/email) and automated actions (Functions/Logic Apps/Webhooks) triggered by alert rules.",
    tags: ["Azure Monitor", "Action Groups", "Automation"]
  },
  {
    id: "azure-az204-fc-174",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Profiler",
    hint: "Pinpointing slow method execution in production.",
    back: "<strong>Application Insights Profiler</strong> captures line-by-line call trees and method execution times for slow requests in live production environments.",
    tags: ["Application Insights", "Profiler", "Performance Optimization"]
  },
  {
    id: "azure-az204-fc-175",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    front: "Application Insights: Snapshot Debugger",
    hint: "Capturing call stacks and variable state on exceptions.",
    back: "<strong>Snapshot Debugger</strong> takes an in-memory snapshot of variables and call stacks when exceptions throw in production, enabling post-mortem visual debugging.",
    tags: ["Application Insights", "Snapshot Debugger", "Debugging"]
  }
];

export default AZURE_AZ204_FLASHCARDS_7;
