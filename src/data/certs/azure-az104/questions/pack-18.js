export const AZURE_AZ104_QUESTIONS_18 = [
  {
    id: "az-104-426",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoints and Private Link: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Private Link to connect an on-premises enterprise application across ExpressRoute to an Azure Cosmos DB database using a private IP address within an Azure VNet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Private Endpoints with private IP addresses in subnets is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet." },
      { id: 'B', text: "Configure public internet firewall rules allowing the on-premises public IP." },
      { id: 'C', text: "Deploy an Azure NAT Gateway with an associated public IP prefix." },
      { id: 'D', text: "Use a Public Load Balancer to forward traffic to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet. Azure Private Endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service powered by Azure Private Link (such as Storage, SQL, or Cosmos DB), bringing the service directly inside your VNet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Azure Private Link", "Private Link", "Dr Failover"]
  },
  {
    id: "az-104-427",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoints and Private Link: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Private Link to connect an on-premises enterprise application across ExpressRoute to an Azure Cosmos DB database using a private IP address within an Azure VNet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Private Endpoints with private IP addresses in subnets is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet." },
      { id: 'B', text: "Configure public internet firewall rules allowing the on-premises public IP." },
      { id: 'C', text: "Deploy an Azure NAT Gateway with an associated public IP prefix." },
      { id: 'D', text: "Use a Public Load Balancer to forward traffic to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet. Azure Private Endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service powered by Azure Private Link (such as Storage, SQL, or Cosmos DB), bringing the service directly inside your VNet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Azure Private Link", "Private Link", "High Load Scale"]
  },
  {
    id: "az-104-428",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoints and Private Link: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Private Link to connect an on-premises enterprise application across ExpressRoute to an Azure Cosmos DB database using a private IP address within an Azure VNet.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Private Endpoints with private IP addresses in subnets is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet." },
      { id: 'B', text: "Configure public internet firewall rules allowing the on-premises public IP." },
      { id: 'C', text: "Deploy an Azure NAT Gateway with an associated public IP prefix." },
      { id: 'D', text: "Use a Public Load Balancer to forward traffic to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet. Azure Private Endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service powered by Azure Private Link (such as Storage, SQL, or Cosmos DB), bringing the service directly inside your VNet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Azure Private Link", "Private Link", "Security Compliance"]
  },
  {
    id: "az-104-429",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoints and Private Link: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Private Link to connect an on-premises enterprise application across ExpressRoute to an Azure Cosmos DB database using a private IP address within an Azure VNet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Private Endpoints with private IP addresses in subnets is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet." },
      { id: 'B', text: "Configure public internet firewall rules allowing the on-premises public IP." },
      { id: 'C', text: "Deploy an Azure NAT Gateway with an associated public IP prefix." },
      { id: 'D', text: "Use a Public Load Balancer to forward traffic to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet. Azure Private Endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service powered by Azure Private Link (such as Storage, SQL, or Cosmos DB), bringing the service directly inside your VNet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Azure Private Link", "Private Link", "Hybrid Migration"]
  },
  {
    id: "az-104-430",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Private Endpoints and Private Link: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Private Link to connect an on-premises enterprise application across ExpressRoute to an Azure Cosmos DB database using a private IP address within an Azure VNet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Private Endpoints with private IP addresses in subnets is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet." },
      { id: 'B', text: "Configure public internet firewall rules allowing the on-premises public IP." },
      { id: 'C', text: "Deploy an Azure NAT Gateway with an associated public IP prefix." },
      { id: 'D', text: "Use a Public Load Balancer to forward traffic to Cosmos DB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Private Endpoint for Azure Cosmos DB inside a delegated VNet subnet. Azure Private Endpoint is a network interface that uses a private IP address from your virtual network. This network interface connects you privately and securely to a service powered by Azure Private Link (such as Storage, SQL, or Cosmos DB), bringing the service directly inside your VNet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Azure Private Link", "Private Link", "Resilience Failure"]
  },
  {
    id: "az-104-431",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public vs Internal Load Balancers: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Load Balancer to distribute incoming database read queries across three backend database virtual machines that have only private IP addresses with zero public internet connectivity.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Standard Public Load Balancer vs Internal Load Balancer (ILB) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet." },
      { id: 'B', text: "Deploy a public Azure Load Balancer with a public IP address." },
      { id: 'C', text: "Use Azure Front Door to distribute internal database queries across private subnets." },
      { id: 'D', text: "Configure round-robin DNS records on a public internet DNS server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet. An Azure Load Balancer operates at Layer 4 (TCP/UDP). A Public Load Balancer maps public IP addresses to private IPs in backend pools for internet-facing traffic. An Internal Load Balancer (ILB) directs traffic only to resources that are inside a virtual network or accessible via a VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Azure Load Balancer", "Load Balancer", "Dr Failover"]
  },
  {
    id: "az-104-432",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public vs Internal Load Balancers: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Load Balancer to distribute incoming database read queries across three backend database virtual machines that have only private IP addresses with zero public internet connectivity.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Standard Public Load Balancer vs Internal Load Balancer (ILB) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet." },
      { id: 'B', text: "Deploy a public Azure Load Balancer with a public IP address." },
      { id: 'C', text: "Use Azure Front Door to distribute internal database queries across private subnets." },
      { id: 'D', text: "Configure round-robin DNS records on a public internet DNS server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet. An Azure Load Balancer operates at Layer 4 (TCP/UDP). A Public Load Balancer maps public IP addresses to private IPs in backend pools for internet-facing traffic. An Internal Load Balancer (ILB) directs traffic only to resources that are inside a virtual network or accessible via a VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Azure Load Balancer", "Load Balancer", "High Load Scale"]
  },
  {
    id: "az-104-433",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public vs Internal Load Balancers: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Load Balancer to distribute incoming database read queries across three backend database virtual machines that have only private IP addresses with zero public internet connectivity.",
    question: "Which solution properly implements these mandatory security and governance controls? Standard Public Load Balancer vs Internal Load Balancer (ILB) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet." },
      { id: 'B', text: "Deploy a public Azure Load Balancer with a public IP address." },
      { id: 'C', text: "Use Azure Front Door to distribute internal database queries across private subnets." },
      { id: 'D', text: "Configure round-robin DNS records on a public internet DNS server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet. An Azure Load Balancer operates at Layer 4 (TCP/UDP). A Public Load Balancer maps public IP addresses to private IPs in backend pools for internet-facing traffic. An Internal Load Balancer (ILB) directs traffic only to resources that are inside a virtual network or accessible via a VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Azure Load Balancer", "Load Balancer", "Security Compliance"]
  },
  {
    id: "az-104-434",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public vs Internal Load Balancers: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Load Balancer to distribute incoming database read queries across three backend database virtual machines that have only private IP addresses with zero public internet connectivity.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Standard Public Load Balancer vs Internal Load Balancer (ILB) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet." },
      { id: 'B', text: "Deploy a public Azure Load Balancer with a public IP address." },
      { id: 'C', text: "Use Azure Front Door to distribute internal database queries across private subnets." },
      { id: 'D', text: "Configure round-robin DNS records on a public internet DNS server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet. An Azure Load Balancer operates at Layer 4 (TCP/UDP). A Public Load Balancer maps public IP addresses to private IPs in backend pools for internet-facing traffic. An Internal Load Balancer (ILB) directs traffic only to resources that are inside a virtual network or accessible via a VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Azure Load Balancer", "Load Balancer", "Hybrid Migration"]
  },
  {
    id: "az-104-435",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Public vs Internal Load Balancers: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Load Balancer to distribute incoming database read queries across three backend database virtual machines that have only private IP addresses with zero public internet connectivity.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Standard Public Load Balancer vs Internal Load Balancer (ILB) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet." },
      { id: 'B', text: "Deploy a public Azure Load Balancer with a public IP address." },
      { id: 'C', text: "Use Azure Front Door to distribute internal database queries across private subnets." },
      { id: 'D', text: "Configure round-robin DNS records on a public internet DNS server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an internal Azure Load Balancer with a frontend private IP address in the database subnet. An Azure Load Balancer operates at Layer 4 (TCP/UDP). A Public Load Balancer maps public IP addresses to private IPs in backend pools for internet-facing traffic. An Internal Load Balancer (ILB) directs traffic only to resources that are inside a virtual network or accessible via a VPN/ExpressRoute.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Azure Load Balancer", "Load Balancer", "Resilience Failure"]
  },
  {
    id: "az-104-436",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway with WAF: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Application Gateway to route HTTP/HTTPS traffic based on URL paths (/images vs /api) and protect backend web applications against SQL injection and cross-site scripting (XSS) attacks.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Layer 7 Application Gateway with Web Application Firewall (WAF) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled." },
      { id: 'B', text: "Deploy a standard Layer 4 Azure Load Balancer with a basic health probe." },
      { id: 'C', text: "Deploy an Azure Network Security Group with an outbound port 80 rule." },
      { id: 'D', text: "Use an Azure NAT Gateway to inspect HTTP application layer payloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled. Azure Application Gateway is a Layer 7 (web traffic) load balancer that enables managing traffic to web applications. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and includes an integrated Web Application Firewall (WAF) protecting against OWASP top 10 threats.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Azure Application Gateway", "App Gateway", "Dr Failover"]
  },
  {
    id: "az-104-437",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway with WAF: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Application Gateway to route HTTP/HTTPS traffic based on URL paths (/images vs /api) and protect backend web applications against SQL injection and cross-site scripting (XSS) attacks.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Layer 7 Application Gateway with Web Application Firewall (WAF) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled." },
      { id: 'B', text: "Deploy a standard Layer 4 Azure Load Balancer with a basic health probe." },
      { id: 'C', text: "Deploy an Azure Network Security Group with an outbound port 80 rule." },
      { id: 'D', text: "Use an Azure NAT Gateway to inspect HTTP application layer payloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled. Azure Application Gateway is a Layer 7 (web traffic) load balancer that enables managing traffic to web applications. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and includes an integrated Web Application Firewall (WAF) protecting against OWASP top 10 threats.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Azure Application Gateway", "App Gateway", "High Load Scale"]
  },
  {
    id: "az-104-438",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway with WAF: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Application Gateway to route HTTP/HTTPS traffic based on URL paths (/images vs /api) and protect backend web applications against SQL injection and cross-site scripting (XSS) attacks.",
    question: "Which solution properly implements these mandatory security and governance controls? Layer 7 Application Gateway with Web Application Firewall (WAF) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled." },
      { id: 'B', text: "Deploy a standard Layer 4 Azure Load Balancer with a basic health probe." },
      { id: 'C', text: "Deploy an Azure Network Security Group with an outbound port 80 rule." },
      { id: 'D', text: "Use an Azure NAT Gateway to inspect HTTP application layer payloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled. Azure Application Gateway is a Layer 7 (web traffic) load balancer that enables managing traffic to web applications. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and includes an integrated Web Application Firewall (WAF) protecting against OWASP top 10 threats.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Azure Application Gateway", "App Gateway", "Security Compliance"]
  },
  {
    id: "az-104-439",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway with WAF: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Application Gateway to route HTTP/HTTPS traffic based on URL paths (/images vs /api) and protect backend web applications against SQL injection and cross-site scripting (XSS) attacks.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Layer 7 Application Gateway with Web Application Firewall (WAF) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled." },
      { id: 'B', text: "Deploy a standard Layer 4 Azure Load Balancer with a basic health probe." },
      { id: 'C', text: "Deploy an Azure Network Security Group with an outbound port 80 rule." },
      { id: 'D', text: "Use an Azure NAT Gateway to inspect HTTP application layer payloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled. Azure Application Gateway is a Layer 7 (web traffic) load balancer that enables managing traffic to web applications. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and includes an integrated Web Application Firewall (WAF) protecting against OWASP top 10 threats.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Azure Application Gateway", "App Gateway", "Hybrid Migration"]
  },
  {
    id: "az-104-440",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Application Gateway with WAF: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Application Gateway to route HTTP/HTTPS traffic based on URL paths (/images vs /api) and protect backend web applications against SQL injection and cross-site scripting (XSS) attacks.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Layer 7 Application Gateway with Web Application Firewall (WAF) is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled." },
      { id: 'B', text: "Deploy a standard Layer 4 Azure Load Balancer with a basic health probe." },
      { id: 'C', text: "Deploy an Azure Network Security Group with an outbound port 80 rule." },
      { id: 'D', text: "Use an Azure NAT Gateway to inspect HTTP application layer payloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Application Gateway v2 with Web Application Firewall (WAF) enabled. Azure Application Gateway is a Layer 7 (web traffic) load balancer that enables managing traffic to web applications. It supports URL path-based routing, SSL/TLS termination, cookie-based session affinity, and includes an integrated Web Application Firewall (WAF) protecting against OWASP top 10 threats.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Azure Application Gateway", "App Gateway", "Resilience Failure"]
  },
  {
    id: "az-104-441",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher: IP Flow Verify and NSG Flow Logs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Network Monitoring to diagnose why a virtual machine cannot communicate with a database server and verify whether a specific packet is allowed or denied by an NSG rule.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Network Watcher IP Flow Verify and NSG Flow Logs is under evaluation.",
    options: [
      { id: 'A', text: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status." },
      { id: 'B', text: "Ping the database server from a home internet connection." },
      { id: 'C', text: "Delete and recreate all subnets in the virtual network." },
      { id: 'D', text: "Check the virtual machine CPU utilization graphs in Azure Monitor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status. Azure Network Watcher IP Flow Verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple packet parameters (destination IP, source IP, destination port, source port, and protocol). It immediately identifies the exact NSG rule that allowed or blocked the traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-traffic-filtering-problem",
    tags: ["Azure Network Monitoring", "Network Watcher", "Dr Failover"]
  },
  {
    id: "az-104-442",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher: IP Flow Verify and NSG Flow Logs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Network Monitoring to diagnose why a virtual machine cannot communicate with a database server and verify whether a specific packet is allowed or denied by an NSG rule.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Network Watcher IP Flow Verify and NSG Flow Logs is under evaluation.",
    options: [
      { id: 'A', text: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status." },
      { id: 'B', text: "Ping the database server from a home internet connection." },
      { id: 'C', text: "Delete and recreate all subnets in the virtual network." },
      { id: 'D', text: "Check the virtual machine CPU utilization graphs in Azure Monitor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status. Azure Network Watcher IP Flow Verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple packet parameters (destination IP, source IP, destination port, source port, and protocol). It immediately identifies the exact NSG rule that allowed or blocked the traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-traffic-filtering-problem",
    tags: ["Azure Network Monitoring", "Network Watcher", "High Load Scale"]
  },
  {
    id: "az-104-443",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher: IP Flow Verify and NSG Flow Logs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Network Monitoring to diagnose why a virtual machine cannot communicate with a database server and verify whether a specific packet is allowed or denied by an NSG rule.",
    question: "Which solution properly implements these mandatory security and governance controls? Network Watcher IP Flow Verify and NSG Flow Logs is under evaluation.",
    options: [
      { id: 'A', text: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status." },
      { id: 'B', text: "Ping the database server from a home internet connection." },
      { id: 'C', text: "Delete and recreate all subnets in the virtual network." },
      { id: 'D', text: "Check the virtual machine CPU utilization graphs in Azure Monitor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status. Azure Network Watcher IP Flow Verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple packet parameters (destination IP, source IP, destination port, source port, and protocol). It immediately identifies the exact NSG rule that allowed or blocked the traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-traffic-filtering-problem",
    tags: ["Azure Network Monitoring", "Network Watcher", "Security Compliance"]
  },
  {
    id: "az-104-444",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher: IP Flow Verify and NSG Flow Logs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Network Monitoring to diagnose why a virtual machine cannot communicate with a database server and verify whether a specific packet is allowed or denied by an NSG rule.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Network Watcher IP Flow Verify and NSG Flow Logs is under evaluation.",
    options: [
      { id: 'A', text: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status." },
      { id: 'B', text: "Ping the database server from a home internet connection." },
      { id: 'C', text: "Delete and recreate all subnets in the virtual network." },
      { id: 'D', text: "Check the virtual machine CPU utilization graphs in Azure Monitor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status. Azure Network Watcher IP Flow Verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple packet parameters (destination IP, source IP, destination port, source port, and protocol). It immediately identifies the exact NSG rule that allowed or blocked the traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-traffic-filtering-problem",
    tags: ["Azure Network Monitoring", "Network Watcher", "Hybrid Migration"]
  },
  {
    id: "az-104-445",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure Network Watcher: IP Flow Verify and NSG Flow Logs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Network Monitoring to diagnose why a virtual machine cannot communicate with a database server and verify whether a specific packet is allowed or denied by an NSG rule.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Network Watcher IP Flow Verify and NSG Flow Logs is under evaluation.",
    options: [
      { id: 'A', text: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status." },
      { id: 'B', text: "Ping the database server from a home internet connection." },
      { id: 'C', text: "Delete and recreate all subnets in the virtual network." },
      { id: 'D', text: "Check the virtual machine CPU utilization graphs in Azure Monitor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure Network Watcher IP Flow Verify to test packet allow/deny status. Azure Network Watcher IP Flow Verify checks if a packet is allowed or denied to or from a virtual machine based on 5-tuple packet parameters (destination IP, source IP, destination port, source port, and protocol). It immediately identifies the exact NSG rule that allowed or blocked the traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/network-watcher/diagnose-vm-network-traffic-filtering-problem",
    tags: ["Azure Network Monitoring", "Network Watcher", "Resilience Failure"]
  },
  {
    id: "az-104-446",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway (Virtual Network NAT): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Egress Networking to provide outbound internet access for virtual machines in a private subnet using a predictable, dedicated static public IP address without allowing inbound internet connections.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure NAT Gateway providing predictable outbound public SNAT is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to each virtual machine network interface." },
      { id: 'C', text: "Deploy a Public Load Balancer with an inbound NAT rule for each VM." },
      { id: 'D', text: "Open all inbound ports in the Network Security Group to allow bidirectional traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet. Virtual Network NAT (NAT Gateway) provides outbound-only internet connectivity for virtual networks. All outbound traffic from associated subnets uses the NAT gateway's static public IP addresses. It prevents inbound internet connections, eliminating port exhaustion issues common with default SNAT.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["Azure Egress Networking", "NAT Gateway", "Dr Failover"]
  },
  {
    id: "az-104-447",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway (Virtual Network NAT): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Egress Networking to provide outbound internet access for virtual machines in a private subnet using a predictable, dedicated static public IP address without allowing inbound internet connections.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure NAT Gateway providing predictable outbound public SNAT is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to each virtual machine network interface." },
      { id: 'C', text: "Deploy a Public Load Balancer with an inbound NAT rule for each VM." },
      { id: 'D', text: "Open all inbound ports in the Network Security Group to allow bidirectional traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet. Virtual Network NAT (NAT Gateway) provides outbound-only internet connectivity for virtual networks. All outbound traffic from associated subnets uses the NAT gateway's static public IP addresses. It prevents inbound internet connections, eliminating port exhaustion issues common with default SNAT.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["Azure Egress Networking", "NAT Gateway", "High Load Scale"]
  },
  {
    id: "az-104-448",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway (Virtual Network NAT): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Egress Networking to provide outbound internet access for virtual machines in a private subnet using a predictable, dedicated static public IP address without allowing inbound internet connections.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure NAT Gateway providing predictable outbound public SNAT is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to each virtual machine network interface." },
      { id: 'C', text: "Deploy a Public Load Balancer with an inbound NAT rule for each VM." },
      { id: 'D', text: "Open all inbound ports in the Network Security Group to allow bidirectional traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet. Virtual Network NAT (NAT Gateway) provides outbound-only internet connectivity for virtual networks. All outbound traffic from associated subnets uses the NAT gateway's static public IP addresses. It prevents inbound internet connections, eliminating port exhaustion issues common with default SNAT.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["Azure Egress Networking", "NAT Gateway", "Security Compliance"]
  },
  {
    id: "az-104-449",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway (Virtual Network NAT): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Egress Networking to provide outbound internet access for virtual machines in a private subnet using a predictable, dedicated static public IP address without allowing inbound internet connections.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure NAT Gateway providing predictable outbound public SNAT is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to each virtual machine network interface." },
      { id: 'C', text: "Deploy a Public Load Balancer with an inbound NAT rule for each VM." },
      { id: 'D', text: "Open all inbound ports in the Network Security Group to allow bidirectional traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet. Virtual Network NAT (NAT Gateway) provides outbound-only internet connectivity for virtual networks. All outbound traffic from associated subnets uses the NAT gateway's static public IP addresses. It prevents inbound internet connections, eliminating port exhaustion issues common with default SNAT.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["Azure Egress Networking", "NAT Gateway", "Hybrid Migration"]
  },
  {
    id: "az-104-450",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Azure NAT Gateway (Virtual Network NAT): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Egress Networking to provide outbound internet access for virtual machines in a private subnet using a predictable, dedicated static public IP address without allowing inbound internet connections.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure NAT Gateway providing predictable outbound public SNAT is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet." },
      { id: 'B', text: "Assign public IP addresses directly to each virtual machine network interface." },
      { id: 'C', text: "Deploy a Public Load Balancer with an inbound NAT rule for each VM." },
      { id: 'D', text: "Open all inbound ports in the Network Security Group to allow bidirectional traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure NAT Gateway with an assigned static Public IP and associate it with the subnet. Virtual Network NAT (NAT Gateway) provides outbound-only internet connectivity for virtual networks. All outbound traffic from associated subnets uses the NAT gateway's static public IP addresses. It prevents inbound internet connections, eliminating port exhaustion issues common with default SNAT.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview",
    tags: ["Azure Egress Networking", "NAT Gateway", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_18;
