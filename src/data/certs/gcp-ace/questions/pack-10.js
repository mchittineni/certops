export const GCP_ACE_QUESTIONS_10 = [
  {
    id: "gcp-ace-226",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Enforcing Keyless Architecture via Organization Policy Constraints",
    scenario: "A company adopts a zero-trust security mandate prohibiting the generation of unmanaged service account JSON keys. The security team wants to prevent any developer or project owner across the organization from creating new service account keys.",
    question: "Which Organization Policy constraint enforces this restriction?",
    options: [
      { id: 'A', text: "Revoke 'roles/iam.serviceAccountAdmin' from all users" },
      { id: 'B', text: "Enforce constraint 'constraints/iam.disableServiceAccountKeyCreation' at the organization root level" },
      { id: 'C', text: "Delete all service accounts from the default project" },
      { id: 'D', text: "Enable Cloud KMS automatic key rotation" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Organization Policy constraint 'constraints/iam.disableServiceAccountKeyCreation' blocks the creation of user-managed service account keys (JSON and PKCS12 files) across all projects in the organization. This forces teams to adopt modern, secure alternatives like Workload Identity and Workload Identity Federation.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "ServiceAccounts", "Governance"]
  },
  {
    id: "gcp-ace-227",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Scalable Team Permissions Management Using Google Groups",
    scenario: "A rapidly expanding cloud engineering department has 60 developers across 5 scrum teams. New developers join every week, and roles change frequently. The security team currently assigns IAM roles directly to individual developer email addresses on each project.",
    question: "What is the recommended enterprise best practice to streamline IAM administration?",
    options: [
      { id: 'A', text: "Write a weekly Python script that iterates through projects and syncs permissions" },
      { id: 'B', text: "Grant the primitive Owner role to all developers" },
      { id: 'C', text: "Create Google Groups in Google Workspace/Cloud Identity corresponding to job functions, assign IAM roles to the groups, and manage permissions by adjusting group membership" },
      { id: 'D', text: "Share a single corporate service account JSON key among all developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud strongly recommends assigning IAM roles to Google Groups (e.g. 'dev-team@company.com') rather than individual user accounts. Group membership is managed centrally in Google Workspace, Cloud Identity, or synchronized from Active Directory, automatically granting or revoking cloud permissions as personnel changes occur.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "GoogleGroups", "Administration"]
  },
  {
    id: "gcp-ace-228",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Providing Time-Limited Direct Upload Access with Signed URLs",
    scenario: "A mobile application allows end users to upload profile avatars directly to a private Cloud Storage bucket. End users do not have Google accounts and must not be granted direct IAM access to the bucket.",
    question: "How should the backend server authorize these direct client uploads?",
    options: [
      { id: 'A', text: "Make the Cloud Storage bucket publicly writable (allUsers)" },
      { id: 'B', text: "Embed a service account JSON key in the mobile application binary" },
      { id: 'C', text: "Deploy an unmanaged FTP server on Compute Engine" },
      { id: 'D', text: "Generate a Cloud Storage Signed URL with write permissions and a 15-minute expiration, and provide it to the mobile client" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage Signed URLs provide time-limited cryptographic tokens that allow anyone with the URL to read, write, or delete a specific object without requiring a Google account. The application backend signs the URL using its service account credentials, granting the client temporary direct upload access with an exact expiration time.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "SignedURLs", "Security"]
  },
  {
    id: "gcp-ace-229",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Securing Kubernetes Supply Chains with Binary Authorization",
    scenario: "A financial institution requires that only container images that have passed automated vulnerability scans, unit testing, and compliance checks in the CI/CD pipeline can be deployed to production GKE clusters. Manually pushed or unsigned images must be rejected.",
    question: "Which Google Cloud security service enforces this deployment verification?",
    options: [
      { id: 'A', text: "Artifact Registry vulnerability scanning alone" },
      { id: 'B', text: "Binary Authorization" },
      { id: 'C', text: "Cloud Security Command Center" },
      { id: 'D', text: "Container Analysis" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Binary Authorization is a deploy-time security control for GKE. It integrates with Kubernetes admission controllers to ensure only container images signed by designated attestors (e.g., CI/CD verification pipelines, vulnerability scanners) are permitted to schedule pods in the cluster, blocking untrusted images.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BinaryAuthorization", "GKE", "SupplyChainSecurity"]
  },
  {
    id: "gcp-ace-230",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Executing Administrative Tasks via Service Account Impersonation",
    scenario: "A cloud engineer needs to execute a production Terraform deployment script from their local terminal that requires elevated privileges held by 'terraform-deployer@project.iam.gserviceaccount.com'. The engineer must not download a static JSON key.",
    question: "Which gcloud flag allows the engineer to assume the service account's identity directly?",
    options: [
      { id: 'A', text: "--impersonate-service-account=terraform-deployer@project.iam.gserviceaccount.com" },
      { id: 'B', text: "--assume-role=terraform-deployer" },
      { id: 'C', text: "--auth-as=terraform-deployer" },
      { id: 'D', text: "--service-account=terraform-deployer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The '--impersonate-service-account' flag instructs the gcloud CLI to request short-lived credentials for the designated service account. Provided the engineer possesses the 'roles/iam.serviceAccountTokenCreator' role on that service account, commands execute with the service account's permissions without any persistent keys on disk.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "Impersonation", "Security"]
  },
  {
    id: "gcp-ace-231",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Auditing Cloud Provider Support Access with Access Transparency",
    scenario: "A highly regulated bank must maintain complete audit visibility into all administrative actions performed on their cloud environment, including any instances where Google Cloud Support engineers or Site Reliability Engineers access customer data during troubleshooting.",
    question: "Which Google Cloud feature provides audit logs of Google personnel access?",
    options: [
      { id: 'A', text: "Access Transparency" },
      { id: 'B', text: "Security Command Center Premium" },
      { id: 'C', text: "Cloud Audit Logs - Admin Activity" },
      { id: 'D', text: "VPC Service Controls" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Access Transparency captures near-real-time audit logs whenever Google personnel (support technicians, engineering staff) access customer content to resolve support tickets or address system outages. Logs include the engineer's office location, the accessed resource, and the specific business justification.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["AccessTransparency", "Compliance", "Audit"]
  },
  {
    id: "gcp-ace-232",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Discovering and Masking PII Data with Sensitive Data Protection (Cloud DLP)",
    scenario: "A credit card processor stores petabytes of customer transaction records in BigQuery and Cloud Storage. Regulatory compliance requires scanning these data stores to discover unencrypted primary account numbers (PAN) and automatically mask them before sharing with business analysts.",
    question: "Which Google Cloud service specializes in sensitive data discovery and de-identification?",
    options: [
      { id: 'A', text: "Cloud KMS" },
      { id: 'B', text: "Sensitive Data Protection (formerly Cloud DLP)" },
      { id: 'C', text: "Cloud Armor" },
      { id: 'D', text: "Secret Manager" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sensitive Data Protection (Cloud DLP) is a managed service for discovering, classifying, and protecting sensitive data (PII, payment card numbers, SSNs). It provides inspection templates to detect sensitive infoTypes across Cloud Storage, BigQuery, and Datastore, and provides de-identification transformations (masking, tokenization, redaction).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["SensitiveDataProtection", "CloudDLP", "Compliance"]
  },
  {
    id: "gcp-ace-233",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Restricting External Public IP Allocations with Organization Policies",
    scenario: "An enterprise security architect establishes a security baseline requiring that no virtual machine created in the organization should ever be assigned a public external IP address. VMs must be completely private.",
    question: "Which Organization Policy constraint enforces this restriction across all projects?",
    options: [
      { id: 'A', text: "Enforce constraint 'constraints/compute.vmExternalIpAccess' with a Deny All policy" },
      { id: 'B', text: "Delete all default internet gateways" },
      { id: 'C', text: "Create an egress firewall rule blocking 0.0.0.0/0" },
      { id: 'D', text: "Disable the default VPC network in each region" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'constraints/compute.vmExternalIpAccess' organization policy constraint restricts which VM instances are permitted to configure external IP addresses. Applying this constraint with 'Deny All' blocks any user or automated script from provisioning a Compute Engine VM with a public IP address anywhere in the organization.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "Networking", "Security"]
  },
  {
    id: "gcp-ace-234",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Restricting Access to Sensitive Table Columns with BigQuery Policy Tags",
    scenario: "An analytics table in BigQuery contains customer demographics, including an 'ssn' (Social Security Number) column. Most business analysts require access to query demographic trends, but only authorized HR compliance officers should be allowed to view the plaintext SSN column.",
    question: "How should column-level access control be implemented in BigQuery?",
    options: [
      { id: 'A', text: "Grant the 'roles/bigquery.dataViewer' role to analysts and create an IAM deny policy on the column" },
      { id: 'B', text: "Create two separate datasets in different regions" },
      { id: 'C', text: "Encrypt the entire table using Customer-Supplied Encryption Keys (CSEK)" },
      { id: 'D', text: "Create a Policy Tag in Dataplex (Data Catalog), associate it with the 'ssn' column in the BigQuery table schema, and grant the 'Fine-Grained Reader' role on the policy tag only to HR compliance officers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery supports column-level security using Policy Tags managed in Dataplex (Data Catalog). By attaching a policy tag to the sensitive column ('ssn'), only principals granted the 'Fine-Grained Reader' role on that policy tag can query and view data in that column; unauthorized users attempting to query the table receive an access error or masked values.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "ColumnLevelSecurity", "Dataplex"]
  },
  {
    id: "gcp-ace-235",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Auditing Unauthorized Resource Modifications via Cloud Audit Logs",
    scenario: "A production Compute Engine instance is unexpectedly stopped during business hours. An incident responder needs to determine the exact identity (user or service account email) that executed the stop command and the exact timestamp of the event.",
    question: "Which log query in Logs Explorer retrieves this information from Cloud Audit Logs?",
    options: [
      { id: 'A', text: "logName=\"projects/[PROJECT]/logs/syslog\" AND message=~\"halt\"" },
      { id: 'B', text: "SELECT caller FROM compute.instances WHERE action='stop'" },
      { id: 'C', text: "logName=\"projects/[PROJECT]/logs/cloudaudit.googleapis.com%2Factivity\" AND protoPayload.methodName=\"v1.compute.instances.stop\"" },
      { id: 'D', text: "resource.type=\"gce_instance\" AND severity=ERROR AND textPayload=~\"stopped\"" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Administrative modifications (such as stopping an instance, creating a disk, or updating firewall rules) are captured in Cloud Audit Logs under the 'activity' log stream ('cloudaudit.googleapis.com/activity'). Filtering by 'protoPayload.methodName=\"v1.compute.instances.stop\"' displays the API call details, including 'protoPayload.authenticationInfo.principalEmail', revealing the caller.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "AuditLogs", "Security"]
  },
  {
    id: "gcp-ace-236",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Preventing Accidental Public Sharing with Domain Restriction Constraint",
    scenario: "A financial firm requires that cloud resources, storage buckets, and IAM roles must only be shared with authenticated users belonging to the corporate Google Workspace domain ('company.com'). Sharing with external Gmail accounts must be strictly blocked.",
    question: "Which Organization Policy constraint enforces this domain restriction?",
    options: [
      { id: 'A', text: "Remove the primitive Owner role from all administrators" },
      { id: 'B', text: "Enforce constraint 'constraints/iam.allowedPolicyMemberDomains' with the corporate Cloud Identity customer ID" },
      { id: 'C', text: "Delete all external DNS zone records in Cloud DNS" },
      { id: 'D', text: "Disable public internet access on all VPC networks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'constraints/iam.allowedPolicyMemberDomains' organization policy constraint restricts IAM policy bindings so that roles can only be granted to principals from designated Google Workspace or Cloud Identity customer accounts. Any attempt to grant a role to a personal '@gmail.com' account or external third-party domain is immediately blocked.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "DomainRestriction", "Governance"]
  },
  {
    id: "gcp-ace-237",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Securing Database Access with Cloud SQL IAM Database Authentication",
    scenario: "An enterprise wants to eliminate static database passwords for MySQL and PostgreSQL on Cloud SQL. Developers and microservices should authenticate to the database using their existing Google Cloud IAM credentials and OAuth tokens.",
    question: "Which Cloud SQL feature supports passwordless IAM database logins?",
    options: [
      { id: 'A', text: "Identity-Aware Proxy TCP forwarding" },
      { id: 'B', text: "Cloud SQL IAM database authentication" },
      { id: 'C', text: "Compute Engine OS Login" },
      { id: 'D', text: "Cloud SQL Auth Proxy with static RSA keys" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud SQL IAM database authentication allows users and service accounts to authenticate directly to MySQL and PostgreSQL instances using short-lived Google Cloud IAM OAuth2 access tokens instead of traditional database passwords, integrating database security with corporate identity lifecycles.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "IAMAuth", "Security"]
  },
  {
    id: "gcp-ace-238",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Restricting Cloud IAM Roles to Specific Compute Engine Instances",
    scenario: "A company employs an external vendor to maintain a legacy billing VM named 'billing-server' in zone 'us-central1-a'. The vendor must have full administrative control over this single VM, but must not be able to view, modify, or delete any other VM instances in the project.",
    question: "How should the IAM permissions be assigned?",
    options: [
      { id: 'A', text: "Create a separate VPC network for the vendor" },
      { id: 'B', text: "Grant 'roles/compute.instanceAdmin.v1' directly on the 'billing-server' VM instance resource using 'gcloud compute instances add-iam-policy-binding'" },
      { id: 'C', text: "Grant 'roles/compute.instanceAdmin.v1' at the project level with an IAM condition on zone" },
      { id: 'D', text: "Grant 'roles/viewer' on the project and make the vendor a sudoer on the VM OS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Compute Engine supports resource-level IAM policies. Instead of granting instance administrative permissions across the entire project, permissions can be granted directly on an individual VM resource ('gcloud compute instances add-iam-policy-binding &lt;VM&gt;'), restricting the vendor's administrative authority strictly to that target machine.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ResourceLevelIAM", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-239",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Automated Cryptographic Key Rotation in Cloud KMS",
    scenario: "An enterprise cryptographic policy mandates that all customer-managed encryption keys (CMEK) must be rotated every 90 days. When a key is rotated, existing data encrypted with the older key must remain decryptable without requiring an immediate, massive re-encryption batch job.",
    question: "How does Cloud KMS manage automated key rotation and past version decryption?",
    options: [
      { id: 'A', text: "Configure an automated rotation period of 90 days on the CryptoKey; Cloud KMS creates a new primary version for future encryptions while preserving older versions to seamlessly decrypt historical data" },
      { id: 'B', text: "Cloud KMS creates a new Key Ring and updates project IAM policies automatically" },
      { id: 'C', text: "The administrator must export the raw key material and re-import it every 90 days" },
      { id: 'D', text: "Cloud KMS deletes the old key and triggers a batch re-encryption of all Cloud Storage objects" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud KMS supports automated key rotation schedules (e.g. '--rotation-period=90d'). When rotation occurs, Cloud KMS generates a new active key version used for all new encryption operations, while all past key versions remain stored and enabled to automatically decrypt historical data without manual re-encryption.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudKMS", "KeyRotation", "Security"]
  },
  {
    id: "gcp-ace-240",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Securing GKE Control Planes with Master Authorized Networks",
    scenario: "A private GKE cluster's Kubernetes API endpoint is accessible over HTTPS. A security auditor mandates that the cluster control plane must reject all connections originating from public or untrusted IP addresses, allowing access only from corporate office public CIDRs.",
    question: "Which GKE feature restricts API access to specific external CIDR blocks?",
    options: [
      { id: 'A', text: "Apply a Kubernetes NetworkPolicy to the kube-system namespace" },
      { id: 'B', text: "Deploy Cloud Armor on the Kubernetes cluster nodes" },
      { id: 'C', text: "Configure a VPC firewall rule with target tag 'k8s-master'" },
      { id: 'D', text: "Enable Master Authorized Networks on the GKE cluster and specify the corporate public CIDR ranges" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GKE Master Authorized Networks allows administrators to specify an allowlist of trusted CIDR blocks (such as corporate office egress IPs or bastion CIDRs) permitted to reach the Kubernetes API master endpoint, blocking unauthorized connection attempts even if credentials are compromised.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "MasterAuthorizedNetworks", "Security"]
  },
  {
    id: "gcp-ace-241",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Enforcing Organization-Wide Uniform Bucket-Level Access",
    scenario: "A chief risk officer requires that all newly created Cloud Storage buckets across every project in the company must use Uniform Bucket-Level Access (disabling legacy object ACLs) to guarantee consistent IAM auditing.",
    question: "Which Organization Policy constraint guarantees compliance with this rule?",
    options: [
      { id: 'A', text: "Remove all object viewer permissions in IAM" },
      { id: 'B', text: "Apply the 'roles/storage.admin' role to the Organization Administrator only" },
      { id: 'C', text: "Enforce constraint 'constraints/storage.uniformBucketLevelAccess' across the organization" },
      { id: 'D', text: "Enable Bucket Lock on all existing buckets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The organization policy constraint 'constraints/storage.uniformBucketLevelAccess' enforces that all newly created Cloud Storage buckets in the organization must have Uniform Bucket-Level Access enabled, permanently disabling legacy object-level ACLs across the fleet.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "CloudStorage", "Compliance"]
  },
  {
    id: "gcp-ace-242",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Detecting Compromised Instances and Container Threats with Security Command Center",
    scenario: "An attacker compromises a container running inside a GKE cluster on Google Cloud and attempts to execute a cryptocurrency miner binary and establish outbound command-and-control communication.",
    question: "Which Google Cloud security product detects malicious container executions and outbound threats?",
    options: [
      { id: 'A', text: "Cloud Profiler" },
      { id: 'B', text: "Security Command Center (SCC) with Container Threat Detection and Event Threat Detection" },
      { id: 'C', text: "Cloud Armor" },
      { id: 'D', text: "Cloud Trace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Security Command Center (SCC) provides enterprise threat detection. Specifically, Container Threat Detection continuously monitors container runtimes to detect unauthorized binaries, reverse shells, and malicious code, while Event Threat Detection analyzes log streams for brute force attacks and cryptomining activity.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["SecurityCommandCenter", "ThreatDetection", "Security"]
  },
  {
    id: "gcp-ace-243",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Enforcing Zero-Trust Context-Aware Access with Identity-Aware Proxy",
    scenario: "A corporation publishes an internal web application through Identity-Aware Proxy. The company wants to restrict access so that employees can only log in if they are located within the United States, connecting from an enterprise-managed corporate laptop with disk encryption enabled.",
    question: "Which Google Cloud service integrates with IAP to enforce these device and location context rules?",
    options: [
      { id: 'A', text: "Cloud Armor standard policy" },
      { id: 'B', text: "VPC Flow Logs" },
      { id: 'C', text: "Cloud NAT" },
      { id: 'D', text: "Access Context Manager" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Access Context Manager allows administrators to define fine-grained, context-aware access levels based on user identity, device security status (managed device, disk encryption), IP subnet, and geographic location. These access levels are attached to Identity-Aware Proxy to enforce zero-trust security.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["AccessContextManager", "IAP", "ZeroTrust"]
  },
  {
    id: "gcp-ace-244",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Right-Sizing Excess Permissions with Cloud IAM Recommender",
    scenario: "A security team notices that developers have been assigned broad primitive roles like 'roles/editor' during early development. The team wants to reduce privileges to the minimum required permissions based on actual observed usage over the last 90 days.",
    question: "Which native Google Cloud tool generates automated least-privilege role recommendations?",
    options: [
      { id: 'A', text: "Cloud Audit Logs Explorer" },
      { id: 'B', text: "Policy Simulator" },
      { id: 'C', text: "IAM Recommender (Role Recommendations)" },
      { id: 'D', text: "Cloud Security Command Center Asset Inventory" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud IAM Recommender uses machine learning and historical audit log analysis over the preceding 90 days to identify permissions granted to users and service accounts that were never exercised. It automatically recommends narrower, least-privilege predefined or custom roles to eliminate excess privileges.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "IAMRecommender", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-245",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Verifying VM Firmware Integrity with Shielded VM Secure Boot and vTPM",
    scenario: "A security standard mandates that Compute Engine virtual machines must verify the digital signature of all bootloader and kernel software to block bootkits, and must store cryptographic boot measurement hashes in virtual hardware.",
    question: "Which two Shielded VM features fulfill these security requirements?",
    options: [
      { id: 'A', text: "OS Login and Identity-Aware Proxy" },
      { id: 'B', text: "Binary Authorization and Container Analysis" },
      { id: 'C', text: "Secure Boot and Virtual Trusted Platform Module (vTPM)" },
      { id: 'D', text: "Confidential Computing AMD SEV and Cloud KMS" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Shielded VMs provide verifiable boot integrity: 1) Secure Boot halts the boot sequence if unsigned or modified bootloaders, kernels, or drivers are detected; and 2) vTPM (virtual Trusted Platform Module) performs measured boot by storing cryptographic hashes of boot stages in secure virtual registers.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "ShieldedVM", "HardwareSecurity"]
  },
  {
    id: "gcp-ace-246",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Sharing Data Across VPC Service Controls Perimeters with Ingress and Egress Rules",
    scenario: "An enterprise deploys two distinct VPC Service Controls perimeters: 'Finance-Perimeter' and 'Analytics-Perimeter'. An automated pipeline in the Analytics perimeter needs to read specific data from a Cloud Storage bucket inside the Finance perimeter without dismantling perimeter protection.",
    question: "How should the security architect configure cross-perimeter communication?",
    options: [
      { id: 'A', text: "Configure complementary Ingress and Egress rules on both service perimeters defining the allowed projects, identities, and API methods" },
      { id: 'B', text: "Deploy an unmanaged Squid proxy between the perimeters" },
      { id: 'C', text: "Delete both perimeters and rely on VPC firewall rules" },
      { id: 'D', text: "Assign the primitive Owner role to the pipeline service account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Service Controls supports secure cross-perimeter data sharing via Ingress and Egress rules (or perimeter bridges). By defining explicit Ingress and Egress rules specifying the exact identity (service account), target project, and storage API methods, authorized communication is permitted while maintaining perimeter isolation.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPCServiceControls", "SecurityPerimeters", "Architecture"]
  },
  {
    id: "gcp-ace-247",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Encrypting Storage with Customer-Supplied Encryption Keys (CSEK)",
    scenario: "A defense contractor must maintain absolute ownership of encryption keys and cannot store key material in any cloud service, including Cloud KMS. The contractor wants to encrypt objects uploaded to Cloud Storage using their own 256-bit AES keys passed directly in API requests.",
    question: "Which encryption model satisfies this requirement, and what is the primary operational risk?",
    options: [
      { id: 'A', text: "Cloud HSM; keys are stored in FIPS 140-2 Level 3 hardware modules" },
      { id: 'B', text: "Customer-Supplied Encryption Keys (CSEK); if the contractor loses the raw key, Google Cloud cannot recover or decrypt the data under any circumstances" },
      { id: 'C', text: "Google-Default Encryption; Google rotates keys without user involvement" },
      { id: 'D', text: "Customer-Managed Encryption Keys (CMEK); keys are automatically backed up to Google Workspace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Customer-Supplied Encryption Keys (CSEK) allow clients to provide raw 256-bit AES keys in API request headers. Google Cloud uses the key in memory to encrypt or decrypt objects and immediately purges it. Google never stores CSEK keys; if the customer loses the key, the data is permanently lost with zero possibility of recovery.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "CSEK", "Encryption"]
  },
  {
    id: "gcp-ace-248",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Testing IAM Policy Changes Before Deployment with Policy Simulator",
    scenario: "A security administrator plans to remove several permissions from a widely used custom IAM role. The administrator is concerned that removing these permissions might inadvertently break automated microservices or production deployment pipelines.",
    question: "Which Google Cloud tool allows testing the impact of IAM changes against historical access logs before applying them?",
    options: [
      { id: 'A', text: "Policy Simulator" },
      { id: 'B', text: "IAM Recommender" },
      { id: 'C', text: "Security Command Center" },
      { id: 'D', text: "Policy Analyzer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Policy Simulator allows administrators to simulate proposed changes to IAM policy bindings against historical access logs (up to 90 days). It reports exactly which user or service account requests that previously succeeded would be denied under the proposed policy, preventing unintended production outages.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "PolicySimulator", "Governance"]
  },
  {
    id: "gcp-ace-249",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Auditing Policy Violations with Policy Denied Audit Logs",
    scenario: "A developer attempts to access a production BigQuery dataset protected by a VPC Service Controls perimeter from an unauthorized home IP address. The request is immediately rejected with HTTP 403 Forbidden.",
    question: "Which specific log stream records the detailed perimeter violation telemetry for security forensics?",
    options: [
      { id: 'A', text: "Compute Engine serial port logs" },
      { id: 'B', text: "Policy Denied audit logs in Cloud Logging" },
      { id: 'C', text: "VPC Flow Logs" },
      { id: 'D', text: "Cloud Storage access logs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Policy Denied audit logs are automatically emitted to Cloud Logging whenever a security policy—such as a VPC Service Controls perimeter or an IAM Deny rule—rejects an access request. The log entry contains forensic telemetry including caller identity, requested API, source IP, and the specific perimeter violated.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "PolicyDenied", "VPCServiceControls"]
  },
  {
    id: "gcp-ace-250",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "IAM Permissions for Programmatic V4 Signed URL Generation",
    scenario: "A microservice running on Compute Engine generates Cloud Storage V4 Signed URLs so mobile users can upload images directly to a private bucket without routing through the application server. When invoking the signing method via the Google Cloud client library, the service receives a 403 Forbidden error with 'iam.serviceAccounts.signBlob' access denied.",
    question: "Which IAM role must be granted to the microservice's service account to permit blob signing for signed URLs?",
    options: [
      { id: 'A', text: "roles/iam.serviceAccountTokenCreator on the target service account" },
      { id: 'B', text: "roles/iam.serviceAccountUser on the project" },
      { id: 'C', text: "roles/compute.instanceAdmin.v1 on the VM instance" },
      { id: 'D', text: "roles/storage.admin on the target storage bucket" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To generate V4 Signed URLs programmatically using IAM credentials (without local private key files), the calling principal or attached service account must call the IAM signBlob API ('iam.serviceAccounts.signBlob'). This requires the 'roles/iam.serviceAccountTokenCreator' role on the service account identity whose credentials are used to sign the URL.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "SignedURLs", "ServiceAccounts"]
  }
];

export default GCP_ACE_QUESTIONS_10;
