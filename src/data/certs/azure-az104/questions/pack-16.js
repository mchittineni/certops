export const AZURE_AZ104_QUESTIONS_16 = [
  {
    id: "az-104-376",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling (Scale Up vs Scale Out): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure App Service to upgrade an App Service web app from the Basic tier to the Premium v3 tier to enable deployment slots, autoscale, and dedicated hardware acceleration.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? App Service Plan tier upgrades vs instance count scaling is under evaluation.",
    options: [
      { id: 'A', text: "Scale up the App Service Plan to the Premium v3 pricing tier." },
      { id: 'B', text: "Convert the web application into an Azure Storage static website." },
      { id: 'C', text: "Deploy an Azure Load Balancer fronting the Basic App Service Plan." },
      { id: 'D', text: "Scale out the App Service Plan instance count from 1 to 10 on the Basic tier." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scale up the App Service Plan to the Premium v3 pricing tier. In Azure App Service, scaling up means changing to a higher pricing tier (e.g. from Basic to Premium), which provides more CPU/RAM, dedicated instances, and advanced features like deployment slots and custom domain SSL. Scaling out means adding more VM instances within the existing tier to handle traffic load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["Azure App Service", "App Service Scaling", "Dr Failover"]
  },
  {
    id: "az-104-377",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling (Scale Up vs Scale Out): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure App Service to upgrade an App Service web app from the Basic tier to the Premium v3 tier to enable deployment slots, autoscale, and dedicated hardware acceleration.",
    question: "Which architectural approach should the team select to manage this demand efficiently? App Service Plan tier upgrades vs instance count scaling is under evaluation.",
    options: [
      { id: 'A', text: "Convert the web application into an Azure Storage static website." },
      { id: 'B', text: "Scale out the App Service Plan instance count from 1 to 10 on the Basic tier." },
      { id: 'C', text: "Scale up the App Service Plan to the Premium v3 pricing tier." },
      { id: 'D', text: "Deploy an Azure Load Balancer fronting the Basic App Service Plan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scale up the App Service Plan to the Premium v3 pricing tier. In Azure App Service, scaling up means changing to a higher pricing tier (e.g. from Basic to Premium), which provides more CPU/RAM, dedicated instances, and advanced features like deployment slots and custom domain SSL. Scaling out means adding more VM instances within the existing tier to handle traffic load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["Azure App Service", "App Service Scaling", "High Load Scale"]
  },
  {
    id: "az-104-378",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling (Scale Up vs Scale Out): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure App Service to upgrade an App Service web app from the Basic tier to the Premium v3 tier to enable deployment slots, autoscale, and dedicated hardware acceleration.",
    question: "Which solution properly implements these mandatory security and governance controls? App Service Plan tier upgrades vs instance count scaling is under evaluation.",
    options: [
      { id: 'A', text: "Scale out the App Service Plan instance count from 1 to 10 on the Basic tier." },
      { id: 'B', text: "Deploy an Azure Load Balancer fronting the Basic App Service Plan." },
      { id: 'C', text: "Convert the web application into an Azure Storage static website." },
      { id: 'D', text: "Scale up the App Service Plan to the Premium v3 pricing tier." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Scale up the App Service Plan to the Premium v3 pricing tier. In Azure App Service, scaling up means changing to a higher pricing tier (e.g. from Basic to Premium), which provides more CPU/RAM, dedicated instances, and advanced features like deployment slots and custom domain SSL. Scaling out means adding more VM instances within the existing tier to handle traffic load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["Azure App Service", "App Service Scaling", "Security Compliance"]
  },
  {
    id: "az-104-379",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling (Scale Up vs Scale Out): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure App Service to upgrade an App Service web app from the Basic tier to the Premium v3 tier to enable deployment slots, autoscale, and dedicated hardware acceleration.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? App Service Plan tier upgrades vs instance count scaling is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Load Balancer fronting the Basic App Service Plan." },
      { id: 'B', text: "Convert the web application into an Azure Storage static website." },
      { id: 'C', text: "Scale up the App Service Plan to the Premium v3 pricing tier." },
      { id: 'D', text: "Scale out the App Service Plan instance count from 1 to 10 on the Basic tier." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scale up the App Service Plan to the Premium v3 pricing tier. In Azure App Service, scaling up means changing to a higher pricing tier (e.g. from Basic to Premium), which provides more CPU/RAM, dedicated instances, and advanced features like deployment slots and custom domain SSL. Scaling out means adding more VM instances within the existing tier to handle traffic load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["Azure App Service", "App Service Scaling", "Hybrid Migration"]
  },
  {
    id: "az-104-380",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Scaling (Scale Up vs Scale Out): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure App Service to upgrade an App Service web app from the Basic tier to the Premium v3 tier to enable deployment slots, autoscale, and dedicated hardware acceleration.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? App Service Plan tier upgrades vs instance count scaling is under evaluation.",
    options: [
      { id: 'A', text: "Scale up the App Service Plan to the Premium v3 pricing tier." },
      { id: 'B', text: "Convert the web application into an Azure Storage static website." },
      { id: 'C', text: "Scale out the App Service Plan instance count from 1 to 10 on the Basic tier." },
      { id: 'D', text: "Deploy an Azure Load Balancer fronting the Basic App Service Plan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scale up the App Service Plan to the Premium v3 pricing tier. In Azure App Service, scaling up means changing to a higher pricing tier (e.g. from Basic to Premium), which provides more CPU/RAM, dedicated instances, and advanced features like deployment slots and custom domain SSL. Scaling out means adding more VM instances within the existing tier to handle traffic load.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up",
    tags: ["Azure App Service", "App Service Scaling", "Resilience Failure"]
  },
  {
    id: "az-104-381",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Containers to deploy a daily batch data conversion script in Azure Container Instances that executes once, processes data, exits cleanly, and must not restart automatically.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? ACI container group restart policies: Always, OnFailure, and Never is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the container group with the restart policy configured as 'Never'." },
      { id: 'B', text: "Deploy the container to Azure Kubernetes Service as an infinite loop daemon." },
      { id: 'C', text: "Deploy the container group with the restart policy configured as 'Always'." },
      { id: 'D', text: "Configure an Azure Virtual Machine to reboot the container every 60 seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container group with the restart policy configured as 'Never'. Azure Container Instances supports three restart policies: 'Always' (default, for web servers and long-running services), 'OnFailure' (restarts only if the process exits with a non-zero code), and 'Never' (for batch processing or run-to-completion tasks that should run once and terminate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["Azure Containers", "Containers", "Dr Failover"]
  },
  {
    id: "az-104-382",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Containers to deploy a daily batch data conversion script in Azure Container Instances that executes once, processes data, exits cleanly, and must not restart automatically.",
    question: "Which architectural approach should the team select to manage this demand efficiently? ACI container group restart policies: Always, OnFailure, and Never is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Virtual Machine to reboot the container every 60 seconds." },
      { id: 'B', text: "Deploy the container group with the restart policy configured as 'Never'." },
      { id: 'C', text: "Deploy the container group with the restart policy configured as 'Always'." },
      { id: 'D', text: "Deploy the container to Azure Kubernetes Service as an infinite loop daemon." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the container group with the restart policy configured as 'Never'. Azure Container Instances supports three restart policies: 'Always' (default, for web servers and long-running services), 'OnFailure' (restarts only if the process exits with a non-zero code), and 'Never' (for batch processing or run-to-completion tasks that should run once and terminate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["Azure Containers", "Containers", "High Load Scale"]
  },
  {
    id: "az-104-383",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Containers to deploy a daily batch data conversion script in Azure Container Instances that executes once, processes data, exits cleanly, and must not restart automatically.",
    question: "Which solution properly implements these mandatory security and governance controls? ACI container group restart policies: Always, OnFailure, and Never is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the container to Azure Kubernetes Service as an infinite loop daemon." },
      { id: 'B', text: "Deploy the container group with the restart policy configured as 'Never'." },
      { id: 'C', text: "Deploy the container group with the restart policy configured as 'Always'." },
      { id: 'D', text: "Configure an Azure Virtual Machine to reboot the container every 60 seconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the container group with the restart policy configured as 'Never'. Azure Container Instances supports three restart policies: 'Always' (default, for web servers and long-running services), 'OnFailure' (restarts only if the process exits with a non-zero code), and 'Never' (for batch processing or run-to-completion tasks that should run once and terminate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["Azure Containers", "Containers", "Security Compliance"]
  },
  {
    id: "az-104-384",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Containers to deploy a daily batch data conversion script in Azure Container Instances that executes once, processes data, exits cleanly, and must not restart automatically.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? ACI container group restart policies: Always, OnFailure, and Never is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the container group with the restart policy configured as 'Never'." },
      { id: 'B', text: "Configure an Azure Virtual Machine to reboot the container every 60 seconds." },
      { id: 'C', text: "Deploy the container group with the restart policy configured as 'Always'." },
      { id: 'D', text: "Deploy the container to Azure Kubernetes Service as an infinite loop daemon." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the container group with the restart policy configured as 'Never'. Azure Container Instances supports three restart policies: 'Always' (default, for web servers and long-running services), 'OnFailure' (restarts only if the process exits with a non-zero code), and 'Never' (for batch processing or run-to-completion tasks that should run once and terminate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["Azure Containers", "Containers", "Hybrid Migration"]
  },
  {
    id: "az-104-385",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Container Instances (ACI) Restart Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Containers to deploy a daily batch data conversion script in Azure Container Instances that executes once, processes data, exits cleanly, and must not restart automatically.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? ACI container group restart policies: Always, OnFailure, and Never is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the container to Azure Kubernetes Service as an infinite loop daemon." },
      { id: 'B', text: "Deploy the container group with the restart policy configured as 'Never'." },
      { id: 'C', text: "Deploy the container group with the restart policy configured as 'Always'." },
      { id: 'D', text: "Configure an Azure Virtual Machine to reboot the container every 60 seconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the container group with the restart policy configured as 'Never'. Azure Container Instances supports three restart policies: 'Always' (default, for web servers and long-running services), 'OnFailure' (restarts only if the process exits with a non-zero code), and 'Never' (for batch processing or run-to-completion tasks that should run once and terminate).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-restart-policy",
    tags: ["Azure Containers", "Containers", "Resilience Failure"]
  },
  {
    id: "az-104-386",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pools: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Kubernetes Service to host critical Kubernetes cluster system pods on dedicated nodes while running specialized GPU machine learning training jobs on distinct, autoscaling GPU nodes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? System vs User node pools and GPU workload isolation is under evaluation.",
    options: [
      { id: 'A', text: "Run the machine learning models inside an unmanaged Azure App Service instance." },
      { id: 'B', text: "Deploy two separate AKS clusters and connect them via an unencrypted public VPN." },
      { id: 'C', text: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs." },
      { id: 'D', text: "Deploy all Kubernetes pods onto a single shared general-purpose VM node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs. Azure Kubernetes Service (AKS) uses node pools to group VMs with identical configurations. System node pools serve the primary purpose of hosting critical system pods (CoreDNS, metrics-server), while User node pools host application workloads, allowing dedicated hardware (like GPU or high-memory instances) with independent autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
    tags: ["Azure Kubernetes Service", "AKS", "Dr Failover"]
  },
  {
    id: "az-104-387",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pools: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Kubernetes Service to host critical Kubernetes cluster system pods on dedicated nodes while running specialized GPU machine learning training jobs on distinct, autoscaling GPU nodes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? System vs User node pools and GPU workload isolation is under evaluation.",
    options: [
      { id: 'A', text: "Deploy two separate AKS clusters and connect them via an unencrypted public VPN." },
      { id: 'B', text: "Run the machine learning models inside an unmanaged Azure App Service instance." },
      { id: 'C', text: "Deploy all Kubernetes pods onto a single shared general-purpose VM node." },
      { id: 'D', text: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs. Azure Kubernetes Service (AKS) uses node pools to group VMs with identical configurations. System node pools serve the primary purpose of hosting critical system pods (CoreDNS, metrics-server), while User node pools host application workloads, allowing dedicated hardware (like GPU or high-memory instances) with independent autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
    tags: ["Azure Kubernetes Service", "AKS", "High Load Scale"]
  },
  {
    id: "az-104-388",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pools: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Kubernetes Service to host critical Kubernetes cluster system pods on dedicated nodes while running specialized GPU machine learning training jobs on distinct, autoscaling GPU nodes.",
    question: "Which solution properly implements these mandatory security and governance controls? System vs User node pools and GPU workload isolation is under evaluation.",
    options: [
      { id: 'A', text: "Deploy two separate AKS clusters and connect them via an unencrypted public VPN." },
      { id: 'B', text: "Deploy all Kubernetes pods onto a single shared general-purpose VM node." },
      { id: 'C', text: "Run the machine learning models inside an unmanaged Azure App Service instance." },
      { id: 'D', text: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs. Azure Kubernetes Service (AKS) uses node pools to group VMs with identical configurations. System node pools serve the primary purpose of hosting critical system pods (CoreDNS, metrics-server), while User node pools host application workloads, allowing dedicated hardware (like GPU or high-memory instances) with independent autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
    tags: ["Azure Kubernetes Service", "AKS", "Security Compliance"]
  },
  {
    id: "az-104-389",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pools: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Kubernetes Service to host critical Kubernetes cluster system pods on dedicated nodes while running specialized GPU machine learning training jobs on distinct, autoscaling GPU nodes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? System vs User node pools and GPU workload isolation is under evaluation.",
    options: [
      { id: 'A', text: "Deploy two separate AKS clusters and connect them via an unencrypted public VPN." },
      { id: 'B', text: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs." },
      { id: 'C', text: "Deploy all Kubernetes pods onto a single shared general-purpose VM node." },
      { id: 'D', text: "Run the machine learning models inside an unmanaged Azure App Service instance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs. Azure Kubernetes Service (AKS) uses node pools to group VMs with identical configurations. System node pools serve the primary purpose of hosting critical system pods (CoreDNS, metrics-server), while User node pools host application workloads, allowing dedicated hardware (like GPU or high-memory instances) with independent autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
    tags: ["Azure Kubernetes Service", "AKS", "Hybrid Migration"]
  },
  {
    id: "az-104-390",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Kubernetes Service (AKS) Cluster Node Pools: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Kubernetes Service to host critical Kubernetes cluster system pods on dedicated nodes while running specialized GPU machine learning training jobs on distinct, autoscaling GPU nodes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? System vs User node pools and GPU workload isolation is under evaluation.",
    options: [
      { id: 'A', text: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs." },
      { id: 'B', text: "Deploy all Kubernetes pods onto a single shared general-purpose VM node." },
      { id: 'C', text: "Deploy two separate AKS clusters and connect them via an unencrypted public VPN." },
      { id: 'D', text: "Run the machine learning models inside an unmanaged Azure App Service instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a dedicated System node pool for core pods and add a specialized User node pool with GPU VM SKUs. Azure Kubernetes Service (AKS) uses node pools to group VMs with identical configurations. System node pools serve the primary purpose of hosting critical system pods (CoreDNS, metrics-server), while User node pools host application workloads, allowing dedicated hardware (like GPU or high-memory instances) with independent autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
    tags: ["Azure Kubernetes Service", "AKS", "Resilience Failure"]
  },
  {
    id: "az-104-391",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Peering and Gateway Transit: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Virtual Networks to connect a hub virtual network containing an Azure VPN Gateway to multiple spoke virtual networks so on-premises clients can reach spoke workloads seamlessly.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? VNet peering with Allow Gateway Transit and Use Remote Gateways is under evaluation.",
    options: [
      { id: 'A', text: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets." },
      { id: 'B', text: "Connect all virtual networks through public internet public IP addresses." },
      { id: 'C', text: "Configure point-to-site VPN clients on every virtual machine in the spokes." },
      { id: 'D', text: "Deploy separate VPN gateways inside every individual spoke virtual network." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets. Virtual Network Peering connects virtual networks seamlessly with low latency over the Microsoft backbone network. To share a single VPN or ExpressRoute gateway in a hub VNet with spoke VNets, configure 'Allow gateway transit' on the hub peering and 'Use remote gateways' on the spoke peering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Virtual Networks", "Networking", "Dr Failover"]
  },
  {
    id: "az-104-392",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Peering and Gateway Transit: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Virtual Networks to connect a hub virtual network containing an Azure VPN Gateway to multiple spoke virtual networks so on-premises clients can reach spoke workloads seamlessly.",
    question: "Which architectural approach should the team select to manage this demand efficiently? VNet peering with Allow Gateway Transit and Use Remote Gateways is under evaluation.",
    options: [
      { id: 'A', text: "Deploy separate VPN gateways inside every individual spoke virtual network." },
      { id: 'B', text: "Configure point-to-site VPN clients on every virtual machine in the spokes." },
      { id: 'C', text: "Connect all virtual networks through public internet public IP addresses." },
      { id: 'D', text: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets. Virtual Network Peering connects virtual networks seamlessly with low latency over the Microsoft backbone network. To share a single VPN or ExpressRoute gateway in a hub VNet with spoke VNets, configure 'Allow gateway transit' on the hub peering and 'Use remote gateways' on the spoke peering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Virtual Networks", "Networking", "High Load Scale"]
  },
  {
    id: "az-104-393",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Peering and Gateway Transit: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Virtual Networks to connect a hub virtual network containing an Azure VPN Gateway to multiple spoke virtual networks so on-premises clients can reach spoke workloads seamlessly.",
    question: "Which solution properly implements these mandatory security and governance controls? VNet peering with Allow Gateway Transit and Use Remote Gateways is under evaluation.",
    options: [
      { id: 'A', text: "Deploy separate VPN gateways inside every individual spoke virtual network." },
      { id: 'B', text: "Configure point-to-site VPN clients on every virtual machine in the spokes." },
      { id: 'C', text: "Connect all virtual networks through public internet public IP addresses." },
      { id: 'D', text: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets. Virtual Network Peering connects virtual networks seamlessly with low latency over the Microsoft backbone network. To share a single VPN or ExpressRoute gateway in a hub VNet with spoke VNets, configure 'Allow gateway transit' on the hub peering and 'Use remote gateways' on the spoke peering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Virtual Networks", "Networking", "Security Compliance"]
  },
  {
    id: "az-104-394",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Peering and Gateway Transit: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Virtual Networks to connect a hub virtual network containing an Azure VPN Gateway to multiple spoke virtual networks so on-premises clients can reach spoke workloads seamlessly.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? VNet peering with Allow Gateway Transit and Use Remote Gateways is under evaluation.",
    options: [
      { id: 'A', text: "Connect all virtual networks through public internet public IP addresses." },
      { id: 'B', text: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets." },
      { id: 'C', text: "Configure point-to-site VPN clients on every virtual machine in the spokes." },
      { id: 'D', text: "Deploy separate VPN gateways inside every individual spoke virtual network." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets. Virtual Network Peering connects virtual networks seamlessly with low latency over the Microsoft backbone network. To share a single VPN or ExpressRoute gateway in a hub VNet with spoke VNets, configure 'Allow gateway transit' on the hub peering and 'Use remote gateways' on the spoke peering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Virtual Networks", "Networking", "Hybrid Migration"]
  },
  {
    id: "az-104-395",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Virtual Network Peering and Gateway Transit: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Virtual Networks to connect a hub virtual network containing an Azure VPN Gateway to multiple spoke virtual networks so on-premises clients can reach spoke workloads seamlessly.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? VNet peering with Allow Gateway Transit and Use Remote Gateways is under evaluation.",
    options: [
      { id: 'A', text: "Configure point-to-site VPN clients on every virtual machine in the spokes." },
      { id: 'B', text: "Deploy separate VPN gateways inside every individual spoke virtual network." },
      { id: 'C', text: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets." },
      { id: 'D', text: "Connect all virtual networks through public internet public IP addresses." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure VNet peering with 'Allow gateway transit' on the hub VNet and 'Use remote gateways' on the spoke VNets. Virtual Network Peering connects virtual networks seamlessly with low latency over the Microsoft backbone network. To share a single VPN or ExpressRoute gateway in a hub VNet with spoke VNets, configure 'Allow gateway transit' on the hub peering and 'Use remote gateways' on the spoke peering.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview",
    tags: ["Azure Virtual Networks", "Networking", "Resilience Failure"]
  },
  {
    id: "az-104-396",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Network Security Groups (NSGs) and Rule Processing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Network Security to create a firewall rule in a Network Security Group (NSG) that allows inbound HTTPS (port 443) from a specific partner IP while blocking all other inbound internet traffic.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? NSG priority-based rule processing and default security rules is under evaluation.",
    options: [
      { id: 'A', text: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500." },
      { id: 'B', text: "Delete all default rules in the Network Security Group." },
      { id: 'C', text: "Create a rule with priority 65500 that permits all inbound internet traffic." },
      { id: 'D', text: "Assign an Azure Policy definition that blocks outbound internet access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500. Network Security Groups (NSGs) evaluate rules in priority order from lowest number (highest priority, e.g. 100) to highest number (e.g. 4096). Once a rule matches traffic, subsequent rules are not evaluated. Built-in default rules (like DenyAllInBound at 65500) ensure unallowed traffic is dropped.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Network Security", "NSG", "Dr Failover"]
  },
  {
    id: "az-104-397",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Network Security Groups (NSGs) and Rule Processing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Network Security to create a firewall rule in a Network Security Group (NSG) that allows inbound HTTPS (port 443) from a specific partner IP while blocking all other inbound internet traffic.",
    question: "Which architectural approach should the team select to manage this demand efficiently? NSG priority-based rule processing and default security rules is under evaluation.",
    options: [
      { id: 'A', text: "Assign an Azure Policy definition that blocks outbound internet access." },
      { id: 'B', text: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500." },
      { id: 'C', text: "Create a rule with priority 65500 that permits all inbound internet traffic." },
      { id: 'D', text: "Delete all default rules in the Network Security Group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500. Network Security Groups (NSGs) evaluate rules in priority order from lowest number (highest priority, e.g. 100) to highest number (e.g. 4096). Once a rule matches traffic, subsequent rules are not evaluated. Built-in default rules (like DenyAllInBound at 65500) ensure unallowed traffic is dropped.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Network Security", "NSG", "High Load Scale"]
  },
  {
    id: "az-104-398",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Network Security Groups (NSGs) and Rule Processing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Network Security to create a firewall rule in a Network Security Group (NSG) that allows inbound HTTPS (port 443) from a specific partner IP while blocking all other inbound internet traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? NSG priority-based rule processing and default security rules is under evaluation.",
    options: [
      { id: 'A', text: "Delete all default rules in the Network Security Group." },
      { id: 'B', text: "Assign an Azure Policy definition that blocks outbound internet access." },
      { id: 'C', text: "Create a rule with priority 65500 that permits all inbound internet traffic." },
      { id: 'D', text: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500. Network Security Groups (NSGs) evaluate rules in priority order from lowest number (highest priority, e.g. 100) to highest number (e.g. 4096). Once a rule matches traffic, subsequent rules are not evaluated. Built-in default rules (like DenyAllInBound at 65500) ensure unallowed traffic is dropped.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Network Security", "NSG", "Security Compliance"]
  },
  {
    id: "az-104-399",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Network Security Groups (NSGs) and Rule Processing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Network Security to create a firewall rule in a Network Security Group (NSG) that allows inbound HTTPS (port 443) from a specific partner IP while blocking all other inbound internet traffic.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? NSG priority-based rule processing and default security rules is under evaluation.",
    options: [
      { id: 'A', text: "Create a rule with priority 65500 that permits all inbound internet traffic." },
      { id: 'B', text: "Delete all default rules in the Network Security Group." },
      { id: 'C', text: "Assign an Azure Policy definition that blocks outbound internet access." },
      { id: 'D', text: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500. Network Security Groups (NSGs) evaluate rules in priority order from lowest number (highest priority, e.g. 100) to highest number (e.g. 4096). Once a rule matches traffic, subsequent rules are not evaluated. Built-in default rules (like DenyAllInBound at 65500) ensure unallowed traffic is dropped.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Network Security", "NSG", "Hybrid Migration"]
  },
  {
    id: "az-104-400",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d4",
    domainName: "Configure and manage virtual networking",
    title: "Network Security Groups (NSGs) and Rule Processing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Network Security to create a firewall rule in a Network Security Group (NSG) that allows inbound HTTPS (port 443) from a specific partner IP while blocking all other inbound internet traffic.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? NSG priority-based rule processing and default security rules is under evaluation.",
    options: [
      { id: 'A', text: "Create a rule with priority 65500 that permits all inbound internet traffic." },
      { id: 'B', text: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500." },
      { id: 'C', text: "Delete all default rules in the Network Security Group." },
      { id: 'D', text: "Assign an Azure Policy definition that blocks outbound internet access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an inbound rule allowing port 443 with priority 100, relying on the default DenyAllInBound rule at priority 65500. Network Security Groups (NSGs) evaluate rules in priority order from lowest number (highest priority, e.g. 100) to highest number (e.g. 4096). Once a rule matches traffic, subsequent rules are not evaluated. Built-in default rules (like DenyAllInBound at 65500) ensure unallowed traffic is dropped.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
    tags: ["Azure Network Security", "NSG", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_16;
