export const K8S_CKAD_QUESTIONS_10 = [
  {
    id: "k8s-ckad-226",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "CoreDNS SRV Records for Named Ports",
    scenario: "A Kubernetes Service named `http-web` in namespace `default` defines a named port `name: http-web-port` with port 8080 and protocol TCP.",
    question: "What SRV DNS record format does CoreDNS generate for this named port?",
    options: [
      { id: 'A', text: "http-web.8080.default.svc.cluster.local" },
      { id: 'B', text: "SRV records are not supported" },
      { id: 'C', text: "_http-web-port._tcp.http-web.default.svc.cluster.local" },
      { id: 'D', text: "_http-web._port.cluster.local" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CoreDNS creates SRV records for named ports using the schema `_&lt;port-name&gt;._&lt;protocol&gt;.&lt;service-name&gt;.&lt;namespace&gt;.svc.&lt;cluster-domain&gt;`, allowing client software to discover both port numbers and IP addresses dynamically.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#srv-records",
    tags: ["Kubernetes", "CoreDNS", "SRV Records"]
  },
  {
    id: "k8s-ckad-227",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Gateway API: GatewayClass vs Gateway vs HTTPRoute Hierarchy",
    scenario: "The Kubernetes Gateway API modernizes and succeeds the legacy Ingress API.",
    question: "What are the three core role-oriented resources in the Gateway API hierarchy?",
    options: [
      { id: 'A', text: "GatewayClass (infrastructure provider), Gateway (cluster operator), HTTPRoute (application developer)" },
      { id: 'B', text: "Route, Target, Endpoint" },
      { id: 'C', text: "VirtualService, DestinationRule, Gateway" },
      { id: 'D', text: "IngressClass, Ingress, Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Gateway API splits responsibilities: `GatewayClass` (managed by cloud/infra providers, e.g. Istio or Envoy), `Gateway` (managed by platform ops, binds ports and IP listeners), and `HTTPRoute` (managed by application developers, defines routing rules and traffic splitting).",
    referenceUrl: "https://gateway-api.sigs.k8s.io/concepts/roles-and-personas/",
    tags: ["Gateway API", "HTTPRoute", "Next-Gen Networking"]
  },
  {
    id: "k8s-ckad-228",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Gateway API: HTTPRoute Canary Weighted Traffic Splitting",
    scenario: "A developer uses the Gateway API to split traffic between two service versions. 80% of traffic must route to `service-v1` and 20% to `service-v2`.",
    question: "How is weighted traffic splitting declared natively in an HTTPRoute resource?",
    options: [
      { id: 'A', text: "Under backendRefs, specify weight: 80 for service-v1 and weight: 20 for service-v2" },
      { id: 'B', text: "Under spec.rules, set canary: 20%" },
      { id: 'C', text: "By adjusting replica counts in Deployments only" },
      { id: 'D', text: "Using annotations in an Ingress" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unlike legacy Ingress which required vendor-specific annotations, the Gateway API natively supports weighted traffic splitting in `spec.rules.backendRefs` with `weight: 80` and `weight: 20` for declarative canary releases.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/guides/traffic-splitting/",
    tags: ["Gateway API", "HTTPRoute", "Traffic Splitting"]
  },
  {
    id: "k8s-ckad-229",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing DNS Egress to CoreDNS",
    scenario: "An administrator applies a default-deny egress NetworkPolicy (`podSelector: {}, policyTypes: [Egress]`). Suddenly, all pods in the namespace fail to resolve any domain names, causing cascading application crashes.",
    question: "What essential egress rule must be added to allow pods to query CoreDNS?",
    options: [
      { id: 'A', text: "Allow egress on UDP and TCP port 53 to the kube-system namespace (or CoreDNS pods)" },
      { id: 'B', text: "Allow egress on port 80 to the internet" },
      { id: 'C', text: "Delete the NetworkPolicy" },
      { id: 'D', text: "Reboot CoreDNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When default-deny egress is enforced, pods cannot communicate with CoreDNS. Pods must be granted explicit egress permission to query CoreDNS on `UDP and TCP port 53` (in namespace `kube-system`), otherwise all DNS queries fail.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-egress-traffic",
    tags: ["Kubernetes", "NetworkPolicy", "DNS Egress"]
  },
  {
    id: "k8s-ckad-230",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kubernetes Service without Selector (Manual Endpoints)",
    scenario: "A developer needs a Kubernetes Service named `external-db` that routes traffic to an external Oracle database server running outside the cluster at IP `192.168.1.50:1521`.",
    question: "How should the Service and endpoints be configured?",
    options: [
      { id: 'A', text: "Create a Service without a spec.selector, and manually create an Endpoints (or EndpointSlice) object named external-db pointing to 192.168.1.50" },
      { id: 'B', text: "Create a ClusterIP service with selector: { external: true }" },
      { id: 'C', text: "Services cannot route to external IP addresses" },
      { id: 'D', text: "Use a NodePort service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "If a Service is created without a `spec.selector`, Kubernetes does NOT generate an Endpoints object automatically. The developer can manually create an `Endpoints` (or `EndpointSlice`) object with the exact same name as the Service to point to external IP addresses.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors",
    tags: ["Kubernetes", "Services", "Manual Endpoints"]
  },
  {
    id: "k8s-ckad-231",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kubernetes Service externalIPs Security Risk",
    scenario: "A developer adds externalIPs: [8.8.8.8] to a Service manifest.",
    question: "How does kube-proxy handle traffic arriving at worker nodes destined for 8.8.8.8?",
    options: [
      { id: 'A', text: "kube-proxy intercepts traffic destined for 8.8.8.8 and reroutes it to the Service's backend pods, potentially hijacking external traffic if unconstrained" },
      { id: 'B', text: "The API server rejects the Service immediately" },
      { id: 'C', text: "externalIPs is ignored by kube-proxy" },
      { id: 'D', text: "The node IP address changes to 8.8.8.8" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`externalIPs` instructs kube-proxy on all nodes to route traffic destined for that IP to the service's endpoints. If not restricted by admission controllers, unprivileged users could hijack traffic destined for external internet services.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-ips",
    tags: ["Kubernetes", "Services", "externalIPs"]
  },
  {
    id: "k8s-ckad-232",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service publishing NotReady Addresses (publishNotReadyAddresses)",
    scenario: "A master-slave clustered database requires nodes to discover and communicate with all peer pods during cluster formation before the database engine is Ready to accept client queries.",
    question: "Which Service specification setting forces CoreDNS to register endpoints for pods even if their readiness probes are failing?",
    options: [
      { id: 'A', text: "clusterIP: None alone" },
      { id: 'B', text: "forceEndpoints: true" },
      { id: 'C', text: "publishNotReadyAddresses: true" },
      { id: 'D', text: "readinessProbe.ignore: true" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting `publishNotReadyAddresses: true` on a Service (typically a headless service for StatefulSets) instructs the endpoint controller to include pod IPs in Endpoints and CoreDNS even when the pods are NotReady, enabling peer-to-peer cluster bootstrap.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publish-not-ready-addresses",
    tags: ["Kubernetes", "Services", "publishNotReadyAddresses"]
  },
  {
    id: "k8s-ckad-233",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Pod DNS Policy Options (ClusterFirst vs Default vs None)",
    scenario: "A specialized networking pod runs with `hostNetwork: true`. By default, pods with hostNetwork use the host's `/etc/resolv.conf` and cannot resolve cluster service names.",
    question: "Which dnsPolicy forces a hostNetwork pod to use CoreDNS for service discovery?",
    options: [
      { id: 'A', text: "dnsPolicy: Default" },
      { id: 'B', text: "dnsPolicy: ClusterFirst" },
      { id: 'C', text: "dnsPolicy: ClusterFirstWithHostNet" },
      { id: 'D', text: "dnsPolicy: None" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`ClusterFirstWithHostNet` directs pods running with `hostNetwork: true` to use in-cluster CoreDNS for name resolution. (`Default` uses the host node's DNS; `ClusterFirst` is the standard for non-hostNetwork pods).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy",
    tags: ["Kubernetes", "CoreDNS", "dnsPolicy"]
  },
  {
    id: "k8s-ckad-234",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Custom Pod DNS Configuration (dnsConfig)",
    scenario: "A pod needs to use a custom external nameserver (`1.1.1.1`) and custom search domains in addition to standard CoreDNS configuration.",
    question: "Which Pod specification section defines custom DNS nameservers and search paths?",
    options: [
      { id: 'A', text: "In the container Dockerfile" },
      { id: 'B', text: "spec.resolvConf: { server: 1.1.1.1 }" },
      { id: 'C', text: "spec.dnsPolicy: Custom" },
      { id: 'D', text: "spec.dnsConfig: { nameservers: ['1.1.1.1'], searches: ['corp.internal'] }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`dnsConfig` allows fine-grained customization of `/etc/resolv.conf` inside a pod. Developers can specify custom `nameservers`, `searches`, and `options` (e.g. `ndots:2`), combining with `dnsPolicy: None` or `ClusterFirst`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config",
    tags: ["Kubernetes", "dnsConfig", "DNS Tuning"]
  },
  {
    id: "k8s-ckad-235",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing All Ingress Traffic Explicitly",
    scenario: "In a namespace with a default-deny policy, an ingress controller proxy pod must be allowed to accept incoming traffic from any source anywhere in the world.",
    question: "Which NetworkPolicy rule explicitly permits all incoming ingress traffic?",
    options: [
      { id: 'A', text: "policyTypes: []" },
      { id: 'B', text: "ingress: [allowAll]" },
      { id: 'C', text: "ingress: [{ from: [] }]" },
      { id: 'D', text: "ingress: [{}]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In a NetworkPolicy, `ingress: [{}]` defines a single rule with an empty `from` list and empty `ports` list, matching all sources on all ports and allowing all incoming traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#allow-all-ingress-traffic",
    tags: ["Kubernetes", "NetworkPolicy", "Allow All"]
  },
  {
    id: "k8s-ckad-236",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing All Egress Traffic Explicitly",
    scenario: "A logging collector pod in an isolated namespace must be permitted to send log streams to any external destination on any IP and port.",
    question: "Which NetworkPolicy rule explicitly permits all outbound egress traffic?",
    options: [
      { id: 'A', text: "policyTypes: []" },
      { id: 'B', text: "egress: [{}]" },
      { id: 'C', text: "allowEgress: true" },
      { id: 'D', text: "egress: [{ to: [] }]" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In a NetworkPolicy, `egress: [{}]` defines an unrestricted egress rule with an empty `to` and `ports` list, matching all destinations and allowing all outbound connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#allow-all-egress-traffic",
    tags: ["Kubernetes", "NetworkPolicy", "Allow All Egress"]
  },
  {
    id: "k8s-ckad-237",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kubernetes Internal Traffic Policy (internalTrafficPolicy: Local)",
    scenario: "A high-throughput cache pod runs on every worker node as a DaemonSet. Client pods connecting to the cache via a Service should only route to the local cache pod on the same node to avoid network hops.",
    question: "Which Service setting restricts internal cluster traffic to pods on the same node?",
    options: [
      { id: 'A', text: "internalTrafficPolicy: Local" },
      { id: 'B', text: "internalTrafficPolicy: Cluster (default)" },
      { id: 'C', text: "externalTrafficPolicy: Local" },
      { id: 'D', text: "sessionAffinity: Node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal cluster traffic exclusively to endpoints running on the same node as the caller. If no local endpoint exists, the traffic is dropped, eliminating inter-node network transit for node-local daemons.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Kubernetes", "Services", "internalTrafficPolicy"]
  },
  {
    id: "k8s-ckad-238",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Controller NGINX Annotations: Rewrite Target",
    scenario: "An Ingress exposes an API at path `/api/v1/(.*)`. Incoming requests to `/api/v1/users` must be forwarded to the backend container simply as `/users` without the `/api/v1` prefix.",
    question: "Which NGINX Ingress Controller annotation rewrites the URL path forwarded to the backend?",
    options: [
      { id: 'A', text: "ingress.kubernetes.io/strip-prefix: /api/v1" },
      { id: 'B', text: "nginx.ingress.kubernetes.io/redirect-url: /users" },
      { id: 'C', text: "pathRewrite: true" },
      { id: 'D', text: "nginx.ingress.kubernetes.io/rewrite-target: /$1" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The NGINX Ingress Controller annotation `nginx.ingress.kubernetes.io/rewrite-target: /$1` captures the regex group in the path (e.g. `path: /api/v1/(.*)`) and rewrites the upstream request to `/$1`, stripping prefixes before reaching backend microservices.",
    referenceUrl: "https://kubernetes.github.io/ingress-nginx/examples/rewrite/",
    tags: ["Kubernetes", "Ingress", "NGINX Annotations"]
  },
  {
    id: "k8s-ckad-239",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Controller NGINX Annotations: SSL Redirect",
    scenario: "An enterprise web application requires all incoming plain HTTP connections to be redirected automatically to HTTPS (HTTP 308/301).",
    question: "Which NGINX Ingress Controller annotation enforces HTTPS redirection?",
    options: [
      { id: 'A', text: "httpRedirect: true" },
      { id: 'B', text: "spec.tls.enforce: true" },
      { id: 'C', text: "nginx.ingress.kubernetes.io/ssl-redirect: 'true'" },
      { id: 'D', text: "nginx.ingress.kubernetes.io/force-https: 'true'" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The annotation `nginx.ingress.kubernetes.io/ssl-redirect: 'true'` forces the NGINX Ingress Controller to redirect all incoming plain-text HTTP requests to HTTPS with an HTTP 308 Permanent Redirect when TLS is enabled on the Ingress.",
    referenceUrl: "https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#server-side-https-enforcement-through-redirect",
    tags: ["Kubernetes", "Ingress", "SSL Redirect"]
  },
  {
    id: "k8s-ckad-240",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kube-Proxy Modes: iptables vs IPVS vs eBPF (Cilium)",
    scenario: "A large Kubernetes cluster with 10,000 Services experiences severe network latency during service updates due to linear rule traversal overhead in Linux iptables.",
    question: "Which kube-proxy mode uses O(1) hash tables to deliver high performance at massive service scale?",
    options: [
      { id: 'A', text: "bridge mode" },
      { id: 'B', text: "iptables mode (default)" },
      { id: 'C', text: "userspace mode (legacy)" },
      { id: 'D', text: "IPVS mode" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "While `iptables` mode evaluates rules sequentially in an O(N) linear list, `IPVS` (IP Virtual Server) uses netlink hash tables with O(1) lookups, providing superior scalability, lower latency, and advanced load balancing algorithms (least-connection, weighted) for large clusters.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-modes",
    tags: ["Kubernetes", "kube-proxy", "IPVS"]
  },
  {
    id: "k8s-ckad-241",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Container Network Interface (CNI) Architecture Overview",
    scenario: "A new pod is scheduled onto a worker node and initialized by the kubelet.",
    question: "What is the primary networking responsibility of the CNI network plugin during pod sandbox creation?",
    options: [
      { id: 'A', text: "It provisions a virtual ethernet pair (veth), connects the container to the node network bridge, and assigns an IP address from the pod CIDR subnet" },
      { id: 'B', text: "It compiles application source code into binaries" },
      { id: 'C', text: "It manages persistent disk attachment" },
      { id: 'D', text: "It checks user IAM permissions" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CNI plugin is invoked by the kubelet during pod sandbox creation. It creates a network namespace, provisions a virtual ethernet pair (`veth`), assigns an IP address via IPAM, and attaches the container interface to the cluster overlay network.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Kubernetes", "CNI", "Container Networking"]
  },
  {
    id: "k8s-ckad-242",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Pod IP Allocation: Flat Pod Network Model",
    scenario: "A network architect reviews the core specifications of the Kubernetes networking design.",
    question: "What is the fundamental architectural requirement of the Kubernetes network model regarding inter-pod communication?",
    options: [
      { id: 'A', text: "Every pod receives a unique IP address and can communicate with every other pod on any node without using Network Address Translation (NAT)" },
      { id: 'B', text: "Pods must communicate through a central proxy server" },
      { id: 'C', text: "Pods on different nodes must use NAT" },
      { id: 'D', text: "Pods share IP addresses with the host node by default" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The fundamental Kubernetes network requirement is: `Every pod gets its own IP address`, and `pods on any node can communicate with all pods on all nodes without NAT`. This flat network model simplifies port allocation and legacy app migration.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model",
    tags: ["Kubernetes", "Network Model", "Flat Networking"]
  },
  {
    id: "k8s-ckad-243",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Debugging Service Connection Refused vs Timeout",
    scenario: "A developer tests connectivity to a ClusterIP Service. When running `curl &lt;service-ip&gt;:&lt;port&gt;`, the command hangs and eventually times out. However, `ping &lt;service-ip&gt;` succeeds.",
    question: "What is the most likely cause of a connection timeout on a Kubernetes Service?",
    options: [
      { id: 'A', text: "A NetworkPolicy is silently dropping the traffic packets" },
      { id: 'B', text: "The pod container is listening on port 80" },
      { id: 'C', text: "The Service is healthy" },
      { id: 'D', text: "CoreDNS resolved the domain" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `Connection refused` error indicates the packet reached the host/container but no process was listening on that port. A `Connection timed out` indicates packets are being silently discarded, typically by a `NetworkPolicy` or firewall dropping ingress/egress packets.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Kubernetes", "Troubleshooting", "Service Diagnostics"]
  },
  {
    id: "k8s-ckad-244",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Controller NGINX Annotations: Rate Limiting",
    scenario: "A public Ingress for an authentication service needs to prevent brute-force login attacks by restricting clients to at most 10 requests per minute per IP address.",
    question: "Which NGINX Ingress Controller annotations configure client rate limits?",
    options: [
      { id: 'A', text: "ingressRateLimit: true" },
      { id: 'B', text: "nginx.ingress.kubernetes.io/max-bandwidth: 10m" },
      { id: 'C', text: "spec.rateLimit: 10" },
      { id: 'D', text: "nginx.ingress.kubernetes.io/limit-rps: '10' (or limit-connections)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The NGINX Ingress Controller supports rate limiting via annotations such as `nginx.ingress.kubernetes.io/limit-rps: '10'` (requests per second) and `limit-rpm` (requests per minute), returning HTTP 503/429 when clients exceed thresholds.",
    referenceUrl: "https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#rate-limiting",
    tags: ["Kubernetes", "Ingress", "Rate Limiting"]
  },
  {
    id: "k8s-ckad-245",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kubernetes Service Headless Direct Pod FQDN vs Service FQDN",
    scenario: "In a StatefulSet named db with a headless service named db-svc, developers query DNS from inside the cluster.",
    question: "How does the DNS record for the entire service differ from the DNS record of an individual pod?",
    options: [
      { id: 'A', text: "Both FQDNs return only db-0" },
      { id: 'B', text: "StatefulSet pods cannot have individual DNS records" },
      { id: 'C', text: "The service FQDN (db-svc.default.svc.cluster.local) returns all pod IPs; the pod FQDN (db-0.db-svc.default.svc.cluster.local) returns only db-0's IP" },
      { id: 'D', text: "The pod FQDN returns an external public IP" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Querying the headless service FQDN (`db-svc...`) returns an unranked list of A records for all ready pods. Querying the pod's specific FQDN (`db-0.db-svc...`) returns the single IP of that exact pod instance, enabling predictable stateful addressing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id",
    tags: ["Kubernetes", "StatefulSets", "DNS"]
  },
  {
    id: "k8s-ckad-246",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Gateway API: HTTPRoute Path and Header Matching",
    scenario: "A developer uses an HTTPRoute to route mobile app users (carrying HTTP header `user-agent: MobileApp`) to a specialized mobile backend service.",
    question: "How does HTTPRoute declare header matching rules?",
    options: [
      { id: 'A', text: "Under rules.matches, specify headers: [{ name: user-agent, value: MobileApp }]" },
      { id: 'B', text: "Through an iptables rule" },
      { id: 'C', text: "Under spec.annotations: { headerMatch: MobileApp }" },
      { id: 'D', text: "Using a DaemonSet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Gateway API `HTTPRoute` provides native, declarative header matching in `rules.matches.headers` (supporting `Exact` and `RegularExpression` match types) without relying on proprietary controller annotations.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/guides/http-routing/#header-matching",
    tags: ["Gateway API", "HTTPRoute", "Header Matching"]
  },
  {
    id: "k8s-ckad-247",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing Ingress from Ingress Controller Namespaces",
    scenario: "A default-deny ingress policy is applied to namespace `app`. Pods must receive incoming HTTP traffic from an NGINX Ingress controller running in namespace `ingress-nginx`.",
    question: "Which NetworkPolicy rule permits traffic from the ingress controller pods?",
    options: [
      { id: 'A', text: "ingress: [{ from: [{ podSelector: { name: nginx } }] } alone" },
      { id: 'B', text: "ingress: [public]" },
      { id: 'C', text: "ingress: [{ from: [{ hostIP: true }] }]" },
      { id: 'D', text: "ingress: [{ from: [{ namespaceSelector: { matchLabels: { 'kubernetes.io/metadata.name': 'ingress-nginx' } } }] }]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ingress controllers run as pods. To allow traffic from the ingress controller into a secured namespace, the target pods must have a NetworkPolicy whose `from.namespaceSelector` permits traffic from the ingress controller's namespace (e.g. `ingress-nginx`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["Kubernetes", "NetworkPolicy", "Ingress Controller Access"]
  },
  {
    id: "k8s-ckad-248",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service Topology Aware Routing (service.kubernetes.io/topology-mode)",
    scenario: "A multi-zone cluster deploys an application across 3 availability zones. Cross-zone network traffic generates high cloud egress bandwidth fees.",
    question: "Which Service feature prefers routing traffic to backend pods located in the same availability zone as the client?",
    options: [
      { id: 'A', text: "nodeSelector" },
      { id: 'B', text: "Topology Aware Routing (topology.kubernetes.io/zone via service.kubernetes.io/topology-mode: Auto)" },
      { id: 'C', text: "externalTrafficPolicy: Local alone" },
      { id: 'D', text: "sessionAffinity: Zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Topology Aware Routing` adjusts EndpointSlices to prefer routing Service traffic to endpoints in the same availability zone as the client caller, reducing latency and slashing expensive cross-zone cloud data transfer costs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/topology-aware-routing/",
    tags: ["Kubernetes", "Topology Aware Routing", "Cost Optimization"]
  },
  {
    id: "k8s-ckad-249",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service TargetPort as Named Port for Container Flexibility",
    scenario: "In a Service manifest, a developer specifies `targetPort: http-web`. In the matching pod manifest, the container defines `ports: [{ name: http-web, containerPort: 8080 }]`.",
    question: "What is the architectural benefit of using named targetPorts instead of raw port numbers?",
    options: [
      { id: 'A', text: "It decouples the Service from the container's physical port; changing the container port from 8080 to 9000 requires no changes to the Service manifest" },
      { id: 'B', text: "It speeds up packet routing by 2x" },
      { id: 'C', text: "It enables automatic SSL encryption" },
      { id: 'D', text: "Named ports are required for all Services" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using named targetPorts (`targetPort: http-web`) provides flexibility. If developers change the container port from 8080 to 9000, they only update `containerPort: 9000` in the pod template; the Service manifest remains unchanged because the port name `http-web` is preserved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Kubernetes", "Services", "Named Ports"]
  },
  {
    id: "k8s-ckad-250",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Kubernetes Network Troubleshooting: Testing Connectivity with Curl and Netcat",
    scenario: "An application pod cannot connect to `payment-service:8080`. An engineer needs to verify whether TCP port 8080 is reachable from inside the pod's network namespace.",
    question: "Which command tests raw TCP socket connectivity to the destination IP and port?",
    options: [
      { id: 'A', text: "nc -zv -w 3 payment-service 8080 (or curl -v payment-service:8080)" },
      { id: 'B', text: "kubectl describe service payment-service alone" },
      { id: 'C', text: "traceroute payment-service alone" },
      { id: 'D', text: "ping payment-service (ICMP is often blocked by Kubernetes CNIs)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`nc -zv -w 3 &lt;host&gt; &lt;port&gt;` tests whether a TCP connection can be established. Testing with `ping` frequently gives false negatives because many Kubernetes CNIs and cloud virtual networks drop ICMP ping packets even when TCP routing is functioning perfectly.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/#does-the-service-work-by-dns-name",
    tags: ["Kubernetes", "Network Troubleshooting", "netcat"]
  }
];

export default K8S_CKAD_QUESTIONS_10;
