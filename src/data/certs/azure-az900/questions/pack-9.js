export const AZURE_AZ900_QUESTIONS_9 = [
  {
    id: "az-900-201",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Data Egress Charges in Azure",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for data egress charges in azure.",
    question: "Which statement or mechanism accurately describes data egress charges in azure?",
    options: [
      { id: 'A', text: "Data transfer is only charged during peak business hours" },
      { id: 'B', text: "Inbound data transfer is billed at double the rate of outbound transfer" },
      { id: 'C', text: "Inbound data transfer is free, while outbound data transfer across zones or to the internet incurs egress fees" },
      { id: 'D', text: "All data ingress and egress is completely free in all regions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure, data inbound (ingress) into Azure datacenters is free, whereas outbound data transfer (egress) to the internet or across billing zones incurs bandwidth charges. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Data"]
  },
  {
    id: "az-900-202",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Pricing Calculator Customization",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure pricing calculator customization.",
    question: "Which statement or mechanism accurately describes azure pricing calculator customization?",
    options: [
      { id: 'A', text: "Auditing employee access permissions" },
      { id: 'B', text: "Deploying live virtual machines into production" },
      { id: 'C', text: "Creating automated resource groups in subscriptions" },
      { id: 'D', text: "Customizing virtual machine instance sizes, disk types, and data transfer volumes for cost estimates" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Azure Pricing Calculator allows architects to customize VM instance sizes, storage redundancy types, operating system licensing, and expected monthly bandwidth. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-203",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Tags Inheritance Rules",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure tags inheritance rules.",
    question: "Which statement or mechanism accurately describes azure tags inheritance rules?",
    options: [
      { id: 'A', text: "Tags modify the underlying functional behavior of resources" },
      { id: 'B', text: "All resources automatically inherit tags from their parent resource group" },
      { id: 'C', text: "Tags can only be applied to subscriptions, never to resources" },
      { id: 'D', text: "Tags applied to a resource group are not inherited by resources within that group" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Tags applied to a parent Resource Group are NOT automatically inherited by the resources deployed inside that resource group, requiring policies or explicit tagging. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-204",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Policy Deny Effect",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure policy deny effect.",
    question: "Which statement or mechanism accurately describes azure policy deny effect?",
    options: [
      { id: 'A', text: "Modify effect" },
      { id: 'B', text: "Audit effect" },
      { id: 'C', text: "Disabled effect" },
      { id: 'D', text: "Deny effect" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Deny effect in an Azure Policy definition immediately prevents the creation or update of any resource that fails to meet specified compliance criteria. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-205",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Policy Audit Effect",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure policy audit effect.",
    question: "Which statement or mechanism accurately describes azure policy audit effect?",
    options: [
      { id: 'A', text: "Deny effect" },
      { id: 'B', text: "Enforce effect" },
      { id: 'C', text: "Delete effect" },
      { id: 'D', text: "Audit effect" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Audit effect in Azure Policy flags non-compliant resources in compliance reports without blocking their deployment, allowing teams to review exceptions. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-206",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Resource Locks Scope Inheritance",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure resource locks scope inheritance.",
    question: "Which statement or mechanism accurately describes azure resource locks scope inheritance?",
    options: [
      { id: 'A', text: "All resources within the resource group inherit the lock and cannot be deleted" },
      { id: 'B', text: "Only virtual machines inherit the lock, while storage accounts are exempt" },
      { id: 'C', text: "Resource locks must be applied individually to each resource" },
      { id: 'D', text: "Resource locks expire after 24 hours automatically" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a Delete lock is applied at the Subscription or Resource Group level, all resources inside that scope inherit the lock and cannot be deleted. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-207",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Service Health - Planned Maintenance",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure service health - planned maintenance.",
    question: "Which statement or mechanism accurately describes azure service health - planned maintenance?",
    options: [
      { id: 'A', text: "Planned Maintenance notifications in Azure Service Health" },
      { id: 'B', text: "Azure Status global tweets" },
      { id: 'C', text: "Azure Advisor Cost recommendations" },
      { id: 'D', text: "Azure Pricing Calculator updates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Service Health notifies administrators in advance about scheduled maintenance events that may require restarting virtual machines or updating underlying hosts. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-208",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Metrics Explorer",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure metrics explorer.",
    question: "Which statement or mechanism accurately describes azure metrics explorer?",
    options: [
      { id: 'A', text: "Microsoft Purview catalog" },
      { id: 'B', text: "Azure Metrics Explorer" },
      { id: 'C', text: "Azure Log Analytics KQL console" },
      { id: 'D', text: "Azure Policy dashboard" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Metrics Explorer allows engineers to plot visual charts, compare numerical telemetry in real time, and correlate CPU, memory, and network throughput across VMs. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-209",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Advisor - Cost Pillar",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure advisor - cost pillar.",
    question: "Which statement or mechanism accurately describes azure advisor - cost pillar?",
    options: [
      { id: 'A', text: "Backing up storage accounts to tape" },
      { id: 'B', text: "Cost optimization recommendations for resizing or shutting down idle VMs" },
      { id: 'C', text: "Enforcing password complexity rules across Entra ID" },
      { id: 'D', text: "Deploying redundant VMs in secondary regions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Cost pillar of Azure Advisor analyzes compute utilization and recommends shutting down or resizing underutilized virtual machines to save money. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-210",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Advisor - Reliability Pillar",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure advisor - reliability pillar.",
    question: "Which statement or mechanism accurately describes azure advisor - reliability pillar?",
    options: [
      { id: 'A', text: "Reducing licensing costs through Azure Hybrid Benefit" },
      { id: 'B', text: "Reliability recommendations for Availability Zones and backup configurations" },
      { id: 'C', text: "Improving web app TLS cipher suites" },
      { id: 'D', text: "Purging unused resource groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Reliability pillar of Azure Advisor recommends configuring Availability Zones, region pairs, and automated backup configurations to ensure business continuity. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-211",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Cloud Shell Persistent Storage",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure cloud shell persistent storage.",
    question: "Which statement or mechanism accurately describes azure cloud shell persistent storage?",
    options: [
      { id: 'A', text: "Cloud Shell does not support persistent files" },
      { id: 'B', text: "Attaching an Azure Files share to mount a persistent storage directory" },
      { id: 'C', text: "Downloading a local virtual hard disk to your desktop" },
      { id: 'D', text: "Saving console data to local browser cookies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Cloud Shell attaches an Azure Files share to automatically persist your customized scripts, configurations, and console history across browser sessions. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-212",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Bicep Modularity",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure bicep modularity.",
    question: "Which statement or mechanism accurately describes azure bicep modularity?",
    options: [
      { id: 'A', text: "Converting PowerShell scripts into Bash files" },
      { id: 'B', text: "Running Python code inside ARM templates" },
      { id: 'C', text: "Bypassing Azure Resource Manager validation" },
      { id: 'D', text: "Reusable Bicep modules that encapsulate standard infrastructure designs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Bicep supports modular file decomposition, enabling enterprise teams to create reusable infrastructure components that enforce architectural standards. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-213",
    difficulty: "hard",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Microsoft Purview Automated Data Catalog",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for microsoft purview automated data catalog.",
    question: "Which statement or mechanism accurately describes microsoft purview automated data catalog?",
    options: [
      { id: 'A', text: "Calculating 5-year hardware depreciation costs" },
      { id: 'B', text: "Enforcing network security group packet filtering" },
      { id: 'C', text: "Automated data discovery and sensitive data classification across hybrid environments" },
      { id: 'D', text: "Deploying virtual machine scale sets in secondary regions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Purview scans on-premises and cloud databases to automatically classify personal identifiable information (PII) and build a searchable data catalog. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Microsoft"]
  },
  {
    id: "az-900-214",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Arc Kubernetes Management",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure arc kubernetes management.",
    question: "Which statement or mechanism accurately describes azure arc kubernetes management?",
    options: [
      { id: 'A', text: "Bypassing Kubernetes API authentication" },
      { id: 'B', text: "Migrating all on-premises containers to Azure App Service" },
      { id: 'C', text: "Managing and governing on-premises Kubernetes clusters from the Azure Portal" },
      { id: 'D', text: "Converting Kubernetes pods into Azure Functions automatically" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With Azure Arc, administrators can attach on-premises Kubernetes clusters and deploy applications using GitOps configurations from the Azure Portal. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-215",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Azure Governance: Azure Status Global Dashboard",
    scenario: "An enterprise governance and financial operations team is evaluating Azure management tools, policy enforcement, and observability frameworks for azure status global dashboard.",
    question: "Which statement or mechanism accurately describes azure status global dashboard?",
    options: [
      { id: 'A', text: "The public Azure Status webpage" },
      { id: 'B', text: "Azure Service Health personalized view" },
      { id: 'C', text: "Azure Resource Health individual blade" },
      { id: 'D', text: "Azure Monitor alert rules" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The public Azure Status page provides global awareness of service disruptions and health across all Azure regions worldwide without requiring a login. Applying proper Azure governance and management tooling ensures compliance, predictable costs, and operational reliability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/",
    tags: ["Governance", "Management", "Azure"]
  },
  {
    id: "az-900-216",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Entra ID (formerly Azure Active Directory) Fundamentals",
    scenario: "What is the primary role of Microsoft Entra ID in cloud management?",
    question: "Which statement accurately describes Microsoft Entra ID?",
    options: [
      { id: 'A', text: "A relational SQL database engine" },
      { id: 'B', text: "A physical network cable system" },
      { id: 'C', text: "A cloud-based identity and access management service that manages user authentication, single sign-on, and security identities" },
      { id: 'D', text: "A hardware virtualization hypervisor" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Entra ID (formerly Azure Active Directory) is Microsoft's multi-tenant cloud-based identity and access management service, providing authentication, single sign-on (SSO), application management, and identity governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
    tags: ["Entra ID", "Identity", "IAM", "Authentication"]
  },
  {
    id: "az-900-217",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Entra ID vs Windows Server Active Directory (AD DS)",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How does cloud-native Microsoft Entra ID fundamentally differ from traditional on-premises Windows Server Active Directory Domain Services (AD DS)?",
    options: [
      { id: 'A', text: "Entra ID requires running domain controller servers" },
      { id: 'B', text: "Entra ID cannot manage user passwords" },
      { id: 'C', text: "AD DS is hosted exclusively on public websites" },
      { id: 'D', text: "Entra ID uses web-standard authentication protocols (OAuth 2.0, SAML, OpenID Connect) and flat structures, whereas AD DS uses Kerberos, NTLM, and hierarchical Organizational Units (OUs)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Windows Server AD DS relies on traditional domain controllers, Kerberos/NTLM authentication, and LDAP queries. Microsoft Entra ID is an HTTP/REST-based identity service using modern web standards (OpenID Connect, OAuth 2.0, SAML) designed for the cloud.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/fundamentals/compare-azure-ad-to-ad",
    tags: ["Entra ID", "Active Directory", "Protocols", "Identity"]
  },
  {
    id: "az-900-218",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Authentication vs Authorization",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "In cloud security terminology, what is the fundamental distinction between Authentication and Authorization?",
    options: [
      { id: 'A', text: "There is no difference between authentication and authorization" },
      { id: 'B', text: "Authentication verifies who you are (identity verification); Authorization determines what you are allowed to access and do (permission verification)" },
      { id: 'C', text: "Authentication grants permissions; Authorization checks passwords" },
      { id: 'D', text: "Authentication applies only to databases; Authorization applies only to networks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Authentication is the process of proving a user or service is who they claim to be (e.g. username, password, MFA token). Authorization verifies the authenticated identity's permission level to access specific resources (e.g. read, write, delete).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview",
    tags: ["Authentication", "Authorization", "IAM", "Security Concepts"]
  },
  {
    id: "az-900-219",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Multi-Factor Authentication (MFA) Benefits",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "Why does Microsoft recommend enforcing Multi-Factor Authentication (MFA) across all administrative cloud accounts?",
    options: [
      { id: 'A', text: "MFA speeds up database query times" },
      { id: 'B', text: "MFA encrypts virtual machine hard disks" },
      { id: 'C', text: "MFA requires two or more distinct verification factors (something you know, something you have, something you are), stopping over 99.9% of account compromise attacks" },
      { id: 'D', text: "MFA eliminates the need for software licenses" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-Factor Authentication (MFA) requires users to provide multiple independent credentials (e.g. password + authenticator app push notification or FIDO key), neutralizing credential theft and automated phishing attacks.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks",
    tags: ["MFA", "Identity Security", "Entra ID", "Security"]
  },
  {
    id: "az-900-220",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Entra Conditional Access",
    scenario: "A financial institution wants to require Multi-Factor Authentication and a compliant corporate device whenever an employee signs in from outside the corporate network, but permit seamless sign-in inside the office.",
    question: "Which Microsoft Entra feature evaluates these dynamic contextual conditions?",
    options: [
      { id: 'A', text: "Azure Advisor" },
      { id: 'B', text: "Azure Bastion" },
      { id: 'C', text: "Network Security Groups" },
      { id: 'D', text: "Conditional Access policies" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conditional Access is Microsoft Entra's zero-trust policy engine. It analyzes real-time signals (user identity, IP location, device compliance, client app, risk score) to enforce decisions (allow, require MFA, block access).",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    tags: ["Conditional Access", "Zero Trust", "Entra ID", "Security"]
  },
  {
    id: "az-900-221",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Role-Based Access Control (RBAC): Built-in Roles",
    scenario: "An administrator needs to grant an auditor permission to view all resources in a subscription without allowing them to create, modify, or delete any resources.",
    question: "Which built-in Azure RBAC role should be assigned?",
    options: [
      { id: 'A', text: "Owner" },
      { id: 'B', text: "User Access Administrator" },
      { id: 'C', text: "Reader" },
      { id: 'D', text: "Contributor" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Reader` role grants permission to view all resources, but does not allow making changes or managing access. `Contributor` can create and manage resources but cannot grant access. `Owner` grants full control including delegation.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles",
    tags: ["RBAC", "Reader", "Contributor", "Owner"]
  },
  {
    id: "az-900-222",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "RBAC vs Azure Policy: Roles vs Guardrails",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What is the difference between Azure Role-Based Access Control (RBAC) and Azure Policy?",
    options: [
      { id: 'A', text: "RBAC focuses on user actions (who has permission to perform operations); Azure Policy focuses on resource properties (what configurations and compliance standards are enforced on resources)" },
      { id: 'B', text: "RBAC applies only to databases; Policy applies only to networks" },
      { id: 'C', text: "There is no difference between RBAC and Azure Policy" },
      { id: 'D', text: "Policy grants user access; RBAC defines audit logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure RBAC manages user authorization by defining who can perform actions on resources (e.g. Bob can create VMs). Azure Policy manages resource governance by enforcing rules on resource states (e.g. VMs must be created only in East US and must have cost tags).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview#compare-azure-policy-and-azure-rbac",
    tags: ["RBAC", "Azure Policy", "Governance", "Security"]
  },
  {
    id: "az-900-223",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Zero Trust Security Model: The Three Core Principles",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "What are the three foundational principles of the Microsoft Zero Trust security architecture?",
    options: [
      { id: 'A', text: "Rely on firewalls, Use single passwords, and Grant full administrator rights" },
      { id: 'B', text: "Encrypt on-premises, Decrypt in cloud, and Ignore endpoints" },
      { id: 'C', text: "Verify explicitly, Use least privilege access, and Assume breach" },
      { id: 'D', text: "Trust everything internal, Block all external, and Never update passwords" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Zero Trust security model operates on three guiding principles: 1. Verify explicitly (always authenticate and authorize using all available data points), 2. Use least privileged access (JIT/JEA), and 3. Assume breach (minimize blast radius).",
    referenceUrl: "https://www.microsoft.com/en-us/security/business/zero-trust",
    tags: ["Zero Trust", "Security Architecture", "Principles"]
  },
  {
    id: "az-900-224",
    difficulty: "easy",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Defense in Depth Security Strategy",
    scenario: "An enterprise IT organization is designing cloud architectures, governance standards, and operational policies on Microsoft Azure.",
    question: "How does a 'Defense in Depth' strategy protect cloud environments against cyberattacks?",
    options: [
      { id: 'A', text: "By relying entirely on a single ultra-strong firewall" },
      { id: 'B', text: "By implementing multiple layered security mechanisms (physical, identity, perimeter, network, compute, application, data) so that if one layer is breached, subsequent layers prevent unauthorized access" },
      { id: 'C', text: "By running only one virtual machine" },
      { id: 'D', text: "By storing passwords in unencrypted plain text files" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Defense in Depth implements a multi-layered security framework across Physical Security, Identity & Access, Perimeter, Network, Compute, Application, and Data. If an attacker breaches the network perimeter, data encryption and identity controls prevent exfiltration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/defense-in-depth",
    tags: ["Defense in Depth", "Layered Security", "Architecture"]
  },
  {
    id: "az-900-225",
    difficulty: "medium",
    certId: "azure-az900",
    domainId: "d3",
    domainName: "Describe Azure Management and Governance",
    title: "Microsoft Purview: Data Governance and Compliance",
    scenario: "An enterprise needs an automated solution to discover, catalog, map, and govern sensitive data assets across multi-cloud databases, on-premises SQL servers, and SaaS applications.",
    question: "Which Microsoft service provides comprehensive unified data governance?",
    options: [
      { id: 'A', text: "Azure Bastion" },
      { id: 'B', text: "Azure Event Hubs" },
      { id: 'C', text: "Microsoft Purview" },
      { id: 'D', text: "Azure Traffic Manager" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Microsoft Purview is a comprehensive data governance solution that helps manage and govern on-premises, multi-cloud, and SaaS data, automated data discovery, sensitive data classification, and end-to-end data lineage tracking.",
    referenceUrl: "https://learn.microsoft.com/en-us/purview/purview-overview",
    tags: ["Purview", "Data Governance", "Compliance", "Data Lineage"]
  }
];

export default AZURE_AZ900_QUESTIONS_9;
