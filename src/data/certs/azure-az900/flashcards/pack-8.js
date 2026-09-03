export const AZURE_AZ900_FLASHCARDS_8 = [
  {
    "id": "azure-az900-fc-176",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Pricing Calculator vs. TCO Calculator",
    "hint": "Predicting new cloud spend vs. comparing against on-premises datacenters.",
    "back": "The <strong>Azure Pricing Calculator</strong> estimates future monthly costs for planned Azure workloads based on expected consumption. The <strong>TCO (Total Cost of Ownership) Calculator</strong> models the financial difference between staying in an on-premises datacenter versus migrating to Azure.",
    "tags": [
      "Management",
      "Pricing Calculator",
      "TCO"
    ]
  },
  {
    "id": "azure-az900-fc-177",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Microsoft Cost Management & Azure Budgets",
    "hint": "Tracking spend and alerting before budget overruns occur.",
    "back": "<strong>Microsoft Cost Management</strong> provides cost analysis and reporting across subscriptions. <strong>Azure Budgets</strong> sets financial thresholds that trigger automated email alerts or action groups (e.g. running automation runbooks) when spending reaches specified percentages.",
    "tags": [
      "Management",
      "Cost Management",
      "Budgets"
    ]
  },
  {
    "id": "azure-az900-fc-178",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Reservations vs. Spot Virtual Machines",
    "hint": "Discount for long-term commitment vs. discount for spare interruptible compute.",
    "back": "<strong>Azure Reservations</strong> offer up to 72% discounts in exchange for a 1-year or 3-year term commitment for steady-state workloads. <strong>Spot Virtual Machines</strong> offer up to 90% discounts on unused Azure capacity, but can be evicted with a 30-second notice when capacity is needed.",
    "tags": [
      "Cost Optimization",
      "Reservations",
      "Spot VMs"
    ]
  },
  {
    "id": "azure-az900-fc-179",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Hybrid Benefit (AHB)",
    "hint": "Using existing on-premises Windows and SQL licenses in Azure.",
    "back": "<strong>Azure Hybrid Benefit</strong> is a licensing offer that allows customers with active Software Assurance on on-premises Windows Server and SQL Server core licenses to run Azure VMs and Azure SQL databases paying only the base compute rate, saving up to 85%.",
    "tags": [
      "Cost Optimization",
      "Hybrid Benefit",
      "Licensing"
    ]
  },
  {
    "id": "azure-az900-fc-180",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Resource Tags",
    "hint": "Key-value metadata for billing and asset attribution.",
    "back": "<strong>Azure Tags</strong> are key-value pairs applied to resources, resource groups, and subscriptions to logically categorize assets for cost attribution, environment tracking (Prod/Dev), and department billing. Tags are NOT automatically inherited by child resources.",
    "tags": [
      "Governance",
      "Tags",
      "Cost Allocation"
    ]
  },
  {
    "id": "azure-az900-fc-181",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Policy vs. Azure Role-Based Access Control (RBAC)",
    "hint": "Enforcing resource configuration standards vs. managing user permissions.",
    "back": "<strong>Azure Policy</strong> focuses on resource properties and compliance (e.g. 'Are VMs allowed in this region? Is tagging enforced?'). <strong>Azure RBAC</strong> focuses on user and principal permissions (e.g. 'Who can create or delete a VM?').",
    "tags": [
      "Governance",
      "Azure Policy",
      "RBAC"
    ]
  },
  {
    "id": "azure-az900-fc-182",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Policy Initiatives (Policy Sets)",
    "hint": "Grouping multiple policy definitions into a single assignment.",
    "back": "An <strong>Azure Policy Initiative</strong> groups multiple related policy definitions together into a single manageable unit, allowing organizations to assign and track compliance against entire regulatory standards (such as ISO 27001 or HIPAA) with one assignment.",
    "tags": [
      "Governance",
      "Policy Initiatives",
      "Compliance"
    ]
  },
  {
    "id": "azure-az900-fc-183",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Resource Locks: CanNotDelete vs. ReadOnly",
    "hint": "Preventing accidental deletion vs. preventing all modifications.",
    "back": "A <strong>CanNotDelete (Delete)</strong> lock prevents authorized users from deleting a resource, but allows reading and modifying configurations. A <strong>ReadOnly</strong> lock prevents both deleting AND modifying resource configurations (e.g. stopping a VM or changing IP).",
    "tags": [
      "Governance",
      "Resource Locks",
      "Protection"
    ]
  },
  {
    "id": "azure-az900-fc-184",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Service Trust Portal",
    "hint": "Central repository for official Microsoft audit and compliance reports.",
    "back": "The <strong>Microsoft Service Trust Portal</strong> provides public access to independent third-party audit reports, SOC 1/2/3 reports, ISO certifications, FedRAMP documentation, and security white papers validating Microsoft's compliance posture.",
    "tags": [
      "Governance",
      "Service Trust Portal",
      "Compliance"
    ]
  },
  {
    "id": "azure-az900-fc-185",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Microsoft Purview",
    "hint": "Unified data governance, classification, and cataloging.",
    "back": "<strong>Microsoft Purview</strong> is a comprehensive data governance solution that scans, maps, and automatically classifies sensitive data (PII, financial numbers) across on-premises databases, multi-cloud storage, and SaaS applications to provide end-to-end data lineage.",
    "tags": [
      "Governance",
      "Microsoft Purview",
      "Data Governance"
    ]
  },
  {
    "id": "azure-az900-fc-186",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Arc",
    "hint": "Extending Azure management, policies, and ARM to hybrid servers.",
    "back": "<strong>Azure Arc</strong> simplifies governance by projecting non-Azure resources (Windows and Linux physical servers, on-premises Kubernetes clusters, and AWS/GCP servers) into Azure Resource Manager, allowing unified management and policy enforcement.",
    "tags": [
      "Management",
      "Azure Arc",
      "Hybrid"
    ]
  },
  {
    "id": "azure-az900-fc-187",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Portal vs. Azure Cloud Shell vs. Azure CLI",
    "hint": "Web browser GUI, browser terminal, or local command-line tool.",
    "back": "The <strong>Azure Portal</strong> is a browser-based GUI. <strong>Azure Cloud Shell</strong> is an interactive, browser-accessible authenticated terminal (Bash or PowerShell) backed by persistent storage. <strong>Azure CLI</strong> is a cross-platform command-line utility installed on local machines.",
    "tags": [
      "Management",
      "Portal",
      "Cloud Shell",
      "CLI"
    ]
  },
  {
    "id": "azure-az900-fc-188",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Infrastructure as Code: ARM Templates vs. Azure Bicep",
    "hint": "Verbose JSON templates vs. clean declarative DSL.",
    "back": "<strong>ARM Templates</strong> use complex JSON syntax for declarative resource deployment. <strong>Azure Bicep</strong> is a modern domain-specific language (DSL) featuring concise syntax, type safety, modularity, and automatic compilation into standard ARM JSON templates.",
    "tags": [
      "Infrastructure as Code",
      "Bicep",
      "ARM"
    ]
  },
  {
    "id": "azure-az900-fc-189",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Advisor: The Five Pillars",
    "hint": "Personalized best-practice recommendations for your environment.",
    "back": "<strong>Azure Advisor</strong> analyzes configuration telemetry to provide tailored recommendations across five core pillars: <strong>Cost</strong>, <strong>Security</strong>, <strong>Reliability (High Availability)</strong>, <strong>Performance</strong>, and <strong>Operational Excellence</strong>.",
    "tags": [
      "Management",
      "Azure Advisor",
      "Best Practices"
    ]
  },
  {
    "id": "azure-az900-fc-190",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Service Health vs. Azure Status",
    "hint": "Personalized health of your specific resources vs. global service overview.",
    "back": "The public <strong>Azure Status</strong> page shows global health across all regions for anyone. <strong>Azure Service Health</strong> provides a personalized dashboard showing outages, planned maintenance, and health advisories specifically impacting the services and regions your subscriptions use.",
    "tags": [
      "Monitoring",
      "Service Health",
      "Azure Status"
    ]
  },
  {
    "id": "azure-az900-fc-191",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Monitor: Metrics vs. Logs",
    "hint": "Lightweight time-series numbers vs. rich searchable text records.",
    "back": "<strong>Metrics</strong> in Azure Monitor are lightweight numerical values stored in time-series format describing system attributes at specific timestamps. <strong>Logs</strong> (stored in Log Analytics) contain structured and unstructured event records queryable using Kusto Query Language (KQL).",
    "tags": [
      "Monitoring",
      "Azure Monitor",
      "Metrics",
      "Logs"
    ]
  },
  {
    "id": "azure-az900-fc-192",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Application Insights",
    "hint": "Application Performance Monitoring (APM) for live web apps.",
    "back": "<strong>Application Insights</strong> is a feature of Azure Monitor that provides deep Application Performance Monitoring (APM) for live applications, automatically detecting performance anomalies, logging unhandled exceptions, and mapping distributed dependencies.",
    "tags": [
      "Monitoring",
      "Application Insights",
      "APM"
    ]
  },
  {
    "id": "azure-az900-fc-193",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #1",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #1</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-194",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #2",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #2</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-195",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #3",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #3</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-196",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #4",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #4</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-197",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #5",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #5</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-198",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #6",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #6</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-199",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #7",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #7</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  },
  {
    "id": "azure-az900-fc-200",
    "difficulty": "hard",
    "certId": "azure-az900",
    "domainId": "d3",
    "front": "Azure Governance Mechanism #8",
    "hint": "Core governance policy, security control, or management tool.",
    "back": "<strong>Azure Governance Mechanism #8</strong> enforces operational compliance, cost accountability, and least-privilege administrative standards across subscriptions in accordance with Microsoft Cloud Adoption Framework guidelines.",
    "tags": [
      "Governance",
      "Management"
    ]
  }
];

export default AZURE_AZ900_FLASHCARDS_8;
