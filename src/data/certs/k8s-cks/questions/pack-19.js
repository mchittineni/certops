export const K8S_CKS_QUESTIONS_19 = [
  {
    id: "k8s-cks-451",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `crictl diff &lt;container-id&gt;` to compare the running filesystem against the image." },
      { id: 'B', text: "Run `crictl inspect &lt;container-id&gt;` and compare the reported image digest with the registry." },
      { id: 'C', text: "Run `kubectl exec` with `find / -newer /etc/hostname` to list files written since the start." },
      { id: 'D', text: "Run `crictl images --digests` and check that the node's cached layers still match the registry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift","Container Drift","Dr Failover"]
  },
  {
    id: "k8s-cks-452",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run `kubectl exec` with `find / -newer /etc/hostname` to list files written since the start." },
      { id: 'B', text: "Run `crictl images --digests` and check that the node's cached layers still match the registry." },
      { id: 'C', text: "Run `crictl diff &lt;container-id&gt;` to compare the running filesystem against the image." },
      { id: 'D', text: "Run `crictl inspect &lt;container-id&gt;` and compare the reported image digest with the registry." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift","Container Drift","High Load Scale"]
  },
  {
    id: "k8s-cks-453",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubectl exec` with `find / -newer /etc/hostname` to list files written since the start." },
      { id: 'B', text: "Run `crictl diff &lt;container-id&gt;` to compare the running filesystem against the image." },
      { id: 'C', text: "Run `crictl inspect &lt;container-id&gt;` and compare the reported image digest with the registry." },
      { id: 'D', text: "Run `crictl images --digests` and check that the node's cached layers still match the registry." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift","Container Drift","Security Compliance"]
  },
  {
    id: "k8s-cks-454",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run `crictl diff &lt;container-id&gt;` to compare the running filesystem against the image." },
      { id: 'B', text: "Run `kubectl exec` with `find / -newer /etc/hostname` to list files written since the start." },
      { id: 'C', text: "Run `crictl images --digests` and check that the node's cached layers still match the registry." },
      { id: 'D', text: "Run `crictl inspect &lt;container-id&gt;` and compare the reported image digest with the registry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift","Container Drift","Hybrid Migration"]
  },
  {
    id: "k8s-cks-455",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run `crictl diff &lt;container-id&gt;` to compare the running filesystem against the image." },
      { id: 'B', text: "Run `kubectl exec` with `find / -newer /etc/hostname` to list files written since the start." },
      { id: 'C', text: "Run `crictl images --digests` and check that the node's cached layers still match the registry." },
      { id: 'D', text: "Run `crictl inspect &lt;container-id&gt;` and compare the reported image digest with the registry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift","Container Drift","Resilience Failure"]
  },
  {
    id: "k8s-cks-456",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Restrict `/run/containerd/containerd.sock` to `root:root` with mode `0660`." },
      { id: 'B', text: "Restrict `/run/containerd/containerd.sock` to `root:docker` with mode `0666`." },
      { id: 'C', text: "Expose containerd over TCP on the node's private address with client certificates." },
      { id: 'D', text: "Mount the socket into privileged pods read-only so they cannot create containers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security","CRI Security","Dr Failover"]
  },
  {
    id: "k8s-cks-457",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Expose containerd over TCP on the node's private address with client certificates." },
      { id: 'B', text: "Mount the socket into privileged pods read-only so they cannot create containers." },
      { id: 'C', text: "Restrict `/run/containerd/containerd.sock` to `root:root` with mode `0660`." },
      { id: 'D', text: "Restrict `/run/containerd/containerd.sock` to `root:docker` with mode `0666`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security","CRI Security","High Load Scale"]
  },
  {
    id: "k8s-cks-458",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Mount the socket into privileged pods read-only so they cannot create containers." },
      { id: 'B', text: "Restrict `/run/containerd/containerd.sock` to `root:docker` with mode `0666`." },
      { id: 'C', text: "Restrict `/run/containerd/containerd.sock` to `root:root` with mode `0660`." },
      { id: 'D', text: "Expose containerd over TCP on the node's private address with client certificates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security","CRI Security","Security Compliance"]
  },
  {
    id: "k8s-cks-459",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Restrict `/run/containerd/containerd.sock` to `root:docker` with mode `0666`." },
      { id: 'B', text: "Restrict `/run/containerd/containerd.sock` to `root:root` with mode `0660`." },
      { id: 'C', text: "Mount the socket into privileged pods read-only so they cannot create containers." },
      { id: 'D', text: "Expose containerd over TCP on the node's private address with client certificates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security","CRI Security","Hybrid Migration"]
  },
  {
    id: "k8s-cks-460",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Restrict `/run/containerd/containerd.sock` to `root:root` with mode `0660`." },
      { id: 'B', text: "Restrict `/run/containerd/containerd.sock` to `root:docker` with mode `0666`." },
      { id: 'C', text: "Expose containerd over TCP on the node's private address with client certificates." },
      { id: 'D', text: "Mount the socket into privileged pods read-only so they cannot create containers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security","CRI Security","Resilience Failure"]
  },
  {
    id: "k8s-cks-461",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run Falco with its kernel module driver and alert on the matching syscall rule instead." },
      { id: 'B', text: "Run a Cilium NetworkPolicy at L7 so that the anomalous calls are dropped before they are ever made." },
      { id: 'C', text: "Run an eBPF enforcement tool such as Cilium Tetragon with tracing policies that block the exec." },
      { id: 'D', text: "Run an audit webhook that evaluates each API call and rejects the anomalous ones inline." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security","eBPF Security","Dr Failover"]
  },
  {
    id: "k8s-cks-462",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run an audit webhook that evaluates each API call and rejects the anomalous ones inline." },
      { id: 'B', text: "Run Falco with its kernel module driver and alert on the matching syscall rule instead." },
      { id: 'C', text: "Run an eBPF enforcement tool such as Cilium Tetragon with tracing policies that block the exec." },
      { id: 'D', text: "Run a Cilium NetworkPolicy at L7 so that the anomalous calls are dropped before they are ever made." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security","eBPF Security","High Load Scale"]
  },
  {
    id: "k8s-cks-463",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run an eBPF enforcement tool such as Cilium Tetragon with tracing policies that block the exec." },
      { id: 'B', text: "Run an audit webhook that evaluates each API call and rejects the anomalous ones inline." },
      { id: 'C', text: "Run Falco with its kernel module driver and alert on the matching syscall rule instead." },
      { id: 'D', text: "Run a Cilium NetworkPolicy at L7 so that the anomalous calls are dropped before they are ever made." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security","eBPF Security","Security Compliance"]
  },
  {
    id: "k8s-cks-464",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run a Cilium NetworkPolicy at L7 so that the anomalous calls are dropped before they are ever made." },
      { id: 'B', text: "Run Falco with its kernel module driver and alert on the matching syscall rule instead." },
      { id: 'C', text: "Run an audit webhook that evaluates each API call and rejects the anomalous ones inline." },
      { id: 'D', text: "Run an eBPF enforcement tool such as Cilium Tetragon with tracing policies that block the exec." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security","eBPF Security","Hybrid Migration"]
  },
  {
    id: "k8s-cks-465",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run a Cilium NetworkPolicy at L7 so that the anomalous calls are dropped before they are ever made." },
      { id: 'B', text: "Run an audit webhook that evaluates each API call and rejects the anomalous ones inline." },
      { id: 'C', text: "Run an eBPF enforcement tool such as Cilium Tetragon with tracing policies that block the exec." },
      { id: 'D', text: "Run Falco with its kernel module driver and alert on the matching syscall rule instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security","eBPF Security","Resilience Failure"]
  },
  {
    id: "k8s-cks-466",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Configure the audit log backend to a host path and ship the file with a node log agent." },
      { id: 'B', text: "Configure the audit policy to `Metadata` level only, so the volume stays within the SIEM licence." },
      { id: 'C', text: "Configure an audit webhook backend on kube-apiserver to stream events to the SIEM over HTTPS." },
      { id: 'D', text: "Configure a sidecar on the API server pod that tails the audit file and posts it onward." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration","Audit Webhooks","Dr Failover"]
  },
  {
    id: "k8s-cks-467",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Configure the audit policy to `Metadata` level only, so the volume stays within the SIEM licence." },
      { id: 'B', text: "Configure the audit log backend to a host path and ship the file with a node log agent." },
      { id: 'C', text: "Configure a sidecar on the API server pod that tails the audit file and posts it onward." },
      { id: 'D', text: "Configure an audit webhook backend on kube-apiserver to stream events to the SIEM over HTTPS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration","Audit Webhooks","High Load Scale"]
  },
  {
    id: "k8s-cks-468",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Configure a sidecar on the API server pod that tails the audit file and posts it onward." },
      { id: 'B', text: "Configure an audit webhook backend on kube-apiserver to stream events to the SIEM over HTTPS." },
      { id: 'C', text: "Configure the audit policy to `Metadata` level only, so the volume stays within the SIEM licence." },
      { id: 'D', text: "Configure the audit log backend to a host path and ship the file with a node log agent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration","Audit Webhooks","Security Compliance"]
  },
  {
    id: "k8s-cks-469",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Configure the audit log backend to a host path and ship the file with a node log agent." },
      { id: 'B', text: "Configure the audit policy to `Metadata` level only, so the volume stays within the SIEM licence." },
      { id: 'C', text: "Configure an audit webhook backend on kube-apiserver to stream events to the SIEM over HTTPS." },
      { id: 'D', text: "Configure a sidecar on the API server pod that tails the audit file and posts it onward." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration","Audit Webhooks","Hybrid Migration"]
  },
  {
    id: "k8s-cks-470",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Configure the audit log backend to a host path and ship the file with a node log agent." },
      { id: 'B', text: "Configure an audit webhook backend on kube-apiserver to stream events to the SIEM over HTTPS." },
      { id: 'C', text: "Configure a sidecar on the API server pod that tails the audit file and posts it onward." },
      { id: 'D', text: "Configure the audit policy to `Metadata` level only, so the volume stays within the SIEM licence." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration","Audit Webhooks","Resilience Failure"]
  },
  {
    id: "k8s-cks-471",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Rely on the kubelet's own heartbeat, which marks the node NotReady when the kernel stalls." },
      { id: 'B', text: "Run the Node Problem Detector DaemonSet so kernel log errors surface as node conditions." },
      { id: 'C', text: "Run a DaemonSet that tails the journal and raises Prometheus alerts on kernel messages." },
      { id: 'D', text: "Set the kubelet's eviction thresholds so the node drains itself when the kernel degrades." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health","Node Problem Detector","Dr Failover"]
  },
  {
    id: "k8s-cks-472",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run a DaemonSet that tails the journal and raises Prometheus alerts on kernel messages." },
      { id: 'B', text: "Run the Node Problem Detector DaemonSet so kernel log errors surface as node conditions." },
      { id: 'C', text: "Set the kubelet's eviction thresholds so the node drains itself when the kernel degrades." },
      { id: 'D', text: "Rely on the kubelet's own heartbeat, which marks the node NotReady when the kernel stalls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health","Node Problem Detector","High Load Scale"]
  },
  {
    id: "k8s-cks-473",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set the kubelet's eviction thresholds so the node drains itself when the kernel degrades." },
      { id: 'B', text: "Run a DaemonSet that tails the journal and raises Prometheus alerts on kernel messages." },
      { id: 'C', text: "Run the Node Problem Detector DaemonSet so kernel log errors surface as node conditions." },
      { id: 'D', text: "Rely on the kubelet's own heartbeat, which marks the node NotReady when the kernel stalls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health","Node Problem Detector","Security Compliance"]
  },
  {
    id: "k8s-cks-474",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run the Node Problem Detector DaemonSet so kernel log errors surface as node conditions." },
      { id: 'B', text: "Set the kubelet's eviction thresholds so the node drains itself when the kernel degrades." },
      { id: 'C', text: "Run a DaemonSet that tails the journal and raises Prometheus alerts on kernel messages." },
      { id: 'D', text: "Rely on the kubelet's own heartbeat, which marks the node NotReady when the kernel stalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health","Node Problem Detector","Hybrid Migration"]
  },
  {
    id: "k8s-cks-475",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run the Node Problem Detector DaemonSet so kernel log errors surface as node conditions." },
      { id: 'B', text: "Run a DaemonSet that tails the journal and raises Prometheus alerts on kernel messages." },
      { id: 'C', text: "Rely on the kubelet's own heartbeat, which marks the node NotReady when the kernel stalls." },
      { id: 'D', text: "Set the kubelet's eviction thresholds so the node drains itself when the kernel degrades." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health","Node Problem Detector","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_19;
