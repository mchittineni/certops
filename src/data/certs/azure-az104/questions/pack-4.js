export const AZURE_AZ104_QUESTIONS_4 = [
  {
    id: "az-104-76",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Access Reviews for Identity Governance",
    scenario: "A company needs to implement quarterly compliance reviews where managers must certify that their employees still require membership in the privileged \"Cloud Engineers\" security group, automatically removing unapproved members.",
    question: "Which Microsoft Entra governance feature automates recurring group membership certification?",
    options: [
      { id: 'A', text: "Azure Resource Locks." },
      { id: 'B', text: "Microsoft Entra Terms of Use." },
      { id: 'C', text: "Azure Policy initiative." },
      { id: 'D', text: "Microsoft Entra Access Reviews." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra Access Reviews enable organizations to efficiently manage group memberships, access to enterprise applications, and privileged role assignments. Group owners or managers receive automated review prompts to recertify user access, with automated actions to revoke access if a reviewer denies access or fails to respond within the review period.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview",
    tags: ["Entra ID", "Access Reviews", "Identity Governance", "Compliance"]
  },
  {
    id: "az-104-77",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure RBAC Deny Assignments Created by Azure Blueprints",
    scenario: "An administrator with the Owner role on an Azure subscription attempts to delete a resource group deployed by an Azure Blueprints assignment, but receives an access denied error citing a \"Deny Assignment\".",
    question: "Why does the Deny Assignment block the subscription Owner from deleting the resource?",
    options: [
      { id: 'A', text: "Deny Assignments take precedence over all RBAC role assignments, including the built-in Owner role." },
      { id: 'B', text: "The Owner role does not have delete permissions by default." },
      { id: 'C', text: "The administrator must activate the User Access Administrator role first." },
      { id: 'D', text: "The subscription has exceeded its resource quota." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure RBAC Deny Assignments (created by managed Azure systems like Azure Blueprints or Azure Managed Applications) explicitly block users from performing specific actions, even if an RBAC role assignment (such as Owner or Contributor) grants them permission. Deny assignments always take precedence over allow assignments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/deny-assignments",
    tags: ["Azure RBAC", "Deny Assignments", "Governance", "Blueprints"]
  },
  {
    id: "az-104-78",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom Azure RBAC Role with DataActions: Blob Data Contributor",
    scenario: "A developer needs a custom Azure RBAC role that allows reading and writing blob data inside Azure Blob Storage containers, but must strictly prohibit the developer from modifying storage account networking, keys, or resource settings.",
    question: "Which section in the custom RBAC role definition defines permissions for the storage data plane?",
    options: [
      { id: 'A', text: "`DataActions` section specifying `Microsoft.Storage/storageAccounts/blobServices/containers/blobs/*`." },
      { id: 'B', text: "`AssignableScopes` set to the Microsoft Entra root." },
      { id: 'C', text: "`NotActions` section specifying `Microsoft.Storage/storageAccounts/delete`." },
      { id: 'D', text: "`Actions` section specifying `Microsoft.Storage/storageAccounts/*`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure RBAC separates control plane operations (managing Azure resources themselves, specified under `Actions`) from data plane operations (reading/writing data inside storage blobs, queues, and Cosmos DB, specified under `DataActions`). Granting permissions under `DataActions` allows interacting with blob data without giving management control over the storage account.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/role-definitions#dataactions",
    tags: ["Azure RBAC", "DataActions", "Blob Storage", "Governance"]
  },
  {
    id: "az-104-79",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Moving Azure Resources Between Resource Groups and Subscriptions",
    scenario: "An administrator needs to move an existing virtual machine and its associated managed OS disk and Network Interface (NIC) from `rg-development` to `rg-production` within the same subscription.",
    question: "What happens to the virtual machine and its resource IDs during the move operation?",
    options: [
      { id: 'A', text: "The VM is duplicated in both resource groups." },
      { id: 'B', text: "The VM and resources move to `rg-production`, retaining all settings, but their resource ID paths update to reference `rg-production`." },
      { id: 'C', text: "The VM private IP address must be changed." },
      { id: 'D', text: "The VM must be recreated and all disk data is lost." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Moving resources between resource groups or subscriptions in Azure is a metadata-only pointer update in Azure Resource Manager. The virtual machine and its disks/NICs move without data loss or downtime (for supported resource types), while their Azure resource IDs update to reflect the new target resource group.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription",
    tags: ["Resource Group", "Resource Move", "Governance", "ARM"]
  },
  {
    id: "az-104-80",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Protection and Risk-Based Conditional Access Policies",
    scenario: "A company needs to automatically force a password change whenever Microsoft Entra ID detects that a user's credentials have been leaked on the dark web (High User Risk event).",
    question: "Which combination of Microsoft Entra features automates password remediation upon high user risk detection?",
    options: [
      { id: 'A', text: "Microsoft Entra ID Protection User Risk policy configured with \"Require password change\" grant control." },
      { id: 'B', text: "Administrative Units with dynamic device rules." },
      { id: 'C', text: "Azure Key Vault secret rotation." },
      { id: 'D', text: "Azure Policy with Modify effect." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Entra ID Protection uses machine learning and threat intelligence to calculate **User Risk** (probability that an identity is compromised, such as leaked credentials). Configuring a User Risk policy in Conditional Access with \"Require password change\" forces the user to securely reset their password via SSPR before gaining access, remediating the risk automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/identity-protection-overview",
    tags: ["Entra ID", "ID Protection", "User Risk", "Security"]
  },
  {
    id: "az-104-81",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Blob Versioning for Historical Tracking",
    scenario: "A document management system writes PDF files to Azure Blob Storage. When an existing PDF blob is overwritten with an updated version, the previous version must be preserved automatically so users can view or restore previous versions.",
    question: "Which Azure Blob Storage feature automatically maintains previous versions of overwritten blobs?",
    options: [
      { id: 'A', text: "Blob Soft Delete." },
      { id: 'B', text: "Storage Account Resource Locks." },
      { id: 'C', text: "Static Website Hosting." },
      { id: 'D', text: "Blob Versioning." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Blob Versioning automatically creates and stores a previous version of a blob whenever the blob is overwritten or modified. Users can view, download, or restore earlier versions of blobs at any time, maintaining an audit trail of document changes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview",
    tags: ["Blob Storage", "Versioning", "Data Protection", "Storage"]
  },
  {
    id: "az-104-82",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication with Microsoft Entra Kerberos",
    scenario: "An enterprise wants hybrid remote workers to mount and access Azure Files SMB shares using their cloud-only Microsoft Entra ID identities and Kerberos authentication, without requiring line-of-sight to on-premises domain controllers.",
    question: "Which authentication method enables cloud-native identity access to Azure Files over SMB?",
    options: [
      { id: 'A', text: "Anonymous public read access." },
      { id: 'B', text: "Storage account shared access keys only." },
      { id: 'C', text: "Azure Bastion RDP tunneling." },
      { id: 'D', text: "Microsoft Entra Kerberos authentication for hybrid and cloud-only identities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra Kerberos allows cloud-only and hybrid Microsoft Entra identities to securely access Azure Files SMB shares using Kerberos ticket authentication issued by Microsoft Entra ID, without requiring network line-of-sight to on-premises Active Directory Domain Services domain controllers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Entra Kerberos", "SMB", "Authentication", "Security"]
  },
  {
    id: "az-104-83",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Static Website Hosting in Azure Storage and Custom Domains",
    scenario: "A developer hosts a Single-Page Application (SPA) using HTML, CSS, and JavaScript in the `$web` container of an Azure Storage Account configured for Static Website Hosting. The website needs to be accessible via a custom domain name (`www.contoso.com`) with a free managed SSL/TLS certificate.",
    question: "Which Azure service should be deployed in front of the static website storage container?",
    options: [
      { id: 'A', text: "Azure Virtual Network NAT Gateway." },
      { id: 'B', text: "Azure Network Security Group." },
      { id: 'C', text: "Azure ExpressRoute." },
      { id: 'D', text: "Azure Front Door (or Azure CDN) with custom domain and managed SSL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploying Azure Front Door or Azure CDN in front of an Azure Storage static website (`$web` container) provides edge caching, global latency reduction, custom domain mapping (`www.contoso.com`), and free automated SSL/TLS certificate provisioning and renewal. Static storage accounts alone cannot provide free managed custom domain SSL certs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-custom-domain",
    tags: ["Static Website", "Azure CDN", "Front Door", "Storage", "Custom Domain"]
  },
  {
    id: "az-104-84",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Replication: Read-Access Geo-Redundant Storage (RA-GRS)",
    scenario: "A reporting application requires read-only access to secondary region storage replicas in West US at all times for analytics querying, while write operations continue in East US.",
    question: "Which storage redundancy configuration provides active read access to the secondary region endpoint?",
    options: [
      { id: 'A', text: "Locally Redundant Storage (LRS)." },
      { id: 'B', text: "Read-Access Geo-Redundant Storage (RA-GRS) or RA-GZRS." },
      { id: 'C', text: "Zone-Redundant Storage (ZRS)." },
      { id: 'D', text: "Standard Geo-Redundant Storage (GRS)." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Read-Access Geo-Redundant Storage (RA-GRS) and RA-GZRS provide a dedicated secondary read-only DNS endpoint (`&lt;accountname&gt;-secondary.blob.core.windows.net`), enabling applications to read data from the secondary region at any time without waiting for a customer-initiated or Microsoft-declared failover.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy#read-access-to-data-in-the-secondary-region",
    tags: ["Azure Storage", "RA-GRS", "Redundancy", "High Availability"]
  },
  {
    id: "az-104-85",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Explorer for Cross-Platform GUI Management",
    scenario: "A system administrator needs a standalone desktop application for Windows, macOS, and Linux that allows graphical management of Azure Blob containers, Azure Files, Queue storage, and Cosmos DB tables using Microsoft Entra or SAS credentials.",
    question: "Which official Microsoft desktop client tool provides this cross-platform storage interface?",
    options: [
      { id: 'A', text: "Azure Data Studio." },
      { id: 'B', text: "Remote Desktop Connection." },
      { id: 'C', text: "Azure Storage Explorer." },
      { id: 'D', text: "SQL Server Management Studio." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Storage Explorer is a free, standalone GUI desktop application provided by Microsoft for Windows, macOS, and Linux that lets you easily manage Azure storage resources, blobs, files, queues, and tables via Entra ID, account keys, or SAS tokens.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/vs-azure-tools-storage-manage-with-storage-explorer",
    tags: ["Storage Explorer", "Azure Storage", "Management Tool"]
  },
  {
    id: "az-104-86",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Dedicated Hosts for Physical Server Compliance Isolation",
    scenario: "A compliance regulator mandates that a financial institution's database virtual machines must run on physical hardware dedicated exclusively to their organization, ensuring no other Azure customer shares the underlying physical server host.",
    question: "Which Azure compute service provisions dedicated single-tenant physical hardware servers?",
    options: [
      { id: 'A', text: "Azure App Service Isolated Plan." },
      { id: 'B', text: "Azure Container Instances." },
      { id: 'C', text: "Azure Dedicated Host." },
      { id: 'D', text: "Azure Virtual Machine Scale Sets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Dedicated Host provides physical server hardware dedicated to a single Azure customer subscription, ensuring that your virtual machines run on single-tenant hardware to satisfy strict regulatory compliance, physical hardware isolation, and server-level licensing requirements (such as Azure Hybrid Benefit for Windows/SQL Server per-core licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts",
    tags: ["Dedicated Host", "Compliance", "Isolation", "Compute"]
  },
  {
    id: "az-104-87",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Automated VM Shutdown with Scheduled Auto-Shutdown",
    scenario: "A development team manages 100 non-production virtual machines that are used only between 08:00 and 18:00 on weekdays. The CFO wants to reduce monthly compute spend by automatically shutting down all dev VMs at 19:00 daily.",
    question: "Which built-in Azure Virtual Machine feature automates daily power-off without writing custom scripts?",
    options: [
      { id: 'A', text: "Azure Resource Locks." },
      { id: 'B', text: "Azure Site Recovery." },
      { id: 'C', text: "Azure VM Auto-Shutdown feature." },
      { id: 'D', text: "Azure Policy with Deny effect." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure VM Auto-Shutdown feature is a built-in capability configured on individual virtual machines (or via Azure Policy at scale) that automatically deallocates the VM at a specified time daily, sending an optional notification via webhook or email prior to shutdown.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/manage-automation#auto-shutdown-for-vms",
    tags: ["Virtual Machines", "Auto-Shutdown", "Cost Optimization", "FinOps"]
  },
  {
    id: "az-104-88",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Custom Domains and Managed Certificates",
    scenario: "A company needs to bind a custom domain `api.contoso.com` to an Azure App Service web app. The company requires a valid SSL/TLS certificate bound with SNI, but wants Microsoft to handle certificate issuance, validation, and auto-renewal at zero additional cost.",
    question: "Which Azure App Service TLS certificate option provides free automated management?",
    options: [
      { id: 'A', text: "Self-signed certificate uploaded to Key Vault." },
      { id: 'B', text: "App Service Certificate purchased via GoDaddy." },
      { id: 'C', text: "App Service Managed Certificate (ASMC)." },
      { id: 'D', text: "IP-based SSL certificate with dedicated IPv4." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "App Service Managed Certificates (ASMC) are free, fully managed TLS/SSL certificates issued and managed directly by Microsoft Azure for custom apex domains and subdomains on App Service Basic, Standard, and Premium tiers. Azure automatically renews the certificate before expiration with zero administrative effort.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/configure-ssl-certificate#create-a-free-managed-certificate",
    tags: ["App Service", "Managed Certificate", "SSL/TLS", "Custom Domain"]
  },
  {
    id: "az-104-89",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pool Autoscaling",
    scenario: "An administrator manages an Azure Kubernetes Service (AKS) cluster. When pod workloads scale up and exceed the CPU/memory capacity of existing worker nodes, new worker node VMs must automatically be provisioned to join the cluster node pool.",
    question: "Which AKS feature automatically adjusts the number of virtual machine worker nodes in a node pool?",
    options: [
      { id: 'A', text: "Azure Monitor Log Analytics workspace." },
      { id: 'B', text: "AKS Cluster Autoscaler." },
      { id: 'C', text: "Horizontal Pod Autoscaler (HPA)." },
      { id: 'D', text: "Azure Bastion." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AKS Cluster Autoscaler monitors pods that cannot be scheduled on existing nodes due to resource constraints and automatically increases the number of VM nodes in the node pool (up to the configured maximum). Conversely, when nodes are underutilized, it safely scales down node capacity. Horizontal Pod Autoscaler (B) adjusts pod replicas, not VM worker nodes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/cluster-autoscaler",
    tags: ["AKS", "Cluster Autoscaler", "Kubernetes", "Compute"]
  },
  {
    id: "az-104-90",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Capturing and Deploying Custom Virtual Machine Images with Azure Compute Gallery",
    scenario: "An enterprise builds a golden Windows Server 2022 image with customized enterprise software and hardening configurations. The team needs to share and replicate this golden image across 10 Azure regions for rapid VM deployment.",
    question: "Which Azure service centrally manages, versions, and globally replicates customized VM images?",
    options: [
      { id: 'A', text: "Azure Compute Gallery (formerly Shared Image Gallery)." },
      { id: 'B', text: "Azure Blob Storage general container." },
      { id: 'C', text: "Azure Data Box." },
      { id: 'D', text: "Azure File Sync." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Compute Gallery (formerly Shared Image Gallery) simplifies sharing, versioning, and managing customized virtual machine images and applications. It provides automated global image replication across multiple Azure regions, image version lifecycle management, and sharing across subscriptions and Microsoft Entra tenants.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/azure-compute-gallery",
    tags: ["Compute Gallery", "VM Images", "Custom Images", "Automation"]
  },
  {
    id: "az-104-91",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Peering Non-Transitive Routing Behavior",
    scenario: "A company has three virtual networks: `VNet-A` is peered with `VNet-B`, and `VNet-B` is peered with `VNet-C`. There is no peering connection directly between `VNet-A` and `VNet-C`.",
    question: "By default, can virtual machines in `VNet-A` communicate with virtual machines in `VNet-C`?",
    options: [
      { id: 'A', text: "Yes, if Network Security Groups permit port 80." },
      { id: 'B', text: "No, because VNet Peering is non-transitive by default." },
      { id: 'C', text: "Yes, because VNet Peering is fully transitive." },
      { id: 'D', text: "Yes, if all VNets are in the same resource group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Virtual Network Peering is **non-transitive** by default. Traffic from `VNet-A` cannot pass through `VNet-B` to reach `VNet-C` unless a Network Virtual Appliance (NVA) / Azure Firewall or Azure Virtual Network Gateway with User-Defined Routes is deployed in `VNet-B` to act as a router.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview#service-chaining",
    tags: ["VNet Peering", "Non-Transitive", "Routing", "Networking"]
  },
  {
    id: "az-104-92",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Security Group Default Security Rules",
    scenario: "An administrator creates a new, clean Network Security Group (NSG) without adding any custom security rules, and attaches it to a VM subnet.",
    question: "Which traffic is permitted by the built-in default NSG inbound rules?",
    options: [
      { id: 'A', text: "All inbound and outbound traffic is completely blocked." },
      { id: 'B', text: "All inbound traffic from within the Virtual Network (`AllowVNetInBound`) and Azure Load Balancers (`AllowAzureLoadBalancerInBound`) is allowed; all other inbound traffic is denied (`DenyAllInBound`)." },
      { id: 'C', text: "All inbound traffic from the public internet is allowed by default." },
      { id: 'D', text: "Only RDP (port 3389) is permitted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Every NSG contains three immutable default inbound rules: 1) `AllowVNetInBound` (Priority 65000: allows intra-VNet and peered VNet traffic), 2) `AllowAzureLoadBalancerInBound` (Priority 65001: allows Azure load balancer health probes), and 3) `DenyAllInBound` (Priority 65500: blocks all other inbound traffic from internet/external). Default rules have low priority and can be overridden by custom rules (100–4096).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview#default-security-rules",
    tags: ["NSG", "Default Rules", "Security", "Networking"]
  },
  {
    id: "az-104-93",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual Network Gateway Coexistence: ExpressRoute and Site-to-Site VPN Active-Active Failover",
    scenario: "An enterprise connects its on-premises corporate datacenter to Azure using an Azure ExpressRoute dedicated circuit. The network team mandates configuring a Site-to-Site VPN as an automated fallback path in case the ExpressRoute physical provider connection experiences a cut.",
    question: "Which Azure VPN Gateway configuration enables ExpressRoute and VPN coexistence in the same virtual network?",
    options: [
      { id: 'A', text: "Configure Policy-Based VPN with static routes only." },
      { id: 'B', text: "Deploy two `GatewaySubnet` subnets in the VNet." },
      { id: 'C', text: "Deploy Azure Bastion in the GatewaySubnet." },
      { id: 'D', text: "Deploy an ExpressRoute Gateway and a Route-Based VPN Gateway in the `GatewaySubnet`, configuring both to advertise identical routes over BGP." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure supports configuring Site-to-Site VPN connections as a failover backup for ExpressRoute (coexisting connections). Both the ExpressRoute Gateway and a Route-Based VPN Gateway reside within the single `GatewaySubnet`. By configuring BGP on both connections, Azure automatically prefers the higher-priority ExpressRoute path and fails over to the Site-to-Site VPN if ExpressRoute drops.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-howto-coexist-resource-manager",
    tags: ["ExpressRoute", "VPN Gateway", "Coexistence", "Failover", "Networking"]
  },
  {
    id: "az-104-94",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Route Table System Routes vs User-Defined Routes (UDR)",
    scenario: "A subnet in `VNet-1` needs to reach a legacy server on-premises with IP `192.168.1.50`. The subnet route table has a System Route for `192.168.0.0/16` pointing to `Virtual network gateway`, and a custom User-Defined Route (UDR) for `192.168.1.0/24` pointing to a firewall appliance (`Virtual appliance` at `10.0.1.4`).",
    question: "How does Azure route packets destined for `192.168.1.50`?",
    options: [
      { id: 'A', text: "Packets are routed to the `Virtual network gateway` because system routes take precedence over UDRs." },
      { id: 'B', text: "Packets are routed to the `Virtual appliance` (`10.0.1.4`) because `192.168.1.0/24` is a longer prefix match (more specific route) than `192.168.0.0/16`." },
      { id: 'C', text: "Packets are dropped due to routing conflict." },
      { id: 'D', text: "Packets are load balanced equally between both paths." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure routing uses Longest Prefix Match (LPM) to select route paths. The `/24` route (`192.168.1.0/24`) is more specific than the `/16` route (`192.168.0.0/16`), so Azure selects the `/24` User-Defined Route and forwards traffic to the Virtual Appliance. If two routes have identical prefix length, UDRs take precedence over BGP and system default routes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#how-azure-selects-a-route",
    tags: ["Route Tables", "UDR", "LPM", "Routing", "Networking"]
  },
  {
    id: "az-104-95",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Link: Consuming Internal SaaS Services with Private Link Service",
    scenario: "A company hosts a proprietary microservices API in `VNet-Provider` behind a Standard Network Load Balancer (NLB). Multiple customer companies in different Azure subscriptions need to consume this API privately over private IPs without establishing VNet Peering or exposing public IPs.",
    question: "Which Azure networking resource should the provider create to expose their service privately?",
    options: [
      { id: 'A', text: "Azure Virtual WAN." },
      { id: 'B', text: "Azure VNet Peering with Gateway Transit." },
      { id: 'C', text: "Azure Private Link Service attached to the Standard Load Balancer." },
      { id: 'D', text: "Azure Public Load Balancer with port forwarding." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Private Link Service allows service providers to expose their own services (hosted behind a Standard Load Balancer) privately to consumers in other VNets and subscriptions. Consumers create Private Endpoints in their subnets to connect directly and unidirectionally over private IP addresses, preventing network address overlap (CIDR conflicts) and eliminating VNet peering requirements.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-link-service-overview",
    tags: ["Private Link Service", "Private Endpoint", "Networking", "Security"]
  },
  {
    id: "az-104-96",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Workspace-Based Application Insights Architecture",
    scenario: "A company is standardizing telemetry storage for 20 microservices across several Azure regions. The CISO mandates that all Application Insights application telemetry (requests, exceptions, page views) must be centralized into a shared Azure Log Analytics workspace to enable unified KQL querying and consolidated data retention policies.",
    question: "Which Application Insights deployment mode stores application telemetry directly in a Log Analytics workspace?",
    options: [
      { id: 'A', text: "Classic Application Insights (deprecated)." },
      { id: 'B', text: "Azure Event Hubs stream only." },
      { id: 'C', text: "Workspace-based Application Insights resource." },
      { id: 'D', text: "Azure Storage Blob table." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Workspace-based Application Insights resources send application performance telemetry directly to a specified Azure Log Analytics workspace. This allows combining application telemetry with VM logs, container logs, and Azure platform diagnostics into a single queryable repository, taking advantage of unified Log Analytics retention settings, commitments, and RBAC.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/create-workspace-resource",
    tags: ["Application Insights", "Log Analytics", "Workspace-Based", "Monitoring"]
  },
  {
    id: "az-104-97",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Network Watcher Packet Capture for Protocol Troubleshooting",
    scenario: "A network administrator is troubleshooting an intermittent application crash on an Azure Linux VM. The administrator needs to capture raw network packet traces (`.cap` / `.pcap` files) on the VM's network interface for 15 minutes and save the capture file directly to an Azure Storage Account container.",
    question: "Which Azure Network Watcher tool captures raw network packet streams remotely without logging into the VM?",
    options: [
      { id: 'A', text: "IP Flow Verify." },
      { id: 'B', text: "Security Group View." },
      { id: 'C', text: "Next Hop verification." },
      { id: 'D', text: "Azure Network Watcher Packet Capture." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Network Watcher Packet Capture allows administrators to programmatically initiate and manage packet captures on virtual machines (via the Network Watcher VM extension) remotely. Captures can be filtered by IP, port, or protocol, run for specified time or byte limits, and output directly to an Azure Storage Account or local disk for Wireshark analysis.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-packet-capture-overview",
    tags: ["Network Watcher", "Packet Capture", "Troubleshooting", "Monitoring"]
  },
  {
    id: "az-104-98",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Resource Health vs Azure Service Health",
    scenario: "A developer notices that an individual virtual machine `vm-web-01` became unresponsive. The developer needs to check whether the underlying physical host server hosting that specific VM experienced a hardware reboot.",
    question: "Which health tool in the Azure portal displays the operational health status and history of an individual Azure resource?",
    options: [
      { id: 'A', text: "Azure Resource Health." },
      { id: 'B', text: "Azure Status page (public)." },
      { id: 'C', text: "Azure Advisor." },
      { id: 'D', text: "Azure Service Health." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Resource Health provides diagnostic information about the health of specific individual Azure resources (such as a single VM, SQL DB, or App Service instance), indicating whether the resource is Available, Degraded, Unavailable, or Unknown due to platform events, host reboots, or customer actions. Service Health (B) tracks regional service-wide outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview",
    tags: ["Resource Health", "Service Health", "Troubleshooting", "Monitoring"]
  },
  {
    id: "az-104-99",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Policy Retention Schedules: Daily, Weekly, Monthly, Yearly",
    scenario: "A financial compliance auditor requires that daily VM backups are retained for 30 days, weekly backups are retained for 12 weeks, monthly backups are retained for 60 months (5 years), and yearly backups are retained for 10 years.",
    question: "How should the administrator configure the backup schedule in the Recovery Services Vault?",
    options: [
      { id: 'A', text: "Write a custom PowerShell script using Cron." },
      { id: 'B', text: "Create 4 separate Recovery Services Vaults in different regions." },
      { id: 'C', text: "Define a single Azure Backup Policy with configured Daily, Weekly, Monthly, and Yearly Grandfather-Father-Son (GFS) retention rules." },
      { id: 'D', text: "Enable Blob Lifecycle Management on the VM managed disks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Backup policies natively support Grandfather-Father-Son (GFS) retention schedules within a single backup policy. Administrators can specify retention timeframes independently for Daily, Weekly, Monthly, and Yearly recovery points within the same Recovery Services Vault.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-first-look-arm#create-a-backup-policy",
    tags: ["Azure Backup", "Backup Policy", "Retention", "Compliance"]
  },
  {
    id: "az-104-100",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics Explorer for Real-Time Performance Visualizations",
    scenario: "An operations engineer needs to generate a real-time line chart comparing the `Percentage CPU` and `Network In Total` metrics across 10 virtual machines in an Azure Virtual Machine Scale Set over the last 4 hours.",
    question: "Which tool within Azure Monitor provides interactive charting and metric aggregation?",
    options: [
      { id: 'A', text: "Azure Network Watcher Topology." },
      { id: 'B', text: "Azure Cost Management." },
      { id: 'C', text: "Azure Activity Log." },
      { id: 'D', text: "Azure Monitor Metrics Explorer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Monitor Metrics Explorer is a component of the Azure portal that allows plotting charts, visually correlating trends, and investigating performance spikes in numerical time-series metrics emitted by Azure resources, with support for splitting, filtering, and pinning charts to Azure dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-getting-started",
    tags: ["Azure Monitor", "Metrics Explorer", "Metrics", "Monitoring"]
  }
];

export default AZURE_AZ104_QUESTIONS_4;
