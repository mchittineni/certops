export const AZURE_AZ204_QUESTIONS_5 = [
  {
    id: "azure-az204-101",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Excluded Paths in Indexing Policies",
    scenario: "A Cosmos DB container stores documents with large 1 MB payload strings under `/largePayload`. The application never queries or filters on this property.",
    question: "How can the developer reduce Request Unit (RU) write consumption when inserting documents?",
    options: [
      { id: 'A', text: "Set indexingMode to None on the whole container" },
      { id: 'B', text: "Compress the payload client-side only" },
      { id: 'C', text: "Add an excludedPath for /largePayload/* in the container indexing policy" },
      { id: 'D', text: "Change the partition key to largePayload" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, Cosmos DB indexes every property in a document. Adding an `excludedPath` (e.g. `path: '/largePayload/*'` to `excludedPaths`) excludes that specific subtree from indexing, significantly reducing RU write charges and index storage overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy#include-exclude-paths",
    tags: ["Cosmos DB", "Indexing Policy", "Excluded Paths"]
  },
  {
    id: "azure-az204-102",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Pre-Triggers vs Post-Triggers Rollback",
    scenario: "A developer writes an Azure Cosmos DB JavaScript pre-trigger to validate order totals before saving documents. If the validation check fails, the pre-trigger must abort the document write.",
    question: "How does a Cosmos DB pre-trigger cancel the pending write operation?",
    options: [
      { id: 'A', text: "Throwing an error/exception inside the JavaScript trigger function" },
      { id: 'B', text: "Calling context.abortTransaction()" },
      { id: 'C', text: "Returning false from the function" },
      { id: 'D', text: "Returning an empty string" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Cosmos DB, pre-triggers and post-triggers execute within the same ACID transactional scope as the operation. If a pre-trigger encounters invalid input and throws an exception, the entire transaction is cancelled and the document is not committed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/how-to-write-stored-procedures-triggers-udfs#pre-triggers",
    tags: ["Cosmos DB", "Triggers", "Pre-Triggers"]
  },
  {
    id: "azure-az204-103",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB User-Defined Functions (UDF) in SQL Queries",
    scenario: "A developer needs to apply a custom mathematical tax formula across product prices in an Azure Cosmos DB SQL query: `SELECT c.id, udf.CalculateTax(c.price) AS total FROM c`.",
    question: "What is a key constraint when writing User-Defined Functions (UDFs) in Cosmos DB?",
    options: [
      { id: 'A', text: "UDFs can only be written in Python" },
      { id: 'B', text: "UDFs can execute transactions across partitions" },
      { id: 'C', text: "UDFs run only once per container" },
      { id: 'D', text: "UDFs are read-only, cannot modify documents, and do not have access to the context object for database operations" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cosmos DB User-Defined Functions (UDFs) extend the SQL query language using JavaScript. UDFs are strictly computational and read-only; they cannot make database calls, read context objects, or perform write operations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/how-to-write-stored-procedures-triggers-udfs#udfs",
    tags: ["Cosmos DB", "UDF", "SQL Query"]
  },
  {
    id: "azure-az204-104",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Bulk Execution Mode in .NET SDK",
    scenario: "An ingestion pipeline imports 1,000,000 records into an Azure Cosmos DB container. Individual `CreateItemAsync` calls suffer high latency and throughput throttling.",
    question: "Which CosmosClient setting enables automated high-throughput batching in the .NET SDK?",
    options: [
      { id: 'A', text: "EnableTcpKeepAlive = false" },
      { id: 'B', text: "ConnectionMode = Gateway" },
      { id: 'C', text: "MaxRetryAttemptsOnRateLimitedRequests = 0" },
      { id: 'D', text: "AllowBulkExecution = true in CosmosClientOptions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `AllowBulkExecution = true` in `CosmosClientOptions` optimizes the .NET SDK for high-throughput batch writes. The SDK internally batches concurrent requests across partition keys, optimizing RU utilization and saturating available network bandwidth efficiently.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/how-to-migrate-from-bulk-executor-library",
    tags: ["Cosmos DB", "Bulk Execution", "Performance"]
  },
  {
    id: "azure-az204-105",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Point-in-Time Recovery (Continuous Backup)",
    scenario: "A database administrator needs to restore a Cosmos DB container to its exact state from yesterday at 14:32 UTC following an erroneous data update script.",
    question: "Which backup policy must be configured on the Cosmos DB account to enable minute-by-minute point-in-time recovery?",
    options: [
      { id: 'A', text: "Azure Backup Vault" },
      { id: 'B', text: "Continuous backup mode (30-day retention)" },
      { id: 'C', text: "Periodic backup mode (default 4-hour interval)" },
      { id: 'D', text: "Offline snapshot backup mode" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cosmos DB `Continuous backup` mode provides continuous background backups with a 30-day retention window. Administrators can restore any container, database, or account to any exact second within the retention window.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/continuous-backup-introduction",
    tags: ["Cosmos DB", "Point-in-Time Recovery", "Continuous Backup"]
  },
  {
    id: "azure-az204-106",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Object Replication across Regions",
    scenario: "An enterprise requires asynchronous, block-level object replication from a source storage account in `East US` to a destination storage account in `West Europe`.",
    question: "Which feature automatically replicates blobs across storage accounts according to prefix rules?",
    options: [
      { id: 'A', text: "Object Replication" },
      { id: 'B', text: "AzCopy manual cron job" },
      { id: 'C', text: "Azure Data Factory copy pipeline" },
      { id: 'D', text: "Storage account failover" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage `Object Replication` asynchronously replicates block blobs from a source container to a destination container in another storage account and region based on prefix match rules, requiring Blob Versioning and Change Feed enabled on both accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Blob Storage", "Object Replication", "Cross-Region"]
  },
  {
    id: "azure-az204-107",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Metadata vs Index Tags",
    scenario: "A developer is evaluating whether to use Blob Metadata (`x-ms-meta-`) or Blob Index Tags for storing document attributes like `Author` and `DocStatus`.",
    question: "What is a primary advantage of Blob Index Tags over Blob Metadata?",
    options: [
      { id: 'A', text: "Index Tags can only contain integer numbers" },
      { id: 'B', text: "Metadata is automatically encrypted with RSA keys" },
      { id: 'C', text: "Index Tags are searchable via SQL-like queries across containers without downloading blobs, whereas Metadata cannot be queried directly without listing and reading each blob" },
      { id: 'D', text: "Metadata supports up to 10 GB per blob; Index Tags support only 1 byte" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Blob Metadata consists of key-value pairs stored in HTTP headers that can only be read when retrieving or listing the specific blob. In contrast, Blob Index Tags are automatically indexed by Azure Storage, enabling fast queries (`FindBlobsByTags`) across the entire account without scanning.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Blob Storage", "Index Tags", "Metadata"]
  },
  {
    id: "azure-az204-108",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Container Public Access Levels",
    scenario: "A developer configures an Azure Blob Storage container. Public anonymous users on the internet need to download images directly via URLs, but must not be allowed to enumerate or list all blobs in the container.",
    question: "Which public access level should the developer set on the container?",
    options: [
      { id: 'A', text: "Container (anonymous read and list access)" },
      { id: 'B', text: "Blob (anonymous read access for blobs only)" },
      { id: 'C', text: "Full public admin access" },
      { id: 'D', text: "Private (no anonymous access)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Blob Storage supports three container public access levels: `Private` (no anonymous access), `Blob` (anonymous read access to blob contents via direct URL, but container listing is forbidden), and `Container` (anonymous read and listing of all blobs in the container).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure",
    tags: ["Blob Storage", "Public Access", "Security"]
  },
  {
    id: "azure-az204-109",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Session Token Propagation Across Web Tiers",
    scenario: "A user submits a profile update on a web application. The subsequent HTTP request from the same user is routed to a different web server instance.",
    question: "How does the web application ensure the second server reads the user's latest update under Session consistency?",
    options: [
      { id: 'A', text: "Bind the user to a dedicated physical database replica" },
      { id: 'B', text: "Add a 10-second sleep before reading" },
      { id: 'C', text: "Extract the SessionToken from the write response and pass it in the subsequent request's ItemRequestOptions" },
      { id: 'D', text: "Switch the database to Strong consistency globally" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cosmos DB Session consistency uses session tokens. When a write completes, the response includes an `x-ms-session-token`. By propagating this token to client cookies and passing it into `ItemRequestOptions.SessionToken` on subsequent reads, any server can guarantee read-your-writes consistency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels#session-consistency",
    tags: ["Cosmos DB", "Session Token", "Consistency"]
  },
  {
    id: "azure-az204-110",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Shared Key Authorization Disabling",
    scenario: "A corporate security policy mandates that access to Azure Storage accounts must only use Microsoft Entra ID (Azure AD) and that legacy Account Keys must be blocked.",
    question: "Which Storage Account configuration setting disables Shared Key authentication?",
    options: [
      { id: 'A', text: "Delete Key 1 and Key 2 permanently" },
      { id: 'B', text: "Enable Storage Account Firewall" },
      { id: 'C', text: "Enable Static Website hosting" },
      { id: 'D', text: "Allow Shared Key access set to Disabled (allowSharedKeyAccess = false)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting `allowSharedKeyAccess = false` disables authentication via account shared access keys and Account/Service SAS tokens, enforcing that all incoming requests authenticate via Microsoft Entra ID (Azure AD) RBAC roles or User Delegation SAS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/shared-key-authorization-prevent",
    tags: ["Storage", "Shared Key", "Security"]
  },
  {
    id: "azure-az204-111",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage AppendBlock Concurrent Appends",
    scenario: "Multiple telemetry ingestion threads write to an Append Blob using `AppendBlock`. The application must ensure that appends are applied conditionally only if the blob's current size matches an expected offset.",
    question: "Which condition header enforces append offset matching?",
    options: [
      { id: 'A', text: "If-Match with an ETag only" },
      { id: 'B', text: "x-ms-lease-id" },
      { id: 'C', text: "x-ms-blob-condition-appendpos" },
      { id: 'D', text: "x-ms-range" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `x-ms-blob-condition-appendpos` header specifies that the `AppendBlock` operation will succeed only if the blob's current committed size matches the specified byte position, preventing out-of-order or duplicate concurrent appends.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/append-block#request-headers",
    tags: ["Blob Storage", "AppendBlock", "Concurrency"]
  },
  {
    id: "azure-az204-112",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Partition Key Range Throttling Isolation",
    scenario: "An application with 10 physical partitions in Azure Cosmos DB generates heavy write spikes on Partition Key A, causing HTTP 429 errors on writes to that key.",
    question: "How does Cosmos DB partition isolation impact reads and writes targeting other partition keys?",
    options: [
      { id: 'A', text: "The container is automatically deleted" },
      { id: 'B', text: "All queries across the entire database are completely frozen" },
      { id: 'C', text: "Operations targeting other physical partitions continue operating normally because RU/s capacity is allocated independently across physical partitions" },
      { id: 'D', text: "Cosmos DB switches all partitions to read-only mode" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure Cosmos DB, physical partitions are isolated. Throttling (HTTP 429) on a hot partition key impacts only that specific physical partition. Other partitions with available RU capacity continue to process requests without interference.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/troubleshoot-request-rate-too-large#step-2-determine-if-there-is-a-hot-partition",
    tags: ["Cosmos DB", "Partition Isolation", "Throttling"]
  },
  {
    id: "azure-az204-113",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB FeedIterator with QueryDefinition Parameterized SQL",
    scenario: "A developer executes a query against Azure Cosmos DB filtering by user input: `SELECT * FROM c WHERE c.email = @email`.",
    question: "Why should the developer use QueryDefinition with parameters instead of raw string concatenation?",
    options: [
      { id: 'A', text: "Parameterized queries prevent SQL injection attacks and optimize query execution plan caching in the database engine" },
      { id: 'B', text: "Cosmos DB does not support string concatenation in SQL queries" },
      { id: 'C', text: "Parameterized queries bypass Request Unit charges completely" },
      { id: 'D', text: "Parameters allow queries to span across unrelated Azure subscriptions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using `QueryDefinition.WithParameter('@email', email)` protects applications from SQL injection attacks and allows Cosmos DB to compile and cache the query plan efficiently, reducing RU overhead across repeated executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-query-parameterized-queries",
    tags: ["Cosmos DB", "Parameterized Queries", "Security"]
  },
  {
    id: "azure-az204-114",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage LeaseBlob for Distributed File Locks",
    scenario: "A cluster of background worker instances process a large data file in Azure Blob Storage. Exactly one worker instance must acquire an exclusive write lock on the blob for 30 seconds.",
    question: "Which API operation creates and manages exclusive write locks on Azure Blobs?",
    options: [
      { id: 'A', text: "AcquireLease (LeaseBlob)" },
      { id: 'B', text: "SnapshotBlob" },
      { id: 'C', text: "SetBlobMetadata" },
      { id: 'D', text: "CopyBlob" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage supports leases via `AcquireLease` (`LeaseBlob`). A lease provides a one-minute or infinite exclusive lock on a blob. While a lease is active, any write or delete request that does not include the `x-ms-lease-id` header is rejected.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/lease-blob",
    tags: ["Blob Storage", "LeaseBlob", "Distributed Locking"]
  },
  {
    id: "azure-az204-115",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Change Feed Pull Model vs Push Model",
    scenario: "A developer is building a batch pipeline that reads changes from Azure Cosmos DB periodically on a schedule, rather than maintaining continuous serverless event listeners.",
    question: "Which Change Feed consumption model allows on-demand polling with FeedIterator?",
    options: [
      { id: 'A', text: "The Cosmos DB Stored Procedure model" },
      { id: 'B', text: "The Change Feed Push Model (Azure Functions trigger)" },
      { id: 'C', text: "The Change Feed Pull Model" },
      { id: 'D', text: "The Change Feed Kafka Connector" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cosmos DB supports two Change Feed models: `Push Model` (event-driven using Azure Functions or Change Feed Processor that processes events continuously as they arrive) and `Pull Model` (pulls changes on demand per partition key or feed iterator, ideal for scheduled batch jobs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/change-feed-pull-model",
    tags: ["Cosmos DB", "Change Feed", "Pull Model"]
  },
  {
    id: "azure-az204-116",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "MSAL PublicClientApplication vs ConfidentialClientApplication",
    scenario: "A developer is implementing user authentication using the Microsoft Authentication Library (MSAL). The client is a React single-page application running in a browser.",
    question: "Which MSAL client application class should the developer instantiate?",
    options: [
      { id: 'A', text: "ConfidentialClientApplication" },
      { id: 'B', text: "PublicClientApplication (cannot securely store client secrets)" },
      { id: 'C', text: "ServicePrincipalClientApplication" },
      { id: 'D', text: "ManagedIdentityApplication" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In MSAL, `PublicClientApplication` is designed for apps that run on client devices (web browsers, mobile apps, desktop apps) where client secrets cannot be kept confidential. `ConfidentialClientApplication` is for secure backend servers that safely hold private credentials.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["MSAL", "PublicClient", "OAuth"]
  },
  {
    id: "azure-az204-117",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE for SPAs",
    scenario: "A single-page application (SPA) authenticates users against Microsoft Entra ID. Security standards prohibit using the legacy Implicit Grant flow due to token interception risks.",
    question: "Which modern OAuth 2.0 flow is recommended for SPAs with Microsoft Entra ID?",
    options: [
      { id: 'A', text: "Implicit Grant Flow with id_token" },
      { id: 'B', text: "Resource Owner Password Credentials (ROPC)" },
      { id: 'C', text: "Authorization Code Flow with Proof Key for Code Exchange (PKCE)" },
      { id: 'D', text: "Client Credentials Flow" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra ID recommends the OAuth 2.0 `Authorization Code Flow with PKCE` for all single-page applications. PKCE cryptographically binds the authorization code request to the token exchange using a code challenge and code verifier, preventing code interception attacks.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth", "PKCE", "Microsoft Entra ID"]
  },
  {
    id: "azure-az204-118",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Client Credentials Flow for Daemon Services",
    scenario: "A nocturnal batch synchronization service runs unattended on an Azure VM. The service needs to authenticate with Microsoft Graph to read tenant user lists without user interaction.",
    question: "Which OAuth 2.0 grant flow should the service use to acquire an access token?",
    options: [
      { id: 'A', text: "On-Behalf-Of (OBO) Flow" },
      { id: 'B', text: "Device Code Flow" },
      { id: 'C', text: "Client Credentials Flow" },
      { id: 'D', text: "Authorization Code Flow" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Client Credentials Flow` is designed for machine-to-machine (M2M) server-side daemon processes. The application authenticates using its own application ID and client secret (or certificate) to obtain an access token representing the application rather than a delegated user.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow",
    tags: ["OAuth", "Client Credentials", "Daemon"]
  },
  {
    id: "azure-az204-119",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra Delegated Permissions vs Application Permissions",
    scenario: "An enterprise API registration in Microsoft Entra ID exposes permissions to Microsoft Graph. The API must access calendar items only when an authenticated user is present and has authorized the app.",
    question: "Which permission type must the developer request in the App Registration?",
    options: [
      { id: 'A', text: "Subscription Permissions" },
      { id: 'B', text: "Delegated Permissions (e.g. Calendars.Read)" },
      { id: 'C', text: "Application Permissions (e.g. Calendars.ReadWrite.All)" },
      { id: 'D', text: "Owner Permissions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Delegated permissions` are used when an application acts on behalf of a signed-in user, restricting access to resources the user is permitted to access. `Application permissions` allow the app to access resources directly without user presence (typically requiring admin consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview#types-of-permissions",
    tags: ["Microsoft Entra ID", "Permissions", "Delegated Permissions"]
  },
  {
    id: "azure-az204-120",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Managed Identities: System-Assigned vs User-Assigned",
    scenario: "A developer is evaluating Managed Identities for an Azure App Service that will be deployed to 5 identical staging environments. The developer wants a single identity lifecycle that persists across resource deletions.",
    question: "Which Managed Identity type is created as a standalone Azure resource independent of individual service lifecycles?",
    options: [
      { id: 'A', text: "User-Assigned Managed Identity" },
      { id: 'B', text: "System-Assigned Managed Identity" },
      { id: 'C', text: "Service Principal with secret" },
      { id: 'D', text: "Azure AD B2C Account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `User-Assigned Managed Identity` is created as an independent standalone Azure resource that can be shared across multiple Azure resources (e.g. 5 App Services) and persists even if the consuming resources are deleted. A `System-Assigned` identity is tied strictly to the lifecycle of a single resource.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview#managed-identity-types",
    tags: ["Managed Identity", "User-Assigned", "Security"]
  },
  {
    id: "azure-az204-121",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure.Identity DefaultAzureCredential Resolution Order",
    scenario: "A developer writes C# code using `DefaultAzureCredential` to connect to Azure Key Vault. The code must authenticate seamlessly when running locally in Visual Studio and when deployed to Azure App Service.",
    question: "How does `DefaultAzureCredential` resolve authentication credentials across environments?",
    options: [
      { id: 'A', text: "It sequentially probes environment variables, Workload Identity, Managed Identity, Visual Studio, Azure CLI, and Azure PowerShell until it finds valid credentials" },
      { id: 'B', text: "It prompts the user with an interactive browser popup in production" },
      { id: 'C', text: "It connects to an on-premises Active Directory domain controller only" },
      { id: 'D', text: "It uses a hardcoded default password embedded in the NuGet package" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`DefaultAzureCredential` provides a standardized fallback chain. In production on Azure, it uses Managed Identity or Workload Identity; in local development, it checks Visual Studio, Azure CLI, or Azure PowerShell credentials automatically without code modifications.",
    referenceUrl: "https://learn.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet",
    tags: ["Azure.Identity", "DefaultAzureCredential", "SDK"]
  },
  {
    id: "azure-az204-122",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Managed Identity Authentication to Azure SQL Database",
    scenario: "An Azure App Service needs to query an Azure SQL Database without storing usernames, passwords, or connection string credentials in application configuration.",
    question: "How should the developer configure authentication between App Service and Azure SQL?",
    options: [
      { id: 'A', text: "Store the SQL SA password in an unencrypted app setting" },
      { id: 'B', text: "Enable System-Assigned Managed Identity on the App Service, create a contained database user for the identity, and use Active Directory Default in the connection string" },
      { id: 'C', text: "Open SQL Server firewall to 0.0.0.0/0 with anonymous login" },
      { id: 'D', text: "Embed a plaintext database password in the C# code" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling a Managed Identity on App Service and creating an Azure AD contained database user (`CREATE USER [my-app] FROM EXTERNAL PROVIDER;`) allows the App Service to connect using passwordless Microsoft Entra ID authentication via `Authentication=Active Directory Default`.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure?tabs=azure-powershell#create-contained-users-mapped-to-azure-ad-identities",
    tags: ["Azure SQL", "Managed Identity", "Passwordless"]
  },
  {
    id: "azure-az204-123",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secret vs Key vs Certificate Objects",
    scenario: "A security team organizes cryptographic material in Azure Key Vault. The team needs to store an API key string, an RSA asymmetric key for data signing, and an X.509 SSL certificate.",
    question: "Which Key Vault object types correspond to these three assets respectively?",
    options: [
      { id: 'A', text: "Secrets for API keys, Keys for RSA signing, and Certificates for X.509 SSL bindings" },
      { id: 'B', text: "Certificates for API keys" },
      { id: 'C', text: "Secrets for all three assets" },
      { id: 'D', text: "Keys for all three assets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Key Vault separates assets into: `Secrets` (octets of data under 25 KB, such as passwords and connection strings), `Keys` (cryptographic keys: RSA/EC for encryption, signing, and wrapping), and `Certificates` (X.509 certificates with automated renewal management).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Key Vault", "Secrets", "Keys", "Certificates"]
  },
  {
    id: "azure-az204-124",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Key Vault Access Policies vs Azure RBAC Permission Model",
    scenario: "A company is modernizing its Key Vault permissions. The team needs to grant a developer read access to a single specific secret without granting access to all secrets in the vault.",
    question: "Which Key Vault permission model supports granular resource-level role assignments?",
    options: [
      { id: 'A', text: "Azure role-based access control (Azure RBAC) permission model" },
      { id: 'B', text: "Vault Access Policies" },
      { id: 'C', text: "Storage Account Shared Key" },
      { id: 'D', text: "IP Firewall rules alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure RBAC permission model for Key Vault allows role assignments (e.g. `Key Vault Secrets User`) to be scoped down to individual secrets, keys, or certificates. The legacy Vault Access Policy model can only grant permissions across all secrets in the entire vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Key Vault", "Azure RBAC", "Access Policies"]
  },
  {
    id: "azure-az204-125",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Key Vault References in App Service Application Settings",
    scenario: "A developer wants an Azure App Service to load a database password from Azure Key Vault automatically at startup using the `@Microsoft.KeyVault` syntax.",
    question: "Which two prerequisites are required for App Service to resolve Key Vault references?",
    options: [
      { id: 'A', text: "The App Service must have a public static IP address and root FTP enabled" },
      { id: 'B', text: "The App Service must run on the Free F1 tier" },
      { id: 'C', text: "The App Service must have an enabled Managed Identity, and the identity must have permissions (or RBAC Key Vault Secrets User) to get secrets from the vault" },
      { id: 'D', text: "The Key Vault must be completely open to the public internet with no firewall" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Key Vault references in App Service (`@Microsoft.KeyVault(SecretUri=https://myvault.vault.azure.net/secrets/dbpass/)`) require the App Service to have a Managed Identity configured with `Get` secret permissions (or `Key Vault Secrets User` RBAC role) on the target Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
    tags: ["App Service", "Key Vault References", "Configuration"]
  }
];

export default AZURE_AZ204_QUESTIONS_5;
