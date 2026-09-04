export const K8S_CKS_FLASHCARDS_12 = [
  {
    id: "k8s-cks-fc-276",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "RBAC Least Privilege Auditing (Dr Failover)",
    hint: "Eliminating wildcard permissions and redundant cluster-admin bindings.",
    back: "Adhering to <strong>RBAC least privilege</strong> requires eliminating wildcard verbs (<code>*</code>) and using tools like <code>kubectl-who-can</code> to audit and restrict over-privileged subjects.",
    tags: ["RBAC Auditing", "RBAC Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-277",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "RBAC Least Privilege Auditing (High Load Scale)",
    hint: "Eliminating wildcard permissions and redundant cluster-admin bindings.",
    back: "Adhering to <strong>RBAC least privilege</strong> requires eliminating wildcard verbs (<code>*</code>) and using tools like <code>kubectl-who-can</code> to audit and restrict over-privileged subjects.",
    tags: ["RBAC Auditing", "RBAC Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-278",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "RBAC Least Privilege Auditing (Security Compliance)",
    hint: "Eliminating wildcard permissions and redundant cluster-admin bindings.",
    back: "Adhering to <strong>RBAC least privilege</strong> requires eliminating wildcard verbs (<code>*</code>) and using tools like <code>kubectl-who-can</code> to audit and restrict over-privileged subjects.",
    tags: ["RBAC Auditing", "RBAC Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-279",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "RBAC Least Privilege Auditing (Hybrid Migration)",
    hint: "Eliminating wildcard permissions and redundant cluster-admin bindings.",
    back: "Adhering to <strong>RBAC least privilege</strong> requires eliminating wildcard verbs (<code>*</code>) and using tools like <code>kubectl-who-can</code> to audit and restrict over-privileged subjects.",
    tags: ["RBAC Auditing", "RBAC Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-280",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "RBAC Least Privilege Auditing (Resilience Failure)",
    hint: "Eliminating wildcard permissions and redundant cluster-admin bindings.",
    back: "Adhering to <strong>RBAC least privilege</strong> requires eliminating wildcard verbs (<code>*</code>) and using tools like <code>kubectl-who-can</code> to audit and restrict over-privileged subjects.",
    tags: ["RBAC Auditing", "RBAC Auditing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-281",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Control Plane File Permissions (Dr Failover)",
    hint: "Restricting ownership to root:root and permissions to 600/644 on PKI assets.",
    back: "Securing control plane assets requires setting <strong>root:root ownership</strong> with <code>600</code> permissions on private keys and <code>644</code> on manifests, adhering to CIS benchmark standards.",
    tags: ["File Permissions", "File Permissions", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-282",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Control Plane File Permissions (High Load Scale)",
    hint: "Restricting ownership to root:root and permissions to 600/644 on PKI assets.",
    back: "Securing control plane assets requires setting <strong>root:root ownership</strong> with <code>600</code> permissions on private keys and <code>644</code> on manifests, adhering to CIS benchmark standards.",
    tags: ["File Permissions", "File Permissions", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-283",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Control Plane File Permissions (Security Compliance)",
    hint: "Restricting ownership to root:root and permissions to 600/644 on PKI assets.",
    back: "Securing control plane assets requires setting <strong>root:root ownership</strong> with <code>600</code> permissions on private keys and <code>644</code> on manifests, adhering to CIS benchmark standards.",
    tags: ["File Permissions", "File Permissions", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-284",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Control Plane File Permissions (Hybrid Migration)",
    hint: "Restricting ownership to root:root and permissions to 600/644 on PKI assets.",
    back: "Securing control plane assets requires setting <strong>root:root ownership</strong> with <code>600</code> permissions on private keys and <code>644</code> on manifests, adhering to CIS benchmark standards.",
    tags: ["File Permissions", "File Permissions", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-285",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "Control Plane File Permissions (Resilience Failure)",
    hint: "Restricting ownership to root:root and permissions to 600/644 on PKI assets.",
    back: "Securing control plane assets requires setting <strong>root:root ownership</strong> with <code>600</code> permissions on private keys and <code>644</code> on manifests, adhering to CIS benchmark standards.",
    tags: ["File Permissions", "File Permissions", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-286",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    front: "etcd Mutual TLS and Access Restrictions (Dr Failover)",
    hint: "Restricting etcd access strictly to the API server via mutual TLS.",
    back: "Securing <strong>etcd</strong> requires mutual TLS with <code>--client-cert-auth=true</code>, dedicated PKI keys, and network firewalls restricting port 2379 access exclusively to API servers.",
    tags: ["etcd Security", "etcd Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-287",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "etcd Mutual TLS and Access Restrictions (High Load Scale)",
    hint: "Restricting etcd access strictly to the API server via mutual TLS.",
    back: "Securing <strong>etcd</strong> requires mutual TLS with <code>--client-cert-auth=true</code>, dedicated PKI keys, and network firewalls restricting port 2379 access exclusively to API servers.",
    tags: ["etcd Security", "etcd Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-288",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "etcd Mutual TLS and Access Restrictions (Security Compliance)",
    hint: "Restricting etcd access strictly to the API server via mutual TLS.",
    back: "Securing <strong>etcd</strong> requires mutual TLS with <code>--client-cert-auth=true</code>, dedicated PKI keys, and network firewalls restricting port 2379 access exclusively to API servers.",
    tags: ["etcd Security", "etcd Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-289",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    front: "etcd Mutual TLS and Access Restrictions (Hybrid Migration)",
    hint: "Restricting etcd access strictly to the API server via mutual TLS.",
    back: "Securing <strong>etcd</strong> requires mutual TLS with <code>--client-cert-auth=true</code>, dedicated PKI keys, and network firewalls restricting port 2379 access exclusively to API servers.",
    tags: ["etcd Security", "etcd Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-290",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    front: "etcd Mutual TLS and Access Restrictions (Resilience Failure)",
    hint: "Restricting etcd access strictly to the API server via mutual TLS.",
    back: "Securing <strong>etcd</strong> requires mutual TLS with <code>--client-cert-auth=true</code>, dedicated PKI keys, and network firewalls restricting port 2379 access exclusively to API servers.",
    tags: ["etcd Security", "etcd Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-291",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "AppArmor Profiles in Kubernetes (Dr Failover)",
    hint: "Kernel-level mandatory access control restricting container system capabilities.",
    back: "Applying <strong>AppArmor profiles</strong> in container <code>securityContext</code> enforces kernel-level mandatory access control, restricting file access, networking, and system calls.",
    tags: ["AppArmor", "AppArmor", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-292",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "AppArmor Profiles in Kubernetes (High Load Scale)",
    hint: "Kernel-level mandatory access control restricting container system capabilities.",
    back: "Applying <strong>AppArmor profiles</strong> in container <code>securityContext</code> enforces kernel-level mandatory access control, restricting file access, networking, and system calls.",
    tags: ["AppArmor", "AppArmor", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-293",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "AppArmor Profiles in Kubernetes (Security Compliance)",
    hint: "Kernel-level mandatory access control restricting container system capabilities.",
    back: "Applying <strong>AppArmor profiles</strong> in container <code>securityContext</code> enforces kernel-level mandatory access control, restricting file access, networking, and system calls.",
    tags: ["AppArmor", "AppArmor", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-294",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "AppArmor Profiles in Kubernetes (Hybrid Migration)",
    hint: "Kernel-level mandatory access control restricting container system capabilities.",
    back: "Applying <strong>AppArmor profiles</strong> in container <code>securityContext</code> enforces kernel-level mandatory access control, restricting file access, networking, and system calls.",
    tags: ["AppArmor", "AppArmor", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-295",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "AppArmor Profiles in Kubernetes (Resilience Failure)",
    hint: "Kernel-level mandatory access control restricting container system capabilities.",
    back: "Applying <strong>AppArmor profiles</strong> in container <code>securityContext</code> enforces kernel-level mandatory access control, restricting file access, networking, and system calls.",
    tags: ["AppArmor", "AppArmor", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-296",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Seccomp System Call Filtering (Dr Failover)",
    hint: "Restricting system calls using RuntimeDefault and custom seccomp profiles.",
    back: "Enforcing <strong>seccompProfile: type: RuntimeDefault</strong> filters dangerous Linux system calls (like <code>ptrace</code>), preventing exploited containers from attacking the host kernel.",
    tags: ["Seccomp", "Seccomp", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-297",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Seccomp System Call Filtering (High Load Scale)",
    hint: "Restricting system calls using RuntimeDefault and custom seccomp profiles.",
    back: "Enforcing <strong>seccompProfile: type: RuntimeDefault</strong> filters dangerous Linux system calls (like <code>ptrace</code>), preventing exploited containers from attacking the host kernel.",
    tags: ["Seccomp", "Seccomp", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-298",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Seccomp System Call Filtering (Security Compliance)",
    hint: "Restricting system calls using RuntimeDefault and custom seccomp profiles.",
    back: "Enforcing <strong>seccompProfile: type: RuntimeDefault</strong> filters dangerous Linux system calls (like <code>ptrace</code>), preventing exploited containers from attacking the host kernel.",
    tags: ["Seccomp", "Seccomp", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-299",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Seccomp System Call Filtering (Hybrid Migration)",
    hint: "Restricting system calls using RuntimeDefault and custom seccomp profiles.",
    back: "Enforcing <strong>seccompProfile: type: RuntimeDefault</strong> filters dangerous Linux system calls (like <code>ptrace</code>), preventing exploited containers from attacking the host kernel.",
    tags: ["Seccomp", "Seccomp", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-300",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    front: "Seccomp System Call Filtering (Resilience Failure)",
    hint: "Restricting system calls using RuntimeDefault and custom seccomp profiles.",
    back: "Enforcing <strong>seccompProfile: type: RuntimeDefault</strong> filters dangerous Linux system calls (like <code>ptrace</code>), preventing exploited containers from attacking the host kernel.",
    tags: ["Seccomp", "Seccomp", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_12;
