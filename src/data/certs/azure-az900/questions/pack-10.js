export const AZURE_AZ900_QUESTIONS_10 = [
  {
    id: "az-900-226",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy: Enforcing Resource Compliance",
    scenario: "An enterprise policy mandates that no employee may deploy virtual machines outside of European Azure regions (West Europe and North Europe) to satisfy GDPR compliance.",
    question: "Which Azure governance tool should the administrator use to enforce this restriction?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "Azure Virtual Network Gateway" },
      { id: 'C', text: "Azure Cost Management alerts" },
      { id: 'D', text: "Azure Policy with an 'Allowed locations' policy definition" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Policy enforces organizational standards and assesses compliance at scale. Assigning the built-in 'Allowed locations' policy definition to a management group or subscription blocks any attempt to provision resources outside specified regions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview",
    tags: ["Azure Policy", "GDPR", "Compliance", "Governance"]
  },
  {
    id: "az-900-227",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy: Initiatives (Policy Sets)",
    scenario: "An organization needs to enforce 30 distinct security policies required for PCI-DSS compliance across all production subscriptions.",
    question: "Rather than assigning 30 individual policies one by one, which Azure Policy feature should be used?",
    options: [
      { id: 'A', text: "An Initiative (Policy Set Definition)" },
      { id: 'B', text: "A Resource Lock" },
      { id: 'C', text: "A Cost Budget" },
      { id: 'D', text: "An Action Group" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Initiative (also known as a Policy Set definition) is a collection of individual policy definitions grouped together toward a single overarching goal (such as PCI-DSS or CIS benchmark compliance), simplifying management and tracking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview#initiative-definition",
    tags: ["Azure Policy", "Initiative", "Compliance", "Governance"]
  },
  {
    id: "az-900-228",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy Evaluation and Non-Compliance Remediation",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An administrator creates a new policy requiring all storage accounts to enforce HTTPS traffic. What happens to existing storage accounts that currently allow HTTP?",
    options: [
      { id: 'A', text: "Existing resources are marked as 'Non-compliant' in the compliance dashboard, and remediation tasks can be executed to bring them into compliance without breaking workloads" },
      { id: 'B', text: "Existing non-compliant storage accounts are deleted immediately" },
      { id: 'C', text: "All subscription billing is suspended" },
      { id: 'D', text: "All data inside the storage accounts is erased" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Policy evaluates existing resources without deleting them. Non-compliant resources are flagged in the Azure Policy compliance dashboard, and automated or manual remediation tasks can update their configuration to compliant states.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources",
    tags: ["Azure Policy", "Remediation", "Compliance", "Governance"]
  },
  {
    id: "az-900-229",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Service Trust Portal",
    scenario: "An enterprise compliance officer needs to download official SOC 1, SOC 2, and ISO 27001 third-party audit reports proving Microsoft Azure's regulatory compliance.",
    question: "Where does Microsoft provide on-demand access to independent audit reports and compliance documentation?",
    options: [
      { id: 'A', text: "Azure Cloud Shell" },
      { id: 'B', text: "Public news websites" },
      { id: 'C', text: "Microsoft Service Trust Portal" },
      { id: 'D', text: "The Azure Pricing Calculator" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Microsoft Service Trust Portal is the public portal where customers can access and download official third-party audit reports (SOC, ISO, FedRAMP, PCI-DSS), compliance guides, and security whitepapers for Microsoft cloud services.",
    referenceUrl: "https://learn.microsoft.com/en-us/compliance/regulatory/offering-home",
    tags: ["Service Trust Portal", "Compliance", "Audit Reports", "Security"]
  },
  {
    id: "az-900-230",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Cost Management: Analyzing Historical Spending",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Where in the Azure portal can a finance manager view interactive cost charts, filter spending by tags, and analyze monthly invoice breakdown reports?",
    options: [
      { id: 'A', text: "Azure Network Watcher" },
      { id: 'B', text: "Microsoft Cost Management + Billing" },
      { id: 'C', text: "Azure Service Health" },
      { id: 'D', text: "Azure Sentinel" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Cost Management + Billing provides comprehensive cost analysis dashboards to visualize historical expenditure, group spending by tags and resource groups, track budgets, and manage enterprise billing profiles.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis",
    tags: ["Cost Management", "FinOps", "Cost Analysis", "Billing"]
  },
  {
    id: "az-900-231",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Factors Influencing Cloud Cost: Inbound vs Outbound Data Transfer",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How does Microsoft Azure bill for network data transfer between Azure datacenters and the public internet?",
    options: [
      { id: 'A', text: "Inbound data transfer is billed at $1 per gigabyte; Outbound data transfer is completely free" },
      { id: 'B', text: "Inbound data transfer into Azure is free; Outbound data transfer (egress) from Azure to the internet is billed per gigabyte" },
      { id: 'C', text: "All network data transfer is 100% free of charge" },
      { id: 'D', text: "Network data transfer is billed based on cable length" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Across virtually all public clouds, inbound data transfer (ingress) into Azure datacenters is free of charge. Outbound data transfer (egress) leaving Azure to the internet is billed per gigabyte based on volume pricing tiers.",
    referenceUrl: "https://azure.microsoft.com/en-us/pricing/details/bandwidth/",
    tags: ["Bandwidth", "Egress", "Cost Factors", "Networking"]
  },
  {
    id: "az-900-232",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Pricing Factors: Service Type, Location, and Tier",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An architect compares two identical Virtual Machines deployed in East US versus Switzerland North. Why is the monthly cost different between the two regions?",
    options: [
      { id: 'A', text: "Microsoft changes prices based on customer currency exchange rates randomly" },
      { id: 'B', text: "Prices are legally required to double outside North America" },
      { id: 'C', text: "Cloud resource pricing varies by geography based on local datacenter construction costs, electricity rates, taxes, and hardware availability" },
      { id: 'D', text: "All Azure regions charge identical prices worldwide" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure pricing reflects real-world infrastructure operational costs: local power, real estate, hardware procurement, and regulatory overhead vary by region, causing identical VM sizes to carry slightly different price tags across regions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/plan-manage-costs#cost-factors",
    tags: ["Pricing", "Cost Factors", "Regions", "Economics"]
  },
  {
    id: "az-900-233",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Spending Limits on Azure Free and Trial Subscriptions",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "A student signs up for an Azure Free Account. How does the default 'Spending Limit' feature protect the student from unexpected credit card charges?",
    options: [
      { id: 'A', text: "It pauses and deallocates compute resources automatically as soon as the included free monthly credit ($200) is exhausted, preventing any unexpected charges" },
      { id: 'B', text: "It reduces virtual machine screen resolution" },
      { id: 'C', text: "It cancels the student's credit card immediately" },
      { id: 'D', text: "It deletes all student files permanently" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Spending Limit feature automatically shuts down and deallocates resources as soon as included credit is exhausted, ensuring that trial and development accounts never incur surprise credit card bills unless explicitly removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit",
    tags: ["Spending Limit", "Free Tier", "Cost Protection", "Billing"]
  },
  {
    id: "az-900-234",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Role-Based Access Control: Scope Inheritance",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An administrator assigns the 'Contributor' role to an engineer at the Management Group level. What permissions does the engineer have on subscriptions and resource groups within that hierarchy?",
    options: [
      { id: 'A', text: "The Contributor role inherits downwards: the engineer automatically has Contributor permissions on all subscriptions, resource groups, and resources within that Management Group" },
      { id: 'B', text: "The engineer only has Reader access" },
      { id: 'C', text: "Permissions are blocked by default unless re-assigned at every level" },
      { id: 'D', text: "The engineer has Contributor access only to the Management Group itself" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure RBAC supports hierarchical scope inheritance: Management Group → Subscription → Resource Group → Resource. Permissions granted at a parent scope automatically cascade down to all child containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview",
    tags: ["RBAC", "Scope", "Inheritance", "Governance"]
  },
  {
    id: "az-900-235",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Policy Effect: Deny vs Audit vs Modify",
    scenario: "An administrator wants to immediately block any deployment attempt that does not comply with an approved VM SKU list.",
    question: "Which Policy effect should be specified in the policy rule?",
    options: [
      { id: 'A', text: "Audit" },
      { id: 'B', text: "Deny" },
      { id: 'C', text: "AuditIfNotExists" },
      { id: 'D', text: "Disabled" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `Deny` policy effect blocks the ARM deployment request immediately before the resource is created, returning a failure error to the caller. The `Audit` effect allows the deployment to succeed but logs a compliance warning.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effects#deny",
    tags: ["Azure Policy", "Effects", "Deny", "Audit"]
  },
  {
    id: "az-900-236",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Cloud Adoption Framework (CAF)",
    scenario: "What is the Microsoft Cloud Adoption Framework (CAF) for Azure?",
    question: "Which statement best describes the Cloud Adoption Framework?",
    options: [
      { id: 'A', text: "A proprietary software tool that must be installed on servers" },
      { id: 'B', text: "A comprehensive collection of documentation, guidance, best practices, and tools designed to help organizations create and implement business and technology strategies for cloud adoption" },
      { id: 'C', text: "A pricing model for purchasing hardware" },
      { id: 'D', text: "A legal contract between Microsoft and local governments" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Microsoft Cloud Adoption Framework (CAF) for Azure provides guidance, best practices, architectural documentation, and governance frameworks to guide organizations through strategy, plan, ready, adopt, govern, and manage phases.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview",
    tags: ["CAF", "Cloud Adoption Framework", "Strategy", "Best Practices"]
  },
  {
    id: "az-900-237",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Well-Architected Framework: The Five Pillars",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which set of pillars forms the foundation of the Microsoft Azure Well-Architected Framework?",
    options: [
      { id: 'A', text: "Cost Optimization, Operational Excellence, Performance Efficiency, Reliability, and Security" },
      { id: 'B', text: "Compute, Storage, Networking, Databases, and Monitoring" },
      { id: 'C', text: "Windows, Linux, Docker, Kubernetes, and Terraform" },
      { id: 'D', text: "Plan, Develop, Deliver, Operate, and Deprecate" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Well-Architected Framework is anchored on five core pillars: Reliability (resilience), Security, Cost Optimization (ROI), Operational Excellence, and Performance Efficiency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/pillars",
    tags: ["Well-Architected", "Pillars", "Architecture", "Best Practices"]
  },
  {
    id: "az-900-238",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Resource Tags Inheritance: Do Tags Inherit Automatically?",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An administrator tags a Resource Group with `Department=Finance`. Are resources subsequently created inside that Resource Group automatically tagged with `Department=Finance` by default?",
    options: [
      { id: 'A', text: "Tags can only be applied to subscriptions" },
      { id: 'B', text: "Yes, tags inherit automatically down to all child resources" },
      { id: 'C', text: "Tags are deleted upon resource creation" },
      { id: 'D', text: "No, tags applied to a resource group are not inherited by resources inside that resource group by default; an Azure Policy must be used to enforce tag inheritance" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Azure, tags applied to a resource group or subscription do NOT automatically inherit down to contained resources. Organizations must use Azure Policy (with `Modify` or `Append` effects) to automate tag inheritance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources#tag-inheritance",
    tags: ["Tags", "Inheritance", "Azure Policy", "Governance"]
  },
  {
    id: "az-900-239",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Log Analytics Workspaces and Kusto Query Language (KQL)",
    scenario: "An engineer needs to write a query analyzing web server error logs stored in Azure Monitor to find the top 5 most common HTTP 500 error paths.",
    question: "Which query language is used to interrogate Log Analytics workspaces in Azure Monitor?",
    options: [
      { id: 'A', text: "SQL (Structured Query Language)" },
      { id: 'B', text: "GraphQL" },
      { id: 'C', text: "Bash" },
      { id: 'D', text: "KQL (Kusto Query Language)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Monitor Log Analytics workspaces use Kusto Query Language (KQL)—a powerful, expressive language optimized for querying structured and semi-structured time-series telemetry data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "KQL", "Azure Monitor", "Telemetry"]
  },
  {
    id: "az-900-240",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Alerts and Action Groups",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An administrator configures an alert rule in Azure Monitor that triggers when CPU utilization exceeds 90%. How can Azure automatically send an SMS, an email, and trigger a runbook simultaneously?",
    options: [
      { id: 'A', text: "By attaching an Azure Action Group to the alert rule" },
      { id: 'B', text: "By sending manual emails from the portal" },
      { id: 'C', text: "By writing a C# program on the virtual machine" },
      { id: 'D', text: "By deleting the alert rule" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Azure Action Group is a collection of notification preferences and automated actions defined by a subscription owner. When an alert rule fires, it invokes the Action Group, triggering emails, SMS, webhooks, or automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups",
    tags: ["Action Groups", "Alerts", "Automation", "Azure Monitor"]
  },
  {
    id: "az-900-241",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Network Watcher: Diagnostic Tools",
    scenario: "A network engineer needs to test whether a virtual machine can establish a TCP connection to an internal database server on port 1433 and diagnose which security rule is blocking traffic.",
    question: "Which Azure Network Watcher tool performs this verification?",
    options: [
      { id: 'A', text: "Azure ExpressRoute" },
      { id: 'B', text: "Azure Front Door" },
      { id: 'C', text: "IP flow verify / Connection troubleshoot" },
      { id: 'D', text: "Azure DNS Private Resolver" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Network Watcher provides network diagnostic tools—including IP Flow Verify, NSG Diagnostic, and Connection Troubleshoot—to test connectivity and pinpoint the exact NSG rule blocking traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview",
    tags: ["Network Watcher", "Diagnostics", "Troubleshooting", "Networking"]
  },
  {
    id: "az-900-242",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Managing Azure Subscription Limits and Service Quotas",
    scenario: "A developer attempts to launch 50 new virtual machines in East US but the deployment fails stating that the regional vCPU quota has been exceeded.",
    question: "How can the organization increase its regional vCPU service quota?",
    options: [
      { id: 'A', text: "Create a brand new Azure user account" },
      { id: 'B', text: "Submit an online Quota Increase request directly through the Azure portal or Azure Support; standard quota increases are approved automatically at zero cost" },
      { id: 'C', text: "Quotas are permanent hard physical limits that cannot be changed" },
      { id: 'D', text: "Purchase a physical server and ship it to Microsoft" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure subscriptions have default regional service quotas to protect customers from sudden cost spikes and manage platform capacity. Customers can request standard quota increases online via the portal or support tickets for free.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits",
    tags: ["Service Quotas", "Limits", "Support", "Governance"]
  },
  {
    id: "az-900-243",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Support Plans: Developer vs Standard vs Professional Direct",
    scenario: "A company is deploying production workloads to Azure and requires 24/7 technical phone and email support with a guaranteed response time under 1 hour for business-critical system down issues.",
    question: "Which minimum Azure Support plan satisfies this production SLA?",
    options: [
      { id: 'A', text: "Standard Support" },
      { id: 'B', text: "Community forum support" },
      { id: 'C', text: "Developer Support" },
      { id: 'D', text: "Basic Support (free)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Standard` support plan is the minimum tier intended for production workloads, providing 24/7 phone and email technical support with response times under 1 hour for Severity A (critical system down) issues. `Developer` only covers business hours.",
    referenceUrl: "https://azure.microsoft.com/en-us/support/plans/",
    tags: ["Support Plans", "Standard Support", "SLA", "Production"]
  },
  {
    id: "az-900-244",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Premier and Unified Enterprise Support",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which highest support tier provides dedicated Technical Account Managers (Customer Success Account Managers / CSAM) and proactive architectural advisory reviews?",
    options: [
      { id: 'A', text: "Microsoft Unified / Premier Enterprise Support" },
      { id: 'B', text: "Pay-as-you-go support" },
      { id: 'C', text: "Developer Support" },
      { id: 'D', text: "Basic Support" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Unified Enterprise Support delivers comprehensive enterprise coverage: dedicated CSAMs, 15-minute response times for critical outages, proactive architectural reviews, and prioritized escalation paths across all Microsoft technologies.",
    referenceUrl: "https://www.microsoft.com/en-us/unifiedsupport",
    tags: ["Enterprise Support", "CSAM", "Support Plans"]
  },
  {
    id: "az-900-245",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Privacy Statement and Data Sovereignty",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How does Microsoft guarantee that customer data stored in European Azure regions is treated under EU data protection regulations (GDPR)?",
    options: [
      { id: 'A', text: "By transferring all data to US datacenters" },
      { id: 'B', text: "By deleting customer databases once a week" },
      { id: 'C', text: "By enforcing the EU Data Boundary and contractual commitments declared in the Microsoft Privacy Statement and Online Services Terms" },
      { id: 'D', text: "By converting all data to publicly readable formats" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Through the EU Data Boundary and official Microsoft Cloud contractual commitments, Microsoft commits to processing and storing European customer data exclusively within EU datacenters in full compliance with GDPR mandates.",
    referenceUrl: "https://privacy.microsoft.com/en-us/privacystatement",
    tags: ["Data Sovereignty", "GDPR", "Privacy", "Compliance"]
  },
  {
    id: "az-900-246",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Blueprint (and deployment templates): Standardization",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What capability does an enterprise architectural blueprint provide when orchestrating multi-subscription cloud deployments?",
    options: [
      { id: 'A', text: "It installs Windows operating systems on laptops" },
      { id: 'B', text: "It composes and orchestrates ARM templates, role-based access control (RBAC) assignments, and Azure Policies into a single reusable package" },
      { id: 'C', text: "It generates 3D architectural floor plans for physical datacenters" },
      { id: 'D', text: "It cancels unneeded subscriptions automatically" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Blueprints enable cloud architects to define a repeatable set of Azure resources, role assignments, and policy definitions to rapidly set up new compliant subscriptions adhering to organizational standards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/blueprints/overview",
    tags: ["Blueprints", "Governance", "ARM", "Standardization"]
  },
  {
    id: "az-900-247",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Cost Management: Cost Allocation Rules",
    scenario: "An enterprise has shared infrastructure costs (like centralized security firewalls and ExpressRoute circuits) that need to be proportionally allocated to individual department subscriptions.",
    question: "Which feature in Microsoft Cost Management distributes shared costs across subscriptions without moving resources?",
    options: [
      { id: 'A', text: "Network peering" },
      { id: 'B', text: "Resource group locks" },
      { id: 'C', text: "Azure DNS routing" },
      { id: 'D', text: "Cost Allocation Rules" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cost Allocation Rules in Microsoft Cost Management split and redistribute shared costs (like centralized logging or networking) among target subscriptions, resource groups, or departments based on custom proportional percentage rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/allocate-costs",
    tags: ["Cost Allocation", "Shared Costs", "FinOps", "Cost Management"]
  },
  {
    id: "az-900-248",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Entra ID: User and Group Management",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An administrator needs to grant 50 members of the QA department access to a set of testing virtual machines. What is the recommended management practice?",
    options: [
      { id: 'A', text: "Share a single username and password among all 50 QA testers" },
      { id: 'B', text: "Make all 50 testers subscription Owners" },
      { id: 'C', text: "Create a security group in Microsoft Entra ID, add the 50 users as members, and assign the RBAC role to the group" },
      { id: 'D', text: "Assign the RBAC role individually to all 50 separate user accounts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Best practice manages permissions through groups: creating a security group in Microsoft Entra ID and assigning the role to the group simplifies onboarding and offboarding, ensuring permissions inherit cleanly.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/concept-learn-about-groups",
    tags: ["Entra ID", "Groups", "RBAC", "Best Practices"]
  },
  {
    id: "az-900-249",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Tools: Comparing Portal, CLI, PowerShell, and REST API",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which underlying service processes all management operations regardless of whether an engineer uses the Azure Portal, CLI, PowerShell, or ARM templates?",
    options: [
      { id: 'A', text: "Azure Active Directory Domain Services" },
      { id: 'B', text: "Azure ExpressRoute" },
      { id: 'C', text: "Azure Resource Manager (ARM)" },
      { id: 'D', text: "Azure Front Door" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Resource Manager (ARM) is the single consistent management layer. All tools (Portal, Azure CLI, Azure PowerShell, REST API, Bicep) send requests to the ARM endpoint, which authenticates via Entra ID and enforces RBAC and Azure Policies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
    tags: ["ARM", "Management Tools", "Architecture", "Consistency"]
  },
  {
    id: "az-900-250",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Fundamentals: The Value Proposition of Cloud Computing",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What core summary statement captures the strategic business value of migrating infrastructure to Microsoft Azure?",
    options: [
      { id: 'A', text: "It eliminates all financial costs permanently" },
      { id: 'B', text: "It replaces software engineers with cloud algorithms" },
      { id: 'C', text: "It enables organizations to shift from maintaining physical hardware to focusing on business innovation, providing global scalability, high availability, and operational agility on a pay-as-you-go model" },
      { id: 'D', text: "It forces all companies to use identical software configurations" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud computing on Microsoft Azure eliminates the undifferentiated heavy lifting of managing physical datacenters, empowering organizations to scale globally, achieve high availability, innovate rapidly, and optimize costs through consumption-based pricing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/",
    tags: ["Summary", "Business Value", "Cloud Concepts", "Strategy"]
  }
];

export default AZURE_AZ900_QUESTIONS_10;
