export const GCP_ACE_QUESTIONS_5 = [
  {
    id: "gcp-ace-101",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Bootstrapping Compute Engine Instances with Startup Scripts in Cloud Storage",
    scenario: "A DevOps engineer needs to deploy a fleet of Compute Engine instances that download and configure proprietary database software during initial boot. The installation script is 15 MB in size and contains sensitive configuration parameters. The engineer wants to pass the script securely without exposing it in plain text CLI metadata flags.",
    question: "What is the recommended approach to supply this startup script to the new instances?",
    options: [
      { id: 'A', text: "Commit the script to a public GitHub repository and curl it from the command line inside the VM" },
      { id: 'B', text: "Store the script in a private Cloud Storage bucket, grant the VM service account 'roles/storage.objectViewer' on the bucket, and create instances with '--metadata-from-file startup-script-url=gs://[BUCKET]/startup.sh'" },
      { id: 'C', text: "Log into each VM via SSH immediately after launch and execute the script manually" },
      { id: 'D', text: "Embed the entire script base64-encoded into the '--metadata startup-script' flag" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Passing large startup scripts via Cloud Storage is the standard Google Cloud architectural practice. Storing the script in a private GCS bucket and referencing it via '--metadata-from-file startup-script-url=gs://...' allows the VM's Compute Engine agent to automatically fetch and execute the script upon boot, while securing access via the VM's attached service account IAM permissions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "StartupScripts", "Automation"]
  },
  {
    id: "gcp-ace-102",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Configuring MIG Autohealing Initial Delay to Prevent Boot Loops",
    scenario: "An enterprise web application deployed on a Managed Instance Group takes approximately 4 minutes to warm up its JVM cache and pass internal health checks. Immediately after new instances are provisioned by the MIG, the autohealing mechanism marks them unhealthy after 30 seconds and forcefully restarts them, trapping the instances in an infinite reboot loop.",
    question: "Which configuration parameter in the autohealing policy must be adjusted to resolve this problem?",
    options: [
      { id: 'A', text: "Change the machine type to an instance family with faster single-core performance" },
      { id: 'B', text: "Increase the 'initial delay' (cooldown period) on the autohealing health check to at least 300 seconds" },
      { id: 'C', text: "Increase the MIG target size to double the current instance count" },
      { id: 'D', text: "Disable the health check and rely solely on VM host status" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'initial delay' (also known as the cooldown period) on an autohealing policy defines the grace period during which the MIG ignores health check failures after a VM boots. For slow-starting applications (such as Java JVMs or large database services), setting the initial delay longer than the expected application startup time ensures autohealing does not prematurely terminate instances before they finish initializing.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "MIG", "Autohealing"]
  },
  {
    id: "gcp-ace-103",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Zero-Downtime Rolling Updates in Managed Instance Groups",
    scenario: "A production web service running on a Regional Managed Instance Group must be updated to a new instance template containing an updated application container. The service must maintain 100% of its current serving capacity throughout the deployment without dropping any customer requests.",
    question: "How should the rolling update parameters be configured?",
    options: [
      { id: 'A', text: "Delete the existing instance group and recreate it with the new template" },
      { id: 'B', text: "Perform a rolling restart with proactive replacement set to false" },
      { id: 'C', text: "Set 'maxUnavailable' to 100% and 'maxSurge' to 0" },
      { id: 'D', text: "Set 'maxUnavailable' to 0 and 'maxSurge' to at least 1 (or 25%)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting 'maxUnavailable=0' guarantees that no existing instances will be terminated until new instances from the updated template are healthy and serving traffic. Setting 'maxSurge' to 1 or more allows the MIG to provision temporary extra instances above the target size to handle load during the rollout, guaranteeing zero capacity degradation.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "MIG", "RollingUpdates"]
  },
  {
    id: "gcp-ace-104",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Preserving Disk State and IP Addresses with Stateful MIGs",
    scenario: "An operations team needs to run an Apache Kafka broker cluster across multiple zones on Compute Engine. If a broker instance fails its health check or host maintenance occurs, the replacement instance must retain the exact same persistent data disk and the same static internal IP address.",
    question: "Which Compute Engine instance group feature fulfills this requirement?",
    options: [
      { id: 'A', text: "Compute Engine Autoscaling with predictive scaling enabled" },
      { id: 'B', text: "Stateful Managed Instance Groups (Stateful MIGs)" },
      { id: 'C', text: "Stateless Managed Instance Groups with regional persistent disks" },
      { id: 'D', text: "Unmanaged Instance Groups with round-robin DNS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Stateful MIGs are designed specifically for stateful applications (such as databases, Kafka, and Zookeeper) that require preserving individual instance state. Stateful MIGs maintain instance names, persistent disk mappings, and static IP addresses across VM recreation, restarts, and rolling updates.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "StatefulMIG", "Kafka"]
  },
  {
    id: "gcp-ace-105",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Golden Image Creation: Capturing Consistent OS Disk Snapshots",
    scenario: "A systems engineer installs custom packages, security agents, and compliance hardening on a reference Compute Engine VM. The engineer now needs to capture a custom image to serve as the baseline for corporate instance templates.",
    question: "What step must the engineer perform before creating the image to guarantee filesystem consistency?",
    options: [
      { id: 'A', text: "Convert the persistent disk to a local SSD" },
      { id: 'B', text: "Stop the source VM instance before running 'gcloud compute images create'" },
      { id: 'C', text: "Resize the persistent disk to its minimum allowable size" },
      { id: 'D', text: "Delete all log files in /var/log while the VM is running" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Creating a custom image from a running VM can capture inconsistent in-flight memory buffers and open file handles, leading to filesystem corruption when new VMs boot. Stopping the source VM flushes all cached data to disk and guarantees clean filesystem state before capturing the image.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "CustomImages", "Operations"]
  },
  {
    id: "gcp-ace-106",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Managing Image Lifecycles with Compute Engine Image Families",
    scenario: "An enterprise releases monthly security-patched base OS images. The platform engineering team wants Managed Instance Groups and Terraform deployment scripts to automatically deploy the latest patched image version without requiring manual updates to template files or script code.",
    question: "How should the custom images be published and referenced?",
    options: [
      { id: 'A', text: "Overwrite the existing image in-place using 'gcloud compute images update'" },
      { id: 'B', text: "Assign each new monthly image to an 'Image Family', and configure instance templates to reference the image family name rather than a specific image name" },
      { id: 'C', text: "Delete old images and recreate new images using the identical image name" },
      { id: 'D', text: "Create a symbolic link in Cloud Storage pointing to the latest raw disk file" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Image Family groups related images under a shared alias (e.g. 'golden-ubuntu-2204'). When an instance template or 'gcloud' command references an image family, Google Cloud automatically resolves the reference to the newest, non-deprecated image in that family, enabling seamless automated OS patching.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "ImageFamilies", "Automation"]
  },
  {
    id: "gcp-ace-107",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Mounting Secondary Persistent Disks with nofail in /etc/fstab",
    scenario: "A Linux administrator attaches a new 500 GB Persistent Disk to a running Compute Engine instance, formats it with ext4, and mounts it at '/data'. The administrator adds an entry to '/etc/fstab' using the device name '/dev/sdb'. Following a scheduled VM reboot, the VM fails to boot and drops into emergency maintenance mode.",
    question: "What configuration error caused the boot failure, and how should it be corrected?",
    options: [
      { id: 'A', text: "Persistent disks must always be formatted with XFS rather than ext4" },
      { id: 'B', text: "Secondary disks must be attached to the SATA bus rather than SCSI" },
      { id: 'C', text: "Device names (/dev/sdb) are not deterministic across reboots; the mount entry in /etc/fstab should use the disk's filesystem UUID and include the 'nofail' mount option" },
      { id: 'D', text: "The disk was not marked as a boot disk in the VM metadata" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "On Linux VMs in Google Cloud, disk device identifiers (like /dev/sdb) can shift across reboots. Best practice is to identify the disk by its persistent filesystem UUID (found via 'blkid'). Additionally, adding the 'nofail' option in '/etc/fstab' ensures that if the disk fails to attach or mount during boot, the OS continues booting normally rather than stalling in emergency rescue mode.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "PersistentDisks", "Linux"]
  },
  {
    id: "gcp-ace-108",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Expanding Persistent Disks Online Without Rebooting",
    scenario: "A production database running on Compute Engine is generating alerts because its 200 GB persistent disk has reached 95% capacity. The database cannot tolerate any downtime or reboot.",
    question: "How can the engineer expand the disk capacity online without downtime?",
    options: [
      { id: 'A', text: "Stop the instance, resize the disk in the console, and restart the VM" },
      { id: 'B', text: "Resize the disk using 'gcloud compute disks resize' and then run 'resize2fs' (or 'xfs_growfs') on the VM operating system" },
      { id: 'C', text: "Attach a second disk and run 'mkfs' across both disks" },
      { id: 'D', text: "Create a snapshot, create a new 500 GB disk from the snapshot, and swap disks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud Persistent Disks support online expansion. The administrator increases disk size using 'gcloud compute disks resize &lt;DISK&gt; --size=&lt;NEW_SIZE&gt;' without stopping the VM. Then, via SSH, running the filesystem resize tool ('resize2fs' for ext4 or 'xfs_growfs' for XFS) immediately expands the filesystem to consume the new capacity with zero downtime.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "PersistentDisks", "Storage"]
  },
  {
    id: "gcp-ace-109",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying Single Containers Directly to Compute Engine with Container-Optimized OS",
    scenario: "A developer wants to run a single Nginx reverse proxy Docker container on a standalone Compute Engine VM. The developer does not want to install Docker, configure systemd units, or manage OS package updates manually.",
    question: "Which gcloud command deploys a containerized VM directly onto Container-Optimized OS?",
    options: [
      { id: 'A', text: "gcloud compute instances create-with-container nginx-vm --container-image=gcr.io/cloud-marketplace/google/nginx" },
      { id: 'B', text: "gcloud container clusters create nginx-vm --single-node" },
      { id: 'C', text: "gcloud run deploy nginx-vm --image=nginx --platform=gce" },
      { id: 'D', text: "gcloud compute instances create nginx-vm --metadata=docker-run=nginx" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'gcloud compute instances create-with-container' command provisions a VM using Google's Container-Optimized OS (COS). COS comes with Docker pre-installed and hardened, and Google Cloud automatically configures a systemd service that pulls and runs the specified container image upon VM boot.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "COS", "Containers"]
  },
  {
    id: "gcp-ace-110",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying a Private GKE Cluster to Secure Worker Nodes",
    scenario: "A corporate security standard mandates that Kubernetes worker nodes must not have public IP addresses and must not be directly reachable from the public internet. Nodes must only possess private RFC 1918 addresses, while the Kubernetes master control plane must remain accessible to an internal bastion host.",
    question: "Which flag combination creates a GKE cluster satisfying these requirements?",
    options: [
      { id: 'A', text: "--network-mode=internal-only" },
      { id: 'B', text: "--private-cluster --disable-public-endpoint" },
      { id: 'C', text: "--enable-private-nodes --master-ipv4-cidr=172.16.0.0/28 --enable-master-authorized-networks" },
      { id: 'D', text: "--no-assign-external-ip --isolated-nodes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Creating a GKE cluster with '--enable-private-nodes' ensures worker VMs receive only private internal IP addresses. Specifying '--master-ipv4-cidr' allocates a dedicated /28 range for the Google-managed control plane VPC peering, and '--enable-master-authorized-networks' restricts control plane access to authorized CIDR blocks (such as corporate bastions or VPN subnets).",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "PrivateCluster", "Security"]
  },
  {
    id: "gcp-ace-111",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Isolating GPU and High-Memory Workloads with Dedicated GKE Node Pools",
    scenario: "A machine learning startup runs standard web APIs and GPU-accelerated model training jobs in the same GKE cluster. Web pods frequently experience scheduling starvation when ML pods consume all cluster resources. The team wants to isolate GPU workloads to dedicated machines.",
    question: "What is the recommended GKE architectural approach to isolate these workloads?",
    options: [
      { id: 'A', text: "Deploy two separate VPC networks and connect them with Cloud Router" },
      { id: 'B', text: "Run web pods on GKE and ML training jobs on Cloud Functions" },
      { id: 'C', text: "Assign higher Linux 'nice' values to web container processes" },
      { id: 'D', text: "Create a dedicated Node Pool configured with GPU accelerators and Kubernetes taints, and add corresponding tolerations and nodeSelectors to the ML deployment manifests" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In GKE, distinct workload requirements (such as GPUs, high memory, or Spot VMs) are isolated using dedicated Node Pools. By configuring Kubernetes taints (e.g. 'sku=gpu:NoSchedule') on the GPU node pool and configuring matching tolerations and nodeSelectors/nodeAffinity in ML pod specs, GKE ensures only authorized workloads run on the expensive GPU hardware.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "NodePools", "Kubernetes"]
  },
  {
    id: "gcp-ace-112",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Scaling Worker Nodes Automatically with GKE Cluster Autoscaler",
    scenario: "A microservices application deployed on GKE experiences large traffic spikes during promotional events. Horizontal Pod Autoscaler (HPA) creates dozens of new pods, but many pods remain in 'Pending' status because the existing worker nodes lack sufficient CPU and memory capacity.",
    question: "Which feature must be enabled on the GKE cluster to automatically provision additional worker VMs?",
    options: [
      { id: 'A', text: "Enable Cluster Autoscaler on the GKE node pool with minimum and maximum node counts" },
      { id: 'B', text: "Configure Node Auto-Repair with an aggressive probe interval" },
      { id: 'C', text: "Enable Vertical Pod Autoscaler (VPA) in recommendation mode" },
      { id: 'D', text: "Deploy a Managed Instance Group autoscaler pointing to the Kubernetes master" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When pods cannot be scheduled due to insufficient cluster compute capacity (remaining in 'Pending' state), the GKE Cluster Autoscaler detects these unschedulable pods and automatically provisions new worker node VMs in the node pool up to the configured maximum limit. Once demand decreases, it gracefully drains and deletes idle nodes.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "ClusterAutoscaler", "Scalability"]
  },
  {
    id: "gcp-ace-113",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Generating Local kubectl Credentials for GKE Cluster Administration",
    scenario: "A newly hired DevOps engineer installs 'kubectl' on a corporate workstation. When attempting to run 'kubectl get pods', the command fails with 'The connection to the server localhost:8080 was refused'. The engineer has already authenticated with 'gcloud auth login'.",
    question: "Which command must the engineer run to configure kubectl for the GKE cluster?",
    options: [
      { id: 'A', text: "gcloud auth application-default login" },
      { id: 'B', text: "gcloud compute ssh [CLUSTER_NAME]-master" },
      { id: 'C', text: "kubectl config set-cluster [CLUSTER_NAME] --server=google" },
      { id: 'D', text: "gcloud container clusters get-credentials [CLUSTER_NAME] --region=[REGION]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'gcloud container clusters get-credentials' command connects to Google Cloud, retrieves cluster endpoint details and authentication tokens, and writes the proper context and credentials into the local '~/.kube/config' file, allowing 'kubectl' to interact with the remote GKE control plane.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "kubectl", "CloudSDK"]
  },
  {
    id: "gcp-ace-114",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Exposing GKE Pods to the Public Internet with Service Type LoadBalancer",
    scenario: "An engineer deploys an Nginx web server deployment across 5 pods in a GKE cluster. The engineer needs to expose the application to public internet clients on port 80 via an external IP address that automatically distributes traffic across all healthy pods.",
    question: "Which Kubernetes Service type should be defined in the service manifest?",
    options: [
      { id: 'A', text: "type: ClusterIP" },
      { id: 'B', text: "type: NodePort" },
      { id: 'C', text: "type: LoadBalancer" },
      { id: 'D', text: "type: ExternalName" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In GKE, defining a Service with 'type: LoadBalancer' instructs the Google Cloud cloud-controller-manager to automatically provision an External Passthrough Network Load Balancer (Layer 4) with a public IP address and configure forwarding rules that route incoming traffic directly to the service's pods.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "KubernetesServices", "LoadBalancing"]
  },
  {
    id: "gcp-ace-115",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Attaching Cloud Armor and Custom Health Checks to GKE Ingress via BackendConfig",
    scenario: "A web application exposed via GKE Ingress requires Cloud Armor WAF protection against SQL injection and cross-site scripting (XSS). The backend service also requires an application-specific health check on endpoint '/healthz'.",
    question: "How should these Google Cloud load balancer settings be applied to the GKE Ingress?",
    options: [
      { id: 'A', text: "Define a 'BackendConfig' Custom Resource specifying the Cloud Armor policy and health check path, and reference the BackendConfig in an annotation on the Kubernetes Service" },
      { id: 'B', text: "Create a FrontendConfig resource pointing to the Cloud Armor security policy" },
      { id: 'C', text: "Modify the /etc/nginx/nginx.conf file inside the container image" },
      { id: 'D', text: "Configure Cloud Armor rules manually in the Cloud Console on the generated target proxy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE uses the 'BackendConfig' Custom Resource Definition (CRD) to configure Google Cloud Layer 7 load balancer parameters (Cloud Armor policies, Cloud CDN, custom health checks, session affinity). The BackendConfig is linked to the deployment by adding the annotation 'cloud.google.com/backend-config: {\"default\": \"my-backend-config\"}' to the Kubernetes Service.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "BackendConfig", "CloudArmor"]
  },
  {
    id: "gcp-ace-116",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Performing Canary Deployments in Cloud Run Using Traffic Splitting",
    scenario: "An engineering team packages a major update to their customer authentication service on Cloud Run as revision 'auth-v2'. Before shifting 100% of production traffic, the team wants to route exactly 10% of incoming live user requests to 'auth-v2' while keeping 90% on the stable 'auth-v1' revision.",
    question: "Which gcloud command implements this canary deployment cleanly?",
    options: [
      { id: 'A', text: "Deploy two separate Cloud Run services and update Cloud DNS records with weighted values" },
      { id: 'B', text: "Configure an External Application Load Balancer with weighted backend instance groups" },
      { id: 'C', text: "gcloud run deploy auth-service --traffic-split=10/90" },
      { id: 'D', text: "gcloud run services update-traffic auth-service --to-revisions=auth-v2=10,auth-v1=90" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Run includes native traffic management. Running 'gcloud run services update-traffic &lt;SERVICE&gt; --to-revisions=&lt;REV1&gt;=10,&lt;REV2&gt;=90' instructs Google Cloud's frontend proxy to instantaneously split incoming HTTP requests according to the specified percentages without requiring external load balancers or DNS changes.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "TrafficSplitting", "Canary"]
  },
  {
    id: "gcp-ace-117",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Injecting Database Credentials Securely into Cloud Run Containers",
    scenario: "A microservice deployed on Cloud Run requires a database password to connect to Cloud SQL. The security team forbids putting the password in container Dockerfiles, environment variables in git repositories, or deployment script flags.",
    question: "How should the password be managed and supplied to Cloud Run?",
    options: [
      { id: 'A', text: "Store the password in a text file in a public Cloud Storage bucket" },
      { id: 'B', text: "Store the password in Google Secret Manager, grant the Cloud Run service account 'roles/secretmanager.secretAccessor', and deploy with '--set-secrets=DB_PASSWORD=projects/[PROJECT]/secrets/db-pass:latest'" },
      { id: 'C', text: "Hardcode the password in Cloud KMS and decrypt it during application build" },
      { id: 'D', text: "Embed the password in the container entrypoint shell script" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Secret Manager is the native service for storing API keys, certificates, and passwords. Cloud Run integrates directly with Secret Manager: using '--set-secrets', Cloud Run securely mounts the secret either as an environment variable or as a file volume at container runtime, fetching it using the service account's IAM permissions.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "SecretManager", "Security"]
  },
  {
    id: "gcp-ace-118",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying Cloud Functions Triggered by Cloud Storage Object Creation",
    scenario: "An image processing pipeline requires that whenever an image is uploaded to a Cloud Storage bucket named 'raw-images', a Python function must automatically execute to generate thumbnail sizes and write metadata to Firestore.",
    question: "Which gcloud command deploys this event-driven serverless function?",
    options: [
      { id: 'A', text: "gcloud storage buckets add-notification raw-images --function=thumbnail-generator" },
      { id: 'B', text: "gcloud functions deploy thumbnail-generator --runtime=python311 --trigger-bucket=raw-images --entry-point=process_image" },
      { id: 'C', text: "gcloud compute instances create thumbnail-generator --metadata=gcs-trigger=raw-images" },
      { id: 'D', text: "gcloud run deploy thumbnail-generator --trigger-gcs=raw-images" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'gcloud functions deploy' command with the '--trigger-bucket=&lt;BUCKET_NAME&gt;' flag automatically provisions an event subscription that triggers the function whenever an object is created, updated, or overwritten in the designated Cloud Storage bucket.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudFunctions", "CloudStorage", "EventDriven"]
  },
  {
    id: "gcp-ace-119",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Connecting to Cloud SQL over Private IP Using Private Services Access",
    scenario: "A security policy requires that production Cloud SQL for PostgreSQL instances must have no public IP addresses. When creating a Cloud SQL instance with '--no-assign-ip', the command fails with an error stating that Private Services Access has not been configured in the VPC.",
    question: "Which step is required before provisioning a private IP Cloud SQL instance?",
    options: [
      { id: 'A', text: "Allocate a dedicated RFC 1918 IP address range in the VPC and establish a Private Services Access connection peering the VPC with servicenetworking.googleapis.com" },
      { id: 'B', text: "Create an SSL certificate in Cloud KMS and upload it to the VPC route table" },
      { id: 'C', text: "Deploy Cloud NAT with a static external IP address in each zone" },
      { id: 'D', text: "Configure an HA VPN tunnel to Google's internal network" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud SQL private IP instances run in a tenant VPC managed by Google. To connect a customer VPC to this Google tenant network over private IP, the customer must allocate an internal IP range and establish a Private Services Access peering connection with 'servicenetworking.googleapis.com'. Once established, Cloud SQL instances provision private IPs inside that peered range.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "PrivateIP", "Networking"]
  },
  {
    id: "gcp-ace-120",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Simplifying Database Connectivity with Cloud SQL Auth Proxy",
    scenario: "Developers running local test suites on their workstations need to connect to a development Cloud SQL instance. The team does not want to maintain a list of dynamic developer home IP addresses in authorized networks, nor do they want to generate and distribute SSL certificates.",
    question: "Which tool provides mutual TLS encryption and IAM-based database authentication?",
    options: [
      { id: 'A', text: "Cloud SQL Auth Proxy" },
      { id: 'B', text: "Identity-Aware Proxy (IAP) TCP forwarding" },
      { id: 'C', text: "Cloud NAT port forwarding" },
      { id: 'D', text: "SSH local port tunneling via a bastion host" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Cloud SQL Auth Proxy is a Google-provided client binary that establishes secure mutual TLS tunnels to Cloud SQL instances. It uses the developer's Google Cloud IAM credentials for authentication, eliminating the need to allowlist client IP addresses or manually manage SSL certificates.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "CloudSQLAuthProxy", "Security"]
  },
  {
    id: "gcp-ace-121",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Enforcing Pure IAM Governance with Uniform Bucket-Level Access",
    scenario: "A compliance audit discovers that individual files in a corporate Cloud Storage bucket have public read ACLs (Access Control Lists) applied to them, bypassing project IAM controls. The security team wants to permanently disable object-level ACLs across the bucket.",
    question: "Which Cloud Storage configuration accomplishes this?",
    options: [
      { id: 'A', text: "Enable Uniform Bucket-Level Access on the bucket" },
      { id: 'B', text: "Enable Object Versioning and lock the retention policy" },
      { id: 'C', text: "Switch the bucket storage class from Standard to Archive" },
      { id: 'D', text: "Delete all object metadata using a lifecycle policy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling Uniform Bucket-Level Access (UBLA) permanently disables legacy per-object ACLs. All access permissions are evaluated strictly using Google Cloud IAM policies at the bucket level, ensuring consistent and centralized access control across all objects.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "UBLA", "Security"]
  },
  {
    id: "gcp-ace-122",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Automating Storage Class Transitions with Lifecycle Management JSON",
    scenario: "A company uploads gigabytes of daily invoice scans to Cloud Storage. Invoices are frequently accessed for the first 30 days, rarely accessed after 30 days, and must be permanently deleted after 365 days.",
    question: "How should the storage administrator configure this automation?",
    options: [
      { id: 'A', text: "Define an Object Lifecycle Management JSON configuration with a rule setting storageClass to 'COLDLINE' at age 30 and an action 'Delete' at age 365, and apply it via 'gcloud storage buckets update'" },
      { id: 'B', text: "Configure Bucket Lock with a 365-day retention policy" },
      { id: 'C', text: "Enable Turbo Replication between Coldline and Archive buckets" },
      { id: 'D', text: "Write a Cloud Function scheduled via Cloud Scheduler to scan the bucket daily and delete old files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Storage Object Lifecycle Management allows declarative JSON rules. Specifying a 'SetStorageClass' action to Coldline with condition 'age: 30', and a 'Delete' action with condition 'age: 365', automates tiering and purging natively within Cloud Storage at zero compute cost.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "LifecycleManagement", "CostOptimization"]
  },
  {
    id: "gcp-ace-123",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Bulk Ingestion of CSV Data into BigQuery Using the bq CLI",
    scenario: "A daily ETL job exports a 50 GB compressed CSV file ('transactions.csv.gz') to Cloud Storage bucket 'gs://company-imports/'. A data engineer needs to load this data into a new table named 'daily_sales' in dataset 'ecommerce'.",
    question: "Which command loads the CSV data with automated schema detection?",
    options: [
      { id: 'A', text: "gcloud storage cp gs://company-imports/transactions.csv.gz bigquery://ecommerce/daily_sales" },
      { id: 'B', text: "bq extract ecommerce.daily_sales gs://company-imports/transactions.csv.gz" },
      { id: 'C', text: "bq query --destination_table=ecommerce.daily_sales 'SELECT * FROM gs://company-imports/transactions.csv.gz'" },
      { id: 'D', text: "bq load --source_format=CSV --autodetect ecommerce.daily_sales gs://company-imports/transactions.csv.gz" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'bq load' command ingests external data directly into BigQuery tables. The '--source_format=CSV' and '--autodetect' flags instruct BigQuery to infer column data types from the file headers and populate the table efficiently in parallel.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "bq", "DataEngineering"]
  },
  {
    id: "gcp-ace-124",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Creating Custom Subnets and Enabling Private Google Access",
    scenario: "A network engineer creates a custom subnet '10.50.0.0/24' in region europe-west3. Virtual machines deployed in this subnet will not have public IP addresses, but must be able to upload log files to Cloud Storage and query BigQuery.",
    question: "Which configuration must be enabled on the subnet during or after creation?",
    options: [
      { id: 'A', text: "Enable Private Google Access on the subnet" },
      { id: 'B', text: "Deploy Cloud NAT with static IP addresses" },
      { id: 'C', text: "Create an ingress firewall rule permitting traffic from Google APIs" },
      { id: 'D', text: "Attach a public IP address to the default internet gateway" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private Google Access allows Compute Engine instances that lack external public IPs to reach Google APIs and services (such as Cloud Storage, BigQuery, and Pub/Sub) using Google's internal network routes. It is enabled at the subnet level without requiring Cloud NAT or internet gateways.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "PrivateGoogleAccess", "Networking"]
  },
  {
    id: "gcp-ace-125",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Creating VPC Ingress Firewall Rules for Specific Network Tags",
    scenario: "An administrator needs to open HTTP (port 80) and HTTPS (port 443) traffic from the public internet (0.0.0.0/0) to a group of frontend web servers, but must ensure backend database servers in the same subnet remain protected from inbound traffic.",
    question: "Which gcloud command configures this firewall rule?",
    options: [
      { id: 'A', text: "gcloud compute networks subnets update custom-vpc --allow-public-ports=80,443" },
      { id: 'B', text: "gcloud compute firewall-rules create allow-web --network=custom-vpc --allow=tcp:80,tcp:443 --source-ranges=frontend-web" },
      { id: 'C', text: "gcloud compute instances add-tags backend-db --tags=allow-web" },
      { id: 'D', text: "gcloud compute firewall-rules create allow-web --network=custom-vpc --allow=tcp:80,tcp:443 --source-ranges=0.0.0.0/0 --target-tags=frontend-web" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In 'gcloud compute firewall-rules create', '--allow=tcp:80,tcp:443' specifies the permitted protocols and ports, '--source-ranges=0.0.0.0/0' defines the allowed external source IPs, and '--target-tags=frontend-web' ensures the rule applies strictly to VM instances that have the 'frontend-web' network tag.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["VPC", "FirewallRules", "Security"]
  }
];

export default GCP_ACE_QUESTIONS_5;
