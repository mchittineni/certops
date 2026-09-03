export const GCP_PCA_FLASHCARDS_10 = [
  {
    id: "gcp-pca-fc-226",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Uptime Checks",
    hint: "Global synthetic endpoint probing.",
    back: "<strong>Cloud Monitoring Uptime Checks</strong> probe public endpoints from global geographic locations to verify service uptime, response time, and SSL validity.",
    tags: ["Cloud Monitoring", "Uptime Checks", "Synthetic Monitoring"]
  },
  {
    id: "gcp-pca-fc-227",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Log-Based Metrics: Counter vs. Distribution",
    hint: "Counting occurrences vs measuring percentiles.",
    back: "Create <strong>Counter metrics</strong> to track error counts, and <strong>Distribution metrics</strong> to extract numeric timings for p95/p99 latency calculations.",
    tags: ["Cloud Logging", "Log-Based Metrics", "Observability"]
  },
  {
    id: "gcp-pca-fc-228",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Logging: Exclusion Filters",
    hint: "Discarding noisy logs before ingestion billing.",
    back: "Configure <strong>Log Exclusion Filters</strong> on sinks to drop high-volume, low-value logs (e.g. health checks) before ingestion, saving substantial logging costs.",
    tags: ["Cloud Logging", "Log Exclusions", "Cost Optimization"]
  },
  {
    id: "gcp-pca-fc-229",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Trace: Distributed Latency Profiling",
    hint: "Visualizing RPC waterfall call trees.",
    back: "<strong>Cloud Trace</strong> tracks distributed requests across microservices, rendering waterfall diagrams to pinpoint the exact service or database causing latency.",
    tags: ["Cloud Trace", "Distributed Tracing", "Latency Optimization"]
  },
  {
    id: "gcp-pca-fc-230",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Profiler: Continuous Production Profiling",
    hint: "Identifying expensive code functions with flame graphs.",
    back: "<strong>Cloud Profiler</strong> continuously profiles CPU and heap memory allocations in production with &lt; 1% overhead, using flame graphs to expose slow code methods.",
    tags: ["Cloud Profiler", "Flame Graphs", "Performance Tuning"]
  },
  {
    id: "gcp-pca-fc-231",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Metric Absence Alerts",
    hint: "Alerting when critical data streams stop emitting.",
    back: "Use <strong>Metric Absence conditions</strong> in alert policies to page on-call teams when expected heartbeat or message telemetry stops reporting completely.",
    tags: ["Cloud Monitoring", "Alerting", "Metric Absence"]
  },
  {
    id: "gcp-pca-fc-232",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Notification Channels",
    hint: "Routing alerts to Slack, PagerDuty, and webhooks.",
    back: "Configure <strong>Notification Channels</strong> in Cloud Monitoring to dispatch incident notifications to Slack, PagerDuty, and automated webhooks simultaneously.",
    tags: ["Cloud Monitoring", "Notification Channels", "Incident Response"]
  },
  {
    id: "gcp-pca-fc-233",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Error Reporting: Exception Aggregation",
    hint: "Grouping application crashes and stack traces.",
    back: "<strong>Cloud Error Reporting</strong> aggregates unhandled exceptions, deduping crashes into unified issues and alerting teams when new errors surface.",
    tags: ["Error Reporting", "Crash Analytics", "Observability"]
  },
  {
    id: "gcp-pca-fc-234",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Google Cloud Support Tiers: Premium Support",
    hint: "15-minute P1 SLA and Technical Account Manager.",
    back: "<strong>Premium Support</strong> delivers 15-minute response times for P1 incidents 24/7 and an assigned <strong>Technical Account Manager (TAM)</strong> for mission-critical operations.",
    tags: ["Customer Care", "Support Tiers", "Enterprise Support"]
  },
  {
    id: "gcp-pca-fc-235",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Personalized Service Health: Project-Specific Outage Telemetry",
    hint: "Targeted impact alerts.",
    back: "Check <strong>Personalized Service Health</strong> for project-specific outage alerts and active disruptions affecting your specific resources and regions.",
    tags: ["Service Health", "Incident Management", "Cloud Status"]
  },
  {
    id: "gcp-pca-fc-236",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Monitoring Query Language (MQL)",
    hint: "Advanced mathematical metric queries.",
    back: "Use <strong>Monitoring Query Language (MQL)</strong> to execute complex time-series operations, such as computing error ratios or joining disparate metric streams.",
    tags: ["Cloud Monitoring", "MQL", "Metric Analytics"]
  },
  {
    id: "gcp-pca-fc-237",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "MIG Autoscaling: Initialization (Cool-Down) Period",
    hint: "Preventing premature scaling during warm-up.",
    back: "Set the <strong>Initialization period (cool-down)</strong> to match instance boot time, ensuring the autoscaler ignores metrics from initializing VMs.",
    tags: ["Compute Engine", "MIG Autoscaling", "Cool-Down Period"]
  },
  {
    id: "gcp-pca-fc-238",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "MIG Autoscaling: Scale-In Controls",
    hint: "Stabilizing capacity and preventing flapping.",
    back: "Configure <strong>Scale-in controls and stabilization windows</strong> to prevent rapid VM deletion cycles during temporary load drops.",
    tags: ["Compute Engine", "MIG Autoscaling", "Scale-In Controls"]
  },
  {
    id: "gcp-pca-fc-239",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "GKE Node Maintenance: kubectl drain",
    hint: "Evicting pods gracefully during node upgrades.",
    back: "Execute <strong>kubectl drain</strong> before node upgrades to safely evict pods and respect application termination grace periods.",
    tags: ["GKE", "kubectl drain", "Graceful Termination"]
  },
  {
    id: "gcp-pca-fc-240",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "GKE: Pod Disruption Budgets (PDB)",
    hint: "Guaranteeing minimum available replicas during upgrades.",
    back: "Define a <strong>PodDisruptionBudget (PDB)</strong> to prevent automated cluster upgrades or node draining from evicting too many pod replicas at once.",
    tags: ["GKE", "PodDisruptionBudget", "High Availability"]
  },
  {
    id: "gcp-pca-fc-241",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Alert Snooze",
    hint: "Silencing alerts during scheduled maintenance.",
    back: "Use <strong>Alert Snooze</strong> to suppress paging notifications during planned maintenance windows without deleting or disabling alerting rules.",
    tags: ["Cloud Monitoring", "Snooze", "Maintenance"]
  },
  {
    id: "gcp-pca-fc-242",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Logging: Custom Log Buckets",
    hint: "Tailoring log retention schedules per bucket.",
    back: "Configure <strong>retentionDays on dedicated Log Buckets</strong> to enforce granular retention policies (e.g. 10 years for audit logs, 14 days for debug logs).",
    tags: ["Cloud Logging", "Log Buckets", "Data Retention"]
  },
  {
    id: "gcp-pca-fc-243",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Custom Dashboards",
    hint: "Single-pane-of-glass operational telemetry.",
    back: "Build <strong>Custom Dashboards in Cloud Monitoring</strong> to combine metrics from GKE, Cloud SQL, and Load Balancers into unified operational views.",
    tags: ["Cloud Monitoring", "Dashboards", "SRE Operations"]
  },
  {
    id: "gcp-pca-fc-244",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Load Balancing: Session Affinity",
    hint: "Sticky session routing for stateful legacy apps.",
    back: "Enable <strong>Session Affinity</strong> on backend services to route repeat client requests to the same backend instance via cookies or IP hashes.",
    tags: ["Load Balancing", "Session Affinity", "Sticky Sessions"]
  },
  {
    id: "gcp-pca-fc-245",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "MIG Auto-Healing: Application-Level Recovery",
    hint: "Automated VM recreation on health check failure.",
    back: "Attach an application health check to a MIG to enable <strong>Auto-healing</strong>, automatically recreating VMs when application services become unresponsive.",
    tags: ["Compute Engine", "MIG", "Auto-Healing"]
  },
  {
    id: "gcp-pca-fc-246",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "GKE: Liveness vs. Readiness Probes",
    hint: "Restarting deadlocks vs gating traffic.",
    back: "<strong>Readiness probes</strong> withhold traffic until initialization completes; <strong>Liveness probes</strong> detect deadlocks and restart failing containers.",
    tags: ["GKE", "Probes", "Pod Lifecycle"]
  },
  {
    id: "gcp-pca-fc-247",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Synthetic Monitors",
    hint: "Simulating multi-step headless browser transactions.",
    back: "Deploy <strong>Synthetic Monitors</strong> powered by Cloud Functions and Puppeteer to simulate complex multi-step browser user journeys.",
    tags: ["Cloud Monitoring", "Synthetic Monitors", "Puppeteer"]
  },
  {
    id: "gcp-pca-fc-248",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Monitoring: Incident Auto-Close",
    hint: "Preventing orphaned open incidents.",
    back: "Configure <strong>Incident Auto-Close Duration</strong> to automatically close stale or resolved incidents when condition criteria are no longer violated.",
    tags: ["Cloud Monitoring", "Alerting", "Incident Management"]
  },
  {
    id: "gcp-pca-fc-249",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    front: "BigQuery: Query Execution Plan (EXPLAIN)",
    hint: "Diagnosing slow SQL stages and data skew.",
    back: "Inspect the <strong>BigQuery Execution Plan</strong> to analyze stage-by-stage compute, wait, and shuffle metrics to eliminate query bottlenecks.",
    tags: ["BigQuery", "Execution Plan", "Query Tuning"]
  },
  {
    id: "gcp-pca-fc-250",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    front: "Cloud Spanner: SPANNER_SYS Introspection Tables",
    hint: "Diagnosing high CPU and query lock contention.",
    back: "Query <strong>SPANNER_SYS tables</strong> (e.g. <code>QUERY_STATS_TOP_MINUTE</code>) to identify CPU-intensive queries and lock contention in Cloud Spanner.",
    tags: ["Spanner", "Introspection", "SPANNER_SYS"]
  }
];

export default GCP_PCA_FLASHCARDS_10;
