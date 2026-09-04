export const K8S_CKA_FLASHCARDS_14 = [
  {
    id: "k8s-cka-fc-301",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CoreDNS Troubleshooting (Dr Failover)",
    hint: "Verifying CoreDNS pod status, Corefile configuration, and port 53 traffic.",
    back: "Cluster DNS issues are diagnosed by checking <strong>CoreDNS pod status</strong> in <code>kube-system</code>, reviewing Corefile configuration in the ConfigMap, and verifying network policies allow UDP/TCP 53.",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-302",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CoreDNS Troubleshooting (High Load Scale)",
    hint: "Verifying CoreDNS pod status, Corefile configuration, and port 53 traffic.",
    back: "Cluster DNS issues are diagnosed by checking <strong>CoreDNS pod status</strong> in <code>kube-system</code>, reviewing Corefile configuration in the ConfigMap, and verifying network policies allow UDP/TCP 53.",
    tags: ["Cluster DNS", "CoreDNS Debugging", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-303",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CoreDNS Troubleshooting (Security Compliance)",
    hint: "Verifying CoreDNS pod status, Corefile configuration, and port 53 traffic.",
    back: "Cluster DNS issues are diagnosed by checking <strong>CoreDNS pod status</strong> in <code>kube-system</code>, reviewing Corefile configuration in the ConfigMap, and verifying network policies allow UDP/TCP 53.",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-304",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CoreDNS Troubleshooting (Hybrid Migration)",
    hint: "Verifying CoreDNS pod status, Corefile configuration, and port 53 traffic.",
    back: "Cluster DNS issues are diagnosed by checking <strong>CoreDNS pod status</strong> in <code>kube-system</code>, reviewing Corefile configuration in the ConfigMap, and verifying network policies allow UDP/TCP 53.",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-305",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CoreDNS Troubleshooting (Resilience Failure)",
    hint: "Verifying CoreDNS pod status, Corefile configuration, and port 53 traffic.",
    back: "Cluster DNS issues are diagnosed by checking <strong>CoreDNS pod status</strong> in <code>kube-system</code>, reviewing Corefile configuration in the ConfigMap, and verifying network policies allow UDP/TCP 53.",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-306",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Investigating Pending Pods and FailedScheduling (Dr Failover)",
    hint: "Inspecting scheduler events for insufficient node resources.",
    back: "Pods stuck in <strong>Pending</strong> state should be inspected using <code>kubectl describe pod</code> to view <code>FailedScheduling</code> events, identifying CPU, memory, or taint constraints blocking placement.",
    tags: ["Pod Scheduling", "Pending Pods", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-307",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Investigating Pending Pods and FailedScheduling (High Load Scale)",
    hint: "Inspecting scheduler events for insufficient node resources.",
    back: "Pods stuck in <strong>Pending</strong> state should be inspected using <code>kubectl describe pod</code> to view <code>FailedScheduling</code> events, identifying CPU, memory, or taint constraints blocking placement.",
    tags: ["Pod Scheduling", "Pending Pods", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-308",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Investigating Pending Pods and FailedScheduling (Security Compliance)",
    hint: "Inspecting scheduler events for insufficient node resources.",
    back: "Pods stuck in <strong>Pending</strong> state should be inspected using <code>kubectl describe pod</code> to view <code>FailedScheduling</code> events, identifying CPU, memory, or taint constraints blocking placement.",
    tags: ["Pod Scheduling", "Pending Pods", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-309",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Investigating Pending Pods and FailedScheduling (Hybrid Migration)",
    hint: "Inspecting scheduler events for insufficient node resources.",
    back: "Pods stuck in <strong>Pending</strong> state should be inspected using <code>kubectl describe pod</code> to view <code>FailedScheduling</code> events, identifying CPU, memory, or taint constraints blocking placement.",
    tags: ["Pod Scheduling", "Pending Pods", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-310",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Investigating Pending Pods and FailedScheduling (Resilience Failure)",
    hint: "Inspecting scheduler events for insufficient node resources.",
    back: "Pods stuck in <strong>Pending</strong> state should be inspected using <code>kubectl describe pod</code> to view <code>FailedScheduling</code> events, identifying CPU, memory, or taint constraints blocking placement.",
    tags: ["Pod Scheduling", "Pending Pods", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-311",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Service Selector and Endpoints Verification (Dr Failover)",
    hint: "Matching Service selectors to pod labels to resolve routing failures.",
    back: "When a Service fails to route traffic, inspect <code>kubectl get endpoints</code> to ensure backend pod IPs are present; an empty endpoints list indicates a mismatch in <strong>spec.selector</strong> labels.",
    tags: ["Service Routing", "Service Debugging", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-312",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Service Selector and Endpoints Verification (High Load Scale)",
    hint: "Matching Service selectors to pod labels to resolve routing failures.",
    back: "When a Service fails to route traffic, inspect <code>kubectl get endpoints</code> to ensure backend pod IPs are present; an empty endpoints list indicates a mismatch in <strong>spec.selector</strong> labels.",
    tags: ["Service Routing", "Service Debugging", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-313",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Service Selector and Endpoints Verification (Security Compliance)",
    hint: "Matching Service selectors to pod labels to resolve routing failures.",
    back: "When a Service fails to route traffic, inspect <code>kubectl get endpoints</code> to ensure backend pod IPs are present; an empty endpoints list indicates a mismatch in <strong>spec.selector</strong> labels.",
    tags: ["Service Routing", "Service Debugging", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-314",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Service Selector and Endpoints Verification (Hybrid Migration)",
    hint: "Matching Service selectors to pod labels to resolve routing failures.",
    back: "When a Service fails to route traffic, inspect <code>kubectl get endpoints</code> to ensure backend pod IPs are present; an empty endpoints list indicates a mismatch in <strong>spec.selector</strong> labels.",
    tags: ["Service Routing", "Service Debugging", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-315",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "Service Selector and Endpoints Verification (Resilience Failure)",
    hint: "Matching Service selectors to pod labels to resolve routing failures.",
    back: "When a Service fails to route traffic, inspect <code>kubectl get endpoints</code> to ensure backend pod IPs are present; an empty endpoints list indicates a mismatch in <strong>spec.selector</strong> labels.",
    tags: ["Service Routing", "Service Debugging", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-316",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kube-proxy and iptables Troubleshooting (Dr Failover)",
    hint: "Diagnosing node-specific Service routing and packet translation failures.",
    back: "Node-specific Service routing failures often stem from a crashed or desynchronized <strong>kube-proxy</strong> pod; inspect its logs and host iptables or IPVS tables to restore packet routing.",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-317",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kube-proxy and iptables Troubleshooting (High Load Scale)",
    hint: "Diagnosing node-specific Service routing and packet translation failures.",
    back: "Node-specific Service routing failures often stem from a crashed or desynchronized <strong>kube-proxy</strong> pod; inspect its logs and host iptables or IPVS tables to restore packet routing.",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-318",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kube-proxy and iptables Troubleshooting (Security Compliance)",
    hint: "Diagnosing node-specific Service routing and packet translation failures.",
    back: "Node-specific Service routing failures often stem from a crashed or desynchronized <strong>kube-proxy</strong> pod; inspect its logs and host iptables or IPVS tables to restore packet routing.",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-319",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kube-proxy and iptables Troubleshooting (Hybrid Migration)",
    hint: "Diagnosing node-specific Service routing and packet translation failures.",
    back: "Node-specific Service routing failures often stem from a crashed or desynchronized <strong>kube-proxy</strong> pod; inspect its logs and host iptables or IPVS tables to restore packet routing.",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-320",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "kube-proxy and iptables Troubleshooting (Resilience Failure)",
    hint: "Diagnosing node-specific Service routing and packet translation failures.",
    back: "Node-specific Service routing failures often stem from a crashed or desynchronized <strong>kube-proxy</strong> pod; inspect its logs and host iptables or IPVS tables to restore packet routing.",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-321",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CNI Plugin and IPAM Troubleshooting (Dr Failover)",
    hint: "Resolving NetworkPluginNotReady errors and pod IP exhaustion.",
    back: "<strong>NetworkPluginNotReady</strong> errors signify CNI plugin issues; inspect CNI DaemonSet logs in <code>kube-system</code> and ensure the node pod CIDR subnet has free IP addresses available for allocation.",
    tags: ["Container Network Interface", "CNI Diagnostics", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-322",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CNI Plugin and IPAM Troubleshooting (High Load Scale)",
    hint: "Resolving NetworkPluginNotReady errors and pod IP exhaustion.",
    back: "<strong>NetworkPluginNotReady</strong> errors signify CNI plugin issues; inspect CNI DaemonSet logs in <code>kube-system</code> and ensure the node pod CIDR subnet has free IP addresses available for allocation.",
    tags: ["Container Network Interface", "CNI Diagnostics", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-323",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CNI Plugin and IPAM Troubleshooting (Security Compliance)",
    hint: "Resolving NetworkPluginNotReady errors and pod IP exhaustion.",
    back: "<strong>NetworkPluginNotReady</strong> errors signify CNI plugin issues; inspect CNI DaemonSet logs in <code>kube-system</code> and ensure the node pod CIDR subnet has free IP addresses available for allocation.",
    tags: ["Container Network Interface", "CNI Diagnostics", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-324",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CNI Plugin and IPAM Troubleshooting (Hybrid Migration)",
    hint: "Resolving NetworkPluginNotReady errors and pod IP exhaustion.",
    back: "<strong>NetworkPluginNotReady</strong> errors signify CNI plugin issues; inspect CNI DaemonSet logs in <code>kube-system</code> and ensure the node pod CIDR subnet has free IP addresses available for allocation.",
    tags: ["Container Network Interface", "CNI Diagnostics", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-325",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    front: "CNI Plugin and IPAM Troubleshooting (Resilience Failure)",
    hint: "Resolving NetworkPluginNotReady errors and pod IP exhaustion.",
    back: "<strong>NetworkPluginNotReady</strong> errors signify CNI plugin issues; inspect CNI DaemonSet logs in <code>kube-system</code> and ensure the node pod CIDR subnet has free IP addresses available for allocation.",
    tags: ["Container Network Interface", "CNI Diagnostics", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_14;
