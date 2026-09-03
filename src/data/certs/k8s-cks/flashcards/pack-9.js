export const K8S_CKS_FLASHCARDS_9 = [
  {
    "id": "k8s-cks-fc-201",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Process Open File Descriptors: Where on Linux do you inspect open sockets and files for a PID?",
    "hint": "/proc/&lt;PID&gt;/fd/ directory.",
    "back": "Inspect the symbolic links in <strong>/proc/&lt;PID&gt;/fd/</strong>. Running <code>ls -l /proc/&lt;PID&gt;/fd/</code> displays all open sockets, pipes, and file paths.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-202",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco Priority Levels: What are the standard Syslog priorities used by Falco?",
    "hint": "EMERGENCY, ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG.",
    "back": "<strong>EMERGENCY, ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG</strong>. Pagers generally alert on CRITICAL, ALERT, and EMERGENCY.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-203",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Root Certificate Tampering: Which path should Falco monitor for unauthorized CA additions?",
    "hint": "/etc/ssl/certs/ and /usr/local/share/ca-certificates/.",
    "back": "Monitor write events to <strong>/etc/ssl/certs/</strong> or <code>/etc/pki/</code>. Adding rogue certificates enables man-in-the-middle decryption of TLS sessions.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-204",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "RBAC Privilege Escalation Hunting: What audit filter captures role binding modifications?",
    "hint": "resource rolebindings/clusterrolebindings and verbs create/update/patch.",
    "back": "Filter audit logs for <strong>objectRef.resource in ('rolebindings', 'clusterrolebindings')</strong> and <strong>verb in ('create', 'update', 'patch')</strong>.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-205",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Decoding Process Capabilities: What command decodes CapEff from /proc/[pid]/status?",
    "hint": "capsh --decode=&lt;hex&gt; or getpcaps &lt;PID&gt;.",
    "back": "Run <strong>getpcaps &lt;PID&gt;</strong> or pass the hexadecimal string from <code>CapEff</code> to <strong>capsh --decode=&lt;hex&gt;</strong> to view all active capabilities.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-206",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Hot-Reloading Falco: What Linux signal reloads Falco rules without downtime?",
    "hint": "SIGHUP (kill -1).",
    "back": "Send <strong>SIGHUP (kill -1 &lt;falco-pid&gt;)</strong>. Falco reloads rules and configuration files in memory without dropping packets or restarting.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-207",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Buffer Overflow Handling: What mode prevents API server blocking under heavy audit load?",
    "hint": "--audit-log-mode=batch.",
    "back": "<strong>--audit-log-mode=batch</strong> buffers events asynchronously, ensuring API server latency is not impacted if audit writes encounter temporary disk bottlenecks.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-208",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "core_pattern Container Escape: Why is writing to /proc/sys/kernel/core_pattern dangerous?",
    "hint": "Allows host kernel execution of an arbitrary script on crash.",
    "back": "<code>core_pattern</code> defines the program the host kernel executes with root privileges on process segmentation faults. Falco flags writes to this path as an escape attempt.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-209",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "nsenter with ss: How do you view a pod's TCP connections using host tools?",
    "hint": "nsenter -t &lt;PID&gt; -n ss -ant.",
    "back": "Run <strong>nsenter -t &lt;container-pid&gt; -n ss -ant</strong>. This runs the host's <code>ss</code> tool directly inside the container's isolated network namespace.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-210",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Audit Webhook Timeouts: Why configure a client timeout in audit-webhook config?",
    "hint": "Prevents slow or down webhooks from blocking API server threads.",
    "back": "Setting <strong>timeout: 5s</strong> in the audit webhook config ensures that network latency or webhook failures do not stall <code>kube-apiserver</code> execution.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-211",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "AF_PACKET Packet Sniffing: What does Falco event evt.type = socket with domain AF_PACKET detect?",
    "hint": "Unauthorized network sniffing or tcpdump execution.",
    "back": "It detects creation of raw packet capture sockets (used by <code>tcpdump</code>, <code>wireshark</code>), identifying unauthorized network packet sniffing inside containers.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-212",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "chattr +a on Audit Logs: What does the append-only attribute enforce?",
    "hint": "Prevents overwriting, truncating, or deleting audit logs.",
    "back": "Setting <strong>chattr +a &lt;file&gt;</strong> ensures that data can only be appended. Even root cannot truncate, overwrite, or delete the audit file.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-213",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Specialized Container Allowlist: How do you detect anomalous commands in NGINX pods?",
    "hint": "evt.type = execve and not proc.name in (nginx).",
    "back": "<code>container.image.repository = 'nginx' and evt.type = execve and not proc.name in (nginx)</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-214",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Pod Eviction Subresource: Which audit log subresource indicates eviction requests?",
    "hint": "objectRef.subresource: 'eviction'.",
    "back": "Audit events with <strong>objectRef.resource: pods</strong> and <strong>objectRef.subresource: eviction</strong> indicate programmatic pod evictions.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-215",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "SSH Server in Container: What Falco condition flags sshd backdoors?",
    "hint": "evt.type = listen and fd.port = 22 and container.id != host.",
    "back": "<code>evt.type = listen and fd.port = 22 and container.id != host</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-216",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "rsyslog TCP Streaming: What is the rsyslog syntax for remote TCP forwarding?",
    "hint": "*.* @@&lt;server&gt;:&lt;port&gt;.",
    "back": "Add <strong>*.* @@&lt;server&gt;:514</strong> (double <code>@@</code> indicates TCP) in <code>/etc/rsyslog.d/</code> for reliable streaming to external log servers.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-217",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Clock Tampering Detection: Which syscalls does Falco monitor for time alteration?",
    "hint": "settimeofday and clock_settime.",
    "back": "<strong>settimeofday</strong> and <strong>clock_settime</strong>. Altering system time can invalidate certificates, manipulate token expirations, and scramble audit logs.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-218",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Inspecting /proc/[pid]/environ: How do you format null-byte separated environment variables?",
    "hint": "cat /proc/&lt;PID&gt;/environ | tr '\\0' '\\n'.",
    "back": "Run <strong>cat /proc/&lt;PID&gt;/environ | tr '\\0' '\\n'</strong> to replace null delimiters with newlines and inspect the process's runtime environment.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-219",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Cron Persistence Detection: Which directory write events does Falco flag?",
    "hint": "Writes to /etc/cron* or /var/spool/cron/.",
    "back": "Writes targeting <strong>/etc/cron*</strong> or <code>/var/spool/cron/</code> are flagged by Falco as potential attacker persistence mechanisms.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-220",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Falco gRPC Streaming: What is the main benefit of Falco's gRPC output?",
    "hint": "High-throughput binary streaming with mutual TLS support.",
    "back": "It provides a <strong>high-performance, low-latency binary stream</strong> of security events over gRPC, supporting mutual TLS authentication for external collectors.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-221",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Tracing Process Hierarchy with pstree: What command displays parent lineage with PIDs?",
    "hint": "pstree -p -s &lt;PID&gt;.",
    "back": "Run <strong>pstree -p -s &lt;PID&gt;</strong>. It prints the full ancestry tree of the target process up to init/systemd.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-222",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "bpf() Syscall Detection: Why does Falco alert on the bpf system call?",
    "hint": "Detects unauthorized eBPF rootkit loading.",
    "back": "Attackers can load eBPF programs to intercept packets or conceal processes. Falco flags <strong>evt.type = bpf</strong> to detect stealthy eBPF rootkit injection.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-223",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Verifying Binary Hashes: How do you verify a container binary from the host?",
    "hint": "sha256sum /proc/&lt;PID&gt;/root/&lt;path-to-binary&gt;.",
    "back": "Calculate <strong>sha256sum /proc/&lt;PID&gt;/root/usr/sbin/nginx</strong> and compare it against the checksum from the original verified container image.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-224",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "Mutating Webhook Auditing: How do you detect webhook modifications in audit logs?",
    "hint": "Audit at RequestResponse level and inspect admission webhook annotations.",
    "back": "Enable <strong>level: RequestResponse</strong>. The audit event includes the final mutated object and annotations detailing which webhook modified the request.",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  },
  {
    "id": "k8s-cks-fc-225",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d5",
    "front": "cgroups release_agent Exploit: How does Falco detect this container breakout?",
    "hint": "Writes to files ending with /release_agent from a container.",
    "back": "<code>evt.type in (open, openat) and evt.is_open_write=true and fd.name endswith /release_agent and container.id != host</code>",
    "tags": [
      "CKS",
      "Monitoring,"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_9;
