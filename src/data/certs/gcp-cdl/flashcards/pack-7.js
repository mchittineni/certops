export const GCP_CDL_FLASHCARDS_7 = [
  {
    id: "gcp-cdl-fc-151",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Relational vs non-relational databases: what is the core difference?",
    hint: "Fixed tables and joins, or flexible models and scale-out.",
    back: "<strong>Relational</strong> databases store data in <strong>tables with a predefined schema</strong>, link tables through keys, and use <strong>SQL</strong> with ACID transactions (Cloud SQL, AlloyDB, Spanner). <strong>Non-relational (NoSQL)</strong> databases use other models such as documents, wide-column or key-value, with <strong>flexible schemas</strong> and easy horizontal scaling (Firestore, Bigtable). Choose relational for strongly related data and integrity rules; choose NoSQL for flexible or massive-scale data with simple access patterns.",
    tags: ["Relational database", "NoSQL"]
  },
  {
    id: "gcp-cdl-fc-152",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Does NoSQL mean a database that cannot be queried with SQL?",
    hint: "Read the acronym generously.",
    back: "No. NoSQL is usually read as <strong>\"not only SQL\"</strong>: it describes databases that do not use the <strong>relational table model</strong>. They are fully queryable, typically through their own APIs or query languages, and some offer SQL-like interfaces. The defining traits are <strong>non-relational data models</strong> and <strong>flexible schemas</strong>, not the absence of queries.",
    tags: ["NoSQL", "SQL"]
  },
  {
    id: "gcp-cdl-fc-153",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Name four NoSQL data models and a Google Cloud service for each.",
    hint: "Documents, columns, pairs, relationships.",
    back: "<strong>Document</strong>: JSON-like records with nested fields, <strong>Firestore</strong>. <strong>Wide-column</strong>: sparse rows keyed for huge scale, <strong>Bigtable</strong>. <strong>Key-value</strong>: a value looked up by a key, often in memory, <strong>Memorystore</strong> (Redis or Valkey). <strong>Graph</strong>: nodes and relationships for connected data, <strong>Spanner Graph</strong>. Each model fits a different access pattern, which is why no single NoSQL database suits everything.",
    tags: ["NoSQL", "Data models"]
  },
  {
    id: "gcp-cdl-fc-154",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Object vs block vs file storage: what is each and which Google Cloud service provides it?",
    hint: "Bucket, disk, share.",
    back: "<strong>Object</strong>: whole files plus metadata in a flat namespace, accessed over HTTP APIs; <strong>Cloud Storage</strong>. <strong>Block</strong>: a raw volume a VM mounts like a local drive, supporting small in-place updates; <strong>Persistent Disk and Hyperdisk</strong>. <strong>File</strong>: a shared file system many machines mount over NFS; <strong>Filestore</strong>. Objects cannot be edited in place, so constantly changing files belong on block or file storage.",
    tags: ["Object storage", "Block storage", "File storage"]
  },
  {
    id: "gcp-cdl-fc-155",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What do the four letters of ACID guarantee?",
    hint: "All or nothing, rules hold, no interference, it sticks.",
    back: "<strong>Atomicity</strong>: all changes in a transaction commit or none do. <strong>Consistency</strong>: every transaction leaves data valid under the database's rules. <strong>Isolation</strong>: concurrent transactions do not see each other's partial work. <strong>Durability</strong>: once committed, changes survive failures. ACID is why relational databases suit money transfers, orders and inventory.",
    tags: ["ACID", "Transactions"]
  },
  {
    id: "gcp-cdl-fc-156",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Schema-on-write vs schema-on-read: what is the difference?",
    hint: "When is the structure enforced?",
    back: "<strong>Schema-on-write</strong>: data must match a defined structure <strong>before it is stored</strong>, as in relational databases and warehouse tables; queries are simple and data is clean, but new fields need schema changes. <strong>Schema-on-read</strong>: raw data is stored as-is, typically in a data lake on Cloud Storage, and structure is applied <strong>when it is queried</strong>; ingestion is flexible, but quality checks move downstream.",
    tags: ["Schema", "Data concepts"]
  },
  {
    id: "gcp-cdl-fc-157",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Strong vs eventual consistency: what is the difference, and where does each show up in Google Cloud databases?",
    hint: "Does every reader see the latest write immediately?",
    back: "<strong>Strong consistency</strong>: every read returns the latest committed write. <strong>Eventual consistency</strong>: replicas may briefly return older data but converge over time, in exchange for availability and latency. <strong>Spanner</strong> is strongly consistent even across regions, and <strong>Firestore</strong> queries are strongly consistent. <strong>Bigtable</strong> is strongly consistent within a single cluster, but replication between clusters is <strong>eventually consistent</strong> by default.",
    tags: ["Consistency", "Spanner", "Bigtable"]
  },
  {
    id: "gcp-cdl-fc-158",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "List the four Cloud Storage classes with their minimum storage durations.",
    hint: "0, 30, 90, 365.",
    back: "<strong>Standard</strong>: no minimum. <strong>Nearline</strong>: 30 days. <strong>Coldline</strong>: 90 days. <strong>Archive</strong>: 365 days. The storage price falls from Standard to Archive, while retrieval fees rise. Deleting, replacing or reclassifying an object before its minimum incurs an early deletion charge for the remaining days.",
    tags: ["Cloud Storage", "Storage classes"]
  },
  {
    id: "gcp-cdl-fc-159",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What stays the same across every Cloud Storage class, from Standard to Archive?",
    hint: "Speed is not what you trade away.",
    back: "All classes share the <strong>same API and tools</strong>, <strong>millisecond access latency</strong> (no restore step, even for Archive), and the same design target of <strong>eleven nines of annual durability</strong>. What differs is <strong>price</strong>: per-GB storage cost, retrieval fees, minimum storage duration and availability SLA. The trade-off is cost, not speed.",
    tags: ["Cloud Storage", "Storage classes", "Durability"]
  },
  {
    id: "gcp-cdl-fc-160",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Which Cloud Storage classes charge retrieval fees, and why does that matter for class choice?",
    hint: "Cheap to keep can be expensive to read.",
    back: "<strong>Nearline, Coldline and Archive</strong> charge a per-GB <strong>retrieval fee</strong> each time data is read, rising from Nearline to Archive; <strong>Standard has none</strong>. So the right class depends on <strong>total cost</strong>, storage plus access: data read often is cheaper in Standard despite its higher storage price, while rarely read data is cheaper in colder classes.",
    tags: ["Cloud Storage", "Retrieval fees"]
  },
  {
    id: "gcp-cdl-fc-161",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "A Nearline object is deleted 10 days after upload. How is it billed?",
    hint: "The minimum still applies.",
    back: "It is billed for the <strong>full 30-day minimum</strong>: 10 days of normal storage plus an <strong>early deletion charge</strong> equal to the remaining 20 days. The same logic applies to Coldline (90 days) and Archive (365 days). Short-lived or frequently replaced data belongs in <strong>Standard</strong>, which has no minimum.",
    tags: ["Cloud Storage", "Early deletion", "Nearline"]
  },
  {
    id: "gcp-cdl-fc-162",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How does Autoclass decide where an object lives, and what does it cost?",
    hint: "It watches access, not age.",
    back: "With <strong>Autoclass</strong> on a bucket, objects start in Standard; an object not accessed for <strong>30 days</strong> moves to Nearline, and, if the terminal class allows, on to Coldline at 90 days and Archive at 365. Any object that is <strong>read returns to Standard</strong>. Autoclass transitions incur <strong>no retrieval or early deletion charges</strong>; instead there is a small per-object management fee, and objects under 128 KiB stay in Standard.",
    tags: ["Cloud Storage", "Autoclass"]
  },
  {
    id: "gcp-cdl-fc-163",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Autoclass vs Object Lifecycle Management: when should you choose each?",
    hint: "Unpredictable access, or rules you already know.",
    back: "Choose <strong>Autoclass</strong> when <strong>access is unpredictable</strong> and you want Cloud Storage to move each object by actual use, including back to Standard when read, with no rules to maintain. Choose <strong>lifecycle rules</strong> when the pattern is <strong>known and age-based</strong> or when you need actions Autoclass does not perform, above all <strong>deleting</strong> objects at a set age or trimming old versions. Autoclass never deletes data.",
    tags: ["Autoclass", "Lifecycle rules", "Cloud Storage"]
  },
  {
    id: "gcp-cdl-fc-164",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Region, dual-region, multi-region: are these Cloud Storage classes?",
    hint: "Where the data lives vs how often it is read.",
    back: "No. They are <strong>location types</strong>, chosen per bucket, and are independent of storage class. <strong>Region</strong>: data in one region, lowest cost and latency for workloads there. <strong>Dual-region</strong>: two specific regions for higher availability. <strong>Multi-region</strong>: a large area such as US or EU for the highest availability and content served widely. Any class can be combined with any location type.",
    tags: ["Cloud Storage", "Location types"]
  },
  {
    id: "gcp-cdl-fc-165",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Rule of thumb: which Cloud Storage class fits which access frequency?",
    hint: "Daily, monthly, quarterly, yearly.",
    back: "<strong>Standard</strong>: hot data read frequently, such as website content, streaming media and active analytics. <strong>Nearline</strong>: about once a month or less, such as backups. <strong>Coldline</strong>: about once a quarter or less, such as disaster recovery copies. <strong>Archive</strong>: less than once a year, such as regulatory archives. When nobody knows the pattern, turn on Autoclass.",
    tags: ["Cloud Storage", "Storage classes"]
  },
  {
    id: "gcp-cdl-fc-166",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What can an Object Lifecycle Management rule do, and what triggers it?",
    hint: "An action plus conditions.",
    back: "Each rule pairs an <strong>action</strong> with <strong>conditions</strong>. Actions include <strong>SetStorageClass</strong> (move to a colder class), <strong>Delete</strong>, and aborting incomplete multipart uploads. Conditions include object <strong>age</strong>, creation date, current storage class, whether the object is a noncurrent version and how many newer versions exist. Rules run automatically across the bucket, so retention and tiering policies need no scripts.",
    tags: ["Lifecycle rules", "Cloud Storage"]
  },
  {
    id: "gcp-cdl-fc-167",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Rehost, replatform, refactor: what does each mean for a database?",
    hint: "Same box, managed box, new design.",
    back: "<strong>Rehost</strong> (lift and shift): run the same database on Compute Engine VMs; fastest, but you still manage it. <strong>Replatform</strong> (move and improve): move to a managed service with the same engine, such as Cloud SQL or AlloyDB; little code change, much less operational work. <strong>Refactor</strong>: redesign onto a cloud-native database such as Spanner or Firestore to gain scale or new capabilities; the most effort and the most benefit.",
    tags: ["Migration", "Modernization"]
  },
  {
    id: "gcp-cdl-fc-168",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does Database Migration Service move, and to where?",
    hint: "Operational databases into managed Google Cloud databases.",
    back: "<strong>Database Migration Service</strong> is a serverless tool that migrates <strong>MySQL, PostgreSQL, SQL Server and Oracle</strong> databases, from on-premises or other clouds, into <strong>Cloud SQL</strong> and <strong>AlloyDB for PostgreSQL</strong>. It performs an initial load plus <strong>continuous replication</strong> so the source stays online until cutover. It is not for data warehouses; those use BigQuery Migration Service.",
    tags: ["Database Migration Service", "Migration"]
  },
  {
    id: "gcp-cdl-fc-169",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Homogeneous vs heterogeneous database migration: what changes, and which is harder?",
    hint: "Same engine or a different one.",
    back: "<strong>Homogeneous</strong>: the engine stays the same, for example MySQL to Cloud SQL for MySQL or PostgreSQL to AlloyDB; schema and code carry over, so it is the simpler path. <strong>Heterogeneous</strong>: the engine changes, for example Oracle to PostgreSQL; schema, data types and stored procedures must be <strong>converted</strong> and tested, so it takes more effort but can remove licence costs and lock-in.",
    tags: ["Migration", "Database Migration Service"]
  },
  {
    id: "gcp-cdl-fc-170",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is a Database Migration Service conversion workspace for?",
    hint: "Oracle code does not run on PostgreSQL as-is.",
    back: "A <strong>conversion workspace</strong> handles heterogeneous <strong>Oracle to PostgreSQL</strong> migrations (targeting AlloyDB or Cloud SQL for PostgreSQL). It converts the <strong>schema and PL/SQL code objects</strong> into PostgreSQL equivalents, flags items that need manual work, and offers <strong>Gemini-assisted conversion</strong> for tricky code. The converted schema is then applied to the target before data replication starts.",
    tags: ["Database Migration Service", "Oracle", "PostgreSQL"]
  },
  {
    id: "gcp-cdl-fc-171",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Oracle workloads: Bare Metal Solution vs Oracle Database@Google Cloud?",
    hint: "Who runs the Oracle layer?",
    back: "<strong>Bare Metal Solution</strong>: dedicated physical servers near Google Cloud regions on which <strong>you install and manage</strong> Oracle yourself, keeping full control of licensing and configuration. <strong>Oracle Database@Google Cloud</strong>: <strong>Oracle-managed</strong> Exadata Database Service and Autonomous Database running inside Google Cloud data centers, bought through Google Cloud Marketplace. Both keep Oracle unchanged; the choice is self-managed control versus a managed Oracle service.",
    tags: ["Oracle", "Bare Metal Solution", "Oracle Database@Google Cloud"]
  },
  {
    id: "gcp-cdl-fc-172",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does BigQuery Migration Service include?",
    hint: "Assess, translate, move, validate.",
    back: "Tools for moving a <strong>data warehouse</strong> such as Teradata, Amazon Redshift, Snowflake or Oracle into BigQuery: a <strong>migration assessment</strong> that inventories workloads, <strong>SQL translation</strong> (batch and interactive) into GoogleSQL, <strong>data transfer</strong> through BigQuery Data Transfer Service, and <strong>data validation</strong> to compare source and target. It cuts the manual rewriting of thousands of scripts and reports.",
    tags: ["BigQuery Migration Service", "Data warehouse"]
  },
  {
    id: "gcp-cdl-fc-173",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why modernize a database rather than just rehosting it?",
    hint: "Moving the problem is not solving it.",
    back: "Rehosting is fast but keeps the old <strong>operational burden, scaling limits and licence costs</strong>. Modernizing to managed or cloud-native databases adds <strong>automated patching, backups and high availability</strong>, <strong>elastic or horizontal scale</strong> (Spanner), <strong>built-in analytics and AI features</strong> (AlloyDB columnar engine and vector search), and often <strong>lower total cost</strong> by leaving proprietary licences behind. Many organizations rehost first and modernize later.",
    tags: ["Modernization", "Managed database"]
  },
  {
    id: "gcp-cdl-fc-174",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Outline the stages of a minimal-downtime database migration.",
    hint: "Copy, keep in sync, switch, keep a way back.",
    back: "1. <strong>Assess</strong> the source and prepare the target (and convert the schema if the engine changes). 2. <strong>Full load</strong> of existing data. 3. <strong>Continuous replication</strong> (change data capture) while the source stays live. 4. <strong>Validate</strong> the data and test the application against the target. 5. <strong>Cutover</strong>: stop writes, let the last changes apply, promote the target and repoint the app, taking minutes. 6. Keep a <strong>fallback</strong> plan until the new system is proven.",
    tags: ["Migration", "Minimal downtime"]
  },
  {
    id: "gcp-cdl-fc-175",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Storage Transfer Service vs Transfer Appliance: when do you use each?",
    hint: "Over the network, or in a box.",
    back: "<strong>Storage Transfer Service</strong> moves data <strong>over the network</strong> into Cloud Storage from other clouds (such as Amazon S3 or Azure), HTTP sources or on-premises file systems, and can run on a schedule. <strong>Transfer Appliance</strong> is a <strong>physical device</strong> Google ships to you for <strong>offline</strong> transfer when datasets are so large, or bandwidth so limited, that a network copy would take too long.",
    tags: ["Storage Transfer Service", "Transfer Appliance"]
  }
];

export default GCP_CDL_FLASHCARDS_7;
