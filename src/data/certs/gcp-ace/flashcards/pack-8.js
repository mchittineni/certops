export const GCP_ACE_FLASHCARDS_8 = [
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Log Sinks: Routing Google Cloud Logs for Long-Term Retention and Analytics",
    "hint": "Exporting audit logs to BigQuery, Cloud Storage, or Pub/Sub.",
    "back": "A <strong>Log Sink</strong> routes matched logs from Cloud Logging to: 1) <strong>Cloud Storage</strong> (cost-effective multi-year compliance archive); 2) <strong>BigQuery</strong> (interactive SQL security analytics); or 3) <strong>Pub/Sub</strong> (streaming integration with external SIEMs like Splunk or Datadog).",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-176"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Logging Exclusions: Controlling Log Ingestion Costs",
    "hint": "Preventing high-volume debug logs from consuming budget.",
    "back": "<strong>Log Exclusions</strong> drop matched logs at the Cloud Logging ingestion gateway before they are stored or billed. They can be configured with an exclusion filter (e.g., <code>severity=DEBUG</code>) and optional percent sampling, dramatically lowering monthly logging charges.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-177"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Log-Based Metrics: Counter vs. Distribution Metrics",
    "hint": "Extracting operational signals and latency histograms from raw text logs.",
    "back": "<strong>Counter Metrics</strong> count the occurrences of log entries matching a filter (e.g. counting HTTP 500 errors to trigger an alert). <strong>Distribution Metrics</strong> extract numerical values from structured logs (e.g., request latency in ms) to calculate percentiles (p50, p95, p99).",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-178"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud SQL On-Demand Backups vs. Automated Daily Backups",
    "hint": "Pre-maintenance safety snapshots vs. scheduled recurring retention.",
    "back": "<strong>Automated Backups</strong> run daily during a scheduled backup window and are retained for up to 365 days. <strong>On-Demand Backups</strong> are triggered manually before critical schema migrations or updates; they are preserved indefinitely until explicitly deleted by the user.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-179"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Restoring Cloud SQL from Backup: Impact on Target Instance",
    "hint": "Does restoring a backup create a new instance or overwrite the existing one?",
    "back": "Restoring a Cloud SQL backup into an existing instance <strong>permanently overwrites all existing database data</strong> on that instance. Best practice is to restore into a separate, newly created instance first to verify data integrity before pointing applications to it.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-180"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud SQL Maintenance Windows and Deny Periods",
    "hint": "Preventing database restarts during active business hours.",
    "back": "Configure a <strong>Maintenance Window</strong> (day of week and hour) to restrict Google Cloud maintenance reboots to quiet hours. Configure a <strong>Deny Maintenance Period</strong> (up to 90 consecutive days) to prevent any non-emergency maintenance during peak revenue seasons.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-181"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Managing Cloud Storage Storage Classes on Existing Objects",
    "hint": "Updating an individual object's storage class in-place.",
    "back": "Run <code>gcloud storage objects update gs://[BUCKET]/[OBJECT] --storage-class=COLDLINE</code>. The object transitions immediately to the specified storage class without downloading or re-uploading the file data.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-182"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Storage gsutil rsync vs. gcloud storage rsync",
    "hint": "Synchronizing directory contents to a Cloud Storage bucket efficiently.",
    "back": "<code>gcloud storage rsync -r [LOCAL_DIR] gs://[BUCKET]/</code> synchronizes files by comparing checksums and copying only new or modified files. Adding the <code>-d</code> (delete) flag removes objects in the destination bucket that no longer exist locally.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-183"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Monitoring Bigtable Performance: Cluster CPU Utilization Thresholds",
    "hint": "Recommended maximum CPU utilization for production Bigtable clusters.",
    "back": "Google Cloud recommends keeping average CPU utilization on a production Bigtable cluster <strong>below 70%</strong> (or below 35% for multi-cluster routing with automatic failover). Exceeding this threshold causes read/write latency spikes and requires adding nodes.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-184"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Bigtable Autoscaling: Minimum and Maximum Node Governance",
    "hint": "Automating node cluster sizing based on CPU load and storage capacity.",
    "back": "Bigtable supports <strong>cluster autoscaling</strong>, automatically adjusting node counts between a defined minimum and maximum based on target CPU utilization and storage utilization metrics, eliminating manual cluster resizing.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-185"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "BigQuery Query Plan Inspection: Identifying Performance Bottlenecks",
    "hint": "Diagnosing why a BigQuery SQL statement is running slowly.",
    "back": "Inspect the <strong>Execution Details</strong> in the BigQuery Console. Look for: 1) High <strong>Slot time</strong>; 2) <strong>Data skew</strong> (one worker processing disproportionately more bytes than others); and 3) Costly <strong>Shuffle operations</strong> caused by cross-joins or large unindexed groupings.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-186"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "VPC Flow Logs: Network Traffic Analysis and Security Auditing",
    "hint": "Capturing 5-tuple packet telemetry on subnet interfaces.",
    "back": "<strong>VPC Flow Logs</strong> records network telemetry (source IP, destination IP, port, protocol, packet count, byte count, latency) for all packets entering or leaving VM interfaces. Essential for network security forensics, egress cost analysis, and firewall auditing.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-187"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Firewall Rule Logging: Verifying Security Policy Enforcement",
    "hint": "Confirming whether a firewall rule allowed or blocked a specific connection.",
    "back": "Enable <strong>Firewall Rules Logging</strong> on individual rules. Google Cloud streams connection events (ALLOW or DENY decisions) to Cloud Logging, enabling security teams to audit rejected unauthorized connection attempts in real time.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-188"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Trace: Distributed Latency Profiling for Microservices",
    "hint": "Tracing request propagation across multiple APIs and databases.",
    "back": "<strong>Cloud Trace</strong> collects latency data from distributed microservices via OpenTelemetry or SDKs. It generates waterfall visualizations showing how long each microservice, RPC call, or database query took during the lifecycle of an end-user HTTP request.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-189"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Profiler: Continuous Production Performance Analysis",
    "hint": "Identifying CPU-heavy and memory-leaking functions in live code.",
    "back": "<strong>Cloud Profiler</strong> continuously samples CPU and heap memory usage of running production applications with negligible overhead (<1%). It renders flame graphs identifying the exact source code functions consuming the most CPU cycles or RAM.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-190"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Error Reporting: Automated Exception Aggregation",
    "hint": "Grouping stack traces from logs into actionable issue tickets.",
    "back": "<strong>Error Reporting</strong> automatically analyzes application log streams in Cloud Logging, extracts stack traces and exception messages, and aggregates identical crashes into single grouped incident cards with alert notifications.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-191"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "GKE Node Taints and Pod Tolerations: Operational Maintenance",
    "hint": "Repelling pods from specific nodes during maintenance or specialized hardware.",
    "back": "A <strong>Taint</strong> (applied to a node via <code>kubectl taint nodes [NODE] key=value:NoSchedule</code>) repels all pods. Only pods with a matching <strong>Toleration</strong> in their pod specification are permitted to schedule on that node.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-192"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cordoning and Draining GKE Worker Nodes",
    "hint": "Safely evicting pods before performing manual VM host maintenance.",
    "back": "1) <code>kubectl cordon [NODE]</code> marks the node unschedulable, preventing new pods from landing on it; 2) <code>kubectl drain [NODE] --ignore-daemonsets --delete-emptydir-data</code> evicts existing pods gracefully to other healthy nodes in the cluster.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-193"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "MIG Rolling Restart vs. Rolling Replace",
    "hint": "Rebooting the existing guest OS vs. terminating and reprovisioning new VMs.",
    "back": "<strong>Rolling Restart</strong> restarts the operating system on existing VM instances without altering the underlying VM disk or machine configuration. <strong>Rolling Replace</strong> terminates the instances completely and provisions brand-new VMs from the instance template.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-194"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Managing Cloud DNS Records via Transactions",
    "hint": "Atomic batch updates to DNS zone resource record sets.",
    "back": "Cloud DNS enforces safe updates via transactions: 1) <code>gcloud dns record-sets transaction start --zone=[ZONE]</code>; 2) <code>gcloud dns record-sets transaction add [RECORD]</code>; 3) <code>gcloud dns record-sets transaction execute --zone=[ZONE]</code>. Prevents invalid partial record updates.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-195"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud NAT Port Exhaustion: Symptoms and Resolution",
    "hint": "Private VMs failing outbound connections to external APIs under heavy concurrency.",
    "back": "When private VMs establish thousands of simultaneous outbound connections, Cloud NAT can exhaust available ephemeral source ports. Symptoms include dropped TCP SYN packets and NAT allocation errors. Fix by: 1) Adding more NAT external IP addresses; or 2) Increasing <code>--min-ports-per-vm</code>.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-196"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Checking Cloud Load Balancer Backend Health Status",
    "hint": "Verifying which backend VMs are marked HEALTHY or UNHEALTHY.",
    "back": "Run <code>gcloud compute backend-services get-health [BACKEND_SERVICE] --global</code> (or <code>--region=[REGION]</code>). Displays the real-time health check status of each instance or endpoint group attached to the load balancer.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-197"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Deprecating Custom Images in Compute Engine",
    "hint": "Guiding teams to migrate away from obsolete OS images safely.",
    "back": "Use <code>gcloud compute images deprecate [IMAGE_NAME] --state=DEPRECATED --replacement=[NEW_IMAGE]</code>. Prevents new users from selecting the image in console UI while allowing existing templates to continue functioning until the image is deleted.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-198"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "BigQuery Cost Control: Maximum Bytes Billed",
    "hint": "Setting a hard cap on query spending to prevent accidental budget drain.",
    "back": "Set <code>maximum_bytes_billed</code> in query settings or pass <code>--maximum_bytes_billed=[BYTES]</code> in the CLI. If a query's estimated or actual scanned bytes exceed this threshold, BigQuery aborts the query immediately without charging the project.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-199"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "front": "Cloud Storage gsutil/gcloud Parallel Composite Uploads",
    "hint": "Accelerating multi-gigabyte file uploads by splitting into chunks.",
    "back": "Parallel composite uploads split large files into multiple chunks, upload them simultaneously in parallel streams, and merge them into a single composite object on Cloud Storage, saturating high-bandwidth network links.",
    "tags": [
      "GCP",
      "Ensuring"
    ],
    "id": "gcp-ace-fc-200"
  }
];

export default GCP_ACE_FLASHCARDS_8;
