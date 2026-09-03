export const GCP_PCA_QUESTIONS_6 = [
  {
    id: "gcp-pca-126",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Secret Manager for Application Credential Lifecycle",
    scenario: "A web microservice deployed on Cloud Run requires access to a third-party API token. The token must be encrypted, version-controlled, auditable, and accessible only by authorized service accounts.",
    question: "Which Google Cloud managed service provides centralized secret storage with automated versioning and IAM access control?",
    options: [
      { id: 'A', text: "Cloud KMS alone" },
      { id: 'B', text: "Cloud Storage public bucket" },
      { id: 'C', text: "Compute Engine instance metadata" },
      { id: 'D', text: "Google Cloud Secret Manager" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud Secret Manager is a secure, convenient storage system for API keys, passwords, certificates, and sensitive credentials. It provides fine-grained IAM access control, automatic encryption via Cloud KMS, versioning, audit logging, and rotation notifications.",
    referenceUrl: "https://cloud.google.com/secret-manager/docs/overview",
    tags: ["Secret Manager", "Security", "Credentials"]
  },
  {
    id: "gcp-pca-127",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "IAM Conditions for Context-Aware and Time-Bound Access",
    scenario: "A DevOps engineer needs temporary `Compute Admin` access to resolve an incident. The permission must automatically expire at 18:00 UTC today and be restricted to instances located in `us-central1`.",
    question: "Which IAM feature applies conditional expressions based on time, resource tags, or request attributes?",
    options: [
      { id: 'A', text: "Primitive IAM Roles" },
      { id: 'B', text: "IAM Conditions (using Common Expression Language / CEL)" },
      { id: 'C', text: "Cloud Armor Security Policies" },
      { id: 'D', text: "VPC Firewall Rules" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`IAM Conditions` allow administrators to define attribute-based access control (ABAC) using Common Expression Language (CEL). Conditions evaluate request attributes (such as `request.time < timestamp(...)`) and resource attributes (such as location or resource tags), enforcing fine-grained temporary access.",
    referenceUrl: "https://cloud.google.com/iam/docs/conditions-overview",
    tags: ["IAM", "IAM Conditions", "Least Privilege"]
  },
  {
    id: "gcp-pca-128",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "IAM Deny Policies for Organization Guardrails",
    scenario: "An enterprise security team mandates that no employee or project owner, regardless of role grants, should ever be allowed to delete Cloud Audit Logs or disable security logging.",
    question: "Which Google Cloud IAM feature enforces hard negative restrictions that override all IAM allow grants?",
    options: [
      { id: 'A', text: "Service Account permissions" },
      { id: 'B', text: "IAM Deny Policies" },
      { id: 'C', text: "Resource Manager Folders" },
      { id: 'D', text: "IAM Allow Policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`IAM Deny Policies` allow security administrators to define hard guardrails that prevent principals from performing specific permissions, regardless of any `allow` roles they hold. Deny policies are evaluated before allow policies and cannot be bypassed by project owners.",
    referenceUrl: "https://cloud.google.com/iam/docs/deny-overview",
    tags: ["IAM", "Deny Policies", "Security Guardrails"]
  },
  {
    id: "gcp-pca-129",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Envelope Encryption and Key Encryption Keys (KEK)",
    scenario: "An enterprise application encrypts large 10 GB database backup files using Google Cloud Key Management Service.",
    question: "Why does the application use envelope encryption instead of sending 10 GB payloads directly to the Cloud KMS API?",
    options: [
      { id: 'A', text: "Cloud KMS has a 64 KB payload size limit; envelope encryption generates a local Data Encryption Key (DEK) to encrypt data, and KMS encrypts only the lightweight DEK using a Key Encryption Key (KEK)" },
      { id: 'B', text: "Envelope encryption is required only for quantum computers" },
      { id: 'C', text: "Cloud KMS can only encrypt plain text strings under 10 characters" },
      { id: 'D', text: "Cloud KMS is located outside Google Cloud" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud KMS is designed to manage `Key Encryption Keys` (KEKs) and enforces a maximum payload limit of 64 KB for direct `kms.encrypt` calls. In envelope encryption, the application generates a local `Data Encryption Key` (DEK) to encrypt the large dataset, and uses KMS to encrypt only the small DEK.",
    referenceUrl: "https://cloud.google.com/kms/docs/envelope-encryption",
    tags: ["Cloud KMS", "Envelope Encryption", "Cryptography"]
  },
  {
    id: "gcp-pca-130",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Automatic Key Rotation Schedules",
    scenario: "A corporate cryptography policy mandates that all symmetric encryption keys used across Google Cloud must be rotated automatically every 90 days.",
    question: "How should the security administrator configure Cloud KMS to enforce regular key rotation?",
    options: [
      { id: 'A', text: "Set the rotationPeriod to 90 days on the Cloud KMS key template" },
      { id: 'B', text: "Write a cron job that deletes and recreates the key every 90 days" },
      { id: 'C', text: "Download the private key and upload a new one manually" },
      { id: 'D', text: "Cloud KMS does not support automatic rotation" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud KMS supports automated key rotation. Setting `rotationPeriod: 7776000s` (90 days) on a symmetric key instructs Cloud KMS to automatically generate a new primary key version every 90 days. Older versions remain available to decrypt historical data without re-encrypting existing files.",
    referenceUrl: "https://cloud.google.com/kms/docs/rotate-key",
    tags: ["Cloud KMS", "Key Rotation", "Security Best Practices"]
  },
  {
    id: "gcp-pca-131",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Container Analysis Vulnerability Scanning in Artifact Registry",
    scenario: "A CI/CD pipeline pushes container images to Artifact Registry. The security team needs immediate vulnerability notifications whenever an image contains known CVE vulnerabilities.",
    question: "Which Google Cloud service scans container images in Artifact Registry for OS package vulnerabilities?",
    options: [
      { id: 'A', text: "Container Analysis (Automated Vulnerability Scanning)" },
      { id: 'B', text: "Security Command Center Standard alone" },
      { id: 'C', text: "Cloud Armor" },
      { id: 'D', text: "Binary Authorization alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Container Analysis` automatically scans container images stored in Artifact Registry for known vulnerabilities (CVEs) in Linux OS packages and language application packages, generating vulnerability reports and metadata used by Binary Authorization.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Artifact Registry", "Container Analysis", "CVE Scanning"]
  },
  {
    id: "gcp-pca-132",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "GKE Shielded GKE Nodes for Node Integrity",
    scenario: "An enterprise deploys sensitive financial microservices on GKE. The security architect must ensure that worker nodes cannot be impersonated and that node identity certificates are cryptographically verified by the control plane.",
    question: "Which GKE node security feature enforces Secure Boot and measured boot on Kubernetes worker nodes?",
    options: [
      { id: 'A', text: "Shielded GKE Nodes" },
      { id: 'B', text: "GKE Sandbox" },
      { id: 'C', text: "GKE Private Clusters alone" },
      { id: 'D', text: "NetworkPolicy alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Shielded GKE Nodes provide strong, verifiable node identity and integrity for GKE clusters. Built on Compute Engine Shielded VMs, Shielded GKE Nodes use Secure Boot, vTPM, and integrity monitoring to protect worker nodes against rootkits and kernel tampering.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes",
    tags: ["GKE", "Shielded Nodes", "Node Hardening"]
  },
  {
    id: "gcp-pca-133",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "GKE Sandbox (gVisor) for Multi-Tenant Container Isolation",
    scenario: "A SaaS platform executes untrusted user-submitted Python and JavaScript code inside containers on GKE. The architecture must prevent untrusted code from exploiting Linux host kernel vulnerabilities.",
    question: "Which GKE container runtime provides user-space kernel isolation using gVisor?",
    options: [
      { id: 'A', text: "Binary Authorization" },
      { id: 'B', text: "GKE Sandbox" },
      { id: 'C', text: "Shielded GKE Nodes" },
      { id: 'D', text: "Privileged Container Mode" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`GKE Sandbox` uses open-source `gVisor` to provide a secure boundary between running containers and the host kernel. gVisor intercepts and implements system calls in user space, preventing untrusted or malicious container code from directly interacting with the host Linux kernel.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods",
    tags: ["GKE", "GKE Sandbox", "gVisor"]
  },
  {
    id: "gcp-pca-134",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Armor Custom Rules with CEL Expressions",
    scenario: "A public website experiences a Layer 7 exploit where attackers pass a malicious cookie `admin_override = true` in HTTP requests.",
    question: "Which Cloud Armor feature allows writing custom security rules evaluating HTTP headers, cookies, and query strings using Common Expression Language (CEL)?",
    options: [
      { id: 'A', text: "VPC Firewall Rules" },
      { id: 'B', text: "Cloud Load Balancing URL maps" },
      { id: 'C', text: "Cloud Armor Custom Rules (using CEL match expressions)" },
      { id: 'D', text: "Cloud Armor Preconfigured WAF rules only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Armor `Custom Rules` allow security engineers to write flexible Layer 7 inspection logic using Common Expression Language (CEL), evaluating request parameters such as `has(request.headers['cookie']) && request.headers['cookie'].contains('admin_override=true')` to block attacks.",
    referenceUrl: "https://cloud.google.com/armor/docs/rules-language-reference",
    tags: ["Cloud Armor", "CEL Expressions", "Custom Rules"]
  },
  {
    id: "gcp-pca-135",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Armor Adaptive Protection for Machine Learning L7 Defense",
    scenario: "A high-profile media event causes legitimate traffic to surge to 100,000 requests per second. Simultaneously, a sophisticated distributed Layer 7 attack mimics legitimate user requests.",
    question: "Which Cloud Armor capability uses machine learning models to detect Layer 7 attacks and generates tailored mitigation rules automatically?",
    options: [
      { id: 'A', text: "Cloud Armor Adaptive Protection" },
      { id: 'B', text: "Cloud Armor Rate Limiting alone" },
      { id: 'C', text: "Security Command Center alone" },
      { id: 'D', text: "Cloud Monitoring Alerts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Armor `Adaptive Protection` uses machine learning models trained on baseline application traffic patterns. It detects anomalous Layer 7 DDoS and volumetric attacks, alerts security teams, and automatically generates tailored WAF mitigation rules to block the attack while allowing legitimate traffic.",
    referenceUrl: "https://cloud.google.com/armor/docs/adaptive-protection-overview",
    tags: ["Cloud Armor", "Adaptive Protection", "Machine Learning DDoS"]
  },
  {
    id: "gcp-pca-136",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud NAT Port Exhaustion and Logging Options",
    scenario: "A security operations team audits outbound network traffic from private Compute Engine VMs routed through Cloud NAT. The team must track every outbound connection translation.",
    question: "Which Cloud NAT logging setting records translated source IP/port and destination IP/port tuples?",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs only" },
      { id: 'B', text: "Cloud Audit Logs alone" },
      { id: 'C', text: "Enable Cloud NAT Logging for all connections (or error connections)" },
      { id: 'D', text: "Cloud Trace" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud NAT provides built-in connection logging. Enabling Cloud NAT logging captures logs for `ERRORS_ONLY` (such as port exhaustion events) or `ALL` connections, recording translated IP and port mappings to Cloud Logging for compliance and security auditing.",
    referenceUrl: "https://cloud.google.com/nat/docs/nat-logging",
    tags: ["Cloud NAT", "Logging", "Network Security"]
  },
  {
    id: "gcp-pca-137",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Service Controls Dry Run Mode for Safe Deployment",
    scenario: "A security team is preparing to activate a VPC Service Controls service perimeter around a production BigQuery data warehouse. The team must ensure that legitimate business applications will not be accidentally blocked.",
    question: "Which VPC Service Controls feature logs policy violations without blocking actual traffic?",
    options: [
      { id: 'A', text: "Dry Run Mode" },
      { id: 'B', text: "Enforced Mode" },
      { id: 'C', text: "Perimeter Bridge Mode" },
      { id: 'D', text: "Audit Logging alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Service Controls supports `Dry Run Mode`. In dry run mode, all requests that would have violated perimeter policies are logged to Cloud Logging with a `DRY_RUN_VIOLATION` status without actually blocking the traffic, allowing teams to test and refine access rules safely.",
    referenceUrl: "https://cloud.google.com/vpc-service-controls/docs/dry-run-mode",
    tags: ["VPC Service Controls", "Dry Run", "Safe Deployment"]
  },
  {
    id: "gcp-pca-138",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Organization Policies for Enforcing Cloud Guardrails",
    scenario: "A central cloud governance team needs to ensure that no developer in the entire organization can accidentally create a Compute Engine VM with a public external IP address.",
    question: "Which Google Cloud governance mechanism applies declarative constraint guardrails across the entire resource hierarchy?",
    options: [
      { id: 'A', text: "IAM Deny Policies" },
      { id: 'B', text: "Organization Policy Constraints (e.g. constraints/compute.vmExternalIpAccess)" },
      { id: 'C', text: "Resource Manager Labels" },
      { id: 'D', text: "VPC Firewall Rules" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Organization Policies` provide centralized, programmatic control over cloud resources across an entire organization. Constraints like `compute.vmExternalIpAccess` (set to `Deny`) prevent instances from receiving public IP addresses regardless of project-level IAM permissions.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    tags: ["Governance", "Organization Policies", "Security Guardrails"]
  },
  {
    id: "gcp-pca-139",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Organization Policy: Allowed Policy Member Domains (iam.allowedPolicyMemberDomains)",
    scenario: "A corporate security policy mandates that IAM roles in the Google Cloud organization can only be granted to corporate email accounts (`@company.com`) and never to personal `@gmail.com` addresses.",
    question: "Which Organization Policy constraint restricts IAM role bindings to specific Google Workspace customer IDs?",
    options: [
      { id: 'A', text: "constraints/compute.trustedImageProjects" },
      { id: 'B', text: "constraints/iam.allowedPolicyMemberDomains" },
      { id: 'C', text: "VPC Service Controls" },
      { id: 'D', text: "constraints/iam.disableServiceAccountKeyCreation" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `iam.allowedPolicyMemberDomains` constraint restricts IAM role bindings to user and group identities belonging to authorized Google Workspace or Cloud Identity customer IDs (directory IDs), preventing accidental or malicious addition of external personal accounts.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains",
    tags: ["Organization Policies", "IAM", "Domain Restriction"]
  },
  {
    id: "gcp-pca-140",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Service Account Key Creation Restriction via Organization Policy",
    scenario: "To eliminate the risk of leaked credential files on developer laptops, a CISO mandates that no user in any project should be allowed to generate or download service account JSON private keys.",
    question: "Which Organization Policy constraint completely disables the creation of service account keys?",
    options: [
      { id: 'A', text: "Cloud KMS Policy" },
      { id: 'B', text: "constraints/iam.disableServiceAccountKeyCreation" },
      { id: 'C', text: "constraints/compute.disableNestedVirtualization" },
      { id: 'D', text: "constraints/iam.disableServiceAccountCreation" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforcing the `iam.disableServiceAccountKeyCreation` organization policy constraint blocks users from creating static service account keys (`gcloud iam service-accounts keys create`), forcing workloads to use Workload Identity, Service Account Impersonation, or attached identities.",
    referenceUrl: "https://cloud.google.com/iam/docs/organization-policy-service-accounts#disable-key-creation",
    tags: ["Organization Policies", "Service Accounts", "Security"]
  },
  {
    id: "gcp-pca-141",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Sensitive Data Protection De-Identification: CryptoHash vs Deterministic Tokenization",
    scenario: "A health analytics pipeline needs to replace patient medical record numbers with pseudonymous tokens such that the same medical ID always maps to the same token across multiple datasets without revealing the original ID.",
    question: "Which Sensitive Data Protection transformation preserves analytical referential integrity across tables?",
    options: [
      { id: 'A', text: "Simple Redaction" },
      { id: 'B', text: "Random Masking" },
      { id: 'C', text: "Deterministic Encryption / CryptoReplaceFfxFpeConfig (Format-Preserving Encryption)" },
      { id: 'D', text: "Date Shifting" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Sensitive Data Protection supports `Deterministic Encryption` (such as Format-Preserving Encryption via `CryptoReplaceFfxFpeConfig`). It produces the same surrogate token for identical input values using a cryptographic key, preserving join relationships across disparate tables while hiding raw PII.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/pseudonymization",
    tags: ["Sensitive Data Protection", "Pseudonymization", "Tokenization"]
  },
  {
    id: "gcp-pca-142",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Security Health Analytics (SHA) Automated Misconfiguration Detection",
    scenario: "A cloud administrator mistakenly opens a Cloud Storage bucket to the public internet (`allUsers: roles/storage.objectViewer`).",
    question: "Which Security Command Center service automatically detects this security misconfiguration and raises a critical finding?",
    options: [
      { id: 'A', text: "Security Health Analytics (SHA)" },
      { id: 'B', text: "Event Threat Detection" },
      { id: 'C', text: "Container Threat Detection" },
      { id: 'D', text: "Cloud Armor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Security Health Analytics` (SHA) is a core component of Security Command Center. It continuously scans Google Cloud resources against CIS benchmarks and security baselines, automatically detecting open storage buckets, overly permissive firewall rules, and missing MFA.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/concepts-security-health-analytics-overview",
    tags: ["Security Command Center", "SHA", "Posture Management"]
  },
  {
    id: "gcp-pca-143",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Event Threat Detection (ETD) in Security Command Center",
    scenario: "A compromised service account key is used to launch unauthorized cryptocurrency mining Compute Engine instances from an unapproved geographic region.",
    question: "Which Security Command Center feature analyzes Cloud Logging streams in near-real-time to detect anomalous threats?",
    options: [
      { id: 'A', text: "Cloud Monitoring alone" },
      { id: 'B', text: "Web Security Scanner" },
      { id: 'C', text: "Security Health Analytics" },
      { id: 'D', text: "Event Threat Detection (ETD)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Event Threat Detection` (ETD) in SCC Premium continuously analyzes streaming audit logs and network metadata using Google proprietary threat intelligence to detect malware, coin-mining, data exfiltration, and brute-force attacks.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview",
    tags: ["Security Command Center", "ETD", "Threat Intelligence"]
  },
  {
    id: "gcp-pca-144",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Container Threat Detection in Security Command Center",
    scenario: "A container running on GKE is compromised by an attacker who executes a reverse shell and drops a malicious binary into the container filesystem.",
    question: "Which Security Command Center service inspects low-level container behavior (e.g. execution of unknown binaries) in real time?",
    options: [
      { id: 'A', text: "Binary Authorization" },
      { id: 'B', text: "Container Analysis alone" },
      { id: 'C', text: "Container Threat Detection" },
      { id: 'D', text: "Event Threat Detection" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Container Threat Detection` continuously monitors the runtime state of containerized workloads running on GKE. It monitors container execution, detecting suspicious behaviors like unexpected binary execution, reverse shells, and malicious libraries.",
    referenceUrl: "https://cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview",
    tags: ["Security Command Center", "Container Security", "Runtime Defense"]
  },
  {
    id: "gcp-pca-145",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud Armor Named IP Lists for Threat Intelligence",
    scenario: "A web application on Cloud Load Balancing needs to block traffic originating from known malicious IP addresses, Tor exit nodes, and botnet networks identified by Google threat intelligence.",
    question: "Which Cloud Armor feature provides Google-curated IP threat intelligence lists that update automatically?",
    options: [
      { id: 'A', text: "Disabling HTTP load balancing" },
      { id: 'B', text: "Cloud Armor Named IP Lists (e.g. evaluatePreconfiguredExpr('cve-canary') or src.ip_in_list('google-tor-exit-nodes'))" },
      { id: 'C', text: "Blocking all traffic from international regions" },
      { id: 'D', text: "Manually maintaining thousands of CIDR rules in firewall lists" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Armor `Named IP Lists` provide preconfigured, Google-managed lists of IP addresses associated with specific threat categories (e.g. Tor exit nodes, search engine crawlers, open proxies). Google updates these lists continuously without requiring manual administrative rules.",
    referenceUrl: "https://cloud.google.com/armor/docs/rule-tuning#named-ip-lists",
    tags: ["Cloud Armor", "Named IP Lists", "Threat Intelligence"]
  },
  {
    id: "gcp-pca-146",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Google Cloud Armor Preconfigured WAF Rules for OWASP Top 10",
    scenario: "An enterprise web application requires protection against SQL injection (SQLi) and cross-site scripting (XSS) attacks at Google's global network edge.",
    question: "Which Cloud Armor capability provides managed ModSecurity CRS rules for OWASP Top 10 mitigation?",
    options: [
      { id: 'A', text: "Cloud Armor Preconfigured WAF Rules (e.g. evaluatePreconfiguredExpr('sqli-v33-stable'))" },
      { id: 'B', text: "VPC Firewall Rules" },
      { id: 'C', text: "Cloud Endpoints proxy" },
      { id: 'D', text: "Compute Engine guest firewall" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Armor `Preconfigured WAF Rules` are managed rule sets based on the OWASP ModSecurity Core Rule Set (CRS). They evaluate incoming request headers, bodies, and query strings for common vulnerabilities (SQLi, XSS, RFI, LFI) at edge PoPs.",
    referenceUrl: "https://cloud.google.com/armor/docs/waf-rules",
    tags: ["Cloud Armor", "OWASP", "WAF Rules"]
  },
  {
    id: "gcp-pca-147",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud KMS Key Rings and Regional Key Isolation",
    scenario: "A security architect is structuring Cloud KMS keys for an enterprise operating in Europe and North America. Regulatory compliance requires that encryption keys used in Europe can never leave the European geography.",
    question: "How should Key Rings be provisioned to enforce geographic cryptographic isolation?",
    options: [
      { id: 'A', text: "Create Key Rings in specific regional locations (e.g. europe-west1 or europe-west3) matching data residency requirements" },
      { id: 'B', text: "Create a single global Key Ring in US-Central" },
      { id: 'C', text: "Keys in Cloud KMS can never be regionally constrained" },
      { id: 'D', text: "Store key rings in a public GitHub repository" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Cloud KMS, `Key Rings` are regional or multi-regional resources that belong to a specific location (e.g. `europe-west1`). Keys created within a regional Key Ring never physically leave that designated region, ensuring strict cryptographic data residency compliance.",
    referenceUrl: "https://cloud.google.com/kms/docs/locations",
    tags: ["Cloud KMS", "Key Rings", "Data Residency"]
  },
  {
    id: "gcp-pca-148",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Cloud Storage Retention Policy vs Object Holds",
    scenario: "A legal department places a litigation hold on an investigation folder in Cloud Storage. The files must be prevented from deletion indefinitely while the lawsuit is active, independent of the bucket's 30-day retention policy.",
    question: "Which Cloud Storage feature prevents deletion of specific individual objects until released by legal teams?",
    options: [
      { id: 'A', text: "Bucket Lock" },
      { id: 'B', text: "Lifecycle management rule" },
      { id: 'C', text: "Object Versioning alone" },
      { id: 'D', text: "Object Holds (Event-based or Temporary Hold)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage `Object Holds` prevent individual objects from being deleted or modified. Unlike bucket retention policies that apply uniformly based on age, an `Event-based hold` or `Temporary hold` freezes an object indefinitely until a legal administrator explicitly removes the hold.",
    referenceUrl: "https://cloud.google.com/storage/docs/object-holds",
    tags: ["Cloud Storage", "Object Holds", "Legal Hold"]
  },
  {
    id: "gcp-pca-149",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "VPC Firewall Logging for Security Information and Event Management (SIEM)",
    scenario: "A cybersecurity operations team requires all permitted and denied network connections evaluated by VPC firewall rules to be exported to Splunk for compliance auditing.",
    question: "How can the security administrator capture logs for individual VPC firewall rules?",
    options: [
      { id: 'A', text: "Export Cloud Billing data" },
      { id: 'B', text: "Deploy a syslog agent on every VM" },
      { id: 'C', text: "Enable Packet Mirroring on all subnets" },
      { id: 'D', text: "Enable Firewall Rules Logging on the target firewall rule" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud allows administrators to enable `Firewall Rules Logging` on any individual firewall rule. When enabled, every connection allowed or denied by that specific rule generates a log record in Cloud Logging containing source, destination, protocol, and rule ID, which can be routed to external SIEMs.",
    referenceUrl: "https://cloud.google.com/vpc/docs/firewall-rules-logging",
    tags: ["VPC", "Firewall Logging", "SIEM"]
  },
  {
    id: "gcp-pca-150",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d3",
    domainName: "Designing for security and compliance",
    title: "Identity-Aware Proxy (IAP) Context-Aware Access with Access Context Manager",
    scenario: "An enterprise configures Identity-Aware Proxy (IAP). High-privilege production web apps must be accessible only by authorized employees who connect from company-managed corporate laptops with disk encryption enabled.",
    question: "Which Google Cloud service defines context-aware device and IP attributes for IAP evaluation?",
    options: [
      { id: 'A', text: "Compute Engine OS Login" },
      { id: 'B', text: "Cloud Armor Security Policy" },
      { id: 'C', text: "Access Context Manager (Context-Aware Access levels)" },
      { id: 'D', text: "Cloud Identity basic authentication" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Access Context Manager` allows organizations to define granular `Access Levels` based on user attributes, geographic IP location, and device signals (e.g. verified corporate device, OS version, disk encryption). IAP evaluates these access levels before granting session entry.",
    referenceUrl: "https://cloud.google.com/access-context-manager/docs/overview",
    tags: ["Access Context Manager", "IAP", "BeyondCorp"]
  }
];

export default GCP_PCA_QUESTIONS_6;
