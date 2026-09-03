export const K8S_CKS_FLASHCARDS_3 = [
  {
    "id": "k8s-cks-fc-51",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "hostNetwork / hostPID / hostIPC Risks: Why do Pod Security Standards restrict host namespaces?",
    "hint": "They eliminate container isolation boundaries.",
    "back": "They grant direct access to host network interfaces (sniffing traffic), host process tables (signaling host processes), and host shared memory\u2014enabling trivial container breakout.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-52",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "hostPath Dangers: Why is hostPath volume mounting considered a severe security risk?",
    "hint": "Enables direct access to host filesystem files.",
    "back": "It allows containers to mount arbitrary host directories (e.g., <code>/etc</code>, <code>/var/run/docker.sock</code>), allowing an attacker to modify host files, steal node tokens, or escape the container.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-53",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "AppArmor Complain Mode: What is the purpose of running AppArmor in complain mode?",
    "hint": "Testing policies without blocking actions.",
    "back": "In <strong>complain mode</strong> (<code>aa-complain</code>), violations are <strong>logged but not blocked</strong>. This allows teams to test profile rules and observe application behavior before enforcing restrictions.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-54",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Seccomp Syscall Troubleshooting: Where does the Linux kernel log seccomp denial events?",
    "hint": "Audit log or kernel ring buffer.",
    "back": "In <strong>/var/log/audit/audit.log</strong> (or <code>dmesg</code> / <code>journalctl -k</code>) with <code>type=SECCOMP</code>. The entry includes the blocked syscall number, which can be resolved using <code>ausyscall</code>.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-55",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "CAP_SYS_ADMIN Danger: Why is CAP_SYS_ADMIN considered equivalent to root?",
    "hint": "Allows mounting, cgroup manipulation, and device access.",
    "back": "<code>CAP_SYS_ADMIN</code> grants near-complete control over filesystems, cgroups, namespaces, and kernel interfaces, making container breakout trivial.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-56",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Inspecting Open Ports with lsof: How do you identify which process is listening on port 9099?",
    "hint": "lsof with internet socket and listen filter flags.",
    "back": "Run <strong>lsof -iTCP:9099 -sTCP:LISTEN -n -P</strong>. This immediately reveals the command name, PID, and user listening on that port.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-57",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Core Dump Prevention: How do you prevent sensitive memory from being dumped to disk on crash?",
    "hint": "sysctl suid_dumpable and ulimit core settings.",
    "back": "Set <strong>fs.suid_dumpable = 0</strong> in sysctl and set <code>* hard core 0</code> in <code>/etc/security/limits.conf</code> to eliminate disk core dumps.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-58",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Kata Containers vs runc: What is the fundamental difference in isolation architecture?",
    "hint": "Lightweight VM per pod vs shared Linux kernel.",
    "back": "<code>runc</code> shares the host Linux kernel using cgroups and namespaces. <strong>Kata Containers</strong> runs each pod inside a <strong>dedicated lightweight VM</strong> with its own independent Linux kernel.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-59",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "SSH Server Hardening: What are the two most critical settings in /etc/ssh/sshd_config?",
    "hint": "Disable root login and password authentication.",
    "back": "Set <strong>PermitRootLogin no</strong> and <strong>PasswordAuthentication no</strong>. This mandates key-based authentication and prevents direct root login attempts.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-60",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Privileged Containers: What does securityContext.privileged: true actually do?",
    "hint": "Disables isolation, enables all capabilities, grants all devices.",
    "back": "It disables AppArmor and seccomp, grants nearly all Linux capabilities, and mounts all host devices from <code>/dev</code> into the container, virtually eliminating container isolation.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-61",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "File Integrity Monitoring (FIM): What tool detects unauthorized modifications to host binaries?",
    "hint": "AIDE or Tripwire database comparison.",
    "back": "Tools like <strong>AIDE</strong> (Advanced Intrusion Detection Environment) create a baseline cryptographic database and run <code>aide --check</code> to flag modified files, permissions, and hashes.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-62",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "PID Limits against Fork Bombs: How do cgroups protect a host from container process exhaustion?",
    "hint": "pids.max controller limits concurrent tasks.",
    "back": "The <strong>pids controller</strong> (<code>pids.max</code>) limits the total number of tasks/threads a container can spawn, preventing fork bombs from exhausting the host's PID table.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-63",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Kernel Module Auditing: Which command lists loaded kernel modules on a worker node?",
    "hint": "Reads /proc/modules.",
    "back": "Run <strong>lsmod</strong> (or inspect <code>/proc/modules</code>). Use <strong>modinfo &lt;module&gt;</strong> to verify module authors, paths, and cryptographic signatures.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-64",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Read-Only hostPath Mount: How do you guarantee a container cannot modify a mounted host directory?",
    "hint": "volumeMounts readOnly flag.",
    "back": "Set <strong>readOnly: true</strong> in the container's <code>volumeMounts</code> entry referencing the <code>hostPath</code> volume.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-65",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Default umask: What umask setting ensures newly created files are accessible only to the owner?",
    "hint": "Think octal mask subtracting all group and other permissions.",
    "back": "A umask of <strong>077</strong> (or <strong>027</strong> to allow group read) ensures files default to owner-only permissions (mode <code>0600</code> / <code>0700</code>).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-66",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Reverse Path Filtering (RPF): What does net.ipv4.conf.all.rp_filter = 1 protect against?",
    "hint": "IP address spoofing attacks.",
    "back": "It enables <strong>strict Reverse Path Filtering</strong>, dropping incoming packets if their source IP address does not match the network route on the receiving interface.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-67",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "no_new_privs: How does allowPrivilegeEscalation: false affect setuid binaries?",
    "hint": "Prevents setuid execution from changing UID.",
    "back": "It prevents setuid binaries (like <code>su</code> or <code>sudo</code>) from gaining elevated privileges, forcing them to run with the existing unprivileged user credentials.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-68",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "IPC Namespace Default: Do Kubernetes pods share host IPC by default?",
    "hint": "Default is false; isolated per pod.",
    "back": "<strong>No.</strong> Pods have an isolated IPC namespace by default. <code>hostIPC: true</code> must be explicitly declared (and should be forbidden by admission policies).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-69",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Disabling Unused Kernel Protocols: How do you block auto-loading of protocols like DCCP or SCTP?",
    "hint": "Use install /bin/true in modprobe configuration.",
    "back": "Create a file in <strong>/etc/modprobe.d/</strong> containing <code>install dccp /bin/true</code>. This overrides kernel auto-loading and prevents initialization.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-70",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "fsGroup in Pod Specs: How does fsGroup help unprivileged containers access storage volumes?",
    "hint": "Changes volume ownership to a specific supplemental group.",
    "back": "Setting <strong>securityContext.fsGroup</strong> causes Kubernetes to change the ownership of mounted volume contents to that GID, allowing the unprivileged container to read and write.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-71",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "User Namespaces (userns): What is the core security benefit of UID remapping?",
    "hint": "Container root is mapped to an unprivileged host UID.",
    "back": "UID 0 (root) inside the container is mapped to an <strong>unprivileged high UID (e.g., 100000) on the host</strong>. If an attacker escapes the container, they hold zero host privileges.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-72",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Seccomp Status Verification: What does Seccomp: 2 mean in /proc/[pid]/status?",
    "hint": "Seccomp filter mode is actively applied.",
    "back": "It confirms that <strong>seccomp filter mode</strong> (BPF syscall filtering) is active on the process (<code>0</code> = disabled, <code>1</code> = strict, <code>2</code> = filter mode).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-73",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "PAM Account Lockout: Which PAM module locks accounts after consecutive failed logins?",
    "hint": "pam_faillock.so configuration.",
    "back": "<strong>pam_faillock.so</strong> (in <code>/etc/pam.d/common-auth</code>) locks accounts after a specified number of failed attempts (e.g., <code>deny=5 unlock_time=900</code>).",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-74",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Container Log Security: What ownership and permissions should /var/log/pods have?",
    "hint": "Owned by root with 0700 or 0750 permissions.",
    "back": "Owned by <strong>root:root</strong> with permissions set to <strong>0750</strong> or <strong>0700</strong> to prevent unauthorized local users from inspecting container console outputs.",
    "tags": [
      "CKS",
      "System"
    ]
  },
  {
    "id": "k8s-cks-fc-75",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d2",
    "front": "Inspecting System IPC: What command inspects active Linux shared memory and semaphores?",
    "hint": "ipcs command.",
    "back": "Run <strong>ipcs -a</strong> to display active message queues, shared memory segments, and semaphores on the host.",
    "tags": [
      "CKS",
      "System"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_3;
