export const AZURE_AZ500_QUESTIONS_1 = [
  {
    id: "azure-az500-1",
    difficulty: "easy",
    certId: "azure-az500",
    domainId: "d1",
    domainName: "Manage Identity and Access",
    title: "Just-In-Time Privileged Access with Entra ID PIM",
    scenario: "A security architect wants to prevent administrative users from holding standing Global Administrator rights, requiring time-bound activation, MFA verification, and ticket number justification.",
    question: "Which Microsoft Entra feature enforces these privileged access controls?",
    options: [
      { id: 'A', text: "Privileged Identity Management (PIM)" },
      { id: 'B', text: "Conditional Access location policies" },
      { id: 'C', text: "Access Reviews without approval flows" },
      { id: 'D', text: "Identity Protection risky sign-in policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Entra Privileged Identity Management (PIM) provides time-based and approval-based role activation to mitigate risks of excessive, unnecessary, or misused access permissions. It requires users to request activation, enforce MFA, and submit business justifications or approval workflows rather than keeping permanent standing access.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure",
    tags: ["Entra ID", "PIM", "Identity"]
  },
  {
    id: "azure-az500-2",
    difficulty: "medium",
    certId: "azure-az500",
    domainId: "d2",
    domainName: "Secure Networking",
    title: "Enforcing Private Communication with Azure Private Endpoints",
    scenario: "A corporate compliance mandate requires that Azure App Service web applications connect to Azure SQL Database without traversing the public internet or exposing public IP addresses on the database.",
    question: "Which networking architecture fulfills this security requirement?",
    options: [
      { id: 'A', text: "Azure Private Endpoint inside the virtual network with virtual network integration" },
      { id: 'B', text: "Azure SQL Firewall allowlist with 0.0.0.0 rule enabled" },
      { id: 'C', text: "Service Tags applied to Network Security Group outbound rules" },
      { id: 'D', text: "Application Gateway with public frontend listener" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from a subnet in your virtual network to the Azure SQL Database, bringing the PaaS service into your private network boundary. Pairing App Service regional virtual network integration with a Private Endpoint routes all traffic privately over the Microsoft backbone without touching the public internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview",
    tags: ["Networking", "Private Endpoint", "Private Link"]
  },
  {
    id: "azure-az500-3",
    difficulty: "medium",
    certId: "azure-az500",
    domainId: "d3",
    domainName: "Secure Compute, Storage, and Databases",
    title: "Customer-Managed Encryption Keys in Azure Key Vault",
    scenario: "A healthcare enterprise requires that all data stored in Azure Blob Storage be encrypted at rest using encryption keys generated, rotated, and owned by the enterprise security team with immediate revocation capabilities.",
    question: "Which Azure Storage encryption configuration satisfies this policy requirement?",
    options: [
      { id: 'A', text: "Customer-Managed Keys (CMK) backed by Azure Key Vault or Managed HSM" },
      { id: 'B', text: "Microsoft-managed platform keys with automatic rotation" },
      { id: 'C', text: "Client-side manual AES-256 script encryption before upload" },
      { id: 'D', text: "Transparent Data Encryption (TDE) with service-managed certificates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Customer-Managed Keys (CMK) allow organizations to store their encryption keys in Azure Key Vault or Azure Key Vault Managed HSM. The organization controls key creation, rotation, permissions, and access auditing, and can instantly revoke access to the storage account by disabling the key.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview",
    tags: ["Key Vault", "CMK", "Encryption"]
  },
  {
    id: "azure-az500-4",
    difficulty: "hard",
    certId: "azure-az500",
    domainId: "d4",
    domainName: "Manage Security Operations",
    title: "Automated Incident Remediation in Microsoft Sentinel",
    scenario: "A security operations center (SOC) needs an automated incident response playbook in Microsoft Sentinel that automatically isolates a compromised virtual machine using network security rules whenever a high-severity alert triggers.",
    question: "Which automation component connects Microsoft Sentinel incident triggers with automated remediation workflows?",
    options: [
      { id: 'A', text: "Microsoft Sentinel automation rules triggering Azure Logic Apps playbooks" },
      { id: 'B', text: "Azure Monitor Action Groups sending email notifications" },
      { id: 'C', text: "Log Analytics alert queries running PowerShell in Azure Automation runbooks directly" },
      { id: 'D', text: "Microsoft Defender for Cloud regulatory compliance dashboards" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Sentinel uses automation rules to evaluate incidents and trigger playbooks based on Azure Logic Apps. These playbooks automate SOC procedures, such as isolating virtual machines, disabling compromised Entra ID users, or posting updates to ticketing systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/sentinel/automate-responses-with-playbooks",
    tags: ["Microsoft Sentinel", "SOAR", "Security Operations"]
  }
];

export default AZURE_AZ500_QUESTIONS_1;
