export const GCP_ACE_QUESTIONS_8 = [
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Preventing Disruptive Maintenance with Cloud SQL Deny Periods",
    "scenario": "A tax preparation software platform experiences its peak annual customer volume from March 15 to April 15. The database engineering team must ensure that Google Cloud does not perform any routine maintenance updates or database restarts on their Cloud SQL instances during this month.",
    "question": "Which Cloud SQL feature enforces this blackout period?",
    "options": [
      {
        "id": "A",
        "text": "Configure a Deny Maintenance Period of up to 90 days covering the peak dates"
      },
      {
        "id": "B",
        "text": "Disable the primary database network interface"
      },
      {
        "id": "C",
        "text": "Assign the database service account an expired OAuth token"
      },
      {
        "id": "D",
        "text": "Switch the database storage engine from InnoDB to MyISAM"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud SQL allows administrators to configure a 'Deny Maintenance Period' of up to 90 days. During this defined window, Google Cloud completely suspends all scheduled, non-emergency maintenance reboots on the instance, safeguarding critical business periods against unexpected restarts.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudSQL",
      "Maintenance",
      "HighAvailability"
    ],
    "id": "gcp-ace-176"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Auditing Network Connections with VPC Firewall Rules Logging",
    "scenario": "A security operations center (SOC) detects suspicious port-scanning activity targeting internal subnets. The team needs to verify whether existing VPC firewall rules successfully blocked connections to port 445 (SMB) from external IP addresses.",
    "question": "Which feature provides real-time visibility into firewall allow and deny decisions?",
    "options": [
      {
        "id": "A",
        "text": "Enable Firewall Rules Logging on the relevant VPC firewall rules and inspect the logs in Cloud Logging"
      },
      {
        "id": "B",
        "text": "Enable VPC Network Peering route export logging"
      },
      {
        "id": "C",
        "text": "Deploy an Envoy sidecar proxy on every Compute Engine VM"
      },
      {
        "id": "D",
        "text": "Run 'tcpdump' on the Cloud Router interface"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Enabling Firewall Rules Logging on individual VPC firewall rules causes Google Cloud to generate detailed audit log entries for every connection evaluated by that rule (both ALLOW and DENY actions). The logs record source IP, destination IP, port, protocol, and timestamp in Cloud Logging.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "VPC",
      "FirewallLogging",
      "Security"
    ],
    "id": "gcp-ace-177"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "End-to-End Distributed Latency Analysis Using Cloud Trace",
    "scenario": "An e-commerce checkout transaction traverses an API Gateway on Cloud Run, three microservices on GKE, and a Cloud SQL database. End users report that checkout requests occasionally take over 12 seconds to complete. The engineering team needs to pinpoint exactly which microservice or SQL query is causing the bottleneck.",
    "question": "Which Google Cloud observability tool is designed for distributed microservice latency tracing?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Trace"
      },
      {
        "id": "B",
        "text": "Cloud Logging"
      },
      {
        "id": "C",
        "text": "Cloud Armor"
      },
      {
        "id": "D",
        "text": "Network Intelligence Center"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud Trace is Google Cloud's distributed tracing system. By propagating trace context headers across microservices, Cloud Trace aggregates latency timings across all RPC calls, API endpoints, and database queries into a single end-to-end timeline waterfall visualization, identifying the exact component causing delays.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudTrace",
      "Microservices",
      "Observability"
    ],
    "id": "gcp-ace-178"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Profiling Production Code Performance with Cloud Profiler",
    "scenario": "A high-frequency trading API running on Compute Engine is experiencing high CPU consumption. Developers suspect an inefficient regex algorithm or memory leak in the Go codebase, but cannot reproduce the issue in local test environments.",
    "question": "Which Google Cloud tool continuously samples CPU and heap memory in production with negligible overhead?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Profiler"
      },
      {
        "id": "B",
        "text": "Cloud Monitoring Metric Explorer"
      },
      {
        "id": "C",
        "text": "Cloud Debugger legacy agent"
      },
      {
        "id": "D",
        "text": "Cloud Security Command Center"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud Profiler continuously profiles production application code with minimal overhead (<1% CPU and memory). It generates interactive flame graphs visualizing which specific functions and lines of source code consume the most CPU cycles, heap memory, and lock contention.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudProfiler",
      "Performance",
      "Observability"
    ],
    "id": "gcp-ace-179"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Safely Draining GKE Worker Nodes for Host Maintenance",
    "scenario": "A cluster administrator needs to perform manual hardware maintenance on a dedicated physical host running a GKE worker node named 'gke-prod-pool-1234'. The administrator must ensure that all running pods are gracefully evicted and rescheduled onto other nodes without dropping active client connections.",
    "question": "Which sequence of kubectl commands safely prepares the node for maintenance?",
    "options": [
      {
        "id": "A",
        "text": "kubectl cordon gke-prod-pool-1234 && kubectl drain gke-prod-pool-1234 --ignore-daemonsets --delete-emptydir-data"
      },
      {
        "id": "B",
        "text": "kubectl delete node gke-prod-pool-1234 --force"
      },
      {
        "id": "C",
        "text": "kubectl taint node gke-prod-pool-1234 app=stop:NoExecute"
      },
      {
        "id": "D",
        "text": "kubectl scale node gke-prod-pool-1234 --replicas=0"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "'kubectl cordon' marks the node as unschedulable, ensuring the Kubernetes scheduler routes no new pods to it. 'kubectl drain' then gracefully terminates and evicts existing pods to healthy surviving nodes while respecting PodDisruptionBudgets. Specifying '--ignore-daemonsets' and '--delete-emptydir-data' allows system daemonsets and local temp data to be bypassed safely.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "GKE",
      "kubectl",
      "NodeMaintenance"
    ],
    "id": "gcp-ace-180"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Automating Bigtable Sizing with Cluster Autoscaling",
    "scenario": "A Cloud Bigtable cluster supporting a mobile gaming leaderboard experiences predictable surges in evening traffic and low activity during the day. Operating engineers currently log in manually twice a day to add and remove nodes.",
    "question": "How should the operations team automate Bigtable cluster capacity?",
    "options": [
      {
        "id": "A",
        "text": "Enable cluster autoscaling on the Bigtable cluster, defining a minimum node count, maximum node count, and target CPU utilization (e.g. 60%)"
      },
      {
        "id": "B",
        "text": "Configure a Cloud Function with Cloud Scheduler to run 'gcloud compute instances create'"
      },
      {
        "id": "C",
        "text": "Deploy a Kubernetes Horizontal Pod Autoscaler pointing to the Bigtable API"
      },
      {
        "id": "D",
        "text": "Switch the storage type from SSD to HDD"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud Bigtable supports native cluster autoscaling. Administrators define a minimum and maximum node boundary along with a target CPU utilization (typically 60-70%). Bigtable automatically adds nodes when traffic ramps up and gracefully removes nodes during quiet periods, eliminating manual scaling toil.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudBigtable",
      "Autoscaling",
      "Operations"
    ],
    "id": "gcp-ace-181"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Resolving Cloud NAT Port Exhaustion Under High Concurrency",
    "scenario": "A batch analytics fleet of 50 private Compute Engine instances makes hundreds of concurrent outbound HTTP calls to third-party APIs through Cloud NAT. In peak hours, application threads fail with 'Connection reset by peer' and 'Cannot assign requested address'. Cloud Monitoring shows 'nat_allocation_failed' errors.",
    "question": "What is the root cause of this failure, and how should it be resolved?",
    "options": [
      {
        "id": "A",
        "text": "Cloud NAT has exhausted ephemeral source ports; allocate additional NAT external IP addresses and adjust the minimum ports per VM setting"
      },
      {
        "id": "B",
        "text": "The VPC firewall is blocking outbound port 443"
      },
      {
        "id": "C",
        "text": "The instances lack the roles/compute.networkUser permission"
      },
      {
        "id": "D",
        "text": "Cloud Router BGP sessions have dropped"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Each external IP on a Cloud NAT gateway provides 64,512 ephemeral source ports (TCP/UDP). When private VMs initiate massive concurrent outbound connections, source ports can become fully exhausted, resulting in dropped connections. The fix is to assign additional static external IP addresses to the NAT gateway or increase '--min-ports-per-vm'.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudNAT",
      "PortExhaustion",
      "Networking"
    ],
    "id": "gcp-ace-182"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Safely Deprecating Compute Engine Custom Images",
    "scenario": "A company updates its standard Golden Ubuntu image to version 3. The platform team wants to prevent any developer from creating new VMs or instance templates using version 1, while ensuring existing running VMs and automated deployment pipelines pointing to version 2 or 3 continue working without disruption.",
    "question": "Which gcloud command properly deprecates the older image?",
    "options": [
      {
        "id": "A",
        "text": "gcloud compute images deprecate golden-ubuntu-v1 --state=DEPRECATED --replacement=golden-ubuntu-v3"
      },
      {
        "id": "B",
        "text": "gcloud compute images delete golden-ubuntu-v1 --quiet"
      },
      {
        "id": "C",
        "text": "gcloud compute images update golden-ubuntu-v1 --no-access"
      },
      {
        "id": "D",
        "text": "gcloud storage rm gs://images/golden-ubuntu-v1.tar.gz"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'gcloud compute images deprecate' command marks an image with state DEPRECATED and links a replacement image. Deprecated images are hidden from standard UI lists and console creation workflows to prevent new adoption, but existing instance templates and running VMs that reference the image ID continue to function normally.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "ComputeEngine",
      "CustomImages",
      "Governance"
    ],
    "id": "gcp-ace-183"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Preventing Runaway BigQuery Costs Using Maximum Bytes Billed",
    "scenario": "A company grants data scientists direct access to query a multi-petabyte analytics warehouse in BigQuery. The finance director is worried that an unpartitioned query with multiple cross-joins could accidentally scan 500 TB and incur thousands of dollars on the credit card in a single execution.",
    "question": "Which BigQuery safeguard prevents individual queries from scanning beyond a budgetary threshold?",
    "options": [
      {
        "id": "A",
        "text": "Configure the 'maximum_bytes_billed' query parameter or flag on queries and client sessions"
      },
      {
        "id": "B",
        "text": "Set a Cloud Storage object retention lock on the dataset"
      },
      {
        "id": "C",
        "text": "Restrict data scientists to the 'roles/bigquery.jobUser' role only"
      },
      {
        "id": "D",
        "text": "Schedule BigQuery queries exclusively during weekend maintenance windows"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Setting 'maximum_bytes_billed' limits the maximum number of bytes that BigQuery will bill for a given query. If BigQuery's query planner estimates or determines that the query will process more bytes than this limit, the query fails immediately before execution and incurs zero cost.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "BigQuery",
      "CostControls",
      "FinOps"
    ],
    "id": "gcp-ace-184"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Evaluating Application Latency Percentiles with Metric Explorer",
    "scenario": "An SRE investigates reports of intermittent slowness on an external HTTPS load balancer. Average (mean) latency appears normal at 120ms, but 5% of VIP users experience severe 5-second delays.",
    "question": "How should the SRE configure Cloud Monitoring Metric Explorer to reveal this hidden degradation?",
    "options": [
      {
        "id": "A",
        "text": "Select the load balancer response latency metric and change the aggregation alignment to the 95th or 99th percentile (p95 / p99)"
      },
      {
        "id": "B",
        "text": "Filter the metric by VM CPU utilization"
      },
      {
        "id": "C",
        "text": "Increase the dashboard refresh rate to 1 second"
      },
      {
        "id": "D",
        "text": "Create a log-based metric counting total HTTP 200 responses"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Average (mean) latency metrics are heavily skewed by large volumes of fast requests, completely masking long-tail latency spikes experienced by a minority of users. Inspecting the 95th or 99th percentile (p95/p99) isolates the worst 5% or 1% of transactions, accurately highlighting severe performance degradation.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudMonitoring",
      "MetricExplorer",
      "SRE"
    ],
    "id": "gcp-ace-185"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Promoting a Cloud SQL Read Replica During Regional Outage",
    "scenario": "An enterprise runs its primary Cloud SQL database in 'us-central1' with a cross-region read replica in 'us-east1'. A catastrophic regional natural disaster takes 'us-central1' completely offline. The DR plan requires immediately converting the replica in 'us-east1' into a primary read-write database.",
    "question": "Which gcloud command executes this disaster recovery failover?",
    "options": [
      {
        "id": "A",
        "text": "gcloud sql instances promote-replica [REPLICA_NAME]"
      },
      {
        "id": "B",
        "text": "gcloud sql instances failover [PRIMARY_NAME]"
      },
      {
        "id": "C",
        "text": "gcloud sql instances update [REPLICA_NAME] --make-primary"
      },
      {
        "id": "D",
        "text": "gcloud sql instances clone [REPLICA_NAME] [NEW_PRIMARY]"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'gcloud sql instances promote-replica &lt;REPLICA_NAME&gt;' command breaks the replication link from the unavailable primary instance and converts the read replica into an independent, standalone read-write database instance that can immediately begin serving application write traffic.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudSQL",
      "DisasterRecovery",
      "ReadReplicas"
    ],
    "id": "gcp-ace-186"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Investigating Kubernetes Scheduling Delays with Cluster Autoscaler Status",
    "scenario": "During an unexpected traffic surge, new pods in a GKE cluster remain stuck in 'Pending' state for over 10 minutes. The DevOps engineer believes the cluster autoscaler should have added new nodes to the node pool, but node count remains unchanged.",
    "question": "Where can the engineer inspect the real-time decision logs of the GKE Cluster Autoscaler?",
    "options": [
      {
        "id": "A",
        "text": "Examine the 'cluster-autoscaler-status' ConfigMap in the 'kube-system' namespace using kubectl"
      },
      {
        "id": "B",
        "text": "View the /var/log/messages file on the worker node"
      },
      {
        "id": "C",
        "text": "Check Cloud DNS query audit logs"
      },
      {
        "id": "D",
        "text": "Inspect the GKE cluster master authorized networks list"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The Kubernetes Cluster Autoscaler writes its internal decision logs and status report to a ConfigMap named 'cluster-autoscaler-status' in the 'kube-system' namespace. Inspecting this ConfigMap ('kubectl get cm cluster-autoscaler-status -n kube-system -o yaml') reveals whether scaling was blocked by node pool quotas, pod disruption budgets, or unfulfillable resource requests.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "GKE",
      "ClusterAutoscaler",
      "Troubleshooting"
    ],
    "id": "gcp-ace-187"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Executing Cloud Storage Atomic Synchronization with rsync",
    "scenario": "A company maintains an on-premises web server hosting static PDF product catalogs. Every night, a synchronization job must mirror the local directory '/var/www/catalogs' to Cloud Storage bucket 'gs://company-catalogs/', ensuring deleted local files are removed from the bucket.",
    "question": "Which command performs this synchronization and deletes obsolete destination files?",
    "options": [
      {
        "id": "A",
        "text": "gcloud storage rsync -r -d /var/www/catalogs gs://company-catalogs/"
      },
      {
        "id": "B",
        "text": "gcloud storage cp -r /var/www/catalogs/* gs://company-catalogs/"
      },
      {
        "id": "C",
        "text": "gsutil cp -u /var/www/catalogs gs://company-catalogs/"
      },
      {
        "id": "D",
        "text": "gcloud storage mv /var/www/catalogs gs://company-catalogs/"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'gcloud storage rsync' command synchronizes content between directories and buckets by comparing file checksums and timestamps. Adding the '-r' (recursive) and '-d' (delete) flags ensures the destination bucket matches the source directory exactly, removing any files in the bucket that no longer exist locally.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudStorage",
      "rsync",
      "Automation"
    ],
    "id": "gcp-ace-188"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Modifying Storage Classes on Existing Objects In-Place",
    "scenario": "A compliance audit requires moving a 5 TB database archive object ('gs://compliance-vault/2023-audit.tar.gz') from Standard storage to Coldline storage immediately without downloading the object locally or re-uploading it.",
    "question": "Which gcloud command changes the storage class of the object in-place?",
    "options": [
      {
        "id": "A",
        "text": "gcloud storage objects update gs://compliance-vault/2023-audit.tar.gz --storage-class=COLDLINE"
      },
      {
        "id": "B",
        "text": "gcloud storage buckets update gs://compliance-vault --default-storage-class=COLDLINE"
      },
      {
        "id": "C",
        "text": "gsutil setmeta -h \"Content-Type: coldline\" gs://compliance-vault/2023-audit.tar.gz"
      },
      {
        "id": "D",
        "text": "gcloud storage cp gs://compliance-vault/2023-audit.tar.gz gs://compliance-vault/2023-audit.tar.gz --storage-class=COLDLINE"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "'gcloud storage objects update gs://&lt;BUCKET&gt;/&lt;OBJECT&gt; --storage-class=COLDLINE' updates the storage class of an existing object directly within Google Cloud Storage metadata, executing instantly without moving bits across the network or re-uploading file payloads.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudStorage",
      "StorageClasses",
      "DataManagement"
    ],
    "id": "gcp-ace-189"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Investigating BigQuery Query Skew in Execution Details",
    "scenario": "A complex SQL query processing 500 million rows in BigQuery takes 45 minutes to execute. Looking at the Execution Details graph in the console, an engineer observes that 99 stages completed in under 2 seconds, but a single final stage took 43 minutes with one worker processing 98% of the data.",
    "question": "What common analytical query anti-pattern is causing this bottleneck?",
    "options": [
      {
        "id": "A",
        "text": "Data skew (partition hotspotting) where an uneven distribution of keys forces all rows to be shuffled into a single processing worker"
      },
      {
        "id": "B",
        "text": "BigQuery ran out of storage slots"
      },
      {
        "id": "C",
        "text": "The table was clustered by too many columns"
      },
      {
        "id": "D",
        "text": "Cloud Storage export bandwidth was throttled"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Data skew occurs when joining or grouping by a high-frequency key (such as NULL values, default user IDs, or common status flags). When BigQuery shuffles data, all records sharing that key are routed to a single compute worker, creating a severe bottleneck while all other workers sit idle.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "BigQuery",
      "QueryOptimization",
      "DataSkew"
    ],
    "id": "gcp-ace-190"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Verifying Cloud Load Balancer Backend Health Status via CLI",
    "scenario": "Users report intermittent HTTP 502 Bad Gateway errors when accessing a web portal. The administrator suspects one or more backend virtual machines in the instance group are failing health check probes.",
    "question": "Which command displays the real-time health check status of backends attached to the load balancer?",
    "options": [
      {
        "id": "A",
        "text": "gcloud compute backend-services get-health [BACKEND_SERVICE_NAME] --global"
      },
      {
        "id": "B",
        "text": "gcloud compute instances list --filter=\"status:UNHEALTHY\""
      },
      {
        "id": "C",
        "text": "gcloud compute health-checks describe [HEALTH_CHECK_NAME]"
      },
      {
        "id": "D",
        "text": "gcloud compute forwarding-rules describe [RULE_NAME]"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'gcloud compute backend-services get-health &lt;NAME&gt; --global' command queries the load balancer's backend service and returns the exact health state ('HEALTHY' or 'UNHEALTHY') of every individual backend VM instance or network endpoint group (NEG).",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "LoadBalancing",
      "HealthChecks",
      "Troubleshooting"
    ],
    "id": "gcp-ace-191"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Atomic Batch Updates to Cloud DNS Using Transactions",
    "scenario": "A systems administrator needs to add a new 'A' record and update an existing 'MX' record in a Cloud DNS zone. The administrator must guarantee that either both records are applied successfully together or neither is applied, avoiding partial DNS propagation errors.",
    "question": "Which Cloud DNS command workflow guarantees atomic record updates?",
    "options": [
      {
        "id": "A",
        "text": "Initialize with 'gcloud dns record-sets transaction start', add changes with 'gcloud dns record-sets transaction add', and commit with 'gcloud dns record-sets transaction execute'"
      },
      {
        "id": "B",
        "text": "Run two parallel 'gcloud dns record-sets create' commands in separate terminal sessions"
      },
      {
        "id": "C",
        "text": "Export the zone file, edit it with nano, and import it using gsutil"
      },
      {
        "id": "D",
        "text": "Update the DNS NS records at the domain registrar first"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud DNS enforces atomicity using transactions: 1) 'gcloud dns record-sets transaction start' creates a local 'transaction.yaml' file; 2) 'gcloud dns record-sets transaction add' appends mutations to the file; and 3) 'gcloud dns record-sets transaction execute' uploads and applies all changes in a single atomic API transaction.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudDNS",
      "Transactions",
      "Networking"
    ],
    "id": "gcp-ace-192"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Executing Compute Engine Rolling Restarts on Managed Instance Groups",
    "scenario": "A microservices application running on a Compute Engine Managed Instance Group needs to reload its operating system environment after a system library update. The instances must be rebooted sequentially without altering their persistent disks, machine configurations, or IP addresses, maintaining at least 75% serving capacity.",
    "question": "Which gcloud command initiates this rolling restart?",
    "options": [
      {
        "id": "A",
        "text": "gcloud compute instance-groups managed rolling-action restart [MIG_NAME] --max-unavailable=25%"
      },
      {
        "id": "B",
        "text": "gcloud compute instance-groups managed rolling-action replace [MIG_NAME]"
      },
      {
        "id": "C",
        "text": "gcloud compute instances reset $(gcloud compute instances list --format='value(name)')"
      },
      {
        "id": "D",
        "text": "gcloud compute instance-groups managed resize [MIG_NAME] --size=0"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'gcloud compute instance-groups managed rolling-action restart' command performs a rolling reboot of the operating system on instances in the group without recreating the VMs or replacing their disks. Setting '--max-unavailable=25%' ensures 75% of instances remain online throughout the rolling reboot.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "ComputeEngine",
      "MIG",
      "RollingRestart"
    ],
    "id": "gcp-ace-193"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Creating Cloud SQL Databases and Managing Users via gcloud",
    "scenario": "A database administrator needs to provision a new relational database named 'analytics_db' inside an existing Cloud SQL PostgreSQL instance and create a dedicated database user 'etl_user' with password authentication without logging into the PostgreSQL psql shell.",
    "question": "Which pair of gcloud commands accomplishes this administration task?",
    "options": [
      {
        "id": "A",
        "text": "gcloud sql databases create analytics_db --instance=[INSTANCE] && gcloud sql users create etl_user --instance=[INSTANCE] --password=[PASSWORD]"
      },
      {
        "id": "B",
        "text": "gcloud sql instances patch [INSTANCE] --database=analytics_db --user=etl_user"
      },
      {
        "id": "C",
        "text": "gcloud compute ssh [INSTANCE] --command='createdb analytics_db && createuser etl_user'"
      },
      {
        "id": "D",
        "text": "gcloud sql export sql [INSTANCE] --database=analytics_db"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Google Cloud provides control plane management for databases and database user accounts. Running 'gcloud sql databases create &lt;DB&gt; --instance=&lt;INSTANCE&gt;' provisions the database, and 'gcloud sql users create &lt;USER&gt; --instance=&lt;INSTANCE&gt; --password=&lt;PASS&gt;' provisions the authentication credentials directly via the Google Cloud API.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudSQL",
      "DatabaseAdministration",
      "Security"
    ],
    "id": "gcp-ace-194"
  },
  {
    "difficulty": "hard",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Understanding Kubernetes Taints and Tolerations for Specialized Nodes",
    "scenario": "A GKE cluster includes a node pool with NVIDIA GPUs. General web pods with no GPU requirements are frequently scheduled on these expensive GPU nodes, exhausting capacity for machine learning training jobs.",
    "question": "How should the cluster administrator protect the GPU nodes from general pod scheduling?",
    "options": [
      {
        "id": "A",
        "text": "Apply a Kubernetes Taint to the GPU nodes (e.g. 'sku=gpu:NoSchedule') and add a matching Toleration only to the pod specs of the ML workloads"
      },
      {
        "id": "B",
        "text": "Deploy a VPC firewall rule blocking port 80 to GPU nodes"
      },
      {
        "id": "C",
        "text": "Set the CPU limit on general web pods to 100m"
      },
      {
        "id": "D",
        "text": "Convert the GPU node pool to an unmanaged instance group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Kubernetes Taints allow a node to repel a set of pods. Applying a taint like 'sku=gpu:NoSchedule' ensures that no pod can be scheduled on the GPU nodes unless the pod explicitly includes a matching 'toleration' in its manifest, keeping the nodes reserved exclusively for ML workloads.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "GKE",
      "TaintsTolerations",
      "Kubernetes"
    ],
    "id": "gcp-ace-195"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Inspecting Resource Utilization with kubectl top Nodes and Pods",
    "scenario": "An application in GKE becomes sluggish. An on-call engineer needs to quickly determine whether the bottleneck is due to CPU starvation across the cluster nodes or memory leakage within specific container pods.",
    "question": "Which commands display real-time CPU and memory consumption metrics directly in the terminal?",
    "options": [
      {
        "id": "A",
        "text": "kubectl top nodes and kubectl top pods"
      },
      {
        "id": "B",
        "text": "kubectl describe cluster"
      },
      {
        "id": "C",
        "text": "kubectl get pods -o jsonpath='{.items[*].status}'"
      },
      {
        "id": "D",
        "text": "gcloud compute instances list --show-metrics"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "The 'kubectl top nodes' command shows current CPU and RAM usage and percentages for each worker VM in the cluster, and 'kubectl top pods' displays CPU and memory consumption per pod. These commands communicate with the Kubernetes Metrics Server to fetch live utilization data.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "GKE",
      "kubectl",
      "Monitoring"
    ],
    "id": "gcp-ace-196"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Troubleshooting GKE Pods Using kubectl logs and exec",
    "scenario": "A microservice container in a pod named 'order-processor-xyz' fails to process incoming messages from Cloud Pub/Sub. The engineer needs to view the container's standard error console stream, and then inspect the container's local configuration files.",
    "question": "Which two kubectl commands should the engineer execute?",
    "options": [
      {
        "id": "A",
        "text": "kubectl logs order-processor-xyz to view output, and kubectl exec -it order-processor-xyz -- /bin/sh to open a shell inside the container"
      },
      {
        "id": "B",
        "text": "kubectl describe node to view logs, and ssh order-processor-xyz to access files"
      },
      {
        "id": "C",
        "text": "gcloud logging read to view files, and kubectl port-forward to edit config"
      },
      {
        "id": "D",
        "text": "kubectl attach to reboot the pod, and kubectl edit deployment to view logs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "'kubectl logs &lt;POD&gt;' prints the stdout and stderr streams of the container, revealing application crash stacks or runtime warnings. 'kubectl exec -it &lt;POD&gt; -- /bin/sh' opens an interactive debugging shell directly inside the container environment to inspect files, environment variables, and network connectivity.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "GKE",
      "kubectl",
      "Debugging"
    ],
    "id": "gcp-ace-197"
  },
  {
    "difficulty": "easy",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Accelerating Multi-Gigabyte Uploads with Parallel Composite Uploads",
    "scenario": "A research lab routinely uploads 100 GB genomic dataset files to Google Cloud Storage from a high-bandwidth workstation. Uploads currently take hours because single-stream HTTP transfers fail to saturate the 10 Gbps network connection.",
    "question": "Which upload optimization splits large files into chunks and uploads them in parallel streams?",
    "options": [
      {
        "id": "A",
        "text": "Enable parallel composite uploads in gcloud storage or gsutil configuration"
      },
      {
        "id": "B",
        "text": "Compress the files with zip before uploading"
      },
      {
        "id": "C",
        "text": "Upload files to BigQuery and export to Cloud Storage"
      },
      {
        "id": "D",
        "text": "Increase the persistent disk IOPS on the local workstation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Parallel composite uploads split large files (typically >150 MB) into multiple chunks, upload the chunks simultaneously in parallel streams across Google's high-speed network, and merge the chunks into a single composite object in the destination bucket, fully saturating available bandwidth.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudStorage",
      "ParallelUploads",
      "Performance"
    ],
    "id": "gcp-ace-198"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Configuring Cloud Monitoring Uptime Checks for Global Endpoint Verification",
    "scenario": "An enterprise web portal must be monitored for worldwide availability. The SRE team wants automated tests to hit 'https://portal.company.com/health' every 60 seconds from multiple geographic continents and trigger an alert if the endpoint returns any HTTP code other than 200.",
    "question": "Which Cloud Monitoring feature implements this synthetic monitoring?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Monitoring Uptime Checks"
      },
      {
        "id": "B",
        "text": "Cloud Profiler latency traces"
      },
      {
        "id": "C",
        "text": "Cloud Trace waterfall analysis"
      },
      {
        "id": "D",
        "text": "VPC Flow Logs sampling"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud Monitoring Uptime Checks perform automated external synthetic testing against web endpoints from servers distributed across North America, Europe, South America, and Asia-Pacific. They track availability, SSL certificate validity, and response latency, integrating directly with alerting policies.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudMonitoring",
      "UptimeChecks",
      "Reliability"
    ],
    "id": "gcp-ace-199"
  },
  {
    "difficulty": "medium",
    "certId": "gcp-ace",
    "domainId": "d4",
    "domainName": "Ensuring successful operation of a cloud solution",
    "title": "Managing Cloud SQL Maintenance Windows to Minimize Business Impact",
    "scenario": "A multinational corporation runs international operations with lowest customer usage on Sundays between 02:00 and 06:00 UTC. The database administrator needs to schedule Cloud SQL planned maintenance restarts strictly within this four-hour window.",
    "question": "How can the administrator configure this maintenance schedule?",
    "options": [
      {
        "id": "A",
        "text": "Set the Cloud SQL instance Maintenance Window to Sunday between 02:00 and 06:00 UTC"
      },
      {
        "id": "B",
        "text": "Schedule a Cloud Function to stop the instance at 02:00 on Sunday"
      },
      {
        "id": "C",
        "text": "Disable all Google Cloud maintenance on the project"
      },
      {
        "id": "D",
        "text": "Set the instance tier to db-custom-1-3840 during weekends"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "type": "single",
    "explanation": "Cloud SQL allows configuring a custom 'Maintenance Window' specifying the day of the week and hour of the day when Google Cloud is permitted to apply software updates and perform instance restarts, keeping maintenance confined to low-traffic periods.",
    "referenceUrl": "https://cloud.google.com/docs",
    "tags": [
      "CloudSQL",
      "MaintenanceWindow",
      "Administration"
    ],
    "id": "gcp-ace-200"
  }
];

export default GCP_ACE_QUESTIONS_8;
