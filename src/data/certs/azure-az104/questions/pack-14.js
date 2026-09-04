export const AZURE_AZ104_QUESTIONS_14 = [
  {
    id: "az-104-326",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Agent and Cloud Tiering: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Hybrid Storage to centralize enterprise file shares in Azure Files while caching frequently accessed files locally on branch office Windows Servers with limited disk capacity.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure File Sync multi-site synchronization with Cloud Tiering is under evaluation.",
    options: [
      { id: 'A', text: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers." },
      { id: 'B', text: "Configure manual FTP synchronization scripts running between branch offices overnight." },
      { id: 'C', text: "Upgrade local server hard drives at all 50 branch offices to 100 TB physical SAN arrays." },
      { id: 'D', text: "Instruct branch office users to access files solely via the Azure portal web interface." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. Cloud tiering caches frequently accessed files locally while tiering rarely accessed files to Azure Files, preserving local storage space while maintaining seamless local performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview",
    tags: ["Azure Hybrid Storage", "Hybrid Storage", "Dr Failover"]
  },
  {
    id: "az-104-327",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Agent and Cloud Tiering: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Hybrid Storage to centralize enterprise file shares in Azure Files while caching frequently accessed files locally on branch office Windows Servers with limited disk capacity.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure File Sync multi-site synchronization with Cloud Tiering is under evaluation.",
    options: [
      { id: 'A', text: "Upgrade local server hard drives at all 50 branch offices to 100 TB physical SAN arrays." },
      { id: 'B', text: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers." },
      { id: 'C', text: "Instruct branch office users to access files solely via the Azure portal web interface." },
      { id: 'D', text: "Configure manual FTP synchronization scripts running between branch offices overnight." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. Cloud tiering caches frequently accessed files locally while tiering rarely accessed files to Azure Files, preserving local storage space while maintaining seamless local performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview",
    tags: ["Azure Hybrid Storage", "Hybrid Storage", "High Load Scale"]
  },
  {
    id: "az-104-328",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Agent and Cloud Tiering: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Hybrid Storage to centralize enterprise file shares in Azure Files while caching frequently accessed files locally on branch office Windows Servers with limited disk capacity.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure File Sync multi-site synchronization with Cloud Tiering is under evaluation.",
    options: [
      { id: 'A', text: "Instruct branch office users to access files solely via the Azure portal web interface." },
      { id: 'B', text: "Configure manual FTP synchronization scripts running between branch offices overnight." },
      { id: 'C', text: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers." },
      { id: 'D', text: "Upgrade local server hard drives at all 50 branch offices to 100 TB physical SAN arrays." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. Cloud tiering caches frequently accessed files locally while tiering rarely accessed files to Azure Files, preserving local storage space while maintaining seamless local performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview",
    tags: ["Azure Hybrid Storage", "Hybrid Storage", "Security Compliance"]
  },
  {
    id: "az-104-329",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Agent and Cloud Tiering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Hybrid Storage to centralize enterprise file shares in Azure Files while caching frequently accessed files locally on branch office Windows Servers with limited disk capacity.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure File Sync multi-site synchronization with Cloud Tiering is under evaluation.",
    options: [
      { id: 'A', text: "Configure manual FTP synchronization scripts running between branch offices overnight." },
      { id: 'B', text: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers." },
      { id: 'C', text: "Upgrade local server hard drives at all 50 branch offices to 100 TB physical SAN arrays." },
      { id: 'D', text: "Instruct branch office users to access files solely via the Azure portal web interface." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. Cloud tiering caches frequently accessed files locally while tiering rarely accessed files to Azure Files, preserving local storage space while maintaining seamless local performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview",
    tags: ["Azure Hybrid Storage", "Hybrid Storage", "Hybrid Migration"]
  },
  {
    id: "az-104-330",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure File Sync Agent and Cloud Tiering: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Hybrid Storage to centralize enterprise file shares in Azure Files while caching frequently accessed files locally on branch office Windows Servers with limited disk capacity.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure File Sync multi-site synchronization with Cloud Tiering is under evaluation.",
    options: [
      { id: 'A', text: "Configure manual FTP synchronization scripts running between branch offices overnight." },
      { id: 'B', text: "Upgrade local server hard drives at all 50 branch offices to 100 TB physical SAN arrays." },
      { id: 'C', text: "Instruct branch office users to access files solely via the Azure portal web interface." },
      { id: 'D', text: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Azure File Sync with Cloud Tiering enabled on registered branch office Windows Servers. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. Cloud tiering caches frequently accessed files locally while tiering rarely accessed files to Azure Files, preserving local storage space while maintaining seamless local performance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-cloud-tiering-overview",
    tags: ["Azure Hybrid Storage", "Hybrid Storage", "Resilience Failure"]
  },
  {
    id: "az-104-331",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy and Azure Storage Explorer: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage Management to transfer 10 TB of historical image files from an on-premises network-attached storage (NAS) appliance to Azure Blob Storage with high-performance parallelism.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? AzCopy command-line utility and Storage Explorer GUI is under evaluation.",
    options: [
      { id: 'A', text: "Upload files one by one using web browser drag-and-drop in the Azure portal." },
      { id: 'B', text: "Send physical DVD media discs containing images to Microsoft by postal mail." },
      { id: 'C', text: "Attach the NAS appliance directly to an Azure Virtual Machine via USB cabling." },
      { id: 'D', text: "Use the AzCopy command-line utility with automated retry and resume capabilities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the AzCopy command-line utility with automated retry and resume capabilities. AzCopy is a high-performance command-line utility designed for copying data to and from Azure Blob, File, and Table storage. It offers multi-threaded parallel transfers, automated resumes after network interruptions, and synchronization capabilities between local file systems and cloud storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["Azure Storage Management", "Storage Migration", "Dr Failover"]
  },
  {
    id: "az-104-332",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy and Azure Storage Explorer: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage Management to transfer 10 TB of historical image files from an on-premises network-attached storage (NAS) appliance to Azure Blob Storage with high-performance parallelism.",
    question: "Which architectural approach should the team select to manage this demand efficiently? AzCopy command-line utility and Storage Explorer GUI is under evaluation.",
    options: [
      { id: 'A', text: "Use the AzCopy command-line utility with automated retry and resume capabilities." },
      { id: 'B', text: "Upload files one by one using web browser drag-and-drop in the Azure portal." },
      { id: 'C', text: "Attach the NAS appliance directly to an Azure Virtual Machine via USB cabling." },
      { id: 'D', text: "Send physical DVD media discs containing images to Microsoft by postal mail." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the AzCopy command-line utility with automated retry and resume capabilities. AzCopy is a high-performance command-line utility designed for copying data to and from Azure Blob, File, and Table storage. It offers multi-threaded parallel transfers, automated resumes after network interruptions, and synchronization capabilities between local file systems and cloud storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["Azure Storage Management", "Storage Migration", "High Load Scale"]
  },
  {
    id: "az-104-333",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy and Azure Storage Explorer: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage Management to transfer 10 TB of historical image files from an on-premises network-attached storage (NAS) appliance to Azure Blob Storage with high-performance parallelism.",
    question: "Which solution properly implements these mandatory security and governance controls? AzCopy command-line utility and Storage Explorer GUI is under evaluation.",
    options: [
      { id: 'A', text: "Send physical DVD media discs containing images to Microsoft by postal mail." },
      { id: 'B', text: "Use the AzCopy command-line utility with automated retry and resume capabilities." },
      { id: 'C', text: "Attach the NAS appliance directly to an Azure Virtual Machine via USB cabling." },
      { id: 'D', text: "Upload files one by one using web browser drag-and-drop in the Azure portal." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the AzCopy command-line utility with automated retry and resume capabilities. AzCopy is a high-performance command-line utility designed for copying data to and from Azure Blob, File, and Table storage. It offers multi-threaded parallel transfers, automated resumes after network interruptions, and synchronization capabilities between local file systems and cloud storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["Azure Storage Management", "Storage Migration", "Security Compliance"]
  },
  {
    id: "az-104-334",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy and Azure Storage Explorer: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage Management to transfer 10 TB of historical image files from an on-premises network-attached storage (NAS) appliance to Azure Blob Storage with high-performance parallelism.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? AzCopy command-line utility and Storage Explorer GUI is under evaluation.",
    options: [
      { id: 'A', text: "Attach the NAS appliance directly to an Azure Virtual Machine via USB cabling." },
      { id: 'B', text: "Send physical DVD media discs containing images to Microsoft by postal mail." },
      { id: 'C', text: "Use the AzCopy command-line utility with automated retry and resume capabilities." },
      { id: 'D', text: "Upload files one by one using web browser drag-and-drop in the Azure portal." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the AzCopy command-line utility with automated retry and resume capabilities. AzCopy is a high-performance command-line utility designed for copying data to and from Azure Blob, File, and Table storage. It offers multi-threaded parallel transfers, automated resumes after network interruptions, and synchronization capabilities between local file systems and cloud storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["Azure Storage Management", "Storage Migration", "Hybrid Migration"]
  },
  {
    id: "az-104-335",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "AzCopy and Azure Storage Explorer: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage Management to transfer 10 TB of historical image files from an on-premises network-attached storage (NAS) appliance to Azure Blob Storage with high-performance parallelism.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? AzCopy command-line utility and Storage Explorer GUI is under evaluation.",
    options: [
      { id: 'A', text: "Upload files one by one using web browser drag-and-drop in the Azure portal." },
      { id: 'B', text: "Attach the NAS appliance directly to an Azure Virtual Machine via USB cabling." },
      { id: 'C', text: "Send physical DVD media discs containing images to Microsoft by postal mail." },
      { id: 'D', text: "Use the AzCopy command-line utility with automated retry and resume capabilities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the AzCopy command-line utility with automated retry and resume capabilities. AzCopy is a high-performance command-line utility designed for copying data to and from Azure Blob, File, and Table storage. It offers multi-threaded parallel transfers, automated resumes after network interruptions, and synchronization capabilities between local file systems and cloud storage.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10",
    tags: ["Azure Storage Management", "Storage Migration", "Resilience Failure"]
  },
  {
    id: "az-104-336",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Object Replication: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Storage Replication to asynchronously replicate block blobs between separate Azure Storage accounts located in different regions to satisfy low-latency local read requirements in Europe and the US.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Asynchronous cross-account block blob object replication is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Virtual Machine that polls the source container and downloads files via HTTP." },
      { id: 'B', text: "Configure Azure Storage Object Replication between the source and destination storage accounts." },
      { id: 'C', text: "Enable Locally Redundant Storage (LRS) on the source storage account." },
      { id: 'D', text: "Manually copy blobs using Azure Storage Explorer at the end of each business day." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure Storage Object Replication between the source and destination storage accounts. Object replication asynchronously copies block blobs according to rules between a source storage account and a destination storage account in any region. This minimizes read latency for regional compute workloads and optimizes compute access without copying entire storage accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Azure Storage Replication", "Blob Replication", "Dr Failover"]
  },
  {
    id: "az-104-337",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Object Replication: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Storage Replication to asynchronously replicate block blobs between separate Azure Storage accounts located in different regions to satisfy low-latency local read requirements in Europe and the US.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Asynchronous cross-account block blob object replication is under evaluation.",
    options: [
      { id: 'A', text: "Manually copy blobs using Azure Storage Explorer at the end of each business day." },
      { id: 'B', text: "Enable Locally Redundant Storage (LRS) on the source storage account." },
      { id: 'C', text: "Deploy an Azure Virtual Machine that polls the source container and downloads files via HTTP." },
      { id: 'D', text: "Configure Azure Storage Object Replication between the source and destination storage accounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Azure Storage Object Replication between the source and destination storage accounts. Object replication asynchronously copies block blobs according to rules between a source storage account and a destination storage account in any region. This minimizes read latency for regional compute workloads and optimizes compute access without copying entire storage accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Azure Storage Replication", "Blob Replication", "High Load Scale"]
  },
  {
    id: "az-104-338",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Object Replication: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Storage Replication to asynchronously replicate block blobs between separate Azure Storage accounts located in different regions to satisfy low-latency local read requirements in Europe and the US.",
    question: "Which solution properly implements these mandatory security and governance controls? Asynchronous cross-account block blob object replication is under evaluation.",
    options: [
      { id: 'A', text: "Configure Azure Storage Object Replication between the source and destination storage accounts." },
      { id: 'B', text: "Manually copy blobs using Azure Storage Explorer at the end of each business day." },
      { id: 'C', text: "Deploy an Azure Virtual Machine that polls the source container and downloads files via HTTP." },
      { id: 'D', text: "Enable Locally Redundant Storage (LRS) on the source storage account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Storage Object Replication between the source and destination storage accounts. Object replication asynchronously copies block blobs according to rules between a source storage account and a destination storage account in any region. This minimizes read latency for regional compute workloads and optimizes compute access without copying entire storage accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Azure Storage Replication", "Blob Replication", "Security Compliance"]
  },
  {
    id: "az-104-339",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Object Replication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Storage Replication to asynchronously replicate block blobs between separate Azure Storage accounts located in different regions to satisfy low-latency local read requirements in Europe and the US.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Asynchronous cross-account block blob object replication is under evaluation.",
    options: [
      { id: 'A', text: "Configure Azure Storage Object Replication between the source and destination storage accounts." },
      { id: 'B', text: "Manually copy blobs using Azure Storage Explorer at the end of each business day." },
      { id: 'C', text: "Enable Locally Redundant Storage (LRS) on the source storage account." },
      { id: 'D', text: "Deploy an Azure Virtual Machine that polls the source container and downloads files via HTTP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure Storage Object Replication between the source and destination storage accounts. Object replication asynchronously copies block blobs according to rules between a source storage account and a destination storage account in any region. This minimizes read latency for regional compute workloads and optimizes compute access without copying entire storage accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Azure Storage Replication", "Blob Replication", "Hybrid Migration"]
  },
  {
    id: "az-104-340",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d2",
    domainName: "Implement and manage storage",
    title: "Azure Storage Object Replication: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Storage Replication to asynchronously replicate block blobs between separate Azure Storage accounts located in different regions to satisfy low-latency local read requirements in Europe and the US.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Asynchronous cross-account block blob object replication is under evaluation.",
    options: [
      { id: 'A', text: "Deploy an Azure Virtual Machine that polls the source container and downloads files via HTTP." },
      { id: 'B', text: "Configure Azure Storage Object Replication between the source and destination storage accounts." },
      { id: 'C', text: "Manually copy blobs using Azure Storage Explorer at the end of each business day." },
      { id: 'D', text: "Enable Locally Redundant Storage (LRS) on the source storage account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure Storage Object Replication between the source and destination storage accounts. Object replication asynchronously copies block blobs according to rules between a source storage account and a destination storage account in any region. This minimizes read latency for regional compute workloads and optimizes compute access without copying entire storage accounts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview",
    tags: ["Azure Storage Replication", "Blob Replication", "Resilience Failure"]
  },
  {
    id: "az-104-341",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Size Modification and Availability Implications: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Virtual Machines to resize an existing Azure Virtual Machine to a larger instance family that is not supported on the current physical host hardware cluster.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? VM resizing considerations and hardware cluster deallocation is under evaluation.",
    options: [
      { id: 'A', text: "Delete the virtual machine and OS disk, then recreate everything from scratch." },
      { id: 'B', text: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size." },
      { id: 'C', text: "Change the VM size on the fly while it is running without any downtime." },
      { id: 'D', text: "Convert the VM to an Azure Function app to adjust compute capacity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size. When resizing an Azure VM, if the desired size is available on the current physical hardware cluster hosting the VM, it can be resized with a simple reboot. If the desired size requires hardware not available on the current cluster, the VM must first be deallocated (stopped), releasing it from the cluster so it can start on a compatible cluster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Azure Virtual Machines", "Compute", "Dr Failover"]
  },
  {
    id: "az-104-342",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Size Modification and Availability Implications: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Virtual Machines to resize an existing Azure Virtual Machine to a larger instance family that is not supported on the current physical host hardware cluster.",
    question: "Which architectural approach should the team select to manage this demand efficiently? VM resizing considerations and hardware cluster deallocation is under evaluation.",
    options: [
      { id: 'A', text: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size." },
      { id: 'B', text: "Delete the virtual machine and OS disk, then recreate everything from scratch." },
      { id: 'C', text: "Change the VM size on the fly while it is running without any downtime." },
      { id: 'D', text: "Convert the VM to an Azure Function app to adjust compute capacity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size. When resizing an Azure VM, if the desired size is available on the current physical hardware cluster hosting the VM, it can be resized with a simple reboot. If the desired size requires hardware not available on the current cluster, the VM must first be deallocated (stopped), releasing it from the cluster so it can start on a compatible cluster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Azure Virtual Machines", "Compute", "High Load Scale"]
  },
  {
    id: "az-104-343",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Size Modification and Availability Implications: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Virtual Machines to resize an existing Azure Virtual Machine to a larger instance family that is not supported on the current physical host hardware cluster.",
    question: "Which solution properly implements these mandatory security and governance controls? VM resizing considerations and hardware cluster deallocation is under evaluation.",
    options: [
      { id: 'A', text: "Convert the VM to an Azure Function app to adjust compute capacity." },
      { id: 'B', text: "Delete the virtual machine and OS disk, then recreate everything from scratch." },
      { id: 'C', text: "Change the VM size on the fly while it is running without any downtime." },
      { id: 'D', text: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size. When resizing an Azure VM, if the desired size is available on the current physical hardware cluster hosting the VM, it can be resized with a simple reboot. If the desired size requires hardware not available on the current cluster, the VM must first be deallocated (stopped), releasing it from the cluster so it can start on a compatible cluster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Azure Virtual Machines", "Compute", "Security Compliance"]
  },
  {
    id: "az-104-344",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Size Modification and Availability Implications: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Virtual Machines to resize an existing Azure Virtual Machine to a larger instance family that is not supported on the current physical host hardware cluster.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? VM resizing considerations and hardware cluster deallocation is under evaluation.",
    options: [
      { id: 'A', text: "Change the VM size on the fly while it is running without any downtime." },
      { id: 'B', text: "Convert the VM to an Azure Function app to adjust compute capacity." },
      { id: 'C', text: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size." },
      { id: 'D', text: "Delete the virtual machine and OS disk, then recreate everything from scratch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size. When resizing an Azure VM, if the desired size is available on the current physical hardware cluster hosting the VM, it can be resized with a simple reboot. If the desired size requires hardware not available on the current cluster, the VM must first be deallocated (stopped), releasing it from the cluster so it can start on a compatible cluster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Azure Virtual Machines", "Compute", "Hybrid Migration"]
  },
  {
    id: "az-104-345",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Size Modification and Availability Implications: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Virtual Machines to resize an existing Azure Virtual Machine to a larger instance family that is not supported on the current physical host hardware cluster.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? VM resizing considerations and hardware cluster deallocation is under evaluation.",
    options: [
      { id: 'A', text: "Change the VM size on the fly while it is running without any downtime." },
      { id: 'B', text: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size." },
      { id: 'C', text: "Delete the virtual machine and OS disk, then recreate everything from scratch." },
      { id: 'D', text: "Convert the VM to an Azure Function app to adjust compute capacity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deallocate (stop) the virtual machine first, change the VM size, and restart the VM on a cluster supporting the new size. When resizing an Azure VM, if the desired size is available on the current physical hardware cluster hosting the VM, it can be resized with a simple reboot. If the desired size requires hardware not available on the current cluster, the VM must first be deallocated (stopped), releasing it from the cluster so it can start on a compatible cluster.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/resize-vm",
    tags: ["Azure Virtual Machines", "Compute", "Resilience Failure"]
  },
  {
    id: "az-104-346",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Availability Sets (Fault and Update Domains): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Virtual Machines to protect two legacy IaaS web servers from simultaneous physical hardware failures and planned Azure host maintenance updates within a region lacking Availability Zones.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Availability Sets with Fault Domains and Update Domains is under evaluation.",
    options: [
      { id: 'A', text: "Place both virtual machines on the same physical host hardware rack." },
      { id: 'B', text: "Deploy both virtual machines into the same Azure App Service Plan." },
      { id: 'C', text: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains." },
      { id: 'D', text: "Configure an Azure Bastion host to manage both virtual machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains. An Azure Availability Set is a logical grouping of VMs that ensures the VMs are placed across multiple physical hardware racks (Fault Domains, up to 3) and planned maintenance boundaries (Update Domains, up to 20). This prevents a single hardware failure or maintenance event from taking down all instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    tags: ["Azure Virtual Machines", "High Availability", "Dr Failover"]
  },
  {
    id: "az-104-347",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Availability Sets (Fault and Update Domains): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Virtual Machines to protect two legacy IaaS web servers from simultaneous physical hardware failures and planned Azure host maintenance updates within a region lacking Availability Zones.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Availability Sets with Fault Domains and Update Domains is under evaluation.",
    options: [
      { id: 'A', text: "Deploy both virtual machines into the same Azure App Service Plan." },
      { id: 'B', text: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains." },
      { id: 'C', text: "Configure an Azure Bastion host to manage both virtual machines." },
      { id: 'D', text: "Place both virtual machines on the same physical host hardware rack." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains. An Azure Availability Set is a logical grouping of VMs that ensures the VMs are placed across multiple physical hardware racks (Fault Domains, up to 3) and planned maintenance boundaries (Update Domains, up to 20). This prevents a single hardware failure or maintenance event from taking down all instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    tags: ["Azure Virtual Machines", "High Availability", "High Load Scale"]
  },
  {
    id: "az-104-348",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Availability Sets (Fault and Update Domains): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Virtual Machines to protect two legacy IaaS web servers from simultaneous physical hardware failures and planned Azure host maintenance updates within a region lacking Availability Zones.",
    question: "Which solution properly implements these mandatory security and governance controls? Availability Sets with Fault Domains and Update Domains is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Bastion host to manage both virtual machines." },
      { id: 'B', text: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains." },
      { id: 'C', text: "Deploy both virtual machines into the same Azure App Service Plan." },
      { id: 'D', text: "Place both virtual machines on the same physical host hardware rack." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains. An Azure Availability Set is a logical grouping of VMs that ensures the VMs are placed across multiple physical hardware racks (Fault Domains, up to 3) and planned maintenance boundaries (Update Domains, up to 20). This prevents a single hardware failure or maintenance event from taking down all instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    tags: ["Azure Virtual Machines", "High Availability", "Security Compliance"]
  },
  {
    id: "az-104-349",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Availability Sets (Fault and Update Domains): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Virtual Machines to protect two legacy IaaS web servers from simultaneous physical hardware failures and planned Azure host maintenance updates within a region lacking Availability Zones.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Availability Sets with Fault Domains and Update Domains is under evaluation.",
    options: [
      { id: 'A', text: "Place both virtual machines on the same physical host hardware rack." },
      { id: 'B', text: "Configure an Azure Bastion host to manage both virtual machines." },
      { id: 'C', text: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains." },
      { id: 'D', text: "Deploy both virtual machines into the same Azure App Service Plan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains. An Azure Availability Set is a logical grouping of VMs that ensures the VMs are placed across multiple physical hardware racks (Fault Domains, up to 3) and planned maintenance boundaries (Update Domains, up to 20). This prevents a single hardware failure or maintenance event from taking down all instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    tags: ["Azure Virtual Machines", "High Availability", "Hybrid Migration"]
  },
  {
    id: "az-104-350",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d3",
    domainName: "Deploy and manage Azure compute resources",
    title: "Azure VM Availability Sets (Fault and Update Domains): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Virtual Machines to protect two legacy IaaS web servers from simultaneous physical hardware failures and planned Azure host maintenance updates within a region lacking Availability Zones.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Availability Sets with Fault Domains and Update Domains is under evaluation.",
    options: [
      { id: 'A', text: "Deploy both virtual machines into the same Azure App Service Plan." },
      { id: 'B', text: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains." },
      { id: 'C', text: "Configure an Azure Bastion host to manage both virtual machines." },
      { id: 'D', text: "Place both virtual machines on the same physical host hardware rack." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the virtual machines into an Azure Availability Set configured with fault domains and update domains. An Azure Availability Set is a logical grouping of VMs that ensures the VMs are placed across multiple physical hardware racks (Fault Domains, up to 3) and planned maintenance boundaries (Update Domains, up to 20). This prevents a single hardware failure or maintenance event from taking down all instances.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview",
    tags: ["Azure Virtual Machines", "High Availability", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_14;
