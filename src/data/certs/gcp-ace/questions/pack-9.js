export const GCP_ACE_QUESTIONS_9 = [
  {
    id: "gcp-ace-201",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Selecting GKE Release Channels Based on Stability Requirements",
    scenario: "A core financial ledger system runs on GKE. Company policy mandates using only battle-tested Kubernetes versions that have undergone extensive enterprise production qualification, minimizing the frequency of version updates.",
    question: "Which GKE Release Channel should be configured for the ledger cluster?",
    options: [
      { id: 'A', text: "Extended support channel" },
      { id: 'B', text: "Rapid channel" },
      { id: 'C', text: "Regular channel" },
      { id: 'D', text: "Stable channel" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The GKE Stable release channel provides Kubernetes versions that have been thoroughly validated in production across Google Cloud over several months. Upgrades are less frequent, offering the highest operational stability and predictability for mission-critical core enterprise workloads.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "ReleaseChannels", "Governance"]
  },
  {
    id: "gcp-ace-202",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Configuring HPA Stabilization Window to Prevent Pod Thrashing",
    scenario: "A ticketing web application experiences brief 15-second traffic bursts every 2 minutes. Horizontal Pod Autoscaler scales out from 5 to 50 pods during a burst, but immediately scales down to 5 pods when the burst ends, causing continuous pod churn and container initialization overhead.",
    question: "Which HPA behavior configuration delays scale-down actions to smooth out autoscaling?",
    options: [
      { id: 'A', text: "Set PodDisruptionBudget to minAvailable: 50" },
      { id: 'B', text: "Configure 'behavior.scaleDown.stabilizationWindowSeconds' to 300 seconds" },
      { id: 'C', text: "Disable Metrics Server on the cluster" },
      { id: 'D', text: "Reduce the CPU target percentage to 10%" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Horizontal Pod Autoscaler 'stabilizationWindowSeconds' parameter (under behavior.scaleDown) defines a cooldown period. HPA evaluates metrics continuously during this window and will not scale down pods until traffic metrics remain below threshold for the entire duration (e.g. 300 seconds), eliminating flapping and thrashing.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "HPA", "Performance"]
  },
  {
    id: "gcp-ace-203",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Querying VM Maintenance Event Status from Guest Operating System",
    scenario: "A high-performance stateful database running on Compute Engine needs advance warning before Google Cloud performs host maintenance (such as live migration) so the database process can pause non-essential background tasks and flush in-memory write buffers.",
    question: "How can an application running inside the VM detect an upcoming maintenance event?",
    options: [
      { id: 'A', text: "Listen on UDP port 53 for DNS broadcast alerts" },
      { id: 'B', text: "Monitor /var/log/syslog for the string 'MAINTENANCE'" },
      { id: 'C', text: "Subscribe to the Cloud Billing Pub/Sub topic" },
      { id: 'D', text: "Long-poll the metadata server endpoint 'http://metadata.google.internal/computeMetadata/v1/instance/maintenance-event' with header 'Metadata-Flavor: Google'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Compute Engine notifies instances of upcoming host maintenance events through the internal metadata server. Applications can query 'http://metadata.google.internal/computeMetadata/v1/instance/maintenance-event'. Before a live migration begins, the value changes from 'NONE' to 'MIGRATE_ON_HOST_MAINTENANCE', providing an automated notification window.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Metadata", "LiveMigration"]
  },
  {
    id: "gcp-ace-204",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Optimizing Cloud Bigtable Throughput: Node CPU Utilization Guidance",
    scenario: "An SRE team monitors a single-cluster Cloud Bigtable instance supporting an advertisement bidding engine. Read latency has increased from 4ms to 45ms. In Cloud Monitoring, average cluster CPU utilization is hovering at 85%.",
    question: "What is the recommended action according to Google Cloud best practices?",
    options: [
      { id: 'A', text: "Switch the storage disks from SSD to HDD" },
      { id: 'B', text: "Restart the Bigtable cluster instances during a maintenance window" },
      { id: 'C', text: "Change the table column families to single-version retention" },
      { id: 'D', text: "Add nodes to the Bigtable cluster to reduce average CPU utilization below the recommended 70% threshold" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "For single-cluster Cloud Bigtable deployments, Google Cloud strongly recommends maintaining average CPU utilization below 70% (or below 35% for multi-cluster routing with failover). Exceeding 70% leads to queue queuing delays and latency spikes. Adding nodes distributes tablets and immediately restores low latency.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBigtable", "CapacityPlanning", "Performance"]
  },
  {
    id: "gcp-ace-205",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Analyzing Network Latency and Egress with VPC Flow Logs",
    scenario: "A financial company suspects that an unauthorized process on a private Compute Engine VM in subnet '10.20.0.0/24' is communicating with an external IP address. The network engineer needs to review a log of all network connections, including source and destination IP addresses, ports, and bytes transferred.",
    question: "Which VPC feature captures this network connection telemetry?",
    options: [
      { id: 'A', text: "Enable Packet Mirroring on the default internet gateway" },
      { id: 'B', text: "Enable VPC Flow Logs on the subnet and view records in Cloud Logging" },
      { id: 'C', text: "Deploy an unmanaged Squid proxy instance" },
      { id: 'D', text: "Inspect the Cloud Router dynamic routing table" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "VPC Flow Logs records network telemetry for all IP traffic flows entering and exiting network interfaces within a subnet. Each record captures the 5-tuple (source IP/port, destination IP/port, protocol), packets sent, bytes transferred, and round-trip TCP latency, streaming data directly to Cloud Logging.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "VPCFlowLogs", "Security"]
  },
  {
    id: "gcp-ace-206",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Automating Stack Trace Aggregation with Google Cloud Error Reporting",
    scenario: "A Node.js web application deployed on App Engine and Cloud Run generates thousands of unhandled runtime exceptions during a broken release. SREs are overwhelmed by raw logs in Logs Explorer.",
    question: "Which Google Cloud service automatically parses logs, groups identical exceptions, and tracks resolution status?",
    options: [
      { id: 'A', text: "Cloud Profiler" },
      { id: 'B', text: "Cloud Trace" },
      { id: 'C', text: "Error Reporting" },
      { id: 'D', text: "Security Command Center" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud Error Reporting continuously analyzes application logs in Cloud Logging. It extracts stack traces and error messages, deduplicates and groups identical errors into unified issue cards, tracks error counts and rates over time, and alerts on newly detected exceptions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ErrorReporting", "Observability", "Reliability"]
  },
  {
    id: "gcp-ace-207",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Restoring Persistent Disks Across Zones from Multi-Zone Snapshots",
    scenario: "A data center zone 'us-east1-b' suffers a prolonged electrical substation failure. A critical database instance located in that zone has daily snapshots taken. The team needs to bring up the database in zone 'us-east1-c' as quickly as possible.",
    question: "Can the snapshot taken in zone 'us-east1-b' be used to create a new disk in zone 'us-east1-c'?",
    options: [
      { id: 'A', text: "Only if the snapshot was manually copied using Cloud Storage Transfer Service" },
      { id: 'B', text: "Only if the instance was part of a Regional Managed Instance Group" },
      { id: 'C', text: "No, snapshots can only be restored into the exact zone where the source disk was located" },
      { id: 'D', text: "Yes, Compute Engine snapshots are stored redundantly across all zones in the region (or multi-region) and can restore a disk into any zone within that region" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Persistent Disk snapshots in Compute Engine are regional or multi-regional resources by default, not zonal. Even if the source disk was in zone 'us-east1-b', the snapshot is stored across multiple zones in the region, allowing engineers to create a new persistent disk in zone 'us-east1-c' (or any other zone in the region) immediately.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Snapshots", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-208",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Preventing Cloud Storage Index Hotspotting Under Massive Write Loads",
    scenario: "An IoT telemetry service writes 20,000 JSON sensor payloads per second to Google Cloud Storage. The application uses sequential timestamp filenames (e.g. '2026-09-03-12-00-01-sensor.json', '2026-09-03-12-00-02-sensor.json'). The service begins receiving frequent HTTP 503 Service Unavailable errors and experiencing severe latency spikes.",
    question: "What is the cause of these errors, and what architectural change resolves the issue?",
    options: [
      { id: 'A', text: "The storage class must be converted from Standard to Nearline to handle high IOPS" },
      { id: 'B', text: "Monotonically increasing or sequential object names hotspot a single Cloud Storage backend index shard; prepend a random hash prefix or reverse the timestamp in object keys to distribute write operations evenly across index shards" },
      { id: 'C', text: "The project has reached its maximum persistent disk throughput quota in the region" },
      { id: 'D', text: "Cloud Storage has exceeded its maximum object count per bucket; create separate regional buckets for each sensor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Storage automatically shards bucket index keys lexicographically. If an application writes thousands of objects per second with sequential prefixes (like timestamps or sequential integers), all writes hit the exact same backend shard, exceeding its initial capacity and resulting in HTTP 503 slowdowns. Adding high-entropy random hashes to the prefix distributes requests across multiple storage shards simultaneously.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "Performance", "Architecture"]
  },
  {
    id: "gcp-ace-209",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "GKE Workload Identity for Secure GCP Access",
    scenario: "Applications running in a GKE cluster need to read and write objects in a private Google Cloud Storage bucket. Security policy strictly prohibits downloading and storing long-lived service account private key JSON files inside container images or Kubernetes Secrets.",
    question: "Which Google-recommended mechanism securely connects Kubernetes Pods to Google Cloud APIs?",
    options: [
      { id: 'A', text: "Exporting a service account JSON key and mounting it as a Kubernetes Secret volume" },
      { id: 'B', text: "Assigning the GKE cluster public IP addresses and allowing unauthenticated bucket access" },
      { id: 'C', text: "Compute Engine default service account attached to the node pool with full Cloud API access scopes" },
      { id: 'D', text: "Workload Identity" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Workload Identity is the Google-recommended best practice for authenticating workloads running on GKE to Google Cloud APIs. It maps a Kubernetes Service Account (KSA) directly to a Google Service Account (GSA), allowing Pods to receive temporary, automatically rotated OAuth tokens without storing static service account keys.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
    tags: ["GKE", "Workload Identity", "IAM", "Security"]
  },
  {
    id: "gcp-ace-210",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Predefined Roles vs. Primitive Roles",
    scenario: "A new junior developer joins a company and needs to manage Cloud Storage objects in a specific project. An administrator considers assigning the primitive Editor role (roles/editor).",
    question: "Why is assigning primitive roles considered a security anti-pattern in enterprise environments?",
    options: [
      { id: 'A', text: "Primitive roles cannot be applied to human users and only work on service accounts" },
      { id: 'B', text: "Primitive roles automatically expire after 24 hours and must be refreshed manually" },
      { id: 'C', text: "Primitive roles incur additional hourly administrative licensing charges" },
      { id: 'D', text: "Primitive roles (Owner, Editor, Viewer) grant broad, sweeping permissions across almost all Google Cloud services in the project, violating the principle of least privilege" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Primitive roles (Owner, Editor, Viewer) are coarse-grained legacy roles that apply wide-ranging read/write permissions across virtually every service in a project. Enterprise security best practices mandate using Predefined Roles (such as roles/storage.objectAdmin) or Custom Roles to enforce least privilege.",
    referenceUrl: "https://cloud.google.com/iam/docs/understanding-roles#primitive_roles",
    tags: ["IAM", "Roles", "Least Privilege", "Security"]
  },
  {
    id: "gcp-ace-211",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Service Account User Role (roles/iam.serviceAccountUser)",
    scenario: "A developer needs to deploy and start a Compute Engine virtual machine that runs with a custom service account. The developer already has the Compute Instance Admin role, but receives a permission error when attempting to launch the instance with the service account.",
    question: "Which IAM role must be granted to the developer on the service account?",
    options: [
      { id: 'A', text: "Security Admin (roles/iam.securityAdmin)" },
      { id: 'B', text: "Project Owner (roles/owner)" },
      { id: 'C', text: "Service Account User (roles/iam.serviceAccountUser)" },
      { id: 'D', text: "Service Account Admin (roles/iam.serviceAccountAdmin)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To attach a service account to a resource (such as a Compute Engine VM, Cloud Run service, or Cloud Function), the identity creating or updating the resource must have the `iam.serviceAccounts.actAs` permission on that service account, provided by the `roles/iam.serviceAccountUser` role.",
    referenceUrl: "https://cloud.google.com/iam/docs/service-account-permissions#user-role",
    tags: ["IAM", "Service Accounts", "Compute Engine", "Security"]
  },
  {
    id: "gcp-ace-212",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Understanding IAM Policy Inheritance Across the Resource Hierarchy",
    scenario: "A security engineer notices that a junior developer was granted the 'roles/viewer' role on a Folder named 'Engineering'. The engineer attempts to revoke this viewer permission on a specific production project nested inside the folder by removing the role from the project's IAM policy.",
    question: "What happens when the engineer modifies the project-level IAM policy?",
    options: [
      { id: 'A', text: "The developer retains Viewer access to the project because IAM permissions are inherited from parent folders and cannot be revoked at the child resource level" },
      { id: 'B', text: "The project enters an orphaned IAM state and becomes inaccessible to all users" },
      { id: 'C', text: "The developer loses access to the project while retaining access to all other projects in the folder" },
      { id: 'D', text: "Google Cloud creates an automatic Deny rule on the project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud IAM follows a strict inheritance model where permissions granted at parent levels (Organization, Folder) flow downward to all child resources (Projects, VMs, Buckets). IAM policies are additive (the union of parent and child permissions). A permission inherited from a parent folder cannot be revoked or subtracted by modifying the child project's IAM policy.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ResourceHierarchy", "Governance"]
  },
  {
    id: "gcp-ace-213",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Enforcing Mandatory Organizational Guardrails with IAM Deny Policies",
    scenario: "A company requires that no user or service account—including Project Owners and Organization Administrators—should ever be permitted to delete Cloud Storage buckets in production projects, preventing catastrophic data destruction.",
    question: "Which IAM feature enforces an override that blocks bucket deletion regardless of any granted allow roles?",
    options: [
      { id: 'A', text: "Apply a VPC Service Controls perimeter around the storage API" },
      { id: 'B', text: "Enable Object Versioning on all Cloud Storage buckets" },
      { id: 'C', text: "Create an IAM Deny Policy at the Folder level specifying a deny rule for permission 'storage.buckets.delete'" },
      { id: 'D', text: "Remove the 'roles/storage.admin' role from all developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "IAM Deny Policies enforce hard guardrails that override any existing or future Allow policies. When an IAM Deny rule matches a permission (e.g. 'storage.buckets.delete') for designated principals, access is unconditionally denied, even if the principal possesses the primitive 'Owner' or 'Storage Admin' role.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "DenyPolicies", "Security"]
  },
  {
    id: "gcp-ace-214",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Addressing Security Vulnerabilities in the Default Compute Engine Service Account",
    scenario: "During a cloud architecture audit, a security consultant flags that newly created Compute Engine instances are running under the Compute Engine default service account ('[PROJECT_NUMBER]-compute@developer.gserviceaccount.com').",
    question: "Why is using the default Compute Engine service account considered a severe security risk?",
    options: [
      { id: 'A', text: "Google Cloud automatically grants the primitive 'roles/editor' role to the default service account, giving any compromised VM broad modify permissions across nearly all project services" },
      { id: 'B', text: "The default service account has its credentials published in the public Google directory" },
      { id: 'C', text: "Default service accounts cannot communicate over private VPC networks" },
      { id: 'D', text: "The default service account incurs a 10% premium on VM compute pricing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default, Google Cloud automatically assigns the primitive 'Editor' role ('roles/editor') to the Compute Engine default service account. If an application running on a VM has a remote code execution vulnerability, an attacker can use the VM's metadata credentials to create, modify, or delete almost any resource in the project. Best practice is to attach custom user-managed service accounts with least-privilege roles.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "ServiceAccounts", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-215",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Configuring OAuth Access Scopes vs. IAM Roles on Compute Engine",
    scenario: "A Compute Engine instance runs under a custom service account granted 'roles/storage.objectAdmin'. However, an application on the VM attempting to upload files to Cloud Storage receives an 'Access Denied: Insufficient OAuth Scopes' error.",
    question: "How are effective VM permissions determined, and how should this be fixed?",
    options: [
      { id: 'A', text: "Effective permissions are the intersection of OAuth access scopes and IAM roles; stop the VM, update the access scope to 'https://www.googleapis.com/auth/cloud-platform', and start the VM" },
      { id: 'B', text: "Grant the 'roles/owner' role to the VM's service account" },
      { id: 'C', text: "Download a service account JSON key to the VM filesystem" },
      { id: 'D', text: "Convert the persistent disk to a regional persistent disk" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On Compute Engine VMs, effective permissions are calculated as the intersection of the VM's legacy OAuth access scopes and the attached service account's IAM roles. If access scopes are restricted to default read-only scopes, IAM admin roles are blocked. Modern best practice is to configure the scope to 'https://www.googleapis.com/auth/cloud-platform' (full access) and govern all permissions strictly through Cloud IAM.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "AccessScopes", "CloudIAM"]
  },
  {
    id: "gcp-ace-216",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Differentiating roles/iam.serviceAccountUser and roles/iam.serviceAccountTokenCreator",
    scenario: "An administrator needs to permit a developer named Alice to deploy Compute Engine instances that run under a production service account 'prod-app-sa@project.iam.gserviceaccount.com'. However, Alice must NOT be permitted to impersonate the service account to generate OAuth tokens or sign code locally on her laptop.",
    question: "Which specific IAM role should be granted to Alice on the service account?",
    options: [
      { id: 'A', text: "roles/iam.workloadIdentityUser" },
      { id: 'B', text: "roles/iam.serviceAccountAdmin" },
      { id: 'C', text: "roles/iam.serviceAccountTokenCreator" },
      { id: 'D', text: "roles/iam.serviceAccountUser" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'roles/iam.serviceAccountUser' role grants permission to attach the service account to compute resources (such as Compute Engine VMs, Cloud Run services, or Cloud Functions), allowing jobs to execute as that identity. In contrast, 'roles/iam.serviceAccountTokenCreator' permits generating short-lived access tokens or impersonating the account directly on a workstation.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ServiceAccounts", "Security"]
  },
  {
    id: "gcp-ace-217",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Eliminating Static JSON Keys in GKE with Workload Identity",
    scenario: "A Kubernetes application in GKE needs to read customer records from Cloud Bigtable. Developers currently mount an exported service account JSON key file into the container via a Kubernetes Secret. The security director mandates eliminating all long-lived service account key files from the cluster.",
    question: "Which architecture replaces stored JSON keys with automated short-lived credentials?",
    options: [
      { id: 'A', text: "Store the JSON key in Secret Manager and fetch it via startup script" },
      { id: 'B', text: "Encrypt the Kubernetes secret using Cloud KMS customer-managed keys" },
      { id: 'C', text: "Enable GKE Workload Identity, bind the Kubernetes ServiceAccount to the Google ServiceAccount with 'roles/iam.workloadIdentityUser', and annotate the KSA" },
      { id: 'D', text: "Assign the 'roles/bigtable.reader' role to all worker node VMs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GKE Workload Identity is the recommended security best practice for pod-to-GCP authentication. It links a Kubernetes ServiceAccount (KSA) directly to a Google ServiceAccount (GSA). The GKE metadata server transparently issues short-lived OAuth tokens to pods running as that KSA, completely eliminating the need to store, distribute, or rotate static JSON keys.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "WorkloadIdentity", "Security"]
  },
  {
    id: "gcp-ace-218",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Keyless GitHub Actions CI/CD Deployments via Workload Identity Federation",
    scenario: "A company uses GitHub Actions for continuous deployment to Google Cloud. The security team forbids downloading or storing Google Cloud service account JSON keys in GitHub repository secrets due to credential leakage risks.",
    question: "Which technology allows GitHub Actions to authenticate directly to Google Cloud without service account keys?",
    options: [
      { id: 'A', text: "Basic authentication with Cloud Identity username and password" },
      { id: 'B', text: "A site-to-site HA VPN between GitHub and Google Cloud" },
      { id: 'C', text: "Identity-Aware Proxy with TCP forwarding" },
      { id: 'D', text: "Workload Identity Federation configured with GitHub as an OpenID Connect (OIDC) identity provider" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Workload Identity Federation allows external workloads (such as GitHub Actions, AWS, Azure, or GitLab) to authenticate to Google Cloud APIs using industry-standard OpenID Connect (OIDC). GitHub Actions provides a short-lived OIDC token that Google Cloud validates and exchanges for a temporary Google Cloud access token, eliminating static keys.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["WorkloadIdentityFederation", "CI/CD", "Security"]
  },
  {
    id: "gcp-ace-219",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Granting Temporary Elevated Permissions Using IAM Conditions",
    scenario: "An external security auditor requires read-only access to view Cloud Storage audit buckets and Compute Engine configurations. The auditor's engagement starts on October 1 at 09:00 UTC and must strictly terminate on October 5 at 18:00 UTC without requiring manual administrative revocation.",
    question: "How should the IAM administrator configure this time-bounded access?",
    options: [
      { id: 'A', text: "Assign the role to an ephemeral service account and delete the service account key" },
      { id: 'B', text: "Create a Google Calendar reminder to delete the auditor's account manually" },
      { id: 'C', text: "Write a Cloud Function scheduled via Cloud Scheduler to revoke the role" },
      { id: 'D', text: "Add the IAM role bindings with an IAM Condition using Common Expression Language (CEL) specifying 'request.time < timestamp(\"2026-10-05T18:00:00Z\")'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "IAM Conditions enable conditional role grants based on attributes like request timestamp, resource name prefixes, or access level. Configuring a condition with 'request.time < timestamp(...)' automatically invalidates the role binding at the specified date and time, ensuring automatic expiration without operational toil.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "IAMConditions", "Security"]
  },
  {
    id: "gcp-ace-220",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Managing Data Access Audit Logs: Cost and Retention Characteristics",
    scenario: "A compliance officer requests enabling Data Access Audit Logs (Admin Read, Data Read, Data Write) across all Google Cloud services in the organization to record every object download and database query. The cloud finance team warns of potential budgetary impacts.",
    question: "Why do Data Access Audit Logs incur significant costs compared to Admin Activity Audit Logs?",
    options: [
      { id: 'A', text: "Admin Activity logs are always enabled, free of charge, and retained for 400 days; Data Access logs record high-volume user data transactions, are billable beyond the free log tier, and are retained for 30 days by default" },
      { id: 'B', text: "Data Access logs require provisioning dedicated Bigtable clusters" },
      { id: 'C', text: "Data Access logs can only be stored in multi-region Coldline buckets" },
      { id: 'D', text: "Google Cloud charges a licensing fee for each enabled API" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Admin Activity logs record administrative configuration changes; they are mandatory, cannot be disabled, are retained for 400 days, and are completely free. In contrast, Data Access logs capture high-frequency read and write operations on user data (such as Cloud Storage object downloads or Cloud SQL queries), generating terabytes of log volume that are subject to Cloud Logging ingestion pricing.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "AuditLogs", "Compliance"]
  },
  {
    id: "gcp-ace-221",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Encrypting Storage Buckets with Customer-Managed Encryption Keys (CMEK)",
    scenario: "A healthcare enterprise requires that patient medical images stored in Cloud Storage must be encrypted using keys owned and managed by the hospital in Cloud KMS. The hospital's security team generates a key named 'patient-data-key' in key ring 'health-ring'.",
    question: "What permission must be granted before the Cloud Storage bucket can encrypt objects using this key?",
    options: [
      { id: 'A', text: "Assign the hospital security team's Google group the 'roles/storage.admin' role" },
      { id: 'B', text: "Download the KMS private key and attach it to the bucket metadata" },
      { id: 'C', text: "Grant the 'roles/cloudkms.cryptoKeyEncrypterDecrypter' role on 'patient-data-key' to the Cloud Storage Service Agent for the project" },
      { id: 'D', text: "Grant the 'roles/owner' role on the project to Cloud KMS" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When using Customer-Managed Encryption Keys (CMEK), Google Cloud services access Cloud KMS through their dedicated Google-managed Service Agent (e.g. 'service-[PROJECT_NUM]@gs-project-accounts.iam.gserviceaccount.com'). For Cloud Storage to encrypt and decrypt objects using the CMEK key, its Service Agent must be granted the 'roles/cloudkms.cryptoKeyEncrypterDecrypter' role on that specific KMS key.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudKMS", "CMEK", "Security"]
  },
  {
    id: "gcp-ace-222",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Preventing Key Loss: Immutability of Cloud KMS Keys and Key Rings",
    scenario: "A cloud administrator attempts to run 'gcloud kms keys delete' to remove an obsolete cryptographic key and key ring in Cloud KMS.",
    question: "What is the expected outcome of this command according to Cloud KMS design?",
    options: [
      { id: 'A', text: "The command fails because Cloud KMS Keys and Key Rings can never be deleted; key versions can only be disabled or scheduled for destruction to preserve cryptographic audit integrity" },
      { id: 'B', text: "The command succeeds only if the administrator possesses the Organization Administrator role" },
      { id: 'C', text: "The key ring is archived to Cloud Storage Coldline" },
      { id: 'D', text: "The key is immediately purged and all encrypted data is automatically re-encrypted with Google-managed keys" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud KMS resources (Key Rings and CryptoKeys) cannot be deleted. This design guarantees the integrity of cryptographic audit logs and prevents accidental or malicious destruction of keys that could permanently render encrypted historical data undecryptable. While individual key versions can be disabled or scheduled for destruction, their metadata remains permanently.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudKMS", "Security", "Compliance"]
  },
  {
    id: "gcp-ace-223",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Securing Application Secrets with Secret Manager and Least Privilege IAM",
    scenario: "A microservice running on Cloud Run needs to retrieve a third-party API key stored in Secret Manager. A junior engineer proposes granting the Cloud Run service account the 'roles/secretmanager.admin' role on the project.",
    question: "What least-privilege role should be granted to the service account, and at what scope?",
    options: [
      { id: 'A', text: "Grant 'roles/viewer' on the project" },
      { id: 'B', text: "Grant 'roles/secretmanager.viewer' at the project level" },
      { id: 'C', text: "Grant 'roles/secretmanager.secretVersionManager' on the folder" },
      { id: 'D', text: "Grant 'roles/secretmanager.secretAccessor' on the specific secret resource only" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'roles/secretmanager.secretAccessor' role grants permission to read secret payloads ('secretmanager.versions.access'). Following the principle of least privilege, this role should be granted strictly on the individual secret resource needed by the microservice, rather than project-wide, and without administrative mutation permissions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["SecretManager", "CloudIAM", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-224",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Secure Bastionless Remote Administration via Identity-Aware Proxy (IAP)",
    scenario: "An enterprise removes public IP addresses from all Compute Engine instances to harden its perimeter. Administrators need to connect to private Linux VMs via SSH and private Windows VMs via RDP from home workstations without deploying a costly bastion host VM or VPN gateway.",
    question: "Which solution and firewall rule configuration enables secure remote administration via IAP?",
    options: [
      { id: 'A', text: "Deploy Cloud NAT with static IP addresses for inbound SSH" },
      { id: 'B', text: "Use 'gcloud compute ssh --tunnel-through-iap' and configure a VPC ingress firewall rule allowing TCP ports 22 and 3389 from source IP range 35.235.240.0/20" },
      { id: 'C', text: "Use Cloud Shell with public IP port forwarding" },
      { id: 'D', text: "Configure a firewall rule allowing port 22 from 0.0.0.0/0" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Identity-Aware Proxy (IAP) TCP forwarding allows authorized users to establish encrypted SSH and RDP tunnels to private VMs over Google's global network backbone. Traffic originates from Google's dedicated IAP proxy range (35.235.240.0/20); creating an ingress firewall rule permitting this CIDR on ports 22 and 3389 enables bastionless access governed by Cloud IAM.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["IAP", "SSH", "Security"]
  },
  {
    id: "gcp-ace-225",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d5",
    domainName: "Configuring access and security",
    title: "Preventing Data Exfiltration with VPC Service Controls Perimeters",
    scenario: "A rogue employee with legitimate developer credentials attempts to run 'bq extract' to copy confidential customer data from an enterprise BigQuery dataset to a personal Cloud Storage bucket located in an external, unmanaged Google Cloud project.",
    question: "Which Google Cloud security mechanism detects and blocks this cross-boundary data transfer?",
    options: [
      { id: 'A', text: "Cloud Armor security policies attached to external load balancers" },
      { id: 'B', text: "VPC Service Controls configured with a Service Perimeter encompassing the enterprise projects and BigQuery/Storage APIs" },
      { id: 'C', text: "Cloud NAT egress filtering" },
      { id: 'D', text: "VPC Firewall rules blocking egress to 0.0.0.0/0" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "VPC Service Controls establishes a cryptographically enforced Service Perimeter around sensitive projects and Google-managed services (BigQuery, Cloud Storage). Even if a user has valid IAM credentials, API calls that attempt to move data across the perimeter boundary to an unauthorized project or bucket are blocked, preventing data exfiltration.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPCServiceControls", "DataExfiltration", "Security"]
  }
];

export default GCP_ACE_QUESTIONS_9;
