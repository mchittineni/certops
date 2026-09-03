export const GCP_ACE_FLASHCARDS_3 = [
  {
    "id": "gcp-ace-fc-51",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Storage Classes: Standard vs. Nearline vs. Coldline vs. Archive",
    "hint": "All have identical millisecond latency \u2014 the trade-off is storage vs. retrieval fee.",
    "back": "<strong>Standard</strong>: hot frequent access. <strong>Nearline</strong>: &lt;1/month access (30-day min). <strong>Coldline</strong>: &lt;1/quarter (90-day min). <strong>Archive</strong>: &lt;1/year (365-day min, lowest storage fee). Crucially, <em>all four classes offer identical sub-second latency</em>.",
    "tags": [
      "Cloud Storage",
      "Storage Classes",
      "Cost Optimization"
    ]
  },
  {
    "id": "gcp-ace-fc-52",
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Relational Database Selection: Cloud SQL vs. Cloud Spanner",
    "hint": "Regional single-primary vs. horizontally scalable global multi-region ACID.",
    "back": "<strong>Cloud SQL</strong> is a managed relational database (MySQL, PostgreSQL, SQL Server) suited for regional workloads with up to 64 TB storage. <strong>Cloud Spanner</strong> is a globally distributed database providing horizontal write scalability across multiple regions with 99.999% availability and external consistency.",
    "tags": [
      "Cloud Spanner",
      "Cloud SQL",
      "Databases"
    ]
  },
  {
    "id": "gcp-ace-fc-53",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "High-Throughput NoSQL: Cloud Bigtable vs. Firestore",
    "hint": "Sub-10ms petabyte wide-column throughput vs. mobile document sync.",
    "back": "<strong>Cloud Bigtable</strong> is a wide-column NoSQL store designed for massive write throughput (hundreds of thousands of writes/sec, IoT, time-series) accessed via HBase APIs. <strong>Firestore</strong> is a document database optimized for web/mobile apps, real-time sync, and offline support.",
    "tags": [
      "Cloud Bigtable",
      "Firestore",
      "NoSQL"
    ]
  },
  {
    "id": "gcp-ace-fc-54",
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "VPC Network Modes: Auto Mode vs. Custom Mode",
    "hint": "Predefined subnets in every region vs. controlled IP planning.",
    "back": "<strong>Auto mode VPC</strong> automatically provisions a pre-defined subnet in every GCP region using the <code>10.128.0.0/9</code> range (frequently causing IP overlap with on-premises). <strong>Custom mode VPC</strong> provides empty networks where administrators manually define subnets and CIDR blocks.",
    "tags": [
      "Networking",
      "VPC",
      "Subnets"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "App Engine Standard vs. App Engine Flexible Environment",
    "hint": "Scale-to-zero sandbox vs. customized Docker containers with background threads.",
    "back": "<strong>Standard</strong> runs in pre-configured sandboxed language runtimes, starts in milliseconds, and scales down to zero instances. <strong>Flexible</strong> runs custom Docker containers on Compute Engine VMs, allows SSH access and background threads, but cannot scale instantly to zero and has slower startup times.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-55"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Run Concurrency vs. Cloud Functions Invocations",
    "hint": "Handling multiple requests per container vs. single request per instance.",
    "back": "<strong>Cloud Run</strong> supports concurrency (up to 1,000 concurrent requests per container instance by default 80), reducing cold starts and container count. <strong>Cloud Functions (1st gen)</strong> processes strictly one concurrent request per function instance, spawning new instances for concurrent requests.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-56"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Run: CPU Allocation (Always Allocated vs. Request-Based)",
    "hint": "Background processing between requests vs. pure pay-per-request execution.",
    "back": "<strong>CPU only allocated during requests</strong> shuts off CPU when no requests are being processed, minimizing cost. <strong>CPU always allocated</strong> keeps CPU active for background tasks, thread pools, or async workers even when idle, billed continuously for the instance lifecycle.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-57"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Run: min-instances vs. max-instances",
    "hint": "Eliminating latency cold starts vs. preventing database connection exhaustion.",
    "back": "Setting <code>--min-instances</code> keeps warm instances running continuously to eliminate cold starts for latency-sensitive traffic. Setting <code>--max-instances</code> caps the maximum autoscaling ceiling to prevent overloading downstream relational databases or exceeding API rate limits.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-58"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "GKE Autopilot vs. GKE Standard Architecture",
    "hint": "Hands-off node management and pod-level billing vs. full node pool control.",
    "back": "<strong>Autopilot</strong> manages the entire underlying cluster infrastructure; users pay per pod vCPU/RAM requests, with security hardening and node provisioning automated. <strong>Standard</strong> gives engineers full control over node pools, VM machine types, OS images, SSH access, and DaemonSets, paying for provisioned nodes.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-59"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Spot VMs vs. Preemptible VMs: Key Differences",
    "hint": "The evolution of Google Cloud's 60-91% discounted excess compute capacity.",
    "back": "<strong>Preemptible VMs</strong> have a strict 24-hour maximum lifespan before termination. <strong>Spot VMs</strong> replace preemptible VMs, offering the same 60-91% discount and 30-second preemption notice, but have <strong>no 24-hour runtime limit</strong>, remaining active as long as capacity is available.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-60"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Compute Engine Machine Families: General Purpose vs. Compute-Optimized vs. Memory-Optimized",
    "hint": "E2/N2 vs. C2/C3 vs. M1/M2/M3 workload alignment.",
    "back": "<strong>General Purpose (E2, N2, N2D)</strong> provides balanced price/performance for web servers, databases, and microservices. <strong>Compute-Optimized (C2, C3)</strong> delivers ultra-high single-thread performance for HPC, gaming, and analytics. <strong>Memory-Optimized (M1, M2, M3)</strong> provides massive RAM (up to 12 TB) for SAP HANA and in-memory caches.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-61"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Custom Machine Types in Compute Engine",
    "hint": "Tailoring exact vCPU and RAM ratios without paying for unused tier specs.",
    "back": "Compute Engine allows creating <strong>Custom Machine Types</strong> with arbitrary numbers of vCPUs (up to family limits) and RAM (between 0.9 GB and 6.5 GB per vCPU for N1/N2). This avoids over-provisioning when an application needs high memory but minimal CPU, reducing licensing and compute costs.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-62"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Sole-Tenant Nodes: Isolation and Licensing Governance",
    "hint": "Dedicated physical servers inside Google Cloud data centers.",
    "back": "<strong>Sole-Tenant Nodes</strong> provide physical compute isolation by dedicating an entire physical server hardware rack to your organization. They are essential for: 1) regulatory physical separation compliance; and 2) bringing existing on-premises per-core licenses (BYOL for Windows, SQL Server, RHEL).",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-63"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Storage Classes: Minimum Storage Durations",
    "hint": "30 vs. 90 vs. 365 days early deletion fee thresholds.",
    "back": "<strong>Standard</strong>: No minimum storage duration. <strong>Nearline</strong>: 30-day minimum duration (monthly access). <strong>Coldline</strong>: 90-day minimum duration (quarterly access). <strong>Archive</strong>: 365-day minimum duration (annual compliance archive). Deleting or overwriting objects before the minimum duration incurs an early deletion fee.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-64"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Storage Autoclass Feature",
    "hint": "Automated data tiering without manual lifecycle scripts.",
    "back": "<strong>Autoclass</strong> automatically transitions objects between Standard, Nearline, Coldline, and Archive classes based on each object's access pattern over time. When an object is read, it moves back to Standard automatically, eliminating retrieval fees and operational overhead.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-65"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Storage Retention Policy & Bucket Lock",
    "hint": "WORM (Write Once, Read Many) compliance for financial and legal records.",
    "back": "A <strong>Retention Policy</strong> prevents objects in a bucket from being deleted or overwritten until their age exceeds the retention period. Once <strong>Bucket Lock</strong> is permanently locked, the retention policy can never be removed or shortened, satisfying regulatory SEC Rule 17a-4 compliance.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-66"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Storage Turbo Replication for Dual-Region Buckets",
    "hint": "Predictable cross-region replication SLA for disaster recovery.",
    "back": "<strong>Turbo Replication</strong> guarantees that 100% of newly written or updated objects in a dual-region bucket are asynchronously replicated to the paired region within a <strong>15-minute SLA</strong>, ensuring near-zero RPO for critical financial and healthcare backups.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-67"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud SQL High Availability (HA) Mechanism",
    "hint": "Synchronous cross-zone replication and automatic DNS failover.",
    "back": "Cloud SQL HA provisions a primary instance in one zone and a synchronous standby replica in a second zone within the same region, using regional persistent disk storage. In the event of primary zone failure, Google Cloud automatically switches the DNS endpoint to the standby within 60 seconds with zero data loss.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-68"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud SQL Read Replicas: Use Cases and Limitations",
    "hint": "Offloading read-heavy analytics queries vs. high availability standby.",
    "back": "<strong>Read Replicas</strong> replicate data asynchronously from the primary instance to offload read-heavy traffic across zones or regions. They do <strong>not</strong> provide automatic failover for the primary instance; HA must be configured separately. Read replicas can be promoted to standalone instances if needed.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-69"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud SQL Point-in-Time Recovery (PITR)",
    "hint": "Restoring a relational database to a precise microsecond timestamp.",
    "back": "PITR allows restoring a Cloud SQL database to any specific point in time within the backup retention window (up to 7 days). It requires enabling both <strong>automated daily backups</strong> and <strong>binary logging</strong> (for MySQL) or <strong>write-ahead logging (WAL)</strong> (for PostgreSQL).",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-70"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Spanner: Primary Key Anti-Patterns (Hotspotting)",
    "hint": "Why monotonically increasing sequences break distributed databases.",
    "back": "Using sequential keys (e.g., auto-incrementing integer IDs or timestamps) as Cloud Spanner primary keys routes all new write traffic to a single server split (node), causing severe hotspotting. Best practice is to use <strong>UUID v4</strong>, hashing, or bit-reversed sequential values to evenly distribute writes across nodes.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-71"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Spanner vs. Cloud SQL: Architecture Selection",
    "hint": "Global horizontal scalability and 99.999% SLA vs. regional vertical scaling.",
    "back": "Choose <strong>Cloud SQL</strong> for traditional relational workloads needing MySQL/PostgreSQL compatibility within a single region with up to tens of terabytes. Choose <strong>Cloud Spanner</strong> for mission-critical, horizontally scalable, globally distributed relational data requiring continuous multi-region ACID transactions and 99.999% availability.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-72"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Bigtable: SSD vs. HDD Storage Selection",
    "hint": "Low-latency real-time lookups vs. massive batch data archiving.",
    "back": "Always choose <strong>SSD</strong> for Bigtable in production applications requiring consistent single-digit millisecond latency (e.g., fraud detection, real-time analytics, user profiles). Use <strong>HDD</strong> only for massive cold batch archiving exceeding 10 TB where latency is not critical and cost minimization is paramount.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-73"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Cloud Bigtable Row Key Design Principles",
    "hint": "The single most critical factor determining query performance and throughput.",
    "back": "Bigtable stores rows in lexicographical order by row key. A well-designed row key avoids hotspots by distributing writes across tablets: reverse domain names (<code>com.company.api</code>), composite keys (<code>customer_id#device_id</code>), and hashing. Never start a row key with a timestamp or sequential ID.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-74"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d2",
    "front": "Firestore in Native Mode vs. Datastore Mode",
    "hint": "Mobile/web clients with real-time sync vs. massive server-side backend throughput.",
    "back": "<strong>Native Mode</strong> provides client SDKs, offline support, real-time listeners, and document/subcollection hierarchy, ideal for mobile and web apps. <strong>Datastore Mode</strong> supports millions of server-side writes per second for existing App Engine apps and backend ETL pipelines, lacking real-time client listeners.",
    "tags": [
      "GCP",
      "Planning"
    ],
    "id": "gcp-ace-fc-75"
  }
];

export default GCP_ACE_FLASHCARDS_3;
