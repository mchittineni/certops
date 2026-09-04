export const AZURE_AZ104_QUESTIONS_11 = [
  {
    id: "az-104-251",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Dynamic User Groups: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Microsoft Entra ID to automatically manage security group membership based on department and job title attributes without manual administrative intervention.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dynamic user membership rules using user attributes is under evaluation.",
    options: [
      { id: 'A', text: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'." },
      { id: 'B', text: "Manually add each user account individually to assigned static security groups." },
      { id: 'C', text: "Use Azure Policy definitions to insert users into Microsoft 365 groups." },
      { id: 'D', text: "Deploy on-premises LDAP synchronization without Entra ID P1 licensing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'. Microsoft Entra ID dynamic group membership rules automatically populate and remove users from security or Microsoft 365 groups based on user object attributes (such as department, country, or jobTitle). This requires Microsoft Entra ID P1 or P2 licensing and eliminates manual group maintenance overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership",
    tags: ["Microsoft Entra ID", "Entra ID", "Dr Failover"]
  },
  {
    id: "az-104-252",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Dynamic User Groups: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Microsoft Entra ID to automatically manage security group membership based on department and job title attributes without manual administrative intervention.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dynamic user membership rules using user attributes is under evaluation.",
    options: [
      { id: 'A', text: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'." },
      { id: 'B', text: "Manually add each user account individually to assigned static security groups." },
      { id: 'C', text: "Deploy on-premises LDAP synchronization without Entra ID P1 licensing." },
      { id: 'D', text: "Use Azure Policy definitions to insert users into Microsoft 365 groups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'. Microsoft Entra ID dynamic group membership rules automatically populate and remove users from security or Microsoft 365 groups based on user object attributes (such as department, country, or jobTitle). This requires Microsoft Entra ID P1 or P2 licensing and eliminates manual group maintenance overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership",
    tags: ["Microsoft Entra ID", "Entra ID", "High Load Scale"]
  },
  {
    id: "az-104-253",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Dynamic User Groups: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Microsoft Entra ID to automatically manage security group membership based on department and job title attributes without manual administrative intervention.",
    question: "Which solution properly implements these mandatory security and governance controls? Dynamic user membership rules using user attributes is under evaluation.",
    options: [
      { id: 'A', text: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'." },
      { id: 'B', text: "Deploy on-premises LDAP synchronization without Entra ID P1 licensing." },
      { id: 'C', text: "Manually add each user account individually to assigned static security groups." },
      { id: 'D', text: "Use Azure Policy definitions to insert users into Microsoft 365 groups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'. Microsoft Entra ID dynamic group membership rules automatically populate and remove users from security or Microsoft 365 groups based on user object attributes (such as department, country, or jobTitle). This requires Microsoft Entra ID P1 or P2 licensing and eliminates manual group maintenance overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership",
    tags: ["Microsoft Entra ID", "Entra ID", "Security Compliance"]
  },
  {
    id: "az-104-254",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Dynamic User Groups: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Microsoft Entra ID to automatically manage security group membership based on department and job title attributes without manual administrative intervention.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dynamic user membership rules using user attributes is under evaluation.",
    options: [
      { id: 'A', text: "Manually add each user account individually to assigned static security groups." },
      { id: 'B', text: "Use Azure Policy definitions to insert users into Microsoft 365 groups." },
      { id: 'C', text: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'." },
      { id: 'D', text: "Deploy on-premises LDAP synchronization without Entra ID P1 licensing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'. Microsoft Entra ID dynamic group membership rules automatically populate and remove users from security or Microsoft 365 groups based on user object attributes (such as department, country, or jobTitle). This requires Microsoft Entra ID P1 or P2 licensing and eliminates manual group maintenance overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership",
    tags: ["Microsoft Entra ID", "Entra ID", "Hybrid Migration"]
  },
  {
    id: "az-104-255",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra ID Dynamic User Groups: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Microsoft Entra ID to automatically manage security group membership based on department and job title attributes without manual administrative intervention.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dynamic user membership rules using user attributes is under evaluation.",
    options: [
      { id: 'A', text: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'." },
      { id: 'B', text: "Deploy on-premises LDAP synchronization without Entra ID P1 licensing." },
      { id: 'C', text: "Use Azure Policy definitions to insert users into Microsoft 365 groups." },
      { id: 'D', text: "Manually add each user account individually to assigned static security groups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure dynamic user membership rules using syntax like user.department -eq 'Finance' and user.jobTitle -match 'Analyst'. Microsoft Entra ID dynamic group membership rules automatically populate and remove users from security or Microsoft 365 groups based on user object attributes (such as department, country, or jobTitle). This requires Microsoft Entra ID P1 or P2 licensing and eliminates manual group maintenance overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership",
    tags: ["Microsoft Entra ID", "Entra ID", "Resilience Failure"]
  },
  {
    id: "az-104-256",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Password Reset (SSPR) with Writeback: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Microsoft Entra ID to allow hybrid enterprise users to reset forgotten passwords securely from any internet browser while synchronizing changes immediately to on-premises Active Directory.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Self-Service Password Reset (SSPR) with on-premises password writeback is under evaluation.",
    options: [
      { id: 'A', text: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled." },
      { id: 'B', text: "Configure an Azure Automation runbook scheduled to reset user passwords every 90 days." },
      { id: 'C', text: "Deploy a custom web portal on an unencrypted IaaS virtual machine without Active Directory federation." },
      { id: 'D', text: "Instruct users to call the corporate IT helpdesk to manually reset passwords on local domain controllers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled. Microsoft Entra Self-Service Password Reset (SSPR) allows users to reset their passwords without administrator involvement. When combined with Microsoft Entra Connect Password Writeback, cloud password updates are written back to on-premises Active Directory Domain Services (AD DS) in real time.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback",
    tags: ["Microsoft Entra ID", "Entra ID", "Dr Failover"]
  },
  {
    id: "az-104-257",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Password Reset (SSPR) with Writeback: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Microsoft Entra ID to allow hybrid enterprise users to reset forgotten passwords securely from any internet browser while synchronizing changes immediately to on-premises Active Directory.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Self-Service Password Reset (SSPR) with on-premises password writeback is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Automation runbook scheduled to reset user passwords every 90 days." },
      { id: 'B', text: "Instruct users to call the corporate IT helpdesk to manually reset passwords on local domain controllers." },
      { id: 'C', text: "Deploy a custom web portal on an unencrypted IaaS virtual machine without Active Directory federation." },
      { id: 'D', text: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled. Microsoft Entra Self-Service Password Reset (SSPR) allows users to reset their passwords without administrator involvement. When combined with Microsoft Entra Connect Password Writeback, cloud password updates are written back to on-premises Active Directory Domain Services (AD DS) in real time.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback",
    tags: ["Microsoft Entra ID", "Entra ID", "High Load Scale"]
  },
  {
    id: "az-104-258",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Password Reset (SSPR) with Writeback: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Microsoft Entra ID to allow hybrid enterprise users to reset forgotten passwords securely from any internet browser while synchronizing changes immediately to on-premises Active Directory.",
    question: "Which solution properly implements these mandatory security and governance controls? Self-Service Password Reset (SSPR) with on-premises password writeback is under evaluation.",
    options: [
      { id: 'A', text: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled." },
      { id: 'B', text: "Instruct users to call the corporate IT helpdesk to manually reset passwords on local domain controllers." },
      { id: 'C', text: "Deploy a custom web portal on an unencrypted IaaS virtual machine without Active Directory federation." },
      { id: 'D', text: "Configure an Azure Automation runbook scheduled to reset user passwords every 90 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled. Microsoft Entra Self-Service Password Reset (SSPR) allows users to reset their passwords without administrator involvement. When combined with Microsoft Entra Connect Password Writeback, cloud password updates are written back to on-premises Active Directory Domain Services (AD DS) in real time.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback",
    tags: ["Microsoft Entra ID", "Entra ID", "Security Compliance"]
  },
  {
    id: "az-104-259",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Password Reset (SSPR) with Writeback: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Microsoft Entra ID to allow hybrid enterprise users to reset forgotten passwords securely from any internet browser while synchronizing changes immediately to on-premises Active Directory.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Self-Service Password Reset (SSPR) with on-premises password writeback is under evaluation.",
    options: [
      { id: 'A', text: "Deploy a custom web portal on an unencrypted IaaS virtual machine without Active Directory federation." },
      { id: 'B', text: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled." },
      { id: 'C', text: "Configure an Azure Automation runbook scheduled to reset user passwords every 90 days." },
      { id: 'D', text: "Instruct users to call the corporate IT helpdesk to manually reset passwords on local domain controllers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled. Microsoft Entra Self-Service Password Reset (SSPR) allows users to reset their passwords without administrator involvement. When combined with Microsoft Entra Connect Password Writeback, cloud password updates are written back to on-premises Active Directory Domain Services (AD DS) in real time.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback",
    tags: ["Microsoft Entra ID", "Entra ID", "Hybrid Migration"]
  },
  {
    id: "az-104-260",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Self-Service Password Reset (SSPR) with Writeback: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Microsoft Entra ID to allow hybrid enterprise users to reset forgotten passwords securely from any internet browser while synchronizing changes immediately to on-premises Active Directory.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Self-Service Password Reset (SSPR) with on-premises password writeback is under evaluation.",
    options: [
      { id: 'A', text: "Deploy a custom web portal on an unencrypted IaaS virtual machine without Active Directory federation." },
      { id: 'B', text: "Instruct users to call the corporate IT helpdesk to manually reset passwords on local domain controllers." },
      { id: 'C', text: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled." },
      { id: 'D', text: "Configure an Azure Automation runbook scheduled to reset user passwords every 90 days." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Microsoft Entra Self-Service Password Reset (SSPR) with Microsoft Entra Connect Password Writeback enabled. Microsoft Entra Self-Service Password Reset (SSPR) allows users to reset their passwords without administrator involvement. When combined with Microsoft Entra Connect Password Writeback, cloud password updates are written back to on-premises Active Directory Domain Services (AD DS) in real time.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr-writeback",
    tags: ["Microsoft Entra ID", "Entra ID", "Resilience Failure"]
  },
  {
    id: "az-104-261",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra External ID (B2B Collaboration): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Microsoft Entra External ID to collaborate securely with external auditing partners by granting them access to internal Azure resources using their own corporate email credentials.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? B2B guest user invitation and access controls is under evaluation.",
    options: [
      { id: 'A', text: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts." },
      { id: 'B', text: "Share tenant global administrator credentials with external third-party partner organizations." },
      { id: 'C', text: "Create new internal cloud user accounts with corporate domain email addresses for all external personnel." },
      { id: 'D', text: "Disable multi-factor authentication requirements for external partner email domains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts. Microsoft Entra B2B collaboration allows organizations to securely share applications and resources with external guest users from other organizations. External partners authenticate using their own enterprise work accounts or social identities, while host organizations maintain full access governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Microsoft Entra External ID", "External ID", "Dr Failover"]
  },
  {
    id: "az-104-262",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra External ID (B2B Collaboration): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Microsoft Entra External ID to collaborate securely with external auditing partners by granting them access to internal Azure resources using their own corporate email credentials.",
    question: "Which architectural approach should the team select to manage this demand efficiently? B2B guest user invitation and access controls is under evaluation.",
    options: [
      { id: 'A', text: "Disable multi-factor authentication requirements for external partner email domains." },
      { id: 'B', text: "Share tenant global administrator credentials with external third-party partner organizations." },
      { id: 'C', text: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts." },
      { id: 'D', text: "Create new internal cloud user accounts with corporate domain email addresses for all external personnel." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts. Microsoft Entra B2B collaboration allows organizations to securely share applications and resources with external guest users from other organizations. External partners authenticate using their own enterprise work accounts or social identities, while host organizations maintain full access governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Microsoft Entra External ID", "External ID", "High Load Scale"]
  },
  {
    id: "az-104-263",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra External ID (B2B Collaboration): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Microsoft Entra External ID to collaborate securely with external auditing partners by granting them access to internal Azure resources using their own corporate email credentials.",
    question: "Which solution properly implements these mandatory security and governance controls? B2B guest user invitation and access controls is under evaluation.",
    options: [
      { id: 'A', text: "Create new internal cloud user accounts with corporate domain email addresses for all external personnel." },
      { id: 'B', text: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts." },
      { id: 'C', text: "Disable multi-factor authentication requirements for external partner email domains." },
      { id: 'D', text: "Share tenant global administrator credentials with external third-party partner organizations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts. Microsoft Entra B2B collaboration allows organizations to securely share applications and resources with external guest users from other organizations. External partners authenticate using their own enterprise work accounts or social identities, while host organizations maintain full access governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Microsoft Entra External ID", "External ID", "Security Compliance"]
  },
  {
    id: "az-104-264",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra External ID (B2B Collaboration): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Microsoft Entra External ID to collaborate securely with external auditing partners by granting them access to internal Azure resources using their own corporate email credentials.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? B2B guest user invitation and access controls is under evaluation.",
    options: [
      { id: 'A', text: "Share tenant global administrator credentials with external third-party partner organizations." },
      { id: 'B', text: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts." },
      { id: 'C', text: "Create new internal cloud user accounts with corporate domain email addresses for all external personnel." },
      { id: 'D', text: "Disable multi-factor authentication requirements for external partner email domains." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts. Microsoft Entra B2B collaboration allows organizations to securely share applications and resources with external guest users from other organizations. External partners authenticate using their own enterprise work accounts or social identities, while host organizations maintain full access governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Microsoft Entra External ID", "External ID", "Hybrid Migration"]
  },
  {
    id: "az-104-265",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra External ID (B2B Collaboration): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Microsoft Entra External ID to collaborate securely with external auditing partners by granting them access to internal Azure resources using their own corporate email credentials.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? B2B guest user invitation and access controls is under evaluation.",
    options: [
      { id: 'A', text: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts." },
      { id: 'B', text: "Share tenant global administrator credentials with external third-party partner organizations." },
      { id: 'C', text: "Create new internal cloud user accounts with corporate domain email addresses for all external personnel." },
      { id: 'D', text: "Disable multi-factor authentication requirements for external partner email domains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invite external auditors as Microsoft Entra B2B guest users and assign required RBAC permissions to their guest accounts. Microsoft Entra B2B collaboration allows organizations to securely share applications and resources with external guest users from other organizations. External partners authenticate using their own enterprise work accounts or social identities, while host organizations maintain full access governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/external-id/what-is-b2b",
    tags: ["Microsoft Entra External ID", "External ID", "Resilience Failure"]
  },
  {
    id: "az-104-266",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Administrative Units: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Microsoft Entra ID to delegate user and group management for regional branch offices to local IT administrators without granting full tenant-wide administrative privileges.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Delegated tenant administration via Administrative Units is under evaluation.",
    options: [
      { id: 'A', text: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff." },
      { id: 'B', text: "Create separate independent Entra ID tenants for each physical regional branch office." },
      { id: 'C', text: "Assign the global User Administrator directory role to regional branch office managers." },
      { id: 'D', text: "Manage regional user accounts through shared spreadsheets without directory roles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff. Administrative Units (AUs) in Microsoft Entra ID restrict administrative permissions to a specific subset of users, groups, or devices within an organization. This allows delegating regional user administration (such as password resets or group updates) without granting tenant-wide administrative rights.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units",
    tags: ["Microsoft Entra ID", "Entra ID", "Dr Failover"]
  },
  {
    id: "az-104-267",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Administrative Units: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Microsoft Entra ID to delegate user and group management for regional branch offices to local IT administrators without granting full tenant-wide administrative privileges.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Delegated tenant administration via Administrative Units is under evaluation.",
    options: [
      { id: 'A', text: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff." },
      { id: 'B', text: "Create separate independent Entra ID tenants for each physical regional branch office." },
      { id: 'C', text: "Assign the global User Administrator directory role to regional branch office managers." },
      { id: 'D', text: "Manage regional user accounts through shared spreadsheets without directory roles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff. Administrative Units (AUs) in Microsoft Entra ID restrict administrative permissions to a specific subset of users, groups, or devices within an organization. This allows delegating regional user administration (such as password resets or group updates) without granting tenant-wide administrative rights.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units",
    tags: ["Microsoft Entra ID", "Entra ID", "High Load Scale"]
  },
  {
    id: "az-104-268",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Administrative Units: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Microsoft Entra ID to delegate user and group management for regional branch offices to local IT administrators without granting full tenant-wide administrative privileges.",
    question: "Which solution properly implements these mandatory security and governance controls? Delegated tenant administration via Administrative Units is under evaluation.",
    options: [
      { id: 'A', text: "Assign the global User Administrator directory role to regional branch office managers." },
      { id: 'B', text: "Manage regional user accounts through shared spreadsheets without directory roles." },
      { id: 'C', text: "Create separate independent Entra ID tenants for each physical regional branch office." },
      { id: 'D', text: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff. Administrative Units (AUs) in Microsoft Entra ID restrict administrative permissions to a specific subset of users, groups, or devices within an organization. This allows delegating regional user administration (such as password resets or group updates) without granting tenant-wide administrative rights.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units",
    tags: ["Microsoft Entra ID", "Entra ID", "Security Compliance"]
  },
  {
    id: "az-104-269",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Administrative Units: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Microsoft Entra ID to delegate user and group management for regional branch offices to local IT administrators without granting full tenant-wide administrative privileges.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Delegated tenant administration via Administrative Units is under evaluation.",
    options: [
      { id: 'A', text: "Create separate independent Entra ID tenants for each physical regional branch office." },
      { id: 'B', text: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff." },
      { id: 'C', text: "Manage regional user accounts through shared spreadsheets without directory roles." },
      { id: 'D', text: "Assign the global User Administrator directory role to regional branch office managers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff. Administrative Units (AUs) in Microsoft Entra ID restrict administrative permissions to a specific subset of users, groups, or devices within an organization. This allows delegating regional user administration (such as password resets or group updates) without granting tenant-wide administrative rights.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units",
    tags: ["Microsoft Entra ID", "Entra ID", "Hybrid Migration"]
  },
  {
    id: "az-104-270",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Microsoft Entra Administrative Units: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Microsoft Entra ID to delegate user and group management for regional branch offices to local IT administrators without granting full tenant-wide administrative privileges.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Delegated tenant administration via Administrative Units is under evaluation.",
    options: [
      { id: 'A', text: "Create separate independent Entra ID tenants for each physical regional branch office." },
      { id: 'B', text: "Assign the global User Administrator directory role to regional branch office managers." },
      { id: 'C', text: "Manage regional user accounts through shared spreadsheets without directory roles." },
      { id: 'D', text: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create Microsoft Entra Administrative Units (AUs) scoped to regional users and assign scoped User Administrator roles to local staff. Administrative Units (AUs) in Microsoft Entra ID restrict administrative permissions to a specific subset of users, groups, or devices within an organization. This allows delegating regional user administration (such as password resets or group updates) without granting tenant-wide administrative rights.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units",
    tags: ["Microsoft Entra ID", "Entra ID", "Resilience Failure"]
  },
  {
    id: "az-104-271",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom RBAC Role Definitions: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure RBAC to create a specialized administrative role that allows restarting virtual machines and reading storage keys, but strictly prevents modifying virtual networks.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Custom RBAC role definitions with granular actions and notActions is under evaluation.",
    options: [
      { id: 'A', text: "Use Windows local Group Policy Objects (GPOs) to control Azure Resource Manager API calls." },
      { id: 'B', text: "Assign the built-in Contributor role at the subscription root scope." },
      { id: 'C', text: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group." },
      { id: 'D', text: "Grant all engineers the Owner role at the virtual machine resource level." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group. Custom Azure RBAC roles allow organizations to define precise administrative permissions when built-in roles do not meet specific needs. Custom roles specify permitted operations under 'Actions' and excluded operations under 'NotActions', scoped to management groups, subscriptions, or resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles",
    tags: ["Azure RBAC", "RBAC", "Dr Failover"]
  },
  {
    id: "az-104-272",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom RBAC Role Definitions: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure RBAC to create a specialized administrative role that allows restarting virtual machines and reading storage keys, but strictly prevents modifying virtual networks.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Custom RBAC role definitions with granular actions and notActions is under evaluation.",
    options: [
      { id: 'A', text: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group." },
      { id: 'B', text: "Use Windows local Group Policy Objects (GPOs) to control Azure Resource Manager API calls." },
      { id: 'C', text: "Grant all engineers the Owner role at the virtual machine resource level." },
      { id: 'D', text: "Assign the built-in Contributor role at the subscription root scope." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group. Custom Azure RBAC roles allow organizations to define precise administrative permissions when built-in roles do not meet specific needs. Custom roles specify permitted operations under 'Actions' and excluded operations under 'NotActions', scoped to management groups, subscriptions, or resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles",
    tags: ["Azure RBAC", "RBAC", "High Load Scale"]
  },
  {
    id: "az-104-273",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom RBAC Role Definitions: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure RBAC to create a specialized administrative role that allows restarting virtual machines and reading storage keys, but strictly prevents modifying virtual networks.",
    question: "Which solution properly implements these mandatory security and governance controls? Custom RBAC role definitions with granular actions and notActions is under evaluation.",
    options: [
      { id: 'A', text: "Assign the built-in Contributor role at the subscription root scope." },
      { id: 'B', text: "Grant all engineers the Owner role at the virtual machine resource level." },
      { id: 'C', text: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group." },
      { id: 'D', text: "Use Windows local Group Policy Objects (GPOs) to control Azure Resource Manager API calls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group. Custom Azure RBAC roles allow organizations to define precise administrative permissions when built-in roles do not meet specific needs. Custom roles specify permitted operations under 'Actions' and excluded operations under 'NotActions', scoped to management groups, subscriptions, or resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles",
    tags: ["Azure RBAC", "RBAC", "Security Compliance"]
  },
  {
    id: "az-104-274",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom RBAC Role Definitions: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure RBAC to create a specialized administrative role that allows restarting virtual machines and reading storage keys, but strictly prevents modifying virtual networks.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Custom RBAC role definitions with granular actions and notActions is under evaluation.",
    options: [
      { id: 'A', text: "Assign the built-in Contributor role at the subscription root scope." },
      { id: 'B', text: "Use Windows local Group Policy Objects (GPOs) to control Azure Resource Manager API calls." },
      { id: 'C', text: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group." },
      { id: 'D', text: "Grant all engineers the Owner role at the virtual machine resource level." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group. Custom Azure RBAC roles allow organizations to define precise administrative permissions when built-in roles do not meet specific needs. Custom roles specify permitted operations under 'Actions' and excluded operations under 'NotActions', scoped to management groups, subscriptions, or resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles",
    tags: ["Azure RBAC", "RBAC", "Hybrid Migration"]
  },
  {
    id: "az-104-275",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d1",
    domainName: "Manage Azure identities and governance",
    title: "Custom RBAC Role Definitions: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure RBAC to create a specialized administrative role that allows restarting virtual machines and reading storage keys, but strictly prevents modifying virtual networks.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Custom RBAC role definitions with granular actions and notActions is under evaluation.",
    options: [
      { id: 'A', text: "Grant all engineers the Owner role at the virtual machine resource level." },
      { id: 'B', text: "Use Windows local Group Policy Objects (GPOs) to control Azure Resource Manager API calls." },
      { id: 'C', text: "Assign the built-in Contributor role at the subscription root scope." },
      { id: 'D', text: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a custom Azure RBAC role definition with specific actions and assign it to the engineering security group. Custom Azure RBAC roles allow organizations to define precise administrative permissions when built-in roles do not meet specific needs. Custom roles specify permitted operations under 'Actions' and excluded operations under 'NotActions', scoped to management groups, subscriptions, or resource groups.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles",
    tags: ["Azure RBAC", "RBAC", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_11;
