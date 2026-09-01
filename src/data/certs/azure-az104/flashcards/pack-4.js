export const AZURE_AZ104_FLASHCARDS_4 = [
  {
    id: 'az-104-fc-76',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Access Reviews — recurring compliance workflow',
    hint: 'Automated periodic review of group memberships and role assignments.',
    back: 'Enables recurring recertification of user access to groups, applications, and privileged roles. Reviewers (managers or group owners) approve or deny access; denied users are automatically removed.',
    tags: ['Entra ID', 'Access Reviews', 'Identity Governance', 'Compliance']
  },
  {
    id: 'az-104-fc-77',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure RBAC Deny Assignments — precedence over Owner roles',
    hint: 'System-created assignments that explicitly block actions despite Owner rights.',
    back: 'Created by Azure systems (e.g. Azure Blueprints). Explicitly blocks principals from performing specific actions. <strong>Deny assignments take precedence over all RBAC allow assignments</strong>, including the Owner role.',
    tags: ['Azure RBAC', 'Deny Assignments', 'Governance', 'Blueprints']
  },
  {
    id: 'az-104-fc-78',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure RBAC Actions vs DataActions — Control Plane vs Data Plane',
    hint: 'Managing resources vs reading/writing data inside storage/queues/DBs.',
    back: '• <strong>Actions</strong>: grants permissions to manage Azure resources (control plane).<br>• <strong>DataActions</strong>: grants permissions to interact with data inside resources (data plane, e.g. reading/writing blob objects).',
    tags: ['Azure RBAC', 'DataActions', 'Actions', 'Governance']
  },
  {
    id: 'az-104-fc-79',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Moving Azure Resources between Resource Groups/Subscriptions',
    hint: 'Metadata update without data loss or downtime for supported resources.',
    back: 'Updates Azure Resource Manager resource ID paths to point to the new target resource group/subscription. <strong>Supported resources move without data loss or downtime</strong>, retaining all internal configurations and tags.',
    tags: ['Resource Group', 'Resource Move', 'Governance', 'ARM']
  },
  {
    id: 'az-104-fc-80',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra ID Protection: User Risk vs Sign-in Risk',
    hint: 'Leaked credentials (identity compromise) vs anomalous IP/impossible travel (session).',
    back: '• <strong>User Risk</strong>: probability that user identity is compromised (e.g. leaked credentials on dark web). Remediation: force SSPR password change.<br>• <strong>Sign-in Risk</strong>: probability that a specific sign-in is suspicious (e.g. impossible travel). Remediation: require MFA.',
    tags: ['Entra ID', 'ID Protection', 'User Risk', 'Sign-in Risk', 'Security']
  },
  {
    id: 'az-104-fc-81',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Versioning — automatic previous version preservation',
    hint: 'Automatically preserves earlier versions of blobs upon overwrite or edit.',
    back: 'Maintains previous versions of a blob whenever the blob is modified or overwritten. Allows users to view, download, audit, or restore earlier versions of files at any point in time.',
    tags: ['Blob Storage', 'Versioning', 'Data Protection', 'Storage']
  },
  {
    id: 'az-104-fc-82',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Files Microsoft Entra Kerberos Authentication',
    hint: 'Cloud-native SMB access for hybrid and cloud-only Entra users without AD DC line-of-sight.',
    back: 'Enables cloud-only and hybrid Microsoft Entra ID users to mount and access Azure Files SMB shares using Kerberos tickets issued by Entra ID, <strong>eliminating on-premises Active Directory domain controller line-of-sight requirements</strong>.',
    tags: ['Azure Files', 'Entra Kerberos', 'SMB', 'Authentication']
  },
  {
    id: 'az-104-fc-83',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Static Website with Azure Front Door / CDN Custom SSL',
    hint: 'Edge caching, custom apex domain mapping, and free managed SSL certificates.',
    back: 'Fronting an Azure Storage static website (<code>$web</code> container) with Azure Front Door or Azure CDN provides edge caching, custom domain mapping (e.g. <code>www.contoso.com</code>), and <strong>free automated managed SSL/TLS certificate renewal</strong>.',
    tags: ['Static Website', 'Azure CDN', 'Front Door', 'Storage', 'Custom Domain']
  },
  {
    id: 'az-104-fc-84',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Read-Access Geo-Redundant Storage (RA-GRS) Endpoint Architecture',
    hint: 'Dedicated secondary DNS endpoint (ACCOUNTNAME-secondary.blob.core.windows.net).',
    back: 'Provides a secondary read-only DNS endpoint (<code>&lt;name&gt;-secondary.blob.core.windows.net</code>) allowing applications to read data from the paired region at any time for high-read analytics or regional read resilience.',
    tags: ['Azure Storage', 'RA-GRS', 'Redundancy', 'High Availability']
  },
  {
    id: 'az-104-fc-85',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Explorer — supported credentials and platforms',
    hint: 'Cross-platform GUI desktop tool supporting Entra ID, account keys, and SAS.',
    back: 'Free standalone GUI desktop client (Windows, macOS, Linux) for managing Azure Blob containers, Azure Files, Queues, Tables, and Data Lake Gen2 storage using Microsoft Entra ID, storage account keys, or SAS URIs.',
    tags: ['Storage Explorer', 'Azure Storage', 'Management Tool']
  },
  {
    id: 'az-104-fc-86',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Dedicated Host — primary compliance and licensing use case',
    hint: 'Single-tenant dedicated physical server hardware in Azure datacenters.',
    back: 'Provisions physical server hardware dedicated exclusively to one customer. Ensures physical hardware isolation for strict compliance and enables <strong>Azure Hybrid Benefit for per-core host licensing</strong>.',
    tags: ['Dedicated Host', 'Compliance', 'Isolation', 'Compute']
  },
  {
    id: 'az-104-fc-87',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM Auto-Shutdown — cost reduction feature',
    hint: 'Configuring automated daily deallocation time with webhook notification.',
    back: 'Built-in VM feature that automatically shuts down and deallocates virtual machines at a configured time daily (e.g. 19:00), sending optional email/webhook alerts before deallocation to prevent overnight compute charges.',
    tags: ['Virtual Machines', 'Auto-Shutdown', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'az-104-fc-88',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Managed Certificates (ASMC) — features and limitations',
    hint: 'Free auto-renewing SSL certs for custom domains on Basic/Standard/Premium.',
    back: 'Free, automated TLS/SSL certificates issued and auto-renewed directly by Microsoft Azure for custom domains on App Service Basic, Standard, and Premium tiers (does not support wildcard certificates or IP-based SSL).',
    tags: ['App Service', 'Managed Certificate', 'SSL/TLS', 'Compute']
  },
  {
    id: 'az-104-fc-89',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'AKS Cluster Autoscaler vs Horizontal Pod Autoscaler (HPA)',
    hint: 'Scaling VM worker nodes vs scaling pod replica counts.',
    back: '• <strong>Cluster Autoscaler</strong>: adjusts the number of VM worker nodes in an AKS node pool when pods cannot be scheduled.<br>• <strong>Horizontal Pod Autoscaler (HPA)</strong>: adjusts the number of application pod replicas based on CPU/memory metrics.',
    tags: ['AKS', 'Cluster Autoscaler', 'HPA', 'Kubernetes']
  },
  {
    id: 'az-104-fc-90',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Compute Gallery (Shared Image Gallery) — core capabilities',
    hint: 'Global replication, versioning, and sharing of customized golden VM images.',
    back: 'Centrally manages, versions, and shares custom golden virtual machine images. Automatically replicates image versions across multiple Azure regions for high-speed local VM deployment and scale set scaling.',
    tags: ['Compute Gallery', 'VM Images', 'Custom Images', 'Automation']
  },
  {
    id: 'az-104-fc-91',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Virtual Network Peering Non-Transitive Behavior',
    hint: 'If A is peered with B and B is peered with C, A cannot reach C by default.',
    back: 'VNet Peering is <strong>strictly non-transitive</strong>. Traffic cannot pass through an intermediate peered VNet unless an NVA (firewall router) or Virtual Network Gateway with custom User-Defined Routes is deployed in the hub VNet.',
    tags: ['VNet Peering', 'Non-Transitive', 'Routing', 'Networking']
  },
  {
    id: 'az-104-fc-92',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Network Security Group (NSG) Inbound Default Rules',
    hint: 'AllowVNetInBound (65000), AllowAzureLoadBalancerInBound (65001), DenyAllInBound (65500).',
    back: '• <strong>AllowVNetInBound (65000)</strong>: allows intra-VNet and peered VNet traffic.<br>• <strong>AllowAzureLoadBalancerInBound (65001)</strong>: allows health probes.<br>• <strong>DenyAllInBound (65500)</strong>: blocks all other external/internet traffic.',
    tags: ['NSG', 'Default Rules', 'Security', 'Networking']
  },
  {
    id: 'az-104-fc-93',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'ExpressRoute and Site-to-Site VPN Coexistence in GatewaySubnet',
    hint: 'Deploying both gateways in one GatewaySubnet with BGP failover.',
    back: 'Allows deploying an ExpressRoute Gateway and a Route-Based VPN Gateway together inside a single <code>GatewaySubnet</code>. BGP routes prioritize ExpressRoute, automatically failing over to the Site-to-Site VPN if ExpressRoute drops.',
    tags: ['ExpressRoute', 'VPN Gateway', 'Coexistence', 'Failover', 'Networking']
  },
  {
    id: 'az-104-fc-94',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Routing Longest Prefix Match (LPM) Rule',
    hint: 'Most specific subnet mask (/24 vs /16) always wins.',
    back: 'Azure selects route paths using <strong>Longest Prefix Match (LPM)</strong>. A more specific route (e.g. <code>10.0.1.0/24</code>) is always selected over a broader route (e.g. <code>10.0.0.0/16</code>), regardless of route source (UDR, BGP, or System).',
    tags: ['Route Tables', 'UDR', 'LPM', 'Routing', 'Networking']
  },
  {
    id: 'az-104-fc-95',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Private Link Service — multi-tenant private service publishing',
    hint: 'Publishing services behind Standard Load Balancer privately to consumer VNets.',
    back: 'Allows service providers to publish proprietary applications hosted behind a Standard Load Balancer privately to consumers across subscriptions/tenants via <strong>Private Endpoints</strong>, with zero CIDR overlap conflicts or VNet peering.',
    tags: ['Private Link Service', 'Private Endpoint', 'Networking', 'Security']
  },
  {
    id: 'az-104-fc-96',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Workspace-Based Application Insights Architecture',
    hint: 'Storing application telemetry directly in a central Log Analytics workspace.',
    back: 'Sends application telemetry (requests, exceptions, dependencies, traces) directly into an <strong>Azure Log Analytics workspace</strong>, allowing cross-resource KQL queries and unified retention management with VM and platform logs.',
    tags: ['Application Insights', 'Log Analytics', 'Workspace-Based', 'Monitoring']
  },
  {
    id: 'az-104-fc-97',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher Packet Capture — remote packet tracing',
    hint: 'Remote capture on VM NIC saving raw PCAP files directly to storage.',
    back: 'Initiates and manages packet captures on virtual machines remotely (via VM extension). Filters captures by IP, port, or protocol, writing raw <code>.cap</code> / <code>.pcap</code> packet trace files directly into an Azure Storage Account.',
    tags: ['Network Watcher', 'Packet Capture', 'Troubleshooting', 'Monitoring']
  },
  {
    id: 'az-104-fc-98',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Resource Health — individual resource availability states',
    hint: 'Available, Degraded, Unavailable, and Unknown states for specific resources.',
    back: 'Reports the health and diagnostics of specific individual Azure resources (e.g. an individual VM or database), indicating whether downtime was caused by customer actions or underlying Azure platform infrastructure failures.',
    tags: ['Resource Health', 'Service Health', 'Troubleshooting', 'Monitoring']
  },
  {
    id: 'az-104-fc-99',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Grandfather-Father-Son (GFS) Retention Schedules',
    hint: 'Daily, Weekly, Monthly, and Yearly retention configured in a single policy.',
    back: 'Native retention model supported in Recovery Services Vault backup policies, allowing independent long-term retention rules for <strong>Daily (e.g. 30d), Weekly (e.g. 12w), Monthly (e.g. 60m), and Yearly (e.g. 10y)</strong> recovery points.',
    tags: ['Azure Backup', 'Backup Policy', 'Retention', 'Compliance']
  },
  {
    id: 'az-104-fc-100',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Metrics Explorer — interactive time-series charting',
    hint: 'Plotting, filtering, and splitting numerical metrics across resource fleets.',
    back: 'Component of Azure Monitor in the portal for plotting interactive charts, investigating performance anomalies, and comparing numerical time-series metrics (CPU, Memory, Network) across resources with dimension splitting and filtering.',
    tags: ['Azure Monitor', 'Metrics Explorer', 'Metrics', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_4;
