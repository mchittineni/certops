export const GCP_ACE_QUESTIONS_6 = [
  {
    id: "gcp-ace-126",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Automating SSL/TLS Certificate Lifecycle with Google-Managed Certificates",
    scenario: "An enterprise deploys a public e-commerce store behind an External Application Load Balancer. The operations team wants Google Cloud to handle public SSL/TLS certificate issuance, DNS domain verification, and 90-day automated renewals without manual intervention.",
    question: "Which certificate resource should be provisioned?",
    options: [
      { id: 'A', text: "A self-managed SSL certificate uploaded via Cloud KMS" },
      { id: 'B', text: "An SSL certificate generated with OpenSSL and stored in Secret Manager" },
      { id: 'C', text: "A Google-managed SSL certificate (gcloud compute ssl-certificates create --domains=shop.example.com)" },
      { id: 'D', text: "A Let's Encrypt certificate configured on each backend Compute Engine VM" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google-managed SSL certificates are fully managed TLS certificates provisioned, verified, and automatically renewed by Google Cloud before expiration. Attaching a Google-managed certificate to an HTTPS Target Proxy eliminates manual certificate rotation and certificate expiry outages.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["LoadBalancing", "SSLCertificates", "Security"]
  },
  {
    id: "gcp-ace-127",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Managing Terraform State Durability on Google Cloud Storage",
    scenario: "A cloud platform team uses HashiCorp Terraform to manage Google Cloud infrastructure. Multiple engineers collaborate on the codebase, requiring shared state storage with state locking and disaster recovery capabilities.",
    question: "What is the recommended configuration for the Terraform remote backend?",
    options: [
      { id: 'A', text: "Save the state file on a shared Persistent Disk mounted via NFS" },
      { id: 'B', text: "Configure a 'gcs' backend in Terraform pointing to a dedicated Cloud Storage bucket with Object Versioning enabled" },
      { id: 'C', text: "Store state in Cloud Bigtable using a wide-column schema" },
      { id: 'D', text: "Store terraform.tfstate in a private Git repository" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Terraform provides native support for Google Cloud Storage ('gcs' backend). GCS natively supports distributed state locking via object generation preconditions to prevent concurrent modifications. Enabling Object Versioning on the bucket ensures past state versions can be restored if the state file becomes corrupted.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["Terraform", "CloudStorage", "DevOps"]
  },
  {
    id: "gcp-ace-128",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Configuring Cloud NAT for Outbound Internet Egress",
    scenario: "A private GKE cluster's nodes need to download container images from public third-party registries. The nodes have no external IPs, and outbound internet access is currently failing.",
    question: "Which pair of gcloud commands deploys Cloud NAT on the VPC network?",
    options: [
      { id: 'A', text: "Deploy an Internal Application Load Balancer with internet routing" },
      { id: 'B', text: "Run 'gcloud compute networks update --enable-internet-gateway'" },
      { id: 'C', text: "Create a Cloud Router with 'gcloud compute routers create', and then create the NAT gateway with 'gcloud compute routers nats create --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges'" },
      { id: 'D', text: "Run 'gcloud compute routes create default-internet --destination-range=0.0.0.0/0'" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud NAT is configured as a feature of Cloud Router. First, a Cloud Router is instantiated in the VPC and region ('gcloud compute routers create'). Second, Cloud NAT is created on that router ('gcloud compute routers nats create') with automatic IP allocation and configured to handle outbound traffic for all subnet ranges.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudNAT", "CloudRouter", "Networking"]
  },
  {
    id: "gcp-ace-129",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Horizontal Pod Autoscaler Deployment with Resource Metrics",
    scenario: "A containerized API running in GKE needs to scale between 2 and 15 pod replicas based on CPU load. The target average CPU utilization across pods should be maintained at 70%.",
    question: "Which kubectl command creates this autoscaler?",
    options: [
      { id: 'A', text: "kubectl scale deployment api-server --replicas=15" },
      { id: 'B', text: "kubectl autoscale deployment api-server --cpu-percent=70 --min=2 --max=15" },
      { id: 'C', text: "kubectl create hpa api-server --target-cpu=70" },
      { id: 'D', text: "kubectl set resources deployment api-server --limits=cpu=70%" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'kubectl autoscale deployment &lt;NAME&gt; --cpu-percent=70 --min=2 --max=15' command deploys a HorizontalPodAutoscaler resource in Kubernetes. HPA monitors pod CPU usage via Metrics Server and dynamically adjusts replica count between 2 and 15 to keep average CPU utilization near 70%.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "HPA", "Kubernetes"]
  },
  {
    id: "gcp-ace-130",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Protecting Workload Availability During GKE Node Upgrades with PDB",
    scenario: "During automated GKE node pool upgrades, multiple worker nodes are drained simultaneously, terminating pods and causing brief application outages. The application requires that at least 3 healthy pod replicas must remain online at all times.",
    question: "Which Kubernetes resource protects against voluntary disruption outages?",
    options: [
      { id: 'A', text: "LimitRange with default CPU requests" },
      { id: 'B', text: "StatefulSet with podManagementPolicy: OrderedReady" },
      { id: 'C', text: "PodDisruptionBudget (PDB) configured with minAvailable: 3" },
      { id: 'D', text: "ResourceQuota configured with pods: 3" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A PodDisruptionBudget (PDB) defines the minimum number of pod replicas (or percentage) that must remain available during voluntary disruptions such as node draining or cluster upgrades. Setting 'minAvailable: 3' blocks GKE from draining nodes if doing so would cause active replicas to fall below 3.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "PDB", "Reliability"]
  },
  {
    id: "gcp-ace-131",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Migrating from Container Registry to Artifact Registry",
    scenario: "Google Cloud deprecated legacy Container Registry ('gcr.io'). A company needs to provision a modern, regional container image repository in region 'us-central1' supporting fine-grained IAM controls and vulnerability scanning.",
    question: "Which command creates a Docker container repository in Artifact Registry?",
    options: [
      { id: 'A', text: "gcloud artifacts repositories create [REPO_NAME] --repository-format=docker --location=us-central1" },
      { id: 'B', text: "gcloud container images create [REPO_NAME] --region=us-central1" },
      { id: 'C', text: "gcloud storage buckets create gs://artifacts-[REPO_NAME]" },
      { id: 'D', text: "gcloud run repositories create [REPO_NAME]" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Artifact Registry is Google Cloud's modern universal package and container registry. The command 'gcloud artifacts repositories create &lt;NAME&gt; --repository-format=docker --location=us-central1' creates a regional repository supporting Docker images, Helm charts, and language packages with IAM role integration.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ArtifactRegistry", "Containers", "DevOps"]
  },
  {
    id: "gcp-ace-132",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Building Container Images in the Cloud Using Cloud Build",
    scenario: "A software engineer working on a lightweight laptop without Docker installed needs to build a container image from a local source code directory containing a Dockerfile and push it to Artifact Registry.",
    question: "Which command builds and pushes the image using Google Cloud managed build infrastructure?",
    options: [
      { id: 'A', text: "gcloud artifacts docker push ." },
      { id: 'B', text: "docker build -t [IMAGE] . && docker push [IMAGE]" },
      { id: 'C', text: "gcloud run deploy --source=." },
      { id: 'D', text: "gcloud builds submit --tag us-central1-docker.pkg.dev/[PROJECT]/[REPO]/[IMAGE]:v1 ." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "'gcloud builds submit' packages local source files, uploads them to Cloud Build, executes the Docker build on Google-managed serverless build runners, and automatically pushes the resulting container image to the designated Artifact Registry repository, requiring no local Docker daemon.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBuild", "ArtifactRegistry", "CI/CD"]
  },
  {
    id: "gcp-ace-133",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Defending Web Applications Against DDoS with Cloud Armor",
    scenario: "A web application behind an External Application Load Balancer experiences a Layer 7 HTTP flood attack originating from IP range 198.51.100.0/24. The security team needs to immediately block all requests from this IP range at Google's network edge before traffic reaches backend VMs.",
    question: "Which Google Cloud security service and rule type fulfills this requirement?",
    options: [
      { id: 'A', text: "Cloud DNS blacklist zone" },
      { id: 'B', text: "Cloud Armor security policy with a deny rule matching src-ip-ranges 198.51.100.0/24 attached to the load balancer backend service" },
      { id: 'C', text: "VPC firewall rule with target tag web-server" },
      { id: 'D', text: "Cloud NAT IP filter rule" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Armor operates at the network edge in conjunction with External Application Load Balancers. By defining a Cloud Armor security policy with a rule that denies traffic from specific IP ranges or matches OWASP Top 10 WAF signatures, malicious requests are filtered out at Google's global edge points of presence.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudArmor", "LoadBalancing", "Security"]
  },
  {
    id: "gcp-ace-134",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Petabyte-Scale Cloud-to-Cloud Migration with Storage Transfer Service",
    scenario: "An enterprise is migrating 800 TB of media assets stored across hundreds of Amazon S3 buckets to Google Cloud Storage. The migration must support scheduled daily incremental synchronizations, checksum validation, and automatic retries without deploying proxy servers.",
    question: "Which Google Cloud service should be selected for this migration?",
    options: [
      { id: 'A', text: "gsutil rsync running on a Compute Engine VM" },
      { id: 'B', text: "Storage Transfer Service" },
      { id: 'C', text: "Cloud Data Fusion ETL pipeline" },
      { id: 'D', text: "Transfer Appliance" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Storage Transfer Service is a managed service designed for large-scale data transfers from cloud storage providers (Amazon S3, Azure Blob, HTTP sources) to Cloud Storage. It handles high-concurrency parallelism, automated retries, and data integrity checksums without running customer VMs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["StorageTransferService", "CloudStorage", "Migration"]
  },
  {
    id: "gcp-ace-135",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Centralized SSH Key Governance Using OS Login",
    scenario: "A systems security team struggles with managing SSH keys scattered across VM metadata and user home directories on Compute Engine instances. When an employee leaves the company, revoking their SSH access requires manual cleanup across dozens of VMs.",
    question: "Which feature enables centralized, IAM-based SSH access management?",
    options: [
      { id: 'A', text: "Use Cloud KMS to encrypt the /etc/ssh/authorized_keys file" },
      { id: 'B', text: "Enable OS Login by setting metadata 'enable-oslogin=TRUE' and grant IAM roles 'roles/compute.osLogin' or 'roles/compute.osAdminLogin'" },
      { id: 'C', text: "Disable SSH port 22 and connect exclusively via serial console" },
      { id: 'D', text: "Configure a cron job that empties ~/.ssh/authorized_keys every hour" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling OS Login links Linux user accounts and SSH access directly to Google Cloud Identity and Cloud IAM. When OS Login is enabled, SSH keys are tied to the user's Google account, and access is governed by IAM roles ('roles/compute.osLogin' or 'roles/compute.osAdminLogin'). Offboarding an employee instantly revokes their SSH access across all VMs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "OSLogin", "Security"]
  },
  {
    id: "gcp-ace-136",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Verifying VM Boot Integrity with Shielded VM Features",
    scenario: "A security auditor requires verification that Compute Engine instances are protected against malicious bootkits, rootkits, and kernel-level firmware modifications.",
    question: "Which three capabilities are provided by Google Cloud Shielded VMs?",
    options: [
      { id: 'A', text: "Secure Boot, Virtual Trusted Platform Module (vTPM), and Integrity Monitoring" },
      { id: 'B', text: "Customer-Managed Encryption Keys, Secret Manager, and Cloud HSM" },
      { id: 'C', text: "OS Login, Binary Authorization, and Container Analysis" },
      { id: 'D', text: "Cloud Armor, VPC Service Controls, and Identity-Aware Proxy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Shielded VMs provide verifiable boot integrity using three native features: 1) Secure Boot (ensures the VM boots only software signed by trusted certificate authorities); 2) vTPM (provides virtual hardware roots of trust and cryptographic key storage); and 3) Integrity Monitoring (records boot measurements and alerts if discrepancies are detected).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "ShieldedVM", "Security"]
  },
  {
    id: "gcp-ace-137",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying Cloud Bigtable Instances with cbt CLI Tool",
    scenario: "A database administrator needs to script the automated deployment of a production Cloud Bigtable cluster in zone us-east1-c with 3 SSD nodes, and immediately create a table named 'sensor_data' with column family 'cf1'.",
    question: "Which tools and commands accomplish this sequence?",
    options: [
      { id: 'A', text: "Use 'gcloud sql instances create' and run standard DDL SQL queries" },
      { id: 'B', text: "Use 'bq mk' to create the Bigtable table" },
      { id: 'C', text: "Create instance with 'gcloud bigtable instances create', and create table with 'cbt createtable sensor_data' and 'cbt createfamily sensor_data cf1'" },
      { id: 'D', text: "Create the table inside Cloud Shell using the gsutil CLI" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'gcloud' CLI manages Cloud Bigtable instance and cluster infrastructure ('gcloud bigtable instances create'). The 'cbt' CLI is the official command-line tool for Bigtable table and data operations ('cbt createtable', 'cbt createfamily', 'cbt read').",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudBigtable", "cbt", "Database"]
  },
  {
    id: "gcp-ace-138",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Importing Compressed SQL Dumps into Cloud SQL",
    scenario: "A 100 GB gzipped MySQL database dump file ('database_backup.sql.gz') is uploaded to Cloud Storage bucket 'gs://sql-imports/'. An engineer attempts to import the file into Cloud SQL using 'gcloud sql import sql', but the command fails with an 'Access Denied' error referencing the bucket.",
    question: "What configuration is required to allow Cloud SQL to read the backup dump?",
    options: [
      { id: 'A', text: "Download the backup to an ephemeral Compute Engine VM first" },
      { id: 'B', text: "Make the Cloud Storage bucket publicly readable" },
      { id: 'C', text: "Assign the primitive Owner role to the developer executing the import command" },
      { id: 'D', text: "Retrieve the Cloud SQL instance's dedicated service account email and grant it 'roles/storage.objectViewer' on the Cloud Storage bucket" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Every Cloud SQL instance has a unique, Google-managed service account (visible via 'gcloud sql instances describe'). To import data from or export data to a Cloud Storage bucket, this specific Cloud SQL service account email must be granted IAM permissions ('roles/storage.objectViewer' for imports, 'roles/storage.objectAdmin' for exports) on the target bucket.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "CloudStorage", "DatabaseAdministration"]
  },
  {
    id: "gcp-ace-139",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Configuring Database Parameters via Cloud SQL Flags",
    scenario: "A PostgreSQL database on Cloud SQL needs its maximum connection limit adjusted to 1,000 connections ('max_connections=1000') and autovacuum logging enabled ('log_autovacuum_min_duration=0').",
    question: "Which gcloud command applies these database configuration settings?",
    options: [
      { id: 'A', text: "gcloud sql instances update-config --flags='max_connections=1000'" },
      { id: 'B', text: "SSH into the Cloud SQL instance and edit /etc/postgresql/postgresql.conf" },
      { id: 'C', text: "gcloud sql instances patch [INSTANCE_NAME] --database-flags=max_connections=1000,log_autovacuum_min_duration=0" },
      { id: 'D', text: "Execute 'ALTER SYSTEM SET max_connections = 1000' over standard SQL connection" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Cloud SQL, users do not have root filesystem access or SSH access to underlying database host VMs. Database engine configuration variables are modified as 'database flags' using 'gcloud sql instances patch &lt;INSTANCE&gt; --database-flags=...'. Note that modifying certain flags may trigger an automatic database restart.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "DatabaseFlags", "Configuration"]
  },
  {
    id: "gcp-ace-140",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Implementing East-West Microservice Security with GKE Network Policies",
    scenario: "A multi-tier application runs in GKE. The security team mandates that pods with label 'app: payment-processor' must only accept incoming network traffic from pods labeled 'app: frontend-api', and must strictly drop network packets from all other pods in the cluster.",
    question: "Which Kubernetes resource enforces this network microsegmentation?",
    options: [
      { id: 'A', text: "Configure an External Application Load Balancer with URL routing rules" },
      { id: 'B', text: "Enable Network Policy enforcement on the GKE cluster and apply a standard Kubernetes 'NetworkPolicy' YAML manifest specifying ingress from 'app: frontend-api'" },
      { id: 'C', text: "Deploy Cloud NAT inside the Kubernetes cluster" },
      { id: 'D', text: "Create a VPC firewall rule targeting payment-processor pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GKE Network Policies (powered by Calico or Datapath V2) enforce Layer 3 and Layer 4 pod-level network security controls inside the cluster. A standard Kubernetes NetworkPolicy resource specifies ingress rules based on podSelector labels, isolating the payment processor pods from unauthorized internal east-west traffic.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "NetworkPolicy", "Security"]
  },
  {
    id: "gcp-ace-141",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Configuring Custom Domain Mappings on Cloud Run",
    scenario: "A company wants their Cloud Run microservice, currently accessible at 'https://service-xyz-uc.a.run.app', to be reachable at their corporate domain 'https://api.company.com'.",
    question: "What is the recommended procedure to map the custom domain to the Cloud Run service?",
    options: [
      { id: 'A', text: "Deploy an unmanaged Compute Engine instance running Apache to reverse-proxy traffic to Cloud Run" },
      { id: 'B', text: "Modify the /etc/hosts file on all customer client workstations" },
      { id: 'C', text: "Change the Cloud Run service name to 'api.company.com'" },
      { id: 'D', text: "Create a domain mapping using 'gcloud beta run domain-mappings create', and add the provided CNAME record to the domain's DNS host" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run supports custom domain mappings directly. Executing 'gcloud beta run domain-mappings create --service=&lt;SERVICE&gt; --domain=api.company.com' generates DNS mapping records (such as CNAME or A/AAAA records). Once added to the DNS registrar, Google automatically manages and renews an SSL/TLS certificate for the domain.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "CustomDomains", "Networking"]
  },
  {
    id: "gcp-ace-142",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Parallel BigQuery Data Extraction to Sharded Cloud Storage Files",
    scenario: "A data engineer needs to export a 2 TB BigQuery table to Cloud Storage as compressed Parquet files. When running 'bq extract', the command fails because a single file cannot exceed the maximum export file size limit.",
    question: "How should the export destination URI be formatted to allow parallel sharded export?",
    options: [
      { id: 'A', text: "Write a Python script that exports 10,000 rows at a time using OFFSET" },
      { id: 'B', text: "Increase the BigQuery table extraction size quota in IAM" },
      { id: 'C', text: "Export the table as uncompressed CSV instead" },
      { id: 'D', text: "Format the destination URI with a wildcard character: 'gs://my-bucket/export-*.parquet'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery enforces a maximum file size (typically 1 GB) per single exported file. By supplying a wildcard pattern (e.g., 'gs://my-bucket/export-*.parquet') in the 'bq extract' command, BigQuery automatically shards the output across multiple files in parallel, drastically reducing export time for terabyte-scale datasets.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "bqExtract", "DataPipelines"]
  },
  {
    id: "gcp-ace-143",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Accessing Compute Engine VM Metadata Programmatically",
    scenario: "A containerized application running on a Compute Engine instance needs to determine its own zone and retrieve an OAuth2 access token to call Google Cloud APIs without hardcoding credentials or configuration files.",
    question: "How should the application query the Google Cloud metadata server from within the VM?",
    options: [
      { id: 'A', text: "Make an HTTP GET request to 'http://metadata.google.internal/computeMetadata/v1/' with header 'Metadata-Flavor: Google'" },
      { id: 'B', text: "Read local environment variable $GOOGLE_COMPUTE_METADATA" },
      { id: 'C', text: "Run 'gcloud config list' via a bash subshell" },
      { id: 'D', text: "Query Google Public DNS 8.8.8.8 on UDP port 53" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Engine provides an internal metadata server accessible at 'http://metadata.google.internal/computeMetadata/v1/'. Applications query endpoints like 'instance/zone' and 'instance/service-accounts/default/token'. Every request must include the custom HTTP header 'Metadata-Flavor: Google' to prevent Server-Side Request Forgery (SSRF) vulnerabilities.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "MetadataServer", "Security"]
  },
  {
    id: "gcp-ace-144",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Secure Terraform Service Account Impersonation",
    scenario: "A platform automation team uses Terraform to deploy Google Cloud infrastructure from GitHub Actions. The team wants to ensure Terraform runs with permissions of 'terraform-admin@project.iam.gserviceaccount.com' without saving or storing a service account key in GitHub repository secrets.",
    question: "How should Terraform be configured to authenticate via impersonation?",
    options: [
      { id: 'A', text: "Assign the Owner role to the GitHub runner IP address" },
      { id: 'B', text: "Configure GitHub Actions to authenticate via Workload Identity Federation, and configure the Google provider block with 'impersonate_service_account'" },
      { id: 'C', text: "Store the base64-encoded service account JSON key in GitHub Secrets" },
      { id: 'D', text: "Embed the service account credentials in the main.tf code file" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The modern enterprise standard combines Workload Identity Federation (allowing GitHub Actions to authenticate via OpenID Connect) with Terraform service account impersonation. Specifying 'impersonate_service_account = \"terraform-admin@...\"' in the Google provider block instructs Terraform to generate short-lived OAuth tokens, completely eliminating static JSON keys.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["Terraform", "ServiceAccounts", "DevOps"]
  },
  {
    id: "gcp-ace-145",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Multi-Cluster Ingress for Global GKE Workload Routing",
    scenario: "An enterprise runs identical GKE clusters in region 'us-central1' and region 'europe-west1'. The enterprise wants incoming customer traffic to hit a single global anycast IP and route to the nearest healthy cluster, failing over automatically if a regional cluster goes down.",
    question: "Which Google Cloud GKE feature provides this global routing across multiple clusters?",
    options: [
      { id: 'A', text: "Cloud DNS weighted routing records" },
      { id: 'B', text: "Compute Engine Stateful Managed Instance Groups" },
      { id: 'C', text: "Standard GKE Ingress deployed independently in each cluster" },
      { id: 'D', text: "Multi-Cluster Ingress (MCI)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Multi-Cluster Ingress (MCI) is a Google-managed controller that configures a single global External Application Load Balancer across multiple GKE clusters deployed in different regions. It dynamically balances traffic across clusters based on proximity and health, providing seamless global high availability and disaster recovery.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "MultiClusterIngress", "Architecture"]
  },
  {
    id: "gcp-ace-146",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Enforcing Specific CPU Architecture Requirements with Minimum CPU Platform",
    scenario: "A high-performance computing (HPC) application requires Advanced Vector Extensions (AVX-512) instructions available on Intel Ice Lake processors or newer. When Compute Engine instances are created with generic machine types (such as n2-standard-4), they may be scheduled on older host hardware.",
    question: "Which flag ensures the instance is deployed on the required CPU hardware architecture?",
    options: [
      { id: 'A', text: "--cpu-architecture=avx512" },
      { id: 'B', text: "--accelerator=type=intel-ice-lake" },
      { id: 'C', text: "--host-hardware=latest" },
      { id: 'D', text: "--min-cpu-platform=\"Intel Ice Lake\"" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Passing '--min-cpu-platform=\"Intel Ice Lake\"' to 'gcloud compute instances create' guarantees that the VM instance will only be scheduled and booted on host hardware running Intel Ice Lake processors (or newer platforms that support the required instruction sets).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Hardware", "Performance"]
  },
  {
    id: "gcp-ace-147",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Preventing Database Disk Full Failures with Storage Auto-Increase",
    scenario: "A rapidly growing e-commerce application stores transaction records in Cloud SQL for MySQL. The database administrator is worried that sudden surges in data volume could cause the disk to reach 100% capacity, putting the database into an offline read-only state.",
    question: "Which Cloud SQL setting ensures disk capacity expands automatically as data grows?",
    options: [
      { id: 'A', text: "Create a Snapshot Schedule with 1-hour intervals" },
      { id: 'B', text: "Deploy Cloud Monitoring alerts to email administrators at 80% disk capacity" },
      { id: 'C', text: "Enable Storage Auto-Increase on the Cloud SQL instance" },
      { id: 'D', text: "Attach a Regional Persistent Disk with dynamic resizing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enabling 'Storage Auto-Increase' on a Cloud SQL instance allows Google Cloud to automatically expand persistent disk capacity whenever available free space falls below 10%. This prevents sudden disk-full crashes and ensures uninterrupted database write operations without requiring manual intervention.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "StorageAutoIncrease", "Reliability"]
  },
  {
    id: "gcp-ace-148",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Bidirectional Peering Configuration for VPC Network Peering",
    scenario: "An administrator executes 'gcloud compute networks peerings create peer-ab --network=vpc-a --peer-network=vpc-b' in project A. The administrator notices that instances in 'vpc-a' still cannot communicate with instances in 'vpc-b' and the peering state shows 'INACTIVE'.",
    question: "What required step was missed in configuring the peering connection?",
    options: [
      { id: 'A', text: "The instances must be rebooted to recognize the new route tables" },
      { id: 'B', text: "Both VPCs must be converted from Custom Mode to Auto Mode" },
      { id: 'C', text: "A Cloud VPN tunnel must be configured between the VPCs to exchange BGP routes" },
      { id: 'D', text: "A symmetric peering connection from vpc-b to vpc-a must also be created in project B before the peering state becomes ACTIVE" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "VPC Network Peering in Google Cloud requires symmetric, bidirectional configuration. Creating a peering connection from VPC A to VPC B places the peering in an INACTIVE state until a corresponding peering connection from VPC B to VPC A is created by an administrator with appropriate permissions. Once both sides are configured, the status transitions to ACTIVE.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "Peering", "Networking"]
  },
  {
    id: "gcp-ace-149",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Attaching GPU Accelerators to Compute Engine: Host Maintenance Policy",
    scenario: "A data engineering team provisions a Compute Engine instance with an attached NVIDIA Tesla T4 GPU for batch machine learning inference. When executing 'gcloud compute instances create ... --accelerator=type=nvidia-tesla-t4,count=1', the command returns an error regarding the VM maintenance policy.",
    question: "Which maintenance policy must be set when attaching GPUs to Compute Engine instances?",
    options: [
      { id: 'A', text: "Set '--maintenance-policy=MIGRATE' to enable seamless failover" },
      { id: 'B', text: "Set '--maintenance-policy=TERMINATE' because GPU instances do not support live migration during host maintenance events" },
      { id: 'C', text: "Disable all maintenance policies using '--no-maintenance-policy'" },
      { id: 'D', text: "Set '--restart-on-failure=false'" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Compute Engine normally uses Live Migration to keep VM instances running while host system software and hardware updates are applied. However, instances with attached GPU accelerators do not support live migration; they must have their maintenance policy set to 'TERMINATE', causing the VM to shut down and restart when host maintenance occurs.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "GPUs", "MaintenancePolicy"]
  },
  {
    id: "gcp-ace-150",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Creating Dual-Region Cloud Storage Buckets with Location Flags",
    scenario: "A backup team needs to create a new Cloud Storage bucket that synchronously replicates data between 'us-central1' (Iowa) and 'us-east1' (South Carolina) for regional disaster recovery.",
    question: "Which gcloud storage command creates this dual-region bucket?",
    options: [
      { id: 'A', text: "gcloud storage buckets create gs://dr-backup-bucket --cross-region=true" },
      { id: 'B', text: "gcloud storage buckets create gs://dr-backup-bucket --location=us-central1,us-east1" },
      { id: 'C', text: "gcloud storage buckets create gs://dr-backup-bucket --multi-region=us-central1-us-east1" },
      { id: 'D', text: "gcloud storage buckets create gs://dr-backup-bucket --location=US-DUAL" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "To create a predefined or custom Dual-Region Cloud Storage bucket, the '--location' flag accepts two comma-separated region identifiers (e.g. '--location=us-central1,us-east1'). This provisions a bucket whose data is stored across both regions with regional failover capabilities.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "DualRegion", "DisasterRecovery"]
  }
];

export default GCP_ACE_QUESTIONS_6;
