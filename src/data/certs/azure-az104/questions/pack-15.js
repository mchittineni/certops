export const AZURE_AZ104_QUESTIONS_15 = [
  {
    id: "az-104-351",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Disk Encryption (ADE vs SSE with CMK): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure VM Security to encrypt Azure VM managed OS and data disks at rest using cryptographic keys stored and managed in Azure Key Vault without requiring OS-level BitLocker configuration.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Server-Side Encryption with Customer-Managed Keys (SSE with CMK) vs ADE is under evaluation.",
    options: [
      { id: 'A', text: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key." },
      { id: 'B', text: "Rely on unencrypted managed disks and encrypt files individually using ZIP passwords." },
      { id: 'C', text: "Enable BitLocker inside the guest OS without Key Vault integration." },
      { id: 'D', text: "Store disk encryption keys in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key. Azure Managed Disks provide Server-Side Encryption (SSE) enabled by default using platform-managed keys. Customers can switch to Customer-Managed Keys (CMK) hosted in Azure Key Vault via a Disk Encryption Set, providing encryption at the storage layer without guest OS CPU overhead or BitLocker/DM-Crypt dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Azure VM Security", "Disk Security", "Dr Failover"]
  },
  {
    id: "az-104-352",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Disk Encryption (ADE vs SSE with CMK): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure VM Security to encrypt Azure VM managed OS and data disks at rest using cryptographic keys stored and managed in Azure Key Vault without requiring OS-level BitLocker configuration.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Server-Side Encryption with Customer-Managed Keys (SSE with CMK) vs ADE is under evaluation.",
    options: [
      { id: 'A', text: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key." },
      { id: 'B', text: "Rely on unencrypted managed disks and encrypt files individually using ZIP passwords." },
      { id: 'C', text: "Enable BitLocker inside the guest OS without Key Vault integration." },
      { id: 'D', text: "Store disk encryption keys in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key. Azure Managed Disks provide Server-Side Encryption (SSE) enabled by default using platform-managed keys. Customers can switch to Customer-Managed Keys (CMK) hosted in Azure Key Vault via a Disk Encryption Set, providing encryption at the storage layer without guest OS CPU overhead or BitLocker/DM-Crypt dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Azure VM Security", "Disk Security", "High Load Scale"]
  },
  {
    id: "az-104-353",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Disk Encryption (ADE vs SSE with CMK): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure VM Security to encrypt Azure VM managed OS and data disks at rest using cryptographic keys stored and managed in Azure Key Vault without requiring OS-level BitLocker configuration.",
    question: "Which solution properly implements these mandatory security and governance controls? Server-Side Encryption with Customer-Managed Keys (SSE with CMK) vs ADE is under evaluation.",
    options: [
      { id: 'A', text: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key." },
      { id: 'B', text: "Rely on unencrypted managed disks and encrypt files individually using ZIP passwords." },
      { id: 'C', text: "Enable BitLocker inside the guest OS without Key Vault integration." },
      { id: 'D', text: "Store disk encryption keys in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key. Azure Managed Disks provide Server-Side Encryption (SSE) enabled by default using platform-managed keys. Customers can switch to Customer-Managed Keys (CMK) hosted in Azure Key Vault via a Disk Encryption Set, providing encryption at the storage layer without guest OS CPU overhead or BitLocker/DM-Crypt dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Azure VM Security", "Disk Security", "Security Compliance"]
  },
  {
    id: "az-104-354",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Disk Encryption (ADE vs SSE with CMK): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure VM Security to encrypt Azure VM managed OS and data disks at rest using cryptographic keys stored and managed in Azure Key Vault without requiring OS-level BitLocker configuration.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Server-Side Encryption with Customer-Managed Keys (SSE with CMK) vs ADE is under evaluation.",
    options: [
      { id: 'A', text: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key." },
      { id: 'B', text: "Rely on unencrypted managed disks and encrypt files individually using ZIP passwords." },
      { id: 'C', text: "Enable BitLocker inside the guest OS without Key Vault integration." },
      { id: 'D', text: "Store disk encryption keys in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key. Azure Managed Disks provide Server-Side Encryption (SSE) enabled by default using platform-managed keys. Customers can switch to Customer-Managed Keys (CMK) hosted in Azure Key Vault via a Disk Encryption Set, providing encryption at the storage layer without guest OS CPU overhead or BitLocker/DM-Crypt dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Azure VM Security", "Disk Security", "Hybrid Migration"]
  },
  {
    id: "az-104-355",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Disk Encryption (ADE vs SSE with CMK): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure VM Security to encrypt Azure VM managed OS and data disks at rest using cryptographic keys stored and managed in Azure Key Vault without requiring OS-level BitLocker configuration.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Server-Side Encryption with Customer-Managed Keys (SSE with CMK) vs ADE is under evaluation.",
    options: [
      { id: 'A', text: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key." },
      { id: 'B', text: "Rely on unencrypted managed disks and encrypt files individually using ZIP passwords." },
      { id: 'C', text: "Enable BitLocker inside the guest OS without Key Vault integration." },
      { id: 'D', text: "Store disk encryption keys in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Server-Side Encryption (SSE) with Customer-Managed Keys (CMK) using an Azure Key Vault key. Azure Managed Disks provide Server-Side Encryption (SSE) enabled by default using platform-managed keys. Customers can switch to Customer-Managed Keys (CMK) hosted in Azure Key Vault via a Disk Encryption Set, providing encryption at the storage layer without guest OS CPU overhead or BitLocker/DM-Crypt dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",
    tags: ["Azure VM Security", "Disk Security", "Resilience Failure"]
  },
  {
    id: "az-104-356",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Run Command for In-Guest Script Execution: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure VM Management to execute an administrative PowerShell script inside a Windows virtual machine to remediate a network configuration failure when RDP connectivity is completely blocked.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure VM Run Command via Azure VM Agent is under evaluation.",
    options: [
      { id: 'A', text: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI." },
      { id: 'B', text: "Submit an on-premises physical data center ticket to reboot the server room switch." },
      { id: 'C', text: "Reinstall the operating system from a blank ISO image." },
      { id: 'D', text: "Open port 3389 publicly on the network security group without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI. The Run Command feature uses the Azure VM Agent to execute PowerShell (Windows) or shell scripts (Linux) within an Azure VM directly from the Azure portal, REST API, CLI, or PowerShell. This allows emergency troubleshooting and management even when remote access (RDP/SSH) is completely unavailable.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Azure VM Management", "VM Management", "Dr Failover"]
  },
  {
    id: "az-104-357",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Run Command for In-Guest Script Execution: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure VM Management to execute an administrative PowerShell script inside a Windows virtual machine to remediate a network configuration failure when RDP connectivity is completely blocked.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure VM Run Command via Azure VM Agent is under evaluation.",
    options: [
      { id: 'A', text: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI." },
      { id: 'B', text: "Submit an on-premises physical data center ticket to reboot the server room switch." },
      { id: 'C', text: "Reinstall the operating system from a blank ISO image." },
      { id: 'D', text: "Open port 3389 publicly on the network security group without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI. The Run Command feature uses the Azure VM Agent to execute PowerShell (Windows) or shell scripts (Linux) within an Azure VM directly from the Azure portal, REST API, CLI, or PowerShell. This allows emergency troubleshooting and management even when remote access (RDP/SSH) is completely unavailable.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Azure VM Management", "VM Management", "High Load Scale"]
  },
  {
    id: "az-104-358",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Run Command for In-Guest Script Execution: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure VM Management to execute an administrative PowerShell script inside a Windows virtual machine to remediate a network configuration failure when RDP connectivity is completely blocked.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure VM Run Command via Azure VM Agent is under evaluation.",
    options: [
      { id: 'A', text: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI." },
      { id: 'B', text: "Submit an on-premises physical data center ticket to reboot the server room switch." },
      { id: 'C', text: "Reinstall the operating system from a blank ISO image." },
      { id: 'D', text: "Open port 3389 publicly on the network security group without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI. The Run Command feature uses the Azure VM Agent to execute PowerShell (Windows) or shell scripts (Linux) within an Azure VM directly from the Azure portal, REST API, CLI, or PowerShell. This allows emergency troubleshooting and management even when remote access (RDP/SSH) is completely unavailable.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Azure VM Management", "VM Management", "Security Compliance"]
  },
  {
    id: "az-104-359",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Run Command for In-Guest Script Execution: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure VM Management to execute an administrative PowerShell script inside a Windows virtual machine to remediate a network configuration failure when RDP connectivity is completely blocked.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure VM Run Command via Azure VM Agent is under evaluation.",
    options: [
      { id: 'A', text: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI." },
      { id: 'B', text: "Submit an on-premises physical data center ticket to reboot the server room switch." },
      { id: 'C', text: "Reinstall the operating system from a blank ISO image." },
      { id: 'D', text: "Open port 3389 publicly on the network security group without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI. The Run Command feature uses the Azure VM Agent to execute PowerShell (Windows) or shell scripts (Linux) within an Azure VM directly from the Azure portal, REST API, CLI, or PowerShell. This allows emergency troubleshooting and management even when remote access (RDP/SSH) is completely unavailable.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Azure VM Management", "VM Management", "Hybrid Migration"]
  },
  {
    id: "az-104-360",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Run Command for In-Guest Script Execution: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure VM Management to execute an administrative PowerShell script inside a Windows virtual machine to remediate a network configuration failure when RDP connectivity is completely blocked.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure VM Run Command via Azure VM Agent is under evaluation.",
    options: [
      { id: 'A', text: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI." },
      { id: 'B', text: "Submit an on-premises physical data center ticket to reboot the server room switch." },
      { id: 'C', text: "Reinstall the operating system from a blank ISO image." },
      { id: 'D', text: "Open port 3389 publicly on the network security group without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the remediation script using the Azure VM Run Command feature through the Azure portal or CLI. The Run Command feature uses the Azure VM Agent to execute PowerShell (Windows) or shell scripts (Linux) within an Azure VM directly from the Azure portal, REST API, CLI, or PowerShell. This allows emergency troubleshooting and management even when remote access (RDP/SSH) is completely unavailable.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/windows/run-command",
    tags: ["Azure VM Management", "VM Management", "Resilience Failure"]
  },
  {
    id: "az-104-361",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Custom Script Extension: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure VM Automation to automatically download and execute software installation scripts during initial virtual machine deployment without building custom golden VM images.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Custom Script Extension automated software bootstrapping is under evaluation.",
    options: [
      { id: 'A', text: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment." },
      { id: 'B', text: "Log in manually via RDP to download installers from public websites." },
      { id: 'C', text: "Burn the software installers onto a physical CD-ROM disc." },
      { id: 'D', text: "Configure an Azure Logic App to email installation instructions to system administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment. The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post-deployment configuration, software installation, or any other configuration or management tasks, retrieving scripts from Azure Storage or GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Azure VM Automation", "VM Extensions", "Dr Failover"]
  },
  {
    id: "az-104-362",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Custom Script Extension: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure VM Automation to automatically download and execute software installation scripts during initial virtual machine deployment without building custom golden VM images.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Custom Script Extension automated software bootstrapping is under evaluation.",
    options: [
      { id: 'A', text: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment." },
      { id: 'B', text: "Log in manually via RDP to download installers from public websites." },
      { id: 'C', text: "Burn the software installers onto a physical CD-ROM disc." },
      { id: 'D', text: "Configure an Azure Logic App to email installation instructions to system administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment. The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post-deployment configuration, software installation, or any other configuration or management tasks, retrieving scripts from Azure Storage or GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Azure VM Automation", "VM Extensions", "High Load Scale"]
  },
  {
    id: "az-104-363",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Custom Script Extension: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure VM Automation to automatically download and execute software installation scripts during initial virtual machine deployment without building custom golden VM images.",
    question: "Which solution properly implements these mandatory security and governance controls? Custom Script Extension automated software bootstrapping is under evaluation.",
    options: [
      { id: 'A', text: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment." },
      { id: 'B', text: "Log in manually via RDP to download installers from public websites." },
      { id: 'C', text: "Burn the software installers onto a physical CD-ROM disc." },
      { id: 'D', text: "Configure an Azure Logic App to email installation instructions to system administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment. The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post-deployment configuration, software installation, or any other configuration or management tasks, retrieving scripts from Azure Storage or GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Azure VM Automation", "VM Extensions", "Security Compliance"]
  },
  {
    id: "az-104-364",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Custom Script Extension: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure VM Automation to automatically download and execute software installation scripts during initial virtual machine deployment without building custom golden VM images.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Custom Script Extension automated software bootstrapping is under evaluation.",
    options: [
      { id: 'A', text: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment." },
      { id: 'B', text: "Log in manually via RDP to download installers from public websites." },
      { id: 'C', text: "Burn the software installers onto a physical CD-ROM disc." },
      { id: 'D', text: "Configure an Azure Logic App to email installation instructions to system administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment. The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post-deployment configuration, software installation, or any other configuration or management tasks, retrieving scripts from Azure Storage or GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Azure VM Automation", "VM Extensions", "Hybrid Migration"]
  },
  {
    id: "az-104-365",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Custom Script Extension: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure VM Automation to automatically download and execute software installation scripts during initial virtual machine deployment without building custom golden VM images.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Custom Script Extension automated software bootstrapping is under evaluation.",
    options: [
      { id: 'A', text: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment." },
      { id: 'B', text: "Log in manually via RDP to download installers from public websites." },
      { id: 'C', text: "Burn the software installers onto a physical CD-ROM disc." },
      { id: 'D', text: "Configure an Azure Logic App to email installation instructions to system administrators." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Azure Custom Script Extension to the virtual machine definition during deployment. The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post-deployment configuration, software installation, or any other configuration or management tasks, retrieving scripts from Azure Storage or GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows",
    tags: ["Azure VM Automation", "VM Extensions", "Resilience Failure"]
  },
  {
    id: "az-104-366",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets Autoscale Rules: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Compute Scaling to automatically increase the number of VM instances in a scale set by 2 when average CPU utilization exceeds 75% for 10 minutes, and decrease by 1 when CPU falls below 25%.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Metric-triggered horizontal autoscale rules in VMSS is under evaluation.",
    options: [
      { id: 'A', text: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS." },
      { id: 'B', text: "Manually change the scale set capacity slider in the Azure portal twice daily." },
      { id: 'C', text: "Write a cron job inside a single VM instance to reboot the other scale set members." },
      { id: 'D', text: "Deploy an Azure Application Gateway with static backend pool memberships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS. Azure Virtual Machine Scale Sets support metric-based autoscale rules evaluated over time windows. Scale-out rules add instances when demand surges, scale-in rules safely remove instances when demand drops, and cool-down periods prevent thrashing (rapid scale oscillations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    tags: ["Azure Compute Scaling", "Autoscale", "Dr Failover"]
  },
  {
    id: "az-104-367",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets Autoscale Rules: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Compute Scaling to automatically increase the number of VM instances in a scale set by 2 when average CPU utilization exceeds 75% for 10 minutes, and decrease by 1 when CPU falls below 25%.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Metric-triggered horizontal autoscale rules in VMSS is under evaluation.",
    options: [
      { id: 'A', text: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS." },
      { id: 'B', text: "Manually change the scale set capacity slider in the Azure portal twice daily." },
      { id: 'C', text: "Write a cron job inside a single VM instance to reboot the other scale set members." },
      { id: 'D', text: "Deploy an Azure Application Gateway with static backend pool memberships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS. Azure Virtual Machine Scale Sets support metric-based autoscale rules evaluated over time windows. Scale-out rules add instances when demand surges, scale-in rules safely remove instances when demand drops, and cool-down periods prevent thrashing (rapid scale oscillations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    tags: ["Azure Compute Scaling", "Autoscale", "High Load Scale"]
  },
  {
    id: "az-104-368",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets Autoscale Rules: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Compute Scaling to automatically increase the number of VM instances in a scale set by 2 when average CPU utilization exceeds 75% for 10 minutes, and decrease by 1 when CPU falls below 25%.",
    question: "Which solution properly implements these mandatory security and governance controls? Metric-triggered horizontal autoscale rules in VMSS is under evaluation.",
    options: [
      { id: 'A', text: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS." },
      { id: 'B', text: "Manually change the scale set capacity slider in the Azure portal twice daily." },
      { id: 'C', text: "Write a cron job inside a single VM instance to reboot the other scale set members." },
      { id: 'D', text: "Deploy an Azure Application Gateway with static backend pool memberships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS. Azure Virtual Machine Scale Sets support metric-based autoscale rules evaluated over time windows. Scale-out rules add instances when demand surges, scale-in rules safely remove instances when demand drops, and cool-down periods prevent thrashing (rapid scale oscillations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    tags: ["Azure Compute Scaling", "Autoscale", "Security Compliance"]
  },
  {
    id: "az-104-369",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets Autoscale Rules: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Compute Scaling to automatically increase the number of VM instances in a scale set by 2 when average CPU utilization exceeds 75% for 10 minutes, and decrease by 1 when CPU falls below 25%.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Metric-triggered horizontal autoscale rules in VMSS is under evaluation.",
    options: [
      { id: 'A', text: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS." },
      { id: 'B', text: "Manually change the scale set capacity slider in the Azure portal twice daily." },
      { id: 'C', text: "Write a cron job inside a single VM instance to reboot the other scale set members." },
      { id: 'D', text: "Deploy an Azure Application Gateway with static backend pool memberships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS. Azure Virtual Machine Scale Sets support metric-based autoscale rules evaluated over time windows. Scale-out rules add instances when demand surges, scale-in rules safely remove instances when demand drops, and cool-down periods prevent thrashing (rapid scale oscillations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    tags: ["Azure Compute Scaling", "Autoscale", "Hybrid Migration"]
  },
  {
    id: "az-104-370",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure Virtual Machine Scale Sets Autoscale Rules: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Compute Scaling to automatically increase the number of VM instances in a scale set by 2 when average CPU utilization exceeds 75% for 10 minutes, and decrease by 1 when CPU falls below 25%.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Metric-triggered horizontal autoscale rules in VMSS is under evaluation.",
    options: [
      { id: 'A', text: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS." },
      { id: 'B', text: "Manually change the scale set capacity slider in the Azure portal twice daily." },
      { id: 'C', text: "Write a cron job inside a single VM instance to reboot the other scale set members." },
      { id: 'D', text: "Deploy an Azure Application Gateway with static backend pool memberships." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure metric-based autoscale scale-out and scale-in rules with cool-down periods in the VMSS. Azure Virtual Machine Scale Sets support metric-based autoscale rules evaluated over time windows. Scale-out rules add instances when demand surges, scale-in rules safely remove instances when demand drops, and cool-down periods prevent thrashing (rapid scale oscillations).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview",
    tags: ["Azure Compute Scaling", "Autoscale", "Resilience Failure"]
  },
  {
    id: "az-104-371",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots and Traffic Routing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure App Service to test a new version of a web application in a production-like staging environment with 10% of real user traffic before executing a zero-downtime swap.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Staging deployment slots with percentage-based traffic routing is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing." },
      { id: 'B', text: "Deploy the new code directly to the live production App Service without staging validation." },
      { id: 'C', text: "Create a separate independent App Service Plan and redirect DNS records manually." },
      { id: 'D', text: "Deploy the application as a standalone Windows Service on an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing. Azure App Service deployment slots allow hosting different versions of an app with separate hostnames. Developers can route a percentage of production traffic to a staging slot for canary testing and then swap slots with zero downtime, as worker processes are pre-warmed before routing rules change.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["Azure App Service", "App Service", "Dr Failover"]
  },
  {
    id: "az-104-372",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots and Traffic Routing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure App Service to test a new version of a web application in a production-like staging environment with 10% of real user traffic before executing a zero-downtime swap.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Staging deployment slots with percentage-based traffic routing is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing." },
      { id: 'B', text: "Deploy the new code directly to the live production App Service without staging validation." },
      { id: 'C', text: "Create a separate independent App Service Plan and redirect DNS records manually." },
      { id: 'D', text: "Deploy the application as a standalone Windows Service on an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing. Azure App Service deployment slots allow hosting different versions of an app with separate hostnames. Developers can route a percentage of production traffic to a staging slot for canary testing and then swap slots with zero downtime, as worker processes are pre-warmed before routing rules change.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["Azure App Service", "App Service", "High Load Scale"]
  },
  {
    id: "az-104-373",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots and Traffic Routing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure App Service to test a new version of a web application in a production-like staging environment with 10% of real user traffic before executing a zero-downtime swap.",
    question: "Which solution properly implements these mandatory security and governance controls? Staging deployment slots with percentage-based traffic routing is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing." },
      { id: 'B', text: "Deploy the new code directly to the live production App Service without staging validation." },
      { id: 'C', text: "Create a separate independent App Service Plan and redirect DNS records manually." },
      { id: 'D', text: "Deploy the application as a standalone Windows Service on an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing. Azure App Service deployment slots allow hosting different versions of an app with separate hostnames. Developers can route a percentage of production traffic to a staging slot for canary testing and then swap slots with zero downtime, as worker processes are pre-warmed before routing rules change.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["Azure App Service", "App Service", "Security Compliance"]
  },
  {
    id: "az-104-374",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots and Traffic Routing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure App Service to test a new version of a web application in a production-like staging environment with 10% of real user traffic before executing a zero-downtime swap.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Staging deployment slots with percentage-based traffic routing is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing." },
      { id: 'B', text: "Deploy the new code directly to the live production App Service without staging validation." },
      { id: 'C', text: "Create a separate independent App Service Plan and redirect DNS records manually." },
      { id: 'D', text: "Deploy the application as a standalone Windows Service on an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing. Azure App Service deployment slots allow hosting different versions of an app with separate hostnames. Developers can route a percentage of production traffic to a staging slot for canary testing and then swap slots with zero downtime, as worker processes are pre-warmed before routing rules change.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["Azure App Service", "App Service", "Hybrid Migration"]
  },
  {
    id: "az-104-375",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure App Service Deployment Slots and Traffic Routing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure App Service to test a new version of a web application in a production-like staging environment with 10% of real user traffic before executing a zero-downtime swap.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Staging deployment slots with percentage-based traffic routing is under evaluation.",
    options: [
      { id: 'A', text: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing." },
      { id: 'B', text: "Deploy the new code directly to the live production App Service without staging validation." },
      { id: 'C', text: "Create a separate independent App Service Plan and redirect DNS records manually." },
      { id: 'D', text: "Deploy the application as a standalone Windows Service on an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the new code to an App Service deployment slot and configure testing-in-production traffic routing. Azure App Service deployment slots allow hosting different versions of an app with separate hostnames. Developers can route a percentage of production traffic to a staging slot for canary testing and then swap slots with zero downtime, as worker processes are pre-warmed before routing rules change.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
    tags: ["Azure App Service", "App Service", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_15;
