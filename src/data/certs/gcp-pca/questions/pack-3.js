export const GCP_PCA_QUESTIONS_3 = [
  {
    id: "gcp-pca-51",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Load Balancing: Internal TCP/UDP Load Balancer Mechanics",
    scenario: "A high-throughput backend database tier on Compute Engine requires load balancing across 10 internal VMs with zero proxy overhead, preserved client IP addresses, and line-rate performance.",
    question: "Which Google Cloud load balancer is implemented as a pass-through software-defined SDN load balancer for internal TCP/UDP traffic?",
    options: [
      { id: 'A', text: "Internal Passthrough Network Load Balancer (TCP/UDP)" },
      { id: 'B', text: "Internal Application Load Balancer (Proxy)" },
      { id: 'C', text: "External Application Load Balancer" },
      { id: 'D', text: "Classic Proxy Load Balancer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Internal Passthrough Network Load Balancer is a software-defined, non-proxy SDN load balancer built directly on Andromeda. It routes TCP and UDP traffic directly to backend VM network interfaces at wire speed, preserving original client IP addresses with near-zero latency.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/internal",
    tags: ["Networking", "Load Balancing", "Internal Passthrough"]
  },
  {
    id: "gcp-pca-52",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Armor Rate Limiting and Bot Management",
    scenario: "A ticket booking website is targeted by automated bots attempting credential stuffing attacks against the login form `/api/login` at 500 requests per second from cycling IP addresses.",
    question: "Which Cloud Armor feature throttles client requests exceeding defined threshold limits per IP?",
    options: [
      { id: 'A', text: "Cloud Armor Security Policy default rule" },
      { id: 'B', text: "Cloud Armor Rate Limiting Rules" },
      { id: 'C', text: "VPC Firewall Rules" },
      { id: 'D', text: "Cloud DNS Rate Limiting" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Armor `Rate Limiting Rules` allow architects to enforce maximum request thresholds (e.g. 10 requests per minute per client IP) on specific URL paths. When requests exceed the threshold, Cloud Armor can ban, throttle, or present a reCAPTCHA challenge.",
    referenceUrl: "https://cloud.google.com/armor/docs/rate-limiting-overview",
    tags: ["Cloud Armor", "Rate Limiting", "WAF"]
  },
  {
    id: "gcp-pca-53",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Spanner Change Streams for Reactive Data Pipelines",
    scenario: "A retail platform on Cloud Spanner needs to capture every insert, update, and delete on the `Orders` table in real time and stream changes to BigQuery and downstream microservices.",
    question: "Which built-in Cloud Spanner feature outputs an ordered change data capture (CDC) stream?",
    options: [
      { id: 'A', text: "Cloud Spanner Change Streams" },
      { id: 'B', text: "Cloud Spanner Backup and Restore" },
      { id: 'C', text: "BigQuery Federation" },
      { id: 'D', text: "Cloud Spanner Audit Logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Spanner `Change Streams` track and output real-time change data capture (inserts, updates, and deletes) on specific tables or entire databases. Change streams integrate with Cloud Dataflow to replicate or transform data into BigQuery, Pub/Sub, or Cloud Storage.",
    referenceUrl: "https://cloud.google.com/spanner/docs/change-streams",
    tags: ["Spanner", "Change Streams", "CDC"]
  },
  {
    id: "gcp-pca-54",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Google Cloud Pub/Sub Dead-Letter Topics (DLQ) Mechanics",
    scenario: "An asynchronous message processing pipeline uses Cloud Pub/Sub. A message containing corrupted XML payload causes consumer workers to crash repeatedly.",
    question: "Which Pub/Sub subscription configuration forwards unprocessable messages to a separate topic after 5 delivery attempts?",
    options: [
      { id: 'A', text: "Cloud Tasks retry queue" },
      { id: 'B', text: "Cloud Monitoring alert policy" },
      { id: 'C', text: "Dead-Letter Topic with maxDeliveryAttempts = 5" },
      { id: 'D', text: "Cloud Storage backup bucket" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Pub/Sub subscriptions support `Dead-Letter Topics`. When a message fails acknowledgment and exceeds `maxDeliveryAttempts` (5 to 100), Pub/Sub automatically routes the poison message to a designated dead-letter topic for offline debugging and triage.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/dead-letter-topics",
    tags: ["Pub/Sub", "Dead-Letter Topic", "Resilience"]
  },
  {
    id: "gcp-pca-55",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "GKE Node Auto-Provisioning (NAP) with Cluster Autoscaler",
    scenario: "A batch compute pipeline on GKE requires dynamic creation of diverse node pools (e.g. high-memory, GPU-enabled, and standard CPU) based on unpredictable pod resource requests.",
    question: "Which GKE feature automatically creates and deletes specialized node pools to satisfy pending pod specifications?",
    options: [
      { id: 'A', text: "GKE Node Auto-Provisioning (NAP)" },
      { id: 'B', text: "Vertical Pod Autoscaler (VPA)" },
      { id: 'C', text: "Manual NodePool creation" },
      { id: 'D', text: "Horizontal Pod Autoscaler (HPA)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE Node Auto-Provisioning (NAP) extends the Cluster Autoscaler by automatically provisioning new, specialized node pools with the optimal machine family, CPU, memory, and accelerators (GPUs) to accommodate unscheduled pods without manual cluster administrator intervention.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning",
    tags: ["GKE", "Node Auto-Provisioning", "Autoscaling"]
  },
  {
    id: "gcp-pca-56",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "BigQuery Materialized Views for Pre-Aggregated Query Speed",
    scenario: "A financial dashboard runs complex aggregate queries with multiple SUM and GROUP BY calculations on a 100-billion-row BigQuery table every minute.",
    question: "Which BigQuery feature precomputes and periodically refreshes query aggregates while transparently rewriting incoming queries for maximum performance?",
    options: [
      { id: 'A', text: "BigQuery Materialized Views" },
      { id: 'B', text: "Standard BigQuery Views" },
      { id: 'C', text: "Scheduled Queries into separate tables" },
      { id: 'D', text: "External BigQuery Tables" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery `Materialized Views` are precomputed views that periodically cache the results of a query for increased performance and efficiency. BigQuery uses smart tuning: if a query can be satisfied by a materialized view, BigQuery automatically reroutes the query to read the precomputed data.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/materialized-views-intro",
    tags: ["BigQuery", "Materialized Views", "Performance"]
  },
  {
    id: "gcp-pca-57",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Storage Retention Policies and Bucket Lock",
    scenario: "An investment firm must comply with SEC Rule 17a-4, which mandates that transaction audit logs in Cloud Storage must be stored immutably and cannot be modified or deleted by anyone for 7 years.",
    question: "Which Cloud Storage feature enforces Write Once, Read Many (WORM) compliance with an irreversible lock?",
    options: [
      { id: 'A', text: "Cloud Storage Customer Managed Keys" },
      { id: 'B', text: "IAM Deny policies alone" },
      { id: 'C', text: "Bucket Retention Policy with Bucket Lock permanently applied" },
      { id: 'D', text: "Object Versioning alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Storage `Bucket Lock` locks a bucket retention policy permanently. Once locked, the retention policy cannot be reduced, modified, or removed, and no user or Google administrator can delete the bucket or its objects until the retention period elapses, fulfilling strict regulatory WORM mandates.",
    referenceUrl: "https://cloud.google.com/storage/docs/bucket-lock",
    tags: ["Cloud Storage", "Bucket Lock", "Compliance"]
  },
  {
    id: "gcp-pca-58",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud SQL Cross-Region Disaster Recovery Promotion",
    scenario: "A primary Cloud SQL database in `us-central1` suffers a catastrophic regional outage. The architect needs to restore database operations in `us-east1` where an asynchronous cross-region read replica is running.",
    question: "Which operational action restores read-write database service in the secondary region?",
    options: [
      { id: 'A', text: "Wait for Google to restore the primary region" },
      { id: 'B', text: "Promote the cross-region read replica in us-east1 to become a standalone read-write primary database" },
      { id: 'C', text: "Restart the read replica instance" },
      { id: 'D', text: "Create a new Cloud SQL instance and restore from yesterday's daily backup" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Cloud SQL disaster recovery planning, promoting a cross-region read replica breaks replication and elevates the replica into an independent, fully functional read-write primary database instance, achieving rapid RTO during regional disasters.",
    referenceUrl: "https://cloud.google.com/sql/docs/postgres/replication/cross-region-replicas#disaster-recovery",
    tags: ["Cloud SQL", "Disaster Recovery", "Replica Promotion"]
  },
  {
    id: "gcp-pca-59",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Cloud Endpoints vs Apigee Architectural Decision",
    scenario: "An enterprise organization needs an enterprise API management platform that supports developer onboarding portals, API monetization, rate-limit billing, OAuth 2.0 policy authoring, and analytics across multi-cloud environments.",
    question: "Which Google Cloud API platform is designed for full-lifecycle enterprise API management and monetization?",
    options: [
      { id: 'A', text: "Global Application Load Balancer" },
      { id: 'B', text: "Cloud Endpoints (ESPv2)" },
      { id: 'C', text: "Apigee API Management" },
      { id: 'D', text: "Cloud Run direct endpoints" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apigee is Google Cloud's comprehensive API management platform designed for full-lifecycle API governance, partner developer portals, monetization, threat protection, and multi-cloud deployment. Cloud Endpoints is a lightweight gRPC/OpenAPI proxy designed for service-to-service communication.",
    referenceUrl: "https://cloud.google.com/apigee/docs/api-platform/get-started/what-is-apigee",
    tags: ["Apigee", "API Management", "Enterprise"]
  },
  {
    id: "gcp-pca-60",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d1",
    domainName: "Designing and planning a cloud solution architecture",
    title: "Google Cloud Identity and Access Management (IAM) Roles Hierarchy",
    scenario: "A junior developer requires permission to view Compute Engine instance metadata and start/stop specific VMs in a staging project, without having permissions to modify networking or IAM roles.",
    question: "Which IAM role type adheres to the principle of least privilege for this requirement?",
    options: [
      { id: 'A', text: "Primitive Viewer role" },
      { id: 'B', text: "Predefined or Custom IAM Roles (e.g. roles/compute.instanceAdmin.v1)" },
      { id: 'C', text: "Primitive Editor role" },
      { id: 'D', text: "Primitive Owner role" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud IAM categorizes roles into Primitive (Owner, Editor, Viewer - coarse-grained and risky), Predefined (fine-grained, service-specific, managed by Google), and Custom (user-curated granular permissions). Architects should always prefer Predefined or Custom roles for least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles",
    tags: ["IAM", "Least Privilege", "Security"]
  },
  {
    id: "gcp-pca-61",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Managed Instance Group (MIG) Rolling Updates",
    scenario: "A developer needs to roll out a new version of an application running on a Compute Engine Managed Instance Group (MIG). The update must replace VMs gradually without reducing total serving capacity.",
    question: "Which rolling update policy configuration ensures serving capacity never drops below 100% during the rollout?",
    options: [
      { id: 'A', text: "Set both maxSurge and maxUnavailable to 50%" },
      { id: 'B', text: "Set maxSurge to 0 and maxUnavailable to 100%" },
      { id: 'C', text: "Set maxSurge to 25% (or higher) and maxUnavailable to 0" },
      { id: 'D', text: "Set maxSurge to 0 and maxUnavailable to 25%" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Compute Engine Managed Instance Groups, setting `maxUnavailable: 0` ensures that no existing healthy instances are terminated until replacement instances are fully provisioned and pass health checks. `maxSurge: 25%` allows the MIG to temporarily scale above target capacity to host new VMs during the transition.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#max-surge-and-max-unavailable",
    tags: ["Compute Engine", "MIG", "Rolling Updates"]
  },
  {
    id: "gcp-pca-62",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Regional vs Zonal Cluster Control Plane Availability",
    scenario: "An architect is provisioning a production Kubernetes cluster on Google Kubernetes Engine (GKE). The application requires high availability for the Kubernetes API server and control plane across zone failures.",
    question: "Which GKE cluster type should the architect provision?",
    options: [
      { id: 'A', text: "Regional cluster (control plane replicated across 3 zones in the region)" },
      { id: 'B', text: "Zonal cluster with multi-zone node pools" },
      { id: 'C', text: "Single-zone cluster with 10 nodes" },
      { id: 'D', text: "GKE Sandbox cluster" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A GKE `Regional cluster` replicates the Kubernetes control plane (API server, etcd, scheduler) across three availability zones within the region. In contrast, a Zonal cluster runs the control plane in only a single zone, making master operations unavailable if that zone suffers an outage.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters#regional_clusters",
    tags: ["GKE", "Regional Cluster", "High Availability"]
  },
  {
    id: "gcp-pca-63",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Custom Machine Types for Cost Optimization",
    scenario: "A specialized batch processing workload requires exactly 6 vCPUs and 27 GB of RAM. Predefined N2 machine types either provide too few resources (n2-standard-4) or force paying for unused capacity (n2-standard-8 with 32 GB RAM).",
    question: "How should the cloud architect configure the Compute Engine VM to minimize resource waste?",
    options: [
      { id: 'A', text: "Configure a Custom Machine Type specifying exactly 6 vCPUs and 27 GB of RAM" },
      { id: 'B', text: "Deploy on two separate n2-standard-4 VMs" },
      { id: 'C', text: "Use a GPU-accelerated machine type" },
      { id: 'D', text: "Deploy on an n2-standard-8 and throttle CPU via cgroups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine supports `Custom Machine Types`, allowing architects to independently configure exact numbers of vCPUs (in even increments) and memory (0.9 to 6.5 GB per vCPU for standard types), tailoring VM sizing to exact workload requirements and reducing over-provisioning costs.",
    referenceUrl: "https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types",
    tags: ["Compute Engine", "Custom Machine Types", "Cost Optimization"]
  },
  {
    id: "gcp-pca-64",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Live Migration During Infrastructure Maintenance",
    scenario: "A financial trading application on Compute Engine cannot tolerate VM restarts or downtime when Google performs physical host hardware maintenance in the datacenter.",
    question: "Which Compute Engine on-host maintenance policy should be set to ensure the VM remains running during host upgrades?",
    options: [
      { id: 'A', text: "Set onHostMaintenance to MIGRATE (Live Migration)" },
      { id: 'B', text: "Set onHostMaintenance to TERMINATE" },
      { id: 'C', text: "Set automaticRestart to FALSE" },
      { id: 'D', text: "Enable Preemptible status" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine performs `Live Migration` during regular host hardware maintenance. Google migrates running VM instances to another host in the same zone without interrupting workloads, preserving network connections, memory state, and CPU execution.",
    referenceUrl: "https://cloud.google.com/compute/docs/instances/live-migration",
    tags: ["Compute Engine", "Live Migration", "High Availability"]
  },
  {
    id: "gcp-pca-65",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "OS Login vs Metadata SSH Keys for VM Access Management",
    scenario: "An enterprise security team must centrally manage Linux SSH access across 1,000 Compute Engine VMs, tie SSH logins to corporate IAM identities, and automatically revoke access when employees leave the company.",
    question: "Which Google Cloud access feature replaces project-wide and instance-level SSH keys with IAM-managed credentials?",
    options: [
      { id: 'A', text: "OS Login (enable-oslogin = TRUE)" },
      { id: 'B', text: "Project-wide metadata SSH keys" },
      { id: 'C', text: "Instance metadata public keys" },
      { id: 'D', text: "Local /etc/sudoers file editing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`OS Login` integrates Linux user management with Google Cloud IAM. Administrators manage SSH access using IAM roles (e.g. `roles/compute.osLogin` or `roles/compute.osAdminLogin`). When an employee's IAM account is disabled, their SSH access across all VMs is revoked immediately.",
    referenceUrl: "https://cloud.google.com/compute/docs/oslogin",
    tags: ["Compute Engine", "OS Login", "IAM"]
  },
  {
    id: "gcp-pca-66",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Pod Anti-Affinity for High-Availability Scheduling",
    scenario: "A microservice deployment in GKE runs 3 replicas of a critical payment processor. The architect must ensure that no two replicas ever run on the same physical Kubernetes worker node.",
    question: "Which Kubernetes scheduling configuration distributes pods across distinct nodes using topologyKey?",
    options: [
      { id: 'A', text: "Taints and Tolerations alone" },
      { id: 'B', text: "podAntiAffinity with topologyKey: kubernetes.io/hostname" },
      { id: 'C', text: "podAffinity with topologyKey: topology.kubernetes.io/zone" },
      { id: 'D', text: "nodeSelector matching specific node names" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes `podAntiAffinity` prevents the scheduler from placing pods on nodes that already run pods matching the specified label selector. Using `topologyKey: kubernetes.io/hostname` ensures that each replica runs on a unique physical host node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["GKE", "Pod Anti-Affinity", "Scheduling"]
  },
  {
    id: "gcp-pca-67",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Taints and Tolerations for Dedicated GPU Node Pools",
    scenario: "A GKE cluster hosts both general web apps and machine learning training jobs. The cluster has a specialized node pool with expensive NVIDIA A100 GPUs that must only execute ML workloads.",
    question: "Which mechanism prevents standard web pods from being scheduled onto the GPU nodes?",
    options: [
      { id: 'A', text: "Set resource limits on web pods" },
      { id: 'B', text: "Create a separate VPC for web pods" },
      { id: 'C', text: "Use Horizontal Pod Autoscaler" },
      { id: 'D', text: "Apply a Taint to the GPU node pool and configure matching Tolerations only on the ML training pod specs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes `Taints` allow a node to repel a set of pods. Applying a taint (e.g. `gpu=true:NoSchedule`) ensures that only pods configured with a matching `Toleration` can schedule on those GPU nodes, protecting expensive resources from general workloads.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/node-taints",
    tags: ["GKE", "Taints and Tolerations", "Node Pools"]
  },
  {
    id: "gcp-pca-68",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Network Policies for Zero-Trust Pod Isolation",
    scenario: "In a multi-tenant GKE cluster, a frontend web pod should only be able to communicate with the backend API service on port 8080. All other egress and ingress traffic must be denied.",
    question: "Which Kubernetes resource defines Layer 3/4 firewall rules between pods in a cluster?",
    options: [
      { id: 'A', text: "Route tables in GCP" },
      { id: 'B', text: "Cloud Armor Security Policy" },
      { id: 'C', text: "VPC Firewall Rules in Google Cloud console" },
      { id: 'D', text: "NetworkPolicy (with Datapath v2 or Calico enabled)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes `NetworkPolicy` resources act as distributed firewalls for pods, controlling ingress and egress traffic based on pod labels, namespaces, and ports. GKE requires enabling Network Policy enforcement (such as GKE Datapath v2 or Calico) on the cluster.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/network-policy",
    tags: ["GKE", "NetworkPolicy", "Zero-Trust"]
  },
  {
    id: "gcp-pca-69",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Release Channels: Rapid vs Regular vs Stable",
    scenario: "An enterprise organization runs mission-critical billing workloads on GKE. The management policy dictates that cluster nodes and control planes should only adopt Kubernetes versions that have been thoroughly tested for stability in production for several months.",
    question: "Which GKE Release Channel should the architect select?",
    options: [
      { id: 'A', text: "Stable channel" },
      { id: 'B', text: "Rapid channel" },
      { id: 'C', text: "Regular channel" },
      { id: 'D', text: "Extended channel alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE provides three release channels: `Rapid` (earliest access to newest Kubernetes features), `Regular` (default, balanced between new features and stability), and `Stable` (receives Kubernetes versions that have demonstrated high reliability and stability in production over extended periods).",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels",
    tags: ["GKE", "Release Channels", "Upgrades"]
  },
  {
    id: "gcp-pca-70",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Cluster Autoscaler vs Vertical Pod Autoscaler (VPA)",
    scenario: "A developer observes that an application pod occasionally crashes due to out-of-memory (OOMKilled) errors when handling traffic spikes, even though the cluster has plenty of free node memory.",
    question: "Which autoscaling component dynamically adjusts pod CPU and memory requests based on historical consumption?",
    options: [
      { id: 'A', text: "Vertical Pod Autoscaler (VPA)" },
      { id: 'B', text: "Cluster Autoscaler (CA)" },
      { id: 'C', text: "Horizontal Pod Autoscaler (HPA)" },
      { id: 'D', text: "Node Auto-Provisioning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Vertical Pod Autoscaler` (VPA) analyzes actual historical resource utilization and automatically adjusts pod CPU and memory requests and limits. `HPA` scales pod replica counts horizontally, while `Cluster Autoscaler` scales worker VM nodes.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler",
    tags: ["GKE", "VPA", "Autoscaling"]
  },
  {
    id: "gcp-pca-71",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Storage Transfer Service for S3-to-GCS Migrations",
    scenario: "An enterprise needs to migrate 500 TB of media assets from an Amazon S3 bucket to a Cloud Storage bucket over the network on an ongoing scheduled synchronization schedule.",
    question: "Which managed Google Cloud service automates large-scale data transfers between external clouds and Cloud Storage?",
    options: [
      { id: 'A', text: "Storage Transfer Service" },
      { id: 'B', text: "Transfer Appliance" },
      { id: 'C', text: "gsutil -m rsync running on a single Compute Engine VM" },
      { id: 'D', text: "Cloud Data Fusion" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Storage Transfer Service` is a fully managed, scalable Google Cloud service that automates transfers from Amazon S3, Azure Blob, HTTP sources, or other Cloud Storage buckets into Google Cloud Storage. It handles parallel data transfers, checksum validation, and scheduled incremental syncs.",
    referenceUrl: "https://cloud.google.com/storage-transfer/docs/overview",
    tags: ["Cloud Storage", "Storage Transfer Service", "Migration"]
  },
  {
    id: "gcp-pca-72",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud Transfer Appliance for Offline Petabyte Migration",
    scenario: "A scientific research lab must migrate 2 Petabytes of seismic data from an on-premises data center to Cloud Storage. The facility has an unreliable 100 Mbps uplink, which would take over 5 years to transfer the data over the network.",
    question: "Which Google Cloud solution provides physical high-capacity ruggedized storage hardware for offline data migration?",
    options: [
      { id: 'A', text: "Cloud Storage Transfer CLI" },
      { id: 'B', text: "Dedicated Interconnect" },
      { id: 'C', text: "Storage Transfer Service" },
      { id: 'D', text: "Transfer Appliance" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Transfer Appliance` is a high-capacity physical storage server shipped to a customer's data center. The customer loads data locally at gigabit speeds, ships the appliance back to Google, and Google uploads the data directly into Cloud Storage.",
    referenceUrl: "https://cloud.google.com/transfer-appliance/docs/4.0/overview",
    tags: ["Cloud Storage", "Transfer Appliance", "Offline Migration"]
  },
  {
    id: "gcp-pca-73",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Uniform Bucket-Level Access for Simplified Security",
    scenario: "A security auditor discovers that some files in a corporate Cloud Storage bucket have individual Object Access Control Lists (ACLs) granting public access, violating company policy.",
    question: "Which bucket configuration disables individual object ACLs and enforces centralized IAM policies across all objects in the bucket?",
    options: [
      { id: 'A', text: "Cloud Storage Object Versioning" },
      { id: 'B', text: "Fine-grained access control" },
      { id: 'C', text: "Bucket Lock" },
      { id: 'D', text: "Uniform Bucket-Level Access" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enabling `Uniform Bucket-Level Access` disables object-level Access Control Lists (ACLs) entirely. All access to objects in the bucket is governed uniformly by Google Cloud IAM roles and permissions at the bucket level, simplifying auditability and preventing rogue ACL permissions.",
    referenceUrl: "https://cloud.google.com/storage/docs/uniform-bucket-level-access",
    tags: ["Cloud Storage", "Uniform Access", "Security"]
  },
  {
    id: "gcp-pca-74",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Cross-Origin Resource Sharing (CORS) Configuration",
    scenario: "A single-page web app hosted at `https://www.example.com` makes AJAX GET requests to download fonts and assets from a Cloud Storage bucket `https://storage.googleapis.com/assets/font.woff2`. The browser blocks the request.",
    question: "How should the architect configure the Cloud Storage bucket to permit cross-origin requests from example.com?",
    options: [
      { id: 'A', text: "Deploy a CORS JSON configuration on the bucket allowing origin https://www.example.com and method GET" },
      { id: 'B', text: "Make the entire bucket public to allUsers" },
      { id: 'C', text: "Enable Cloud CDN with query string ignore" },
      { id: 'D', text: "Disable HTTPS on the web application" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Storage supports `Cross-Origin Resource Sharing` (CORS). Uploading a CORS JSON configuration file to the bucket using `gcloud storage buckets update --cors-file=cors.json` configures the bucket to return the required `Access-Control-Allow-Origin` headers to the browser.",
    referenceUrl: "https://cloud.google.com/storage/docs/cross-origin",
    tags: ["Cloud Storage", "CORS", "Web Security"]
  },
  {
    id: "gcp-pca-75",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud SQL Maintenance Windows and Deny Period Configuration",
    scenario: "A retail enterprise runs critical Black Friday and Cyber Monday sales events from November 20 to November 30. Cloud SQL automated maintenance updates must not occur during this holiday window.",
    question: "Which Cloud SQL configuration setting blocks scheduled maintenance restarts during a specific date range?",
    options: [
      { id: 'A', text: "A Maintenance Deny Period" },
      { id: 'B', text: "Setting maintenance window to Sunday midnight" },
      { id: 'C', text: "Pausing the database instance" },
      { id: 'D', text: "Disabling automated backups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud SQL allows administrators to configure `Maintenance Deny Periods` (up to 90 days). During a deny period, Cloud SQL will not perform automated maintenance restarts or operating system updates on the database instance, safeguarding critical business periods.",
    referenceUrl: "https://cloud.google.com/sql/docs/mysql/maintenance#deny-period",
    tags: ["Cloud SQL", "Maintenance Window", "Deny Period"]
  }
];

export default GCP_PCA_QUESTIONS_3;
