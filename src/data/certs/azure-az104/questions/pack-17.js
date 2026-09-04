export const AZURE_AZ104_QUESTIONS_17 = [
  {
    id: "az-104-401",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Application Security Groups (ASGs): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Network Security to apply uniform network filtering rules to all database virtual machines across multiple subnets without maintaining complex, error-prone lists of static IP addresses.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Application Security Groups (ASGs) for workload-centric security is under evaluation.",
    options: [
      { id: 'A', text: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules." },
      { id: 'B', text: "Hardcode the individual private IP addresses of all 50 database VMs in NSG rule definitions." },
      { id: 'C', text: "Place all database VMs on a public internet-facing subnet." },
      { id: 'D', text: "Disable Network Security Groups and rely solely on Windows Defender firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules. Application Security Groups (ASGs) enable configuring network security as a natural extension of an application's structure. By grouping VM network interfaces into an ASG, administrators can define NSG rules that reference the ASG as source or destination, removing the need to manage dynamic IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["Azure Network Security", "NSG & ASG", "Dr Failover"]
  },
  {
    id: "az-104-402",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Application Security Groups (ASGs): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Network Security to apply uniform network filtering rules to all database virtual machines across multiple subnets without maintaining complex, error-prone lists of static IP addresses.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Application Security Groups (ASGs) for workload-centric security is under evaluation.",
    options: [
      { id: 'A', text: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules." },
      { id: 'B', text: "Hardcode the individual private IP addresses of all 50 database VMs in NSG rule definitions." },
      { id: 'C', text: "Place all database VMs on a public internet-facing subnet." },
      { id: 'D', text: "Disable Network Security Groups and rely solely on Windows Defender firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules. Application Security Groups (ASGs) enable configuring network security as a natural extension of an application's structure. By grouping VM network interfaces into an ASG, administrators can define NSG rules that reference the ASG as source or destination, removing the need to manage dynamic IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["Azure Network Security", "NSG & ASG", "High Load Scale"]
  },
  {
    id: "az-104-403",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Application Security Groups (ASGs): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Network Security to apply uniform network filtering rules to all database virtual machines across multiple subnets without maintaining complex, error-prone lists of static IP addresses.",
    question: "Which solution properly implements these mandatory security and governance controls? Application Security Groups (ASGs) for workload-centric security is under evaluation.",
    options: [
      { id: 'A', text: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules." },
      { id: 'B', text: "Hardcode the individual private IP addresses of all 50 database VMs in NSG rule definitions." },
      { id: 'C', text: "Place all database VMs on a public internet-facing subnet." },
      { id: 'D', text: "Disable Network Security Groups and rely solely on Windows Defender firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules. Application Security Groups (ASGs) enable configuring network security as a natural extension of an application's structure. By grouping VM network interfaces into an ASG, administrators can define NSG rules that reference the ASG as source or destination, removing the need to manage dynamic IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["Azure Network Security", "NSG & ASG", "Security Compliance"]
  },
  {
    id: "az-104-404",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Application Security Groups (ASGs): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Network Security to apply uniform network filtering rules to all database virtual machines across multiple subnets without maintaining complex, error-prone lists of static IP addresses.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Application Security Groups (ASGs) for workload-centric security is under evaluation.",
    options: [
      { id: 'A', text: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules." },
      { id: 'B', text: "Hardcode the individual private IP addresses of all 50 database VMs in NSG rule definitions." },
      { id: 'C', text: "Place all database VMs on a public internet-facing subnet." },
      { id: 'D', text: "Disable Network Security Groups and rely solely on Windows Defender firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules. Application Security Groups (ASGs) enable configuring network security as a natural extension of an application's structure. By grouping VM network interfaces into an ASG, administrators can define NSG rules that reference the ASG as source or destination, removing the need to manage dynamic IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["Azure Network Security", "NSG & ASG", "Hybrid Migration"]
  },
  {
    id: "az-104-405",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Application Security Groups (ASGs): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Network Security to apply uniform network filtering rules to all database virtual machines across multiple subnets without maintaining complex, error-prone lists of static IP addresses.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Application Security Groups (ASGs) for workload-centric security is under evaluation.",
    options: [
      { id: 'A', text: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules." },
      { id: 'B', text: "Hardcode the individual private IP addresses of all 50 database VMs in NSG rule definitions." },
      { id: 'C', text: "Place all database VMs on a public internet-facing subnet." },
      { id: 'D', text: "Disable Network Security Groups and rely solely on Windows Defender firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Group the database VM network interfaces into an Application Security Group (ASG) and reference the ASG in NSG rules. Application Security Groups (ASGs) enable configuring network security as a natural extension of an application's structure. By grouping VM network interfaces into an ASG, administrators can define NSG rules that reference the ASG as source or destination, removing the need to manage dynamic IP addresses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["Azure Network Security", "NSG & ASG", "Resilience Failure"]
  },
  {
    id: "az-104-406",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "User-Defined Routes (UDR) and Route Tables: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Network Routing to force all outbound internet traffic from a backend database subnet to route through a central firewall Network Virtual Appliance (NVA) for deep packet inspection.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Custom Route Tables with User-Defined Routes (UDR) to Network Virtual Appliances is under evaluation.",
    options: [
      { id: 'A', text: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet." },
      { id: 'B', text: "Configure an Azure DNS private resolver pointing to the firewall appliance." },
      { id: 'C', text: "Manually configure static IP routing tables inside the Windows guest operating system." },
      { id: 'D', text: "Deploy an Azure Load Balancer with an outbound SNAT rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet. Azure automatically creates system default routes for each subnet. A User-Defined Route (UDR) in a custom Route Table overrides system routes. Setting a route for  with a next hop type of 'Virtual Appliance' forces all outbound internet traffic through the designated firewall IP.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview",
    tags: ["Azure Network Routing", "Routing", "Dr Failover"]
  },
  {
    id: "az-104-407",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "User-Defined Routes (UDR) and Route Tables: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Network Routing to force all outbound internet traffic from a backend database subnet to route through a central firewall Network Virtual Appliance (NVA) for deep packet inspection.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Custom Route Tables with User-Defined Routes (UDR) to Network Virtual Appliances is under evaluation.",
    options: [
      { id: 'A', text: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet." },
      { id: 'B', text: "Configure an Azure DNS private resolver pointing to the firewall appliance." },
      { id: 'C', text: "Manually configure static IP routing tables inside the Windows guest operating system." },
      { id: 'D', text: "Deploy an Azure Load Balancer with an outbound SNAT rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet. Azure automatically creates system default routes for each subnet. A User-Defined Route (UDR) in a custom Route Table overrides system routes. Setting a route for  with a next hop type of 'Virtual Appliance' forces all outbound internet traffic through the designated firewall IP.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview",
    tags: ["Azure Network Routing", "Routing", "High Load Scale"]
  },
  {
    id: "az-104-408",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "User-Defined Routes (UDR) and Route Tables: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Network Routing to force all outbound internet traffic from a backend database subnet to route through a central firewall Network Virtual Appliance (NVA) for deep packet inspection.",
    question: "Which solution properly implements these mandatory security and governance controls? Custom Route Tables with User-Defined Routes (UDR) to Network Virtual Appliances is under evaluation.",
    options: [
      { id: 'A', text: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet." },
      { id: 'B', text: "Configure an Azure DNS private resolver pointing to the firewall appliance." },
      { id: 'C', text: "Manually configure static IP routing tables inside the Windows guest operating system." },
      { id: 'D', text: "Deploy an Azure Load Balancer with an outbound SNAT rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet. Azure automatically creates system default routes for each subnet. A User-Defined Route (UDR) in a custom Route Table overrides system routes. Setting a route for  with a next hop type of 'Virtual Appliance' forces all outbound internet traffic through the designated firewall IP.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview",
    tags: ["Azure Network Routing", "Routing", "Security Compliance"]
  },
  {
    id: "az-104-409",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "User-Defined Routes (UDR) and Route Tables: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Network Routing to force all outbound internet traffic from a backend database subnet to route through a central firewall Network Virtual Appliance (NVA) for deep packet inspection.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Custom Route Tables with User-Defined Routes (UDR) to Network Virtual Appliances is under evaluation.",
    options: [
      { id: 'A', text: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet." },
      { id: 'B', text: "Configure an Azure DNS private resolver pointing to the firewall appliance." },
      { id: 'C', text: "Manually configure static IP routing tables inside the Windows guest operating system." },
      { id: 'D', text: "Deploy an Azure Load Balancer with an outbound SNAT rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet. Azure automatically creates system default routes for each subnet. A User-Defined Route (UDR) in a custom Route Table overrides system routes. Setting a route for  with a next hop type of 'Virtual Appliance' forces all outbound internet traffic through the designated firewall IP.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview",
    tags: ["Azure Network Routing", "Routing", "Hybrid Migration"]
  },
  {
    id: "az-104-410",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "User-Defined Routes (UDR) and Route Tables: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Network Routing to force all outbound internet traffic from a backend database subnet to route through a central firewall Network Virtual Appliance (NVA) for deep packet inspection.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Custom Route Tables with User-Defined Routes (UDR) to Network Virtual Appliances is under evaluation.",
    options: [
      { id: 'A', text: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet." },
      { id: 'B', text: "Configure an Azure DNS private resolver pointing to the firewall appliance." },
      { id: 'C', text: "Manually configure static IP routing tables inside the Windows guest operating system." },
      { id: 'D', text: "Deploy an Azure Load Balancer with an outbound SNAT rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Route Table with a User-Defined Route for 0.0.0.0/0 targeting the NVA private IP as the Next Hop, and associate it with the subnet. Azure automatically creates system default routes for each subnet. A User-Defined Route (UDR) in a custom Route Table overrides system routes. Setting a route for  with a next hop type of 'Virtual Appliance' forces all outbound internet traffic through the designated firewall IP.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview",
    tags: ["Azure Network Routing", "Routing", "Resilience Failure"]
  },
  {
    id: "az-104-411",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Subnet and Host Architecture: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Secure Management to provide secure RDP and SSH administration into Azure Virtual Machines directly via the Azure portal without assigning public IP addresses to the VMs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Bastion managed PaaS browser-based RDP and SSH is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet." },
      { id: 'B', text: "Assign public IP addresses to every virtual machine and open port 3389 to the internet." },
      { id: 'C', text: "Deploy an unmanaged Linux jump host VM with a public IP on the default subnet." },
      { id: 'D', text: "Use an Azure Application Gateway to terminate SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet. Azure Bastion is a fully managed Platform as a Service (PaaS) service that provides secure and seamless RDP and SSH connectivity to virtual machines directly over TLS via the Azure portal. Bastion requires a dedicated subnet named exactly  with at least a  prefix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Secure Management", "Azure Bastion", "Dr Failover"]
  },
  {
    id: "az-104-412",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Subnet and Host Architecture: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Secure Management to provide secure RDP and SSH administration into Azure Virtual Machines directly via the Azure portal without assigning public IP addresses to the VMs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Bastion managed PaaS browser-based RDP and SSH is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet." },
      { id: 'B', text: "Assign public IP addresses to every virtual machine and open port 3389 to the internet." },
      { id: 'C', text: "Deploy an unmanaged Linux jump host VM with a public IP on the default subnet." },
      { id: 'D', text: "Use an Azure Application Gateway to terminate SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet. Azure Bastion is a fully managed Platform as a Service (PaaS) service that provides secure and seamless RDP and SSH connectivity to virtual machines directly over TLS via the Azure portal. Bastion requires a dedicated subnet named exactly  with at least a  prefix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Secure Management", "Azure Bastion", "High Load Scale"]
  },
  {
    id: "az-104-413",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Subnet and Host Architecture: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Secure Management to provide secure RDP and SSH administration into Azure Virtual Machines directly via the Azure portal without assigning public IP addresses to the VMs.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Bastion managed PaaS browser-based RDP and SSH is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet." },
      { id: 'B', text: "Assign public IP addresses to every virtual machine and open port 3389 to the internet." },
      { id: 'C', text: "Deploy an unmanaged Linux jump host VM with a public IP on the default subnet." },
      { id: 'D', text: "Use an Azure Application Gateway to terminate SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet. Azure Bastion is a fully managed Platform as a Service (PaaS) service that provides secure and seamless RDP and SSH connectivity to virtual machines directly over TLS via the Azure portal. Bastion requires a dedicated subnet named exactly  with at least a  prefix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Secure Management", "Azure Bastion", "Security Compliance"]
  },
  {
    id: "az-104-414",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Subnet and Host Architecture: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Secure Management to provide secure RDP and SSH administration into Azure Virtual Machines directly via the Azure portal without assigning public IP addresses to the VMs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Bastion managed PaaS browser-based RDP and SSH is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet." },
      { id: 'B', text: "Assign public IP addresses to every virtual machine and open port 3389 to the internet." },
      { id: 'C', text: "Deploy an unmanaged Linux jump host VM with a public IP on the default subnet." },
      { id: 'D', text: "Use an Azure Application Gateway to terminate SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet. Azure Bastion is a fully managed Platform as a Service (PaaS) service that provides secure and seamless RDP and SSH connectivity to virtual machines directly over TLS via the Azure portal. Bastion requires a dedicated subnet named exactly  with at least a  prefix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Secure Management", "Azure Bastion", "Hybrid Migration"]
  },
  {
    id: "az-104-415",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Bastion Subnet and Host Architecture: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Secure Management to provide secure RDP and SSH administration into Azure Virtual Machines directly via the Azure portal without assigning public IP addresses to the VMs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Bastion managed PaaS browser-based RDP and SSH is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet." },
      { id: 'B', text: "Assign public IP addresses to every virtual machine and open port 3389 to the internet." },
      { id: 'C', text: "Deploy an unmanaged Linux jump host VM with a public IP on the default subnet." },
      { id: 'D', text: "Use an Azure Application Gateway to terminate SSH connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Bastion into a dedicated subnet named AzureBastionSubnet. Azure Bastion is a fully managed Platform as a Service (PaaS) service that provides secure and seamless RDP and SSH connectivity to virtual machines directly over TLS via the Azure portal. Bastion requires a dedicated subnet named exactly  with at least a  prefix.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Secure Management", "Azure Bastion", "Resilience Failure"]
  },
  {
    id: "az-104-416",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Zones and VNet Links: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure DNS to resolve internal virtual machine hostnames (e.g. app.corp.internal) privately across multiple virtual networks without deploying dedicated DNS server VMs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Private DNS Zones with auto-registration and virtual network links is under evaluation.",
    options: [
      { id: 'A', text: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration." },
      { id: 'B', text: "Create public DNS A records on an external domain registrar with private RFC 1918 IP addresses." },
      { id: 'C', text: "Edit the local hosts file on every virtual machine manually." },
      { id: 'D', text: "Deploy an Active Directory Domain Controller on every single subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration. Azure Private DNS provides a reliable, secure DNS service for your virtual network. Private DNS zones manage and resolve domain names in the virtual network without the need for a custom DNS solution. Linking VNets to the zone enables name resolution, and auto-registration manages VM lifecycle records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview",
    tags: ["Azure DNS", "DNS", "Dr Failover"]
  },
  {
    id: "az-104-417",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Zones and VNet Links: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure DNS to resolve internal virtual machine hostnames (e.g. app.corp.internal) privately across multiple virtual networks without deploying dedicated DNS server VMs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Private DNS Zones with auto-registration and virtual network links is under evaluation.",
    options: [
      { id: 'A', text: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration." },
      { id: 'B', text: "Create public DNS A records on an external domain registrar with private RFC 1918 IP addresses." },
      { id: 'C', text: "Edit the local hosts file on every virtual machine manually." },
      { id: 'D', text: "Deploy an Active Directory Domain Controller on every single subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration. Azure Private DNS provides a reliable, secure DNS service for your virtual network. Private DNS zones manage and resolve domain names in the virtual network without the need for a custom DNS solution. Linking VNets to the zone enables name resolution, and auto-registration manages VM lifecycle records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview",
    tags: ["Azure DNS", "DNS", "High Load Scale"]
  },
  {
    id: "az-104-418",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Zones and VNet Links: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure DNS to resolve internal virtual machine hostnames (e.g. app.corp.internal) privately across multiple virtual networks without deploying dedicated DNS server VMs.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Private DNS Zones with auto-registration and virtual network links is under evaluation.",
    options: [
      { id: 'A', text: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration." },
      { id: 'B', text: "Create public DNS A records on an external domain registrar with private RFC 1918 IP addresses." },
      { id: 'C', text: "Edit the local hosts file on every virtual machine manually." },
      { id: 'D', text: "Deploy an Active Directory Domain Controller on every single subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration. Azure Private DNS provides a reliable, secure DNS service for your virtual network. Private DNS zones manage and resolve domain names in the virtual network without the need for a custom DNS solution. Linking VNets to the zone enables name resolution, and auto-registration manages VM lifecycle records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview",
    tags: ["Azure DNS", "DNS", "Security Compliance"]
  },
  {
    id: "az-104-419",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Zones and VNet Links: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure DNS to resolve internal virtual machine hostnames (e.g. app.corp.internal) privately across multiple virtual networks without deploying dedicated DNS server VMs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Private DNS Zones with auto-registration and virtual network links is under evaluation.",
    options: [
      { id: 'A', text: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration." },
      { id: 'B', text: "Create public DNS A records on an external domain registrar with private RFC 1918 IP addresses." },
      { id: 'C', text: "Edit the local hosts file on every virtual machine manually." },
      { id: 'D', text: "Deploy an Active Directory Domain Controller on every single subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration. Azure Private DNS provides a reliable, secure DNS service for your virtual network. Private DNS zones manage and resolve domain names in the virtual network without the need for a custom DNS solution. Linking VNets to the zone enables name resolution, and auto-registration manages VM lifecycle records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview",
    tags: ["Azure DNS", "DNS", "Hybrid Migration"]
  },
  {
    id: "az-104-420",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure DNS Private Zones and VNet Links: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure DNS to resolve internal virtual machine hostnames (e.g. app.corp.internal) privately across multiple virtual networks without deploying dedicated DNS server VMs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Private DNS Zones with auto-registration and virtual network links is under evaluation.",
    options: [
      { id: 'A', text: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration." },
      { id: 'B', text: "Create public DNS A records on an external domain registrar with private RFC 1918 IP addresses." },
      { id: 'C', text: "Edit the local hosts file on every virtual machine manually." },
      { id: 'D', text: "Deploy an Active Directory Domain Controller on every single subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Private DNS Zone, link the VNets, and enable automatic registration. Azure Private DNS provides a reliable, secure DNS service for your virtual network. Private DNS zones manage and resolve domain names in the virtual network without the need for a custom DNS solution. Linking VNets to the zone enables name resolution, and auto-registration manages VM lifecycle records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/private-dns-overview",
    tags: ["Azure DNS", "DNS", "Resilience Failure"]
  },
  {
    id: "az-104-421",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Service Endpoints: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Networking to secure an Azure SQL Database so traffic from a web subnet travels directly over the Microsoft backbone network to the database private service IP without public internet exposure.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Virtual Network Service Endpoints securing Azure PaaS services is under evaluation.",
    options: [
      { id: 'A', text: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet." },
      { id: 'B', text: "Deploy an on-premises ExpressRoute gateway to route database queries through an on-premises data center." },
      { id: 'C', text: "Open the Azure SQL Database firewall to allow all 0.0.0.0 IP addresses." },
      { id: 'D', text: "Deploy an Azure Traffic Manager profile to route SQL connection queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet. Virtual Network (VNet) service endpoints extend your virtual network private address space and identity to Azure service resources over a direct connection on the Microsoft backbone network. This secures Azure service resources (like Azure SQL or Storage) directly to your virtual network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Azure Networking", "Service Endpoints", "Dr Failover"]
  },
  {
    id: "az-104-422",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Service Endpoints: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Networking to secure an Azure SQL Database so traffic from a web subnet travels directly over the Microsoft backbone network to the database private service IP without public internet exposure.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Virtual Network Service Endpoints securing Azure PaaS services is under evaluation.",
    options: [
      { id: 'A', text: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet." },
      { id: 'B', text: "Deploy an on-premises ExpressRoute gateway to route database queries through an on-premises data center." },
      { id: 'C', text: "Open the Azure SQL Database firewall to allow all 0.0.0.0 IP addresses." },
      { id: 'D', text: "Deploy an Azure Traffic Manager profile to route SQL connection queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet. Virtual Network (VNet) service endpoints extend your virtual network private address space and identity to Azure service resources over a direct connection on the Microsoft backbone network. This secures Azure service resources (like Azure SQL or Storage) directly to your virtual network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Azure Networking", "Service Endpoints", "High Load Scale"]
  },
  {
    id: "az-104-423",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Service Endpoints: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Networking to secure an Azure SQL Database so traffic from a web subnet travels directly over the Microsoft backbone network to the database private service IP without public internet exposure.",
    question: "Which solution properly implements these mandatory security and governance controls? Virtual Network Service Endpoints securing Azure PaaS services is under evaluation.",
    options: [
      { id: 'A', text: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet." },
      { id: 'B', text: "Deploy an on-premises ExpressRoute gateway to route database queries through an on-premises data center." },
      { id: 'C', text: "Open the Azure SQL Database firewall to allow all 0.0.0.0 IP addresses." },
      { id: 'D', text: "Deploy an Azure Traffic Manager profile to route SQL connection queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet. Virtual Network (VNet) service endpoints extend your virtual network private address space and identity to Azure service resources over a direct connection on the Microsoft backbone network. This secures Azure service resources (like Azure SQL or Storage) directly to your virtual network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Azure Networking", "Service Endpoints", "Security Compliance"]
  },
  {
    id: "az-104-424",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Service Endpoints: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Networking to secure an Azure SQL Database so traffic from a web subnet travels directly over the Microsoft backbone network to the database private service IP without public internet exposure.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Virtual Network Service Endpoints securing Azure PaaS services is under evaluation.",
    options: [
      { id: 'A', text: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet." },
      { id: 'B', text: "Deploy an on-premises ExpressRoute gateway to route database queries through an on-premises data center." },
      { id: 'C', text: "Open the Azure SQL Database firewall to allow all 0.0.0.0 IP addresses." },
      { id: 'D', text: "Deploy an Azure Traffic Manager profile to route SQL connection queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet. Virtual Network (VNet) service endpoints extend your virtual network private address space and identity to Azure service resources over a direct connection on the Microsoft backbone network. This secures Azure service resources (like Azure SQL or Storage) directly to your virtual network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Azure Networking", "Service Endpoints", "Hybrid Migration"]
  },
  {
    id: "az-104-425",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Service Endpoints: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Networking to secure an Azure SQL Database so traffic from a web subnet travels directly over the Microsoft backbone network to the database private service IP without public internet exposure.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Virtual Network Service Endpoints securing Azure PaaS services is under evaluation.",
    options: [
      { id: 'A', text: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet." },
      { id: 'B', text: "Deploy an on-premises ExpressRoute gateway to route database queries through an on-premises data center." },
      { id: 'C', text: "Open the Azure SQL Database firewall to allow all 0.0.0.0 IP addresses." },
      { id: 'D', text: "Deploy an Azure Traffic Manager profile to route SQL connection queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable a Virtual Network Service Endpoint for Microsoft.Sql on the web subnet. Virtual Network (VNet) service endpoints extend your virtual network private address space and identity to Azure service resources over a direct connection on the Microsoft backbone network. This secures Azure service resources (like Azure SQL or Storage) directly to your virtual network.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview",
    tags: ["Azure Networking", "Service Endpoints", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_17;
