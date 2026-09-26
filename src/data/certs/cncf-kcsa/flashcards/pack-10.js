export const CNCF_KCSA_FLASHCARDS_10 = [
  {
    id: 'cncf-kcsa-fc-226',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Kubernetes has no User objects. Where do human identities come from, and what do RBAC bindings for users refer to?',
    hint: 'The API server trusts an assertion; it does not store an account.',
    back: 'There is no User kind and no <code>kubectl create user</code>. Normal users are <strong>asserted by authenticators</strong>: the CN and O of a client certificate signed by a trusted CA, the claims in an OIDC token from the corporate IdP, a webhook token response, or authenticating-proxy headers. RBAC subjects of kind <strong>User</strong> and <strong>Group</strong> are just strings matched against those names, so a binding can exist for someone who has never signed in. Only <strong>ServiceAccounts</strong>, which are meant for workloads, are API objects. Onboarding and offboarding people therefore happen in the identity provider.',
    tags: ['Authentication', 'Users', 'RBAC']
  },
  {
    id: 'cncf-kcsa-fc-227',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'An auditor wants MFA for every kubectl user, but kube-apiserver has no MFA setting. Where is it enforced?',
    hint: 'Look upstream of the token the API server receives.',
    back: 'In the <strong>identity provider</strong>. With OIDC, the IdP enforces the second factor at sign-in, so every ID token the API server accepts was issued after MFA; a kubectl exec credential plugin such as kubelogin drives the browser login. Where the IdP records the method in the token (for example an <code>amr</code> claim), a <strong>claimValidationRules</strong> CEL rule in structured authentication configuration can require it. Client certificates and static tokens cannot deliver MFA, so keep them for components and break-glass access.',
    tags: ['Authentication', 'MFA', 'OIDC']
  },
  {
    id: 'cncf-kcsa-fc-228',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How does the API server derive a user name and groups from an X.509 client certificate?',
    hint: 'Two fields of the subject.',
    back: 'The subject\'s <strong>Common Name (CN)</strong> becomes the <strong>user name</strong>, and each <strong>Organization (O)</strong> value becomes a <strong>group</strong>. Other fields such as OU are ignored. The certificate must chain to the CA given by <code>--client-ca-file</code>. Because groups are baked in, changing someone\'s groups means issuing a new certificate, and O=system:masters grants unconditional superuser access.',
    tags: ['Authentication', 'Client certificates', 'Groups']
  },
  {
    id: 'cncf-kcsa-fc-229',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'When the API server accepts an OIDC ID token, what does it check, and does it contact the IdP each time?',
    hint: 'Signatures can be verified offline.',
    back: 'It verifies the JWT\'s <strong>signature</strong> using the issuer\'s published keys (fetched from its discovery document and cached), and checks the <strong>issuer</strong>, <strong>audience</strong> (client ID) and <strong>expiry</strong>, then maps claims to user and groups. It does <strong>not</strong> call the IdP per request, so a token stays valid until it expires even if the user is disabled; short token lifetimes and revoking refresh tokens at the IdP limit that window.',
    tags: ['Authentication', 'OIDC', 'Tokens']
  },
  {
    id: 'cncf-kcsa-fc-230',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How do kube-apiserver and the kubelet authenticate each other in each direction?',
    hint: 'Two TLS connections, four sets of flags.',
    back: '<strong>Kubelet to API server</strong>: the kubelet presents a client certificate (user system:node:NAME, group system:nodes), usually obtained through TLS bootstrapping and rotated automatically. <strong>API server to kubelet</strong> (logs, exec, port-forward): the API server presents <code>--kubelet-client-certificate</code>/<code>--kubelet-client-key</code>, which the kubelet checks against its client CA and authorizes via Webhook mode; the API server verifies the kubelet\'s serving certificate only if <code>--kubelet-certificate-authority</code> is set.',
    tags: ['Authentication', 'kubelet', 'mTLS']
  },
  {
    id: 'cncf-kcsa-fc-231',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Why set username and groups prefixes for OIDC identities?',
    hint: 'Keep names from different sources apart.',
    back: 'Prefixes such as <code>--oidc-username-prefix=oidc:</code> and <code>--oidc-groups-prefix=oidc:</code> make every IdP-derived name distinct, so an IdP account cannot collide with a built-in <strong>system:</strong> identity or with a user from another authenticator and inherit its bindings. RBAC subjects then use the prefixed names, for example group <code>oidc:platform-admins</code>.',
    tags: ['Authentication', 'OIDC', 'Identity collisions']
  },
  {
    id: 'cncf-kcsa-fc-232',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How does webhook token authentication work?',
    hint: 'The API server asks someone else about an opaque token.',
    back: 'With <code>--authentication-token-webhook-config-file</code> (a kubeconfig-format file naming the service), the API server sends each unrecognised bearer token to the external service in a <strong>TokenReview</strong>. The service replies whether the token is authenticated and, if so, the <strong>username, UID, groups and extra</strong> attributes. Responses can be cached (<code>--authentication-token-webhook-cache-ttl</code>), trading revocation speed for load.',
    tags: ['Authentication', 'Webhook', 'TokenReview']
  },
  {
    id: 'cncf-kcsa-fc-233',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What user name and groups does a service account authenticate as?',
    hint: 'A fixed system: format including the namespace.',
    back: 'User <strong>system:serviceaccount:NAMESPACE:NAME</strong>, in the groups <strong>system:serviceaccounts</strong> (all service accounts), <strong>system:serviceaccounts:NAMESPACE</strong> (all in that namespace) and system:authenticated. Binding a role to either service account group grants it to every workload identity in that scope, so bind to individual accounts instead.',
    tags: ['Service accounts', 'Authentication', 'Groups']
  },
  {
    id: 'cncf-kcsa-fc-234',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which kube-apiserver flags govern service account token signing and verification, and how do you rotate the key?',
    hint: 'One private key signs; possibly several public keys verify.',
    back: '<code>--service-account-signing-key-file</code> is the private key that signs new tokens; <code>--service-account-key-file</code> (repeatable) lists public keys accepted for verification; <code>--service-account-issuer</code> sets the iss claim. For a planned rotation, add the new public key, switch signing to the new private key, wait for projected tokens to refresh, then remove the old public key. After a key leak, remove the old public key immediately.',
    tags: ['Service accounts', 'Key rotation', 'API server']
  },
  {
    id: 'cncf-kcsa-fc-235',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How can a user see exactly which identity and groups the API server resolved for them?',
    hint: 'A self-review, not a local file.',
    back: 'Run <strong>kubectl auth whoami</strong>, which creates a <strong>SelfSubjectReview</strong>; the API server returns the username, UID, groups and extra attributes it derived from the credential. It is the fastest way to debug missing OIDC group claims, prefixes or impersonation, because the kubeconfig alone does not show what the server concluded.',
    tags: ['Authentication', 'kubectl', 'Troubleshooting']
  },
  {
    id: 'cncf-kcsa-fc-236',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Why is the static token file (--token-auth-file) discouraged?',
    hint: 'Forever tokens, read once.',
    back: 'It is a CSV of <strong>plain-text bearer tokens</strong> stored on control plane disks. Tokens <strong>never expire</strong>, and the file is read only at <strong>startup</strong>, so adding or revoking a user requires restarting the API server. There is no MFA or central lifecycle. Use OIDC or another IdP-backed method for people, and bound service account tokens for workloads.',
    tags: ['Authentication', 'Static tokens']
  },
  {
    id: 'cncf-kcsa-fc-237',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How are multiple authorization modes combined in kube-apiserver?',
    hint: 'First definite answer wins.',
    back: 'Authorizers run <strong>in the configured order</strong> (for example Node,RBAC,Webhook). Each returns <strong>allow</strong>, <strong>deny</strong> or <strong>no opinion</strong>; the first allow or deny decides, and no opinion passes to the next. If all abstain, the request is forbidden. RBAC and Node never deny, they only allow or abstain, so explicit vetoes need a Webhook authorizer placed before them. Members of system:masters are allowed before any configured authorizer runs.',
    tags: ['Authorization', 'Authorization modes', 'API server']
  },
  {
    id: 'cncf-kcsa-fc-238',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Which authorization modes does kube-apiserver support, and which are typical for production?',
    hint: 'Six modes; two are for testing only.',
    back: '<strong>Node</strong>, <strong>RBAC</strong>, <strong>Webhook</strong>, <strong>ABAC</strong>, <strong>AlwaysAllow</strong> and <strong>AlwaysDeny</strong>. Production clusters typically run <code>--authorization-mode=Node,RBAC</code>, sometimes with Webhook for external policy. ABAC uses a static policy file and is effectively legacy; AlwaysAllow grants everything and must never be used outside throwaway test clusters.',
    tags: ['Authorization', 'Authorization modes']
  },
  {
    id: 'cncf-kcsa-fc-239',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Role, ClusterRole, RoleBinding and ClusterRoleBinding: what does each do?',
    hint: 'Two define permissions, two grant them; scope differs.',
    back: 'A <strong>Role</strong> defines permissions within one namespace; a <strong>ClusterRole</strong> defines permissions that can apply cluster-wide, to cluster-scoped resources or to non-resource URLs. A <strong>RoleBinding</strong> grants a Role or ClusterRole to subjects within one namespace; a <strong>ClusterRoleBinding</strong> grants a ClusterRole across all namespaces. Subjects are users, groups or service accounts.',
    tags: ['Authorization', 'RBAC']
  },
  {
    id: 'cncf-kcsa-fc-240',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How do you write an RBAC rule for a custom resource?',
    hint: 'The core group is the empty string; CRDs never live there.',
    back: 'Set <strong>apiGroups</strong> to the CRD\'s group (for example <code>backup.example.com</code>) and <strong>resources</strong> to its <strong>plural</strong> name (for example <code>backupjobs</code>), plus any subresources such as <code>backupjobs/status</code> as separate entries. A rule with <code>apiGroups: [""]</code> covers only core resources, so it never matches a CRD, while a wildcard group matches every CRD, including ones installed later.',
    tags: ['Authorization', 'RBAC', 'Custom resources']
  },
  {
    id: 'cncf-kcsa-fc-241',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Can RBAC express a deny, and how do several bindings for one user combine?',
    hint: 'Only ever adds.',
    back: 'No. RBAC is <strong>purely additive</strong>: rules only grant, and the effective permissions are the <strong>union</strong> of every binding that applies to the user, their groups and service account groups. To remove access you must remove or narrow a grant, often by restructuring groups. True deny semantics require a Webhook authorizer or admission policy, and order-sensitive rules are impossible in RBAC itself.',
    tags: ['Authorization', 'RBAC']
  },
  {
    id: 'cncf-kcsa-fc-242',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What do the RBAC verbs escalate and bind permit?',
    hint: 'They bypass privilege escalation prevention.',
    back: 'Normally a user may create or update a Role only if they already hold <strong>all its permissions</strong> at that scope, and may create a binding only if they hold the referenced role\'s permissions. <strong>escalate</strong> on roles or clusterroles lifts the first check, letting the user write rules granting permissions they lack; <strong>bind</strong> lifts the second, letting them bind roles more powerful than themselves. Both are effectively paths to cluster-admin and deserve cluster-admin level scrutiny.',
    tags: ['Authorization', 'RBAC', 'Privilege escalation']
  },
  {
    id: 'cncf-kcsa-fc-243',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How do aggregated ClusterRoles work, and what is the security risk?',
    hint: 'Labels pull rules into a parent role.',
    back: 'A ClusterRole with an <strong>aggregationRule</strong> has its rules filled in by a controller from every ClusterRole whose labels match. The built-in <strong>admin</strong>, <strong>edit</strong> and <strong>view</strong> roles aggregate roles labelled <code>rbac.authorization.k8s.io/aggregate-to-admin</code>, <code>-edit</code> or <code>-view</code>. Any chart or operator that ships such a labelled role silently widens those roles for every existing binding, so review aggregated roles on install.',
    tags: ['Authorization', 'RBAC', 'Aggregated ClusterRoles']
  },
  {
    id: 'cncf-kcsa-fc-244',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How do the built-in admin, edit and view ClusterRoles differ?',
    hint: 'Secrets and RBAC objects are the dividing lines.',
    back: '<strong>view</strong>: read most namespaced objects but <strong>not Secrets</strong> or roles and bindings. <strong>edit</strong>: read and write most objects including <strong>Secrets</strong>, and run pods as any service account in the namespace, but cannot view or change roles and bindings. <strong>admin</strong>: edit plus managing <strong>Roles and RoleBindings</strong> in the namespace, but not the namespace itself or its ResourceQuota. <strong>cluster-admin</strong> is unrestricted.',
    tags: ['Authorization', 'RBAC', 'Default roles']
  },
  {
    id: 'cncf-kcsa-fc-245',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'What do the Node authorizer and NodeRestriction admission plugin each limit for kubelets?',
    hint: 'One limits reads, the other limits writes to objects.',
    back: 'The <strong>Node authorizer</strong> lets a kubelet (identity system:node:NAME in group system:nodes) read only the Secrets, ConfigMaps, PVCs and PVs referenced by <strong>pods bound to its node</strong>, plus general objects such as Services and Nodes, and write node and pod status and events. <strong>NodeRestriction</strong> admission limits writes to <strong>its own Node object</strong> and pods on it, and blocks it from setting labels under the node-restriction.kubernetes.io/ prefix.',
    tags: ['Authorization', 'Node authorizer', 'NodeRestriction']
  },
  {
    id: 'cncf-kcsa-fc-246',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'A pod\'s projected service account token decodes with an expiry a year away, although the kubelet refreshes it hourly. Why, and how do you tighten it?',
    hint: 'A compatibility flag on the API server for clients that never reread the token file.',
    back: 'kube-apiserver defaults to <code>--service-account-extend-token-expiration=true</code>: tokens injected by the ServiceAccount admission plugin are issued valid for up to <strong>one year</strong>, ignoring --service-account-max-token-expiration, while the kubelet still rotates the file roughly hourly. This protects clients that cache the token. When such a token is used past its intended lifetime, the audit event is annotated <code>authentication.k8s.io/stale-token</code>. Once those annotations stop appearing, set the flag to <strong>false</strong> so a stolen token dies at its real expiry.',
    tags: ['Service accounts', 'Token lifetime', 'Audit']
  },
  {
    id: 'cncf-kcsa-fc-247',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'system:authenticated vs system:unauthenticated: who is in each group?',
    hint: 'Everybody with any credential, versus nobody in particular.',
    back: '<strong>system:authenticated</strong> is added to every request that passes any authenticator: humans, every service account, nodes and integrations. <strong>system:unauthenticated</strong> holds anonymous requests (user system:anonymous). Binding roles to either is rarely right: the first is far broader than "our employees", and the second exposes the API to anyone who can reach it.',
    tags: ['Authorization', 'Groups', 'RBAC']
  },
  {
    id: 'cncf-kcsa-fc-248',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'How does webhook authorization work, and what does structured authorization configuration add?',
    hint: 'A SubjectAccessReview goes out; allow, deny or abstain comes back.',
    back: 'In Webhook mode the API server sends a <strong>SubjectAccessReview</strong> (user, groups, verb, resource, namespace) to an external service, which may <strong>allow</strong>, explicitly <strong>deny</strong> or give no opinion. The structured <code>--authorization-config</code> file (stable since 1.32) supports an ordered chain of <strong>multiple webhooks</strong>, <strong>CEL matchConditions</strong> so only relevant requests are sent, per-webhook <strong>failurePolicy</strong>, cache TTLs and reload without restart.',
    tags: ['Authorization', 'Webhook', 'Structured authorization']
  },
  {
    id: 'cncf-kcsa-fc-249',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Why can\'t you change the role a RoleBinding points to, and how is that handled safely?',
    hint: 'One field is immutable.',
    back: 'A binding\'s <strong>roleRef</strong> is <strong>immutable</strong>: to point subjects at a different role you delete and recreate the binding, and <code>kubectl auth reconcile</code> can do that for you. The design means permission to update a binding\'s subjects does not also let someone swap in a more powerful role, and it forces a conscious recreate that shows up clearly in audit logs.',
    tags: ['Authorization', 'RBAC', 'RoleBinding']
  },
  {
    id: 'cncf-kcsa-fc-250',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd3',
    front: 'Why are wildcards in RBAC rules risky even when today\'s resources seem harmless?',
    hint: 'Evaluated at request time, not at creation time.',
    back: 'A <code>*</code> in apiGroups, resources or verbs matches <strong>everything that exists now and later</strong>: new built-in resources, <strong>custom resources</strong> installed by operators (which may hold credentials) and new verbs or subresources. The grant silently grows with the cluster. List resources and verbs explicitly, and review roles whenever CRDs are added.',
    tags: ['Authorization', 'RBAC', 'Wildcards']
  }
];

export default CNCF_KCSA_FLASHCARDS_10;
