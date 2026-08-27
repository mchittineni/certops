export const AZURE_AZ104_FLASHCARDS_8 = [
  {
    id: 'az-104-fc-176',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Terms of Use — legal and compliance consent',
    hint: 'Mandatory presentation of policy PDFs requiring user acceptance before access.',
    back: 'Presents customizable Terms of Use (PDF) documents that users/contractors must view and accept before gaining access to applications, enforceable via Conditional Access with recurring re-consent schedules.',
    tags: ['Entra ID', 'Terms of Use', 'Conditional Access', 'Compliance']
  },
  {
    id: 'az-104-fc-177',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Virtual Machine Contributor RBAC role permissions',
    hint: 'Managing VMs, restart, start, stop, and disks without managing VNet or storage.',
    back: 'Allows managing virtual machines (start, stop, restart, resize, attach disks), but does NOT grant access to the virtual network or storage account where the VM connects/resides, adhering to least privilege.',
    tags: ['Azure RBAC', 'Virtual Machine Contributor', 'Governance']
  },
  {
    id: 'az-104-fc-178',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Triggering On-Demand Azure Policy Compliance Evaluation Scans',
    hint: 'az policy state trigger-scan (CLI) or Start-AzPolicyComplianceScan (PowerShell).',
    back: 'To evaluate policy compliance immediately without waiting for the automatic 24-hour cycle, execute the Azure CLI command: <code>az policy state trigger-scan</code> or PowerShell: <code>Start-AzPolicyComplianceScan</code>.',
    tags: ['Azure Policy', 'Compliance Scan', 'CLI', 'Governance']
  },
  {
    id: 'az-104-fc-179',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra SSPR Authentication Methods supported',
    hint: 'Authenticator app, SMS text, Voice call, Email, Security questions, FIDO2.',
    back: 'Supported SSPR verification methods: <strong>Microsoft Authenticator app (push/code), Mobile phone SMS/Voice, Office phone, Email, Security questions, and FIDO2 security keys</strong> (configurable requiring 1 or 2 methods).',
    tags: ['Entra ID', 'SSPR', 'Authentication Methods', 'Identity']
  },
  {
    id: 'az-104-fc-180',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Management Group Hierarchy Maximum Depth',
    hint: 'Up to 6 levels of depth (excluding Root level).',
    back: 'Azure Management Groups support a maximum hierarchy depth of <strong>6 levels</strong> below the Root Management Group (and can contain up to 10,000 management groups in a single tenant).',
    tags: ['Management Groups', 'Hierarchy', 'Limits', 'Governance']
  },
  {
    id: 'az-104-fc-181',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Types: Block Blobs vs Page Blobs vs Append Blobs',
    hint: 'Documents/media vs VHD disks vs continuous append-only logs.',
    back: '• <strong>Block Blobs</strong>: standard files, documents, streaming media (up to 200 TB).<br>• <strong>Page Blobs</strong>: 512-byte random read/write pages for VHD disks.<br>• <strong>Append Blobs</strong>: optimized for continuous append-only logging.',
    tags: ['Blob Storage', 'Block Blobs', 'Page Blobs', 'Append Blobs', 'Storage']
  },
  {
    id: 'az-104-fc-182',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Cross-Origin Resource Sharing (CORS) on Azure Storage',
    hint: 'Enabling browser-based cross-domain asset requests with Allowed Origins.',
    back: 'Configured on Azure Storage services to allow web applications hosted under one domain (e.g. <code>https://contoso.com</code>) to load assets directly from the storage endpoint without browser cross-origin blocks.',
    tags: ['Azure Storage', 'CORS', 'Web Application', 'Storage']
  },
  {
    id: 'az-104-fc-183',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Blob-Level (Object-Level) Immutability Policies',
    hint: 'Applying distinct WORM retention periods directly to individual blob versions.',
    back: 'Allows setting independent time-based retention periods or legal holds directly on individual blob versions rather than applying a single uniform policy to the entire container, ideal for variable retention workloads.',
    tags: ['Blob Storage', 'Blob-Level Immutability', 'WORM', 'Compliance']
  },
  {
    id: 'az-104-fc-184',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'How Cloud Tiering stores tiered files on Windows Server (Reparse Points)',
    hint: 'NTFS sparse files / reparse points taking 0 bytes, recalled on-demand.',
    back: 'Tiered files become local <strong>NTFS reparse points (ghost files)</strong> with the offline attribute, taking up virtually 0 bytes on local disk while retaining metadata. When opened, Azure File Sync recalls the file seamlessly.',
    tags: ['Azure File Sync', 'Cloud Tiering', 'Reparse Points', 'Storage']
  },
  {
    id: 'az-104-fc-185',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Enforcing Minimum TLS Version on Azure Storage Accounts',
    hint: 'Setting Minimum TLS version to 1.2 to reject TLS 1.0 and 1.1.',
    back: 'Configured on the storage account configuration blade. Setting <strong>Minimum TLS version = 1.2</strong> immediately rejects all legacy client requests attempting to connect over TLS 1.0 or TLS 1.1 at the transport layer.',
    tags: ['Azure Storage', 'TLS', 'Security', 'Compliance']
  },
  {
    id: 'az-104-fc-186',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Configuring Static Private IP Addresses on Azure VMs',
    hint: 'Must be set to Static in Azure NIC IP configuration, not inside guest OS.',
    back: 'Configure the Private IP allocation method to <strong>Static</strong> in the Azure Network Interface (NIC) IP configuration in the portal/CLI. Never configure static IPs manually inside the guest OS to avoid DHCP conflicts.',
    tags: ['Virtual Machines', 'Static IP', 'Networking', 'Compute']
  },
  {
    id: 'az-104-fc-187',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Automatic Instance Repair — self-healing scale sets',
    hint: 'Detects unhealthy instances via health probes and terminates/replaces them.',
    back: 'Monitors instance health via Application Health Extension or Load Balancer health probes. If an instance remains unhealthy for the grace period, the scale set automatically <strong>terminates and provisions a healthy replacement instance</strong>.',
    tags: ['VMSS', 'Automatic Repair', 'Self-Healing', 'Compute']
  },
  {
    id: 'az-104-fc-188',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Environment v3 (ASEv3) / Isolated v2 Plan',
    hint: 'Single-tenant dedicated hardware deployed directly in customer VNet subnet.',
    back: 'Provides fully isolated, single-tenant dedicated App Service hosting deployed directly inside a customer\'s virtual network subnet, offering hyper-scaling (up to 1,000 instances) and physical hardware compliance isolation.',
    tags: ['App Service', 'ASEv3', 'Isolated Plan', 'Compute', 'Security']
  },
  {
    id: 'az-104-fc-189',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Generation 2 (Gen2) Virtual Machines — key capabilities',
    hint: 'UEFI boot, Trusted Launch (vTPM/Secure Boot), OS disks > 2 TB.',
    back: 'Uses UEFI boot architecture (replacing BIOS). Supports <strong>Trusted Launch (vTPM 2.0 & Secure Boot)</strong>, OS disks larger than 2 TB, and increased memory configurations with faster boot and provisioning times.',
    tags: ['Virtual Machines', 'Generation 2', 'UEFI', 'Trusted Launch', 'Compute']
  },
  {
    id: 'az-104-fc-190',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Apps Revisions & Traffic Splitting',
    hint: 'Allocating percentage traffic weights across active container revisions.',
    back: 'Allows running multiple active container revisions concurrently. Administrators allocate exact percentage weights (e.g. 80% to Rev 1, 20% to Rev 2) for zero-downtime blue/green deployments and canary testing.',
    tags: ['Container Apps', 'Revisions', 'Traffic Splitting', 'Canary', 'Compute']
  },
  {
    id: 'az-104-fc-191',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'VNet Peering: Allow Gateway Transit vs Use Remote Gateways',
    hint: 'Hub enables "Allow gateway transit"; Spoke enables "Use remote gateways".',
    back: '• <strong>Hub Peering Link</strong>: enable <em>"Allow gateway transit"</em> (shares gateway).<br>• <strong>Spoke Peering Link</strong>: enable <em>"Use remote virtual network\'s gateways"</em> (consumes hub gateway).',
    tags: ['VNet Peering', 'Gateway Transit', 'Networking', 'Hub and Spoke']
  },
  {
    id: 'az-104-fc-192',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Load Balancer Session Persistence (2-tuple vs 5-tuple)',
    hint: 'Client IP (2-tuple) routes repeat requests to same backend VM.',
    back: '• <strong>None (Default)</strong>: 5-tuple hash (Src IP, Src Port, Dst IP, Dst Port, Protocol).<br>• <strong>Client IP</strong>: 2-tuple hash (Src IP, Dst IP) routing all traffic from a client to the same backend VM.<br>• <strong>Client IP and protocol</strong>: 3-tuple hash.',
    tags: ['Azure Load Balancer', 'Session Persistence', 'Networking']
  },
  {
    id: 'az-104-fc-193',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway Mutual TLS (mTLS) with SSL Profile',
    hint: 'Validating client X.509 certificates against uploaded trusted CA cert chain.',
    back: 'Configures an <strong>SSL Profile</strong> on the Application Gateway containing the uploaded Trusted Client CA certificate chain. The gateway validates client X.509 certificates during TLS handshake before forwarding traffic.',
    tags: ['Application Gateway', 'mTLS', 'SSL/TLS', 'Security', 'Networking']
  },
  {
    id: 'az-104-fc-194',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure NAT Gateway — key advantages over Load Balancer Outbound Rules',
    hint: 'Subnet-level dynamic SNAT scaling across up to 16 IPs without manual port tuning.',
    back: 'Managed outbound-only translation attached at the subnet level. Automatically manages dynamic SNAT port scaling across up to 16 public IPs without requiring complex per-VM port reservations or idle timeout tuning.',
    tags: ['NAT Gateway', 'SNAT', 'Outbound Connectivity', 'Networking']
  },
  {
    id: 'az-104-fc-195',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Split-Horizon DNS with Azure Private DNS Zones',
    hint: 'Same domain name resolving to private IP in VNet and public IP on internet.',
    back: 'Maintains an <strong>Azure Private DNS Zone</strong> (for internal VNet private IP resolution) and an <strong>Azure Public DNS Zone</strong> (for public internet resolution) under the same domain name (e.g. <code>contoso.com</code>).',
    tags: ['Private DNS', 'Split-Horizon', 'DNS', 'Networking']
  },
  {
    id: 'az-104-fc-196',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Log Analytics Commitment Tiers — cost savings threshold',
    hint: '30–50% discount for workspaces ingesting at least 100 GB/day.',
    back: 'Provides tiered discounts (up to 30–50% off Pay-As-You-Go rates) for workspaces ingesting at least <strong>100 GB/day</strong>, offering fixed daily commitment tiers (100, 200, 500, 1000+ GB/day) for predictable log volume spend.',
    tags: ['Log Analytics', 'Commitment Tiers', 'Cost Optimization', 'Monitoring']
  },
  {
    id: 'az-104-fc-197',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Site Recovery (ASR) Recovery Plans and Automation Runbooks',
    hint: 'Sequenced multi-tier VM failover with automated scripts and manual pauses.',
    back: 'Orchestrates the ordered failover of multi-tier applications (e.g. DB first, then App, then Web). Supports integrating <strong>Azure Automation Runbooks</strong> and manual pause prompts to update DNS, load balancers, or databases.',
    tags: ['Azure Site Recovery', 'ASR', 'Recovery Plans', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-198',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Dynamic Thresholds in Metric Alerts',
    hint: 'ML-based anomaly detection adapting to seasonality and historical trends.',
    back: 'Uses machine learning to learn metric historical behavior and seasonal patterns (hourly, daily, weekly), automatically calculating dynamic upper/lower threshold boundaries to eliminate false alarms and detect subtle deviations.',
    tags: ['Azure Monitor', 'Dynamic Thresholds', 'Machine Learning', 'Alerts']
  },
  {
    id: 'az-104-fc-199',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher IP Flow Verify 5-tuple evaluation',
    hint: 'Protocol, Local IP, Remote IP, Local Port, Remote Port.',
    back: 'Evaluates packet flow permissions based on 5-tuple parameters: <strong>Protocol (TCP/UDP), Local IP, Remote IP, Local Port, Remote Port</strong>, returning whether the flow is Allowed/Denied and the exact matching NSG rule.',
    tags: ['Network Watcher', 'IP Flow Verify', 'NSG', 'Troubleshooting']
  },
  {
    id: 'az-104-fc-200',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Center — centralized multi-vault governance',
    hint: 'Unified dashboard managing backups, restore jobs, and compliance across vaults.',
    back: 'Unified management interface in the Azure portal for centrally governing, monitoring, configuring policies, and auditing all Recovery Services Vaults and Backup Vaults across multiple subscriptions and regions.',
    tags: ['Azure Backup', 'Backup Center', 'Governance', 'Data Protection']
  }
];

export default AZURE_AZ104_FLASHCARDS_8;
