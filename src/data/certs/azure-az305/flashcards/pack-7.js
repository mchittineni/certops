export const AZURE_AZ305_FLASHCARDS_7 = [
  {
    id: "azure-az305-fc-151",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure SQL Database grows past what one database can hold. When do you choose Hyperscale, and when do you shard?",
    hint: "One is a storage architecture, the other is an application pattern.",
    back: "Choose <strong>Hyperscale</strong> first: a single database that grows to <strong>128 TB</strong>, scales compute up and down quickly and adds read replicas, with no application change. <strong>Shard</strong> (split data across many databases, usually by tenant, with a shard map) only when one database still cannot meet the need: write throughput beyond the largest compute size, per-tenant isolation or placement, or independent scaling of tenants. Sharding moves routing, cross-shard queries and rebalancing into the application, so it is the more expensive choice to build and run.",
    tags: ["Azure SQL Database", "Hyperscale", "Sharding"]
  },
  {
    id: "azure-az305-fc-152",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "What does an elastic pool share, and which workload pattern makes it cheaper than single databases?",
    hint: "Think about when each database is busy.",
    back: "An elastic pool buys one block of <strong>eDTUs or vCores</strong> that every database in the pool draws from, with per-database minimum and maximum settings. It pays off when you have <strong>many databases with low average use and unpredictable, non-overlapping peaks</strong>, such as one database per SaaS tenant. If most databases peak at the same time, or one database is busy all day, the pool must be sized for the combined peak and single databases are usually cheaper.",
    tags: ["Azure SQL Database", "Elastic pools"]
  },
  {
    id: "azure-az305-fc-153",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "A SaaS company has 400 tenant databases and must run the same schema change and index maintenance on all of them on a schedule. What runs it?",
    hint: "Not SQL Agent on each database.",
    back: "<strong>Elastic jobs</strong>: an Azure-hosted job agent that runs T-SQL scripts against a <strong>target group</strong> (a logical server, an elastic pool or individual databases) on a schedule, with retries and execution history. Target groups are evaluated at run time, so databases added to a pool or server are picked up automatically. Azure SQL Database has no SQL Server Agent; Azure SQL Managed Instance does, but only for its own databases.",
    tags: ["Azure SQL Database", "Elastic jobs"]
  },
  {
    id: "azure-az305-fc-154",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Sharded Azure SQL tenants: what does the Elastic Database client library's shard map manager do for the application?",
    hint: "Routing and moving tenants.",
    back: "The <strong>shard map manager</strong> is a small database that records which shard holds each key (list or range mappings). The client library uses it for <strong>data-dependent routing</strong>, opening a connection straight to the right database for a tenant key and caching the map. The <strong>split-merge</strong> tool moves key ranges between shards online, and <strong>elastic query</strong> can run read-only queries across shards. Without it, the application must keep its own tenant catalog and routing logic.",
    tags: ["Azure SQL Database", "Sharding", "Elastic Database tools"]
  },
  {
    id: "azure-az305-fc-155",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "How does an application send its reporting queries to the free read-only replica of a Business Critical database?",
    hint: "One connection-string property.",
    back: "Add <strong>ApplicationIntent=ReadOnly</strong> to the connection string. With <strong>read scale-out</strong> (on by default in Premium, Business Critical and Hyperscale), the gateway routes that session to a readable secondary replica at no extra cost, while read-write sessions keep going to the primary. The replica is asynchronously updated, so reports can lag slightly behind the primary.",
    tags: ["Azure SQL Database", "Read scale-out"]
  },
  {
    id: "azure-az305-fc-156",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Hyperscale HA replicas vs named replicas vs geo-replicas: which one isolates a heavy analytics team with its own compute size?",
    hint: "Only one of them has its own logical server and service objective.",
    back: "<strong>Named replicas</strong> (up to 30) are read-only copies with their own name, compute size, logical server and security, so an analytics team gets isolated compute sized independently of the primary. <strong>HA replicas</strong> (up to 4) share the primary's compute size and exist mainly for failover, though they also serve ApplicationIntent=ReadOnly traffic. <strong>Geo-replicas</strong> sit in another region for disaster recovery. Named and HA replicas read from the primary's page servers, so they add no storage; a geo-replica keeps its own copy in the other region.",
    tags: ["Hyperscale", "Named replicas", "Read scale-out"]
  },
  {
    id: "azure-az305-fc-157",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "PostgreSQL data outgrows one server. How do you scale it out horizontally on Azure?",
    hint: "An extension turns tables into distributed tables.",
    back: "Use the <strong>Citus</strong> extension, offered as <strong>elastic clusters</strong> in Azure Database for PostgreSQL flexible server and, earlier, as Azure Cosmos DB for PostgreSQL. A coordinator node routes queries to worker nodes; you pick a <strong>distribution column</strong> (typically the tenant ID) so each table is split into shards across workers, co-locate related tables on the same column, and keep small lookup tables as <strong>reference tables</strong> copied to every node. Read replicas only scale reads and do not add write or storage capacity.",
    tags: ["PostgreSQL", "Citus", "Sharding"]
  },
  {
    id: "azure-az305-fc-158",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Always Encrypted: deterministic vs randomized encryption. Which one lets you filter on the column?",
    hint: "Same plaintext, same ciphertext?",
    back: "<strong>Deterministic</strong> always produces the same ciphertext for the same value, so the database can do <strong>equality lookups, joins, GROUP BY and indexes</strong>, but patterns can leak for low-cardinality columns such as true/false or country. <strong>Randomized</strong> is more secure but blocks all server-side comparison unless the database uses <strong>Always Encrypted with secure enclaves</strong>, which also allows range, pattern matching and in-place encryption. In both cases the keys stay with the client, so DBAs and Microsoft never see plaintext.",
    tags: ["Always Encrypted", "Azure SQL Database"]
  },
  {
    id: "azure-az305-fc-159",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "TDE with a customer-managed key: what must the Key Vault have, and what happens if the key becomes inaccessible?",
    hint: "Two vault protections, and a database that stops answering.",
    back: "The vault (or Managed HSM) must have <strong>soft delete and purge protection</strong> enabled, and the server's managed identity needs get, wrapKey and unwrapKey permissions on the key. The key is the <strong>TDE protector</strong> that wraps each database encryption key. If access is revoked or the key is deleted, the databases become <strong>inaccessible</strong> within minutes; restoring access brings them back, which is why revocation is the crypto-shredding lever customers want.",
    tags: ["TDE", "Customer-managed keys", "Key Vault"]
  },
  {
    id: "azure-az305-fc-160",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Dynamic data masking vs Always Encrypted: which one actually protects data from a DBA?",
    hint: "One changes only what a query returns.",
    back: "<strong>Dynamic data masking</strong> rewrites query results for non-privileged users (for example <code>XXXX-1234</code>); the data is stored in plaintext, administrators and anyone with <strong>UNMASK</strong> see it, and clever ad hoc queries can infer masked values. It is a presentation control for support desks and reports. <strong>Always Encrypted</strong> keeps the column encrypted in storage, in memory and in transit with keys held by the client, so DBAs, sysadmins and the cloud operator cannot read it.",
    tags: ["Dynamic data masking", "Always Encrypted"]
  },
  {
    id: "azure-az305-fc-161",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What does SQL Data Discovery and Classification produce, and how does it feed auditing?",
    hint: "Labels travel into the audit log.",
    back: "It scans Azure SQL columns, recommends <strong>information types and sensitivity labels</strong> (such as Confidential - GDPR), and stores the labels as column metadata. You can use Microsoft Purview Information Protection labels. Once columns are labelled, SQL auditing writes a <strong>data_sensitivity_information</strong> field for each query that returns them, so you can report on who read sensitive data. It classifies and reports; it does not mask or encrypt anything by itself.",
    tags: ["Data classification", "Auditing", "Azure SQL Database"]
  },
  {
    id: "azure-az305-fc-162",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Why enable Microsoft Entra-only authentication on an Azure SQL logical server?",
    hint: "What happens to SQL logins?",
    back: "It <strong>disables SQL authentication</strong> for the server and all its databases, including the SQL admin login, so every connection must use a Microsoft Entra identity: users with MFA and Conditional Access, groups, or managed identities for applications. That removes shared passwords from connection strings and lets you enforce it at scale with the built-in Azure Policy for Entra-only authentication.",
    tags: ["Azure SQL Database", "Microsoft Entra ID", "Authentication"]
  },
  {
    id: "azure-az305-fc-163",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Ledger tables in Azure SQL: updatable ledger vs append-only ledger. Which workload fits each?",
    hint: "Can rows ever change?",
    back: "<strong>Updatable ledger tables</strong> allow inserts, updates and deletes, keeping every prior row version in a history table and hashing each transaction into the database digest: suited to balances or records that change but need a provable history. <strong>Append-only ledger tables</strong> block updates and deletes entirely: suited to event logs or security records that must never change. Both let you verify tampering by comparing digests stored in immutable Blob storage or Azure Confidential Ledger.",
    tags: ["Ledger", "Azure SQL Database"]
  },
  {
    id: "azure-az305-fc-164",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure SQL network access: server firewall rules vs private endpoint. What does a private endpoint change, and what else do you set?",
    hint: "The endpoint is only half the job.",
    back: "A <strong>private endpoint</strong> gives the logical server a private IP in your VNet so on-premises and VNet clients connect over private addressing, with private DNS resolving the server name to that IP. Then set <strong>Public network access = Disabled</strong>, otherwise the public endpoint and its IP firewall rules still accept connections. Server-level and database-level IP firewall rules only filter the public endpoint; they do not make traffic private.",
    tags: ["Azure SQL Database", "Private endpoint", "Network security"]
  },
  {
    id: "azure-az305-fc-165",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Cosmos DB APIs: which one do you choose for a brand-new application, and when do the others make sense?",
    hint: "Native vs wire-compatible.",
    back: "For a new app, choose <strong>API for NoSQL</strong>: the native API, first to get new features, with SQL-like queries over JSON. Choose <strong>MongoDB</strong>, <strong>Apache Cassandra</strong> or <strong>Apache Gremlin</strong> when you are moving an existing workload or team that already uses those drivers and query languages, and <strong>Table</strong> when migrating from Azure Table storage. Choose <strong>PostgreSQL</strong> (distributed Citus) only for relational data that needs horizontal scale.",
    tags: ["Cosmos DB", "API selection"]
  },
  {
    id: "azure-az305-fc-166",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What makes a good Cosmos DB partition key, and what hard limit does a bad one hit?",
    hint: "Cardinality, spread, and one number per logical partition.",
    back: "A good key has <strong>high cardinality</strong>, spreads <strong>storage and request volume evenly</strong>, and appears in the <strong>filters of your most frequent queries</strong> so they hit one partition instead of fanning out. A bad key (such as a date or a status) concentrates traffic on a hot partition and runs into the <strong>20 GB limit per logical partition</strong>, and a single physical partition serves at most 10,000 RU/s. The partition key cannot be changed in place; fixing it means copying data to a new container.",
    tags: ["Cosmos DB", "Partitioning"]
  },
  {
    id: "azure-az305-fc-167",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "A multi-tenant Cosmos DB container keys on TenantId, but a few large tenants are approaching 20 GB each. What solves it without a synthetic-key rewrite of every query?",
    hint: "More than one level.",
    back: "<strong>Hierarchical partition keys</strong> (subpartitioning): define up to <strong>three levels</strong>, such as TenantId then UserId then SessionId. Data for one tenant can then span many physical partitions and exceed 20 GB, while queries that filter on TenantId alone are still routed only to the partitions holding that tenant. It must be chosen when the container is created. The older workaround, a synthetic key that concatenates values, forces clients to know the full key to avoid fan-out queries.",
    tags: ["Cosmos DB", "Hierarchical partition keys"]
  },
  {
    id: "azure-az305-fc-168",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "List the five Cosmos DB consistency levels from strongest to weakest. Which is the default, and what does it guarantee?",
    hint: "S, B, S, C, E.",
    back: "<strong>Strong</strong>, <strong>Bounded staleness</strong>, <strong>Session</strong>, <strong>Consistent prefix</strong>, <strong>Eventual</strong>. <strong>Session</strong> is the default: within one client session you read your own writes, reads are monotonic and writes follow reads, while other sessions may see slightly older data. Stronger levels cost more latency and, for Strong and Bounded staleness, twice the RUs for reads compared with the weaker levels; Strong is not available on accounts with multiple write regions.",
    tags: ["Cosmos DB", "Consistency levels"]
  },
  {
    id: "azure-az305-fc-169",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Bounded staleness vs consistent prefix vs eventual: how do you tell them apart in an exam scenario?",
    hint: "Is lag bounded? Is order preserved?",
    back: "<strong>Bounded staleness</strong>: reads may lag, but never by more than K versions or T time, and order is preserved; pick it when a lag limit must be stated (for example, dashboards no more than 5 minutes behind across regions). <strong>Consistent prefix</strong>: no lag bound, but readers never see writes out of order. <strong>Eventual</strong>: no order or lag guarantee; cheapest and lowest latency, fine for counts, likes and telemetry where order does not matter.",
    tags: ["Cosmos DB", "Consistency levels"]
  },
  {
    id: "azure-az305-fc-170",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Table storage vs Azure Cosmos DB for Table: what do you gain by moving to Cosmos DB?",
    hint: "Indexes, latency, distribution.",
    back: "Both use the same Table API and key/attribute model. <strong>Table storage</strong> is very cheap, indexes only <strong>PartitionKey and RowKey</strong>, and has throughput targets rather than guarantees. <strong>Cosmos DB for Table</strong> indexes <strong>every property automatically</strong>, provides single-digit millisecond latency with provisioned or serverless throughput, turnkey <strong>global distribution</strong> with multi-region writes, and five consistency levels, at a higher cost. Apps move by changing the connection string.",
    tags: ["Table storage", "Cosmos DB"]
  },
  {
    id: "azure-az305-fc-171",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "How do Cosmos DB items expire automatically, and who pays for the deletes?",
    hint: "Container default, item override.",
    back: "Set <strong>time to live (TTL)</strong>: a container-level default (-1 means items never expire unless they set their own value) and an optional per-item <code>ttl</code> in seconds that overrides it. Expired items disappear from reads immediately and are deleted in the background using <strong>leftover provisioned RUs</strong>, so expiry adds no explicit request cost and needs no cleanup job. It fits session state, device telemetry and other short-lived data.",
    tags: ["Cosmos DB", "Time to live"]
  },
  {
    id: "azure-az305-fc-172",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Cosmos DB change feed: what does the default mode capture, and how do consumers read it at scale?",
    hint: "Creates and updates, but not everything.",
    back: "The default <strong>latest version</strong> mode delivers inserts and updates (the latest version of each changed item) in order within each partition key; <strong>deletes are not captured</strong>, so use a soft-delete flag plus TTL if downstream systems must see them. The <strong>all versions and deletes</strong> mode captures every change including deletes but requires continuous backup. Consumers scale out with the <strong>change feed processor</strong> (lease container) or an <strong>Azure Functions Cosmos DB trigger</strong>.",
    tags: ["Cosmos DB", "Change feed"]
  },
  {
    id: "azure-az305-fc-173",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Cosmos DB shared (database-level) throughput vs dedicated (container-level) throughput: when is sharing right?",
    hint: "Many small containers vs one hot one.",
    back: "<strong>Shared throughput</strong> provisions RUs on the database, and up to <strong>25 containers</strong> draw from that pool with no per-container guarantee: good for many small, lightly used containers such as per-tenant containers in a multi-tenant app. <strong>Dedicated throughput</strong> reserves RUs for one container with an SLA-backed guarantee and is right for a container with predictable, significant load. A database can mix both: shared-throughput containers plus some with their own dedicated RUs.",
    tags: ["Cosmos DB", "Throughput"]
  },
  {
    id: "azure-az305-fc-174",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "How do you stop applications using account keys for Cosmos DB and use Entra identities instead?",
    hint: "Data-plane roles, then switch the keys off.",
    back: "Assign <strong>Cosmos DB data-plane RBAC</strong> roles (the built-in Data Reader or Data Contributor, or a custom role) to managed identities or users at account, database or container scope, then set <strong>disableLocalAuth</strong> on the account so primary and secondary keys and resource tokens stop working. Control-plane Azure roles such as Contributor manage the account but do not grant data access on their own.",
    tags: ["Cosmos DB", "RBAC", "Managed identities"]
  },
  {
    id: "azure-az305-fc-175",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Semi-structured JSON data: when does it belong in Azure SQL rather than Cosmos DB?",
    hint: "Where do the rest of the transactions live?",
    back: "Keep JSON in <strong>Azure SQL</strong> (native <code>json</code> type and JSON functions, with computed-column indexes on hot properties) when it sits alongside relational data that needs <strong>joins, multi-table ACID transactions and existing SQL reporting</strong>, and the scale fits one database. Choose <strong>Cosmos DB</strong> when the data is document-first, the schema varies by item, you need <strong>single-digit millisecond reads at any scale, elastic throughput, or multi-region writes</strong>, and transactions stay within one partition key.",
    tags: ["Azure SQL Database", "Cosmos DB", "JSON"]
  }
];

export default AZURE_AZ305_FLASHCARDS_7;
