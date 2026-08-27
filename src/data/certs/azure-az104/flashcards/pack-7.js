export const AZURE_AZ104_FLASHCARDS_7 = [
  {
    id: 'az-104-fc-151',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Role-Assignable Groups setting',
    hint: '"Microsoft Entra roles can be assigned to the group" set to Yes at creation.',
    back: 'To assign Entra directory roles to a group, the group must be created with <strong>"Microsoft Entra roles can be assigned to the group" = Yes</strong> (immutable after creation). Modifying membership requires Privileged Role Administrator.',
    tags: ['Entra ID', 'Role-Assignable Groups', 'Security', 'Identity']
  },
  {
    id: 'az-104-fc-152',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Cost Management Scheduled Exports to Storage Accounts',
    hint: 'Automated daily/weekly CSV exports of raw billing data for Power BI.',
    back: 'Schedules recurring exports of detailed raw billing, usage, and tag data directly to an <strong>Azure Storage Account container</strong> on a daily, weekly, or monthly basis for custom analytics, FinOps pipelines, and Power BI dashboards.',
    tags: ['Cost Management', 'Cost Exports', 'Power BI', 'FinOps']
  },
  {
    id: 'az-104-fc-153',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure Policy `DeployIfNotExists` (DINE) effect workflow',
    hint: 'Deploys missing child extensions/resources via ARM template automatically.',
    back: 'Evaluates parent resource creation. If a specified related child resource/extension (e.g. Azure Monitor Agent or diagnostic setting) does not exist, Azure Policy <strong>automatically triggers an ARM template deployment using a managed identity</strong> to deploy it.',
    tags: ['Azure Policy', 'DeployIfNotExists', 'DINE', 'Governance', 'Automation']
  },
  {
    id: 'az-104-fc-154',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Microsoft Entra Diagnostic Settings streaming destinations',
    hint: 'Log Analytics workspace, Storage Account, Event Hubs, Partner solutions.',
    back: 'Streams Entra ID <code>AuditLogs</code>, <code>SignInLogs</code>, and <code>ProvisioningLogs</code> to: 1) <strong>Log Analytics workspace</strong>, 2) <strong>Azure Storage Account</strong> (long-term archive), 3) <strong>Event Hubs</strong> (SIEM integration).',
    tags: ['Entra ID', 'Diagnostic Settings', 'Audit Logs', 'SIEM']
  },
  {
    id: 'az-104-fc-155',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    front: 'Azure RBAC Least Privilege Scope Assignment Principle',
    hint: 'Management Group -> Subscription -> Resource Group -> Resource.',
    back: 'Always assign RBAC roles at the <strong>lowest required scope</strong> (e.g. directly on a specific Storage Account or VM resource) rather than subscription or resource group level to avoid granting broad permissions across unrelated resources.',
    tags: ['Azure RBAC', 'Scope', 'Least Privilege', 'Governance']
  },
  {
    id: 'az-104-fc-156',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Custom Domains with HTTPS requirement',
    hint: 'Must front storage account with Azure Front Door or Azure CDN for managed SSL.',
    back: 'Direct custom domain binding on native Azure Storage only supports unencrypted HTTP. To enable <strong>HTTPS on custom domains</strong>, you must front the storage account with <strong>Azure Front Door or Azure CDN</strong> for managed SSL/TLS certificates.',
    tags: ['Blob Storage', 'Custom Domain', 'HTTPS', 'Azure CDN']
  },
  {
    id: 'az-104-fc-157',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Legal Hold vs Time-Based Retention',
    hint: 'Indefinite tag-based hold vs fixed time retention window.',
    back: '• <strong>Legal Hold</strong>: stores WORM data in an immutable state for an <em>indefinite period</em> until authorized users explicitly clear all legal hold tags.<br>• <strong>Time-Based Retention</strong>: immutable for a defined duration (e.g. 7 years).',
    tags: ['Blob Storage', 'Legal Hold', 'Immutable Storage', 'Compliance']
  },
  {
    id: 'az-104-fc-158',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Storage Encryption Scopes — container and blob key isolation',
    hint: 'Managing separate CMK encryption keys per container for multi-tenant isolation.',
    back: 'Enables managing encryption with distinct keys (Microsoft-managed or Customer-Managed Keys in Key Vault) at the <strong>individual container or blob level</strong> within a single shared storage account, ideal for multi-tenant SaaS workloads.',
    tags: ['Azure Storage', 'Encryption Scopes', 'Key Vault', 'Security']
  },
  {
    id: 'az-104-fc-159',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure File Sync Hierarchy: Storage Sync Service -> Sync Groups',
    hint: 'Storage Sync Service contains Sync Groups; Sync Group has 1 Cloud Endpoint + Server Endpoints.',
    back: '<strong>Storage Sync Service</strong> (top-level resource) contains <strong>Sync Groups</strong> (sync topologies). Each Sync Group contains exactly <strong>1 Cloud Endpoint</strong> (Azure File share) and one or more <strong>Server Endpoints</strong> (Windows Server folders).',
    tags: ['Azure File Sync', 'Sync Groups', 'Cloud Endpoint', 'Server Endpoint']
  },
  {
    id: 'az-104-fc-160',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    front: 'Azure Blob Storage Early Deletion Fees (Cool vs Cold vs Archive)',
    hint: 'Cool: 30d min, Cold: 90d min, Archive: 180d min retention.',
    back: 'Deleting or moving blobs before the minimum retention window expires incurs an <strong>Early Deletion fee</strong> prorated for the remaining days:<br>• <strong>Cool</strong>: 30 days<br>• <strong>Cold</strong>: 90 days<br>• <strong>Archive</strong>: 180 days',
    tags: ['Blob Storage', 'Early Deletion', 'Archive Tier', 'Cost Optimization']
  },
  {
    id: 'az-104-fc-161',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Azure Monitor Agent (AMA) VM Extension names',
    hint: 'AzureMonitorWindowsAgent on Windows and AzureMonitorLinuxAgent on Linux.',
    back: 'Installed on VMs to collect guest OS telemetry governed by Data Collection Rules (DCRs). Extension names: <code>AzureMonitorWindowsAgent</code> (Windows) and <code>AzureMonitorLinuxAgent</code> (Linux).',
    tags: ['Virtual Machines', 'VM Extensions', 'Azure Monitor Agent', 'Monitoring']
  },
  {
    id: 'az-104-fc-162',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'VMSS Scale-In Policies: Default vs OldestVM vs NewestVM',
    hint: 'Controlling which VM instances are deleted when scale set scales down.',
    back: '• <strong>Default</strong>: balances across AZs/FDs, then terminates based on oldest/newest.<br>• <strong>OldestVM</strong>: deletes instances with the oldest creation timestamp.<br>• <strong>NewestVM</strong>: deletes instances with the newest creation timestamp.',
    tags: ['VMSS', 'Scale-In Policy', 'Auto Scaling', 'Compute']
  },
  {
    id: 'az-104-fc-163',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Inbound Restrictions: Service Tag + X-Azure-FDID Header',
    hint: 'Allowing AzureFrontDoor.Backend service tag while validating unique Front Door ID.',
    back: 'Restricts web app access strictly to your specific Azure Front Door: configure an Inbound Access Restriction rule permitting the <code>AzureFrontDoor.Backend</code> Service Tag with an HTTP header filter requiring your specific <code>X-Azure-FDID</code> ID.',
    tags: ['App Service', 'Access Restrictions', 'Front Door', 'Security']
  },
  {
    id: 'az-104-fc-164',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'Application-Consistent vs Crash-Consistent Azure VM Backups',
    hint: 'VSS/pre-post freeze scripts flushing memory vs point-in-time disk snapshot.',
    back: '• <strong>Application-Consistent</strong>: invokes VSS (Windows) or pre/post scripts (Linux) to flush pending I/O and commit database transactions before snapshot.<br>• <strong>Crash-Consistent</strong>: captures disk data as if VM lost power.',
    tags: ['Azure Backup', 'Application-Consistent', 'Virtual Machines', 'Data Protection']
  },
  {
    id: 'az-104-fc-165',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    front: 'App Service Deployment Center with GitHub Actions',
    hint: 'Automated workflow YAML generation triggered on git push to main.',
    back: 'Connecting an App Service web app to GitHub via the Deployment Center automatically generates and commits a GitHub Actions workflow (<code>.github/workflows/*.yml</code>) that builds and deploys updates on every git push.',
    tags: ['App Service', 'GitHub Actions', 'CI/CD', 'Deployment']
  },
  {
    id: 'az-104-fc-166',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Virtual Network Peering CIDR Overlap Constraint',
    hint: 'Peered virtual networks must have zero overlapping IP address ranges.',
    back: 'Azure strictly prohibits establishing VNet Peering connections between virtual networks that have overlapping IP address spaces. Peering creation fails immediately if any subnet or CIDR range collides.',
    tags: ['VNet Peering', 'Address Space', 'CIDR Overlap', 'Networking']
  },
  {
    id: 'az-104-fc-167',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure Load Balancer HTTP/HTTPS Health Probes vs TCP Probes',
    hint: 'HTTP probes check for HTTP 200 on /health; TCP probes only check open port.',
    back: '• <strong>HTTP/HTTPS Probe</strong>: sends GET request to a health endpoint (e.g. <code>/health</code>), requiring an <strong>HTTP 200 OK</strong> to pass (detects app crashes).<br>• <strong>TCP Probe</strong>: checks for 3-way handshake completion only.',
    tags: ['Azure Load Balancer', 'Health Probes', 'HTTP Probes', 'Networking']
  },
  {
    id: 'az-104-fc-168',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Application Gateway HTTP Header and URL Rewrite Rulesets',
    hint: 'Modifying request/response headers and rewriting URL paths dynamically.',
    back: 'Allows adding, modifying, or removing HTTP request and response headers (e.g. stripping <code>Server</code> header, setting HSTS) and dynamically rewriting URL paths (e.g. rewriting <code>/api/*</code> to <code>/v1/api/*</code>) on the fly.',
    tags: ['Application Gateway', 'URL Rewrite', 'HTTP Headers', 'Networking']
  },
  {
    id: 'az-104-fc-169',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Azure NSG `VirtualNetwork` Service Tag coverage',
    hint: 'Local VNet + all peered VNets + on-premises networks connected via VPN/ExpressRoute.',
    back: 'The <code>VirtualNetwork</code> service tag encompasses the local virtual network address space, all connected peered virtual networks, and on-premises hybrid networks connected via Azure VPN Gateway or ExpressRoute.',
    tags: ['NSG', 'Service Tags', 'VirtualNetwork', 'Networking']
  },
  {
    id: 'az-104-fc-170',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    front: 'Disabling BGP Route Propagation on Subnet Route Tables',
    hint: 'Setting "Propagate gateway routes" to No to isolate DMZ subnets.',
    back: 'In custom Route Tables, setting <strong>"Propagate gateway routes" to No</strong> prevents dynamic BGP routes advertised from on-premises (via ExpressRoute/VPN) from being injected into that subnet, isolating DMZs from on-premises traffic.',
    tags: ['Route Tables', 'BGP Propagation', 'DMZ', 'Networking']
  },
  {
    id: 'az-104-fc-171',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Log Analytics Basic Logs vs Analytics Logs table plans',
    hint: 'Basic Logs reduces ingestion cost by >70% for high-volume 30-day debug logs.',
    back: '• <strong>Basic Logs Plan</strong>: >70% discounted ingestion for high-volume debug logs; 30-day retention; basic search KQL.<br>• <strong>Analytics Logs Plan</strong>: full KQL analytics, alert rules, up to 730-day interactive retention.',
    tags: ['Log Analytics', 'Basic Logs', 'Cost Optimization', 'Monitoring']
  },
  {
    id: 'az-104-fc-172',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Action Groups ITSM Connectors and Secure Webhooks',
    hint: 'Pushing alert payloads directly to ServiceNow, Jira, PagerDuty for ticket creation.',
    back: 'Action Groups support <strong>ITSM receivers and Secure Webhooks</strong> to deliver structured JSON alert payloads directly to enterprise ticketing platforms (ServiceNow, Jira), automating automated incident ticket creation.',
    tags: ['Action Groups', 'ITSM', 'ServiceNow', 'Alerts', 'Monitoring']
  },
  {
    id: 'az-104-fc-173',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Resource Health "Platform Initiated" vs "User Initiated" events',
    hint: 'Azure infrastructure/hardware fault vs administrative user action.',
    back: '• <strong>Platform Initiated</strong>: downtime caused by Azure physical host hardware faults, power events, or scheduled host platform patching.<br>• <strong>User Initiated</strong>: downtime caused by user stopping/rebooting VM.',
    tags: ['Resource Health', 'Platform Initiated', 'Troubleshooting', 'Monitoring']
  },
  {
    id: 'az-104-fc-174',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Network Watcher VPN Troubleshoot tool capabilities',
    hint: 'Diagnosing S2S VPN Phase 1/2 IKE negotiation and gateway health.',
    back: 'Diagnoses Azure Virtual Network Gateways and Site-to-Site VPN connections, evaluating Phase 1 (IKE) and Phase 2 (IPsec) SA negotiation states, packet drops, and emitting detailed summary logs to Azure Storage.',
    tags: ['Network Watcher', 'VPN Troubleshoot', 'VPN Gateway', 'Troubleshooting']
  },
  {
    id: 'az-104-fc-175',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    front: 'Application Insights Live Metrics Stream — 1-second latency monitoring',
    hint: 'Real-time observation of requests, failures, CPU, and exceptions during deployments.',
    back: 'Provides instant <strong>1-second latency telemetry streaming</strong> of incoming requests, unhandled exceptions, and server CPU/memory, allowing developers to watch live software deployments and spot regressions immediately.',
    tags: ['Application Insights', 'Live Metrics', 'Real-Time', 'Monitoring']
  }
];

export default AZURE_AZ104_FLASHCARDS_7;
