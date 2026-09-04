export const GCP_ACE_QUESTIONS_3 = [
  {
    id: "gcp-ace-51",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Google Cloud Storage Class Selection",
    scenario: "A compliance regulation requires storing patient medical audit logs for 5 years. The logs are strictly required for disaster recovery and legal discovery, accessed less than once every two years, but must be available within milliseconds when requested.",
    question: "Which Cloud Storage class provides the lowest storage cost while satisfying the retrieval latency requirement?",
    options: [
      { id: 'A', text: "Coldline Storage" },
      { id: 'B', text: "Archive Storage" },
      { id: 'C', text: "Standard Storage" },
      { id: 'D', text: "Nearline Storage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage Archive class is optimized for data accessed less than once a year (designed for 365+ day retention) and provides the lowest storage pricing per GB. Crucially, all Cloud Storage classes (Standard, Nearline, Coldline, Archive) provide the same sub-second millisecond retrieval latency.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes",
    tags: ["Cloud Storage", "Archive", "Cost Optimization"]
  },
  {
    id: "gcp-ace-52",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Relational Database Selection: Cloud SQL vs. Cloud Spanner",
    scenario: "A gaming company is designing the player inventory and transactions database for a massively multiplayer online game. The database requires strict ACID transactions, relational SQL querying, and must scale horizontally across multiple regions in North America, Europe, and Asia with 99.999% availability.",
    question: "Which managed database service should be selected?",
    options: [
      { id: 'A', text: "Firestore in Datastore mode" },
      { id: 'B', text: "Cloud SQL with cross-region read replicas" },
      { id: 'C', text: "Cloud Bigtable" },
      { id: 'D', text: "Cloud Spanner" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Spanner is Google Cloud's fully managed, globally distributed relational database that provides external consistency, strict ACID transactions, ANSI SQL compatibility, and horizontal scaling across multiple regions with up to 99.999% SLA availability. Cloud SQL is limited to a single primary read-write instance.",
    referenceUrl: "https://cloud.google.com/spanner/docs/overview",
    tags: ["Cloud Spanner", "Cloud SQL", "Databases", "Architecture"]
  },
  {
    id: "gcp-ace-53",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "NoSQL for High-Throughput Time-Series: Cloud Bigtable",
    scenario: "An IoT platform ingests real-time telemetry metrics from 2 million connected smart meters, generating over 500,000 writes per second. The data requires low-latency sub-10ms read/write throughput and integration with Apache Spark and BigQuery for analytical querying.",
    question: "Which database service is specifically optimized for this workload?",
    options: [
      { id: 'A', text: "Cloud Storage Standard bucket" },
      { id: 'B', text: "Cloud SQL for PostgreSQL" },
      { id: 'C', text: "Cloud Bigtable" },
      { id: 'D', text: "Firebase Realtime Database" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Bigtable is Google Cloud's high-performance NoSQL wide-column store designed for petabyte-scale workloads with massive write throughput and single-digit millisecond latency. It is ideal for IoT, time-series, financial ticker data, and large-scale analytical processing.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/overview",
    tags: ["Cloud Bigtable", "NoSQL", "IoT", "Performance"]
  },
  {
    id: "gcp-ace-54",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "VPC Network Architecture: Auto Mode vs. Custom Mode",
    scenario: "A network architect is designing a secure enterprise Google Cloud environment and must ensure subnets do not overlap with existing on-premises corporate IP address ranges.",
    question: "What is the recommended VPC network type?",
    options: [
      { id: 'A', text: "Default legacy network" },
      { id: 'B', text: "Shared loopback network" },
      { id: 'C', text: "Custom mode VPC network" },
      { id: 'D', text: "Auto mode VPC network" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Custom mode VPC networks allow network architects to manually define IP address ranges and subnets in selected regions. In contrast, Auto mode VPC networks automatically create a pre-defined subnet in every single Google Cloud region using fixed IP ranges (10.128.0.0/9), which frequently conflicts with on-premises corporate IP schemes.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc#modes",
    tags: ["Networking", "VPC", "Custom Mode", "Subnets"]
  },
  {
    id: "gcp-ace-55",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Choosing Between App Engine Standard and Flexible for Containerized Workloads",
    scenario: "A development team wants to deploy an existing legacy web application packaged as a custom Docker container. The application requires background worker threads, custom Linux libraries (OpenSSL engine), and occasional SSH access for debugging. Rapid scale-to-zero is not required.",
    question: "Which compute environment meets these technical requirements?",
    options: [
      { id: 'A', text: "Cloud Run with CPU allocated only during request processing" },
      { id: 'B', text: "App Engine Flexible Environment" },
      { id: 'C', text: "App Engine Standard Environment" },
      { id: 'D', text: "Cloud Functions (1st gen)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "App Engine Flexible Environment runs application code inside custom Docker containers on managed Compute Engine virtual machines. It supports background threads, arbitrary native Linux libraries, custom runtimes, and SSH debugging access. App Engine Standard, by contrast, runs within restricted sandboxed language runtimes that do not support arbitrary Dockerfiles, SSH, or persistent background threads.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["AppEngine", "Compute", "Containers"]
  },
  {
    id: "gcp-ace-56",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Mitigating Cold Starts and Protecting Downstream Relational Databases in Cloud Run",
    scenario: "A financial payment API deployed on Cloud Run experiences latency spikes during sudden traffic surges due to container cold starts. Furthermore, when traffic spikes 100x, Cloud Run scales out hundreds of container instances simultaneously, exhausting connection pools on the backend Cloud SQL database.",
    question: "Which Cloud Run configuration adjustments address both cold starts and database connection limits?",
    options: [
      { id: 'A', text: "Configure '--min-instances=5' to keep warm instances ready, and set '--max-instances=30' to cap concurrent database connections" },
      { id: 'B', text: "Deploy Cloud Run into a multi-region Managed Instance Group with unmanaged health checks" },
      { id: 'C', text: "Disable Cloud Run concurrency by setting '--concurrency=1'" },
      { id: 'D', text: "Increase container memory to 32 GiB and set CPU allocation to 'always allocated'" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting '--min-instances' maintains a baseline number of warm container instances always ready to process incoming requests, eliminating cold start latency. Setting '--max-instances' restricts the maximum number of container instances that can be autoscaled, capping total simultaneous connections to the downstream Cloud SQL database to prevent exhaustion.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "Scalability", "CloudSQL"]
  },
  {
    id: "gcp-ace-57",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "GKE Cluster Selection: Autopilot vs. Standard for Minimal Ops Overhead",
    scenario: "A startup with limited Kubernetes operations staff wants to deploy a microservices application on Google Kubernetes Engine. The team wants Google to manage cluster infrastructure, node provisioning, OS patching, and security hardening according to best practices, while paying solely for the compute resources requested by their pods.",
    question: "Which GKE mode of operation should the team select?",
    options: [
      { id: 'A', text: "GKE Autopilot" },
      { id: 'B', text: "Anthos Service Mesh standalone" },
      { id: 'C', text: "Compute Engine Managed Instance Group running container-optimized OS" },
      { id: 'D', text: "GKE Standard with node auto-upgrade and auto-repair" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE Autopilot is a fully managed mode of operation where Google provisions and manages all underlying nodes, OS images, security baselines, and scaling. Users interact with the standard Kubernetes API but do not manage node pools, and billing is based strictly on the vCPU, memory, and storage resources requested by scheduled pods rather than provisioned VM capacity.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "Autopilot", "Kubernetes"]
  },
  {
    id: "gcp-ace-58",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Leveraging Spot VMs for Fault-Tolerant Batch Processing at Maximum Discount",
    scenario: "A data science team runs 12-hour video rendering and machine learning batch processing jobs using a distributed Celery task queue that automatically retries failed tasks. The engineering manager mandates reducing Compute Engine costs by at least 60% without the 24-hour runtime limitation imposed by legacy preemptible VMs.",
    question: "Which Compute Engine VM provisioning model should be chosen?",
    options: [
      { id: 'A', text: "Preemptible VMs" },
      { id: 'B', text: "Spot VMs" },
      { id: 'C', text: "Custom Machine Types with Committed Use Discounts" },
      { id: 'D', text: "Sole-Tenant Nodes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Spot VMs provide the same steep 60-91% discount as legacy Preemptible VMs with a 30-second preemption notice when Google Cloud needs the capacity back. Crucially, unlike Preemptible VMs which are strictly terminated after 24 hours of runtime, Spot VMs have no 24-hour limit and will run continuously as long as spare compute capacity is available.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "SpotVMs", "CostOptimization"]
  },
  {
    id: "gcp-ace-59",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Hardware Isolation and Licensing Governance with Sole-Tenant Nodes",
    scenario: "A healthcare provider must migrate an on-premises database running Windows Server and Microsoft SQL Server to Google Cloud. Due to strict HIPAA regulatory audit requirements, physical compute hardware must not be shared with any other customer. Additionally, the organization wants to bring its existing on-premises per-core software licenses (BYOL).",
    question: "Which Compute Engine solution satisfies these compliance and licensing constraints?",
    options: [
      { id: 'A', text: "Confidential VM instances with AMD SEV" },
      { id: 'B', text: "Shielded VM instances with vTPM" },
      { id: 'C', text: "Regional Managed Instance Groups" },
      { id: 'D', text: "Sole-Tenant Nodes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sole-Tenant Nodes dedicate physical server hardware in Google Cloud data centers exclusively to a single enterprise. They fulfill stringent compliance mandates requiring physical isolation from multi-tenant hardware and allow bringing existing on-premises per-core licenses (BYOL for Windows Server and SQL Server) to the cloud.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "SoleTenant", "Compliance"]
  },
  {
    id: "gcp-ace-60",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cost-Effective Regulatory Archiving with Cloud Storage Classes",
    scenario: "An insurance company must retain customer policy PDF documents and scanned identity records for 7 years to comply with financial regulations. The records are accessed less than once every two years, usually only during regulatory audits. The company wants the lowest possible storage cost.",
    question: "Which Cloud Storage class should be selected for this archive?",
    options: [
      { id: 'A', text: "Coldline Storage" },
      { id: 'B', text: "Archive Storage" },
      { id: 'C', text: "Standard Storage" },
      { id: 'D', text: "Nearline Storage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage Archive class offers the lowest storage cost (less than $0.0012 per GB/month) and is designed specifically for cold data accessed less than once a year (such as long-term regulatory compliance archiving). While it has higher retrieval costs and a 365-day minimum storage duration, the extreme storage discount makes it the most cost-effective solution for multi-year regulatory archives.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "Archive", "CostOptimization"]
  },
  {
    id: "gcp-ace-61",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Automating Storage Tiering Across Lifecycle without Retrieval Fees: Autoclass",
    scenario: "A media streaming platform uploads millions of video clips and user avatars. Access patterns are unpredictable: some clips go viral after months of dormancy, while others become completely inactive within days. The operations team wants objects to transition automatically between cold and hot tiers without managing complex lifecycle scripts or paying data retrieval charges when files are accessed.",
    question: "Which Cloud Storage feature satisfies these requirements?",
    options: [
      { id: 'A', text: "Storage Transfer Service scheduled jobs" },
      { id: 'B', text: "Cloud Storage Object Versioning" },
      { id: 'C', text: "Cloud Storage Autoclass" },
      { id: 'D', text: "Cloud Storage Object Lifecycle Management rules with SetStorageClass" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Storage Autoclass automatically transitions objects between Standard, Nearline, Coldline, and Archive classes based on each object's access history over time. When an object is read, it is transitioned back to Standard immediately. Crucially, Autoclass charges no data retrieval fees, eliminating unpredictable egress costs when dormant data is accessed.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "Autoclass", "Automation"]
  },
  {
    id: "gcp-ace-62",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "WORM Compliance and Immutable Archiving with Bucket Lock",
    scenario: "A securities trading platform must comply with SEC Rule 17a-4, which mandates that transaction audit logs must be stored in a non-erasable, non-rewritable (WORM) format for 5 years. Even root administrators must be prevented from deleting or modifying files during the retention period.",
    question: "How should the storage administrator configure the Cloud Storage bucket?",
    options: [
      { id: 'A', text: "Assign the 'roles/storage.objectViewer' role to the Organization Administrator" },
      { id: 'B', text: "Enable Object Versioning and configure an IAM deny rule for storage.objects.delete" },
      { id: 'C', text: "Create a Customer-Managed Encryption Key (CMEK) and destroy the key" },
      { id: 'D', text: "Apply a Retention Policy with a 5-year duration to the bucket and permanently lock the policy using Bucket Lock" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Cloud Storage Retention Policy ensures that objects cannot be deleted or overwritten until their age reaches the defined retention period. Using Bucket Lock permanently locks the retention policy on the bucket; once locked, the policy can never be removed, disabled, or shortened, even by Google Cloud Support or organization owners, guaranteeing WORM compliance.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "BucketLock", "Compliance"]
  },
  {
    id: "gcp-ace-63",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Designing High Availability for Mission-Critical Cloud SQL Databases",
    scenario: "An e-commerce retailer runs its order processing database on Cloud SQL for PostgreSQL. The business requires an SLA that guarantees continuous operation with zero data loss in the event of an entire data center zone failure, with automatic failover occurring in under 60 seconds.",
    question: "Which Cloud SQL architectural configuration fulfills this requirement?",
    options: [
      { id: 'A', text: "Enable High Availability (HA) configuration to provision a synchronous standby instance in another zone within the same region" },
      { id: 'B', text: "Deploy Cloud SQL behind an External Application Load Balancer" },
      { id: 'C', text: "Provision a cross-region Read Replica with automated promote scripts" },
      { id: 'D', text: "Schedule automated hourly backups and export to a multi-region Cloud Storage bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud SQL High Availability (HA) provisions a primary instance in one zone and a synchronous standby replica in a secondary zone within the same region, backed by regional persistent disk storage. Data writes are synchronously replicated across zones. If the primary zone fails, Cloud SQL automatically redirects the failover DNS record to the standby instance with zero data loss.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "HighAvailability", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-64",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Preventing Cloud Spanner Hotspotting with Proper Primary Key Schema Design",
    scenario: "A global mobile banking application deploys Cloud Spanner to record millions of financial ledger transactions per minute across 10 nodes. During load testing, write latency degrades sharply. The database team discovers that the transaction table uses an auto-incrementing integer sequence ('transaction_id BIGINT AUTO_INCREMENT') as its primary key.",
    question: "Why is the sequential primary key causing performance degradation, and how should it be fixed?",
    options: [
      { id: 'A', text: "Cloud Spanner does not support integers; the primary key should be converted to a floating point number" },
      { id: 'B', text: "Sequential keys cause all inserts to write to the single server split responsible for the tail of the key range; the key should be changed to a universally unique identifier (UUID v4) or bit-reversed integer to distribute writes across splits" },
      { id: 'C', text: "The cluster must be upgraded from 10 nodes to 50 nodes to handle sequential writes" },
      { id: 'D', text: "Transactions must be routed through Cloud Bigtable before being inserted into Cloud Spanner" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Spanner partitions tables into splits based on key ranges. Using sequential or monotonically increasing values (auto-incrementing integers, timestamps) forces all new write operations to target the same split and node, causing severe CPU and disk hotspots. Generating random UUID v4 values or bit-reversing sequential IDs distributes writes uniformly across all nodes in the cluster.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSpanner", "SchemaDesign", "Performance"]
  },
  {
    id: "gcp-ace-65",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Selecting Low-Latency NoSQL Storage for High-Throughput IoT Telemetry",
    scenario: "A connected vehicle platform receives sensor telemetry (speed, tire pressure, engine temperature) from 500,000 vehicles every second, resulting in 50 TB of data per day. The platform requires sustained sub-10ms write and lookup latency for time-series data indexed by vehicle ID and timestamp.",
    question: "Which Google Cloud database service is designed for this workload?",
    options: [
      { id: 'A', text: "Firestore in Datastore mode" },
      { id: 'B', text: "Cloud SQL for MySQL with read replicas" },
      { id: 'C', text: "Cloud Bigtable with SSD storage" },
      { id: 'D', text: "Cloud Storage Multi-Region with standard storage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Bigtable is Google Cloud's petabyte-scale, sparsely populated NoSQL wide-column database. It delivers consistent single-digit millisecond latency at millions of operations per second, making it the industry standard for IoT telemetry, financial tickers, and massive time-series event streams when provisioned with SSD storage.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBigtable", "IoT", "NoSQL"]
  },
  {
    id: "gcp-ace-66",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Row Key Anti-Patterns in Cloud Bigtable Schema Design",
    scenario: "An engineer designs a Cloud Bigtable schema to store server performance metrics. The proposed row key is formatted as 'TIMESTAMP#HOSTNAME' (e.g. '2026-09-03T12:00:00#web-01'). The database architect flags this schema as an anti-pattern.",
    question: "Why does starting a Bigtable row key with a timestamp cause performance bottlenecks?",
    options: [
      { id: 'A', text: "Bigtable does not support strings containing special characters like colons or dashes" },
      { id: 'B', text: "Timestamps exceed Bigtable's 4 KB row key length limit" },
      { id: 'C', text: "Cloud Bigtable requires row keys to be strictly generated by Cloud Spanner" },
      { id: 'D', text: "Because Bigtable sorts data lexicographically by row key, timestamps cause all concurrent writes at any given moment to hit the exact same tablet server, creating a write hotspot" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Bigtable stores data in lexicographical order by row key. If the row key begins with a timestamp, all writes occurring in the current second or minute share the exact same key prefix and are routed to a single tablet on one node. Best practice is to prepend a hashed value, reversed hostname, or entity ID (e.g. 'HOSTNAME#TIMESTAMP') to distribute writes across nodes.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBigtable", "RowKey", "SchemaDesign"]
  },
  {
    id: "gcp-ace-67",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Optimizing BigQuery Performance and Cost with Partitioning and Clustering",
    scenario: "A retail company queries a 100 TB 'orders' table in BigQuery daily. Queries consistently filter by 'order_date' (last 30 days) and by 'store_id' (a specific store). Currently, every query scans the entire 100 TB, costing hundreds of dollars per execution.",
    question: "How should the data engineering team structure the table to minimize query costs and latency?",
    options: [
      { id: 'A', text: "Upgrade to BigQuery flat-rate reservation slots" },
      { id: 'B', text: "Cluster the table by 'order_date' and create a view filtering by store_id" },
      { id: 'C', text: "Export the table to Cloud Storage as uncompressed CSV files" },
      { id: 'D', text: "Partition the table by 'order_date' and cluster the table by 'store_id'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Partitioning the table by 'order_date' segments data into separate physical blocks by date, so queries filtering on 'order_date' prune unneeded partitions and scan only the relevant days of data. Clustering by 'store_id' further sorts and organizes data within each partition, allowing BigQuery to skip non-matching blocks and dramatically reducing scanned bytes and costs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "Partitioning", "Clustering"]
  },
  {
    id: "gcp-ace-68",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Estimating Query Scanned Bytes in BigQuery Before Execution",
    scenario: "A junior analyst drafts an ad-hoc SQL query across several terabyte-scale tables in BigQuery. Before running the query and consuming departmental budget, the analyst wants to know the exact number of bytes that will be processed.",
    question: "Which tool or command reveals query scanned volume without executing the query or incurring cost?",
    options: [
      { id: 'A', text: "Run the query with 'LIMIT 10'" },
      { id: 'B', text: "Execute the query during off-peak hours" },
      { id: 'C', text: "Run 'bq query --dry_run' with the SQL query or check the green checkmark query validator in the Cloud Console" },
      { id: 'D', text: "Export the query execution plan to Cloud Logging" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Running 'bq query --dry_run' (or viewing the query validator indicator in the BigQuery Web Console) parses and validates the SQL syntax and calculates the exact byte count that would be read by the query without actually executing it or charging the user's project.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "CostOptimization", "FinOps"]
  },
  {
    id: "gcp-ace-69",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "VPC Network Architecture: Choosing Custom Mode for Enterprise Production",
    scenario: "An enterprise network architect is establishing the Google Cloud network topology for a company connecting to an existing on-premises data center with subnets in 10.128.0.0/9. The architect must choose between creating an Auto Mode VPC or a Custom Mode VPC.",
    question: "Why should the architect select a Custom Mode VPC for this hybrid deployment?",
    options: [
      { id: 'A', text: "Auto Mode VPCs automatically create subnets using predefined 10.128.0.0/9 IP ranges in every region, which directly conflicts with on-premises address spaces; Custom Mode allows full control over non-overlapping CIDR definitions" },
      { id: 'B', text: "Auto Mode VPCs do not support firewall rules or Cloud NAT" },
      { id: 'C', text: "Google Cloud will deprecate Auto Mode VPCs for Compute Engine next quarter" },
      { id: 'D', text: "Custom Mode VPCs do not incur network egress charges" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Auto Mode VPCs automatically generate a subnet in every Google Cloud region using fixed, predefined IP ranges from 10.128.0.0/9. In hybrid cloud architectures, these predefined ranges frequently overlap with existing corporate on-premises networks, preventing VPN or Interconnect routing. Custom Mode VPCs require explicit CIDR definition, preventing IP collisions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Networking", "Architecture"]
  },
  {
    id: "gcp-ace-70",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Understanding Non-Transitive Routing in VPC Network Peering",
    scenario: "A company establishes VPC Network Peering between 'VPC-A' (production) and 'VPC-B' (shared services). 'VPC-B' is also peered with 'VPC-C' (analytics). An engineer in 'VPC-A' attempts to connect directly to a private database instance in 'VPC-C' over internal IPs, but network packets are dropped.",
    question: "Why can instances in VPC-A not communicate with instances in VPC-C?",
    options: [
      { id: 'A', text: "VPC-A and VPC-C must share the same billing account" },
      { id: 'B', text: "The instances in VPC-C lack public external IP addresses" },
      { id: 'C', text: "VPC Network Peering is strictly non-transitive; traffic from VPC-A cannot route through VPC-B to reach VPC-C" },
      { id: 'D', text: "VPC Peering requires Cloud NAT to be enabled on VPC-B" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud VPC Network Peering is strictly non-transitive. Even if VPC-A is peered with VPC-B, and VPC-B is peered with VPC-C, VPC-A cannot route traffic through VPC-B to access VPC-C. To establish connectivity between VPC-A and VPC-C, a direct peering connection between A and C must be created (provided their CIDRs do not overlap), or a VPN gateway hub must be deployed.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Peering", "Networking"]
  },
  {
    id: "gcp-ace-71",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Prerequisites for Establishing VPC Network Peering",
    scenario: "Two engineering teams in different subsidiaries want to peer their Google Cloud VPC networks to allow microservices to communicate privately. Team 1 uses subnet range 10.0.0.0/16. Team 2 uses subnet range 10.0.0.0/18 and 192.168.1.0/24.",
    question: "What will happen when the teams attempt to create the peering connection?",
    options: [
      { id: 'A', text: "Google Cloud will automatically re-number the subnets in Team 2's network" },
      { id: 'B', text: "Traffic will be routed through Cloud NAT automatically" },
      { id: 'C', text: "The peering will fail because Google Cloud prohibits peering between VPC networks that have overlapping CIDR ranges" },
      { id: 'D', text: "The peering will succeed, and packets will be routed based on longest prefix match" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A fundamental rule of VPC Network Peering in Google Cloud is that peered networks cannot have overlapping IP address ranges. Because 10.0.0.0/18 is a subset of 10.0.0.0/16, the peering configuration will be rejected with an overlapping CIDR error.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Peering", "Routing"]
  },
  {
    id: "gcp-ace-72",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cloud VPN Selection: HA VPN vs. Classic VPN for SLA Guarantee",
    scenario: "A bank requires a site-to-site IPsec VPN connection between its on-premises corporate data center and Google Cloud VPC. Bank compliance mandates a minimum service level agreement (SLA) of 99.99% availability.",
    question: "Which VPN solution and routing configuration must be implemented to achieve this SLA?",
    options: [
      { id: 'A', text: "Google Cloud HA VPN configured with two public IP interfaces connected to dual peer gateways, using dynamic routing with Cloud Router (BGP)" },
      { id: 'B', text: "Classic VPN configured with static routing and policy-based tunnels" },
      { id: 'C', text: "Cloud NAT deployed with dual redundant IP addresses" },
      { id: 'D', text: "Two standalone Classic VPN gateways deployed in different regions with static route metrics" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud HA VPN is specifically designed to provide an industry-leading 99.99% service availability SLA. It provisions two interfaces, each with its own public IP, requiring connectivity to dual on-premises gateways or a single peer gateway with dual interfaces. HA VPN mandates dynamic routing using Border Gateway Protocol (BGP) managed by Cloud Router.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudVPN", "HAVPN", "Networking"]
  },
  {
    id: "gcp-ace-73",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "High-Throughput Hybrid Connectivity: Dedicated vs. Partner Interconnect",
    scenario: "An enterprise with an established colocation presence in Equinix Chicago needs a dedicated, private, low-latency connection of 20 Gbps to Google Cloud for daily multi-terabyte data transfers. The enterprise does not want traffic traversing the public internet.",
    question: "Which hybrid connectivity product should the enterprise select?",
    options: [
      { id: 'A', text: "Dedicated Interconnect" },
      { id: 'B', text: "Carrier Peering" },
      { id: 'C', text: "Partner Interconnect" },
      { id: 'D', text: "HA VPN over the public internet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dedicated Interconnect provides direct physical fiber cable connections between an enterprise's on-premises network and Google's network at supported colocation facilities. It supports 10 Gbps and 100 Gbps link speeds (e.g. 2 x 10 Gbps links for 20 Gbps), offering private enterprise-grade routing without internet exposure.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudInterconnect", "HybridCloud", "Networking"]
  },
  {
    id: "gcp-ace-74",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Securing Private VM Egress Traffic with Cloud NAT",
    scenario: "Production backend Compute Engine instances in a custom VPC do not have public external IP addresses for security reasons. These instances must regularly download software patches and security definitions from public internet repositories, but must strictly reject any unsolicited incoming connections from the internet.",
    question: "Which service provides this outbound connectivity?",
    options: [
      { id: 'A', text: "Deploy Cloud NAT on the Cloud Router associated with the VPC subnet" },
      { id: 'B', text: "Deploy a custom Squid proxy on a single public VM with no health checks" },
      { id: 'C', text: "Assign ephemeral external IP addresses to all instances and apply an egress firewall rule" },
      { id: 'D', text: "Enable Identity-Aware Proxy (IAP) TCP forwarding" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud NAT (Network Address Translation) is a fully managed, software-defined egress-only gateway. It allows private Compute Engine instances without public IPs to send outbound traffic to the internet (performing Source NAT) while preventing the outside internet from establishing inbound connections to those instances.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudNAT", "Security", "Networking"]
  },
  {
    id: "gcp-ace-75",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Prioritizing VPC Firewall Rules with Custom Priority Numbers",
    scenario: "A security engineer needs to block SSH access (port 22) to all Compute Engine instances in a VPC, but must allow SSH access from a trusted administrative bastion subnet (10.10.1.0/24).",
    question: "How should the engineer configure the firewall rules and priorities?",
    options: [
      { id: 'A', text: "Rely on the implicit default deny ingress rule at priority 65535" },
      { id: 'B', text: "Create a single bidirectional rule with priority 0" },
      { id: 'C', text: "Create an ALLOW rule for port 22 from source 10.10.1.0/24 with priority 1000, and create a DENY rule for port 22 from source 0.0.0.0/0 with priority 2000" },
      { id: 'D', text: "Create a DENY rule for port 22 from 0.0.0.0/0 with priority 500, and an ALLOW rule for 10.10.1.0/24 with priority 1000" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Google Cloud VPC firewall rules, priorities range from 0 to 65535, where lower numbers indicate higher priority. When multiple rules match traffic, the rule with the lowest priority number is applied first. Creating an ALLOW rule with priority 1000 permits the trusted subnet, while the DENY rule with priority 2000 blocks all other sources.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Firewalls", "Security"]
  }
];

export default GCP_ACE_QUESTIONS_3;
