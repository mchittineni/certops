export const GCP_ACE_FLASHCARDS_10 = [
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Identity-Aware Proxy (IAP) for SSH/RDP: Tunneling Without Public IPs",
    "hint": "Secure bastionless remote administration over Google's backbone.",
    "back": "IAP TCP forwarding allows connecting to private VMs via SSH/RDP without public IPs: <code>gcloud compute ssh [VM] --tunnel-through-iap</code>. Prerequisite: A VPC ingress firewall rule must permit TCP traffic from Google's IAP IP block <strong>35.235.240.0/20</strong> on port 22 or 3389.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-226"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "VPC Service Controls: Service Perimeters Against Data Exfiltration",
    "hint": "Confining Google Cloud API calls within a cryptographically isolated security boundary.",
    "back": "<strong>VPC Service Controls</strong> creates a Service Perimeter around projects and Google APIs (GCS, BigQuery). It prevents data exfiltration by blocking API calls initiated from unauthorized networks and blocking copying of sensitive data to unauthorized external Cloud Storage buckets.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-227"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Security Command Center (SCC): Core Capabilities",
    "hint": "Centralized vulnerability, threat, and asset management across the organization.",
    "back": "<strong>Security Command Center (SCC)</strong> provides organization-level security monitoring: 1) Asset inventory; 2) Misconfiguration scanning (Security Health Analytics); 3) Threat detection (Event Threat Detection, Container Threat Detection); and 4) Compliance tracking against CIS and NIST.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-228"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Service Account Key Rotation Governance: Policy Constraints",
    "hint": "Organization policies that enforce keyless security architectures.",
    "back": "Organization policies can block service account key creation: <code>constraints/iam.disableServiceAccountKeyCreation</code> blocks creating new user-managed JSON keys, and <code>constraints/iam.disableServiceAccountKeyUpload</code> blocks uploading external public keys.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-229"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Assigning IAM Roles via gcloud CLI",
    "hint": "The standard command syntax to bind an IAM role to a user or service account.",
    "back": "Run <code>gcloud projects add-iam-policy-binding [PROJECT_ID] --member=\"user:alice@example.com\" --role=\"roles/compute.instanceAdmin.v1\"</code>. Use <code>serviceAccount:</code> prefix for service accounts, and <code>group:</code> prefix for Google Groups.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-230"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Google Groups for Scalable IAM Administration",
    "hint": "The enterprise standard for managing team-level cloud permissions.",
    "back": "Best practice is to assign IAM roles to <strong>Google Groups</strong> (e.g. <code>dev-team@company.com</code>) rather than individual user accounts. Onboarding or offboarding an engineer requires updating group membership in the corporate identity directory, automatically granting or revoking cloud access.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-231"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud Storage IAM vs. Signed URLs: Temporary Anonymous Access",
    "hint": "Allowing an unauthenticated mobile user to upload a photo to a private bucket.",
    "back": "A <strong>Signed URL</strong> grants time-limited read or write access to a specific Cloud Storage object without requiring the client to have a Google account. The URL is cryptographically signed using a service account with appropriate IAM permissions and expires after a defined period (up to 7 days).",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-232"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Binary Authorization on GKE: Enforcing Container Supply Chain Security",
    "hint": "Blocking unsigned or unauthorized container images from being deployed.",
    "back": "<strong>Binary Authorization</strong> integrates with GKE admission controllers to ensure only container images cryptographically signed by trusted authorities (attestors in CI/CD) can be deployed to the cluster, preventing untrusted or compromised images from running in production.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-233"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Service Account Impersonation via gcloud CLI",
    "hint": "Assuming service account privileges in a terminal session without JSON keys.",
    "back": "Execute any gcloud command with the <code>--impersonate-service-account=[SA_EMAIL]</code> flag. The user's authenticated identity requests a short-lived credential for the target service account, requiring <code>roles/iam.serviceAccountTokenCreator</code> on that service account.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-234"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Access Transparency: Auditing Google Cloud Support Access",
    "hint": "Logs showing when Google engineers access your cloud resources.",
    "back": "<strong>Access Transparency</strong> generates audit logs whenever Google Cloud Support engineers or administrators access customer content during troubleshooting or maintenance, recording the engineer's location, justification, and actions performed.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-235"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud KMS Key Rotation: Automated Schedules",
    "hint": "Periodically creating new cryptographic key versions without re-encrypting past data.",
    "back": "Configure automatic rotation on a KMS key (e.g., <code>--rotation-period=90d --next-rotation-time=...</code>). Cloud KMS creates a new primary key version for subsequent encryptions while retaining older versions to decrypt past data seamlessly without manual re-encryption.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-236"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud DLP (Sensitive Data Protection): Inspecting and Masking PII",
    "hint": "Detecting credit card numbers and social security numbers across buckets and databases.",
    "back": "<strong>Sensitive Data Protection (Cloud DLP)</strong> scans Cloud Storage, BigQuery, and Datastore for sensitive infoTypes (credit cards, SSNs, phone numbers). It provides automated transformation actions including masking, redacting, tokenizing, and pseudorandomizing PII data.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-237"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Identity-Aware Proxy (IAP) Context-Aware Access Policies",
    "hint": "Restricting access based on user identity, device health, and geographic location.",
    "back": "IAP integrates with <strong>Access Context Manager</strong> to enforce zero-trust policies: allowing access to internal corporate web applications only if the employee connects from an approved corporate laptop, in a specific country, with disk encryption enabled.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-238"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Granting IAM Roles on Specific Compute Engine Resources",
    "hint": "Restricting instance management permissions to a single virtual machine.",
    "back": "Compute Engine supports <strong>resource-level IAM</strong>. Run <code>gcloud compute instances add-iam-policy-binding [VM] --zone=[ZONE] --member=\"user:bob@example.com\" --role=\"roles/compute.instanceAdmin.v1\"</code>. Grants Bob full control over that single VM without granting project-wide instance admin access.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-239"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud Audit Logs: Policy Denied Audit Logs",
    "hint": "Recording when access requests are blocked by security perimeter boundaries.",
    "back": "<strong>Policy Denied audit logs</strong> are automatically generated whenever a security policy\u2014such as a VPC Service Controls perimeter violation or an IAM Deny rule\u2014blocks an API access request, providing detailed forensic data for security incident investigation.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-240"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Enforcing Organization-Wide Domain Restriction Policy",
    "hint": "Preventing accidental sharing of resources with personal @gmail.com accounts.",
    "back": "Apply the Organization Policy constraint <code>constraints/iam.allowedPolicyMemberDomains</code>. This policy restricts IAM member additions strictly to approved Google Workspace or Cloud Identity customer IDs, blocking users from granting access to external or personal Gmail accounts.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-241"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud SQL IAM Database Authentication",
    "hint": "Logging into PostgreSQL or MySQL using Google Cloud IAM credentials instead of passwords.",
    "back": "Cloud SQL supports <strong>IAM database authentication</strong>. Users and service accounts log into the database using OAuth2 access tokens generated by Google Cloud IAM, eliminating static database passwords and centralizing user lifecycle management in Cloud Identity.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-242"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud Storage Bucket Policy Only (Uniform Bucket-Level Access)",
    "hint": "The constraint enforcing bucket-level IAM policies across all newly created buckets.",
    "back": "Apply organization policy constraint <code>constraints/storage.uniformBucketLevelAccess</code>. This mandate guarantees that every new Cloud Storage bucket created within the organization must use Uniform Bucket-Level Access, preventing the use of legacy object ACLs.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-243"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud IAM Role Recommendations (Recommender API)",
    "hint": "Using machine learning to enforce least-privilege by identifying unused permissions.",
    "back": "Google Cloud <strong>IAM Recommender</strong> analyzes access logs over the past 90 days to identify permissions granted to users or service accounts that were never exercised, automatically suggesting safer, narrower predefined or custom roles to eliminate excess privileges.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-244"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Compute Engine Shielded VM: Secure Boot vs. vTPM",
    "hint": "Blocking unauthorized boot loaders vs. measuring kernel integrity.",
    "back": "<strong>Secure Boot</strong> stops the boot process if the hypervisor detects unsigned firmware or kernel modules. <strong>vTPM</strong> performs measured boot, storing cryptographic measurements in virtual hardware registers to alert administrators if OS files have been altered.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-245"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "VPC Service Controls: Ingress and Egress Rules",
    "hint": "Enabling secure communication across two distinct service perimeters.",
    "back": "When projects in Perimeter A need to share data with projects in Perimeter B (or external clients), administrators configure <strong>Ingress and Egress Rules</strong>. These rules define authorized identity, project, and network conditions to allow explicit cross-perimeter API traffic.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-246"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud KMS Customer-Supplied Encryption Keys (CSEK)",
    "hint": "Providing your own raw AES-256 keys to Google APIs without storing keys in KMS.",
    "back": "With <strong>CSEK</strong>, the customer supplies a raw 256-bit AES encryption key in API request headers. Google uses the key in memory to encrypt or decrypt data and immediately purges the key. If the customer loses the raw key, the data is permanently unrecoverable.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-247"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Restricting External IP Allocation via Organization Policy",
    "hint": "Ensuring no Compute Engine VM can be created with a public IP address.",
    "back": "Apply the Organization Policy constraint <code>constraints/compute.vmExternalIpAccess</code>. Configured with a 'Deny All' rule, this constraint prevents developers from attaching public external IP addresses to any VM in the project, mandating private network architectures.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-248"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "BigQuery Column-Level Access Control via Policy Tags",
    "hint": "Restricting visibility of PII columns (like SSN) within a shared table.",
    "back": "Using <strong>Policy Tags</strong> in Dataplex (Data Catalog), administrators tag sensitive schema columns (e.g. <code>pii_ssn</code>). Only users granted the <strong>Fine-Grained Reader</strong> role on that policy tag can view unmasked column data; unauthorized queries return access denied or masked values.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-249"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Auditing Administrative Actions with Cloud Logging Filter for GCF and GCE",
    "hint": "Finding out who stopped a production VM instance.",
    "back": "Query Cloud Audit Logs in Logs Explorer: <code>logName=\"projects/[PROJECT]/logs/cloudaudit.googleapis.com%2Factivity\" protoPayload.methodName=\"v1.compute.instances.stop\"</code>. Inspect <code>protoPayload.authenticationInfo.principalEmail</code> to identify the caller.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-250"
  }
];

export default GCP_ACE_FLASHCARDS_10;
