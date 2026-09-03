export const GCP_PCA_FLASHCARDS_5 = [
  {
    id: "gcp-pca-fc-101",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "VPC: Maximum Transmission Unit (MTU)",
    hint: "1460 vs 1500 vs 8896 Jumbo Frames.",
    back: "Configure an <strong>MTU of 8896 bytes (Jumbo Frames)</strong> on Google Cloud VPCs to maximize throughput and slash CPU packet overhead for HPC clusters.",
    tags: ["VPC", "MTU", "Jumbo Frames"]
  },
  {
    id: "gcp-pca-fc-102",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud NAT: Dynamic Port Allocation",
    hint: "Preventing source port exhaustion.",
    back: "Enable <strong>Dynamic port allocation</strong> or increase <strong>Minimum ports per VM</strong> in Cloud NAT to prevent outbound connection drops from port starvation.",
    tags: ["Cloud NAT", "Port Allocation", "Networking"]
  },
  {
    id: "gcp-pca-fc-103",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Router: BGP Prefix Limits",
    hint: "Summarizing on-premises route advertisements.",
    back: "Cloud Router enforces <strong>strict limits on learned BGP prefixes</strong>; un-summarized route floods will reset the BGP session and drop traffic.",
    tags: ["Cloud Router", "BGP", "Route Limits"]
  },
  {
    id: "gcp-pca-fc-104",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Bucket Lock: Irreversible Immutability",
    hint: "Permanent regulatory compliance lock.",
    back: "Once a Cloud Storage <strong>Bucket Lock is committed, it is permanently irreversible</strong>; no user or Google operator can remove it or delete unexpired objects.",
    tags: ["Cloud Storage", "Bucket Lock", "Immutability"]
  },
  {
    id: "gcp-pca-fc-105",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud SQL: Automatic Storage Increase",
    hint: "Preventing disk-full database outages.",
    back: "Enable <strong>Automatic Storage Increase</strong> on Cloud SQL to expand disk size automatically when capacity falls below 10%, avoiding out-of-disk crashes.",
    tags: ["Cloud SQL", "Storage", "Capacity Management"]
  },
  {
    id: "gcp-pca-fc-106",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "GKE: Gateway API",
    hint: "Next-generation expressive Kubernetes routing.",
    back: "The <strong>Gateway API (HTTPRoute)</strong> succeeds legacy Ingress, providing role-oriented traffic management, cross-namespace routing, and weighted traffic splits.",
    tags: ["GKE", "Gateway API", "Networking"]
  },
  {
    id: "gcp-pca-fc-107",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Sole-Tenant: Node Affinity Labels",
    hint: "Pinning VMs to specific dedicated node groups.",
    back: "Configure <strong>Node Affinity Labels</strong> in VM scheduling properties to deterministically target specific sole-tenant physical node groups.",
    tags: ["Compute Engine", "Sole-Tenant", "Node Affinity"]
  },
  {
    id: "gcp-pca-fc-108",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Storage: Resumable Uploads",
    hint: "Resuming broken uploads at byte offsets.",
    back: "<strong>Resumable Uploads</strong> allow applications to resume interrupted large-file transfers from the last acknowledged byte offset, vital for unreliable networks.",
    tags: ["Cloud Storage", "Resumable Uploads", "Reliability"]
  },
  {
    id: "gcp-pca-fc-109",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Compute Engine: Guest Attributes",
    hint: "Bidirectional guest-to-cloud metadata communication.",
    back: "<strong>Guest Attributes</strong> allow guest OS processes to write status data back to the metadata server, readable by external deployment automation scripts.",
    tags: ["Compute Engine", "Guest Attributes", "Automation"]
  },
  {
    id: "gcp-pca-fc-110",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d2",
    front: "Cloud Router: BGP Graceful Restart",
    hint: "Zero-packet-loss control plane reboots.",
    back: "<strong>BGP Graceful Restart</strong> preserves data plane forwarding while the BGP routing daemon restarts, preventing route churn during router updates.",
    tags: ["Cloud Router", "BGP", "Graceful Restart"]
  },
  {
    id: "gcp-pca-fc-111",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud KMS: Customer-Managed Encryption Keys (CMEK)",
    hint: "Customer control over cloud encryption keys.",
    back: "<strong>CMEK</strong> gives customers control over key generation, rotation, and revocation in Cloud KMS while integrating seamlessly with native GCP storage services.",
    tags: ["Cloud KMS", "CMEK", "Encryption"]
  },
  {
    id: "gcp-pca-fc-112",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "CSEK: Customer-Supplied Encryption Keys",
    hint: "Zero cloud key storage risk.",
    back: "With <strong>CSEK</strong>, the customer supplies the raw encryption key per request; Google never stores it, making data <strong>completely unrecoverable</strong> if the key is lost.",
    tags: ["Encryption", "CSEK", "Data Security"]
  },
  {
    id: "gcp-pca-fc-113",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud EKM: External Key Management",
    hint: "Keys hosted in customer on-premises HSMs.",
    back: "<strong>Cloud EKM</strong> coordinates with external, on-premises HSMs to protect GCP resources while ensuring keys never physically enter Google's data centers.",
    tags: ["Cloud KMS", "Cloud EKM", "Compliance"]
  },
  {
    id: "gcp-pca-fc-114",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "VPC Service Controls: Service Perimeters",
    hint: "Stopping data exfiltration across projects.",
    back: "<strong>VPC Service Controls</strong> surrounds GCP resources with a virtual perimeter, preventing authorized users from exfiltrating data to external untrusted projects.",
    tags: ["VPC Service Controls", "Data Exfiltration", "Security"]
  },
  {
    id: "gcp-pca-fc-115",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "VPC Service Controls: Perimeter Bridges",
    hint: "Secure communication between distinct perimeters.",
    back: "A <strong>Perimeter Bridge</strong> allows controlled cross-perimeter communication between distinct VPC Service Controls perimeters without breaking perimeter isolation.",
    tags: ["VPC Service Controls", "Perimeter Bridge", "Security"]
  },
  {
    id: "gcp-pca-fc-116",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Identity-Aware Proxy (IAP): Zero-Trust Access",
    hint: "VPN-less secure app and SSH access.",
    back: "<strong>Identity-Aware Proxy (IAP)</strong> evaluates user identity and device context at the application layer, allowing secure access to internal apps and SSH without VPNs.",
    tags: ["IAP", "BeyondCorp", "Zero-Trust"]
  },
  {
    id: "gcp-pca-fc-117",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Binary Authorization: Container Image Attestation",
    hint: "Deploy-time image verification for GKE.",
    back: "<strong>Binary Authorization</strong> blocks unsigned or unverified container images from deploying to GKE, enforcing cryptographic supply chain security policies.",
    tags: ["Binary Authorization", "GKE", "Supply Chain Security"]
  },
  {
    id: "gcp-pca-fc-118",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Sensitive Data Protection (DLP): Automated PII De-identification",
    hint: "Classifying and masking sensitive fields.",
    back: "<strong>Sensitive Data Protection</strong> uses infoType detectors to discover, mask, and tokenize sensitive PII (credit cards, SSNs) before data lands in BigQuery.",
    tags: ["Sensitive Data Protection", "Cloud DLP", "PII Redaction"]
  },
  {
    id: "gcp-pca-fc-119",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Security Command Center (SCC): Premium Tier",
    hint: "Advanced threat intelligence and compliance.",
    back: "<strong>SCC Premium</strong> delivers advanced threat detection (Event Threat Detection, Container Threat Detection) and automated compliance posture scoring.",
    tags: ["Security Command Center", "SCC", "Threat Detection"]
  },
  {
    id: "gcp-pca-fc-120",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Audit Logs: Admin Activity",
    hint: "Immutable, free administrative audit trail.",
    back: "<strong>Admin Activity logs</strong> capture all configuration and IAM changes, are enabled by default, <strong>cannot be turned off</strong>, and are stored free for 400 days.",
    tags: ["Cloud Logging", "Audit Logs", "Admin Activity"]
  },
  {
    id: "gcp-pca-fc-121",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Audit Logs: Data Access Logs",
    hint: "Auditing data read and write operations.",
    back: "<strong>Data Access audit logs</strong> track read and write operations on user data, must be explicitly enabled in IAM configuration, and incur standard log ingestion costs.",
    tags: ["Cloud Logging", "Data Access Logs", "Compliance"]
  },
  {
    id: "gcp-pca-fc-122",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Access Transparency: Auditing Google Personnel",
    hint: "Near-real-time logs of Google operator access.",
    back: "<strong>Access Transparency</strong> provides an immutable log whenever Google Cloud support engineers access customer data, satisfying strict compliance oversight.",
    tags: ["Access Transparency", "Compliance", "Google Auditing"]
  },
  {
    id: "gcp-pca-fc-123",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Access Approval: Explicit Authorization for Google Support",
    hint: "Requiring customer sign-off before Google access.",
    back: "<strong>Access Approval</strong> blocks Google support personnel from accessing customer resources until an authorized administrator explicitly grants approval.",
    tags: ["Access Approval", "Compliance", "Access Control"]
  },
  {
    id: "gcp-pca-fc-124",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "IAM: Service Account Impersonation",
    hint: "Temporary keyless credential acquisition.",
    back: "Grant <strong>roles/iam.serviceAccountTokenCreator</strong> to allow developers to impersonate service accounts temporarily without downloading risky static JSON keys.",
    tags: ["IAM", "Service Account Impersonation", "Keyless"]
  },
  {
    id: "gcp-pca-fc-125",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Workload Identity Federation: Secret-less Cloud Integration",
    hint: "Exchanging external OIDC tokens for GCP tokens.",
    back: "<strong>Workload Identity Federation</strong> exchanges GitHub Actions or AWS OIDC tokens for short-lived Google Cloud IAM credentials, eliminating stored secrets.",
    tags: ["Workload Identity Federation", "OIDC", "CI/CD Security"]
  }
];

export default GCP_PCA_FLASHCARDS_5;
