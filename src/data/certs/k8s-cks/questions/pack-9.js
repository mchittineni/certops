export const K8S_CKS_QUESTIONS_9 = [
  {
    id: "k8s-cks-201",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Inspecting Open File Descriptors of Running Containers",
    scenario: "A container is suspected of leaking data to an unknown external server. An administrator on the worker node knows the container's PID on the host is 8940.",
    question: "Where can the administrator view all open sockets, pipes, and files held by this process?",
    options: [
      { id: 'A', text: "Inspect the symbolic links in <code>/proc/8940/fd/</code>" },
      { id: 'B', text: "Read <code>/var/log/messages</code>" },
      { id: 'C', text: "Query <code>kubectl describe pod</code>" },
      { id: 'D', text: "Inspect <code>/etc/hosts</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Linux, every open file, socket, and pipe held by a process is represented as a numbered symbolic link under <code>/proc/&lt;PID&gt;/fd/</code>. Running <code>ls -l /proc/8940/fd/</code> displays all open network sockets (<code>socket:[inode]</code>) and active file paths.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["procfs", "File-Descriptors", "Forensics", "Linux-Internals"]
  },
  {
    id: "k8s-cks-202",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Priorities: Ordering and Thresholds",
    scenario: "A security operations team wants to configure Falco so that only high-impact threats generate pager alerts, while informational events are sent to cold storage.",
    question: "Which Falco priority levels represent the highest severity incidents?",
    options: [
      { id: 'A', text: "<code>NOTICE</code> and <code>WARNING</code>" },
      { id: 'B', text: "<code>HIGH</code>, <code>MEDIUM</code>, and <code>LOW</code>" },
      { id: 'C', text: "<code>EMERGENCY</code>, <code>ALERT</code>, and <code>CRITICAL</code>" },
      { id: 'D', text: "<code>DEBUG</code> and <code>INFO</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Falco follows standard Syslog RFC 5424 severity priorities: <code>EMERGENCY</code>, <code>ALERT</code>, <code>CRITICAL</code>, <code>ERROR</code>, <code>WARNING</code>, <code>NOTICE</code>, <code>INFO</code>, and <code>DEBUG</code>. Production paging systems typically trigger on <code>CRITICAL</code> and above.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Priorities", "Syslog", "Alerting"]
  },
  {
    id: "k8s-cks-203",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Modifications to Root Certificates with Falco",
    scenario: "An attacker attempts to perform man-in-the-middle attacks against container outbound HTTPS traffic by injecting a rogue root certificate into <code>/etc/ssl/certs/</code> inside a container.",
    question: "Which Falco rule triggers when an untrusted process writes to system certificate stores?",
    options: [
      { id: 'A', text: "<code>evt.type = read and fd.name = /etc/ssl/certs/ca-certificates.crt</code>" },
      { id: 'B', text: "<code>syscall = socket and fd.port = 443</code>" },
      { id: 'C', text: "<code>evt.type = execve and proc.name = 'curl'</code>" },
      { id: 'D', text: "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name startswith /etc/ssl/certs/</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Injecting malicious CAs allows attackers to intercept encrypted TLS sessions. A Falco rule monitoring file write events targeting certificate paths (such as <code>/etc/ssl/certs/</code>, <code>/usr/local/share/ca-certificates/</code>) immediately flags unauthorized certificate tampering.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Certificates", "MITM", "File-Integrity"]
  },
  {
    id: "k8s-cks-204",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing Dynamic RoleBinding and ClusterRoleBinding Changes",
    scenario: "An insider threat grants the <code>cluster-admin</code> ClusterRole to their personal ServiceAccount to maintain persistent administrative backdoor access.",
    question: "Which audit log filter captures privilege escalation via RBAC role bindings?",
    options: [
      { id: 'A', text: "Filter audit logs for <code>verb: get</code> on pods" },
      { id: 'B', text: "Filter audit logs for <code>objectRef.resource: services</code>" },
      { id: 'C', text: "Filter audit logs for <code>objectRef.resource in ('clusterrolebindings', 'rolebindings')</code> and <code>verb in ('create', 'update', 'patch')</code>" },
      { id: 'D', text: "Filter for HTTP 200 responses on the <code>/healthz</code> endpoint" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Privilege escalation through RBAC is tracked by auditing state-changing verbs (<code>create</code>, <code>update</code>, <code>patch</code>) targeting <code>rolebindings</code> and <code>clusterrolebindings</code>. The audit record contains the subject, role reference, and caller identity.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Log", "RBAC", "Privilege-Escalation", "Threat-Hunting"]
  },
  {
    id: "k8s-cks-205",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Identifying Container Process Capabilities at Runtime",
    scenario: "A forensic analyst investigates a suspicious running process (PID 5531) inside a container on a worker node to determine what Linux capabilities were granted to it.",
    question: "Which command decodes and displays the effective capabilities of the process?",
    options: [
      { id: 'A', text: "Execute <code>ls -l /proc/5531/cwd</code>" },
      { id: 'B', text: "Execute <code>crictl stats 5531</code>" },
      { id: 'C', text: "Execute <code>getpcaps 5531</code> (or <code>capsh --decode=$(grep CapEff /proc/5531/status | awk '{print $2}')</code>)" },
      { id: 'D', text: "Execute <code>kubectl get pod 5531 -o json</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>getpcaps &lt;PID&gt;</code> tool inspects process capability sets directly. Alternatively, extracting the hexadecimal bitmask from <code>CapEff</code> in <code>/proc/&lt;PID&gt;/status</code> and decoding it with <code>capsh --decode=&lt;hex&gt;</code> displays all active Linux capabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Capabilities", "getpcaps", "capsh", "Forensics"]
  },
  {
    id: "k8s-cks-206",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Hot-Reloading Falco Rules Without Process Restarts",
    scenario: "A security engineer adds new custom detection rules to <code>/etc/falco/falco_rules.local.yaml</code>. The running Falco daemon must load the new rules without dropping events or restarting.",
    question: "Which Linux signal instructs the Falco daemon to reload its configuration and rules files?",
    options: [
      { id: 'A', text: "Send <code>SIGUSR1</code> to kubelet" },
      { id: 'B', text: "Send <code>SIGTERM</code> using <code>systemctl stop falco</code>" },
      { id: 'C', text: "Send <code>SIGKILL</code> using <code>kill -9 &lt;falco-pid&gt;</code>" },
      { id: 'D', text: "Send <code>SIGHUP</code> to the Falco process using <code>kill -1 &lt;falco-pid&gt;</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Like many Linux security daemons, Falco intercepts the <code>SIGHUP</code> (signal 1) signal to trigger a dynamic reload of its configuration files and rule sets in memory without terminating the process or dropping active event interception.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "SIGHUP", "Hot-Reload", "Operations"]
  },
  {
    id: "k8s-cks-207",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Audit Log Truncation and Buffer Overflow Policies",
    scenario: "During an API flood attack, the audit backend buffer fills faster than logs can be written to disk. The cluster administrator must ensure that API requests are not blocked even if audit logging lags.",
    question: "Which <code>kube-apiserver</code> flag controls how the audit logging batch queue handles buffer overflow?",
    options: [
      { id: 'A', text: "<code>--audit-log-mode=batch</code> with <code>--audit-log-batch-buffer-size</code> and <code>--audit-log-batch-throttle-enable</code>" },
      { id: 'B', text: "<code>--audit-fail-action=ignore</code>" },
      { id: 'C', text: "<code>--audit-buffer-mode=unlimited</code>" },
      { id: 'D', text: "<code>--disable-audit-throttling=true</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The API server supports <code>--audit-log-mode=batch</code> (default) or <code>blocking</code>. In batch mode, events are buffered asynchronously. Configuring buffer size and throttling parameters prevents high API throughput from causing severe latency or request blocking on control plane nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Audit-Buffer", "Performance", "High-Availability"]
  },
  {
    id: "k8s-cks-208",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Container Breakout via Core_pattern Modification",
    scenario: "An attacker with container root privileges attempts to exploit a kernel core dump vulnerability by modifying <code>/proc/sys/kernel/core_pattern</code> to execute a script on the host upon a segmentation fault.",
    question: "Which Falco rule flags modifications to the Linux kernel core dump handler?",
    options: [
      { id: 'A', text: "<code>syscall = kill and sig = 11</code>" },
      { id: 'B', text: "<code>evt.type = read and fd.name = /proc/cpuinfo</code>" },
      { id: 'C', text: "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name = /proc/sys/kernel/core_pattern</code>" },
      { id: 'D', text: "<code>evt.type = execve and proc.name = 'gdb'</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Modifying <code>/proc/sys/kernel/core_pattern</code> allows an attacker to specify a program that the host kernel executes with root privileges whenever any process crashes. Falco flags write attempts to <code>/proc/sys/kernel/core_pattern</code> as a critical container breakout attempt.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "core_pattern", "Container-Breakout", "Kernel-Exploit"]
  },
  {
    id: "k8s-cks-209",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating Network Connections of Suspicious Pods with ss in Namespace",
    scenario: "An analyst suspects that a pod is participating in a DDoS attack. The pod has no network debugging utilities.",
    question: "How can the analyst run <code>ss -ant</code> to inspect active TCP connections within the pod's network namespace from the host node?",
    options: [
      { id: 'A', text: "Find the container PID using <code>crictl inspect</code>, then execute <code>nsenter -t &lt;PID&gt; -n ss -ant</code>" },
      { id: 'B', text: "Run <code>crictl logs</code> on the container" },
      { id: 'C', text: "Run <code>kubectl top pod</code>" },
      { id: 'D', text: "Inspect <code>/etc/resolv.conf</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By identifying the host PID of the container via <code>crictl inspect &lt;container-id&gt;</code> and running <code>nsenter -t &lt;PID&gt; -n ss -ant</code>, the investigator executes the host's <code>ss</code> binary inside the isolated network namespace of the pod, revealing all active connections without modifying the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["nsenter", "ss", "Forensics", "Incident-Response"]
  },
  {
    id: "k8s-cks-210",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing API Server Webhook Timeout Settings",
    scenario: "A slow external audit webhook is causing API server request processing to stall.",
    question: "Which parameter in the audit webhook configuration file limits the time <code>kube-apiserver</code> waits for an audit webhook response?",
    options: [
      { id: 'A', text: "Disable TLS on the webhook endpoint" },
      { id: 'B', text: "Set <code>--request-timeout=1s</code> on kubelet" },
      { id: 'C', text: "Set <code>--audit-timeout=immediate</code> on the API server" },
      { id: 'D', text: "Configure <code>timeout</code> in the webhook client configuration (or <code>--audit-webhook-batch-max-wait</code>)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The audit webhook configuration file specifies a client configuration with a <code>timeout</code> duration (e.g., <code>timeout: 5s</code>). This ensures that network delays or webhook server slowness do not degrade the performance of the Kubernetes API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Webhook", "Timeouts", "Performance", "kube-apiserver"]
  },
  {
    id: "k8s-cks-211",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Packet Sniffing inside Containers with Falco",
    scenario: "An attacker uses a compromised pod with <code>CAP_NET_RAW</code> to run <code>tcpdump</code> or execute packet capture via raw sockets.",
    question: "Which Falco event flags the initialization of raw packet capturing sockets?",
    options: [
      { id: 'A', text: "<code>evt.type = bind and fd.port = 80</code>" },
      { id: 'B', text: "<code>evt.type = connect and fd.port = 53</code>" },
      { id: 'C', text: "<code>evt.type = socket and evt.arg.domain = AF_PACKET and container.id != host</code>" },
      { id: 'D', text: "<code>evt.type = listen and fd.port = 443</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Creating a packet sniffing interface (such as for <code>tcpdump</code> or <code>wireshark</code>) requires creating a socket in the <code>AF_PACKET</code> domain with <code>SOCK_RAW</code>. Falco intercepts <code>evt.type = socket and evt.arg.domain = AF_PACKET</code> to immediately detect unauthorized network packet sniffing inside containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Packet-Sniffing", "AF_PACKET", "CAP_NET_RAW"]
  },
  {
    id: "k8s-cks-212",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Securing Audit Log Files against Tampering on Host Nodes",
    scenario: "An attacker compromises a worker node and attempts to delete audit trails in <code>/var/log/kubernetes/audit.log</code> to conceal their footprints.",
    question: "Which Linux file attribute makes audit log files append-only, preventing truncation or deletion even by root?",
    options: [
      { id: 'A', text: "Execute <code>setfacl -m u:root:r /var/log/kubernetes/audit.log</code>" },
      { id: 'B', text: "Execute <code>chmod 444 /var/log/kubernetes/audit.log</code>" },
      { id: 'C', text: "Execute <code>chattr +a /var/log/kubernetes/audit.log</code>" },
      { id: 'D', text: "Execute <code>chown nobody:nogroup /var/log/kubernetes/audit.log</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting the append-only attribute via <code>chattr +a &lt;file&gt;</code> prevents processes (even root) from overwriting, truncating, or deleting the file. Data can only be appended to the end of the file, protecting audit records from tampering.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["chattr", "Append-Only", "Log-Integrity", "Forensics"]
  },
  {
    id: "k8s-cks-213",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Unexpected Process Spawns in Minimal Containers",
    scenario: "A NGINX web proxy container is designed to run only the <code>nginx</code> master and worker processes. An exploit attempts to spawn <code>whoami</code> or <code>hostname</code>.",
    question: "Which Falco rule pattern enforces a strict process allow-list for a designated container image?",
    options: [
      { id: 'A', text: "<code>container.image.repository = 'nginx' and evt.type = execve and not proc.name in (nginx)</code>" },
      { id: 'B', text: "<code>evt.type = read and file.name = '/etc/nginx/nginx.conf'</code>" },
      { id: 'C', text: "<code>container.name = 'nginx' and syscall = 'fork'</code>" },
      { id: 'D', text: "<code>evt.type = connect and fd.port = 80</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized containers (like NGINX or Redis), security teams define strict process whitelists. A rule matching <code>container.image.repository = 'nginx' and evt.type = execve and not proc.name in (nginx)</code> alerts immediately if an attacker executes unexpected discovery utilities (e.g., <code>id</code>, <code>whoami</code>, <code>cat</code>).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Process-Allowlist", "NGINX", "Anomalous-Process"]
  },
  {
    id: "k8s-cks-214",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing API Eviction Requests during DoS Attacks",
    scenario: "An attacker uses a compromised ServiceAccount to trigger mass pod evictions across multiple namespaces.",
    question: "Which subresource in the Kubernetes audit log tracks pod eviction API calls?",
    options: [
      { id: 'A', text: "<code>objectRef.subresource: 'status'</code>" },
      { id: 'B', text: "<code>objectRef.subresource: 'eviction'</code> under resource <code>pods</code>" },
      { id: 'C', text: "<code>objectRef.resource: 'deployments/scale'</code>" },
      { id: 'D', text: "<code>objectRef.resource: 'nodes/drain'</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Programmatic pod evictions utilize the pod eviction subresource (<code>POST /api/v1/namespaces/{ns}/pods/{name}/eviction</code>). Filtering audit logs for <code>objectRef.resource: pods</code> and <code>objectRef.subresource: eviction</code> highlights eviction storms triggered by malicious callers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Log", "Eviction", "Denial-of-Service", "Threat-Hunting"]
  },
  {
    id: "k8s-cks-215",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting SSH Server Spawning inside Containers with Falco",
    scenario: "A compromised container spawns an OpenSSH daemon (<code>sshd</code>) to establish an unauthorized remote access channel.",
    question: "Which Falco condition detects unauthorized listening services on SSH port 22 inside a container?",
    options: [
      { id: 'A', text: "<code>evt.type = accept and fd.port = 443</code>" },
      { id: 'B', text: "<code>evt.type = connect and fd.port = 80</code>" },
      { id: 'C', text: "<code>evt.type = execve and proc.name = 'sshd' and container.id = host</code>" },
      { id: 'D', text: "<code>evt.type = listen and fd.port = 22 and container.id != host</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Containers should virtually never run SSH servers. The condition <code>evt.type = listen and fd.port = 22 and container.id != host</code> flags any container attempting to bind and listen on the SSH port, stopping backdoor persistence attempts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "sshd", "Port-22", "Backdoor-Detection"]
  },
  {
    id: "k8s-cks-216",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Syslog Remote Streaming for Kubelet and Node Logs",
    scenario: "To ensure host logs are safeguarded if a worker node is wiped by an attacker, <code>systemd-journald</code> or <code>rsyslog</code> must forward all logs to a remote collector.",
    question: "Which configuration in <code>/etc/rsyslog.d/50-remote.conf</code> forwards all system and container logs over TCP to a remote syslog server?",
    options: [
      { id: 'A', text: "<code>forward.all = true</code>" },
      { id: 'B', text: "<code>*.* @@syslog.enterprise.com:514</code>" },
      { id: 'C', text: "<code>systemd.forward_to_syslog = yes</code>" },
      { id: 'D', text: "<code>*.* @syslog.enterprise.com:514</code> (UDP)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In <code>rsyslog</code>, the syntax <code>*.* @@&lt;host&gt;:&lt;port&gt;</code> specifies reliable streaming over TCP (using double <code>@@</code>) for all log facilities and severities to the central logging server, ensuring audit persistence even if local storage is cleared.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["rsyslog", "Remote-Logging", "Log-Hardening", "SIEM"]
  },
  {
    id: "k8s-cks-217",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting System Clock Tampering with Falco",
    scenario: "An attacker alters the system clock using <code>settimeofday</code> or <code>clock_settime</code> inside a container that has <code>CAP_SYS_TIME</code> in order to invalidate TLS certificate validation or corrupt audit timestamps.",
    question: "Which Falco event condition detects system time modifications?",
    options: [
      { id: 'A', text: "<code>evt.type in (settimeofday, clock_settime) and container.id != host</code>" },
      { id: 'B', text: "<code>evt.type = nanosleep</code>" },
      { id: 'C', text: "<code>syscall = adjtimex and container.id = host</code>" },
      { id: 'D', text: "<code>evt.type = gettimeofday</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modifying system time can invalidate security tokens, cause replay attacks, and disrupt audit logs. Monitoring <code>evt.type in (settimeofday, clock_settime)</code> alerts on any workload attempting to manipulate system clocks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "CAP_SYS_TIME", "Time-Tampering", "Audit-Integrity"]
  },
  {
    id: "k8s-cks-218",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Inspecting Container Environment Variables Post-Compromise",
    scenario: "An incident responder must extract the environment variables of a compromised container process (PID 9102) on a worker node without executing commands inside the container.",
    question: "Which file in the Linux <code>/proc</code> filesystem contains the process's raw environment variables?",
    options: [
      { id: 'A', text: "<code>cat /proc/9102/environ | tr '\\0' '\\n'</code>" },
      { id: 'B', text: "<code>cat /proc/9102/cmdline</code>" },
      { id: 'C', text: "<code>cat /proc/9102/maps</code>" },
      { id: 'D', text: "<code>cat /proc/9102/status</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>/proc/&lt;PID&gt;/environ</code> file contains the initial environment variables passed to the process, separated by null bytes (<code>\\0</code>). Piping through <code>tr '\\0' '\\n'</code> formats the key-value pairs cleanly for inspection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["procfs", "environ", "Forensics", "Incident-Response"]
  },
  {
    id: "k8s-cks-219",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Cron Job Injections with Falco",
    scenario: "An attacker establishes persistence on a compromised node by creating a malicious cron job in <code>/etc/cron.d/</code>.",
    question: "Which Falco rule flags unauthorized persistence mechanisms created in system scheduling directories?",
    options: [
      { id: 'A', text: "<code>syscall = sleep and evt.arg.duration &gt; 3600</code>" },
      { id: 'B', text: "<code>evt.type = read and fd.name = /etc/crontab</code>" },
      { id: 'C', text: "<code>evt.type = execve and proc.name = 'crond'</code>" },
      { id: 'D', text: "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name startswith /etc/cron</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Attackers commonly establish persistence by writing scheduled scripts to <code>/etc/cron*</code> or <code>/var/spool/cron/crontabs/</code>. A Falco rule monitoring file write events to these scheduling directories flags persistence installation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "Cron", "Persistence", "Host-Security"]
  },
  {
    id: "k8s-cks-220",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Falco gRPC Output for High-Speed Telemetry Streaming",
    scenario: "An enterprise requires streaming millions of Falco security events directly into a high-throughput Go-based security event collector with mutual TLS encryption.",
    question: "Which Falco output channel provides high-speed binary streaming over gRPC?",
    options: [
      { id: 'A', text: "Configure <code>program_output</code> with <code>curl</code> commands" },
      { id: 'B', text: "Configure <code>file_output</code> with a shared NFS mount" },
      { id: 'C', text: "Enable <code>syslog_output</code> over UDP port 514" },
      { id: 'D', text: "Enable <code>grpc_output: { enabled: true }</code> and configure <code>grpc: { threadiness: 8 }</code> in <code>falco.yaml</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Falco includes a high-performance gRPC server. Enabling <code>grpc_output: { enabled: true }</code> allows external microservices to connect to Falco's gRPC stream, supporting streaming telemetry with mutual TLS authentication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "gRPC", "High-Throughput", "Streaming"]
  },
  {
    id: "k8s-cks-221",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating Parent-Child Process Trees of Compromised Pods",
    scenario: "An alert indicates an unexpected process <code>nc</code> (netcat) is running inside a container. The investigator needs to see the full process lineage (who spawned netcat).",
    question: "Which Linux command displays the complete process hierarchy with parent-child relationships and PIDs?",
    options: [
      { id: 'A', text: "Execute <code>crictl stats</code>" },
      { id: 'B', text: "Execute <code>ps -ef | grep &lt;PID&gt;</code> without tree flags" },
      { id: 'C', text: "Execute <code>pstree -p -s &lt;PID&gt;</code>" },
      { id: 'D', text: "Execute <code>uname -r</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>pstree -p -s &lt;PID&gt;</code> command shows the parent lineage (<code>-s</code>) and process IDs (<code>-p</code>) of a specific process, tracing back through container shims and init processes to reveal exactly how the rogue process was spawned.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["pstree", "Process-Tree", "Forensics", "Lineage"]
  },
  {
    id: "k8s-cks-222",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Dynamic Kernel BPF Program Injections with Falco",
    scenario: "An attacker uses an exploit to load unauthorized eBPF programs into the kernel to manipulate network packets and hide rootkit processes.",
    question: "Which Linux system call is used to load BPF programs, and how is it monitored by Falco?",
    options: [
      { id: 'A', text: "Monitor <code>evt.type = bpf</code> system calls originating from unapproved processes" },
      { id: 'B', text: "Monitor <code>evt.type = ioctl</code> on <code>/dev/null</code>" },
      { id: 'C', text: "Monitor <code>evt.type = mmap</code> on <code>/etc/shadow</code>" },
      { id: 'D', text: "Monitor <code>syscall = socket</code> for ICMP packets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "eBPF programs are loaded into the Linux kernel via the <code>bpf()</code> system call. Falco monitors <code>evt.type = bpf</code> and can alert whenever an unexpected process invokes the <code>bpf</code> syscall, flagging stealthy eBPF rootkit activities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "bpf-syscall", "eBPF-Security", "Rootkits"]
  },
  {
    id: "k8s-cks-223",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Verifying Integrity of Container Executables via SHA-256 Hashes",
    scenario: "An investigator suspects that the <code>nginx</code> binary inside a running container was replaced by an attacker with a trojanized version.",
    question: "How can the investigator verify the binary's integrity against the original container image?",
    options: [
      { id: 'A', text: "Reboot the worker node to see if the hash changes" },
      { id: 'B', text: "Compare the file sizes using <code>ls -lh</code>" },
      { id: 'C', text: "Calculate the SHA-256 hash of the running binary on the host (<code>sha256sum /proc/&lt;PID&gt;/root/usr/sbin/nginx</code>) and compare it against the hash from a freshly pulled original image" },
      { id: 'D', text: "Check <code>kubectl describe pod</code> for checksum mismatch errors" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Accessing the container's root filesystem via <code>/proc/&lt;PID&gt;/root/</code> and running <code>sha256sum</code> allows computing the cryptographic hash of the active binary. Comparing this hash with the binary from the verified image manifest identifies file tampering.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["sha256sum", "File-Integrity", "Forensics", "procfs"]
  },
  {
    id: "k8s-cks-224",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Auditing API Server Webhook Mutating Actions",
    scenario: "A malicious mutating admission webhook is covertly altering pod specifications to inject unauthorized sidecar containers.",
    question: "Where can an investigator find evidence of webhook modifications in Kubernetes audit logs?",
    options: [
      { id: 'A', text: "Filter audit logs at <code>level: Metadata</code> for HTTP 200" },
      { id: 'B', text: "Check <code>dmesg</code> for webhook kernel events" },
      { id: 'C', text: "Inspect the <code>responseObject</code> in audit logs recorded at <code>level: RequestResponse</code> and examine the <code>mutation: true</code> annotations added by the admission chain" },
      { id: 'D', text: "Read <code>/var/log/syslog</code> on worker nodes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When mutating webhooks alter incoming resources, the API server records admission annotations in the audit event indicating which webhooks mutated the object. Setting <code>level: RequestResponse</code> captures the final mutated <code>responseObject</code> for forensic comparison against the submitted manifest.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Audit-Log", "Mutating-Webhooks", "RequestResponse", "Tampering"]
  },
  {
    id: "k8s-cks-225",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Namespace Traversal and Container Escape via cgroups",
    scenario: "An attacker exploits a known vulnerability (e.g., CVE-2022-0492) by modifying the <code>release_agent</code> file in a v1 cgroup to execute an arbitrary command on the host.",
    question: "Which Falco rule flags container attempts to write to cgroup release_agent files?",
    options: [
      { id: 'A', text: "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name endswith /release_agent and container.id != host</code>" },
      { id: 'B', text: "<code>evt.type = read and fd.name = /sys/fs/cgroup/cpu/cpu.shares</code>" },
      { id: 'C', text: "<code>evt.type = execve and proc.name = 'systemd'</code>" },
      { id: 'D', text: "<code>syscall = mkdir and dir startswith /sys</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Writing to a cgroup's <code>release_agent</code> file allows an attacker with root privileges inside a container to trigger the host kernel to execute an arbitrary binary with host root privileges when the cgroup empties. Falco alerts on writes to <code>*release_agent</code> from containers as a critical escape attempt.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Falco", "release_agent", "cgroups", "Container-Breakout"]
  }
];

export default K8S_CKS_QUESTIONS_9;
