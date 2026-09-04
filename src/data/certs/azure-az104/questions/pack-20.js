export const AZURE_AZ104_QUESTIONS_20 = [
  {
    id: "az-104-476",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup for Virtual Machines (Recovery Services Vault): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Backup to configure daily automated backups of 20 Azure Virtual Machines with an operational recovery snapshot retention of 2 days and secondary vault retention of 30 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Recovery Services Vault backup policies with instant recovery snapshots is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom script to take manual snapshots of managed disks every night." },
      { id: 'B', text: "Deploy a third-party backup agent inside each VM writing to an external FTP server." },
      { id: 'C', text: "Shut down virtual machines every evening to copy OS VHD files manually." },
      { id: 'D', text: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines. Azure Backup provides centralized data protection through Recovery Services Vaults. VM backup policies define backup schedules, instant recovery snapshot retention (local operational tier), and vault retention ranges (long-term compliance tier), coordinating application-consistent snapshots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction",
    tags: ["Azure Backup", "Azure Backup", "Dr Failover"]
  },
  {
    id: "az-104-477",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup for Virtual Machines (Recovery Services Vault): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Backup to configure daily automated backups of 20 Azure Virtual Machines with an operational recovery snapshot retention of 2 days and secondary vault retention of 30 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Recovery Services Vault backup policies with instant recovery snapshots is under evaluation.",
    options: [
      { id: 'A', text: "Deploy a third-party backup agent inside each VM writing to an external FTP server." },
      { id: 'B', text: "Shut down virtual machines every evening to copy OS VHD files manually." },
      { id: 'C', text: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines." },
      { id: 'D', text: "Write a custom script to take manual snapshots of managed disks every night." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines. Azure Backup provides centralized data protection through Recovery Services Vaults. VM backup policies define backup schedules, instant recovery snapshot retention (local operational tier), and vault retention ranges (long-term compliance tier), coordinating application-consistent snapshots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction",
    tags: ["Azure Backup", "Azure Backup", "High Load Scale"]
  },
  {
    id: "az-104-478",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup for Virtual Machines (Recovery Services Vault): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Backup to configure daily automated backups of 20 Azure Virtual Machines with an operational recovery snapshot retention of 2 days and secondary vault retention of 30 days.",
    question: "Which solution properly implements these mandatory security and governance controls? Recovery Services Vault backup policies with instant recovery snapshots is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom script to take manual snapshots of managed disks every night." },
      { id: 'B', text: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines." },
      { id: 'C', text: "Deploy a third-party backup agent inside each VM writing to an external FTP server." },
      { id: 'D', text: "Shut down virtual machines every evening to copy OS VHD files manually." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines. Azure Backup provides centralized data protection through Recovery Services Vaults. VM backup policies define backup schedules, instant recovery snapshot retention (local operational tier), and vault retention ranges (long-term compliance tier), coordinating application-consistent snapshots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction",
    tags: ["Azure Backup", "Azure Backup", "Security Compliance"]
  },
  {
    id: "az-104-479",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup for Virtual Machines (Recovery Services Vault): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Backup to configure daily automated backups of 20 Azure Virtual Machines with an operational recovery snapshot retention of 2 days and secondary vault retention of 30 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Recovery Services Vault backup policies with instant recovery snapshots is under evaluation.",
    options: [
      { id: 'A', text: "Deploy a third-party backup agent inside each VM writing to an external FTP server." },
      { id: 'B', text: "Shut down virtual machines every evening to copy OS VHD files manually." },
      { id: 'C', text: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines." },
      { id: 'D', text: "Write a custom script to take manual snapshots of managed disks every night." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines. Azure Backup provides centralized data protection through Recovery Services Vaults. VM backup policies define backup schedules, instant recovery snapshot retention (local operational tier), and vault retention ranges (long-term compliance tier), coordinating application-consistent snapshots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction",
    tags: ["Azure Backup", "Azure Backup", "Hybrid Migration"]
  },
  {
    id: "az-104-480",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup for Virtual Machines (Recovery Services Vault): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Backup to configure daily automated backups of 20 Azure Virtual Machines with an operational recovery snapshot retention of 2 days and secondary vault retention of 30 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Recovery Services Vault backup policies with instant recovery snapshots is under evaluation.",
    options: [
      { id: 'A', text: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines." },
      { id: 'B', text: "Write a custom script to take manual snapshots of managed disks every night." },
      { id: 'C', text: "Shut down virtual machines every evening to copy OS VHD files manually." },
      { id: 'D', text: "Deploy a third-party backup agent inside each VM writing to an external FTP server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Backup Policy in an Azure Recovery Services Vault and apply it to the virtual machines. Azure Backup provides centralized data protection through Recovery Services Vaults. VM backup policies define backup schedules, instant recovery snapshot retention (local operational tier), and vault retention ranges (long-term compliance tier), coordinating application-consistent snapshots.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-introduction",
    tags: ["Azure Backup", "Azure Backup", "Resilience Failure"]
  },
  {
    id: "az-104-481",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Soft Delete and Multi-User Authorization (MUA): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Backup Security to prevent a compromised administrator credential from immediately and permanently deleting all VM recovery points in a Recovery Services Vault.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Backup Soft Delete and Multi-User Authorization (MUA) for vault protection is under evaluation.",
    options: [
      { id: 'A', text: "Store backup encryption passwords in an unencrypted Word document on a shared network drive." },
      { id: 'B', text: "Disable backup alerting in Azure Monitor." },
      { id: 'C', text: "Delete the Recovery Services Vault and rely solely on local disk caching." },
      { id: 'D', text: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard. Azure Backup soft delete retains deleted backup data for 14 additional days, allowing recovery if accidentally or maliciously deleted. Multi-User Authorization (MUA) adds an additional layer of protection using Azure Resource Guard, requiring approval from an external tenant or admin before critical backup actions can proceed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-security-feature-cloud",
    tags: ["Azure Backup Security", "Backup Security", "Dr Failover"]
  },
  {
    id: "az-104-482",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Soft Delete and Multi-User Authorization (MUA): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Backup Security to prevent a compromised administrator credential from immediately and permanently deleting all VM recovery points in a Recovery Services Vault.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Backup Soft Delete and Multi-User Authorization (MUA) for vault protection is under evaluation.",
    options: [
      { id: 'A', text: "Disable backup alerting in Azure Monitor." },
      { id: 'B', text: "Delete the Recovery Services Vault and rely solely on local disk caching." },
      { id: 'C', text: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard." },
      { id: 'D', text: "Store backup encryption passwords in an unencrypted Word document on a shared network drive." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard. Azure Backup soft delete retains deleted backup data for 14 additional days, allowing recovery if accidentally or maliciously deleted. Multi-User Authorization (MUA) adds an additional layer of protection using Azure Resource Guard, requiring approval from an external tenant or admin before critical backup actions can proceed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-security-feature-cloud",
    tags: ["Azure Backup Security", "Backup Security", "High Load Scale"]
  },
  {
    id: "az-104-483",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Soft Delete and Multi-User Authorization (MUA): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Backup Security to prevent a compromised administrator credential from immediately and permanently deleting all VM recovery points in a Recovery Services Vault.",
    question: "Which solution properly implements these mandatory security and governance controls? Backup Soft Delete and Multi-User Authorization (MUA) for vault protection is under evaluation.",
    options: [
      { id: 'A', text: "Disable backup alerting in Azure Monitor." },
      { id: 'B', text: "Store backup encryption passwords in an unencrypted Word document on a shared network drive." },
      { id: 'C', text: "Delete the Recovery Services Vault and rely solely on local disk caching." },
      { id: 'D', text: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard. Azure Backup soft delete retains deleted backup data for 14 additional days, allowing recovery if accidentally or maliciously deleted. Multi-User Authorization (MUA) adds an additional layer of protection using Azure Resource Guard, requiring approval from an external tenant or admin before critical backup actions can proceed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-security-feature-cloud",
    tags: ["Azure Backup Security", "Backup Security", "Security Compliance"]
  },
  {
    id: "az-104-484",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Soft Delete and Multi-User Authorization (MUA): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Backup Security to prevent a compromised administrator credential from immediately and permanently deleting all VM recovery points in a Recovery Services Vault.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Backup Soft Delete and Multi-User Authorization (MUA) for vault protection is under evaluation.",
    options: [
      { id: 'A', text: "Disable backup alerting in Azure Monitor." },
      { id: 'B', text: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard." },
      { id: 'C', text: "Delete the Recovery Services Vault and rely solely on local disk caching." },
      { id: 'D', text: "Store backup encryption passwords in an unencrypted Word document on a shared network drive." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard. Azure Backup soft delete retains deleted backup data for 14 additional days, allowing recovery if accidentally or maliciously deleted. Multi-User Authorization (MUA) adds an additional layer of protection using Azure Resource Guard, requiring approval from an external tenant or admin before critical backup actions can proceed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-security-feature-cloud",
    tags: ["Azure Backup Security", "Backup Security", "Hybrid Migration"]
  },
  {
    id: "az-104-485",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Backup Soft Delete and Multi-User Authorization (MUA): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Backup Security to prevent a compromised administrator credential from immediately and permanently deleting all VM recovery points in a Recovery Services Vault.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Backup Soft Delete and Multi-User Authorization (MUA) for vault protection is under evaluation.",
    options: [
      { id: 'A', text: "Store backup encryption passwords in an unencrypted Word document on a shared network drive." },
      { id: 'B', text: "Disable backup alerting in Azure Monitor." },
      { id: 'C', text: "Delete the Recovery Services Vault and rely solely on local disk caching." },
      { id: 'D', text: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Backup Soft Delete and configure Multi-User Authorization (MUA) with Resource Guard. Azure Backup soft delete retains deleted backup data for 14 additional days, allowing recovery if accidentally or maliciously deleted. Multi-User Authorization (MUA) adds an additional layer of protection using Azure Resource Guard, requiring approval from an external tenant or admin before critical backup actions can proceed.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/backup/backup-azure-security-feature-cloud",
    tags: ["Azure Backup Security", "Backup Security", "Resilience Failure"]
  },
  {
    id: "az-104-486",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Failover and Disaster Recovery: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Disaster Recovery to orchestrate the replication of production virtual machines to a secondary paired region and execute a test failover without disrupting ongoing production operations.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Site Recovery (ASR) replication and planned/unplanned failover is under evaluation.",
    options: [
      { id: 'A', text: "Initiate a full production failover that shuts down the primary datacenter during business hours." },
      { id: 'B', text: "Copy managed disk snapshots to an external USB drive and ship them to the secondary region." },
      { id: 'C', text: "Recreate all virtual machines in the secondary region manually from memory." },
      { id: 'D', text: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network. Azure Site Recovery (ASR) coordinates replication, failover, and recovery of Azure virtual machines and on-premises physical/virtual machines. ASR supports 'Test Failover', which deploys replicas into an isolated test virtual network to validate disaster recovery runbooks with zero impact on production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-failover-failback",
    tags: ["Azure Disaster Recovery", "Site Recovery", "Dr Failover"]
  },
  {
    id: "az-104-487",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Failover and Disaster Recovery: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Disaster Recovery to orchestrate the replication of production virtual machines to a secondary paired region and execute a test failover without disrupting ongoing production operations.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Site Recovery (ASR) replication and planned/unplanned failover is under evaluation.",
    options: [
      { id: 'A', text: "Recreate all virtual machines in the secondary region manually from memory." },
      { id: 'B', text: "Initiate a full production failover that shuts down the primary datacenter during business hours." },
      { id: 'C', text: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network." },
      { id: 'D', text: "Copy managed disk snapshots to an external USB drive and ship them to the secondary region." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network. Azure Site Recovery (ASR) coordinates replication, failover, and recovery of Azure virtual machines and on-premises physical/virtual machines. ASR supports 'Test Failover', which deploys replicas into an isolated test virtual network to validate disaster recovery runbooks with zero impact on production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-failover-failback",
    tags: ["Azure Disaster Recovery", "Site Recovery", "High Load Scale"]
  },
  {
    id: "az-104-488",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Failover and Disaster Recovery: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Disaster Recovery to orchestrate the replication of production virtual machines to a secondary paired region and execute a test failover without disrupting ongoing production operations.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Site Recovery (ASR) replication and planned/unplanned failover is under evaluation.",
    options: [
      { id: 'A', text: "Recreate all virtual machines in the secondary region manually from memory." },
      { id: 'B', text: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network." },
      { id: 'C', text: "Copy managed disk snapshots to an external USB drive and ship them to the secondary region." },
      { id: 'D', text: "Initiate a full production failover that shuts down the primary datacenter during business hours." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network. Azure Site Recovery (ASR) coordinates replication, failover, and recovery of Azure virtual machines and on-premises physical/virtual machines. ASR supports 'Test Failover', which deploys replicas into an isolated test virtual network to validate disaster recovery runbooks with zero impact on production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-failover-failback",
    tags: ["Azure Disaster Recovery", "Site Recovery", "Security Compliance"]
  },
  {
    id: "az-104-489",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Failover and Disaster Recovery: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Disaster Recovery to orchestrate the replication of production virtual machines to a secondary paired region and execute a test failover without disrupting ongoing production operations.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Site Recovery (ASR) replication and planned/unplanned failover is under evaluation.",
    options: [
      { id: 'A', text: "Recreate all virtual machines in the secondary region manually from memory." },
      { id: 'B', text: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network." },
      { id: 'C', text: "Initiate a full production failover that shuts down the primary datacenter during business hours." },
      { id: 'D', text: "Copy managed disk snapshots to an external USB drive and ship them to the secondary region." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network. Azure Site Recovery (ASR) coordinates replication, failover, and recovery of Azure virtual machines and on-premises physical/virtual machines. ASR supports 'Test Failover', which deploys replicas into an isolated test virtual network to validate disaster recovery runbooks with zero impact on production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-failover-failback",
    tags: ["Azure Disaster Recovery", "Site Recovery", "Hybrid Migration"]
  },
  {
    id: "az-104-490",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Site Recovery (ASR) Failover and Disaster Recovery: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Disaster Recovery to orchestrate the replication of production virtual machines to a secondary paired region and execute a test failover without disrupting ongoing production operations.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Site Recovery (ASR) replication and planned/unplanned failover is under evaluation.",
    options: [
      { id: 'A', text: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network." },
      { id: 'B', text: "Copy managed disk snapshots to an external USB drive and ship them to the secondary region." },
      { id: 'C', text: "Initiate a full production failover that shuts down the primary datacenter during business hours." },
      { id: 'D', text: "Recreate all virtual machines in the secondary region manually from memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Site Recovery (ASR) replication and execute a Test Failover using an isolated test virtual network. Azure Site Recovery (ASR) coordinates replication, failover, and recovery of Azure virtual machines and on-premises physical/virtual machines. ASR supports 'Test Failover', which deploys replicas into an isolated test virtual network to validate disaster recovery runbooks with zero impact on production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-failover-failback",
    tags: ["Azure Disaster Recovery", "Site Recovery", "Resilience Failure"]
  },
  {
    id: "az-104-491",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Optimization Recommendations: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Optimization to identify oversized, idle virtual machines to reduce subscription spending and uncover security vulnerabilities against the Microsoft Cloud Security Benchmark.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Advisor actionable recommendations across five pillars is under evaluation.",
    options: [
      { id: 'A', text: "Hire external consultants to review physical datacenter power consumption." },
      { id: 'B', text: "Manually inspect task managers on all 200 virtual machines to evaluate CPU usage." },
      { id: 'C', text: "Review actionable recommendations in the Cost and Security categories of Azure Advisor." },
      { id: 'D', text: "Terminate all virtual machines with less than 16 CPU cores." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review actionable recommendations in the Cost and Security categories of Azure Advisor. Azure Advisor analyzes resource configurations and usage telemetry to provide personalized, actionable recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence. It flags unattached disks, underutilized VMs, and compliance gaps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Optimization", "Advisor", "Dr Failover"]
  },
  {
    id: "az-104-492",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Optimization Recommendations: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Optimization to identify oversized, idle virtual machines to reduce subscription spending and uncover security vulnerabilities against the Microsoft Cloud Security Benchmark.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Advisor actionable recommendations across five pillars is under evaluation.",
    options: [
      { id: 'A', text: "Hire external consultants to review physical datacenter power consumption." },
      { id: 'B', text: "Manually inspect task managers on all 200 virtual machines to evaluate CPU usage." },
      { id: 'C', text: "Review actionable recommendations in the Cost and Security categories of Azure Advisor." },
      { id: 'D', text: "Terminate all virtual machines with less than 16 CPU cores." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review actionable recommendations in the Cost and Security categories of Azure Advisor. Azure Advisor analyzes resource configurations and usage telemetry to provide personalized, actionable recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence. It flags unattached disks, underutilized VMs, and compliance gaps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Optimization", "Advisor", "High Load Scale"]
  },
  {
    id: "az-104-493",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Optimization Recommendations: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Optimization to identify oversized, idle virtual machines to reduce subscription spending and uncover security vulnerabilities against the Microsoft Cloud Security Benchmark.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Advisor actionable recommendations across five pillars is under evaluation.",
    options: [
      { id: 'A', text: "Review actionable recommendations in the Cost and Security categories of Azure Advisor." },
      { id: 'B', text: "Manually inspect task managers on all 200 virtual machines to evaluate CPU usage." },
      { id: 'C', text: "Hire external consultants to review physical datacenter power consumption." },
      { id: 'D', text: "Terminate all virtual machines with less than 16 CPU cores." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review actionable recommendations in the Cost and Security categories of Azure Advisor. Azure Advisor analyzes resource configurations and usage telemetry to provide personalized, actionable recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence. It flags unattached disks, underutilized VMs, and compliance gaps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Optimization", "Advisor", "Security Compliance"]
  },
  {
    id: "az-104-494",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Optimization Recommendations: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Optimization to identify oversized, idle virtual machines to reduce subscription spending and uncover security vulnerabilities against the Microsoft Cloud Security Benchmark.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Advisor actionable recommendations across five pillars is under evaluation.",
    options: [
      { id: 'A', text: "Hire external consultants to review physical datacenter power consumption." },
      { id: 'B', text: "Terminate all virtual machines with less than 16 CPU cores." },
      { id: 'C', text: "Manually inspect task managers on all 200 virtual machines to evaluate CPU usage." },
      { id: 'D', text: "Review actionable recommendations in the Cost and Security categories of Azure Advisor." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review actionable recommendations in the Cost and Security categories of Azure Advisor. Azure Advisor analyzes resource configurations and usage telemetry to provide personalized, actionable recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence. It flags unattached disks, underutilized VMs, and compliance gaps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Optimization", "Advisor", "Hybrid Migration"]
  },
  {
    id: "az-104-495",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Advisor Optimization Recommendations: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Optimization to identify oversized, idle virtual machines to reduce subscription spending and uncover security vulnerabilities against the Microsoft Cloud Security Benchmark.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Advisor actionable recommendations across five pillars is under evaluation.",
    options: [
      { id: 'A', text: "Manually inspect task managers on all 200 virtual machines to evaluate CPU usage." },
      { id: 'B', text: "Terminate all virtual machines with less than 16 CPU cores." },
      { id: 'C', text: "Hire external consultants to review physical datacenter power consumption." },
      { id: 'D', text: "Review actionable recommendations in the Cost and Security categories of Azure Advisor." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review actionable recommendations in the Cost and Security categories of Azure Advisor. Azure Advisor analyzes resource configurations and usage telemetry to provide personalized, actionable recommendations across five categories: Reliability, Security, Performance, Cost, and Operational Excellence. It flags unattached disks, underutilized VMs, and compliance gaps.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview",
    tags: ["Azure Optimization", "Advisor", "Resilience Failure"]
  },
  {
    id: "az-104-496",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Update Manager (formerly Update Management Center): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Patch Management to schedule, manage, and assess operating system security updates and hotfixes across Windows and Linux virtual machines in Azure and hybrid environments without deploying WSUS.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Update Manager unified operating system patch compliance is under evaluation.",
    options: [
      { id: 'A', text: "Instruct individual server administrators to manually click Windows Update on each server monthly." },
      { id: 'B', text: "Re-image all virtual machines from scratch every weekend." },
      { id: 'C', text: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows." },
      { id: 'D', text: "Disable operating system updates entirely to prevent reboots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows. Azure Update Manager is a unified native management tool to oversee and manage updates for Windows and Linux machines across Azure, on-premises, and other cloud platforms (via Azure Arc). It enables compliance tracking, on-demand updates, and scheduled maintenance windows without requiring agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/update-manager/overview",
    tags: ["Azure Patch Management", "Update Manager", "Dr Failover"]
  },
  {
    id: "az-104-497",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Update Manager (formerly Update Management Center): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Patch Management to schedule, manage, and assess operating system security updates and hotfixes across Windows and Linux virtual machines in Azure and hybrid environments without deploying WSUS.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Update Manager unified operating system patch compliance is under evaluation.",
    options: [
      { id: 'A', text: "Re-image all virtual machines from scratch every weekend." },
      { id: 'B', text: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows." },
      { id: 'C', text: "Instruct individual server administrators to manually click Windows Update on each server monthly." },
      { id: 'D', text: "Disable operating system updates entirely to prevent reboots." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows. Azure Update Manager is a unified native management tool to oversee and manage updates for Windows and Linux machines across Azure, on-premises, and other cloud platforms (via Azure Arc). It enables compliance tracking, on-demand updates, and scheduled maintenance windows without requiring agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/update-manager/overview",
    tags: ["Azure Patch Management", "Update Manager", "High Load Scale"]
  },
  {
    id: "az-104-498",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Update Manager (formerly Update Management Center): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Patch Management to schedule, manage, and assess operating system security updates and hotfixes across Windows and Linux virtual machines in Azure and hybrid environments without deploying WSUS.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Update Manager unified operating system patch compliance is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows." },
      { id: 'B', text: "Re-image all virtual machines from scratch every weekend." },
      { id: 'C', text: "Instruct individual server administrators to manually click Windows Update on each server monthly." },
      { id: 'D', text: "Disable operating system updates entirely to prevent reboots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows. Azure Update Manager is a unified native management tool to oversee and manage updates for Windows and Linux machines across Azure, on-premises, and other cloud platforms (via Azure Arc). It enables compliance tracking, on-demand updates, and scheduled maintenance windows without requiring agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/update-manager/overview",
    tags: ["Azure Patch Management", "Update Manager", "Security Compliance"]
  },
  {
    id: "az-104-499",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Update Manager (formerly Update Management Center): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Patch Management to schedule, manage, and assess operating system security updates and hotfixes across Windows and Linux virtual machines in Azure and hybrid environments without deploying WSUS.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Update Manager unified operating system patch compliance is under evaluation.",
    options: [
      { id: 'A', text: "Instruct individual server administrators to manually click Windows Update on each server monthly." },
      { id: 'B', text: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows." },
      { id: 'C', text: "Re-image all virtual machines from scratch every weekend." },
      { id: 'D', text: "Disable operating system updates entirely to prevent reboots." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows. Azure Update Manager is a unified native management tool to oversee and manage updates for Windows and Linux machines across Azure, on-premises, and other cloud platforms (via Azure Arc). It enables compliance tracking, on-demand updates, and scheduled maintenance windows without requiring agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/update-manager/overview",
    tags: ["Azure Patch Management", "Update Manager", "Hybrid Migration"]
  },
  {
    id: "az-104-500",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Update Manager (formerly Update Management Center): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Patch Management to schedule, manage, and assess operating system security updates and hotfixes across Windows and Linux virtual machines in Azure and hybrid environments without deploying WSUS.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Update Manager unified operating system patch compliance is under evaluation.",
    options: [
      { id: 'A', text: "Instruct individual server administrators to manually click Windows Update on each server monthly." },
      { id: 'B', text: "Re-image all virtual machines from scratch every weekend." },
      { id: 'C', text: "Disable operating system updates entirely to prevent reboots." },
      { id: 'D', text: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Azure Update Manager to assess update status and configure periodic patching maintenance windows. Azure Update Manager is a unified native management tool to oversee and manage updates for Windows and Linux machines across Azure, on-premises, and other cloud platforms (via Azure Arc). It enables compliance tracking, on-demand updates, and scheduled maintenance windows without requiring agents.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/update-manager/overview",
    tags: ["Azure Patch Management", "Update Manager", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_20;
