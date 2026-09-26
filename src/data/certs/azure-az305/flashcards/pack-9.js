export const AZURE_AZ305_FLASHCARDS_9 = [
  {
    id: "azure-az305-fc-201",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Which two storage account settings enforce encryption in transit, and what do they reject?",
    hint: "One is about HTTP, the other about protocol versions.",
    back: "<strong>Secure transfer required</strong> (on by default) rejects requests over plain HTTP and SMB connections without encryption. <strong>Minimum TLS version</strong> set to TLS 1.2 rejects clients negotiating older TLS versions. Enforce both across subscriptions with the built-in Azure Policy definitions. NFS shares and Blob NFS 3.0 rely on network isolation rather than this setting, so they need private endpoints or service endpoints.",
    tags: ["Storage security", "Encryption in transit", "TLS"]
  },
  {
    id: "azure-az305-fc-202",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Storage firewall: trusted Microsoft services exception vs resource instance rules. Which admits less?",
    hint: "Every instance of a service, or one named resource.",
    back: "The <strong>trusted Microsoft services</strong> exception lets listed services (Azure Backup, Event Grid, Site Recovery and others) through the firewall, and for many of them it admits <strong>any instance</strong> registered in your subscription. A <strong>resource instance rule</strong> admits <strong>one specific resource</strong> (such as a single Synapse workspace or AI Search service) by resource ID, with its access limited by the RBAC roles granted to its managed identity. Use instance rules when least privilege matters.",
    tags: ["Storage firewall", "Resource instance rules"]
  },
  {
    id: "azure-az305-fc-203",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Immutable blob storage: container-level vs version-level WORM. When do you need version-level?",
    hint: "One policy for everything, or one per blob.",
    back: "<strong>Container-level</strong> WORM applies one time-based retention policy or legal hold to every blob in the container: simple when all data shares a retention period. <strong>Version-level</strong> WORM (requires blob versioning) lets a default policy be set at account or container level and <strong>overridden per blob version</strong>, so blobs in one container can have different retention periods, and new versions can be written while previous ones stay locked. Existing containers can be migrated to version-level support.",
    tags: ["Immutable storage", "Version-level WORM"]
  },
  {
    id: "azure-az305-fc-204",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Time-based retention policy: unlocked vs locked. What can still be changed after locking?",
    hint: "Longer yes, shorter never.",
    back: "An <strong>unlocked</strong> policy protects data but can be shortened, extended or deleted, so it is for testing only and is not compliant with SEC 17a-4(f). A <strong>locked</strong> policy cannot be shortened or deleted; its interval can only be <strong>extended, up to five times</strong>. While any blob is under a locked policy, the container and the storage account cannot be deleted. For append blobs that keep growing, enable <strong>allowProtectedAppendWrites</strong> so appends are allowed without modifying existing data.",
    tags: ["Immutable storage", "Retention policy", "Compliance"]
  },
  {
    id: "azure-az305-fc-205",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Storage encryption options: Microsoft-managed keys, customer-managed keys, customer-provided keys, infrastructure encryption, encryption scopes. What does each control?",
    hint: "Who holds the key, how many layers, and at what granularity.",
    back: "Data is always encrypted at rest with 256-bit AES. <strong>Microsoft-managed keys</strong>: the default, no management. <strong>Customer-managed keys</strong>: your key in Key Vault or Managed HSM wraps the account key, with rotation and revocation under your control. <strong>Customer-provided keys</strong>: the client sends a key on each Blob request. <strong>Infrastructure encryption</strong>: a second layer with a different algorithm, set only at account creation. <strong>Encryption scopes</strong>: different keys per container or blob in one account.",
    tags: ["Storage encryption", "Key management"]
  },
  {
    id: "azure-az305-fc-206",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "User delegation SAS vs service SAS vs account SAS: which should you prefer and why?",
    hint: "What signs it?",
    back: "Prefer the <strong>user delegation SAS</strong>: it is signed with a key obtained by a <strong>Microsoft Entra identity</strong>, is limited to that identity's RBAC permissions, is valid for up to 7 days, and never exposes the account key. <strong>Service SAS</strong> (one service) and <strong>account SAS</strong> (one or more services, including service-level operations) are signed with the <strong>account key</strong>, so anyone holding the key can mint them and they stop working only when the key is rotated.",
    tags: ["Shared access signatures", "Storage security"]
  },
  {
    id: "azure-az305-fc-207",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What is a stored access policy, and how does it help when a service SAS leaks?",
    hint: "Move the constraints to the server side.",
    back: "A <strong>stored access policy</strong> is defined on a container (or file share, queue or table) and holds a SAS's start time, expiry and permissions on the server. A service SAS that references the policy inherits those values, so you can <strong>revoke or change every SAS tied to it</strong> by editing or deleting the policy, without rotating the account key. Each container can hold up to five stored access policies. It does not apply to user delegation SAS or account SAS.",
    tags: ["Shared access signatures", "Stored access policy"]
  },
  {
    id: "azure-az305-fc-208",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Storage service endpoint vs private endpoint: what does each change about how clients reach the account?",
    hint: "Public IP with a filter, or a private IP.",
    back: "A <strong>service endpoint</strong> routes a subnet's traffic to the storage account's <strong>public endpoint</strong> over the Azure backbone and lets the storage firewall allow that subnet; on-premises clients cannot use it. A <strong>private endpoint</strong> gives the account a <strong>private IP in your VNet</strong>, reachable from peered VNets and from on-premises over VPN or ExpressRoute, with a private DNS zone such as <code>privatelink.blob.core.windows.net</code>. Pair it with disabled public access for full isolation.",
    tags: ["Private endpoint", "Service endpoint", "Storage security"]
  },
  {
    id: "azure-az305-fc-209",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Data Lake Storage ACLs: access ACL vs default ACL. What happens to existing files when you change a folder's default ACL?",
    hint: "Default ACLs are templates.",
    back: "An <strong>access ACL</strong> controls access to the file or directory it is set on. A <strong>default ACL</strong> exists only on directories and is a <strong>template copied to new child items</strong> when they are created. Changing a default ACL does <strong>not</strong> change existing children, and neither does changing a parent's access ACL. To apply a change to what already exists, use a <strong>recursive ACL update</strong> (portal, PowerShell, CLI or SDK), and assign entries to groups so later membership changes need no ACL edits.",
    tags: ["Data Lake Storage", "ACLs"]
  },
  {
    id: "azure-az305-fc-210",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Data Factory building blocks: pipeline, activity, dataset, linked service, integration runtime, trigger. What is each?",
    hint: "Workflow, step, data shape, connection, compute, schedule.",
    back: "A <strong>pipeline</strong> is a workflow of <strong>activities</strong> (copy, data flow, notebook, stored procedure, control flow). A <strong>linked service</strong> is a connection definition, like a connection string, to a store or compute service. A <strong>dataset</strong> describes the data within it (a table, a folder of files). The <strong>integration runtime</strong> is the compute that executes activities. A <strong>trigger</strong> decides when a pipeline runs.",
    tags: ["Azure Data Factory", "Concepts"]
  },
  {
    id: "azure-az305-fc-211",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Data Factory integration runtimes: Azure vs self-hosted vs Azure-SSIS. When do you use each?",
    hint: "Cloud, private network, legacy packages.",
    back: "<strong>Azure IR</strong>: fully managed compute for cloud-to-cloud copies and data flows, optionally inside a managed virtual network with managed private endpoints. <strong>Self-hosted IR</strong>: software you install on machines inside a private network (on-premises or a VNet) to reach sources that are not publicly reachable, using outbound connections only. <strong>Azure-SSIS IR</strong>: a managed cluster that runs existing SSIS packages lifted from SQL Server.",
    tags: ["Azure Data Factory", "Integration runtime"]
  },
  {
    id: "azure-az305-fc-212",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Data Factory triggers: schedule vs tumbling window vs event. What distinguishes the tumbling window trigger?",
    hint: "State, backfill and dependencies.",
    back: "A <strong>schedule trigger</strong> fires on a wall-clock schedule and is fire-and-forget. A <strong>tumbling window trigger</strong> fires for fixed, contiguous, non-overlapping windows, passes each window's start and end to the pipeline, keeps state per window, supports <strong>backfill</strong> of past windows, retries, concurrency limits and <strong>dependencies</strong> on other windows. <strong>Event triggers</strong> fire on storage events (blob created or deleted) or custom Event Grid events.",
    tags: ["Azure Data Factory", "Triggers"]
  },
  {
    id: "azure-az305-fc-213",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Data Factory vs Synapse pipelines vs Data Factory in Microsoft Fabric: how do you choose?",
    hint: "Standalone PaaS, inside a workspace, or SaaS.",
    back: "<strong>Azure Data Factory</strong>: standalone PaaS orchestration with the full connector set, all three integration runtime types including Azure-SSIS, and Git-based CI/CD. <strong>Synapse pipelines</strong>: the same engine inside a Synapse workspace alongside SQL and Spark pools, but without some features such as the Azure-SSIS IR. <strong>Fabric Data Factory</strong>: SaaS pipelines and Dataflow Gen2 writing into OneLake, the choice when the analytics estate is standardising on Fabric.",
    tags: ["Azure Data Factory", "Synapse Analytics", "Microsoft Fabric"]
  },
  {
    id: "azure-az305-fc-214",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "A Data Factory copy activity is too slow. Which levers speed it up?",
    hint: "Compute units, parallelism, staging, source partitioning.",
    back: "Raise <strong>data integration units</strong> (DIUs, on the Azure IR) or scale out the self-hosted IR nodes; raise <strong>parallel copies</strong>; use the source connector's <strong>partition options</strong> (physical partitions or a dynamic range on a column) so reads run in parallel; use <strong>staged copy</strong> through Blob or Data Lake Storage to load Synapse with the COPY statement or to compress data leaving an on-premises network; copy incrementally instead of full loads; and keep source, sink and IR in the same region.",
    tags: ["Azure Data Factory", "Copy activity", "Performance"]
  },
  {
    id: "azure-az305-fc-215",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Synapse serverless SQL pool vs dedicated SQL pool vs Apache Spark pool: which fits which workload?",
    hint: "Pay-per-query, provisioned warehouse, code.",
    back: "<strong>Serverless SQL pool</strong>: ad hoc T-SQL over files in the lake, billed per TB processed, nothing to provision. <strong>Dedicated SQL pool</strong>: a provisioned MPP data warehouse (DWUs) for predictable, high-concurrency reporting over loaded, distributed tables; can be paused. <strong>Spark pool</strong>: Python, Scala, SQL and .NET notebooks and jobs for data engineering and machine learning, with auto-pause and autoscale.",
    tags: ["Synapse Analytics", "SQL pools", "Spark"]
  },
  {
    id: "azure-az305-fc-216",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Dedicated SQL pool table distributions: when do you choose hash, round-robin or replicated?",
    hint: "Size and join pattern; 2 GB is the rule of thumb.",
    back: "Data is spread across <strong>60 distributions</strong>. <strong>Hash</strong>: large fact tables (over about 2 GB compressed), on a high-cardinality, evenly spread column used in joins or aggregations, not a date. <strong>Replicated</strong>: small dimension tables (under about 2 GB) cached in full on each compute node so joins need no data movement. <strong>Round-robin</strong>: staging tables and tables with no good hash key; fast to load, but joins require data movement.",
    tags: ["Synapse Analytics", "Dedicated SQL pool", "Distribution"]
  },
  {
    id: "azure-az305-fc-217",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Data Explorer vs Synapse dedicated SQL pool vs Azure Databricks: what is each best at?",
    hint: "Logs, warehouse, lakehouse.",
    back: "<strong>Azure Data Explorer</strong>: fast ad hoc analytics over high-volume logs, telemetry and time series, with streaming ingestion and KQL. <strong>Synapse dedicated SQL pool</strong>: structured enterprise data warehousing and BI over modelled, batch-loaded tables in T-SQL. <strong>Azure Databricks</strong>: Spark-based data engineering, lakehouse tables in Delta Lake and machine learning in Python, Scala and SQL. Fabric offers equivalents of all three (Eventhouse, Warehouse, Spark) over OneLake.",
    tags: ["Azure Data Explorer", "Synapse Analytics", "Azure Databricks"]
  },
  {
    id: "azure-az305-fc-218",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Stream Analytics windows: tumbling, hopping, sliding, session and snapshot. How do they differ?",
    hint: "Overlap, trigger, and gaps.",
    back: "<strong>Tumbling</strong>: fixed-size, contiguous, non-overlapping (count per 5 minutes). <strong>Hopping</strong>: fixed-size windows that overlap because they advance by a hop smaller than the size (10-minute window every 5 minutes). <strong>Sliding</strong>: output only when an event enters or leaves the window, for conditions like more than 3 events within 10 minutes. <strong>Session</strong>: groups events separated by less than a timeout, up to a maximum duration. <strong>Snapshot</strong>: groups events with the same timestamp.",
    tags: ["Azure Stream Analytics", "Windowing"]
  },
  {
    id: "azure-az305-fc-219",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Medallion architecture: what belongs in bronze, silver and gold?",
    hint: "Raw, cleaned, business-ready.",
    back: "<strong>Bronze</strong>: raw data landed as received, append-only, kept for replay and audit. <strong>Silver</strong>: cleaned, deduplicated, conformed and joined data with enforced schema, the enterprise view of entities. <strong>Gold</strong>: aggregated, business-level tables and star schemas shaped for reporting, BI and ML features. Each layer is usually stored as Delta tables in the lake, with pipelines or notebooks promoting data from one layer to the next.",
    tags: ["Lakehouse", "Medallion architecture", "Data Lake Storage"]
  },
  {
    id: "azure-az305-fc-220",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What does Delta Lake add on top of plain Parquet files in a data lake?",
    hint: "A transaction log.",
    back: "A <strong>transaction log</strong> beside the Parquet files gives <strong>ACID transactions</strong> (readers never see partial writes), <strong>time travel</strong> to query or restore earlier versions, <strong>schema enforcement and evolution</strong>, and efficient <strong>MERGE, UPDATE and DELETE</strong> for upserts and CDC. Maintenance commands such as OPTIMIZE (compacting small files) and VACUUM (removing old files) keep performance and cost in check. Databricks, Synapse Spark and Fabric all read and write Delta.",
    tags: ["Delta Lake", "Lakehouse"]
  },
  {
    id: "azure-az305-fc-221",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Why store analytical data in the lake as Parquet (or Delta) rather than CSV or JSON?",
    hint: "Columns and compression.",
    back: "Parquet is <strong>columnar and compressed</strong>: queries read only the columns they need, and column statistics let engines skip row groups, so scans are faster and pay-per-TB engines such as serverless SQL pools charge less. It also stores the <strong>schema and data types</strong> with the data. CSV and JSON are row-based text: every query reads whole files and parses types. Aim for files of roughly hundreds of MB rather than many tiny files.",
    tags: ["Parquet", "Data Lake Storage", "Cost optimization"]
  },
  {
    id: "azure-az305-fc-222",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Microsoft Fabric: OneLake shortcuts vs mirroring. When do you use each?",
    hint: "Point at data vs replicate a database.",
    back: "A <strong>shortcut</strong> is a pointer: data already in Data Lake Storage, Amazon S3, Google Cloud Storage or another OneLake location appears in a lakehouse <strong>without being copied</strong>, queried in place. <strong>Mirroring</strong> continuously <strong>replicates an operational database</strong> (Azure SQL Database, SQL Managed Instance, Cosmos DB, Snowflake and others) into OneLake as Delta tables in near real time, with no ETL and no load on the source's analytical capacity. Shortcuts for files, mirroring for databases.",
    tags: ["Microsoft Fabric", "OneLake", "Mirroring"]
  },
  {
    id: "azure-az305-fc-223",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What does Microsoft Purview add to a data estate built on Data Factory, Synapse and Data Lake Storage?",
    hint: "Find it, classify it, trace it.",
    back: "The <strong>Data Map</strong> scans registered sources to build an inventory with automatic <strong>classification</strong> of sensitive data (such as credit card numbers). <strong>Lineage</strong> is captured from Data Factory and Synapse pipelines, showing how data flows from source to report. The <strong>Unified Catalog</strong> lets users search for, understand and request access to data products with business glossary terms. It governs and catalogues; it does not move or transform data.",
    tags: ["Microsoft Purview", "Data governance", "Lineage"]
  },
  {
    id: "azure-az305-fc-224",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What is Unity Catalog in Azure Databricks, and what problem does it solve?",
    hint: "One governance layer across workspaces.",
    back: "Unity Catalog is Databricks' <strong>central governance layer</strong>: one metastore per region shared across workspaces, a three-level namespace (<code>catalog.schema.table</code>), fine-grained <strong>permissions</strong> on catalogs, schemas, tables, views, rows and columns, <strong>audit logs</strong>, and automatic <strong>lineage</strong>. It replaces per-workspace Hive metastores and credentials embedded in notebooks with storage credentials and external locations managed centrally.",
    tags: ["Azure Databricks", "Unity Catalog", "Data governance"]
  },
  {
    id: "azure-az305-fc-225",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Power BI Import vs DirectQuery vs Direct Lake: which connection mode fits which case?",
    hint: "Copy, live query, or read Delta directly.",
    back: "<strong>Import</strong>: data is loaded into the semantic model; fastest queries and full DAX, but data is only as fresh as the last refresh and model size is capped by capacity. <strong>DirectQuery</strong>: every visual queries the source live; always current, but slower and adds load to the source. <strong>Direct Lake</strong> (Fabric): the model reads <strong>Delta tables in OneLake directly</strong>, giving near-import speed on large data without scheduled refresh copies.",
    tags: ["Power BI", "Direct Lake", "Data analysis"]
  }
];

export default AZURE_AZ305_FLASHCARDS_9;
