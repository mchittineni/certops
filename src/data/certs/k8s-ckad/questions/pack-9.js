export const K8S_CKAD_QUESTIONS_9 = [
  {
    id: "k8s-ckad-201",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service for Internal Inter-Pod Communication",
    scenario: "A backend database runs on 3 pods. Web frontend pods in the same cluster need to connect to the database via a stable, load-balanced virtual IP address without exposing the database to the outside world.",
    question: "Which Kubernetes Service type provides an internal virtual IP accessible exclusively inside the cluster?",
    options: [
      { id: 'A', text: "ClusterIP" },
      { id: 'B', text: "NodePort" },
      { id: 'C', text: "LoadBalancer" },
      { id: 'D', text: "ExternalName" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`ClusterIP` is the default Kubernetes Service type. It allocates an internal, stable virtual IP reachable only from within the cluster, automatically load-balancing incoming requests across the pods matching its selector.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip",
    tags: ["Kubernetes", "Services", "ClusterIP"]
  },
  {
    id: "k8s-ckad-202",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service Port Allocation Range (30000-32767)",
    scenario: "A developer exposes an internal service externally using a NodePort Service.",
    question: "What is the default TCP/UDP port range reserved by Kubernetes for NodePorts on worker nodes?",
    options: [
      { id: 'A', text: "8000 to 9000" },
      { id: 'B', text: "40000 to 50000" },
      { id: 'C', text: "30000 to 32767" },
      { id: 'D', text: "1024 to 5000" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, the Kubernetes API server reserves the port range `30000-32767` for `NodePort` services. When created, every worker node in the cluster listens on that allocated port and proxies incoming traffic to the service endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["Kubernetes", "Services", "NodePort"]
  },
  {
    id: "k8s-ckad-203",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service Port Mapping: port vs targetPort vs nodePort",
    scenario: "In a Kubernetes Service manifest, a developer configures `port: 80`, `targetPort: 8080`, and `nodePort: 31234`.",
    question: "What do these three port definitions represent respectively?",
    options: [
      { id: 'A', text: "All three ports must be identical in Kubernetes" },
      { id: 'B', text: "port is the container port; targetPort is the service port; nodePort is the host port" },
      { id: 'C', text: "port is the port exposed internally on the Service ClusterIP; targetPort is the port on which the container process listens; nodePort is the port exposed on each node's physical IP" },
      { id: 'D', text: "targetPort is the external load balancer port; port is the container port" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a Service: `port` is the port exposed by the Service's internal ClusterIP. `targetPort` is the port that backend container pods listen on (where traffic is forwarded). `nodePort` is the port opened on each physical worker node IP (for NodePort/LoadBalancer types).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Kubernetes", "Services", "Port Mapping"]
  },
  {
    id: "k8s-ckad-204",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service and Cloud Provider Integration",
    scenario: "An enterprise deploys a web application on a managed Kubernetes cluster (EKS, GKE, or AKS). The application must be accessible over the internet via a dedicated public IP address provisioned by the cloud provider.",
    question: "Which Kubernetes Service type automatically provisions an external cloud load balancer?",
    options: [
      { id: 'A', text: "LoadBalancer" },
      { id: 'B', text: "ClusterIP" },
      { id: 'C', text: "NodePort alone" },
      { id: 'D', text: "ExternalName" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `type: LoadBalancer` instructs the cloud provider's integration controller to provision an external cloud load balancer (e.g. AWS NLB/ALB or GCP Cloud Load Balancer) that forwards public internet traffic to the cluster nodes on an allocated NodePort.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["Kubernetes", "Services", "LoadBalancer"]
  },
  {
    id: "k8s-ckad-205",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ExternalName Service for External CNAME DNS Redirection",
    scenario: "Pods inside a Kubernetes cluster need to connect to an external third-party database at `prod-db.example.com`. Developers want to refer to the database locally using the Kubernetes service name `my-db` without proxying traffic through the cluster.",
    question: "Which Kubernetes Service type returns a DNS CNAME record pointing to an external domain name?",
    options: [
      { id: 'A', text: "ExternalName (with externalName: prod-db.example.com)" },
      { id: 'B', text: "ClusterIP with externalIPs" },
      { id: 'C', text: "NodePort" },
      { id: 'D', text: "Headless Service alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Service of `type: ExternalName` maps a service to an external DNS name. Instead of allocating a virtual IP or using selectors, CoreDNS returns a CNAME record (e.g. `prod-db.example.com`) directly to the client pod, eliminating cluster proxy overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#externalname",
    tags: ["Kubernetes", "Services", "ExternalName"]
  },
  {
    id: "k8s-ckad-206",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Headless Service (clusterIP: None) Direct Pod Addressing",
    scenario: "A developer configures a StatefulSet with a headless service (clusterIP: None).",
    question: "How does CoreDNS respond when a client pod queries the headless service domain name?",
    options: [
      { id: 'A', text: "CoreDNS returns the IP address of the node" },
      { id: 'B', text: "CoreDNS returns the master API server IP" },
      { id: 'C', text: "CoreDNS returns the individual IP addresses (A/AAAA records) of all ready backend pods directly instead of a single virtual IP" },
      { id: 'D', text: "CoreDNS returns HTTP 404" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For a `Headless Service` (Service with `spec.clusterIP: None`), no virtual ClusterIP is assigned, and kube-proxy does not route traffic. Instead, CoreDNS returns an `A` record for every ready backing pod IP, allowing clients to establish direct connections or implement custom load-balancing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Kubernetes", "Headless Service", "CoreDNS"]
  },
  {
    id: "k8s-ckad-207",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "EndpointSlices for Scalable Service Endpoint Management",
    scenario: "In large Kubernetes clusters with services backing 2,000 pod replicas, updating a single pod previously required updating a monolithic 2 MB Endpoints resource, generating massive etcd and network traffic.",
    question: "Which modern Kubernetes resource splits service endpoints into scalable chunks of up to 100 endpoints each?",
    options: [
      { id: 'A', text: "EndpointSlice" },
      { id: 'B', text: "Endpoints (legacy monolithic object)" },
      { id: 'C', text: "CoreDNS records" },
      { id: 'D', text: "IPVS tables" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`EndpointSlices` provide a scalable alternative to monolithic Kubernetes Endpoints. Each EndpointSlice holds a subset (up to 100) of network endpoints for a Service, drastically reducing network and etcd load when individual pods scale or restart.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["Kubernetes", "EndpointSlice", "Scalability"]
  },
  {
    id: "k8s-ckad-208",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service Session Affinity for Sticky Connections (sessionAffinity: ClientIP)",
    scenario: "A stateful legacy application requires HTTP requests originating from the same client IP address to be routed consistently to the same backend pod replica.",
    question: "Which Service specification setting enables client IP-based session stickiness?",
    options: [
      { id: 'A', text: "sessionAffinity: ClientIP" },
      { id: 'B', text: "sessionAffinity: Cookie" },
      { id: 'C', text: "stickySession: true" },
      { id: 'D', text: "loadBalancingScheme: Sticky" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes Services support `sessionAffinity: ClientIP`. When configured, kube-proxy routes subsequent requests from the same client IP to the same backend pod. The duration can be tuned using `sessionAffinityConfig.clientIP.timeoutSeconds` (default 10,800s / 3 hours).",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/#session-affinity",
    tags: ["Kubernetes", "Services", "sessionAffinity"]
  },
  {
    id: "k8s-ckad-209",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service externalTrafficPolicy: Local vs Cluster Trade-offs",
    scenario: "A web service exposed via NodePort receives external client connections. The security team discovers that incoming client source IP addresses are masked by SNAT, showing only the worker node's internal IP.",
    question: "Which Service setting preserves the client's real source IP address?",
    options: [
      { id: 'A', text: "internalTrafficPolicy: Local" },
      { id: 'B', text: "sourceIpPreserve: true" },
      { id: 'C', text: "externalTrafficPolicy: Local" },
      { id: 'D', text: "externalTrafficPolicy: Cluster (default)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default (`externalTrafficPolicy: Cluster`), kube-proxy SNATs incoming packets and forwards them to any node, obscuring client source IPs. Setting `externalTrafficPolicy: Local` preserves the original client source IP by routing traffic only to local pods on the receiving node, dropping packets if no local pod exists.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Kubernetes", "Services", "externalTrafficPolicy"]
  },
  {
    id: "k8s-ckad-210",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Default Deny All Ingress Rule",
    scenario: "A security audit mandates that all pods in the `secure-backend` namespace must reject all incoming network traffic by default unless explicitly permitted by another NetworkPolicy.",
    question: "Which NetworkPolicy manifest enforces a default deny-all ingress posture for the entire namespace?",
    options: [
      { id: 'A', text: "podSelector: {}, ingress: [{ from: [] }]" },
      { id: 'B', text: "policyTypes: [Egress], egress: []" },
      { id: 'C', text: "podSelector: {}, policyTypes: [Ingress], with an empty ingress: [] list" },
      { id: 'D', text: "denyAll: true" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Kubernetes NetworkPolicy, selecting all pods (`podSelector: {}`) with `policyTypes: ['Ingress']` and omitting the `ingress` rules block creates a default-deny ingress policy. All pods in that namespace immediately reject all incoming connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Kubernetes", "NetworkPolicy", "Default Deny"]
  },
  {
    id: "k8s-ckad-211",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Default Deny All Egress Rule",
    scenario: "To prevent data exfiltration and reverse shells, an organization mandates that pods in namespace `isolated` must be blocked from initiating any outbound network connections by default.",
    question: "Which NetworkPolicy enforces a default deny-all egress posture?",
    options: [
      { id: 'A', text: "podSelector: {}, policyTypes: [Egress], with an empty egress: [] list" },
      { id: 'B', text: "podSelector: {}, egress: [{ to: [] }]" },
      { id: 'C', text: "policyTypes: [Ingress]" },
      { id: 'D', text: "egressBlock: true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring a NetworkPolicy targeting all pods (`podSelector: {}`) with `policyTypes: ['Egress']` and leaving the `egress` rules array empty creates a default-deny egress policy, isolating pods from making any outbound connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-egress-traffic",
    tags: ["Kubernetes", "NetworkPolicy", "Default Deny Egress"]
  },
  {
    id: "k8s-ckad-212",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing Ingress from Specific Pods (podSelector)",
    scenario: "A backend database pod (labeled `role: db`) must accept incoming TCP connections on port 5432 exclusively from frontend pods (labeled `role: frontend`) in the same namespace.",
    question: "Which NetworkPolicy configuration enforces this rule?",
    options: [
      { id: 'A', text: "VPC firewall rule on port 5432" },
      { id: 'B', text: "podSelector: { matchLabels: { role: db } }, ingress: [{ from: [{ namespaceSelector: { matchLabels: { role: frontend } } }] }]" },
      { id: 'C', text: "podSelector: { matchLabels: { role: frontend } }, to: [{ podSelector: { matchLabels: { role: db } } }]" },
      { id: 'D', text: "podSelector: { matchLabels: { role: db } }, ingress: [{ from: [{ podSelector: { matchLabels: { role: frontend } } }], ports: [{ protocol: TCP, port: 5432 }] }]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A NetworkPolicy's `spec.podSelector` identifies the target pods being protected (the database). The `ingress.from.podSelector` matches the allowed source pods in the same namespace, and `ports` restricts traffic to TCP port 5432.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["Kubernetes", "NetworkPolicy", "podSelector"]
  },
  {
    id: "k8s-ckad-213",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Allowing Traffic from Another Namespace (namespaceSelector)",
    scenario: "A payment service in namespace `payments` must accept incoming HTTP traffic on port 8080 from pods located in the `orders` namespace (labeled `kubernetes.io/metadata.name: orders`).",
    question: "Which NetworkPolicy `from` rule allows traffic across namespaces?",
    options: [
      { id: 'A', text: "from: [{ namespaceSelector: { matchLabels: { 'kubernetes.io/metadata.name': 'orders' } } }]" },
      { id: 'B', text: "from: [{ namespace: orders }]" },
      { id: 'C', text: "from: [{ podSelector: { namespace: orders } }]" },
      { id: 'D', text: "from: [{ externalNamespace: orders }]" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To allow traffic from another namespace, the NetworkPolicy `ingress.from` rule must use `namespaceSelector` to match the target namespace's labels (Kubernetes automatically labels namespaces with `kubernetes.io/metadata.name: &lt;namespace&gt;`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["Kubernetes", "NetworkPolicy", "namespaceSelector"]
  },
  {
    id: "k8s-ckad-214",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: Combining namespaceSelector and podSelector (AND vs OR semantics)",
    scenario: "A developer writes a NetworkPolicy `from` clause. The developer must allow traffic ONLY from pods labeled `role: api` THAT ALSO reside in namespaces labeled `env: prod`.",
    question: "How must the namespaceSelector and podSelector be declared inside the YAML list to enforce an AND condition?",
    options: [
      { id: 'A', text: "Using an explicit operator: AND" },
      { id: 'B', text: "Kubernetes does not support combining namespace and pod selectors" },
      { id: 'C', text: "Inside a single YAML list item: from: [{ namespaceSelector: { matchLabels: { env: prod } }, podSelector: { matchLabels: { role: api } } }]" },
      { id: 'D', text: "As two separate list items: from: [{ namespaceSelector: ... }, { podSelector: ... }]" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Kubernetes NetworkPolicies: declaring `namespaceSelector` and `podSelector` in the SAME list item (`- { namespaceSelector: ..., podSelector: ... }`) acts as a logical `AND`. Declaring them as separate list items acts as a logical `OR`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors",
    tags: ["Kubernetes", "NetworkPolicy", "AND vs OR"]
  },
  {
    id: "k8s-ckad-215",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy: ipBlock with CIDR Exceptions (except)",
    scenario: "A pod needs egress access to external third-party payment APIs on the internet (`0.0.0.0/0`), but must be strictly blocked from reaching the corporate internal subnet `10.0.0.0/8`.",
    question: "Which NetworkPolicy ipBlock configuration accomplishes this restriction?",
    options: [
      { id: 'A', text: "ipBlock: { cidr: 0.0.0.0/0, except: [10.0.0.0/8] }" },
      { id: 'B', text: "ipBlock: { allow: 0.0.0.0/0, deny: 10.0.0.0/8 }" },
      { id: 'C', text: "cidr: 0.0.0.0/0 without internal IPs" },
      { id: 'D', text: "VPC routing table alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An `ipBlock` allows specifying IP CIDR ranges for ingress or egress. The `except` field carves out specific subnets from the CIDR, allowing all internet traffic (`0.0.0.0/0`) while explicitly denying internal corporate ranges (`10.0.0.0/8`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#ipblock",
    tags: ["Kubernetes", "NetworkPolicy", "ipBlock"]
  },
  {
    id: "k8s-ckad-216",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Mandatory Requirement: CNI Network Plugin Support",
    scenario: "A cluster administrator applies multiple Kubernetes NetworkPolicy manifests to a cluster. However, pods continue communicating freely across all namespaces without any restrictions.",
    question: "What is the most likely root cause of this failure?",
    options: [
      { id: 'A', text: "The cluster's Container Network Interface (CNI) plugin does not support or enforce NetworkPolicies (e.g. Flannel without Calico)" },
      { id: 'B', text: "The API server is missing an enterprise license" },
      { id: 'C', text: "NetworkPolicies only work with root containers" },
      { id: 'D', text: "Kubernetes requires restarting worker nodes after applying policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "NetworkPolicies are declarative specifications. The Kubernetes control plane stores them, but the cluster's `Container Network Interface (CNI) plugin` (e.g. Calico, Cilium, Weave, AWS VPC CNI with network policy engine) is responsible for enforcing them. Basic CNIs like Flannel do not enforce NetworkPolicies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#prerequisites",
    tags: ["Kubernetes", "NetworkPolicy", "CNI Plugins"]
  },
  {
    id: "k8s-ckad-217",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path Types: Prefix vs Exact vs ImplementationSpecific",
    scenario: "A developer configures an Ingress resource with path `/api`. The ingress controller must match `/api`, `/api/`, and `/api/v1`, but must NOT match `/apigateway`.",
    question: "Which Ingress pathType enforces this path matching behavior?",
    options: [
      { id: 'A', text: "pathType: Regex" },
      { id: 'B', text: "pathType: ImplementationSpecific" },
      { id: 'C', text: "pathType: Exact" },
      { id: 'D', text: "pathType: Prefix" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`pathType: Prefix` matches URL paths based on URL path elements separated by `/`. Path `/api` matches `/api`, `/api/`, and `/api/v1/orders`, but does NOT match `/apigateway` because `gateway` is not separated by a slash.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Kubernetes", "Ingress", "pathType"]
  },
  {
    id: "k8s-ckad-218",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path Type: Exact Matching Rules",
    scenario: "An Ingress rule specifies path: /orders with pathType: Exact.",
    question: "Which of the following request URLs matches this rule?",
    options: [
      { id: 'A', text: "Any path starting with /order" },
      { id: 'B', text: "Both /orders and /orders/123" },
      { id: 'C', text: "All HTTP requests" },
      { id: 'D', text: "Only /orders (does not match /orders/ or /orders/123)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`pathType: Exact` matches the URL path strictly with case sensitivity and exact character matching. Requests to `/orders/` (with trailing slash) or `/orders/item` do NOT match.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Kubernetes", "Ingress", "pathType Exact"]
  },
  {
    id: "k8s-ckad-219",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination Configuration (spec.tls)",
    scenario: "A developer configures an Ingress for domain `api.example.com`. The ingress controller must terminate HTTPS connections using a TLS certificate stored in Secret `example-tls-secret`.",
    question: "Which Ingress specification snippet configures TLS termination?",
    options: [
      { id: 'A', text: "spec.certificates: [{ host: api.example.com, secret: example-tls-secret }]" },
      { id: 'B', text: "spec.tls: [{ hosts: ['api.example.com'], secretName: example-tls-secret }]" },
      { id: 'C', text: "spec.rules[].tlsSecret: example-tls-secret" },
      { id: 'D', text: "spec.ssl: { enabled: true, cert: example-tls-secret }" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In an Ingress resource, the `spec.tls` array defines TLS termination. It maps hostnames (`hosts`) to a Kubernetes `kubernetes.io/tls` Secret (`secretName`), allowing the ingress controller to decrypt HTTPS traffic and forward plain HTTP to backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Kubernetes", "Ingress", "TLS Termination"]
  },
  {
    id: "k8s-ckad-220",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "IngressClass and Multi-Ingress Controller Routing",
    scenario: "A Kubernetes cluster operates two distinct Ingress controllers: an external internet-facing NGINX Ingress controller and an internal Traefik controller.",
    question: "Which field in an Ingress resource specifies which controller should reconcile that specific Ingress?",
    options: [
      { id: 'A', text: "spec.ingressClassName: nginx (or traefik)" },
      { id: 'B', text: "metadata.annotations: { kubernetes.io/ingress.class: nginx } alone" },
      { id: 'C', text: "spec.controller: nginx" },
      { id: 'D', text: "spec.type: nginx" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`spec.ingressClassName` references an `IngressClass` resource in the cluster. Each Ingress controller watches only Ingresses whose `ingressClassName` matches its registered class, enabling clean coexistence of multiple ingress controllers in the same cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class",
    tags: ["Kubernetes", "Ingress", "IngressClass"]
  },
  {
    id: "k8s-ckad-221",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing (Virtual Hosting)",
    scenario: "An enterprise uses a single public IP and load balancer to route traffic for two distinct domains: `store.example.com` routed to `store-service:80`, and `blog.example.com` routed to `blog-service:80`.",
    question: "How is host-based routing declared in an Ingress manifest?",
    options: [
      { id: 'A', text: "Deploy two separate LoadBalancer services" },
      { id: 'B', text: "Host-based routing is not supported in Ingress" },
      { id: 'C', text: "Define two separate rule entries under spec.rules, each specifying a distinct host header (host: store.example.com and host: blog.example.com)" },
      { id: 'D', text: "Create two separate IngressClass resources" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ingress supports host-based virtual hosting. Under `spec.rules`, each entry specifies a `host` string. The ingress controller inspects the incoming HTTP `Host` header (or TLS SNI) and routes requests to the designated backend service accordingly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Kubernetes", "Ingress", "Host-Based Routing"]
  },
  {
    id: "k8s-ckad-222",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Fanout Path-Based Routing",
    scenario: "A developer configures an Ingress for domain `app.example.com`. Requests to `/orders` must route to `order-service:80`, while requests to `/customers` must route to `customer-service:80`.",
    question: "How is path-based fanout routing declared under a single host rule?",
    options: [
      { id: 'A', text: "Configure two LoadBalancer services" },
      { id: 'B', text: "Path routing requires modifying the Linux kernel on worker nodes" },
      { id: 'C', text: "Under a single host rule, define multiple paths in the http.paths array pointing to different backend services" },
      { id: 'D', text: "Create two separate Ingress resources with the same hostname" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Path-based fanout routing uses a single host rule with multiple path entries under `http.paths`. The ingress controller matches incoming URL prefixes and forwards requests to the corresponding backend Services.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#simple-fanout",
    tags: ["Kubernetes", "Ingress", "Path Fanout"]
  },
  {
    id: "k8s-ckad-223",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Default Backend in Ingress for Unmatched Requests",
    scenario: "An Ingress receives an HTTP request for a domain or path that does not match any declared rule in spec.rules.",
    question: "How does the ingress controller handle this unmatched request?",
    options: [
      { id: 'A', text: "It drops the packet silently" },
      { id: 'B', text: "It routes the request to the Ingress defaultBackend (if configured), or returns HTTP 404" },
      { id: 'C', text: "It routes the request to CoreDNS" },
      { id: 'D', text: "It restarts all backend pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Ingress can specify a `defaultBackend` at the root of `spec`. If an incoming HTTP request does not match any of the rules or paths in `spec.rules`, the ingress controller forwards the request to the `defaultBackend` service, or returns HTTP 404.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#default-backend",
    tags: ["Kubernetes", "Ingress", "defaultBackend"]
  },
  {
    id: "k8s-ckad-224",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "CoreDNS Pod /etc/resolv.conf Configuration",
    scenario: "A developer inspects /etc/resolv.conf inside a container pod running in the production namespace.",
    question: "What values are populated by the kubelet by default?",
    options: [
      { id: 'A', text: "nameserver set to the CoreDNS ClusterIP, search domains including production.svc.cluster.local and svc.cluster.local, and ndots:5" },
      { id: 'B', text: "nameserver set to 8.8.8.8 with no search domains" },
      { id: 'C', text: "nameserver set to the physical node IP" },
      { id: 'D', text: "/etc/resolv.conf is empty in containers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet configures `/etc/resolv.conf` with: `nameserver &lt;CoreDNS-ClusterIP&gt;`, `search &lt;namespace&gt;.svc.cluster.local svc.cluster.local cluster.local`, and `options ndots:5`. This allows pods to resolve local service names like `order-service` automatically.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-config",
    tags: ["Kubernetes", "CoreDNS", "resolv.conf"]
  },
  {
    id: "k8s-ckad-225",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "CoreDNS Service FQDN Structure Across Namespaces",
    scenario: "A pod in namespace `frontend` needs to connect to a Service named `database` located in namespace `backend`.",
    question: "What is the fully qualified domain name (FQDN) to address the service?",
    options: [
      { id: 'A', text: "database.frontend.svc.cluster.local" },
      { id: 'B', text: "database.backend.svc.cluster.local" },
      { id: 'C', text: "database.svc.cluster.local" },
      { id: 'D', text: "backend.database.cluster.local" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Kubernetes CoreDNS, services resolve via the standard FQDN format: `&lt;service-name&gt;.&lt;namespace&gt;.svc.&lt;cluster-domain&gt;` (e.g. `database.backend.svc.cluster.local`). Within the same namespace, pods can simply use `&lt;service-name&gt;`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#services",
    tags: ["Kubernetes", "CoreDNS", "Service FQDN"]
  }
];

export default K8S_CKAD_QUESTIONS_9;
