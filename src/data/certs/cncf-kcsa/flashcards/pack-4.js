export const CNCF_KCSA_FLASHCARDS_4 = [
  {
    id: 'cncf-kcsa-fc-76',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'In what order does kube-apiserver process a write request?',
    hint: 'Who are you, may you, should we change or allow it, then store.',
    back: '<strong>Authentication</strong> (who is calling) → <strong>authorization</strong> (may this user perform this verb on this resource) → <strong>mutating admission</strong> → <strong>schema validation</strong> → <strong>validating admission</strong> → <strong>persistence to etcd</strong>. A 401 comes from authentication, a "forbidden: User ... cannot" 403 from authorization, and policy denials from admission.',
    tags: ['API server', 'Request flow']
  },
  {
    id: 'cncf-kcsa-fc-77',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which authentication methods can kube-apiserver use, and how are several combined?',
    hint: 'The first one that succeeds wins.',
    back: '<strong>X.509 client certificates</strong>, <strong>service account tokens</strong>, <strong>OIDC/JWT tokens</strong>, <strong>webhook token authentication</strong>, <strong>bootstrap tokens</strong> for node joining, an <strong>authenticating proxy</strong> (request headers) and the legacy <strong>static token file</strong>. Enabled authenticators are tried in turn and the first to succeed identifies the user; if none does and anonymous access is enabled, the request becomes <code>system:anonymous</code>.',
    tags: ['API server', 'Authentication']
  },
  {
    id: 'cncf-kcsa-fc-78',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How does kube-apiserver evaluate multiple authorization modes such as Node,RBAC,Webhook?',
    hint: 'Allow, deny or no opinion.',
    back: 'Authorizers run <strong>in the order listed</strong>. Each returns <strong>allow</strong>, <strong>deny</strong> or <strong>no opinion</strong>; the first allow or deny ends evaluation, and if every authorizer has no opinion the request is <strong>denied</strong> (403). RBAC never denies explicitly, it only allows or abstains. <code>AlwaysAllow</code> and <code>AlwaysDeny</code> exist for testing and must not be used in production.',
    tags: ['API server', 'Authorization modes']
  },
  {
    id: 'cncf-kcsa-fc-79',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why is membership of the system:masters group so dangerous?',
    hint: 'It is checked before RBAC.',
    back: 'Requests from <code>system:masters</code> are <strong>authorized unconditionally</strong>, bypassing RBAC and webhook authorizers, so no RoleBinding change can restrict them. Combined with non-revocable client certificates, a leaked <code>O=system:masters</code> certificate is full cluster access until it expires or the CA is rotated. Keep it for break-glass only (kubeadm now issues <code>admin.conf</code> with a group bound to cluster-admin through RBAC) and grant day-to-day admin through RBAC.',
    tags: ['API server', 'system:masters']
  },
  {
    id: 'cncf-kcsa-fc-80',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What identity does kube-apiserver give a request that carries no credentials?',
    hint: 'A user and a group.',
    back: 'If <code>--anonymous-auth</code> is enabled (the default), the request is treated as user <strong><code>system:anonymous</code></strong> in group <strong><code>system:unauthenticated</code></strong> and then authorized normally. By default RBAC grants that group only basic discovery and health information; never bind anything broader to it, and disable anonymous access where health checks do not need it.',
    tags: ['API server', 'Anonymous authentication']
  },
  {
    id: 'cncf-kcsa-fc-81',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Name the main kube-apiserver settings the CIS benchmark checks.',
    hint: 'Authn, authz, admission, logs, crypto.',
    back: '<ul><li><code>--anonymous-auth=false</code> (where possible)</li><li><code>--authorization-mode</code> includes <strong>Node,RBAC</strong>, never AlwaysAllow</li><li><strong>NodeRestriction</strong> in <code>--enable-admission-plugins</code></li><li><code>--profiling=false</code></li><li>Audit logging configured (<code>--audit-policy-file</code>, <code>--audit-log-path</code>)</li><li><code>--encryption-provider-config</code> set</li><li>TLS certs, <code>--kubelet-certificate-authority</code> and strong cipher suites</li></ul>',
    tags: ['API server', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-82',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are FlowSchema and PriorityLevelConfiguration in API Priority and Fairness?',
    hint: 'Classify, then share.',
    back: 'A <strong>FlowSchema</strong> matches requests by user, group, service account, verb or resource and assigns them to a priority level (lowest <code>matchingPrecedence</code> wins). A <strong>PriorityLevelConfiguration</strong> defines that level\'s share of the API server\'s concurrency and how excess requests are queued or rejected. A flood from one client is contained in its own level; system and leader-election traffic keep dedicated capacity. GA since 1.29.',
    tags: ['API server', 'API Priority and Fairness']
  },
  {
    id: 'cncf-kcsa-fc-83',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which admission webhook settings decide whether a policy fails open or closed, and how do you avoid deadlocks?',
    hint: 'failurePolicy, timeoutSeconds, selectors.',
    back: '<code>failurePolicy: Fail</code> (the v1 default) rejects requests when the webhook errors or times out; <code>Ignore</code> admits them unchecked. <code>timeoutSeconds</code> (1-30, default 10) bounds the wait. Exclude <strong>kube-system and the webhook\'s own namespace</strong> with <code>namespaceSelector</code> or <code>matchConditions</code> so the webhook can always be restored, run several replicas, and keep the webhook service itself on TLS with a pinned <code>caBundle</code>.',
    tags: ['API server', 'Admission webhooks']
  },
  {
    id: 'cncf-kcsa-fc-84',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Match the default ports: 6443, 2379-2380, 10250, 10257, 10259, 30000-32767.',
    hint: 'API, store, node agent, two control loops, services.',
    back: '<strong>6443</strong> kube-apiserver. <strong>2379-2380</strong> etcd client and peer. <strong>10250</strong> kubelet API. <strong>10257</strong> kube-controller-manager. <strong>10259</strong> kube-scheduler. <strong>30000-32767</strong> NodePort Services. Only 6443 (and NodePorts you expose) should be reachable beyond the control plane or node itself.',
    tags: ['Ports', 'Network security']
  },
  {
    id: 'cncf-kcsa-fc-85',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which RBAC verbs allow privilege escalation and should be granted with great care?',
    hint: 'Three special verbs, plus a few resources.',
    back: '<strong><code>escalate</code></strong> (edit roles to include permissions you lack), <strong><code>bind</code></strong> (bind roles you do not hold) and <strong><code>impersonate</code></strong> (act as other users, groups or service accounts). Also risky: create on pods or workloads (can mount any service account), get/list on secrets, <code>nodes/proxy</code>, and approve on CertificateSigningRequests.',
    tags: ['RBAC', 'Privilege escalation']
  },
  {
    id: 'cncf-kcsa-fc-86',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are the TokenReview and SubjectAccessReview APIs used for?',
    hint: 'Ask the API server about identity, then about permission.',
    back: '<strong>TokenReview</strong> asks the API server to validate a bearer token (optionally for specific audiences) and return the user, groups and extra fields; services and the kubelet use it to authenticate callers. <strong>SubjectAccessReview</strong> asks whether a given user may perform a verb on a resource; the kubelet uses it for webhook authorization and <code>kubectl auth can-i</code> uses the self-subject variant.',
    tags: ['API server', 'TokenReview']
  },
  {
    id: 'cncf-kcsa-fc-87',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How does user impersonation work, and what does the audit log record?',
    hint: 'Headers, and two identities.',
    back: 'A caller holding the <code>impersonate</code> verb sends <code>Impersonate-User</code>, <code>Impersonate-Group</code>, <code>Impersonate-Uid</code> or <code>Impersonate-Extra-*</code> headers (<code>kubectl --as</code>, <code>--as-group</code>); the API server authorizes the impersonation, then evaluates the request as the target identity. The audit event records both the <strong>real user</strong> and the <strong>impersonatedUser</strong>. Limit impersonate with <code>resourceNames</code>.',
    tags: ['API server', 'Impersonation']
  },
  {
    id: 'cncf-kcsa-fc-88',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How do you check what you, or someone else, is allowed to do?',
    hint: 'kubectl auth ...',
    back: '<code>kubectl auth can-i delete pods -n prod</code> answers yes or no for you; <code>kubectl auth can-i --list -n prod</code> lists your permissions there; add <code>--as=user</code> or <code>--as=system:serviceaccount:ns:name</code> to check another identity (requires impersonate). <code>kubectl auth whoami</code> shows how the API server sees you.',
    tags: ['API server', 'kubectl']
  },
  {
    id: 'cncf-kcsa-fc-89',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which kube-apiserver settings configure OIDC authentication, and what does the API server need from the identity provider?',
    hint: 'Issuer, client, claims, prefixes.',
    back: '<code>--oidc-issuer-url</code>, <code>--oidc-client-id</code> (expected audience), <code>--oidc-username-claim</code>, <code>--oidc-groups-claim</code>, and <code>--oidc-username-prefix</code>/<code>--oidc-groups-prefix</code> to avoid collisions with system names (or the equivalent structured configuration file). The API server only fetches the issuer\'s <strong>discovery document and signing keys</strong> to verify tokens; kubectl gets tokens through a credential plugin such as kubelogin.',
    tags: ['API server', 'OIDC']
  },
  {
    id: 'cncf-kcsa-fc-90',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does structured authentication configuration add over the --oidc-* flags?',
    hint: 'More than one issuer, and rules.',
    back: 'An <strong>AuthenticationConfiguration</strong> file (<code>--authentication-config</code>, stable since v1.34 after alpha in 1.29 and beta in 1.30) supports <strong>multiple JWT issuers</strong>, <strong>CEL expressions</strong> to validate claims and map usernames and groups, audience lists, and <strong>reloading without restarting</strong> the API server. It replaces the single-issuer, restart-to-change <code>--oidc-*</code> flags, which cannot be combined with it.',
    tags: ['API server', 'OIDC', 'Authentication']
  },
  {
    id: 'cncf-kcsa-fc-91',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does kube-controller-manager do, and how does it reach cluster state?',
    hint: 'Many loops, one client.',
    back: 'It runs the core <strong>control loops</strong>: node lifecycle, ReplicaSet, Deployment, Job, EndpointSlice, namespace, service account and token, garbage collector, certificate signing and more. Each loop watches desired state and reconciles actual state. It reads and writes <strong>only through the API server</strong>, never etcd directly, using the credentials in its kubeconfig or per-controller service accounts.',
    tags: ['Controller manager']
  },
  {
    id: 'cncf-kcsa-fc-92',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'List the kube-controller-manager settings the CIS benchmark checks.',
    hint: 'Identity, keys, CA, listener, debug, GC.',
    back: '<ul><li><code>--use-service-account-credentials=true</code></li><li><code>--service-account-private-key-file</code> set</li><li><code>--root-ca-file</code> set</li><li><code>--bind-address=127.0.0.1</code></li><li><code>--profiling=false</code></li><li><code>--terminated-pod-gc-threshold</code> set to a sensible value</li><li><code>RotateKubeletServerCertificate</code> not disabled</li><li>kubeconfig file mode 600, owned by root</li></ul>',
    tags: ['Controller manager', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-93',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which component holds which half of the service account token signing key pair?',
    hint: 'Sign vs verify.',
    back: '<strong>kube-apiserver</strong> signs TokenRequest (projected) tokens with <code>--service-account-signing-key-file</code>, stamps <code>--service-account-issuer</code>, and verifies tokens using the public keys in <code>--service-account-key-file</code>. <strong>kube-controller-manager</strong> signs legacy Secret-based tokens with <code>--service-account-private-key-file</code>. To rotate, add the new public key to the API server\'s verification list before switching signers, and remove the old one only after old tokens expire.',
    tags: ['Service account tokens', 'Key management']
  },
  {
    id: 'cncf-kcsa-fc-94',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which built-in CSR signers does Kubernetes have, and which are auto-approved?',
    hint: 'Client, kubelet client, kubelet serving, legacy.',
    back: '<code>kubernetes.io/kube-apiserver-client</code>: user client certs, <strong>never auto-approved</strong>. <code>kubernetes.io/kube-apiserver-client-kubelet</code>: kubelet client certs, <strong>may be auto-approved</strong> for bootstrapping nodes. <code>kubernetes.io/kubelet-serving</code>: kubelet serving certs, <strong>never auto-approved</strong> by the controller manager. <code>kubernetes.io/legacy-unknown</code>: not signed by the built-in controller.',
    tags: ['Certificates', 'Controller manager']
  },
  {
    id: 'cncf-kcsa-fc-95',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What is the kube-root-ca.crt ConfigMap and which component maintains it?',
    hint: 'One per namespace.',
    back: 'The controller manager\'s <strong>root CA certificate publisher</strong> writes the cluster CA bundle (from <code>--root-ca-file</code>) into a <code>kube-root-ca.crt</code> ConfigMap in <strong>every namespace</strong>. Projected service account volumes include it as <code>ca.crt</code>, so pods can verify the API server\'s serving certificate instead of skipping TLS verification. It contains only the public certificate.',
    tags: ['Controller manager', 'TLS']
  },
  {
    id: 'cncf-kcsa-fc-96',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Kubernetes cannot revoke client certificates. How do you limit the damage of a leaked one?',
    hint: 'Lifetime, authorization, and a last resort.',
    back: 'Keep lifetimes short (<code>--cluster-signing-duration</code> or <code>expirationSeconds</code> on the CSR); <strong>remove the user\'s RoleBindings</strong>, which works unless the certificate carries <code>system:masters</code>; prefer <strong>OIDC</strong> for humans so access ends when the IdP account is disabled; and as a last resort <strong>rotate the cluster CA</strong>, which invalidates every certificate it signed.',
    tags: ['Certificates', 'Revocation']
  },
  {
    id: 'cncf-kcsa-fc-97',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does the cloud-controller-manager run, and why is it separate from kube-controller-manager?',
    hint: 'Cloud-specific loops and credentials.',
    back: 'It runs the cloud-specific loops: <strong>node</strong> (addresses, zones, deleting nodes whose instances are gone), <strong>route</strong> and <strong>service</strong> (cloud load balancers). In-tree cloud providers have been removed from Kubernetes, so each provider ships its own CCM. Separation keeps <strong>cloud credentials</strong> out of the core controller manager and lets the provider release and scope them independently.',
    tags: ['Cloud controller manager']
  },
  {
    id: 'cncf-kcsa-fc-98',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Where do control plane static pod manifests live on a kubeadm node, and why protect them?',
    hint: 'The kubelet watches a directory.',
    back: 'In <strong><code>/etc/kubernetes/manifests</code></strong> (the kubelet\'s <code>staticPodPath</code>). The kubelet runs whatever it finds there, so anyone who can write to it can change API server, controller manager or etcd flags, or start arbitrary privileged pods. The CIS benchmark requires the files to be mode 600 or stricter and owned by root.',
    tags: ['Control plane', 'File permissions']
  },
  {
    id: 'cncf-kcsa-fc-99',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How has handling of legacy service account token Secrets changed since 1.24?',
    hint: 'Stop creating, track, clean up.',
    back: '<strong>1.24</strong>: token Secrets are no longer auto-created for service accounts; pods get projected tokens. The API server then began <strong>tracking last use</strong> of remaining legacy tokens with a label. The controller manager\'s <strong>legacy token cleaner</strong> (stable since 1.30) marks auto-generated tokens unused for a year (<code>--legacy-service-account-token-clean-up-period</code>) as invalid and later deletes them. Manually created token Secrets still work and should be avoided.',
    tags: ['Service account tokens', 'Legacy credentials']
  },
  {
    id: 'cncf-kcsa-fc-100',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Mutating vs validating admission: what can each do?',
    hint: 'Change vs judge.',
    back: '<strong>Mutating</strong> admission can <strong>modify</strong> the object (inject sidecars, set defaults, add labels) and runs first. <strong>Validating</strong> admission can only <strong>accept or reject</strong> and runs after all mutation, so it sees the final object. Both exist as built-in plugins and as webhooks; ValidatingAdmissionPolicy (stable) and the newer MutatingAdmissionPolicy provide in-process CEL equivalents.',
    tags: ['Admission control']
  }
];

export default CNCF_KCSA_FLASHCARDS_4;
