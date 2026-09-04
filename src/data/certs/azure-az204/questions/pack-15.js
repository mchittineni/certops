export const AZURE_AZ204_QUESTIONS_15 = [
  {
    id: "azure-az204-351",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Leases (Pessimistic Concurrency): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Storage to acquire an exclusive write lock on a shared state file in Azure Blob Storage so only one worker node can process and update it at any given time.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Blob leases acquiring 15-60 second or infinite exclusive write locks is under consideration.",
    options: [
      { id: 'A', text: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing." },
      { id: 'B', text: "Change the storage account access keys whenever a worker starts processing." },
      { id: 'C', text: "Set the blob container permissions to private read-only access." },
      { id: 'D', text: "Delete the file from storage and re-upload it after modification completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing. An Azure Blob Lease creates and manages a lock on a blob for write and delete operations. Leases can be acquired for durations of 15 to 60 seconds (or infinite). While a lease is active, any other request attempting to modify or delete the blob without the lease ID is rejected with HTTP 412.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-lease",
    tags: ["Azure Storage", "Blob Storage", "Dr Failover"]
  },
  {
    id: "azure-az204-352",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Leases (Pessimistic Concurrency): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Storage to acquire an exclusive write lock on a shared state file in Azure Blob Storage so only one worker node can process and update it at any given time.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Blob leases acquiring 15-60 second or infinite exclusive write locks is under consideration.",
    options: [
      { id: 'A', text: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing." },
      { id: 'B', text: "Change the storage account access keys whenever a worker starts processing." },
      { id: 'C', text: "Set the blob container permissions to private read-only access." },
      { id: 'D', text: "Delete the file from storage and re-upload it after modification completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing. An Azure Blob Lease creates and manages a lock on a blob for write and delete operations. Leases can be acquired for durations of 15 to 60 seconds (or infinite). While a lease is active, any other request attempting to modify or delete the blob without the lease ID is rejected with HTTP 412.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-lease",
    tags: ["Azure Storage", "Blob Storage", "High Load Scale"]
  },
  {
    id: "azure-az204-353",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Leases (Pessimistic Concurrency): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Storage to acquire an exclusive write lock on a shared state file in Azure Blob Storage so only one worker node can process and update it at any given time.",
    question: "Which solution properly implements these mandatory security and governance controls? Blob leases acquiring 15-60 second or infinite exclusive write locks is under consideration.",
    options: [
      { id: 'A', text: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing." },
      { id: 'B', text: "Change the storage account access keys whenever a worker starts processing." },
      { id: 'C', text: "Set the blob container permissions to private read-only access." },
      { id: 'D', text: "Delete the file from storage and re-upload it after modification completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing. An Azure Blob Lease creates and manages a lock on a blob for write and delete operations. Leases can be acquired for durations of 15 to 60 seconds (or infinite). While a lease is active, any other request attempting to modify or delete the blob without the lease ID is rejected with HTTP 412.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-lease",
    tags: ["Azure Storage", "Blob Storage", "Security Compliance"]
  },
  {
    id: "azure-az204-354",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Leases (Pessimistic Concurrency): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Storage to acquire an exclusive write lock on a shared state file in Azure Blob Storage so only one worker node can process and update it at any given time.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Blob leases acquiring 15-60 second or infinite exclusive write locks is under consideration.",
    options: [
      { id: 'A', text: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing." },
      { id: 'B', text: "Change the storage account access keys whenever a worker starts processing." },
      { id: 'C', text: "Set the blob container permissions to private read-only access." },
      { id: 'D', text: "Delete the file from storage and re-upload it after modification completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing. An Azure Blob Lease creates and manages a lock on a blob for write and delete operations. Leases can be acquired for durations of 15 to 60 seconds (or infinite). While a lease is active, any other request attempting to modify or delete the blob without the lease ID is rejected with HTTP 412.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-lease",
    tags: ["Azure Storage", "Blob Storage", "Hybrid Migration"]
  },
  {
    id: "azure-az204-355",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Leases (Pessimistic Concurrency): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Storage to acquire an exclusive write lock on a shared state file in Azure Blob Storage so only one worker node can process and update it at any given time.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Blob leases acquiring 15-60 second or infinite exclusive write locks is under consideration.",
    options: [
      { id: 'A', text: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing." },
      { id: 'B', text: "Change the storage account access keys whenever a worker starts processing." },
      { id: 'C', text: "Set the blob container permissions to private read-only access." },
      { id: 'D', text: "Delete the file from storage and re-upload it after modification completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Acquire an exclusive Blob Lease with a 60-second duration and renew the lease ID during processing. An Azure Blob Lease creates and manages a lock on a blob for write and delete operations. Leases can be acquired for durations of 15 to 60 seconds (or infinite). While a lease is active, any other request attempting to modify or delete the blob without the lease ID is rejected with HTTP 412.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-lease",
    tags: ["Azure Storage", "Blob Storage", "Resilience Failure"]
  },
  {
    id: "azure-az204-356",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Undelete: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Storage to recover a mission-critical financial report blob that was accidentally deleted by an automated cleanup script 48 hours ago.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Blob Soft Delete with point-in-time undelete restoration is under consideration.",
    options: [
      { id: 'A', text: "Invoke the Undelete Blob API on the soft-deleted blob in the container." },
      { id: 'B', text: "Submit a physical data center recovery request to Microsoft support." },
      { id: 'C', text: "Restore the entire virtual machine operating system disk from yesterday's backup." },
      { id: 'D', text: "Create a new blank blob with the same name to overwrite the missing data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the Undelete Blob API on the soft-deleted blob in the container. When Blob Soft Delete is enabled on an Azure Storage account, deleted blobs and snapshots are maintained in a soft-deleted state for the duration of the retention period. Calling the `Undelete Blob` API restores the soft-deleted blob and its versions to an active state.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage", "Blob Storage", "Dr Failover"]
  },
  {
    id: "azure-az204-357",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Undelete: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Storage to recover a mission-critical financial report blob that was accidentally deleted by an automated cleanup script 48 hours ago.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Blob Soft Delete with point-in-time undelete restoration is under consideration.",
    options: [
      { id: 'A', text: "Invoke the Undelete Blob API on the soft-deleted blob in the container." },
      { id: 'B', text: "Submit a physical data center recovery request to Microsoft support." },
      { id: 'C', text: "Restore the entire virtual machine operating system disk from yesterday's backup." },
      { id: 'D', text: "Create a new blank blob with the same name to overwrite the missing data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the Undelete Blob API on the soft-deleted blob in the container. When Blob Soft Delete is enabled on an Azure Storage account, deleted blobs and snapshots are maintained in a soft-deleted state for the duration of the retention period. Calling the `Undelete Blob` API restores the soft-deleted blob and its versions to an active state.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage", "Blob Storage", "High Load Scale"]
  },
  {
    id: "azure-az204-358",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Undelete: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Storage to recover a mission-critical financial report blob that was accidentally deleted by an automated cleanup script 48 hours ago.",
    question: "Which solution properly implements these mandatory security and governance controls? Blob Soft Delete with point-in-time undelete restoration is under consideration.",
    options: [
      { id: 'A', text: "Invoke the Undelete Blob API on the soft-deleted blob in the container." },
      { id: 'B', text: "Submit a physical data center recovery request to Microsoft support." },
      { id: 'C', text: "Restore the entire virtual machine operating system disk from yesterday's backup." },
      { id: 'D', text: "Create a new blank blob with the same name to overwrite the missing data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the Undelete Blob API on the soft-deleted blob in the container. When Blob Soft Delete is enabled on an Azure Storage account, deleted blobs and snapshots are maintained in a soft-deleted state for the duration of the retention period. Calling the `Undelete Blob` API restores the soft-deleted blob and its versions to an active state.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage", "Blob Storage", "Security Compliance"]
  },
  {
    id: "azure-az204-359",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Undelete: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Storage to recover a mission-critical financial report blob that was accidentally deleted by an automated cleanup script 48 hours ago.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Blob Soft Delete with point-in-time undelete restoration is under consideration.",
    options: [
      { id: 'A', text: "Invoke the Undelete Blob API on the soft-deleted blob in the container." },
      { id: 'B', text: "Submit a physical data center recovery request to Microsoft support." },
      { id: 'C', text: "Restore the entire virtual machine operating system disk from yesterday's backup." },
      { id: 'D', text: "Create a new blank blob with the same name to overwrite the missing data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the Undelete Blob API on the soft-deleted blob in the container. When Blob Soft Delete is enabled on an Azure Storage account, deleted blobs and snapshots are maintained in a soft-deleted state for the duration of the retention period. Calling the `Undelete Blob` API restores the soft-deleted blob and its versions to an active state.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage", "Blob Storage", "Hybrid Migration"]
  },
  {
    id: "azure-az204-360",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Blob Storage Soft Delete and Undelete: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Storage to recover a mission-critical financial report blob that was accidentally deleted by an automated cleanup script 48 hours ago.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Blob Soft Delete with point-in-time undelete restoration is under consideration.",
    options: [
      { id: 'A', text: "Invoke the Undelete Blob API on the soft-deleted blob in the container." },
      { id: 'B', text: "Submit a physical data center recovery request to Microsoft support." },
      { id: 'C', text: "Restore the entire virtual machine operating system disk from yesterday's backup." },
      { id: 'D', text: "Create a new blank blob with the same name to overwrite the missing data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke the Undelete Blob API on the soft-deleted blob in the container. When Blob Soft Delete is enabled on an Azure Storage account, deleted blobs and snapshots are maintained in a soft-deleted state for the duration of the retention period. Calling the `Undelete Blob` API restores the soft-deleted blob and its versions to an active state.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
    tags: ["Azure Storage", "Blob Storage", "Resilience Failure"]
  },
  {
    id: "azure-az204-361",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage User Delegation SAS Tokens: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Storage Security to generate short-lived delegated access tokens for users to download confidential blobs, ensuring tokens are secured by Entra ID identities rather than account keys.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? User delegation SAS secured by Microsoft Entra ID credentials is under consideration.",
    options: [
      { id: 'A', text: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials." },
      { id: 'B', text: "Generate an Account SAS signed with the root storage account access key." },
      { id: 'C', text: "Share the primary storage access key in plaintext with end users." },
      { id: 'D', text: "Open the blob container to public anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials. A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account keys. This provides superior security because storage account keys do not need to be distributed, and permissions can be revoked immediately by revoking the user's Entra ID delegation key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet",
    tags: ["Azure Storage Security", "Storage Security", "Dr Failover"]
  },
  {
    id: "azure-az204-362",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage User Delegation SAS Tokens: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Storage Security to generate short-lived delegated access tokens for users to download confidential blobs, ensuring tokens are secured by Entra ID identities rather than account keys.",
    question: "Which architectural approach should the team select to manage this demand efficiently? User delegation SAS secured by Microsoft Entra ID credentials is under consideration.",
    options: [
      { id: 'A', text: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials." },
      { id: 'B', text: "Generate an Account SAS signed with the root storage account access key." },
      { id: 'C', text: "Share the primary storage access key in plaintext with end users." },
      { id: 'D', text: "Open the blob container to public anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials. A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account keys. This provides superior security because storage account keys do not need to be distributed, and permissions can be revoked immediately by revoking the user's Entra ID delegation key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet",
    tags: ["Azure Storage Security", "Storage Security", "High Load Scale"]
  },
  {
    id: "azure-az204-363",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage User Delegation SAS Tokens: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Storage Security to generate short-lived delegated access tokens for users to download confidential blobs, ensuring tokens are secured by Entra ID identities rather than account keys.",
    question: "Which solution properly implements these mandatory security and governance controls? User delegation SAS secured by Microsoft Entra ID credentials is under consideration.",
    options: [
      { id: 'A', text: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials." },
      { id: 'B', text: "Generate an Account SAS signed with the root storage account access key." },
      { id: 'C', text: "Share the primary storage access key in plaintext with end users." },
      { id: 'D', text: "Open the blob container to public anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials. A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account keys. This provides superior security because storage account keys do not need to be distributed, and permissions can be revoked immediately by revoking the user's Entra ID delegation key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet",
    tags: ["Azure Storage Security", "Storage Security", "Security Compliance"]
  },
  {
    id: "azure-az204-364",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage User Delegation SAS Tokens: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Storage Security to generate short-lived delegated access tokens for users to download confidential blobs, ensuring tokens are secured by Entra ID identities rather than account keys.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? User delegation SAS secured by Microsoft Entra ID credentials is under consideration.",
    options: [
      { id: 'A', text: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials." },
      { id: 'B', text: "Generate an Account SAS signed with the root storage account access key." },
      { id: 'C', text: "Share the primary storage access key in plaintext with end users." },
      { id: 'D', text: "Open the blob container to public anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials. A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account keys. This provides superior security because storage account keys do not need to be distributed, and permissions can be revoked immediately by revoking the user's Entra ID delegation key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet",
    tags: ["Azure Storage Security", "Storage Security", "Hybrid Migration"]
  },
  {
    id: "azure-az204-365",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Storage User Delegation SAS Tokens: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Storage Security to generate short-lived delegated access tokens for users to download confidential blobs, ensuring tokens are secured by Entra ID identities rather than account keys.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? User delegation SAS secured by Microsoft Entra ID credentials is under consideration.",
    options: [
      { id: 'A', text: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials." },
      { id: 'B', text: "Generate an Account SAS signed with the root storage account access key." },
      { id: 'C', text: "Share the primary storage access key in plaintext with end users." },
      { id: 'D', text: "Open the blob container to public anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate a User Delegation SAS token signed with Microsoft Entra ID credentials. A User Delegation SAS is secured with Microsoft Entra ID credentials rather than the storage account keys. This provides superior security because storage account keys do not need to be distributed, and permissions can be revoked immediately by revoking the user's Entra ID delegation key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create-dotnet",
    tags: ["Azure Storage Security", "Storage Security", "Resilience Failure"]
  },
  {
    id: "azure-az204-366",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Authentication Library (MSAL) Public vs Confidential: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Microsoft Entra ID / MSAL to select the appropriate MSAL client application class for a React Single Page Application (SPA) running entirely in a client's web browser.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? MSAL PublicClientApplication vs ConfidentialClientApplication architecture is under consideration.",
    options: [
      { id: 'A', text: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets." },
      { id: 'B', text: "Instantiate ConfidentialClientApplication and embed the client secret in the bundled JavaScript file." },
      { id: 'C', text: "Hardcode Azure Subscription Owner credentials in the HTML DOM." },
      { id: 'D', text: "Disable authentication and rely on IP whitelisting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets. In the Microsoft Authentication Library (MSAL), `PublicClientApplication` is designed for apps running on devices or in web browsers where secrets cannot be securely maintained. `ConfidentialClientApplication` is designed for secure backend servers that safely hold client secrets or certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["Microsoft Entra ID / MSAL", "MSAL", "Dr Failover"]
  },
  {
    id: "azure-az204-367",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Authentication Library (MSAL) Public vs Confidential: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Microsoft Entra ID / MSAL to select the appropriate MSAL client application class for a React Single Page Application (SPA) running entirely in a client's web browser.",
    question: "Which architectural approach should the team select to manage this demand efficiently? MSAL PublicClientApplication vs ConfidentialClientApplication architecture is under consideration.",
    options: [
      { id: 'A', text: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets." },
      { id: 'B', text: "Instantiate ConfidentialClientApplication and embed the client secret in the bundled JavaScript file." },
      { id: 'C', text: "Hardcode Azure Subscription Owner credentials in the HTML DOM." },
      { id: 'D', text: "Disable authentication and rely on IP whitelisting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets. In the Microsoft Authentication Library (MSAL), `PublicClientApplication` is designed for apps running on devices or in web browsers where secrets cannot be securely maintained. `ConfidentialClientApplication` is designed for secure backend servers that safely hold client secrets or certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["Microsoft Entra ID / MSAL", "MSAL", "High Load Scale"]
  },
  {
    id: "azure-az204-368",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Authentication Library (MSAL) Public vs Confidential: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Microsoft Entra ID / MSAL to select the appropriate MSAL client application class for a React Single Page Application (SPA) running entirely in a client's web browser.",
    question: "Which solution properly implements these mandatory security and governance controls? MSAL PublicClientApplication vs ConfidentialClientApplication architecture is under consideration.",
    options: [
      { id: 'A', text: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets." },
      { id: 'B', text: "Instantiate ConfidentialClientApplication and embed the client secret in the bundled JavaScript file." },
      { id: 'C', text: "Hardcode Azure Subscription Owner credentials in the HTML DOM." },
      { id: 'D', text: "Disable authentication and rely on IP whitelisting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets. In the Microsoft Authentication Library (MSAL), `PublicClientApplication` is designed for apps running on devices or in web browsers where secrets cannot be securely maintained. `ConfidentialClientApplication` is designed for secure backend servers that safely hold client secrets or certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["Microsoft Entra ID / MSAL", "MSAL", "Security Compliance"]
  },
  {
    id: "azure-az204-369",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Authentication Library (MSAL) Public vs Confidential: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Microsoft Entra ID / MSAL to select the appropriate MSAL client application class for a React Single Page Application (SPA) running entirely in a client's web browser.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? MSAL PublicClientApplication vs ConfidentialClientApplication architecture is under consideration.",
    options: [
      { id: 'A', text: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets." },
      { id: 'B', text: "Instantiate ConfidentialClientApplication and embed the client secret in the bundled JavaScript file." },
      { id: 'C', text: "Hardcode Azure Subscription Owner credentials in the HTML DOM." },
      { id: 'D', text: "Disable authentication and rely on IP whitelisting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets. In the Microsoft Authentication Library (MSAL), `PublicClientApplication` is designed for apps running on devices or in web browsers where secrets cannot be securely maintained. `ConfidentialClientApplication` is designed for secure backend servers that safely hold client secrets or certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["Microsoft Entra ID / MSAL", "MSAL", "Hybrid Migration"]
  },
  {
    id: "azure-az204-370",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Authentication Library (MSAL) Public vs Confidential: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Microsoft Entra ID / MSAL to select the appropriate MSAL client application class for a React Single Page Application (SPA) running entirely in a client's web browser.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? MSAL PublicClientApplication vs ConfidentialClientApplication architecture is under consideration.",
    options: [
      { id: 'A', text: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets." },
      { id: 'B', text: "Instantiate ConfidentialClientApplication and embed the client secret in the bundled JavaScript file." },
      { id: 'C', text: "Hardcode Azure Subscription Owner credentials in the HTML DOM." },
      { id: 'D', text: "Disable authentication and rely on IP whitelisting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instantiate PublicClientApplication because browser-based SPAs cannot securely store private client secrets. In the Microsoft Authentication Library (MSAL), `PublicClientApplication` is designed for apps running on devices or in web browsers where secrets cannot be securely maintained. `ConfidentialClientApplication` is designed for secure backend servers that safely hold client secrets or certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/public-client-applications",
    tags: ["Microsoft Entra ID / MSAL", "MSAL", "Resilience Failure"]
  },
  {
    id: "azure-az204-371",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates OAuth 2.0 & Entra ID to authenticate users securely in a single-page web app (SPA) without exposing access tokens in URL hash fragments or relying on client secrets.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Authorization Code Flow with Proof Key for Code Exchange (PKCE) is under consideration.",
    options: [
      { id: 'A', text: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE)." },
      { id: 'B', text: "Implement the legacy Implicit Grant Flow returning access tokens in URL hash fragments." },
      { id: 'C', text: "Implement the Resource Owner Password Credentials (ROPC) grant collecting user passwords directly." },
      { id: 'D', text: "Implement the Client Credentials Flow from the browser console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE). The OAuth 2.0 Authorization Code Flow with PKCE is the industry standard for single-page applications. It prevents authorization code interception attacks by generating a cryptographic code verifier and code challenge, eliminating the need for client secrets in browser code.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth 2.0 & Entra ID", "OAuth 2.0", "Dr Failover"]
  },
  {
    id: "azure-az204-372",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates OAuth 2.0 & Entra ID to authenticate users securely in a single-page web app (SPA) without exposing access tokens in URL hash fragments or relying on client secrets.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Authorization Code Flow with Proof Key for Code Exchange (PKCE) is under consideration.",
    options: [
      { id: 'A', text: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE)." },
      { id: 'B', text: "Implement the legacy Implicit Grant Flow returning access tokens in URL hash fragments." },
      { id: 'C', text: "Implement the Resource Owner Password Credentials (ROPC) grant collecting user passwords directly." },
      { id: 'D', text: "Implement the Client Credentials Flow from the browser console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE). The OAuth 2.0 Authorization Code Flow with PKCE is the industry standard for single-page applications. It prevents authorization code interception attacks by generating a cryptographic code verifier and code challenge, eliminating the need for client secrets in browser code.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth 2.0 & Entra ID", "OAuth 2.0", "High Load Scale"]
  },
  {
    id: "azure-az204-373",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates OAuth 2.0 & Entra ID to authenticate users securely in a single-page web app (SPA) without exposing access tokens in URL hash fragments or relying on client secrets.",
    question: "Which solution properly implements these mandatory security and governance controls? Authorization Code Flow with Proof Key for Code Exchange (PKCE) is under consideration.",
    options: [
      { id: 'A', text: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE)." },
      { id: 'B', text: "Implement the legacy Implicit Grant Flow returning access tokens in URL hash fragments." },
      { id: 'C', text: "Implement the Resource Owner Password Credentials (ROPC) grant collecting user passwords directly." },
      { id: 'D', text: "Implement the Client Credentials Flow from the browser console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE). The OAuth 2.0 Authorization Code Flow with PKCE is the industry standard for single-page applications. It prevents authorization code interception attacks by generating a cryptographic code verifier and code challenge, eliminating the need for client secrets in browser code.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth 2.0 & Entra ID", "OAuth 2.0", "Security Compliance"]
  },
  {
    id: "azure-az204-374",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates OAuth 2.0 & Entra ID to authenticate users securely in a single-page web app (SPA) without exposing access tokens in URL hash fragments or relying on client secrets.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Authorization Code Flow with Proof Key for Code Exchange (PKCE) is under consideration.",
    options: [
      { id: 'A', text: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE)." },
      { id: 'B', text: "Implement the legacy Implicit Grant Flow returning access tokens in URL hash fragments." },
      { id: 'C', text: "Implement the Resource Owner Password Credentials (ROPC) grant collecting user passwords directly." },
      { id: 'D', text: "Implement the Client Credentials Flow from the browser console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE). The OAuth 2.0 Authorization Code Flow with PKCE is the industry standard for single-page applications. It prevents authorization code interception attacks by generating a cryptographic code verifier and code challenge, eliminating the need for client secrets in browser code.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth 2.0 & Entra ID", "OAuth 2.0", "Hybrid Migration"]
  },
  {
    id: "azure-az204-375",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "OAuth 2.0 Authorization Code Flow with PKCE: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates OAuth 2.0 & Entra ID to authenticate users securely in a single-page web app (SPA) without exposing access tokens in URL hash fragments or relying on client secrets.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Authorization Code Flow with Proof Key for Code Exchange (PKCE) is under consideration.",
    options: [
      { id: 'A', text: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE)." },
      { id: 'B', text: "Implement the legacy Implicit Grant Flow returning access tokens in URL hash fragments." },
      { id: 'C', text: "Implement the Resource Owner Password Credentials (ROPC) grant collecting user passwords directly." },
      { id: 'D', text: "Implement the Client Credentials Flow from the browser console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the OAuth 2.0 Authorization Code Flow with Proof Key for Code Exchange (PKCE). The OAuth 2.0 Authorization Code Flow with PKCE is the industry standard for single-page applications. It prevents authorization code interception attacks by generating a cryptographic code verifier and code challenge, eliminating the need for client secrets in browser code.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow",
    tags: ["OAuth 2.0 & Entra ID", "OAuth 2.0", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_15;
