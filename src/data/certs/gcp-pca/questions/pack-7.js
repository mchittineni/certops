export const GCP_PCA_QUESTIONS_7 = [
  {
    id: "gcp-pca-151",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "GKE Workload Identity Federation vs Legacy Node Service Accounts",
    scenario: "A developer asks why assigning the default Compute Engine service account to GKE cluster worker nodes is considered a severe security risk.",
    question: "What security flaw occurs when GKE pods inherit the node's underlying service account?",
    options: [
      { id: 'A', text: "All pods on the node share the node's permissions, allowing any compromised pod to access all Google Cloud APIs permitted to the VM host" },
      { id: 'B', text: "The GKE cluster cannot connect to the internet" },
      { id: 'C', text: "Kubernetes API commands take 10x longer to execute" },
      { id: 'D', text: "GKE nodes cannot run Docker containers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assigning broad IAM roles to GKE node service accounts violates least privilege. Any pod running on that node can query the GKE metadata server to obtain the node's access token, granting that pod unauthorized access to all Google Cloud APIs available to the host VM.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#why_use_workload_identity",
    tags: ["GKE", "Workload Identity", "Least Privilege"]
  },
  {
    id: "gcp-pca-152",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud IAM Role Recommendations via Recommender API",
    scenario: "An enterprise audit reveals that 200 service accounts have been granted broad Primitive Editor roles on projects. The security team needs to identify unused permissions and downscope roles automatically.",
    question: "Which Google Cloud intelligence service analyzes IAM activity and recommends least-privilege role replacements?",
    options: [
      { id: 'A', text: "Cloud Billing alerts" },
      { id: 'B', text: "Cloud Asset Inventory alone" },
      { id: 'C', text: "Security Command Center Standard" },
      { id: 'D', text: "IAM Recommender (Role Recommender)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Google Cloud `IAM Recommender` uses machine learning to analyze permission usage over the past 90 days. It identifies excess permissions granted to users and service accounts and automatically recommends smaller, tailored predefined roles to enforce least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/recommender-overview",
    tags: ["IAM", "Recommender", "Least Privilege"]
  },
  {
    id: "gcp-pca-153",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Storage Customer-Managed Encryption Key Rotation Behavior",
    scenario: "A security administrator rotates a Customer-Managed Encryption Key (CMEK) in Cloud KMS, creating Key Version 2.",
    question: "What happens to existing objects in a Cloud Storage bucket that were encrypted with Key Version 1?",
    options: [
      { id: 'A', text: "Existing objects become permanently unreadable" },
      { id: 'B', text: "All previous versions of the key are deleted" },
      { id: 'C', text: "Existing objects remain encrypted with Key Version 1; newly uploaded objects are encrypted with Key Version 2" },
      { id: 'D', text: "All existing objects are automatically re-encrypted immediately" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a CMEK key is rotated in Cloud KMS, existing objects in Cloud Storage remain encrypted with the key version used when they were written. Cloud KMS retains previous key versions to decrypt existing data seamlessly. Only newly written objects use the new primary key version.",
    referenceUrl: "https://cloud.google.com/storage/docs/encryption/customer-managed-keys#key-rotation",
    tags: ["Cloud Storage", "CMEK", "Key Rotation"]
  },
  {
    id: "gcp-pca-154",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Sensitive Data Protection (Cloud DLP) Stored infoTypes",
    scenario: "A healthcare organization defines custom proprietary employee badge formats: `EMP-` followed by 6 alphanumeric digits. Standard pre-built infoTypes do not detect this pattern.",
    question: "Which Sensitive Data Protection feature allows organizations to define custom regex or dictionary detectors?",
    options: [
      { id: 'A', text: "Custom infoTypes (Stored infoTypes)" },
      { id: 'B', text: "Default infoTypes" },
      { id: 'C', text: "Cloud KMS Keys" },
      { id: 'D', text: "BigQuery User-Defined Functions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sensitive Data Protection supports `Custom infoTypes` (and `Stored infoTypes`). Organizations define custom detection logic using regular expressions (regex), word dictionaries, or large reference datasets in Cloud Storage to identify proprietary organization-specific identifiers.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes",
    tags: ["Sensitive Data Protection", "Custom infoTypes", "Data Governance"]
  },
  {
    id: "gcp-pca-155",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Security Command Center Mute Rules for Known Exceptions",
    scenario: "A security team conducts authorized penetration testing on a development GKE cluster. Security Command Center continuously generates hundreds of high-severity alerts for known test activities.",
    question: "Which Security Command Center feature silences findings matching specific criteria without deleting finding records?",
    options: [
      { id: 'A', text: "Disabling Security Command Center" },
      { id: 'B', text: "Ignoring Cloud Logging" },
      { id: 'C', text: "Mute Rules" },
      { id: 'D', text: "Deleting findings permanently" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Mute Rules` in Security Command Center allow security administrators to define programmatic rules (e.g. matching specific projects, resource types, or finding classes) that automatically mark matching findings as `MUTED`, keeping dashboards clean while retaining full audit records.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/how-to-mute-findings",
    tags: ["Security Command Center", "Mute Rules", "Alert Fatigue"]
  },
  {
    id: "gcp-pca-156",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Billing BigQuery Export for Deep Cost Analysis",
    scenario: "A FinOps team needs to analyze detailed hourly cloud spend across 100 projects, broken down by resource labels, SKU IDs, and credit discounts.",
    question: "Which Google Cloud feature exports detailed, raw billing line items directly to an analytical database?",
    options: [
      { id: 'A', text: "Cloud Billing export to BigQuery (Standard and Detailed usage cost)" },
      { id: 'B', text: "Cloud Billing PDF invoice download" },
      { id: 'C', text: "Cloud Monitoring billing dashboard alone" },
      { id: 'D', text: "Cloud Storage CSV export alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Billing export to BigQuery` automatically streams detailed billing data, including individual resource IDs, custom labels, project metadata, and SKU pricing, into BigQuery tables, allowing FinOps teams to run complex SQL queries and visualize trends in Looker Studio.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["FinOps", "Cloud Billing", "BigQuery"]
  },
  {
    id: "gcp-pca-157",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Programmatic Budget Alerts with Cloud Pub/Sub and Cloud Functions",
    scenario: "An enterprise wants to enforce hard budget controls on development projects. When a project's monthly spend reaches 100% of its budget, the system must automatically disable billing or shut down expensive VMs.",
    question: "How should the cloud architect architect an automated budget cap enforcement mechanism?",
    options: [
      { id: 'A', text: "Configure a Cloud Billing Budget to publish threshold alerts to a Cloud Pub/Sub topic that triggers a Cloud Function to disable billing or stop VMs" },
      { id: 'B', text: "Rely on Google to shut down VMs automatically when budget is reached" },
      { id: 'C', text: "Set a spending limit in Compute Engine instance templates" },
      { id: 'D', text: "Budgets in Google Cloud can only send email alerts to users" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Budgets do not shut down resources natively. To enforce hard spending limits, administrators configure the budget to send programmatic notifications to a `Cloud Pub/Sub` topic, which triggers a `Cloud Function` to unlink billing from the project or terminate resources via API.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/notify#cap_disable_billing",
    tags: ["Cloud Billing", "Budgets", "Automated Enforcement"]
  },
  {
    id: "gcp-pca-158",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Active Assist and Recommender API for Idle Resource Pruning",
    scenario: "An enterprise operating 500 GCP projects spends thousands of dollars monthly on forgotten Compute Engine instances and unattached persistent disks.",
    question: "Which Google Cloud service analyzes resource utilization and surfaces actionable recommendations to delete idle VMs and unattached disks?",
    options: [
      { id: 'A', text: "Security Command Center Standard" },
      { id: 'B', text: "Cloud Profiler" },
      { id: 'C', text: "Cloud Monitoring Metrics Explorer alone" },
      { id: 'D', text: "Active Assist (Recommender API)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Active Assist` uses machine learning to inspect cloud usage. Its Recommenders identify idle Compute Engine VMs, unattached persistent disks, over-provisioned machine types, and unused IP addresses, providing estimated dollar savings and single-click remediation.",
    referenceUrl: "https://cloud.google.com/recommender/docs/overview",
    tags: ["Active Assist", "Recommender", "FinOps"]
  },
  {
    id: "gcp-pca-159",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Database Migration Service (DMS) for Minimal-Downtime MySQL/Postgres Migration",
    scenario: "A company needs to migrate a 5 TB production MySQL database running on an on-premises server to Cloud SQL with less than 5 minutes of downtime.",
    question: "Which Google Cloud managed service continuously replicates database changes via change data capture (CDC) for minimal-downtime cutover?",
    options: [
      { id: 'A', text: "Database Migration Service (DMS)" },
      { id: 'B', text: "Transfer Appliance" },
      { id: 'C', text: "Exporting mysqldump files to Cloud Storage" },
      { id: 'D', text: "Storage Transfer Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Database Migration Service` (DMS) provides serverless, minimal-downtime migrations to Cloud SQL. It performs an initial data sync followed by continuous replication via Change Data Capture (CDC), allowing applications to cut over to Cloud SQL with minimal downtime.",
    referenceUrl: "https://cloud.google.com/database-migration-service/docs/overview",
    tags: ["DMS", "Database Migration", "Cloud SQL"]
  },
  {
    id: "gcp-pca-160",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Migrate to Virtual Machines (formerly Migrate for Compute Engine)",
    scenario: "An enterprise data center migration requires lifting and shifting 200 VMware ESXi virtual machines to Compute Engine VMs with minimal migration downtime.",
    question: "Which Google Cloud migration tool streams VM disk data directly to Compute Engine while allowing VMs to boot in the cloud within minutes?",
    options: [
      { id: 'A', text: "Migrate to Virtual Machines" },
      { id: 'B', text: "Transfer Appliance" },
      { id: 'C', text: "Cloud Deploy" },
      { id: 'D', text: "Storage Transfer Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Migrate to Virtual Machines` (formerly Migrate for Compute Engine / Velostrata) streams storage and boots VMs on Compute Engine in minutes, validating workloads in the cloud before migrating persistent data in the background, minimizing cutover downtime.",
    referenceUrl: "https://cloud.google.com/migrate/virtual-machines/docs/5.0/overview",
    tags: ["Migrate to Virtual Machines", "VMware Migration", "Lift and Shift"]
  },
  {
    id: "gcp-pca-161",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Migrate to Containers for Automated App Modernization",
    scenario: "A legacy monolithic application runs on a Windows/Linux VM. The engineering team wants to extract the application runtime and modernize it into a container running on GKE without rewriting application code.",
    question: "Which Google Cloud tool extracts state and software binaries from VMs into container images and GKE deployment manifests?",
    options: [
      { id: 'A', text: "Migrate to Containers (formerly Migrate for Anthos)" },
      { id: 'B', text: "Cloud Build alone" },
      { id: 'C', text: "Migrate to Virtual Machines" },
      { id: 'D', text: "Artifact Registry" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Migrate to Containers` (formerly Migrate for Anthos) modernizes legacy VM-based workloads into container images. It extracts application layers, configurations, and dependencies from VMs, generating Dockerfiles and Kubernetes manifests to run on GKE or Cloud Run.",
    referenceUrl: "https://cloud.google.com/migrate/containers/docs/overview",
    tags: ["Migrate to Containers", "Modernization", "GKE"]
  },
  {
    id: "gcp-pca-162",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "StratoZone for Comprehensive Cloud Discovery and Financial Assessment",
    scenario: "Before beginning a multi-million dollar cloud migration, an enterprise CIO needs a comprehensive inventory of 2,000 on-premises servers, resource utilization, software dependencies, and estimated Google Cloud TCO.",
    question: "Which Google Cloud discovery and assessment platform analyzes on-premises infrastructure and models cloud costs?",
    options: [
      { id: 'A', text: "StratoZone" },
      { id: 'B', text: "Cloud Foundation Toolkit" },
      { id: 'C', text: "Cloud Cost Profiler" },
      { id: 'D', text: "Active Assist alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`StratoZone` is Google Cloud's assessment and discovery platform. It automatically scans on-premises environments (VMware, Hyper-V, physical servers), discovers installed software and network dependencies, and produces detailed financial TCO models and migration wave plans.",
    referenceUrl: "https://cloud.google.com/stratozone",
    tags: ["StratoZone", "Migration Assessment", "TCO Analysis"]
  },
  {
    id: "gcp-pca-163",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Disaster Recovery Patterns: Cold Standby vs Warm Standby vs Hot Multi-Region",
    scenario: "A financial trading platform requires a disaster recovery strategy with a Recovery Time Objective (RTO) of less than 1 second and Recovery Point Objective (RPO) of 0 across continents.",
    question: "Which disaster recovery architecture pattern satisfies these requirements at the cost of highest operational expense?",
    options: [
      { id: 'A', text: "Hot Multi-Region Active-Active deployment with synchronous replication (e.g. Cloud Spanner)" },
      { id: 'B', text: "Cold Standby with nightly backup restoration" },
      { id: 'C', text: "Warm Standby (Pilot Light) with minimal instances" },
      { id: 'D', text: "Automated backup exports to tape" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Hot Multi-Region Active-Active` architecture serves traffic concurrently from multiple geographically distributed regions. State is synchronized continuously using technologies like Cloud Spanner, ensuring zero RTO and zero data loss (RPO = 0) during an unexpected regional disaster.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Disaster Recovery", "Active-Active", "High Availability"]
  },
  {
    id: "gcp-pca-164",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Disaster Recovery Warm Standby (Pilot Light) Trade-offs",
    scenario: "A retail company wants a cost-effective disaster recovery plan for its web application. During normal operations, a secondary region maintains a synchronized database replica and minimal core infrastructure, scaling up compute VMs only during a declared disaster.",
    question: "Which disaster recovery pattern describes this architecture?",
    options: [
      { id: 'A', text: "Warm Standby (Pilot Light)" },
      { id: 'B', text: "Hot Standby (Active-Active)" },
      { id: 'C', text: "Cold Standby (Backup and Restore)" },
      { id: 'D', text: "Multi-Cloud Mirroring" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Warm Standby` (or Pilot Light) pattern maintains a minimal footprint in the recovery region (such as a running database read replica and minimal core networking). When a disaster strikes the primary region, autoscaling or automation scripts rapidly scale up application compute instances.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide#warm-standby",
    tags: ["Disaster Recovery", "Warm Standby", "Cost Optimization"]
  },
  {
    id: "gcp-pca-165",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "RTO and RPO Metrics Definition for Business Continuity",
    scenario: "A cloud architect is defining business continuity SLAs for a core banking ledger. The business requires that maximum allowable data loss in a crash must not exceed 5 minutes, and service must be restored within 30 minutes.",
    question: "Which terms correctly describe these two metrics respectively?",
    options: [
      { id: 'A', text: "RPO (Recovery Point Objective) is 5 minutes; RTO (Recovery Time Objective) is 30 minutes" },
      { id: 'B', text: "RTO is 5 minutes; RPO is 30 minutes" },
      { id: 'C', text: "MTTR is 5 minutes; MTTF is 30 minutes" },
      { id: 'D', text: "SLA is 5 minutes; SLO is 30 minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Recovery Point Objective` (RPO) is the maximum acceptable amount of data loss measured in time (e.g. 5 minutes of transactions). `Recovery Time Objective` (RTO) is the maximum acceptable duration of downtime before service is restored (e.g. 30 minutes).",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide#rto-rpo",
    tags: ["Disaster Recovery", "RTO", "RPO"]
  },
  {
    id: "gcp-pca-166",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Deploy for Managed Continuous Delivery and Progressive Rollouts",
    scenario: "A platform team deploys containerized microservices to GKE and Cloud Run. The team needs an automated continuous delivery pipeline that enforces promotion gates (Dev -> Staging -> Prod) and supports one-click rollbacks.",
    question: "Which Google Cloud managed service automates progressive application delivery to GKE and Cloud Run?",
    options: [
      { id: 'A', text: "Google Cloud Deploy" },
      { id: 'B', text: "Cloud Build alone" },
      { id: 'C', text: "Cloud Composer" },
      { id: 'D', text: "Artifact Registry" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Google Cloud Deploy` is a fully managed continuous delivery service that automates delivery of containerized applications to GKE, Anthos, and Cloud Run. It defines structured promotion pipelines with approval gates, canary rollouts, and instant rollbacks.",
    referenceUrl: "https://cloud.google.com/deploy/docs/overview",
    tags: ["Cloud Deploy", "Continuous Delivery", "GitOps"]
  },
  {
    id: "gcp-pca-167",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Build Architecture: Build Triggers and Worker Pools",
    scenario: "An enterprise security standard requires that CI/CD container image builds must not execute in shared public cloud infrastructure and must have private IP access to internal repositories inside a VPC.",
    question: "Which Cloud Build capability provides dedicated, private build workers hosted in a customer VPC network?",
    options: [
      { id: 'A', text: "Compute Engine single VM runner" },
      { id: 'B', text: "Cloud Shell environment" },
      { id: 'C', text: "Default Cloud Build shared pool" },
      { id: 'D', text: "Cloud Build Private Pools (Worker Pools)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Cloud Build Private Pools` (Worker Pools) are fully managed, private worker instances running in a Google-managed tenant project peered directly into the customer's VPC network. They provide private IP connectivity to internal GitHub Enterprise instances and zero shared tenancy.",
    referenceUrl: "https://cloud.google.com/build/docs/private-pools/private-pools-overview",
    tags: ["Cloud Build", "Private Pools", "CI/CD Security"]
  },
  {
    id: "gcp-pca-168",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Artifact Registry vs Container Registry Modernization",
    scenario: "A software organization stores Docker container images, npm packages, and Java Maven artifacts across multiple disparate registries. The team wants a unified Google Cloud artifact management platform.",
    question: "Which Google Cloud service succeeds Container Registry and provides universal multi-format artifact storage with fine-grained IAM?",
    options: [
      { id: 'A', text: "Google Cloud Artifact Registry" },
      { id: 'B', text: "Container Registry (gcr.io legacy)" },
      { id: 'C', text: "Cloud Storage public bucket" },
      { id: 'D', text: "Compute Engine local repository" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud `Artifact Registry` is the modern successor to Container Registry. It supports OCI container images as well as language packages (Maven, npm, Python, Apt, Yum), offers regional repository placement, and enforces fine-grained IAM and CMEK encryption.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/overview",
    tags: ["Artifact Registry", "Package Management", "Containers"]
  },
  {
    id: "gcp-pca-169",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Blue-Green Deployment Pattern Architecture",
    scenario: "An operations team releases a new version of an application. The architecture maintains two identical production environments (Blue and Green). Traffic is instantly switched to the new version by repointing a load balancer.",
    question: "What is the primary operational advantage of the Blue-Green deployment pattern?",
    options: [
      { id: 'A', text: "Near-zero downtime releases and instantaneous rollback capability by switching load balancer traffic back to the old environment" },
      { id: 'B', text: "Lowest infrastructure compute cost during rollouts" },
      { id: 'C', text: "Simultaneous multi-master database schema changes" },
      { id: 'D', text: "Elimination of automated testing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Blue-Green deployments` provision two identical environments. Only one serves live production traffic (Blue). Once the new version (Green) passes smoke tests, the load balancer shifts 100% of traffic to Green. If an issue occurs, rolling back is instantaneous by shifting traffic back to Blue.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#blue-green-deployments",
    tags: ["Deployment Strategies", "Blue-Green", "Zero Downtime"]
  },
  {
    id: "gcp-pca-170",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Canary Deployment Pattern with Cloud Load Balancing and GKE",
    scenario: "A company deploys an experimental feature to production. The feature must be tested on 5% of real live user traffic, with automatic rollback if HTTP 5XX error rates exceed 1%.",
    question: "Which deployment strategy gradually exposes a small percentage of user traffic to a new release?",
    options: [
      { id: 'A', text: "Canary Deployment (using weighted traffic splitting)" },
      { id: 'B', text: "Blue-Green Deployment" },
      { id: 'C', text: "Recreate Deployment" },
      { id: 'D', text: "In-place database replacement" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Canary Deployment` routes a small fraction (e.g. 5%) of production traffic to the new revision while serving the remaining 95% from the stable baseline. The team monitors telemetry (error rate, latency); if healthy, traffic is ramped up to 100%.",
    referenceUrl: "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#canary-deployments",
    tags: ["Deployment Strategies", "Canary", "Progressive Delivery"]
  },
  {
    id: "gcp-pca-171",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "FinOps Unit Economics and Cost Allocation Labels",
    scenario: "A cloud finance director needs to allocate monthly cloud expenditure accurately across 15 engineering business units (e.g. `team: payments`, `env: prod`, `cost-center: 410`).",
    question: "Which Google Cloud tagging mechanism propagates key-value metadata to billing export records for financial chargeback?",
    options: [
      { id: 'A', text: "Resource Labels" },
      { id: 'B', text: "Machine Type names" },
      { id: 'C', text: "Network Tags" },
      { id: 'D', text: "VPC Subnet names" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud `Labels` are key-value pairs attached to resources (VMs, buckets, datasets). Labels propagate directly into Cloud Billing export records in BigQuery, enabling granular cost allocation, department chargeback, and showback reports in Looker.",
    referenceUrl: "https://cloud.google.com/compute/docs/labeling-resources",
    tags: ["FinOps", "Labels", "Cost Allocation"]
  },
  {
    id: "gcp-pca-172",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Billing Subaccount Architecture for Resellers and Multi-Tenancy",
    scenario: "A managed service provider (MSP) manages Google Cloud projects for 50 distinct client companies. Each client needs isolated monthly invoices and separate billing credit terms under a single master billing agreement.",
    question: "Which Cloud Billing construct provides separate invoicing under a master Cloud Billing account?",
    options: [
      { id: 'A', text: "Prepaid debit cards per project" },
      { id: 'B', text: "Separate IAM organizations for each project" },
      { id: 'C', text: "Cloud Billing Subaccounts" },
      { id: 'D', text: "Multiple Google Workspace domains" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud `Billing Subaccounts` allow organizations and resellers to create separate billing structures beneath a single parent Master Billing Account. Each subaccount generates an independent invoice while consolidating credit terms under the parent contract.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/subaccounts",
    tags: ["Cloud Billing", "Subaccounts", "Multi-Tenancy"]
  },
  {
    id: "gcp-pca-173",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Architecture Framework: Reliability Pillar Principles",
    scenario: "An enterprise architect reviews an application design against the Google Cloud Architecture Framework. The application stores session state in local VM memory disks.",
    question: "Which principle of the Reliability pillar does this design violate?",
    options: [
      { id: 'A', text: "Designing stateless application tiers that externalize state to scalable managed databases or caches" },
      { id: 'B', text: "Automating infrastructure deployments with Terraform" },
      { id: 'C', text: "Using open-source software" },
      { id: 'D', text: "Deploying all VMs in a single availability zone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Google Cloud Architecture Framework `Reliability` pillar emphasizes designing stateless application components. Storing session state in local VM memory makes instances non-disposable and impedes autoscaling and automated zone failover. State must be externalized to managed stores like Cloud Memorystore or Spanner.",
    referenceUrl: "https://cloud.google.com/architecture/framework/reliability",
    tags: ["Architecture Framework", "Reliability", "Stateless Architecture"]
  },
  {
    id: "gcp-pca-174",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA Hierarchy",
    scenario: "An engineering team defines service metrics. The team measures the proportion of HTTP GET requests returning 200 OK within 300ms over 30 days, targets 99.9%, and commits to customer refunds if availability drops below 99.5%.",
    question: "Which terms correctly identify these three metrics respectively?",
    options: [
      { id: 'A', text: "All three terms are identical in SRE practice" },
      { id: 'B', text: "SLA is the measurement; SLI is the target; SLO is the contract" },
      { id: 'C', text: "SLO is the measurement; SLA is the target; SLI is the contract" },
      { id: 'D', text: "SLI is the actual measurement; SLO is the internal 99.9% target; SLA is the contractual 99.5% customer commitment" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Google SRE terminology: `Service Level Indicator` (SLI) is a quantifiable metric of service performance (e.g. latency, error rate). `Service Level Objective` (SLO) is the internal target reliability goal (e.g. 99.9%). `Service Level Agreement` (SLA) is the legal contractual commitment with financial consequences.",
    referenceUrl: "https://cloud.google.com/architecture/framework/reliability/define-service-reliability-goals",
    tags: ["SRE", "SLI/SLO/SLA", "Reliability"]
  },
  {
    id: "gcp-pca-175",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Error Budgets and Feature Release Governance",
    scenario: "A software engineering team has an availability SLO of 99.9% over a 30-day window, providing an Error Budget of 0.1% (43 minutes of allowable downtime). A series of bad releases completely exhausts the error budget.",
    question: "According to Google SRE principles, what policy should be enforced when an error budget is exhausted?",
    options: [
      { id: 'A', text: "Halt non-critical feature releases and redirect engineering effort toward reliability, bug fixes, and operational resilience until the budget recovers" },
      { id: 'B', text: "Lower the SLO to 99.0% immediately" },
      { id: 'C', text: "Terminate the on-call engineers" },
      { id: 'D', text: "Ignore the error budget and continue releasing features" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An `Error Budget` aligns incentives between product developers (velocity) and SREs (stability). When the error budget is exhausted, the release gate is locked: new feature deployments are paused, and engineering effort is dedicated entirely to improving system stability, testing, and observability.",
    referenceUrl: "https://cloud.google.com/architecture/framework/reliability/define-service-reliability-goals#error-budgets",
    tags: ["SRE", "Error Budget", "Governance"]
  }
];

export default GCP_PCA_QUESTIONS_7;
