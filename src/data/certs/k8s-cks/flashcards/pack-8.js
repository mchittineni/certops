export const K8S_CKS_FLASHCARDS_8 = [
  {
    "id": "k8s-cks-fc-176",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Kubernetes Audit Policy Levels: What are the 4 audit levels and their data captures?",
    "hint": "None, Metadata, Request, RequestResponse.",
    "back": "1. <strong>None</strong>: Do not log.<br>2. <strong>Metadata</strong>: User, timestamp, resource, verb (no bodies).<br>3. <strong>Request</strong>: Metadata + request body.<br>4. <strong>RequestResponse</strong>: Metadata + request + response bodies.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-177",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Policy Secrets Rule: Why must Secrets be audited at Metadata level?",
    "hint": "Prevents plaintext password logging to disk.",
    "back": "Logging Secrets at <code>Request</code> or <code>RequestResponse</code> writes <strong>plaintext passwords and keys to disk audit logs</strong>. Setting <code>level: Metadata</code> captures who accessed the Secret without exposing its contents.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-178",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Stages in Kubernetes: What are the 4 audit stages?",
    "hint": "RequestReceived, ResponseStarted, ResponseComplete, Panic.",
    "back": "1. <strong>RequestReceived</strong>: When request arrives.<br>2. <strong>ResponseStarted</strong>: Headers sent.<br>3. <strong>ResponseComplete</strong>: Full response body sent.<br>4. <strong>Panic</strong>: Logged on internal server panics.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-179",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco Shell Detection Rule: What condition detects an interactive shell in a container?",
    "hint": "execve with container.id != host and shell binary names.",
    "back": "<code>evt.type = execve and container.id != host and proc.name in (bash, sh, zsh) and proc.tty != 0</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-180",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco Rule Structure: What are the three core constructs in Falco rule files?",
    "hint": "Lists, macros, and rules.",
    "back": "1. <strong>lists</strong>: Sets of items (e.g., shell binaries).<br>2. <strong>macros</strong>: Reusable condition snippets.<br>3. <strong>rules</strong>: Complete alert definitions with conditions, output, priority, and tags.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-181",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falcosidekick: What role does it play in runtime security architecture?",
    "hint": "Central event dispatcher fanning out Falco alerts.",
    "back": "It is a companion daemon that receives Falco event streams and <strong>fans them out to 50+ external sinks</strong> (Slack, Elasticsearch, Kafka, Datadog, SIEMs).",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-182",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco File Tampering Detection: How does Falco detect /etc/passwd modification?",
    "hint": "open/openat with write flag targeting /etc/ paths.",
    "back": "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name startswith /etc/ and container.id != host</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-183",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Entering Namespaces with nsenter: How do you enter a container's network namespace from the host?",
    "hint": "nsenter with target PID and -n flag.",
    "back": "Run <strong>nsenter -t &lt;PID&gt; -n &lt;command&gt;</strong> (e.g., <code>nsenter -t &lt;PID&gt; -n tcpdump -i eth0</code>) to execute commands inside the container's network namespace.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-184",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "/dev/mem and /proc/kcore Risks: Why are accesses to these paths critical severity?",
    "hint": "Exposes raw physical and kernel memory.",
    "back": "They provide direct read/write access to <strong>host physical RAM and kernel memory</strong>, allowing an attacker to dump cryptographic keys or inject kernel shellcode.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-185",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco Output Channels: How do you enable syslog and stdout in falco.yaml?",
    "hint": "stdout_output and syslog_output enabled: true.",
    "back": "In <code>/etc/falco/falco.yaml</code>, set <strong>stdout_output.enabled: true</strong> and <strong>syslog_output.enabled: true</strong>.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-186",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "OverlayFS Diff Inspection: How do you inspect files modified inside a container?",
    "hint": "Inspect the container's upper diff directory on the host.",
    "back": "Navigate to the container's overlay2 storage layer on the host node (<strong>diff/ directory</strong>). All added, modified, or deleted files reside in that upper layer.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-187",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "system:anonymous Audit Log Hunting: What field identifies unauthenticated API calls?",
    "hint": "user.username matching system:anonymous.",
    "back": "Search audit logs for <strong>user.username: \"system:anonymous\"</strong>. This isolates all API requests made without authentication.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-188",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "memfd_create In-Memory Execution: How do attackers use memfd_create, and how to detect it?",
    "hint": "Executes binaries directly in RAM without touching disk.",
    "back": "Attackers create in-memory files via <code>memfd_create</code>. Falco detects this by monitoring <strong>evt.type = memfd_create</strong> or processes executing from <code>/memfd:</code> paths.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-189",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Policy Rule Ordering: How does kube-apiserver evaluate audit rules?",
    "hint": "Top to bottom; first matching rule wins.",
    "back": "Rules are evaluated <strong>top-to-bottom</strong>. The first matching rule applies. Put high-volume exclusion rules (<code>level: None</code>) at the top to filter noise.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-190",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco Port Scan Detection: What syscall pattern indicates a port scan?",
    "hint": "High frequency of connect syscalls to diverse IPs/ports.",
    "back": "A rapid burst of <strong>evt.type = connect</strong> system calls originating from a single container process targeting diverse external IPs and ports.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-191",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Tracing Syscalls with strace: How do you trace system calls of a running PID?",
    "hint": "strace -p &lt;PID&gt; -f.",
    "back": "Run <strong>strace -p &lt;PID&gt; -f</strong>. This attaches to the process, follows child threads (<code>-f</code>), and prints system calls in real time.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-192",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Log Retention Flags: What flags configure audit log retention on kube-apiserver?",
    "hint": "--audit-log-maxage, --audit-log-maxbackup, --audit-log-maxsize.",
    "back": "1. <strong>--audit-log-maxage</strong> (retention in days)<br>2. <strong>--audit-log-maxbackup</strong> (max rotated files to retain)<br>3. <strong>--audit-log-maxsize</strong> (max MB before rotation)",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-193",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Kernel Module Syscalls: Which syscalls load kernel modules dynamically?",
    "hint": "init_module and finit_module.",
    "back": "<strong>init_module</strong> and <strong>finit_module</strong>. Falco monitors these system calls to detect rootkits and unauthorized kernel module loading.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-194",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Volatile Memory Capture: How do you capture process memory from the host?",
    "hint": "gcore &lt;PID&gt; or reading /proc/&lt;PID&gt;/mem.",
    "back": "Run <strong>gcore &lt;PID&gt;</strong> or use memory forensics tools (LiME, AVML) to snapshot process memory from <code>/proc/&lt;PID&gt;/mem</code> without stopping the process.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-195",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco C2 Beacon Detection: What system call indicates an outbound connection?",
    "hint": "evt.type = connect with evt.dir = <.",
    "back": "<code>evt.type = connect and evt.dir = &lt; and (fd.typechar = 4 or fd.typechar = 6) and container.id != host</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-196",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco eBPF Engine: How do you switch Falco from kernel module to eBPF?",
    "hint": "Set engine.kind: ebpf in falco.yaml.",
    "back": "In <code>falco.yaml</code>, set <strong>engine: { kind: ebpf }</strong> and specify the path to the <code>falco-bpf.o</code> probe object.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-197",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Cluster-Wide Secret Reconnaissance: How does it appear in audit logs?",
    "hint": "verb: list on secrets with empty/null namespace.",
    "back": "An audit entry with <strong>verb: list</strong>, <strong>objectRef.resource: secrets</strong>, and an empty <strong>objectRef.namespace</strong> field.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-198",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Probing Kubelet Port 10250: Why is this an alert in Falco?",
    "hint": "Containers should never query the node's Kubelet management API.",
    "back": "Application containers have no valid reason to contact TCP port 10250. Monitoring <code>evt.type = connect and fd.port in (10250, 10255)</code> flags container breakout reconnaissance.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-199",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Webhook Streaming: What flag configures remote audit log forwarding?",
    "hint": "--audit-webhook-config-file.",
    "back": "Pass <strong>--audit-webhook-config-file=/path/to/webhook.conf</strong> to <code>kube-apiserver</code> to stream events over HTTPS to external SIEM collectors.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-200",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Stratum Crypto-Miner Detection: How does Falco identify mining activity?",
    "hint": "Miner process names and typical mining ports (3333, 4444).",
    "back": "By matching known miner process names (<code>xmrig</code>, <code>minerd</code>) and outbound traffic to standard mining pool ports (<strong>3333, 4444, 5555</strong>) or Stratum RPC headers.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_8;
