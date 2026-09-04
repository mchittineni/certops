export const K8S_CKS_FLASHCARDS_19 = [
  {
    id: "k8s-cks-fc-451",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Drift Detection with crictl diff (Dr Failover)",
    hint: "Comparing running container filesystems against base images to detect tampering.",
    back: "Running <strong>crictl diff</strong> inspects the container read-write layer to reveal modified or newly created files, detecting container drift and unauthorized backdoor installation.",
    tags: ["Container Drift", "Container Drift", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-452",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Drift Detection with crictl diff (High Load Scale)",
    hint: "Comparing running container filesystems against base images to detect tampering.",
    back: "Running <strong>crictl diff</strong> inspects the container read-write layer to reveal modified or newly created files, detecting container drift and unauthorized backdoor installation.",
    tags: ["Container Drift", "Container Drift", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-453",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Drift Detection with crictl diff (Security Compliance)",
    hint: "Comparing running container filesystems against base images to detect tampering.",
    back: "Running <strong>crictl diff</strong> inspects the container read-write layer to reveal modified or newly created files, detecting container drift and unauthorized backdoor installation.",
    tags: ["Container Drift", "Container Drift", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-454",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Drift Detection with crictl diff (Hybrid Migration)",
    hint: "Comparing running container filesystems against base images to detect tampering.",
    back: "Running <strong>crictl diff</strong> inspects the container read-write layer to reveal modified or newly created files, detecting container drift and unauthorized backdoor installation.",
    tags: ["Container Drift", "Container Drift", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-455",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Drift Detection with crictl diff (Resilience Failure)",
    hint: "Comparing running container filesystems against base images to detect tampering.",
    back: "Running <strong>crictl diff</strong> inspects the container read-write layer to reveal modified or newly created files, detecting container drift and unauthorized backdoor installation.",
    tags: ["Container Drift", "Container Drift", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-456",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Runtime Socket Hardening (Dr Failover)",
    hint: "Restricting CRI socket permissions to prevent local privilege escalation.",
    back: "Securing the <strong>containerd socket</strong> (<code>0660 root:root</code>) prevents non-root processes from issuing CRI commands to create privileged containers and escape to the host.",
    tags: ["CRI Security", "CRI Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-457",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Runtime Socket Hardening (High Load Scale)",
    hint: "Restricting CRI socket permissions to prevent local privilege escalation.",
    back: "Securing the <strong>containerd socket</strong> (<code>0660 root:root</code>) prevents non-root processes from issuing CRI commands to create privileged containers and escape to the host.",
    tags: ["CRI Security", "CRI Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-458",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Runtime Socket Hardening (Security Compliance)",
    hint: "Restricting CRI socket permissions to prevent local privilege escalation.",
    back: "Securing the <strong>containerd socket</strong> (<code>0660 root:root</code>) prevents non-root processes from issuing CRI commands to create privileged containers and escape to the host.",
    tags: ["CRI Security", "CRI Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-459",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Runtime Socket Hardening (Hybrid Migration)",
    hint: "Restricting CRI socket permissions to prevent local privilege escalation.",
    back: "Securing the <strong>containerd socket</strong> (<code>0660 root:root</code>) prevents non-root processes from issuing CRI commands to create privileged containers and escape to the host.",
    tags: ["CRI Security", "CRI Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-460",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Container Runtime Socket Hardening (Resilience Failure)",
    hint: "Restricting CRI socket permissions to prevent local privilege escalation.",
    back: "Securing the <strong>containerd socket</strong> (<code>0660 root:root</code>) prevents non-root processes from issuing CRI commands to create privileged containers and escape to the host.",
    tags: ["CRI Security", "CRI Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-461",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "eBPF-Based Kernel Security Enforcement (Dr Failover)",
    hint: "Real-time, in-kernel observability and inline process blocking with eBPF.",
    back: "Using <strong>eBPF security tools</strong> (like Tetragon) enables in-kernel observability and inline syscall blocking, terminating malicious operations before they can affect the host system.",
    tags: ["eBPF Security", "eBPF Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-462",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "eBPF-Based Kernel Security Enforcement (High Load Scale)",
    hint: "Real-time, in-kernel observability and inline process blocking with eBPF.",
    back: "Using <strong>eBPF security tools</strong> (like Tetragon) enables in-kernel observability and inline syscall blocking, terminating malicious operations before they can affect the host system.",
    tags: ["eBPF Security", "eBPF Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-463",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "eBPF-Based Kernel Security Enforcement (Security Compliance)",
    hint: "Real-time, in-kernel observability and inline process blocking with eBPF.",
    back: "Using <strong>eBPF security tools</strong> (like Tetragon) enables in-kernel observability and inline syscall blocking, terminating malicious operations before they can affect the host system.",
    tags: ["eBPF Security", "eBPF Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-464",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "eBPF-Based Kernel Security Enforcement (Hybrid Migration)",
    hint: "Real-time, in-kernel observability and inline process blocking with eBPF.",
    back: "Using <strong>eBPF security tools</strong> (like Tetragon) enables in-kernel observability and inline syscall blocking, terminating malicious operations before they can affect the host system.",
    tags: ["eBPF Security", "eBPF Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-465",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "eBPF-Based Kernel Security Enforcement (Resilience Failure)",
    hint: "Real-time, in-kernel observability and inline process blocking with eBPF.",
    back: "Using <strong>eBPF security tools</strong> (like Tetragon) enables in-kernel observability and inline syscall blocking, terminating malicious operations before they can affect the host system.",
    tags: ["eBPF Security", "eBPF Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-466",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "API Server Audit Webhook Integration (Dr Failover)",
    hint: "Streaming audit events in real-time to external SIEM systems via Webhooks.",
    back: "Configuring an <strong>audit webhook backend</strong> on kube-apiserver streams real-time JSON audit events to enterprise SIEM platforms for automated threat detection and compliance archiving.",
    tags: ["SIEM Integration", "Audit Webhooks", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-467",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "API Server Audit Webhook Integration (High Load Scale)",
    hint: "Streaming audit events in real-time to external SIEM systems via Webhooks.",
    back: "Configuring an <strong>audit webhook backend</strong> on kube-apiserver streams real-time JSON audit events to enterprise SIEM platforms for automated threat detection and compliance archiving.",
    tags: ["SIEM Integration", "Audit Webhooks", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-468",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "API Server Audit Webhook Integration (Security Compliance)",
    hint: "Streaming audit events in real-time to external SIEM systems via Webhooks.",
    back: "Configuring an <strong>audit webhook backend</strong> on kube-apiserver streams real-time JSON audit events to enterprise SIEM platforms for automated threat detection and compliance archiving.",
    tags: ["SIEM Integration", "Audit Webhooks", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-469",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "API Server Audit Webhook Integration (Hybrid Migration)",
    hint: "Streaming audit events in real-time to external SIEM systems via Webhooks.",
    back: "Configuring an <strong>audit webhook backend</strong> on kube-apiserver streams real-time JSON audit events to enterprise SIEM platforms for automated threat detection and compliance archiving.",
    tags: ["SIEM Integration", "Audit Webhooks", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-470",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "API Server Audit Webhook Integration (Resilience Failure)",
    hint: "Streaming audit events in real-time to external SIEM systems via Webhooks.",
    back: "Configuring an <strong>audit webhook backend</strong> on kube-apiserver streams real-time JSON audit events to enterprise SIEM platforms for automated threat detection and compliance archiving.",
    tags: ["SIEM Integration", "Audit Webhooks", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-471",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Node Problem Detector (Dr Failover)",
    hint: "Surfacing kernel deadlocks and host failures as Kubernetes Node conditions.",
    back: "The <strong>Node Problem Detector (NPD)</strong> parses host kernel logs to detect hardware and OS faults, updating Node status conditions so controllers can drain or avoid impaired hosts.",
    tags: ["Node Health", "Node Problem Detector", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-472",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Node Problem Detector (High Load Scale)",
    hint: "Surfacing kernel deadlocks and host failures as Kubernetes Node conditions.",
    back: "The <strong>Node Problem Detector (NPD)</strong> parses host kernel logs to detect hardware and OS faults, updating Node status conditions so controllers can drain or avoid impaired hosts.",
    tags: ["Node Health", "Node Problem Detector", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-473",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Node Problem Detector (Security Compliance)",
    hint: "Surfacing kernel deadlocks and host failures as Kubernetes Node conditions.",
    back: "The <strong>Node Problem Detector (NPD)</strong> parses host kernel logs to detect hardware and OS faults, updating Node status conditions so controllers can drain or avoid impaired hosts.",
    tags: ["Node Health", "Node Problem Detector", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-474",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Node Problem Detector (Hybrid Migration)",
    hint: "Surfacing kernel deadlocks and host failures as Kubernetes Node conditions.",
    back: "The <strong>Node Problem Detector (NPD)</strong> parses host kernel logs to detect hardware and OS faults, updating Node status conditions so controllers can drain or avoid impaired hosts.",
    tags: ["Node Health", "Node Problem Detector", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-475",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Node Problem Detector (Resilience Failure)",
    hint: "Surfacing kernel deadlocks and host failures as Kubernetes Node conditions.",
    back: "The <strong>Node Problem Detector (NPD)</strong> parses host kernel logs to detect hardware and OS faults, updating Node status conditions so controllers can drain or avoid impaired hosts.",
    tags: ["Node Health", "Node Problem Detector", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_19;
