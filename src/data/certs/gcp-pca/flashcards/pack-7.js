export const GCP_PCA_FLASHCARDS_7 = [
  {
    id: "gcp-pca-fc-151",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "GKE: Node Service Account Vulnerability",
    hint: "Why Workload Identity is mandatory.",
    back: "Pods inheriting the <strong>node's default service account</strong> can access all host permissions; <strong>Workload Identity</strong> isolates permissions strictly per pod ServiceAccount.",
    tags: ["GKE", "Workload Identity", "Least Privilege"]
  },
  {
    id: "gcp-pca-fc-152",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "IAM Recommender: Automated Least-Privilege Optimization",
    hint: "Downscoping excessive permissions.",
    back: "The <strong>IAM Role Recommender</strong> analyzes historical API usage to suggest downscoping broad roles to fine-grained, least-privilege alternatives.",
    tags: ["IAM", "Recommender", "Least Privilege"]
  },
  {
    id: "gcp-pca-fc-153",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Storage CMEK: Key Rotation Mechanics",
    hint: "Decoupled existing and new object encryption.",
    back: "Rotating a CMEK key encrypts <strong>new objects with the new version</strong> while preserving older key versions to decrypt historical objects without re-encryption overhead.",
    tags: ["Cloud Storage", "CMEK", "Key Rotation"]
  },
  {
    id: "gcp-pca-fc-154",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud DLP: Custom infoTypes",
    hint: "Detecting proprietary identifiers.",
    back: "Create <strong>Custom infoTypes</strong> with regex or dictionaries to discover proprietary organization identifiers (e.g. employee IDs) in Cloud DLP.",
    tags: ["Sensitive Data Protection", "Custom infoTypes", "Data Governance"]
  },
  {
    id: "gcp-pca-fc-155",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "SCC Mute Rules: Silencing Expected Findings",
    hint: "Reducing alert fatigue.",
    back: "Configure <strong>Mute Rules</strong> in Security Command Center to automatically silence known, authorized exceptions while preserving complete audit logs.",
    tags: ["Security Command Center", "Mute Rules", "Alert Fatigue"]
  },
  {
    id: "gcp-pca-fc-156",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Billing: BigQuery Export",
    hint: "Raw line-item billing analytics.",
    back: "Stream <strong>Detailed usage cost export to BigQuery</strong> to analyze resource-level costs, label allocations, and credit offsets using SQL and Looker.",
    tags: ["FinOps", "Cloud Billing", "BigQuery"]
  },
  {
    id: "gcp-pca-fc-157",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Billing: Programmatic Budget Actions",
    hint: "Automated cost caps via Pub/Sub and Functions.",
    back: "Connect a <strong>Billing Budget to Cloud Pub/Sub and Cloud Functions</strong> to execute automated actions (e.g. stopping VMs or disabling billing) upon budget breach.",
    tags: ["Cloud Billing", "Budgets", "Automated Enforcement"]
  },
  {
    id: "gcp-pca-fc-158",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Active Assist: Recommender API",
    hint: "Automated identification of idle and oversized resources.",
    back: "<strong>Active Assist Recommenders</strong> identify idle VMs, unattached disks, and oversized instances, recommending right-sizing actions to slash waste.",
    tags: ["Active Assist", "Recommender", "FinOps"]
  },
  {
    id: "gcp-pca-fc-159",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Database Migration Service (DMS): Zero-Hassle DB Cutover",
    hint: "Continuous CDC replication to Cloud SQL.",
    back: "<strong>Database Migration Service (DMS)</strong> continuously replicates on-premises databases using CDC, allowing applications to cut over to Cloud SQL in minutes.",
    tags: ["DMS", "Database Migration", "Cloud SQL"]
  },
  {
    id: "gcp-pca-fc-160",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Migrate to Virtual Machines: Fast-Boot Cloud Migration",
    hint: "Streaming disk data for rapid cutover.",
    back: "<strong>Migrate to Virtual Machines</strong> boots VMware and physical servers on Compute Engine in minutes while streaming disk data in the background.",
    tags: ["Migrate to Virtual Machines", "VMware Migration", "Lift and Shift"]
  },
  {
    id: "gcp-pca-fc-161",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Migrate to Containers: VM-to-Container Modernization",
    hint: "Extracting VM apps into Kubernetes pods.",
    back: "<strong>Migrate to Containers</strong> extracts applications from physical/virtual servers and packages them directly into container images for GKE execution.",
    tags: ["Migrate to Containers", "Modernization", "GKE"]
  },
  {
    id: "gcp-pca-fc-162",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "StratoZone: Comprehensive Cloud Discovery & TCO",
    hint: "Automated datacenter inventory and cost modeling.",
    back: "<strong>StratoZone</strong> scans datacenter infrastructure to map dependencies, evaluate real-time resource utilization, and generate Google Cloud TCO models.",
    tags: ["StratoZone", "Migration Assessment", "TCO Analysis"]
  },
  {
    id: "gcp-pca-fc-163",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "DR Patterns: Hot Active-Active",
    hint: "Zero RTO and RPO across geographic regions.",
    back: "A <strong>Hot Active-Active</strong> architecture serves live traffic across multiple regions concurrently with real-time replication, providing instantaneous failover (RTO &lt; 1s).",
    tags: ["Disaster Recovery", "Active-Active", "High Availability"]
  },
  {
    id: "gcp-pca-fc-164",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "DR Patterns: Warm Standby (Pilot Light)",
    hint: "Minimal footprint with rapid compute scale-up.",
    back: "<strong>Warm Standby (Pilot Light)</strong> continuously synchronizes data to a secondary region while keeping compute minimal, scaling up instances only upon disaster declaration.",
    tags: ["Disaster Recovery", "Warm Standby", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-165",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Business Continuity: RTO vs. RPO",
    hint: "Quantifying downtime and data loss limits.",
    back: "<strong>RPO (Recovery Point Objective)</strong> defines maximum tolerated data loss; <strong>RTO (Recovery Time Objective)</strong> defines maximum tolerated downtime.",
    tags: ["Disaster Recovery", "RTO", "RPO"]
  },
  {
    id: "gcp-pca-fc-166",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Deploy: Managed Continuous Delivery",
    hint: "Automated promotion pipelines for GKE and Cloud Run.",
    back: "<strong>Google Cloud Deploy</strong> standardizes continuous delivery pipelines across environments (Dev &rarr; Stage &rarr; Prod) with automated canary rollouts and instant rollbacks.",
    tags: ["Cloud Deploy", "Continuous Delivery", "GitOps"]
  },
  {
    id: "gcp-pca-fc-167",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Build: Private Worker Pools",
    hint: "Isolated private CI/CD execution inside VPCs.",
    back: "<strong>Cloud Build Private Pools</strong> run CI/CD builds on dedicated, isolated worker instances with private IP access to internal VPC resources and enterprise Git servers.",
    tags: ["Cloud Build", "Private Pools", "CI/CD Security"]
  },
  {
    id: "gcp-pca-fc-168",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Artifact Registry: Universal Artifact Management",
    hint: "Multi-format package and container repository.",
    back: "<strong>Artifact Registry</strong> stores Docker/OCI images, npm, Maven, and Python packages with regional boundaries, CMEK support, and granular IAM permissions.",
    tags: ["Artifact Registry", "Package Management", "Containers"]
  },
  {
    id: "gcp-pca-fc-169",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Blue-Green Deployments: Instant Rollback",
    hint: "Dual-environment instant traffic cutover.",
    back: "<strong>Blue-Green deployments</strong> maintain two identical environments, enabling near-zero downtime releases and instant rollbacks by repointing load balancers.",
    tags: ["Deployment Strategies", "Blue-Green", "Zero Downtime"]
  },
  {
    id: "gcp-pca-fc-170",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Canary Deployments: Weighted Risk Mitigation",
    hint: "Exposing small traffic slices to new releases.",
    back: "<strong>Canary deployments</strong> route a small percentage of live traffic to a new release to validate performance and error rates before full-scale rollout.",
    tags: ["Deployment Strategies", "Canary", "Progressive Delivery"]
  },
  {
    id: "gcp-pca-fc-171",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Resource Labels: Chargeback & Cost Attribution",
    hint: "Propagating financial metadata to billing.",
    back: "Attach <strong>key-value Labels</strong> (e.g. <code>cost-center: 410</code>) to resources; labels propagate into BigQuery billing export for accurate department chargeback.",
    tags: ["FinOps", "Labels", "Cost Allocation"]
  },
  {
    id: "gcp-pca-fc-172",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Billing: Subaccounts",
    hint: "Independent invoicing under master contracts.",
    back: "<strong>Billing Subaccounts</strong> partition billing under a master contract, generating isolated monthly invoices for different departments or clients.",
    tags: ["Cloud Billing", "Subaccounts", "Multi-Tenancy"]
  },
  {
    id: "gcp-pca-fc-173",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Architecture Framework: Stateless Design",
    hint: "Externalizing session state.",
    back: "The <strong>Reliability pillar</strong> mandates stateless application layers; externalize session state to Cloud Memorystore or Firestore so VMs can be created and destroyed freely.",
    tags: ["Architecture Framework", "Reliability", "Stateless Architecture"]
  },
  {
    id: "gcp-pca-fc-174",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "SRE: SLI, SLO, and SLA Definitions",
    hint: "Indicators, objectives, and legal agreements.",
    back: "<strong>SLI</strong> is the actual metric measured; <strong>SLO</strong> is the internal target goal; <strong>SLA</strong> is the legal contract with customers.",
    tags: ["SRE", "SLI/SLO/SLA", "Reliability"]
  },
  {
    id: "gcp-pca-fc-175",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "SRE: Error Budget Policy",
    hint: "Balancing innovation velocity with system stability.",
    back: "When an <strong>Error Budget is exhausted</strong>, new feature deployments are halted to redirect engineering capacity toward reliability engineering and automated recovery.",
    tags: ["SRE", "Error Budget", "Governance"]
  }
];

export default GCP_PCA_FLASHCARDS_7;
