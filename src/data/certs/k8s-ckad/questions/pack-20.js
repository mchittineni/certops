export const K8S_CKAD_QUESTIONS_20 = [
  {
    id: "k8s-ckad-476",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Restricting outbound traffic to external CIDRs and specific ports is under consideration.",
    options: [
      { id: 'A', text: "Block outbound traffic using a custom shell script inside the container." },
      { id: 'B', text: "Delete the default route on the host operating system." },
      { id: 'C', text: "Set `hostNetwork: false` on the pod." },
      { id: 'D', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering", "Egress Filtering", "Dr Failover"]
  },
  {
    id: "k8s-ckad-477",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Restricting outbound traffic to external CIDRs and specific ports is under consideration.",
    options: [
      { id: 'A', text: "Set `hostNetwork: false` on the pod." },
      { id: 'B', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443." },
      { id: 'C', text: "Delete the default route on the host operating system." },
      { id: 'D', text: "Block outbound traffic using a custom shell script inside the container." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering", "Egress Filtering", "High Load Scale"]
  },
  {
    id: "k8s-ckad-478",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Restricting outbound traffic to external CIDRs and specific ports is under consideration.",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443." },
      { id: 'B', text: "Delete the default route on the host operating system." },
      { id: 'C', text: "Block outbound traffic using a custom shell script inside the container." },
      { id: 'D', text: "Set `hostNetwork: false` on the pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering", "Egress Filtering", "Security Compliance"]
  },
  {
    id: "k8s-ckad-479",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Restricting outbound traffic to external CIDRs and specific ports is under consideration.",
    options: [
      { id: 'A', text: "Block outbound traffic using a custom shell script inside the container." },
      { id: 'B', text: "Set `hostNetwork: false` on the pod." },
      { id: 'C', text: "Delete the default route on the host operating system." },
      { id: 'D', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering", "Egress Filtering", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-480",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Restricting outbound traffic to external CIDRs and specific ports is under consideration.",
    options: [
      { id: 'A', text: "Set `hostNetwork: false` on the pod." },
      { id: 'B', text: "Block outbound traffic using a custom shell script inside the container." },
      { id: 'C', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443." },
      { id: 'D', text: "Delete the default route on the host operating system." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering", "Egress Filtering", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-481",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Routing requests based on HTTP Host headers to distinct backend services is under consideration.",
    options: [
      { id: 'A', text: "Hardcode DNS routing inside client browser cookies." },
      { id: 'B', text: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service." },
      { id: 'C', text: "Deploy two separate Ingress Controllers and bind them to different physical network cables." },
      { id: 'D', text: "Configure a NodePort service on port 80 and port 443 simultaneously." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing", "Host Routing", "Dr Failover"]
  },
  {
    id: "k8s-ckad-482",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Routing requests based on HTTP Host headers to distinct backend services is under consideration.",
    options: [
      { id: 'A', text: "Configure a NodePort service on port 80 and port 443 simultaneously." },
      { id: 'B', text: "Hardcode DNS routing inside client browser cookies." },
      { id: 'C', text: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service." },
      { id: 'D', text: "Deploy two separate Ingress Controllers and bind them to different physical network cables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing", "Host Routing", "High Load Scale"]
  },
  {
    id: "k8s-ckad-483",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Routing requests based on HTTP Host headers to distinct backend services is under consideration.",
    options: [
      { id: 'A', text: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service." },
      { id: 'B', text: "Deploy two separate Ingress Controllers and bind them to different physical network cables." },
      { id: 'C', text: "Hardcode DNS routing inside client browser cookies." },
      { id: 'D', text: "Configure a NodePort service on port 80 and port 443 simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing", "Host Routing", "Security Compliance"]
  },
  {
    id: "k8s-ckad-484",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Routing requests based on HTTP Host headers to distinct backend services is under consideration.",
    options: [
      { id: 'A', text: "Deploy two separate Ingress Controllers and bind them to different physical network cables." },
      { id: 'B', text: "Hardcode DNS routing inside client browser cookies." },
      { id: 'C', text: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service." },
      { id: 'D', text: "Configure a NodePort service on port 80 and port 443 simultaneously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing", "Host Routing", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-485",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Routing requests based on HTTP Host headers to distinct backend services is under consideration.",
    options: [
      { id: 'A', text: "Deploy two separate Ingress Controllers and bind them to different physical network cables." },
      { id: 'B', text: "Hardcode DNS routing inside client browser cookies." },
      { id: 'C', text: "Configure a NodePort service on port 80 and port 443 simultaneously." },
      { id: 'D', text: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing", "Host Routing", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-486",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Prefix and Exact path routing rules with pathType in Ingress manifests is under consideration.",
    options: [
      { id: 'A', text: "Instruct clients to include custom backend IP addresses in URL query parameters." },
      { id: 'B', text: "Deploy an external hardware router inside the Kubernetes cluster." },
      { id: 'C', text: "Use `pathType: ImplementationSpecific` with undocumented regex strings." },
      { id: 'D', text: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing", "Path Types", "Dr Failover"]
  },
  {
    id: "k8s-ckad-487",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Prefix and Exact path routing rules with pathType in Ingress manifests is under consideration.",
    options: [
      { id: 'A', text: "Deploy an external hardware router inside the Kubernetes cluster." },
      { id: 'B', text: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services." },
      { id: 'C', text: "Use `pathType: ImplementationSpecific` with undocumented regex strings." },
      { id: 'D', text: "Instruct clients to include custom backend IP addresses in URL query parameters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing", "Path Types", "High Load Scale"]
  },
  {
    id: "k8s-ckad-488",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Prefix and Exact path routing rules with pathType in Ingress manifests is under consideration.",
    options: [
      { id: 'A', text: "Deploy an external hardware router inside the Kubernetes cluster." },
      { id: 'B', text: "Use `pathType: ImplementationSpecific` with undocumented regex strings." },
      { id: 'C', text: "Instruct clients to include custom backend IP addresses in URL query parameters." },
      { id: 'D', text: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing", "Path Types", "Security Compliance"]
  },
  {
    id: "k8s-ckad-489",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Prefix and Exact path routing rules with pathType in Ingress manifests is under consideration.",
    options: [
      { id: 'A', text: "Deploy an external hardware router inside the Kubernetes cluster." },
      { id: 'B', text: "Instruct clients to include custom backend IP addresses in URL query parameters." },
      { id: 'C', text: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services." },
      { id: 'D', text: "Use `pathType: ImplementationSpecific` with undocumented regex strings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing", "Path Types", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-490",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Prefix and Exact path routing rules with pathType in Ingress manifests is under consideration.",
    options: [
      { id: 'A', text: "Instruct clients to include custom backend IP addresses in URL query parameters." },
      { id: 'B', text: "Deploy an external hardware router inside the Kubernetes cluster." },
      { id: 'C', text: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services." },
      { id: 'D', text: "Use `pathType: ImplementationSpecific` with undocumented regex strings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing", "Path Types", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-491",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring TLS secrets in Ingress resources for HTTPS termination is under consideration.",
    options: [
      { id: 'A', text: "Transmit all traffic in cleartext HTTP and disable browser SSL warnings." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest." },
      { id: 'C', text: "Bake the SSL certificate and private key directly into the application container image." },
      { id: 'D', text: "Terminate TLS inside the application container code on port 8443." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination", "TLS Termination", "Dr Failover"]
  },
  {
    id: "k8s-ckad-492",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring TLS secrets in Ingress resources for HTTPS termination is under consideration.",
    options: [
      { id: 'A', text: "Transmit all traffic in cleartext HTTP and disable browser SSL warnings." },
      { id: 'B', text: "Terminate TLS inside the application container code on port 8443." },
      { id: 'C', text: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest." },
      { id: 'D', text: "Bake the SSL certificate and private key directly into the application container image." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination", "TLS Termination", "High Load Scale"]
  },
  {
    id: "k8s-ckad-493",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring TLS secrets in Ingress resources for HTTPS termination is under consideration.",
    options: [
      { id: 'A', text: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest." },
      { id: 'B', text: "Terminate TLS inside the application container code on port 8443." },
      { id: 'C', text: "Bake the SSL certificate and private key directly into the application container image." },
      { id: 'D', text: "Transmit all traffic in cleartext HTTP and disable browser SSL warnings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination", "TLS Termination", "Security Compliance"]
  },
  {
    id: "k8s-ckad-494",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring TLS secrets in Ingress resources for HTTPS termination is under consideration.",
    options: [
      { id: 'A', text: "Transmit all traffic in cleartext HTTP and disable browser SSL warnings." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest." },
      { id: 'C', text: "Bake the SSL certificate and private key directly into the application container image." },
      { id: 'D', text: "Terminate TLS inside the application container code on port 8443." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination", "TLS Termination", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-495",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring TLS secrets in Ingress resources for HTTPS termination is under consideration.",
    options: [
      { id: 'A', text: "Bake the SSL certificate and private key directly into the application container image." },
      { id: 'B', text: "Transmit all traffic in cleartext HTTP and disable browser SSL warnings." },
      { id: 'C', text: "Terminate TLS inside the application container code on port 8443." },
      { id: 'D', text: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination", "TLS Termination", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-496",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Fully Qualified Domain Name (FQDN) syntax for cross-namespace service discovery is under consideration.",
    options: [
      { id: 'A', text: "Address the service using its short name `database`." },
      { id: 'B', text: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`." },
      { id: 'C', text: "Hardcode the database pod ephemeral IP address in the application code." },
      { id: 'D', text: "Query `production.database.pod.local`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS", "Service DNS", "Dr Failover"]
  },
  {
    id: "k8s-ckad-497",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Fully Qualified Domain Name (FQDN) syntax for cross-namespace service discovery is under consideration.",
    options: [
      { id: 'A', text: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`." },
      { id: 'B', text: "Query `production.database.pod.local`." },
      { id: 'C', text: "Hardcode the database pod ephemeral IP address in the application code." },
      { id: 'D', text: "Address the service using its short name `database`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS", "Service DNS", "High Load Scale"]
  },
  {
    id: "k8s-ckad-498",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Fully Qualified Domain Name (FQDN) syntax for cross-namespace service discovery is under consideration.",
    options: [
      { id: 'A', text: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`." },
      { id: 'B', text: "Hardcode the database pod ephemeral IP address in the application code." },
      { id: 'C', text: "Address the service using its short name `database`." },
      { id: 'D', text: "Query `production.database.pod.local`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS", "Service DNS", "Security Compliance"]
  },
  {
    id: "k8s-ckad-499",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Fully Qualified Domain Name (FQDN) syntax for cross-namespace service discovery is under consideration.",
    options: [
      { id: 'A', text: "Query `production.database.pod.local`." },
      { id: 'B', text: "Address the service using its short name `database`." },
      { id: 'C', text: "Hardcode the database pod ephemeral IP address in the application code." },
      { id: 'D', text: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS", "Service DNS", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-500",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Fully Qualified Domain Name (FQDN) syntax for cross-namespace service discovery is under consideration.",
    options: [
      { id: 'A', text: "Query `production.database.pod.local`." },
      { id: 'B', text: "Hardcode the database pod ephemeral IP address in the application code." },
      { id: 'C', text: "Address the service using its short name `database`." },
      { id: 'D', text: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS", "Service DNS", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_20;
