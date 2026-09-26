export const GCP_CDL_QUESTIONS_6 = [
  {
    id: "gcp-cdl-126",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "What a hospital group expects from governance",
    scenario: "A hospital group has patient, billing and staffing data spread across dozens of systems. Nobody can say who is accountable for each dataset, analysts use data they are not cleared to see, and two departments report different patient counts for the same month. The chief data officer proposes a data governance program.",
    question: "Which description best matches what the program is meant to deliver?",
    options: [
      { id: 'A', text: "A one-time project that copies every departmental system into a single cloud database so all the records sit in one location." },
      { id: 'B', text: "Agreed ownership, policies and controls so data stays accurate, protected, compliant and usable by the right people at the right time." },
      { id: 'C', text: "A backup and disaster recovery plan that keeps a second copy of each dataset in another region in case of outages." },
      { id: 'D', text: "A set of executive dashboards that show patient, billing and staffing figures on one screen for the leadership team." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data governance is the set of roles, policies, standards and controls that decide who owns data, who may use it and how its quality, security and compliance are maintained throughout its life; that directly addresses unclear accountability, inappropriate access and conflicting numbers. Consolidating systems into one database is a migration, and moving data does not by itself assign owners or settle whose patient count is right. Backup and disaster recovery protect availability, not access rules or definitions. Executive dashboards consume governed data; built on ungoverned sources they would simply display the conflicting counts.",
    referenceUrl: "https://cloud.google.com/learn/what-is-data-governance",
    tags: ["Data governance", "Data ownership"]
  },
  {
    id: "gcp-cdl-127",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Three meanings of an active customer",
    scenario: "At a subscription retailer, marketing counts a customer as active after any login in 90 days, finance after a paid invoice in 30 days, and support after any ticket in a year. Board reports built from these figures disagree every quarter. The data is already in BigQuery and query performance is not a concern.",
    question: "Which governance step addresses the root cause?",
    options: [
      { id: 'A', text: "Build a separate Looker Studio dashboard for each department so every team can keep reporting its own active customer count." },
      { id: 'B', text: "Appoint a data owner for customer data who agrees one documented definition that every report must use from now on." },
      { id: 'C', text: "Move the customer tables from BigQuery into Spanner so that every department reads from one strongly consistent database." },
      { id: 'D', text: "Encrypt the customer tables with customer-managed encryption keys so that only authorised teams can read the figures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The disagreement is a definitional problem, not a technical one. Governance assigns an accountable owner or steward and records a single business definition, typically in a glossary or catalog, so every report calculates the metric the same way. Separate dashboards per department institutionalise the three conflicting definitions. Spanner's strong consistency concerns concurrent transactions; the teams already read the same data and still compute different answers. Customer-managed encryption keys control who can decrypt data, which does nothing to reconcile how the metric is defined.",
    referenceUrl: "https://cloud.google.com/learn/what-is-data-governance",
    tags: ["Data governance", "Data stewardship", "Business glossary"]
  },
  {
    id: "gcp-cdl-128",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Finding trusted tables across a data estate",
    scenario: "A logistics firm has thousands of BigQuery tables and Cloud Storage buckets created by different teams over six years. Analysts waste days working out which tables exist, what the columns mean, where the data came from and whether it passes quality checks. Leadership wants a central, searchable place for that context.",
    question: "Which Google Cloud offering fits this need?",
    options: [
      { id: 'A', text: "Security Command Center, which inventories every cloud asset and ranks misconfigurations and threats by business risk." },
      { id: 'B', text: "Looker Studio, which lets each analyst connect to BigQuery tables and publish reports describing their context and quality." },
      { id: 'C', text: "Knowledge Catalog, which gathers metadata, business context, lineage and data quality results for assets across the estate." },
      { id: 'D', text: "Cloud Logging, which collects log entries from every project so analysts can search when and by whom each table was written." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Knowledge Catalog (formerly Dataplex Universal Catalog) is Google Cloud's metadata and governance layer: it discovers assets in BigQuery, Cloud Storage and other sources, lets teams search them, attaches business definitions, and surfaces lineage and data quality results, which is exactly the context analysts are missing. Cloud Logging records operational events; it can show that a job wrote a table but not what the columns mean or whether the data is trustworthy. Security Command Center inventories resources for security posture, not for data discovery. Looker Studio reports visualise data but are not a governed, searchable catalog of the estate.",
    referenceUrl: "https://docs.cloud.google.com/dataplex/docs/introduction",
    tags: ["Knowledge Catalog", "Metadata", "Data discovery"]
  },
  {
    id: "gcp-cdl-129",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Locating personal data before an audit",
    scenario: "An insurer is preparing for a privacy audit and suspects that customer names, national ID numbers and card numbers have been copied into analytics tables and file exports over the years. Before it can apply stricter controls, it needs to know which datasets actually contain this kind of information.",
    question: "Which Google Cloud service helps the insurer find it?",
    options: [
      { id: 'A', text: "Sensitive Data Protection, which scans and profiles storage and tables to discover and classify personal information." },
      { id: 'B', text: "Cloud Key Management Service, which creates and rotates the encryption keys that protect the insurer's stored data." },
      { id: 'C', text: "Cloud Armor, which inspects requests arriving at the insurer's applications and blocks those that try to steal information." },
      { id: 'D', text: "Identity-Aware Proxy, which checks a user's identity and context before letting them reach an internal application." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sensitive Data Protection discovers, classifies and profiles sensitive elements such as names, government ID numbers and payment card numbers across BigQuery and Cloud Storage, and can also mask or de-identify them, so it answers the question of where personal data lives. Cloud Armor protects applications at the network edge and never looks inside stored datasets. Cloud KMS manages encryption keys; encrypting data does not reveal which tables hold personal information. Identity-Aware Proxy controls access to applications, not the discovery of sensitive content.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview",
    tags: ["Sensitive Data Protection", "Data classification", "Privacy"]
  },
  {
    id: "gcp-cdl-130",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Hiding salary columns from most analysts",
    scenario: "An employee table in BigQuery holds job titles, locations and salaries. Every analyst in the people team should be able to query the table, but only the compensation group may see the salary column. The company wants a single copy of the table and a least-privilege design.",
    question: "Which approach meets these goals?",
    options: [
      { id: 'A', text: "Grant every analyst the BigQuery Data Viewer role on the dataset and ask them not to select the salary column." },
      { id: 'B', text: "Tag the salary column with a policy tag and allow only the compensation group to read data under that tag." },
      { id: 'C', text: "Apply a row-level access policy so the compensation group and other analysts see only rows for their own region." },
      { id: 'D', text: "Copy the table into a second project without the salary column and grant most analysts access only to that copy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "BigQuery column-level access control uses policy tags from a taxonomy: the salary column is tagged, and only principals granted fine-grained read on that tag can see its values, while everyone else can still query the rest of the table. That keeps one copy and enforces least privilege. A second copy without the column works but creates exactly the duplicate data the company wants to avoid, plus a synchronisation burden. Row-level security filters rows, not columns, so salaries would still be visible in the permitted rows. Dataset-level Data Viewer exposes every column, and a request not to look is not a control.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/column-level-security-intro",
    tags: ["BigQuery", "Column-level security", "Least privilege"]
  },
  {
    id: "gcp-cdl-131",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Proving where a risk report's numbers came from",
    scenario: "A bank's regulator asks it to show, for a quarterly credit-risk report built in BigQuery, which source systems and intermediate tables fed each figure and which transformation jobs touched them. The data team knows who ran queries last quarter but cannot reconstruct how the report tables were derived from upstream data.",
    question: "Which governance capability does the bank need?",
    options: [
      { id: 'A', text: "Object Versioning on the source buckets, which keeps earlier generations of files that upstream systems overwrote." },
      { id: 'B', text: "Data lineage tracking, which records how data moves from sources through jobs and tables into the finished report." },
      { id: 'C', text: "BigQuery time travel, which lets the team query a report table as it existed at a point within the recent past." },
      { id: 'D', text: "Cloud Audit Logs data access records, which list the users, service accounts and jobs that read each table last quarter." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Lineage is the governance record of data's path: it links source tables, the jobs that transformed them and the downstream tables and reports they produced, which is precisely what the regulator wants to see. Knowledge Catalog captures lineage automatically for BigQuery jobs and other supported services. Data access audit logs answer who read or queried a table, which the team already has, not how the report was derived. Time travel shows earlier states of a table for a limited window (up to seven days) but not the chain of upstream sources. Object Versioning preserves overwritten files, which helps recovery rather than explaining derivation.",
    referenceUrl: "https://docs.cloud.google.com/dataplex/docs/about-data-lineage",
    tags: ["Data lineage", "Data governance", "Compliance"]
  },
  {
    id: "gcp-cdl-132",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Matching controls to how sensitive data is",
    scenario: "A manufacturer's security team currently applies the same strict approval process to every dataset, from published price lists to engineering designs and employee medical records. Analysts complain that low-risk data is locked down, while auditors worry the truly sensitive data is not protected enough.",
    question: "Which governance practice would resolve both complaints?",
    options: [
      { id: 'A', text: "Store every dataset in one BigQuery project so that a single IAM policy applies to all of them in the same way." },
      { id: 'B', text: "Classify datasets by sensitivity level and apply stronger controls to confidential data than to public data." },
      { id: 'C', text: "Require a quarterly manual access review for every dataset regardless of what it holds or who needs to use it." },
      { id: 'D', text: "Encrypt every dataset with the same customer-managed key so that all of them share an identical protection level." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data classification labels data by sensitivity, for example public, internal, confidential and restricted, so protections scale with risk: price lists can be shared freely while medical records get tight access, masking and monitoring. One project with a single IAM policy, a single shared key or a uniform review schedule all keep the one-size-fits-all approach that caused both complaints, over-protecting low-risk data and under-protecting the most sensitive records.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/data-profiles",
    tags: ["Data classification", "Data governance"]
  },
  {
    id: "gcp-cdl-133",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Keeping the exit door open for analytics data",
    scenario: "A media company is moving its analytics data to Google Cloud, but its board insists that the data must remain readable by other engines and vendors in future, so the company is never trapped with one provider. The analytics team still wants to use BigQuery day to day.",
    question: "Which approach best supports the board's requirement?",
    options: [
      { id: 'A', text: "Copy the data nightly into a second provider's warehouse so other engines always have an identical duplicate." },
      { id: 'B', text: "Keep the data only in a proprietary storage layer and rely on the provider's export tool if a move is ever needed." },
      { id: 'C', text: "Negotiate a longer committed-use discount so that the price of staying with one provider stays predictable." },
      { id: 'D', text: "Store the data as Apache Iceberg tables in open file formats that BigQuery and other engines can both read." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Open table and file formats such as Apache Iceberg and Parquet let many engines, including BigQuery, Apache Spark and third-party tools, read the same data, which is how openness avoids lock-in without giving up BigQuery. A proprietary-only layer with an export escape hatch is the lock-in the board wants to avoid, since every move would need a bulk conversion. Committed-use discounts make costs predictable but deepen commitment to one vendor rather than keeping data portable. A nightly duplicate in another warehouse doubles cost and creates a second silo that drifts out of date.",
    referenceUrl: "https://docs.cloud.google.com/lakehouse/docs/introduction",
    tags: ["Open formats", "Apache Iceberg", "Vendor lock-in"]
  },
  {
    id: "gcp-cdl-134",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Querying clickstream that stays in Amazon S3",
    scenario: "A travel company runs its analytics in BigQuery, but a partner's clickstream data lives in Amazon S3 and contractual terms prevent it from being copied out of AWS. Analysts want to query the S3 data with the same SQL and interface they already use for their BigQuery tables.",
    question: "Which Google Cloud capability meets this requirement?",
    options: [
      { id: 'A', text: "Storage Transfer Service, which schedules copies of objects from Amazon S3 into a Cloud Storage bucket." },
      { id: 'B', text: "Datastream, which streams change data from operational databases into BigQuery with low latency." },
      { id: 'C', text: "BigQuery Omni, which runs BigQuery analysis against data where it sits in AWS or Azure object storage." },
      { id: 'D', text: "BigQuery Data Transfer Service, which loads data from supported sources into BigQuery on a schedule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "BigQuery Omni lets analysts use the familiar BigQuery interface and SQL against data stored in Amazon S3 or Azure Blob Storage, with the compute running in the other cloud so the data does not have to leave it. That respects the contract and removes a silo. Storage Transfer Service and BigQuery Data Transfer Service both move a copy of the data into Google Cloud, which the contract forbids. Datastream replicates changes from databases such as MySQL, PostgreSQL and Oracle, not files in object storage.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/omni-introduction",
    tags: ["BigQuery Omni", "Multicloud", "Interoperability"]
  },
  {
    id: "gcp-cdl-135",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Giving suppliers live sales data without copies",
    scenario: "A grocery chain wants to give 40 suppliers access to daily sales data for their own products so they can plan production. Today it emails CSV extracts that are out of date on arrival and hard to revoke. Suppliers use BigQuery and want to join the chain's data with their own tables.",
    question: "Which approach best meets the goal?",
    options: [
      { id: 'A', text: "Publish each day's sales rows to a Pub/Sub topic and let every supplier build its own pipeline to load them." },
      { id: 'B', text: "Export the sales tables to Cloud Storage each night and send suppliers a signed URL to download a fresh file." },
      { id: 'C', text: "Share a Looker Studio report with every supplier that charts the daily sales figures for the products they make." },
      { id: 'D', text: "List shared datasets through BigQuery sharing so suppliers query live data in place and access can be revoked at any time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery sharing (formerly Analytics Hub) publishes datasets as listings in an exchange; subscribers get a linked dataset that reads the publisher's live data without a copy, can join it with their own tables, and lose access as soon as the publisher revokes it. Nightly exports with signed URLs still ship copies that go stale and cannot be recalled once downloaded. Pub/Sub would push every supplier into building and running ingestion pipelines just to rebuild the table. A shared report shows charts but gives suppliers no data to join with their own tables.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction",
    tags: ["BigQuery sharing", "Data sharing", "Data silos"]
  },
  {
    id: "gcp-cdl-136",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Why the marketing team cannot see the whole customer",
    scenario: "An electronics retailer keeps online orders in one vendor's platform, in-store purchases in another, and support tickets in a third, each with its own format and access process. Marketing wants to target customers who bought in store and later contacted support, but cannot combine the data.",
    question: "Which statement best explains the problem and the direction to fix it?",
    options: [
      { id: 'A', text: "The data is unencrypted, so encrypting each platform's storage will let marketing combine the records safely." },
      { id: 'B', text: "The data is too large to process, so the retailer needs faster servers in each of the three existing platforms." },
      { id: 'C', text: "The data is siloed, so an open, interoperable platform that can combine the sources gives a complete view." },
      { id: 'D', text: "The data is unstructured, so it must be converted into images before any tool can analyse it together." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data held in separate systems with incompatible formats and access processes is the definition of a data silo, and silos block exactly the kind of cross-channel view marketing needs. An open, interoperable data platform that ingests or federates the sources lets the retailer join orders, store sales and tickets in one place. Faster servers inside each platform leave the data just as separated. Encryption protects confidentiality but does nothing to connect the systems. Order and ticket records are largely structured, and converting data to images would make analysis harder, not possible.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["Data silos", "Interoperability"]
  },
  {
    id: "gcp-cdl-137",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "One copy of data for Spark users and SQL analysts",
    scenario: "A pharmaceutical company's data scientists run Apache Spark jobs, while its business analysts work in BigQuery SQL. Today the same datasets are kept twice, once as files for Spark and once as BigQuery tables, and the copies drift apart and carry different access rules. The company wants one copy with consistent security.",
    question: "Which design best fits?",
    options: [
      { id: 'A', text: "Keep the data as Iceberg tables managed by Lakehouse for Apache Iceberg so Spark and BigQuery share it under one policy." },
      { id: 'B', text: "Move both copies into Bigtable so that Apache Spark and BigQuery can each read the same wide-column tables through their APIs." },
      { id: 'C', text: "Load everything into BigQuery native storage and give the data scientists nightly exports to run their Spark jobs on." },
      { id: 'D', text: "Keep the Spark files in Cloud Storage and let analysts query them through Cloud SQL federated queries when needed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lakehouse for Apache Iceberg (formerly BigLake) stores data once in the open Iceberg format on Cloud Storage and exposes it through a shared runtime catalog, so Spark and BigQuery read the same tables and the same fine-grained access controls apply to both. Nightly exports recreate the duplicate copy and the drift the company is trying to remove. Bigtable is an operational NoSQL database for low-latency key lookups, not a shared analytics table format for Spark and SQL. Cloud SQL federated queries connect BigQuery to Cloud SQL databases; Cloud SQL does not query files in Cloud Storage, and it would add a third system rather than unify two.",
    referenceUrl: "https://docs.cloud.google.com/lakehouse/docs/introduction",
    tags: ["Lakehouse", "Apache Iceberg", "Apache Spark", "Open formats"]
  },
  {
    id: "gcp-cdl-138",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Feeding order changes from Oracle into BigQuery",
    scenario: "A distributor's order system runs on an on-premises Oracle database that will stay in place for years. Analysts want those orders in BigQuery within minutes of each change so they can combine them with web and warehouse data, and the database team will not accept heavy nightly extract jobs.",
    question: "Which Google Cloud service best fits?",
    options: [
      { id: 'A', text: "Datastream, which captures changes from the Oracle database and replicates them into BigQuery continuously." },
      { id: 'B', text: "BigQuery Data Transfer Service, which schedules recurring loads from SaaS apps into BigQuery tables." },
      { id: 'C', text: "Storage Transfer Service, which copies large sets of files from on-premises storage into Cloud Storage." },
      { id: 'D', text: "Database Migration Service, which moves a source database such as Oracle to a managed Cloud SQL or AlloyDB target." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Datastream is a serverless change data capture service: it reads changes from Oracle, MySQL, PostgreSQL and other sources with little load on the source and replicates them into BigQuery with low latency, breaking the silo between the operational system and analytics while Oracle stays in place. Database Migration Service is for moving a database to a new managed target, not for feeding an analytics warehouse from a database that stays put. Storage Transfer Service moves files, not database changes. BigQuery Data Transfer Service runs scheduled batch loads, mainly from SaaS and Google sources, not minute-level change capture from Oracle.",
    referenceUrl: "https://cloud.google.com/datastream/docs/overview",
    tags: ["Datastream", "Change data capture", "Data silos"]
  },
  {
    id: "gcp-cdl-139",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Where a streaming studio keeps its video masters",
    scenario: "A video streaming startup needs to store thousands of high-resolution movie files, trailers and thumbnail images, some tens of gigabytes each. The files must be durable, accessible from anywhere over HTTPS, and cheap to keep as the library grows, with no servers or disks to manage.",
    question: "Which Google Cloud service should the startup use?",
    options: [
      { id: 'A', text: "Bigtable, writing each file into a row of a wide-column table keyed by the name of the movie." },
      { id: 'B', text: "Cloud Storage, keeping each file as an object in a bucket that scales without capacity planning." },
      { id: 'C', text: "Cloud SQL, storing each movie file as a binary column in a managed relational database table." },
      { id: 'D', text: "Firestore, saving each file inside a document in a collection that the mobile app reads directly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage is Google Cloud's object storage: it holds unstructured files of almost any size (objects up to 5 TiB), is highly durable, is reachable over HTTPS and scales automatically with no capacity to manage, which suits a growing media library. Cloud SQL is a relational database for structured rows and is a costly, awkward home for multi-gigabyte binaries. Bigtable is built for high-throughput key lookups on small cells, not for storing large media files. Firestore documents are limited to about 1 MiB, far too small for video.",
    referenceUrl: "https://cloud.google.com/storage/docs/introduction",
    tags: ["Cloud Storage", "Object storage", "Unstructured data"]
  },
  {
    id: "gcp-cdl-140",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Retiring the server under a payroll database",
    scenario: "A mid-sized accounting firm runs its payroll application on a Microsoft SQL Server database in its own data center, serving staff in one country. It wants to stop patching and backing up the database server itself but keep the application and its SQL Server features unchanged.",
    question: "Which Google Cloud database service is the best fit?",
    options: [
      { id: 'A', text: "Bigtable, a NoSQL wide-column database that handles very high read and write throughput at scale." },
      { id: 'B', text: "BigQuery, a serverless data warehouse that runs analytical SQL across very large datasets on demand." },
      { id: 'C', text: "Spanner, a globally distributed relational database that removes server patching and scales writes across regions." },
      { id: 'D', text: "Cloud SQL, a managed service for MySQL, PostgreSQL and SQL Server that handles patching and backups." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud SQL offers fully managed SQL Server, MySQL and PostgreSQL, with Google handling patching, backups and replication, so the firm keeps its application and engine while dropping the server maintenance. Spanner is built for global scale and would require moving off SQL Server to a different dialect. Bigtable is a NoSQL store that cannot run a relational SQL Server application. BigQuery is an analytics warehouse, not a transactional database for a payroll app.",
    referenceUrl: "https://cloud.google.com/sql/docs/introduction",
    tags: ["Cloud SQL", "SQL Server", "Managed database"]
  },
  {
    id: "gcp-cdl-141",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A payments ledger that spans three continents",
    scenario: "A digital payments company processes transfers for customers in North America, Europe and Asia. Its ledger must be relational, never show two regions a different balance for the same account, keep running through a regional outage, and grow without the team hand-sharding the database.",
    question: "Which database service meets these needs?",
    options: [
      { id: 'A', text: "Bigtable, which offers a wide-column NoSQL store with replication between clusters in different regions." },
      { id: 'B', text: "Spanner, which offers relational transactions with strong consistency across regions and scales horizontally." },
      { id: 'C', text: "Firestore, which offers a serverless document database with offline sync and real-time listeners for apps." },
      { id: 'D', text: "Cloud SQL, which offers managed relational databases with a standby instance in another zone of one region." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Spanner combines a relational model and SQL with externally consistent transactions across regions, multi-region configurations with a 99.999% availability SLA, and automatic horizontal scaling, so a global ledger stays correct and online without manual sharding. Cloud SQL high availability protects against a zone failure within one region and scales mainly vertically, so it cannot serve three continents with one consistent primary. Firestore is a document database suited to app data rather than a relational ledger. Bigtable replication between clusters is eventually consistent and Bigtable has no relational transactions across rows.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Spanner", "Global database", "Strong consistency"]
  },
  {
    id: "gcp-cdl-142",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Ten years of sales history and no infrastructure team",
    scenario: "A consumer goods company wants to analyse ten years of sales, pricing and promotion data, several hundred terabytes in total, to find which campaigns lifted revenue. Its analysts know SQL, and the company has no team to size, tune or operate database servers.",
    question: "Which Google Cloud service fits best?",
    options: [
      { id: 'A', text: "Memorystore, loading the history into managed Redis so that analysts can read it from memory." },
      { id: 'B', text: "BigQuery, a serverless data warehouse that runs SQL analysis over very large datasets on demand." },
      { id: 'C', text: "Cloud SQL, loading the history into a managed PostgreSQL instance sized for the full dataset." },
      { id: 'D', text: "Firestore, storing each sale as a document and querying the collections from a custom program." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "BigQuery is a fully managed, serverless data warehouse built for analytical SQL over terabytes to petabytes, with no servers to provision or tune, which matches both the data volume and the team's skills. A Cloud SQL instance is designed for transactional workloads and would struggle with, and need constant tuning for, hundreds of terabytes of analytical scans. Firestore is an operational document database without the aggregations analysts need at this scale. Memorystore is an in-memory cache, far too costly and limited for hundreds of terabytes of history.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "Data warehouse", "Serverless"]
  },
  {
    id: "gcp-cdl-143",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Readings from two million wind-farm sensors",
    scenario: "An energy company collects a reading every second from about two million sensors on its wind turbines. The operational dashboard must fetch the latest readings for any turbine in a few milliseconds, and the write rate is expected to keep growing. The data is simple key and timestamp values with no need for joins.",
    question: "Which database best suits this workload?",
    options: [
      { id: 'A', text: "Cloud SQL, a managed relational database that handles write transactions for a single-region application." },
      { id: 'B', text: "Bigtable, a wide-column NoSQL database built for massive write throughput and fast lookups by row key." },
      { id: 'C', text: "Firestore, a document database that pushes real-time updates to mobile and web clients as data changes." },
      { id: 'D', text: "BigQuery, a serverless warehouse that runs analytical SQL across the full history of all the readings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bigtable is designed for exactly this pattern: millions of writes per second, single-digit millisecond reads by row key, and linear scaling by adding nodes, which is why it is a common choice for IoT and time-series data. Cloud SQL would hit write-throughput limits long before two million writes per second. BigQuery is excellent for analysing the history but is not built to serve millisecond point lookups for an operational dashboard. Firestore targets app data and real-time client sync, not sustained sensor ingest at this rate.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/overview",
    tags: ["Bigtable", "Time series", "IoT"]
  },
  {
    id: "gcp-cdl-144",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A field-inspection app that works without signal",
    scenario: "A utility company is building a mobile app for inspectors who often work in areas with no cellular signal. Inspection notes must save on the device while offline and sync automatically when connectivity returns, and supervisors should see new notes appear in their web view in real time.",
    question: "Which Google Cloud database is the best fit?",
    options: [
      { id: 'A', text: "Firestore, whose mobile and web SDKs support offline data and real-time update listeners." },
      { id: 'B', text: "BigQuery, which analyses the inspection notes with SQL once they are loaded as table rows." },
      { id: 'C', text: "Bigtable, which stores very large volumes of rows and returns them quickly by their row key." },
      { id: 'D', text: "Cloud SQL, which runs a managed relational database that the mobile app queries over the network." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Firestore is a serverless document database whose client SDKs cache data on the device, accept writes while offline and sync them when the connection returns, and push changes to listening clients in real time, which covers both the inspector and the supervisor requirements. Bigtable and Cloud SQL are accessed over the network from a backend and provide no built-in offline sync for mobile clients. BigQuery is an analytics warehouse, not an operational store for a mobile app.",
    referenceUrl: "https://cloud.google.com/firestore/docs/overview",
    tags: ["Firestore", "Mobile apps", "Offline sync"]
  },
  {
    id: "gcp-cdl-145",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Fast transactions and live analytics on PostgreSQL",
    scenario: "An online marketplace runs on PostgreSQL and wants to keep full PostgreSQL compatibility. It needs higher transactional throughput than its current setup and wants operational reports on the same live data to run quickly without building a separate pipeline to a warehouse.",
    question: "Which Google Cloud database is the best fit?",
    options: [
      { id: 'A', text: "Cloud SQL for PostgreSQL, a managed standard PostgreSQL engine with automated backups and replicas." },
      { id: 'B', text: "AlloyDB, a PostgreSQL-compatible database with a columnar engine that speeds analytical queries." },
      { id: 'C', text: "Firestore, a serverless document database whose automatic indexes keep queries fast as data grows." },
      { id: 'D', text: "Bigtable, a wide-column database that sustains very high throughput for key-based reads and writes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AlloyDB for PostgreSQL is fully PostgreSQL-compatible, delivers substantially higher transactional performance than standard PostgreSQL, and includes a built-in columnar engine that accelerates analytical queries on the live operational data, so reporting can run without a separate warehouse pipeline. Cloud SQL for PostgreSQL is a sound managed option but runs the standard engine without the columnar acceleration the reports need. Firestore and Bigtable are NoSQL databases, so moving to either would break PostgreSQL compatibility and require rewriting the application.",
    referenceUrl: "https://cloud.google.com/alloydb/docs/overview",
    tags: ["AlloyDB", "PostgreSQL", "HTAP"]
  },
  {
    id: "gcp-cdl-146",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Month-end reports slowing down checkout",
    scenario: "A retailer's finance team runs large month-end reports directly against the Cloud SQL database that serves its checkout application. During those runs, checkout latency spikes and some orders time out. Finance also wants to add three years of history and web analytics data to its reports.",
    question: "What should the retailer do?",
    options: [
      { id: 'A', text: "Add Memorystore in front of Cloud SQL so that the report queries are answered from an in-memory cache." },
      { id: 'B', text: "Move the checkout database from Cloud SQL to Firestore so that its indexes keep order queries fast." },
      { id: 'C', text: "Replicate the order data into BigQuery and run the finance reporting there, alongside the other sources." },
      { id: 'D', text: "Resize the Cloud SQL instance to the largest machine type so finance reports and checkout have more capacity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Separating analytical and transactional workloads is the standard fix: replicating orders into BigQuery (for example with Datastream) removes heavy scans from the checkout database and gives finance a warehouse that can also hold years of history and web analytics. Firestore is an operational document database and would not solve large analytical reporting, while forcing an application rewrite. Memorystore caches repeated lookups; month-end reports scan and aggregate large ranges, which a cache does not serve. A larger instance may soften the spikes temporarily, but analytics and checkout would still compete for one database, and it does nothing for combining history and web data.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "Cloud SQL", "OLTP vs OLAP"]
  },
  {
    id: "gcp-cdl-147",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Sharing genome files with research partners",
    scenario: "A genomics institute produces sequencing files of several terabytes each. Batch pipelines process them, and partner universities need secure download access to specific files. The institute wants to pay only for the capacity it uses and to grant access per file or per folder without running file servers.",
    question: "Which Google Cloud service should it use?",
    options: [
      { id: 'A', text: "Firestore, putting each sequencing file into a document that partner universities fetch with the SDK." },
      { id: 'B', text: "Bigtable, storing each file in a row that partner universities read through the Bigtable client libraries." },
      { id: 'C', text: "BigQuery, loading the sequencing files into tables that the partner universities can query with SQL." },
      { id: 'D', text: "Cloud Storage, keeping the files as objects in buckets and granting partners access through IAM." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage holds multi-terabyte files as objects (up to 5 TiB each), charges only for stored data and operations, integrates with batch pipelines, and lets the institute grant partners access at the bucket level with IAM or to individual objects with signed URLs or managed folders, with no file servers to run. BigQuery is for tabular analytics; raw binary sequencing files are not table rows. Bigtable cells and Firestore documents are sized in megabytes, so neither can hold terabyte-scale files.",
    referenceUrl: "https://cloud.google.com/storage/docs/introduction",
    tags: ["Cloud Storage", "Object storage", "Research data"]
  },
  {
    id: "gcp-cdl-148",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Serving ad profiles for billions of devices",
    scenario: "An advertising platform must look up a profile for each device requesting an ad and decide what to show within a few milliseconds. It stores billions of profiles, each read by device ID, and handles hundreds of thousands of requests per second at peak. Profiles do not need relational joins or multi-row transactions.",
    question: "Which Google Cloud database fits this workload?",
    options: [
      { id: 'A', text: "AlloyDB, a PostgreSQL-compatible database that adds a columnar engine for faster reporting queries." },
      { id: 'B', text: "BigQuery, a serverless warehouse that scans billions of rows in parallel for analytical SQL queries." },
      { id: 'C', text: "Bigtable, a NoSQL store that serves low-latency key lookups over billions of rows at high volume." },
      { id: 'D', text: "Cloud SQL, a managed relational database that runs a single primary instance with read replicas." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bigtable is built for very large, sparse datasets read by key at high throughput and low latency, which is why ad-tech personalisation and user-profile serving are classic Bigtable use cases. A single-primary Cloud SQL instance cannot absorb this volume of traffic across billions of rows. BigQuery is optimised for scanning data for analytics, not for millisecond point lookups at hundreds of thousands of requests per second. AlloyDB is a relational database whose columnar engine helps analytical reporting, which this workload does not need.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/overview",
    tags: ["Bigtable", "Ad tech", "Low latency"]
  },
  {
    id: "gcp-cdl-149",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Right-sizing the database for an internal HR tool",
    scenario: "A 600-person company is moving its internal leave-request application to Google Cloud. The app uses PostgreSQL, serves employees in one country, handles a few hundred transactions an hour, and has a small budget. An architect suggests choosing the most scalable database available in case the company grows.",
    question: "Which option is the most appropriate choice?",
    options: [
      { id: 'A', text: "Spanner multi-region, because its horizontal scaling and 99.999% availability protect against any future growth." },
      { id: 'B', text: "Bigtable, because it scales linearly by adding nodes and keeps latency low however many employees are added." },
      { id: 'C', text: "AlloyDB, because its PostgreSQL compatibility and higher throughput give plenty of headroom for growth." },
      { id: 'D', text: "Cloud SQL for PostgreSQL, because a managed standard engine fits the modest load and budget with no app changes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Good database selection matches the service to the workload. A regional, low-volume PostgreSQL app with a tight budget is exactly what Cloud SQL for PostgreSQL serves: fully managed, compatible with the existing app, and far cheaper than the alternatives. Spanner multi-region solves global scale and extreme availability the app does not need, at a much higher cost. AlloyDB offers performance and analytics headroom the leave tool will never use, also at higher cost. Bigtable is NoSQL, so it would require rewriting a relational application for scale it does not require.",
    referenceUrl: "https://cloud.google.com/sql/docs/introduction",
    tags: ["Cloud SQL", "Database selection", "Cost"]
  },
  {
    id: "gcp-cdl-150",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Live match scores for a sports fan site",
    scenario: "A sports media company is launching a web and mobile app that shows live scores and match events. When an editor records a goal, it should appear on every fan's screen within a second without the apps polling a server, and the team wants a serverless database with a flexible schema for different sports.",
    question: "Which Google Cloud database should the team choose?",
    options: [
      { id: 'A', text: "Firestore, whose clients subscribe to documents and receive each change in real time as soon as it happens." },
      { id: 'B', text: "BigQuery, whose streaming inserts make each new event available to SQL queries within seconds." },
      { id: 'C', text: "Cloud SQL, whose relational tables store each event and let the apps query for new rows often." },
      { id: 'D', text: "Spanner, whose strongly consistent reads let every app see the same score from any global region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Firestore is a serverless document database with a flexible schema, and its real-time listeners push document changes straight to web and mobile clients, so a new goal reaches fans without any polling. Cloud SQL would force the apps to poll for new rows, which the team explicitly wants to avoid. BigQuery streaming makes data available for analytics quickly but does not push updates to end-user apps. Spanner offers strong global consistency but no client-side real-time subscriptions, and its relational schema is less flexible for varied sports data.",
    referenceUrl: "https://cloud.google.com/firestore/docs/overview",
    tags: ["Firestore", "Real-time updates", "Serverless"]
  }
];

export default GCP_CDL_QUESTIONS_6;
