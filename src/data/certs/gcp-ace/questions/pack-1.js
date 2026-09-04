export const GCP_ACE_QUESTIONS_1 = [
  {
    id: "gcp-ace-1",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Google Cloud Resource Hierarchy Inheritance",
    scenario: "An enterprise organizes its Google Cloud resources under an Organization node with multiple Folders (Engineering, Marketing, Finance). A security administrator grants a user the Compute Viewer (roles/compute.viewer) role at the Engineering Folder level.",
    question: "Which statement accurately describes the user's access across projects?",
    options: [
      { id: 'A', text: "The user has Compute Viewer permissions only on projects created prior to the role assignment" },
      { id: 'B', text: "The user has Compute Viewer permissions on all current and future projects located inside the Engineering folder due to downward policy inheritance" },
      { id: 'C', text: "The role must be manually re-applied to each project within the folder to take effect" },
      { id: 'D', text: "IAM permissions cannot be applied at the folder level and must be defined on the Organization node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Google Cloud's resource hierarchy (Organization → Folders → Projects → Resources), IAM policies inherit downward. Granting a role at a higher node automatically applies that role to all descendant resources, and access cannot be revoked at a lower level if inherited from above.",
    referenceUrl: "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Resource Hierarchy", "IAM", "Folders", "Inheritance"]
  },
  {
    id: "gcp-ace-2",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Programmatic Cloud Billing Budget Notifications",
    scenario: "A finance team needs to automatically cap or throttle Google Cloud resources when monthly spend reaches 100% of the allocated budget, preventing unexpected overage charges.",
    question: "How should the budget alert be configured to trigger automated resource management actions?",
    options: [
      { id: 'A', text: "Configure a Cloud Billing budget to publish notifications to a Cloud Pub/Sub topic, and trigger a Cloud Run service or Cloud Function that programmatically disables billing or stops workloads" },
      { id: 'B', text: "Set a hard spending cap in the gcloud CLI using the command gcloud billing cap set --limit" },
      { id: 'C', text: "Enable the default billing checkbox that terminates all running VMs immediately at 100% spend" },
      { id: 'D', text: "Configure Cloud Monitoring uptime checks to ping the billing console every minute" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Billing budgets do not automatically shut down resources by default. To take automated programmatic action (such as removing permissions, stopping VMs, or disabling billing), budgets must be connected to a Cloud Pub/Sub topic that triggers an automated Cloud Function or Cloud Run service.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/notify",
    tags: ["Billing", "Budgets", "Pub/Sub", "Automation"]
  },
  {
    id: "gcp-ace-3",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Multiple gcloud Configurations",
    scenario: "A cloud engineer frequently switches between managing resources in a personal sandbox project and an enterprise corporate production project using the Google Cloud CLI.",
    question: "What is the recommended method to switch between different project IDs, default regions, and authentication credentials quickly without re-authenticating?",
    options: [
      { id: 'A', text: "Edit the local credentials.json file manually in a text editor before running commands" },
      { id: 'B', text: "Run gcloud auth login and re-authenticate in the browser every time the project changes" },
      { id: 'C', text: "Create named gcloud configurations using gcloud config configurations create and switch between them using gcloud config configurations activate" },
      { id: 'D', text: "Uninstall and reinstall the Google Cloud SDK inside separate operating system directories" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Google Cloud CLI supports multiple named configurations (gcloud config configurations). Each configuration encapsulates a specific account, project ID, compute region, and compute zone, allowing engineers to switch contexts instantly using gcloud config configurations activate [NAME].",
    referenceUrl: "https://cloud.google.com/sdk/gcloud/reference/config/configurations",
    tags: ["gcloud", "CLI", "Configuration", "SDK"]
  },
  {
    id: "gcp-ace-4",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Billing Account Export to BigQuery",
    scenario: "An organization requires deep, granular analysis of its historical daily cloud expenditures across hundreds of projects, including cost attribution by resource labels and SKU pricing trends.",
    question: "What is the Google-recommended approach to store and analyze detailed cloud billing data?",
    options: [
      { id: 'A', text: "Stream Cloud Audit Logs to a Cloud Storage bucket and write custom Python map-reduce scripts" },
      { id: 'B', text: "Configure a cron job that executes gcloud billing accounts describe every hour" },
      { id: 'C', text: "Enable Cloud Billing export to BigQuery (Standard and Detailed usage cost data) and query the resulting tables using SQL" },
      { id: 'D', text: "Download monthly PDF invoices from the Cloud Console and run OCR extraction scripts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Exporting Cloud Billing data directly to BigQuery provides continuous, automated export of raw billing records, including SKU descriptions, project numbers, resource labels, and cost credits. This enables advanced SQL analytics, trend forecasting, and integration with Looker Studio dashboards.",
    referenceUrl: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Billing", "BigQuery", "Export", "Analytics"]
  },
  {
    id: "gcp-ace-5",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Automating Cost Overrun Prevention with Billing Budgets and Pub/Sub",
    scenario: "A development team wants to prevent unexpected cloud spending in a sandbox Google Cloud project. The team sets a monthly budget of $500 in Cloud Billing, but discovers that budget alerts only send email notifications and do not stop active Compute Engine instances or disable billing when the threshold is exceeded.",
    question: "How should the Cloud Engineer configure an automated hard spending cap for the sandbox project?",
    options: [
      { id: 'A', text: "Write an hourly cron job on a Compute Engine instance that queries the Cloud Billing API and stops instances when cost exceeds $500" },
      { id: 'B', text: "Configure the Cloud Billing budget to publish threshold notifications to a Cloud Pub/Sub topic, and deploy a Cloud Function subscribed to the topic that calls the Cloud Billing API to unlink the project from the billing account" },
      { id: 'C', text: "Set the budget threshold to 100% and enable the 'Auto-terminate on breach' checkbox in the Cloud Billing console" },
      { id: 'D', text: "Apply an Organization Policy constraint that limits Compute Engine vCPU hours to $500 equivalent per month" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Billing Budgets do not stop resources or disable billing out of the box; they only emit notification alerts. To enforce programmatic actions like shutting down VMs or disabling billing, the budget must be configured to publish messages to an Amazon/Google Cloud Pub/Sub topic. A serverless Cloud Function or Cloud Run service triggered by that topic can authenticate with administrative privileges and call the Cloud Billing API to programmatically detach the billing account from the project.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "PubSub", "CostOptimization"]
  },
  {
    id: "gcp-ace-6",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Restricting VM External IP Addresses with Organization Policies",
    scenario: "A financial enterprise requires that Compute Engine virtual machines in production projects must never be assigned public external IPv4 addresses. Developers currently create VMs with external IPs via the console and CLI, violating corporate security compliance.",
    question: "Which Google Cloud governance control prevents developers from assigning external IP addresses to VMs, regardless of their IAM permissions?",
    options: [
      { id: 'A', text: "Enforce the Organization Policy constraint 'constraints/compute.vmExternalIpAccess' on the production folder or organization root" },
      { id: 'B', text: "Delete the default internet gateway from all production VPC networks" },
      { id: 'C', text: "Create a VPC firewall rule that blocks ingress traffic on 0.0.0.0/0 with priority 1000" },
      { id: 'D', text: "Revoke the Compute Admin role from all developers and assign them Compute Viewer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organization Policies provide centralized, declarative guardrails that restrict resource configurations across an entire organization or folder tree. The predefined constraint 'constraints/compute.vmExternalIpAccess' restricts which VM instances can have external IPs; setting it to deny all external IPs strictly blocks any VM creation or modification that requests a public external IP, even if the user has full Compute Admin IAM permissions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "ComputeEngine", "Security"]
  },
  {
    id: "gcp-ace-7",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Switching Environments Seamlessly with gcloud Named Configurations",
    scenario: "A cloud engineer frequently switches between managing resources in a personal development project (using a personal Google account in region us-central1) and a corporate production project (using a corporate Google Workspace account in region europe-west1). Running 'gcloud auth login' and 'gcloud config set project' repeatedly is inefficient and error-prone.",
    question: "What is the Google Cloud recommended method for switching between distinct CLI environments?",
    options: [
      { id: 'A', text: "Install multiple instances of the Google Cloud SDK in different local filesystem directories" },
      { id: 'B', text: "Create named configurations using 'gcloud config configurations create' for each environment, set the respective account, project, and compute properties in each, and switch between them using 'gcloud config configurations activate'" },
      { id: 'C', text: "Pass the --project, --account, and --region flags manually on every gcloud CLI invocation" },
      { id: 'D', text: "Maintain separate bash shell scripts that execute 'gcloud auth login' with stored plaintext credentials upon terminal launch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The gcloud CLI includes a built-in feature called 'named configurations' (managed via 'gcloud config configurations'). Engineers can create separate profiles (e.g. 'dev-profile' and 'prod-profile') with distinct authentication accounts, default project IDs, and compute regions/zones. Switching between them is instantaneous with 'gcloud config configurations activate &lt;name&gt;', maintaining clean isolation between working environments.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "gcloud", "Productivity"]
  },
  {
    id: "gcp-ace-8",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Enforcing Principle of Least Privilege with Predefined Roles vs. Primitive Roles",
    scenario: "A newly hired systems administrator needs to manage Compute Engine virtual machine instances (start, stop, reboot, and resize) in project 'production-core'. The team lead wants to adhere strictly to the principle of least privilege and prevent the administrator from modifying Cloud Storage buckets, Cloud SQL databases, or VPC firewall rules.",
    question: "Which Cloud IAM role should be assigned to the administrator?",
    options: [
      { id: 'A', text: "roles/compute.admin" },
      { id: 'B', text: "roles/owner" },
      { id: 'C', text: "roles/editor" },
      { id: 'D', text: "roles/compute.instanceAdmin.v1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Primitive roles (Owner, Editor, Viewer) grant broad access across all Google Cloud services in the project, violating least privilege. 'roles/compute.admin' grants control over all compute resources, including VPCs, subnets, and firewalls. The predefined role 'roles/compute.instanceAdmin.v1' grants full control specifically over virtual machine instances, disks, and snapshots without allowing modifications to network routing, firewalls, or other cloud services.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "LeastPrivilege", "ComputeEngine"]
  },
  {
    id: "gcp-ace-9",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Delegating Service Account Attachment with iam.serviceAccountUser",
    scenario: "A DevOps engineer needs to deploy Compute Engine instances that run under a dedicated service account 'backend-worker@project.iam.gserviceaccount.com'. When the engineer runs 'gcloud compute instances create --service-account=backend-worker@...', the command fails with an 'Access Denied' error related to the service account.",
    question: "Which IAM role must be granted to the engineer on the service account to allow instance deployment?",
    options: [
      { id: 'A', text: "roles/iam.serviceAccountUser on the target service account resource" },
      { id: 'B', text: "roles/iam.serviceAccountTokenCreator at the project level" },
      { id: 'C', text: "roles/iam.serviceAccountKeyAdmin on the target service account" },
      { id: 'D', text: "roles/iam.serviceAccountAdmin on the project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To attach a service account to a Compute Engine instance, Cloud Run service, or Cloud Function, the deploying user must possess the 'roles/iam.serviceAccountUser' role on that specific service account (or at the project level). This role authorizes the user to delegate the service account's identity to compute resources without granting permissions to download its private keys or modify its IAM bindings.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ServiceAccounts", "ComputeEngine"]
  },
  {
    id: "gcp-ace-10",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Secure Service Account Impersonation without JSON Key Files",
    scenario: "A continuous delivery pipeline running on a local Jenkins runner needs to deploy infrastructure using a privileged service account. Corporate security policy strictly prohibits creating or downloading long-lived service account private JSON keys due to risk of credential leakage.",
    question: "How should the CI/CD pipeline authenticate with Google Cloud to run deployment commands as the privileged service account?",
    options: [
      { id: 'A', text: "Generate a P12 certificate key in the Cloud Console and store it in an environment variable on the runner" },
      { id: 'B', text: "Grant the runner's base identity the 'roles/iam.serviceAccountTokenCreator' role on the target service account, and execute commands using the '--impersonate-service-account' flag in gcloud" },
      { id: 'C', text: "Assign the primitive Owner role to the base identity of the CI/CD runner" },
      { id: 'D', text: "Embed the service account credentials in the git repository using git-crypt" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Service account impersonation allows an authenticated user or base identity to generate short-lived OAuth 2.0 access tokens to act as another service account. By granting 'roles/iam.serviceAccountTokenCreator' on the target service account, the caller can append '--impersonate-service-account=TARGET_SA@...' to gcloud commands, eliminating the creation, distribution, and storage of dangerous long-lived JSON keys.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ServiceAccounts", "Security"]
  },
  {
    id: "gcp-ace-11",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Exporting Granular Cost Data to BigQuery for Departmental Chargeback",
    scenario: "A company operates 50 Google Cloud projects under a single Cloud Billing Account. The financial controller requires automated, daily reporting of resource-level costs broken down by Kubernetes namespace, individual VM instance ID, and custom cost center labels in BigQuery.",
    question: "Which Cloud Billing export option must be enabled in the Cloud Console?",
    options: [
      { id: 'A', text: "Cloud Audit Logs Data Access export to Cloud Storage" },
      { id: 'B', text: "Detailed usage cost export to BigQuery" },
      { id: 'C', text: "Pricing data export to BigQuery" },
      { id: 'D', text: "Standard usage cost export to BigQuery" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Billing offers two usage export types to BigQuery: Standard usage cost (which aggregates data by project, service, and SKU) and Detailed usage cost. Detailed usage cost export includes resource-level identifiers (such as VM instance IDs and disk names) and user-defined resource labels, making it essential for container-level and micro-level cost allocation and chargeback.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "BigQuery", "FinOps"]
  },
  {
    id: "gcp-ace-12",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Configuring Workload Identity for GKE Pod Authentication",
    scenario: "Microservices running in an Amazon/Google GKE cluster need to read and write objects in a private Cloud Storage bucket. The security architect prohibits storing service account JSON keys in Kubernetes Secrets.",
    question: "How should the engineer configure pod authentication using GKE Workload Identity?",
    options: [
      { id: 'A', text: "Bind the Kubernetes Service Account (KSA) to the Google Service Account (GSA) using the 'roles/iam.workloadIdentityUser' role, and annotate the KSA with the GSA email address" },
      { id: 'B', text: "Mount the Compute Engine default service account token into the pod filesystem using a hostPath volume" },
      { id: 'C', text: "Grant the 'roles/storage.objectAdmin' role directly to the GKE worker node service account" },
      { id: 'D', text: "Run 'gcloud auth login' inside the container startup script" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE Workload Identity allows Kubernetes Service Accounts (KSAs) to act as Google Service Accounts (GSAs). The engineer binds the two identities by granting the 'roles/iam.workloadIdentityUser' role to the KSA on the GSA, and adds the annotation 'iam.gke.io/gcp-service-account=GSA_EMAIL' to the KSA. The GKE metadata server intercepts pod token requests and automatically provides short-lived Google OAuth credentials.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "WorkloadIdentity", "Security"]
  },
  {
    id: "gcp-ace-13",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Restricting Resource Creation to Specific Regions with Organization Policies",
    scenario: "Under European data protection laws (GDPR), an enterprise must ensure that data-storing Google Cloud resources (Compute Engine, GKE, Cloud Storage, Cloud SQL) can only be deployed in European regions (e.g., europe-west1, europe-west3, europe-west4).",
    question: "Which mechanism enforces this geographic boundary across all projects in the organization?",
    options: [
      { id: 'A', text: "Create an IAM condition on the Owner role requiring location headers matching Europe" },
      { id: 'B', text: "Define the Organization Policy constraint 'constraints/gcp.resourceLocations' with an allowed list of 'in:eu-locations' or specific European region codes" },
      { id: 'C', text: "Configure a VPC firewall rule blocking all egress traffic destined for non-European IP ranges" },
      { id: 'D', text: "Instruct project owners to set their local gcloud CLI compute/region configuration to europe-west1" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Organization Policy constraint 'constraints/gcp.resourceLocations' is a list constraint that defines the set of geographic locations where new resources can be provisioned. Applying this policy with 'in:eu-locations' or specific region identifiers at the Organization or Folder root strictly prevents any user from creating resources in unapproved geographic regions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "Compliance", "Governance"]
  },
  {
    id: "gcp-ace-14",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Resolving API Not Enabled Errors in New Google Cloud Projects",
    scenario: "A developer creates a new Google Cloud project and immediately attempts to launch a virtual machine using 'gcloud compute instances create test-vm --zone=us-central1-a'. The command fails with an error stating: 'Compute Engine API has not been used in project 123456789 before or it is disabled.'",
    question: "Which gcloud command must the developer run to resolve this error?",
    options: [
      { id: 'A', text: "gcloud compute instances enable-api" },
      { id: 'B', text: "gcloud components install compute" },
      { id: 'C', text: "gcloud services enable compute.googleapis.com" },
      { id: 'D', text: "gcloud config set api/compute enabled" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Google Cloud, APIs for billable services (Compute Engine, Kubernetes Engine, Cloud SQL, etc.) are disabled by default in newly created projects. To enable an API from the command line, the engineer executes 'gcloud services enable &lt;API_NAME&gt;' (e.g. 'gcloud services enable compute.googleapis.com'). Once enabled, resources can be provisioned immediately.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "gcloud", "APIs"]
  },
  {
    id: "gcp-ace-15",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Cloud Billing Account Linkage Permissions",
    scenario: "An organization wants to allow project creators in the Development folder to link newly created projects to the corporate Cloud Billing Account without giving them access to view payment methods, invoices, or billing details of other departments.",
    question: "Which IAM role should be assigned to the project creators on the billing account?",
    options: [
      { id: 'A', text: "roles/resourcemanager.projectBillingManager on the organization root" },
      { id: 'B', text: "roles/billing.viewer on the billing account" },
      { id: 'C', text: "roles/billing.user on the billing account" },
      { id: 'D', text: "roles/billing.admin on the billing account" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'roles/billing.user' role (Billing Account User) grants permissions to associate and link projects to the specified billing account. It does not allow viewing payment details, invoices, or managing billing permissions, making it the ideal role to grant project creators for self-service billing linkage under least privilege.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "CloudIAM", "Governance"]
  },
  {
    id: "gcp-ace-16",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Recovering an Accidentally Deleted Project within the Grace Period",
    scenario: "An administrator accidentally shuts down project 'analytics-prod' using 'gcloud projects delete analytics-prod'. The application went offline immediately. The team realizes the mistake 4 hours later and needs to restore the project and all of its resources intact.",
    question: "How can the administrator recover the deleted project?",
    options: [
      { id: 'A', text: "Create a new project with the identical project ID and re-import data" },
      { id: 'B', text: "Open an urgent P1 support ticket with Google Cloud Support to restore from tape backup" },
      { id: 'C', text: "Execute 'gcloud projects undelete analytics-prod' within the 30-day soft-delete grace period" },
      { id: 'D', text: "Restore the project from Cloud Storage using gsutil restore" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a Google Cloud project is deleted, it enters a 30-day 'soft-delete' state before permanent purging. During this 30-day window, any user with the 'roles/resourcemanager.projectDeleter' or Owner role can instantly restore the project and all its underlying resources using the 'gcloud projects undelete &lt;PROJECT_ID&gt;' command.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ResourceManager", "Projects", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-17",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Scaling IAM Role Management with Google Groups",
    scenario: "A company employs 150 software engineers who frequently rotate between project teams. The security team finds that granting and revoking IAM roles on individual user email addresses (e.g., alice@company.com, bob@company.com) across 30 projects results in permission drift and offboarding security vulnerabilities.",
    question: "What is the Google Cloud recommended best practice for scalable IAM administration?",
    options: [
      { id: 'A', text: "Assign the primitive Editor role to all engineers at the organization root level" },
      { id: 'B', text: "Create a single shared user-managed service account and share its JSON key among all engineers" },
      { id: 'C', text: "Create Google Groups in Cloud Identity or Google Workspace corresponding to job functions (e.g., backend-devs@company.com), bind IAM roles to the groups, and manage permissions by adding or removing users from the groups" },
      { id: 'D', text: "Write a Python script that scrapes IAM policies daily and emails reports to managers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The enterprise standard for Google Cloud IAM is to assign roles to Google Groups (managed centrally in Cloud Identity or Google Workspace) rather than directly to individual users. When an employee joins or leaves a team, updating their group membership instantly synchronizes their access across all projects, preventing orphaned permissions and simplifying auditing.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIdentity", "CloudIAM", "BestPractices"]
  },
  {
    id: "gcp-ace-18",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Auditing Effective IAM Permissions Across Resource Hierarchy with Policy Analyzer",
    scenario: "A compliance auditor requests proof of which employees, service accounts, and external users have administrative access to production BigQuery datasets. Because permissions can be inherited from the Organization, Folders, and Project levels, checking project-level IAM policies alone is insufficient.",
    question: "Which Google Cloud tool should the security engineer use to analyze effective access across the hierarchy?",
    options: [
      { id: 'A', text: "gcloud projects get-iam-policy" },
      { id: 'B', text: "Cloud Asset Inventory export to CSV" },
      { id: 'C', text: "Cloud Logging filter for IAM changes" },
      { id: 'D', text: "IAM Policy Analyzer in the Google Cloud Console" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud IAM Policy Analyzer analyzes the complete resource hierarchy (Organization, Folders, Projects, and Resources) to calculate effective access. It evaluates inherited roles, group memberships, and IAM conditions to reveal exactly who has access to which resources, resolving the limitations of querying single-level policies.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "PolicyAnalyzer", "Compliance"]
  },
  {
    id: "gcp-ace-19",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Preventing Accidental Service Account Key Creation via Organization Policy",
    scenario: "Security telemetry indicates that developers frequently create and download service account JSON keys to their personal laptops, creating a high risk of credential exposure in public code repositories. The CISO mandates blocking service account key creation across all projects.",
    question: "Which Organization Policy constraint enforces this restriction organization-wide?",
    options: [
      { id: 'A', text: "Deploy an automated Cloud Function that deletes keys immediately after creation" },
      { id: 'B', text: "Enforce the constraint 'constraints/iam.disableServiceAccountKeyCreation' at the organization root" },
      { id: 'C', text: "Revoke the Service Account Admin role from all developers" },
      { id: 'D', text: "Configure a Cloud Storage lifecycle policy to delete JSON files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Applying the boolean Organization Policy constraint 'constraints/iam.disableServiceAccountKeyCreation' at the organization root disables the creation of service account private keys across all child folders and projects. Any API or console attempt to generate a new service account key is rejected unconditionally.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "ServiceAccounts", "Security"]
  },
  {
    id: "gcp-ace-20",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Configuring Application Default Credentials (ADC) for Local Development",
    scenario: "A developer writes a Python application using the Google Cloud Client Libraries (google-cloud-storage) to run on a local workstation. The developer ran 'gcloud auth login', but the Python script throws a 'DefaultCredentialsError: Could not automatically determine credentials' when executed locally.",
    question: "Which command must the developer run to set up credentials for the client library?",
    options: [
      { id: 'A', text: "gcloud auth login --enable-adc" },
      { id: 'B', text: "gcloud config set auth/application_default true" },
      { id: 'C', text: "gcloud auth application-default login" },
      { id: 'D', text: "export GOOGLE_APPLICATION_CREDENTIALS=/dev/null" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "'gcloud auth login' authenticates credentials specifically for the gcloud and gsutil CLI tools. Application client libraries (Python, Java, Node.js, Go) look for Application Default Credentials (ADC). Running 'gcloud auth application-default login' acquires user credentials and writes them to a well-known local credentials file that client libraries discover automatically.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "ADC", "Development"]
  },
  {
    id: "gcp-ace-21",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Understanding Organization Hierarchy IAM Inheritance",
    scenario: "An organization has a folder named 'Finance' that contains two projects: 'payroll-app' and 'billing-app'. An engineer is granted the 'roles/viewer' role directly on the 'Finance' folder. Later, an administrator attempts to remove the viewer role from the engineer specifically inside 'payroll-app' via the project's IAM page.",
    question: "Why is the administrator unable to remove the viewer role from 'payroll-app'?",
    options: [
      { id: 'A', text: "The project must be placed into maintenance mode before editing inherited roles" },
      { id: 'B', text: "IAM permissions inherit strictly downwards in the resource hierarchy; inherited permissions cannot be revoked or overridden at a child level" },
      { id: 'C', text: "The engineer holds the primitive Owner role at the project level" },
      { id: 'D', text: "The administrator lacks the Security Admin role in payroll-app" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud IAM follows a strict downward inheritance model: Organization -> Folders -> Projects -> Resources. An IAM role granted at a higher level (e.g., Folder) is inherited by all child resources and cannot be narrowed, modified, or revoked at a lower level (Project). To restrict access, the role must be removed from the Folder and granted only on the specific child projects.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ResourceManager", "CloudIAM", "Inheritance"]
  },
  {
    id: "gcp-ace-22",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Filtering gcloud Output for Scripting and Automation",
    scenario: "A DevOps engineer needs to write a bash script that retrieves the internal IP addresses of all running Compute Engine instances in zone us-central1-a whose names begin with 'worker-'. The output must contain only the raw IP strings without table headers.",
    question: "Which gcloud command syntax extracts this data accurately?",
    options: [
      { id: 'A', text: "gcloud compute instances describe worker-* --zone=us-central1-a --format=text" },
      { id: 'B', text: "gcloud compute instances list | grep worker | awk '{print $4}'" },
      { id: 'C', text: "gcloud compute instances list --query=\"select networkIP where name like 'worker%'\"" },
      { id: 'D', text: "gcloud compute instances list --filter=\"zone:us-central1-a AND status:RUNNING AND name:worker*\" --format=\"value(networkInterfaces[0].networkIP)\"" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The gcloud CLI provides native, server-side filtering and output formatting flags. Using '--filter=\"zone:us-central1-a AND status:RUNNING AND name:worker*\"' efficiently filters the instances, and '--format=\"value(networkInterfaces[0].networkIP)\"' extracts only the internal IP values without table headers, borders, or extra formatting, making it ideal for robust scripting.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "gcloud", "Automation"]
  },
  {
    id: "gcp-ace-23",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Assigning Billing Account Administrator Role",
    scenario: "A financial operations director needs full control to manage corporate payment instruments, add credit lines, set up budgets, and manage user permissions on the corporate Cloud Billing Account, without needing permissions to create or manage infrastructure resources in individual engineering projects.",
    question: "Which role should be granted to the director on the billing account?",
    options: [
      { id: 'A', text: "roles/owner on all projects" },
      { id: 'B', text: "roles/resourcemanager.organizationAdmin on the organization" },
      { id: 'C', text: "roles/billing.user on the organization root" },
      { id: 'D', text: "roles/billing.admin on the billing account" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'roles/billing.admin' role (Billing Account Administrator) provides complete administrative control over the billing account: managing payment methods, viewing invoices, setting budgets, exporting billing data, and controlling which users have billing roles. It does not grant project-level infrastructure permissions, maintaining separation of duties.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "CloudIAM", "Governance"]
  },
  {
    id: "gcp-ace-24",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Identity and Google Workspace Directory Synchronization",
    scenario: "An enterprise with 5,000 corporate users in Microsoft Active Directory is migrating to Google Cloud. The IT director requires that employee accounts, passwords, and group memberships in Active Directory automatically sync to Cloud Identity so users can authenticate using their existing corporate credentials.",
    question: "Which Google Cloud tool synchronizes on-premises Active Directory with Cloud Identity?",
    options: [
      { id: 'A', text: "Google Cloud Identity-Aware Proxy (IAP)" },
      { id: 'B', text: "Active Directory Migration Tool (ADMT)" },
      { id: 'C', text: "Cloud Identity Connector for Azure" },
      { id: 'D', text: "Google Cloud Directory Sync (GCDS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud Directory Sync (GCDS) is a free, downloadable tool that synchronizes users, groups, and non-sensitive attributes from Microsoft Active Directory or LDAP directories to Cloud Identity / Google Workspace. It runs on-premises or in a VM and ensures that corporate user lifecycles are mirrored in Google Cloud automatically.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIdentity", "ActiveDirectory", "DirectorySync"]
  },
  {
    id: "gcp-ace-25",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Temporary Elevated Access Using IAM Conditions",
    scenario: "A database administrator needs emergency write access to production Cloud SQL instances for an urgent 4-hour maintenance window on Saturday from 12:00 to 16:00 UTC. The security team wants to grant the role with an automatic expiration so that nobody needs to remember to manually revoke the role after the window ends.",
    question: "Which IAM capability allows scheduling temporary role expiration?",
    options: [
      { id: 'A', text: "Grant the primitive Editor role and enable two-factor authentication" },
      { id: 'B', text: "Create a Cloud Scheduler job that executes a gcloud IAM revocation command at 16:00" },
      { id: 'C', text: "Set the user password expiration to 4 hours in Cloud Identity" },
      { id: 'D', text: "Add an IAM policy binding with an IAM Condition evaluating request.time < timestamp('2026-09-05T16:00:00Z')" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud IAM Conditions allow attaching Common Expression Language (CEL) expressions to role bindings. By defining a condition on 'request.time' (e.g. 'request.time < timestamp(\"2026-09-05T16:00:00Z\")'), the role automatically becomes inactive the moment the timestamp passes, providing self-expiring, zero-maintenance access.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "IAMConditions", "Security"]
  }
];

export default GCP_ACE_QUESTIONS_1;
