export const AZURE_AZ104_QUESTIONS_12 = [
  {
    id: "az-104-276",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Modify Effect and Remediation Tasks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Policy to automatically append a mandatory 'CostCenter: IT' tag to all existing and newly deployed resource groups without manual intervention.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Policy Modify effect with automated remediation tasks is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Automation runbook scheduled to delete untagged resource groups daily." },
      { id: 'B', text: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources." },
      { id: 'C', text: "Send email notifications requesting resource owners to add the missing tags manually." },
      { id: 'D', text: "Assign an Azure Policy definition with the 'Audit' effect and review the compliance report." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources. The 'Modify' effect in Azure Policy adds, updates, or removes properties or tags on resources during creation or update. When assigned with a managed identity, administrators can create remediation tasks to automatically update existing non-compliant resources across subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify",
    tags: ["Azure Policy", "Governance", "Dr Failover"]
  },
  {
    id: "az-104-277",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Modify Effect and Remediation Tasks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Policy to automatically append a mandatory 'CostCenter: IT' tag to all existing and newly deployed resource groups without manual intervention.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Policy Modify effect with automated remediation tasks is under evaluation.",
    options: [
      { id: 'A', text: "Send email notifications requesting resource owners to add the missing tags manually." },
      { id: 'B', text: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources." },
      { id: 'C', text: "Deploy an Azure Automation runbook scheduled to delete untagged resource groups daily." },
      { id: 'D', text: "Assign an Azure Policy definition with the 'Audit' effect and review the compliance report." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources. The 'Modify' effect in Azure Policy adds, updates, or removes properties or tags on resources during creation or update. When assigned with a managed identity, administrators can create remediation tasks to automatically update existing non-compliant resources across subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify",
    tags: ["Azure Policy", "Governance", "High Load Scale"]
  },
  {
    id: "az-104-278",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Modify Effect and Remediation Tasks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Policy to automatically append a mandatory 'CostCenter: IT' tag to all existing and newly deployed resource groups without manual intervention.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Policy Modify effect with automated remediation tasks is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Automation runbook scheduled to delete untagged resource groups daily." },
      { id: 'B', text: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources." },
      { id: 'C', text: "Send email notifications requesting resource owners to add the missing tags manually." },
      { id: 'D', text: "Assign an Azure Policy definition with the 'Audit' effect and review the compliance report." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources. The 'Modify' effect in Azure Policy adds, updates, or removes properties or tags on resources during creation or update. When assigned with a managed identity, administrators can create remediation tasks to automatically update existing non-compliant resources across subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify",
    tags: ["Azure Policy", "Governance", "Security Compliance"]
  },
  {
    id: "az-104-279",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Modify Effect and Remediation Tasks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Policy to automatically append a mandatory 'CostCenter: IT' tag to all existing and newly deployed resource groups without manual intervention.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Policy Modify effect with automated remediation tasks is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Automation runbook scheduled to delete untagged resource groups daily." },
      { id: 'B', text: "Assign an Azure Policy definition with the 'Audit' effect and review the compliance report." },
      { id: 'C', text: "Send email notifications requesting resource owners to add the missing tags manually." },
      { id: 'D', text: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources. The 'Modify' effect in Azure Policy adds, updates, or removes properties or tags on resources during creation or update. When assigned with a managed identity, administrators can create remediation tasks to automatically update existing non-compliant resources across subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify",
    tags: ["Azure Policy", "Governance", "Hybrid Migration"]
  },
  {
    id: "az-104-280",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Modify Effect and Remediation Tasks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Policy to automatically append a mandatory 'CostCenter: IT' tag to all existing and newly deployed resource groups without manual intervention.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Policy Modify effect with automated remediation tasks is under evaluation.",
    options: [
      { id: 'A', text: "Assign an Azure Policy definition with the 'Audit' effect and review the compliance report." },
      { id: 'B', text: "Send email notifications requesting resource owners to add the missing tags manually." },
      { id: 'C', text: "Deploy an Azure Automation runbook scheduled to delete untagged resource groups daily." },
      { id: 'D', text: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign an Azure Policy definition with the 'Modify' effect and trigger a remediation task for existing resources. The 'Modify' effect in Azure Policy adds, updates, or removes properties or tags on resources during creation or update. When assigned with a managed identity, administrators can create remediation tasks to automatically update existing non-compliant resources across subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify",
    tags: ["Azure Policy", "Governance", "Resilience Failure"]
  },
  {
    id: "az-104-281",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Management Group Hierarchies and Inheritance: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Governance to organize 50 enterprise subscriptions into environments (Production, Development, Sandbox) and ensure governance policies cascade automatically to all child subscriptions.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Hierarchical Management Group governance and inheritance is under evaluation.",
    options: [
      { id: 'A', text: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes." },
      { id: 'B', text: "Manage all 50 subscriptions independently with duplicate standalone policy assignments." },
      { id: 'C', text: "Disable management groups and rely on resource group naming conventions." },
      { id: 'D', text: "Merge all 50 subscriptions into a single monolithic Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes. Azure Management Groups provide containers for managing access, policies, and compliance across multiple Azure subscriptions. Management groups form a flexible hierarchy (up to six levels of depth), where policies and RBAC role assignments at parent groups automatically inherit down to all child subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance", "Governance", "Dr Failover"]
  },
  {
    id: "az-104-282",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Management Group Hierarchies and Inheritance: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Governance to organize 50 enterprise subscriptions into environments (Production, Development, Sandbox) and ensure governance policies cascade automatically to all child subscriptions.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Hierarchical Management Group governance and inheritance is under evaluation.",
    options: [
      { id: 'A', text: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes." },
      { id: 'B', text: "Merge all 50 subscriptions into a single monolithic Azure subscription." },
      { id: 'C', text: "Manage all 50 subscriptions independently with duplicate standalone policy assignments." },
      { id: 'D', text: "Disable management groups and rely on resource group naming conventions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes. Azure Management Groups provide containers for managing access, policies, and compliance across multiple Azure subscriptions. Management groups form a flexible hierarchy (up to six levels of depth), where policies and RBAC role assignments at parent groups automatically inherit down to all child subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance", "Governance", "High Load Scale"]
  },
  {
    id: "az-104-283",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Management Group Hierarchies and Inheritance: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Governance to organize 50 enterprise subscriptions into environments (Production, Development, Sandbox) and ensure governance policies cascade automatically to all child subscriptions.",
    question: "Which solution properly implements these mandatory security and governance controls? Hierarchical Management Group governance and inheritance is under evaluation.",
    options: [
      { id: 'A', text: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes." },
      { id: 'B', text: "Disable management groups and rely on resource group naming conventions." },
      { id: 'C', text: "Merge all 50 subscriptions into a single monolithic Azure subscription." },
      { id: 'D', text: "Manage all 50 subscriptions independently with duplicate standalone policy assignments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes. Azure Management Groups provide containers for managing access, policies, and compliance across multiple Azure subscriptions. Management groups form a flexible hierarchy (up to six levels of depth), where policies and RBAC role assignments at parent groups automatically inherit down to all child subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance", "Governance", "Security Compliance"]
  },
  {
    id: "az-104-284",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Management Group Hierarchies and Inheritance: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Governance to organize 50 enterprise subscriptions into environments (Production, Development, Sandbox) and ensure governance policies cascade automatically to all child subscriptions.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Hierarchical Management Group governance and inheritance is under evaluation.",
    options: [
      { id: 'A', text: "Disable management groups and rely on resource group naming conventions." },
      { id: 'B', text: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes." },
      { id: 'C', text: "Manage all 50 subscriptions independently with duplicate standalone policy assignments." },
      { id: 'D', text: "Merge all 50 subscriptions into a single monolithic Azure subscription." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes. Azure Management Groups provide containers for managing access, policies, and compliance across multiple Azure subscriptions. Management groups form a flexible hierarchy (up to six levels of depth), where policies and RBAC role assignments at parent groups automatically inherit down to all child subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance", "Governance", "Hybrid Migration"]
  },
  {
    id: "az-104-285",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Management Group Hierarchies and Inheritance: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Governance to organize 50 enterprise subscriptions into environments (Production, Development, Sandbox) and ensure governance policies cascade automatically to all child subscriptions.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Hierarchical Management Group governance and inheritance is under evaluation.",
    options: [
      { id: 'A', text: "Manage all 50 subscriptions independently with duplicate standalone policy assignments." },
      { id: 'B', text: "Merge all 50 subscriptions into a single monolithic Azure subscription." },
      { id: 'C', text: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes." },
      { id: 'D', text: "Disable management groups and rely on resource group naming conventions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure subscriptions beneath a root Management Group with child Management Groups and assign policies at parent scopes. Azure Management Groups provide containers for managing access, policies, and compliance across multiple Azure subscriptions. Management groups form a flexible hierarchy (up to six levels of depth), where policies and RBAC role assignments at parent groups automatically inherit down to all child subscriptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance", "Governance", "Resilience Failure"]
  },
  {
    id: "az-104-286",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Locks Inheritance and Overrides: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Governance to prevent any developer or administrator from deleting any virtual network or subnet within a critical production resource group.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? CanNotDelete resource locks on parent containers is under evaluation.",
    options: [
      { id: 'A', text: "Remove all Contributor permissions from the subscription and grant only Reader access." },
      { id: 'B', text: "Apply individual locks to every single network interface card and IP configuration manually." },
      { id: 'C', text: "Apply a CanNotDelete Resource Lock directly to the production Resource Group." },
      { id: 'D', text: "Configure an Azure Monitor metric alert to trigger after a resource has been deleted." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a CanNotDelete Resource Lock directly to the production Resource Group. Resource locks applied at a parent scope (such as a subscription or resource group) are automatically inherited by all child resources contained within that scope. A CanNotDelete lock on a resource group prevents authorized users from deleting any resource within that group until the lock is removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Azure Governance", "Governance", "Dr Failover"]
  },
  {
    id: "az-104-287",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Locks Inheritance and Overrides: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Governance to prevent any developer or administrator from deleting any virtual network or subnet within a critical production resource group.",
    question: "Which architectural approach should the team select to manage this demand efficiently? CanNotDelete resource locks on parent containers is under evaluation.",
    options: [
      { id: 'A', text: "Remove all Contributor permissions from the subscription and grant only Reader access." },
      { id: 'B', text: "Apply individual locks to every single network interface card and IP configuration manually." },
      { id: 'C', text: "Apply a CanNotDelete Resource Lock directly to the production Resource Group." },
      { id: 'D', text: "Configure an Azure Monitor metric alert to trigger after a resource has been deleted." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a CanNotDelete Resource Lock directly to the production Resource Group. Resource locks applied at a parent scope (such as a subscription or resource group) are automatically inherited by all child resources contained within that scope. A CanNotDelete lock on a resource group prevents authorized users from deleting any resource within that group until the lock is removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Azure Governance", "Governance", "High Load Scale"]
  },
  {
    id: "az-104-288",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Locks Inheritance and Overrides: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Governance to prevent any developer or administrator from deleting any virtual network or subnet within a critical production resource group.",
    question: "Which solution properly implements these mandatory security and governance controls? CanNotDelete resource locks on parent containers is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Monitor metric alert to trigger after a resource has been deleted." },
      { id: 'B', text: "Apply individual locks to every single network interface card and IP configuration manually." },
      { id: 'C', text: "Apply a CanNotDelete Resource Lock directly to the production Resource Group." },
      { id: 'D', text: "Remove all Contributor permissions from the subscription and grant only Reader access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a CanNotDelete Resource Lock directly to the production Resource Group. Resource locks applied at a parent scope (such as a subscription or resource group) are automatically inherited by all child resources contained within that scope. A CanNotDelete lock on a resource group prevents authorized users from deleting any resource within that group until the lock is removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Azure Governance", "Governance", "Security Compliance"]
  },
  {
    id: "az-104-289",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Locks Inheritance and Overrides: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Governance to prevent any developer or administrator from deleting any virtual network or subnet within a critical production resource group.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? CanNotDelete resource locks on parent containers is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Monitor metric alert to trigger after a resource has been deleted." },
      { id: 'B', text: "Apply individual locks to every single network interface card and IP configuration manually." },
      { id: 'C', text: "Apply a CanNotDelete Resource Lock directly to the production Resource Group." },
      { id: 'D', text: "Remove all Contributor permissions from the subscription and grant only Reader access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a CanNotDelete Resource Lock directly to the production Resource Group. Resource locks applied at a parent scope (such as a subscription or resource group) are automatically inherited by all child resources contained within that scope. A CanNotDelete lock on a resource group prevents authorized users from deleting any resource within that group until the lock is removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Azure Governance", "Governance", "Hybrid Migration"]
  },
  {
    id: "az-104-290",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Locks Inheritance and Overrides: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Governance to prevent any developer or administrator from deleting any virtual network or subnet within a critical production resource group.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? CanNotDelete resource locks on parent containers is under evaluation.",
    options: [
      { id: 'A', text: "Apply a CanNotDelete Resource Lock directly to the production Resource Group." },
      { id: 'B', text: "Configure an Azure Monitor metric alert to trigger after a resource has been deleted." },
      { id: 'C', text: "Apply individual locks to every single network interface card and IP configuration manually." },
      { id: 'D', text: "Remove all Contributor permissions from the subscription and grant only Reader access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a CanNotDelete Resource Lock directly to the production Resource Group. Resource locks applied at a parent scope (such as a subscription or resource group) are automatically inherited by all child resources contained within that scope. A CanNotDelete lock on a resource group prevents authorized users from deleting any resource within that group until the lock is removed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources",
    tags: ["Azure Governance", "Governance", "Resilience Failure"]
  },
  {
    id: "az-104-291",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management Budgets and Action Groups: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Cost Management to automatically notify financial controllers and run a runbook to shut down development VMs when departmental spending reaches 90% of monthly budget.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cost Management budgets triggering automated Action Groups is under evaluation.",
    options: [
      { id: 'A', text: "Set virtual machine quotas to zero in the Azure subscription settings." },
      { id: 'B', text: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group." },
      { id: 'C', text: "Check the billing invoice manually at the end of each calendar quarter." },
      { id: 'D', text: "Assign an Azure Policy definition to deny all VM creation when cost thresholds are exceeded." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group. Azure Cost Management allows creating budgets based on cost or usage over specific periods. When spending reaches defined percentage thresholds (e.g. 90%), budget alerts trigger Azure Monitor Action Groups, which can send emails/SMS, invoke webhooks, or execute Azure Automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Azure Cost Management", "Cost Management", "Dr Failover"]
  },
  {
    id: "az-104-292",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management Budgets and Action Groups: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Cost Management to automatically notify financial controllers and run a runbook to shut down development VMs when departmental spending reaches 90% of monthly budget.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cost Management budgets triggering automated Action Groups is under evaluation.",
    options: [
      { id: 'A', text: "Check the billing invoice manually at the end of each calendar quarter." },
      { id: 'B', text: "Set virtual machine quotas to zero in the Azure subscription settings." },
      { id: 'C', text: "Assign an Azure Policy definition to deny all VM creation when cost thresholds are exceeded." },
      { id: 'D', text: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group. Azure Cost Management allows creating budgets based on cost or usage over specific periods. When spending reaches defined percentage thresholds (e.g. 90%), budget alerts trigger Azure Monitor Action Groups, which can send emails/SMS, invoke webhooks, or execute Azure Automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Azure Cost Management", "Cost Management", "High Load Scale"]
  },
  {
    id: "az-104-293",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management Budgets and Action Groups: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Cost Management to automatically notify financial controllers and run a runbook to shut down development VMs when departmental spending reaches 90% of monthly budget.",
    question: "Which solution properly implements these mandatory security and governance controls? Cost Management budgets triggering automated Action Groups is under evaluation.",
    options: [
      { id: 'A', text: "Check the billing invoice manually at the end of each calendar quarter." },
      { id: 'B', text: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group." },
      { id: 'C', text: "Assign an Azure Policy definition to deny all VM creation when cost thresholds are exceeded." },
      { id: 'D', text: "Set virtual machine quotas to zero in the Azure subscription settings." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group. Azure Cost Management allows creating budgets based on cost or usage over specific periods. When spending reaches defined percentage thresholds (e.g. 90%), budget alerts trigger Azure Monitor Action Groups, which can send emails/SMS, invoke webhooks, or execute Azure Automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Azure Cost Management", "Cost Management", "Security Compliance"]
  },
  {
    id: "az-104-294",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management Budgets and Action Groups: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Cost Management to automatically notify financial controllers and run a runbook to shut down development VMs when departmental spending reaches 90% of monthly budget.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cost Management budgets triggering automated Action Groups is under evaluation.",
    options: [
      { id: 'A', text: "Set virtual machine quotas to zero in the Azure subscription settings." },
      { id: 'B', text: "Check the billing invoice manually at the end of each calendar quarter." },
      { id: 'C', text: "Assign an Azure Policy definition to deny all VM creation when cost thresholds are exceeded." },
      { id: 'D', text: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group. Azure Cost Management allows creating budgets based on cost or usage over specific periods. When spending reaches defined percentage thresholds (e.g. 90%), budget alerts trigger Azure Monitor Action Groups, which can send emails/SMS, invoke webhooks, or execute Azure Automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Azure Cost Management", "Cost Management", "Hybrid Migration"]
  },
  {
    id: "az-104-295",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management Budgets and Action Groups: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Cost Management to automatically notify financial controllers and run a runbook to shut down development VMs when departmental spending reaches 90% of monthly budget.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cost Management budgets triggering automated Action Groups is under evaluation.",
    options: [
      { id: 'A', text: "Assign an Azure Policy definition to deny all VM creation when cost thresholds are exceeded." },
      { id: 'B', text: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group." },
      { id: 'C', text: "Set virtual machine quotas to zero in the Azure subscription settings." },
      { id: 'D', text: "Check the billing invoice manually at the end of each calendar quarter." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Azure Cost Management budget with an alert threshold linked to an Azure Monitor Action Group. Azure Cost Management allows creating budgets based on cost or usage over specific periods. When spending reaches defined percentage thresholds (e.g. 90%), budget alerts trigger Azure Monitor Action Groups, which can send emails/SMS, invoke webhooks, or execute Azure Automation runbooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Azure Cost Management", "Cost Management", "Resilience Failure"]
  },
  {
    id: "az-104-296",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Privileged Identity Management (PIM) Role Activation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Microsoft Entra PIM to enforce Just-In-Time role elevation for subscription administrators, requiring manager approval, ticket justification, and mandatory MFA before activating Owner rights.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Just-In-Time (JIT) role elevation with approval workflows is under evaluation.",
    options: [
      { id: 'A', text: "Create secondary administrative accounts with static passwords stored in desktop text files." },
      { id: 'B', text: "Require administrators to request password resets from the helpdesk whenever they need to make changes." },
      { id: 'C', text: "Grant permanent Owner permissions to all cloud engineers across the production subscription." },
      { id: 'D', text: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows. Microsoft Entra Privileged Identity Management (PIM) manages, controls, and monitors access to important resources. It provides just-in-time privileged access with time-bound role activations, requires multi-factor authentication, demands justification and approval workflows, and enforces access reviews.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Microsoft Entra PIM", "PIM", "Dr Failover"]
  },
  {
    id: "az-104-297",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Privileged Identity Management (PIM) Role Activation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Microsoft Entra PIM to enforce Just-In-Time role elevation for subscription administrators, requiring manager approval, ticket justification, and mandatory MFA before activating Owner rights.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Just-In-Time (JIT) role elevation with approval workflows is under evaluation.",
    options: [
      { id: 'A', text: "Create secondary administrative accounts with static passwords stored in desktop text files." },
      { id: 'B', text: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows." },
      { id: 'C', text: "Require administrators to request password resets from the helpdesk whenever they need to make changes." },
      { id: 'D', text: "Grant permanent Owner permissions to all cloud engineers across the production subscription." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows. Microsoft Entra Privileged Identity Management (PIM) manages, controls, and monitors access to important resources. It provides just-in-time privileged access with time-bound role activations, requires multi-factor authentication, demands justification and approval workflows, and enforces access reviews.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Microsoft Entra PIM", "PIM", "High Load Scale"]
  },
  {
    id: "az-104-298",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Privileged Identity Management (PIM) Role Activation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Microsoft Entra PIM to enforce Just-In-Time role elevation for subscription administrators, requiring manager approval, ticket justification, and mandatory MFA before activating Owner rights.",
    question: "Which solution properly implements these mandatory security and governance controls? Just-In-Time (JIT) role elevation with approval workflows is under evaluation.",
    options: [
      { id: 'A', text: "Require administrators to request password resets from the helpdesk whenever they need to make changes." },
      { id: 'B', text: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows." },
      { id: 'C', text: "Grant permanent Owner permissions to all cloud engineers across the production subscription." },
      { id: 'D', text: "Create secondary administrative accounts with static passwords stored in desktop text files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows. Microsoft Entra Privileged Identity Management (PIM) manages, controls, and monitors access to important resources. It provides just-in-time privileged access with time-bound role activations, requires multi-factor authentication, demands justification and approval workflows, and enforces access reviews.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Microsoft Entra PIM", "PIM", "Security Compliance"]
  },
  {
    id: "az-104-299",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Privileged Identity Management (PIM) Role Activation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Microsoft Entra PIM to enforce Just-In-Time role elevation for subscription administrators, requiring manager approval, ticket justification, and mandatory MFA before activating Owner rights.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Just-In-Time (JIT) role elevation with approval workflows is under evaluation.",
    options: [
      { id: 'A', text: "Require administrators to request password resets from the helpdesk whenever they need to make changes." },
      { id: 'B', text: "Create secondary administrative accounts with static passwords stored in desktop text files." },
      { id: 'C', text: "Grant permanent Owner permissions to all cloud engineers across the production subscription." },
      { id: 'D', text: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows. Microsoft Entra Privileged Identity Management (PIM) manages, controls, and monitors access to important resources. It provides just-in-time privileged access with time-bound role activations, requires multi-factor authentication, demands justification and approval workflows, and enforces access reviews.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Microsoft Entra PIM", "PIM", "Hybrid Migration"]
  },
  {
    id: "az-104-300",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Privileged Identity Management (PIM) Role Activation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Microsoft Entra PIM to enforce Just-In-Time role elevation for subscription administrators, requiring manager approval, ticket justification, and mandatory MFA before activating Owner rights.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Just-In-Time (JIT) role elevation with approval workflows is under evaluation.",
    options: [
      { id: 'A', text: "Grant permanent Owner permissions to all cloud engineers across the production subscription." },
      { id: 'B', text: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows." },
      { id: 'C', text: "Create secondary administrative accounts with static passwords stored in desktop text files." },
      { id: 'D', text: "Require administrators to request password resets from the helpdesk whenever they need to make changes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Microsoft Entra Privileged Identity Management (PIM) with eligible role assignments and approval workflows. Microsoft Entra Privileged Identity Management (PIM) manages, controls, and monitors access to important resources. It provides just-in-time privileged access with time-bound role activations, requires multi-factor authentication, demands justification and approval workflows, and enforces access reviews.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Microsoft Entra PIM", "PIM", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_12;
