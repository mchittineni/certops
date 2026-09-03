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
      { id: 'A', text: "Infrastructure as a Service (IaaS)" },
      { id: 'B', text: "Software as a Service (SaaS)" },
      { id: 'C', text: "Custom Bare Metal" },
      { id: 'D', text: "Platform as a Service (PaaS)" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Configuring budgets and automated cost alerts in Microsoft Cost Management" },
      { id: 'B', text: "Purchasing unmetered bandwidth contracts" },
      { id: 'C', text: "Restricting application access strictly to internal subnets" },
      { id: 'D', text: "Converting all storage accounts to Archive tiers permanently" }
    ],
    correctAnswers: ['A'],
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
      { id: 'B', text: "Microsoft creates and manages all employee user passwords" },
      { id: 'C', text: "Identity management is handled by third-party datacenter contractors" },
      { id: 'D', text: "The customer manages user accounts, credentials, and access permissions" }
    ],
    correctAnswers: ['D'],
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
      { id: 'B', text: "Fault tolerance" },
      { id: 'C', text: "High availability" },
      { id: 'D', text: "Agility" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Isolated private cloud with no internet access" },
      { id: 'B', text: "Public cloud over commodity internet only" },
      { id: 'C', text: "Hybrid cloud with dedicated private connectivity" },
      { id: 'D', text: "Software as a Service with public endpoints" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Manual administrator invocations" },
      { id: 'B', text: "Event-driven execution" },
      { id: 'C', text: "Constant continuous background polling" },
      { id: 'D', text: "Fixed scheduled server reboots" }
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
      { id: 'A', text: "CapEx purchases provide immediate 100% tax write-offs on day one" },
      { id: 'B', text: "OpEx purchases are permanently capitalized as physical corporate assets" },
      { id: 'C', text: "OpEx expenses can be fully deducted in the current accounting period as operational costs" },
      { id: 'D', text: "Cloud computing converts all OpEx into non-depreciating CapEx" }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "Horizontal scaling (scaling out)" },
      { id: 'C', text: "Datacenter consolidation" },
      { id: 'D', text: "Vertical scaling (scaling up)" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Network security is obsolete in modern IaaS architectures" },
      { id: 'B', text: "The customer is responsible for configuring virtual network firewall and NSG rules" },
      { id: 'C', text: "Microsoft configures custom inbound firewall rules for all customer VMs" },
      { id: 'D', text: "The operating system vendor manages cloud network routing" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Physically separated private datacenters for each customer" },
      { id: 'B', text: "Single-tenant dedicated physical server racks for every user" },
      { id: 'C', text: "Multi-tenant physical hardware with logical isolation" },
      { id: 'D', text: "Unrestricted shared access to underlying hypervisor kernels" }
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
      { id: 'B', text: "The public cloud provider manages the physical cooling and power" },
      { id: 'C', text: "The company incurs zero capital expenditure" },
      { id: 'D', text: "Hardware failures are automatically repaired by public cloud vendors" }
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
      { id: 'A', text: "Cloud bursting" },
      { id: 'B', text: "Single-point failover" },
      { id: 'C', text: "Sovereign isolation" },
      { id: 'D', text: "Cloud colocation" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Customers configure virtual machine scale sets to run the SaaS app" },
      { id: 'B', text: "Organizations must purchase physical server racks for each software seat" },
      { id: 'C', text: "Users consume the application directly without managing any infrastructure or software updates" },
      { id: 'D', text: "Users must regularly install operating system patches on the hosting servers" }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "Mandatory use of diesel generators for 100% of cloud compute" },
      { id: 'C', text: "Economies of scale and advanced engineering efficiency in hyperscale datacenters" },
      { id: 'D', text: "Prohibition of server virtualization in private facilities" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Compute fees double during periods of zero traffic" },
      { id: 'B', text: "A flat hourly VM fee is charged regardless of idle time" },
      { id: 'C', text: "Zero compute charges are incurred when the application is idle" },
      { id: 'D', text: "Customers pay for allocated memory even when no functions execute" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "SQL on an Azure VM is SaaS with zero customer maintenance" },
      { id: 'B', text: "Azure SQL Database is PaaS with automated management, whereas SQL Server on an Azure VM is IaaS requiring customer OS and database patching" },
      { id: 'C', text: "Both solutions require manual physical hardware maintenance" },
      { id: 'D', text: "Azure SQL Database requires the customer to manage hypervisor updates" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Terms of Service waivers" },
      { id: 'B', text: "Service Level Agreements (SLAs)" },
      { id: 'C', text: "Statutory audit reports" },
      { id: 'D', text: "Non-disclosure commitments" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Ensuring compliance with local data residency and sovereignty regulations" },
      { id: 'B', text: "Eliminating the need for role-based access control" },
      { id: 'C', text: "Maximizing public internet bandwidth utilization" },
      { id: 'D', text: "Enforcing uniform physical time zones worldwide" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Elasticity specifically emphasizes automated, dynamic scaling up and down in response to demand" },
      { id: 'B', text: "Elasticity applies only to storage, whereas scalability applies only to networking" },
      { id: 'C', text: "There is no functional or technical difference between the two terms" },
      { id: 'D', text: "Scalability is automated, whereas elasticity is always manual" }
    ],
    correctAnswers: ['A'],
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
    title: "Capital Expenditure (CapEx) vs Operational Expenditure (OpEx)",
    scenario: "A company plans to eliminate physical server room lease renewals and migrate computing workloads entirely to Microsoft Azure.",
    question: "How does migrating to Azure affect the company's financial expenditure model?",
    options: [
      { id: 'A', text: "It requires paying 5 years of hardware costs upfront" },
      { id: 'B', text: "It eliminates all operating expenses completely" },
      { id: 'C', text: "It increases CapEx by purchasing servers in Microsoft datacenters" },
      { id: 'D', text: "It shifts costs from CapEx (upfront hardware purchases) to OpEx (ongoing consumption-based operating expenses)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud computing operates on an OpEx (Operational Expenditure) model where organizations pay only for the cloud services they consume on an ongoing basis, avoiding large upfront CapEx (Capital Expenditure) investments in physical datacenter infrastructure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/fiscal-outcomes",
    tags: ["Cloud Concepts", "CapEx", "OpEx", "Economics"]
  },
  {
    id: "az-900-47",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Shared Responsibility Model for IaaS Virtual Machines",
    scenario: "An enterprise deploys several Windows Server virtual machines on Azure IaaS to host an accounting application.",
    question: "Under the Azure Shared Responsibility Model, who is responsible for applying operating system security patches to these virtual machines?",
    options: [
      { id: 'A', text: "The customer" },
      { id: 'B', text: "Third-party internet service providers" },
      { id: 'C', text: "Microsoft exclusively" },
      { id: 'D', text: "The hardware server manufacturer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Infrastructure as a Service (IaaS), Microsoft manages physical host servers, virtualization hypervisors, and physical datacenter security. The customer retains full responsibility for configuring, updating, and patching the guest operating system, applications, and middleware.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    tags: ["Shared Responsibility", "IaaS", "Virtual Machines", "Security"]
  },
  {
    id: "az-900-48",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Shared Responsibility in SaaS: Microsoft 365",
    scenario: "A company uses Microsoft 365 (SaaS) for corporate email and document storage. A compliance auditor reviews data protection responsibilities.",
    question: "Which component remains the sole responsibility of the customer in a Software as a Service (SaaS) deployment?",
    options: [
      { id: 'A', text: "Information and data classification, user accounts, and access management" },
      { id: 'B', text: "Operating system patching on mail servers" },
      { id: 'C', text: "Network switch firmware updates" },
      { id: 'D', text: "Physical datacenter security and cooling" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In all cloud service models (IaaS, PaaS, and SaaS), the customer always retains ultimate responsibility for protecting their data, classifying information, and managing user access credentials and client endpoints.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    tags: ["Shared Responsibility", "SaaS", "Data Protection", "Security"]
  },
  {
    id: "az-900-49",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "High Availability vs Disaster Recovery",
    scenario: "An architect designs an e-commerce platform that must guarantee continuous operation during local hardware component failures within a datacenter.",
    question: "Which cloud architectural principle directly addresses resilience against localized component failures without service interruption?",
    options: [
      { id: 'A', text: "Disaster Recovery" },
      { id: 'B', text: "High Availability" },
      { id: 'C', text: "Data Sovereignty" },
      { id: 'D', text: "Latency Routing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "High Availability (HA) ensures a system remains operational and accessible with minimal downtime during localized failures through redundant components. Disaster Recovery (DR) focuses on restoring service and data following catastrophic regional disruptions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/overview",
    tags: ["High Availability", "Reliability", "Resilience", "Architecture"]
  },
  {
    id: "az-900-50",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity vs Scalability in Cloud Architecture",
    scenario: "A ticketing platform experiences unpredictable traffic spikes during concert ticket sales, followed by hours of near-zero traffic.",
    question: "Which cloud benefit enables the platform to automatically provision compute instances during traffic bursts and de-provision them when demand subsides?",
    options: [
      { id: 'A', text: "Data Sovereignty" },
      { id: 'B', text: "Geo-distribution" },
      { id: 'C', text: "Elasticity" },
      { id: 'D', text: "Predictability" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Elasticity is the dynamic ability of cloud systems to automatically allocate compute resources in real time to match fluctuating demand peaks and immediately de-provision idle capacity to minimize costs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/scaling-reliability",
    tags: ["Elasticity", "Scalability", "Auto Scaling", "Cloud Concepts"]
  }
];

export default AZURE_AZ900_QUESTIONS_2;
