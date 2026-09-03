export const GCP_ACE_FLASHCARDS_6 = [
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating Cloud Storage Buckets: Uniform Bucket-Level Access",
    "hint": "Enforcing pure IAM security across all objects in a bucket.",
    "back": "Create buckets with Uniform Bucket-Level Access: <code>gcloud storage buckets create gs://[BUCKET] --uniform-bucket-level-access</code>. This permanently disables legacy per-object Access Control Lists (ACLs), ensuring access is controlled uniformly via Cloud IAM policies.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-126"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Configuring Cloud Storage Object Lifecycle Management JSON",
    "hint": "Automating object transitions or deletions based on age.",
    "back": "Define rules in a JSON file (e.g., <code>{\"rule\": [{\"action\": {\"type\": \"SetStorageClass\", \"storageClass\": \"COLDLINE\"}, \"condition\": {\"age\": 90}}]}</code>) and apply using <code>gcloud storage buckets update gs://[BUCKET] --lifecycle-file=[FILE.json]</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-127"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "BigQuery Data Loading: bq load CLI Command",
    "hint": "Ingesting CSV, JSON, or Parquet files from Cloud Storage into a BigQuery table.",
    "back": "Run <code>bq load --source_format=CSV --autodetect [DATASET].[TABLE] gs://[BUCKET]/data.csv</code>. BigQuery parses the schema automatically and loads the records in parallel directly into columnar storage.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-128"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating VPC Custom Subnets with gcloud",
    "hint": "The exact CLI command to instantiate a custom subnet in a region.",
    "back": "Run <code>gcloud compute networks subnets create [SUBNET_NAME] --network=[VPC_NAME] --region=[REGION] --range=10.10.0.0/24</code>. Optional flags enable Private Google Access and VPC Flow Logs.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-129"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Enabling Private Google Access on Subnets",
    "hint": "Allowing private VMs without public IPs to reach Google APIs (GCS, BigQuery).",
    "back": "Enable Private Google Access on a subnet via <code>gcloud compute networks subnets update [SUBNET] --region=[REGION] --enable-private-ip-google-access</code>. Private VMs in the subnet can then route to default Google API IP ranges over internal routes.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-130"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating VPC Ingress Firewall Rules with gcloud",
    "hint": "Allowing specific port traffic from an external IP range to tagged VMs.",
    "back": "Run <code>gcloud compute firewall-rules create allow-http --network=[VPC] --allow=tcp:80,tcp:443 --source-ranges=0.0.0.0/0 --target-tags=web-server</code>. Applies only to VMs possessing the <code>web-server</code> network tag.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-131"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Provisioning Google-Managed SSL Certificates",
    "hint": "Automated provisioning and 90-day renewal of public TLS certificates.",
    "back": "Create a managed certificate: <code>gcloud compute ssl-certificates create [NAME] --domains=app.example.com</code>. Attach it to an HTTPS Target Proxy. Google automatically verifies domain DNS ownership, provisions the certificate, and renews it before expiration with zero downtime.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-132"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Terraform Remote Backend on Google Cloud: Cloud Storage",
    "hint": "Centralizing team state files with locking and disaster recovery.",
    "back": "Configure Terraform's backend block with <code>backend \"gcs\" { bucket = \"tf-state-prod\" prefix = \"terraform/state\" }</code>. Best practices mandate enabling <strong>Object Versioning</strong> on the GCS bucket to allow state rollback if state corruption occurs.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-133"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud NAT Gateway via gcloud",
    "hint": "The 2-step setup: create a Cloud Router, then bind Cloud NAT.",
    "back": "1) <code>gcloud compute routers create nat-router --network=[VPC] --region=[REGION]</code>; 2) <code>gcloud compute routers nats create nat-gw --router=nat-router --region=[REGION] --auto-allocate-nat-external-ips --nat-all-subnet-ip-ranges</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-134"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Horizontal Pod Autoscaler (HPA) Deployment in GKE",
    "hint": "Scaling pod replicas automatically based on CPU or memory thresholds.",
    "back": "Deploy an HPA via <code>kubectl autoscale deployment [NAME] --cpu-percent=75 --min=3 --max=20</code> (or via an HPA YAML manifest). HPA queries the Metrics Server and adds or removes pods to maintain target average CPU utilization.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-135"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Pod Disruption Budgets (PDB)",
    "hint": "Preventing accidental application outages during cluster node upgrades.",
    "back": "A <strong>PodDisruptionBudget (PDB)</strong> defines the minimum number of healthy pod replicas that must remain available during voluntary disruptions (e.g. node drain, cluster upgrade). Example: <code>minAvailable: 2</code> prevents GKE from draining nodes if doing so would drop healthy replicas below 2.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-136"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Artifact Registry: Docker Image Repository Deployment",
    "hint": "Modern Google Cloud container registry replacing Container Registry (gcr.io).",
    "back": "Create a repository: <code>gcloud artifacts repositories create [REPO] --repository-format=docker --location=[REGION]</code>. Authenticate Docker with <code>gcloud auth configure-docker [REGION]-docker.pkg.dev</code>, then push images using standard Docker CLI.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-137"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Build: Serverless CI/CD Pipeline Execution",
    "hint": "Submitting source code to be built into container images in the cloud.",
    "back": "Submit a build using <code>gcloud builds submit --tag [REGION]-docker.pkg.dev/[PROJECT]/[REPO]/[IMAGE]:[TAG]</code>. Cloud Build executes Docker builds or multi-step pipelines defined in <code>cloudbuild.yaml</code> on fast, managed Google Cloud runners.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-138"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Configuring Cloud Armor Security Policies on External HTTP(S) Load Balancers",
    "hint": "Defending against DDoS and OWASP Top 10 web injection attacks.",
    "back": "1) Create policy: <code>gcloud compute security-policies create block-malicious</code>; 2) Add rules: <code>gcloud compute security-policies rules create 1000 --security-policy=block-malicious --action=deny-403 --src-ip-ranges=198.51.100.0/24</code>; 3) Attach policy to the backend service of the External Application Load Balancer.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-139"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Storage Transfer Service: Cloud-to-Cloud Ingestion",
    "hint": "Automated petabyte-scale transfers from Amazon S3 or Azure Blob to Cloud Storage.",
    "back": "<strong>Storage Transfer Service</strong> is a fully managed service that transfers large volumes of data from Amazon S3, HTTP endpoints, or other Cloud Storage buckets. It manages parallel multi-stream copying, checksum validation, and scheduled incremental syncs without running VM proxies.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-140"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Compute Engine OS Login: Centralized SSH Key Management",
    "hint": "Replacing ~/.ssh/authorized_keys files with Cloud IAM directory identities.",
    "back": "Enable OS Login: <code>--metadata enable-oslogin=TRUE</code>. Instead of manually distributing public SSH keys to instances, Google Cloud links SSH keys to the user's Cloud Identity account and verifies permissions via IAM (<code>roles/compute.osLogin</code> or <code>roles/compute.osAdminLogin</code>).",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-141"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Shielded VMs: Secure Boot, vTPM, and Integrity Monitoring",
    "hint": "Hardening Compute Engine instances against rootkits and firmware malware.",
    "back": "<strong>Shielded VMs</strong> provide verifiable integrity using: 1) <strong>Secure Boot</strong> (blocks unsigned kernel drivers); 2) <strong>vTPM</strong> (virtual Trusted Platform Module for hardware roots of trust); and 3) <strong>Integrity Monitoring</strong> (alerts in Cloud Monitoring if boot baseline is altered).",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-142"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud Bigtable Instances with cbt CLI",
    "hint": "Creating Bigtable clusters and querying tables from the command line.",
    "back": "Create an instance: <code>gcloud bigtable instances create [ID] --display-name=[NAME] --cluster-config=id=[CLUSTER],zone=[ZONE],nodes=3,storage-type=SSD</code>. Use the <code>cbt</code> command-line utility (configured via <code>~/.cbtrc</code>) to create tables and query row keys.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-143"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Importing Large Relational Databases to Cloud SQL via SQL Dump",
    "hint": "Restoring a production MySQL or PostgreSQL database from Cloud Storage.",
    "back": "Upload the SQL dump file to a Cloud Storage bucket, grant the Cloud SQL service account <code>roles/storage.objectViewer</code> on the bucket, and execute <code>gcloud sql import sql [INSTANCE] gs://[BUCKET]/dump.sql.gz --database=[DB_NAME]</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-144"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Configuring Cloud SQL Flags (Parameters)",
    "hint": "Modifying database engine variables like max_connections or timezone.",
    "back": "Set database parameters via <code>gcloud sql instances patch [INSTANCE] --database-flags=max_connections=500,log_output=FILE</code>. Some flag updates require an automatic database instance restart.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-145"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Network Policies: Securing East-West Pod Traffic",
    "hint": "Restricting inter-pod communication inside the Kubernetes cluster.",
    "back": "Enable Network Policy enforcement on the cluster (<code>--enable-network-policy</code>). Deploy standard Kubernetes <code>NetworkPolicy</code> YAML resources to restrict which pods can communicate with each other, implementing zero-trust microsegmentation.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-146"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud Run with Custom Domains and Managed Certificates",
    "hint": "Mapping a company URL to a serverless container endpoint.",
    "back": "Run <code>gcloud beta run domain-mappings create --service=[SERVICE] --domain=api.example.com --region=[REGION]</code>. Update your DNS registrar with the generated CNAME records; Google automatically issues and renews an SSL/TLS certificate.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-147"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Exporting BigQuery Query Results to Cloud Storage",
    "hint": "Dumping query results or entire tables into compressed Parquet/CSV files.",
    "back": "Execute <code>bq extract --destination_format=PARQUET [DATASET].[TABLE] gs://[BUCKET]/export-*.parquet</code>. Using the wildcard <code>*</code> enables BigQuery to export partitioned shard files in parallel for multi-terabyte tables.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-148"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Compute Engine Metadata Server: Querying VM Attributes",
    "hint": "How an application inside a VM retrieves its project ID, zone, and tokens.",
    "back": "Send an HTTP GET request to <code>http://metadata.google.internal/computeMetadata/v1/</code> with the mandatory header <code>Metadata-Flavor: Google</code>. Query endpoints like <code>instance/zone</code>, <code>project/project-id</code>, and <code>instance/service-accounts/default/token</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-149"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Terraform Service Account Impersonation Pattern",
    "hint": "Executing Terraform pipelines securely without downloading local JSON keys.",
    "back": "In Terraform provider configuration, specify <code>impersonate_service_account = \"terraform-sa@project.iam.gserviceaccount.com\"</code>. The CI/CD identity generates short-lived tokens, eliminating credentials from disk and state.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-150"
  }
];

export default GCP_ACE_FLASHCARDS_6;
