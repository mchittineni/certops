export const K8S_CKS_QUESTIONS_18 = [
  {
    id: "k8s-cks-426",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Layers and Secret Leaks: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Secret Leak Prevention to prevent private SSH keys or API tokens needed during build time from being baked into the intermediate layers of a published container image.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Preventing secret leakage in container build cache and layers with docker build secret mounts is under consideration.",
    options: [
      { id: 'A', text: "Pass API tokens as Dockerfile `ARG` variables and delete them in a subsequent `RUN rm` command." },
      { id: 'B', text: "Hardcode the private SSH key in a file and delete it before committing." },
      { id: 'C', text: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions." },
      { id: 'D', text: "Encode secrets in base64 within the Dockerfile." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions. Even if a file is deleted in a subsequent Dockerfile `RUN` instruction, it remains permanently accessible in the earlier layer history. Using BuildKit secret mounts (`--mount=type=secret`) exposes credentials only during build execution without recording them in any image layer.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Dr Failover"]
  },
  {
    id: "k8s-cks-427",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Layers and Secret Leaks: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Secret Leak Prevention to prevent private SSH keys or API tokens needed during build time from being baked into the intermediate layers of a published container image.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Preventing secret leakage in container build cache and layers with docker build secret mounts is under consideration.",
    options: [
      { id: 'A', text: "Encode secrets in base64 within the Dockerfile." },
      { id: 'B', text: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions." },
      { id: 'C', text: "Pass API tokens as Dockerfile `ARG` variables and delete them in a subsequent `RUN rm` command." },
      { id: 'D', text: "Hardcode the private SSH key in a file and delete it before committing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions. Even if a file is deleted in a subsequent Dockerfile `RUN` instruction, it remains permanently accessible in the earlier layer history. Using BuildKit secret mounts (`--mount=type=secret`) exposes credentials only during build execution without recording them in any image layer.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Secret Leak Prevention", "Secret Mounts", "High Load Scale"]
  },
  {
    id: "k8s-cks-428",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Layers and Secret Leaks: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Secret Leak Prevention to prevent private SSH keys or API tokens needed during build time from being baked into the intermediate layers of a published container image.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Preventing secret leakage in container build cache and layers with docker build secret mounts is under consideration.",
    options: [
      { id: 'A', text: "Encode secrets in base64 within the Dockerfile." },
      { id: 'B', text: "Hardcode the private SSH key in a file and delete it before committing." },
      { id: 'C', text: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions." },
      { id: 'D', text: "Pass API tokens as Dockerfile `ARG` variables and delete them in a subsequent `RUN rm` command." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions. Even if a file is deleted in a subsequent Dockerfile `RUN` instruction, it remains permanently accessible in the earlier layer history. Using BuildKit secret mounts (`--mount=type=secret`) exposes credentials only during build execution without recording them in any image layer.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Security Compliance"]
  },
  {
    id: "k8s-cks-429",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Layers and Secret Leaks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Secret Leak Prevention to prevent private SSH keys or API tokens needed during build time from being baked into the intermediate layers of a published container image.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Preventing secret leakage in container build cache and layers with docker build secret mounts is under consideration.",
    options: [
      { id: 'A', text: "Encode secrets in base64 within the Dockerfile." },
      { id: 'B', text: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions." },
      { id: 'C', text: "Hardcode the private SSH key in a file and delete it before committing." },
      { id: 'D', text: "Pass API tokens as Dockerfile `ARG` variables and delete them in a subsequent `RUN rm` command." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions. Even if a file is deleted in a subsequent Dockerfile `RUN` instruction, it remains permanently accessible in the earlier layer history. Using BuildKit secret mounts (`--mount=type=secret`) exposes credentials only during build execution without recording them in any image layer.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-430",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container Image Layers and Secret Leaks: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Secret Leak Prevention to prevent private SSH keys or API tokens needed during build time from being baked into the intermediate layers of a published container image.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Preventing secret leakage in container build cache and layers with docker build secret mounts is under consideration.",
    options: [
      { id: 'A', text: "Encode secrets in base64 within the Dockerfile." },
      { id: 'B', text: "Pass API tokens as Dockerfile `ARG` variables and delete them in a subsequent `RUN rm` command." },
      { id: 'C', text: "Hardcode the private SSH key in a file and delete it before committing." },
      { id: 'D', text: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use BuildKit secret mounts (`RUN --mount=type=secret,id=mysecret`) rather than ARG or ENV instructions. Even if a file is deleted in a subsequent Dockerfile `RUN` instruction, it remains permanently accessible in the earlier layer history. Using BuildKit secret mounts (`--mount=type=secret`) exposes credentials only during build execution without recording them in any image layer.",
    referenceUrl: "https://docs.docker.com/build/building/secrets/",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Resilience Failure"]
  },
  {
    id: "k8s-cks-431",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Runtime Threat Detection with Falco: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Runtime Security to detect in real-time when a shell is spawned inside a production container or an unauthorized binary is executed in `/tmp`.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Detecting anomalous container behavior and kernel events with Falco is under consideration.",
    options: [
      { id: 'A', text: "Periodically run `ps aux` manually on worker nodes." },
      { id: 'B', text: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules." },
      { id: 'C', text: "Review application standard output logs once every month." },
      { id: 'D', text: "Disable container logging to reduce disk I/O." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules. Falco is an open-source cloud-native runtime security tool that hooks into the Linux kernel (via eBPF or kernel module). It analyzes system call streams against rules, detecting anomalous events like spawning shells, modifying system binaries, or opening suspicious outbound connections in real time.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Falco Runtime Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-432",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Runtime Threat Detection with Falco: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Runtime Security to detect in real-time when a shell is spawned inside a production container or an unauthorized binary is executed in `/tmp`.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Detecting anomalous container behavior and kernel events with Falco is under consideration.",
    options: [
      { id: 'A', text: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules." },
      { id: 'B', text: "Disable container logging to reduce disk I/O." },
      { id: 'C', text: "Review application standard output logs once every month." },
      { id: 'D', text: "Periodically run `ps aux` manually on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules. Falco is an open-source cloud-native runtime security tool that hooks into the Linux kernel (via eBPF or kernel module). It analyzes system call streams against rules, detecting anomalous events like spawning shells, modifying system binaries, or opening suspicious outbound connections in real time.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Falco Runtime Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-433",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Runtime Threat Detection with Falco: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Runtime Security to detect in real-time when a shell is spawned inside a production container or an unauthorized binary is executed in `/tmp`.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Detecting anomalous container behavior and kernel events with Falco is under consideration.",
    options: [
      { id: 'A', text: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules." },
      { id: 'B', text: "Periodically run `ps aux` manually on worker nodes." },
      { id: 'C', text: "Review application standard output logs once every month." },
      { id: 'D', text: "Disable container logging to reduce disk I/O." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules. Falco is an open-source cloud-native runtime security tool that hooks into the Linux kernel (via eBPF or kernel module). It analyzes system call streams against rules, detecting anomalous events like spawning shells, modifying system binaries, or opening suspicious outbound connections in real time.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Falco Runtime Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-434",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Runtime Threat Detection with Falco: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Runtime Security to detect in real-time when a shell is spawned inside a production container or an unauthorized binary is executed in `/tmp`.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Detecting anomalous container behavior and kernel events with Falco is under consideration.",
    options: [
      { id: 'A', text: "Disable container logging to reduce disk I/O." },
      { id: 'B', text: "Review application standard output logs once every month." },
      { id: 'C', text: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules." },
      { id: 'D', text: "Periodically run `ps aux` manually on worker nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules. Falco is an open-source cloud-native runtime security tool that hooks into the Linux kernel (via eBPF or kernel module). It analyzes system call streams against rules, detecting anomalous events like spawning shells, modifying system binaries, or opening suspicious outbound connections in real time.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Falco Runtime Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-435",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Runtime Threat Detection with Falco: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Runtime Security to detect in real-time when a shell is spawned inside a production container or an unauthorized binary is executed in `/tmp`.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Detecting anomalous container behavior and kernel events with Falco is under consideration.",
    options: [
      { id: 'A', text: "Review application standard output logs once every month." },
      { id: 'B', text: "Periodically run `ps aux` manually on worker nodes." },
      { id: 'C', text: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules." },
      { id: 'D', text: "Disable container logging to reduce disk I/O." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Falco as a DaemonSet to monitor Linux kernel system calls and alert on anomalous runtime activities matching behavioral rules. Falco is an open-source cloud-native runtime security tool that hooks into the Linux kernel (via eBPF or kernel module). It analyzes system call streams against rules, detecting anomalous events like spawning shells, modifying system binaries, or opening suspicious outbound connections in real time.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Falco Runtime Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-436",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API Server Audit Logging: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Audit Logging to record an immutable audit trail of every administrative request, secret retrieval, and resource alteration sent to the Kubernetes API server.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring audit policies and backends for API server request auditing is under consideration.",
    options: [
      { id: 'A', text: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest." },
      { id: 'B', text: "Rely on worker node syslog files without configuring API server audit logging." },
      { id: 'C', text: "Store audit logs exclusively in temporary container memory." },
      { id: 'D', text: "Set audit log level to None across all resources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest. Kubernetes audit logging records all actions submitted to the API server. Configuring an audit policy defines what events to capture (`Metadata`, `Request`, `RequestResponse`) and which stages (`ResponseComplete`), enabling forensic auditing and compliance verification.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit Logging", "Audit Logging", "Dr Failover"]
  },
  {
    id: "k8s-cks-437",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API Server Audit Logging: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Audit Logging to record an immutable audit trail of every administrative request, secret retrieval, and resource alteration sent to the Kubernetes API server.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring audit policies and backends for API server request auditing is under consideration.",
    options: [
      { id: 'A', text: "Store audit logs exclusively in temporary container memory." },
      { id: 'B', text: "Set audit log level to None across all resources." },
      { id: 'C', text: "Rely on worker node syslog files without configuring API server audit logging." },
      { id: 'D', text: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest. Kubernetes audit logging records all actions submitted to the API server. Configuring an audit policy defines what events to capture (`Metadata`, `Request`, `RequestResponse`) and which stages (`ResponseComplete`), enabling forensic auditing and compliance verification.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit Logging", "Audit Logging", "High Load Scale"]
  },
  {
    id: "k8s-cks-438",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API Server Audit Logging: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Audit Logging to record an immutable audit trail of every administrative request, secret retrieval, and resource alteration sent to the Kubernetes API server.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring audit policies and backends for API server request auditing is under consideration.",
    options: [
      { id: 'A', text: "Rely on worker node syslog files without configuring API server audit logging." },
      { id: 'B', text: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest." },
      { id: 'C', text: "Store audit logs exclusively in temporary container memory." },
      { id: 'D', text: "Set audit log level to None across all resources." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest. Kubernetes audit logging records all actions submitted to the API server. Configuring an audit policy defines what events to capture (`Metadata`, `Request`, `RequestResponse`) and which stages (`ResponseComplete`), enabling forensic auditing and compliance verification.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit Logging", "Audit Logging", "Security Compliance"]
  },
  {
    id: "k8s-cks-439",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API Server Audit Logging: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Audit Logging to record an immutable audit trail of every administrative request, secret retrieval, and resource alteration sent to the Kubernetes API server.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring audit policies and backends for API server request auditing is under consideration.",
    options: [
      { id: 'A', text: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest." },
      { id: 'B', text: "Set audit log level to None across all resources." },
      { id: 'C', text: "Store audit logs exclusively in temporary container memory." },
      { id: 'D', text: "Rely on worker node syslog files without configuring API server audit logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest. Kubernetes audit logging records all actions submitted to the API server. Configuring an audit policy defines what events to capture (`Metadata`, `Request`, `RequestResponse`) and which stages (`ResponseComplete`), enabling forensic auditing and compliance verification.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit Logging", "Audit Logging", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-440",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API Server Audit Logging: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Audit Logging to record an immutable audit trail of every administrative request, secret retrieval, and resource alteration sent to the Kubernetes API server.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring audit policies and backends for API server request auditing is under consideration.",
    options: [
      { id: 'A', text: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest." },
      { id: 'B', text: "Rely on worker node syslog files without configuring API server audit logging." },
      { id: 'C', text: "Set audit log level to None across all resources." },
      { id: 'D', text: "Store audit logs exclusively in temporary container memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Audit Policy file (`--audit-policy-file`) and audit log backend (`--audit-log-path`) in the kube-apiserver manifest. Kubernetes audit logging records all actions submitted to the API server. Configuring an audit policy defines what events to capture (`Metadata`, `Request`, `RequestResponse`) and which stages (`ResponseComplete`), enabling forensic auditing and compliance verification.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit Logging", "Audit Logging", "Resilience Failure"]
  },
  {
    id: "k8s-cks-441",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing Audit Logs for Suspicious Activity: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Audit Analysis to identify which compromised user account or ServiceAccount attempted to query all secrets across the cluster and received HTTP 403 Forbidden.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Investigating unauthorized API attempts and privilege escalation via audit logs is under consideration.",
    options: [
      { id: 'A', text: "Assume the failed attempt was a normal system glitch." },
      { id: 'B', text: "Inspect container standard output logs of backend application pods." },
      { id: 'C', text: "Delete the audit log file to hide the failed requests." },
      { id: 'D', text: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP. API server audit logs capture rich context for every request: caller username, groups, impersonation details, source IP, requested URI, request verb, and HTTP response code. Filtering for 403 Forbidden errors on sensitive resources exposes reconnaissance and privilege escalation attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-log-backend",
    tags: ["Audit Analysis", "Audit Analysis", "Dr Failover"]
  },
  {
    id: "k8s-cks-442",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing Audit Logs for Suspicious Activity: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Audit Analysis to identify which compromised user account or ServiceAccount attempted to query all secrets across the cluster and received HTTP 403 Forbidden.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Investigating unauthorized API attempts and privilege escalation via audit logs is under consideration.",
    options: [
      { id: 'A', text: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP." },
      { id: 'B', text: "Assume the failed attempt was a normal system glitch." },
      { id: 'C', text: "Delete the audit log file to hide the failed requests." },
      { id: 'D', text: "Inspect container standard output logs of backend application pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP. API server audit logs capture rich context for every request: caller username, groups, impersonation details, source IP, requested URI, request verb, and HTTP response code. Filtering for 403 Forbidden errors on sensitive resources exposes reconnaissance and privilege escalation attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-log-backend",
    tags: ["Audit Analysis", "Audit Analysis", "High Load Scale"]
  },
  {
    id: "k8s-cks-443",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing Audit Logs for Suspicious Activity: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Audit Analysis to identify which compromised user account or ServiceAccount attempted to query all secrets across the cluster and received HTTP 403 Forbidden.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Investigating unauthorized API attempts and privilege escalation via audit logs is under consideration.",
    options: [
      { id: 'A', text: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP." },
      { id: 'B', text: "Assume the failed attempt was a normal system glitch." },
      { id: 'C', text: "Delete the audit log file to hide the failed requests." },
      { id: 'D', text: "Inspect container standard output logs of backend application pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP. API server audit logs capture rich context for every request: caller username, groups, impersonation details, source IP, requested URI, request verb, and HTTP response code. Filtering for 403 Forbidden errors on sensitive resources exposes reconnaissance and privilege escalation attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-log-backend",
    tags: ["Audit Analysis", "Audit Analysis", "Security Compliance"]
  },
  {
    id: "k8s-cks-444",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing Audit Logs for Suspicious Activity: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Audit Analysis to identify which compromised user account or ServiceAccount attempted to query all secrets across the cluster and received HTTP 403 Forbidden.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Investigating unauthorized API attempts and privilege escalation via audit logs is under consideration.",
    options: [
      { id: 'A', text: "Inspect container standard output logs of backend application pods." },
      { id: 'B', text: "Assume the failed attempt was a normal system glitch." },
      { id: 'C', text: "Delete the audit log file to hide the failed requests." },
      { id: 'D', text: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP. API server audit logs capture rich context for every request: caller username, groups, impersonation details, source IP, requested URI, request verb, and HTTP response code. Filtering for 403 Forbidden errors on sensitive resources exposes reconnaissance and privilege escalation attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-log-backend",
    tags: ["Audit Analysis", "Audit Analysis", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-445",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing Audit Logs for Suspicious Activity: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Audit Analysis to identify which compromised user account or ServiceAccount attempted to query all secrets across the cluster and received HTTP 403 Forbidden.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Investigating unauthorized API attempts and privilege escalation via audit logs is under consideration.",
    options: [
      { id: 'A', text: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP." },
      { id: 'B', text: "Delete the audit log file to hide the failed requests." },
      { id: 'C', text: "Assume the failed attempt was a normal system glitch." },
      { id: 'D', text: "Inspect container standard output logs of backend application pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Parse API server audit logs filtering for `verb: list`, `resource: secrets`, and `responseStatus.code: 403` to extract the user identity and source IP. API server audit logs capture rich context for every request: caller username, groups, impersonation details, source IP, requested URI, request verb, and HTTP response code. Filtering for 403 Forbidden errors on sensitive resources exposes reconnaissance and privilege escalation attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-log-backend",
    tags: ["Audit Analysis", "Audit Analysis", "Resilience Failure"]
  },
  {
    id: "k8s-cks-446",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Customization and Alert Routing: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Falco Rules to configure Falco to trigger alerts when any process attempts to read sensitive Kubernetes service account token files from `/var/run/secrets`.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Customizing Falco macros, rules, and forwarding alerts to SIEM systems is under consideration.",
    options: [
      { id: 'A', text: "Disable the default Falco rule set entirely." },
      { id: 'B', text: "Delete the service account tokens from the host operating system." },
      { id: 'C', text: "Instruct developers to ignore Falco alert notifications." },
      { id: 'D', text: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes. Falco rules use a declarative syntax composed of conditions, macros, and output messages. Customizing rules allows security teams to detect unauthorized processes reading ServiceAccount tokens, modifying configuration files, or launching unexpected child processes.",
    referenceUrl: "https://falco.org/docs/rules/",
    tags: ["Falco Rules", "Falco Custom Rules", "Dr Failover"]
  },
  {
    id: "k8s-cks-447",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Customization and Alert Routing: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Falco Rules to configure Falco to trigger alerts when any process attempts to read sensitive Kubernetes service account token files from `/var/run/secrets`.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Customizing Falco macros, rules, and forwarding alerts to SIEM systems is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to ignore Falco alert notifications." },
      { id: 'B', text: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes." },
      { id: 'C', text: "Delete the service account tokens from the host operating system." },
      { id: 'D', text: "Disable the default Falco rule set entirely." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes. Falco rules use a declarative syntax composed of conditions, macros, and output messages. Customizing rules allows security teams to detect unauthorized processes reading ServiceAccount tokens, modifying configuration files, or launching unexpected child processes.",
    referenceUrl: "https://falco.org/docs/rules/",
    tags: ["Falco Rules", "Falco Custom Rules", "High Load Scale"]
  },
  {
    id: "k8s-cks-448",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Customization and Alert Routing: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Falco Rules to configure Falco to trigger alerts when any process attempts to read sensitive Kubernetes service account token files from `/var/run/secrets`.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Customizing Falco macros, rules, and forwarding alerts to SIEM systems is under consideration.",
    options: [
      { id: 'A', text: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes." },
      { id: 'B', text: "Disable the default Falco rule set entirely." },
      { id: 'C', text: "Delete the service account tokens from the host operating system." },
      { id: 'D', text: "Instruct developers to ignore Falco alert notifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes. Falco rules use a declarative syntax composed of conditions, macros, and output messages. Customizing rules allows security teams to detect unauthorized processes reading ServiceAccount tokens, modifying configuration files, or launching unexpected child processes.",
    referenceUrl: "https://falco.org/docs/rules/",
    tags: ["Falco Rules", "Falco Custom Rules", "Security Compliance"]
  },
  {
    id: "k8s-cks-449",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Customization and Alert Routing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Falco Rules to configure Falco to trigger alerts when any process attempts to read sensitive Kubernetes service account token files from `/var/run/secrets`.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Customizing Falco macros, rules, and forwarding alerts to SIEM systems is under consideration.",
    options: [
      { id: 'A', text: "Delete the service account tokens from the host operating system." },
      { id: 'B', text: "Instruct developers to ignore Falco alert notifications." },
      { id: 'C', text: "Disable the default Falco rule set entirely." },
      { id: 'D', text: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes. Falco rules use a declarative syntax composed of conditions, macros, and output messages. Customizing rules allows security teams to detect unauthorized processes reading ServiceAccount tokens, modifying configuration files, or launching unexpected child processes.",
    referenceUrl: "https://falco.org/docs/rules/",
    tags: ["Falco Rules", "Falco Custom Rules", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-450",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco Rule Customization and Alert Routing: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Falco Rules to configure Falco to trigger alerts when any process attempts to read sensitive Kubernetes service account token files from `/var/run/secrets`.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Customizing Falco macros, rules, and forwarding alerts to SIEM systems is under consideration.",
    options: [
      { id: 'A', text: "Disable the default Falco rule set entirely." },
      { id: 'B', text: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes." },
      { id: 'C', text: "Instruct developers to ignore Falco alert notifications." },
      { id: 'D', text: "Delete the service account tokens from the host operating system." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Write a custom Falco rule targeting `open` or `read` syscalls on `/var/run/secrets/kubernetes.io/serviceaccount` by unauthorized processes. Falco rules use a declarative syntax composed of conditions, macros, and output messages. Customizing rules allows security teams to detect unauthorized processes reading ServiceAccount tokens, modifying configuration files, or launching unexpected child processes.",
    referenceUrl: "https://falco.org/docs/rules/",
    tags: ["Falco Rules", "Falco Custom Rules", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_18;
