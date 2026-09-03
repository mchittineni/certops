export const GCP_ACE_FLASHCARDS_9 = [
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Diagnosing Out-of-Memory (OOM) Container Kills in GKE",
    "hint": "How to verify if a pod crashed due to memory limits.",
    "back": "Run <code>kubectl describe pod [POD_NAME]</code> and look at the 'Last State' section. An exit code of <strong>137</strong> with reason <strong>OOMKilled</strong> indicates the container exceeded its specified memory limit (or host memory) and was terminated by the Linux OOM killer.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-201"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud SQL Database User and Password Management",
    "hint": "Administering database accounts via gcloud CLI without SQL root login.",
    "back": "Create users with <code>gcloud sql users create [USER] --instance=[INSTANCE] --password=[PASSWORD]</code>. Reset passwords with <code>gcloud sql users set-password [USER] --instance=[INSTANCE] --password=[NEW_PASSWORD]</code> directly via Google Cloud control plane.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-202"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Compute Engine Metadata Maintenance Event Notifications",
    "hint": "Giving applications notice before live migration or host maintenance occurs.",
    "back": "Applications can query the metadata server at <code>http://metadata.google.internal/computeMetadata/v1/instance/maintenance-event</code> with long polling. Returns 'MIGRATE_ON_HOST_MAINTENANCE' or 'NONE', allowing apps to gracefully flush caches before migration.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-203"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Release Channels: Rapid vs. Regular vs. Stable",
    "hint": "Balancing cutting-edge Kubernetes features against battle-tested reliability.",
    "back": "<strong>Rapid</strong> receives the newest Kubernetes versions immediately for bleeding-edge testing. <strong>Regular</strong> receives versions after production qualification across the fleet (default). <strong>Stable</strong> receives versions only after extensive real-world validation, ideal for mission-critical core workloads.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-204"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Viewing GKE Cluster Autoscaler Status and Decisions",
    "hint": "Why didn't the cluster autoscaler add or remove worker nodes?",
    "back": "Inspect the <code>cluster-autoscaler-status</code> ConfigMap in the <code>kube-system</code> namespace via <code>kubectl get configmap cluster-autoscaler-status -n kube-system -o yaml</code>. It logs detailed reasons why specific node pools were scaled or why scale-down was blocked.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-205"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Configuring Cloud SQL Read Replica Promotion",
    "hint": "Promoting a read replica to a standalone writable database during emergency DR.",
    "back": "Run <code>gcloud sql instances promote-replica [REPLICA_NAME]</code>. Severing the replication link from the primary, the replica becomes a fully independent, read-write database instance that can accept application traffic immediately.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-206"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Investigating High Latency via Cloud Monitoring Metric Explorer",
    "hint": "Visualizing API response percentiles and request rates.",
    "back": "Open Metric Explorer, select the resource (e.g., <code>https_lb_rule</code> or <code>cloud_run_revision</code>), choose metric <code>response_latencies</code>, and aggregate by <strong>95th or 99th percentile</strong>. Identifies latency anomalies masked by standard average (mean) metrics.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-207"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Horizontal Pod Autoscaler: Target Metric Stabilization Window",
    "hint": "Preventing thrashing (rapid scaling up and down) during volatile spikes.",
    "back": "The HPA <strong>behavior</strong> field allows configuring <code>stabilizationWindowSeconds</code> (default 300s for scale-down). It delays downscaling until traffic has remained consistently low for the duration of the window, preventing pod churn caused by fluctuating bursty traffic.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-208"
  },
  {
    "id": "gcp-ace-fc-209",
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "GKE Workload Identity vs. Service Account JSON Keys",
    "hint": "Temporary secure metadata tokens vs. hazardous static private keys.",
    "back": "<strong>Workload Identity</strong> securely maps a Kubernetes Service Account (KSA) directly to a Google Service Account (GSA), issuing short-lived, automatically rotated OAuth tokens to Pods. This eliminates the massive security vulnerability of downloading and storing static service account JSON key files.",
    "tags": [
      "GKE",
      "Workload Identity",
      "IAM",
      "Security"
    ]
  },
  {
    "id": "gcp-ace-fc-210",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "IAM Roles: Primitive vs. Predefined vs. Custom",
    "hint": "Coarse project-wide permissions vs. least-privilege service-specific roles.",
    "back": "<strong>Primitive Roles</strong> (Owner, Editor, Viewer) grant broad, sweeping permissions across all services in a project. <strong>Predefined Roles</strong> (e.g. <code>roles/storage.objectAdmin</code>) provide granular, least-privilege permissions tailored to specific services. <strong>Custom Roles</strong> allow combining specific fine-grained permissions.",
    "tags": [
      "IAM",
      "Roles",
      "Least Privilege",
      "Security"
    ]
  },
  {
    "id": "gcp-ace-fc-211",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Service Account User Role (roles/iam.serviceAccountUser)",
    "hint": "The permission required to attach a service account to a VM or service.",
    "back": "To bind a service account to a Compute Engine instance, Cloud Run service, or Cloud Function, the user creating the resource must have the <code>iam.serviceAccounts.actAs</code> permission, granted by the <strong>Service Account User</strong> role (<code>roles/iam.serviceAccountUser</code>).",
    "tags": [
      "IAM",
      "Service Accounts",
      "Security"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Resource Hierarchy and IAM Policy Inheritance",
    "hint": "How permissions flow from Organization down to Resources.",
    "back": "IAM policies are strictly <strong>additive</strong> (union) down the hierarchy: Organization &rarr; Folders &rarr; Projects &rarr; Resources. Permissions granted at a parent level <strong>cannot be revoked or restricted</strong> by a child resource policy; child policies can only expand access.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-212"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "IAM Deny Policies: Overriding Inherited Allow Policies",
    "hint": "The single mechanism that can block inherited IAM permissions.",
    "back": "<strong>IAM Deny Policies</strong> enforce mandatory guardrails across the organization or folder level. A Deny rule <strong>strictly overrides all Allow policies</strong>, preventing even project owners or admins from performing denied actions.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-213"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Predefined Roles vs. Custom Roles: Limitations",
    "hint": "Why custom roles cannot always replace predefined roles.",
    "back": "<strong>Custom Roles</strong> allow bundling fine-grained permissions. Limitations: 1) Cannot use wildcards in permissions; 2) Do not automatically receive new permissions when Google releases feature updates; 3) Certain permissions cannot be added to custom roles.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-214"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "The Security Risk of the Default Compute Engine Service Account",
    "hint": "Why using [PROJECT_NUMBER]-compute@developer.gserviceaccount.com in production is unsafe.",
    "back": "By default, the Compute Engine default service account is automatically granted the primitive <strong>Editor</strong> role (<code>roles/editor</code>) on the project. Best practice is to disable automatic role grant and attach a custom, least-privilege user-managed service account to each VM.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-215"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "OAuth Access Scopes vs. Cloud IAM on Compute Engine",
    "hint": "The intersection of legacy VM scopes and modern IAM roles.",
    "back": "Effective permissions for a VM are the <strong>intersection</strong> of its OAuth access scopes and the attached service account's IAM roles. Best practice is to set scopes to <code>https://www.googleapis.com/auth/cloud-platform</code> (full access) and govern permissions strictly via Cloud IAM.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-216"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "roles/iam.serviceAccountUser vs. roles/iam.serviceAccountTokenCreator",
    "hint": "Attaching a service account to a VM vs. impersonating and generating OAuth tokens.",
    "back": "<strong>serviceAccountUser</strong> allows a user to attach the service account to resources (VMs, Cloud Run, Cloud Functions). <strong>serviceAccountTokenCreator</strong> allows a user to impersonate the service account and generate short-lived OAuth access tokens or sign blobs directly.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-217"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "GKE Workload Identity: Eliminating Stored JSON Keys",
    "hint": "Binding Kubernetes ServiceAccounts directly to Google ServiceAccounts.",
    "back": "Workload Identity links a Kubernetes ServiceAccount (KSA) in a namespace to a Google ServiceAccount (GSA) in IAM. Pods running as the KSA authenticate to Google APIs automatically using temporary short-lived tokens, eliminating the need to download or mount static JSON keys.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-218"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "GKE Workload Identity Configuration Commands",
    "hint": "The IAM binding and KSA annotation required for Workload Identity.",
    "back": "1) Grant IAM role: <code>gcloud iam service-accounts add-iam-policy-binding [GSA] --role=roles/iam.workloadIdentityUser --member=\"serviceAccount:[PROJECT].svc.id.goog[[NAMESPACE]/[KSA]]\"</code>; 2) Annotate KSA: <code>iam.gke.io/gcp-service-account=[GSA]</code>.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-219"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Workload Identity Federation: Keyless Multi-Cloud Authentication",
    "hint": "Authenticating AWS, Azure, or GitHub Actions without service account keys.",
    "back": "<strong>Workload Identity Federation</strong> uses OpenID Connect (OIDC) or SAML to establish trust with external identity providers (AWS IAM, Azure AD, GitHub Actions). External workloads exchange their native OIDC tokens for short-lived Google Cloud tokens with zero static credentials on disk.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-220"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "IAM Conditions: Context-Aware Role Assignment",
    "hint": "Restricting access based on time of day, resource name, or IP address.",
    "back": "<strong>IAM Conditions</strong> attach conditional logic (using Common Expression Language - CEL) to role bindings. Allows granting temporary access (e.g., expire after 4 hours), restricting access to specific bucket prefix names, or enforcing access from corporate IP ranges.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-221"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud Audit Logs: Admin Activity vs. Data Access Logs",
    "hint": "Always-on free configuration logs vs. high-volume billable data read logs.",
    "back": "<strong>Admin Activity logs</strong> record configuration and metadata modifications; always enabled, free of charge, retained for 400 days. <strong>Data Access logs</strong> record API calls that read or write user-provided data; disabled by default (except BigQuery), billable, retained for 30 days.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-222"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Customer-Managed Encryption Keys (CMEK) with Cloud KMS",
    "hint": "Taking control over encryption keys used by Google Cloud storage services.",
    "back": "Google Cloud encrypts all data at rest by default using Google-managed keys. <strong>CMEK</strong> allows organizations to control and rotate their own encryption keys stored in Cloud KMS. To use CMEK, the service agent (e.g. Cloud Storage service agent) must be granted <code>roles/cloudkms.cryptoKeyEncrypterDecrypter</code>.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-223"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Cloud KMS Key Rings and Key Destruction Immutability",
    "hint": "Why key rings and cryptographic keys can never be deleted.",
    "back": "To ensure audit trail integrity and prevent catastrophic accidental data loss, <strong>KMS Key Rings and Keys cannot be deleted</strong>. Individual key versions can be <em>disabled</em> or scheduled for destruction (with a 24-hour grace period), but their metadata records remain permanently in KMS.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-224"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d5",
    "front": "Secret Manager: Versioning and Access Control",
    "hint": "Securely managing API tokens, passwords, and private certificates.",
    "back": "Secret Manager stores sensitive payloads as immutable <strong>versions</strong>. Access is governed via IAM: users or service accounts require <code>roles/secretmanager.secretAccessor</code> on the specific secret to read payload contents. Supports automated rotation and multi-region replication.",
    "tags": [
      "GCP",
      "Configuring"
    ],
    "id": "gcp-ace-fc-225"
  }
];

export default GCP_ACE_FLASHCARDS_9;
