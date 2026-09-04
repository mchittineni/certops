export const GCP_PCA_QUESTIONS_8 = [
  {
    id: "gcp-pca-176",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Capacity Planning and Quota Management in Google Cloud",
    scenario: "A retail enterprise prepares for a massive product launch anticipated to require 500 NVIDIA H100 GPUs and 2,000 vCPUs in `us-central1`. The default project quota is 16 GPUs.",
    question: "How should the cloud architect handle resource quotas ahead of the launch?",
    options: [
      { id: 'A', text: "Create 50 separate projects to bypass the quota" },
      { id: 'B', text: "Quotas only apply to free tier accounts" },
      { id: 'C', text: "Request an upfront Quota Increase through the Google Cloud console well in advance and work with Google account teams for capacity reservations" },
      { id: 'D', text: "Quotas scale up automatically when VMs are created" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud enforces resource `Quotas` to protect customers from unexpected billing and manage physical cloud capacity. Quotas are not dynamic: requesting significant capacity increases (especially for specialized compute or GPUs) requires submitting quota increase requests well in advance.",
    referenceUrl: "https://cloud.google.com/docs/quota",
    tags: ["Capacity Planning", "Quotas", "Operations"]
  },
  {
    id: "gcp-pca-177",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Compute Engine Committed Use Discount Sharing Across Projects",
    scenario: "An enterprise organization has a centralized billing account with 20 projects. Project A purchases a 100 vCPU Compute Engine Committed Use Discount (CUD) but only uses 40 vCPUs. Project B in the same region uses 80 vCPUs with no discount.",
    question: "How can the organization ensure Project B benefits from Project A's unused committed vCPUs?",
    options: [
      { id: 'A', text: "Enable Committed Use Discount Sharing at the Cloud Billing account level" },
      { id: 'B', text: "Move all VMs from Project B into Project A manually" },
      { id: 'C', text: "CUDs cannot be shared under any circumstances" },
      { id: 'D', text: "Export VMs to an on-premises datacenter" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud supports `Committed Use Discount Sharing` across all projects linked to the same Cloud Billing account. When enabled, any unused commitment in one project is automatically applied to eligible usage in other projects within the same region and billing account.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/cud-sharing",
    tags: ["FinOps", "CUD Sharing", "Cost Optimization"]
  },
  {
    id: "gcp-pca-178",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Anthos Config Management (ACM) for Multi-Cluster GitOps",
    scenario: "A platform team operates 10 GKE clusters across multi-cloud and on-premises environments. Security policies and RBAC roles must be synchronized automatically from a single Git repository.",
    question: "Which Google Cloud solution enforces declarative GitOps configuration and policy compliance across fleets of Kubernetes clusters?",
    options: [
      { id: 'A', text: "Jenkins running on Compute Engine" },
      { id: 'B', text: "Anthos Config Management (ACM) / Config Sync" },
      { id: 'C', text: "Cloud Build triggers alone" },
      { id: 'D', text: "Manual kubectl apply across every cluster" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Config Sync` (part of Anthos Config Management) is a GitOps service that continuously synchronizes declarative configurations, CRDs, and security policies from a central Git or OCI repository across all enrolled clusters, automatically correcting configuration drift.",
    referenceUrl: "https://cloud.google.com/anthos-config-management/docs/overview",
    tags: ["ACM", "GitOps", "Policy Enforcement"]
  },
  {
    id: "gcp-pca-179",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Database Migration Service (DMS) Heterogeneous vs Homogeneous",
    scenario: "An enterprise plans to migrate Oracle databases to Cloud SQL for PostgreSQL, and simultaneously migrate on-premises PostgreSQL databases to Cloud SQL for PostgreSQL.",
    question: "Which migration is classified as homogeneous and supported out-of-the-box by Database Migration Service without schema conversion?",
    options: [
      { id: 'A', text: "The Oracle to Cloud SQL for PostgreSQL migration (homogeneous)" },
      { id: 'B', text: "The on-premises PostgreSQL to Cloud SQL for PostgreSQL migration (homogeneous)" },
      { id: 'C', text: "Both migrations are homogeneous" },
      { id: 'D', text: "Neither migration is supported by DMS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Homogeneous migrations` involve migrating between the same database engines (e.g. MySQL to Cloud SQL MySQL, or PostgreSQL to Cloud SQL PostgreSQL). DMS natively handles homogeneous migrations with simple setup. Heterogeneous migrations (e.g. Oracle to PostgreSQL) require schema conversion and translation.",
    referenceUrl: "https://cloud.google.com/database-migration-service/docs/overview#homogeneous-migrations",
    tags: ["DMS", "Database Migration", "Homogeneous Migration"]
  },
  {
    id: "gcp-pca-180",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Deploy Execution Parameters and Targets Definition",
    scenario: "A platform engineering team is automating deployment pipelines using Google Cloud Deploy.",
    question: "Which configuration artifact defines the sequence of deployment stages (e.g. test -> staging -> prod) and execution rules?",
    options: [
      { id: 'A', text: "The Delivery Pipeline manifest (clouddeploy.yaml)" },
      { id: 'B', text: "The Kubernetes deployment.yaml file alone" },
      { id: 'C', text: "The cloudbuild.yaml file alone" },
      { id: 'D', text: "The Dockerfile" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Deploy uses a `Delivery Pipeline` declarative YAML manifest (`clouddeploy.yaml`). The pipeline defines the ordered sequence of stages (promotion targets), automated verification steps, and execution hooks governing the release progression.",
    referenceUrl: "https://cloud.google.com/deploy/docs/create-delivery-pipeline",
    tags: ["Cloud Deploy", "Delivery Pipeline", "Continuous Delivery"]
  },
  {
    id: "gcp-pca-181",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Managed Service for Microsoft Active Directory (Managed AD)",
    scenario: "An enterprise migrating Windows workloads to Google Cloud requires a fully managed, highly available Microsoft Active Directory domain with schema extensions and trusts to on-premises AD domains.",
    question: "Which Google Cloud managed service provisions real Windows Server domain controllers managed by Google?",
    options: [
      { id: 'A', text: "Cloud Identity alone" },
      { id: 'B', text: "Managed Service for Microsoft Active Directory (Managed AD)" },
      { id: 'C', text: "Google Identity Platform" },
      { id: 'D', text: "Firebase Authentication" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Managed Service for Microsoft Active Directory` (Managed AD) is a hardened, highly available Google Cloud service running actual Microsoft AD domain controllers on Windows Server. It provides native Active Directory group policies, Kerberos authentication, and forest trusts to on-premises AD.",
    referenceUrl: "https://cloud.google.com/managed-microsoft-ad/docs/overview",
    tags: ["Active Directory", "Managed AD", "Windows"]
  },
  {
    id: "gcp-pca-182",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cold Standby Disaster Recovery Cost and RTO Trade-off",
    scenario: "A non-critical historical archiving application accepts a Recovery Time Objective (RTO) of 24 hours and a Recovery Point Objective (RPO) of 24 hours.",
    question: "Which disaster recovery strategy achieves the lowest ongoing infrastructure cost?",
    options: [
      { id: 'A', text: "Cold Standby (Backup and Restore using daily Cloud Storage backups and scripted VM provisioning)" },
      { id: 'B', text: "Warm Standby (Pilot Light)" },
      { id: 'C', text: "Hot Active-Active multi-region" },
      { id: 'D', text: "Dual-region active replication" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Cold Standby` pattern maintains zero running compute instances in the secondary region during normal operations. Daily backups are stored in Cloud Storage. If a disaster occurs, automation scripts provision instances and restore database backups from storage, minimizing operational cost at the expense of higher RTO.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide#cold-standby",
    tags: ["Disaster Recovery", "Cold Standby", "Cost Optimization"]
  },
  {
    id: "gcp-pca-183",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Asset Inventory for Resource Governance and Auditing",
    scenario: "A chief compliance officer needs to query all compute instances, storage buckets, and IAM policy bindings across 1,000 projects at an exact historical timestamp (e.g. 30 days ago).",
    question: "Which Google Cloud metadata service provides point-in-time search and historical change monitoring across an entire organization?",
    options: [
      { id: 'A', text: "Cloud Asset Inventory" },
      { id: 'B', text: "Cloud Logging alone" },
      { id: 'C', text: "Resource Manager Folders" },
      { id: 'D', text: "Cloud Monitoring" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Asset Inventory` is a metadata inventory service that allows organizations to view, monitor, and analyze all Google Cloud assets across projects and organizations at a single point in time or evaluate historical changes over the past 35 days using SQL-like searches.",
    referenceUrl: "https://cloud.google.com/asset-inventory/docs/overview",
    tags: ["Cloud Asset Inventory", "Governance", "Compliance"]
  },
  {
    id: "gcp-pca-184",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "BigQuery Pricing Models: On-Demand vs Capacity (Slots)",
    scenario: "An enterprise data analytics department runs thousands of ad-hoc queries daily. Monthly query costs fluctuate wildly based on unpredictable bytes scanned by inexperienced analysts.",
    question: "Which BigQuery pricing model provides predictable monthly costs and dedicated query processing capacity?",
    options: [
      { id: 'A', text: "Capacity-based pricing (purchasing dedicated BigQuery Slots)" },
      { id: 'B', text: "On-Demand pricing ($6.25 per TB scanned)" },
      { id: 'C', text: "Cloud Storage pricing alone" },
      { id: 'D', text: "BigQuery BI Engine alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery offers two pricing models: `On-Demand` (pay per byte processed by each query, suitable for variable bursty workloads) and `Capacity-based` (purchasing dedicated query processing capacity measured in BigQuery Slots), providing predictable monthly expenditures and eliminating billing spikes.",
    referenceUrl: "https://cloud.google.com/bigquery/pricing#capacity_pricing",
    tags: ["BigQuery", "FinOps", "Slots"]
  },
  {
    id: "gcp-pca-185",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Database Migration: Continuous Replication vs One-Time Dump",
    scenario: "A mission-critical financial database can only tolerate a scheduled maintenance window of 10 minutes for cloud migration cutover. Migrating the full 8 TB dataset over the network takes 14 hours.",
    question: "Which migration execution strategy enables cutover within the 10-minute window?",
    options: [
      { id: 'A', text: "Perform an initial baseline sync followed by continuous replication (CDC) to keep databases synchronized, then execute a brief cutover" },
      { id: 'B', text: "Perform a single mysqldump during the 10-minute maintenance window" },
      { id: 'C', text: "Ship the hard drives via postal courier during the window" },
      { id: 'D', text: "Shut down the database and copy files using FTP" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For mission-critical workloads, continuous replication (Change Data Capture / CDC) copies the initial dataset while the source remains live, continuously streaming real-time mutations. During the 10-minute window, the team simply stops writes on the source, lets the stream catch up, and repoints clients.",
    referenceUrl: "https://cloud.google.com/database-migration-service/docs/mysql/continuous-migration-overview",
    tags: ["DMS", "CDC", "Zero Downtime"]
  },
  {
    id: "gcp-pca-186",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Build Substitute Variables and Secrets Integration",
    scenario: "A Cloud Build pipeline needs to inject dynamic values (such as git commit SHA and branch name) and sensitive API keys into a container build step without exposing secrets in build logs.",
    question: "Which combination of Cloud Build features handles dynamic variables and encrypted credentials respectively?",
    options: [
      { id: 'A', text: "Built-in Substitution Variables ($COMMIT_SHA, $BRANCH_NAME) and Secret Manager integration via availableSecrets" },
      { id: 'B', text: "Hardcoded strings in cloudbuild.yaml and plaintext GitHub secrets" },
      { id: 'C', text: "Compute Engine metadata for variables and public GCS for secrets" },
      { id: 'D', text: "Cloud Build does not support variables" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Build provides built-in `Substitution Variables` (e.g. `$COMMIT_SHA`, `$BRANCH_NAME`, `$REPO_NAME`) for dynamic pipeline parameters, and integrates natively with `Secret Manager` via `availableSecrets` to inject encrypted tokens securely into build steps.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/substitute-variable-values",
    tags: ["Cloud Build", "Substitutions", "Secret Manager"]
  },
  {
    id: "gcp-pca-187",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "FinOps Anomaly Detection and Automated Cost Alerts",
    scenario: "A runaway batch script creates 1,000 high-memory VMs in a test project overnight, threatening to consume the department's entire quarterly budget.",
    question: "Which Cloud Billing feature uses machine learning to detect unexpected spending spikes and sends alert emails automatically?",
    options: [
      { id: 'A', text: "Cloud Profiler" },
      { id: 'B', text: "Cloud Billing Cost Anomaly Detection" },
      { id: 'C', text: "Static budget thresholds alone" },
      { id: 'D', text: "Cloud Trace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Billing `Cost Anomaly Detection` uses machine learning models to identify sudden, unexpected spending spikes across projects. It automatically alerts billing administrators to anomalous resource consumption before billing thresholds are reached.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/cost-anomaly-detection",
    tags: ["FinOps", "Anomaly Detection", "Billing Alerts"]
  },
  {
    id: "gcp-pca-188",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Automated Disaster Recovery Testing via Chaos Engineering",
    scenario: "An enterprise architect is designing an automated disaster recovery validation plan to verify that GKE and Cloud Spanner failover procedures work reliably under real failure conditions.",
    question: "Which operational practice systematically injects infrastructure failures (e.g. killing zone nodes, dropping network links) into staging environments?",
    options: [
      { id: 'A', text: "Reviewing architectural diagrams annually" },
      { id: 'B', text: "Chaos Engineering (Fault Injection Testing)" },
      { id: 'C', text: "Manual desktop walkthroughs alone" },
      { id: 'D', text: "Static code analysis" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Chaos Engineering` is the practice of systematically introducing controlled faults (such as simulating zonal outages, terminating database replicas, or severing network routes) into staging or production systems to validate that automated failover and recovery systems perform as designed.",
    referenceUrl: "https://cloud.google.com/architecture/framework/reliability/test-for-reliability#chaos-engineering",
    tags: ["Reliability", "Chaos Engineering", "DR Testing"]
  },
  {
    id: "gcp-pca-189",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Deploy Canary with Automated Verify Phase",
    scenario: "A continuous delivery pipeline in Google Cloud Deploy executes a canary rollout to 25% of GKE pods. The pipeline must run automated integration tests against the canary before proceeding to 100%.",
    question: "Which Cloud Deploy feature executes automated post-rollout validation test containers?",
    options: [
      { id: 'A', text: "The Verify phase (verify: true in Delivery Pipeline)" },
      { id: 'B', text: "Manual approval gates only" },
      { id: 'C', text: "Cloud Build trigger after deploy" },
      { id: 'D', text: "Prometheus alerts alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Deploy includes a dedicated `Verify phase`. After deploying to a canary target, Cloud Deploy automatically runs specified test containers to execute synthetic HTTP transactions or integration suites; if tests fail, Cloud Deploy initiates an automated rollback.",
    referenceUrl: "https://cloud.google.com/deploy/docs/verify-deployment",
    tags: ["Cloud Deploy", "Verify Phase", "Canary Testing"]
  },
  {
    id: "gcp-pca-190",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "StratoZone Agentless Data Collector Deployment",
    scenario: "An enterprise wants to assess 1,000 on-premises Windows and Linux servers for cloud migration without installing intrusive software agents on every individual server.",
    question: "How does StratoZone collect server performance, CPU, memory, and disk utilization data without host agents?",
    options: [
      { id: 'A', text: "Installing a Python script on every host machine manually" },
      { id: 'B', text: "Deploying the StratoZone Agentless Data Collector appliance that queries servers via WMI (Windows) and SSH (Linux)" },
      { id: 'C', text: "Connecting servers directly to the public internet" },
      { id: 'D', text: "StratoZone requires physical hardware modifications to motherboard chips" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "StratoZone uses an `Agentless Data Collector` virtual appliance deployed in the customer's on-premises network. It connects to target servers remotely using standard management protocols (WMI/WinRM for Windows, SSH for Linux, and vCenter APIs for VMware) without installing local software agents.",
    referenceUrl: "https://cloud.google.com/stratozone/docs/collector-installation",
    tags: ["StratoZone", "Agentless Collection", "Migration Assessment"]
  },
  {
    id: "gcp-pca-191",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Architecture Framework: Cost Optimization Pillar",
    scenario: "A startup plans to deploy an analytical data warehouse. The team wants to minimize storage costs for historical event logs that are queried once per quarter.",
    question: "Which Google Cloud Architecture Framework design principle directly addresses this scenario?",
    options: [
      { id: 'A', text: "Disabling backups to save disk space" },
      { id: 'B', text: "Storing all data in memory-optimized Compute Engine instances" },
      { id: 'C', text: "Running dedicated Hadoop clusters 24/7" },
      { id: 'D', text: "Aligning data lifecycle with appropriate storage classes (e.g. Coldline or Archive storage)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Cost Optimization pillar of the Google Cloud Architecture Framework emphasizes aligning data storage classes to business access frequencies. Moving infrequently queried historical datasets to Coldline or Archive storage slashes storage fees without losing data availability.",
    referenceUrl: "https://cloud.google.com/architecture/framework/cost-optimization",
    tags: ["Architecture Framework", "Cost Optimization", "Storage Lifecycle"]
  },
  {
    id: "gcp-pca-192",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Compute Engine Committed Use Discounts: Resource vs Flexible Spend-Based",
    scenario: "A company uses diverse machine families (Compute-optimized C2, Memory-optimized M2, and General-purpose N2) across various regions. The team wants a unified commitment discount that applies across all machine types and regions.",
    question: "Which Committed Use Discount type provides flexibility across different VM machine series and locations?",
    options: [
      { id: 'A', text: "Flexible Spend-Based Committed Use Discounts" },
      { id: 'B', text: "Resource-Based Committed Use Discounts (tied to specific region and family)" },
      { id: 'C', text: "Sustained Use Discounts alone" },
      { id: 'D', text: "Spot VMs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Flexible Spend-Based CUDs` offer predictable discounts in exchange for committing to a minimum hourly dollar spend (e.g. $50/hour). They apply universally across multiple Compute Engine machine families, Cloud Run, and GKE, and across all regions, maximizing flexibility.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#spend_based",
    tags: ["FinOps", "CUDs", "Flexible Commitments"]
  },
  {
    id: "gcp-pca-193",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Google Cloud Organization Aggregated Log Sinks for Compliance",
    scenario: "An enterprise security operations center (SOC) requires all audit logs from all 200 projects in the organization to be aggregated into a single centralized BigQuery dataset for SIEM analysis.",
    question: "Which Google Cloud logging construct creates an organization-wide log export across all current and future child projects?",
    options: [
      { id: 'A', text: "Creating individual log sinks manually in every project" },
      { id: 'B', text: "An Aggregated Log Sink created at the Organization level with includeChildren = true" },
      { id: 'C', text: "Exporting logs using a cron job" },
      { id: 'D', text: "Setting up VPC peering between all projects" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An `Aggregated Log Sink` configured at the Organization (or Folder) level with `includeChildren: true` automatically captures and routes log entries generated by all existing and future child projects into a centralized destination (such as BigQuery, Pub/Sub, or Cloud Storage).",
    referenceUrl: "https://cloud.google.com/logging/docs/export/aggregated_sinks",
    tags: ["Cloud Logging", "Aggregated Sinks", "Compliance"]
  },
  {
    id: "gcp-pca-194",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "Cloud Build Dynamic Parallelism with Build Steps",
    scenario: "A CI/CD pipeline in Cloud Build compiles a frontend React application, a backend Go API, and a Python analytics service. All three builds are completely independent.",
    question: "How should the developer configure `cloudbuild.yaml` to execute these three build steps concurrently instead of sequentially?",
    options: [
      { id: 'A', text: "Run a shell script with three background threads" },
      { id: 'B', text: "Write three separate Cloud Build triggers" },
      { id: 'C', text: "Sequential execution is mandatory in Cloud Build" },
      { id: 'D', text: "Assign the same waitFor: ['-'] attribute to all three build steps" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By default, Cloud Build steps run sequentially. Adding `waitFor: ['-']` to a build step instructs Cloud Build to start that step immediately in parallel at the beginning of the build, significantly reducing total pipeline duration.",
    referenceUrl: "https://cloud.google.com/build/docs/configuring-builds/configure-build-step-order",
    tags: ["Cloud Build", "Parallelism", "Build Optimization"]
  },
  {
    id: "gcp-pca-195",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d4",
    domainName: "Analyzing and optimizing technical and business processes",
    title: "SRE Post-Mortems and Blameless Culture",
    scenario: "A major production outage occurs due to an incorrect database schema change executed by a senior engineer.",
    question: "What is the fundamental principle of a Google SRE post-mortem review?",
    options: [
      { id: 'A', text: "Punishing the engineer who executed the query" },
      { id: 'B', text: "Deleting all incident logs to avoid liability" },
      { id: 'C', text: "Preventing all future production releases permanently" },
      { id: 'D', text: "The post-mortem must be blameless: focusing on system design flaws, lack of guardrails, and automated recovery rather than blaming individuals" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Google SRE culture, post-mortems must be strictly `blameless`. Blameless post-mortems operate under the assumption that humans are fallible and mistakes are symptoms of insufficient guardrails. The focus is identifying root causes, improving automation, and adding prevention mechanisms.",
    referenceUrl: "https://cloud.google.com/architecture/framework/reliability/manage-incidents#blameless-postmortems",
    tags: ["SRE", "Post-Mortem", "Blameless Culture"]
  },
  {
    id: "gcp-pca-196",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Google Distributed Cloud (Anthos) Multi-Cluster Fleet Management",
    scenario: "An enterprise operates Kubernetes clusters on Google Cloud GKE, Amazon EKS, and on-premises VMware bare-metal servers. The platform team needs a unified control plane to manage, observe, and enforce security policies across all clusters.",
    question: "Which Google Cloud capability groups disparate Kubernetes clusters into a unified administrative Fleet?",
    options: [
      { id: 'A', text: "Cloud Load Balancing basic backends" },
      { id: 'B', text: "VPC Network Peering" },
      { id: 'C', text: "Compute Engine Unmanaged Instance Groups" },
      { id: 'D', text: "GKE Fleets (Anthos Fleets)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`GKE Fleets` (part of Google Distributed Cloud / Anthos) allow organizations to logically group Kubernetes clusters (GKE on Google Cloud, on-premises, AWS, or Azure) into a single administrative boundary, enabling fleet-wide features like Config Sync, Anthos Service Mesh, and unified observability.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/fleets-overview",
    tags: ["Anthos", "GKE Fleets", "Multi-Cloud"]
  },
  {
    id: "gcp-pca-197",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Anthos Service Mesh (ASM) for Zero-Trust mTLS and Observability",
    scenario: "A microservice architecture running across 3 GKE clusters requires mutual TLS (mTLS) encryption, automated certificate rotation, traffic splitting, and distributed tracing without modifying application code.",
    question: "Which Google Cloud managed service provides a fully supported Istio-based service mesh?",
    options: [
      { id: 'A', text: "Anthos Service Mesh (ASM) / Cloud Service Mesh" },
      { id: 'B', text: "Cloud Endpoints proxy" },
      { id: 'C', text: "Cloud Armor alone" },
      { id: 'D', text: "Compute Engine Load Balancer alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Anthos Service Mesh` (ASM) is Google's managed service mesh built on open-source Istio. It manages Envoy sidecars, enforces zero-trust mutual TLS (mTLS) authentication between services, provides traffic steering (canaries, fault injection), and exports distributed telemetry to Cloud Monitoring.",
    referenceUrl: "https://cloud.google.com/service-mesh/docs/overview",
    tags: ["Anthos Service Mesh", "Istio", "mTLS"]
  },
  {
    id: "gcp-pca-198",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Datastream for Serverless Change Data Capture (CDC)",
    scenario: "A retail enterprise needs to replicate database updates from an on-premises Oracle database into BigQuery in real time with sub-second latency for analytical reporting.",
    question: "Which Google Cloud managed serverless service streams change data capture (CDC) events directly into BigQuery or Cloud Storage?",
    options: [
      { id: 'A', text: "Datastream" },
      { id: 'B', text: "Cloud Data Fusion alone" },
      { id: 'C', text: "Cloud SQL Federations" },
      { id: 'D', text: "Storage Transfer Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Datastream` is a serverless, easy-to-use Change Data Capture (CDC) and replication service. It allows seamless, low-latency replication of database changes from MySQL, PostgreSQL, Oracle, and SQL Server into BigQuery, Cloud Storage, or Spanner with zero streaming infrastructure to manage.",
    referenceUrl: "https://cloud.google.com/datastream/docs/overview",
    tags: ["Datastream", "CDC", "BigQuery"]
  },
  {
    id: "gcp-pca-199",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Cloud Data Fusion for Visual Drag-and-Drop ETL Pipelines",
    scenario: "A team of business data analysts needs to build complex data integration pipelines extracting data from SAP, transforming columns, and loading them into BigQuery without writing Java or Python code.",
    question: "Which Google Cloud service provides a fully managed, code-free visual ETL platform built on CDAP?",
    options: [
      { id: 'A', text: "Cloud Functions" },
      { id: 'B', text: "Cloud Dataproc" },
      { id: 'C', text: "Cloud Data Fusion" },
      { id: 'D', text: "Cloud Dataflow" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Cloud Data Fusion` is a fully managed, cloud-native enterprise data integration service for building and managing ETL/ELT pipelines visually. Built on open-source CDAP, it provides a drag-and-drop web interface with hundreds of pre-configured transformation plugins.",
    referenceUrl: "https://cloud.google.com/data-fusion/docs/overview",
    tags: ["Cloud Data Fusion", "ETL", "No-Code"]
  },
  {
    id: "gcp-pca-200",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d5",
    domainName: "Managing implementations of cloud architecture",
    title: "Connect Agent for Hybrid Anthos Cluster Registration",
    scenario: "An enterprise installs Anthos on a bare-metal Kubernetes cluster in a private on-premises data center. The cluster has no inbound public IP address or inbound firewall ports open.",
    question: "How does the on-premises cluster establish a secure connection to the Google Cloud management console?",
    options: [
      { id: 'A', text: "By deploying the Google Cloud Connect Agent inside the cluster to initiate outbound encrypted connections to Google Cloud" },
      { id: 'B', text: "By opening inbound TCP port 443 through corporate firewalls" },
      { id: 'C', text: "By deploying a public Elastic IP on the on-premises switch" },
      { id: 'D', text: "By routing traffic over unencrypted telnet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Connect Agent` is a lightweight Kubernetes deployment running inside the customer's remote cluster. It establishes a secure, outbound-only encrypted tunnel to Google Cloud, enabling administrators to view and manage remote on-premises clusters through the Google Cloud console without opening inbound firewall ports.",
    referenceUrl: "https://cloud.google.com/anthos/docs/concepts/connect-overview",
    tags: ["Anthos", "Connect Agent", "Hybrid Cloud"]
  }
];

export default GCP_PCA_QUESTIONS_8;
