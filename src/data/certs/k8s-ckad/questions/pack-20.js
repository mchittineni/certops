export const K8S_CKAD_QUESTIONS_20 = [
  {
    id: "k8s-ckad-476",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with `policyTypes: [Ingress]` and an `ingress.from` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'B', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'C', text: "Create an egress rule whose `to` uses a `namespaceSelector` for the namespace that fronts the payment gateway." },
      { id: 'D', text: "Set `dnsPolicy: None` with a `dnsConfig` resolver that resolves only the payment gateway's hostname." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering","Egress Filtering","Dr Failover"]
  },
  {
    id: "k8s-ckad-477",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with `policyTypes: [Ingress]` and an `ingress.from` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'B', text: "Create an egress rule whose `to` uses a `namespaceSelector` for the namespace that fronts the payment gateway." },
      { id: 'C', text: "Set `dnsPolicy: None` with a `dnsConfig` resolver that resolves only the payment gateway's hostname." },
      { id: 'D', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` `ipBlock.cidr` rule for the gateway on port 443." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering","Egress Filtering","High Load Scale"]
  },
  {
    id: "k8s-ckad-478",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'B', text: "Create an egress rule whose `to` uses a `namespaceSelector` for the namespace that fronts the payment gateway." },
      { id: 'C', text: "Create a `NetworkPolicy` with `policyTypes: [Ingress]` and an `ingress.from` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'D', text: "Set `dnsPolicy: None` with a `dnsConfig` resolver that resolves only the payment gateway's hostname." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering","Egress Filtering","Security Compliance"]
  },
  {
    id: "k8s-ckad-479",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Create an egress rule whose `to` uses a `namespaceSelector` for the namespace that fronts the payment gateway." },
      { id: 'B', text: "Create a `NetworkPolicy` with `policyTypes: [Ingress]` and an `ingress.from` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'C', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'D', text: "Set `dnsPolicy: None` with a `dnsConfig` resolver that resolves only the payment gateway's hostname." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering","Egress Filtering","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-480",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "NetworkPolicy Egress Filtering and CIDR Restrictions: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Egress Filtering to prevent an application container from making outbound network calls to the public internet except to an external payment gateway IP block on port 443.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` `ipBlock.cidr` rule for the gateway on port 443." },
      { id: 'B', text: "Set `dnsPolicy: None` with a `dnsConfig` resolver that resolves only the payment gateway's hostname." },
      { id: 'C', text: "Create an egress rule whose `to` uses a `namespaceSelector` for the namespace that fronts the payment gateway." },
      { id: 'D', text: "Create a `NetworkPolicy` with `policyTypes: [Ingress]` and an `ingress.from` `ipBlock.cidr` rule for the gateway on port 443." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `NetworkPolicy` with `policyTypes: [Egress]` and an `egress.to` rule specifying `ipBlock.cidr` for the payment gateway on port 443. Egress NetworkPolicies restrict outbound connections originating from pods. Specifying an `ipBlock` allows communication only with designated CIDR ranges and ports, preventing compromised containers from exfiltrating data to arbitrary internet IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress-rule-example",
    tags: ["Egress Filtering","Egress Filtering","Resilience Failure"]
  },
  {
    id: "k8s-ckad-481",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Define one `rule` with both hosts listed and pick the backend by path prefix." },
      { id: 'B', text: "Define two Ingress resources on the same `ingressClassName`, one per hostname." },
      { id: 'C', text: "Define two `rules` in one Ingress, each with its own `host` and backend Service." },
      { id: 'D', text: "Define one `rule` with no `host` and let the controller match the `Host` header." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing","Host Routing","Dr Failover"]
  },
  {
    id: "k8s-ckad-482",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Define one `rule` with both hosts listed and pick the backend by path prefix." },
      { id: 'B', text: "Define two `rules` in one Ingress, each with its own `host` and backend Service." },
      { id: 'C', text: "Define one `rule` with no `host` and let the controller match the `Host` header." },
      { id: 'D', text: "Define two Ingress resources on the same `ingressClassName`, one per hostname." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing","Host Routing","High Load Scale"]
  },
  {
    id: "k8s-ckad-483",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Define two `rules` in one Ingress, each with its own `host` and backend Service." },
      { id: 'B', text: "Define one `rule` with both hosts listed and pick the backend by path prefix." },
      { id: 'C', text: "Define two Ingress resources on the same `ingressClassName`, one per hostname." },
      { id: 'D', text: "Define one `rule` with no `host` and let the controller match the `Host` header." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing","Host Routing","Security Compliance"]
  },
  {
    id: "k8s-ckad-484",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Define two Ingress resources on the same `ingressClassName`, one per hostname." },
      { id: 'B', text: "Define two `rules` in one Ingress, each with its own `host` and backend Service." },
      { id: 'C', text: "Define one `rule` with both hosts listed and pick the backend by path prefix." },
      { id: 'D', text: "Define one `rule` with no `host` and let the controller match the `Host` header." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing","Host Routing","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-485",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Host-Based Routing: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Ingress Routing to route incoming HTTP requests for `api.example.com` to the API Service and requests for `app.example.com` to the Web Service using a single Ingress resource.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Define two Ingress resources on the same `ingressClassName`, one per hostname." },
      { id: 'B', text: "Define one `rule` with no `host` and let the controller match the `Host` header." },
      { id: 'C', text: "Define two `rules` in one Ingress, each with its own `host` and backend Service." },
      { id: 'D', text: "Define one `rule` with both hosts listed and pick the backend by path prefix." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple `rules` in the Ingress resource, each specifying a distinct `host` domain name and target `backend` Service. Host-based (name-based virtual hosting) Ingress routing inspects the HTTP `Host` header of incoming requests. A single Ingress controller can route requests for `api.example.com` and `app.example.com` to completely different backend Services using one shared public IP address.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#name-based-virtual-hosting",
    tags: ["Ingress Routing","Host Routing","Resilience Failure"]
  },
  {
    id: "k8s-ckad-486",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Add both `paths` to one Ingress rule with `pathType: Prefix`, each naming its own backend Service." },
      { id: 'B', text: "Add both `paths` to one Ingress rule with `pathType: Exact`, each naming its own backend Service." },
      { id: 'C', text: "Create one Ingress per Service on the same host, each with its own `spec.ingressClassName`." },
      { id: 'D', text: "Point the Ingress `defaultBackend` at each Service in turn and let the controller match the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing","Path Types","Dr Failover"]
  },
  {
    id: "k8s-ckad-487",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Add both `paths` to one Ingress rule with `pathType: Exact`, each naming its own backend Service." },
      { id: 'B', text: "Create one Ingress per Service on the same host, each with its own `spec.ingressClassName`." },
      { id: 'C', text: "Add both `paths` to one Ingress rule with `pathType: Prefix`, each naming its own backend Service." },
      { id: 'D', text: "Point the Ingress `defaultBackend` at each Service in turn and let the controller match the path." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing","Path Types","High Load Scale"]
  },
  {
    id: "k8s-ckad-488",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Point the Ingress `defaultBackend` at each Service in turn and let the controller match the path." },
      { id: 'B', text: "Add both `paths` to one Ingress rule with `pathType: Exact`, each naming its own backend Service." },
      { id: 'C', text: "Add both `paths` to one Ingress rule with `pathType: Prefix`, each naming its own backend Service." },
      { id: 'D', text: "Create one Ingress per Service on the same host, each with its own `spec.ingressClassName`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing","Path Types","Security Compliance"]
  },
  {
    id: "k8s-ckad-489",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Add both `paths` to one Ingress rule with `pathType: Prefix`, each naming its own backend Service." },
      { id: 'B', text: "Add both `paths` to one Ingress rule with `pathType: Exact`, each naming its own backend Service." },
      { id: 'C', text: "Create one Ingress per Service on the same host, each with its own `spec.ingressClassName`." },
      { id: 'D', text: "Point the Ingress `defaultBackend` at each Service in turn and let the controller match the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing","Path Types","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-490",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress Path-Based Routing with PathTypes: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Path Routing to route requests beginning with `/v1/orders` to the orders Service and requests beginning with `/v1/users` to the users Service.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Add both `paths` to one Ingress rule with `pathType: Exact`, each naming its own backend Service." },
      { id: 'B', text: "Add both `paths` to one Ingress rule with `pathType: Prefix`, each naming its own backend Service." },
      { id: 'C', text: "Point the Ingress `defaultBackend` at each Service in turn and let the controller match the path." },
      { id: 'D', text: "Create one Ingress per Service on the same host, each with its own `spec.ingressClassName`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `paths` under an Ingress rule with `pathType: Prefix`, mapping `/v1/orders` and `/v1/users` to their respective backend services. Path-based Ingress routing matches incoming HTTP request URI paths against defined routing rules. Using `pathType: Prefix` matches path segments hierarchically (e.g., `/v1/orders` matches `/v1/orders/123`), forwarding matched traffic to the designated backend Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types",
    tags: ["Path Routing","Path Types","Resilience Failure"]
  },
  {
    id: "k8s-ckad-491",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Create an `Opaque` Secret with the certificate and mount it into the ingress controller's pod." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret and name it in the backend Service's `spec.ports` entry." },
      { id: 'C', text: "Create a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key`, named in the Ingress `spec.tls`." },
      { id: 'D', text: "Create a ConfigMap holding the certificate and key and name it in the Ingress annotations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination","TLS Termination","Dr Failover"]
  },
  {
    id: "k8s-ckad-492",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Create a ConfigMap holding the certificate and key and name it in the Ingress annotations." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key`, named in the Ingress `spec.tls`." },
      { id: 'C', text: "Create a `kubernetes.io/tls` Secret and name it in the backend Service's `spec.ports` entry." },
      { id: 'D', text: "Create an `Opaque` Secret with the certificate and mount it into the ingress controller's pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination","TLS Termination","High Load Scale"]
  },
  {
    id: "k8s-ckad-493",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Create a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key`, named in the Ingress `spec.tls`." },
      { id: 'B', text: "Create a ConfigMap holding the certificate and key and name it in the Ingress annotations." },
      { id: 'C', text: "Create an `Opaque` Secret with the certificate and mount it into the ingress controller's pod." },
      { id: 'D', text: "Create a `kubernetes.io/tls` Secret and name it in the backend Service's `spec.ports` entry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination","TLS Termination","Security Compliance"]
  },
  {
    id: "k8s-ckad-494",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Create an `Opaque` Secret with the certificate and mount it into the ingress controller's pod." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret and name it in the backend Service's `spec.ports` entry." },
      { id: 'C', text: "Create a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key`, named in the Ingress `spec.tls`." },
      { id: 'D', text: "Create a ConfigMap holding the certificate and key and name it in the Ingress annotations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination","TLS Termination","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-495",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Ingress TLS Termination: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates TLS Termination to enable secure HTTPS termination on an Ingress resource using an SSL certificate and private key stored in Kubernetes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Create a `kubernetes.io/tls` Secret and name it in the backend Service's `spec.ports` entry." },
      { id: 'B', text: "Create a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key`, named in the Ingress `spec.tls`." },
      { id: 'C', text: "Create an `Opaque` Secret with the certificate and mount it into the ingress controller's pod." },
      { id: 'D', text: "Create a ConfigMap holding the certificate and key and name it in the Ingress annotations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `kubernetes.io/tls` Secret containing `tls.crt` and `tls.key`, and reference it in the `spec.tls` block of the Ingress manifest. Ingress controllers support TLS termination by referencing a Secret of type `kubernetes.io/tls`. The controller decrypts incoming HTTPS traffic using the certificates in `spec.tls` before forwarding plain HTTP traffic to backend pods, offloading cryptographic overhead from application containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["TLS Termination","TLS Termination","Resilience Failure"]
  },
  {
    id: "k8s-ckad-496",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Address the service by FQDN: `database.production.svc.cluster.local`." },
      { id: 'B', text: "Address the service by its short name `database` from the pod's DNS search path." },
      { id: 'C', text: "Address the service as `database.production` and let CoreDNS append the rest." },
      { id: 'D', text: "Address the service as `database.production.pod.cluster.local`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS","Service DNS","Dr Failover"]
  },
  {
    id: "k8s-ckad-497",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Address the service by FQDN: `database.production.svc.cluster.local`." },
      { id: 'B', text: "Address the service as `database.production.pod.cluster.local`." },
      { id: 'C', text: "Address the service by its short name `database` from the pod's DNS search path." },
      { id: 'D', text: "Address the service as `database.production` and let CoreDNS append the rest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS","Service DNS","High Load Scale"]
  },
  {
    id: "k8s-ckad-498",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Address the service by FQDN: `database.production.svc.cluster.local`." },
      { id: 'B', text: "Address the service as `database.production` and let CoreDNS append the rest." },
      { id: 'C', text: "Address the service as `database.production.pod.cluster.local`." },
      { id: 'D', text: "Address the service by its short name `database` from the pod's DNS search path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS","Service DNS","Security Compliance"]
  },
  {
    id: "k8s-ckad-499",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Address the service as `database.production.pod.cluster.local`." },
      { id: 'B', text: "Address the service by its short name `database` from the pod's DNS search path." },
      { id: 'C', text: "Address the service by FQDN: `database.production.svc.cluster.local`." },
      { id: 'D', text: "Address the service as `database.production` and let CoreDNS append the rest." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS","Service DNS","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-500",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d5",
    domainName: "Services and Networking",
    title: "Service DNS Resolution and FQDN Structure: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Cluster DNS to enable a pod in the `development` namespace to query an internal service named `database` running in the `production` namespace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Address the service by its short name `database` from the pod's DNS search path." },
      { id: 'B', text: "Address the service by FQDN: `database.production.svc.cluster.local`." },
      { id: 'C', text: "Address the service as `database.production.pod.cluster.local`." },
      { id: 'D', text: "Address the service as `database.production` and let CoreDNS append the rest." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Address the service using its Fully Qualified Domain Name (FQDN): `database.production.svc.cluster.local`. Within Kubernetes, CoreDNS creates standard DNS records for every Service. For cross-namespace resolution, workloads use the FQDN syntax `&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`. Within the same namespace, the short `&lt;service-name&gt;` suffices.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["Cluster DNS","Service DNS","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_20;
