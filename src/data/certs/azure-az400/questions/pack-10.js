export const AZURE_AZ400_QUESTIONS_10 = [
  {
    id: "azure-az400-226",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Chaos Studio: Chaos Engineering Principles",
    scenario: "An architecture team wants to validate that their multi-region AKS application gracefully handles unexpected region failures before launching to public users.",
    question: "Which managed Azure service injects controlled fault experiments (like stopping VMs, inducing high CPU, network latency, or DNS outages) into cloud workloads?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure Chaos Studio" },
      { id: 'D', text: "Azure Migrate" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Chaos Studio is a fully managed chaos engineering platform that orchestrates controlled experiments, injecting deliberate infrastructure and application faults into cloud resources to measure resilience and uncover architectural weaknesses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/chaos-studio/chaos-studio-overview",
    tags: ["Chaos Studio", "Chaos Engineering", "Resilience", "Reliability"]
  },
  {
    id: "azure-az400-227",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Chaos Experiments: Agent-Based vs Service-Direct Faults",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "In Azure Chaos Studio, what is the difference between Service-Direct faults and Agent-Based faults?",
    options: [
      { id: 'A', text: "Agent-Based faults cannot be automated" },
      { id: 'B', text: "Service-Direct faults only run on Windows; Agent-Based only run on Linux" },
      { id: 'C', text: "There is no difference between agent and service faults" },
      { id: 'D', text: "Service-Direct faults execute directly against Azure Resource Manager without installing agents (e.g. stopping VMs, rebooting AKS nodes); Agent-Based faults require a guest agent to inject in-OS faults (e.g. high CPU, memory pressure, killing processes)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service-direct faults act on the Azure infrastructure plane via ARM (e.g. stopping a VM or severing network routes). Agent-based faults run inside the guest OS via the Chaos Studio agent, allowing in-guest stress testing (CPU, memory, disk I/O).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/chaos-studio/chaos-studio-fault-providers",
    tags: ["Chaos Studio", "Faults", "Agent-Based", "Service-Direct"]
  },
  {
    id: "azure-az400-228",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Defining Service Level Indicators (SLIs) and Service Level Objectives (SLOs)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "In Site Reliability Engineering (SRE) practice, what is the relationship between an SLI, an SLO, and an SLA?",
    options: [
      { id: 'A', text: "An SLA is internal; an SLO is external" },
      { id: 'B', text: "They all describe the exact same concept" },
      { id: 'C', text: "An SLI is a legal document" },
      { id: 'D', text: "An SLI is a measurable metric (e.g. successful HTTP requests); an SLO is the internal target for that metric (e.g. 99.9% over 30 days); an SLA is the external commercial contract with financial penalties if not met" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In SRE: a Service Level Indicator (SLI) is a quantifiable metric of service behavior. A Service Level Objective (SLO) is the agreed internal reliability target. A Service Level Agreement (SLA) is the external business agreement carrying financial penalties.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics",
    tags: ["SRE", "SLI", "SLO", "SLA"]
  },
  {
    id: "azure-az400-229",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Error Budgets and Innovation Velocity",
    scenario: "A service maintains an SLO of 99.9% availability per calendar month, leaving an 'Error Budget' of 0.1% (approximately 43 minutes of downtime per month).",
    question: "How should engineering teams use their remaining Error Budget to guide software releases?",
    options: [
      { id: 'A', text: "Error budgets cannot be calculated in cloud systems" },
      { id: 'B', text: "Error budgets dictate how much money developers can spend on lunches" },
      { id: 'C', text: "If ample error budget remains, teams release new features aggressively; if the error budget is exhausted, new feature releases are paused to focus exclusively on stability and reliability enhancements" },
      { id: 'D', text: "Exhausted error budgets require firing the development team" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Error Budgets balance reliability and velocity. When a system is within its error budget, product teams deploy features rapidly. When the error budget is depleted, deployments freeze to focus on technical debt and resilience engineering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics",
    tags: ["Error Budget", "SRE", "Deployment Velocity", "Reliability"]
  },
  {
    id: "azure-az400-230",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Writing KQL Queries: Analyzing Exceptions in Log Analytics",
    scenario: "An engineer needs a Kusto Query Language (KQL) query to find the top 5 most frequent unhandled exceptions in the past 24 hours from Application Insights.",
    question: "Which KQL query accurately performs this aggregation?",
    options: [
      { id: 'A', text: "cat exceptions.log | grep error | head -5" },
      { id: 'B', text: "exceptions | where timestamp > ago(24h) | summarize count() by type | top 5 by count_ desc" },
      { id: 'C', text: "SELECT TOP 5 * FROM exceptions WHERE date = today" },
      { id: 'D', text: "exceptions | filter last 24h" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The KQL query `exceptions | where timestamp > ago(24h) | summarize count() by type | top 5 by count_ desc` filters for the past 24 hours, aggregates exception counts by type, and returns the top 5 most frequent occurrences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["KQL", "Log Analytics", "Queries", "Exceptions"]
  },
  {
    id: "azure-az400-231",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Writing KQL Queries: Calculating P95 Request Latency",
    scenario: "An SRE needs to calculate the 95th percentile (P95) execution duration of HTTP requests per operation name over the past 7 days.",
    question: "Which KQL aggregation function calculates percentiles?",
    options: [
      { id: 'A', text: "requests | count(95)" },
      { id: 'B', text: "requests | top 95 duration" },
      { id: 'C', text: "requests | avg(duration)" },
      { id: 'D', text: "requests | where timestamp > ago(7d) | summarize percentiles(duration, 95) by name" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `percentiles(duration, 95)` function in KQL calculates the 95th percentile value, representing the threshold below which 95% of observations fall, providing a realistic assessment of user experience unaffected by minor outliers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/percentiles-aggfunction",
    tags: ["KQL", "Percentiles", "P95", "SRE"]
  },
  {
    id: "azure-az400-232",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Smart Detection in Application Insights: Automated Anomaly Detection",
    scenario: "Without configuring any custom alert rules, a development team receives an email stating: 'Abnormal rise in failed request rate for POST /api/checkout'.",
    question: "Which built-in Application Insights capability uses machine learning to detect unexpected performance regressions automatically?",
    options: [
      { id: 'A', text: "Smart Detection" },
      { id: 'B', text: "Azure Advisor" },
      { id: 'C', text: "Service Health" },
      { id: 'D', text: "Manual Ping test" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Smart Detection in Application Insights uses proactive machine learning analytics to continuously analyze application telemetry, automatically warning teams about abnormal failure rates, memory leaks, and degradation without manual rule configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/proactive-diagnostics",
    tags: ["Smart Detection", "Anomaly Detection", "Machine Learning", "Application Insights"]
  },
  {
    id: "azure-az400-233",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Agent (AMA) vs Legacy Log Analytics Agent (MMA)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "Microsoft officially deprecated the legacy Log Analytics agent (MMA / OMS). What is the modern unified agent for collecting guest OS telemetry across Windows and Linux VMs?",
    options: [
      { id: 'A', text: "Network Watcher Agent" },
      { id: 'B', text: "Azure Bastion Agent" },
      { id: 'C', text: "Diagnostic Extension (WAD)" },
      { id: 'D', text: "Azure Monitor Agent (AMA)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Monitor Agent (AMA) replaces the legacy Log Analytics agent (MMA). It consolidates logging, metrics, and security collection into a single high-performance agent configured centrally via Data Collection Rules (DCRs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview",
    tags: ["AMA", "Azure Monitor Agent", "DCR", "Telemetry"]
  },
  {
    id: "azure-az400-234",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Data Collection Rules (DCRs): Centralized Telemetry Filtering",
    scenario: "An administrator wants to collect security event logs from 500 virtual machines, but only ingest high-priority Event IDs (4624, 4625) to control ingestion costs.",
    question: "Which Azure Monitor mechanism centrally defines what telemetry is collected from VMs using XPath queries?",
    options: [
      { id: 'A', text: "Local Group Policy" },
      { id: 'B', text: "Data Collection Rules (DCRs)" },
      { id: 'C', text: "Azure DNS configuration" },
      { id: 'D', text: "Editing text files on every VM" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data Collection Rules (DCRs) define the telemetry collection pipeline for the Azure Monitor Agent (AMA). DCRs use XPath filtering to select specific event IDs and performance counters centrally without modifying individual VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-overview",
    tags: ["DCR", "Data Collection Rules", "AMA", "Cost Optimization"]
  },
  {
    id: "azure-az400-235",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Diagnostic Settings: Routing Platform Logs and Metrics",
    scenario: "A security team mandates that all Azure Key Vault audit access events and Azure Firewall network logs must be streamed to an event hub for SIEM ingestion and archived in a storage account.",
    question: "Which Azure feature routes resource platform logs to external destinations?",
    options: [
      { id: 'A', text: "Azure Backup" },
      { id: 'B', text: "Diagnostic Settings" },
      { id: 'C', text: "Network Security Groups" },
      { id: 'D', text: "Resource Locks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Diagnostic Settings configure where platform logs (resource logs, audit events, metrics) are emitted. Each Azure service supports routing logs to Log Analytics workspaces, Azure Storage accounts, Event Hubs, or third-party partner tools.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings",
    tags: ["Diagnostic Settings", "Platform Logs", "SIEM", "Auditing"]
  },
  {
    id: "azure-az400-236",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Activity Log: Auditing Management Operations",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "A developer discovers that a production virtual network was deleted yesterday. Where can an administrator audit who deleted the resource, from what IP address, and at what timestamp?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Application Insights Failures" },
      { id: 'D', text: "Azure Activity Log" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Azure Activity Log is an immutable subscription-level audit trail that records all management operations (create, update, delete) executed through Azure Resource Manager, logging user identity, timestamp, and status for 90 days.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Activity Log", "Audit Trail", "ARM", "Governance"]
  },
  {
    id: "azure-az400-237",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Designing Alert Notification Escalation Paths: On-Call Rotations",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "During a Severity 1 incident, if the primary on-call SRE does not acknowledge a PagerDuty or Opsgenie alert within 5 minutes, how should the alert system respond?",
    options: [
      { id: 'A', text: "Send an email to general customer support" },
      { id: 'B', text: "Drop the alert and close the ticket" },
      { id: 'C', text: "Restart all company computers" },
      { id: 'D', text: "Automatically escalate the alert to the secondary on-call engineer and incident commander" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern on-call notification systems integrate with Azure Monitor Action Groups (via webhooks) to enforce automated escalation policies: escalating unacknowledged alerts from primary to secondary engineers to safeguard incident SLAs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups",
    tags: ["Escalation", "On-Call", "SRE", "Incident Response"]
  },
  {
    id: "azure-az400-238",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Continuous Feedback Loops in DevOps",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the primary purpose of establishing Continuous Feedback loops between production operations and agile development sprints?",
    options: [
      { id: 'A', text: "Forcing operations to work without metrics" },
      { id: 'B', text: "Using real-time production telemetry (user behavior, error rates, performance bottlenecks) to inform backlog prioritization and rapid iteration in subsequent development sprints" },
      { id: 'C', text: "Generating marketing slogans" },
      { id: 'D', text: "Preventing developers from writing new code" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Continuous Feedback connects production telemetry back to development. Crash analytics, user journey bottlenecks, and performance traces directly feed user stories and bug fixes into sprint backlogs, completing the DevOps loop.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/continuous-feedback",
    tags: ["Continuous Feedback", "Telemetry", "Agile", "DevOps Culture"]
  },
  {
    id: "azure-az400-239",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Mean Time to Detect (MTTD) vs Mean Time to Resolve (MTTR)",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An engineering organization tracks key SRE operational health metrics. What do MTTD and MTTR measure?",
    options: [
      { id: 'A', text: "MTTD measures the average time from incident onset until team awareness; MTTR measures the average time from detection until full service restoration" },
      { id: 'B', text: "MTTD applies only to databases; MTTR applies only to networks" },
      { id: 'C', text: "There is no difference between MTTD and MTTR" },
      { id: 'D', text: "MTTD measures deployment speed; MTTR measures compiler speed" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mean Time to Detect (MTTD) quantifies monitoring effectiveness (how fast anomalies are caught). Mean Time to Resolve / Remediate (MTTR) quantifies operational resilience (how fast teams restore service following an outage).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics",
    tags: ["MTTD", "MTTR", "SRE", "Metrics"]
  },
  {
    id: "azure-az400-240",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Blameless Post-Mortems (Post-Incident Reviews)",
    scenario: "Following a major production outage caused by a configuration typo, an engineering team conducts a post-incident retrospective.",
    question: "What is the foundational principle of a Blameless Post-Mortem in DevOps culture?",
    options: [
      { id: 'A', text: "Focusing on systemic failures, process gaps, and automated guardrails rather than assigning individual human blame, assuming engineers acted in good faith with available information" },
      { id: 'B', text: "Deleting the post-incident documentation" },
      { id: 'C', text: "Hiding the incident from executive leadership" },
      { id: 'D', text: "Punishing the engineer who made the typo to deter future mistakes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Blameless post-mortems assume human error is a symptom of flawed systems, not the root cause. Removing fear of punishment encourages transparent disclosure and fosters improvements in automated safeguards, testing, and observability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/incident-management",
    tags: ["Blameless Post-Mortem", "SRE", "DevOps Culture", "Incident Management"]
  },
  {
    id: "azure-az400-241",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "User Telemetry: Cohort Analysis in Application Insights",
    scenario: "A product team wants to analyze whether users who utilized a new AI feature in their first week have higher 30-day retention rates than users who did not.",
    question: "Which Application Insights analytics feature groups users based on common behavioral attributes?",
    options: [
      { id: 'A', text: "Live Metrics" },
      { id: 'B', text: "Cohorts" },
      { id: 'C', text: "User Flows" },
      { id: 'D', text: "Impact" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cohorts in Application Insights group users, sessions, or operations based on shared properties or behaviors, enabling comparative retention analysis and long-term engagement studies across user segments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-cohorts",
    tags: ["Cohorts", "User Retention", "Product Analytics", "Telemetry"]
  },
  {
    id: "azure-az400-242",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights: Impact Analysis",
    scenario: "An architect wants to prove mathematically whether slow page load times (e.g. latency > 3 seconds) directly cause real users to abandon their shopping carts.",
    question: "Which Application Insights analysis tool measures how application performance dimensions affect user conversion rates?",
    options: [
      { id: 'A', text: "Impact analysis" },
      { id: 'B', text: "Application Map" },
      { id: 'C', text: "Live Metrics" },
      { id: 'D', text: "Smart Detection" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Impact tool in Application Insights analyzes how page load times or custom telemetry dimensions correlate with user engagement, providing visual regression graphs showing whether slow speeds reduce feature usage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-impact",
    tags: ["Impact Analysis", "UX", "Performance", "Product Telemetry"]
  },
  {
    id: "azure-az400-243",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Log Analytics Query Optimization: Time Filtering and Specific Columns",
    scenario: "A KQL query interrogating a 50 TB Log Analytics workspace takes 3 minutes to execute and consumes excessive compute resources.",
    question: "What are the two most effective KQL optimization practices to accelerate query execution?",
    options: [
      { id: 'A', text: "Filter by timestamp as early as possible (e.g. `where TimeGenerated > ago(1h)`) and project only required columns (using `project`) rather than `project *`" },
      { id: 'B', text: "Export all data to Excel" },
      { id: 'C', text: "Run the query without any where clauses" },
      { id: 'D', text: "Sort all data alphabetically using order by" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Optimizing KQL queries requires placing the `TimeGenerated` filter at the earliest possible pipe to prune data partitions, and using `project` to discard unneeded columns, reducing disk read I/O and accelerating query execution.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/query-optimization",
    tags: ["KQL Optimization", "Performance", "Log Analytics", "Best Practices"]
  },
  {
    id: "azure-az400-244",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Custom Events and Metrics API",
    scenario: "A retail backend needs to track business KPIs (e.g. 'OrderPlaced', 'RevenueAmount') directly from C# code and correlate them with operational traces.",
    question: "Which telemetry client method records custom business events in Application Insights?",
    options: [
      { id: 'A', text: "TelemetryClient.TrackEvent('OrderPlaced', properties, metrics)" },
      { id: 'B', text: "Database INSERT statement" },
      { id: 'C', text: "Console.WriteLine()" },
      { id: 'D', text: "System.Diagnostics.Trace.WriteLine()" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Application Insights SDK `TelemetryClient` provides dedicated methods (such as `TrackEvent()`, `TrackMetric()`, and `TrackDependency()`) to send custom business and operational telemetry into Log Analytics.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics",
    tags: ["TrackEvent", "TelemetryClient", "Custom Telemetry", "Application Insights"]
  },
  {
    id: "azure-az400-245",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Automated Remediation with Azure Monitor and Automation Runbooks",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "When a web server virtual machine runs out of disk space (disk free < 5%), how can an Azure Monitor alert rule automatically trigger a script to clean up temporary log files without human intervention?",
    options: [
      { id: 'A', text: "Send an email to the IT director" },
      { id: 'B', text: "Configure the Alert Action Group to invoke an Azure Automation Runbook or Azure Logic App" },
      { id: 'C', text: "Reboot the physical datacenter" },
      { id: 'D', text: "Manual disk cleanup is mandatory" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Action Groups can invoke Azure Automation Runbooks, Logic Apps, or Azure Functions when an alert fires. This enables self-healing systems that automatically clear temp directories or restart services upon failure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups",
    tags: ["Self-Healing", "Automation Runbooks", "Remediation", "Alerts"]
  },
  {
    id: "azure-az400-246",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Log Analytics Table Types: Analytics vs Basic Logs",
    scenario: "A company ingests 5 terabytes of high-volume, low-value debugging logs daily. They rarely query these logs, but need them stored for 30 days for potential incident investigations at minimal cost.",
    question: "Which Log Analytics table plan reduces ingestion costs by over 50% for high-volume debugging logs?",
    options: [
      { id: 'A', text: "Dedicated Cluster plan" },
      { id: 'B', text: "Basic Logs table plan" },
      { id: 'C', text: "Analytics Logs table plan" },
      { id: 'D', text: "Archive plan only" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Log Analytics offers the 'Basic Logs' table plan for high-volume verbose logs. It provides significantly reduced ingestion pricing (over 50% savings) with a 30-day retention period and simple debugging query capabilities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/basic-logs-configure",
    tags: ["Basic Logs", "Cost Optimization", "Log Analytics", "FinOps"]
  },
  {
    id: "azure-az400-247",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Distributed Systems: The Four Golden Signals of Monitoring",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "According to the Google SRE handbook and Azure monitoring guidance, what are the 'Four Golden Signals' of system health?",
    options: [
      { id: 'A', text: "Latency, Traffic, Errors, and Saturation" },
      { id: 'B', text: "Input, Output, Storage, and Processing" },
      { id: 'C', text: "Build, Test, Release, and Deploy" },
      { id: 'D', text: "CPU, Memory, Disk, and Network" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Four Golden Signals are: 1. Latency (time taken to service a request), 2. Traffic (demand/throughput), 3. Errors (failure rate), and 4. Saturation (how full system resources are, such as memory or thread pool capacity).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring",
    tags: ["Golden Signals", "Latency", "Saturation", "SRE"]
  },
  {
    id: "azure-az400-248",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Resource Graph: Fleet-Wide Resource Inventory Queries",
    scenario: "A cloud architect needs to run a sub-second KQL query across 2,000 Azure subscriptions to find every Virtual Machine that lacks a specific compliance tag.",
    question: "Which Azure service provides ultra-fast, fleet-wide governance and inventory querying?",
    options: [
      { id: 'A', text: "Azure Monitor Log Analytics" },
      { id: 'B', text: "Azure Advisor" },
      { id: 'C', text: "Azure Resource Graph (ARG)" },
      { id: 'D', text: "Azure Cost Management" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Resource Graph (ARG) is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration across all subscriptions and management groups using KQL queries.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/resource-graph/overview",
    tags: ["Azure Resource Graph", "ARG", "KQL", "Inventory"]
  },
  {
    id: "azure-az400-249",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Incident Post-Mortem Action Items Tracking in Azure Boards",
    scenario: "Following a major post-incident review, the SRE team identifies 3 systemic failure points that require architectural remediation.",
    question: "How should these remediation action items be managed to guarantee they are prioritized before new features?",
    options: [
      { id: 'A', text: "Create high-priority work items (User Stories or Tasks) in Azure Boards, tag them as 'Post-Mortem Action Items', and prioritize them into the upcoming sprint backlog" },
      { id: 'B', text: "Store them in personal notes" },
      { id: 'C', text: "Write them on a whiteboard in the meeting room" },
      { id: 'D', text: "Assume the failure will not recur" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Remediation action items from post-mortems must be logged as first-class work items in Azure Boards and prioritized in immediate sprint backlogs. Treating reliability debt on par with new feature delivery prevents recurring outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/learn/devops-at-microsoft/incident-management",
    tags: ["Post-Mortem", "Azure Boards", "Reliability", "Continuous Improvement"]
  },
  {
    id: "azure-az400-250",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "AZ-400 DevOps Engineer Capstone: Continuous Value Delivery",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What foundational principle summarizes the goal of the Microsoft Certified: DevOps Engineer Expert role?",
    options: [
      { id: 'A', text: "DevOps is the union of people, process, and products to enable continuous delivery of value to end users" },
      { id: 'B', text: "DevOps eliminates the need for software testing" },
      { id: 'C', text: "DevOps is a software tool purchased from Microsoft" },
      { id: 'D', text: "DevOps replaces human developers with automated scripts entirely" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "As defined by Microsoft: 'DevOps is the union of people, process, and products to enable continuous delivery of value to our end users.' It bridges development and operations to innovate rapidly, reliably, and securely.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/learn/what-is-devops",
    tags: ["DevOps", "Value Delivery", "Culture", "AZ-400 Capstone"]
  }
];

export default AZURE_AZ400_QUESTIONS_10;
