export const K8S_CKS_QUESTIONS_15 = [
  {
    id: "k8s-cks-351",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disallowing allowPrivilegeEscalation: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Privilege Escalation to prevent child processes inside a container from gaining more privileges than their parent process via setuid or setgid binaries.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring allowPrivilegeEscalation: false to block setuid binaries is under consideration.",
    options: [
      { id: 'A', text: "Set `allowPrivilegeEscalation: false` in the container `securityContext`." },
      { id: 'B', text: "Set `allowPrivilegeEscalation: true`." },
      { id: 'C', text: "Run the container as root to bypass escalation checks." },
      { id: 'D', text: "Grant full sudo capabilities to the container process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `allowPrivilegeEscalation: false` in the container `securityContext`. The `allowPrivilegeEscalation` control governs whether a process can gain more privileges than its parent. Setting it to `false` sets the `no_new_privs` flag on the container process in the Linux kernel, rendering setuid binaries (like `sudo` or `suid` binaries) ineffective.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Dr Failover"]
  },
  {
    id: "k8s-cks-352",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disallowing allowPrivilegeEscalation: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Privilege Escalation to prevent child processes inside a container from gaining more privileges than their parent process via setuid or setgid binaries.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring allowPrivilegeEscalation: false to block setuid binaries is under consideration.",
    options: [
      { id: 'A', text: "Set `allowPrivilegeEscalation: false` in the container `securityContext`." },
      { id: 'B', text: "Set `allowPrivilegeEscalation: true`." },
      { id: 'C', text: "Run the container as root to bypass escalation checks." },
      { id: 'D', text: "Grant full sudo capabilities to the container process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `allowPrivilegeEscalation: false` in the container `securityContext`. The `allowPrivilegeEscalation` control governs whether a process can gain more privileges than its parent. Setting it to `false` sets the `no_new_privs` flag on the container process in the Linux kernel, rendering setuid binaries (like `sudo` or `suid` binaries) ineffective.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "High Load Scale"]
  },
  {
    id: "k8s-cks-353",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disallowing allowPrivilegeEscalation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Privilege Escalation to prevent child processes inside a container from gaining more privileges than their parent process via setuid or setgid binaries.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring allowPrivilegeEscalation: false to block setuid binaries is under consideration.",
    options: [
      { id: 'A', text: "Set `allowPrivilegeEscalation: false` in the container `securityContext`." },
      { id: 'B', text: "Set `allowPrivilegeEscalation: true`." },
      { id: 'C', text: "Run the container as root to bypass escalation checks." },
      { id: 'D', text: "Grant full sudo capabilities to the container process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `allowPrivilegeEscalation: false` in the container `securityContext`. The `allowPrivilegeEscalation` control governs whether a process can gain more privileges than its parent. Setting it to `false` sets the `no_new_privs` flag on the container process in the Linux kernel, rendering setuid binaries (like `sudo` or `suid` binaries) ineffective.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Security Compliance"]
  },
  {
    id: "k8s-cks-354",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disallowing allowPrivilegeEscalation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Privilege Escalation to prevent child processes inside a container from gaining more privileges than their parent process via setuid or setgid binaries.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring allowPrivilegeEscalation: false to block setuid binaries is under consideration.",
    options: [
      { id: 'A', text: "Set `allowPrivilegeEscalation: false` in the container `securityContext`." },
      { id: 'B', text: "Set `allowPrivilegeEscalation: true`." },
      { id: 'C', text: "Run the container as root to bypass escalation checks." },
      { id: 'D', text: "Grant full sudo capabilities to the container process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `allowPrivilegeEscalation: false` in the container `securityContext`. The `allowPrivilegeEscalation` control governs whether a process can gain more privileges than its parent. Setting it to `false` sets the `no_new_privs` flag on the container process in the Linux kernel, rendering setuid binaries (like `sudo` or `suid` binaries) ineffective.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-355",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disallowing allowPrivilegeEscalation: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Privilege Escalation to prevent child processes inside a container from gaining more privileges than their parent process via setuid or setgid binaries.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring allowPrivilegeEscalation: false to block setuid binaries is under consideration.",
    options: [
      { id: 'A', text: "Set `allowPrivilegeEscalation: false` in the container `securityContext`." },
      { id: 'B', text: "Set `allowPrivilegeEscalation: true`." },
      { id: 'C', text: "Run the container as root to bypass escalation checks." },
      { id: 'D', text: "Grant full sudo capabilities to the container process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `allowPrivilegeEscalation: false` in the container `securityContext`. The `allowPrivilegeEscalation` control governs whether a process can gain more privileges than its parent. Setting it to `false` sets the `no_new_privs` flag on the container process in the Linux kernel, rendering setuid binaries (like `sudo` or `suid` binaries) ineffective.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Resilience Failure"]
  },
  {
    id: "k8s-cks-356",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disabling Default ServiceAccount Token Automount: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Token Protection to protect microservices that do not communicate with the Kubernetes API from having their ServiceAccount credentials stolen by an attacker.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Setting automountServiceAccountToken: false on ServiceAccounts and pods is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount." },
      { id: 'B', text: "Allow all pods to mount the default ServiceAccount token automatically." },
      { id: 'C', text: "Grant cluster-admin permissions to the default ServiceAccount in all namespaces." },
      { id: 'D', text: "Hardcode the token into a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount. By default, the kubelet automatically mounts the namespace's default ServiceAccount token into `/var/run/secrets/kubernetes.io/serviceaccount/token`. Setting `automountServiceAccountToken: false` eliminates the credential from the container filesystem entirely, mitigating lateral movement attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Token Protection", "Token Automount", "Dr Failover"]
  },
  {
    id: "k8s-cks-357",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disabling Default ServiceAccount Token Automount: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Token Protection to protect microservices that do not communicate with the Kubernetes API from having their ServiceAccount credentials stolen by an attacker.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Setting automountServiceAccountToken: false on ServiceAccounts and pods is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount." },
      { id: 'B', text: "Allow all pods to mount the default ServiceAccount token automatically." },
      { id: 'C', text: "Grant cluster-admin permissions to the default ServiceAccount in all namespaces." },
      { id: 'D', text: "Hardcode the token into a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount. By default, the kubelet automatically mounts the namespace's default ServiceAccount token into `/var/run/secrets/kubernetes.io/serviceaccount/token`. Setting `automountServiceAccountToken: false` eliminates the credential from the container filesystem entirely, mitigating lateral movement attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Token Protection", "Token Automount", "High Load Scale"]
  },
  {
    id: "k8s-cks-358",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disabling Default ServiceAccount Token Automount: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Token Protection to protect microservices that do not communicate with the Kubernetes API from having their ServiceAccount credentials stolen by an attacker.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Setting automountServiceAccountToken: false on ServiceAccounts and pods is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount." },
      { id: 'B', text: "Allow all pods to mount the default ServiceAccount token automatically." },
      { id: 'C', text: "Grant cluster-admin permissions to the default ServiceAccount in all namespaces." },
      { id: 'D', text: "Hardcode the token into a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount. By default, the kubelet automatically mounts the namespace's default ServiceAccount token into `/var/run/secrets/kubernetes.io/serviceaccount/token`. Setting `automountServiceAccountToken: false` eliminates the credential from the container filesystem entirely, mitigating lateral movement attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Token Protection", "Token Automount", "Security Compliance"]
  },
  {
    id: "k8s-cks-359",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disabling Default ServiceAccount Token Automount: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Token Protection to protect microservices that do not communicate with the Kubernetes API from having their ServiceAccount credentials stolen by an attacker.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Setting automountServiceAccountToken: false on ServiceAccounts and pods is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount." },
      { id: 'B', text: "Allow all pods to mount the default ServiceAccount token automatically." },
      { id: 'C', text: "Grant cluster-admin permissions to the default ServiceAccount in all namespaces." },
      { id: 'D', text: "Hardcode the token into a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount. By default, the kubelet automatically mounts the namespace's default ServiceAccount token into `/var/run/secrets/kubernetes.io/serviceaccount/token`. Setting `automountServiceAccountToken: false` eliminates the credential from the container filesystem entirely, mitigating lateral movement attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Token Protection", "Token Automount", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-360",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Disabling Default ServiceAccount Token Automount: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Token Protection to protect microservices that do not communicate with the Kubernetes API from having their ServiceAccount credentials stolen by an attacker.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Setting automountServiceAccountToken: false on ServiceAccounts and pods is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount." },
      { id: 'B', text: "Allow all pods to mount the default ServiceAccount token automatically." },
      { id: 'C', text: "Grant cluster-admin permissions to the default ServiceAccount in all namespaces." },
      { id: 'D', text: "Hardcode the token into a public GitHub repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod spec or the associated ServiceAccount. By default, the kubelet automatically mounts the namespace's default ServiceAccount token into `/var/run/secrets/kubernetes.io/serviceaccount/token`. Setting `automountServiceAccountToken: false` eliminates the credential from the container filesystem entirely, mitigating lateral movement attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["Token Protection", "Token Automount", "Resilience Failure"]
  },
  {
    id: "k8s-cks-361",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "mTLS Service Mesh Communication: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Service Mesh mTLS to ensure all inter-service network communications across microservices are encrypted and mutually authenticated without modifying application code.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Mutual TLS authentication and encryption with Istio or Linkerd is under consideration.",
    options: [
      { id: 'A', text: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces." },
      { id: 'B', text: "Transmit all traffic in plaintext HTTP over the internal cluster network." },
      { id: 'C', text: "Implement custom SSL certificate management manually inside every microservice binary." },
      { id: 'D', text: "Disable network policies and rely on perimeter corporate firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces. A service mesh deploys sidecar proxies (like Envoy) alongside application containers. These proxies automatically encrypt and authenticate all pod-to-pod network traffic using mutual TLS (mTLS) with short-lived cryptographic identities, providing zero-trust security without application changes.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Dr Failover"]
  },
  {
    id: "k8s-cks-362",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "mTLS Service Mesh Communication: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Service Mesh mTLS to ensure all inter-service network communications across microservices are encrypted and mutually authenticated without modifying application code.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Mutual TLS authentication and encryption with Istio or Linkerd is under consideration.",
    options: [
      { id: 'A', text: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces." },
      { id: 'B', text: "Transmit all traffic in plaintext HTTP over the internal cluster network." },
      { id: 'C', text: "Implement custom SSL certificate management manually inside every microservice binary." },
      { id: 'D', text: "Disable network policies and rely on perimeter corporate firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces. A service mesh deploys sidecar proxies (like Envoy) alongside application containers. These proxies automatically encrypt and authenticate all pod-to-pod network traffic using mutual TLS (mTLS) with short-lived cryptographic identities, providing zero-trust security without application changes.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "High Load Scale"]
  },
  {
    id: "k8s-cks-363",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "mTLS Service Mesh Communication: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Service Mesh mTLS to ensure all inter-service network communications across microservices are encrypted and mutually authenticated without modifying application code.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Mutual TLS authentication and encryption with Istio or Linkerd is under consideration.",
    options: [
      { id: 'A', text: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces." },
      { id: 'B', text: "Transmit all traffic in plaintext HTTP over the internal cluster network." },
      { id: 'C', text: "Implement custom SSL certificate management manually inside every microservice binary." },
      { id: 'D', text: "Disable network policies and rely on perimeter corporate firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces. A service mesh deploys sidecar proxies (like Envoy) alongside application containers. These proxies automatically encrypt and authenticate all pod-to-pod network traffic using mutual TLS (mTLS) with short-lived cryptographic identities, providing zero-trust security without application changes.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Security Compliance"]
  },
  {
    id: "k8s-cks-364",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "mTLS Service Mesh Communication: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Service Mesh mTLS to ensure all inter-service network communications across microservices are encrypted and mutually authenticated without modifying application code.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Mutual TLS authentication and encryption with Istio or Linkerd is under consideration.",
    options: [
      { id: 'A', text: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces." },
      { id: 'B', text: "Transmit all traffic in plaintext HTTP over the internal cluster network." },
      { id: 'C', text: "Implement custom SSL certificate management manually inside every microservice binary." },
      { id: 'D', text: "Disable network policies and rely on perimeter corporate firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces. A service mesh deploys sidecar proxies (like Envoy) alongside application containers. These proxies automatically encrypt and authenticate all pod-to-pod network traffic using mutual TLS (mTLS) with short-lived cryptographic identities, providing zero-trust security without application changes.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-365",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "mTLS Service Mesh Communication: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Service Mesh mTLS to ensure all inter-service network communications across microservices are encrypted and mutually authenticated without modifying application code.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Mutual TLS authentication and encryption with Istio or Linkerd is under consideration.",
    options: [
      { id: 'A', text: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces." },
      { id: 'B', text: "Transmit all traffic in plaintext HTTP over the internal cluster network." },
      { id: 'C', text: "Implement custom SSL certificate management manually inside every microservice binary." },
      { id: 'D', text: "Disable network policies and rely on perimeter corporate firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a service mesh (such as Istio or Linkerd) and configure strict mutual TLS (`STRICT` mTLS) policies across all namespaces. A service mesh deploys sidecar proxies (like Envoy) alongside application containers. These proxies automatically encrypt and authenticate all pod-to-pod network traffic using mutual TLS (mTLS) with short-lived cryptographic identities, providing zero-trust security without application changes.",
    referenceUrl: "https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Resilience Failure"]
  },
  {
    id: "k8s-cks-366",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Ingress with TLS and ModSecurity/WAF: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Ingress Security to protect internet-facing microservices against SQL injection, cross-site scripting (XSS), and Layer 7 DDoS attacks.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Securing Ingress with HTTPS termination, rate limiting, and Web Application Firewalls is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin." },
      { id: 'B', text: "Expose backend microservices directly on unencrypted NodePort services." },
      { id: 'C', text: "Disable HTTPS to eliminate encryption overhead." },
      { id: 'D', text: "Rely solely on application developers writing custom sanitization code for every endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin. Ingress controllers serve as the perimeter gateway into the cluster. Integrating WAF rules (such as ModSecurity or cloud-native WAFs), enforcing HTTPS with modern TLS cipher suites, and applying connection rate limiting protects downstream microservices from common Layer 7 attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress Security", "Ingress WAF", "Dr Failover"]
  },
  {
    id: "k8s-cks-367",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Ingress with TLS and ModSecurity/WAF: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Ingress Security to protect internet-facing microservices against SQL injection, cross-site scripting (XSS), and Layer 7 DDoS attacks.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Securing Ingress with HTTPS termination, rate limiting, and Web Application Firewalls is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin." },
      { id: 'B', text: "Expose backend microservices directly on unencrypted NodePort services." },
      { id: 'C', text: "Disable HTTPS to eliminate encryption overhead." },
      { id: 'D', text: "Rely solely on application developers writing custom sanitization code for every endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin. Ingress controllers serve as the perimeter gateway into the cluster. Integrating WAF rules (such as ModSecurity or cloud-native WAFs), enforcing HTTPS with modern TLS cipher suites, and applying connection rate limiting protects downstream microservices from common Layer 7 attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress Security", "Ingress WAF", "High Load Scale"]
  },
  {
    id: "k8s-cks-368",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Ingress with TLS and ModSecurity/WAF: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Ingress Security to protect internet-facing microservices against SQL injection, cross-site scripting (XSS), and Layer 7 DDoS attacks.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Securing Ingress with HTTPS termination, rate limiting, and Web Application Firewalls is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin." },
      { id: 'B', text: "Expose backend microservices directly on unencrypted NodePort services." },
      { id: 'C', text: "Disable HTTPS to eliminate encryption overhead." },
      { id: 'D', text: "Rely solely on application developers writing custom sanitization code for every endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin. Ingress controllers serve as the perimeter gateway into the cluster. Integrating WAF rules (such as ModSecurity or cloud-native WAFs), enforcing HTTPS with modern TLS cipher suites, and applying connection rate limiting protects downstream microservices from common Layer 7 attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress Security", "Ingress WAF", "Security Compliance"]
  },
  {
    id: "k8s-cks-369",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Ingress with TLS and ModSecurity/WAF: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Ingress Security to protect internet-facing microservices against SQL injection, cross-site scripting (XSS), and Layer 7 DDoS attacks.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Securing Ingress with HTTPS termination, rate limiting, and Web Application Firewalls is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin." },
      { id: 'B', text: "Expose backend microservices directly on unencrypted NodePort services." },
      { id: 'C', text: "Disable HTTPS to eliminate encryption overhead." },
      { id: 'D', text: "Rely solely on application developers writing custom sanitization code for every endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin. Ingress controllers serve as the perimeter gateway into the cluster. Integrating WAF rules (such as ModSecurity or cloud-native WAFs), enforcing HTTPS with modern TLS cipher suites, and applying connection rate limiting protects downstream microservices from common Layer 7 attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress Security", "Ingress WAF", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-370",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Ingress with TLS and ModSecurity/WAF: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Ingress Security to protect internet-facing microservices against SQL injection, cross-site scripting (XSS), and Layer 7 DDoS attacks.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Securing Ingress with HTTPS termination, rate limiting, and Web Application Firewalls is under consideration.",
    options: [
      { id: 'A', text: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin." },
      { id: 'B', text: "Expose backend microservices directly on unencrypted NodePort services." },
      { id: 'C', text: "Disable HTTPS to eliminate encryption overhead." },
      { id: 'D', text: "Rely solely on application developers writing custom sanitization code for every endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Ingress controller with TLS termination, rate-limiting annotations, and an integrated Web Application Firewall (WAF) or ModSecurity plugin. Ingress controllers serve as the perimeter gateway into the cluster. Integrating WAF rules (such as ModSecurity or cloud-native WAFs), enforcing HTTPS with modern TLS cipher suites, and applying connection rate limiting protects downstream microservices from common Layer 7 attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls",
    tags: ["Ingress Security", "Ingress WAF", "Resilience Failure"]
  },
  {
    id: "k8s-cks-371",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Vulnerability Mitigation and Patching: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates CVE Remediation to remediate critical vulnerabilities discovered in an operating system library bundled inside a production container image.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Automated base image rebuilds and dependency updates for vulnerability remediation is under consideration.",
    options: [
      { id: 'A', text: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest." },
      { id: 'B', text: "SSH into running production containers and execute apt-get upgrade manually." },
      { id: 'C', text: "Ignore the vulnerability until the next major annual application release." },
      { id: 'D', text: "Change the container image tag to latest without rebuilding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest. Containers must follow immutable infrastructure principles. Patching running containers in-place is an anti-pattern. Remediation requires updating base images or dependencies in source control, running CI automated builds and vulnerability scans, and rolling out the newly built immutable digest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CVE Remediation", "CVE Remediation", "Dr Failover"]
  },
  {
    id: "k8s-cks-372",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Vulnerability Mitigation and Patching: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates CVE Remediation to remediate critical vulnerabilities discovered in an operating system library bundled inside a production container image.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Automated base image rebuilds and dependency updates for vulnerability remediation is under consideration.",
    options: [
      { id: 'A', text: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest." },
      { id: 'B', text: "SSH into running production containers and execute apt-get upgrade manually." },
      { id: 'C', text: "Ignore the vulnerability until the next major annual application release." },
      { id: 'D', text: "Change the container image tag to latest without rebuilding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest. Containers must follow immutable infrastructure principles. Patching running containers in-place is an anti-pattern. Remediation requires updating base images or dependencies in source control, running CI automated builds and vulnerability scans, and rolling out the newly built immutable digest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CVE Remediation", "CVE Remediation", "High Load Scale"]
  },
  {
    id: "k8s-cks-373",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Vulnerability Mitigation and Patching: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates CVE Remediation to remediate critical vulnerabilities discovered in an operating system library bundled inside a production container image.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Automated base image rebuilds and dependency updates for vulnerability remediation is under consideration.",
    options: [
      { id: 'A', text: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest." },
      { id: 'B', text: "SSH into running production containers and execute apt-get upgrade manually." },
      { id: 'C', text: "Ignore the vulnerability until the next major annual application release." },
      { id: 'D', text: "Change the container image tag to latest without rebuilding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest. Containers must follow immutable infrastructure principles. Patching running containers in-place is an anti-pattern. Remediation requires updating base images or dependencies in source control, running CI automated builds and vulnerability scans, and rolling out the newly built immutable digest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CVE Remediation", "CVE Remediation", "Security Compliance"]
  },
  {
    id: "k8s-cks-374",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Vulnerability Mitigation and Patching: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates CVE Remediation to remediate critical vulnerabilities discovered in an operating system library bundled inside a production container image.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Automated base image rebuilds and dependency updates for vulnerability remediation is under consideration.",
    options: [
      { id: 'A', text: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest." },
      { id: 'B', text: "SSH into running production containers and execute apt-get upgrade manually." },
      { id: 'C', text: "Ignore the vulnerability until the next major annual application release." },
      { id: 'D', text: "Change the container image tag to latest without rebuilding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest. Containers must follow immutable infrastructure principles. Patching running containers in-place is an anti-pattern. Remediation requires updating base images or dependencies in source control, running CI automated builds and vulnerability scans, and rolling out the newly built immutable digest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CVE Remediation", "CVE Remediation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-375",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Container Vulnerability Mitigation and Patching: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates CVE Remediation to remediate critical vulnerabilities discovered in an operating system library bundled inside a production container image.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Automated base image rebuilds and dependency updates for vulnerability remediation is under consideration.",
    options: [
      { id: 'A', text: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest." },
      { id: 'B', text: "SSH into running production containers and execute apt-get upgrade manually." },
      { id: 'C', text: "Ignore the vulnerability until the next major annual application release." },
      { id: 'D', text: "Change the container image tag to latest without rebuilding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Dockerfile base image to the patched release, rebuild the image in CI, re-scan with vulnerability tooling, and deploy the new digest. Containers must follow immutable infrastructure principles. Patching running containers in-place is an anti-pattern. Remediation requires updating base images or dependencies in source control, running CI automated builds and vulnerability scans, and rolling out the newly built immutable digest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CVE Remediation", "CVE Remediation", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_15;
