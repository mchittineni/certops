export const AZURE_AZ900_QUESTIONS_12 = [
  {
    id: "az-900-276",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Scalability (Vertical vs Horizontal Scaling): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Compute Scaling to dynamically increase system throughput during unexpected traffic surges by provisioning additional compute instances in parallel.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Horizontal scale-out vs vertical scale-up mechanisms is under consideration.",
    options: [
      { id: 'A', text: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load." },
      { id: 'B', text: "Apply vertical scaling (scale-up) by shutting down the VM to add more CPU cores and memory to a single server." },
      { id: 'C', text: "Maintain static VM instance counts and throttle incoming web requests during high demand periods." },
      { id: 'D', text: "Overprovision VM instance capacity by 400% permanently to handle peak traffic bursts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load. Horizontal scaling (scaling out) involves adding more VM instances or containers to handle increased traffic, whereas vertical scaling (scaling up) involves increasing the capacity (CPU/RAM) of an existing machine. Horizontal scaling provides higher elasticity and fault tolerance because traffic is distributed across multiple instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling",
    tags: ["Azure Compute Scaling", "Scalability", "Dr Failover"]
  },
  {
    id: "az-900-277",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Scalability (Vertical vs Horizontal Scaling): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Compute Scaling to dynamically increase system throughput during unexpected traffic surges by provisioning additional compute instances in parallel.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Horizontal scale-out vs vertical scale-up mechanisms is under consideration.",
    options: [
      { id: 'A', text: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load." },
      { id: 'B', text: "Apply vertical scaling (scale-up) by shutting down the VM to add more CPU cores and memory to a single server." },
      { id: 'C', text: "Maintain static VM instance counts and throttle incoming web requests during high demand periods." },
      { id: 'D', text: "Overprovision VM instance capacity by 400% permanently to handle peak traffic bursts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load. Horizontal scaling (scaling out) involves adding more VM instances or containers to handle increased traffic, whereas vertical scaling (scaling up) involves increasing the capacity (CPU/RAM) of an existing machine. Horizontal scaling provides higher elasticity and fault tolerance because traffic is distributed across multiple instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling",
    tags: ["Azure Compute Scaling", "Scalability", "High Load Scale"]
  },
  {
    id: "az-900-278",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Scalability (Vertical vs Horizontal Scaling): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Compute Scaling to dynamically increase system throughput during unexpected traffic surges by provisioning additional compute instances in parallel.",
    question: "Which solution properly implements these mandatory security and governance controls? Horizontal scale-out vs vertical scale-up mechanisms is under consideration.",
    options: [
      { id: 'A', text: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load." },
      { id: 'B', text: "Apply vertical scaling (scale-up) by shutting down the VM to add more CPU cores and memory to a single server." },
      { id: 'C', text: "Maintain static VM instance counts and throttle incoming web requests during high demand periods." },
      { id: 'D', text: "Overprovision VM instance capacity by 400% permanently to handle peak traffic bursts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load. Horizontal scaling (scaling out) involves adding more VM instances or containers to handle increased traffic, whereas vertical scaling (scaling up) involves increasing the capacity (CPU/RAM) of an existing machine. Horizontal scaling provides higher elasticity and fault tolerance because traffic is distributed across multiple instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling",
    tags: ["Azure Compute Scaling", "Scalability", "Security Compliance"]
  },
  {
    id: "az-900-279",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Scalability (Vertical vs Horizontal Scaling): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Compute Scaling to dynamically increase system throughput during unexpected traffic surges by provisioning additional compute instances in parallel.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Horizontal scale-out vs vertical scale-up mechanisms is under consideration.",
    options: [
      { id: 'A', text: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load." },
      { id: 'B', text: "Apply vertical scaling (scale-up) by shutting down the VM to add more CPU cores and memory to a single server." },
      { id: 'C', text: "Maintain static VM instance counts and throttle incoming web requests during high demand periods." },
      { id: 'D', text: "Overprovision VM instance capacity by 400% permanently to handle peak traffic bursts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load. Horizontal scaling (scaling out) involves adding more VM instances or containers to handle increased traffic, whereas vertical scaling (scaling up) involves increasing the capacity (CPU/RAM) of an existing machine. Horizontal scaling provides higher elasticity and fault tolerance because traffic is distributed across multiple instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling",
    tags: ["Azure Compute Scaling", "Scalability", "Hybrid Migration"]
  },
  {
    id: "az-900-280",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Scalability (Vertical vs Horizontal Scaling): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Compute Scaling to dynamically increase system throughput during unexpected traffic surges by provisioning additional compute instances in parallel.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Horizontal scale-out vs vertical scale-up mechanisms is under consideration.",
    options: [
      { id: 'A', text: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load." },
      { id: 'B', text: "Apply vertical scaling (scale-up) by shutting down the VM to add more CPU cores and memory to a single server." },
      { id: 'C', text: "Maintain static VM instance counts and throttle incoming web requests during high demand periods." },
      { id: 'D', text: "Overprovision VM instance capacity by 400% permanently to handle peak traffic bursts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement horizontal scaling (scale-out) by adding more identical compute instances to distribute processing load. Horizontal scaling (scaling out) involves adding more VM instances or containers to handle increased traffic, whereas vertical scaling (scaling up) involves increasing the capacity (CPU/RAM) of an existing machine. Horizontal scaling provides higher elasticity and fault tolerance because traffic is distributed across multiple instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling",
    tags: ["Azure Compute Scaling", "Scalability", "Resilience Failure"]
  },
  {
    id: "az-900-281",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity in Cloud Computing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Elasticity to automatically provision additional compute instances during sudden daytime traffic spikes and deallocate them during idle nighttime hours.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dynamic elastic resource allocation is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics." },
      { id: 'B', text: "Manually allocate maximum compute capacity that remains running at all times regardless of traffic levels." },
      { id: 'C', text: "Submit IT change control requests to deploy additional physical servers when CPU exceeds 80%." },
      { id: 'D', text: "Configure static resource quotas that prevent any additional virtual machines from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics. Elasticity is the ability of cloud systems to dynamically allocate and deallocate compute resources in response to changing demand. Autoscale automatically adds resources to handle traffic surges and deallocates them when traffic subsides, optimizing performance and cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview",
    tags: ["Azure Elasticity", "Elasticity", "Dr Failover"]
  },
  {
    id: "az-900-282",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity in Cloud Computing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Elasticity to automatically provision additional compute instances during sudden daytime traffic spikes and deallocate them during idle nighttime hours.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dynamic elastic resource allocation is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics." },
      { id: 'B', text: "Manually allocate maximum compute capacity that remains running at all times regardless of traffic levels." },
      { id: 'C', text: "Submit IT change control requests to deploy additional physical servers when CPU exceeds 80%." },
      { id: 'D', text: "Configure static resource quotas that prevent any additional virtual machines from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics. Elasticity is the ability of cloud systems to dynamically allocate and deallocate compute resources in response to changing demand. Autoscale automatically adds resources to handle traffic surges and deallocates them when traffic subsides, optimizing performance and cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview",
    tags: ["Azure Elasticity", "Elasticity", "High Load Scale"]
  },
  {
    id: "az-900-283",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity in Cloud Computing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Elasticity to automatically provision additional compute instances during sudden daytime traffic spikes and deallocate them during idle nighttime hours.",
    question: "Which solution properly implements these mandatory security and governance controls? Dynamic elastic resource allocation is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics." },
      { id: 'B', text: "Manually allocate maximum compute capacity that remains running at all times regardless of traffic levels." },
      { id: 'C', text: "Submit IT change control requests to deploy additional physical servers when CPU exceeds 80%." },
      { id: 'D', text: "Configure static resource quotas that prevent any additional virtual machines from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics. Elasticity is the ability of cloud systems to dynamically allocate and deallocate compute resources in response to changing demand. Autoscale automatically adds resources to handle traffic surges and deallocates them when traffic subsides, optimizing performance and cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview",
    tags: ["Azure Elasticity", "Elasticity", "Security Compliance"]
  },
  {
    id: "az-900-284",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity in Cloud Computing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Elasticity to automatically provision additional compute instances during sudden daytime traffic spikes and deallocate them during idle nighttime hours.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dynamic elastic resource allocation is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics." },
      { id: 'B', text: "Manually allocate maximum compute capacity that remains running at all times regardless of traffic levels." },
      { id: 'C', text: "Submit IT change control requests to deploy additional physical servers when CPU exceeds 80%." },
      { id: 'D', text: "Configure static resource quotas that prevent any additional virtual machines from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics. Elasticity is the ability of cloud systems to dynamically allocate and deallocate compute resources in response to changing demand. Autoscale automatically adds resources to handle traffic surges and deallocates them when traffic subsides, optimizing performance and cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview",
    tags: ["Azure Elasticity", "Elasticity", "Hybrid Migration"]
  },
  {
    id: "az-900-285",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Elasticity in Cloud Computing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Elasticity to automatically provision additional compute instances during sudden daytime traffic spikes and deallocate them during idle nighttime hours.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dynamic elastic resource allocation is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics." },
      { id: 'B', text: "Manually allocate maximum compute capacity that remains running at all times regardless of traffic levels." },
      { id: 'C', text: "Submit IT change control requests to deploy additional physical servers when CPU exceeds 80%." },
      { id: 'D', text: "Configure static resource quotas that prevent any additional virtual machines from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Autoscale to dynamically scale resources out and in based on real-time CPU utilization and queue metrics. Elasticity is the ability of cloud systems to dynamically allocate and deallocate compute resources in response to changing demand. Autoscale automatically adds resources to handle traffic surges and deallocates them when traffic subsides, optimizing performance and cost.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview",
    tags: ["Azure Elasticity", "Elasticity", "Resilience Failure"]
  },
  {
    id: "az-900-286",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility and Fast Time to Market: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Cloud Agility to allow development teams to spin up fully configured development and testing environments in minutes rather than waiting weeks for hardware procurement.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Rapid resource provisioning accelerating software delivery is under consideration.",
    options: [
      { id: 'A', text: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI." },
      { id: 'B', text: "Establish a quarterly physical server procurement process requiring executive hardware purchasing approval." },
      { id: 'C', text: "Require developers to share a single on-premises staging server for all concurrent release branches." },
      { id: 'D', text: "Order dedicated network switches and wait for physical rack installation before starting project validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI. Cloud agility refers to the ability to rapidly develop, test, and launch software applications. By provisioning cloud infrastructure in minutes through self-service APIs and Infrastructure as Code, organizations accelerate innovation and reduce time to market.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Cloud Agility", "Agility", "Dr Failover"]
  },
  {
    id: "az-900-287",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility and Fast Time to Market: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Cloud Agility to allow development teams to spin up fully configured development and testing environments in minutes rather than waiting weeks for hardware procurement.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Rapid resource provisioning accelerating software delivery is under consideration.",
    options: [
      { id: 'A', text: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI." },
      { id: 'B', text: "Establish a quarterly physical server procurement process requiring executive hardware purchasing approval." },
      { id: 'C', text: "Require developers to share a single on-premises staging server for all concurrent release branches." },
      { id: 'D', text: "Order dedicated network switches and wait for physical rack installation before starting project validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI. Cloud agility refers to the ability to rapidly develop, test, and launch software applications. By provisioning cloud infrastructure in minutes through self-service APIs and Infrastructure as Code, organizations accelerate innovation and reduce time to market.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Cloud Agility", "Agility", "High Load Scale"]
  },
  {
    id: "az-900-288",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility and Fast Time to Market: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Cloud Agility to allow development teams to spin up fully configured development and testing environments in minutes rather than waiting weeks for hardware procurement.",
    question: "Which solution properly implements these mandatory security and governance controls? Rapid resource provisioning accelerating software delivery is under consideration.",
    options: [
      { id: 'A', text: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI." },
      { id: 'B', text: "Establish a quarterly physical server procurement process requiring executive hardware purchasing approval." },
      { id: 'C', text: "Require developers to share a single on-premises staging server for all concurrent release branches." },
      { id: 'D', text: "Order dedicated network switches and wait for physical rack installation before starting project validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI. Cloud agility refers to the ability to rapidly develop, test, and launch software applications. By provisioning cloud infrastructure in minutes through self-service APIs and Infrastructure as Code, organizations accelerate innovation and reduce time to market.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Cloud Agility", "Agility", "Security Compliance"]
  },
  {
    id: "az-900-289",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility and Fast Time to Market: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Cloud Agility to allow development teams to spin up fully configured development and testing environments in minutes rather than waiting weeks for hardware procurement.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Rapid resource provisioning accelerating software delivery is under consideration.",
    options: [
      { id: 'A', text: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI." },
      { id: 'B', text: "Establish a quarterly physical server procurement process requiring executive hardware purchasing approval." },
      { id: 'C', text: "Require developers to share a single on-premises staging server for all concurrent release branches." },
      { id: 'D', text: "Order dedicated network switches and wait for physical rack installation before starting project validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI. Cloud agility refers to the ability to rapidly develop, test, and launch software applications. By provisioning cloud infrastructure in minutes through self-service APIs and Infrastructure as Code, organizations accelerate innovation and reduce time to market.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Cloud Agility", "Agility", "Hybrid Migration"]
  },
  {
    id: "az-900-290",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Agility and Fast Time to Market: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Cloud Agility to allow development teams to spin up fully configured development and testing environments in minutes rather than waiting weeks for hardware procurement.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Rapid resource provisioning accelerating software delivery is under consideration.",
    options: [
      { id: 'A', text: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI." },
      { id: 'B', text: "Establish a quarterly physical server procurement process requiring executive hardware purchasing approval." },
      { id: 'C', text: "Require developers to share a single on-premises staging server for all concurrent release branches." },
      { id: 'D', text: "Order dedicated network switches and wait for physical rack installation before starting project validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Azure agility to rapidly provision compute, database, and networking resources via the Azure portal, ARM templates, or Azure CLI. Cloud agility refers to the ability to rapidly develop, test, and launch software applications. By provisioning cloud infrastructure in minutes through self-service APIs and Infrastructure as Code, organizations accelerate innovation and reduce time to market.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/business-outcomes/agility-outcomes",
    tags: ["Cloud Agility", "Agility", "Resilience Failure"]
  },
  {
    id: "az-900-291",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery and Business Continuity: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Disaster Recovery to restore enterprise applications and critical database services rapidly in an alternate geographical region following a catastrophic regional event.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Business continuity planning across paired regions is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives." },
      { id: 'B', text: "Rely solely on local daily backups stored on the same physical SAN within the primary datacenter." },
      { id: 'C', text: "Maintain a secondary datacenter that requires 3 weeks of manual hardware configuration to come online." },
      { id: 'D', text: "Configure single-region snapshots without replicating copies to a geographically separated location." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives. Disaster recovery (DR) is the process of restoring IT infrastructure and business-critical operations following a catastrophic failure or disaster. Azure provides regional pairs, Azure Site Recovery, and geo-redundant storage (GRS) to achieve low Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview",
    tags: ["Azure Disaster Recovery", "Disaster Recovery", "Dr Failover"]
  },
  {
    id: "az-900-292",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery and Business Continuity: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Disaster Recovery to restore enterprise applications and critical database services rapidly in an alternate geographical region following a catastrophic regional event.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Business continuity planning across paired regions is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives." },
      { id: 'B', text: "Rely solely on local daily backups stored on the same physical SAN within the primary datacenter." },
      { id: 'C', text: "Maintain a secondary datacenter that requires 3 weeks of manual hardware configuration to come online." },
      { id: 'D', text: "Configure single-region snapshots without replicating copies to a geographically separated location." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives. Disaster recovery (DR) is the process of restoring IT infrastructure and business-critical operations following a catastrophic failure or disaster. Azure provides regional pairs, Azure Site Recovery, and geo-redundant storage (GRS) to achieve low Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview",
    tags: ["Azure Disaster Recovery", "Disaster Recovery", "High Load Scale"]
  },
  {
    id: "az-900-293",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery and Business Continuity: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Disaster Recovery to restore enterprise applications and critical database services rapidly in an alternate geographical region following a catastrophic regional event.",
    question: "Which solution properly implements these mandatory security and governance controls? Business continuity planning across paired regions is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives." },
      { id: 'B', text: "Rely solely on local daily backups stored on the same physical SAN within the primary datacenter." },
      { id: 'C', text: "Maintain a secondary datacenter that requires 3 weeks of manual hardware configuration to come online." },
      { id: 'D', text: "Configure single-region snapshots without replicating copies to a geographically separated location." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives. Disaster recovery (DR) is the process of restoring IT infrastructure and business-critical operations following a catastrophic failure or disaster. Azure provides regional pairs, Azure Site Recovery, and geo-redundant storage (GRS) to achieve low Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview",
    tags: ["Azure Disaster Recovery", "Disaster Recovery", "Security Compliance"]
  },
  {
    id: "az-900-294",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery and Business Continuity: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Disaster Recovery to restore enterprise applications and critical database services rapidly in an alternate geographical region following a catastrophic regional event.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Business continuity planning across paired regions is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives." },
      { id: 'B', text: "Rely solely on local daily backups stored on the same physical SAN within the primary datacenter." },
      { id: 'C', text: "Maintain a secondary datacenter that requires 3 weeks of manual hardware configuration to come online." },
      { id: 'D', text: "Configure single-region snapshots without replicating copies to a geographically separated location." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives. Disaster recovery (DR) is the process of restoring IT infrastructure and business-critical operations following a catastrophic failure or disaster. Azure provides regional pairs, Azure Site Recovery, and geo-redundant storage (GRS) to achieve low Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview",
    tags: ["Azure Disaster Recovery", "Disaster Recovery", "Hybrid Migration"]
  },
  {
    id: "az-900-295",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Disaster Recovery and Business Continuity: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Disaster Recovery to restore enterprise applications and critical database services rapidly in an alternate geographical region following a catastrophic regional event.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Business continuity planning across paired regions is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives." },
      { id: 'B', text: "Rely solely on local daily backups stored on the same physical SAN within the primary datacenter." },
      { id: 'C', text: "Maintain a secondary datacenter that requires 3 weeks of manual hardware configuration to come online." },
      { id: 'D', text: "Configure single-region snapshots without replicating copies to a geographically separated location." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Site Recovery and cross-region geo-replication across Azure regional pairs to meet strict RTO and RPO objectives. Disaster recovery (DR) is the process of restoring IT infrastructure and business-critical operations following a catastrophic failure or disaster. Azure provides regional pairs, Azure Site Recovery, and geo-redundant storage (GRS) to achieve low Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview",
    tags: ["Azure Disaster Recovery", "Disaster Recovery", "Resilience Failure"]
  },
  {
    id: "az-900-296",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Predictability (Performance and Cost): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Cloud Predictability to provide predictable application latency and transparent monthly cloud operational costs for executive budgeting.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Performance and cost predictability frameworks is under consideration.",
    options: [
      { id: 'A', text: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability." },
      { id: 'B', text: "Allow development teams to deploy unlimited unmonitored resources without budget caps or tagging." },
      { id: 'C', text: "Rely on unmetered physical hardware where power, cooling, and maintenance fluctuations create unpredictable monthly expenses." },
      { id: 'D', text: "Deploy applications on shared oversubscribed on-premises hardware without resource guarantees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability. Predictability in the cloud encompasses performance predictability (ensuring workloads deliver consistent latency and throughput through autoscaling and resource reservations) and cost predictability (forecasting and controlling expenditures using budgets, alerts, and Azure Advisor cost recommendations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Cloud Predictability", "Predictability", "Dr Failover"]
  },
  {
    id: "az-900-297",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Predictability (Performance and Cost): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Cloud Predictability to provide predictable application latency and transparent monthly cloud operational costs for executive budgeting.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Performance and cost predictability frameworks is under consideration.",
    options: [
      { id: 'A', text: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability." },
      { id: 'B', text: "Allow development teams to deploy unlimited unmonitored resources without budget caps or tagging." },
      { id: 'C', text: "Rely on unmetered physical hardware where power, cooling, and maintenance fluctuations create unpredictable monthly expenses." },
      { id: 'D', text: "Deploy applications on shared oversubscribed on-premises hardware without resource guarantees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability. Predictability in the cloud encompasses performance predictability (ensuring workloads deliver consistent latency and throughput through autoscaling and resource reservations) and cost predictability (forecasting and controlling expenditures using budgets, alerts, and Azure Advisor cost recommendations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Cloud Predictability", "Predictability", "High Load Scale"]
  },
  {
    id: "az-900-298",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Predictability (Performance and Cost): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Cloud Predictability to provide predictable application latency and transparent monthly cloud operational costs for executive budgeting.",
    question: "Which solution properly implements these mandatory security and governance controls? Performance and cost predictability frameworks is under consideration.",
    options: [
      { id: 'A', text: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability." },
      { id: 'B', text: "Allow development teams to deploy unlimited unmonitored resources without budget caps or tagging." },
      { id: 'C', text: "Rely on unmetered physical hardware where power, cooling, and maintenance fluctuations create unpredictable monthly expenses." },
      { id: 'D', text: "Deploy applications on shared oversubscribed on-premises hardware without resource guarantees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability. Predictability in the cloud encompasses performance predictability (ensuring workloads deliver consistent latency and throughput through autoscaling and resource reservations) and cost predictability (forecasting and controlling expenditures using budgets, alerts, and Azure Advisor cost recommendations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Cloud Predictability", "Predictability", "Security Compliance"]
  },
  {
    id: "az-900-299",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Predictability (Performance and Cost): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Cloud Predictability to provide predictable application latency and transparent monthly cloud operational costs for executive budgeting.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Performance and cost predictability frameworks is under consideration.",
    options: [
      { id: 'A', text: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability." },
      { id: 'B', text: "Allow development teams to deploy unlimited unmonitored resources without budget caps or tagging." },
      { id: 'C', text: "Rely on unmetered physical hardware where power, cooling, and maintenance fluctuations create unpredictable monthly expenses." },
      { id: 'D', text: "Deploy applications on shared oversubscribed on-premises hardware without resource guarantees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability. Predictability in the cloud encompasses performance predictability (ensuring workloads deliver consistent latency and throughput through autoscaling and resource reservations) and cost predictability (forecasting and controlling expenditures using budgets, alerts, and Azure Advisor cost recommendations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Cloud Predictability", "Predictability", "Hybrid Migration"]
  },
  {
    id: "az-900-300",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d1",
    domainName: "Describe Cloud Concepts",
    title: "Predictability (Performance and Cost): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Cloud Predictability to provide predictable application latency and transparent monthly cloud operational costs for executive budgeting.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Performance and cost predictability frameworks is under consideration.",
    options: [
      { id: 'A', text: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability." },
      { id: 'B', text: "Allow development teams to deploy unlimited unmonitored resources without budget caps or tagging." },
      { id: 'C', text: "Rely on unmetered physical hardware where power, cooling, and maintenance fluctuations create unpredictable monthly expenses." },
      { id: 'D', text: "Deploy applications on shared oversubscribed on-premises hardware without resource guarantees." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Azure Cost Management budget alerts for cost predictability and configure Azure Autoscale with autoscaling thresholds for performance predictability. Predictability in the cloud encompasses performance predictability (ensuring workloads deliver consistent latency and throughput through autoscaling and resource reservations) and cost predictability (forecasting and controlling expenditures using budgets, alerts, and Azure Advisor cost recommendations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending",
    tags: ["Cloud Predictability", "Predictability", "Resilience Failure"]
  }
];

export default AZURE_AZ900_QUESTIONS_12;
