export const AZURE_AZ204_QUESTIONS_4 = [
  {
    id: "azure-az204-76",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Bounded Staleness Consistency Lag Window",
    scenario: "A financial trading analytics dashboard in Azure Cosmos DB allows reads to lag behind writes, but the lag must never exceed 100 versions or 5 seconds.",
    question: "Which Cosmos DB consistency level provides deterministic boundaries on replication lag?",
    options: [
      { id: 'A', text: "Bounded Staleness consistency" },
      { id: 'B', text: "Session consistency" },
      { id: 'C', text: "Eventual consistency" },
      { id: 'D', text: "Consistent Prefix consistency" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Bounded Staleness` guarantees that reads lag behind writes by at most `K` versions (updates) or `T` time interval (seconds). Reads outside the staleness window are guaranteed to see the latest committed data in total order.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels#bounded-staleness-consistency",
    tags: ["Cosmos DB", "Bounded Staleness", "Replication Lag"]
  },
  {
    id: "azure-az204-77",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Multi-Region Writes & Conflict Resolution",
    scenario: "A global application on Azure Cosmos DB writes to multiple regions simultaneously. When two clients in different regions update the same document at the exact same millisecond, a conflict occurs.",
    question: "Which default conflict resolution policy in Cosmos DB resolves conflicts using the highest `_ts` timestamp?",
    options: [
      { id: 'A', text: "First-Writer-Wins policy" },
      { id: 'B', text: "Custom Merge Stored Procedure only" },
      { id: 'C', text: "Last-Writer-Wins (LWW) policy using the internal _ts timestamp or a custom numeric property" },
      { id: 'D', text: "Manual Conflict Feed review only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cosmos DB multi-region writes resolve conflicts using `Last-Writer-Wins` (LWW) by default. The platform compares the conflict resolution path (defaulting to the system timestamp `_ts`) and keeps the version with the highest numeric value, moving loser records to the conflicts feed if configured.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/conflict-resolution-policies",
    tags: ["Cosmos DB", "Conflict Resolution", "Multi-Region"]
  },
  {
    id: "azure-az204-78",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Composite Indexes for Multi-Field Queries",
    scenario: "A query on an Azure Cosmos DB container executes: `SELECT * FROM c ORDER BY c.lastName ASC, c.firstName ASC`. The query fails with an indexing error.",
    question: "What must the developer add to the indexing policy to support sorting by multiple properties?",
    options: [
      { id: 'A', text: "A Composite Index definition containing lastName (ascending) and firstName (ascending)" },
      { id: 'B', text: "A Spatial index on lastName" },
      { id: 'C', text: "Set indexingMode to None" },
      { id: 'D', text: "Add an ExcludedPath on /firstName/*" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Cosmos DB, queries with an `ORDER BY` clause containing two or more properties require a `Composite Index`. The composite index must match the exact sequence and ascending/descending directions of the order-by fields.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy#composite-indexes",
    tags: ["Cosmos DB", "Composite Index", "Query Optimization"]
  },
  {
    id: "azure-az204-79",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Change Feed Architecture and Triggers",
    scenario: "A developer wants to trigger an event whenever a customer record is created or updated in Azure Cosmos DB, but does not need notifications when records are deleted.",
    question: "Which Cosmos DB feature provides an ordered, persistent log of document inserts and modifications?",
    options: [
      { id: 'A', text: "Azure Monitor Activity Log" },
      { id: 'B', text: "Cosmos DB Audit Logs" },
      { id: 'C', text: "Cosmos DB Stored Procedures" },
      { id: 'D', text: "Cosmos DB Change Feed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Azure Cosmos DB Change Feed listens to an Azure Cosmos DB container for any changes. It outputs the sorted list of documents that were changed in the order in which they were modified (inserts and updates). Deletions are not captured unless soft-delete flags are used.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed",
    tags: ["Cosmos DB", "Change Feed", "Event-Driven"]
  },
  {
    id: "azure-az204-80",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Stored Procedures and ACID Transactions",
    scenario: "A banking transaction must debit Account A and credit Account B in Azure Cosmos DB. Both documents reside in the same partition key. If either operation fails, the entire transaction must roll back.",
    question: "How should the developer implement atomic transactional execution across both documents?",
    options: [
      { id: 'A', text: "Use the Change Feed processor to apply compensations" },
      { id: 'B', text: "Write a JavaScript Stored Procedure and execute it within the shared partition key" },
      { id: 'C', text: "Execute two independent UpsertItemAsync calls in C# without locks" },
      { id: 'D', text: "Enable Multi-Region writes on the container" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cosmos DB supports ACID transactions within a single logical partition key using JavaScript `Stored Procedures`. Stored procedures execute with snapshot isolation directly on the database engine. If an exception is thrown, all modifications are automatically rolled back.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/how-to-write-stored-procedures-triggers-udfs",
    tags: ["Cosmos DB", "Stored Procedures", "ACID Transactions"]
  },
  {
    id: "azure-az204-81",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Time to Live (TTL) Configuration",
    scenario: "A logging service in Azure Cosmos DB stores temporary diagnostics. All documents in the container must be automatically deleted after 30 days (2,592,000 seconds) without burning Request Units on delete queries.",
    question: "How should the developer configure automatic expiration?",
    options: [
      { id: 'A', text: "Enable Time to Live (TTL) on the container and set defaultTimeToLive to 2592000" },
      { id: 'B', text: "Cosmos DB does not support automatic document expiration" },
      { id: 'C', text: "Write a nightly Azure Function that runs DELETE * queries" },
      { id: 'D', text: "Configure an Azure Storage lifecycle rule targeting Cosmos DB" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Cosmos DB provides native `Time to Live` (TTL). When enabled on a container, Cosmos DB automatically purges expired items in the background using spare system throughput, without consuming user-provisioned RU/s.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/time-to-live",
    tags: ["Cosmos DB", "TTL", "Data Lifecycle"]
  },
  {
    id: "azure-az204-82",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB SDK Connection Modes: Direct vs Gateway",
    scenario: "A high-throughput backend service running on Azure VMs connects to Azure Cosmos DB. The team needs the lowest possible network latency and highest throughput.",
    question: "Which connection mode should be configured in the CosmosClientOptions in .NET?",
    options: [
      { id: 'A', text: "ConnectionMode.Direct (over TCP)" },
      { id: 'B', text: "ConnectionMode.NamedPipes" },
      { id: 'C', text: "ConnectionMode.Gateway (over HTTPS port 443)" },
      { id: 'D', text: "ConnectionMode.WebSocket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cosmos DB .NET SDK supports two connection modes: `Direct` (uses TCP directly to physical replica nodes, bypassing intermediate gateways for sub-10ms latency) and `Gateway` (routes through HTTPS port 443 gateways). Direct mode is recommended for production performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/performance-tips-dotnet-sdk-v3#networking",
    tags: ["Cosmos DB", "Direct Mode", "SDK Optimization"]
  },
  {
    id: "azure-az204-83",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Cosmos DB Pagination with Continuation Tokens",
    scenario: "A mobile app displays a paginated product catalog from Azure Cosmos DB. When the user scrolls to page 2, the app must retrieve the next 50 items without repeating previous items.",
    question: "Which mechanism in the Cosmos DB FeedIterator manages paginated state?",
    options: [
      { id: 'A', text: "Executing separate Scan queries per page" },
      { id: 'B', text: "Downloading the entire container into memory on the mobile device" },
      { id: 'C', text: "Using SQL OFFSET and LIMIT with high numbers" },
      { id: 'D', text: "Passing the ContinuationToken from the previous FeedResponse into QueryRequestOptions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cosmos DB uses `Continuation Tokens` for stateful query pagination. Each `FeedResponse` returns a `ContinuationToken` string bookmarking the query progress. Passing this token into `QueryRequestOptions.ResponseContinuationToken` resumes scanning exactly where the last page left off.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-query-pagination",
    tags: ["Cosmos DB", "Pagination", "Continuation Token"]
  },
  {
    id: "azure-az204-84",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Access Tiers: Hot, Cool, Cold, and Archive",
    scenario: "A healthcare organization stores medical imaging files. Files are accessed frequently in the first 30 days, accessed once a year for legal compliance thereafter, and must be retained for 10 years at the lowest storage cost.",
    question: "Which storage tier transition sequence optimizes costs across the file lifecycle?",
    options: [
      { id: 'A', text: "Hot tier for the first 30 days, then transition to Archive tier for long-term retention" },
      { id: 'B', text: "Keep files permanently in Hot tier" },
      { id: 'C', text: "Store files in Cool tier only" },
      { id: 'D', text: "Archive tier for the first 30 days then Hot" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage offers `Hot` (frequently accessed data, highest storage cost, lowest access cost), `Cool` (accessed infrequently, lower storage cost), `Cold` (rarely accessed data), and `Archive` (lowest storage cost, highest access cost, hours to rehydrate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Blob Storage", "Access Tiers", "Cost Optimization"]
  },
  {
    id: "azure-az204-85",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Rehydrating Archived Blobs",
    scenario: "A compliance auditor requests an urgent patient record stored in the Azure Blob Storage Archive tier. The file must be restored to an accessible tier in the shortest possible time.",
    question: "Which rehydration priority should the developer specify when changing the blob tier to Hot?",
    options: [
      { id: 'A', text: "High rehydration priority (rehydrates in under 1 hour for blobs under 10 GB)" },
      { id: 'B', text: "Standard rehydration priority (takes up to 15 hours)" },
      { id: 'C', text: "Instant rehydration priority" },
      { id: 'D', text: "Immediate batch priority" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rehydrating an archived blob to Hot or Cool supports two priorities: `Standard priority` (takes up to 15 hours) and `High priority` (prioritizes the request, typically completing in under 1 hour for objects under 10 GB at a higher retrieval cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview",
    tags: ["Blob Storage", "Rehydration", "Archive Tier"]
  },
  {
    id: "azure-az204-86",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Types: Block Blobs vs Append Blobs vs Page Blobs",
    scenario: "A logging framework appends real-time diagnostic log lines to an existing log file in Azure Blob Storage concurrently from multiple application threads.",
    question: "Which blob type is specifically optimized for efficient append operations without rewriting blocks?",
    options: [
      { id: 'A', text: "Block Blobs" },
      { id: 'B', text: "Append Blobs" },
      { id: 'C', text: "Archive Blobs" },
      { id: 'D', text: "Page Blobs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Blob Storage supports three distinct blob types: `Block Blobs` (general documents, files, images), `Append Blobs` (optimized for append-only log scenarios where data is committed at the end via `AppendBlock`), and `Page Blobs` (512-byte aligned random read/write storage for VM disks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#blobs",
    tags: ["Blob Storage", "Blob Types", "Append Blobs"]
  },
  {
    id: "azure-az204-87",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Lifecycle Management Rules",
    scenario: "An enterprise data policy mandates that log files in a container `system-logs` must move to Cool storage after 30 days, move to Archive after 90 days, and be permanently deleted after 365 days.",
    question: "Which Azure Storage feature automates rule-based tier transitions and deletions based on object age?",
    options: [
      { id: 'A', text: "Azure Blob Storage Lifecycle Management" },
      { id: 'B', text: "Azure Backup" },
      { id: 'C', text: "Azure Event Grid subscriptions" },
      { id: 'D', text: "Azure Storage Static Website rules" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage Lifecycle Management policies define declarative JSON rules matching blob prefixes and tags. Rules automate transitioning blobs to Cool, Cold, or Archive tiers, and deleting blobs when their age exceeds defined day thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Blob Storage", "Lifecycle Management", "Governance"]
  },
  {
    id: "azure-az204-88",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Recovery Window",
    scenario: "A developer accidentally deletes an entire container of user documents in an Azure Storage account. The account has Container Soft Delete enabled with a 14-day retention period.",
    question: "How can the developer recover the deleted container and its blobs within the retention window?",
    options: [
      { id: 'A', text: "Use the Restore-AzStorageContainer command or Undelete Container in the Azure Portal" },
      { id: 'B', text: "Restore from an on-premises backup" },
      { id: 'C', text: "Contact Microsoft Support for physical tape retrieval" },
      { id: 'D', text: "Deleted containers cannot be restored" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When `Container Soft Delete` is enabled, deleted containers remain in a soft-deleted state for the configured retention period (1 to 365 days). Administrators can list deleted containers and call the undelete/restore API to restore the container and all contents instantly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-container-overview",
    tags: ["Blob Storage", "Soft Delete", "Data Protection"]
  },
  {
    id: "azure-az204-89",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Versioning vs Snapshots",
    scenario: "A legal document repository must retain every historical revision of contract files whenever a user overwrites an existing blob with an updated version.",
    question: "Which Azure Blob Storage feature automatically creates a new version ID upon every overwrite without client-side snapshot calls?",
    options: [
      { id: 'A', text: "Blob Versioning" },
      { id: 'B', text: "Blob Snapshots alone" },
      { id: 'C', text: "Blob Index Tags" },
      { id: 'D', text: "Append Blobs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Blob Versioning automatically creates an immutable, timestamped previous version of a blob whenever it is overwritten or deleted. Unlike manual Blob Snapshots, Versioning operates transparently on every write operation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview",
    tags: ["Blob Storage", "Versioning", "Audit"]
  },
  {
    id: "azure-az204-90",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Immutable Storage (WORM Compliance)",
    scenario: "A banking regulatory compliance standard requires transaction receipts stored in Blob storage to be non-erasable and non-modifiable for 7 years, even by storage account administrators.",
    question: "Which Azure Blob Storage feature enforces Write-Once-Read-Many (WORM) storage?",
    options: [
      { id: 'A', text: "Immutable Storage with a Time-Based Retention Policy in Locked state" },
      { id: 'B', text: "Blob Soft Delete" },
      { id: 'C', text: "Storage Account Access Keys" },
      { id: 'D', text: "Customer Managed Keys alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage Immutable Storage provides WORM (Write Once, Read Many) policies. When a time-based retention policy is locked, objects cannot be modified or deleted by any user, including account owners and subscription administrators, until the retention period expires.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview",
    tags: ["Blob Storage", "Immutable Storage", "Compliance"]
  },
  {
    id: "azure-az204-91",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Index Tags for Categorical Filtering",
    scenario: "An enterprise document storage container holds 10 million blobs. Applications need to find all documents where `Department = 'Finance'` and `Status = 'Approved'` without scanning millions of blob names.",
    question: "Which feature allows key-value indexing and SQL-like querying across blob metadata?",
    options: [
      { id: 'A', text: "Blob Index Tags and the FindBlobsByTags API" },
      { id: 'B', text: "Blob Snapshots" },
      { id: 'C', text: "Blob Metadata alone (x-ms-meta-)" },
      { id: 'D', text: "Container ACLs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Index Tags store key-value tag attributes alongside blobs. Azure Storage automatically indexes these tags, enabling developers to query blobs across containers using SQL-like expressions (e.g. `@container = 'docs' AND Department = 'Finance'`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-index-how-to",
    tags: ["Blob Storage", "Index Tags", "Search"]
  },
  {
    id: "azure-az204-92",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Chunked Uploads: StageBlock and CommitBlockList",
    scenario: "A video editing platform uploads 100 GB video files to Azure Blob Storage over unreliable cellular network connections. Individual upload chunks fail periodically.",
    question: "Which API operations allow parallel, resumable chunked uploads for Block Blobs?",
    options: [
      { id: 'A', text: "AppendBlock in a single thread" },
      { id: 'B', text: "PutBlob with a single 100 GB stream" },
      { id: 'C', text: "UploadBlockRange" },
      { id: 'D', text: "StageBlock (PutBlock) for uploading chunks followed by CommitBlockList (PutBlockList) to assemble the final blob" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Block Blobs are composed of blocks up to 4,000 MiB each (up to 50,000 blocks). Uploading applications call `StageBlock` (`PutBlock`) to upload individual blocks in parallel with block IDs. Once all blocks succeed, `CommitBlockList` (`PutBlockList`) commits them into a single final blob.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/put-block-list",
    tags: ["Blob Storage", "StageBlock", "Chunked Upload"]
  },
  {
    id: "azure-az204-93",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Download Byte-Range Requests",
    scenario: "A mobile audio streaming app needs to play the first 1 MB of a 50 MB podcast audio file instantly without downloading the entire file.",
    question: "Which HTTP header enables downloading a specific byte range from an Azure Blob?",
    options: [
      { id: 'A', text: "The x-ms-range or standard Range HTTP request header (e.g. Range: bytes=0-1048575)" },
      { id: 'B', text: "The Content-Range header in the request" },
      { id: 'C', text: "The x-ms-blob-condition header" },
      { id: 'D', text: "The Content-Encoding header" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage supports standard HTTP byte-range requests via the `Range` or `x-ms-range` request header. Clients request specific byte offsets to stream media chunks or resume interrupted file downloads efficiently.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/get-blob#request-headers",
    tags: ["Blob Storage", "Range Requests", "Streaming"]
  },
  {
    id: "azure-az204-94",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Static Website Hosting in $web Container",
    scenario: "A developer deploys a single-page React application consisting of HTML, JavaScript, and CSS files. The site must be served directly from storage at minimum cost.",
    question: "Which Azure Storage feature serves web content directly and specifies `index.html` and `404.html` documents?",
    options: [
      { id: 'A', text: "Static Website hosting using the special $web container" },
      { id: 'B', text: "Blob Public Access Container level" },
      { id: 'C', text: "Azure App Service Static Plan" },
      { id: 'D', text: "Azure File Share website hosting" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Storage accounts support `Static website` hosting. Enabling it creates a dedicated `$web` container and provisions a web endpoint (`https://&lt;account&gt;.z[0-9].web.core.windows.net`). Developers configure index and error document paths to serve modern SPAs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website",
    tags: ["Blob Storage", "Static Website", "Web Hosting"]
  },
  {
    id: "azure-az204-95",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Data Lake Storage Gen2 Hierarchical Namespace (HNS)",
    scenario: "A big data analytics pipeline processes petabytes of telemetry using Apache Spark. Renaming a directory containing 100,000 files in standard Blob storage takes minutes because every blob path must be copied and deleted.",
    question: "Which Azure Storage feature enables atomic directory operations and file-level POSIX access control lists?",
    options: [
      { id: 'A', text: "Hierarchical Namespace (HNS) in Azure Data Lake Storage Gen2" },
      { id: 'B', text: "Flat Namespace in standard Blob storage" },
      { id: 'C', text: "Azure Files SMB Share" },
      { id: 'D', text: "Cosmos DB Cassandra API" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Data Lake Storage Gen2 enables a `Hierarchical Namespace` (HNS) on Blob storage. HNS organizes files into a true filesystem directory hierarchy, turning directory renames and deletes into instant atomic metadata operations and enabling POSIX access control lists.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction#key-features-of-data-lake-storage-gen2",
    tags: ["Blob Storage", "ADLS Gen2", "Hierarchical Namespace"]
  },
  {
    id: "azure-az204-96",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Customer-Managed Keys (CMK) in Key Vault",
    scenario: "A financial compliance policy mandates that all data in Azure Storage accounts must be encrypted using encryption keys stored in an Azure Key Vault managed by the customer.",
    question: "Which configuration links the Storage Account encryption to the Key Vault key?",
    options: [
      { id: 'A', text: "Enable Customer-Managed Keys (CMK) in Storage Account Encryption and assign a Key Vault key URI" },
      { id: 'B', text: "Hardcode the Key Vault secret in connection strings" },
      { id: 'C', text: "Use Microsoft-managed keys only" },
      { id: 'D', text: "Disable Storage Service Encryption" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Storage accounts support Customer-Managed Keys (CMK) via Azure Key Vault. When configured with a system-assigned or user-assigned Managed Identity, Azure Storage uses the designated Key Vault key as the root Key Encryption Key (KEK) to wrap data encryption keys.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview",
    tags: ["Storage", "CMK", "Key Vault"]
  },
  {
    id: "azure-az204-97",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Virtual Network Service Endpoints & Firewalls",
    scenario: "A security team configures a storage account firewall so that traffic is accepted only from a specific backend subnet `10.1.0.0/24` in a virtual network.",
    question: "What must be enabled on the virtual network subnet to permit this private routing?",
    options: [
      { id: 'A', text: "Azure Bastion Host" },
      { id: 'B', text: "A Service Endpoint for Microsoft.Storage on the subnet" },
      { id: 'C', text: "A Public Elastic IP address" },
      { id: 'D', text: "An ExpressRoute circuit" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling a `Service Endpoint` for `Microsoft.Storage` on the VNet subnet extends the virtual network private address space to Azure Storage. Storage account firewall rules can then restrict access exclusively to traffic originating from that specific subnet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security#grant-access-from-a-virtual-network",
    tags: ["Storage", "Service Endpoints", "Firewalls"]
  },
  {
    id: "azure-az204-98",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Private Endpoints via Azure PrivateLink",
    scenario: "A company wants traffic between internal application servers and Azure Blob Storage to travel exclusively over private IP addresses (e.g. `10.2.0.15`), without exposing the storage account's public internet endpoint.",
    question: "Which networking feature provisions a private IP network interface for Azure Storage?",
    options: [
      { id: 'A', text: "A Public IP with Network Security Group" },
      { id: 'B', text: "An Azure Private Endpoint (Private Link)" },
      { id: 'C', text: "VNet Peering alone" },
      { id: 'D', text: "A Service Endpoint alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure Private Endpoint is a network interface that assigns a private IP address from your VNet to the Azure Storage service. All traffic to `https://&lt;account&gt;.blob.core.windows.net` resolves to this private IP via Private DNS zones, avoiding public internet exposure completely.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-private-endpoints",
    tags: ["Storage", "Private Endpoints", "Private Link"]
  },
  {
    id: "azure-az204-99",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Account Customer-Managed Failover (GRS/GZRS)",
    scenario: "An enterprise uses Geo-Redundant Storage (GRS) for critical documents. A primary region disaster occurs, and the operations team needs to promote the secondary region to become the primary write location.",
    question: "Which feature allows administrators to initiate a failover to the secondary region manually?",
    options: [
      { id: 'A', text: "Customer-Managed Storage Account Failover (Account Failover)" },
      { id: 'B', text: "Automatic failover managed by DNS alone" },
      { id: 'C', text: "Creating a new storage account in the secondary region manually" },
      { id: 'D', text: "Slot Swap" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For storage accounts configured with GRS or GZRS, administrators can initiate an `Account Failover` via the Azure Portal, CLI, or PowerShell. This repoints DNS to the secondary region, making it the new primary write location.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-initiate-account-failover",
    tags: ["Storage", "Failover", "Disaster Recovery"]
  },
  {
    id: "azure-az204-100",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage Diagnostic Settings and Log Analytics",
    scenario: "A security team needs to audit all `DeleteBlob` and `SetBlobTier` API requests made against a storage account, querying caller IP addresses and principal IDs.",
    question: "Where should storage diagnostic settings stream storage audit logs for interactive querying?",
    options: [
      { id: 'A', text: "A Log Analytics Workspace" },
      { id: 'B', text: "An unencrypted text file in root container" },
      { id: 'C', text: "Azure Event Grid basic topic alone" },
      { id: 'D', text: "Application Insights Live Metrics" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring `Diagnostic settings` on Azure Storage to stream storage logs (Read, Write, Delete operations) to an `Azure Log Analytics workspace` allows security teams to use Kusto Query Language (KQL) to audit access, inspect caller IP addresses, and track deletions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/monitor-blob-storage",
    tags: ["Storage", "Diagnostics", "Log Analytics"]
  }
];

export default AZURE_AZ204_QUESTIONS_4;
