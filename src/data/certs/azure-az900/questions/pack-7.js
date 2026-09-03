export const AZURE_AZ900_QUESTIONS_7 = [
  {
    id: "az-900-151",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Migrate: Centralized Migration Hub",
    scenario: "An enterprise is planning to migrate 500 VMware virtual machines and 50 SQL databases from an on-premises datacenter to Azure.",
    question: "Which unified service should the IT department use to discover, assess, and migrate on-premises workloads to Azure?",
    options: [
      { id: 'A', text: "Azure Data Box" },
      { id: 'B', text: "Azure File Sync" },
      { id: 'C', text: "Azure Migrate" },
      { id: 'D', text: "Azure Arc" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Migrate provides a centralized hub to assess, discover, size, and execute migrations of on-premises servers, databases, and web applications to Microsoft Azure with cost estimation tools.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview",
    tags: ["Azure Migrate", "Migration", "Assessment", "Planning"]
  },
  {
    id: "az-900-152",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Arc: Multi-Cloud and Hybrid Management",
    scenario: "An enterprise operates servers across on-premises datacenters, AWS, and Google Cloud. They want to manage all servers using Azure Resource Manager (ARM) and Azure Policy.",
    question: "Which Azure service extends Azure management and governance to resources running outside Azure?",
    options: [
      { id: 'A', text: "Azure Virtual Network Gateway" },
      { id: 'B', text: "Azure Migrate" },
      { id: 'C', text: "Azure Arc" },
      { id: 'D', text: "Azure Front Door" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Arc extends Azure governance, management, and cloud services (like Azure Policy, Defender for Cloud, and Azure Monitor) to servers, Kubernetes clusters, and databases running on-premises, edge, and third-party clouds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-arc/overview",
    tags: ["Azure Arc", "Hybrid", "Multi-Cloud", "Governance"]
  },
  {
    id: "az-900-153",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Manager (ARM): The Management Layer",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Every time a user creates, updates, or deletes a resource via the Azure portal, Azure CLI, or REST API, which central service processes the request?",
    options: [
      { id: 'A', text: "Azure DNS" },
      { id: 'B', text: "Azure Resource Manager (ARM)" },
      { id: 'C', text: "Azure Key Vault" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Resource Manager (ARM) is the central deployment and management service for Azure. It provides a consistent management layer that authenticates and processes requests received from the Azure Portal, CLI, PowerShell, and SDKs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
    tags: ["ARM", "Management Layer", "Architecture", "Governance"]
  },
  {
    id: "az-900-154",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "ARM Templates vs Bicep",
    scenario: "A cloud engineer wants to define Azure infrastructure as code using a clean, concise, domain-specific syntax instead of complex nested JSON templates.",
    question: "Which native Microsoft declarative language should the engineer use?",
    options: [
      { id: 'A', text: "Bash scripts" },
      { id: 'B', text: "Python boto3" },
      { id: 'C', text: "Bicep" },
      { id: 'D', text: "PowerShell procedural scripts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. It transparently compiles down to standard ARM template JSON while providing cleaner syntax, better modularity, and automatic dependency management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview",
    tags: ["Bicep", "IaC", "ARM", "DevOps"]
  },
  {
    id: "az-900-155",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cloud Shell: Browser-Based Terminal",
    scenario: "An administrator needs to run Azure CLI and PowerShell commands from a hotel laptop that has no developer tools installed.",
    question: "Which built-in browser-based terminal environment does Azure provide directly inside the portal?",
    options: [
      { id: 'A', text: "Azure Cloud Shell" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Visual Studio Code desktop" },
      { id: 'D', text: "Windows Command Prompt" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Cloud Shell is an interactive, authenticated, browser-accessible terminal for managing Azure resources. It provides pre-installed CLI tools (Bash or PowerShell) backed by an Azure Storage account to persist files.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-shell/overview",
    tags: ["Cloud Shell", "CLI", "Management Tools", "Portal"]
  },
  {
    id: "az-900-156",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure PowerShell vs Azure CLI",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which statement correctly compares Azure PowerShell and the Azure CLI?",
    options: [
      { id: 'A', text: "Azure CLI runs only on Windows; Azure PowerShell runs only on macOS" },
      { id: 'B', text: "Both Azure CLI and Azure PowerShell are cross-platform tools that run on Windows, macOS, and Linux; Azure CLI uses bash-style syntax, while Azure PowerShell uses cmdlets that output .NET objects" },
      { id: 'C', text: "Azure PowerShell cannot manage virtual machines" },
      { id: 'D', text: "Azure CLI requires a separate paid license" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Both Azure CLI (`az` commands) and Azure PowerShell (`Get-Az*` cmdlets) are cross-platform utilities available on Windows, Linux, and macOS. PowerShell manipulates structured .NET objects, while CLI outputs standard JSON.",
    referenceUrl: "https://learn.microsoft.com/en-us/cli/azure/choose-the-right-azure-command-line-tool",
    tags: ["Azure CLI", "PowerShell", "Management Tools"]
  },
  {
    id: "az-900-157",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Mobile App",
    scenario: "An on-call engineer needs to monitor resource health, check active alert notifications, and restart a stopped virtual machine from an iPhone while commuting.",
    question: "Which application should the engineer use?",
    options: [
      { id: 'A', text: "Azure DevOps desktop client" },
      { id: 'B', text: "Azure Storage Explorer" },
      { id: 'C', text: "Azure Mobile App (iOS and Android)" },
      { id: 'D', text: "Azure Data Box" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Mobile App allows administrators to monitor resource status, triage alerts, inspect metrics, run Cloud Shell commands, and execute management operations (like restarting VMs) directly from iOS and Android devices.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/mobile-app-overview",
    tags: ["Mobile App", "Monitoring", "Management Tools"]
  },
  {
    id: "az-900-158",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Locks: CanNotDelete vs ReadOnly",
    scenario: "An administrator wants to ensure that a production database cannot be accidentally deleted by any team member, but developers must still be able to read and write application data.",
    question: "Which Azure Resource Lock should be applied to the database resource?",
    options: [
      { id: 'A', text: "ReadOnly" },
      { id: 'B', text: "CanNotDelete (Delete lock)" },
      { id: 'C', text: "WriteOnly" },
      { id: 'D', text: "AdministrativeLock" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `CanNotDelete` lock prevents authorized users from deleting a resource, but permits reading and modifying its configurations and data. A `ReadOnly` lock restricts all write and delete operations, making the resource strictly read-only.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Resource Locks", "CanNotDelete", "ReadOnly", "Governance"]
  },
  {
    id: "az-900-159",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Tags: Best Practices",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What is the primary operational benefit of applying metadata tags (key-value pairs) to Azure resources?",
    options: [
      { id: 'A', text: "Tags increase network bandwidth on virtual machines" },
      { id: 'B', text: "Tags logically categorize resources for billing cost allocation, environment management (e.g. Env=Prod), and automation scripts" },
      { id: 'C', text: "Tags guarantee 100% SLA uptime" },
      { id: 'D', text: "Tags encrypt the underlying storage hard drives" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Tags are key-value pairs applied to resources, resource groups, and subscriptions. They allow organizations to categorize assets for cost center tracking, department chargeback, operational monitoring, and automated lifecycle policies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    tags: ["Tags", "Cost Allocation", "Governance", "ARM"]
  },
  {
    id: "az-900-160",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service Health: Personal Cloud Status",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "A customer experiences intermittent connectivity to virtual machines in North Europe. Where can they verify if Microsoft has an active platform outage or scheduled maintenance affecting their specific subscription?",
    options: [
      { id: 'A', text: "Third-party ISP status boards" },
      { id: 'B', text: "Local Windows event logs" },
      { id: 'C', text: "Azure Service Health dashboard in the Azure portal" },
      { id: 'D', text: "Public Twitter posts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Service Health provides personalized alerts and guidance when Azure service issues, planned maintenance, and health advisories impact the specific resources deployed in a customer's subscription.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    tags: ["Service Health", "Monitoring", "Outages", "Maintenance"]
  },
  {
    id: "az-900-161",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service Health: The Three Components",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which three distinct components make up Azure Service Health?",
    options: [
      { id: 'A', text: "Azure Monitor, Application Insights, and Log Analytics" },
      { id: 'B', text: "Azure Status, Service health, and Resource health" },
      { id: 'C', text: "Azure Firewall, DDoS, and WAF" },
      { id: 'D', text: "Azure Backup, Site Recovery, and Archive" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Service Health comprises: 1. Azure Status (global public status of all services), 2. Service Health (personalized view of active outages impacting your services), and 3. Resource Health (health status of individual specific resources, like a specific VM).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    tags: ["Service Health", "Resource Health", "Monitoring"]
  },
  {
    id: "az-900-162",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Microsoft Defender for Cloud: Cloud Security Posture Management (CSPM)",
    scenario: "An organization wants a continuous security dashboard that analyzes misconfigured Azure resources and calculates an overall 'Secure Score' with step-by-step remediation advice.",
    question: "Which Microsoft service provides this security posture management?",
    options: [
      { id: 'A', text: "Azure Application Gateway" },
      { id: 'B', text: "Microsoft Defender for Cloud" },
      { id: 'C', text: "Azure Key Vault" },
      { id: 'D', text: "Azure DDoS Protection" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Defender for Cloud provides unified Cloud Security Posture Management (CSPM) and Cloud Workload Protection (CWP). It continuously benchmarks resources against security baselines and generates a numerical Secure Score.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction",
    tags: ["Defender for Cloud", "Secure Score", "CSPM", "Security"]
  },
  {
    id: "az-900-163",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Microsoft Sentinel: Cloud-Native SIEM and SOAR",
    scenario: "An enterprise security operations center (SOC) needs an intelligent cloud service to ingest logs across all servers, firewalls, and cloud accounts, detect cyberattacks using AI, and automate threat responses.",
    question: "Which Azure service functions as a cloud-native SIEM and SOAR platform?",
    options: [
      { id: 'A', text: "Azure Bastion" },
      { id: 'B', text: "Microsoft Sentinel" },
      { id: 'C', text: "Azure Monitor" },
      { id: 'D', text: "Microsoft Defender for Cloud" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Sentinel is a cloud-native Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) solution that delivers intelligent security analytics across the enterprise.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/sentinel/overview",
    tags: ["Microsoft Sentinel", "SIEM", "SOAR", "SOC"]
  },
  {
    id: "az-900-164",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Monitor: Comprehensive Observability",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which Azure service collects, analyzes, and correlates operational telemetry—including metrics, activity logs, and application diagnostics—from cloud and on-premises environments?",
    options: [
      { id: 'A', text: "Azure Policy" },
      { id: 'B', text: "Azure Blueprint" },
      { id: 'C', text: "Azure Monitor" },
      { id: 'D', text: "Azure Advisor" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Monitor is the comprehensive observability platform in Azure. It collects and routes metrics and log data from Azure infrastructure and applications into Log Analytics and Application Insights to power dashboards and automated alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview",
    tags: ["Azure Monitor", "Observability", "Metrics", "Logs"]
  },
  {
    id: "az-900-165",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Monitor: Metrics vs Logs",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What is the difference between Azure Monitor Metrics and Azure Monitor Logs?",
    options: [
      { id: 'A', text: "Metrics cannot trigger alarms" },
      { id: 'B', text: "Metrics are numerical time-series values describing an aspect of a system at a point in time; Logs contain structured text records organized into tables queried with KQL" },
      { id: 'C', text: "Metrics only apply to networking; Logs only apply to virtual machines" },
      { id: 'D', text: "Metrics are stored on local hard drives; Logs are stored in the cloud" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Metrics are lightweight numerical values recorded at regular intervals that describe resource performance (like CPU percentage). Logs contain structured event and performance records stored in Log Analytics workspaces, queried using Kusto Query Language (KQL).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/data-platform",
    tags: ["Metrics", "Logs", "Log Analytics", "KQL"]
  },
  {
    id: "az-900-166",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Application Insights: Application Performance Monitoring (APM)",
    scenario: "A software developer notices slow page loads in a production web app and needs to trace live user requests, database query execution times, and unhandled exception stack traces.",
    question: "Which feature of Azure Monitor provides application performance monitoring (APM)?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Network Watcher" },
      { id: 'C', text: "Azure Sentinel" },
      { id: 'D', text: "Application Insights" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Application Insights is an extension of Azure Monitor that provides Application Performance Monitoring (APM) for live web applications, diagnosing performance bottlenecks, tracking exceptions, and visualizing application dependency maps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Insights", "APM", "Tracing", "Monitoring"]
  },
  {
    id: "az-900-167",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Advisor: The Five Recommendation Categories",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which five pillars of cloud excellence does Azure Advisor evaluate to provide personalized optimization recommendations?",
    options: [
      { id: 'A', text: "Windows, Linux, iOS, Android, and macOS" },
      { id: 'B', text: "Storage, Compute, Networking, Databases, and AI" },
      { id: 'C', text: "Development, Testing, Staging, Production, and DR" },
      { id: 'D', text: "Cost, Security, Reliability, Operational Excellence, and Performance" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Advisor evaluates running configurations against Microsoft Well-Architected best practices across five core categories: Cost (rightsizing), Security (vulnerabilities), Reliability (high availability), Operational Excellence, and Performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Advisor", "Well-Architected", "Cost Optimization", "Best Practices"]
  },
  {
    id: "az-900-168",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service Level Agreements (SLAs)",
    scenario: "What does an Azure Service Level Agreement (SLA) define?",
    question: "Which statement accurately describes an Azure SLA?",
    options: [
      { id: 'A', text: "It prohibits customers from cancelling subscriptions" },
      { id: 'B', text: "It sets the price of electricity in Microsoft datacenters" },
      { id: 'C', text: "It guarantees that software will have zero security vulnerabilities" },
      { id: 'D', text: "It represents Microsoft's formal commitment to service uptime and connectivity; if the guaranteed percentage is not met, customers are eligible for financial service credits" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure Service Level Agreement (SLA) outlines Microsoft's formal commitments to uptime and connectivity for each service. If availability drops below the documented threshold, Microsoft issues a financial Service Credit against billing.",
    referenceUrl: "https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services",
    tags: ["SLA", "Uptime", "Service Credits", "Governance"]
  },
  {
    id: "az-900-169",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Composite SLAs in Multi-Tier Architectures",
    scenario: "An application relies on an Azure App Service with an SLA of 99.95% and an Azure SQL Database with an SLA of 99.99%.",
    question: "How is the composite SLA for the combined application calculated?",
    options: [
      { id: 'A', text: "By multiplying the two SLAs together (99.95% × 99.99% ≈ 99.94%)" },
      { id: 'B', text: "By adding them together (199.94%)" },
      { id: 'C', text: "By taking the lowest number (99.95%)" },
      { id: 'D', text: "By averaging the two numbers (99.97%)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When services depend sequentially on each other, the composite SLA is calculated by multiplying the individual SLAs: 0.9995 × 0.9999 = 0.9994 (99.94%). Adding redundant fallback paths raises the composite availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics#composite-sla",
    tags: ["Composite SLA", "SLA Calculation", "Reliability", "Architecture"]
  },
  {
    id: "az-900-170",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service Lifecycle: Public Preview vs General Availability (GA)",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What is the primary difference between an Azure service in 'Public Preview' and a service that has reached 'General Availability' (GA)?",
    options: [
      { id: 'A', text: "GA services are free of charge" },
      { id: 'B', text: "Public Preview features have full SLA support; GA features have no SLA" },
      { id: 'C', text: "Public Preview allows customers to test beta features but carries no formal SLA; General Availability (GA) means the service is fully tested, commercially supported, and covered by official SLAs" },
      { id: 'D', text: "Public Preview services are hosted on third-party clouds" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Public Preview features are released for customer evaluation and feedback without formal SLAs, and are not recommended for production. General Availability (GA) indicates the service is production-ready, supported 24/7, and covered by formal SLAs.",
    referenceUrl: "https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/",
    tags: ["Public Preview", "General Availability", "GA", "Lifecycle"]
  },
  {
    id: "az-900-171",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Pricing Calculator vs Total Cost of Ownership (TCO) Calculator",
    scenario: "A finance team wants to estimate the expected monthly Azure bill for a proposed architecture of 10 VMs, 2 SQL databases, and 5 TB of storage.",
    question: "Which tool should the team use to model these cloud operational costs?",
    options: [
      { id: 'A', text: "Azure Cost Management exports" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Azure Total Cost of Ownership (TCO) Calculator" },
      { id: 'D', text: "Azure Pricing Calculator" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Azure Pricing Calculator estimates expected monthly spending for specific combinations of Azure products and configurations. The TCO Calculator compares the cost of running existing on-premises datacenters against migrating to Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/plan-manage-costs",
    tags: ["Pricing Calculator", "TCO", "Cost Estimation", "FinOps"]
  },
  {
    id: "az-900-172",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Microsoft Cost Management: Budgets and Alerts",
    scenario: "An IT director wants to receive an automated email notification whenever departmental cloud spending reaches 80% of its monthly $20,000 threshold.",
    question: "Which Azure capability should be configured?",
    options: [
      { id: 'A', text: "Azure Policy deny assignment" },
      { id: 'B', text: "Azure Budgets with cost alert notifications" },
      { id: 'C', text: "Azure Key Vault expiration" },
      { id: 'D', text: "Azure Blueprint lock" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Budgets in Microsoft Cost Management allows administrators to set spending thresholds over a month, quarter, or year and configure automated alert emails or Action Groups when spending reaches designated percentages (e.g. 80%, 100%).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    tags: ["Azure Budgets", "Cost Management", "Alerts", "FinOps"]
  },
  {
    id: "az-900-173",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Cost Optimization: Azure Reservations (Reserved Instances)",
    scenario: "A company has 50 virtual machines that run 24/7 all year. They are willing to commit to consistent usage for 3 years in exchange for significant discounts.",
    question: "Which purchasing model offers up to 72% cost savings compared to pay-as-you-go rates?",
    options: [
      { id: 'A', text: "Spot Virtual Machines" },
      { id: 'B', text: "Pay-as-you-go pricing" },
      { id: 'C', text: "Azure Free Tier" },
      { id: 'D', text: "Azure Reservations (Reserved Virtual Machine Instances)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Reservations provide up to 72% discounts off pay-as-you-go rates by committing to a one-year or three-year plan for predictable, steady-state compute workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    tags: ["Reservations", "Reserved Instances", "Cost Optimization", "FinOps"]
  },
  {
    id: "az-900-174",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Hybrid Benefit (AHB): Software Licensing Savings",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An enterprise owns on-premises Windows Server and SQL Server licenses with active Software Assurance. How can they reduce Azure VM costs?",
    options: [
      { id: 'A', text: "By applying Azure Hybrid Benefit to run Windows and SQL workloads on Azure at the base Linux compute rate" },
      { id: 'B', text: "By using free tier accounts exclusively" },
      { id: 'C', text: "By deleting the on-premises licenses" },
      { id: 'D', text: "By requesting free compute from Microsoft support" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Hybrid Benefit (AHB) allows customers to apply existing on-premises Windows Server and SQL Server licenses with active Software Assurance to Azure VMs, paying only base Linux compute rates and saving up to 85% when combined with Reservations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/hybrid-benefit",
    tags: ["Azure Hybrid Benefit", "Licensing", "Cost Optimization", "Software Assurance"]
  },
  {
    id: "az-900-175",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Spot Virtual Machines: Utilizing Unused Capacity",
    scenario: "A university runs batch machine learning training jobs that can be interrupted and restarted at any time without financial consequence.",
    question: "Which compute purchasing option offers up to 90% discounts by utilizing spare, unallocated Azure compute capacity?",
    options: [
      { id: 'A', text: "Reserved Virtual Machines" },
      { id: 'B', text: "Spot Virtual Machines" },
      { id: 'C', text: "Dedicated Host instances" },
      { id: 'D', text: "Standard On-Demand Virtual Machines" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Spot Virtual Machines let customers access unused Azure compute capacity at discounts of up to 90% compared to pay-as-you-go rates, with the trade-off that Microsoft can evict the VM with 30 seconds notice when capacity is needed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms",
    tags: ["Spot VMs", "Compute", "Batch Processing", "Cost Optimization"]
  }
];

export default AZURE_AZ900_QUESTIONS_7;
