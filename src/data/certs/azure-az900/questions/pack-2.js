export const AZURE_AZ900_QUESTIONS_2 = [
  {
    id: "az-900-26",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: SaaS Productivity Applications",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for saas productivity applications scenarios.",
    question: "Which statement accurately reflects the principles of saas productivity applications in modern cloud environments?",
    options: [
      { id: 'A', text: "Custom Bare Metal" },
      { id: 'B', text: "Platform as a Service (PaaS)" },
      { id: 'C', text: "Software as a Service (SaaS)" },
      { id: 'D', text: "Infrastructure as a Service (IaaS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Office productivity applications delivered over the internet on a recurring per-user monthly subscription model represent Software as a Service. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "SaaS"]
  },
  {
    id: "az-900-27",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Predictable Budgeting with Cloud",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for predictable budgeting with cloud scenarios.",
    question: "Which statement accurately reflects the principles of predictable budgeting with cloud in modern cloud environments?",
    options: [
      { id: 'A', text: "Purchasing unmetered bandwidth contracts" },
      { id: 'B', text: "Restricting application access strictly to internal subnets" },
      { id: 'C', text: "Converting all storage accounts to Archive tiers permanently" },
      { id: 'D', text: "Configuring budgets and automated cost alerts in Microsoft Cost Management" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud governance tools allow finance teams to set spending thresholds and receive automated notifications before budgets are exceeded. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Predictable"]
  },
  {
    id: "az-900-28",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Disaster Recovery RTO and RPO",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud disaster recovery rto and rpo scenarios.",
    question: "Which statement accurately reflects the principles of cloud disaster recovery rto and rpo in modern cloud environments?",
    options: [
      { id: 'A', text: "Mean Time Between Upgrades and SLA" },
      { id: 'B', text: "Recovery Time Objective (RTO) and Recovery Point Objective (RPO)" },
      { id: 'C', text: "Total Cost of Ownership and ROI" },
      { id: 'D', text: "Horizontal and Vertical Elasticity" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Disaster recovery planning focuses on Recovery Time Objective (RTO), which defines how quickly systems must recover, and Recovery Point Objective (RPO), which defines acceptable data loss. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-29",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Shared Responsibility in SaaS - Identity",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for shared responsibility in saas - identity scenarios.",
    question: "Which statement accurately reflects the principles of shared responsibility in saas - identity in modern cloud environments?",
    options: [
      { id: 'A', text: "The customer manages physical server virtualization" },
      { id: 'B', text: "The customer manages user accounts, credentials, and access permissions" },
      { id: 'C', text: "Microsoft creates and manages all employee user passwords" },
      { id: 'D', text: "Identity management is handled by third-party datacenter contractors" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Even when consuming a SaaS application like Microsoft 365, the customer remains responsible for managing user identities, access permissions, and mobile device compliance. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Shared"]
  },
  {
    id: "az-900-30",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Agility for Prototyping",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud agility for prototyping scenarios.",
    question: "Which statement accurately reflects the principles of cloud agility for prototyping in modern cloud environments?",
    options: [
      { id: 'A', text: "Data residency" },
      { id: 'B', text: "Agility" },
      { id: 'C', text: "High availability" },
      { id: 'D', text: "Fault tolerance" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Startups leverage cloud agility to test experimental features with minimal financial commitment by rapidly spinning up and tearing down resources. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-31",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Hybrid Cloud Data Latency",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for hybrid cloud data latency scenarios.",
    question: "Which statement accurately reflects the principles of hybrid cloud data latency in modern cloud environments?",
    options: [
      { id: 'A', text: "Hybrid cloud with dedicated private connectivity" },
      { id: 'B', text: "Isolated private cloud with no internet access" },
      { id: 'C', text: "Software as a Service with public endpoints" },
      { id: 'D', text: "Public cloud over commodity internet only" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organizations use hybrid cloud connectivity (like ExpressRoute) to maintain high-throughput, low-latency connections between local on-premises hardware and Azure services. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Hybrid"]
  },
  {
    id: "az-900-32",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Serverless Event Triggering",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for serverless event triggering scenarios.",
    question: "Which statement accurately reflects the principles of serverless event triggering in modern cloud environments?",
    options: [
      { id: 'A', text: "Constant continuous background polling" },
      { id: 'B', text: "Event-driven execution" },
      { id: 'C', text: "Fixed scheduled server reboots" },
      { id: 'D', text: "Manual administrator invocations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Serverless platforms trigger compute functions based on events such as HTTP requests, database record changes, queue messages, or timer schedules. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Serverless"]
  },
  {
    id: "az-900-33",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: CapEx vs OpEx Tax Implications",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for capex vs opex tax implications scenarios.",
    question: "Which statement accurately reflects the principles of capex vs opex tax implications in modern cloud environments?",
    options: [
      { id: 'A', text: "OpEx expenses can be fully deducted in the current accounting period as operational costs" },
      { id: 'B', text: "OpEx purchases are permanently capitalized as physical corporate assets" },
      { id: 'C', text: "CapEx purchases provide immediate 100% tax write-offs on day one" },
      { id: 'D', text: "Cloud computing converts all OpEx into non-depreciating CapEx" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CapEx purchases must be capitalized and depreciated over multiple years on corporate balance sheets, whereas OpEx expenses can be deducted in the current tax year. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "CapEx"]
  },
  {
    id: "az-900-34",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Scalability - Sudden Surges",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud scalability - sudden surges scenarios.",
    question: "Which statement accurately reflects the principles of cloud scalability - sudden surges in modern cloud environments?",
    options: [
      { id: 'A', text: "Hardware replacement" },
      { id: 'B', text: "Datacenter consolidation" },
      { id: 'C', text: "Vertical scaling (scaling up)" },
      { id: 'D', text: "Horizontal scaling (scaling out)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Horizontal scalability allows an online streaming platform to absorb sudden viewership spikes during live events by distributing traffic across multiple instances. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-35",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Shared Responsibility - Network Security Groups",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for shared responsibility - network security groups scenarios.",
    question: "Which statement accurately reflects the principles of shared responsibility - network security groups in modern cloud environments?",
    options: [
      { id: 'A', text: "The customer is responsible for configuring virtual network firewall and NSG rules" },
      { id: 'B', text: "Microsoft configures custom inbound firewall rules for all customer VMs" },
      { id: 'C', text: "Network security is obsolete in modern IaaS architectures" },
      { id: 'D', text: "The operating system vendor manages cloud network routing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In an IaaS virtual machine deployment, configuring Network Security Group (NSG) firewall rules to filter inbound traffic is the customer's responsibility. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Shared"]
  },
  {
    id: "az-900-36",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Public Cloud Tenancy",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for public cloud tenancy scenarios.",
    question: "Which statement accurately reflects the principles of public cloud tenancy in modern cloud environments?",
    options: [
      { id: 'A', text: "Unrestricted shared access to underlying hypervisor kernels" },
      { id: 'B', text: "Physically separated private datacenters for each customer" },
      { id: 'C', text: "Multi-tenant physical hardware with logical isolation" },
      { id: 'D', text: "Single-tenant dedicated physical server racks for every user" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a public cloud, multiple customers share the same physical server hardware, separated by the hypervisor and logical isolation mechanisms. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Public"]
  },
  {
    id: "az-900-37",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Private Cloud On-Premises Maintenance",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for private cloud on-premises maintenance scenarios.",
    question: "Which statement accurately reflects the principles of private cloud on-premises maintenance in modern cloud environments?",
    options: [
      { id: 'A', text: "The company owns and maintains all physical hardware, facilities, and virtualization software" },
      { id: 'B', text: "Hardware failures are automatically repaired by public cloud vendors" },
      { id: 'C', text: "The public cloud provider manages the physical cooling and power" },
      { id: 'D', text: "The company incurs zero capital expenditure" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A company operating a private cloud in its own datacenter is fully responsible for purchasing hardware, maintaining power and cooling, and updating virtualization hypervisors. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Private"]
  },
  {
    id: "az-900-38",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Hybrid Cloud Bursting",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for hybrid cloud bursting scenarios.",
    question: "Which statement accurately reflects the principles of hybrid cloud bursting in modern cloud environments?",
    options: [
      { id: 'A', text: "Single-point failover" },
      { id: 'B', text: "Cloud colocation" },
      { id: 'C', text: "Sovereign isolation" },
      { id: 'D', text: "Cloud bursting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud bursting is a hybrid cloud pattern where an organization runs baseline workloads on-premises and automatically bursts into Azure during peak traffic periods. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Hybrid"]
  },
  {
    id: "az-900-39",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: SaaS Zero Infrastructure Overhead",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for saas zero infrastructure overhead scenarios.",
    question: "Which statement accurately reflects the principles of saas zero infrastructure overhead in modern cloud environments?",
    options: [
      { id: 'A', text: "Users must regularly install operating system patches on the hosting servers" },
      { id: 'B', text: "Users consume the application directly without managing any infrastructure or software updates" },
      { id: 'C', text: "Customers configure virtual machine scale sets to run the SaaS app" },
      { id: 'D', text: "Organizations must purchase physical server racks for each software seat" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The primary appeal of SaaS for business users is the complete elimination of infrastructure, operating system, and application maintenance overhead. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "SaaS"]
  },
  {
    id: "az-900-40",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Economies of Scale - Energy Efficiency",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud economies of scale - energy efficiency scenarios.",
    question: "Which statement accurately reflects the principles of cloud economies of scale - energy efficiency in modern cloud environments?",
    options: [
      { id: 'A', text: "Higher electricity tariffs charged to enterprise datacenters" },
      { id: 'B', text: "Prohibition of server virtualization in private facilities" },
      { id: 'C', text: "Mandatory use of diesel generators for 100% of cloud compute" },
      { id: 'D', text: "Economies of scale and advanced engineering efficiency in hyperscale datacenters" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hyperscale cloud datacenters achieve superior energy efficiency and lower cooling costs compared to traditional enterprise datacenters due to massive scale and advanced engineering. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-41",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Serverless Micro-Billing",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for serverless micro-billing scenarios.",
    question: "Which statement accurately reflects the principles of serverless micro-billing in modern cloud environments?",
    options: [
      { id: 'A', text: "Customers pay for allocated memory even when no functions execute" },
      { id: 'B', text: "A flat hourly VM fee is charged regardless of idle time" },
      { id: 'C', text: "Compute fees double during periods of zero traffic" },
      { id: 'D', text: "Zero compute charges are incurred when the application is idle" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With serverless compute, an application that receives no user requests for three days incurs zero compute cost during that time. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Serverless"]
  },
  {
    id: "az-900-42",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: IaaS vs PaaS Database Management",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for iaas vs paas database management scenarios.",
    question: "Which statement accurately reflects the principles of iaas vs paas database management in modern cloud environments?",
    options: [
      { id: 'A', text: "Azure SQL Database is PaaS with automated management, whereas SQL Server on an Azure VM is IaaS requiring customer OS and database patching" },
      { id: 'B', text: "SQL on an Azure VM is SaaS with zero customer maintenance" },
      { id: 'C', text: "Both solutions require manual physical hardware maintenance" },
      { id: 'D', text: "Azure SQL Database requires the customer to manage hypervisor updates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running SQL Server inside an Azure Virtual Machine is IaaS (requiring OS and SQL patching), whereas Azure SQL Database is PaaS (where patching and backups are managed by Azure). Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "IaaS"]
  },
  {
    id: "az-900-43",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Reliability - SLAs",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud reliability - slas scenarios.",
    question: "Which statement accurately reflects the principles of cloud reliability - slas in modern cloud environments?",
    options: [
      { id: 'A', text: "Service Level Agreements (SLAs)" },
      { id: 'B', text: "Statutory audit reports" },
      { id: 'C', text: "Terms of Service waivers" },
      { id: 'D', text: "Non-disclosure commitments" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft publishes Service Level Agreements (SLAs) that define formal uptime and performance commitments for specific Azure services. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-44",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Geo-Distribution and Data Sovereignty",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for geo-distribution and data sovereignty scenarios.",
    question: "Which statement accurately reflects the principles of geo-distribution and data sovereignty in modern cloud environments?",
    options: [
      { id: 'A', text: "Maximizing public internet bandwidth utilization" },
      { id: 'B', text: "Ensuring compliance with local data residency and sovereignty regulations" },
      { id: 'C', text: "Enforcing uniform physical time zones worldwide" },
      { id: 'D', text: "Eliminating the need for role-based access control" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploying resources across multiple regions must balance latency reduction with data sovereignty requirements ensuring data does not leave legal national borders. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Geo-Distribution"]
  },
  {
    id: "az-900-45",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Elasticity vs Scalability Distinctions",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for elasticity vs scalability distinctions scenarios.",
    question: "Which statement accurately reflects the principles of elasticity vs scalability distinctions in modern cloud environments?",
    options: [
      { id: 'A', text: "There is no functional or technical difference between the two terms" },
      { id: 'B', text: "Scalability is automated, whereas elasticity is always manual" },
      { id: 'C', text: "Elasticity specifically emphasizes automated, dynamic scaling up and down in response to demand" },
      { id: 'D', text: "Elasticity applies only to storage, whereas scalability applies only to networking" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scalability represents the capacity of a system to grow, whereas elasticity represents the real-time automated scaling based on fluctuating demand. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Elasticity"]
  },
  {
    id: "az-900-46",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Principles Scenario #1",
    scenario: "An organization is transitioning traditional datacenter operations to modern cloud patterns, evaluating shared responsibility, consumption economics, and reliability benchmarks.",
    question: "Which architectural principle or cloud benefit best addresses scenario requirement #1?",
    options: [
      { id: 'A', text: "Deploying all production workloads to a single non-redundant on-premises server" },
      { id: 'B', text: "Leveraging cloud elasticity and consumption-based pricing to align operational costs directly with customer demand" },
      { id: 'C', text: "Purchasing physical hardware racks upfront to lock in depreciating capital expenditure" },
      { id: 'D', text: "Relying on manual overnight batch scaling scripts without automated monitoring" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In modern cloud architectures, utilizing elasticity and consumption-based billing models ensures that computing resources expand and contract automatically with workload demands. This eliminates capital waste on idle infrastructure while maintaining high availability during peak traffic periods.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Best Practices"]
  },
  {
    id: "az-900-47",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Principles Scenario #2",
    scenario: "An organization is transitioning traditional datacenter operations to modern cloud patterns, evaluating shared responsibility, consumption economics, and reliability benchmarks.",
    question: "Which architectural principle or cloud benefit best addresses scenario requirement #2?",
    options: [
      { id: 'A', text: "Relying on manual overnight batch scaling scripts without automated monitoring" },
      { id: 'B', text: "Leveraging cloud elasticity and consumption-based pricing to align operational costs directly with customer demand" },
      { id: 'C', text: "Deploying all production workloads to a single non-redundant on-premises server" },
      { id: 'D', text: "Purchasing physical hardware racks upfront to lock in depreciating capital expenditure" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In modern cloud architectures, utilizing elasticity and consumption-based billing models ensures that computing resources expand and contract automatically with workload demands. This eliminates capital waste on idle infrastructure while maintaining high availability during peak traffic periods.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Best Practices"]
  },
  {
    id: "az-900-48",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Principles Scenario #3",
    scenario: "An organization is transitioning traditional datacenter operations to modern cloud patterns, evaluating shared responsibility, consumption economics, and reliability benchmarks.",
    question: "Which architectural principle or cloud benefit best addresses scenario requirement #3?",
    options: [
      { id: 'A', text: "Purchasing physical hardware racks upfront to lock in depreciating capital expenditure" },
      { id: 'B', text: "Relying on manual overnight batch scaling scripts without automated monitoring" },
      { id: 'C', text: "Leveraging cloud elasticity and consumption-based pricing to align operational costs directly with customer demand" },
      { id: 'D', text: "Deploying all production workloads to a single non-redundant on-premises server" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In modern cloud architectures, utilizing elasticity and consumption-based billing models ensures that computing resources expand and contract automatically with workload demands. This eliminates capital waste on idle infrastructure while maintaining high availability during peak traffic periods.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Best Practices"]
  },
  {
    id: "az-900-49",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Principles Scenario #4",
    scenario: "An organization is transitioning traditional datacenter operations to modern cloud patterns, evaluating shared responsibility, consumption economics, and reliability benchmarks.",
    question: "Which architectural principle or cloud benefit best addresses scenario requirement #4?",
    options: [
      { id: 'A', text: "Relying on manual overnight batch scaling scripts without automated monitoring" },
      { id: 'B', text: "Purchasing physical hardware racks upfront to lock in depreciating capital expenditure" },
      { id: 'C', text: "Leveraging cloud elasticity and consumption-based pricing to align operational costs directly with customer demand" },
      { id: 'D', text: "Deploying all production workloads to a single non-redundant on-premises server" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In modern cloud architectures, utilizing elasticity and consumption-based billing models ensures that computing resources expand and contract automatically with workload demands. This eliminates capital waste on idle infrastructure while maintaining high availability during peak traffic periods.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Best Practices"]
  },
  {
    id: "az-900-50",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Principles Scenario #5",
    scenario: "An organization is transitioning traditional datacenter operations to modern cloud patterns, evaluating shared responsibility, consumption economics, and reliability benchmarks.",
    question: "Which architectural principle or cloud benefit best addresses scenario requirement #5?",
    options: [
      { id: 'A', text: "Relying on manual overnight batch scaling scripts without automated monitoring" },
      { id: 'B', text: "Purchasing physical hardware racks upfront to lock in depreciating capital expenditure" },
      { id: 'C', text: "Leveraging cloud elasticity and consumption-based pricing to align operational costs directly with customer demand" },
      { id: 'D', text: "Deploying all production workloads to a single non-redundant on-premises server" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In modern cloud architectures, utilizing elasticity and consumption-based billing models ensures that computing resources expand and contract automatically with workload demands. This eliminates capital waste on idle infrastructure while maintaining high availability during peak traffic periods.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Best Practices"]
  }
];

export default AZURE_AZ900_QUESTIONS_2;
