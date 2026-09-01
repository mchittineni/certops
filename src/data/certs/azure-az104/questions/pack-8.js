export const AZURE_AZ104_QUESTIONS_8 = [
  {
    id: "az-104-176",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Terms of Use Policies for Compliance",
    scenario: "A company requires that all external contractors and employees must view and consent to the corporate Acceptable Use Policy (AUP) document before they are granted access to any Azure portal or cloud application.",
    question: "Which Microsoft Entra feature enforces user acceptance of legal and compliance terms?",
    options: [
      { id: 'A', text: "Azure Resource Lock set to ReadOnly." },
      { id: 'B', text: "Azure Policy definition with Deny effect." },
      { id: 'C', text: "Microsoft Entra Terms of Use integrated with a Conditional Access policy." },
      { id: 'D', text: "Administrative Units." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra Terms of Use enables organizations to present PDF policy documents that users must read and consent to before accessing cloud applications. Integrating Terms of Use with Conditional Access policies automates mandatory re-consent intervals and blocks access until terms are accepted.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use",
    tags: ["Entra ID", "Terms of Use", "Conditional Access", "Compliance"]
  },
  {
    id: "az-104-177",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure RBAC Role Assignments on Resource Groups vs Individual Resources",
    scenario: "An administrator needs to grant an operations engineer permission to restart all virtual machines in resource group `rg-app-prod`, while ensuring the engineer cannot restart virtual machines in any other resource group.",
    question: "How should the role assignment be created to satisfy this requirement with minimal administrative overhead?",
    options: [
      { id: 'A', text: "Assign the Virtual Machine Contributor role to the engineer scoped at the `rg-app-prod` Resource Group level." },
      { id: 'B', text: "Assign the Owner role at the Management Group scope." },
      { id: 'C', text: "Assign the Contributor role at the Subscription scope." },
      { id: 'D', text: "Assign the Virtual Machine Contributor role individually on each VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assigning the built-in `Virtual Machine Contributor` role at the **Resource Group scope** (`rg-app-prod`) grants permissions to manage (start, stop, restart, configure) all virtual machines currently inside that resource group as well as any new VMs created in it in the future, without affecting VMs in other resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine-contributor",
    tags: ["Azure RBAC", "Resource Group", "Scope", "Governance"]
  },
  {
    id: "az-104-178",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Policy Compliance Evaluation Triggers and On-Demand Evaluation Scans",
    scenario: "An administrator assigns a new Azure Policy definition that audits unencrypted SQL databases. The compliance dashboard still shows \"Not Started\" after 10 minutes. The administrator needs to trigger an immediate on-demand policy compliance scan via the Azure CLI.",
    question: "Which Azure CLI command initiates an on-demand Azure Policy compliance evaluation scan for a subscription?",
    options: [
      { id: 'A', text: "`az monitor alert create`" },
      { id: 'B', text: "`az resource lock create`" },
      { id: 'C', text: "`az policy state trigger-scan`" },
      { id: 'D', text: "`az policy assignment create`" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "While Azure Policy evaluates compliance automatically every 24 hours and upon resource state changes, administrators can manually trigger an immediate on-demand compliance scan using the Azure CLI command `az policy state trigger-scan` (or in PowerShell via `Start-AzPolicyComplianceScan`).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data#on-demand-evaluation-scan",
    tags: ["Azure Policy", "Compliance Scan", "CLI", "Governance"]
  },
  {
    id: "az-104-179",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Password Reset Methods for SSPR",
    scenario: "An administrator is configuring authentication methods for Self-Service Password Reset (SSPR) in Microsoft Entra ID. The security policy mandates requiring users to verify their identity using at least two separate authentication methods.",
    question: "Which authentication methods can be enabled for SSPR in Microsoft Entra ID?",
    options: [
      { id: 'A', text: "Azure Storage SAS tokens." },
      { id: 'B', text: "Azure Bastion RDP session." },
      { id: 'C', text: "Microsoft Authenticator app notification/code, SMS text message, Email, Security questions, and FIDO2 security keys." },
      { id: 'D', text: "Password and username only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra SSPR supports multiple secure authentication methods: Microsoft Authenticator app (push notifications and verification codes), Mobile phone (SMS or voice call), Office phone, Alternate email address, Security questions, and FIDO2 hardware security keys.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods",
    tags: ["Entra ID", "SSPR", "Authentication Methods", "Identity"]
  },
  {
    id: "az-104-180",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Management Group Limits and Maximum Hierarchy Depth",
    scenario: "An enterprise cloud architecture team is designing an organizational Management Group hierarchy to govern 500 subscriptions across multiple business divisions and environments.",
    question: "What is the maximum supported hierarchy depth for Azure Management Groups?",
    options: [
      { id: 'A', text: "Up to 20 levels of depth." },
      { id: 'B', text: "Unlimited levels of depth." },
      { id: 'C', text: "Up to 6 levels of depth (excluding the Root level)." },
      { id: 'D', text: "Up to 2 levels of depth." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Management Group hierarchies support a maximum depth of **6 levels** (excluding the Root Management Group and the subscription level itself). A single directory can support up to 10,000 management groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview#important-facts-about-management-groups",
    tags: ["Management Groups", "Hierarchy", "Limits", "Governance"]
  },
  {
    id: "az-104-181",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Blob Types: Block Blobs vs Page Blobs vs Append Blobs",
    scenario: "A development team needs to select the correct Azure Blob type for three distinct use cases: 1) Storing video files and documents, 2) Random read/write storage for Azure IaaS VM unmanaged virtual hard disks (VHDs), and 3) Continuous streaming logging where new log entries are appended to the end of a file.",
    question: "Which blob types correspond to these three workload patterns?",
    options: [
      { id: 'A', text: "1) Block Blobs, 2) Page Blobs, 3) Append Blobs." },
      { id: 'B', text: "1) Append Blobs, 2) Page Blobs, 3) Block Blobs." },
      { id: 'C', text: "1) Page Blobs, 2) Block Blobs, 3) Append Blobs." },
      { id: 'D', text: "1) Block Blobs, 2) Block Blobs, 3) Block Blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "• **Block Blobs**: optimized for streaming and storing documents, images, and videos (up to 200 TB).<br>• **Page Blobs**: 512-byte pages optimized for random read/write access (used for VHD disks).<br>• **Append Blobs**: optimized for append operations (such as continuous logging where blocks are appended to the tail).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#blobs",
    tags: ["Blob Storage", "Block Blobs", "Page Blobs", "Append Blobs", "Storage"]
  },
  {
    id: "az-104-182",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Securing Azure Storage Accounts with Cross-Origin Resource Sharing (CORS)",
    scenario: "A web application hosted on `https://www.contoso.com` needs to load fonts and images directly from an Azure Blob Storage container (`https://contosomedia.blob.core.windows.net`) in client web browsers without triggering browser security blocks.",
    question: "Which Azure Storage feature must be configured on the Blob service to allow browser-based cross-domain asset requests?",
    options: [
      { id: 'A', text: "Blob Versioning." },
      { id: 'B', text: "Azure Storage Firewall setting set to \"All networks\"." },
      { id: 'C', text: "Cross-Origin Resource Sharing (CORS) rules specifying `https://www.contoso.com` as the Allowed Origin." },
      { id: 'D', text: "Stored Access Policy on the container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cross-Origin Resource Sharing (CORS) is an HTTP feature that enables a web application running under one domain (`https://www.contoso.com`) to access resources in another domain (`https://contosomedia.blob.core.windows.net`). Configuring CORS rules on the Blob service specifies allowed origins, allowed HTTP methods (GET, HEAD), allowed headers, and maximum age in cache.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/cross-origin-resource-sharing-support",
    tags: ["Azure Storage", "CORS", "Web Application", "Storage"]
  },
  {
    id: "az-104-183",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Immutability with Object-Level WORM Policies",
    scenario: "An application writes compliance invoices to an Azure Blob Storage container. Each invoice blob has a different retention requirement (some must be retained for 3 years, others for 7 years).",
    question: "Which Azure Blob Storage feature allows applying individual time-based retention WORM policies directly to specific blob versions?",
    options: [
      { id: 'A', text: "Blob-level (Object-level) Immutability policy." },
      { id: 'B', text: "Azure Resource Locks." },
      { id: 'C', text: "Container-level default immutability only." },
      { id: 'D', text: "Blob Index Tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage supports **blob-level immutability policies**, enabling applications to configure distinct time-based retention periods or legal holds directly on individual blob versions rather than applying a single uniform retention period across the entire container.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-policy-configure-version-scope",
    tags: ["Blob Storage", "Blob-Level Immutability", "WORM", "Compliance"]
  },
  {
    id: "az-104-184",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Cloud Tiering Low-Memory and Volume Sizing Limits",
    scenario: "An administrator manages an Azure File Sync server endpoint on a Windows Server volume. Users report that when opening tiered files, recall takes longer than expected or fails when local disk space is exhausted.",
    question: "How does Cloud Tiering handle tiered files (ghost files) on the local Windows Server filesystem?",
    options: [
      { id: 'A', text: "Tiered files require an RDP connection to Azure." },
      { id: 'B', text: "Tiered files are represented as local NTFS sparse files (reparse points) containing only metadata and a pointer to Azure Files, downloading on-demand when opened." },
      { id: 'C', text: "Tiered files are converted into zip files." },
      { id: 'D', text: "Tiered files are completely deleted from the local disk and invisible in File Explorer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When Cloud Tiering tiers a file, it replaces the local file with an NTFS reparse point (a \"ghost\" file with the offline attribute set) that takes up virtually zero local disk space while preserving file name, size, and timestamps. When a user opens the file, Azure File Sync transparently recalls the file data from Azure Files on-demand.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview#how-cloud-tiering-works",
    tags: ["Azure File Sync", "Cloud Tiering", "Reparse Points", "Storage"]
  },
  {
    id: "az-104-185",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Minimum TLS Version Enforcement",
    scenario: "A corporate security policy mandates that all data in transit to Azure Storage Accounts must use modern cryptography, requiring TLS 1.2 or higher and rejecting all legacy TLS 1.0 and TLS 1.1 client connections.",
    question: "Which setting in the storage account configuration enforces minimum TLS 1.2?",
    options: [
      { id: 'A', text: "Attach an NSG to the storage account." },
      { id: 'B', text: "Create an SAS token with HTTPS only." },
      { id: 'C', text: "Enable Storage Account Soft Delete." },
      { id: 'D', text: "Set \"Minimum TLS version\" to `Version 1.2` in the storage account configuration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Storage Accounts allow configuring the **Minimum TLS version** (TLS 1.2 by default in modern accounts). Any incoming client connection using older protocols (TLS 1.0 or TLS 1.1) is immediately rejected at the transport layer.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/transport-layer-security-configure-minimum-version",
    tags: ["Azure Storage", "TLS", "Security", "Compliance"]
  },
  {
    id: "az-104-186",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine IP Configuration: Private IP Allocation (Dynamic vs Static)",
    scenario: "An administrator is deploying a virtual machine that will serve as a Domain Controller (DC) inside an Azure Virtual Network subnet. The IP address must never change when the VM is deallocated or restarted.",
    question: "How should the private IP address allocation method be configured on the VM Network Interface (NIC)?",
    options: [
      { id: 'A', text: "Assign a Public IP address to the NIC." },
      { id: 'B', text: "Configure Private IP allocation to `Static` in the Azure NIC IP configuration settings." },
      { id: 'C', text: "Configure a static IP address manually inside the guest OS network adapter settings." },
      { id: 'D', text: "Keep Private IP allocation as `Dynamic`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "To assign a permanent private IP address to an Azure VM, you must configure the Private IP allocation method to **Static** in the Azure NIC IP configuration settings (in Azure portal or CLI). Setting static IPs manually inside the guest OS network adapter can cause IP conflicts and connectivity loss if Azure DHCP reassigns the address.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/virtual-networks-static-private-ip-arm-portal",
    tags: ["Virtual Machines", "Static IP", "Networking", "Compute"]
  },
  {
    id: "az-104-187",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets: Automatic Instance Repair",
    scenario: "An enterprise operates an auto-scaling VM scale set. If an individual VM instance experiences an operating system crash or application hang, the scale set must automatically detect the unhealthy instance and replace it with a newly provisioned instance with zero human intervention.",
    question: "Which VMSS feature detects unhealthy instances using application health probes and automatically replaces them?",
    options: [
      { id: 'A', text: "Automatic Instance Repair." },
      { id: 'B', text: "Azure Policy with Deny effect." },
      { id: 'C', text: "Azure Bastion." },
      { id: 'D', text: "Scale-In Policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automatic Instance Repair in Azure Virtual Machine Scale Sets monitors instance health using Application Health Extension or Load Balancer health probes. If an instance is reported unhealthy for a configurable grace period (e.g. 30 minutes), the scale set automatically terminates and recreates the unhealthy VM instance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-automatic-instance-repairs",
    tags: ["VMSS", "Automatic Repair", "Self-Healing", "Compute"]
  },
  {
    id: "az-104-188",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Isolated Plan and App Service Environment (ASE v3)",
    scenario: "A defense agency mandates that web applications and APIs must run in complete network isolation on dedicated hypervisors, with direct connectivity to private VNets, support for up to 1,000 instances, and zero shared multi-tenant infrastructure.",
    question: "Which Azure App Service hosting tier provides dedicated, isolated compute environments (ASE v3)?",
    options: [
      { id: 'A', text: "App Service Isolated v2 Plan (App Service Environment v3 / ASEv3)." },
      { id: 'B', text: "App Service Free Plan." },
      { id: 'C', text: "App Service Standard Plan." },
      { id: 'D', text: "App Service Premium v3 Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Service Environment v3 (ASEv3), hosted on the App Service Isolated v2 tier, is a fully isolated and dedicated environment for running App Service apps securely at high scale. It runs directly inside a customer's virtual network subnet on single-tenant dedicated hardware, providing maximum security, compliance, and hyper-scaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/environment/overview",
    tags: ["App Service", "ASEv3", "Isolated Plan", "Compute", "Security"]
  },
  {
    id: "az-104-189",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Generation 1 vs Generation 2 VMs",
    scenario: "An architect is selecting the VM architecture for an enterprise deployment on Azure. The VMs require support for UEFI boot, Trusted Launch (vTPM and Secure Boot), OS disks larger than 2 TB, and faster VM provisioning times.",
    question: "Which VM generation architecture must be selected during VM creation?",
    options: [
      { id: 'A', text: "Basic A-series VMs." },
      { id: 'B', text: "Generation 1 (Gen1) Virtual Machines." },
      { id: 'C', text: "Generation 2 (Gen2) Virtual Machines." },
      { id: 'D', text: "Azure App Service Container Plan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generation 2 (Gen2) VMs on Azure use UEFI-based boot architecture (instead of legacy BIOS), supporting modern enterprise security capabilities including Trusted Launch (vTPM 2.0 and Secure Boot), OS disks larger than 2 TB, and increased memory/size limits with faster boot and provisioning times.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/generation-2",
    tags: ["Virtual Machines", "Generation 2", "UEFI", "Trusted Launch", "Compute"]
  },
  {
    id: "az-104-190",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Apps (ACA) Revisions and Traffic Splitting (Blue/Green Deployment)",
    scenario: "A DevOps team is deploying version 2 of a microservice on Azure Container Apps. The team wants to route 80% of live production traffic to revision 1 and 20% of traffic to revision 2 to test performance before a full rollout.",
    question: "Which Azure Container Apps feature allows splitting traffic percentages across revisions?",
    options: [
      { id: 'A', text: "Azure DNS CNAME records." },
      { id: 'B', text: "Azure Load Balancer backend pools." },
      { id: 'C', text: "Azure Traffic Manager weighted routing." },
      { id: 'D', text: "Container Apps Ingress Traffic Splitting across multiple active revisions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Container Apps supports multiple active revisions with built-in **Traffic Splitting**. In the Container App ingress configuration, administrators can allocate exact traffic percentage weights (e.g. 80% to Revision 1, 20% to Revision 2) to execute seamless blue/green or canary testing without managing external load balancers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
    tags: ["Container Apps", "Revisions", "Traffic Splitting", "Canary", "Compute"]
  },
  {
    id: "az-104-191",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Peering: Gateway Transit with VPN Gateways",
    scenario: "An enterprise establishes a Hub-and-Spoke network topology. The Hub VNet contains an Azure VPN Gateway. When configuring VNet Peering from the Hub VNet to the Spoke VNet, which setting must be checked to permit the spoke to use the hub's gateway?",
    question: "Which setting is configured on the Hub VNet peering link?",
    options: [
      { id: 'A', text: "Enable auto-registration." },
      { id: 'B', text: "Use remote virtual network's gateways." },
      { id: 'C', text: "Allow gateway transit." },
      { id: 'D', text: "Allow forwarded traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "On the **Hub VNet peering link**, you must select **\"Allow gateway transit\"** (permitting the hub VNet to share its VPN/ExpressRoute gateway with the peered spoke). On the Spoke VNet peering link, you select **\"Use the remote virtual network's gateways\"**.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview#gateway-transit-and-on-premises-connectivity",
    tags: ["VNet Peering", "Gateway Transit", "Networking", "Hub and Spoke"]
  },
  {
    id: "az-104-192",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Load Balancer Session Persistence (Session Affinity) Modes",
    scenario: "A legacy stateful web application running behind an Azure Standard Load Balancer requires that all requests from a specific client IP address must be routed consistently to the exact same backend VM for the duration of the user's session.",
    question: "Which Session Persistence setting should be configured on the load balancing rule?",
    options: [
      { id: 'A', text: "Cookie-based session affinity." },
      { id: 'B', text: "Round robin." },
      { id: 'C', text: "None (5-tuple hash: Source IP, Source Port, Dest IP, Dest Port, Protocol)." },
      { id: 'D', text: "Client IP (2-tuple hash: Source IP, Destination IP)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Load Balancer supports two Session Persistence (affinity) modes: **Client IP** (2-tuple hash based on Source IP and Destination IP) and **Client IP and protocol** (3-tuple hash). Setting persistence to Client IP ensures subsequent requests from the same client IP are routed to the same backend instance. Cookie-based affinity (C) is a Layer 7 feature available on Application Gateway, not Load Balancer (Layer 4).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/distribution-mode-concepts",
    tags: ["Azure Load Balancer", "Session Persistence", "Networking"]
  },
  {
    id: "az-104-193",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway Mutual TLS (mTLS) Client Certificate Authentication",
    scenario: "An IoT gateway application hosted behind an Azure Application Gateway requires mutual TLS (mTLS) authentication. The Application Gateway must inspect client X.509 certificates against an enterprise Certificate Authority (CA) root chain before forwarding traffic to backend VMs.",
    question: "Which Application Gateway configuration enables client certificate verification at the gateway?",
    options: [
      { id: 'A', text: "Deploy an Azure Bastion host." },
      { id: 'B', text: "Configure an SSL Profile on the Application Gateway with an uploaded Trusted Client Certificate CA chain and attach it to the HTTPS listener." },
      { id: 'C', text: "Configure a Basic Load Balancer TCP probe." },
      { id: 'D', text: "Enable VNet Peering with Gateway Transit." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Application Gateway supports Mutual Authentication (mTLS). Administrators create an **SSL Profile** containing the uploaded Trusted Client CA Certificate chain and associate the profile with an HTTPS listener. The gateway validates client certificates during the TLS handshake and passes client certificate details to backend targets via HTTP server variables.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/mutual-authentication-overview",
    tags: ["Application Gateway", "mTLS", "SSL/TLS", "Security", "Networking"]
  },
  {
    id: "az-104-194",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network NAT Gateway vs Load Balancer Outbound Rules",
    scenario: "An administrator is choosing the outbound internet connectivity mechanism for a private subnet. The subnet requires 16 public IP addresses for outbound connections, automatic scaling of SNAT ports with zero port allocation management, and full zonal redundancy.",
    question: "Which Azure networking resource provides the simplest, recommended managed outbound SNAT solution for subnets?",
    options: [
      { id: 'A', text: "Instance-level public IPs." },
      { id: 'B', text: "Azure Basic Load Balancer." },
      { id: 'C', text: "Azure Virtual Network NAT Gateway (VNet NAT Gateway)." },
      { id: 'D', text: "Azure Standard Load Balancer outbound rules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Virtual Network NAT Gateway is Microsoft's recommended managed solution for outbound internet connectivity. Associated at the subnet level, it dynamically manages SNAT port allocation across up to 16 public IPs without complex per-VM port tuning, eliminating SNAT exhaustion and supporting Availability Zones.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["NAT Gateway", "SNAT", "Outbound Connectivity", "Networking"]
  },
  {
    id: "az-104-195",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private DNS Zone Split-Horizon DNS Resolution",
    scenario: "A company owns the public domain name `contoso.com`. Internal Azure virtual machines must resolve `server1.contoso.com` to a private IP `10.0.1.5`, while external internet users resolve `www.contoso.com` to public web server IPs.",
    question: "Which Azure DNS architecture implements split-horizon DNS for internal vs external resolution?",
    options: [
      { id: 'A', text: "Configure VNet Peering with Gateway Transit." },
      { id: 'B', text: "Create an Azure Private DNS Zone named `contoso.com` linked to the Azure VNet, and maintain an Azure Public DNS Zone named `contoso.com` for public records." },
      { id: 'C', text: "Deploy an Azure Bastion host." },
      { id: 'D', text: "Create a single Azure Public DNS Zone with private IP records." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Split-horizon DNS allows using the same domain name (`contoso.com`) for both internal and external networks. By creating an Azure Private DNS Zone for `contoso.com` linked to the VNet, Azure VMs resolve private IP records locally, while external internet clients query the Azure Public DNS Zone for public services.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-scenarios#split-horizon-functionality",
    tags: ["Private DNS", "Split-Horizon", "DNS", "Networking"]
  },
  {
    id: "az-104-196",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Log Analytics Commitment Tiers for Significant Cost Savings",
    scenario: "An enterprise Log Analytics workspace ingests an average of 600 GB of log data per day under the default Pay-As-You-Go ($2.30/GB) pricing model. The CFO wants to reduce monthly log ingestion spend.",
    question: "Which Azure Log Analytics pricing feature offers tiered discounts (up to 30–50%) for predictable high-volume log ingestion?",
    options: [
      { id: 'A', text: "Azure Advisor cost alerts." },
      { id: 'B', text: "Azure Storage Archive export." },
      { id: 'C', text: "Azure Resource Locks." },
      { id: 'D', text: "Log Analytics Commitment Tiers (e.g. 500 GB/day Commitment Tier)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Log Analytics Commitment Tiers allow organizations that ingest at least 100 GB/day to commit to a daily ingestion tier (100, 200, 500, 1000+ GB/day) at a substantial discount (up to 30–50% lower cost per GB) compared to the standard Pay-As-You-Go rate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cost-logs#commitment-tiers",
    tags: ["Log Analytics", "Commitment Tiers", "Cost Optimization", "FinOps", "Monitoring"]
  },
  {
    id: "az-104-197",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Recovery Plan with Automation Runbooks and Manual Actions",
    scenario: "An enterprise disaster recovery plan for a multi-tier application (Web, App, DB) requires that during a regional failover: 1) Database VMs fail over first, 2) An Azure Automation runbook updates DNS records, 3) Application VMs fail over, and 4) Web VMs fail over last.",
    question: "Which Azure Site Recovery component orchestrates multi-tier failover sequencing and automation scripts?",
    options: [
      { id: 'A', text: "Azure Monitor Alert Processing Rules." },
      { id: 'B', text: "ASR Recovery Plans (with Failover Groups and Azure Automation runbook actions)." },
      { id: 'C', text: "Azure Backup Enhanced Policies." },
      { id: 'D', text: "Network Watcher Connection Monitor." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Site Recovery (ASR) **Recovery Plans** orchestrate the failover of multi-tier applications. Recovery plans group virtual machines into ordered sequence groups (Group 1, Group 2, Group 3) and allow attaching automated **Azure Automation Runbooks** or manual action pauses (e.g. DNS updates, load balancer updates) during failover.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-create-recovery-plans",
    tags: ["Azure Site Recovery", "ASR", "Recovery Plans", "Disaster Recovery"]
  },
  {
    id: "az-104-198",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Dynamic Thresholds for Metric Alerts",
    scenario: "An e-commerce web app experiences varying CPU traffic patterns (high CPU during business hours, low CPU at night). Static metric alert thresholds (e.g. CPU > 80%) generate false alarms during promotions or miss subtle memory leak anomalies overnight.",
    question: "Which Azure Monitor alert feature uses machine learning to automatically establish baseline metric thresholds that adapt to seasonal patterns?",
    options: [
      { id: 'A', text: "Static Metric Alert rules." },
      { id: 'B', text: "Azure Resource Locks." },
      { id: 'C', text: "Activity Log Alert rules." },
      { id: 'D', text: "Dynamic Thresholds in Metric Alerts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dynamic Thresholds in Azure Monitor Metric Alerts use advanced machine learning algorithms to learn a metric's historical behavior, identify seasonal patterns (hourly, daily, weekly), and dynamically calculate upper and lower anomaly thresholds without requiring manual baseline tuning.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-dynamic-thresholds",
    tags: ["Azure Monitor", "Dynamic Thresholds", "Machine Learning", "Alerts"]
  },
  {
    id: "az-104-199",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Network Watcher Network Security Group (NSG) Diagnostics Tool",
    scenario: "An administrator needs to quickly test whether a specific IP packet (from source IP `10.0.1.5` to destination IP `10.0.2.10` on port 1433) will be permitted or denied by NSGs across all subnets and NICs, and see the exact rule responsible.",
    question: "Which Network Watcher diagnostic tool evaluates 5-tuple packet rules instantaneously?",
    options: [
      { id: 'A', text: "Topology." },
      { id: 'B', text: "IP Flow Verify." },
      { id: 'C', text: "Packet Capture." },
      { id: 'D', text: "Connection Monitor." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "IP Flow Verify in Azure Network Watcher tests whether a packet is allowed or denied to/from a virtual machine based on 5-tuple parameters (protocol, local IP, remote IP, local port, remote port) and immediately reports the matching NSG rule.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-ip-flow-verify-overview",
    tags: ["Network Watcher", "IP Flow Verify", "NSG", "Troubleshooting"]
  },
  {
    id: "az-104-200",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Center for Unified Enterprise Backup Management",
    scenario: "An enterprise cloud administrator needs a single centralized dashboard in the Azure portal to monitor backup jobs, configure backup policies, view restore activities, and track compliance across 50 Recovery Services Vaults and Backup Vaults spanning multiple subscriptions.",
    question: "Which unified management interface provides centralized governance for all Azure Backup resources?",
    options: [
      { id: 'A', text: "Azure Advisor." },
      { id: 'B', text: "Azure Network Watcher." },
      { id: 'C', text: "Azure Backup Center." },
      { id: 'D', text: "Azure Service Health." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Backup Center is a unified management experience in the Azure portal that provides centralized governance, monitoring, policy assignment, and auditing across all Recovery Services Vaults and Backup Vaults across subscriptions, locations, and resource types.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-center-overview",
    tags: ["Azure Backup", "Backup Center", "Governance", "Data Protection"]
  }
];

export default AZURE_AZ104_QUESTIONS_8;
