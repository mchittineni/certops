export const AZURE_AZ204_FLASHCARDS_6 = [
  {
    id: "azure-az204-fc-126",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Purge Protection",
    hint: "Preventing irreversible key deletion.",
    back: "<strong>Purge Protection</strong> enforces that soft-deleted secrets and keys cannot be permanently destroyed by anyone until the retention duration expires, preventing ransomware destruction.",
    tags: ["Key Vault", "Purge Protection", "Compliance"]
  },
  {
    id: "azure-az204-fc-127",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Configuration: Feature Management",
    hint: "Dynamic feature toggling and canary rollout.",
    back: "Azure App Configuration supports <strong>Feature Flags</strong> with <strong>Targeting Filters</strong> (e.g. percentage rollout) to toggle features dynamically at runtime.",
    tags: ["App Configuration", "Feature Flags", "Targeting Filters"]
  },
  {
    id: "azure-az204-fc-128",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Configuration: Sentinel Key Refresh",
    hint: "Zero-downtime configuration updates.",
    back: "A <strong>Sentinel Key</strong> is incremented when settings change; the SDK detects the change on a timer and reloads all registered configuration keys without app restarts.",
    tags: ["App Configuration", "Dynamic Refresh", "Sentinel Key"]
  },
  {
    id: "azure-az204-fc-129",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage: User Delegation SAS",
    hint: "Entra ID-backed signed URLs.",
    back: "A <strong>User Delegation SAS</strong> is signed with Microsoft Entra ID credentials instead of account keys, providing superior security and centralized identity auditing.",
    tags: ["Storage", "SAS", "User Delegation SAS"]
  },
  {
    id: "azure-az204-fc-130",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage: Stored Access Policies",
    hint: "Instant revocation for Service SAS.",
    back: "Associating a Service SAS with a <strong>Stored Access Policy</strong> on the container allows instant revocation by deleting or updating the policy on the container.",
    tags: ["Storage", "SAS", "Stored Access Policy"]
  },
  {
    id: "azure-az204-fc-131",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage SAS: spr Parameter",
    hint: "Enforcing HTTPS in SAS tokens.",
    back: "Setting <strong>spr=https</strong> in a SAS token restricts requests strictly to HTTPS, blocking unencrypted HTTP connections.",
    tags: ["Storage", "SAS", "HTTPS"]
  },
  {
    id: "azure-az204-fc-132",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage: Key 1 & Key 2 Rotation",
    hint: "Zero-downtime credential renewal.",
    back: "Rotate storage keys with zero downtime by switching apps to <strong>Key 2</strong>, regenerating <strong>Key 1</strong>, switching apps to the new Key 1, and regenerating Key 2.",
    tags: ["Storage", "Key Rotation", "Zero Downtime"]
  },
  {
    id: "azure-az204-fc-133",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Microsoft Graph: User.Read",
    hint: "Least privilege user profile access.",
    back: "<strong>User.Read</strong> is the minimal least-privilege permission required to sign in a user and display their profile information.",
    tags: ["Microsoft Graph", "Permissions", "Least Privilege"]
  },
  {
    id: "azure-az204-fc-134",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Workload Identity Federation",
    hint: "Secret-less CI/CD deployments.",
    back: "<strong>Workload Identity Federation</strong> exchanges GitHub OIDC tokens for short-lived Entra ID access tokens, eliminating stored client secrets in CI/CD.",
    tags: ["Microsoft Entra ID", "Workload Identity", "GitHub Actions"]
  },
  {
    id: "azure-az204-fc-135",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Azure RBAC: Owner vs. Contributor",
    hint: "Resource management vs access delegation.",
    back: "<strong>Contributor</strong> grants full resource creation and management rights without the ability to assign roles. <strong>Owner</strong> includes full role assignment permissions.",
    tags: ["Azure RBAC", "Contributor", "Permissions"]
  },
  {
    id: "azure-az204-fc-136",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Configuration: Key Vault References",
    hint: "Unified configuration with secret references.",
    back: "App Configuration stores <strong>Key Vault references</strong> pointing to secret URIs, allowing client SDKs to resolve secrets seamlessly via Managed Identity.",
    tags: ["App Configuration", "Key Vault", "References"]
  },
  {
    id: "azure-az204-fc-137",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage SAS: sip Parameter",
    hint: "Restricting SAS usage by client IP.",
    back: "Setting <strong>sip=IP_ADDRESS</strong> in a SAS token restricts execution strictly to requests originating from that specific public IP address or CIDR block.",
    tags: ["Storage", "SAS", "sip Parameter"]
  },
  {
    id: "azure-az204-fc-138",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Redirect URIs",
    hint: "Whitelisting post-login destination URLs.",
    back: "<strong>Redirect URIs</strong> in App Registrations define exact destination URLs authorized to receive tokens and authorization codes following successful logins.",
    tags: ["Microsoft Entra ID", "Redirect URI", "Authentication"]
  },
  {
    id: "azure-az204-fc-139",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "MSAL: Distributed Token Caching",
    hint: "Sharing token caches across web farms.",
    back: "Configuring <strong>distributed token cache serialization</strong> (backed by Redis or SQL) allows multi-instance web apps to share MSAL tokens efficiently.",
    tags: ["MSAL", "Token Cache", "Distributed Caching"]
  },
  {
    id: "azure-az204-fc-140",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Integrated Certificate Authorities",
    hint: "Automated zero-touch certificate renewal.",
    back: "Configuring <strong>Integrated Certificate Authorities</strong> (DigiCert/GlobalSign) allows Key Vault to order, bind, and renew SSL certificates automatically.",
    tags: ["Key Vault", "Certificates", "Auto-Renewal"]
  },
  {
    id: "azure-az204-fc-141",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: Conditional Access Policies",
    hint: "Context-based adaptive security guardrails.",
    back: "<strong>Conditional Access Policies</strong> evaluate signals (location, role, resource) to enforce step-up controls like <strong>MFA</strong> when accessing sensitive resources.",
    tags: ["Microsoft Entra ID", "Conditional Access", "MFA"]
  },
  {
    id: "azure-az204-fc-142",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: Managed HSM",
    hint: "FIPS 140-2 Level 3 hardware security.",
    back: "<strong>Managed HSM</strong> provides single-tenant, FIPS 140-2 Level 3 validated hardware modules for enterprises requiring strict cryptographic isolation.",
    tags: ["Key Vault", "Managed HSM", "Compliance"]
  },
  {
    id: "azure-az204-fc-143",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Configuration: Snapshots",
    hint: "Immutable configuration release baselines.",
    back: "<strong>App Configuration Snapshots</strong> freeze configuration state into immutable point-in-time copies for consistent, repeatable deployments.",
    tags: ["App Configuration", "Snapshots", "Immutability"]
  },
  {
    id: "azure-az204-fc-144",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Entra ID: App Roles & JWT Claims",
    hint: "Role-based authorization via token claims.",
    back: "Define roles in the <strong>appRoles</strong> manifest; Microsoft Entra ID injects assigned roles into the <strong>roles</strong> claim of the issued JWT token.",
    tags: ["Microsoft Entra ID", "App Roles", "JWT Claims"]
  },
  {
    id: "azure-az204-fc-145",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "JWT: Token Validation Checklist",
    hint: "Signature, audience, issuer, and expiration.",
    back: "Validating an Entra JWT requires verifying the <strong>cryptographic signature</strong>, checking <strong>expiration (exp)</strong>, validating the <strong>audience (aud)</strong>, and confirming the <strong>issuer (iss)</strong>.",
    tags: ["JWT", "Token Validation", "Security"]
  },
  {
    id: "azure-az204-fc-146",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Azure.Identity: DeviceCodeCredential",
    hint: "Authenticating headless terminals.",
    back: "<strong>DeviceCodeCredential</strong> allows interactive user logins on browser-less systems by generating a short code for users to verify on a separate device.",
    tags: ["Azure.Identity", "DeviceCodeCredential", "CLI"]
  },
  {
    id: "azure-az204-fc-147",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "OAuth 2.0: On-Behalf-Of (OBO) Flow",
    hint: "Propagating user identity downstream.",
    back: "The <strong>On-Behalf-Of (OBO) flow</strong> allows middle-tier APIs to exchange a caller's user token for a downstream API token without losing user context.",
    tags: ["OAuth", "OBO Flow", "Microservices"]
  },
  {
    id: "azure-az204-fc-148",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Key Vault: BackupKey & RestoreKey",
    hint: "Encrypted key backups.",
    back: "<strong>BackupKey</strong> exports an encrypted binary blob of a key that can only be restored inside Azure Key Vault, protecting key material from external exposure.",
    tags: ["Key Vault", "BackupKey", "Disaster Recovery"]
  },
  {
    id: "azure-az204-fc-149",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    front: "App Configuration: Labels",
    hint: "Distinguishing environment-specific settings.",
    back: "<strong>Labels</strong> categorize keys by environment (e.g. <code>dev</code>, <code>prod</code>), allowing apps to query only their designated configuration slice.",
    tags: ["App Configuration", "Labels", "Environments"]
  },
  {
    id: "azure-az204-fc-150",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    front: "Storage: Dynamic Policy Updates",
    hint: "Inherited policy changes.",
    back: "Modifying a <strong>Stored Access Policy</strong> instantly updates permissions and expirations for all active Service SAS tokens referencing that policy.",
    tags: ["Storage", "SAS", "Stored Access Policy"]
  }
];

export default AZURE_AZ204_FLASHCARDS_6;
