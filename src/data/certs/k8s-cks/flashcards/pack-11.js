export const K8S_CKS_FLASHCARDS_11 = [
  {
    id: "k8s-cks-fc-251",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-bench CIS Benchmark Verification (Dr Failover)",
    hint: "Automating compliance auditing against CIS Kubernetes Benchmarks.",
    back: "Running <strong>kube-bench</strong> validates control plane and node configurations against CIS Kubernetes Benchmarks, highlighting insecure flags and excessive file permissions for remediation.",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-252",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-bench CIS Benchmark Verification (High Load Scale)",
    hint: "Automating compliance auditing against CIS Kubernetes Benchmarks.",
    back: "Running <strong>kube-bench</strong> validates control plane and node configurations against CIS Kubernetes Benchmarks, highlighting insecure flags and excessive file permissions for remediation.",
    tags: ["CIS Benchmarks", "CIS Benchmark", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-253",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-bench CIS Benchmark Verification (Security Compliance)",
    hint: "Automating compliance auditing against CIS Kubernetes Benchmarks.",
    back: "Running <strong>kube-bench</strong> validates control plane and node configurations against CIS Kubernetes Benchmarks, highlighting insecure flags and excessive file permissions for remediation.",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-254",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-bench CIS Benchmark Verification (Hybrid Migration)",
    hint: "Automating compliance auditing against CIS Kubernetes Benchmarks.",
    back: "Running <strong>kube-bench</strong> validates control plane and node configurations against CIS Kubernetes Benchmarks, highlighting insecure flags and excessive file permissions for remediation.",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-255",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-bench CIS Benchmark Verification (Resilience Failure)",
    hint: "Automating compliance auditing against CIS Kubernetes Benchmarks.",
    back: "Running <strong>kube-bench</strong> validates control plane and node configurations against CIS Kubernetes Benchmarks, highlighting insecure flags and excessive file permissions for remediation.",
    tags: ["CIS Benchmarks", "CIS Benchmark", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-256",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-apiserver Security Hardening (Dr Failover)",
    hint: "Disabling anonymous auth and enforcing Node,RBAC authorization.",
    back: "Hardening <strong>kube-apiserver</strong> requires setting <code>--anonymous-auth=false</code> and <code>--authorization-mode=Node,RBAC</code>, preventing unauthorized access and enforcing strict authorization.",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-257",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-apiserver Security Hardening (High Load Scale)",
    hint: "Disabling anonymous auth and enforcing Node,RBAC authorization.",
    back: "Hardening <strong>kube-apiserver</strong> requires setting <code>--anonymous-auth=false</code> and <code>--authorization-mode=Node,RBAC</code>, preventing unauthorized access and enforcing strict authorization.",
    tags: ["Control Plane Hardening", "apiserver Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-258",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-apiserver Security Hardening (Security Compliance)",
    hint: "Disabling anonymous auth and enforcing Node,RBAC authorization.",
    back: "Hardening <strong>kube-apiserver</strong> requires setting <code>--anonymous-auth=false</code> and <code>--authorization-mode=Node,RBAC</code>, preventing unauthorized access and enforcing strict authorization.",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-259",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-apiserver Security Hardening (Hybrid Migration)",
    hint: "Disabling anonymous auth and enforcing Node,RBAC authorization.",
    back: "Hardening <strong>kube-apiserver</strong> requires setting <code>--anonymous-auth=false</code> and <code>--authorization-mode=Node,RBAC</code>, preventing unauthorized access and enforcing strict authorization.",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-260",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kube-apiserver Security Hardening (Resilience Failure)",
    hint: "Disabling anonymous auth and enforcing Node,RBAC authorization.",
    back: "Hardening <strong>kube-apiserver</strong> requires setting <code>--anonymous-auth=false</code> and <code>--authorization-mode=Node,RBAC</code>, preventing unauthorized access and enforcing strict authorization.",
    tags: ["Control Plane Hardening", "apiserver Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-261",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kubelet Daemon Hardening (Dr Failover)",
    hint: "Disabling anonymous access and readOnlyPort while requiring webhook authorization.",
    back: "Hardening the <strong>kubelet</strong> involves disabling anonymous access, closing <code>readOnlyPort: 0</code>, and configuring <code>authorization.mode: Webhook</code> to prevent unauthenticated execution.",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-262",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kubelet Daemon Hardening (High Load Scale)",
    hint: "Disabling anonymous access and readOnlyPort while requiring webhook authorization.",
    back: "Hardening the <strong>kubelet</strong> involves disabling anonymous access, closing <code>readOnlyPort: 0</code>, and configuring <code>authorization.mode: Webhook</code> to prevent unauthenticated execution.",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-263",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kubelet Daemon Hardening (Security Compliance)",
    hint: "Disabling anonymous access and readOnlyPort while requiring webhook authorization.",
    back: "Hardening the <strong>kubelet</strong> involves disabling anonymous access, closing <code>readOnlyPort: 0</code>, and configuring <code>authorization.mode: Webhook</code> to prevent unauthenticated execution.",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-264",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kubelet Daemon Hardening (Hybrid Migration)",
    hint: "Disabling anonymous access and readOnlyPort while requiring webhook authorization.",
    back: "Hardening the <strong>kubelet</strong> involves disabling anonymous access, closing <code>readOnlyPort: 0</code>, and configuring <code>authorization.mode: Webhook</code> to prevent unauthenticated execution.",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-265",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Kubelet Daemon Hardening (Resilience Failure)",
    hint: "Disabling anonymous access and readOnlyPort while requiring webhook authorization.",
    back: "Hardening the <strong>kubelet</strong> involves disabling anonymous access, closing <code>readOnlyPort: 0</code>, and configuring <code>authorization.mode: Webhook</code> to prevent unauthenticated execution.",
    tags: ["Kubelet Hardening", "Kubelet Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-266",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Encrypting Secrets at Rest in etcd (Dr Failover)",
    hint: "Using EncryptionConfiguration providers to protect stored secret data.",
    back: "Passing <strong>--encryption-provider-config</strong> with an <code>EncryptionConfiguration</code> file encrypts Secret data before writing to etcd, preventing plaintext extraction from disk.",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-267",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Encrypting Secrets at Rest in etcd (High Load Scale)",
    hint: "Using EncryptionConfiguration providers to protect stored secret data.",
    back: "Passing <strong>--encryption-provider-config</strong> with an <code>EncryptionConfiguration</code> file encrypts Secret data before writing to etcd, preventing plaintext extraction from disk.",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-268",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Encrypting Secrets at Rest in etcd (Security Compliance)",
    hint: "Using EncryptionConfiguration providers to protect stored secret data.",
    back: "Passing <strong>--encryption-provider-config</strong> with an <code>EncryptionConfiguration</code> file encrypts Secret data before writing to etcd, preventing plaintext extraction from disk.",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-269",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Encrypting Secrets at Rest in etcd (Hybrid Migration)",
    hint: "Using EncryptionConfiguration providers to protect stored secret data.",
    back: "Passing <strong>--encryption-provider-config</strong> with an <code>EncryptionConfiguration</code> file encrypts Secret data before writing to etcd, preventing plaintext extraction from disk.",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-270",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Encrypting Secrets at Rest in etcd (Resilience Failure)",
    hint: "Using EncryptionConfiguration providers to protect stored secret data.",
    back: "Passing <strong>--encryption-provider-config</strong> with an <code>EncryptionConfiguration</code> file encrypts Secret data before writing to etcd, preventing plaintext extraction from disk.",
    tags: ["Data-at-Rest Encryption", "Secret Encryption", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-271",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Multi-Tenant Network Isolation (Dr Failover)",
    hint: "Default-deny NetworkPolicies for strict namespace boundary isolation.",
    back: "Kubernetes namespaces do not restrict network traffic by default; enforcing multi-tenant isolation requires applying <strong>default-deny NetworkPolicies</strong> across all tenant namespaces.",
    tags: ["Network Isolation", "Network Isolation", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-272",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Multi-Tenant Network Isolation (High Load Scale)",
    hint: "Default-deny NetworkPolicies for strict namespace boundary isolation.",
    back: "Kubernetes namespaces do not restrict network traffic by default; enforcing multi-tenant isolation requires applying <strong>default-deny NetworkPolicies</strong> across all tenant namespaces.",
    tags: ["Network Isolation", "Network Isolation", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-273",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Multi-Tenant Network Isolation (Security Compliance)",
    hint: "Default-deny NetworkPolicies for strict namespace boundary isolation.",
    back: "Kubernetes namespaces do not restrict network traffic by default; enforcing multi-tenant isolation requires applying <strong>default-deny NetworkPolicies</strong> across all tenant namespaces.",
    tags: ["Network Isolation", "Network Isolation", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-274",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Multi-Tenant Network Isolation (Hybrid Migration)",
    hint: "Default-deny NetworkPolicies for strict namespace boundary isolation.",
    back: "Kubernetes namespaces do not restrict network traffic by default; enforcing multi-tenant isolation requires applying <strong>default-deny NetworkPolicies</strong> across all tenant namespaces.",
    tags: ["Network Isolation", "Network Isolation", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-275",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Multi-Tenant Network Isolation (Resilience Failure)",
    hint: "Default-deny NetworkPolicies for strict namespace boundary isolation.",
    back: "Kubernetes namespaces do not restrict network traffic by default; enforcing multi-tenant isolation requires applying <strong>default-deny NetworkPolicies</strong> across all tenant namespaces.",
    tags: ["Network Isolation", "Network Isolation", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_11;
