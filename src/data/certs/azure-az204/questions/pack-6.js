export const AZURE_AZ204_QUESTIONS_6 = [
  {
    id: "azure-az204-126",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Key Vault Soft Delete and Purge Protection",
    scenario: "A healthcare application stores cryptographic keys in Azure Key Vault. The compliance mandate dictates that no key can be permanently deleted or purged before 90 days, even by global administrators.",
    question: "Which Key Vault feature prevents premature permanent destruction of deleted vaults and keys?",
    options: [
      { id: 'A', text: "Purge Protection" },
      { id: 'B', text: "Soft Delete alone (without Purge Protection)" },
      { id: 'C', text: "Diagnostic Logging" },
      { id: 'D', text: "Vault Access Policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Key Vault `Soft Delete` is enabled by default (retaining deleted vaults and objects for 7 to 90 days). Enabling `Purge Protection` ensures that soft-deleted items cannot be permanently deleted (purged) by anyone until the retention period completely elapses.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#purge-protection",
    tags: ["Key Vault", "Purge Protection", "Compliance"]
  },
  {
    id: "azure-az204-127",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Flags and Targeting Filters",
    scenario: "A retail product team wants to release a new checkout UI in production to only 20% of users initially, gradually ramping up to 100%.",
    question: "Which feature in Azure App Configuration facilitates percentage-based gradual rollout?",
    options: [
      { id: 'A', text: "Feature Management with a Percentage Targeting Filter" },
      { id: 'B', text: "Storage Account Access Keys" },
      { id: 'C', text: "Key Vault Secret versioning" },
      { id: 'D', text: "Azure Logic Apps trigger" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure App Configuration Feature Management allows developers to define feature flags with targeting filters (such as `PercentageFilter` or `TargetingFilter` evaluating user groups), enabling gradual canary rollouts without redeploying application binaries.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-targetingfilter",
    tags: ["App Configuration", "Feature Flags", "Targeting Filters"]
  },
  {
    id: "azure-az204-128",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Dynamic Configuration Refresh",
    scenario: "A microservice connects to Azure App Configuration. When an administrator updates an application setting in the portal, the microservice must update its in-memory settings without restarting.",
    question: "Which pattern in the Azure App Configuration SDK detects changes dynamically using a sentinel key?",
    options: [
      { id: 'A', text: "Registering a Sentinel Key with a cache expiration interval (e.g. SetCacheExpiration) in the configuration provider" },
      { id: 'B', text: "Polling every key in App Configuration on every HTTP request" },
      { id: 'C', text: "Restarting the App Service Plan every 5 minutes" },
      { id: 'D', text: "Storing settings in local text files" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Azure App Configuration, dynamic refresh monitors a designated `Sentinel Key` (e.g. `App:Settings:Sentinel`). When any setting is updated, administrators increment the sentinel key. The application refreshes all settings when it detects the sentinel has changed, minimizing API call overhead.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/enable-dynamic-configuration-dotnet-core",
    tags: ["App Configuration", "Dynamic Refresh", "Sentinel Key"]
  },
  {
    id: "azure-az204-129",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signatures (SAS): Account SAS vs Service SAS vs User Delegation SAS",
    scenario: "A web app allows users to download private reports from Azure Blob Storage. Security policy mandates that SAS tokens must be signed using Microsoft Entra ID credentials rather than the storage account root access key.",
    question: "Which SAS type satisfies this security requirement?",
    options: [
      { id: 'A', text: "User Delegation SAS" },
      { id: 'B', text: "Ad-hoc SAS signed with Key 1" },
      { id: 'C', text: "Service SAS" },
      { id: 'D', text: "Account SAS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `User Delegation SAS` is secured using Microsoft Entra ID (Azure AD) credentials rather than the storage account shared keys. If the storage account access keys are compromised or rotated, User Delegation SAS tokens are unaffected, and user permissions are governed by Entra RBAC.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-user-delegation-sas-create",
    tags: ["Storage", "SAS", "User Delegation SAS"]
  },
  {
    id: "azure-az204-130",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Stored Access Policies for Revocable Service SAS",
    scenario: "A company generates Service SAS tokens for partner clients to upload data to a specific blob container for 30 days. If a partner relationship terminates early, the SAS token must be revoked immediately.",
    question: "Which storage configuration enables instant revocation of a Service SAS before its expiration timestamp?",
    options: [
      { id: 'A', text: "Associating the Service SAS with a Stored Access Policy on the container" },
      { id: 'B', text: "Deleting the storage account" },
      { id: 'C', text: "Service SAS tokens cannot be revoked early" },
      { id: 'D', text: "Rotating the entire Azure subscription root password" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Stored Access Policy` defined on a container groups access constraints and can be referenced by multiple Service SAS tokens. To instantly revoke access, an administrator simply deletes or modifies the stored access policy on the container.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-stored-access-policy-manage",
    tags: ["Storage", "SAS", "Stored Access Policy"]
  },
  {
    id: "azure-az204-131",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "SAS Token Parameters: signed protocol (spr=https)",
    scenario: "A developer creates a Shared Access Signature (SAS) token for an Azure Blob. Security governance mandates that the SAS token can only be used over encrypted TLS/HTTPS connections.",
    question: "Which query parameter in the SAS URI restricts communication exclusively to HTTPS?",
    options: [
      { id: 'A', text: "sip=443" },
      { id: 'B', text: "se=ssl" },
      { id: 'C', text: "spr=https" },
      { id: 'D', text: "sp=https" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `spr` parameter (signed protocol) in a SAS URI specifies the protocol permitted for a request. Setting `spr=https` permits requests using HTTPS only, rejecting unencrypted HTTP traffic.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas#specify-the-signed-protocol",
    tags: ["Storage", "SAS", "HTTPS"]
  },
  {
    id: "azure-az204-132",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Storage Account Access Key Zero-Downtime Rotation",
    scenario: "An administrator needs to rotate the access keys for an Azure Storage account. Production applications currently connect using Key 1.",
    question: "Which rotation sequence guarantees zero application downtime?",
    options: [
      { id: 'A', text: "Update applications to use Key 2, regenerate Key 1, update applications back to Key 1, and regenerate Key 2" },
      { id: 'B', text: "Regenerate Key 1 and Key 2 simultaneously in the portal" },
      { id: 'C', text: "Delete Key 1 and recreate the storage account" },
      { id: 'D', text: "Disable Shared Key access before rotating" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Storage accounts provide two access keys (Key 1 and Key 2) to enable zero-downtime rotation. Applications switch to the secondary key before regenerating the primary key, ensuring connections never drop.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage#rotate-access-keys",
    tags: ["Storage", "Key Rotation", "Zero Downtime"]
  },
  {
    id: "azure-az204-133",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Graph API User.Read vs Directory.Read.All",
    scenario: "A web app needs to display only the currently signed-in user's profile photo and display name from Microsoft Graph.",
    question: "Which least-privilege delegated permission should the application request?",
    options: [
      { id: 'A', text: "User.Read" },
      { id: 'B', text: "RoleManagement.Read.Directory" },
      { id: 'C', text: "Directory.Read.All" },
      { id: 'D', text: "User.ReadWrite.All" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`User.Read` is the minimum least-privilege delegated permission that allows a user to sign in to the app and permits the app to read the signed-in user's basic profile (name, photo, email). `Directory.Read.All` grants broad access across all tenant objects.",
    referenceUrl: "https://learn.microsoft.com/en-us/graph/permissions-reference#user-permissions",
    tags: ["Microsoft Graph", "Permissions", "Least Privilege"]
  },
  {
    id: "azure-az204-134",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Workload Identity Federation for GitHub Actions",
    scenario: "A DevOps engineer builds a GitHub Actions deployment workflow deploying to Azure. The security team forbids storing long-term Azure client secrets in GitHub repository secrets.",
    question: "Which authentication feature allows GitHub Actions to obtain short-lived Microsoft Entra access tokens using OpenID Connect (OIDC)?",
    options: [
      { id: 'A', text: "Storing the Subscription Admin password in GitHub secrets" },
      { id: 'B', text: "Azure App Service deployment credentials" },
      { id: 'C', text: "Workload Identity Federation" },
      { id: 'D', text: "Azure Key Vault Public Secrets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Workload Identity Federation allows external workloads (like GitHub Actions workflows) to exchange an OpenID Connect (OIDC) token from GitHub for a short-lived Microsoft Entra access token, eliminating the need to store long-term client secrets in GitHub.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation",
    tags: ["Microsoft Entra ID", "Workload Identity", "GitHub Actions"]
  },
  {
    id: "azure-az204-135",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure RBAC Built-In Roles: Owner vs Contributor vs Reader",
    scenario: "A developer needs permission to deploy code and manage App Services and Cosmos DB containers in a resource group, but must not be allowed to grant permissions to other users.",
    question: "Which Azure built-in RBAC role should be assigned to the developer?",
    options: [
      { id: 'A', text: "Reader" },
      { id: 'B', text: "Owner" },
      { id: 'C', text: "Contributor" },
      { id: 'D', text: "User Access Administrator" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Contributor` role grants full management permissions on all Azure resources within the scope, but does not allow granting or delegating access permissions to others. The `Owner` role includes Contributor privileges plus user access administration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles",
    tags: ["Azure RBAC", "Contributor", "Permissions"]
  },
  {
    id: "azure-az204-136",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Key-Vault References Syntax",
    scenario: "A developer stores non-sensitive settings directly in Azure App Configuration, but needs to reference a sensitive database password stored in Azure Key Vault.",
    question: "How are Key Vault secrets linked inside Azure App Configuration?",
    options: [
      { id: 'A', text: "Store the Key Vault root password in App Configuration" },
      { id: 'B', text: "Copy the secret text directly into the App Configuration value" },
      { id: 'C', text: "Create a Key Vault Reference key in App Configuration specifying the Key Vault Secret URI" },
      { id: 'D', text: "Key Vault cannot be linked to App Configuration" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure App Configuration supports `Key Vault references`. App Configuration stores the URI of the secret (with content type `application/vnd.microsoft.appconfig.keyvaultref+json;charset=utf-8`). The client SDK resolves the URI and fetches the secret from Key Vault transparently using Managed Identity.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
    tags: ["App Configuration", "Key Vault", "References"]
  },
  {
    id: "azure-az204-137",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "SAS Token IP Address Restriction (sip Parameter)",
    scenario: "A security policy mandates that a Shared Access Signature (SAS) token for uploading telemetry files can only be used from a specific client office public IP address (`198.51.100.45`).",
    question: "Which SAS query parameter restricts caller access to a specific IP address or CIDR range?",
    options: [
      { id: 'A', text: "sp=198.51.100.45" },
      { id: 'B', text: "se=198.51.100.45" },
      { id: 'C', text: "sip=198.51.100.45" },
      { id: 'D', text: "spr=198.51.100.45" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `sip` parameter (signed IP) in a SAS URI specifies an IP address or range of IP addresses from which requests are accepted. Requests originating from any other IP address fail with an HTTP 403 Forbidden.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas#specify-the-ip-address-or-ip-range",
    tags: ["Storage", "SAS", "sip Parameter"]
  },
  {
    id: "azure-az204-138",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra ID App Registrations Redirect URIs",
    scenario: "A developer registers a new web application in Microsoft Entra ID. After successful login, the browser must redirect back to `https://app.contoso.com/signin-oidc` with an authorization code.",
    question: "Where must this return URL be configured in the Microsoft Entra App Registration?",
    options: [
      { id: 'A', text: "In Expose an API" },
      { id: 'B', text: "In the Redirect URIs section under Authentication" },
      { id: 'C', text: "In Certificates & Secrets" },
      { id: 'D', text: "In API Permissions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Microsoft Entra App Registrations, `Redirect URIs` (reply URLs) specify the exact destination URLs where the Microsoft identity platform sends tokens or authorization codes after authentication. Any redirect URL not explicitly registered is rejected.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/reply-url",
    tags: ["Microsoft Entra ID", "Redirect URI", "Authentication"]
  },
  {
    id: "azure-az204-139",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "MSAL Token Cache Serialization in Distributed Web Apps",
    scenario: "A multi-instance ASP.NET Core web application uses MSAL to call downstream APIs. Each server instance maintains its own in-memory token cache, causing redundant token acquisitions and user re-prompts.",
    question: "How should the developer share the MSAL token cache across all web server instances?",
    options: [
      { id: 'A', text: "Configure distributed token cache serialization using Microsoft.Identity.Web and Azure Cache for Redis" },
      { id: 'B', text: "Disable token caching completely in MSAL" },
      { id: 'C', text: "Store tokens in unencrypted client cookies" },
      { id: 'D', text: "Hardcode access tokens in appsettings.json" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Microsoft.Identity.Web` provides token cache serialization extensions (e.g. `AddDistributedTokenCaches`). Serializing the MSAL token cache to a shared distributed cache (like Azure Cache for Redis or SQL Server) allows all web instances to share cached tokens and refresh tokens.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/msal/dotnet/acquiring-tokens/desktop-mobile/token-cache-serialization",
    tags: ["MSAL", "Token Cache", "Distributed Caching"]
  },
  {
    id: "azure-az204-140",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Key Vault Certificate Auto-Renewal with Integrated CAs",
    scenario: "An enterprise needs SSL certificates in Azure Key Vault that renew automatically 30 days before expiration without manual certificate generation or CSR handling.",
    question: "Which Key Vault feature integrates with DigiCert or GlobalSign for automated certificate renewal?",
    options: [
      { id: 'A', text: "Self-signed certificates with manual renewal" },
      { id: 'B', text: "External manual PFX imports" },
      { id: 'C', text: "Integrated Certificate Authorities (Integrated CAs) configured in Key Vault Certificate Issuers" },
      { id: 'D', text: "Let's Encrypt bash scripts on VMs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure Key Vault partners with select Certificate Authorities (DigiCert and GlobalSign). By creating a Certificate Issuer linked to an account with an integrated CA, Key Vault handles the entire lifecycle (order, validate, issue, and renew) automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/certificates/how-to-integrate-certificate-authority",
    tags: ["Key Vault", "Certificates", "Auto-Renewal"]
  },
  {
    id: "azure-az204-141",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra Conditional Access Step-Up Authentication",
    scenario: "A user logs into an enterprise portal using standard username and password. When the user attempts to access a sensitive payroll page, the system requires Multi-Factor Authentication (MFA).",
    question: "Which Microsoft Entra security feature enforces context-driven step-up MFA based on risk or sensitive resources?",
    options: [
      { id: 'A', text: "Security Defaults" },
      { id: 'B', text: "Basic Authentication" },
      { id: 'C', text: "Access Restrictions on App Service alone" },
      { id: 'D', text: "Conditional Access Policies" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Microsoft Entra `Conditional Access` policies evaluate signals (user, device, location, risk, resource requested) to enforce access controls such as requiring MFA, blocking access, or requiring compliant managed devices.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    tags: ["Microsoft Entra ID", "Conditional Access", "MFA"]
  },
  {
    id: "azure-az204-142",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Hardware Security Module (HSM) Keys",
    scenario: "A government banking compliance standard requires cryptographic keys to be stored in dedicated, single-tenant hardware security modules validated to FIPS 140-2 Level 3.",
    question: "Which Azure service tier provides dedicated FIPS 140-2 Level 3 HSM key protection?",
    options: [
      { id: 'A', text: "Azure App Configuration" },
      { id: 'B', text: "Azure Storage Service Encryption" },
      { id: 'C', text: "Standard Azure Key Vault" },
      { id: 'D', text: "Azure Key Vault Managed HSM" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure Key Vault `Managed HSM` is a fully managed, highly available, single-tenant cloud service that provides FIPS 140-2 Level 3 validated cryptographic HSM protection for cryptographic keys.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/key-vault/managed-hsm/overview",
    tags: ["Key Vault", "Managed HSM", "Compliance"]
  },
  {
    id: "azure-az204-143",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Snapshots for Release Immutability",
    scenario: "A software release pipeline deploys version `v2.4.0` of an application. The team must freeze and lock the exact configuration key-value pairs used by this release so they cannot be altered accidentally.",
    question: "Which Azure App Configuration feature creates an immutable, point-in-time copy of configuration settings?",
    options: [
      { id: 'A', text: "App Configuration Snapshots" },
      { id: 'B', text: "App Configuration Labels" },
      { id: 'C', text: "Key Vault Secret Versions" },
      { id: 'D', text: "Azure Backup Vault" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure App Configuration `Snapshots` capture a point-in-time, immutable copy of key-values and feature flags. Once created, snapshots cannot be edited or overwritten, providing a reliable configuration baseline for software releases.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-snapshot",
    tags: ["App Configuration", "Snapshots", "Immutability"]
  },
  {
    id: "azure-az204-144",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra App Roles Claims in JWT Tokens",
    scenario: "A web API needs to restrict administrative actions to users assigned the `AppAdmin` role. The API inspects claims in the incoming JWT token.",
    question: "Where are custom application roles defined and in which token claim are they returned?",
    options: [
      { id: 'A', text: "Defined in the App Registration Manifest under appRoles and returned in the roles claim" },
      { id: 'B', text: "Defined in Azure Subscriptions and returned in the groups claim" },
      { id: 'C', text: "Defined in local.settings.json and returned in the sub claim" },
      { id: 'D', text: "Defined in Key Vault and returned in the aud claim" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developers declare custom application roles in the `appRoles` array of the Microsoft Entra App Registration. When users or groups are assigned the role in Enterprise Applications, Entra ID includes the role name in the `roles` claim of the issued JWT access token.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/howto-add-app-roles-in-apps",
    tags: ["Microsoft Entra ID", "App Roles", "JWT Claims"]
  },
  {
    id: "azure-az204-145",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Validating JWT Access Tokens in Custom Web APIs",
    scenario: "A backend microservice receives an HTTP request containing a Bearer token in the `Authorization` header. The microservice must validate the token before fulfilling the request.",
    question: "Which four standard checks must the API perform to validate the JWT token?",
    options: [
      { id: 'A', text: "Validate that the token contains no vowels" },
      { id: 'B', text: "Check only that the token string is longer than 50 characters" },
      { id: 'C', text: "Verify token signature using Entra public signing keys, check expiration (exp), validate audience (aud), and validate issuer (iss)" },
      { id: 'D', text: "Verify caller IP address only" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To validate a JWT issued by Microsoft Entra ID, an API must: 1) Verify the cryptographic signature using keys published at the jwks_uri; 2) Check that current time is between `nbf` and `exp`; 3) Verify `aud` matches the API's client ID; and 4) Verify `iss` matches the expected Entra tenant.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/access-tokens#validating-tokens",
    tags: ["JWT", "Token Validation", "Security"]
  },
  {
    id: "azure-az204-146",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "InteractiveBrowserCredential vs DeviceCodeCredential in Local Debugging",
    scenario: "A developer writes a CLI tool using `Azure.Identity`. The tool runs on headless Linux servers where no web browser is installed.",
    question: "Which credential class should be used to support interactive user login on browser-less devices?",
    options: [
      { id: 'A', text: "InteractiveBrowserCredential" },
      { id: 'B', text: "DeviceCodeCredential" },
      { id: 'C', text: "ClientSecretCredential" },
      { id: 'D', text: "DefaultAzureCredential alone without inputs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`DeviceCodeCredential` outputs a short alphanumeric code and a URL (`https://microsoft.com/devicelogin`). The user opens the URL on any device with a browser, enters the code, and authenticates, enabling interactive login on headless Linux terminals.",
    referenceUrl: "https://learn.microsoft.com/en-us/dotnet/api/azure.identity.devicecodecredential?view=azure-dotnet",
    tags: ["Azure.Identity", "DeviceCodeCredential", "CLI"]
  },
  {
    id: "azure-az204-147",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Microsoft Entra ID On-Behalf-Of (OBO) Flow",
    scenario: "An API client calls Microservice A with a user's delegated token. Microservice A must call downstream Microservice B while preserving the original user's identity and permissions.",
    question: "Which OAuth 2.0 flow is designed for middle-tier services to exchange a user token for a downstream token?",
    options: [
      { id: 'A', text: "Client Credentials Flow" },
      { id: 'B', text: "On-Behalf-Of (OBO) Flow" },
      { id: 'C', text: "Implicit Flow" },
      { id: 'D', text: "Authorization Code Flow" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OAuth 2.0 `On-Behalf-Of (OBO)` flow allows an API that received a user's delegated access token to exchange that token for a new access token targeted at a downstream API, maintaining the caller's user identity across the microservice call chain.",
    referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow",
    tags: ["OAuth", "OBO Flow", "Microservices"]
  },
  {
    id: "azure-az204-148",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure Key Vault Backup and Restore Key API",
    scenario: "A disaster recovery procedure requires creating offline backup copies of a Customer Managed Key in Azure Key Vault to store in an air-gapped vault.",
    question: "Which Key Vault operation creates an encrypted, protected byte array backup of a key?",
    options: [
      { id: 'A', text: "CreateKeySnapshot" },
      { id: 'B', text: "BackupKeyAsync (Backup Key)" },
      { id: 'C', text: "ExportKeyAsync in plain text" },
      { id: 'D', text: "CopyKeyVault" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `BackupKey` operation exports an encrypted byte array representation of a key. The backup cannot be decrypted outside Azure Key Vault and can only be restored (`RestoreKey`) to a Key Vault in the same geography or subscription.",
    referenceUrl: "https://learn.microsoft.com/en-us/rest/api/keyvault/keys/backup-key/backup-key",
    tags: ["Key Vault", "BackupKey", "Disaster Recovery"]
  },
  {
    id: "azure-az204-149",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Multi-Environment Labeling Strategy",
    scenario: "An enterprise stores application settings for `Development`, `Staging`, and `Production` environments inside a single Azure App Configuration store.",
    question: "Which App Configuration feature differentiates key values across environments using the same key name?",
    options: [
      { id: 'A', text: "Prefixing keys with random numbers" },
      { id: 'B', text: "Separate Key Vault instances only" },
      { id: 'C', text: "Labels (e.g. Label: Development, Label: Production)" },
      { id: 'D', text: "Creating separate tenant IDs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Azure App Configuration, `Labels` serve as dimensions to distinguish different values for the same key (e.g. key `Database:Timeout` with label `Development` = 60 and label `Production` = 10), enabling applications to load environment-specific configurations cleanly.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value#label-keys",
    tags: ["App Configuration", "Labels", "Environments"]
  },
  {
    id: "azure-az204-150",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Stored Access Policies Expiration and Modification",
    scenario: "A stored access policy on an Azure Blob container grants write access to partners. An administrator extends the expiration time of the policy by 30 days.",
    question: "How does modifying the stored access policy affect existing Service SAS tokens that reference it?",
    options: [
      { id: 'A', text: "All existing tokens are permanently invalidated" },
      { id: 'B', text: "All existing Service SAS tokens referencing the policy immediately inherit the extended expiration time without regenerating tokens" },
      { id: 'C', text: "The storage account must be restarted" },
      { id: 'D', text: "Tokens must be reissued to partners" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Because a Service SAS delegates access constraints to the Stored Access Policy on the server, modifying the policy (such as extending expiration or changing permissions) takes effect immediately for all active SAS tokens referencing that policy.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-stored-access-policy-manage#modify-or-revoke-a-stored-access-policy",
    tags: ["Storage", "SAS", "Stored Access Policy"]
  }
];

export default AZURE_AZ204_QUESTIONS_6;
