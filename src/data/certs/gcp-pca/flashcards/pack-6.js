export const GCP_PCA_FLASHCARDS_6 = [
  {
    id: "gcp-pca-fc-126",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Secret Manager: Centralized Credential Governance",
    hint: "Encrypted, versioned application secrets.",
    back: "<strong>Secret Manager</strong> securely stores API keys and credentials with versioning, IAM access control, and audit logging, decoupling secrets from application code.",
    tags: ["Secret Manager", "Security", "Credentials"]
  },
  {
    id: "gcp-pca-fc-127",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "IAM Conditions: Attribute-Based Access Control",
    hint: "Time-bound and context-aware IAM bindings.",
    back: "<strong>IAM Conditions</strong> use CEL expressions to enforce time-bound access (e.g. expiring at 18:00 UTC) or limit permissions to specific regions and resource tags.",
    tags: ["IAM", "IAM Conditions", "Least Privilege"]
  },
  {
    id: "gcp-pca-fc-128",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "IAM Deny Policies: Absolute Security Guardrails",
    hint: "Overriding allow permissions across organizations.",
    back: "<strong>IAM Deny Policies</strong> enforce non-negotiable security guardrails that override any granted permissions, preventing actions like deleting audit logs.",
    tags: ["IAM", "Deny Policies", "Security Guardrails"]
  },
  {
    id: "gcp-pca-fc-129",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Envelope Encryption: KEKs and DEKs",
    hint: "Encrypting large payloads efficiently.",
    back: "In <strong>envelope encryption</strong>, a local Data Encryption Key (DEK) encrypts the bulk data, while Cloud KMS encrypts only the lightweight DEK using a Key Encryption Key (KEK).",
    tags: ["Cloud KMS", "Envelope Encryption", "Cryptography"]
  },
  {
    id: "gcp-pca-fc-130",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud KMS: Automatic Key Rotation",
    hint: "Scheduled cryptographic key lifecycle management.",
    back: "Configure <strong>rotationPeriod: 90d</strong> on Cloud KMS keys; KMS automatically creates new primary key versions while keeping older versions for seamless decryption.",
    tags: ["Cloud KMS", "Key Rotation", "Security Best Practices"]
  },
  {
    id: "gcp-pca-fc-131",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Container Analysis: Automated CVE Scanning",
    hint: "Vulnerability scanning for container registries.",
    back: "<strong>Container Analysis</strong> automatically scans container images in Artifact Registry for open-source vulnerabilities and generates attestations for Binary Authorization.",
    tags: ["Artifact Registry", "Container Analysis", "CVE Scanning"]
  },
  {
    id: "gcp-pca-fc-132",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "GKE: Shielded Nodes",
    hint: "Cryptographic node boot integrity.",
    back: "<strong>Shielded GKE Nodes</strong> leverage Secure Boot and vTPM to protect worker nodes from rootkits and ensure verifiable node identity to the Kubernetes control plane.",
    tags: ["GKE", "Shielded Nodes", "Node Hardening"]
  },
  {
    id: "gcp-pca-fc-133",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "GKE Sandbox: gVisor Kernel Isolation",
    hint: "Sandboxing untrusted container execution.",
    back: "<strong>GKE Sandbox</strong> runs containers inside a <strong>gVisor user-space kernel</strong>, shielding the host OS kernel from untrusted multi-tenant code execution.",
    tags: ["GKE", "GKE Sandbox", "gVisor"]
  },
  {
    id: "gcp-pca-fc-134",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Armor: Custom CEL Rules",
    hint: "Inspecting headers, cookies, and payloads.",
    back: "Write <strong>Custom Cloud Armor Rules using CEL</strong> to inspect incoming HTTP headers, cookies, and query parameters to block bespoke application-layer attacks.",
    tags: ["Cloud Armor", "CEL Expressions", "Custom Rules"]
  },
  {
    id: "gcp-pca-fc-135",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Armor: Adaptive Protection",
    hint: "Automated ML-driven Layer 7 DDoS mitigation.",
    back: "<strong>Adaptive Protection</strong> learns normal traffic baselines using machine learning, automatically alerting on anomalous L7 spikes and generating custom defense rules.",
    tags: ["Cloud Armor", "Adaptive Protection", "Machine Learning DDoS"]
  },
  {
    id: "gcp-pca-fc-136",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud NAT: Connection Logging",
    hint: "Tracking outbound translation events.",
    back: "Enable <strong>Cloud NAT Logging</strong> to capture NAT IP/port mappings and diagnose port exhaustion errors in Cloud Logging.",
    tags: ["Cloud NAT", "Logging", "Network Security"]
  },
  {
    id: "gcp-pca-fc-137",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "VPC Service Controls: Dry Run Mode",
    hint: "Testing perimeters without blocking traffic.",
    back: "Deploy perimeters in <strong>Dry Run Mode</strong> first to monitor potential violations in Cloud Logging before enforcing blocking rules in production.",
    tags: ["VPC Service Controls", "Dry Run", "Safe Deployment"]
  },
  {
    id: "gcp-pca-fc-138",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Organization Policies: Centralized Guardrails",
    hint: "Enforcing infrastructure constraints globally.",
    back: "Use <strong>Organization Policy Constraints</strong> (e.g. <code>compute.vmExternalIpAccess</code>) to enforce global compliance guardrails that project owners cannot override.",
    tags: ["Governance", "Organization Policies", "Security Guardrails"]
  },
  {
    id: "gcp-pca-fc-139",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Org Policies: allowedPolicyMemberDomains",
    hint: "Preventing external IAM role grants.",
    back: "Enforce <strong>constraints/iam.allowedPolicyMemberDomains</strong> to restrict IAM role assignments exclusively to corporate Cloud Identity domain accounts.",
    tags: ["Organization Policies", "IAM", "Domain Restriction"]
  },
  {
    id: "gcp-pca-fc-140",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Org Policies: disableServiceAccountKeyCreation",
    hint: "Eliminating downloaded JSON credential keys.",
    back: "Enforce <strong>constraints/iam.disableServiceAccountKeyCreation</strong> to prohibit generating static JSON keys, mandating keyless authentication across the organization.",
    tags: ["Organization Policies", "Service Accounts", "Security"]
  },
  {
    id: "gcp-pca-fc-141",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Sensitive Data Protection: Deterministic Tokenization",
    hint: "Preserving referential joins across masked datasets.",
    back: "Use <strong>Deterministic Format-Preserving Encryption (FPE)</strong> in Cloud DLP to pseudonymize sensitive fields while allowing analytical SQL joins across masked tables.",
    tags: ["Sensitive Data Protection", "Pseudonymization", "Tokenization"]
  },
  {
    id: "gcp-pca-fc-142",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Security Health Analytics (SHA): Automated Posture Scanning",
    hint: "Continuous scanning for cloud misconfigurations.",
    back: "<strong>Security Health Analytics (SHA)</strong> continuously scans cloud infrastructure to flag security misconfigurations (e.g. public storage buckets or open firewalls).",
    tags: ["Security Command Center", "SHA", "Posture Management"]
  },
  {
    id: "gcp-pca-fc-143",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Event Threat Detection (ETD): Real-Time Log Analytics",
    hint: "Detecting coin-mining and credential abuse.",
    back: "<strong>Event Threat Detection (ETD)</strong> mines audit and network logs in real time to uncover active threats like cryptocurrency mining or credential compromise.",
    tags: ["Security Command Center", "ETD", "Threat Intelligence"]
  },
  {
    id: "gcp-pca-fc-144",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Container Threat Detection: GKE Runtime Security",
    hint: "Flagging suspicious container execution.",
    back: "<strong>Container Threat Detection</strong> monitors runtime container processes in GKE to detect reverse shells and malicious binary execution live.",
    tags: ["Security Command Center", "Container Security", "Runtime Defense"]
  },
  {
    id: "gcp-pca-fc-145",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Armor: Named IP Lists",
    hint: "Google-curated IP threat feeds.",
    back: "Use <strong>Named IP Lists</strong> in Cloud Armor rules to block traffic from known malicious categories (e.g. Tor exit nodes) using Google's live threat intelligence feeds.",
    tags: ["Cloud Armor", "Named IP Lists", "Threat Intelligence"]
  },
  {
    id: "gcp-pca-fc-146",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Armor: Preconfigured WAF Rules",
    hint: "Managed OWASP Top 10 mitigation.",
    back: "Apply <strong>Preconfigured WAF Rules</strong> in Cloud Armor (e.g. <code>sqli-v33-stable</code>) to block SQL injection and cross-site scripting at the edge.",
    tags: ["Cloud Armor", "OWASP", "WAF Rules"]
  },
  {
    id: "gcp-pca-fc-147",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud KMS: Key Ring Locations",
    hint: "Geographic key isolation.",
    back: "Deploy <strong>regional Key Rings</strong> (e.g. <code>europe-west3</code>) to guarantee that cryptographic keys and encryption operations remain strictly confined to designated jurisdictions.",
    tags: ["Cloud KMS", "Key Rings", "Data Residency"]
  },
  {
    id: "gcp-pca-fc-148",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Cloud Storage: Object Holds",
    hint: "Freezing objects for litigation.",
    back: "Apply <strong>Temporary or Event-based Holds</strong> to specific objects to block deletion indefinitely during legal investigations, overriding standard lifecycle deletions.",
    tags: ["Cloud Storage", "Object Holds", "Legal Hold"]
  },
  {
    id: "gcp-pca-fc-149",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    front: "VPC Firewalls: Rule Logging",
    hint: "Auditing allowed and denied network flows.",
    back: "Enable <strong>Firewall Rules Logging</strong> on specific rules to generate connection audit logs for SIEM ingestion without agent overhead.",
    tags: ["VPC", "Firewall Logging", "SIEM"]
  },
  {
    id: "gcp-pca-fc-150",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    front: "Access Context Manager: Device Context Policies",
    hint: "Enforcing device health and location guardrails.",
    back: "Pair IAP with <strong>Access Context Manager</strong> to restrict application access to healthy, encrypted corporate devices originating from approved locations.",
    tags: ["Access Context Manager", "IAP", "BeyondCorp"]
  }
];

export default GCP_PCA_FLASHCARDS_6;
