export const AZURE_AZ900_QUESTIONS_3 = [
  {
    id: "az-900-51",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Comparing Cloud Deployment Models: Private vs Public vs Hybrid",
    scenario: "A healthcare company hosts sensitive patient records in an on-premises datacenter while hosting a public patient scheduling portal in Microsoft Azure.",
    question: "Which cloud deployment model is this organization utilizing?",
    options: [
      { id: 'A', text: "Community cloud" },
      { id: 'B', text: "Hybrid cloud" },
      { id: 'C', text: "Public cloud exclusively" },
      { id: 'D', text: "Private cloud exclusively" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Hybrid cloud deployment model combines on-premises private datacenter infrastructure with public cloud services (like Microsoft Azure), allowing data and applications to be shared across environments via secure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/cloud-migration-guide",
    tags: ["Hybrid Cloud", "Cloud Models", "Architecture"]
  },
  {
    id: "az-900-52",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Benefits of Cloud Computing: Agility and Speed",
    scenario: "A startup wants to test a new machine learning algorithm without waiting weeks to procure and configure physical hardware.",
    question: "Which cloud characteristic enables the startup to provision complete development environments in minutes?",
    options: [
      { id: 'A', text: "Data residency" },
      { id: 'B', text: "High latency" },
      { id: 'C', text: "Disaster recovery" },
      { id: 'D', text: "Agility" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud agility refers to the ability to rapidly develop, test, and launch software applications by instantly provisioning, iterating, and scaling computing infrastructure on demand without procurement delays.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Agility", "Cloud Benefits", "Time to Market"]
  },
  {
    id: "az-900-53",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "PaaS Architecture: Azure App Service",
    scenario: "A software team wants to deploy a Node.js web application. They want to focus entirely on writing code without managing virtual machines, operating system updates, or web server patching.",
    question: "Which Azure cloud service category best satisfies this requirement?",
    options: [
      { id: 'A', text: "Software as a Service (SaaS)" },
      { id: 'B', text: "Platform as a Service (PaaS)" },
      { id: 'C', text: "Infrastructure as a Service (IaaS)" },
      { id: 'D', text: "On-premises virtualization" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Platform as a Service (PaaS)—such as Azure App Service—provides an abstracted runtime environment. Azure manages VM provisioning, operating system maintenance, and runtime security patches, freeing developers to focus purely on application code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["PaaS", "App Service", "Compute", "Cloud Models"]
  },
  {
    id: "az-900-54",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Serverless Computing Characteristics",
    scenario: "An organization uses Azure Functions to process image uploads. Code runs only when an image is uploaded, and the company incurs zero cost when no files are processed.",
    question: "Which cloud compute model characterizes this event-driven, execution-duration billing structure?",
    options: [
      { id: 'A', text: "Dedicated virtual machines" },
      { id: 'B', text: "Serverless computing" },
      { id: 'C', text: "Colocation hosting" },
      { id: 'D', text: "Bare-metal computing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Serverless computing (like Azure Functions) is event-driven and abstracts all server management. Resources scale automatically based on event triggers, and customers pay strictly for compute time consumed during active execution, with zero cost when idle.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Serverless", "Azure Functions", "Compute", "Event-Driven"]
  },
  {
    id: "az-900-55",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Vertical Scaling vs Horizontal Scaling",
    scenario: "An application running on an Azure Virtual Machine is running low on RAM. The administrator upgrades the VM size from Standard_D2s_v5 (8 GB RAM) to Standard_D4s_v5 (16 GB RAM).",
    question: "Which scaling methodology did the administrator apply?",
    options: [
      { id: 'A', text: "Geographic scaling" },
      { id: 'B', text: "Horizontal scaling (scaling out)" },
      { id: 'C', text: "Vertical scaling (scaling up)" },
      { id: 'D', text: "Elastic scaling" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Vertical scaling (scaling up or down) increases or decreases the compute capacity (CPU, RAM, disk) of an existing single resource. Horizontal scaling (scaling out or in) adds or removes additional instances of resources (e.g. in a scale set).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/framework/cost/design-scale",
    tags: ["Scaling", "Vertical Scaling", "Compute", "VM"]
  },
  {
    id: "az-900-56",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Understanding Azure Regions",
    scenario: "What is the definition of an Azure Region?",
    question: "Which statement accurately describes an Azure Region?",
    options: [
      { id: 'A', text: "A private virtual network configured inside a customer subscription" },
      { id: 'B', text: "A global backup storage vault" },
      { id: 'C', text: "A single physical server rack located in Microsoft headquarters" },
      { id: 'D', text: "A geographical area containing at least one, but typically multiple, datacenters connected by a low-latency dedicated regional network" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure Region is a designated geographic perimeter containing one or more discrete datacenters interconnected through a dedicated regional low-latency fiber network, providing cloud services to nearby users.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview#regions",
    tags: ["Regions", "Global Infrastructure", "Architecture"]
  },
  {
    id: "az-900-57",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Availability Zones Architecture",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How do Azure Availability Zones protect mission-critical workloads against datacenter-level failures?",
    options: [
      { id: 'A', text: "By distributing workloads across physically separate datacenters within an Azure Region, each equipped with independent power, cooling, and networking" },
      { id: 'B', text: "By copying virtual machines to a different cloud provider" },
      { id: 'C', text: "By converting virtual machines into container images" },
      { id: 'D', text: "By forcing all database writes to tape backup drives" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Availability Zones (AZs) are physically separate datacenters within the same Azure Region. Each zone features isolated power, cooling, and networking infrastructure, providing fault isolation against local datacenter disasters.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview",
    tags: ["Availability Zones", "High Availability", "Fault Tolerance"]
  },
  {
    id: "az-900-58",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Region Pairs and Cross-Region Disaster Recovery",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "An enterprise configures geo-redundant storage for database backups in the East US region. Which paired region automatically hosts the secondary copy?",
    options: [
      { id: 'A', text: "North Europe" },
      { id: 'B', text: "Southeast Asia" },
      { id: 'C', text: "UK South" },
      { id: 'D', text: "West US" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Each Azure region is permanently paired with another region within the same geographic boundary (e.g. East US is paired with West US). Region pairs share cross-region replication for storage and staged platform updates to prevent simultaneous outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure",
    tags: ["Region Pairs", "Cross-Region", "Disaster Recovery", "Replication"]
  },
  {
    id: "az-900-59",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Sovereign Regions: Azure Government",
    scenario: "A United States defense contractor must comply with strict FedRAMP High and ITAR regulatory compliance mandates.",
    question: "Which specialized Azure cloud environment should the contractor deploy workloads into?",
    options: [
      { id: 'A', text: "Azure China" },
      { id: 'B', text: "Azure Germany" },
      { id: 'C', text: "Standard public commercial Azure regions" },
      { id: 'D', text: "Azure Government" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Government is a physically and logically isolated cloud environment dedicated exclusively to US federal, state, local, and tribal government entities and their authorized contractors meeting strict security and compliance standards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-government/documentation-government-welcome",
    tags: ["Azure Government", "Sovereign Regions", "Compliance"]
  },
  {
    id: "az-900-60",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Resource Groups: Lifecycle and Boundaries",
    scenario: "An administrator wants to delete all virtual machines, virtual networks, and storage accounts created for a temporary three-week training project.",
    question: "What is the most efficient management approach?",
    options: [
      { id: 'A', text: "Delete the single Resource Group containing all project resources, which automatically deletes all contained resources simultaneously" },
      { id: 'B', text: "Restart the training virtual machines" },
      { id: 'C', text: "Delete each resource individually in alphabetical order" },
      { id: 'D', text: "Cancel the entire corporate Azure subscription" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Resource Group is a logical container that groups resources sharing a common deployment lifecycle. Deleting a Resource Group cascades and deletes all member resources in a single operation, preventing orphaned cloud waste.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",
    tags: ["Resource Groups", "ARM", "Lifecycle Management", "Governance"]
  },
  {
    id: "az-900-61",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Group Hierarchy",
    scenario: "An enterprise has 40 Azure subscriptions across multiple business units and wants to apply unified governance and access policies across all of them.",
    question: "Which organizational container hierarchy should the enterprise configure above the subscriptions?",
    options: [
      { id: 'A', text: "Resource Groups" },
      { id: 'B', text: "Management Groups" },
      { id: 'C', text: "Availability Sets" },
      { id: 'D', text: "Virtual Networks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Management Groups provide a governance container level above subscriptions. Organizing subscriptions into a Management Group hierarchy allows administrators to apply Azure Policies, RBAC role assignments, and compliance rules that inherit downwards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Management Groups", "Subscriptions", "Hierarchy", "Governance"]
  },
  {
    id: "az-900-62",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): Core Use Cases",
    scenario: "A company needs full control over the underlying operating system to install proprietary custom device drivers and legacy software binaries.",
    question: "Which Azure compute service is the appropriate choice?",
    options: [
      { id: 'A', text: "Azure App Service" },
      { id: 'B', text: "Azure Logic Apps" },
      { id: 'C', text: "Azure Virtual Machines" },
      { id: 'D', text: "Azure Functions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Virtual Machines provide on-demand Infrastructure as a Service (IaaS) compute. They give administrators total control over the guest operating system, network configuration, and installed software components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/overview",
    tags: ["Virtual Machines", "IaaS", "Compute"]
  },
  {
    id: "az-900-63",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS)",
    scenario: "A web application hosted on Azure must automatically add identical VM instances when average CPU utilization exceeds 75% and remove instances when CPU drops below 25%.",
    question: "Which Azure service provides this automated load-balanced scaling capability?",
    options: [
      { id: 'A', text: "Azure Availability Sets" },
      { id: 'B', text: "Azure Dedicated Host" },
      { id: 'C', text: "Azure Virtual Machine Scale Sets (VMSS)" },
      { id: 'D', text: "Azure Batch" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Virtual Machine Scale Sets (VMSS) allow deployment and management of a group of identical, load-balanced VMs that automatically increase or decrease instance count based on demand metrics or scheduled rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["VMSS", "Scale Sets", "Auto Scaling", "Compute"]
  },
  {
    id: "az-900-64",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD)",
    scenario: "An organization needs to deliver secure, remote Windows 11 desktop experiences to 500 remote employees accessing from home laptops.",
    question: "Which cloud Desktop as a Service (DaaS) solution does Microsoft provide?",
    options: [
      { id: 'A', text: "Azure Virtual Desktop (AVD)" },
      { id: 'B', text: "Azure App Service" },
      { id: 'C', text: "Azure ExpressRoute" },
      { id: 'D', text: "Azure Container Instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Virtual Desktop (AVD) is a comprehensive cloud desktop and application virtualization service that delivers multi-session Windows 11 and Windows 10 experiences securely to remote users across any device.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["AVD", "Virtual Desktop", "DaaS", "End User Computing"]
  },
  {
    id: "az-900-65",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI) vs Azure Kubernetes Service (AKS)",
    scenario: "A developer wants to run a single containerized script that executes once an hour for 2 minutes without managing a cluster orchestrator.",
    question: "Which Azure container service is the simplest and most cost-effective choice?",
    options: [
      { id: 'A', text: "Azure Virtual Machines" },
      { id: 'B', text: "Azure Container Instances (ACI)" },
      { id: 'C', text: "Azure Kubernetes Service (AKS)" },
      { id: 'D', text: "Azure Batch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Container Instances (ACI) offers the fastest, simplest way to run individual containers on demand in Azure without provisioning virtual machines or configuring complex Kubernetes cluster orchestrators.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["ACI", "Containers", "Serverless", "Compute"]
  },
  {
    id: "az-900-66",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): Container Orchestration",
    scenario: "An enterprise operates 100 microservices packaged as Docker containers requiring automated self-healing, service discovery, rolling updates, and cluster autoscaling.",
    question: "Which Azure service is purpose-built for enterprise container orchestration?",
    options: [
      { id: 'A', text: "Azure Virtual Desktop" },
      { id: 'B', text: "Azure Container Instances" },
      { id: 'C', text: "Azure App Service Web Apps" },
      { id: 'D', text: "Azure Kubernetes Service (AKS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Kubernetes Service (AKS) is a fully managed open-source Kubernetes service that simplifies deploying, managing, and scaling complex microservice container clusters with integrated enterprise security and monitoring.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["AKS", "Kubernetes", "Containers", "Microservices"]
  },
  {
    id: "az-900-67",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Network (VNet) Isolation",
    scenario: "What is the primary function of an Azure Virtual Network (VNet)?",
    question: "Which statement correctly describes an Azure VNet?",
    options: [
      { id: 'A', text: "A public web domain registration service" },
      { id: 'B', text: "A logically isolated private network inside an Azure subscription that enables secure communication between Azure resources, the internet, and on-premises networks" },
      { id: 'C', text: "A physical network cable connecting Azure to the customer's office" },
      { id: 'D', text: "A storage bucket for database backups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Azure Virtual Network (VNet) is the fundamental building block for private networking in Azure. It enables Azure resources (like VMs and databases) to securely communicate with each other, the internet, and on-premises networks with private IP addressing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["VNet", "Networking", "Private Network"]
  },
  {
    id: "az-900-68",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Virtual Network Peering: Inter-VNet Routing",
    scenario: "An organization has two VNets: VNet-Sales and VNet-Marketing in the same region. VMs in VNet-Sales must communicate with VMs in VNet-Marketing using private IP addresses with minimal latency.",
    question: "Which networking feature should the network engineer configure?",
    options: [
      { id: 'A', text: "A site-to-site IPsec VPN over the public internet" },
      { id: 'B', text: "Public IP addresses on all VMs" },
      { id: 'C', text: "Virtual Network (VNet) Peering" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Virtual Network (VNet) Peering connects two Azure VNets directly through the private Microsoft backbone network. Traffic between peered VNets flows completely on private IP addresses with high bandwidth and low latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["VNet Peering", "Networking", "Backbone"]
  },
  {
    id: "az-900-69",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure ExpressRoute vs Site-to-Site VPN",
    scenario: "A financial trading firm requires a private, dedicated physical connection between its corporate headquarters and Azure that does not traverse the public internet, offering consistent sub-5ms latency.",
    question: "Which Azure networking service fulfills this requirement?",
    options: [
      { id: 'A', text: "Azure Point-to-Site VPN" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure ExpressRoute" },
      { id: 'D', text: "Azure Site-to-Site VPN Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure ExpressRoute creates a private, dedicated physical fiber connection between an organization's on-premises datacenter and Azure through a connectivity provider, bypassing the public internet to deliver higher security, reliability, and predictable speeds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["ExpressRoute", "Hybrid", "Networking", "Dedicated Fiber"]
  },
  {
    id: "az-900-70",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway: Encrypted Tunnels",
    scenario: "A small startup wants to connect its local office branch router securely to an Azure VNet over the public internet at low cost.",
    question: "Which Azure connectivity service should they deploy?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "Azure ExpressRoute Direct" },
      { id: 'C', text: "Azure VPN Gateway (Site-to-Site)" },
      { id: 'D', text: "Azure Traffic Manager" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure VPN Gateway sends encrypted network traffic between an Azure Virtual Network and an on-premises location across the public internet using standard IPsec/IKE VPN tunnels.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways",
    tags: ["VPN Gateway", "IPsec", "Networking", "Hybrid"]
  },
  {
    id: "az-900-71",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Access Tiers",
    scenario: "An enterprise archives historical tax audit documents that must be preserved for 10 years, are rarely accessed, and can tolerate several hours of retrieval latency.",
    question: "Which Azure Blob Storage tier provides the lowest monthly storage cost?",
    options: [
      { id: 'A', text: "Cool tier" },
      { id: 'B', text: "Archive tier" },
      { id: 'C', text: "Hot tier" },
      { id: 'D', text: "Cold tier" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Archive tier provides the lowest storage cost per gigabyte in Azure Blob Storage. It is designed for rarely accessed data with flexible retrieval latency requirements (several hours to rehydrate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Blob Storage", "Archive", "Storage Tiers", "Cost Optimization"]
  },
  {
    id: "az-900-72",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files: Shared SMB and NFS File Storage",
    scenario: "A company migrates a legacy Windows desktop application that requires a shared file system mountable concurrently across 50 virtual machines using the standard SMB 3.0 protocol.",
    question: "Which Azure storage service satisfies this shared protocol requirement?",
    options: [
      { id: 'A', text: "Azure Files" },
      { id: 'B', text: "Azure Blob Storage" },
      { id: 'C', text: "Azure Table Storage" },
      { id: 'D', text: "Azure Data Lake Storage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Files offers fully managed cloud file shares accessible via the industry-standard Server Message Block (SMB) and Network File System (NFS) protocols, mountable concurrently by cloud and on-premises Windows, Linux, and macOS systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Files", "SMB", "NFS", "Storage"]
  },
  {
    id: "az-900-73",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Data Box: Physical Petabyte Data Migration",
    scenario: "A geological survey firm needs to migrate 150 terabytes of satellite imagery from an offline remote research station to Azure Blob Storage where internet connectivity is slow and unreliable.",
    question: "Which data transfer solution should the firm use?",
    options: [
      { id: 'A', text: "Uploading over public internet using AzCopy" },
      { id: 'B', text: "Azure ExpressRoute" },
      { id: 'C', text: "Azure Data Box physical appliance shipped directly by Microsoft" },
      { id: 'D', text: "Azure Storage Explorer over satellite link" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Data Box appliances are ruggedized physical storage devices shipped directly to customer sites by Microsoft. Customers copy terabytes to petabytes of data locally over high-speed LAN, then ship the appliance back to an Azure datacenter for rapid upload.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/databox/data-box-overview",
    tags: ["Data Box", "Migration", "Storage", "Physical Device"]
  },
  {
    id: "az-900-74",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "AzCopy Command-Line Tool",
    scenario: "What is the primary function of the AzCopy utility?",
    question: "Which task is AzCopy designed to perform?",
    options: [
      { id: 'A', text: "Deploying virtual machines from ARM templates" },
      { id: 'B', text: "Compiling C# applications into Docker container images" },
      { id: 'C', text: "High-performance command-line copying of blobs and files to and from Azure Storage accounts" },
      { id: 'D', text: "Auditing Azure subscription role assignments" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AzCopy is an optimized command-line utility designed for copying blobs and files into, out of, and between Azure Storage accounts with high concurrency and automatic transfer resumption.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["AzCopy", "Storage", "CLI", "Data Transfer"]
  },
  {
    id: "az-900-75",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: Globally Distributed Multi-Model NoSQL",
    scenario: "A mobile gaming company needs a database offering single-digit millisecond latency worldwide, multi-region active-active writes, and support for document, key-value, and graph data models.",
    question: "Which Azure database service meets all these requirements?",
    options: [
      { id: 'A', text: "Azure SQL Database" },
      { id: 'B', text: "SQL Server on Azure VMs" },
      { id: 'C', text: "Azure Cosmos DB" },
      { id: 'D', text: "Azure Database for MySQL" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Cosmos DB is Microsoft's globally distributed, multi-model NoSQL database service. It guarantees single-digit millisecond read/write latency at the 99th percentile with turnkey multi-region replication and comprehensive SLAs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Cosmos DB", "NoSQL", "Global Distribution", "Databases"]
  }
];

export default AZURE_AZ900_QUESTIONS_3;
