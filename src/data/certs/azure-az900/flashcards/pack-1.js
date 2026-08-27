export const AZURE_AZ900_FLASHCARDS = [
  {
    id: 'azure-az900-fc-1',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd1',
    front: 'IaaS vs. PaaS vs. SaaS — who patches the OS in each?',
    hint: 'Follow the shared responsibility line.',
    back: '<strong>IaaS</strong> (Azure VMs) — the customer patches the OS, runtime, and app. <strong>PaaS</strong> (App Service, Azure SQL Database) — Microsoft patches the OS and runtime; the customer owns the app and data. <strong>SaaS</strong> (Microsoft 365) — Microsoft owns everything except data, devices, accounts, and access.',
    tags: ['Cloud Concepts', 'Shared Responsibility']
  },
  {
    id: 'azure-az900-fc-2',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd1',
    front: 'CapEx vs. OpEx and what "consumption-based pricing" changes.',
    hint: 'Buy the asset or rent the capacity.',
    back: '<strong>CapEx</strong> — a large up-front purchase of hardware, depreciated over years. <strong>OpEx</strong> — ongoing operating spend you can stop. Cloud consumption pricing means you pay only for what you use, with no up-front cost and no over-provisioning for peak, which turns capacity planning into an elasticity setting.',
    tags: ['Cloud Concepts', 'Economics']
  },
  {
    id: 'azure-az900-fc-3',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd2',
    front: 'What is the Azure management hierarchy?',
    hint: 'Four levels, top to bottom.',
    back: 'Management Group → Subscription → Resource Group → Resource. Policies and RBAC assigned higher up are inherited downward. A resource lives in exactly one resource group; a resource group is a flat, logical container (its own region only stores metadata).',
    tags: ['Governance', 'Resource Groups', 'Subscriptions']
  },
  {
    id: 'azure-az900-fc-4',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd2',
    front: 'Region vs. Availability Zone vs. Region Pair vs. Availability Set',
    hint: 'Datacentre, zone, paired region, fault/update domains.',
    back: '<strong>Region</strong> — a set of datacentres in a latency-defined perimeter. <strong>Availability Zone</strong> — physically separate zone within a region (99.99% VM SLA with 2+ zones). <strong>Region pair</strong> — a second region 300+ miles away used for platform-serialised updates and geo-redundant storage. <strong>Availability Set</strong> — fault and update domains inside one datacentre (99.95%).',
    tags: ['Global Infrastructure', 'High Availability']
  },
  {
    id: 'azure-az900-fc-5',
    difficulty: 'easy',
    certId: 'azure-az900',
    domainId: 'd2',
    front: 'Which compute option: VM, VM Scale Set, App Service, Container Apps/AKS, or Functions?',
    hint: 'Control on the left, abstraction on the right.',
    back: '<strong>VM</strong> — full control, lift-and-shift. <strong>VM Scale Set</strong> — identical VMs that autoscale behind a load balancer. <strong>App Service</strong> — managed web app/API PaaS with deployment slots. <strong>Container Apps / AKS</strong> — serverless containers vs. full Kubernetes. <strong>Azure Functions</strong> — event-driven, consumption-billed code.',
    tags: ['Compute', 'App Service', 'AKS', 'Functions']
  },
  {
    id: 'azure-az900-fc-6',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd3',
    front: 'Azure Policy vs. Azure RBAC vs. Resource Locks',
    hint: 'What can exist, who can act, what cannot be deleted.',
    back: '<strong>Azure Policy</strong> governs resource <em>properties</em> — enforce allowed regions/SKUs/tags, audit or deny non-compliant deployments. <strong>RBAC</strong> governs <em>who</em> can perform which actions on which scope. <strong>Resource locks</strong> (CanNotDelete / ReadOnly) protect a resource from accidental change regardless of RBAC.',
    tags: ['Azure Policy', 'RBAC', 'Governance']
  },
  {
    id: 'azure-az900-fc-7',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd3',
    front: 'Which cost tool: Pricing Calculator, TCO Calculator, Cost Management, or Azure Advisor?',
    hint: 'Estimate, compare, track, recommend.',
    back: '<strong>Pricing Calculator</strong> — estimate the cost of a planned Azure architecture. <strong>TCO Calculator</strong> — compare on-premises total cost against Azure. <strong>Microsoft Cost Management</strong> — analyse actual spend, set budgets and alerts. <strong>Azure Advisor</strong> — personalised recommendations across cost, security, reliability, performance, and operational excellence.',
    tags: ['Cost Management', 'Advisor', 'Billing']
  },
  {
    id: 'azure-az900-fc-8',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd3',
    front: 'What does Microsoft Entra ID do, and what is Conditional Access?',
    hint: 'Formerly Azure AD.',
    back: '<strong>Microsoft Entra ID</strong> is the cloud identity provider — authentication, SSO, MFA, device identity, B2B guests. <strong>Conditional Access</strong> evaluates signals (user, device compliance, location, risk, app) and then grants, blocks, or requires MFA — the policy engine behind Zero Trust. Entra ID is not a replacement for on-prem AD DS; it syncs with it via Entra Connect.',
    tags: ['Entra ID', 'Identity', 'Zero Trust']
  },
  {
    id: 'azure-az900-fc-9',
    difficulty: 'medium',
    certId: 'azure-az900',
    domainId: 'd2',
    front: 'Blob storage access tiers and redundancy options.',
    hint: 'Four tiers, four-plus redundancy modes.',
    back: 'Tiers: <strong>Hot</strong> · <strong>Cool</strong> (30-day min) · <strong>Cold</strong> (90-day min) · <strong>Archive</strong> (180-day min, hours to rehydrate). Redundancy: <strong>LRS</strong> (3 copies, one datacentre) · <strong>ZRS</strong> (3 zones) · <strong>GRS</strong> (LRS + paired region) · <strong>GZRS</strong> (ZRS + paired region); RA- variants add read access to the secondary.',
    tags: ['Blob Storage', 'Redundancy', 'Storage']
  },
  {
    id: 'azure-az900-fc-10',
    difficulty: 'hard',
    certId: 'azure-az900',
    domainId: 'd3',
    front: 'ARM templates / Bicep, Azure Arc, and Azure Monitor — what problem does each solve?',
    hint: 'Declare, extend, observe.',
    back: '<strong>ARM templates / Bicep</strong> — declarative, idempotent infrastructure as code deployed through Azure Resource Manager. <strong>Azure Arc</strong> — projects on-premises and other-cloud servers, Kubernetes clusters, and data services into Azure so they get Policy, RBAC, and Monitor. <strong>Azure Monitor</strong> — metrics, Log Analytics (KQL), Application Insights, and alerts.',
    tags: ['Bicep', 'Azure Arc', 'Azure Monitor', 'Operations']
  }
];

export default AZURE_AZ900_FLASHCARDS;
