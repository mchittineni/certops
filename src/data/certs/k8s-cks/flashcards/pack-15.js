export const K8S_CKS_FLASHCARDS_15 = [
  {
    id: "k8s-cks-fc-351",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disallowing allowPrivilegeEscalation (Dr Failover)",
    hint: "Blocking setuid binaries using the Linux kernel no_new_privs flag.",
    back: "Setting <strong>allowPrivilegeEscalation: false</strong> enforces the <code>no_new_privs</code> kernel flag, preventing child processes from gaining elevated privileges via setuid binaries.",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-352",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disallowing allowPrivilegeEscalation (High Load Scale)",
    hint: "Blocking setuid binaries using the Linux kernel no_new_privs flag.",
    back: "Setting <strong>allowPrivilegeEscalation: false</strong> enforces the <code>no_new_privs</code> kernel flag, preventing child processes from gaining elevated privileges via setuid binaries.",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-353",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disallowing allowPrivilegeEscalation (Security Compliance)",
    hint: "Blocking setuid binaries using the Linux kernel no_new_privs flag.",
    back: "Setting <strong>allowPrivilegeEscalation: false</strong> enforces the <code>no_new_privs</code> kernel flag, preventing child processes from gaining elevated privileges via setuid binaries.",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-354",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disallowing allowPrivilegeEscalation (Hybrid Migration)",
    hint: "Blocking setuid binaries using the Linux kernel no_new_privs flag.",
    back: "Setting <strong>allowPrivilegeEscalation: false</strong> enforces the <code>no_new_privs</code> kernel flag, preventing child processes from gaining elevated privileges via setuid binaries.",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-355",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disallowing allowPrivilegeEscalation (Resilience Failure)",
    hint: "Blocking setuid binaries using the Linux kernel no_new_privs flag.",
    back: "Setting <strong>allowPrivilegeEscalation: false</strong> enforces the <code>no_new_privs</code> kernel flag, preventing child processes from gaining elevated privileges via setuid binaries.",
    tags: ["Privilege Escalation", "allowPrivilegeEscalation", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-356",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disabling ServiceAccount Token Automounting (Dr Failover)",
    hint: "Preventing token leakage by suppressing automatic credential injection.",
    back: "Configuring <strong>automountServiceAccountToken: false</strong> prevents the kubelet from mounting API tokens into pods that have no need to interact with the Kubernetes API server.",
    tags: ["Token Protection", "Token Automount", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-357",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disabling ServiceAccount Token Automounting (High Load Scale)",
    hint: "Preventing token leakage by suppressing automatic credential injection.",
    back: "Configuring <strong>automountServiceAccountToken: false</strong> prevents the kubelet from mounting API tokens into pods that have no need to interact with the Kubernetes API server.",
    tags: ["Token Protection", "Token Automount", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-358",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disabling ServiceAccount Token Automounting (Security Compliance)",
    hint: "Preventing token leakage by suppressing automatic credential injection.",
    back: "Configuring <strong>automountServiceAccountToken: false</strong> prevents the kubelet from mounting API tokens into pods that have no need to interact with the Kubernetes API server.",
    tags: ["Token Protection", "Token Automount", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-359",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disabling ServiceAccount Token Automounting (Hybrid Migration)",
    hint: "Preventing token leakage by suppressing automatic credential injection.",
    back: "Configuring <strong>automountServiceAccountToken: false</strong> prevents the kubelet from mounting API tokens into pods that have no need to interact with the Kubernetes API server.",
    tags: ["Token Protection", "Token Automount", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-360",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Disabling ServiceAccount Token Automounting (Resilience Failure)",
    hint: "Preventing token leakage by suppressing automatic credential injection.",
    back: "Configuring <strong>automountServiceAccountToken: false</strong> prevents the kubelet from mounting API tokens into pods that have no need to interact with the Kubernetes API server.",
    tags: ["Token Protection", "Token Automount", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-361",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Mutual TLS in Service Meshes (Dr Failover)",
    hint: "Zero-trust automated encryption and authentication for inter-pod traffic.",
    back: "Enforcing <strong>strict mTLS</strong> via a service mesh (like Istio or Linkerd) encrypts and mutually authenticates all pod-to-pod communication without requiring application code changes.",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-362",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Mutual TLS in Service Meshes (High Load Scale)",
    hint: "Zero-trust automated encryption and authentication for inter-pod traffic.",
    back: "Enforcing <strong>strict mTLS</strong> via a service mesh (like Istio or Linkerd) encrypts and mutually authenticates all pod-to-pod communication without requiring application code changes.",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-363",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Mutual TLS in Service Meshes (Security Compliance)",
    hint: "Zero-trust automated encryption and authentication for inter-pod traffic.",
    back: "Enforcing <strong>strict mTLS</strong> via a service mesh (like Istio or Linkerd) encrypts and mutually authenticates all pod-to-pod communication without requiring application code changes.",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-364",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Mutual TLS in Service Meshes (Hybrid Migration)",
    hint: "Zero-trust automated encryption and authentication for inter-pod traffic.",
    back: "Enforcing <strong>strict mTLS</strong> via a service mesh (like Istio or Linkerd) encrypts and mutually authenticates all pod-to-pod communication without requiring application code changes.",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-365",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Mutual TLS in Service Meshes (Resilience Failure)",
    hint: "Zero-trust automated encryption and authentication for inter-pod traffic.",
    back: "Enforcing <strong>strict mTLS</strong> via a service mesh (like Istio or Linkerd) encrypts and mutually authenticates all pod-to-pod communication without requiring application code changes.",
    tags: ["Service Mesh mTLS", "Service Mesh mTLS", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-366",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Ingress Security and Web Application Firewalls (Dr Failover)",
    hint: "Protecting cluster endpoints from Layer 7 attacks and terminating TLS.",
    back: "Securing <strong>Ingress controllers</strong> with TLS certificates, rate-limiting annotations, and WAF rules (ModSecurity) mitigates Layer 7 vulnerabilities like SQLi and XSS before traffic enters the cluster.",
    tags: ["Ingress Security", "Ingress WAF", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-367",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Ingress Security and Web Application Firewalls (High Load Scale)",
    hint: "Protecting cluster endpoints from Layer 7 attacks and terminating TLS.",
    back: "Securing <strong>Ingress controllers</strong> with TLS certificates, rate-limiting annotations, and WAF rules (ModSecurity) mitigates Layer 7 vulnerabilities like SQLi and XSS before traffic enters the cluster.",
    tags: ["Ingress Security", "Ingress WAF", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-368",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Ingress Security and Web Application Firewalls (Security Compliance)",
    hint: "Protecting cluster endpoints from Layer 7 attacks and terminating TLS.",
    back: "Securing <strong>Ingress controllers</strong> with TLS certificates, rate-limiting annotations, and WAF rules (ModSecurity) mitigates Layer 7 vulnerabilities like SQLi and XSS before traffic enters the cluster.",
    tags: ["Ingress Security", "Ingress WAF", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-369",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Ingress Security and Web Application Firewalls (Hybrid Migration)",
    hint: "Protecting cluster endpoints from Layer 7 attacks and terminating TLS.",
    back: "Securing <strong>Ingress controllers</strong> with TLS certificates, rate-limiting annotations, and WAF rules (ModSecurity) mitigates Layer 7 vulnerabilities like SQLi and XSS before traffic enters the cluster.",
    tags: ["Ingress Security", "Ingress WAF", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-370",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Ingress Security and Web Application Firewalls (Resilience Failure)",
    hint: "Protecting cluster endpoints from Layer 7 attacks and terminating TLS.",
    back: "Securing <strong>Ingress controllers</strong> with TLS certificates, rate-limiting annotations, and WAF rules (ModSecurity) mitigates Layer 7 vulnerabilities like SQLi and XSS before traffic enters the cluster.",
    tags: ["Ingress Security", "Ingress WAF", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-371",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Immutable Container Vulnerability Remediation (Dr Failover)",
    hint: "Rebuilding base images in CI rather than modifying live containers.",
    back: "Remediating container CVEs adheres to <strong>immutable infrastructure</strong>: update base images in CI, scan for vulnerabilities, and redeploy new immutable image digests rather than patching running containers.",
    tags: ["CVE Remediation", "CVE Remediation", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-372",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Immutable Container Vulnerability Remediation (High Load Scale)",
    hint: "Rebuilding base images in CI rather than modifying live containers.",
    back: "Remediating container CVEs adheres to <strong>immutable infrastructure</strong>: update base images in CI, scan for vulnerabilities, and redeploy new immutable image digests rather than patching running containers.",
    tags: ["CVE Remediation", "CVE Remediation", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-373",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Immutable Container Vulnerability Remediation (Security Compliance)",
    hint: "Rebuilding base images in CI rather than modifying live containers.",
    back: "Remediating container CVEs adheres to <strong>immutable infrastructure</strong>: update base images in CI, scan for vulnerabilities, and redeploy new immutable image digests rather than patching running containers.",
    tags: ["CVE Remediation", "CVE Remediation", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-374",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Immutable Container Vulnerability Remediation (Hybrid Migration)",
    hint: "Rebuilding base images in CI rather than modifying live containers.",
    back: "Remediating container CVEs adheres to <strong>immutable infrastructure</strong>: update base images in CI, scan for vulnerabilities, and redeploy new immutable image digests rather than patching running containers.",
    tags: ["CVE Remediation", "CVE Remediation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-375",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Immutable Container Vulnerability Remediation (Resilience Failure)",
    hint: "Rebuilding base images in CI rather than modifying live containers.",
    back: "Remediating container CVEs adheres to <strong>immutable infrastructure</strong>: update base images in CI, scan for vulnerabilities, and redeploy new immutable image digests rather than patching running containers.",
    tags: ["CVE Remediation", "CVE Remediation", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_15;
