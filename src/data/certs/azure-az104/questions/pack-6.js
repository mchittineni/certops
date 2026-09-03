export const AZURE_AZ104_QUESTIONS_6 = [
  {
    id: "az-104-126",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Custom Security Attributes for Attribute-Based Access Control (ABAC)",
    scenario: "An enterprise needs to categorize user accounts with custom HR metadata attributes (such as `CostCenter`, `EmploymentStatus`, and `SecurityClearanceLevel`) that are queryable via Microsoft Graph and usable in Azure RBAC Attribute-Based Access Control (ABAC) role assignment conditions.",
    question: "Which Microsoft Entra ID feature provides centrally governed, schema-defined custom attributes for directory objects?",
    options: [
      { id: 'A', text: "Microsoft Entra Custom Security Attributes." },
      { id: 'B', text: "Azure Resource Tags." },
      { id: 'C', text: "Microsoft Entra Connect sync rules only." },
      { id: 'D', text: "Azure Management Group tags." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Entra Custom Security Attributes are business-specific, schema-defined custom key-value pairs assigned to users, enterprise applications, or managed identities. Unlike standard user profile attributes, custom security attributes are governed with dedicated permissions (Attribute Assignment Administrator) and integrate directly with Azure RBAC Attribute-Based Access Control (ABAC) role assignment conditions.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/custom-security-attributes-overview",
    tags: ["Entra ID", "Custom Security Attributes", "ABAC", "Identity"]
  },
  {
    id: "az-104-127",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure RBAC Role Assignments with Condition Filters (Azure ABAC)",
    scenario: "A storage administrator needs to assign the `Storage Blob Data Reader` role to a security group across a large storage account, but compliance requires that members of the group can read ONLY blobs located in containers tagged with `Project = Phoenix` and blobs with the index tag `Confidentiality = Low`.",
    question: "How should the administrator enforce this fine-grained data access restriction in Azure RBAC?",
    options: [
      { id: 'A', text: "Assign the Reader role at the Resource Group scope." },
      { id: 'B', text: "Create separate storage accounts for each project." },
      { id: 'C', text: "Add an Azure ABAC role assignment condition filter specifying container name and blob index tag attributes when assigning the role." },
      { id: 'D', text: "Deploy an Azure Resource Lock on the blob container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Attribute-Based Access Control (Azure ABAC) extends Azure RBAC by adding condition expressions to role assignments based on resource attributes (such as container names, blob path prefixes, or blob index tags). This allows fine-grained data-plane access control without multiplying role assignments across individual containers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview",
    tags: ["Azure RBAC", "Azure ABAC", "Role Conditions", "Blob Storage", "Governance"]
  },
  {
    id: "az-104-128",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Azure Resource Graph Explorer for High-Performance Cross-Subscription KQL Querying",
    scenario: "A cloud governance team manages 200 Azure subscriptions across 5 Management Groups. The team needs to immediately query all running virtual machines across all 200 subscriptions that have a public IP address attached and are missing the `Owner` tag, returning results in under 5 seconds.",
    question: "Which Azure service provides high-speed, cross-subscription resource inventory exploration using KQL?",
    options: [
      { id: 'A', text: "Azure Log Analytics workspace." },
      { id: 'B', text: "Azure Advisor scorecard." },
      { id: 'C', text: "Azure Resource Graph (ARG) Explorer." },
      { id: 'D', text: "Azure Activity Log." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Resource Graph (ARG) is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across all subscriptions and management groups using KQL. It indexes resource properties and relationships in real time, executing cross-subscription queries in milliseconds without making individual slow ARM REST API calls.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/resource-graph/overview",
    tags: ["Resource Graph", "ARG", "KQL", "Cross-Subscription", "Governance"]
  },
  {
    id: "az-104-129",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Password Protection for Banned Password Lists",
    scenario: "An enterprise needs to prevent all employees from setting passwords containing common weak strings (such as \"Company2024!\", \"Password123\", or local sports team names) both when changing passwords in Microsoft Entra ID and in on-premises Active Directory.",
    question: "Which Microsoft Entra feature enforces global and custom banned password dictionaries?",
    options: [
      { id: 'A', text: "Azure Policy with Audit effect." },
      { id: 'B', text: "Self-Service Password Reset without agents." },
      { id: 'C', text: "Azure Key Vault password generator." },
      { id: 'D', text: "Microsoft Entra Password Protection with a Custom Banned Password List." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra Password Protection detects and blocks known weak passwords using a dynamically updated Global Banned Password list (managed by Microsoft) and an optional Custom Banned Password list (configured with company-specific terms). Deploying the Entra Password Protection agent to on-premises domain controllers extends these protections to on-premises AD DS.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-password-ban-bad",
    tags: ["Entra ID", "Password Protection", "Security", "Identity"]
  },
  {
    id: "az-104-130",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Verified ID and Decentralized Identity Credentials",
    scenario: "A company issues digital employment credentials to remote workers that workers can store in their Microsoft Authenticator mobile digital wallet and present cryptographically to third-party verification partners without integrating the partner into the corporate directory.",
    question: "Which Microsoft Entra service provides verifiable credentials based on open decentralized identity standards?",
    options: [
      { id: 'A', text: "Microsoft Entra Connect." },
      { id: 'B', text: "Microsoft Entra Application Proxy." },
      { id: 'C', text: "Microsoft Entra Verified ID." },
      { id: 'D', text: "Microsoft Entra Domain Services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra Verified ID is a managed verifiable credentials service based on open decentralized identity (DID) standards. Organizations issue cryptographically signed digital credentials (such as employment proof, education, or certifications) that users hold in digital wallets and share with verifiers securely without disclosing excess personal data.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/verified-id/decentralized-identifier-overview",
    tags: ["Entra ID", "Verified ID", "Decentralized Identity", "Security"]
  },
  {
    id: "az-104-131",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Data Lake Storage Gen2 (ADLS Gen2) Hierarchical Namespace (HNS)",
    scenario: "A big data analytics team is configuring an Azure Storage Account to process petabytes of telemetry using Apache Spark and Azure Synapse Analytics. The workloads require atomic directory renaming and folder-level POSIX Access Control Lists (ACLs).",
    question: "Which feature must be enabled during storage account creation to enable Azure Data Lake Storage Gen2 capabilities?",
    options: [
      { id: 'A', text: "Enable Hierarchical Namespace (HNS)." },
      { id: 'B', text: "Enable Static Website Hosting." },
      { id: 'C', text: "Enable Object Replication." },
      { id: 'D', text: "Enable Blob Versioning." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling Hierarchical Namespace (HNS) converts standard Azure Blob Storage into Azure Data Lake Storage Gen2 (ADLS Gen2). HNS organizes objects into a true hierarchical directory structure, enabling atomic directory renaming, folder-level operations, and fine-grained POSIX access control lists (ACLs) essential for big data analytics engines.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction",
    tags: ["ADLS Gen2", "Hierarchical Namespace", "HNS", "Data Lake", "Storage"]
  },
  {
    id: "az-104-132",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Soft Delete and Recovery Window",
    scenario: "An administrator accidentally deletes an entire production Azure File Share containing 500 GB of department files. The storage account has Share Soft Delete enabled with a 30-day retention period.",
    question: "How should the administrator restore the deleted Azure file share?",
    options: [
      { id: 'A', text: "Restore from an on-premises tape backup." },
      { id: 'B', text: "Open a Microsoft Support ticket and wait 48 hours." },
      { id: 'C', text: "Navigate to \"Deleted shares\" in the Azure portal, select the deleted share, and click \"Undelete\"." },
      { id: 'D', text: "Recreate the storage account using the original name." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Files Share Soft Delete protects file shares from accidental or malicious deletion. When enabled (default 7 days, configurable up to 365 days), deleted file shares are moved to a soft-deleted state. Administrators can view deleted shares in the Azure portal and click **Undelete** to instantly restore the entire file share and its snapshot history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/files-prevent-accidental-deletion",
    tags: ["Azure Files", "Soft Delete", "Undelete", "Data Protection"]
  },
  {
    id: "az-104-133",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Blob Inventory Reports for Capacity Auditing",
    scenario: "A compliance team needs an automated weekly report detailing metadata, access tier, encryption status, size, and last modified date for all 50 million blobs stored across 100 containers in an Azure Storage Account, formatted as Apache Parquet or CSV files written directly to a designated container.",
    question: "Which Azure Storage feature generates automated scheduled metadata inventory reports?",
    options: [
      { id: 'A', text: "Azure Blob Storage Inventory." },
      { id: 'B', text: "Azure Backup vault report." },
      { id: 'C', text: "Azure Storage Metrics." },
      { id: 'D', text: "Azure Monitor Log Analytics workspace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Blob Storage Inventory is a managed capability that generates scheduled daily or weekly inventory reports of your blobs and containers. It outputs CSV or Parquet files containing comprehensive metadata (size, tier, creation time, content MD5, encryption, version ID, tags) directly to a specified destination container for compliance auditing and analytics.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/blob-inventory",
    tags: ["Blob Storage", "Blob Inventory", "Audit", "Storage"]
  },
  {
    id: "az-104-134",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Securing Azure Storage with SFTP (SSH File Transfer Protocol) Support",
    scenario: "A B2B integration requires external partners to upload transaction data files to an Azure Blob Storage container over SFTP (SSH File Transfer Protocol) using SSH key authentication, without managing third-party SFTP server VMs.",
    question: "Which native Azure Blob Storage feature provides managed multi-protocol SFTP endpoints?",
    options: [
      { id: 'A', text: "Configure Azure File Sync with an SFTP plugin." },
      { id: 'B', text: "Enable SFTP support on the Azure Storage Account with local user credentials and SSH keys." },
      { id: 'C', text: "Deploy an Azure Linux VM running OpenSSH in front of Blob storage." },
      { id: 'D', text: "Create an Azure Queue Storage endpoint." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Blob Storage natively supports SFTP (SSH File Transfer Protocol). Enabling SFTP on a hierarchical namespace-enabled storage account allows creating Local Users with password or SSH public key authentication, assigning container permissions and home directories, and transferring files directly into Blob containers over port 22 with zero VM management.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/secure-file-transfer-protocol-support",
    tags: ["Blob Storage", "SFTP", "Security", "Storage"]
  },
  {
    id: "az-104-135",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Analytics Logging vs Azure Monitor Diagnostic Settings",
    scenario: "An administrator needs to stream all read, write, and delete operations on an Azure Storage Account in real time to an Azure Log Analytics workspace to create automated security alerts on unauthorized access attempts.",
    question: "Which storage configuration enables streaming storage transaction logs to Log Analytics?",
    options: [
      { id: 'A', text: "Enable Classic Storage Analytics logging only." },
      { id: 'B', text: "Configure Blob Lifecycle Management." },
      { id: 'C', text: "Create a Stored Access Policy." },
      { id: 'D', text: "Configure Diagnostic Settings on the Storage Account (Blob service) targeting the Log Analytics workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring Diagnostic Settings on Azure Storage (under the Blob, File, Table, or Queue sub-services) enables streaming resource logs (such as `StorageRead`, `StorageWrite`, `StorageDelete`) directly to an Azure Log Analytics workspace, Azure Event Hubs, or an archive storage account for real-time alerting and KQL analysis.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/monitor-blob-storage",
    tags: ["Azure Storage", "Diagnostic Settings", "Log Analytics", "Monitoring"]
  },
  {
    id: "az-104-136",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Ephemeral OS Disks for Stateless Workloads",
    scenario: "A batch processing application runs on Virtual Machine Scale Sets (VMSS) with stateless worker nodes. The team requires lower VM latency, faster reimaging, and zero storage cost for OS disks.",
    question: "Which Azure disk configuration utilizes local VM host cache storage for the operating system disk?",
    options: [
      { id: 'A', text: "Standard HDD Managed Disks." },
      { id: 'B', text: "Ephemeral OS Disks." },
      { id: 'C', text: "Premium SSD Managed Disks." },
      { id: 'D', text: "Ultra Disks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Ephemeral OS Disks are created directly on the local VM host storage (temp disk or OS cache) rather than remote Azure storage. They provide faster boot times, lower read/write latency, and instant VM reimaging with zero storage transaction or capacity costs, making them ideal for stateless batch workloads and VMSS nodes.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks",
    tags: ["Virtual Machines", "Ephemeral OS Disk", "VMSS", "Performance", "Compute"]
  },
  {
    id: "az-104-137",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Serial Console for Linux and Windows Kernel Access",
    scenario: "A Linux virtual machine fails during kernel boot with a filesystem mounting error (`fsck`). SSH, network interfaces, and guest agent services are completely unresponsive.",
    question: "Which Azure portal feature provides bidirectional text-based serial console access to the VM hardware serial port (COM1/ttyS0)?",
    options: [
      { id: 'A', text: "Azure Bastion." },
      { id: 'B', text: "Azure Serial Console." },
      { id: 'C', text: "Azure Remote Desktop." },
      { id: 'D', text: "Azure Network Watcher IP Flow Verify." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Serial Console provides direct, bidirectional text console access to the physical COM1/ttyS0 serial port of Azure virtual machines and VM scale sets directly in the Azure portal, functioning independently of the guest OS network stack, IP configuration, or VM guest agent.",
    referenceUrl: "https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/serial-console-overview",
    tags: ["Serial Console", "Virtual Machines", "Troubleshooting", "Compute"]
  },
  {
    id: "az-104-138",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Hybrid Connections for On-Premises Relational Databases",
    scenario: "An Azure App Service web app needs to connect to an on-premises Microsoft SQL Server database running inside a corporate data center behind restrictive enterprise firewalls without establishing a Site-to-Site VPN or opening inbound firewall ports on the corporate perimeter.",
    question: "Which Azure App Service feature uses an outbound relay agent (Hybrid Connection Manager) over port 443 to reach on-premises TCP endpoints?",
    options: [
      { id: 'A', text: "Azure App Service Hybrid Connections (powered by Azure Relay)." },
      { id: 'B', text: "App Service Private Endpoints." },
      { id: 'C', text: "Azure Bastion tunneling." },
      { id: 'D', text: "Regional VNet Integration with public IP routing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Service Hybrid Connections (built on Azure Relay) allow Azure web applications to access on-premises TCP endpoints (such as SQL Server on port 1433) through a lightweight Hybrid Connection Manager (HCM) agent deployed inside the corporate network. HCM initiates an outbound connection over port 443 to Azure, requiring zero inbound firewall ports.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/app-service-hybrid-connections",
    tags: ["App Service", "Hybrid Connections", "Azure Relay", "Hybrid", "Compute"]
  },
  {
    id: "az-104-139",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets: Automatic OS Image Upgrades",
    scenario: "A company manages a Virtual Machine Scale Set (VMSS) running Ubuntu Server 22.04 LTS. The security policy mandates that OS security patches and minor image updates published by Canonical must be rolled out across the scale set automatically with zero application downtime.",
    question: "Which VMSS feature orchestrates automated rolling operating system upgrades?",
    options: [
      { id: 'A', text: "Automatic OS Image Upgrades with health probes enabled." },
      { id: 'B', text: "Azure Resource Locks." },
      { id: 'C', text: "Azure Custom Script extension." },
      { id: 'D', text: "Manual batch re-imaging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automatic OS Image Upgrades in VMSS automatically monitors the image publisher for new OS platform image versions and safely rolls out updates to scale set instances in batches. It integrates with application health probes to ensure instances are healthy before moving to the next batch, ensuring zero application downtime.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-automatic-upgrade",
    tags: ["VMSS", "Automatic OS Upgrades", "Patching", "Compute"]
  },
  {
    id: "az-104-140",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Apps (ACA) Ingress: External vs Internal Ingress",
    scenario: "A microservices application deployed on Azure Container Apps contains a frontend container accessible to public internet users, and a backend processing container that must be accessible ONLY to other container apps within the same Container Apps environment.",
    question: "How should ingress be configured for the backend container app?",
    options: [
      { id: 'A', text: "Enable Ingress and set the Ingress type to \"Limited to Container Apps Environment\" (Internal Ingress)." },
      { id: 'B', text: "Deploy an Azure Bastion host." },
      { id: 'C', text: "Disable Ingress completely." },
      { id: 'D', text: "Enable Ingress and set the Ingress type to \"Accepting traffic from anywhere\" (External Ingress)." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure Container Apps, configuring Internal Ingress (\"Limited to Container Apps Environment\") exposes the container app to a private internal FQDN accessible only to other container apps residing within the same Container Apps environment, blocking public internet access while enabling internal microservice-to-microservice communication.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview",
    tags: ["Container Apps", "ACA", "Ingress", "Containers", "Compute"]
  },
  {
    id: "az-104-141",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Security Group Effective Security Rules View",
    scenario: "A virtual machine has an NSG attached to its subnet and another NSG attached directly to its Network Interface (NIC). An administrator needs to determine the combined, evaluated rule set that governs incoming traffic on port 443.",
    question: "Which tool in the Azure portal displays the final aggregated security rule evaluation for a VM NIC?",
    options: [
      { id: 'A', text: "Azure Route Tables." },
      { id: 'B', text: "Effective Security Rules on the Network Interface." },
      { id: 'C', text: "Azure DNS Zones." },
      { id: 'D', text: "Azure Advisor Security scorecard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The **Effective Security Rules** view (accessible on any VM Network Interface or via Network Watcher) calculates the combined effect of NSGs applied at both the subnet level and the NIC level, displaying the exact evaluated priority, source, destination, port, and resulting action (Allow or Deny) for each rule.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/diagnose-network-traffic-filter-problem",
    tags: ["NSG", "Effective Rules", "Troubleshooting", "Networking"]
  },
  {
    id: "az-104-142",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway Multi-Site Hosting with Host Headers",
    scenario: "A company hosts two separate web applications (`contoso.com` and `fabrikam.com`) on the same Azure Application Gateway instance using a single public IP address, routing traffic to different backend pools based on the requested domain name in the HTTP request.",
    question: "Which Application Gateway listener type supports routing multiple domain names on a shared frontend IP?",
    options: [
      { id: 'A', text: "Basic listener." },
      { id: 'B', text: "TCP listener." },
      { id: 'C', text: "Multi-site (Multiple sites) listener specifying host names." },
      { id: 'D', text: "Path-based routing rule only." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-site listeners on Azure Application Gateway allow hosting multiple domain names (e.g. `contoso.com` and `fabrikam.com`) on the same Application Gateway frontend IP and port by matching the HTTP Host header or TLS Server Name Indication (SNI) extension to route traffic to independent backend pools.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/multiple-site-overview",
    tags: ["Application Gateway", "Multi-Site", "Host Headers", "SNI", "Networking"]
  },
  {
    id: "az-104-143",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Virtual WAN Standard Hub Architecture with Any-to-Any Routing",
    scenario: "A global enterprise connects 50 branch offices via Site-to-Site VPN, 10 ExpressRoute circuits, and 100 Virtual Networks across three continents. The enterprise needs a unified, automated transit network architecture with automated hub routing and centralized firewall inspection.",
    question: "Which Azure networking architecture simplifies global hub-and-spoke transit networking at scale?",
    options: [
      { id: 'A', text: "Azure Basic Load Balancer mesh." },
      { id: 'B', text: "Azure Virtual WAN (Standard tier) with secure virtual hubs." },
      { id: 'C', text: "Full mesh of 4,950 VNet Peering connections." },
      { id: 'D', text: "Azure Private Link Service in each VNet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Virtual WAN (Standard tier) provides a unified, Microsoft-managed global transit network architecture. It brings together networking, security (Azure Firewall integration in Secured Virtual Hubs), VPN, ExpressRoute, and OpenVPN point-to-site connectivity into a single operational interface with automated transit routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-wan/virtual-wan-about",
    tags: ["Virtual WAN", "vWAN", "Hub and Spoke", "Global Transit", "Networking"]
  },
  {
    id: "az-104-144",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher Next Hop for Routing Troubleshooting",
    scenario: "A virtual machine in `Subnet-App` is unable to communicate with an on-premises database at `192.168.10.20`. The administrator suspects a User-Defined Route (UDR) is blackholing traffic or pointing to an incorrect next hop.",
    question: "Which Azure Network Watcher tool quickly identifies the exact next hop IP address and route table driving traffic for a destination IP?",
    options: [
      { id: 'A', text: "Connection Troubleshoot." },
      { id: 'B', text: "Packet Capture." },
      { id: 'C', text: "Next Hop." },
      { id: 'D', text: "IP Flow Verify." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The **Next Hop** tool in Azure Network Watcher takes a source VM network interface and a destination IP address, and immediately returns the Next Hop Type (e.g. `VirtualAppliance`, `VirtualNetworkGateway`, `Internet`, or `None`) and the specific Route Table ID responsible for routing the packet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-routing-problem",
    tags: ["Network Watcher", "Next Hop", "Routing", "Troubleshooting"]
  },
  {
    id: "az-104-145",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Point-to-Site (P2S) VPN Authentication with Microsoft Entra ID",
    scenario: "An organization needs to allow 500 remote teleworkers to connect their Windows and macOS laptops securely to an Azure Virtual Network using the Azure VPN Client with single sign-on and MFA enforced via Microsoft Entra ID.",
    question: "Which Point-to-Site (P2S) VPN protocol and authentication type satisfies these criteria?",
    options: [
      { id: 'A', text: "IKEv2 protocol with RADIUS username/password only." },
      { id: 'B', text: "SSTP protocol with self-signed root certificates." },
      { id: 'C', text: "Azure Bastion without VPN." },
      { id: 'D', text: "OpenVPN protocol with Microsoft Entra ID authentication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure VPN Gateway Point-to-Site (P2S) supports the **OpenVPN** protocol configured with **Microsoft Entra ID authentication**. Users authenticate through the Azure VPN Client desktop app with Entra single sign-on, allowing administrators to enforce Conditional Access policies and Multi-Factor Authentication (MFA).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/vpn-gateway/openvpn-azure-ad-tenant",
    tags: ["VPN Gateway", "Point-to-Site", "OpenVPN", "Entra ID", "MFA"]
  },
  {
    id: "az-104-146",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules for Suppressing Maintenance Notifications",
    scenario: "An enterprise performs scheduled server patching on production virtual machines every Sunday between 01:00 and 05:00 UTC. The operations team is flooded with false-positive CPU and downtime alert notifications during this maintenance window.",
    question: "Which Azure Monitor feature temporarily suppresses alert notifications during planned maintenance windows without disabling individual alert rules?",
    options: [
      { id: 'A', text: "Disabling all Metric Alert rules manually." },
      { id: 'B', text: "Azure Resource Locks." },
      { id: 'C', text: "Alert Processing Rules configured with \"Suppress notifications\" during the scheduled time window." },
      { id: 'D', text: "Deleting the Action Group during the maintenance window." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Alert Processing Rules in Azure Monitor evaluate fired alerts and can modify their behavior or suppress notifications (preventing emails, SMS, or webhook actions from dispatching) during specific recurring maintenance schedules (e.g. Sundays 01:00–05:00) without disabling the underlying alert rules or clearing alert history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Monitor", "Alert Processing Rules", "Maintenance", "Alerting"]
  },
  {
    id: "az-104-147",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Immutable Vaults with Lock to Prevent Tampering",
    scenario: "A company needs to ensure that backup recovery points stored in an Azure Recovery Services Vault cannot be modified, deleted, or have their retention periods reduced by any user, administrator, or compromised credential, even if the tenant is attacked by ransomware.",
    question: "Which Azure Backup feature provides irreversible WORM compliance locking on the backup vault?",
    options: [
      { id: 'A', text: "Azure Backup Immutable Vault with Immutable Lock enabled." },
      { id: 'B', text: "Azure Storage Account SAS token." },
      { id: 'C', text: "Azure Resource Lock set to ReadOnly." },
      { id: 'D', text: "Soft Delete with 14-day retention." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Backup Immutable Vault prevents any operations that could lead to the loss of recovery points. Once an Immutable Vault is locked, the lock is **irreversible**: no user (including subscription Owners or Microsoft support) can disable immutability or delete backup data before the retention period expires.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-immutable-vault-concept",
    tags: ["Azure Backup", "Immutable Vault", "WORM", "Ransomware", "Security"]
  },
  {
    id: "az-104-148",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Log Analytics Data Retention and Archive Tier Management",
    scenario: "An enterpriseLog Analytics workspace ingests 100 GB of security logs daily. The company needs logs queryable in interactive Log Analytics search for 90 days, but must retain historical raw log data for 7 years (2,555 days) to satisfy financial compliance at minimal cost.",
    question: "How should the administrator configure Log Analytics data retention?",
    options: [
      { id: 'A', text: "Deploy an Azure Bastion host." },
      { id: 'B', text: "Set Interactive retention to 90 days and set Total retention (Archive) to 2,555 days (7 years)." },
      { id: 'C', text: "Export logs to local text files daily." },
      { id: 'D', text: "Set Interactive retention to 2,555 days." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Log Analytics workspaces support two retention periods: **Interactive retention** (where data is immediately searchable via fast KQL queries, e.g. 90 days) and **Total retention / Archive** (where data beyond interactive retention is moved to low-cost long-term archive storage for up to 12 years).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive",
    tags: ["Log Analytics", "Data Retention", "Archive", "Cost Optimization"]
  },
  {
    id: "az-104-149",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Network Watcher Connection Troubleshoot for Hop-by-Hop Diagnosis",
    scenario: "An application on VM1 cannot communicate with VM2 in a peered VNet over TCP port 8080. The administrator needs to identify whether the failure is caused by a guest OS firewall, an NSG rule, or a missing route table entry along the path.",
    question: "Which Azure Network Watcher tool performs automated hop-by-hop path checking and latency diagnosis?",
    options: [
      { id: 'A', text: "VPN Troubleshoot." },
      { id: 'B', text: "IP Flow Verify." },
      { id: 'C', text: "Security Group View." },
      { id: 'D', text: "Connection Troubleshoot." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Connection Troubleshoot in Azure Network Watcher tests a direct network connection from a source VM to a destination VM/IP/FQDN on a specific port. It returns hop-by-hop network routing details, latency, and points out the exact failure point (such as an NSG block, routing table blackhole, or VM guest firewall drop).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-connectivity-portal",
    tags: ["Network Watcher", "Connection Troubleshoot", "Troubleshooting", "Networking"]
  },
  {
    id: "az-104-150",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Application Insights Smart Detection and Automated Anomaly Alerts",
    scenario: "A web application experiences an abnormal surge in HTTP 500 server response failures and page load degradation following a new software build release.",
    question: "Which Application Insights feature automatically analyzes telemetry patterns using proactive machine learning to detect performance anomalies without user-configured threshold rules?",
    options: [
      { id: 'A', text: "Azure Advisor Cost alerts." },
      { id: 'B', text: "Availability Web Tests." },
      { id: 'C', text: "Smart Detection." },
      { id: 'D', text: "Activity Log alerts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Application Insights Smart Detection uses proactive machine learning algorithms to automatically monitor telemetry emitted by your web applications, detecting anomalies such as failure rate spikes, memory leaks, slow page loads, and abnormal response duration trends out-of-the-box without requiring manual threshold configuration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/proactive-diagnostics",
    tags: ["Application Insights", "Smart Detection", "Anomaly Detection", "Monitoring"]
  }
];

export default AZURE_AZ104_QUESTIONS_6;
