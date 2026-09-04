export const K8S_CKA_QUESTIONS_20 = [
  {
    id: "k8s-cka-451",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ClusterIP, NodePort, and LoadBalancer Services: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Service Types to expose an internal backend microservice so that only other pods within the cluster can communicate with it across a stable IP address.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Exposing workloads internally, on node ports, and via cloud load balancers is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP` (the default service type)." },
      { id: 'B', text: "Create a Service with `type: LoadBalancer` provisioning a public IP address." },
      { id: 'C', text: "Create a Service with `type: NodePort` exposing high port 30000+ on every worker node." },
      { id: 'D', text: "Configure pods with `hostNetwork: true` and bind to port 80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP` (the default service type). `ClusterIP` assigns a stable, cluster-internal virtual IP address that is only reachable from within the cluster. It is the default and recommended service type for inter-service microservice communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Service Types", "Service Types", "Dr Failover"]
  },
  {
    id: "k8s-cka-452",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ClusterIP, NodePort, and LoadBalancer Services: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Service Types to expose an internal backend microservice so that only other pods within the cluster can communicate with it across a stable IP address.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Exposing workloads internally, on node ports, and via cloud load balancers is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP` (the default service type)." },
      { id: 'B', text: "Create a Service with `type: LoadBalancer` provisioning a public IP address." },
      { id: 'C', text: "Create a Service with `type: NodePort` exposing high port 30000+ on every worker node." },
      { id: 'D', text: "Configure pods with `hostNetwork: true` and bind to port 80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP` (the default service type). `ClusterIP` assigns a stable, cluster-internal virtual IP address that is only reachable from within the cluster. It is the default and recommended service type for inter-service microservice communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Service Types", "Service Types", "High Load Scale"]
  },
  {
    id: "k8s-cka-453",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ClusterIP, NodePort, and LoadBalancer Services: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Service Types to expose an internal backend microservice so that only other pods within the cluster can communicate with it across a stable IP address.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Exposing workloads internally, on node ports, and via cloud load balancers is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP` (the default service type)." },
      { id: 'B', text: "Create a Service with `type: LoadBalancer` provisioning a public IP address." },
      { id: 'C', text: "Create a Service with `type: NodePort` exposing high port 30000+ on every worker node." },
      { id: 'D', text: "Configure pods with `hostNetwork: true` and bind to port 80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP` (the default service type). `ClusterIP` assigns a stable, cluster-internal virtual IP address that is only reachable from within the cluster. It is the default and recommended service type for inter-service microservice communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Service Types", "Service Types", "Security Compliance"]
  },
  {
    id: "k8s-cka-454",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ClusterIP, NodePort, and LoadBalancer Services: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Service Types to expose an internal backend microservice so that only other pods within the cluster can communicate with it across a stable IP address.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Exposing workloads internally, on node ports, and via cloud load balancers is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP` (the default service type)." },
      { id: 'B', text: "Create a Service with `type: LoadBalancer` provisioning a public IP address." },
      { id: 'C', text: "Create a Service with `type: NodePort` exposing high port 30000+ on every worker node." },
      { id: 'D', text: "Configure pods with `hostNetwork: true` and bind to port 80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP` (the default service type). `ClusterIP` assigns a stable, cluster-internal virtual IP address that is only reachable from within the cluster. It is the default and recommended service type for inter-service microservice communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Service Types", "Service Types", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-455",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ClusterIP, NodePort, and LoadBalancer Services: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Service Types to expose an internal backend microservice so that only other pods within the cluster can communicate with it across a stable IP address.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Exposing workloads internally, on node ports, and via cloud load balancers is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP` (the default service type)." },
      { id: 'B', text: "Create a Service with `type: LoadBalancer` provisioning a public IP address." },
      { id: 'C', text: "Create a Service with `type: NodePort` exposing high port 30000+ on every worker node." },
      { id: 'D', text: "Configure pods with `hostNetwork: true` and bind to port 80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP` (the default service type). `ClusterIP` assigns a stable, cluster-internal virtual IP address that is only reachable from within the cluster. It is the default and recommended service type for inter-service microservice communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types",
    tags: ["Service Types", "Service Types", "Resilience Failure"]
  },
  {
    id: "k8s-cka-456",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Services for Stateful Workloads: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Headless Services to allow client pods to discover and connect directly to individual stateful database replica pod IPs without routing through proxy load balancing.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Configuring clusterIP: None for direct pod DNS resolution in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector." },
      { id: 'B', text: "Create a NodePort service on port 3306." },
      { id: 'C', text: "Configure a standard ClusterIP service with round-robin load balancing." },
      { id: 'D', text: "Assign public static elastic IP addresses to each database container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector. A Headless Service (`clusterIP: None`) does not allocate a virtual IP or use kube-proxy. Instead, CoreDNS returns direct DNS A/AAAA records for each backing pod IP, allowing clients to establish direct point-to-point connections with specific stateful replicas.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Services", "Headless Services", "Dr Failover"]
  },
  {
    id: "k8s-cka-457",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Services for Stateful Workloads: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Headless Services to allow client pods to discover and connect directly to individual stateful database replica pod IPs without routing through proxy load balancing.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Configuring clusterIP: None for direct pod DNS resolution in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector." },
      { id: 'B', text: "Create a NodePort service on port 3306." },
      { id: 'C', text: "Configure a standard ClusterIP service with round-robin load balancing." },
      { id: 'D', text: "Assign public static elastic IP addresses to each database container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector. A Headless Service (`clusterIP: None`) does not allocate a virtual IP or use kube-proxy. Instead, CoreDNS returns direct DNS A/AAAA records for each backing pod IP, allowing clients to establish direct point-to-point connections with specific stateful replicas.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Services", "Headless Services", "High Load Scale"]
  },
  {
    id: "k8s-cka-458",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Services for Stateful Workloads: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Headless Services to allow client pods to discover and connect directly to individual stateful database replica pod IPs without routing through proxy load balancing.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring clusterIP: None for direct pod DNS resolution in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector." },
      { id: 'B', text: "Create a NodePort service on port 3306." },
      { id: 'C', text: "Configure a standard ClusterIP service with round-robin load balancing." },
      { id: 'D', text: "Assign public static elastic IP addresses to each database container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector. A Headless Service (`clusterIP: None`) does not allocate a virtual IP or use kube-proxy. Instead, CoreDNS returns direct DNS A/AAAA records for each backing pod IP, allowing clients to establish direct point-to-point connections with specific stateful replicas.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Services", "Headless Services", "Security Compliance"]
  },
  {
    id: "k8s-cka-459",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Services for Stateful Workloads: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Headless Services to allow client pods to discover and connect directly to individual stateful database replica pod IPs without routing through proxy load balancing.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Configuring clusterIP: None for direct pod DNS resolution in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector." },
      { id: 'B', text: "Create a NodePort service on port 3306." },
      { id: 'C', text: "Configure a standard ClusterIP service with round-robin load balancing." },
      { id: 'D', text: "Assign public static elastic IP addresses to each database container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector. A Headless Service (`clusterIP: None`) does not allocate a virtual IP or use kube-proxy. Instead, CoreDNS returns direct DNS A/AAAA records for each backing pod IP, allowing clients to establish direct point-to-point connections with specific stateful replicas.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Services", "Headless Services", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-460",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Services for Stateful Workloads: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Headless Services to allow client pods to discover and connect directly to individual stateful database replica pod IPs without routing through proxy load balancing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Configuring clusterIP: None for direct pod DNS resolution in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector." },
      { id: 'B', text: "Create a NodePort service on port 3306." },
      { id: 'C', text: "Configure a standard ClusterIP service with round-robin load balancing." },
      { id: 'D', text: "Assign public static elastic IP addresses to each database container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `clusterIP: None` (Headless Service) matching the StatefulSet pod selector. A Headless Service (`clusterIP: None`) does not allocate a virtual IP or use kube-proxy. Instead, CoreDNS returns direct DNS A/AAAA records for each backing pod IP, allowing clients to establish direct point-to-point connections with specific stateful replicas.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",
    tags: ["Headless Services", "Headless Services", "Resilience Failure"]
  },
  {
    id: "k8s-cka-461",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Controllers and Ingress Resources: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Ingress Routing to route external HTTP traffic based on URL paths (`/api` and `/web`) to different internal backend services using a single entry point and TLS certificate.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? HTTP/HTTPS path and host-based routing via Ingress controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules." },
      { id: 'B', text: "Create separate LoadBalancer services for each path, requiring multiple public IP addresses." },
      { id: 'C', text: "Manually configure iptables on every worker node to route port 80 traffic." },
      { id: 'D', text: "Instruct clients to connect directly to worker node internal IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules. An Ingress resource defines rules for routing external HTTP and HTTPS traffic to services within the cluster. An Ingress Controller (like NGINX or Traefik) implements those rules, providing SSL termination, path-based routing, and name-based virtual hosting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress Routing", "Ingress", "Dr Failover"]
  },
  {
    id: "k8s-cka-462",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Controllers and Ingress Resources: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Ingress Routing to route external HTTP traffic based on URL paths (`/api` and `/web`) to different internal backend services using a single entry point and TLS certificate.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? HTTP/HTTPS path and host-based routing via Ingress controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules." },
      { id: 'B', text: "Create separate LoadBalancer services for each path, requiring multiple public IP addresses." },
      { id: 'C', text: "Manually configure iptables on every worker node to route port 80 traffic." },
      { id: 'D', text: "Instruct clients to connect directly to worker node internal IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules. An Ingress resource defines rules for routing external HTTP and HTTPS traffic to services within the cluster. An Ingress Controller (like NGINX or Traefik) implements those rules, providing SSL termination, path-based routing, and name-based virtual hosting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress Routing", "Ingress", "High Load Scale"]
  },
  {
    id: "k8s-cka-463",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Controllers and Ingress Resources: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Ingress Routing to route external HTTP traffic based on URL paths (`/api` and `/web`) to different internal backend services using a single entry point and TLS certificate.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? HTTP/HTTPS path and host-based routing via Ingress controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules." },
      { id: 'B', text: "Create separate LoadBalancer services for each path, requiring multiple public IP addresses." },
      { id: 'C', text: "Manually configure iptables on every worker node to route port 80 traffic." },
      { id: 'D', text: "Instruct clients to connect directly to worker node internal IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules. An Ingress resource defines rules for routing external HTTP and HTTPS traffic to services within the cluster. An Ingress Controller (like NGINX or Traefik) implements those rules, providing SSL termination, path-based routing, and name-based virtual hosting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress Routing", "Ingress", "Security Compliance"]
  },
  {
    id: "k8s-cka-464",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Controllers and Ingress Resources: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Ingress Routing to route external HTTP traffic based on URL paths (`/api` and `/web`) to different internal backend services using a single entry point and TLS certificate.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? HTTP/HTTPS path and host-based routing via Ingress controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules." },
      { id: 'B', text: "Create separate LoadBalancer services for each path, requiring multiple public IP addresses." },
      { id: 'C', text: "Manually configure iptables on every worker node to route port 80 traffic." },
      { id: 'D', text: "Instruct clients to connect directly to worker node internal IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules. An Ingress resource defines rules for routing external HTTP and HTTPS traffic to services within the cluster. An Ingress Controller (like NGINX or Traefik) implements those rules, providing SSL termination, path-based routing, and name-based virtual hosting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress Routing", "Ingress", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-465",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Controllers and Ingress Resources: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Ingress Routing to route external HTTP traffic based on URL paths (`/api` and `/web`) to different internal backend services using a single entry point and TLS certificate.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? HTTP/HTTPS path and host-based routing via Ingress controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules." },
      { id: 'B', text: "Create separate LoadBalancer services for each path, requiring multiple public IP addresses." },
      { id: 'C', text: "Manually configure iptables on every worker node to route port 80 traffic." },
      { id: 'D', text: "Instruct clients to connect directly to worker node internal IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Ingress Controller (e.g., ingress-nginx) and define an `Ingress` resource specifying host and path routing rules. An Ingress resource defines rules for routing external HTTP and HTTPS traffic to services within the cluster. An Ingress Controller (like NGINX or Traefik) implements those rules, providing SSL termination, path-based routing, and name-based virtual hosting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress Routing", "Ingress", "Resilience Failure"]
  },
  {
    id: "k8s-cka-466",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Network Policies for Ingress and Egress Isolation: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Network Policies to isolate a database pod so that it only accepts incoming TCP connections on port 5432 from pods labeled `app=backend` and blocks all other traffic.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Default-deny network policies and podSelector/namespaceSelector rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`." },
      { id: 'B', text: "Install a host-based firewall manually on each worker node operating system." },
      { id: 'C', text: "Rely on Linux file permissions inside the container filesystem to restrict network packets." },
      { id: 'D', text: "Delete all other pods in the cluster to prevent them from sending traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`. By default, all pods in a Kubernetes cluster can communicate with each other without restriction. Applying a `NetworkPolicy` isolates selected pods, enforcing ingress and egress firewall rules based on pod selectors, namespace selectors, and CIDR blocks (requires a CNI plugin supporting NetworkPolicies).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Policies", "Network Policies", "Dr Failover"]
  },
  {
    id: "k8s-cka-467",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Network Policies for Ingress and Egress Isolation: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Network Policies to isolate a database pod so that it only accepts incoming TCP connections on port 5432 from pods labeled `app=backend` and blocks all other traffic.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Default-deny network policies and podSelector/namespaceSelector rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`." },
      { id: 'B', text: "Install a host-based firewall manually on each worker node operating system." },
      { id: 'C', text: "Rely on Linux file permissions inside the container filesystem to restrict network packets." },
      { id: 'D', text: "Delete all other pods in the cluster to prevent them from sending traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`. By default, all pods in a Kubernetes cluster can communicate with each other without restriction. Applying a `NetworkPolicy` isolates selected pods, enforcing ingress and egress firewall rules based on pod selectors, namespace selectors, and CIDR blocks (requires a CNI plugin supporting NetworkPolicies).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Policies", "Network Policies", "High Load Scale"]
  },
  {
    id: "k8s-cka-468",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Network Policies for Ingress and Egress Isolation: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Network Policies to isolate a database pod so that it only accepts incoming TCP connections on port 5432 from pods labeled `app=backend` and blocks all other traffic.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Default-deny network policies and podSelector/namespaceSelector rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`." },
      { id: 'B', text: "Install a host-based firewall manually on each worker node operating system." },
      { id: 'C', text: "Rely on Linux file permissions inside the container filesystem to restrict network packets." },
      { id: 'D', text: "Delete all other pods in the cluster to prevent them from sending traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`. By default, all pods in a Kubernetes cluster can communicate with each other without restriction. Applying a `NetworkPolicy` isolates selected pods, enforcing ingress and egress firewall rules based on pod selectors, namespace selectors, and CIDR blocks (requires a CNI plugin supporting NetworkPolicies).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Policies", "Network Policies", "Security Compliance"]
  },
  {
    id: "k8s-cka-469",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Network Policies for Ingress and Egress Isolation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Network Policies to isolate a database pod so that it only accepts incoming TCP connections on port 5432 from pods labeled `app=backend` and blocks all other traffic.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Default-deny network policies and podSelector/namespaceSelector rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`." },
      { id: 'B', text: "Install a host-based firewall manually on each worker node operating system." },
      { id: 'C', text: "Rely on Linux file permissions inside the container filesystem to restrict network packets." },
      { id: 'D', text: "Delete all other pods in the cluster to prevent them from sending traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`. By default, all pods in a Kubernetes cluster can communicate with each other without restriction. Applying a `NetworkPolicy` isolates selected pods, enforcing ingress and egress firewall rules based on pod selectors, namespace selectors, and CIDR blocks (requires a CNI plugin supporting NetworkPolicies).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Policies", "Network Policies", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-470",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Network Policies for Ingress and Egress Isolation: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Network Policies to isolate a database pod so that it only accepts incoming TCP connections on port 5432 from pods labeled `app=backend` and blocks all other traffic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Default-deny network policies and podSelector/namespaceSelector rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`." },
      { id: 'B', text: "Install a host-based firewall manually on each worker node operating system." },
      { id: 'C', text: "Rely on Linux file permissions inside the container filesystem to restrict network packets." },
      { id: 'D', text: "Delete all other pods in the cluster to prevent them from sending traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress` rule permitting traffic only from pods matching `podSelector: matchLabels: app: backend`. By default, all pods in a Kubernetes cluster can communicate with each other without restriction. Applying a `NetworkPolicy` isolates selected pods, enforcing ingress and egress firewall rules based on pod selectors, namespace selectors, and CIDR blocks (requires a CNI plugin supporting NetworkPolicies).",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Network Policies", "Network Policies", "Resilience Failure"]
  },
  {
    id: "k8s-cka-471",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny All Network Policy Pattern: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Network Security to enforce a zero-trust network posture in a sensitive namespace where all pod communication is blocked by default until explicitly permitted.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Implementing namespace-wide default-deny ingress and egress rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules." },
      { id: 'B', text: "Disable the CNI network plugin in that namespace." },
      { id: 'C', text: "Change the namespace label to `isolation: maximum`." },
      { id: 'D', text: "Block DNS port 53 traffic across the entire cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules. A NetworkPolicy with `podSelector: {}` selects all pods in the namespace. Specifying `policyTypes: [Ingress, Egress]` without allow rules establishes a default-deny posture, isolating every pod from incoming and outgoing traffic until explicit whitelist policies are added.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Network Security", "Default-Deny", "Dr Failover"]
  },
  {
    id: "k8s-cka-472",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny All Network Policy Pattern: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Network Security to enforce a zero-trust network posture in a sensitive namespace where all pod communication is blocked by default until explicitly permitted.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Implementing namespace-wide default-deny ingress and egress rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules." },
      { id: 'B', text: "Disable the CNI network plugin in that namespace." },
      { id: 'C', text: "Change the namespace label to `isolation: maximum`." },
      { id: 'D', text: "Block DNS port 53 traffic across the entire cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules. A NetworkPolicy with `podSelector: {}` selects all pods in the namespace. Specifying `policyTypes: [Ingress, Egress]` without allow rules establishes a default-deny posture, isolating every pod from incoming and outgoing traffic until explicit whitelist policies are added.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Network Security", "Default-Deny", "High Load Scale"]
  },
  {
    id: "k8s-cka-473",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny All Network Policy Pattern: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Network Security to enforce a zero-trust network posture in a sensitive namespace where all pod communication is blocked by default until explicitly permitted.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Implementing namespace-wide default-deny ingress and egress rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules." },
      { id: 'B', text: "Disable the CNI network plugin in that namespace." },
      { id: 'C', text: "Change the namespace label to `isolation: maximum`." },
      { id: 'D', text: "Block DNS port 53 traffic across the entire cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules. A NetworkPolicy with `podSelector: {}` selects all pods in the namespace. Specifying `policyTypes: [Ingress, Egress]` without allow rules establishes a default-deny posture, isolating every pod from incoming and outgoing traffic until explicit whitelist policies are added.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Network Security", "Default-Deny", "Security Compliance"]
  },
  {
    id: "k8s-cka-474",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny All Network Policy Pattern: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Network Security to enforce a zero-trust network posture in a sensitive namespace where all pod communication is blocked by default until explicitly permitted.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Implementing namespace-wide default-deny ingress and egress rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules." },
      { id: 'B', text: "Disable the CNI network plugin in that namespace." },
      { id: 'C', text: "Change the namespace label to `isolation: maximum`." },
      { id: 'D', text: "Block DNS port 53 traffic across the entire cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules. A NetworkPolicy with `podSelector: {}` selects all pods in the namespace. Specifying `policyTypes: [Ingress, Egress]` without allow rules establishes a default-deny posture, isolating every pod from incoming and outgoing traffic until explicit whitelist policies are added.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Network Security", "Default-Deny", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-475",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny All Network Policy Pattern: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Network Security to enforce a zero-trust network posture in a sensitive namespace where all pod communication is blocked by default until explicitly permitted.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Implementing namespace-wide default-deny ingress and egress rules is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules." },
      { id: 'B', text: "Disable the CNI network plugin in that namespace." },
      { id: 'C', text: "Change the namespace label to `isolation: maximum`." },
      { id: 'D', text: "Block DNS port 53 traffic across the entire cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with an empty `podSelector: {}` and `policyTypes: [Ingress, Egress]` without defining any ingress or egress allow rules. A NetworkPolicy with `podSelector: {}` selects all pods in the namespace. Specifying `policyTypes: [Ingress, Egress]` without allow rules establishes a default-deny posture, isolating every pod from incoming and outgoing traffic until explicit whitelist policies are added.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic",
    tags: ["Network Security", "Default-Deny", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_20;
