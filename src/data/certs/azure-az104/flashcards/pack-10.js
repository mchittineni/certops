export const AZURE_AZ104_FLASHCARDS_10 = [
  {
    id: 'az-104-fc-226',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Self-Service Group Management delegation',
    hint: 'Delegating group membership approval to group owners via My Groups portal.',
    back: 'Enables tenant administrators to delegate group membership approvals and join requests to assigned <strong>Group Owners</strong> via the My Groups/My Access portals, eliminating IT helpdesk ticket overhead.',
    tags: ['Entra ID', 'Self-Service Groups', 'Identity Governance', 'Delegation']
  },
  {
    id: 'az-104-fc-227',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Privileged Identity Management (PIM) for Azure Resources',
    hint: 'Just-in-time time-bound role activation with approval and ticket numbers.',
    back: 'Enforces Just-In-Time (JIT) role elevation for Azure resources (Owner, Contributor) with time limits (e.g. 4 hours), requiring MFA, ticket number justifications, and designated manager approvals before activation.',
    tags: ['Entra ID', 'PIM', 'Just-In-Time', 'RBAC', 'Security']
  },
  {
    id: 'az-104-fc-228',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Deployment Stacks — `actionOnUnmanage: delete`',
    hint: 'Manages resource lifecycle as one unit, auto-deleting resources removed from Bicep.',
    back: 'ARM native resource type managing resource collections as a single unit. When updating templates, setting <code>actionOnUnmanage: delete</code> automatically cleans up (deletes) any resources removed from the updated Bicep template.',
    tags: ['Deployment Stacks', 'ARM', 'Bicep', 'Lifecycle', 'Governance']
  },
  {
    id: 'az-104-fc-229',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Global Secure Access (Internet Access vs Private Access)',
    hint: 'Microsoft Security Service Edge (SSE) solution securing SaaS and private apps.',
    back: '• <strong>Internet Access</strong>: secures traffic to public internet, SaaS, and M365 with web filtering and Conditional Access.<br>• <strong>Private Access</strong>: zero-trust private app access without legacy VPNs.',
    tags: ['Entra ID', 'Global Secure Access', 'SSE', 'Zero Trust', 'Security']
  },
  {
    id: 'az-104-fc-230',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Authentication Strengths: Phishing-resistant MFA in Conditional Access',
    hint: 'Restricting access strictly to FIDO2 keys, Windows Hello, and CBA.',
    back: 'Enforces specific cryptographic MFA methods in Conditional Access grant controls. Selecting <strong>Phishing-resistant MFA</strong> strictly mandates FIDO2 security keys, Windows Hello for Business, or Certificate-Based Auth (rejecting SMS/push).',
    tags: ['Entra ID', 'Authentication Strength', 'FIDO2', 'MFA', 'Security']
  },
  {
    id: 'az-104-fc-231',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Storage Firewall Exception: "Allow Azure services on trusted services list"',
    hint: 'Permitting Azure Backup, Data Factory, and Sentinel over private backbone.',
    back: 'Permits trusted first-party Microsoft Azure services (Azure Backup, Azure Site Recovery, Data Factory, Microsoft Sentinel) using strong authentication to connect to the storage account even when public network access is restricted.',
    tags: ['Azure Storage', 'Trusted Services', 'Storage Firewall', 'Security']
  },
  {
    id: 'az-104-fc-232',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Customer-Initiated Account Failover — impact on redundancy',
    hint: 'Secondary region becomes primary read-write; account automatically converts to LRS.',
    back: 'Initiating account failover points DNS to the secondary paired region as the new primary read-write endpoint. Because replication is broken, the account redundancy <strong>automatically converts to Locally Redundant Storage (LRS)</strong>.',
    tags: ['Azure Storage', 'Account Failover', 'GRS', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-233',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Files SMB Multichannel — performance aggregation',
    hint: 'Multiple parallel TCP connections aggregating bandwidth and boosting IOPS.',
    back: 'Supported on Premium Azure Files. Allows SMB 3.0 clients to establish multiple simultaneous TCP network connections across single or multiple NICs, increasing throughput, maximizing IOPS, and providing network redundancy.',
    tags: ['Azure Files', 'SMB Multichannel', 'Performance', 'Storage']
  },
  {
    id: 'az-104-fc-234',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Cold Tier — instant access economics',
    hint: '30% cheaper capacity than Cool tier with millisecond read latency (90d min retention).',
    back: 'Provides intermediate cost optimization between Cool and Archive. Offers up to 30% lower capacity costs than Cool with <strong>instant millisecond online read access</strong> (zero rehydration delay) and a 90-day minimum retention period.',
    tags: ['Blob Storage', 'Cold Tier', 'Access Tiers', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-235',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'AzCopy `sync` with `--delete-destination=true`',
    hint: 'One-way directory sync that deletes orphaned files from destination.',
    back: '<code>azcopy sync &lt;src&gt; &lt;dst&gt; --delete-destination=true</code> compares timestamps, copying new/modified files and automatically deleting files in the target storage container that no longer exist in the source.',
    tags: ['AzCopy', 'azcopy sync', 'Data Migration', 'Storage']
  },
  {
    id: 'az-104-fc-236',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Scheduled Events via Instance Metadata Service (IMDS)',
    hint: '169.254.169.254/metadata/scheduledevents giving advance notice of maintenance/evictions.',
    back: 'REST metadata endpoint (<code>http://169.254.169.254/metadata/scheduledevents</code>) providing VMs advance programmatic notifications about upcoming platform host maintenance, VM restarts, redeployments, and Spot evictions.',
    tags: ['Virtual Machines', 'Scheduled Events', 'IMDS', 'Maintenance', 'Compute']
  },
  {
    id: 'az-104-fc-237',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Flexible Orchestration Mode vs Uniform Mode',
    hint: 'Heterogeneous VM sizes, mixing Spot/PAYG, and individual VM NIC management.',
    back: '• <strong>Flexible Mode</strong>: supports heterogeneous VM sizes, mixing Spot/PAYG instances, and individual VM lifecycle management.<br>• <strong>Uniform Mode</strong>: homogeneous fleet based on a single identical VM model template.',
    tags: ['VMSS', 'Flexible Orchestration', 'Uniform Orchestration', 'Compute']
  },
  {
    id: 'az-104-fc-238',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Swap with Preview — two-phase slot validation',
    hint: 'Applying production configurations to staging slot for testing before final swap.',
    back: 'Executes a two-phase slot swap: Phase 1 applies production app settings/connection strings to the staging slot for live verification; Phase 2 completes the traffic swap (or cancels if issues are detected).',
    tags: ['App Service', 'Deployment Slots', 'Swap with Preview', 'Compute']
  },
  {
    id: 'az-104-fc-239',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Proximity Placement Groups (PPG) — microsecond inter-VM latency',
    hint: 'Physically collocating VMs within same datacenter hardware cluster.',
    back: 'Logical grouping resource that physically locates virtual machines, scale sets, and availability sets as close as possible to each other inside the same datacenter fabric to minimize inter-VM network latency for HPC/trading.',
    tags: ['Proximity Placement Groups', 'PPG', 'Low Latency', 'Compute']
  },
  {
    id: 'az-104-fc-240',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Instances (ACI) Restart Policy: `OnFailure` vs `Always`',
    hint: 'OnFailure runs batch jobs to exit code 0 and stops; Always restarts continuously.',
    back: '• <strong>OnFailure</strong>: container process restarts only if it crashes with non-zero exit code (stops on exit 0, ideal for batch tasks).<br>• <strong>Always</strong>: continuously restarts upon termination (ideal for web APIs).',
    tags: ['ACI', 'Container Instances', 'Restart Policy', 'Containers']
  },
  {
    id: 'az-104-fc-241',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Subnet Usable IP Address Calculation (e.g. /27)',
    hint: 'Total IPs minus 5 Azure reserved IP addresses = Usable IPs.',
    back: 'Total IPs in CIDR block minus 5 reserved addresses:<br>For <code>/27</code>: $32 - 5 = $ <strong>27 usable IP addresses</strong>.<br>For <code>/24</code>: $256 - 5 = $ <strong>251 usable IP addresses</strong>.',
    tags: ['VNet', 'Subnets', 'IP Addressing', 'CIDR', 'Networking']
  },
  {
    id: 'az-104-fc-242',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway HTTP 502 Bad Gateway — common probe timeout cause',
    hint: 'NSG or guest OS firewall blocking probe traffic from gateway subnet IP.',
    back: 'Occurs when backend pool VMs fail health checks. Most common root cause: an <strong>NSG or guest OS firewall blocking incoming health probe traffic</strong> originating from the Application Gateway subnet IP range.',
    tags: ['Application Gateway', '502 Bad Gateway', 'Backend Health', 'Troubleshooting']
  },
  {
    id: 'az-104-fc-243',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Hub-and-Spoke UDR Configuration for Centralized NVA/Firewall Inspection',
    hint: 'Route 0.0.0.0/0 and inter-spoke CIDRs with Next Hop = Virtual Appliance (Firewall IP).',
    back: 'In spoke subnets, attach a custom Route Table defining: 1) <code>0.0.0.0/0</code> with Next Hop Type <strong>Virtual appliance</strong> pointing to the hub firewall private IP, and 2) target spoke CIDR blocks pointing to the same firewall IP.',
    tags: ['UDR', 'Hub and Spoke', 'Azure Firewall', 'NVA', 'Routing']
  },
  {
    id: 'az-104-fc-244',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Why Private Endpoints support On-Premises ExpressRoute/VPN (vs Service Endpoints)',
    hint: 'Private Endpoint has a real private IP on VNet subnet routable across hybrid links.',
    back: 'Private Endpoints assign a real private IP address from your VNet subnet that is <strong>fully routable across ExpressRoute and VPN from on-premises</strong>, whereas Service Endpoints cannot route on-premises traffic.',
    tags: ['Private Endpoint', 'Service Endpoint', 'Hybrid', 'Networking']
  },
  {
    id: 'az-104-fc-245',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Bastion Shareable Links — direct browser access for vendors',
    hint: 'Generating direct URL to VM without requiring Azure portal login or Entra account.',
    back: 'Feature on Bastion Standard/Premium SKU allowing administrators to generate unique temporary URLs. External users/vendors click the link to open direct browser RDP/SSH sessions <strong>without Azure portal access or tenant credentials</strong>.',
    tags: ['Azure Bastion', 'Shareable Links', 'Remote Access', 'Security']
  },
  {
    id: 'az-104-fc-246',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Log Analytics Search Jobs — asynchronous petabyte archive queries',
    hint: 'Long-running asynchronous jobs scanning archived tables and writing to _SRCH table.',
    back: 'Executes asynchronous, long-running queries across petabytes of data stored in the Log Analytics Archive tier without query timeout limits, writing results to a dedicated search table (<code>_SRCH</code>).',
    tags: ['Log Analytics', 'Search Jobs', 'Archive Tier', 'Auditing', 'Monitoring']
  },
  {
    id: 'az-104-fc-247',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Cross-Region Restore (CRR) capabilities',
    hint: 'Restoring backups in secondary paired region at any time for DR drills.',
    back: 'Enables restoring backup recovery points in the secondary paired region at any time—including during disaster recovery compliance drills when the primary region is fully healthy—without waiting for Microsoft failover.',
    tags: ['Azure Backup', 'Cross-Region Restore', 'CRR', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-248',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Advisor Cost Recommendations for Underutilized VMs',
    hint: 'Identifies VMs with CPU < 5% over 7 days for right-sizing or shutdown.',
    back: 'Continuously monitors VM performance telemetry, flagging idle or underutilized virtual machines (e.g. CPU utilization &lt; 5% over 7 days) and recommending right-sizing to smaller SKUs or shutting them down.',
    tags: ['Azure Advisor', 'Cost Recommendations', 'FinOps', 'Right-Sizing']
  },
  {
    id: 'az-104-fc-249',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher Connection Monitor — continuous latency and loss probing',
    hint: 'Periodic synthetic probes (TCP/HTTP/ICMP) measuring RTT, loss, and hop-by-hop paths.',
    back: 'Sends recurring synthetic probes (TCP, HTTP, ICMP) between Azure VMs and on-premises/cloud endpoints, tracking round-trip time (RTT), latency, and packet loss with automated alert triggers on threshold breaches.',
    tags: ['Network Watcher', 'Connection Monitor', 'Latency', 'Monitoring']
  },
  {
    id: 'az-104-fc-250',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Service Health Alerts with Action Groups',
    hint: 'Automated SMS/email notifications on active regional platform outages.',
    back: 'Creates alert rules targeting regional service issues, planned maintenance, and health advisories, triggering <strong>Action Groups</strong> to notify stakeholders via email, SMS, or webhooks whenever Azure platform incidents occur.',
    tags: ['Service Health', 'Service Health Alerts', 'Action Groups', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_10;
