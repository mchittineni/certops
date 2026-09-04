export const K8S_CKS_FLASHCARDS_13 = [
  {
    id: "k8s-cks-fc-301",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Disabling Host Namespaces (PID, Network, IPC) (Dr Failover)",
    hint: "Preventing container escape by isolating host namespaces.",
    back: "Disallowing <strong>hostNetwork, hostPID, and hostIPC</strong> prevents containers from inspecting host processes, sniffing host network traffic, or accessing shared memory, ensuring strong isolation.",
    tags: ["Host Isolation", "Host Namespaces", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-302",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Disabling Host Namespaces (PID, Network, IPC) (High Load Scale)",
    hint: "Preventing container escape by isolating host namespaces.",
    back: "Disallowing <strong>hostNetwork, hostPID, and hostIPC</strong> prevents containers from inspecting host processes, sniffing host network traffic, or accessing shared memory, ensuring strong isolation.",
    tags: ["Host Isolation", "Host Namespaces", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-303",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Disabling Host Namespaces (PID, Network, IPC) (Security Compliance)",
    hint: "Preventing container escape by isolating host namespaces.",
    back: "Disallowing <strong>hostNetwork, hostPID, and hostIPC</strong> prevents containers from inspecting host processes, sniffing host network traffic, or accessing shared memory, ensuring strong isolation.",
    tags: ["Host Isolation", "Host Namespaces", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-304",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Disabling Host Namespaces (PID, Network, IPC) (Hybrid Migration)",
    hint: "Preventing container escape by isolating host namespaces.",
    back: "Disallowing <strong>hostNetwork, hostPID, and hostIPC</strong> prevents containers from inspecting host processes, sniffing host network traffic, or accessing shared memory, ensuring strong isolation.",
    tags: ["Host Isolation", "Host Namespaces", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-305",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Disabling Host Namespaces (PID, Network, IPC) (Resilience Failure)",
    hint: "Preventing container escape by isolating host namespaces.",
    back: "Disallowing <strong>hostNetwork, hostPID, and hostIPC</strong> prevents containers from inspecting host processes, sniffing host network traffic, or accessing shared memory, ensuring strong isolation.",
    tags: ["Host Isolation", "Host Namespaces", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-306",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting Dangerous hostPath Mounts (Dr Failover)",
    hint: "Blocking container mounts of host filesystems and runtime sockets.",
    back: "Restricting <strong>hostPath</strong> mounts prevents attackers from mounting host filesystems or container runtime sockets, eliminating one of the most common vectors for container escape.",
    tags: ["Storage Security", "hostPath Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-307",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting Dangerous hostPath Mounts (High Load Scale)",
    hint: "Blocking container mounts of host filesystems and runtime sockets.",
    back: "Restricting <strong>hostPath</strong> mounts prevents attackers from mounting host filesystems or container runtime sockets, eliminating one of the most common vectors for container escape.",
    tags: ["Storage Security", "hostPath Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-308",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting Dangerous hostPath Mounts (Security Compliance)",
    hint: "Blocking container mounts of host filesystems and runtime sockets.",
    back: "Restricting <strong>hostPath</strong> mounts prevents attackers from mounting host filesystems or container runtime sockets, eliminating one of the most common vectors for container escape.",
    tags: ["Storage Security", "hostPath Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-309",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting Dangerous hostPath Mounts (Hybrid Migration)",
    hint: "Blocking container mounts of host filesystems and runtime sockets.",
    back: "Restricting <strong>hostPath</strong> mounts prevents attackers from mounting host filesystems or container runtime sockets, eliminating one of the most common vectors for container escape.",
    tags: ["Storage Security", "hostPath Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-310",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting Dangerous hostPath Mounts (Resilience Failure)",
    hint: "Blocking container mounts of host filesystems and runtime sockets.",
    back: "Restricting <strong>hostPath</strong> mounts prevents attackers from mounting host filesystems or container runtime sockets, eliminating one of the most common vectors for container escape.",
    tags: ["Storage Security", "hostPath Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-311",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Node Operating System Hardening (Dr Failover)",
    hint: "Minimizing attack surfaces by pruning packages and closing unused ports.",
    back: "<strong>Host OS hardening</strong> minimizes the attack surface on Kubernetes nodes by disabling unused services, restricting open ports, removing compilers, and applying automated kernel security patches.",
    tags: ["OS Hardening", "OS Hardening", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-312",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Node Operating System Hardening (High Load Scale)",
    hint: "Minimizing attack surfaces by pruning packages and closing unused ports.",
    back: "<strong>Host OS hardening</strong> minimizes the attack surface on Kubernetes nodes by disabling unused services, restricting open ports, removing compilers, and applying automated kernel security patches.",
    tags: ["OS Hardening", "OS Hardening", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-313",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Node Operating System Hardening (Security Compliance)",
    hint: "Minimizing attack surfaces by pruning packages and closing unused ports.",
    back: "<strong>Host OS hardening</strong> minimizes the attack surface on Kubernetes nodes by disabling unused services, restricting open ports, removing compilers, and applying automated kernel security patches.",
    tags: ["OS Hardening", "OS Hardening", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-314",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Node Operating System Hardening (Hybrid Migration)",
    hint: "Minimizing attack surfaces by pruning packages and closing unused ports.",
    back: "<strong>Host OS hardening</strong> minimizes the attack surface on Kubernetes nodes by disabling unused services, restricting open ports, removing compilers, and applying automated kernel security patches.",
    tags: ["OS Hardening", "OS Hardening", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-315",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Node Operating System Hardening (Resilience Failure)",
    hint: "Minimizing attack surfaces by pruning packages and closing unused ports.",
    back: "<strong>Host OS hardening</strong> minimizes the attack surface on Kubernetes nodes by disabling unused services, restricting open ports, removing compilers, and applying automated kernel security patches.",
    tags: ["OS Hardening", "OS Hardening", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-316",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting CAP_SYS_ADMIN and High-Privilege Capabilities (Dr Failover)",
    hint: "Stripping dangerous kernel capabilities to enforce sandbox boundaries.",
    back: "Disallowing <strong>CAP_SYS_ADMIN</strong> and other high-privilege capabilities prevents containers from altering kernel parameters, mounting disks, or reconfiguring network stacks on the host node.",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-317",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting CAP_SYS_ADMIN and High-Privilege Capabilities (High Load Scale)",
    hint: "Stripping dangerous kernel capabilities to enforce sandbox boundaries.",
    back: "Disallowing <strong>CAP_SYS_ADMIN</strong> and other high-privilege capabilities prevents containers from altering kernel parameters, mounting disks, or reconfiguring network stacks on the host node.",
    tags: ["Kernel Capabilities", "Linux Capabilities", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-318",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting CAP_SYS_ADMIN and High-Privilege Capabilities (Security Compliance)",
    hint: "Stripping dangerous kernel capabilities to enforce sandbox boundaries.",
    back: "Disallowing <strong>CAP_SYS_ADMIN</strong> and other high-privilege capabilities prevents containers from altering kernel parameters, mounting disks, or reconfiguring network stacks on the host node.",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-319",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting CAP_SYS_ADMIN and High-Privilege Capabilities (Hybrid Migration)",
    hint: "Stripping dangerous kernel capabilities to enforce sandbox boundaries.",
    back: "Disallowing <strong>CAP_SYS_ADMIN</strong> and other high-privilege capabilities prevents containers from altering kernel parameters, mounting disks, or reconfiguring network stacks on the host node.",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-320",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Restricting CAP_SYS_ADMIN and High-Privilege Capabilities (Resilience Failure)",
    hint: "Stripping dangerous kernel capabilities to enforce sandbox boundaries.",
    back: "Disallowing <strong>CAP_SYS_ADMIN</strong> and other high-privilege capabilities prevents containers from altering kernel parameters, mounting disks, or reconfiguring network stacks on the host node.",
    tags: ["Kernel Capabilities", "Linux Capabilities", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-321",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Auditing Host Ports with ss and lsof (Dr Failover)",
    hint: "Identifying rogue network sockets and unauthorized processes on nodes.",
    back: "Running <strong>ss -tulpn</strong> and <strong>lsof -i</strong> reveals all listening sockets and process owners on a node, allowing administrators to detect unauthorized listeners and rogue services.",
    tags: ["Port Auditing", "Port Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-322",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Auditing Host Ports with ss and lsof (High Load Scale)",
    hint: "Identifying rogue network sockets and unauthorized processes on nodes.",
    back: "Running <strong>ss -tulpn</strong> and <strong>lsof -i</strong> reveals all listening sockets and process owners on a node, allowing administrators to detect unauthorized listeners and rogue services.",
    tags: ["Port Auditing", "Port Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-323",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Auditing Host Ports with ss and lsof (Security Compliance)",
    hint: "Identifying rogue network sockets and unauthorized processes on nodes.",
    back: "Running <strong>ss -tulpn</strong> and <strong>lsof -i</strong> reveals all listening sockets and process owners on a node, allowing administrators to detect unauthorized listeners and rogue services.",
    tags: ["Port Auditing", "Port Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-324",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Auditing Host Ports with ss and lsof (Hybrid Migration)",
    hint: "Identifying rogue network sockets and unauthorized processes on nodes.",
    back: "Running <strong>ss -tulpn</strong> and <strong>lsof -i</strong> reveals all listening sockets and process owners on a node, allowing administrators to detect unauthorized listeners and rogue services.",
    tags: ["Port Auditing", "Port Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-325",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Auditing Host Ports with ss and lsof (Resilience Failure)",
    hint: "Identifying rogue network sockets and unauthorized processes on nodes.",
    back: "Running <strong>ss -tulpn</strong> and <strong>lsof -i</strong> reveals all listening sockets and process owners on a node, allowing administrators to detect unauthorized listeners and rogue services.",
    tags: ["Port Auditing", "Port Auditing", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_13;
