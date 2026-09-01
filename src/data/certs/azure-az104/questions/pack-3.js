export const AZURE_AZ104_QUESTIONS_3 = [
  {
    id: "az-104-51",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Conditional Access: Enforcing MFA based on User Risk and Location",
    scenario: "A company mandates that all members of the \"Finance Users\" group must perform Multi-Factor Authentication (MFA) whenever accessing the Azure Portal from outside the corporate trusted IP network range.",
    question: "Which Microsoft Entra security feature enforces this context-based access requirement?",
    options: [
      { id: 'A', text: "Microsoft Entra ID Password Protection." },
      { id: 'B', text: "Azure Policy definition with a Deny effect." },
      { id: 'C', text: "Azure RBAC role assignment with reader permissions." },
      { id: 'D', text: "Microsoft Entra Conditional Access policy targeting the group, cloud app, and configured Named Locations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra Conditional Access policies evaluate real-time signals (user/group identity, device platform, client application, and location based on IP Named Locations) to enforce automated access controls (such as Grant with Require MFA or Block access). Azure Policy (B) governs resource deployment. Password Protection (C) blocks common weak passwords.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    tags: ["Entra ID", "Conditional Access", "MFA", "Security", "Identity"]
  },
  {
    id: "az-104-52",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure RBAC Role Assignment: User Access Administrator vs Owner",
    scenario: "An administrator needs to grant a project lead the ability to manage user access and role assignments on a development subscription, but must ensure the project lead cannot create, modify, or delete any actual Azure resources (such as VMs, storage, or networks).",
    question: "Which built-in Azure RBAC role should be assigned to the project lead?",
    options: [
      { id: 'A', text: "Contributor." },
      { id: 'B', text: "User Access Administrator." },
      { id: 'C', text: "Reader." },
      { id: 'D', text: "Owner." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The User Access Administrator role allows users to manage user access to Azure resources (granting and revoking RBAC role assignments) across subscriptions and resource groups, without granting permissions to deploy, modify, or delete Azure resources. Owner (B) allows both full resource management and access management. Contributor (C) manages resources but cannot grant access. Reader (D) can only view resources.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#user-access-administrator",
    tags: ["Azure RBAC", "User Access Administrator", "Governance"]
  },
  {
    id: "az-104-53",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Exemptions and Waiving Compliance for Specific Resource Groups",
    scenario: "An enterprise assigns a policy initiative across the entire subscription that enforces the `Deny` effect on virtual machines created without an encrypted OS disk. An engineering team needs a temporary 30-day waiver for a legacy benchmarking lab resource group named `rg-legacy-benchmarks`.",
    question: "How should the administrator exempt the resource group without modifying the core policy assignment?",
    options: [
      { id: 'A', text: "Assign the Owner role to the legacy benchmark VM administrators." },
      { id: 'B', text: "Create an Azure Policy Exemption on `rg-legacy-benchmarks` for the policy assignment with an expiration date of 30 days." },
      { id: 'C', text: "Apply a CanNotDelete Resource Lock on the resource group." },
      { id: 'D', text: "Delete the policy assignment from the subscription." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Policy Exemptions provide a governance mechanism to explicitly exempt a specific scope (a management group, subscription, resource group, or resource) from an active policy assignment. Exemptions can be configured with an Exemption Category (Waiver or Mitigated) and an expiration date, allowing temporary compliance waivers without deleting or modifying the root policy assignment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/exemption-structure",
    tags: ["Azure Policy", "Policy Exemption", "Governance", "Compliance"]
  },
  {
    id: "az-104-54",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Guest User Invitations and B2B Collaboration",
    scenario: "An external consultant with an email address `consultant@externalpartner.com` needs access to collaborate on an Azure project within your organization's Microsoft Entra tenant.",
    question: "How should the administrator grant the external consultant access to the tenant?",
    options: [
      { id: 'A', text: "Send a Microsoft Entra B2B Guest User invitation to `consultant@externalpartner.com`." },
      { id: 'B', text: "Deploy Microsoft Entra Connect on the external partner's domain." },
      { id: 'C', text: "Assign an Azure Resource Lock to the consultant's email." },
      { id: 'D', text: "Create a new local member user in Microsoft Entra ID with the consultant's external password." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Entra B2B collaboration allows you to securely invite external users as Guest accounts into your tenant. The external user authenticates with their own corporate or personal credentials (in their home identity provider), eliminating the need to manage their external passwords or synchronize external directories.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Entra ID", "B2B", "Guest Users", "Identity"]
  },
  {
    id: "az-104-55",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Managing Azure Tagging and Enforcing Mandatory Tags with Azure Policy",
    scenario: "A company needs to ensure that every new resource group and resource created in an Azure subscription must have an `Environment` tag (with values such as `Prod`, `Dev`, or `Test`). If a deployment request lacks the tag, the deployment must be immediately blocked.",
    question: "Which Azure Policy effect must be used to block non-compliant deployments?",
    options: [
      { id: 'A', text: "`Audit` effect." },
      { id: 'B', text: "`AuditIfNotExists` effect." },
      { id: 'C', text: "`Disabled` effect." },
      { id: 'D', text: "`Deny` effect." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Deny` effect in Azure Policy evaluates requests before they reach the Azure Resource Manager resource provider; if the resource definition fails the policy condition (e.g. missing `Environment` tag), Azure Resource Manager immediately rejects and terminates the deployment request. `Audit` (B) allows deployment while logging non-compliance. `AuditIfNotExists` (D) audits after deployment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-deny",
    tags: ["Azure Policy", "Tagging", "Deny Effect", "Governance"]
  },
  {
    id: "az-104-56",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Types: General-Purpose v2 vs BlobStorage",
    scenario: "An architect is provisioning a new Azure Storage Account to support Blob storage, Azure Files SMB shares, Azure Queues, and Table storage with full support for access tiering (Hot, Cool, Cold, Archive) and lifecycle management.",
    question: "Which storage account kind should be deployed for all modern general-purpose workloads?",
    options: [
      { id: 'A', text: "BlockBlobStorage Premium only." },
      { id: 'B', text: "General-purpose v2 (standard general-purpose v2)." },
      { id: 'C', text: "General-purpose v1 (legacy)." },
      { id: 'D', text: "BlobStorage (legacy)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "General-purpose v2 (standard general-purpose v2) storage accounts are the default and recommended account type for almost all workloads on Azure. They support all storage services (Blobs, Files, Queues, Tables), all access tiers (Hot, Cool, Cold, Archive), all redundancy options, and modern features like lifecycle management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview#types-of-storage-accounts",
    tags: ["Azure Storage", "General-Purpose v2", "Storage Tiers"]
  },
  {
    id: "az-104-57",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files: SMB vs NFS File Shares and Protocol Requirements",
    scenario: "An engineering team needs to mount an Azure file share onto a cluster of Linux virtual machines running in an Azure Virtual Network. The application requires full POSIX file system compliance, hard links, and symlinks.",
    question: "Which Azure Files configuration satisfies these POSIX Linux requirements?",
    options: [
      { id: 'A', text: "Azure Blob Storage with FTP endpoint." },
      { id: 'B', text: "Azure Queue Storage." },
      { id: 'C', text: "Standard file share with SMB 3.0 protocol." },
      { id: 'D', text: "Premium file share with the NFS v4.1 protocol enabled." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Files supports NFS (Network File System) v4.1 file shares exclusively on **Premium** file storage accounts. NFS v4.1 provides native POSIX compliance (case sensitivity, POSIX permissions, hard links, symbolic links) required by enterprise Linux workloads. Standard Azure Files (B) supports SMB only.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/files-nfs-protocol",
    tags: ["Azure Files", "NFS", "SMB", "POSIX", "Linux"]
  },
  {
    id: "az-104-58",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Securing Azure Storage with Customer-Managed Keys (CMK) in Azure Key Vault",
    scenario: "A compliance mandate dictates that all data stored in an Azure Storage Account must be encrypted at rest using a Customer-Managed Key (CMK) stored in Azure Key Vault, and key rotation must happen without downtime.",
    question: "What identity configuration is required on the storage account to allow it to read encryption keys from Azure Key Vault?",
    options: [
      { id: 'A', text: "Make the Key Vault publicly accessible without authentication." },
      { id: 'B', text: "Store the storage account primary access key in Key Vault secrets." },
      { id: 'C', text: "Enable a System-assigned or User-assigned Managed Identity on the Storage Account and grant it Key Vault Crypto Service Encryption User permissions." },
      { id: 'D', text: "Create an SAS token with write permissions on Key Vault." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To use Customer-Managed Keys (CMK) with Azure Storage encryption at rest, the Storage Account requires a Managed Identity (System-assigned or User-assigned). This managed identity is granted Azure RBAC permissions (such as `Key Vault Crypto Service Encryption User`) or Key Vault access policy permissions (`get`, `wrapKey`, `unwrapKey`) on the Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview",
    tags: ["Azure Storage", "CMK", "Key Vault", "Managed Identity", "Security"]
  },
  {
    id: "az-104-59",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Storage Soft Delete and Versioning Data Recovery",
    scenario: "An application developer accidentally executed a script that deleted 5,000 blobs from a production container. The container has Blob Soft Delete enabled with a 14-day retention period.",
    question: "How should the administrator restore the deleted blobs to active status?",
    options: [
      { id: 'A', text: "Restore the storage account from a daily Azure Backup snapshot." },
      { id: 'B', text: "Use the Azure portal or Azure CLI/PowerShell to list soft-deleted blobs and execute the `Undelete` operation on the blobs." },
      { id: 'C', text: "Rehydrate the blobs from the Archive tier." },
      { id: 'D', text: "Create a new Storage Account and run AzCopy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When Blob Soft Delete is enabled, deleted blobs or blob snapshots are retained in a soft-deleted state for the configured retention period (e.g. 14 days). Administrators can filter and view soft-deleted blobs in the Azure portal, CLI, or SDKs and call the `Undelete` operation to restore them immediately to active status without loss of data or metadata.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Blob Storage", "Soft Delete", "Undelete", "Data Protection"]
  },
  {
    id: "az-104-60",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Data Box for Large Offline Physical Data Migration",
    scenario: "A company needs to migrate 80 TB of historical video archives from an on-premises data center to Azure Blob Storage. The data center has a slow 10 Mbps internet connection, making network transfer over the WAN impractical (would take over 2 years).",
    question: "Which Microsoft offline data transfer solution is designed for importing 80 TB of data securely via courier?",
    options: [
      { id: 'A', text: "Azure File Sync." },
      { id: 'B', text: "AzCopy over VPN." },
      { id: 'C', text: "Azure Data Box (100 TB capacity device with 80 TB usable)." },
      { id: 'D', text: "Azure Storage Mover." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Data Box is a ruggedized hardware storage appliance shipped directly from Microsoft to your on-premises datacenter. It provides 100 TB of raw capacity (80 TB usable) with AES-256 hardware encryption. You copy data onto the device over local 10 GbE network links and ship it back to Microsoft to be uploaded directly into your Azure Storage account.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/databox/data-box-overview",
    tags: ["Data Box", "Data Migration", "Offline Transfer", "Storage"]
  },
  {
    id: "az-104-61",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Disk Encryption: Server-Side Encryption (SSE) vs Azure Disk Encryption (ADE)",
    scenario: "A security officer needs to understand the difference between default Azure managed disk encryption and Azure Disk Encryption (ADE).",
    question: "Which statement accurately describes Azure Server-Side Encryption (SSE) with Platform-Managed Keys (PMK)?",
    options: [
      { id: 'A', text: "SSE with PMK is enabled by default on all Azure managed OS and data disks, encrypting data at rest at the storage service layer with zero configuration." },
      { id: 'B', text: "SSE only encrypts temporary instance disks." },
      { id: 'C', text: "SSE requires deploying an Azure Key Vault." },
      { id: 'D', text: "SSE requires installing BitLocker or DM-Crypt inside the guest OS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Server-Side Encryption (SSE) is enabled by default for all Azure managed disks (OS disks and data disks) using 256-bit AES encryption at the Azure storage layer with platform-managed keys (PMK) with zero customer overhead. In contrast, Azure Disk Encryption (ADE) uses BitLocker (Windows) or DM-Crypt (Linux) inside the guest OS and requires Azure Key Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Virtual Machines", "Managed Disks", "SSE", "Encryption", "Security"]
  },
  {
    id: "az-104-62",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scaling: Vertical Scaling vs Horizontal Auto-Scaling",
    scenario: "A database virtual machine experiences persistent high memory utilization (98% RAM used). The administrator needs to change the VM instance size from `Standard_D4s_v5` (16 GB RAM) to `Standard_D8s_v5` (32 GB RAM).",
    question: "What is an important operational consideration when resizing an active Azure Virtual Machine?",
    options: [
      { id: 'A', text: "Resizing a VM permanently changes its private IP address." },
      { id: 'B', text: "Resizing can only be performed by deleting the VM resource group." },
      { id: 'C', text: "Resizing a running VM causes the VM to automatically restart and experience temporary downtime." },
      { id: 'D', text: "Resizing a VM requires recreating the OS managed disk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When you resize an Azure Virtual Machine, if the new VM size is not supported on the physical hardware cluster currently hosting the VM, Azure deallocates the VM and reboots it on another cluster. Resizing a running VM always involves a reboot and brief downtime; static private IP addresses assigned to NICs are retained.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Virtual Machines", "Resizing", "Vertical Scaling", "Compute"]
  },
  {
    id: "az-104-63",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Deploying Azure Infrastructure with Bicep and ARM Template Idempotency",
    scenario: "A DevOps team uses Azure Bicep to deploy a production environment consisting of a Virtual Network, 3 subnets, and 5 Virtual Machines. The team runs the deployment script twice in succession without modifying the Bicep template.",
    question: "How does Azure Resource Manager handle the second deployment under Incremental mode?",
    options: [
      { id: 'A', text: "Azure Resource Manager deletes all resources and recreates them." },
      { id: 'B', text: "Azure Resource Manager creates a duplicate set of 5 new VMs." },
      { id: 'C', text: "Azure Resource Manager evaluates the deployment idempotently, leaving unchanged resources unmodified and making no changes." },
      { id: 'D', text: "The deployment fails immediately with an object conflict error." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Resource Manager (ARM) deployments in **Incremental mode** (the default mode) are idempotent. If a resource declared in the template or Bicep file already exists in the resource group with the exact same properties, Azure Resource Manager leaves it unchanged, ensuring safe, repeatable automated deployments without duplicate resource creation or unexpected downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview",
    tags: ["Bicep", "ARM Templates", "Idempotency", "Infrastructure as Code"]
  },
  {
    id: "az-104-64",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling: Scale Up (App Service Plan) vs Scale Out (Autoscale Rules)",
    scenario: "An App Service web app runs on a `Basic B1` plan. The team needs to configure automated scaling to add more VM instances when average CPU utilization exceeds 70%, and enable daily automated backups.",
    question: "Which scale-up action must the administrator perform first to unlock autoscale and automated backups?",
    options: [
      { id: 'A', text: "Enable VNet Integration on the web app." },
      { id: 'B', text: "Scale out the instance count from 1 to 5." },
      { id: 'C', text: "Scale up the App Service Plan from `Basic` to `Standard` (or Premium)." },
      { id: 'D', text: "Add a custom domain name." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Basic` App Service tier does not support automated autoscale rules, custom backup schedules, or deployment slots. Scaling up the App Service Plan to the `Standard` (S1/S2/S3) or `Premium` tier provides dynamic metric-based autoscale (up to 10–30 instances), daily automated backups, staging deployment slots, and 99.95% SLA.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans",
    tags: ["App Service", "Scale Up", "Autoscale", "Compute"]
  },
  {
    id: "az-104-65",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Functions Hosting Plans: Consumption vs Premium vs Dedicated",
    scenario: "A developer builds an event-driven serverless background function in Azure Functions that processes messages from an Azure Service Bus queue. The function runs for 10 seconds per execution, runs occasionally throughout the day, and requires zero hosting cost when idle.",
    question: "Which Azure Functions hosting plan is the most cost-effective for occasional, event-driven compute?",
    options: [
      { id: 'A', text: "App Service (Dedicated) plan." },
      { id: 'B', text: "Consumption plan." },
      { id: 'C', text: "Functions Premium plan." },
      { id: 'D', text: "Azure Dedicated Host." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure Functions Consumption hosting plan is the true serverless option: compute resources are added and removed dynamically based on incoming events, scaling to zero when no events are processing, and billing strictly for execution time (gigabyte-seconds) and total execution count (with 1 million free executions per month). Dedicated (B) and Premium (C) plans charge ongoing hourly rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
    tags: ["Azure Functions", "Consumption Plan", "Serverless", "Compute"]
  },
  {
    id: "az-104-66",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Subnet IP Addressing and Reserved IPs in Azure",
    scenario: "An administrator creates a new subnet with the CIDR block `10.0.1.0/24` (which contains 256 total IPv4 addresses).",
    question: "How many usable IP addresses are available for virtual machines and resources within this subnet?",
    options: [
      { id: 'A', text: "251 usable IP addresses (Azure reserves 5 IP addresses in every subnet)." },
      { id: 'B', text: "254 usable IP addresses." },
      { id: 'C', text: "256 usable IP addresses." },
      { id: 'D', text: "250 usable IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure reserves the first 4 IP addresses and the last 1 IP address in every subnet (a total of 5 reserved addresses): `.0` (Network address), `.1` (Default Gateway), `.2` & `.3` (Azure DNS mapping), and `.255` (Network broadcast). Therefore, a `/24` subnet has `256 - 5 = 251` usable IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-faq#are-there-any-restrictions-on-using-ip-addresses-within-these-subnets",
    tags: ["VNet", "Subnets", "IP Addressing", "Networking"]
  },
  {
    id: "az-104-67",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Global Virtual Network Peering vs Regional Peering",
    scenario: "A company operates `VNet-US` in East US and `VNet-EU` in North Europe. Applications in `VNet-US` need to communicate with applications in `VNet-EU` privately with low latency and high bandwidth without traversing the public internet.",
    question: "Which networking feature connects virtual networks across different Azure regions over Microsoft's private backbone?",
    options: [
      { id: 'A', text: "Global Virtual Network Peering." },
      { id: 'B', text: "Regional Virtual Network Peering." },
      { id: 'C', text: "Azure ExpressRoute Direct only." },
      { id: 'D', text: "Public Internet Gateway." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Global Virtual Network Peering connects virtual networks situated across different Azure regions. Traffic between peered virtual networks flows entirely over Microsoft's private global network backbone with full line-rate performance and private IP routability, without ever passing over the public internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Global VNet Peering", "VNet Peering", "Networking", "Multi-Region"]
  },
  {
    id: "az-104-68",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway for Resilient Outbound Internet Connectivity",
    scenario: "An enterprise runs a pool of 50 backend virtual machines in a private subnet. The VMs need to initiate outbound connections to software update repositories on the internet, but must never accept unsolicited inbound connections. The team frequently encounters SNAT port exhaustion when relying on default outbound access.",
    question: "Which Azure networking resource provides dedicated, scalable outbound SNAT capacity for subnets without inbound exposure?",
    options: [
      { id: 'A', text: "Assign Instance-Level Public IPs to all 50 VMs." },
      { id: 'B', text: "Deploy an Azure Virtual Network NAT Gateway (Azure NAT Gateway) attached to the subnet." },
      { id: 'C', text: "Deploy an Azure Basic Load Balancer." },
      { id: 'D', text: "Configure a User-Defined Route with Next Hop `Internet`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Virtual Network NAT Gateway is a fully managed, highly resilient outbound-only network translation service. When associated with a subnet, it provides dynamic SNAT port allocation (up to 64,000 concurrent flows per public IP, scalable up to 16 public IPs) to eliminate SNAT port exhaustion, while strictly prohibiting inbound internet traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["NAT Gateway", "SNAT", "Outbound Connectivity", "Networking"]
  },
  {
    id: "az-104-69",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public IP Addresses: Standard SKU vs Basic SKU Allocation",
    scenario: "An administrator needs to associate a public IP address with a new Standard Load Balancer frontend and an Azure Virtual Machine located in Availability Zone 1.",
    question: "Which SKU and allocation method must be selected for the Public IP address?",
    options: [
      { id: 'A', text: "Basic SKU with Dynamic IP allocation." },
      { id: 'B', text: "Standard SKU with Static IP allocation." },
      { id: 'C', text: "Basic SKU with Static IP allocation." },
      { id: 'D', text: "Premium SKU with Anycast allocation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Standard Public IP addresses are always **Static** in their allocation method, support Availability Zones (zonal or zone-redundant), and are required when associating with Azure Standard Load Balancers or secure VM frontends. Basic Public IPs (B, C) are legacy and cannot attach to Standard Load Balancers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses",
    tags: ["Public IP", "Standard SKU", "Networking"]
  },
  {
    id: "az-104-70",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure ExpressRoute Dedicated Private Connectivity vs Site-to-Site VPN",
    scenario: "A multinational bank requires a dedicated private connection between its on-premises corporate headquarters and Azure with guaranteed bandwidth (up to 10 Gbps), lower latency, and higher reliability than typical internet-based IPsec VPNs.",
    question: "Which Azure hybrid networking service provides dedicated private fiber connectivity without traversing the public internet?",
    options: [
      { id: 'A', text: "Azure ExpressRoute." },
      { id: 'B', text: "Azure Virtual Network Peering." },
      { id: 'C', text: "Azure Site-to-Site VPN Gateway." },
      { id: 'D', text: "Azure Point-to-Site VPN Gateway." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure ExpressRoute creates private, dedicated connections between your on-premises datacenters and Azure through a connectivity provider (colocation facility or telecom). ExpressRoute connections do not traverse the public internet, offering higher security, enterprise reliability, consistent latency, and high bandwidth (up to 100 Gbps). Site-to-Site VPN (B) encrypts tunnels over the public internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["ExpressRoute", "Hybrid", "Dedicated Connection", "Networking"]
  },
  {
    id: "az-104-71",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Agent (AMA) vs Legacy Log Analytics Agent (MMA)",
    scenario: "An enterprise is deploying a centralized log collection strategy across 500 Windows and Linux virtual machines in Azure and on-premises using Azure Arc. The team requires Data Collection Rules (DCRs) to filter out debug events at the VM agent level before data ingestion to reduce Log Analytics storage costs.",
    question: "Which unified agent and configuration mechanism supports Data Collection Rules (DCRs)?",
    options: [
      { id: 'A', text: "Azure Monitor Agent (AMA) configured with Data Collection Rules (DCRs)." },
      { id: 'B', text: "Legacy Microsoft Monitoring Agent (MMA)." },
      { id: 'C', text: "Azure Network Watcher Agent." },
      { id: 'D', text: "Azure Diagnostics Extension (WAD/LAD)." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Azure Monitor Agent (AMA) is Microsoft's unified logging agent replacing legacy agents (MMA, OMS, Telegraf). AMA uses **Data Collection Rules (DCRs)** to define exactly which data to collect, filter, and route (including filtering event log IDs locally before ingestion), reducing ingestion volume and log management costs across Azure VMs, VMSS, and Azure Arc servers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview",
    tags: ["Azure Monitor Agent", "AMA", "DCR", "Log Analytics", "Monitoring"]
  },
  {
    id: "az-104-72",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Network Traffic Analysis with NSG Flow Logs and Traffic Analytics",
    scenario: "A security operations center (SOC) needs to visualize IP traffic patterns, identify top communicating virtual machines, detect traffic communicating with known malicious external IP addresses, and analyze allowed vs denied NSG flows.",
    question: "Which combination of Azure Network Watcher features provides deep graphical traffic insights?",
    options: [
      { id: 'A', text: "Azure Service Health notifications." },
      { id: 'B', text: "Application Insights Profiler." },
      { id: 'C', text: "NSG Flow Logs enabled with Traffic Analytics connected to a Log Analytics workspace." },
      { id: 'D', text: "IP Flow Verify point-in-time checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NSG Flow Logs captures metadata on IP traffic passing through Network Security Groups and writes logs to a storage account. Enabling **Traffic Analytics** processes the flow logs, enriches them with Microsoft threat intelligence, and feeds them into an Azure Log Analytics workspace to provide rich graphical dashboards of traffic flows, top talkers, open ports, and malicious IPs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics",
    tags: ["NSG Flow Logs", "Traffic Analytics", "Network Watcher", "Security", "Monitoring"]
  },
  {
    id: "az-104-73",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Recommendations: Cost, Security, Reliability, Operational Excellence, and Performance",
    scenario: "A cloud administrator needs a personalized cloud consultant tool that analyzes Azure resource utilization to identify idle virtual machines, unattached managed disks, and missing high-availability configurations.",
    question: "Which built-in Azure service provides automated recommendations across the 5 pillars of the Well-Architected Framework?",
    options: [
      { id: 'A', text: "Azure Blueprints." },
      { id: 'B', text: "Azure Service Health." },
      { id: 'C', text: "Azure Advisor." },
      { id: 'D', text: "Azure Resource Graph." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Advisor analyzes your deployed Azure resources and configurations to provide actionable recommendations across five categories: Cost (identifying underutilized VMs), Security (integrating with Defender for Cloud), Reliability (missing backup/AZs), Operational Excellence, and Performance. Service Health (B) tracks platform service health.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Advisor", "Well-Architected", "FinOps", "Best Practices"]
  },
  {
    id: "az-104-74",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Backing Up Azure Files File Shares with Azure Backup",
    scenario: "An enterprise stores department file shares in Azure Files. The administrator needs to configure automated daily snapshots with 30-day retention without deploying any backup virtual machines or agents.",
    question: "How should the administrator protect the Azure File Share using native Azure Backup?",
    options: [
      { id: 'A', text: "Create an Azure Backup policy in a Recovery Services Vault targeting the Azure Storage Account and file share." },
      { id: 'B', text: "Deploy Microsoft Azure Backup Server (MABS) on an on-premises VM." },
      { id: 'C', text: "Write a PowerShell script that copies files to a secondary storage account." },
      { id: 'D', text: "Configure Blob Lifecycle Management." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Backup provides native, agentless snapshot management for Azure Files. By configuring a backup policy in a Recovery Services Vault targeting the storage account, Azure Backup orchestrates automated scheduled share snapshots, manages retention schedules, and enables single-file or full-share restores directly in the Azure portal.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/azure-file-share-backup-overview",
    tags: ["Azure Backup", "Azure Files", "Snapshots", "Data Protection"]
  },
  {
    id: "az-104-75",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Service Health: Service Issues vs Planned Maintenance vs Health Advisories",
    scenario: "A company needs to receive automated alerts whenever an ongoing outage affects Azure compute or storage services in the West Europe region where their production workloads reside.",
    question: "Which dashboard and alert mechanism in Azure notifies teams about regional platform service interruptions?",
    options: [
      { id: 'A', text: "Application Insights live metrics." },
      { id: 'B', text: "Azure Service Health alerts targeting Service Issues in the West Europe region." },
      { id: 'C', text: "Azure Resource Health on a single VM." },
      { id: 'D', text: "Azure Network Watcher packet capture." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Service Health provides a personalized view of the health of Azure services and regions you use. It categorizes events into **Service Issues** (active platform outages), **Planned Maintenance** (scheduled platform updates), and **Health Advisories**, allowing administrators to create alerts that notify teams via email, SMS, or webhooks during regional service disruptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/service-health-overview",
    tags: ["Service Health", "Azure Monitor", "Alerts", "Monitoring"]
  }
];

export default AZURE_AZ104_QUESTIONS_3;
