export const AZURE_AZ104_QUESTIONS_9 = [
  {
    id: 'az-104-201',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Microsoft Entra Domain Services (Entra DS) Managed Domain Controllers',
    scenario: 'An enterprise is migrating legacy Windows applications to Azure Virtual Machines. The applications require legacy Kerberos/NTLM authentication, LDAP binds, and Active Directory Group Policy Objects (GPOs), but the company does not want to manage domain controller IaaS VMs.',
    question: 'Which managed Azure service provides domain join, LDAP, and GPO support without managing Windows Server domain controllers?',
    options: [
      { id: 'A', text: 'Microsoft Entra Domain Services (Entra DS).' },
      { id: 'B', text: 'Microsoft Entra Connect.' },
      { id: 'C', text: 'Microsoft Entra Application Proxy.' },
      { id: 'D', text: 'Azure Key Vault.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Microsoft Entra Domain Services (Entra DS) provides managed domain services (such as domain join, group policy, LDAP, and Kerberos/NTLM authentication) that are fully compatible with Windows Server Active Directory, without requiring administrators to deploy, patch, or manage domain controller VMs.',
    referenceUrl: 'https://learn.microsoft.com/en-us/entra/identity/domain-services/overview',
    tags: ['Entra ID', 'Entra Domain Services', 'LDAP', 'Kerberos', 'Identity']
  },
  {
    id: 'az-104-202',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure Cost Management: Setting Up Cost Anomaly Detection Alerts',
    scenario: 'A cloud administrator needs automated daily email alerts whenever an unexpected spike in cloud consumption (e.g. an accidental deployment of high-cost GPU virtual machines or unconstrained data egress) is detected in a subscription.',
    question: 'Which Azure Cost Management feature uses machine learning to identify unexpected spending spikes?',
    options: [
      { id: 'A', text: 'Cost Anomaly Alerts in Microsoft Cost Management.' },
      { id: 'B', text: 'Azure Advisor cost scorecard.' },
      { id: 'C', text: 'Azure Activity Log alerts.' },
      { id: 'D', text: 'Azure Resource Locks.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Cost Anomaly Detection in Microsoft Cost Management automatically identifies unexpected changes in daily cloud usage patterns using machine learning algorithms. When an anomaly is detected, Azure sends an email notification with details on which resource or service caused the spending surge.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/manage-anomaly-alerts',
    tags: ['Cost Management', 'Anomaly Detection', 'FinOps', 'Governance']
  },
  {
    id: 'az-104-203',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure Policy `Modify` Effect for Enforcing Resource Tags',
    scenario: 'An enterprise mandates that whenever any resource is created or updated in a subscription, it must inherit the `CostCenter` tag value from its parent resource group if the resource does not already have a `CostCenter` tag.',
    question: 'Which Azure Policy effect dynamically adds or updates resource tags during deployment without blocking the creation request?',
    options: [
      { id: 'A', text: '`Modify` effect with `addOrReplace` tag operations.' },
      { id: 'B', text: '`Deny` effect.' },
      { id: 'C', text: '`Audit` effect.' },
      { id: 'D', text: '`Disabled` effect.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The `Modify` effect in Azure Policy is used to add, update, or remove properties or tags on resources during creation or update operations. Using a `Modify` policy with an `addOrReplace` operation dynamically injects the missing tag value before the resource provider processes the deployment.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/governance/policy/concepts/effect-modify',
    tags: ['Azure Policy', 'Modify Effect', 'Tagging', 'Governance']
  },
  {
    id: 'az-104-204',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Microsoft Entra Application Proxy for Secure Remote Access to On-Premises Web Apps',
    scenario: 'An enterprise has an internal legacy web application hosted on an on-premises IIS server. Remote workers need to access this web application securely from the internet using their Microsoft Entra credentials and MFA, without deploying a VPN or opening inbound perimeter firewall ports.',
    question: 'Which Microsoft Entra service provides secure reverse proxy access to on-premises web applications?',
    options: [
      { id: 'A', text: 'Microsoft Entra Application Proxy.' },
      { id: 'B', text: 'Microsoft Entra Connect.' },
      { id: 'C', text: 'Azure Bastion.' },
      { id: 'D', text: 'Azure ExpressRoute.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Microsoft Entra Application Proxy provides secure remote access to on-premises web applications. A lightweight Application Proxy connector agent deployed on-premises initiates an outbound connection over HTTPS to Entra ID, allowing users to access the app via a public cloud URL with Entra single sign-on and Conditional Access MFA.',
    referenceUrl: 'https://learn.microsoft.com/en-us/entra/identity/app-proxy/what-is-application-proxy',
    tags: ['Entra ID', 'Application Proxy', 'Remote Access', 'Security']
  },
  {
    id: 'az-104-205',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd1',
    domainName: 'Manage Azure identities and governance',
    title: 'Azure Lighthouse for Cross-Tenant Delegated Resource Management',
    scenario: 'A Managed Service Provider (MSP) manages Azure cloud infrastructure for 30 different customer organizations. The MSP engineers need to manage customer subscriptions using their own MSP corporate Entra credentials without switching directory tenants or managing guest accounts in customer directories.',
    question: 'Which Azure management technology enables cross-tenant delegated access and centralized monitoring for service providers?',
    options: [
      { id: 'A', text: 'Azure Lighthouse.' },
      { id: 'B', text: 'Microsoft Entra B2B Guest accounts.' },
      { id: 'C', text: 'Azure Blueprints.' },
      { id: 'D', text: 'Azure ExpressRoute.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Lighthouse enables multi-tenant management with cross-tenant delegated access. Customers project subscriptions or resource groups to the service provider\'s tenant, allowing MSP engineers to execute RBAC actions, deploy templates, and monitor resources directly from their own tenant context without guest user sprawl.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/lighthouse/overview',
    tags: ['Azure Lighthouse', 'Multi-Tenant', 'Delegated Management', 'Governance']
  },
  {
    id: 'az-104-206',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Blob Snapshot Management and Retention',
    scenario: 'A developer takes a read-only point-in-time snapshot of an Azure block blob before executing a data transformation script.',
    question: 'What happens to the blob snapshot if the original base blob is later updated or modified?',
    options: [
      { id: 'A', text: 'The snapshot remains completely unchanged as a read-only historical copy; only modified delta blocks incur additional storage charges.' },
      { id: 'B', text: 'The snapshot is automatically deleted.' },
      { id: 'C', text: 'The snapshot is updated to match the base blob.' },
      { id: 'D', text: 'The base blob is locked and cannot be edited.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A blob snapshot is a read-only point-in-time copy of a blob. When the base blob is updated, Azure Storage tracks block changes incrementally, charging only for the unique delta blocks modified after the snapshot was created, preserving the snapshot state indefinitely until explicitly deleted.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/snapshots-overview',
    tags: ['Blob Storage', 'Snapshots', 'Data Protection', 'Storage']
  },
  {
    id: 'az-104-207',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Account Public Network Access Disable and Private Endpoint Enforcement',
    scenario: 'A security team configures an Azure Storage Account with Private Endpoints in a virtual network. To strictly enforce zero trust and prevent data exfiltration, the team must disable all public internet access to the storage account completely.',
    question: 'Which setting in the storage account networking blade completely blocks all traffic from public internet IP addresses?',
    options: [
      { id: 'A', text: 'Set "Public network access" to `Disabled`.' },
      { id: 'B', text: 'Set "Public network access" to "Enabled from selected virtual networks".' },
      { id: 'C', text: 'Enable Soft Delete.' },
      { id: 'D', text: 'Attach an Azure Bastion host.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Setting **Public network access** to `Disabled` on an Azure Storage Account rejects all incoming connections arriving over public internet IPs. All access is strictly restricted to private connections originating from configured Azure Private Endpoints within your private virtual networks.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security#change-the-default-network-access-rule',
    tags: ['Azure Storage', 'Private Endpoints', 'Security', 'Zero Trust']
  },
  {
    id: 'az-104-208',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Files Large File Share Support (100 TiB Capacity)',
    scenario: 'An enterprise needs to store 80 TiB of CAD design files in a single standard Azure File Share. By default, standard file shares were limited to 5 TiB capacity.',
    question: 'Which feature must be enabled on the storage account to support standard file shares up to 100 TiB?',
    options: [
      { id: 'A', text: 'Enable Large File Shares (100 TiB support) on the storage account.' },
      { id: 'B', text: 'Enable Hierarchical Namespace.' },
      { id: 'C', text: 'Convert to Locally Redundant Storage (LRS).' },
      { id: 'D', text: 'Enable Blob Versioning.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Enabling **Large File Shares** on a standard General-Purpose v2 storage account increases the maximum file share capacity limit from 5 TiB to **100 TiB**, while increasing IOPS (up to 20,000 IOPS) and throughput limits (up to 300 MB/s). Note that large file shares on standard accounts cannot be converted to GRS/GZRS.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/files/storage-files-how-to-create-large-file-share',
    tags: ['Azure Files', 'Large File Shares', 'Capacity', 'Storage']
  },
  {
    id: 'az-104-209',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Blob Storage User Delegation SAS Tokens vs Account SAS',
    scenario: 'A security architect mandates that application clients accessing Azure Blob Storage must use temporary Shared Access Signatures (SAS) secured and validated directly via Microsoft Entra ID credentials, avoiding the exposure of master storage account keys.',
    question: 'Which SAS token type is signed using Microsoft Entra ID credentials?',
    options: [
      { id: 'A', text: 'User Delegation SAS.' },
      { id: 'B', text: 'Account SAS.' },
      { id: 'C', text: 'Service SAS.' },
      { id: 'D', text: 'Stored Access Policy SAS.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'A **User Delegation SAS** is secured with Microsoft Entra ID credentials rather than storage account keys. An Entra identity requests a user delegation key from Azure Storage, which is then used to sign the SAS token, ensuring superior security, fine-grained RBAC logging, and eliminating access key exposure.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create',
    tags: ['Azure Storage', 'User Delegation SAS', 'Entra ID', 'Security']
  },
  {
    id: 'az-104-210',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd2',
    domainName: 'Implement and manage storage',
    title: 'Azure Storage Blob Change Feed for Event-Driven Audit Tracking',
    scenario: 'A security audit application needs an ordered, immutable, read-only log of all blob creation, modification, and deletion events occurring across an Azure Storage Account for compliance replay.',
    question: 'Which Azure Blob Storage feature provides an immutable transaction log of all blob changes?',
    options: [
      { id: 'A', text: 'Blob Change Feed.' },
      { id: 'B', text: 'Blob Versioning.' },
      { id: 'C', text: 'Blob Soft Delete.' },
      { id: 'D', text: 'Azure Queue Storage.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The Azure Blob Storage **Change Feed** provides transactional, ordered, read-only logs of all creation, modification, and deletion changes made to blobs in your storage account. Events are stored in Apache Avro format in a hidden container (`$blobchangefeed`), enabling reliable asynchronous event processing.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-change-feed',
    tags: ['Blob Storage', 'Change Feed', 'Audit', 'Storage']
  },
  {
    id: 'az-104-211',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure Virtual Machine Disk Performance: Premium SSD vs Standard SSD vs Ultra Disks',
    scenario: 'An enterprise database running on an Azure Virtual Machine requires sub-millisecond disk latency, 80,000 IOPS, and 2,000 MB/s throughput with the ability to dynamically adjust IOPS and throughput on the fly without restarting the VM.',
    question: 'Which Azure managed disk type provides the highest performance with dynamically adjustable IOPS and throughput?',
    options: [
      { id: 'A', text: 'Azure Ultra Disk Storage (or Premium SSD v2).' },
      { id: 'B', text: 'Standard SSD Managed Disks.' },
      { id: 'C', text: 'Standard HDD Managed Disks.' },
      { id: 'D', text: 'Premium SSD (v1) P30.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure **Ultra Disk Storage** (and Premium SSD v2) delivers extreme performance (up to 160,000 IOPS and 4,000 MB/s throughput) with sub-millisecond latency. Ultra Disks allow administrators to independently configure and dynamically scale IOPS and throughput without taking the disk offline or restarting the VM.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks',
    tags: ['Virtual Machines', 'Ultra Disk', 'Managed Disks', 'Performance', 'Compute']
  },
  {
    id: 'az-104-212',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Virtual Machine Scale Sets (VMSS) with Custom Images from Azure Compute Gallery',
    scenario: 'A DevOps team needs to configure an auto-scaling Virtual Machine Scale Set that automatically deploys new VM instances using the latest version of a golden Linux image published to an Azure Compute Gallery.',
    question: 'How should the VMSS image reference be configured in ARM/Bicep template?',
    options: [
      { id: 'A', text: 'Reference the Compute Gallery Image Definition ID with version set to `latest`.' },
      { id: 'B', text: 'Hardcode the VHD URL of a storage blob.' },
      { id: 'C', text: 'Deploy a Custom Script Extension on each instance.' },
      { id: 'D', text: 'Attach an Azure Bastion host.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'In VMSS configurations using an Azure Compute Gallery (Shared Image Gallery), setting the image version property to `latest` instructs Azure to automatically provision new scale-out instances using the highest version number available in the image definition.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-deploy-app#use-a-custom-image',
    tags: ['VMSS', 'Compute Gallery', 'Custom Images', 'Automation', 'Compute']
  },
  {
    id: 'az-104-213',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure App Service Container Deployment from Private Azure Container Registry (ACR)',
    scenario: 'An administrator deploys a custom Docker container web application to Azure App Service for Linux. The container image is hosted in a private Azure Container Registry (ACR) with admin credentials disabled.',
    question: 'How should Azure App Service authenticate to pull the container image from ACR securely?',
    options: [
      { id: 'A', text: 'Enable a System-assigned Managed Identity on the App Service web app and grant it the `AcrPull` role on the Azure Container Registry.' },
      { id: 'B', text: 'Store the ACR admin password in plain text in App Settings.' },
      { id: 'C', text: 'Make the Azure Container Registry public.' },
      { id: 'D', text: 'Deploy an Azure Bastion host.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The recommended, secure way for Azure App Service to pull images from a private Azure Container Registry (ACR) is using **Managed Identity**. Assign a System-assigned Managed Identity to the App Service web app and grant it the built-in `AcrPull` RBAC role on the ACR instance, eliminating all credential management.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?pivots=container-linux#enable-managed-identity-and-pull-image',
    tags: ['App Service', 'ACR', 'AcrPull', 'Managed Identity', 'Containers']
  },
  {
    id: 'az-104-214',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure Virtual Machine IP Forwarding for Network Virtual Appliances (NVAs)',
    scenario: 'An administrator deploys a dual-NIC Linux firewall virtual machine in Azure to act as a Network Virtual Appliance (NVA). Traffic routed to the firewall from other subnets is being dropped by Azure before reaching the firewall OS.',
    question: 'Which setting must be enabled on the firewall VM network interface (NIC) in Azure?',
    options: [
      { id: 'A', text: 'Enable IP Forwarding (`EnableIPForwarding: true`) on the VM Network Interface.' },
      { id: 'B', text: 'Enable Accelerated Networking only.' },
      { id: 'C', text: 'Assign a Dynamic Public IP.' },
      { id: 'D', text: 'Enable Azure Bastion.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'By default, Azure drops any network packet arriving at a VM network interface whose destination IP does not match the IP address assigned to that NIC. For a Network Virtual Appliance (firewall, router) to receive and forward traffic destined for other IP addresses, **IP Forwarding** must be explicitly enabled on the NIC in Azure.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface#enable-or-disable-ip-forwarding',
    tags: ['Virtual Machines', 'IP Forwarding', 'NVA', 'Networking']
  },
  {
    id: 'az-104-215',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd3',
    domainName: 'Deploy and manage Azure compute resources',
    title: 'Azure Container Apps (ACA) Secrets and Azure Key Vault Reference Integration',
    scenario: 'A microservices application in Azure Container Apps requires database passwords injected into container environment variables securely from an Azure Key Vault.',
    question: 'How does Azure Container Apps integrate with Azure Key Vault secrets?',
    options: [
      { id: 'A', text: 'Configure Container Apps secrets with Key Vault references using a Managed Identity.' },
      { id: 'B', text: 'Hardcode secrets in the Dockerfile.' },
      { id: 'C', text: 'Store secrets in an unencrypted storage blob.' },
      { id: 'D', text: 'Create an SAS token.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Container Apps natively supports **Key Vault references**. By granting the Container App\'s Managed Identity read permissions on Azure Key Vault secrets, the Container App can reference the secret URL, injecting the value securely into container environment variables without storing secrets in plaintext.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets?tabs=azure-portal#key-vault-references',
    tags: ['Container Apps', 'Key Vault', 'Managed Identity', 'Secrets', 'Compute']
  },
  {
    id: 'az-104-216',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Accelerated Networking for Virtual Machines (SR-IOV)',
    scenario: 'A database cluster deployed on Azure virtual machines requires high network throughput (up to 30 Gbps) and ultra-low latency with near-zero CPU overhead.',
    question: 'Which networking feature enables Single Root I/O Virtualization (SR-IOV) directly to the VM network interface?',
    options: [
      { id: 'A', text: 'Accelerated Networking.' },
      { id: 'B', text: 'IP Forwarding.' },
      { id: 'C', text: 'Service Endpoints.' },
      { id: 'D', text: 'VNet Peering.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Accelerated Networking enables Single Root I/O Virtualization (SR-IOV) on supported Azure VM sizes, bypassing the virtual switch in the hypervisor and establishing a direct path to the physical network card. This drastically reduces latency, jitter, and host CPU utilization while maximizing network throughput.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/virtual-network/accelerated-networking-overview',
    tags: ['Accelerated Networking', 'SR-IOV', 'Low Latency', 'Networking', 'Virtual Machines']
  },
  {
    id: 'az-104-217',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Application Gateway Cookie-Based Affinity for Stateful Sessions',
    scenario: 'An e-commerce shopping cart web application running on Azure virtual machines behind an Azure Application Gateway requires that once a user begins a session, all subsequent HTTP requests are routed to the same backend server using gateway-managed cookies.',
    question: 'Which feature on the Application Gateway backend HTTP settings maintains sticky user sessions?',
    options: [
      { id: 'A', text: 'Cookie-based affinity (Session Affinity) enabled.' },
      { id: 'B', text: 'Basic Load Balancer distribution mode.' },
      { id: 'C', text: 'Connection draining only.' },
      { id: 'D', text: 'Path-based routing.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure Application Gateway supports **Cookie-based affinity**. When enabled in the backend HTTP settings, the Application Gateway inserts a gateway-managed cookie (`ApplicationGatewayAffinity`) into the HTTP response, directing all subsequent requests from that client browser to the exact same backend server instance.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-probe-overview',
    tags: ['Application Gateway', 'Cookie Affinity', 'Session Sticky', 'Networking']
  },
  {
    id: 'az-104-218',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure Virtual Network Flow Logs with Traffic Analytics',
    scenario: 'An enterprise is migrating from classic NSG Flow Logs to Azure VNet Flow Logs to monitor all IP network flows across entire virtual networks (including subnets, NICs, and network gateways) with packet drop analysis and integration with Azure Log Analytics.',
    question: 'Which feature provides unified flow logging for entire virtual networks?',
    options: [
      { id: 'A', text: 'Azure Virtual Network Flow Logs (VNet Flow Logs).' },
      { id: 'B', text: 'IP Flow Verify point-in-time checks.' },
      { id: 'C', text: 'Azure Activity Log.' },
      { id: 'D', text: 'Azure Service Health.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Azure VNet Flow Logs is the next-generation flow logging capability that records IP traffic across entire virtual networks, subnets, and network interfaces. When paired with Traffic Analytics, it visualizes network traffic, detects anomalous flows, and identifies top talkers directly in Log Analytics.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/network-watcher/vnet-flow-logs-overview',
    tags: ['VNet Flow Logs', 'Network Watcher', 'Traffic Analytics', 'Monitoring', 'Networking']
  },
  {
    id: 'az-104-219',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure DNS Alias Records vs Canonical Name (CNAME) Records',
    scenario: 'A company hosts a web service on Azure Traffic Manager or Azure Front Door. The DNS administrator needs to map the zone apex root domain (`contoso.com`, without `www`) directly to the Azure Traffic Manager profile FQDN.',
    question: 'Which DNS record type in Azure Public DNS supports pointing apex root domains directly to Azure resources?',
    options: [
      { id: 'A', text: 'Azure DNS Alias Record (pointing to Traffic Manager / Front Door).' },
      { id: 'B', text: 'Standard CNAME record.' },
      { id: 'C', text: 'MX record.' },
      { id: 'D', text: 'PTR record.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Standard DNS RFCs prohibit creating CNAME records at the zone apex (`contoso.com`). Azure DNS solves this by supporting **Alias Records** (an A/AAAA record with an alias flag) that dynamically points directly to Azure Traffic Manager profiles, Azure Front Door, or Azure Public IPs at the zone apex.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/dns/dns-alias-overview',
    tags: ['Azure DNS', 'Alias Records', 'Apex Domain', 'Traffic Manager', 'Networking']
  },
  {
    id: 'az-104-220',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd4',
    domainName: 'Configure and manage virtual networking',
    title: 'Azure ExpressRoute Peering Types: Private Peering vs Microsoft Peering',
    scenario: 'An organization uses an Azure ExpressRoute circuit to connect its on-premises data center. The team needs private connectivity to Azure Virtual Machines in IaaS VNets, as well as private connectivity to Microsoft 365 and Azure Storage PaaS services.',
    question: 'Which ExpressRoute peering configuration corresponds to these two connectivity targets?',
    options: [
      { id: 'A', text: 'Azure Private Peering for IaaS VNets; Microsoft Peering for PaaS services and Microsoft 365.' },
      { id: 'B', text: 'Microsoft Peering for IaaS VNets; Azure Private Peering for PaaS services.' },
      { id: 'C', text: 'Public Peering for all workloads.' },
      { id: 'D', text: 'Point-to-Site VPN for all workloads.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'ExpressRoute offers two active peering types: 1) **Azure Private Peering**: connects directly to private virtual networks (IaaS VMs), and 2) **Microsoft Peering**: connects directly to public Microsoft PaaS services (Azure Storage, Azure SQL) and Microsoft 365 services over the dedicated circuit.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/expressroute/expressroute-circuit-peerings',
    tags: ['ExpressRoute', 'Private Peering', 'Microsoft Peering', 'Hybrid', 'Networking']
  },
  {
    id: 'az-104-221',
    difficulty: 'hard',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Log Analytics Workspace Data Export for Continuous Low-Cost Ingestion Streaming',
    scenario: 'An enterprise ingests 500 GB of telemetry daily into an Azure Log Analytics workspace. For compliance, raw event streams must be continuously archived in real time to an Azure Storage Account and forwarded to an Azure Event Hub without building custom polling scripts.',
    question: 'Which Azure Log Analytics feature continuously streams table logs to external destinations upon ingestion?',
    options: [
      { id: 'A', text: 'Log Analytics Workspace Data Export.' },
      { id: 'B', text: 'Azure Backup vault snapshot.' },
      { id: 'C', text: 'Azure Activity Log export.' },
      { id: 'D', text: 'Azure Service Health notifications.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Log Analytics Workspace Data Export provides continuous, real-time streaming of selected table data as it is ingested into the workspace, exporting raw JSON directly to Azure Storage Accounts (for cheap 10-year archival) or Azure Event Hubs (for third-party SIEM processing).',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-data-export',
    tags: ['Log Analytics', 'Data Export', 'Event Hubs', 'Monitoring', 'SIEM']
  },
  {
    id: 'az-104-222',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Network Watcher Network Topology Mapping',
    scenario: 'A newly appointed network administrator needs to generate a visual, interactive graphical diagram of all virtual networks, subnets, virtual machines, network interfaces, and NSGs deployed across a resource group.',
    question: 'Which Azure Network Watcher tool generates dynamic graphical network diagrams?',
    options: [
      { id: 'A', text: 'Network Watcher Topology.' },
      { id: 'B', text: 'IP Flow Verify.' },
      { id: 'C', text: 'Packet Capture.' },
      { id: 'D', text: 'VPN Troubleshoot.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The **Topology** feature in Azure Network Watcher generates interactive graphical maps displaying all network resources and their interconnectivity within a resource group or virtual network, allowing administrators to visually inspect routing, peering, and subnet associations.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/network-watcher/view-network-topology',
    tags: ['Network Watcher', 'Topology', 'Diagram', 'Networking']
  },
  {
    id: 'az-104-223',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Backup Instant Restore Snapshot Retention Duration',
    scenario: 'An administrator creates an Azure VM Backup Policy. The policy takes daily backups and stores local instant snapshots for 2 days before transferring the backup copy to vault standard storage.',
    question: 'What is the configurable retention range for Instant Restore snapshots in standard Azure VM backup policies?',
    options: [
      { id: 'A', text: '1 to 5 days.' },
      { id: 'B', text: '1 to 30 days.' },
      { id: 'C', text: '30 to 365 days.' },
      { id: 'D', text: '1 hour only.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'In standard Azure VM backup policies, the **Instant Restore** snapshot retention is configurable between **1 and 5 days** (default is 2 days). Snapshots retained during this window provide instant restore capabilities without waiting for data transfer from the vault.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-first-look-arm#instant-restore',
    tags: ['Azure Backup', 'Instant Restore', 'Snapshots', 'Data Protection']
  },
  {
    id: 'az-104-224',
    difficulty: 'medium',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Monitor Log Ingestion API with Custom DCR Transformation KQL',
    scenario: 'An application streams custom JSON telemetry logs to Azure Log Analytics via the Logs Ingestion API. Before logs are written to the workspace table, the security policy requires masking sensitive credit card number columns using a KQL transformation statement.',
    question: 'Which Azure Monitor component executes inline KQL transformation and data masking during log ingestion?',
    options: [
      { id: 'A', text: 'Data Collection Rule (DCR) with an ingestion transformation KQL query (`transformKql`).' },
      { id: 'B', text: 'Azure Policy definition.' },
      { id: 'C', text: 'Azure Service Health.' },
      { id: 'D', text: 'Azure Resource Lock.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Data Collection Rules (DCRs) support **Ingestion-time Transformations** using a `transformKql` statement. As data arrives through the Azure Monitor Logs Ingestion API, Azure Monitor executes the KQL transformation in real time to filter rows, parse strings, mask sensitive PII/credit card data, or enrich columns before saving to the table.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-transformations',
    tags: ['Data Collection Rules', 'DCR', 'Ingestion Transformation', 'KQL', 'Security']
  },
  {
    id: 'az-104-225',
    difficulty: 'easy',
    certId: 'azure-az104',
    domainId: 'd5',
    domainName: 'Monitor and maintain Azure resources',
    title: 'Azure Monitor Activity Log Alerts for Service Principal Role Assignment Changes',
    scenario: 'A security officer needs to be alerted via email immediately whenever a new user or Service Principal is granted the `Owner` or `Contributor` role at the subscription scope.',
    question: 'Which Azure Monitor alert type monitors Azure Resource Manager administrative role assignment events?',
    options: [
      { id: 'A', text: 'Activity Log Alert rule monitoring the `Create role assignment` administrative operation.' },
      { id: 'B', text: 'Metric Alert rule on VM CPU.' },
      { id: 'C', text: 'Application Insights availability test.' },
      { id: 'D', text: 'Azure Advisor security check.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Activity Log Alert rules monitor subscription-level control plane operations recorded in the Azure Activity Log. Creating an alert rule matching the `Microsoft.Authorization/roleAssignments/write` operation triggers an Action Group whenever new role assignments are created.',
    referenceUrl: 'https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-activity-log',
    tags: ['Activity Log Alert', 'Azure RBAC', 'Security', 'Governance', 'Monitoring']
  }
];

export default AZURE_AZ104_QUESTIONS_9;
