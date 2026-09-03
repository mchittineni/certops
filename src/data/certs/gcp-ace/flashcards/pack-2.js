export const GCP_ACE_FLASHCARDS_2 = [
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Workload Identity on GKE: Mapping KSA to GSA",
    "hint": "Secure, keyless authentication for Kubernetes pods accessing Google Cloud APIs.",
    "back": "<strong>Workload Identity</strong> binds a Kubernetes Service Account (KSA) to a Google Service Account (GSA). GKE metadata server intercepts pod token requests and returns short-lived OAuth credentials, eliminating the need to mount service account JSON key secrets in container pods.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-26"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Workload Identity User Role Binding Syntax",
    "hint": "The exact IAM role and member string needed for GKE Workload Identity.",
    "back": "Grant the role <code>roles/iam.workloadIdentityUser</code> on the Google Service Account to the member: <code>serviceAccount:[PROJECT_ID].svc.id.goog[[NAMESPACE]/[KSA_NAME]]</code>. This authorizes pods running as the specified KSA to act as the GSA.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-27"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Shell: Ephemeral VM with Pre-Configured Tooling",
    "hint": "Browser-based administrative environment with built-in persistence.",
    "back": "<strong>Cloud Shell</strong> provides an ephemeral Debian-based Docker container VM with <code>gcloud</code>, <code>kubectl</code>, <code>terraform</code>, and Docker pre-installed. It includes a persistent <strong>5 GB $HOME directory</strong> that survives container termination across sessions.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-28"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Shell Boost Mode",
    "hint": "Temporary performance upgrade for compute-heavy compilation or image builds.",
    "back": "Enabling <strong>Boost Mode</strong> temporarily upgrades the Cloud Shell VM from 1 vCPU and 2 GB RAM to 4 vCPUs and 16 GB RAM for a period of 24 hours, accelerating intensive tasks like compiling code or building large Docker containers.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-29"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Project ID vs. Project Name vs. Project Number",
    "hint": "The 3 identifiers of every Google Cloud project.",
    "back": "<strong>Project Name</strong> is a user-friendly, mutable label (not unique). <strong>Project ID</strong> is a globally unique, immutable string chosen by the user, used in CLI and APIs. <strong>Project Number</strong> is an immutable, system-generated numerical identifier used internally by Google services.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-30"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Deleting a Google Cloud Project: 30-Day Soft-Delete Grace Period",
    "hint": "What happens immediately after shutting down a project?",
    "back": "When a project is shut down via <code>gcloud projects delete</code>, it enters a <strong>30-day soft-delete</strong> state. All resources stop functioning immediately, but the project can be recovered during this 30-day window using <code>gcloud projects undelete</code> before permanent purging.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-31"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Creating a Project with gcloud: gcloud projects create",
    "hint": "The exact CLI command to instantiate a new project.",
    "back": "Run <code>gcloud projects create [PROJECT_ID] --name=\"[PROJECT_NAME]\" --folder=[FOLDER_ID]</code>. If the user belongs to an organization, the project is attached to the specified folder or organization root; otherwise, it is created standalone.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-32"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Viewing Effective IAM Policies on a Project: gcloud projects get-iam-policy",
    "hint": "Auditing role bindings at the project container level.",
    "back": "Run <code>gcloud projects get-iam-policy [PROJECT_ID] --format=json</code> (or yaml). Note: this displays only bindings applied directly at the project level; inherited bindings from parent Folders or Organization must be queried via Policy Analyzer.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-33"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Granting an IAM Role via CLI: gcloud projects add-iam-policy-binding",
    "hint": "The exact syntax to add a user to a project role.",
    "back": "Run <code>gcloud projects add-iam-policy-binding [PROJECT_ID] --member=\"user:alice@example.com\" --role=\"roles/compute.networkAdmin\"</code>. This safely appends the binding without overwriting existing policy bindings.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-34"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Service Account Key Rotation: Best Practice Workflow",
    "hint": "How to rotate a legacy service account key with zero downtime.",
    "back": "1) Create a new key version via <code>gcloud iam service-accounts keys create</code>; 2) Deploy the new key to clients; 3) Verify clients are using the new key via Cloud Audit Logs; 4) Disable the old key; 5) Delete the old key after confirming no dependency remains.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-35"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Restricting Service Account Impersonation with IAM",
    "hint": "How to prevent junior developers from impersonating privileged service accounts.",
    "back": "Service account impersonation requires the <code>roles/iam.serviceAccountTokenCreator</code> role on the target service account. Do <strong>not</strong> grant this role at the project level; bind it strictly to authorized users directly on the individual target service account resource.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-36"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Google Cloud Resource Labels vs. Network Tags",
    "hint": "Cost tracking metadata vs. network firewall/routing targets.",
    "back": "<strong>Labels</strong> are key-value pairs applied to resources for cost allocation, inventory, and filtering in billing reports. <strong>Network Tags</strong> are simple strings attached to VM instances used strictly by VPC firewall rules and route tables to target specific network traffic.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-37"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Organization Policy Inheritance: Inherit vs. Override",
    "hint": "How folder policies interact with organization root policies.",
    "back": "By default, child folders and projects <strong>inherit</strong> policies from parent nodes. Administrators can configure a child node to <strong>override</strong> the parent policy (replacing all rules) or <strong>merge</strong> with the parent policy (appending additional denied or allowed values).",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-38"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Identity Free vs. Premium",
    "hint": "Basic directory and SSO vs. advanced device management and security.",
    "back": "<strong>Cloud Identity Free</strong> provides core directory services, user management, and SAML 2.0 Single Sign-On (SSO) for Google Cloud access. <strong>Cloud Identity Premium</strong> adds enterprise mobile device management (MDM), automated user lifecycle rules, and Context-Aware Access.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-39"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Audit Logs: Admin Activity vs. Data Access Logs",
    "hint": "Which logs are enabled by default and free vs. opt-in and billable?",
    "back": "<strong>Admin Activity logs</strong> record configuration and metadata changes (e.g., creating a VM, modifying IAM); they are <strong>enabled by default, free, and cannot be disabled</strong>. <strong>Data Access logs</strong> record API calls reading/writing user data; they are <strong>disabled by default</strong> (except BigQuery) due to high volume.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-40"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Viewing Billing Accounts via CLI: gcloud billing accounts list",
    "hint": "Identifying your active billing account IDs.",
    "back": "Run <code>gcloud billing accounts list</code> to display all billing accounts to which the authenticated user has access, showing Account ID, Display Name, and whether the account is OPEN or CLOSED.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-41"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Linking a Project to a Billing Account via CLI",
    "hint": "The exact gcloud billing command to attach payment to a project.",
    "back": "Run <code>gcloud billing projects link [PROJECT_ID] --billing-account=[ACCOUNT_ID]</code>. Requires the <code>roles/billing.user</code> role on the billing account and <code>roles/resourcemanager.projectBillingManager</code> on the project.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-42"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cross-Project Billing: Single Billing Account with Multiple Projects",
    "hint": "Consolidating invoices across separate microservices or business units.",
    "back": "A single Cloud Billing Account can be linked to hundreds of Google Cloud projects. All project charges are consolidated onto a single monthly invoice, with BigQuery billing export breaking down costs by <code>project.id</code> and labels.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-43"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Managing gcloud CLI Components: gcloud components update",
    "hint": "Keeping installed CLI tools (kubectl, cbt, beta) up to date.",
    "back": "Run <code>gcloud components update</code> to update all installed CLI tools to the latest release. Use <code>gcloud components install [COMPONENT]</code> (e.g. <code>gcloud components install kubectl</code>) on standalone tarball installations.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-44"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Suppressing Interactive Prompts in Scripts: --quiet Flag",
    "hint": "Preventing CI/CD pipelines from hanging on 'Do you want to continue (Y/n)?'",
    "back": "Pass the <code>--quiet</code> (or <code>-q</code>) flag to <code>gcloud</code> commands in automation scripts. This suppresses all interactive prompts and automatically selects the default response (or fails if required input is missing).",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-45"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Formatting gcloud Command Outputs: --format and --filter",
    "hint": "Extracting specific JSON or table fields directly from the CLI.",
    "back": "Use <code>--filter=\"zone:us-central1-a AND status:RUNNING\"</code> for server-side filtering, and <code>--format=\"value(id,name,networkInterfaces[0].networkIP)\"</code> to extract clean tab-delimited values for bash scripting without relying on <code>grep</code> or <code>awk</code>.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-46"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Project Creator Role at Organization or Folder Level",
    "hint": "Who can instantiate new projects within the corporate hierarchy?",
    "back": "To create new projects within an Organization or Folder, a user or group must be granted the <strong>Project Creator</strong> role (<code>roles/resourcemanager.projectCreator</code>) on that Organization or Folder node.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-47"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Folder Admin Role (roles/resourcemanager.folderAdmin)",
    "hint": "Managing the structural folders inside the Organization.",
    "back": "The <strong>Folder Admin</strong> role grants full control over the folder lifecycle: creating, editing, moving, and deleting folders, as well as managing IAM policies bound directly to those folders.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-48"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Super Admin in Google Workspace vs. Organization Admin in Google Cloud",
    "hint": "The ultimate identity authority vs. cloud resource authority.",
    "back": "A <strong>Super Admin</strong> in Google Workspace / Cloud Identity manages domains, user accounts, and initial organization provisioning. By default, they can assign themselves the <strong>Organization Administrator</strong> role in Google Cloud IAM to configure cloud resource hierarchy and policies.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-49"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Billing Account Creator (roles/billing.creator)",
    "hint": "Restricting who can create new billing accounts in an enterprise.",
    "back": "By default, any user can create a self-serve billing account with a credit card. In an enterprise, grant <code>roles/billing.creator</code> selectively at the Organization level to enforce procurement review before new billing accounts are established.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-50"
  }
];

export default GCP_ACE_FLASHCARDS_2;
