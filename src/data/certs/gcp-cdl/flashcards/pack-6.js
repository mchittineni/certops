export const GCP_CDL_FLASHCARDS_6 = [
  {
    id: "gcp-cdl-fc-126",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is data governance, in one sentence, and what three things does it combine?",
    hint: "It is not a tool you buy.",
    back: "Data governance is the framework that decides <strong>who owns data, who may use it, and how its quality, security and compliance are maintained</strong> across its life. It combines <strong>people</strong> (owners, stewards, users), <strong>processes</strong> (classification, access requests, quality checks, retention) and <strong>technology</strong> (catalogs, access controls, data loss prevention). Tools enforce governance; they do not replace the agreed policies.",
    tags: ["Data governance"]
  },
  {
    id: "gcp-cdl-fc-127",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Data owner vs data steward: who does what?",
    hint: "One is accountable, the other keeps it in shape day to day.",
    back: "The <strong>data owner</strong> is a business leader <strong>accountable</strong> for a data domain: they approve who gets access, set its classification and sign off on definitions. The <strong>data steward</strong> handles the <strong>day-to-day care</strong>: maintaining metadata and glossary terms, monitoring quality and resolving issues. Neither role is the platform administrator who runs the infrastructure.",
    tags: ["Data governance", "Data stewardship"]
  },
  {
    id: "gcp-cdl-fc-128",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does Knowledge Catalog (formerly Dataplex Universal Catalog) give an organization?",
    hint: "Think search, context, lineage, quality.",
    back: "<strong>Knowledge Catalog</strong> is Google Cloud's unified metadata and governance layer. It <strong>discovers and catalogs</strong> assets across BigQuery, Cloud Storage and other sources, lets users <strong>search</strong> them, attaches <strong>business context</strong> such as glossary terms, records <strong>data lineage</strong>, and runs <strong>data quality and profiling scans</strong>. It also supplies grounded context to gen AI applications. The rename happened in April 2026; APIs still carry the Dataplex name.",
    tags: ["Knowledge Catalog", "Metadata"]
  },
  {
    id: "gcp-cdl-fc-129",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What are the three main jobs of Sensitive Data Protection?",
    hint: "Find it, understand it, then protect it.",
    back: "<strong>Discover</strong>: profile BigQuery, Cloud Storage and other stores to find where sensitive data lives. <strong>Inspect and classify</strong>: detect types such as names, card numbers and national IDs using built-in infoTypes. <strong>De-identify</strong>: mask, redact, tokenize or pseudonymize values so data can still be analysed without exposing individuals. It does not encrypt storage or block network attacks.",
    tags: ["Sensitive Data Protection", "Privacy"]
  },
  {
    id: "gcp-cdl-fc-130",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "BigQuery column-level security vs row-level security: what does each restrict?",
    hint: "Vertical slice vs horizontal slice.",
    back: "<strong>Column-level security</strong> hides specific <strong>columns</strong> (such as salary or national ID) using <strong>policy tags</strong>; only principals granted access to the tag can read those values. <strong>Row-level security</strong> filters which <strong>rows</strong> a user sees through a row access policy (for example, only their own region). Both keep a single table copy and support least privilege; combine them when you need both kinds of restriction.",
    tags: ["BigQuery", "Least privilege"]
  },
  {
    id: "gcp-cdl-fc-131",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Data lineage vs audit logs: which question does each answer?",
    hint: "Where did it come from, versus who touched it.",
    back: "<strong>Data lineage</strong> answers <strong>how data was derived</strong>: which sources, jobs and intermediate tables produced a report or model input, so you can trace errors upstream or show a regulator the chain. <strong>Cloud Audit Logs</strong> answer <strong>who did what, where and when</strong>: which user or service account read, changed or administered a resource. A regulator asking how a figure was produced needs lineage; one asking who accessed customer data needs audit logs.",
    tags: ["Data lineage", "Cloud Audit Logs"]
  },
  {
    id: "gcp-cdl-fc-132",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why classify data by sensitivity instead of protecting everything the same way?",
    hint: "Protection should follow risk.",
    back: "A typical scheme labels data <strong>public, internal, confidential and restricted</strong>. Classification lets controls <strong>scale with risk</strong>: low-risk data stays easy to share and use, while restricted data gets tight access, masking, monitoring and retention rules. Uniform controls either over-protect harmless data, slowing the business, or under-protect the most sensitive data.",
    tags: ["Data classification", "Data governance"]
  },
  {
    id: "gcp-cdl-fc-133",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why is data quality a governance concern and not just an engineering task?",
    hint: "Who decides what good enough means?",
    back: "Quality rules encode <strong>business expectations</strong> (a customer must have a valid country, an order total cannot be negative), so owners and stewards must define them. Governance then makes quality <strong>measurable and visible</strong>, for example with Knowledge Catalog data quality scans whose results appear next to the dataset. Poor-quality data leads to wrong decisions and unreliable AI models, which is a business risk, not only a technical defect.",
    tags: ["Data quality", "Data governance"]
  },
  {
    id: "gcp-cdl-fc-134",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is vendor lock-in, and how do openness and interoperability reduce it?",
    hint: "Cost of leaving.",
    back: "<strong>Vendor lock-in</strong> is when leaving a provider is so costly or difficult (proprietary formats, APIs or skills) that you are effectively stuck. <strong>Openness</strong> reduces it by keeping data in <strong>open formats</strong> (Parquet, Avro, Apache Iceberg), running <strong>open-source engines</strong> (PostgreSQL, Apache Spark, Kubernetes) and using <strong>open standards and APIs</strong>, so data and skills move with you and other tools can work on the same data.",
    tags: ["Vendor lock-in", "Open source"]
  },
  {
    id: "gcp-cdl-fc-135",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is Apache Iceberg, and why does it matter for a data platform?",
    hint: "An open table format, not a database.",
    back: "<strong>Apache Iceberg</strong> is an open-source <strong>table format</strong> that adds table features, such as ACID transactions, schema evolution and time travel, on top of files (typically Parquet) in object storage. Because the format is open, <strong>many engines</strong> (BigQuery, Apache Spark, Trino, Flink) can read and write the same tables, so one copy of data serves several teams without lock-in to a single engine.",
    tags: ["Apache Iceberg", "Open formats"]
  },
  {
    id: "gcp-cdl-fc-136",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "When is BigQuery Omni the right answer?",
    hint: "The data lives in another cloud and should stay there.",
    back: "Use <strong>BigQuery Omni</strong> when data sits in <strong>Amazon S3 or Azure Blob Storage</strong> and you want to analyse it with the BigQuery interface and SQL <strong>without moving it</strong>, because of egress cost, contracts or data residency. Omni runs the compute in the other cloud's region. If copying the data into Google Cloud is acceptable, a transfer into BigQuery or Cloud Storage is the simpler alternative.",
    tags: ["BigQuery Omni", "Multicloud"]
  },
  {
    id: "gcp-cdl-fc-137",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How does BigQuery sharing (formerly Analytics Hub) share data without copying it?",
    hint: "Publish, subscribe, link.",
    back: "A publisher adds a shared dataset as a <strong>listing</strong> in a <strong>data exchange</strong>. A subscriber gets a <strong>linked dataset</strong> in their own project: a read-only pointer to the publisher's live data, so there is <strong>no replication</strong>, results are always current, the subscriber can join it with their own tables, and the publisher can <strong>revoke access</strong> at any time. Commercial listings can also appear in Cloud Marketplace.",
    tags: ["BigQuery sharing", "Data sharing"]
  },
  {
    id: "gcp-cdl-fc-138",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is a data silo, and what does it cost the business?",
    hint: "Isolated data, isolated decisions.",
    back: "A <strong>data silo</strong> is data held by one team or system in a way others cannot easily access or combine, often with its own format and access process. Silos cause <strong>inconsistent numbers</strong>, <strong>duplicated effort and storage</strong>, <strong>no single view of the customer</strong>, and slower decisions. They also starve AI models of the joined-up data they need.",
    tags: ["Data silos"]
  },
  {
    id: "gcp-cdl-fc-139",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Lakehouse for Apache Iceberg vs BigQuery native tables: when would you choose the lakehouse?",
    hint: "Who else needs to read the data?",
    back: "Choose <strong>BigQuery native storage</strong> when BigQuery is the only engine that needs the data: it is fully managed and simplest to operate. Choose <strong>Lakehouse for Apache Iceberg</strong> (formerly BigLake) when <strong>several engines</strong>, such as Apache Spark, Flink or third-party tools, must read and write the <strong>same copy</strong> in an open format, with one catalog and consistent fine-grained access across them. The trade-off is managing an open table layout in exchange for portability and multi-engine access.",
    tags: ["Lakehouse", "Apache Iceberg", "BigQuery"]
  },
  {
    id: "gcp-cdl-fc-140",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Datastream vs Database Migration Service: which is for what?",
    hint: "Keep the source, or leave the source.",
    back: "<strong>Datastream</strong> is serverless <strong>change data capture</strong>: it continuously replicates changes from Oracle, MySQL, PostgreSQL, SQL Server and other sources into BigQuery or Cloud Storage, typically while the source <strong>stays in service</strong>, to feed analytics. <strong>Database Migration Service</strong> <strong>moves</strong> a database to a managed target such as Cloud SQL or AlloyDB, with continuous replication until you cut over and retire the source.",
    tags: ["Datastream", "Database Migration Service"]
  },
  {
    id: "gcp-cdl-fc-141",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What kind of data belongs in Cloud Storage?",
    hint: "Files, not rows.",
    back: "<strong>Cloud Storage</strong> is object storage for <strong>unstructured data of any kind</strong>: images, video, audio, documents, backups, logs, data lake files and machine learning training data. Objects can be up to 5 TiB, durability is designed for 99.999999999% (eleven nines), access is over HTTPS, and there is no capacity to provision. It is not a database: there are no SQL queries or transactions across objects.",
    tags: ["Cloud Storage", "Object storage"]
  },
  {
    id: "gcp-cdl-fc-142",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Cloud SQL: which engines does it run, and what is it best for?",
    hint: "Three familiar engines, one region.",
    back: "<strong>Cloud SQL</strong> is fully managed <strong>MySQL, PostgreSQL and SQL Server</strong>. Google handles patching, backups, replication and failover. It suits <strong>traditional relational applications</strong> (web apps, ERP, CRM, internal tools) that run in one region and scale mostly <strong>vertically</strong>. It is usually the lowest-effort landing spot for an existing database.",
    tags: ["Cloud SQL", "Relational database"]
  },
  {
    id: "gcp-cdl-fc-143",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What combination of needs points to Spanner?",
    hint: "Relational plus a scale no single server can reach.",
    back: "Pick <strong>Spanner</strong> when you need <strong>relational SQL and ACID transactions</strong> together with <strong>horizontal scale</strong> and, often, <strong>global distribution</strong> with strong consistency. Multi-region configurations carry a <strong>99.999%</strong> availability SLA. Typical fits: global financial ledgers, gaming platforms, inventory and supply chain systems. For a modest single-region app, Cloud SQL is simpler and cheaper.",
    tags: ["Spanner", "Global database"]
  },
  {
    id: "gcp-cdl-fc-144",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is BigQuery, and what kind of workload is it not built for?",
    hint: "Analytics vs transactions.",
    back: "<strong>BigQuery</strong> is Google Cloud's <strong>serverless, fully managed data warehouse</strong> for analytical SQL over gigabytes to petabytes, with storage and compute separated and no servers to manage. It also offers built-in ML, geospatial and BI acceleration. It is <strong>not</strong> an operational database: high volumes of small, row-by-row transactions for an application belong in Cloud SQL, AlloyDB, Spanner or Firestore.",
    tags: ["BigQuery", "Data warehouse"]
  },
  {
    id: "gcp-cdl-fc-145",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Bigtable: when is it the right fit, and when is it the wrong one?",
    hint: "Huge scale, simple access by key.",
    back: "<strong>Right fit</strong>: very large datasets (terabytes to petabytes) with <strong>massive read and write throughput</strong> and <strong>single-digit millisecond</strong> access by row key, such as IoT and time series, ad tech, financial market data and personalization. <strong>Wrong fit</strong>: workloads needing SQL joins or multi-row transactions, or small datasets where a node-based NoSQL cluster is overkill.",
    tags: ["Bigtable", "NoSQL"]
  },
  {
    id: "gcp-cdl-fc-146",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Which app requirements point to Firestore?",
    hint: "Mobile and web, live and offline.",
    back: "<strong>Firestore</strong> is a serverless <strong>document database</strong> with a flexible schema. Choose it for <strong>mobile and web apps</strong> that need <strong>real-time listeners</strong> (changes pushed to clients), <strong>offline support</strong> with automatic sync, and automatic scaling with pay-per-operation pricing, for example user profiles, chat, collaboration and live dashboards.",
    tags: ["Firestore", "Document database"]
  },
  {
    id: "gcp-cdl-fc-147",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "AlloyDB vs Cloud SQL for PostgreSQL: what tips the choice to AlloyDB?",
    hint: "Both speak PostgreSQL; one is tuned for more.",
    back: "Both are managed and PostgreSQL-compatible. Choose <strong>AlloyDB</strong> for <strong>demanding workloads</strong>: substantially higher transactional throughput than standard PostgreSQL, a built-in <strong>columnar engine</strong> for fast analytics on live operational data, and AI features such as vector search. Choose <strong>Cloud SQL for PostgreSQL</strong> for standard workloads where cost and simplicity matter more than peak performance.",
    tags: ["AlloyDB", "Cloud SQL", "PostgreSQL"]
  },
  {
    id: "gcp-cdl-fc-148",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Order Cloud SQL, AlloyDB and Spanner by the problem each is built to solve.",
    hint: "Standard, faster, bigger than one server.",
    back: "<strong>Cloud SQL</strong>: standard managed MySQL, PostgreSQL or SQL Server for typical regional apps. <strong>AlloyDB</strong>: PostgreSQL-compatible with much higher performance and fast analytics on operational data. <strong>Spanner</strong>: relational with <strong>unlimited horizontal scale and global strong consistency</strong>, up to 99.999% availability. Move up the ladder only when the workload needs it; each step adds capability and usually cost.",
    tags: ["Cloud SQL", "AlloyDB", "Spanner", "Database selection"]
  },
  {
    id: "gcp-cdl-fc-149",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Firestore vs Bigtable: both are NoSQL, so how do you pick?",
    hint: "Who calls the database: an app client or a backend at huge volume?",
    back: "<strong>Firestore</strong>: document model, serverless, built for <strong>application development</strong>, with mobile and web SDKs, real-time listeners, offline sync and transactions, scaling to zero. <strong>Bigtable</strong>: wide-column model, provisioned by nodes, built for <strong>massive analytical and operational throughput</strong> on terabytes to petabytes with millisecond key lookups, accessed from backends. App features point to Firestore; raw scale and throughput point to Bigtable.",
    tags: ["Firestore", "Bigtable", "NoSQL"]
  },
  {
    id: "gcp-cdl-fc-150",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Which Google Cloud databases support PostgreSQL, and why does that help avoid lock-in?",
    hint: "Three services, three different depths of compatibility.",
    back: "<strong>Cloud SQL for PostgreSQL</strong> runs the open-source engine itself. <strong>AlloyDB</strong> is fully PostgreSQL-compatible. <strong>Spanner</strong> offers a <strong>PostgreSQL interface</strong> (dialect) for its distributed database. Because the SQL, drivers and tools follow the PostgreSQL standard, applications and skills <strong>move between these services and other PostgreSQL environments</strong> with far less rework than with a proprietary API.",
    tags: ["PostgreSQL", "Open source", "Vendor lock-in"]
  }
];

export default GCP_CDL_FLASHCARDS_6;
