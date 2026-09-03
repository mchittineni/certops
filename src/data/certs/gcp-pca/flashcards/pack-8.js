export const GCP_PCA_FLASHCARDS_8 = [
  {
    id: "gcp-pca-fc-176",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Quota Management: Advance Capacity Planning",
    hint: "Securing compute capacity before peak events.",
    back: "Submit <strong>Quota Increase requests</strong> and establish capacity reservations well in advance of major business events to guarantee physical hardware availability.",
    tags: ["Capacity Planning", "Quotas", "Operations"]
  },
  {
    id: "gcp-pca-fc-177",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "FinOps: Committed Use Discount Sharing",
    hint: "Pooling commitments across organizational projects.",
    back: "Enable <strong>CUD Sharing</strong> on the Cloud Billing account so unused commitment discounts in one project automatically apply to workloads in other projects.",
    tags: ["FinOps", "CUD Sharing", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-178",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Anthos Config Management: GitOps at Scale",
    hint: "Multi-cluster declarative configuration synchronization.",
    back: "<strong>Config Sync (Anthos Config Management)</strong> continuously deploys and enforces Kubernetes configs and security guardrails from Git across hybrid cluster fleets.",
    tags: ["ACM", "GitOps", "Policy Enforcement"]
  },
  {
    id: "gcp-pca-fc-179",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "DMS: Homogeneous vs. Heterogeneous Migrations",
    hint: "Engine compatibility and schema conversion.",
    back: "<strong>Homogeneous migrations</strong> (Postgres-to-Postgres) use native replication directly; <strong>heterogeneous migrations</strong> (Oracle-to-Postgres) require schema translation tools.",
    tags: ["DMS", "Database Migration", "Homogeneous Migration"]
  },
  {
    id: "gcp-pca-fc-180",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Deploy: Delivery Pipeline Manifest",
    hint: "Defining structured release stages.",
    back: "The <strong>clouddeploy.yaml Delivery Pipeline</strong> declares the progression of environments (test &rarr; staging &rarr; prod) and release promotion guardrails.",
    tags: ["Cloud Deploy", "Delivery Pipeline", "Continuous Delivery"]
  },
  {
    id: "gcp-pca-fc-181",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Managed Microsoft Active Directory: Native Enterprise AD",
    hint: "Hardened Windows Server domain controllers.",
    back: "<strong>Managed Service for Microsoft AD</strong> delivers real Windows Server domain controllers with native group policies and hybrid forest trusts to on-premises networks.",
    tags: ["Active Directory", "Managed AD", "Windows"]
  },
  {
    id: "gcp-pca-fc-182",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "DR Patterns: Cold Standby",
    hint: "Lowest cost with higher recovery time.",
    back: "<strong>Cold Standby</strong> incurs near-zero idle infrastructure costs by storing daily backups in Cloud Storage, rebuilding compute environments only when a disaster occurs.",
    tags: ["Disaster Recovery", "Cold Standby", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-183",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Asset Inventory: Point-in-Time Asset Search",
    hint: "Tracking resource and IAM metadata history.",
    back: "<strong>Cloud Asset Inventory</strong> searches and tracks asset configurations and IAM relationships across the organization, supporting historical point-in-time audits.",
    tags: ["Cloud Asset Inventory", "Governance", "Compliance"]
  },
  {
    id: "gcp-pca-fc-184",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "BigQuery: On-Demand vs. Capacity Pricing",
    hint: "Per-TB scanned vs predictable slot reservations.",
    back: "Switch from On-Demand to <strong>Capacity-based pricing (Slots)</strong> to establish predictable monthly budgets and shield against costs from unoptimized query scans.",
    tags: ["BigQuery", "FinOps", "Slots"]
  },
  {
    id: "gcp-pca-fc-185",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Database Migration: Continuous CDC vs Offline Dump",
    hint: "Streaming mutations for minimal cutover windows.",
    back: "Use <strong>continuous replication (CDC)</strong> to stream changes while the database remains online, allowing cutover to complete in a matter of minutes.",
    tags: ["DMS", "CDC", "Zero Downtime"]
  },
  {
    id: "gcp-pca-fc-186",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Build: Substitutions & Secrets",
    hint: "Injecting dynamic parameters and credentials securely.",
    back: "Use <strong>Substitution Variables</strong> for commit metadata and integrate with <strong>Secret Manager (availableSecrets)</strong> to pass sensitive credentials securely in builds.",
    tags: ["Cloud Build", "Substitutions", "Secret Manager"]
  },
  {
    id: "gcp-pca-fc-187",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Billing: Cost Anomaly Detection",
    hint: "Machine-learning cost spike alerts.",
    back: "<strong>Cost Anomaly Detection</strong> analyzes historical spend patterns to alert teams to anomalous spending surges in near-real-time.",
    tags: ["FinOps", "Anomaly Detection", "Billing Alerts"]
  },
  {
    id: "gcp-pca-fc-188",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Chaos Engineering: Automated Failure Validation",
    hint: "Testing recovery by injecting controlled faults.",
    back: "Practice <strong>Chaos Engineering</strong> by simulating zone failures and network partitions to validate that automated disaster recovery mechanisms perform as designed.",
    tags: ["Reliability", "Chaos Engineering", "DR Testing"]
  },
  {
    id: "gcp-pca-fc-189",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Deploy: Automated Verify Phase",
    hint: "Validating canaries before full promotion.",
    back: "The <strong>Verify phase</strong> in Cloud Deploy executes automated test suites against deployed canaries, automatically halting promotion and rolling back upon failure.",
    tags: ["Cloud Deploy", "Verify Phase", "Canary Testing"]
  },
  {
    id: "gcp-pca-fc-190",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "StratoZone: Agentless Collector",
    hint: "Scanning enterprise datacenters without local agents.",
    back: "The <strong>StratoZone Agentless Collector</strong> queries on-premises servers via WMI and SSH to capture performance metrics and dependencies with zero host agent footprint.",
    tags: ["StratoZone", "Agentless Collection", "Migration Assessment"]
  },
  {
    id: "gcp-pca-fc-191",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cost Optimization: Matching Storage Classes to Access Patterns",
    hint: "Slashing long-term storage fees.",
    back: "Aligning data to <strong>Coldline or Archive storage classes</strong> based on query frequency optimizes costs according to Google Cloud Cost Optimization best practices.",
    tags: ["Architecture Framework", "Cost Optimization", "Storage Lifecycle"]
  },
  {
    id: "gcp-pca-fc-192",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "CUDs: Resource-Based vs. Flexible Spend-Based",
    hint: "Hardware-tied vs dollar-commitment flexibility.",
    back: "<strong>Flexible Spend-Based CUDs</strong> apply across different machine families, regions, and services (Compute Engine, GKE, Cloud Run) for maximum operational agility.",
    tags: ["FinOps", "CUDs", "Flexible Commitments"]
  },
  {
    id: "gcp-pca-fc-193",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Aggregated Log Sinks: Organization-Wide Telemetry",
    hint: "Centralizing logs across all child projects.",
    back: "Create an <strong>Aggregated Log Sink at the Organization level</strong> with <code>includeChildren = true</code> to automatically centralize audit telemetry from all projects.",
    tags: ["Cloud Logging", "Aggregated Sinks", "Compliance"]
  },
  {
    id: "gcp-pca-fc-194",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    front: "Cloud Build: Parallel Step Execution",
    hint: "Speeding up CI/CD with waitFor: ['-'].",
    back: "Set <strong>waitFor: ['-']</strong> on independent Cloud Build steps to execute them in parallel, drastically reducing build times.",
    tags: ["Cloud Build", "Parallelism", "Build Optimization"]
  },
  {
    id: "gcp-pca-fc-195",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    front: "SRE: Blameless Post-Mortems",
    hint: "Focusing on system resilience over human blame.",
    back: "Conduct <strong>Blameless Post-Mortems</strong> to treat incidents as learning opportunities, focusing on automated guardrails and resilient architecture rather than individual blame.",
    tags: ["SRE", "Post-Mortem", "Blameless Culture"]
  },
  {
    id: "gcp-pca-fc-196",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "GKE Fleets: Multi-Cluster Management",
    hint: "Unified control plane across hybrid environments.",
    back: "<strong>GKE Fleets</strong> logically unify Kubernetes clusters across Google Cloud, AWS, and on-premises into a single manageable administrative domain.",
    tags: ["Anthos", "GKE Fleets", "Multi-Cloud"]
  },
  {
    id: "gcp-pca-fc-197",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Anthos Service Mesh: Managed Istio Service Mesh",
    hint: "Zero-trust mTLS and microservice telemetry.",
    back: "<strong>Anthos Service Mesh (ASM)</strong> enforces automated mutual TLS encryption between microservices and provides advanced traffic steering without code changes.",
    tags: ["Anthos Service Mesh", "Istio", "mTLS"]
  },
  {
    id: "gcp-pca-fc-198",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Datastream: Serverless Change Data Capture",
    hint: "Real-time database replication to BigQuery.",
    back: "<strong>Datastream</strong> provides serverless CDC replication, streaming real-time mutations from Oracle and PostgreSQL directly into BigQuery for instant analytics.",
    tags: ["Datastream", "CDC", "BigQuery"]
  },
  {
    id: "gcp-pca-fc-199",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Cloud Data Fusion: Visual ETL/ELT",
    hint: "Code-free data integration built on CDAP.",
    back: "<strong>Cloud Data Fusion</strong> provides a visual drag-and-drop interface for authoring enterprise ETL/ELT data pipelines without writing code.",
    tags: ["Cloud Data Fusion", "ETL", "No-Code"]
  },
  {
    id: "gcp-pca-fc-200",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    front: "Connect Agent: Outbound Tunneling for Hybrid Clusters",
    hint: "Managing remote clusters without inbound ports.",
    back: "The <strong>Connect Agent</strong> initiates outbound-only encrypted tunnels from on-premises clusters to Google Cloud, enabling centralized management without opening inbound firewall ports.",
    tags: ["Anthos", "Connect Agent", "Hybrid Cloud"]
  }
];

export default GCP_PCA_FLASHCARDS_8;
