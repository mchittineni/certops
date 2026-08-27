export const AZURE_AZ900_QUESTIONS = [
  {
    id: 'az-900-1',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd1',
    domainName: 'Describe Cloud Concepts',
    title: 'Capital Expenditure (CapEx) vs Operational Expenditure (OpEx)',
    scenario: 'A company currently buys physical servers every three years for its own data centre and is comparing that with running the same workloads on Azure virtual machines billed per second of use.',
    question: 'Which statement correctly describes the change in spending model?',
    options: [
      { id: 'A', text: 'Buying servers is a capital expenditure, while paying for Azure VMs as they run is an operational expenditure.' },
      { id: 'B', text: 'Buying servers is an operational expenditure, while Azure VMs are a capital expenditure.' },
      { id: 'C', text: 'Both models are capital expenditure because both involve compute hardware.' },
      { id: 'D', text: 'Both models are operational expenditure because both are recorded monthly.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'CapEx is a large up-front purchase of a physical asset that is depreciated over its useful life - buying servers is the textbook example. OpEx is ongoing spend on a service you consume and can stop, which is how consumption-based cloud billing works. Moving to Azure shifts spend from CapEx to OpEx, which is one of the standard financial arguments for cloud adoption.',
    referenceUrl: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/',
    tags: ['Cloud Concepts', 'CapEx', 'OpEx', 'Economics']
  },
  {
    id: 'az-900-2',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd2',
    domainName: 'Describe Azure Architecture and Services',
    title: 'Azure Availability Zones and SLA Guarantees',
    scenario: 'A team must deploy virtual machines so that the application keeps running if an entire Azure datacentre within the region fails, and they want the highest available VM uptime SLA.',
    question: 'How should the virtual machines be deployed?',
    options: [
      { id: 'A', text: 'Two or more VMs spread across different Availability Zones in the region.' },
      { id: 'B', text: 'Two or more VMs in a single availability set within one datacentre.' },
      { id: 'C', text: 'A single VM using Premium SSD managed disks.' },
      { id: 'D', text: 'Two or more VMs in the same Availability Zone behind a load balancer.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Availability Zones are physically separate locations within an Azure region, each with independent power, cooling, and networking, so spreading VMs across two or more zones survives the loss of a whole datacentre and carries the highest VM uptime SLA (99.99%). An availability set (B) only protects against rack-level failures inside one datacentre (99.95%), a single VM with premium disks (C) has no redundancy, and multiple VMs in one zone (D) share that zone\'s fate.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview',
    tags: ['Availability Zones', 'High Availability', 'SLA']
  },
  {
    id: 'az-900-3',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd3',
    domainName: 'Describe Azure Management and Governance',
    title: 'Enforcing Resource Compliance with Azure Policy',
    scenario: 'A governance team must ensure that every storage account created in a subscription has secure transfer required enabled, and that non-compliant deployments are rejected rather than merely reported.',
    question: 'Which Azure service should be used?',
    options: [
      { id: 'A', text: 'Azure Policy with a deny effect assigned at the subscription scope.' },
      { id: 'B', text: 'Azure Monitor with an alert rule on storage account creation.' },
      { id: 'C', text: 'Microsoft Cost Management with a budget action.' },
      { id: 'D', text: 'Azure RBAC with a custom role that omits the storage write permission.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Policy evaluates resource properties against rules and, with the deny effect, blocks non-compliant deployments outright while also reporting compliance for existing resources. Azure Monitor (B) alerts after the fact, Cost Management (C) governs spend rather than configuration, and RBAC (D) controls who may act but cannot express a condition about a specific resource property.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/governance/policy/overview',
    tags: ['Azure Policy', 'Governance', 'Compliance']
  },
  {
    id: 'az-900-4',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd2',
    domainName: 'Describe Azure Architecture and Services',
    title: 'Logical Container for Related Azure Resources',
    scenario: 'A team deploys a web app, a SQL database, and a storage account for a single project and wants to manage their lifecycle, permissions, and deletion together.',
    question: 'Which Azure construct should they use?',
    options: [
      { id: 'A', text: 'A resource group.' },
      { id: 'B', text: 'A virtual network.' },
      { id: 'C', text: 'An availability set.' },
      { id: 'D', text: 'A management group.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A resource group is the logical container for resources that share a lifecycle: deleting the group deletes its contents, and RBAC assigned at the group applies to every resource in it. A virtual network provides network isolation, an availability set spreads VMs across fault and update domains, and a management group organises subscriptions - one level higher.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal',
    tags: ['Resource Groups', 'Governance', 'Azure Basics']
  },
  {
    id: 'az-900-5',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd2',
    domainName: 'Describe Azure Architecture and Services',
    title: 'Blob Redundancy for a Zone-Resilient Regional Workload',
    scenario: 'A company stores customer documents in Azure Blob Storage. The data must survive the loss of an entire Azure datacentre within the primary region, but there is no requirement for a copy in a second geography and cost should stay as low as that constraint allows.',
    question: 'Which redundancy option should be selected?',
    options: [
      { id: 'A', text: 'Zone-redundant storage (ZRS).' },
      { id: 'B', text: 'Locally redundant storage (LRS).' },
      { id: 'C', text: 'Geo-redundant storage (GRS).' },
      { id: 'D', text: 'Read-access geo-zone-redundant storage (RA-GZRS).' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'ZRS synchronously writes three replicas across three separate availability zones in the primary region, so the loss of one datacentre or zone is survivable. LRS keeps all three copies in a single datacentre and would not survive that failure. GRS and RA-GZRS add a paired-region copy the requirements explicitly do not need, at a higher price.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy',
    tags: ['Blob Storage', 'ZRS', 'Redundancy']
  },
  {
    id: 'az-900-6',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd3',
    domainName: 'Describe Azure Management and Governance',
    title: 'Estimating Azure Cost Versus Comparing It With On-Premises',
    scenario: 'A CIO asks for two artefacts: an estimate of the monthly Azure bill for a proposed architecture, and a comparison of the five-year total cost of the current on-premises datacentre against running the same workloads in Azure.',
    question: 'Which two tools produce these artefacts?',
    options: [
      { id: 'A', text: 'The Azure Pricing Calculator for the estimate and the Total Cost of Ownership (TCO) Calculator for the comparison.' },
      { id: 'B', text: 'Microsoft Cost Management for the estimate and Azure Advisor for the comparison.' },
      { id: 'C', text: 'The TCO Calculator for the estimate and the Azure Pricing Calculator for the comparison.' },
      { id: 'D', text: 'Azure Monitor for the estimate and Microsoft Cost Management for the comparison.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The Azure Pricing Calculator prices a specific set of Azure services you intend to deploy. The TCO Calculator takes your on-premises server, storage, networking, and labour inputs and models the equivalent Azure cost side by side. Cost Management analyses spend that has already happened, Advisor issues optimisation recommendations, and Azure Monitor is an observability service.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets',
    tags: ['Pricing Calculator', 'TCO', 'Cost Management']
  },
  {
    id: 'az-900-7',
    difficulty: 'hard',
    certId: 'azure-az900',
    domainId: 'd3',
    domainName: 'Describe Azure Management and Governance',
    title: 'Separating Azure Policy, RBAC, and Resource Locks',
    scenario: 'A governance lead must satisfy three separate controls: only the West Europe and North Europe regions may be used for new deployments; the database team may restart but not delete production SQL servers; and a specific shared virtual network must be impossible to delete even by a subscription owner acting by mistake.',
    question: 'Which mechanism addresses each control, in that order?',
    options: [
      { id: 'A', text: 'Azure Policy, Azure RBAC, a CanNotDelete resource lock.' },
      { id: 'B', text: 'Azure RBAC, Azure Policy, a ReadOnly resource lock.' },
      { id: 'C', text: 'A management group, Azure Policy, Azure Blueprints.' },
      { id: 'D', text: 'Azure Policy, a CanNotDelete resource lock, Azure RBAC.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Policy constrains resource properties such as allowed locations and SKUs, and can deny non-compliant deployments. Azure RBAC decides which principal may perform which action, so granting restart without delete is a role assignment problem. A CanNotDelete lock blocks deletion regardless of RBAC, including for owners, which is precisely the accidental-deletion protection required. A ReadOnly lock would go further and also block restarts, which the scenario needs to allow.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources',
    tags: ['Azure Policy', 'RBAC', 'Resource Locks', 'Governance']
  },
  {
    id: 'az-900-8',
    difficulty: 'hard',
    certId: 'azure-az900',
    domainId: 'd2',
    domainName: 'Describe Azure Architecture and Services',
    title: 'Governing Servers That Are Not in Azure',
    scenario: 'An enterprise runs 200 Windows and Linux servers in its own datacentre and 40 VMs in another public cloud. It wants a single inventory in the Azure portal, Azure Policy compliance evaluation, and Defender for Cloud coverage across all of them, without migrating the workloads.',
    question: 'Which Azure service delivers this?',
    options: [
      { id: 'A', text: 'Azure Arc.' },
      { id: 'B', text: 'Azure Migrate.' },
      { id: 'C', text: 'Azure VMware Solution.' },
      { id: 'D', text: 'Azure Site Recovery.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Arc projects non-Azure servers, Kubernetes clusters, and data services into Azure Resource Manager as first-class resources, so Azure Policy, RBAC, Monitor, and Defender for Cloud all apply without moving the workload. Azure Migrate assesses and performs migrations, Azure VMware Solution hosts VMware stacks inside Azure, and Site Recovery is a DR replication service.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-arc/overview',
    tags: ['Azure Arc', 'Hybrid', 'Governance']
  },
  {
    id: 'az-900-9',
    difficulty: 'hard',
    certId: 'azure-az900',
    domainId: 'd1',
    domainName: 'Describe Cloud Concepts',
    title: 'Distinguishing Elasticity, Scalability, and Agility',
    scenario: 'An architect describes three properties of the company\'s new Azure deployment: capacity is added and removed automatically as traffic varies through the day; the platform can grow to serve ten times the users by adding more instances; and the team can provision a new test environment in minutes instead of waiting weeks for hardware.',
    question: 'Which cloud characteristics do these three statements describe, in that order?',
    options: [
      { id: 'A', text: 'Elasticity, scalability, agility.' },
      { id: 'B', text: 'Scalability, elasticity, high availability.' },
      { id: 'C', text: 'Agility, elasticity, disaster recovery.' },
      { id: 'D', text: 'High availability, scalability, elasticity.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Elasticity is the automatic addition and removal of capacity in response to demand. Scalability is the ability to handle growth by scaling out (more instances) or up (bigger instances). Agility is the speed at which resources can be provisioned and changed. High availability concerns surviving failures, and disaster recovery concerns restoring service after a major outage - neither is described here.',
    referenceUrl: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/',
    tags: ['Cloud Concepts', 'Elasticity', 'Scalability']
  }
];

export default AZURE_AZ900_QUESTIONS;
