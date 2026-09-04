export const K8S_CKS_QUESTIONS_19 = [
  {
    id: "k8s-cks-451",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Container Drift to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Identifying container drift and modified binaries using diff and integrity checkers is under consideration.",
    options: [
      { id: 'A', text: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image." },
      { id: 'B', text: "Assume running containers never deviate from their original base images." },
      { id: 'C', text: "Inspect the container uptime metric in Prometheus." },
      { id: 'D', text: "Restart the container immediately, erasing all forensic evidence." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift", "Container Drift", "Dr Failover"]
  },
  {
    id: "k8s-cks-452",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Container Drift to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Identifying container drift and modified binaries using diff and integrity checkers is under consideration.",
    options: [
      { id: 'A', text: "Assume running containers never deviate from their original base images." },
      { id: 'B', text: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image." },
      { id: 'C', text: "Restart the container immediately, erasing all forensic evidence." },
      { id: 'D', text: "Inspect the container uptime metric in Prometheus." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift", "Container Drift", "High Load Scale"]
  },
  {
    id: "k8s-cks-453",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Container Drift to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Identifying container drift and modified binaries using diff and integrity checkers is under consideration.",
    options: [
      { id: 'A', text: "Assume running containers never deviate from their original base images." },
      { id: 'B', text: "Inspect the container uptime metric in Prometheus." },
      { id: 'C', text: "Restart the container immediately, erasing all forensic evidence." },
      { id: 'D', text: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift", "Container Drift", "Security Compliance"]
  },
  {
    id: "k8s-cks-454",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Container Drift to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Identifying container drift and modified binaries using diff and integrity checkers is under consideration.",
    options: [
      { id: 'A', text: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image." },
      { id: 'B', text: "Restart the container immediately, erasing all forensic evidence." },
      { id: 'C', text: "Inspect the container uptime metric in Prometheus." },
      { id: 'D', text: "Assume running containers never deviate from their original base images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift", "Container Drift", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-455",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Drift and Filesystem Anomalies: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Container Drift to determine whether an attacker who gained execution inside a running container has modified application binaries or installed unauthorized backdoor packages.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Identifying container drift and modified binaries using diff and integrity checkers is under consideration.",
    options: [
      { id: 'A', text: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image." },
      { id: 'B', text: "Assume running containers never deviate from their original base images." },
      { id: 'C', text: "Restart the container immediately, erasing all forensic evidence." },
      { id: 'D', text: "Inspect the container uptime metric in Prometheus." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `crictl diff &lt;container-id&gt;` (or equivalent container runtime diff) to compare the running container filesystem against its base image. Container immutability dictates that container filesystems should not drift from their original image layers. Executing `crictl diff` exposes newly created, modified, or deleted files in the container read-write layer, uncovering installed backdoors or tampered libraries.",
    referenceUrl: "https://github.com/kubernetes-sigs/cri-tools",
    tags: ["Container Drift", "Container Drift", "Resilience Failure"]
  },
  {
    id: "k8s-cks-456",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates CRI Security to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Hardening containerd and CRI-O configurations and socket permissions is under consideration.",
    options: [
      { id: 'A', text: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions." },
      { id: 'B', text: "Set permissions on containerd.sock to 777 to allow any user to launch containers." },
      { id: 'C', text: "Expose the containerd socket over an unauthenticated TCP port on 0.0.0.0." },
      { id: 'D', text: "Disable containerd authentication mechanisms." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security", "CRI Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-457",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates CRI Security to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Hardening containerd and CRI-O configurations and socket permissions is under consideration.",
    options: [
      { id: 'A', text: "Expose the containerd socket over an unauthenticated TCP port on 0.0.0.0." },
      { id: 'B', text: "Set permissions on containerd.sock to 777 to allow any user to launch containers." },
      { id: 'C', text: "Disable containerd authentication mechanisms." },
      { id: 'D', text: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security", "CRI Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-458",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates CRI Security to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Hardening containerd and CRI-O configurations and socket permissions is under consideration.",
    options: [
      { id: 'A', text: "Set permissions on containerd.sock to 777 to allow any user to launch containers." },
      { id: 'B', text: "Expose the containerd socket over an unauthenticated TCP port on 0.0.0.0." },
      { id: 'C', text: "Disable containerd authentication mechanisms." },
      { id: 'D', text: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security", "CRI Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-459",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates CRI Security to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Hardening containerd and CRI-O configurations and socket permissions is under consideration.",
    options: [
      { id: 'A', text: "Disable containerd authentication mechanisms." },
      { id: 'B', text: "Set permissions on containerd.sock to 777 to allow any user to launch containers." },
      { id: 'C', text: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions." },
      { id: 'D', text: "Expose the containerd socket over an unauthenticated TCP port on 0.0.0.0." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security", "CRI Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-460",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Container Runtimes: containerd and CRI-O: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates CRI Security to prevent unauthorized processes on a worker node from interacting with the container runtime Unix domain socket (`containerd.sock`).",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Hardening containerd and CRI-O configurations and socket permissions is under consideration.",
    options: [
      { id: 'A', text: "Expose the containerd socket over an unauthenticated TCP port on 0.0.0.0." },
      { id: 'B', text: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions." },
      { id: 'C', text: "Set permissions on containerd.sock to 777 to allow any user to launch containers." },
      { id: 'D', text: "Disable containerd authentication mechanisms." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Restrict permissions on the containerd socket (`/run/containerd/containerd.sock`) strictly to `root:root` with `0660` permissions. Access to the Container Runtime Interface (CRI) socket (`containerd.sock` or `crio.sock`) grants full control over the container engine, allowing callers to spawn privileged containers with host mounts. Securing the socket with restrictive file permissions (`root:root`, `0660`) prevents local privilege escalation.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["CRI Security", "CRI Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-461",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates eBPF Security to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Deep kernel visibility and inline syscall blocking with eBPF tools is under consideration.",
    options: [
      { id: 'A', text: "Rely solely on asynchronous log analysis engines that process events minutes after execution." },
      { id: 'B', text: "Disable eBPF support in the Linux kernel." },
      { id: 'C', text: "Reboot the cluster worker nodes whenever anomalous traffic occurs." },
      { id: 'D', text: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security", "eBPF Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-462",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates eBPF Security to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Deep kernel visibility and inline syscall blocking with eBPF tools is under consideration.",
    options: [
      { id: 'A', text: "Disable eBPF support in the Linux kernel." },
      { id: 'B', text: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention." },
      { id: 'C', text: "Rely solely on asynchronous log analysis engines that process events minutes after execution." },
      { id: 'D', text: "Reboot the cluster worker nodes whenever anomalous traffic occurs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security", "eBPF Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-463",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates eBPF Security to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Deep kernel visibility and inline syscall blocking with eBPF tools is under consideration.",
    options: [
      { id: 'A', text: "Rely solely on asynchronous log analysis engines that process events minutes after execution." },
      { id: 'B', text: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention." },
      { id: 'C', text: "Disable eBPF support in the Linux kernel." },
      { id: 'D', text: "Reboot the cluster worker nodes whenever anomalous traffic occurs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security", "eBPF Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-464",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates eBPF Security to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Deep kernel visibility and inline syscall blocking with eBPF tools is under consideration.",
    options: [
      { id: 'A', text: "Disable eBPF support in the Linux kernel." },
      { id: 'B', text: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention." },
      { id: 'C', text: "Reboot the cluster worker nodes whenever anomalous traffic occurs." },
      { id: 'D', text: "Rely solely on asynchronous log analysis engines that process events minutes after execution." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security", "eBPF Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-465",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "eBPF-Based Observability and Security (Tetragon / Cilium): Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates eBPF Security to block malicious system calls and process executions in real time directly inside the Linux kernel before syscall execution completes.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Deep kernel visibility and inline syscall blocking with eBPF tools is under consideration.",
    options: [
      { id: 'A', text: "Disable eBPF support in the Linux kernel." },
      { id: 'B', text: "Rely solely on asynchronous log analysis engines that process events minutes after execution." },
      { id: 'C', text: "Reboot the cluster worker nodes whenever anomalous traffic occurs." },
      { id: 'D', text: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an eBPF security observability and enforcement tool (such as Cilium Tetragon) with tracing policies to enforce kernel-level execution prevention. eBPF programs run directly inside the Linux kernel with minimal overhead. Tools like Tetragon use eBPF to monitor and enforce security policies at the kernel level, allowing immediate termination or blocking of unauthorized system calls (like privilege escalation or namespace manipulation) before damage occurs.",
    referenceUrl: "https://tetragon.cilium.io/",
    tags: ["eBPF Security", "eBPF Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-466",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates SIEM Integration to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Shipping Kubernetes audit logs to centralized SIEM solutions via Webhook backends is under consideration.",
    options: [
      { id: 'A', text: "Manually download audit log text files once a week and upload them via email." },
      { id: 'B', text: "Store audit logs on a temporary worker node RAM disk." },
      { id: 'C', text: "Disable audit logging to reduce SIEM ingestion licensing costs." },
      { id: 'D', text: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration", "Audit Webhooks", "Dr Failover"]
  },
  {
    id: "k8s-cks-467",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates SIEM Integration to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Shipping Kubernetes audit logs to centralized SIEM solutions via Webhook backends is under consideration.",
    options: [
      { id: 'A', text: "Store audit logs on a temporary worker node RAM disk." },
      { id: 'B', text: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint." },
      { id: 'C', text: "Disable audit logging to reduce SIEM ingestion licensing costs." },
      { id: 'D', text: "Manually download audit log text files once a week and upload them via email." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration", "Audit Webhooks", "High Load Scale"]
  },
  {
    id: "k8s-cks-468",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates SIEM Integration to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Shipping Kubernetes audit logs to centralized SIEM solutions via Webhook backends is under consideration.",
    options: [
      { id: 'A', text: "Disable audit logging to reduce SIEM ingestion licensing costs." },
      { id: 'B', text: "Store audit logs on a temporary worker node RAM disk." },
      { id: 'C', text: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint." },
      { id: 'D', text: "Manually download audit log text files once a week and upload them via email." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration", "Audit Webhooks", "Security Compliance"]
  },
  {
    id: "k8s-cks-469",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates SIEM Integration to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Shipping Kubernetes audit logs to centralized SIEM solutions via Webhook backends is under consideration.",
    options: [
      { id: 'A', text: "Manually download audit log text files once a week and upload them via email." },
      { id: 'B', text: "Store audit logs on a temporary worker node RAM disk." },
      { id: 'C', text: "Disable audit logging to reduce SIEM ingestion licensing costs." },
      { id: 'D', text: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration", "Audit Webhooks", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-470",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Centralized Audit Log Ingestion and SIEM Integration: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates SIEM Integration to stream Kubernetes API server audit logs in real time to an external Security Information and Event Management (SIEM) system for threat correlation.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Shipping Kubernetes audit logs to centralized SIEM solutions via Webhook backends is under consideration.",
    options: [
      { id: 'A', text: "Manually download audit log text files once a week and upload them via email." },
      { id: 'B', text: "Store audit logs on a temporary worker node RAM disk." },
      { id: 'C', text: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint." },
      { id: 'D', text: "Disable audit logging to reduce SIEM ingestion licensing costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Audit Webhook backend in `kube-apiserver` (`--audit-webhook-config-file`) to stream audit events over HTTPS to the SIEM ingestion endpoint. The API server supports an Audit Webhook backend that forwards structured JSON audit events to external HTTP endpoints in real time. This allows SIEM systems (like Splunk, Elastic, or Google Cloud Security Operations) to correlate Kubernetes events with enterprise security telemetry.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["SIEM Integration", "Audit Webhooks", "Resilience Failure"]
  },
  {
    id: "k8s-cks-471",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Node Health to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Detecting kernel deadlocks, hardware corruption, and disk issues with Node Problem Detector is under consideration.",
    options: [
      { id: 'A', text: "Wait for physical server hardware to completely crash before taking action." },
      { id: 'B', text: "Rely exclusively on standard kubelet heartbeats." },
      { id: 'C', text: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events." },
      { id: 'D', text: "Disable kernel message logging in systemd journal." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health", "Node Problem Detector", "Dr Failover"]
  },
  {
    id: "k8s-cks-472",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Node Health to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Detecting kernel deadlocks, hardware corruption, and disk issues with Node Problem Detector is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on standard kubelet heartbeats." },
      { id: 'B', text: "Disable kernel message logging in systemd journal." },
      { id: 'C', text: "Wait for physical server hardware to completely crash before taking action." },
      { id: 'D', text: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health", "Node Problem Detector", "High Load Scale"]
  },
  {
    id: "k8s-cks-473",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Node Health to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Detecting kernel deadlocks, hardware corruption, and disk issues with Node Problem Detector is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on standard kubelet heartbeats." },
      { id: 'B', text: "Wait for physical server hardware to completely crash before taking action." },
      { id: 'C', text: "Disable kernel message logging in systemd journal." },
      { id: 'D', text: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health", "Node Problem Detector", "Security Compliance"]
  },
  {
    id: "k8s-cks-474",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Node Health to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Detecting kernel deadlocks, hardware corruption, and disk issues with Node Problem Detector is under consideration.",
    options: [
      { id: 'A', text: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events." },
      { id: 'B', text: "Rely exclusively on standard kubelet heartbeats." },
      { id: 'C', text: "Disable kernel message logging in systemd journal." },
      { id: 'D', text: "Wait for physical server hardware to completely crash before taking action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health", "Node Problem Detector", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-475",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Node Problem Detector and Custom Health Monitors: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Node Health to automatically detect host kernel issues (such as kernel deadlocks or filesystem corruption) and report them as Kubernetes node conditions.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Detecting kernel deadlocks, hardware corruption, and disk issues with Node Problem Detector is under consideration.",
    options: [
      { id: 'A', text: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events." },
      { id: 'B', text: "Wait for physical server hardware to completely crash before taking action." },
      { id: 'C', text: "Rely exclusively on standard kubelet heartbeats." },
      { id: 'D', text: "Disable kernel message logging in systemd journal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `Node Problem Detector` (NPD) DaemonSet to monitor host system logs and translate kernel errors into Node conditions and events. The Node Problem Detector (NPD) runs as a DaemonSet, reading host logs (`dmesg`, `journald`, syslog) for known infrastructure issues (kernel deadlocks, corrupted filesystems, thermal throttling). It exposes these as Kubernetes Node conditions, allowing the scheduler to avoid broken nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitor-node-health/#node-problem-detector",
    tags: ["Node Health", "Node Problem Detector", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_19;
