export const K8S_CKA_FLASHCARDS_15 = [
  {
    id: "k8s-cka-fc-326",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "etcd Cluster Health and Quorum Diagnostics (Dr Failover)",
    hint: "Checking member health, cluster quorum, and quota alarms with etcdctl.",
    back: "When the API server becomes unresponsive, use <strong>etcdctl endpoint health</strong> to verify cluster quorum and check for database quota alarms (like NOSPACE) that halt writes.",
    tags: ["Control Plane Database", "etcd Health", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-327",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "etcd Cluster Health and Quorum Diagnostics (High Load Scale)",
    hint: "Checking member health, cluster quorum, and quota alarms with etcdctl.",
    back: "When the API server becomes unresponsive, use <strong>etcdctl endpoint health</strong> to verify cluster quorum and check for database quota alarms (like NOSPACE) that halt writes.",
    tags: ["Control Plane Database", "etcd Health", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-328",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "etcd Cluster Health and Quorum Diagnostics (Security Compliance)",
    hint: "Checking member health, cluster quorum, and quota alarms with etcdctl.",
    back: "When the API server becomes unresponsive, use <strong>etcdctl endpoint health</strong> to verify cluster quorum and check for database quota alarms (like NOSPACE) that halt writes.",
    tags: ["Control Plane Database", "etcd Health", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-329",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "etcd Cluster Health and Quorum Diagnostics (Hybrid Migration)",
    hint: "Checking member health, cluster quorum, and quota alarms with etcdctl.",
    back: "When the API server becomes unresponsive, use <strong>etcdctl endpoint health</strong> to verify cluster quorum and check for database quota alarms (like NOSPACE) that halt writes.",
    tags: ["Control Plane Database", "etcd Health", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-330",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "etcd Cluster Health and Quorum Diagnostics (Resilience Failure)",
    hint: "Checking member health, cluster quorum, and quota alarms with etcdctl.",
    back: "When the API server becomes unresponsive, use <strong>etcdctl endpoint health</strong> to verify cluster quorum and check for database quota alarms (like NOSPACE) that halt writes.",
    tags: ["Control Plane Database", "etcd Health", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-331",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Kubeadm Certificate Expiration and Renewal (Dr Failover)",
    hint: "Diagnosing expired cluster PKI certificates with kubeadm certs.",
    back: "Control plane outages occurring after one year often stem from expired TLS certificates; inspect status using <strong>kubeadm certs check-expiration</strong> and renew them with <code>kubeadm certs renew all</code>.",
    tags: ["PKI Certificates", "Certificate Expiration", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-332",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Kubeadm Certificate Expiration and Renewal (High Load Scale)",
    hint: "Diagnosing expired cluster PKI certificates with kubeadm certs.",
    back: "Control plane outages occurring after one year often stem from expired TLS certificates; inspect status using <strong>kubeadm certs check-expiration</strong> and renew them with <code>kubeadm certs renew all</code>.",
    tags: ["PKI Certificates", "Certificate Expiration", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-333",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Kubeadm Certificate Expiration and Renewal (Security Compliance)",
    hint: "Diagnosing expired cluster PKI certificates with kubeadm certs.",
    back: "Control plane outages occurring after one year often stem from expired TLS certificates; inspect status using <strong>kubeadm certs check-expiration</strong> and renew them with <code>kubeadm certs renew all</code>.",
    tags: ["PKI Certificates", "Certificate Expiration", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-334",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Kubeadm Certificate Expiration and Renewal (Hybrid Migration)",
    hint: "Diagnosing expired cluster PKI certificates with kubeadm certs.",
    back: "Control plane outages occurring after one year often stem from expired TLS certificates; inspect status using <strong>kubeadm certs check-expiration</strong> and renew them with <code>kubeadm certs renew all</code>.",
    tags: ["PKI Certificates", "Certificate Expiration", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-335",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Kubeadm Certificate Expiration and Renewal (Resilience Failure)",
    hint: "Diagnosing expired cluster PKI certificates with kubeadm certs.",
    back: "Control plane outages occurring after one year often stem from expired TLS certificates; inspect status using <strong>kubeadm certs check-expiration</strong> and renew them with <code>kubeadm certs renew all</code>.",
    tags: ["PKI Certificates", "Certificate Expiration", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-336",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Admission Webhook Failure Troubleshooting (Dr Failover)",
    hint: "Resolving blocked API requests caused by unreachable webhook services.",
    back: "If resource creation fails due to webhook errors, inspect <strong>ValidatingWebhookConfiguration</strong> and ensure the target webhook service is healthy or adjust <code>failurePolicy: Ignore</code> temporarily.",
    tags: ["Admission Webhooks", "Admission Webhooks", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-337",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Admission Webhook Failure Troubleshooting (High Load Scale)",
    hint: "Resolving blocked API requests caused by unreachable webhook services.",
    back: "If resource creation fails due to webhook errors, inspect <strong>ValidatingWebhookConfiguration</strong> and ensure the target webhook service is healthy or adjust <code>failurePolicy: Ignore</code> temporarily.",
    tags: ["Admission Webhooks", "Admission Webhooks", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-338",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Admission Webhook Failure Troubleshooting (Security Compliance)",
    hint: "Resolving blocked API requests caused by unreachable webhook services.",
    back: "If resource creation fails due to webhook errors, inspect <strong>ValidatingWebhookConfiguration</strong> and ensure the target webhook service is healthy or adjust <code>failurePolicy: Ignore</code> temporarily.",
    tags: ["Admission Webhooks", "Admission Webhooks", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-339",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Admission Webhook Failure Troubleshooting (Hybrid Migration)",
    hint: "Resolving blocked API requests caused by unreachable webhook services.",
    back: "If resource creation fails due to webhook errors, inspect <strong>ValidatingWebhookConfiguration</strong> and ensure the target webhook service is healthy or adjust <code>failurePolicy: Ignore</code> temporarily.",
    tags: ["Admission Webhooks", "Admission Webhooks", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-340",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Admission Webhook Failure Troubleshooting (Resilience Failure)",
    hint: "Resolving blocked API requests caused by unreachable webhook services.",
    back: "If resource creation fails due to webhook errors, inspect <strong>ValidatingWebhookConfiguration</strong> and ensure the target webhook service is healthy or adjust <code>failurePolicy: Ignore</code> temporarily.",
    tags: ["Admission Webhooks", "Admission Webhooks", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-341",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kubectl debug with Ephemeral Containers (Dr Failover)",
    hint: "Attaching diagnostic tools to running distroless containers without restarts.",
    back: "<strong>kubectl debug</strong> injects an ephemeral container containing troubleshooting binaries into a running pod, enabling process inspection via shared namespaces without terminating the application.",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-342",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kubectl debug with Ephemeral Containers (High Load Scale)",
    hint: "Attaching diagnostic tools to running distroless containers without restarts.",
    back: "<strong>kubectl debug</strong> injects an ephemeral container containing troubleshooting binaries into a running pod, enabling process inspection via shared namespaces without terminating the application.",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-343",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kubectl debug with Ephemeral Containers (Security Compliance)",
    hint: "Attaching diagnostic tools to running distroless containers without restarts.",
    back: "<strong>kubectl debug</strong> injects an ephemeral container containing troubleshooting binaries into a running pod, enabling process inspection via shared namespaces without terminating the application.",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-344",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kubectl debug with Ephemeral Containers (Hybrid Migration)",
    hint: "Attaching diagnostic tools to running distroless containers without restarts.",
    back: "<strong>kubectl debug</strong> injects an ephemeral container containing troubleshooting binaries into a running pod, enabling process inspection via shared namespaces without terminating the application.",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-345",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kubectl debug with Ephemeral Containers (Resilience Failure)",
    hint: "Attaching diagnostic tools to running distroless containers without restarts.",
    back: "<strong>kubectl debug</strong> injects an ephemeral container containing troubleshooting binaries into a running pod, enabling process inspection via shared namespaces without terminating the application.",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-346",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Node Taints and Pod Toleration Diagnostics (Dr Failover)",
    hint: "Matching pod tolerations to node taints to permit scheduling.",
    back: "When pods fail to schedule onto specific nodes, inspect <strong>node taints</strong> with <code>kubectl describe node</code> and ensure the pod manifest specifies the matching <strong>toleration</strong> key, value, and effect.",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-347",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Node Taints and Pod Toleration Diagnostics (High Load Scale)",
    hint: "Matching pod tolerations to node taints to permit scheduling.",
    back: "When pods fail to schedule onto specific nodes, inspect <strong>node taints</strong> with <code>kubectl describe node</code> and ensure the pod manifest specifies the matching <strong>toleration</strong> key, value, and effect.",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-348",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Node Taints and Pod Toleration Diagnostics (Security Compliance)",
    hint: "Matching pod tolerations to node taints to permit scheduling.",
    back: "When pods fail to schedule onto specific nodes, inspect <strong>node taints</strong> with <code>kubectl describe node</code> and ensure the pod manifest specifies the matching <strong>toleration</strong> key, value, and effect.",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-349",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Node Taints and Pod Toleration Diagnostics (Hybrid Migration)",
    hint: "Matching pod tolerations to node taints to permit scheduling.",
    back: "When pods fail to schedule onto specific nodes, inspect <strong>node taints</strong> with <code>kubectl describe node</code> and ensure the pod manifest specifies the matching <strong>toleration</strong> key, value, and effect.",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-350",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Node Taints and Pod Toleration Diagnostics (Resilience Failure)",
    hint: "Matching pod tolerations to node taints to permit scheduling.",
    back: "When pods fail to schedule onto specific nodes, inspect <strong>node taints</strong> with <code>kubectl describe node</code> and ensure the pod manifest specifies the matching <strong>toleration</strong> key, value, and effect.",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_15;
