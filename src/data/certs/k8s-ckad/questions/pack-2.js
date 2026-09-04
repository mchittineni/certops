export const K8S_CKAD_QUESTIONS_2 = [
  {
    id: "k8s-ckad-26",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Resource Requests vs Limits Mechanics",
    scenario: "A developer is configuring compute resources for a production web service in a Kubernetes Pod manifest.",
    question: "What is the critical operational difference between resource requests and resource limits?",
    options: [
      { id: 'A', text: "There is no difference between requests and limits" },
      { id: 'B', text: "requests enforce hard limits; limits are used for scheduling" },
      { id: 'C', text: "requests apply to disk; limits apply to network" },
      { id: 'D', text: "requests are used by the kube-scheduler to find a suitable node; limits enforce hard ceilings via cgroups on the node" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`requests` represent the minimum guaranteed compute resources required by the pod; the kube-scheduler uses requests to choose an eligible node with sufficient allocatable capacity. `limits` enforce the maximum CPU throttling and memory caps (OOMKilled) via Linux cgroups.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Kubernetes", "Resources", "Requests and Limits"]
  },
  {
    id: "k8s-ckad-27",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "OOMKilled Container Exit Code (Exit Code 137)",
    scenario: "A Java container in a Kubernetes pod crashes with status `OOMKilled` and exit code `137`.",
    question: "What caused this container termination?",
    options: [
      { id: 'A', text: "The container CPU quota was exceeded" },
      { id: 'B', text: "The container process exceeded its memory limit and was terminated by the Linux kernel Out-Of-Memory (OOM) killer (128 + SIGKILL 9 = 137)" },
      { id: 'C', text: "The container root filesystem was full" },
      { id: 'D', text: "A network timeout occurred" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Exit code 137 indicates that a process was killed by Linux signal 9 (SIGKILL: `128 + 9 = 137`). When a container exceeds its configured `resources.limits.memory`, the Linux kernel OOM killer terminates the process immediately.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#how-pods-with-resource-limits-are-run",
    tags: ["Kubernetes", "OOMKilled", "Exit Codes"]
  },
  {
    id: "k8s-ckad-28",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "CPU Throttling vs Memory Eviction Behavior",
    scenario: "A developer observes that an application pod behaves sluggishly during traffic spikes. CPU utilization reaches the defined limit, while memory usage remains well below the limit.",
    question: "How does Kubernetes handle containers that exceed CPU limits versus memory limits?",
    options: [
      { id: 'A', text: "Both CPU and memory overages trigger pod restarts" },
      { id: 'B', text: "Kubernetes ignores CPU limits completely" },
      { id: 'C', text: "Containers exceeding CPU limits are terminated immediately" },
      { id: 'D', text: "Containers exceeding CPU limits are throttled by the CFS scheduler without crashing; containers exceeding memory limits are killed (OOMKilled)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CPU is a compressible resource: when a container hits its CPU limit, the Linux Completely Fair Scheduler (CFS) throttles CPU time slices, causing the app to slow down without crashing. Memory is non-compressible: exceeding memory limits triggers an immediate kernel OOM kill.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#how-pods-with-resource-limits-are-run",
    tags: ["Kubernetes", "CPU Throttling", "Compressible Resources"]
  },
  {
    id: "k8s-ckad-29",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Quality of Service (QoS) Classes: Guaranteed vs Burstable vs BestEffort",
    scenario: "A Kubernetes cluster experiences severe node memory pressure. The kubelet must decide which pods to evict first to reclaim memory.",
    question: "Which QoS class is assigned to pods where every container has identical CPU and memory requests and limits, protecting them with lowest eviction priority?",
    options: [
      { id: 'A', text: "Burstable" },
      { id: 'B', text: "Critical" },
      { id: 'C', text: "Guaranteed" },
      { id: 'D', text: "BestEffort" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes assigns three QoS classes: `Guaranteed` (requests equal limits for all containers, lowest eviction priority), `Burstable` (requests are less than limits, medium eviction priority), and `BestEffort` (no requests or limits defined, evicted first under node pressure).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/",
    tags: ["Kubernetes", "QoS Classes", "Pod Eviction"]
  },
  {
    id: "k8s-ckad-30",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Downward API: Exposing Pod Metadata as Environment Variables",
    scenario: "An application running inside a container needs to know its own pod name, pod namespace, and host node IP address for logging and registration purposes.",
    question: "Which Kubernetes mechanism injects pod and cluster metadata into containers as environment variables without querying the API server?",
    options: [
      { id: 'A', text: "The Downward API (using fieldRef.fieldPath)" },
      { id: 'B', text: "Downward Volumes alone" },
      { id: 'C', text: "Secrets" },
      { id: 'D', text: "ConfigMaps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Downward API` exposes Pod and container fields to the container via environment variables or volume files using `fieldRef` (e.g. `metadata.name`, `metadata.namespace`, `status.podIP`, `status.hostIP`), avoiding direct RBAC calls to the Kubernetes API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Kubernetes", "Downward API", "Metadata"]
  },
  {
    id: "k8s-ckad-31",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Downward API: Exposing Resource Limits to Runtimes",
    scenario: "A Java container needs to configure its JVM heap size dynamically based on the container's CPU and memory resource limits defined in the pod manifest.",
    question: "Which Downward API reference exposes container resource limits to environment variables?",
    options: [
      { id: 'A', text: "fieldRef.fieldPath" },
      { id: 'B', text: "resourceFieldRef (e.g. containerName: app, resource: limits.memory)" },
      { id: 'C', text: "secretKeyRef" },
      { id: 'D', text: "configMapKeyRef" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Downward API supports `resourceFieldRef` to expose container-level resource limits and requests (such as `limits.cpu`, `limits.memory`, `requests.cpu`) as environment variables, enabling language runtimes like Java to adapt heap allocations dynamically.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information/#capabilities-of-the-downward-api",
    tags: ["Kubernetes", "Downward API", "Resource Limits"]
  },
  {
    id: "k8s-ckad-32",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Docker Multi-Platform Container Image Building (Buildx / QEMU)",
    scenario: "A software engineering team builds container images on Apple Silicon (ARM64) Macs that must execute reliably on AMD64 (x86_64) Kubernetes worker nodes in production.",
    question: "Which Docker tool builds multi-architecture container images supporting both amd64 and arm64?",
    options: [
      { id: 'A', text: "docker build -t app:latest ." },
      { id: 'B', text: "docker commit" },
      { id: 'C', text: "docker-compose up" },
      { id: 'D', text: "docker buildx build --platform linux/amd64,linux/arm64" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`docker buildx` leverages BuildKit and QEMU emulation to compile and assemble multi-architecture container image manifests. Publishing a multi-platform image allows ARM and x86 nodes to automatically pull the appropriate binary layer.",
    referenceUrl: "https://docs.docker.com/build/building/multi-platform/",
    tags: ["Docker", "buildx", "Multi-Platform"]
  },
  {
    id: "k8s-ckad-33",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "OCI Image Specification and Layer Caching Optimization",
    scenario: "In a Dockerfile for a Node.js application, running `COPY . .` before `RUN npm install` causes Docker to re-download all npm packages on every single code edit, resulting in 5-minute build times.",
    question: "How should the Dockerfile commands be ordered to leverage Docker layer caching effectively?",
    options: [
      { id: 'A', text: "COPY package*.json ./ followed by RUN npm install, and then COPY . ." },
      { id: 'B', text: "RUN npm install followed by COPY package*.json" },
      { id: 'C', text: "COPY . . followed by RUN npm install --cache" },
      { id: 'D', text: "Docker does not support layer caching" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Docker caches image layers sequentially. Placing rarely changed files (e.g. `package.json`) and expensive dependency installation (`npm install`) before frequently changed source code (`COPY . .`) ensures Docker reuses the cached dependency layer across source code changes.",
    referenceUrl: "https://docs.docker.com/build/cache/",
    tags: ["Docker", "Layer Caching", "Build Optimization"]
  },
  {
    id: "k8s-ckad-34",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Image Vulnerability Scanning with Trivy in CI/CD",
    scenario: "A security gate in a CI/CD pipeline must scan container images for known vulnerabilities (CVEs) and fail the pipeline if any critical severity CVEs are detected.",
    question: "Which open-source container security scanner analyzes OS packages and application dependencies in container images?",
    options: [
      { id: 'A', text: "Helm verify" },
      { id: 'B', text: "Kustomize build" },
      { id: 'C', text: "kubectl lint" },
      { id: 'D', text: "Trivy (or Grype / Clair)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`Trivy` is a comprehensive open-source security scanner for container images, filesystems, and Git repositories. Running `trivy image --severity CRITICAL --exit-code 1 &lt;image&gt;` scans OS and language dependencies, halting CI/CD builds if critical vulnerabilities exist.",
    referenceUrl: "https://trivy.dev/",
    tags: ["Security", "Trivy", "Vulnerability Scanning"]
  },
  {
    id: "k8s-ckad-35",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: restartPolicy Constraints (Never vs OnFailure)",
    scenario: "A developer writes a Kubernetes Job manifest and specifies `restartPolicy: Always`. The Kubernetes API server rejects the manifest with a validation error.",
    question: "Why does the Kubernetes API server reject `restartPolicy: Always` in a Job specification?",
    options: [
      { id: 'A', text: "restartPolicy is only valid for DaemonSets" },
      { id: 'B', text: "The API server requires a paid enterprise license for restartPolicy" },
      { id: 'C', text: "Jobs represent batch tasks intended to run to completion; restartPolicy must be either OnFailure or Never" },
      { id: 'D', text: "Jobs only support restartPolicy: Always" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Kubernetes `Job` is designed for batch workloads that run to completion. `restartPolicy: Always` makes sense only for long-running services (like Deployments). Jobs require either `OnFailure` (restart container inside the same pod upon failure) or `Never` (spawn a new pod upon failure).",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#pod-template",
    tags: ["Kubernetes", "Jobs", "restartPolicy"]
  },
  {
    id: "k8s-ckad-36",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Init Container Failure Impact on Pod Startup",
    scenario: "A pod defines 2 init containers and 1 main application container. Init Container 1 succeeds, but Init Container 2 fails and exits with status code 1.",
    question: "What happens to the pod and the main application container?",
    options: [
      { id: 'A', text: "The pod is permanently deleted from the cluster" },
      { id: 'B', text: "Init Container 1 is re-executed simultaneously" },
      { id: 'C', text: "Init Container 2 is skipped and the main container starts immediately" },
      { id: 'D', text: "The main application container is never started; Kubernetes restarts Init Container 2 according to the pod's restartPolicy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Init containers execute strictly in order. Each init container must complete successfully (`exit 0`) before the next one starts. If any init container fails, Kubernetes restarts the failing init container until it succeeds, completely preventing the main application containers from running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/#understanding-init-containers",
    tags: ["Kubernetes", "initContainers", "Failure Handling"]
  },
  {
    id: "k8s-ckad-37",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Multi-Container Pod Network Sharing via Localhost",
    scenario: "In a multi-container pod, a NodeJS web application listens on port 3000. A companion Envoy proxy container in the same pod needs to forward incoming requests to the NodeJS app.",
    question: "How should the Envoy container address the NodeJS application across the network?",
    options: [
      { id: 'A', text: "Multi-container pods cannot communicate over TCP" },
      { id: 'B', text: "Connect to the node's physical IP address" },
      { id: 'C', text: "Connect to the pod's public DNS domain name" },
      { id: 'D', text: "Connect to localhost:3000 (127.0.0.1:3000)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "All containers in a Kubernetes Pod share the exact same network namespace (the same IP address and port space). Containers in the same pod can communicate with each other over `localhost` (127.0.0.1) using their respective listening port numbers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking",
    tags: ["Kubernetes", "Pod Networking", "Localhost"]
  },
  {
    id: "k8s-ckad-38",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Port Conflicts in Multi-Container Pods",
    scenario: "A developer configures a pod containing two containers: an Apache web server and an NGINX web server. Both containers attempt to bind to port 80 simultaneously.",
    question: "What happens when the pod starts on a worker node?",
    options: [
      { id: 'A', text: "The second container fails to start and crashes with a port binding error (address already in use)" },
      { id: 'B', text: "Both containers share port 80 using round-robin DNS" },
      { id: 'C', text: "Kubernetes automatically reassigns NGINX to port 8080" },
      { id: 'D', text: "The worker node crashes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because all containers in a pod share the same network namespace and IP address, port numbers cannot be duplicated within a pod. If two containers attempt to bind to the same port (e.g. port 80), the second container fails with `bind: address already in use`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking",
    tags: ["Kubernetes", "Pod Networking", "Port Binding"]
  },
  {
    id: "k8s-ckad-39",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod SecurityContext: runAsGroup Configuration",
    scenario: "A shared file volume mounted in a pod requires write permissions restricted to Linux group ID 2000. All containers in the pod must write files with GID 2000.",
    question: "Which Pod-level securityContext property sets the primary group ID for all container processes in the pod?",
    options: [
      { id: 'A', text: "securityContext: { runAsGroup: 2000 }" },
      { id: 'B', text: "securityContext: { fsGroup: 2000 } alone" },
      { id: 'C', text: "securityContext: { runAsUser: 2000 }" },
      { id: 'D', text: "securityContext: { privileged: true }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`runAsGroup` sets the Primary Group ID (GID) for all processes in the container. `runAsUser` sets the UID, and `fsGroup` sets the supplementary group owner of mounted volumes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod",
    tags: ["Kubernetes", "SecurityContext", "runAsGroup"]
  },
  {
    id: "k8s-ckad-40",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod SecurityContext: fsGroup for Shared Volume Permissions",
    scenario: "A pod mounts a persistent volume where two containers must read and write shared data. By default, files created by Container A are unwriteable by Container B due to group permissions.",
    question: "Which Pod-level securityContext field automatically changes ownership of mounted volume files to a shared supplementary group?",
    options: [
      { id: 'A', text: "allowPrivilegeEscalation: false" },
      { id: 'B', text: "fsGroup: 3000" },
      { id: 'C', text: "runAsGroup: 3000" },
      { id: 'D', text: "runAsUser: 3000" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`fsGroup` defines a special supplemental group applied to all containers in the Pod. Kubernetes automatically changes the permissions of all files and directories on mounted volumes (like persistent volumes) to be owned by `fsGroup`, allowing all containers in the pod to read and write freely.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#configure-volume-permission-and-ownership-change-policy-for-pods",
    tags: ["Kubernetes", "fsGroup", "Volume Permissions"]
  },
  {
    id: "k8s-ckad-41",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Environment Variables: env vs envFrom",
    scenario: "A developer needs to load 50 configuration key-value pairs from a Kubernetes ConfigMap into a container. Writing 50 separate `valueFrom: configMapKeyRef` blocks in the pod YAML is tedious and error-prone.",
    question: "Which Kubernetes container property imports all key-value pairs from a ConfigMap as environment variables in a single directive?",
    options: [
      { id: 'A', text: "env: [ name: ALL, valueFrom: configMapRef ]" },
      { id: 'B', text: "configMapEnv: true" },
      { id: 'C', text: "envFrom: [ configMapRef: { name: my-config } ]" },
      { id: 'D', text: "volumeMounts: [ configMap ]" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`envFrom` allows a container to consume all key-value pairs from a `ConfigMap` or `Secret` as environment variables without defining each key individually, streamlining container manifests and maintaining clean configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#configure-all-key-value-pairs-in-a-configmap-as-container-environment-variables",
    tags: ["Kubernetes", "envFrom", "ConfigMap"]
  },
  {
    id: "k8s-ckad-42",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Command and Args Mapping to Docker ENTRYPOINT and CMD",
    scenario: "In a Kubernetes Pod specification, a developer defines `command: ['/bin/mytool']` and `args: ['--verbose']`.",
    question: "How do Kubernetes `command` and `args` map to Dockerfile `ENTRYPOINT` and `CMD` instructions?",
    options: [
      { id: 'A', text: "command overrides Docker CMD; args overrides Docker ENTRYPOINT" },
      { id: 'B', text: "command overrides Docker ENTRYPOINT; args overrides Docker CMD" },
      { id: 'C', text: "command executes in host OS; args executes in container" },
      { id: 'D', text: "command and args append to Docker CMD without overriding" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Kubernetes container specifications, `command` overrides the container image's Dockerfile `ENTRYPOINT`. `args` overrides the container image's Dockerfile `CMD`. If neither is supplied, the image's default ENTRYPOINT and CMD are executed.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes",
    tags: ["Kubernetes", "Command and Args", "ENTRYPOINT"]
  },
  {
    id: "k8s-ckad-43",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod ImagePullSecrets for Private Container Registries",
    scenario: "A developer deploys a pod using a private container image hosted in GitHub Container Registry (`ghcr.io/org/private-app:v1`). The pod fails to pull the image with an `ImagePullBackOff` error.",
    question: "Which Kubernetes configuration links private Docker registry credentials (type: kubernetes.io/dockerconfigjson) to the pod?",
    options: [
      { id: 'A', text: "env: [ DOCKER_AUTH ]" },
      { id: 'B', text: "dockerAuth: [ name: ghcr-secret ]" },
      { id: 'C', text: "secrets: [ name: ghcr-secret ]" },
      { id: 'D', text: "imagePullSecrets: [ name: ghcr-secret ] in the Pod specification (or attached to the ServiceAccount)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To pull images from private container registries requiring authentication, the pod manifest must reference a `kubernetes.io/dockerconfigjson` Secret via `imagePullSecrets: [{ name: my-registry-key }]` (or link the secret to the Pod's ServiceAccount).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Kubernetes", "imagePullSecrets", "Private Registry"]
  },
  {
    id: "k8s-ckad-44",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container ImagePullPolicy: Always vs IfNotPresent vs Never",
    scenario: "A developer updates a container image in a registry using a mutable tag `myapp:latest`. The pod on a worker node is restarted, but continues running old code because the node does not check the registry for updates.",
    question: "Which imagePullPolicy setting forces the kubelet to always query the registry for the latest image digest when creating a container?",
    options: [
      { id: 'A', text: "imagePullPolicy: Always" },
      { id: 'B', text: "imagePullPolicy: IfNotPresent" },
      { id: 'C', text: "imagePullPolicy: Never" },
      { id: 'D', text: "imagePullPolicy: OnFailure" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`imagePullPolicy: Always` forces the kubelet to contact the container registry on every container creation to check if the tag's digest has changed. `IfNotPresent` uses the locally cached image if it exists. (Images using the `:latest` tag default to `Always`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy",
    tags: ["Kubernetes", "imagePullPolicy", "Container Images"]
  },
  {
    id: "k8s-ckad-45",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Termination Reason Inspection (kubectl describe pod)",
    scenario: "A developer is investigating why a batch pod terminated unexpectedly. The command `kubectl get pods` shows status `Error`.",
    question: "Which command reveals the container's exact termination exit code, termination signal, and message?",
    options: [
      { id: 'A', text: "kubectl logs &lt;pod-name&gt; alone" },
      { id: 'B', text: "kubectl describe pod &lt;pod-name&gt;" },
      { id: 'C', text: "kubectl top pod &lt;pod-name&gt;" },
      { id: 'D', text: "kubectl get pod &lt;pod-name&gt; -o wide" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl describe pod` outputs detailed pod metadata, including the `Last State` section. For terminated containers, it displays the `Exit Code`, `Reason` (e.g. `OOMKilled` or `Error`), `Started` timestamp, and `Finished` timestamp.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/#examine-pod-logs",
    tags: ["Kubernetes", "kubectl describe", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-46",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes Jobs: Suspend and Resume Functionality",
    scenario: "A platform team runs high-priority real-time workloads alongside large batch processing Jobs. During a sudden traffic surge, the team needs to pause an active batch Job without deleting its specification.",
    question: "Which field in the Job specification pauses pod execution when set to true?",
    options: [
      { id: 'A', text: "suspend: true" },
      { id: 'B', text: "paused: true" },
      { id: 'C', text: "replicas: 0" },
      { id: 'D', text: "active: false" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes supports suspending and resuming Jobs. Setting `spec.suspend: true` on an existing Job terminates all active pods and prevents new pods from starting. Setting `spec.suspend: false` resumes execution from where it left off.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#suspending-a-job",
    tags: ["Kubernetes", "Jobs", "Job Suspend"]
  },
  {
    id: "k8s-ckad-47",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Pod Termination: Termination Message Path and Policy",
    scenario: "A developer wants a crashing container to write a short error message (e.g. `Database connection failed`) that is captured directly in `kubectl describe pod` status without reading full application log streams.",
    question: "Which container setting specifies the file path where the container writes its fatal exit message?",
    options: [
      { id: 'A', text: "terminationMessagePath: /dev/termination-log" },
      { id: 'B', text: "logPath: /var/log/error.log" },
      { id: 'C', text: "stderrCapture: true" },
      { id: 'D', text: "exitMessagePath: /tmp/exit" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default, Kubernetes inspects `/dev/termination-log` (or a custom `terminationMessagePath`). If the container writes text to this file before exiting, Kubernetes displays the text directly in the pod's `Last State: Message` field visible in `kubectl describe`.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/determine-reason-pod-failure/",
    tags: ["Kubernetes", "terminationMessagePath", "Diagnostics"]
  },
  {
    id: "k8s-ckad-48",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Container Capabilities: Restricting CAP_SYS_ADMIN",
    scenario: "A security architect is reviewing container privilege levels for an untrusted web application.",
    question: "Which Linux capability grants broad administrative powers over the host kernel (similar to full root access) and must strictly never be granted to standard application pods?",
    options: [
      { id: 'A', text: "CAP_SYS_ADMIN" },
      { id: 'B', text: "CAP_NET_BIND_SERVICE" },
      { id: 'C', text: "CAP_CHOWN" },
      { id: 'D', text: "CAP_KILL" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`CAP_SYS_ADMIN` is the most powerful Linux capability. It allows mounting filesystems, configuring namespaces, loading kernel modules, and performing raw device operations. Granting `CAP_SYS_ADMIN` effectively bypasses container isolation boundaries.",
    referenceUrl: "https://man7.org/linux/man-pages/man7/capabilities.7.html",
    tags: ["Kubernetes", "Security", "CAP_SYS_ADMIN"]
  },
  {
    id: "k8s-ckad-49",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "CronJobs: failedJobsHistoryLimit and successfulJobsHistoryLimit",
    scenario: "A CronJob runs every 5 minutes. Over 24 hours, hundreds of completed job objects accumulate in the cluster. The administrator wants to retain only the 3 most recent successful runs and 1 failed run.",
    question: "Which two CronJob fields configure these retention limits?",
    options: [
      { id: 'A', text: "historyLimit: 3 and purgeFailed: 1" },
      { id: 'B', text: "retention: { success: 3, failed: 1 }" },
      { id: 'C', text: "successfulJobsHistoryLimit: 3 and failedJobsHistoryLimit: 1" },
      { id: 'D', text: "completions: 3 and backoffLimit: 1" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a Kubernetes CronJob specification, `successfulJobsHistoryLimit` (default 3) and `failedJobsHistoryLimit` (default 1) govern how many finished Job objects are kept for auditing before the CronJob controller deletes them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#jobs-history-limits",
    tags: ["Kubernetes", "CronJobs", "History Limits"]
  },
  {
    id: "k8s-ckad-50",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    domainName: "Application Design and Build",
    title: "Kubernetes SecurityContext: seccompProfile Configuration",
    scenario: "To prevent compromised containers from executing dangerous Linux system calls, a security policy mandates that all pods must use the container runtime's default secure computing profile.",
    question: "Which securityContext property applies the default seccomp profile in Kubernetes 1.19+?",
    options: [
      { id: 'A', text: "seccompProfile: { type: RuntimeDefault }" },
      { id: 'B', text: "seccompProfile: { type: Unconfined }" },
      { id: 'C', text: "seccomp: { enabled: true }" },
      { id: 'D', text: "apparmorProfile: default" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes supports seccomp (secure computing mode) to restrict available system calls. Setting `securityContext: { seccompProfile: { type: RuntimeDefault } }` instructs the container runtime to block dangerous syscalls like `sys_chroot` and `kexec_load`.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Kubernetes", "seccompProfile", "Runtime Security"]
  }
];

export default K8S_CKAD_QUESTIONS_2;
