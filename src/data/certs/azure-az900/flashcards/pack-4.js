export const AZURE_AZ900_FLASHCARDS_4 = [
  {
    "id": "azure-az900-fc-76",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Region vs. Availability Zone",
    "hint": "Geographic boundary vs. physically separated datacenters.",
    "back": "An <strong>Azure Region</strong> is a geographic perimeter containing one or more datacenters connected via low-latency networking. An <strong>Availability Zone</strong> is a physically separate datacenter (or group of datacenters) within a region, equipped with independent power, cooling, and networking.",
    "tags": [
      "Azure Architecture",
      "Regions",
      "Availability Zones"
    ]
  },
  {
    "id": "azure-az900-fc-77",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Region Pairs",
    "hint": "At least 300 miles apart with serialized platform updates.",
    "back": "Each Azure region is paired with another region in the same geography (at least 300 miles apart). <strong>Region pairs</strong> feature phased platform updates (never updated simultaneously) and provide automatic asynchronous replication for services like GRS.",
    "tags": [
      "Azure Architecture",
      "Region Pairs",
      "Resilience"
    ]
  },
  {
    "id": "azure-az900-fc-78",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Sovereign Clouds: Azure Government & Azure China",
    "hint": "Physically isolated clouds for strict sovereign compliance.",
    "back": "<strong>Azure Government</strong> is an isolated cloud instance dedicated to US federal, state, and DoD agencies operated by screened US citizens. <strong>Azure China 21Vianet</strong> is physically separated and operated locally by 21Vianet to comply with Chinese telecommunications laws.",
    "tags": [
      "Azure Architecture",
      "Sovereign Cloud",
      "Government"
    ]
  },
  {
    "id": "azure-az900-fc-79",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Resource Hierarchy: Management Groups to Resources",
    "hint": "Four levels of organizational governance in Azure.",
    "back": "Azure organizes resources in four hierarchical levels: <strong>Management Groups</strong> (govern multiple subscriptions) \u2192 <strong>Subscriptions</strong> (billing and access boundary) \u2192 <strong>Resource Groups</strong> (lifecycle management containers) \u2192 <strong>Resources</strong> (VMs, storage, VNets). Policies and RBAC inherit downwards.",
    "tags": [
      "Azure Architecture",
      "Hierarchy",
      "Governance"
    ]
  },
  {
    "id": "azure-az900-fc-80",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Resource Manager (ARM) Layer",
    "hint": "The central control plane for all deployments and management.",
    "back": "<strong>Azure Resource Manager (ARM)</strong> is the unified management layer for Azure. Whether actions originate from the Azure Portal, PowerShell, Azure CLI, or REST APIs, ARM authenticates the request, enforces RBAC and policies, and applies declarative JSON/Bicep deployments.",
    "tags": [
      "Azure Architecture",
      "ARM",
      "Management Layer"
    ]
  },
  {
    "id": "azure-az900-fc-81",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Virtual Machines vs. Virtual Machine Scale Sets (VMSS)",
    "hint": "Single instance control vs. automated horizontal pool scaling.",
    "back": "<strong>Azure Virtual Machines</strong> provide IaaS control over single VM instances. <strong>Virtual Machine Scale Sets (VMSS)</strong> manage a group of identical, load-balanced VMs that automatically increase or decrease instance count based on demand or metrics.",
    "tags": [
      "Azure Compute",
      "VMs",
      "VMSS"
    ]
  },
  {
    "id": "azure-az900-fc-82",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure App Service vs. Azure Container Instances (ACI)",
    "hint": "Managed web hosting platform vs. serverless container task runner.",
    "back": "<strong>Azure App Service</strong> is a PaaS platform for hosting full web applications, APIs, and mobile backends with deployment slots and custom domains. <strong>ACI (Azure Container Instances)</strong> runs individual containers serverlessly without managing any orchestration clusters or VMs.",
    "tags": [
      "Azure Compute",
      "App Service",
      "ACI",
      "Containers"
    ]
  },
  {
    "id": "azure-az900-fc-83",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Container Instances (ACI) vs. Azure Kubernetes Service (AKS)",
    "hint": "Lightweight single container vs. enterprise container orchestration.",
    "back": "<strong>ACI</strong> is serverless and ideal for simple container tasks, batch jobs, or quick burst capacity. <strong>AKS</strong> is a managed Kubernetes service offering enterprise-grade microservice orchestration, service discovery, automated rollouts, ingress routing, and pod autoscaling.",
    "tags": [
      "Azure Compute",
      "AKS",
      "ACI",
      "Kubernetes"
    ]
  },
  {
    "id": "azure-az900-fc-84",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Functions: Consumption Plan vs. Dedicated Plan",
    "hint": "Scale to zero with sub-second billing vs. fixed VM hosting.",
    "back": "Under the <strong>Consumption Plan</strong>, Azure Functions scale dynamically based on event triggers, scale to zero when idle, and bill per execution and millisecond. Under a <strong>Dedicated Plan</strong>, functions run on reserved App Service VMs with predictable monthly costs and no cold starts.",
    "tags": [
      "Azure Compute",
      "Azure Functions",
      "Serverless"
    ]
  },
  {
    "id": "azure-az900-fc-85",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Virtual Desktop (AVD)",
    "hint": "Multi-session Windows 10/11 in the cloud.",
    "back": "<strong>Azure Virtual Desktop (AVD)</strong> is a cloud VDI service that delivers remote Windows 10 and 11 desktops and application streaming, featuring multi-session capabilities that allow multiple users on a single VM to optimize licensing and compute costs.",
    "tags": [
      "Azure Compute",
      "AVD",
      "Virtual Desktop"
    ]
  },
  {
    "id": "azure-az900-fc-86",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Virtual Network (VNet) & Subnets",
    "hint": "Private IP address isolation in the cloud.",
    "back": "An <strong>Azure Virtual Network (VNet)</strong> provides private IP address space isolation for cloud workloads. VNets are segmented into <strong>Subnets</strong> to separate tiers (web, application, database) and enforce granular security boundaries using Network Security Groups.",
    "tags": [
      "Azure Networking",
      "VNet",
      "Subnets"
    ]
  },
  {
    "id": "azure-az900-fc-87",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Virtual Network Peering",
    "hint": "Low-latency private interconnect between VNets.",
    "back": "<strong>VNet Peering</strong> directly connects two Azure Virtual Networks. Traffic between peered VNets traverses the private Microsoft global backbone with high bandwidth and low latency, never crossing the public internet.",
    "tags": [
      "Azure Networking",
      "VNet Peering",
      "Backbone"
    ]
  },
  {
    "id": "azure-az900-fc-88",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure VPN Gateway vs. Azure ExpressRoute",
    "hint": "Encrypted tunnel over internet vs. dedicated private fiber.",
    "back": "<strong>Azure VPN Gateway</strong> sends encrypted traffic over the public internet using IPsec/IKE (bandwidth up to ~10 Gbps). <strong>Azure ExpressRoute</strong> establishes a direct, private physical connection via a connectivity partner, bypassing the public internet for higher speeds (up to 100 Gbps) and lower latency.",
    "tags": [
      "Azure Networking",
      "ExpressRoute",
      "VPN Gateway"
    ]
  },
  {
    "id": "azure-az900-fc-89",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Network Security Groups (NSGs)",
    "hint": "5-tuple stateful packet filtering firewall rules.",
    "back": "A <strong>Network Security Group (NSG)</strong> filters inbound and outbound network traffic to subnets and network interfaces based on a 5-tuple rule set: Source IP, Source Port, Destination IP, Destination Port, and Protocol.",
    "tags": [
      "Azure Networking",
      "NSG",
      "Security"
    ]
  },
  {
    "id": "azure-az900-fc-90",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Bastion",
    "hint": "Secure browser RDP/SSH access without public IPs.",
    "back": "<strong>Azure Bastion</strong> is a fully managed PaaS service deployed in a dedicated subnet that provides secure, seamless RDP and SSH access to VMs directly through the Azure Portal over TLS (port 443), eliminating the need for public IPs or exposed management ports.",
    "tags": [
      "Azure Networking",
      "Azure Bastion",
      "Security"
    ]
  },
  {
    "id": "azure-az900-fc-91",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Blob Storage Access Tiers: Hot, Cool, Cold, Archive",
    "hint": "Balancing access frequency against storage price per gigabyte.",
    "back": "<strong>Hot</strong>: frequently accessed data; highest storage fee, lowest access fee. <strong>Cool</strong>: 30+ day retention, lower storage fee. <strong>Cold</strong>: 90+ day retention. <strong>Archive</strong>: 180+ day retention; lowest storage fee, offline state requiring hours to rehydrate.",
    "tags": [
      "Azure Storage",
      "Blob Tiers",
      "Lifecycle"
    ]
  },
  {
    "id": "azure-az900-fc-92",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Storage Redundancy: LRS vs. ZRS vs. GRS vs. GZRS",
    "hint": "Single datacenter, 3 Availability Zones, or secondary region replication.",
    "back": "<strong>LRS</strong>: 3 copies in 1 datacenter. <strong>ZRS</strong>: 3 copies across 3 Availability Zones in primary region. <strong>GRS</strong>: LRS in primary region + async LRS to paired secondary region. <strong>GZRS</strong>: ZRS across 3 AZs in primary region + async LRS to secondary region.",
    "tags": [
      "Azure Storage",
      "Redundancy",
      "LRS",
      "GRS",
      "ZRS"
    ]
  },
  {
    "id": "azure-az900-fc-93",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Files vs. Azure Blob Storage",
    "hint": "Shared SMB/NFS file shares vs. unstructured object storage.",
    "back": "<strong>Azure Files</strong> provides managed cloud file shares accessible via SMB and NFS protocols, mountable simultaneously by Windows, Linux, and macOS. <strong>Azure Blob Storage</strong> is object storage designed for massive unstructured text and binary data accessed via HTTP/REST.",
    "tags": [
      "Azure Storage",
      "Azure Files",
      "Blob Storage"
    ]
  },
  {
    "id": "azure-az900-fc-94",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "AzCopy vs. Azure Storage Explorer",
    "hint": "High-speed CLI utility vs. cross-platform desktop GUI.",
    "back": "<strong>AzCopy</strong> is a command-line tool optimized for high-performance parallel file transfers to and from Azure Storage accounts. <strong>Azure Storage Explorer</strong> is a standalone GUI desktop application for visually inspecting blobs, queues, tables, and files.",
    "tags": [
      "Azure Storage",
      "AzCopy",
      "Storage Explorer"
    ]
  },
  {
    "id": "azure-az900-fc-95",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Data Box",
    "hint": "Offline physical appliances for petabyte-scale data migration.",
    "back": "<strong>Azure Data Box</strong> is a ruggedized physical storage appliance shipped by Microsoft to a customer site to transfer up to 100 TB (or petabytes with Data Box Heavy) of data offline, avoiding months of saturated public internet uploads.",
    "tags": [
      "Azure Storage",
      "Data Box",
      "Migration"
    ]
  },
  {
    "id": "azure-az900-fc-96",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Microsoft Entra ID vs. Windows Server Active Directory",
    "hint": "Cloud identity via REST/OAuth vs. on-premises Kerberos/LDAP.",
    "back": "<strong>Microsoft Entra ID (formerly Azure AD)</strong> is a cloud-native identity service using modern HTTP protocols (OAuth 2.0, OpenID Connect, SAML) for SaaS and cloud apps. <strong>Windows Server Active Directory</strong> is an on-premises directory service using Kerberos and LDAP.",
    "tags": [
      "Microsoft Entra ID",
      "Active Directory",
      "Identity"
    ]
  },
  {
    "id": "azure-az900-fc-97",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Authentication vs. Authorization",
    "hint": "Proving who you are vs. determining what you can do.",
    "back": "<strong>Authentication (AuthN)</strong> is the process of verifying the identity of a person or service (e.g. username, password, MFA). <strong>Authorization (AuthZ)</strong> determines the level of access and specific actions an authenticated identity is permitted to perform (e.g. Azure RBAC).",
    "tags": [
      "Identity",
      "Authentication",
      "Authorization"
    ]
  },
  {
    "id": "azure-az900-fc-98",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Microsoft Entra Conditional Access",
    "hint": "Signal evaluation: If this happens, enforce that control.",
    "back": "<strong>Conditional Access</strong> is an intelligent policy engine that evaluates signals (user risk, location, device compliance, client app) to enforce automated access controls (e.g. require MFA, allow access, or block access).",
    "tags": [
      "Microsoft Entra ID",
      "Conditional Access",
      "Security"
    ]
  },
  {
    "id": "azure-az900-fc-99",
    "difficulty": "easy",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Azure Role-Based Access Control (RBAC): Owner vs. Contributor vs. Reader",
    "hint": "Full control with delegation, resource management, or view-only.",
    "back": "<strong>Owner</strong>: full access to all resources including granting access to others. <strong>Contributor</strong>: can create and manage all resources, but CANNOT grant access to others. <strong>Reader</strong>: can only view existing resources.",
    "tags": [
      "Azure RBAC",
      "Access Control",
      "Governance"
    ]
  },
  {
    "id": "azure-az900-fc-100",
    "difficulty": "medium",
    "certId": "azure-az900",
    "domainId": "d2",
    "front": "Zero Trust Security Model: The Three Principles",
    "hint": "Never trust, always verify.",
    "back": "The <strong>Zero Trust</strong> architecture operates on three foundational principles: 1) <strong>Verify explicitly</strong> (authenticate and authorize based on all available data points). 2) <strong>Use least privilege access</strong> (limit access with JIT/JEA). 3) <strong>Assume breach</strong> (minimize blast radius and encrypt end-to-end).",
    "tags": [
      "Zero Trust",
      "Security",
      "Architecture"
    ]
  }
];

export default AZURE_AZ900_FLASHCARDS_4;
