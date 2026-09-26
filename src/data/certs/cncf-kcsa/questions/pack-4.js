export const CNCF_KCSA_QUESTIONS_4 = [
  {
    id: "cncf-kcsa-76",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Unauthenticated requests that list namespaces",
    scenario: "A penetration tester sent requests with no credentials to a company's kube-apiserver and received a list of namespaces instead of an error. Investigation found a ClusterRoleBinding, created years ago for a monitoring tool, that grants a read role to the system:anonymous user.",
    question: "What should the platform team do?",
    options: [
      { id: 'A', text: "Keep the binding but switch the authorization mode from RBAC to Node so anonymous users get less access." },
      { id: 'B', text: "Delete the binding and disable anonymous authentication, or limit anonymous access to health endpoints." },
      { id: 'C', text: "Keep the binding but enable audit logging at Metadata level so anonymous listings are at least recorded." },
      { id: 'D', text: "Keep the binding but move the API server to a non-default port so that scanners stop discovering it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When anonymous authentication is enabled, requests without credentials are treated as the user system:anonymous in the group system:unauthenticated, so any role bound to them is available to the whole network. Removing the binding closes the hole, and turning anonymous authentication off, or restricting it to health endpoints where the version supports that, prevents a repeat. A different port is obscurity. Audit logging records the exposure without stopping it. The Node authorizer only handles requests from kubelets; removing RBAC would break authorization for every other user rather than fixing the binding.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#anonymous-requests",
    tags: ["API server", "Anonymous authentication", "RBAC"]
  },
  {
    id: "cncf-kcsa-77",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "An inherited cluster where every request succeeds",
    scenario: "A company acquired a startup whose self-managed cluster lets any authenticated user perform any action, even users with no RoleBindings at all. The kube-apiserver manifest shows the flag --authorization-mode=AlwaysAllow.",
    question: "Which configuration should replace it?",
    options: [
      { id: 'A', text: "Set --authorization-mode=ABAC with a policy file that grants every existing user full cluster access." },
      { id: 'B', text: "Set --authorization-mode=AlwaysDeny and add RoleBindings until the required users can work again." },
      { id: 'C', text: "Keep AlwaysAllow and enable the NodeRestriction admission plugin so that kubelets are limited instead." },
      { id: 'D', text: "Set --authorization-mode=Node,RBAC so kubelets use the Node authorizer and everyone else uses RBAC." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AlwaysAllow authorizes every request, so authentication becomes the only barrier; the recommended configuration is Node,RBAC, where the Node authorizer scopes kubelet requests and RBAC evaluates everyone else against explicit bindings. AlwaysDeny blocks all requests, and RoleBindings have no effect because RBAC is not in the chain, so it would never let users work again. NodeRestriction limits kubelet writes but does nothing about AlwaysAllow for all other users. ABAC is a legacy, file-based mode that requires API server restarts to change, and granting everyone full access reproduces the original problem.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/",
    tags: ["API server", "Authorization modes", "RBAC"]
  },
  {
    id: "cncf-kcsa-78",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Database passwords stored in a custom resource",
    scenario: "A fintech's cluster encrypts Secrets at rest with a KMS provider. A third-party database operator, however, stores each database's admin password in a field of its own DatabaseCluster custom resource, and an etcd snapshot review showed those passwords in plain text.",
    question: "Which API server change protects these values at rest?",
    options: [
      { id: 'A', text: "Move the operator to its own namespace so its custom resources are stored in a separate etcd keyspace." },
      { id: 'B', text: "Enable the NodeRestriction admission plugin so that kubelets cannot read the DatabaseCluster objects." },
      { id: 'C', text: "Enable TLS between the API server and etcd so the custom resources are encrypted while in transit." },
      { id: 'D', text: "Add the custom resource to the EncryptionConfiguration resources list, then rewrite existing objects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Encryption at rest applies only to the resources named in the EncryptionConfiguration; listing the custom resource (for example databaseclusters.db.example.com), or a wildcard where appropriate, makes the API server encrypt it before writing to etcd, and rewriting existing objects encrypts what is already stored. Ideally the operator would reference a Secret instead. NodeRestriction limits what kubelets can modify and has nothing to do with storage. TLS to etcd protects data on the wire but leaves it readable in snapshots. Namespaces are only a key prefix within the same etcd database and do not encrypt anything.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["API server", "Encryption at rest", "Custom resources"]
  },
  {
    id: "cncf-kcsa-79",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "An old checklist item about the insecure port",
    scenario: "A bank's hardening checklist, written in 2018, requires auditors to confirm that the kube-apiserver insecure port is set to 0. The bank's clusters now run a current Kubernetes release, and an auditor cannot find the flag in the manifest at all.",
    question: "How should the checklist item be handled?",
    options: [
      { id: 'A', text: "Fail the check and open the insecure HTTP port on loopback only, which is what the item was aiming at." },
      { id: 'B', text: "Replace it with a check that the secure port serves TLS, since the insecure HTTP port no longer exists." },
      { id: 'C', text: "Add --insecure-port=0 to the manifest so the check passes, since the default opens HTTP on port 8080." },
      { id: 'D', text: "Replace it with a check that --secure-port=0 is set, so the API server stops listening on HTTPS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The unauthenticated, unauthorized HTTP port was deprecated for years and then removed; current API servers serve only HTTPS on the secure port (6443 by default), so the check should confirm TLS on that port with proper certificates. Adding the removed flag would stop the API server starting, and the claim that HTTP opens on 8080 by default is outdated. Opening an unauthenticated port, even on loopback, recreates the risk the item was written to eliminate. Setting the secure port to 0 would disable the API server's only listener.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["API server", "TLS", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-80",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A deleted service account whose token still works",
    scenario: "During a clean-up at a telecom, an engineer deleted a service account that an old CI system used, expecting its long-lived legacy token Secret to stop working. A later test showed the API server still accepted the token, and a CIS scan flags one kube-apiserver setting related to this behaviour.",
    question: "Which setting should be corrected?",
    options: [
      { id: 'A', text: "Set --anonymous-auth=false so that tokens for deleted accounts are treated as unauthenticated requests." },
      { id: 'B', text: "Set --service-account-lookup=true so the API server checks that a token's service account still exists." },
      { id: 'C', text: "Set --authorization-mode=Node,RBAC so that tokens for missing service accounts are denied by RBAC." },
      { id: 'D', text: "Set --service-account-issuer to a new URL so all previously issued tokens stop validating at once." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With --service-account-lookup enabled, which is the default and a CIS requirement, the API server confirms that the service account and token Secret referenced by a legacy token still exist in etcd, so deleting them revokes the token; someone had turned it off here. Disabling anonymous authentication does not affect a request that presents a validly signed token. RBAC may grant nothing to the deleted account, but a recreated account of the same name, or group-level bindings to all service accounts, would still apply, and the token would still authenticate. Changing the issuer invalidates every token in the cluster, a disruptive change aimed at a different problem.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["API server", "Service account tokens", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-81",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Fearing the default admission plugins were switched off",
    scenario: "To satisfy a CIS check, an engineer at a retailer added --enable-admission-plugins=NodeRestriction to the kube-apiserver manifest. A colleague now worries that this list replaced the defaults, so plugins such as ServiceAccount, LimitRanger and ResourceQuota are no longer running.",
    question: "What is the actual effect of the change?",
    options: [
      { id: 'A', text: "The API server refuses to start, because NodeRestriction must be listed after all the default plugins." },
      { id: 'B', text: "Only NodeRestriction now runs, because the flag lists the complete set of admission plugins to enable." },
      { id: 'C', text: "NodeRestriction runs in addition to the default plugins; defaults are turned off only by a disable flag." },
      { id: 'D', text: "NodeRestriction replaces the Node authorizer, so --authorization-mode no longer needs to include Node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "--enable-admission-plugins adds plugins to the set that is enabled by default, and default plugins are removed only with --disable-admission-plugins; the order of names in the flag does not matter because the API server runs plugins in its own fixed order. So ServiceAccount, LimitRanger, ResourceQuota and the other defaults keep running alongside NodeRestriction. The API server starts normally. NodeRestriction complements the Node authorizer rather than replacing it: the authorizer limits which objects a kubelet can access, and the admission plugin limits which Node and Pod objects it can modify.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["API server", "Admission plugins", "NodeRestriction"]
  },
  {
    id: "cncf-kcsa-82",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Reading the stage that rejected a deployment",
    scenario: "A developer at a media company runs kubectl apply for a new pod in the prod namespace and receives: pods is forbidden: User \"dana\" cannot create resource \"pods\" in API group \"\" in the namespace \"prod\". She assumes the Pod Security policy on the namespace blocked her pod.",
    question: "Which request stage produced this error, and what would fix it?",
    options: [
      { id: 'A', text: "Schema validation, so the manifest must be corrected because it uses an unknown or misspelled field." },
      { id: 'B', text: "Authentication, so she needs a new client certificate that the API server's configured CA will accept." },
      { id: 'C', text: "Authorization, so an administrator must grant create on pods in prod through a Role and RoleBinding." },
      { id: 'D', text: "Admission, so the pod spec must be changed to satisfy the Pod Security level enforced on the namespace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The API server authenticates the request first, then authorizes it, then runs admission. The message names a known user and says she cannot create the resource, which is the authorizer's denial; she needs RBAC permission to create pods in prod. An authentication failure returns 401 Unauthorized and has no username. Pod Security rejections come from admission and say that the pod violates a named policy level, listing the offending fields. Schema errors describe unknown or invalid fields rather than a user's rights.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/controlling-access/",
    tags: ["API server", "Request flow", "Authorization"]
  },
  {
    id: "cncf-kcsa-83",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Checking a permission before trying it",
    scenario: "A new SRE at a retailer wants to confirm whether their account is allowed to delete Deployments in the payments namespace before an incident drill, without actually deleting anything or asking an administrator to read the RBAC objects for them.",
    question: "Which command answers the question?",
    options: [
      { id: 'A', text: "kubectl auth can-i delete deployments -n payments, which asks the API server to evaluate the request." },
      { id: 'B', text: "kubectl get rolebindings -n payments -o yaml, then reading each binding's subjects and referenced roles." },
      { id: 'C', text: "kubectl api-resources --namespaced=true, which lists the resource types they are allowed to use there." },
      { id: 'D', text: "kubectl delete deployment web -n payments --dry-run=client, which simulates the delete on the client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl auth can-i sends a SelfSubjectAccessReview, and the API server runs the real authorizers for that user and returns yes or no without performing the action. Reading RoleBindings may itself be forbidden, misses ClusterRoleBindings and group memberships, and requires manual evaluation. api-resources lists the resource types the server offers, not the caller's permissions. A client-side dry run never contacts the authorizer, so it succeeds regardless of permissions.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access",
    tags: ["API server", "Authorization", "kubectl"]
  },
  {
    id: "cncf-kcsa-84",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "A support tool allowed to act as anyone",
    scenario: "A helpdesk tool's service account at an insurer was granted a ClusterRole with the impersonate verb on users and groups so that agents could see the cluster as a customer's team does. The tool itself has only read permissions for its own identity.",
    question: "Why is this configuration dangerous?",
    options: [
      { id: 'A', text: "The impersonate verb bypasses authentication, so anyone reaching the tool can call the API without credentials." },
      { id: 'B', text: "Impersonation copies the target user's client certificate to the tool, which can then be used elsewhere." },
      { id: 'C', text: "The tool can impersonate any user or group, including cluster administrators, and inherit their access." },
      { id: 'D', text: "Impersonation disables audit logging for the impersonated requests, so the tool's actions leave no trace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The impersonate verb lets the holder send requests as another user or group, and the request is then authorized as that identity; unrestricted impersonation of users and groups therefore lets the tool act as any administrator or as system:masters, whatever its own read-only role says. It should be limited with resourceNames to specific identities. The tool still authenticates as itself before impersonating. Audit events record both the real user and the impersonated one. No credentials of the target are copied; the API server simply evaluates the request as that identity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation",
    tags: ["API server", "Impersonation", "Privilege escalation"]
  },
  {
    id: "cncf-kcsa-85",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "An aggregated API registered without certificate checks",
    scenario: "A review of a bank's cluster finds that the APIService object registering a third-party metrics API sets insecureSkipTLSVerify to true. The kube-apiserver proxies requests for that API group, including callers' identities, to a Service backed by the vendor's pods.",
    question: "What is the risk, and what is the fix?",
    options: [
      { id: 'A', text: "Callers skip authentication for that API group; set the vendor's pods to run as non-root to compensate." },
      { id: 'B', text: "RBAC is bypassed for that API group; replace the APIService with a CustomResourceDefinition of the same name." },
      { id: 'C', text: "The vendor's pods can read etcd directly; move the APIService to a namespace with a default-deny policy." },
      { id: 'D', text: "The API server cannot tell if it reaches the real backend; set caBundle so it verifies the serving certificate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With insecureSkipTLSVerify, kube-apiserver does not verify the aggregated server's certificate, so anything able to intercept or impersonate the backing Service could receive proxied requests, including user identity headers, and return forged responses; providing the correct caBundle in the APIService restores verification. Callers are still authenticated and authorized by kube-apiserver before proxying. The setting does not give the vendor's pods any etcd access. RBAC still applies to the aggregated API's resources, and swapping in a CRD would change how the API works rather than fix the TLS trust.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-aggregation-layer/",
    tags: ["API server", "API aggregation", "TLS"]
  },
  {
    id: "cncf-kcsa-86",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "One-hour projected tokens that last a year",
    scenario: "A bank's security team decoded a projected service account token taken from a pod and found an expiry one year away, although the pod spec never set expirationSeconds and the team expected one-hour tokens. The kubelet is refreshing the file normally, and every client library in use rereads the token when it changes.",
    question: "What explains the long expiry, and how can it be tightened?",
    options: [
      { id: 'A', text: "The kubelet signs tokens with a one-year default; set --service-account-max-token-expiration on the kubelet." },
      { id: 'B', text: "The API server extends default tokens for older clients; set --service-account-extend-token-expiration=false." },
      { id: 'C', text: "The token is a legacy Secret-based token; delete the Secret so a projected token is mounted in its place." },
      { id: 'D', text: "The pod uses the default service account; create a dedicated one so that its tokens expire after an hour." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "To avoid breaking clients that never reload their token, kube-apiserver by default (--service-account-extend-token-expiration=true) issues admission-injected projected tokens with an extended validity of up to a year while the kubelet still refreshes them roughly hourly, and it annotates audit events when a stale token is used. Once all clients reload tokens, setting the flag to false makes tokens expire at their requested lifetime. Tokens are signed by the API server, not the kubelet, and --service-account-max-token-expiration is an API server flag. A projected token, not a legacy Secret token, was decoded here. The service account's name has no effect on token lifetime.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",
    tags: ["API server", "Service account tokens", "Token lifetime"]
  },
  {
    id: "cncf-kcsa-87",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Alpha APIs switched on in production",
    scenario: "A platform team at an airline enabled every alpha API group and feature gate on its production kube-apiserver two years ago while evaluating new features, and nobody uses most of them today. A security review asks how to reduce the API server's attack surface.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Keep them enabled but raise audit logging to RequestResponse level for every alpha API group served." },
      { id: 'B', text: "Keep them enabled but place the API server behind a web application firewall with Kubernetes rules." },
      { id: 'C', text: "Disable the unused alpha APIs and feature gates, leaving only stable features the platform relies on." },
      { id: 'D', text: "Keep them enabled but bind no RBAC roles to the alpha resources, so no user can call those APIs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Alpha features are disabled by default because they may be buggy, change without notice and receive less security scrutiny; turning off unused alpha API groups (through --runtime-config) and feature gates removes code paths an attacker could exploit. A WAF adds complexity and cannot understand every Kubernetes request safely. Withholding RBAC limits who can call the new resources, but the feature code still runs inside the API server and controllers, and cluster administrators still have access. Richer audit logging records use but reduces no exposure.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/",
    tags: ["API server", "Attack surface", "Feature gates"]
  },
  {
    id: "cncf-kcsa-88",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "How an in-cluster app should authenticate",
    scenario: "A developer at a logistics firm is writing a controller that runs as a Deployment and needs to list pods through the Kubernetes API. She asks which authentication method the API server expects workloads running inside the cluster to use.",
    question: "What should she use?",
    options: [
      { id: 'A', text: "A service account token for a dedicated service account, projected into the pod's filesystem." },
      { id: 'B', text: "A line in the API server's static token file, mounted into the pod through a ConfigMap." },
      { id: 'C', text: "Her own OIDC ID token from the corporate identity provider, refreshed by a sidecar container." },
      { id: 'D', text: "A client certificate and key issued to her personally, copied into the image at build time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service accounts are the identities Kubernetes provides for workloads; the kubelet projects a short-lived token for the pod's service account, client libraries use it automatically, and RBAC can grant that account exactly the rights the controller needs. A personal certificate baked into an image ties the workload to a human, cannot be revoked easily and leaks to anyone who pulls the image. The static token file is a legacy mechanism with long-lived tokens that need an API server restart to change. A human's OIDC token would make the controller act as her and stop working when she leaves.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["API server", "Service accounts", "Authentication"]
  },
  {
    id: "cncf-kcsa-89",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Every controller running as one identity",
    scenario: "A CIS scan of a self-managed cluster flags that kube-controller-manager runs with --use-service-account-credentials=false. The team lead asks what practical security difference enabling the flag would make.",
    question: "What does enabling the flag change?",
    options: [
      { id: 'A', text: "Each controller authenticates with its own service account, so its RBAC can be limited to that controller." },
      { id: 'B', text: "Service account tokens created by the controllers become non-expiring, so controllers never lose access." },
      { id: 'C', text: "The controller manager stops needing a kubeconfig, because it reads objects straight from the etcd store." },
      { id: 'D', text: "Every pod in the cluster must use a service account token instead of a certificate to reach the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With --use-service-account-credentials=true, the controller manager starts each controller with credentials for a dedicated service account in kube-system (such as replicaset-controller), and the default RBAC grants each one only the permissions that controller needs; with the flag off, every controller shares the controller manager's own broad identity. The controller manager still talks to the API server through its kubeconfig and never reads etcd directly. The flag has no effect on how application pods authenticate. It does not change token lifetimes.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#controller-roles",
    tags: ["Controller manager", "Least privilege", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-90",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Controller manager port open to the worker subnet",
    scenario: "A network scan of a self-managed cluster shows kube-controller-manager's secure port, 10257, answering from every address in the worker node subnet. The port serves health and metrics endpoints, and no remote system needs to scrape it.",
    question: "Which change is recommended?",
    options: [
      { id: 'A', text: "Enable the NodeRestriction admission plugin so kubelets on workers cannot reach the controller port." },
      { id: 'B', text: "Set --bind-address=127.0.0.1 so the port listens only on loopback, where local probes can reach it." },
      { id: 'C', text: "Apply a NetworkPolicy in kube-system that denies ingress to the controller manager's static pod." },
      { id: 'D', text: "Set --secure-port=0 so the controller manager exposes no listener at all, including health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Binding the controller manager to 127.0.0.1, as the CIS benchmark recommends, keeps its health and metrics endpoints available to local liveness probes while removing them from the network. Disabling the secure port entirely breaks health checking. NodeRestriction limits what kubelets can modify through the API server and has nothing to do with network access to a control plane port. The controller manager's static pod uses host networking, so NetworkPolicy, which applies to pod-network traffic, does not protect it.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
    tags: ["Controller manager", "Network exposure", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-91",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Profiling handlers left on in the control plane",
    scenario: "A hardening review of a government agency's cluster finds kube-controller-manager running with its default profiling setting. The operators never use Go profiling in production and want to remove functionality they do not need.",
    question: "Which change does the CIS benchmark recommend?",
    options: [
      { id: 'A', text: "Set --v=0 so the controller manager writes fewer log lines that might reveal profiling data." },
      { id: 'B', text: "Set --profiling=false so the controller manager no longer serves its pprof profiling handlers." },
      { id: 'C', text: "Set --contention-profiling=true so lock contention is profiled only when profiling is enabled." },
      { id: 'D', text: "Set --leader-elect=false so only one controller manager instance can serve profiling data." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Profiling is enabled by default and exposes /debug/pprof endpoints that reveal detailed internal performance and runtime information and can add load; the CIS benchmark recommends --profiling=false on the controller manager (and similarly on the API server and scheduler) when it is not needed. Log verbosity is unrelated to the profiling handlers. Contention profiling adds more profiling rather than removing it. Disabling leader election harms availability and does not turn profiling off.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
    tags: ["Controller manager", "Attack surface", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-92",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Pods that cannot verify who the API server is",
    scenario: "Applications in a self-managed cluster that call the Kubernetes API are configured to skip TLS verification because, the developers say, there is no cluster CA certificate available to them in the pod. A CIS scan also flags that kube-controller-manager has no --root-ca-file set.",
    question: "What should the platform team fix?",
    options: [
      { id: 'A', text: "Set --insecure-skip-tls-verify on the API server instead of --root-ca-file so clients need not verify TLS." },
      { id: 'B', text: "Set --root-ca-file on the controller manager so the cluster CA bundle is published for pods to trust." },
      { id: 'C', text: "Give each application a copy of the admin kubeconfig, which already embeds the cluster CA certificate." },
      { id: 'D', text: "Mount the cluster CA private key into application pods so they can build a trust chain for the API server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With --root-ca-file set, the controller manager publishes the cluster CA bundle into every namespace (the kube-root-ca.crt ConfigMap, included in projected service account volumes), so pods can verify the API server's serving certificate instead of skipping verification. Handing out the CA private key would let anyone mint trusted certificates. There is no server-side flag that makes client verification unnecessary; skipping verification is a client choice that invites interception. The admin kubeconfig grants full cluster control and must never be given to applications.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
    tags: ["Controller manager", "TLS", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-93",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Who may approve client certificate requests",
    scenario: "To speed up onboarding, a platform team gave its self-service portal's service account permission to approve CertificateSigningRequests for the kubernetes.io/kube-apiserver-client signer. The kube-controller-manager signs approved requests with the cluster CA. A security architect flags this as a critical risk.",
    question: "Why is the risk critical?",
    options: [
      { id: 'A', text: "Approved certificates bypass RBAC, so every certificate signed by the portal has full cluster access." },
      { id: 'B', text: "Permission to approve requests also gives the portal the cluster CA private key, which it could export." },
      { id: 'C', text: "Approved certificates are valid for ten years by default, so issued credentials outlive their holders." },
      { id: 'D', text: "The portal can approve a request naming any user or group, such as system:masters, and gain full access." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kube-apiserver-client signer signs whatever subject the request contains once it is approved, and the organisation field becomes the user's groups; whoever can approve such requests can therefore mint a certificate for system:masters, a group that bypasses RBAC entirely, and certificates cannot be revoked before they expire. Approval rights must be tightly limited, ideally with validation of requested subjects. The default signing duration is one year, not ten. Approving does not expose the CA key, which stays with the controller manager. Ordinary client certificates are subject to RBAC like any other identity; only the system:masters group bypasses it.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/",
    tags: ["Controller manager", "Certificates", "Privilege escalation"]
  },
  {
    id: "cncf-kcsa-94",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Loose permissions on controller-manager.conf",
    scenario: "A CIS scan of a kubeadm cluster reports that /etc/kubernetes/controller-manager.conf on the control plane nodes has mode 644, so any local user on those nodes can read it. The file holds the credentials kube-controller-manager uses to reach the API server.",
    question: "What should the operators do?",
    options: [
      { id: 'A', text: "Set the file to mode 600 or stricter, owned by root, so only root can read the controller's credentials." },
      { id: 'B', text: "Set the file to mode 666 so that the controller manager can update it when its certificate is rotated." },
      { id: 'C', text: "Leave it, because the file only holds the API server address and has no credentials that need protecting." },
      { id: 'D', text: "Copy the file into a ConfigMap in kube-system so RBAC, not file permissions, controls who can read it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "controller-manager.conf is a kubeconfig containing a client certificate and key for a highly privileged identity, so the CIS benchmark requires mode 600 or more restrictive and root ownership. It does contain credentials, not just the server address. Putting it in a ConfigMap would widen access, since ConfigMaps are readable by the built-in view role and are not treated as sensitive. World-writable permissions would let any local user replace the credentials or redirect the controller manager.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/implementation-details/",
    tags: ["Controller manager", "File permissions", "CIS Benchmark"]
  },
  {
    id: "cncf-kcsa-95",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Hundreds of thousands of finished pods kept around",
    scenario: "A data platform runs thousands of short batch jobs a day, and a CIS scan flags that kube-controller-manager uses the default --terminated-pod-gc-threshold. Operators notice etcd growing steadily and API list calls slowing as completed and failed pods accumulate.",
    question: "What does tuning this flag achieve?",
    options: [
      { id: 'A', text: "It sets how many restarts a failing container may have before its pod is garbage-collected at once." },
      { id: 'B', text: "It sets how long a pod may run before the controller manager terminates it as a runaway workload." },
      { id: 'C', text: "It caps how many terminated pods may exist before the pod garbage collector starts deleting them." },
      { id: 'D', text: "It limits how many pods a Job may create in parallel so that batch work cannot flood the scheduler." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The terminated-pod garbage collector deletes terminated pods once their number exceeds --terminated-pod-gc-threshold (12500 by default); lowering it keeps finished pods from exhausting etcd and API server resources, which the CIS benchmark treats as an availability concern. The flag does not terminate running pods. Container restarts are governed by the pod's restart policy and back-off, not this threshold. Job parallelism is set on the Job itself.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
    tags: ["Controller manager", "Availability", "Garbage collection"]
  },
  {
    id: "cncf-kcsa-96",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Cloud credentials in the core controller process",
    scenario: "An older self-managed cluster on a public cloud still passes a cloud provider flag to kube-controller-manager, which runs with a cloud role able to manage load balancers, routes and volumes. The team is upgrading to a current Kubernetes release and wants the cloud-specific privileges isolated from the core controllers.",
    question: "What should the target design be?",
    options: [
      { id: 'A', text: "Run the provider's external cloud-controller-manager with its own scoped role, separate from the core." },
      { id: 'B', text: "Keep the in-tree provider but move kube-controller-manager to a worker node that has the cloud role." },
      { id: 'C', text: "Move the cloud role to every worker node so that the kubelets create load balancers and routes directly." },
      { id: 'D', text: "Keep the in-tree provider and reduce the cloud role to read-only so the controller cannot change anything." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The in-tree cloud provider integrations have been removed from Kubernetes, and cloud-specific control loops now run in a separate cloud-controller-manager maintained by each provider; running it as its own component with a narrowly scoped cloud role keeps those privileges out of kube-controller-manager and lets each be secured and updated independently. A read-only role would break Service load balancers, routes and volume attachment, and the in-tree code no longer exists in current releases. Giving every node the role spreads cloud privileges to every workload host. Moving the controller manager to a worker node places control plane credentials beside application pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cloud-controller/",
    tags: ["Controller manager", "Cloud controller manager", "Least privilege"]
  },
  {
    id: "cncf-kcsa-97",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Service account token Secrets from years ago",
    scenario: "A security audit of a cluster upgraded continuously since 2019 finds dozens of Secrets of type kubernetes.io/service-account-token that were auto-created before 1.24, several of them not used for over a year. The auditor asks what current Kubernetes does about such tokens by default.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "The controller manager marks legacy tokens unused for a year as invalid and later deletes them." },
      { id: 'B', text: "They stay valid forever unless deleted, because the API server has no way to track legacy token usage." },
      { id: 'C', text: "They were deleted automatically in the 1.24 upgrade, so the Secrets the auditor found are inert copies." },
      { id: 'D', text: "They were converted into short-lived projected tokens during the upgrade, so no action is required now." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Since Kubernetes 1.24 legacy token Secrets are no longer auto-created, the API server records when each remaining one was last used, and the legacy service account token cleaner in kube-controller-manager labels auto-generated tokens unused for the clean-up period (one year by default) as invalid and deletes them after a further period; auditors should still review and remove them proactively. Existing Secrets were not converted into projected tokens. Usage is tracked through a last-used label. The 1.24 change stopped creating new token Secrets but did not delete existing ones.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/",
    tags: ["Controller manager", "Service account tokens", "Legacy credentials"]
  },
  {
    id: "cncf-kcsa-98",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Matching a control plane port to its component",
    scenario: "A firewall review at a telecom lists four control plane listening ports: 6443, 10257, 10259 and 2379. The reviewer needs to confirm which one belongs to kube-controller-manager before writing a rule that restricts it to loopback-only use.",
    question: "Which port is kube-controller-manager's secure port by default?",
    options: [
      { id: 'A', text: "10259, the HTTPS port serving health and metrics for the scheduler component." },
      { id: 'B', text: "10257, the HTTPS port serving health and metrics for the controller manager." },
      { id: 'C', text: "2379, the client port the API server uses to read and write the cluster store." },
      { id: 'D', text: "6443, the HTTPS port that all clients and nodes use to reach the cluster API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kube-controller-manager serves its health and metrics endpoints over HTTPS on port 10257 by default. Port 6443 is the kube-apiserver's secure port, which clients and kubelets must reach. Port 10259 is kube-scheduler's secure port. Port 2379 is etcd's client port, used by the API server.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Controller manager", "Ports", "Network security"]
  },
  {
    id: "cncf-kcsa-99",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Year-long client certificates that cannot be revoked",
    scenario: "A consultancy issues short-term contractors Kubernetes client certificates through the CSR API. When a contract ends early, the team discovers there is no way to revoke an issued certificate, and the controller manager signs them with its default duration.",
    question: "Which control plane setting limits the exposure?",
    options: [
      { id: 'A', text: "Lower the controller manager's --terminated-pod-gc-threshold so departed contractors' certs are cleaned up." },
      { id: 'B', text: "Set --root-ca-file to a new CA so that certificates signed with the previous CA are rejected at once." },
      { id: 'C', text: "Lower --cluster-signing-duration on the controller manager so issued client certificates expire sooner." },
      { id: 'D', text: "Enable --use-service-account-credentials so contractor certificates are tied to service account tokens." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes has no certificate revocation checking, so the certificate's lifetime is the exposure window; lowering --cluster-signing-duration (one year by default), or setting spec.expirationSeconds on each request, makes issued certificates expire quickly, and OIDC is the better long-term answer for humans. The pod garbage collector threshold has nothing to do with certificates. use-service-account-credentials affects how controllers authenticate, not user certificates. root-ca-file only controls the CA bundle published for pods to verify the API server, not which client certificates the API server accepts.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/",
    tags: ["Controller manager", "Certificates", "Revocation"]
  },
  {
    id: "cncf-kcsa-100",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d2",
    domainName: "Kubernetes Cluster Component Security",
    title: "Old protocol versions accepted on port 6443",
    scenario: "A compliance scanner at an insurer reports that the self-managed cluster's kube-apiserver still negotiates TLS 1.0 and 1.1 and offers several weak cipher suites on port 6443. Every current client in use supports TLS 1.2 or later.",
    question: "Which change resolves the finding?",
    options: [
      { id: 'A', text: "Disable anonymous authentication so that clients using old TLS versions are refused at login." },
      { id: 'B', text: "Move the API server's secure port from 6443 to 443 so standard web scanners assess it properly." },
      { id: 'C', text: "Set --tls-min-version to TLS 1.2 or 1.3 and restrict --tls-cipher-suites to strong AEAD suites." },
      { id: 'D', text: "Reissue the serving certificate with a 4096-bit RSA key so that the handshake uses stronger crypto." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kube-apiserver's --tls-min-version and --tls-cipher-suites flags control the protocol versions and cipher suites it negotiates; setting a TLS 1.2 or 1.3 minimum with strong AEAD suites, as the CIS benchmark recommends, removes the weak options. A larger key does not stop old protocol versions or weak ciphers being negotiated. Anonymous authentication happens after the TLS handshake and is unrelated to protocol versions. Changing the port leaves the same TLS configuration in place.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["API server", "TLS", "CIS Benchmark"]
  }
];

export default CNCF_KCSA_QUESTIONS_4;
