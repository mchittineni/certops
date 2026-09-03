export const GCP_ACE_FLASHCARDS_1 = [
  {
    "id": "gcp-ace-fc-1",
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Google Cloud Resource Hierarchy: Downward IAM Inheritance",
    "hint": "Organization \u2192 Folders \u2192 Projects \u2192 Resources.",
    "back": "IAM permissions inherit <strong>downward</strong> across the resource hierarchy. A role granted at the Organization or Folder level applies automatically to all child folders, projects, and resources within that scope, and cannot be overridden or revoked at a lower level.",
    "tags": [
      "Resource Hierarchy",
      "IAM",
      "Governance"
    ]
  },
  {
    "id": "gcp-ace-fc-2",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Billing Budgets: Programmatic Alerts via Pub/Sub",
    "hint": "Why email alerts alone cannot prevent cost overruns.",
    "back": "Cloud Billing budgets do not stop resources automatically. To programmatically enforce spending caps (e.g. disabling billing or shutting down VMs), budgets must be configured with a <strong>Cloud Pub/Sub topic notification</strong> that triggers an automated Cloud Function or Cloud Run service.",
    "tags": [
      "Billing",
      "Budgets",
      "Pub/Sub",
      "Automation"
    ]
  },
  {
    "id": "gcp-ace-fc-3",
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Managing Multiple Environments: gcloud config configurations",
    "hint": "Switching accounts and projects without re-authenticating.",
    "back": "<code>gcloud config configurations</code> manages named profiles containing distinct account credentials, project IDs, default compute regions, and zones. Engineers switch between profiles instantly using <code>gcloud config configurations activate &lt;name&gt;</code>.",
    "tags": [
      "gcloud",
      "CLI",
      "SDK"
    ]
  },
  {
    "id": "gcp-ace-fc-4",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Billing Export to BigQuery",
    "hint": "Automated raw billing telemetry for deep SQL analysis.",
    "back": "Enabling <strong>Cloud Billing export to BigQuery</strong> streams daily detailed cost and usage records (including SKU descriptions, project numbers, resource labels, and cost credits) into BigQuery tables for SQL querying and Looker Studio dashboarding.",
    "tags": [
      "Billing",
      "BigQuery",
      "Export"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Resource Hierarchy: Organization vs. Folder vs. Project",
    "hint": "The 4-tier structural tree of Google Cloud resource governance.",
    "back": "<strong>Organization</strong> is the root node tied to a Google Workspace or Cloud Identity domain. <strong>Folders</strong> provide departmental grouping (e.g., Engineering, Finance) and boundary control. <strong>Projects</strong> are the mandatory base containers where all billable resources live. Permissions inherit strictly downwards from Org to Project.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-5"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Organization Policies vs. Cloud IAM: Enforcement Focus",
    "hint": "What resources CAN be done vs. WHO can do what.",
    "back": "<strong>Cloud IAM</strong> governs <em>who</em> (identity) can perform <em>what</em> operations on resources (access control). <strong>Organization Policies</strong> govern <em>what</em> configurations resources can possess regardless of user permissions (e.g., restricting VM external IPs, enforcing CMEK, restricting resource locations).",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-6"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Primitive Roles vs. Predefined Roles in Cloud IAM",
    "hint": "Broad legacy project-wide access vs. granular service-specific least privilege.",
    "back": "<strong>Primitive Roles</strong> (Owner, Editor, Viewer) grant sweeping, coarse-grained access across all Google Cloud services in a project. <strong>Predefined Roles</strong> grant granular, fine-grained permissions tailored to specific tasks (e.g., <code>roles/compute.instanceAdmin.v1</code>, <code>roles/storage.objectViewer</code>), aligning with least privilege.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-7"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Custom IAM Roles: Key Limitations & Maintenance Gotchas",
    "hint": "When predefined roles don't match, what are the trade-offs?",
    "back": "<strong>Custom Roles</strong> allow bundling specific permissions into tailored roles, but: 1) they cannot include permissions with certain lifecycle states; 2) they do not automatically update when Google Cloud introduces new service permissions; and 3) they can only be defined at the Project or Organization level, not at the Folder level.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-8"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Default Compute Engine Service Account: Security Anti-Pattern",
    "hint": "Why you should never use PROJECT_NUMBER-compute@developer.gserviceaccount.com in production.",
    "back": "By default, the <strong>Compute Engine default service account</strong> is automatically granted the primitive <strong>Editor</strong> role on the project. In production, always disable automatic role assignment, create a user-managed service account with least privilege, and attach it to VMs.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-9"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "iam.serviceAccountUser vs. iam.serviceAccountTokenCreator",
    "hint": "Deploying an instance as a service account vs. impersonating its credentials.",
    "back": "<strong>roles/iam.serviceAccountUser</strong> allows a principal to attach a service account to a Compute Engine instance, Cloud Run service, or Cloud Function. <strong>roles/iam.serviceAccountTokenCreator</strong> allows a principal to directly generate short-lived OAuth 2.0 access tokens to impersonate the service account without downloading JSON keys.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-10"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Eliminating Service Account JSON Keys with Short-Lived Credentials",
    "hint": "The ultimate security practice for automated CI/CD and developer access.",
    "back": "Long-lived downloadable <strong>service account JSON keys</strong> introduce leakage risks. The Google-recommended standard is to enforce the Organization Policy <code>constraints/iam.disableServiceAccountKeyCreation</code> and use <strong>Workload Identity Federation</strong> (for external workloads/GitHub Actions) or <strong>service account impersonation</strong>.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-11"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "gcloud auth login vs. gcloud auth application-default login",
    "hint": "Authenticating your CLI session vs. authenticating SDK client libraries.",
    "back": "<strong>gcloud auth login</strong> acquires OAuth credentials used strictly by the <code>gcloud</code> and <code>gsutil</code> CLI tools. <strong>gcloud auth application-default login</strong> writes local Application Default Credentials (ADC) used by application client libraries (Python, Go, Node.js) during local development.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-12"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Managing Multiple Google Cloud Environments with gcloud Named Configurations",
    "hint": "How to jump between personal, staging, and production configurations.",
    "back": "Use <code>gcloud config configurations create [NAME]</code> to establish distinct profiles (with separate accounts, default projects, and compute zones). Switch active profiles instantly via <code>gcloud config configurations activate [NAME]</code> without logging out.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-13"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Configuring Default Compute Region and Zone in gcloud",
    "hint": "Avoiding repetitive --region and --zone flags on every compute command.",
    "back": "Set default compute properties via <code>gcloud config set compute/region [REGION]</code> and <code>gcloud config set compute/zone [ZONE]</code>. These defaults apply to all subsequent Compute Engine, GKE, and networking CLI invocations unless explicitly overridden.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-14"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Billing Account: Linking and Unlinking Projects",
    "hint": "What happens to active resources if billing is unlinked?",
    "back": "A <strong>Project</strong> must be linked to a valid <strong>Cloud Billing Account</strong> to enable paid resources. Unlinking billing from an active project causes Google Cloud to immediately halt compute services, stop VMs, and disable external network ingress, though data on disks is preserved temporarily.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-15"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Billing Account Roles: Billing Account Administrator vs. Billing Account User",
    "hint": "Managing payment instruments vs. associating projects with billing.",
    "back": "<strong>Billing Account Administrator</strong> manages payment methods, billing users, budgets, and exports. <strong>Billing Account User</strong> can link new or existing projects to the billing account, but cannot view payment methods, invoices, or financial details across other projects.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-16"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Enforcing Hard Spending Caps with Billing Budgets and Pub/Sub",
    "hint": "Why billing budgets do NOT automatically stop your VMs.",
    "back": "Google Cloud Billing Budgets send email alerts at percentage thresholds (50%, 90%, 100%) but do <strong>not</strong> stop running resources. To enforce a hard cap, connect the budget to a <strong>Cloud Pub/Sub topic</strong> that triggers a Cloud Function to programmatically unlink billing or terminate VMs.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-17"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Billing Export to BigQuery: Standard vs. Detailed Usage Cost Data",
    "hint": "Daily account totals vs. resource-level granular SKU and tag breakdown.",
    "back": "<strong>Standard Usage Cost</strong> exports daily account-level, project-level, and SKU-level costs. <strong>Detailed Usage Cost</strong> includes resource-level identifiers, individual VM instance IDs, cluster names, and user-defined resource labels, enabling micro-level cost allocation.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-18"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Enabling Google Cloud APIs: gcloud services enable",
    "hint": "Why newly created projects cannot run Compute or Storage commands immediately.",
    "back": "Google Cloud APIs are disabled by default in new projects. To enable a service from the CLI, run <code>gcloud services enable [API_NAME]</code> (e.g., <code>compute.googleapis.com</code>, <code>container.googleapis.com</code>). Dependent APIs are enabled automatically.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-19"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Google Cloud API Quotas: Rate Quotas vs. Allocation Quotas",
    "hint": "Requests per minute vs. total number of CPUs you can provision.",
    "back": "<strong>Rate Quotas</strong> limit API call frequency (e.g., 1,000 API requests per minute) and reset automatically after the time window. <strong>Allocation Quotas</strong> restrict absolute physical capacity (e.g., maximum 64 N2 CPUs in us-central1) and require a quota increase request via the console.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-20"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud Identity & Google Workspace: Organization Creation",
    "hint": "How the root Organization node is physically provisioned.",
    "back": "The <strong>Organization</strong> resource is provisioned automatically when a company registers its verified internet domain (e.g., company.com) with <strong>Cloud Identity</strong> or <strong>Google Workspace</strong>. The initial administrator is assigned the <strong>Organization Administrator</strong> role.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-21"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Assigning IAM Roles to Google Groups vs. Individual Users",
    "hint": "The enterprise identity best practice for scalable access governance.",
    "back": "Never grant IAM roles directly to individual user email addresses. Always bind roles to <strong>Google Groups</strong> (e.g., <code>sre-team@company.com</code>). When engineers join or leave teams, updating group membership in the identity provider automatically updates all Google Cloud permissions.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-22"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Organization Policy: Restricting Resource Locations (constraints/gcp.resourceLocations)",
    "hint": "Ensuring regulatory compliance by pinning workloads to specific geographies.",
    "back": "The <code>constraints/gcp.resourceLocations</code> list constraint restricts the creation of Google Cloud resources (Compute, GKE, Storage buckets, Cloud SQL) exclusively to approved regions (e.g., <code>in:eu-locations</code>), preventing data residency compliance breaches.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-23"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Organization Policy: Disabling External IP Addresses (constraints/compute.vmExternalIpAccess)",
    "hint": "Enforcing private-only VM architectures organization-wide.",
    "back": "Applying <code>constraints/compute.vmExternalIpAccess</code> as an Organization Policy prevents Compute Engine instances from being assigned public external IPv4 addresses, mandating Cloud NAT or internal load balancers for internet connectivity.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-24"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d1",
    "front": "Cloud IAM Conditions: Restricting Permissions by Time or Attribute",
    "hint": "Temporary break-glass access or daytime-only production rights.",
    "back": "<strong>IAM Conditions</strong> evaluate Common Expression Language (CEL) expressions during access checks. They allow granting roles conditionally based on: 1) request date/time (e.g., expires on date); 2) resource name prefix or tag; or 3) destination service type.",
    "tags": [
      "GCP",
      "Setting"
    ],
    "id": "gcp-ace-fc-25"
  }
];

export default GCP_ACE_FLASHCARDS_1;
