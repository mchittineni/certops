export const K8S_CKS_QUESTIONS_8 = [
  {
    id: "k8s-cks-176",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Kubernetes API Audit Policy Levels",
    scenario: "A compliance framework requires auditing all administrative actions on Kubernetes Secrets. Because Secrets contain sensitive passwords, the request and response body payloads must never be logged to disk, but the metadata (who, when, what) must be preserved.",
    question: "Which audit rule configuration in the audit policy YAML file achieves this objective?",
    options: [
      { id: 'A', text: "Set <code>level: Metadata</code> for resources <code>secrets</code> under the core API group" },
      { id: 'B', text: "Set <code>level: RequestResponse</code> for resources <code>secrets</code>" },
      { id: 'C', text: "Set <code>level: Request</code> with an omitStages filter" },
      { id: 'D', text: "Set <code>level: None</code> for resources <code>secrets</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Kubernetes audit policies, <code>level: Metadata</code> logs request metadata (requesting user, timestamp, resource, namespace, verb) but omits the request and response body contents. For Secrets, <code>level: Request</code> or <code>RequestResponse</code> would write sensitive plaintext credentials to the audit log file on disk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Policy", "kube-apiserver", "Secrets-Protection", "Compliance"]
  },
  {
    id: "k8s-cks-177",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Enabling API Server Audit Logging Flags",
    scenario: "A cluster administrator needs to activate audit logging on the <code>kube-apiserver</code> control plane static pod manifest.",
    question: "Which set of flags and volume mounts must be added to <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code>?",
    options: [
      { id: 'A', text: "Add <code>--enable-audit-logs=true</code> and set <code>--audit-destination=syslog</code> without volume mounts" },
      { id: 'B', text: "Add <code>--audit-policy-file=/etc/kubernetes/audit-policy.yaml</code>, <code>--audit-log-path=/var/log/kubernetes/audit.log</code>, <code>--audit-log-maxage=30</code>, <code>--audit-log-maxbackup=10</code>, and mount the host directories into the static pod" },
      { id: 'C', text: "Set <code>--log-dir=/var/log/audit</code> on the kubelet daemon on each worker node" },
      { id: 'D', text: "Configure <code>audit: true</code> in the kube-apiserver ConfigMap in <code>kube-system</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling audit logging requires specifying <code>--audit-policy-file</code> and <code>--audit-log-path</code> (along with retention flags like <code>--audit-log-maxage</code> and <code>--audit-log-maxbackup</code>) on <code>kube-apiserver</code>. Because the API server runs as a static pod, the audit policy file and the destination log directory on the host must be explicitly mapped via <code>volumeMounts</code> and <code>volumes</code> (hostPath).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Logging", "kube-apiserver", "Static-Pods", "Control-Plane"]
  },
  {
    id: "k8s-cks-178",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Understanding Kubernetes Audit Stages",
    scenario: "An API audit rule tracks long-running batch jobs and asynchronous operations. An engineer needs to log events only when the API server has finished processing the request and sent the HTTP response headers and body.",
    question: "Which audit stage corresponds to the completion of the HTTP response execution?",
    options: [
      { id: 'A', text: "<code>ResponseComplete</code>" },
      { id: 'B', text: "<code>ResponseStarted</code>" },
      { id: 'C', text: "<code>Panic</code>" },
      { id: 'D', text: "<code>RequestReceived</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The four audit stages in Kubernetes are: <code>RequestReceived</code> (event generated immediately upon receipt), <code>ResponseStarted</code> (response headers sent, e.g. for long-running watches), <code>ResponseComplete</code> (the HTTP response body is fully completed and sent), and <code>Panic</code> (events generated when an internal unhandled panic occurs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Stages", "ResponseComplete", "kube-apiserver", "Observability"]
  },
  {
    id: "k8s-cks-179",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Terminal Shell Execution with Falco",
    scenario: "A SOC alert must fire immediately whenever an interactive shell (e.g., <code>bash</code>, <code>sh</code>, <code>zsh</code>) is spawned inside any container in a production namespace.",
    question: "Which Falco condition expression detects interactive shell execution inside a container?",
    options: [
      { id: 'A', text: "<code>evt.type = connect and fd.port = 22</code>" },
      { id: 'B', text: "<code>evt.type = open and file.name = '/bin/bash'</code>" },
      { id: 'C', text: "<code>container.image = 'ubuntu' and syscall = 'fork'</code>" },
      { id: 'D', text: "<code>evt.type = execve and container.id != host and proc.name in (bash, sh, zsh, ksh) and proc.tty != 0</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Falco monitors Linux kernel system calls via eBPF or kernel module. The condition <code>evt.type = execve and container.id != host and proc.name in (bash, sh, zsh, ksh)</code> captures process execution events occurring inside a container where the executing binary is a shell. Adding <code>proc.tty != 0</code> indicates that an interactive terminal was allocated.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "execve", "Interactive-Shell", "Runtime-Detection"]
  },
  {
    id: "k8s-cks-180",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Syntax: Macros, Lists, and Conditions",
    scenario: "A security engineer creates a custom Falco rule to detect when a container attempts to modify system binaries in <code>/bin</code> or <code>/usr/bin</code>.",
    question: "How are lists, macros, and rules structured in Falco YAML rule definitions?",
    options: [
      { id: 'A', text: "Falco uses Rego syntax identical to Open Policy Agent" },
      { id: 'B', text: "Falco rules must be compiled into C code before loading" },
      { id: 'C', text: "<code>list</code> defines reusable items; <code>macro</code> defines reusable condition snippets; <code>rule</code> combines conditions with <code>output</code>, <code>priority</code>, and <code>tags</code>" },
      { id: 'D', text: "<code>rule</code> defines YAML loops; <code>macro</code> defines regex filters; <code>output</code> formats syslog packets" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Falco rules use three core constructs: <strong>lists</strong> (reusable collections of strings, such as binary names), <strong>macros</strong> (reusable condition logic snippets), and <strong>rules</strong> (which declare the trigger condition, message output format, priority level like WARNING/CRITICAL, and searchable tags).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Rule-Syntax", "Macros", "Runtime-Security"]
  },
  {
    id: "k8s-cks-181",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forwarding Falco Alerts with Falcosidekick",
    scenario: "A security operations team wants to route Falco runtime security events to multiple alert sinks, including Slack, Elasticsearch, and a security SIEM webhook.",
    question: "Which companion tool acts as a central event dispatcher for Falco alerts?",
    options: [
      { id: 'A', text: "Kube-bench" },
      { id: 'B', text: "CoreDNS" },
      { id: 'C', text: "Kubesec" },
      { id: 'D', text: "Falcosidekick" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>Falcosidekick</code> is the standard companion daemon that receives Falco event streams (via HTTP/gRPC) and fans them out to over 50 external integrations, including Slack, Discord, Elasticsearch, Kafka, AWS SNS/SQS, and custom SIEM webhooks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falcosidekick", "Alerting", "SIEM", "Runtime-Security"]
  },
  {
    id: "k8s-cks-182",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Compromised Containers Modifying /etc Files",
    scenario: "An attacker gains remote code execution in a web container and attempts to add a backdoor user account to <code>/etc/passwd</code>.",
    question: "Which Falco rule condition detects write operations to sensitive configuration directories inside a container?",
    options: [
      { id: 'A', text: "<code>evt.type in (open, openat, openat2) and evt.is_open_write=true and fd.name startswith /etc/ and container.id != host</code>" },
      { id: 'B', text: "<code>evt.type = read and fd.name = /etc/passwd</code>" },
      { id: 'C', text: "<code>syscall = chdir and dir = /etc</code>" },
      { id: 'D', text: "<code>evt.type = clone and proc.name = 'vipw'</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Detecting file modifications involves monitoring file open events with write flags (<code>open</code>, <code>openat</code> with <code>evt.is_open_write=true</code>) targeting sensitive system paths like <code>/etc/</code> from within a container (<code>container.id != host</code>). This flags attempts to tamper with system configurations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "File-Tampering", "etc-passwd", "Runtime-Detection"]
  },
  {
    id: "k8s-cks-183",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating Container Process Namespaces with nsenter",
    scenario: "A compromised worker node has a suspicious container whose networking has failed. An administrator needs to enter the container's network namespace directly from the host terminal to run <code>tcpdump</code>.",
    question: "Which Linux command enters the network namespace of a target process PID?",
    options: [
      { id: 'A', text: "Execute <code>crictl exec &lt;container-id&gt; tcpdump</code>" },
      { id: 'B', text: "Execute <code>chroot /proc/&lt;container-pid&gt;/root tcpdump</code>" },
      { id: 'C', text: "Execute <code>nsenter -t &lt;container-pid&gt; -n tcpdump -i eth0</code>" },
      { id: 'D', text: "Execute <code>kill -SIGSTOP &lt;container-pid&gt;</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>nsenter</code> (namespace enter) utility allows administrators to enter specified namespaces of an existing process. Using <code>nsenter -t &lt;PID&gt; -n</code> enters the target process's network namespace, allowing host tools like <code>tcpdump</code> or <code>ip addr</code> to run within the container's isolated network stack.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["nsenter", "Namespaces", "Forensics", "Troubleshooting"]
  },
  {
    id: "k8s-cks-184",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Privilege Escalation with Falco: Sensitive Mounts",
    scenario: "A container attempts to access or mount <code>/proc/kcore</code> or <code>/dev/mem</code> from the underlying host node.",
    question: "Why does Falco flag access to <code>/dev/mem</code> and <code>/proc/kcore</code> as a critical severity incident?",
    options: [
      { id: 'A', text: "Direct access to <code>/dev/mem</code> or <code>/proc/kcore</code> exposes physical host memory, allowing attackers to extract cryptographic keys, read other processes' memory, or overwrite kernel code" },
      { id: 'B', text: "Access to <code>/dev/mem</code> causes the kubelet to restart immediately" },
      { id: 'C', text: "These devices can only be mounted by CoreDNS" },
      { id: 'D', text: "Access to these devices automatically resets the node's network interface" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>/dev/mem</code> and <code>/proc/kcore</code> map physical host RAM and kernel memory. A compromised process with read/write access to physical memory can read sensitive secrets from all running containers and inject shellcode directly into kernel memory, executing arbitrary code with full host control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Memory-Access", "Kernel-Security", "Critical-Alert"]
  },
  {
    id: "k8s-cks-185",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Falco Outputs: Standard Out, Syslog, and File",
    scenario: "A systems administrator is configuring <code>/etc/falco/falco.yaml</code> to ensure runtime security events are written to local syslog and streamed to a central logging agent.",
    question: "Which configuration block in <code>falco.yaml</code> enables both standard output and syslog routing?",
    options: [
      { id: 'A', text: "Set <code>stdout_output: { enabled: true }</code> and <code>syslog_output: { enabled: true }</code>" },
      { id: 'B', text: "Configure <code>falco_sink: all</code>" },
      { id: 'C', text: "Set <code>output_format: json</code> with <code>destination: /var/log/audit.log</code>" },
      { id: 'D', text: "Set <code>log_level: debug</code> in kubelet.conf" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Falco's daemon configuration in <code>/etc/falco/falco.yaml</code> controls output destinations via explicit toggle blocks: <code>stdout_output.enabled</code>, <code>syslog_output.enabled</code>, <code>file_output.enabled</code>, <code>program_output.enabled</code>, and <code>grpc_output.enabled</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "falco.yaml", "Syslog", "Configuration"]
  },
  {
    id: "k8s-cks-186",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating Container File Drift with crictl diff / inspect",
    scenario: "A security analyst suspects that an attacker modified application source files inside a running container that was deployed with a mutable root filesystem.",
    question: "How can an analyst inspect the container's writable upper layer to identify files that were added, modified, or deleted since the container started?",
    options: [
      { id: 'A', text: "Inspect the container's storage root graph driver directory (under <code>/var/lib/containerd/...</code> or overlayfs <code>diff/</code> directory) on the host node" },
      { id: 'B', text: "Run <code>kubectl logs &lt;pod&gt; --all-files</code>" },
      { id: 'C', text: "Run <code>etcdctl get /containers/diff</code>" },
      { id: 'D', text: "Run <code>crictl stats --format json</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In overlay2 storage drivers used by containerd and CRI-O, changes made inside a container's writable layer reside in the container's upper <code>diff/</code> directory on the host. An analyst can inspect this directory directly on the worker node to see every file modified, injected, or deleted during runtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["OverlayFS", "File-Drift", "Forensics", "Containerd"]
  },
  {
    id: "k8s-cks-187",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing Anonymous API Requests in Kubernetes",
    scenario: "A cluster penetration test detects that <code>system:anonymous</code> is executing read queries against the API server.",
    question: "How can an administrator locate and audit all requests originating from unauthenticated users in the Kubernetes audit log?",
    options: [
      { id: 'A', text: "Filter the audit log for HTTP status code 404" },
      { id: 'B', text: "Check <code>dmesg</code> for unauthenticated kernel calls" },
      { id: 'C', text: "Search the audit log for entries matching <code>user.username: 'system:anonymous'</code>" },
      { id: 'D', text: "Query <code>kubectl get events -n kube-system</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When an unauthenticated request reaches <code>kube-apiserver</code>, it is bound to the identity <code>system:anonymous</code> (belonging to group <code>system:unauthenticated</code>). Searching the audit log for <code>user.username: \"system:anonymous\"</code> surfaces all actions attempted by unauthenticated clients.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Log", "system:anonymous", "Authentication", "Threat-Hunting"]
  },
  {
    id: "k8s-cks-188",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting In-Memory Malware Execution: Memfd_create in Falco",
    scenario: "An advanced threat actor avoids writing malware binaries to disk by compiling or executing malicious ELF binaries directly in Linux memory using the <code>memfd_create</code> system call.",
    question: "Which Falco detection logic flags in-memory file descriptor execution?",
    options: [
      { id: 'A', text: "Monitor <code>evt.type = memfd_create</code> or <code>proc.cmdline startswith '/memfd:'</code>" },
      { id: 'B', text: "Monitor <code>evt.type = socket</code> for TCP connections" },
      { id: 'C', text: "Monitor <code>syscall = mprotect</code> with PROT_READ only" },
      { id: 'D', text: "Monitor <code>evt.type = read</code> on <code>/tmp</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>memfd_create</code> system call creates anonymous in-memory files that can be executed directly without ever touching disk. Falco rules detect in-memory execution by alerting on <code>evt.type = memfd_create</code> or processes whose executing path points to <code>/memfd:</code> file descriptors.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "memfd_create", "Fileless-Malware", "Memory-Forensics"]
  },
  {
    id: "k8s-cks-189",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Omitting Noisy Events in Kubernetes Audit Policies",
    scenario: "A Kubernetes audit log file is filling up disk space rapidly due to thousands of repeated <code>get</code> and <code>watch</code> requests from <code>kube-proxy</code> and <code>kubelet</code> on endpoints and configmaps.",
    question: "How can noisy non-security-relevant queries be excluded in the audit policy without omitting critical administrative modifications?",
    options: [
      { id: 'A', text: "Set <code>level: RequestResponse</code> for all resources across all namespaces" },
      { id: 'B', text: "Set <code>--audit-log-path=/dev/null</code> on the API server" },
      { id: 'C', text: "Delete the <code>kube-proxy</code> DaemonSet from the cluster" },
      { id: 'D', text: "Add early audit rules matching users <code>system:kube-proxy</code> and <code>system:nodes</code> with verbs <code>get, watch, list</code> and set <code>level: None</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes evaluates audit policy rules from top to bottom; the first matching rule determines the audit level. Placing a rule at the top of the policy that matches system controller users with read verbs (<code>get</code>, <code>watch</code>, <code>list</code>) and setting <code>level: None</code> safely suppresses high-volume routine traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Policy", "level-None", "Noise-Reduction", "Log-Optimization"]
  },
  {
    id: "k8s-cks-190",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Port Scanning Activity from Containers with Falco",
    scenario: "An attacker breaks into a container and runs <code>nmap</code> or <code>masscan</code> to map internal cluster network services.",
    question: "Which system call pattern indicates network scanning activity inside a container?",
    options: [
      { id: 'A', text: "Binding to localhost port 8080" },
      { id: 'B', text: "A rapid burst of outbound <code>connect</code> system calls to a high volume of distinct destination IP addresses or ports within a short time window" },
      { id: 'C', text: "Multiple <code>read</code> calls on <code>/etc/hosts</code>" },
      { id: 'D', text: "Continuous <code>gettimeofday</code> invocations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Port scanning generates hundreds of rapid connection attempts. Falco detects this activity by monitoring high frequencies of <code>evt.type = connect</code> targeting diverse internal destination addresses and ports (<code>fd.cip</code> / <code>fd.cport</code>) originating from a container process.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Port-Scanning", "Network-Security", "Lateral-Movement"]
  },
  {
    id: "k8s-cks-191",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Inspecting Container System Call History with ptrace / strace",
    scenario: "During an active incident on a worker node, an investigator needs to monitor system calls executed by a suspicious background process (PID 14205) in real time.",
    question: "Which Linux utility attaches to the running process and streams its system calls to the console?",
    options: [
      { id: 'A', text: "Execute <code>top -p 14205</code>" },
      { id: 'B', text: "Execute <code>strace -p 14205 -f -e trace=all</code>" },
      { id: 'C', text: "Execute <code>gdb --batch --pid 14205</code>" },
      { id: 'D', text: "Execute <code>crictl inspect 14205</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>strace</code> uses the Linux <code>ptrace</code> facility to attach to a running process (<code>-p &lt;PID&gt;</code>) and follow child threads/forks (<code>-f</code>), printing system calls and arguments to standard error as they occur.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["strace", "ptrace", "Forensics", "Syscalls"]
  },
  {
    id: "k8s-cks-192",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Hardening Audit Log Storage and Retention",
    scenario: "An organization must satisfy a compliance standard requiring that Kubernetes API audit logs be retained for a minimum of 365 days on disk.",
    question: "Which <code>kube-apiserver</code> flag configures the maximum number of days to retain old audit log files?",
    options: [
      { id: 'A', text: "<code>--audit-log-maxage=365</code>" },
      { id: 'B', text: "<code>--audit-retention-days=365</code>" },
      { id: 'C', text: "<code>--audit-log-maxbackup=365</code>" },
      { id: 'D', text: "<code>--log-retention-period=1y</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The flag <code>--audit-log-maxage=&lt;N&gt;</code> sets the maximum number of days to retain old audit log files based on file timestamps. Related flags include <code>--audit-log-maxbackup</code> (maximum count of retained rotated log files) and <code>--audit-log-maxsize</code> (size in MB before rotation).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "audit-log-maxage", "Compliance", "Retention"]
  },
  {
    id: "k8s-cks-193",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Kernel Module Injection via Falco",
    scenario: "An attacker with container root privileges attempts to load a malicious kernel module to bypass container boundaries.",
    question: "Which Linux system calls are used to load kernel modules, and which Falco event monitors them?",
    options: [
      { id: 'A', text: "<code>fork</code> and <code>clone</code>" },
      { id: 'B', text: "<code>init_module</code> and <code>finit_module</code>" },
      { id: 'C', text: "<code>mmap</code> and <code>munmap</code>" },
      { id: 'D', text: "<code>bind</code> and <code>listen</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Linux, kernel modules are dynamically loaded into the running kernel via the <code>init_module</code> and <code>finit_module</code> system calls. Falco includes standard rules monitoring <code>evt.type in (init_module, finit_module)</code> and immediately flags any attempt to execute them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Kernel-Modules", "init_module", "Rootkits"]
  },
  {
    id: "k8s-cks-194",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Capture of Volatile Memory in Kubernetes",
    scenario: "A critical payment pod is compromised. Before terminating the pod, security investigators must capture a forensic image of the container's process memory without alerting the attacker.",
    question: "Which tool or technique captures process memory from the host worker node?",
    options: [
      { id: 'A', text: "Dump the memory pages of the container process using <code>gcore &lt;PID&gt;</code> (or reading <code>/proc/&lt;PID&gt;/mem</code> using LiME / AVML)" },
      { id: 'B', text: "Run <code>crictl stop &lt;container-id&gt;</code>" },
      { id: 'C', text: "Run <code>kubectl delete pod &lt;pod-name&gt; --now</code>" },
      { id: 'D', text: "Copy <code>/var/log/pods</code> to an external USB stick" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Process memory contains volatile forensic evidence (decrypted TLS keys, plaintext credentials, injected code). Running <code>gcore &lt;PID&gt;</code> or using forensic acquisition tools like LiME or Microsoft AVML extracts the process memory from <code>/proc/&lt;PID&gt;/mem</code> without altering disk states.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Memory-Forensics", "gcore", "Incident-Response", "procfs"]
  },
  {
    id: "k8s-cks-195",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Outbound C2 Traffic with Falco",
    scenario: "A containerized pod is infected by a trojan that initiates outbound HTTPS connections to an external command-and-control (C2) IP address.",
    question: "Which Falco macro or condition identifies unexpected outbound network connections from containers?",
    options: [
      { id: 'A', text: "<code>evt.type = accept and container.id = host</code>" },
      { id: 'B', text: "<code>evt.type = recvfrom and fd.port = 53</code>" },
      { id: 'C', text: "<code>evt.type = connect and evt.dir = &lt; and (fd.typechar = 4 or fd.typechar = 6) and container.id != host and not inbound</code>" },
      { id: 'D', text: "<code>evt.type = listen and fd.port = 443</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Falco monitors outbound connection handshakes using <code>evt.type = connect</code> with direction <code>evt.dir = &lt;</code> (connection established) over IPv4 or IPv6 (<code>fd.typechar in (4, 6)</code>) originating from a container. Pairing this with IP reputation or destination allow-lists detects C2 beacons.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "C2-Detection", "Outbound-Traffic", "Network-Monitoring"]
  },
  {
    id: "k8s-cks-196",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Verifying Falco eBPF Probe Installation",
    scenario: "On a hardened Linux worker node where loading third-party kernel modules is disabled, Falco must run using its modern eBPF driver.",
    question: "Which setting in <code>/etc/falco/falco.yaml</code> or environment variable configures Falco to use eBPF instead of a kernel module?",
    options: [
      { id: 'A', text: "Set <code>kernel_module: force</code>" },
      { id: 'B', text: "Set <code>driver: none</code>" },
      { id: 'C', text: "Set <code>runtime: containerd</code>" },
      { id: 'D', text: "Set <code>engine: { kind: ebpf }</code> (or <code>ebpf: { enabled: true }</code>) and specify <code>probe: /root/.falco/falco-bpf.o</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Falco supports modern eBPF drivers for telemetry collection without needing custom kernel modules. Setting <code>engine.kind: ebpf</code> and pointing to the compiled eBPF probe object (or using the modern BPF ring buffer driver) enables driverless telemetry on hardened kernels.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "eBPF", "Kernel-Driver", "Host-Hardening"]
  },
  {
    id: "k8s-cks-197",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Cluster Secret Dumping via Audit Logs",
    scenario: "An attacker with stolen cluster credentials executes <code>kubectl get secrets -A -o yaml</code> to harvest all secrets across the entire cluster.",
    question: "Which signature in the Kubernetes audit log indicates a cluster-wide secret harvesting operation?",
    options: [
      { id: 'A', text: "An audit event with <code>verb: list</code>, <code>objectRef.resource: secrets</code>, and an empty (all namespaces) <code>objectRef.namespace</code> field" },
      { id: 'B', text: "An audit event with <code>level: None</code>" },
      { id: 'C', text: "An audit event with <code>verb: delete</code> on namespace <code>kube-system</code>" },
      { id: 'D', text: "An audit event with <code>verb: get</code> on resource <code>nodes</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cluster-wide reconnaissance appears in audit logs as a <code>verb: list</code> request on <code>objectRef.resource: secrets</code> where <code>objectRef.namespace</code> is null or empty, indicating that the caller enumerated secrets across all namespaces simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Log", "Reconnaissance", "Secret-Theft", "Threat-Hunting"]
  },
  {
    id: "k8s-cks-198",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Breakouts Attempting to Access Kubelet API",
    scenario: "A compromised pod attempts to reach the worker node's kubelet read-only port (10255) or authenticated port (10250) directly over the node's loopback or internal interface.",
    question: "Which Falco condition detects a container probing the local Kubelet API port?",
    options: [
      { id: 'A', text: "<code>evt.type = accept and fd.port = 80</code>" },
      { id: 'B', text: "<code>evt.type = open and file.name = '/var/lib/kubelet/config.yaml'</code>" },
      { id: 'C', text: "<code>evt.type = bind and fd.port = 6443</code>" },
      { id: 'D', text: "<code>evt.type = connect and fd.port in (10250, 10255) and container.id != host</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Standard application containers have no legitimate need to connect to the node's Kubelet management ports (TCP 10250 or 10255). A Falco rule monitoring <code>evt.type = connect and fd.port in (10250, 10255) and container.id != host</code> immediately alerts on container escape reconnaissance.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Kubelet-API", "Container-Breakout", "Port-10250"]
  },
  {
    id: "k8s-cks-199",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Streaming Audit Logs to SIEM via Webhook Backend",
    scenario: "To prevent local log tampering on the master node, Kubernetes audit logs must be streamed in real time over HTTPS to an external Splunk or Elasticsearch HTTP event collector.",
    question: "Which <code>kube-apiserver</code> flag enables streaming audit events directly to an external HTTP webhook?",
    options: [
      { id: 'A', text: "<code>--enable-audit-streaming=true</code>" },
      { id: 'B', text: "<code>--audit-stream-url=https://siem.enterprise.com/logs</code>" },
      { id: 'C', text: "<code>--audit-remote-syslog=splunk:514</code>" },
      { id: 'D', text: "<code>--audit-webhook-config-file=/etc/kubernetes/audit-webhook.yaml</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>--audit-webhook-config-file</code> flag instructs <code>kube-apiserver</code> to read a kubeconfig-style configuration file defining remote webhook endpoints, TLS client certificates, and buffering options for real-time streaming of audit events to external SIEMs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Audit-Webhook", "SIEM", "Centralized-Logging"]
  },
  {
    id: "k8s-cks-200",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Crypto-Mining Activity with Falco: Stratum Protocol",
    scenario: "An attacker compromises a container and initiates a Monero crypto-miner that connects to a public mining pool using the Stratum protocol over port 3333 or 4444.",
    question: "Which Falco detection strategy identifies crypto-mining software in containers?",
    options: [
      { id: 'A', text: "Monitor container CPU usage using <code>top</code>" },
      { id: 'B', text: "Block all UDP packets on port 53" },
      { id: 'C', text: "Check for HTTP 200 responses from Google" },
      { id: 'D', text: "Detect known miner process names (e.g., <code>xmrig</code>, <code>minerd</code>) and monitor network connections on common mining pool ports (3333, 4444, 5555) or Stratum protocol negotiation strings" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Falco includes default rules for crypto-mining that detect execution of known mining binary names (<code>proc.name in (xmrig, minerd, cpuminer)</code>) and monitor outbound network connections to typical mining pool ports (3333, 4444, 7777) or payloads matching the Stratum RPC protocol.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Crypto-Mining", "Stratum", "Runtime-Detection"]
  }
];

export default K8S_CKS_QUESTIONS_8;
