export const AZURE_AZ204_FLASHCARDS_4 = [
  {
    id: "azure-az204-fc-76",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Bounded Staleness",
    hint: "Capping replication lag by versions or time.",
    back: "<strong>Bounded Staleness</strong> guarantees reads lag by at most <em>K</em> versions or <em>T</em> time units, providing predictable lag boundaries outside Strong consistency.",
    tags: ["Cosmos DB", "Bounded Staleness", "Replication Lag"]
  },
  {
    id: "azure-az204-fc-77",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Last-Writer-Wins (LWW)",
    hint: "Automated multi-region conflict resolution.",
    back: "<strong>Last-Writer-Wins (LWW)</strong> resolves multi-region write collisions by picking the highest numeric timestamp (<code>_ts</code> or custom integer property).",
    tags: ["Cosmos DB", "Conflict Resolution", "Multi-Region"]
  },
  {
    id: "azure-az204-fc-78",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Composite Indexes",
    hint: "Enabling multi-field ORDER BY queries.",
    back: "Queries ordering by <strong>multiple properties</strong> require a <strong>Composite Index</strong> in the container indexing policy matching the query's sort directions.",
    tags: ["Cosmos DB", "Composite Index", "Query Optimization"]
  },
  {
    id: "azure-az204-fc-79",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Change Feed",
    hint: "Persistent ordered change data capture.",
    back: "The <strong>Change Feed</strong> emits an ordered log of document inserts and updates per partition, serving as the foundation for event-driven reactive architectures.",
    tags: ["Cosmos DB", "Change Feed", "Event-Driven"]
  },
  {
    id: "azure-az204-fc-80",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Stored Procedures",
    hint: "Atomic ACID transactions within a partition.",
    back: "JavaScript <strong>Stored Procedures</strong> execute inside the database engine with full ACID transactional guarantees across documents sharing the same partition key.",
    tags: ["Cosmos DB", "Stored Procedures", "ACID Transactions"]
  },
  {
    id: "azure-az204-fc-81",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Time to Live (TTL)",
    hint: "Zero-RU automated document expiration.",
    back: "Enabling <strong>TTL</strong> on a container automatically purges expired records in the background without consuming provisioned Request Units (RU/s).",
    tags: ["Cosmos DB", "TTL", "Data Lifecycle"]
  },
  {
    id: "azure-az204-fc-82",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Direct vs. Gateway Connection Mode",
    hint: "Sub-10ms latency via TCP.",
    back: "<strong>ConnectionMode.Direct</strong> establishes TCP connections straight to replica partitions for lowest latency, while <strong>Gateway mode</strong> tunnels through HTTPS port 443.",
    tags: ["Cosmos DB", "Direct Mode", "SDK Optimization"]
  },
  {
    id: "azure-az204-fc-83",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Cosmos DB: Continuation Tokens",
    hint: "Efficient stateless query pagination.",
    back: "FeedIterator queries return a <strong>ContinuationToken</strong> bookmarking query state. Resuming queries with this token avoids costly OFFSET/LIMIT recalculations.",
    tags: ["Cosmos DB", "Pagination", "Continuation Token"]
  },
  {
    id: "azure-az204-fc-84",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Access Tiers",
    hint: "Hot, Cool, Cold, and Archive trade-offs.",
    back: "<strong>Hot</strong> has low transaction fees and higher storage cost. <strong>Archive</strong> has lowest storage cost but requires rehydration and higher retrieval fees.",
    tags: ["Blob Storage", "Access Tiers", "Cost Optimization"]
  },
  {
    id: "azure-az204-fc-85",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Archive Rehydration Priorities",
    hint: "Restoring offline archive blobs.",
    back: "Archived blobs can be rehydrated using <strong>High priority</strong> (&lt; 1 hour for objects &lt; 10 GB) or <strong>Standard priority</strong> (up to 15 hours).",
    tags: ["Blob Storage", "Rehydration", "Archive Tier"]
  },
  {
    id: "azure-az204-fc-86",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Block vs. Append vs. Page Blobs",
    hint: "Specialized blob storage structures.",
    back: "<strong>Block Blobs</strong> store unstructured files. <strong>Append Blobs</strong> optimize append-only logging operations. <strong>Page Blobs</strong> back Azure VM virtual hard disks (VHDs).",
    tags: ["Blob Storage", "Blob Types", "Append Blobs"]
  },
  {
    id: "azure-az204-fc-87",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Lifecycle Management Rules",
    hint: "Automated tiering and deletion policies.",
    back: "<strong>Lifecycle Management rules</strong> evaluate blob age (days since creation/modification) to automatically transition blobs between Hot/Cool/Archive and purge expired files.",
    tags: ["Blob Storage", "Lifecycle Management", "Governance"]
  },
  {
    id: "azure-az204-fc-88",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Container Soft Delete",
    hint: "Safety net for accidental deletions.",
    back: "<strong>Container Soft Delete</strong> retains deleted containers and blobs in a recoverable state for a specified retention window (e.g. 14 days) via the undelete operation.",
    tags: ["Blob Storage", "Soft Delete", "Data Protection"]
  },
  {
    id: "azure-az204-fc-89",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Versioning vs. Snapshots",
    hint: "Automatic revision tracking.",
    back: "<strong>Blob Versioning</strong> automatically preserves previous revisions upon every overwrite. <strong>Snapshots</strong> are point-in-time read-only copies triggered explicitly via API.",
    tags: ["Blob Storage", "Versioning", "Audit"]
  },
  {
    id: "azure-az204-fc-90",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Immutable WORM Policies",
    hint: "Tamper-proof compliance storage.",
    back: "<strong>Immutable Storage with locked retention policies</strong> prevents blobs from being deleted or overwritten by anyone (including root admins) for compliance compliance.",
    tags: ["Blob Storage", "Immutable Storage", "Compliance"]
  },
  {
    id: "azure-az204-fc-91",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Index Tags",
    hint: "Searchable key-value indexing.",
    back: "<strong>Blob Index Tags</strong> index key-value attributes on blobs, allowing SQL-like querying across millions of objects via <code>FindBlobsByTags</code> without directory scans.",
    tags: ["Blob Storage", "Index Tags", "Search"]
  },
  {
    id: "azure-az204-fc-92",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: PutBlock & PutBlockList",
    hint: "Reliable multi-part chunked uploads.",
    back: "Large files are uploaded in chunks using <strong>PutBlock</strong> and committed in order using <strong>PutBlockList</strong>, enabling parallel uploads and partial retries.",
    tags: ["Blob Storage", "StageBlock", "Chunked Upload"]
  },
  {
    id: "azure-az204-fc-93",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Byte-Range Downloads",
    hint: "Downloading specific object segments.",
    back: "Using the <strong>Range: bytes=start-end</strong> HTTP header downloads specific byte slices of a blob, optimizing video/audio streaming and multi-threaded downloads.",
    tags: ["Blob Storage", "Range Requests", "Streaming"]
  },
  {
    id: "azure-az204-fc-94",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Blob Storage: Static Website Hosting",
    hint: "Serverless SPA hosting in $web.",
    back: "Enabling <strong>Static Website hosting</strong> serves web assets directly from the <strong>$web</strong> container at low cost with custom index and 404 error pages.",
    tags: ["Blob Storage", "Static Website", "Web Hosting"]
  },
  {
    id: "azure-az204-fc-95",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "ADLS Gen2: Hierarchical Namespace (HNS)",
    hint: "True directory hierarchies for big data.",
    back: "<strong>Hierarchical Namespace (HNS)</strong> provides a true filesystem hierarchy on Blob storage, making directory renames atomic and enabling POSIX-compliant file permissions.",
    tags: ["Blob Storage", "ADLS Gen2", "Hierarchical Namespace"]
  },
  {
    id: "azure-az204-fc-96",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Customer-Managed Keys (CMK)",
    hint: "Controlling root encryption keys.",
    back: "<strong>Customer-Managed Keys (CMK)</strong> allow enterprises to use their own Azure Key Vault cryptographic keys to protect storage data at rest.",
    tags: ["Storage", "CMK", "Key Vault"]
  },
  {
    id: "azure-az204-fc-97",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Virtual Network Service Endpoints",
    hint: "Restricting storage access to subnets.",
    back: "Enabling a <strong>Service Endpoint for Microsoft.Storage</strong> allows storage account firewalls to restrict inbound traffic to specific VNet subnets.",
    tags: ["Storage", "Service Endpoints", "Firewalls"]
  },
  {
    id: "azure-az204-fc-98",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Private Endpoints",
    hint: "Dedicated private VNet IP for storage.",
    back: "A <strong>Private Endpoint</strong> assigns a dedicated private IP inside your VNet to your storage account, securing traffic completely off the public internet.",
    tags: ["Storage", "Private Endpoints", "Private Link"]
  },
  {
    id: "azure-az204-fc-99",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Account Failover",
    hint: "Promoting secondary regions during disasters.",
    back: "<strong>Customer-Managed Account Failover</strong> promotes the GRS secondary replica to primary, updating DNS endpoints for disaster recovery.",
    tags: ["Storage", "Failover", "Disaster Recovery"]
  },
  {
    id: "azure-az204-fc-100",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    front: "Storage: Diagnostic Settings & Log Analytics",
    hint: "Auditing storage operations with KQL.",
    back: "Routing storage diagnostic logs to <strong>Log Analytics</strong> enables KQL queries against <code>StorageBlobLogs</code> to audit caller identities and API operations.",
    tags: ["Storage", "Diagnostics", "Log Analytics"]
  }
];

export default AZURE_AZ204_FLASHCARDS_4;
