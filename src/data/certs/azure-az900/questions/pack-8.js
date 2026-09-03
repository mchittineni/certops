export const AZURE_AZ900_QUESTIONS_8 = [
  {
    id: "az-900-176",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Cost Management - TCO Calculator",
    scenario: "A company currently operating an on-premises datacenter wants to evaluate the estimated cost savings of migrating their entire infrastructure to Microsoft Azure over a 5-year period.",
    question: "Which official tool is specifically designed for comparing on-premises costs with Azure migration savings?",
    options: [
      { id: 'A', text: "The Azure Pricing Calculator" },
      { id: 'B', text: "Azure Advisor" },
      { id: 'C', text: "The Total Cost of Ownership (TCO) Calculator" },
      { id: 'D', text: "Microsoft Cost Management" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Total Cost of Ownership (TCO) Calculator helps organizations estimate and compare the total cost of operating an on-premises datacenter (including hardware, electricity, cooling, labor, and software licenses) against running workloads on Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-overview",
    tags: ["Management", "TCO Calculator", "Cost Analysis"]
  },
  {
    id: "az-900-177",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Cost Management - Microsoft Cost Management",
    scenario: "A financial director needs to monitor current monthly Azure spending, view cost breakdowns by department tags, and track historical spending trends across all company subscriptions.",
    question: "Which built-in Azure tool provides these cost tracking capabilities?",
    options: [
      { id: 'A', text: "Azure Policy" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Azure Pricing Calculator" },
      { id: 'D', text: "Microsoft Cost Management" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Cost Management is a built-in suite of governance and financial tools that allows organizations to analyze current and historical cloud spending, track budgets, visualize cost allocations, and identify optimization opportunities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-overview",
    tags: ["Management", "Cost Management", "Budgeting"]
  },
  {
    id: "az-900-178",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Cost Management - Azure Budgets",
    scenario: "An IT manager wants to ensure an automated email alert is sent to project leads whenever a development subscription reaches 80% of its allotted monthly budget.",
    question: "Which feature in Microsoft Cost Management satisfies this requirement?",
    options: [
      { id: 'A', text: "Azure Policy initiatives" },
      { id: 'B', text: "Azure Reservations" },
      { id: 'C', text: "Azure Service Health advisories" },
      { id: 'D', text: "Azure Budgets and budget alerts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Budgets in Microsoft Cost Management allow organizations to plan for and drive organizational accountability by creating budgets for subscriptions or resource groups and triggering automated alerts when spending reaches configured thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets",
    tags: ["Management", "Budgets", "Alerts"]
  },
  {
    id: "az-900-179",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Reservations Cost Savings",
    scenario: "A company runs a predictable core production database on an Azure Virtual Machine continuously 24 hours a day, 365 days a year, with no planned changes for the next three years.",
    question: "Which purchasing option offers up to 72% discounts compared to pay-as-you-go rates in exchange for a committed term?",
    options: [
      { id: 'A', text: "Spot Virtual Machines" },
      { id: 'B', text: "Azure Reservations" },
      { id: 'C', text: "Consumption plan" },
      { id: 'D', text: "Pay-as-you-go billing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Reservations allow customers to commit to one-year or three-year plans for predictable compute and storage resources (such as VMs, SQL Database, Cosmos DB), offering significant discounts (up to 72%) over standard pay-as-you-go rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations",
    tags: ["Management", "Reservations", "Cost Optimization"]
  },
  {
    id: "az-900-180",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Hybrid Benefit",
    scenario: "An enterprise owns on-premises Windows Server and SQL Server core licenses with active Software Assurance. They want to migrate to Azure Virtual Machines while avoiding paying again for Windows Server OS licensing fees.",
    question: "Which Azure licensing program allows them to apply their existing licenses to cloud workloads?",
    options: [
      { id: 'A', text: "Azure Hybrid Benefit (AHB)" },
      { id: 'B', text: "Microsoft Cost Management" },
      { id: 'C', text: "Azure Reservations" },
      { id: 'D', text: "Azure Dev/Test Pricing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Hybrid Benefit is a pricing offer that helps maximize the value of existing on-premises Windows Server and SQL Server licenses with active Software Assurance, letting customers run Azure VMs and Azure SQL at base compute rates without OS licensing fees.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/hybrid-use-benefit-licensing",
    tags: ["Management", "Hybrid Benefit", "Licensing"]
  },
  {
    id: "az-900-181",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Tags for Cost Attribution",
    scenario: "A finance department needs to categorize cloud costs by department code, environment (Prod/Dev), and project owner across all deployed Azure resources.",
    question: "Which metadata feature in Azure provides this labeling capability?",
    options: [
      { id: 'A', text: "Azure Policy exemptions" },
      { id: 'B', text: "Resource locks" },
      { id: 'C', text: "Network Security Groups" },
      { id: 'D', text: "Azure resource tags" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure tags are key-value pairs of metadata applied to Azure resources, resource groups, and subscriptions that enable organizations to logically categorize resources for billing, cost allocation, and asset tracking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources",
    tags: ["Governance", "Tags", "Metadata"]
  },
  {
    id: "az-900-182",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy Governance",
    scenario: "A security officer requires that developers are blocked from deploying Azure Virtual Machines in any region outside of North Europe and West Europe to maintain geographic compliance.",
    question: "Which Azure service enforces this configuration restriction?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Policy" },
      { id: 'C', text: "Network Security Groups" },
      { id: 'D', text: "Azure Monitor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Policy is a governance tool that helps enforce organizational standards and assess compliance at scale. By assigning policy definitions (such as 'Allowed Locations'), organizations can prevent the creation of non-compliant resources.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview",
    tags: ["Governance", "Azure Policy", "Compliance"]
  },
  {
    id: "az-900-183",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy Initiatives",
    scenario: "An organization needs to enforce and track compliance against 25 individual security policies aligned with the ISO 27001 regulatory framework.",
    question: "Which Azure Policy concept groups multiple policy definitions into a single manageable unit?",
    options: [
      { id: 'A', text: "A Management Group hierarchy" },
      { id: 'B', text: "An Azure Policy Initiative (policy set)" },
      { id: 'C', text: "A Resource Group container" },
      { id: 'D', text: "An Azure Role assignment" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure Policy Initiative (also called a policy set definition) is a collection of related policy definitions grouped together into a single unit. Initiatives simplify compliance tracking by allowing organizations to assign a single initiative representing a standard (like ISO 27001).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview",
    tags: ["Governance", "Policy Initiatives", "ISO 27001"]
  },
  {
    id: "az-900-184",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Resource Locks - Delete",
    scenario: "An administrator needs to ensure that team members cannot accidentally delete a critical production virtual machine, while still allowing them to read, stop, start, and reconfigure the VM.",
    question: "Which type of resource lock should be applied?",
    options: [
      { id: 'A', text: "A CanNotDelete (Delete) resource lock" },
      { id: 'B', text: "A Network Security Group block rule" },
      { id: 'C', text: "An Azure Policy deny assignment" },
      { id: 'D', text: "A ReadOnly resource lock" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CanNotDelete (Delete) resource lock prevents authorized users from deleting an Azure resource, while still allowing them to read and modify resource configurations. A ReadOnly lock would prevent both deletion and modification.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Governance", "Resource Locks", "Protection"]
  },
  {
    id: "az-900-185",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Resource Locks - ReadOnly",
    scenario: "A compliance auditor requires that a production storage account containing financial audit records cannot be modified, reconfigured, or deleted by any user, including subscription owners.",
    question: "Which resource lock must be applied to the storage account?",
    options: [
      { id: 'A', text: "An Azure Advisor recommendation" },
      { id: 'B', text: "A ReadOnly resource lock" },
      { id: 'C', text: "An Azure RBAC Contributor role" },
      { id: 'D', text: "A CanNotDelete resource lock" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A ReadOnly resource lock prevents authorized users from modifying or deleting an Azure resource. It restricts all actions that change the state of the resource, allowing users only to read its properties.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Governance", "Resource Locks", "ReadOnly"]
  },
  {
    id: "az-900-186",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Service Trust Portal",
    scenario: "A company preparing for a security audit needs to download official SOC 2, ISO 27001, and HIPAA compliance audit reports conducted on Microsoft Azure datacenters.",
    question: "Where can customers access these third-party security and compliance verification documents?",
    options: [
      { id: 'A', text: "Azure Cloud Shell" },
      { id: 'B', text: "Microsoft Cost Management" },
      { id: 'C', text: "Azure Pricing Calculator" },
      { id: 'D', text: "The Microsoft Service Trust Portal" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Microsoft Service Trust Portal provides public access to a wide range of audit reports, compliance guides, white papers, and security assessments verifying Microsoft's adherence to global compliance standards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/service-trust-portal",
    tags: ["Governance", "Compliance", "Service Trust Portal"]
  },
  {
    id: "az-900-187",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Purview Data Governance",
    scenario: "An enterprise requires a unified data governance solution that can discover, classify, and protect sensitive data across on-premises SQL servers, Azure Blob Storage, and multi-cloud environments.",
    question: "Which Microsoft service provides this comprehensive data governance?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure Policy" },
      { id: 'D', text: "Microsoft Purview" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Purview is a unified data governance service that helps organizations manage and govern on-premises, multi-cloud, and Software as a Service (SaaS) data. It provides automated data discovery, sensitive data classification, and end-to-end data lineage.",
    referenceUrl: "https://learn.microsoft.com/en-us/purview/purview",
    tags: ["Governance", "Microsoft Purview", "Data Governance"]
  },
  {
    id: "az-900-188",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Arc Hybrid Management",
    scenario: "An enterprise runs hundreds of Linux and Windows servers across on-premises datacenters and AWS, alongside Azure VMs. They want to manage all servers, apply Azure Policies, and run Azure services uniformly from a single Azure control plane.",
    question: "Which service extends Azure management capabilities to non-Azure infrastructure?",
    options: [
      { id: 'A', text: "Azure Virtual Network peering" },
      { id: 'B', text: "Azure Arc" },
      { id: 'C', text: "Azure Migrate" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Arc simplifies governance and management by extending the Azure Resource Manager (ARM) control plane to non-Azure resources, including servers, Kubernetes clusters, and databases running on-premises, at the edge, or in other public clouds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-arc/overview",
    tags: ["Management", "Azure Arc", "Hybrid Governance"]
  },
  {
    id: "az-900-189",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Portal Administration",
    scenario: "A junior administrator needs an intuitive, web-based graphical interface to explore services, build resources, and review dashboards from any standard web browser.",
    question: "Which management tool should they use?",
    options: [
      { id: 'A', text: "Azure PowerShell SDK" },
      { id: 'B', text: "The Azure CLI in a terminal" },
      { id: 'C', text: "The Azure Portal" },
      { id: 'D', text: "Azure Resource Manager JSON editor" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Portal is a web-based, unified graphical user interface for building, managing, and monitoring everything from simple web apps to complex cloud deployments across all Azure services.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-overview",
    tags: ["Management", "Azure Portal", "Administration"]
  },
  {
    id: "az-900-190",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Cloud Shell",
    scenario: "A DevOps engineer needs to run Azure CLI scripts from a browser window on a machine that has no local development tools or PowerShell modules installed.",
    question: "Which built-in browser-based command-line environment should the engineer use?",
    options: [
      { id: 'A', text: "Azure Cloud Shell" },
      { id: 'B', text: "Visual Studio Code on-premises" },
      { id: 'C', text: "Azure Service Health" },
      { id: 'D', text: "Windows Terminal Desktop" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Cloud Shell is an interactive, authenticated, browser-accessible shell for managing Azure resources. It gives users the choice of either Bash or PowerShell and comes pre-configured with popular command-line tools, language runtimes, and persistent file storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-shell/overview",
    tags: ["Management", "Cloud Shell", "CLI"]
  },
  {
    id: "az-900-191",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Infrastructure as Code - ARM & Bicep",
    scenario: "An infrastructure engineer wants to define and deploy virtual machines, virtual networks, and databases using declarative code files that can be version-controlled in Git and compiled directly into ARM templates with clean, concise syntax.",
    question: "Which domain-specific language (DSL) provides this capability in Azure?",
    options: [
      { id: 'A', text: "Azure Policy JSON" },
      { id: 'B', text: "Azure Bicep" },
      { id: 'C', text: "Azure Cloud Shell Bash aliases" },
      { id: 'D', text: "Azure PowerShell scripts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. Bicep offers concise syntax, first-class support for modularity, and compiles directly into standard Azure Resource Manager (ARM) JSON templates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview",
    tags: ["Management", "Bicep", "Infrastructure as Code"]
  },
  {
    id: "az-900-192",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Advisor Best Practices",
    scenario: "A cloud architect wants personalized recommendations to optimize costs, improve security posture, ensure high availability, and accelerate performance across their Azure subscriptions.",
    question: "Which built-in service provides these tailored recommendations across five core pillars?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Azure Pricing Calculator" },
      { id: 'D', text: "Azure Monitor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Advisor is a personalized cloud consultant that analyzes your resource configurations and usage telemetry to provide actionable best-practice guidance across five pillars: Cost, Security, Reliability (High Availability), Performance, and Operational Excellence.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Management", "Azure Advisor", "Best Practices"]
  },
  {
    id: "az-900-193",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Service Health",
    scenario: "An operations manager wants to know if a current outage in an Azure region affects any services or resources currently deployed within their specific subscriptions.",
    question: "Which personalized dashboard provides notifications regarding service outages, planned maintenance, and health advisories relevant to their resources?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "The public Azure Status webpage" },
      { id: 'C', text: "Microsoft Cost Management" },
      { id: 'D', text: "Azure Service Health" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Service Health provides a personalized view of the health of the Azure services and regions your resources rely on. Unlike the public Azure Status page (which shows global health), Service Health provides customized notifications about incidents and planned maintenance impacting your specific environment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview",
    tags: ["Management", "Service Health", "Monitoring"]
  },
  {
    id: "az-900-194",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Monitor Telemetry Collection",
    scenario: "An operations team needs a centralized solution to collect, analyze, and act on telemetry and performance metrics from Azure virtual machines, web apps, and on-premises servers.",
    question: "Which Azure service provides comprehensive observability and monitoring?",
    options: [
      { id: 'A', text: "Azure Key Vault" },
      { id: 'B', text: "Azure Traffic Manager" },
      { id: 'C', text: "Azure Monitor" },
      { id: 'D', text: "Azure Resource Manager" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Monitor maximizes the availability and performance of applications and services by delivering a comprehensive solution for collecting, analyzing, and acting on telemetry from cloud and on-premises environments, encompassing Metrics, Logs (Log Analytics), and Alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview",
    tags: ["Monitoring", "Azure Monitor", "Observability"]
  },
  {
    id: "az-900-195",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Log Analytics and KQL",
    scenario: "A system engineer needs to query complex log records collected from hundreds of virtual machines to troubleshoot authentication failures using a dedicated query language.",
    question: "Which component of Azure Monitor provides this query capability using the Kusto Query Language (KQL)?",
    options: [
      { id: 'A', text: "Azure Pricing Calculator" },
      { id: 'B', text: "Azure Service Health" },
      { id: 'C', text: "Log Analytics" },
      { id: 'D', text: "Azure Metrics Explorer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Monitor Logs uses Log Analytics workspaces to store complex, structured log data. Engineers use the powerful Kusto Query Language (KQL) to write queries, analyze millions of records in seconds, and identify operational patterns.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Monitoring", "Log Analytics", "KQL"]
  },
  {
    id: "az-900-196",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Monitor Alerts",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure monitor alerts.",
    question: "Which statement or mechanism accurately describes azure monitor alerts?",
    options: [
      { id: 'A', text: "Azure Monitor Alerts" },
      { id: 'B', text: "Azure Policy Deny effect" },
      { id: 'C', text: "Azure Service Health" },
      { id: 'D', text: "Azure Advisor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Monitor Alerts proactively notify administrators when metric thresholds (such as CPU > 90%) are exceeded, or when specific error events are detected in log queries. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-197",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Application Insights - APM",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for application insights - apm.",
    question: "Which statement or mechanism accurately describes application insights - apm?",
    options: [
      { id: 'A', text: "Application Insights" },
      { id: 'B', text: "Log Analytics workspace only" },
      { id: 'C', text: "Azure Bastion" },
      { id: 'D', text: "Azure Network Watcher" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Insights is an extension of Azure Monitor providing Application Performance Monitoring (APM) for live web apps, detecting exceptions, page load times, and dependency rates. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Application"]
  },
  {
    id: "az-900-198",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure CLI Cross-Platform Scripting",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure cli cross-platform scripting.",
    question: "Which statement or mechanism accurately describes azure cli cross-platform scripting?",
    options: [
      { id: 'A', text: "Azure Portal web UI" },
      { id: 'B', text: "Azure PowerShell Az module only" },
      { id: 'C', text: "Azure Bicep compiler" },
      { id: 'D', text: "Azure CLI" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure CLI is a cross-platform command-line tool written in Python that can be installed on Windows, macOS, and Linux to automate Azure administration using Bash or CMD. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-199",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure PowerShell Az Module",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure powershell az module.",
    question: "Which statement or mechanism accurately describes azure powershell az module?",
    options: [
      { id: 'A', text: "Azure PowerShell" },
      { id: 'B', text: "Azure Cloud Shell Bash" },
      { id: 'C', text: "Azure CLI" },
      { id: 'D', text: "ARM JSON editor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure PowerShell provides cmdlets designed for managing Azure resources directly from PowerShell scripts across Windows, macOS, and Linux. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-200",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Cost Alerts vs Budgets",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure cost alerts vs budgets.",
    question: "Which statement or mechanism accurately describes azure cost alerts vs budgets?",
    options: [
      { id: 'A', text: "Azure Advisor security recommendations" },
      { id: 'B', text: "Budget alerts in Microsoft Cost Management" },
      { id: 'C', text: "Service Health alerts" },
      { id: 'D', text: "Policy initiative enforcement" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cost alerts notify stakeholders when spending thresholds defined in an Azure budget are breached, allowing proactive corrective action before billing month-end. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  }
];

export default AZURE_AZ900_QUESTIONS_8;
