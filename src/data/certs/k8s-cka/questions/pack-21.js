export const K8S_CKA_QUESTIONS_21 = [
  {
    id: "k8s-cka-476",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Gateway API: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to implement modern, extensible service networking that cleanly separates infrastructure provider duties from application developer routing rules.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Adopt one Ingress per team with a shared `ingressClassName`, and route by host inside each one." },
      { id: 'B', text: "Adopt a service mesh and express the routing as `VirtualService` objects owned by each team." },
      { id: 'C', text: "Adopt the Gateway API: `GatewayClass`, `Gateway` for the operator, `HTTPRoute` for the teams." },
      { id: 'D', text: "Adopt Ingress with controller-specific annotations, which each team sets on its own resource." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt the Kubernetes Gateway API, defining `GatewayClass` (infra provider), `Gateway` (cluster operator), and `HTTPRoute` (developer). The Kubernetes Gateway API is the next-generation evolution of Ingress. It provides role-oriented modeling: cluster operators configure `Gateway` resources (entry points, listeners, TLS), while application teams manage `HTTPRoute`, `GRPCRoute`, and `TCPRoute` resources independently.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Gateway API","Dr Failover"]
  },
  {
    id: "k8s-cka-477",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Gateway API: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to implement modern, extensible service networking that cleanly separates infrastructure provider duties from application developer routing rules.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Adopt one Ingress per team with a shared `ingressClassName`, and route by host inside each one." },
      { id: 'B', text: "Adopt Ingress with controller-specific annotations, which each team sets on its own resource." },
      { id: 'C', text: "Adopt a service mesh and express the routing as `VirtualService` objects owned by each team." },
      { id: 'D', text: "Adopt the Gateway API: `GatewayClass`, `Gateway` for the operator, `HTTPRoute` for the teams." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt the Kubernetes Gateway API, defining `GatewayClass` (infra provider), `Gateway` (cluster operator), and `HTTPRoute` (developer). The Kubernetes Gateway API is the next-generation evolution of Ingress. It provides role-oriented modeling: cluster operators configure `Gateway` resources (entry points, listeners, TLS), while application teams manage `HTTPRoute`, `GRPCRoute`, and `TCPRoute` resources independently.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Gateway API","High Load Scale"]
  },
  {
    id: "k8s-cka-478",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Gateway API: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to implement modern, extensible service networking that cleanly separates infrastructure provider duties from application developer routing rules.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Adopt Ingress with controller-specific annotations, which each team sets on its own resource." },
      { id: 'B', text: "Adopt one Ingress per team with a shared `ingressClassName`, and route by host inside each one." },
      { id: 'C', text: "Adopt the Gateway API: `GatewayClass`, `Gateway` for the operator, `HTTPRoute` for the teams." },
      { id: 'D', text: "Adopt a service mesh and express the routing as `VirtualService` objects owned by each team." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt the Kubernetes Gateway API, defining `GatewayClass` (infra provider), `Gateway` (cluster operator), and `HTTPRoute` (developer). The Kubernetes Gateway API is the next-generation evolution of Ingress. It provides role-oriented modeling: cluster operators configure `Gateway` resources (entry points, listeners, TLS), while application teams manage `HTTPRoute`, `GRPCRoute`, and `TCPRoute` resources independently.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Gateway API","Security Compliance"]
  },
  {
    id: "k8s-cka-479",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Gateway API: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to implement modern, extensible service networking that cleanly separates infrastructure provider duties from application developer routing rules.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Adopt the Gateway API: `GatewayClass`, `Gateway` for the operator, `HTTPRoute` for the teams." },
      { id: 'B', text: "Adopt Ingress with controller-specific annotations, which each team sets on its own resource." },
      { id: 'C', text: "Adopt one Ingress per team with a shared `ingressClassName`, and route by host inside each one." },
      { id: 'D', text: "Adopt a service mesh and express the routing as `VirtualService` objects owned by each team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt the Kubernetes Gateway API, defining `GatewayClass` (infra provider), `Gateway` (cluster operator), and `HTTPRoute` (developer). The Kubernetes Gateway API is the next-generation evolution of Ingress. It provides role-oriented modeling: cluster operators configure `Gateway` resources (entry points, listeners, TLS), while application teams manage `HTTPRoute`, `GRPCRoute`, and `TCPRoute` resources independently.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Gateway API","Hybrid Migration"]
  },
  {
    id: "k8s-cka-480",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Gateway API: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to implement modern, extensible service networking that cleanly separates infrastructure provider duties from application developer routing rules.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Adopt Ingress with controller-specific annotations, which each team sets on its own resource." },
      { id: 'B', text: "Adopt the Gateway API: `GatewayClass`, `Gateway` for the operator, `HTTPRoute` for the teams." },
      { id: 'C', text: "Adopt a service mesh and express the routing as `VirtualService` objects owned by each team." },
      { id: 'D', text: "Adopt one Ingress per team with a shared `ingressClassName`, and route by host inside each one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt the Kubernetes Gateway API, defining `GatewayClass` (infra provider), `Gateway` (cluster operator), and `HTTPRoute` (developer). The Kubernetes Gateway API is the next-generation evolution of Ingress. It provides role-oriented modeling: cluster operators configure `Gateway` resources (entry points, listeners, TLS), while application teams manage `HTTPRoute`, `GRPCRoute`, and `TCPRoute` resources independently.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API","Gateway API","Resilience Failure"]
  },
  {
    id: "k8s-cka-481",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CoreDNS Custom Configuration and Forwarding: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to configure Kubernetes cluster pods to resolve internal corporate domain names (e.g., `corp.internal`) via an on-premises enterprise DNS server.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Add a server block to the CoreDNS ConfigMap forwarding `corp.internal` to the enterprise resolver." },
      { id: 'B', text: "Add the enterprise resolver to every one of the nodes' `/etc/resolv.conf` and use `dnsPolicy: Default`." },
      { id: 'C', text: "Add `hostAliases` entries for the corporate records to each workload's own pod template." },
      { id: 'D', text: "Add a `dnsConfig` block on every pod naming the enterprise resolver as its nameserver." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Edit the CoreDNS ConfigMap in `kube-system` to add a server block forwarding queries for `corp.internal` to the enterprise DNS server IP. CoreDNS uses a declarative configuration file called the `Corefile` stored in a ConfigMap in `kube-system`. Adding forwarding stubs (e.g., `corp.internal:53 { forward . 10.0.0.10 }`) directs queries for specific domains to upstream enterprise nameservers while keeping cluster resolution intact.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS Configuration","CoreDNS Config","Dr Failover"]
  },
  {
    id: "k8s-cka-482",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CoreDNS Custom Configuration and Forwarding: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to configure Kubernetes cluster pods to resolve internal corporate domain names (e.g., `corp.internal`) via an on-premises enterprise DNS server.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Add the enterprise resolver to every one of the nodes' `/etc/resolv.conf` and use `dnsPolicy: Default`." },
      { id: 'B', text: "Add a server block to the CoreDNS ConfigMap forwarding `corp.internal` to the enterprise resolver." },
      { id: 'C', text: "Add a `dnsConfig` block on every pod naming the enterprise resolver as its nameserver." },
      { id: 'D', text: "Add `hostAliases` entries for the corporate records to each workload's own pod template." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Edit the CoreDNS ConfigMap in `kube-system` to add a server block forwarding queries for `corp.internal` to the enterprise DNS server IP. CoreDNS uses a declarative configuration file called the `Corefile` stored in a ConfigMap in `kube-system`. Adding forwarding stubs (e.g., `corp.internal:53 { forward . 10.0.0.10 }`) directs queries for specific domains to upstream enterprise nameservers while keeping cluster resolution intact.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS Configuration","CoreDNS Config","High Load Scale"]
  },
  {
    id: "k8s-cka-483",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CoreDNS Custom Configuration and Forwarding: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to configure Kubernetes cluster pods to resolve internal corporate domain names (e.g., `corp.internal`) via an on-premises enterprise DNS server.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Add the enterprise resolver to every one of the nodes' `/etc/resolv.conf` and use `dnsPolicy: Default`." },
      { id: 'B', text: "Add a server block to the CoreDNS ConfigMap forwarding `corp.internal` to the enterprise resolver." },
      { id: 'C', text: "Add a `dnsConfig` block on every pod naming the enterprise resolver as its nameserver." },
      { id: 'D', text: "Add `hostAliases` entries for the corporate records to each workload's own pod template." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Edit the CoreDNS ConfigMap in `kube-system` to add a server block forwarding queries for `corp.internal` to the enterprise DNS server IP. CoreDNS uses a declarative configuration file called the `Corefile` stored in a ConfigMap in `kube-system`. Adding forwarding stubs (e.g., `corp.internal:53 { forward . 10.0.0.10 }`) directs queries for specific domains to upstream enterprise nameservers while keeping cluster resolution intact.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS Configuration","CoreDNS Config","Security Compliance"]
  },
  {
    id: "k8s-cka-484",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CoreDNS Custom Configuration and Forwarding: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to configure Kubernetes cluster pods to resolve internal corporate domain names (e.g., `corp.internal`) via an on-premises enterprise DNS server.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Add a server block to the CoreDNS ConfigMap forwarding `corp.internal` to the enterprise resolver." },
      { id: 'B', text: "Add the enterprise resolver to every one of the nodes' `/etc/resolv.conf` and use `dnsPolicy: Default`." },
      { id: 'C', text: "Add `hostAliases` entries for the corporate records to each workload's own pod template." },
      { id: 'D', text: "Add a `dnsConfig` block on every pod naming the enterprise resolver as its nameserver." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Edit the CoreDNS ConfigMap in `kube-system` to add a server block forwarding queries for `corp.internal` to the enterprise DNS server IP. CoreDNS uses a declarative configuration file called the `Corefile` stored in a ConfigMap in `kube-system`. Adding forwarding stubs (e.g., `corp.internal:53 { forward . 10.0.0.10 }`) directs queries for specific domains to upstream enterprise nameservers while keeping cluster resolution intact.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS Configuration","CoreDNS Config","Hybrid Migration"]
  },
  {
    id: "k8s-cka-485",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CoreDNS Custom Configuration and Forwarding: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to configure Kubernetes cluster pods to resolve internal corporate domain names (e.g., `corp.internal`) via an on-premises enterprise DNS server.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Add a server block to the CoreDNS ConfigMap forwarding `corp.internal` to the enterprise resolver." },
      { id: 'B', text: "Add the enterprise resolver to every one of the nodes' `/etc/resolv.conf` and use `dnsPolicy: Default`." },
      { id: 'C', text: "Add `hostAliases` entries for the corporate records to each workload's own pod template." },
      { id: 'D', text: "Add a `dnsConfig` block on every pod naming the enterprise resolver as its nameserver." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Edit the CoreDNS ConfigMap in `kube-system` to add a server block forwarding queries for `corp.internal` to the enterprise DNS server IP. CoreDNS uses a declarative configuration file called the `Corefile` stored in a ConfigMap in `kube-system`. Adding forwarding stubs (e.g., `corp.internal:53 { forward . 10.0.0.10 }`) directs queries for specific domains to upstream enterprise nameservers while keeping cluster resolution intact.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS Configuration","CoreDNS Config","Resilience Failure"]
  },
  {
    id: "k8s-cka-486",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Internal Traffic Policy: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to optimize inter-service network latency and eliminate unnecessary cross-node hops by routing service calls only to pods running on the same node.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set `spec.externalTrafficPolicy: Local` on the Service" },
      { id: 'B', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'C', text: "Set `spec.publishNotReadyAddresses: true` on it" },
      { id: 'D', text: "Set `spec.internalTrafficPolicy: Local` on the Service" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.internalTrafficPolicy: Local` on the Service manifest. Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal traffic destined for the service only to endpoints located on the same node as the caller. If no local endpoint exists, traffic is dropped, preserving node locality.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Traffic Optimization","Internal Traffic Policy","Dr Failover"]
  },
  {
    id: "k8s-cka-487",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Internal Traffic Policy: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to optimize inter-service network latency and eliminate unnecessary cross-node hops by routing service calls only to pods running on the same node.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Set `spec.internalTrafficPolicy: Local` on the Service" },
      { id: 'B', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'C', text: "Set `spec.externalTrafficPolicy: Local` on the Service" },
      { id: 'D', text: "Set `spec.publishNotReadyAddresses: true` on it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.internalTrafficPolicy: Local` on the Service manifest. Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal traffic destined for the service only to endpoints located on the same node as the caller. If no local endpoint exists, traffic is dropped, preserving node locality.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Traffic Optimization","Internal Traffic Policy","High Load Scale"]
  },
  {
    id: "k8s-cka-488",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Internal Traffic Policy: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to optimize inter-service network latency and eliminate unnecessary cross-node hops by routing service calls only to pods running on the same node.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'B', text: "Set `spec.internalTrafficPolicy: Local` on the Service" },
      { id: 'C', text: "Set `spec.publishNotReadyAddresses: true` on it" },
      { id: 'D', text: "Set `spec.externalTrafficPolicy: Local` on the Service" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.internalTrafficPolicy: Local` on the Service manifest. Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal traffic destined for the service only to endpoints located on the same node as the caller. If no local endpoint exists, traffic is dropped, preserving node locality.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Traffic Optimization","Internal Traffic Policy","Security Compliance"]
  },
  {
    id: "k8s-cka-489",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Internal Traffic Policy: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to optimize inter-service network latency and eliminate unnecessary cross-node hops by routing service calls only to pods running on the same node.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Set `spec.internalTrafficPolicy: Local` on the Service" },
      { id: 'B', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'C', text: "Set `spec.externalTrafficPolicy: Local` on the Service" },
      { id: 'D', text: "Set `spec.publishNotReadyAddresses: true` on it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.internalTrafficPolicy: Local` on the Service manifest. Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal traffic destined for the service only to endpoints located on the same node as the caller. If no local endpoint exists, traffic is dropped, preserving node locality.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Traffic Optimization","Internal Traffic Policy","Hybrid Migration"]
  },
  {
    id: "k8s-cka-490",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Internal Traffic Policy: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to optimize inter-service network latency and eliminate unnecessary cross-node hops by routing service calls only to pods running on the same node.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Set `spec.publishNotReadyAddresses: true` on it" },
      { id: 'B', text: "Set `spec.externalTrafficPolicy: Local` on the Service" },
      { id: 'C', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'D', text: "Set `spec.internalTrafficPolicy: Local` on the Service" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.internalTrafficPolicy: Local` on the Service manifest. Setting `spec.internalTrafficPolicy: Local` on a Service instructs kube-proxy to route internal traffic destined for the service only to endpoints located on the same node as the caller. If no local endpoint exists, traffic is dropped, preserving node locality.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service-traffic-policy/",
    tags: ["Traffic Optimization","Internal Traffic Policy","Resilience Failure"]
  },
  {
    id: "k8s-cka-491",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalTrafficPolicy Local and Source IP Preservation: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to preserve real client IP addresses in web server access logs for incoming external traffic arriving through a LoadBalancer or NodePort service.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'B', text: "Set `spec.externalTrafficPolicy: Local` on the Service." },
      { id: 'C', text: "Disable kube-proxy across all worker nodes." },
      { id: 'D', text: "Configure an iptables SNAT rule on worker nodes to overwrite the source IP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.externalTrafficPolicy: Local` on the Service. By default (`externalTrafficPolicy: Cluster`), kube-proxy routes external traffic to pods across all nodes, performing SNAT which replaces the client's real IP with the node's IP. Setting `externalTrafficPolicy: Local` avoids SNAT, routing traffic only to local pods and preserving the original client source IP.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Source IP Preservation","Source IP","Dr Failover"]
  },
  {
    id: "k8s-cka-492",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalTrafficPolicy Local and Source IP Preservation: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to preserve real client IP addresses in web server access logs for incoming external traffic arriving through a LoadBalancer or NodePort service.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Configure an iptables SNAT rule on worker nodes to overwrite the source IP." },
      { id: 'B', text: "Set `spec.externalTrafficPolicy: Local` on the Service." },
      { id: 'C', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'D', text: "Disable kube-proxy across all worker nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.externalTrafficPolicy: Local` on the Service. By default (`externalTrafficPolicy: Cluster`), kube-proxy routes external traffic to pods across all nodes, performing SNAT which replaces the client's real IP with the node's IP. Setting `externalTrafficPolicy: Local` avoids SNAT, routing traffic only to local pods and preserving the original client source IP.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Source IP Preservation","Source IP","High Load Scale"]
  },
  {
    id: "k8s-cka-493",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalTrafficPolicy Local and Source IP Preservation: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to preserve real client IP addresses in web server access logs for incoming external traffic arriving through a LoadBalancer or NodePort service.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `spec.sessionAffinity: ClientIP` on the Service" },
      { id: 'B', text: "Set `spec.externalTrafficPolicy: Local` on the Service." },
      { id: 'C', text: "Disable kube-proxy across all worker nodes." },
      { id: 'D', text: "Configure an iptables SNAT rule on worker nodes to overwrite the source IP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.externalTrafficPolicy: Local` on the Service. By default (`externalTrafficPolicy: Cluster`), kube-proxy routes external traffic to pods across all nodes, performing SNAT which replaces the client's real IP with the node's IP. Setting `externalTrafficPolicy: Local` avoids SNAT, routing traffic only to local pods and preserving the original client source IP.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Source IP Preservation","Source IP","Security Compliance"]
  },
  {
    id: "k8s-cka-494",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalTrafficPolicy Local and Source IP Preservation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to preserve real client IP addresses in web server access logs for incoming external traffic arriving through a LoadBalancer or NodePort service.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Configure an iptables SNAT rule on worker nodes to overwrite the source IP." },
      { id: 'B', text: "Disable kube-proxy across all worker nodes." },
      { id: 'C', text: "Set `spec.externalTrafficPolicy: Local` on the Service." },
      { id: 'D', text: "Set `spec.sessionAffinity: ClientIP` on the Service" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.externalTrafficPolicy: Local` on the Service. By default (`externalTrafficPolicy: Cluster`), kube-proxy routes external traffic to pods across all nodes, performing SNAT which replaces the client's real IP with the node's IP. Setting `externalTrafficPolicy: Local` avoids SNAT, routing traffic only to local pods and preserving the original client source IP.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Source IP Preservation","Source IP","Hybrid Migration"]
  },
  {
    id: "k8s-cka-495",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalTrafficPolicy Local and Source IP Preservation: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to preserve real client IP addresses in web server access logs for incoming external traffic arriving through a LoadBalancer or NodePort service.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Disable kube-proxy across all worker nodes." },
      { id: 'B', text: "Set `spec.externalTrafficPolicy: Local` on the Service." },
      { id: 'C', text: "Configure an iptables SNAT rule on worker nodes to overwrite the source IP." },
      { id: 'D', text: "Set `spec.sessionAffinity: ClientIP` on the Service" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.externalTrafficPolicy: Local` on the Service. By default (`externalTrafficPolicy: Cluster`), kube-proxy routes external traffic to pods across all nodes, performing SNAT which replaces the client's real IP with the node's IP. Setting `externalTrafficPolicy: Local` avoids SNAT, routing traffic only to local pods and preserving the original client source IP.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip",
    tags: ["Source IP Preservation","Source IP","Resilience Failure"]
  },
  {
    id: "k8s-cka-496",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices for High-Scale Service Discovery: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to maintain efficient network routing and minimize control plane memory overhead for a microservice scaled to over 5,000 pod replicas.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Rely on `EndpointSlices`, which split large endpoint sets into slices of at most 100." },
      { id: 'B', text: "Rely on the legacy `Endpoints` object, which kube-proxy reads in a single watch." },
      { id: 'C', text: "Split the workload across several Services so that each carries a smaller endpoint set." },
      { id: 'D', text: "Switch kube-proxy to IPVS mode, which removes the endpoint object from the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Kubernetes `EndpointSlices`, which partition large endpoint sets into discrete resources containing at most 100 endpoints each. Legacy `Endpoints` objects stored all pod IPs for a service in a single resource, leading to massive network traffic and apiserver load when updating large services. `EndpointSlices` split endpoints across multiple smaller objects (up to 100 endpoints each), significantly improving scalability and reducing update overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["High Scale Networking","EndpointSlices","Dr Failover"]
  },
  {
    id: "k8s-cka-497",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices for High-Scale Service Discovery: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to maintain efficient network routing and minimize control plane memory overhead for a microservice scaled to over 5,000 pod replicas.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Rely on `EndpointSlices`, which split large endpoint sets into slices of at most 100." },
      { id: 'B', text: "Rely on the legacy `Endpoints` object, which kube-proxy reads in a single watch." },
      { id: 'C', text: "Split the workload across several Services so that each carries a smaller endpoint set." },
      { id: 'D', text: "Switch kube-proxy to IPVS mode, which removes the endpoint object from the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Kubernetes `EndpointSlices`, which partition large endpoint sets into discrete resources containing at most 100 endpoints each. Legacy `Endpoints` objects stored all pod IPs for a service in a single resource, leading to massive network traffic and apiserver load when updating large services. `EndpointSlices` split endpoints across multiple smaller objects (up to 100 endpoints each), significantly improving scalability and reducing update overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["High Scale Networking","EndpointSlices","High Load Scale"]
  },
  {
    id: "k8s-cka-498",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices for High-Scale Service Discovery: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to maintain efficient network routing and minimize control plane memory overhead for a microservice scaled to over 5,000 pod replicas.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Rely on `EndpointSlices`, which split large endpoint sets into slices of at most 100." },
      { id: 'B', text: "Switch kube-proxy to IPVS mode, which removes the endpoint object from the path." },
      { id: 'C', text: "Rely on the legacy `Endpoints` object, which kube-proxy reads in a single watch." },
      { id: 'D', text: "Split the workload across several Services so that each carries a smaller endpoint set." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Kubernetes `EndpointSlices`, which partition large endpoint sets into discrete resources containing at most 100 endpoints each. Legacy `Endpoints` objects stored all pod IPs for a service in a single resource, leading to massive network traffic and apiserver load when updating large services. `EndpointSlices` split endpoints across multiple smaller objects (up to 100 endpoints each), significantly improving scalability and reducing update overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["High Scale Networking","EndpointSlices","Security Compliance"]
  },
  {
    id: "k8s-cka-499",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices for High-Scale Service Discovery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to maintain efficient network routing and minimize control plane memory overhead for a microservice scaled to over 5,000 pod replicas.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Rely on `EndpointSlices`, which split large endpoint sets into slices of at most 100." },
      { id: 'B', text: "Rely on the legacy `Endpoints` object, which kube-proxy reads in a single watch." },
      { id: 'C', text: "Split the workload across several Services so that each carries a smaller endpoint set." },
      { id: 'D', text: "Switch kube-proxy to IPVS mode, which removes the endpoint object from the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rely on Kubernetes `EndpointSlices`, which partition large endpoint sets into discrete resources containing at most 100 endpoints each. Legacy `Endpoints` objects stored all pod IPs for a service in a single resource, leading to massive network traffic and apiserver load when updating large services. `EndpointSlices` split endpoints across multiple smaller objects (up to 100 endpoints each), significantly improving scalability and reducing update overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["High Scale Networking","EndpointSlices","Hybrid Migration"]
  },
  {
    id: "k8s-cka-500",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices for High-Scale Service Discovery: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to maintain efficient network routing and minimize control plane memory overhead for a microservice scaled to over 5,000 pod replicas.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Split the workload across several Services so that each carries a smaller endpoint set." },
      { id: 'B', text: "Switch kube-proxy to IPVS mode, which removes the endpoint object from the path." },
      { id: 'C', text: "Rely on `EndpointSlices`, which split large endpoint sets into slices of at most 100." },
      { id: 'D', text: "Rely on the legacy `Endpoints` object, which kube-proxy reads in a single watch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rely on Kubernetes `EndpointSlices`, which partition large endpoint sets into discrete resources containing at most 100 endpoints each. Legacy `Endpoints` objects stored all pod IPs for a service in a single resource, leading to massive network traffic and apiserver load when updating large services. `EndpointSlices` split endpoints across multiple smaller objects (up to 100 endpoints each), significantly improving scalability and reducing update overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["High Scale Networking","EndpointSlices","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_21;
