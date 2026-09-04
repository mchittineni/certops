export const K8S_CKAD_QUESTIONS_1 = [
  {
    id: "k8s-ckad-1",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Stage Dockerfile for Minimal Secure Container Images",
    scenario: "A developer writes a Dockerfile for a Go microservice. The build requires a 1 GB Go compiler toolchain, but the production container image must contain only the compiled binary and weigh less than 20 MB.",
    question: "Which Dockerfile design pattern accomplishes this requirement?",
    options: [
      { id: 'A', text: "Multi-Stage Builds (using separate AS builder and final FROM scratch/distroless stages)" },
      { id: 'B', text: "Single-stage build with RUN rm -rf /go" },
      { id: 'C', text: "Building on the host and using docker commit" },
      { id: 'D', text: "Using a full Ubuntu base image with apt-get clean" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Multi-stage builds allow developers to use separate build stages within a single Dockerfile. Compilers and build dependencies reside in the builder stage (e.g. `FROM golang AS builder`), and only the final compiled executable is copied (`COPY --from=builder`) into a minimal base image like `scratch` or `gcr.io/distroless/static`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#multi-stage-builds",
    tags: ["Docker", "Multi-Stage", "Container Security"]
  },
  {
    id: "k8s-ckad-2",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Non-Root User Enforcement in Container Dockerfiles",
    scenario: "A security audit mandates that no container image deployed to production Kubernetes clusters may execute as root (UID 0).",
    question: "Which Dockerfile instruction creates and activates a dedicated unprivileged user for the application process?",
    options: [
      { id: 'A', text: "USER 10001 (after running useradd/adduser in the image)" },
      { id: 'B', text: "ENTRYPOINT ['su', 'nobody']" },
      { id: 'C', text: "EXPOSE 8080" },
      { id: 'D', text: "ENV ROOT=false" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `USER` instruction in a Dockerfile sets the user name (or UID) and optionally the user group (or GID) for the remainder of the current stage and for running the container image. Specifying a numeric UID like `USER 10001` ensures the process does not execute with root privileges.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Docker", "Non-Root", "Security Standards"]
  },
  {
    id: "k8s-ckad-3",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Distroless Base Images for Attack Surface Minimization",
    scenario: "A security architect is establishing container hardening standards for a banking API. Images must not contain shell binaries (bash, sh), package managers (apt, apk), or OS utility binaries.",
    question: "Which class of container base images provides only the application runtime and its runtime dependencies without a Linux shell?",
    options: [
      { id: 'A', text: "Alpine Linux standard images" },
      { id: 'B', text: "Distroless Images (e.g. gcr.io/distroless/java or static)" },
      { id: 'C', text: "Ubuntu minimal images" },
      { id: 'D', text: "CentOS base images" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`Distroless` images contain only your application and its runtime dependencies (like glibc). They do not contain package managers, shells, or any of the standard programs you would expect to find in a standard Linux distribution, drastically shrinking attack surfaces and CVE counts.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Docker", "Distroless", "Vulnerability Reduction"]
  },
  {
    id: "k8s-ckad-4",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Digest Referencing for Immutable Deployments",
    scenario: "A Kubernetes Deployment specifies image `myregistry.azurecr.io/orders:v1.2`. A developer accidentally overwrites the `v1.2` tag in the registry with broken code, causing nodes pulling the image to crash.",
    question: "How should the Kubernetes pod specification reference the container image to guarantee strict immutability?",
    options: [
      { id: 'A', text: "Use the latest tag" },
      { id: 'B', text: "Reference the image by its cryptographic SHA-256 digest (e.g. image@sha256:4f8e...)" },
      { id: 'C', text: "Set imagePullPolicy to Always" },
      { id: 'D', text: "Set imagePullPolicy to Never" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Docker tags are mutable pointers that can be overwritten in registries. Referencing an image by its immutable SHA-256 digest (`image@sha256:&lt;hash&gt;`) cryptographically guarantees that nodes pull the exact identical byte payload regardless of tag mutations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Containers", "Image Digest", "Immutability"]
  },
  {
    id: "k8s-ckad-5",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: Completions and Parallelism Configuration",
    scenario: "A data processing Job must process 10 distinct batch queue work items to completion. Up to 3 worker pods should execute concurrently at any given time.",
    question: "Which Job specification parameters define these execution requirements?",
    options: [
      { id: 'A', text: "backoffLimit: 10 and completions: 3" },
      { id: 'B', text: "replicas: 10 and maxSurge: 3" },
      { id: 'C', text: "activeDeadlineSeconds: 10 and parallelism: 3" },
      { id: 'D', text: "completions: 10 and parallelism: 3" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In a Kubernetes `Job`, `completions: 10` specifies that the Job is considered complete when 10 pods have terminated successfully. `parallelism: 3` defines the maximum number of pods that are permitted to execute simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-execution-for-jobs",
    tags: ["Kubernetes", "Jobs", "Parallelism"]
  },
  {
    id: "k8s-ckad-6",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: backoffLimit for Retry Throttling",
    scenario: "A batch Job executes a flaky database ETL script that fails intermittently on startup. The Job controller must retry failed pods up to 4 times before marking the entire Job as failed.",
    question: "Which Job property controls the maximum number of retry attempts?",
    options: [
      { id: 'A', text: "backoffLimit: 4" },
      { id: 'B', text: "restartPolicy: OnFailure" },
      { id: 'C', text: "activeDeadlineSeconds: 4" },
      { id: 'D', text: "completions: 4" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `backoffLimit` field in a Job specification sets the number of retries before considering a Job as failed (default is 6). Retries are delayed by an exponential backoff interval (10s, 20s, 40s...) to avoid overwhelming failing dependencies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#pod-backoff-failure-policy",
    tags: ["Kubernetes", "Jobs", "backoffLimit"]
  },
  {
    id: "k8s-ckad-7",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: activeDeadlineSeconds for Maximum Execution Duration",
    scenario: "A nightly data cleanup Job must never run longer than 20 minutes (1,200 seconds). If it hangs or exceeds this duration, Kubernetes must terminate all active pods and fail the Job.",
    question: "Which Job parameter terminates execution when the time limit expires?",
    options: [
      { id: 'A', text: "backoffLimit: 1200" },
      { id: 'B', text: "ttlSecondsAfterFinished: 1200" },
      { id: 'C', text: "timeout: 1200s" },
      { id: 'D', text: "activeDeadlineSeconds: 1200" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`activeDeadlineSeconds` applies a strict time limit to the duration of a Job. Once a Job reaches `activeDeadlineSeconds`, all of its running pods are terminated and the Job status transitions to `type: Failed` with reason `DeadlineExceeded`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#job-termination-and-cleanup",
    tags: ["Kubernetes", "Jobs", "activeDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-8",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: ttlSecondsAfterFinished for Automatic Pod Cleanup",
    scenario: "A Kubernetes cluster runs 500 batch Jobs daily. Completed and failed pods remain indefinitely in the cluster, polluting `kubectl get pods` and consuming etcd memory.",
    question: "Which Job controller field automatically cleans up finished Jobs and their associated pods after a specified time?",
    options: [
      { id: 'A', text: "ttlSecondsAfterFinished: 300" },
      { id: 'B', text: "activeDeadlineSeconds: 300" },
      { id: 'C', text: "backoffLimit: 0" },
      { id: 'D', text: "cleanUpAfter: 300" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `ttlSecondsAfterFinished` field in a Job specification specifies the number of seconds after a Job has finished (either Completed or Failed) before the TTL-after-finished controller automatically deletes the Job and its pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#ttl-mechanism-for-finished-jobs",
    tags: ["Kubernetes", "Jobs", "TTL Controller"]
  },
  {
    id: "k8s-ckad-9",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes CronJobs: ConcurrencyPolicy (Allow vs Forbid vs Replace)",
    scenario: "A database backup CronJob runs every 15 minutes. If a backup run takes 25 minutes, the next scheduled job must not start while the previous backup is still running.",
    question: "Which concurrencyPolicy ensures concurrent runs of the same CronJob are skipped?",
    options: [
      { id: 'A', text: "concurrencyPolicy: Allow" },
      { id: 'B', text: "concurrencyPolicy: Forbid" },
      { id: 'C', text: "concurrencyPolicy: Wait" },
      { id: 'D', text: "concurrencyPolicy: Replace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes CronJobs support three concurrency policies: `Allow` (default, allows concurrent executions), `Forbid` (skips starting a new job if the previous job is still running), and `Replace` (cancels the currently running job and starts a new one).",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#concurrency-policy",
    tags: ["Kubernetes", "CronJobs", "concurrencyPolicy"]
  },
  {
    id: "k8s-ckad-10",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes CronJobs: startingDeadlineSeconds for Missed Schedules",
    scenario: "A cluster control plane goes offline for 30 minutes during a maintenance window. A CronJob is scheduled to run every 10 minutes.",
    question: "Which CronJob field defines the maximum deadline in seconds for starting a job if it missed its scheduled time?",
    options: [
      { id: 'A', text: "startingDeadlineSeconds" },
      { id: 'B', text: "failedJobsHistoryLimit" },
      { id: 'C', text: "activeDeadlineSeconds" },
      { id: 'D', text: "concurrencyPolicy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`startingDeadlineSeconds` defines the deadline in seconds for starting the job if it misses its scheduled time (e.g. due to cluster downtime). If more than 100 missed schedules occur and `startingDeadlineSeconds` is not configured, the CronJob stops scheduling completely.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#starting-deadline-seconds",
    tags: ["Kubernetes", "CronJobs", "startingDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-11",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pods: Sidecar Pattern for Log Shipping",
    scenario: "A legacy application writes unformatted plain-text log lines to a local file `/var/log/app.log`. An enterprise log agent (Fluent Bit) must read this file, enrich entries with JSON metadata, and ship them to an external SIEM.",
    question: "Which multi-container design pattern and volume type co-locates the logging agent with the application container?",
    options: [
      { id: 'A', text: "Sidecar container sharing an emptyDir volume mounted at /var/log in both containers" },
      { id: 'B', text: "Init container with hostPath volume" },
      { id: 'C', text: "Deploying the logging agent as an independent ReplicaSet with persistent volumes" },
      { id: 'D', text: "Running the logging agent inside the application container using systemd" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the `Sidecar pattern`, a helper container enhances or extends the primary application container. Sharing an `emptyDir` volume between the application and sidecar allows the app to write logs to disk while the sidecar tails and forwards logs in parallel.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#how-pods-manage-multiple-containers",
    tags: ["Kubernetes", "Sidecar Pattern", "Multi-Container"]
  },
  {
    id: "k8s-ckad-12",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pods: Ambassador Pattern for Database Proxying",
    scenario: "An application connects to a distributed database cluster that requires complex connection pooling, sharding key calculation, and read-write split routing. The developers want the application to connect simply to `localhost:5432`.",
    question: "Which multi-container design pattern encapsulates outbound network proxying into a co-located helper container?",
    options: [
      { id: 'A', text: "Init container pattern" },
      { id: 'B', text: "Ambassador container pattern" },
      { id: 'C', text: "Sidecar logging pattern" },
      { id: 'D', text: "Adapter container pattern" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `Ambassador pattern` proxies the application container's connection to the outside world. The application connects to `localhost`, and the ambassador sidecar handles proxying, connection pooling, retries, and routing to the external database.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates",
    tags: ["Kubernetes", "Ambassador Pattern", "Networking"]
  },
  {
    id: "k8s-ckad-13",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pods: Adapter Pattern for Metric Standardization",
    scenario: "A legacy application exposes monitoring metrics in a proprietary custom key-value text format. The enterprise standard requires Prometheus-compatible exposition format on `/metrics`.",
    question: "Which multi-container design pattern translates and standardizes the application's output interface?",
    options: [
      { id: 'A', text: "Sidecar logging pattern" },
      { id: 'B', text: "Init container pattern" },
      { id: 'C', text: "Ambassador pattern" },
      { id: 'D', text: "Adapter container pattern" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Adapter pattern` standardizes or transforms the interface of the primary application container. The adapter sidecar reads the legacy application's proprietary metrics locally and re-exposes them in the standardized Prometheus format expected by the monitoring system.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar",
    tags: ["Kubernetes", "Adapter Pattern", "Observability"]
  },
  {
    id: "k8s-ckad-14",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Containers: Sequential Pre-Execution and Database Migrations",
    scenario: "A web service pod requires a database migration script to complete successfully before the main web application container starts listening for HTTP traffic.",
    question: "Which Kubernetes pod construct executes run-to-completion containers sequentially before app containers start?",
    options: [
      { id: 'A', text: "initContainers" },
      { id: 'B', text: "sidecar containers" },
      { id: 'C', text: "ephemeralContainers" },
      { id: 'D', text: "readinessProbes alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`initContainers` execute sequentially before any application containers in the pod start. If an init container fails, Kubernetes restarts the pod until the init container succeeds (unless `restartPolicy: Never`), guaranteeing prerequisites like schema migrations finish first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Kubernetes", "initContainers", "Pod Lifecycle"]
  },
  {
    id: "k8s-ckad-15",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Native Sidecar Containers in Kubernetes 1.28+ (restartPolicy: Always in initContainers)",
    scenario: "A pod requires a secret-syncing helper container (Vault Agent) to start before the main application and remain running for the entire lifecycle of the pod.",
    question: "How do modern Kubernetes versions (v1.28+) natively declare long-running sidecar containers that start before main containers?",
    options: [
      { id: 'A', text: "Kubernetes does not support ordered sidecars" },
      { id: 'B', text: "Use a custom bash script inside the main container" },
      { id: 'C', text: "Define the container in containers with startupProbe" },
      { id: 'D', text: "Define the container inside initContainers with restartPolicy: Always" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes 1.28+ introduced native `Sidecar Containers`. By setting `restartPolicy: Always` on an entry in `initContainers`, Kubernetes starts the sidecar during init container execution, waits for its startup probe, and keeps it running throughout the pod lifecycle.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Kubernetes", "Native Sidecars", "InitContainers"]
  },
  {
    id: "k8s-ckad-16",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Ephemeral Containers for Live Pod Debugging (kubectl debug)",
    scenario: "A production distroless container crashes intermittently. The image contains no bash or curl binaries. An engineer needs to attach an interactive troubleshooting shell with diagnostic tools to inspect the running pod's network and filesystem.",
    question: "Which Kubernetes feature attaches a temporary debugging container to a running pod without restarting it?",
    options: [
      { id: 'A', text: "Ephemeral Containers (via kubectl debug -it &lt;pod&gt; --image=busybox)" },
      { id: 'B', text: "initContainers" },
      { id: 'C', text: "kubectl exec directly into the distroless container" },
      { id: 'D', text: "Rebuilding the production Docker image with bash" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Ephemeral Containers` are temporary containers added to an existing running pod for troubleshooting. They do not guarantee resources or restart policies. Running `kubectl debug` injects an ephemeral container with diagnostic tools into the target pod's namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/",
    tags: ["Kubernetes", "Ephemeral Containers", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-17",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Shared Process Namespaces (shareProcessNamespace)",
    scenario: "A sidecar container needs to monitor the process table of the primary application container and send a `SIGHUP` signal to reload configuration when a ConfigMap changes.",
    question: "Which Pod-level setting allows containers in the same pod to see and signal each other's processes?",
    options: [
      { id: 'A', text: "securityContext: privileged" },
      { id: 'B', text: "hostPID: true" },
      { id: 'C', text: "shareProcessNamespace: true" },
      { id: 'D', text: "shareNetworkNamespace: true" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting `shareProcessNamespace: true` in the Pod specification enables process namespace sharing between all containers in that pod. Processes in one container become visible to other containers (with distinct PIDs), enabling signals (kill/sighup) across containers.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/",
    tags: ["Kubernetes", "shareProcessNamespace", "Process Signaling"]
  },
  {
    id: "k8s-ckad-18",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod emptyDir Volume Storage Medium (Memory vs Disk)",
    scenario: "A high-performance caching proxy runs inside a pod. It needs temporary scratch storage shared between two containers that resides in RAM rather than spinning persistent disk for maximum speed.",
    question: "How should the emptyDir volume be configured to back storage with host memory (tmpfs)?",
    options: [
      { id: 'A', text: "emptyDir: { medium: Memory }" },
      { id: 'B', text: "emptyDir: { type: RamDisk }" },
      { id: 'C', text: "hostPath: { path: /dev/shm }" },
      { id: 'D', text: "persistentVolumeClaim alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Kubernetes volume configuration, setting `emptyDir: { medium: Memory }` mounts a `tmpfs` (RAM-backed filesystem) instead of standard node disk storage. While fast, memory-backed `emptyDir` counts against the container's pod memory limits.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["Kubernetes", "emptyDir", "RAM Storage"]
  },
  {
    id: "k8s-ckad-19",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Security Standards: Privileged vs Baseline vs Restricted",
    scenario: "A Kubernetes cluster administrator configures Pod Security Admission labels on a namespace. Application workloads in this namespace must run as non-root, drop all default capabilities, and disallow privilege escalation.",
    question: "Which Pod Security Standards profile enforces these hardened security controls?",
    options: [
      { id: 'A', text: "Custom" },
      { id: 'B', text: "Privileged" },
      { id: 'C', text: "Restricted" },
      { id: 'D', text: "Baseline" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes defines three `Pod Security Standards` levels: `Privileged` (unrestricted, root/host access permitted), `Baseline` (prevents known privilege escalations with default configs), and `Restricted` (hardened profile enforcing non-root execution, dropping all capabilities except NET_BIND_SERVICE, and immutable root filesystems).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted",
    tags: ["Kubernetes", "Pod Security Standards", "Restricted Profile"]
  },
  {
    id: "k8s-ckad-20",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "SecurityContext: allowPrivilegeEscalation: false",
    scenario: "A container must be prevented from gaining more privileges than its parent process (e.g. via setuid or setgid binaries like sudo).",
    question: "Which container securityContext property controls this behavior?",
    options: [
      { id: 'A', text: "readOnlyRootFilesystem: true" },
      { id: 'B', text: "runAsNonRoot: true" },
      { id: 'C', text: "privileged: false" },
      { id: 'D', text: "allowPrivilegeEscalation: false" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`allowPrivilegeEscalation` controls whether a process can gain more privileges than its parent process. Setting it to `false` sets the `no_new_privs` flag on the Linux container process, preventing setuid binaries from escalating permissions.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Kubernetes", "SecurityContext", "no_new_privs"]
  },
  {
    id: "k8s-ckad-21",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "SecurityContext: readOnlyRootFilesystem for Immutability",
    scenario: "To prevent attackers who compromise a web service container from downloading malicious executables or modifying runtime libraries on disk, the container root filesystem must be completely read-only.",
    question: "Which securityContext property enforces a read-only root container filesystem?",
    options: [
      { id: 'A', text: "readOnlyRootFilesystem: true" },
      { id: 'B', text: "runAsUser: 1000" },
      { id: 'C', text: "immutableRoot: true" },
      { id: 'D', text: "capabilities: drop: ['ALL']" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `readOnlyRootFilesystem: true` mounts the container's root filesystem as read-only. If the application needs to write temporary cache files or logs, developers mount explicit `emptyDir` volumes at specific paths like `/tmp`.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container",
    tags: ["Kubernetes", "SecurityContext", "readOnlyRootFilesystem"]
  },
  {
    id: "k8s-ckad-22",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "SecurityContext: Linux Capabilities (drop: ['ALL'] and add)",
    scenario: "A network sniffing utility pod needs permission to capture raw network packets (`CAP_NET_RAW`), but must drop all other default Linux root capabilities.",
    question: "How should the container securityContext declare these Linux capabilities?",
    options: [
      { id: 'A', text: "capabilities: { drop: ['ALL'], add: ['NET_RAW'] }" },
      { id: 'B', text: "privileged: true" },
      { id: 'C', text: "runAsUser: 0" },
      { id: 'D', text: "capabilities: { add: ['ALL'] }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes allows fine-grained control over Linux capabilities. Following least privilege, developers configure `capabilities: { drop: ['ALL'], add: ['NET_RAW'] }`, stripping all standard Linux capabilities and adding back only the single required permission.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container",
    tags: ["Kubernetes", "Linux Capabilities", "Least Privilege"]
  },
  {
    id: "k8s-ckad-23",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Lifecycle: restartPolicy Behavior in Pods vs Jobs",
    scenario: "A developer creates a standalone Pod manifest (not managed by a Deployment or Job) to run a batch task. The pod must run once and never restart if it exits successfully or fails.",
    question: "Which restartPolicy should be specified in the Pod definition?",
    options: [
      { id: 'A', text: "restartPolicy: Never" },
      { id: 'B', text: "restartPolicy: Always" },
      { id: 'C', text: "restartPolicy: Conditional" },
      { id: 'D', text: "restartPolicy: OnFailure" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes Pods support three restart policies: `Always` (default for Deployments, restarts container upon any exit), `OnFailure` (restarts only if container exits with non-zero status code), and `Never` (never restarts the container after exit).",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy",
    tags: ["Kubernetes", "restartPolicy", "Pod Lifecycle"]
  },
  {
    id: "k8s-ckad-24",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Lifecycle Hooks: postStart and preStop",
    scenario: "A web server container must notify an external service registry that it is shutting down and drain active HTTP connections before receiving the SIGTERM signal.",
    question: "Which container lifecycle hook executes synchronously immediately before container termination?",
    options: [
      { id: 'A', text: "preStop hook (e.g. exec: { command: ['/bin/sh', '-c', 'sleep 10'] })" },
      { id: 'B', text: "postStart hook" },
      { id: 'C', text: "livenessProbe" },
      { id: 'D', text: "terminationGracePeriod alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes executes the `preStop` hook synchronously before terminating the container (before sending SIGTERM). It is commonly used to deregister from load balancers or pause for a few seconds to let in-flight connections finish.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks",
    tags: ["Kubernetes", "Lifecycle Hooks", "preStop"]
  },
  {
    id: "k8s-ckad-25",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod terminationGracePeriodSeconds Mechanics",
    scenario: "A database container takes up to 60 seconds to flush dirty database pages to disk after receiving SIGTERM. The default Kubernetes termination period of 30 seconds kills the database prematurely with SIGKILL.",
    question: "Which Pod specification setting extends the duration Kubernetes waits before issuing a SIGKILL?",
    options: [
      { id: 'A', text: "terminationGracePeriodSeconds: 90" },
      { id: 'B', text: "activeDeadlineSeconds: 90" },
      { id: 'C', text: "timeout: 90" },
      { id: 'D', text: "preStopSleep: 90" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`terminationGracePeriodSeconds` defines the maximum time (default 30 seconds) Kubernetes allows for graceful pod shutdown after issuing the preStop hook and SIGTERM. If the container is still running after this window expires, the kubelet sends SIGKILL to terminate it forcefully.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Kubernetes", "terminationGracePeriodSeconds", "Graceful Shutdown"]
  }
];

export default K8S_CKAD_QUESTIONS_1;
