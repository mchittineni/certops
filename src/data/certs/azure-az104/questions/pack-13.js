export const AZURE_AZ104_QUESTIONS_13 = [
  {
    id: "az-104-301",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewalls and Virtual Networks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage Security to restrict access to an Azure Storage account so that only virtual machines residing in a specific subnet can connect, blocking all public internet traffic.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Storage account firewall restricting access to selected VNets is under evaluation.",
    options: [
      { id: 'A', text: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet." },
      { id: 'B', text: "Delete all storage account access keys and use only anonymous public blob access." },
      { id: 'C', text: "Configure an Azure Network Security Group rule blocking outbound port 443 across the entire subscription." },
      { id: 'D', text: "Place the storage account inside a virtual machine operating system disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet. Azure Storage firewalls allow configuring access rules that permit traffic only from specific virtual network subnets (via Virtual Network service endpoints or private endpoints) or specific public IP addresses, denying all other incoming public internet connections by default.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security",
    tags: ["Azure Storage Security", "Storage Security", "Dr Failover"]
  },
  {
    id: "az-104-302",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewalls and Virtual Networks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage Security to restrict access to an Azure Storage account so that only virtual machines residing in a specific subnet can connect, blocking all public internet traffic.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Storage account firewall restricting access to selected VNets is under evaluation.",
    options: [
      { id: 'A', text: "Place the storage account inside a virtual machine operating system disk." },
      { id: 'B', text: "Configure an Azure Network Security Group rule blocking outbound port 443 across the entire subscription." },
      { id: 'C', text: "Delete all storage account access keys and use only anonymous public blob access." },
      { id: 'D', text: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet. Azure Storage firewalls allow configuring access rules that permit traffic only from specific virtual network subnets (via Virtual Network service endpoints or private endpoints) or specific public IP addresses, denying all other incoming public internet connections by default.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security",
    tags: ["Azure Storage Security", "Storage Security", "High Load Scale"]
  },
  {
    id: "az-104-303",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewalls and Virtual Networks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage Security to restrict access to an Azure Storage account so that only virtual machines residing in a specific subnet can connect, blocking all public internet traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? Storage account firewall restricting access to selected VNets is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Network Security Group rule blocking outbound port 443 across the entire subscription." },
      { id: 'B', text: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet." },
      { id: 'C', text: "Place the storage account inside a virtual machine operating system disk." },
      { id: 'D', text: "Delete all storage account access keys and use only anonymous public blob access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet. Azure Storage firewalls allow configuring access rules that permit traffic only from specific virtual network subnets (via Virtual Network service endpoints or private endpoints) or specific public IP addresses, denying all other incoming public internet connections by default.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security",
    tags: ["Azure Storage Security", "Storage Security", "Security Compliance"]
  },
  {
    id: "az-104-304",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewalls and Virtual Networks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage Security to restrict access to an Azure Storage account so that only virtual machines residing in a specific subnet can connect, blocking all public internet traffic.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Storage account firewall restricting access to selected VNets is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Network Security Group rule blocking outbound port 443 across the entire subscription." },
      { id: 'B', text: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet." },
      { id: 'C', text: "Delete all storage account access keys and use only anonymous public blob access." },
      { id: 'D', text: "Place the storage account inside a virtual machine operating system disk." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet. Azure Storage firewalls allow configuring access rules that permit traffic only from specific virtual network subnets (via Virtual Network service endpoints or private endpoints) or specific public IP addresses, denying all other incoming public internet connections by default.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security",
    tags: ["Azure Storage Security", "Storage Security", "Hybrid Migration"]
  },
  {
    id: "az-104-305",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Account Firewalls and Virtual Networks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage Security to restrict access to an Azure Storage account so that only virtual machines residing in a specific subnet can connect, blocking all public internet traffic.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Storage account firewall restricting access to selected VNets is under evaluation.",
    options: [
      { id: 'A', text: "Delete all storage account access keys and use only anonymous public blob access." },
      { id: 'B', text: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet." },
      { id: 'C', text: "Place the storage account inside a virtual machine operating system disk." },
      { id: 'D', text: "Configure an Azure Network Security Group rule blocking outbound port 443 across the entire subscription." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the storage account firewall, configure default action to Deny, and allow access from the designated VNet subnet. Azure Storage firewalls allow configuring access rules that permit traffic only from specific virtual network subnets (via Virtual Network service endpoints or private endpoints) or specific public IP addresses, denying all other incoming public internet connections by default.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security",
    tags: ["Azure Storage Security", "Storage Security", "Resilience Failure"]
  },
  {
    id: "az-104-306",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Shared Access Signatures (SAS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage Security to grant a third-party mobile application temporary, read-only access to upload customer profile pictures to a specific blob container for 2 hours.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? User delegation and service Shared Access Signatures (SAS) is under evaluation.",
    options: [
      { id: 'A', text: "Grant the third-party developer the Owner role on the Azure storage account." },
      { id: 'B', text: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol." },
      { id: 'C', text: "Change the blob container access level to Public Anonymous Read access." },
      { id: 'D', text: "Share the primary storage account access key with the mobile application developer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol. A Shared Access Signature (SAS) provides secure delegated access to resources in a storage account without exposing account access keys. A SAS specifies granular permissions (read, write), a restricted time window, allowed IP ranges, and enforces HTTPS transport.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    tags: ["Azure Storage Security", "Storage Security", "Dr Failover"]
  },
  {
    id: "az-104-307",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Shared Access Signatures (SAS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage Security to grant a third-party mobile application temporary, read-only access to upload customer profile pictures to a specific blob container for 2 hours.",
    question: "Which architectural approach should the team select to manage this demand efficiently? User delegation and service Shared Access Signatures (SAS) is under evaluation.",
    options: [
      { id: 'A', text: "Share the primary storage account access key with the mobile application developer." },
      { id: 'B', text: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol." },
      { id: 'C', text: "Grant the third-party developer the Owner role on the Azure storage account." },
      { id: 'D', text: "Change the blob container access level to Public Anonymous Read access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol. A Shared Access Signature (SAS) provides secure delegated access to resources in a storage account without exposing account access keys. A SAS specifies granular permissions (read, write), a restricted time window, allowed IP ranges, and enforces HTTPS transport.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    tags: ["Azure Storage Security", "Storage Security", "High Load Scale"]
  },
  {
    id: "az-104-308",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Shared Access Signatures (SAS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage Security to grant a third-party mobile application temporary, read-only access to upload customer profile pictures to a specific blob container for 2 hours.",
    question: "Which solution properly implements these mandatory security and governance controls? User delegation and service Shared Access Signatures (SAS) is under evaluation.",
    options: [
      { id: 'A', text: "Grant the third-party developer the Owner role on the Azure storage account." },
      { id: 'B', text: "Share the primary storage account access key with the mobile application developer." },
      { id: 'C', text: "Change the blob container access level to Public Anonymous Read access." },
      { id: 'D', text: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol. A Shared Access Signature (SAS) provides secure delegated access to resources in a storage account without exposing account access keys. A SAS specifies granular permissions (read, write), a restricted time window, allowed IP ranges, and enforces HTTPS transport.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    tags: ["Azure Storage Security", "Storage Security", "Security Compliance"]
  },
  {
    id: "az-104-309",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Shared Access Signatures (SAS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage Security to grant a third-party mobile application temporary, read-only access to upload customer profile pictures to a specific blob container for 2 hours.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? User delegation and service Shared Access Signatures (SAS) is under evaluation.",
    options: [
      { id: 'A', text: "Grant the third-party developer the Owner role on the Azure storage account." },
      { id: 'B', text: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol." },
      { id: 'C', text: "Change the blob container access level to Public Anonymous Read access." },
      { id: 'D', text: "Share the primary storage account access key with the mobile application developer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol. A Shared Access Signature (SAS) provides secure delegated access to resources in a storage account without exposing account access keys. A SAS specifies granular permissions (read, write), a restricted time window, allowed IP ranges, and enforces HTTPS transport.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    tags: ["Azure Storage Security", "Storage Security", "Hybrid Migration"]
  },
  {
    id: "az-104-310",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Shared Access Signatures (SAS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage Security to grant a third-party mobile application temporary, read-only access to upload customer profile pictures to a specific blob container for 2 hours.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? User delegation and service Shared Access Signatures (SAS) is under evaluation.",
    options: [
      { id: 'A', text: "Grant the third-party developer the Owner role on the Azure storage account." },
      { id: 'B', text: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol." },
      { id: 'C', text: "Change the blob container access level to Public Anonymous Read access." },
      { id: 'D', text: "Share the primary storage account access key with the mobile application developer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate a Shared Access Signature (SAS) token with Write permissions, a 2-hour expiration window, and HTTPS-only protocol. A Shared Access Signature (SAS) provides secure delegated access to resources in a storage account without exposing account access keys. A SAS specifies granular permissions (read, write), a restricted time window, allowed IP ranges, and enforces HTTPS transport.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview",
    tags: ["Azure Storage Security", "Storage Security", "Resilience Failure"]
  },
  {
    id: "az-104-311",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Lifecycle Management Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage to automatically transition unstructured log files from Hot to Cool after 30 days, move to Archive after 90 days, and delete after 365 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated blob lifecycle management rules for tier transitions and deletion is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Logic App that parses blob metadata and issues REST API delete calls individually." },
      { id: 'B', text: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions." },
      { id: 'C', text: "Write a custom PowerShell script running on an on-premises scheduled task to download and re-upload files." },
      { id: 'D', text: "Manually change the access tier of each blob using the Azure portal on the first day of each month." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions. Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to appropriate access tiers (Hot to Cool, Cool to Cold, Cold to Archive) or expire (delete) data at the end of its lifecycle, optimizing storage costs automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Azure Storage", "Storage Lifecycle", "Dr Failover"]
  },
  {
    id: "az-104-312",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Lifecycle Management Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage to automatically transition unstructured log files from Hot to Cool after 30 days, move to Archive after 90 days, and delete after 365 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated blob lifecycle management rules for tier transitions and deletion is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Logic App that parses blob metadata and issues REST API delete calls individually." },
      { id: 'B', text: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions." },
      { id: 'C', text: "Write a custom PowerShell script running on an on-premises scheduled task to download and re-upload files." },
      { id: 'D', text: "Manually change the access tier of each blob using the Azure portal on the first day of each month." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions. Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to appropriate access tiers (Hot to Cool, Cool to Cold, Cold to Archive) or expire (delete) data at the end of its lifecycle, optimizing storage costs automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Azure Storage", "Storage Lifecycle", "High Load Scale"]
  },
  {
    id: "az-104-313",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Lifecycle Management Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage to automatically transition unstructured log files from Hot to Cool after 30 days, move to Archive after 90 days, and delete after 365 days.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated blob lifecycle management rules for tier transitions and deletion is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom PowerShell script running on an on-premises scheduled task to download and re-upload files." },
      { id: 'B', text: "Manually change the access tier of each blob using the Azure portal on the first day of each month." },
      { id: 'C', text: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions." },
      { id: 'D', text: "Deploy an Azure Logic App that parses blob metadata and issues REST API delete calls individually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions. Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to appropriate access tiers (Hot to Cool, Cool to Cold, Cold to Archive) or expire (delete) data at the end of its lifecycle, optimizing storage costs automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Azure Storage", "Storage Lifecycle", "Security Compliance"]
  },
  {
    id: "az-104-314",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Lifecycle Management Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage to automatically transition unstructured log files from Hot to Cool after 30 days, move to Archive after 90 days, and delete after 365 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated blob lifecycle management rules for tier transitions and deletion is under evaluation.",
    options: [
      { id: 'A', text: "Manually change the access tier of each blob using the Azure portal on the first day of each month." },
      { id: 'B', text: "Write a custom PowerShell script running on an on-premises scheduled task to download and re-upload files." },
      { id: 'C', text: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions." },
      { id: 'D', text: "Deploy an Azure Logic App that parses blob metadata and issues REST API delete calls individually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions. Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to appropriate access tiers (Hot to Cool, Cool to Cold, Cold to Archive) or expire (delete) data at the end of its lifecycle, optimizing storage costs automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Azure Storage", "Storage Lifecycle", "Hybrid Migration"]
  },
  {
    id: "az-104-315",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Lifecycle Management Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage to automatically transition unstructured log files from Hot to Cool after 30 days, move to Archive after 90 days, and delete after 365 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated blob lifecycle management rules for tier transitions and deletion is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom PowerShell script running on an on-premises scheduled task to download and re-upload files." },
      { id: 'B', text: "Manually change the access tier of each blob using the Azure portal on the first day of each month." },
      { id: 'C', text: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions." },
      { id: 'D', text: "Deploy an Azure Logic App that parses blob metadata and issues REST API delete calls individually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Blob Storage Lifecycle Management rule with defined tiering and deletion conditions. Azure Blob Storage lifecycle management offers a rule-based policy that you can use to transition blob data to appropriate access tiers (Hot to Cool, Cool to Cold, Cold to Archive) or expire (delete) data at the end of its lifecycle, optimizing storage costs automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
    tags: ["Azure Storage", "Storage Lifecycle", "Resilience Failure"]
  },
  {
    id: "az-104-316",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Versioning and Soft Delete: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage Protection to protect enterprise documents in Azure Blob Storage from accidental deletion or modification, allowing restoration of previous versions for 14 days.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Blob versioning and soft delete protection against accidental overwrites is under evaluation.",
    options: [
      { id: 'A', text: "Create duplicate storage accounts and copy files manually every morning." },
      { id: 'B', text: "Set the entire storage container to read-only using an on-premises SAN mirror." },
      { id: 'C', text: "Rely on locally cached web browser copies of documents." },
      { id: 'D', text: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period. Azure Blob Storage soft delete protects blob data from being accidentally overwritten or deleted by retaining deleted data in the system for a specified retention period (1 to 365 days). Combined with blob versioning, previous states of blobs are automatically preserved and can be restored seamlessly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage Protection", "Data Protection", "Dr Failover"]
  },
  {
    id: "az-104-317",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Versioning and Soft Delete: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage Protection to protect enterprise documents in Azure Blob Storage from accidental deletion or modification, allowing restoration of previous versions for 14 days.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Blob versioning and soft delete protection against accidental overwrites is under evaluation.",
    options: [
      { id: 'A', text: "Rely on locally cached web browser copies of documents." },
      { id: 'B', text: "Create duplicate storage accounts and copy files manually every morning." },
      { id: 'C', text: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period." },
      { id: 'D', text: "Set the entire storage container to read-only using an on-premises SAN mirror." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period. Azure Blob Storage soft delete protects blob data from being accidentally overwritten or deleted by retaining deleted data in the system for a specified retention period (1 to 365 days). Combined with blob versioning, previous states of blobs are automatically preserved and can be restored seamlessly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage Protection", "Data Protection", "High Load Scale"]
  },
  {
    id: "az-104-318",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Versioning and Soft Delete: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage Protection to protect enterprise documents in Azure Blob Storage from accidental deletion or modification, allowing restoration of previous versions for 14 days.",
    question: "Which solution properly implements these mandatory security and governance controls? Blob versioning and soft delete protection against accidental overwrites is under evaluation.",
    options: [
      { id: 'A', text: "Create duplicate storage accounts and copy files manually every morning." },
      { id: 'B', text: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period." },
      { id: 'C', text: "Rely on locally cached web browser copies of documents." },
      { id: 'D', text: "Set the entire storage container to read-only using an on-premises SAN mirror." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period. Azure Blob Storage soft delete protects blob data from being accidentally overwritten or deleted by retaining deleted data in the system for a specified retention period (1 to 365 days). Combined with blob versioning, previous states of blobs are automatically preserved and can be restored seamlessly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage Protection", "Data Protection", "Security Compliance"]
  },
  {
    id: "az-104-319",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Versioning and Soft Delete: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage Protection to protect enterprise documents in Azure Blob Storage from accidental deletion or modification, allowing restoration of previous versions for 14 days.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Blob versioning and soft delete protection against accidental overwrites is under evaluation.",
    options: [
      { id: 'A', text: "Set the entire storage container to read-only using an on-premises SAN mirror." },
      { id: 'B', text: "Rely on locally cached web browser copies of documents." },
      { id: 'C', text: "Create duplicate storage accounts and copy files manually every morning." },
      { id: 'D', text: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period. Azure Blob Storage soft delete protects blob data from being accidentally overwritten or deleted by retaining deleted data in the system for a specified retention period (1 to 365 days). Combined with blob versioning, previous states of blobs are automatically preserved and can be restored seamlessly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage Protection", "Data Protection", "Hybrid Migration"]
  },
  {
    id: "az-104-320",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Blob Versioning and Soft Delete: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage Protection to protect enterprise documents in Azure Blob Storage from accidental deletion or modification, allowing restoration of previous versions for 14 days.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Blob versioning and soft delete protection against accidental overwrites is under evaluation.",
    options: [
      { id: 'A', text: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period." },
      { id: 'B', text: "Rely on locally cached web browser copies of documents." },
      { id: 'C', text: "Create duplicate storage accounts and copy files manually every morning." },
      { id: 'D', text: "Set the entire storage container to read-only using an on-premises SAN mirror." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Blob Versioning and configure Blob Soft Delete with a 14-day retention period. Azure Blob Storage soft delete protects blob data from being accidentally overwritten or deleted by retaining deleted data in the system for a specified retention period (1 to 365 days). Combined with blob versioning, previous states of blobs are automatically preserved and can be restored seamlessly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage Protection", "Data Protection", "Resilience Failure"]
  },
  {
    id: "az-104-321",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication (Entra ID DS / AD DS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Files to migrate an on-premises Windows file server to Azure Files while preserving existing user Active Directory NTFS permissions and folder security ACLs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Files SMB identity-based authentication with NTFS ACLs is under evaluation.",
    options: [
      { id: 'A', text: "Distribute the storage account primary access key to all 5,000 domain user workstations." },
      { id: 'B', text: "Convert all shared files into relational database records in Azure SQL Database." },
      { id: 'C', text: "Configure anonymous public access on the Azure Files share." },
      { id: 'D', text: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions. Azure Files supports identity-based authentication over SMB using on-premises Active Directory Domain Services (AD DS) or Microsoft Entra Domain Services. This allows seamless migration of Windows file shares while fully preserving existing share-level RBAC and granular NTFS access control lists (ACLs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Azure Files", "Dr Failover"]
  },
  {
    id: "az-104-322",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication (Entra ID DS / AD DS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Files to migrate an on-premises Windows file server to Azure Files while preserving existing user Active Directory NTFS permissions and folder security ACLs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Files SMB identity-based authentication with NTFS ACLs is under evaluation.",
    options: [
      { id: 'A', text: "Convert all shared files into relational database records in Azure SQL Database." },
      { id: 'B', text: "Distribute the storage account primary access key to all 5,000 domain user workstations." },
      { id: 'C', text: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions." },
      { id: 'D', text: "Configure anonymous public access on the Azure Files share." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions. Azure Files supports identity-based authentication over SMB using on-premises Active Directory Domain Services (AD DS) or Microsoft Entra Domain Services. This allows seamless migration of Windows file shares while fully preserving existing share-level RBAC and granular NTFS access control lists (ACLs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Azure Files", "High Load Scale"]
  },
  {
    id: "az-104-323",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication (Entra ID DS / AD DS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Files to migrate an on-premises Windows file server to Azure Files while preserving existing user Active Directory NTFS permissions and folder security ACLs.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Files SMB identity-based authentication with NTFS ACLs is under evaluation.",
    options: [
      { id: 'A', text: "Convert all shared files into relational database records in Azure SQL Database." },
      { id: 'B', text: "Distribute the storage account primary access key to all 5,000 domain user workstations." },
      { id: 'C', text: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions." },
      { id: 'D', text: "Configure anonymous public access on the Azure Files share." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions. Azure Files supports identity-based authentication over SMB using on-premises Active Directory Domain Services (AD DS) or Microsoft Entra Domain Services. This allows seamless migration of Windows file shares while fully preserving existing share-level RBAC and granular NTFS access control lists (ACLs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Azure Files", "Security Compliance"]
  },
  {
    id: "az-104-324",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication (Entra ID DS / AD DS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Files to migrate an on-premises Windows file server to Azure Files while preserving existing user Active Directory NTFS permissions and folder security ACLs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Files SMB identity-based authentication with NTFS ACLs is under evaluation.",
    options: [
      { id: 'A', text: "Convert all shared files into relational database records in Azure SQL Database." },
      { id: 'B', text: "Configure anonymous public access on the Azure Files share." },
      { id: 'C', text: "Distribute the storage account primary access key to all 5,000 domain user workstations." },
      { id: 'D', text: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions. Azure Files supports identity-based authentication over SMB using on-premises Active Directory Domain Services (AD DS) or Microsoft Entra Domain Services. This allows seamless migration of Windows file shares while fully preserving existing share-level RBAC and granular NTFS access control lists (ACLs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Azure Files", "Hybrid Migration"]
  },
  {
    id: "az-104-325",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Files Identity-Based Authentication (Entra ID DS / AD DS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Files to migrate an on-premises Windows file server to Azure Files while preserving existing user Active Directory NTFS permissions and folder security ACLs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Files SMB identity-based authentication with NTFS ACLs is under evaluation.",
    options: [
      { id: 'A', text: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions." },
      { id: 'B', text: "Convert all shared files into relational database records in Azure SQL Database." },
      { id: 'C', text: "Configure anonymous public access on the Azure Files share." },
      { id: 'D', text: "Distribute the storage account primary access key to all 5,000 domain user workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Active Directory Domain Services (AD DS) authentication on Azure Files and configure share-level and NTFS permissions. Azure Files supports identity-based authentication over SMB using on-premises Active Directory Domain Services (AD DS) or Microsoft Entra Domain Services. This allows seamless migration of Windows file shares while fully preserving existing share-level RBAC and granular NTFS access control lists (ACLs).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-auth-hybrid-identities-enable",
    tags: ["Azure Files", "Azure Files", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_13;
