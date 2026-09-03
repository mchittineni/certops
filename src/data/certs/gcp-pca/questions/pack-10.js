export const GCP_PCA_QUESTIONS_10 = [
  {
    id: "gcp-pca-226",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks for Synthetic Endpoint Probing",
    scenario: "An operations engineer needs to verify that a public web service deployed on GKE is responding with HTTP 200 within 5 seconds from 5 global locations every 1 minute.",
    question: "Which Cloud Monitoring feature performs external synthetic availability probes from global points of presence?",
    options: [
      { id: 'A', text: "Cloud Monitoring Uptime Checks" },
      { id: 'B', text: "Cloud Logging log-based alerts" },
      { id: 'C', text: "VPC Flow Logs" },
      { id: 'D', text: "Compute Engine instance health checks alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Monitoring Uptime Checks` test the availability of externally accessible services (URLs, IP addresses, load balancers) from multiple geographic probing locations worldwide at regular intervals (e.g. every 1, 5, or 15 minutes), validating status codes, response latency, and content matches.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Monitoring", "Uptime Checks", "Synthetic Monitoring"]
  },
  {
    id: "gcp-pca-227",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Logging Log-Based Metrics: Counter vs Distribution Metrics",
    scenario: "A developer needs to create an alert whenever the application logs more than 50 HTTP 500 errors in 5 minutes, and also wants to measure and graph the 99th percentile of database query latencies extracted from log strings.",
    question: "Which two log-based metric types should the developer create respectively?",
    options: [
      { id: 'A', text: "Counter metrics for both requirements" },
      { id: 'B', text: "Distribution metric for errors; Counter metric for latencies" },
      { id: 'C', text: "Distribution metrics for both requirements" },
      { id: 'D', text: "Counter metric for counting error occurrences; Distribution metric for extracting numerical latencies into percentiles" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Logging supports two types of `Log-Based Metrics`: `Counter metrics` (count the number of log entries matching a filter expression, ideal for error counts) and `Distribution metrics` (extract numeric values from regex/JSON fields into histogram distributions to compute percentiles like p50, p95, p99).",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Cloud Logging", "Log-Based Metrics", "Observability"]
  },
  {
    id: "gcp-pca-228",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Logging Log Exclusion Filters for Cost Optimization",
    scenario: "A high-traffic web application logs millions of verbose health check requests (`GET /health`) every hour. The logs provide no operational value and are driving up Cloud Logging ingestion costs.",
    question: "Which Cloud Logging feature discards specific log entries before they are ingested and billed?",
    options: [
      { id: 'A', text: "Cloud Trace exclusion rules" },
      { id: 'B', text: "VPC Firewall Rules" },
      { id: 'C', text: "Deleting logs manually after ingestion" },
      { id: 'D', text: "Log Exclusion Filters on the _Default log sink" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Logging `Log Exclusion Filters` allow organizations to define filter expressions (e.g. `httpRequest.requestUrl = \"/health\"`) on log sinks (such as `_Default`). Matching logs are excluded and dropped before ingestion, eliminating log storage charges while allowing sample percentages if desired.",
    referenceUrl: "https://cloud.google.com/logging/docs/exclusions",
    tags: ["Cloud Logging", "Log Exclusions", "Cost Optimization"]
  },
  {
    id: "gcp-pca-229",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Trace for Distributed Microservice Latency Diagnostics",
    scenario: "An e-commerce transaction spans 5 microservices across GKE, Cloud Functions, and an external payment gateway. End-to-end checkout latency spikes to 8 seconds.",
    question: "Which Google Cloud observability service collects distributed trace spans and visualizes RPC waterfall diagrams to locate the exact bottleneck?",
    options: [
      { id: 'A', text: "Cloud Trace" },
      { id: 'B', text: "Cloud Logging alone" },
      { id: 'C', text: "Cloud Profiler" },
      { id: 'D', text: "Cloud Monitoring Metrics Explorer alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Trace` is a distributed tracing system that collects latency data from microservice applications. It generates visual waterfall timeline diagrams showing how long requests spend in each downstream service, RPC call, and database query, pinpointing latency bottlenecks instantly.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Cloud Trace", "Distributed Tracing", "Latency Optimization"]
  },
  {
    id: "gcp-pca-230",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Profiler for Continuous Low-Overhead Production Profiling",
    scenario: "A Go microservice deployed on Compute Engine experiences unexpected CPU spikes in production. The developer needs to identify which specific code functions and memory allocations consume the most CPU without degrading production performance.",
    question: "Which Google Cloud tool continuously captures CPU and heap memory profiles with sub-1% execution overhead?",
    options: [
      { id: 'A', text: "Cloud Profiler" },
      { id: 'B', text: "Cloud Trace" },
      { id: 'C', text: "Cloud Debugger legacy" },
      { id: 'D', text: "Cloud Monitoring CPU metric alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Cloud Profiler` is a continuous profiling tool that analyzes the execution of CPU and memory-intensive functions in production applications. It uses statistical sampling to capture call trees and flame graphs with less than 1% CPU overhead, identifying optimization opportunities in live production.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Cloud Profiler", "Flame Graphs", "Performance Tuning"]
  },
  {
    id: "gcp-pca-231",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Alert Policies: Threshold vs Metric Absence vs Rate of Change",
    scenario: "A mission-critical payment worker receives messages from Cloud Pub/Sub. If no messages are acknowledged for 10 consecutive minutes, the on-call engineer must be paged for pipeline failure.",
    question: "Which Cloud Monitoring alert condition type detects when an expected metric stream stops emitting data?",
    options: [
      { id: 'A', text: "Metric Absence condition (alerts when data is absent for 10 minutes)" },
      { id: 'B', text: "Threshold condition (metric > 0)" },
      { id: 'C', text: "Metric Rate of Change condition" },
      { id: 'D', text: "Log-based counter condition alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Monitoring `Metric Absence` alert conditions trigger an incident when a time series stops reporting data for a specified duration (e.g. 10 minutes), detecting stopped pipelines, crashed background daemons, and severed telemetry streams that would not trigger standard value threshold alerts.",
    referenceUrl: "https://cloud.google.com/monitoring/alerts/types-of-conditions#absence",
    tags: ["Cloud Monitoring", "Alerting", "Metric Absence"]
  },
  {
    id: "gcp-pca-232",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Notification Channels and Multi-Channel Alerting",
    scenario: "When a high-severity production outage occurs, Cloud Monitoring must simultaneously notify on-call engineers via PagerDuty, send an alert to a team Slack channel, and post a payload to an automated remediation webhook.",
    question: "Which Cloud Monitoring resource manages destination targets for alert notifications?",
    options: [
      { id: 'A', text: "Alert Routing Tables" },
      { id: 'B', text: "Log Sinks" },
      { id: 'C', text: "Notification Channels (Email, Slack, PagerDuty, Webhooks)" },
      { id: 'D', text: "Action Groups (Azure term)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Notification Channels` define the delivery mechanisms for Cloud Monitoring alerts. Supported channels include Email, Slack, PagerDuty, SMS, Webhooks, and Google Cloud Mobile App, allowing incidents to fan out to multiple communication systems automatically.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Cloud Monitoring", "Notification Channels", "Incident Response"]
  },
  {
    id: "gcp-pca-233",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Error Reporting for Automated Exception Aggregation and Alerting",
    scenario: "A Python application deployed across 50 GKE pods throws unhandled `ZeroDivisionError` exceptions. The developer needs exceptions grouped automatically into actionable incident issues with stack traces.",
    question: "Which Google Cloud service aggregates application crashes and sends real-time notifications for new errors?",
    options: [
      { id: 'A', text: "Cloud Logging standard viewer alone" },
      { id: 'B', text: "Cloud Profiler" },
      { id: 'C', text: "Cloud Trace" },
      { id: 'D', text: "Cloud Error Reporting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Error Reporting` aggregates and analyzes crashes and unhandled exceptions in running cloud services. It parses stack traces, groups duplicate errors into single issues, tracks frequency, and alerts developers when a new, previously unseen error pattern appears in production.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs/overview",
    tags: ["Error Reporting", "Crash Analytics", "Observability"]
  },
  {
    id: "gcp-pca-234",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Support Tiers: Standard vs Enhanced vs Premium",
    scenario: "An enterprise organization running global payment infrastructure requires 15-minute response times for critical P1 outages 24/7, a designated Technical Account Manager (TAM), and mission-critical event support.",
    question: "Which Google Cloud Customer Care support tier includes a Technical Account Manager (TAM) and 15-minute P1 response times?",
    options: [
      { id: 'A', text: "Basic Support (free billing support only)" },
      { id: 'B', text: "Premium Support" },
      { id: 'C', text: "Standard Support (4 hour P1 response)" },
      { id: 'D', text: "Enhanced Support (1 hour P1 response, no TAM)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Cloud `Premium Support` is designed for mission-critical enterprise workloads. It provides 15-minute response times for critical P1 cases 24/7, an assigned Technical Account Manager (TAM), event management support, and proactive architectural reviews.",
    referenceUrl: "https://cloud.google.com/support#support-offerings",
    tags: ["Customer Care", "Support Tiers", "Enterprise Support"]
  },
  {
    id: "gcp-pca-235",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Personalized Service Health vs Public Cloud Status Dashboard",
    scenario: "A cloud operations team suspects an infrastructure outage in region `us-east1` is affecting their Compute Engine VMs.",
    question: "Where should the team look for project-specific, personalized impact alerts rather than generic public status pages?",
    options: [
      { id: 'A', text: "Public Google Cloud Status Dashboard (status.cloud.google.com)" },
      { id: 'B', text: "Twitter/X social media feeds" },
      { id: 'C', text: "Personalized Service Health (in the Google Cloud console)" },
      { id: 'D', text: "Local ping tests alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Personalized Service Health` provides customized, real-time status updates specific to the customer's active projects, regions, and resources. Unlike the public Google Cloud Status Dashboard which reports broad platform outages, Service Health delivers tailored alerts on localized incidents affecting specific projects.",
    referenceUrl: "https://cloud.google.com/service-health/docs/overview",
    tags: ["Service Health", "Incident Management", "Cloud Status"]
  },
  {
    id: "gcp-pca-236",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Monitoring Query Language (MQL) for Advanced Calculations",
    scenario: "A DevOps engineer needs to write an alert query that calculates the ratio of HTTP 5XX server errors to total incoming HTTP requests over 5-minute rolling windows.",
    question: "Which query language in Cloud Monitoring provides expressive mathematical ratios, joins, and time-shift evaluations?",
    options: [
      { id: 'A', text: "Kusto Query Language (KQL)" },
      { id: 'B', text: "SQL-92 alone" },
      { id: 'C', text: "Monitoring Query Language (MQL) / PromQL in Cloud Monitoring" },
      { id: 'D', text: "Bash scripting" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Monitoring Query Language` (MQL) is a powerful, expressive query language for Cloud Monitoring time series data. It supports operations like ratios, unions, joins, rolling aggregations, and comparisons across disparate metric streams that cannot be expressed in basic UI metric builders.",
    referenceUrl: "https://cloud.google.com/monitoring/mql",
    tags: ["Cloud Monitoring", "MQL", "Metric Analytics"]
  },
  {
    id: "gcp-pca-237",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Autoscaling Cool-Down (Warm-Up) Periods in Compute Engine MIGs",
    scenario: "A web application on a Compute Engine Managed Instance Group (MIG) takes 3 minutes to warm up its local cache upon instance boot. The autoscaler repeatedly adds unnecessary instances because newly booted VMs report high CPU during initial cache loading.",
    question: "Which autoscaling parameter prevents the autoscaler from evaluating metric data while instances are initializing?",
    options: [
      { id: 'A', text: "Initialization period (Cool-down period / Warm-up period)" },
      { id: 'B', text: "Target CPU utilization" },
      { id: 'C', text: "Maximum instance count" },
      { id: 'D', text: "Scale-in control alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Initialization period` (cool-down period) specifies how long an instance takes to boot, configure, and warm up (e.g. 180 seconds). During this period, the autoscaler ignores resource consumption metrics from the initializing VM, preventing premature scaling decisions.",
    referenceUrl: "https://cloud.google.com/compute/docs/autoscaler/general-guidelines#initialization_period",
    tags: ["Compute Engine", "MIG Autoscaling", "Cool-Down Period"]
  },
  {
    id: "gcp-pca-238",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Compute Engine Autoscaling Scale-In Controls for Stability",
    scenario: "A web service experiences brief traffic dips that cause the Managed Instance Group to terminate instances, only to immediately recreate them when traffic rebounds 2 minutes later (flapping).",
    question: "Which autoscaling feature stabilizes capacity by capping the rate at which instances are terminated?",
    options: [
      { id: 'A', text: "Scale-In Controls (stabilization window)" },
      { id: 'B', text: "Scale-Out Controls" },
      { id: 'C', text: "Health Check interval" },
      { id: 'D', text: "Target CPU utilization" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Scale-in controls` stabilize capacity changes by introducing a `stabilization window` (e.g. 10 minutes) and setting a maximum termination rate (e.g. max 2 instances per minute). The autoscaler evaluates the peak capacity needed during the stabilization window, preventing thrashing and premature scale-in.",
    referenceUrl: "https://cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-controls#scale_in_controls",
    tags: ["Compute Engine", "MIG Autoscaling", "Scale-In Controls"]
  },
  {
    id: "gcp-pca-239",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "GKE Graceful Node Taints and Node Termination Drainage",
    scenario: "When an automated GKE cluster node upgrade occurs, active pods running long-running batch tasks are abruptly terminated without notice.",
    question: "Which Kubernetes command cordons a node and evicts running pods gracefully before node deletion?",
    options: [
      { id: 'A', text: "kubectl scale deployment --replicas=0" },
      { id: 'B', text: "kubectl cordon alone" },
      { id: 'C', text: "kubectl delete node immediately" },
      { id: 'D', text: "kubectl drain (with graceful termination periods)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`kubectl drain` safely evicts all running pods from a node before taking it down for maintenance. It marks the node unschedulable (`cordon`) and allows pods to honor their `terminationGracePeriodSeconds` to finish in-flight requests or commit state cleanly.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["GKE", "kubectl drain", "Graceful Termination"]
  },
  {
    id: "gcp-pca-240",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Pod Disruption Budgets (PDB) for Guaranteed High Availability",
    scenario: "During automated GKE node pool upgrades, multiple nodes are drained simultaneously, causing all replicas of a critical payment service to be evicted at the same moment.",
    question: "Which Kubernetes resource defines the minimum number of concurrent available replicas that must be maintained during voluntary disruptions?",
    options: [
      { id: 'A', text: "ResourceQuota" },
      { id: 'B', text: "HorizontalPodAutoscaler" },
      { id: 'C', text: "LimitRange" },
      { id: 'D', text: "PodDisruptionBudget (PDB)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be down simultaneously during voluntary disruptions (such as node upgrades, draining, or cluster autoscaling), ensuring serving availability never drops below business thresholds (e.g. `minAvailable: 2`).",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/configure-pdb/",
    tags: ["GKE", "PodDisruptionBudget", "High Availability"]
  },
  {
    id: "gcp-pca-241",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Alert Snoozing for Planned Maintenance",
    scenario: "A database team performs scheduled schema migrations on a primary Cloud SQL instance on Saturday night. The team must temporarily silence alert policies for 2 hours to avoid paging the on-call engineer.",
    question: "Which Cloud Monitoring feature silences alert notifications during scheduled maintenance windows?",
    options: [
      { id: 'A', text: "Snooze (Alert Snooze)" },
      { id: 'B', text: "Deleting the alert policy" },
      { id: 'C', text: "Removing notification channels" },
      { id: 'D', text: "Disabling Cloud Logging" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Monitoring `Snooze` allows operators to temporarily silence notifications for specific alert policies for a designated duration (e.g. 2 hours during maintenance). The system continues evaluating metrics and tracking incidents, but notification channels are suppressed.",
    referenceUrl: "https://cloud.google.com/monitoring/alerts/snooze",
    tags: ["Cloud Monitoring", "Snooze", "Maintenance"]
  },
  {
    id: "gcp-pca-242",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Logging Log Buckets and Custom Retention Periods",
    scenario: "A financial compliance audit mandates that security and audit logs must be retained for 10 years, while high-volume debug application logs should be deleted after 14 days.",
    question: "Where are custom log retention durations configured in Google Cloud?",
    options: [
      { id: 'A', text: "In Cloud Storage lifecycle rules alone" },
      { id: 'B', text: "In VPC Subnet properties" },
      { id: 'C', text: "In Cloud Logging Log Buckets (retentionDays setting)" },
      { id: 'D', text: "In Compute Engine instance templates" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Logging stores logs in `Log Buckets` (such as `_Default` and `_Required`, or custom log buckets). Administrators can configure `retentionDays` (from 1 to 3,650 days / 10 years) per log bucket, routing different log types to dedicated buckets with customized retention schedules.",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/manage-buckets",
    tags: ["Cloud Logging", "Log Buckets", "Data Retention"]
  },
  {
    id: "gcp-pca-243",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Custom Dashboards and Shared Views",
    scenario: "An enterprise SRE team requires a unified operational dashboard displaying real-time GKE pod CPU, Cloud SQL replication lag, and Cloud Load Balancing HTTP 5XX error rates on a single glass pane.",
    question: "Which Google Cloud tool builds multi-service operational visualization dashboards?",
    options: [
      { id: 'A', text: "Cloud Trace" },
      { id: 'B', text: "Looker Studio alone" },
      { id: 'C', text: "Cloud Profiler" },
      { id: 'D', text: "Cloud Monitoring Custom Dashboards" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Cloud Monitoring Custom Dashboards` allow engineering teams to build, customize, and share interactive dashboards combining metric charts, logs, incident tables, and SLO widgets across diverse Google Cloud services in a single unified view.",
    referenceUrl: "https://cloud.google.com/monitoring/dashboards",
    tags: ["Cloud Monitoring", "Dashboards", "SRE Operations"]
  },
  {
    id: "gcp-pca-244",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Load Balancing Session Affinity for Sticky Connections",
    scenario: "A legacy web application requires client HTTP requests from the same user session to be routed consistently to the same backend Compute Engine VM instance.",
    question: "Which backend service configuration enables sticky sessions based on client IP or cookies?",
    options: [
      { id: 'A', text: "Session Affinity (e.g. Client IP affinity or Generated Cookie affinity)" },
      { id: 'B', text: "Round-robin load balancing" },
      { id: 'C', text: "Cross-region failover" },
      { id: 'D', text: "Cloud CDN caching" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Load Balancing supports `Session Affinity`. Configuring session affinity (such as `GENERATED_COOKIE` or `CLIENT_IP`) directs subsequent requests from the same client to the same backend instance as long as that instance remains healthy.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/backend-service#session_affinity",
    tags: ["Load Balancing", "Session Affinity", "Sticky Sessions"]
  },
  {
    id: "gcp-pca-245",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Compute Engine Auto-Healing Health Checks for Unresponsive VMs",
    scenario: "A web server process running on a Compute Engine VM in a Managed Instance Group crashes and stops responding to HTTP requests, but the VM instance itself remains powered on.",
    question: "Which Managed Instance Group capability detects application-level unresponsiveness and automatically restarts or recreates the VM?",
    options: [
      { id: 'A', text: "MIG Auto-healing (with an application health check)" },
      { id: 'B', text: "Compute Engine host live migration" },
      { id: 'C', text: "OS Login" },
      { id: 'D', text: "Shielded VM integrity monitoring" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Managed Instance Groups support `Auto-healing`. By attaching an application health check (probing e.g. `HTTP:80/health`), the MIG automatically recreates or restarts instances that fail consecutive health checks, even if the underlying VM operating system is running.",
    referenceUrl: "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    tags: ["Compute Engine", "MIG", "Auto-Healing"]
  },
  {
    id: "gcp-pca-246",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "GKE Liveness vs Readiness Probes for Pod Lifecycle",
    scenario: "A backend container in GKE takes 45 seconds to initialize database connections upon startup. During this boot window, the service must not receive traffic. If the container enters a deadlock later, it must be restarted.",
    question: "Which two Kubernetes probes handle startup readiness and deadlock recovery respectively?",
    options: [
      { id: 'A', text: "Readiness probe (removes pod from Service endpoints until ready); Liveness probe (restarts pod if deadlocked)" },
      { id: 'B', text: "Liveness probe for traffic; Readiness probe for restart" },
      { id: 'C', text: "Liveness probes handle both requirements" },
      { id: 'D', text: "Readiness probes handle both requirements" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes `Readiness probes` determine if a container is ready to accept user traffic; failing a readiness probe removes the pod from Service load balancer endpoints without restarting it. `Liveness probes` determine if the container is healthy; failing a liveness probe causes the kubelet to restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["GKE", "Probes", "Pod Lifecycle"]
  },
  {
    id: "gcp-pca-247",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Synthetic Monitoring via Cloud Functions and Cloud Monitoring",
    scenario: "An enterprise requires end-to-end synthetic monitoring of a complex 3-step checkout flow (login -> add to cart -> checkout) every 5 minutes.",
    question: "Which Google Cloud solution implements automated multi-step synthetic user transactions?",
    options: [
      { id: 'A', text: "Cloud Monitoring Synthetic Monitors (using Mocha/Puppeteer in Cloud Functions)" },
      { id: 'B', text: "Standard URL Uptime Check alone" },
      { id: 'C', text: "VPC Flow Logs" },
      { id: 'D', text: "Cloud Profiler" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Monitoring supports `Synthetic Monitors`. Synthetic monitors run custom Node.js scripts (using Mocha framework and Puppeteer headless browser) inside Google Cloud Functions, simulating real multi-step user journeys and validating DOM elements and response timings.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks/synthetic-monitors",
    tags: ["Cloud Monitoring", "Synthetic Monitors", "Puppeteer"]
  },
  {
    id: "gcp-pca-248",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Alert Policies: Incident Auto-Close Duration",
    scenario: "A transient network blip triggers an alert incident in Cloud Monitoring. The issue resolves within 30 seconds, but the incident remains open in the dashboard.",
    question: "Which Cloud Monitoring alert policy setting automatically closes incidents when metric data ceases to violate the condition?",
    options: [
      { id: 'A', text: "Notification Channel interval" },
      { id: 'B', text: "MQL query timeout" },
      { id: 'C', text: "Incident Auto-Close Duration" },
      { id: 'D', text: "Log sink retention" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Monitoring alert policies include an `Incident Auto-Close` setting (configurable from 30 minutes to 7 days). If an incident remains open because no new metric data arrives to prove resolution, Cloud Monitoring automatically marks the incident as closed after the specified duration.",
    referenceUrl: "https://cloud.google.com/monitoring/alerts/concepts-indepth#auto-close",
    tags: ["Cloud Monitoring", "Alerting", "Incident Management"]
  },
  {
    id: "gcp-pca-249",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "BigQuery Query Execution Plan and Diagnostic Explain Output",
    scenario: "A data analyst runs a BigQuery SQL query that runs for 45 minutes and consumes 10,000 slot-seconds. The team needs to analyze stage-by-stage execution times, input/output records, and shuffle bottlenecks.",
    question: "Which BigQuery feature visualizes the query execution graph and operational statistics per stage?",
    options: [
      { id: 'A', text: "BigQuery Execution Plan (EXPLAIN)" },
      { id: 'B', text: "Cloud Trace alone" },
      { id: 'C', text: "BigQuery BI Engine" },
      { id: 'D', text: "Cloud Monitoring alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BigQuery generates a detailed `Execution Plan` (accessible in the console or via `EXPLAIN`). It visualizes the multi-stage Dremel execution graph, showing slot computation time, wait time, read/write record counts, and shuffle spillage, pinpointing data skew and expensive joins.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/query-plan-explanation",
    tags: ["BigQuery", "Execution Plan", "Query Tuning"]
  },
  {
    id: "gcp-pca-250",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Spanner High CPU Utilization Diagnostics (Priority vs Split)",
    scenario: "A Cloud Spanner instance reports 95% CPU utilization. The database administrator needs to identify which specific top queries and lock conflicts are responsible for the high load.",
    question: "Which built-in Cloud Spanner introspection tables provide query statistics and lock contention diagnostics?",
    options: [
      { id: 'A', text: "Compute Engine metrics" },
      { id: 'B', text: "BigQuery information schema alone" },
      { id: 'C', text: "SPANNER_SYS tables (e.g. SPANNER_SYS.QUERY_STATS_TOP_MINUTE and LOCK_STATS)" },
      { id: 'D', text: "Cloud Logging standard logs alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Spanner provides built-in introspection tables under the `SPANNER_SYS` schema (e.g. `QUERY_STATS_TOP_MINUTE`, `LOCK_STATS_TOP_MINUTE`, `TRANSACTION_STATS`). Querying these tables allows administrators to identify the exact SQL queries consuming the most CPU and pinpoint row lock conflicts.",
    referenceUrl: "https://cloud.google.com/spanner/docs/introspection-intro",
    tags: ["Spanner", "Introspection", "SPANNER_SYS"]
  }
];

export default GCP_PCA_QUESTIONS_10;
