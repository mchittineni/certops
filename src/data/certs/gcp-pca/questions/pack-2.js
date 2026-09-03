export const GCP_PCA_QUESTIONS_2 = [
  {
    id: "gcp-pca-26",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Functions vs Cloud Run Architectural Decision",
    scenario: "A developer writes an event-driven webhook microservice. The service needs to scale to zero, responds to HTTP requests in Python, requires custom system shared libraries (`.so` files), and runs a lightweight custom nginx sidecar.",
    question: "Why should the architect select Cloud Run instead of Cloud Functions (2nd gen)?",
    options: [
      { id: 'A', text: "Cloud Run does not support scale to zero" },
      { id: 'B', text: "Cloud Functions does not support Python" },
      { id: 'C', text: "Cloud Functions has a 10-second timeout limit" },
      { id: 'D', text: "Cloud Run allows deploying arbitrary multi-container Dockerfiles with custom OS binaries and sidecars, whereas Cloud Functions is restricted to single-function runtimes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run packages applications as full OCI/Docker container images, allowing custom system binaries, multi-container sidecars (e.g. nginx or logging agents), and custom port listeners, whereas Cloud Functions abstracts the container and restricts code to single-language runtimes.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run#cloud-run-and-cloud-functions",
    tags: ["Cloud Run", "Cloud Functions", "Architecture"]
  },
  {
    id: "gcp-pca-27",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Composer (Managed Apache Airflow) for Workflow Orchestration",
    scenario: "An enterprise data platform coordinates complex ETL workflows that extract data from SAP on-premises, run transformation jobs in Cloud Dataproc, and load aggregates into BigQuery on dependency-driven schedules.",
    question: "Which managed service orchestrates multi-system ETL workflows using Python Directed Acyclic Graphs (DAGs)?",
    options: [
      { id: 'A', text: "Cloud Composer" },
      { id: 'B', text: "Cloud Tasks" },
      { id: 'C', text: "Cloud Scheduler alone" },
      { id: 'D', text: "Cloud Workflows alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Composer is a fully managed workflow orchestration service built on Apache Airflow. It allows data engineers to author, schedule, and monitor complex data pipelines across hybrid environments using Python-based Directed Acyclic Graphs (DAGs).",
    referenceUrl: "https://cloud.google.com/composer/docs/concepts/overview",
    tags: ["Cloud Composer", "Apache Airflow", "Data Orchestration"]
  },
  {
    id: "gcp-pca-28",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Workflows for Low-Latency Microservice Orchestration",
    scenario: "An order fulfillment system executes an asynchronous 5-step transaction: charging a credit card via Stripe, updating Cloud Spanner, invoking an inventory Cloud Function, and sending an email. Low execution overhead and serverless pricing are required.",
    question: "Which serverless orchestration engine coordinates API calls and services using YAML/JSON workflow definitions?",
    options: [
      { id: 'A', text: "Cloud Workflows" },
      { id: 'B', text: "Cloud Composer" },
      { id: 'C', text: "Cloud Dataproc" },
      { id: 'D', text: "Cloud Pub/Sub" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Workflows is a serverless orchestration service that coordinates Google Cloud services and external HTTP APIs using declarative YAML or JSON workflows. It features fast startup times, scale-to-zero pricing, and stateful retries with no infrastructure to manage.",
    referenceUrl: "https://cloud.google.com/workflows/docs/overview",
    tags: ["Workflows", "Serverless", "Orchestration"]
  },
  {
    id: "gcp-pca-29",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Directory and Interleaved Tables Pattern",
    scenario: "In Cloud Spanner, an e-commerce schema contains `Customers` and `Orders`. 99% of queries retrieve a customer along with their specific orders.",
    question: "Which Cloud Spanner schema design feature physically co-locates child `Orders` rows with parent `Customers` rows in storage splits?",
    options: [
      { id: 'A', text: "Creating a Secondary Index on Orders" },
      { id: 'B', text: "Interleaved Tables (e.g. CREATE TABLE Orders (...) INTERLEAVE IN PARENT Customers)" },
      { id: 'C', text: "Using Foreign Key constraints with CASCADE" },
      { id: 'D', text: "Normalizing tables into separate databases" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Table interleaving in Cloud Spanner physically co-locates child rows (e.g. `Orders`) with parent rows (e.g. `Customers`) on the same storage splits. This allows joins between parent and child records to execute locally with extreme performance without cross-network split communication.",
    referenceUrl: "https://cloud.google.com/spanner/docs/schema-and-data-model#creating-interleaved-tables",
    tags: ["Spanner", "Interleaved Tables", "Schema Design"]
  },
  {
    id: "gcp-pca-30",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Hotspotting Avoidance with Salting and Hashing",
    scenario: "A high-throughput IoT system writes records to Cloud Bigtable with row keys starting with sequential timestamps (`20260903-120001-sensorId`). Writes are stalling and tablet servers are reporting high CPU utilization on one node.",
    question: "Why is this performance degradation occurring, and how can the architect resolve it?",
    options: [
      { id: 'A', text: "Bigtable cannot handle more than 100 rows per second" },
      { id: 'B', text: "The Bigtable cluster must be converted to Cloud SQL" },
      { id: 'C', text: "Sequential row keys cause all writes to hit a single tablet server (hotspotting); resolve by prepending a hash or sensorId prefix to the row key" },
      { id: 'D', text: "The row key must be encrypted with RSA keys" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Cloud Bigtable, rows are stored lexicographically. Sequential row keys (such as timestamps) direct all incoming writes to a single tablet partition, creating a bottleneck. Distributing writes requires prepending a non-sequential prefix (like `sensorId` or a hash).",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design#row-keys-to-avoid",
    tags: ["Bigtable", "Hotspotting", "Schema Design"]
  },
  {
    id: "gcp-pca-31",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Partitioning and Clustering for Query Optimization",
    scenario: "An enterprise analytical table in BigQuery holds 50 TB of web clickstream logs. Data analysts frequently query logs filtered by `transactionDate` and `customerId`.",
    question: "Which table design reduces query bytes scanned and minimizes query costs?",
    options: [
      { id: 'A', text: "Partition the table by transactionDate and cluster by customerId" },
      { id: 'B', text: "Cluster the table by transactionDate only" },
      { id: 'C', text: "Create a separate BigQuery table for each customerId" },
      { id: 'D', text: "Partition the table by customerId and cluster by transactionDate" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery table partitioning divides a table into segments based on a date or timestamp column (`transactionDate`), pruning unneeded partitions. Clustering sorts data within each partition by columns like `customerId`, colocating related data to dramatically reduce bytes scanned.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/partitioned-tables",
    tags: ["BigQuery", "Partitioning", "Clustering"]
  },
  {
    id: "gcp-pca-32",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery BI Engine for Sub-Second In-Memory Dashboards",
    scenario: "An executive reporting dashboard in Looker Studio queries BigQuery tables every 5 seconds, causing high query costs and 3-second dashboard rendering latency.",
    question: "Which BigQuery feature provides sub-second query latency by caching table data in memory?",
    options: [
      { id: 'A', text: "BigQuery BI Engine" },
      { id: 'B', text: "Cloud Bigtable caching layer" },
      { id: 'C', text: "Exporting tables to Cloud Memorystore for Redis" },
      { id: 'D', text: "BigQuery Materialized Views alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery BI Engine is a fast, in-memory analysis service. By allocating BI Engine memory reservation, BigQuery accelerates SQL queries from BI tools like Looker Studio and Tableau with sub-second response times and reduced query slot consumption.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    tags: ["BigQuery", "BI Engine", "Looker"]
  },
  {
    id: "gcp-pca-33",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Signed URLs for Secure Direct Client Uploads",
    scenario: "A photo sharing mobile app allows users to upload 100 MB photos directly to Cloud Storage without routing multi-gigabyte video streams through backend application servers.",
    question: "Which Cloud Storage mechanism allows application servers to grant temporary, time-limited upload permissions to mobile clients?",
    options: [
      { id: 'A', text: "Signed URLs (V4 signing)" },
      { id: 'B', text: "Embedding service account private keys in mobile app binaries" },
      { id: 'C', text: "Cloud Storage Customer-Managed Encryption Keys" },
      { id: 'D', text: "Making the Cloud Storage bucket public" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Signed URL` provides temporary read or write access to a specific Cloud Storage resource. An application server generates the signed URL using its service account credentials with a specified expiration time (e.g. 15 minutes) and HTTP method (PUT), allowing clients to upload directly.",
    referenceUrl: "https://cloud.google.com/storage/docs/access-control/signed-urls",
    tags: ["Cloud Storage", "Signed URLs", "Security"]
  },
  {
    id: "gcp-pca-34",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Object Lifecycle Management Rules",
    scenario: "A log aggregation bucket collects 1 TB of system logs daily. The compliance rule requires keeping logs in Standard storage for 30 days, transitioning to Coldline for 60 days, and deleting logs after 365 days.",
    question: "Which Cloud Storage capability automates these storage transitions based on object age?",
    options: [
      { id: 'A', text: "Object Lifecycle Management rules" },
      { id: 'B', text: "Cloud Functions with nightly cron triggers" },
      { id: 'C', text: "Cloud Storage Versioning alone" },
      { id: 'D', text: "Cloud Storage Autoclass alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Storage `Object Lifecycle Management` defines declarative JSON rules applied to a bucket. Rules evaluate conditions like `Age` (days since creation) and execute actions like `SetStorageClass` (to Coldline) and `Delete` automatically in the background.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Lifecycle Management", "Cost Optimization"]
  },
  {
    id: "gcp-pca-35",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Compute Engine Spot VMs vs On-Demand for Batch Workloads",
    scenario: "A genomics research laboratory runs massive batch compute workloads that can be stopped and resumed from checkpoints. The primary goal is reducing Compute Engine costs by 60-91%.",
    question: "Which VM purchasing model should the cloud architect specify for the compute cluster?",
    options: [
      { id: 'A', text: "Sole-Tenant Nodes" },
      { id: 'B', text: "Committed Use Contracts (CUDs) for 3 years" },
      { id: 'C', text: "Spot VMs" },
      { id: 'D', text: "Standard On-Demand VMs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Spot VMs are Compute Engine instances running on spare Google capacity available at a 60% to 91% discount compared to on-demand pricing. Google can preempt Spot VMs with a 30-second notice, making them ideal for fault-tolerant, checkpointed batch jobs.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/spot",
    tags: ["Compute Engine", "Spot VMs", "Cost Optimization"]
  },
  {
    id: "gcp-pca-36",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Compute Engine Committed Use Discounts (CUDs): Resource vs Spend-Based",
    scenario: "An enterprise organization runs a baseline fleet of 500 Compute Engine vCPUs continuously 24/7 across various VM machine families. The team wants predictable discounts over a 3-year term.",
    question: "Which discount mechanism provides the highest cost savings for steady-state predictable workloads?",
    options: [
      { id: 'A', text: "Free Tier credits" },
      { id: 'B', text: "Sustained Use Discounts (SUDs)" },
      { id: 'C', text: "Committed Use Discounts (CUDs) with a 3-year commitment" },
      { id: 'D', text: "Spot VMs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Committed Use Discounts (CUDs) offer discounts (up to 57% for standard instances and up to 70% for memory-optimized) in exchange for committing to a minimum level of resource usage (vCPUs, RAM, GPUs) or dollar spend for a 1-year or 3-year period.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts",
    tags: ["Compute Engine", "CUDs", "FinOps"]
  },
  {
    id: "gcp-pca-37",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Sustained Use Discounts (SUDs) Automated Cost Savings",
    scenario: "A developer runs a Compute Engine VM continuously for an entire month without purchasing any upfront commitments.",
    question: "How does Google Cloud reward sustained VM usage automatically?",
    options: [
      { id: 'A', text: "By automatically upgrading the VM to a higher CPU tier for free" },
      { id: 'B', text: "Through automated Sustained Use Discounts (SUDs) that discount hourly compute rates incrementally after a VM runs for more than 25% of a billing month" },
      { id: 'C', text: "By giving free Cloud Storage credits" },
      { id: 'D', text: "Google Cloud does not offer automated discounts without contracts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sustained Use Discounts (SUDs) are automatic discounts applied to Compute Engine instances (N1, N2, etc.) that run for a significant portion of the billing month. If an instance runs for more than 25% of the month, Google automatically reduces the hourly rate up to 30%.",
    referenceUrl: "https://cloud.google.com/compute/docs/sustained-use-discounts",
    tags: ["Compute Engine", "SUDs", "FinOps"]
  },
  {
    id: "gcp-pca-38",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Network Service Tiers: Premium Tier vs Standard Tier",
    scenario: "A global SaaS provider serves international users who require minimum latency and zero packet loss. Cost is a secondary consideration.",
    question: "Which Google Cloud Network Service Tier routes user traffic into Google's private global fiber backbone at the edge PoP closest to the user?",
    options: [
      { id: 'A', text: "Direct Peering Tier" },
      { id: 'B', text: "Premium Tier" },
      { id: 'C', text: "Carrier Peering Tier" },
      { id: 'D', text: "Standard Tier" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud offers two network service tiers: `Premium Tier` (default, enters Google's global fiber backbone at the edge nearest to the user, optimizing latency and reliability) and `Standard Tier` (traffic travels over the public transit internet to the destination region, lower cost).",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["Networking", "Network Service Tiers", "Latency"]
  },
  {
    id: "gcp-pca-39",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud CDN Edge Caching and Cache Invalidation",
    scenario: "A global media streaming service hosts video thumbnails in Cloud Storage. The site experiences high global egress bandwidth costs and latency.",
    question: "Which Google Cloud service caches static assets across Google's worldwide Edge Points of Presence (PoPs)?",
    options: [
      { id: 'A', text: "Cloud CDN (integrated with Global Application Load Balancer)" },
      { id: 'B', text: "Cloud Armor" },
      { id: 'C', text: "Cloud Storage Multi-Region alone" },
      { id: 'D', text: "Cloud Endpoints" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud CDN leverages Google's global points of presence to cache HTTP(S) content close to users, drastically reducing network latency, offloading origin servers, and slashing egress bandwidth costs.",
    referenceUrl: "https://cloud.google.com/cdn/docs/overview",
    tags: ["Cloud CDN", "Caching", "Edge"]
  },
  {
    id: "gcp-pca-40",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Multi-Cluster Ingress (MCI) for Global Resilience",
    scenario: "An enterprise deploys identical GKE clusters in `us-east1` and `europe-west1`. The company needs a single global HTTP(S) load balancer to direct traffic to the closest healthy cluster with automatic cross-region failover.",
    question: "Which GKE feature provisions and manages a global load balancer spanning multiple Kubernetes clusters?",
    options: [
      { id: 'A', text: "External DNS with round-robin records" },
      { id: 'B', text: "Cloud Endpoints" },
      { id: 'C', text: "Multi-Cluster Ingress (MCI)" },
      { id: 'D', text: "Standard Ingress controller per cluster" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-Cluster Ingress (MCI) is a cloud-hosted controller for Google Kubernetes Engine that deploys a Global External HTTP(S) Load Balancer across multiple GKE clusters in different regions, providing geographic routing and transparent multi-region failover.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/multi-cluster-ingress",
    tags: ["GKE", "Multi-Cluster Ingress", "Global Routing"]
  },
  {
    id: "gcp-pca-41",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud SQL Read Replicas vs Cross-Region Read Replicas",
    scenario: "A reporting application running in Europe needs to execute intensive read queries against a primary PostgreSQL database located in `us-central1` without impacting write transaction performance.",
    question: "Which Cloud SQL architecture satisfies both read offloading and low-latency European query performance?",
    options: [
      { id: 'A', text: "Deploy a Cross-Region Read Replica in the European region (e.g. europe-west1)" },
      { id: 'B', text: "Deploy a standby instance in another zone in us-central1" },
      { id: 'C', text: "Export data nightly using mysqldump" },
      { id: 'D', text: "Increase CPU on the primary US database" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud SQL supports `Cross-Region Read Replicas`. Replicating asynchronously to a secondary region offloads analytical queries from the primary instance and provides localized low-latency read access to regional users, while also serving as a regional disaster recovery target.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/replication/cross-region-replicas",
    tags: ["Cloud SQL", "Read Replicas", "Cross-Region"]
  },
  {
    id: "gcp-pca-42",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Dataproc for Managed Hadoop and Spark Clusters",
    scenario: "A data science team needs to migrate an existing on-premises Apache Hadoop and Spark processing pipeline to Google Cloud with minimal code modification.",
    question: "Which managed Google Cloud service provides fast-starting Hadoop and Spark clusters?",
    options: [
      { id: 'A', text: "Cloud Dataproc" },
      { id: 'B', text: "Cloud BigQuery" },
      { id: 'C', text: "Cloud Composer" },
      { id: 'D', text: "Cloud Dataflow" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Dataproc is a fully managed service for running Apache Spark, Apache Hadoop, Presto, and open-source big data ecosystems. Clusters spin up in 90 seconds, can scale dynamically, and integrate with Cloud Storage using the Cloud Storage connector.",
    referenceUrl: "https://cloud.google.com/dataproc/docs/concepts/overview",
    tags: ["Dataproc", "Spark", "Hadoop"]
  },
  {
    id: "gcp-pca-43",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Leader Region and Read-Write Split Optimization",
    scenario: "A global Cloud Spanner multi-region instance has its designated leader region in `nam-eur-asia1`. Applications in Europe experience higher write latency than applications in North America.",
    question: "Why does this occur, and how does Cloud Spanner multi-region leader architecture explain it?",
    options: [
      { id: 'A', text: "Europe is disconnected from Google's private network" },
      { id: 'B', text: "Cloud Spanner does not support writes outside North America" },
      { id: 'C', text: "All Cloud Spanner write transactions must achieve consensus coordinated by the Paxos leader, which resides in the configured leader region" },
      { id: 'D', text: "Read transactions in Europe are blocked by firewalls" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a multi-region Cloud Spanner instance, one region is designated as the `Leader Region` where Paxos quorum leaders for database splits reside. Write transactions require quorum round-trips to the leader, so clients closer to the leader region experience lower write latency.",
    referenceUrl: "https://cloud.google.com/spanner/docs/multi-region-overview#leader-region",
    tags: ["Spanner", "Leader Region", "Paxos"]
  },
  {
    id: "gcp-pca-44",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Autoclass for Automated Cost Tiering",
    scenario: "A company stores millions of customer documents in Cloud Storage with unpredictable access patterns. The team wants objects to transition between Hot, Cold, and Archive tiers automatically without writing custom lifecycle rules.",
    question: "Which Cloud Storage feature automatically shifts objects across storage classes based on access history?",
    options: [
      { id: 'A', text: "Cloud Storage Autoclass" },
      { id: 'B', text: "Object Lifecycle Management rules alone" },
      { id: 'C', text: "Cloud Storage Dual-Region" },
      { id: 'D', text: "Cloud Storage FUSE" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Storage Autoclass` automatically transitions objects to cooler storage classes (Nearline, Coldline, Archive) if they are not accessed, and automatically transitions them back to Standard storage upon access, eliminating retrieval fees and manual lifecycle scripting.",
    referenceUrl: "https://cloud.google.com/storage/docs/autoclass",
    tags: ["Cloud Storage", "Autoclass", "Cost Management"]
  },
  {
    id: "gcp-pca-45",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Compute Engine Sole-Tenant Nodes for Licensing and Compliance",
    scenario: "A corporate security and licensing audit requires an enterprise to run Windows Server VMs on dedicated physical hardware that is not shared with any other Google Cloud customer.",
    question: "Which Compute Engine feature provisions dedicated physical servers reserved exclusively for a single organization?",
    options: [
      { id: 'A', text: "Shielded VMs" },
      { id: 'B', text: "Confidential VMs" },
      { id: 'C', text: "Sole-Tenant Nodes" },
      { id: 'D', text: "Standard N2 VM instances" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Sole-Tenant Nodes are physical Compute Engine servers dedicated exclusively to hosting VM instances belonging to a single customer. They help fulfill strict regulatory compliance requirements and allow reuse of existing on-premises software licenses (BYOL) tied to physical cores.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    tags: ["Compute Engine", "Sole-Tenant Nodes", "Compliance"]
  },
  {
    id: "gcp-pca-46",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Confidential Computing (Confidential VMs) Memory Encryption",
    scenario: "A healthcare organization processes highly confidential patient medical records in Google Cloud. The data must be encrypted not only at rest and in transit, but also while in memory during CPU processing.",
    question: "Which Google Cloud compute feature provides hardware-based memory encryption using AMD SEV?",
    options: [
      { id: 'A', text: "VPC Service Controls" },
      { id: 'B', text: "Confidential VMs (Confidential Computing)" },
      { id: 'C', text: "Cloud KMS Customer-Managed Encryption Keys" },
      { id: 'D', text: "Shielded VMs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud `Confidential VMs` leverage AMD Secure Encrypted Virtualization (SEV) to encrypt data in-use in RAM using hardware-generated keys that Google cannot access, preventing unauthorized access from hypervisors or cloud operators.",
    referenceUrl: "https://cloud.google.com/confidential-computing/confidential-vm/docs/confidential-vm-overview",
    tags: ["Compute Engine", "Confidential VMs", "Memory Encryption"]
  },
  {
    id: "gcp-pca-47",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shielded VMs: Secure Boot, vTPM, and Integrity Monitoring",
    scenario: "An enterprise security mandate requires that Compute Engine instances must prevent boot-level and kernel-level malware (rootkits) from modifying the guest operating system boot sequence.",
    question: "Which Compute Engine security capability verifies boot integrity using Secure Boot and virtual Trusted Platform Module (vTPM)?",
    options: [
      { id: 'A', text: "Shielded VMs" },
      { id: 'B', text: "Confidential VMs" },
      { id: 'C', text: "Sole-Tenant Nodes" },
      { id: 'D', text: "OS Login" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Shielded VMs offer verifiable system integrity for Compute Engine instances. Features include `Secure Boot` (verifying cryptographic signatures of boot loaders and drivers), `vTPM` (virtual Trusted Platform Module for measured boot), and `Integrity Monitoring` alerting on baseline deviations.",
    referenceUrl: "https://cloud.google.com/compute/shielded-vm/docs/shielded-vm",
    tags: ["Compute Engine", "Shielded VMs", "Security"]
  },
  {
    id: "gcp-pca-48",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Google Cloud Private Google Access for Private Subnets",
    scenario: "Compute Engine VMs in a private subnet have no public external IP addresses and no NAT gateway. The VMs need to call the Cloud Storage and BigQuery APIs directly.",
    question: "Which VPC subnet setting allows private VMs to communicate with Google APIs and services using internal Google IP routing?",
    options: [
      { id: 'A', text: "Enable Private Google Access on the subnet" },
      { id: 'B', text: "Enable Cloud NAT on the VPC" },
      { id: 'C', text: "Create a static default route to 0.0.0.0/0" },
      { id: 'D', text: "Assign ephemeral public IPs to VMs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Private Google Access` allows VM instances in a subnet that have only private internal IP addresses to reach the external IP addresses of Google APIs and services (e.g. `storage.googleapis.com`, `bigquery.googleapis.com`) directly over Google's internal network without traversing the public internet.",
    referenceUrl: "https://cloud.google.com/vpc/docs/private-google-access",
    tags: ["VPC", "Private Google Access", "Networking"]
  },
  {
    id: "gcp-pca-49",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Private Service Connect (PSC) for Private Multi-Tenant Services",
    scenario: "An enterprise producer team deploys an internal API behind an internal load balancer in VPC A. A consumer team in VPC B (different organization) needs to consume this API privately without VPC peering CIDR overlap constraints.",
    question: "Which Google Cloud networking technology provides private endpoint connectivity to published services without VPC peering?",
    options: [
      { id: 'A', text: "Private Service Connect (PSC)" },
      { id: 'B', text: "VPC Network Peering" },
      { id: 'C', text: "Cloud VPN" },
      { id: 'D', text: "Shared VPC" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private Service Connect (PSC) allows consumers to access managed services (both Google services and third-party/internal producer services) privately inside their own VPC using a private IP address (endpoint) without requiring VPC Peering or complex CIDR planning.",
    referenceUrl: "https://cloud.google.com/vpc/docs/private-service-connect",
    tags: ["VPC", "Private Service Connect", "Microservices"]
  },
  {
    id: "gcp-pca-50",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud DNS Private Zones and Split-Horizon DNS",
    scenario: "An enterprise maintains an internal microservice domain `api.corp.internal`. Internal Compute Engine instances must resolve this domain to private IP `10.10.1.50`, while external internet users must not be able to resolve it.",
    question: "Which Google Cloud service provides private domain name resolution restricted to authorized VPC networks?",
    options: [
      { id: 'A', text: "Configuring /etc/hosts on every VM manually" },
      { id: 'B', text: "Cloud Domains" },
      { id: 'C', text: "Cloud DNS Private Zones" },
      { id: 'D', text: "Cloud DNS Public Zones" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud DNS `Private Zones` allow organizations to manage custom DNS records that are resolvable only from designated VPC networks. Queries originating from authorized VPCs resolve private IP addresses securely without exposing internal topology to the public internet.",
    referenceUrl: "https://cloud.google.com/dns/docs/zones/private-zones",
    tags: ["Cloud DNS", "Private Zones", "Networking"]
  }
];

export default GCP_PCA_QUESTIONS_2;
