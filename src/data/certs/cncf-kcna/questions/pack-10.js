export const CNCF_KCNA_QUESTIONS_10 = [
  {
    id: "cncf-kcna-226",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "An Ingress that routes nothing",
    scenario: "A developer on a fresh self-managed cluster applies an Ingress resource that routes shop.example.com to the shop Service. kubectl get ingress shows the object with no address, and requests to the domain never reach the pods. The Service and pods themselves are healthy.",
    question: "What is most likely missing?",
    options: [
      { id: 'A', text: "A NetworkPolicy that allows traffic from the internet into the namespace where the shop pods are running." },
      { id: 'B', text: "A NodePort on the shop Service, because Ingress rules can only forward traffic to NodePort Services." },
      { id: 'C', text: "An ingress controller, such as ingress-nginx, that watches Ingress objects and implements their rules." },
      { id: 'D', text: "A CoreDNS entry for shop.example.com, which the Ingress needs before it will be assigned an address." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An Ingress resource is only a set of routing rules; it has no effect until an ingress controller such as ingress-nginx, Traefik or Contour runs in the cluster, watches Ingress objects, and configures a proxy to serve them, at which point an address appears. Without NetworkPolicies, traffic is allowed by default, so a missing policy is not the cause. Ingress backends are ordinary Services, normally ClusterIP. Public DNS for the domain is configured outside the cluster and points at the controller's address; CoreDNS is not involved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
    tags: ["Ingress","Ingress controller"]
  },
  {
    id: "cncf-kcna-227",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Two websites behind one entry point",
    scenario: "A media company runs a news site and a sports site as two separate Services in one cluster. It wants both reachable on port 443 through a single external IP address, with requests for news.example.com going to one Service and sports.example.com to the other.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Create two LoadBalancer Services that share the same external IP and use port 443 for both sites." },
      { id: 'B', text: "Create one Ingress with two host rules, each sending its hostname to the matching backend Service." },
      { id: 'C', text: "Create two NodePort Services on port 443 and point both hostnames at the IP address of one node." },
      { id: 'D', text: "Create one ExternalName Service per site that maps each hostname, as its entry point, to a Service DNS name." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Ingress routes HTTP and HTTPS traffic by host and path, so one Ingress with a rule per hostname lets a single controller address on port 443 serve both sites. Two LoadBalancer Services normally get separate external addresses and cannot both claim port 443 on the same IP by default. NodePort values must come from the node port range (30000-32767 by default) and cannot be 443, and pointing DNS at one node is a single point of failure. ExternalName Services only create DNS CNAME aliases and do not route incoming traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress","Host-based routing"]
  },
  {
    id: "cncf-kcna-228",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Twenty load balancers on the cloud bill",
    scenario: "A SaaS team exposes each of its 20 HTTP microservices with its own Service of type LoadBalancer, and the cloud bill shows 20 separate load balancers. All services are HTTP-based and share one domain with different URL paths.",
    question: "Which change reduces the number of cloud load balancers most?",
    options: [
      { id: 'A', text: "Switch the Services to ClusterIP and route paths to them through one Ingress or Gateway entry point." },
      { id: 'B', text: "Merge all 20 microservices into a single Deployment so that only one LoadBalancer Service is needed." },
      { id: 'C', text: "Keep the LoadBalancer Services but set externalTrafficPolicy Local so each shares a common frontend." },
      { id: 'D', text: "Switch each Service to type NodePort and publish all 20 node ports as paths behind one corporate firewall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An ingress controller or Gateway API implementation sits behind a single load balancer and routes by host and path to ClusterIP Services, so 20 load balancers become one without changing the applications. NodePorts avoid the load balancers but expose high ports on every node and push balancing and failover onto the firewall. externalTrafficPolicy Local changes how traffic is routed to nodes and does not merge load balancers. Merging microservices into one Deployment undoes the architecture to save cost.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress","LoadBalancer","Cost"]
  },
  {
    id: "cncf-kcna-229",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Quickest way to put a Service in front",
    scenario: "During a workshop, an instructor has just created a Deployment named web whose containers listen on port 8080. She wants to create a ClusterIP Service on port 80 that forwards to those pods, using a single kubectl command rather than writing YAML.",
    question: "Which command does this?",
    options: [
      { id: 'A', text: "kubectl port-forward deployment/web 80:8080 --address=0.0.0.0" },
      { id: 'B', text: "kubectl run web --expose --image=web --port=8080 --service=80" },
      { id: 'C', text: "kubectl expose deployment web --port=80 --target-port=8080" },
      { id: 'D', text: "kubectl create service web --selector=app=web --port=80:8080" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl expose creates a Service for an existing resource, copying the Deployment's pod selector; --port sets the Service port and --target-port the container port, and the default type is ClusterIP. kubectl create service needs a type subcommand such as clusterip and does not accept that form. kubectl port-forward opens a temporary tunnel from the local machine and creates no Service. kubectl run starts a new pod; its --expose flag creates a Service for that new pod, not for the existing Deployment, and --service is not a flag.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/",
    tags: ["kubectl expose","Services"]
  },
  {
    id: "cncf-kcna-230",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "One Service exposing HTTP and metrics",
    scenario: "A team adds a second port to an existing Service so that it exposes both HTTP on port 80 and Prometheus metrics on port 9090. The API server rejects the updated manifest, although each port entry looks correct on its own.",
    question: "What does a Service with more than one port require?",
    options: [
      { id: 'A', text: "A headless configuration with clusterIP None, because virtual IPs carry only one port." },
      { id: 'B', text: "A separate selector for each port entry, so that each port can target a different set of pods." },
      { id: 'C', text: "A unique name for every port entry, so the ports can be told apart in endpoints and DNS." },
      { id: 'D', text: "A type of NodePort or LoadBalancer, because ClusterIP Services only support one port." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a Service defines more than one port, every port must have a name, so that EndpointSlices, DNS SRV records and references such as Ingress backends can identify each one unambiguously. A Service has a single selector for all its ports. ClusterIP Services support many ports, as do all types. The virtual IP can carry any number of ports, so a headless Service is not required.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services",
    tags: ["Services","Ports"]
  },
  {
    id: "cncf-kcna-231",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A CNI plugin built on eBPF",
    scenario: "A platform team wants a CNI plugin that uses eBPF in the Linux kernel for pod networking and network policy enforcement, can replace kube-proxy for Service load balancing, and provides flow-level network observability. They prefer a CNCF graduated project.",
    question: "Which project fits this description?",
    options: [
      { id: 'A', text: "Envoy, a graduated proxy that assigns pod IP addresses and programs routes through eBPF maps." },
      { id: 'B', text: "Cilium, a graduated eBPF-based CNI with network policy, kube-proxy replacement and Hubble flows." },
      { id: 'C', text: "CoreDNS, the graduated DNS server that load-balances Services using eBPF programs in the kernel." },
      { id: 'D', text: "Flannel, a simple overlay CNI that implements network policy and replaces kube-proxy with eBPF." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cilium is a CNCF graduated CNI plugin built on eBPF: it provides pod networking, enforces Kubernetes and extended network policies, can fully replace kube-proxy for Service load balancing, and offers flow observability through Hubble. Flannel is a simple overlay network that does not enforce NetworkPolicy by itself and is not eBPF-based. CoreDNS provides cluster DNS, not load balancing in the kernel. Envoy is an L7 proxy used by ingress controllers and meshes; it does not assign pod IPs.",
    referenceUrl: "https://cilium.io/",
    tags: ["Cilium","CNI","eBPF"]
  },
  {
    id: "cncf-kcna-232",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "ping to a ClusterIP gets no reply",
    scenario: "While troubleshooting, an engineer runs ping 10.96.45.12 from a debug pod, where 10.96.45.12 is the ClusterIP of a working web Service. Every ping times out, yet curl http://10.96.45.12 returns the web page immediately.",
    question: "Why does ping fail while curl works?",
    options: [
      { id: 'A', text: "The ClusterIP answers ICMP only from nodes, so pods must use the Service DNS name for ping." },
      { id: 'B', text: "The ClusterIP is a virtual IP handled by rules for the Service's ports, so ICMP is not answered." },
      { id: 'C', text: "The debug pod lacks the NET_RAW capability, so it cannot send ICMP echo packets to any destination at all." },
      { id: 'D', text: "The Service's pods block ICMP with a default NetworkPolicy that curl traffic is able to bypass." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A ClusterIP is not bound to any interface; kube-proxy, or a replacement, programs rules that translate traffic for the Service's declared ports and protocols to backend pods, so TCP to port 80 works while ICMP echo requests match no rule and go unanswered. There is no default NetworkPolicy, and a policy would not treat curl and ping differently in this way. A missing NET_RAW capability would make ping fail everywhere with a permission error, not time out only for this address. Pinging the DNS name resolves to the same virtual IP and fails the same way.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies",
    tags: ["ClusterIP","kube-proxy","Troubleshooting"]
  },
  {
    id: "cncf-kcna-233",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Requests that match no Ingress rule",
    scenario: "An Ingress routes /shop and /blog on example.com to two Services. Marketing wants every other request, including unknown paths and hostnames, to reach a friendly landing-page Service instead of a generic 404 page from the controller.",
    question: "What should be configured on the Ingress?",
    options: [
      { id: 'A', text: "A third rule with host set to an asterisk and pathType Exact for the path /landing-page only." },
      { id: 'B', text: "A defaultBackend pointing at the landing-page Service, used for requests matching no rule." },
      { id: 'C', text: "A readiness probe on the landing page so the controller sends unmatched traffic to it." },
      { id: 'D', text: "An ExternalName Service named default that aliases the landing-page Service's DNS name." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Ingress's defaultBackend receives any request that matches no host or path rule, which is exactly the catch-all behaviour wanted. A wildcard rule with an Exact path only matches that one literal path, not every unknown path. A Service named default has no special meaning to ingress controllers. Readiness probes decide whether a pod receives traffic from its own Service; they do not make a controller route unmatched requests anywhere.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#default-backend",
    tags: ["Ingress","Default backend"]
  },
  {
    id: "cncf-kcna-234",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "What a LoadBalancer Service also creates",
    scenario: "A student creates a Service of type LoadBalancer on a cloud cluster and is surprised that kubectl get service shows a cluster IP and a port mapping such as 80:31542/TCP next to the external IP. She expected only the external address.",
    question: "Why are the extra values there?",
    options: [
      { id: 'A', text: "The kube-proxy creates a hidden second Service of type NodePort that points at the first Service." },
      { id: 'B', text: "The cloud provider allocates a spare ClusterIP and port in case the external load balancer fails later on." },
      { id: 'C', text: "kubectl shows a placeholder ClusterIP and node port until the LoadBalancer address becomes reachable." },
      { id: 'D', text: "A LoadBalancer Service builds on ClusterIP and, by default, NodePort, so it gets both of them too." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service types are layered: a LoadBalancer Service receives a ClusterIP for in-cluster clients and, by default, a node port on every node, which the cloud load balancer typically forwards to (allocateLoadBalancerNodePorts can disable node ports when the implementation routes directly to pods). The values are not a spare for failover. They are real, working allocations rather than placeholders. No hidden second Service is created; one object carries all three.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer","NodePort","ClusterIP"]
  },
  {
    id: "cncf-kcna-235",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "An API prefix that also matched apiv2",
    scenario: "An Ingress routes the path /api to the api Service. The team needs /api, /api/ and /api/orders to reach it, but /apiv2 must go to a different Service defined in another rule. Some controllers they tested matched /apiv2 against /api.",
    question: "Which pathType gives the required matching portably?",
    options: [
      { id: 'A', text: "ImplementationSpecific, which lets each controller decide how /api/orders matches the /api prefix." },
      { id: 'B', text: "Exact, which matches /api and every path below it but never a path that merely starts with /api." },
      { id: 'C', text: "Prefix, which matches by path element, so /api covers /api/orders but not a path such as /apiv2." },
      { id: 'D', text: "Regex, which is the portable pathType for matching /api and its subpaths while excluding /apiv2." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "pathType Prefix matches element by element on the slash-separated path, so /api matches /api, /api/ and /api/orders but not /apiv2, and all conformant controllers must behave this way. ImplementationSpecific leaves matching to the controller, which is how /apiv2 got matched in some tests. Exact matches only the literal path /api, so /api/orders would miss. There is no Regex pathType in the Ingress API; regular expressions are only available through controller-specific annotations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Ingress","pathType"]
  },
  {
    id: "cncf-kcna-236",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "HTTPS for a public storefront",
    scenario: "An online store's Ingress serves shop.example.com over plain HTTP. The team has a certificate and private key from its certificate authority and wants the ingress controller to terminate TLS for that hostname.",
    question: "How is this configured?",
    options: [
      { id: 'A', text: "Store the certificate in a ConfigMap mounted into the shop pods and set the Service port to 443." },
      { id: 'B', text: "Add the certificate to the CoreDNS configuration so that clients resolve an HTTPS-enabled address." },
      { id: 'C', text: "Annotate the shop Service with the certificate's fingerprint so that kube-proxy encrypts the traffic." },
      { id: 'D', text: "Store them in a Secret of type kubernetes.io/tls and reference it for that host in the Ingress tls section." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ingress TLS uses a Secret of type kubernetes.io/tls holding tls.crt and tls.key in the Ingress's namespace; listing the host and secretName under spec.tls tells the controller to terminate HTTPS for that hostname. Private keys belong in Secrets, not ConfigMaps, and this approach moves TLS into every pod instead of the controller. CoreDNS resolves names and has nothing to do with certificates. kube-proxy works at layer 4 and never encrypts traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress","TLS","Secrets"]
  },
  {
    id: "cncf-kcna-237",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Two ingress controllers in one cluster",
    scenario: "A cluster runs ingress-nginx for public traffic and a second controller for internal-only applications. A new internal Ingress was picked up by ingress-nginx and exposed on the public load balancer by mistake.",
    question: "How should each Ingress select the controller that serves it?",
    options: [
      { id: 'A', text: "Put internal Ingresses in a namespace named internal, which public controllers skip by default." },
      { id: 'B', text: "Set spec.ingressClassName to the IngressClass of the intended controller on every Ingress." },
      { id: 'C', text: "Give the internal Ingress a higher priority annotation so the internal controller claims it first." },
      { id: 'D', text: "Use an ExternalName Service for internal backends, which public controllers are unable to route." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each controller is associated with an IngressClass, and an Ingress chooses one through spec.ingressClassName; a class marked as the default applies only to Ingresses that name none, which is how the internal Ingress ended up public. Controllers do not skip namespaces by name. There is no standard priority annotation for claiming Ingresses. Backend Service type does not decide which controller serves an Ingress, and ExternalName backends are not a scoping mechanism.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class",
    tags: ["IngressClass","Ingress"]
  },
  {
    id: "cncf-kcna-238",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Sending 10% of traffic to a new version",
    scenario: "A bank's platform uses the Gateway API. The checkout team runs checkout-v1 and checkout-v2 as separate Services and wants 90% of requests for /checkout to go to v1 and 10% to v2, adjusting the split over the next week.",
    question: "How is this expressed with the Gateway API?",
    options: [
      { id: 'A', text: "Two Gateways, one per version, with DNS round robin weighted nine to one between their two addresses." },
      { id: 'B', text: "An HTTPRoute rule for /checkout with two backendRefs, weighted 90 and 10 for the two Services." },
      { id: 'C', text: "Two HTTPRoutes for /checkout attached to the Gateway, where the one created first receives 90% of traffic." },
      { id: 'D', text: "A GatewayClass per version, with the Gateway choosing between them by the weights defined in each class." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "HTTPRoute backendRefs accept a weight, and traffic for the rule is split proportionally across them, so weights of 90 and 10 send about 10% of /checkout requests to v2 and can be changed as the rollout proceeds. Separate Gateways with weighted DNS work outside Kubernetes, are slow to change because of caching, and add infrastructure. A GatewayClass selects the controller implementation, not traffic weights. Conflicting routes for the same path are resolved by precedence rules, not by creation-order percentages.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/guides/traffic-splitting/",
    tags: ["Gateway API","HTTPRoute","Traffic splitting"]
  },
  {
    id: "cncf-kcna-239",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Routing needs beyond host and path",
    scenario: "A gaming company's Ingress setup relies on controller-specific annotations to match requests by HTTP header, route gRPC services, and expose a raw TCP game port. The annotations differ between its two controllers, and moving workloads between clusters keeps breaking.",
    question: "Which standard Kubernetes API is designed to express these capabilities portably?",
    options: [
      { id: 'A', text: "The Ingress API's networking.k8s.io/v2 version, which adds header matching and TCP routes." },
      { id: 'B', text: "The NetworkPolicy API, which routes traffic by header and port when combined with an ingress class." },
      { id: 'C', text: "The Gateway API, whose route types cover header matching, gRPC and, in its experimental channel, TCP." },
      { id: 'D', text: "The EndpointSlice API, which lets Services route gRPC calls by header and protocol when forwarding them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Gateway API is the Kubernetes successor to Ingress for routing: HTTPRoute supports header, query and method matching in its standard channel, GRPCRoute handles gRPC, and TCPRoute and UDPRoute are available in the experimental channel, all without controller-specific annotations. There is no networking.k8s.io/v2 Ingress; Ingress is stable at v1 and frozen in scope. EndpointSlices track backend addresses and do not match requests. NetworkPolicy allows or denies traffic; it never routes it.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Ingress","GRPCRoute"]
  },
  {
    id: "cncf-kcna-240",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "External IP stuck at pending on bare metal",
    scenario: "A company runs Kubernetes on its own bare-metal servers in a colocation facility. Services of type LoadBalancer stay at EXTERNAL-IP pending forever, while the same manifests work in the public cloud. The team has a small block of routable IP addresses it can use.",
    question: "What will make LoadBalancer Services work?",
    options: [
      { id: 'A', text: "Deploy a load-balancer implementation such as MetalLB and give it the address block to advertise." },
      { id: 'B', text: "Enable the cloud-controller-manager with the generic provider so it assigns addresses from the block." },
      { id: 'C', text: "Change the kube-proxy mode to IPVS so that it allocates external addresses to each LoadBalancer Service." },
      { id: 'D', text: "Set externalTrafficPolicy Local on each Service so that the node's own address becomes its external IP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A LoadBalancer Service only records the desired state; something must provision an address and attract traffic to it. In clouds the cloud controller manager does that, while on bare metal a component such as MetalLB assigns addresses from a configured pool and announces them with ARP/NDP or BGP. There is no generic cloud provider that allocates addresses on your routers. kube-proxy modes change how Service traffic is forwarded on nodes and never allocate external IPs. externalTrafficPolicy affects routing and source IP preservation, not address allocation.",
    referenceUrl: "https://metallb.universe.tf/",
    tags: ["LoadBalancer","MetalLB","Bare metal"]
  },
  {
    id: "cncf-kcna-241",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Stable name for a database outside the cluster",
    scenario: "An insurance company's legacy PostgreSQL server runs on a VM at 10.20.0.15, port 5432, and has no DNS name. Applications in the cluster should reach it as orders-db on port 5432 like any other Service, so the address can later be switched to an in-cluster database without changing application config.",
    question: "Which configuration fits?",
    options: [
      { id: 'A', text: "A Service named orders-db without a selector, plus an EndpointSlice listing 10.20.0.15 on port 5432." },
      { id: 'B', text: "An ExternalName Service named orders-db whose externalName field is set to the address 10.20.0.15." },
      { id: 'C', text: "A NodePort Service named orders-db that forwards node port 5432 to the external VM on the same port." },
      { id: 'D', text: "A headless Service named orders-db whose selector matches a label added to the external VM's record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Service without a selector gets no automatic endpoints, so an EndpointSlice labelled with kubernetes.io/service-name: orders-db can point it at 10.20.0.15:5432; clients use the normal Service name and ClusterIP, and the backend can later be swapped. ExternalName produces a DNS CNAME and expects a hostname, and IP addresses are not supported there. Selectors match pod labels, and a VM is not a pod. NodePort exposes a Service on node ports for outside clients, cannot use port 5432 from the default range, and still needs endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors",
    tags: ["Services","EndpointSlices","External services"]
  },
  {
    id: "cncf-kcna-242",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Resolving corporate hostnames from pods",
    scenario: "Pods in a hybrid cluster must resolve names under corp.internal, which are served only by the company's DNS servers at 10.0.0.53. Cluster Service names must keep resolving through CoreDNS as before, and the team does not want to change every pod spec.",
    question: "What is the recommended change?",
    options: [
      { id: 'A', text: "Add an ExternalName Service called corp.internal so that CoreDNS aliases all names to the host 10.0.0.53." },
      { id: 'B', text: "Set dnsPolicy Default on every pod so that each pod uses 10.0.0.53 directly for all of its lookups." },
      { id: 'C', text: "Add hostAliases entries for every corp.internal hostname to the Deployments that need to reach them." },
      { id: 'D', text: "Add a server block for corp.internal to CoreDNS's Corefile that forwards those queries to 10.0.0.53." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CoreDNS is configured through its Corefile, held in a ConfigMap, and a server block for corp.internal with a forward plugin sends only those queries to 10.0.0.53 while everything else keeps working; no pod spec changes are needed. dnsPolicy Default uses the node's resolver, breaking cluster Service names, and would need to be set on every pod. ExternalName aliases one Service name to one hostname and cannot delegate a whole domain to a server IP. hostAliases hard-codes entries into each pod's hosts file and goes stale whenever addresses change.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS","DNS","Hybrid"]
  },
  {
    id: "cncf-kcna-243",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Retries and timeouts without code changes",
    scenario: "A retailer's 40 microservices are written in five languages. Leadership wants consistent retries, timeouts and per-request latency metrics for all service-to-service calls, but teams cannot modify their application code or add language-specific libraries this year.",
    question: "Which approach provides this?",
    options: [
      { id: 'A', text: "A NetworkPolicy per service that specifies retry counts, timeouts and metrics for each allowed connection." },
      { id: 'B', text: "An Ingress per microservice with annotations that apply retries to traffic between internal services." },
      { id: 'C', text: "A service mesh such as Istio or Linkerd, whose proxies apply retries, timeouts and metrics per request." },
      { id: 'D', text: "A headless Service per microservice so that clients can retry against individual pod addresses." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A service mesh places a proxy, sidecar or node-level, in the path of service-to-service traffic, so retries, timeouts, mutual TLS and golden-signal metrics are configured centrally and applied regardless of application language. NetworkPolicy only allows or denies connections and has no retry or timeout settings. A headless Service exposes pod IPs, but retry logic would still have to live in each application. Ingress handles traffic entering the cluster from outside, not east-west calls between services.",
    referenceUrl: "https://istio.io/latest/docs/concepts/traffic-management/",
    tags: ["Service mesh","Resilience","Observability"]
  },
  {
    id: "cncf-kcna-244",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "No BGP peering with the data centre network",
    scenario: "An enterprise deploys Kubernetes in a data centre where the network team will not allow BGP peering with the physical routers, and the underlay only routes node IP addresses. Pods on different nodes must still reach each other directly by pod IP, as the Kubernetes network model requires.",
    question: "Which CNI networking mode suits this environment?",
    options: [
      { id: 'A', text: "A NodePort mode in which each pod is given a port on its node instead of an IP address of its own." },
      { id: 'B', text: "A routed mode that advertises each node's pod CIDR to the physical routers using BGP sessions." },
      { id: 'C', text: "An overlay mode, such as VXLAN, that encapsulates pod traffic inside packets between node IPs." },
      { id: 'D', text: "A host-network mode in which every pod shares its node's IP address and avoids pod routing entirely." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Overlay networking encapsulates pod-to-pod packets inside node-to-node packets (VXLAN, Geneve or IP-in-IP), so the physical network only needs to route node addresses, which fits an underlay that will not learn pod routes. Routed mode depends on the underlay learning pod CIDRs, typically via BGP, which is ruled out. There is no NodePort CNI mode; NodePort is a Service type, and pods always get their own IPs. Running every pod with hostNetwork abandons the per-pod IP model and causes port conflicts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
    tags: ["CNI","Overlay","Pod networking"]
  },
  {
    id: "cncf-kcna-245",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "gRPC load piling onto one pod",
    scenario: "A recommendation service is called over gRPC through a normal ClusterIP Service backed by eight pods. Monitoring shows that almost all requests from each client land on a single pod, because each client keeps one long-lived HTTP/2 connection open.",
    question: "Which change spreads the requests across pods?",
    options: [
      { id: 'A', text: "Set sessionAffinity ClientIP on the Service so that the proxy rotates each client across pods." },
      { id: 'B', text: "Change the Service to NodePort so that every node balances the gRPC requests independently." },
      { id: 'C', text: "Scale the Deployment to sixteen pods so that each client connection is shared by more replicas." },
      { id: 'D', text: "Use a headless Service with client-side load balancing, or a mesh, so requests are balanced." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kube-proxy balances at layer 4, once per connection, so a single long-lived HTTP/2 connection carrying many gRPC requests stays pinned to one pod. A headless Service returns every pod IP in DNS so a gRPC client can balance requests itself, and a service mesh can balance per request at layer 7. sessionAffinity ClientIP pins each client to one pod, the opposite of what is wanted. More replicas do not help if each client still has one connection to one pod. NodePort uses the same connection-level balancing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Service","gRPC","Load balancing"]
  },
  {
    id: "cncf-kcna-246",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "New nodes join without pod addresses",
    scenario: "A kubeadm cluster was created with a pod network CIDR of 10.244.0.0/20 and the default per-node mask of /24. After growing to 16 nodes, the 17th node joins but never becomes Ready, and the controller manager logs report that no pod CIDR could be allocated to it.",
    question: "What is the root cause?",
    options: [
      { id: 'A', text: "CoreDNS serves at most 16 nodes per replica, so the 17th node cannot resolve the API server." },
      { id: 'B', text: "The ServiceCIDR range is too small, so no ClusterIP is left for the 17th node's kubelet." },
      { id: 'C', text: "The /20 pod range holds only 16 of the /24 blocks given to nodes, so the range is exhausted." },
      { id: 'D', text: "The kube-scheduler caps a cluster at 16 nodes unless the scheduler profile raises the limit." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The node IPAM controller carves the cluster pod CIDR into per-node blocks; a /20 contains exactly sixteen /24 blocks, so once 16 nodes hold one, the 17th cannot get a pod CIDR and its network plugin cannot configure pod networking. The fix is a larger pod CIDR, a smaller per-node mask, or a CNI with its own IPAM. The scheduler has no node-count cap. CoreDNS has no per-node limit, and kubelets reach the API server by address, not cluster DNS. Service CIDRs allocate ClusterIPs for Services, not addresses for nodes.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/",
    tags: ["Pod CIDR","IPAM","Nodes"]
  },
  {
    id: "cncf-kcna-247",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Service updates slow in a huge cluster",
    scenario: "A cluster with about 15,000 Services and many endpoints uses kube-proxy in its default iptables mode on Linux. Every endpoint change now takes several seconds to apply on each node, and CPU use by kube-proxy spikes during rollouts. The team wants to stay with kube-proxy for now.",
    question: "Which kube-proxy change is designed to address this at scale?",
    options: [
      { id: 'A', text: "Set externalTrafficPolicy Local on every Service so that kube-proxy writes rules only for local pods." },
      { id: 'B', text: "Add more CoreDNS replicas so that endpoint changes propagate to the nodes through DNS more quickly." },
      { id: 'C', text: "Switch kube-proxy to the userspace mode, which proxies connections in a process instead of rules." },
      { id: 'D', text: "Switch kube-proxy to the nftables mode, which updates rules incrementally and scales much better." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The nftables mode, generally available since Kubernetes 1.33, was designed to replace iptables for large clusters: it applies incremental changes instead of rewriting large rule chains and matches Services with maps rather than long linear lists, cutting both update latency and CPU. The userspace mode was slow, is removed, and never helped at scale. externalTrafficPolicy only affects external traffic handling and does not shrink the rule set meaningfully. DNS is not how kube-proxy learns endpoint changes; it watches EndpointSlices through the API server.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/#proxy-mode-nftables",
    tags: ["kube-proxy","nftables","Scalability"]
  },
  {
    id: "cncf-kcna-248",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A host-network pod cannot find Services",
    scenario: "A network monitoring agent runs as a DaemonSet with hostNetwork: true so it can observe node interfaces. It must also call the cluster's metrics-api Service by name, but lookups of metrics-api.monitoring.svc.cluster.local fail, while the same lookup works from ordinary pods.",
    question: "Which change lets the agent resolve cluster Service names?",
    options: [
      { id: 'A', text: "Set hostNetwork false and add hostPort mappings for each interface the agent must observe." },
      { id: 'B', text: "Set dnsPolicy ClusterFirstWithHostNet so the host-network pod uses the cluster DNS service." },
      { id: 'C', text: "Set subdomain metrics-api on the pod so that its lookups are resolved inside the namespace." },
      { id: 'D', text: "Set dnsPolicy Default so the pod inherits the node's resolver, which forwards to CoreDNS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pods with hostNetwork true fall back to the node's resolver when dnsPolicy is ClusterFirst, so cluster names fail; ClusterFirstWithHostNet explicitly makes such pods use the cluster DNS service while keeping host networking. dnsPolicy Default is exactly the node's resolver, which normally knows nothing about cluster.local. Dropping hostNetwork breaks the requirement to observe node interfaces, and hostPort does not provide interface access. subdomain, together with hostname, gives a pod its own DNS record under a headless Service; it does not change how the pod resolves names.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy",
    tags: ["DNS","dnsPolicy","hostNetwork"]
  },
  {
    id: "cncf-kcna-249",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Five DNS queries for one external call",
    scenario: "A payment service calls api.payments-partner.com thousands of times per second. CoreDNS logs show that each call first produces failed lookups such as api.payments-partner.com.payments.svc.cluster.local before the real name finally resolves, and CoreDNS CPU is climbing.",
    question: "Which change removes the wasted lookups with the least impact on cluster DNS?",
    options: [
      { id: 'A', text: "Increase the CoreDNS cache TTL so that the failed search-domain lookups are answered from memory." },
      { id: 'B', text: "Switch the pod to dnsPolicy None with no nameservers so that it bypasses the cluster search list." },
      { id: 'C', text: "Use the fully qualified name with a trailing dot, or lower ndots for this pod through its dnsConfig." },
      { id: 'D', text: "Add the partner hostname as an ExternalName Service so that CoreDNS resolves it with one lookup." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pod resolv.conf files default to ndots:5, so any name with fewer than five dots is tried against each search domain first, generating NXDOMAIN lookups before the absolute query. Writing the name with a trailing dot marks it as fully qualified, or setting a lower ndots in the pod's dnsConfig, sends the real query first. dnsPolicy None with no nameservers leaves the pod unable to resolve anything. Caching softens the load but still generates and answers the extra queries for every call, and the negative-cache TTL is bounded. An ExternalName Service is itself a cluster name that clients must reach through the same search logic, and it only adds a CNAME.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config",
    tags: ["DNS","ndots","CoreDNS"]
  },
  {
    id: "cncf-kcna-250",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Keeping Service traffic inside the zone",
    scenario: "A three-zone cluster runs a chatty internal API with replicas in every zone. The cloud charges for cross-zone traffic, and clients currently reach replicas in any zone. The team wants clients to prefer API endpoints in their own zone while still reaching other zones if no local endpoint is available.",
    question: "Which Service setting is designed for this?",
    options: [
      { id: 'A', text: "Set externalTrafficPolicy Local, which routes in-cluster traffic to endpoints in the caller's zone." },
      { id: 'B', text: "Set trafficDistribution to PreferSameZone (earlier PreferClose) to favour endpoints in the same zone." },
      { id: 'C', text: "Set internalTrafficPolicy Local, which sends traffic only to endpoints on the client pod's node." },
      { id: 'D', text: "Set sessionAffinity ClientIP, which pins each client to the replica nearest to it in the network." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Service field trafficDistribution with PreferSameZone (PreferClose is the older name for the same behaviour) lets kube-proxy and compatible implementations prefer endpoints in the client's zone, using EndpointSlice zone hints, while falling back to other zones when no local endpoint exists. internalTrafficPolicy Local restricts traffic to the same node and drops it when that node has no endpoint, which is far stricter than zone preference. sessionAffinity ClientIP picks a replica per client IP with no notion of zones. externalTrafficPolicy applies only to traffic entering from outside the cluster through node ports and load balancers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#traffic-distribution",
    tags: ["Topology-aware routing","Services","Cost"]
  }
];

export default CNCF_KCNA_QUESTIONS_10;
