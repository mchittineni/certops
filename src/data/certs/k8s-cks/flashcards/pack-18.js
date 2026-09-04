export const K8S_CKS_FLASHCARDS_18 = [
  {
    id: "k8s-cks-fc-426",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "BuildKit Secret Mounts (Dr Failover)",
    hint: "Passing build credentials safely without leaking them into container image layers.",
    back: "Using Docker <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) provides credentials during image builds without baking sensitive tokens into intermediate image layers.",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-427",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "BuildKit Secret Mounts (High Load Scale)",
    hint: "Passing build credentials safely without leaking them into container image layers.",
    back: "Using Docker <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) provides credentials during image builds without baking sensitive tokens into intermediate image layers.",
    tags: ["Secret Leak Prevention", "Secret Mounts", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-428",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "BuildKit Secret Mounts (Security Compliance)",
    hint: "Passing build credentials safely without leaking them into container image layers.",
    back: "Using Docker <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) provides credentials during image builds without baking sensitive tokens into intermediate image layers.",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-429",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "BuildKit Secret Mounts (Hybrid Migration)",
    hint: "Passing build credentials safely without leaking them into container image layers.",
    back: "Using Docker <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) provides credentials during image builds without baking sensitive tokens into intermediate image layers.",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-430",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "BuildKit Secret Mounts (Resilience Failure)",
    hint: "Passing build credentials safely without leaking them into container image layers.",
    back: "Using Docker <strong>BuildKit secret mounts</strong> (<code>RUN --mount=type=secret</code>) provides credentials during image builds without baking sensitive tokens into intermediate image layers.",
    tags: ["Secret Leak Prevention", "Secret Mounts", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-431",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Falco Runtime Threat Detection (Dr Failover)",
    hint: "Real-time kernel system call monitoring for anomalous container behavior.",
    back: "<strong>Falco</strong> uses eBPF or kernel modules to monitor system calls in real time, alerting on suspicious runtime activity such as container shell spawns or unauthorized file alterations.",
    tags: ["Runtime Security", "Falco Runtime Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-432",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Falco Runtime Threat Detection (High Load Scale)",
    hint: "Real-time kernel system call monitoring for anomalous container behavior.",
    back: "<strong>Falco</strong> uses eBPF or kernel modules to monitor system calls in real time, alerting on suspicious runtime activity such as container shell spawns or unauthorized file alterations.",
    tags: ["Runtime Security", "Falco Runtime Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-433",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Falco Runtime Threat Detection (Security Compliance)",
    hint: "Real-time kernel system call monitoring for anomalous container behavior.",
    back: "<strong>Falco</strong> uses eBPF or kernel modules to monitor system calls in real time, alerting on suspicious runtime activity such as container shell spawns or unauthorized file alterations.",
    tags: ["Runtime Security", "Falco Runtime Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-434",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Falco Runtime Threat Detection (Hybrid Migration)",
    hint: "Real-time kernel system call monitoring for anomalous container behavior.",
    back: "<strong>Falco</strong> uses eBPF or kernel modules to monitor system calls in real time, alerting on suspicious runtime activity such as container shell spawns or unauthorized file alterations.",
    tags: ["Runtime Security", "Falco Runtime Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-435",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Falco Runtime Threat Detection (Resilience Failure)",
    hint: "Real-time kernel system call monitoring for anomalous container behavior.",
    back: "<strong>Falco</strong> uses eBPF or kernel modules to monitor system calls in real time, alerting on suspicious runtime activity such as container shell spawns or unauthorized file alterations.",
    tags: ["Runtime Security", "Falco Runtime Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-436",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Kubernetes API Server Audit Policies (Dr Failover)",
    hint: "Recording immutable administrative request trails with audit-policy-file.",
    back: "Configuring <strong>audit-policy-file</strong> on kube-apiserver logs API requests and responses at specified detail levels, providing essential forensic visibility into cluster operations.",
    tags: ["Audit Logging", "Audit Logging", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-437",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Kubernetes API Server Audit Policies (High Load Scale)",
    hint: "Recording immutable administrative request trails with audit-policy-file.",
    back: "Configuring <strong>audit-policy-file</strong> on kube-apiserver logs API requests and responses at specified detail levels, providing essential forensic visibility into cluster operations.",
    tags: ["Audit Logging", "Audit Logging", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-438",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Kubernetes API Server Audit Policies (Security Compliance)",
    hint: "Recording immutable administrative request trails with audit-policy-file.",
    back: "Configuring <strong>audit-policy-file</strong> on kube-apiserver logs API requests and responses at specified detail levels, providing essential forensic visibility into cluster operations.",
    tags: ["Audit Logging", "Audit Logging", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-439",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Kubernetes API Server Audit Policies (Hybrid Migration)",
    hint: "Recording immutable administrative request trails with audit-policy-file.",
    back: "Configuring <strong>audit-policy-file</strong> on kube-apiserver logs API requests and responses at specified detail levels, providing essential forensic visibility into cluster operations.",
    tags: ["Audit Logging", "Audit Logging", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-440",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Kubernetes API Server Audit Policies (Resilience Failure)",
    hint: "Recording immutable administrative request trails with audit-policy-file.",
    back: "Configuring <strong>audit-policy-file</strong> on kube-apiserver logs API requests and responses at specified detail levels, providing essential forensic visibility into cluster operations.",
    tags: ["Audit Logging", "Audit Logging", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-441",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Auditing Failed API Requests and Reconnaissance (Dr Failover)",
    hint: "Filtering audit logs for 403 Forbidden responses on sensitive API endpoints.",
    back: "Analyzing <strong>API server audit logs</strong> for <code>403 Forbidden</code> errors reveals attacker reconnaissance, exposing which credentials and IPs are probing sensitive cluster resources.",
    tags: ["Audit Analysis", "Audit Analysis", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-442",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Auditing Failed API Requests and Reconnaissance (High Load Scale)",
    hint: "Filtering audit logs for 403 Forbidden responses on sensitive API endpoints.",
    back: "Analyzing <strong>API server audit logs</strong> for <code>403 Forbidden</code> errors reveals attacker reconnaissance, exposing which credentials and IPs are probing sensitive cluster resources.",
    tags: ["Audit Analysis", "Audit Analysis", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-443",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Auditing Failed API Requests and Reconnaissance (Security Compliance)",
    hint: "Filtering audit logs for 403 Forbidden responses on sensitive API endpoints.",
    back: "Analyzing <strong>API server audit logs</strong> for <code>403 Forbidden</code> errors reveals attacker reconnaissance, exposing which credentials and IPs are probing sensitive cluster resources.",
    tags: ["Audit Analysis", "Audit Analysis", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-444",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Auditing Failed API Requests and Reconnaissance (Hybrid Migration)",
    hint: "Filtering audit logs for 403 Forbidden responses on sensitive API endpoints.",
    back: "Analyzing <strong>API server audit logs</strong> for <code>403 Forbidden</code> errors reveals attacker reconnaissance, exposing which credentials and IPs are probing sensitive cluster resources.",
    tags: ["Audit Analysis", "Audit Analysis", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-445",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Auditing Failed API Requests and Reconnaissance (Resilience Failure)",
    hint: "Filtering audit logs for 403 Forbidden responses on sensitive API endpoints.",
    back: "Analyzing <strong>API server audit logs</strong> for <code>403 Forbidden</code> errors reveals attacker reconnaissance, exposing which credentials and IPs are probing sensitive cluster resources.",
    tags: ["Audit Analysis", "Audit Analysis", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-446",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Customizing Falco Behavioral Rules (Dr Failover)",
    hint: "Authoring custom rules to detect unauthorized file access and credential theft.",
    back: "Authoring <strong>custom Falco rules</strong> detects specific attack behaviors, such as unauthorized processes attempting to read ServiceAccount tokens from <code>/var/run/secrets/</code>.",
    tags: ["Falco Rules", "Falco Custom Rules", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-447",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Customizing Falco Behavioral Rules (High Load Scale)",
    hint: "Authoring custom rules to detect unauthorized file access and credential theft.",
    back: "Authoring <strong>custom Falco rules</strong> detects specific attack behaviors, such as unauthorized processes attempting to read ServiceAccount tokens from <code>/var/run/secrets/</code>.",
    tags: ["Falco Rules", "Falco Custom Rules", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-448",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Customizing Falco Behavioral Rules (Security Compliance)",
    hint: "Authoring custom rules to detect unauthorized file access and credential theft.",
    back: "Authoring <strong>custom Falco rules</strong> detects specific attack behaviors, such as unauthorized processes attempting to read ServiceAccount tokens from <code>/var/run/secrets/</code>.",
    tags: ["Falco Rules", "Falco Custom Rules", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-449",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Customizing Falco Behavioral Rules (Hybrid Migration)",
    hint: "Authoring custom rules to detect unauthorized file access and credential theft.",
    back: "Authoring <strong>custom Falco rules</strong> detects specific attack behaviors, such as unauthorized processes attempting to read ServiceAccount tokens from <code>/var/run/secrets/</code>.",
    tags: ["Falco Rules", "Falco Custom Rules", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-450",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    front: "Customizing Falco Behavioral Rules (Resilience Failure)",
    hint: "Authoring custom rules to detect unauthorized file access and credential theft.",
    back: "Authoring <strong>custom Falco rules</strong> detects specific attack behaviors, such as unauthorized processes attempting to read ServiceAccount tokens from <code>/var/run/secrets/</code>.",
    tags: ["Falco Rules", "Falco Custom Rules", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_18;
