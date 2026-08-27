export const AZURE_AZ104_FLASHCARDS_2 = [
  {
    id: 'az-104-fc-26',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Dynamic User Groups — membership rule syntax',
    hint: 'Attribute-based queries automatically populating group members.',
    back: 'Populates group membership automatically using attribute expressions (e.g. <code>(user.department -eq "Sales") -and (user.country -eq "US")</code>). Updates dynamically as user attributes change in Entra ID.',
    tags: ['Entra ID', 'Dynamic Groups', 'Automation', 'Identity']
  },
  {
    id: 'az-104-fc-27',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Management Group Hierarchy & RBAC Inheritance Scope',
    hint: 'Root Management Group -> Management Group -> Subscription -> Resource Group -> Resource.',
    back: 'Azure RBAC permissions flow strictly downwards: <strong>Root MG → Child MGs → Subscriptions → Resource Groups → Resources</strong>. Assigning roles at a Management Group automatically inherits down to all contained and future subscriptions.',
    tags: ['Management Groups', 'Azure RBAC', 'Inheritance', 'Governance']
  },
  {
    id: 'az-104-fc-28',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra PIM: Eligible vs Active Role Assignments',
    hint: 'On-demand JIT activation with approval vs permanent standing privilege.',
    back: '• <strong>Eligible</strong>: user has right to activate role just-in-time (JIT) for a time limit, requiring MFA, justification, and approver sign-off.<br>• <strong>Active</strong>: permanent standing role permissions without activation.',
    tags: ['Entra ID', 'PIM', 'JIT', 'Security', 'Governance']
  },
  {
    id: 'az-104-fc-29',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Cost Management Budgets: Actual vs Forecasted Thresholds',
    hint: 'Alerting on spend reached vs alerting on projected end-of-month spend.',
    back: '• <strong>Actual</strong>: triggers when actual cumulative spend breaches a percentage threshold (e.g. 80%).<br>• <strong>Forecasted</strong>: triggers when Azure predictive algorithms determine spending will breach 100% by month-end.',
    tags: ['Cost Management', 'Budgets', 'FinOps', 'Governance']
  },
  {
    id: 'az-104-fc-30',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy Initiatives (Policy Sets) — definition and benefit',
    hint: 'Grouping multiple policy definitions toward a single compliance standard.',
    back: 'A collection of individual Azure Policy definitions grouped together. Assigning an initiative allows enforcing and tracking compliance for comprehensive standards (e.g. CIS Benchmarks, ISO 27001) in a single unified assignment.',
    tags: ['Azure Policy', 'Policy Initiative', 'Compliance', 'Governance']
  },
  {
    id: 'az-104-fc-31',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Archive Access Tier — rehydration times',
    hint: 'Lowest storage cost with Standard (up to 15h) vs High priority (<1h) rehydration.',
    back: 'Lowest capacity cost for rarely accessed data (>180 days retention). Blobs are offline and must be <strong>rehydrated</strong> to Hot/Cool before reading (Standard priority: up to 15 hours; High priority: under 1 hour).',
    tags: ['Blob Storage', 'Archive Tier', 'Rehydration', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-32',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Restricting Storage Accounts to VNet Subnets with Service Endpoints',
    hint: 'Enable Microsoft.Storage on subnet + allow selected networks on storage firewall.',
    back: '1. Enable the <code>Microsoft.Storage</code> Service Endpoint on the target virtual network subnet.<br>2. Set the Storage Account firewall to "Enabled from selected virtual networks and IP addresses" and add the subnet.',
    tags: ['Storage Firewall', 'Service Endpoints', 'Networking', 'Security']
  },
  {
    id: 'az-104-fc-33',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Object Replication Prerequisites',
    hint: 'Blob Versioning and Blob Change Feed must be enabled on accounts.',
    back: 'Asynchronously replicates block blobs across accounts and regions. Prerequisites: <strong>Blob Versioning</strong> must be enabled on both source & destination, and <strong>Blob Change Feed</strong> must be enabled on the source storage account.',
    tags: ['Blob Storage', 'Object Replication', 'Versioning', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-34',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Customer-Initiated Storage Account Failover (GRS/GZRS) consequence',
    hint: 'Secondary region becomes primary and storage type converts to LRS.',
    back: 'Updates DNS to switch primary read/write endpoint to the secondary region. Breaks replication to the original primary, so the storage account is <strong>automatically converted to Locally Redundant Storage (LRS)</strong> in the new region.',
    tags: ['Azure Storage', 'Account Failover', 'GRS', 'Disaster Recovery']
  },
  {
    id: 'az-104-fc-35',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'AzCopy v10 — core commands and capabilities',
    hint: 'High-performance CLI for Blob/File with azcopy copy and azcopy sync.',
    back: 'Command-line tool for high-speed data movement. Key commands: <code>azcopy copy</code> (transfers files/directories) and <code>azcopy sync</code> (directional delta synchronization comparing modified timestamps/hashes).',
    tags: ['AzCopy', 'Azure Storage', 'Data Migration', 'CLI']
  },
  {
    id: 'az-104-fc-36',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM B-Series (Burstable) — CPU credit model',
    hint: 'Low baseline CPU accumulating credits to burst up to 100% when busy.',
    back: 'Cost-effective VM size family designed for workloads with low baseline CPU usage (dev/test, small web servers). Accumulates CPU credits when idle below baseline, using credits to burst up to 100% CPU when load spikes.',
    tags: ['Virtual Machines', 'B-Series', 'Sizing', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-37',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure VM Uptime SLAs: Availability Zones vs Availability Sets',
    hint: '99.99% across Availability Zones vs 99.95% across Availability Sets.',
    back: '• <strong>Availability Zones (Multi-Zone)</strong>: 99.99% SLA (protects against datacenter loss).<br>• <strong>Availability Sets (Multi-VM)</strong>: 99.95% SLA (protects against rack/host hardware failure inside 1 datacenter).',
    tags: ['Availability Zones', 'Availability Sets', 'SLA', 'Compute']
  },
  {
    id: 'az-104-fc-38',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Proximity Placement Groups (PPGs) — when and why to use them',
    hint: 'Physically colocating VMs within the same datacenter for lowest network latency.',
    back: 'Logical grouping construct that guarantees VMs, Availability Sets, or VMSS instances are physically located in close physical proximity within the same datacenter to achieve <strong>sub-millisecond inter-VM network latency</strong>.',
    tags: ['Proximity Placement Groups', 'PPG', 'Low Latency', 'Compute']
  },
  {
    id: 'az-104-fc-39',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service VNet Integration vs Private Endpoints — traffic direction',
    hint: 'VNet Integration is outbound from App Service; Private Endpoints are inbound to App Service.',
    back: '• <strong>VNet Integration</strong>: allows App Service web app to make <em>outbound</em> calls into private VNet resources.<br>• <strong>Private Endpoint</strong>: allows private VNet clients to make <em>inbound</em> calls to the web app privately.',
    tags: ['App Service', 'VNet Integration', 'Private Endpoints', 'Networking']
  },
  {
    id: 'az-104-fc-40',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Container Apps (ACA) — key architecture features',
    hint: 'Serverless microservices with built-in KEDA autoscaling and scale-to-zero.',
    back: 'Fully managed serverless container platform built on Kubernetes. Features built-in <strong>KEDA event-driven autoscaling, HTTP traffic scaling, and scale-to-zero</strong> with zero Kubernetes cluster management.',
    tags: ['Container Apps', 'ACA', 'Serverless', 'KEDA', 'Compute']
  },
  {
    id: 'az-104-fc-41',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Network Security Group (NSG) Rule Processing Order',
    hint: 'Evaluated from lowest number (100) to highest (4096); first match wins.',
    back: 'Rules are processed sequentially in order of <strong>Priority (100 to 4096)</strong>. Lower numbers have higher precedence. Once incoming/outgoing traffic matches a rule\'s 5-tuple, processing stops immediately and that action is taken.',
    tags: ['NSG', 'Rule Priority', 'Networking', 'Security']
  },
  {
    id: 'az-104-fc-42',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Standard Load Balancer vs Basic Load Balancer',
    hint: 'Standard supports AZs, 1000 backend instances, secure by default (requires NSG).',
    back: '<strong>Standard Load Balancer</strong>: supports Availability Zones (zone-redundant frontends), backend pool up to 1,000 instances, and is secure by default (requires NSG). Basic LB is legacy, max 300 instances, no AZ support.',
    tags: ['Azure Load Balancer', 'Standard Load Balancer', 'Networking']
  },
  {
    id: 'az-104-fc-43',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway URL Path-Based Routing & SSL Termination',
    hint: 'Layer 7 load balancer routing by URL path and offloading TLS decryption.',
    back: 'Operates at Layer 7 (HTTP/HTTPS). Inspects incoming request URLs to route traffic to specific backend pools based on path rules (e.g. <code>/images/*</code> vs <code>/video/*</code>) and terminates SSL/TLS at the gateway.',
    tags: ['Application Gateway', 'Layer 7', 'Path-Based Routing', 'SSL Offloading']
  },
  {
    id: 'az-104-fc-44',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Private DNS Zone Virtual Network Auto-Registration',
    hint: 'Automatically creates and updates VM private IP DNS A records on VM launch.',
    back: 'When <strong>Auto-registration</strong> is enabled on a Virtual Network Link to a Private DNS Zone, Azure automatically creates, updates, and deletes DNS A records for virtual machines as they are provisioned or deleted in that VNet.',
    tags: ['Private DNS', 'Auto-Registration', 'DNS', 'Networking']
  },
  {
    id: 'az-104-fc-45',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure VPN Gateway: Route-Based vs Policy-Based Gateway capabilities',
    hint: 'Route-based supports IKEv2, P2S, multi-site, and BGP; policy-based is IKEv1 static only.',
    back: '<strong>Route-based</strong>: supports IKEv2, Point-to-Site (P2S) VPNs, Multi-Site S2S, VNet-to-VNet transit, and dynamic BGP routing. <strong>Policy-based</strong>: legacy IKEv1 static single-tunnel S2S only.',
    tags: ['VPN Gateway', 'Route-Based', 'Networking', 'Hybrid']
  },
  {
    id: 'az-104-fc-46',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Network Watcher Connection Monitor capabilities',
    hint: 'Continuous end-to-end probing of latency, packet loss, and hop topology.',
    back: 'Provides continuous automated connectivity monitoring across Azure VMs, multi-region architectures, and hybrid on-premises endpoints over TCP, ICMP, and HTTP, tracking latency, packet loss, and network hop topology.',
    tags: ['Network Watcher', 'Connection Monitor', 'Monitoring', 'Hybrid']
  },
  {
    id: 'az-104-fc-47',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Monitor Log Search Alerts — evaluation mechanism',
    hint: 'Scheduled KQL queries checking row count thresholds in Log Analytics.',
    back: 'Executes a KQL query on a recurring schedule against a Log Analytics workspace. Evaluates the resulting dataset against a threshold (e.g. number of rows > 10 in last 15 minutes) to trigger Action Groups.',
    tags: ['Azure Monitor', 'Log Search Alerts', 'KQL', 'Monitoring']
  },
  {
    id: 'az-104-fc-48',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Application Insights Standard Availability Web Tests',
    hint: 'Synthetic HTTP ping tests from multiple global geographical locations.',
    back: 'Sends recurring synthetic HTTP/HTTPS requests to public URLs from multiple geographic test locations worldwide to monitor availability, HTTP response codes, SSL certificates, and response latencies.',
    tags: ['Application Insights', 'Availability Tests', 'Synthetic Monitoring']
  },
  {
    id: 'az-104-fc-49',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Backup Multi-User Authorization (MUA) with Resource Guard',
    hint: 'Requiring secondary security admin authorization for destructive backup operations.',
    back: 'Protects critical backups against ransomware/rogue admins by associating an <strong>Azure Resource Guard</strong> resource with the vault, requiring authorization from a separate security officer before deleting backups or disabling soft delete.',
    tags: ['Azure Backup', 'MUA', 'Resource Guard', 'Security']
  },
  {
    id: 'az-104-fc-50',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Azure Activity Log — what events does it capture?',
    hint: 'Subscription-level control plane operations (create, update, delete).',
    back: 'Records all management plane (control plane) write, update, and delete actions performed on Azure resources across subscriptions, including caller identity (user/SPN), timestamp, operation name, status, and source IP address.',
    tags: ['Activity Log', 'Azure Monitor', 'Audit', 'Governance']
  }
];

export default AZURE_AZ104_FLASHCARDS_2;
