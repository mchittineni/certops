export const GCP_PCA_QUESTIONS_4 = [
  {
    id: "gcp-pca-76",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud SQL Auth Proxy for Secure Passwordless & Encrypted Connectivity",
    scenario: "A developer on a local laptop needs to connect securely to a private Cloud SQL instance in a Google Cloud VPC without whitelisting the developer's home public IP address or exposing public database ports.",
    question: "Which Google Cloud tool provides an encrypted, authenticated local tunnel to Cloud SQL using IAM credentials?",
    options: [
      { id: 'A', text: "SSH port forwarding through an open bastion with root keys" },
      { id: 'B', text: "VPC Network Peering" },
      { id: 'C', text: "Cloud VPN" },
      { id: 'D', text: "Cloud SQL Auth Proxy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Cloud SQL Auth Proxy` is a client binary that runs locally or in Kubernetes pods. It authenticates using Google Cloud IAM credentials, establishes a mutual TLS (mTLS) tunnel to Cloud SQL, and exposes a local port for standard database client connections without exposing public IPs.",
    referenceUrl: "https://cloud.google.com/sql/docs/mysql/sql-proxy",
    tags: ["Cloud SQL", "Auth Proxy", "Security"]
  },
  {
    id: "gcp-pca-77",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router Dynamic Routing: Regional vs Global Routing Modes",
    scenario: "An enterprise uses a Dedicated Interconnect in `us-east1` connected to an on-premises data center via Cloud Router running BGP. Compute Engine VMs in `europe-west1` also need to communicate with the on-premises network.",
    question: "Which VPC dynamic routing mode must be enabled to allow Cloud Router to advertise subnets across all Google Cloud regions?",
    options: [
      { id: 'A', text: "Global Dynamic Routing mode" },
      { id: 'B', text: "Static route configuration" },
      { id: 'C', text: "Regional Dynamic Routing mode" },
      { id: 'D', text: "VPC Peering mode" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Google Cloud VPC network has two dynamic routing modes: `Regional` (Cloud Router advertises routes only for subnets within its local region) and `Global` (Cloud Router advertises and learns routes for subnets across all regions in the VPC globally).",
    referenceUrl: "https://cloud.google.com/router/docs/concepts/overview#dynamic-routing-mode",
    tags: ["VPC", "Cloud Router", "Dynamic Routing"]
  },
  {
    id: "gcp-pca-78",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Firewall Rules: Network Tags vs Service Accounts Targeting",
    scenario: "A security architect is designing firewall rules in a Shared VPC where development teams have permissions to edit instance metadata on their own Compute Engine VMs.",
    question: "Why should the security architect use Service Accounts instead of Network Tags for target and source firewall filtering?",
    options: [
      { id: 'A', text: "Network tags can be modified by instance administrators (allowing unauthorized firewall bypass), whereas Service Account assignment is governed by strict IAM permissions" },
      { id: 'B', text: "Network tags support only UDP traffic" },
      { id: 'C', text: "Service accounts can only be used on Windows VMs" },
      { id: 'D', text: "Network tags increase latency by 50%" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Firewall rules filtering by `Service Accounts` provide stronger security than `Network Tags`. Any user with `compute.instances.setMetadata` can add or change network tags to bypass firewall rules. Service accounts require `iam.serviceAccountUser` privileges, preventing unauthorized security group elevation.",
    referenceUrl: "https://cloud.google.com/vpc/docs/firewalls#service-accounts-vs-tags",
    tags: ["VPC", "Firewall Rules", "Service Accounts"]
  },
  {
    id: "gcp-pca-79",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Packet Mirroring for Intrusion Detection Systems (IDS)",
    scenario: "A corporate cybersecurity operations center needs to inspect all raw network packet payloads entering and leaving critical production database VMs without installing agents inside the guest OS.",
    question: "Which Google Cloud networking capability clones and forwards full network traffic to third-party security collectors?",
    options: [
      { id: 'A', text: "VPC Packet Mirroring" },
      { id: 'B', text: "VPC Flow Logs" },
      { id: 'C', text: "Cloud Armor Security Policy" },
      { id: 'D', text: "Cloud Trace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Packet Mirroring clones all traffic (including packet headers and payloads) from specified VM instances, subnets, or tags and forwards it to an internal load balancer fronting security appliances (such as Zeek or Suricata) for deep packet inspection and intrusion detection.",
    referenceUrl: "https://cloud.google.com/vpc/docs/packet-mirroring",
    tags: ["Networking", "Packet Mirroring", "IDS/IPS"]
  },
  {
    id: "gcp-pca-80",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "VPC Flow Logs for Network Traffic Analysis and Troubleshooting",
    scenario: "A network engineer is investigating unexpected egress bandwidth charges and diagnosing dropped connections between subnets. The engineer needs sample records containing source IP, destination IP, port, and packet counts.",
    question: "Which VPC feature captures network telemetry metadata for TCP and UDP flows?",
    options: [
      { id: 'A', text: "VPC Flow Logs" },
      { id: 'B', text: "Packet Mirroring" },
      { id: 'C', text: "Cloud Audit Logs" },
      { id: 'D', text: "Compute Engine Activity Logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Flow Logs record network telemetry metadata for TCP and UDP flows sent and received by VM instances. Logs include source and destination IPs, ports, protocol, and packet/byte counts, which can be streamed to Cloud Logging or BigQuery for traffic forensics and cost analysis.",
    referenceUrl: "https://cloud.google.com/vpc/docs/flow-logs",
    tags: ["VPC", "Flow Logs", "Troubleshooting"]
  },
  {
    id: "gcp-pca-81",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Terraform Provider and Remote State in Cloud Storage",
    scenario: "A DevOps team uses Terraform to provision infrastructure across 50 Google Cloud projects. The state file contains sensitive database passwords and resource IDs that must be locked during concurrent deployments.",
    question: "Which Terraform backend configuration should the team use for state storage and locking?",
    options: [
      { id: 'A', text: "The gcs backend (storing state in a private Cloud Storage bucket with object versioning enabled)" },
      { id: 'B', text: "Local terraform.tfstate on developer laptops" },
      { id: 'C', text: "Public GitHub repository" },
      { id: 'D', text: "Compute Engine metadata" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Terraform's `gcs` backend stores state files remotely in a Google Cloud Storage bucket. GCS natively supports state locking via generation numbers, preventing concurrent modification races, and bucket versioning provides rollback protection.",
    referenceUrl: "https://cloud.google.com/docs/terraform/resource-management/store-state",
    tags: ["Terraform", "GCS Backend", "IaC"]
  },
  {
    id: "gcp-pca-82",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Foundation Toolkit (CFT) and Blueprints for Best-Practice IaC",
    scenario: "An enterprise architect wants to build a standardized landing zone on Google Cloud following Google-recommended enterprise security, network, and IAM baselines.",
    question: "Which Google-maintained collection of modular Terraform blueprints accelerates compliant landing zone deployments?",
    options: [
      { id: 'A', text: "Google Cloud Shell scripts" },
      { id: 'B', text: "Cloud Deployment Manager legacy templates" },
      { id: 'C', text: "Cloud Foundation Toolkit (CFT)" },
      { id: 'D', text: "Kubernetes kustomize alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Cloud Foundation Toolkit (CFT) provides Google-authored, modular Terraform templates and best-practice blueprints for deploying enterprise landing zones, including hierarchical organization structures, Shared VPCs, logging exports, and security guardrails.",
    referenceUrl: "https://cloud.google.com/foundation-toolkit",
    tags: ["CFT", "Terraform", "Landing Zone"]
  },
  {
    id: "gcp-pca-83",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Config Connector for Kubernetes-Native GCP Resource Management",
    scenario: "A platform engineering team manages applications on GKE. The team wants developers to provision Cloud Storage buckets, Cloud SQL databases, and Pub/Sub topics using standard Kubernetes YAML manifests (`kubectl apply`).",
    question: "Which Kubernetes add-on maps Google Cloud resources to Kubernetes Custom Resource Definitions (CRDs)?",
    options: [
      { id: 'A', text: "Config Connector" },
      { id: 'B', text: "Helm Package Manager" },
      { id: 'C', text: "Anthos Service Mesh" },
      { id: 'D', text: "KEDA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Config Connector is an open-source Kubernetes operator developed by Google that allows teams to manage Google Cloud infrastructure using declarative Kubernetes manifests and CRDs, enabling unified GitOps workflows for both applications and cloud infrastructure.",
    referenceUrl: "https://cloud.google.com/config-connector/docs/overview",
    tags: ["GKE", "Config Connector", "GitOps"]
  },
  {
    id: "gcp-pca-84",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Startup Scripts and Cloud-Init",
    scenario: "An automated deployment pipeline provisions Compute Engine VMs that must install an application package, run database migrations, and signal completion upon first boot.",
    question: "Where should the initialization bash script be defined in the instance configuration?",
    options: [
      { id: 'A', text: "In the instance metadata under the key startup-script (or startup-script-url)" },
      { id: 'B', text: "In the VM /boot directory on persistent disk" },
      { id: 'C', text: "In the Google Cloud console notification settings" },
      { id: 'D', text: "In Cloud DNS TXT records" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine executes scripts specified in instance metadata under the key `startup-script` (or fetches from `startup-script-url` in Cloud Storage) every time the VM boots, automating package installation and host configuration.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/startup-scripts/linux",
    tags: ["Compute Engine", "Startup Scripts", "Automation"]
  },
  {
    id: "gcp-pca-85",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Nested Virtualization for Hypervisors",
    scenario: "A software testing team needs to run VMware ESXi, Hyper-V, or KVM hypervisors inside a Compute Engine virtual machine to run nested guest VMs for emulation.",
    question: "Which Compute Engine feature enables hardware virtualization extensions inside VM instances?",
    options: [
      { id: 'A', text: "Shielded VMs" },
      { id: 'B', text: "Sole-Tenant Nodes" },
      { id: 'C', text: "Nested Virtualization" },
      { id: 'D', text: "Confidential Computing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Compute Engine supports `Nested Virtualization`, allowing users to run hardware-accelerated hypervisors (such as KVM) inside Compute Engine Linux instances, enabling dev/test environments for virtualization platforms and container engines.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/nested-virtualization/overview",
    tags: ["Compute Engine", "Nested Virtualization", "Hypervisors"]
  },
  {
    id: "gcp-pca-86",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Workload Identity for Secure Pod-to-GCP-API Access",
    scenario: "A pod running inside a GKE cluster needs to read files from a private Cloud Storage bucket without storing static service account JSON keys inside container images or Kubernetes secrets.",
    question: "Which GKE security feature maps Kubernetes ServiceAccounts to Google Cloud Service Accounts?",
    options: [
      { id: 'A', text: "Cloud Endpoints proxy" },
      { id: 'B', text: "Embedding service account key files in ConfigMaps" },
      { id: 'C', text: "Node Service Accounts (Compute Engine default service account)" },
      { id: 'D', text: "Workload Identity" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Workload Identity` is the recommended best practice for authenticating GKE workloads to Google Cloud APIs. It binds a Kubernetes ServiceAccount (KSA) to a Google ServiceAccount (GSA), enabling pods to securely acquire short-lived OAuth 2.0 access tokens via the GKE metadata server.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
    tags: ["GKE", "Workload Identity", "Security"]
  },
  {
    id: "gcp-pca-87",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Instance Templates vs Machine Images",
    scenario: "A DevOps engineer wants to create a golden baseline containing both instance configuration metadata (machine type, network tags, startup scripts) and a complete boot disk snapshot with pre-installed enterprise software.",
    question: "Which Compute Engine resource captures both VM configuration properties and all disk block states into a unified deployable asset?",
    options: [
      { id: 'A', text: "Compute Engine Machine Image" },
      { id: 'B', text: "Instance Template alone (without machine image)" },
      { id: 'C', text: "Custom Disk Snapshot alone" },
      { id: 'D', text: "Custom Machine Type" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Compute Engine `Machine Image` stores all configuration, metadata, permissions, and exact block-level data from multiple disks of a VM instance. An `Instance Template` defines configuration but points to external disks/images.",
    referenceUrl: "https://cloud.google.com/compute/docs/machine-images",
    tags: ["Compute Engine", "Machine Images", "Golden Images"]
  },
  {
    id: "gcp-pca-88",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud SQL Private IP and Serverless VPC Access Connector",
    scenario: "A serverless application deployed on Cloud Run needs to connect to a Cloud SQL PostgreSQL database configured with Private IP only.",
    question: "Which networking resource enables serverless services (Cloud Run, Cloud Functions) to route traffic into private VPC subnets?",
    options: [
      { id: 'A', text: "External Application Load Balancer" },
      { id: 'B', text: "VPC Network Peering alone" },
      { id: 'C', text: "Cloud NAT" },
      { id: 'D', text: "A Serverless VPC Access Connector (or Direct VPC Egress)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Serverless services like Cloud Run and Cloud Functions do not have native network interfaces in your VPC. A `Serverless VPC Access Connector` (or Direct VPC Egress) provides an egress bridge that routes serverless requests privately into your VPC network to reach private Cloud SQL instances.",
    referenceUrl: "https://cloud.google.com/vpc/docs/serverless-vpc-access",
    tags: ["Cloud Run", "Serverless VPC Access", "Networking"]
  },
  {
    id: "gcp-pca-89",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Spanner Backup and Restore vs Export to Cloud Storage",
    scenario: "A database administrator requires daily transactional backups of a Cloud Spanner database that can be restored with 100% relational integrity in minutes without requiring compute re-indexing.",
    question: "Which Spanner feature creates consistent point-in-time binary backups managed directly by the database service?",
    options: [
      { id: 'A', text: "Nightly disk snapshots" },
      { id: 'B', text: "Copying table data with SQL INSERT queries" },
      { id: 'C', text: "Cloud Spanner Built-in Backup and Restore" },
      { id: 'D', text: "Export to Cloud Storage via Dataflow (Avro format)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Spanner `Built-in Backup and Restore` creates fully consistent, point-in-time binary snapshots of a database directly on the storage layer. Backups retain schema and secondary indexes, require zero compute workers, and restore much faster than Dataflow Avro exports.",
    referenceUrl: "https://cloud.google.com/spanner/docs/backup",
    tags: ["Spanner", "Backup and Restore", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-90",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Spanner Point-in-Time Recovery (PITR) Version Retention",
    scenario: "A developer mistakenly runs a SQL UPDATE command that corrupts data in a production Cloud Spanner table. The error is noticed 30 minutes later.",
    question: "Which Cloud Spanner capability allows querying or restoring table state at an exact timestamp in the past (up to 7 days)?",
    options: [
      { id: 'A', text: "Database backups taken last night" },
      { id: 'B', text: "Change Streams alone" },
      { id: 'C', text: "Cloud Storage Versioning" },
      { id: 'D', text: "Point-in-Time Recovery (PITR) with version_retention_period" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Spanner `Point-in-Time Recovery` (PITR) retains historical versions of data for a configurable `version_retention_period` (up to 7 days). Developers can execute queries specifying an exact historical timestamp (stale read) or restore the database to that exact minute.",
    referenceUrl: "https://cloud.google.com/spanner/docs/pitr",
    tags: ["Spanner", "PITR", "Data Recovery"]
  },
  {
    id: "gcp-pca-91",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Bigtable Key Visualizer for Diagnostic Heatmaps",
    scenario: "A Bigtable administrator investigates intermittent latency spikes across a 10-node cluster. The team needs to visualize access patterns and determine which row key ranges are generating excessive traffic.",
    question: "Which built-in Cloud Bigtable diagnostic tool renders interactive heatmaps of read and write operations across row keys?",
    options: [
      { id: 'A', text: "Cloud Profiler" },
      { id: 'B', text: "Bigtable Query Optimizer" },
      { id: 'C', text: "Key Visualizer" },
      { id: 'D', text: "Cloud Monitoring Metrics Explorer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Key Visualizer` is an interactive diagnostic tool built into the Cloud Bigtable console. It renders visual heatmaps showing read/write pressure, IOPS, and storage sizes across the entire row key space over time, helping administrators spot hot partitions immediately.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/key-visualizer-overview",
    tags: ["Bigtable", "Key Visualizer", "Performance Tuning"]
  },
  {
    id: "gcp-pca-92",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Local SSD Data Persistence on Live Migration",
    scenario: "A developer is evaluating Compute Engine Local SSDs for a high-performance in-memory caching tier.",
    question: "What happens to the data stored on an attached Local SSD when Google performs host live migration?",
    options: [
      { id: 'A', text: "Local SSD data is permanently erased immediately" },
      { id: 'B', text: "Local SSD data is preserved and transparently migrated along with the VM instance during live migration" },
      { id: 'C', text: "The VM instance is terminated and cannot restart" },
      { id: 'D', text: "The Local SSD is converted to a persistent disk automatically" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "During standard live migration maintenance events, Google Cloud transparently migrates both the VM state and attached Local SSD data to the new physical host, preserving the contents of the Local SSD without data loss.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/local-ssd#data_retention_for_local_ssds",
    tags: ["Compute Engine", "Local SSD", "Live Migration"]
  },
  {
    id: "gcp-pca-93",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Local SSD Data Loss on User-Initiated VM Stop",
    scenario: "A developer stops a Compute Engine virtual machine (`gcloud compute instances stop`) that has 2 attached Local SSD disks.",
    question: "What happens to the data stored on the Local SSDs upon instance termination?",
    options: [
      { id: 'A', text: "The Local SSD data is permanently discarded and cannot be recovered because Local SSDs cannot be detached or preserved when a VM stops" },
      { id: 'B', text: "The Local SSD data is backed up to Cloud Storage automatically" },
      { id: 'C', text: "The data is retained until the VM is restarted" },
      { id: 'D', text: "The Local SSD remains attached to the project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Local SSDs are ephemeral and physically attached to the host server. Stopping a VM (`instances stop`) terminates the host reservation and completely discards all data on attached Local SSDs. Applications must sync vital data to persistent disks before stopping.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/local-ssd#data_retention_for_local_ssds",
    tags: ["Compute Engine", "Local SSD", "Ephemeral"]
  },
  {
    id: "gcp-pca-94",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Turbo Replication for Dual-Region RPO",
    scenario: "A financial banking platform stores transaction receipts in a Cloud Storage Dual-Region bucket. Compliance requires 100% of newly written data to replicate to the paired region within 15 minutes.",
    question: "Which Cloud Storage feature provides a predictable 15-minute recovery point objective (RPO) for dual-region buckets?",
    options: [
      { id: 'A', text: "Storage Transfer Service" },
      { id: 'B', text: "Standard Dual-Region replication" },
      { id: 'C', text: "Turbo Replication" },
      { id: 'D', text: "Cloud Storage Autoclass" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Storage `Turbo Replication` is designed for dual-region buckets requiring strict business continuity. It guarantees that 100% of newly written objects are replicated to the secondary paired region within 15 minutes, backed by a service level agreement (SLA).",
    referenceUrl: "https://cloud.google.com/storage/docs/turbo-replication",
    tags: ["Cloud Storage", "Turbo Replication", "Business Continuity"]
  },
  {
    id: "gcp-pca-95",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Object Versioning and Noncurrent Lifecycle Rules",
    scenario: "A document repository enables Object Versioning on a Cloud Storage bucket. When users overwrite documents, previous versions accumulate, driving up storage bills.",
    question: "Which Lifecycle Management rule automatically purges older versions while preserving the latest active object?",
    options: [
      { id: 'A', text: "Action: Delete with Condition: NoncurrentVersion and DaysSinceNoncurrentTime > 30" },
      { id: 'B', text: "Action: SetStorageClass with Condition: MatchesStorageClass: Standard" },
      { id: 'C', text: "Action: Delete with Condition: Age > 30" },
      { id: 'D', text: "Disable Object Versioning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When Object Versioning is enabled, overwritten objects become noncurrent versions. Applying a lifecycle rule with condition `NoncurrentVersion` (e.g. `DaysSinceNoncurrentTime: 30` or `NumNewerVersions: 2`) automatically purges historical revisions without affecting the live current version.",
    referenceUrl: "https://cloud.google.com/storage/docs/lifecycle#noncurrent-version",
    tags: ["Cloud Storage", "Versioning", "Lifecycle Rules"]
  },
  {
    id: "gcp-pca-96",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Bigtable Cluster Autoscaling (CPU and Storage Target)",
    scenario: "A Bigtable cluster experiences sudden surges during batch data imports. The operations team wants the cluster to scale nodes automatically between 3 and 20 nodes based on CPU utilization.",
    question: "Which built-in Cloud Bigtable feature automatically adjusts node counts to maintain target CPU and storage utilization?",
    options: [
      { id: 'A', text: "Compute Engine Autoscaler" },
      { id: 'B', text: "Cloud Monitoring Alert with Cloud Function" },
      { id: 'C', text: "GKE Horizontal Pod Autoscaler" },
      { id: 'D', text: "Bigtable Autoscaling" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Bigtable supports native `Autoscaling`. Administrators specify minimum and maximum node limits and a target CPU utilization (e.g. 60%). Bigtable automatically adds or removes nodes dynamically based on workload demand, optimizing performance and cost.",
    referenceUrl: "https://cloud.google.com/bigtable/docs/autoscaling",
    tags: ["Bigtable", "Autoscaling", "Capacity Planning"]
  },
  {
    id: "gcp-pca-97",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Node Groups and Overcommit",
    scenario: "An enterprise migrates legacy VMware workloads to Compute Engine Sole-Tenant Nodes. To maximize hardware utilization, the architect wants to overcommit CPU allocations across non-critical development VMs.",
    question: "Which feature allows allocating more vCPUs across instances than physically available on a Sole-Tenant Node?",
    options: [
      { id: 'A', text: "CPU Overcommit on Sole-Tenant Nodes" },
      { id: 'B', text: "Custom machine types alone" },
      { id: 'C', text: "Shared-core e2 instances" },
      { id: 'D', text: "Spot VMs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine supports `CPU Overcommit` on Sole-Tenant Nodes. It allows administrators to launch VMs with total requested vCPUs exceeding the physical core count (up to 2x overcommit), reducing infrastructure costs for workloads with bursty, low-average CPU utilization.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/cpu-overcommit",
    tags: ["Compute Engine", "Sole-Tenant", "Overcommit"]
  },
  {
    id: "gcp-pca-98",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Managed Service for Prometheus (GMP) on GKE",
    scenario: "A platform team runs 20 GKE clusters and uses Prometheus for monitoring. Managing individual Prometheus server storage, high-availability scraping, and multi-cluster metric federation has become an operational burden.",
    question: "Which Google Cloud managed solution provides scalable, serverless Prometheus metric collection and storage?",
    options: [
      { id: 'A', text: "Google Cloud Managed Service for Prometheus (GMP)" },
      { id: 'B', text: "Cloud Monitoring custom metrics API alone" },
      { id: 'C', text: "Self-hosted Thanos cluster on VMs" },
      { id: 'D', text: "Datadog agent alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Managed Service for Prometheus (GMP) is Google's fully managed, multi-cloud monitoring solution built on the same planetary-scale infrastructure as Monarch. It scrapes Prometheus metrics natively from GKE and provides global querying across clusters using standard PromQL.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["GKE", "Prometheus", "GMP"]
  },
  {
    id: "gcp-pca-99",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Backup for Workload and Volume Disaster Recovery",
    scenario: "A DevOps team needs an automated disaster recovery solution for GKE that captures both Kubernetes resource manifests (Deployments, Services, ConfigMaps) and underlying Persistent Volume data.",
    question: "Which native GKE feature provides automated backup and restore for cluster workloads and storage volumes?",
    options: [
      { id: 'A', text: "Backup for GKE" },
      { id: 'B', text: "Compute Engine persistent disk snapshots alone" },
      { id: 'C', text: "Cloud Storage rsync cron job" },
      { id: 'D', text: "Velero running manually on VMs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Backup for GKE` is a fully managed service that protects GKE cluster workloads. It creates point-in-time backups capturing both Kubernetes declarative state (etcd metadata) and persistent volume data, supporting scheduled backups, encryption, and granular workload restoration.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/overview",
    tags: ["GKE", "Backup for GKE", "Disaster Recovery"]
  },
  {
    id: "gcp-pca-100",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Instance Groups Standby Pools for Instant Warm Scaling",
    scenario: "A gaming backend on Compute Engine requires hundreds of VMs to scale up within 10 seconds during tournament events. Normal VM cold boots take 60 seconds.",
    question: "Which Compute Engine Managed Instance Group feature maintains pre-initialized, stopped instances that resume instantly upon demand?",
    options: [
      { id: 'A', text: "Spot VMs alone" },
      { id: 'B', text: "MIG Standby Pools (Suspended or Stopped VMs)" },
      { id: 'C', text: "Cold boot auto-scaling" },
      { id: 'D', text: "Sole-tenant nodes alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Managed Instance Groups support `Standby Pools`. A standby pool keeps a designated number of pre-configured instances in a `STOPPED` or `SUSPENDED` state. When scaling events occur, the MIG resumes these warm instances in seconds rather than performing full cold boots.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/standby-pools-overview",
    tags: ["Compute Engine", "MIG", "Standby Pools"]
  }
];

export default GCP_PCA_QUESTIONS_4;
