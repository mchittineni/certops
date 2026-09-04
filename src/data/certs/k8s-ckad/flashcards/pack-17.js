export const K8S_CKAD_FLASHCARDS_17 = [
  {
    id: "k8s-ckad-fc-401",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext runAsNonRoot and runAsUser (Dr Failover)",
    hint: "Enforcing non-root container execution to prevent privilege escalation.",
    back: "Configuring <strong>runAsNonRoot: true</strong> and <strong>runAsUser</strong> in <code>securityContext</code> guarantees containers execute with unprivileged user IDs, hardening workloads against host compromise.",
    tags: ["Pod Security", "SecurityContext", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-402",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext runAsNonRoot and runAsUser (High Load Scale)",
    hint: "Enforcing non-root container execution to prevent privilege escalation.",
    back: "Configuring <strong>runAsNonRoot: true</strong> and <strong>runAsUser</strong> in <code>securityContext</code> guarantees containers execute with unprivileged user IDs, hardening workloads against host compromise.",
    tags: ["Pod Security", "SecurityContext", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-403",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext runAsNonRoot and runAsUser (Security Compliance)",
    hint: "Enforcing non-root container execution to prevent privilege escalation.",
    back: "Configuring <strong>runAsNonRoot: true</strong> and <strong>runAsUser</strong> in <code>securityContext</code> guarantees containers execute with unprivileged user IDs, hardening workloads against host compromise.",
    tags: ["Pod Security", "SecurityContext", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-404",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext runAsNonRoot and runAsUser (Hybrid Migration)",
    hint: "Enforcing non-root container execution to prevent privilege escalation.",
    back: "Configuring <strong>runAsNonRoot: true</strong> and <strong>runAsUser</strong> in <code>securityContext</code> guarantees containers execute with unprivileged user IDs, hardening workloads against host compromise.",
    tags: ["Pod Security", "SecurityContext", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-405",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext runAsNonRoot and runAsUser (Resilience Failure)",
    hint: "Enforcing non-root container execution to prevent privilege escalation.",
    back: "Configuring <strong>runAsNonRoot: true</strong> and <strong>runAsUser</strong> in <code>securityContext</code> guarantees containers execute with unprivileged user IDs, hardening workloads against host compromise.",
    tags: ["Pod Security", "SecurityContext", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-406",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "readOnlyRootFilesystem SecurityContext (Dr Failover)",
    hint: "Mounting container filesystems as read-only to block unauthorized modifications.",
    back: "Setting <strong>readOnlyRootFilesystem: true</strong> enforces an immutable root filesystem, preventing malicious scripts or modifications while mounting <code>emptyDir</code> only where write access is required.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-407",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "readOnlyRootFilesystem SecurityContext (High Load Scale)",
    hint: "Mounting container filesystems as read-only to block unauthorized modifications.",
    back: "Setting <strong>readOnlyRootFilesystem: true</strong> enforces an immutable root filesystem, preventing malicious scripts or modifications while mounting <code>emptyDir</code> only where write access is required.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-408",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "readOnlyRootFilesystem SecurityContext (Security Compliance)",
    hint: "Mounting container filesystems as read-only to block unauthorized modifications.",
    back: "Setting <strong>readOnlyRootFilesystem: true</strong> enforces an immutable root filesystem, preventing malicious scripts or modifications while mounting <code>emptyDir</code> only where write access is required.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-409",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "readOnlyRootFilesystem SecurityContext (Hybrid Migration)",
    hint: "Mounting container filesystems as read-only to block unauthorized modifications.",
    back: "Setting <strong>readOnlyRootFilesystem: true</strong> enforces an immutable root filesystem, preventing malicious scripts or modifications while mounting <code>emptyDir</code> only where write access is required.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-410",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "readOnlyRootFilesystem SecurityContext (Resilience Failure)",
    hint: "Mounting container filesystems as read-only to block unauthorized modifications.",
    back: "Setting <strong>readOnlyRootFilesystem: true</strong> enforces an immutable root filesystem, preventing malicious scripts or modifications while mounting <code>emptyDir</code> only where write access is required.",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-411",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Granular Linux Capabilities (Dr Failover)",
    hint: "Dropping all capabilities and adding only necessary kernel privileges.",
    back: "Configuring <code>capabilities: drop: [\"ALL\"]</code> strips unnecessary kernel privileges from containers, while <code>add</code> grants only the precise capabilities required (e.g., <strong>NET_BIND_SERVICE</strong>).",
    tags: ["Linux Capabilities", "Linux Capabilities", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-412",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Granular Linux Capabilities (High Load Scale)",
    hint: "Dropping all capabilities and adding only necessary kernel privileges.",
    back: "Configuring <code>capabilities: drop: [\"ALL\"]</code> strips unnecessary kernel privileges from containers, while <code>add</code> grants only the precise capabilities required (e.g., <strong>NET_BIND_SERVICE</strong>).",
    tags: ["Linux Capabilities", "Linux Capabilities", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-413",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Granular Linux Capabilities (Security Compliance)",
    hint: "Dropping all capabilities and adding only necessary kernel privileges.",
    back: "Configuring <code>capabilities: drop: [\"ALL\"]</code> strips unnecessary kernel privileges from containers, while <code>add</code> grants only the precise capabilities required (e.g., <strong>NET_BIND_SERVICE</strong>).",
    tags: ["Linux Capabilities", "Linux Capabilities", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-414",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Granular Linux Capabilities (Hybrid Migration)",
    hint: "Dropping all capabilities and adding only necessary kernel privileges.",
    back: "Configuring <code>capabilities: drop: [\"ALL\"]</code> strips unnecessary kernel privileges from containers, while <code>add</code> grants only the precise capabilities required (e.g., <strong>NET_BIND_SERVICE</strong>).",
    tags: ["Linux Capabilities", "Linux Capabilities", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-415",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Granular Linux Capabilities (Resilience Failure)",
    hint: "Dropping all capabilities and adding only necessary kernel privileges.",
    back: "Configuring <code>capabilities: drop: [\"ALL\"]</code> strips unnecessary kernel privileges from containers, while <code>add</code> grants only the precise capabilities required (e.g., <strong>NET_BIND_SERVICE</strong>).",
    tags: ["Linux Capabilities", "Linux Capabilities", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-416",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Resource Requests and Limits (Dr Failover)",
    hint: "Defining guaranteed resources and maximum consumption ceilings for containers.",
    back: "Configuring <strong>requests</strong> guarantees minimum CPU and memory for pod scheduling, while <strong>limits</strong> prevent runaway processes from starving neighboring workloads.",
    tags: ["Resource Management", "Resource Requests Limits", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-417",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Resource Requests and Limits (High Load Scale)",
    hint: "Defining guaranteed resources and maximum consumption ceilings for containers.",
    back: "Configuring <strong>requests</strong> guarantees minimum CPU and memory for pod scheduling, while <strong>limits</strong> prevent runaway processes from starving neighboring workloads.",
    tags: ["Resource Management", "Resource Requests Limits", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-418",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Resource Requests and Limits (Security Compliance)",
    hint: "Defining guaranteed resources and maximum consumption ceilings for containers.",
    back: "Configuring <strong>requests</strong> guarantees minimum CPU and memory for pod scheduling, while <strong>limits</strong> prevent runaway processes from starving neighboring workloads.",
    tags: ["Resource Management", "Resource Requests Limits", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-419",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Resource Requests and Limits (Hybrid Migration)",
    hint: "Defining guaranteed resources and maximum consumption ceilings for containers.",
    back: "Configuring <strong>requests</strong> guarantees minimum CPU and memory for pod scheduling, while <strong>limits</strong> prevent runaway processes from starving neighboring workloads.",
    tags: ["Resource Management", "Resource Requests Limits", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-420",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Resource Requests and Limits (Resilience Failure)",
    hint: "Defining guaranteed resources and maximum consumption ceilings for containers.",
    back: "Configuring <strong>requests</strong> guarantees minimum CPU and memory for pod scheduling, while <strong>limits</strong> prevent runaway processes from starving neighboring workloads.",
    tags: ["Resource Management", "Resource Requests Limits", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-421",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes QoS Classes (Dr Failover)",
    hint: "Guaranteed, Burstable, and BestEffort eviction priority classifications.",
    back: "A pod achieves <strong>Guaranteed QoS</strong> when CPU and memory requests exactly equal their limits across all containers, ensuring it has the highest eviction immunity during node pressure.",
    tags: ["QoS Classes", "QoS Classes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-422",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes QoS Classes (High Load Scale)",
    hint: "Guaranteed, Burstable, and BestEffort eviction priority classifications.",
    back: "A pod achieves <strong>Guaranteed QoS</strong> when CPU and memory requests exactly equal their limits across all containers, ensuring it has the highest eviction immunity during node pressure.",
    tags: ["QoS Classes", "QoS Classes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-423",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes QoS Classes (Security Compliance)",
    hint: "Guaranteed, Burstable, and BestEffort eviction priority classifications.",
    back: "A pod achieves <strong>Guaranteed QoS</strong> when CPU and memory requests exactly equal their limits across all containers, ensuring it has the highest eviction immunity during node pressure.",
    tags: ["QoS Classes", "QoS Classes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-424",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes QoS Classes (Hybrid Migration)",
    hint: "Guaranteed, Burstable, and BestEffort eviction priority classifications.",
    back: "A pod achieves <strong>Guaranteed QoS</strong> when CPU and memory requests exactly equal their limits across all containers, ensuring it has the highest eviction immunity during node pressure.",
    tags: ["QoS Classes", "QoS Classes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-425",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes QoS Classes (Resilience Failure)",
    hint: "Guaranteed, Burstable, and BestEffort eviction priority classifications.",
    back: "A pod achieves <strong>Guaranteed QoS</strong> when CPU and memory requests exactly equal their limits across all containers, ensuring it has the highest eviction immunity during node pressure.",
    tags: ["QoS Classes", "QoS Classes", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_17;
