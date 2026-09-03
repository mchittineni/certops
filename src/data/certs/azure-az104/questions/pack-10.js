export const AZURE_AZ104_QUESTIONS_10 = [
  {
    id: "az-104-226",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Group Management for Security Groups",
    scenario: "An IT department wants team leaders to manage membership of their respective project security groups directly through the `myapps.microsoft.com` or `myaccess.microsoft.com` portals without submitting IT support helpdesk tickets.",
    question: "Which Microsoft Entra feature enables delegated group ownership and self-service membership approvals?",
    options: [
      { id: 'A', text: "Azure Resource Locks." },
      { id: 'B', text: "Self-service group management enabled in Microsoft Entra ID with assigned Group Owners." },
      { id: 'C', text: "Administrative Units with dynamic device rules." },
      { id: 'D', text: "Azure Policy with Modify effect." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Self-service group management in Microsoft Entra ID allows tenant administrators to delegate group management to group owners. Group owners can approve or deny membership requests and manage memberships directly via the My Groups or My Access portals without requiring elevated directory administrator roles.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-self-service-management",
    tags: ["Entra ID", "Self-Service Groups", "Identity Governance", "Delegation"]
  },
  {
    id: "az-104-227",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Privileged Identity Management (PIM) for Azure Resources",
    scenario: "A cloud security policy mandates that database administrators must NOT have standing Owner or Contributor permissions on production database resource groups. Instead, engineers must request just-in-time (JIT) role activation for up to 4 hours with mandatory ticket number entry and manager approval.",
    question: "Which Microsoft Entra feature enforces Just-In-Time role activation for Azure resources?",
    options: [
      { id: 'A', text: "Microsoft Entra ID Protection sign-in risk." },
      { id: 'B', text: "Azure Key Vault access policies." },
      { id: 'C', text: "Azure Policy initiative." },
      { id: 'D', text: "Microsoft Entra Privileged Identity Management (PIM) for Azure resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra Privileged Identity Management (PIM) provides time-bound, just-in-time (JIT) privileged access to both Microsoft Entra roles and Azure Resource Manager roles. Eligible users must explicitly activate their role assignment, complete MFA, provide business justification/ticket numbers, and receive approval.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Entra ID", "PIM", "Just-In-Time", "RBAC", "Security"]
  },
  {
    id: "az-104-228",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Manager Deployment Stacks for Managed Lifecycle Deletions",
    scenario: "A DevOps platform team deploys standardized microservice environments using Bicep templates. When an infrastructure component is removed from the updated Bicep template, the underlying Azure resource must automatically be cleaned up (deleted) from the resource group rather than remaining orphaned.",
    question: "Which Azure Resource Manager capability manages the lifecycle of resource collections and automatically deletes resources removed from template definitions?",
    options: [
      { id: 'A', text: "Azure Deployment Stacks (with `actionOnUnmanage` set to `delete`)." },
      { id: 'B', text: "Azure Policy with Audit effect." },
      { id: 'C', text: "Standard ARM incremental deployment mode." },
      { id: 'D', text: "Azure Resource Locks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Deployment Stacks is an ARM native resource type that manages a collection of resources as a single cohesive unit. When updating a deployment stack, setting `actionOnUnmanage` to `delete` (or `detach`) automatically terminates and deletes any managed resources that were removed from the updated template definition.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deployment-stacks",
    tags: ["Deployment Stacks", "ARM", "Bicep", "Lifecycle", "Governance"]
  },
  {
    id: "az-104-229",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Global Secure Access (Security Service Edge / SSE)",
    scenario: "An organization needs to enforce Conditional Access, zero-trust traffic inspection, and web content filtering for remote employees accessing external SaaS apps and internal private corporate resources without deploying full-tunnel legacy VPNs.",
    question: "Which Microsoft Entra solution provides unified Security Service Edge (SSE) capabilities including Microsoft Entra Internet Access and Microsoft Entra Private Access?",
    options: [
      { id: 'A', text: "Microsoft Entra Global Secure Access (SSE)." },
      { id: 'B', text: "Azure Bastion." },
      { id: 'C', text: "Azure App Service Isolated Plan." },
      { id: 'D', text: "Azure Virtual Network NAT Gateway." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Entra Global Secure Access is Microsoft's Security Service Edge (SSE) solution, comprising **Microsoft Entra Internet Access** (securing traffic to internet, SaaS, and M365 apps) and **Microsoft Entra Private Access** (securing zero-trust access to private corporate resources on any port/protocol without VPNs).",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access",
    tags: ["Entra ID", "Global Secure Access", "SSE", "Zero Trust", "Security"]
  },
  {
    id: "az-104-230",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Authentication Strengths in Conditional Access",
    scenario: "A high-security financial application in Azure requires that administrators must authenticate exclusively using phishing-resistant credentials (such as FIDO2 security keys or Windows Hello for Business), explicitly disallowing SMS text codes and standard push notifications.",
    question: "Which Conditional Access grant control enforces specific cryptographic credential requirements?",
    options: [
      { id: 'A', text: "Require MFA (standard)." },
      { id: 'B', text: "Terms of Use consent." },
      { id: 'C', text: "Require compliant device only." },
      { id: 'D', text: "Require Authentication Strength (set to \"Phishing-resistant MFA\")." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Authentication Strengths in Microsoft Entra Conditional Access allow administrators to specify exactly which MFA methods are acceptable for accessing sensitive resources. Selecting **Phishing-resistant MFA** strictly requires FIDO2 hardware security keys, Windows Hello for Business, or Certificate-Based Authentication.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-authentication-strengths",
    tags: ["Entra ID", "Authentication Strength", "FIDO2", "MFA", "Security"]
  },
  {
    id: "az-104-231",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewall Bypass for Trusted Microsoft Services",
    scenario: "An Azure Storage Account has its firewall configured to block all public networks and allow access only from selected virtual networks. An Azure Backup Recovery Services Vault and an Azure Data Factory instance need to access the storage account to perform backup and ETL jobs.",
    question: "Which storage firewall exception setting allows authorized first-party Azure services to access the storage account?",
    options: [
      { id: 'A', text: "Check \"Allow Azure services on the trusted services list to access this storage account\"." },
      { id: 'B', text: "Set firewall to \"Enabled from all networks\"." },
      { id: 'C', text: "Generate an Account SAS with IP restrictions." },
      { id: 'D', text: "Deploy an Azure Bastion host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Checking the exception **\"Allow Azure services on the trusted services list to access this storage account\"** in the Azure Storage firewall configuration permits trusted first-party Microsoft services (such as Azure Backup, Azure Site Recovery, Azure Data Factory, and Microsoft Sentinel) using strong authentication to connect securely over the Azure backbone.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security#exceptions",
    tags: ["Azure Storage", "Trusted Services", "Storage Firewall", "Security"]
  },
  {
    id: "az-104-232",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Customer-Initiated Account Failover for Geo-Redundancy",
    scenario: "An enterprise uses Geo-Redundant Storage (GRS) in East US (primary) and West US (secondary). Due to a severe prolonged disaster in East US, the IT director decides to initiate a customer-directed storage account failover to West US.",
    question: "What is the consequence of executing a customer-initiated storage account failover on the primary region and account redundancy?",
    options: [
      { id: 'A', text: "The storage account is deleted." },
      { id: 'B', text: "The storage account automatically converts to ZRS in East US." },
      { id: 'C', text: "The data in the primary region is instantly recovered." },
      { id: 'D', text: "The secondary region (West US) becomes the new primary read-write endpoint, and the storage account redundancy is converted to Locally Redundant Storage (LRS)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When you trigger a customer-initiated account failover, Azure Storage updates DNS records so that the secondary region becomes the new primary read-write endpoint. Because replication to the original failed region is broken, the account redundancy is automatically downgraded to **Locally Redundant Storage (LRS)** until the administrator manually reconfigures GRS/GZRS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-initiate-account-failover",
    tags: ["Azure Storage", "Account Failover", "GRS", "Disaster Recovery"]
  },
  {
    id: "az-104-233",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Multichannel Support for SMB 3.0 High Throughput",
    scenario: "A high-performance computing (HPC) file processing workload on Azure Linux and Windows VMs connects to a Premium Azure File Share over SMB 3.0. The team needs to maximize IOPS and network throughput by establishing multiple parallel TCP network connections per client VM NIC.",
    question: "Which SMB feature should be enabled on the Azure File Share and client operating system?",
    options: [
      { id: 'A', text: "SMB Multichannel." },
      { id: 'B', text: "Cloud Tiering." },
      { id: 'C', text: "Blob Versioning." },
      { id: 'D', text: "NFS v4.1." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SMB Multichannel is a feature supported on Premium Azure Files that allows SMB 3.0 clients to establish multiple simultaneous TCP connections to the storage endpoint across single or multiple NICs, aggregating bandwidth, increasing IOPS, and providing network connection fault tolerance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-smb-multichannel-performance",
    tags: ["Azure Files", "SMB Multichannel", "Performance", "Storage"]
  },
  {
    id: "az-104-234",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Blob Cold Tier vs Cool Tier Economics",
    scenario: "A company stores monthly financial audit spreadsheets that are accessed approximately once every 60 to 90 days. The storage administrator wants lower capacity storage pricing than Cool tier without paying the high retrieval and rehydration delay of Archive tier.",
    question: "Which Azure Blob Storage access tier is optimized for data accessed at least once every 90 days with instant online read access?",
    options: [
      { id: 'A', text: "Hot access tier." },
      { id: 'B', text: "Cold access tier." },
      { id: 'C', text: "Cool access tier." },
      { id: 'D', text: "Archive access tier." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The **Cold access tier** in Azure Blob Storage provides intermediate cost optimization between Cool and Archive. It offers lower storage capacity costs than Cool (up to 30% savings) with **instant online millisecond read latency** (unlike Archive, which requires hours of rehydration) and a minimum retention requirement of 90 days.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview#cold-access-tier",
    tags: ["Blob Storage", "Cold Tier", "Access Tiers", "Cost Optimization"]
  },
  {
    id: "az-104-235",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy `sync` Command for One-Way Directory Synchronization",
    scenario: "An administrator needs to synchronize an on-premises folder `C:\\Data` to an Azure Blob Storage container `https://mystorage.blob.core.windows.net/data` using AzCopy, copying new and modified files and removing files from the destination that were deleted locally.",
    question: "Which AzCopy command and flag performs one-way directory synchronization with destination file deletion?",
    options: [
      { id: 'A', text: "`azcopy make \"https://mystorage.blob.core.windows.net/data\"`" },
      { id: 'B', text: "`azcopy copy \"C:\\Data\" \"https://mystorage.blob.core.windows.net/data\" --recursive`" },
      { id: 'C', text: "`azcopy sync \"C:\\Data\" \"https://mystorage.blob.core.windows.net/data\" --delete-destination=true`" },
      { id: 'D', text: "`azcopy list \"C:\\Data\"`" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `azcopy sync` command compares file names and last modified timestamps between source and destination, copying only new or updated files. Adding `--delete-destination=true` (or `prompt`) deletes files from the destination container if they no longer exist in the local source directory.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs-synchronize",
    tags: ["AzCopy", "azcopy sync", "Data Migration", "Storage"]
  },
  {
    id: "az-104-236",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Host Maintenance Notifications and Scheduled Events",
    scenario: "An enterprise runs mission-critical in-memory databases on Azure Virtual Machines. When Microsoft schedules underlying physical host server maintenance, the database application needs to receive a 15-minute advance notification inside the VM via a REST metadata endpoint so it can gracefully fail over.",
    question: "Which Azure Virtual Machine metadata service delivers advance programmatic notifications of upcoming VM maintenance, host reboots, and Spot evictions?",
    options: [
      { id: 'A', text: "Azure Advisor alerts." },
      { id: 'B', text: "Azure Network Watcher." },
      { id: 'C', text: "Azure Activity Log." },
      { id: 'D', text: "Azure Scheduled Events (via Azure Instance Metadata Service / IMDS)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Scheduled Events is a component of the Azure Instance Metadata Service (IMDS) available at `http://169.254.169.254/metadata/scheduledevents`. Applications query this endpoint to receive programmatic advance notifications about impending host maintenance, VM redeployments, restarts, and Spot evictions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/scheduled-events",
    tags: ["Virtual Machines", "Scheduled Events", "IMDS", "Maintenance", "Compute"]
  },
  {
    id: "az-104-237",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets: Flexible Orchestration Mode vs Uniform Orchestration Mode",
    scenario: "An architect needs to configure an Azure VM Scale Set to manage a mixed fleet of heterogeneous VM sizes (D-series and E-series VMs) and Spot VMs with individual VM NIC attachments and manual VM instance management.",
    question: "Which VMSS orchestration mode provides maximum flexibility across heterogeneous VM sizes and individual VM management?",
    options: [
      { id: 'A', text: "Uniform Orchestration Mode (`Uniform`)." },
      { id: 'B', text: "Flexible Orchestration Mode (`Flexible`)." },
      { id: 'C', text: "Classic Scale Set." },
      { id: 'D', text: "Dedicated Host Group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure VMSS **Flexible Orchestration Mode** allows deploying and managing heterogeneous VM sizes, mixing Spot and Pay-As-You-Go instances in the same scale set, attaching individual VM NICs and disks, and managing VMs both individually and as a fleet with high availability across Fault Domains.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/orchestration-modes",
    tags: ["VMSS", "Flexible Orchestration", "Uniform Orchestration", "Compute"]
  },
  {
    id: "az-104-238",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots: Auto Swap and Swap with Preview",
    scenario: "A development team deploys updates to a `staging` deployment slot on Azure App Service. To ensure the new version is tested with production application configuration settings (connection strings) before live users hit the app, the team needs to execute a two-phase slot swap.",
    question: "Which deployment slot feature allows validating configuration changes on the staging slot using production app settings prior to completing the swap?",
    options: [
      { id: 'A', text: "Swap with Preview." },
      { id: 'B', text: "Traffic routing percentage." },
      { id: 'C', text: "Standard immediate swap." },
      { id: 'D', text: "Auto Swap." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The **Swap with Preview** feature executes a two-phase slot swap. In phase 1, Azure applies production configuration settings (connection strings, app settings) to the staging slot and warms up the app. Developers can browse and test the staging slot under real production configuration; once verified, they complete (or cancel) the swap.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots#custom-warmup-during-a-swap",
    tags: ["App Service", "Deployment Slots", "Swap with Preview", "CI/CD", "Compute"]
  },
  {
    id: "az-104-239",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Proximity Placement Groups (PPG) for Low Latency",
    scenario: "A high-frequency algorithmic trading application requires microsecond-level network latency between application virtual machines and an in-memory database VM cluster in the same Azure region.",
    question: "Which Azure compute resource physically collocates virtual machines within the same datacenter fabric to minimize network latency?",
    options: [
      { id: 'A', text: "Availability Zone." },
      { id: 'B', text: "Scale-In Policy." },
      { id: 'C', text: "Dedicated Host." },
      { id: 'D', text: "Proximity Placement Group (PPG)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Proximity Placement Group (PPG) is an Azure logical grouping resource that ensures virtual machines, scale sets, and availability sets are physically located as close as possible to each other within the same datacenter hardware cluster, minimizing inter-VM network latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/co-location",
    tags: ["Proximity Placement Groups", "PPG", "Low Latency", "Virtual Machines", "Compute"]
  },
  {
    id: "az-104-240",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: Always vs OnFailure vs Never",
    scenario: "A batch data migration container job on Azure Container Instances (ACI) runs for 20 minutes to import CSV records, exits with status code 0 upon completion, and must NOT restart automatically after completing successfully.",
    question: "Which Restart Policy should be configured on the ACI container group?",
    options: [
      { id: 'A', text: "`Always`." },
      { id: 'B', text: "`AutoHeal`." },
      { id: 'C', text: "`RestartHourly`." },
      { id: 'D', text: "`OnFailure` (or `Never`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Container Instances supports three restart policies: 1) `Always` (for long-running web servers), 2) `OnFailure` (restarts only if the container process crashes with a non-zero exit code; stays stopped on exit code 0, ideal for batch jobs), and 3) `Never` (runs once and never restarts).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["ACI", "Container Instances", "Restart Policy", "Batch Jobs", "Containers"]
  },
  {
    id: "az-104-241",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Subnet Sizing and Usable IP Address Calculation",
    scenario: "An administrator creates a new subnet with address prefix `10.0.5.0/27` inside an Azure Virtual Network.",
    question: "How many total IP addresses are available in a `/27` subnet, and how many are usable by Azure Virtual Machines?",
    options: [
      { id: 'A', text: "32 total IP addresses, with 27 usable IP addresses (since Azure reserves 5 IP addresses)." },
      { id: 'B', text: "32 total IP addresses, with 30 usable IP addresses." },
      { id: 'C', text: "64 total IP addresses, with 59 usable IP addresses." },
      { id: 'D', text: "16 total IP addresses, with 11 usable IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `/27` CIDR block contains $2^{(32-27)} = 32$ total IP addresses. Azure always reserves 5 IP addresses in every subnet (.0 network, .1 default gateway, .2 & .3 Azure DNS, and .255 broadcast), leaving exactly $32 - 5 = 27$ usable IP addresses for VM NICs and resources.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-faq#are-there-any-restrictions-on-using-ip-addresses-within-these-subnets",
    tags: ["VNet", "Subnets", "IP Addressing", "CIDR", "Networking"]
  },
  {
    id: "az-104-242",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway Backend Health and Troubleshooting 502 Bad Gateway Errors",
    scenario: "Users accessing a web application via an Azure Application Gateway receive `HTTP 502 Bad Gateway`. The administrator checks the \"Backend Health\" blade and sees that all VM instances in the backend pool are reporting `Unhealthy` with status `Probe timeout`.",
    question: "What is the most probable root cause of the health probe timeout?",
    options: [
      { id: 'A', text: "The storage account was deleted." },
      { id: 'B', text: "The DNS record for the public domain expired." },
      { id: 'C', text: "The frontend public IP was deallocated." },
      { id: 'D', text: "A Network Security Group (NSG) or VM guest firewall is blocking probe traffic on the backend port from the Application Gateway subnet IP range." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Application Gateway health probes originate from the Application Gateway's private subnet IP addresses. If an NSG attached to the backend VM subnet or a host guest OS firewall (e.g. Windows Firewall / iptables) blocks incoming TCP connections from the gateway subnet, health probes time out and the gateway returns HTTP 502 Bad Gateway.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-troubleshooting-502",
    tags: ["Application Gateway", "502 Bad Gateway", "Backend Health", "Troubleshooting"]
  },
  {
    id: "az-104-243",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Peering and User-Defined Routes for Hub-and-Spoke NVA Routing",
    scenario: "An enterprise implements a Hub-and-Spoke network topology with a centralized Azure Firewall in the Hub VNet (`10.0.0.4`). To ensure all outbound internet traffic from `Spoke-1` (`10.1.0.0/16`) and all inter-spoke traffic to `Spoke-2` (`10.2.0.0/16`) passes through the firewall, what route table configuration must be attached to the spoke subnets?",
    question: "Which User-Defined Routes (UDR) must be added to the Spoke-1 route table?",
    options: [
      { id: 'A', text: "Route `0.0.0.0/0` with Next Hop Type `None`." },
      { id: 'B', text: "Route `10.1.0.0/16` with Next Hop Type `Virtual network gateway`." },
      { id: 'C', text: "Route `0.0.0.0/0` with Next Hop Type `Virtual appliance` and Next Hop IP `10.0.0.4`, and route `10.2.0.0/16` with Next Hop Type `Virtual appliance` and Next Hop IP `10.0.0.4`." },
      { id: 'D', text: "Route `0.0.0.0/0` with Next Hop Type `Internet`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To force spoke traffic through a centralized NVA or Azure Firewall in the hub VNet, a custom Route Table attached to spoke subnets must define: 1) A default route (`0.0.0.0/0`) pointing to the firewall private IP (`10.0.0.4`) for internet inspection, and 2) A route for the other spoke address spaces (`10.2.0.0/16`) pointing to `10.0.0.4` for inter-spoke transit inspection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke",
    tags: ["UDR", "Hub and Spoke", "Azure Firewall", "NVA", "Routing", "Networking"]
  },
  {
    id: "az-104-244",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoint vs Service Endpoint Architectural Comparison",
    scenario: "A cloud security architect is standardizing secure access to Azure SQL Database across on-premises corporate datacenters and multi-region Azure VNets. The solution must provide access over private IP addresses reachable across ExpressRoute from on-premises without opening public IP firewall rules on Azure SQL.",
    question: "Why is Azure Private Endpoint preferred over Service Endpoints for hybrid on-premises connectivity?",
    options: [
      { id: 'A', text: "Service Endpoints only work with Azure Storage." },
      { id: 'B', text: "Service Endpoints require public IPs on VMs." },
      { id: 'C', text: "Private Endpoints do not require DNS." },
      { id: 'D', text: "Private Endpoints allocate a private IP address directly from the customer VNet that is fully routable over ExpressRoute and VPN from on-premises, whereas Service Endpoints cannot be reached from on-premises." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your VNet subnet directly to the PaaS resource. Because the endpoint has a real private IP in your VNet address space, on-premises clients can reach the PaaS service directly over ExpressRoute or VPN. Service Endpoints cannot route on-premises traffic over VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview#private-link-resource-vs-service-endpoint",
    tags: ["Private Endpoint", "Service Endpoint", "Hybrid", "Networking", "Security"]
  },
  {
    id: "az-104-245",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Shareable Links for Browserless Guest Access",
    scenario: "A company needs to grant a third-party vendor temporary, secure RDP access to a specific Azure virtual machine for 2 hours without granting the vendor access to the Azure portal or creating an Entra ID user account in the tenant.",
    question: "Which Azure Bastion feature generates temporary, direct URL links to virtual machines?",
    options: [
      { id: 'A', text: "Azure Storage SAS tokens." },
      { id: 'B', text: "Azure Policy with Audit effect." },
      { id: 'C', text: "Public IP assignment on the VM." },
      { id: 'D', text: "Azure Bastion Shareable Links (available on Standard/Premium SKU)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Bastion Shareable Links (Standard/Premium SKU) allows administrators to generate a unique, shareable URL for a specific VM. Users can click the link in any web browser to connect directly to the VM via RDP/SSH without logging into the Azure portal or possessing Azure RBAC permissions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/shareable-link",
    tags: ["Azure Bastion", "Shareable Links", "Remote Access", "Security"]
  },
  {
    id: "az-104-246",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Log Analytics Search Jobs for Deep Historical Petabyte Audits",
    scenario: "A forensic security audit requires querying raw historical security logs from 3 years ago stored in the Log Analytics Archive tier. The query needs to scan 20 TB of archived logs without timing out.",
    question: "Which Azure Log Analytics feature executes asynchronous, long-running queries across archived data and writes results to a new search table?",
    options: [
      { id: 'A', text: "Live Metrics Stream." },
      { id: 'B', text: "Activity Log alert." },
      { id: 'C', text: "Standard interactive KQL query." },
      { id: 'D', text: "Log Analytics Search Jobs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Log Analytics Search Jobs are asynchronous queries that fetch records from archived logs and write the results to a new search results table (`_SRCH`) in your workspace. Search jobs can run for hours across petabytes of archived data without hitting interactive query timeout limits.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/search-jobs",
    tags: ["Log Analytics", "Search Jobs", "Archive Tier", "Auditing", "Monitoring"]
  },
  {
    id: "az-104-247",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Cross-Region Restore (CRR) for Secondary Region Recovery",
    scenario: "An enterprise maintains a Geo-Redundant Recovery Services Vault in East US replicating to West US. An administrator needs to initiate a test restore of a virtual machine directly into West US while the primary region (East US) is fully operational.",
    question: "Which Azure Backup feature allows restoring recovery points in the secondary paired region at any time?",
    options: [
      { id: 'A', text: "Soft Delete undelete." },
      { id: 'B', text: "Cross-Region Restore (CRR)." },
      { id: 'C', text: "Instant Restore snapshot." },
      { id: 'D', text: "Standard GRS restore." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cross-Region Restore (CRR) is a feature on Geo-Redundant Recovery Services Vaults that allows restoring backup data (VMs, SQL DBs, HANA) directly in the secondary paired region at any time—including during DR drills or when the primary region is fully healthy—without waiting for Microsoft to declare a regional disaster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-arm-restore-vms#cross-region-restore",
    tags: ["Azure Backup", "Cross-Region Restore", "CRR", "Disaster Recovery"]
  },
  {
    id: "az-104-248",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Cost Recommendations: Identifying Underutilized Virtual Machines",
    scenario: "A FinOps team wants to identify all virtual machines in an Azure subscription whose CPU utilization has been under 5% and network utilization under 2% for the past 7 days to right-size or shut them down.",
    question: "Which Azure Advisor recommendation category surfaces underutilized or idle virtual machines?",
    options: [
      { id: 'A', text: "Azure Advisor Reliability recommendations." },
      { id: 'B', text: "Azure Advisor Operational Excellence recommendations." },
      { id: 'C', text: "Azure Advisor Security recommendations." },
      { id: 'D', text: "Azure Advisor Cost recommendations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Advisor **Cost** recommendations continuously evaluate resource usage telemetry, automatically identifying idle or underutilized virtual machines (e.g. low CPU/network usage over a 7-day period) and recommending resizing to smaller VM sizes or shutting them down to reduce spend.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations",
    tags: ["Azure Advisor", "Cost Recommendations", "FinOps", "Right-Sizing"]
  },
  {
    id: "az-104-249",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Network Watcher Connection Monitor for Continuous Network Latency Probing",
    scenario: "A network operations team needs to continuously monitor network round-trip time (RTT), latency, and packet loss between Azure Virtual Machines and an on-premises database endpoint every 60 seconds, triggering an alert if packet loss exceeds 5%.",
    question: "Which Azure Network Watcher tool provides continuous multi-endpoint connectivity monitoring with alerting?",
    options: [
      { id: 'A', text: "Connection Monitor." },
      { id: 'B', text: "Security Group View." },
      { id: 'C', text: "Next Hop." },
      { id: 'D', text: "IP Flow Verify." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connection Monitor in Azure Network Watcher provides unified, end-to-end network connectivity monitoring across Azure and hybrid environments. It periodically sends synthetic probes (TCP/HTTP/ICMP) between source and destination endpoints, recording latency, packet loss, and hop-by-hop topology, and triggering Azure Monitor alerts on threshold breaches.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/connection-monitor-overview",
    tags: ["Network Watcher", "Connection Monitor", "Latency", "Monitoring"]
  },
  {
    id: "az-104-250",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Service Health Notification Alerts with Action Groups",
    scenario: "An enterprise IT director needs to receive automated SMS and email notifications whenever Microsoft publishes an active Azure Service Issue outage affecting virtual machines or storage accounts in the East US region.",
    question: "Which Azure Monitor alert type is configured to notify on regional cloud service incidents?",
    options: [
      { id: 'A', text: "Service Health Alert rule associated with an Action Group." },
      { id: 'B', text: "Application Insights availability test." },
      { id: 'C', text: "Metric Alert rule on VM CPU." },
      { id: 'D', text: "Log Analytics KQL query alert." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Health Alerts in Azure Monitor notify administrators about platform outages, planned maintenance, and service advisories affecting specific subscriptions, services, and regions. Associating the alert rule with an Action Group ensures incident notifications are dispatched immediately via email, SMS, push notifications, or webhooks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications-portal",
    tags: ["Service Health", "Service Health Alerts", "Action Groups", "Monitoring"]
  }
];

export default AZURE_AZ104_QUESTIONS_10;
