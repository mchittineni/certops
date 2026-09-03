export const AZURE_AZ204_FLASHCARDS_5 = [
  {
    id: "azure-az204-fc-101",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Excluded Paths",
    hint: "Saving write RUs on unqueried fields.",
    back: "Adding unqueried properties to <strong>excludedPaths</strong> prevents Cosmos DB from indexing them, slashing write RU consumption.",
    tags: ["Cosmos DB", "Indexing Policy", "Excluded Paths"]
  },
  {
    id: "azure-az204-fc-102",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Pre-Triggers",
    hint: "Validating writes before persistence.",
    back: "A <strong>pre-trigger</strong> validates document state before committing; throwing an error inside the JavaScript trigger rolls back the entire write transaction.",
    tags: ["Cosmos DB", "Triggers", "Pre-Triggers"]
  },
  {
    id: "azure-az204-fc-103",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: User-Defined Functions (UDFs)",
    hint: "Custom computation in SQL queries.",
    back: "<strong>UDFs</strong> extend SQL queries with JavaScript logic. They are strictly <strong>read-only</strong> and cannot perform database writes or access the context object.",
    tags: ["Cosmos DB", "UDF", "SQL Query"]
  },
  {
    id: "azure-az204-fc-104",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: AllowBulkExecution",
    hint: "Optimizing high-throughput data loading.",
    back: "Setting <strong>AllowBulkExecution = true</strong> instructs the .NET SDK to batch concurrent operations across partitions, maximizing throughput during bulk data imports.",
    tags: ["Cosmos DB", "Bulk Execution", "Performance"]
  },
  {
    id: "azure-az204-fc-105",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Continuous Backup",
    hint: "Restoring to any exact second.",
    back: "<strong>Continuous backup mode</strong> enables point-in-time recovery (PITR) to any second within a 30-day window, protecting against accidental deletions or updates.",
    tags: ["Cosmos DB", "Point-in-Time Recovery", "Continuous Backup"]
  },
  {
    id: "azure-az204-fc-106",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Object Replication",
    hint: "Asynchronous cross-account blob replication.",
    back: "<strong>Object Replication</strong> automatically syncs block blobs across regions and storage accounts based on prefix rules for disaster recovery and compliance.",
    tags: ["Blob Storage", "Object Replication", "Cross-Region"]
  },
  {
    id: "azure-az204-fc-107",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Metadata vs. Index Tags",
    hint: "Header storage vs searchable index.",
    back: "<strong>Metadata</strong> requires fetching individual blobs to inspect headers. <strong>Index Tags</strong> are indexed globally and queryable via SQL-like filter expressions.",
    tags: ["Blob Storage", "Index Tags", "Metadata"]
  },
  {
    id: "azure-az204-fc-108",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Public Access Levels",
    hint: "Private vs Blob vs Container access.",
    back: "The <strong>Blob</strong> access level permits downloading files via direct URL while preventing anonymous users from enumerating/listing container contents.",
    tags: ["Blob Storage", "Public Access", "Security"]
  },
  {
    id: "azure-az204-fc-109",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Session Token Propagation",
    hint: "Read-your-writes across stateless servers.",
    back: "Propagating the <strong>SessionToken</strong> from write responses into subsequent read requests ensures read-your-writes consistency across distributed stateless web tiers.",
    tags: ["Cosmos DB", "Session Token", "Consistency"]
  },
  {
    id: "azure-az204-fc-110",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Disabling Shared Key Access",
    hint: "Enforcing Entra ID authentication exclusively.",
    back: "Setting <strong>allowSharedKeyAccess = false</strong> blocks account key authentication, mandating modern <strong>Microsoft Entra ID</strong> governance for all storage access.",
    tags: ["Storage", "Shared Key", "Security"]
  },
  {
    id: "azure-az204-fc-111",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Conditional Append (appendpos)",
    hint: "Preventing concurrent append races.",
    back: "Using <strong>x-ms-blob-condition-appendpos</strong> ensures an <code>AppendBlock</code> operation succeeds only if the blob is at the exact expected size offset.",
    tags: ["Blob Storage", "AppendBlock", "Concurrency"]
  },
  {
    id: "azure-az204-fc-112",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Physical Partition Isolation",
    hint: "Containing hot partition impact.",
    back: "Throttling (<strong>HTTP 429</strong>) on a hot partition does not block operations on other physical partitions, which retain their independent provisioned RU/s capacity.",
    tags: ["Cosmos DB", "Partition Isolation", "Throttling"]
  },
  {
    id: "azure-az204-fc-113",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Parameterized Queries",
    hint: "Preventing SQL injection.",
    back: "Using <strong>QueryDefinition with parameters</strong> protects against SQL injection attacks and enables query plan caching for consistent performance.",
    tags: ["Cosmos DB", "Parameterized Queries", "Security"]
  },
  {
    id: "azure-az204-fc-114",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Blob Leases",
    hint: "Distributed exclusive file locking.",
    back: "<strong>AcquireLease</strong> locks a blob exclusively for 15 to 60 seconds (or infinitely), preventing other workers from modifying or deleting it without the lease ID.",
    tags: ["Blob Storage", "LeaseBlob", "Distributed Locking"]
  },
  {
    id: "azure-az204-fc-115",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Change Feed Pull Model",
    hint: "On-demand batch change consumption.",
    back: "The <strong>Pull Model</strong> lets applications poll the Change Feed on demand using feed iterators, whereas the <strong>Push Model</strong> runs continuous reactive event handlers.",
    tags: ["Cosmos DB", "Change Feed", "Pull Model"]
  },
  {
    id: "azure-az204-fc-116",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "MSAL: Public vs. Confidential Clients",
    hint: "Browser/mobile vs secure backend servers.",
    back: "<strong>PublicClientApplication</strong> is used where secrets cannot be hidden (SPAs, mobile apps). <strong>ConfidentialClientApplication</strong> runs on secure backend servers.",
    tags: ["MSAL", "PublicClient", "OAuth"]
  },
  {
    id: "azure-az204-fc-117",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "OAuth 2.0: Auth Code with PKCE",
    hint: "Secure token acquisition for SPAs.",
    back: "The <strong>Authorization Code Flow with PKCE</strong> eliminates token exposure in browser URL fragments, using cryptographic code verifiers to secure the token exchange.",
    tags: ["OAuth", "PKCE", "Microsoft Entra ID"]
  },
  {
    id: "azure-az204-fc-118",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "OAuth 2.0: Client Credentials Flow",
    hint: "Machine-to-machine server authentication.",
    back: "The <strong>Client Credentials Flow</strong> authenticates headless daemons and background services using application IDs and secrets without any user interaction.",
    tags: ["OAuth", "Client Credentials", "Daemon"]
  },
  {
    id: "azure-az204-fc-119",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Delegated vs. Application Permissions",
    hint: "User-present vs headless background access.",
    back: "<strong>Delegated permissions</strong> act on behalf of the signed-in user. <strong>Application permissions</strong> act as the application itself across the entire tenant.",
    tags: ["Microsoft Entra ID", "Permissions", "Delegated Permissions"]
  },
  {
    id: "azure-az204-fc-120",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Managed Identities: System vs. User-Assigned",
    hint: "Tied to resource vs standalone lifecycle.",
    back: "<strong>System-Assigned</strong> identities are tied to a single resource's lifecycle. <strong>User-Assigned</strong> identities are independent resources shareable across multiple VMs/apps.",
    tags: ["Managed Identity", "User-Assigned", "Security"]
  },
  {
    id: "azure-az204-fc-121",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Azure.Identity: DefaultAzureCredential",
    hint: "Environment-agnostic authentication chain.",
    back: "<strong>DefaultAzureCredential</strong> probes credentials in order: Environment -> Managed Identity -> Visual Studio -> Azure CLI -> Interactive, simplifying dev and prod auth.",
    tags: ["Azure.Identity", "DefaultAzureCredential", "SDK"]
  },
  {
    id: "azure-az204-fc-122",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Azure SQL: Passwordless Managed Identity",
    hint: "Eliminating database credentials.",
    back: "Connecting with <strong>Active Directory Default</strong> and an Azure SQL contained database user mapped to a <strong>Managed Identity</strong> eliminates database passwords entirely.",
    tags: ["Azure SQL", "Managed Identity", "Passwordless"]
  },
  {
    id: "azure-az204-fc-123",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Secrets vs. Keys vs. Certificates",
    hint: "Asset categorization in Key Vault.",
    back: "<strong>Secrets</strong> store text strings (API keys, passwords). <strong>Keys</strong> store cryptographic key pairs (RSA/EC). <strong>Certificates</strong> manage X.509 SSL certificates.",
    tags: ["Key Vault", "Secrets", "Keys", "Certificates"]
  },
  {
    id: "azure-az204-fc-124",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Azure RBAC vs. Access Policies",
    hint: "Fine-grained secret-level access control.",
    back: "The <strong>Azure RBAC model</strong> enables role assignments scoped to individual secrets. Legacy <strong>Vault Access Policies</strong> can only apply vault-wide across all secrets.",
    tags: ["Key Vault", "Azure RBAC", "Access Policies"]
  },
  {
    id: "azure-az204-fc-125",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Service: Key Vault References",
    hint: "Declarative secret injection.",
    back: "Using <strong>@Microsoft.KeyVault(...)</strong> in App Service settings injects secrets at runtime using the app's <strong>Managed Identity</strong> without code changes.",
    tags: ["App Service", "Key Vault References", "Configuration"]
  }
];

export default AZURE_AZ204_FLASHCARDS_5;
