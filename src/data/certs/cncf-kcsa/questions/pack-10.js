export const CNCF_KCSA_QUESTIONS_10 = [
  {
    id: "cncf-kcsa-226",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A 401 response on every kubectl command",
    scenario: "A new engineer at an airline configures kubectl with a token copied from an old wiki page. Every command, even kubectl get namespaces, returns HTTP 401 Unauthorized. A colleague with a working kubeconfig receives 403 Forbidden when trying to delete a namespace.",
    question: "What does the engineer's 401 response indicate?",
    options: [
      { id: 'A', text: "The request was rejected by API priority and fairness, so the engineer's client is sending too many requests." },
      { id: 'B', text: "The request passed authentication but no RBAC rule allows it, so the engineer needs a RoleBinding for namespaces." },
      { id: 'C', text: "The request failed authentication, so the API server could not establish any identity from the supplied token." },
      { id: 'D', text: "The request was identified but an admission controller rejected it, so the engineer's objects violate a policy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Requests pass through authentication, then authorization, then admission. A 401 Unauthorized means no authenticator accepted the credential, here most likely an expired or revoked token, and anonymous access did not apply, so the request never reached authorization. The colleague's 403 Forbidden is the authorization outcome: the identity is known but no rule permits the action. Admission rejections return errors after authorization succeeds, typically 400-class errors with a policy message, not 401. Priority and fairness throttling returns 429 Too Many Requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/controlling-access/",
    tags: ["Authentication", "API server", "Troubleshooting"]
  },
  {
    id: "cncf-kcsa-227",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Looking for the command that creates a user",
    scenario: "A developer moving from a database background asks the platform team to run the Kubernetes command that creates a user account for each new hire, the way they would in PostgreSQL. The company already manages staff identities in a corporate directory with SSO.",
    question: "How should the platform team explain human identities in Kubernetes?",
    options: [
      { id: 'A', text: "There is no user object at all; people are asserted by authenticators, such as OIDC via SSO or client certificates." },
      { id: 'B', text: "Humans are entries in the kube-system users ConfigMap, which the API server reads to map names to credentials." },
      { id: 'C', text: "Humans are ServiceAccount objects in a dedicated users namespace, one per person, with tokens issued to each of them." },
      { id: 'D', text: "Humans are User objects in the core API group, created with kubectl create user and bound to roles through RBAC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes has no API object for normal users. The API server trusts identities asserted by configured authenticators, such as OIDC tokens from a corporate IdP, client certificates signed by a trusted CA or webhook token authentication, and RBAC bindings refer to those user and group names. With SSO in place, integrating the directory through OIDC is the natural fit. There is no User kind or kubectl create user command. ServiceAccounts are for workloads, and sharing them among people loses individual accountability. No ConfigMap maps users to credentials.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/",
    tags: ["Authentication", "Users", "OIDC"]
  },
  {
    id: "cncf-kcsa-228",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "OIDC users whose group bindings never match",
    scenario: "A media company configured kube-apiserver with --oidc-issuer-url and --oidc-client-id for its IdP, and engineers can now authenticate. The IdP puts each engineer's teams in a claim named groups, and RoleBindings grant access to those team names, but every engineer's writes are forbidden. kubectl auth whoami shows only system:authenticated as a group.",
    question: "What configuration is missing?",
    options: [
      { id: 'A', text: "--oidc-required-claim set to groups, so the API server attaches team membership from that claim to the user." },
      { id: 'B', text: "--oidc-ca-file pointing at the IdP's CA, so the API server trusts the group data carried in each ID token." },
      { id: 'C', text: "--oidc-groups-claim set to groups, so the API server maps that claim in each ID token to Kubernetes groups." },
      { id: 'D', text: "--oidc-username-claim set to groups, so the API server reads team membership from the token's groups claim." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The API server only takes group membership from an OIDC token when told which claim holds it, through --oidc-groups-claim (or claimMappings in structured authentication configuration). Without it, users get only the built-in system:authenticated group, so RoleBindings to team names never match. The username claim sets the user name, and pointing it at groups would break identities. The CA file is for trusting the issuer's TLS certificate, and authentication is already succeeding. A required claim makes the claim mandatory for authentication but does not map it into groups.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens",
    tags: ["Authentication", "OIDC", "Groups"]
  },
  {
    id: "cncf-kcsa-229",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Two identity providers for one API server",
    scenario: "A consultancy's employees sign in through the company's own IdP, while a client's engineers must sign in through the client's separate IdP to the same shared cluster. The client also insists that only tokens with a verified email claim are accepted. The API server currently uses the --oidc-* flags.",
    question: "Which approach supports this?",
    options: [
      { id: 'A', text: "Point --oidc-issuer-url at the client's IdP and give employees client certificates, since only one issuer can ever be used." },
      { id: 'B', text: "Federate the client's IdP into the company IdP so that one issuer remains, since only one issuer can ever be configured." },
      { id: 'C', text: "Move to a structured authentication configuration file listing both JWT issuers, each with its own validation rules for tokens." },
      { id: 'D', text: "Add a second --oidc-issuer-url flag for the client's IdP, since the API server accepts several issuers through repeated flags." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The legacy --oidc-* flags support a single issuer. Structured authentication configuration, supplied with --authentication-config, accepts a list of JWT authenticators, each with its own issuer, audiences, claim mappings and CEL claim validation rules such as requiring email_verified to be true, and it can be updated without restarting the API server. Repeating --oidc-issuer-url does not add issuers. Federating the IdPs could work but is not required, and the claim that only one issuer can ever be configured is false. Moving employees to client certificates loses the revocability and MFA benefits of their IdP.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#using-authentication-configuration",
    tags: ["Authentication", "OIDC", "Structured authentication"]
  },
  {
    id: "cncf-kcsa-230",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "IdP names that could collide with system identities",
    scenario: "A university lets department admins create accounts in its IdP, and those usernames flow straight into Kubernetes through OIDC. A reviewer points out that someone could create an IdP account whose username matches a name used by a Kubernetes component or by a user from another authenticator, and inherit that identity's bindings.",
    question: "Which configuration prevents such collisions?",
    options: [
      { id: 'A', text: "Set --oidc-username-claim to sub so every IdP-asserted name is an opaque identifier nobody could choose freely." },
      { id: 'B', text: "Set --oidc-client-id to a unique value so every IdP-asserted name is scoped to the cluster that accepted it." },
      { id: 'C', text: "Set --oidc-signing-algs to RS256 so every IdP-asserted name is signed and cannot be forged by an account holder." },
      { id: 'D', text: "Set --oidc-username-prefix and --oidc-groups-prefix so every IdP-asserted name gets a fixed prefix like idp:alice." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Username and group prefixes are prepended to every name taken from OIDC tokens, so an IdP account can only ever map to names like idp:alice and idp:admins; it cannot become a system: identity or a user from another authenticator, and RBAC bindings refer to the prefixed names. Using sub as the username claim yields opaque identifiers, but groups remain unprefixed and some IdPs let admins influence the value. The client ID restricts which audience the token is for, not the names inside it. Signature algorithms protect token integrity, but a legitimately signed token can still carry a colliding name.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens",
    tags: ["Authentication", "OIDC", "Identity collisions"]
  },
  {
    id: "cncf-kcsa-231",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Accepting tokens from an in-house identity service",
    scenario: "A bank has an internal identity service that issues opaque session tokens to employees and exposes an HTTPS endpoint to validate them. The bank wants kube-apiserver to accept those tokens directly, with the service deciding each token's user name and groups.",
    question: "Which authentication mechanism fits?",
    options: [
      { id: 'A', text: "OIDC authentication pointed at the identity service, which the API server calls with each token to fetch the user's claims." },
      { id: 'B', text: "Authorization webhook mode, where the API server asks the service in a SubjectAccessReview who the token belongs to." },
      { id: 'C', text: "Webhook token authentication, where the API server sends each token to the service in a TokenReview and uses its reply." },
      { id: 'D', text: "A static token file listing every session token and its user, reloaded whenever the identity service issues new ones." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Webhook token authentication, configured with --authentication-token-webhook-config-file, has the API server POST a TokenReview containing the bearer token to an external service, which replies with authenticated status, username, UID and groups; the API server can cache results briefly. A static token file requires restarting the API server to change and would hold live session tokens on disk. OIDC expects signed JWTs that the API server verifies itself using the issuer's public keys; it does not call out per token for opaque tokens. SubjectAccessReview is for authorization decisions about an already authenticated identity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#webhook-token-authentication",
    tags: ["Authentication", "Webhook", "TokenReview"]
  },
  {
    id: "cncf-kcsa-232",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A leaked service account signing key",
    scenario: "Forensics shows that the private key named by kube-apiserver's --service-account-signing-key-file was copied off a control plane node. With it, an attacker could mint tokens for any service account. The platform team generates a new key pair and must decide what else to change.",
    question: "Which step is essential for the rotation to actually stop forged tokens?",
    options: [
      { id: 'A', text: "Delete every ServiceAccount and recreate it under the same name, which gives each account a fresh signing identity." },
      { id: 'B', text: "Rotate the cluster CA certificate, because service account tokens are signed by the CA the API server serves with." },
      { id: 'C', text: "Add the new public key to --service-account-key-file and keep the old one too, so existing pod tokens keep validating." },
      { id: 'D', text: "Remove the old public key from --service-account-key-file, so tokens signed with the stolen key no longer validate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The API server accepts any service account token whose signature verifies against a public key listed in --service-account-key-file, which may name several keys. After switching --service-account-signing-key-file to the new private key, the old public key must be removed; otherwise tokens forged with the stolen key remain valid. Pods using projected tokens pick up newly signed tokens as the kubelet refreshes them, so the disruption is limited. Keeping the old key is the normal approach for a planned rotation, but it defeats the purpose after a compromise. Recreating ServiceAccounts does not change which key signs tokens. Service account tokens are signed with the dedicated service account key, not the cluster CA.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",
    tags: ["Authentication", "Service accounts", "Key rotation", "Incident response"]
  },
  {
    id: "cncf-kcsa-233",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A CSV file of bearer tokens on the control plane",
    scenario: "A lab cluster that became production still starts kube-apiserver with --token-auth-file pointing at a CSV of long random tokens, one per engineer. An engineer left last week, and the team discovers that removing their line has had no effect because nobody restarted the API server.",
    question: "Why is this authentication method discouraged?",
    options: [
      { id: 'A', text: "The tokens are valid only for one hour, so engineers must request a new line in the file several times each day." },
      { id: 'B', text: "The tokens are hashed with a weak algorithm in the file, so anyone who copies it can reverse them within minutes." },
      { id: 'C', text: "The tokens are sent to the API server in clear text, because static tokens bypass TLS and travel over plain HTTP." },
      { id: 'D', text: "The tokens never expire and the file is read only at startup, so any change or revocation needs an API server restart." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Static token files hold bearer tokens that last indefinitely, and the API server loads the file only at startup, so adding or revoking a token requires a restart, which is exactly why the departed engineer still has access. The file also stores tokens in plain text on control plane disks. Tokens are sent over the same TLS connection as any other request. They do not expire at all, let alone hourly. The file stores the raw tokens rather than hashes, which is a separate weakness from the one the question describes.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#static-token-file",
    tags: ["Authentication", "Static tokens", "Revocation"]
  },
  {
    id: "cncf-kcsa-234",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Recognising a workload identity in the audit log",
    scenario: "While reviewing audit events, an analyst at a retailer sees requests from the user system:serviceaccount:billing:invoice-worker and asks whether this is a person. The billing team runs an invoice-generation Deployment in the billing namespace.",
    question: "What does this username represent?",
    options: [
      { id: 'A', text: "A controller in kube-system named invoice-worker that manages every billing workload on behalf of the team." },
      { id: 'B', text: "A person in the IdP named invoice-worker whose account the billing team created, logged with a system prefix." },
      { id: 'C', text: "A node in the billing node pool named invoice-worker, authenticating with its kubelet client certificate." },
      { id: 'D', text: "A service account called invoice-worker in the billing namespace, whose token the invoice pods present." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service account identities appear as system:serviceaccount:NAMESPACE:NAME, and they also belong to the groups system:serviceaccounts and system:serviceaccounts:NAMESPACE. This one is the invoice-worker ServiceAccount in billing, a namespaced API object whose tokens are mounted into the invoice pods. Human users from an IdP do not get a system:serviceaccount name. Nodes authenticate as system:node:NODENAME in the system:nodes group. A controller in kube-system would appear under a kube-system service account name, not billing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["Authentication", "Service accounts", "Audit"]
  },
  {
    id: "cncf-kcsa-235",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A token copied from a pod that no longer exists",
    scenario: "An attacker exfiltrated the projected service account token from a compromised pod at a logistics company. Responders deleted the pod thirty minutes later, well before the token's one-hour expiry, and want to know whether the stolen token still works.",
    question: "What is the status of the stolen token?",
    options: [
      { id: 'A', text: "It stays valid until its one-hour expiry, since projected tokens are checked only for signature and time." },
      { id: 'B', text: "It stays valid until the ServiceAccount is deleted, since the token is tied to the account, not to the pod." },
      { id: 'C', text: "It is rejected only after the kubelet on that node restarts, which clears the tokens it issued for its pods." },
      { id: 'D', text: "It is rejected, because projected tokens are bound to their pod and fail once that pod has been deleted." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Tokens from the TokenRequest API, which is how projected service account tokens are issued, are bound to an object such as the pod. When validating them, the API server checks that the bound pod still exists with the same UID, so deleting the pod invalidates the token even before its expiry. Legacy Secret-based tokens are tied only to the ServiceAccount and its Secret, which is why they are riskier. The kubelet requests and refreshes tokens but does not issue or revoke them.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/#bound-service-account-tokens",
    tags: ["Authentication", "Service accounts", "Bound tokens"]
  },
  {
    id: "cncf-kcsa-236",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Checking what identity the API server actually sees",
    scenario: "A developer insists she belongs to the platform-admins group in the IdP, yet a RoleBinding for that group does not seem to apply. Before anyone edits RBAC, the platform team wants to confirm the exact username and groups the API server derives from her credentials.",
    question: "What should she run?",
    options: [
      { id: 'A', text: "kubectl get users, which lists the user objects the API server built from recent tokens and their groups." },
      { id: 'B', text: "kubectl config view, which prints the user and groups that the API server derived from the current credentials." },
      { id: 'C', text: "kubectl describe rolebinding, which shows the groups of each user who has sent requests under that binding." },
      { id: 'D', text: "kubectl auth whoami, which asks the API server to return the user attributes it resolved for the request." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl auth whoami sends a SelfSubjectReview, and the API server replies with the username, UID, groups and extra attributes it resolved from the credential, which shows immediately whether the platform-admins group is arriving, perhaps with a prefix, or missing because of a claim mapping problem. kubectl config view only shows the local kubeconfig, not what the server derived. There are no user objects to list. Describing a RoleBinding shows its subjects, not the attributes of any requesting user.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#self-subject-review",
    tags: ["Authentication", "Troubleshooting", "kubectl"]
  },
  {
    id: "cncf-kcsa-237",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A compliance demand for multi-factor cluster access",
    scenario: "An auditor requires multi-factor authentication for every human who uses kubectl against a healthcare company's clusters. An engineer searches the kube-apiserver flags for an MFA setting and finds none. The company's IdP supports MFA and OIDC.",
    question: "How should the requirement be met?",
    options: [
      { id: 'A', text: "Sign in through the IdP with MFA enforced, so the API server only accepts tokens issued after the second factor." },
      { id: 'B', text: "Enable the API server's --enable-mfa flag, which prompts each kubectl user for a one-time code on the first request." },
      { id: 'C', text: "Issue client certificates stored on hardware tokens, which the API server treats as MFA when it sees the key usage." },
      { id: 'D', text: "Add a validating admission webhook that asks each user for a second factor before the request reaches authorization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes delegates human authentication to external systems and has no MFA feature of its own. Using OIDC with the IdP enforcing MFA at sign-in means every ID token the API server accepts was issued after a second factor, and claim validation rules can additionally require an MFA-related claim where the IdP provides one. There is no --enable-mfa flag. Hardware-held certificates can be strong, but the API server has no notion of treating them as MFA and they still cannot be revoked. Admission webhooks run after authorization, only for write requests, and cannot interact with the user.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens",
    tags: ["Authentication", "MFA", "OIDC"]
  },
  {
    id: "cncf-kcsa-238",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An API server flag spotted during a review",
    scenario: "A security review of a lab-turned-production cluster finds kube-apiserver started with --authorization-mode=AlwaysAllow. RBAC Roles and bindings exist in the cluster and look carefully scoped, so the team assumes users are limited by them.",
    question: "What is the actual effect of this setting?",
    options: [
      { id: 'A', text: "Only read requests are permitted automatically, while writes are still checked against the RBAC bindings." },
      { id: 'B', text: "Every authenticated request is permitted, so the stored RBAC objects are never used to decide anything." },
      { id: 'C', text: "RBAC is still consulted first, and AlwaysAllow only admits requests that no RBAC rule explicitly covers." },
      { id: 'D', text: "Only requests from system components are permitted automatically, while human users go through RBAC." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AlwaysAllow authorizes every request that reaches the authorization stage, and when it is the only mode, RBAC objects are stored but never evaluated. Any authenticated identity, and anonymous requests if anonymous authentication is on, can do anything. Production clusters typically use --authorization-mode=Node,RBAC. AlwaysAllow does not defer to RBAC, and it makes no distinction between reads and writes or between system components and humans.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/",
    tags: ["Authorization", "API server", "Misconfiguration"]
  },
  {
    id: "cncf-kcsa-239",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "One read-only role for thirty team namespaces",
    scenario: "A platform team wants the same read-only permission set for pods, Services and ConfigMaps in each of 30 team namespaces, granted to each team's group only in its own namespace. It wants to define the permission set once and avoid 30 copies drifting apart.",
    question: "Which RBAC design achieves this?",
    options: [
      { id: 'A', text: "One Role in the default namespace with the read rules, referenced by a RoleBinding in each of the team namespaces." },
      { id: 'B', text: "One ClusterRole with the read rules, referenced by a RoleBinding in each team namespace for that team's group." },
      { id: 'C', text: "One ClusterRole with the read rules, and a ClusterRoleBinding per team group so each team reads its own namespace." },
      { id: 'D', text: "One Role per team namespace with identical read rules, kept in sync by a controller that copies changes nightly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A RoleBinding can reference a ClusterRole, and the permissions then apply only within the RoleBinding's namespace. Defining the rules once in a ClusterRole and binding it per namespace gives each team read access to its own namespace alone, with a single definition to maintain. A ClusterRoleBinding would grant the rules in every namespace. A RoleBinding cannot reference a Role from another namespace. Copying Roles works but is exactly the drift-prone duplication the team wants to avoid.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding",
    tags: ["Authorization", "RBAC", "ClusterRole"]
  },
  {
    id: "cncf-kcsa-240",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Carving one user out of a group's permissions",
    scenario: "The developers group has edit rights in the staging namespace through a RoleBinding. A contractor in that group must keep everything except the ability to delete Deployments. An engineer proposes adding a Role for the contractor that denies delete on deployments.",
    question: "Why will the proposal not work, and what will?",
    options: [
      { id: 'A', text: "RBAC deny rules take effect only after the group binding is recreated, so delete and reapply the RoleBinding." },
      { id: 'B', text: "RBAC deny rules are allowed only in ClusterRoles, so the contractor's deny rule must move into a ClusterRole." },
      { id: 'C', text: "RBAC evaluates the most specific binding first, so a user-level Role must also list allowed verbs; add them all." },
      { id: 'D', text: "RBAC rules only grant access and cannot deny; take the contractor out of the group and bind a narrower Role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "RBAC is purely additive: rules grant permissions and there is no deny rule, so any grant from any binding allows the request. To exclude one person, stop granting them the broad permission, for example by removing the contractor from the group and binding a Role that omits delete on deployments, or by restructuring groups. Organisations that need true deny semantics can add a webhook authorizer or admission policy. There is no specificity ordering in RBAC. Neither Roles nor ClusterRoles support deny rules, and recreating bindings changes nothing.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["Authorization", "RBAC", "Least privilege"]
  },
  {
    id: "cncf-kcsa-241",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A team lead who cannot hand out Secret access",
    scenario: "A team lead's Role in the shop namespace allows create on roles and rolebindings plus full access to Deployments and ConfigMaps, but nothing on secrets. When she creates a Role granting get on secrets and binds it to herself, the API server rejects the Role with a forbidden error mentioning escalation.",
    question: "Why is the request rejected?",
    options: [
      { id: 'A', text: "RBAC blocks creating a Role that holds permissions its author lacks, unless the escalate verb is granted." },
      { id: 'B', text: "RBAC blocks creating any Role that mentions secrets, which is reserved for cluster administrators by default." },
      { id: 'C', text: "RBAC blocks binding a Role to its own creator, so another user must create the RoleBinding for her instead." },
      { id: 'D', text: "RBAC blocks new Roles until the admission webhook approves them, which it refuses for any secrets rules." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "RBAC includes privilege escalation prevention: a user can create or update a Role only if they already hold every permission in it at the same scope, or have the escalate verb on roles. Likewise, creating a binding requires holding the referenced role's permissions or the bind verb. Because she has no secrets access, she cannot mint a Role granting it. Nothing reserves secrets rules for administrators per se; anyone holding those permissions can delegate them. Binding a Role to oneself is allowed when these checks pass. No admission webhook is involved; the check is built into the RBAC API.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#privilege-escalation-prevention-and-bootstrapping",
    tags: ["Authorization", "RBAC", "Privilege escalation"]
  },
  {
    id: "cncf-kcsa-242",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Wildcards in a Role written for convenience",
    scenario: "To stop a stream of access tickets, an engineer gave a support group a Role in the orders namespace with apiGroups, resources and verbs all set to the wildcard. A month later an operator is installed that stores database credentials in a new custom resource in that namespace.",
    question: "What is the security consequence of the wildcard Role?",
    options: [
      { id: 'A', text: "None, because wildcards match only the built-in resources that existed at the time the Role itself was created." },
      { id: 'B', text: "None, because custom resources always require a ClusterRole, so a namespaced Role can never grant access to them." },
      { id: 'C', text: "The support group can read and change the new custom resources, since wildcards also match types that appear after the grant." },
      { id: 'D', text: "The support group loses access to the orders namespace, since a new API group invalidates any wildcard Role rules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Wildcards in RBAC rules are evaluated at request time, so they match every resource type and API group that exists now or later, including custom resources introduced by an operator. The support group silently gains full access to the stored credentials and to any future sensitive type, which is why RBAC good practices advise listing resources and verbs explicitly. Namespaced custom resources can be granted with a namespaced Role. Adding API groups does not invalidate existing rules.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Authorization", "RBAC", "Wildcards"]
  },
  {
    id: "cncf-kcsa-243",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A binding meant for all employees",
    scenario: "To let every employee browse workloads, an engineer bound the view ClusterRole to the group system:authenticated with a ClusterRoleBinding, reasoning that only staff can sign in through the company IdP. The cluster also runs hundreds of workloads with service accounts, and a vendor integration authenticates with a webhook token.",
    question: "Why is this binding broader than intended?",
    options: [
      { id: 'A', text: "system:authenticated matches every identity that passes any authenticator, including every workload token and partner system." },
      { id: 'B', text: "system:authenticated also includes anonymous requests, so anyone who reaches the API can view workloads without credentials." },
      { id: 'C', text: "system:authenticated is reserved for control plane components, so the binding gives view rights to the scheduler and controllers." },
      { id: 'D', text: "system:authenticated is resolved only at sign-in, so staff keep view rights for months after leaving the company IdP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Every request that passes any authenticator is added to the system:authenticated group, so the binding covers every service account token in every namespace, the vendor's webhook-authenticated identities, node credentials and any other authenticator's users, not just employees. A compromised pod anywhere could now read workload details cluster-wide. Anonymous requests are in system:unauthenticated, not system:authenticated. The group is not reserved for control plane components. Group membership is computed on each request, not stored at sign-in.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Authorization", "RBAC", "system:authenticated"]
  },
  {
    id: "cncf-kcsa-244",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "An operator install that widened the view role",
    scenario: "After installing a backup operator from a vendor's Helm chart, an auditor finds that every user bound to the built-in view ClusterRole can now read the operator's BackupCredential custom resources, which contain storage keys. No RoleBinding or ClusterRoleBinding was changed.",
    question: "What most likely caused the change?",
    options: [
      { id: 'A', text: "The chart registered the CRD in the core API group, which the view role covers through its core group rules." },
      { id: 'B', text: "The chart added a RoleBinding in kube-system that the API server copies into every namespace for view users." },
      { id: 'C', text: "The chart added a ClusterRole labelled aggregate-to-view, whose rules are merged into the standard view role." },
      { id: 'D', text: "The chart edited the rules of the view ClusterRole directly, which the API server allows for any Helm release." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The built-in admin, edit and view ClusterRoles are aggregated: a controller merges in the rules of any ClusterRole carrying labels such as rbac.authorization.k8s.io/aggregate-to-view: \"true\". Operators commonly ship such roles so users can see their resources, and a careless one can expose sensitive custom resources to everyone with view. Review aggregated roles when installing charts. Direct edits to view would be reverted by the aggregation controller and are not Helm-specific. CRDs cannot be registered in the core API group. RoleBindings are never copied between namespaces.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles",
    tags: ["Authorization", "RBAC", "Aggregated ClusterRoles"]
  },
  {
    id: "cncf-kcsa-245",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Proving a CI identity cannot delete namespaces",
    scenario: "A compliance checklist at a SaaS company requires evidence that the ci-deployer service account in the ci namespace cannot delete namespaces. A platform engineer with impersonation rights wants to check this without running a real delete.",
    question: "Which command provides the evidence?",
    options: [
      { id: 'A', text: "kubectl delete namespace ci --dry-run=client, which asks the API server whether the account is allowed." },
      { id: 'B', text: "kubectl describe serviceaccount ci-deployer -n ci, which lists every action the account may perform." },
      { id: 'C', text: "kubectl get clusterrolebindings -o wide, which prints the verbs that each subject is allowed to use." },
      { id: 'D', text: "kubectl auth can-i delete namespaces --as system:serviceaccount:ci:ci-deployer, which returns yes or no." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl auth can-i with --as asks the API server, through a SubjectAccessReview on behalf of the impersonated identity, whether that identity may perform the action, giving a definitive yes or no from all configured authorizers. A client-side dry run never contacts the API server and runs as the engineer, not the service account. Listing ClusterRoleBindings shows subjects and role names, not the resolved verbs, and misses RoleBindings. Describing a service account shows its tokens and pull secrets, not its permissions.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access",
    tags: ["Authorization", "kubectl", "Access review"]
  },
  {
    id: "cncf-kcsa-246",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A controller that reads one named ConfigMap",
    scenario: "A feature-flag sidecar in the checkout namespace needs to read and watch a single ConfigMap named checkout-flags. Other ConfigMaps in the namespace hold configuration for payment integrations that the sidecar should not see.",
    question: "Which Role rule is the most tightly scoped that still works?",
    options: [
      { id: 'A', text: "create on configmaps with resourceNames set to checkout-flags, so the sidecar can only ever touch that name." },
      { id: 'B', text: "get and watch on configmaps with resourceNames set to checkout-flags, so only that one object is visible." },
      { id: 'C', text: "get, list and watch on all configmaps in checkout, filtered by a label selector the sidecar always sends." },
      { id: 'D', text: "list on configmaps with resourceNames set to checkout-flags, so a list call returns only the named object." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "resourceNames restricts a rule to specific object names for requests that target a single named object, such as get, and watch on a single object using a fieldSelector on metadata.name. Granting get and watch with resourceNames checkout-flags lets the sidecar read and follow its ConfigMap while every other ConfigMap stays hidden. A list grant alone does not permit the get and watch the sidecar needs, and resourceNames only limits a list that carries a matching metadata.name field selector. A label selector sent by the client is not a security boundary, since the grant covers all ConfigMaps. create requests cannot be restricted by resourceNames because the object name is not known at authorization time, and the sidecar needs to read, not create.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources",
    tags: ["Authorization", "RBAC", "resourceNames"]
  },
  {
    id: "cncf-kcsa-247",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Edit rights granted to a namespace's default account",
    scenario: "To make one job work quickly, an engineer bound the edit ClusterRole to the default service account in the analytics namespace. The namespace runs a dozen workloads, most of which never set serviceAccountName.",
    question: "What is the security impact?",
    options: [
      { id: 'A', text: "Every pod in the namespace that falls back to the default account can now change Deployments and read Secrets." },
      { id: 'B', text: "No pod gains edit rights, because RBAC ignores bindings that name a namespace's default service account." },
      { id: 'C', text: "Only the job that needed edit rights gains them, because other pods must opt in to the default account's roles." },
      { id: 'D', text: "Only pods started after the binding gain edit rights, while existing pods keep the empty default permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pods that do not specify serviceAccountName run as the namespace's default service account, so a binding on it grants every such pod the edit role: creating and changing workloads and reading Secrets in the namespace. A compromise of any of those workloads now carries those rights. Kubernetes gives service accounts outside kube-system no permissions beyond API discovery by default, which is why the fix is a dedicated service account for the job. There is no opt-in step for inherited bindings. Permissions are evaluated per request, so running pods with a mounted token gain the rights immediately. RBAC treats the default account like any other.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#service-account-permissions",
    tags: ["Authorization", "RBAC", "Service accounts"]
  },
  {
    id: "cncf-kcsa-248",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "A rule that must veto even cluster-admin",
    scenario: "A bank's policy says nobody except a break-glass group may delete namespaces labelled tier=prod, even users bound to cluster-admin. The bank already runs an internal authorization service that can evaluate namespace labels, and it wants the veto enforced during authorization.",
    question: "How can this be achieved?",
    options: [
      { id: 'A', text: "Place a Webhook authorizer before RBAC, so it can return an explicit deny that ends evaluation before RBAC allows." },
      { id: 'B', text: "Add an RBAC Role with a deny rule for delete on prod namespaces and bind it to every group except break-glass." },
      { id: 'C', text: "Place RBAC before a Webhook authorizer, so the webhook runs last and can overturn any RBAC grant it disagrees with." },
      { id: 'D', text: "Label prod namespaces with pod-security enforce set to restricted, which blocks deletion by anyone outside break-glass." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Authorizers are consulted in the configured order, and the first one to allow or deny decides the request; one with no opinion passes it on. RBAC can only allow, but a Webhook authorizer can answer a SubjectAccessReview with an explicit deny. Placing the webhook ahead of RBAC, through --authorization-mode ordering or a structured authorization configuration, lets it veto deletes of prod namespaces even for cluster-admin, while returning no opinion for everything else. RBAC has no deny rules. Placed after RBAC, the webhook is never asked about requests RBAC already allowed. Pod Security labels govern pod specs, not namespace deletion. Members of system:masters would still bypass authorization entirely.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/",
    tags: ["Authorization", "Webhook", "Authorization order"]
  },
  {
    id: "cncf-kcsa-249",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Support staff who need logs but not shells",
    scenario: "A telecom's first-line support staff must read container logs in the customer-api namespace to diagnose errors, but they must not be able to open shells in containers, which could expose credentials. An engineer is drafting their Role.",
    question: "Which set of rules meets the requirement?",
    options: [
      { id: 'A', text: "get and list on pods plus create on pods/attach, which streams logs but denies access to new processes." },
      { id: 'B', text: "get and list on pods plus get on pods/log, while granting nothing on the pods/exec subresource at all." },
      { id: 'C', text: "get and list on pods, which includes reading their logs and opening a shell only if the pod permits it." },
      { id: 'D', text: "get and list on pods plus get on pods/exec, which lets staff read logs and blocks interactive sessions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Subresources are authorized separately from their parent: reading logs requires get on pods/log, while opening a shell requires create on pods/exec. Granting get and list on pods with get on pods/log, and nothing on exec or attach, gives logs without shells. Access to pods does not include logs or exec. get on pods/exec is the wrong verb for logs and moves toward exec rights rather than away. create on pods/attach connects to a running process's streams, which can allow interaction with the container, so it should not be granted either.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources",
    tags: ["Authorization", "RBAC", "Subresources"]
  },
  {
    id: "cncf-kcsa-250",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    domainName: "Kubernetes Security Fundamentals",
    title: "Permissions for a new queue-processing service",
    scenario: "A developer's new queue processor in the jobs namespace needs to create and delete Jobs there and nothing else in the cluster. The namespace also runs several unrelated applications that use the default service account.",
    question: "What is the least-privilege setup?",
    options: [
      { id: 'A', text: "Create a dedicated service account and bind it with a ClusterRoleBinding to a ClusterRole for jobs everywhere." },
      { id: 'B', text: "Bind the edit ClusterRole to the default service account in jobs, since the processor already runs under it." },
      { id: 'C', text: "Create a dedicated service account, a Role for create and delete on jobs, and a RoleBinding in that namespace." },
      { id: 'D', text: "Give the processor a copy of a platform engineer's kubeconfig, since that user can already manage Jobs anywhere." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A dedicated service account, a Role limited to create and delete on jobs in the batch API group and a RoleBinding in the jobs namespace give the processor exactly what it needs and nothing more, and keep its permissions separate from other workloads. Binding edit to the default service account grants broad rights to every pod using it. A ClusterRoleBinding extends the Job permissions to every namespace. Embedding a human's credentials destroys accountability and grants far too much.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["Authorization", "RBAC", "Service accounts", "Least privilege"]
  }
];

export default CNCF_KCSA_QUESTIONS_10;
