export const K8S_CKAD_FLASHCARDS_10 = [
  {
    id: "k8s-ckad-fc-226",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "CoreDNS: SRV Records for Named Ports",
    hint: "Dynamic port discovery via DNS.",
    back: "CoreDNS generates SRV records formatted as <strong>_&lt;port-name&gt;._&lt;protocol&gt;.&lt;service&gt;.&lt;ns&gt;.svc.cluster.local</strong>.",
    tags: ["Kubernetes", "CoreDNS", "SRV Records"]
  },
  {
    id: "k8s-ckad-fc-227",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Gateway API: Core Resource Hierarchy",
    hint: "GatewayClass, Gateway, and HTTPRoute roles.",
    back: "The Gateway API decouples personas: <strong>GatewayClass</strong> (infrastructure), <strong>Gateway</strong> (cluster platform ops), and <strong>HTTPRoute</strong> (application developers).",
    tags: ["Gateway API", "HTTPRoute", "Next-Gen Networking"]
  },
  {
    id: "k8s-ckad-fc-228",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Gateway API: Native Weighted Traffic Splitting",
    hint: "Declarative canary traffic weights.",
    back: "The Gateway API natively splits traffic by assigning <strong>weight: 80</strong> and <strong>weight: 20</strong> directly in <strong>HTTPRoute backendRefs</strong>.",
    tags: ["Gateway API", "HTTPRoute", "Traffic Splitting"]
  },
  {
    id: "k8s-ckad-fc-229",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Mandatory CoreDNS Egress",
    hint: "Permitting port 53 UDP/TCP.",
    back: "When default-deny egress is active, you must explicitly permit <strong>UDP/TCP port 53 egress</strong> to CoreDNS to prevent DNS resolution failures.",
    tags: ["Kubernetes", "NetworkPolicy", "DNS Egress"]
  },
  {
    id: "k8s-ckad-fc-230",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services Without Selectors: Manual Endpoints",
    hint: "Routing cluster traffic to external IPs.",
    back: "Create a <strong>Service without a selector</strong> and manually define an <strong>Endpoints</strong> object to route traffic to external databases or legacy servers.",
    tags: ["Kubernetes", "Services", "Manual Endpoints"]
  },
  {
    id: "k8s-ckad-fc-231",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: externalIPs Behavior",
    hint: "Rerouting specific IPs to cluster pods.",
    back: "<strong>externalIPs</strong> causes kube-proxy to intercept traffic destined for that IP and route it to backend pods; restrict via admission controllers.",
    tags: ["Kubernetes", "Services", "externalIPs"]
  },
  {
    id: "k8s-ckad-fc-232",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: publishNotReadyAddresses",
    hint: "Exposing endpoints during cluster bootstrap.",
    back: "Enable <strong>publishNotReadyAddresses: true</strong> on headless services to allow peer pods to discover each other before readiness checks pass.",
    tags: ["Kubernetes", "Services", "publishNotReadyAddresses"]
  },
  {
    id: "k8s-ckad-fc-233",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Pod DNS Policy: ClusterFirstWithHostNet",
    hint: "CoreDNS resolution for hostNetwork pods.",
    back: "Set <strong>dnsPolicy: ClusterFirstWithHostNet</strong> on hostNetwork pods to enable in-cluster CoreDNS service discovery.",
    tags: ["Kubernetes", "CoreDNS", "dnsPolicy"]
  },
  {
    id: "k8s-ckad-fc-234",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Pod DNS: dnsConfig Customization",
    hint: "Adding custom nameservers and search domains.",
    back: "Use <strong>spec.dnsConfig</strong> to inject custom nameservers, search domains, and ndots options directly into the pod's resolv.conf.",
    tags: ["Kubernetes", "dnsConfig", "DNS Tuning"]
  },
  {
    id: "k8s-ckad-fc-235",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Allow All Ingress",
    hint: "Unrestricted incoming connections.",
    back: "Define <strong>ingress: [{}]</strong> to explicitly allow all incoming network traffic on all ports from all sources.",
    tags: ["Kubernetes", "NetworkPolicy", "Allow All"]
  },
  {
    id: "k8s-ckad-fc-236",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Allow All Egress",
    hint: "Unrestricted outbound connections.",
    back: "Configure <strong>egress: [{}]</strong> to permit unrestricted outbound traffic to all external destinations.",
    tags: ["Kubernetes", "NetworkPolicy", "Allow All Egress"]
  },
  {
    id: "k8s-ckad-fc-237",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: internalTrafficPolicy Local",
    hint: "Node-local routing for minimal latency.",
    back: "Set <strong>internalTrafficPolicy: Local</strong> to route internal Service calls exclusively to pods on the same node, eliminating network latency.",
    tags: ["Kubernetes", "Services", "internalTrafficPolicy"]
  },
  {
    id: "k8s-ckad-fc-238",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NGINX Ingress: rewrite-target Annotation",
    hint: "Stripping URL prefixes before forwarding to backends.",
    back: "Use <strong>nginx.ingress.kubernetes.io/rewrite-target: /$1</strong> to rewrite incoming URL paths before forwarding traffic to upstream pods.",
    tags: ["Kubernetes", "Ingress", "NGINX Annotations"]
  },
  {
    id: "k8s-ckad-fc-239",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NGINX Ingress: ssl-redirect Annotation",
    hint: "Enforcing HTTPS redirection.",
    back: "Annotate Ingress with <strong>nginx.ingress.kubernetes.io/ssl-redirect: 'true'</strong> to automatically redirect plain HTTP requests to HTTPS.",
    tags: ["Kubernetes", "Ingress", "SSL Redirect"]
  },
  {
    id: "k8s-ckad-fc-240",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "kube-proxy Modes: iptables vs. IPVS",
    hint: "O(1) hash table performance for large clusters.",
    back: "Switch kube-proxy to <strong>IPVS mode</strong> for O(1) hash-table lookups that eliminate latency bottlenecks in clusters with thousands of Services.",
    tags: ["Kubernetes", "kube-proxy", "IPVS"]
  },
  {
    id: "k8s-ckad-fc-241",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes: CNI Plugin Lifecycle",
    hint: "Assigning pod IPs and provisioning veth pairs.",
    back: "The <strong>CNI plugin</strong> provisions virtual ethernet interfaces (veth pairs), connects pods to the network bridge, and assigns pod IP addresses upon pod startup.",
    tags: ["Kubernetes", "CNI", "Container Networking"]
  },
  {
    id: "k8s-ckad-fc-242",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes: The Pod Network Model",
    hint: "Unique IP per pod with NAT-free communication.",
    back: "Kubernetes enforces a <strong>flat network model</strong>: every pod gets a distinct IP address and can communicate with all other pods across nodes without NAT.",
    tags: ["Kubernetes", "Network Model", "Flat Networking"]
  },
  {
    id: "k8s-ckad-fc-243",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service Troubleshooting: Refused vs. Timeout",
    hint: "Diagnosing closed ports vs NetworkPolicy packet drops.",
    back: "A <strong>timeout</strong> usually indicates packets were dropped by a <strong>NetworkPolicy</strong>; a <strong>connection refused</strong> indicates the port has no listening process.",
    tags: ["Kubernetes", "Troubleshooting", "Service Diagnostics"]
  },
  {
    id: "k8s-ckad-fc-244",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NGINX Ingress: Rate Limiting Annotations",
    hint: "Protecting endpoints from brute-force floods.",
    back: "Apply <strong>nginx.ingress.kubernetes.io/limit-rps</strong> annotations to throttle abusive client request rates at the ingress controller.",
    tags: ["Kubernetes", "Ingress", "Rate Limiting"]
  },
  {
    id: "k8s-ckad-fc-245",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "StatefulSet DNS: Service vs Pod FQDNs",
    hint: "Multi-pod resolution vs individual pod addressing.",
    back: "The headless service FQDN resolves to <strong>all ready pod IPs</strong>; the pod FQDN (<code>&lt;pod&gt;.&lt;svc&gt;...</code>) resolves strictly to <strong>that single pod's IP</strong>.",
    tags: ["Kubernetes", "StatefulSets", "DNS"]
  },
  {
    id: "k8s-ckad-fc-246",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Gateway API: Declarative Header Matching",
    hint: "Native routing on HTTP request headers.",
    back: "Declare <strong>rules.matches.headers</strong> in an HTTPRoute to route traffic based on HTTP headers (e.g. mobile user-agent).",
    tags: ["Gateway API", "HTTPRoute", "Header Matching"]
  },
  {
    id: "k8s-ckad-fc-247",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Ingress Controller Whitelisting",
    hint: "Allowing traffic from ingress controller pods.",
    back: "Whitelist the ingress controller's namespace using <strong>namespaceSelector: { matchLabels: { 'kubernetes.io/metadata.name': 'ingress-nginx' } }</strong> in your ingress policy.",
    tags: ["Kubernetes", "NetworkPolicy", "Ingress Controller Access"]
  },
  {
    id: "k8s-ckad-fc-248",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes: Topology Aware Routing",
    hint: "Keeping traffic within the same availability zone.",
    back: "Enable <strong>Topology Aware Routing</strong> on Services to route traffic to same-zone pods, minimizing cross-zone latency and cloud data transfer fees.",
    tags: ["Kubernetes", "Topology Aware Routing", "Cost Optimization"]
  },
  {
    id: "k8s-ckad-fc-249",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: Named targetPort Architecture",
    hint: "Decoupling service definitions from container port numbers.",
    back: "Use <strong>named targetPorts</strong> (e.g. <code>targetPort: http-web</code>) so changing container port numbers in pods requires zero changes to Service manifests.",
    tags: ["Kubernetes", "Services", "Named Ports"]
  },
  {
    id: "k8s-ckad-fc-250",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Network Troubleshooting: nc vs ping",
    hint: "Testing TCP connectivity over ICMP.",
    back: "Use <strong>nc -zv &lt;host&gt; &lt;port&gt;</strong> or curl to test TCP reachability; avoid ping because Kubernetes CNIs often discard ICMP packets.",
    tags: ["Kubernetes", "Network Troubleshooting", "netcat"]
  }
];

export default K8S_CKAD_FLASHCARDS_10;
