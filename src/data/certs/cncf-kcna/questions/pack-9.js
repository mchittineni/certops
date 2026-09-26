export const CNCF_KCNA_QUESTIONS_9 = [
  {
    id: "cncf-kcna-201",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Application logs written to a file",
    scenario: "A legacy PHP application in a container writes its logs to /var/log/app/app.log. The operations team complains that kubectl logs shows nothing for these pods and that the cluster's node-level log collector never picks the entries up.",
    question: "What change aligns the application with how Kubernetes handles container logs?",
    options: [
      { id: 'A', text: "Write the logs to standard output and standard error, which the runtime captures for kubectl logs." },
      { id: 'B', text: "Store the log file on a PersistentVolume so the kubelet can stream it through the kubectl logs API." },
      { id: 'C', text: "Rotate the log file hourly inside the container so that the kubelet can detect when it is complete." },
      { id: 'D', text: "Mount a hostPath volume at /var/log/app so the log file lands in the node's own /var/log directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The container runtime captures each container's stdout and stderr into files on the node, which kubectl logs reads through the kubelet and which node-level agents such as Fluent Bit collect; writing logs there is the cloud native convention. A hostPath mount puts a file on the node but not in the location or format the runtime manages, and it weakens isolation. The kubelet does not watch arbitrary files inside containers, rotated or not. A PersistentVolume stores the file durably, but kubectl logs never reads from volumes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/logging/",
    tags: ["Logging","stdout","Containers"]
  },
  {
    id: "cncf-kcna-202",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Web server, worker and cron in one image",
    scenario: "A team packages nginx, a Python API and a cron scheduler into one image, started by supervisord. When the API crashes, supervisord restarts it quietly, so Kubernetes never notices, and scaling the API also multiplies the cron jobs.",
    question: "Which design follows container best practice?",
    options: [
      { id: 'A', text: "Keep the single image but add a liveness probe that checks all three processes through supervisord." },
      { id: 'B', text: "Keep the single image but run it as a DaemonSet so there is exactly one cron scheduler on each node." },
      { id: 'C', text: "Keep the single image and scale it with a HorizontalPodAutoscaler that targets the API's CPU usage." },
      { id: 'D', text: "Split them into separate images with one main process each, managed and scaled by their own objects." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running one main process per container lets Kubernetes see each process's health and exit status, restart it, and scale each component independently, for example a Deployment for the API and nginx and a CronJob for the scheduled work. A combined liveness probe restarts all three processes whenever one fails and still couples their scaling. Autoscaling the combined pod still multiplies the cron jobs with every replica. A DaemonSet ties the number of copies to the number of nodes, still multiplying cron runs and making API scaling depend on node count.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Container design","Single process"]
  },
  {
    id: "cncf-kcna-203",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Users logged out on every restart",
    scenario: "An online learning platform keeps user sessions in the memory of its API container. Every time a pod is restarted during a rollout or rescheduled after a node failure, the users served by that pod are logged out and lose unsaved progress.",
    question: "Which change fits cloud native design principles?",
    options: [
      { id: 'A', text: "Pin each API pod to a node with nodeName so a user's pod is not rescheduled when a node is drained." },
      { id: 'B', text: "Store sessions in an external service such as Redis so any replica can serve any user request." },
      { id: 'C', text: "Raise terminationGracePeriodSeconds so that containers keep sessions in memory for longer." },
      { id: 'D', text: "Turn off rolling updates and restart pods only during a maintenance window each weekend." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Containers are meant to be disposable: any replica can be replaced at any time, so state that must survive belongs in a backing service such as Redis or a database, which makes the API stateless and lets any replica serve any user. Pinning pods with nodeName bypasses the scheduler and still loses sessions when the node fails. A longer grace period only delays shutdown; in-memory state is still lost. Restricting rollouts to maintenance windows reduces how often it happens but does not fix node failures or scaling events.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Stateless","Cloud native design"]
  },
  {
    id: "cncf-kcna-204",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Uploaded photos vanish after a crash",
    scenario: "A photo-sharing prototype stores user uploads in /data/uploads inside its container. After the container crashed and was restarted by the kubelet, all previously uploaded photos were gone, although the pod itself was never deleted.",
    question: "How should the team keep uploads across container restarts and pod replacements?",
    options: [
      { id: 'A', text: "Mount a PersistentVolumeClaim at /data/uploads so the files live outside the container's filesystem." },
      { id: 'B', text: "Commit the running container to a new image after each upload so the photos become part of the image." },
      { id: 'C', text: "Set restartPolicy Never on the pod so the kubelet does not recreate the container's writable layer." },
      { id: 'D', text: "Mount an emptyDir volume at /data/uploads so that the files survive the pod being deleted and recreated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A container's writable layer is discarded when the container is recreated, so durable data belongs on a volume; a PersistentVolumeClaim is backed by storage that outlives both container restarts and pod replacement. restartPolicy Never stops the restart but leaves the application down and still loses data when the pod is replaced. Committing containers to images mixes data with code and is not how Kubernetes workloads are run. An emptyDir survives container restarts but is deleted with the pod, so it fails the pod-replacement requirement.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Ephemeral filesystem","PersistentVolumeClaim"]
  },
  {
    id: "cncf-kcna-205",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two containers both want port 80",
    scenario: "A developer adds a second container running an admin UI to an existing pod whose main container already serves HTTP on port 80. Both images default to listening on port 80, and the new container immediately fails with address already in use.",
    question: "Why does the second container fail?",
    options: [
      { id: 'A', text: "Port 80 is privileged, and only the first container in a pod is allowed to bind privileged ports." },
      { id: 'B', text: "The Service in front of the pod forwards port 80 to the first container, which locks it for others." },
      { id: 'C', text: "Containers in a pod share one network namespace, so two processes cannot bind the same port in it." },
      { id: 'D', text: "A pod may only declare a single containerPort, so the kubelet blocks the second container's port." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "All containers in a pod share one network namespace, and therefore one IP address and one port space, which is what lets them talk over localhost; two processes cannot both listen on port 80 in it, so the admin UI must use another port. A pod can declare many containerPorts, and the kubelet does not block ports. Services forward traffic to pod IPs and ports but do not reserve ports inside the pod. Privileged port rules depend on the process's user and capabilities, not on container order.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking",
    tags: ["Pods","Networking","Multi-container"]
  },
  {
    id: "cncf-kcna-206",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Identifying the graduated runtime project",
    scenario: "An architecture review board requires that core platform components come from CNCF graduated projects. The team is compiling a shortlist and needs to identify which graduated project is the container runtime that the kubelet talks to through the CRI.",
    question: "Which project should go on the list as the container runtime?",
    options: [
      { id: 'A', text: "Prometheus, the graduated monitoring system whose agents start containers on each worker node." },
      { id: 'B', text: "Jaeger, the graduated tracing system whose collectors launch and supervise the traced containers." },
      { id: 'C', text: "containerd, the graduated runtime that implements the CRI and manages the container lifecycle." },
      { id: 'D', text: "Envoy, the graduated edge proxy that acts as the runtime for workloads inside its filter chain." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "containerd is a CNCF graduated container runtime that implements the Container Runtime Interface, pulls images and manages container lifecycles on each node, and it is the default runtime on most Kubernetes distributions; CRI-O is another graduated CRI runtime. Envoy is a graduated proxy used for ingress and service meshes; it does not run containers. Prometheus collects and queries metrics. Jaeger provides distributed tracing. None of the other three launches containers.",
    referenceUrl: "https://containerd.io/",
    tags: ["containerd","CNCF","Container runtime"]
  },
  {
    id: "cncf-kcna-207",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Image built locally, missing in the cluster",
    scenario: "A developer runs docker build -t orders:dev on her laptop and then applies a pod manifest with image: orders:dev to a shared cloud cluster. The pod fails with ErrImagePull, although docker images on her laptop clearly lists orders:dev.",
    question: "What is the underlying problem?",
    options: [
      { id: 'A', text: "Cluster nodes pull from a registry and cannot see the laptop's local image store, so it must be pushed." },
      { id: 'B', text: "The kubelet requires an image digest for locally built images and rejects references that use a tag." },
      { id: 'C', text: "Docker-built images cannot run on cloud clusters that use containerd, so the image must be rebuilt." },
      { id: 'D', text: "The dev tag is reserved for laptop builds by Kubernetes, so cluster nodes refuse to pull it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each node's container runtime pulls images from a registry reachable over the network; an image built on a laptop exists only in that laptop's local store, and the short name orders:dev resolves to Docker Hub, where it does not exist. Tagging it for a registry and pushing it fixes the problem. Kubernetes reserves no tag names. Docker builds produce standard OCI images that containerd runs unchanged. Tags are valid image references; digests are recommended for immutability but not required.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["Registries","Container images","ErrImagePull"]
  },
  {
    id: "cncf-kcna-208",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two apps needing different Python versions",
    scenario: "A research institute runs two internal tools on the same servers. One requires Python 3.8 with an old scientific library, while the other needs Python 3.12, and upgrading the shared system packages keeps breaking one or the other.",
    question: "Which benefit of containers addresses this directly?",
    options: [
      { id: 'A', text: "Each container image bundles its own runtime and libraries, isolating each tool's dependencies." },
      { id: 'B', text: "Containers compile Python code to native binaries, so the interpreter version no longer matters." },
      { id: 'C', text: "Containers run each tool in its own virtual machine with a separate kernel for each language." },
      { id: 'D', text: "Containers share the host's installed packages, so both tools use the latest system Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An image packages the application together with its language runtime and libraries, so each tool runs with exactly the Python version it needs, independent of the host and of each other, while still sharing the host kernel. Containers do not use the host's installed packages; that sharing is the problem being solved. Standard containers do not run separate kernels or VMs. Containers run the code as it is and do not compile Python.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/",
    tags: ["Containers","Dependency isolation"]
  },
  {
    id: "cncf-kcna-209",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Overriding a default baked into the image",
    scenario: "An image's Dockerfile sets ENV LOG_LEVEL=info. For one troubleshooting session, the operations team wants a single Deployment to run with LOG_LEVEL=debug, without rebuilding the image or changing it for other teams that use it.",
    question: "How should they set the new value?",
    options: [
      { id: 'A', text: "Add an ARG named LOG_LEVEL to the Deployment so that the build-time value is replaced during start-up." },
      { id: 'B', text: "Edit the variable inside a running container with kubectl exec so that every replica picks up debug." },
      { id: 'C', text: "Set LOG_LEVEL to debug under the container's env in the Deployment, which overrides the image's ENV." },
      { id: 'D', text: "Add a label LOG_LEVEL=debug to the pod template so the runtime exports it as an environment variable." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Environment variables defined in the container spec override those set by ENV in the image, so adding LOG_LEVEL=debug under env changes only this Deployment's pods, and editing the Deployment triggers a rollout with the new value. ARG exists only at build time and is not a Deployment field. Labels are metadata for selection and are not exported as environment variables (the downward API can expose them, but only with explicit configuration). A variable changed in one running process with exec affects neither other replicas nor restarted containers.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/",
    tags: ["Environment variables","Configuration"]
  },
  {
    id: "cncf-kcna-210",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Running a migration with the app image",
    scenario: "An image's Dockerfile has ENTRYPOINT [\"/app/server\"] and CMD [\"--port=8080\"]. The team wants a Job that uses the same image but runs /app/migrate --dry-run instead of the server.",
    question: "How should the Job container be configured?",
    options: [
      { id: 'A', text: "Set an environment variable ENTRYPOINT=/app/migrate so that the runtime swaps the start command." },
      { id: 'B', text: "Set command to [\"/app/migrate\"] and args to [\"--dry-run\"], replacing both the entrypoint and CMD." },
      { id: 'C', text: "Set workingDir to /app/migrate so the image's entrypoint resolves to the migration binary instead." },
      { id: 'D', text: "Set args to [\"/app/migrate\", \"--dry-run\"] and leave command unset so that the entrypoint is kept." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In a container spec, command replaces the image's ENTRYPOINT and args replaces its CMD, so command [\"/app/migrate\"] with args [\"--dry-run\"] runs exactly the migration. Setting only args keeps the ENTRYPOINT, so the server would start with /app/migrate --dry-run as its arguments. workingDir changes the current directory, not the executable. An ENTRYPOINT environment variable has no special meaning to the runtime.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/",
    tags: ["command","args","ENTRYPOINT"]
  },
  {
    id: "cncf-kcna-211",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Using an env var inside container args",
    scenario: "A container defines env REGION=eu-west-1 and needs to start with args [\"--region=REGION_VALUE\"], where REGION_VALUE is the value of that variable. The image runs its binary directly with no shell, and the team does not want to add one.",
    question: "How can the args reference the variable?",
    options: [
      { id: 'A', text: "Write --region=%REGION% in args, which the container runtime substitutes before it starts the process." },
      { id: 'B', text: "Write --region={{ .REGION }} in args, which the API server renders like a template when admitting it." },
      { id: 'C', text: "Write --region=${REGION} in args, because the kubelet runs every args entry through /bin/sh first." },
      { id: 'D', text: "Write --region=$(REGION) in args, which Kubernetes expands from the container's environment variables." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes expands $(VAR_NAME) references in command and args using the container's defined environment variables before starting the process, so no shell is needed; $$(VAR) escapes a literal. ${REGION} is shell syntax, and since the command runs without a shell, it would be passed literally. The runtime does not perform Windows-style %VAR% substitution. The API server does not render templates; Go template syntax belongs to tools such as Helm, not to pod specs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/define-interdependent-environment-variables/",
    tags: ["Environment variables","args"]
  },
  {
    id: "cncf-kcna-212",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Handing files from one container to another",
    scenario: "A pod runs a Git-sync container that pulls a static website into a directory every minute, and an nginx container that must serve those files. The content does not need to survive the pod being deleted.",
    question: "What is the simplest way for the two containers to share the files?",
    options: [
      { id: 'A', text: "Mount the same emptyDir volume into both containers, one writing and the other serving from it." },
      { id: 'B', text: "Mount a hostPath directory into both containers so each writes to the node's local filesystem." },
      { id: 'C', text: "Mount a ConfigMap into both containers and let the Git-sync container update it every minute." },
      { id: 'D', text: "Have the Git-sync container copy files into nginx's writable layer through the shared localhost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An emptyDir volume is created when the pod starts, can be mounted into every container in the pod and is deleted with the pod, which makes it the standard scratch space for passing files between containers. Containers cannot write into each other's writable layers, and localhost is a network path, not a filesystem. ConfigMaps are API objects for configuration, limited to 1 MiB, and are mounted read-only. hostPath ties the pod to node storage and is a security risk, for no benefit here.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["emptyDir","Multi-container","Volumes"]
  },
  {
    id: "cncf-kcna-213",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Fast scratch space that trips a memory limit",
    scenario: "To speed up image processing, a team mounts an emptyDir with medium: Memory at /scratch. The container has a 1Gi memory limit and its process uses about 600Mi. When jobs write around 500Mi of temporary files to /scratch, the container is OOMKilled.",
    question: "Why does this happen?",
    options: [
      { id: 'A', text: "Memory-backed emptyDir volumes are capped at 256Mi, and writing files past the cap kills the container." },
      { id: 'B', text: "The kubelet evicts pods that use memory-backed volumes as soon as node free memory drops below 1Gi." },
      { id: 'C', text: "Files written to a memory-backed emptyDir count toward the container's memory usage and limit." },
      { id: 'D', text: "A memory-backed emptyDir doubles the process's heap size, so the process itself exceeds the limit." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An emptyDir with medium Memory is a tmpfs, and the space its files occupy is charged to the container's memory cgroup, so 600Mi of process memory plus 500Mi of files exceeds the 1Gi limit and the kernel OOM-kills the container. Using a tmpfs does not change heap size. Memory-backed volumes do not trigger special eviction rules; node-pressure eviction reports Evicted, not OOMKilled. There is no fixed 256Mi cap; a sizeLimit can be set, and by default the volume can grow up to the memory available to the pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#emptydir",
    tags: ["emptyDir","Memory limits","OOMKilled"]
  },
  {
    id: "cncf-kcna-214",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A port missing from the container spec",
    scenario: "A container runs an HTTP API on port 8080 and a metrics endpoint on port 9102, but its pod spec only lists containerPort: 8080. A Service with targetPort 9102 nevertheless delivers scrapes to the metrics endpoint successfully, which surprises a reviewer.",
    question: "Why does traffic to port 9102 still work?",
    options: [
      { id: 'A', text: "The kubelet opens every port declared in the image with EXPOSE, which the Dockerfile must list for 9102." },
      { id: 'B', text: "Listing containerPort is mostly informational; any port the process listens on is reachable on the pod IP." },
      { id: 'C', text: "The Service controller adds 9102 to the pod's containerPort list automatically when it is referenced." },
      { id: 'D', text: "Traffic to undeclared ports is permitted only when the Service type is NodePort, which scrapes use here." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The containerPort list documents ports and allows them to be named, but it does not open or close anything: a process listening on 0.0.0.0 inside the pod is reachable on the pod IP at any port, which is why the Service reaches 9102. Only a NetworkPolicy restricts that traffic. Controllers never modify pod specs to add ports. EXPOSE in a Dockerfile is also documentation and is not used by the kubelet. Service type does not change whether a pod port is reachable.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#ports",
    tags: ["containerPort","Services","Networking"]
  },
  {
    id: "cncf-kcna-215",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "An extra container nobody declared",
    scenario: "While running crictl ps on a node, an engineer notices that each pod has one more container than its spec declares, running a tiny image named pause. It uses almost no CPU and never appears in kubectl describe pod output.",
    question: "What is the purpose of this container?",
    options: [
      { id: 'A', text: "It holds the pod's shared namespaces, such as networking, so app containers can join and restart." },
      { id: 'B', text: "It is the kubelet's health agent, which pauses the pod's containers when liveness probes are failing." },
      { id: 'C', text: "It is a placeholder the scheduler creates to reserve the pod's CPU and memory requests on the node." },
      { id: 'D', text: "It is a sidecar injected by the service mesh that pauses traffic whenever a container is restarting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The pause, or sandbox, container is started first for every pod; it holds the pod's network namespace and other shared namespaces, so the application containers join them and can crash and restart without the pod losing its IP address. Service mesh proxies such as Envoy appear as declared containers and do not use the pause image. Probes are run by the kubelet itself, not by a container. The scheduler reserves requests in its own accounting and creates nothing on the node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/",
    tags: ["Pause container","Pods","Namespaces"]
  },
  {
    id: "cncf-kcna-216",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Slow responses on an idle node",
    scenario: "A latency-sensitive API has a CPU limit of 200m. Its p99 latency spikes during bursts even though the node is at 20% CPU overall, and container metrics show high values for CPU throttled periods.",
    question: "What is causing the latency spikes?",
    options: [
      { id: 'A', text: "The container hits its 200m CPU limit, so cgroups throttle it even though the node has idle CPU." },
      { id: 'B', text: "The container is OOM-killed during bursts, and the restart delay shows up as higher tail latency." },
      { id: 'C', text: "The scheduler moves the pod to a busier node during bursts to rebalance CPU across the cluster." },
      { id: 'D', text: "The container's CPU request is too low, so the kubelet pauses it even though its limit is not reached." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CPU limit is enforced through the cgroup CPU quota: once the container uses its 200m worth of CPU time in a scheduling period, it is throttled until the next period, regardless of idle CPU elsewhere on the node, which shows up as throttled periods and tail latency. Raising or removing the limit, and setting an appropriate request, addresses it. Exceeding CPU never causes OOM kills; memory does. The scheduler does not move running pods. Requests affect scheduling and share weighting under contention, but a low request does not pause a container on an idle node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#how-pods-with-resource-limits-are-run",
    tags: ["CPU limits","Throttling","Performance"]
  },
  {
    id: "cncf-kcna-217",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A startup hook racing the application",
    scenario: "A team uses a postStart lifecycle hook to write a configuration file that the application reads when it starts. Occasionally the application fails because the file is not there yet, even though the hook itself always succeeds.",
    question: "Why does this intermittent failure happen?",
    options: [
      { id: 'A', text: "The postStart hook is not guaranteed to run before the container's entrypoint, so the two can race." },
      { id: 'B', text: "The postStart hook runs in a separate pod, so the file is written to another pod's filesystem at times." },
      { id: 'C', text: "The postStart hook runs after the container's liveness probe, so the application is started too early." },
      { id: 'D', text: "The postStart hook is only executed on container restarts, so the very first start never gets the file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes sends postStart immediately after the container is created, but there is no guarantee it executes before the container's ENTRYPOINT, so an application that depends on the hook's output can race it; an init container, which always completes before app containers start, is the reliable way to prepare files. Probes do not gate postStart. The hook runs on every container start, including the first. It executes inside the same container, not in a separate pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Lifecycle hooks","postStart","Init containers"]
  },
  {
    id: "cncf-kcna-218",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Letting a sidecar signal the main process",
    scenario: "A pod runs nginx and a small config-reloader sidecar. When the sidecar detects a configuration change, it must send SIGHUP to the nginx master process so it reloads, but from inside the sidecar it cannot see any nginx processes.",
    question: "Which pod setting makes this possible?",
    options: [
      { id: 'A', text: "Set privileged: true on the sidecar so that it can send signals to processes in any namespace." },
      { id: 'B', text: "Set hostNetwork: true so that the sidecar can reach nginx's process by using the node's IP address." },
      { id: 'C', text: "Set shareProcessNamespace: true so that containers in the pod can see each other's processes." },
      { id: 'D', text: "Set hostPID: true so that the sidecar can see every process on the node, including nginx." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With shareProcessNamespace true, all containers in the pod share one PID namespace, so the sidecar can see the nginx master process and signal it, subject to user permissions, without exposing anything outside the pod. hostPID shares the node's entire process table, which is a serious security exposure for a pod-local need. hostNetwork changes networking, and signals are not delivered over the network. A privileged container gains broad host access, far more than required, and still does not join the other container's PID namespace by default.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/",
    tags: ["shareProcessNamespace","Multi-container","Signals"]
  },
  {
    id: "cncf-kcna-219",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A Java service sized for its container",
    scenario: "A Java 21 service runs in a container with a 2Gi memory limit. Operators notice it uses only about 512Mi of heap and throws OutOfMemoryError under load, even though the container is far below its limit. No JVM memory flags are set.",
    question: "What is the most effective change?",
    options: [
      { id: 'A', text: "Raise the container's memory limit to 8Gi, which the JVM then uses fully as heap by default." },
      { id: 'B', text: "Set -XX:MaxRAMPercentage, for example to 75, so the JVM sizes its heap from the container limit." },
      { id: 'C', text: "Remove the memory limit so the JVM can size its heap from the node's physical memory instead." },
      { id: 'D', text: "Set a CPU limit equal to the memory limit so the JVM switches to its container-aware sizing mode." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern JVMs are container-aware and read the cgroup memory limit, but by default they cap the heap at 25% of it, which is 512Mi of a 2Gi limit; MaxRAMPercentage raises that share so the heap uses most of the container's memory while leaving room for non-heap usage. Raising the limit to 8Gi still gives only a 25% heap by default, and wastes node capacity. Removing the limit sizes the heap from node memory, which risks the pod being OOM-killed or evicted. CPU limits have nothing to do with heap sizing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["JVM","Memory limits","Containers"]
  },
  {
    id: "cncf-kcna-220",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Same key from a ConfigMap and from env",
    scenario: "A container loads every key from a shared ConfigMap with envFrom, and that ConfigMap contains TIMEOUT=30. The same container also lists TIMEOUT with the value 5 under env. The team wants to know which value the process will see.",
    question: "What will the process see?",
    options: [
      { id: 'A', text: "Either value at random, because the kubelet merges both sources without any defined order." },
      { id: 'B', text: "TIMEOUT=5, because a value defined under env takes precedence over one imported by envFrom." },
      { id: 'C', text: "Neither value; duplicate keys make the API server reject the pod when it is being created." },
      { id: 'D', text: "TIMEOUT=30, because envFrom is processed last and overwrites values that were set under env." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a key is defined both by envFrom and under env, the value from env takes precedence, so the process sees TIMEOUT=5; this lets a container import a shared ConfigMap and override individual keys. envFrom is not applied after env. The API server accepts the overlap; it is a documented behaviour, not a validation error. The merge order is defined, not random.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#configure-all-key-value-pairs-in-a-configmap-as-container-environment-variables",
    tags: ["envFrom","Environment variables","ConfigMaps"]
  },
  {
    id: "cncf-kcna-221",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Older log lines disappear from kubectl logs",
    scenario: "A chatty service writes several megabytes of logs per minute to stdout. Engineers notice that kubectl logs only ever shows the last few minutes of output, although the container has been running for days and never restarted.",
    question: "What is limiting how much history kubectl logs returns?",
    options: [
      { id: 'A', text: "The API server truncates every kubectl logs response at 1 MiB to protect etcd from large payloads." },
      { id: 'B', text: "The container runtime discards stdout whenever the application writes faster than the node disk." },
      { id: 'C', text: "kubectl logs only reads output produced since the most recent kubectl logs request for that pod." },
      { id: 'D', text: "The kubelet rotates container log files by size and keeps only a few, so older output is removed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kubelet rotates each container's log file when it reaches containerLogMaxSize (10Mi by default) and keeps at most containerLogMaxFiles (5 by default), so a chatty container quickly ages out older lines; long-term history needs a cluster-level logging stack that ships logs off the node. The API server streams logs from the kubelet and does not store them in etcd. The runtime does not drop output for writing quickly. kubectl logs has no read cursor; each request returns whatever the current files hold.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation",
    tags: ["Logging","Log rotation","kubelet"]
  },
  {
    id: "cncf-kcna-222",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "New arguments, same entrypoint",
    scenario: "An image is built with ENTRYPOINT [\"/usr/bin/worker\"] and CMD [\"--queue=default\"]. A Deployment sets args: [\"--queue=priority\", \"--concurrency=4\"] and does not set command.",
    question: "What process does the container run?",
    options: [
      { id: 'A', text: "--queue=priority --concurrency=4 as the executable, because setting args replaces the ENTRYPOINT too." },
      { id: 'B', text: "/usr/bin/worker --queue=priority --concurrency=4, keeping the ENTRYPOINT and replacing only the CMD." },
      { id: 'C', text: "/usr/bin/worker --queue=default --queue=priority --concurrency=4, appending args to the image's CMD." },
      { id: 'D', text: "/usr/bin/worker --queue=default, because args are ignored unless command is also set in the spec." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a container spec supplies args but not command, the image's ENTRYPOINT is kept and its CMD is replaced by the supplied args, so the process is /usr/bin/worker --queue=priority --concurrency=4. args are not appended to the image CMD; they replace it. Setting only args never touches the ENTRYPOINT; only command replaces it, and when command is set without args the image's CMD is ignored entirely. args take effect on their own and do not require command.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes",
    tags: ["args","ENTRYPOINT","CMD"]
  },
  {
    id: "cncf-kcna-223",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Every shutdown takes exactly 30 seconds",
    scenario: "A Node.js image uses ENTRYPOINT [\"/docker-entrypoint.sh\"], a bash script that exports a few variables and then runs node server.js as its last line. Every pod deletion takes the full 30-second grace period, and the application's SIGTERM handler that closes connections never logs anything.",
    question: "What is the most likely cause and fix?",
    options: [
      { id: 'A', text: "Node.js ignores SIGTERM by default; set terminationGracePeriodSeconds to 0 so the pod stops at once." },
      { id: 'B', text: "SIGTERM is delivered only to containers that declare STOPSIGNAL; add STOPSIGNAL SIGTERM to the image." },
      { id: 'C', text: "The script's shell is PID 1 and does not forward SIGTERM to node; start the app with exec node server.js." },
      { id: 'D', text: "The kubelet sends SIGKILL first to script entrypoints; add a preStop hook to send SIGTERM to server.js." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet asks the runtime to send SIGTERM to the container's PID 1, which here is the bash script; bash does not forward the signal to its child, so node never runs its handler and the container is SIGKILLed after the grace period. Ending the script with exec node server.js replaces the shell with the node process, which then receives SIGTERM directly (an init such as tini is another option). Setting the grace period to 0 kills the app without letting connections close. The kubelet sends SIGTERM first for every container. SIGTERM is already the default stop signal.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Signals","PID 1","Graceful shutdown"]
  },
  {
    id: "cncf-kcna-224",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A Dockerfile health check that never fires",
    scenario: "A team's Dockerfile defines HEALTHCHECK CMD curl -f http://localhost:8080/health, which worked well under Docker Compose. After moving to Kubernetes with containerd, a hung container keeps receiving traffic and is never restarted, and the pod spec defines no probes.",
    question: "Why is the hung container not detected?",
    options: [
      { id: 'A', text: "HEALTHCHECK only runs when the image is pulled with imagePullPolicy Always, which is not set here." },
      { id: 'B', text: "Kubernetes runs the HEALTHCHECK as a health probe but needs a Service before it acts on failures." },
      { id: 'C', text: "containerd runs the HEALTHCHECK but reports results only to the scheduler, which ignores running pods." },
      { id: 'D', text: "Kubernetes ignores the image's HEALTHCHECK; health must be defined as liveness and readiness probes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "HEALTHCHECK is Docker-specific image metadata; Kubernetes does not use it, so container health must be declared in the pod spec as liveness probes, which restart hung containers, and readiness probes, which remove them from Service endpoints. containerd does not execute the instruction, and the scheduler has no role after placement. imagePullPolicy only affects pulling and has nothing to do with health checks. The kubelet runs probes defined in the pod spec regardless of whether a Service exists.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["HEALTHCHECK","Probes","Dockerfile"]
  },
  {
    id: "cncf-kcna-225",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "An empty reason for every crash",
    scenario: "A batch container fails intermittently, and by the time engineers look, its pod has been replaced and logs are gone. kubectl describe pod on failed pods shows an exit code but an empty Message field. The team wants the last lines of output recorded in the container status automatically, without changing the application.",
    question: "Which container setting achieves this?",
    options: [
      { id: 'A', text: "Set imagePullPolicy Never so that the failed container and its logs remain on the node for review." },
      { id: 'B', text: "Set restartPolicy OnFailure so that the kubelet stores the last run's full log inside the status." },
      { id: 'C', text: "Set terminationMessagePath to /dev/stdout so that the kubelet copies all output into the message." },
      { id: 'D', text: "Set terminationMessagePolicy to FallbackToLogsOnError so the tail of the log becomes the message." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With terminationMessagePolicy FallbackToLogsOnError, if the container exits with an error and has written nothing to its termination message file, the kubelet uses the last part of its log output (up to 2048 bytes or 80 lines) as the termination message in the container status, where it survives in the API even after the log files are gone. Pointing terminationMessagePath at stdout is not how the file-based message works and could expose excessive data. restartPolicy only controls restarts. imagePullPolicy affects image pulls, not whether logs are retained.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/determine-reason-pod-failure/",
    tags: ["Termination message","Debugging"]
  }
];

export default CNCF_KCNA_QUESTIONS_9;
