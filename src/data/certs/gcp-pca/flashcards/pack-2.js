export const GCP_PCA_FLASHCARDS_2 = [
  {
    id: "gcp-pca-fc-26",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Run vs. Cloud Functions",
    hint: "Custom containers vs runtime abstraction.",
    back: "<strong>Cloud Run</strong> supports arbitrary Docker images, system dependencies, and sidecar containers; <strong>Cloud Functions</strong> focuses on lightweight single-function scripts.",
    tags: ["Cloud Run", "Cloud Functions", "Architecture"]
  },
  {
    id: "gcp-pca-fc-27",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Composer: Managed Apache Airflow",
    hint: "Authoring dependency-driven DAG pipelines.",
    back: "<strong>Cloud Composer</strong> orchestrates complex enterprise ETL workflows across hybrid and multi-cloud systems using managed <strong>Apache Airflow Python DAGs</strong>.",
    tags: ["Cloud Composer", "Apache Airflow", "Data Orchestration"]
  },
  {
    id: "gcp-pca-fc-28",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Workflows: Serverless Orchestration",
    hint: "Lightweight YAML/JSON workflow execution.",
    back: "<strong>Cloud Workflows</strong> provides serverless, pay-per-step orchestration for microservices and HTTP APIs with instant startup and zero idle compute costs.",
    tags: ["Workflows", "Serverless", "Orchestration"]
  },
  {
    id: "gcp-pca-fc-29",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Spanner: Interleaved Tables",
    hint: "Co-locating parent-child rows on identical splits.",
    back: "<strong>Table interleaving</strong> stores child table records alongside parent rows on the same physical splits, enabling ultra-fast localized joins without network hops.",
    tags: ["Spanner", "Interleaved Tables", "Schema Design"]
  },
  {
    id: "gcp-pca-fc-30",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Bigtable: Preventing Hotspotting",
    hint: "Avoiding sequential timestamp row keys.",
    back: "Sequential row keys route all write traffic to a single tablet. Prepend <strong>hashed values or entity IDs</strong> to distribute traffic evenly across the cluster.",
    tags: ["Bigtable", "Hotspotting", "Schema Design"]
  },
  {
    id: "gcp-pca-fc-31",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "BigQuery: Partitioning and Clustering",
    hint: "Pruning query scans for cost and speed.",
    back: "<strong>Partition by date</strong> to prune unread time slices, and <strong>cluster by high-cardinality fields</strong> (e.g. customerId) to co-locate related blocks.",
    tags: ["BigQuery", "Partitioning", "Clustering"]
  },
  {
    id: "gcp-pca-fc-32",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "BigQuery: BI Engine",
    hint: "Sub-second in-memory query acceleration.",
    back: "<strong>BigQuery BI Engine</strong> caches active query tables in memory to provide sub-second query responses for Looker and analytical dashboards.",
    tags: ["BigQuery", "BI Engine", "Looker"]
  },
  {
    id: "gcp-pca-fc-33",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Signed URLs",
    hint: "Delegated direct client uploads.",
    back: "<strong>Signed URLs</strong> grant time-limited upload or download access to specific objects, enabling clients to stream data directly to storage without overloading web servers.",
    tags: ["Cloud Storage", "Signed URLs", "Security"]
  },
  {
    id: "gcp-pca-fc-34",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Lifecycle Management",
    hint: "Automated tiering and deletion.",
    back: "<strong>Object Lifecycle Management</strong> evaluates object age to transition storage classes (e.g. Standard to Coldline) and permanently purge expired objects.",
    tags: ["Cloud Storage", "Lifecycle Management", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-35",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Spot VMs",
    hint: "Up to 91% savings on fault-tolerant batch computing.",
    back: "<strong>Spot VMs</strong> utilize surplus cloud capacity at steep discounts (60-91%), subject to preemption with a 30-second warning, perfect for resilient batch tasks.",
    tags: ["Compute Engine", "Spot VMs", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-36",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Committed Use Discounts",
    hint: "Deep discounts for predictable baselines.",
    back: "<strong>Committed Use Discounts (CUDs)</strong> provide substantial savings (up to 70%) for predictable 24/7 workloads in exchange for 1- or 3-year usage commitments.",
    tags: ["Compute Engine", "CUDs", "FinOps"]
  },
  {
    id: "gcp-pca-fc-37",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Sustained Use Discounts",
    hint: "Automatic discounts for long-running VMs.",
    back: "<strong>Sustained Use Discounts (SUDs)</strong> automatically reduce hourly pricing by up to 30% when instances run for more than 25% of a month, without contracts.",
    tags: ["Compute Engine", "SUDs", "FinOps"]
  },
  {
    id: "gcp-pca-fc-38",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Network Tiers: Premium vs. Standard",
    hint: "Google global backbone vs public internet transit.",
    back: "<strong>Premium Tier</strong> enters Google's private global network at the edge nearest the client. <strong>Standard Tier</strong> routes over public transit internet to the destination region.",
    tags: ["Networking", "Network Service Tiers", "Latency"]
  },
  {
    id: "gcp-pca-fc-39",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud CDN: Global Edge Caching",
    hint: "Slashing egress costs and latency at Google edge.",
    back: "<strong>Cloud CDN</strong> pairs with Global HTTP(S) Load Balancers to cache static media across Google's edge network, reducing origin load and egress fees.",
    tags: ["Cloud CDN", "Caching", "Edge"]
  },
  {
    id: "gcp-pca-fc-40",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "GKE: Multi-Cluster Ingress (MCI)",
    hint: "Global load balancing across regional clusters.",
    back: "<strong>Multi-Cluster Ingress (MCI)</strong> manages a single global Anycast load balancer routing user traffic to the closest healthy multi-region GKE cluster.",
    tags: ["GKE", "Multi-Cluster Ingress", "Global Routing"]
  },
  {
    id: "gcp-pca-fc-41",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud SQL: Cross-Region Read Replicas",
    hint: "Localized reads and read offloading.",
    back: "<strong>Cross-Region Read Replicas</strong> offload intensive read traffic and place analytical data closer to international users while acting as DR promotion targets.",
    tags: ["Cloud SQL", "Read Replicas", "Cross-Region"]
  },
  {
    id: "gcp-pca-fc-42",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Dataproc: Managed Spark and Hadoop",
    hint: "Running open-source big data in 90s.",
    back: "<strong>Cloud Dataproc</strong> provides managed, fast-starting clusters for Apache Spark, Hadoop, and Hive, allowing seamless migration of open-source pipelines.",
    tags: ["Dataproc", "Spark", "Hadoop"]
  },
  {
    id: "gcp-pca-fc-43",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Spanner: Leader Region Mechanics",
    hint: "Paxos quorum write coordination.",
    back: "Multi-region Spanner designates a <strong>Leader Region</strong> where Paxos leaders coordinate writes; proximity to the leader determines transaction commit latency.",
    tags: ["Spanner", "Leader Region", "Paxos"]
  },
  {
    id: "gcp-pca-fc-44",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Autoclass Feature",
    hint: "Hands-free automatic storage class optimization.",
    back: "<strong>Autoclass</strong> automatically transitions objects between Standard, Nearline, Coldline, and Archive based on usage, with <strong>zero retrieval fees</strong>.",
    tags: ["Cloud Storage", "Autoclass", "Cost Management"]
  },
  {
    id: "gcp-pca-fc-45",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Sole-Tenant Nodes",
    hint: "Dedicated physical hardware isolation.",
    back: "<strong>Sole-Tenant Nodes</strong> provide dedicated physical server hardware for a single customer, satisfying strict compliance isolation and physical core licensing (BYOL).",
    tags: ["Compute Engine", "Sole-Tenant Nodes", "Compliance"]
  },
  {
    id: "gcp-pca-fc-46",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Confidential VMs: Encryption in Use",
    hint: "Hardware memory encryption via AMD SEV.",
    back: "<strong>Confidential VMs</strong> encrypt data in RAM using AMD SEV hardware keys, ensuring sensitive payloads remain encrypted even during active CPU computation.",
    tags: ["Compute Engine", "Confidential VMs", "Memory Encryption"]
  },
  {
    id: "gcp-pca-fc-47",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Compute Engine: Shielded VMs",
    hint: "Guarding against bootkits and rootkits.",
    back: "<strong>Shielded VMs</strong> employ Secure Boot, vTPM, and integrity monitoring to prevent rootkits from compromising the kernel boot sequence.",
    tags: ["Compute Engine", "Shielded VMs", "Security"]
  },
  {
    id: "gcp-pca-fc-48",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "VPC: Private Google Access",
    hint: "Reaching Google APIs without public IPs.",
    back: "Enabling <strong>Private Google Access</strong> on a subnet allows private instances to reach Google APIs (Cloud Storage, BigQuery) directly over internal network routing.",
    tags: ["VPC", "Private Google Access", "Networking"]
  },
  {
    id: "gcp-pca-fc-49",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Private Service Connect (PSC): Private Service Publishing",
    hint: "Private IP access without VPC Peering.",
    back: "<strong>Private Service Connect (PSC)</strong> exposes services across projects and organizations via dedicated private IP endpoints without requiring VPC peering or overlapping CIDR fixes.",
    tags: ["VPC", "Private Service Connect", "Microservices"]
  },
  {
    id: "gcp-pca-fc-50",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud DNS: Private Zones",
    hint: "Restricted internal domain name resolution.",
    back: "<strong>Cloud DNS Private Zones</strong> provide internal name resolution accessible only within authorized VPC networks, hiding internal services from public internet queries.",
    tags: ["Cloud DNS", "Private Zones", "Networking"]
  }
];

export default GCP_PCA_FLASHCARDS_2;
