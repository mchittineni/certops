export const K8S_CKAD_QUESTIONS_17 = [
  {
    id: "k8s-ckad-401",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: runAsNonRoot and runAsUser: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Pod Security to prevent a container process from running as the root superuser (UID 0) inside the Linux container namespace.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Enforcing non-root container process execution via SecurityContext is under consideration.",
    options: [
      { id: 'A', text: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level." },
      { id: 'B', text: "Configure `securityContext` with `privileged: true`." },
      { id: 'C', text: "Omit securityContext and let the container image default to root." },
      { id: 'D', text: "Set `allowPrivilegeEscalation: true`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level. The `securityContext` controls security settings on pods and containers. Setting `runAsNonRoot: true` forces the kubelet to validate that the image does not execute as UID 0; if it does, the container fails to start, mitigating privilege escalation attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod Security", "SecurityContext", "Dr Failover"]
  },
  {
    id: "k8s-ckad-402",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: runAsNonRoot and runAsUser: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Pod Security to prevent a container process from running as the root superuser (UID 0) inside the Linux container namespace.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Enforcing non-root container process execution via SecurityContext is under consideration.",
    options: [
      { id: 'A', text: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level." },
      { id: 'B', text: "Configure `securityContext` with `privileged: true`." },
      { id: 'C', text: "Omit securityContext and let the container image default to root." },
      { id: 'D', text: "Set `allowPrivilegeEscalation: true`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level. The `securityContext` controls security settings on pods and containers. Setting `runAsNonRoot: true` forces the kubelet to validate that the image does not execute as UID 0; if it does, the container fails to start, mitigating privilege escalation attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod Security", "SecurityContext", "High Load Scale"]
  },
  {
    id: "k8s-ckad-403",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: runAsNonRoot and runAsUser: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Pod Security to prevent a container process from running as the root superuser (UID 0) inside the Linux container namespace.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Enforcing non-root container process execution via SecurityContext is under consideration.",
    options: [
      { id: 'A', text: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level." },
      { id: 'B', text: "Configure `securityContext` with `privileged: true`." },
      { id: 'C', text: "Omit securityContext and let the container image default to root." },
      { id: 'D', text: "Set `allowPrivilegeEscalation: true`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level. The `securityContext` controls security settings on pods and containers. Setting `runAsNonRoot: true` forces the kubelet to validate that the image does not execute as UID 0; if it does, the container fails to start, mitigating privilege escalation attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod Security", "SecurityContext", "Security Compliance"]
  },
  {
    id: "k8s-ckad-404",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: runAsNonRoot and runAsUser: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Pod Security to prevent a container process from running as the root superuser (UID 0) inside the Linux container namespace.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Enforcing non-root container process execution via SecurityContext is under consideration.",
    options: [
      { id: 'A', text: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level." },
      { id: 'B', text: "Configure `securityContext` with `privileged: true`." },
      { id: 'C', text: "Omit securityContext and let the container image default to root." },
      { id: 'D', text: "Set `allowPrivilegeEscalation: true`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level. The `securityContext` controls security settings on pods and containers. Setting `runAsNonRoot: true` forces the kubelet to validate that the image does not execute as UID 0; if it does, the container fails to start, mitigating privilege escalation attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod Security", "SecurityContext", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-405",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: runAsNonRoot and runAsUser: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Pod Security to prevent a container process from running as the root superuser (UID 0) inside the Linux container namespace.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Enforcing non-root container process execution via SecurityContext is under consideration.",
    options: [
      { id: 'A', text: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level." },
      { id: 'B', text: "Configure `securityContext` with `privileged: true`." },
      { id: 'C', text: "Omit securityContext and let the container image default to root." },
      { id: 'D', text: "Set `allowPrivilegeEscalation: true`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `securityContext` with `runAsNonRoot: true` and `runAsUser: 1000` at the pod or container level. The `securityContext` controls security settings on pods and containers. Setting `runAsNonRoot: true` forces the kubelet to validate that the image does not execute as UID 0; if it does, the container fails to start, mitigating privilege escalation attacks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Pod Security", "SecurityContext", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-406",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: readOnlyRootFilesystem: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Filesystem Security to prevent attackers from modifying container binaries, injecting rootkits, or writing malicious scripts to the container root filesystem.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Enforcing immutable read-only root filesystems on containers is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary." },
      { id: 'B', text: "Set the filesystem permissions to 777 on the host operating system." },
      { id: 'C', text: "Allow full write access to the entire root filesystem across all containers." },
      { id: 'D', text: "Disable container SELinux and AppArmor profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary. Setting `readOnlyRootFilesystem: true` mounts the container root filesystem as read-only. Any attempt to write, modify, or download binaries into `/` is rejected. If the application needs temporary scratch space (e.g., `/tmp`), an `emptyDir` volume can be mounted specifically at that path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Dr Failover"]
  },
  {
    id: "k8s-ckad-407",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: readOnlyRootFilesystem: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Filesystem Security to prevent attackers from modifying container binaries, injecting rootkits, or writing malicious scripts to the container root filesystem.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Enforcing immutable read-only root filesystems on containers is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary." },
      { id: 'B', text: "Set the filesystem permissions to 777 on the host operating system." },
      { id: 'C', text: "Allow full write access to the entire root filesystem across all containers." },
      { id: 'D', text: "Disable container SELinux and AppArmor profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary. Setting `readOnlyRootFilesystem: true` mounts the container root filesystem as read-only. Any attempt to write, modify, or download binaries into `/` is rejected. If the application needs temporary scratch space (e.g., `/tmp`), an `emptyDir` volume can be mounted specifically at that path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "High Load Scale"]
  },
  {
    id: "k8s-ckad-408",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: readOnlyRootFilesystem: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Filesystem Security to prevent attackers from modifying container binaries, injecting rootkits, or writing malicious scripts to the container root filesystem.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Enforcing immutable read-only root filesystems on containers is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary." },
      { id: 'B', text: "Set the filesystem permissions to 777 on the host operating system." },
      { id: 'C', text: "Allow full write access to the entire root filesystem across all containers." },
      { id: 'D', text: "Disable container SELinux and AppArmor profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary. Setting `readOnlyRootFilesystem: true` mounts the container root filesystem as read-only. Any attempt to write, modify, or download binaries into `/` is rejected. If the application needs temporary scratch space (e.g., `/tmp`), an `emptyDir` volume can be mounted specifically at that path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Security Compliance"]
  },
  {
    id: "k8s-ckad-409",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: readOnlyRootFilesystem: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Filesystem Security to prevent attackers from modifying container binaries, injecting rootkits, or writing malicious scripts to the container root filesystem.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Enforcing immutable read-only root filesystems on containers is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary." },
      { id: 'B', text: "Set the filesystem permissions to 777 on the host operating system." },
      { id: 'C', text: "Allow full write access to the entire root filesystem across all containers." },
      { id: 'D', text: "Disable container SELinux and AppArmor profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary. Setting `readOnlyRootFilesystem: true` mounts the container root filesystem as read-only. Any attempt to write, modify, or download binaries into `/` is rejected. If the application needs temporary scratch space (e.g., `/tmp`), an `emptyDir` volume can be mounted specifically at that path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-410",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: readOnlyRootFilesystem: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Filesystem Security to prevent attackers from modifying container binaries, injecting rootkits, or writing malicious scripts to the container root filesystem.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Enforcing immutable read-only root filesystems on containers is under consideration.",
    options: [
      { id: 'A', text: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary." },
      { id: 'B', text: "Set the filesystem permissions to 777 on the host operating system." },
      { id: 'C', text: "Allow full write access to the entire root filesystem across all containers." },
      { id: 'D', text: "Disable container SELinux and AppArmor profiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `readOnlyRootFilesystem: true` in the container `securityContext`, mounting writable `emptyDir` volumes only where necessary. Setting `readOnlyRootFilesystem: true` mounts the container root filesystem as read-only. Any attempt to write, modify, or download binaries into `/` is rejected. If the application needs temporary scratch space (e.g., `/tmp`), an `emptyDir` volume can be mounted specifically at that path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Filesystem Security", "readOnlyRootFilesystem", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-411",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: drop ALL and add Specific: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Linux Capabilities to harden a container by stripping all default Linux kernel capabilities and adding back only `NET_BIND_SERVICE` to bind low ports.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Dropping all default Linux capabilities and granting only required privileges is under consideration.",
    options: [
      { id: 'A', text: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`." },
      { id: 'B', text: "Grant full `CAP_SYS_ADMIN` capability to the container process." },
      { id: 'C', text: "Enable `privileged: true` to bypass capability checks." },
      { id: 'D', text: "Drop all network interfaces from the pod namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`. Linux capabilities break root privileges into distinct units. Best security practice mandates dropping all default capabilities (`drop: [\"ALL\"]`) and adding back only the specific granular capability required (e.g., `NET_BIND_SERVICE` to bind to port 80/443 without root).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Linux Capabilities", "Linux Capabilities", "Dr Failover"]
  },
  {
    id: "k8s-ckad-412",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: drop ALL and add Specific: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Linux Capabilities to harden a container by stripping all default Linux kernel capabilities and adding back only `NET_BIND_SERVICE` to bind low ports.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Dropping all default Linux capabilities and granting only required privileges is under consideration.",
    options: [
      { id: 'A', text: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`." },
      { id: 'B', text: "Grant full `CAP_SYS_ADMIN` capability to the container process." },
      { id: 'C', text: "Enable `privileged: true` to bypass capability checks." },
      { id: 'D', text: "Drop all network interfaces from the pod namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`. Linux capabilities break root privileges into distinct units. Best security practice mandates dropping all default capabilities (`drop: [\"ALL\"]`) and adding back only the specific granular capability required (e.g., `NET_BIND_SERVICE` to bind to port 80/443 without root).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Linux Capabilities", "Linux Capabilities", "High Load Scale"]
  },
  {
    id: "k8s-ckad-413",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: drop ALL and add Specific: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Linux Capabilities to harden a container by stripping all default Linux kernel capabilities and adding back only `NET_BIND_SERVICE` to bind low ports.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Dropping all default Linux capabilities and granting only required privileges is under consideration.",
    options: [
      { id: 'A', text: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`." },
      { id: 'B', text: "Grant full `CAP_SYS_ADMIN` capability to the container process." },
      { id: 'C', text: "Enable `privileged: true` to bypass capability checks." },
      { id: 'D', text: "Drop all network interfaces from the pod namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`. Linux capabilities break root privileges into distinct units. Best security practice mandates dropping all default capabilities (`drop: [\"ALL\"]`) and adding back only the specific granular capability required (e.g., `NET_BIND_SERVICE` to bind to port 80/443 without root).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Linux Capabilities", "Linux Capabilities", "Security Compliance"]
  },
  {
    id: "k8s-ckad-414",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: drop ALL and add Specific: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Linux Capabilities to harden a container by stripping all default Linux kernel capabilities and adding back only `NET_BIND_SERVICE` to bind low ports.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Dropping all default Linux capabilities and granting only required privileges is under consideration.",
    options: [
      { id: 'A', text: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`." },
      { id: 'B', text: "Grant full `CAP_SYS_ADMIN` capability to the container process." },
      { id: 'C', text: "Enable `privileged: true` to bypass capability checks." },
      { id: 'D', text: "Drop all network interfaces from the pod namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`. Linux capabilities break root privileges into distinct units. Best security practice mandates dropping all default capabilities (`drop: [\"ALL\"]`) and adding back only the specific granular capability required (e.g., `NET_BIND_SERVICE` to bind to port 80/443 without root).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Linux Capabilities", "Linux Capabilities", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-415",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: drop ALL and add Specific: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Linux Capabilities to harden a container by stripping all default Linux kernel capabilities and adding back only `NET_BIND_SERVICE` to bind low ports.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Dropping all default Linux capabilities and granting only required privileges is under consideration.",
    options: [
      { id: 'A', text: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`." },
      { id: 'B', text: "Grant full `CAP_SYS_ADMIN` capability to the container process." },
      { id: 'C', text: "Enable `privileged: true` to bypass capability checks." },
      { id: 'D', text: "Drop all network interfaces from the pod namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `securityContext.capabilities`, specify `drop: [\"ALL\"]` and `add: [\"NET_BIND_SERVICE\"]`. Linux capabilities break root privileges into distinct units. Best security practice mandates dropping all default capabilities (`drop: [\"ALL\"]`) and adding back only the specific granular capability required (e.g., `NET_BIND_SERVICE` to bind to port 80/443 without root).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Linux Capabilities", "Linux Capabilities", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-416",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Resource Requests and Limits (CPU and Memory): Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Resource Management to ensure a web application is guaranteed 500m CPU and 512Mi memory while preventing it from consuming more than 1 CPU core and 1Gi memory.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring CPU and memory requests and limits for predictable pod scheduling is under consideration.",
    options: [
      { id: 'A', text: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`." },
      { id: 'B', text: "Omit resource requests to let the pod consume unlimited resources on any node." },
      { id: 'C', text: "Set CPU limit to 0 to enable infinite CPU bursts." },
      { id: 'D', text: "Set memory requests higher than memory limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`. `requests` determine the minimum compute resources guaranteed to the container for scheduling decisions by kube-scheduler. `limits` enforce maximum boundaries: CPU is throttled if exceeded, while exceeding memory limits leads to container termination by the OOM killer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource Management", "Resource Requests Limits", "Dr Failover"]
  },
  {
    id: "k8s-ckad-417",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Resource Requests and Limits (CPU and Memory): High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Resource Management to ensure a web application is guaranteed 500m CPU and 512Mi memory while preventing it from consuming more than 1 CPU core and 1Gi memory.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring CPU and memory requests and limits for predictable pod scheduling is under consideration.",
    options: [
      { id: 'A', text: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`." },
      { id: 'B', text: "Omit resource requests to let the pod consume unlimited resources on any node." },
      { id: 'C', text: "Set CPU limit to 0 to enable infinite CPU bursts." },
      { id: 'D', text: "Set memory requests higher than memory limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`. `requests` determine the minimum compute resources guaranteed to the container for scheduling decisions by kube-scheduler. `limits` enforce maximum boundaries: CPU is throttled if exceeded, while exceeding memory limits leads to container termination by the OOM killer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource Management", "Resource Requests Limits", "High Load Scale"]
  },
  {
    id: "k8s-ckad-418",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Resource Requests and Limits (CPU and Memory): Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Resource Management to ensure a web application is guaranteed 500m CPU and 512Mi memory while preventing it from consuming more than 1 CPU core and 1Gi memory.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring CPU and memory requests and limits for predictable pod scheduling is under consideration.",
    options: [
      { id: 'A', text: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`." },
      { id: 'B', text: "Omit resource requests to let the pod consume unlimited resources on any node." },
      { id: 'C', text: "Set CPU limit to 0 to enable infinite CPU bursts." },
      { id: 'D', text: "Set memory requests higher than memory limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`. `requests` determine the minimum compute resources guaranteed to the container for scheduling decisions by kube-scheduler. `limits` enforce maximum boundaries: CPU is throttled if exceeded, while exceeding memory limits leads to container termination by the OOM killer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource Management", "Resource Requests Limits", "Security Compliance"]
  },
  {
    id: "k8s-ckad-419",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Resource Requests and Limits (CPU and Memory): Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Resource Management to ensure a web application is guaranteed 500m CPU and 512Mi memory while preventing it from consuming more than 1 CPU core and 1Gi memory.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring CPU and memory requests and limits for predictable pod scheduling is under consideration.",
    options: [
      { id: 'A', text: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`." },
      { id: 'B', text: "Omit resource requests to let the pod consume unlimited resources on any node." },
      { id: 'C', text: "Set CPU limit to 0 to enable infinite CPU bursts." },
      { id: 'D', text: "Set memory requests higher than memory limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`. `requests` determine the minimum compute resources guaranteed to the container for scheduling decisions by kube-scheduler. `limits` enforce maximum boundaries: CPU is throttled if exceeded, while exceeding memory limits leads to container termination by the OOM killer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource Management", "Resource Requests Limits", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-420",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Resource Requests and Limits (CPU and Memory): Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Resource Management to ensure a web application is guaranteed 500m CPU and 512Mi memory while preventing it from consuming more than 1 CPU core and 1Gi memory.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring CPU and memory requests and limits for predictable pod scheduling is under consideration.",
    options: [
      { id: 'A', text: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`." },
      { id: 'B', text: "Omit resource requests to let the pod consume unlimited resources on any node." },
      { id: 'C', text: "Set CPU limit to 0 to enable infinite CPU bursts." },
      { id: 'D', text: "Set memory requests higher than memory limits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `resources.requests` with `cpu: \"500m\"`, `memory: \"512Mi\"` and `resources.limits` with `cpu: \"1\"`, `memory: \"1Gi\"`. `requests` determine the minimum compute resources guaranteed to the container for scheduling decisions by kube-scheduler. `limits` enforce maximum boundaries: CPU is throttled if exceeded, while exceeding memory limits leads to container termination by the OOM killer.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource Management", "Resource Requests Limits", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-421",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Quality of Service (QoS) Classes: Guaranteed, Burstable, BestEffort: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates QoS Classes to configure a mission-critical billing pod so that Kubernetes assigns it the `Guaranteed` QoS class to protect it from eviction during node memory pressure.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Determining pod QoS classes based on resource requests and limits configuration is under consideration.",
    options: [
      { id: 'A', text: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod." },
      { id: 'B', text: "Omit all resource requests and limits from the pod specification." },
      { id: 'C', text: "Set memory request to half of memory limit." },
      { id: 'D', text: "Label the pod with `qos: guaranteed` in metadata.labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod. Kubernetes automatically assigns one of three QoS classes based on resources: `Guaranteed` (requests equal limits for CPU and memory across all containers), `Burstable` (requests &lt; limits), and `BestEffort` (no requests or limits set). `Guaranteed` pods are evicted last during node resource starvation.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["QoS Classes", "QoS Classes", "Dr Failover"]
  },
  {
    id: "k8s-ckad-422",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Quality of Service (QoS) Classes: Guaranteed, Burstable, BestEffort: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates QoS Classes to configure a mission-critical billing pod so that Kubernetes assigns it the `Guaranteed` QoS class to protect it from eviction during node memory pressure.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Determining pod QoS classes based on resource requests and limits configuration is under consideration.",
    options: [
      { id: 'A', text: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod." },
      { id: 'B', text: "Omit all resource requests and limits from the pod specification." },
      { id: 'C', text: "Set memory request to half of memory limit." },
      { id: 'D', text: "Label the pod with `qos: guaranteed` in metadata.labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod. Kubernetes automatically assigns one of three QoS classes based on resources: `Guaranteed` (requests equal limits for CPU and memory across all containers), `Burstable` (requests &lt; limits), and `BestEffort` (no requests or limits set). `Guaranteed` pods are evicted last during node resource starvation.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["QoS Classes", "QoS Classes", "High Load Scale"]
  },
  {
    id: "k8s-ckad-423",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Quality of Service (QoS) Classes: Guaranteed, Burstable, BestEffort: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates QoS Classes to configure a mission-critical billing pod so that Kubernetes assigns it the `Guaranteed` QoS class to protect it from eviction during node memory pressure.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Determining pod QoS classes based on resource requests and limits configuration is under consideration.",
    options: [
      { id: 'A', text: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod." },
      { id: 'B', text: "Omit all resource requests and limits from the pod specification." },
      { id: 'C', text: "Set memory request to half of memory limit." },
      { id: 'D', text: "Label the pod with `qos: guaranteed` in metadata.labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod. Kubernetes automatically assigns one of three QoS classes based on resources: `Guaranteed` (requests equal limits for CPU and memory across all containers), `Burstable` (requests &lt; limits), and `BestEffort` (no requests or limits set). `Guaranteed` pods are evicted last during node resource starvation.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["QoS Classes", "QoS Classes", "Security Compliance"]
  },
  {
    id: "k8s-ckad-424",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Quality of Service (QoS) Classes: Guaranteed, Burstable, BestEffort: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates QoS Classes to configure a mission-critical billing pod so that Kubernetes assigns it the `Guaranteed` QoS class to protect it from eviction during node memory pressure.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Determining pod QoS classes based on resource requests and limits configuration is under consideration.",
    options: [
      { id: 'A', text: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod." },
      { id: 'B', text: "Omit all resource requests and limits from the pod specification." },
      { id: 'C', text: "Set memory request to half of memory limit." },
      { id: 'D', text: "Label the pod with `qos: guaranteed` in metadata.labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod. Kubernetes automatically assigns one of three QoS classes based on resources: `Guaranteed` (requests equal limits for CPU and memory across all containers), `Burstable` (requests &lt; limits), and `BestEffort` (no requests or limits set). `Guaranteed` pods are evicted last during node resource starvation.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["QoS Classes", "QoS Classes", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-425",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Quality of Service (QoS) Classes: Guaranteed, Burstable, BestEffort: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates QoS Classes to configure a mission-critical billing pod so that Kubernetes assigns it the `Guaranteed` QoS class to protect it from eviction during node memory pressure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Determining pod QoS classes based on resource requests and limits configuration is under consideration.",
    options: [
      { id: 'A', text: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod." },
      { id: 'B', text: "Omit all resource requests and limits from the pod specification." },
      { id: 'C', text: "Set memory request to half of memory limit." },
      { id: 'D', text: "Label the pod with `qos: guaranteed` in metadata.labels." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set identical `requests` and `limits` for both CPU and memory on every container in the pod. Kubernetes automatically assigns one of three QoS classes based on resources: `Guaranteed` (requests equal limits for CPU and memory across all containers), `Burstable` (requests &lt; limits), and `BestEffort` (no requests or limits set). `Guaranteed` pods are evicted last during node resource starvation.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["QoS Classes", "QoS Classes", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_17;
