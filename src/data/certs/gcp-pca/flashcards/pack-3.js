export const GCP_PCA_FLASHCARDS_3 = [
  {
    id: "gcp-pca-fc-51",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Internal Passthrough Network Load Balancer",
    hint: "High-performance SDN pass-through routing.",
    back: "The <strong>Internal Passthrough Network Load Balancer</strong> routes internal TCP/UDP traffic at line rate without proxy hops, preserving original client IP addresses.",
    tags: ["Networking", "Load Balancing", "Internal Passthrough"]
  },
  {
    id: "gcp-pca-fc-52",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Armor: Rate Limiting Rules",
    hint: "Throttling abusive client request rates.",
    back: "<strong>Cloud Armor Rate Limiting</strong> restricts request volumes per client IP or session key, mitigating credential stuffing and scraping attacks at the edge.",
    tags: ["Cloud Armor", "Rate Limiting", "WAF"]
  },
  {
    id: "gcp-pca-fc-53",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Spanner: Change Streams",
    hint: "Native real-time Change Data Capture (CDC).",
    back: "<strong>Cloud Spanner Change Streams</strong> capture ordered table mutations in real time, serving as the source for Dataflow streaming into BigQuery and event buses.",
    tags: ["Spanner", "Change Streams", "CDC"]
  },
  {
    id: "gcp-pca-fc-54",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Pub/Sub: Dead-Letter Topics",
    hint: "Isolating unacknowledged poison messages.",
    back: "Configuring a <strong>Dead-Letter Topic</strong> routes messages exceeding <strong>maxDeliveryAttempts</strong> away from the primary queue, unblocking consumer pipelines.",
    tags: ["Pub/Sub", "Dead-Letter Topic", "Resilience"]
  },
  {
    id: "gcp-pca-fc-55",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "GKE: Node Auto-Provisioning (NAP)",
    hint: "Automated dynamic node pool creation.",
    back: "<strong>Node Auto-Provisioning (NAP)</strong> detects unschedulable pods and automatically provisions tailored node pools (CPU, RAM, GPUs) matching exact pod resource requests.",
    tags: ["GKE", "Node Auto-Provisioning", "Autoscaling"]
  },
  {
    id: "gcp-pca-fc-56",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "BigQuery: Materialized Views",
    hint: "Precomputed cached aggregates with query rewrite.",
    back: "<strong>Materialized Views</strong> precompute and refresh aggregated SQL results, automatically accelerating matching queries without modifying application code.",
    tags: ["BigQuery", "Materialized Views", "Performance"]
  },
  {
    id: "gcp-pca-fc-57",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud Storage: Bucket Lock",
    hint: "Irreversible WORM compliance enforcement.",
    back: "<strong>Bucket Lock</strong> permanently freezes retention policies, guaranteeing objects cannot be modified or deleted by anyone (including root admins) until retention expires.",
    tags: ["Cloud Storage", "Bucket Lock", "Compliance"]
  },
  {
    id: "gcp-pca-fc-58",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Cloud SQL: Replica Promotion for DR",
    hint: "Elevating read replicas to primary.",
    back: "<strong>Promoting a cross-region read replica</strong> converts it into a standalone read-write primary database, restoring database operations during regional outages.",
    tags: ["Cloud SQL", "Disaster Recovery", "Replica Promotion"]
  },
  {
    id: "gcp-pca-fc-59",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    front: "Apigee vs. Cloud Endpoints",
    hint: "Full API management vs lightweight proxy.",
    back: "<strong>Apigee</strong> provides full-lifecycle enterprise API management, monetization, and developer portals. <strong>Cloud Endpoints</strong> is a lightweight gRPC/REST gateway proxy.",
    tags: ["Apigee", "API Management", "Enterprise"]
  },
  {
    id: "gcp-pca-fc-60",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    front: "IAM Roles: Primitive vs. Predefined",
    hint: "Enforcing least privilege access control.",
    back: "Avoid coarse <strong>Primitive roles (Owner/Editor/Viewer)</strong>; assign fine-grained <strong>Predefined or Custom roles</strong> to enforce least-privilege security boundaries.",
    tags: ["IAM", "Least Privilege", "Security"]
  },
  {
    id: "gcp-pca-fc-61",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "MIG: Rolling Update Parameters",
    hint: "maxSurge and maxUnavailable trade-offs.",
    back: "Setting <strong>maxUnavailable = 0</strong> and <strong>maxSurge &gt; 0</strong> guarantees zero downtime and 100% serving capacity retention during MIG instance updates.",
    tags: ["Compute Engine", "MIG", "Rolling Updates"]
  },
  {
    id: "gcp-pca-fc-62",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Regional vs. Zonal Clusters",
    hint: "Replicated control plane across 3 zones.",
    back: "<strong>Regional GKE clusters</strong> deploy replicated control plane masters across 3 availability zones, ensuring Kubernetes API availability during zonal failures.",
    tags: ["GKE", "Regional Cluster", "High Availability"]
  },
  {
    id: "gcp-pca-fc-63",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Custom Machine Types",
    hint: "Tailoring exact vCPU and RAM allocations.",
    back: "<strong>Custom Machine Types</strong> allow specifying exact vCPU and memory amounts, avoiding overpaying for unused compute in predefined machine families.",
    tags: ["Compute Engine", "Custom Machine Types", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-64",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Live Migration",
    hint: "Zero-downtime host maintenance.",
    back: "Setting <strong>onHostMaintenance = MIGRATE</strong> ensures VMs are transparently moved to alternative physical host hardware during infrastructure updates with zero downtime.",
    tags: ["Compute Engine", "Live Migration", "High Availability"]
  },
  {
    id: "gcp-pca-fc-65",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: OS Login",
    hint: "IAM-linked centralized SSH access.",
    back: "<strong>OS Login</strong> links Linux user accounts to Google Cloud IAM credentials, eliminating manually managed SSH keys and automating instant offboarding.",
    tags: ["Compute Engine", "OS Login", "IAM"]
  },
  {
    id: "gcp-pca-fc-66",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Pod Anti-Affinity",
    hint: "Spreading replicas across unique nodes.",
    back: "Use <strong>podAntiAffinity</strong> with <code>topologyKey: kubernetes.io/hostname</code> to guarantee that pod replicas never co-locate on the same host node.",
    tags: ["GKE", "Pod Anti-Affinity", "Scheduling"]
  },
  {
    id: "gcp-pca-fc-67",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Taints & Tolerations",
    hint: "Reserving specialized nodes.",
    back: "Apply <strong>Taints</strong> to specialized node pools (e.g. GPUs) so only pods declaring matching <strong>Tolerations</strong> can schedule on them.",
    tags: ["GKE", "Taints and Tolerations", "Node Pools"]
  },
  {
    id: "gcp-pca-fc-68",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Network Policies",
    hint: "Pod-to-pod Layer 3/4 traffic filtering.",
    back: "<strong>NetworkPolicy</strong> enforces zero-trust traffic rules between pods inside GKE, isolating microservices by label and port.",
    tags: ["GKE", "NetworkPolicy", "Zero-Trust"]
  },
  {
    id: "gcp-pca-fc-69",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Release Channels",
    hint: "Rapid, Regular, and Stable upgrade tracks.",
    back: "The <strong>Stable channel</strong> provides thoroughly validated Kubernetes versions with lower upgrade frequency for mission-critical enterprise stability.",
    tags: ["GKE", "Release Channels", "Upgrades"]
  },
  {
    id: "gcp-pca-fc-70",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Vertical Pod Autoscaler (VPA)",
    hint: "Right-sizing CPU and memory requests.",
    back: "<strong>VPA</strong> analyzes runtime resource metrics to automatically resize container CPU and memory requests, preventing OOMKilled crashes.",
    tags: ["GKE", "VPA", "Autoscaling"]
  },
  {
    id: "gcp-pca-fc-71",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Storage Transfer Service: Cloud-to-Cloud Migration",
    hint: "Managed large-scale data ingestion.",
    back: "<strong>Storage Transfer Service</strong> orchestrates high-speed, parallel data transfers from Amazon S3, Azure, or web endpoints into Cloud Storage with automated retries and checksums.",
    tags: ["Cloud Storage", "Storage Transfer Service", "Migration"]
  },
  {
    id: "gcp-pca-fc-72",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Transfer Appliance: Physical Bulk Data Migration",
    hint: "Offline petabyte-scale data shipping.",
    back: "<strong>Transfer Appliance</strong> is a physical ruggedized storage device shipped to customer datacenters to migrate petabytes of data offline when network bandwidth is insufficient.",
    tags: ["Cloud Storage", "Transfer Appliance", "Offline Migration"]
  },
  {
    id: "gcp-pca-fc-73",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Storage: Uniform Bucket-Level Access",
    hint: "Enforcing unified IAM governance.",
    back: "<strong>Uniform Bucket-Level Access</strong> turns off legacy per-object ACLs, enforcing centralized, auditable IAM role control across the entire bucket.",
    tags: ["Cloud Storage", "Uniform Access", "Security"]
  },
  {
    id: "gcp-pca-fc-74",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Storage: CORS Configuration",
    hint: "Permitting browser cross-origin requests.",
    back: "Upload a <strong>CORS JSON configuration</strong> to the bucket defining allowed origins (e.g. <code>https://example.com</code>) and HTTP methods to allow browser client reads.",
    tags: ["Cloud Storage", "CORS", "Web Security"]
  },
  {
    id: "gcp-pca-fc-75",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud SQL: Maintenance Deny Periods",
    hint: "Freezing maintenance updates during peak events.",
    back: "Configure a <strong>Maintenance Deny Period</strong> (up to 90 days) on Cloud SQL to prevent automated database updates and restarts during critical business sales windows.",
    tags: ["Cloud SQL", "Maintenance Window", "Deny Period"]
  }
];

export default GCP_PCA_FLASHCARDS_3;
