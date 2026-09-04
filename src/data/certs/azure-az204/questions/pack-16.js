export const AZURE_AZ204_QUESTIONS_16 = [
  {
    id: "azure-az204-376",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API Delegated vs Application Permissions: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Microsoft Graph API to grant a daemon background synchronization service permission to read all user calendar events across an entire tenant without any user being signed in.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Delegated permissions (user context) vs Application permissions (daemon context) is under consideration.",
    options: [
      { id: 'A', text: "Assign the Azure Contributor role on the tenant subscription to the daemon." },
      { id: 'B', text: "Grant Microsoft Graph Delegated permissions (Calendars.Read) requiring an interactive user login." },
      { id: 'C', text: "Share an individual employee's personal user credentials with the daemon service." },
      { id: 'D', text: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent. Microsoft Graph supports two types of permissions: Delegated permissions (used by apps that have a signed-in user present, where access is scoped to what the user can do) and Application permissions (used by background services or daemons running without a signed-in user, requiring tenant administrator consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-overview",
    tags: ["Microsoft Graph API", "Microsoft Graph", "Dr Failover"]
  },
  {
    id: "azure-az204-377",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API Delegated vs Application Permissions: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Microsoft Graph API to grant a daemon background synchronization service permission to read all user calendar events across an entire tenant without any user being signed in.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Delegated permissions (user context) vs Application permissions (daemon context) is under consideration.",
    options: [
      { id: 'A', text: "Grant Microsoft Graph Delegated permissions (Calendars.Read) requiring an interactive user login." },
      { id: 'B', text: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent." },
      { id: 'C', text: "Share an individual employee's personal user credentials with the daemon service." },
      { id: 'D', text: "Assign the Azure Contributor role on the tenant subscription to the daemon." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent. Microsoft Graph supports two types of permissions: Delegated permissions (used by apps that have a signed-in user present, where access is scoped to what the user can do) and Application permissions (used by background services or daemons running without a signed-in user, requiring tenant administrator consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-overview",
    tags: ["Microsoft Graph API", "Microsoft Graph", "High Load Scale"]
  },
  {
    id: "azure-az204-378",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API Delegated vs Application Permissions: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Microsoft Graph API to grant a daemon background synchronization service permission to read all user calendar events across an entire tenant without any user being signed in.",
    question: "Which solution properly implements these mandatory security and governance controls? Delegated permissions (user context) vs Application permissions (daemon context) is under consideration.",
    options: [
      { id: 'A', text: "Assign the Azure Contributor role on the tenant subscription to the daemon." },
      { id: 'B', text: "Grant Microsoft Graph Delegated permissions (Calendars.Read) requiring an interactive user login." },
      { id: 'C', text: "Share an individual employee's personal user credentials with the daemon service." },
      { id: 'D', text: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent. Microsoft Graph supports two types of permissions: Delegated permissions (used by apps that have a signed-in user present, where access is scoped to what the user can do) and Application permissions (used by background services or daemons running without a signed-in user, requiring tenant administrator consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-overview",
    tags: ["Microsoft Graph API", "Microsoft Graph", "Security Compliance"]
  },
  {
    id: "azure-az204-379",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API Delegated vs Application Permissions: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Microsoft Graph API to grant a daemon background synchronization service permission to read all user calendar events across an entire tenant without any user being signed in.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Delegated permissions (user context) vs Application permissions (daemon context) is under consideration.",
    options: [
      { id: 'A', text: "Share an individual employee's personal user credentials with the daemon service." },
      { id: 'B', text: "Grant Microsoft Graph Delegated permissions (Calendars.Read) requiring an interactive user login." },
      { id: 'C', text: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent." },
      { id: 'D', text: "Assign the Azure Contributor role on the tenant subscription to the daemon." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent. Microsoft Graph supports two types of permissions: Delegated permissions (used by apps that have a signed-in user present, where access is scoped to what the user can do) and Application permissions (used by background services or daemons running without a signed-in user, requiring tenant administrator consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-overview",
    tags: ["Microsoft Graph API", "Microsoft Graph", "Hybrid Migration"]
  },
  {
    id: "azure-az204-380",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API Delegated vs Application Permissions: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Microsoft Graph API to grant a daemon background synchronization service permission to read all user calendar events across an entire tenant without any user being signed in.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Delegated permissions (user context) vs Application permissions (daemon context) is under consideration.",
    options: [
      { id: 'A', text: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent." },
      { id: 'B', text: "Grant Microsoft Graph Delegated permissions (Calendars.Read) requiring an interactive user login." },
      { id: 'C', text: "Assign the Azure Contributor role on the tenant subscription to the daemon." },
      { id: 'D', text: "Share an individual employee's personal user credentials with the daemon service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Grant Microsoft Graph Application permissions (Calendars.Read) with admin consent. Microsoft Graph supports two types of permissions: Delegated permissions (used by apps that have a signed-in user present, where access is scoped to what the user can do) and Application permissions (used by background services or daemons running without a signed-in user, requiring tenant administrator consent).",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-overview",
    tags: ["Microsoft Graph API", "Microsoft Graph", "Resilience Failure"]
  },
  {
    id: "azure-az204-381",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Managed Identities (System-Assigned vs User-Assigned): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Managed Identities to allow multiple independent Azure Virtual Machines and App Services to share a single common identity for accessing Azure Key Vault.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? System-assigned vs user-assigned managed identities for Azure resources is under consideration.",
    options: [
      { id: 'A', text: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services." },
      { id: 'B', text: "Enable System-Assigned Managed Identities on each resource and manage separate role assignments on each." },
      { id: 'C', text: "Store Key Vault access credentials in plaintext application configuration files." },
      { id: 'D', text: "Create a local Windows administrator user on each virtual machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services. A System-Assigned Managed Identity is tied directly to the lifecycle of a single Azure resource (deleted when the resource is deleted). A User-Assigned Managed Identity is created as an independent Azure resource that can be assigned to multiple Azure resources, simplifying permission management.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Azure Managed Identities", "Managed Identities", "Dr Failover"]
  },
  {
    id: "azure-az204-382",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Managed Identities (System-Assigned vs User-Assigned): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Managed Identities to allow multiple independent Azure Virtual Machines and App Services to share a single common identity for accessing Azure Key Vault.",
    question: "Which architectural approach should the team select to manage this demand efficiently? System-assigned vs user-assigned managed identities for Azure resources is under consideration.",
    options: [
      { id: 'A', text: "Create a local Windows administrator user on each virtual machine." },
      { id: 'B', text: "Store Key Vault access credentials in plaintext application configuration files." },
      { id: 'C', text: "Enable System-Assigned Managed Identities on each resource and manage separate role assignments on each." },
      { id: 'D', text: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services. A System-Assigned Managed Identity is tied directly to the lifecycle of a single Azure resource (deleted when the resource is deleted). A User-Assigned Managed Identity is created as an independent Azure resource that can be assigned to multiple Azure resources, simplifying permission management.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Azure Managed Identities", "Managed Identities", "High Load Scale"]
  },
  {
    id: "azure-az204-383",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Managed Identities (System-Assigned vs User-Assigned): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Managed Identities to allow multiple independent Azure Virtual Machines and App Services to share a single common identity for accessing Azure Key Vault.",
    question: "Which solution properly implements these mandatory security and governance controls? System-assigned vs user-assigned managed identities for Azure resources is under consideration.",
    options: [
      { id: 'A', text: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services." },
      { id: 'B', text: "Store Key Vault access credentials in plaintext application configuration files." },
      { id: 'C', text: "Create a local Windows administrator user on each virtual machine." },
      { id: 'D', text: "Enable System-Assigned Managed Identities on each resource and manage separate role assignments on each." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services. A System-Assigned Managed Identity is tied directly to the lifecycle of a single Azure resource (deleted when the resource is deleted). A User-Assigned Managed Identity is created as an independent Azure resource that can be assigned to multiple Azure resources, simplifying permission management.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Azure Managed Identities", "Managed Identities", "Security Compliance"]
  },
  {
    id: "azure-az204-384",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Managed Identities (System-Assigned vs User-Assigned): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Managed Identities to allow multiple independent Azure Virtual Machines and App Services to share a single common identity for accessing Azure Key Vault.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? System-assigned vs user-assigned managed identities for Azure resources is under consideration.",
    options: [
      { id: 'A', text: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services." },
      { id: 'B', text: "Enable System-Assigned Managed Identities on each resource and manage separate role assignments on each." },
      { id: 'C', text: "Create a local Windows administrator user on each virtual machine." },
      { id: 'D', text: "Store Key Vault access credentials in plaintext application configuration files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services. A System-Assigned Managed Identity is tied directly to the lifecycle of a single Azure resource (deleted when the resource is deleted). A User-Assigned Managed Identity is created as an independent Azure resource that can be assigned to multiple Azure resources, simplifying permission management.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Azure Managed Identities", "Managed Identities", "Hybrid Migration"]
  },
  {
    id: "azure-az204-385",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Managed Identities (System-Assigned vs User-Assigned): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Managed Identities to allow multiple independent Azure Virtual Machines and App Services to share a single common identity for accessing Azure Key Vault.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? System-assigned vs user-assigned managed identities for Azure resources is under consideration.",
    options: [
      { id: 'A', text: "Create a local Windows administrator user on each virtual machine." },
      { id: 'B', text: "Enable System-Assigned Managed Identities on each resource and manage separate role assignments on each." },
      { id: 'C', text: "Store Key Vault access credentials in plaintext application configuration files." },
      { id: 'D', text: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a User-Assigned Managed Identity, grant it Key Vault access, and assign it to the VMs and App Services. A System-Assigned Managed Identity is tied directly to the lifecycle of a single Azure resource (deleted when the resource is deleted). A User-Assigned Managed Identity is created as an independent Azure resource that can be assigned to multiple Azure resources, simplifying permission management.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
    tags: ["Azure Managed Identities", "Managed Identities", "Resilience Failure"]
  },
  {
    id: "azure-az204-386",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secrets, Keys, and Certificates: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Key Vault to securely store database connection strings, perform cryptographic signing using hardware-protected RSA keys, and manage X.509 SSL certificates.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Key Vault object types: Secrets, Keys, and Certificates is under consideration.",
    options: [
      { id: 'A', text: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS." },
      { id: 'B', text: "Store all cryptographic private keys and database passwords in unencrypted Git repositories." },
      { id: 'C', text: "Store connection strings in an unencrypted Azure Storage blob container." },
      { id: 'D', text: "Embed RSA private keys in public JavaScript frontend bundles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS. Azure Key Vault provides centralized management of application secrets, encryption keys, and TLS/SSL certificates. Secrets store sensitive text strings, Keys provide hardware-protected cryptographic operations (signing, decrypting), and Certificates manage the lifecycle of X.509 certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Azure Key Vault", "Key Vault", "Dr Failover"]
  },
  {
    id: "azure-az204-387",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secrets, Keys, and Certificates: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Key Vault to securely store database connection strings, perform cryptographic signing using hardware-protected RSA keys, and manage X.509 SSL certificates.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Key Vault object types: Secrets, Keys, and Certificates is under consideration.",
    options: [
      { id: 'A', text: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS." },
      { id: 'B', text: "Embed RSA private keys in public JavaScript frontend bundles." },
      { id: 'C', text: "Store all cryptographic private keys and database passwords in unencrypted Git repositories." },
      { id: 'D', text: "Store connection strings in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS. Azure Key Vault provides centralized management of application secrets, encryption keys, and TLS/SSL certificates. Secrets store sensitive text strings, Keys provide hardware-protected cryptographic operations (signing, decrypting), and Certificates manage the lifecycle of X.509 certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Azure Key Vault", "Key Vault", "High Load Scale"]
  },
  {
    id: "azure-az204-388",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secrets, Keys, and Certificates: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Key Vault to securely store database connection strings, perform cryptographic signing using hardware-protected RSA keys, and manage X.509 SSL certificates.",
    question: "Which solution properly implements these mandatory security and governance controls? Key Vault object types: Secrets, Keys, and Certificates is under consideration.",
    options: [
      { id: 'A', text: "Store all cryptographic private keys and database passwords in unencrypted Git repositories." },
      { id: 'B', text: "Embed RSA private keys in public JavaScript frontend bundles." },
      { id: 'C', text: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS." },
      { id: 'D', text: "Store connection strings in an unencrypted Azure Storage blob container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS. Azure Key Vault provides centralized management of application secrets, encryption keys, and TLS/SSL certificates. Secrets store sensitive text strings, Keys provide hardware-protected cryptographic operations (signing, decrypting), and Certificates manage the lifecycle of X.509 certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Azure Key Vault", "Key Vault", "Security Compliance"]
  },
  {
    id: "azure-az204-389",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secrets, Keys, and Certificates: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Key Vault to securely store database connection strings, perform cryptographic signing using hardware-protected RSA keys, and manage X.509 SSL certificates.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Key Vault object types: Secrets, Keys, and Certificates is under consideration.",
    options: [
      { id: 'A', text: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS." },
      { id: 'B', text: "Store all cryptographic private keys and database passwords in unencrypted Git repositories." },
      { id: 'C', text: "Store connection strings in an unencrypted Azure Storage blob container." },
      { id: 'D', text: "Embed RSA private keys in public JavaScript frontend bundles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS. Azure Key Vault provides centralized management of application secrets, encryption keys, and TLS/SSL certificates. Secrets store sensitive text strings, Keys provide hardware-protected cryptographic operations (signing, decrypting), and Certificates manage the lifecycle of X.509 certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Azure Key Vault", "Key Vault", "Hybrid Migration"]
  },
  {
    id: "azure-az204-390",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Secrets, Keys, and Certificates: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Key Vault to securely store database connection strings, perform cryptographic signing using hardware-protected RSA keys, and manage X.509 SSL certificates.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Key Vault object types: Secrets, Keys, and Certificates is under consideration.",
    options: [
      { id: 'A', text: "Embed RSA private keys in public JavaScript frontend bundles." },
      { id: 'B', text: "Store connection strings in an unencrypted Azure Storage blob container." },
      { id: 'C', text: "Store all cryptographic private keys and database passwords in unencrypted Git repositories." },
      { id: 'D', text: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Utilize Azure Key Vault Secrets for connection strings, Keys for cryptographic operations, and Certificates for SSL/TLS. Azure Key Vault provides centralized management of application secrets, encryption keys, and TLS/SSL certificates. Secrets store sensitive text strings, Keys provide hardware-protected cryptographic operations (signing, decrypting), and Certificates manage the lifecycle of X.509 certificates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
    tags: ["Azure Key Vault", "Key Vault", "Resilience Failure"]
  },
  {
    id: "azure-az204-391",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Access Policies vs Azure RBAC: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Key Vault to grant an application permission to read secrets from Key Vault using fine-grained Azure RBAC role assignments rather than legacy vault access policies.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Key Vault permission models: Vault access policies vs Azure RBAC is under consideration.",
    options: [
      { id: 'A', text: "Share the Key Vault administrator password with the application development team." },
      { id: 'B', text: "Configure a legacy Key Vault access policy granting full purge and backup permissions." },
      { id: 'C', text: "Disable access controls on Key Vault to allow unauthenticated API queries." },
      { id: 'D', text: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'. Azure Key Vault supports two authorization systems: Vault Access Policies (legacy model granting permissions at the whole-vault level) and Azure RBAC (recommended model providing granular permissions at subscription, resource group, vault, or individual key/secret scopes).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Azure Key Vault", "Key Vault", "Dr Failover"]
  },
  {
    id: "azure-az204-392",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Access Policies vs Azure RBAC: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Key Vault to grant an application permission to read secrets from Key Vault using fine-grained Azure RBAC role assignments rather than legacy vault access policies.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Key Vault permission models: Vault access policies vs Azure RBAC is under consideration.",
    options: [
      { id: 'A', text: "Configure a legacy Key Vault access policy granting full purge and backup permissions." },
      { id: 'B', text: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'." },
      { id: 'C', text: "Share the Key Vault administrator password with the application development team." },
      { id: 'D', text: "Disable access controls on Key Vault to allow unauthenticated API queries." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'. Azure Key Vault supports two authorization systems: Vault Access Policies (legacy model granting permissions at the whole-vault level) and Azure RBAC (recommended model providing granular permissions at subscription, resource group, vault, or individual key/secret scopes).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Azure Key Vault", "Key Vault", "High Load Scale"]
  },
  {
    id: "azure-az204-393",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Access Policies vs Azure RBAC: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Key Vault to grant an application permission to read secrets from Key Vault using fine-grained Azure RBAC role assignments rather than legacy vault access policies.",
    question: "Which solution properly implements these mandatory security and governance controls? Key Vault permission models: Vault access policies vs Azure RBAC is under consideration.",
    options: [
      { id: 'A', text: "Disable access controls on Key Vault to allow unauthenticated API queries." },
      { id: 'B', text: "Configure a legacy Key Vault access policy granting full purge and backup permissions." },
      { id: 'C', text: "Share the Key Vault administrator password with the application development team." },
      { id: 'D', text: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'. Azure Key Vault supports two authorization systems: Vault Access Policies (legacy model granting permissions at the whole-vault level) and Azure RBAC (recommended model providing granular permissions at subscription, resource group, vault, or individual key/secret scopes).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Azure Key Vault", "Key Vault", "Security Compliance"]
  },
  {
    id: "azure-az204-394",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Access Policies vs Azure RBAC: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Key Vault to grant an application permission to read secrets from Key Vault using fine-grained Azure RBAC role assignments rather than legacy vault access policies.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Key Vault permission models: Vault access policies vs Azure RBAC is under consideration.",
    options: [
      { id: 'A', text: "Disable access controls on Key Vault to allow unauthenticated API queries." },
      { id: 'B', text: "Configure a legacy Key Vault access policy granting full purge and backup permissions." },
      { id: 'C', text: "Share the Key Vault administrator password with the application development team." },
      { id: 'D', text: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'. Azure Key Vault supports two authorization systems: Vault Access Policies (legacy model granting permissions at the whole-vault level) and Azure RBAC (recommended model providing granular permissions at subscription, resource group, vault, or individual key/secret scopes).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Azure Key Vault", "Key Vault", "Hybrid Migration"]
  },
  {
    id: "azure-az204-395",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Access Policies vs Azure RBAC: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Key Vault to grant an application permission to read secrets from Key Vault using fine-grained Azure RBAC role assignments rather than legacy vault access policies.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Key Vault permission models: Vault access policies vs Azure RBAC is under consideration.",
    options: [
      { id: 'A', text: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'." },
      { id: 'B', text: "Configure a legacy Key Vault access policy granting full purge and backup permissions." },
      { id: 'C', text: "Share the Key Vault administrator password with the application development team." },
      { id: 'D', text: "Disable access controls on Key Vault to allow unauthenticated API queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the Azure role-based access control (Azure RBAC) permission model on Key Vault and assign 'Key Vault Secrets User'. Azure Key Vault supports two authorization systems: Vault Access Policies (legacy model granting permissions at the whole-vault level) and Azure RBAC (recommended model providing granular permissions at subscription, resource group, vault, or individual key/secret scopes).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
    tags: ["Azure Key Vault", "Key Vault", "Resilience Failure"]
  },
  {
    id: "azure-az204-396",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration & Key Vault References: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Configuration to centralize application feature flags and settings in Azure App Configuration while seamlessly referencing database passwords securely stored in Azure Key Vault.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Centralized dynamic configuration with Key Vault references (@Microsoft.KeyVault) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode configuration settings inside compiled application binary assemblies." },
      { id: 'B', text: "Copy and paste Key Vault passwords directly into App Configuration plaintext key values." },
      { id: 'C', text: "Store feature flags in an unmanaged SQL Server table requiring manual database updates." },
      { id: 'D', text: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax. Azure App Configuration centralizes application settings and feature flags. By creating Key Vault references using the `@Microsoft.KeyVault(...)` URI syntax, applications consume both general settings and secured secrets through a single client provider without duplicating secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["Azure App Configuration", "App Configuration", "Dr Failover"]
  },
  {
    id: "azure-az204-397",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration & Key Vault References: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Configuration to centralize application feature flags and settings in Azure App Configuration while seamlessly referencing database passwords securely stored in Azure Key Vault.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Centralized dynamic configuration with Key Vault references (@Microsoft.KeyVault) is under consideration.",
    options: [
      { id: 'A', text: "Copy and paste Key Vault passwords directly into App Configuration plaintext key values." },
      { id: 'B', text: "Store feature flags in an unmanaged SQL Server table requiring manual database updates." },
      { id: 'C', text: "Hardcode configuration settings inside compiled application binary assemblies." },
      { id: 'D', text: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax. Azure App Configuration centralizes application settings and feature flags. By creating Key Vault references using the `@Microsoft.KeyVault(...)` URI syntax, applications consume both general settings and secured secrets through a single client provider without duplicating secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["Azure App Configuration", "App Configuration", "High Load Scale"]
  },
  {
    id: "azure-az204-398",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration & Key Vault References: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Configuration to centralize application feature flags and settings in Azure App Configuration while seamlessly referencing database passwords securely stored in Azure Key Vault.",
    question: "Which solution properly implements these mandatory security and governance controls? Centralized dynamic configuration with Key Vault references (@Microsoft.KeyVault) is under consideration.",
    options: [
      { id: 'A', text: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax." },
      { id: 'B', text: "Store feature flags in an unmanaged SQL Server table requiring manual database updates." },
      { id: 'C', text: "Hardcode configuration settings inside compiled application binary assemblies." },
      { id: 'D', text: "Copy and paste Key Vault passwords directly into App Configuration plaintext key values." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax. Azure App Configuration centralizes application settings and feature flags. By creating Key Vault references using the `@Microsoft.KeyVault(...)` URI syntax, applications consume both general settings and secured secrets through a single client provider without duplicating secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["Azure App Configuration", "App Configuration", "Security Compliance"]
  },
  {
    id: "azure-az204-399",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration & Key Vault References: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Configuration to centralize application feature flags and settings in Azure App Configuration while seamlessly referencing database passwords securely stored in Azure Key Vault.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Centralized dynamic configuration with Key Vault references (@Microsoft.KeyVault) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode configuration settings inside compiled application binary assemblies." },
      { id: 'B', text: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax." },
      { id: 'C', text: "Store feature flags in an unmanaged SQL Server table requiring manual database updates." },
      { id: 'D', text: "Copy and paste Key Vault passwords directly into App Configuration plaintext key values." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax. Azure App Configuration centralizes application settings and feature flags. By creating Key Vault references using the `@Microsoft.KeyVault(...)` URI syntax, applications consume both general settings and secured secrets through a single client provider without duplicating secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["Azure App Configuration", "App Configuration", "Hybrid Migration"]
  },
  {
    id: "azure-az204-400",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration & Key Vault References: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Configuration to centralize application feature flags and settings in Azure App Configuration while seamlessly referencing database passwords securely stored in Azure Key Vault.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Centralized dynamic configuration with Key Vault references (@Microsoft.KeyVault) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode configuration settings inside compiled application binary assemblies." },
      { id: 'B', text: "Copy and paste Key Vault passwords directly into App Configuration plaintext key values." },
      { id: 'C', text: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax." },
      { id: 'D', text: "Store feature flags in an unmanaged SQL Server table requiring manual database updates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use Azure App Configuration with Key Vault References using the @Microsoft.KeyVault syntax. Azure App Configuration centralizes application settings and feature flags. By creating Key Vault references using the `@Microsoft.KeyVault(...)` URI syntax, applications consume both general settings and secured secrets through a single client provider without duplicating secrets.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["Azure App Configuration", "App Configuration", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_16;
