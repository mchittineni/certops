export const AZURE_AZ104_QUESTIONS_5 = [
  {
    id: "az-104-101",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Managed Identities: System-Assigned vs User-Assigned",
    scenario: "An application running on an Azure Virtual Machine needs to retrieve database connection secrets from Azure Key Vault without storing credentials or passwords in application code or configuration files.",
    question: "Which Microsoft Entra identity mechanism should be configured on the virtual machine?",
    options: [
      { id: 'A', text: "Configure an Azure Bastion host." },
      { id: 'B', text: "Enable a System-assigned Managed Identity on the VM and grant it Key Vault Secrets User permissions in Key Vault." },
      { id: 'C', text: "Create an Entra ID Service Principal and hardcode its client secret in the application config." },
      { id: 'D', text: "Assign the Owner role to the VM administrator." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "System-assigned Managed Identities eliminate the need for developers to manage credentials. The identity is tied directly to the Azure resource's lifecycle (the VM), and Azure automatically handles token acquisition and rotation with Microsoft Entra ID to authenticate securely against Azure Key Vault, Azure SQL, or Storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Managed Identity", "Key Vault", "Security", "Entra ID"]
  },
  {
    id: "az-104-102",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Cost Management: Cost Allocation Rules for Shared Costs",
    scenario: "An enterprise maintains a central shared services subscription containing common networking components, ExpressRoute gateways, and firewall appliances. The finance department needs to automatically split and reallocate these shared infrastructure costs proportionally across three departmental subscriptions (Sales, Marketing, Engineering).",
    question: "Which Azure Cost Management feature automatically redistributes shared cloud costs across targets?",
    options: [
      { id: 'A', text: "Azure Cost Allocation rules in Microsoft Cost Management." },
      { id: 'B', text: "Azure Resource Locks." },
      { id: 'C', text: "Azure Advisor cost alerts." },
      { id: 'D', text: "Azure Policy with Modify effect." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cost Allocation rules in Microsoft Cost Management allow organizations to automatically split, reallocate, and distribute shared costs (such as central hub networks, firewalls, or shared clusters) across multiple subscriptions, resource groups, or tags based on fixed percentages or proportional consumption.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/allocate-costs",
    tags: ["Cost Management", "Cost Allocation", "FinOps", "Governance"]
  },
  {
    id: "az-104-103",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom Azure Policy Definitions with Parameters and Logical Operators",
    scenario: "An organization needs to create a custom Azure Policy definition that audits any virtual machine deployment where the VM size is NOT in an allowed list of parameter values (e.g. `Standard_B2s`, `Standard_D2s_v5`), but explicitly ignores (does not audit) VMs deployed in resource groups tagged with `Environment = Benchmark`.",
    question: "How should the policy rule JSON structure be formulated?",
    options: [
      { id: 'A', text: "Create an Azure RBAC role with NotActions on VM SKU." },
      { id: 'B', text: "Use an `allOf` condition with `field: \"Microsoft.Compute/virtualMachines/sku.name\", notIn: \"[parameters('allowedSizes')]\"` and `field: \"tags.Environment\", notEquals: \"Benchmark\"`, with an `Audit` effect." },
      { id: 'C', text: "Deploy an Azure Resource Lock on the benchmark resource group." },
      { id: 'D', text: "Use a `Deny` effect with `anyOf` on all subscriptions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Policy definitions use logical operators (`allOf`, `anyOf`, `not`) to evaluate field conditions against parameters. An `allOf` block requiring that the VM SKU is `notIn` the allowed sizes list AND the `tags.Environment` is `notEquals` to \"Benchmark\" correctly scopes the audit condition to non-compliant VMs outside the benchmark environment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/definition-structure",
    tags: ["Azure Policy", "Policy Definition", "Logical Operators", "Governance"]
  },
  {
    id: "az-104-104",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Company Branding and Sign-in Experience",
    scenario: "An administrator needs to customize the Microsoft Entra sign-in page with the corporate logo, custom background image, and sign-in page text for company employees.",
    question: "Which Microsoft Entra feature configures custom organizational login page branding?",
    options: [
      { id: 'A', text: "Azure Resource Manager templates." },
      { id: 'B', text: "Azure Front Door web designer." },
      { id: 'C', text: "Company Branding in the Microsoft Entra admin center." },
      { id: 'D', text: "Azure App Service Custom Domains." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Company Branding in Microsoft Entra ID allows tenant administrators to customize the visual appearance of the sign-in page, adding custom background images, corporate logos, sign-in hints, and custom footer links to provide a consistent user experience.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/how-to-customize-branding",
    tags: ["Entra ID", "Company Branding", "Identity", "Governance"]
  },
  {
    id: "az-104-105",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Subscriptions: Transferring Billing Ownership Between Entra Tenants",
    scenario: "A company acquires a subsidiary with an existing Azure subscription. The administrator needs to transfer the billing ownership and associate the subscription with the parent company's Microsoft Entra ID tenant.",
    question: "What happens to existing Azure RBAC role assignments when a subscription is transferred to a new Microsoft Entra tenant?",
    options: [
      { id: 'A', text: "All RBAC role assignments are automatically migrated to the new tenant." },
      { id: 'B', text: "All existing Azure RBAC role assignments and user permissions are permanently removed." },
      { id: 'C', text: "All virtual machines and storage accounts are permanently deleted." },
      { id: 'D', text: "The subscription enters a read-only state for 30 days." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When you transfer an Azure subscription to a different Microsoft Entra directory (tenant), all existing Azure RBAC role assignments, user access, and system-assigned managed identities are permanently removed because security principals do not exist across different tenant boundaries. The resources themselves remain intact, but permissions must be reassigned in the target tenant.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/billing-subscription-transfer",
    tags: ["Subscription Transfer", "Entra ID", "RBAC", "Governance"]
  },
  {
    id: "az-104-106",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Key Rotation with Secondary Access Keys",
    scenario: "A company policy mandates rotating Azure Storage Account master access keys every 90 days. Multiple production applications currently connect using `key1`.",
    question: "How should the administrator rotate the storage keys with zero application downtime?",
    options: [
      { id: 'A', text: "Delete the storage account and recreate it." },
      { id: 'B', text: "Convert the storage account to LRS." },
      { id: 'C', text: "Update application connection strings to use `key2`, regenerate `key1`, update applications to use the new `key1`, and then regenerate `key2`." },
      { id: 'D', text: "Regenerate both `key1` and `key2` simultaneously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Storage accounts provide two 512-bit access keys (`key1` and `key2`) to enable zero-downtime key rotation: 1) Point applications to the secondary key (`key2`), 2) Regenerate the primary key (`key1`), 3) Point applications back to the new `key1`, and 4) Regenerate the secondary key (`key2`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage#manually-rotate-access-keys",
    tags: ["Azure Storage", "Key Rotation", "Access Keys", "Security"]
  },
  {
    id: "az-104-107",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Backup Snapshot Retention and Instant Restore",
    scenario: "An Azure file share is backed up daily to an Azure Recovery Services Vault. An administrator needs to restore a 200 GB folder that was deleted 2 hours ago.",
    question: "How does Azure Backup for Azure Files achieve near-instantaneous folder restores?",
    options: [
      { id: 'A', text: "Azure Backup downloads the backup archive from cold secondary storage." },
      { id: 'B', text: "Azure Backup requires creating a new storage account." },
      { id: 'C', text: "Azure Backup restores directly from the local Azure File Share snapshot without transferring data over the network." },
      { id: 'D', text: "Azure Backup converts the file share into a VM managed disk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Backup for Azure Files orchestrates native Azure File share snapshots located directly within the storage account. Because snapshots live alongside the primary data, restores operate instantly as local pointer reversions without transferring large files across the network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/azure-file-share-restore-overview",
    tags: ["Azure Files", "Azure Backup", "Snapshots", "Data Recovery"]
  },
  {
    id: "az-104-108",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Mover for Automated Hybrid Cloud Migrations",
    scenario: "An enterprise is migrating 100 TB of file shares from multiple on-premises NFS storage servers to Azure Blob Storage and Azure Files. The migration must run continuously in the background, syncing incremental delta changes over several weeks before final cutover.",
    question: "Which fully managed hybrid migration service orchestrates distributed agent migration jobs to Azure Storage?",
    options: [
      { id: 'A', text: "Azure Data Box Heavy." },
      { id: 'B', text: "Azure Bastion." },
      { id: 'C', text: "Azure Storage Mover." },
      { id: 'D', text: "Azure Import/Export Service." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Storage Mover is a fully managed cloud migration service that automates migrating files and folders from on-premises NFS/SMB storage to Azure Storage containers and file shares using lightweight virtual machine migration agents, with centralized cloud orchestration and incremental syncing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage-mover/overview",
    tags: ["Storage Mover", "Data Migration", "NFS", "Storage"]
  },
  {
    id: "az-104-109",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Configuring Blob Index Tags for Metadata Filtering and Search",
    scenario: "An e-commerce company stores millions of product images in a single Azure Blob Storage container. The application needs to categorize blobs by `Category = Shoes` and `Status = Active` and retrieve all matching blobs using SQL-like key-value index queries without scanning all blobs.",
    question: "Which Azure Blob Storage feature allows indexing and querying blob metadata with key-value tags?",
    options: [
      { id: 'A', text: "Azure Queue Storage." },
      { id: 'B', text: "Azure Blob Index Tags." },
      { id: 'C', text: "Blob Metadata properties only." },
      { id: 'D', text: "Blob Versioning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Blob Index Tags categorize data in storage accounts using key-value tag attributes. Azure automatically indexes these tags and exposes a search API (`FindBlobsByTags`) that allows querying blobs using SQL-like filter queries across containers without expensive client-side container scanning.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs",
    tags: ["Blob Storage", "Blob Index Tags", "Metadata", "Search"]
  },
  {
    id: "az-104-110",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Blob Rehydration Priority: Standard vs High Priority",
    scenario: "A critical legal discovery request requires restoring 50 GB of archived PDF documents from the Azure Blob Archive tier to the Hot tier as quickly as possible (in under 1 hour).",
    question: "Which rehydration priority setting should the administrator select?",
    options: [
      { id: 'A', text: "High priority rehydration." },
      { id: 'B', text: "Cold tier transition." },
      { id: 'C', text: "Standard priority rehydration." },
      { id: 'D', text: "Soft Delete undelete." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When rehydrating a blob from the Archive tier, **High priority** rehydration prioritizes the request ahead of standard queues, typically retrieving blobs smaller than 10 GB in under 1 hour (at a higher rehydration cost). Standard priority rehydration can take up to 15 hours.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview#rehydration-priority",
    tags: ["Blob Storage", "Rehydration", "Archive Tier", "Storage"]
  },
  {
    id: "az-104-111",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Attaching and Initializing Managed Data Disks on Azure Virtual Machines",
    scenario: "An administrator attaches a new 1 TB Premium SSD Managed Data Disk to a running Windows Server Azure Virtual Machine. After attaching the disk in the Azure portal, the drive letter does not appear in Windows File Explorer.",
    question: "Which administrative step must be performed inside the Windows guest operating system?",
    options: [
      { id: 'A', text: "Open Disk Management, bring the disk Online, Initialize the disk (GPT), create a New Simple Volume, and format with NTFS." },
      { id: 'B', text: "Restart the virtual machine from the Azure portal." },
      { id: 'C', text: "Enable Azure Disk Encryption." },
      { id: 'D', text: "Recreate the VM Network Interface." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attaching a new managed disk in the Azure portal makes the raw block storage visible to the VM hardware layer. Inside the guest OS (Windows Disk Management or Linux `fdisk`/`mkfs`), the disk must be brought online, initialized with a partition table (GPT/MBR), partitioned into a volume, and formatted with a filesystem (NTFS/ReFS/ext4).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/attach-managed-disk-portal#initialize-a-new-data-disk",
    tags: ["Virtual Machines", "Managed Disks", "Disk Management", "Compute"]
  },
  {
    id: "az-104-112",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Spot Instances for Cost Optimization and Eviction Policies",
    scenario: "An organization runs batch media rendering tasks on Azure Virtual Machines. The workload is fault-tolerant and can tolerate VM termination with 30 seconds notice when Azure requires the compute capacity back.",
    question: "Which VM purchasing model and eviction policy delivers up to 90% cost savings for interruptible compute?",
    options: [
      { id: 'A', text: "3-year Reserved VM Instances." },
      { id: 'B', text: "Azure Spot Virtual Machines with the Eviction Policy set to `Deallocate` (or `Delete`)." },
      { id: 'C', text: "Dedicated Hosts." },
      { id: 'D', text: "Pay-As-You-Go Standard Instances." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Spot Virtual Machines allow taking advantage of unused Azure compute capacity at significant discounts (up to 90% off Pay-As-You-Go rates). When Azure needs the capacity back, the infrastructure gives a 30-second eviction notice and evicts the VM according to the chosen eviction policy (`Deallocate` or `Delete`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms",
    tags: ["Spot VMs", "Cost Optimization", "FinOps", "Compute"]
  },
  {
    id: "az-104-113",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Virtual Machine Run Command for Remote Troubleshooting",
    scenario: "An administrator is locked out of a Linux virtual machine because an incorrect firewall rule blocked SSH port 22 inside the guest OS. The VM has no public IP address, and the administrator cannot connect via SSH or Bastion.",
    question: "Which Azure feature allows executing a shell script inside the VM to reset firewall rules without requiring network connectivity to port 22?",
    options: [
      { id: 'A', text: "Azure Key Vault secret retrieval." },
      { id: 'B', text: "Azure Network Watcher IP Flow Verify." },
      { id: 'C', text: "Azure Virtual Machine Run Command (using `RunShellScript`)." },
      { id: 'D', text: "Azure Bastion RDP session." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Virtual Machine Run Command feature uses the Azure VM agent to execute PowerShell (Windows) or shell scripts (Linux) directly inside the guest OS via the Azure control plane. It operates even when guest OS network firewalls block all inbound ports, making it the primary recovery tool for locked-out VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Virtual Machines", "Run Command", "Troubleshooting", "Automation"]
  },
  {
    id: "az-104-114",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Diagnostics and Auto-Heal Rules",
    scenario: "A web application on Azure App Service occasionally experiences memory leaks that cause high memory consumption (>90% RAM) and slow response times. The operations team wants App Service to automatically restart the application process whenever memory consumption exceeds 1.5 GB for 5 minutes.",
    question: "Which Azure App Service feature configures automated process restarts based on error or memory conditions?",
    options: [
      { id: 'A', text: "App Service Custom Script extension." },
      { id: 'B', text: "App Service Auto-Heal rules in Diagnose and Solve Problems." },
      { id: 'C', text: "Azure Policy with Modify effect." },
      { id: 'D', text: "Azure Resource Locks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Auto-Heal is a feature of Azure App Service (configured under Diagnose and Solve Problems) that allows defining rule triggers (e.g. Request count, Slow requests, Memory limit, or HTTP status codes) and taking automated actions (Recycle process, Log event, or Custom executable) to maintain application health automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-diagnostics",
    tags: ["App Service", "Auto-Heal", "Diagnostics", "Compute"]
  },
  {
    id: "az-104-115",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Registry (ACR) Image Replication and Tasks",
    scenario: "A development team builds Docker images in a CI/CD pipeline. Images must be stored in a private container registry in East US and automatically replicated to West Europe and East Asia for low-latency regional deployments.",
    question: "Which Azure Container Registry tier supports Geo-Replication across multiple regions?",
    options: [
      { id: 'A', text: "Azure Storage General-Purpose v2." },
      { id: 'B', text: "Azure Container Registry Premium SKU." },
      { id: 'C', text: "Azure Container Registry Standard SKU." },
      { id: 'D', text: "Azure Container Registry Basic SKU." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Container Registry (ACR) Premium SKU includes enterprise capabilities: **Geo-Replication** (automatically synchronizing container images across multiple Azure regions under a single registry URL), Private Endpoints (Private Link), customer-managed keys, and content trust.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
    tags: ["ACR", "Container Registry", "Geo-Replication", "Containers"]
  },
  {
    id: "az-104-116",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Service Endpoints vs Route Tables",
    scenario: "A company enables the `Microsoft.Sql` Service Endpoint on a private database subnet in Azure. Virtual machines in the subnet connect to an Azure SQL Database logical server.",
    question: "How does Azure route traffic between the subnet and the Azure SQL Database after enabling the Service Endpoint?",
    options: [
      { id: 'A', text: "Traffic is routed over the public internet through a NAT Gateway." },
      { id: 'B', text: "Traffic is dropped unless an ExpressRoute circuit is attached." },
      { id: 'C', text: "Traffic requires an Azure Bastion host." },
      { id: 'D', text: "Azure automatically optimizes routing to send traffic directly over the Microsoft Azure private backbone network to the SQL service, preserving source subnet private IP addresses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enabling a Service Endpoint on a subnet updates Azure internal routing to direct traffic bound for the Azure PaaS service (e.g. `Microsoft.Sql`) directly across the secure Microsoft Azure backbone network, bypassing default internet gateways and presenting the subnet's private IP identity to the PaaS firewall.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Service Endpoints", "Azure SQL", "Networking", "Security"]
  },
  {
    id: "az-104-117",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway Web Application Firewall (WAF) Modes: Detection vs Prevention",
    scenario: "An enterprise deploys an Azure Application Gateway with WAF v2 enabled to protect a public web application against OWASP Top 10 vulnerabilities (such as SQL Injection and Cross-Site Scripting). The security team wants to test the WAF rules in production to observe potential matches without blocking any legitimate user traffic.",
    question: "Which WAF mode should be selected during initial testing?",
    options: [
      { id: 'A', text: "`Disabled` mode." },
      { id: 'B', text: "`Detection` mode." },
      { id: 'C', text: "`Prevention` mode." },
      { id: 'D', text: "`AuditIfNotExists` mode." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In `Detection` mode, Azure Web Application Firewall (WAF) evaluates incoming HTTP requests against enabled rule sets and logs matches, threats, and anomalies to diagnostic logs (Log Analytics) without blocking or dropping any traffic. In contrast, `Prevention` mode immediately blocks matched malicious requests with an HTTP 403 Forbidden error.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview#waf-modes",
    tags: ["Application Gateway", "WAF", "Detection Mode", "Security", "Networking"]
  },
  {
    id: "az-104-118",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Load Balancer Outbound Rules and Source Network Address Translation (SNAT)",
    scenario: "A backend pool of 100 virtual machines sits behind an internal Standard Load Balancer. The VMs need dedicated outbound internet connectivity with a pool of 4 public IP addresses to avoid SNAT port exhaustion, with full control over outbound port allocation per VM.",
    question: "Which Azure Standard Load Balancer component configures explicit egress SNAT rules?",
    options: [
      { id: 'A', text: "Azure Traffic Manager." },
      { id: 'B', text: "Standard Load Balancer Outbound Rules." },
      { id: 'C', text: "Inbound NAT Rules." },
      { id: 'D', text: "Load Balancing Rules with default outbound." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Standard Load Balancer Outbound Rules provide explicit, declarative configuration of outbound SNAT for backend pool VMs. Outbound rules allow specifying dedicated public frontend IPs, idle timeout values, and custom allocated SNAT ports per instance, eliminating reliance on implicit default outbound access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/outbound-rules",
    tags: ["Load Balancer", "Outbound Rules", "SNAT", "Networking"]
  },
  {
    id: "az-104-119",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Resolver for Hybrid DNS Resolution",
    scenario: "An organization operates on-premises Active Directory DNS servers and Azure Virtual Networks. On-premises client machines need to resolve Azure Private DNS zone names (`*.privatelink.database.windows.net`), while Azure VMs need to resolve on-premises hostnames (`*.corp.contoso.com`).",
    question: "Which fully managed Azure service bridges hybrid DNS resolution between on-premises and Azure without managing custom IaaS DNS VM forwarders?",
    options: [
      { id: 'A', text: "Azure DNS Private Resolver (with Inbound and Outbound Endpoints)." },
      { id: 'B', text: "Azure Network Watcher." },
      { id: 'C', text: "Azure Bastion." },
      { id: 'D', text: "Azure Public DNS Zones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure DNS Private Resolver is a fully managed cloud service that enables hybrid DNS resolution. It provides **Inbound Endpoints** (allowing on-premises DNS to resolve Azure Private DNS zones) and **Outbound Endpoints with DNS Forwarding Rulesets** (allowing Azure VNets to resolve on-premises DNS domains) with high availability and zero VM management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview",
    tags: ["DNS Private Resolver", "Hybrid DNS", "Private DNS", "Networking"]
  },
  {
    id: "az-104-120",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion SKU Tiers: Basic vs Standard vs Premium Features",
    scenario: "An enterprise requires connecting to Azure virtual machines via Azure Bastion using native desktop RDP clients (such as Microsoft Remote Desktop Client `mstsc.exe`) and SSH keys over the Azure CLI, rather than using a web browser.",
    question: "Which Azure Bastion SKU tier is required to support Native Client connections?",
    options: [
      { id: 'A', text: "Free Tier." },
      { id: 'B', text: "Basic SKU." },
      { id: 'C', text: "Developer SKU only." },
      { id: 'D', text: "Standard SKU (or Premium SKU)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The **Standard SKU** (and Premium SKU) of Azure Bastion supports advanced features including: **Native Client Support** (connecting via `az network bastion rdp/ssh` with native `mstsc` / SSH clients), IP-based connections, host scaling (2–50 instances), and shareable links. Basic SKU only supports browser-based portal sessions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview#sku",
    tags: ["Azure Bastion", "Standard SKU", "Native Client", "Security", "Networking"]
  },
  {
    id: "az-104-121",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Writing Advanced KQL Queries in Azure Log Analytics for Error Summaries",
    scenario: "An administrator needs to write a KQL query in Azure Log Analytics that scans the `Heartbeat` table for virtual machines, identifies any VM that has not reported a heartbeat within the last 10 minutes, and summarizes results by Computer name.",
    question: "Which KQL query correctly detects missing VM heartbeats?",
    options: [
      { id: 'A', text: "`Syslog | take 10`" },
      { id: 'B', text: "`Heartbeat | where TimeGenerated > ago(10m) | project Computer`" },
      { id: 'C', text: "`Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(10m)`" },
      { id: 'D', text: "`Event | where EventID == 1000`" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The query `Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(10m)` groups heartbeat events by Computer, finds the most recent heartbeat timestamp for each machine, and filters for computers where the latest timestamp is older than 10 minutes ago, identifying offline/unresponsive VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["KQL", "Log Analytics", "Azure Monitor", "Heartbeat"]
  },
  {
    id: "az-104-122",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Enhanced Policy for Instant VM Backups and Multiple Daily Backups",
    scenario: "An enterprise database running on Azure IaaS VMs requires multiple application-consistent backups per day (every 4 hours) with instant snapshot retention for up to 30 days and support for Ultra Disks and Premium SSD v2.",
    question: "Which Azure VM Backup policy type supports multiple daily backups and instant snapshot retention up to 30 days?",
    options: [
      { id: 'A', text: "Azure File Sync." },
      { id: 'B', text: "Standard Backup Policy (Legacy)." },
      { id: 'C', text: "Enhanced Backup Policy." },
      { id: 'D', text: "Blob Lifecycle Policy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enhanced Backup Policies in Azure Backup support modern IaaS VM requirements: multiple backups per day (up to hourly backups), instant snapshot retention up to 30 days, support for Trusted Launch VMs, and support for VMs with Ultra Disks and Premium SSD v2. Standard policies are limited to 1 backup per day and 5-day instant retention.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-enhanced-policy",
    tags: ["Azure Backup", "Enhanced Policy", "Virtual Machines", "Data Protection"]
  },
  {
    id: "az-104-123",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Workbooks for Interactive Visual Reporting",
    scenario: "An IT director needs a customizable interactive reporting dashboard that combines live metrics charts, KQL log query tables, and text documentation into a shareable operational report for executive review.",
    question: "Which Azure Monitor feature provides interactive data analysis and canvas reporting?",
    options: [
      { id: 'A', text: "Azure Monitor Workbooks." },
      { id: 'B', text: "Azure Advisor security scorecard." },
      { id: 'C', text: "Azure Activity Log." },
      { id: 'D', text: "Azure Network Watcher topology." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. Workbooks can tap into multiple data sources across Azure (Metrics, Logs, Resource Graph, Alerts) and combine them into unified interactive visualizations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Azure Monitor", "Workbooks", "Dashboards", "Reporting"]
  },
  {
    id: "az-104-124",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Disaster Recovery Drills (Test Failover)",
    scenario: "An enterprise needs to conduct a disaster recovery compliance drill for virtual machines replicating via Azure Site Recovery to a secondary region. The drill must validate application functionality and database consistency without causing downtime in production and without interrupting ongoing replication.",
    question: "Which ASR operation tests disaster recovery in an isolated network without impacting production?",
    options: [
      { id: 'A', text: "Perform a Test Failover to an isolated, non-production virtual network." },
      { id: 'B', text: "Perform a Planned Failover." },
      { id: 'C', text: "Disable replication and recreate the VMs." },
      { id: 'D', text: "Perform an Unplanned Failover." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Site Recovery (ASR) Test Failover allows organizations to run disaster recovery drills without impacting ongoing replication, data loss, or production downtime. Test failover launches temporary test VMs in an isolated virtual network in the secondary region; after testing, executing \"Cleanup test failover\" automatically deletes the test VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-test-failover-to-azure",
    tags: ["Azure Site Recovery", "ASR", "Test Failover", "Disaster Recovery"]
  },
  {
    id: "az-104-125",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Diagnosing VM Boot Issues with Azure Boot Diagnostics and Serial Console",
    scenario: "A Windows Server virtual machine fails to boot following an operating system update. The VM status shows \"Running\", but RDP connections fail.",
    question: "Which Azure troubleshooting feature captures OS screenshot previews and serial console boot logs to diagnose boot errors?",
    options: [
      { id: 'A', text: "Azure Policy compliance." },
      { id: 'B', text: "Azure Cost Management." },
      { id: 'C', text: "Azure Boot Diagnostics." },
      { id: 'D', text: "Azure Network Watcher IP Flow Verify." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Boot Diagnostics is a debugging feature for Azure virtual machines that captures serial log output and real-time bitmap screenshots of the VM console during boot. It enables administrators to diagnose blue screens (BSOD), kernel panics, and failed OS updates without remote desktop access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/boot-diagnostics",
    tags: ["Boot Diagnostics", "Virtual Machines", "Troubleshooting", "Compute"]
  }
];

export default AZURE_AZ104_QUESTIONS_5;
