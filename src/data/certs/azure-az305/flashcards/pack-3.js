export const AZURE_AZ305_FLASHCARDS_3 = [
  {
    id: 'azure-az305-fc-51',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Owner vs Contributor vs User Access Administrator: what can each one do?',
    hint: 'Managing resources and managing access are separate rights.',
    back: '<strong>Owner</strong>: full control of resources <strong>and</strong> can assign roles. <strong>Contributor</strong>: full control of resources but <strong>cannot</strong> grant access to others. <strong>User Access Administrator</strong>: manages role assignments only, with no rights over the resources themselves. <strong>Reader</strong> views resources. For delegating access management with guardrails, prefer <strong>Role Based Access Control Administrator</strong> with conditions over User Access Administrator.',
    tags: ['Azure RBAC', 'Built-in roles']
  },
  {
    id: 'azure-az305-fc-52',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'At which scopes can an Azure role be assigned, and how does inheritance work?',
    hint: 'Four levels, top-down.',
    back: 'Management group, subscription, resource group, or individual resource. An assignment is <strong>inherited by every child scope</strong>: Reader at a management group applies to all subscriptions, resource groups and resources beneath it, including ones created later. Access is <strong>additive</strong>; a lower scope cannot remove a right granted higher up, only a deny assignment can block it.',
    tags: ['Azure RBAC', 'Scope']
  },
  {
    id: 'azure-az305-fc-53',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Actions vs DataActions: why can a subscription Contributor not read blob contents with their Entra identity?',
    hint: 'Control plane and data plane are granted separately.',
    back: '<strong>Actions</strong> cover the management (control) plane through Azure Resource Manager: create, configure, delete. <strong>DataActions</strong> cover the data plane: reading a blob, a queue message, a Key Vault secret under the RBAC model. Contributor has <code>*</code> in Actions but no DataActions, so it cannot read blob data with Entra authorization; it can still list the account keys (an action) and use Shared Key, unless Shared Key access is disabled. Grant data roles such as Storage Blob Data Reader explicitly.',
    tags: ['Azure RBAC', 'Data plane']
  },
  {
    id: 'azure-az305-fc-54',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'CanNotDelete vs ReadOnly resource locks: what does each block?',
    hint: 'One stops removal, the other stops any change.',
    back: '<strong>CanNotDelete</strong>: authorised users can read and modify the resource but not delete it. <strong>ReadOnly</strong>: users can only read it, as if everyone had Reader, so updates and deletes fail. Locks set on a subscription or resource group are <strong>inherited</strong> by the resources in it and apply to <strong>every user regardless of role</strong>.',
    tags: ['Resource locks', 'Governance']
  },
  {
    id: 'azure-az305-fc-55',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Can a subscription Owner delete a resource that has a CanNotDelete lock?',
    hint: 'Locks trump roles.',
    back: 'Not directly. A lock applies to everyone, including Owners; the delete fails until the lock is removed. Removing it requires <code>Microsoft.Authorization/locks/*</code>, which <strong>Owner</strong> and <strong>User Access Administrator</strong> hold, so an Owner can remove the lock and then delete, which is why locks guard against accidents rather than malicious admins. Deleting a resource group fails if any resource inside it is locked.',
    tags: ['Resource locks']
  },
  {
    id: 'azure-az305-fc-56',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Do resource locks protect the data inside a resource?',
    hint: 'Locks live in Azure Resource Manager.',
    back: 'No. Locks apply only to <strong>control-plane</strong> operations sent through Azure Resource Manager. A CanNotDelete lock on a storage account does not stop anyone deleting blobs, and a lock on a SQL server does not stop dropping tables. Side effects also come from the control plane: a <strong>ReadOnly</strong> lock blocks POST operations such as listing storage keys, which can break apps that authenticate with keys. Use soft delete, immutability or backups for data protection.',
    tags: ['Resource locks', 'Data plane']
  },
  {
    id: 'azure-az305-fc-57',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Why assign Azure roles to groups instead of to individual users?',
    hint: 'Think about joiners, leavers and a hard limit.',
    back: 'Group assignments mean onboarding and offboarding change <strong>group membership</strong>, not role assignments, and access reviews can target the group. It also keeps you under the limit of <strong>4,000 role assignments per subscription</strong>. Use security groups (or role-assignable groups for sensitive roles) and keep direct user assignments for exceptions.',
    tags: ['Azure RBAC', 'Entra groups']
  },
  {
    id: 'azure-az305-fc-58',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'NotActions in a role definition vs a deny assignment: which one actually denies?',
    hint: 'Subtracting from a grant is not a denial.',
    back: '<strong>NotActions</strong> only subtract operations from that one role\'s Actions; if the same user gets the operation from <strong>another</strong> role assignment, they can perform it. A <strong>deny assignment</strong> blocks the listed actions for the specified principals at a scope even when a role assignment allows them, and it is evaluated before role assignments.',
    tags: ['Azure RBAC', 'Deny assignments']
  },
  {
    id: 'azure-az305-fc-59',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Who can create a deny assignment in Azure?',
    hint: 'Not you, at least not directly.',
    back: 'You cannot create deny assignments with the role assignment APIs. They are created by Azure on your behalf by <strong>deployment stacks</strong> (deny settings such as denyDelete or denyWriteAndDelete, with excluded principals and actions) and by <strong>Azure managed applications</strong> to protect the managed resource group; Azure Blueprints used to do this before its retirement. Use a deployment stack when a set of resources must be protected even from subscription Owners.',
    tags: ['Deny assignments', 'Deployment stacks']
  },
  {
    id: 'azure-az305-fc-60',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Custom role limits: how many can a tenant hold, and what restricts management group scope?',
    hint: 'One management group, and no data plane there.',
    back: 'A tenant can hold up to <strong>5,000</strong> custom roles. The <code>AssignableScopes</code> list can contain subscriptions and resource groups, but <strong>only one management group</strong>, and the root scope (<code>/</code>) is reserved for built-in roles. A custom role that contains <strong>DataActions</strong> cannot be assigned at management group scope, so data-plane custom roles are assigned per subscription or lower.',
    tags: ['Custom roles', 'Azure RBAC', 'Limits']
  },
  {
    id: 'azure-az305-fc-61',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'User Access Administrator vs Role Based Access Control Administrator: which one do you delegate?',
    hint: 'Guardrails on what can be granted.',
    back: 'Both manage role assignments without granting rights over resources. <strong>User Access Administrator</strong> can assign <strong>any</strong> role, including Owner, to anyone. <strong>Role Based Access Control Administrator</strong> supports <strong>conditions</strong> that constrain which roles can be assigned and to which principal types or IDs, for example allowing a team lead to assign only Storage Blob Data Reader to service principals. Delegate the latter to follow least privilege.',
    tags: ['Azure RBAC', 'Delegation']
  },
  {
    id: 'azure-az305-fc-62',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure ABAC role assignment conditions: which services support them, and what can a condition test?',
    hint: 'Storage data actions first.',
    back: 'Conditions on data-plane assignments are supported for <strong>Blob Storage, Data Lake Storage and Queue Storage</strong>. A condition can test <strong>resource</strong> attributes (container name, blob path, blob index tags), <strong>request</strong> attributes (tags being written), <strong>principal</strong> attributes (Entra custom security attributes) and <strong>environment</strong> attributes (private link, subnet, UTC time). Conditions also constrain role-assignment writes for delegation. They narrow an existing grant; they never add permissions.',
    tags: ['ABAC', 'Storage', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-63',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'PIM for Azure resources: eligible vs active assignments.',
    hint: 'Standing access vs just-in-time.',
    back: 'An <strong>eligible</strong> assignment gives no access until the user <strong>activates</strong> it for a limited period, meeting the role settings you define: MFA, justification, ticket number or approval. An <strong>active</strong> assignment grants access immediately, either permanently or until an end date. Both can be time-bound. Use eligible assignments for Owner and Contributor on production scopes; PIM requires Entra ID P2 or Entra ID Governance.',
    tags: ['PIM', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-64',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Storage data access: Entra ID with RBAC, user delegation SAS, service SAS or Shared Key. Which to recommend?',
    hint: 'Prefer anything not signed with the account key.',
    back: 'Prefer <strong>Entra ID with RBAC</strong> (often via managed identity): no secret, auditable, revocable. When a client needs a time-limited URL, use a <strong>user delegation SAS</strong>, signed with Entra credentials and valid for at most seven days. <strong>Service and account SAS</strong> and <strong>Shared Key</strong> depend on the account key, which grants full access and can only be revoked by rotating it. Setting <code>AllowSharedKeyAccess</code> to false forces Entra authorization for everything.',
    tags: ['Storage', 'SAS', 'Authorization']
  },
  {
    id: 'azure-az305-fc-65',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'A managed identity was added to a group that holds a role, but calls still fail an hour later. Why?',
    hint: 'Tokens are cached, and group claims live in the token.',
    back: 'Role assignment changes usually propagate within minutes, but a managed identity\'s token, and the <strong>group memberships</strong> it carries, are cached by the platform for up to <strong>24 hours</strong>, so group-based access for managed identities can take that long to apply. Where access must work immediately, assign the role <strong>directly</strong> to the managed identity rather than through a group.',
    tags: ['Managed identities', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-66',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Lighthouse authorizations: which roles can a service provider be given?',
    hint: 'Built-in only, with notable exceptions.',
    back: 'Authorizations pair a principal in the managing tenant with an Azure <strong>built-in</strong> role; custom roles are not supported. <strong>Owner</strong> is not supported, nor are roles with <strong>DataActions</strong> or with Microsoft.Authorization write or delete actions. <strong>User Access Administrator</strong> is allowed only to assign roles to managed identities in the customer tenant (for policy remediation). Eligible authorizations add just-in-time activation through PIM.',
    tags: ['Azure Lighthouse', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-67',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does Microsoft Entra application proxy need on premises, and which firewall ports must be opened inbound?',
    hint: 'The connector dials out.',
    back: 'A <strong>private network connector</strong> installed on a server that can reach the internal app; for resilience, install at least two in a connector group. Connectors make only <strong>outbound</strong> HTTPS connections to the cloud service, so <strong>no inbound ports</strong> and no perimeter network are needed. Users reach the app through an external URL, and Entra pre-authentication applies Conditional Access before any traffic reaches the network.',
    tags: ['Application proxy', 'Hybrid access']
  },
  {
    id: 'azure-az305-fc-68',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Application proxy pre-authentication: Microsoft Entra ID vs passthrough.',
    hint: 'Where does Conditional Access get a chance to run?',
    back: 'With <strong>Microsoft Entra ID</strong> pre-authentication (the default), users must sign in to Entra ID before the connector forwards any request, so MFA, Conditional Access and sign-in logging apply and unauthenticated traffic never reaches the app. <strong>Passthrough</strong> forwards requests without Entra sign-in; use it only for apps that must be anonymous or that handle their own authentication, since it gives up those protections.',
    tags: ['Application proxy', 'Conditional Access']
  },
  {
    id: 'azure-az305-fc-69',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How does application proxy provide SSO to an on-premises app that uses Integrated Windows Authentication?',
    hint: 'The connector asks AD for a ticket on the user\'s behalf.',
    back: 'Through <strong>Kerberos constrained delegation</strong>. The connector servers are domain-joined and granted delegation to the app\'s <strong>service principal name</strong> in AD (classic or resource-based KCD). After the user signs in to Entra ID, the connector obtains a Kerberos ticket for that user and presents it to the app. The app is configured with Integrated Windows Authentication, the internal SPN and a delegated login identity (for example on-premises UPN or SAM account name).',
    tags: ['Application proxy', 'Kerberos', 'SSO']
  },
  {
    id: 'azure-az305-fc-70',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Microsoft Entra Private Access vs application proxy: when do you need Private Access?',
    hint: 'Web-only vs any protocol.',
    back: '<strong>Application proxy</strong> publishes internal <strong>HTTP/HTTPS</strong> apps to a browser with no client. <strong>Microsoft Entra Private Access</strong>, part of Global Secure Access, uses the <strong>Global Secure Access client</strong> on the device and the same connectors to give per-app, Conditional Access-protected access to <strong>any TCP or UDP</strong> resource (RDP, SSH, SMB, databases), replacing a traditional VPN. Quick Access can publish whole IP ranges while you define per-app segments.',
    tags: ['Private Access', 'Zero Trust', 'Hybrid access']
  },
  {
    id: 'azure-az305-fc-71',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Microsoft Entra Domain Services: what do you get, and what do you give up compared with self-managed domain controllers?',
    hint: 'Managed means no Domain Admins.',
    back: 'A <strong>managed domain</strong> with LDAP, Kerberos, NTLM and Group Policy, deployed into a virtual network (with optional replica sets in other regions), whose users are synchronised <strong>one way</strong> from Entra ID. You give up <strong>Domain Admin and Enterprise Admin</strong> rights (you get the AAD DC Administrators group), <strong>schema extensions</strong>, and writing users back to Entra ID. Password hashes must be available, so hybrid users need password hash sync.',
    tags: ['Entra Domain Services', 'Legacy authentication']
  },
  {
    id: 'azure-az305-fc-72',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure Files identity-based SMB access: which identity sources exist, and how are share-level and file-level permissions set?',
    hint: 'Three sources, two layers.',
    back: 'Sources: on-premises <strong>AD DS</strong>, <strong>Entra Domain Services</strong>, or <strong>Microsoft Entra Kerberos</strong> for hybrid identities (clients need no line of sight to a domain controller). Only one source per storage account. <strong>Share-level</strong> access comes from Azure RBAC roles such as Storage File Data SMB Share Contributor, or a default share-level permission for all authenticated users; <strong>directory and file level</strong> access comes from Windows ACLs (NTFS permissions).',
    tags: ['Azure Files', 'Kerberos', 'Authorization']
  },
  {
    id: 'azure-az305-fc-73',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Windows Hello for Business cloud Kerberos trust: how does an Entra sign-in reach on-premises file servers without a PKI?',
    hint: 'A partial ticket, completed by a domain controller.',
    back: 'You create an <strong>AzureADKerberos</strong> server object in each AD domain (it looks like a read-only DC). At Windows Hello sign-in, <strong>Microsoft Entra Kerberos</strong> issues a partial TGT for the on-premises domain; the device exchanges it with an on-premises domain controller for a full TGT and then requests service tickets as usual. No certificate authority or key trust sync is needed, which makes it the recommended hybrid deployment model.',
    tags: ['Windows Hello for Business', 'Kerberos', 'Hybrid access']
  },
  {
    id: 'azure-az305-fc-74',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'An Azure Arc-enabled server: which Azure authorization and governance features apply to it?',
    hint: 'It becomes an ARM resource with an identity.',
    back: 'The machine becomes a <strong>Microsoft.HybridCompute/machines</strong> resource, so <strong>Azure RBAC</strong> and tags apply to it and it inherits policy from its resource group. It gets a <strong>system-assigned managed identity</strong> that local apps can use to reach Azure resources without secrets. <strong>Azure Policy machine configuration</strong> audits or sets in-guest settings, and Defender for Servers, Update Manager and Azure Monitor Agent build on the same agent, which needs only outbound HTTPS.',
    tags: ['Azure Arc', 'Hybrid', 'Managed identities']
  },
  {
    id: 'azure-az305-fc-75',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What is a role-assignable group, and what extra protection does it get?',
    hint: 'It has to be decided when the group is created.',
    back: 'A security or Microsoft 365 group created with <code>isAssignableToRole</code> set to true, which lets it hold <strong>Entra role</strong> assignments (and be made eligible through PIM). The flag can only be set at <strong>creation</strong>, membership must be <strong>assigned</strong> (not dynamic), and only Privileged Role Administrators and Global Administrators can change its membership, so a Groups Administrator cannot add themselves to a privileged group.',
    tags: ['Entra groups', 'Entra roles']
  }
];

export default AZURE_AZ305_FLASHCARDS_3;
