export const K8S_CKAD_FLASHCARDS_9 = [
  {
    id: "k8s-ckad-fc-201",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Services: ClusterIP",
    hint: "Default internal virtual IP load balancing.",
    back: "<strong>ClusterIP</strong> provides an internal-only virtual IP that load-balances traffic across matching pods inside the cluster.",
    tags: ["Kubernetes", "Services", "ClusterIP"]
  },
  {
    id: "k8s-ckad-fc-202",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Services: NodePort Range",
    hint: "Port range 30000-32767.",
    back: "NodePort services allocate a port from the default range <strong>30000-32767</strong> across all worker nodes to route external traffic to pods.",
    tags: ["Kubernetes", "Services", "NodePort"]
  },
  {
    id: "k8s-ckad-fc-203",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service Port Mapping: port, targetPort, nodePort",
    hint: "Internal, container, and node port definitions.",
    back: "<strong>port</strong> is on the Service ClusterIP; <strong>targetPort</strong> is on the container; <strong>nodePort</strong> is opened on all node host IPs.",
    tags: ["Kubernetes", "Services", "Port Mapping"]
  },
  {
    id: "k8s-ckad-fc-204",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Services: LoadBalancer",
    hint: "Automated cloud load balancer provisioning.",
    back: "<strong>type: LoadBalancer</strong> instructs the underlying cloud provider to provision an external public load balancer routing traffic into the cluster.",
    tags: ["Kubernetes", "Services", "LoadBalancer"]
  },
  {
    id: "k8s-ckad-fc-205",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Services: ExternalName",
    hint: "DNS CNAME mapping to external hostnames.",
    back: "<strong>ExternalName</strong> services return a DNS CNAME record pointing directly to an external hostname without allocating cluster IPs or proxying traffic.",
    tags: ["Kubernetes", "Services", "ExternalName"]
  },
  {
    id: "k8s-ckad-fc-206",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes: Headless Services",
    hint: "Direct multi-pod A-record resolution.",
    back: "A <strong>Headless Service (clusterIP: None)</strong> returns the A records of all ready pod IPs directly, enabling direct peer-to-peer communication.",
    tags: ["Kubernetes", "Headless Service", "CoreDNS"]
  },
  {
    id: "k8s-ckad-fc-207",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes: EndpointSlices",
    hint: "Scalable chunking of service endpoints.",
    back: "<strong>EndpointSlices</strong> partition service endpoints into chunks of up to 100 pods, eliminating etcd bottlenecks during large-scale deployments.",
    tags: ["Kubernetes", "EndpointSlice", "Scalability"]
  },
  {
    id: "k8s-ckad-fc-208",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: sessionAffinity ClientIP",
    hint: "Sticky IP routing via kube-proxy.",
    back: "Set <strong>sessionAffinity: ClientIP</strong> on a Service to route repeat client requests to the same backend pod.",
    tags: ["Kubernetes", "Services", "sessionAffinity"]
  },
  {
    id: "k8s-ckad-fc-209",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Services: externalTrafficPolicy Local",
    hint: "Preserving client source IPs.",
    back: "Configure <strong>externalTrafficPolicy: Local</strong> to preserve true client source IPs and eliminate unnecessary inter-node network hops.",
    tags: ["Kubernetes", "Services", "externalTrafficPolicy"]
  },
  {
    id: "k8s-ckad-fc-210",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Default Deny Ingress",
    hint: "Zero-trust namespace network isolation.",
    back: "A NetworkPolicy with <strong>podSelector: {}</strong>, <strong>policyTypes: [Ingress]</strong>, and no ingress rules blocks all incoming traffic across the namespace.",
    tags: ["Kubernetes", "NetworkPolicy", "Default Deny"]
  },
  {
    id: "k8s-ckad-fc-211",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Default Deny Egress",
    hint: "Blocking all outbound network egress.",
    back: "Declare <strong>podSelector: {}</strong> with <strong>policyTypes: [Egress]</strong> and an empty egress block to block all outbound traffic from the namespace.",
    tags: ["Kubernetes", "NetworkPolicy", "Default Deny Egress"]
  },
  {
    id: "k8s-ckad-fc-212",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Pod-to-Pod Ingress Filtering",
    hint: "Allowing traffic from specific labeled pods.",
    back: "Target the database with <strong>spec.podSelector</strong> and allow callers via <strong>ingress.from.podSelector</strong> on port 5432.",
    tags: ["Kubernetes", "NetworkPolicy", "podSelector"]
  },
  {
    id: "k8s-ckad-fc-213",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: Cross-Namespace Ingress",
    hint: "Matching caller namespaces with namespaceSelector.",
    back: "Use <strong>namespaceSelector</strong> in NetworkPolicy <code>from</code> blocks to permit traffic originating from specific external namespaces.",
    tags: ["Kubernetes", "NetworkPolicy", "namespaceSelector"]
  },
  {
    id: "k8s-ckad-fc-214",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: AND vs. OR Selectors",
    hint: "Combining namespace and pod selectors.",
    back: "Declare namespaceSelector and podSelector in the <strong>same list element for logical AND</strong>; separate list elements evaluate as <strong>logical OR</strong>.",
    tags: ["Kubernetes", "NetworkPolicy", "AND vs OR"]
  },
  {
    id: "k8s-ckad-fc-215",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy: ipBlock with CIDR Exceptions",
    hint: "Allowing public egress while blocking internal subnets.",
    back: "Configure <strong>ipBlock: { cidr: 0.0.0.0/0, except: [10.0.0.0/8] }</strong> to permit internet access while blocking internal VPC subnets.",
    tags: ["Kubernetes", "NetworkPolicy", "ipBlock"]
  },
  {
    id: "k8s-ckad-fc-216",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicies: CNI Enforcement Prerequisite",
    hint: "Why NetworkPolicies require supported CNIs.",
    back: "NetworkPolicies require a <strong>supported CNI plugin (e.g. Calico, Cilium)</strong>; without policy-capable CNI drivers, NetworkPolicy manifests are silently ignored.",
    tags: ["Kubernetes", "NetworkPolicy", "CNI Plugins"]
  },
  {
    id: "k8s-ckad-fc-217",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Ingress: pathType Prefix",
    hint: "Element-based URL path matching.",
    back: "<strong>pathType: Prefix</strong> matches paths separated by slashes (e.g. <code>/api</code> matches <code>/api/v1</code>, but not <code>/apigateway</code>).",
    tags: ["Kubernetes", "Ingress", "pathType"]
  },
  {
    id: "k8s-ckad-fc-218",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress: pathType Exact",
    hint: "Strict character-for-character URL matching.",
    back: "<strong>pathType: Exact</strong> requires an exact character match, rejecting trailing slashes or subpaths.",
    tags: ["Kubernetes", "Ingress", "pathType Exact"]
  },
  {
    id: "k8s-ckad-fc-219",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Ingress: TLS Termination",
    hint: "Configuring HTTPS via spec.tls.",
    back: "Configure <strong>spec.tls</strong> with matching hostnames and a <strong>secretName</strong> referencing a <code>kubernetes.io/tls</code> Secret for edge HTTPS termination.",
    tags: ["Kubernetes", "Ingress", "TLS Termination"]
  },
  {
    id: "k8s-ckad-fc-220",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Ingress: IngressClass",
    hint: "Targeting specific ingress controllers.",
    back: "Set <strong>spec.ingressClassName</strong> to specify which ingress controller (e.g. NGINX, Traefik, ALB) reconciles the Ingress resource.",
    tags: ["Kubernetes", "Ingress", "IngressClass"]
  },
  {
    id: "k8s-ckad-fc-221",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress: Name-Based Virtual Hosting",
    hint: "Routing multiple domains through one IP.",
    back: "Declare multiple entries under <strong>spec.rules</strong> with different <strong>host</strong> values to route multiple domains to different backend services.",
    tags: ["Kubernetes", "Ingress", "Host-Based Routing"]
  },
  {
    id: "k8s-ckad-fc-222",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress: Path-Based Fanout Routing",
    hint: "Routing distinct URL paths to different microservices.",
    back: "Define multiple path entries under <strong>http.paths</strong> for a single host rule to distribute traffic to different microservices based on URL prefixes.",
    tags: ["Kubernetes", "Ingress", "Path Fanout"]
  },
  {
    id: "k8s-ckad-fc-223",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress: defaultBackend",
    hint: "Catch-all handler for unmatched requests.",
    back: "The <strong>defaultBackend</strong> catches all HTTP requests that fail to match any declared host or path rules, typically serving custom 404 error pages.",
    tags: ["Kubernetes", "Ingress", "defaultBackend"]
  },
  {
    id: "k8s-ckad-fc-224",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes DNS: Pod /etc/resolv.conf",
    hint: "nameserver, search domains, and ndots:5.",
    back: "Containers inherit <strong>/etc/resolv.conf</strong> pointing to CoreDNS with namespace search domains and <code>ndots:5</code> for local service discovery.",
    tags: ["Kubernetes", "CoreDNS", "resolv.conf"]
  },
  {
    id: "k8s-ckad-fc-225",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "CoreDNS: Service FQDN Format",
    hint: "&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local.",
    back: "Address services across namespaces using <strong>&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local</strong> (or simply <code>&lt;service&gt;.&lt;namespace&gt;</code>).",
    tags: ["Kubernetes", "CoreDNS", "Service FQDN"]
  }
];

export default K8S_CKAD_FLASHCARDS_9;
