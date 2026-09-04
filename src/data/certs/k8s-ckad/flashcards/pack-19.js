export const K8S_CKAD_FLASHCARDS_19 = [
  {
    id: "k8s-ckad-fc-451",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service port vs targetPort Mapping (Dr Failover)",
    hint: "Routing traffic from Service virtual ports to backend container target ports.",
    back: "In a Service manifest, <strong>port</strong> defines the virtual IP listening port for clients, while <strong>targetPort</strong> specifies the actual port on which backend containers receive connections.",
    tags: ["Service Networking", "Service Ports", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-452",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service port vs targetPort Mapping (High Load Scale)",
    hint: "Routing traffic from Service virtual ports to backend container target ports.",
    back: "In a Service manifest, <strong>port</strong> defines the virtual IP listening port for clients, while <strong>targetPort</strong> specifies the actual port on which backend containers receive connections.",
    tags: ["Service Networking", "Service Ports", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-453",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service port vs targetPort Mapping (Security Compliance)",
    hint: "Routing traffic from Service virtual ports to backend container target ports.",
    back: "In a Service manifest, <strong>port</strong> defines the virtual IP listening port for clients, while <strong>targetPort</strong> specifies the actual port on which backend containers receive connections.",
    tags: ["Service Networking", "Service Ports", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-454",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service port vs targetPort Mapping (Hybrid Migration)",
    hint: "Routing traffic from Service virtual ports to backend container target ports.",
    back: "In a Service manifest, <strong>port</strong> defines the virtual IP listening port for clients, while <strong>targetPort</strong> specifies the actual port on which backend containers receive connections.",
    tags: ["Service Networking", "Service Ports", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-455",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Service port vs targetPort Mapping (Resilience Failure)",
    hint: "Routing traffic from Service virtual ports to backend container target ports.",
    back: "In a Service manifest, <strong>port</strong> defines the virtual IP listening port for clients, while <strong>targetPort</strong> specifies the actual port on which backend containers receive connections.",
    tags: ["Service Networking", "Service Ports", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-456",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes NodePort Services (Dr Failover)",
    hint: "Exposing workloads externally across all cluster node IPs on high ports.",
    back: "A <strong>NodePort</strong> service allocates a dedicated port (30000-32767) across all worker nodes, forwarding incoming traffic on any node IP to backend service pods.",
    tags: ["NodePort Services", "NodePort", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-457",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes NodePort Services (High Load Scale)",
    hint: "Exposing workloads externally across all cluster node IPs on high ports.",
    back: "A <strong>NodePort</strong> service allocates a dedicated port (30000-32767) across all worker nodes, forwarding incoming traffic on any node IP to backend service pods.",
    tags: ["NodePort Services", "NodePort", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-458",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes NodePort Services (Security Compliance)",
    hint: "Exposing workloads externally across all cluster node IPs on high ports.",
    back: "A <strong>NodePort</strong> service allocates a dedicated port (30000-32767) across all worker nodes, forwarding incoming traffic on any node IP to backend service pods.",
    tags: ["NodePort Services", "NodePort", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-459",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes NodePort Services (Hybrid Migration)",
    hint: "Exposing workloads externally across all cluster node IPs on high ports.",
    back: "A <strong>NodePort</strong> service allocates a dedicated port (30000-32767) across all worker nodes, forwarding incoming traffic on any node IP to backend service pods.",
    tags: ["NodePort Services", "NodePort", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-460",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes NodePort Services (Resilience Failure)",
    hint: "Exposing workloads externally across all cluster node IPs on high ports.",
    back: "A <strong>NodePort</strong> service allocates a dedicated port (30000-32767) across all worker nodes, forwarding incoming traffic on any node IP to backend service pods.",
    tags: ["NodePort Services", "NodePort", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-461",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes LoadBalancer Services (Dr Failover)",
    hint: "Automatically provisioning external cloud load balancers for public access.",
    back: "A <strong>LoadBalancer</strong> service integrates with underlying cloud infrastructure to provision an external load balancer, providing a public IP that routes internet traffic to cluster pods.",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-462",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes LoadBalancer Services (High Load Scale)",
    hint: "Automatically provisioning external cloud load balancers for public access.",
    back: "A <strong>LoadBalancer</strong> service integrates with underlying cloud infrastructure to provision an external load balancer, providing a public IP that routes internet traffic to cluster pods.",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-463",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes LoadBalancer Services (Security Compliance)",
    hint: "Automatically provisioning external cloud load balancers for public access.",
    back: "A <strong>LoadBalancer</strong> service integrates with underlying cloud infrastructure to provision an external load balancer, providing a public IP that routes internet traffic to cluster pods.",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-464",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes LoadBalancer Services (Hybrid Migration)",
    hint: "Automatically provisioning external cloud load balancers for public access.",
    back: "A <strong>LoadBalancer</strong> service integrates with underlying cloud infrastructure to provision an external load balancer, providing a public IP that routes internet traffic to cluster pods.",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-465",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes LoadBalancer Services (Resilience Failure)",
    hint: "Automatically provisioning external cloud load balancers for public access.",
    back: "A <strong>LoadBalancer</strong> service integrates with underlying cloud infrastructure to provision an external load balancer, providing a public IP that routes internet traffic to cluster pods.",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-466",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Ingress Label Filtering (Dr Failover)",
    hint: "Restricting incoming traffic to pods matching specific label selectors.",
    back: "An ingress <strong>NetworkPolicy</strong> using <code>podSelector: matchLabels</code> restricts incoming connections to pods possessing specific labels, isolating backends from unauthorized callers.",
    tags: ["Network Policies", "Ingress Filtering", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-467",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Ingress Label Filtering (High Load Scale)",
    hint: "Restricting incoming traffic to pods matching specific label selectors.",
    back: "An ingress <strong>NetworkPolicy</strong> using <code>podSelector: matchLabels</code> restricts incoming connections to pods possessing specific labels, isolating backends from unauthorized callers.",
    tags: ["Network Policies", "Ingress Filtering", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-468",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Ingress Label Filtering (Security Compliance)",
    hint: "Restricting incoming traffic to pods matching specific label selectors.",
    back: "An ingress <strong>NetworkPolicy</strong> using <code>podSelector: matchLabels</code> restricts incoming connections to pods possessing specific labels, isolating backends from unauthorized callers.",
    tags: ["Network Policies", "Ingress Filtering", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-469",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Ingress Label Filtering (Hybrid Migration)",
    hint: "Restricting incoming traffic to pods matching specific label selectors.",
    back: "An ingress <strong>NetworkPolicy</strong> using <code>podSelector: matchLabels</code> restricts incoming connections to pods possessing specific labels, isolating backends from unauthorized callers.",
    tags: ["Network Policies", "Ingress Filtering", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-470",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Ingress Label Filtering (Resilience Failure)",
    hint: "Restricting incoming traffic to pods matching specific label selectors.",
    back: "An ingress <strong>NetworkPolicy</strong> using <code>podSelector: matchLabels</code> restricts incoming connections to pods possessing specific labels, isolating backends from unauthorized callers.",
    tags: ["Network Policies", "Ingress Filtering", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-471",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Cross-Namespace Ingress Filtering (Dr Failover)",
    hint: "Allowing traffic from specific external namespaces via namespaceSelector.",
    back: "Combining <strong>namespaceSelector</strong> with pod selectors in a NetworkPolicy permits cross-namespace ingress exclusively from designated namespaces while maintaining isolation from others.",
    tags: ["Namespace Isolation", "Namespace Ingress", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-472",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Cross-Namespace Ingress Filtering (High Load Scale)",
    hint: "Allowing traffic from specific external namespaces via namespaceSelector.",
    back: "Combining <strong>namespaceSelector</strong> with pod selectors in a NetworkPolicy permits cross-namespace ingress exclusively from designated namespaces while maintaining isolation from others.",
    tags: ["Namespace Isolation", "Namespace Ingress", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-473",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Cross-Namespace Ingress Filtering (Security Compliance)",
    hint: "Allowing traffic from specific external namespaces via namespaceSelector.",
    back: "Combining <strong>namespaceSelector</strong> with pod selectors in a NetworkPolicy permits cross-namespace ingress exclusively from designated namespaces while maintaining isolation from others.",
    tags: ["Namespace Isolation", "Namespace Ingress", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-474",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Cross-Namespace Ingress Filtering (Hybrid Migration)",
    hint: "Allowing traffic from specific external namespaces via namespaceSelector.",
    back: "Combining <strong>namespaceSelector</strong> with pod selectors in a NetworkPolicy permits cross-namespace ingress exclusively from designated namespaces while maintaining isolation from others.",
    tags: ["Namespace Isolation", "Namespace Ingress", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-475",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Cross-Namespace Ingress Filtering (Resilience Failure)",
    hint: "Allowing traffic from specific external namespaces via namespaceSelector.",
    back: "Combining <strong>namespaceSelector</strong> with pod selectors in a NetworkPolicy permits cross-namespace ingress exclusively from designated namespaces while maintaining isolation from others.",
    tags: ["Namespace Isolation", "Namespace Ingress", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_19;
