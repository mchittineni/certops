export const GCP_PCA_FLASHCARDS_4 = [
  {
    id: "gcp-pca-fc-76",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud SQL: Auth Proxy",
    hint: "Encrypted mTLS database tunneling via IAM.",
    back: "The <strong>Cloud SQL Auth Proxy</strong> creates a secure, encrypted mTLS tunnel to Cloud SQL, verifying IAM credentials without managing SSL certificates or opening public IPs.",
    tags: ["Cloud SQL", "Auth Proxy", "Security"]
  },
  {
    id: "gcp-pca-fc-77",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Router: Dynamic Routing Modes",
    hint: "Regional vs Global subnet advertising.",
    back: "Set dynamic routing to <strong>Global</strong> to allow a Cloud Router in one region to advertise subnets and exchange routes across all worldwide regions in the VPC.",
    tags: ["VPC", "Cloud Router", "Dynamic Routing"]
  },
  {
    id: "gcp-pca-fc-78",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "VPC Firewalls: Service Accounts vs. Tags",
    hint: "Preventing privilege escalation via metadata.",
    back: "Target firewall rules using <strong>Service Accounts</strong> instead of network tags because service accounts cannot be manipulated by regular VM administrators to bypass security.",
    tags: ["VPC", "Firewall Rules", "Service Accounts"]
  },
  {
    id: "gcp-pca-fc-79",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "VPC Packet Mirroring: Deep Packet Inspection",
    hint: "Agentless raw traffic inspection.",
    back: "<strong>VPC Packet Mirroring</strong> clones full packet payloads from selected VMs to internal inspection appliances for security and forensic analysis without guest agents.",
    tags: ["Networking", "Packet Mirroring", "IDS/IPS"]
  },
  {
    id: "gcp-pca-fc-80",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "VPC Flow Logs: Network Telemetry",
    hint: "Capturing IP flow metadata.",
    back: "<strong>VPC Flow Logs</strong> log connection metadata (source/destination IP, port, protocol, byte count) per subnet for traffic analysis, security audits, and egress tracking.",
    tags: ["VPC", "Flow Logs", "Troubleshooting"]
  },
  {
    id: "gcp-pca-fc-81",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Terraform: GCS Remote Backend",
    hint: "State locking and versioning in Cloud Storage.",
    back: "The <strong>gcs backend</strong> stores Terraform state in a Cloud Storage bucket, providing automatic state locking and version history to prevent corruption in team workflows.",
    tags: ["Terraform", "GCS Backend", "IaC"]
  },
  {
    id: "gcp-pca-fc-82",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Foundation Toolkit (CFT): Best-Practice Blueprints",
    hint: "Standardized enterprise landing zones.",
    back: "The <strong>Cloud Foundation Toolkit (CFT)</strong> provides production-ready Terraform modules reflecting Google Cloud architecture and security best practices.",
    tags: ["CFT", "Terraform", "Landing Zone"]
  },
  {
    id: "gcp-pca-fc-83",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Config Connector: Kubernetes-Native Infrastructure",
    hint: "Managing GCP resources via kubectl.",
    back: "<strong>Config Connector</strong> allows developers to declare and manage GCP resources (Cloud SQL, Storage) directly through Kubernetes CRDs and GitOps pipelines.",
    tags: ["GKE", "Config Connector", "GitOps"]
  },
  {
    id: "gcp-pca-fc-84",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Startup Scripts",
    hint: "Automated bootstrapping on instance boot.",
    back: "Pass bootstrapping bash scripts via instance metadata using <strong>startup-script</strong> or <strong>startup-script-url</strong> to configure VMs automatically upon boot.",
    tags: ["Compute Engine", "Startup Scripts", "Automation"]
  },
  {
    id: "gcp-pca-fc-85",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Nested Virtualization",
    hint: "Running hypervisors inside cloud VMs.",
    back: "<strong>Nested Virtualization</strong> exposes hardware virtualization extensions (VT-x/AMD-V) to Compute Engine instances, allowing hypervisors like KVM to run nested VMs.",
    tags: ["Compute Engine", "Nested Virtualization", "Hypervisors"]
  },
  {
    id: "gcp-pca-fc-86",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Workload Identity",
    hint: "Keyless pod-to-GCP authentication.",
    back: "<strong>Workload Identity</strong> links Kubernetes ServiceAccounts to Google Service Accounts, eliminating static credential keys and granting pods least-privilege IAM tokens.",
    tags: ["GKE", "Workload Identity", "Security"]
  },
  {
    id: "gcp-pca-fc-87",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Machine Images",
    hint: "All-in-one instance configuration and disk snapshots.",
    back: "A <strong>Machine Image</strong> captures VM configuration, metadata, and all attached disk contents into a single unified asset for rapid golden image rollouts.",
    tags: ["Compute Engine", "Machine Images", "Golden Images"]
  },
  {
    id: "gcp-pca-fc-88",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Serverless VPC Access: Private VPC Egress",
    hint: "Bridging serverless containers to private subnets.",
    back: "A <strong>Serverless VPC Access Connector</strong> bridges serverless workloads (Cloud Run/Functions) to internal VPC networks to communicate with private Cloud SQL instances.",
    tags: ["Cloud Run", "Serverless VPC Access", "Networking"]
  },
  {
    id: "gcp-pca-fc-89",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Spanner: Native Backup & Restore",
    hint: "Point-in-time binary snapshots.",
    back: "<strong>Spanner native Backup and Restore</strong> creates binary point-in-time backups that restore rapidly without the overhead of Dataflow export/import pipelines.",
    tags: ["Spanner", "Backup and Restore", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-fc-90",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Spanner: Point-in-Time Recovery (PITR)",
    hint: "Querying past timestamps up to 7 days.",
    back: "<strong>PITR</strong> retains historical data versions, enabling stale reads and point-in-time recovery to any exact second within the <strong>version_retention_period</strong>.",
    tags: ["Spanner", "PITR", "Data Recovery"]
  },
  {
    id: "gcp-pca-fc-91",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Bigtable: Key Visualizer",
    hint: "Visualizing row-key access heatmaps.",
    back: "<strong>Key Visualizer</strong> generates interactive heatmaps of read/write activity across row keys, pinpointing hot partitions and schema design flaws.",
    tags: ["Bigtable", "Key Visualizer", "Performance Tuning"]
  },
  {
    id: "gcp-pca-fc-92",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Local SSD: Live Migration Data Retention",
    hint: "Preserved through maintenance migrations.",
    back: "Google Cloud transparently migrates <strong>Local SSD data</strong> along with the VM during live migration maintenance, preserving data without downtime.",
    tags: ["Compute Engine", "Local SSD", "Live Migration"]
  },
  {
    id: "gcp-pca-fc-93",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Local SSD: Ephemeral Storage Lifecycle",
    hint: "Data lost upon user stop/terminate.",
    back: "Stopping a VM permanently <strong>discards all Local SSD data</strong>; applications must back up vital state to persistent disks or Cloud Storage before stopping.",
    tags: ["Compute Engine", "Local SSD", "Ephemeral"]
  },
  {
    id: "gcp-pca-fc-94",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Storage: Turbo Replication",
    hint: "15-minute cross-region RPO guarantee.",
    back: "<strong>Turbo Replication</strong> guarantees that 100% of dual-region bucket data replicates to the secondary region within <strong>15 minutes</strong> for strict RPO compliance.",
    tags: ["Cloud Storage", "Turbo Replication", "Business Continuity"]
  },
  {
    id: "gcp-pca-fc-95",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Storage: Noncurrent Lifecycle Rules",
    hint: "Cleaning up overwritten version history.",
    back: "Use the <strong>DaysSinceNoncurrentTime</strong> lifecycle condition to automatically delete stale, noncurrent object revisions while leaving live files untouched.",
    tags: ["Cloud Storage", "Versioning", "Lifecycle Rules"]
  },
  {
    id: "gcp-pca-fc-96",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Bigtable: Native Autoscaling",
    hint: "Dynamic node scaling based on CPU targets.",
    back: "<strong>Bigtable Autoscaling</strong> dynamically adjusts cluster node count to meet target CPU utilization (e.g. 60%), eliminating manual cluster resizing.",
    tags: ["Bigtable", "Autoscaling", "Capacity Planning"]
  },
  {
    id: "gcp-pca-fc-97",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Sole-Tenant Nodes: CPU Overcommit",
    hint: "Packing bursty VMs on dedicated physical hosts.",
    back: "<strong>CPU Overcommit</strong> on Sole-Tenant Nodes allows provisioning up to 2x more vCPUs than physical cores for bursty workloads, optimizing host utilization.",
    tags: ["Compute Engine", "Sole-Tenant", "Overcommit"]
  },
  {
    id: "gcp-pca-fc-98",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Google Cloud Managed Service for Prometheus",
    hint: "Planetary-scale managed PromQL monitoring.",
    back: "<strong>Managed Service for Prometheus (GMP)</strong> provides global, multi-cluster Prometheus metric collection and PromQL querying without managing storage backends.",
    tags: ["GKE", "Prometheus", "GMP"]
  },
  {
    id: "gcp-pca-fc-99",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Backup for GKE: Full Cluster and Volume DR",
    hint: "Protecting etcd state and persistent volumes.",
    back: "<strong>Backup for GKE</strong> backs up both Kubernetes object manifests and Persistent Volume storage, enabling single-click disaster recovery across clusters.",
    tags: ["GKE", "Backup for GKE", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-fc-100",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "MIG Standby Pools: Rapid Warm Instance Resumption",
    hint: "Scaling up in seconds from suspended states.",
    back: "<strong>Standby Pools</strong> maintain pre-configured stopped/suspended instances in a MIG, enabling sub-10-second scaling without waiting for full OS cold boots.",
    tags: ["Compute Engine", "MIG", "Standby Pools"]
  }
];

export default GCP_PCA_FLASHCARDS_4;
