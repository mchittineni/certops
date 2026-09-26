export const CNCF_KCNA_FLASHCARDS_11 = [
  {
    id: 'cncf-kcna-fc-251',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does a Pod look like to the network before and after any NetworkPolicy selects it?',
    hint: 'Isolation is opt-in, per direction.',
    back: 'By default a Pod is <strong>non-isolated</strong>: it accepts traffic from and sends traffic to anywhere. As soon as one NetworkPolicy with <code>Ingress</code> in its policyTypes selects the Pod, it becomes <strong>isolated for ingress</strong> and only traffic allowed by some policy gets in; the same applies separately for <code>Egress</code>. Policies are additive allow-lists, so there is no deny rule and no ordering.',
    tags: ['NetworkPolicy', 'Isolation']
  },
  {
    id: 'cncf-kcna-fc-252',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'NetworkPolicy from/to: podSelector vs namespaceSelector vs ipBlock',
    hint: 'Which namespace does a bare podSelector look in?',
    back: '<strong>podSelector</strong> alone matches Pods in the <strong>policy\'s own namespace</strong>. <strong>namespaceSelector</strong> matches all Pods in namespaces whose labels match. Both inside <strong>one</strong> list item are ANDed (these Pods in those namespaces). <strong>ipBlock</strong> matches CIDR ranges and is intended for traffic from outside the cluster, since Pod IPs are ephemeral.',
    tags: ['NetworkPolicy', 'Selectors']
  },
  {
    id: 'cncf-kcna-fc-253',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Who actually enforces a NetworkPolicy?',
    hint: 'Not the API server, not kube-proxy.',
    back: 'The <strong>network (CNI) plugin</strong>. The API server only stores the object; plugins such as Calico or Cilium translate it into packet filtering on each node. On a plugin without NetworkPolicy support the object is accepted but <strong>silently ignored</strong>.',
    tags: ['NetworkPolicy', 'CNI']
  },
  {
    id: 'cncf-kcna-fc-254',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What DNS name does a Service get, and how short can you write it?',
    hint: 'Four labels plus the cluster domain.',
    back: 'Full name: <code>SERVICE.NAMESPACE.svc.cluster.local</code> (the last part is the cluster domain). From a Pod in the <strong>same namespace</strong> the bare <code>SERVICE</code> works; from another namespace <code>SERVICE.NAMESPACE</code> works because of the search domains in the Pod\'s /etc/resolv.conf. Named ports also get SRV records.',
    tags: ['DNS', 'Services']
  },
  {
    id: 'cncf-kcna-fc-255',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What changes when a Service is headless (clusterIP: None)?',
    hint: 'No virtual IP, so DNS has to do the work.',
    back: 'No ClusterIP is allocated and <strong>kube-proxy does no load balancing</strong> for the Service. Cluster DNS instead returns <strong>A/AAAA records for every ready Pod</strong> behind the selector, so clients choose endpoints themselves (client-side load balancing, as gRPC and many database drivers do). Paired with a StatefulSet, each Pod also gets a stable DNS name such as <code>web-0.web.ns.svc.cluster.local</code>, which peers can address directly.',
    tags: ['Services', 'DNS', 'Headless Service']
  },
  {
    id: 'cncf-kcna-fc-256',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why does a default-deny egress NetworkPolicy break name resolution, and how do you fix it?',
    hint: 'Every lookup is itself an egress connection.',
    back: 'With <code>podSelector: {}</code>, <code>policyTypes: [Egress]</code> and no egress rules, selected Pods may send nothing, including DNS queries to CoreDNS, so connections by hostname fail even to allowed destinations. Add an egress rule allowing <strong>UDP and TCP port 53</strong> to the DNS Pods, for example <code>namespaceSelector</code> on <code>kubernetes.io/metadata.name: kube-system</code> plus <code>podSelector</code> <code>k8s-app: kube-dns</code>. Then allow each real destination separately.',
    tags: ['NetworkPolicy', 'DNS']
  },
  {
    id: 'cncf-kcna-fc-257',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How does a Service get both an IPv4 and an IPv6 ClusterIP in a dual-stack cluster?',
    hint: 'The default policy gives you only one family.',
    back: 'Set <code>spec.ipFamilyPolicy</code>: <strong>SingleStack</strong> (the default, one address), <strong>PreferDualStack</strong> (both families if the cluster has them, otherwise one) or <strong>RequireDualStack</strong> (fail if both are not available). <code>spec.ipFamilies</code> lists the families, and the first one is the primary that fills <code>clusterIP</code>; both appear in <code>clusterIPs</code>. The cluster needs IPv4 and IPv6 Pod and Service ranges and a CNI plugin that supports dual-stack (GA since 1.23).',
    tags: ['Dual-stack', 'Services']
  },
  {
    id: 'cncf-kcna-fc-258',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What does creating an Ingress object do on a cluster with no Ingress controller?',
    hint: 'An object is only as useful as whatever reconciles it.',
    back: 'Nothing. Ingress is only a set of rules; an <strong>Ingress controller</strong> (for example ingress-nginx, Traefik, or a cloud load balancer controller) must be running to watch Ingress objects and configure a proxy. Kubernetes does not ship one by default, and <code>ingressClassName</code> picks which controller handles the object.',
    tags: ['Ingress', 'Controllers']
  },
  {
    id: 'cncf-kcna-fc-259',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What are EndpointSlices and who maintains them?',
    hint: 'The successor of the Endpoints object.',
    back: 'EndpointSlices list the IPs and ports of the Pods backing a Service, along with readiness conditions, split into chunks (default up to 100 endpoints each) so large Services do not produce one huge object. The <strong>EndpointSlice controller</strong> in kube-controller-manager creates them from the Service selector; <strong>kube-proxy</strong> and DNS consume them. A Service with no ready endpoints has an empty slice.',
    tags: ['EndpointSlice', 'Services']
  },
  {
    id: 'cncf-kcna-fc-260',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Sidecar vs ambient (sidecarless) service mesh: where does the proxy run in each?',
    hint: 'One proxy per Pod, or shared proxies per node plus optional L7 hops.',
    back: '<strong>Sidecar mode</strong> (classic Istio, Linkerd) injects a proxy into every Pod: full L7 features, but each Pod pays CPU and memory for it and must restart to join or upgrade. <strong>Istio ambient mode</strong> (GA in Istio 1.24) splits the job: a per-node <strong>ztunnel</strong> DaemonSet gives L4 mTLS, identity and telemetry, and an optional <strong>waypoint</strong> Envoy proxy per namespace or service adds L7 routing and policy only where needed. Workloads join by labelling the namespace, with no sidecar injection.',
    tags: ['Service mesh', 'Istio']
  },
  {
    id: 'cncf-kcna-fc-261',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'externalTrafficPolicy: Cluster vs Local',
    hint: 'Even spread or real client IP; pick one.',
    back: '<strong>Cluster</strong> (default): any node accepts traffic and may forward it to a Pod on another node, applying SNAT, so the app sees a node IP but load spreads evenly. <strong>Local</strong>: a node only sends traffic to its own backend Pods, <strong>preserving the client source IP</strong>; nodes without a backend fail the load balancer health check and load can be uneven across Pods.',
    tags: ['Services', 'Traffic policy']
  },
  {
    id: 'cncf-kcna-fc-262',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What must a CNI plugin provide to satisfy the Kubernetes network model?',
    hint: 'Unique IPs, no NAT.',
    back: 'Every Pod gets its <strong>own IP address</strong>; all Pods can reach all other Pods on any node <strong>without NAT</strong>; agents on a node (such as the kubelet) can reach Pods on that node. How it is done (overlay such as VXLAN, BGP routing, eBPF) is up to the plugin. Service IPs and NetworkPolicy are layered on top.',
    tags: ['CNI', 'Network model']
  },
  {
    id: 'cncf-kcna-fc-263',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Name the 4C\'s of cloud native security, outermost first.',
    hint: 'Each layer trusts the one outside it.',
    back: '<strong>Cloud</strong> (or corporate data centre) → <strong>Cluster</strong> → <strong>Container</strong> → <strong>Code</strong>. Security at an inner layer cannot compensate for a weak outer one: well-written code does not help if the cloud account or the cluster API is exposed.',
    tags: ['4C\'s', 'Security model']
  },
  {
    id: 'cncf-kcna-fc-264',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'User accounts vs ServiceAccounts in Kubernetes',
    hint: 'Only one of them is an API object.',
    back: '<strong>User accounts</strong> are for humans, are global to the cluster and are <strong>not stored in Kubernetes</strong>; identity comes from X.509 client certs, OIDC tokens or an authenticating proxy. <strong>ServiceAccounts</strong> are <strong>namespaced API objects</strong> for workloads; Pods receive short-lived tokens for them. RBAC can bind either by name.',
    tags: ['Authentication', 'ServiceAccount']
  },
  {
    id: 'cncf-kcna-fc-265',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'The three stages every API request passes through before being stored',
    hint: 'Who, may they, is it acceptable.',
    back: '<strong>Authentication</strong> (who are you: certs, tokens, OIDC) → <strong>Authorization</strong> (may you do this verb on this resource: RBAC, Node, Webhook) → <strong>Admission control</strong> (mutating then validating plugins and webhooks may change or reject the object). Only then is it persisted to etcd.',
    tags: ['Authentication', 'Authorization', 'Admission']
  },
  {
    id: 'cncf-kcna-fc-266',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Role vs ClusterRole',
    hint: 'Scope of the definition, not of the binding.',
    back: 'A <strong>Role</strong> is namespaced and can only grant access to namespaced resources in its own namespace. A <strong>ClusterRole</strong> is cluster-wide and can grant access to cluster-scoped resources (Nodes, PersistentVolumes), non-resource URLs such as /healthz, or namespaced resources in any namespace, depending on how it is bound.',
    tags: ['RBAC', 'Role', 'ClusterRole']
  },
  {
    id: 'cncf-kcna-fc-267',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Which role/binding combinations are valid, and what scope does each give?',
    hint: 'There are three legal pairs, not four.',
    back: '<strong>Role + RoleBinding</strong>: that namespace only. <strong>ClusterRole + RoleBinding</strong>: the ClusterRole\'s rules applied <strong>only in the RoleBinding\'s namespace</strong> (the reuse pattern). <strong>ClusterRole + ClusterRoleBinding</strong>: every namespace plus cluster-scoped resources. A ClusterRoleBinding cannot reference a Role.',
    tags: ['RBAC', 'Bindings']
  },
  {
    id: 'cncf-kcna-fc-268',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Can you change the roleRef of an existing RoleBinding?',
    hint: 'Think immutable fields.',
    back: 'No. <code>roleRef</code> is <strong>immutable</strong>; to point a binding at a different role you delete and recreate it (<code>kubectl auth reconcile</code> can do this for you). This prevents someone with update rights on a binding from silently swapping in a more powerful role for its existing subjects.',
    tags: ['RBAC', 'RoleBinding']
  },
  {
    id: 'cncf-kcna-fc-269',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do you test what a user or ServiceAccount is allowed to do?',
    hint: 'kubectl auth has the answer.',
    back: '<code>kubectl auth can-i VERB RESOURCE -n NS</code> checks your own access; add <code>--as USER</code> or <code>--as system:serviceaccount:NS:NAME</code> to impersonate (requires impersonate permission). <code>kubectl auth can-i --list</code> prints everything allowed in a namespace. It asks the API server, so it reflects every authorizer in use.',
    tags: ['RBAC', 'kubectl auth']
  },
  {
    id: 'cncf-kcna-fc-270',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What username and groups does a ServiceAccount authenticate as?',
    hint: 'Singular for the user, plural for the groups.',
    back: 'Username: <code>system:serviceaccount:NAMESPACE:NAME</code>. Groups: <code>system:serviceaccounts</code> (every ServiceAccount in the cluster) and <code>system:serviceaccounts:NAMESPACE</code> (every one in that namespace). Binding the namespace group is how you grant all current and future ServiceAccounts in a namespace at once.',
    tags: ['ServiceAccount', 'RBAC']
  },
  {
    id: 'cncf-kcna-fc-271',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'How do Pods get ServiceAccount tokens in current Kubernetes versions?',
    hint: 'Bound, projected, expiring.',
    back: 'The kubelet requests a <strong>short-lived, audience-bound token</strong> through the TokenRequest API and mounts it as a <strong>projected volume</strong>, rotating it before expiry; the token is invalidated when the Pod is deleted. Long-lived tokens stored in Secrets are no longer created automatically. Opt out with <code>automountServiceAccountToken: false</code>.',
    tags: ['ServiceAccount', 'Tokens']
  },
  {
    id: 'cncf-kcna-fc-272',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'What do the Node authorizer and the NodeRestriction admission plugin each limit?',
    hint: 'One governs reads, the other writes.',
    back: '<strong>Node authorizer</strong> (authorization mode <code>Node</code>): lets a kubelet read only the Secrets, ConfigMaps, PVCs and PVs referenced by Pods bound to its node. <strong>NodeRestriction</strong> (admission): stops a kubelet from modifying other Node objects or Pods not bound to it, and from setting protected node labels. Used together they contain a compromised node.',
    tags: ['Node authorizer', 'NodeRestriction']
  },
  {
    id: 'cncf-kcna-fc-273',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why can\'t you write a deny rule in RBAC?',
    hint: 'Additive only.',
    back: 'RBAC rules are <strong>purely additive</strong>: a request is allowed if any bound rule allows it, and there are no deny rules or ordering. To withhold something, grant a narrower role instead of a broad one. Explicit deny needs another layer, such as admission policies (ValidatingAdmissionPolicy) or a webhook authorizer.',
    tags: ['RBAC', 'Least privilege']
  },
  {
    id: 'cncf-kcna-fc-274',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Why is the system:masters group dangerous?',
    hint: 'It skips a whole stage.',
    back: 'Members of <code>system:masters</code> are granted unrestricted access by a hard-coded rule that <strong>bypasses every authorizer</strong>, including RBAC and webhooks, and removing RoleBindings cannot revoke it. A client certificate with O=system:masters stays all-powerful until it expires. Use it only for break-glass credentials; give admins cluster-admin via a normal binding instead.',
    tags: ['RBAC', 'Authorization']
  },
  {
    id: 'cncf-kcna-fc-275',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd2',
    front: 'Kubernetes audit levels: None, Metadata, Request, RequestResponse',
    hint: 'Each level records more than the last.',
    back: '<strong>None</strong>: do not log. <strong>Metadata</strong>: who, verb, resource, timestamp, but no body. <strong>Request</strong>: metadata plus the request body. <strong>RequestResponse</strong>: also the response body. An audit policy on the kube-apiserver assigns levels per resource; Secrets are usually kept at Metadata so their values never land in the log.',
    tags: ['Auditing', 'kube-apiserver']
  }
];

export default CNCF_KCNA_FLASHCARDS_11;
