export const AZURE_AZ104_FLASHCARDS_9 = [
  {
    id: 'az-104-fc-201',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Domain Services (Entra DS) — managed Kerberos/LDAP',
    hint: 'Managed domain join, LDAP, and GPOs without deploying domain controller VMs.',
    back: 'Provides fully managed Windows Server Active Directory compatible domain services (<strong>domain join, GPO, LDAP, Kerberos/NTLM authentication</strong>) in Azure VNets with zero domain controller VM management.',
    tags: ['Entra ID', 'Entra Domain Services', 'LDAP', 'Kerberos', 'Identity']
  },
  {
    id: 'az-104-fc-202',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Cost Management Anomaly Detection Alerts',
    hint: 'ML-based alerts triggered upon unexpected spending spikes in subscriptions.',
    back: 'Identifies unexpected surges in daily cloud usage patterns using machine learning algorithms, automatically emailing administrators with details on which resource or service caused the spending anomaly.',
    tags: ['Cost Management', 'Anomaly Detection', 'FinOps', 'Governance']
  },
  {
    id: 'az-104-fc-203',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy `Modify` Effect — automated tag injection',
    hint: 'Dynamically adds/updates resource tags during creation without blocking deployment.',
    back: 'Adds, updates, or removes properties/tags on resources during ARM creation or update operations (e.g. automatically inheriting <code>CostCenter</code> tags from parent resource groups) using <code>addOrReplace</code> operations.',
    tags: ['Azure Policy', 'Modify Effect', 'Tagging', 'Governance']
  },
  {
    id: 'az-104-fc-204',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Application Proxy — secure on-prem web publishing',
    hint: 'Reverse proxy for on-premises web apps via outbound port 443 with Entra MFA.',
    back: 'Enables remote access to on-premises web applications. An on-premises connector agent opens an outbound HTTPS connection to Entra ID, publishing apps securely with Entra single sign-on and MFA without VPNs or inbound firewall ports.',
    tags: ['Entra ID', 'Application Proxy', 'Remote Access', 'Security']
  },
  {
    id: 'az-104-fc-205',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Lighthouse — cross-tenant delegated management for MSPs',
    hint: 'Managing customer subscriptions from MSP tenant without guest account sprawl.',
    back: 'Enables Managed Service Providers (MSPs) to project customer subscriptions/resource groups into their own tenant, allowing engineers to manage resources and run templates directly using their own corporate identities.',
    tags: ['Azure Lighthouse', 'Multi-Tenant', 'Delegated Management', 'Governance']
  },
  {
    id: 'az-104-fc-206',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Snapshots — incremental delta block billing',
    hint: 'Read-only point-in-time copies charging only for modified delta blocks.',
    back: 'A blob snapshot is a read-only point-in-time copy. When the base blob is updated, Azure Storage tracks block changes incrementally, charging only for unique delta blocks modified after snapshot creation.',
    tags: ['Blob Storage', 'Snapshots', 'Data Protection', 'Storage']
  },
  {
    id: 'az-104-fc-207',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Disabling Public Network Access on Azure Storage Accounts',
    hint: 'Completely blocks internet traffic and restricts access exclusively to Private Endpoints.',
    back: 'Setting <strong>"Public network access" = Disabled</strong> rejects all incoming connections arriving from public internet IP addresses, enforcing strict Zero Trust by routing all data traffic exclusively through Azure Private Endpoints.',
    tags: ['Azure Storage', 'Private Endpoints', 'Security', 'Zero Trust']
  },
  {
    id: 'az-104-fc-208',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Files Large File Shares — 100 TiB capacity expansion',
    hint: 'Expands standard file share limit from 5 TiB to 100 TiB (disables GRS conversion).',
    back: 'Increases standard storage account file share capacity from 5 TiB to <strong>100 TiB</strong>, boosting IOPS (up to 20,000) and throughput (300 MB/s). Cannot be converted to GRS/GZRS after enabling.',
    tags: ['Azure Files', 'Large File Shares', 'Capacity', 'Storage']
  },
  {
    id: 'az-104-fc-209',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'User Delegation SAS vs Account SAS — key security difference',
    hint: 'Signed with Microsoft Entra ID credentials rather than master storage keys.',
    back: 'A <strong>User Delegation SAS</strong> is signed using Microsoft Entra ID credentials (via user delegation keys) rather than storage account master keys, enabling granular RBAC logging and eliminating key exposure.',
    tags: ['Azure Storage', 'User Delegation SAS', 'Entra ID', 'Security']
  },
  {
    id: 'az-104-fc-210',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Change Feed — ordered transactional logs',
    hint: 'Immutable Apache Avro logs of all blob creation/edit/delete events.',
    back: 'Provides an immutable, ordered, read-only transaction log of all blob creation, modification, and deletion events in an Azure Storage Account, written in Apache Avro format to <code>$blobchangefeed</code> for asynchronous processing.',
    tags: ['Blob Storage', 'Change Feed', 'Audit', 'Storage']
  },
  {
    id: 'az-104-fc-211',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Ultra Disks — extreme IOPS and throughput scaling',
    hint: 'Up to 160,000 IOPS and 4,000 MB/s with dynamically adjustable performance.',
    back: 'Delivers sub-millisecond latency, up to 160,000 IOPS, and 4,000 MB/s throughput. Allows administrators to <strong>dynamically tune IOPS and throughput on the fly without restarting the VM</strong>.',
    tags: ['Virtual Machines', 'Ultra Disk', 'Managed Disks', 'Performance', 'Compute']
  },
  {
    id: 'az-104-fc-212',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Custom Images referencing Azure Compute Gallery version `latest`',
    hint: 'Automatically deploys new scale-out instances using highest image version number.',
    back: 'Configuring a VM Scale Set image reference to point to an Azure Compute Gallery definition with version set to <code>latest</code> ensures all future scale-out instances deploy with the newest golden OS image version automatically.',
    tags: ['VMSS', 'Compute Gallery', 'Custom Images', 'Automation']
  },
  {
    id: 'az-104-fc-213',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service pulling private ACR container images via Managed Identity',
    hint: 'System-assigned managed identity on web app assigned AcrPull role on ACR.',
    back: 'Eliminates ACR admin password storage: enable a <strong>System-assigned Managed Identity</strong> on the App Service web app and grant it the <strong>AcrPull</strong> RBAC role directly on the Azure Container Registry.',
    tags: ['App Service', 'ACR', 'AcrPull', 'Managed Identity', 'Containers']
  },
  {
    id: 'az-104-fc-214',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM IP Forwarding for Network Virtual Appliances (NVAs)',
    hint: 'Must enable EnableIPForwarding on NIC for firewall VMs routing external traffic.',
    back: 'By default, Azure drops traffic not destined for the NIC\'s assigned IP. Enabling <strong>IP Forwarding (<code>EnableIPForwarding: true</code>)</strong> on the VM NIC allows Network Virtual Appliances (firewalls/routers) to route foreign packets.',
    tags: ['Virtual Machines', 'IP Forwarding', 'NVA', 'Networking']
  },
  {
    id: 'az-104-fc-215',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Apps Key Vault References integration',
    hint: 'Injecting secrets directly into container environment variables via Managed Identity.',
    back: 'Allows Container Apps to reference Azure Key Vault secret URIs directly using the app\'s Managed Identity, injecting secret values into container environment variables at runtime with zero hardcoded credentials.',
    tags: ['Container Apps', 'Key Vault', 'Managed Identity', 'Secrets', 'Compute']
  },
  {
    id: 'az-104-fc-216',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Accelerated Networking (SR-IOV) benefits',
    hint: 'Bypasses hypervisor virtual switch for sub-millisecond latency and up to 30 Gbps.',
    back: 'Enables Single Root I/O Virtualization (SR-IOV) on VM network interfaces, bypassing the host hypervisor vSwitch for direct hardware packet access, reducing latency/jitter and maximizing network throughput.',
    tags: ['Accelerated Networking', 'SR-IOV', 'Low Latency', 'Networking']
  },
  {
    id: 'az-104-fc-217',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway Cookie-Based Affinity (`ApplicationGatewayAffinity`)',
    hint: 'Gateway-managed cookie routing subsequent requests to same backend server.',
    back: 'Inserts a gateway-managed HTTP cookie (<code>ApplicationGatewayAffinity</code>) into browser responses, directing all subsequent HTTP requests from that client to the exact same backend server for stateful shopping carts/sessions.',
    tags: ['Application Gateway', 'Cookie Affinity', 'Session Sticky', 'Networking']
  },
  {
    id: 'az-104-fc-218',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Virtual Network Flow Logs (VNet Flow Logs)',
    hint: 'Unified IP flow logging for entire VNets with Traffic Analytics integration.',
    back: 'Next-generation network flow logging recording all IP traffic across entire VNets, subnets, and NICs. Integrates with <strong>Traffic Analytics</strong> in Log Analytics to visualize top talkers, threat flows, and traffic patterns.',
    tags: ['VNet Flow Logs', 'Network Watcher', 'Traffic Analytics', 'Monitoring']
  },
  {
    id: 'az-104-fc-219',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure DNS Alias Records for Apex Root Domains',
    hint: 'A/AAAA record mapping apex domain (contoso.com) directly to Traffic Manager/Front Door.',
    back: 'Solves the RFC restriction against CNAMEs at zone apex (<code>contoso.com</code>) by creating an <strong>Alias Record</strong> in Azure Public DNS that dynamically points apex domains directly to Azure Traffic Manager or Front Door profiles.',
    tags: ['Azure DNS', 'Alias Records', 'Apex Domain', 'Traffic Manager', 'Networking']
  },
  {
    id: 'az-104-fc-220',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'ExpressRoute Private Peering vs Microsoft Peering',
    hint: 'Private Peering for IaaS VNets; Microsoft Peering for PaaS and M365.',
    back: '• <strong>Azure Private Peering</strong>: dedicated private connection to private Azure Virtual Networks (IaaS VMs).<br>• <strong>Microsoft Peering</strong>: dedicated private connection to public PaaS services (Azure Storage, SQL) and Microsoft 365.',
    tags: ['ExpressRoute', 'Private Peering', 'Microsoft Peering', 'Hybrid', 'Networking']
  },
  {
    id: 'az-104-fc-221',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Log Analytics Workspace Data Export — continuous ingestion streaming',
    hint: 'Continuous real-time export of table logs to Storage Accounts or Event Hubs.',
    back: 'Continuously streams selected table data as it is ingested into Log Analytics, exporting raw JSON in real time to <strong>Azure Storage Accounts</strong> (for cheap 10-year archival) or <strong>Azure Event Hubs</strong> (for SIEM).',
    tags: ['Log Analytics', 'Data Export', 'Event Hubs', 'Monitoring', 'SIEM']
  },
  {
    id: 'az-104-fc-222',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher Topology — dynamic visual network mapping',
    hint: 'Generates interactive graphical maps of VNets, subnets, VMs, NICs, and NSGs.',
    back: 'Generates interactive graphical diagrams displaying all network resources (VNets, subnets, NICs, VMs, NSGs, route tables) and their relationships within a resource group, simplifying infrastructure audits.',
    tags: ['Network Watcher', 'Topology', 'Diagram', 'Networking']
  },
  {
    id: 'az-104-fc-223',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Instant Restore snapshot retention window',
    hint: 'Configurable from 1 to 5 days in standard VM backup policies.',
    back: 'In standard Azure VM backup policies, Instant Restore snapshots are retained locally for <strong>1 to 5 days</strong> (default 2 days), enabling near-instantaneous VM disk recovery without waiting for vault transfer.',
    tags: ['Azure Backup', 'Instant Restore', 'Snapshots', 'Data Protection']
  },
  {
    id: 'az-104-fc-224',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Data Collection Rules (DCR) Ingestion Transformations (`transformKql`)',
    hint: 'Filtering, masking PII, and enriching columns in real time during log ingestion.',
    back: 'Uses a <code>transformKql</code> statement in Data Collection Rules to process incoming logs via the Logs Ingestion API in real time, <strong>filtering unwanted rows, masking sensitive credit card/PII data, and parsing columns before writing to tables</strong>.',
    tags: ['Data Collection Rules', 'DCR', 'Ingestion Transformation', 'KQL', 'Security']
  },
  {
    id: 'az-104-fc-225',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Monitoring RBAC Role Assignment Changes via Activity Log Alerts',
    hint: 'Alerting on Microsoft.Authorization/roleAssignments/write operations.',
    back: 'Creates an <strong>Activity Log Alert</strong> rule matching administrative operation <code>Microsoft.Authorization/roleAssignments/write</code>, immediately notifying security teams when Owner/Contributor roles are granted.',
    tags: ['Activity Log Alert', 'Azure RBAC', 'Security', 'Governance', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_9;
