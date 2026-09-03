export const AZURE_AZ900_QUESTIONS_9 = [
  {
    id: "az-900-201",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Data Egress Charges in Azure",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for data egress charges in azure.",
    question: "Which statement or mechanism accurately describes data egress charges in azure?",
    options: [
      { id: 'A', text: "Inbound data transfer is free, while outbound data transfer across zones or to the internet incurs egress fees" },
      { id: 'B', text: "Inbound data transfer is billed at double the rate of outbound transfer" },
      { id: 'C', text: "Data transfer is only charged during peak business hours" },
      { id: 'D', text: "All data ingress and egress is completely free in all regions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure, data inbound (ingress) into Azure datacenters is free, whereas outbound data transfer (egress) to the internet or across billing zones incurs bandwidth charges. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Data"]
  },
  {
    id: "az-900-202",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Pricing Calculator Customization",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure pricing calculator customization.",
    question: "Which statement or mechanism accurately describes azure pricing calculator customization?",
    options: [
      { id: 'A', text: "Customizing virtual machine instance sizes, disk types, and data transfer volumes for cost estimates" },
      { id: 'B', text: "Creating automated resource groups in subscriptions" },
      { id: 'C', text: "Auditing employee access permissions" },
      { id: 'D', text: "Deploying live virtual machines into production" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Pricing Calculator allows architects to customize VM instance sizes, storage redundancy types, operating system licensing, and expected monthly bandwidth. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-203",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Tags Inheritance Rules",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure tags inheritance rules.",
    question: "Which statement or mechanism accurately describes azure tags inheritance rules?",
    options: [
      { id: 'A', text: "Tags can only be applied to subscriptions, never to resources" },
      { id: 'B', text: "Tags modify the underlying functional behavior of resources" },
      { id: 'C', text: "All resources automatically inherit tags from their parent resource group" },
      { id: 'D', text: "Tags applied to a resource group are not inherited by resources within that group" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Tags applied to a parent Resource Group are NOT automatically inherited by the resources deployed inside that resource group, requiring policies or explicit tagging. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-204",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Policy Deny Effect",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure policy deny effect.",
    question: "Which statement or mechanism accurately describes azure policy deny effect?",
    options: [
      { id: 'A', text: "Audit effect" },
      { id: 'B', text: "Disabled effect" },
      { id: 'C', text: "Modify effect" },
      { id: 'D', text: "Deny effect" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Deny effect in an Azure Policy definition immediately prevents the creation or update of any resource that fails to meet specified compliance criteria. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-205",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Policy Audit Effect",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure policy audit effect.",
    question: "Which statement or mechanism accurately describes azure policy audit effect?",
    options: [
      { id: 'A', text: "Deny effect" },
      { id: 'B', text: "Delete effect" },
      { id: 'C', text: "Audit effect" },
      { id: 'D', text: "Enforce effect" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Audit effect in Azure Policy flags non-compliant resources in compliance reports without blocking their deployment, allowing teams to review exceptions. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-206",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Resource Locks Scope Inheritance",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure resource locks scope inheritance.",
    question: "Which statement or mechanism accurately describes azure resource locks scope inheritance?",
    options: [
      { id: 'A', text: "All resources within the resource group inherit the lock and cannot be deleted" },
      { id: 'B', text: "Resource locks expire after 24 hours automatically" },
      { id: 'C', text: "Only virtual machines inherit the lock, while storage accounts are exempt" },
      { id: 'D', text: "Resource locks must be applied individually to each resource" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a Delete lock is applied at the Subscription or Resource Group level, all resources inside that scope inherit the lock and cannot be deleted. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-207",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Service Health - Planned Maintenance",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure service health - planned maintenance.",
    question: "Which statement or mechanism accurately describes azure service health - planned maintenance?",
    options: [
      { id: 'A', text: "Azure Advisor Cost recommendations" },
      { id: 'B', text: "Planned Maintenance notifications in Azure Service Health" },
      { id: 'C', text: "Azure Status global tweets" },
      { id: 'D', text: "Azure Pricing Calculator updates" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Service Health notifies administrators in advance about scheduled maintenance events that may require restarting virtual machines or updating underlying hosts. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-208",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Metrics Explorer",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure metrics explorer.",
    question: "Which statement or mechanism accurately describes azure metrics explorer?",
    options: [
      { id: 'A', text: "Azure Log Analytics KQL console" },
      { id: 'B', text: "Microsoft Purview catalog" },
      { id: 'C', text: "Azure Metrics Explorer" },
      { id: 'D', text: "Azure Policy dashboard" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Metrics Explorer allows engineers to plot visual charts, compare numerical telemetry in real time, and correlate CPU, memory, and network throughput across VMs. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-209",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Advisor - Cost Pillar",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure advisor - cost pillar.",
    question: "Which statement or mechanism accurately describes azure advisor - cost pillar?",
    options: [
      { id: 'A', text: "Cost optimization recommendations for resizing or shutting down idle VMs" },
      { id: 'B', text: "Deploying redundant VMs in secondary regions" },
      { id: 'C', text: "Enforcing password complexity rules across Entra ID" },
      { id: 'D', text: "Backing up storage accounts to tape" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Cost pillar of Azure Advisor analyzes compute utilization and recommends shutting down or resizing underutilized virtual machines to save money. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-210",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Advisor - Reliability Pillar",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure advisor - reliability pillar.",
    question: "Which statement or mechanism accurately describes azure advisor - reliability pillar?",
    options: [
      { id: 'A', text: "Reliability recommendations for Availability Zones and backup configurations" },
      { id: 'B', text: "Reducing licensing costs through Azure Hybrid Benefit" },
      { id: 'C', text: "Improving web app TLS cipher suites" },
      { id: 'D', text: "Purging unused resource groups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Reliability pillar of Azure Advisor recommends configuring Availability Zones, region pairs, and automated backup configurations to ensure business continuity. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-211",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Cloud Shell Persistent Storage",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure cloud shell persistent storage.",
    question: "Which statement or mechanism accurately describes azure cloud shell persistent storage?",
    options: [
      { id: 'A', text: "Saving console data to local browser cookies" },
      { id: 'B', text: "Attaching an Azure Files share to mount a persistent storage directory" },
      { id: 'C', text: "Downloading a local virtual hard disk to your desktop" },
      { id: 'D', text: "Cloud Shell does not support persistent files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Cloud Shell attaches an Azure Files share to automatically persist your customized scripts, configurations, and console history across browser sessions. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-212",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Bicep Modularity",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure bicep modularity.",
    question: "Which statement or mechanism accurately describes azure bicep modularity?",
    options: [
      { id: 'A', text: "Bypassing Azure Resource Manager validation" },
      { id: 'B', text: "Reusable Bicep modules that encapsulate standard infrastructure designs" },
      { id: 'C', text: "Converting PowerShell scripts into Bash files" },
      { id: 'D', text: "Running Python code inside ARM templates" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Bicep supports modular file decomposition, enabling enterprise teams to create reusable infrastructure components that enforce architectural standards. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-213",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Microsoft Purview Automated Data Catalog",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for microsoft purview automated data catalog.",
    question: "Which statement or mechanism accurately describes microsoft purview automated data catalog?",
    options: [
      { id: 'A', text: "Calculating 5-year hardware depreciation costs" },
      { id: 'B', text: "Deploying virtual machine scale sets in secondary regions" },
      { id: 'C', text: "Enforcing network security group packet filtering" },
      { id: 'D', text: "Automated data discovery and sensitive data classification across hybrid environments" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Purview scans on-premises and cloud databases to automatically classify personal identifiable information (PII) and build a searchable data catalog. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Microsoft"]
  },
  {
    id: "az-900-214",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Arc Kubernetes Management",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure arc kubernetes management.",
    question: "Which statement or mechanism accurately describes azure arc kubernetes management?",
    options: [
      { id: 'A', text: "Converting Kubernetes pods into Azure Functions automatically" },
      { id: 'B', text: "Bypassing Kubernetes API authentication" },
      { id: 'C', text: "Managing and governing on-premises Kubernetes clusters from the Azure Portal" },
      { id: 'D', text: "Migrating all on-premises containers to Azure App Service" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With Azure Arc, administrators can attach on-premises Kubernetes clusters and deploy applications using GitOps configurations from the Azure Portal. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-215",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Status Global Dashboard",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure status global dashboard.",
    question: "Which statement or mechanism accurately describes azure status global dashboard?",
    options: [
      { id: 'A', text: "Azure Service Health personalized view" },
      { id: 'B', text: "Azure Resource Health individual blade" },
      { id: 'C', text: "Azure Monitor alert rules" },
      { id: 'D', text: "The public Azure Status webpage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The public Azure Status page provides global awareness of service disruptions and health across all Azure regions worldwide without requiring a login. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-216",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #1",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #1?",
    options: [
      { id: 'A', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'B', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'C', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'D', text: "Disabling Azure Monitor logging to reduce storage consumption" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-217",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #2",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #2?",
    options: [
      { id: 'A', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'B', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'C', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'D', text: "Granting all developers permanent Owner permissions across the root management group" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-218",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #3",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #3?",
    options: [
      { id: 'A', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'B', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'C', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'D', text: "Disabling Azure Monitor logging to reduce storage consumption" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-219",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #4",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #4?",
    options: [
      { id: 'A', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'B', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'C', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'D', text: "Managing resources individually without tags, policies, or spending thresholds" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-220",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #5",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #5?",
    options: [
      { id: 'A', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'B', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'C', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'D', text: "Managing resources individually without tags, policies, or spending thresholds" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-221",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #6",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #6?",
    options: [
      { id: 'A', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'B', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'C', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'D', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-222",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #7",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #7?",
    options: [
      { id: 'A', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'B', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'C', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'D', text: "Disabling Azure Monitor logging to reduce storage consumption" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-223",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #8",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #8?",
    options: [
      { id: 'A', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'B', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'C', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'D', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-224",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #9",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #9?",
    options: [
      { id: 'A', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'B', text: "Managing resources individually without tags, policies, or spending thresholds" },
      { id: 'C', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'D', text: "Disabling Azure Monitor logging to reduce storage consumption" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  },
  {
    id: "az-900-225",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Management Scenario #10",
    scenario: "A cloud operations team is configuring monitoring, policy governance, and cost management controls across an enterprise Azure environment.",
    question: "Which Azure management service or governance practice best satisfies scenario requirement #10?",
    options: [
      { id: 'A', text: "Applying Azure Policy initiatives and Microsoft Cost Management budget alerts across management groups" },
      { id: 'B', text: "Disabling Azure Monitor logging to reduce storage consumption" },
      { id: 'C', text: "Granting all developers permanent Owner permissions across the root management group" },
      { id: 'D', text: "Managing resources individually without tags, policies, or spending thresholds" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure governance best practices recommend assigning Azure Policy initiatives and automated budget alerts at management group and subscription scopes to ensure consistent compliance, least-privilege security, and cost accountability across all workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Governance", "Management", "Best Practices"]
  }
];

export default AZURE_AZ900_QUESTIONS_9;
