export const AZURE_AZ104_FLASHCARDS_1 = [
  {
    id: 'az-104-fc-1',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Self-Service Password Reset (SSPR) Password Writeback — requirements',
    hint: 'Real-time synchronization of cloud password changes back to on-premises AD DS.',
    back: 'Requires <strong>Microsoft Entra Connect</strong> with Password Writeback enabled and SSPR configured in Microsoft Entra ID. Allows users to reset passwords in cloud and have changes synchronized back to on-premises Active Directory in real time.',
    tags: ['Entra ID', 'SSPR', 'Password Writeback', 'Identity']
  },
  {
    id: 'az-104-fc-2',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure RBAC Custom Roles: Actions vs NotActions',
    hint: 'NotActions subtracts permissions from Actions; does not provide explicit Deny.',
    back: '<code>Actions</code> lists allowed operations. <code>NotActions</code> subtracts specific operations from the Actions grant (it is NOT an explicit deny; if another role grants the permission, the user still has it). <code>AssignableScopes</code> defines where role can be applied.',
    tags: ['Azure RBAC', 'Custom Roles', 'NotActions', 'Governance']
  },
  {
    id: 'az-104-fc-3',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy Remediation Tasks — how to remediate existing resources',
    hint: 'Manually triggered task using policy assignment managed identity.',
    back: 'For policies with <code>deployIfNotExists</code> or <code>modify</code> effects, existing resources are not automatically changed upon policy assignment. You must create a <strong>Remediation Task</strong>, which executes using a managed identity assigned to the policy.',
    tags: ['Azure Policy', 'Remediation', 'Governance', 'Managed Identity']
  },
  {
    id: 'az-104-fc-4',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Resource Locks: CanNotDelete (Delete) vs ReadOnly',
    hint: 'Modify allowed but delete blocked vs read-only with modify & delete blocked.',
    back: '• <strong>CanNotDelete (Delete)</strong>: authorized users can read and modify resources, but cannot delete them.<br>• <strong>ReadOnly</strong>: authorized users can read, but cannot modify, update, or delete resources.',
    tags: ['Resource Locks', 'CanNotDelete', 'ReadOnly', 'Governance']
  },
  {
    id: 'az-104-fc-5',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Administrative Units (AUs) — primary purpose',
    hint: 'Delegating directory administration over specific subsets of users and groups.',
    back: 'Enables subdividing a Microsoft Entra ID tenant into administrative boundaries (e.g. by region or department). Allows assigning directory roles (e.g. User Administrator) <strong>scoped strictly to members of that Administrative Unit</strong>.',
    tags: ['Entra ID', 'Administrative Units', 'Delegation', 'Identity']
  },
  {
    id: 'az-104-fc-6',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Redundancy: LRS vs ZRS vs GRS vs GZRS',
    hint: 'Single datacenter vs 3 AZs vs paired region (LRS) vs paired region (ZRS).',
    back: '• <strong>LRS</strong>: 3 copies in 1 datacenter.<br>• <strong>ZRS</strong>: 3 copies across 3 AZs in primary region.<br>• <strong>GRS</strong>: LRS in primary + LRS in secondary paired region.<br>• <strong>GZRS</strong>: ZRS across 3 AZs in primary + LRS in secondary region.',
    tags: ['Azure Storage', 'Redundancy', 'GZRS', 'ZRS']
  },
  {
    id: 'az-104-fc-7',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Lifecycle Management — tier transitions and actions',
    hint: 'Automating Hot -> Cool -> Cold -> Archive transitions and deletion by age.',
    back: 'Rule-based engine running on storage accounts. Actions include: <code>tierToCool</code>, <code>tierToCold</code>, <code>tierToArchive</code>, and <code>delete</code> based on <code>daysAfterModificationGreaterThan</code> or <code>daysAfterLastAccessTimeGreaterThan</code>.',
    tags: ['Blob Storage', 'Lifecycle Management', 'Storage Tiers', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-8',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure File Sync Cloud Tiering — Volume Free Space policy',
    hint: 'Caching hot files locally while cold files are tiered to Azure Files.',
    back: 'Maintains frequently accessed files cached on the local Windows Server endpoint while tiering cold files to Azure Files. The <strong>Volume Free Space policy</strong> ensures a specified percentage of local disk space remains free at all times.',
    tags: ['Azure File Sync', 'Cloud Tiering', 'Azure Files', 'Hybrid']
  },
  {
    id: 'az-104-fc-9',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Stored Access Policies for Shared Access Signatures (SAS)',
    hint: 'Container-level policy enabling immediate SAS revocation without key rotation.',
    back: 'Defined on a blob container or file share. Associates with a Service SAS to manage start time, expiry, and permissions centrally. <strong>Allows immediate revocation of all issued SAS tokens</strong> simply by deleting or modifying the stored access policy.',
    tags: ['Azure Storage', 'SAS', 'Stored Access Policy', 'Security']
  },
  {
    id: 'az-104-fc-10',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Immutable Storage: Locked Time-Based Retention',
    hint: 'WORM compliance preventing deletion by anyone including subscription admins.',
    back: 'Provides Write Once, Read Many (WORM) storage. When a Time-Based Retention policy is <strong>Locked</strong>, blobs cannot be modified or deleted by anyone (including root/subscription owners) until retention expires, complying with SEC Rule 17a-4.',
    tags: ['Blob Storage', 'Immutable Storage', 'WORM', 'Compliance']
  },
  {
    id: 'az-104-fc-11',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Availability Sets: Fault Domains (FD) vs Update Domains (UD)',
    hint: 'Physical hardware/power/rack isolation vs platform maintenance reboot batches.',
    back: '• <strong>Fault Domains (FD)</strong>: separate physical server racks sharing power/switches (protects against unplanned hardware failure).<br>• <strong>Update Domains (UD)</strong>: rebooted one at a time during planned Azure platform maintenance.',
    tags: ['Virtual Machines', 'Availability Sets', 'Fault Domains', 'Update Domains']
  },
  {
    id: 'az-104-fc-12',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Orchestration Modes: Flexible vs Uniform',
    hint: 'Heterogeneous VM sizes, Spot/On-Demand mixing, individual VM APIs vs homogeneous.',
    back: '• <strong>Flexible</strong>: supports mixing VM sizes, mixing Spot and On-Demand, multi-AZ deployment, and standard individual VM APIs.<br>• <strong>Uniform</strong>: optimized for large-scale identical VM instances with identical configurations.',
    tags: ['VMSS', 'Flexible Orchestration', 'Compute', 'Auto Scaling']
  },
  {
    id: 'az-104-fc-13',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure App Service Deployment Slot Swap — slot-sticky settings',
    hint: 'Settings that stay with the slot (do NOT swap to production).',
    back: '<strong>Slot-sticky settings</strong> (do NOT swap): Custom domain names, SSL certificates, settings marked as "Deployment slot setting", Publishing endpoints, and VNet integration settings. Application code and unpinned settings swap automatically.',
    tags: ['App Service', 'Deployment Slots', 'Slot Swap', 'Compute']
  },
  {
    id: 'az-104-fc-14',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM Custom Script Extension — primary use case',
    hint: 'Automating post-deployment script execution on Windows (PowerShell) and Linux (Bash).',
    back: 'Downloads and executes scripts on Azure virtual machines during or after deployment for automated software installation, configuration changes, and initialization tasks without manual interactive login.',
    tags: ['Virtual Machines', 'Custom Script Extension', 'Automation']
  },
  {
    id: 'az-104-fc-15',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Instances (ACI) — when to choose over AKS',
    hint: 'Fast serverless single container tasks without cluster orchestration overhead.',
    back: 'Ideal for isolated, short-lived container tasks, batch jobs, and CI/CD build runners. Starts in seconds and bills per-second for CPU/memory consumed with <strong>zero VM or Kubernetes cluster management</strong>.',
    tags: ['ACI', 'Containers', 'Serverless', 'Compute']
  },
  {
    id: 'az-104-fc-16',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'VNet Peering Gateway Transit configuration requirements',
    hint: 'Allow gateway transit on Hub VNet + Use remote gateways on Spoke VNet.',
    back: 'To route Spoke VNet traffic through a VPN/ExpressRoute Gateway in a Hub VNet:<br>1. Enable <strong>"Allow gateway transit"</strong> on the Hub-to-Spoke peering.<br>2. Enable <strong>"Use remote virtual network\'s gateways"</strong> on the Spoke-to-Hub peering.',
    tags: ['VNet Peering', 'Gateway Transit', 'Networking', 'Hub and Spoke']
  },
  {
    id: 'az-104-fc-17',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Security Groups (ASGs) vs NSGs',
    hint: 'Logical workload grouping of NICs for simplified NSG rule definitions.',
    back: 'ASGs allow grouping virtual machine NICs based on application roles (e.g. <code>asg-web</code>, <code>asg-db</code>). Specifying ASGs as source/destination in NSG rules eliminates the need to update NSGs with individual IP addresses as VMs are added.',
    tags: ['NSG', 'ASG', 'Application Security Groups', 'Networking']
  },
  {
    id: 'az-104-fc-18',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'User-Defined Routes (UDRs) — Next Hop types',
    hint: 'Virtual appliance, Virtual network gateway, VNet, Internet, None.',
    back: 'Next Hop types in Azure Route Tables: <strong>Virtual appliance</strong> (NVA firewall IP), <strong>Virtual network gateway</strong> (VPN/ExpressRoute), <strong>Virtual network</strong> (local VNet routing), <strong>Internet</strong> (default internet egress), and <strong>None</strong> (blackhole/drop).',
    tags: ['UDR', 'Route Tables', 'Next Hop', 'Networking']
  },
  {
    id: 'az-104-fc-19',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Bastion — subnet naming and port requirements',
    hint: 'Dedicated AzureBastionSubnet (/26 min) with TLS 443 inbound.',
    back: 'Must be deployed in a dedicated subnet named <code>AzureBastionSubnet</code> (prefix minimum <code>/26</code>). Provides browser-based RDP/SSH access over HTTPS (port 443) directly from the Azure portal without public IPs on VMs.',
    tags: ['Azure Bastion', 'RDP', 'SSH', 'Networking', 'Security']
  },
  {
    id: 'az-104-fc-20',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Private Endpoints vs Service Endpoints',
    hint: 'Private IP assigned from subnet vs optimized route to public PaaS IP.',
    back: '• <strong>Private Endpoint</strong>: assigns a private IP address from your VNet subnet to the PaaS service (completely private, public access can be disabled).<br>• <strong>Service Endpoint</strong>: optimizes routing to public PaaS IP over Azure backbone.',
    tags: ['Private Endpoint', 'Private Link', 'Service Endpoints', 'Networking']
  },
  {
    id: 'az-104-fc-21',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Log Analytics and Kusto Query Language (KQL)',
    hint: 'Centralized log aggregation and analytical search engine.',
    back: 'Central repository for aggregating log and performance data from Azure resources, VMs, and applications. Uses <strong>Kusto Query Language (KQL)</strong> for high-performance log querying, transformation, and alerting.',
    tags: ['Azure Monitor', 'Log Analytics', 'KQL', 'Logging']
  },
  {
    id: 'az-104-fc-22',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Cross-Region Restore (CRR)',
    hint: 'Immediate VM restore in secondary paired region during primary outage.',
    back: 'Enabled on Recovery Services Vaults configured with GRS storage. Allows administrators to <strong>initiate VM and database restores in the secondary paired region at any time</strong> without waiting for Microsoft disaster declaration.',
    tags: ['Azure Backup', 'Cross-Region Restore', 'Recovery Services Vault']
  },
  {
    id: 'az-104-fc-23',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Site Recovery (ASR) Azure-to-Azure Vault Location Rule',
    hint: 'Recovery Services Vault must be created in the target disaster recovery region.',
    back: 'When setting up Azure VM disaster recovery with ASR, the <strong>Recovery Services Vault must be created in the target (secondary) region</strong>, not in the source region. ASR streams replication via a source cache storage account.',
    tags: ['Azure Site Recovery', 'ASR', 'Disaster Recovery', 'Replication']
  },
  {
    id: 'az-104-fc-24',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Network Watcher IP Flow Verify tool',
    hint: 'Testing 5-tuple packet flow to identify blocking NSG rule name.',
    back: 'Tests whether a packet is allowed or denied based on 5-tuple parameters (Source/Dest IP, Port, Protocol). If denied, reports the <strong>exact Network Security Group (NSG) and rule name</strong> that blocked the traffic.',
    tags: ['Network Watcher', 'IP Flow Verify', 'NSG', 'Troubleshooting']
  },
  {
    id: 'az-104-fc-25',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Metric Alerts and Action Groups',
    hint: 'Evaluating numerical metrics and executing email/SMS or runbook actions.',
    back: 'Metric Alert rules evaluate metrics (e.g. CPU > 85% for 5 mins). When triggered, they execute an <strong>Action Group</strong>, which sends notifications (Email/SMS/Push) and triggers automated actions (Automation runbooks, Functions, Logic Apps).',
    tags: ['Azure Monitor', 'Metric Alerts', 'Action Groups', 'Automation']
  }
];

export default AZURE_AZ104_FLASHCARDS_1;
