export const AZURE_AZ900_QUESTIONS_6 = [
  {
    id: "az-900-126",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure DNS Hosting",
    scenario: "What capability does Azure DNS provide for domain owners?",
    question: "Which statement accurately describes Azure DNS?",
    options: [
      { id: 'A', text: "It provides domain registration and purchases top-level domains" },
      { id: 'B', text: "It generates SSL certificates automatically" },
      { id: 'C', text: "It is a hosting service for DNS domains that provides name resolution using global Microsoft infrastructure" },
      { id: 'D', text: "It acts as a physical router inside client offices" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure DNS is a hosting service for DNS domains, resolving domain queries with high availability and fast response times using Microsoft's global anycast DNS infrastructure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/dns/dns-overview",
    tags: ["DNS", "Azure DNS", "Networking", "Name Resolution"]
  },
  {
    id: "az-900-127",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Network Security Groups (NSGs): Inbound and Outbound Security Rules",
    scenario: "An administrator wants to block all inbound HTTP traffic on port 80 to a subnet containing database virtual machines while permitting inbound traffic on port 1433 from an application subnet.",
    question: "Which Azure networking feature filters traffic at the subnet and network interface level using 5-tuple security rules?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "Network Security Groups (NSGs)" },
      { id: 'C', text: "Azure Traffic Manager" },
      { id: 'D', text: "Azure DNS Private Zones" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Network Security Groups (NSGs) filter network traffic to and from Azure resources in a VNet using 5-tuple rules (source, source port, destination, destination port, protocol), evaluating priority numbers to allow or deny traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["NSG", "Security", "Firewall", "Networking"]
  },
  {
    id: "az-900-128",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Application Security Groups (ASGs): Workload Grouping",
    scenario: "An engineer wants to write NSG rules that reference logical application tiers (e.g. 'WebServers', 'DatabaseServers') without managing individual static IP addresses.",
    question: "Which Azure networking feature enables grouping virtual network interfaces into logical application tags?",
    options: [
      { id: 'A', text: "Route Tables" },
      { id: 'B', text: "Local Network Gateways" },
      { id: 'C', text: "Application Security Groups (ASGs)" },
      { id: 'D', text: "Virtual Network NAT" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Application Security Groups (ASGs) allow administrators to group virtual machines and network interfaces logically into application roles, enabling simplified, reusable NSG rules based on application semantics rather than static IPs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups",
    tags: ["ASG", "NSG", "Networking", "Security"]
  },
  {
    id: "az-900-129",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Bastion: Secure RDP and SSH Connectivity",
    scenario: "A security policy prohibits virtual machines from having public IP addresses and forbids exposing open RDP (port 3389) or SSH (port 22) ports to the internet.",
    question: "Which managed service allows administrators to connect securely to private VMs via RDP/SSH directly inside an HTML5 web browser?",
    options: [
      { id: 'A', text: "Azure Load Balancer" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Azure Application Gateway" },
      { id: 'D', text: "Azure ExpressRoute" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Bastion is a fully managed PaaS service provisioned inside a VNet that provides secure, seamless RDP and SSH access to private virtual machines directly through the Azure portal via TLS on port 443, without exposing public IPs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/bastion/bastion-overview",
    tags: ["Azure Bastion", "RDP", "SSH", "Security"]
  },
  {
    id: "az-900-130",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Firewall: Cloud-Native Stateful Firewall",
    scenario: "An enterprise needs a centralized, stateful network firewall with built-in high availability, threat intelligence filtering, and fully qualified domain name (FQDN) filtering across all VNets.",
    question: "Which Azure service provides these centralized perimeter firewall capabilities?",
    options: [
      { id: 'A', text: "Network Security Groups (NSGs)" },
      { id: 'B', text: "Azure DNS" },
      { id: 'C', text: "Azure DDoS Protection" },
      { id: 'D', text: "Azure Firewall" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Firewall is a managed, cloud-based network security service that protects Azure Virtual Network resources. It is a fully stateful firewall with built-in high availability, unrestricted cloud scalability, and threat intelligence filtering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/firewall/overview",
    tags: ["Azure Firewall", "Perimeter Security", "Networking"]
  },
  {
    id: "az-900-131",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure DDoS Protection: Basic vs Standard (Network Protection)",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How does Azure protect all cloud resources against volumetric distributed denial-of-service (DDoS) infrastructure attacks by default?",
    options: [
      { id: 'A', text: "Through default infrastructure-level DDoS protection enabled automatically at no additional cost for all Azure customers" },
      { id: 'B', text: "By shutting down all virtual machines during attacks" },
      { id: 'C', text: "By converting all web traffic to email messages" },
      { id: 'D', text: "By charging customers extra for every blocked packet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure provides infrastructure-level DDoS protection enabled automatically at no cost across the entire platform, defending against common Layer 3 and Layer 4 volumetric flood attacks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview",
    tags: ["DDoS", "Security", "Infrastructure Protection"]
  },
  {
    id: "az-900-132",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage: Redundancy Options (LRS vs ZRS vs GRS)",
    scenario: "An organization requires that data stored in an Azure Storage account is replicated synchronously across three distinct Availability Zones within the primary region.",
    question: "Which redundancy tier must be configured?",
    options: [
      { id: 'A', text: "Read-access geo-redundant storage (RA-GRS)" },
      { id: 'B', text: "Locally redundant storage (LRS)" },
      { id: 'C', text: "Zone-redundant storage (ZRS)" },
      { id: 'D', text: "Geo-redundant storage (GRS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Zone-redundant storage (ZRS) copies data synchronously across three separate Azure Availability Zones in the primary region, providing high availability against datacenter-level outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Storage Redundancy", "ZRS", "LRS", "GRS"]
  },
  {
    id: "az-900-133",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Locally Redundant Storage (LRS) Durability",
    scenario: "A developer selects Locally Redundant Storage (LRS) for temporary test data.",
    question: "How many copies of data does LRS maintain within a single datacenter in the primary region?",
    options: [
      { id: 'A', text: "Six copies" },
      { id: 'B', text: "Twelve copies" },
      { id: 'C', text: "One single copy" },
      { id: 'D', text: "Three copies" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Locally redundant storage (LRS) replicates data three times within a single physical datacenter in the primary region, providing at least 99.999999999% (11 nines) of durability over a given year.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy#locally-redundant-storage",
    tags: ["LRS", "Storage Redundancy", "Durability"]
  },
  {
    id: "az-900-134",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Geo-Redundant Storage (GRS) Architecture",
    scenario: "An architect configures Geo-Redundant Storage (GRS) for critical long-term enterprise backups.",
    question: "How many total copies of data are stored across the primary and secondary paired regions in GRS?",
    options: [
      { id: 'A', text: "One copy in each global region" },
      { id: 'B', text: "Ten copies across cloud providers" },
      { id: 'C', text: "Two copies in the primary region and two in the secondary" },
      { id: 'D', text: "Three copies in the primary region and three copies in the secondary paired region (six total copies)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Geo-redundant storage (GRS) copies data synchronously three times within a single physical location in the primary region using LRS, then replicates data asynchronously to a physical location in a secondary paired region (yielding six total copies).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy#geo-redundant-storage",
    tags: ["GRS", "Geo-Redundancy", "Storage", "Disaster Recovery"]
  },
  {
    id: "az-900-135",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Account Types: Standard General Purpose v2",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Which storage account type is recommended by Microsoft for the vast majority of modern cloud scenarios, supporting Blobs, Files, Queues, and Tables?",
    options: [
      { id: 'A', text: "Classic storage accounts" },
      { id: 'B', text: "Legacy BlobStorage accounts" },
      { id: 'C', text: "BlockBlobStorage accounts only" },
      { id: 'D', text: "Standard general-purpose v2 (GPv2) accounts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Standard general-purpose v2 (GPv2) storage accounts support all core Azure Storage services (Blobs, Files, Queues, Tables) and all access tiers (Hot, Cool, Cold, Archive) at the most competitive pricing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview",
    tags: ["Storage Accounts", "GPv2", "Blob Storage"]
  },
  {
    id: "az-900-136",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Explorer Tool",
    scenario: "A data analyst needs a visual desktop GUI application on their Windows laptop to easily upload, download, and manage Azure Blobs, Files, and Queues.",
    question: "Which free Microsoft desktop tool should the analyst install?",
    options: [
      { id: 'A', text: "Azure Data Box" },
      { id: 'B', text: "Azure Virtual Desktop" },
      { id: 'C', text: "Azure Logic Apps" },
      { id: 'D', text: "Azure Storage Explorer" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Storage Explorer is a free standalone desktop application developed by Microsoft for Windows, macOS, and Linux that allows users to visually interact with Azure Storage data, manage SAS tokens, and inspect tables.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/vs-azure-tools-storage-manage-with-storage-explorer",
    tags: ["Storage Explorer", "Tools", "Storage", "GUI"]
  },
  {
    id: "az-900-137",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Load Balancer: Layer 4 Traffic Distribution",
    scenario: "A high-throughput gaming service requires ultra-low latency load balancing across 20 virtual machines at the network and transport layer (TCP and UDP).",
    question: "Which Azure load balancer operates at Layer 4 of the OSI model?",
    options: [
      { id: 'A', text: "Azure Traffic Manager" },
      { id: 'B', text: "Azure Front Door" },
      { id: 'C', text: "Azure Load Balancer" },
      { id: 'D', text: "Azure Application Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Load Balancer is an ultra-low latency Layer 4 load balancer that distributes incoming network traffic across backend VM instances based on configured 5-tuple hash rules for TCP and UDP traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",
    tags: ["Load Balancer", "Layer 4", "TCP/UDP", "Networking"]
  },
  {
    id: "az-900-138",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Application Gateway: Layer 7 Routing and WAF",
    scenario: "An e-commerce website requires URL path-based routing (e.g. routing `/images/*` to image servers and `/checkout/*` to payment servers) and SSL termination.",
    question: "Which Azure load balancing solution operates at Layer 7 (HTTP/HTTPS)?",
    options: [
      { id: 'A', text: "Azure Application Gateway" },
      { id: 'B', text: "Azure ExpressRoute" },
      { id: 'C', text: "Azure Network Security Group" },
      { id: 'D', text: "Azure Load Balancer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Application Gateway is a Layer 7 web traffic load balancer that enables URL path-based routing, cookie-based session affinity, SSL termination, and integrated Web Application Firewall (WAF) protection.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/application-gateway/overview",
    tags: ["Application Gateway", "Layer 7", "WAF", "Networking"]
  },
  {
    id: "az-900-139",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Front Door: Global Web Application Acceleration",
    scenario: "A multinational enterprise needs a global web entry point that combines Anycast network acceleration, global HTTP load balancing across multi-region backends, and SSL offloading.",
    question: "Which Azure service provides global Layer 7 content delivery and security acceleration?",
    options: [
      { id: 'A', text: "Azure VPN Gateway" },
      { id: 'B', text: "Azure Traffic Manager" },
      { id: 'C', text: "Azure Front Door" },
      { id: 'D', text: "Azure Load Balancer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Front Door is Microsoft's modern cloud content delivery network (CDN) and global web load balancer using Microsoft's global Anycast edge network to accelerate dynamic web applications.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview",
    tags: ["Front Door", "Global CDN", "Layer 7", "Performance"]
  },
  {
    id: "az-900-140",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Traffic Manager: DNS-Based Global Load Balancing",
    scenario: "A global application uses DNS resolution to route users to the nearest regional datacenter offering the lowest network latency.",
    question: "Which Azure service operates as a DNS-based traffic distributor?",
    options: [
      { id: 'A', text: "Azure ExpressRoute" },
      { id: 'B', text: "Azure Application Gateway" },
      { id: 'C', text: "Azure Front Door" },
      { id: 'D', text: "Azure Traffic Manager" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Traffic Manager is a DNS-based traffic load balancer that routes client requests to optimal regional endpoints based on DNS routing methods (Priority, Weighted, Performance, Geographic).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview",
    tags: ["Traffic Manager", "DNS", "Global Routing", "Networking"]
  },
  {
    id: "az-900-141",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Logic Apps: Automated Serverless Workflows",
    scenario: "An organization wants to build an automated workflow that connects Office 365 emails, Salesforce records, and ServiceNow tickets using visual drag-and-drop connectors with zero code.",
    question: "Which Azure serverless integration service fulfills this requirement?",
    options: [
      { id: 'A', text: "Azure Synapse" },
      { id: 'B', text: "Azure Virtual Machines" },
      { id: 'C', text: "Azure Logic Apps" },
      { id: 'D', text: "Azure Functions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Logic Apps is a serverless cloud service for creating automated workflows that integrate apps, data, services, and systems across enterprises using hundreds of pre-built connectors with minimal to no code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview",
    tags: ["Logic Apps", "Serverless", "Workflow", "Integrations"]
  },
  {
    id: "az-900-142",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Event Grid: Event-Driven Reactive Architecture",
    scenario: "An application requires a central event router that listens to Azure Blob creation events and fans out notifications to Azure Functions and webhooks in milliseconds.",
    question: "Which Azure messaging service provides reactive publish-subscribe event routing?",
    options: [
      { id: 'A', text: "Azure Data Factory" },
      { id: 'B', text: "Azure Service Bus" },
      { id: 'C', text: "Azure Event Grid" },
      { id: 'D', text: "Azure Queue Storage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Event Grid is a highly scalable, serverless event broker that uses a publish-subscribe model to route discrete events from Azure resources (like Blob Storage) to event handlers (like Functions or webhooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/overview",
    tags: ["Event Grid", "Event-Driven", "Serverless", "Messaging"]
  },
  {
    id: "az-900-143",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Service Bus: Enterprise Message Queuing",
    scenario: "A banking payment processing platform requires guaranteed FIFO (First-In, First-Out) message ordering, transactions, message deduplication, and dead-lettering.",
    question: "Which Azure messaging service is built for complex enterprise messaging patterns?",
    options: [
      { id: 'A', text: "Azure Service Bus" },
      { id: 'B', text: "Azure Notification Hubs" },
      { id: 'C', text: "Azure DNS" },
      { id: 'D', text: "Azure Event Grid" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Service Bus is a fully managed enterprise integration message broker featuring queues for one-to-one communication and topics for publish-subscribe, supporting FIFO ordering, transactions, and dead-letter queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview",
    tags: ["Service Bus", "Messaging", "Enterprise", "Decoupling"]
  },
  {
    id: "az-900-144",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Synapse Analytics: Enterprise Big Data Analytics",
    scenario: "A retail analytics department needs a unified service that combines big data processing (Apache Spark) and enterprise data warehousing (SQL) for analyzing petabytes of historical sales.",
    question: "Which Azure service provides this integrated analytics platform?",
    options: [
      { id: 'A', text: "Azure Table Storage" },
      { id: 'B', text: "Azure Database for MySQL" },
      { id: 'C', text: "Azure Synapse Analytics" },
      { id: 'D', text: "Azure Cache for Redis" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Synapse Analytics is an enterprise analytics service that accelerates time to insight across data warehouses and big data systems, integrating SQL data warehousing, Apache Spark, and Azure Data Lake.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/synapse-analytics/overview-what-is",
    tags: ["Synapse", "Data Warehouse", "Big Data", "Analytics"]
  },
  {
    id: "az-900-145",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure HDInsight vs Azure Databricks",
    scenario: "A data science team wants a managed Apache Spark analytics platform optimized specifically for machine learning collaboration and notebook workflows.",
    question: "Which collaborative data platform developed jointly with Apache Spark creators should they deploy?",
    options: [
      { id: 'A', text: "Azure Front Door" },
      { id: 'B', text: "Azure Virtual Desktop" },
      { id: 'C', text: "Azure File Sync" },
      { id: 'D', text: "Azure Databricks" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Databricks is a fast, easy, and collaborative Apache Spark-based analytics platform optimized for Azure, providing interactive shared workspace notebooks for data engineers and machine learning scientists.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/databricks/introduction/",
    tags: ["Databricks", "Spark", "Machine Learning", "Analytics"]
  },
  {
    id: "az-900-146",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cognitive Services (Azure AI Services)",
    scenario: "A developer needs to add speech-to-text transcription, optical character recognition (OCR), and language translation to a mobile app using simple REST API calls without building custom ML models.",
    question: "Which suite of pre-built AI APIs should the developer use?",
    options: [
      { id: 'A', text: "Azure AI Services (formerly Cognitive Services)" },
      { id: 'B', text: "Azure Kubernetes Service" },
      { id: 'C', text: "Azure Machine Learning Studio" },
      { id: 'D', text: "Azure DevOps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Services (formerly Cognitive Services) provides pre-trained, turnkey machine learning models accessible through simple REST APIs for computer vision, natural language processing, speech synthesis, and translation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services",
    tags: ["AI Services", "Cognitive Services", "Pre-Trained AI", "REST API"]
  },
  {
    id: "az-900-147",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Machine Learning: End-to-End MLOps",
    scenario: "A team of data scientists needs an enterprise platform to train, version, track experiments, tune hyperparameters, and deploy custom machine learning models to production endpoints.",
    question: "Which Azure service provides end-to-end MLOps capabilities?",
    options: [
      { id: 'A', text: "Azure AI Search" },
      { id: 'B', text: "Azure Event Hubs" },
      { id: 'C', text: "Azure Machine Learning" },
      { id: 'D', text: "Azure Bot Service" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Machine Learning is an enterprise cloud service that empowers data scientists and ML engineers to train, evaluate, track, register, and deploy custom machine learning models at scale with MLOps governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-machine-learning",
    tags: ["Machine Learning", "MLOps", "AI", "Data Science"]
  },
  {
    id: "az-900-148",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure OpenAI Service",
    scenario: "An enterprise wants to incorporate generative AI capabilities (GPT-4) into an internal customer service chatbot while keeping all proprietary data within private Azure security boundaries.",
    question: "Which Azure service provides enterprise-governed access to OpenAI foundation models?",
    options: [
      { id: 'A', text: "Azure Logic Apps" },
      { id: 'B', text: "Azure Cognitive Search" },
      { id: 'C', text: "Azure OpenAI Service" },
      { id: 'D', text: "Azure Stream Analytics" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure OpenAI Service provides access to OpenAI's powerful language models (including GPT-4 and DALL-E) combined with Azure's enterprise-grade security, private virtual networking, compliance, and responsible AI guardrails.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/ai-services/openai/overview",
    tags: ["OpenAI", "Generative AI", "GPT-4", "AI Services"]
  },
  {
    id: "az-900-149",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Key Vault: Secrets, Keys, and Certificates",
    scenario: "A security policy requires that database passwords, encryption keys, and TLS certificates must never be hardcoded into application source code or config files.",
    question: "Which Azure service securely stores and manages access to cryptographic keys, application secrets, and TLS certificates?",
    options: [
      { id: 'A', text: "Azure Storage Account" },
      { id: 'B', text: "Azure Active Directory Domain Services" },
      { id: 'C', text: "Azure Key Vault" },
      { id: 'D', text: "Azure Policy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Key Vault is a cloud service for securely storing and managing application secrets (passwords, connection strings), cryptographic encryption keys, and TLS/SSL certificates with hardware security module (HSM) backing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/overview",
    tags: ["Key Vault", "Secrets", "Encryption", "Security"]
  },
  {
    id: "az-900-150",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Dedicated Host: Physical Hardware Isolation",
    scenario: "A banking client requires that its virtual machines run on a dedicated physical hardware server isolated from all other Azure customer tenants to satisfy strict regulatory compliance.",
    question: "Which Azure compute option provides single-tenant physical server allocation?",
    options: [
      { id: 'A', text: "Azure Dedicated Host" },
      { id: 'B', text: "Azure Container Instances" },
      { id: 'C', text: "Azure App Service Shared Tier" },
      { id: 'D', text: "Standard Multi-Tenant Virtual Machines" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Dedicated Host provides physical hardware servers dedicated solely to your organization's subscription. It provides hardware-level tenant isolation and visibility into server sockets and physical cores for licensing compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts",
    tags: ["Dedicated Host", "Compliance", "Hardware Isolation", "Compute"]
  }
];

export default AZURE_AZ900_QUESTIONS_6;
