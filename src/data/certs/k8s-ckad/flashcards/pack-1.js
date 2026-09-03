export const K8S_CKAD_FLASHCARDS_1 = [
  {
    id: "k8s-ckad-fc-1",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build: Multi-Stage Builds",
    hint: "Decoupling build toolchains from production images.",
    back: "Use <strong>Multi-Stage Dockerfiles</strong> to compile code in a builder image and copy only the final binary to a minimal base (e.g. distroless) for small, secure production images.",
    tags: ["Docker", "Multi-Stage", "Container Security"]
  },
  {
    id: "k8s-ckad-fc-2",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build: USER Instruction",
    hint: "Enforcing non-root container processes.",
    back: "Add a <strong>USER &lt;uid&gt;</strong> directive in Dockerfiles to ensure container processes execute with unprivileged user permissions rather than UID 0 (root).",
    tags: ["Docker", "Non-Root", "Security Standards"]
  },
  {
    id: "k8s-ckad-fc-3",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Build: Distroless Images",
    hint: "Eliminating shells and package managers.",
    back: "<strong>Distroless images</strong> contain only the application and minimal runtime libraries\u2014excluding shells, apt, and curl\u2014to eliminate exploitable attack vectors.",
    tags: ["Docker", "Distroless", "Vulnerability Reduction"]
  },
  {
    id: "k8s-ckad-fc-4",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: Image Digests vs Tags",
    hint: "Cryptographic immutability for container images.",
    back: "Specify images with <strong>image@sha256:&lt;digest&gt;</strong> to guarantee immutable deployments unaffected by registry tag overwrites.",
    tags: ["Containers", "Image Digest", "Immutability"]
  },
  {
    id: "k8s-ckad-fc-5",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: completions & parallelism",
    hint: "Batch concurrency controls.",
    back: "Set <strong>completions: 10</strong> for total successful runs needed and <strong>parallelism: 3</strong> for maximum concurrent worker pods.",
    tags: ["Kubernetes", "Jobs", "Parallelism"]
  },
  {
    id: "k8s-ckad-fc-6",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: backoffLimit",
    hint: "Exponential retry caps for batch jobs.",
    back: "The <strong>backoffLimit</strong> property configures how many times Kubernetes retries failed pods using exponential backoff before declaring the Job failed.",
    tags: ["Kubernetes", "Jobs", "backoffLimit"]
  },
  {
    id: "k8s-ckad-fc-7",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: activeDeadlineSeconds",
    hint: "Hard execution timeouts for batch workloads.",
    back: "Setting <strong>activeDeadlineSeconds</strong> terminates running pods and fails the Job if execution exceeds the specified number of seconds.",
    tags: ["Kubernetes", "Jobs", "activeDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-fc-8",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: ttlSecondsAfterFinished",
    hint: "Automated cleanup of finished batch pods.",
    back: "Use <strong>ttlSecondsAfterFinished: &lt;seconds&gt;</strong> to instruct Kubernetes to delete finished Jobs and pods automatically to keep etcd clean.",
    tags: ["Kubernetes", "Jobs", "TTL Controller"]
  },
  {
    id: "k8s-ckad-fc-9",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "CronJobs: concurrencyPolicy Options",
    hint: "Managing overlapping job schedules.",
    back: "Set <strong>concurrencyPolicy: Forbid</strong> to prevent overlapping runs when a previous CronJob execution takes longer than the schedule interval.",
    tags: ["Kubernetes", "CronJobs", "concurrencyPolicy"]
  },
  {
    id: "k8s-ckad-fc-10",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "CronJobs: startingDeadlineSeconds",
    hint: "Handling missed schedule execution.",
    back: "<strong>startingDeadlineSeconds</strong> defines how long a CronJob can still be started after missing its scheduled window due to cluster downtime.",
    tags: ["Kubernetes", "CronJobs", "startingDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-fc-11",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Container: Sidecar Pattern",
    hint: "Extending primary containers with helper sidecars.",
    back: "The <strong>Sidecar pattern</strong> pairs an application container with a helper container (e.g. log forwarder) sharing an <strong>emptyDir volume</strong> for local file exchange.",
    tags: ["Kubernetes", "Sidecar Pattern", "Multi-Container"]
  },
  {
    id: "k8s-ckad-fc-12",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Container: Ambassador Pattern",
    hint: "Proxying outbound connections via localhost.",
    back: "The <strong>Ambassador pattern</strong> abstracts external communication by proxying outbound traffic through a local sidecar listening on <code>localhost</code>.",
    tags: ["Kubernetes", "Ambassador Pattern", "Networking"]
  },
  {
    id: "k8s-ckad-fc-13",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Multi-Container: Adapter Pattern",
    hint: "Transforming output to standard formats.",
    back: "The <strong>Adapter pattern</strong> normalizes non-standard application outputs (e.g. converting custom metrics to Prometheus format) via a co-located sidecar.",
    tags: ["Kubernetes", "Adapter Pattern", "Observability"]
  },
  {
    id: "k8s-ckad-fc-14",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Lifecycle: initContainers",
    hint: "Guaranteed prerequisite execution.",
    back: "<strong>initContainers</strong> run sequentially to completion before application containers start, ideal for database migrations or waiting for dependencies.",
    tags: ["Kubernetes", "initContainers", "Pod Lifecycle"]
  },
  {
    id: "k8s-ckad-fc-15",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes 1.28+: Native Sidecar Containers",
    hint: "Ordered startup for persistent sidecars.",
    back: "Set <strong>restartPolicy: Always</strong> inside an <strong>initContainers</strong> spec to create a native sidecar that starts before main containers and runs continuously.",
    tags: ["Kubernetes", "Native Sidecars", "InitContainers"]
  },
  {
    id: "k8s-ckad-fc-16",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: Ephemeral Containers",
    hint: "Injecting debug tools into live distroless pods.",
    back: "Use <strong>kubectl debug</strong> to attach an <strong>Ephemeral Container</strong> with diagnostic tools to running pods without restarting them.",
    tags: ["Kubernetes", "Ephemeral Containers", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-17",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Architecture: shareProcessNamespace",
    hint: "Inter-container process visibility.",
    back: "Enable <strong>shareProcessNamespace: true</strong> on the Pod spec to allow sidecars to inspect process lists and send signals across container boundaries.",
    tags: ["Kubernetes", "shareProcessNamespace", "Process Signaling"]
  },
  {
    id: "k8s-ckad-fc-18",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Volumes: emptyDir Memory Medium",
    hint: "Mounting fast RAM-backed tmpfs scratch space.",
    back: "Configure <strong>emptyDir: { medium: Memory }</strong> to back scratch volumes with RAM (tmpfs) for ultra-fast inter-container data exchange.",
    tags: ["Kubernetes", "emptyDir", "RAM Storage"]
  },
  {
    id: "k8s-ckad-fc-19",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Security Standards: Restricted Profile",
    hint: "Strict non-root and capability dropping.",
    back: "The <strong>Restricted</strong> Pod Security Standard profile enforces hardened execution: non-root UIDs, no privilege escalation, and dropping all capabilities.",
    tags: ["Kubernetes", "Pod Security Standards", "Restricted Profile"]
  },
  {
    id: "k8s-ckad-fc-20",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: allowPrivilegeEscalation",
    hint: "Preventing setuid privilege escalation.",
    back: "Set <strong>allowPrivilegeEscalation: false</strong> in container securityContext to enable <code>no_new_privs</code>, blocking setuid escalation attacks.",
    tags: ["Kubernetes", "SecurityContext", "no_new_privs"]
  },
  {
    id: "k8s-ckad-fc-21",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: readOnlyRootFilesystem",
    hint: "Enforcing immutable container filesystems.",
    back: "Configure <strong>readOnlyRootFilesystem: true</strong> to prevent attackers from writing malware to disk; mount <strong>emptyDir</strong> for required writeable paths.",
    tags: ["Kubernetes", "SecurityContext", "readOnlyRootFilesystem"]
  },
  {
    id: "k8s-ckad-fc-22",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: Linux Capabilities",
    hint: "Dropping ALL and adding specific capabilities.",
    back: "Follow security best practices by declaring <strong>capabilities: { drop: ['ALL'], add: ['CAP_NAME'] }</strong> to grant only specific required kernel permissions.",
    tags: ["Kubernetes", "Linux Capabilities", "Least Privilege"]
  },
  {
    id: "k8s-ckad-fc-23",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Lifecycle: restartPolicy Options",
    hint: "Always, OnFailure, and Never.",
    back: "Set <strong>restartPolicy: Never</strong> for single-run batch pods that should terminate permanently upon exit regardless of status code.",
    tags: ["Kubernetes", "restartPolicy", "Pod Lifecycle"]
  },
  {
    id: "k8s-ckad-fc-24",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Hooks: preStop Lifecycle Hook",
    hint: "Graceful shutdown and connection draining.",
    back: "Use a <strong>preStop hook</strong> to execute shutdown commands or sleep intervals before Kubernetes sends the SIGTERM termination signal.",
    tags: ["Kubernetes", "Lifecycle Hooks", "preStop"]
  },
  {
    id: "k8s-ckad-fc-25",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Lifecycle: terminationGracePeriodSeconds",
    hint: "Extending graceful shutdown windows.",
    back: "Increase <strong>terminationGracePeriodSeconds</strong> (e.g. 60s or 90s) for stateful databases that require extra time to flush disk buffers before SIGKILL.",
    tags: ["Kubernetes", "terminationGracePeriodSeconds", "Graceful Shutdown"]
  }
];

export default K8S_CKAD_FLASHCARDS_1;
