export const AZURE_AZ900_QUESTIONS_15 = [
  {
    id: "az-900-351",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Groups: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Governance Hierarchy to establish clear billing boundaries and apply unified compliance policies across dozens of enterprise subscriptions in a hierarchical structure.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Subscription billing boundaries and management group governance is under consideration.",
    options: [
      { id: 'A', text: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope." },
      { id: 'B', text: "Create a single subscription and deploy all enterprise production and development resources into it." },
      { id: 'C', text: "Apply security policies manually to individual virtual machines one by one." },
      { id: 'D', text: "Assign billing credit cards directly to individual software developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope. Azure Management Groups provide a level of scope above subscriptions, organizing subscriptions into a governance hierarchy. Applying Azure Policy definitions or RBAC role assignments at the management group level automatically inherits down to all subscriptions and child resources within the tree.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance Hierarchy", "Governance Hierarchy", "Dr Failover"]
  },
  {
    id: "az-900-352",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Groups: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Governance Hierarchy to establish clear billing boundaries and apply unified compliance policies across dozens of enterprise subscriptions in a hierarchical structure.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Subscription billing boundaries and management group governance is under consideration.",
    options: [
      { id: 'A', text: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope." },
      { id: 'B', text: "Create a single subscription and deploy all enterprise production and development resources into it." },
      { id: 'C', text: "Apply security policies manually to individual virtual machines one by one." },
      { id: 'D', text: "Assign billing credit cards directly to individual software developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope. Azure Management Groups provide a level of scope above subscriptions, organizing subscriptions into a governance hierarchy. Applying Azure Policy definitions or RBAC role assignments at the management group level automatically inherits down to all subscriptions and child resources within the tree.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance Hierarchy", "Governance Hierarchy", "High Load Scale"]
  },
  {
    id: "az-900-353",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Groups: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Governance Hierarchy to establish clear billing boundaries and apply unified compliance policies across dozens of enterprise subscriptions in a hierarchical structure.",
    question: "Which solution properly implements these mandatory security and governance controls? Subscription billing boundaries and management group governance is under consideration.",
    options: [
      { id: 'A', text: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope." },
      { id: 'B', text: "Create a single subscription and deploy all enterprise production and development resources into it." },
      { id: 'C', text: "Apply security policies manually to individual virtual machines one by one." },
      { id: 'D', text: "Assign billing credit cards directly to individual software developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope. Azure Management Groups provide a level of scope above subscriptions, organizing subscriptions into a governance hierarchy. Applying Azure Policy definitions or RBAC role assignments at the management group level automatically inherits down to all subscriptions and child resources within the tree.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance Hierarchy", "Governance Hierarchy", "Security Compliance"]
  },
  {
    id: "az-900-354",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Groups: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Governance Hierarchy to establish clear billing boundaries and apply unified compliance policies across dozens of enterprise subscriptions in a hierarchical structure.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Subscription billing boundaries and management group governance is under consideration.",
    options: [
      { id: 'A', text: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope." },
      { id: 'B', text: "Create a single subscription and deploy all enterprise production and development resources into it." },
      { id: 'C', text: "Apply security policies manually to individual virtual machines one by one." },
      { id: 'D', text: "Assign billing credit cards directly to individual software developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope. Azure Management Groups provide a level of scope above subscriptions, organizing subscriptions into a governance hierarchy. Applying Azure Policy definitions or RBAC role assignments at the management group level automatically inherits down to all subscriptions and child resources within the tree.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance Hierarchy", "Governance Hierarchy", "Hybrid Migration"]
  },
  {
    id: "az-900-355",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Subscriptions and Management Groups: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Governance Hierarchy to establish clear billing boundaries and apply unified compliance policies across dozens of enterprise subscriptions in a hierarchical structure.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Subscription billing boundaries and management group governance is under consideration.",
    options: [
      { id: 'A', text: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope." },
      { id: 'B', text: "Create a single subscription and deploy all enterprise production and development resources into it." },
      { id: 'C', text: "Apply security policies manually to individual virtual machines one by one." },
      { id: 'D', text: "Assign billing credit cards directly to individual software developers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize subscriptions under Azure Management Groups and apply policies at the management group scope. Azure Management Groups provide a level of scope above subscriptions, organizing subscriptions into a governance hierarchy. Applying Azure Policy definitions or RBAC role assignments at the management group level automatically inherits down to all subscriptions and child resources within the tree.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview",
    tags: ["Azure Governance Hierarchy", "Governance Hierarchy", "Resilience Failure"]
  },
  {
    id: "az-900-356",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Compute to host custom enterprise enterprise software requiring customized OS configurations, dedicated CPU allocations, and direct administrative access.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure IaaS Virtual Machines is under consideration.",
    options: [
      { id: 'A', text: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations." },
      { id: 'B', text: "Deploy the application as an Azure Static Web App." },
      { id: 'C', text: "Use Azure Logic Apps to execute custom compiled Windows system binaries." },
      { id: 'D', text: "Deploy the database into an unmanaged public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations. Azure Virtual Machines provide on-demand, scalable Infrastructure as a Service (IaaS) computing resources. They provide full control over the operating system, disk storage, networking, and installed software stack, ideal for custom or legacy workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Compute", "Dr Failover"]
  },
  {
    id: "az-900-357",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Compute to host custom enterprise enterprise software requiring customized OS configurations, dedicated CPU allocations, and direct administrative access.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure IaaS Virtual Machines is under consideration.",
    options: [
      { id: 'A', text: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations." },
      { id: 'B', text: "Deploy the application as an Azure Static Web App." },
      { id: 'C', text: "Use Azure Logic Apps to execute custom compiled Windows system binaries." },
      { id: 'D', text: "Deploy the database into an unmanaged public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations. Azure Virtual Machines provide on-demand, scalable Infrastructure as a Service (IaaS) computing resources. They provide full control over the operating system, disk storage, networking, and installed software stack, ideal for custom or legacy workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Compute", "High Load Scale"]
  },
  {
    id: "az-900-358",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Compute to host custom enterprise enterprise software requiring customized OS configurations, dedicated CPU allocations, and direct administrative access.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure IaaS Virtual Machines is under consideration.",
    options: [
      { id: 'A', text: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations." },
      { id: 'B', text: "Deploy the application as an Azure Static Web App." },
      { id: 'C', text: "Use Azure Logic Apps to execute custom compiled Windows system binaries." },
      { id: 'D', text: "Deploy the database into an unmanaged public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations. Azure Virtual Machines provide on-demand, scalable Infrastructure as a Service (IaaS) computing resources. They provide full control over the operating system, disk storage, networking, and installed software stack, ideal for custom or legacy workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Compute", "Security Compliance"]
  },
  {
    id: "az-900-359",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Compute to host custom enterprise enterprise software requiring customized OS configurations, dedicated CPU allocations, and direct administrative access.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure IaaS Virtual Machines is under consideration.",
    options: [
      { id: 'A', text: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations." },
      { id: 'B', text: "Deploy the application as an Azure Static Web App." },
      { id: 'C', text: "Use Azure Logic Apps to execute custom compiled Windows system binaries." },
      { id: 'D', text: "Deploy the database into an unmanaged public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations. Azure Virtual Machines provide on-demand, scalable Infrastructure as a Service (IaaS) computing resources. They provide full control over the operating system, disk storage, networking, and installed software stack, ideal for custom or legacy workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Compute", "Hybrid Migration"]
  },
  {
    id: "az-900-360",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machines (VMs): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Compute to host custom enterprise enterprise software requiring customized OS configurations, dedicated CPU allocations, and direct administrative access.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure IaaS Virtual Machines is under consideration.",
    options: [
      { id: 'A', text: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations." },
      { id: 'B', text: "Deploy the application as an Azure Static Web App." },
      { id: 'C', text: "Use Azure Logic Apps to execute custom compiled Windows system binaries." },
      { id: 'D', text: "Deploy the database into an unmanaged public FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision Azure Virtual Machines (VMs) with the required CPU, memory, and OS disk configurations. Azure Virtual Machines provide on-demand, scalable Infrastructure as a Service (IaaS) computing resources. They provide full control over the operating system, disk storage, networking, and installed software stack, ideal for custom or legacy workloads.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
    tags: ["Azure Compute", "Compute", "Resilience Failure"]
  },
  {
    id: "az-900-361",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Compute to automatically increase or decrease the number of identical load-balanced virtual machine instances based on CPU utilization and incoming network traffic.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Virtual Machine Scale Sets automated horizontal scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules." },
      { id: 'B', text: "Manually deploy 10 standalone VMs and adjust their CPU allocations individually during traffic spikes." },
      { id: 'C', text: "Deploy an Azure Container Registry instance without compute instances." },
      { id: 'D', text: "Use Azure DNS to create static round-robin records pointing to single static VMs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules. Azure Virtual Machine Scale Sets (VMSS) let you create and manage a group of identical, load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule, providing true elasticity and high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "Compute", "Dr Failover"]
  },
  {
    id: "az-900-362",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Compute to automatically increase or decrease the number of identical load-balanced virtual machine instances based on CPU utilization and incoming network traffic.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Virtual Machine Scale Sets automated horizontal scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules." },
      { id: 'B', text: "Manually deploy 10 standalone VMs and adjust their CPU allocations individually during traffic spikes." },
      { id: 'C', text: "Deploy an Azure Container Registry instance without compute instances." },
      { id: 'D', text: "Use Azure DNS to create static round-robin records pointing to single static VMs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules. Azure Virtual Machine Scale Sets (VMSS) let you create and manage a group of identical, load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule, providing true elasticity and high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "Compute", "High Load Scale"]
  },
  {
    id: "az-900-363",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Compute to automatically increase or decrease the number of identical load-balanced virtual machine instances based on CPU utilization and incoming network traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Virtual Machine Scale Sets automated horizontal scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules." },
      { id: 'B', text: "Manually deploy 10 standalone VMs and adjust their CPU allocations individually during traffic spikes." },
      { id: 'C', text: "Deploy an Azure Container Registry instance without compute instances." },
      { id: 'D', text: "Use Azure DNS to create static round-robin records pointing to single static VMs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules. Azure Virtual Machine Scale Sets (VMSS) let you create and manage a group of identical, load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule, providing true elasticity and high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "Compute", "Security Compliance"]
  },
  {
    id: "az-900-364",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Compute to automatically increase or decrease the number of identical load-balanced virtual machine instances based on CPU utilization and incoming network traffic.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Virtual Machine Scale Sets automated horizontal scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules." },
      { id: 'B', text: "Manually deploy 10 standalone VMs and adjust their CPU allocations individually during traffic spikes." },
      { id: 'C', text: "Deploy an Azure Container Registry instance without compute instances." },
      { id: 'D', text: "Use Azure DNS to create static round-robin records pointing to single static VMs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules. Azure Virtual Machine Scale Sets (VMSS) let you create and manage a group of identical, load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule, providing true elasticity and high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "Compute", "Hybrid Migration"]
  },
  {
    id: "az-900-365",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Machine Scale Sets (VMSS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Compute to automatically increase or decrease the number of identical load-balanced virtual machine instances based on CPU utilization and incoming network traffic.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Virtual Machine Scale Sets automated horizontal scaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules." },
      { id: 'B', text: "Manually deploy 10 standalone VMs and adjust their CPU allocations individually during traffic spikes." },
      { id: 'C', text: "Deploy an Azure Container Registry instance without compute instances." },
      { id: 'D', text: "Use Azure DNS to create static round-robin records pointing to single static VMs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the workload using Azure Virtual Machine Scale Sets (VMSS) with metric-based autoscale rules. Azure Virtual Machine Scale Sets (VMSS) let you create and manage a group of identical, load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule, providing true elasticity and high availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview",
    tags: ["Azure Compute", "Compute", "Resilience Failure"]
  },
  {
    id: "az-900-366",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Compute to host enterprise web applications and REST APIs using .NET, Java, and Node.js without managing physical servers, hypervisors, or operating system patches.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure App Service fully managed web hosting platform is under consideration.",
    options: [
      { id: 'A', text: "Deploy the web application to Azure App Service under a managed App Service Plan." },
      { id: 'B', text: "Deploy a cluster of Azure IaaS VMs and configure IIS and operating system updates manually." },
      { id: 'C', text: "Host web application source code in an unmanaged Azure Storage public blob container." },
      { id: 'D', text: "Deploy an Azure Virtual Network Gateway to serve HTTP web requests directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the web application to Azure App Service under a managed App Service Plan. Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile back ends. It supports automated scaling, continuous deployment from GitHub, custom domains, SSL certificates, and OS patching handled transparently by Microsoft.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "PaaS Compute", "Dr Failover"]
  },
  {
    id: "az-900-367",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Compute to host enterprise web applications and REST APIs using .NET, Java, and Node.js without managing physical servers, hypervisors, or operating system patches.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure App Service fully managed web hosting platform is under consideration.",
    options: [
      { id: 'A', text: "Deploy the web application to Azure App Service under a managed App Service Plan." },
      { id: 'B', text: "Deploy a cluster of Azure IaaS VMs and configure IIS and operating system updates manually." },
      { id: 'C', text: "Host web application source code in an unmanaged Azure Storage public blob container." },
      { id: 'D', text: "Deploy an Azure Virtual Network Gateway to serve HTTP web requests directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the web application to Azure App Service under a managed App Service Plan. Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile back ends. It supports automated scaling, continuous deployment from GitHub, custom domains, SSL certificates, and OS patching handled transparently by Microsoft.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "PaaS Compute", "High Load Scale"]
  },
  {
    id: "az-900-368",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Compute to host enterprise web applications and REST APIs using .NET, Java, and Node.js without managing physical servers, hypervisors, or operating system patches.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure App Service fully managed web hosting platform is under consideration.",
    options: [
      { id: 'A', text: "Deploy the web application to Azure App Service under a managed App Service Plan." },
      { id: 'B', text: "Deploy a cluster of Azure IaaS VMs and configure IIS and operating system updates manually." },
      { id: 'C', text: "Host web application source code in an unmanaged Azure Storage public blob container." },
      { id: 'D', text: "Deploy an Azure Virtual Network Gateway to serve HTTP web requests directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the web application to Azure App Service under a managed App Service Plan. Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile back ends. It supports automated scaling, continuous deployment from GitHub, custom domains, SSL certificates, and OS patching handled transparently by Microsoft.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "PaaS Compute", "Security Compliance"]
  },
  {
    id: "az-900-369",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Compute to host enterprise web applications and REST APIs using .NET, Java, and Node.js without managing physical servers, hypervisors, or operating system patches.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure App Service fully managed web hosting platform is under consideration.",
    options: [
      { id: 'A', text: "Deploy the web application to Azure App Service under a managed App Service Plan." },
      { id: 'B', text: "Deploy a cluster of Azure IaaS VMs and configure IIS and operating system updates manually." },
      { id: 'C', text: "Host web application source code in an unmanaged Azure Storage public blob container." },
      { id: 'D', text: "Deploy an Azure Virtual Network Gateway to serve HTTP web requests directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the web application to Azure App Service under a managed App Service Plan. Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile back ends. It supports automated scaling, continuous deployment from GitHub, custom domains, SSL certificates, and OS patching handled transparently by Microsoft.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "PaaS Compute", "Hybrid Migration"]
  },
  {
    id: "az-900-370",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure App Service: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Compute to host enterprise web applications and REST APIs using .NET, Java, and Node.js without managing physical servers, hypervisors, or operating system patches.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure App Service fully managed web hosting platform is under consideration.",
    options: [
      { id: 'A', text: "Deploy the web application to Azure App Service under a managed App Service Plan." },
      { id: 'B', text: "Deploy a cluster of Azure IaaS VMs and configure IIS and operating system updates manually." },
      { id: 'C', text: "Host web application source code in an unmanaged Azure Storage public blob container." },
      { id: 'D', text: "Deploy an Azure Virtual Network Gateway to serve HTTP web requests directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the web application to Azure App Service under a managed App Service Plan. Azure App Service is an HTTP-based Platform as a Service (PaaS) for hosting web applications, REST APIs, and mobile back ends. It supports automated scaling, continuous deployment from GitHub, custom domains, SSL certificates, and OS patching handled transparently by Microsoft.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview",
    tags: ["Azure Compute", "PaaS Compute", "Resilience Failure"]
  },
  {
    id: "az-900-371",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Compute): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Serverless to execute backend code in response to events (such as HTTP requests, timer schedules, or queue messages) without provisioning or paying for idle servers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Functions event-driven serverless compute is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan." },
      { id: 'B', text: "Provision a dedicated 8-core Azure VM that polls an empty message queue 24/7." },
      { id: 'C', text: "Deploy an Azure App Service Plan on an isolated App Service Environment running continuously." },
      { id: 'D', text: "Configure an Azure Batch cluster that remains active at full capacity indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan. Azure Functions is an event-driven serverless compute service that enables developers to run code in response to events without managing infrastructure. On the Consumption Plan, compute resources scale automatically and customers pay strictly for the execution time and memory consumed per invocation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Serverless", "Serverless", "Dr Failover"]
  },
  {
    id: "az-900-372",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Compute): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Serverless to execute backend code in response to events (such as HTTP requests, timer schedules, or queue messages) without provisioning or paying for idle servers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Functions event-driven serverless compute is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan." },
      { id: 'B', text: "Provision a dedicated 8-core Azure VM that polls an empty message queue 24/7." },
      { id: 'C', text: "Deploy an Azure App Service Plan on an isolated App Service Environment running continuously." },
      { id: 'D', text: "Configure an Azure Batch cluster that remains active at full capacity indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan. Azure Functions is an event-driven serverless compute service that enables developers to run code in response to events without managing infrastructure. On the Consumption Plan, compute resources scale automatically and customers pay strictly for the execution time and memory consumed per invocation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Serverless", "Serverless", "High Load Scale"]
  },
  {
    id: "az-900-373",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Compute): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Serverless to execute backend code in response to events (such as HTTP requests, timer schedules, or queue messages) without provisioning or paying for idle servers.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Functions event-driven serverless compute is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan." },
      { id: 'B', text: "Provision a dedicated 8-core Azure VM that polls an empty message queue 24/7." },
      { id: 'C', text: "Deploy an Azure App Service Plan on an isolated App Service Environment running continuously." },
      { id: 'D', text: "Configure an Azure Batch cluster that remains active at full capacity indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan. Azure Functions is an event-driven serverless compute service that enables developers to run code in response to events without managing infrastructure. On the Consumption Plan, compute resources scale automatically and customers pay strictly for the execution time and memory consumed per invocation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Serverless", "Serverless", "Security Compliance"]
  },
  {
    id: "az-900-374",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Compute): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Serverless to execute backend code in response to events (such as HTTP requests, timer schedules, or queue messages) without provisioning or paying for idle servers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Functions event-driven serverless compute is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan." },
      { id: 'B', text: "Provision a dedicated 8-core Azure VM that polls an empty message queue 24/7." },
      { id: 'C', text: "Deploy an Azure App Service Plan on an isolated App Service Environment running continuously." },
      { id: 'D', text: "Configure an Azure Batch cluster that remains active at full capacity indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan. Azure Functions is an event-driven serverless compute service that enables developers to run code in response to events without managing infrastructure. On the Consumption Plan, compute resources scale automatically and customers pay strictly for the execution time and memory consumed per invocation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Serverless", "Serverless", "Hybrid Migration"]
  },
  {
    id: "az-900-375",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Functions (Serverless Compute): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Serverless to execute backend code in response to events (such as HTTP requests, timer schedules, or queue messages) without provisioning or paying for idle servers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Functions event-driven serverless compute is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan." },
      { id: 'B', text: "Provision a dedicated 8-core Azure VM that polls an empty message queue 24/7." },
      { id: 'C', text: "Deploy an Azure App Service Plan on an isolated App Service Environment running continuously." },
      { id: 'D', text: "Configure an Azure Batch cluster that remains active at full capacity indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven serverless solution using Azure Functions on a Consumption Plan. Azure Functions is an event-driven serverless compute service that enables developers to run code in response to events without managing infrastructure. On the Consumption Plan, compute resources scale automatically and customers pay strictly for the execution time and memory consumed per invocation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
    tags: ["Azure Serverless", "Serverless", "Resilience Failure"]
  }
];

export default AZURE_AZ900_QUESTIONS_15;
