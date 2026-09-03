export const AZURE_AZ900_QUESTIONS_1 = [
  {
    id: "az-900-1",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Public Cloud Deployment Model",
    scenario: "A technology startup wants to build and launch a software product quickly without investing capital in on-premises physical hardware or leasing datacenter space.",
    question: "Which cloud deployment model best satisfies the startup's requirements?",
    options: [
      { id: 'A', text: "On-premises datacenter" },
      { id: 'B', text: "Public cloud" },
      { id: 'C', text: "Private cloud" },
      { id: 'D', text: "Colocation facility" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The public cloud model allows organizations to rent computing resources owned and managed by third-party providers such as Microsoft Azure. Resources are accessed over the internet, eliminating upfront capital expenses and hardware maintenance. In contrast, private clouds and on-premises datacenters require dedicated physical hardware and capital investment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Public Cloud", "Cloud Models"]
  },
  {
    id: "az-900-2",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Hybrid Cloud Architecture",
    scenario: "A banking enterprise must retain its core customer transactional ledger on-premises to comply with strict national data residency regulations, but wants to host an elastic customer rewards web app in Azure.",
    question: "Which cloud computing model represents this combined deployment?",
    options: [
      { id: 'A', text: "Private cloud only" },
      { id: 'B', text: "Community cloud" },
      { id: 'C', text: "Hybrid cloud" },
      { id: 'D', text: "Public cloud only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A hybrid cloud combines on-premises infrastructure (or private cloud) with public cloud services, allowing data and apps to be shared between them. This approach allows sensitive data to stay on-premises for regulatory compliance while taking advantage of public cloud scalability for web tiers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Hybrid Cloud", "Compliance"]
  },
  {
    id: "az-900-3",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Private Cloud Deployment Model",
    scenario: "A military defense contractor requires complete physical isolation where all computing, storage, and networking hardware is dedicated exclusively to their organization.",
    question: "Which cloud deployment model meets these strict isolation requirements?",
    options: [
      { id: 'A', text: "Private cloud" },
      { id: 'B', text: "Multi-tenant cloud" },
      { id: 'C', text: "Public cloud" },
      { id: 'D', text: "Public SaaS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private cloud consists of cloud computing resources used exclusively by one business or organization. It can be physically located in the organization's on-site datacenter or hosted by a third-party service provider on dedicated, single-tenant hardware, preventing any multi-tenant sharing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Private Cloud", "Isolation"]
  },
  {
    id: "az-900-4",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Capital vs Operational Expenditure",
    scenario: "A corporate finance team decides to shift IT spending away from purchasing depreciating server hardware upfront to paying monthly operational bills based on real-time resource usage.",
    question: "Which financial transition describes this procurement change?",
    options: [
      { id: 'A', text: "Eliminating both CapEx and OpEx entirely" },
      { id: 'B', text: "Converting software subscriptions into fixed physical assets" },
      { id: 'C', text: "Transitioning from Capital Expenditure (CapEx) to Operational Expenditure (OpEx)" },
      { id: 'D', text: "Transitioning from Operational Expenditure (OpEx) to Capital Expenditure (CapEx)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Capital Expenditure (CapEx) is spending money upfront on physical infrastructure, which is deducted over time as depreciation. Operational Expenditure (OpEx) is spending money on ongoing services with no upfront infrastructure cost. The cloud operates primarily on an OpEx model with consumption-based billing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "CapEx", "OpEx"]
  },
  {
    id: "az-900-5",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Consumption-Based Pricing",
    scenario: "A digital marketing firm runs promotional websites that experience massive traffic surges for only 48 hours each month, with minimal visits during other days.",
    question: "What is the primary financial benefit of the consumption-based model for this workload?",
    options: [
      { id: 'A', text: "The firm pays a flat annual fee regardless of workload utilization" },
      { id: 'B', text: "The firm pays only for the compute resources consumed during the 48-hour campaign, avoiding idle hardware costs" },
      { id: 'C', text: "Virtual machines run at zero cost as long as they are deployed in secondary regions" },
      { id: 'D', text: "Hardware maintenance contracts are billed annually at a guaranteed flat rate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The consumption-based pricing model ensures customers pay only for the compute, memory, and bandwidth their applications actually consume. When campaign traffic subsides, resources can be deallocated or scaled down, avoiding costs on idle capacity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Consumption Model", "Cost"]
  },
  {
    id: "az-900-6",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "High Availability in the Cloud",
    scenario: "An online retailer requires that its storefront remains accessible to customers with minimal downtime even if a physical server or power supply in a datacenter fails.",
    question: "Which cloud computing benefit directly addresses this requirement?",
    options: [
      { id: 'A', text: "High availability" },
      { id: 'B', text: "Application agility" },
      { id: 'C', text: "Vertical elasticity" },
      { id: 'D', text: "Operational agility" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "High availability (HA) focuses on ensuring that an application or service remains continuously available and operational with minimal downtime, typically achieved through redundancy, fault tolerance, and automated failover across resilient infrastructure components.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "High Availability", "Resilience"]
  },
  {
    id: "az-900-7",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Vertical Scaling",
    scenario: "A database administrator reconfigures an Azure Virtual Machine to upgrade from 8 vCPUs and 32 GB RAM to 32 vCPUs and 128 GB RAM to handle intense database queries.",
    question: "Which type of scaling was performed?",
    options: [
      { id: 'A', text: "Vertical scaling (scale up)" },
      { id: 'B', text: "Geographic distribution" },
      { id: 'C', text: "Horizontal scaling (scale out)" },
      { id: 'D', text: "Fault domain partitioning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Vertical scaling (scaling up) involves increasing the capacity of an existing resource by allocating more compute power, RAM, or faster disk to that specific instance. Horizontal scaling (scaling out) involves adding additional identical instances to distribute traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Scalability", "Scale Up"]
  },
  {
    id: "az-900-8",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Horizontal Scaling with Scale Sets",
    scenario: "An e-commerce web tier automatically adds five additional virtual machine instances when incoming HTTP request volume increases during the holiday shopping season.",
    question: "Which type of scaling is being implemented?",
    options: [
      { id: 'A', text: "Horizontal scaling (scale out)" },
      { id: 'B', text: "Fixed allocation scaling" },
      { id: 'C', text: "Geographic localization" },
      { id: 'D', text: "Vertical scaling (scale up)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Horizontal scaling (scaling out) adds more instances of a resource (such as additional VMs in a Virtual Machine Scale Set) to distribute incoming traffic across multiple nodes, enhancing overall throughput and system resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Scalability", "Scale Out"]
  },
  {
    id: "az-900-9",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Elasticity",
    scenario: "A video streaming service automatically scales out computing instances on Friday evenings when viewership surges and automatically scales in instances on Monday mornings.",
    question: "Which core cloud computing capability is being demonstrated?",
    options: [
      { id: 'A', text: "Elasticity" },
      { id: 'B', text: "Capital optimization" },
      { id: 'C', text: "Sovereign governance" },
      { id: 'D', text: "Data residency" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Elasticity is the automated ability of cloud systems to provision extra resources dynamically during traffic spikes and deprovision those resources when demand subsides, ensuring performance during peaks and eliminating waste during troughs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Elasticity", "Autoscaling"]
  },
  {
    id: "az-900-10",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility in Cloud Provisioning",
    scenario: "An engineering team can provision an entire multi-tier test environment in Azure within fifteen minutes using declarative scripts, compared to weeks of procurement on-premises.",
    question: "Which cloud computing benefit is highlighted by this capability?",
    options: [
      { id: 'A', text: "High availability" },
      { id: 'B', text: "Fault tolerance" },
      { id: 'C', text: "Agility" },
      { id: 'D', text: "Predictable hardware depreciation" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Agility in cloud computing refers to the speed and flexibility with which organizations can deploy, configure, update, and iterate on IT resources. Because infrastructure is software-defined, teams can experiment and deliver value rapidly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Agility", "DevOps"]
  },
  {
    id: "az-900-11",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Geo-Distribution for Performance",
    scenario: "A media company wants users in Sydney, London, and New York to experience low latency and high download speeds when viewing media content.",
    question: "Which architectural strategy in Azure directly satisfies this goal?",
    options: [
      { id: 'A', text: "Restricting player access strictly to on-premises private circuits" },
      { id: 'B', text: "Hosting all resources in a single North American datacenter to centralize maintenance" },
      { id: 'C', text: "Relying on tape backups stored in multiple locations" },
      { id: 'D', text: "Geo-distribution by deploying backend instances across Azure regions in Australia, Europe, and North America" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Geo-distribution involves deploying applications across multiple geographically diverse Azure regions located near target user populations. Placing compute and data close to users reduces round-trip network transit distance and latency.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Geo-distribution", "Latency"]
  },
  {
    id: "az-900-12",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery Strategy",
    scenario: "An organization designs its cloud architecture so that if a catastrophic failure takes an entire primary region offline, operations fail over to a paired secondary region.",
    question: "Which cloud principle is the organization preparing for?",
    options: [
      { id: 'A', text: "Disaster recovery (DR)" },
      { id: 'B', text: "Single-zone elasticity" },
      { id: 'C', text: "Local fault domain redundancy" },
      { id: 'D', text: "Vertical scaling" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disaster recovery (DR) consists of the policies, tools, and procedures designed to enable the recovery or continuation of vital technology infrastructure following natural or human-induced catastrophic outages, using cross-region replication and failover.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Disaster Recovery", "Business Continuity"]
  },
  {
    id: "az-900-13",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "IaaS Shared Responsibility - Guest OS",
    scenario: "A company deploys an Azure Virtual Machine running Windows Server 2022 to host a custom line-of-business application.",
    question: "Under the Shared Responsibility Model, which task remains the sole responsibility of the customer?",
    options: [
      { id: 'A', text: "Updating the firmware of the underlying physical host hypervisor" },
      { id: 'B', text: "Maintaining physical access controls to the server room" },
      { id: 'C', text: "Applying operating system security updates and antivirus patches" },
      { id: 'D', text: "Replacing failed power supply units in the server rack" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Infrastructure as a Service (IaaS), Microsoft manages physical hardware, power, cooling, and the hypervisor. The customer is responsible for managing, configuring, securing, and patching the guest operating system, application software, and data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    tags: ["Shared Responsibility", "IaaS", "Security"]
  },
  {
    id: "az-900-14",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "PaaS Shared Responsibility - Platform Care",
    scenario: "A development team hosts a web application on Azure App Service.",
    question: "Which responsibility is managed automatically by Microsoft in this Platform as a Service (PaaS) model?",
    options: [
      { id: 'A', text: "Creating database table indexes and queries" },
      { id: 'B', text: "Operating system patching and server hardware maintenance" },
      { id: 'C', text: "Managing customer user accounts and credentials" },
      { id: 'D', text: "Writing application business logic" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Platform as a Service (PaaS), Microsoft manages the underlying physical infrastructure, operating system installation and patching, network infrastructure, and runtime environment. The customer focuses entirely on application code and data.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    tags: ["Shared Responsibility", "PaaS", "App Service"]
  },
  {
    id: "az-900-15",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "SaaS Model Definition",
    scenario: "An organization subscribes to Microsoft Dynamics 365 and Microsoft 365 for customer relationship management and team communication.",
    question: "Which cloud service model do these applications represent?",
    options: [
      { id: 'A', text: "Hardware as a Service (HaaS)" },
      { id: 'B', text: "Infrastructure as a Service (IaaS)" },
      { id: 'C', text: "Software as a Service (SaaS)" },
      { id: 'D', text: "Platform as a Service (PaaS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Software as a Service (SaaS) delivers complete, centrally hosted applications over the internet on a subscription basis. Microsoft manages all underlying infrastructure, operating systems, codebases, and application updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "SaaS", "Microsoft 365"]
  },
  {
    id: "az-900-16",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Serverless Architecture Benefits",
    scenario: "A developer deploys small code routines to Azure Functions that trigger only when files are uploaded to Azure Blob Storage.",
    question: "Which computing model does this represent?",
    options: [
      { id: 'A', text: "Dedicated server hosting" },
      { id: 'B', text: "Serverless computing" },
      { id: 'C', text: "Bare-metal cloud infrastructure" },
      { id: 'D', text: "On-premises virtualization" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Serverless computing (exemplified by Azure Functions) enables developers to execute event-driven code without managing servers. Cloud providers dynamically allocate machine resources upon trigger events, execute the code, and immediately release resources with sub-second billing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Cloud Concepts", "Serverless", "Azure Functions"]
  },
  {
    id: "az-900-17",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Data and Identity Governance",
    scenario: "A security officer evaluates responsibility for data stored in an Azure Blob Storage container and identities stored in Microsoft Entra ID.",
    question: "Under the Shared Responsibility Model, who is responsible for protecting and managing customer data and identities?",
    options: [
      { id: 'A', text: "Responsibility for customer data transfers to Microsoft in PaaS and SaaS" },
      { id: 'B', text: "The customer is always responsible for protecting data and managing user identities across all cloud models" },
      { id: 'C', text: "Microsoft assumes full responsibility for data classification in all cloud models" },
      { id: 'D', text: "The cloud provider manages identity access permissions automatically" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Regardless of whether an organization uses IaaS, PaaS, or SaaS, customer data governance, data classification, and identity and access management are always the responsibility of the customer.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility",
    tags: ["Shared Responsibility", "Data Security", "Identity"]
  },
  {
    id: "az-900-18",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cost Estimation Tools",
    scenario: "A solutions architect needs to estimate the monthly cost of running 10 Azure Virtual Machines, an Azure SQL Database, and 5 TB of Azure Files before deployment.",
    question: "Which official tool should the architect use?",
    options: [
      { id: 'A', text: "Microsoft Purview" },
      { id: 'B', text: "Azure Virtual Network peering" },
      { id: 'C', text: "The Azure Pricing Calculator" },
      { id: 'D', text: "Azure Resource Locks" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure Pricing Calculator is a web-based cost estimation tool that allows architects and finance teams to configure anticipated services (VM sizes, storage tiers, bandwidth) and calculate monthly cost estimates prior to deployment.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-overview",
    tags: ["Cloud Concepts", "Pricing Calculator", "Cost Predictability"]
  },
  {
    id: "az-900-19",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Multi-Cloud Strategy",
    scenario: "An enterprise purposely deploys its primary machine learning models in Google Cloud, enterprise relational databases in Microsoft Azure, and legacy web services in AWS.",
    question: "What is a primary architectural driver for adopting a multi-cloud strategy?",
    options: [
      { id: 'A', text: "Complying with mandatory international laws requiring three distinct clouds" },
      { id: 'B', text: "Ensuring identical physical operating systems across all datacenters" },
      { id: 'C', text: "Eliminating all data transfer fees between providers" },
      { id: 'D', text: "Preventing single-vendor lock-in and taking advantage of best-of-breed specialized services from different providers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A multi-cloud strategy enables organizations to select optimal services from different cloud providers, avoid reliance on a single vendor, and increase business resilience by diversifying technological dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Multi-Cloud", "Architecture"]
  },
  {
    id: "az-900-20",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Fault Tolerance Definition",
    scenario: "A transaction processing engine must continue operating with zero degradation in service or loss of transactions even if a physical server memory component fails.",
    question: "Which architectural attribute describes this continuous resilience?",
    options: [
      { id: 'A', text: "Operational agility" },
      { id: 'B', text: "OpEx prioritization" },
      { id: 'C', text: "Fault tolerance" },
      { id: 'D', text: "Horizontal elasticity" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Fault tolerance refers to the property of a system to continue operating without any interruption or degradation in service when one or more internal components experience a failure, achieved through built-in redundant hardware and automated failover.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Fault Tolerance", "Reliability"]
  },
  {
    id: "az-900-21",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Cloud Scalability Limits",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for cloud scalability limits scenarios.",
    question: "Which statement accurately reflects the principles of cloud scalability limits in modern cloud environments?",
    options: [
      { id: 'A', text: "CapEx optimization" },
      { id: 'B', text: "Disaster recovery" },
      { id: 'C', text: "Scalability" },
      { id: 'D', text: "Elasticity" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scalability allows applications to handle increased workloads by adding compute resources either vertically or horizontally without redesigning the core architecture. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Cloud"]
  },
  {
    id: "az-900-22",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Economies of Scale",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for economies of scale scenarios.",
    question: "Which statement accurately reflects the principles of economies of scale in modern cloud environments?",
    options: [
      { id: 'A', text: "Economies of scale" },
      { id: 'B', text: "Micro-segmentation" },
      { id: 'C', text: "Single-tenant arbitrage" },
      { id: 'D', text: "Sovereign isolation" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud providers purchase massive quantities of hardware, storage, and power at wholesale volume discounts, passing savings to customers in the form of lower per-unit pricing. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Economies"]
  },
  {
    id: "az-900-23",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: Shared Responsibility for Physical Security",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for shared responsibility for physical security scenarios.",
    question: "Which statement accurately reflects the principles of shared responsibility for physical security in modern cloud environments?",
    options: [
      { id: 'A', text: "Microsoft is always responsible for physical datacenter security" },
      { id: 'B', text: "The customer provides security guards at local Azure facilities" },
      { id: 'C', text: "Physical security responsibility is shared equally in PaaS" },
      { id: 'D', text: "The customer is responsible for physical security in IaaS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Physical security of the datacenter facilities, perimeter fencing, security personnel, and biometric access controls are always managed exclusively by Microsoft across IaaS, PaaS, and SaaS. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "Shared"]
  },
  {
    id: "az-900-24",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: IaaS Use Case - Lift and Shift",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for iaas use case - lift and shift scenarios.",
    question: "Which statement accurately reflects the principles of iaas use case - lift and shift in modern cloud environments?",
    options: [
      { id: 'A', text: "Software as a Service (SaaS)" },
      { id: 'B', text: "Platform as a Service (PaaS)" },
      { id: 'C', text: "Function as a Service (FaaS)" },
      { id: 'D', text: "Infrastructure as a Service (IaaS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When migrating existing on-premises virtual machines to the cloud with minimal architectural changes, Infrastructure as a Service (IaaS) provides the fastest and most compatible transition. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "IaaS"]
  },
  {
    id: "az-900-25",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Cloud Concept: PaaS Web Hosting Benefits",
    scenario: "An enterprise architectural review is evaluating cloud deployment models, financial operations, and operational capabilities for paas web hosting benefits scenarios.",
    question: "Which statement accurately reflects the principles of paas web hosting benefits in modern cloud environments?",
    options: [
      { id: 'A', text: "Dedicated Private Cloud" },
      { id: 'B', text: "Infrastructure as a Service (IaaS)" },
      { id: 'C', text: "Bare-metal hosting" },
      { id: 'D', text: "Platform as a Service (PaaS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "PaaS allows developers to deploy applications without managing the underlying virtual machines, operating system licensing, or server patching. Understanding these distinctions is fundamental to designing resilient, cost-effective, and scalable cloud architectures on Microsoft Azure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["Cloud Concepts", "Architecture", "PaaS"]
  }
];

export default AZURE_AZ900_QUESTIONS_1;
