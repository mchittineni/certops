export const K8S_CKAD_FLASHCARDS_5 = [
  {
    id: "k8s-ckad-fc-101",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes: livenessProbe",
    hint: "Restarting deadlocked containers.",
    back: "The <strong>livenessProbe</strong> monitors application responsiveness; if it fails consecutively, the kubelet restarts the container to recover from deadlocks.",
    tags: ["Kubernetes", "livenessProbe", "Observability"]
  },
  {
    id: "k8s-ckad-fc-102",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes: readinessProbe",
    hint: "Isolating pods until traffic-ready.",
    back: "The <strong>readinessProbe</strong> gates traffic: if it fails, the pod is removed from Service Endpoints so callers never encounter startup errors.",
    tags: ["Kubernetes", "readinessProbe", "Traffic Gating"]
  },
  {
    id: "k8s-ckad-fc-103",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes: startupProbe",
    hint: "Protecting slow-starting legacy apps from crash loops.",
    back: "A <strong>startupProbe</strong> suppresses liveness and readiness checks until the container finishes booting, preventing premature liveness probe kills.",
    tags: ["Kubernetes", "startupProbe", "Slow Startup"]
  },
  {
    id: "k8s-ckad-fc-104",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Probes: httpGet Action",
    hint: "Native HTTP endpoint health checking.",
    back: "Use <strong>httpGet: { path: /healthz, port: 8080 }</strong> to probe HTTP status codes directly via the kubelet without container shell dependencies.",
    tags: ["Kubernetes", "httpGet", "Probes"]
  },
  {
    id: "k8s-ckad-fc-105",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Probes: tcpSocket Action",
    hint: "Validating TCP port connectivity.",
    back: "Configure <strong>tcpSocket: { port: 3306 }</strong> to verify that backend services or databases are accepting TCP socket connections.",
    tags: ["Kubernetes", "tcpSocket", "Probes"]
  },
  {
    id: "k8s-ckad-fc-106",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Probes: exec Action",
    hint: "Checking container health via process commands.",
    back: "Use <strong>exec: { command: ['cat', '/tmp/healthy'] }</strong> to evaluate health by executing in-container commands; return code 0 indicates healthy status.",
    tags: ["Kubernetes", "exec Probe", "Diagnostic Commands"]
  },
  {
    id: "k8s-ckad-fc-107",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Probes: Native gRPC Probing",
    hint: "Standard gRPC health check integration.",
    back: "Declare <strong>grpc: { port: 50051 }</strong> in probe definitions to natively check gRPC service health via the official protocol.",
    tags: ["Kubernetes", "gRPC Probes", "Microservices"]
  },
  {
    id: "k8s-ckad-fc-108",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Probe Parameters: Timing Options",
    hint: "initialDelay, period, and timeout.",
    back: "Configure <strong>initialDelaySeconds</strong> (boot delay), <strong>periodSeconds</strong> (frequency), and <strong>timeoutSeconds</strong> (call deadline) to tune health checks.",
    tags: ["Kubernetes", "Probe Parameters", "Timing Tuning"]
  },
  {
    id: "k8s-ckad-fc-109",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Probe Parameters: Thresholds",
    hint: "Consecutive success and failure counts.",
    back: "Set <strong>failureThreshold: 3</strong> to prevent transient blips from causing restarts, and <strong>successThreshold: 1</strong> for fast recovery.",
    tags: ["Kubernetes", "Probe Thresholds", "Stability"]
  },
  {
    id: "k8s-ckad-fc-110",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl logs: --previous Flag",
    hint: "Reading crash logs from restarted containers.",
    back: "Add the <strong>--previous</strong> flag to <code>kubectl logs</code> to read error logs from the prior crashed container instance.",
    tags: ["Kubernetes", "kubectl logs", "Crash Analysis"]
  },
  {
    id: "k8s-ckad-fc-111",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl logs: -c Container Flag",
    hint: "Selecting container logs in multi-container pods.",
    back: "Use <strong>kubectl logs &lt;pod&gt; -c &lt;container&gt;</strong> to isolate log streams from a specific container in a multi-container pod.",
    tags: ["Kubernetes", "kubectl logs", "Multi-Container"]
  },
  {
    id: "k8s-ckad-fc-112",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl logs: -f and --tail",
    hint: "Streaming live logs with bounded history.",
    back: "Combine <strong>kubectl logs -f --tail=50</strong> to follow live logs starting from the last 50 lines.",
    tags: ["Kubernetes", "kubectl logs", "Streaming Logs"]
  },
  {
    id: "k8s-ckad-fc-113",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl logs: --since Duration",
    hint: "Filtering logs across pods by time window.",
    back: "Use <strong>kubectl logs -l app=&lt;name&gt; --since=20m</strong> to view logs generated during the last 20 minutes across matching pods.",
    tags: ["Kubernetes", "kubectl logs", "Time-Based Filtering"]
  },
  {
    id: "k8s-ckad-fc-114",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Diagnostics: kubectl get events",
    hint: "Uncovering scheduling and controller events.",
    back: "Run <strong>kubectl get events --sort-by='.metadata.creationTimestamp'</strong> to investigate scheduling bottlenecks, node capacity issues, and volume mount failures.",
    tags: ["Kubernetes", "Events", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-115",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes: Metrics Server",
    hint: "Powering kubectl top and HPA.",
    back: "<strong>Metrics Server</strong> aggregates node and pod CPU/memory utilization from kubelets to serve the <code>metrics.k8s.io</code> API used by <code>kubectl top</code> and HPA.",
    tags: ["Kubernetes", "Metrics Server", "Resource Telemetry"]
  },
  {
    id: "k8s-ckad-fc-116",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl top pods: --sort-by=memory",
    hint: "Identifying high-utilization pods.",
    back: "Use <strong>kubectl top pods --sort-by=memory</strong> to identify and rank pods consuming the most RAM in real time.",
    tags: ["Kubernetes", "kubectl top", "Memory Diagnostics"]
  },
  {
    id: "k8s-ckad-fc-117",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Pod Diagnostics: State vs. Last State",
    hint: "Analyzing container crash history.",
    back: "<code>Last State: Terminated Reason: OOMKilled</code> in <strong>kubectl describe pod</strong> proves the container was restarted after breaching memory limits.",
    tags: ["Kubernetes", "kubectl describe", "OOMKilled"]
  },
  {
    id: "k8s-ckad-fc-118",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl debug: Ephemeral Container with --target",
    hint: "Attaching debug tools to live container processes.",
    back: "Run <strong>kubectl debug -it &lt;pod&gt; --image=netshoot --target=&lt;container&gt;</strong> to attach an ephemeral debug container sharing the target container's PID namespace.",
    tags: ["Kubernetes", "kubectl debug", "Ephemeral Containers"]
  },
  {
    id: "k8s-ckad-fc-119",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl debug node: Host Troubleshooting",
    hint: "SSH-less node administration via debug pods.",
    back: "Use <strong>kubectl debug node/&lt;node&gt; -it --image=busybox</strong> to launch an interactive container with host root access to troubleshoot NotReady nodes.",
    tags: ["Kubernetes", "kubectl debug node", "Cluster Administration"]
  },
  {
    id: "k8s-ckad-fc-120",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl debug: --copy-to Cloning",
    hint: "Cloning failing pods with overridden commands.",
    back: "Use <strong>kubectl debug &lt;pod&gt; --copy-to=&lt;clone&gt; -- &lt;cmd&gt;</strong> to clone a crashing pod with an overridden command (e.g. sleep) for offline debugging.",
    tags: ["Kubernetes", "kubectl debug", "Pod Cloning"]
  },
  {
    id: "k8s-ckad-fc-121",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Prometheus: /metrics Exposition Format",
    hint: "Standard plain-text pull metrics.",
    back: "Prometheus scrapes metrics via HTTP GET on <strong>/metrics</strong> expecting plain-text lines with metric names, label key-values, and numeric values.",
    tags: ["Observability", "Prometheus", "Metrics"]
  },
  {
    id: "k8s-ckad-fc-122",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Logging: stdout and stderr",
    hint: "Writing logs for kubelet capture.",
    back: "Kubernetes captures only <strong>stdout and stderr</strong>; applications writing to disk files must redirect logs or use sidecar forwarders for <code>kubectl logs</code> visibility.",
    tags: ["Kubernetes", "Logging Architecture", "stdout"]
  },
  {
    id: "k8s-ckad-fc-123",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Troubleshooting: CrashLoopBackOff",
    hint: "Handling repetitive process crashes.",
    back: "<strong>CrashLoopBackOff</strong> occurs when a container exits repeatedly; investigate with <code>kubectl logs --previous</code> and <code>kubectl describe pod</code> to find the crash cause.",
    tags: ["Kubernetes", "CrashLoopBackOff", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-124",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Troubleshooting: ImagePullBackOff",
    hint: "Image tag typos and authentication failures.",
    back: "<strong>ImagePullBackOff</strong> is typically caused by a typo in the image name/tag or missing <strong>imagePullSecrets</strong> for private registries.",
    tags: ["Kubernetes", "ImagePullBackOff", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-125",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Readiness Probes: Endpoint Removal",
    hint: "Temporarily removing overloaded pods from traffic.",
    back: "When a <strong>readinessProbe fails</strong>, the endpoints controller removes the pod from the Service Endpoints without restarting the container.",
    tags: ["Kubernetes", "readinessProbe", "Endpoints"]
  }
];

export default K8S_CKAD_FLASHCARDS_5;
