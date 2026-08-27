export const AZURE_AZ104_FLASHCARDS_5 = [
  {
    id: 'az-104-fc-101',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Managed Identities: System-Assigned vs User-Assigned lifecycle',
    hint: 'Tied to 1 resource lifecycle vs standalone identity shareable across multiple resources.',
    back: '• <strong>System-Assigned</strong>: enabled directly on resource; shares resource lifecycle (deleted when resource is deleted); 1:1 relationship.<br>• <strong>User-Assigned</strong>: standalone Azure resource; can be assigned to multiple resources; independent lifecycle.',
    tags: ['Managed Identity', 'Entra ID', 'Security', 'Authentication']
  },
  {
    id: 'az-104-fc-102',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Cost Allocation Rules — distributing shared infrastructure costs',
    hint: 'Splitting central hub network and firewall costs across business unit subscriptions.',
    back: 'Allows automatically splitting and reallocating shared cloud infrastructure costs (e.g. centralized hub networks, ExpressRoute gateways, firewalls) across target subscriptions, resource groups, or departments based on fixed percentages or proportional use.',
    tags: ['Cost Management', 'Cost Allocation', 'FinOps', 'Governance']
  },
  {
    id: 'az-104-fc-103',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy Logical Operators: `allOf`, `anyOf`, and `not`',
    hint: 'Combining multiple field conditions for granular compliance evaluation.',
    back: '• <code>allOf</code>: all child conditions must evaluate to true (logical AND).<br>• <code>anyOf</code>: at least one child condition must be true (logical OR).<br>• <code>not</code>: inverts the condition result (logical NOT).',
    tags: ['Azure Policy', 'Policy Definition', 'Logical Operators', 'Governance']
  },
  {
    id: 'az-104-fc-104',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Company Branding capabilities',
    hint: 'Customizing tenant sign-in logo, background image, and sign-in page text.',
    back: 'Customizes the visual branding of the organizational Microsoft Entra sign-in experience, including company logo, square logo, background illustration, sign-in page text, and privacy footer links.',
    tags: ['Entra ID', 'Company Branding', 'Identity', 'Governance']
  },
  {
    id: 'az-104-fc-105',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Impact of transferring an Azure Subscription to a new Entra Tenant',
    hint: 'All RBAC role assignments and system-assigned managed identities are wiped.',
    back: 'Resources remain intact, but <strong>all existing Azure RBAC role assignments, user access rights, and system-assigned managed identities are permanently removed</strong> because security principals do not cross tenant boundaries.',
    tags: ['Subscription Transfer', 'Entra ID', 'RBAC', 'Governance']
  },
  {
    id: 'az-104-fc-106',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Zero-Downtime Storage Account Key Rotation workflow',
    hint: 'Switch apps to key2 -> regenerate key1 -> switch apps to key1 -> regenerate key2.',
    back: '1. Update application connection strings to use <code>key2</code>.<br>2. Regenerate <code>key1</code> in the Azure portal/CLI.<br>3. Update applications to use the new <code>key1</code>.<br>4. Regenerate <code>key2</code>.',
    tags: ['Azure Storage', 'Key Rotation', 'Access Keys', 'Security']
  },
  {
    id: 'az-104-fc-107',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Why Azure Files Backup restores are near-instantaneous',
    hint: 'Restores directly from local file share snapshots without network data transfer.',
    back: 'Azure Backup for Azure Files leverages native in-account <strong>Azure File Share Snapshots</strong>. Because snapshots reside directly on the storage cluster, restores operate instantly via local metadata pointers without copying data across the network.',
    tags: ['Azure Files', 'Azure Backup', 'Snapshots', 'Data Recovery']
  },
  {
    id: 'az-104-fc-108',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Mover — fully managed hybrid data migration',
    hint: 'Central cloud orchestration of agent-based migrations from on-premises NFS/SMB to Azure.',
    back: 'Managed cloud migration service for moving files/folders from on-premises NFS/SMB storage systems to Azure Blob and Azure Files using lightweight agent VMs, with automated recurring delta syncing and centralized job management.',
    tags: ['Storage Mover', 'Data Migration', 'NFS', 'Storage']
  },
  {
    id: 'az-104-fc-109',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Index Tags — SQL-like filtering queries',
    hint: 'Categorizing blobs with key-value tags and querying via FindBlobsByTags.',
    back: 'Assigns key-value tag attributes to blob objects. Azure automatically indexes tags, allowing applications to search and filter blobs using SQL-like expressions (e.g. <code>"Project" = \'Alpha\' AND "Status" = \'Approved\'</code>) without container scanning.',
    tags: ['Blob Storage', 'Blob Index Tags', 'Metadata', 'Search']
  },
  {
    id: 'az-104-fc-110',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Blob Rehydration Priority: Standard vs High Priority latency',
    hint: 'Standard takes up to 15 hours; High priority takes under 1 hour for <10 GB.',
    back: '• <strong>High Priority</strong>: retrieves blobs from Archive tier in under 1 hour (for blobs <10 GB) with priority queue processing.<br>• <strong>Standard Priority</strong>: default rehydration queue, taking up to 15 hours at lower cost.',
    tags: ['Blob Storage', 'Rehydration', 'Archive Tier', 'Storage']
  },
  {
    id: 'az-104-fc-111',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Initializing newly attached Managed Data Disks in Guest OS',
    hint: 'Online -> Initialize (GPT) -> New Simple Volume -> Format (NTFS/ext4).',
    back: 'Attaching in Azure portal provides raw block storage. Inside the VM guest OS (Disk Management / CLI), the administrator must: <strong>Bring Online → Initialize Disk (GPT) → Create Volume → Format Filesystem (NTFS/ext4)</strong>.',
    tags: ['Virtual Machines', 'Managed Disks', 'Disk Management', 'Compute']
  },
  {
    id: 'az-104-fc-112',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Spot VMs — Eviction Policy options (Deallocate vs Delete)',
    hint: 'Up to 90% savings for interruptible workloads with 30s notice.',
    back: '• <strong>Deallocate</strong>: VM is stopped and deallocated on eviction; disk/IP preserved (incurs disk storage charges); can be restarted later.<br>• <strong>Delete</strong>: VM and underlying disks are deleted on eviction (zero ongoing cost).',
    tags: ['Spot VMs', 'Eviction Policy', 'Cost Optimization', 'Compute']
  },
  {
    id: 'az-104-fc-113',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM Run Command — executing scripts via VM Agent',
    hint: 'Control-plane script execution working even when guest firewalls block all ports.',
    back: 'Executes PowerShell (Windows) or Bash (Linux) scripts inside VMs via the Azure VM Agent through the Azure management control plane, operating even when guest OS firewalls block SSH/RDP ports or network interfaces are down.',
    tags: ['Virtual Machines', 'Run Command', 'Troubleshooting', 'Automation']
  },
  {
    id: 'az-104-fc-114',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Auto-Heal Rules — automated remediation actions',
    hint: 'Recycle process, log event, or run custom executable on memory/slow request triggers.',
    back: 'Configured under App Service Diagnose and Solve Problems. Triggers on metrics (Memory limit, Request count, Slow requests, HTTP 5xx codes) and executes automated actions: <strong>Recycle Process, Log Event, or Run Executable</strong>.',
    tags: ['App Service', 'Auto-Heal', 'Diagnostics', 'Compute']
  },
  {
    id: 'az-104-fc-115',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Registry (ACR) Premium SKU — Geo-Replication',
    hint: 'Global replication of container images under a single registry name.',
    back: 'ACR Premium SKU provides <strong>Geo-Replication</strong>, synchronizing container images, OCI artifacts, and Helm charts across multiple Azure regions under a single registry URL for fast regional cluster pulls and disaster recovery.',
    tags: ['ACR', 'Container Registry', 'Geo-Replication', 'Containers']
  },
  {
    id: 'az-104-fc-116',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Virtual Network Service Endpoints — private backbone routing',
    hint: 'Routing PaaS traffic directly over Azure backbone without public internet traversal.',
    back: 'Secures Azure PaaS services (Storage, SQL, Key Vault) to virtual network subnets. Traffic travels directly across the optimized <strong>Microsoft Azure private global backbone</strong> without traversing the public internet.',
    tags: ['Service Endpoints', 'Networking', 'Security']
  },
  {
    id: 'az-104-fc-117',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway WAF Modes: Detection vs Prevention',
    hint: 'Logging threats without blocking vs actively blocking matched attacks with 403.',
    back: '• <strong>Detection Mode</strong>: evaluates rules and logs security alerts to diagnostic logs without blocking requests (ideal for testing).<br>• <strong>Prevention Mode</strong>: actively blocks matched malicious requests with HTTP 403 Forbidden.',
    tags: ['Application Gateway', 'WAF', 'Detection Mode', 'Security', 'Networking']
  },
  {
    id: 'az-104-fc-118',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Standard Load Balancer Outbound Rules — explicit egress SNAT',
    hint: 'Dedicated public IP allocation and SNAT port control for backend pools.',
    back: 'Enables explicit, declarative configuration of outbound SNAT for backend pool VMs. Allows assigning dedicated public frontend IPs, configuring custom idle timeouts, and setting allocated SNAT ports per instance.',
    tags: ['Load Balancer', 'Outbound Rules', 'SNAT', 'Networking']
  },
  {
    id: 'az-104-fc-119',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure DNS Private Resolver — Inbound vs Outbound Endpoints',
    hint: 'Inbound resolves Azure Private DNS from on-prem; Outbound resolves on-prem DNS from Azure.',
    back: '• <strong>Inbound Endpoint</strong>: provides private IP on VNet allowing on-premises DNS to query Azure Private DNS zones.<br>• <strong>Outbound Endpoint</strong>: with Forwarding Rulesets, forwards Azure VNet DNS queries to on-premises DNS servers.',
    tags: ['DNS Private Resolver', 'Hybrid DNS', 'Private DNS', 'Networking']
  },
  {
    id: 'az-104-fc-120',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Bastion Standard SKU — Native Client Support',
    hint: 'RDP/SSH via native desktop clients (mstsc, SSH) and Azure CLI.',
    back: 'Standard SKU unlocks <strong>Native Client Support</strong>, allowing administrators to establish secure RDP/SSH sessions using native desktop tools (<code>mstsc.exe</code>, native OpenSSH) via the Azure CLI (<code>az network bastion</code>) rather than a browser window.',
    tags: ['Azure Bastion', 'Standard SKU', 'Native Client', 'Security']
  },
  {
    id: 'az-104-fc-121',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Detecting Inactive VMs with KQL Heartbeat Queries',
    hint: 'Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(10m).',
    back: '<code>Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall &lt; ago(10m)</code> groups heartbeats by Computer and identifies any VM whose latest heartbeat is older than 10 minutes, detecting VM outages.',
    tags: ['KQL', 'Log Analytics', 'Azure Monitor', 'Heartbeat']
  },
  {
    id: 'az-104-fc-122',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Enhanced Policy vs Standard Policy capabilities',
    hint: 'Multiple backups per day, 30-day instant retention, Ultra Disks support.',
    back: '<strong>Enhanced Policy</strong>: supports multiple backups per day (hourly), instant snapshot retention up to 30 days, Trusted Launch VMs, and Premium SSD v2 / Ultra Disks. Standard Policy is limited to 1 backup/day and 5-day instant retention.',
    tags: ['Azure Backup', 'Enhanced Policy', 'Virtual Machines', 'Data Protection']
  },
  {
    id: 'az-104-fc-123',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Workbooks — interactive visual canvas',
    hint: 'Combining live metrics, KQL tables, and text documentation in one report.',
    back: 'Interactive, shareable visualization canvas in the Azure portal that combines multiple telemetry sources (Azure Monitor Metrics, Log Analytics KQL queries, Azure Resource Graph, Alerts) into unified dynamic dashboards and reports.',
    tags: ['Azure Monitor', 'Workbooks', 'Dashboards', 'Reporting']
  },
  {
    id: 'az-104-fc-124',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Site Recovery (ASR) Test Failover — non-disruptive DR drills',
    hint: 'Spinning up test VMs in isolated VNet without impacting ongoing replication.',
    back: 'Launches temporary test virtual machines in an isolated non-production virtual network in the target disaster recovery region to validate disaster recovery procedures <strong>with zero impact on ongoing replication or production uptime</strong>.',
    tags: ['Azure Site Recovery', 'ASR', 'Test Failover', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-125',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Boot Diagnostics — troubleshooting failed VM boots',
    hint: 'Serial console logs and real-time OS screenshot previews.',
    back: 'Captures serial console log text and real-time bitmap screenshot previews of the guest OS console during VM startup, enabling administrators to diagnose BSODs, kernel panics, and boot disk errors without network access.',
    tags: ['Boot Diagnostics', 'Virtual Machines', 'Troubleshooting', 'Compute']
  }
];

export default AZURE_AZ104_FLASHCARDS_5;
