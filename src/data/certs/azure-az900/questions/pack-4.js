export const AZURE_AZ900_QUESTIONS_4 = [
  {
    id: "az-900-76",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Region Definition",
    scenario: "A company needs to deploy virtual machines in a specific geographic area containing one or more datacenters connected via a low-latency network.",
    question: "What Azure architectural construct defines this geographical boundary?",
    options: [
      { id: 'A', text: "A resource group" },
      { id: 'B', text: "An Azure region" },
      { id: 'C', text: "An Availability Zone" },
      { id: 'D', text: "An Azure geography" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure region is a geographical area that contains one or more datacenters that are located nearby and connected by a dedicated, low-latency regional network. Regions allow customers to deploy workloads close to users for optimal performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview",
    tags: ["Azure Architecture", "Regions", "Core Infrastructure"]
  },
  {
    id: "az-900-77",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Region Pairs",
    scenario: "An organization wants to protect against regional disasters by taking advantage of pre-configured cross-region replication and phased platform updates that ensure only one region in the pair is updated at a time.",
    question: "Which Azure feature provides this relationship?",
    options: [
      { id: 'A', text: "Azure region pairs" },
      { id: 'B', text: "Virtual Network peering" },
      { id: 'C', text: "Azure Availability Zones" },
      { id: 'D', text: "Management Groups" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each Azure region is paired with another region within the same geography (at least 300 miles apart where possible). Azure region pairs feature phased updates so platform patches are rolled out to one region at a time, and provide native cross-region replication for storage services like GRS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure",
    tags: ["Azure Architecture", "Region Pairs", "Resilience"]
  },
  {
    id: "az-900-78",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Sovereign Clouds - Government",
    scenario: "A United States federal agency requires cloud services that meet strict FedRAMP High and Department of Defense Impact Level 5 compliance requirements, operated in isolated physical datacenters by screened US citizens.",
    question: "Which Azure environment should the agency adopt?",
    options: [
      { id: 'A', text: "Public Azure commercial cloud" },
      { id: 'B', text: "Azure Stack Hub on-premises only" },
      { id: 'C', text: "Azure China 21Vianet" },
      { id: 'D', text: "Azure Government" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Government is a physically and logically isolated cloud environment dedicated exclusively to US federal, state, local, and tribal governments and their authorized partners, meeting the most rigorous compliance standards such as FedRAMP High and DoD IL5.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-government/documentation-government-overview",
    tags: ["Azure Architecture", "Azure Government", "Sovereign Cloud"]
  },
  {
    id: "az-900-79",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Availability Zones Architecture",
    scenario: "An enterprise architect is designing an e-commerce platform that must withstand a total power outage or flood affecting an entire datacenter building in an Azure region.",
    question: "Which Azure architectural feature provides physically separated datacenters within the same region, each equipped with independent power, cooling, and networking?",
    options: [
      { id: 'A', text: "Azure Resource Groups" },
      { id: 'B', text: "Azure Subscriptions" },
      { id: 'C', text: "Azure Availability Zones" },
      { id: 'D', text: "Azure Region Pairs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Availability Zones are physically separate datacenter locations within an Azure region. Each Availability Zone is made up of one or more datacenters equipped with independent power, cooling, and networking infrastructure to protect applications from datacenter-level failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview",
    tags: ["Azure Architecture", "Availability Zones", "High Availability"]
  },
  {
    id: "az-900-80",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Management Groups Hierarchy",
    scenario: "An IT administrator manages 40 Azure subscriptions for different business units. Management wants to apply governance policies and access controls across all 40 subscriptions simultaneously.",
    question: "Which Azure resource container sits above subscriptions in the organizational hierarchy?",
    options: [
      { id: 'A', text: "Resource Groups" },
      { id: 'B', text: "Subscriptions" },
      { id: 'C', text: "Management Groups" },
      { id: 'D', text: "Availability Sets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Management Groups provide a level of scope above subscriptions. If an organization has multiple subscriptions, management groups allow administrators to efficiently manage access, policies, and compliance across all subscriptions by inheriting policies applied at the management group level.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Architecture", "Management Groups", "Governance"]
  },
  {
    id: "az-900-81",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Groups Lifecycle",
    scenario: "A development team creates 15 resources (VMs, storage, virtual networks, and databases) for a short-term project. When the project completes, they want to delete all 15 resources with a single operation.",
    question: "Which Azure construct should they use to group and manage the lifecycle of these related resources?",
    options: [
      { id: 'A', text: "A Virtual Network subnet" },
      { id: 'B', text: "An Azure Resource Group" },
      { id: 'C', text: "A Management Group" },
      { id: 'D', text: "An Availability Zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure Resource Group is a logical container into which Azure resources (like VMs, databases, and VNets) are deployed and managed. Deleting a resource group automatically deletes all resources contained within it, providing clean lifecycle management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
    tags: ["Azure Architecture", "Resource Groups", "Lifecycle"]
  },
  {
    id: "az-900-82",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Manager (ARM)",
    scenario: "An enterprise uses automated pipelines to deploy infrastructure using JSON templates and the Azure CLI. Regardless of whether deployments originate from the Azure Portal, PowerShell, or SDKs, the deployment requests are validated and routed consistently.",
    question: "Which Azure management layer handles all deployment, management, and access control requests?",
    options: [
      { id: 'A', text: "Microsoft Entra ID Application Proxy" },
      { id: 'B', text: "Azure Resource Manager (ARM)" },
      { id: 'C', text: "Azure Service Health" },
      { id: 'D', text: "Azure Monitor" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Resource Manager (ARM) is the central deployment and management service for Azure. It provides a consistent management layer across the Azure Portal, Azure PowerShell, Azure CLI, and REST APIs, ensuring authentication, policy enforcement, and audit logging for every resource action.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
    tags: ["Azure Architecture", "ARM", "Management Layer"]
  },
  {
    id: "az-900-83",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (IaaS Compute)",
    scenario: "An organization needs to run custom enterprise software that requires direct access to the underlying operating system and specific registry configurations.",
    question: "Which Azure compute service should they deploy?",
    options: [
      { id: 'A', text: "Azure Virtual Machines" },
      { id: 'B', text: "Azure Functions" },
      { id: 'C', text: "Azure App Service" },
      { id: 'D', text: "Azure Logic Apps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Virtual Machines is an Infrastructure as a Service (IaaS) offering that gives customers full control over the operating system, file system, installed software, and network configuration, making it ideal for legacy apps and custom OS requirements.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Virtual Machines", "IaaS"]
  },
  {
    id: "az-900-84",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS)",
    scenario: "A financial analytics firm requires a cluster of identical Windows Server virtual machines that automatically scale the number of instances up or down based on CPU metrics or a defined schedule.",
    question: "Which Azure service provides this capability?",
    options: [
      { id: 'A', text: "Azure Virtual Machine Scale Sets (VMSS)" },
      { id: 'B', text: "Azure Container Instances" },
      { id: 'C', text: "Azure App Service Free tier" },
      { id: 'D', text: "Azure Logic Apps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Virtual Machine Scale Sets (VMSS) allow organizations to create and manage a group of identical, load-balanced virtual machines. The number of VM instances can automatically increase or decrease in response to demand or defined metrics.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "VMSS", "Autoscaling"]
  },
  {
    id: "az-900-85",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service (PaaS Compute)",
    scenario: "A team of web developers wants to deploy a containerized Python and React web application without managing virtual machines, patching servers, or provisioning web server infrastructure.",
    question: "Which Azure service provides this managed platform?",
    options: [
      { id: 'A', text: "Azure Dedicated Host" },
      { id: 'B', text: "Azure Virtual Machines" },
      { id: 'C', text: "Azure Virtual Desktop" },
      { id: 'D', text: "Azure App Service" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile backends. It supports automated scaling, continuous deployment, and multi-language runtimes without server management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "App Service", "PaaS"]
  },
  {
    id: "az-900-86",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI)",
    scenario: "A developer wants to run a single Docker container task that runs for 5 minutes and then terminates, without provisioning a full Kubernetes cluster or managing underlying VMs.",
    question: "Which Azure service is best suited for this lightweight container execution?",
    options: [
      { id: 'A', text: "Azure Kubernetes Service (AKS)" },
      { id: 'B', text: "Azure Virtual Machine Scale Sets" },
      { id: 'C', text: "Azure Container Instances (ACI)" },
      { id: 'D', text: "Azure Dedicated Host" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Container Instances (ACI) is a serverless container solution that enables developers to run containers directly on Azure without managing any virtual machines or container orchestration platforms, billing per second of execution.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Compute", "ACI", "Containers"]
  },
  {
    id: "az-900-87",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS)",
    scenario: "An enterprise is modernizing its application suite into hundreds of interconnected microservices packaged in containers, requiring automated deployment, service discovery, scaling, and rolling updates.",
    question: "Which Azure service provides enterprise-grade container orchestration?",
    options: [
      { id: 'A', text: "Azure Kubernetes Service (AKS)" },
      { id: 'B', text: "Azure Virtual Desktop" },
      { id: 'C', text: "Azure Functions" },
      { id: 'D', text: "Azure Container Instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Kubernetes Service (AKS) is a fully managed container orchestration service based on open-source Kubernetes. Azure handles cluster management, control plane health, and automated upgrades, while providing seamless integration with Azure networking and security.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Compute", "AKS", "Kubernetes"]
  },
  {
    id: "az-900-88",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Code)",
    scenario: "A developer needs to execute a lightweight snippet of C# code whenever a customer places an order in an online store. The code should execute only upon event arrival and incur zero compute cost while idle.",
    question: "Which Azure service should be used?",
    options: [
      { id: 'A', text: "Azure Virtual Machines" },
      { id: 'B', text: "Azure Cloud Services" },
      { id: 'C', text: "Azure Functions" },
      { id: 'D', text: "Azure Dedicated Host" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Functions is an event-driven, serverless compute service that enables developers to run small pieces of code (functions) in response to triggers (HTTP requests, database changes, queue events) without provisioning or managing infrastructure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Compute", "Azure Functions", "Serverless"]
  },
  {
    id: "az-900-89",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD)",
    scenario: "An organization with remote employees requires secure access to centralized Windows 11 enterprise desktop environments and Microsoft 365 apps accessible from any device or location.",
    question: "Which Azure service provides cloud-hosted virtual desktops?",
    options: [
      { id: 'A', text: "Azure Batch" },
      { id: 'B', text: "Azure App Service" },
      { id: 'C', text: "Azure Virtual Desktop (AVD)" },
      { id: 'D', text: "Azure Virtual Network peering" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Virtual Desktop (AVD) is a cloud-based desktop and app virtualization service that delivers multi-session Windows 11 and Windows 10 experiences, optimized for Microsoft 365 and accessible securely from remote clients.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Compute", "AVD", "Virtual Desktop"]
  },
  {
    id: "az-900-90",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Network (VNet)",
    scenario: "A company deploys several Azure Virtual Machines and needs them to securely communicate with each other, with on-premises networks, and with the internet over isolated private IP addresses.",
    question: "Which fundamental Azure networking service provides this isolation?",
    options: [
      { id: 'A', text: "Azure Traffic Manager" },
      { id: 'B', text: "Azure DNS private zone" },
      { id: 'C', text: "Azure ExpressRoute private peering" },
      { id: 'D', text: "Azure Virtual Network (VNet)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Virtual Network (VNet) is the fundamental building block for private network communication in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks within a private IP address space.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "VNet", "Private IP"]
  },
  {
    id: "az-900-91",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Virtual Network Peering",
    scenario: "An enterprise runs two separate Azure Virtual Networks: one for HR applications in East US and another for Finance applications in East US. They need high-speed, private IP connectivity between the two networks without routing traffic over the public internet.",
    question: "Which networking capability should they configure?",
    options: [
      { id: 'A', text: "A Site-to-Site VPN Gateway over the internet" },
      { id: 'B', text: "Public IP addresses on every VM" },
      { id: 'C', text: "Point-to-Site VPN connections on every VM" },
      { id: 'D', text: "Virtual Network Peering" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Virtual Network Peering seamlessly connects two Azure Virtual Networks. Once peered, traffic between VMs in both VNets routes privately across the Microsoft backbone network with low latency and high bandwidth, without traversing the public internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Networking", "VNet Peering", "Backbone"]
  },
  {
    id: "az-900-92",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute",
    scenario: "A company needs a dedicated, private, high-speed connection between its corporate headquarters and its Azure virtual network that completely bypasses the public internet and provides predictable throughput up to 100 Gbps.",
    question: "Which connectivity solution meets this requirement?",
    options: [
      { id: 'A', text: "Azure ExpressRoute" },
      { id: 'B', text: "Azure Bastion host" },
      { id: 'C', text: "Azure VPN Gateway with Site-to-Site IPsec" },
      { id: 'D', text: "Point-to-Site VPN with OpenVPN" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure ExpressRoute establishes a direct, private connection between an organization's on-premises infrastructure and Azure datacenters through a connectivity provider. ExpressRoute traffic does not travel over the public internet, offering higher reliability, faster speeds, and lower latency than VPN tunnels.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Networking", "ExpressRoute", "Hybrid Connectivity"]
  },
  {
    id: "az-900-93",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway",
    scenario: "A small business wants to connect its on-premises branch office to its Azure Virtual Network securely over the public internet using an encrypted IPsec/IKE tunnel.",
    question: "Which Azure service is specifically designed for this purpose?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "Azure VPN Gateway" },
      { id: 'C', text: "Azure ExpressRoute" },
      { id: 'D', text: "Azure DNS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure VPN Gateway sends encrypted traffic between an Azure Virtual Network and an on-premises location over the public internet using industry-standard IPsec/IKE VPN tunnels.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    tags: ["Azure Networking", "VPN Gateway", "IPsec"]
  },
  {
    id: "az-900-94",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Network Security Groups (NSGs)",
    scenario: "A network engineer needs to filter inbound network traffic to a subnet so that only HTTPS (port 443) traffic is allowed and all other inbound ports are blocked.",
    question: "Which Azure resource should be associated with the subnet to enforce this filtering?",
    options: [
      { id: 'A', text: "Azure Public IP prefix" },
      { id: 'B', text: "Azure Route Table" },
      { id: 'C', text: "Azure DNS private resolver" },
      { id: 'D', text: "A Network Security Group (NSG)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Network Security Group (NSG) contains security rules that allow or deny inbound and outbound network traffic based on 5-tuple criteria: source IP, source port, destination IP, destination port, and protocol.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Networking", "NSG", "Firewall"]
  },
  {
    id: "az-900-95",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Bastion Secure Access",
    scenario: "A system administrator needs to securely connect to the command line and desktop of Azure VMs via SSH and RDP without assigning public IP addresses to the VMs and without exposing ports 22 and 3389 to the public internet.",
    question: "Which Azure service provides secure browser-based administrative access?",
    options: [
      { id: 'A', text: "Azure Bastion" },
      { id: 'B', text: "Azure Front Door" },
      { id: 'C', text: "Azure Route Server" },
      { id: 'D', text: "Azure VPN Gateway" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Bastion is a fully managed PaaS service provisioned inside a virtual network. It provides secure and seamless RDP and SSH connectivity to virtual machines directly through the Azure Portal over TLS (port 443), eliminating the need for public IPs on the target VMs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Networking", "Azure Bastion", "Security"]
  },
  {
    id: "az-900-96",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Blob Storage - Unstructured Data",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure blob storage - unstructured data.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure blob storage - unstructured data?",
    options: [
      { id: 'A', text: "Azure Cosmos DB" },
      { id: 'B', text: "Azure Blob Storage" },
      { id: 'C', text: "Azure Table Storage" },
      { id: 'D', text: "Azure Files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Blob Storage is Microsoft's object storage solution for storing massive amounts of unstructured data like text, images, video, and audio files. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-97",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Blob Access Tiers - Hot Tier",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for blob access tiers - hot tier.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for blob access tiers - hot tier?",
    options: [
      { id: 'A', text: "Archive access tier" },
      { id: 'B', text: "Hot access tier" },
      { id: 'C', text: "Cool access tier" },
      { id: 'D', text: "Cold access tier" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Hot access tier is optimized for data that is in active use, accessed frequently, providing the lowest access fees but higher storage cost per gigabyte. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Blob"]
  },
  {
    id: "az-900-98",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Blob Access Tiers - Cool Tier",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for blob access tiers - cool tier.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for blob access tiers - cool tier?",
    options: [
      { id: 'A', text: "Hot access tier" },
      { id: 'B', text: "Cool access tier" },
      { id: 'C', text: "Premium disk tier" },
      { id: 'D', text: "Archive access tier" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Cool access tier is optimized for data that is stored for at least 30 days and accessed infrequently, such as short-term backups or historical telemetry. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Blob"]
  },
  {
    id: "az-900-99",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Blob Access Tiers - Archive Tier",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for blob access tiers - archive tier.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for blob access tiers - archive tier?",
    options: [
      { id: 'A', text: "Archive access tier" },
      { id: 'B', text: "Cool access tier" },
      { id: 'C', text: "General purpose tier" },
      { id: 'D', text: "Hot access tier" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Archive tier offers the lowest storage cost for data stored for at least 180 days that can tolerate multi-hour rehydration delays before retrieval. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Blob"]
  },
  {
    id: "az-900-100",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Files - Shared Storage",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure files - shared storage.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure files - shared storage?",
    options: [
      { id: 'A', text: "Azure Managed Disks" },
      { id: 'B', text: "Azure Files" },
      { id: 'C', text: "Azure Blob Storage" },
      { id: 'D', text: "Azure Data Lake Gen2" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Files provides fully managed cloud file shares accessible via industry-standard SMB and NFS protocols, allowing multiple VMs to mount the share simultaneously. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  }
];

export default AZURE_AZ900_QUESTIONS_4;
