export const GCP_ACE_QUESTIONS_7 = [
  {
    id: "gcp-ace-151",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Automating Unhealthy Worker Node Recovery with GKE Node Auto-Repair",
    scenario: "A worker node in a GKE cluster experiences an unrecoverable kernel panic and stops communicating with the Kubernetes control plane. Rather than waiting for an SRE engineer to be paged and manually terminate the instance, the team wants GKE to automatically recreate failed nodes.",
    question: "Which feature provides automated node recovery?",
    options: [
      { id: 'A', text: "Configure Node Auto-Upgrade with a 24-hour maintenance window" },
      { id: 'B', text: "Enable Node Auto-Repair on the GKE node pool" },
      { id: 'C', text: "Deploy a custom daemonset that restarts the kubelet every 5 minutes" },
      { id: 'D', text: "Enable Horizontal Pod Autoscaler" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GKE Node Auto-Repair continuously monitors the health status of worker nodes. If a node fails health checks (e.g. system daemon failure, kernel deadlock, unready status) for a consecutive duration, GKE automatically drains the unhealthy node, terminates the VM, and provisions a fresh replacement VM in the node pool.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "NodeAutoRepair", "Reliability"]
  },
  {
    id: "gcp-ace-152",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Optimizing Cloud Run Concurrency for CPU-Intensive Workloads",
    scenario: "A video transcoding microservice deployed on Cloud Run processes heavy video encoding tasks that saturate 100% of CPU and memory. By default, Cloud Run sends up to 80 concurrent requests to a single container instance, causing severe request timeouts and out-of-memory crashes.",
    question: "How should the Cloud Run concurrency setting be tuned for this workload?",
    options: [
      { id: 'A', text: "Set CPU allocation to request-based" },
      { id: 'B', text: "Increase concurrency to 1,000 to process more videos in parallel" },
      { id: 'C', text: "Reduce concurrency using '--concurrency=1' (or a low value like 2-5) so each container processes only one transcoding task at a time" },
      { id: 'D', text: "Deploy Cloud Run behind an Internal Network Load Balancer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For CPU-intensive or memory-heavy applications (like image/video transcoding, machine learning inference, or heavy PDF rendering), handling multiple simultaneous requests inside one container leads to resource contention and timeouts. Setting '--concurrency=1' ensures each container instance handles strictly one request at a time, scaling out additional container instances as demand increases.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "Concurrency", "Performance"]
  },
  {
    id: "gcp-ace-153",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Managing Cloud Storage Object Immutability with Object Versioning",
    scenario: "A legal department requires that if any file in a Cloud Storage bucket is modified or deleted by an employee or rogue script, previous versions of the file must be preserved and retrievable for auditing purposes.",
    question: "Which Cloud Storage feature provides this version history protection?",
    options: [
      { id: 'A', text: "Apply a VPC firewall rule blocking HTTP DELETE requests" },
      { id: 'B', text: "Switch the storage class to Coldline Storage" },
      { id: 'C', text: "Enable Bucket Lock with compliance mode" },
      { id: 'D', text: "Enable Object Versioning on the Cloud Storage bucket" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Storage Object Versioning preserves a complete history of modifications and deletions. When versioning is enabled on a bucket, overwriting an object creates a new live version while archiving the previous version with a unique generation number; deleting an object creates a delete marker while retaining historical generations.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudStorage", "ObjectVersioning", "Compliance"]
  },
  {
    id: "gcp-ace-154",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying Cloud Run with Authenticated Invocations Under Least Privilege",
    scenario: "A private internal microservice running on Cloud Run must only be invoked by an authorized Cloud Scheduler job. The service must reject any anonymous public web requests.",
    question: "How should the Cloud Run service and Cloud Scheduler job be deployed?",
    options: [
      { id: 'A', text: "Deploy Cloud Run inside an unmanaged Compute Engine instance" },
      { id: 'B', text: "Protect the Cloud Run service with a basic HTTP username and password in metadata" },
      { id: 'C', text: "Deploy Cloud Run with '--no-allow-unauthenticated', and configure Cloud Scheduler to invoke the service using an OIDC token signed by a dedicated service account granted 'roles/run.invoker'" },
      { id: 'D', text: "Deploy Cloud Run with '--allow-unauthenticated' and check IP headers in application code" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploying Cloud Run with '--no-allow-unauthenticated' enforces Google Cloud IAM authentication. To invoke the service, calling services (such as Cloud Scheduler or Cloud Tasks) must present an OpenID Connect (OIDC) token generated by a service account that possesses the 'roles/run.invoker' role on the target Cloud Run service.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudRun", "CloudScheduler", "Security"]
  },
  {
    id: "gcp-ace-155",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Creating BigQuery Partitioned Tables by Ingestion Date",
    scenario: "A security analytics team ingests 50 million firewall log events daily into BigQuery. Analysts routinely run queries filtering logs for a specific day (e.g. 'WHERE _PARTITIONDATE = \"2026-09-01\"').",
    question: "Which bq command creates a table partitioned by daily ingestion time?",
    options: [
      { id: 'A', text: "bq mk --table --time_partitioning_type=DAY [DATASET].[TABLE]" },
      { id: 'B', text: "bq mk --table --partition_by=date [DATASET].[TABLE]" },
      { id: 'C', text: "bq query --create_partitioned_table [DATASET].[TABLE]" },
      { id: 'D', text: "gcloud bigquery tables create [TABLE] --partition=daily" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'bq mk' command with the flag '--time_partitioning_type=DAY' creates an ingestion-time partitioned table in BigQuery. BigQuery automatically routes rows into daily partitions based on the timestamp when the data is loaded or streamed, enabling partition pruning via the pseudo-column '_PARTITIONDATE'.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["BigQuery", "Partitioning", "DataAnalytics"]
  },
  {
    id: "gcp-ace-156",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying GKE Pods with Resource Requests and Limits",
    scenario: "A Kubernetes deployment in GKE experiences intermittent pod evictions because a rogue container with a memory leak consumes all available RAM on the worker node, crashing adjacent critical microservices.",
    question: "Which Kubernetes pod specification parameters prevent memory starvation on worker nodes?",
    options: [
      { id: 'A', text: "Assign each container its own dedicated network interface" },
      { id: 'B', text: "Set PodDisruptionBudget to minAvailable: 1" },
      { id: 'C', text: "Define 'resources.requests' to guarantee baseline capacity, and define 'resources.limits' to hard-cap maximum CPU and memory consumption for each container" },
      { id: 'D', text: "Enable Vertical Pod Autoscaler in auto mode" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Kubernetes, 'resources.requests' determines the minimum compute capacity needed for scheduling pods on nodes, while 'resources.limits' sets hard boundaries that containers cannot exceed. If a container reaches its memory limit, the Linux kernel terminates that specific container (OOMKilled) without impacting other pods sharing the node.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "ResourceLimits", "Kubernetes"]
  },
  {
    id: "gcp-ace-157",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Deploying Cloud SQL Read Replicas with Cross-Region Redundancy",
    scenario: "A global media company runs its primary Cloud SQL database in 'us-central1'. To provide fast read latency for users in Europe and serve as a regional disaster recovery target, the database team needs to deploy an asynchronous replica in 'europe-west1'.",
    question: "Which gcloud command provisions this cross-region read replica?",
    options: [
      { id: 'A', text: "gcloud sql instances replicate [PRIMARY_NAME] --to-region=europe-west1" },
      { id: 'B', text: "gcloud sql instances clone [PRIMARY_NAME] [REPLICA_NAME] --region=europe-west1" },
      { id: 'C', text: "gcloud compute instances create [REPLICA_NAME] --sql-master=[PRIMARY_NAME]" },
      { id: 'D', text: "gcloud sql instances create [REPLICA_NAME] --master-instance-name=[PRIMARY_NAME] --region=europe-west1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Creating a Cloud SQL read replica uses the standard 'gcloud sql instances create' command with the '--master-instance-name' flag pointing to the primary instance and specifying the target region ('--region=europe-west1'). Google Cloud configures cross-region asynchronous replication automatically.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "ReadReplicas", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-158",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d3",
    domainName: "Deploying and implementing a cloud solution",
    title: "Continuous Delivery and Multi-Target Progressive Rollouts with Cloud Deploy",
    scenario: "An engineering team wants to automate container deployment across a progression of three target environments: Development, Staging, and Production on Google Kubernetes Engine. The pipeline must support automated canary releases, integrated release approvals before promoting to production, and one-click rollback if errors occur in staging.",
    question: "Which managed Google Cloud service is designed specifically for opinionated continuous delivery to GKE, Anthos, and Cloud Run?",
    options: [
      { id: 'A', text: "Google Cloud Deploy" },
      { id: 'B', text: "Cloud Scheduler invoking Compute Engine startup scripts" },
      { id: 'C', text: "Cloud Build with custom inline shell scripts" },
      { id: 'D', text: "Artifact Registry automated deployment hooks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud Deploy is a fully managed continuous delivery service that automates delivery pipelines across defined target environments (e.g. dev -> staging -> prod). It natively supports Skaffold-rendered manifests, automated progression gates, manual approval workflows for production targets, delivery metrics (DORA), and 1-click rollbacks.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudDeploy", "CI/CD", "GKE"]
  },
  {
    id: "gcp-ace-159",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Monitoring Uptime Checks and Alerting Policies",
    scenario: "A company hosts a mission-critical public web application. The operations team needs to be alerted via email and PagerDuty if the HTTP homepage fails to return a 200 OK status code from at least two global probe locations for more than 3 consecutive minutes.",
    question: "How should this monitoring be configured in Google Cloud?",
    options: [
      { id: 'A', text: "Configure Cloud Trace to sample 100% of incoming HTTP requests and alert on latency" },
      { id: 'B', text: "Create a Cloud Monitoring Uptime Check targeting the public URL from multiple geographic regions, and attach an Alerting Policy configured with email and PagerDuty notification channels" },
      { id: 'C', text: "Configure a Compute Engine health check and set the autohealing threshold to 3 minutes" },
      { id: 'D', text: "Write a bash script that curls the website from an internal VM and writes to a text file" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Monitoring Uptime Checks test the availability of public services from probe servers located across multiple global geographic regions. When an uptime check fails the specified threshold, an associated Alerting Policy automatically notifies configured notification channels.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Monitoring", "Uptime Checks", "Alerting", "Operations"]
  },
  {
    id: "gcp-ace-160",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Cloud Logging Log Sinks for Long-Term Archival",
    scenario: "A financial institution must retain all Google Cloud audit logs for 7 years to meet regulatory compliance mandates, but Cloud Logging default retention for Admin Activity is only 400 days and Data Access is 30 days.",
    question: "How should the logs be archived for 7 years at minimum cost?",
    options: [
      { id: 'A', text: "Export logs daily to a BigQuery table with a 30-day partition expiration policy" },
      { id: 'B', text: "Increase the retention period of the _Default and _Required log buckets in Cloud Logging to 2,555 days" },
      { id: 'C', text: "Create an aggregated log sink in Cloud Logging with a filter matching all audit logs, routing to a Cloud Storage bucket configured with Archive storage class and an object retention lock" },
      { id: 'D', text: "Stream all logs to a Cloud Pub/Sub topic with message retention set to 7 years" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Logging log sinks export matching log entries in real time to destinations outside Cloud Logging, including Cloud Storage, BigQuery, and Pub/Sub. Routing audit logs to a Cloud Storage bucket configured with Archive storage class and bucket lock provides the most cost-effective, immutable 7-year compliance archive.",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Cloud Logging", "Log Sinks", "Cloud Storage", "Compliance"]
  },
  {
    id: "gcp-ace-161",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "GKE Horizontal Pod Autoscaling (HPA)",
    scenario: "A web service running in a GKE cluster experiences fluctuating traffic throughout the day. When CPU utilization exceeds 70% across the deployment's Pods, additional Pod replicas must be launched automatically.",
    question: "Which Kubernetes resource manages this automatic Pod scaling?",
    options: [
      { id: 'A', text: "Horizontal Pod Autoscaler (HPA)" },
      { id: 'B', text: "Cluster Autoscaler" },
      { id: 'C', text: "Node Auto-provisioning" },
      { id: 'D', text: "Vertical Pod Autoscaler (VPA)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Horizontal Pod Autoscaler (HPA) automatically scales the number of Pod replicas in a Deployment or ReplicaSet based on observed CPU utilization, memory usage, or custom metrics. In contrast, the Cluster Autoscaler scales the number of worker nodes in the underlying node pool.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/docs/how-to/horizontal-pod-autoscaling",
    tags: ["GKE", "HPA", "Kubernetes", "Autoscaling"]
  },
  {
    id: "gcp-ace-162",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Troubleshooting Unresponsive VM Instances via Serial Console Output",
    scenario: "A Linux Compute Engine instance hosting a mission-critical web backend becomes completely unreachable. Attempts to connect via SSH fail with 'Connection timed out'. Ping requests to the internal IP are dropped. An on-call engineer needs to inspect kernel boot messages and system logs to determine why the VM is unresponsive.",
    question: "Which gcloud command provides direct access to the console output of the instance?",
    options: [
      { id: 'A', text: "gcloud compute ssh [INSTANCE_NAME] --troubleshoot" },
      { id: 'B', text: "gcloud compute instances tail-logs [INSTANCE_NAME]" },
      { id: 'C', text: "gcloud compute instances get-serial-port-output [INSTANCE_NAME] --zone=[ZONE]" },
      { id: 'D', text: "gcloud logging read 'resource.type=gce_instance AND logName=console'" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'gcloud compute instances get-serial-port-output' command streams raw output from the VM's virtual COM1 serial console port. It captures kernel panic logs, systemd service startup failures, and network initialization errors even when the operating system network stack or SSH daemon is completely hung.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Troubleshooting", "Operations"]
  },
  {
    id: "gcp-ace-163",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Recovering from Operating System Disk Corruption Using Disk Snapshots",
    scenario: "A systems administrator applies an operating system kernel patch on a Compute Engine instance that causes an unrecoverable kernel panic. The administrator took an automated disk snapshot named 'boot-snap-safe' immediately prior to patching.",
    question: "What is the correct recovery procedure to restore the VM to its pre-patch state?",
    options: [
      { id: 'A', text: "Execute 'gcloud compute instances reset' with the '--snapshot' flag" },
      { id: 'B', text: "Delete the entire VPC network and redeploy from Cloud Shell" },
      { id: 'C', text: "Run 'gcloud compute disks restore' to overwrite the running boot disk in place" },
      { id: 'D', text: "Create a new persistent disk from snapshot 'boot-snap-safe', stop the VM, detach the corrupted boot disk, attach the new disk as the boot disk, and start the VM" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud snapshots are used to provision new persistent disks. The standard recovery workflow is: 1) Create a new persistent disk using 'gcloud compute disks create &lt;NEW_DISK&gt; --source-snapshot=boot-snap-safe'; 2) Stop the VM instance; 3) Detach the corrupted boot disk and attach the newly created disk as the boot device; and 4) Start the VM.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Disks", "DisasterRecovery"]
  },
  {
    id: "gcp-ace-164",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Resolving Compute Engine Hardware Faults: Reset vs. Stop and Start",
    scenario: "A Compute Engine instance experiences persistent degraded I/O and CPU throttling. Cloud Monitoring indicates that the underlying physical host hypervisor in the data center is experiencing hardware degradation. An engineer needs to force Google Cloud to relocate the virtual machine to healthy physical server hardware.",
    question: "Which operation forces the VM to migrate to a new physical host machine?",
    options: [
      { id: 'A', text: "Change the network tags on the instance" },
      { id: 'B', text: "Perform a Stop operation followed by a Start operation on the instance" },
      { id: 'C', text: "Execute 'sudo reboot' from inside the guest Linux operating system" },
      { id: 'D', text: "Perform an instance Reset operation" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An instance 'Reset' or guest OS 'reboot' simply power-cycles the VM while keeping it pinned to the exact same physical host hardware. By contrast, running 'Stop' completely deallocates the VM from the underlying physical server, and running 'Start' provisions and boots the VM on a completely fresh, healthy physical hypervisor in the zone.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "Operations", "Hardware"]
  },
  {
    id: "gcp-ace-165",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Ephemeral Storage Characteristics of Compute Engine Local SSDs",
    scenario: "A database administrator configures an in-memory caching tier on Compute Engine and attaches four 375 GB Local SSD partitions for ultra-low latency. The administrator needs to know what happens to the data on Local SSDs during planned and unplanned maintenance events.",
    question: "Under which scenario is data stored on Local SSDs permanently lost?",
    options: [
      { id: 'A', text: "When the guest operating system is rebooted using 'sudo reboot'" },
      { id: 'B', text: "When the instance is stopped or terminated by the user" },
      { id: 'C', text: "During standard Google Cloud live migration events" },
      { id: 'D', text: "When new firewall rules are applied to the VPC network" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Local SSDs are physically connected to the host server running the VM, providing millions of IOPS with sub-millisecond latency. While data on Local SSDs is preserved across live migrations and soft guest OS reboots, stopping or terminating the VM completely disconnects it from the physical server, permanently wiping all data on the Local SSD.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["ComputeEngine", "LocalSSD", "Storage"]
  },
  {
    id: "gcp-ace-166",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Zero-Impact GKE Node Upgrades Using Blue/Green Upgrade Strategy",
    scenario: "A financial institution runs mission-critical banking microservices on a GKE cluster. The operations team must upgrade the worker node pool to a new minor Kubernetes version. The team cannot tolerate any risk of pod scheduling failure, requires soak testing the new version alongside production, and demands instant rollback capability if issues emerge.",
    question: "Which GKE node pool upgrade strategy satisfies these stringent operational requirements?",
    options: [
      { id: 'A', text: "Immediate in-place node drain without surge" },
      { id: 'B', text: "Blue/Green node pool upgrade" },
      { id: 'C', text: "Manual node-by-node kubelet package upgrade via SSH" },
      { id: 'D', text: "Surge node pool upgrade" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GKE Blue/Green upgrades provision a completely separate green node pool running the new Kubernetes version while the blue node pool remains active. Workloads are drained to the green pool, allowing engineers to soak test the new environment. If anomalies occur during the soak period, traffic and pods can be instantly rolled back to the blue pool with zero disruption.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "BlueGreen", "Upgrades"]
  },
  {
    id: "gcp-ace-167",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Protecting Critical E-Commerce Events with GKE Maintenance Exclusions",
    scenario: "A global retail company is preparing for its annual Black Friday and Cyber Monday shopping weekend. The VP of Engineering mandates that Google Cloud must not perform any automated GKE control plane or node pool version upgrades during this 10-day peak revenue window.",
    question: "Which GKE cluster feature enforces this operational freeze?",
    options: [
      { id: 'A', text: "Configure a Maintenance Exclusion for the cluster covering the 10-day date range" },
      { id: 'B', text: "Remove all IAM permissions from Google Cloud Support" },
      { id: 'C', text: "Convert the cluster from Regional to Zonal" },
      { id: 'D', text: "Disable the GKE cluster autoscaler" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GKE Maintenance Exclusions allow administrators to block automated cluster upgrades (both control plane and worker nodes) for a defined period of up to 30 consecutive days. This prevents unexpected version shifts and maintenance reboots during high-stakes business events.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "MaintenanceWindows", "Operations"]
  },
  {
    id: "gcp-ace-168",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Immediate Rollback of Broken Kubernetes Deployments",
    scenario: "A newly deployed container version for 'frontend-app' is throwing HTTP 500 errors to customers due to a database syntax incompatibility. The DevOps team needs to immediately revert the deployment to the previous stable release.",
    question: "Which kubectl command performs this rollback instantly?",
    options: [
      { id: 'A', text: "kubectl rollout undo deployment/frontend-app" },
      { id: 'B', text: "kubectl rollout restart deployment/frontend-app" },
      { id: 'C', text: "kubectl delete deployment frontend-app" },
      { id: 'D', text: "kubectl scale deployment frontend-app --replicas=0" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'kubectl rollout undo deployment/&lt;NAME&gt;' command instantly rolls back the deployment to its previous healthy revision, triggering a rolling replacement of bad pods with pods from the prior ReplicaSet without needing to locate or re-apply past YAML manifests.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "kubectl", "Rollback"]
  },
  {
    id: "gcp-ace-169",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Monitoring Guest OS Memory Utilization with the Cloud Ops Agent",
    scenario: "A systems administrator reviews the Cloud Monitoring dashboard for a fleet of Compute Engine database instances. The administrator notices that CPU utilization, disk I/O, and network bytes are visible, but guest OS RAM memory utilization and disk space utilization metrics are completely missing.",
    question: "What must be installed on the VM instances to collect memory and disk space metrics?",
    options: [
      { id: 'A', text: "Install the Google Cloud Ops Agent on each VM instance" },
      { id: 'B', text: "Assign the 'roles/monitoring.admin' role to the VM's service account" },
      { id: 'C', text: "Upgrade the instances to Memory-Optimized machine types" },
      { id: 'D', text: "Enable VPC Flow Logs on the subnet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Google Cloud hypervisor only has visibility into external hardware metrics (CPU percentage, disk throughput, network bandwidth). Tracking internal operating system metrics (such as RAM utilization, swap space, and mount-point disk usage) requires running the Google Cloud Ops Agent inside the guest OS to collect and transmit telemetry to Cloud Monitoring.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudMonitoring", "OpsAgent", "Observability"]
  },
  {
    id: "gcp-ace-170",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Diagnosing Kubernetes Out-of-Memory (OOMKilled) Pod Terminations",
    scenario: "A microservice pod running in GKE periodically crashes and restarts. The status shows 'CrashLoopBackOff'. An engineer inspects the pod using 'kubectl describe pod' and observes: 'Last State: Terminated, Exit Code: 137, Reason: OOMKilled'.",
    question: "What caused the container to terminate with exit code 137?",
    options: [
      { id: 'A', text: "The container process exceeded its configured memory limit in the pod specification and was terminated by the Linux kernel Out-Of-Memory killer" },
      { id: 'B', text: "The node running the pod lost network connectivity to the master control plane" },
      { id: 'C', text: "The container was evicted due to an invalid CPU request" },
      { id: 'D', text: "The container's liveness probe failed 3 consecutive times" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Exit code 137 occurs when a process is killed by SIGKILL (signal 9 + 128 = 137). When a container exceeds its configured 'resources.limits.memory' in Kubernetes, the Linux kernel cgroup OOM killer sends SIGKILL to terminate the memory-hogging process, recorded in Kubernetes as Reason: OOMKilled.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["GKE", "OOMKilled", "Kubernetes"]
  },
  {
    id: "gcp-ace-171",
    difficulty: "hard",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Filtering Error Logs in Logs Explorer Using Logging Query Language",
    scenario: "An engineer is troubleshooting a production outage on Compute Engine. The engineer needs to search Cloud Logging for all error logs generated specifically by Compute Engine instances in region 'us-east1' where the log message contains the word 'timeout'.",
    question: "Which Cloud Logging query expression satisfies these criteria?",
    options: [
      { id: 'A', text: "logName=\"projects/gce\" AND severity=FAILED AND message=\"timeout\"" },
      { id: 'B', text: "resource.type=\"gce_instance\" AND resource.labels.zone=~\"^us-east1\" AND severity>=ERROR AND textPayload=~\"timeout\"" },
      { id: 'C', text: "SELECT * FROM logs WHERE type='vm' AND error='timeout'" },
      { id: 'D', text: "compute.instances.list --filter=\"status:ERROR AND timeout\"" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Logging Query Language uses structured key-value filters. Specifying 'resource.type=\"gce_instance\"' targets Compute Engine VMs, 'resource.labels.zone=~\"^us-east1\"' filters to zones in us-east1 via regex, 'severity>=ERROR' includes ERROR, CRITICAL, ALERT, and EMERGENCY, and 'textPayload=~\"timeout\"' matches occurrences of the keyword.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "LogsExplorer", "Troubleshooting"]
  },
  {
    id: "gcp-ace-172",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Exporting Cloud Audit Logs to BigQuery via Log Sinks for Security Analysis",
    scenario: "A chief information security officer (CISO) mandates that all administrative activity and data access audit logs across the entire Google Cloud organization must be retained in an analytical database for 3 years so security analysts can perform complex SQL queries.",
    question: "Which architecture fulfills this requirement with minimal operational overhead?",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring uptime checks with webhook notifications" },
      { id: 'B', text: "Write a script that exports logs to Cloud Storage and runs daily bq load jobs" },
      { id: 'C', text: "Stream logs to a Compute Engine instance running an ELK stack" },
      { id: 'D', text: "Create an aggregated Log Sink at the Organization level configured with a destination of BigQuery" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Google Cloud Log Sink routes logs in real time to supported destinations. Creating a sink with a BigQuery dataset destination automatically streams incoming audit log records directly into structured BigQuery tables, allowing immediate SQL analysis without managing intermediate ETL pipelines.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "LogSinks", "Security"]
  },
  {
    id: "gcp-ace-173",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Controlling Cloud Logging Ingestion Costs with Log Exclusions",
    scenario: "An application team notices their Google Cloud monthly invoice includes unexpectedly high charges for Cloud Logging ingestion. Investigation reveals that a debug logging flag left enabled on a fleet of microservices is generating terabytes of informational and debug logs.",
    question: "How can the team immediately stop ingesting and paying for these verbose logs without redeploying application code?",
    options: [
      { id: 'A', text: "Create a Log Exclusion in Cloud Logging with a filter matching 'severity<=INFO'" },
      { id: 'B', text: "Delete the Cloud Logging API from the project" },
      { id: 'C', text: "Configure an alert policy with notification channels disabled" },
      { id: 'D', text: "Set the retention period on the '_Default' log bucket to 1 day" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Log Exclusions allow administrators to filter out specific log entries at the ingestion stage before they are processed, stored, or billed. By creating an exclusion rule with 'severity<=INFO', verbose debug and informational messages are discarded immediately at zero cost while errors and warnings continue to be stored.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "LogExclusions", "FinOps"]
  },
  {
    id: "gcp-ace-174",
    difficulty: "easy",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Alerting on Application Exceptions Using Log-Based Counter Metrics",
    scenario: "A payment gateway microservice logs a specific JSON payload containing '\"status\": \"PAYMENT_FAILED\"' whenever a transaction fails. The SRE team wants Cloud Monitoring to trigger a PagerDuty incident whenever more than 20 payment failures occur within a 5-minute window.",
    question: "What should the team create to bridge the application logs to Cloud Monitoring alerting?",
    options: [
      { id: 'A', text: "Create a Cloud SQL read replica dedicated to audit logging" },
      { id: 'B', text: "Deploy Cloud Trace with distributed context propagation" },
      { id: 'C', text: "Install a custom cron script on the VMs that scrapes logs every 5 minutes" },
      { id: 'D', text: "Create a Log-Based Counter Metric in Cloud Logging matching the failure log filter, and build an Alerting Policy based on that metric" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Log-Based Counter Metric scans incoming log entries in real time and increments a custom metric counter whenever an entry matches the specified filter (e.g. jsonPayload.status = \"PAYMENT_FAILED\"). This custom metric is immediately accessible in Cloud Monitoring to configure alerting policies, threshold conditions, and notification channels.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudLogging", "LogBasedMetrics", "CloudMonitoring"]
  },
  {
    id: "gcp-ace-175",
    difficulty: "medium",
    certId: "gcp-ace",
    domainId: "d4",
    domainName: "Ensuring successful operation of a cloud solution",
    title: "Restoring Cloud SQL from Backup: Overwrite Behavior and Safety",
    scenario: "A database administrator needs to test whether an automated backup of production Cloud SQL instance 'prod-db' is functional. The administrator considers clicking 'Restore' on the latest backup in the console.",
    question: "What critical operational risk occurs if a backup is restored directly into 'prod-db'?",
    options: [
      { id: 'A', text: "The instance will be converted to an unmanaged Compute Engine VM" },
      { id: 'B', text: "The backup will fail because Cloud SQL does not allow restoring into the same region" },
      { id: 'C', text: "Google Cloud charges a 50% restoration fee on the database storage size" },
      { id: 'D', text: "Restoring a backup into the existing instance permanently overwrites and destroys all current database tables and transactions created since the backup" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Restoring a Cloud SQL backup into an existing instance is a destructive operation that completely overwrites all current data with the state of the database at the time the backup was taken. Best practice is to restore the backup into a new, temporary instance (or staging instance) to verify data integrity without destroying live production records.",
    referenceUrl: "https://cloud.google.com/docs",
    tags: ["CloudSQL", "Backups", "DisasterRecovery"]
  }
];

export default GCP_ACE_QUESTIONS_7;
