export const AZURE_AZ305_FLASHCARDS_5 = [
  {
    id: 'azure-az305-fc-101',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does an Entra entitlement management access package bundle, and what decides who can get it?',
    hint: 'A bundle of roles, plus rules per audience.',
    back: 'An <strong>access package</strong> bundles resource roles: <strong>group and Teams memberships</strong>, <strong>enterprise application roles</strong> and <strong>SharePoint Online sites</strong> into one requestable unit. One or more <strong>policies</strong> on the package decide who may request it (employees, connected organizations, any external user, or admin-direct assignment), whether approval is required, how long the assignment lasts and whether it is reviewed. It requires a Microsoft Entra ID Governance or P2 licence.',
    tags: ['Entra ID Governance', 'Entitlement Management']
  },
  {
    id: 'azure-az305-fc-102',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Entitlement management: catalog vs access package vs policy. What lives at each level?',
    hint: 'Container, bundle, rules.',
    back: '<strong>Catalog</strong>: the container that holds resources (groups, apps, sites) and the access packages built from them; catalog owners can delegate package management to business owners who hold no directory-wide role. <strong>Access package</strong>: a bundle of specific roles on those resources. <strong>Policy</strong>: the rules for one audience, who can request, approval stages, assignment lifetime and expiry, and review cadence. One package can carry several policies, for example auto-approval for employees and two-stage approval for partners.',
    tags: ['Entitlement Management', 'Delegation']
  },
  {
    id: 'azure-az305-fc-103',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Access reviews vs entitlement management: which governs new access and which prunes standing access?',
    hint: 'One is the grant, the other is the recertification.',
    back: '<strong>Entitlement management</strong> governs the <em>grant</em>: request, approval, time-limited assignment and automatic removal at expiry. <strong>Access reviews</strong> govern <em>what already exists</em>: periodic recertification of group membership, application assignments, access packages and privileged roles, with owners, managers or the users themselves confirming or removing access. Designs that must satisfy "least privilege with periodic attestation" combine both: packages with an expiry plus a recurring review on the package.',
    tags: ['Access Reviews', 'Entitlement Management']
  },
  {
    id: 'azure-az305-fc-104',
    difficulty: 'hard',
    difficultyNote: undefined,
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Access review: a reviewer never responds. What happens to the access, and what drives "take recommendations"?',
    hint: 'A setting on the review decides, and recommendations look at sign-in activity.',
    back: 'The review\'s <strong>If reviewers don\'t respond</strong> setting applies at completion: <strong>No change</strong>, <strong>Remove access</strong>, <strong>Approve access</strong> or <strong>Take recommendations</strong>. A recommendation to deny is generated when the user has <strong>not signed in for 30 days</strong> (group reviews add peer-outlier signals). <strong>Auto apply results</strong> must also be on, or decisions sit unapplied. Unattended guest cleanup on the exam is "Remove access" or "Take recommendations" with auto-apply.',
    tags: ['Access Reviews', 'Guest Users']
  },
  {
    id: 'azure-az305-fc-105',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Lifecycle workflows: what triggers a joiner, mover or leaver workflow, and what can it do?',
    hint: 'Two date attributes and an attribute-change trigger.',
    back: 'Workflows fire on <strong>user attributes</strong>: <code>employeeHireDate</code> for joiners, <code>employeeLeaveDateTime</code> for leavers, and changes to attributes such as department or manager for movers, with an offset such as 7 days before hire. Built-in tasks: generate a <strong>Temporary Access Pass</strong>, send welcome mail, add or remove group and Teams membership, <strong>disable</strong> or delete the account, remove licences, or call a <strong>custom extension</strong> (Logic App). Needs an Entra ID Governance licence and the hire and leave attributes populated, usually by HR-driven provisioning.',
    tags: ['Lifecycle Workflows', 'Entra ID Governance']
  },
  {
    id: 'azure-az305-fc-106',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does PIM for Groups add over ordinary group membership?',
    hint: 'Eligible, not active.',
    back: 'Members or owners become <strong>eligible</strong> instead of permanently active: they <strong>activate</strong> membership just-in-time for a bounded period, optionally with MFA, justification and approval, and every activation is audited. Because the group can hold <strong>Azure RBAC roles, Entra roles or application assignments</strong>, one activation grants a whole bundle of access at once. It works with security and Microsoft 365 groups, not only role-assignable groups.',
    tags: ['PIM', 'Groups']
  },
  {
    id: 'azure-az305-fc-107',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Guest lifecycle: how does a partner\'s guest account created through entitlement management get removed automatically?',
    hint: 'A connected organization on the way in, a lifecycle setting on the way out.',
    back: 'Allow a <strong>connected organization</strong> in the package policy; the guest account is created when the request is approved. Then in <strong>Manage the lifecycle of external users</strong>, choose <strong>Block sign-in</strong> when the user\'s <em>last</em> access package assignment expires and <strong>Remove</strong> the guest a configurable number of days later (default 30). Only guests created by entitlement management are governed this way; pre-existing guests need a guest access review with "Remove access" instead.',
    tags: ['Entitlement Management', 'Guest Users', 'B2B']
  },
  {
    id: 'azure-az305-fc-108',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Emergency access (break-glass) accounts: which design rules keep them usable during an identity outage?',
    hint: 'Nothing that could be the thing that broke.',
    back: 'Create <strong>at least two cloud-only</strong> accounts (<code>*.onmicrosoft.com</code>, never federated or synced), give them <strong>permanent Global Administrator</strong> rather than a PIM-eligible assignment, <strong>exclude them from every Conditional Access policy</strong>, and protect them with <strong>phishing-resistant FIDO2 keys</strong> kept offline. Alert on any sign-in with a Log Analytics or Sentinel rule, and test them on a schedule. The point is that federation, PIM or a CA policy may be exactly what failed.',
    tags: ['Emergency Access', 'Conditional Access', 'Global Administrator']
  },
  {
    id: 'azure-az305-fc-109',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Does a Cost Management budget stop spending once it is exceeded?',
    hint: 'Alert or enforce?',
    back: '<strong>No.</strong> A budget only <strong>alerts</strong>: it evaluates spend against thresholds and fires notifications by email or through an <strong>action group</strong>. To enforce a cap, the action group must trigger automation you build: an Automation runbook, Function or Logic App that deallocates VMs or strips RBAC from a subscription. Distractors describe budgets as hard limits; the only true hard limit is the spending limit on credit-based subscriptions such as Visual Studio.',
    tags: ['Cost Management', 'Budgets', 'Action Groups']
  },
  {
    id: 'azure-az305-fc-110',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Budget alerts: actual vs forecasted threshold. When does each fire?',
    hint: 'After the money is spent, or before.',
    back: '<strong>Actual</strong> alerts fire once accumulated cost for the period crosses the threshold, so by then the money is spent. <strong>Forecasted</strong> alerts fire when Cost Management\'s projection says the period will end above the threshold, giving time to act. A common design is forecasted alerts at 80% and 100% with an actual alert at 100% as a backstop. Budgets can be scoped to a management group, subscription or resource group and filtered by tag or resource type for per-team budgets.',
    tags: ['Cost Management', 'Budgets']
  },
  {
    id: 'azure-az305-fc-111',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Reservation vs savings plan for compute: which one do you recommend?',
    hint: 'Flexibility vs discount depth.',
    back: 'A <strong>reservation</strong> commits to a SKU family in one region for 1 or 3 years and yields the <strong>deepest discount</strong>; instance size flexibility covers only sizes within that family. A <strong>savings plan</strong> commits to an <strong>hourly spend</strong> for 1 or 3 years and applies to eligible compute (VMs, App Service, Functions Premium, Container Apps, Container Instances, Dedicated Hosts) in <strong>any region and size</strong>, at a smaller discount. Steady, predictable shape: reservation. Workloads that change size or region: savings plan. When both exist, reservations are applied first.',
    tags: ['Reservations', 'Savings Plans', 'Cost Management']
  },
  {
    id: 'azure-az305-fc-112',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Reservation scope: single resource group, single subscription, shared, management group. What does each apply to?',
    hint: 'Wider scope, higher utilisation.',
    back: '<strong>Single resource group</strong>: only matching resources in that group. <strong>Single subscription</strong>: matching resources anywhere in it. <strong>Shared</strong>: any subscription in the same <strong>billing context</strong> (EA enrollment or MCA billing profile). <strong>Management group</strong>: subscriptions in that group <em>and</em> in the same billing context. Unused reserved hours are lost, not carried over, so shared scope is the default unless chargeback needs the discount pinned to one team. Scope can be changed after purchase.',
    tags: ['Reservations', 'Billing Scope']
  },
  {
    id: 'azure-az305-fc-113',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Hybrid Benefit: which licences qualify and which Azure services accept them?',
    hint: 'Software Assurance is the key word.',
    back: 'Licences with <strong>Software Assurance</strong> or qualifying subscriptions for <strong>Windows Server</strong> and <strong>SQL Server</strong>, plus <strong>RHEL and SLES</strong> subscriptions (bring-your-own-subscription conversion). They apply to Windows and Linux VMs and scale sets, Azure SQL Database and Managed Instance, SQL Server on VMs, AKS and Azure Stack HCI. Hybrid Benefit <strong>stacks with reservations</strong>, which is why the cheapest steady-state SQL design is reserved capacity plus Hybrid Benefit. Licence-included pricing is the fallback when no SA exists.',
    tags: ['Azure Hybrid Benefit', 'Licensing']
  },
  {
    id: 'azure-az305-fc-114',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Hybrid Benefit for Windows Server: how many Azure VMs does one set of 16 core licences cover?',
    hint: 'Two small or one medium.',
    back: 'Each set of <strong>16 core licences</strong> with Software Assurance covers either <strong>two VMs with up to 8 vCPUs each</strong> or <strong>one VM with up to 16 vCPUs</strong>; bigger VMs consume more licences in 8-core increments, so a 32-vCPU VM needs two sets. <strong>Datacenter</strong> edition licences may be used <strong>on-premises and in Azure at the same time</strong>; <strong>Standard</strong> edition allows dual use only during a <strong>180-day</strong> migration window, after which the on-premises use must stop.',
    tags: ['Azure Hybrid Benefit', 'Windows Server', 'Licensing']
  },
  {
    id: 'azure-az305-fc-115',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Which Azure Advisor category flags underutilised VMs, and what does it recommend?',
    hint: 'Five categories; one of them is about money.',
    back: 'The <strong>Cost</strong> category (the others are Reliability, Security, Operational Excellence and Performance). It flags VMs whose average CPU stays under a threshold, <strong>5% over 7 days</strong> by default and configurable to 10, 15 or 20%, recommending shutdown or right-sizing; it also proposes reservations and savings plans from your usage and lists idle resources such as unattached disks, idle VPN or ExpressRoute gateways and unassociated public IPs. Advisor recommends; Policy and budgets do not do this analysis.',
    tags: ['Azure Advisor', 'Cost Optimisation']
  },
  {
    id: 'azure-az305-fc-116',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Cost Management tag inheritance vs Azure Policy Modify for tags: which one serves chargeback?',
    hint: 'One tags cost records, the other tags resources.',
    back: '<strong>Cost Management tag inheritance</strong>, a setting on the billing scope, copies subscription and resource group tags onto the <strong>cost records</strong> only; resources stay untagged but every line in the cost export carries the owner tag, which is what chargeback consumes. <strong>Azure Policy Modify</strong> (or Append) stamps tags onto the <strong>resources</strong> at creation or through remediation, which also drives automation and inventory. Use both: Policy to inherit from the resource group onto resources, tag inheritance to cover child resources that cannot be tagged.',
    tags: ['Cost Management', 'Tagging', 'Azure Policy']
  },
  {
    id: 'azure-az305-fc-117',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Cost allocation rules in Cost Management: what do they move, and where does the result appear?',
    hint: 'Shared services costs, spread to consumers, but not on the bill.',
    back: 'A rule takes cost from <strong>source</strong> subscriptions, resource groups or tags, typically shared services such as hub networking or a central firewall, and spreads it over <strong>target</strong> subscriptions, resource groups or tags <strong>evenly, by fixed percentage, or proportionally</strong> to the targets\' compute, storage or network cost. The reallocation shows in Cost Management analysis, budgets and exports but <strong>never changes the invoice</strong>. Requires an Enterprise Agreement or Microsoft Customer Agreement billing account.',
    tags: ['Cost Management', 'Cost Allocation', 'Chargeback']
  },
  {
    id: 'azure-az305-fc-118',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How is the Defender for Cloud secure score calculated?',
    hint: 'Points per control, and controls are all-or-nothing.',
    back: 'Secure score is the <strong>percentage of points earned across security controls</strong> for a subscription or a set of subscriptions. Each control (for example "Enable MFA" or "Remediate vulnerabilities") carries a maximum score that you earn only when <strong>every recommendation in the control is remediated on every resource</strong>; fixing half the resources earns nothing. Exempting a resource or disabling a recommendation removes it from the denominator. Secure score is part of the free foundational CSPM tier.',
    tags: ['Defender for Cloud', 'Secure Score']
  },
  {
    id: 'azure-az305-fc-119',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Foundational CSPM vs Defender CSPM: what does the paid plan add?',
    hint: 'Attack paths and agentless scanning are the tells.',
    back: '<strong>Foundational CSPM</strong> is free: secure score, recommendations, asset inventory and the Microsoft cloud security benchmark. <strong>Defender CSPM</strong> adds <strong>attack path analysis</strong>, the <strong>cloud security explorer</strong> graph queries, <strong>agentless scanning</strong> of VMs and containers for vulnerabilities and secrets, data-aware security posture, governance rules with owners and due dates, and additional regulatory compliance standards. It is billed per billable resource (servers, storage accounts, databases).',
    tags: ['Defender for Cloud', 'CSPM']
  },
  {
    id: 'azure-az305-fc-120',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Defender for Servers Plan 1 vs Plan 2: which requirements force Plan 2?',
    hint: 'EDR only, or EDR plus the toolbox.',
    back: '<strong>Plan 1</strong> is essentially <strong>Defender for Endpoint</strong> integration (EDR, threat detection, vulnerability management) on Azure and Arc-enabled machines. <strong>Plan 2</strong> adds <strong>just-in-time VM access</strong>, <strong>file integrity monitoring</strong>, <strong>agentless scanning</strong> for vulnerabilities, secrets and malware, network-layer threat detection and a free <strong>500 MB per node per day</strong> Log Analytics ingestion allowance for the security tables. Any requirement that names JIT or FIM forces Plan 2.',
    tags: ['Defender for Servers', 'Defender for Cloud']
  },
  {
    id: 'azure-az305-fc-121',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Just-in-time VM access: what does it change on the network, and what does a requester need?',
    hint: 'Deny by default, then a timed allow for one source.',
    back: 'JIT writes <strong>Deny rules for the chosen management ports</strong> (RDP 3389, SSH 22, WinRM or custom) into the VM\'s <strong>NSG</strong> and, when the VM sits behind <strong>Azure Firewall</strong>, into the firewall as well. An approved request adds a higher-priority <strong>Allow</strong> rule for the requester\'s source IP for a bounded window (policy maximum 3 hours), then removes it. Requesters need <strong>Reader</strong> on the VM plus <code>Microsoft.Security/locations/jitNetworkAccessPolicies/initiate/action</code>. It requires Defender for Servers Plan 2 and a VM that has an NSG.',
    tags: ['JIT VM Access', 'NSG', 'Defender for Servers']
  },
  {
    id: 'azure-az305-fc-122',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Defender for Storage: what does it cover that storage firewall rules cannot?',
    hint: 'Who can get in vs what they do once in.',
    back: 'It watches <strong>data-plane activity</strong>: anomalous access patterns, credential misuse, exfiltration and phishing-hosting attempts, plus two add-ons: <strong>malware scanning</strong> of blobs on upload (near real-time, priced per GB scanned, with an optional monthly cap per account) and <strong>sensitive data threat detection</strong>. It is enabled at subscription level for every account, with per-account exclusions and per-account pricing. Firewall rules limit <em>who</em> reaches the account; Defender detects <em>what</em> they do after that.',
    tags: ['Defender for Storage', 'Malware Scanning']
  },
  {
    id: 'azure-az305-fc-123',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Defender for SQL: which of the two plans covers SQL Server on VMs or on-premises?',
    hint: 'PaaS plan vs machines plan.',
    back: '<strong>Defender for Azure SQL Databases</strong> covers the PaaS engines: Azure SQL Database, SQL Managed Instance and Synapse dedicated SQL pools. <strong>Defender for SQL Servers on Machines</strong> covers SQL Server on Azure VMs and, through <strong>Azure Arc</strong>, on-premises and other clouds, using the Azure Monitor Agent. Both bundle <strong>vulnerability assessment</strong> and <strong>Advanced Threat Protection</strong>. A hybrid estate needs both plans plus Arc-enabled servers; the PaaS plan alone leaves the VMs uncovered.',
    tags: ['Defender for SQL', 'Azure Arc']
  },
  {
    id: 'azure-az305-fc-124',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Microsoft Sentinel: when does a single workspace stop being the right design?',
    hint: 'Residency, tenancy, or RBAC that tables cannot express.',
    back: 'Default to <strong>one Sentinel workspace per tenant</strong>: incidents, analytics rules, watchlists and UEBA are workspace-scoped, and cross-workspace queries add cost and complexity. Split only for <strong>data residency</strong> (logs must stay in a region), <strong>separate tenants</strong> or MSSP customers (managed through Azure Lighthouse and the multi-workspace incident view), <strong>RBAC separation</strong> that table-level and resource-context access cannot satisfy, or split billing and ownership. Cross-workspace KQL with <code>workspace()</code> supports up to 100 workspaces per query.',
    tags: ['Microsoft Sentinel', 'Log Analytics', 'Azure Lighthouse']
  },
  {
    id: 'azure-az305-fc-125',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Which licence do risk-based Conditional Access policies from Entra ID Protection require?',
    hint: 'The higher of the two Entra tiers.',
    back: '<strong>Microsoft Entra ID P2</strong> (or a suite containing it such as Microsoft 365 E5). P2 exposes <strong>user risk</strong> (the account is probably compromised: leaked credentials, atypical behaviour) and <strong>sign-in risk</strong> (this attempt looks suspicious: anonymous IP, impossible travel, unfamiliar properties) as Conditional Access conditions. The standard pair of policies: high user risk requires a secure password change; medium-or-higher sign-in risk requires MFA. P1 tenants can only report on risk, not act on it in CA.',
    tags: ['Entra ID Protection', 'Conditional Access', 'Licensing']
  }
];

export default AZURE_AZ305_FLASHCARDS_5;
