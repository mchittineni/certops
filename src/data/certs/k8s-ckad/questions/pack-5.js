export const K8S_CKAD_QUESTIONS_5 = [
  {
    id: "k8s-ckad-101",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probes: Deadlock Detection and Container Restart",
    scenario: "A Python web application runs inside a Kubernetes container. Occasionally, worker threads encounter a deadlocked thread lock and stop responding to incoming HTTP requests, but the process continues running.",
    question: "Which Kubernetes probe detects application deadlocks and restarts the failing container?",
    options: [
      { id: 'A', text: "preStop hook" },
      { id: 'B', text: "livenessProbe" },
      { id: 'C', text: "readinessProbe" },
      { id: 'D', text: "startupProbe" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `livenessProbe` determines if a container needs to be restarted. If an application enters a broken state or deadlock where it cannot make progress, failing consecutive liveness probes causes the kubelet to terminate the process and restart the container.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-http-request",
    tags: ["Kubernetes", "livenessProbe", "Observability"]
  },
  {
    id: "k8s-ckad-102",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probes: Traffic Gating and Endpoints Slicing",
    scenario: "A Java Spring Boot service takes 40 seconds to establish database connection pools and load in-memory caches upon startup. During this initialization window, incoming HTTP requests fail with 500 errors.",
    question: "Which Kubernetes probe prevents client traffic from reaching the pod until initialization is complete without restarting the container?",
    options: [
      { id: 'A', text: "postStart hook" },
      { id: 'B', text: "livenessProbe" },
      { id: 'C', text: "startupProbe alone" },
      { id: 'D', text: "readinessProbe" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `readinessProbe` indicates whether a container is ready to accept incoming network traffic. If a readiness probe fails, the pod's IP address is immediately removed from the matching Kubernetes Service Endpoints, ensuring clients never receive failed requests.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes",
    tags: ["Kubernetes", "readinessProbe", "Traffic Gating"]
  },
  {
    id: "k8s-ckad-103",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes: Shielding Slow-Starting Legacy Applications",
    scenario: "A legacy monolithic application takes up to 3 minutes to warm up during cold boots. If a standard liveness probe is configured with a 30-second window, the kubelet kills the container before it finishes booting, causing a crash loop.",
    question: "Which Kubernetes probe disables liveness and readiness checks until the application has completed its initial slow boot?",
    options: [
      { id: 'A', text: "preStop hook" },
      { id: 'B', text: "readinessProbe with failureThreshold: 100" },
      { id: 'C', text: "initialDelaySeconds on livenessProbe alone" },
      { id: 'D', text: "startupProbe" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `startupProbe` verifies whether the application within a container has started. If configured, it disables all liveness and readiness checks until the startup probe succeeds. This allows slow-starting legacy containers to boot without risking premature termination by aggressive liveness probes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Kubernetes", "startupProbe", "Slow Startup"]
  },
  {
    id: "k8s-ckad-104",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "HTTP Get Health Check Probe Configuration (httpGet)",
    scenario: "A web API listens on port 8080. The application exposes an internal health endpoint at `/healthz`.",
    question: "Which YAML snippet correctly defines an HTTP GET liveness probe in the container specification?",
    options: [
      { id: 'A', text: "livenessProbe: { httpGet: { path: /healthz, port: 8080 } }" },
      { id: 'B', text: "livenessProbe: { tcpSocket: { port: 8080 } }" },
      { id: 'C', text: "livenessProbe: { exec: { command: ['curl', 'localhost:8080/healthz'] } }" },
      { id: 'D', text: "livenessProbe: { get: /healthz }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes natively supports `httpGet` probes. The kubelet sends an HTTP GET request to the specified `path` and `port`. Any status code between 200 and 399 indicates success; status codes >= 400 or timeouts indicate failure.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-http-request",
    tags: ["Kubernetes", "httpGet", "Probes"]
  },
  {
    id: "k8s-ckad-105",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "TCP Socket Probe Configuration (tcpSocket)",
    scenario: "A database proxy (HAProxy) or custom TCP daemon runs in a container without an HTTP web server. The kubelet needs to verify that the container is actively listening on TCP port 3306.",
    question: "Which probe mechanism checks whether a TCP socket connection can be established?",
    options: [
      { id: 'A', text: "exec: { command: ['nc', '-z', 'localhost', '3306'] }" },
      { id: 'B', text: "httpGet: { port: 3306 }" },
      { id: 'C', text: "tcpSocket: { port: 3306 }" },
      { id: 'D', text: "socketCheck: 3306" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A `tcpSocket` probe instructs the kubelet to attempt to open a TCP socket connection to the container on the specified port. If a connection can be established, the container is diagnosed as healthy; if the connection fails, the probe fails.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-tcp-liveness-probe",
    tags: ["Kubernetes", "tcpSocket", "Probes"]
  },
  {
    id: "k8s-ckad-106",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Exec Command Health Check Probes (exec)",
    scenario: "A secure container image contains no open network ports. The application maintains an in-memory lockfile `/tmp/healthy` that it touches periodically while functioning normally.",
    question: "Which probe mechanism executes a diagnostic shell command inside the container and evaluates its return code?",
    options: [
      { id: 'A', text: "exec: { command: ['cat', '/tmp/healthy'] }" },
      { id: 'B', text: "httpGet: { path: /tmp/healthy }" },
      { id: 'C', text: "tcpSocket: { path: /tmp/healthy }" },
      { id: 'D', text: "fileCheck: /tmp/healthy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An `exec` probe executes a specified command inside the container process namespace. If the command exits with status code `0`, the container is diagnosed as healthy. Any non-zero exit code diagnoses the probe as failed.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-command",
    tags: ["Kubernetes", "exec Probe", "Diagnostic Commands"]
  },
  {
    id: "k8s-ckad-107",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "gRPC Health Check Probes in Kubernetes 1.24+",
    scenario: "A microservice exposes high-performance gRPC services on port 50051. The service implements the standard gRPC Health Checking Protocol.",
    question: "How does Kubernetes 1.24+ natively probe gRPC endpoints without requiring third-party CLI binaries like grpc-health-probe?",
    options: [
      { id: 'A', text: "tcpSocket: { port: 50051 } alone" },
      { id: 'B', text: "httpGet: { port: 50051, protocol: GRPC }" },
      { id: 'C', text: "grpc: { port: 50051 } in the liveness or readiness probe specification" },
      { id: 'D', text: "exec: { command: ['grpc_health_probe'] }" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes 1.24+ natively supports `grpc` probes. The kubelet connects to the container using the official gRPC health checking protocol over the specified port, verifying service status without needing `exec` commands or external curl/grpc binaries.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-grpc-liveness-probe",
    tags: ["Kubernetes", "gRPC Probes", "Microservices"]
  },
  {
    id: "k8s-ckad-108",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Probe Parameters: initialDelaySeconds vs periodSeconds vs timeoutSeconds",
    scenario: "A developer is fine-tuning a readiness probe. The probe must wait 10 seconds before initiating the first check, probe every 5 seconds thereafter, and consider any check taking longer than 2 seconds as a failure.",
    question: "Which probe parameters configure these exact intervals respectively?",
    options: [
      { id: 'A', text: "initialDelaySeconds: 10, periodSeconds: 5, timeoutSeconds: 2" },
      { id: 'B', text: "periodSeconds: 10, initialDelaySeconds: 5, timeoutSeconds: 2" },
      { id: 'C', text: "timeoutSeconds: 10, periodSeconds: 5, initialDelaySeconds: 2" },
      { id: 'D', text: "delay: 10s, interval: 5s, timeout: 2s" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`initialDelaySeconds` defines the wait time before the first probe executes. `periodSeconds` defines how often (interval) the probe performs the check. `timeoutSeconds` defines the number of seconds after which the probe times out.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes",
    tags: ["Kubernetes", "Probe Parameters", "Timing Tuning"]
  },
  {
    id: "k8s-ckad-109",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Probe Parameters: failureThreshold and successThreshold",
    scenario: "A network glitch causes a single transient health check failure. The developer wants Kubernetes to require 3 consecutive failed checks before marking the pod not ready, but only 1 successful check to mark it ready again.",
    question: "Which probe parameters configure these thresholds?",
    options: [
      { id: 'A', text: "failureThreshold: 3 and successThreshold: 1" },
      { id: 'B', text: "failureThreshold: 1 and successThreshold: 3" },
      { id: 'C', text: "retries: 3 and pass: 1" },
      { id: 'D', text: "minFail: 3 and minPass: 1" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`failureThreshold` is the number of consecutive failures needed before taking action (e.g. restarting the container or removing from endpoints). `successThreshold` (must be 1 for liveness/startup) is the minimum consecutive successes for the probe to be considered successful after having failed.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes",
    tags: ["Kubernetes", "Probe Thresholds", "Stability"]
  },
  {
    id: "k8s-ckad-110",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubectl Logs Inspection for Terminated Pods (--previous)",
    scenario: "A container inside a Kubernetes pod crashed 30 seconds ago and restarted. When running `kubectl logs &lt;pod-name&gt;`, the developer sees only fresh startup logs from the new container.",
    question: "Which kubectl flag retrieves logs from the previously crashed instance of the container?",
    options: [
      { id: 'A', text: "kubectl logs &lt;pod-name&gt; --previous (or -p)" },
      { id: 'B', text: "kubectl logs &lt;pod-name&gt; --all" },
      { id: 'C', text: "kubectl logs &lt;pod-name&gt; --follow" },
      { id: 'D', text: "kubectl describe pod &lt;pod-name&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `--previous` (or `-p`) flag in `kubectl logs` instructs the API server to retrieve the stdout/stderr logs from the previous instance of the container if it has exited or crashed, allowing developers to inspect fatal error traces.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Kubernetes", "kubectl logs", "Crash Analysis"]
  },
  {
    id: "k8s-ckad-111",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Multi-Container Pod Logs Selection (-c flag)",
    scenario: "A pod named `order-processor` contains two containers: `app` and `istio-proxy`. Running `kubectl logs order-processor` returns an error stating that a container name must be specified.",
    question: "How should the developer view logs specifically from the application container?",
    options: [
      { id: 'A', text: "kubectl logs order-processor -c app" },
      { id: 'B', text: "kubectl logs order-processor --all-containers" },
      { id: 'C', text: "kubectl logs order-processor/app" },
      { id: 'D', text: "kubectl exec order-processor -c app logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In multi-container pods, `kubectl logs &lt;pod-name&gt;` requires the `-c &lt;container-name&gt;` flag to designate which container's log stream to display (unless `--all-containers=true` is specified).",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Kubernetes", "kubectl logs", "Multi-Container"]
  },
  {
    id: "k8s-ckad-112",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubectl Logs Streaming and Tail Limiting (-f and --tail)",
    scenario: "An engineer is debugging a live production incident and needs to stream real-time log entries while showing only the 50 most recent lines.",
    question: "Which kubectl command streams live logs starting from the last 50 lines?",
    options: [
      { id: 'A', text: "kubectl logs -f --limit=50 &lt;pod-name&gt;" },
      { id: 'B', text: "kubectl logs -w -n 50 &lt;pod-name&gt;" },
      { id: 'C', text: "kubectl describe pod --logs=50" },
      { id: 'D', text: "kubectl logs -f --tail=50 &lt;pod-name&gt;" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`-f` (or `--follow`) streams real-time stdout/stderr output continuously. `--tail=50` limits the initial output to the most recent 50 lines, avoiding loading massive log histories into terminal buffers.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Kubernetes", "kubectl logs", "Streaming Logs"]
  },
  {
    id: "k8s-ckad-113",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubectl Logs Since Timestamp Filtering (--since and --since-time)",
    scenario: "A database outage occurred exactly 15 minutes ago. The on-call engineer wants to view only log entries emitted during the last 20 minutes across all pods matching `app=checkout`.",
    question: "Which kubectl command filters logs by relative time duration across matching pods?",
    options: [
      { id: 'A', text: "kubectl logs -l app=checkout --time=20m" },
      { id: 'B', text: "kubectl logs -l app=checkout --since=20m" },
      { id: 'C', text: "kubectl logs -l app=checkout --tail=20m" },
      { id: 'D', text: "kubectl get logs app=checkout -t 20m" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`--since=20m` filters log output to entries generated within the specified relative duration (e.g. `20m`, `3h`). Pairing it with `-l &lt;selector&gt;` queries logs across all pods matching the label selector.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Kubernetes", "kubectl logs", "Time-Based Filtering"]
  },
  {
    id: "k8s-ckad-114",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubernetes Events Inspection for Pod Scheduling and Eviction Diagnostics",
    scenario: "A newly deployed pod remains stuck in `Pending` status. The command `kubectl logs` returns nothing because the container has not started.",
    question: "Which command displays cluster events (such as failed scheduling, insufficient CPU, or missing volumes) for the namespace?",
    options: [
      { id: 'A', text: "kubectl get events --sort-by='.metadata.creationTimestamp'" },
      { id: 'B', text: "kubectl get nodes -o wide" },
      { id: 'C', text: "kubectl top pods" },
      { id: 'D', text: "kubectl cluster-info" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubectl get events` displays cluster-level diagnostic events recorded by the kube-scheduler, kubelet, and workload controllers. Sorting by creation timestamp reveals reasons for pod scheduling failures (e.g. `0/10 nodes are available: 10 Insufficient cpu`).",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/",
    tags: ["Kubernetes", "Events", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-115",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Metrics Server Architecture and Resource Telemetry",
    scenario: "A developer runs `kubectl top pods` to check memory usage, but the command fails with `error: Metrics API not available`.",
    question: "Which cluster add-on component collects resource metrics from kubelets and exposes them via the metrics.k8s.io API?",
    options: [
      { id: 'A', text: "Kubernetes Metrics Server" },
      { id: 'B', text: "Prometheus Operator alone" },
      { id: 'C', text: "CoreDNS" },
      { id: 'D', text: "kube-proxy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Metrics Server` is a cluster-wide aggregator of operational compute usage data. It scrapes resource metrics (CPU and memory) from the kubelet Summary API on each node and exposes them via the `metrics.k8s.io` API, powering `kubectl top` and Horizontal Pod Autoscalers.",
    referenceUrl: "https://github.com/kubernetes-sigs/metrics-server",
    tags: ["Kubernetes", "Metrics Server", "Resource Telemetry"]
  },
  {
    id: "k8s-ckad-116",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubectl Top Pod Sorting by Resource Consumption",
    scenario: "An engineer is diagnosing high memory consumption in the `production` namespace.",
    question: "Which command identifies the highest memory-consuming pods sorted in descending order?",
    options: [
      { id: 'A', text: "kubectl describe pods -n production | grep Memory" },
      { id: 'B', text: "kubectl top pods -n production --order=desc" },
      { id: 'C', text: "kubectl get pods -n production --sort-by=memory" },
      { id: 'D', text: "kubectl top pods -n production --sort-by=memory" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`kubectl top pods` displays current real-time CPU and memory usage of running pods. Passing `--sort-by=memory` (or `--sort-by=cpu`) sorts the output table, immediately highlighting resource hogs.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/kubectl_top_pod/",
    tags: ["Kubernetes", "kubectl top", "Memory Diagnostics"]
  },
  {
    id: "k8s-ckad-117",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubectl Describe Pod Last State vs Current State",
    scenario: "A developer runs `kubectl describe pod backend-worker`. In the container details, `State` shows `Running`, but `Last State` shows `Terminated` with `Exit Code: 137` and `Reason: OOMKilled`.",
    question: "What does this output tell the developer about the container's history?",
    options: [
      { id: 'A', text: "The container is currently dead and will not restart" },
      { id: 'B', text: "The container exceeded its CPU quota" },
      { id: 'C', text: "A network partition caused the pod to be rescheduled" },
      { id: 'D', text: "The container is currently running, but previously crashed due to exceeding its memory limit (OOMKilled) and was restarted by the kubelet" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In `kubectl describe pod`, `State` reflects the active runtime status (Running), while `Last State` displays the status of the immediate previous container instance before its most recent restart. Seeing `OOMKilled (Exit Code 137)` proves the previous instance exceeded its memory limit.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/determine-reason-pod-failure/",
    tags: ["Kubernetes", "kubectl describe", "OOMKilled"]
  },
  {
    id: "k8s-ckad-118",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Ephemeral Containers for In-Flight Process Inspection (kubectl debug)",
    scenario: "A production Node.js container runs on a hardened, read-only distroless image without a shell or curl. The app experiences intermittent CPU lockups. An engineer needs to attach `strace` and `gdb` to inspect the running process.",
    question: "Which kubectl command attaches a privileged troubleshooting container sharing the target pod's process namespace?",
    options: [
      { id: 'A', text: "kubectl attach &lt;pod-name&gt;" },
      { id: 'B', text: "kubectl debug -it &lt;pod-name&gt; --image=nicolaka/netshoot --target=&lt;container-name&gt;" },
      { id: 'C', text: "kubectl exec -it &lt;pod-name&gt; -- /bin/bash" },
      { id: 'D', text: "kubectl run debug --image=nicolaka/netshoot" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl debug` with `--target=&lt;container-name&gt;` creates an ephemeral container inside the target pod that shares the process namespace (`shareProcessNamespace`) with the specified container, allowing engineers to run `ps`, `strace`, and debuggers against the target process.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/#ephemeral-container",
    tags: ["Kubernetes", "kubectl debug", "Ephemeral Containers"]
  },
  {
    id: "k8s-ckad-119",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Debugging Nodes via kubectl debug node",
    scenario: "A worker node becomes `NotReady` due to kubelet disk pressure or corrupted network bridge interfaces. An administrator lacks direct SSH access to the node.",
    question: "Which command provisions an interactive privileged container on the host node with the host root filesystem mounted at /host?",
    options: [
      { id: 'A', text: "kubectl exec node/&lt;node-name&gt;" },
      { id: 'B', text: "kubectl debug node/&lt;node-name&gt; -it --image=busybox" },
      { id: 'C', text: "kubectl run host-debug --hostNetwork" },
      { id: 'D', text: "kubectl drain &lt;node-name&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl debug node/&lt;node-name&gt;` starts a pod on the specified node with host access (privileged, host namespaces) and mounts the node's root filesystem at `/host`, enabling administrators to inspect systemd services, journald logs, and host network configs without SSH.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/debug-node/",
    tags: ["Kubernetes", "kubectl debug node", "Cluster Administration"]
  },
  {
    id: "k8s-ckad-120",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Debugging Pods by Copying and Modifying Workload Manifests",
    scenario: "A production pod crashes instantly on startup (`CrashLoopBackOff`) because its startup command fails. An engineer wants to clone the pod into a sandbox copy with its command overridden to `sleep 3600` for interactive inspection.",
    question: "Which kubectl debug command creates a modified clone of the pod?",
    options: [
      { id: 'A', text: "kubectl edit pod &lt;pod-name&gt;" },
      { id: 'B', text: "kubectl debug &lt;pod-name&gt; --copy-to=my-debugger --image=busybox --container=app -- /bin/sh" },
      { id: 'C', text: "kubectl copy pod &lt;pod-name&gt;" },
      { id: 'D', text: "kubectl clone pod &lt;pod-name&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl debug &lt;pod-name&gt; --copy-to=&lt;new-name&gt;` creates an exact clone of the target pod's specification, allowing developers to swap container images, override entrypoint commands (e.g. `-- /bin/sh`), or alter environment variables safely in an isolated copy.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/#copying-a-pod-while-changing-its-command",
    tags: ["Kubernetes", "kubectl debug", "Pod Cloning"]
  },
  {
    id: "k8s-ckad-121",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Prometheus Exposition Metric Formats and Scrape Endpoints",
    scenario: "A microservice developer exposes application telemetry for Prometheus scraping.",
    question: "What is the standard HTTP endpoint and format expected by Prometheus scrapers?",
    options: [
      { id: 'A', text: "HTTP GET on /metrics returning plain-text Prometheus exposition format (metric_name{label=\"val\"} value)" },
      { id: 'B', text: "HTTP POST on /telemetry returning JSON" },
      { id: 'C', text: "HTTP GET on /healthz returning XML" },
      { id: 'D', text: "UDP datagrams on port 8125 in StatsD format" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The standard Prometheus model uses pull-based metric collection. Applications expose an HTTP endpoint (conventionally `/metrics`) that outputs metrics as plain-text lines formatted according to the Prometheus / OpenMetrics exposition format.",
    referenceUrl: "https://prometheus.io/docs/instrumenting/exposition_formats/",
    tags: ["Observability", "Prometheus", "Metrics"]
  },
  {
    id: "k8s-ckad-122",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Container Stdout and Stderr Redirection Mechanics",
    scenario: "A developer configures an application to write application error logs to a local disk file `/var/log/app.log`. When running `kubectl logs`, no log lines are displayed.",
    question: "Why does `kubectl logs` fail to show application log messages in this configuration?",
    options: [
      { id: 'A', text: "Kubernetes log collectors (kubelet, CRI) only capture output written directly to stdout and stderr streams" },
      { id: 'B', text: "kubectl logs only captures files in /tmp" },
      { id: 'C', text: "The container must run with root permissions" },
      { id: 'D', text: "Kubernetes requires logs to be written to UDP port 514" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Kubernetes container runtime environment (CRI) captures output that processes write to standard output (`stdout`) and standard error (`stderr`) descriptors. Files written to internal disk paths are not captured by the kubelet unless redirected to `/dev/stdout` or forwarded via a sidecar.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/logging/#basic-workload-logging",
    tags: ["Kubernetes", "Logging Architecture", "stdout"]
  },
  {
    id: "k8s-ckad-123",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "CrashLoopBackOff Diagnostics: Common Causes and Remediation",
    scenario: "A pod repeatedly enters `CrashLoopBackOff` status with restart counts incrementing every few minutes.",
    question: "What does this status indicate to the developer about the container's runtime state?",
    options: [
      { id: 'A', text: "The worker node ran out of disk space" },
      { id: 'B', text: "The cluster control plane is offline" },
      { id: 'C', text: "The container process starts up, but immediately exits or terminates abnormally, causing the kubelet to restart it with exponential backoff delays" },
      { id: 'D', text: "The container image cannot be found in the registry" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`CrashLoopBackOff` indicates that the container starts up but repeatedly fails or exits (status code != 0, OOMKilled, missing env vars, or fatal app crashes). The kubelet restarts the container, backing off exponentially (10s, 20s, 40s... up to 5 minutes) between attempts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Kubernetes", "CrashLoopBackOff", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-124",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "ImagePullBackOff and ErrImagePull Root Cause Analysis",
    scenario: "A newly deployed pod displays status `ImagePullBackOff`.",
    question: "Which two issues are the most frequent root causes of this error?",
    options: [
      { id: 'A', text: "Typo in the image repository or tag name, or missing imagePullSecrets credentials for a private registry" },
      { id: 'B', text: "The container ran out of memory limits" },
      { id: 'C', text: "The liveness probe failed 3 times" },
      { id: 'D', text: "The pod lacks CPU requests" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`ImagePullBackOff` indicates that the kubelet failed to pull the container image from the registry (e.g. invalid tag, non-existent repository name, or unauthorized 401/403 error due to missing `imagePullSecrets`). Inspecting `kubectl describe pod` reveals the exact registry HTTP error.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy",
    tags: ["Kubernetes", "ImagePullBackOff", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-125",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Probe Impact on Kubernetes Service Endpoints",
    scenario: "A Kubernetes Deployment manages 3 pods behind a ClusterIP Service. Pod-1's readiness probe begins failing due to high database query load.",
    question: "What immediate action does the Kubernetes endpoint controller take regarding Pod-1?",
    options: [
      { id: 'A', text: "Pod-1's IP address is immediately removed from the Service Endpoints list, stopping new traffic from reaching it while keeping the container running" },
      { id: 'B', text: "Pod-1 is terminated and restarted immediately" },
      { id: 'C', text: "Pod-1 continues receiving traffic normally" },
      { id: 'D', text: "All 3 pods are restarted" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unlike liveness probes which kill containers, a failing `readinessProbe` merely signals that the pod is temporarily unable to process traffic. The endpoints controller removes the pod's IP from the Service's Endpoints (or EndpointSlices), shielding the pod from traffic until it becomes healthy again.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#endpoints",
    tags: ["Kubernetes", "readinessProbe", "Endpoints"]
  }
];

export default K8S_CKAD_QUESTIONS_5;
