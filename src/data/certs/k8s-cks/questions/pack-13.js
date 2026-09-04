export const K8S_CKS_QUESTIONS_13 = [
  {
    id: "k8s-cks-301",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Host Isolation to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Eliminating host namespace sharing to prevent container escape is under consideration.",
    options: [
      { id: 'A', text: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec." },
      { id: 'B', text: "Set hostNetwork: true and hostPID: true on all application pods." },
      { id: 'C', text: "Run containers in the host root cgroup namespace." },
      { id: 'D', text: "Mount `/proc` and `/sys` from the host directly into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation", "Host Namespaces", "Dr Failover"]
  },
  {
    id: "k8s-cks-302",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Host Isolation to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Eliminating host namespace sharing to prevent container escape is under consideration.",
    options: [
      { id: 'A', text: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec." },
      { id: 'B', text: "Set hostNetwork: true and hostPID: true on all application pods." },
      { id: 'C', text: "Run containers in the host root cgroup namespace." },
      { id: 'D', text: "Mount `/proc` and `/sys` from the host directly into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation", "Host Namespaces", "High Load Scale"]
  },
  {
    id: "k8s-cks-303",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Host Isolation to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Eliminating host namespace sharing to prevent container escape is under consideration.",
    options: [
      { id: 'A', text: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec." },
      { id: 'B', text: "Set hostNetwork: true and hostPID: true on all application pods." },
      { id: 'C', text: "Run containers in the host root cgroup namespace." },
      { id: 'D', text: "Mount `/proc` and `/sys` from the host directly into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation", "Host Namespaces", "Security Compliance"]
  },
  {
    id: "k8s-cks-304",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Host Isolation to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Eliminating host namespace sharing to prevent container escape is under consideration.",
    options: [
      { id: 'A', text: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec." },
      { id: 'B', text: "Set hostNetwork: true and hostPID: true on all application pods." },
      { id: 'C', text: "Run containers in the host root cgroup namespace." },
      { id: 'D', text: "Mount `/proc` and `/sys` from the host directly into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation", "Host Namespaces", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-305",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Host Isolation to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Eliminating host namespace sharing to prevent container escape is under consideration.",
    options: [
      { id: 'A', text: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec." },
      { id: 'B', text: "Set hostNetwork: true and hostPID: true on all application pods." },
      { id: 'C', text: "Run containers in the host root cgroup namespace." },
      { id: 'D', text: "Mount `/proc` and `/sys` from the host directly into the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation", "Host Namespaces", "Resilience Failure"]
  },
  {
    id: "k8s-cks-306",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Storage Security to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Restricting hostPath volume mounts to prevent arbitrary host filesystem access is under consideration.",
    options: [
      { id: 'A', text: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead." },
      { id: 'B', text: "Allow containers to mount `/` with read-write hostPath access." },
      { id: 'C', text: "Share the root directory of the master node with all pod developers." },
      { id: 'D', text: "Store application database files on hostPath volumes in `/root/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security", "hostPath Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-307",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Storage Security to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Restricting hostPath volume mounts to prevent arbitrary host filesystem access is under consideration.",
    options: [
      { id: 'A', text: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead." },
      { id: 'B', text: "Allow containers to mount `/` with read-write hostPath access." },
      { id: 'C', text: "Share the root directory of the master node with all pod developers." },
      { id: 'D', text: "Store application database files on hostPath volumes in `/root/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security", "hostPath Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-308",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Storage Security to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Restricting hostPath volume mounts to prevent arbitrary host filesystem access is under consideration.",
    options: [
      { id: 'A', text: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead." },
      { id: 'B', text: "Allow containers to mount `/` with read-write hostPath access." },
      { id: 'C', text: "Share the root directory of the master node with all pod developers." },
      { id: 'D', text: "Store application database files on hostPath volumes in `/root/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security", "hostPath Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-309",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Storage Security to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Restricting hostPath volume mounts to prevent arbitrary host filesystem access is under consideration.",
    options: [
      { id: 'A', text: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead." },
      { id: 'B', text: "Allow containers to mount `/` with read-write hostPath access." },
      { id: 'C', text: "Share the root directory of the master node with all pod developers." },
      { id: 'D', text: "Store application database files on hostPath volumes in `/root/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security", "hostPath Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-310",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Storage Security to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Restricting hostPath volume mounts to prevent arbitrary host filesystem access is under consideration.",
    options: [
      { id: 'A', text: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead." },
      { id: 'B', text: "Allow containers to mount `/` with read-write hostPath access." },
      { id: 'C', text: "Share the root directory of the master node with all pod developers." },
      { id: 'D', text: "Store application database files on hostPath volumes in `/root/`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security", "hostPath Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-311",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates OS Hardening to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Minimizing host OS packages, disabling unused services, and closing unused ports is under consideration.",
    options: [
      { id: 'A', text: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates." },
      { id: 'B', text: "Install development compilers, debugging suites, and game servers on production worker nodes." },
      { id: 'C', text: "Disable operating system firewall rules entirely." },
      { id: 'D', text: "Allow SSH login using empty passwords for root users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening", "OS Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-312",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates OS Hardening to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Minimizing host OS packages, disabling unused services, and closing unused ports is under consideration.",
    options: [
      { id: 'A', text: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates." },
      { id: 'B', text: "Install development compilers, debugging suites, and game servers on production worker nodes." },
      { id: 'C', text: "Disable operating system firewall rules entirely." },
      { id: 'D', text: "Allow SSH login using empty passwords for root users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening", "OS Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-313",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates OS Hardening to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Minimizing host OS packages, disabling unused services, and closing unused ports is under consideration.",
    options: [
      { id: 'A', text: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates." },
      { id: 'B', text: "Install development compilers, debugging suites, and game servers on production worker nodes." },
      { id: 'C', text: "Disable operating system firewall rules entirely." },
      { id: 'D', text: "Allow SSH login using empty passwords for root users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening", "OS Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-314",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates OS Hardening to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Minimizing host OS packages, disabling unused services, and closing unused ports is under consideration.",
    options: [
      { id: 'A', text: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates." },
      { id: 'B', text: "Install development compilers, debugging suites, and game servers on production worker nodes." },
      { id: 'C', text: "Disable operating system firewall rules entirely." },
      { id: 'D', text: "Allow SSH login using empty passwords for root users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening", "OS Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-315",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates OS Hardening to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Minimizing host OS packages, disabling unused services, and closing unused ports is under consideration.",
    options: [
      { id: 'A', text: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates." },
      { id: 'B', text: "Install development compilers, debugging suites, and game servers on production worker nodes." },
      { id: 'C', text: "Disable operating system firewall rules entirely." },
      { id: 'D', text: "Allow SSH login using empty passwords for root users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening", "OS Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-316",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Kernel Capabilities to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Preventing dangerous capabilities like CAP_SYS_ADMIN and CAP_NET_ADMIN is under consideration.",
    options: [
      { id: 'A', text: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards." },
      { id: 'B', text: "Grant `CAP_SYS_ADMIN` to all application containers by default." },
      { id: 'C', text: "Add all Linux capabilities to the container process." },
      { id: 'D', text: "Run the container with `--cap-add=ALL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Dr Failover"]
  },
  {
    id: "k8s-cks-317",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Kernel Capabilities to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Preventing dangerous capabilities like CAP_SYS_ADMIN and CAP_NET_ADMIN is under consideration.",
    options: [
      { id: 'A', text: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards." },
      { id: 'B', text: "Grant `CAP_SYS_ADMIN` to all application containers by default." },
      { id: 'C', text: "Add all Linux capabilities to the container process." },
      { id: 'D', text: "Run the container with `--cap-add=ALL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities", "Linux Capabilities", "High Load Scale"]
  },
  {
    id: "k8s-cks-318",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Kernel Capabilities to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Preventing dangerous capabilities like CAP_SYS_ADMIN and CAP_NET_ADMIN is under consideration.",
    options: [
      { id: 'A', text: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards." },
      { id: 'B', text: "Grant `CAP_SYS_ADMIN` to all application containers by default." },
      { id: 'C', text: "Add all Linux capabilities to the container process." },
      { id: 'D', text: "Run the container with `--cap-add=ALL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Security Compliance"]
  },
  {
    id: "k8s-cks-319",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Kernel Capabilities to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Preventing dangerous capabilities like CAP_SYS_ADMIN and CAP_NET_ADMIN is under consideration.",
    options: [
      { id: 'A', text: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards." },
      { id: 'B', text: "Grant `CAP_SYS_ADMIN` to all application containers by default." },
      { id: 'C', text: "Add all Linux capabilities to the container process." },
      { id: 'D', text: "Run the container with `--cap-add=ALL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-320",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Kernel Capabilities to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Preventing dangerous capabilities like CAP_SYS_ADMIN and CAP_NET_ADMIN is under consideration.",
    options: [
      { id: 'A', text: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards." },
      { id: 'B', text: "Grant `CAP_SYS_ADMIN` to all application containers by default." },
      { id: 'C', text: "Add all Linux capabilities to the container process." },
      { id: 'D', text: "Run the container with `--cap-add=ALL`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Resilience Failure"]
  },
  {
    id: "k8s-cks-321",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Port Auditing to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Investigating listening network sockets and open files with ss, netstat, and lsof is under consideration.",
    options: [
      { id: 'A', text: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs." },
      { id: 'B', text: "Reboot the worker node and assume unauthorized listeners will not restart." },
      { id: 'C', text: "Query the Kubernetes API server for pod names without checking host ports." },
      { id: 'D', text: "Inspect DNS query logs exclusively without examining listening TCP sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing", "Port Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-322",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Port Auditing to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Investigating listening network sockets and open files with ss, netstat, and lsof is under consideration.",
    options: [
      { id: 'A', text: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs." },
      { id: 'B', text: "Reboot the worker node and assume unauthorized listeners will not restart." },
      { id: 'C', text: "Query the Kubernetes API server for pod names without checking host ports." },
      { id: 'D', text: "Inspect DNS query logs exclusively without examining listening TCP sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing", "Port Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-323",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Port Auditing to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Investigating listening network sockets and open files with ss, netstat, and lsof is under consideration.",
    options: [
      { id: 'A', text: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs." },
      { id: 'B', text: "Reboot the worker node and assume unauthorized listeners will not restart." },
      { id: 'C', text: "Query the Kubernetes API server for pod names without checking host ports." },
      { id: 'D', text: "Inspect DNS query logs exclusively without examining listening TCP sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing", "Port Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-324",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Port Auditing to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Investigating listening network sockets and open files with ss, netstat, and lsof is under consideration.",
    options: [
      { id: 'A', text: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs." },
      { id: 'B', text: "Reboot the worker node and assume unauthorized listeners will not restart." },
      { id: 'C', text: "Query the Kubernetes API server for pod names without checking host ports." },
      { id: 'D', text: "Inspect DNS query logs exclusively without examining listening TCP sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing", "Port Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-325",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Port Auditing to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Investigating listening network sockets and open files with ss, netstat, and lsof is under consideration.",
    options: [
      { id: 'A', text: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs." },
      { id: 'B', text: "Reboot the worker node and assume unauthorized listeners will not restart." },
      { id: 'C', text: "Query the Kubernetes API server for pod names without checking host ports." },
      { id: 'D', text: "Inspect DNS query logs exclusively without examining listening TCP sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing", "Port Auditing", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_13;
