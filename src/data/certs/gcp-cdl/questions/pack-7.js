export const GCP_CDL_QUESTIONS_7 = [
  {
    id: "gcp-cdl-151",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Linking patients, doctors and appointments",
    scenario: "A chain of dental clinics is replacing its scheduling system. Patients, dentists, rooms and appointments are closely linked, and the system must refuse to save an appointment that points to a patient or dentist who does not exist. Staff also need reports that combine all four kinds of record.",
    question: "Which data model suits this application best?",
    options: [
      { id: 'A', text: "Object storage that keeps each appointment as a separate file in a bucket named after the clinic." },
      { id: 'B', text: "A relational model with related tables, keys that enforce the links, and SQL queries that join them." },
      { id: 'C', text: "A wide-column store that records appointments as sparse rows keyed by a dentist and a timestamp." },
      { id: 'D', text: "A key-value model that saves each appointment as a single value retrieved by its booking number." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Relational databases organise data into tables of rows and columns with a defined schema; primary and foreign keys enforce that every appointment references a real patient and dentist, and SQL joins combine the tables for reporting. A key-value store retrieves values by key but does not enforce relationships or support joins. Object storage keeps whole files and offers no referential integrity or querying across records. A wide-column store scales for simple key access but also lacks foreign keys and joins.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-relational-database",
    tags: ["Relational database", "Data models"]
  },
  {
    id: "gcp-cdl-152",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A sales manager is told to learn SQL",
    scenario: "A regional sales manager wants to stop waiting for the data team and pull her own numbers from the company's Cloud SQL database and its BigQuery warehouse. A colleague tells her the most useful skill to learn first is SQL.",
    question: "What is SQL, in the sense her colleague means?",
    options: [
      { id: 'A', text: "A network protocol that encrypts the data travelling between an application and its database." },
      { id: 'B', text: "A file format for storing tables as compressed columns in object storage for later analysis." },
      { id: 'C', text: "A programming language used mainly to build the user interfaces of mobile and web applications." },
      { id: 'D', text: "A standard language for querying and changing data in relational databases and warehouses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structured Query Language (SQL) is the standard language for defining, querying and modifying data in relational databases such as Cloud SQL, AlloyDB and Spanner, and in data warehouses such as BigQuery, so it is exactly what the manager needs. Languages for mobile and web user interfaces are things like Kotlin, Swift and JavaScript. Encryption in transit is handled by protocols such as TLS. Compressed columnar file formats are things like Parquet and ORC.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction-sql",
    tags: ["SQL", "Data concepts"]
  },
  {
    id: "gcp-cdl-153",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A catalog where every product has different fields",
    scenario: "An online marketplace sells shoes, televisions, furniture and concert tickets. Each category has its own attributes, such as shoe size, screen resolution or seat row, and sellers add new attributes every week. The developers are tired of changing the database schema every time a new field appears.",
    question: "Which approach best handles this data?",
    options: [
      { id: 'A', text: "A star schema in a data warehouse with one fact table of sales and a dimension for each category." },
      { id: 'B', text: "Object storage holding one image of each product page for staff to read when they need details." },
      { id: 'C', text: "A relational table with a separate column for every possible attribute across all product types." },
      { id: 'D', text: "A NoSQL document database in which each product is a document holding only the fields it needs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Non-relational document databases such as Firestore store each record as a flexible, self-describing document, so a shoe and a television can carry different fields and new attributes can be added without a schema migration. One column per possible attribute produces a huge, mostly empty table that still needs a schema change for each new field. Images of product pages cannot be searched or filtered by attribute. A star schema is an analytical design for reporting on sales, not an operational catalog with changing attributes.",
    referenceUrl: "https://cloud.google.com/discover/what-is-nosql",
    tags: ["NoSQL", "Document database", "Flexible schema"]
  },
  {
    id: "gcp-cdl-154",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Explaining object storage to a finance director",
    scenario: "A finance director asks why the architects proposed object storage for the company's scanned invoices, contracts and call recordings instead of adding more disks to the file servers. He wants a short description of how object storage actually organises data.",
    question: "Which description of object storage is accurate?",
    options: [
      { id: 'A', text: "Each item is held in memory as a key and value so an application can read it in under a millisecond." },
      { id: 'B', text: "Data sits in tables of rows and columns with a fixed schema and is retrieved with SQL join queries." },
      { id: 'C', text: "Each item is stored whole with its metadata and a unique name in a flat, virtually unlimited namespace." },
      { id: 'D', text: "Data is split into fixed-size blocks on a volume that one virtual machine mounts as a local drive." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Object storage keeps each file as an object that bundles the data, its metadata and a unique identifier, in a flat namespace (a bucket) that scales without capacity planning and is reached over HTTP APIs, which suits large volumes of unstructured documents and recordings. Tables with a fixed schema and SQL joins describe a relational database. Fixed-size blocks mounted by a VM describe block storage, such as a Persistent Disk. An in-memory key-value store is a cache such as Memorystore, not durable bulk storage.",
    referenceUrl: "https://cloud.google.com/learn/what-is-object-storage",
    tags: ["Object storage", "Cloud Storage", "Data concepts"]
  },
  {
    id: "gcp-cdl-155",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Small edits inside a very large file",
    scenario: "A simulation program running on a Compute Engine VM writes a 200 GB working file and constantly updates small sections in the middle of it. A developer suggests keeping the file in a Cloud Storage bucket to save money, but testing shows the job slowing to a crawl.",
    question: "Why does the bucket perform poorly here, and what should the team use instead?",
    options: [
      { id: 'A', text: "Objects cannot be edited in place, so each change rewrites the object; a block storage disk suits this pattern." },
      { id: 'B', text: "The bucket is too small for the file; enabling Autoclass would let the object grow beyond its current limit." },
      { id: 'C', text: "The bucket is in the Standard class; moving it to Nearline would give the job faster access to the working file." },
      { id: 'D', text: "The bucket lacks Object Versioning; turning it on would let the job update only the parts that have changed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Storage objects are immutable: changing any part means uploading a new version of the whole object, so frequent small edits to a 200 GB file are extremely slow. Block storage, such as a Persistent Disk or Hyperdisk attached to the VM, lets the program update small ranges in place. Nearline is a colder, cheaper class with retrieval fees and no speed advantage. Object Versioning keeps older copies of whole objects and does not enable partial updates. Buckets have no overall size limit and objects can be up to 5 TiB, and Autoclass only changes storage classes.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks",
    tags: ["Object storage", "Block storage", "Cloud Storage"]
  },
  {
    id: "gcp-cdl-156",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "What the team means by a NoSQL database",
    scenario: "During a planning meeting, engineers at a gaming startup propose a NoSQL database for player profiles and session data. The product manager, who has only worked with traditional relational systems, asks what the term actually refers to before approving the design.",
    question: "Which explanation is accurate?",
    options: [
      { id: 'A', text: "A relational database that has been configured to run without any primary keys on its tables." },
      { id: 'B', text: "A database that cannot be queried in any way and only allows whole records to be downloaded." },
      { id: 'C', text: "A non-relational database that uses documents or key-value pairs instead of tables." },
      { id: 'D', text: "A storage service that only accepts unstructured files such as images, video and audio clips." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NoSQL, or non-relational, databases store data in models other than fixed relational tables, such as documents (Firestore), wide-column (Bigtable), key-value or graph, and typically offer flexible schemas and horizontal scaling. They are still queryable, often with their own query APIs and sometimes SQL-like languages, so the claim that they cannot be queried is false. A relational table without primary keys is still relational. A service that stores unstructured files is object storage, not a NoSQL database.",
    referenceUrl: "https://cloud.google.com/discover/what-is-nosql",
    tags: ["NoSQL", "Data concepts"]
  },
  {
    id: "gcp-cdl-157",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Money must never leave one account without arriving",
    scenario: "A credit union is designing a funds-transfer feature. Each transfer debits one account and credits another, and if anything fails midway the two changes must both be undone so that money is never lost or created. Auditors also require balances to be correct the moment a transfer completes.",
    question: "Which database property is essential for this feature?",
    options: [
      { id: 'A', text: "Batch loading, so transfers are gathered and written to the warehouse at the end of the business day." },
      { id: 'B', text: "Object immutability, so each balance file is replaced as a whole rather than edited at any point." },
      { id: 'C', text: "ACID transactions, so the debit and credit commit together or not at all and reads see the result." },
      { id: 'D', text: "Eventual consistency, so replicas holding the debit and credit agree on balances some time later." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ACID (atomicity, consistency, isolation, durability) transactions guarantee that the debit and credit either both commit or both roll back and that completed transfers are immediately visible, which relational databases such as Cloud SQL, AlloyDB and Spanner provide. Eventual consistency allows a window where replicas disagree, which auditors reject for balances. Object immutability concerns how files are stored, not coordinated changes to two records. End-of-day batch loading into a warehouse suits reporting, not real-time transfers.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-relational-database",
    tags: ["ACID", "Relational database", "Transactions"]
  },
  {
    id: "gcp-cdl-158",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "SQL analysts facing nested JSON events",
    scenario: "A fitness app sends semi-structured JSON events with nested fields that vary by device type. The company's analysts are fluent in SQL but have no programming background. Leadership wants them analysing the events within weeks, without an engineering project to flatten every field first.",
    question: "Which approach best fits?",
    options: [
      { id: 'A', text: "Write the events to Bigtable and have the analysts read rows by key through the client libraries." },
      { id: 'B', text: "Store the events in Firestore and have the analysts learn the Firestore SDK to query the documents." },
      { id: 'C', text: "Load the events into BigQuery, which can store JSON and nested data and query them directly with SQL." },
      { id: 'D', text: "Redesign the nested JSON into a fully normalised Cloud SQL schema, then let the analysts use SQL on the tables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "BigQuery supports semi-structured data through the JSON data type and nested, repeated fields, and analysts query them with standard SQL, so the team can start analysing without first flattening every field. Normalising into Cloud SQL is exactly the engineering project leadership wants to avoid, and each new device field would need another schema change. Firestore and Bigtable are operational databases accessed through SDKs and client libraries, which the analysts cannot use and which are not designed for analytical aggregation.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/json-data",
    tags: ["BigQuery", "SQL", "Semi-structured data"]
  },
  {
    id: "gcp-cdl-159",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Product photos that every page view loads",
    scenario: "A fashion retailer serves product photos from Cloud Storage to its website. The images are requested thousands of times a minute around the clock, and new images are added and old ones removed every day as the collection changes.",
    question: "Which Cloud Storage class is most cost-effective for these images?",
    options: [
      { id: 'A', text: "Coldline, which lowers the storage price further for data read around once a quarter." },
      { id: 'B', text: "Nearline, which lowers the storage price for data read no more than about once a month." },
      { id: 'C', text: "Archive, which has the lowest storage price for data read less than once a year." },
      { id: 'D', text: "Standard, which has no minimum storage duration and no retrieval fee on reads." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Standard storage is designed for hot, frequently accessed data such as website content: it has the highest per-GB storage price but no retrieval fees and no minimum storage duration, so constant reads and daily deletions cost nothing extra. Nearline, Coldline and Archive charge a retrieval fee on every read and impose minimum storage durations of 30, 90 and 365 days respectively, so thousands of reads a minute and frequent deletions would make them far more expensive overall.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Storage classes", "Standard"]
  },
  {
    id: "gcp-cdl-160",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Backups restored once a month for testing",
    scenario: "An architecture firm backs up its project files to Cloud Storage every night and keeps each backup for six months. The IT team restores a sample backup about once a month to prove recovery works, and otherwise the data is rarely touched.",
    question: "Which storage class best balances storage and access cost?",
    options: [
      { id: 'A', text: "Archive, which suits records read less than once a year and has a 365-day minimum." },
      { id: 'B', text: "Coldline, which suits data read about once a quarter, not each month, with a 90-day minimum." },
      { id: 'C', text: "Nearline, which suits data read about once a month and has a 30-day minimum period." },
      { id: 'D', text: "Standard, which suits hot data read many times a day and adds no retrieval fees at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Nearline is designed for data accessed roughly once a month or less, such as backups that are occasionally restored; its storage price is well below Standard and its 30-day minimum fits a six-month retention. Standard would cost more to store for data that is rarely read. Archive's retrieval fees are the highest and suit data read less than once a year, not monthly restore tests. Coldline is cheaper to store than Nearline but charges more per retrieval, which the monthly restores would incur repeatedly.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Storage classes", "Nearline"]
  },
  {
    id: "gcp-cdl-161",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Tax records kept for a decade just in case",
    scenario: "An accounting firm must retain scanned client tax records for ten years. The records are almost never opened, perhaps only if a tax authority opens an investigation, and the firm wants the lowest possible monthly storage cost while still being able to retrieve a file quickly when asked.",
    question: "Which Cloud Storage class should the firm use?",
    options: [
      { id: 'A', text: "Nearline, because it is designed for data that is opened roughly once a month or less." },
      { id: 'B', text: "Coldline, because it is designed for data that is opened roughly once a quarter or less." },
      { id: 'C', text: "Archive, because it has the lowest storage price for data accessed less than once a year." },
      { id: 'D', text: "Standard, because it offers the lowest access latency for any file an investigator asks for." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Archive storage has the lowest storage price and is intended for data accessed less than once a year, such as long-term regulatory records; unlike tape-style archives it still returns data in milliseconds, so a file can be produced quickly when requested, and the 365-day minimum duration is irrelevant for ten-year retention. Standard offers no speed advantage over Archive, since all classes have millisecond access, and it costs far more to store. Nearline and Coldline are also cheaper than Standard but cost more per month than Archive for data that is almost never read.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Storage classes", "Archive"]
  },
  {
    id: "gcp-cdl-162",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Disaster recovery copies tested each quarter",
    scenario: "A logistics company keeps disaster recovery copies of its database exports in Cloud Storage for two years. The copies are read only during a quarterly recovery drill or a real disaster. Finance wants storage cost reduced as far as possible without paying heavy retrieval fees during the drills.",
    question: "Which storage class best fits these copies?",
    options: [
      { id: 'A', text: "Archive, since it targets data read under once a year and has the highest retrieval charge." },
      { id: 'B', text: "Nearline, since it targets data read about once a month and has a 30-day minimum duration." },
      { id: 'C', text: "Coldline, since it targets data read about once a quarter and has a 90-day minimum duration." },
      { id: 'D', text: "Standard, since recovery data should always sit in the class with no retrieval charges at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Coldline is designed for data accessed about once a quarter, which matches quarterly drills, and its storage price sits below Nearline while its retrieval fee is lower than Archive's; the 90-day minimum fits two-year retention. Standard would be the most expensive way to store data read four times a year. Nearline stores data at a higher price than Coldline, which is only justified for roughly monthly access. Archive would store the data more cheaply but its higher retrieval fee is aimed at data read less than once a year, so four drills a year erode the saving.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Storage classes", "Coldline"]
  },
  {
    id: "gcp-cdl-163",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A shared bucket nobody can predict",
    scenario: "A university research bucket holds millions of datasets uploaded by hundreds of research groups. Some files are read daily for months, others are never opened again after upload, and nobody can predict which will be which. The IT team wants storage costs optimised without writing and maintaining rules.",
    question: "Which Cloud Storage feature best fits?",
    options: [
      { id: 'A', text: "A retention policy, which prevents any object from being deleted until a set period has passed." },
      { id: 'B', text: "Autoclass, which moves each object to colder classes when unused and back to Standard when read." },
      { id: 'C', text: "Object Versioning, which keeps a noncurrent copy each time an object is replaced or deleted." },
      { id: 'D', text: "Lifecycle rules, which change classes or delete objects based on age conditions the team sets, not on when they are read." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Autoclass manages storage classes automatically per object based on actual access: objects not read for 30 days move to Nearline and can continue down to Coldline and Archive, and any object that is read returns to Standard, with no early deletion or retrieval charges for those transitions. That suits unpredictable access with no rules to maintain. Lifecycle rules act on conditions such as age rather than on access, so they require the team to predict patterns and maintain rules. Object Versioning and retention policies protect data from overwrite or deletion and do not reduce storage cost.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage", "Autoclass", "Cost optimization"]
  },
  {
    id: "gcp-cdl-164",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Cheap storage class, surprising invoice",
    scenario: "To cut costs, a marketing agency wrote its temporary video render files to a Coldline bucket instead of Standard. The files are deleted about a week after being created. The next invoice shows storage charges that are higher than when the agency used Standard.",
    question: "What explains the higher bill?",
    options: [
      { id: 'A', text: "Coldline buckets charge a flat monthly fee per bucket regardless of the objects stored there." },
      { id: 'B', text: "Coldline has a 90-day minimum, so each file deleted early is billed as if it stayed 90 days." },
      { id: 'C', text: "Coldline objects are automatically copied to a second region, doubling the stored capacity." },
      { id: 'D', text: "Coldline charges network egress for every file that is deleted from the bucket before a year." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Nearline, Coldline and Archive have minimum storage durations of 30, 90 and 365 days. Deleting a Coldline object after a week still incurs an early deletion charge equal to the remaining days of the 90-day minimum, so short-lived files cost far more than in Standard, which has no minimum. Deletion does not incur network egress, and egress applies to data leaving a location rather than to deletions. Cloud Storage has no flat per-bucket monthly fee. Replication across regions depends on the bucket's location type (dual-region or multi-region), not on the Coldline class.",
    referenceUrl: "https://cloud.google.com/storage/pricing",
    tags: ["Cloud Storage", "Coldline", "Early deletion"]
  },
  {
    id: "gcp-cdl-165",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "How quickly can Archive data come back",
    scenario: "A law firm plans to store closed case files in the Archive class. A partner objects that, in a previous job, archived files took up to twelve hours to restore, and clients sometimes need a document the same afternoon. The firm asks how Cloud Storage Archive behaves.",
    question: "Which statement about the Archive class is correct?",
    options: [
      { id: 'A', text: "Archive objects are available within milliseconds, with a retrieval fee and a 365-day minimum." },
      { id: 'B', text: "Archive data is written to offline tape and shipped back on a Transfer Appliance when requested." },
      { id: 'C', text: "A restore request must first copy each object back to Standard, which can take up to twelve hours." },
      { id: 'D', text: "Archive objects can only be read through BigQuery external tables rather than downloaded directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "All Cloud Storage classes, including Archive, use the same API and return data with millisecond latency; there is no restore step. Archive's trade-offs are cost-based: the lowest storage price, a higher per-GB retrieval fee, and a 365-day minimum storage duration. A multi-hour restore request describes tape-style archive tiers in other products, not Cloud Storage. Transfer Appliance is a physical device for moving large datasets into Google Cloud, not a way to read archived objects. Archive objects can be downloaded directly like any other object.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Archive", "Retrieval"]
  },
  {
    id: "gcp-cdl-166",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Call recordings with a fixed life cycle",
    scenario: "A contact center stores call recordings in Cloud Storage. Recordings are reviewed often in the first month, occasionally until day 90, rarely after that, and policy says they must be deleted after exactly two years. The pattern is the same for every recording.",
    question: "Which approach automates this most directly?",
    options: [
      { id: 'A', text: "Set a retention policy of two years on the bucket so recordings are removed once it has passed." },
      { id: 'B', text: "Define lifecycle rules that change the storage class at 30 and 90 days and delete objects at two years." },
      { id: 'C', text: "Schedule a Storage Transfer Service job to copy recordings into a cheaper bucket after thirty days." },
      { id: 'D', text: "Turn on Autoclass so objects move to colder classes automatically once nobody reads them any more." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Object Lifecycle Management applies actions when conditions are met, such as SetStorageClass to Nearline at 30 days and Coldline at 90 days and Delete at 730 days, which exactly encodes a predictable, age-based policy including the mandatory deletion. Autoclass reacts to observed access rather than fixed ages and never deletes objects, so the two-year rule would still need handling. A retention policy prevents deletion before the period ends; it does not delete anything when the period expires. Copying with Storage Transfer Service duplicates data and still leaves the originals and the deletion unsolved.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Lifecycle rules", "Storage classes"]
  },
  {
    id: "gcp-cdl-167",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A colder class for data read every morning",
    scenario: "A retailer moved its 80 TB of clickstream history from Standard to Coldline because Coldline's per-GB storage price is much lower. A nightly batch pipeline, however, reads the entire dataset every day to rebuild recommendation models, and the monthly bill has risen sharply since the change.",
    question: "What should the retailer do?",
    options: [
      { id: 'A', text: "Move the data back to Standard, since reading it daily makes Coldline's retrieval fees the main cost." },
      { id: 'B', text: "Enable Object Versioning, so the pipeline reads cached older versions instead of the current objects." },
      { id: 'C', text: "Move the data to Archive, since a storage price even lower than Standard will outweigh the costs of the daily reads." },
      { id: 'D', text: "Move the data to Nearline, since its 30-day minimum is shorter than Coldline's 90-day minimum period." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Colder classes trade a lower storage price for per-GB retrieval fees. Reading 80 TB every day in Coldline incurs retrieval charges on the full dataset daily, which dwarfs the storage saving, so Standard, which has no retrieval fees, is cheaper overall for data read this often. Archive has the highest retrieval fees and would make the problem worse. Nearline's retrieval fee is lower than Coldline's but still applies to every daily read, and its minimum duration is irrelevant here. Object Versioning keeps noncurrent copies and adds storage; reading them still incurs the same class-based retrieval fees.",
    referenceUrl: "https://cloud.google.com/storage/pricing",
    tags: ["Cloud Storage", "Retrieval fees", "Cost optimization"]
  },
  {
    id: "gcp-cdl-168",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Moving an on-premises MySQL database to Cloud SQL",
    scenario: "A ticketing company wants to move its on-premises MySQL database to Cloud SQL for MySQL. The team is small, wants a guided, managed migration rather than building its own replication scripts, and needs the source to stay online while the data is copied.",
    question: "Which Google Cloud service should it use?",
    options: [
      { id: 'A', text: "Storage Transfer Service, which moves large sets of files from on-premises storage to Cloud Storage." },
      { id: 'B', text: "BigQuery Data Transfer Service, which runs scheduled loads from supported sources into BigQuery." },
      { id: 'C', text: "Transfer Appliance, which ships a physical device for offline migration of petabytes into the cloud." },
      { id: 'D', text: "Database Migration Service, which replicates the source continuously and then lets the team cut over." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Database Migration Service is a managed, serverless service for migrating MySQL, PostgreSQL, SQL Server and Oracle databases to Cloud SQL and AlloyDB; it performs an initial load and continuous replication while the source stays online, then lets the team promote the target at cutover. Storage Transfer Service and Transfer Appliance move files and bulk data, not a live database with ongoing changes. BigQuery Data Transfer Service loads data into the analytics warehouse, not into Cloud SQL.",
    referenceUrl: "https://cloud.google.com/database-migration/docs/overview",
    tags: ["Database Migration Service", "Cloud SQL", "Migration"]
  },
  {
    id: "gcp-cdl-169",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Leaving Oracle licensing for PostgreSQL",
    scenario: "An insurer wants to reduce its Oracle licence costs by moving a policy administration database to a managed PostgreSQL-compatible service on Google Cloud. The schema includes stored procedures written in PL/SQL that must be converted, and downtime at cutover must be short.",
    question: "Which approach fits best?",
    options: [
      { id: 'A', text: "Copy an Oracle schema export to Cloud Storage with Storage Transfer Service and import it into Cloud SQL." },
      { id: 'B', text: "Rehost Oracle unchanged on Compute Engine VMs so that the existing licences move with the database." },
      { id: 'C', text: "Use Database Migration Service with a conversion workspace to convert the schema and code for AlloyDB." },
      { id: 'D', text: "Use Datastream to replicate the Oracle tables into BigQuery and point the application at the warehouse." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Database Migration Service supports heterogeneous Oracle to PostgreSQL migrations, including to AlloyDB and Cloud SQL for PostgreSQL: a conversion workspace translates schema and PL/SQL code (with Gemini assistance), and continuous replication keeps cutover downtime short. Datastream to BigQuery feeds analytics; an operational application cannot run on a warehouse. Rehosting Oracle on VMs keeps the licence costs the insurer wants to cut. An Oracle export file cannot be imported into a PostgreSQL target without conversion, and a file copy gives no path to short downtime.",
    referenceUrl: "https://cloud.google.com/database-migration/docs/oracle-to-postgresql",
    tags: ["Database Migration Service", "AlloyDB", "Oracle", "Modernization"]
  },
  {
    id: "gcp-cdl-170",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A vendor database that needs OS-level control",
    scenario: "A manufacturer runs a third-party production-planning system whose vendor certifies it only on a specific database version with custom operating system settings and agent software installed on the database host. The company must leave its data center within three months and cannot change the application.",
    question: "What is the most suitable way to move this database?",
    options: [
      { id: 'A', text: "Rehost it on a Compute Engine VM that the team configures exactly as the vendor's certification requires." },
      { id: 'B', text: "Refactor it onto Spanner so that the planning system gains horizontal scaling and global availability." },
      { id: 'C', text: "Rebuild it on Firestore so that the planning data sits in a serverless database with a flexible schema." },
      { id: 'D', text: "Replatform it onto Cloud SQL so that Google, not the vendor, patches the engine and runs backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rehosting, or lift and shift, onto a Compute Engine VM gives full control of the operating system, database version and installed agents, so the vendor's certified configuration can be reproduced and the deadline met without changing the application. Cloud SQL is managed, so the company cannot install host agents or tune the operating system, which breaks the vendor certification. Refactoring to Spanner or rebuilding on Firestore would require application changes the company cannot make and would take far longer than three months.",
    referenceUrl: "https://cloud.google.com/architecture/migration-to-gcp-getting-started",
    tags: ["Rehost", "Compute Engine", "Migration"]
  },
  {
    id: "gcp-cdl-171",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Keeping Exadata while moving to Google Cloud",
    scenario: "A bank runs core systems on Oracle Exadata and Oracle Real Application Clusters. It wants to move out of its data center and use Google Cloud analytics and AI services close to the data, but its risk team will not approve converting the database engine or changing its Oracle support arrangements.",
    question: "Which option best fits?",
    options: [
      { id: 'A', text: "Cloud SQL, moving the databases off Exadata onto a fully managed engine that Google patches." },
      { id: 'B', text: "Oracle Database@Google Cloud, running Oracle-managed Exadata services inside Google Cloud regions." },
      { id: 'C', text: "Spanner, moving the core systems to a relational database that scales horizontally across regions." },
      { id: 'D', text: "AlloyDB, converting the Oracle schema and PL/SQL code to PostgreSQL with Database Migration Service." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Oracle Database@Google Cloud runs Oracle Exadata Database Service and Autonomous Database, operated by Oracle, inside Google Cloud data centers with low-latency access to services such as BigQuery and Gemini Enterprise Agent Platform, so the bank keeps its engine, RAC and Oracle support. Cloud SQL does not offer an Oracle engine. AlloyDB and Spanner both require converting away from Oracle, which the risk team has ruled out.",
    referenceUrl: "https://cloud.google.com/oracle/database/docs/overview",
    tags: ["Oracle Database@Google Cloud", "Migration", "Oracle"]
  },
  {
    id: "gcp-cdl-172",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Retiring an on-premises Teradata warehouse",
    scenario: "A telecom operator wants to replace its on-premises Teradata data warehouse with BigQuery. It has thousands of existing SQL scripts and reports, wants an assessment of what will need to change, and hopes to avoid rewriting every query by hand.",
    question: "Which Google Cloud offering is designed for this?",
    options: [
      { id: 'A', text: "BigQuery Migration Service, which assesses the warehouse, translates SQL and helps transfer data." },
      { id: 'B', text: "Datastream, which captures ongoing changes from source databases and delivers them to BigQuery." },
      { id: 'C', text: "Storage Transfer Service, which schedules large file transfers from other storage to Cloud Storage." },
      { id: 'D', text: "Database Migration Service, which moves operational databases rather than a warehouse into Cloud SQL and AlloyDB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery Migration Service bundles tools for data warehouse migrations from sources such as Teradata, Amazon Redshift and Snowflake: a migration assessment, batch and interactive SQL translation into GoogleSQL, and data transfer, which directly addresses thousands of existing scripts. Database Migration Service targets operational databases moving to Cloud SQL and AlloyDB, not warehouses. Datastream replicates changes from operational databases such as MySQL, PostgreSQL and Oracle and does not translate warehouse SQL. Storage Transfer Service moves files only.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/migration-intro",
    tags: ["BigQuery Migration Service", "Data warehouse", "Migration"]
  },
  {
    id: "gcp-cdl-173",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Database administrators stuck on maintenance",
    scenario: "At a regional retailer, the three database administrators spend most of their week applying patches, checking backups and planning failover tests for self-managed databases. The CIO wants them working on data projects that help the business instead.",
    question: "Which benefit of moving to a managed database service addresses the CIO's goal?",
    options: [
      { id: 'A', text: "The provider handles routine patching, backups and high availability, freeing staff for new work." },
      { id: 'B', text: "The provider takes over schema design and query tuning, so the retailer no longer needs data skills." },
      { id: 'C', text: "The provider bills a fixed yearly fee, so database costs no longer change with how much is used." },
      { id: 'D', text: "The provider carries all security responsibility, so the retailer no longer needs access policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Managed services such as Cloud SQL, AlloyDB and Spanner automate undifferentiated tasks like patching, backups, replication and failover, which frees skilled staff to focus on work that adds business value. Schema design and query optimisation remain the customer's responsibility. Under the shared responsibility model the customer still controls who can access data and how it is used. Managed databases are generally billed on usage and provisioned capacity, not a fixed yearly fee, though committed-use discounts are available.",
    referenceUrl: "https://cloud.google.com/sql/docs/introduction",
    tags: ["Managed database", "Modernization"]
  },
  {
    id: "gcp-cdl-174",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Twenty hand-sharded MySQL servers",
    scenario: "A fast-growing social gaming company splits its player database across 20 MySQL servers by player ID. Every few months it must re-shard as servers fill up, which causes outages and weeks of engineering work, and cross-shard transactions are unreliable. The company is willing to change its application to fix this permanently.",
    question: "Which modernization path best addresses the root problem?",
    options: [
      { id: 'A', text: "Move each shard to Cloud SQL for MySQL and add read replicas to spread the query load further." },
      { id: 'B', text: "Move to Spanner, which scales relational data horizontally and handles sharding automatically." },
      { id: 'C', text: "Put Memorystore in front of the shards so that most player reads are served from the cache." },
      { id: 'D', text: "Rehost the 20 MySQL shards on Compute Engine VMs with larger machine types and faster disks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Spanner is a relational database that splits and rebalances data across nodes automatically and supports ACID transactions across those splits, so the company stops hand-sharding and gains reliable transactions that span players; refactoring the application is acceptable here. Bigger VMs only delay the next re-shard. Cloud SQL removes server maintenance, but each instance still scales vertically and read replicas do not add write capacity or fix cross-shard transactions. A cache reduces read load but leaves writes, re-sharding and transactional consistency unchanged.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Spanner", "Refactor", "Modernization"]
  },
  {
    id: "gcp-cdl-175",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A fifteen-minute window to switch databases",
    scenario: "An online pharmacy is moving its 3 TB PostgreSQL database from its data center to AlloyDB. The business will accept at most fifteen minutes of downtime, at 2 a.m. on a Sunday, and the site takes orders around the clock until then.",
    question: "Which migration method meets the downtime limit?",
    options: [
      { id: 'A', text: "Ship the data on a Transfer Appliance, load it into AlloyDB and restart the site once the load finishes." },
      { id: 'B', text: "Use Database Migration Service continuous replication, then cut over once the target has caught up." },
      { id: 'C', text: "Run a dump-and-restore migration on Sunday night through Cloud Storage into AlloyDB before reopening." },
      { id: 'D', text: "Use BigQuery Data Transfer Service to load the tables into AlloyDB during the Sunday maintenance window." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Database Migration Service performs an initial full load and then continuously replicates changes to AlloyDB while the source keeps taking orders; at the maintenance window the team stops writes, lets the last changes apply and promotes the target, which takes minutes. Dumping, copying and restoring 3 TB during the window would take hours. A Transfer Appliance takes days in transit, and orders placed meanwhile would be missing. BigQuery Data Transfer Service loads data into BigQuery, not into AlloyDB.",
    referenceUrl: "https://cloud.google.com/database-migration/docs/overview",
    tags: ["Database Migration Service", "AlloyDB", "Minimal downtime"]
  }
];

export default GCP_CDL_QUESTIONS_7;
