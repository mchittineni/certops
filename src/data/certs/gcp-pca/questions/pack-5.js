export const GCP_PCA_QUESTIONS_5 = [
  {
    id: "gcp-pca-101",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Google Cloud VPC MTU Size: 1460 vs 1500 vs 8896 (Jumbo Frames)",
    scenario: "A high-performance computing (HPC) simulation cluster on Compute Engine transfers massive dataset files across VMs in the same VPC. The team needs to maximize throughput and minimize CPU packet processing overhead.",
    question: "What maximum transmission unit (MTU) size should the architect configure on the VPC network for Jumbo Frame support?",
    options: [
      { id: 'A', text: "8896 bytes (Jumbo Frames)" },
      { id: 'B', text: "1460 bytes (Standard GCP default)" },
      { id: 'C', text: "1500 bytes (Standard Ethernet)" },
      { id: 'D', text: "9000 bytes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud VPC networks support configurable MTU sizes: `1460` (default), `1500` (standard Ethernet), and `8896` (Jumbo Frames). Using 8896 bytes significantly reduces packet serialization overhead and CPU utilization for high-throughput HPC and storage workloads.",
    referenceUrl: "https://cloud.google.com/vpc/docs/mtu",
    tags: ["VPC", "MTU", "Jumbo Frames"]
  },
  {
    id: "gcp-pca-102",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud NAT Port Reservation and Endpoint-Independent Mapping",
    scenario: "An internal microservice behind Cloud NAT makes thousands of concurrent outbound connections to third-party payment gateways. Outbound connections are failing with port exhaustion errors.",
    question: "How should the network architect adjust the Cloud NAT configuration to prevent port starvation?",
    options: [
      { id: 'A', text: "Increase the Minimum ports per VM instance setting or enable Dynamic port allocation" },
      { id: 'B', text: "Deploy an external load balancer in front of Cloud NAT" },
      { id: 'C', text: "Switch the network tier to Standard" },
      { id: 'D', text: "Reduce the number of VM instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud NAT allocates a fixed number of source ports per VM (default 64 ports). If a VM exhausts its allocated ports, outgoing connections fail. Increasing `Minimum ports per VM` or enabling `Dynamic port allocation` allocates additional NAT IP/port tuples dynamically to handle concurrent socket demands.",
    referenceUrl: "https://cloud.google.com/nat/docs/ports-and-addresses#dynamic-port-allocation",
    tags: ["Cloud NAT", "Port Allocation", "Networking"]
  },
  {
    id: "gcp-pca-103",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router BGP Route Limits and Maximum Prefix Filtering",
    scenario: "An enterprise on-premises core router peers via BGP with Google Cloud Router over Dedicated Interconnect. The on-premises router accidentally advertises 10,000 corporate internal routes.",
    question: "What happens when advertised routes exceed Cloud Router's dynamic prefix limits (100 routes by default)?",
    options: [
      { id: 'A', text: "All GCP projects in the organization are deleted" },
      { id: 'B', text: "Google Cloud billing charges $1 per route automatically" },
      { id: 'C', text: "Cloud Router accepts unbounded routes without limits" },
      { id: 'D', text: "Cloud Router drops the excess routes or resets the BGP session if maximum prefixes are breached" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Router enforces a limit on the number of learned dynamic routes per BGP session (default 100 for regional, up to configured limits). Advertising more routes than supported causes Cloud Router to reset the BGP peering session, disrupting connectivity. Advertisements must be summarized.",
    referenceUrl: "https://cloud.google.com/router/docs/quotas#limits",
    tags: ["Cloud Router", "BGP", "Route Limits"]
  },
  {
    id: "gcp-pca-104",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Retention Policy Lock Reversibility",
    scenario: "A compliance officer asks if a locked Cloud Storage retention policy can be reversed or removed if business requirements change next year.",
    question: "What is the operational behavior of a locked retention policy in Cloud Storage?",
    options: [
      { id: 'A', text: "It unlocks automatically after 30 days" },
      { id: 'B', text: "A locked retention policy is permanently irreversible; once locked, it can never be removed or reduced until all objects naturally expire" },
      { id: 'C', text: "It can be removed by project Owners with the storage.admin role" },
      { id: 'D', text: "It can be unlocked by opening a Google Support ticket" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Storage `Bucket Lock` is mathematically and administratively irreversible. Neither the customer's organization administrators nor Google Cloud engineers can remove or shorten a locked retention policy, ensuring strict regulatory compliance.",
    referenceUrl: "https://cloud.google.com/storage/docs/bucket-lock#lock-bucket",
    tags: ["Cloud Storage", "Bucket Lock", "Immutability"]
  },
  {
    id: "gcp-pca-105",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud SQL Automatic Storage Increase",
    scenario: "An e-commerce database on Cloud SQL experiences steady data growth. The persistent disk approaches 90% capacity during a holiday weekend when database administrators are off-call.",
    question: "Which Cloud SQL setting automatically expands disk size when available storage drops below 10%?",
    options: [
      { id: 'A', text: "Automated storage compaction" },
      { id: 'B', text: "High Availability mode" },
      { id: 'C', text: "Enable storage tiered caching" },
      { id: 'D', text: "Enable Automatic Storage Increase" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud SQL provides `Automatic Storage Increase`. When enabled, Cloud SQL monitors free space and automatically increases disk capacity when space falls below 10% of total capacity (with optional maximum capacity limits), preventing downtime due to disk-full conditions.",
    referenceUrl: "https://cloud.google.com/sql/docs/mysql/instance-settings#automatic-storage-increase-2ndgen",
    tags: ["Cloud SQL", "Storage", "Capacity Management"]
  },
  {
    id: "gcp-pca-106",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "GKE Gateway API vs Legacy Ingress Controller",
    scenario: "A Kubernetes platform team is standardizing traffic management for GKE. The team needs advanced Layer 7 routing features like cross-namespace routing, HTTP header rewrites, and canary percentage splits governed by distinct role personas.",
    question: "Which modern open-standard Kubernetes networking API is the successor to legacy Ingress in GKE?",
    options: [
      { id: 'A', text: "GKE Gateway API (Gateway and HTTPRoute)" },
      { id: 'B', text: "Classic Kubernetes Ingress" },
      { id: 'C', text: "Envoy Sidecar alone" },
      { id: 'D', text: "NodePort Services" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Gateway API` is the modern, role-oriented, expressive evolution of Kubernetes Ingress. It decouples infrastructure provisioning (`GatewayClass` for cloud providers, `Gateway` for cluster operators) from application routing (`HTTPRoute` for developers), supporting canary splitting and cross-namespace routing natively in GKE.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api",
    tags: ["GKE", "Gateway API", "Networking"]
  },
  {
    id: "gcp-pca-107",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Sole-Tenant Node Affinity Labels",
    scenario: "A company deploys compliance-sensitive payment workloads onto Sole-Tenant Nodes. Specific VMs must only run on node group `node-group-pci`.",
    question: "Which Compute Engine mechanism matches VM instances to specific sole-tenant node groups?",
    options: [
      { id: 'A', text: "Node Affinity Labels configured in the instance scheduling properties" },
      { id: 'B', text: "Network Tags on the VPC" },
      { id: 'C', text: "VM instance names" },
      { id: 'D', text: "IAM Service Account bindings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine uses `Node Affinity Labels` in instance scheduling properties (`--node-affinity-labels`) to match VM instances with sole-tenant node groups that carry matching affinity key-value tags, ensuring strict placement on designated physical hosts.",
    referenceUrl: "https://cloud.google.com/compute/docs/nodes/provisioning-sole-tenant-vms#node-affinity",
    tags: ["Compute Engine", "Sole-Tenant", "Node Affinity"]
  },
  {
    id: "gcp-pca-108",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Storage Resumable Uploads for Unstable Network Connections",
    scenario: "A field telemetry station uploads large 50 GB satellite imagery files to Cloud Storage over an unstable satellite network where connections drop every 10 minutes.",
    question: "Which Cloud Storage upload protocol allows resuming failed uploads from the exact byte offset without restarting from the beginning?",
    options: [
      { id: 'A', text: "Resumable Uploads" },
      { id: 'B', text: "Signed URLs with POST" },
      { id: 'C', text: "Simple Upload" },
      { id: 'D', text: "Multipart Upload in a single HTTP stream" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Storage `Resumable Uploads` break uploads into chunks. If a connection drops midway through an upload, the client queries the upload session URI for the last received byte offset and resumes transmitting from that point, preventing redundant re-upload of completed bytes.",
    referenceUrl: "https://cloud.google.com/storage/docs/resumable-uploads",
    tags: ["Cloud Storage", "Resumable Uploads", "Reliability"]
  },
  {
    id: "gcp-pca-109",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Compute Engine Guest Attributes for Metadata Exchange",
    scenario: "An automated configuration tool needs a running Compute Engine VM to publish status strings (e.g. `installation_complete = true`) back to the Google Cloud control plane via the metadata server.",
    question: "Which Compute Engine metadata feature enables read/write key-value communication between guest OS software and external management tools?",
    options: [
      { id: 'A', text: "Serial Console Port 1" },
      { id: 'B', text: "Cloud Logging alone" },
      { id: 'C', text: "Instance Metadata (read-only from inside guest)" },
      { id: 'D', text: "Guest Attributes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Compute Engine `Guest Attributes` are a specialized subset of instance metadata that allows the guest operating system to write key-value pairs (`curl -X PUT http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/...`) and exposes them through the Compute Engine API to external tools.",
    referenceUrl: "https://cloud.google.com/compute/docs/metadata/manage-guest-attributes",
    tags: ["Compute Engine", "Guest Attributes", "Automation"]
  },
  {
    id: "gcp-pca-110",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    domainName: "Managing and provisioning the cloud solution infrastructure",
    title: "Cloud Router BGP Graceful Restart",
    scenario: "A network administrator performs a planned software maintenance update on an on-premises BGP router connected to Google Cloud Router.",
    question: "Which BGP capability allows the data plane to continue forwarding traffic without dropping packets while the control plane BGP daemon restarts?",
    options: [
      { id: 'A', text: "BGP Fast Reroute" },
      { id: 'B', text: "BGP Graceful Restart" },
      { id: 'C', text: "Static failover" },
      { id: 'D', text: "Bidirectional Forwarding Detection (BFD)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`BGP Graceful Restart` allows the BGP control plane to restart without disrupting active packet forwarding in the data plane. Google Cloud Router supports BGP Graceful Restart, ensuring that transient BGP peer reboots do not cause route flapping or traffic drops.",
    referenceUrl: "https://cloud.google.com/router/docs/concepts/overview#graceful-restart",
    tags: ["Cloud Router", "BGP", "Graceful Restart"]
  },
  {
    id: "gcp-pca-111",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Customer-Managed Encryption Keys (CMEK) Architecture",
    scenario: "A financial institution must comply with regulations requiring cryptographic keys protecting data in BigQuery and Cloud Storage to be customer-owned, auditable, and rotatable on demand.",
    question: "Which Google Cloud encryption model gives customers control over key lifecycle and rotation while retaining managed cloud storage?",
    options: [
      { id: 'A', text: "Client-side encryption using PGP scripts" },
      { id: 'B', text: "Customer-Supplied Encryption Keys (CSEK) only" },
      { id: 'C', text: "Default Google-Managed Encryption (GMK)" },
      { id: 'D', text: "Customer-Managed Encryption Keys (CMEK) via Cloud KMS" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Customer-Managed Encryption Keys (CMEK) allow organizations to use their own symmetric encryption keys generated in Cloud Key Management Service (Cloud KMS) to protect data at rest across Google Cloud services (BigQuery, Cloud Storage, Compute Engine), controlling rotation schedules and key revocation.",
    referenceUrl: "https://cloud.google.com/kms/docs/cmek",
    tags: ["Cloud KMS", "CMEK", "Encryption"]
  },
  {
    id: "gcp-pca-112",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Customer-Supplied Encryption Keys (CSEK) Constraints",
    scenario: "A defense contractor uses Customer-Supplied Encryption Keys (CSEK) to encrypt Compute Engine persistent disks.",
    question: "What happens to the encrypted data if the contractor loses the 256-bit AES raw key string?",
    options: [
      { id: 'A', text: "The data is converted to Google-managed keys automatically" },
      { id: 'B', text: "Google Cloud Support can decrypt the data from internal recovery logs" },
      { id: 'C', text: "The disk can be decrypted by the Organization Administrator" },
      { id: 'D', text: "Google cannot recover the key; all data on the disk is permanently and irrecoverably lost" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With Customer-Supplied Encryption Keys (CSEK), the customer provides the raw 256-bit AES key in API calls. Google never stores the key in memory or disk. If the customer loses the CSEK key, Google has no mechanism to recover it, and all encrypted data is permanently lost.",
    referenceUrl: "https://cloud.google.com/compute/docs/disks/customer-supplied-encryption",
    tags: ["Encryption", "CSEK", "Data Security"]
  },
  {
    id: "gcp-pca-113",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud External Key Manager (Cloud EKM) for Physical Separation",
    scenario: "A European banking regulator requires that cryptographic keys protecting cloud data must reside inside a dedicated on-premises Hardware Security Module (HSM) located outside Google Cloud.",
    question: "Which Google Cloud solution integrates Cloud KMS with external on-premises HSM key systems?",
    options: [
      { id: 'A', text: "Secret Manager" },
      { id: 'B', text: "Cloud HSM (Google-hosted)" },
      { id: 'C', text: "Cloud KMS Software Keys" },
      { id: 'D', text: "Cloud External Key Manager (Cloud EKM)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud External Key Manager (Cloud EKM) allows organizations to protect data in Google Cloud using keys that reside in an external, customer-managed key management system or third-party physical HSM outside Google's infrastructure, proving complete physical key custody.",
    referenceUrl: "https://cloud.google.com/kms/docs/ekm",
    tags: ["Cloud KMS", "Cloud EKM", "Compliance"]
  },
  {
    id: "gcp-pca-114",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls: Ingress and Egress Service Perimeters",
    scenario: "A malicious insider with legitimate Cloud Storage download permissions attempts to copy confidential dataset files from a corporate GCP project into their personal external GCP project bucket.",
    question: "Which Google Cloud security feature creates a cryptographic perimeter preventing data exfiltration to external projects?",
    options: [
      { id: 'A', text: "Cloud Armor Security Policy" },
      { id: 'B', text: "VPC Service Controls (Service Perimeter)" },
      { id: 'C', text: "VPC Firewall Rules" },
      { id: 'D', text: "Cloud IAM Deny Policies alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "VPC Service Controls creates a security perimeter around sensitive Google Cloud resources (Cloud Storage, BigQuery). It blocks requests originating from outside the perimeter and blocks requests attempting to move data from inside the perimeter to external, unapproved projects, stopping data exfiltration.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["VPC Service Controls", "Data Exfiltration", "Security"]
  },
  {
    id: "gcp-pca-115",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Perimeter Bridges for Cross-Project Collaboration",
    scenario: "Two distinct departments each have their own isolated VPC Service Controls perimeter. Project A needs to query BigQuery datasets located in Project B securely without merging their perimeters.",
    question: "Which VPC Service Controls construct connects two distinct service perimeters securely?",
    options: [
      { id: 'A', text: "A Perimeter Bridge" },
      { id: 'B', text: "VPC Network Peering" },
      { id: 'C', text: "Shared VPC" },
      { id: 'D', text: "Cloud Interconnect" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Perimeter Bridge` allows resources in two separate VPC Service Controls service perimeters to communicate and share data securely without combining the perimeters into a single large boundary, preserving independent organizational governance.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/perimeter-bridge",
    tags: ["VPC Service Controls", "Perimeter Bridge", "Security"]
  },
  {
    id: "gcp-pca-116",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Identity-Aware Proxy (IAP) for Zero-Trust Web and SSH Access",
    scenario: "An enterprise wants engineers to access internal web applications and SSH into private Compute Engine VMs without deploying or maintaining legacy corporate VPN gateways.",
    question: "Which Google Cloud BeyondCorp service verifies user identity, context, and group membership before granting application access via HTTPS or TCP tunneling?",
    options: [
      { id: 'A', text: "Identity-Aware Proxy (IAP)" },
      { id: 'B', text: "Cloud NAT" },
      { id: 'C', text: "Cloud VPN" },
      { id: 'D', text: "Cloud Load Balancing basic auth" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identity-Aware Proxy (IAP) implements Google's BeyondCorp zero-trust security model. It intercepts HTTP(S) requests and TCP sessions (SSH/RDP), verifying user identity via Cloud Identity/IAM and device context before granting access, completely eliminating the need for legacy VPNs.",
    referenceUrl: "https://cloud.google.com/iap/docs/concepts-overview",
    tags: ["IAP", "BeyondCorp", "Zero-Trust"]
  },
  {
    id: "gcp-pca-117",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Binary Authorization for GKE Container Image Verification",
    scenario: "A financial regulatory mandate requires that only cryptographically signed container images that have passed automated vulnerability scanning can be deployed to production GKE clusters.",
    question: "Which GKE security service acts as an admission controller enforcing digital signature policies on container images?",
    options: [
      { id: 'A', text: "GKE Sandbox" },
      { id: 'B', text: "Binary Authorization" },
      { id: 'C', text: "Container Analysis alone" },
      { id: 'D', text: "GKE Workload Identity" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Binary Authorization is a deploy-time security control for GKE. It acts as a Kubernetes admission controller that checks whether container images have been signed by designated attestors (e.g. CI/CD build systems and security scanners) before allowing pods to deploy.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Binary Authorization", "GKE", "Supply Chain Security"]
  },
  {
    id: "gcp-pca-118",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Sensitive Data Protection (Cloud DLP): Redaction and Tokenization",
    scenario: "An enterprise data lake ingests customer feedback emails. Before storing the text in BigQuery, the system must detect and mask sensitive personally identifiable information (PII) like Social Security Numbers (SSN) and credit card numbers.",
    question: "Which Google Cloud service automatically inspects, classifies, redacts, and tokenizes sensitive data in text and files?",
    options: [
      { id: 'A', text: "Cloud Armor" },
      { id: 'B', text: "Sensitive Data Protection (formerly Cloud DLP)" },
      { id: 'C', text: "Cloud KMS alone" },
      { id: 'D', text: "Security Command Center" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sensitive Data Protection (formerly Cloud Data Loss Prevention / Cloud DLP) discovers, classifies, and de-identifies sensitive data (PII, payment info, credentials) at scale using pre-built detectors (infoTypes). It supports redaction, masking, and format-preserving cryptographic tokenization.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/overview",
    tags: ["Sensitive Data Protection", "Cloud DLP", "PII Redaction"]
  },
  {
    id: "gcp-pca-119",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Security Command Center (SCC) Standard vs Premium",
    scenario: "A chief information security officer requires centralized real-time vulnerability scanning, Event Threat Detection (analyzing Cloud Logging for brute-force attacks), and Container Threat Detection for GKE.",
    question: "Which tier of Security Command Center provides automated advanced threat detection and compliance benchmarking?",
    options: [
      { id: 'A', text: "Cloud Asset Inventory alone" },
      { id: 'B', text: "Cloud Monitoring basic tier" },
      { id: 'C', text: "Security Command Center Standard tier" },
      { id: 'D', text: "Security Command Center Premium tier" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security Command Center (SCC) Premium tier includes advanced security capabilities: Event Threat Detection (rapid log analysis for anomalous activity), Container Threat Detection, Virtual Machine Threat Detection, Security Health Analytics, and compliance benchmarking (CIS, PCI DSS).",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/concepts-security-command-center-overview#tiers",
    tags: ["Security Command Center", "SCC", "Threat Detection"]
  },
  {
    id: "gcp-pca-120",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Audit Logs: Admin Activity vs Data Access Logs",
    scenario: "A security team is auditing Google Cloud logging configurations. The team must ensure that all administrative modifications to IAM policies and project settings are recorded permanently without incurring log ingestion charges.",
    question: "Which Cloud Audit Log type records configuration changes and cannot be disabled?",
    options: [
      { id: 'A', text: "Data Access audit logs" },
      { id: 'B', text: "Access Transparency logs" },
      { id: 'C', text: "System Event audit logs" },
      { id: 'D', text: "Admin Activity audit logs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Admin Activity` audit logs record all API calls that modify resource metadata or configurations (e.g. creating VMs, modifying IAM policies). Admin Activity logs are enabled by default for all services, cannot be disabled by any user, and are retained for 400 days at zero charge.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit#admin-activity",
    tags: ["Cloud Logging", "Audit Logs", "Admin Activity"]
  },
  {
    id: "gcp-pca-121",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Audit Logs: Data Access Logs Configuration",
    scenario: "A compliance auditor needs to track whenever any user or service account executes a query that reads records from a specific BigQuery table or downloads an object from Cloud Storage.",
    question: "Which audit log type captures read operations and must be explicitly enabled in IAM audit configuration?",
    options: [
      { id: 'A', text: "VPC Flow Logs" },
      { id: 'B', text: "Admin Activity audit logs" },
      { id: 'C', text: "Data Access audit logs (DATA_READ and DATA_WRITE)" },
      { id: 'D', text: "System Event logs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Data Access` audit logs record API operations that read or write user-provided data (e.g. `storage.objects.get` or BigQuery query executions). Because Data Access logs generate large volumes, they are disabled by default (except for BigQuery) and incur standard logging ingestion fees.",
    referenceUrl: "https://cloud.google.com/logging/docs/audit#data-access",
    tags: ["Cloud Logging", "Data Access Logs", "Compliance"]
  },
  {
    id: "gcp-pca-122",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Access Transparency Logs for Google Operator Tracking",
    scenario: "A European banking regulator requires evidence proving when and why Google Cloud engineers or support operators accessed customer workloads or data during technical support cases.",
    question: "Which Google Cloud auditing service provides near-real-time logs of actions taken by Google support personnel?",
    options: [
      { id: 'A', text: "Access Transparency" },
      { id: 'B', text: "Admin Activity audit logs" },
      { id: 'C', text: "Access Approval alone" },
      { id: 'D', text: "Cloud Audit Logs Data Access" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Access Transparency` emits audit logs capturing the actions that Google Cloud personnel take when interacting with customer data (e.g. during a support ticket investigation). Logs include the affected resource, reason for access, and operator location.",
    referenceUrl: "https://cloud.google.com/access-transparency/docs/overview",
    tags: ["Access Transparency", "Compliance", "Google Auditing"]
  },
  {
    id: "gcp-pca-123",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Access Approval for Explicit Operator Access Authorization",
    scenario: "A government customer requires that Google support personnel cannot access any cloud resource until a designated customer security officer explicitly approves the access request via email or webhook.",
    question: "Which Google Cloud service enforces explicit customer sign-off before Google engineers can access customer environments?",
    options: [
      { id: 'A', text: "Access Transparency" },
      { id: 'B', text: "Access Approval" },
      { id: 'C', text: "Cloud IAM Privileged Access" },
      { id: 'D', text: "VPC Service Controls" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Access Approval` complements Access Transparency. When Google personnel need access to investigate a critical technical issue, Access Approval generates an approval request. Google personnel cannot proceed until an authorized customer approver reviews and approves the request.",
    referenceUrl: "https://cloud.google.com/access-approval/docs/overview",
    tags: ["Access Approval", "Compliance", "Access Control"]
  },
  {
    id: "gcp-pca-124",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Service Account Impersonation vs Service Account Keys",
    scenario: "A software developer needs to run a deployment script that requires elevated permissions. Company security policy strictly forbids creating or downloading service account JSON private keys.",
    question: "Which IAM pattern allows the developer to act as a service account temporarily without static keys?",
    options: [
      { id: 'A', text: "Service Account Impersonation (using roles/iam.serviceAccountTokenCreator)" },
      { id: 'B', text: "Creating a JSON key file and encrypting it with GPG" },
      { id: 'C', text: "Hardcoding client secrets in environment variables" },
      { id: 'D', text: "Granting the developer the Primitive Owner role" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Account Impersonation allows an authorized user to generate short-lived OAuth 2.0 access tokens for a service account using the `iam.serviceAccountTokenCreator` role (`gcloud --impersonate-service-account=...`), completely eliminating the risk of lost or leaked static JSON keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/service-account-impersonation",
    tags: ["IAM", "Service Account Impersonation", "Keyless"]
  },
  {
    id: "gcp-pca-125",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Workload Identity Federation for AWS and GitHub Actions",
    scenario: "A continuous deployment pipeline running on GitHub Actions deploys infrastructure to Google Cloud. The security team forbids storing long-lived Google Cloud service account keys in GitHub repository secrets.",
    question: "Which identity architecture allows GitHub Actions to authenticate using OpenID Connect (OIDC) tokens?",
    options: [
      { id: 'A', text: "Workload Identity Federation" },
      { id: 'B', text: "Cloud Key Management Service" },
      { id: 'C', text: "Identity-Aware Proxy" },
      { id: 'D', text: "Service Account JSON Key export" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Workload Identity Federation allows external workloads (such as GitHub Actions, AWS, or Azure) to exchange their native OpenID Connect (OIDC) or SAML credentials for short-lived Google Cloud access tokens, eliminating the need to manage and rotate long-lived service account keys.",
    referenceUrl: "https://cloud.google.com/iam/docs/workload-identity-federation",
    tags: ["Workload Identity Federation", "OIDC", "CI/CD Security"]
  }
];

export default GCP_PCA_QUESTIONS_5;
