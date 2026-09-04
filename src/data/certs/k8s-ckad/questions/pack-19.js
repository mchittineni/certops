export const K8S_CKAD_QUESTIONS_19 = [
  {
    id: "k8s-ckad-451",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service Configuration and Port Mapping: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Service Networking to route traffic arriving on port 80 of an internal Service to backend application pods listening on container port 8080.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Mapping port and targetPort on internal ClusterIP services is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector." },
      { id: 'B', text: "Set `port: 8080` and `targetPort: 80`." },
      { id: 'C', text: "Create a NodePort service on port 80." },
      { id: 'D', text: "Configure backend pods to listen on port 80 using root privileges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector. In a Kubernetes Service spec, `port` is the port exposed internally by the Service itself (which other pods call), while `targetPort` is the destination port on which the backend container process is actually listening. Mismatches prevent traffic from reaching the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Service Networking", "Service Ports", "Dr Failover"]
  },
  {
    id: "k8s-ckad-452",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service Configuration and Port Mapping: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Service Networking to route traffic arriving on port 80 of an internal Service to backend application pods listening on container port 8080.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Mapping port and targetPort on internal ClusterIP services is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector." },
      { id: 'B', text: "Set `port: 8080` and `targetPort: 80`." },
      { id: 'C', text: "Create a NodePort service on port 80." },
      { id: 'D', text: "Configure backend pods to listen on port 80 using root privileges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector. In a Kubernetes Service spec, `port` is the port exposed internally by the Service itself (which other pods call), while `targetPort` is the destination port on which the backend container process is actually listening. Mismatches prevent traffic from reaching the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Service Networking", "Service Ports", "High Load Scale"]
  },
  {
    id: "k8s-ckad-453",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service Configuration and Port Mapping: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Service Networking to route traffic arriving on port 80 of an internal Service to backend application pods listening on container port 8080.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Mapping port and targetPort on internal ClusterIP services is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector." },
      { id: 'B', text: "Set `port: 8080` and `targetPort: 80`." },
      { id: 'C', text: "Create a NodePort service on port 80." },
      { id: 'D', text: "Configure backend pods to listen on port 80 using root privileges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector. In a Kubernetes Service spec, `port` is the port exposed internally by the Service itself (which other pods call), while `targetPort` is the destination port on which the backend container process is actually listening. Mismatches prevent traffic from reaching the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Service Networking", "Service Ports", "Security Compliance"]
  },
  {
    id: "k8s-ckad-454",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service Configuration and Port Mapping: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Service Networking to route traffic arriving on port 80 of an internal Service to backend application pods listening on container port 8080.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Mapping port and targetPort on internal ClusterIP services is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector." },
      { id: 'B', text: "Set `port: 8080` and `targetPort: 80`." },
      { id: 'C', text: "Create a NodePort service on port 80." },
      { id: 'D', text: "Configure backend pods to listen on port 80 using root privileges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector. In a Kubernetes Service spec, `port` is the port exposed internally by the Service itself (which other pods call), while `targetPort` is the destination port on which the backend container process is actually listening. Mismatches prevent traffic from reaching the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Service Networking", "Service Ports", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-455",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "ClusterIP Service Configuration and Port Mapping: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Service Networking to route traffic arriving on port 80 of an internal Service to backend application pods listening on container port 8080.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Mapping port and targetPort on internal ClusterIP services is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector." },
      { id: 'B', text: "Set `port: 8080` and `targetPort: 80`." },
      { id: 'C', text: "Create a NodePort service on port 80." },
      { id: 'D', text: "Configure backend pods to listen on port 80 using root privileges." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: ClusterIP`, `port: 80`, and `targetPort: 8080` matching the pod selector. In a Kubernetes Service spec, `port` is the port exposed internally by the Service itself (which other pods call), while `targetPort` is the destination port on which the backend container process is actually listening. Mismatches prevent traffic from reaching the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service",
    tags: ["Service Networking", "Service Ports", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-456",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service for Direct Host Access: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates NodePort Services to expose an internal testing service directly on a static high port across all worker node IP addresses for on-premises developers.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Exposing services on static node ports in the 30000-32767 range is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767." },
      { id: 'B', text: "Create a ClusterIP service and modify the worker node firewall." },
      { id: 'C', text: "Set `hostNetwork: true` on the pod template." },
      { id: 'D', text: "Configure an Ingress controller without a supporting service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767. A `NodePort` service allocates a static port (default range 30000-32767) on every node in the cluster. Incoming traffic to `&lt;NodeIP&gt;:&lt;NodePort&gt;` is automatically routed by kube-proxy to the backing Service endpoints, regardless of which node receives the packet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort Services", "NodePort", "Dr Failover"]
  },
  {
    id: "k8s-ckad-457",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service for Direct Host Access: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates NodePort Services to expose an internal testing service directly on a static high port across all worker node IP addresses for on-premises developers.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Exposing services on static node ports in the 30000-32767 range is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767." },
      { id: 'B', text: "Create a ClusterIP service and modify the worker node firewall." },
      { id: 'C', text: "Set `hostNetwork: true` on the pod template." },
      { id: 'D', text: "Configure an Ingress controller without a supporting service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767. A `NodePort` service allocates a static port (default range 30000-32767) on every node in the cluster. Incoming traffic to `&lt;NodeIP&gt;:&lt;NodePort&gt;` is automatically routed by kube-proxy to the backing Service endpoints, regardless of which node receives the packet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort Services", "NodePort", "High Load Scale"]
  },
  {
    id: "k8s-ckad-458",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service for Direct Host Access: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates NodePort Services to expose an internal testing service directly on a static high port across all worker node IP addresses for on-premises developers.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Exposing services on static node ports in the 30000-32767 range is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767." },
      { id: 'B', text: "Create a ClusterIP service and modify the worker node firewall." },
      { id: 'C', text: "Set `hostNetwork: true` on the pod template." },
      { id: 'D', text: "Configure an Ingress controller without a supporting service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767. A `NodePort` service allocates a static port (default range 30000-32767) on every node in the cluster. Incoming traffic to `&lt;NodeIP&gt;:&lt;NodePort&gt;` is automatically routed by kube-proxy to the backing Service endpoints, regardless of which node receives the packet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort Services", "NodePort", "Security Compliance"]
  },
  {
    id: "k8s-ckad-459",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service for Direct Host Access: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates NodePort Services to expose an internal testing service directly on a static high port across all worker node IP addresses for on-premises developers.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Exposing services on static node ports in the 30000-32767 range is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767." },
      { id: 'B', text: "Create a ClusterIP service and modify the worker node firewall." },
      { id: 'C', text: "Set `hostNetwork: true` on the pod template." },
      { id: 'D', text: "Configure an Ingress controller without a supporting service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767. A `NodePort` service allocates a static port (default range 30000-32767) on every node in the cluster. Incoming traffic to `&lt;NodeIP&gt;:&lt;NodePort&gt;` is automatically routed by kube-proxy to the backing Service endpoints, regardless of which node receives the packet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort Services", "NodePort", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-460",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NodePort Service for Direct Host Access: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates NodePort Services to expose an internal testing service directly on a static high port across all worker node IP addresses for on-premises developers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Exposing services on static node ports in the 30000-32767 range is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767." },
      { id: 'B', text: "Create a ClusterIP service and modify the worker node firewall." },
      { id: 'C', text: "Set `hostNetwork: true` on the pod template." },
      { id: 'D', text: "Configure an Ingress controller without a supporting service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: NodePort` and optionally specify a `nodePort` in the range 30000-32767. A `NodePort` service allocates a static port (default range 30000-32767) on every node in the cluster. Incoming traffic to `&lt;NodeIP&gt;:&lt;NodePort&gt;` is automatically routed by kube-proxy to the backing Service endpoints, regardless of which node receives the packet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport",
    tags: ["NodePort Services", "NodePort", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-461",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service with Cloud Provider Integration: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates LoadBalancer Services to expose a public-facing e-commerce storefront directly to the internet with a dedicated external public IP address provisioned by the cloud provider.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Provisioning external cloud load balancers with type: LoadBalancer is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: LoadBalancer` matching the storefront pod labels." },
      { id: 'B', text: "Create a ClusterIP service and share internal cluster IPs with public users." },
      { id: 'C', text: "Assign public elastic IPs directly to individual ephemeral pod network interfaces." },
      { id: 'D', text: "Configure a Headless service with clusterIP: None." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: LoadBalancer` matching the storefront pod labels. On cloud providers supporting load balancer integration, creating a Service of `type: LoadBalancer` automatically provisions an external cloud load balancer (e.g., AWS NLB, GCP Cloud Load Balancing) that routes external traffic directly into cluster worker nodes and backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Dr Failover"]
  },
  {
    id: "k8s-ckad-462",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service with Cloud Provider Integration: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates LoadBalancer Services to expose a public-facing e-commerce storefront directly to the internet with a dedicated external public IP address provisioned by the cloud provider.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Provisioning external cloud load balancers with type: LoadBalancer is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: LoadBalancer` matching the storefront pod labels." },
      { id: 'B', text: "Create a ClusterIP service and share internal cluster IPs with public users." },
      { id: 'C', text: "Assign public elastic IPs directly to individual ephemeral pod network interfaces." },
      { id: 'D', text: "Configure a Headless service with clusterIP: None." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: LoadBalancer` matching the storefront pod labels. On cloud providers supporting load balancer integration, creating a Service of `type: LoadBalancer` automatically provisions an external cloud load balancer (e.g., AWS NLB, GCP Cloud Load Balancing) that routes external traffic directly into cluster worker nodes and backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "High Load Scale"]
  },
  {
    id: "k8s-ckad-463",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service with Cloud Provider Integration: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates LoadBalancer Services to expose a public-facing e-commerce storefront directly to the internet with a dedicated external public IP address provisioned by the cloud provider.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Provisioning external cloud load balancers with type: LoadBalancer is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: LoadBalancer` matching the storefront pod labels." },
      { id: 'B', text: "Create a ClusterIP service and share internal cluster IPs with public users." },
      { id: 'C', text: "Assign public elastic IPs directly to individual ephemeral pod network interfaces." },
      { id: 'D', text: "Configure a Headless service with clusterIP: None." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: LoadBalancer` matching the storefront pod labels. On cloud providers supporting load balancer integration, creating a Service of `type: LoadBalancer` automatically provisions an external cloud load balancer (e.g., AWS NLB, GCP Cloud Load Balancing) that routes external traffic directly into cluster worker nodes and backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Security Compliance"]
  },
  {
    id: "k8s-ckad-464",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service with Cloud Provider Integration: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates LoadBalancer Services to expose a public-facing e-commerce storefront directly to the internet with a dedicated external public IP address provisioned by the cloud provider.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Provisioning external cloud load balancers with type: LoadBalancer is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: LoadBalancer` matching the storefront pod labels." },
      { id: 'B', text: "Create a ClusterIP service and share internal cluster IPs with public users." },
      { id: 'C', text: "Assign public elastic IPs directly to individual ephemeral pod network interfaces." },
      { id: 'D', text: "Configure a Headless service with clusterIP: None." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: LoadBalancer` matching the storefront pod labels. On cloud providers supporting load balancer integration, creating a Service of `type: LoadBalancer` automatically provisions an external cloud load balancer (e.g., AWS NLB, GCP Cloud Load Balancing) that routes external traffic directly into cluster worker nodes and backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-465",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "LoadBalancer Service with Cloud Provider Integration: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates LoadBalancer Services to expose a public-facing e-commerce storefront directly to the internet with a dedicated external public IP address provisioned by the cloud provider.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Provisioning external cloud load balancers with type: LoadBalancer is under consideration.",
    options: [
      { id: 'A', text: "Create a Service with `type: LoadBalancer` matching the storefront pod labels." },
      { id: 'B', text: "Create a ClusterIP service and share internal cluster IPs with public users." },
      { id: 'C', text: "Assign public elastic IPs directly to individual ephemeral pod network interfaces." },
      { id: 'D', text: "Configure a Headless service with clusterIP: None." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Service with `type: LoadBalancer` matching the storefront pod labels. On cloud providers supporting load balancer integration, creating a Service of `type: LoadBalancer` automatically provisions an external cloud load balancer (e.g., AWS NLB, GCP Cloud Load Balancing) that routes external traffic directly into cluster worker nodes and backend pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",
    tags: ["LoadBalancer Services", "LoadBalancer Services", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-466",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Ingress Filtering by Pod Labels: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Network Policies to prevent all pods in a namespace from connecting to an internal database pod except those explicitly labeled `role=api`.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Restricting incoming pod traffic using podSelector matching labels is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`." },
      { id: 'B', text: "Configure a Linux iptables script inside the database container image." },
      { id: 'C', text: "Change the database service to type NodePort." },
      { id: 'D', text: "Apply a pod anti-affinity rule to separate pods across nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`. NetworkPolicy ingress rules restrict traffic entering matching pods. Using `podSelector` within an `ingress.from` block whitelists traffic originating only from pods carrying the specified labels within the same namespace, blocking all other connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["Network Policies", "Ingress Filtering", "Dr Failover"]
  },
  {
    id: "k8s-ckad-467",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Ingress Filtering by Pod Labels: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Network Policies to prevent all pods in a namespace from connecting to an internal database pod except those explicitly labeled `role=api`.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Restricting incoming pod traffic using podSelector matching labels is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`." },
      { id: 'B', text: "Configure a Linux iptables script inside the database container image." },
      { id: 'C', text: "Change the database service to type NodePort." },
      { id: 'D', text: "Apply a pod anti-affinity rule to separate pods across nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`. NetworkPolicy ingress rules restrict traffic entering matching pods. Using `podSelector` within an `ingress.from` block whitelists traffic originating only from pods carrying the specified labels within the same namespace, blocking all other connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["Network Policies", "Ingress Filtering", "High Load Scale"]
  },
  {
    id: "k8s-ckad-468",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Ingress Filtering by Pod Labels: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Network Policies to prevent all pods in a namespace from connecting to an internal database pod except those explicitly labeled `role=api`.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Restricting incoming pod traffic using podSelector matching labels is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`." },
      { id: 'B', text: "Configure a Linux iptables script inside the database container image." },
      { id: 'C', text: "Change the database service to type NodePort." },
      { id: 'D', text: "Apply a pod anti-affinity rule to separate pods across nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`. NetworkPolicy ingress rules restrict traffic entering matching pods. Using `podSelector` within an `ingress.from` block whitelists traffic originating only from pods carrying the specified labels within the same namespace, blocking all other connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["Network Policies", "Ingress Filtering", "Security Compliance"]
  },
  {
    id: "k8s-ckad-469",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Ingress Filtering by Pod Labels: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Network Policies to prevent all pods in a namespace from connecting to an internal database pod except those explicitly labeled `role=api`.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Restricting incoming pod traffic using podSelector matching labels is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`." },
      { id: 'B', text: "Configure a Linux iptables script inside the database container image." },
      { id: 'C', text: "Change the database service to type NodePort." },
      { id: 'D', text: "Apply a pod anti-affinity rule to separate pods across nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`. NetworkPolicy ingress rules restrict traffic entering matching pods. Using `podSelector` within an `ingress.from` block whitelists traffic originating only from pods carrying the specified labels within the same namespace, blocking all other connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["Network Policies", "Ingress Filtering", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-470",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Ingress Filtering by Pod Labels: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Network Policies to prevent all pods in a namespace from connecting to an internal database pod except those explicitly labeled `role=api`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Restricting incoming pod traffic using podSelector matching labels is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`." },
      { id: 'B', text: "Configure a Linux iptables script inside the database container image." },
      { id: 'C', text: "Change the database service to type NodePort." },
      { id: 'D', text: "Apply a pod anti-affinity rule to separate pods across nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` targeting the database pods with an `ingress.from` rule specifying `podSelector: matchLabels: role: api`. NetworkPolicy ingress rules restrict traffic entering matching pods. Using `podSelector` within an `ingress.from` block whitelists traffic originating only from pods carrying the specified labels within the same namespace, blocking all other connections.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["Network Policies", "Ingress Filtering", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-471",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Cross-Namespace Ingress Filtering: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Namespace Isolation to allow an analytics service running in the `analytics` namespace to query a database running in the `production` namespace while blocking all other namespaces.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Permitting ingress from specific external namespaces using namespaceSelector is under consideration.",
    options: [
      { id: 'A', text: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`." },
      { id: 'B', text: "Disable NetworkPolicies entirely across the cluster." },
      { id: 'C', text: "Create a duplicate database inside the analytics namespace." },
      { id: 'D', text: "Allow ingress from `0.0.0.0/0` across all ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`. To permit cross-namespace traffic in NetworkPolicies, the `from` rule must include a `namespaceSelector`. Matching the label of the source namespace (such as the automatic `kubernetes.io/metadata.name` label) whitelists pods originating from that specific namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Namespace Isolation", "Namespace Ingress", "Dr Failover"]
  },
  {
    id: "k8s-ckad-472",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Cross-Namespace Ingress Filtering: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Namespace Isolation to allow an analytics service running in the `analytics` namespace to query a database running in the `production` namespace while blocking all other namespaces.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Permitting ingress from specific external namespaces using namespaceSelector is under consideration.",
    options: [
      { id: 'A', text: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`." },
      { id: 'B', text: "Disable NetworkPolicies entirely across the cluster." },
      { id: 'C', text: "Create a duplicate database inside the analytics namespace." },
      { id: 'D', text: "Allow ingress from `0.0.0.0/0` across all ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`. To permit cross-namespace traffic in NetworkPolicies, the `from` rule must include a `namespaceSelector`. Matching the label of the source namespace (such as the automatic `kubernetes.io/metadata.name` label) whitelists pods originating from that specific namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Namespace Isolation", "Namespace Ingress", "High Load Scale"]
  },
  {
    id: "k8s-ckad-473",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Cross-Namespace Ingress Filtering: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Namespace Isolation to allow an analytics service running in the `analytics` namespace to query a database running in the `production` namespace while blocking all other namespaces.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Permitting ingress from specific external namespaces using namespaceSelector is under consideration.",
    options: [
      { id: 'A', text: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`." },
      { id: 'B', text: "Disable NetworkPolicies entirely across the cluster." },
      { id: 'C', text: "Create a duplicate database inside the analytics namespace." },
      { id: 'D', text: "Allow ingress from `0.0.0.0/0` across all ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`. To permit cross-namespace traffic in NetworkPolicies, the `from` rule must include a `namespaceSelector`. Matching the label of the source namespace (such as the automatic `kubernetes.io/metadata.name` label) whitelists pods originating from that specific namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Namespace Isolation", "Namespace Ingress", "Security Compliance"]
  },
  {
    id: "k8s-ckad-474",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Cross-Namespace Ingress Filtering: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Namespace Isolation to allow an analytics service running in the `analytics` namespace to query a database running in the `production` namespace while blocking all other namespaces.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Permitting ingress from specific external namespaces using namespaceSelector is under consideration.",
    options: [
      { id: 'A', text: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`." },
      { id: 'B', text: "Disable NetworkPolicies entirely across the cluster." },
      { id: 'C', text: "Create a duplicate database inside the analytics namespace." },
      { id: 'D', text: "Allow ingress from `0.0.0.0/0` across all ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`. To permit cross-namespace traffic in NetworkPolicies, the `from` rule must include a `namespaceSelector`. Matching the label of the source namespace (such as the automatic `kubernetes.io/metadata.name` label) whitelists pods originating from that specific namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Namespace Isolation", "Namespace Ingress", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-475",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Cross-Namespace Ingress Filtering: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Namespace Isolation to allow an analytics service running in the `analytics` namespace to query a database running in the `production` namespace while blocking all other namespaces.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Permitting ingress from specific external namespaces using namespaceSelector is under consideration.",
    options: [
      { id: 'A', text: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`." },
      { id: 'B', text: "Disable NetworkPolicies entirely across the cluster." },
      { id: 'C', text: "Create a duplicate database inside the analytics namespace." },
      { id: 'D', text: "Allow ingress from `0.0.0.0/0` across all ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `production` namespace, create a `NetworkPolicy` on the database with `ingress.from` specifying `namespaceSelector: matchLabels: kubernetes.io/metadata.name: analytics`. To permit cross-namespace traffic in NetworkPolicies, the `from` rule must include a `namespaceSelector`. Matching the label of the source namespace (such as the automatic `kubernetes.io/metadata.name` label) whitelists pods originating from that specific namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["Namespace Isolation", "Namespace Ingress", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_19;
