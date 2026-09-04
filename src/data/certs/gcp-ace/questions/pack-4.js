export const GCP_ACE_QUESTIONS_4 = [
  {
    id: "gcp-ace-76",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Targeting Firewall Rules Securely Using Service Accounts vs. Network Tags",
    scenario: "A financial application requires strict network isolation between web tier VMs and database tier VMs. A security audit notes that firewall rules currently use Network Tags ('tag:db-server'), allowing any developer with Compute Instance Admin permissions to attach the tag to unauthorized VMs and gain database access.",
    question: "What is the recommended method to cryptographically restrict firewall targeting?",
    options: [
      { id: 'A', text: "Target firewall rules to the specific Service Account under which the database instances run, rather than using network tags" },
      { id: 'B', text: "Restrict VM deployment to sole-tenant hardware" },
      { id: 'C', text: "Convert the VPC network from Custom Mode to Auto Mode" },
      { id: 'D', text: "Encrypt network tags using Cloud KMS symmetric keys" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Network tags are arbitrary strings that can be modified by anyone with instance editing permissions. By contrast, targeting firewall rules by Service Account binds network security to IAM identity: only instances explicitly authorized and running as that service account receive the firewall rule, preventing unauthorized privilege escalation.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["Firewalls", "ServiceAccounts", "Security"]
  },
  {
    id: "gcp-ace-77",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Selecting Load Balancer for Global Multi-Region Anycast Routing with SSL Offloading",
    scenario: "A SaaS application serves web traffic to customers across North America, Europe, and Asia. The architecture requires a single global IPv4 address, automatic geographical routing to the nearest healthy region, SSL/TLS termination at Google's network edge, and path-based URL routing (/api/* to API backends, /* to static assets).",
    question: "Which Google Cloud load balancer should be deployed?",
    options: [
      { id: 'A', text: "External Application Load Balancer (Global HTTPS)" },
      { id: 'B', text: "External Passthrough Network Load Balancer" },
      { id: 'C', text: "Cloud DNS with latency-based routing records" },
      { id: 'D', text: "Internal Application Load Balancer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The External Application Load Balancer (formerly Global External HTTP(S) Load Balancer) provides a single global Anycast IP address that terminates TLS connections close to users at Google's Points of Presence (PoPs). It performs Layer 7 URL routing across multi-region backend instance groups and integrates natively with Cloud CDN and Cloud Armor.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["LoadBalancing", "GlobalHTTPS", "Architecture"]
  },
  {
    id: "gcp-ace-78",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Layer 4 High-Throughput Load Balancing Preserving Client Source IP",
    scenario: "A multiplayer gaming platform runs game server processes on Compute Engine instances that communicate over custom UDP and TCP protocols. The application requires extreme throughput with line-rate packet forwarding and must inspect the authentic client source IP address for player matchmaking and latency calculation.",
    question: "Which load balancing solution meets these specifications?",
    options: [
      { id: 'A', text: "Internal Application Load Balancer" },
      { id: 'B', text: "External Passthrough Network Load Balancer" },
      { id: 'C', text: "Cloud Armor rate limiting proxy" },
      { id: 'D', text: "External Application Load Balancer" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "External Passthrough Network Load Balancer is a Layer 4 pass-through load balancer built on Google's Maglev infrastructure. It does not terminate TCP or UDP connections (non-proxy), routing packets directly to backend VMs with zero proxy overhead and preserving the original client source IP address intact.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["LoadBalancing", "NetworkLoadBalancer", "Performance"]
  },
  {
    id: "gcp-ace-79",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Deploying Internal Application Load Balancer: Proxy-Only Subnet Requirement",
    scenario: "A DevOps team is setting up an Internal Application Load Balancer (Envoy-based L7 load balancer) to route HTTP traffic between private internal microservices in region us-central1. During deployment, the console indicates that a required network component is missing in the VPC.",
    question: "Which network component must be created before configuring an Internal Application Load Balancer?",
    options: [
      { id: 'A', text: "A proxy-only subnet in the region with purpose set to REGIONAL_MANAGED_PROXY" },
      { id: 'B', text: "An HA VPN tunnel connected to on-premises" },
      { id: 'C', text: "A Cloud NAT gateway with manual IP assignment" },
      { id: 'D', text: "An internet gateway route pointing to 0.0.0.0/0" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Internal Application Load Balancers (and Regional External Application Load Balancers) run on dedicated Envoy proxies managed by Google within your VPC. These proxies require a dedicated 'proxy-only subnet' (with purpose REGIONAL_MANAGED_PROXY) in each region where the load balancer operates to allocate internal IP addresses for the proxy instances.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["LoadBalancing", "InternalLoadBalancer", "Networking"]
  },
  {
    id: "gcp-ace-80",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Private Cloud DNS Zones for Internal Microservice Discovery",
    scenario: "An enterprise deploys 20 microservices across Compute Engine and GKE inside a private VPC. Developers want microservices to address each other using custom internal domain names like 'service-a.prod.corp.internal' without exposing domain records or IP addresses to the public internet.",
    question: "Which Cloud DNS configuration provides this capability?",
    options: [
      { id: 'A', text: "Deploy BIND9 DNS servers on two Compute Engine VMs" },
      { id: 'B', text: "Maintain /etc/hosts files across all VM instances using Ansible" },
      { id: 'C', text: "Create a Cloud DNS Public Zone with DNSSEC enabled" },
      { id: 'D', text: "Create a Cloud DNS Private Zone authorized for the specific VPC network" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Cloud DNS Private Zone publishes authoritative DNS records that are resolvable strictly by resources within the specific VPC networks authorized for that zone. Queries from outside those VPCs or from the public internet cannot resolve or discover records within a private zone.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudDNS", "PrivateDNS", "Networking"]
  },
  {
    id: "gcp-ace-81",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Resolving On-Premises Corporate Domains via Cloud DNS Forwarding Zones",
    scenario: "A hybrid application running on Google Cloud Compute Engine needs to resolve on-premises hostnames ending in '.corp.local' hosted on Active Directory DNS servers located in an on-premises datacenter. A Cloud Interconnect link is already active between the VPC and on-premises.",
    question: "How should the cloud engineer configure Cloud DNS to resolve on-premises domains?",
    options: [
      { id: 'A', text: "Deploy Cloud NAT with DNS proxy enabled" },
      { id: 'B', text: "Create a Cloud DNS Forwarding Zone for the domain '.corp.local' with forwarding targets set to the on-premises DNS server IP addresses" },
      { id: 'C', text: "Configure a VPC firewall rule allowing outbound port 53 to 0.0.0.0/0" },
      { id: 'D', text: "Add public NS records for '.corp.local' in Google Domains" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Cloud DNS Forwarding Zone enables hybrid DNS resolution by automatically forwarding queries for a specific DNS domain suffix (e.g. '.corp.local') to specified target IP addresses (the on-premises DNS servers) across VPN or Interconnect, without requiring custom DNS forwarding software on VMs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudDNS", "HybridCloud", "Networking"]
  },
  {
    id: "gcp-ace-82",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Cross-Zone High Availability for Statefull VMs using Regional Persistent Disks",
    scenario: "A legacy single-instance database running on Compute Engine requires zero data loss replication and automated disaster recovery across zones in region europe-west1. If the VM's primary zone experiences an unexpected outage, the database volume must be quickly attachable to a standby VM in another zone.",
    question: "Which storage solution provides synchronous cross-zone block storage?",
    options: [
      { id: 'A', text: "Regional Persistent Disk (Regional PD)" },
      { id: 'B', text: "Local SSD attached in raid-1" },
      { id: 'C', text: "Cloud Storage FUSE mount" },
      { id: 'D', text: "Zonal Persistent Disk with daily snapshots" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Regional Persistent Disks provide synchronous block-level replication of data across two zones within the same region. In the event of a zonal hardware or power failure, the disk can be immediately force-attached to a standby VM instance in the surviving secondary zone with zero data loss.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "PersistentDisk", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-83",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Automating Persistent Disk Backups with Snapshot Schedules",
    scenario: "An enterprise disaster recovery policy mandates that all production Compute Engine persistent disks must take daily automated incremental backups at 02:00 UTC and retain them for 30 days. Backups must be preserved even if the host VM is deleted.",
    question: "What is the recommended, native Google Cloud mechanism to implement this policy?",
    options: [
      { id: 'A', text: "Deploy Cloud Backup and DR standalone virtual appliances" },
      { id: 'B', text: "Write a Python script on each VM that executes 'dd' and uploads disk images to Cloud Storage via cron" },
      { id: 'C', text: "Create a Snapshot Schedule in Compute Engine with a daily schedule and 30-day retention rule, and attach it to the disks" },
      { id: 'D', text: "Configure Object Lifecycle Management on persistent disk partitions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Compute Engine Snapshot Schedules allow administrators to define automated recurring backup schedules (hourly, daily, or weekly) with automated retention policies directly in Compute Engine. Once attached to disks, snapshots are created incrementally and stored durably across multiple zones in the region.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Snapshots", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-84",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Deploying Cloud Functions 2nd Gen for Long-Running Event-Driven Processing",
    scenario: "A data pipeline needs to process PDF documents uploaded to Cloud Storage. Document OCR parsing takes between 15 and 20 minutes per file. Cloud Functions 1st gen cannot be used because it enforces a strict 9-minute maximum execution timeout for HTTP and background functions.",
    question: "Which serverless compute option natively supports execution timeouts up to 60 minutes?",
    options: [
      { id: 'A', text: "Cloud Functions (1st gen) with memory scaled to 8 GB" },
      { id: 'B', text: "App Engine Standard Environment" },
      { id: 'C', text: "Cloud Functions (2nd gen)" },
      { id: 'D', text: "Firebase Cloud Functions legacy runtime" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Functions (2nd gen) is built on top of Cloud Run and Eventarc. For HTTP and event-driven functions, 2nd gen supports execution timeouts up to 60 minutes, larger instance sizes up to 32 GiB RAM / 8 vCPUs, and request concurrency up to 1,000 requests per instance.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudFunctions", "Serverless", "Architecture"]
  },
  {
    id: "gcp-ace-85",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Configuring Cloud SQL Read Replicas for Analytics Offloading",
    scenario: "An online retail application's primary Cloud SQL for MySQL instance is experiencing high CPU utilization because business analysts run heavy reporting queries throughout the business day. Operational checkout transactions are experiencing transaction locking delays.",
    question: "How can the database architect offload analytics queries without impacting transactional performance?",
    options: [
      { id: 'A', text: "Enable High Availability on the primary instance and direct analysts to the standby instance" },
      { id: 'B', text: "Export database tables to Cloud Bigtable every 10 minutes" },
      { id: 'C', text: "Create one or more Cloud SQL Read Replicas and configure reporting tools to connect to the read replica endpoints" },
      { id: 'D', text: "Migrate reporting queries to execute against the binary log files directly" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud SQL Read Replicas replicate data asynchronously from the primary instance. Directing read-heavy analytics and reporting queries to read replicas offloads query processing from the primary instance, protecting transactional write throughput and customer checkout latency.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "ReadReplicas", "Performance"]
  },
  {
    id: "gcp-ace-86",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Configuring Point-in-Time Recovery (PITR) Prerequisites in Cloud SQL",
    scenario: "A database administrator is configuring a new Cloud SQL for MySQL production instance and needs to ensure that if a developer accidentally drops a production table at 14:23:05 UTC, the database can be recovered to 14:23:04 UTC.",
    question: "Which two features must be enabled to support Point-in-Time Recovery in Cloud SQL?",
    options: [
      { id: 'A', text: "Read Replicas and High Availability" },
      { id: 'B', text: "Customer-Managed Encryption Keys and SSL/TLS certificates" },
      { id: 'C', text: "Automated daily backups and Binary Logging" },
      { id: 'D', text: "Storage auto-increase and Cloud Monitoring alerts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Cloud SQL for MySQL, Point-in-Time Recovery (PITR) relies on restoring from an automated daily backup and then replaying incremental transaction records from binary logs up to the exact target microsecond. Therefore, both automated backups and binary logging must be enabled.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "PITR", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-87",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Dual-Region Cloud Storage with Turbo Replication for Disaster Recovery",
    scenario: "A financial institution requires data storage that is replicated across two distinct geographic regions (e.g. us-central1 and us-east1) with a contractual recovery point objective (RPO) guaranteeing that 100% of newly written objects are replicated within 15 minutes.",
    question: "Which Cloud Storage bucket configuration guarantees this 15-minute replication SLA?",
    options: [
      { id: 'A', text: "Create a Multi-Region bucket with default replication settings" },
      { id: 'B', text: "Create a Dual-Region Cloud Storage bucket and enable Turbo Replication" },
      { id: 'C', text: "Configure a continuous Storage Transfer Service job running every 15 minutes" },
      { id: 'D', text: "Deploy cross-region Rsync scripts on Compute Engine instances" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Storage offers Dual-Region buckets with optional 'Turbo Replication'. When enabled, Turbo Replication provides a financially backed SLA guaranteeing that 100% of newly written or overwritten objects are replicated to the paired secondary region within 15 minutes.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "TurboReplication", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-88",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Optimizing Compute Costs with Custom Machine Types",
    scenario: "An in-memory caching daemon requires 32 GB of RAM, but utilizes less than 5% of a single vCPU. Standard predefined machine types (such as n2-standard-8 with 8 vCPUs and 32 GB RAM) would require paying for 7 unutilized vCPUs and unnecessary OS licensing costs.",
    question: "How can the engineer provision the instance with optimal cost efficiency?",
    options: [
      { id: 'A', text: "Deploy an e2-micro instance and attach a 32 GB persistent disk formatted as swap space" },
      { id: 'B', text: "Deploy the application on Cloud Run with concurrency set to 1" },
      { id: 'C', text: "Run the caching daemon inside Google Cloud Shell" },
      { id: 'D', text: "Deploy a Custom Machine Type configured with 2 vCPUs and 32 GB of RAM (extended memory)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Compute Engine allows creating Custom Machine Types where engineers can customize the exact ratio of vCPU to RAM. By specifying custom vCPU count and custom RAM (or extended memory), the application gets its required 32 GB RAM without paying for 8 unwanted vCPUs, cutting compute and licensing costs significantly.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "CustomMachineTypes", "CostOptimization"]
  },
  {
    id: "gcp-ace-89",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Choosing Between Firestore in Native Mode and Datastore Mode",
    scenario: "A mobile gaming studio is building a real-time multiplayer card game. The mobile iOS and Android clients need offline data caching, real-time synchronization, and live listeners that notify players immediately when an opponent plays a card.",
    question: "Which Firestore mode should be chosen when creating the database?",
    options: [
      { id: 'A', text: "Cloud Bigtable in SSD mode" },
      { id: 'B', text: "Firestore in Native mode" },
      { id: 'C', text: "Firestore in Datastore mode" },
      { id: 'D', text: "Cloud SQL with MySQL read replicas" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Firestore in Native mode is designed for mobile, web, and serverless client applications. It provides client SDKs with built-in offline synchronization, real-time snapshot listeners, security rules, and subcollection data structures. Datastore mode is intended for backend server-to-server systems requiring massive write throughput but lacks real-time mobile listeners.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["Firestore", "Mobile", "NoSQL"]
  },
  {
    id: "gcp-ace-90",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Network Routing: Dynamic Routing with Cloud Router across Hybrid Cloud",
    scenario: "A corporation connects its corporate data center to Google Cloud using Cloud Interconnect. When new subnets are added to on-premises routers, network engineers want the new IP prefixes to be automatically recognized and routed by Google Cloud VPCs without manual route table updates.",
    question: "Which Google Cloud networking service provides dynamic route exchange using BGP?",
    options: [
      { id: 'A', text: "External Application Load Balancer" },
      { id: 'B', text: "Cloud Router" },
      { id: 'C', text: "VPC Network Peering" },
      { id: 'D', text: "Cloud NAT" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Router is a fully distributed, managed Google Cloud service that speaks Border Gateway Protocol (BGP). It dynamically advertises VPC routes to on-premises routers and dynamically receives on-premises route updates over Cloud VPN or Cloud Interconnect, updating VPC routing tables automatically with zero manual intervention.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRouter", "BGP", "HybridCloud"]
  },
  {
    id: "gcp-ace-91",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Handling Compute-Heavy Analytics with Compute-Optimized C2 VMs",
    scenario: "A quantitative trading firm runs algorithmic Monte Carlo simulations on Compute Engine. The proprietary simulation code is single-threaded and CPU-bound, requiring the highest possible per-core CPU clock speed and ultra-low L3 cache latency.",
    question: "Which Compute Engine machine family should be deployed?",
    options: [
      { id: 'A', text: "Compute-Optimized (C2 or C3) machine series" },
      { id: 'B', text: "General-Purpose (E2) machine series" },
      { id: 'C', text: "Accelerator-Optimized (A2) machine series" },
      { id: 'D', text: "Memory-Optimized (M2) machine series" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Compute-Optimized machine family (C2 and C3 instances powered by high-frequency Intel Xeon Scalable processors) is engineered specifically for compute-intensive, CPU-bound, single-threaded applications such as financial modeling, gaming servers, and high-performance scientific computing (HPC).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "ComputeOptimized", "Performance"]
  },
  {
    id: "gcp-ace-92",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Migrating Auto Mode VPC to Custom Mode VPC",
    scenario: "A company starts development in an Auto Mode VPC. As enterprise growth accelerates, the network team requires custom subnetting to peer with partner organizations. The team decides to switch the existing VPC network from Auto Mode to Custom Mode.",
    question: "What is an important operational fact regarding converting an Auto Mode VPC to Custom Mode?",
    options: [
      { id: 'A', text: "Converting to Custom Mode requires destroying and recreating the VPC network" },
      { id: 'B', text: "Converting to Custom Mode is a permanent, irreversible operation; existing subnets retain their IP ranges, but future subnets must be created manually" },
      { id: 'C', text: "Subnet IP ranges will automatically be truncated from /20 to /24" },
      { id: 'D', text: "All running Compute Engine instances in the VPC will be terminated during conversion" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Auto Mode VPC can be converted to Custom Mode using 'gcloud compute networks switch-mode &lt;NAME&gt; --mode=custom'. This change preserves all existing subnets and running VM instances with zero downtime, but the conversion is strictly one-way and irreversible.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Networking", "Administration"]
  },
  {
    id: "gcp-ace-93",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Configuring Shared VPC Service Project Attachment",
    scenario: "A central infrastructure team operates a Host Project named 'shared-net-prod' containing corporate VPC subnets. A development team operating project 'billing-dev' needs to launch Compute Engine VMs attached to the 'us-central1-dev' subnet in the host project.",
    question: "Which administrative steps must be completed to enable this architecture?",
    options: [
      { id: 'A', text: "Attach 'billing-dev' as a Service Project to 'shared-net-prod' in Shared VPC settings, and grant 'roles/compute.networkUser' on the subnet to the developers or service accounts in 'billing-dev'" },
      { id: 'B', text: "Grant the primitive Owner role on shared-net-prod to developers in billing-dev" },
      { id: 'C', text: "Deploy an HA VPN tunnel connecting the two projects" },
      { id: 'D', text: "Establish VPC Network Peering between billing-dev and shared-net-prod" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Google Cloud Shared VPC: 1) The Shared VPC Admin links the service project ('billing-dev') to the host project ('shared-net-prod'); and 2) Grants the 'roles/compute.networkUser' role on specific host subnets to the users or service accounts in the service project, authorizing them to attach VM network interfaces to the shared subnet.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["SharedVPC", "Networking", "CloudIAM"]
  },
  {
    id: "gcp-ace-94",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Preserving Monotonically Increasing Data in BigQuery without Hotspots",
    scenario: "Unlike Cloud Spanner and Bigtable which suffer from write hotspots when inserting monotonically increasing sequential keys, a data engineering team evaluates BigQuery for streaming real-time append-only telemetry with timestamped records.",
    question: "How does BigQuery handle high-velocity streaming inserts with sequential timestamps?",
    options: [
      { id: 'A', text: "BigQuery limits streaming writes to 100 rows per second to prevent hotspots" },
      { id: 'B', text: "BigQuery handles high-throughput streaming appends natively via the BigQuery Storage Write API without key-range hotspotting, using distributed columnar storage (Capacitor)" },
      { id: 'C', text: "BigQuery tables must be rebuilt daily to re-balance timestamp splits" },
      { id: 'D', text: "BigQuery requires hashing timestamps before streaming data" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "BigQuery is a distributed analytical data warehouse backed by Google's Capacitor columnar format and Colossus distributed filesystem. Using the BigQuery Storage Write API, it easily ingests millions of rows per second with sequential timestamps without the split-hotspotting issues found in transactional key-value or row stores like Spanner or Bigtable.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "StorageWriteAPI", "Streaming"]
  },
  {
    id: "gcp-ace-95",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d2",
    domainName: "Planning and configuring a cloud solution",
    title: "Architecting Low-RPO Cloud Storage Replication with Turbo Replication",
    scenario: "A financial auditing application requires storing immutable transaction audit logs in Google Cloud Storage. Company policy requires that all stored objects must be replicated across two geographic regions located at least 100 miles apart, with a guaranteed service level objective (SLO) that 100% of newly written objects are replicated to the secondary region within 15 minutes.",
    question: "Which Cloud Storage configuration satisfies this strict low-RPO requirement?",
    options: [
      { id: 'A', text: "Create a Multi-Region bucket and configure Cloud Storage Transfer Service to execute every 15 minutes" },
      { id: 'B', text: "Create a Dual-Region Cloud Storage bucket with Turbo Replication enabled" },
      { id: 'C', text: "Deploy a Regional bucket with an asynchronous cross-region snapshot schedule" },
      { id: 'D', text: "Deploy two distinct Regional buckets and write a Cloud Function triggered on object finalize to mirror uploads" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage Dual-Region buckets store object data redundantly across two specific Google Cloud regions. By default, replication is asynchronous across regions; enabling Turbo Replication provides a 15-minute Recovery Point Objective (RPO) backed by a service level agreement that 100% of newly written data is replicated to the second region within 15 minutes.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "DualRegion", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-96",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "GKE Autopilot vs. GKE Standard Clusters",
    scenario: "A startup wants to run containerized microservices on Google Kubernetes Engine (GKE). They have a small engineering team and want Google to fully manage node provisioning, cluster hardening, autoscaling, and OS patching so they only pay for the Pod resources requested.",
    question: "Which GKE operation mode should be selected?",
    options: [
      { id: 'A', text: "Compute Engine Managed Instance Groups" },
      { id: 'B', text: "GKE Standard with custom node pools" },
      { id: 'C', text: "GKE Autopilot" },
      { id: 'D', text: "Cloud Run for Anthos on-premises" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GKE Autopilot is a fully managed mode of operation where Google manages the cluster infrastructure, including node provisioning, scaling, security hardening, and OS updates. In Autopilot, customers are billed per second only for the CPU, memory, and storage requested by actively running Pods.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    tags: ["GKE", "Autopilot", "Kubernetes", "Containers"]
  },
  {
    id: "gcp-ace-97",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Run Container Deployment and Ingress",
    scenario: "A developer has packaged a stateless web application into a Docker container and needs to deploy it to Google Cloud. The application must automatically scale to zero when idle, scale up to handle hundreds of concurrent HTTP requests, and receive a secure HTTPS endpoint automatically.",
    question: "Which service is the most cost-effective and operationally simple way to deploy this application?",
    options: [
      { id: 'A', text: "Deploy the container to Cloud Run with concurrency settings configured and allow unauthenticated invocations" },
      { id: 'B', text: "Launch an E2-standard-4 Compute Engine instance and install Docker manually over SSH" },
      { id: 'C', text: "Deploy the application to Google App Engine flexible environment with min_instances set to 5" },
      { id: 'D', text: "Provision a 3-node GKE Standard cluster and configure an internal ClusterIP service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Run is a fully managed serverless platform that runs stateless containers directly. It automatically provisions HTTPS endpoints, handles SSL termination, scales dynamically from zero to thousands of instances based on traffic, and charges only for compute consumed while processing requests.",
    referenceUrl: "https://cloud.google.com/run/docs/quickstarts/deploy-container",
    tags: ["Cloud Run", "Serverless", "Containers", "Compute"]
  },
  {
    id: "gcp-ace-98",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Compute Engine Regional Managed Instance Group (MIG)",
    scenario: "A high-availability web service running on Compute Engine must survive the complete loss of an individual Google Cloud zone without downtime. The service must also automatically replace unhealthy instances and scale horizontally based on CPU load.",
    question: "How should the Compute Engine instances be deployed?",
    options: [
      { id: 'A', text: "Deploy a single Zonal MIG with autohealing enabled" },
      { id: 'B', text: "Deploy unmanaged instance groups in three different regions behind an internal TCP proxy" },
      { id: 'C', text: "Create an instance template and deploy a Regional Managed Instance Group (MIG) distributed across multiple zones with an HTTP health check and autoscaling enabled" },
      { id: 'D', text: "Manually create standalone VMs in three zones and configure DNS round-robin routing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Regional Managed Instance Group (MIG) spreads VM instances across multiple zones within a single region. When combined with instance templates, HTTP health checks for autohealing, and autoscaling policies, regional MIGs ensure application survivability during zonal outages.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-migs",
    tags: ["Compute Engine", "MIG", "Autohealing", "High Availability"]
  },
  {
    id: "gcp-ace-99",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud Storage Lifecycle Management Rules",
    scenario: "A media company uploads thousands of video files to a Google Cloud Storage bucket daily in the Standard class. The videos are accessed heavily for the first 30 days, rarely after 30 days, and must be permanently deleted after 365 days.",
    question: "How should this transition be automated without writing custom scripts?",
    options: [
      { id: 'A', text: "Write a Cloud Function triggered by Cloud Scheduler that runs gsutil mv and gsutil rm daily" },
      { id: 'B', text: "Deploy an EC2 instance that mounts the bucket via FUSE and runs a nightly cron script" },
      { id: 'C', text: "Change the default storage class of the bucket to Archive Storage immediately upon creation" },
      { id: 'D', text: "Configure an Object Lifecycle Management policy on the bucket with two rules: transition to Nearline after 30 days, and delete objects after 365 days" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage Object Lifecycle Management allows administrators to define declarative JSON lifecycle rules directly on a bucket. The rules automatically inspect object age and conditions, transitioning objects between classes (e.g. Standard → Nearline) and expiring objects without operational overhead.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle",
    tags: ["Cloud Storage", "Lifecycle", "Automation", "Cost"]
  },
  {
    id: "gcp-ace-100",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Cloud SQL High Availability and Read Replicas",
    scenario: "An enterprise deploys an e-commerce database on Cloud SQL for MySQL. The database must automatically fail over to a standby instance in another zone within seconds during an outage, and read-heavy analytics traffic must be offloaded from the primary instance.",
    question: "Which configuration satisfies both requirements?",
    options: [
      { id: 'A', text: "Configure an automated export to Cloud Storage every 10 minutes and read from CSV files" },
      { id: 'B', text: "Enable point-in-time recovery on a single-zone instance without secondary standby" },
      { id: 'C', text: "Enable High Availability (regional configuration) on the primary Cloud SQL instance and provision one or more read replicas in the same or separate zones" },
      { id: 'D', text: "Deploy two standalone single-zone Cloud SQL instances and write custom replication scripts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud SQL High Availability (HA) provisions a synchronous standby replica in a different zone within the same region, providing automatic failover with zero data loss. Creating read replicas offloads read queries from the primary instance, scaling read throughput.",
    referenceUrl: "https://cloud.google.com/sql/docs/mysql/high-availability",
    tags: ["Cloud SQL", "High Availability", "Read Replicas", "Databases"]
  }
];

export default GCP_ACE_QUESTIONS_4;
