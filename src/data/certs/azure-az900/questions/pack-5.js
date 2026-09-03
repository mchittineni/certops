export const AZURE_AZ900_QUESTIONS_5 = [
  {
    id: "az-900-101",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Managed Disks",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure managed disks.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure managed disks?",
    options: [
      { id: 'A', text: "Azure Blob containers" },
      { id: 'B', text: "Azure Queue storage" },
      { id: 'C', text: "Azure Files" },
      { id: 'D', text: "Azure Managed Disks" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Managed Disks are block-level storage volumes managed by Azure and mounted to Azure Virtual Machines as OS or data disks. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-102",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Storage Redundancy - LRS",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for storage redundancy - lrs.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for storage redundancy - lrs?",
    options: [
      { id: 'A', text: "Geo-Zone-Redundant Storage (GZRS)" },
      { id: 'B', text: "Zone-Redundant Storage (ZRS)" },
      { id: 'C', text: "Locally Redundant Storage (LRS)" },
      { id: 'D', text: "Geo-Redundant Storage (GRS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Locally Redundant Storage (LRS) replicates data synchronously three times within a single physical datacenter in the primary region, guarding against local drive failure. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Storage"]
  },
  {
    id: "az-900-103",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Storage Redundancy - ZRS",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for storage redundancy - zrs.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for storage redundancy - zrs?",
    options: [
      { id: 'A', text: "Read-Access LRS" },
      { id: 'B', text: "Locally Redundant Storage (LRS)" },
      { id: 'C', text: "Zone-Redundant Storage (ZRS)" },
      { id: 'D', text: "Single-tenant storage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Zone-Redundant Storage (ZRS) replicates data synchronously across three Azure Availability Zones in the primary region, protecting against datacenter outages. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Storage"]
  },
  {
    id: "az-900-104",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Storage Redundancy - GRS",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for storage redundancy - grs.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for storage redundancy - grs?",
    options: [
      { id: 'A', text: "Geo-Redundant Storage (GRS)" },
      { id: 'B', text: "Locally Redundant Storage (LRS)" },
      { id: 'C', text: "Zone-Redundant Storage (ZRS)" },
      { id: 'D', text: "Cool tier only" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Geo-Redundant Storage (GRS) copies data three times locally within a single datacenter in the primary region using LRS, then replicates asynchronously to a secondary paired region. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Storage"]
  },
  {
    id: "az-900-105",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Storage Tooling - AzCopy",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for storage tooling - azcopy.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for storage tooling - azcopy?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Microsoft Sentinel" },
      { id: 'C', text: "Azure Bastion" },
      { id: 'D', text: "AzCopy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AzCopy is a high-performance command-line utility designed for copying blobs and files to and from Azure Storage accounts using parallel streaming. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Storage"]
  },
  {
    id: "az-900-106",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Storage Tooling - Storage Explorer",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for storage tooling - storage explorer.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for storage tooling - storage explorer?",
    options: [
      { id: 'A', text: "Azure Storage Explorer" },
      { id: 'B', text: "Azure Data Box" },
      { id: 'C', text: "Microsoft Defender" },
      { id: 'D', text: "Azure Synapse" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Storage Explorer is a standalone desktop GUI application for Windows, macOS, and Linux that makes it easy to work with Azure Storage data. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Storage"]
  },
  {
    id: "az-900-107",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Data Migration - Azure Data Box",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for data migration - azure data box.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for data migration - azure data box?",
    options: [
      { id: 'A', text: "Azure Storage Explorer" },
      { id: 'B', text: "AzCopy over public internet" },
      { id: 'C', text: "Azure Data Box" },
      { id: 'D', text: "Azure Virtual Network peering" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Data Box is a ruggedized physical storage appliance shipped to a customer to transfer petabytes of on-premises data into Azure offline. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Data"]
  },
  {
    id: "az-900-108",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Identity - Microsoft Entra ID",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for identity - microsoft entra id.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for identity - microsoft entra id?",
    options: [
      { id: 'A', text: "Azure Key Vault" },
      { id: 'B', text: "Microsoft Entra ID" },
      { id: 'C', text: "Active Directory Federation Services only" },
      { id: 'D', text: "Azure Policy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based identity and access management service that manages user sign-ins and access permissions. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Identity"]
  },
  {
    id: "az-900-109",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Entra ID vs On-Premises AD",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for entra id vs on-premises ad.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for entra id vs on-premises ad?",
    options: [
      { id: 'A', text: "Microsoft Entra ID requires physical domain controller servers" },
      { id: 'B', text: "Active Directory cannot manage user passwords" },
      { id: 'C', text: "Microsoft Entra ID uses REST APIs and web authentication protocols (OAuth, SAML), whereas Active Directory uses Kerberos and LDAP" },
      { id: 'D', text: "There is no architectural difference" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra ID uses modern web protocols like OAuth 2.0, OpenID Connect, and SAML, whereas on-premises Windows Server Active Directory relies on Kerberos and NTLM. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Entra"]
  },
  {
    id: "az-900-110",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Single Sign-On (SSO)",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for single sign-on (sso).",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for single sign-on (sso)?",
    options: [
      { id: 'A', text: "Conditional licensing" },
      { id: 'B', text: "Data loss prevention" },
      { id: 'C', text: "Single Sign-On (SSO)" },
      { id: 'D', text: "Multi-tenant isolation" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Single Sign-On (SSO) enables users to sign in once with one set of credentials to access multiple cloud services and on-premises applications. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Single"]
  },
  {
    id: "az-900-111",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Multi-Factor Authentication (MFA)",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for multi-factor authentication (mfa).",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for multi-factor authentication (mfa)?",
    options: [
      { id: 'A', text: "Multi-Factor Authentication (MFA)" },
      { id: 'B', text: "Resource Locking" },
      { id: 'C', text: "Role-Based Access Control" },
      { id: 'D', text: "Single-factor password hashing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Multi-Factor Authentication (MFA) protects identities by requiring two or more authentication factors: something you know, something you have, and something you are. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Multi-Factor"]
  },
  {
    id: "az-900-112",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Microsoft Entra Conditional Access",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for microsoft entra conditional access.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for microsoft entra conditional access?",
    options: [
      { id: 'A', text: "Azure DNS private zones" },
      { id: 'B', text: "Azure Resource Manager templates" },
      { id: 'C', text: "Network Security Groups" },
      { id: 'D', text: "Microsoft Entra Conditional Access" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conditional Access evaluates signals (user risk, location, device compliance, client app) and enforces access controls (block access or require MFA). Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Microsoft"]
  },
  {
    id: "az-900-113",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Role-Based Access Control (RBAC)",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure role-based access control (rbac).",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure role-based access control (rbac)?",
    options: [
      { id: 'A', text: "Azure ExpressRoute" },
      { id: 'B', text: "Azure Cost Management" },
      { id: 'C', text: "Azure Role-Based Access Control (RBAC)" },
      { id: 'D', text: "Azure Service Health" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure RBAC enables fine-grained access management by granting specific permissions (such as Owner, Contributor, or Reader) to users and groups at defined scopes. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-114",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: RBAC Role - Contributor",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for rbac role - contributor.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for rbac role - contributor?",
    options: [
      { id: 'A', text: "Reader" },
      { id: 'B', text: "Owner" },
      { id: 'C', text: "Contributor" },
      { id: 'D', text: "User Access Administrator" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The built-in Contributor role allows users to create and manage all types of Azure resources but does not allow them to grant access or assign roles to other users. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "RBAC"]
  },
  {
    id: "az-900-115",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: RBAC Role - Reader",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for rbac role - reader.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for rbac role - reader?",
    options: [
      { id: 'A', text: "Reader" },
      { id: 'B', text: "Contributor" },
      { id: 'C', text: "Owner" },
      { id: 'D', text: "Network Contributor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The built-in Reader role allows users to view all resources in a subscription or resource group but does not allow them to create, modify, or delete any resources. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "RBAC"]
  },
  {
    id: "az-900-116",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Zero Trust Security Model",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for zero trust security model.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for zero trust security model?",
    options: [
      { id: 'A', text: "Trust all internal corporate network traffic by default" },
      { id: 'B', text: "Rely exclusively on perimeter network firewalls" },
      { id: 'C', text: "Disable multi-factor authentication for administrators" },
      { id: 'D', text: "Verify explicitly, use least privileged access, and assume breach" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Zero Trust model operates on three foundational principles: Verify explicitly, Use least privilege access, and Assume breach. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Zero"]
  },
  {
    id: "az-900-117",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Defense in Depth",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for defense in depth.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for defense in depth?",
    options: [
      { id: 'A', text: "Single-perimeter security" },
      { id: 'B', text: "Defense in Depth" },
      { id: 'C', text: "Perimeter-only defense" },
      { id: 'D', text: "Stateless firewalling" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Defense in depth employs a series of layered defensive mechanisms (physical, identity, perimeter, network, compute, application, data) to protect assets. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Defense"]
  },
  {
    id: "az-900-118",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Microsoft Defender for Cloud",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for microsoft defender for cloud.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for microsoft defender for cloud?",
    options: [
      { id: 'A', text: "Azure Service Health" },
      { id: 'B', text: "Azure Policy only" },
      { id: 'C', text: "Azure Pricing Calculator" },
      { id: 'D', text: "Microsoft Defender for Cloud" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Defender for Cloud is a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP) that provides security recommendations and alerts. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Microsoft"]
  },
  {
    id: "az-900-119",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Microsoft Sentinel",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for microsoft sentinel.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for microsoft sentinel?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Key Vault" },
      { id: 'C', text: "Azure Monitor Log Analytics only" },
      { id: 'D', text: "Microsoft Sentinel" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Sentinel is a scalable, cloud-native Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) solution. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Microsoft"]
  },
  {
    id: "az-900-120",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Key Vault",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure key vault.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure key vault?",
    options: [
      { id: 'A', text: "Azure App Service" },
      { id: 'B', text: "Azure Key Vault" },
      { id: 'C', text: "Azure Virtual Network" },
      { id: 'D', text: "Azure Blob Storage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Key Vault provides secure centralized management for storing and controlling access to sensitive tokens, passwords, certificates, API keys, and cryptographic keys. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-121",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure SQL Database - PaaS",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure sql database - paas.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure sql database - paas?",
    options: [
      { id: 'A', text: "Azure Table Storage" },
      { id: 'B', text: "Azure Cosmos DB Table API" },
      { id: 'C', text: "SQL Server on an Azure Virtual Machine" },
      { id: 'D', text: "Azure SQL Database" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure SQL Database is a fully managed PaaS database engine that automatically handles upgrading, patching, backups, and monitoring without user involvement. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-122",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service: Azure Cosmos DB - Global NoSQL",
    scenario: "A cloud solutions architecture review is evaluating Azure core architectural services, data storage solutions, and identity controls for azure cosmos db - global nosql.",
    question: "Which Azure service, feature, or mechanism satisfies the requirements for azure cosmos db - global nosql?",
    options: [
      { id: 'A', text: "Azure Files" },
      { id: 'B', text: "Azure Cosmos DB" },
      { id: 'C', text: "Azure SQL Managed Instance" },
      { id: 'D', text: "Azure Database for PostgreSQL" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Cosmos DB is a globally distributed, multi-model NoSQL database service offering turnkey multi-region replication and single-digit millisecond latency SLAs. Selecting the appropriate Azure service ensures technical alignment with Microsoft best practices and operational scalability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/",
    tags: ["Azure Services", "Architecture", "Azure"]
  },
  {
    id: "az-900-123",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Architecture Scenario #1",
    scenario: "An enterprise is designing a distributed cloud solution in Azure requiring resilient computing, secure networking, and enterprise data storage.",
    question: "Which Azure architectural component or service best satisfies scenario requirement #1?",
    options: [
      { id: 'A', text: "Azure Virtual Network peering with Network Security Groups and zone-redundant storage" },
      { id: 'B', text: "Single unmanaged virtual machine with local storage and direct public IP access" },
      { id: 'C', text: "Disabling all firewall rules and relying solely on public DNS resolution" },
      { id: 'D', text: "Hosting all application tiers on an on-premises physical appliance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure architectural best practices emphasize combining Virtual Network peering, Network Security Groups, and zone-redundant storage options to provide secure, low-latency, and highly available infrastructure across regional Availability Zones.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/guide/",
    tags: ["Azure Architecture", "Infrastructure", "Best Practices"]
  },
  {
    id: "az-900-124",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Architecture Scenario #2",
    scenario: "An enterprise is designing a distributed cloud solution in Azure requiring resilient computing, secure networking, and enterprise data storage.",
    question: "Which Azure architectural component or service best satisfies scenario requirement #2?",
    options: [
      { id: 'A', text: "Hosting all application tiers on an on-premises physical appliance" },
      { id: 'B', text: "Disabling all firewall rules and relying solely on public DNS resolution" },
      { id: 'C', text: "Single unmanaged virtual machine with local storage and direct public IP access" },
      { id: 'D', text: "Azure Virtual Network peering with Network Security Groups and zone-redundant storage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure architectural best practices emphasize combining Virtual Network peering, Network Security Groups, and zone-redundant storage options to provide secure, low-latency, and highly available infrastructure across regional Availability Zones.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/guide/",
    tags: ["Azure Architecture", "Infrastructure", "Best Practices"]
  },
  {
    id: "az-900-125",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Architecture Scenario #3",
    scenario: "An enterprise is designing a distributed cloud solution in Azure requiring resilient computing, secure networking, and enterprise data storage.",
    question: "Which Azure architectural component or service best satisfies scenario requirement #3?",
    options: [
      { id: 'A', text: "Azure Virtual Network peering with Network Security Groups and zone-redundant storage" },
      { id: 'B', text: "Hosting all application tiers on an on-premises physical appliance" },
      { id: 'C', text: "Disabling all firewall rules and relying solely on public DNS resolution" },
      { id: 'D', text: "Single unmanaged virtual machine with local storage and direct public IP access" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure architectural best practices emphasize combining Virtual Network peering, Network Security Groups, and zone-redundant storage options to provide secure, low-latency, and highly available infrastructure across regional Availability Zones.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/guide/",
    tags: ["Azure Architecture", "Infrastructure", "Best Practices"]
  }
];

export default AZURE_AZ900_QUESTIONS_5;
