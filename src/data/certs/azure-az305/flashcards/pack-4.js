export const AZURE_AZ305_FLASHCARDS_4 = [
  {
    id: 'azure-az305-fc-76',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault Standard vs Premium: what does Premium add?',
    hint: 'It is about keys, not secrets.',
    back: 'Both tiers store secrets, certificates and keys with the same API. <strong>Premium</strong> adds <strong>HSM-protected keys</strong>, generated and used inside hardware security modules so the private key never leaves the HSM; Standard keys are software-protected. Secrets are stored the same way in both, so a vault holding only secrets gains nothing from Premium. For single-tenant HSMs with a customer-held security domain, use Managed HSM instead.',
    tags: ['Key Vault', 'HSM']
  },
  {
    id: 'azure-az305-fc-77',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault keys vs secrets vs certificates: what is each object for?',
    hint: 'Which one can you read back, and which one can you only use?',
    back: '<strong>Keys</strong>: cryptographic keys (RSA, EC) used for encrypt, decrypt, sign, verify, wrap and unwrap <strong>inside</strong> Key Vault; the private part is not returned. <strong>Secrets</strong>: any value up to 25 KB (passwords, connection strings) that the caller reads back. <strong>Certificates</strong>: X.509 certificates with lifecycle management (issuance, renewal, contacts); creating one also creates an addressable key and a secret holding the full certificate with its private key when exportable.',
    tags: ['Key Vault']
  },
  {
    id: 'azure-az305-fc-78',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault soft delete: what is the retention range, and can it be changed or turned off?',
    hint: 'Decided once, at creation.',
    back: 'Soft delete is <strong>always on</strong> for vaults and keeps deleted vaults and objects recoverable for <strong>7 to 90 days</strong> (default 90). The retention period is chosen when the vault is created and cannot be changed afterwards. Soft delete alone still allows a privileged user to <strong>purge</strong> early; enabling <strong>purge protection</strong> blocks that until retention ends and cannot be undone.',
    tags: ['Key Vault', 'Soft delete']
  },
  {
    id: 'azure-az305-fc-79',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Management group limits: how many can a tenant have, and how deep can the tree go?',
    hint: 'Ten thousand, and six.',
    back: 'A directory supports up to <strong>10,000 management groups</strong>. The tree can be <strong>six levels deep</strong>, not counting the tenant root level or the subscription level. Every management group and subscription has exactly <strong>one parent</strong>, and everything sits under the single tenant root management group. Keep hierarchies shallow, typically three or four levels.',
    tags: ['Management groups', 'Limits']
  },
  {
    id: 'azure-az305-fc-80',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure tags: are they inherited, and what are the limits?',
    hint: 'Resources do not copy tags from their containers.',
    back: 'Tags are <strong>not inherited</strong> from subscriptions or resource groups by the resources inside them; use Azure Policy (Modify) to copy them, or Cost Management tag inheritance for cost data only. Each resource, resource group and subscription holds up to <strong>50</strong> tag name-value pairs. Tag names can be up to 512 characters (128 for storage accounts) and values up to 256. Names are case-insensitive, values are case-sensitive, and not every resource type supports tags.',
    tags: ['Tagging', 'Limits']
  },
  {
    id: 'azure-az305-fc-81',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does a subscription act as a boundary for?',
    hint: 'Money, scale and governance.',
    back: 'A subscription is a <strong>billing</strong> boundary (invoices and cost reports), a <strong>scale</strong> boundary (quotas and limits such as vCPU quotas and 4,000 role assignments apply per subscription), and a <strong>management</strong> boundary for RBAC and Azure Policy. Split workloads and environments into separate subscriptions when they need different policies, separate cost ownership, or would otherwise hit subscription limits.',
    tags: ['Subscriptions', 'Governance']
  },
  {
    id: 'azure-az305-fc-82',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Resource group rules: nesting, regions and deletion.',
    hint: 'One group per resource, no groups inside groups.',
    back: 'Every resource belongs to <strong>exactly one</strong> resource group, and groups <strong>cannot be nested</strong>. Resources in a group can live in <strong>different regions</strong> from the group; the group\'s own location only stores its metadata. Deleting a resource group deletes <strong>everything</strong> in it, so group resources that share a lifecycle and keep shared infrastructure in its own group.',
    tags: ['Resource groups']
  },
  {
    id: 'azure-az305-fc-83',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault permission model: why is Azure RBAC recommended over access policies?',
    hint: 'Who can grant data access to themselves?',
    back: 'With <strong>access policies</strong>, anyone with write access to the vault resource (for example Key Vault Contributor) can edit the policies and grant <strong>themselves</strong> data access, and permissions apply to every object of a type in the vault. <strong>Azure RBAC</strong> separates management from data access, supports assignments down to an <strong>individual secret, key or certificate</strong>, works with PIM for just-in-time access, and uses the same model as the rest of Azure.',
    tags: ['Key Vault', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-84',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Which built-in Key Vault data-plane role fits an app that reads secrets, a service using a CMK, and a security admin?',
    hint: 'User, Service Encryption User, Officer.',
    back: 'App reading secrets: <strong>Key Vault Secrets User</strong> (read values). Azure service using a customer-managed key: <strong>Key Vault Crypto Service Encryption User</strong> (get, wrap and unwrap). People managing secrets or keys: <strong>Key Vault Secrets Officer</strong> or <strong>Crypto Officer</strong>. <strong>Key Vault Administrator</strong> covers all data-plane operations. <strong>Key Vault Reader</strong> sees metadata only, and <strong>Key Vault Contributor</strong> manages the vault resource with no data access.',
    tags: ['Key Vault', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-85',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault network controls: firewall rules, private endpoints and the trusted services exception.',
    hint: 'Three layers of "who can even reach the vault".',
    back: 'The <strong>firewall</strong> limits the public endpoint to chosen IP ranges and virtual network subnets (service endpoints). A <strong>private endpoint</strong> gives the vault a private IP in your VNet, and public network access can then be disabled entirely. The <strong>Allow trusted Microsoft services</strong> exception lets listed Azure services, such as Azure Backup and services using customer-managed keys, reach the vault through the firewall. Network rules only decide reachability; RBAC still decides what a caller may do.',
    tags: ['Key Vault', 'Private endpoints', 'Network security']
  },
  {
    id: 'azure-az305-fc-86',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault certificate renewal: integrated CA vs non-integrated CA vs self-signed.',
    hint: 'Only some issuers let Key Vault finish the job alone.',
    back: 'With an <strong>integrated CA</strong> (DigiCert or GlobalSign), Key Vault requests, receives and <strong>auto-renews</strong> the certificate itself according to the lifetime action (renew at a percentage of lifetime or days before expiry). With a <strong>non-integrated CA</strong>, Key Vault creates the key and CSR, but you submit it to the CA and <strong>merge</strong> the signed certificate, so renewal needs a manual or scripted step; the lifetime action can email contacts. <strong>Self-signed</strong> certificates auto-renew but are not publicly trusted.',
    tags: ['Certificates', 'Key Vault']
  },
  {
    id: 'azure-az305-fc-87',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key rotation policy plus versionless key URIs: which services pick up a rotated key automatically?',
    hint: 'Leave the version off.',
    back: 'A <strong>rotation policy</strong> creates a new key version on a schedule (and can notify before expiry). Services that reference the key <strong>without a version</strong> move to the newest version on their own: <strong>Azure Storage</strong> customer-managed keys, <strong>Azure SQL TDE</strong> with automatic key rotation, and <strong>disk encryption sets</strong> with automatic key rotation enabled. A service pinned to a specific version keeps using the old one until you update it. Rotation policies apply to keys only, not secrets.',
    tags: ['Key rotation', 'Customer-managed keys']
  },
  {
    id: 'azure-az305-fc-88',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Key Vault Premium vs Managed HSM vs Dedicated HSM vs Payment HSM: which one when?',
    hint: 'Multitenant, single-tenant managed, bare appliance, payments.',
    back: '<strong>Key Vault Premium</strong>: HSM-protected keys in a multitenant HSM pool; the default for CMK. <strong>Managed HSM</strong>: fully managed <strong>single-tenant</strong> HSM pool, customer-held security domain, integrates with Azure services\' CMK features; for strict regulatory control. <strong>Dedicated HSM</strong>: single-tenant appliances you administer yourself, for lift-and-shift of HSM-dependent apps, with no Azure service CMK integration. <strong>Payment HSM</strong>: payment operations such as PIN processing for card issuers and processors.',
    tags: ['Managed HSM', 'HSM', 'Key management']
  },
  {
    id: 'azure-az305-fc-89',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How do you audit who read a Key Vault secret and detect suspicious access?',
    hint: 'One is a log category, the other a Defender plan.',
    back: 'Send the vault\'s <strong>AuditEvent</strong> resource logs through a <strong>diagnostic setting</strong> to Log Analytics (or Storage for retention); each operation is logged with the caller identity, IP address and result. Enable <strong>Microsoft Defender for Key Vault</strong> to get alerts on anomalous patterns, such as access from a suspicious IP or unusual volumes of secret reads. Azure Policy can require the diagnostic setting on every vault.',
    tags: ['Key Vault', 'Auditing', 'Defender for Cloud']
  },
  {
    id: 'azure-az305-fc-90',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Azure App Configuration vs Key Vault: which settings go where?',
    hint: 'Configuration and feature flags vs sensitive values.',
    back: '<strong>App Configuration</strong> holds non-secret settings and <strong>feature flags</strong>, with labels per environment, point-in-time snapshots and dynamic refresh. <strong>Key Vault</strong> holds secrets, keys and certificates with HSM options and fine-grained RBAC. Combine them: store a <strong>Key Vault reference</strong> in App Configuration so the app reads one configuration source, while the client resolves the secret from Key Vault with its own identity.',
    tags: ['App Configuration', 'Key Vault']
  },
  {
    id: 'azure-az305-fc-91',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does the Azure landing zone reference management group hierarchy look like?',
    hint: 'Platform, landing zones, and two special-purpose groups.',
    back: 'Under an <strong>intermediate root</strong> for the organisation: <strong>Platform</strong> (with Identity, Management and Connectivity subscriptions or groups for shared services), <strong>Landing zones</strong> split into <strong>Corp</strong> (private, hybrid-connected workloads) and <strong>Online</strong> (internet-facing workloads), <strong>Sandbox</strong> (isolated experimentation) and <strong>Decommissioned</strong> (subscriptions being retired). Policies are assigned by archetype, not by department.',
    tags: ['Management groups', 'Landing zones', 'Cloud Adoption Framework']
  },
  {
    id: 'azure-az305-fc-92',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What permissions are needed to move a subscription to another management group?',
    hint: 'Three places need write access.',
    back: 'You need write access on the <strong>subscription</strong> itself (role assignment and management group write, as Owner has), management group write on the <strong>target parent</strong> management group (Owner, Contributor or Management Group Contributor), and management group write on the <strong>current parent</strong>. If hierarchy protection is on, creating new groups additionally requires write permission at the root. Moving changes which policies and role assignments the subscription inherits immediately.',
    tags: ['Management groups', 'Subscriptions', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-93',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Which categories of tags does the Cloud Adoption Framework recommend?',
    hint: 'Five kinds of question a tag can answer.',
    back: '<strong>Functional</strong> (workload, application, tier, environment), <strong>classification</strong> (data sensitivity, criticality, SLA), <strong>accounting</strong> (cost centre, department, budget or project code), <strong>purpose</strong> (business process, revenue impact) and <strong>ownership</strong> (business owner, operations team). Pick a small mandatory set, define allowed values, and enforce it with Azure Policy rather than documentation.',
    tags: ['Tagging', 'Cloud Adoption Framework']
  },
  {
    id: 'azure-az305-fc-94',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Tag governance with Azure Policy: Deny vs Append vs Modify.',
    hint: 'Only one of them can fix resources that already exist.',
    back: '<strong>Deny</strong> rejects a create or update that lacks the required tag, forcing the deployer to supply it. <strong>Append</strong> adds fields during create or update but cannot change existing values or remediate existing resources. <strong>Modify</strong> can add, replace or remove tags, and with a managed identity and a <strong>remediation task</strong> it also fixes resources that already exist, which is why Microsoft recommends Modify for tag management.',
    tags: ['Tagging', 'Azure Policy']
  },
  {
    id: 'azure-az305-fc-95',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'An app gets HTTP 429 responses from Key Vault under load. What design changes fix it?',
    hint: 'Limits are per vault, and secrets rarely change.',
    back: 'Key Vault enforces transaction limits <strong>per vault per region</strong> over short windows and throttles with HTTP 429. Fixes: <strong>cache</strong> secrets in memory (Microsoft suggests at least eight hours) instead of reading on every request; use <strong>exponential backoff</strong> on retries; and <strong>split</strong> load across vaults, one per application per environment per region. Upgrading to Premium does not raise secret transaction limits.',
    tags: ['Key Vault', 'Throttling']
  },
  {
    id: 'azure-az305-fc-96',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What happens to a Key Vault during a regional outage?',
    hint: 'Readable is not the same as writable.',
    back: 'Vault contents are replicated within the region (across availability zones where available) and, in regions with a pair, to the <strong>paired region</strong>. If the primary region fails, requests fail over to the secondary in <strong>read-only</strong> mode: you can get secrets and use keys, but not create, update or delete objects. Regions without a pair rely on zone redundancy only. Workloads that must write secrets during an outage need their own vault in the recovery region.',
    tags: ['Key Vault', 'Disaster recovery']
  },
  {
    id: 'azure-az305-fc-97',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Managed disk encryption options: SSE with CMK, encryption at host, Azure Disk Encryption and confidential disk encryption.',
    hint: 'Where does encryption happen, and what does it cover?',
    back: '<strong>SSE with platform or customer-managed keys</strong> (via a disk encryption set) encrypts managed disks at rest in Storage. <strong>Encryption at host</strong> extends that to <strong>temp disks and caches</strong>, encrypting data on the VM host with no guest agent. <strong>Azure Disk Encryption</strong> uses BitLocker or dm-crypt inside the guest and is scheduled for retirement. <strong>Confidential disk encryption</strong> binds keys to the vTPM of confidential VM sizes only. Most designs combine SSE-CMK with encryption at host.',
    tags: ['Disk encryption', 'Customer-managed keys']
  },
  {
    id: 'azure-az305-fc-98',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'An ISV must encrypt Storage accounts in its own tenant with keys held in each customer\'s Key Vault. How?',
    hint: 'A multitenant app linked to a managed identity.',
    back: 'Use <strong>cross-tenant customer-managed keys</strong>. The ISV creates a <strong>multitenant app registration</strong> with a <strong>federated identity credential</strong> tied to a user-assigned managed identity in its tenant. Each customer creates a service principal for that app in their tenant and grants it Key Vault Crypto Service Encryption User on their key. The Storage account is configured with the customer\'s key URI and the app\'s client ID, so the customer can revoke access at any time.',
    tags: ['Customer-managed keys', 'Multitenant', 'Storage']
  },
  {
    id: 'azure-az305-fc-99',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Moving resources to another resource group or subscription: what breaks?',
    hint: 'The resource ID is part of the address.',
    back: 'The <strong>resource ID changes</strong>, so scripts, templates, alerts and dashboards that reference it must be updated. <strong>Role assignments made directly on the resource</strong> are not moved and must be re-created, while inherited access now comes from the new scope. Cross-subscription moves require the <strong>same Entra tenant</strong> and the resource provider registered in the target. Both source and target groups are locked for the duration, and not every resource type supports moving, so validate the move first.',
    tags: ['Resource groups', 'Subscriptions', 'Resource Manager']
  },
  {
    id: 'azure-az305-fc-100',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'With Azure Blueprints retired, what replaces it: template specs, deployment stacks, or both?',
    hint: 'One stores templates, the other manages what they deployed.',
    back: '<strong>Template specs</strong> store versioned ARM or Bicep templates as Azure resources that can be shared through RBAC. <strong>Deployment stacks</strong> deploy a template at resource group, subscription or management group scope and <strong>manage the resulting resources as a unit</strong>: <code>actionOnUnmanage</code> detaches or deletes resources dropped from the template, and <strong>deny settings</strong> (denyDelete, denyWriteAndDelete) protect them even from Owners. Pair them with Azure Policy for the policy part of the old blueprint.',
    tags: ['Deployment stacks', 'Template specs', 'Governance']
  }
];

export default AZURE_AZ305_FLASHCARDS_4;
