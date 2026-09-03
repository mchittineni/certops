export const AZURE_AZ204_QUESTIONS_7 = [
  {
    id: "azure-az204-151",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure RBAC Custom Role Definitions Anatomy",
    scenario: "A cloud administrator is authoring a custom Azure RBAC role definition to delegate management permissions on virtual machines.",
    question: "Which section of the role definition JSON specifies the control plane management operations that the role is permitted to perform?",
    options: [
      { id: 'A', text: "Actions" },
      { id: 'B', text: "NotActions" },
      { id: 'C', text: "DataActions" },
      { id: 'D', text: "AssignableScopes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Azure RBAC role definition consists of: `Actions` (management plane operations the role can perform), `NotActions` (operations excluded from Actions), `DataActions` (data plane operations, e.g. reading blob content), `NotDataActions`, and `AssignableScopes`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/role-definitions",
    tags: ["Azure RBAC", "Custom Roles", "Security"]
  },
  {
    id: "azure-az204-152",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Certificate Lifecycle Events in Event Grid",
    scenario: "A DevOps team needs to receive a Slack notification 30 days before any SSL certificate in Azure Key Vault expires.",
    question: "Which service receives near-real-time certificate lifecycle events from Key Vault and triggers notification webhooks?",
    options: [
      { id: 'A', text: "Azure Event Grid (Microsoft.KeyVault.CertificateNearExpiry event)" },
      { id: 'B', text: "Azure Service Bus Queue alone" },
      { id: 'C', text: "Log Analytics alerts alone" },
      { id: 'D', text: "Azure Application Insights" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Key Vault publishes lifecycle events directly to `Azure Event Grid`, including `CertificateNearExpiry`, `CertificateExpired`, `KeyNearExpiry`, and `SecretNearExpiry`, enabling event-driven automation for certificate rotations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/event-grid-overview",
    tags: ["Key Vault", "Event Grid", "Certificates"]
  },
  {
    id: "azure-az204-153",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra ID Security Defaults vs Conditional Access",
    scenario: "A startup enables Security Defaults in their Microsoft Entra ID tenant. The team wants to create custom Conditional Access rules that exempt a service account from MFA.",
    question: "What happens when an administrator attempts to configure Conditional Access while Security Defaults is enabled?",
    options: [
      { id: 'A', text: "Security Defaults must be disabled before custom Conditional Access policies can be created and activated" },
      { id: 'B', text: "Conditional Access rules override Security Defaults automatically" },
      { id: 'C', text: "Security Defaults and Conditional Access operate in parallel" },
      { id: 'D', text: "Conditional Access can only be used with on-premises servers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Security Defaults` is a basic, free security baseline that enforces MFA across all users. Because Security Defaults enforces fixed settings, custom `Conditional Access` policies require Security Defaults to be disabled and licenses (Entra ID P1/P2) to be active.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults",
    tags: ["Microsoft Entra ID", "Security Defaults", "Conditional Access"]
  },
  {
    id: "azure-az204-154",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Soft Delete Retention Days Customization",
    scenario: "When creating an Azure Key Vault, an administrator wants to configure the soft-delete retention window to 30 days instead of the default 90 days.",
    question: "Which property in the Key Vault resource definition specifies the retention duration?",
    options: [
      { id: 'A', text: "keyLifespanDays" },
      { id: 'B', text: "retentionWindowDays" },
      { id: 'C', text: "purgeProtectionDays" },
      { id: 'D', text: "softDeleteRetentionInDays (configurable between 7 and 90 days)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Azure Key Vault, `softDeleteRetentionInDays` specifies the number of days that deleted vaults and objects are retained in a recoverable state. It can be set between 7 and 90 days (default is 90 days).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#soft-delete-behavior",
    tags: ["Key Vault", "Soft Delete", "Retention Period"]
  },
  {
    id: "azure-az204-155",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Storage SAS Parameter: signed permissions (sp)",
    scenario: "A developer generates a Service SAS for an Azure Blob container that allows clients to upload new blobs and read existing blobs, but strictly forbids deleting blobs.",
    question: "Which value for the `sp` query parameter grants read, write, and list permissions without delete?",
    options: [
      { id: 'A', text: "sp=rwl" },
      { id: 'B', text: "sp=rwd" },
      { id: 'C', text: "sp=all" },
      { id: 'D', text: "sp=rwld" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Storage SAS tokens, the `sp` (signed permissions) parameter defines allowed actions using single-letter flags: `r` (read), `w` (write), `d` (delete), `l` (list), `a` (add), `c` (create). Setting `sp=rwl` grants read, write, and list while withholding `d`.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas#specify-permissions",
    tags: ["Storage", "SAS", "sp Parameter"]
  },
  {
    id: "azure-az204-156",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra ID App Registration Client Secrets vs Certificates",
    scenario: "An enterprise security standard requires confidential client applications to authenticate to Microsoft Entra ID using cryptographic certificates instead of shared password secrets.",
    question: "Why are certificates considered more secure than client secrets for daemon authentication?",
    options: [
      { id: 'A', text: "Certificates use asymmetric cryptography where the private key never leaves the client host, eliminating the risk of credential interception" },
      { id: 'B', text: "Certificates never expire under any circumstances" },
      { id: 'C', text: "Certificates bypass Microsoft Entra ID validation checks" },
      { id: 'D', text: "Certificates require no configuration in App Registrations" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Authenticating with certificates (asymmetric keys) provides higher security than symmetric client secrets. The private key remains secure on the client machine or Key Vault, and only the public certificate is uploaded to Microsoft Entra ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/certificate-credentials",
    tags: ["Microsoft Entra ID", "Certificates", "Client Secrets"]
  },
  {
    id: "azure-az204-157",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Key Vault Networking: Trusted Microsoft Services Bypass",
    scenario: "An Azure Key Vault has its firewall enabled, blocking all public internet traffic. Azure App Service needs to access Key Vault references through the platform.",
    question: "Which setting allows authorized Microsoft platform services to bypass Key Vault firewall rules?",
    options: [
      { id: 'A', text: "Allow trusted Microsoft services to bypass this firewall (bypass = AzureServices)" },
      { id: 'B', text: "Disable Key Vault authentication completely" },
      { id: 'C', text: "Open port 80 to 0.0.0.0/0" },
      { id: 'D', text: "Set defaultAction to Allow" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When Key Vault firewall is set to `defaultAction: Deny`, checking `Allow trusted Microsoft services to bypass this firewall` (`bypass: AzureServices`) allows secure internal Azure services (like App Service, Azure Backup, and Event Grid) to connect securely.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview-vnet-service-endpoints#trusted-services",
    tags: ["Key Vault", "Firewall", "Trusted Services"]
  },
  {
    id: "azure-az204-158",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph SDK Batching Requests",
    scenario: "A developer needs to execute 15 independent queries against Microsoft Graph (e.g. fetching 15 different user details) from a mobile application over a slow cellular link.",
    question: "Which Microsoft Graph feature combines multiple requests into a single HTTP POST payload?",
    options: [
      { id: 'A', text: "JSON Batching ($batch endpoint)" },
      { id: 'B', text: "Executing 15 parallel HTTP calls" },
      { id: 'C', text: "Microsoft Graph Webhooks" },
      { id: 'D', text: "Delta Query" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Graph supports JSON batching via the `https://graph.microsoft.com/v1.0/$batch` endpoint. Developers combine up to 20 individual requests into a single JSON payload, drastically reducing network round-trips and cellular latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/json-batching",
    tags: ["Microsoft Graph", "Batching", "Performance"]
  },
  {
    id: "azure-az204-159",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph Delta Query for Incremental Synchronization",
    scenario: "An identity management tool synchronizes user account changes from Microsoft Entra ID every hour. Querying all 100,000 users on each sync cycle is slow and wasteful.",
    question: "Which Microsoft Graph feature tracks incremental additions, updates, and deletions using delta tokens?",
    options: [
      { id: 'A', text: "Graph Webhooks alone without tokens" },
      { id: 'B', text: "OData $filter queries alone" },
      { id: 'C', text: "Microsoft Graph Delta Query" },
      { id: 'D', text: "Graph JSON Batching" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Graph `Delta Query` allows applications to discover newly created, updated, or deleted entities through periodic calls. The API returns a `@odata.deltaLink` containing a state token used on the next run to fetch only changes that occurred since the last query.",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/delta-query-overview",
    tags: ["Microsoft Graph", "Delta Query", "Synchronization"]
  },
  {
    id: "azure-az204-160",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Storage Account Key 1 and Key 2 Administrative Distinction",
    scenario: "A developer is asked why Azure Storage accounts provide two separate access keys (Key 1 and Key 2).",
    question: "What is the operational difference between Key 1 and Key 2 in terms of permissions?",
    options: [
      { id: 'A', text: "Key 1 is for Blob storage only; Key 2 is for Queue storage only" },
      { id: 'B', text: "There is no difference in permissions; both keys have identical full administrative access to the storage account and exist to enable zero-downtime rotation" },
      { id: 'C', text: "Key 1 is read-only; Key 2 is read-write" },
      { id: 'D', text: "Key 1 expires after 30 days; Key 2 never expires" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Key 1 and Key 2 possess identical root administrative permissions across all services in the storage account. Azure provides two keys solely to facilitate zero-downtime key rotation: applications use one key while the administrator regenerates the other.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage",
    tags: ["Storage", "Access Keys", "Key Rotation"]
  },
  {
    id: "azure-az204-161",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Connection Strings vs Instrumentation Keys",
    scenario: "A development team is instrumenting an Azure App Service application with Application Insights. Microsoft documentation states that legacy Instrumentation Keys are deprecated.",
    question: "Which configuration value should the application use to direct telemetry to the target Application Insights resource?",
    options: [
      { id: 'A', text: "The Application Insights Connection String (APPLICATIONINSIGHTS_CONNECTION_STRING)" },
      { id: 'B', text: "An Azure Storage SAS token" },
      { id: 'C', text: "The legacy APPINSIGHTS_INSTRUMENTATIONKEY alone" },
      { id: 'D', text: "The subscription ID" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Application Insights requires `Connection Strings` for ingestion. Connection strings include the ingestion endpoint URL, location hints, and authorization keys in a single unified string (`InstrumentationKey=...;IngestionEndpoint=https://...`), supporting sovereign clouds and private endpoints.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sdk-connection-string",
    tags: ["Application Insights", "Connection String", "Telemetry"]
  },
  {
    id: "azure-az204-162",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "TelemetryClient API Methods for Custom Application Telemetry",
    scenario: "A developer is instrumenting a checkout workflow in C# to record a custom business metric `OrderValue` and track when an order is completed.",
    question: "Which TelemetryClient methods should the developer invoke?",
    options: [
      { id: 'A', text: "TrackException only" },
      { id: 'B', text: "TrackAvailability for business transactions" },
      { id: 'C', text: "TrackMetric for recording numerical values and TrackEvent for named business occurrences" },
      { id: 'D', text: "TrackTrace for numbers and TrackDependency for events" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `TelemetryClient` class in Application Insights provides specialized methods: `TrackMetric` (for numerical measurements and counts), `TrackEvent` (for named user or business milestones), `TrackTrace` (diagnostic logs), `TrackException` (errors), and `TrackDependency` (outbound calls).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics",
    tags: ["Application Insights", "TelemetryClient", "Custom Metrics"]
  },
  {
    id: "azure-az204-163",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Custom Telemetry Initializers to Enrich Telemetry",
    scenario: "A multi-tenant SaaS application needs every log, request, exception, and dependency tracked in Application Insights to automatically include a `TenantId` custom property.",
    question: "Which Application Insights component intercepts all telemetry items and adds contextual properties globally?",
    options: [
      { id: 'A', text: "An Azure Functions output binding" },
      { id: 'B', text: "A custom Telemetry Processor" },
      { id: 'C', text: "A KQL query filter" },
      { id: 'D', text: "A Custom Telemetry Initializer (implementing ITelemetryInitializer)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An `ITelemetryInitializer` intercepts every telemetry item emitted by the application before it is processed or sent. Developers add custom properties (like `TenantId` or environment names) to the `telemetry.Context.GlobalProperties` dictionary, enriching all traces uniformly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#add-properties-itelemetryinitializer",
    tags: ["Application Insights", "Telemetry Initializer", "Enrichment"]
  },
  {
    id: "azure-az204-164",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Custom Telemetry Processors to Filter Unwanted Traces",
    scenario: "A high-traffic web application's health check endpoint `/health` is pinged every 2 seconds by load balancers, flooding Application Insights and driving up ingestion costs.",
    question: "Which Application Insights component can evaluate telemetry items and drop requests matching `/health` before they leave the application?",
    options: [
      { id: 'A', text: "A Telemetry Initializer" },
      { id: 'B', text: "A KQL where clause in Azure Monitor" },
      { id: 'C', text: "A Custom Telemetry Processor (implementing ITelemetryProcessor)" },
      { id: 'D', text: "An Application Map filter" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An `ITelemetryProcessor` sits in the client-side telemetry processing pipeline. By implementing the `Process(ITelemetry item)` method, developers can inspect incoming requests and return without calling `Next.Process(item)` to filter out unwanted health check traces completely.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#filtering-itelemetryprocessor",
    tags: ["Application Insights", "Telemetry Processor", "Filtering"]
  },
  {
    id: "azure-az204-165",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling Types: Adaptive vs Fixed vs Ingestion",
    scenario: "An ASP.NET Core web application experiences fluctuating traffic. The developer wants Application Insights to automatically adjust the percentage of sampled telemetry based on incoming traffic volume.",
    question: "Which sampling type dynamically regulates the volume of telemetry sent from the application SDK?",
    options: [
      { id: 'A', text: "Adaptive Sampling" },
      { id: 'B', text: "Fixed-Rate Sampling" },
      { id: 'C', text: "Ingestion Sampling" },
      { id: 'D', text: "Manual Sampling" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Insights supports three sampling types: `Adaptive Sampling` (automatically adjusts sampling percentage in ASP.NET/ASP.NET Core SDK to stay within a target rate), `Fixed-rate Sampling` (static percentage set by developer), and `Ingestion Sampling` (sampling at the Azure Monitor service endpoint).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "Sampling", "Adaptive Sampling"]
  },
  {
    id: "azure-az204-166",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Live Metrics Stream",
    scenario: "A development team deploys a critical hotfix to an Azure App Service web app and needs to monitor real-time CPU usage, incoming request rates, and failure exceptions with sub-second latency.",
    question: "Which Application Insights feature provides near-real-time (1-second latency) telemetry graphs?",
    options: [
      { id: 'A', text: "Live Metrics Stream (QuickPulse)" },
      { id: 'B', text: "Application Map" },
      { id: 'C', text: "Log Analytics workspace KQL queries" },
      { id: 'D', text: "Metrics Explorer standard graphs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Application Insights `Live Metrics Stream` (QuickPulse) displays incoming request rates, failure counts, CPU/memory consumption, and individual exception traces with approximately 1 second of latency, allowing developers to observe hotfix deployments live in production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/live-stream",
    tags: ["Application Insights", "Live Metrics", "Real-Time"]
  },
  {
    id: "azure-az204-167",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Application Map for Dependency Bottlenecks",
    scenario: "A distributed microservice architecture experiences latency spikes. Operators need a visual topology map showing which downstream SQL database or external HTTP API has high failure rates or slow responses.",
    question: "Which Application Insights view visualizes architectural dependencies and their respective health KPIs?",
    options: [
      { id: 'A', text: "Transaction Diagnostics alone" },
      { id: 'B', text: "Smart Detection" },
      { id: 'C', text: "Live Metrics Stream" },
      { id: 'D', text: "Application Map" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Application Insights `Application Map` automatically visualizes all interconnected components, microservices, databases, and third-party APIs. Each node displays average call durations, request counts, and error rates, highlighting failing dependencies in red.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map",
    tags: ["Application Insights", "Application Map", "Dependencies"]
  },
  {
    id: "azure-az204-168",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Availability Web Tests: Standard vs Custom Multi-Step",
    scenario: "An operations engineer needs to verify that a web application is online and responds with HTTP status 200 within 5 seconds from 5 global locations every 5 minutes.",
    question: "Which Application Insights availability test type performs a single-URL ping check with SSL validation?",
    options: [
      { id: 'A', text: "KQL alert rule" },
      { id: 'B', text: "Live Metrics stream" },
      { id: 'C', text: "Standard Test (URL ping test)" },
      { id: 'D', text: "Custom TrackAvailability test alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Application Insights `Standard Tests` (URL ping tests) probe a single HTTP endpoint from multiple globally distributed Azure points of presence at regular intervals, validating HTTP response codes, response timeouts, SSL certificate validity, and content matches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview#standard-test",
    tags: ["Application Insights", "Availability Tests", "Web Tests"]
  },
  {
    id: "azure-az204-169",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Kusto Query Language (KQL) Filtering and Aggregating Requests",
    scenario: "A developer is querying the `requests` table in Log Analytics to calculate the total number of failed HTTP requests grouped by hour over the last 24 hours.",
    question: "Which KQL query satisfies this requirement?",
    options: [
      { id: 'A', text: "requests | select failed where time = 24h | group by hour" },
      { id: 'B', text: "SELECT count(*) FROM requests WHERE success = 0 GROUP BY date" },
      { id: 'C', text: "requests | where timestamp > ago(24h) and success == false | summarize count() by bin(timestamp, 1h)" },
      { id: 'D', text: "requests | filter error | aggregate hourly" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In KQL, the pipe `|` operator chains operations. `where timestamp > ago(24h) and success == false` filters the dataset, and `summarize count() by bin(timestamp, 1h)` groups the results into 1-hour time buckets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/get-started-queries",
    tags: ["KQL", "Log Analytics", "Queries"]
  },
  {
    id: "azure-az204-170",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Kusto Query Language (KQL) Project and Extend Operators",
    scenario: "A developer writes a KQL query on the `dependencies` table. The developer needs to calculate a new column `durationInSeconds` by dividing `duration` by 1000, and output only `name`, `target`, and `durationInSeconds`.",
    question: "Which two KQL operators calculate the new column and select the output fields respectively?",
    options: [
      { id: 'A', text: "extend calculates the new column, and project selects and orders the output columns" },
      { id: 'B', text: "evaluate creates the column, and table filters it" },
      { id: 'C', text: "project calculates the column, and select filters fields" },
      { id: 'D', text: "summarize calculates the column, and render outputs it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In KQL, `extend` computes derived calculated columns without modifying existing columns. `project` selects, renames, or drops specific columns to produce the final output schema.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/project-operator",
    tags: ["KQL", "extend", "project"]
  },
  {
    id: "azure-az204-171",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "KQL Cross-Resource Queries Across Workspaces",
    scenario: "A central DevOps team needs to write a KQL query that correlates error logs across two distinct Log Analytics workspaces in different resource groups.",
    question: "Which KQL function queries an external workspace by name or resource ID?",
    options: [
      { id: 'A', text: "workspace('workspaceName')" },
      { id: 'B', text: "app('appName')" },
      { id: 'C', text: "database('dbName')" },
      { id: 'D', text: "external('workspaceId')" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "KQL supports cross-resource queries using the `workspace('workspaceName')` function (for Log Analytics workspaces) and `app('appName')` function (for Application Insights components), allowing unified queries across multiple distributed monitoring repositories.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cross-workspace-query",
    tags: ["KQL", "Cross-Workspace", "Log Analytics"]
  },
  {
    id: "azure-az204-172",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Metric Alerts vs Log Search Alerts",
    scenario: "An on-call team wants an alert to fire within 1 minute whenever App Service average CPU utilization exceeds 90% across a 5-minute evaluation window.",
    question: "Which Azure Monitor alert rule type provides sub-minute metric evaluation and lowest alert latency?",
    options: [
      { id: 'A', text: "Metric Alert" },
      { id: 'B', text: "Log Search Alert" },
      { id: 'C', text: "Activity Log Alert" },
      { id: 'D', text: "Service Health Alert" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Metric Alerts` run at frequent intervals (e.g. every minute) against pre-aggregated, non-dimensional or multi-dimensional numeric metrics, providing fast alert evaluation with minimal latency. `Log Search Alerts` run KQL queries on logs and have higher latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types#metric-alerts",
    tags: ["Azure Monitor", "Metric Alerts", "Alerting"]
  },
  {
    id: "azure-az204-173",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Azure Monitor Action Groups for Automated Incident Response",
    scenario: "When an Azure Monitor alert fires, the system must automatically notify on-call engineers via SMS, trigger a webhook to PagerDuty, and invoke an Azure Function to restart a service.",
    question: "Which Azure Monitor resource groups these diverse notification and automation actions together?",
    options: [
      { id: 'A', text: "An Action Group" },
      { id: 'B', text: "An Autoscale Setting" },
      { id: 'C', text: "An Alert Processing Rule alone" },
      { id: 'D', text: "A Log Analytics Workspace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Azure Monitor `Action Group` is a collection of notification preferences (email, SMS, push, voice) and automated actions (Webhook, Azure Function, Logic App, Automation Runbook) executed whenever an associated alert rule triggers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups",
    tags: ["Azure Monitor", "Action Groups", "Automation"]
  },
  {
    id: "azure-az204-174",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Profiler for Performance Bottlenecks",
    scenario: "A production web application on Azure App Service experiences intermittent response delays where certain requests take 12 seconds. CPU utilization is normal and logs show no exceptions.",
    question: "Which Application Insights feature captures detailed function-level execution call stacks and timing for slow live production requests?",
    options: [
      { id: 'A', text: "Snapshot Debugger" },
      { id: 'B', text: "Application Insights Profiler" },
      { id: 'C', text: "Live Metrics Stream" },
      { id: 'D', text: "Smart Detection alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Application Insights Profiler` runs as an agent in the production environment. When request duration exceeds threshold triggers, Profiler captures call tree traces and CPU samples, showing line-by-line method execution durations without needing debugging symbols or restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/profiler",
    tags: ["Application Insights", "Profiler", "Performance Optimization"]
  },
  {
    id: "azure-az204-175",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Snapshot Debugger for Exception State",
    scenario: "A critical bug in production throws a `NullReferenceException`. The developer cannot reproduce the bug locally and needs to inspect the in-memory variables and call stack at the moment the exception occurred.",
    question: "Which feature captures memory state and local variables upon production exceptions without impacting users?",
    options: [
      { id: 'A', text: "Snapshot Debugger" },
      { id: 'B', text: "Profiler" },
      { id: 'C', text: "Live Metrics Stream" },
      { id: 'D', text: "Diagnostic Settings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Insights `Snapshot Debugger` automatically captures a debug snapshot of local memory variables, parameters, and the exact call stack when an unhandled exception occurs in production, allowing developers to inspect state in Visual Studio or the Azure portal.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/snapshot-debugger",
    tags: ["Application Insights", "Snapshot Debugger", "Debugging"]
  }
];

export default AZURE_AZ204_QUESTIONS_7;
