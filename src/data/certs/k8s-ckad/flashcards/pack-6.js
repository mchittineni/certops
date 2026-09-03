export const K8S_CKAD_FLASHCARDS_6 = [
  {
    id: "k8s-ckad-fc-126",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl port-forward: Local Port Tunneling",
    hint: "Direct local connections to private pods.",
    back: "Run <strong>kubectl port-forward pod/&lt;pod&gt; 5432:5432</strong> to tunnel local laptop connections directly into private cluster services.",
    tags: ["Kubernetes", "kubectl port-forward", "Local Debugging"]
  },
  {
    id: "k8s-ckad-fc-127",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl exec: Interactive Container Shell",
    hint: "Executing commands inside live containers.",
    back: "Use <strong>kubectl exec -it &lt;pod&gt; -c &lt;container&gt; -- /bin/sh</strong> to open an interactive terminal inside a running container.",
    tags: ["Kubernetes", "kubectl exec", "Interactive Debugging"]
  },
  {
    id: "k8s-ckad-fc-128",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Node Architecture: kubelet Heartbeats",
    hint: "Reporting node health to the control plane.",
    back: "The <strong>kubelet</strong> sends periodic heartbeats to the API server; if it fails to report, the node transitions to <strong>NotReady</strong>.",
    tags: ["Kubernetes", "kubelet", "Node Health"]
  },
  {
    id: "k8s-ckad-fc-129",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Pod Lifecycle: readinessGates",
    hint: "Integrating external load balancer health checks.",
    back: "Define <strong>spec.readinessGates</strong> to require external controllers (e.g. cloud load balancers) to inject health conditions before pods become Ready.",
    tags: ["Kubernetes", "readinessGates", "External Health Checks"]
  },
  {
    id: "k8s-ckad-fc-130",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Liveness Probe Tuning: Avoiding Spurious Restarts",
    hint: "Accommodating GC pauses and CPU spikes.",
    back: "Increase <strong>timeoutSeconds</strong> and <strong>failureThreshold</strong> to prevent transient garbage collection delays from killing healthy containers.",
    tags: ["Kubernetes", "livenessProbe Tuning", "Stability"]
  },
  {
    id: "k8s-ckad-fc-131",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubelet: Automated Log Rotation",
    hint: "Preventing node disk exhaustion.",
    back: "The kubelet automatically rotates container stdout logs based on <strong>containerLogMaxSize</strong> and <strong>containerLogMaxFiles</strong> to protect node disk space.",
    tags: ["Kubernetes", "Log Rotation", "kubelet"]
  },
  {
    id: "k8s-ckad-fc-132",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl: JSONPath Output Formatting",
    hint: "Extracting specific metadata fields programmatically.",
    back: "Use <strong>-o jsonpath='{.items[*].status.podIP}'</strong> to extract pod IP addresses directly for scripting and automation.",
    tags: ["Kubernetes", "kubectl jsonpath", "Automation"]
  },
  {
    id: "k8s-ckad-fc-133",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "kubectl: custom-columns Formatting",
    hint: "Building custom tabular views in CLI.",
    back: "Use <strong>-o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName</strong> to render customized terminal tables.",
    tags: ["Kubernetes", "custom-columns", "CLI Formatting"]
  },
  {
    id: "k8s-ckad-fc-134",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Observability: OpenTelemetry Collector",
    hint: "Vendor-neutral telemetry processing and routing.",
    back: "The <strong>OpenTelemetry Collector</strong> receives, filters, and exports OTLP telemetry (metrics, traces, logs) to disparate monitoring backends.",
    tags: ["Observability", "OpenTelemetry", "OTel Collector"]
  },
  {
    id: "k8s-ckad-fc-135",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes: Pod Phase vs. Container State",
    hint: "High-level pod status vs detailed container states.",
    back: "<strong>Pod Phase</strong> provides high-level status (e.g. Running, Pending); <strong>Container State</strong> details exact container conditions (e.g. Waiting, Terminated with exit code).",
    tags: ["Kubernetes", "Pod Lifecycle", "Phases and States"]
  },
  {
    id: "k8s-ckad-fc-136",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Kubernetes Troubleshooting: DNS Diagnostics",
    hint: "Testing CoreDNS resolution via nslookup.",
    back: "Execute <strong>nslookup &lt;service-name&gt;</strong> inside the pod to verify whether CoreDNS is actively resolving cluster service names.",
    tags: ["Kubernetes", "CoreDNS", "DNS Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-137",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "Pod Termination: SIGTERM & SIGKILL Sequence",
    hint: "Graceful shutdown before forceful termination.",
    back: "Kubernetes sends <strong>SIGTERM</strong> first for graceful shutdown, granting <strong>terminationGracePeriodSeconds</strong> before issuing a forceful <strong>SIGKILL</strong>.",
    tags: ["Kubernetes", "Pod Termination", "SIGTERM and SIGKILL"]
  },
  {
    id: "k8s-ckad-fc-138",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    front: "startupProbe: Sizing Boot Windows",
    hint: "periodSeconds * failureThreshold calculation.",
    back: "Size startup probes using <strong>periodSeconds * failureThreshold</strong> (e.g. 10s * 20 = 200s) to grant generous boot time without slowing runtime failure detection.",
    tags: ["Kubernetes", "startupProbe", "Tuning"]
  },
  {
    id: "k8s-ckad-fc-139",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Volumes: subPath Mounting",
    hint: "Injecting single files without overwriting directories.",
    back: "Use <strong>subPath: &lt;filename&gt;</strong> to mount individual ConfigMap files without hiding pre-existing directory contents.",
    tags: ["Kubernetes", "ConfigMap", "subPath"]
  },
  {
    id: "k8s-ckad-fc-140",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMaps: immutable Property",
    hint: "Protecting static configurations and easing API load.",
    back: "Add <strong>immutable: true</strong> to ConfigMaps and Secrets to stop kubelet watch polling and block accidental configuration edits.",
    tags: ["Kubernetes", "ConfigMap", "immutable"]
  },
  {
    id: "k8s-ckad-fc-141",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ServiceAccounts: automountServiceAccountToken",
    hint: "Preventing automatic credential leakage.",
    back: "Set <strong>automountServiceAccountToken: false</strong> to stop Kubernetes from automatically injecting API tokens into pods that do not query the API.",
    tags: ["Kubernetes", "ServiceAccount", "Security Hardening"]
  },
  {
    id: "k8s-ckad-fc-142",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: Role vs. ClusterRole",
    hint: "Namespaced vs cluster-wide permissions.",
    back: "Use a <strong>Role</strong> for permissions confined to a single namespace, and a <strong>ClusterRole</strong> for cluster-scoped or non-namespaced resources.",
    tags: ["Kubernetes", "RBAC", "Role vs ClusterRole"]
  },
  {
    id: "k8s-ckad-fc-143",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: RoleBinding with ClusterRole",
    hint: "Reusing cluster-wide roles within single namespaces.",
    back: "Bind a <strong>ClusterRole via a namespaced RoleBinding</strong> to grant standard role permissions strictly within a target namespace.",
    tags: ["Kubernetes", "RBAC", "RoleBinding"]
  },
  {
    id: "k8s-ckad-fc-144",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: apiGroups, resources, and verbs",
    hint: "Declaring precise API authorization rules.",
    back: "Declare <strong>apiGroups: ['apps']</strong>, <strong>resources: ['deployments']</strong>, and standard verbs (<code>get</code>, <code>create</code>, etc.) for granular workload authorization.",
    tags: ["Kubernetes", "RBAC", "Verbs and Resources"]
  },
  {
    id: "k8s-ckad-fc-145",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC Diagnostics: kubectl auth can-i",
    hint: "Testing permissions with impersonation.",
    back: "Run <strong>kubectl auth can-i &lt;verb&gt; &lt;resource&gt; --as=...</strong> to verify API permissions via user or service account impersonation.",
    tags: ["Kubernetes", "RBAC", "kubectl auth can-i"]
  },
  {
    id: "k8s-ckad-fc-146",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: ResourceQuota",
    hint: "Aggregate compute and object limits per namespace.",
    back: "Deploy a <strong>ResourceQuota</strong> to set hard ceilings on total CPU, memory, and object counts consumed across a namespace.",
    tags: ["Kubernetes", "ResourceQuota", "Namespace Governance"]
  },
  {
    id: "k8s-ckad-fc-147",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: LimitRange",
    hint: "Auto-injecting default requests and limits.",
    back: "Use a <strong>LimitRange</strong> to automatically inject default CPU and memory requests/limits into containers that omit them.",
    tags: ["Kubernetes", "LimitRange", "Default Resources"]
  },
  {
    id: "k8s-ckad-fc-148",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PersistentVolumes: AccessModes",
    hint: "RWO vs ROX vs RWX vs RWOP.",
    back: "<strong>ReadWriteMany (RWX)</strong> allows multiple worker nodes to mount storage for read-write concurrently; standard block disks (EBS/GCP PD) support only <strong>ReadWriteOnce (RWO)</strong>.",
    tags: ["Kubernetes", "Storage", "AccessModes"]
  },
  {
    id: "k8s-ckad-fc-149",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PersistentVolumes: ReadWriteOncePod (RWOP)",
    hint: "Strict single-pod volume exclusivity.",
    back: "<strong>ReadWriteOncePod (RWOP)</strong> guarantees that only a single pod in the entire cluster can mount the volume, preventing multi-pod corruption on the same node.",
    tags: ["Kubernetes", "Storage", "ReadWriteOncePod"]
  },
  {
    id: "k8s-ckad-fc-150",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PersistentVolumes: reclaimPolicy Retain",
    hint: "Preserving storage assets after claim deletion.",
    back: "Set <strong>reclaimPolicy: Retain</strong> to protect underlying storage disks from deletion when PersistentVolumeClaims are deleted.",
    tags: ["Kubernetes", "Storage", "reclaimPolicy"]
  }
];

export default K8S_CKAD_FLASHCARDS_6;
