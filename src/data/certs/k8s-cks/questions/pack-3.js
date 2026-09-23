export const K8S_CKS_QUESTIONS_3 = [
  {
    id: "k8s-cks-51",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Host Network and Host Process Namespace Sharing",
    scenario: "A malicious pod configuration includes <code>hostNetwork: true</code>, <code>hostPID: true</code>, and <code>hostIPC: true</code>. What threat does this pose to the host node?",
    question: "What critical security capability does sharing host namespaces grant to a container process?",
    options: [
      { id: 'A', text: "It can sniff the node's loopback and pod traffic, see and signal host processes, and reach host shared memory" },
      { id: 'B', text: "It can read every file on the node, since the host mount namespace is shared along with the others" },
      { id: 'C', text: "It can call the API server as the node's own identity, which carries the <code>system:node</code> role" },
      { id: 'D', text: "It can restart the node's services, since the host's systemd socket is exposed with the namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling <code>hostNetwork: true</code> allows the container to bypass network policies and sniff traffic on host interfaces. Enabling <code>hostPID: true</code> allows the container to see all processes running on the host (and send signals/kill them if running as root). Enabling <code>hostIPC: true</code> allows inspecting inter-process memory. Pod Security Standards restrict all three.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostNetwork", "hostPID", "hostIPC", "Namespace-Isolation"]
  },
  {
    id: "k8s-cks-52",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Container Breakout via HostPath Mount Restrictions",
    scenario: "An attacker crafts a pod manifest mounting <code>/etc</code> and <code>/var/run/docker.sock</code> from the host using <code>hostPath</code> volumes in order to achieve container escape and take full control of the worker node.",
    question: "Which cluster-level policy mechanism prevents pods from mounting dangerous host filesystem paths?",
    options: [
      { id: 'A', text: "Set <code>readOnlyRootFilesystem: true</code> on the containers so a mounted host path cannot be written to" },
      { id: 'B', text: "Enable the <code>NodeRestriction</code> plugin so a kubelet cannot admit pods that mount paths it does not own" },
      { id: 'C', text: "Set a <code>LimitRange</code> in each namespace that omits <code>hostPath</code> from the allowed volume types" },
      { id: 'D', text: "Enforce the <code>restricted</code> Pod Security Standard, or an admission policy that forbids <code>hostPath</code> volumes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>hostPath</code> volumes allow containers to access the underlying host node file system, representing one of the most common container breakout vectors. Enforcing Pod Security Standards (Baseline and Restricted disallow hostPath) or policy engines like Kyverno/Gatekeeper restricts or outright prohibits hostPath mounts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostPath", "Container-Breakout", "Pod-Security-Standards", "Admission-Control"]
  },
  {
    id: "k8s-cks-53",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "AppArmor Profile Modes: Enforce vs Complain Mode",
    scenario: "Before blocking application actions in production, a security engineer wants to monitor and log all AppArmor profile policy violations without terminating or disrupting running container processes.",
    question: "How should the AppArmor profile be loaded to monitor violations without actively enforcing restrictions?",
    options: [
      { id: 'A', text: "Load it in enforce mode and read the denials from the node's audit log" },
      { id: 'B', text: "Load it in enforce mode and set <code>enforce: false</code> in the pod's profile block" },
      { id: 'C', text: "Load it in complain mode with <code>aa-complain</code>, or <code>apparmor_parser -C</code>" },
      { id: 'D', text: "Load it in enforce mode and annotate the pod with an audit-only profile mode" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AppArmor supports two primary operational modes: <strong>enforce</strong> (actively blocks disallowed operations and logs them) and <strong>complain</strong> (allows disallowed operations but logs violations to syslog/auditd). Loading via <code>aa-complain &lt;profile&gt;</code> or <code>apparmor_parser -C &lt;profile&gt;</code> enables audit testing without breaking applications.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["AppArmor", "aa-complain", "Audit", "Kernel-Security"]
  },
  {
    id: "k8s-cks-54",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Troubleshooting Seccomp System Call Denials",
    scenario: "After applying a custom seccomp profile with <code>defaultAction: SCMP_ACT_ERRNO</code>, a container crashes with error <code>operation not permitted</code> during startup.",
    question: "Where should the systems engineer look to determine which specific system call was blocked by seccomp?",
    options: [
      { id: 'A', text: "In <code>crictl stats</code> for the container, which reports the count of syscalls the profile has denied so far" },
      { id: 'B', text: "In the host audit log or <code>dmesg</code>, for <code>type=SECCOMP</code> records naming the syscall" },
      { id: 'C', text: "In the API server audit log, which records the denial alongside the pod that triggered the seccomp filter" },
      { id: 'D', text: "In <code>kubectl logs</code> for the container, where the runtime writes the seccomp trace before the process dies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When seccomp blocks a syscall, the Linux kernel logs the event to the system audit subsystem (<code>/var/log/audit/audit.log</code>) or kernel ring buffer (<code>dmesg</code>). The log entry includes <code>type=SECCOMP</code>, the executable name, and the blocked <code>syscall</code> integer, which can be resolved to a function name via <code>ausyscall &lt;number&gt;</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Seccomp", "Troubleshooting", "auditd", "Syscalls"]
  },
  {
    id: "k8s-cks-55",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Linux Capabilities: CAP_SYS_ADMIN Dangers",
    scenario: "A legacy third-party Helm chart includes <code>capabilities.add: ['CAP_SYS_ADMIN']</code> in its deployment template.",
    question: "Why is granting <code>CAP_SYS_ADMIN</code> to a container considered equivalent to granting full root control over the host node?",
    options: [
      { id: 'A', text: "It permits mounting filesystems, reconfiguring namespaces and kernel parameters — enough to leave the sandbox" },
      { id: 'B', text: "It causes the kubelet to mount the node's <code>/etc/shadow</code> into the container's filesystem" },
      { id: 'C', text: "It overrides the cluster's RBAC decisions, so the pod's token is treated as cluster-admin" },
      { id: 'D', text: "It disables NetworkPolicy enforcement for every pod scheduled onto the same node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Linux, <code>CAP_SYS_ADMIN</code> is the catch-all administrative capability. It allows mounting filesystems, executing <code>pivot_root</code>, performing BPF operations, manipulating cgroups, and accessing kernel interfaces. A container process with <code>CAP_SYS_ADMIN</code> can easily escape container boundaries to compromise the host node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_SYS_ADMIN", "Capabilities", "Privilege-Escalation", "Container-Breakout"]
  },
  {
    id: "k8s-cks-56",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Auditing Open Ports on Linux Hosts with lsof",
    scenario: "An incident responder must verify which process is listening on TCP port 9099 on a worker node without terminating running pods.",
    question: "Which command directly maps the listening port to its process name, PID, and executable path?",
    options: [
      { id: 'A', text: "Execute <code>find / -name 9099</code>" },
      { id: 'B', text: "Execute <code>crictl inspectp 9099</code>" },
      { id: 'C', text: "Execute <code>ip link show port 9099</code>" },
      { id: 'D', text: "Execute <code>lsof -iTCP:9099 -sTCP:LISTEN -n -P</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>lsof -iTCP:9099 -sTCP:LISTEN -n -P</code> command queries open files and network sockets, displaying the listening process name, PID, user, and file descriptor for TCP port 9099 without performing slow DNS or service port name resolution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["lsof", "Incident-Response", "Network-Investigation", "Host-Hardening"]
  },
  {
    id: "k8s-cks-57",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Restricting Core Dumps to Prevent Memory and Secret Exposure",
    scenario: "When an application container crashes on a worker node, a core dump containing plaintext API keys and user passwords in process memory is written to the host filesystem.",
    question: "Which host configuration prevents unprivileged processes and crashed containers from dumping core memory?",
    options: [
      { id: 'A', text: "Set <code>kernel.core_pattern</code> to a path inside <code>/var/log</code> mounted read-only on each node" },
      { id: 'B', text: "Set <code>privileged: false</code> on every container so no process may raise its own core limit" },
      { id: 'C', text: "Set <code>--enable-core-dumps=false</code> on the kubelet so the runtime discards the dumps" },
      { id: 'D', text: "Set <code>fs.suid_dumpable = 0</code> in sysctl and <code>* hard core 0</code> in limits" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>fs.suid_dumpable = 0</code> prevents setuid or privilege-altered processes from producing core dumps. Configuring hard core limits of 0 in <code>/etc/security/limits.conf</code> (or setting <code>ulimit -c 0</code>) prevents applications from writing memory dump files to disk upon segmentation faults.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Core-Dumps", "sysctl", "Host-Hardening", "Memory-Protection"]
  },
  {
    id: "k8s-cks-58",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Container Runtimes: Kata Containers Hardware Virtualization",
    scenario: "A financial transaction processing workload requires hypervisor-level isolation rather than shared Linux kernel namespace separation to guarantee tenant isolation.",
    question: "Which container runtime implementation runs each Kubernetes pod inside its own dedicated lightweight virtual machine with an independent Linux kernel?",
    options: [
      { id: 'A', text: "Kata Containers, via <code>kata-runtime</code> on QEMU or Firecracker" },
      { id: 'B', text: "containerd with an AppArmor profile enforced on every pod" },
      { id: 'C', text: "gVisor's <code>runsc</code>, which intercepts syscalls in userspace" },
      { id: 'D', text: "<code>runc</code> with the runtime's default seccomp profile applied" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kata Containers leverages hardware virtualization technologies (QEMU, Cloud Hypervisor, Firecracker) to spawn each pod inside a dedicated lightweight VM. Each pod executes with its own isolated kernel, preventing host kernel zero-day vulnerabilities from breaking through shared kernel boundaries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kata-Containers", "Virtualization", "RuntimeClass", "Hardening"]
  },
  {
    id: "k8s-cks-59",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Hardening SSH Access on Kubernetes Cluster Nodes",
    scenario: "A CIS Benchmark audit recommends hardening SSH server configurations across all control plane and worker nodes.",
    question: "Which configuration directives in <code>/etc/ssh/sshd_config</code> satisfy security best practices?",
    options: [
      { id: 'A', text: "Set <code>PermitRootLogin no</code>, <code>PasswordAuthentication no</code> and <code>MaxAuthTries 3</code>" },
      { id: 'B', text: "Set <code>StrictModes no</code>, <code>X11Forwarding yes</code> and <code>MaxAuthTries 3</code>" },
      { id: 'C', text: "Set <code>AllowUsers *</code>, <code>PubkeyAuthentication no</code> and <code>Port 2222</code>" },
      { id: 'D', text: "Set <code>PermitRootLogin yes</code>, <code>Port 2222</code> and <code>ClientAliveInterval 300</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Hardening SSH requires disabling direct root login (<code>PermitRootLogin no</code>), enforcing SSH public key authentication while disabling passwords (<code>PasswordAuthentication no</code>), limiting brute-force attempts (<code>MaxAuthTries 3</code>), and timing out idle sessions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["SSH", "CIS-Benchmark", "Host-Hardening", "Authentication"]
  },
  {
    id: "k8s-cks-60",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Pod Security: Disabling Privileged Containers",
    scenario: "A developer deploys a pod with <code>securityContext.privileged: true</code> to mount a network filesystem. What security boundaries are eliminated by this setting?",
    question: "What is the primary architectural impact of setting a container to privileged mode?",
    options: [
      { id: 'A', text: "The container joins the host's network namespace and can bind any port on the node's own addresses" },
      { id: 'B', text: "The container gets the node's kubelet credentials, which lets it read every Secret the node has mounted" },
      { id: 'C', text: "The container gets every host device, loses its seccomp and AppArmor profiles, and keeps nearly all capabilities" },
      { id: 'D', text: "The container may exceed its resource limits, since the runtime stops enforcing its cgroup constraints" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Running a container with <code>privileged: true</code> disables seccomp filters, AppArmor restrictions, grants access to all host devices under <code>/dev</code>, and enables all capabilities. A root process inside a privileged container can easily manipulate the host kernel and escape the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Privileged-Containers", "Container-Breakout", "Pod-Security", "Vulnerabilities"]
  },
  {
    id: "k8s-cks-61",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing System Binaries with Linux File Integrity Monitoring",
    scenario: "A security engineer must detect unauthorized modifications to critical host binaries such as <code>/bin/bash</code>, <code>/usr/bin/kubelet</code>, and <code>/etc/shadow</code> on worker nodes.",
    question: "Which host-level security tool provides continuous file integrity monitoring (FIM) and alerts on file changes?",
    options: [
      { id: 'A', text: "Falco, with its file-write rules" },
      { id: 'B', text: "kube-bench, with its CIS checks" },
      { id: 'C', text: "AIDE, or Tripwire, run from a timer" },
      { id: 'D', text: "auditd, with its watch rules" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "File Integrity Monitoring (FIM) tools such as AIDE create a cryptographic database of system files, permissions, and checksums. Running periodic checks (e.g., <code>aide --check</code>) detects unauthorized modifications, injections, or file tampering by attackers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["FIM", "AIDE", "Host-Hardening", "Integrity"]
  },
  {
    id: "k8s-cks-62",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Preventing Memory Resource Starvation with Cgroups v2",
    scenario: "An attacker initiates a fork bomb inside an unprivileged container, spawning thousands of processes that consume all available thread and process IDs on the host node.",
    question: "Which container resource constraint prevents fork bombs from exhausting host PID tables?",
    options: [
      { id: 'A', text: "Mount <code>/proc</code> read-only so the process table cannot be enumerated or extended" },
      { id: 'B', text: "Set the kubelet's own eviction threshold for node filesystem usage instead" },
      { id: 'C', text: "Set <code>pidsLimit</code> on the kubelet, or a per-pod PID limit where the runtime supports it" },
      { id: 'D', text: "Set a memory limit so the cgroup's OOM killer reaps the forked children in turn" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Under Linux cgroups (especially cgroups v2), the <code>pids.max</code> controller limits the maximum number of simultaneous tasks (processes and threads) a container can create. Setting PID limits on kubelet (<code>--pod-max-pids</code>) or via container runtime configuration prevents fork bombs from exhausting host PIDs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["cgroups", "Fork-Bomb", "PID-Limit", "Denial-of-Service"]
  },
  {
    id: "k8s-cks-63",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Kernel Module Tampering and Rootkits",
    scenario: "An incident investigation suspects that a rootkit has loaded a malicious kernel module on a Kubernetes worker node to conceal rogue processes.",
    question: "Which commands allow administrators to inspect currently loaded Linux kernel modules?",
    options: [
      { id: 'A', text: "Run <code>lsmod</code>, or read <code>/proc/modules</code>, then check with <code>modinfo</code>" },
      { id: 'B', text: "Run <code>systemctl list-dependencies kubelet</code> and read the loaded driver units" },
      { id: 'C', text: "Run <code>kubectl get nodes -o wide</code> and read the kernel version it reports" },
      { id: 'D', text: "Run <code>crictl info</code> and read the runtime's list of kernel features in use" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>lsmod</code> command reads <code>/proc/modules</code> to list all actively loaded kernel modules. Running <code>modinfo &lt;module-name&gt;</code> inspects module metadata, file paths, and cryptographic signatures to verify if the module is signed by a trusted vendor.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kernel-Modules", "lsmod", "Rootkits", "Incident-Response"]
  },
  {
    id: "k8s-cks-64",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Host Path Volume Mounts to Read-Only",
    scenario: "A legacy monitoring daemon requires mounting <code>/var/log</code> from the host node to aggregate system log files. The security team insists that the daemon cannot tamper with or delete host log files.",
    question: "How should the volume mount be configured in the container specification?",
    options: [
      { id: 'A', text: "Set <code>allowPrivilegeEscalation: false</code> on the container's securityContext" },
      { id: 'B', text: "Set <code>readOnly: true</code> on the <code>volumeMounts</code> entry for that volume" },
      { id: 'C', text: "Set <code>readOnlyRootFilesystem: true</code> on the container's securityContext" },
      { id: 'D', text: "Set <code>readOnly: true</code> on the <code>hostPath</code> volume's own definition" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specifying <code>readOnly: true</code> inside the container's <code>volumeMounts</code> list (e.g., <code>volumeMounts: [{ name: 'host-logs', mountPath: '/var/log', readOnly: true }]</code>) forces the Linux mount point to be mounted with the <code>MS_RDONLY</code> flag, preventing the container from modifying or deleting host logs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostPath", "readOnly", "VolumeMounts", "Hardening"]
  },
  {
    id: "k8s-cks-65",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Enforcing Umask Restrictions for System Services",
    scenario: "A worker node hardening checklist requires that newly created system files default to restricted file permissions (e.g., owner read/write only).",
    question: "Which setting enforces a restrictive default file creation mask across Linux system services?",
    options: [
      { id: 'A', text: "Set <code>umask 000</code> in <code>/etc/profile</code> and <code>chmod 600 /</code> once" },
      { id: 'B', text: "Set <code>umask 027</code> in <code>/etc/profile</code> and in the systemd unit files" },
      { id: 'C', text: "Set <code>--file-umask=027</code> in the kubelet's own configuration file" },
      { id: 'D', text: "Set <code>runAsGroup: 0</code> on the pods so new files are owned by root" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The file mode creation mask (umask) controls the default permissions of newly created files and directories. Setting a umask of <code>027</code> (granting no access to others) or <code>077</code> (granting access only to the owner) prevents sensitive temporary files from being world-readable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["umask", "File-Permissions", "Host-Hardening", "Linux-Security"]
  },
  {
    id: "k8s-cks-66",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Hardening Worker Node Kernel Network Stack with Reverse Path Filtering",
    scenario: "To defend against IP spoofing attacks where external packets claim to originate from internal pod CIDR subnets, the worker node network interfaces must validate source addresses.",
    question: "Which sysctl parameter enables strict Reverse Path Filtering (RPF) on all network interfaces?",
    options: [
      { id: 'A', text: "Set <code>net.ipv4.conf.all.accept_source_route = 0</code> and <code>rp_filter = 0</code>" },
      { id: 'B', text: "Set <code>net.ipv4.ip_forward = 1</code> and disable the bridge netfilter hooks" },
      { id: 'C', text: "Set <code>net.ipv4.tcp_rfc1337 = 1</code> and <code>conf.all.arp_filter = 1</code>" },
      { id: 'D', text: "Set <code>net.ipv4.conf.all.rp_filter = 1</code> and the same for <code>conf.default</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>rp_filter = 1</code> enables strict Reverse Path Filtering in the Linux kernel. The kernel checks whether the best reverse path to the packet's source IP matches the interface on which the packet arrived; if not, the packet is dropped, neutralizing IP spoofing attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["rp_filter", "IP-Spoofing", "Kernel-Hardening", "Networking"]
  },
  {
    id: "k8s-cks-67",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Container Process Execution with NoNewPrivileges",
    scenario: "An unprivileged container process attempts to invoke a binary that has the setuid bit enabled (such as <code>su</code> or <code>sudo</code>) to escalate to root.",
    question: "Which securityContext setting maps directly to the Linux <code>PR_SET_NO_NEW_PRIVS</code> prctl flag?",
    options: [
      { id: 'A', text: "<code>privileged: false</code>" },
      { id: 'B', text: "<code>readOnlyRootFilesystem: true</code>" },
      { id: 'C', text: "<code>allowPrivilegeEscalation: false</code>" },
      { id: 'D', text: "<code>runAsNonRoot: true</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Kubernetes setting <code>securityContext.allowPrivilegeEscalation: false</code> maps directly to the Linux kernel flag <code>PR_SET_NO_NEW_PRIVS</code>. When active, execution of setuid/setgid binaries or binaries with file capabilities will not grant the process elevated permissions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NoNewPrivileges", "setuid", "Privilege-Escalation", "securityContext"]
  },
  {
    id: "k8s-cks-68",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Container Namespaces: Preventing IPC Channel Leakage",
    scenario: "Two containers running on the same worker node must be strictly prevented from sharing shared memory segments (shm) or semaphores with the host or between pods.",
    question: "What is the default Kubernetes configuration for the IPC namespace, and how is it secured?",
    options: [
      { id: 'A', text: "Pods in a namespace share one IPC namespace, and an AppArmor profile is what separates them" },
      { id: 'B', text: "Pods share the node's IPC namespace unless a sandboxed runtime such as gVisor is selected" },
      { id: 'C', text: "Each pod gets its own IPC namespace, and <code>hostIPC: false</code> keeps host memory out of reach" },
      { id: 'D', text: "Pods share the host IPC namespace by default, and <code>isolateIPC: true</code> separates them" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, Kubernetes isolates IPC namespaces per pod. Ensuring that <code>hostIPC</code> is not explicitly set to <code>true</code> prevents containers from attaching to the host's SysV IPC or POSIX shared memory segments, eliminating cross-workload memory snooping.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostIPC", "Namespaces", "Shared-Memory", "Isolation"]
  },
  {
    id: "k8s-cks-69",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Identifying Deprecated and Insecure Kernel Protocols",
    scenario: "A Linux worker node security audit detects that legacy network protocols such as DCCP, SCTP, and RDS are available and can be loaded dynamically by unprivileged users.",
    question: "How can system administrators permanently disable the loading of vulnerable kernel modules?",
    options: [
      { id: 'A', text: "Write <code>kernel.modules_disabled = 1</code> into <code>/etc/sysctl.d/</code> on every worker node" },
      { id: 'B', text: "Write the module name into the kubelet's <code>--denied-kernel-modules</code> flag on each node" },
      { id: 'C', text: "Write <code>install &lt;module&gt; /bin/true</code> into <code>/etc/modprobe.d/</code>" },
      { id: 'D', text: "Remove the module's object file from <code>/lib/modules</code> and rebuild the initramfs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To prevent unused or insecure kernel modules (e.g., DCCP, SCTP, TIPC) from being loaded on demand by processes, administrators create entries in <code>/etc/modprobe.d/</code> such as <code>install dccp /bin/true</code>. This overrides the default module loader and blocks initialization.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["modprobe", "Kernel-Modules", "Host-Hardening", "Attack-Surface"]
  },
  {
    id: "k8s-cks-70",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Configuring Container Supplemental Groups Safely",
    scenario: "A container needs access to a mounted persistent storage volume owned by Linux GID 2000, while running as non-root user UID 10001.",
    question: "Which securityContext setting grants group access without running as root or changing user ownership?",
    options: [
      { id: 'A', text: "Set <code>privileged: true</code> on the container that mounts the volume" },
      { id: 'B', text: "Add the <code>CAP_DAC_OVERRIDE</code> capability to the container instead" },
      { id: 'C', text: "Set <code>runAsUser: 0</code> and fix the ownership from the entrypoint" },
      { id: 'D', text: "Set <code>supplementalGroups: [2000]</code>, or <code>fsGroup: 2000</code>, on the pod" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring <code>securityContext.fsGroup: 2000</code> or <code>supplementalGroups: [2000]</code> allows the unprivileged container process to access files and directories owned by GID 2000 without requiring root execution or dangerous capabilities like <code>CAP_DAC_OVERRIDE</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["fsGroup", "supplementalGroups", "Non-Root", "Storage"]
  },
  {
    id: "k8s-cks-71",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Container Breakouts via User Namespaces (userns)",
    scenario: "A zero-day Linux kernel vulnerability allows a process that is root inside a container to break out to the host if UID 0 in the container maps directly to host UID 0.",
    question: "How does User Namespace (userns) mapping mitigate this vulnerability?",
    options: [
      { id: 'A', text: "It gives the container its own network namespace, so a breakout cannot reach the node's own services" },
      { id: 'B', text: "It maps container UID 0 to an unprivileged host UID, so a breakout lands with no privileges on the node" },
      { id: 'C', text: "It mounts the host root as an immutable overlay, so a breakout cannot write to any node filesystem" },
      { id: 'D', text: "It runs the container under a hardware sandbox, so a breakout stays inside the virtual machine boundary" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "User namespaces map UIDs and GIDs inside the container to different UIDs and GIDs on the host. In a user namespace, UID 0 in the container corresponds to an unprivileged UID (such as 100000) on the host node. An attacker breaking out of the container arrives on the host as an unprivileged user with no host root privileges.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["User-Namespaces", "userns", "Container-Breakout", "Kernel-Security"]
  },
  {
    id: "k8s-cks-72",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Verifying Seccomp Enforcement via /proc/[pid]/status",
    scenario: "A security auditor wants to verify from the host command line that a specific running container process is actively restricted by a seccomp filter.",
    question: "Which field in <code>/proc/&lt;PID&gt;/status</code> confirms that seccomp filtering is active on the process?",
    options: [
      { id: 'A', text: "Read <code>Cpus_allowed:</code>, which the runtime narrows when a filter is loaded" },
      { id: 'B', text: "Read <code>CapEff:</code>, which is all zeros once a seccomp filter is attached" },
      { id: 'C', text: "Read <code>NoNewPrivs:</code>, which is set to <code>1</code> by the seccomp loader" },
      { id: 'D', text: "Read <code>Seccomp:</code>, where a value of <code>2</code> means filter mode is active" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the Linux <code>/proc/&lt;PID&gt;/status</code> file, the <code>Seccomp</code> field indicates the seccomp state: <code>0</code> means disabled, <code>1</code> means strict seccomp mode, and <code>2</code> means filter mode (seccomp BPF filters active). A value of <code>2</code> confirms that the process is running under seccomp protection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Seccomp", "procfs", "Verification", "Linux-Internals"]
  },
  {
    id: "k8s-cks-73",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Hardening PAM Configuration on Kubernetes Nodes",
    scenario: "An enterprise requires locking accounts after 5 consecutive failed login attempts on worker node console and SSH sessions.",
    question: "Which Pluggable Authentication Module (PAM) configuration enforces account lockout policies?",
    options: [
      { id: 'A', text: "Set <code>pam_faillock.so</code> with <code>deny=5 unlock_time=900</code> in <code>/etc/pam.d/common-auth</code>" },
      { id: 'B', text: "Set <code>pam_limits.so</code> with <code>deny=5</code> in <code>/etc/pam.d/common-session</code> on each node" },
      { id: 'C', text: "Set <code>* hard maxlogins 5</code> in <code>/etc/security/limits.conf</code> on each worker node" },
      { id: 'D', text: "Set <code>MaxAuthTries 5</code> in <code>/etc/ssh/sshd_config</code> and reload the SSH daemon" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Host-level authentication security is managed via PAM. Configuring <code>pam_faillock.so</code> in <code>/etc/pam.d/common-auth</code> with parameters like <code>deny=5 unlock_time=900</code> locks user accounts after 5 failed password attempts for 15 minutes, preventing brute force attacks on host consoles.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["PAM", "Authentication", "Host-Hardening", "Account-Lockout"]
  },
  {
    id: "k8s-cks-74",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Securing Container Log Files on Worker Nodes",
    scenario: "A compliance standard requires that container log files located at <code>/var/log/pods/</code> cannot be tampered with or deleted by unprivileged local users or compromised containers.",
    question: "Which file permissions and log rotation practices should be maintained for container logs on worker nodes?",
    options: [
      { id: 'A', text: "Own <code>/var/log/pods</code> as <code>root:root</code> at <code>0700</code>, and set the kubelet's log rotation limits" },
      { id: 'B', text: "Own <code>/var/log/pods</code> as <code>root:root</code> at <code>0700</code>, and rotate with a host <code>logrotate</code> unit that runs on a timer" },
      { id: 'C', text: "Own <code>/var/log/pods</code> as <code>root:adm</code> at <code>0750</code>, and let the log shipper mount the directory read-write" },
      { id: 'D', text: "Own <code>/var/log/pods</code> as <code>root:root</code> at <code>0755</code>, and set the container runtime's own size limit instead" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Container logs stored under <code>/var/log/pods/</code> contain application output that may include sensitive operational data. They must be restricted to <code>root:root</code> with permissions <code>0750</code> or <code>0700</code>. Kubelet parameters <code>containerLogMaxSize</code> and <code>containerLogMaxFiles</code> manage automatic log rotation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Log-Hardening", "Kubelet", "File-Permissions", "Compliance"]
  },
  {
    id: "k8s-cks-75",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Restricting Linux IPC Message Queues and Shared Memory",
    scenario: "An attacker gains execution in a container and attempts to exploit host shared memory or message queues by attaching to existing IPC facilities.",
    question: "Which Linux tool allows an administrator to inspect active message queues, shared memory segments, and semaphores on a host?",
    options: [
      { id: 'A', text: "Execute <code>iptables -L -n -v</code>" },
      { id: 'B', text: "Execute <code>systemd-cgls</code>" },
      { id: 'C', text: "Execute <code>crictl stats</code>" },
      { id: 'D', text: "Execute <code>ipcs</code> (or <code>ipcs -a</code>)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>ipcs</code> command provides information on IPC facilities: message queues (<code>-q</code>), shared memory segments (<code>-m</code>), and semaphores (<code>-s</code>). Administrators use <code>ipcs -a</code> to verify that containers are not sharing or leaking IPC structures onto the host node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ipcs", "Shared-Memory", "Host-Hardening", "Linux-Internals"]
  }
];

export default K8S_CKS_QUESTIONS_3;
