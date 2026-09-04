export const GCP_ACE_QUESTIONS_2 = [
  {
    id: "gcp-ace-26",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Replacing Default Compute Engine Service Account with a Custom Service Account",
    scenario: "A security audit reports that Compute Engine instances are running under the default Compute Engine service account ('123456789-compute@developer.gserviceaccount.com'), which has the primitive Editor role on the project. The application running on the instances only needs to read objects from a single Cloud Storage bucket.",
    question: "What is the recommended remediation to achieve least privilege?",
    options: [
      { id: 'A', text: "Enable Cloud Storage Object Versioning on the bucket" },
      { id: 'B', text: "Edit the default service account's role at the project level to Viewer" },
      { id: 'C', text: "Disable the default service account in the Cloud Console" },
      { id: 'D', text: "Create a custom user-managed service account, grant it 'roles/storage.objectViewer' on the specific bucket, and update the VM instances to run under the new service account" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Compute Engine default service account is historically granted the broad Editor role. The security best practice is to create a custom user-managed service account (e.g., 'app-reader@...'), grant it only the exact required role ('roles/storage.objectViewer') on the specific target bucket, and assign that custom service account to the VMs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ServiceAccounts", "LeastPrivilege", "ComputeEngine"]
  },
  {
    id: "gcp-ace-27",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Allocation Quotas vs. Rate Quotas",
    scenario: "A machine learning team needs to provision 16 NVIDIA A100 GPUs across multiple Compute Engine instances in region us-central1. When attempting to launch the instances, the deployment fails with a 'Quota exceeded: GPUS_ALL_REGIONS' error.",
    question: "How should the team resolve this capacity limitation?",
    options: [
      { id: 'A', text: "Upgrade the Cloud Billing account from credit card billing to invoiced billing" },
      { id: 'B', text: "Run 'gcloud compute instances create' repeatedly with exponential backoff until capacity becomes available" },
      { id: 'C', text: "Submit an allocation quota increase request for GPUs in the IAM & Admin > Quotas console and provide business justification" },
      { id: 'D', text: "Switch machine types from a2-highgpu-1g to e2-standard-4" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GPU allocation limits are physical resource allocation quotas set by Google Cloud to protect customers from unexpected billing and manage physical hardware availability. To increase physical resource limits (such as CPUs, GPUs, or static IPs), administrators must submit a Quota Increase Request via the Google Cloud Console, which is reviewed by Google Cloud support.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["Quotas", "ComputeEngine", "Administration"]
  },
  {
    id: "gcp-ace-28",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Granting Project Creation Rights in a Folder",
    scenario: "The lead architect wants developers in the 'Frontend Development' team to be able to create their own Google Cloud projects within the 'Frontend' folder, while preventing them from creating projects in the 'Backend' folder or at the organization root.",
    question: "Which IAM role should be assigned to the Frontend team, and at what level?",
    options: [
      { id: 'A', text: "roles/resourcemanager.folderAdmin bound at the organization root" },
      { id: 'B', text: "roles/resourcemanager.organizationAdmin bound at the organization root" },
      { id: 'C', text: "roles/owner bound to each existing project in the Frontend folder" },
      { id: 'D', text: "roles/resourcemanager.projectCreator bound directly to the 'Frontend' folder" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'roles/resourcemanager.projectCreator' role grants permission to create new projects. Binding this role directly on the 'Frontend' folder ensures that developers can only create projects nested inside that folder, without granting rights to create projects elsewhere in the organization.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ResourceManager", "Folders", "Governance"]
  },
  {
    id: "gcp-ace-29",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Viewing Billing Budget Alerts without Modifying Budgets",
    scenario: "A financial auditor needs to review existing Cloud Billing budgets, spending thresholds, and alert configurations for compliance purposes. The auditor must not have permission to alter budget amounts or add new alert channels.",
    question: "Which Cloud IAM role should be assigned to the auditor?",
    options: [
      { id: 'A', text: "roles/viewer on all projects" },
      { id: 'B', text: "roles/billing.admin on the billing account" },
      { id: 'C', text: "roles/billing.viewer on the billing account" },
      { id: 'D', text: "roles/billing.user on the billing account" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'roles/billing.viewer' role (Billing Account Viewer) provides read-only access to account financial information, including existing budgets, transactions, payment history, and invoices, without permitting any modifications to budgets or billing settings.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "CloudIAM", "Auditing"]
  },
  {
    id: "gcp-ace-30",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Cloud Shell Persistent Storage Architecture",
    scenario: "A systems administrator uses Cloud Shell daily to run administrative scripts and maintains a custom ~/.bashrc configuration and several deployment scripts in the home directory. The administrator is concerned that restarting the Cloud Shell session will wipe these files.",
    question: "How does Google Cloud handle data persistence across Cloud Shell sessions?",
    options: [
      { id: 'A', text: "Persistent storage requires attaching a dedicated Cloud SQL instance to the Cloud Shell VM" },
      { id: 'B', text: "Files must be manually committed to Google Cloud Source Repositories before closing the browser" },
      { id: 'C', text: "Cloud Shell provisions a persistent 5 GB $HOME directory backed by network storage that is preserved across sessions, while the root filesystem container is ephemeral" },
      { id: 'D', text: "Cloud Shell is completely stateless; all files in $HOME are deleted when the session disconnects" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud Shell provides a persistent 5 GB home directory ($HOME) that is mounted to the container each time a session starts and is preserved between sessions. However, files outside $HOME (in the root OS filesystem) and running processes are ephemeral and reset when the container terminates.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudShell", "Administration", "CloudSDK"]
  },
  {
    id: "gcp-ace-31",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Disabling Default VPC Network Creation Organization-Wide",
    scenario: "Security standards dictate that every project must use a custom mode VPC designed by the network team. Whenever a new project is created, Google Cloud automatically generates a default auto-mode VPC with pre-opened firewall rules (e.g., default-allow-internal, default-allow-ssh), violating policy.",
    question: "Which Organization Policy constraint prevents the automatic creation of the default network in new projects?",
    options: [
      { id: 'A', text: "Enforce the constraint 'constraints/compute.skipDefaultNetworkCreation' at the organization root" },
      { id: 'B', text: "Block port 22 in all subnet firewall rules" },
      { id: 'C', text: "Deploy a Cloud Function that executes 'gcloud compute networks delete default' every hour" },
      { id: 'D', text: "Revoke Compute Network Admin from project creators" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The boolean Organization Policy constraint 'constraints/compute.skipDefaultNetworkCreation' prevents the automatic creation of the 'default' auto-mode VPC network when new projects are instantiated, ensuring projects start with zero networks until custom VPCs are intentionally configured.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "VPC", "Networking"]
  },
  {
    id: "gcp-ace-32",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Configuring Cloud SDK Default Region and Zone",
    scenario: "A developer primarily deploys Compute Engine instances and GKE clusters into region us-east1 and zone us-east1-b. The developer is tired of passing '--region=us-east1' and '--zone=us-east1-b' on every command.",
    question: "Which pair of gcloud config commands sets these defaults globally for the active configuration?",
    options: [
      { id: 'A', text: "gcloud default set region=us-east1 zone=us-east1-b" },
      { id: 'B', text: "export GOOGLE_COMPUTE_REGION=us-east1 GOOGLE_COMPUTE_ZONE=us-east1-b" },
      { id: 'C', text: "gcloud compute set-default --region=us-east1 --zone=us-east1-b" },
      { id: 'D', text: "gcloud config set compute/region us-east1 && gcloud config set compute/zone us-east1-b" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The gcloud CLI stores compute preferences under the 'compute' section. Executing 'gcloud config set compute/region us-east1' and 'gcloud config set compute/zone us-east1-b' updates the active configuration profile, so subsequent compute commands default to these values automatically.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "gcloud", "ComputeEngine"]
  },
  {
    id: "gcp-ace-33",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Creating Custom IAM Roles for Niche Operational Tasks",
    scenario: "A third-party monitoring vendor needs read-only access to view Compute Engine instance metadata and disk metrics, but corporate policy forbids granting the broad 'roles/compute.viewer' role because it exposes sensitive network and firewall configurations.",
    question: "What is the recommended approach to fulfill this request?",
    options: [
      { id: 'A', text: "Grant the vendor the primitive Viewer role and instruct them not to click on network settings" },
      { id: 'B', text: "Download an administrative service account JSON key and provide it to the vendor" },
      { id: 'C', text: "Add the vendor to the default Compute Engine service account" },
      { id: 'D', text: "Create a Custom IAM Role at the project or organization level containing only the specific required permissions (e.g., compute.instances.get, compute.instances.list), and grant this custom role to the vendor" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When predefined roles grant broader access than necessary, Google Cloud allows creating Custom IAM Roles. An administrator can select the precise set of permissions (e.g., 'compute.instances.get', 'compute.instances.list') and bundle them into a tailored role, satisfying strict compliance requirements.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "CustomRoles", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-34",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Auditing Administrative Actions with Cloud Audit Logs",
    scenario: "A production database in project 'db-prod' was abruptly stopped at 03:00 UTC. The operations team needs to determine who stopped the database instance, the exact timestamp of the API request, and the caller's IP address.",
    question: "Which log type in Cloud Logging records this operational event by default?",
    options: [
      { id: 'A', text: "Compute Engine serial port console logs" },
      { id: 'B', text: "VPC Flow Logs" },
      { id: 'C', text: "Cloud Audit Logs - Admin Activity audit logs" },
      { id: 'D', text: "Cloud Audit Logs - Data Access audit logs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Audit Logs include Admin Activity logs, which record configuration changes, API calls that modify resource metadata (e.g., stopping a VM, deleting a table, modifying IAM). Admin Activity logs are enabled by default across all Google Cloud services, are retained for 400 days, and cannot be disabled.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "CloudAuditLogs", "Security"]
  },
  {
    id: "gcp-ace-35",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Granting BigQuery Data Access Without Giving Project-Level Access",
    scenario: "An external data scientist needs read and query access to a specific BigQuery dataset named 'marketing_analytics' inside project 'enterprise-dw'. The data scientist must not be able to view or query any other datasets in the project.",
    question: "How should the access control be configured?",
    options: [
      { id: 'A', text: "Export the BigQuery dataset to CSV files in a public Cloud Storage bucket" },
      { id: 'B', text: "Grant 'roles/bigquery.dataViewer' and 'roles/bigquery.jobUser' at the project level" },
      { id: 'C', text: "Grant the 'roles/bigquery.dataViewer' role to the data scientist directly on the 'marketing_analytics' dataset resource in BigQuery, and grant 'roles/bigquery.jobUser' at the project level to allow running query jobs" },
      { id: 'D', text: "Assign the primitive Viewer role at the project level" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "BigQuery supports fine-grained, dataset-level IAM access control. To restrict access to a single dataset, the 'roles/bigquery.dataViewer' role is granted directly on the dataset object. To execute queries that process data, the user also requires 'roles/bigquery.jobUser' at the project level, which allows running query jobs without granting read access to any project data.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "CloudIAM", "LeastPrivilege"]
  },
  {
    id: "gcp-ace-36",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Cloud Billing Budgets via Terraform or gcloud",
    scenario: "A cloud architecture team manages infrastructure as code (IaC) and wants to automate the creation of Cloud Billing budgets and Pub/Sub alert channels whenever new Google Cloud projects are provisioned.",
    question: "Which API and resource manages billing budgets programmatically?",
    options: [
      { id: 'A', text: "Cloud Resource Manager API" },
      { id: 'B', text: "Cloud Monitoring Metric Alert API" },
      { id: 'C', text: "Service Usage API" },
      { id: 'D', text: "Cloud Billing Budget API (google_billing_budget resource in Terraform)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud provides the Cloud Billing Budget API ('billingbudgets.googleapis.com') specifically for creating, updating, and automating billing budgets and notification channels. In Terraform, the 'google_billing_budget' resource defines budget amounts, threshold rules, and Pub/Sub alert destinations programmatically.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "Terraform", "Automation"]
  },
  {
    id: "gcp-ace-37",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Controlling Service Account Creation with Folder-Level IAM",
    scenario: "An enterprise wants to allow team leads in the 'Data Engineering' folder to create and manage service accounts for their ETL pipelines, while preventing them from modifying IAM policies on the folder or project itself.",
    question: "Which IAM role provides service account lifecycle management without project IAM administration rights?",
    options: [
      { id: 'A', text: "roles/iam.serviceAccountAdmin on the folder" },
      { id: 'B', text: "roles/resourcemanager.organizationAdmin on the organization" },
      { id: 'C', text: "roles/owner on the project" },
      { id: 'D', text: "roles/iam.securityAdmin on the folder" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'roles/iam.serviceAccountAdmin' role grants permissions to create, update, delete, and list service accounts. Assigning this role on the target folder gives team leads control over service account lifecycles within their child projects without granting the ability to alter broader project IAM policies or resource access.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "ServiceAccounts", "Governance"]
  },
  {
    id: "gcp-ace-38",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Identifying Unique Project Identifiers: Name vs. ID vs. Number",
    scenario: "An engineer is writing an automated deployment pipeline. When configuring the Google Cloud SDK and specifying resource endpoints in API calls, the engineer must determine whether to use the Project Name, Project ID, or Project Number.",
    question: "What is the key functional difference between Project Name and Project ID?",
    options: [
      { id: 'A', text: "Project Number is chosen by the user; Project ID is generated randomly by Google" },
      { id: 'B', text: "Project ID is globally unique, immutable, and chosen by the user at creation to identify the project in CLI and API calls; Project Name is a mutable, user-friendly display string that is not globally unique" },
      { id: 'C', text: "Project ID and Project Name are interchangeable in all gcloud CLI commands" },
      { id: 'D', text: "Project Name is globally unique and cannot be changed; Project ID can be updated at any time in the console" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Google Cloud: 1) Project Name is a non-unique, editable display label; 2) Project ID is a globally unique, permanent alphanumeric string chosen by the user during creation, used across the CLI and APIs; 3) Project Number is an immutable system-assigned numerical identifier used internally by Google services.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ResourceManager", "Projects", "Fundamentals"]
  },
  {
    id: "gcp-ace-39",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Restricting Cloud Storage Bucket Creation by Region",
    scenario: "Developers across multiple departments frequently create Cloud Storage buckets with multi-region or US-based locations, violating corporate data sovereignty requirements that mandate all data remain stored in the 'australia-southeast1' region.",
    question: "How should the enterprise enforce that storage buckets can only be created in Australia?",
    options: [
      { id: 'A', text: "Delete all default storage classes in the Google Cloud Console" },
      { id: 'B', text: "Assign 'roles/storage.admin' with an IAM condition checking IP subnet" },
      { id: 'C', text: "Apply the Organization Policy constraint 'constraints/gcp.resourceLocations' restricting locations to 'australia-southeast1'" },
      { id: 'D', text: "Configure a Cloud Storage lifecycle policy to delete non-compliant buckets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Organization Policy constraint 'constraints/gcp.resourceLocations' governs the geographical placement of all supported resources, including Cloud Storage buckets, Compute Engine disks, and Cloud SQL instances. Setting this policy to allow only 'australia-southeast1' blocks bucket creation in any other location.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["OrganizationPolicy", "CloudStorage", "Compliance"]
  },
  {
    id: "gcp-ace-40",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Viewing Billing Accounts Associated with a User",
    scenario: "A contractor logs into the gcloud CLI and needs to verify which Cloud Billing Accounts they have permission to access before linking a new project.",
    question: "Which gcloud command lists all available billing accounts?",
    options: [
      { id: 'A', text: "gcloud compute billing list" },
      { id: 'B', text: "gcloud billing accounts list" },
      { id: 'C', text: "gcloud organizations list-billing" },
      { id: 'D', text: "gcloud projects billing get" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The command 'gcloud billing accounts list' displays all Cloud Billing Accounts to which the authenticated user has access, showing the Billing Account ID, Display Name, and account status (OPEN or CLOSED).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "CloudBilling", "CLI"]
  },
  {
    id: "gcp-ace-41",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Enabling Cloud Identity-Aware Proxy (IAP) for Secure SSH Access",
    scenario: "A security policy forbids attaching public IP addresses to Compute Engine instances or opening firewall port 22 to 0.0.0.0/0. Engineers still need SSH access to private instances from their corporate laptops over the internet without setting up a traditional bastion host or VPN.",
    question: "Which Google Cloud service enables secure, browser-based and CLI SSH connectivity to private VMs?",
    options: [
      { id: 'A', text: "Cloud Interconnect with Direct Peering" },
      { id: 'B', text: "VPC Network Peering with on-premises routers" },
      { id: 'C', text: "Identity-Aware Proxy (IAP) TCP forwarding with 'gcloud compute ssh --tunnel-through-iap'" },
      { id: 'D', text: "Cloud NAT with port forwarding rules" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Identity-Aware Proxy (IAP) TCP forwarding allows authorized users to connect to administrative ports (SSH, RDP) on private VMs that lack public IP addresses. By creating an ingress firewall rule allowing traffic from Google's IAP IP range (35.235.240.0/20) and running 'gcloud compute ssh --tunnel-through-iap', traffic is encrypted and authenticated through Google's proxy.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["IAP", "ComputeEngine", "Security"]
  },
  {
    id: "gcp-ace-42",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Suppressing Interactive Prompts in Automated gcloud Scripts",
    scenario: "A continuous deployment script executes 'gcloud compute instances delete old-worker --zone=us-central1-a'. The deployment pipeline hangs indefinitely waiting for a human operator to confirm: 'The following instances will be deleted... Do you want to continue (Y/n)?'.",
    question: "How can the engineer ensure gcloud commands proceed automatically in headless CI/CD environments?",
    options: [
      { id: 'A', text: "Pass the '--quiet' (or '-q') flag to the gcloud command" },
      { id: 'B', text: "Set the environment variable INTERACTIVE=FALSE" },
      { id: 'C', text: "Configure gcloud with 'gcloud config set interactive/enabled false'" },
      { id: 'D', text: "Append '| echo yes' to the shell command" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Passing the '--quiet' (or '-q') global flag to gcloud CLI commands suppresses all interactive prompts and automatically accepts default responses (or fails if required values are missing), allowing unattended scripts to execute cleanly without hanging.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "gcloud", "Automation"]
  },
  {
    id: "gcp-ace-43",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Understanding Data Access Audit Logs Billability",
    scenario: "A security architect wants to enable Data Access audit logs for Cloud Storage (Data Read and Data Write) across all projects in the organization to record every object download and upload for forensic auditing.",
    question: "What cost and volume consideration must the architect evaluate before enabling Data Access logs?",
    options: [
      { id: 'A', text: "Enabling Data Access logs automatically slows down Cloud Storage read and write latency by 50%" },
      { id: 'B', text: "Data Access logs can only be retained for a maximum of 7 days" },
      { id: 'C', text: "Data Access audit logs are free of charge across all services in Google Cloud" },
      { id: 'D', text: "Unlike Admin Activity logs (which are free), Data Access audit logs generate high-volume telemetry that incurs Cloud Logging ingestion and storage charges beyond the free allocation limit" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "While Admin Activity audit logs are enabled by default and free of charge, Data Access audit logs (which track API calls that read or write user-provided data) are disabled by default (except for BigQuery) because they generate immense log volume and are subject to standard Cloud Logging ingestion and storage pricing.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "CloudAuditLogs", "FinOps"]
  },
  {
    id: "gcp-ace-44",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Billing Account Subscriptions with Budgets and Credits",
    scenario: "A startup receives $10,000 in promotional Google Cloud credits. The finance manager wants to track net spend against credits and ensure that a budget alert triggers when total gross spend reaches 80% of the promotional credit amount, regardless of credit deductions.",
    question: "How should the finance manager configure the budget in Cloud Billing?",
    options: [
      { id: 'A', text: "Deploy a custom BigQuery view that deletes credit line items" },
      { id: 'B', text: "Configure the budget amount to $8,000 and uncheck 'Include credits' in the budget's credit filter options" },
      { id: 'C', text: "Enable credit auto-renewal in the billing console" },
      { id: 'D', text: "Create an IAM policy that restricts spending to promotional SKUs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Billing Budgets include a 'Credit' filter option. By default, budgets track net cost (cost after credits). Unchecking 'Include credits' causes the budget to evaluate gross usage costs before credit discounts are applied, ensuring alerts trigger accurately based on total consumption.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBilling", "Budgets", "FinOps"]
  },
  {
    id: "gcp-ace-45",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Controlling Cloud SDK Component Installation on Managed Systems",
    scenario: "A systems engineer installs the Google Cloud SDK on a local developer workstation via a standard Linux package manager (apt-get). When attempting to run 'gcloud components install kubectl', the command returns an error stating that component manager is disabled for this installation.",
    question: "Why did the component install command fail, and how should kubectl be installed?",
    options: [
      { id: 'A', text: "Package-managed installations (apt/yum) disable the internal gcloud component manager; components such as kubectl must be installed using the system package manager (e.g., 'apt-get install google-cloud-cli-kubectl')" },
      { id: 'B', text: "The engineer must execute the command using 'sudo gcloud components install kubectl --force'" },
      { id: 'C', text: "The engineer must first authenticate using 'gcloud auth login --admin'" },
      { id: 'D', text: "The Cloud SDK requires a paid license to install additional components" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When the Google Cloud CLI is installed using a system package manager (such as apt on Debian/Ubuntu or yum on RHEL/CentOS), the self-updating component manager is disabled to prevent conflicts with the OS package manager. Additional components must be installed via the OS repository (e.g., 'sudo apt-get install google-cloud-cli-kubectl').",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSDK", "Packaging", "Administration"]
  },
  {
    id: "gcp-ace-46",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Applying Labels for Cost Center Tracking vs. Network Tags",
    scenario: "A DevOps team wants to track monthly compute and storage costs incurred by different business units (e.g., cost_center: marketing, cost_center: finance) in billing reports, while also creating firewall rules that allow HTTP traffic to web instances.",
    question: "Which metadata mechanism should be used for cost tracking versus firewall targeting?",
    options: [
      { id: 'A', text: "Use Cloud Identity groups for both cost tracking and network routing" },
      { id: 'B', text: "Use Resource Labels (key-value pairs) for cost allocation and billing export, and use Network Tags (strings) for VPC firewall rule and routing targets" },
      { id: 'C', text: "Use Resource Labels for both cost tracking and firewall rules" },
      { id: 'D', text: "Use Network Tags for cost tracking and Resource Labels for firewalls" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resource Labels are key-value pairs attached to resources (VMs, disks, buckets) that are exported to Cloud Billing and BigQuery for financial filtering and departmental chargeback. Network Tags are simple string attributes attached to VM instances used exclusively by VPC firewall rules and routes to target network traffic.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Billing", "Networking"]
  },
  {
    id: "gcp-ace-47",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Enabling Google Cloud Cloud Shell Boost Mode",
    scenario: "A developer needs to build a large multi-stage Docker container image inside Google Cloud Shell. The build process is stalling due to CPU and memory constraints on the default 1 vCPU, 2 GB RAM Cloud Shell virtual machine.",
    question: "What feature can the developer enable to temporarily increase Cloud Shell VM resources?",
    options: [
      { id: 'A', text: "Modify the Cloud Shell machine type in the Compute Engine console to n2-standard-8" },
      { id: 'B', text: "Attach a Local SSD to the Cloud Shell instance" },
      { id: 'C', text: "Enable Boost Mode in the Cloud Shell settings to upgrade the VM to 4 vCPUs and 16 GB RAM for 24 hours" },
      { id: 'D', text: "Purchase a Cloud Shell Premium subscription in the billing console" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud Shell includes a free 'Boost Mode' feature. Enabling Boost Mode temporarily restarts the Cloud Shell VM with 4 vCPUs and 16 GB RAM for a 24-hour period, providing the necessary computing power for heavy compilation or container building tasks at no cost.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudShell", "Development", "Productivity"]
  },
  {
    id: "gcp-ace-48",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Granting Access to Third-Party Auditors with Cloud IAM",
    scenario: "An external auditing firm requires temporary read-only access to inspect all resource configurations, IAM policies, and billing reports across a company's Google Cloud Organization. The firm's auditors possess corporate Google accounts (@auditfirm.com).",
    question: "How should the security team grant access under least privilege?",
    options: [
      { id: 'A', text: "Create a Google Group (e.g., auditors@company.com), add the external auditor emails to the group, and grant 'roles/viewer' and 'roles/billing.viewer' to the group at the Organization root level" },
      { id: 'B', text: "Grant the primitive Owner role to each auditor on individual projects" },
      { id: 'C', text: "Export all project configurations to public S3 buckets" },
      { id: 'D', text: "Create individual service accounts for each auditor and email them the JSON private keys" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To grant cross-organization access cleanly and adhere to least privilege: 1) Group the external auditor identities into a centralized group; 2) Grant predefined read-only roles ('roles/viewer' for resources and 'roles/billing.viewer' for financial telemetry) at the Organization level; 3) Once the audit concludes, remove the group binding or empty the group membership.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudIAM", "Auditing", "BestPractices"]
  },
  {
    id: "gcp-ace-49",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Cross-Project Networking with Shared VPC Host Project",
    scenario: "An enterprise network team manages centralized VPC subnets, firewall rules, and interconnects in a dedicated 'networking-prod' project. Application teams need to deploy GKE clusters and Compute Engine instances in their own distinct projects while attaching them to the centralized subnets.",
    question: "Which Google Cloud architectural pattern fulfills this requirement?",
    options: [
      { id: 'A', text: "Configure VPC Network Peering between every application project and the networking-prod project" },
      { id: 'B', text: "Deploy all application workloads directly inside the networking-prod project" },
      { id: 'C', text: "Deploy an IPSec Cloud VPN tunnel between each application VPC and the central VPC" },
      { id: 'D', text: "Designate 'networking-prod' as a Shared VPC Host Project, attach application projects as Service Projects, and grant the 'roles/compute.networkUser' role to application service accounts on the host project's subnets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network. A designated Host Project contains the shared network and subnets. Service Projects are attached to the host project. By granting 'roles/compute.networkUser' on specific subnets to developers or service accounts in service projects, workloads can communicate securely on private internal IPs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["SharedVPC", "Networking", "Architecture"]
  },
  {
    id: "gcp-ace-50",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d1",
    domainName: "Setting up a cloud solution environment",
    title: "Managing Multi-Environment CLI Contexts with Named Configurations",
    scenario: "A cloud engineer frequently alternates between administering development, staging, and production environments across three different Google Cloud projects and two distinct corporate identities. Manually overriding project IDs and accounts with 'gcloud config set' risks executing destructive commands against the wrong environment.",
    question: "What is the recommended gcloud CLI feature for cleanly managing and switching between multiple operational contexts?",
    options: [
      { id: 'A', text: "Run 'gcloud auth login' and 'gcloud config set project' each time an environment switch occurs" },
      { id: 'B', text: "Install three separate instances of the Google Cloud SDK into distinct local directories" },
      { id: 'C', text: "Create and switch between named CLI configurations using 'gcloud config configurations create [NAME]' and 'gcloud config configurations activate [NAME]'" },
      { id: 'D', text: "Export the GOOGLE_APPLICATION_CREDENTIALS environment variable before running each CLI command" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Named CLI configurations allow engineers to define, store, and seamlessly switch between isolated collections of gcloud settings (including active account, default project, default compute zone, and proxy settings). Creating configurations with 'gcloud config configurations create &lt;NAME&gt;' and activating them with 'gcloud config configurations activate &lt;NAME&gt;' ensures environment isolation without credential pollution or manual re-entry.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GoogleCloudSDK", "CLI", "Governance"]
  }
];

export default GCP_ACE_QUESTIONS_2;
