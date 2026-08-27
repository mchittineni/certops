export const AZURE_AZ104_FLASHCARDS_3 = [
  {
    id: 'az-104-fc-51',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Conditional Access — core signals and controls',
    hint: 'Signals (User, Location, Device, App) -> Decision -> Controls (Require MFA, Block).',
    back: 'Evaluates real-time signals: <strong>User/Group, Named Locations (IPs), Device Platform/Compliance, Cloud Apps, and Sign-in Risk</strong> to enforce access decisions: <strong>Grant (Require MFA/compliant device)</strong> or <strong>Block Access</strong>.',
    tags: ['Entra ID', 'Conditional Access', 'MFA', 'Security', 'Identity']
  },
  {
    id: 'az-104-fc-52',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'User Access Administrator vs Owner RBAC roles',
    hint: 'Managing role assignments only vs managing resources and role assignments.',
    back: '• <strong>User Access Administrator</strong>: manages user access (RBAC assignments) to Azure resources; cannot deploy or delete resources.<br>• <strong>Owner</strong>: full access to manage all resources AND grant access to others.',
    tags: ['Azure RBAC', 'User Access Administrator', 'Owner', 'Governance']
  },
  {
    id: 'az-104-fc-53',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy Exemptions — Waiver vs Mitigated categories',
    hint: 'Waiving compliance on specific scopes with expiration dates.',
    back: 'Exempts a specific scope (MG, subscription, RG, or resource) from an active policy assignment. Categories: <strong>Waiver</strong> (temporary approval to not comply) or <strong>Mitigated</strong> (management by other controls). Supports expiration dates.',
    tags: ['Azure Policy', 'Policy Exemption', 'Governance', 'Compliance']
  },
  {
    id: 'az-104-fc-54',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra B2B Guest Collaboration — authentication model',
    hint: 'External users authenticate with their home organization credentials.',
    back: 'Invites external partners/contractors as <strong>Guest Users</strong>. Authentication is performed by the guest\'s home identity provider (their Entra ID, Microsoft account, or Google), requiring zero password management in your tenant.',
    tags: ['Entra ID', 'B2B', 'Guest Users', 'Identity']
  },
  {
    id: 'az-104-fc-55',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy `Deny` Effect — when is it evaluated?',
    hint: 'Evaluated before resource creation to immediately block non-compliant requests.',
    back: 'Evaluates requests during Azure Resource Manager API calls <em>before</em> the resource provider creates or modifies the resource. If policy conditions fail, ARM terminates and rejects the request immediately.',
    tags: ['Azure Policy', 'Deny Effect', 'Governance', 'ARM']
  },
  {
    id: 'az-104-fc-56',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'General-Purpose v2 Storage Account — supported services and tiers',
    hint: 'Blobs, Files, Queues, Tables with Hot, Cool, Cold, and Archive tiers.',
    back: 'Default, recommended storage account kind on Azure. Supports all four storage services (<strong>Blob, File, Queue, Table</strong>), all access tiers (<strong>Hot, Cool, Cold, Archive</strong>), and all redundancy models (LRS, ZRS, GRS, GZRS).',
    tags: ['Azure Storage', 'General-Purpose v2', 'Storage Tiers']
  },
  {
    id: 'az-104-fc-57',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Files: NFS v4.1 vs SMB 3.0 protocol support',
    hint: 'NFS requires Premium file storage for POSIX Linux; SMB works on Standard/Premium.',
    back: '• <strong>NFS v4.1</strong>: supported exclusively on <em>Premium</em> FileStorage accounts; provides native POSIX permissions and symlinks for Linux.<br>• <strong>SMB 3.0</strong>: supported on Standard and Premium accounts for Windows, macOS, and Linux.',
    tags: ['Azure Files', 'NFS', 'SMB', 'POSIX', 'Storage']
  },
  {
    id: 'az-104-fc-58',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Customer-Managed Keys (CMK) for Storage with Managed Identity',
    hint: 'Managed identity on Storage Account granted Key Vault crypto permissions.',
    back: 'Enable a System-assigned or User-assigned <strong>Managed Identity</strong> on the Storage Account. Grant the identity <code>Key Vault Crypto Service Encryption User</code> permissions on the Azure Key Vault to allow key wrapping/unwrapping.',
    tags: ['Azure Storage', 'CMK', 'Key Vault', 'Managed Identity', 'Security']
  },
  {
    id: 'az-104-fc-59',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Soft Delete — `Undelete` operation',
    hint: 'Restoring soft-deleted blobs within retention window without data loss.',
    back: 'When Blob Soft Delete is active, deleted blobs remain in a soft-deleted state for the retention period (1–365 days). Calling the <strong>Undelete</strong> API/button restores the blob and all its versions back to active status.',
    tags: ['Blob Storage', 'Soft Delete', 'Undelete', 'Data Protection']
  },
  {
    id: 'az-104-fc-60',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Data Box (100 TB Appliance) — offline physical transfer',
    hint: 'Ruggedized hardware appliance shipped by courier for large data sets (>40 TB).',
    back: 'Hardware storage appliance shipped by Microsoft to your datacenter. Provides <strong>100 TB raw capacity (80 TB usable)</strong> with AES-256 hardware encryption. Ideal for migrating >40 TB when network transfer would take weeks/months.',
    tags: ['Data Box', 'Data Migration', 'Offline Transfer', 'Storage']
  },
  {
    id: 'az-104-fc-61',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Managed Disk Server-Side Encryption (SSE) default behavior',
    hint: '256-bit AES platform-managed encryption enabled by default at storage layer.',
    back: 'Enabled <strong>by default on all Azure managed OS and data disks</strong> at zero extra cost. Encrypts data at rest using 256-bit AES encryption with platform-managed keys (PMK) with zero guest OS configuration required.',
    tags: ['Virtual Machines', 'Managed Disks', 'SSE', 'Encryption']
  },
  {
    id: 'az-104-fc-62',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Operational impact of resizing a running Azure Virtual Machine',
    hint: 'Reboots the VM, causing temporary downtime if hardware reallocation is needed.',
    back: 'Resizing an active running VM causes the VM to <strong>automatically restart and incur temporary downtime</strong>. If the target size is available on the current physical host cluster, it restarts quickly; otherwise, it deallocates and migrates.',
    tags: ['Virtual Machines', 'Resizing', 'Vertical Scaling', 'Compute']
  },
  {
    id: 'az-104-fc-63',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Bicep / ARM Template Idempotency in Incremental Mode',
    hint: 'Re-running identical deployments leaves existing matching resources unchanged.',
    back: 'ARM deployments in <strong>Incremental mode</strong> (default) are idempotent. If declared resources already exist with matching configurations, ARM leaves them untouched, preventing accidental recreation, state drift, or duplicate resources.',
    tags: ['Bicep', 'ARM Templates', 'Idempotency', 'IaC']
  },
  {
    id: 'az-104-fc-64',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Plan Scaling: Scale Up vs Scale Out',
    hint: 'Scale Up changes tier/CPU/RAM; Scale Out increases number of instances.',
    back: '• <strong>Scale Up</strong>: changing to a higher pricing tier (e.g. Basic to Standard/Premium) to gain more CPU, RAM, and features (autoscale, slots, backups).<br>• <strong>Scale Out</strong>: increasing the number of running VM instances (1 to 30).',
    tags: ['App Service', 'Scale Up', 'Scale Out', 'Compute']
  },
  {
    id: 'az-104-fc-65',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Functions Consumption Plan — pricing and scaling model',
    hint: 'Scale to zero, billing strictly for execution time and memory used.',
    back: 'True serverless hosting plan. Dynamically scales compute instances based on incoming trigger events. <strong>Scales to zero when idle ($0 cost)</strong> and bills strictly for execution duration (GB-s) and number of executions.',
    tags: ['Azure Functions', 'Consumption Plan', 'Serverless', 'Compute']
  },
  {
    id: 'az-104-fc-66',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Subnet Reserved IP Addresses — 5 reserved addresses',
    hint: 'First 4 IPs (.0, .1, .2, .3) and last IP (.255).',
    back: 'Azure reserves <strong>5 IP addresses</strong> in every subnet:<br>• <code>.0</code>: Network address<br>• <code>.1</code>: Default Gateway<br>• <code>.2</code> & <code>.3</code>: Azure DNS mapping<br>• <code>.255</code>: Network broadcast',
    tags: ['VNet', 'Subnets', 'IP Addressing', 'Networking']
  },
  {
    id: 'az-104-fc-67',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Global Virtual Network Peering — routing path and latency',
    hint: 'Direct private connectivity across regions via Microsoft global backbone.',
    back: 'Interconnects VNets located in different Azure regions across the globe. Traffic travels entirely over <strong>Microsoft\'s private global fiber network backbone</strong> with private IP addressing and zero public internet exposure.',
    tags: ['Global VNet Peering', 'VNet Peering', 'Networking', 'Multi-Region']
  },
  {
    id: 'az-104-fc-68',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure NAT Gateway — SNAT port exhaustion prevention',
    hint: 'Dedicated outbound-only translation scaling up to 64,000 flows per IP.',
    back: 'Associates with subnets to provide highly available, outbound-only internet connectivity. Eliminates SNAT port exhaustion with dynamic SNAT port allocation (64,000 flows/IP) and completely blocks unsolicited inbound traffic.',
    tags: ['NAT Gateway', 'SNAT', 'Outbound Connectivity', 'Networking']
  },
  {
    id: 'az-104-fc-69',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Standard Public IP SKU — allocation method and features',
    hint: 'Static allocation only, supports Availability Zones, required for Standard LB.',
    back: 'Standard Public IP addresses are always <strong>Static</strong> (cannot be dynamic), support Availability Zones (zonal or zone-redundant), secure by default (requires NSG), and are mandatory for Azure Standard Load Balancer frontends.',
    tags: ['Public IP', 'Standard SKU', 'Networking']
  },
  {
    id: 'az-104-fc-70',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure ExpressRoute vs Site-to-Site VPN — key architectural difference',
    hint: 'Dedicated private fiber connection vs encrypted IPsec tunnel over public internet.',
    back: '• <strong>ExpressRoute</strong>: dedicated private physical connection via connectivity partner; never traverses public internet; up to 100 Gbps.<br>• <strong>Site-to-Site VPN</strong>: encrypted IPsec tunnel routed over the public internet.',
    tags: ['ExpressRoute', 'VPN', 'Hybrid', 'Networking']
  },
  {
    id: 'az-104-fc-71',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Agent (AMA) and Data Collection Rules (DCR)',
    hint: 'Unified logging agent with localized event filtering before cloud ingestion.',
    back: 'The <strong>Azure Monitor Agent (AMA)</strong> uses <strong>Data Collection Rules (DCRs)</strong> to define centrally what data to collect, allowing local event filtering (e.g. filtering specific event IDs) before ingesting to Log Analytics to save costs.',
    tags: ['Azure Monitor Agent', 'AMA', 'DCR', 'Log Analytics', 'Monitoring']
  },
  {
    id: 'az-104-fc-72',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'NSG Flow Logs with Traffic Analytics — visualization capabilities',
    hint: 'Processing NSG flow metadata with threat intelligence into Log Analytics.',
    back: 'Captures IP flow data from NSGs. <strong>Traffic Analytics</strong> enriches flow data with IP geolocation and Microsoft threat intelligence, sending processed logs to Log Analytics for interactive dashboards of traffic, top talkers, and open ports.',
    tags: ['NSG Flow Logs', 'Traffic Analytics', 'Network Watcher', 'Monitoring']
  },
  {
    id: 'az-104-fc-73',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Advisor — five recommendation categories',
    hint: 'Cost, Security, Reliability, Operational Excellence, and Performance.',
    back: 'Personalized cloud consultant that analyzes Azure telemetry to provide actionable best practices across 5 pillars:<br>1. <strong>Cost</strong><br>2. <strong>Security</strong><br>3. <strong>Reliability</strong><br>4. <strong>Operational Excellence</strong><br>5. <strong>Performance</strong>',
    tags: ['Azure Advisor', 'Well-Architected', 'FinOps', 'Best Practices']
  },
  {
    id: 'az-104-fc-74',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup for Azure Files — architecture and snapshot mechanism',
    hint: 'Agentless snapshot management orchestrated by Recovery Services Vault.',
    back: 'Native, agentless backup solution. A backup policy configured in a Recovery Services Vault takes and manages scheduled <strong>Azure File Share snapshots</strong> with automated retention schedules, supporting instant point-in-time file recovery.',
    tags: ['Azure Backup', 'Azure Files', 'Snapshots', 'Data Protection']
  },
  {
    id: 'az-104-fc-75',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Service Health — three core event categories',
    hint: 'Service Issues, Planned Maintenance, and Health Advisories.',
    back: 'Provides personalized visibility into Azure platform health:<br>• <strong>Service Issues</strong>: active service outages in your regions.<br>• <strong>Planned Maintenance</strong>: scheduled hardware/software updates.<br>• <strong>Health Advisories</strong>: feature deprecations/quota changes.',
    tags: ['Service Health', 'Azure Monitor', 'Alerts', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_3;
