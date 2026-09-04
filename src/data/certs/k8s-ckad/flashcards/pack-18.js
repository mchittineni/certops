export const K8S_CKAD_FLASHCARDS_18 = [
  {
    id: "k8s-ckad-fc-426",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Downward API (Dr Failover)",
    hint: "Exposing pod metadata and resource values to container processes without API calls.",
    back: "The <strong>Downward API</strong> exposes pod metadata (name, namespace, IP, resource limits) directly into container environment variables or volume files via <code>fieldRef</code> without API queries.",
    tags: ["Downward API", "Downward API", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-427",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Downward API (High Load Scale)",
    hint: "Exposing pod metadata and resource values to container processes without API calls.",
    back: "The <strong>Downward API</strong> exposes pod metadata (name, namespace, IP, resource limits) directly into container environment variables or volume files via <code>fieldRef</code> without API queries.",
    tags: ["Downward API", "Downward API", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-428",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Downward API (Security Compliance)",
    hint: "Exposing pod metadata and resource values to container processes without API calls.",
    back: "The <strong>Downward API</strong> exposes pod metadata (name, namespace, IP, resource limits) directly into container environment variables or volume files via <code>fieldRef</code> without API queries.",
    tags: ["Downward API", "Downward API", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-429",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Downward API (Hybrid Migration)",
    hint: "Exposing pod metadata and resource values to container processes without API calls.",
    back: "The <strong>Downward API</strong> exposes pod metadata (name, namespace, IP, resource limits) directly into container environment variables or volume files via <code>fieldRef</code> without API queries.",
    tags: ["Downward API", "Downward API", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-430",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Downward API (Resilience Failure)",
    hint: "Exposing pod metadata and resource values to container processes without API calls.",
    back: "The <strong>Downward API</strong> exposes pod metadata (name, namespace, IP, resource limits) directly into container environment variables or volume files via <code>fieldRef</code> without API queries.",
    tags: ["Downward API", "Downward API", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-431",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Immutable ConfigMaps and Secrets (Dr Failover)",
    hint: "Preventing accidental changes and reducing API server watch overhead.",
    back: "Setting <strong>immutable: true</strong> on ConfigMaps and Secrets prevents accidental data modification and stops kubelets from watching objects for updates, significantly improving API server performance.",
    tags: ["Immutability", "Immutable ConfigMaps", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-432",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Immutable ConfigMaps and Secrets (High Load Scale)",
    hint: "Preventing accidental changes and reducing API server watch overhead.",
    back: "Setting <strong>immutable: true</strong> on ConfigMaps and Secrets prevents accidental data modification and stops kubelets from watching objects for updates, significantly improving API server performance.",
    tags: ["Immutability", "Immutable ConfigMaps", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-433",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Immutable ConfigMaps and Secrets (Security Compliance)",
    hint: "Preventing accidental changes and reducing API server watch overhead.",
    back: "Setting <strong>immutable: true</strong> on ConfigMaps and Secrets prevents accidental data modification and stops kubelets from watching objects for updates, significantly improving API server performance.",
    tags: ["Immutability", "Immutable ConfigMaps", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-434",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Immutable ConfigMaps and Secrets (Hybrid Migration)",
    hint: "Preventing accidental changes and reducing API server watch overhead.",
    back: "Setting <strong>immutable: true</strong> on ConfigMaps and Secrets prevents accidental data modification and stops kubelets from watching objects for updates, significantly improving API server performance.",
    tags: ["Immutability", "Immutable ConfigMaps", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-435",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Immutable ConfigMaps and Secrets (Resilience Failure)",
    hint: "Preventing accidental changes and reducing API server watch overhead.",
    back: "Setting <strong>immutable: true</strong> on ConfigMaps and Secrets prevents accidental data modification and stops kubelets from watching objects for updates, significantly improving API server performance.",
    tags: ["Immutability", "Immutable ConfigMaps", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-436",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Standards Admission (Dr Failover)",
    hint: "Enforcing Privileged, Baseline, or Restricted security levels via namespace labels.",
    back: "Labeling a namespace with <strong>pod-security.kubernetes.io/enforce: restricted</strong> enforces strict container hardening (non-root, dropped capabilities, no privilege escalation) at admission time.",
    tags: ["Pod Security Standards", "Pod Security Standards", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-437",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Standards Admission (High Load Scale)",
    hint: "Enforcing Privileged, Baseline, or Restricted security levels via namespace labels.",
    back: "Labeling a namespace with <strong>pod-security.kubernetes.io/enforce: restricted</strong> enforces strict container hardening (non-root, dropped capabilities, no privilege escalation) at admission time.",
    tags: ["Pod Security Standards", "Pod Security Standards", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-438",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Standards Admission (Security Compliance)",
    hint: "Enforcing Privileged, Baseline, or Restricted security levels via namespace labels.",
    back: "Labeling a namespace with <strong>pod-security.kubernetes.io/enforce: restricted</strong> enforces strict container hardening (non-root, dropped capabilities, no privilege escalation) at admission time.",
    tags: ["Pod Security Standards", "Pod Security Standards", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-439",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Standards Admission (Hybrid Migration)",
    hint: "Enforcing Privileged, Baseline, or Restricted security levels via namespace labels.",
    back: "Labeling a namespace with <strong>pod-security.kubernetes.io/enforce: restricted</strong> enforces strict container hardening (non-root, dropped capabilities, no privilege escalation) at admission time.",
    tags: ["Pod Security Standards", "Pod Security Standards", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-440",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Standards Admission (Resilience Failure)",
    hint: "Enforcing Privileged, Baseline, or Restricted security levels via namespace labels.",
    back: "Labeling a namespace with <strong>pod-security.kubernetes.io/enforce: restricted</strong> enforces strict container hardening (non-root, dropped capabilities, no privilege escalation) at admission time.",
    tags: ["Pod Security Standards", "Pod Security Standards", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-441",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "automountServiceAccountToken False (Dr Failover)",
    hint: "Preventing automated injection of API tokens into unprivileged application containers.",
    back: "Setting <strong>automountServiceAccountToken: false</strong> prevents the kubelet from injecting API credentials into pods that do not require API access, minimizing credential exposure risks.",
    tags: ["Token Security", "Token Automount", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-442",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "automountServiceAccountToken False (High Load Scale)",
    hint: "Preventing automated injection of API tokens into unprivileged application containers.",
    back: "Setting <strong>automountServiceAccountToken: false</strong> prevents the kubelet from injecting API credentials into pods that do not require API access, minimizing credential exposure risks.",
    tags: ["Token Security", "Token Automount", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-443",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "automountServiceAccountToken False (Security Compliance)",
    hint: "Preventing automated injection of API tokens into unprivileged application containers.",
    back: "Setting <strong>automountServiceAccountToken: false</strong> prevents the kubelet from injecting API credentials into pods that do not require API access, minimizing credential exposure risks.",
    tags: ["Token Security", "Token Automount", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-444",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "automountServiceAccountToken False (Hybrid Migration)",
    hint: "Preventing automated injection of API tokens into unprivileged application containers.",
    back: "Setting <strong>automountServiceAccountToken: false</strong> prevents the kubelet from injecting API credentials into pods that do not require API access, minimizing credential exposure risks.",
    tags: ["Token Security", "Token Automount", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-445",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "automountServiceAccountToken False (Resilience Failure)",
    hint: "Preventing automated injection of API tokens into unprivileged application containers.",
    back: "Setting <strong>automountServiceAccountToken: false</strong> prevents the kubelet from injecting API credentials into pods that do not require API access, minimizing credential exposure risks.",
    tags: ["Token Security", "Token Automount", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-446",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Dedicated Workload ServiceAccounts (Dr Failover)",
    hint: "Assigning least-privilege API permissions to workloads via custom ServiceAccounts.",
    back: "Assigning a dedicated <strong>ServiceAccount</strong> with a scoped RoleBinding ensures workloads only possess the exact API privileges required, adhering strictly to the principle of least privilege.",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-447",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Dedicated Workload ServiceAccounts (High Load Scale)",
    hint: "Assigning least-privilege API permissions to workloads via custom ServiceAccounts.",
    back: "Assigning a dedicated <strong>ServiceAccount</strong> with a scoped RoleBinding ensures workloads only possess the exact API privileges required, adhering strictly to the principle of least privilege.",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-448",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Dedicated Workload ServiceAccounts (Security Compliance)",
    hint: "Assigning least-privilege API permissions to workloads via custom ServiceAccounts.",
    back: "Assigning a dedicated <strong>ServiceAccount</strong> with a scoped RoleBinding ensures workloads only possess the exact API privileges required, adhering strictly to the principle of least privilege.",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-449",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Dedicated Workload ServiceAccounts (Hybrid Migration)",
    hint: "Assigning least-privilege API permissions to workloads via custom ServiceAccounts.",
    back: "Assigning a dedicated <strong>ServiceAccount</strong> with a scoped RoleBinding ensures workloads only possess the exact API privileges required, adhering strictly to the principle of least privilege.",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-450",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Dedicated Workload ServiceAccounts (Resilience Failure)",
    hint: "Assigning least-privilege API permissions to workloads via custom ServiceAccounts.",
    back: "Assigning a dedicated <strong>ServiceAccount</strong> with a scoped RoleBinding ensures workloads only possess the exact API privileges required, adhering strictly to the principle of least privilege.",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_18;
