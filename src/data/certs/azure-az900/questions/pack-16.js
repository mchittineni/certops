export const AZURE_AZ900_QUESTIONS_16 = [
  {
    id: "az-900-376",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Containers to run a single Docker container workload in the cloud instantly without orchestrating a complete Kubernetes cluster or provisioning virtual machine hosts.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Container Instances on-demand serverless containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Azure Container Instances (ACI)." },
      { id: 'B', text: "Provision an Azure Virtual Machine and install the Docker engine manually." },
      { id: 'C', text: "Convert the container image into an Azure App Service Plan running Windows Server VMs." },
      { id: 'D', text: "Deploy a production-grade multi-node Azure Kubernetes Service (AKS) cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Azure Container Instances (ACI). Azure Container Instances (ACI) is the fastest and simplest way to run a container in Azure without having to manage any virtual machines and without having to adopt a higher-level container orchestration service like AKS. It provides isolated serverless container execution billed per second.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Containers", "Containers", "Dr Failover"]
  },
  {
    id: "az-900-377",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Containers to run a single Docker container workload in the cloud instantly without orchestrating a complete Kubernetes cluster or provisioning virtual machine hosts.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Container Instances on-demand serverless containers is under consideration.",
    options: [
      { id: 'A', text: "Provision an Azure Virtual Machine and install the Docker engine manually." },
      { id: 'B', text: "Convert the container image into an Azure App Service Plan running Windows Server VMs." },
      { id: 'C', text: "Deploy a production-grade multi-node Azure Kubernetes Service (AKS) cluster." },
      { id: 'D', text: "Deploy the container image to Azure Container Instances (ACI)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the container image to Azure Container Instances (ACI). Azure Container Instances (ACI) is the fastest and simplest way to run a container in Azure without having to manage any virtual machines and without having to adopt a higher-level container orchestration service like AKS. It provides isolated serverless container execution billed per second.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Containers", "Containers", "High Load Scale"]
  },
  {
    id: "az-900-378",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Containers to run a single Docker container workload in the cloud instantly without orchestrating a complete Kubernetes cluster or provisioning virtual machine hosts.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Container Instances on-demand serverless containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a production-grade multi-node Azure Kubernetes Service (AKS) cluster." },
      { id: 'B', text: "Provision an Azure Virtual Machine and install the Docker engine manually." },
      { id: 'C', text: "Convert the container image into an Azure App Service Plan running Windows Server VMs." },
      { id: 'D', text: "Deploy the container image to Azure Container Instances (ACI)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the container image to Azure Container Instances (ACI). Azure Container Instances (ACI) is the fastest and simplest way to run a container in Azure without having to manage any virtual machines and without having to adopt a higher-level container orchestration service like AKS. It provides isolated serverless container execution billed per second.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Containers", "Containers", "Security Compliance"]
  },
  {
    id: "az-900-379",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Containers to run a single Docker container workload in the cloud instantly without orchestrating a complete Kubernetes cluster or provisioning virtual machine hosts.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Container Instances on-demand serverless containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy a production-grade multi-node Azure Kubernetes Service (AKS) cluster." },
      { id: 'B', text: "Provision an Azure Virtual Machine and install the Docker engine manually." },
      { id: 'C', text: "Deploy the container image to Azure Container Instances (ACI)." },
      { id: 'D', text: "Convert the container image into an Azure App Service Plan running Windows Server VMs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the container image to Azure Container Instances (ACI). Azure Container Instances (ACI) is the fastest and simplest way to run a container in Azure without having to manage any virtual machines and without having to adopt a higher-level container orchestration service like AKS. It provides isolated serverless container execution billed per second.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Containers", "Containers", "Hybrid Migration"]
  },
  {
    id: "az-900-380",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Container Instances (ACI): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Containers to run a single Docker container workload in the cloud instantly without orchestrating a complete Kubernetes cluster or provisioning virtual machine hosts.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Container Instances on-demand serverless containers is under consideration.",
    options: [
      { id: 'A', text: "Deploy the container image to Azure Container Instances (ACI)." },
      { id: 'B', text: "Provision an Azure Virtual Machine and install the Docker engine manually." },
      { id: 'C', text: "Convert the container image into an Azure App Service Plan running Windows Server VMs." },
      { id: 'D', text: "Deploy a production-grade multi-node Azure Kubernetes Service (AKS) cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container image to Azure Container Instances (ACI). Azure Container Instances (ACI) is the fastest and simplest way to run a container in Azure without having to manage any virtual machines and without having to adopt a higher-level container orchestration service like AKS. It provides isolated serverless container execution billed per second.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview",
    tags: ["Azure Containers", "Containers", "Resilience Failure"]
  },
  {
    id: "az-900-381",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Containers to deploy, manage, and scale complex microservices architectures across hundreds of distributed containerized applications with automated self-healing.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Kubernetes Service (AKS) managed container orchestration is under consideration.",
    options: [
      { id: 'A', text: "Deploy the containerized microservices to Azure Kubernetes Service (AKS)." },
      { id: 'B', text: "Run each container manually on separate standalone Azure Virtual Machines." },
      { id: 'C', text: "Use Azure Static Web Apps to run stateful microservice backend databases." },
      { id: 'D', text: "Deploy all microservices into a single monolithic Azure App Service instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the containerized microservices to Azure Kubernetes Service (AKS). Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. Microsoft handles the Kubernetes control plane for free, providing automated upgrades, self-healing node health monitoring, and seamless integration with Azure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Containers", "Containers", "Dr Failover"]
  },
  {
    id: "az-900-382",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Containers to deploy, manage, and scale complex microservices architectures across hundreds of distributed containerized applications with automated self-healing.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Kubernetes Service (AKS) managed container orchestration is under consideration.",
    options: [
      { id: 'A', text: "Deploy all microservices into a single monolithic Azure App Service instance." },
      { id: 'B', text: "Deploy the containerized microservices to Azure Kubernetes Service (AKS)." },
      { id: 'C', text: "Use Azure Static Web Apps to run stateful microservice backend databases." },
      { id: 'D', text: "Run each container manually on separate standalone Azure Virtual Machines." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the containerized microservices to Azure Kubernetes Service (AKS). Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. Microsoft handles the Kubernetes control plane for free, providing automated upgrades, self-healing node health monitoring, and seamless integration with Azure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Containers", "Containers", "High Load Scale"]
  },
  {
    id: "az-900-383",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Containers to deploy, manage, and scale complex microservices architectures across hundreds of distributed containerized applications with automated self-healing.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Kubernetes Service (AKS) managed container orchestration is under consideration.",
    options: [
      { id: 'A', text: "Use Azure Static Web Apps to run stateful microservice backend databases." },
      { id: 'B', text: "Run each container manually on separate standalone Azure Virtual Machines." },
      { id: 'C', text: "Deploy the containerized microservices to Azure Kubernetes Service (AKS)." },
      { id: 'D', text: "Deploy all microservices into a single monolithic Azure App Service instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the containerized microservices to Azure Kubernetes Service (AKS). Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. Microsoft handles the Kubernetes control plane for free, providing automated upgrades, self-healing node health monitoring, and seamless integration with Azure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Containers", "Containers", "Security Compliance"]
  },
  {
    id: "az-900-384",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Containers to deploy, manage, and scale complex microservices architectures across hundreds of distributed containerized applications with automated self-healing.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Kubernetes Service (AKS) managed container orchestration is under consideration.",
    options: [
      { id: 'A', text: "Use Azure Static Web Apps to run stateful microservice backend databases." },
      { id: 'B', text: "Run each container manually on separate standalone Azure Virtual Machines." },
      { id: 'C', text: "Deploy the containerized microservices to Azure Kubernetes Service (AKS)." },
      { id: 'D', text: "Deploy all microservices into a single monolithic Azure App Service instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the containerized microservices to Azure Kubernetes Service (AKS). Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. Microsoft handles the Kubernetes control plane for free, providing automated upgrades, self-healing node health monitoring, and seamless integration with Azure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Containers", "Containers", "Hybrid Migration"]
  },
  {
    id: "az-900-385",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Kubernetes Service (AKS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Containers to deploy, manage, and scale complex microservices architectures across hundreds of distributed containerized applications with automated self-healing.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Kubernetes Service (AKS) managed container orchestration is under consideration.",
    options: [
      { id: 'A', text: "Run each container manually on separate standalone Azure Virtual Machines." },
      { id: 'B', text: "Deploy all microservices into a single monolithic Azure App Service instance." },
      { id: 'C', text: "Use Azure Static Web Apps to run stateful microservice backend databases." },
      { id: 'D', text: "Deploy the containerized microservices to Azure Kubernetes Service (AKS)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the containerized microservices to Azure Kubernetes Service (AKS). Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. Microsoft handles the Kubernetes control plane for free, providing automated upgrades, self-healing node health monitoring, and seamless integration with Azure networking.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/intro-kubernetes",
    tags: ["Azure Containers", "Containers", "Resilience Failure"]
  },
  {
    id: "az-900-386",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Virtualization to provide remote employees with secure access to Windows 11 enterprise desktops and productivity applications accessible from any client device.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Virtual Desktop multi-session cloud virtualization is under consideration.",
    options: [
      { id: 'A', text: "Deploy standard single-instance Linux virtual machines without remote desktop protocols." },
      { id: 'B', text: "Allow employees to copy proprietary corporate data onto unmanaged personal USB flash drives." },
      { id: 'C', text: "Ship physical high-end corporate desktop workstations to each employee's home address." },
      { id: 'D', text: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities. Azure Virtual Desktop (AVD) is a comprehensive desktop and app virtualization service running in the cloud. It delivers Windows 11 and Windows 10 multi-session capabilities, optimizations for Microsoft 365 Apps, and supports remote connections from Windows, Mac, iOS, Android, and web browsers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Virtualization", "Virtual Desktop", "Dr Failover"]
  },
  {
    id: "az-900-387",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Virtualization to provide remote employees with secure access to Windows 11 enterprise desktops and productivity applications accessible from any client device.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Virtual Desktop multi-session cloud virtualization is under consideration.",
    options: [
      { id: 'A', text: "Ship physical high-end corporate desktop workstations to each employee's home address." },
      { id: 'B', text: "Deploy standard single-instance Linux virtual machines without remote desktop protocols." },
      { id: 'C', text: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities." },
      { id: 'D', text: "Allow employees to copy proprietary corporate data onto unmanaged personal USB flash drives." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities. Azure Virtual Desktop (AVD) is a comprehensive desktop and app virtualization service running in the cloud. It delivers Windows 11 and Windows 10 multi-session capabilities, optimizations for Microsoft 365 Apps, and supports remote connections from Windows, Mac, iOS, Android, and web browsers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Virtualization", "Virtual Desktop", "High Load Scale"]
  },
  {
    id: "az-900-388",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Virtualization to provide remote employees with secure access to Windows 11 enterprise desktops and productivity applications accessible from any client device.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Virtual Desktop multi-session cloud virtualization is under consideration.",
    options: [
      { id: 'A', text: "Deploy standard single-instance Linux virtual machines without remote desktop protocols." },
      { id: 'B', text: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities." },
      { id: 'C', text: "Ship physical high-end corporate desktop workstations to each employee's home address." },
      { id: 'D', text: "Allow employees to copy proprietary corporate data onto unmanaged personal USB flash drives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities. Azure Virtual Desktop (AVD) is a comprehensive desktop and app virtualization service running in the cloud. It delivers Windows 11 and Windows 10 multi-session capabilities, optimizations for Microsoft 365 Apps, and supports remote connections from Windows, Mac, iOS, Android, and web browsers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Virtualization", "Virtual Desktop", "Security Compliance"]
  },
  {
    id: "az-900-389",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Virtualization to provide remote employees with secure access to Windows 11 enterprise desktops and productivity applications accessible from any client device.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Virtual Desktop multi-session cloud virtualization is under consideration.",
    options: [
      { id: 'A', text: "Deploy standard single-instance Linux virtual machines without remote desktop protocols." },
      { id: 'B', text: "Allow employees to copy proprietary corporate data onto unmanaged personal USB flash drives." },
      { id: 'C', text: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities." },
      { id: 'D', text: "Ship physical high-end corporate desktop workstations to each employee's home address." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities. Azure Virtual Desktop (AVD) is a comprehensive desktop and app virtualization service running in the cloud. It delivers Windows 11 and Windows 10 multi-session capabilities, optimizations for Microsoft 365 Apps, and supports remote connections from Windows, Mac, iOS, Android, and web browsers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Virtualization", "Virtual Desktop", "Hybrid Migration"]
  },
  {
    id: "az-900-390",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Desktop (AVD): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Virtualization to provide remote employees with secure access to Windows 11 enterprise desktops and productivity applications accessible from any client device.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Virtual Desktop multi-session cloud virtualization is under consideration.",
    options: [
      { id: 'A', text: "Allow employees to copy proprietary corporate data onto unmanaged personal USB flash drives." },
      { id: 'B', text: "Ship physical high-end corporate desktop workstations to each employee's home address." },
      { id: 'C', text: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities." },
      { id: 'D', text: "Deploy standard single-instance Linux virtual machines without remote desktop protocols." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure Virtual Desktop (AVD) with Windows 11 Enterprise multi-session capabilities. Azure Virtual Desktop (AVD) is a comprehensive desktop and app virtualization service running in the cloud. It delivers Windows 11 and Windows 10 multi-session capabilities, optimizations for Microsoft 365 Apps, and supports remote connections from Windows, Mac, iOS, Android, and web browsers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview",
    tags: ["Azure Virtualization", "Virtual Desktop", "Resilience Failure"]
  },
  {
    id: "az-900-391",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Networks (VNets) and Subnets: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Networking to isolate cloud resources within a private, dedicated software-defined network with custom IP address spaces, subnets, and routing controls.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Virtual Networks private IP isolation and subnetting is under consideration.",
    options: [
      { id: 'A', text: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets." },
      { id: 'B', text: "Assign public IP addresses to all database servers and expose them directly to the internet." },
      { id: 'C', text: "Rely on public internet DNS routing for internal communication between backend servers." },
      { id: 'D', text: "Deploy all virtual machines into the default multi-tenant Azure public network." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets. Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks. Subnets allow segmenting the VNet address space into manageable subnetworks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "Networking", "Dr Failover"]
  },
  {
    id: "az-900-392",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Networks (VNets) and Subnets: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Networking to isolate cloud resources within a private, dedicated software-defined network with custom IP address spaces, subnets, and routing controls.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Virtual Networks private IP isolation and subnetting is under consideration.",
    options: [
      { id: 'A', text: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets." },
      { id: 'B', text: "Assign public IP addresses to all database servers and expose them directly to the internet." },
      { id: 'C', text: "Deploy all virtual machines into the default multi-tenant Azure public network." },
      { id: 'D', text: "Rely on public internet DNS routing for internal communication between backend servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets. Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks. Subnets allow segmenting the VNet address space into manageable subnetworks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "Networking", "High Load Scale"]
  },
  {
    id: "az-900-393",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Networks (VNets) and Subnets: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Networking to isolate cloud resources within a private, dedicated software-defined network with custom IP address spaces, subnets, and routing controls.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Virtual Networks private IP isolation and subnetting is under consideration.",
    options: [
      { id: 'A', text: "Deploy all virtual machines into the default multi-tenant Azure public network." },
      { id: 'B', text: "Rely on public internet DNS routing for internal communication between backend servers." },
      { id: 'C', text: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets." },
      { id: 'D', text: "Assign public IP addresses to all database servers and expose them directly to the internet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets. Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks. Subnets allow segmenting the VNet address space into manageable subnetworks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "Networking", "Security Compliance"]
  },
  {
    id: "az-900-394",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Networks (VNets) and Subnets: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Networking to isolate cloud resources within a private, dedicated software-defined network with custom IP address spaces, subnets, and routing controls.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Virtual Networks private IP isolation and subnetting is under consideration.",
    options: [
      { id: 'A', text: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets." },
      { id: 'B', text: "Rely on public internet DNS routing for internal communication between backend servers." },
      { id: 'C', text: "Deploy all virtual machines into the default multi-tenant Azure public network." },
      { id: 'D', text: "Assign public IP addresses to all database servers and expose them directly to the internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets. Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks. Subnets allow segmenting the VNet address space into manageable subnetworks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "Networking", "Hybrid Migration"]
  },
  {
    id: "az-900-395",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Virtual Networks (VNets) and Subnets: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Networking to isolate cloud resources within a private, dedicated software-defined network with custom IP address spaces, subnets, and routing controls.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Virtual Networks private IP isolation and subnetting is under consideration.",
    options: [
      { id: 'A', text: "Assign public IP addresses to all database servers and expose them directly to the internet." },
      { id: 'B', text: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets." },
      { id: 'C', text: "Deploy all virtual machines into the default multi-tenant Azure public network." },
      { id: 'D', text: "Rely on public internet DNS routing for internal communication between backend servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy resources into an Azure Virtual Network (VNet) segmented into distinct subnets. Azure Virtual Network (VNet) is the fundamental building block for private networks in Azure. VNets enable Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks. Subnets allow segmenting the VNet address space into manageable subnetworks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
    tags: ["Azure Networking", "Networking", "Resilience Failure"]
  },
  {
    id: "az-900-396",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Hybrid Networking to connect corporate on-premises corporate datacenters to Azure with high-throughput (up to 100 Gbps), ultra-low latency, and traffic that never traverses the public internet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Encrypted IPsec VPN vs dedicated private ExpressRoute circuits is under consideration.",
    options: [
      { id: 'A', text: "Provision an Azure ExpressRoute dedicated private circuit connection." },
      { id: 'B', text: "Use standard consumer broadband internet with dynamic DNS routing." },
      { id: 'C', text: "Configure an unencrypted public internet FTP connection between datacenters." },
      { id: 'D', text: "Establish an Azure Point-to-Site VPN connection over the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Azure ExpressRoute dedicated private circuit connection. Azure ExpressRoute lets you extend on-premises networks into the Microsoft cloud over a private connection with the assistance of a connectivity provider. ExpressRoute connections do not go over the public internet, offering higher security, reliability, faster speeds (up to 100 Gbps), and lower latencies than typical VPNs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Hybrid Networking", "Networking", "Dr Failover"]
  },
  {
    id: "az-900-397",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Hybrid Networking to connect corporate on-premises corporate datacenters to Azure with high-throughput (up to 100 Gbps), ultra-low latency, and traffic that never traverses the public internet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Encrypted IPsec VPN vs dedicated private ExpressRoute circuits is under consideration.",
    options: [
      { id: 'A', text: "Provision an Azure ExpressRoute dedicated private circuit connection." },
      { id: 'B', text: "Configure an unencrypted public internet FTP connection between datacenters." },
      { id: 'C', text: "Establish an Azure Point-to-Site VPN connection over the public internet." },
      { id: 'D', text: "Use standard consumer broadband internet with dynamic DNS routing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision an Azure ExpressRoute dedicated private circuit connection. Azure ExpressRoute lets you extend on-premises networks into the Microsoft cloud over a private connection with the assistance of a connectivity provider. ExpressRoute connections do not go over the public internet, offering higher security, reliability, faster speeds (up to 100 Gbps), and lower latencies than typical VPNs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Hybrid Networking", "Networking", "High Load Scale"]
  },
  {
    id: "az-900-398",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Hybrid Networking to connect corporate on-premises corporate datacenters to Azure with high-throughput (up to 100 Gbps), ultra-low latency, and traffic that never traverses the public internet.",
    question: "Which solution properly implements these mandatory security and governance controls? Encrypted IPsec VPN vs dedicated private ExpressRoute circuits is under consideration.",
    options: [
      { id: 'A', text: "Configure an unencrypted public internet FTP connection between datacenters." },
      { id: 'B', text: "Use standard consumer broadband internet with dynamic DNS routing." },
      { id: 'C', text: "Establish an Azure Point-to-Site VPN connection over the public internet." },
      { id: 'D', text: "Provision an Azure ExpressRoute dedicated private circuit connection." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provision an Azure ExpressRoute dedicated private circuit connection. Azure ExpressRoute lets you extend on-premises networks into the Microsoft cloud over a private connection with the assistance of a connectivity provider. ExpressRoute connections do not go over the public internet, offering higher security, reliability, faster speeds (up to 100 Gbps), and lower latencies than typical VPNs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Hybrid Networking", "Networking", "Security Compliance"]
  },
  {
    id: "az-900-399",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Hybrid Networking to connect corporate on-premises corporate datacenters to Azure with high-throughput (up to 100 Gbps), ultra-low latency, and traffic that never traverses the public internet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Encrypted IPsec VPN vs dedicated private ExpressRoute circuits is under consideration.",
    options: [
      { id: 'A', text: "Establish an Azure Point-to-Site VPN connection over the public internet." },
      { id: 'B', text: "Configure an unencrypted public internet FTP connection between datacenters." },
      { id: 'C', text: "Use standard consumer broadband internet with dynamic DNS routing." },
      { id: 'D', text: "Provision an Azure ExpressRoute dedicated private circuit connection." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provision an Azure ExpressRoute dedicated private circuit connection. Azure ExpressRoute lets you extend on-premises networks into the Microsoft cloud over a private connection with the assistance of a connectivity provider. ExpressRoute connections do not go over the public internet, offering higher security, reliability, faster speeds (up to 100 Gbps), and lower latencies than typical VPNs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Hybrid Networking", "Networking", "Hybrid Migration"]
  },
  {
    id: "az-900-400",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure VPN Gateway vs ExpressRoute: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Hybrid Networking to connect corporate on-premises corporate datacenters to Azure with high-throughput (up to 100 Gbps), ultra-low latency, and traffic that never traverses the public internet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Encrypted IPsec VPN vs dedicated private ExpressRoute circuits is under consideration.",
    options: [
      { id: 'A', text: "Use standard consumer broadband internet with dynamic DNS routing." },
      { id: 'B', text: "Establish an Azure Point-to-Site VPN connection over the public internet." },
      { id: 'C', text: "Provision an Azure ExpressRoute dedicated private circuit connection." },
      { id: 'D', text: "Configure an unencrypted public internet FTP connection between datacenters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provision an Azure ExpressRoute dedicated private circuit connection. Azure ExpressRoute lets you extend on-premises networks into the Microsoft cloud over a private connection with the assistance of a connectivity provider. ExpressRoute connections do not go over the public internet, offering higher security, reliability, faster speeds (up to 100 Gbps), and lower latencies than typical VPNs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction",
    tags: ["Azure Hybrid Networking", "Networking", "Resilience Failure"]
  }
];

export default AZURE_AZ900_QUESTIONS_16;
