export const K8S_CKAD_FLASHCARDS_20 = [
  {
    id: "k8s-ckad-fc-476",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Egress CIDR Filtering (Dr Failover)",
    hint: "Restricting outbound container traffic to approved IP ranges and ports.",
    back: "An egress <strong>NetworkPolicy</strong> with <code>ipBlock</code> restrictions restricts outbound traffic to authorized CIDR blocks and ports, preventing compromised containers from reaching malicious external hosts.",
    tags: ["Egress Filtering", "Egress Filtering", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-477",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Egress CIDR Filtering (High Load Scale)",
    hint: "Restricting outbound container traffic to approved IP ranges and ports.",
    back: "An egress <strong>NetworkPolicy</strong> with <code>ipBlock</code> restrictions restricts outbound traffic to authorized CIDR blocks and ports, preventing compromised containers from reaching malicious external hosts.",
    tags: ["Egress Filtering", "Egress Filtering", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-478",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Egress CIDR Filtering (Security Compliance)",
    hint: "Restricting outbound container traffic to approved IP ranges and ports.",
    back: "An egress <strong>NetworkPolicy</strong> with <code>ipBlock</code> restrictions restricts outbound traffic to authorized CIDR blocks and ports, preventing compromised containers from reaching malicious external hosts.",
    tags: ["Egress Filtering", "Egress Filtering", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-479",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Egress CIDR Filtering (Hybrid Migration)",
    hint: "Restricting outbound container traffic to approved IP ranges and ports.",
    back: "An egress <strong>NetworkPolicy</strong> with <code>ipBlock</code> restrictions restricts outbound traffic to authorized CIDR blocks and ports, preventing compromised containers from reaching malicious external hosts.",
    tags: ["Egress Filtering", "Egress Filtering", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-480",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "NetworkPolicy Egress CIDR Filtering (Resilience Failure)",
    hint: "Restricting outbound container traffic to approved IP ranges and ports.",
    back: "An egress <strong>NetworkPolicy</strong> with <code>ipBlock</code> restrictions restricts outbound traffic to authorized CIDR blocks and ports, preventing compromised containers from reaching malicious external hosts.",
    tags: ["Egress Filtering", "Egress Filtering", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-481",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Host-Based Virtual Hosting (Dr Failover)",
    hint: "Routing traffic to different services based on incoming domain hostnames.",
    back: "An <strong>Ingress</strong> resource routes requests for multiple domain names (e.g., <code>api.example.com</code> vs <code>app.example.com</code>) to separate services using host-based routing rules.",
    tags: ["Ingress Routing", "Host Routing", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-482",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Host-Based Virtual Hosting (High Load Scale)",
    hint: "Routing traffic to different services based on incoming domain hostnames.",
    back: "An <strong>Ingress</strong> resource routes requests for multiple domain names (e.g., <code>api.example.com</code> vs <code>app.example.com</code>) to separate services using host-based routing rules.",
    tags: ["Ingress Routing", "Host Routing", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-483",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Host-Based Virtual Hosting (Security Compliance)",
    hint: "Routing traffic to different services based on incoming domain hostnames.",
    back: "An <strong>Ingress</strong> resource routes requests for multiple domain names (e.g., <code>api.example.com</code> vs <code>app.example.com</code>) to separate services using host-based routing rules.",
    tags: ["Ingress Routing", "Host Routing", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-484",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Host-Based Virtual Hosting (Hybrid Migration)",
    hint: "Routing traffic to different services based on incoming domain hostnames.",
    back: "An <strong>Ingress</strong> resource routes requests for multiple domain names (e.g., <code>api.example.com</code> vs <code>app.example.com</code>) to separate services using host-based routing rules.",
    tags: ["Ingress Routing", "Host Routing", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-485",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Host-Based Virtual Hosting (Resilience Failure)",
    hint: "Routing traffic to different services based on incoming domain hostnames.",
    back: "An <strong>Ingress</strong> resource routes requests for multiple domain names (e.g., <code>api.example.com</code> vs <code>app.example.com</code>) to separate services using host-based routing rules.",
    tags: ["Ingress Routing", "Host Routing", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-486",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Path-Based Routing (Dr Failover)",
    hint: "Directing URL path prefixes to distinct backend microservices.",
    back: "Specifying <strong>pathType: Prefix</strong> in Ingress rules routes URL subpaths (like <code>/v1/orders</code>) to designated backend services, enabling clean microservice routing under a shared domain.",
    tags: ["Path Routing", "Path Types", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-487",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Path-Based Routing (High Load Scale)",
    hint: "Directing URL path prefixes to distinct backend microservices.",
    back: "Specifying <strong>pathType: Prefix</strong> in Ingress rules routes URL subpaths (like <code>/v1/orders</code>) to designated backend services, enabling clean microservice routing under a shared domain.",
    tags: ["Path Routing", "Path Types", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-488",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Path-Based Routing (Security Compliance)",
    hint: "Directing URL path prefixes to distinct backend microservices.",
    back: "Specifying <strong>pathType: Prefix</strong> in Ingress rules routes URL subpaths (like <code>/v1/orders</code>) to designated backend services, enabling clean microservice routing under a shared domain.",
    tags: ["Path Routing", "Path Types", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-489",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Path-Based Routing (Hybrid Migration)",
    hint: "Directing URL path prefixes to distinct backend microservices.",
    back: "Specifying <strong>pathType: Prefix</strong> in Ingress rules routes URL subpaths (like <code>/v1/orders</code>) to designated backend services, enabling clean microservice routing under a shared domain.",
    tags: ["Path Routing", "Path Types", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-490",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress Path-Based Routing (Resilience Failure)",
    hint: "Directing URL path prefixes to distinct backend microservices.",
    back: "Specifying <strong>pathType: Prefix</strong> in Ingress rules routes URL subpaths (like <code>/v1/orders</code>) to designated backend services, enabling clean microservice routing under a shared domain.",
    tags: ["Path Routing", "Path Types", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-491",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress TLS Termination (Dr Failover)",
    hint: "Centralizing SSL/TLS offloading at the Ingress controller via TLS Secrets.",
    back: "Referencing a TLS Secret in an Ingress <strong>spec.tls</strong> block offloads HTTPS decryption at the controller, simplifying certificate management and reducing application CPU overhead.",
    tags: ["TLS Termination", "TLS Termination", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-492",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress TLS Termination (High Load Scale)",
    hint: "Centralizing SSL/TLS offloading at the Ingress controller via TLS Secrets.",
    back: "Referencing a TLS Secret in an Ingress <strong>spec.tls</strong> block offloads HTTPS decryption at the controller, simplifying certificate management and reducing application CPU overhead.",
    tags: ["TLS Termination", "TLS Termination", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-493",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress TLS Termination (Security Compliance)",
    hint: "Centralizing SSL/TLS offloading at the Ingress controller via TLS Secrets.",
    back: "Referencing a TLS Secret in an Ingress <strong>spec.tls</strong> block offloads HTTPS decryption at the controller, simplifying certificate management and reducing application CPU overhead.",
    tags: ["TLS Termination", "TLS Termination", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-494",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress TLS Termination (Hybrid Migration)",
    hint: "Centralizing SSL/TLS offloading at the Ingress controller via TLS Secrets.",
    back: "Referencing a TLS Secret in an Ingress <strong>spec.tls</strong> block offloads HTTPS decryption at the controller, simplifying certificate management and reducing application CPU overhead.",
    tags: ["TLS Termination", "TLS Termination", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-495",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Ingress TLS Termination (Resilience Failure)",
    hint: "Centralizing SSL/TLS offloading at the Ingress controller via TLS Secrets.",
    back: "Referencing a TLS Secret in an Ingress <strong>spec.tls</strong> block offloads HTTPS decryption at the controller, simplifying certificate management and reducing application CPU overhead.",
    tags: ["TLS Termination", "TLS Termination", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-496",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Service FQDN Structure (Dr Failover)",
    hint: "Cross-namespace service resolution using standard cluster DNS domain names.",
    back: "Cross-namespace service communication relies on the <strong>FQDN syntax</strong> (<code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code>), enabling reliable DNS resolution across namespace boundaries.",
    tags: ["Cluster DNS", "Service DNS", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-497",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Service FQDN Structure (High Load Scale)",
    hint: "Cross-namespace service resolution using standard cluster DNS domain names.",
    back: "Cross-namespace service communication relies on the <strong>FQDN syntax</strong> (<code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code>), enabling reliable DNS resolution across namespace boundaries.",
    tags: ["Cluster DNS", "Service DNS", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-498",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Service FQDN Structure (Security Compliance)",
    hint: "Cross-namespace service resolution using standard cluster DNS domain names.",
    back: "Cross-namespace service communication relies on the <strong>FQDN syntax</strong> (<code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code>), enabling reliable DNS resolution across namespace boundaries.",
    tags: ["Cluster DNS", "Service DNS", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-499",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Service FQDN Structure (Hybrid Migration)",
    hint: "Cross-namespace service resolution using standard cluster DNS domain names.",
    back: "Cross-namespace service communication relies on the <strong>FQDN syntax</strong> (<code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code>), enabling reliable DNS resolution across namespace boundaries.",
    tags: ["Cluster DNS", "Service DNS", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-500",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    front: "Kubernetes Service FQDN Structure (Resilience Failure)",
    hint: "Cross-namespace service resolution using standard cluster DNS domain names.",
    back: "Cross-namespace service communication relies on the <strong>FQDN syntax</strong> (<code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code>), enabling reliable DNS resolution across namespace boundaries.",
    tags: ["Cluster DNS", "Service DNS", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_20;
