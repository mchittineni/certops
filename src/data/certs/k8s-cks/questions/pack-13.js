export const K8S_CKS_QUESTIONS_13 = [
  {
    id: "k8s-cks-301",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Keep `hostNetwork: false` but set `hostPID: true` so the sidecar can see the app's processes." },
      { id: 'B', text: "Keep the host namespaces off and mount `/proc` from the host so metrics can still be read." },
      { id: 'C', text: "Keep `hostNetwork`, `hostPID` and `hostIPC` at their secure default of false in the pod spec." },
      { id: 'D', text: "Set `shareProcessNamespace: true` so the containers share a namespace with each other." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation","Host Namespaces","Dr Failover"]
  },
  {
    id: "k8s-cks-302",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Set `shareProcessNamespace: true` so the containers share a namespace with each other." },
      { id: 'B', text: "Keep `hostNetwork: false` but set `hostPID: true` so the sidecar can see the app's processes." },
      { id: 'C', text: "Keep `hostNetwork`, `hostPID` and `hostIPC` at their secure default of false in the pod spec." },
      { id: 'D', text: "Keep the host namespaces off and mount `/proc` from the host so metrics can still be read." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation","Host Namespaces","High Load Scale"]
  },
  {
    id: "k8s-cks-303",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Keep `hostNetwork`, `hostPID` and `hostIPC` at their secure default of false in the pod spec." },
      { id: 'B', text: "Set `shareProcessNamespace: true` so the containers share a namespace with each other." },
      { id: 'C', text: "Keep `hostNetwork: false` but set `hostPID: true` so the sidecar can see the app's processes." },
      { id: 'D', text: "Keep the host namespaces off and mount `/proc` from the host so metrics can still be read." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation","Host Namespaces","Security Compliance"]
  },
  {
    id: "k8s-cks-304",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Keep the host namespaces off and mount `/proc` from the host so metrics can still be read." },
      { id: 'B', text: "Keep `hostNetwork: false` but set `hostPID: true` so the sidecar can see the app's processes." },
      { id: 'C', text: "Set `shareProcessNamespace: true` so the containers share a namespace with each other." },
      { id: 'D', text: "Keep `hostNetwork`, `hostPID` and `hostIPC` at their secure default of false in the pod spec." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation","Host Namespaces","Hybrid Migration"]
  },
  {
    id: "k8s-cks-305",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling Host Access: hostNetwork, hostPID, hostIPC: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent a container from snooping on host network packets, inspecting host process IDs, or accessing host shared memory.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Keep `hostNetwork: false` but set `hostPID: true` so the sidecar can see the app's processes." },
      { id: 'B', text: "Keep the host namespaces off and mount `/proc` from the host so metrics can still be read." },
      { id: 'C', text: "Keep `hostNetwork`, `hostPID` and `hostIPC` at their secure default of false in the pod spec." },
      { id: 'D', text: "Set `shareProcessNamespace: true` so the containers share a namespace with each other." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ensure `hostNetwork: false`, `hostPID: false`, and `hostIPC: false` are set (the secure defaults) in the pod spec. Enabling `hostNetwork`, `hostPID`, or `hostIPC` breaks container isolation by sharing the host node's network, process, or IPC namespaces. A container with `hostPID: true` can see and signal processes running on the host, paving the way for complete container escape.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Host Isolation","Host Namespaces","Resilience Failure"]
  },
  {
    id: "k8s-cks-306",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Allow `hostPath` volumes but set `readOnly: true` on every mount so that the node itself cannot be written to." },
      { id: 'B', text: "Allow `hostPath` volumes only under `/var/lib/app`, enforced by a Kyverno validate policy." },
      { id: 'C', text: "Reject `hostPath` volumes by admission — the restricted Pod Security level — and use PVCs or `emptyDir`." },
      { id: 'D', text: "Reject `hostPath` volumes with a LimitRange on the namespace that omits the volume type." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security","hostPath Security","Dr Failover"]
  },
  {
    id: "k8s-cks-307",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Reject `hostPath` volumes with a LimitRange on the namespace that omits the volume type." },
      { id: 'B', text: "Allow `hostPath` volumes only under `/var/lib/app`, enforced by a Kyverno validate policy." },
      { id: 'C', text: "Allow `hostPath` volumes but set `readOnly: true` on every mount so that the node itself cannot be written to." },
      { id: 'D', text: "Reject `hostPath` volumes by admission — the restricted Pod Security level — and use PVCs or `emptyDir`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security","hostPath Security","High Load Scale"]
  },
  {
    id: "k8s-cks-308",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Allow `hostPath` volumes only under `/var/lib/app`, enforced by a Kyverno validate policy." },
      { id: 'B', text: "Allow `hostPath` volumes but set `readOnly: true` on every mount so that the node itself cannot be written to." },
      { id: 'C', text: "Reject `hostPath` volumes with a LimitRange on the namespace that omits the volume type." },
      { id: 'D', text: "Reject `hostPath` volumes by admission — the restricted Pod Security level — and use PVCs or `emptyDir`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security","hostPath Security","Security Compliance"]
  },
  {
    id: "k8s-cks-309",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Reject `hostPath` volumes by admission — the restricted Pod Security level — and use PVCs or `emptyDir`." },
      { id: 'B', text: "Allow `hostPath` volumes but set `readOnly: true` on every mount so that the node itself cannot be written to." },
      { id: 'C', text: "Allow `hostPath` volumes only under `/var/lib/app`, enforced by a Kyverno validate policy." },
      { id: 'D', text: "Reject `hostPath` volumes with a LimitRange on the namespace that omits the volume type." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security","hostPath Security","Hybrid Migration"]
  },
  {
    id: "k8s-cks-310",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "HostPath Volume Restriction and Alternatives: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent a pod from mounting the host `/etc/shadow` file or Docker/containerd socket and gaining root host takeover.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Reject `hostPath` volumes by admission — the restricted Pod Security level — and use PVCs or `emptyDir`." },
      { id: 'B', text: "Allow `hostPath` volumes but set `readOnly: true` on every mount so that the node itself cannot be written to." },
      { id: 'C', text: "Allow `hostPath` volumes only under `/var/lib/app`, enforced by a Kyverno validate policy." },
      { id: 'D', text: "Reject `hostPath` volumes with a LimitRange on the namespace that omits the volume type." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prohibit `hostPath` volume mounts via admission control (e.g., Pod Security Admission restricted level), using PVCs or emptyDir instead. `hostPath` mounts allow pods to access the underlying host node filesystem. An attacker with permissions to create a pod mounting `/` can modify host SSH keys, read hashed passwords, or talk to the container runtime socket to achieve root escape. Restricting `hostPath` is a fundamental requirement of Pod Security Standards.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#hostpath",
    tags: ["Storage Security","hostPath Security","Resilience Failure"]
  },
  {
    id: "k8s-cks-311",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Disable unused services, remove build toolchains, close ports with the host firewall, and patch the kernel." },
      { id: 'B', text: "Disable the unused services, keep the build toolchain for debugging, and patch only on the quarterly cycle." },
      { id: 'C', text: "Disable the host firewall so kube-proxy owns the rules, and patch the kernel on each reboot." },
      { id: 'D', text: "Disable password SSH in favour of keys, and leave the remaining packages for the image owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening","OS Hardening","Dr Failover"]
  },
  {
    id: "k8s-cks-312",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Disable the host firewall so kube-proxy owns the rules, and patch the kernel on each reboot." },
      { id: 'B', text: "Disable the unused services, keep the build toolchain for debugging, and patch only on the quarterly cycle." },
      { id: 'C', text: "Disable password SSH in favour of keys, and leave the remaining packages for the image owner." },
      { id: 'D', text: "Disable unused services, remove build toolchains, close ports with the host firewall, and patch the kernel." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening","OS Hardening","High Load Scale"]
  },
  {
    id: "k8s-cks-313",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Disable unused services, remove build toolchains, close ports with the host firewall, and patch the kernel." },
      { id: 'B', text: "Disable the host firewall so kube-proxy owns the rules, and patch the kernel on each reboot." },
      { id: 'C', text: "Disable password SSH in favour of keys, and leave the remaining packages for the image owner." },
      { id: 'D', text: "Disable the unused services, keep the build toolchain for debugging, and patch only on the quarterly cycle." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening","OS Hardening","Security Compliance"]
  },
  {
    id: "k8s-cks-314",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Disable unused services, remove build toolchains, close ports with the host firewall, and patch the kernel." },
      { id: 'B', text: "Disable the unused services, keep the build toolchain for debugging, and patch only on the quarterly cycle." },
      { id: 'C', text: "Disable the host firewall so kube-proxy owns the rules, and patch the kernel on each reboot." },
      { id: 'D', text: "Disable password SSH in favour of keys, and leave the remaining packages for the image owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening","OS Hardening","Hybrid Migration"]
  },
  {
    id: "k8s-cks-315",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Node Operating System Hardening: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to harden Linux worker node operating systems against unauthorized lateral movement and privilege escalation.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Disable the host firewall so kube-proxy owns the rules, and patch the kernel on each reboot." },
      { id: 'B', text: "Disable the unused services, keep the build toolchain for debugging, and patch only on the quarterly cycle." },
      { id: 'C', text: "Disable password SSH in favour of keys, and leave the remaining packages for the image owner." },
      { id: 'D', text: "Disable unused services, remove build toolchains, close ports with the host firewall, and patch the kernel." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Disable unused systemd services, remove unnecessary compilers/packages, close unused ports with UFW/iptables, and apply security kernel updates. Hardening the host OS minimizes the attack surface. Removing unneeded binaries (compilers, interpreters), turning off unused network services, enforcing restrictive firewalls, and maintaining regular kernel security patching ensures an attacker who breaches a container cannot easily exploit host weaknesses.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#securing-nodes",
    tags: ["OS Hardening","OS Hardening","Resilience Failure"]
  },
  {
    id: "k8s-cks-316",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Deny `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in the securityContext, per the restricted Pod Security Standard." },
      { id: 'B', text: "Set `privileged: false` with `allowPrivilegeEscalation: true`, per the baseline Pod Security Standard level." },
      { id: 'C', text: "Add `CAP_NET_ADMIN` back after dropping all, so the workload keeps its own network setup." },
      { id: 'D', text: "Set `procMount: Default` and `hostPID: false`, which removes the capabilities from the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities","Linux Capabilities","Dr Failover"]
  },
  {
    id: "k8s-cks-317",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Deny `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in the securityContext, per the restricted Pod Security Standard." },
      { id: 'B', text: "Set `privileged: false` with `allowPrivilegeEscalation: true`, per the baseline Pod Security Standard level." },
      { id: 'C', text: "Add `CAP_NET_ADMIN` back after dropping all, so the workload keeps its own network setup." },
      { id: 'D', text: "Set `procMount: Default` and `hostPID: false`, which removes the capabilities from the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities","Linux Capabilities","High Load Scale"]
  },
  {
    id: "k8s-cks-318",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `procMount: Default` and `hostPID: false`, which removes the capabilities from the container." },
      { id: 'B', text: "Add `CAP_NET_ADMIN` back after dropping all, so the workload keeps its own network setup." },
      { id: 'C', text: "Set `privileged: false` with `allowPrivilegeEscalation: true`, per the baseline Pod Security Standard level." },
      { id: 'D', text: "Deny `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in the securityContext, per the restricted Pod Security Standard." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities","Linux Capabilities","Security Compliance"]
  },
  {
    id: "k8s-cks-319",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Deny `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in the securityContext, per the restricted Pod Security Standard." },
      { id: 'B', text: "Set `privileged: false` with `allowPrivilegeEscalation: true`, per the baseline Pod Security Standard level." },
      { id: 'C', text: "Add `CAP_NET_ADMIN` back after dropping all, so the workload keeps its own network setup." },
      { id: 'D', text: "Set `procMount: Default` and `hostPID: false`, which removes the capabilities from the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities","Linux Capabilities","Hybrid Migration"]
  },
  {
    id: "k8s-cks-320",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux Capabilities: Restricting CAP_SYS_ADMIN: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to prevent a container from mounting filesystems, creating cgroups, or modifying network routing tables inside the host kernel.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Deny `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in the securityContext, per the restricted Pod Security Standard." },
      { id: 'B', text: "Set `privileged: false` with `allowPrivilegeEscalation: true`, per the baseline Pod Security Standard level." },
      { id: 'C', text: "Add `CAP_NET_ADMIN` back after dropping all, so the workload keeps its own network setup." },
      { id: 'D', text: "Set `procMount: Default` and `hostPID: false`, which removes the capabilities from the container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Explicitly disallow `CAP_SYS_ADMIN` and `CAP_NET_ADMIN` in container securityContext, adhering to restricted Pod Security Standards. `CAP_SYS_ADMIN` is often considered equivalent to root because it grants broad kernel privileges (mounting filesystems, interacting with device drivers, configuring namespaces). Restricting dangerous capabilities prevents attackers from breaking out of container sandboxes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Kernel Capabilities","Linux Capabilities","Resilience Failure"]
  },
  {
    id: "k8s-cks-321",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run `ss -tulpn` and `lsof -i` on the node to trace each listening socket to its process." },
      { id: 'B', text: "Run `crictl ps` and compare the container ports against the pods the API server reports." },
      { id: 'C', text: "Run `kubectl get pods -o wide --all-namespaces` and check which pods declare host ports." },
      { id: 'D', text: "Run `iptables -t nat -L KUBE-SERVICES` and read the ports kube-proxy has programmed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing","Port Auditing","Dr Failover"]
  },
  {
    id: "k8s-cks-322",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run `ss -tulpn` and `lsof -i` on the node to trace each listening socket to its process." },
      { id: 'B', text: "Run `crictl ps` and compare the container ports against the pods the API server reports." },
      { id: 'C', text: "Run `kubectl get pods -o wide --all-namespaces` and check which pods declare host ports." },
      { id: 'D', text: "Run `iptables -t nat -L KUBE-SERVICES` and read the ports kube-proxy has programmed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing","Port Auditing","High Load Scale"]
  },
  {
    id: "k8s-cks-323",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `crictl ps` and compare the container ports against the pods the API server reports." },
      { id: 'B', text: "Run `ss -tulpn` and `lsof -i` on the node to trace each listening socket to its process." },
      { id: 'C', text: "Run `iptables -t nat -L KUBE-SERVICES` and read the ports kube-proxy has programmed." },
      { id: 'D', text: "Run `kubectl get pods -o wide --all-namespaces` and check which pods declare host ports." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing","Port Auditing","Security Compliance"]
  },
  {
    id: "k8s-cks-324",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run `ss -tulpn` and `lsof -i` on the node to trace each listening socket to its process." },
      { id: 'B', text: "Run `crictl ps` and compare the container ports against the pods the API server reports." },
      { id: 'C', text: "Run `kubectl get pods -o wide --all-namespaces` and check which pods declare host ports." },
      { id: 'D', text: "Run `iptables -t nat -L KUBE-SERVICES` and read the ports kube-proxy has programmed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing","Port Auditing","Hybrid Migration"]
  },
  {
    id: "k8s-cks-325",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Auditing Open Ports and Processes with ss and lsof: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to identify unauthorized network listeners and unknown processes running on a Kubernetes worker node.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run `iptables -t nat -L KUBE-SERVICES` and read the ports kube-proxy has programmed." },
      { id: 'B', text: "Run `kubectl get pods -o wide --all-namespaces` and check which pods declare host ports." },
      { id: 'C', text: "Run `crictl ps` and compare the container ports against the pods the API server reports." },
      { id: 'D', text: "Run `ss -tulpn` and `lsof -i` on the node to trace each listening socket to its process." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `ss -tulpn` (or `netstat -tulpn`) and `lsof -i` to inspect listening sockets and trace them back to specific process IDs. The command `ss -tulpn` displays all listening TCP and UDP sockets along with the process IDs and program names owning them. Cross-referencing listening ports against known cluster components (kubelet 10250, NodePort range 30000-32767) pinpoints unauthorized backdoors or rogue services.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/ports-and-protocols/",
    tags: ["Port Auditing","Port Auditing","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_13;
