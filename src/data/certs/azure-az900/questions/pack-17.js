export const AZURE_AZ900_QUESTIONS_17 = [
  {
    id: "az-900-401",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Tiers (Hot, Cool, Cold, Archive): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Storage to store compliance audit archives that are rarely accessed, retained for 10 years, and require the lowest possible per-gigabyte storage cost.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Blob Storage lifecycle access tiers is under consideration.",
    options: [
      { id: 'A', text: "Store the archives in Azure Blob Storage in the Archive access tier." },
      { id: 'B', text: "Store the archives in the Hot access tier with Premium SSD disks." },
      { id: 'C', text: "Keep the archives on running Azure Virtual Machine local OS disks." },
      { id: 'D', text: "Store the compliance records in Azure Cosmos DB with multi-region write replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the archives in Azure Blob Storage in the Archive access tier. Azure Blob Storage offers access tiers tailored to usage patterns: Hot (frequently accessed data), Cool (infrequently accessed, stored for at least 30 days), Cold (rarely accessed, stored for at least 90 days), and Archive (rarely accessed data with flexible latency requirements, stored for at least 180 days at the lowest storage cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Azure Storage", "Storage", "Dr Failover"]
  },
  {
    id: "az-900-402",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Tiers (Hot, Cool, Cold, Archive): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Storage to store compliance audit archives that are rarely accessed, retained for 10 years, and require the lowest possible per-gigabyte storage cost.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Blob Storage lifecycle access tiers is under consideration.",
    options: [
      { id: 'A', text: "Store the archives in Azure Blob Storage in the Archive access tier." },
      { id: 'B', text: "Store the archives in the Hot access tier with Premium SSD disks." },
      { id: 'C', text: "Keep the archives on running Azure Virtual Machine local OS disks." },
      { id: 'D', text: "Store the compliance records in Azure Cosmos DB with multi-region write replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the archives in Azure Blob Storage in the Archive access tier. Azure Blob Storage offers access tiers tailored to usage patterns: Hot (frequently accessed data), Cool (infrequently accessed, stored for at least 30 days), Cold (rarely accessed, stored for at least 90 days), and Archive (rarely accessed data with flexible latency requirements, stored for at least 180 days at the lowest storage cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Azure Storage", "Storage", "High Load Scale"]
  },
  {
    id: "az-900-403",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Tiers (Hot, Cool, Cold, Archive): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Storage to store compliance audit archives that are rarely accessed, retained for 10 years, and require the lowest possible per-gigabyte storage cost.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Blob Storage lifecycle access tiers is under consideration.",
    options: [
      { id: 'A', text: "Store the archives in Azure Blob Storage in the Archive access tier." },
      { id: 'B', text: "Store the archives in the Hot access tier with Premium SSD disks." },
      { id: 'C', text: "Keep the archives on running Azure Virtual Machine local OS disks." },
      { id: 'D', text: "Store the compliance records in Azure Cosmos DB with multi-region write replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the archives in Azure Blob Storage in the Archive access tier. Azure Blob Storage offers access tiers tailored to usage patterns: Hot (frequently accessed data), Cool (infrequently accessed, stored for at least 30 days), Cold (rarely accessed, stored for at least 90 days), and Archive (rarely accessed data with flexible latency requirements, stored for at least 180 days at the lowest storage cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Azure Storage", "Storage", "Security Compliance"]
  },
  {
    id: "az-900-404",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Tiers (Hot, Cool, Cold, Archive): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Storage to store compliance audit archives that are rarely accessed, retained for 10 years, and require the lowest possible per-gigabyte storage cost.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Blob Storage lifecycle access tiers is under consideration.",
    options: [
      { id: 'A', text: "Store the archives in Azure Blob Storage in the Archive access tier." },
      { id: 'B', text: "Store the archives in the Hot access tier with Premium SSD disks." },
      { id: 'C', text: "Keep the archives on running Azure Virtual Machine local OS disks." },
      { id: 'D', text: "Store the compliance records in Azure Cosmos DB with multi-region write replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the archives in Azure Blob Storage in the Archive access tier. Azure Blob Storage offers access tiers tailored to usage patterns: Hot (frequently accessed data), Cool (infrequently accessed, stored for at least 30 days), Cold (rarely accessed, stored for at least 90 days), and Archive (rarely accessed data with flexible latency requirements, stored for at least 180 days at the lowest storage cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Azure Storage", "Storage", "Hybrid Migration"]
  },
  {
    id: "az-900-405",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Blob Storage Tiers (Hot, Cool, Cold, Archive): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Storage to store compliance audit archives that are rarely accessed, retained for 10 years, and require the lowest possible per-gigabyte storage cost.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Blob Storage lifecycle access tiers is under consideration.",
    options: [
      { id: 'A', text: "Store the archives in Azure Blob Storage in the Archive access tier." },
      { id: 'B', text: "Store the archives in the Hot access tier with Premium SSD disks." },
      { id: 'C', text: "Keep the archives on running Azure Virtual Machine local OS disks." },
      { id: 'D', text: "Store the compliance records in Azure Cosmos DB with multi-region write replication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store the archives in Azure Blob Storage in the Archive access tier. Azure Blob Storage offers access tiers tailored to usage patterns: Hot (frequently accessed data), Cool (infrequently accessed, stored for at least 30 days), Cold (rarely accessed, stored for at least 90 days), and Archive (rarely accessed data with flexible latency requirements, stored for at least 180 days at the lowest storage cost).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview",
    tags: ["Azure Storage", "Storage", "Resilience Failure"]
  },
  {
    id: "az-900-406",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Redundancy (LRS, ZRS, GRS, GZRS): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Storage to protect mission-critical storage account data against regional catastrophic events by replicating three copies locally within a zone and three copies in a paired secondary region.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Storage replication options across zones and regions is under consideration.",
    options: [
      { id: 'A', text: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account." },
      { id: 'B', text: "Configure Locally Redundant Storage (LRS) within a single datacenter." },
      { id: 'C', text: "Configure Zone-Redundant Storage (ZRS) across three zones within one region only." },
      { id: 'D', text: "Rely on manual weekly export of storage blobs to local client workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account. Geo-zone-redundant storage (GZRS) combines the high availability of zone-redundant storage (ZRS) across three availability zones in the primary region with asynchronous replication to a secondary region (LRS in the paired region), delivering maximum durability and disaster resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Azure Storage", "Storage Durability", "Dr Failover"]
  },
  {
    id: "az-900-407",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Redundancy (LRS, ZRS, GRS, GZRS): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Storage to protect mission-critical storage account data against regional catastrophic events by replicating three copies locally within a zone and three copies in a paired secondary region.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Storage replication options across zones and regions is under consideration.",
    options: [
      { id: 'A', text: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account." },
      { id: 'B', text: "Configure Locally Redundant Storage (LRS) within a single datacenter." },
      { id: 'C', text: "Configure Zone-Redundant Storage (ZRS) across three zones within one region only." },
      { id: 'D', text: "Rely on manual weekly export of storage blobs to local client workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account. Geo-zone-redundant storage (GZRS) combines the high availability of zone-redundant storage (ZRS) across three availability zones in the primary region with asynchronous replication to a secondary region (LRS in the paired region), delivering maximum durability and disaster resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Azure Storage", "Storage Durability", "High Load Scale"]
  },
  {
    id: "az-900-408",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Redundancy (LRS, ZRS, GRS, GZRS): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Storage to protect mission-critical storage account data against regional catastrophic events by replicating three copies locally within a zone and three copies in a paired secondary region.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Storage replication options across zones and regions is under consideration.",
    options: [
      { id: 'A', text: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account." },
      { id: 'B', text: "Configure Locally Redundant Storage (LRS) within a single datacenter." },
      { id: 'C', text: "Configure Zone-Redundant Storage (ZRS) across three zones within one region only." },
      { id: 'D', text: "Rely on manual weekly export of storage blobs to local client workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account. Geo-zone-redundant storage (GZRS) combines the high availability of zone-redundant storage (ZRS) across three availability zones in the primary region with asynchronous replication to a secondary region (LRS in the paired region), delivering maximum durability and disaster resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Azure Storage", "Storage Durability", "Security Compliance"]
  },
  {
    id: "az-900-409",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Redundancy (LRS, ZRS, GRS, GZRS): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Storage to protect mission-critical storage account data against regional catastrophic events by replicating three copies locally within a zone and three copies in a paired secondary region.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Storage replication options across zones and regions is under consideration.",
    options: [
      { id: 'A', text: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account." },
      { id: 'B', text: "Configure Locally Redundant Storage (LRS) within a single datacenter." },
      { id: 'C', text: "Configure Zone-Redundant Storage (ZRS) across three zones within one region only." },
      { id: 'D', text: "Rely on manual weekly export of storage blobs to local client workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account. Geo-zone-redundant storage (GZRS) combines the high availability of zone-redundant storage (ZRS) across three availability zones in the primary region with asynchronous replication to a secondary region (LRS in the paired region), delivering maximum durability and disaster resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Azure Storage", "Storage Durability", "Hybrid Migration"]
  },
  {
    id: "az-900-410",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Storage Redundancy (LRS, ZRS, GRS, GZRS): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Storage to protect mission-critical storage account data against regional catastrophic events by replicating three copies locally within a zone and three copies in a paired secondary region.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Storage replication options across zones and regions is under consideration.",
    options: [
      { id: 'A', text: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account." },
      { id: 'B', text: "Configure Locally Redundant Storage (LRS) within a single datacenter." },
      { id: 'C', text: "Configure Zone-Redundant Storage (ZRS) across three zones within one region only." },
      { id: 'D', text: "Rely on manual weekly export of storage blobs to local client workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Geo-Zone-Redundant Storage (GZRS) for the Azure Storage account. Geo-zone-redundant storage (GZRS) combines the high availability of zone-redundant storage (ZRS) across three availability zones in the primary region with asynchronous replication to a secondary region (LRS in the paired region), delivering maximum durability and disaster resilience.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
    tags: ["Azure Storage", "Storage Durability", "Resilience Failure"]
  },
  {
    id: "az-900-411",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files and Azure NetApp Files: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Storage to provide shared file storage accessible concurrently from multiple Windows and Linux virtual machines via standard SMB and NFS network protocols.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Files managed SMB and NFS cloud file shares is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS." },
      { id: 'B', text: "Deploy an Azure Cosmos DB document collection for file sharing." },
      { id: 'C', text: "Store file shares on an unattached managed data disk." },
      { id: 'D', text: "Use Azure Table Storage with partition key indexing for binary file sharing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS. Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. Azure Files shares can be mounted concurrently by cloud or on-premises deployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Storage", "File Storage", "Dr Failover"]
  },
  {
    id: "az-900-412",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files and Azure NetApp Files: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Storage to provide shared file storage accessible concurrently from multiple Windows and Linux virtual machines via standard SMB and NFS network protocols.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Files managed SMB and NFS cloud file shares is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS." },
      { id: 'B', text: "Deploy an Azure Cosmos DB document collection for file sharing." },
      { id: 'C', text: "Store file shares on an unattached managed data disk." },
      { id: 'D', text: "Use Azure Table Storage with partition key indexing for binary file sharing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS. Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. Azure Files shares can be mounted concurrently by cloud or on-premises deployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Storage", "File Storage", "High Load Scale"]
  },
  {
    id: "az-900-413",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files and Azure NetApp Files: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Storage to provide shared file storage accessible concurrently from multiple Windows and Linux virtual machines via standard SMB and NFS network protocols.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Files managed SMB and NFS cloud file shares is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS." },
      { id: 'B', text: "Deploy an Azure Cosmos DB document collection for file sharing." },
      { id: 'C', text: "Store file shares on an unattached managed data disk." },
      { id: 'D', text: "Use Azure Table Storage with partition key indexing for binary file sharing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS. Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. Azure Files shares can be mounted concurrently by cloud or on-premises deployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Storage", "File Storage", "Security Compliance"]
  },
  {
    id: "az-900-414",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files and Azure NetApp Files: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Storage to provide shared file storage accessible concurrently from multiple Windows and Linux virtual machines via standard SMB and NFS network protocols.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Files managed SMB and NFS cloud file shares is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS." },
      { id: 'B', text: "Deploy an Azure Cosmos DB document collection for file sharing." },
      { id: 'C', text: "Store file shares on an unattached managed data disk." },
      { id: 'D', text: "Use Azure Table Storage with partition key indexing for binary file sharing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS. Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. Azure Files shares can be mounted concurrently by cloud or on-premises deployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Storage", "File Storage", "Hybrid Migration"]
  },
  {
    id: "az-900-415",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Files and Azure NetApp Files: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Storage to provide shared file storage accessible concurrently from multiple Windows and Linux virtual machines via standard SMB and NFS network protocols.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Files managed SMB and NFS cloud file shares is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS." },
      { id: 'B', text: "Deploy an Azure Cosmos DB document collection for file sharing." },
      { id: 'C', text: "Store file shares on an unattached managed data disk." },
      { id: 'D', text: "Use Azure Table Storage with partition key indexing for binary file sharing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Azure Files managed cloud file share mounted via SMB or NFS. Azure Files offers fully managed file shares in the cloud that are accessible via the industry-standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. Azure Files shares can be mounted concurrently by cloud or on-premises deployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
    tags: ["Azure Storage", "File Storage", "Resilience Failure"]
  },
  {
    id: "az-900-416",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure SQL Database and Managed Instance: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Databases to run an enterprise relational SQL database with automated high availability, built-in backups, and automated operating system and database engine patching.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure SQL Database relational database-as-a-service is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS)." },
      { id: 'B', text: "Install SQL Server on an unmanaged Azure Virtual Machine and configure manual OS patching." },
      { id: 'C', text: "Store relational database records in Azure Blob Storage block blobs." },
      { id: 'D', text: "Use Azure Cache for Redis as the primary permanent relational transaction database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS). Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most database management functions\u2014such as upgrading, patching, backups, and monitoring\u2014without user intervention, guaranteeing 99.99% availability with zero downtime maintenance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview",
    tags: ["Azure Databases", "Databases", "Dr Failover"]
  },
  {
    id: "az-900-417",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure SQL Database and Managed Instance: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Databases to run an enterprise relational SQL database with automated high availability, built-in backups, and automated operating system and database engine patching.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure SQL Database relational database-as-a-service is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS)." },
      { id: 'B', text: "Install SQL Server on an unmanaged Azure Virtual Machine and configure manual OS patching." },
      { id: 'C', text: "Store relational database records in Azure Blob Storage block blobs." },
      { id: 'D', text: "Use Azure Cache for Redis as the primary permanent relational transaction database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS). Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most database management functions\u2014such as upgrading, patching, backups, and monitoring\u2014without user intervention, guaranteeing 99.99% availability with zero downtime maintenance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview",
    tags: ["Azure Databases", "Databases", "High Load Scale"]
  },
  {
    id: "az-900-418",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure SQL Database and Managed Instance: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Databases to run an enterprise relational SQL database with automated high availability, built-in backups, and automated operating system and database engine patching.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure SQL Database relational database-as-a-service is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS)." },
      { id: 'B', text: "Install SQL Server on an unmanaged Azure Virtual Machine and configure manual OS patching." },
      { id: 'C', text: "Store relational database records in Azure Blob Storage block blobs." },
      { id: 'D', text: "Use Azure Cache for Redis as the primary permanent relational transaction database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS). Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most database management functions\u2014such as upgrading, patching, backups, and monitoring\u2014without user intervention, guaranteeing 99.99% availability with zero downtime maintenance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview",
    tags: ["Azure Databases", "Databases", "Security Compliance"]
  },
  {
    id: "az-900-419",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure SQL Database and Managed Instance: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Databases to run an enterprise relational SQL database with automated high availability, built-in backups, and automated operating system and database engine patching.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure SQL Database relational database-as-a-service is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS)." },
      { id: 'B', text: "Install SQL Server on an unmanaged Azure Virtual Machine and configure manual OS patching." },
      { id: 'C', text: "Store relational database records in Azure Blob Storage block blobs." },
      { id: 'D', text: "Use Azure Cache for Redis as the primary permanent relational transaction database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS). Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most database management functions\u2014such as upgrading, patching, backups, and monitoring\u2014without user intervention, guaranteeing 99.99% availability with zero downtime maintenance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview",
    tags: ["Azure Databases", "Databases", "Hybrid Migration"]
  },
  {
    id: "az-900-420",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure SQL Database and Managed Instance: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Databases to run an enterprise relational SQL database with automated high availability, built-in backups, and automated operating system and database engine patching.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure SQL Database relational database-as-a-service is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS)." },
      { id: 'B', text: "Install SQL Server on an unmanaged Azure Virtual Machine and configure manual OS patching." },
      { id: 'C', text: "Store relational database records in Azure Blob Storage block blobs." },
      { id: 'D', text: "Use Azure Cache for Redis as the primary permanent relational transaction database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure SQL Database as a fully managed relational Database-as-a-Service (DBaaS). Azure SQL Database is a fully managed platform as a service (PaaS) database engine that handles most database management functions\u2014such as upgrading, patching, backups, and monitoring\u2014without user intervention, guaranteeing 99.99% availability with zero downtime maintenance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview",
    tags: ["Azure Databases", "Databases", "Resilience Failure"]
  },
  {
    id: "az-900-421",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The organization evaluates Azure Databases to build a globally distributed web application requiring single-digit millisecond read and write response times at any scale with multi-region active-active writes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Cosmos DB globally distributed multi-model NoSQL database is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Cosmos DB with multi-region write replication." },
      { id: 'B', text: "Deploy a single-node MySQL server on an on-premises virtual machine." },
      { id: 'C', text: "Store operational state in Azure Table Storage with single-region LRS redundancy." },
      { id: 'D', text: "Use Azure Queue Storage to persist relational user profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Cosmos DB with multi-region write replication. Azure Cosmos DB is a fully managed NoSQL and relational database for modern app development. It offers single-digit millisecond response times, automatic and instant scalability, along with guaranteed speed at any scale, supporting document (NoSQL), MongoDB, Cassandra, Gremlin, and PostgreSQL APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Azure Databases", "NoSQL Databases", "Dr Failover"]
  },
  {
    id: "az-900-422",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The organization evaluates Azure Databases to build a globally distributed web application requiring single-digit millisecond read and write response times at any scale with multi-region active-active writes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Cosmos DB globally distributed multi-model NoSQL database is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Cosmos DB with multi-region write replication." },
      { id: 'B', text: "Deploy a single-node MySQL server on an on-premises virtual machine." },
      { id: 'C', text: "Store operational state in Azure Table Storage with single-region LRS redundancy." },
      { id: 'D', text: "Use Azure Queue Storage to persist relational user profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Cosmos DB with multi-region write replication. Azure Cosmos DB is a fully managed NoSQL and relational database for modern app development. It offers single-digit millisecond response times, automatic and instant scalability, along with guaranteed speed at any scale, supporting document (NoSQL), MongoDB, Cassandra, Gremlin, and PostgreSQL APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Azure Databases", "NoSQL Databases", "High Load Scale"]
  },
  {
    id: "az-900-423",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The organization evaluates Azure Databases to build a globally distributed web application requiring single-digit millisecond read and write response times at any scale with multi-region active-active writes.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Cosmos DB globally distributed multi-model NoSQL database is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Cosmos DB with multi-region write replication." },
      { id: 'B', text: "Deploy a single-node MySQL server on an on-premises virtual machine." },
      { id: 'C', text: "Store operational state in Azure Table Storage with single-region LRS redundancy." },
      { id: 'D', text: "Use Azure Queue Storage to persist relational user profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Cosmos DB with multi-region write replication. Azure Cosmos DB is a fully managed NoSQL and relational database for modern app development. It offers single-digit millisecond response times, automatic and instant scalability, along with guaranteed speed at any scale, supporting document (NoSQL), MongoDB, Cassandra, Gremlin, and PostgreSQL APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Azure Databases", "NoSQL Databases", "Security Compliance"]
  },
  {
    id: "az-900-424",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to the Microsoft Azure Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The organization evaluates Azure Databases to build a globally distributed web application requiring single-digit millisecond read and write response times at any scale with multi-region active-active writes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Cosmos DB globally distributed multi-model NoSQL database is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Cosmos DB with multi-region write replication." },
      { id: 'B', text: "Deploy a single-node MySQL server on an on-premises virtual machine." },
      { id: 'C', text: "Store operational state in Azure Table Storage with single-region LRS redundancy." },
      { id: 'D', text: "Use Azure Queue Storage to persist relational user profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Cosmos DB with multi-region write replication. Azure Cosmos DB is a fully managed NoSQL and relational database for modern app development. It offers single-digit millisecond response times, automatic and instant scalability, along with guaranteed speed at any scale, supporting document (NoSQL), MongoDB, Cassandra, Gremlin, and PostgreSQL APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Azure Databases", "NoSQL Databases", "Hybrid Migration"]
  },
  {
    id: "az-900-425",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d2",
    domainName: "Describe Azure Architecture and Services",
    title: "Azure Cosmos DB: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The organization evaluates Azure Databases to build a globally distributed web application requiring single-digit millisecond read and write response times at any scale with multi-region active-active writes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Cosmos DB globally distributed multi-model NoSQL database is under consideration.",
    options: [
      { id: 'A', text: "Deploy Azure Cosmos DB with multi-region write replication." },
      { id: 'B', text: "Deploy a single-node MySQL server on an on-premises virtual machine." },
      { id: 'C', text: "Store operational state in Azure Table Storage with single-region LRS redundancy." },
      { id: 'D', text: "Use Azure Queue Storage to persist relational user profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Azure Cosmos DB with multi-region write replication. Azure Cosmos DB is a fully managed NoSQL and relational database for modern app development. It offers single-digit millisecond response times, automatic and instant scalability, along with guaranteed speed at any scale, supporting document (NoSQL), MongoDB, Cassandra, Gremlin, and PostgreSQL APIs.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/introduction",
    tags: ["Azure Databases", "NoSQL Databases", "Resilience Failure"]
  }
];

export default AZURE_AZ900_QUESTIONS_17;
