export const CNCF_KCNA_FLASHCARDS_9 = [
  {
    id: "cncf-kcna-fc-201",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Where should a containerised application write its logs?",
    hint: "Two standard streams.",
    back: "To <strong>stdout and stderr</strong>. The runtime writes them to files on the node, <code>kubectl logs</code> reads them through the kubelet, and node-level agents (Fluent Bit, Fluentd, OpenTelemetry Collector) ship them to a backend. Writing to files inside the container hides logs from all of these.",
    tags: ["Logging"]
  },
  {
    id: "cncf-kcna-fc-202",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why prefer one main process per container?",
    hint: "Visibility and scaling.",
    back: "Kubernetes can then see each process's <strong>exit status and health</strong>, restart it independently, and <strong>scale</strong> each component on its own. Process supervisors such as supervisord hide crashes from the kubelet and couple scaling. Use multiple containers in a pod only for tightly coupled helpers (sidecars).",
    tags: ["Container design"]
  },
  {
    id: "cncf-kcna-fc-203",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does \"containers are disposable\" mean in practice?",
    hint: "Cattle, not pets.",
    back: "Any container may be killed and replaced at any time (rollouts, node failure, scaling). Keep <strong>no durable state</strong> in the container: sessions, uploads and data go to backing services or volumes. Start fast, shut down gracefully on SIGTERM, and get configuration from the environment.",
    tags: ["Stateless","Cloud native design"]
  },
  {
    id: "cncf-kcna-fc-204",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What survives a container restart: the writable layer, an emptyDir, a PVC?",
    hint: "Scope: container, pod, or beyond.",
    back: "<strong>Writable layer</strong>: lost when the container is recreated. <strong>emptyDir</strong>: survives container restarts, deleted with the pod. <strong>PersistentVolumeClaim</strong>: survives container restarts and pod deletion; lifetime follows the PV and its reclaim policy.",
    tags: ["Volumes","Ephemeral filesystem"]
  },
  {
    id: "cncf-kcna-fc-205",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do containers in the same pod share?",
    hint: "Network yes; process table only if asked.",
    back: "They share the pod's <strong>network namespace</strong> (one IP, one port space, localhost between them), can mount the same <strong>volumes</strong>, and share IPC. Each keeps its own filesystem from its own image. The <strong>PID namespace</strong> is shared only with <code>shareProcessNamespace: true</code>.",
    tags: ["Pods","Multi-container"]
  },
  {
    id: "cncf-kcna-fc-206",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which CNCF graduated projects are container runtimes?",
    hint: "Two CRI implementations.",
    back: "<strong>containerd</strong> and <strong>CRI-O</strong>, both graduated and both implementing the CRI. Low-level OCI runtimes such as <strong>runc</strong> come from the OCI, not the CNCF. Envoy (proxy), Prometheus (metrics) and Jaeger (tracing) are graduated projects but not runtimes.",
    tags: ["CNCF","Container runtime"]
  },
  {
    id: "cncf-kcna-fc-207",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does an image get from a developer's build to a cluster node?",
    hint: "Build, tag, push, pull.",
    back: "<strong>Build</strong> locally or in CI, <strong>tag</strong> it with the registry path (<code>registry.example.com/team/app:1.4</code>), <strong>push</strong> to the registry, reference that name in the manifest; each node's runtime <strong>pulls</strong> it. A laptop's local image store is invisible to cluster nodes (local tools like kind need an explicit image load).",
    tags: ["Registries"]
  },
  {
    id: "cncf-kcna-fc-208",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Name three practical benefits of packaging apps as containers.",
    hint: "Dependencies, portability, density.",
    back: "<strong>Dependency isolation</strong>: each image carries its own runtime and libraries. <strong>Portability</strong>: the same image runs on a laptop, CI and any conformant cluster. <strong>Density and speed</strong>: containers share the host kernel, start in seconds and pack more workloads per machine than VMs.",
    tags: ["Containers"]
  },
  {
    id: "cncf-kcna-fc-209",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Image ENV vs container env in the pod spec: which wins?",
    hint: "The most specific setting.",
    back: "Variables set under the container's <code>env</code> (or <code>envFrom</code>) in the pod spec <strong>override</strong> values set by <code>ENV</code> in the image. That lets one image run with different settings per Deployment or environment without a rebuild.",
    tags: ["Environment variables"]
  },
  {
    id: "cncf-kcna-fc-210",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Dockerfile ENTRYPOINT/CMD vs Kubernetes command/args",
    hint: "Which replaces which?",
    back: "<code>command</code> replaces <strong>ENTRYPOINT</strong>; <code>args</code> replaces <strong>CMD</strong>. Only args set: image ENTRYPOINT runs with your args. Only command set: image CMD is ignored. Both set: image values are ignored entirely.",
    tags: ["command","args"]
  },
  {
    id: "cncf-kcna-fc-211",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you reference an environment variable inside command or args without a shell?",
    hint: "Parentheses, not braces.",
    back: "Use <code>$(VAR_NAME)</code>: Kubernetes expands it from the container's defined env before starting the process. <code>$$(VAR)</code> escapes it. Shell syntax like <code>${VAR}</code> only works if the command itself runs a shell (e.g. <code>sh -c</code>).",
    tags: ["Environment variables","args"]
  },
  {
    id: "cncf-kcna-fc-212",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When is emptyDir the right volume?",
    hint: "Pod-lifetime scratch space.",
    back: "For <strong>temporary data shared between containers</strong> in a pod or scratch space that may be lost: caches, file hand-off from a git-sync sidecar, sort buffers. It is created empty at pod start, survives container restarts and is deleted with the pod. <code>sizeLimit</code> caps it; <code>medium: Memory</code> makes it a tmpfs.",
    tags: ["emptyDir"]
  },
  {
    id: "cncf-kcna-fc-213",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the catch with emptyDir medium: Memory?",
    hint: "Where does the RAM come from?",
    back: "It is a <strong>tmpfs</strong>: fast, but files written to it are charged to the <strong>container's memory usage</strong>, so they count against the memory limit and can trigger an OOM kill. Contents are lost on node reboot. Set a <code>sizeLimit</code> and size memory limits to include it.",
    tags: ["emptyDir","Memory limits"]
  },
  {
    id: "cncf-kcna-fc-214",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Does listing containerPort open or restrict a port?",
    hint: "Documentation, mostly.",
    back: "<strong>Neither.</strong> <code>ports[].containerPort</code> is primarily informational (and lets you name ports for Services and probes). Any port the process listens on is reachable on the pod IP. To restrict traffic use a <strong>NetworkPolicy</strong>. Likewise, Dockerfile <code>EXPOSE</code> is documentation only.",
    tags: ["containerPort"]
  },
  {
    id: "cncf-kcna-fc-215",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the pause (sandbox) container?",
    hint: "It holds the namespaces.",
    back: "A tiny container the runtime starts first for every pod. It owns the pod's <strong>network namespace</strong> (and other shared namespaces), so app containers join it and can restart without the pod losing its IP. It is visible with <code>crictl</code> but not in the pod spec.",
    tags: ["Pause container"]
  },
  {
    id: "cncf-kcna-fc-216",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why can a pod be CPU-throttled on an idle node?",
    hint: "Quota per period.",
    back: "A CPU <strong>limit</strong> becomes a cgroup quota: once the container uses its allowance in a scheduling period (100 ms by default), it is <strong>throttled</strong> until the next one, even if the node is idle. Symptom: tail-latency spikes and high throttled-period metrics. Many teams set CPU requests and omit or loosen CPU limits for latency-sensitive services.",
    tags: ["CPU limits","Throttling"]
  },
  {
    id: "cncf-kcna-fc-217",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "postStart hook vs init container: which runs before the application?",
    hint: "Only one is guaranteed.",
    back: "An <strong>init container</strong> always completes before app containers start. A <strong>postStart</strong> hook fires right after the container is created, with <strong>no guarantee</strong> it runs before the ENTRYPOINT; the container is not marked Running until it finishes. Use init containers for preparation work the app depends on.",
    tags: ["Lifecycle hooks","Init containers"]
  },
  {
    id: "cncf-kcna-fc-218",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does shareProcessNamespace: true change for a pod?",
    hint: "One process table.",
    back: "All containers share a single <strong>PID namespace</strong>: they see and can signal each other's processes (e.g. a sidecar sending SIGHUP to nginx), and the pause container becomes PID 1. Files of other containers are visible through <code>/proc/PID/root</code>. It stays scoped to the pod, unlike <code>hostPID</code>.",
    tags: ["shareProcessNamespace"]
  },
  {
    id: "cncf-kcna-fc-219",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How should you size a JVM heap inside a container?",
    hint: "Container-aware by default, conservative by default.",
    back: "Modern JVMs read the cgroup memory limit but default the max heap to <strong>25%</strong> of it. Set <code>-XX:MaxRAMPercentage</code> (often 60-75) so the heap scales with the limit while leaving room for metaspace, threads and native memory. Avoid hard-coded <code>-Xmx</code> values that drift from the limit.",
    tags: ["JVM","Memory limits"]
  },
  {
    id: "cncf-kcna-fc-220",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "env vs envFrom: which wins when both define the same key?",
    hint: "Explicit beats bulk.",
    back: "A value defined under <code>env</code> <strong>takes precedence</strong> over the same key imported with <code>envFrom</code>. Among multiple envFrom sources, the last one listed wins for duplicates. Keys that are not valid variable names are skipped (and reported in an event).",
    tags: ["envFrom","Environment variables"]
  },
  {
    id: "cncf-kcna-fc-221",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How long does kubectl logs keep a container's output?",
    hint: "Size-based rotation on the node.",
    back: "Only what is in the node's current log files. The kubelet rotates each container log at <code>containerLogMaxSize</code> (default <strong>10Mi</strong>) and keeps <code>containerLogMaxFiles</code> (default <strong>5</strong>). Logs are also removed when the pod is deleted. Durable history needs a cluster-level logging pipeline.",
    tags: ["Logging","Log rotation"]
  },
  {
    id: "cncf-kcna-fc-222",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "An image has ENTRYPOINT and CMD. The pod sets only args. What runs?",
    hint: "Which image field survives?",
    back: "The image <strong>ENTRYPOINT</strong> runs with the pod's <strong>args</strong> in place of CMD. The args are not appended to CMD; they replace it. Setting only <code>command</code> would do the opposite: replace ENTRYPOINT and drop CMD.",
    tags: ["args","ENTRYPOINT"]
  },
  {
    id: "cncf-kcna-fc-223",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why does a container sometimes ignore SIGTERM and wait for the full grace period?",
    hint: "Who is PID 1?",
    back: "The kubelet signals the container's <strong>PID 1</strong>. If that is a shell or wrapper script, it usually does not forward SIGTERM to the app, so the app never shuts down cleanly and is SIGKILLed after <code>terminationGracePeriodSeconds</code> (default 30). Fix: <code>exec</code> the app from the script, use exec-form ENTRYPOINT, or add a minimal init such as tini.",
    tags: ["Signals","PID 1"]
  },
  {
    id: "cncf-kcna-fc-224",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Does Kubernetes use a Dockerfile HEALTHCHECK?",
    hint: "Image metadata versus pod spec.",
    back: "<strong>No.</strong> HEALTHCHECK is Docker-specific metadata that the kubelet ignores. Define <strong>liveness</strong> (restart when hung), <strong>readiness</strong> (remove from Service endpoints) and <strong>startup</strong> (protect slow starts) probes in the pod spec instead.",
    tags: ["HEALTHCHECK","Probes"]
  },
  {
    id: "cncf-kcna-fc-225",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is a container termination message, and what does FallbackToLogsOnError add?",
    hint: "A file, and a fallback.",
    back: "On exit, the kubelet reads <code>terminationMessagePath</code> (default <code>/dev/termination-log</code>) into the container status <strong>message</strong>, which survives in the API after logs are gone. With <code>terminationMessagePolicy: FallbackToLogsOnError</code>, if the file is empty and the container failed, the <strong>tail of the log</strong> (up to 2048 bytes or 80 lines) is used instead.",
    tags: ["Termination message"]
  }
];

export default CNCF_KCNA_FLASHCARDS_9;
