export const AZURE_AZ305_FLASHCARDS_17 = [
  {
    id: 'azure-az305-fc-401',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure SignalR Service vs Azure Web PubSub: which fits a real-time push requirement?',
    hint: 'Does the app already use the ASP.NET Core SignalR library?',
    back: '<strong>Azure SignalR Service</strong> scales out apps built on <strong>ASP.NET Core SignalR</strong> (or Azure Functions SignalR bindings) and needs SignalR client libraries, which handle transport fallback and reconnection. <strong>Azure Web PubSub</strong> uses <strong>plain WebSockets</strong> with a publish-subscribe model, so any language or client can connect without a SignalR library; it also offers a Socket.IO mode. Both take persistent connections off your servers; choose by the client and server stack you already have.',
    tags: ['SignalR Service', 'Web PubSub', 'Real-time']
  },
  {
    id: 'azure-az305-fc-402',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'App Configuration: labels in one store or a separate store per environment?',
    hint: 'Think about who must be kept away from production values.',
    back: '<strong>Labels</strong> let one store hold the same key with different values (for example <code>Dev</code>, <code>Test</code>, <code>Prod</code>), and the app selects its label at startup. That is simple but puts every environment behind the same access control and request quota. Use <strong>separate stores</strong> when production must be isolated: different RBAC, network rules (private endpoints), keys and throttling limits. A common pattern is one store per environment with labels for variants inside it.',
    tags: ['App Configuration', 'Labels']
  },
  {
    id: 'azure-az305-fc-403',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which built-in feature filters does App Configuration feature management provide, and what does each decide?',
    hint: 'Who, when, and how many.',
    back: '<strong>Targeting</strong>: include or exclude named users and groups, then roll out to a default percentage of everyone else, assigned consistently per user. <strong>Time window</strong>: the flag is on only between a start and end time (optionally recurring). <strong>Percentage</strong>: on for a random share of evaluations, with no per-user stickiness. Filters can be combined, and variant feature flags extend this to serving different values to different allocations.',
    tags: ['App Configuration', 'Feature flags']
  },
  {
    id: 'azure-az305-fc-404',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Dynamic configuration in App Configuration: sentinel-key polling vs push refresh with Event Grid. When is each the better fit?',
    hint: 'Polling cost versus reaction time.',
    back: '<strong>Polling with a sentinel key</strong>: each app instance checks one key every refresh interval (default 30 seconds) and reloads everything when it changes; simple, no extra services, but changes appear only after the next interval and requests grow with instance count. <strong>Push refresh</strong>: App Configuration publishes <code>KeyValueModified</code> events to Event Grid, usually relayed through Service Bus to the app, which marks its cache stale and refreshes after a random delay to avoid a thundering herd. Choose push when changes must land quickly across many instances without tight polling.',
    tags: ['App Configuration', 'Dynamic refresh', 'Event Grid']
  },
  {
    id: 'azure-az305-fc-405',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'App Configuration Free tier vs Standard tier: which production features are missing from Free?',
    hint: 'Free is for trying it, not for relying on it.',
    back: 'The <strong>Free</strong> tier has a small daily request quota, limited storage and <strong>no SLA</strong>. It also lacks the features a production design usually depends on: <strong>private endpoints</strong>, <strong>customer-managed keys</strong>, <strong>geo-replication</strong>, and <strong>soft delete with purge protection</strong>. <strong>Standard</strong> (and higher tiers) adds these along with a much larger request allowance, so recommend Standard or above for any production workload.',
    tags: ['App Configuration', 'Pricing tiers']
  },
  {
    id: 'azure-az305-fc-406',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'App Service Key Vault references: what syntax do they use, and which identity reads the secret?',
    hint: 'An @ prefix in an ordinary app setting.',
    back: 'Set the app setting value to <code>@Microsoft.KeyVault(SecretUri=https://vault.vault.azure.net/secrets/name/)</code> or <code>@Microsoft.KeyVault(VaultName=...;SecretName=...)</code>. App Service resolves it with the app\'s <strong>system-assigned identity</strong> by default, or a user-assigned identity set in <code>keyVaultReferenceIdentity</code>, which needs <strong>Key Vault Secrets User</strong> (or a get-secret access policy). Omitting the version means rotated secrets are picked up automatically, within about a day.',
    tags: ['App Service', 'Key Vault references']
  },
  {
    id: 'azure-az305-fc-407',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How does an App Service app read an App Configuration value without any code change, and what permissions does it need?',
    hint: 'A reference syntax in app settings, like the Key Vault one.',
    back: 'Use an <strong>App Configuration reference</strong> as the app setting value: <code>@Microsoft.AppConfiguration(Endpoint=https://store.azconfig.io; Key=myKey; Label=prod)</code>. App Service resolves it with the app\'s managed identity, which needs <strong>App Configuration Data Reader</strong> on the store. If the referenced key-value is itself a Key Vault reference, the identity also needs read access to the secret in Key Vault. The app sees a plain environment variable, so no provider library is required.',
    tags: ['App Service', 'App Configuration references']
  },
  {
    id: 'azure-az305-fc-408',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What do soft delete and purge protection add to an App Configuration store?',
    hint: 'Recovering a store someone deleted by mistake.',
    back: 'With <strong>soft delete</strong>, a deleted store is retained for a configurable period (1 to 7 days) and can be recovered with its key-values intact. <strong>Purge protection</strong> blocks anyone from permanently purging a soft-deleted store before that retention period ends, so even an administrator cannot destroy it early. Both need the Standard tier or higher and protect the store itself, not individual key-values; use revision history or snapshots for value-level recovery.',
    tags: ['App Configuration', 'Soft delete']
  },
  {
    id: 'azure-az305-fc-409',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'App Service slot swap: which settings move with the code, and which stay with the slot?',
    hint: 'Content and general settings travel; the slot\'s identity and endpoints do not.',
    back: '<strong>Swapped</strong>: general settings such as framework version and web sockets, app settings and connection strings (unless marked as slot settings), handler mappings, public certificates, WebJobs content and hybrid connections. <strong>Stay with the slot</strong>: publishing endpoints, custom domain names, TLS bindings and non-public certificates, scale settings, Always On, IP restrictions, CORS, diagnostic settings, virtual network integration, managed identities and any setting marked as a <strong>deployment slot setting</strong>.',
    tags: ['App Service', 'Deployment slots']
  },
  {
    id: 'azure-az305-fc-410',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Bicep, ARM JSON or Terraform: how do you choose an infrastructure-as-code language for Azure?',
    hint: 'Consider where the state lives and how many clouds you target.',
    back: '<strong>Bicep</strong>: concise declarative language that compiles to ARM JSON, supports every resource type and API version on release, and needs no state file because Azure Resource Manager is the source of truth; the default for Azure-only estates. <strong>ARM JSON</strong>: the same engine, but verbose; mainly for existing templates. <strong>Terraform</strong>: one workflow across clouds and SaaS providers, but a state file must be stored, locked and secured, and new Azure features wait on the provider.',
    tags: ['Bicep', 'Terraform', 'Infrastructure as code']
  },
  {
    id: 'azure-az305-fc-411',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ARM deployment modes: incremental vs complete. What happens to resources missing from the template?',
    hint: 'One is the default and never deletes.',
    back: '<strong>Incremental</strong> (default): resources in the template are created or updated; resources in the resource group but absent from the template are <strong>left untouched</strong>. <strong>Complete</strong>: resources in the resource group that the template does not define are <strong>deleted</strong>. Complete mode works only at resource group scope and can remove resources other teams placed in the group, so Microsoft recommends <strong>deployment stacks</strong> for managed cleanup instead.',
    tags: ['ARM templates', 'Deployment modes']
  },
  {
    id: 'azure-az305-fc-412',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Deployment stacks: what do the deny settings and the action-on-unmanage options control?',
    hint: 'One protects what the stack manages; the other decides the fate of what it stops managing.',
    back: '<strong>Deny settings</strong> apply a deny assignment to managed resources: <code>none</code>, <code>denyDelete</code>, or <code>denyWriteAndDelete</code>, with a short list of excluded principals and excluded actions for exceptions such as the pipeline. <strong>Action on unmanage</strong> decides what happens to resources dropped from the template: <code>detachAll</code> leaves them in place but unmanaged, <code>deleteResources</code> deletes resources but keeps resource groups, and <code>deleteAll</code> deletes resources and resource groups.',
    tags: ['Deployment stacks', 'Bicep']
  },
  {
    id: 'azure-az305-fc-413',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Template specs vs a private Bicep module registry: when do you use each?',
    hint: 'Who consumes the artifact, and at what point?',
    back: '<strong>Template specs</strong> are Azure resources holding versioned, deployable templates; consumers with Reader deploy them from the portal, CLI or pipelines, and access is controlled with Azure RBAC. Use them to hand finished solutions to people who deploy. A <strong>private module registry</strong> in Azure Container Registry stores reusable Bicep modules that template <strong>authors</strong> reference at build time (<code>br:</code> paths). Use it to share building blocks between engineering teams.',
    tags: ['Template specs', 'Bicep modules']
  },
  {
    id: 'azure-az305-fc-414',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which change types can an ARM or Bicep what-if operation report?',
    hint: 'More than create, modify and delete.',
    back: '<strong>Create</strong> (new resource), <strong>Delete</strong> (only in complete mode or deployment stacks that delete), <strong>Modify</strong> (property changes shown field by field), <strong>NoChange</strong>, <strong>Ignore</strong> (exists in scope but not in the template, left alone in incremental mode), <strong>Deploy</strong> (will be redeployed but what-if cannot predict property changes) and <strong>Unsupported</strong>. What-if deploys nothing, which makes it a safe pull-request gate.',
    tags: ['What-if', 'Bicep']
  },
  {
    id: 'azure-az305-fc-415',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Pipelines approvals and checks: where are they defined, and what can gate a deployment?',
    hint: 'They live on the resource, not in the YAML.',
    back: 'Checks are configured on a <strong>protected resource</strong> (an environment, service connection, agent pool, variable group, secure file or repository), not in the pipeline YAML, so a pipeline author cannot remove them. Any stage that uses the resource waits until every check passes. Types include <strong>manual approvals</strong>, <strong>branch control</strong>, <strong>business hours</strong>, <strong>required template</strong>, <strong>exclusive lock</strong>, <strong>Query Azure Monitor alerts</strong>, and invoking a <strong>REST API</strong> or <strong>Azure Function</strong> as an automated gate.',
    tags: ['Azure Pipelines', 'Approvals and checks', 'CI/CD']
  },
  {
    id: 'azure-az305-fc-416',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Pipelines deployment jobs: what do the runOnce, rolling and canary strategies do?',
    hint: 'All at once, a batch at a time, or a small slice first.',
    back: '<strong>runOnce</strong>: every lifecycle hook runs once against the target, all at once. <strong>rolling</strong>: replaces the application on a set number or percentage of targets per iteration, and applies only to virtual machine resources in an environment. <strong>canary</strong>: deploys to small, growing increments (for example 10 then 20 percent) so health can be checked before continuing. Each strategy exposes hooks such as preDeploy, deploy, routeTraffic, postRouteTraffic and on failure or success.',
    tags: ['Azure Pipelines', 'Deployment strategies']
  },
  {
    id: 'azure-az305-fc-417',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Deployment Environments vs Microsoft Dev Box vs Azure DevTest Labs: what does each provide?',
    hint: 'Environments, workstations, or lab VMs.',
    back: '<strong>Deployment Environments</strong>: developers create application infrastructure on demand from a Git catalog of Bicep, ARM or Terraform templates, governed by environment types, with expiry dates. <strong>Dev Box</strong>: ready-to-code cloud workstations built from dev box definitions. <strong>DevTest Labs</strong>: labs of test virtual machines with quotas, auto-shutdown and policies, the older option for VM-centred testing.',
    tags: ['Deployment Environments', 'Dev Box']
  },
  {
    id: 'azure-az305-fc-418',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What are the Cloud Adoption Framework methodologies, and which run in sequence versus continuously?',
    hint: 'Four steps to get workloads running, then the ones that never stop.',
    back: 'The adoption journey runs <strong>Strategy</strong> (motivations and business outcomes), <strong>Plan</strong> (digital estate, skills and adoption plan), <strong>Ready</strong> (landing zones) and <strong>Adopt</strong> (migrate, modernize or build new). <strong>Govern</strong>, <strong>Secure</strong> and <strong>Manage</strong> run continuously across the whole estate, and organizational alignment runs alongside all of them. The framework is iterative: each wave of workloads revisits Plan, Ready and Adopt.',
    tags: ['Cloud Adoption Framework']
  },
  {
    id: 'azure-az305-fc-419',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Workload rationalization: what do rehost, refactor, rearchitect, rebuild and replace mean?',
    hint: 'Ordered from least change to most change, with one that removes the code entirely.',
    back: '<strong>Rehost</strong>: move as-is to IaaS, no code change. <strong>Refactor</strong> (replatform): small code changes to run on PaaS such as App Service or Azure SQL. <strong>Rearchitect</strong>: change the design to cloud-native patterns such as microservices or serverless. <strong>Rebuild</strong>: rewrite from scratch on cloud-native services. <strong>Replace</strong>: retire the custom app for a SaaS product. <strong>Retire</strong> and <strong>retain</strong> cover workloads that should be switched off or left where they are.',
    tags: ['Cloud Adoption Framework', 'Rationalization']
  },
  {
    id: 'azure-az305-fc-420',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure landing zones: platform landing zone vs application landing zone. Who owns what?',
    hint: 'Shared services versus the subscriptions workloads live in.',
    back: 'The <strong>platform landing zone</strong> is owned by central teams and holds shared services in dedicated subscriptions: identity (such as domain controllers), management (central Log Analytics, automation) and connectivity (hub network or Virtual WAN, firewalls, DNS, gateways). <strong>Application landing zones</strong> are subscriptions for workloads, placed under the Landing zones management group (Corp or Online) so they inherit policy; application teams own the resources inside them.',
    tags: ['Landing zones', 'Cloud Adoption Framework']
  },
  {
    id: 'azure-az305-fc-421',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What are the eight design areas of an Azure landing zone?',
    hint: 'Start with who pays and which tenant, end with how the platform itself is deployed.',
    back: '1. <strong>Azure billing and Microsoft Entra tenant</strong>. 2. <strong>Identity and access management</strong>. 3. <strong>Resource organization</strong> (management groups, subscriptions, naming and tagging). 4. <strong>Network topology and connectivity</strong>. 5. <strong>Security</strong>. 6. <strong>Management</strong> (monitoring, backup, operations). 7. <strong>Governance</strong> (policy, cost). 8. <strong>Platform automation and DevOps</strong>. Every landing zone implementation, whichever accelerator is used, makes a decision in each area.',
    tags: ['Landing zones', 'Design areas']
  },
  {
    id: 'azure-az305-fc-422',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What does an Azure Migrate business case calculate, and what does it need as input?',
    hint: 'Discovery data in, a cost comparison out.',
    back: 'A <strong>business case</strong> uses servers, databases and web apps discovered by the Azure Migrate appliance (or an imported inventory) to compare <strong>on-premises TCO</strong> with projected <strong>Azure cost</strong> over several years, including compute, storage, network, labour and facilities. It applies <strong>Azure Hybrid Benefit</strong> and right-sizing from utilization data, and suggests the best-fit target per workload (Azure VM, Azure SQL, AKS, App Service or Azure VMware Solution).',
    tags: ['Azure Migrate', 'Business case']
  },
  {
    id: 'azure-az305-fc-423',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How should an estate be grouped into migration waves?',
    hint: 'Things that talk to each other should travel together.',
    back: 'Group servers into <strong>move groups</strong> by application and by <strong>dependency</strong>, so tightly coupled servers and databases migrate in the same wave and no wave leaves a chatty dependency across a WAN link. Early waves take <strong>low-risk, low-complexity</strong> workloads to build skills and validate the landing zone; later waves take critical systems once the process is proven. Use dependency analysis in Azure Migrate to find the links, and schedule each wave around business blackout periods.',
    tags: ['Migration planning', 'Azure Migrate']
  },
  {
    id: 'azure-az305-fc-424',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What is subscription vending in the Cloud Adoption Framework, and why use it?',
    hint: 'A new subscription should arrive already compliant.',
    back: '<strong>Subscription vending</strong> is an automated, request-driven process that creates an application landing zone: it provisions the subscription, places it in the right <strong>management group</strong> (Corp or Online), assigns RBAC and budgets, and optionally peers a spoke virtual network to the hub, all through infrastructure as code (Bicep or Terraform modules) triggered from a pipeline. It keeps every new workload subscription consistent with the platform baseline and removes manual ticket work for the platform team.',
    tags: ['Subscription vending', 'Landing zones']
  },
  {
    id: 'azure-az305-fc-425',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What are the Sandbox and Decommissioned management groups for in the landing zone hierarchy?',
    hint: 'One for starting out, one for winding down.',
    back: '<strong>Sandbox</strong>: subscriptions where teams experiment with Azure services, with relaxed policies but <strong>no connectivity</strong> to corporate or production networks, so experiments cannot reach sensitive systems. <strong>Decommissioned</strong>: subscriptions being retired are moved here, where policy blocks new resources and the subscription is cancelled after a retention period. Both sit directly under the intermediate root, beside Platform and Landing zones.',
    tags: ['Landing zones', 'Management groups']
  }
];

export default AZURE_AZ305_FLASHCARDS_17;
