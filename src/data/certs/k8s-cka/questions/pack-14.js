export const K8S_CKA_QUESTIONS_14 = [
  {
    id: "k8s-cka-301",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS Name Resolution Failures: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Cluster DNS to troubleshoot why pods across the cluster cannot resolve external domain names or internal `.cluster.local` service names.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing CoreDNS pod crashes, upstream forwarders, and resolv.conf settings is under consideration.",
    options: [
      { id: 'A', text: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap." },
      { id: 'B', text: "Replace the Linux kernel on every worker node with an older distribution." },
      { id: 'C', text: "Reboot the etcd database cluster three times consecutively." },
      { id: 'D', text: "Instruct applications to use hardcoded IP addresses instead of DNS names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap. Cluster DNS resolution depends on CoreDNS pods running in `kube-system`. Failures often stem from CoreDNS pod crashes, loop detection in upstream forwarding (`resolv.conf`), misconfigured Corefile ConfigMaps, or network policy rules blocking UDP port 53 traffic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Dr Failover"]
  },
  {
    id: "k8s-cka-302",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS Name Resolution Failures: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Cluster DNS to troubleshoot why pods across the cluster cannot resolve external domain names or internal `.cluster.local` service names.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing CoreDNS pod crashes, upstream forwarders, and resolv.conf settings is under consideration.",
    options: [
      { id: 'A', text: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap." },
      { id: 'B', text: "Replace the Linux kernel on every worker node with an older distribution." },
      { id: 'C', text: "Reboot the etcd database cluster three times consecutively." },
      { id: 'D', text: "Instruct applications to use hardcoded IP addresses instead of DNS names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap. Cluster DNS resolution depends on CoreDNS pods running in `kube-system`. Failures often stem from CoreDNS pod crashes, loop detection in upstream forwarding (`resolv.conf`), misconfigured Corefile ConfigMaps, or network policy rules blocking UDP port 53 traffic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Cluster DNS", "CoreDNS Debugging", "High Load Scale"]
  },
  {
    id: "k8s-cka-303",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS Name Resolution Failures: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Cluster DNS to troubleshoot why pods across the cluster cannot resolve external domain names or internal `.cluster.local` service names.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing CoreDNS pod crashes, upstream forwarders, and resolv.conf settings is under consideration.",
    options: [
      { id: 'A', text: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap." },
      { id: 'B', text: "Replace the Linux kernel on every worker node with an older distribution." },
      { id: 'C', text: "Reboot the etcd database cluster three times consecutively." },
      { id: 'D', text: "Instruct applications to use hardcoded IP addresses instead of DNS names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap. Cluster DNS resolution depends on CoreDNS pods running in `kube-system`. Failures often stem from CoreDNS pod crashes, loop detection in upstream forwarding (`resolv.conf`), misconfigured Corefile ConfigMaps, or network policy rules blocking UDP port 53 traffic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Security Compliance"]
  },
  {
    id: "k8s-cka-304",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS Name Resolution Failures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Cluster DNS to troubleshoot why pods across the cluster cannot resolve external domain names or internal `.cluster.local` service names.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing CoreDNS pod crashes, upstream forwarders, and resolv.conf settings is under consideration.",
    options: [
      { id: 'A', text: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap." },
      { id: 'B', text: "Replace the Linux kernel on every worker node with an older distribution." },
      { id: 'C', text: "Reboot the etcd database cluster three times consecutively." },
      { id: 'D', text: "Instruct applications to use hardcoded IP addresses instead of DNS names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap. Cluster DNS resolution depends on CoreDNS pods running in `kube-system`. Failures often stem from CoreDNS pod crashes, loop detection in upstream forwarding (`resolv.conf`), misconfigured Corefile ConfigMaps, or network policy rules blocking UDP port 53 traffic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-305",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS Name Resolution Failures: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Cluster DNS to troubleshoot why pods across the cluster cannot resolve external domain names or internal `.cluster.local` service names.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing CoreDNS pod crashes, upstream forwarders, and resolv.conf settings is under consideration.",
    options: [
      { id: 'A', text: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap." },
      { id: 'B', text: "Replace the Linux kernel on every worker node with an older distribution." },
      { id: 'C', text: "Reboot the etcd database cluster three times consecutively." },
      { id: 'D', text: "Instruct applications to use hardcoded IP addresses instead of DNS names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check that CoreDNS pods are running in `kube-system`, inspect their logs with `kubectl logs -n kube-system -l k8s-app=kube-dns`, and verify the CoreDNS ConfigMap. Cluster DNS resolution depends on CoreDNS pods running in `kube-system`. Failures often stem from CoreDNS pod crashes, loop detection in upstream forwarding (`resolv.conf`), misconfigured Corefile ConfigMaps, or network policy rules blocking UDP port 53 traffic.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Cluster DNS", "CoreDNS Debugging", "Resilience Failure"]
  },
  {
    id: "k8s-cka-306",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Pending Pods Due to Resource Exhaustion: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Pod Scheduling to diagnose why several new pods remain permanently in `Pending` status after a batch deployment.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Inspecting insufficient CPU/memory scheduling events in pending pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory." },
      { id: 'B', text: "Restart the kube-apiserver service." },
      { id: 'C', text: "Delete the deployment and hope the scheduler works on the next attempt." },
      { id: 'D', text: "Change the pod container ports to random dynamic ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory. When a pod stays in `Pending`, the kube-scheduler cannot find any node satisfying all constraints (resource requests, taints, affinities). Running `kubectl describe pod` exposes scheduler events like `0/5 nodes are available: 5 Insufficient cpu`, identifying exact resource bottlenecks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-pod-stays-pending",
    tags: ["Pod Scheduling", "Pending Pods", "Dr Failover"]
  },
  {
    id: "k8s-cka-307",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Pending Pods Due to Resource Exhaustion: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Pod Scheduling to diagnose why several new pods remain permanently in `Pending` status after a batch deployment.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Inspecting insufficient CPU/memory scheduling events in pending pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory." },
      { id: 'B', text: "Restart the kube-apiserver service." },
      { id: 'C', text: "Delete the deployment and hope the scheduler works on the next attempt." },
      { id: 'D', text: "Change the pod container ports to random dynamic ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory. When a pod stays in `Pending`, the kube-scheduler cannot find any node satisfying all constraints (resource requests, taints, affinities). Running `kubectl describe pod` exposes scheduler events like `0/5 nodes are available: 5 Insufficient cpu`, identifying exact resource bottlenecks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-pod-stays-pending",
    tags: ["Pod Scheduling", "Pending Pods", "High Load Scale"]
  },
  {
    id: "k8s-cka-308",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Pending Pods Due to Resource Exhaustion: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Pod Scheduling to diagnose why several new pods remain permanently in `Pending` status after a batch deployment.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Inspecting insufficient CPU/memory scheduling events in pending pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory." },
      { id: 'B', text: "Restart the kube-apiserver service." },
      { id: 'C', text: "Delete the deployment and hope the scheduler works on the next attempt." },
      { id: 'D', text: "Change the pod container ports to random dynamic ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory. When a pod stays in `Pending`, the kube-scheduler cannot find any node satisfying all constraints (resource requests, taints, affinities). Running `kubectl describe pod` exposes scheduler events like `0/5 nodes are available: 5 Insufficient cpu`, identifying exact resource bottlenecks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-pod-stays-pending",
    tags: ["Pod Scheduling", "Pending Pods", "Security Compliance"]
  },
  {
    id: "k8s-cka-309",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Pending Pods Due to Resource Exhaustion: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Pod Scheduling to diagnose why several new pods remain permanently in `Pending` status after a batch deployment.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Inspecting insufficient CPU/memory scheduling events in pending pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory." },
      { id: 'B', text: "Restart the kube-apiserver service." },
      { id: 'C', text: "Delete the deployment and hope the scheduler works on the next attempt." },
      { id: 'D', text: "Change the pod container ports to random dynamic ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory. When a pod stays in `Pending`, the kube-scheduler cannot find any node satisfying all constraints (resource requests, taints, affinities). Running `kubectl describe pod` exposes scheduler events like `0/5 nodes are available: 5 Insufficient cpu`, identifying exact resource bottlenecks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-pod-stays-pending",
    tags: ["Pod Scheduling", "Pending Pods", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-310",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Pending Pods Due to Resource Exhaustion: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Pod Scheduling to diagnose why several new pods remain permanently in `Pending` status after a batch deployment.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Inspecting insufficient CPU/memory scheduling events in pending pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory." },
      { id: 'B', text: "Restart the kube-apiserver service." },
      { id: 'C', text: "Delete the deployment and hope the scheduler works on the next attempt." },
      { id: 'D', text: "Change the pod container ports to random dynamic ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl describe pod &lt;pod-name&gt;` and inspect the Events section for `FailedScheduling` indicating insufficient CPU or memory. When a pod stays in `Pending`, the kube-scheduler cannot find any node satisfying all constraints (resource requests, taints, affinities). Running `kubectl describe pod` exposes scheduler events like `0/5 nodes are available: 5 Insufficient cpu`, identifying exact resource bottlenecks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/#my-pod-stays-pending",
    tags: ["Pod Scheduling", "Pending Pods", "Resilience Failure"]
  },
  {
    id: "k8s-cka-311",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service Routing Failures and Endpoints Mismatch: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Service Routing to troubleshoot why traffic sent to a Kubernetes ClusterIP Service returns connection refused or timeouts even though backend pods are running.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing missing endpoints caused by selector label mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`." },
      { id: 'B', text: "Delete the kubelet systemd service on all worker nodes." },
      { id: 'C', text: "Assume the Service object requires a public static IP address to function." },
      { id: 'D', text: "Change the Service type to ExternalName pointing to localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`. A Service routes traffic to pods matching its label selector. If there is a typo or mismatch between `spec.selector` and pod labels, the Service creates an empty `Endpoints` (or `EndpointSlice`) list. Checking `kubectl get endpoints` confirms whether any pod IPs are registered.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service Routing", "Service Debugging", "Dr Failover"]
  },
  {
    id: "k8s-cka-312",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service Routing Failures and Endpoints Mismatch: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Service Routing to troubleshoot why traffic sent to a Kubernetes ClusterIP Service returns connection refused or timeouts even though backend pods are running.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing missing endpoints caused by selector label mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`." },
      { id: 'B', text: "Delete the kubelet systemd service on all worker nodes." },
      { id: 'C', text: "Assume the Service object requires a public static IP address to function." },
      { id: 'D', text: "Change the Service type to ExternalName pointing to localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`. A Service routes traffic to pods matching its label selector. If there is a typo or mismatch between `spec.selector` and pod labels, the Service creates an empty `Endpoints` (or `EndpointSlice`) list. Checking `kubectl get endpoints` confirms whether any pod IPs are registered.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service Routing", "Service Debugging", "High Load Scale"]
  },
  {
    id: "k8s-cka-313",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service Routing Failures and Endpoints Mismatch: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Service Routing to troubleshoot why traffic sent to a Kubernetes ClusterIP Service returns connection refused or timeouts even though backend pods are running.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing missing endpoints caused by selector label mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`." },
      { id: 'B', text: "Delete the kubelet systemd service on all worker nodes." },
      { id: 'C', text: "Assume the Service object requires a public static IP address to function." },
      { id: 'D', text: "Change the Service type to ExternalName pointing to localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`. A Service routes traffic to pods matching its label selector. If there is a typo or mismatch between `spec.selector` and pod labels, the Service creates an empty `Endpoints` (or `EndpointSlice`) list. Checking `kubectl get endpoints` confirms whether any pod IPs are registered.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service Routing", "Service Debugging", "Security Compliance"]
  },
  {
    id: "k8s-cka-314",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service Routing Failures and Endpoints Mismatch: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Service Routing to troubleshoot why traffic sent to a Kubernetes ClusterIP Service returns connection refused or timeouts even though backend pods are running.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing missing endpoints caused by selector label mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`." },
      { id: 'B', text: "Delete the kubelet systemd service on all worker nodes." },
      { id: 'C', text: "Assume the Service object requires a public static IP address to function." },
      { id: 'D', text: "Change the Service type to ExternalName pointing to localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`. A Service routes traffic to pods matching its label selector. If there is a typo or mismatch between `spec.selector` and pod labels, the Service creates an empty `Endpoints` (or `EndpointSlice`) list. Checking `kubectl get endpoints` confirms whether any pod IPs are registered.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service Routing", "Service Debugging", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-315",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service Routing Failures and Endpoints Mismatch: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Service Routing to troubleshoot why traffic sent to a Kubernetes ClusterIP Service returns connection refused or timeouts even though backend pods are running.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing missing endpoints caused by selector label mismatches is under consideration.",
    options: [
      { id: 'A', text: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`." },
      { id: 'B', text: "Delete the kubelet systemd service on all worker nodes." },
      { id: 'C', text: "Assume the Service object requires a public static IP address to function." },
      { id: 'D', text: "Change the Service type to ExternalName pointing to localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify that the Service `spec.selector` labels exactly match the pod `metadata.labels` by inspecting `kubectl get endpoints &lt;service-name&gt;`. A Service routes traffic to pods matching its label selector. If there is a typo or mismatch between `spec.selector` and pod labels, the Service creates an empty `Endpoints` (or `EndpointSlice`) list. Checking `kubectl get endpoints` confirms whether any pod IPs are registered.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service Routing", "Service Debugging", "Resilience Failure"]
  },
  {
    id: "k8s-cka-316",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kube-proxy Failure and iptables Synchronization: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates kube-proxy Diagnostics to investigate why network traffic to ClusterIP Services fails on a specific worker node while working on all other nodes.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing kube-proxy DaemonSet pods and iptables/IPVS rule programming is under consideration.",
    options: [
      { id: 'A', text: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules." },
      { id: 'B', text: "Reinstall the Linux operating system on the master control plane node." },
      { id: 'C', text: "Delete all PersistentVolumes across the entire cluster." },
      { id: 'D', text: "Assume the pod CIDR range must be doubled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules. The `kube-proxy` DaemonSet manages networking rules (iptables or IPVS) on every node to translate Service virtual IPs to backend pod IPs. If `kube-proxy` crashes or cannot sync rules on a specific node, Service routing on that node breaks while remaining functional elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Dr Failover"]
  },
  {
    id: "k8s-cka-317",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kube-proxy Failure and iptables Synchronization: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates kube-proxy Diagnostics to investigate why network traffic to ClusterIP Services fails on a specific worker node while working on all other nodes.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing kube-proxy DaemonSet pods and iptables/IPVS rule programming is under consideration.",
    options: [
      { id: 'A', text: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules." },
      { id: 'B', text: "Reinstall the Linux operating system on the master control plane node." },
      { id: 'C', text: "Delete all PersistentVolumes across the entire cluster." },
      { id: 'D', text: "Assume the pod CIDR range must be doubled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules. The `kube-proxy` DaemonSet manages networking rules (iptables or IPVS) on every node to translate Service virtual IPs to backend pod IPs. If `kube-proxy` crashes or cannot sync rules on a specific node, Service routing on that node breaks while remaining functional elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "High Load Scale"]
  },
  {
    id: "k8s-cka-318",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kube-proxy Failure and iptables Synchronization: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates kube-proxy Diagnostics to investigate why network traffic to ClusterIP Services fails on a specific worker node while working on all other nodes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing kube-proxy DaemonSet pods and iptables/IPVS rule programming is under consideration.",
    options: [
      { id: 'A', text: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules." },
      { id: 'B', text: "Reinstall the Linux operating system on the master control plane node." },
      { id: 'C', text: "Delete all PersistentVolumes across the entire cluster." },
      { id: 'D', text: "Assume the pod CIDR range must be doubled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules. The `kube-proxy` DaemonSet manages networking rules (iptables or IPVS) on every node to translate Service virtual IPs to backend pod IPs. If `kube-proxy` crashes or cannot sync rules on a specific node, Service routing on that node breaks while remaining functional elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Security Compliance"]
  },
  {
    id: "k8s-cka-319",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kube-proxy Failure and iptables Synchronization: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates kube-proxy Diagnostics to investigate why network traffic to ClusterIP Services fails on a specific worker node while working on all other nodes.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing kube-proxy DaemonSet pods and iptables/IPVS rule programming is under consideration.",
    options: [
      { id: 'A', text: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules." },
      { id: 'B', text: "Reinstall the Linux operating system on the master control plane node." },
      { id: 'C', text: "Delete all PersistentVolumes across the entire cluster." },
      { id: 'D', text: "Assume the pod CIDR range must be doubled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules. The `kube-proxy` DaemonSet manages networking rules (iptables or IPVS) on every node to translate Service virtual IPs to backend pod IPs. If `kube-proxy` crashes or cannot sync rules on a specific node, Service routing on that node breaks while remaining functional elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-320",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kube-proxy Failure and iptables Synchronization: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates kube-proxy Diagnostics to investigate why network traffic to ClusterIP Services fails on a specific worker node while working on all other nodes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing kube-proxy DaemonSet pods and iptables/IPVS rule programming is under consideration.",
    options: [
      { id: 'A', text: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules." },
      { id: 'B', text: "Reinstall the Linux operating system on the master control plane node." },
      { id: 'C', text: "Delete all PersistentVolumes across the entire cluster." },
      { id: 'D', text: "Assume the pod CIDR range must be doubled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Check the status and logs of the `kube-proxy` pod running on that specific node and inspect host iptables/IPVS rules. The `kube-proxy` DaemonSet manages networking rules (iptables or IPVS) on every node to translate Service virtual IPs to backend pod IPs. If `kube-proxy` crashes or cannot sync rules on a specific node, Service routing on that node breaks while remaining functional elsewhere.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/",
    tags: ["kube-proxy Diagnostics", "kube-proxy", "Resilience Failure"]
  },
  {
    id: "k8s-cka-321",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CNI Plugin Failures and Network Partitioning: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Container Network Interface to troubleshoot an error where new pods cannot be created on a worker node, failing with `NetworkPluginNotReady` or CNI IP allocation errors.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Troubleshooting CNI pod crashes, IPAM pool exhaustion, and veth pairing is under consideration.",
    options: [
      { id: 'A', text: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted." },
      { id: 'B', text: "Reboot the etcd database instances." },
      { id: 'C', text: "Manually delete the loopback interface on the host node." },
      { id: 'D', text: "Change the Kubernetes API server bind port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted. The CNI plugin configures network interfaces and IP addresses for pods. If the CNI daemon crashes, host CNI configuration files in `/etc/cni/net.d/` are missing, or the node IPAM pool runs out of assignable pod IPs, the kubelet reports `NetworkPluginNotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Container Network Interface", "CNI Diagnostics", "Dr Failover"]
  },
  {
    id: "k8s-cka-322",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CNI Plugin Failures and Network Partitioning: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Container Network Interface to troubleshoot an error where new pods cannot be created on a worker node, failing with `NetworkPluginNotReady` or CNI IP allocation errors.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Troubleshooting CNI pod crashes, IPAM pool exhaustion, and veth pairing is under consideration.",
    options: [
      { id: 'A', text: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted." },
      { id: 'B', text: "Reboot the etcd database instances." },
      { id: 'C', text: "Manually delete the loopback interface on the host node." },
      { id: 'D', text: "Change the Kubernetes API server bind port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted. The CNI plugin configures network interfaces and IP addresses for pods. If the CNI daemon crashes, host CNI configuration files in `/etc/cni/net.d/` are missing, or the node IPAM pool runs out of assignable pod IPs, the kubelet reports `NetworkPluginNotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Container Network Interface", "CNI Diagnostics", "High Load Scale"]
  },
  {
    id: "k8s-cka-323",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CNI Plugin Failures and Network Partitioning: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Container Network Interface to troubleshoot an error where new pods cannot be created on a worker node, failing with `NetworkPluginNotReady` or CNI IP allocation errors.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Troubleshooting CNI pod crashes, IPAM pool exhaustion, and veth pairing is under consideration.",
    options: [
      { id: 'A', text: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted." },
      { id: 'B', text: "Reboot the etcd database instances." },
      { id: 'C', text: "Manually delete the loopback interface on the host node." },
      { id: 'D', text: "Change the Kubernetes API server bind port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted. The CNI plugin configures network interfaces and IP addresses for pods. If the CNI daemon crashes, host CNI configuration files in `/etc/cni/net.d/` are missing, or the node IPAM pool runs out of assignable pod IPs, the kubelet reports `NetworkPluginNotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Container Network Interface", "CNI Diagnostics", "Security Compliance"]
  },
  {
    id: "k8s-cka-324",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CNI Plugin Failures and Network Partitioning: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Container Network Interface to troubleshoot an error where new pods cannot be created on a worker node, failing with `NetworkPluginNotReady` or CNI IP allocation errors.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Troubleshooting CNI pod crashes, IPAM pool exhaustion, and veth pairing is under consideration.",
    options: [
      { id: 'A', text: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted." },
      { id: 'B', text: "Reboot the etcd database instances." },
      { id: 'C', text: "Manually delete the loopback interface on the host node." },
      { id: 'D', text: "Change the Kubernetes API server bind port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted. The CNI plugin configures network interfaces and IP addresses for pods. If the CNI daemon crashes, host CNI configuration files in `/etc/cni/net.d/` are missing, or the node IPAM pool runs out of assignable pod IPs, the kubelet reports `NetworkPluginNotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Container Network Interface", "CNI Diagnostics", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-325",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CNI Plugin Failures and Network Partitioning: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Container Network Interface to troubleshoot an error where new pods cannot be created on a worker node, failing with `NetworkPluginNotReady` or CNI IP allocation errors.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Troubleshooting CNI pod crashes, IPAM pool exhaustion, and veth pairing is under consideration.",
    options: [
      { id: 'A', text: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted." },
      { id: 'B', text: "Reboot the etcd database instances." },
      { id: 'C', text: "Manually delete the loopback interface on the host node." },
      { id: 'D', text: "Change the Kubernetes API server bind port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect CNI DaemonSet pod logs (e.g., Calico, Flannel, Cilium) and verify that the node pod CIDR allocation is not exhausted. The CNI plugin configures network interfaces and IP addresses for pods. If the CNI daemon crashes, host CNI configuration files in `/etc/cni/net.d/` are missing, or the node IPAM pool runs out of assignable pod IPs, the kubelet reports `NetworkPluginNotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["Container Network Interface", "CNI Diagnostics", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_14;
