export const GCP_ACE_QUESTIONS_14 = [
  {
    id: "gcp-ace-326",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Spanner Horizontal Relational Scaling: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Spanner to architect a globally distributed e-commerce inventory database requiring relational ACID transactions, multi-region synchronous writes, and 99.999% availability.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Spanner horizontal scale-out with external global consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner with a multi-region instance configuration." },
      { id: 'B', text: "Deploy Cloud SQL with cross-region read replicas." },
      { id: 'C', text: "Deploy a self-managed MySQL database on a single Compute Engine instance." },
      { id: 'D', text: "Store inventory transactions in a Cloud Storage multi-region bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner with a multi-region instance configuration. Cloud Spanner is a fully managed, mission-critical relational database service that provides transactional consistency at global scale, automatic horizontal sharding, schema updates with zero downtime, and up to 99.999% availability SLA, which single-primary Cloud SQL cannot match.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud Spanner", "Dr Failover"]
  },
  {
    id: "gcp-ace-327",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Spanner Horizontal Relational Scaling: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Spanner to architect a globally distributed e-commerce inventory database requiring relational ACID transactions, multi-region synchronous writes, and 99.999% availability.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Spanner horizontal scale-out with external global consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner with a multi-region instance configuration." },
      { id: 'B', text: "Deploy Cloud SQL with cross-region read replicas." },
      { id: 'C', text: "Deploy a self-managed MySQL database on a single Compute Engine instance." },
      { id: 'D', text: "Store inventory transactions in a Cloud Storage multi-region bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner with a multi-region instance configuration. Cloud Spanner is a fully managed, mission-critical relational database service that provides transactional consistency at global scale, automatic horizontal sharding, schema updates with zero downtime, and up to 99.999% availability SLA, which single-primary Cloud SQL cannot match.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud Spanner", "High Load Scale"]
  },
  {
    id: "gcp-ace-328",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Spanner Horizontal Relational Scaling: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Spanner to architect a globally distributed e-commerce inventory database requiring relational ACID transactions, multi-region synchronous writes, and 99.999% availability.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Spanner horizontal scale-out with external global consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner with a multi-region instance configuration." },
      { id: 'B', text: "Deploy Cloud SQL with cross-region read replicas." },
      { id: 'C', text: "Deploy a self-managed MySQL database on a single Compute Engine instance." },
      { id: 'D', text: "Store inventory transactions in a Cloud Storage multi-region bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner with a multi-region instance configuration. Cloud Spanner is a fully managed, mission-critical relational database service that provides transactional consistency at global scale, automatic horizontal sharding, schema updates with zero downtime, and up to 99.999% availability SLA, which single-primary Cloud SQL cannot match.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud Spanner", "Security Compliance"]
  },
  {
    id: "gcp-ace-329",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Spanner Horizontal Relational Scaling: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Spanner to architect a globally distributed e-commerce inventory database requiring relational ACID transactions, multi-region synchronous writes, and 99.999% availability.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Spanner horizontal scale-out with external global consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner with a multi-region instance configuration." },
      { id: 'B', text: "Deploy Cloud SQL with cross-region read replicas." },
      { id: 'C', text: "Deploy a self-managed MySQL database on a single Compute Engine instance." },
      { id: 'D', text: "Store inventory transactions in a Cloud Storage multi-region bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner with a multi-region instance configuration. Cloud Spanner is a fully managed, mission-critical relational database service that provides transactional consistency at global scale, automatic horizontal sharding, schema updates with zero downtime, and up to 99.999% availability SLA, which single-primary Cloud SQL cannot match.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud Spanner", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-330",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Spanner Horizontal Relational Scaling: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Spanner to architect a globally distributed e-commerce inventory database requiring relational ACID transactions, multi-region synchronous writes, and 99.999% availability.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Spanner horizontal scale-out with external global consistency is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Spanner with a multi-region instance configuration." },
      { id: 'B', text: "Deploy Cloud SQL with cross-region read replicas." },
      { id: 'C', text: "Deploy a self-managed MySQL database on a single Compute Engine instance." },
      { id: 'D', text: "Store inventory transactions in a Cloud Storage multi-region bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Spanner with a multi-region instance configuration. Cloud Spanner is a fully managed, mission-critical relational database service that provides transactional consistency at global scale, automatic horizontal sharding, schema updates with zero downtime, and up to 99.999% availability SLA, which single-primary Cloud SQL cannot match.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud Spanner", "Resilience Failure"]
  },
  {
    id: "gcp-ace-331",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Bigtable Wide-Column Schema Design: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Cloud Bigtable to store hundreds of terabytes of time-series IoT sensor data with sub-10ms read and write latency while avoiding tablet server hotspotting.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Bigtable wide-column schema design and row key selection is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp)." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL and store all readings in a single table with an auto-incrementing ID." },
      { id: 'C', text: "Store sensor readings in flat text files on a Compute Engine standard persistent disk." },
      { id: 'D', text: "Use Firestore in Native mode with a sequential timestamp document ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp). Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, ideal for petabyte-scale low-latency operational data. Designing row keys to avoid sequential timestamps (which concentrate writes on a single tablet) ensures uniform distribution across nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Dr Failover"]
  },
  {
    id: "gcp-ace-332",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Bigtable Wide-Column Schema Design: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Cloud Bigtable to store hundreds of terabytes of time-series IoT sensor data with sub-10ms read and write latency while avoiding tablet server hotspotting.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Bigtable wide-column schema design and row key selection is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp)." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL and store all readings in a single table with an auto-incrementing ID." },
      { id: 'C', text: "Store sensor readings in flat text files on a Compute Engine standard persistent disk." },
      { id: 'D', text: "Use Firestore in Native mode with a sequential timestamp document ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp). Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, ideal for petabyte-scale low-latency operational data. Designing row keys to avoid sequential timestamps (which concentrate writes on a single tablet) ensures uniform distribution across nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "High Load Scale"]
  },
  {
    id: "gcp-ace-333",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Bigtable Wide-Column Schema Design: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Cloud Bigtable to store hundreds of terabytes of time-series IoT sensor data with sub-10ms read and write latency while avoiding tablet server hotspotting.",
    question: "Which solution properly implements these mandatory security and governance controls? Bigtable wide-column schema design and row key selection is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp)." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL and store all readings in a single table with an auto-incrementing ID." },
      { id: 'C', text: "Store sensor readings in flat text files on a Compute Engine standard persistent disk." },
      { id: 'D', text: "Use Firestore in Native mode with a sequential timestamp document ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp). Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, ideal for petabyte-scale low-latency operational data. Designing row keys to avoid sequential timestamps (which concentrate writes on a single tablet) ensures uniform distribution across nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Security Compliance"]
  },
  {
    id: "gcp-ace-334",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Bigtable Wide-Column Schema Design: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Cloud Bigtable to store hundreds of terabytes of time-series IoT sensor data with sub-10ms read and write latency while avoiding tablet server hotspotting.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Bigtable wide-column schema design and row key selection is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp)." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL and store all readings in a single table with an auto-incrementing ID." },
      { id: 'C', text: "Store sensor readings in flat text files on a Compute Engine standard persistent disk." },
      { id: 'D', text: "Use Firestore in Native mode with a sequential timestamp document ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp). Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, ideal for petabyte-scale low-latency operational data. Designing row keys to avoid sequential timestamps (which concentrate writes on a single tablet) ensures uniform distribution across nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-335",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud Bigtable Wide-Column Schema Design: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Cloud Bigtable to store hundreds of terabytes of time-series IoT sensor data with sub-10ms read and write latency while avoiding tablet server hotspotting.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Bigtable wide-column schema design and row key selection is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp)." },
      { id: 'B', text: "Deploy Cloud SQL for PostgreSQL and store all readings in a single table with an auto-incrementing ID." },
      { id: 'C', text: "Store sensor readings in flat text files on a Compute Engine standard persistent disk." },
      { id: 'D', text: "Use Firestore in Native mode with a sequential timestamp document ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cloud Bigtable and design row keys with a non-sequential prefix (e.g. device_id#timestamp). Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, ideal for petabyte-scale low-latency operational data. Designing row keys to avoid sequential timestamps (which concentrate writes on a single tablet) ensures uniform distribution across nodes.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design",
    tags: ["Cloud Bigtable", "Cloud Bigtable", "Resilience Failure"]
  },
  {
    id: "gcp-ace-336",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Firestore (Native Mode vs Datastore Mode): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Firestore to select a managed serverless document database for a real-time mobile application requiring client offline synchronization and live event listeners.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Firestore Native mode for mobile/web vs Datastore mode for backend servers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Firestore in Native mode." },
      { id: 'B', text: "Deploy Firestore in Datastore mode." },
      { id: 'C', text: "Deploy an on-premises MongoDB cluster on physical hardware." },
      { id: 'D', text: "Use Cloud Memorystore for Redis as the primary permanent storage layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Firestore in Native mode. Firestore offers two modes: Native mode (recommended for mobile and web apps, providing real-time data synchronization, offline support, and client SDKs) and Datastore mode (optimized for server-side architectures requiring high-throughput batch writes without client SDK features).",
    referenceUrl: "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    tags: ["Firestore", "Firestore", "Dr Failover"]
  },
  {
    id: "gcp-ace-337",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Firestore (Native Mode vs Datastore Mode): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Firestore to select a managed serverless document database for a real-time mobile application requiring client offline synchronization and live event listeners.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Firestore Native mode for mobile/web vs Datastore mode for backend servers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Firestore in Native mode." },
      { id: 'B', text: "Deploy Firestore in Datastore mode." },
      { id: 'C', text: "Deploy an on-premises MongoDB cluster on physical hardware." },
      { id: 'D', text: "Use Cloud Memorystore for Redis as the primary permanent storage layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Firestore in Native mode. Firestore offers two modes: Native mode (recommended for mobile and web apps, providing real-time data synchronization, offline support, and client SDKs) and Datastore mode (optimized for server-side architectures requiring high-throughput batch writes without client SDK features).",
    referenceUrl: "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    tags: ["Firestore", "Firestore", "High Load Scale"]
  },
  {
    id: "gcp-ace-338",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Firestore (Native Mode vs Datastore Mode): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Firestore to select a managed serverless document database for a real-time mobile application requiring client offline synchronization and live event listeners.",
    question: "Which solution properly implements these mandatory security and governance controls? Firestore Native mode for mobile/web vs Datastore mode for backend servers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Firestore in Native mode." },
      { id: 'B', text: "Deploy Firestore in Datastore mode." },
      { id: 'C', text: "Deploy an on-premises MongoDB cluster on physical hardware." },
      { id: 'D', text: "Use Cloud Memorystore for Redis as the primary permanent storage layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Firestore in Native mode. Firestore offers two modes: Native mode (recommended for mobile and web apps, providing real-time data synchronization, offline support, and client SDKs) and Datastore mode (optimized for server-side architectures requiring high-throughput batch writes without client SDK features).",
    referenceUrl: "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    tags: ["Firestore", "Firestore", "Security Compliance"]
  },
  {
    id: "gcp-ace-339",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Firestore (Native Mode vs Datastore Mode): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Firestore to select a managed serverless document database for a real-time mobile application requiring client offline synchronization and live event listeners.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Firestore Native mode for mobile/web vs Datastore mode for backend servers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Firestore in Native mode." },
      { id: 'B', text: "Deploy Firestore in Datastore mode." },
      { id: 'C', text: "Deploy an on-premises MongoDB cluster on physical hardware." },
      { id: 'D', text: "Use Cloud Memorystore for Redis as the primary permanent storage layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Firestore in Native mode. Firestore offers two modes: Native mode (recommended for mobile and web apps, providing real-time data synchronization, offline support, and client SDKs) and Datastore mode (optimized for server-side architectures requiring high-throughput batch writes without client SDK features).",
    referenceUrl: "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    tags: ["Firestore", "Firestore", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-340",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Firestore (Native Mode vs Datastore Mode): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Firestore to select a managed serverless document database for a real-time mobile application requiring client offline synchronization and live event listeners.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Firestore Native mode for mobile/web vs Datastore mode for backend servers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Firestore in Native mode." },
      { id: 'B', text: "Deploy Firestore in Datastore mode." },
      { id: 'C', text: "Deploy an on-premises MongoDB cluster on physical hardware." },
      { id: 'D', text: "Use Cloud Memorystore for Redis as the primary permanent storage layer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Firestore in Native mode. Firestore offers two modes: Native mode (recommended for mobile and web apps, providing real-time data synchronization, offline support, and client SDKs) and Datastore mode (optimized for server-side architectures requiring high-throughput batch writes without client SDK features).",
    referenceUrl: "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    tags: ["Firestore", "Firestore", "Resilience Failure"]
  },
  {
    id: "gcp-ace-341",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "BigQuery Serverless Architecture and Storage Separation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates BigQuery to analyze petabytes of enterprise sales data using standard SQL without provisioning, configuring, or managing database clusters or indexing.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Decoupled compute and storage with columnar architecture is under consideration.",
    options: [
      { id: 'A', text: "Ingest data into BigQuery and execute analytical SQL queries." },
      { id: 'B', text: "Deploy an Apache Hadoop cluster on Compute Engine virtual machines." },
      { id: 'C', text: "Export data to CSV files and analyze them using desktop spreadsheet software." },
      { id: 'D', text: "Create a relational database in Cloud SQL with a 10 GB storage disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ingest data into BigQuery and execute analytical SQL queries. BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse. It separates compute (Dremel execution engine) from storage (Colossus distributed file system) over a petabit Jupiter network, allowing petabyte-scale queries to execute in seconds without cluster administration.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "BigQuery", "Dr Failover"]
  },
  {
    id: "gcp-ace-342",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "BigQuery Serverless Architecture and Storage Separation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates BigQuery to analyze petabytes of enterprise sales data using standard SQL without provisioning, configuring, or managing database clusters or indexing.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Decoupled compute and storage with columnar architecture is under consideration.",
    options: [
      { id: 'A', text: "Ingest data into BigQuery and execute analytical SQL queries." },
      { id: 'B', text: "Deploy an Apache Hadoop cluster on Compute Engine virtual machines." },
      { id: 'C', text: "Export data to CSV files and analyze them using desktop spreadsheet software." },
      { id: 'D', text: "Create a relational database in Cloud SQL with a 10 GB storage disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ingest data into BigQuery and execute analytical SQL queries. BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse. It separates compute (Dremel execution engine) from storage (Colossus distributed file system) over a petabit Jupiter network, allowing petabyte-scale queries to execute in seconds without cluster administration.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "BigQuery", "High Load Scale"]
  },
  {
    id: "gcp-ace-343",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "BigQuery Serverless Architecture and Storage Separation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates BigQuery to analyze petabytes of enterprise sales data using standard SQL without provisioning, configuring, or managing database clusters or indexing.",
    question: "Which solution properly implements these mandatory security and governance controls? Decoupled compute and storage with columnar architecture is under consideration.",
    options: [
      { id: 'A', text: "Ingest data into BigQuery and execute analytical SQL queries." },
      { id: 'B', text: "Deploy an Apache Hadoop cluster on Compute Engine virtual machines." },
      { id: 'C', text: "Export data to CSV files and analyze them using desktop spreadsheet software." },
      { id: 'D', text: "Create a relational database in Cloud SQL with a 10 GB storage disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ingest data into BigQuery and execute analytical SQL queries. BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse. It separates compute (Dremel execution engine) from storage (Colossus distributed file system) over a petabit Jupiter network, allowing petabyte-scale queries to execute in seconds without cluster administration.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "BigQuery", "Security Compliance"]
  },
  {
    id: "gcp-ace-344",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "BigQuery Serverless Architecture and Storage Separation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates BigQuery to analyze petabytes of enterprise sales data using standard SQL without provisioning, configuring, or managing database clusters or indexing.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Decoupled compute and storage with columnar architecture is under consideration.",
    options: [
      { id: 'A', text: "Ingest data into BigQuery and execute analytical SQL queries." },
      { id: 'B', text: "Deploy an Apache Hadoop cluster on Compute Engine virtual machines." },
      { id: 'C', text: "Export data to CSV files and analyze them using desktop spreadsheet software." },
      { id: 'D', text: "Create a relational database in Cloud SQL with a 10 GB storage disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ingest data into BigQuery and execute analytical SQL queries. BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse. It separates compute (Dremel execution engine) from storage (Colossus distributed file system) over a petabit Jupiter network, allowing petabyte-scale queries to execute in seconds without cluster administration.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "BigQuery", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-345",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "BigQuery Serverless Architecture and Storage Separation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates BigQuery to analyze petabytes of enterprise sales data using standard SQL without provisioning, configuring, or managing database clusters or indexing.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Decoupled compute and storage with columnar architecture is under consideration.",
    options: [
      { id: 'A', text: "Ingest data into BigQuery and execute analytical SQL queries." },
      { id: 'B', text: "Deploy an Apache Hadoop cluster on Compute Engine virtual machines." },
      { id: 'C', text: "Export data to CSV files and analyze them using desktop spreadsheet software." },
      { id: 'D', text: "Create a relational database in Cloud SQL with a 10 GB storage disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ingest data into BigQuery and execute analytical SQL queries. BigQuery is Google Cloud's fully managed, serverless enterprise data warehouse. It separates compute (Dremel execution engine) from storage (Colossus distributed file system) over a petabit Jupiter network, allowing petabyte-scale queries to execute in seconds without cluster administration.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/introduction",
    tags: ["BigQuery", "BigQuery", "Resilience Failure"]
  },
  {
    id: "gcp-ace-346",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Deployment via gcloud: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud engineer evaluates Compute Engine to deploy an Ubuntu 22.04 Compute Engine virtual machine in us-central1-a with a specific service account and network tag via the command line.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? gcloud compute instances create with network, tags, and metadata flags is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags." },
      { id: 'B', text: "Click through the Cloud Console UI wizard manually." },
      { id: 'C', text: "Deploy an unmanaged container image directly to Cloud Storage." },
      { id: 'D', text: "Write a custom bash script that issues raw TCP socket packets to Google Cloud data centers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags. The command 'gcloud compute instances create [NAME] --zone=[ZONE] --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --service-account=[SA_EMAIL] --tags=[TAGS]' automates repeatable, scriptable VM deployments with defined identities and network configurations.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/create-start-instance#gcloud",
    tags: ["Compute Engine", "Compute Engine", "Dr Failover"]
  },
  {
    id: "gcp-ace-347",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Deployment via gcloud: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud engineer evaluates Compute Engine to deploy an Ubuntu 22.04 Compute Engine virtual machine in us-central1-a with a specific service account and network tag via the command line.",
    question: "Which architectural approach should the team select to manage this demand efficiently? gcloud compute instances create with network, tags, and metadata flags is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags." },
      { id: 'B', text: "Click through the Cloud Console UI wizard manually." },
      { id: 'C', text: "Deploy an unmanaged container image directly to Cloud Storage." },
      { id: 'D', text: "Write a custom bash script that issues raw TCP socket packets to Google Cloud data centers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags. The command 'gcloud compute instances create [NAME] --zone=[ZONE] --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --service-account=[SA_EMAIL] --tags=[TAGS]' automates repeatable, scriptable VM deployments with defined identities and network configurations.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/create-start-instance#gcloud",
    tags: ["Compute Engine", "Compute Engine", "High Load Scale"]
  },
  {
    id: "gcp-ace-348",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Deployment via gcloud: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud engineer evaluates Compute Engine to deploy an Ubuntu 22.04 Compute Engine virtual machine in us-central1-a with a specific service account and network tag via the command line.",
    question: "Which solution properly implements these mandatory security and governance controls? gcloud compute instances create with network, tags, and metadata flags is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags." },
      { id: 'B', text: "Click through the Cloud Console UI wizard manually." },
      { id: 'C', text: "Deploy an unmanaged container image directly to Cloud Storage." },
      { id: 'D', text: "Write a custom bash script that issues raw TCP socket packets to Google Cloud data centers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags. The command 'gcloud compute instances create [NAME] --zone=[ZONE] --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --service-account=[SA_EMAIL] --tags=[TAGS]' automates repeatable, scriptable VM deployments with defined identities and network configurations.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/create-start-instance#gcloud",
    tags: ["Compute Engine", "Compute Engine", "Security Compliance"]
  },
  {
    id: "gcp-ace-349",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Deployment via gcloud: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud engineer evaluates Compute Engine to deploy an Ubuntu 22.04 Compute Engine virtual machine in us-central1-a with a specific service account and network tag via the command line.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? gcloud compute instances create with network, tags, and metadata flags is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags." },
      { id: 'B', text: "Click through the Cloud Console UI wizard manually." },
      { id: 'C', text: "Deploy an unmanaged container image directly to Cloud Storage." },
      { id: 'D', text: "Write a custom bash script that issues raw TCP socket packets to Google Cloud data centers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags. The command 'gcloud compute instances create [NAME] --zone=[ZONE] --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --service-account=[SA_EMAIL] --tags=[TAGS]' automates repeatable, scriptable VM deployments with defined identities and network configurations.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/create-start-instance#gcloud",
    tags: ["Compute Engine", "Compute Engine", "Hybrid Migration"]
  },
  {
    id: "gcp-ace-350",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Instance Deployment via gcloud: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud engineer evaluates Compute Engine to deploy an Ubuntu 22.04 Compute Engine virtual machine in us-central1-a with a specific service account and network tag via the command line.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? gcloud compute instances create with network, tags, and metadata flags is under consideration.",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags." },
      { id: 'B', text: "Click through the Cloud Console UI wizard manually." },
      { id: 'C', text: "Deploy an unmanaged container image directly to Cloud Storage." },
      { id: 'D', text: "Write a custom bash script that issues raw TCP socket packets to Google Cloud data centers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute 'gcloud compute instances create' specifying the zone, image-family, service-account, and tags flags. The command 'gcloud compute instances create [NAME] --zone=[ZONE] --image-family=ubuntu-2204-lts --image-project=ubuntu-os-cloud --service-account=[SA_EMAIL] --tags=[TAGS]' automates repeatable, scriptable VM deployments with defined identities and network configurations.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/create-start-instance#gcloud",
    tags: ["Compute Engine", "Compute Engine", "Resilience Failure"]
  }
];

export default GCP_ACE_QUESTIONS_14;
