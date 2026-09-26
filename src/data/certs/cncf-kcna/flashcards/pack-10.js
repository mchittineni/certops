export const CNCF_KCNA_FLASHCARDS_10 = [
  {
    id: "cncf-kcna-fc-226",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Ingress resource vs ingress controller",
    hint: "Rules versus the thing that enforces them.",
    back: "An <strong>Ingress</strong> is an API object holding HTTP(S) routing rules (hosts, paths, TLS). An <strong>ingress controller</strong> (ingress-nginx, Traefik, Contour, HAProxy, cloud controllers) watches those objects and configures a proxy to serve them. Without a controller, an Ingress does nothing.",
    tags: ["Ingress"]
  },
  {
    id: "cncf-kcna-fc-227",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What can an Ingress route on, and what can it not handle?",
    hint: "Layer 7 HTTP only.",
    back: "It routes <strong>HTTP/HTTPS</strong> by <strong>host</strong> and <strong>path</strong>, terminates TLS and has a default backend. It has no standard support for raw TCP/UDP, header-based matching or traffic weights; controllers add these with annotations. The <strong>Gateway API</strong> standardises them.",
    tags: ["Ingress"]
  },
  {
    id: "cncf-kcna-fc-228",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Why put many HTTP services behind one Ingress or Gateway instead of many LoadBalancer Services?",
    hint: "Count the cloud load balancers.",
    back: "Each LoadBalancer Service usually provisions its <strong>own cloud load balancer and IP</strong>, each billed. An Ingress/Gateway uses <strong>one</strong> load balancer and routes by host and path to ClusterIP Services, centralising TLS, and needs only one DNS target.",
    tags: ["Ingress","LoadBalancer"]
  },
  {
    id: "cncf-kcna-fc-229",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "kubectl expose: what does it create and where does the selector come from?",
    hint: "It copies from an existing object.",
    back: "<code>kubectl expose deployment web --port=80 --target-port=8080</code> creates a <strong>Service</strong> (ClusterIP by default, <code>--type</code> to change) whose selector is <strong>copied from the Deployment's pod selector</strong>. Add <code>--dry-run=client -o yaml</code> to generate YAML instead.",
    tags: ["kubectl expose"]
  },
  {
    id: "cncf-kcna-fc-230",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What rule applies to a Service that exposes more than one port?",
    hint: "Tell them apart.",
    back: "Every port must have a <strong>name</strong> (lowercase alphanumeric and dashes, e.g. <code>http</code>, <code>metrics</code>). Names are used by EndpointSlices, DNS SRV records (<code>_http._tcp.svc...</code>), Ingress/Gateway backends and <code>targetPort</code> references to named container ports.",
    tags: ["Services"]
  },
  {
    id: "cncf-kcna-fc-231",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Name three CNI plugins and a distinguishing trait of each.",
    hint: "Simple, BGP, eBPF.",
    back: "<strong>Flannel</strong>: simple overlay (VXLAN), no NetworkPolicy enforcement by itself. <strong>Calico</strong>: routed (BGP) or overlay, strong NetworkPolicy support. <strong>Cilium</strong>: eBPF-based, NetworkPolicy plus L7 policy, kube-proxy replacement, Hubble observability. Without any CNI plugin, nodes stay NotReady.",
    tags: ["CNI","Cilium"]
  },
  {
    id: "cncf-kcna-fc-232",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Why does ping to a Service ClusterIP usually fail even when the Service works?",
    hint: "Virtual IP, port-specific rules.",
    back: "A ClusterIP is a <strong>virtual IP</strong> not bound to any interface. kube-proxy (iptables/nftables/IPVS) or an eBPF replacement only translates traffic for the Service's <strong>declared ports and protocols</strong>. ICMP echo matches nothing, so test with <code>curl</code> or <code>nc</code> against the port instead.",
    tags: ["ClusterIP"]
  },
  {
    id: "cncf-kcna-fc-233",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What does an Ingress defaultBackend do?",
    hint: "The catch-all.",
    back: "It receives every request that matches <strong>no host or path rule</strong>. Without it, the controller's own default (often a 404 page) answers. Set <code>spec.defaultBackend</code> to a Service to show a custom landing or error page.",
    tags: ["Ingress"]
  },
  {
    id: "cncf-kcna-fc-234",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What does sessionAffinity: ClientIP do on a Service, and what are its limits?",
    hint: "Stickiness by source address, not by cookie.",
    back: "The default is <strong>None</strong>: each new connection can go to any ready endpoint. With <strong>ClientIP</strong>, connections from the same source IP go to the same Pod until a timeout (<code>sessionAffinityConfig.clientIP.timeoutSeconds</code>, default 10800 seconds, three hours). It works on IP only, so clients behind one NAT or proxy all land on the same Pod, and it cannot do HTTP cookie affinity; use an Ingress or Gateway controller feature for that.",
    tags: ["Services", "Session affinity"]
  },
  {
    id: "cncf-kcna-fc-235",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Ingress pathType: Exact vs Prefix vs ImplementationSpecific",
    hint: "Which one is portable for subpaths?",
    back: "<strong>Exact</strong>: the literal path only. <strong>Prefix</strong>: matches by <strong>path element</strong>, so <code>/api</code> matches <code>/api</code> and <code>/api/v1</code> but not <code>/apiv2</code>. <strong>ImplementationSpecific</strong>: the controller decides. When several paths match, the longest match wins, and Exact beats Prefix.",
    tags: ["Ingress","pathType"]
  },
  {
    id: "cncf-kcna-fc-236",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "How does an Ingress terminate TLS?",
    hint: "A specific Secret type.",
    back: "Create a Secret of type <code>kubernetes.io/tls</code> with <code>tls.crt</code> and <code>tls.key</code> in the <strong>same namespace</strong> as the Ingress, then list the hosts and <code>secretName</code> under <code>spec.tls</code>. cert-manager can issue and renew these Secrets automatically.",
    tags: ["Ingress","TLS"]
  },
  {
    id: "cncf-kcna-fc-237",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What is an IngressClass for?",
    hint: "Several controllers, one cluster.",
    back: "An <strong>IngressClass</strong> names a controller implementation. Each Ingress picks one with <code>spec.ingressClassName</code>. A class annotated <code>ingressclass.kubernetes.io/is-default-class: \"true\"</code> applies to Ingresses that name none. It replaces the old <code>kubernetes.io/ingress.class</code> annotation.",
    tags: ["IngressClass"]
  },
  {
    id: "cncf-kcna-fc-238",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Gateway API resources and who typically owns each",
    hint: "Infrastructure provider, cluster operator, app developer.",
    back: "<strong>GatewayClass</strong>: the implementation, set by the infrastructure provider. <strong>Gateway</strong>: listeners (ports, protocols, TLS), owned by cluster operators. <strong>HTTPRoute / GRPCRoute</strong> (and experimental TCPRoute, UDPRoute, TLSRoute): routing rules, owned by application teams, attached to Gateways. Weighted <code>backendRefs</code> enable traffic splitting.",
    tags: ["Gateway API"]
  },
  {
    id: "cncf-kcna-fc-239",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Gateway API vs Ingress: what does Gateway API add?",
    hint: "Portability beyond annotations.",
    back: "Role-oriented resources; <strong>header, query and method matching</strong>; <strong>weighted traffic splitting</strong>; request/response filters (redirects, header changes); <strong>gRPC</strong> routes and experimental TCP/UDP/TLS routes; cross-namespace attachment controlled by ReferenceGrant. Ingress remains stable at v1 but is frozen in scope.",
    tags: ["Gateway API","Ingress"]
  },
  {
    id: "cncf-kcna-fc-240",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Why does a LoadBalancer Service stay pending on bare metal, and what fixes it?",
    hint: "Someone must hand out the IP.",
    back: "Nothing provisions an external address: clouds do this through the <strong>cloud controller manager</strong>. On bare metal, deploy a load-balancer implementation such as <strong>MetalLB</strong> (L2 ARP/NDP or BGP announcements from an IP pool), or a CNI with equivalent features (e.g. Cilium LB IPAM).",
    tags: ["LoadBalancer","MetalLB"]
  },
  {
    id: "cncf-kcna-fc-241",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "ExternalName Service vs selectorless Service with a manual EndpointSlice",
    hint: "DNS name versus IP address.",
    back: "<strong>ExternalName</strong> returns a DNS <strong>CNAME</strong> to an external hostname: no ClusterIP, no proxying, no ports. A <strong>Service without a selector</strong> plus an EndpointSlice (label <code>kubernetes.io/service-name</code>) gives a normal ClusterIP that forwards to <strong>IP addresses</strong> you list, useful for external databases with only an IP.",
    tags: ["Services","EndpointSlices"]
  },
  {
    id: "cncf-kcna-fc-242",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "How do you make pods resolve a private corporate domain?",
    hint: "Configure CoreDNS once.",
    back: "Edit the <strong>coredns ConfigMap</strong> (Corefile) and add a server block, e.g. <code>corp.internal:53 { forward . 10.0.0.53 }</code>. All pods using ClusterFirst DNS get it with no spec changes. Per-pod alternatives (<code>dnsConfig</code>, <code>hostAliases</code>) exist but scale poorly.",
    tags: ["CoreDNS"]
  },
  {
    id: "cncf-kcna-fc-243",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What does a service mesh add to Kubernetes networking?",
    hint: "A proxy in every call path.",
    back: "A data plane of proxies (sidecars such as Envoy or linkerd2-proxy, or node-level/ambient proxies) plus a control plane. It adds <strong>mTLS</strong>, <strong>retries, timeouts, circuit breaking</strong>, <strong>traffic splitting</strong> and <strong>per-request metrics and traces</strong> without application code changes. Examples: Istio, Linkerd (both CNCF graduated).",
    tags: ["Service mesh"]
  },
  {
    id: "cncf-kcna-fc-244",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Overlay vs routed (native) pod networking",
    hint: "Encapsulate, or teach the network the routes.",
    back: "<strong>Overlay</strong> (VXLAN, Geneve, IP-in-IP): pod packets are encapsulated between node IPs; works on any underlay, small overhead. <strong>Routed</strong>: pod CIDRs are routed natively, often advertised via <strong>BGP</strong> or cloud route tables; no encapsulation, but the network must accept the routes.",
    tags: ["CNI","Overlay"]
  },
  {
    id: "cncf-kcna-fc-245",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Why do gRPC clients often hit only one pod behind a ClusterIP Service?",
    hint: "Balanced per connection, not per request.",
    back: "kube-proxy balances at <strong>L4 per connection</strong>. gRPC multiplexes many requests over one long-lived <strong>HTTP/2</strong> connection, so each client sticks to one pod. Fix with a <strong>headless Service</strong> plus client-side balancing, or an L7 proxy/mesh that balances per request.",
    tags: ["gRPC","Headless Service"]
  },
  {
    id: "cncf-kcna-fc-246",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Where do pod IP addresses come from?",
    hint: "Cluster range, node blocks, CNI IPAM.",
    back: "A cluster <strong>pod CIDR</strong> is split into <strong>per-node blocks</strong> (default <code>/24</code> in kubeadm, about 254 pods) by the node IPAM controller, and the CNI's IPAM assigns addresses from the node's block. Some CNIs manage their own pools, and cloud CNIs may use VPC addresses. A range too small caps node count.",
    tags: ["Pod CIDR","IPAM"]
  },
  {
    id: "cncf-kcna-fc-247",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "kube-proxy modes on Linux: iptables, IPVS, nftables",
    hint: "Which one is the modern choice for scale?",
    back: "<strong>iptables</strong>: long-time default; rule updates slow down with very many Services. <strong>IPVS</strong>: kernel load balancer with more scheduling algorithms; upstream now recommends nftables for new large clusters. <strong>nftables</strong>: GA since 1.33, incremental updates and map-based matching, designed for large clusters. The old <strong>userspace</strong> mode is removed. eBPF CNIs such as Cilium can replace kube-proxy entirely.",
    tags: ["kube-proxy"]
  },
  {
    id: "cncf-kcna-fc-248",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "Pod dnsPolicy values: ClusterFirst, ClusterFirstWithHostNet, Default, None",
    hint: "Default is not the default.",
    back: "<strong>ClusterFirst</strong> (the actual default): cluster DNS, non-cluster names forwarded upstream. <strong>ClusterFirstWithHostNet</strong>: required for <code>hostNetwork</code> pods to use cluster DNS. <strong>Default</strong>: inherit the node's resolver. <strong>None</strong>: everything comes from <code>dnsConfig</code>.",
    tags: ["DNS","dnsPolicy"]
  },
  {
    id: "cncf-kcna-fc-249",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "What does ndots:5 in a pod's resolv.conf cause?",
    hint: "Search domains are tried first.",
    back: "Names with <strong>fewer than 5 dots</strong> are tried against every search domain (<code>ns.svc.cluster.local</code>, <code>svc.cluster.local</code>, <code>cluster.local</code>, ...) before being queried as-is, multiplying lookups for external names. Mitigate with a <strong>trailing dot</strong> (<code>api.example.com.</code>), a lower <code>ndots</code> via <code>dnsConfig</code>, or NodeLocal DNSCache.",
    tags: ["DNS","ndots"]
  },
  {
    id: "cncf-kcna-fc-250",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    front: "internalTrafficPolicy Local vs trafficDistribution PreferSameZone",
    hint: "Strict node versus preferred zone.",
    back: "<strong>internalTrafficPolicy: Local</strong>: in-cluster traffic goes only to endpoints on the <strong>same node</strong>; if none exist, it is dropped. <strong>trafficDistribution: PreferSameZone</strong> (older name PreferClose): prefer endpoints in the client's <strong>zone</strong>, falling back to others; <code>PreferSameNode</code> prefers the same node, again with fallback. <strong>externalTrafficPolicy</strong> governs only traffic entering from outside.",
    tags: ["Services","Topology-aware routing"]
  }
];

export default CNCF_KCNA_FLASHCARDS_10;
