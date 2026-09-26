export const AZURE_AZ305_FLASHCARDS_2 = [
  {
    id: 'azure-az305-fc-26',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Password hash sync, pass-through authentication or federation: what decision rule picks the hybrid sign-in method?',
    hint: 'Start from the simplest and only move up when a requirement forces it.',
    back: 'Default to <strong>password hash synchronization</strong>: no on-premises sign-in dependency, survives a datacentre outage and enables leaked-credential detection. Move to <strong>pass-through authentication</strong> only when no hash may leave the premises or on-premises account state (logon hours, disabled, expired) must be enforced at the moment of sign-in. Keep <strong>federation (AD FS)</strong> only for what cloud authentication cannot do, such as a third-party MFA server or sign-in features that Entra ID has no equivalent for. PHS can be enabled alongside the other two as a backup.',
    tags: ['Hybrid identity', 'Authentication']
  },
  {
    id: 'azure-az305-fc-27',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Pass-through authentication agents: how many should you run, and what happens if every agent is down?',
    hint: 'There is no automatic fallback.',
    back: 'Run <strong>at least three</strong> agents on separate domain-joined servers; they make only outbound HTTPS connections, so no inbound firewall rules or perimeter servers are needed. If every agent is unreachable, <strong>cloud sign-ins fail</strong>. Password hash synchronization can be kept running as a backup, but switching the tenant to it is a manual change, not an automatic failover.',
    tags: ['Pass-through authentication', 'High availability']
  },
  {
    id: 'azure-az305-fc-28',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does Seamless SSO provide, and which devices still need it?',
    hint: 'Newer Windows devices already have a token that does the same job.',
    back: '<strong>Seamless SSO</strong> signs users on <strong>domain-joined</strong> devices inside the corporate network into Entra ID silently using Kerberos, via a computer account (AZUREADSSOACC) created in AD. It works with <strong>password hash sync and pass-through authentication</strong>, not with federation. Devices that are Entra joined or hybrid joined get SSO from the <strong>Primary Refresh Token</strong> instead, so Seamless SSO mainly matters for domain-joined machines that are not hybrid joined. Roll its Kerberos key regularly.',
    tags: ['Seamless SSO', 'Hybrid identity']
  },
  {
    id: 'azure-az305-fc-29',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'System-assigned vs user-assigned managed identity: how do their lifecycles differ?',
    hint: 'Which one outlives the resource?',
    back: '<strong>System-assigned</strong>: created on one resource, tied 1:1 to it and deleted with it; good for a single resource whose identity should not outlive it. <strong>User-assigned</strong>: a standalone Azure resource you create first, attach to <strong>many</strong> resources, and delete separately; good when resources are rebuilt often, when several resources need identical access, or when role assignments must be approved before the resource exists.',
    tags: ['Managed identities']
  },
  {
    id: 'azure-az305-fc-30',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'How does code on an Azure VM actually get a token for its managed identity?',
    hint: 'A link-local address that never leaves the host.',
    back: 'The code calls the <strong>Instance Metadata Service</strong> at <code>http://169.254.169.254/metadata/identity/oauth2/token</code> with the target resource (for example <code>https://vault.azure.net</code>); no credential is ever handled by the code. App Service and Functions expose the same capability through the <code>IDENTITY_ENDPOINT</code> environment variable. The Azure Identity SDKs wrap both behind <code>DefaultAzureCredential</code> / <code>ManagedIdentityCredential</code>. Tokens are cached, so a new role assignment can take a while to take effect.',
    tags: ['Managed identities', 'IMDS']
  },
  {
    id: 'azure-az305-fc-31',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Workload identity federation: how does an external workload get an Entra token without a secret, and what are the matching rules?',
    hint: 'Issuer, subject, audience.',
    back: 'You add a <strong>federated identity credential</strong> to an app registration or a user-assigned managed identity naming a trusted external <strong>issuer</strong> (GitHub Actions, Kubernetes service account issuer, Google Cloud, AWS, another OIDC provider), the <strong>subject</strong> (for example <code>repo:org/app:environment:prod</code>) and the audience. The workload presents its own short-lived OIDC token and exchanges it for an Entra access token. The subject must match <strong>exactly</strong>, so each branch or environment needs its own credential, and an app or identity holds at most <strong>20</strong> federated credentials.',
    tags: ['Workload identity federation']
  },
  {
    id: 'azure-az305-fc-32',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'App registration vs enterprise application: what is the difference between the application object and the service principal?',
    hint: 'One is the blueprint, the others are the instances.',
    back: 'The <strong>application object</strong> (App registrations) lives only in the app\'s home tenant and is the global definition: redirect URIs, credentials, requested permissions. A <strong>service principal</strong> (Enterprise applications) is the local instance in <strong>each tenant</strong> where the app is used; role assignments, consent grants, user assignment and Conditional Access target the service principal. A multitenant app has one application object and one service principal per consenting tenant. Managed identities are service principals with no application object you manage.',
    tags: ['App registration', 'Service principals']
  },
  {
    id: 'azure-az305-fc-33',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Delegated permissions vs application permissions in Microsoft Graph: which one fits a daemon?',
    hint: 'Is anyone signed in?',
    back: '<strong>Delegated</strong> permissions act <strong>on behalf of a signed-in user</strong>: the app can do only what both the permission and that user allow, and users or admins consent. <strong>Application</strong> permissions let the app act <strong>as itself</strong> with no user present, across the whole tenant for that permission, and always need <strong>admin consent</strong>. A background daemon uses application permissions with the client credentials flow.',
    tags: ['Microsoft Graph', 'Permissions']
  },
  {
    id: 'azure-az305-fc-34',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Which OAuth 2.0 flow fits each case: web app with users, SPA, daemon, middle-tier API, smart TV?',
    hint: 'Two of the old flows are now discouraged.',
    back: '<strong>Authorization code with PKCE</strong>: web apps, SPAs and mobile/desktop apps with a user. <strong>Client credentials</strong>: daemons and services with no user. <strong>On-behalf-of</strong>: an API that received a user token and must call a downstream API as that user. <strong>Device code</strong>: input-constrained devices where the user signs in on another screen. The <strong>implicit</strong> flow and <strong>resource owner password credentials</strong> are discouraged; ROPC handles passwords directly and breaks with MFA.',
    tags: ['OAuth 2.0', 'Identity platform']
  },
  {
    id: 'azure-az305-fc-35',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Security defaults vs Conditional Access: when must you switch?',
    hint: 'One is free and fixed, the other is licensed and flexible.',
    back: '<strong>Security defaults</strong> are free and on by default in new tenants: every user registers for MFA, legacy authentication is blocked and privileged actions are challenged, but nothing can be scoped or excluded. <strong>Conditional Access</strong> (Entra ID P1) is needed as soon as you need exclusions, named locations, app-specific rules, device compliance or authentication strengths. The two are mutually exclusive: turn security defaults off when you enable Conditional Access policies.',
    tags: ['Security defaults', 'Conditional Access']
  },
  {
    id: 'azure-az305-fc-36',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What does report-only mode do for a new Conditional Access policy?',
    hint: 'Evaluate everything, enforce nothing.',
    back: 'A <strong>report-only</strong> policy is evaluated at every sign-in and the result it <strong>would</strong> have produced (success, failure, user action required) is written to the sign-in logs, but nothing is enforced. Use it to measure the impact of a block or MFA policy before turning it on; the Conditional Access insights and reporting workbook summarises the results when sign-in logs are sent to Log Analytics.',
    tags: ['Conditional Access']
  },
  {
    id: 'azure-az305-fc-37',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'What are the three built-in Conditional Access authentication strengths?',
    hint: 'Each one is a stricter subset of the one before.',
    back: '<strong>Multifactor authentication strength</strong>: any MFA combination, including password plus SMS or push. <strong>Passwordless MFA strength</strong>: methods with no password, such as Authenticator passwordless sign-in, Windows Hello for Business, FIDO2 and passkeys, and multifactor CBA. <strong>Phishing-resistant MFA strength</strong>: only origin-bound methods, namely FIDO2 security keys and passkeys, Windows Hello for Business and multifactor certificate-based authentication. You can also build custom strengths and require them in a grant control.',
    tags: ['Authentication strengths', 'Conditional Access']
  },
  {
    id: 'azure-az305-fc-38',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Temporary Access Pass: how long can it last and what is it for?',
    hint: 'Bootstrap and recovery.',
    back: 'A <strong>Temporary Access Pass</strong> is an admin-issued, time-limited passcode that counts as strong authentication. Lifetime is configurable from <strong>10 minutes to 30 days</strong> (default one hour), and it can be set to <strong>one-time use</strong>. It lets a user with no usable credential sign in to register a passwordless method or passkey: new-hire onboarding, and recovery when someone loses their only authenticator.',
    tags: ['Temporary Access Pass', 'Passwordless']
  },
  {
    id: 'azure-az305-fc-39',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Continuous access evaluation: which events revoke a token early, and why does token lifetime go up?',
    hint: 'The resource listens, so the token can live longer.',
    back: 'CAE-capable services (Exchange Online, SharePoint Online, Teams, Microsoft Graph) subscribe to <strong>critical events</strong>: user deleted or disabled, password changed or reset, MFA enabled for the user, an admin revoking all refresh tokens, and high user risk from ID Protection. They reject the existing token almost immediately. With <strong>strict location enforcement</strong> they also re-check IP-based Conditional Access on each request. Because revocation no longer depends on expiry, CAE clients receive long-lived tokens (up to <strong>28 hours</strong>), lowering token traffic.',
    tags: ['Continuous access evaluation', 'Tokens']
  },
  {
    id: 'azure-az305-fc-40',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Conditional Access session controls: sign-in frequency vs persistent browser session.',
    hint: 'One controls reauthentication, the other controls the "Stay signed in" cookie.',
    back: '<strong>Sign-in frequency</strong> sets how long before a user must reauthenticate for the targeted apps (default rolling 90 days); use it for shared devices or sensitive apps. It does not revoke tokens early. <strong>Persistent browser session</strong> decides whether the browser session survives closing the browser; set it to <em>Never persistent</em> for unmanaged devices. Persistent browser session only works when the policy targets <strong>all cloud apps</strong>.',
    tags: ['Conditional Access', 'Session controls']
  },
  {
    id: 'azure-az305-fc-41',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'B2B collaboration vs B2B direct connect vs an External ID external tenant: which serves which audience?',
    hint: 'Guests, shared channels, consumers.',
    back: '<strong>B2B collaboration</strong>: partners sign in with their own identity and appear as <strong>guest objects</strong> in your workforce tenant; works for any app you can assign. <strong>B2B direct connect</strong>: a mutual trust with another Entra tenant with <strong>no guest object</strong>, currently only for <strong>Teams shared channels</strong>. <strong>External tenant</strong> (External ID for customers): a separate tenant for <strong>consumer or customer-facing apps</strong> with self-service sign-up, social providers and branding, replacing Azure AD B2C for new customers.',
    tags: ['External identities']
  },
  {
    id: 'azure-az305-fc-42',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'External collaboration settings: which three controls govern guests in a workforce tenant?',
    hint: 'Who invites, what guests see, which domains.',
    back: '<strong>Guest invite restrictions</strong>: from anyone including guests, down to only admins and users with the Guest Inviter role, or no one. <strong>Guest user access</strong>: same as members, limited (the default: guests read only limited properties and memberships of directory objects), or most restrictive (guests see only their own objects). <strong>Collaboration restrictions</strong>: an allow list or deny list of partner domains. Cross-tenant access settings add finer inbound and outbound rules per Entra organisation.',
    tags: ['External identities', 'B2B collaboration']
  },
  {
    id: 'azure-az305-fc-43',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Entra Connect source anchor: what links an AD user to an existing cloud user, and what is soft match vs hard match?',
    hint: 'ImmutableId.',
    back: 'The <strong>source anchor</strong> (by default <code>ms-DS-ConsistencyGuid</code>, seeded from objectGUID) is stamped on the cloud user as <strong>ImmutableId</strong> and permanently links the two. When sync meets a cloud-only user with no anchor, <strong>soft match</strong> joins them on primary SMTP address (proxyAddresses) or userPrincipalName. <strong>Hard match</strong> is forced by setting the cloud user\'s ImmutableId to the base64 of the AD anchor. Use ms-DS-ConsistencyGuid rather than objectGUID so a user moved between forests keeps the same anchor.',
    tags: ['Entra Connect', 'Hybrid identity']
  },
  {
    id: 'azure-az305-fc-44',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Cross-tenant synchronization vs a multitenant organization: what does each add?',
    hint: 'One is a provisioning engine, the other a collaboration experience built on it.',
    back: '<strong>Cross-tenant synchronization</strong> is a provisioning job configured in the <strong>source</strong> tenant that pushes users into a target tenant as B2B users (guest or member), updating and removing them automatically; each direction is its own configuration. A <strong>multitenant organization</strong> groups up to <strong>100</strong> tenants you own and uses cross-tenant sync underneath to deliver a unified people experience in Microsoft 365, such as collaborating in new Teams and people search across the tenants.',
    tags: ['Cross-tenant synchronization', 'Multitenant']
  },
  {
    id: 'azure-az305-fc-45',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Microsoft Entra Password Protection on premises: what are the components and how do you roll it out safely?',
    hint: 'Domain controllers never need internet access.',
    back: 'A <strong>DC agent</strong> on each domain controller checks every password change against the global banned list plus your <strong>custom banned list</strong> (up to 1,000 terms), and a <strong>proxy service</strong> on member servers fetches policy from Entra ID, so DCs need no internet access. Deploy in <strong>audit mode</strong> first to see which passwords would be rejected, then switch to <strong>enforced</strong>. Existing passwords are not rechecked until they are next changed.',
    tags: ['Password Protection', 'Hybrid identity']
  },
  {
    id: 'azure-az305-fc-46',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Smart lockout in a hybrid tenant: how must its settings relate to the AD account lockout policy?',
    hint: 'Entra ID should lock first and for longer.',
    back: 'Smart lockout locks out an attacker after a threshold of failed attempts (default <strong>10</strong>, first lockout 60 seconds, growing with repeats), keeps separate counts for familiar and unfamiliar locations, and ignores repeats of the same bad password. With pass-through authentication, set the <strong>Entra threshold lower</strong> than the AD threshold and the <strong>Entra lockout duration longer</strong> than AD\'s, so guessing is stopped in the cloud before on-premises accounts get locked. Customising the values needs Entra ID P1.',
    tags: ['Smart lockout', 'Hybrid identity']
  },
  {
    id: 'azure-az305-fc-47',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Self-service password reset for administrators: what is different from ordinary users?',
    hint: 'You cannot relax it.',
    back: 'Accounts holding Entra administrator roles always get the <strong>two-gate policy</strong>: SSPR is enabled for them regardless of your settings, they must use <strong>two</strong> authentication methods, and <strong>security questions are not allowed</strong>. Your SSPR configuration (number of methods, available methods, target groups) applies to non-admin users. For hybrid users, password writeback is what carries a reset back to on-premises AD.',
    tags: ['SSPR', 'Administrators']
  },
  {
    id: 'azure-az305-fc-48',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Administrative units vs management groups: which one scopes an Entra role?',
    hint: 'Directory objects vs Azure resources.',
    back: '<strong>Administrative units</strong> are containers of Entra directory objects (users, groups, devices) that restrict an <strong>Entra role</strong>, such as Helpdesk or Authentication Administrator, to that subset; membership can be static or dynamic, and restricted management AUs even keep tenant admins out. <strong>Management groups</strong> organise Azure <strong>subscriptions</strong> for Azure RBAC and Azure Policy inheritance and have nothing to do with users.',
    tags: ['Administrative units', 'Entra roles']
  },
  {
    id: 'azure-az305-fc-49',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Entra roles vs Azure RBAC roles: what does each control, and where do they meet?',
    hint: 'Directory vs subscriptions.',
    back: '<strong>Entra roles</strong> (Global Administrator, User Administrator and so on) manage directory objects and Microsoft 365 services and are scoped to the tenant or an administrative unit. <strong>Azure RBAC roles</strong> (Owner, Contributor, Reader) manage Azure resources and are scoped to management groups, subscriptions, resource groups or resources. They are separate systems; the one bridge is that a Global Administrator can <strong>elevate access</strong> to User Access Administrator at root scope over all subscriptions.',
    tags: ['Entra roles', 'Azure RBAC']
  },
  {
    id: 'azure-az305-fc-50',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd1',
    front: 'Entra registered vs Entra joined vs Entra hybrid joined: which device identity fits which device?',
    hint: 'Who owns the device, and is there an on-premises domain?',
    back: '<strong>Entra registered</strong>: personal (BYOD) devices; the user signs in with a personal account and adds a work account. <strong>Entra joined</strong>: organisation-owned devices signed in with Entra accounts and no AD domain join; the cloud-first target for new Windows devices. <strong>Entra hybrid joined</strong>: devices joined to on-premises AD and also registered in Entra ID, typically via Entra Connect; used while Group Policy or AD-dependent apps remain. All three can be used as device conditions in Conditional Access.',
    tags: ['Device identity', 'Conditional Access']
  }
];

export default AZURE_AZ305_FLASHCARDS_2;
