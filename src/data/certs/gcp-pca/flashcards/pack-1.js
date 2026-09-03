export const GCP_PCA_FLASHCARDS_1 = [
  {
    id: "gcp-pca-fc-1",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Spanner: Multi-Region Architecture",
    hint: "Global horizontal relational scale-out.",
    back: "<strong>Cloud Spanner</strong> provides multi-region horizontal write scaling, external ACID consistency, and 99.999% availability for global financial systems.",
    tags: ["Spanner", "Relational", "Global Scale"]
  },
  {
    id: "gcp-pca-fc-2",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Bigtable: Time-Series Row Keys",
    hint: "Preventing tablet hotspotting.",
    back: "Use <strong>meterId#reversedTimestamp</strong> in Cloud Bigtable to keep single-entity time ranges contiguous while distributing write load across nodes.",
    tags: ["Bigtable", "Time-Series", "Row Key Design"]
  },
  {
    id: "gcp-pca-fc-3",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "GKE: Autopilot vs. Standard",
    hint: "Fully managed node infrastructure.",
    back: "<strong>GKE Autopilot</strong> automates node provisioning, hardening, and scaling according to Google best practices, billing strictly per pod resource request.",
    tags: ["GKE", "Autopilot", "Containers"]
  },
  {
    id: "gcp-pca-fc-4",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Google Cloud: Global Application Load Balancer",
    hint: "Anycast edge Layer 7 load balancing.",
    back: "The <strong>Global External Application Load Balancer</strong> terminates TLS at the nearest Anycast edge PoP and routes traffic over Google's private fiber network.",
    tags: ["Networking", "Load Balancing", "Anycast"]
  },
  {
    id: "gcp-pca-fc-5",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Hybrid Connectivity: Dedicated Interconnect",
    hint: "Physical direct cross-connects at 10/100G.",
    back: "<strong>Dedicated Interconnect</strong> delivers physical cross-connects at Google colocation facilities for enterprise workloads requiring 10 Gbps or 100 Gbps private links.",
    tags: ["Networking", "Dedicated Interconnect", "Hybrid Connectivity"]
  },
  {
    id: "gcp-pca-fc-6",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Shared VPC: Enterprise Topology",
    hint: "Centralized network host and service projects.",
    back: "<strong>Shared VPC</strong> centralizes network administration in a single host project while allowing service projects to attach VM and GKE instances to authorized subnets.",
    tags: ["VPC", "Shared VPC", "Governance"]
  },
  {
    id: "gcp-pca-fc-7",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Archive Class",
    hint: "Millisecond access at lowest cold storage cost.",
    back: "<strong>Archive Storage</strong> provides lowest-cost storage for data accessed &lt; once per year, with <strong>instantaneous millisecond retrieval</strong> (no rehydration delays).",
    tags: ["Cloud Storage", "Archive Storage", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-8",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "MIG Autoscaling: Custom Monitoring Metrics",
    hint: "Scaling on Pub/Sub queue depth.",
    back: "Configure MIG autoscalers to track <strong>Cloud Monitoring metrics</strong> (such as Pub/Sub queue backlog per worker) when CPU utilization does not reflect true application load.",
    tags: ["Compute Engine", "MIG", "Autoscaling"]
  },
  {
    id: "gcp-pca-fc-9",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "BigQuery: Storage and Compute Separation",
    hint: "Colossus storage decoupled from Dremel compute.",
    back: "BigQuery decouples <strong>Colossus storage</strong> from <strong>Dremel compute slots</strong> over the Jupiter network, enabling instant elastic scaling without cluster provisioning.",
    tags: ["BigQuery", "Architecture", "Dremel"]
  },
  {
    id: "gcp-pca-fc-10",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Run: Stateless Serverless Containers",
    hint: "Scale-to-zero container execution.",
    back: "<strong>Cloud Run</strong> executes stateless containers serverless, scaling automatically from zero to thousands of instances based on concurrency with per-millisecond billing.",
    tags: ["Cloud Run", "Serverless", "Containers"]
  },
  {
    id: "gcp-pca-fc-11",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud SQL: HA Architecture",
    hint: "Synchronous regional disk replication and standby failover.",
    back: "Cloud SQL HA pairs a primary and standby instance in separate zones using <strong>synchronous regional persistent disks</strong>, ensuring zero data loss during zonal outages.",
    tags: ["Cloud SQL", "High Availability", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-fc-12",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Firestore: Native vs. Datastore Mode",
    hint: "Real-time listeners vs server-side Datastore.",
    back: "<strong>Firestore in Native Mode</strong> powers mobile/web apps with real-time snapshot synchronization and offline local storage. <strong>Datastore Mode</strong> serves backend batch systems.",
    tags: ["Firestore", "Native Mode", "Mobile"]
  },
  {
    id: "gcp-pca-fc-13",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Google Cloud: Resource Hierarchy",
    hint: "Organization, Folders, Projects, Resources.",
    back: "The Google Cloud hierarchy flows: <strong>Organization &rarr; Folders &rarr; Projects &rarr; Resources</strong>. Policies and IAM permissions inherit down the tree.",
    tags: ["Governance", "Resource Hierarchy", "IAM"]
  },
  {
    id: "gcp-pca-fc-14",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Pub/Sub vs. Pub/Sub Lite",
    hint: "Global serverless vs zonal partitioned messaging.",
    back: "<strong>Pub/Sub Lite</strong> requires manual partition capacity sizing but slashes costs for predictable high-volume pipelines compared to global serverless <strong>Pub/Sub</strong>.",
    tags: ["Pub/Sub", "Pub/Sub Lite", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-15",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Interconnect: 99.99% SLA Topology",
    hint: "Four circuits across dual metros and regions.",
    back: "Achieving Google's <strong>99.99% Interconnect SLA</strong> requires <strong>4 circuits across 2 separate colocation metros</strong> terminating on redundant Cloud Routers in two regions.",
    tags: ["Networking", "Cloud Interconnect", "High Availability"]
  },
  {
    id: "gcp-pca-fc-16",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Dual-Region Buckets",
    hint: "Geo-redundancy with strict jurisdictional control.",
    back: "<strong>Dual-Region buckets</strong> replicate data across two chosen regions within a continent, offering RPO=0 regional failover while meeting strict data residency laws.",
    tags: ["Cloud Storage", "Dual-Region", "Data Sovereignty"]
  },
  {
    id: "gcp-pca-fc-17",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Dataflow: Unified Stream and Batch",
    hint: "Serverless Apache Beam execution engine.",
    back: "<strong>Cloud Dataflow</strong> runs Apache Beam pipelines with automated worker scaling, dynamic work rebalancing, and exactly-once processing across batch and stream.",
    tags: ["Dataflow", "Apache Beam", "Streaming"]
  },
  {
    id: "gcp-pca-fc-18",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Persistent Disks: pd-extreme vs pd-ssd",
    hint: "High-performance block storage options.",
    back: "<strong>pd-extreme</strong> allows independent IOPS provisioning for extreme database workloads. <strong>pd-balanced</strong> delivers general-purpose SSD performance cost-effectively.",
    tags: ["Compute Engine", "Persistent Disks", "Storage"]
  },
  {
    id: "gcp-pca-fc-19",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Local SSD vs. Persistent Disk",
    hint: "Host-attached NVMe ephemeral performance.",
    back: "<strong>Local SSDs</strong> provide host-attached NVMe storage with millions of IOPS and sub-100 microsecond latency, ideal for caches and scratch data.",
    tags: ["Compute Engine", "Local SSD", "NVMe"]
  },
  {
    id: "gcp-pca-fc-20",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud NAT: Outbound Internet for Private VMs",
    hint: "Managed software-defined NAT.",
    back: "<strong>Cloud NAT</strong> enables private instances to reach public internet endpoints (e.g. for package updates) without assigning public IP addresses or exposing inbound ports.",
    tags: ["Networking", "Cloud NAT", "Security"]
  },
  {
    id: "gcp-pca-fc-21",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "VPC Network Peering: High-Speed VPC Interconnect",
    hint: "Private internal network fabric linking.",
    back: "<strong>VPC Network Peering</strong> links VPCs directly on Google's private software-defined SDN with full line-rate performance and zero gateway encryption overhead.",
    tags: ["VPC", "Peering", "High Bandwidth"]
  },
  {
    id: "gcp-pca-fc-22",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "VPC Peering: Non-Transitive Routing",
    hint: "No transit routing through intermediate VPCs.",
    back: "<strong>VPC Peering is non-transitive</strong>: VPC A peered to B and B peered to C does not allow A to communicate with C without direct peering or Network Connectivity Center.",
    tags: ["VPC", "Peering", "Non-Transitive"]
  },
  {
    id: "gcp-pca-fc-23",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Armor: Edge WAF and DDoS Defense",
    hint: "Protecting Cloud Load Balancers at the edge.",
    back: "<strong>Cloud Armor</strong> works with External HTTP(S) Load Balancers to block Layer 7 attacks, OWASP threats, and volumetric DDoS at Google's global perimeter.",
    tags: ["Cloud Armor", "WAF", "DDoS Mitigation"]
  },
  {
    id: "gcp-pca-fc-24",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Memorystore: Redis vs. Memcached",
    hint: "Data structures and HA vs multithreaded caching.",
    back: "<strong>Memorystore for Redis</strong> supports advanced data structures, pub/sub, and automatic cross-zone failover. <strong>Memcached</strong> provides simple multithreaded caching.",
    tags: ["Memorystore", "Redis", "Caching"]
  },
  {
    id: "gcp-pca-fc-25",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "GKE: Private Clusters & Authorized Networks",
    hint: "Hardening control plane and worker nodes.",
    back: "<strong>Private Clusters</strong> isolate worker nodes from public IPs; <strong>Master Authorized Networks</strong> whitelist specific corporate CIDRs authorized to reach the control plane.",
    tags: ["GKE", "Private Cluster", "Master Authorized Networks"]
  }
];

export default GCP_PCA_FLASHCARDS_1;
