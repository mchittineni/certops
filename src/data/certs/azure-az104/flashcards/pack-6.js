export const AZURE_AZ104_FLASHCARDS_6 = [
  {
    id: 'az-104-fc-126',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Custom Security Attributes — primary use case',
    hint: 'Schema-defined custom metadata attributes usable in Azure ABAC conditions.',
    back: 'Centrally governed, schema-defined custom key-value pairs assigned to Entra ID users and service principals. Governed by dedicated roles and usable in <strong>Azure RBAC ABAC role assignment conditions</strong>.',
    tags: ['Entra ID', 'Custom Security Attributes', 'ABAC', 'Identity']
  },
  {
    id: 'az-104-fc-127',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Attribute-Based Access Control (Azure ABAC) conditions',
    hint: 'Adding fine-grained condition filters (blob tags/container names) to RBAC assignments.',
    back: 'Extends Azure RBAC by adding condition expressions to role assignments based on resource attributes (e.g. <code>@Resource[Microsoft.Storage/storageAccounts/blobServices/containers/blobs/tags:Project] StringEquals \'Phoenix\'</code>) for granular data-plane security.',
    tags: ['Azure RBAC', 'Azure ABAC', 'Role Conditions', 'Blob Storage']
  },
  {
    id: 'az-104-fc-128',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Resource Graph (ARG) — performance and query language',
    hint: 'High-speed cross-subscription KQL inventory queries executing in milliseconds.',
    back: 'Specialized Azure service for high-performance resource inventory exploration across hundreds of subscriptions and management groups using <strong>Kusto Query Language (KQL)</strong>, returning complex resource states in seconds.',
    tags: ['Resource Graph', 'ARG', 'KQL', 'Governance']
  },
  {
    id: 'az-104-fc-129',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Password Protection — Global vs Custom Banned lists',
    hint: 'Microsoft dynamic list + custom company-specific banned word dictionary.',
    back: 'Blocks weak and common passwords dynamically. Combines a <strong>Global Banned Password List</strong> (maintained by Microsoft) with a <strong>Custom Banned Password List</strong> (customized terms, company names, local landmarks), extending to on-prem via agents.',
    tags: ['Entra ID', 'Password Protection', 'Security', 'Identity']
  },
  {
    id: 'az-104-fc-130',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Verified ID — verifiable digital credentials',
    hint: 'Decentralized identity (DID) credentials stored in mobile digital wallets.',
    back: 'Managed verifiable credentials service based on open decentralized identity standards. Allows organizations to issue cryptographically signed digital proof (employment, certifications) stored in users\' mobile digital wallets.',
    tags: ['Entra ID', 'Verified ID', 'Decentralized Identity', 'Security']
  },
  {
    id: 'az-104-fc-131',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Data Lake Storage Gen2 (ADLS Gen2) — Hierarchical Namespace (HNS)',
    hint: 'Converting Blob storage into true directory structure with POSIX ACLs.',
    back: 'Enabling <strong>Hierarchical Namespace (HNS)</strong> organizes blobs into true directories and folders, enabling atomic directory renames and folder-level POSIX Access Control Lists (ACLs) for big data analytics (Spark/Synapse).',
    tags: ['ADLS Gen2', 'Hierarchical Namespace', 'HNS', 'Storage']
  },
  {
    id: 'az-104-fc-132',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Files Share Soft Delete — retention and undelete',
    hint: 'Deleted file shares retained for 1–365 days and restored via Undelete.',
    back: 'Protects entire file shares from accidental deletion. Deleted file shares enter a soft-deleted state for the retention period (default 7 days, up to 365 days); clicking <strong>Undelete</strong> in the portal restores the share and all its snapshots instantly.',
    tags: ['Azure Files', 'Soft Delete', 'Undelete', 'Data Protection']
  },
  {
    id: 'az-104-fc-133',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Inventory Reports',
    hint: 'Scheduled daily/weekly metadata reports outputting CSV/Parquet to container.',
    back: 'Generates scheduled daily or weekly reports containing comprehensive metadata (size, access tier, last modified, encryption, versioning status, tags) for all blobs in storage accounts, outputting directly to CSV or Parquet files.',
    tags: ['Blob Storage', 'Blob Inventory', 'Audit', 'Storage']
  },
  {
    id: 'az-104-fc-134',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Native SFTP Support in Azure Blob Storage',
    hint: 'Direct SFTP access on port 22 with local users and SSH keys on HNS storage.',
    back: 'Enables native SFTP endpoints directly on Azure Storage Accounts with Hierarchical Namespace enabled. Allows creating <strong>Local Users with SSH public keys or passwords</strong> and configuring container home directories with zero VM servers.',
    tags: ['Blob Storage', 'SFTP', 'Security', 'Storage']
  },
  {
    id: 'az-104-fc-135',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Streaming Storage Transaction Logs via Diagnostic Settings',
    hint: 'Diagnostic settings on Blob/File/Queue/Table sending logs to Log Analytics.',
    back: 'Configuring <strong>Diagnostic Settings</strong> on the storage account sub-services (blob, file, queue, table) streams detailed read, write, and delete transaction logs directly to an Azure Log Analytics workspace or Event Hubs for real-time KQL querying.',
    tags: ['Azure Storage', 'Diagnostic Settings', 'Log Analytics', 'Monitoring']
  },
  {
    id: 'az-104-fc-136',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Ephemeral OS Disks for Azure VMs and Scale Sets',
    hint: 'OS disk hosted on local VM cache storage for zero storage cost and fast reimage.',
    back: 'Created on local host storage (cache or temp disk) rather than remote Azure storage. Provides <strong>faster boot times, lower latency, and instant reimaging with zero storage costs</strong>, ideal for stateless VMSS workloads and batch nodes.',
    tags: ['Virtual Machines', 'Ephemeral OS Disk', 'VMSS', 'Compute']
  },
  {
    id: 'az-104-fc-137',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM Serial Console — out-of-band kernel troubleshooting',
    hint: 'Direct text console to COM1/ttyS0 working independently of network and guest agent.',
    back: 'Provides direct bidirectional text console access to the VM serial port (COM1 / ttyS0) through the Azure portal, operating independently of the guest OS network stack, IP address, or VM guest agent to troubleshoot boot crashes and kernel panics.',
    tags: ['Serial Console', 'Virtual Machines', 'Troubleshooting', 'Compute']
  },
  {
    id: 'az-104-fc-138',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure App Service Hybrid Connections (HCM)',
    hint: 'Reaching on-premises TCP endpoints via outbound port 443 relay without VPN.',
    back: 'Allows App Service web apps to connect to on-premises TCP resources (e.g. SQL Server port 1433) using the <strong>Hybrid Connection Manager (HCM)</strong> agent, which connects outbound over port 443 to Azure Relay, requiring zero inbound perimeter firewall openings.',
    tags: ['App Service', 'Hybrid Connections', 'Azure Relay', 'Compute']
  },
  {
    id: 'az-104-fc-139',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Automatic OS Image Upgrades — zero-downtime rolling updates',
    hint: 'Batch rolling updates of latest publisher images with health probe safety checks.',
    back: 'Automatically rolls out new operating system platform image versions across VM scale set instances in rolling batches. Integrates with <strong>application health probes</strong> to ensure instances are healthy before continuing.',
    tags: ['VMSS', 'Automatic OS Upgrades', 'Patching', 'Compute']
  },
  {
    id: 'az-104-fc-140',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Apps Internal Ingress vs External Ingress',
    hint: 'Limited to Container Apps Environment vs public internet ingress.',
    back: '• <strong>Internal Ingress</strong>: exposes container app only to other container apps within the same Container Apps environment (private microservice communication).<br>• <strong>External Ingress</strong>: exposes container app to public internet traffic.',
    tags: ['Container Apps', 'ACA', 'Ingress', 'Containers', 'Compute']
  },
  {
    id: 'az-104-fc-141',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Effective Security Rules — subnet + NIC NSG aggregation',
    hint: 'Viewing the combined evaluated priority rule set on a specific VM NIC.',
    back: 'Evaluates the combination of Network Security Groups attached at the subnet level and the NIC level, displaying the exact aggregated rule list, evaluated priorities, and final Allow/Deny decisions for all traffic flows.',
    tags: ['NSG', 'Effective Rules', 'Troubleshooting', 'Networking']
  },
  {
    id: 'az-104-fc-142',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway Multi-Site Hosting — Host Header and SNI routing',
    hint: 'Hosting multiple domain names on a single frontend IP via multi-site listeners.',
    back: 'Uses <strong>Multi-site listeners</strong> to host multiple domain names (e.g. <code>contoso.com</code> and <code>fabrikam.com</code>) on a single Application Gateway frontend IP, routing requests to distinct backend pools based on HTTP Host headers and TLS SNI.',
    tags: ['Application Gateway', 'Multi-Site', 'Host Headers', 'Networking']
  },
  {
    id: 'az-104-fc-143',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Virtual WAN (Standard) with Secured Virtual Hubs',
    hint: 'Microsoft-managed global transit network with integrated Azure Firewall.',
    back: 'Provides automated, unified global transit networking, interconnecting VPNs, ExpressRoute, P2S clients, and hundreds of VNets into Microsoft-managed <strong>Secured Virtual Hubs</strong> with built-in Azure Firewall routing and policy management.',
    tags: ['Virtual WAN', 'vWAN', 'Hub and Spoke', 'Global Transit', 'Networking']
  },
  {
    id: 'az-104-fc-144',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Network Watcher Next Hop tool — routing path verification',
    hint: 'Returns Next Hop Type and Route Table ID responsible for routing to target IP.',
    back: 'Quickly diagnoses VM routing problems by taking a source VM NIC and destination IP, immediately returning the <strong>Next Hop Type</strong> (VirtualAppliance, VNetGateway, Internet, None) and the specific <strong>Route Table ID</strong>.',
    tags: ['Network Watcher', 'Next Hop', 'Routing', 'Troubleshooting']
  },
  {
    id: 'az-104-fc-145',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Point-to-Site (P2S) VPN with Microsoft Entra ID Authentication',
    hint: 'OpenVPN protocol with Azure VPN Client desktop app and MFA enforcement.',
    back: 'Uses the <strong>OpenVPN protocol</strong> to authenticate remote teleworkers via Microsoft Entra ID credentials in the Azure VPN Client desktop application, enabling Conditional Access and Multi-Factor Authentication (MFA) enforcement.',
    tags: ['VPN Gateway', 'Point-to-Site', 'OpenVPN', 'Entra ID', 'MFA']
  },
  {
    id: 'az-104-fc-146',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Alert Processing Rules — maintenance notification suppression',
    hint: 'Suppressing alert notifications during scheduled server patching windows.',
    back: 'Evaluates fired alerts and applies rules to <strong>suppress notifications</strong> (email, SMS, runbooks) during scheduled recurring maintenance windows without disabling the underlying metric or log alert rules.',
    tags: ['Azure Monitor', 'Alert Processing Rules', 'Maintenance', 'Alerting']
  },
  {
    id: 'az-104-fc-147',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Immutable Vaults — irreversible WORM compliance',
    hint: 'Irreversible lock preventing backup deletion even by subscription owners.',
    back: 'Prevents any modification, deletion, or retention reduction of backup recovery points. Once locked with <strong>Immutable Vault Lock</strong>, the lock is irreversible, protecting enterprise backups against ransomware and rogue admins.',
    tags: ['Azure Backup', 'Immutable Vault', 'WORM', 'Ransomware', 'Security']
  },
  {
    id: 'az-104-fc-148',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Log Analytics Interactive Retention vs Archive Retention tiers',
    hint: 'Immediate KQL search (up to 730d) vs low-cost long-term archive (up to 12y).',
    back: '• <strong>Interactive Retention</strong>: fast, real-time KQL search queries (configured from 30 to 730 days).<br>• <strong>Total Retention (Archive)</strong>: low-cost cold storage retained for up to 12 years (searchable via asynchronous search jobs).',
    tags: ['Log Analytics', 'Data Retention', 'Archive', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-149',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher Connection Troubleshoot — hop-by-hop testing',
    hint: 'Tests direct TCP/ICMP connections and identifies exact failure points in path.',
    back: 'Performs point-to-point network reachability tests from a VM to a target destination, returning <strong>hop-by-hop network routing paths, latency, and identifying whether NSG, UDR, or OS firewalls blocked traffic</strong>.',
    tags: ['Network Watcher', 'Connection Troubleshoot', 'Troubleshooting', 'Networking']
  },
  {
    id: 'az-104-fc-150',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Application Insights Smart Detection — automated proactive ML anomalies',
    hint: 'Proactive ML algorithms detecting failure rate spikes and performance degradation.',
    back: 'Uses built-in machine learning algorithms to proactively analyze web application telemetry out-of-the-box, automatically alerting on <strong>abnormal failure rate increases, slow page response times, and memory leaks</strong> without user rules.',
    tags: ['Application Insights', 'Smart Detection', 'Anomaly Detection', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_6;
