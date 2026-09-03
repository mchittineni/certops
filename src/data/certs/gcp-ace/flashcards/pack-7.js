export const GCP_ACE_FLASHCARDS_7 = [
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Multi-Region GKE Ingress (Multi-Cluster Ingress)",
    "hint": "Routing global traffic across multiple GKE clusters in North America and Europe.",
    "back": "<strong>Multi-Cluster Ingress (MCI)</strong> is a cloud controller that deploys a single Google Cloud External Application Load Balancer across multiple GKE clusters in different regions, routing users to the nearest cluster and failing over automatically.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-151"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Compute Engine VMs with Specific CPU Platforms",
    "hint": "Pinning instances to Intel Ice Lake or AMD Milan processors.",
    "back": "Pass the <code>--min-cpu-platform=\"Intel Ice Lake\"</code> flag to <code>gcloud compute instances create</code>. Ensures instances are only provisioned on host hardware matching or exceeding the designated CPU platform architecture.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-152"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Configuring Cloud SQL Storage Auto-Increase",
    "hint": "Preventing database downtime caused by disk full errors.",
    "back": "Enable storage auto-increase: <code>gcloud sql instances patch [INSTANCE] --enable-storage-auto-increase</code>. When disk free space falls below 10%, Cloud SQL automatically expands persistent disk capacity. Note: disk size cannot be decreased.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-153"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Creating VPC Peering Connection via gcloud",
    "hint": "The bidirectional command required to peer two VPC networks.",
    "back": "VPC peering requires two symmetric connections: 1) In Project A: <code>gcloud compute networks peerings create peer-ab --network=vpc-a --peer-network=vpc-b --peer-project=proj-b</code>; 2) In Project B: <code>gcloud compute networks peerings create peer-ba --network=vpc-b --peer-network=vpc-a --peer-project=proj-a</code>. Status becomes ACTIVE.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-154"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Attaching GPU Accelerators to Compute Engine Instances",
    "hint": "Deploying NVIDIA T4, V100, or A100 GPUs for deep learning models.",
    "back": "Use <code>--accelerator=type=nvidia-tesla-t4,count=1</code> with <code>gcloud compute instances create</code>. Requires setting <code>--maintenance-policy=TERMINATE</code> because GPU-attached instances do not support live migration during host maintenance.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-155"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Deploying Cloud Storage Buckets with Dual-Region Location",
    "hint": "Pairing two specific regions like us-east1 and us-central1 for HA.",
    "back": "Run <code>gcloud storage buckets create gs://[BUCKET] --location=us-central1,us-east1</code>. Objects are stored across both geographic locations, providing regional failover resilience with higher availability than a single region.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-156"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "GKE Node Auto-Repair: Mechanism and Health Monitoring",
    "hint": "Detecting and automatically replacing unhealthy Kubernetes nodes.",
    "back": "Node auto-repair continuously checks the health status of worker nodes via GKE health checks. If a node fails health status checks (e.g. Docker daemon hung, kernel deadlock, unready status) for several consecutive minutes, GKE automatically drains and recreates the VM.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-157"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d3",
    "front": "Cloud Run Concurrency Tuning: Optimal Sizing",
    "hint": "When to lower concurrency from 80 towards 1.",
    "back": "Lower concurrency (e.g. <code>--concurrency=1-5</code>) for CPU-intensive, heavy memory, or non-thread-safe legacy runtimes to prevent CPU contention. Increase concurrency (up to 1,000) for I/O-bound, async Node.js/Go APIs to maximize throughput and minimize container count.",
    "tags": [
      "GCP",
      "Deploying"
    ],
    "id": "gcp-ace-fc-158"
  },
  {
    "id": "gcp-ace-fc-159",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Monitoring: Uptime Checks vs. Alerting Policies",
    "hint": "Synthetic probes from external regions vs. threshold notification rules.",
    "back": "<strong>Uptime Checks</strong> probe public endpoints from multiple global geographic regions to verify external availability and latency. <strong>Alerting Policies</strong> monitor metric streams (including uptime check results) and automatically dispatch notifications to email, Slack, PagerDuty, or Webhooks when thresholds breach.",
    "tags": [
      "Cloud Monitoring",
      "Uptime Checks",
      "Alerting"
    ]
  },
  {
    "id": "gcp-ace-fc-160",
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Logging Log Sinks: Exporting for 7-Year Compliance",
    "hint": "Overcoming default 30-day/400-day log bucket retention.",
    "back": "Cloud Logging default retention is 30 days for Data Access and 400 days for Admin Activity. To retain logs for multi-year compliance at minimum cost, create a <strong>Log Sink</strong> that routes audit logs in real time to a <strong>Cloud Storage bucket</strong> configured with Archive class and Bucket Lock.",
    "tags": [
      "Cloud Logging",
      "Log Sinks",
      "Compliance"
    ]
  },
  {
    "id": "gcp-ace-fc-161",
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Horizontal Pod Autoscaler (HPA) vs. Cluster Autoscaler",
    "hint": "Scaling Pod replicas vs. adding worker nodes to the cluster.",
    "back": "<strong>HPA</strong> scales the number of running <em>Pod replicas</em> up or down based on observed CPU/memory utilization or custom metrics. <strong>Cluster Autoscaler</strong> adds or removes <em>Compute Engine worker nodes</em> in the node pool when Pods cannot be scheduled due to insufficient cluster capacity.",
    "tags": [
      "GKE",
      "HPA",
      "Cluster Autoscaler",
      "Kubernetes"
    ]
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Troubleshooting Unresponsive Compute Engine VMs via Serial Port",
    "hint": "Viewing console output when SSH connectivity fails completely.",
    "back": "Run <code>gcloud compute instances get-serial-port-output [INSTANCE_NAME] --zone=[ZONE]</code>. This retrieves the kernel boot log, systemd startup logs, and panic messages directly from COM1, diagnosing filesystem corruption, network misconfiguration, or hung processes.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-162"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Compute Engine Instance Operations: Reset vs. Stop/Start vs. Restart",
    "hint": "Hard power cycle vs. migrating to new physical hypervisor.",
    "back": "<strong>Reset</strong> performs a hard power cycle (like pulling the power plug) without flushing caches, keeping the VM on the same host hardware. <strong>Stop and Start</strong> shuts down the guest OS cleanly, unallocates physical host resources, and provisions the VM onto a fresh physical host, resolving hardware issues.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-163"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Persistent Disk Snapshot Restoration Workflow",
    "hint": "The 2-step command sequence to recover a corrupted disk from a snapshot.",
    "back": "1) Create a new disk from the snapshot: <code>gcloud compute disks create [NEW_DISK] --source-snapshot=[SNAPSHOT] --zone=[ZONE]</code>; 2) Detach corrupted disk and attach the new disk: <code>gcloud compute instances attach-disk [VM] --disk=[NEW_DISK]</code>.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-164"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Persistent Disk Types: pd-standard vs. pd-balanced vs. pd-ssd vs. pd-extreme",
    "hint": "Comparing price, latency, and IOPS characteristics for block storage.",
    "back": "<strong>pd-standard</strong> (HDD) for large sequential batch data. <strong>pd-balanced</strong> (SSD) is the default choice balancing price and IOPS. <strong>pd-ssd</strong> provides high IOPS for enterprise relational databases. <strong>pd-extreme</strong> provides ultra-high customizable IOPS (up to 120,000) for SAP HANA and massive databases.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-165"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Local SSDs vs. Persistent Disks: Durability and Performance",
    "hint": "Sub-millisecond latency NVMe drives directly attached to physical server.",
    "back": "<strong>Local SSDs</strong> are physically attached to the VM host server, delivering millions of IOPS with sub-millisecond latency in 375 GB increments. However, data is <strong>ephemeral</strong>: it survives live migrations, but is permanently wiped when the instance is stopped or terminated.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-166"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Node Pool Upgrades: Surge Upgrade vs. Blue/Green Upgrade",
    "hint": "Rolling pod eviction vs. side-by-side node pool validation.",
    "back": "<strong>Surge Upgrade</strong> upgrades nodes incrementally in-place by temporarily adding surge nodes and cordoning/draining old nodes. <strong>Blue/Green Upgrade</strong> creates an entirely new node pool with the new Kubernetes version, drains workloads to it, and allows soak testing with instant rollback capability.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-167"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Maintenance Windows and Exclusions",
    "hint": "Preventing automated control plane and node upgrades during critical business periods.",
    "back": "<strong>Maintenance Windows</strong> restrict automated GKE upgrades to specific recurring off-peak hours (e.g., weekends). <strong>Maintenance Exclusions</strong> completely block all automated upgrades for up to 30 days during high-stakes events like Black Friday or tax filing deadlines.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-168"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Debugging GKE Pods with kubectl exec and kubectl logs",
    "hint": "Inspecting stdout/stderr vs. running interactive bash inside a container.",
    "back": "Use <code>kubectl logs [POD_NAME] -c [CONTAINER]</code> to view application console output. Use <code>kubectl exec -it [POD_NAME] -c [CONTAINER] -- /bin/sh</code> to open an interactive debugging shell inside the running container.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-169"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Workload Rollback: Undoing a Failed Deployment",
    "hint": "Reverting a broken deployment image update immediately.",
    "back": "Run <code>kubectl rollout undo deployment/[NAME]</code>. Kubernetes immediately rolls back pod replica sets to the previous revision. Use <code>kubectl rollout history deployment/[NAME]</code> to view past revisions.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-170"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Inspecting Resource Utilization with kubectl top",
    "hint": "Identifying CPU- or memory-saturated pods and worker nodes.",
    "back": "Run <code>kubectl top nodes</code> to view current CPU/RAM utilization across worker VMs. Run <code>kubectl top pods -A</code> to identify specific pods consuming excessive compute. Requires the Kubernetes Metrics Server to be active in the cluster.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-171"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Ops Agent: Collecting Memory and Disk Utilization on Compute Engine",
    "hint": "Why hypervisor metrics alone cannot show guest OS RAM or filesystem usage.",
    "back": "Compute Engine hypervisor metrics only track CPU, disk I/O, and network throughput. Tracking <strong>memory utilization</strong> and <strong>guest disk space</strong> requires installing the <strong>Ops Agent</strong> inside the VM OS, which streams system metrics and application logs to Cloud Monitoring.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-172"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Monitoring Alerting Policies: Components",
    "hint": "The 3 foundational elements of an automated alerting pipeline.",
    "back": "1) <strong>Condition</strong>: Metric threshold, duration, and aggregation (e.g. CPU > 85% for 5 minutes); 2) <strong>Notification Channels</strong>: Email, SMS, Slack, PagerDuty, or Webhook; 3) <strong>Documentation</strong>: Runbook markdown steps assisting on-call engineers with remediation.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-173"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Monitoring Uptime Checks",
    "hint": "Verifying external availability and latency from global testing servers.",
    "back": "<strong>Uptime Checks</strong> periodically send HTTP, HTTPS, or TCP requests to public or private endpoints from multiple geographic testing locations worldwide (e.g., USA, Europe, Asia) to monitor latency, SSL validity, and HTTP response codes.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-174"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Logging Query Language: Filtering Severity and Services",
    "hint": "Constructing exact log search filters in Logs Explorer.",
    "back": "Query syntax example: <code>resource.type=\"gce_instance\" severity>=ERROR jsonPayload.message=~\"database connection failed\"</code>. Filters logs specifically to Compute Engine VMs reporting errors or critical events containing target regex strings.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-175"
  }
];

export default GCP_ACE_FLASHCARDS_7;
