export const AZURE_AZ104_QUESTIONS_7 = [
  {
    id: 'az-104-151',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Microsoft Entra ID Role Assignable Groups and Security Isolation',
    scenario: 'An enterprise administrator needs to create a security group in Microsoft Entra ID that can be assigned directory roles (such as Global Reader or User Administrator). The group membership must not be modifiable by non-privileged user administrators.',
    question: 'Which setting must be configured when creating the security group in Microsoft Entra ID?',
    options: [
      { id: 'A', text: 'Set "Microsoft Entra roles can be assigned to the group" to `Yes` at creation time.' },
      { id: 'B', text: 'Create a Dynamic User group.' },
      { id: 'C', text: 'Create an Administrative Unit.' },
      { id: 'D', text: 'Assign an Azure Resource Lock.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'In Microsoft Entra ID, to prevent privilege escalation, only groups created with the setting **"Microsoft Entra roles can be assigned to the group" = Yes** can have directory roles assigned to them. This setting can only be set at group creation time and requires Privileged Role Administrator permissions to modify membership.',
    referenceUrl: 'https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/groups-concept',
    tags: ['Entra ID', 'Role-Assignable Groups', 'Security', 'Identity']
  },
  {
    id: 'az-104-152',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure Cost Management: Exporting Daily Cost Data to Storage Accounts',
    scenario: 'A finance analytics team needs detailed daily Azure cost and usage raw billing data exported automatically as CSV files to an Azure Storage Account for ingestion into Power BI and enterprise data pipelines.',
    question: 'Which Microsoft Cost Management feature automates scheduled recurring raw billing exports?',
    options: [
      { id: 'A', text: 'Cost Management Exports (scheduled daily export to Azure Blob Storage).' },
      { id: 'B', text: 'Azure Advisor cost scorecard.' },
      { id: 'C', text: 'Azure Monitor Log Analytics workspace export.' },
      { id: 'D', text: 'Azure Resource Graph daily query.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Cost Management Exports in Microsoft Cost Management automatically exports detailed, unaggregated cost and usage data (including tags, resource IDs, and amortized costs) to an Azure Storage Account container on a daily, weekly, or monthly schedule, enabling custom reporting and Power BI integration.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-export-acm-data',
    tags: ['Cost Management', 'Cost Exports', 'Power BI', 'FinOps']
  },
  {
    id: 'az-104-153',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure Policy `DeployIfNotExists` (DINE) Policy Definitions',
    scenario: 'A security compliance policy mandates that every newly created Windows Server virtual machine must have the Azure Monitor Agent (AMA) extension and a diagnostic Data Collection Rule association deployed automatically upon creation.',
    question: 'Which Azure Policy effect deploys required child resources or extensions when they are missing from a new deployment?',
    options: [
      { id: 'A', text: '`DeployIfNotExists` effect.' },
      { id: 'B', text: '`Audit` effect.' },
      { id: 'C', text: '`Deny` effect.' },
      { id: 'D', text: '`Disabled` effect.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The `DeployIfNotExists` (DINE) effect in Azure Policy evaluates whether a related child resource or extension (such as the Azure Monitor Agent extension) exists when a parent resource (VM) is created or updated; if it is missing, Azure Policy automatically triggers an ARM template deployment using a managed identity to deploy the missing resource.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-deploy-if-not-exists',
    tags: ['Azure Policy', 'DeployIfNotExists', 'DINE', 'Governance', 'Automation']
  },
  {
    id: 'az-104-154',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Microsoft Entra ID Diagnostic Logs and Audit Logs Streaming',
    scenario: 'A security auditor requires streaming all Microsoft Entra user sign-in events and directory modification audit logs to an external SIEM system via Azure Event Hubs.',
    question: 'Which Microsoft Entra admin center configuration sets up real-time streaming of tenant audit and sign-in logs?',
    options: [
      { id: 'A', text: 'Microsoft Entra ID Diagnostic Settings.' },
      { id: 'B', text: 'Azure Policy assignment.' },
      { id: 'C', text: 'Microsoft Entra Application Proxy.' },
      { id: 'D', text: 'Administrative Units.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Diagnostic Settings in Microsoft Entra ID allow administrators to route tenant audit logs (`AuditLogs`), sign-in logs (`SignInLogs`, `NonInteractiveUserSignInLogs`, `ServicePrincipalSignInLogs`), and provisioning logs to an Azure Log Analytics workspace, an Azure Storage Account, or an Azure Event Hub for SIEM ingestion.',
    referenceUrl: 'https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-integrate-activity-logs-with-log-analytics',
    tags: ['Entra ID', 'Diagnostic Settings', 'Audit Logs', 'SIEM', 'Security']
  },
  {
    id: 'az-104-155',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure RBAC Scope Hierarchy and Least Privilege Access',
    scenario: 'A developer needs Contributor access to a single storage account named `stordev01` located inside resource group `rg-dev` within subscription `sub-core`. The developer must NOT be able to modify any other resource inside `rg-dev`.',
    question: 'At which Azure RBAC scope should the Contributor role be assigned?',
    options: [
      { id: 'A', text: 'At the Resource scope (`stordev01`).' },
      { id: 'B', text: 'At the Resource Group scope (`rg-dev`).' },
      { id: 'C', text: 'At the Subscription scope (`sub-core`).' },
      { id: 'D', text: 'At the Management Group scope.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure RBAC supports role assignments at four distinct scopes: Management Group, Subscription, Resource Group, and individual **Resource**. To adhere to the principle of least privilege, assigning the Contributor role directly at the Resource scope (`stordev01`) grants full permissions on that specific storage account without granting access to other resources in the parent resource group.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview',
    tags: ['Azure RBAC', 'Scope', 'Least Privilege', 'Governance']
  },
  {
    id: 'az-104-156',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Account Custom Domain Name Configuration with HTTPS',
    scenario: 'A company wants users to access files in an Azure Blob Storage container using their corporate domain name `files.contoso.com` instead of `&lt;accountname&gt;.blob.core.windows.net`, with full HTTPS support.',
    question: 'What is the recommended approach to bind a custom domain with HTTPS to Azure Blob Storage?',
    options: [
      { id: 'A', text: 'Create an Azure Front Door or Azure CDN profile mapped to the blob storage origin and configure a custom domain with free managed SSL.' },
      { id: 'B', text: 'Configure a CNAME record in public DNS pointing directly to the storage account without CDN.' },
      { id: 'C', text: 'Deploy an Azure Bastion host.' },
      { id: 'D', text: 'Enable Azure File Sync.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Direct custom domain binding on native Azure Storage accounts only supports HTTP (unencrypted) traffic for custom domains. To enable **HTTPS** for a custom domain (e.g. `files.contoso.com`), Microsoft requires fronting the storage account with Azure Front Door or Azure CDN, which handles SSL termination and automated certificate management.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name',
    tags: ['Blob Storage', 'Custom Domain', 'HTTPS', 'Azure CDN', 'Storage']
  },
  {
    id: 'az-104-157',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Blob Storage Immutability: Legal Hold vs Time-Based Retention',
    scenario: 'A legal investigation requires that all email logs in container `legal-archive` must be protected from deletion immediately for an indeterminate period until pending litigation concludes.',
    question: 'Which Azure Blob Storage feature applies an indefinite, tag-based deletion lock?',
    options: [
      { id: 'A', text: 'Apply a Legal Hold with custom identifier tags on the container.' },
      { id: 'B', text: 'Configure a Time-Based Retention policy of 365 days.' },
      { id: 'C', text: 'Enable Blob Versioning only.' },
      { id: 'D', text: 'Set a CanNotDelete Resource Lock on the subscription.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A Legal Hold in Azure Blob Storage stores WORM data in an immutable (non-erasable, non-modifiable) state for an **indefinite duration**. Users with appropriate permissions add one or more legal hold tags; the data remains strictly protected from deletion until all legal hold tags are explicitly cleared by authorized personnel.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-legal-hold-overview',
    tags: ['Blob Storage', 'Legal Hold', 'Immutable Storage', 'Compliance']
  },
  {
    id: 'az-104-158',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Blob Encryption Scopes for Multi-Tenant Key Isolation',
    scenario: 'A multi-tenant SaaS provider stores data for multiple enterprise customers in a single Azure Storage Account. Compliance requires that Customer A\'s container must be encrypted with Customer A\'s Key Vault key, while Customer B\'s container is encrypted with Customer B\'s key.',
    question: 'Which Azure Storage feature enables managing separate encryption keys at the container or individual blob level?',
    options: [
      { id: 'A', text: 'Azure Storage Encryption Scopes.' },
      { id: 'B', text: 'Storage Account Access Keys.' },
      { id: 'C', text: 'Shared Access Signatures.' },
      { id: 'D', text: 'Azure Resource Locks.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Encryption Scopes in Azure Storage allow managing encryption with different keys (Microsoft-managed or Customer-Managed Keys in Azure Key Vault) at the individual container or blob level within the same storage account, making it ideal for multi-tenant data isolation.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview',
    tags: ['Azure Storage', 'Encryption Scopes', 'Key Vault', 'Security', 'Multi-Tenant']
  },
  {
    id: 'az-104-159',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure File Sync Server Registration and Sync Groups Architecture',
    scenario: 'An administrator is configuring Azure File Sync to synchronize two on-premises Windows file servers with an Azure File Share. What is the correct hierarchy of Azure File Sync components?',
    question: 'How are Azure File Sync entities structured?',
    options: [
      { id: 'A', text: 'Storage Sync Service contains Sync Groups; each Sync Group contains one Cloud Endpoint (Azure File Share) and one or more Server Endpoints (local server paths).' },
      { id: 'B', text: 'Recovery Services Vault contains Server Endpoints directly.' },
      { id: 'C', text: 'Server Endpoints contain Cloud Endpoints.' },
      { id: 'D', text: 'Sync Groups contain Storage Accounts only.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The Azure File Sync hierarchy begins with a **Storage Sync Service** (top-level resource). Inside the Storage Sync Service, you create **Sync Groups**, which define the sync topology. A Sync Group must have exactly one **Cloud Endpoint** (an Azure File share) and can have multiple registered **Server Endpoints** (specific folder paths on registered Windows Servers).',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-deployment-guide',
    tags: ['Azure File Sync', 'Sync Groups', 'Cloud Endpoint', 'Server Endpoint']
  },
  {
    id: 'az-104-160',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Blob Access Tier Pricing: Early Deletion Penalties',
    scenario: 'A company moves 10 TB of temporary log files to the Azure Blob Archive tier. After 20 days, the team deletes the blobs.',
    question: 'What additional cost is incurred for deleting Archive blobs before 180 days?',
    options: [
      { id: 'A', text: 'An Early Deletion fee prorated for the remaining 160 days.' },
      { id: 'B', text: 'Zero fee, deletions are always completely free.' },
      { id: 'C', text: 'A data egress fee equivalent to downloading all files.' },
      { id: 'D', text: 'A penalty equal to converting the account to Premium.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Blob Storage cooler tiers impose minimum storage retention durations: Cool tier (30 days), Cold tier (90 days), and Archive tier (180 days). Deleting or moving blobs out of these tiers before the minimum retention window expires incurs an **Early Deletion fee** prorated for the remaining unfulfilled days.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview#pricing-and-billing',
    tags: ['Blob Storage', 'Early Deletion', 'Archive Tier', 'Cost Optimization']
  },
  {
    id: 'az-104-161',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure Virtual Machine Extensions: Azure Monitor Agent (AMA) vs Network Watcher Agent',
    scenario: 'An administrator needs to automatically collect OS-level performance counters and Windows Event Logs from newly deployed Azure VMs into an Azure Log Analytics workspace.',
    question: 'Which VM extension must be installed on the virtual machines?',
    options: [
      { id: 'A', text: 'Azure Monitor Agent extension (`AzureMonitorWindowsAgent` / `AzureMonitorLinuxAgent`).' },
      { id: 'B', text: 'Network Watcher Agent extension.' },
      { id: 'C', text: 'Custom Script extension.' },
      { id: 'D', text: 'NVIDIA GPU driver extension.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The Azure Monitor Agent (AMA) extension collects guest OS telemetry (event logs, syslog, performance counters) and routes data according to Data Collection Rules (DCRs) into Log Analytics workspaces. Network Watcher Agent (B) is for packet captures. Custom Script (C) is for automation.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-manage',
    tags: ['Virtual Machines', 'VM Extensions', 'Azure Monitor Agent', 'Monitoring']
  },
  {
    id: 'az-104-162',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Virtual Machine Scale Sets (VMSS) Instance Termination Policies and Scale-In Rules',
    scenario: 'An administrator configures an auto-scaling Virtual Machine Scale Set across Availability Zones. When traffic drops and the scale set scales in (removes VM instances), the system must prioritize deleting instances with the oldest VM configuration or newest creation timestamp.',
    question: 'Which VMSS property controls which specific VM instances are selected for termination during scale-in?',
    options: [
      { id: 'A', text: 'Scale-In Policy (e.g. `Default`, `OldestVM`, or `NewestVM`).' },
      { id: 'B', text: 'Fault Domain count.' },
      { id: 'C', text: 'Proximity Placement Group.' },
      { id: 'D', text: 'Azure Resource Lock.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Virtual Machine Scale Sets Scale-In Policies determine which VM instances are deallocated and deleted when a scale-in event occurs. Options include `Default` (balances across AZs/FDs and deletes oldest/newest), `OldestVM` (deletes instances created longest ago), and `NewestVM` (deletes most recently created instances).',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-scale-in-policy',
    tags: ['VMSS', 'Scale-In Policy', 'Auto Scaling', 'Compute']
  },
  {
    id: 'az-104-163',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure App Service Networking: Access Restrictions with Service Tags and IP Filtering',
    scenario: 'A public web app on Azure App Service must allow traffic ONLY from Azure Front Door (using its global service tag `AzureFrontDoor.Backend` and verifying the `X-Azure-FDID` header) while blocking all direct client connections from the public internet.',
    question: 'Which App Service security configuration restricts inbound traffic to Azure Front Door?',
    options: [
      { id: 'A', text: 'App Service Inbound Access Restrictions configured with a Service Tag rule for `AzureFrontDoor.Backend` and HTTP header filtering on `X-Azure-FDID`.' },
      { id: 'B', text: 'Network Security Group attached to the App Service Plan.' },
      { id: 'C', text: 'App Service Hybrid Connections.' },
      { id: 'D', text: 'Azure Route Table on the subnet.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'App Service Access Restrictions provide built-in Layer 7 traffic filtering. Administrators create an Allow rule with Service Tag `AzureFrontDoor.Backend` and configure HTTP Header Filtering to require the unique `X-Azure-FDID` Front Door ID, blocking direct public access while permitting traffic routed through your specific Front Door instance.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/app-service/app-service-ip-restrictions',
    tags: ['App Service', 'Access Restrictions', 'Front Door', 'Security', 'Compute']
  },
  {
    id: 'az-104-164',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure Virtual Machine Backup Snapshot Types: Crash-Consistent vs Application-Consistent',
    scenario: 'An enterprise runs an Oracle database on an Azure Linux VM. The backup team needs to ensure database backups trigger database flush scripts (`VSS` on Windows or pre/post scripts on Linux) so transaction logs are committed cleanly before the snapshot is taken.',
    question: 'Which backup consistency level guarantees that transactional databases can recover cleanly without log replays?',
    options: [
      { id: 'A', text: 'Application-Consistent backup snapshot.' },
      { id: 'B', text: 'Crash-Consistent backup snapshot.' },
      { id: 'C', text: 'File-System Consistent backup snapshot.' },
      { id: 'D', text: 'Differential backup snapshot.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'An **Application-Consistent** backup captures memory contents and pending I/O transactions by leveraging VSS (Volume Shadow Copy Service on Windows) or pre/post freeze/thaw scripts (on Linux) to ensure database transactions are flushed to disk before taking the snapshot, ensuring clean database recovery without corruption.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction#snapshot-consistency',
    tags: ['Azure Backup', 'Application-Consistent', 'Virtual Machines', 'Data Protection']
  },
  {
    id: 'az-104-165',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure App Service Continuous Deployment with GitHub Actions',
    scenario: 'A development team wants code pushed to the `main` branch of a GitHub repository to automatically trigger a build, run unit tests, and deploy the updated application package to an Azure App Service web app.',
    question: 'Which deployment mechanism natively integrates GitHub repositories with Azure App Service deployment center?',
    options: [
      { id: 'A', text: 'App Service Deployment Center configured with GitHub Actions.' },
      { id: 'B', text: 'Azure File Sync.' },
      { id: 'C', text: 'Azure Custom Script Extension.' },
      { id: 'D', text: 'AzCopy command line.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The Deployment Center in Azure App Service provides native CI/CD workflow generation with GitHub Actions (or Azure Pipelines). It automatically commits a build-and-deploy `.github/workflows` YAML workflow file to the repository that triggers on git push to deploy updates automatically.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions',
    tags: ['App Service', 'GitHub Actions', 'CI/CD', 'Deployment']
  },
  {
    id: 'az-104-166',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Virtual Network Peering Requirements: Address Space Non-Overlap',
    scenario: 'An administrator attempts to establish a Virtual Network Peering connection between `VNet-1` (address space `10.0.0.0/16`) and `VNet-2` (address space `10.0.10.0/24`).',
    question: 'Why does Azure Resource Manager reject the peering creation request?',
    options: [
      { id: 'A', text: 'The address spaces of the two virtual networks overlap.' },
      { id: 'B', text: 'VNet Peering requires both VNets to have identical address spaces.' },
      { id: 'C', text: 'VNet Peering requires an ExpressRoute circuit.' },
      { id: 'D', text: 'Both VNets must be in different Azure regions.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Virtual Network Peering strictly requires that the peered virtual networks must NOT have any overlapping IP address ranges. Since `10.0.10.0/24` is a subnet completely contained inside `10.0.0.0/16`, Azure rejects the peering request immediately due to IP address space collision.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview#requirements-and-constraints',
    tags: ['VNet Peering', 'Address Space', 'CIDR Overlap', 'Networking']
  },
  {
    id: 'az-104-167',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Load Balancer Health Probes: TCP vs HTTP/HTTPS Probes',
    scenario: 'An internal web service sits behind an Azure Standard Load Balancer. The application occasionally enters an error state where the TCP port 80 listener is open, but the web app returns HTTP 500 Internal Server Error.',
    question: 'Which load balancer health probe configuration ensures the load balancer stops sending traffic to failing VM instances?',
    options: [
      { id: 'A', text: 'Configure an HTTP (or HTTPS) health probe targeting an application health check path (`/health`) expecting an HTTP 200 response.' },
      { id: 'B', text: 'Configure a basic TCP health probe on port 80.' },
      { id: 'C', text: 'Disable health probes on the load balancer.' },
      { id: 'D', text: 'Deploy an Azure Bastion host.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A TCP health probe only checks whether a three-way TCP handshake completes on the port (which succeeds even when a web server is returning 500 errors). An HTTP/HTTPS health probe checks for a successful HTTP 200 OK status code on a specific path (e.g. `/health`), properly detecting and removing application-level failures from the backend rotation.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview',
    tags: ['Azure Load Balancer', 'Health Probes', 'HTTP Probes', 'Networking']
  },
  {
    id: 'az-104-168',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Application Gateway Rewrite HTTP Headers and URL Rewriting',
    scenario: 'A company operates legacy web backend servers behind an Azure Application Gateway. The backend servers expect incoming requests with path prefix `/v1/api/*`, but public clients send requests to `/api/*`. Additionally, security mandates removing the `Server` response header before returning responses to clients.',
    question: 'Which Azure Application Gateway feature modifies request URLs and response headers on the fly?',
    options: [
      { id: 'A', text: 'Application Gateway HTTP Header and URL Rewrite Rulesets.' },
      { id: 'B', text: 'Web Application Firewall (WAF) custom rules.' },
      { id: 'C', text: 'Network Security Group rule evaluation.' },
      { id: 'D', text: 'Azure Private Link Service.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Application Gateway supports Rewrite HTTP Headers and URLs. It enables adding, removing, or updating HTTP request and response headers (e.g. stripping `Server` or adding `X-Forwarded-For`) as well as rewriting URL paths and query strings dynamically based on pattern conditions.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/application-gateway/rewrite-http-headers-url',
    tags: ['Application Gateway', 'URL Rewrite', 'HTTP Headers', 'Networking']
  },
  {
    id: 'az-104-169',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Network Security Group Service Tags: VirtualNetwork, Internet, AzureLoadBalancer',
    scenario: 'An administrator needs to write an NSG inbound rule that permits traffic originating from any virtual machine in the local virtual network, any peered virtual network, and any connected on-premises network over VPN/ExpressRoute, without hardcoding individual IP ranges.',
    question: 'Which built-in Azure Service Tag represents all virtual network and connected hybrid address spaces?',
    options: [
      { id: 'A', text: '`VirtualNetwork` service tag.' },
      { id: 'B', text: '`Internet` service tag.' },
      { id: 'C', text: '`AzureLoadBalancer` service tag.' },
      { id: 'D', text: '`AzureCloud` service tag.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The `VirtualNetwork` service tag encompasses the local virtual network address space, all connected peered virtual networks, and on-premises address spaces connected via Azure VPN Gateway or ExpressRoute, simplifying security rule definition across hybrid topologies.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview',
    tags: ['NSG', 'Service Tags', 'VirtualNetwork', 'Networking', 'Security']
  },
  {
    id: 'az-104-170',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Route Tables: Disabling BGP Route Propagation on Specific Subnets',
    scenario: 'A company connects its on-premises datacenter to an Azure Virtual Network via ExpressRoute. A secure DMZ subnet in the VNet must NOT receive dynamic on-premises BGP routes, preventing on-premises clients from accessing the DMZ subnet directly.',
    question: 'Which configuration on the custom Route Table associated with the DMZ subnet blocks dynamic BGP routes?',
    options: [
      { id: 'A', text: 'Set "Propagate gateway routes" (Virtual network gateway route propagation) to `No` (Disabled).' },
      { id: 'B', text: 'Attach a CanNotDelete Resource Lock to the subnet.' },
      { id: 'C', text: 'Enable VNet Peering with Gateway Transit.' },
      { id: 'D', text: 'Deploy an Azure Bastion host.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'In Azure Route Tables, setting **"Propagate gateway routes"** to `No` (Disabled) prevents dynamic BGP routes learned from on-premises (via ExpressRoute or VPN Gateways) from being propagated to that specific subnet, ensuring isolated routing for DMZ subnets.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#border-gateway-protocol',
    tags: ['Route Tables', 'BGP Propagation', 'DMZ', 'Networking']
  },
  {
    id: 'az-104-171',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Monitor Log Analytics Workspace Table Plans: Analytics vs Basic Logs',
    scenario: 'An enterprise ingests 1 TB of high-volume debugging logs daily into Azure Log Analytics. The logs are rarely queried, only needed during post-mortem investigations within 30 days, and standard Analytics ingestion costs are too high.',
    question: 'Which Log Analytics table plan reduces log ingestion costs by over 70% for high-volume debug logs?',
    options: [
      { id: 'A', text: 'Basic Logs table plan.' },
      { id: 'B', text: 'Analytics Logs table plan.' },
      { id: 'C', text: 'Azure Storage Archive container export.' },
      { id: 'D', text: 'Azure Event Hubs stream.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The **Basic Logs** plan in Azure Log Analytics is designed for high-volume, low-value debugging and operational logs, offering significantly discounted ingestion pricing (over 70% cheaper than Analytics logs) with a 30-day retention period and basic KQL query capabilities.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/logs/basic-logs-configure',
    tags: ['Log Analytics', 'Basic Logs', 'Cost Optimization', 'Monitoring']
  },
  {
    id: 'az-104-172',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Monitor Action Groups: Webhook and ITSM Integration',
    scenario: 'An operations team uses ServiceNow as its IT Service Management (ITSM) ticketing system. When critical Azure Monitor metric or activity log alerts fire, an incident ticket must automatically be created in ServiceNow.',
    question: 'Which Action Group receiver type integrates Azure Monitor alerts directly with IT service management platforms?',
    options: [
      { id: 'A', text: 'ITSM (or Secure Webhook) receiver in the Action Group.' },
      { id: 'B', text: 'Email notification receiver only.' },
      { id: 'C', text: 'Azure Backup policy.' },
      { id: 'D', text: 'Azure Advisor recommendation.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Action Groups in Azure Monitor support **ITSM connectors** and **Secure Webhooks** to automatically push structured alert payloads to IT Service Management tools (like ServiceNow, Jira, or PagerDuty), automating incident ticket generation and lifecycle tracking.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/itsmc-overview',
    tags: ['Action Groups', 'ITSM', 'ServiceNow', 'Azure Monitor', 'Alerts']
  },
  {
    id: 'az-104-173',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Resource Health Status Categories and Cause Analysis',
    scenario: 'An Azure Virtual Machine experiences unexpected downtime. The administrator checks Azure Resource Health and sees the status "Unavailable (Platform Initiated)".',
    question: 'What does "Platform Initiated" indicate regarding the root cause of the downtime?',
    options: [
      { id: 'A', text: 'The downtime was caused by an underlying Azure physical infrastructure event, hardware fault, or platform maintenance.' },
      { id: 'B', text: 'The VM was stopped by a user inside the Azure portal.' },
      { id: 'C', text: 'The guest OS ran out of disk space.' },
      { id: 'D', text: 'An NSG rule blocked incoming traffic.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'In Azure Resource Health, "Platform Initiated" events indicate that the downtime was triggered by the Azure platform infrastructure (e.g. physical host hardware failure, power glitch, or scheduled platform host update), rather than customer-initiated actions ("User Initiated").',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/service-health/resource-health-checks-resource-types#virtual-machines',
    tags: ['Resource Health', 'Platform Initiated', 'Troubleshooting', 'Monitoring']
  },
  {
    id: 'az-104-174',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Network Watcher VPN Troubleshoot for S2S VPN Diagnostics',
    scenario: 'A Site-to-Site VPN connection between an on-premises Cisco ASA firewall and an Azure Virtual Network Gateway is down. The network administrator needs to diagnose Phase 1 (IKE) and Phase 2 (IPsec) handshake logs and packet counters.',
    question: 'Which Azure Network Watcher tool diagnoses Virtual Network Gateway connections and provides diagnostic summary reports?',
    options: [
      { id: 'A', text: 'VPN Troubleshoot.' },
      { id: 'B', text: 'IP Flow Verify.' },
      { id: 'C', text: 'Next Hop.' },
      { id: 'D', text: 'Security Group View.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The **VPN Troubleshoot** feature in Azure Network Watcher diagnoses Virtual Network Gateways and S2S VPN connections, checking gateway health, IKE/IPsec SA negotiation, and routing status, outputting detailed diagnostic logs to an Azure Storage Account.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-troubleshoot-manage-portal',
    tags: ['Network Watcher', 'VPN Troubleshoot', 'VPN Gateway', 'Troubleshooting']
  },
  {
    id: 'az-104-175',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Application Insights Live Metrics Stream for Real-Time Monitoring',
    scenario: 'A development team is deploying a major software update to an Azure App Service web app. During the deployment window, the team needs to observe incoming requests, CPU/memory consumption, and unhandled exceptions in real time with 1-second latency.',
    question: 'Which Application Insights feature provides real-time 1-second telemetry monitoring during deployments?',
    options: [
      { id: 'A', text: 'Application Insights Live Metrics Stream.' },
      { id: 'B', text: 'Application Insights Availability Web Tests.' },
      { id: 'C', text: 'Azure Log Analytics scheduled queries.' },
      { id: 'D', text: 'Azure Activity Log.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Application Insights Live Metrics Stream provides real-time, 1-second latency monitoring of live web applications. It streams incoming request rates, failure counts, exception traces, and server CPU/RAM telemetry instantaneously, allowing developers to watch live deployments without waiting for log ingestion indexing.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/app/live-stream',
    tags: ['Application Insights', 'Live Metrics', 'Real-Time', 'Monitoring']
  }
];

export default AZURE_AZ104_QUESTIONS_7;
