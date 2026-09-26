export const CNCF_KCNA_QUESTIONS_11 = [
  {
    id: "cncf-kcna-251",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "NetworkPolicy objects that change nothing",
    scenario: "A team applies a NetworkPolicy that should block all ingress traffic to Pods labelled app=billing. The API server accepts it and it shows up in kubectl get networkpolicy, yet any Pod in the cluster can still reach the billing Pods. The cluster was built with a minimal networking setup a year ago.",
    question: "What is the most likely reason the policy has no effect?",
    options: [
      { id: 'A', text: "NetworkPolicy only takes effect after the target namespace is labelled for Pod Security Admission enforcement." },
      { id: 'B', text: "The installed CNI plugin does not implement NetworkPolicy, so the stored policy is never enforced on any node." },
      { id: 'C', text: "kube-proxy has to be restarted on each node before it reads new NetworkPolicy objects into its rule set." },
      { id: 'D', text: "The policy must reference a Service rather than a Pod selector, because Services are what carry the traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes stores NetworkPolicy objects, but enforcement is done by the network plugin. If the CNI plugin in use does not support NetworkPolicy, creating one has no effect even though the API accepts it. kube-proxy programs Service virtual IPs and never reads NetworkPolicy, so restarting it changes nothing. Pod Security Admission labels govern Pod security settings, not traffic filtering. NetworkPolicy selects Pods with podSelector by design; it does not target Services.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "CNI", "Networking"]
  },
  {
    id: "cncf-kcna-252",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Default-deny ingress for a new namespace",
    scenario: "A security lead wants every Pod in the payments namespace to reject incoming connections unless a later policy explicitly allows them. The rule must cover Pods that will be created in the future without anyone updating it, and outbound traffic from the Pods should stay unaffected.",
    question: "Which NetworkPolicy achieves this?",
    options: [
      { id: 'A', text: "podSelector: {} with policyTypes: [Ingress, Egress] and no rules of either kind" },
      { id: 'B', text: "podSelector: {} with policyTypes: [Ingress] and no ingress rules listed in the spec" },
      { id: 'C', text: "podSelector: {} with an ingress rule whose from list holds one empty podSelector" },
      { id: 'D', text: "podSelector: {} with policyTypes: [Egress] and no egress rules listed in the spec" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An empty podSelector selects every Pod in the namespace, including ones created later, and declaring Ingress in policyTypes with no ingress rules isolates those Pods for ingress while allowing nothing. Declaring only Egress with no rules blocks outbound traffic instead, which the requirement says to leave alone. An ingress rule with an empty podSelector in from allows traffic from every Pod in the namespace, which is the opposite of deny. Listing both types with no rules denies ingress but also cuts all egress, including DNS lookups.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies",
    tags: ["NetworkPolicy", "Default deny"]
  },
  {
    id: "cncf-kcna-253",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Egress lockdown breaks name resolution",
    scenario: "After a team applies an egress policy to its frontend Pods that allows traffic only to the backend Pods on TCP 8080, the frontend logs start showing 'could not resolve host backend.shop.svc.cluster.local'. Direct connections to backend Pod IPs on port 8080 still work.",
    question: "What should be added to the policy to fix the errors?",
    options: [
      { id: 'A', text: "An ingress rule allowing UDP and TCP port 53 from the cluster DNS Pods in kube-system" },
      { id: 'B', text: "An egress rule allowing TCP port 10250 to the kubelet running on every cluster node" },
      { id: 'C', text: "An egress rule allowing TCP port 443 to the kube-apiserver endpoint of the cluster" },
      { id: 'D', text: "An egress rule allowing UDP and TCP port 53 to the cluster DNS Pods in kube-system" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Once a Pod is isolated for egress, only the listed destinations are reachable, and DNS queries to CoreDNS on port 53 are no longer among them, so names fail while direct IP connections still work. The fix is an egress rule to the DNS Pods on UDP and TCP 53. An ingress rule controls traffic arriving at the frontend, not the lookups it sends out; replies to allowed connections are permitted automatically. The API server on 443 and the kubelet on 10250 are not involved in resolving Service names.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["NetworkPolicy", "DNS", "Egress"]
  },
  {
    id: "cncf-kcna-254",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Reaching a Service in another namespace",
    scenario: "A Pod in the web namespace needs to call a Service named inventory that lives in the stock namespace. Calling http://inventory from the web Pod fails with a name-resolution error, and the cluster uses the default cluster.local domain.",
    question: "Which hostname should the Pod use?",
    options: [
      { id: 'A', text: "inventory.web.svc.cluster.local" },
      { id: 'B', text: "inventory.stock.svc.cluster.local" },
      { id: 'C', text: "stock.inventory.svc.cluster.local" },
      { id: 'D', text: "inventory.stock.pod.cluster.local" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes DNS gives each Service the name SERVICE.NAMESPACE.svc.CLUSTER_DOMAIN, so inventory in stock resolves as inventory.stock.svc.cluster.local (inventory.stock also works through the search path). A bare name resolves only within the caller's own namespace, which is why http://inventory failed from web. Swapping the Service and namespace labels produces a name that does not exist. Using the web namespace points at a Service that is not there. The pod subdomain is used for Pod A records, not Service names.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["DNS", "CoreDNS", "Services"]
  },
  {
    id: "cncf-kcna-255",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A Service that needs both address families",
    scenario: "A telecom runs a dual-stack cluster with both IPv4 and IPv6 ranges configured. Its signalling Service must receive both an IPv4 and an IPv6 cluster IP, and the team wants creation to fail outright on any cluster that cannot provide both, rather than silently getting only one.",
    question: "Which Service setting meets the requirement?",
    options: [
      { id: 'A', text: "ipFamilyPolicy: PreferDualStack" },
      { id: 'B', text: "ipFamilies: [IPv6] with no policy set" },
      { id: 'C', text: "ipFamilyPolicy: RequireDualStack" },
      { id: 'D', text: "ipFamilyPolicy: SingleStack" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "RequireDualStack allocates cluster IPs from both the IPv4 and IPv6 ranges and fails if dual-stack is not available, which is exactly the strictness requested. PreferDualStack also asks for both families but quietly falls back to a single family on a single-stack cluster. SingleStack, the default, gives the Service one address family only. Listing only IPv6 in ipFamilies without a policy produces a single-stack IPv6 Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dual-stack/",
    tags: ["Dual-stack", "Services", "IPv6"]
  },
  {
    id: "cncf-kcna-256",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Splitting routing ownership between teams",
    scenario: "A platform team wants to own the shared load balancer and its listeners and TLS settings, while each application team manages the HTTP path rules for its own services in its own namespace. They want this split expressed as separate API resources with their own RBAC, rather than annotations on a single object.",
    question: "Which approach fits these requirements?",
    options: [
      { id: 'A', text: "Gateway API, with the platform team owning a Gateway and app teams owning HTTPRoutes" },
      { id: 'B', text: "An ExternalName Service per app, pointing at the shared load balancer's DNS name" },
      { id: 'C', text: "A LoadBalancer Service per app, with each team assigning its own external IP address" },
      { id: 'D', text: "One Ingress the platform team owns, with app teams editing its rules via annotations" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gateway API was designed around role separation: infrastructure providers supply a GatewayClass, cluster operators own Gateway objects with listeners and TLS, and application developers attach HTTPRoutes from their own namespaces, each governed by separate RBAC. A single shared Ingress puts every team's rules in one object, and controller-specific annotations are exactly what the team wants to avoid. A LoadBalancer Service per app creates many load balancers rather than one shared one and has no HTTP path routing. ExternalName only returns a CNAME and performs no routing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/gateway/",
    tags: ["Gateway API", "HTTPRoute", "Networking"]
  },
  {
    id: "cncf-kcna-257",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Stable per-Pod DNS names for a database",
    scenario: "A team runs a three-replica database as a StatefulSet. Each replica must be addressable by its own stable DNS name, such as db-0.db.data.svc.cluster.local, so peers can find each other, and clients do not need a single load-balanced virtual IP.",
    question: "What kind of Service should back the StatefulSet?",
    options: [
      { id: 'A', text: "A headless Service with clusterIP set to None" },
      { id: 'B', text: "An ExternalName Service mapped to the database" },
      { id: 'C', text: "A NodePort Service exposing a port on every node" },
      { id: 'D', text: "A ClusterIP Service with session affinity set" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A headless Service (clusterIP: None) skips the virtual IP and makes DNS return the Pod addresses directly; paired with a StatefulSet's serviceName it gives each Pod a stable record like db-0.db.data.svc.cluster.local. A NodePort Service still load-balances through a virtual IP and adds node-level exposure that is not wanted. ExternalName returns a CNAME to an outside host and has no selector for Pods. A ClusterIP Service with session affinity still hides replicas behind one IP and gives no per-Pod names.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Service", "StatefulSet", "DNS"]
  },
  {
    id: "cncf-kcna-258",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Which component programs Service virtual IPs",
    scenario: "On a worker node, an engineer lists the iptables rules and finds long KUBE-SVC and KUBE-SEP chains that translate a Service's ClusterIP into individual Pod IPs. She wants to know which Kubernetes component writes these rules and keeps them in sync as Pods come and go.",
    question: "Which component is responsible?",
    options: [
      { id: 'A', text: "kube-proxy, which watches Services and EndpointSlices" },
      { id: 'B', text: "CoreDNS, which watches Services to publish DNS records" },
      { id: 'C', text: "kube-controller-manager, which runs the endpoint controllers" },
      { id: 'D', text: "The kubelet, which watches Pods scheduled to its node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kube-proxy runs on each node, watches Service and EndpointSlice objects, and programs iptables (or IPVS or nftables) rules so traffic to a ClusterIP is translated to a ready backend Pod; the KUBE-SVC and KUBE-SEP chains are its signature. The kubelet manages containers on the node and does not program Service rules. CoreDNS answers name lookups but never touches packet forwarding. The controller manager maintains EndpointSlice objects in the API, but it does not write rules on nodes; kube-proxy consumes what it produces.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "Services", "iptables"]
  },
  {
    id: "cncf-kcna-259",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Allowing traffic only from the monitoring namespace",
    scenario: "Pods labelled app=api in the shop namespace are already isolated by a default-deny ingress policy. A Prometheus server running in the monitoring namespace, which carries the label team=observability, must be allowed to scrape port 9090 on those Pods. No other namespace should gain access.",
    question: "Which ingress rule should the new policy for app=api contain?",
    options: [
      { id: 'A', text: "from an ipBlock covering the node CIDR, on port 9090" },
      { id: 'B', text: "from a podSelector matching team=observability, on port 9090" },
      { id: 'C', text: "from a namespaceSelector matching team=observability, on port 9090" },
      { id: 'D', text: "from an empty namespaceSelector, on port 9090" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A namespaceSelector in the from list admits Pods in every namespace whose labels match, so matching team=observability lets the monitoring namespace in and nobody else. A podSelector alone only selects Pods in the policy's own namespace, so it would look for team=observability Pods inside shop and miss Prometheus entirely. An ipBlock for the node CIDR is meant for traffic from outside the cluster and would not reliably match Pod IPs. An empty namespaceSelector matches all namespaces, which opens the port to the whole cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["NetworkPolicy", "namespaceSelector"]
  },
  {
    id: "cncf-kcna-260",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "One from entry or two",
    scenario: "A reviewer is comparing two versions of a policy's from list. Version one has a single entry containing both namespaceSelector: {env: prod} and podSelector: {role: client}. Version two has the same two selectors written as two separate list items, each starting with its own dash.",
    question: "How do the two versions differ in what they allow?",
    options: [
      { id: 'A', text: "Version one is rejected by the API server, because a single from entry may carry only one selector, while version two is valid and admits either match." },
      { id: 'B', text: "Version one admits all Pods in env=prod namespaces plus role=client Pods in the policy's own namespace; version two admits only role=client Pods in env=prod namespaces." },
      { id: 'C', text: "Both versions admit exactly the same traffic, because Kubernetes merges the selectors in a from list into one combined condition before evaluating it." },
      { id: 'D', text: "Version one admits only role=client Pods inside env=prod namespaces; version two admits all Pods in env=prod namespaces plus role=client Pods in the policy's own namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Selectors inside one from element are ANDed: the source must be a role=client Pod in a namespace labelled env=prod. Separate list elements are ORed, and a podSelector on its own refers to the policy's namespace, so version two admits every Pod in env=prod namespaces or role=client Pods in the local namespace. Reversing the descriptions gets the semantics backwards. The selectors are not merged across elements, which is exactly why the indentation matters. Combining namespaceSelector and podSelector in one element is explicitly valid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["NetworkPolicy", "Selectors", "YAML"]
  },
  {
    id: "cncf-kcna-261",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Preserving the client source IP",
    scenario: "An application behind a LoadBalancer Service logs the source IP of each request for fraud detection, but every logged address is a node IP rather than the real customer address. The team accepts that nodes without a local backend Pod will stop receiving traffic from the load balancer.",
    question: "Which Service setting addresses this?",
    options: [
      { id: 'A', text: "externalTrafficPolicy: Local" },
      { id: 'B', text: "sessionAffinity: ClientIP" },
      { id: 'C', text: "externalTrafficPolicy: Cluster" },
      { id: 'D', text: "internalTrafficPolicy: Local" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With externalTrafficPolicy: Local, a node only forwards external traffic to backend Pods on itself, so no second hop and no source NAT is needed and the client IP is preserved; nodes without a local Pod fail the load balancer's health check, which the team has accepted. Cluster is the default that spreads traffic across all nodes and SNATs it, causing the node IPs in the logs. internalTrafficPolicy affects traffic from inside the cluster, not from the load balancer. sessionAffinity pins a client to a Pod but does not stop the source address being rewritten.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Services", "LoadBalancer", "Traffic policy"]
  },
  {
    id: "cncf-kcna-262",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Kubernetes network model guarantees",
    scenario: "An architect is explaining the Kubernetes network model to a team migrating from Docker's default bridge networking, where containers reached each other through host port mappings. The team asks which behaviour every conformant cluster network must provide regardless of the CNI plugin chosen.",
    question: "Which statement is a requirement of the Kubernetes network model?",
    options: [
      { id: 'A', text: "Pods can reach Pods on other nodes only through a Service, which applies NAT to the traffic." },
      { id: 'B', text: "Pods on the same node share the node's IP and are told apart by the host ports they bind." },
      { id: 'C', text: "Every Pod gets its own IP, but traffic between Pods is denied until a NetworkPolicy allows it." },
      { id: 'D', text: "Every Pod gets its own IP and can reach every other Pod on any node directly, without NAT." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Kubernetes network model gives each Pod a unique cluster-wide IP and requires that Pods can communicate with all other Pods, on any node, without network address translation; the CNI plugin decides how, but not whether. Sharing the node IP and distinguishing Pods by host port is the Docker bridge pattern the model replaces. Services add stable virtual IPs but are not required for Pod-to-Pod reachability. The default is allow-all; traffic is only denied once a NetworkPolicy isolates a Pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model",
    tags: ["Network model", "CNI", "Pods"]
  },
  {
    id: "cncf-kcna-263",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "The four layers of cloud native security",
    scenario: "A security trainer introduces the layered model from the Kubernetes documentation, in which each outer layer forms the trusted base for the one inside it. A learner is asked to name the layers from the outermost to the innermost.",
    question: "Which ordering is correct?",
    options: [
      { id: 'A', text: "Code, Container, Cluster, Cloud" },
      { id: 'B', text: "Cloud, Cluster, Container, Code" },
      { id: 'C', text: "Cloud, Container, Cluster, Code" },
      { id: 'D', text: "Cluster, Cloud, Container, Code" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 4C's of cloud native security are Cloud (or the data centre), Cluster, Container and Code, from outermost to innermost; weaknesses in an outer layer undermine the protections of every inner one. Listing Code first reverses the model. Putting Cluster outside Cloud ignores that the cluster runs on the cloud or data-centre infrastructure. Placing Container outside Cluster inverts their relationship, since containers run inside the cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/overview/",
    tags: ["4C's", "Security model"]
  },
  {
    id: "cncf-kcna-264",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Where human users are defined",
    scenario: "A new administrator tries to run kubectl create user alice to give a developer access to the cluster and gets an error. She wants to understand how Kubernetes represents ordinary human users.",
    question: "How does Kubernetes handle normal user accounts?",
    options: [
      { id: 'A', text: "It has no User object; identities come from outside, such as client certificates or an OIDC provider." },
      { id: 'B', text: "Users are User objects that must be created with kubectl apply because kubectl create lacks a subcommand." },
      { id: 'C', text: "Users are ServiceAccount objects created in the default namespace, one per person who needs access." },
      { id: 'D', text: "Users are stored as Secret objects in kube-system holding each person's password and group list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes has no API object for normal users. Their identity is asserted by an authenticator, such as the common name of a client certificate signed by the cluster CA or claims in an OIDC token, and RBAC then refers to that username or group by string. ServiceAccounts are API objects, but they are meant for workloads, not people. Secrets are not the user store. There is no User resource to apply, which is why the command fails regardless of the verb.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/",
    tags: ["Authentication", "Users", "OIDC"]
  },
  {
    id: "cncf-kcna-265",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Order of checks on an API request",
    scenario: "A developer runs kubectl apply to create a Deployment. Before the object is written to etcd, the API server runs the request through several stages, and a mutating webhook in the cluster adds default labels to new Deployments.",
    question: "In which order does the API server process the request?",
    options: [
      { id: 'A', text: "Authorization, then authentication, then admission control" },
      { id: 'B', text: "Admission control, then authentication, then authorization" },
      { id: 'C', text: "Authentication, then admission control, then authorization" },
      { id: 'D', text: "Authentication, then authorization, then admission control" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The API server first authenticates the caller to establish who they are, then authorizes the requested verb on the resource (for example through RBAC), and only then runs admission controllers, mutating first and validating second, before persisting the object. Authorization cannot come first because it needs the identity that authentication produces. Admission needs a request that has already been allowed; running it before authentication would let anonymous callers trigger webhooks. Admission before authorization would mutate requests the caller may not even be permitted to make.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/controlling-access/",
    tags: ["Authentication", "Authorization", "Admission"]
  },
  {
    id: "cncf-kcna-266",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Read-only access to Pods in one namespace",
    scenario: "A support engineer needs to list and view Pods and their logs in the orders namespace only. She must not be able to change anything or see resources in other namespaces. The cluster uses RBAC authorization.",
    question: "Which RBAC setup grants exactly this?",
    options: [
      { id: 'A', text: "A Role in orders allowing get, list and watch on pods and pods/log, bound by a RoleBinding in orders" },
      { id: 'B', text: "A ClusterRole allowing get, list and watch on pods and pods/log, bound by a ClusterRoleBinding" },
      { id: 'C', text: "A Role in orders allowing all verbs on pods and pods/log, bound by a RoleBinding in orders" },
      { id: 'D', text: "The built-in view ClusterRole bound to her with a ClusterRoleBinding for the whole cluster" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Role is namespaced, and a RoleBinding in the same namespace grants its permissions only there; get, list and watch on pods plus get on the pods/log subresource are the read verbs she needs. A ClusterRoleBinding grants permissions across every namespace, breaking the scope requirement. Allowing all verbs includes delete and patch, which lets her change Pods. Binding view cluster-wide both exceeds the namespace scope and exposes other resource types.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC", "Role", "RoleBinding"]
  },
  {
    id: "cncf-kcna-267",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Reusing one permission set in many namespaces",
    scenario: "A platform team wants the same set of deploy permissions, covering Deployments, Services and ConfigMaps, available to each application team in that team's own namespace. They want to define the permission rules once and avoid copying identical Roles into forty namespaces.",
    question: "What is the recommended RBAC pattern?",
    options: [
      { id: 'A', text: "Define a ClusterRole once and reference it from one ClusterRoleBinding for all teams" },
      { id: 'B', text: "Define a ClusterRole once and reference it from a RoleBinding in each team's namespace" },
      { id: 'C', text: "Define a Role once in kube-system and let each team's ServiceAccount inherit its rules" },
      { id: 'D', text: "Define a Role once in default and reference it from RoleBindings in every other namespace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A RoleBinding may reference a ClusterRole, and when it does the permissions apply only within the RoleBinding's namespace, so one ClusterRole can be reused as a template across forty namespaces. A ClusterRoleBinding would give every team the permissions in all namespaces. A RoleBinding can only reference a Role in its own namespace, so a Role in default cannot be bound elsewhere. RBAC has no inheritance mechanism by which ServiceAccounts pick up a Role from kube-system.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding",
    tags: ["RBAC", "ClusterRole", "RoleBinding"]
  },
  {
    id: "cncf-kcna-268",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Read-only auditors without a custom role",
    scenario: "External auditors need to look at most objects in the finance namespace, such as Deployments, Pods and ConfigMaps, but must not change anything or read Secrets. The administrator would rather use a built-in role than write and maintain a custom one.",
    question: "Which built-in ClusterRole should she bind with a RoleBinding in finance?",
    options: [
      { id: 'A', text: "cluster-admin, which grants every action on every resource" },
      { id: 'B', text: "view, which grants read-only access and excludes Secrets" },
      { id: 'C', text: "edit, which grants read-write access to most namespaced objects" },
      { id: 'D', text: "admin, which grants full control inside a namespace, RBAC included" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes ships user-facing ClusterRoles meant to be bound per namespace: view allows read-only access to most objects and deliberately excludes Secrets, because reading Secrets could reveal credentials that grant further access. edit allows modifying most objects, including reading Secrets. admin adds control over Roles and RoleBindings within the namespace. cluster-admin grants every action, and bound with a RoleBinding it still gives full control of the namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles",
    tags: ["RBAC", "Built-in roles"]
  },
  {
    id: "cncf-kcna-269",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Stopping unneeded API tokens in Pods",
    scenario: "A security review finds that web Pods, which never call the Kubernetes API, each have a ServiceAccount token mounted at /var/run/secrets/kubernetes.io/serviceaccount. The reviewer wants the token removed from these Pods without changing how other workloads in the namespace get theirs.",
    question: "What should the team change?",
    options: [
      { id: 'A', text: "Remove the ServiceAccount admission plugin from the kube-apiserver configuration" },
      { id: 'B', text: "Set automountServiceAccountToken: false in the Deployment Pod template spec" },
      { id: 'C', text: "Set automountServiceAccountToken: false on the namespace's default ServiceAccount" },
      { id: 'D', text: "Delete the default ServiceAccount in the namespace so no token can be issued" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting automountServiceAccountToken: false in the Pod spec stops the token being projected into the frontend Pods only, and the Pod-level setting takes precedence over the ServiceAccount's. Setting it on the default ServiceAccount would also remove the token from every other Pod using that account, which the requirement rules out. Deleting the default ServiceAccount is pointless because the controller recreates it. Disabling the ServiceAccount admission plugin is a cluster-wide change that breaks token handling for all workloads.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#opt-out-of-api-credential-automounting",
    tags: ["ServiceAccount", "Tokens", "Least privilege"]
  },
  {
    id: "cncf-kcna-270",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Identity for an in-cluster controller",
    scenario: "A team is deploying a small controller that watches ConfigMaps in its namespace and restarts Deployments when they change. The controller runs as a Pod and must authenticate to the API server with only the permissions it needs, without embedding any human's credentials.",
    question: "How should the controller be given its API identity?",
    options: [
      { id: 'A', text: "Create a dedicated ServiceAccount, bind a Role with only the needed verbs, and set it in the Pod spec" },
      { id: 'B', text: "Run it under the default ServiceAccount and bind the cluster-admin ClusterRole to that account" },
      { id: 'C', text: "Mount an administrator's kubeconfig file from a Secret so it authenticates as that person" },
      { id: 'D', text: "Issue it a client certificate with the system:masters group so it bypasses RBAC checks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ServiceAccounts are the identity mechanism for workloads: a dedicated account named in serviceAccountName receives a short-lived projected token, and a Role bound to it limits the controller to get, list and watch on ConfigMaps and patch on Deployments. Binding cluster-admin to the default ServiceAccount grants every Pod in the namespace full control of the cluster. Mounting a person's kubeconfig ties the workload to a human and their broad rights. system:masters bypasses authorization entirely, the opposite of least privilege.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/service-accounts/",
    tags: ["ServiceAccount", "RBAC", "Least privilege"]
  },
  {
    id: "cncf-kcna-271",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "How kubelets are authorized",
    scenario: "A cluster runs with --authorization-mode=Node,RBAC. An auditor asks why a compromised kubelet on node-7 could not read Secrets used only by Pods on node-3, even though the kubelet does need to read some Secrets.",
    question: "What restricts the kubelet in this way?",
    options: [
      { id: 'A', text: "The Node authorizer, which lets a kubelet read only objects tied to Pods bound to its own node" },
      { id: 'B', text: "The NodeRestriction admission plugin, which blocks every Secret read that comes from a kubelet" },
      { id: 'C', text: "The kubelet's own configuration, which hides Secrets that belong to Pods on other nodes" },
      { id: 'D', text: "The RBAC system:node ClusterRole, which is scoped by default to Secrets in kube-system only" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Node authorization mode grants kubelets read access only to Secrets, ConfigMaps, PersistentVolumeClaims and PersistentVolumes referenced by Pods scheduled to that kubelet's node, which is why node-7 cannot read node-3's Secrets. The system:node ClusterRole is not scoped to kube-system and is not how modern clusters restrict kubelets. NodeRestriction is an admission plugin that limits which Node and Pod objects a kubelet may modify; admission does not gate reads, and kubelets still need to read their own Pods' Secrets. The kubelet's configuration cannot enforce limits on the API server.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Node authorizer", "Kubelet", "Authorization"]
  },
  {
    id: "cncf-kcna-272",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Additive nature of RBAC rules",
    scenario: "An administrator wants to let a group edit everything in the dev namespace except Secrets. She plans to bind the built-in edit ClusterRole and then write a second Role with a rule that denies access to Secrets.",
    question: "Why will this plan not work as written?",
    options: [
      { id: 'A', text: "RBAC evaluates rules in creation order, so the deny Role must be created before the edit binding" },
      { id: 'B', text: "RBAC deny rules apply only to ServiceAccounts, so a group of human users cannot be kept from Secrets" },
      { id: 'C', text: "RBAC has no deny rules; permissions are purely additive, so she needs a role that never grants them" },
      { id: 'D', text: "RBAC deny rules exist but are only honoured in ClusterRoles, so the deny must move into a ClusterRole" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes RBAC permissions are purely additive: a request is allowed if any bound rule permits it, and there is no way to write a deny rule. To exclude Secrets she must bind a custom Role that lists every allowed resource except Secrets instead of the edit ClusterRole. Deny rules do not exist in ClusterRoles either. Evaluation order is irrelevant because any matching allow wins. The additive model is the same for users, groups and ServiceAccounts.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "Least privilege"]
  },
  {
    id: "cncf-kcna-273",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Granting access to every ServiceAccount in a namespace",
    scenario: "A logging agent runs in several Pods in the logging namespace, each with a different ServiceAccount, and all of them need to list Pods cluster-wide. The administrator wants one ClusterRoleBinding that covers current and future ServiceAccounts in that namespace, but no other namespace.",
    question: "Which subject should the ClusterRoleBinding use?",
    options: [
      { id: 'A', text: "kind: Group, name: system:serviceaccounts" },
      { id: 'B', text: "kind: ServiceAccount, name: *, namespace: logging" },
      { id: 'C', text: "kind: User, name: system:serviceaccount:logging" },
      { id: 'D', text: "kind: Group, name: system:serviceaccounts:logging" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Every ServiceAccount token authenticates as a member of the group system:serviceaccounts:NAMESPACE, so binding that group covers all ServiceAccounts in logging, including ones created later. The group system:serviceaccounts contains every ServiceAccount in the cluster, which is far wider than intended. A ServiceAccount's username has the form system:serviceaccount:NAMESPACE:NAME, so the User subject shown matches no identity. RBAC subjects do not accept wildcards in ServiceAccount names.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-subjects",
    tags: ["RBAC", "ServiceAccount", "Groups"]
  },
  {
    id: "cncf-kcna-274",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Namespaced or cluster-scoped permissions",
    scenario: "An operator needs to let the storage team view PersistentVolumes and Nodes. A colleague drafts a Role in the storage namespace listing both resources, binds it, and the team still gets forbidden errors.",
    question: "Why does the Role not work?",
    options: [
      { id: 'A', text: "PersistentVolumes and Nodes are cluster-scoped, so they need a ClusterRole and ClusterRoleBinding" },
      { id: 'B', text: "Roles can only grant access to core Pods and Services, so other resources need an admission webhook" },
      { id: 'C', text: "PersistentVolumes and Nodes are namespaced, so the Role must be created in the kube-system namespace" },
      { id: 'D', text: "Roles take effect only after the kube-apiserver restarts, so the team must wait for the next restart" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Nodes and PersistentVolumes are cluster-scoped resources, and a Role, being namespaced, can only grant access to namespaced resources, so permissions for them must come from a ClusterRole bound with a ClusterRoleBinding. They are not namespaced, so moving the Role to kube-system does not help. Roles can cover any namespaced resource type, including custom resources, and admission webhooks do not grant permissions. RBAC changes take effect immediately without restarting the API server.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["RBAC", "ClusterRole", "Cluster-scoped"]
  },
  {
    id: "cncf-kcna-275",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Tracking who deleted a Deployment",
    scenario: "A production Deployment disappeared overnight and nobody admits to deleting it. The platform team wants future API requests recorded with who made them, what they did and when, so incidents like this can be traced back to a user or ServiceAccount.",
    question: "What should the platform team enable?",
    options: [
      { id: 'A', text: "The ValidatingAdmissionPolicy feature with a deny-delete rule" },
      { id: 'B', text: "Event retention raised to 30 days in the kube-apiserver flags" },
      { id: 'C', text: "Kubernetes auditing with an audit policy on the kube-apiserver" },
      { id: 'D', text: "Container log rotation settings raised on each node's kubelet" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes auditing records a chronological log of requests to the API server, including the user or ServiceAccount, verb, resource and timestamp, according to an audit policy that sets what is logged and at what level. Events describe state changes of objects but do not reliably record who issued a request, and raising their TTL does not make them an audit trail. Kubelet log rotation concerns container stdout, not API calls. A ValidatingAdmissionPolicy could block deletes, but it does not record who made each request.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Auditing", "kube-apiserver", "Security"]
  }
];

export default CNCF_KCNA_QUESTIONS_11;
