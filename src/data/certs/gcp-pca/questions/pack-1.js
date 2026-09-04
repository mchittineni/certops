export const GCP_PCA_QUESTIONS_1 = [
  {
    id: "gcp-pca-1",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner vs Cloud SQL Global Multi-Region Consistency",
    scenario: "A global financial payment processor requires a relational database with ACID transactions, horizontal scale-out write capabilities across North America, Europe, and Asia, and 99.999% availability.",
    question: "Which Google Cloud managed database service should the cloud architect choose?",
    options: [
      { id: 'A', text: "Cloud Spanner (multi-region instance configuration)" },
      { id: 'B', text: "Cloud Bigtable with multi-cluster routing" },
      { id: 'C', text: "Cloud SQL for PostgreSQL with read replicas" },
      { id: 'D', text: "Firestore in Datastore mode" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Spanner is a fully managed, globally distributed, horizontally scalable relational database that provides external consistency and ACID transactions across multiple regions with up to 99.999% availability. Cloud SQL is limited to a single primary write region.",
    referenceUrl: "https://cloud.google.com/spanner/docs/instance-configurations#multi-region-configurations",
    tags: ["Spanner", "Relational", "Global Scale"]
  },
  {
    id: "gcp-pca-2",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Bigtable Time-Series Telemetry Sizing & Row Key Design",
    scenario: "A connected smart-grid utility collects 500,000 smart meter readings per second. Queries scan readings for a specific utility meter over a 24-hour time range.",
    question: "Which database engine and row-key design pattern should the architect recommend?",
    options: [
      { id: 'A', text: "Cloud Bigtable with row key format: timestamp#meterId" },
      { id: 'B', text: "Firestore with timestamp as document ID" },
      { id: 'C', text: "Cloud Bigtable with row key format: meterId#reversedTimestamp" },
      { id: 'D', text: "Cloud SQL for MySQL with autoincrement integer primary key" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Bigtable is Google's NoSQL wide-column store designed for petabyte-scale low-latency time-series workloads. Structuring row keys with `meterId#reversedTimestamp` groups all readings for a meter contiguously while avoiding sequential timestamp hot-spotting on write tablets.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/schema-design-time-series",
    tags: ["Bigtable", "Time-Series", "Row Key Design"]
  },
  {
    id: "gcp-pca-3",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Autopilot vs GKE Standard Architecture Selection",
    scenario: "An enterprise enterprise architect wants to deploy containerized microservices to Google Kubernetes Engine (GKE) while minimizing cluster node provisioning, OS patching, and control plane management overhead.",
    question: "Which GKE operational mode is fully managed by Google according to Kubernetes best practices?",
    options: [
      { id: 'A', text: "GKE Standard with manual node pools" },
      { id: 'B', text: "Compute Engine Managed Instance Groups" },
      { id: 'C', text: "Cloud Run for Anthos alone" },
      { id: 'D', text: "GKE Autopilot" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GKE Autopilot is a fully managed mode of operation in which Google provisions, configures, and manages all cluster infrastructure, including node pools, OS hardening, autoscaling, and security baselines, charging per pod resource requests.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["GKE", "Autopilot", "Containers"]
  },
  {
    id: "gcp-pca-4",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Global External Application Load Balancer Architecture",
    scenario: "A global gaming website serves players across 5 continents from GKE clusters in `us-central1`, `europe-west1`, and `asia-east1`. The platform requires a single Anycast IP address with SSL offloading at the Google edge.",
    question: "Which Google Cloud load balancing solution provides Anycast edge routing and Layer 7 HTTP(S) path-based routing?",
    options: [
      { id: 'A', text: "Regional External Application Load Balancer" },
      { id: 'B', text: "Internal Passthrough Network Load Balancer" },
      { id: 'C', text: "Global External Application Load Balancer (HTTP/S)" },
      { id: 'D', text: "External Network Load Balancer (Proxy)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Global External Application Load Balancer uses Google's global Anycast IP infrastructure to route user traffic to the nearest Google Edge Point of Presence (PoP), terminating TLS and routing HTTP(S) traffic over Google's private backbone to backend backends.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Networking", "Load Balancing", "Anycast"]
  },
  {
    id: "gcp-pca-5",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Hybrid Connectivity: Dedicated Interconnect vs Partner Interconnect vs Cloud VPN",
    scenario: "An enterprise data center in Chicago requires a dedicated, private, 100 Gbps network pipe to Google Cloud that does not traverse the public internet.",
    question: "Which Google Cloud hybrid connectivity service provides physical co-location cross-connects at 10 Gbps or 100 Gbps circuits?",
    options: [
      { id: 'A', text: "Cloud Router with BGP alone" },
      { id: 'B', text: "Dedicated Interconnect" },
      { id: 'C', text: "Partner Interconnect" },
      { id: 'D', text: "HA VPN over internet" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dedicated Interconnect provides physical direct connections between an enterprise on-premises network and Google's network via 10 Gbps or 100 Gbps circuits at designated Google colocation facilities without transiting the public internet.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/dedicated-overview",
    tags: ["Networking", "Dedicated Interconnect", "Hybrid Connectivity"]
  },
  {
    id: "gcp-pca-6",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Shared VPC Network Topology for Enterprise Governance",
    scenario: "An enterprise organization operates 20 distinct GCP projects for development, testing, and production microservice teams. The network security team must centrally manage subnets, routes, and firewalls in a single host project.",
    question: "Which GCP networking architecture enables centralized subnet administration across multiple service projects?",
    options: [
      { id: 'A', text: "VPC Network Peering mesh across 20 projects" },
      { id: 'B', text: "Cloud VPN tunnels between every project" },
      { id: 'C', text: "Serverless VPC Access connectors" },
      { id: 'D', text: "Shared VPC (with a central Host Project and connected Service Projects)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Shared VPC allows an organization to connect resources from multiple service projects to subnets in a centralized Host Project. Network administrators retain centralized control over subnets, firewall rules, and routes while application teams manage their workloads independently.",
    referenceUrl: "https://cloud.google.com/vpc/docs/shared-vpc",
    tags: ["VPC", "Shared VPC", "Governance"]
  },
  {
    id: "gcp-pca-7",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Storage Classes: Standard vs Nearline vs Coldline vs Archive",
    scenario: "A regulatory compliance requirement mandates that tax invoice PDFs must be stored for 7 years. The documents are accessed less than once a year and retrieval latency of a few milliseconds is required upon auditor request.",
    question: "Which Cloud Storage class provides the lowest storage cost with immediate millisecond retrieval times?",
    options: [
      { id: 'A', text: "Coldline Storage" },
      { id: 'B', text: "Nearline Storage" },
      { id: 'C', text: "Standard Storage" },
      { id: 'D', text: "Archive Storage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage `Archive Storage` offers the lowest storage cost for data accessed less than once a year (365-day minimum storage duration). Unlike AWS Glacier or Azure Archive, Cloud Storage Archive provides sub-second millisecond access latency with no rehydration wait time.",
    referenceUrl: "https://cloud.google.com/storage/docs/storage-classes#archive",
    tags: ["Cloud Storage", "Archive Storage", "Cost Optimization"]
  },
  {
    id: "gcp-pca-8",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Compute Engine Managed Instance Groups (MIG) Autoscaling Metrics",
    scenario: "A video transcoding pipeline deployed on Compute Engine Managed Instance Groups (MIG) experiences heavy processing backlogs. CPU utilization remains low because the bottleneck is pending jobs in a Cloud Pub/Sub queue.",
    question: "How should the architect configure the autoscaler on the Managed Instance Group?",
    options: [
      { id: 'A', text: "Autoscale based on HTTP load balancing serving capacity" },
      { id: 'B', text: "Configure autoscaling based on a Cloud Monitoring metric (Pub/Sub subscription backlog depth per instance)" },
      { id: 'C', text: "Set a fixed static instance count" },
      { id: 'D', text: "Autoscale based on average CPU utilization target 60%" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Compute Engine Managed Instance Groups support autoscaling based on custom Cloud Monitoring metrics. By calculating the number of unprocessed messages in Cloud Pub/Sub divided by the number of instances, the MIG scales instances based on queue depth rather than CPU.",
    referenceUrl: "https://cloud.google.com/compute/docs/autoscaler/scaling-cloud-monitoring-metrics",
    tags: ["Compute Engine", "MIG", "Autoscaling"]
  },
  {
    id: "gcp-pca-9",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Architecture: Slots, Storage, and Colossus Decoupling",
    scenario: "An enterprise data architect is evaluating the internal storage and compute engine of BigQuery for an enterprise analytical data warehouse.",
    question: "How does BigQuery's decoupled storage and compute architecture enable petabyte-scale queries with instant elasticity?",
    options: [
      { id: 'A', text: "BigQuery executes all queries inside Cloud Functions serverless containers" },
      { id: 'B', text: "BigQuery requires provisioning fixed SSD persistent disks for each table" },
      { id: 'C', text: "BigQuery stores all table data in local VM RAM disks attached to Compute Engine" },
      { id: 'D', text: "BigQuery separates compute (dynamic Dremel query engine with worker slots) from storage (Colossus distributed filesystem) over Jupiter multi-terabit network fabric" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery's architecture completely decouples storage (distributed Colossus filesystem storing capacitor columnar data) from compute (Dremel execution engine dynamically allocating query slots) linked by Google's multi-terabit Jupiter petabit network.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/architecture",
    tags: ["BigQuery", "Architecture", "Dremel"]
  },
  {
    id: "gcp-pca-10",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Run vs GKE vs Compute Engine Selection Matrix",
    scenario: "A startup team develops a stateless REST API packaged in a standard Docker container. Traffic is zero at night and spikes to 2,000 requests per second during lunch hours. The team wants zero cluster infrastructure management.",
    question: "Which Google Cloud computing service should the architect recommend?",
    options: [
      { id: 'A', text: "Cloud Run" },
      { id: 'B', text: "Compute Engine with unmanaged instance groups" },
      { id: 'C', text: "Google Kubernetes Engine Standard with manual scaling" },
      { id: 'D', text: "Dataproc" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Run is a fully managed serverless compute platform that runs stateless containers directly. It scales dynamically from zero to thousands of instances in seconds in response to incoming requests, charging only for resources consumed during request processing.",
    referenceUrl: "https://cloud.google.com/run/docs/overview/what-is-cloud-run",
    tags: ["Cloud Run", "Serverless", "Containers"]
  },
  {
    id: "gcp-pca-11",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud SQL High Availability (HA) Regional Failover Mechanics",
    scenario: "A mission-critical MySQL database on Cloud SQL must tolerate the complete loss of an entire availability zone without data loss (RPO = 0).",
    question: "How does Cloud SQL High Availability (HA) achieve automated regional failover?",
    options: [
      { id: 'A', text: "By deploying a primary instance and a standby instance in separate zones with synchronous regional persistent disk replication" },
      { id: 'B', text: "By running asynchronous read replicas in different continents" },
      { id: 'C', text: "By taking nightly backups to Cloud Storage" },
      { id: 'D', text: "By deploying an unmanaged MySQL database on a single Compute Engine VM" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Cloud SQL High Availability (HA) configuration provisions a primary instance in one zone and a standby instance in a different zone within the same region. All writes are synchronously replicated across zones using regional persistent disks. If the primary zone fails, Cloud SQL initiates automatic failover in 2-3 minutes.",
    referenceUrl: "https://cloud.google.com/sql/docs/mysql/high-availability",
    tags: ["Cloud SQL", "High Availability", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-12",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Firestore in Native Mode vs Datastore Mode",
    scenario: "A mobile social media app requires offline data synchronization, real-time snapshot listeners for live chat, and ACID document transactions across mobile devices.",
    question: "Which Firestore operational mode provides native mobile client SDKs with real-time listeners?",
    options: [
      { id: 'A', text: "Cloud Spanner" },
      { id: 'B', text: "Firestore in Native Mode" },
      { id: 'C', text: "Firestore in Datastore Mode" },
      { id: 'D', text: "Cloud Bigtable" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Firestore in Native Mode` is optimized for web and mobile applications, offering real-time update listeners, offline data synchronization via client SDKs, and subcollection structures. `Datastore Mode` is backward-compatible with App Engine Datastore for server-side workloads.",
    referenceUrl: "https://cloud.google.com/firestore/docs/firestore-or-datastore",
    tags: ["Firestore", "Native Mode", "Mobile"]
  },
  {
    id: "gcp-pca-13",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Google Cloud Organization Resource Hierarchy Best Practices",
    scenario: "A multinational corporation sets up their Google Cloud resource governance. The architecture must enforce security policies, IAM roles, and budget controls across 4 subsidiaries.",
    question: "What is the recommended top-to-bottom resource hierarchy in Google Cloud?",
    options: [
      { id: 'A', text: "Organization -> Folders -> Projects -> Resources" },
      { id: 'B', text: "Organization -> Projects -> Folders -> Resources" },
      { id: 'C', text: "Projects -> Folders -> Organization -> Resources" },
      { id: 'D', text: "Folders -> Organization -> Projects -> Resources" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud's resource hierarchy establishes an inheritance tree: `Organization` node (tied to Google Workspace/Cloud Identity) at the root, followed by `Folders` (grouping departments or environments), `Projects` (the basic resource container and billing unit), and `Resources` (VMs, buckets, tables).",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Governance", "Resource Hierarchy", "IAM"]
  },
  {
    id: "gcp-pca-14",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Pub/Sub vs Pub/Sub Lite Architecture",
    scenario: "A high-throughput telemetry pipeline processes 1,000,000 messages per second. Cost optimization is the primary goal, and the operations team is willing to manage partition capacity pre-allocation in exchange for significant cost savings.",
    question: "Which Pub/Sub offering provides partition-based, pre-provisioned throughput at lower cost?",
    options: [
      { id: 'A', text: "Pub/Sub Lite" },
      { id: 'B', text: "Cloud Pub/Sub (Standard)" },
      { id: 'C', text: "Cloud Tasks" },
      { id: 'D', text: "Cloud Memorystore for Redis" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Pub/Sub Lite` is a partition-based, zonal or regional messaging service designed for predictable, high-volume streaming workloads where users pre-allocate capacity (MB/s per partition) for up to 80% cost savings compared to the fully automated, global Cloud Pub/Sub service.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/choosing-pubsub-or-lite",
    tags: ["Pub/Sub", "Pub/Sub Lite", "Cost Optimization"]
  },
  {
    id: "gcp-pca-15",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Interconnect HA SLA: 99.99% Availability Architecture",
    scenario: "A critical banking system connects on-premises data centers to Google Cloud via Cloud Interconnect. The business requires a 99.99% availability SLA from Google.",
    question: "Which topology is required to achieve the 99.99% SLA for Cloud Interconnect?",
    options: [
      { id: 'A', text: "Four interconnects across two distinct colocation facilities (metropolitan areas) with redundant Cloud Routers in two GCP regions" },
      { id: 'B', text: "Two interconnects in a single colocation facility with one Cloud Router" },
      { id: 'C', text: "A single Dedicated Interconnect paired with an IPSec VPN backup" },
      { id: 'D', text: "A single 100 Gbps Dedicated Interconnect circuit" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To qualify for Google's 99.99% SLA for Cloud Interconnect, the architecture requires 4 interconnect circuits provisioned across 2 distinct edge facilities (different metros), connected to 2 distinct Cloud Routers in 2 different GCP regions (dual-region or multi-region topology).",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/tutorials/sla-9999",
    tags: ["Networking", "Cloud Interconnect", "High Availability"]
  },
  {
    id: "gcp-pca-16",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Dual-Region vs Multi-Region Buckets",
    scenario: "A media distribution company in Europe needs high-availability object storage that survives an entire region outage with zero recovery time, but data sovereignty laws prohibit storing data outside Germany and Belgium.",
    question: "Which Cloud Storage location type meets both high availability and strict sovereignty criteria?",
    options: [
      { id: 'A', text: "Single-Region bucket in europe-west3 with nightly sync" },
      { id: 'B', text: "Dual-Region bucket pairing two specific European regions (e.g. europe-west3 and europe-west1)" },
      { id: 'C', text: "Cloud Storage Archive tier" },
      { id: 'D', text: "Multi-Region EU bucket" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage `Dual-Region` allows architects to pair two specific regions within the same continent (e.g. Frankfurt and Belgium). It provides automated replication and instant failover across both regions while complying with jurisdictional data residency requirements that forbid generic multi-region placement.",
    referenceUrl: "https://cloud.google.com/storage/docs/locations#dual-regions",
    tags: ["Cloud Storage", "Dual-Region", "Data Sovereignty"]
  },
  {
    id: "gcp-pca-17",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Google Cloud Dataflow: Unified Batch and Streaming with Apache Beam",
    scenario: "An enterprise data analytics platform ingests financial trade transactions in real time via Cloud Pub/Sub and processes historical trade batches from Cloud Storage using the exact same processing logic.",
    question: "Which fully managed Google Cloud service executes unified batch and streaming pipelines using the Apache Beam SDK?",
    options: [
      { id: 'A', text: "Cloud Dataprep" },
      { id: 'B', text: "Cloud Dataproc" },
      { id: 'C', text: "Cloud Bigquery ML" },
      { id: 'D', text: "Cloud Dataflow" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Dataflow is a fully managed, serverless stream and batch data processing service based on Apache Beam. It automatically provisions compute resources, autoscales worker VMs, and provides exactly-once processing semantics for both unbounded streaming and bounded batch data.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Dataflow", "Apache Beam", "Streaming"]
  },
  {
    id: "gcp-pca-18",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Compute Engine Persistent Disk Types: Standard vs Balanced vs SSD vs Extreme",
    scenario: "A high-transaction database on Compute Engine requires 60,000 IOPS and 800 MB/s throughput with consistent sub-millisecond block storage latency.",
    question: "Which Compute Engine Persistent Disk type is optimized for extreme custom IOPS and throughput provisioning?",
    options: [
      { id: 'A', text: "Extreme Persistent Disk (pd-extreme)" },
      { id: 'B', text: "Standard Persistent Disk (pd-standard)" },
      { id: 'C', text: "Balanced Persistent Disk (pd-balanced)" },
      { id: 'D', text: "Local SSD alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Extreme Persistent Disk` (pd-extreme) provides configurable, high-performance block storage designed for high-end database workloads, allowing developers to provision IOPS independently of disk capacity up to 120,000 IOPS on supported VM types.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks#extreme-pd",
    tags: ["Compute Engine", "Persistent Disks", "Storage"]
  },
  {
    id: "gcp-pca-19",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Local SSDs vs Persistent Disks Persistence and Performance",
    scenario: "A machine learning training job on Compute Engine needs scratch cache storage with over 2,000,000 IOPS and sub-100 microsecond read latency. The data does not need to persist when the VM stops.",
    question: "Which storage option provides ultra-low latency NVMe scratch space physically attached to the VM host server?",
    options: [
      { id: 'A', text: "SSD Persistent Disk (pd-ssd)" },
      { id: 'B', text: "Local SSD (nvme)" },
      { id: 'C', text: "Cloud Storage FUSE" },
      { id: 'D', text: "Extreme Persistent Disk (pd-extreme)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Local SSDs are physically attached to the host server running the VM instance, delivering millions of IOPS and sub-millisecond latency. Unlike Persistent Disks, Local SSD data is ephemeral and does not survive VM termination or maintenance events without live migration.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/local-ssd",
    tags: ["Compute Engine", "Local SSD", "NVMe"]
  },
  {
    id: "gcp-pca-20",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud NAT for Private Compute Engine and GKE Outbound Internet",
    scenario: "A fleet of Compute Engine VMs and GKE nodes reside in private subnets without public IP addresses. The instances must download OS security patches from public repositories on the internet without exposing inbound access.",
    question: "Which Google Cloud managed network service provides outbound-only internet connectivity for private instances?",
    options: [
      { id: 'A', text: "Cloud Armor" },
      { id: 'B', text: "Cloud Load Balancing" },
      { id: 'C', text: "Cloud NAT (Network Address Translation)" },
      { id: 'D', text: "Cloud Router alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud NAT is a software-defined, managed network service that allows private VM instances without external IP addresses to access the public internet for outbound traffic, preventing external internet hosts from initiating direct inbound connections.",
    referenceUrl: "https://cloud.google.com/nat/docs/overview",
    tags: ["Networking", "Cloud NAT", "Security"]
  },
  {
    id: "gcp-pca-21",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "VPC Network Peering vs Cloud VPN for Cross-Project Communication",
    scenario: "Two companies merge and need to connect their Google Cloud VPC networks residing in different organizations. The connection requires maximum network throughput, lowest latency, zero encryption gateway bottlenecks, and internal RFC 1918 communication.",
    question: "Which networking technology connects two VPCs using Google's internal software-defined network fabric?",
    options: [
      { id: 'A', text: "VPC Network Peering" },
      { id: 'B', text: "Cloud VPN over public IP" },
      { id: 'C', text: "Dedicated Interconnect" },
      { id: 'D', text: "Cloud NAT with external IPs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Network Peering connects two VPC networks (even across different organizations) directly over Google's internal network backbone. Traffic stays completely internal, provides line-rate VM-to-VM bandwidth with no bandwidth throttle or IPSec overhead, and uses private IP addresses.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering",
    tags: ["VPC", "Peering", "High Bandwidth"]
  },
  {
    id: "gcp-pca-22",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "VPC Network Peering Transitivity Limitation",
    scenario: "VPC A peers with VPC B, and VPC B peers with VPC C. Instances in VPC A attempt to ping instances in VPC C using internal IP addresses.",
    question: "Why does the connection fail, and how does Google Cloud handle transitive peering?",
    options: [
      { id: 'A', text: "VPC Peering requires all networks to have identical CIDR ranges" },
      { id: 'B', text: "Transitive peering is allowed only on weekends" },
      { id: 'C', text: "VPC Network Peering requires Cloud NAT to route across networks" },
      { id: 'D', text: "VPC Network Peering is non-transitive; traffic from VPC A cannot transit VPC B to reach VPC C" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Google Cloud, VPC Network Peering is strictly non-transitive. Only directly peered networks can communicate. To route traffic from VPC A to VPC C through VPC B, an organization must use Network Connectivity Center, Hub-and-Spoke VPNs, or multi-NIC gateway VMs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc-peering#non-transitivity",
    tags: ["VPC", "Peering", "Non-Transitive"]
  },
  {
    id: "gcp-pca-23",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Armor DDoS and WAF Edge Protection",
    scenario: "An e-commerce retailer on Google Cloud experiences a distributed denial-of-service (L7 DDoS) attack targeting their HTTP checkout endpoints. The architect must block malicious traffic at the edge before it enters the VPC.",
    question: "Which Google Cloud security service integrates with Cloud Load Balancing to provide WAF and L7 DDoS defense?",
    options: [
      { id: 'A', text: "Google Cloud Armor" },
      { id: 'B', text: "VPC Firewall Rules" },
      { id: 'C', text: "Security Command Center alone" },
      { id: 'D', text: "Chronicle SIEM" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Armor integrates directly with Global External Application Load Balancers. It provides Layer 7 filtering, OWASP Top 10 mitigation rules, IP whitelisting/blacklisting, adaptive DDoS protection, and rate-limiting at Google's edge points of presence worldwide.",
    referenceUrl: "https://cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Armor", "WAF", "DDoS Mitigation"]
  },
  {
    id: "gcp-pca-24",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Memorystore for Redis vs Memcached Architecture",
    scenario: "A microservice requires an in-memory key-value cache that supports complex data structures (hashes, sorted sets, lists), pub/sub messaging, and automated high-availability failover across zones.",
    question: "Which Google Cloud managed in-memory caching service should the architect select?",
    options: [
      { id: 'A', text: "Cloud Spanner" },
      { id: 'B', text: "Cloud Memorystore for Redis" },
      { id: 'C', text: "Cloud Memorystore for Memcached" },
      { id: 'D', text: "Cloud Bigtable" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Memorystore for Redis is a fully managed in-memory service supporting Redis data structures, transactions, pub/sub, and Standard Tier automated cross-zone failover with a 99.9% SLA. Memcached is purely multithreaded key-value without persistence or failover.",
    referenceUrl: "https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview",
    tags: ["Memorystore", "Redis", "Caching"]
  },
  {
    id: "gcp-pca-25",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Private Clusters and Authorized Networks",
    scenario: "A financial institution mandates that GKE worker nodes must not have public IP addresses and the Kubernetes API master endpoint must only be accessible from the on-premises corporate network CIDR `192.168.1.0/24`.",
    question: "Which two GKE security configurations enforce these requirements?",
    options: [
      { id: 'A', text: "Disable VPC native routing and enable public NodePools" },
      { id: 'B', text: "Deploy GKE in public mode and attach an external Cloud NAT" },
      { id: 'C', text: "Use Cloud Armor on the GKE kubelet port" },
      { id: 'D', text: "Enable GKE Private Cluster and configure Master Authorized Networks with the corporate CIDR" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `GKE Private Cluster` ensures that worker nodes have only private RFC 1918 IP addresses. Enabling `Master Authorized Networks` restricts access to the Kubernetes control plane (API server) strictly to designated IP address ranges such as on-premises CIDRs.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept",
    tags: ["GKE", "Private Cluster", "Master Authorized Networks"]
  }
];

export default GCP_PCA_QUESTIONS_1;
