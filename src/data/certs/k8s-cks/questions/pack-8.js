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
      { id: 'A', text: "Set <code>level: Metadata</code> for <code>secrets</code> in the core group" },
      { id: 'B', text: "Set <code>level: RequestResponse</code> for resources <code>secrets</code>" },
      { id: 'C', text: "Set <code>level: Request</code> for <code>secrets</code>, with an omitStages filter" },
      { id: 'D', text: "Set <code>level: None</code> for <code>secrets</code> across every namespace" }
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
      { id: 'A', text: "Add <code>--audit-policy-file</code> and <code>--audit-log-path</code>, relying on the static pod's existing <code>/etc/kubernetes</code> mount for both" },
      { id: 'B', text: "Add <code>--audit-policy-file</code> and <code>--audit-log-path</code> with the retention flags, and mount both host paths into the static pod" },
      { id: 'C', text: "Add <code>--audit-webhook-config-file</code> and its retention flags, and mount the webhook kubeconfig into the static pod" },
      { id: 'D', text: "Add <code>--audit-log-path</code> alone, and set the policy through the <code>kube-apiserver</code> ConfigMap in <code>kube-system</code>" }
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
      { id: 'A', text: "<code>evt.type = open and fd.name = '/bin/bash' and container.id != host</code>" },
      { id: 'B', text: "<code>evt.type = connect and fd.port = 22 and container.id != host</code>" },
      { id: 'C', text: "<code>evt.type = execve and proc.name in (bash, sh, zsh) and proc.tty != 0</code>" },
      { id: 'D', text: "<code>evt.type = clone and proc.name in (bash, sh) and proc.tty = 0</code>" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "<code>list</code> holds Rego imports, <code>macro</code> the policy package, and <code>rule</code> the deny expression Falco evaluates" },
      { id: 'B', text: "<code>list</code> holds compiled filters, <code>macro</code> the C preprocessor defines, and <code>rule</code> the handler to link against" },
      { id: 'C', text: "<code>list</code> holds reusable items, <code>macro</code> reusable conditions, and <code>rule</code> joins them with an output and priority" },
      { id: 'D', text: "<code>list</code> holds YAML loops, <code>macro</code> the regex filters, and <code>rule</code> the syslog packet format to emit" }
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
      { id: 'A', text: "Kubesec" },
      { id: 'B', text: "Falcosidekick" },
      { id: 'C', text: "Kube-bench" },
      { id: 'D', text: "CoreDNS" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "<code>evt.type = open and fd.name startswith /etc/ and container.id != host</code>" },
      { id: 'B', text: "<code>evt.type = read and fd.name = /etc/passwd and container.id != host</code>" },
      { id: 'C', text: "<code>evt.is_open_write=true and fd.name startswith /etc/ and container.id != host</code>" },
      { id: 'D', text: "<code>evt.type = chdir and fd.name startswith /etc/ and container.id != host</code>" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Those devices expose the node's block layer, so a process can write to the etcd data directory unnoticed" },
      { id: 'B', text: "Those devices expose the kubelet's own address space, so a process can read the node's client certificate" },
      { id: 'C', text: "Those devices expose physical host memory, so a process can read keys from other processes or patch the kernel" },
      { id: 'D', text: "Those devices expose the container runtime's socket, so a process can start a privileged container of its own" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Set <code>log_level: debug</code> in kubelet.conf" },
      { id: 'B', text: "Set <code>stdout_output: { enabled: true }</code> and <code>syslog_output: { enabled: true }</code>" },
      { id: 'C', text: "Set <code>output_format: json</code> with <code>destination: /var/log/audit.log</code>" },
      { id: 'D', text: "Configure <code>falco_sink: all</code>" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Read the container's overlayfs <code>diff/</code> directory on the node" },
      { id: 'B', text: "Read the layer digests that <code>crictl inspect</code> reports for the running container" },
      { id: 'C', text: "Read the mount table in <code>/proc/&lt;PID&gt;/mountinfo</code> for the container's root" },
      { id: 'D', text: "Read the image's manifest from the registry and compare it with the node's cache" }
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
      { id: 'A', text: "Search the audit log for a <code>responseStatus.code</code> of 404" },
      { id: 'B', text: "Search the node journal for the API server's rejected requests" },
      { id: 'C', text: "Search the audit log for <code>user.username: 'system:anonymous'</code>" },
      { id: 'D', text: "Search the events API in <code>kube-system</code> for auth warnings" }
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
      { id: 'A', text: "Match <code>evt.type = memfd_create</code>, or a cmdline starting <code>/memfd:</code>" },
      { id: 'B', text: "Match <code>evt.type = socket</code> followed by an <code>execve</code> in the container" },
      { id: 'C', text: "Match <code>evt.type = mprotect</code> where the new protection is read-only" },
      { id: 'D', text: "Match <code>evt.type = read</code> on a file under <code>/tmp</code> in the container" }
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
      { id: 'A', text: "Add early rules at <code>level: None</code> for the system components' read verbs" },
      { id: 'B', text: "Add a final rule at <code>level: None</code> for read verbs across every user and resource" },
      { id: 'C', text: "Add early rules at <code>level: Metadata</code> for every user, and omit the write verbs" },
      { id: 'D', text: "Add one rule at <code>level: RequestResponse</code> for all resources in all namespaces" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "A burst of <code>socket</code> calls followed by repeated <code>gettimeofday</code> invocations" },
      { id: 'B', text: "A burst of outbound <code>connect</code> calls to many distinct addresses or ports in a short window" },
      { id: 'C', text: "A burst of <code>bind</code> calls across a range of local ports on the loopback address" },
      { id: 'D', text: "A burst of <code>read</code> calls on <code>/etc/hosts</code> and <code>/etc/resolv.conf</code>" }
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
      { id: 'A', text: "Execute <code>gdb --batch --pid 14205</code>" },
      { id: 'B', text: "Execute <code>crictl inspect 14205</code>" },
      { id: 'C', text: "Execute <code>top -p 14205</code>" },
      { id: 'D', text: "Execute <code>strace -p 14205 -f -e trace=all</code>" }
    ],
    correctAnswers: ['D'],
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
      { id: 'B', text: "<code>--audit-log-maxbackup=365</code>" },
      { id: 'C', text: "<code>--log-retention-period=1y</code>" },
      { id: 'D', text: "<code>--audit-retention-days=365</code>" }
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
      { id: 'A', text: "Copy the container's writable layer off the node and carve the strings out of it" },
      { id: 'B', text: "Checkpoint the container with <code>crictl checkpoint</code> and export the archive" },
      { id: 'C', text: "Stop the container with <code>crictl stop</code> and collect the runtime's core file" },
      { id: 'D', text: "Dump the process with <code>gcore &lt;PID&gt;</code>, or LiME over its memory" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "<code>evt.type = connect and evt.dir = &lt; and container.id != host and not inbound</code>" },
      { id: 'B', text: "<code>evt.type = accept and evt.dir = &lt; and container.id != host and not outbound</code>" },
      { id: 'C', text: "<code>evt.type = recvfrom and fd.port = 53 and container.id != host</code>" },
      { id: 'D', text: "<code>evt.type = listen and fd.port = 443 and container.id != host</code>" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Set <code>engine: { kind: kmod }</code> and let the driver loader build the module" },
      { id: 'B', text: "Set <code>driver: { mode: force }</code> so the kernel module is preferred at start" },
      { id: 'C', text: "Set <code>engine: { kind: nodriver }</code> and read the events from the runtime" },
      { id: 'D', text: "Set <code>engine: { kind: ebpf }</code> and point <code>probe</code> at the compiled BPF object" }
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
      { id: 'A', text: "A <code>verb: list</code> on <code>secrets</code> with no namespace in <code>objectRef</code>" },
      { id: 'B', text: "A <code>verb: get</code> on <code>secrets</code> repeated across many namespaces" },
      { id: 'C', text: "A <code>verb: delete</code> on <code>secrets</code> in the <code>kube-system</code> namespace" },
      { id: 'D', text: "A <code>verb: watch</code> on <code>nodes</code> from an unexpected user agent" }
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
      { id: 'A', text: "<code>evt.type = bind and fd.port = 6443</code>" },
      { id: 'B', text: "<code>evt.type = accept and fd.port = 80</code>" },
      { id: 'C', text: "<code>evt.type = open and file.name = '/var/lib/kubelet/config.yaml'</code>" },
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
      { id: 'A', text: "<code>--audit-webhook-config-file=/etc/kubernetes/audit-webhook.yaml</code>" },
      { id: 'B', text: "<code>--audit-remote-syslog=splunk:514</code>" },
      { id: 'C', text: "<code>--audit-stream-url=https://siem.enterprise.com/logs</code>" },
      { id: 'D', text: "<code>--enable-audit-streaming=true</code>" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Match sustained container CPU above a threshold using Falco's metrics source" },
      { id: 'B', text: "Match outbound DNS queries whose answers resolve to unknown hosting ranges" },
      { id: 'C', text: "Match known miner process names and connections to the Stratum pool ports" },
      { id: 'D', text: "Match writes into <code>/tmp</code> followed by an <code>execve</code> of the written file" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Falco includes default rules for crypto-mining that detect execution of known mining binary names (<code>proc.name in (xmrig, minerd, cpuminer)</code>) and monitor outbound network connections to typical mining pool ports (3333, 4444, 7777) or payloads matching the Stratum RPC protocol.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Crypto-Mining", "Stratum", "Runtime-Detection"]
  }
];

export default K8S_CKS_QUESTIONS_8;
