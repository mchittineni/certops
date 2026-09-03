export const AZURE_AZ400_QUESTIONS_9 = [
  {
    id: "azure-az400-201",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Key Vault Access Policies vs Azure RBAC Permissions",
    scenario: "Microsoft recommends migrating Azure Key Vault data-plane permissions from legacy Access Policies to Azure Role-Based Access Control (RBAC).",
    question: "What is the primary architectural advantage of using Key Vault Azure RBAC?",
    options: [
      { id: 'A', text: "It makes Key Vault free of charge" },
      { id: 'B', text: "It provides unified, consistent access management across all Azure resources with support for privileged identity management (PIM) and inheritance from management groups and resource groups" },
      { id: 'C', text: "It allows public unauthenticated access to secrets" },
      { id: 'D', text: "It speeds up secret encryption algorithms" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure RBAC for Key Vault replaces legacy monolithic access policies. It enables granular built-in roles (Key Vault Secrets Officer, Key Vault Crypto User), inherits permissions hierarchically, and integrates with Entra ID Privileged Identity Management (PIM).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Key Vault", "RBAC", "Access Control", "Security"]
  },
  {
    id: "azure-az400-202",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Microsoft Entra Privileged Identity Management (PIM)",
    scenario: "An organization requires that cloud administrators should not hold permanent standing Owner permissions on Azure production subscriptions.",
    question: "Which Microsoft Entra ID governance feature provides Just-In-Time (JIT) role activation with mandatory approval workflows?",
    options: [
      { id: 'A', text: "Azure Bastion" },
      { id: 'B', text: "Microsoft Entra Privileged Identity Management (PIM)" },
      { id: 'C', text: "Azure Advisor" },
      { id: 'D', text: "Network Security Groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Privileged Identity Management (PIM) enforces Just-In-Time (JIT) administrative access: users remain eligible for high-privilege roles but must submit an activation request with justification, MFA, and manager approval for a time-limited window.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["PIM", "Least Privilege", "JIT Access", "Governance"]
  },
  {
    id: "azure-az400-203",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Confidential Computing: Encryption in Use",
    scenario: "A hospital processes sensitive genomic patient data and must ensure that data is encrypted not only at rest and in transit, but also while in memory during active CPU processing.",
    question: "Which Azure technology provides hardware-enforced Trusted Execution Environments (TEEs) to protect data in use?",
    options: [
      { id: 'A', text: "Azure Disk Encryption with BitLocker" },
      { id: 'B', text: "Azure Confidential Computing (using AMD SEV-SNP and Intel SGX enclaves)" },
      { id: 'C', text: "Azure Storage SSE" },
      { id: 'D', text: "Transport Layer Security (TLS 1.3)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Confidential Computing protects data in use by executing computations inside hardware-isolated enclaves (TEEs) with memory encryption, preventing cloud administrators, hypervisors, and host OS processes from inspecting data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/confidential-computing/overview",
    tags: ["Confidential Computing", "Encryption in Use", "Intel SGX", "Security"]
  },
  {
    id: "azure-az400-204",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Customer-Managed Keys (CMK) vs Microsoft-Managed Keys (MMK)",
    scenario: "A regulatory standard mandates that an organization must maintain total cryptographic control and ownership over the root encryption keys used to encrypt Azure Blob storage.",
    question: "Which encryption key management model satisfies this requirement?",
    options: [
      { id: 'A', text: "Unencrypted storage accounts" },
      { id: 'B', text: "Customer-Managed Keys (CMK) stored in Azure Key Vault or Key Vault Managed HSM" },
      { id: 'C', text: "Microsoft-Managed Keys (MMK) default encryption" },
      { id: 'D', text: "Storing private keys in a public GitHub repository" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Customer-Managed Keys (CMK / BYOK) give organizations full ownership of their encryption keys stored in Azure Key Vault. Customers can rotate keys on their own schedule and revoke access instantly, rendering stored data inaccessible.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview",
    tags: ["CMK", "Key Vault", "Encryption", "Compliance"]
  },
  {
    id: "azure-az400-205",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Azure Network Watcher NSG Flow Logs and Traffic Analytics",
    scenario: "A SecOps analyst needs to visualize internal network traffic patterns, identify VMs communicating with malicious command-and-control IP addresses, and detect unencrypted protocols.",
    question: "Which Azure networking analytics tool processes NSG Flow Logs using Log Analytics?",
    options: [
      { id: 'A', text: "Traffic Analytics" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure DNS" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Traffic Analytics processes Network Security Group (NSG) Flow Logs, enriching raw IP data with Microsoft threat intelligence to provide visual maps of application traffic, top talkers, security hotspots, and malicious IP communications.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics",
    tags: ["Traffic Analytics", "NSG Flow Logs", "Network Security", "Monitoring"]
  },
  {
    id: "azure-az400-206",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Principle of Least Privilege in Service Accounts",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the operational definition of the Principle of Least Privilege in automated CI/CD systems?",
    options: [
      { id: 'A', text: "Granting everyone subscription Owner access to prevent permission errors" },
      { id: 'B', text: "Using a single root account for all pipelines" },
      { id: 'C', text: "Granting automated pipelines, services, and users strictly the minimum necessary permissions required to perform their specific tasks, for the shortest required time" },
      { id: 'D', text: "Disabling all access controls" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Principle of Least Privilege mandates that identities (users, service principals, managed identities) are granted only the minimal permissions necessary to perform designated functions, minimizing blast radius if a credential is compromised.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices",
    tags: ["Least Privilege", "Zero Trust", "Security Architecture", "IAM"]
  },
  {
    id: "azure-az400-207",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Designing an Application Instrumentation Strategy",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An architect establishes observability standards for 20 new microservices. What core components must be included to achieve complete end-to-end observability?",
    options: [
      { id: 'A', text: "Distributed tracing, structured logging, application performance metrics, and automated alert telemetry" },
      { id: 'B', text: "Restarting servers once a day" },
      { id: 'C', text: "Weekly status reports by email" },
      { id: 'D', text: "Console print statements" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A comprehensive instrumentation strategy combines distributed request tracing (tracking transactions across microservices), structured logging with correlation IDs, real-time numerical performance metrics, and intelligent health alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring",
    tags: ["Instrumentation", "Observability", "Tracing", "Architecture"]
  },
  {
    id: "azure-az400-208",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights: Distributed Tracing and Correlation IDs",
    scenario: "A user request touches a frontend web app, calls an authentication microservice, queries a payment API, and writes to a database. The payment API returns HTTP 500.",
    question: "How does Application Insights trace this single transaction across multiple distributed services?",
    options: [
      { id: 'A', text: "By consolidating all services onto a single virtual machine" },
      { id: 'B', text: "By checking the server clock timestamps manually" },
      { id: 'C', text: "By injecting a common correlation ID (`traceparent` header using W3C Trace Context) into HTTP requests across services" },
      { id: 'D', text: "Distributed requests cannot be correlated in cloud applications" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Application Insights implements the W3C Trace Context standard: it passes standardized `traceparent` and `tracestate` HTTP headers across service boundaries, linking all distributed spans to a single global Operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/correlation",
    tags: ["Distributed Tracing", "Correlation ID", "W3C Trace Context", "Application Insights"]
  },
  {
    id: "azure-az400-209",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Map: Visualizing Dependency Architectures",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An on-call engineer investigates an incident where user checkout is failing. Where in Application Insights can the engineer view an auto-generated visual topology map showing live traffic flow, error rates, and average latency between all microservices and external databases?",
    options: [
      { id: 'A', text: "Failures tab" },
      { id: 'B', text: "Application Map" },
      { id: 'C', text: "Smart Detection" },
      { id: 'D', text: "Live Metrics" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Application Map in Application Insights automatically discovers and visualizes the complete architectural topology of services, components, and dependencies, displaying live call volume, average latency, and health indicators for every node and connector.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map",
    tags: ["Application Map", "Topology", "Dependencies", "Troubleshooting"]
  },
  {
    id: "azure-az400-210",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Live Metrics: Real-Time Telemetry Stream",
    scenario: "During a major production deployment, a team wants to observe incoming request rates, CPU utilization, and exception traces with sub-second latency as user traffic hits the new release.",
    question: "Which Application Insights feature provides this real-time 1-second telemetry stream?",
    options: [
      { id: 'A', text: "Log Analytics workspaces" },
      { id: 'B', text: "Azure Advisor" },
      { id: 'C', text: "Azure Service Health" },
      { id: 'D', text: "Live Metrics (QuickPulse)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Live Metrics (formerly QuickPulse) streams telemetry from instrumented applications in near real-time (sub-second latency), showing incoming requests, outgoing dependencies, memory/CPU usage, and unhandled exceptions as they happen.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/live-stream",
    tags: ["Live Metrics", "QuickPulse", "Real-Time", "Monitoring"]
  },
  {
    id: "azure-az400-211",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Profiler: Identifying Code Bottlenecks",
    scenario: "A production .NET API experiences periodic CPU spikes where response times spike from 200ms to 8 seconds. The team cannot reproduce the issue in development.",
    question: "Which Application Insights tool captures low-overhead production execution traces and shows the exact line of C# code consuming CPU cycles?",
    options: [
      { id: 'A', text: "Snapshot Debugger" },
      { id: 'B', text: "Application Insights Profiler" },
      { id: 'C', text: "Azure Network Watcher" },
      { id: 'D', text: "Smart Detection" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Application Insights Profiler runs continuously in production with minimal overhead (<5%). When response times exceed configured thresholds, it captures detailed execution call trees, showing the exact methods and lines of code causing latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/profiler",
    tags: ["Profiler", "Performance", "CPU Bottlenecks", "Troubleshooting"]
  },
  {
    id: "azure-az400-212",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Snapshot Debugger: Capturing Exception States",
    scenario: "An unhandled `NullReferenceException` occurs randomly in production once a week. The team needs to inspect local variable values and call stack memory at the exact instant the exception was thrown.",
    question: "Which Application Insights feature captures a debug snapshot of process memory when exceptions occur?",
    options: [
      { id: 'A', text: "Azure Chaos Studio" },
      { id: 'B', text: "Application Map" },
      { id: 'C', text: "Snapshot Debugger" },
      { id: 'D', text: "Live Metrics" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Snapshot Debugger automatically captures a debug snapshot (mini-dump) when unhandled exceptions occur in production, allowing developers to inspect the call stack, parameter values, and local memory variables in Visual Studio or the Azure portal.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/snapshot-debugger",
    tags: ["Snapshot Debugger", "Debugging", "Exceptions", "Troubleshooting"]
  },
  {
    id: "azure-az400-213",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Telemetry Sampling: Fixed vs Adaptive vs Ingestion",
    scenario: "A high-traffic e-commerce website produces 2 terabytes of telemetry daily. To reduce Log Analytics ingestion costs while maintaining accurate statistical metrics, the team configures sampling.",
    question: "Which sampling method dynamically adjusts the percentage of collected telemetry based on current application traffic volume?",
    options: [
      { id: 'A', text: "Fixed-rate sampling" },
      { id: 'B', text: "Ingestion sampling" },
      { id: 'C', text: "Manual sampling" },
      { id: 'D', text: "Adaptive sampling" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adaptive sampling (enabled by default in ASP.NET and ASP.NET Core) automatically adjusts the sampling percentage dynamically to keep telemetry volume within target rate limits while ensuring related requests and dependencies stay correlated.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Sampling", "Adaptive Sampling", "Cost Optimization", "Telemetry"]
  },
  {
    id: "azure-az400-214",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Distributed Tracing and Dependency Tracking",
    scenario: "A distributed application built on Azure Kubernetes Service (AKS), Azure Functions, and Azure SQL Database experiences intermittent end-user latency. Engineers need to trace individual HTTP requests across all microservice boundaries and identify which SQL query or HTTP dependency causes the delay.",
    question: "Which Azure Monitor tool provides this end-to-end distributed transaction diagnostic map?",
    options: [
      { id: 'A', text: "Azure Network Watcher connection monitor" },
      { id: 'B', text: "Azure Service Health alert dashboard" },
      { id: 'C', text: "Application Insights Application Map and Transaction Diagnostics" },
      { id: 'D', text: "Azure Activity Log event viewer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Application Insights Application Map automatically discovers and maps the topology of distributed components and HTTP/SQL dependencies. Transaction Diagnostics displays end-to-end Gantt charts of individual requests, highlighting the exact dependency call or database query responsible for latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map",
    tags: ["Application Insights", "Distributed Tracing", "Observability", "APM"]
  },
  {
    id: "azure-az400-215",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Automated Release Gates in Azure Pipelines",
    scenario: "A company uses Azure Pipelines release pipelines. Before promoting a build from Staging to Production, the pipeline must automatically evaluate live telemetry in Azure Monitor and halt the deployment if the count of unresolved critical application alerts is greater than zero.",
    question: "Which Azure Pipelines feature enforces this automated health check?",
    options: [
      { id: 'A', text: "A manual approval gate assigned to the lead SRE" },
      { id: 'B', text: "Deployment release gates configured with the Query Azure Monitor Alerts task" },
      { id: 'C', text: "A PowerShell task that ping-tests the web server once" },
      { id: 'D', text: "Setting the pipeline timeout to 60 minutes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Pipelines deployment gates allow defining automated health checks that run before or after an environment deployment. Gates can query Azure Monitor active alerts, invoke external REST endpoints, or query Azure Boards work items, automatically holding or aborting releases based on real-time health telemetry.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Azure Pipelines", "Release Gates", "Azure Monitor", "Automation"]
  },
  {
    id: "azure-az400-216",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks: Interactive Operational Dashboards",
    scenario: "An operations team needs an interactive reporting canvas that combines KQL query tables, metrics charts, text guidance, and parameterized drop-down filters for post-incident reviews.",
    question: "Which Azure Monitor feature provides this flexible, multi-data reporting canvas?",
    options: [
      { id: 'A', text: "Application Map" },
      { id: 'B', text: "Power BI desktop" },
      { id: 'C', text: "Azure Monitor Workbooks" },
      { id: 'D', text: "Azure Dashboards" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Monitor Workbooks provide an interactive canvas for data analysis and reporting. They combine live metrics, KQL log queries, Azure Resource Graph queries, and markdown text into interactive, shareable operational reports.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor", "Reporting", "Dashboards"]
  },
  {
    id: "azure-az400-217",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Continuous User Telemetry: Funnels, User Flows, and Cohorts",
    scenario: "A product manager wants to measure where users abandon an online onboarding wizard (Step 1: Sign up → Step 2: Add payment → Step 3: Complete profile).",
    question: "Which Application Insights product analytics feature tracks multi-step user conversion progression?",
    options: [
      { id: 'A', text: "Cohorts" },
      { id: 'B', text: "Impact" },
      { id: 'C', text: "User Flows" },
      { id: 'D', text: "Funnels" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Funnels in Application Insights analyze progression through defined user workflow stages, identifying conversion rates and discovering exactly where users abandon multi-step application journeys.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-funnels",
    tags: ["Funnels", "User Analytics", "Product Telemetry", "Application Insights"]
  },
  {
    id: "azure-az400-218",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights User Flows: Discovery of Navigation Paths",
    scenario: "A design team wants to discover what actions users take immediately after encountering an error page in a web application.",
    question: "Which tool in Application Insights maps user navigational journeys forward from a specific page or event?",
    options: [
      { id: 'A', text: "Retention" },
      { id: 'B', text: "User Flows" },
      { id: 'C', text: "Impact" },
      { id: 'D', text: "Live Metrics" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "User Flows visualizes the paths users take between web pages and features, showing what users do next after visiting a page or encountering an event, uncovering unintended navigation loops.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/usage-flows",
    tags: ["User Flows", "UX", "Product Analytics", "Telemetry"]
  },
  {
    id: "azure-az400-219",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "OpenTelemetry (OTel) Standard in Azure Monitor",
    scenario: "An organization standardizes on vendor-neutral observability to prevent vendor lock-in. Developers instrument microservices using standard OpenTelemetry SDKs.",
    question: "How does Azure Monitor support OpenTelemetry instrumentation?",
    options: [
      { id: 'A', text: "Azure Monitor provides official OpenTelemetry distribution libraries (distros) that export telemetry natively into Application Insights and Log Analytics" },
      { id: 'B', text: "Developers must run an external OpenTelemetry collector on physical servers" },
      { id: 'C', text: "Azure only supports proprietary Microsoft SDKs" },
      { id: 'D', text: "OpenTelemetry is prohibited on Azure" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Monitor natively embraces OpenTelemetry (OTel) as its strategic standard. Microsoft provides turnkey OpenTelemetry distros (for .NET, Java, Node.js, Python) that export traces and metrics directly to Application Insights.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-overview",
    tags: ["OpenTelemetry", "OTel", "Standards", "Observability"]
  },
  {
    id: "azure-az400-220",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Log Analytics Data Retention and Archive Tiers",
    scenario: "A compliance standard requires keeping web server audit logs queryable for 90 days for operational troubleshooting, and archived for 7 years for regulatory audits at minimal cost.",
    question: "How should the Log Analytics workspace retention and archive plan be configured?",
    options: [
      { id: 'A', text: "Export logs to floppy disks" },
      { id: 'B', text: "Set interactive retention to 90 days, and configure total retention / archive period to 7 years (2555 days)" },
      { id: 'C', text: "Keep interactive retention at 7 years on high-speed tier" },
      { id: 'D', text: "Delete logs after 30 days" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Log Analytics allows configuring interactive retention (e.g. 90 days for fast KQL queries) and extending total retention up to 12 years in the low-cost Archive tier, preserving historical audit logs at up to 80% reduced storage cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive",
    tags: ["Log Analytics", "Retention", "Archive Tier", "Cost Management"]
  },
  {
    id: "azure-az400-221",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Dedicated vs Commitment Tier Pricing",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "An enterprise ingests 1,000 GB of log data per day into Log Analytics. Which pricing model offers substantial discounts compared to Pay-As-You-Go rates?",
    options: [
      { id: 'A', text: "Free tier" },
      { id: 'B', text: "Commitment Tiers (starting at 100 GB/day)" },
      { id: 'C', text: "Pay-As-You-Go with no reservations" },
      { id: 'D', text: "Per-node pricing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Log Analytics Commitment Tiers (starting at 100 GB/day, scaling to 500 GB, 1,000 GB, etc.) provide fixed, discounted daily pricing that saves up to 30% or more compared to standard Pay-As-You-Go ingestion rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cost-logs#commitment-tiers",
    tags: ["Commitment Tiers", "Pricing", "Log Analytics", "Cost Optimization"]
  },
  {
    id: "azure-az400-222",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Application Insights Availability Tests: Standard vs Multi-Step Web Tests",
    scenario: "A DevOps team wants external probes to test the availability, response code, and SSL certificate validity of an external public HTTPS endpoint every 5 minutes from 5 global regions.",
    question: "Which Application Insights availability test type should be deployed?",
    options: [
      { id: 'A', text: "Live Metrics test" },
      { id: 'B', text: "Multi-step web test" },
      { id: 'C', text: "Standard test (single URL ping test with SSL check)" },
      { id: 'D', text: "Profiler test" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Standard tests in Application Insights monitor single URL endpoints from multiple global geographic locations, validating HTTP status codes, response time thresholds, content matching, and SSL certificate validity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview#standard-test",
    tags: ["Availability Tests", "Synthetic Monitoring", "Uptime", "SLA"]
  },
  {
    id: "azure-az400-223",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Metric Alerts vs Log Search Alerts",
    scenario: "An enterprise DevOps engineering team is designing DevSecOps governance, infrastructure automation, and instrumentation strategies on Microsoft Azure.",
    question: "What is the key difference in evaluation latency and query capabilities between Metric Alerts and Log Search Alerts in Azure Monitor?",
    options: [
      { id: 'A', text: "There is no difference between Metric and Log alerts" },
      { id: 'B', text: "Metric Alerts evaluate simple numerical time-series data with near real-time sub-minute latency; Log Search Alerts execute complex KQL queries across Log Analytics tables with evaluation intervals typically between 1 and 15 minutes" },
      { id: 'C', text: "Metric Alerts can query database tables" },
      { id: 'D', text: "Metric Alerts are free; Log Alerts cost $1,000 each" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Metric alerts operate on lightweight time-series counters and evaluate frequently (every minute or sub-minute) for fast operational alerting. Log Search alerts run expressive KQL queries against historical logs with slightly higher evaluation latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-types",
    tags: ["Metric Alerts", "Log Search Alerts", "Alerting", "Monitoring"]
  },
  {
    id: "azure-az400-224",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Dynamic Thresholds",
    scenario: "A service experiences natural cyclical traffic patterns: high traffic at noon on weekdays and low traffic on Sunday mornings. Static alert thresholds cause false alarms on weekends.",
    question: "Which alert evaluation capability uses machine learning to learn seasonal baseline behavior and alert only on genuine anomalies?",
    options: [
      { id: 'A', text: "Log Analytics archive" },
      { id: 'B', text: "Static Thresholds" },
      { id: 'C', text: "Dynamic Thresholds" },
      { id: 'D', text: "Application Insights profiler" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dynamic Thresholds in Azure Monitor use machine learning algorithms to learn historical behavioral patterns and seasonality (hourly, daily, weekly), establishing dynamic upper and lower boundaries that eliminate false positives.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-dynamic-thresholds",
    tags: ["Dynamic Thresholds", "Alerting", "Machine Learning", "False Positives"]
  },
  {
    id: "azure-az400-225",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Action Groups and Alert Processing Rules",
    scenario: "During a scheduled 2-hour monthly maintenance window, an operations team wants to suppress all non-critical email and SMS alert notifications without modifying hundreds of individual alert rules.",
    question: "Which Azure Monitor feature temporarily suppresses notification actions during maintenance?",
    options: [
      { id: 'A', text: "Setting alert severity to Critical" },
      { id: 'B', text: "Alert Processing Rules (configured to suppress notifications during a scheduled window)" },
      { id: 'C', text: "Turning off Azure Monitor" },
      { id: 'D', text: "Deleting all Action Groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Alert Processing Rules allow administrators to apply automated logic to fired alerts before notifications are dispatched, such as suppressing Action Groups during scheduled maintenance windows or routing alerts based on resource tags.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-action-rules",
    tags: ["Alert Processing Rules", "Action Groups", "Suppression", "Maintenance"]
  }
];

export default AZURE_AZ400_QUESTIONS_9;
