export const GCP_ACE_FLASHCARDS_5 = [
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "VM Startup Scripts: Local vs. Cloud Storage Bucket URL",
    "hint": "--metadata startup-script vs. --metadata-from-file startup-script-url.",
    "back": "For short inline scripts: <code>--metadata startup-script='#!/bin/bash ...'</code>. For production bootstrap scripts stored in GCS: <code>--metadata startup-script-url=gs://[BUCKET]/startup.sh</code>. The VM service account must have read access to the bucket.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-101"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Compute Engine Instance Templates: Immutable Specification",
    "hint": "Why you cannot edit an existing instance template.",
    "back": "<strong>Instance Templates</strong> define machine type, boot disk, startup script, and network tags for groups of VMs. Instance templates are <strong>strictly immutable</strong>; to change a configuration, you must create a new version of the template and update the Managed Instance Group.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-102"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Zonal vs. Regional Managed Instance Groups (MIGs)",
    "hint": "Deploying identical VMs across 1 zone vs. automatically balanced across 3 zones.",
    "back": "<strong>Zonal MIGs</strong> deploy VMs within a single zone. <strong>Regional MIGs</strong> distribute identical VMs evenly across multiple zones in a region, automatically replacing failed instances in surviving zones during a zonal outage to maintain high availability.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-103"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "MIG Autohealing: Health Check and Initial Delay",
    "hint": "Preventing premature VM reboot loops before application startup completes.",
    "back": "MIG <strong>Autohealing</strong> uses an application health check to detect and recreate failed VMs. The <strong>initial delay (cooldown)</strong> specifies how long autohealing waits after a VM boots before probing the health check, preventing reboot loops for slow-starting applications.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-104"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "MIG Autoscaling Policies: Supported Metrics",
    "hint": "The 4 criteria that trigger horizontal scaling of VM instances.",
    "back": "MIG autoscalers scale instances based on: 1) <strong>Average CPU utilization</strong>; 2) <strong>Load balancing serving capacity</strong> (requests/sec or backend utilization); 3) <strong>Cloud Monitoring metrics</strong> (e.g. Pub/Sub queue depth); or 4) <strong>Predictive autoscaling</strong> schedules.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-105"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Rolling Updates in Managed Instance Groups: maxSurge vs. maxUnavailable",
    "hint": "Zero-downtime deployment parameters for instance replacement.",
    "back": "<strong>maxSurge</strong> determines how many extra VM instances can be provisioned above target size during rollout. <strong>maxUnavailable</strong> specifies the maximum number of VMs that can be offline simultaneously during update. Setting <code>maxUnavailable=0</code> ensures capacity is never compromised.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-106"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Stateful MIGs: Preserving State on Instance Recreation",
    "hint": "Retaining unique persistent disks and static IPs across autohealing.",
    "back": "<strong>Stateful MIGs</strong> preserve individual instance identity: stateful persistent disks, stateful metadata, and static IP addresses are re-attached to the same instance name upon restart, recreation, or rolling update, ideal for Kafka, Cassandra, or legacy stateful apps.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-107"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating Custom Images from Existing Disks: Best Practices",
    "hint": "Ensuring filesystem consistency before capturing an OS golden image.",
    "back": "Before creating an image from a running VM's disk, <strong>stop the VM instance</strong> (or unmount the disk) to flush file buffers to disk. Then run <code>gcloud compute images create [IMAGE_NAME] --source-disk=[DISK] --source-disk-zone=[ZONE] --family=[IMAGE_FAMILY]</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-108"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Compute Engine Image Families: Version Rollouts",
    "hint": "How to point instance templates to the latest patched OS version automatically.",
    "back": "An <strong>Image Family</strong> groups related images under a single alias (e.g., <code>debian-11</code>). Pointing instance templates to an image family ensures new VMs always boot the newest active image in that family without modifying the template.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-109"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Attaching and Formatting Secondary Persistent Disks on Linux",
    "hint": "The 4-step sequence from gcloud to mount point in /etc/fstab.",
    "back": "1) Run <code>gcloud compute instances attach-disk</code>; 2) SSH into VM and locate disk via <code>lsblk</code>; 3) Format filesystem: <code>sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb</code>; 4) Mount disk and add to <code>/etc/fstab</code> with <code>UUID=[UUID] ... defaults,nofail 0 2</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-110"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Resizing Persistent Disks Online Without Downtime",
    "hint": "Can you shrink a disk? Can you expand a running disk without rebooting?",
    "back": "Persistent Disks can be <strong>expanded online without rebooting</strong> using <code>gcloud compute disks resize [DISK] --size=[NEW_SIZE]</code>, followed by running <code>resize2fs</code> (ext4) or <code>xfs_growfs</code> (XFS) on the VM. Note: Disks can <strong>never be shrunk</strong>; you must create a smaller disk and copy files.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-111"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Containers Directly to Compute Engine (Container-Optimized OS)",
    "hint": "Running a single Docker container on a VM without configuring Docker manually.",
    "back": "Use <code>gcloud compute instances create-with-container [NAME] --container-image=[IMAGE_URL]</code>. Google Cloud boots the instance using <strong>Container-Optimized OS (COS)</strong>, which includes a pre-configured, hardened Docker runtime that launches the container automatically upon boot.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-112"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating a Private GKE Cluster: Core Flags",
    "hint": "Shielding worker nodes from having public IP addresses.",
    "back": "Create a private cluster with <code>gcloud container clusters create [NAME] --enable-private-nodes --master-ipv4-cidr=[CIDR] --enable-master-authorized-networks</code>. Nodes receive only private IPs, and the master control plane is reached via internal VPC peering or authorized external CIDRs.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-113"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Node Pools: Dedicated Hardware Isolation",
    "hint": "Running memory-intensive or GPU workloads on distinct node hardware.",
    "back": "A <strong>Node Pool</strong> is a subset of identical worker nodes within a GKE cluster. Clusters can contain multiple node pools with different machine types, labels, taints, and Spot VM configurations (e.g., a standard E2 pool for web pods, and an A2 GPU pool for ML pods).",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-114"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Configuring GKE Cluster Autoscaler on Node Pools",
    "hint": "Automatically expanding worker VMs when pods fail to schedule.",
    "back": "Enable cluster autoscaling per node pool with <code>gcloud container node-pools update [POOL] --enable-autoscaling --min-nodes=[MIN] --max-nodes=[MAX]</code>. When pods enter Pending state due to lack of CPU/RAM, cluster autoscaler provisions new worker nodes automatically.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-115"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Kubectl Commands: Authenticating GKE Cluster Access",
    "hint": "Generating ~/.kube/config credentials from Google Cloud.",
    "back": "Run <code>gcloud container clusters get-credentials [CLUSTER_NAME] --region=[REGION]</code>. This updates the local <code>~/.kube/config</code> file with cluster endpoint details and short-lived authentication tokens for <code>kubectl</code> commands.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-116"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Kubernetes Service Types: ClusterIP vs. NodePort vs. LoadBalancer",
    "hint": "Internal cluster-only vs. node port mapping vs. external cloud load balancer.",
    "back": "<strong>ClusterIP</strong> exposes the service on an internal IP reachable only inside the cluster. <strong>NodePort</strong> exposes the service on each node VM's IP at a static port (30000-32767). <strong>LoadBalancer</strong> provisions an external Google Cloud Passthrough Network Load Balancer forwarding public traffic to the pods.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-117"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Ingress Controller vs. Gateway API",
    "hint": "Provisions an External Application Load Balancer via Kubernetes annotations.",
    "back": "Applying a standard Kubernetes <strong>Ingress</strong> resource on GKE automatically provisions a Google Cloud External Application Load Balancer. Annotations like <code>kubernetes.io/ingress.class: 'gce'</code> trigger the GKE Ingress controller to configure global forwarding rules, URL maps, and health checks.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-118"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE BackendConfig Custom Resource",
    "hint": "Attaching Cloud Armor, Cloud CDN, and custom health checks to GKE Ingress backends.",
    "back": "<strong>BackendConfig</strong> is a GKE-specific CRD that configures Google Cloud L7 load balancer features (Cloud CDN, Cloud Armor security policies, session affinity, and custom health check paths) directly on the Kubernetes Service serving as an Ingress backend.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-119"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud Run Services with gcloud: Core Command",
    "hint": "Deploying a container image with public or authenticated access.",
    "back": "Run <code>gcloud run deploy [SERVICE] --image=[IMAGE] --region=[REGION] --platform=managed --allow-unauthenticated</code>. Omit <code>--allow-unauthenticated</code> to restrict invocation strictly to authenticated Cloud IAM identities.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-120"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Run Traffic Splitting: Canary Deployments",
    "hint": "Routing 10% of production traffic to a new container revision safely.",
    "back": "Execute <code>gcloud run services update-traffic [SERVICE] --to-revisions=[REV_NEW]=10,[REV_CURRENT]=90</code>. Cloud Run instantly splits incoming requests at Google's edge proxy without modifying DNS or terminating container instances.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-121"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Mounting Secrets in Cloud Run from Secret Manager",
    "hint": "Injecting sensitive database passwords without hardcoding in container images.",
    "back": "Use <code>gcloud run deploy [SERVICE] --set-secrets=DB_PASS=projects/[PROJECT]/secrets/[NAME]:latest</code>. Cloud Run injects the secret value as an environment variable (or mounts it as a file volume) into the container runtime securely.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-122"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud Functions via gcloud: Event-Driven Triggers",
    "hint": "Connecting serverless functions to Cloud Storage or Pub/Sub events.",
    "back": "For Cloud Storage object creation: <code>gcloud functions deploy [NAME] --runtime=python311 --trigger-bucket=[BUCKET]</code>. For Pub/Sub message publishing: <code>gcloud functions deploy [NAME] --runtime=nodejs20 --trigger-topic=[TOPIC]</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-123"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud SQL Private IP Deployment Prerequisites",
    "hint": "Connecting Compute Engine to Cloud SQL without public IP exposure.",
    "back": "To assign a private RFC 1918 IP to Cloud SQL, you must: 1) Configure a <strong>Private Services Access</strong> connection between your VPC and Google's Service Networking tenant VPC (<code>servicenetworking.googleapis.com</code>); and 2) Deploy the instance with <code>--no-assign-ip</code>.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-124"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud SQL Auth Proxy: Secure Connection Without IP Allowlists",
    "hint": "Client-side proxy providing mutual TLS encryption and IAM authentication.",
    "back": "The <strong>Cloud SQL Auth Proxy</strong> runs alongside application containers (as a sidecar or local process). It establishes a secure mutual-TLS tunnel to Cloud SQL using Google Cloud IAM credentials, eliminating the need to manage SSL certificates or allowlist static public IP ranges.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-125"
  }
];

export default GCP_ACE_FLASHCARDS_5;
