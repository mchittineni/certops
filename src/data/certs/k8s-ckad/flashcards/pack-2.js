export const K8S_CKAD_FLASHCARDS_2 = [
  {
    id: "k8s-ckad-fc-26",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: Requests vs. Limits",
    hint: "Scheduling guarantees vs cgroup ceilings.",
    back: "<strong>Requests</strong> dictate node scheduling placement; <strong>Limits</strong> enforce hard runtime cgroup ceilings (CPU throttling / OOMKilled).",
    tags: ["Kubernetes", "Resources", "Requests and Limits"]
  },
  {
    id: "k8s-ckad-fc-27",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Troubleshooting: Exit Code 137 (OOMKilled)",
    hint: "Memory limit breach termination.",
    back: "<strong>Exit Code 137 (OOMKilled)</strong> indicates the container process exceeded its memory limit and was terminated by the kernel with SIGKILL (128 + 9).",
    tags: ["Kubernetes", "OOMKilled", "Exit Codes"]
  },
  {
    id: "k8s-ckad-fc-28",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: Compressible vs. Non-Compressible Resources",
    hint: "CPU throttling vs memory termination.",
    back: "CPU is compressible (exceeding limits causes <strong>throttling</strong>); memory is non-compressible (exceeding limits causes <strong>OOMKilled</strong> restarts).",
    tags: ["Kubernetes", "CPU Throttling", "Compressible Resources"]
  },
  {
    id: "k8s-ckad-fc-29",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes QoS Classes: Guaranteed vs. BestEffort",
    hint: "Eviction priority during node resource pressure.",
    back: "<strong>Guaranteed pods</strong> (requests == limits) have lowest eviction risk; <strong>BestEffort pods</strong> (no requests/limits) are evicted first during memory pressure.",
    tags: ["Kubernetes", "QoS Classes", "Pod Eviction"]
  },
  {
    id: "k8s-ckad-fc-30",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: Downward API",
    hint: "Injecting pod metadata into containers.",
    back: "Use the <strong>Downward API</strong> (<code>fieldRef.fieldPath</code>) to expose pod names, namespaces, and node IPs as environment variables to containers.",
    tags: ["Kubernetes", "Downward API", "Metadata"]
  },
  {
    id: "k8s-ckad-fc-31",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Downward API: resourceFieldRef",
    hint: "Exposing container resource limits to code.",
    back: "Use <strong>resourceFieldRef</strong> to inject container memory/CPU limits into environment variables for JVM heap tuning.",
    tags: ["Kubernetes", "Downward API", "Resource Limits"]
  },
  {
    id: "k8s-ckad-fc-32",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Docker Buildx: Multi-Architecture Images",
    hint: "Cross-compiling container images for amd64 and arm64.",
    back: "Use <strong>docker buildx build --platform linux/amd64,linux/arm64</strong> to assemble multi-platform images compatible with heterogeneous Kubernetes worker nodes.",
    tags: ["Docker", "buildx", "Multi-Platform"]
  },
  {
    id: "k8s-ckad-fc-33",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Dockerfile: Layer Caching Optimization",
    hint: "Ordering instructions to maximize build cache hits.",
    back: "Copy <strong>package.json</strong> and run package installs before copying the rest of application source code to maximize Docker layer cache reuse.",
    tags: ["Docker", "Layer Caching", "Build Optimization"]
  },
  {
    id: "k8s-ckad-fc-34",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "CI/CD Container Security: Trivy Scanning",
    hint: "Automated vulnerability scanning.",
    back: "Integrate <strong>Trivy</strong> into CI/CD pipelines to scan container image layers for critical CVEs before pushing to registries.",
    tags: ["Security", "Trivy", "Vulnerability Scanning"]
  },
  {
    id: "k8s-ckad-fc-35",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: Allowed restartPolicies",
    hint: "OnFailure or Never only.",
    back: "Kubernetes Jobs <strong>prohibit restartPolicy: Always</strong>; batch specs strictly require either <strong>OnFailure</strong> or <strong>Never</strong>.",
    tags: ["Kubernetes", "Jobs", "restartPolicy"]
  },
  {
    id: "k8s-ckad-fc-36",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "initContainers: Failure Execution Flow",
    hint: "Blocking main container startup on failure.",
    back: "If an <strong>initContainer fails</strong>, Kubernetes restarts it according to the restartPolicy; main application containers <strong>never start until all init containers succeed</strong>.",
    tags: ["Kubernetes", "initContainers", "Failure Handling"]
  },
  {
    id: "k8s-ckad-fc-37",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Networking: Shared Network Namespace",
    hint: "Inter-container communication via localhost.",
    back: "Containers in the same pod share the <strong>same network namespace</strong> and IP address, communicating directly over <strong>localhost (127.0.0.1)</strong>.",
    tags: ["Kubernetes", "Pod Networking", "Localhost"]
  },
  {
    id: "k8s-ckad-fc-38",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Pod Networking: Port Space Collisions",
    hint: "No duplicate ports within a pod.",
    back: "Containers in the same pod share one IP; attempting to bind multiple containers to the <strong>same port causes a collision</strong> (address already in use).",
    tags: ["Kubernetes", "Pod Networking", "Port Binding"]
  },
  {
    id: "k8s-ckad-fc-39",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: runAsGroup",
    hint: "Setting primary Linux group IDs.",
    back: "Use <strong>runAsGroup: &lt;gid&gt;</strong> to set the primary group ID for container processes, ensuring consistent file group ownership.",
    tags: ["Kubernetes", "SecurityContext", "runAsGroup"]
  },
  {
    id: "k8s-ckad-fc-40",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: fsGroup",
    hint: "Granting shared volume permissions across containers.",
    back: "Set <strong>fsGroup: &lt;gid&gt;</strong> on the Pod securityContext to automatically assign group ownership on mounted volumes, allowing multiple containers to share files.",
    tags: ["Kubernetes", "fsGroup", "Volume Permissions"]
  },
  {
    id: "k8s-ckad-fc-41",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Container Configuration: envFrom",
    hint: "Bulk environment variable injection.",
    back: "Use <strong>envFrom: [ configMapRef: { name: ... } ]</strong> to inject all key-value pairs from a ConfigMap into container environment variables in one line.",
    tags: ["Kubernetes", "envFrom", "ConfigMap"]
  },
  {
    id: "k8s-ckad-fc-42",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes vs Docker: command and args",
    hint: "Overriding ENTRYPOINT and CMD.",
    back: "In Kubernetes pod specs, <strong>command</strong> overrides the Docker <strong>ENTRYPOINT</strong>, and <strong>args</strong> overrides the Docker <strong>CMD</strong>.",
    tags: ["Kubernetes", "Command and Args", "ENTRYPOINT"]
  },
  {
    id: "k8s-ckad-fc-43",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: imagePullSecrets",
    hint: "Authenticating to private container registries.",
    back: "Attach <strong>imagePullSecrets</strong> to the Pod spec or ServiceAccount to authenticate against private registries like Docker Hub or GitHub Packages.",
    tags: ["Kubernetes", "imagePullSecrets", "Private Registry"]
  },
  {
    id: "k8s-ckad-fc-44",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: imagePullPolicy",
    hint: "Always vs IfNotPresent vs Never.",
    back: "Set <strong>imagePullPolicy: Always</strong> to force the kubelet to re-validate image digests against the registry on every container startup.",
    tags: ["Kubernetes", "imagePullPolicy", "Container Images"]
  },
  {
    id: "k8s-ckad-fc-45",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Troubleshooting: kubectl describe pod",
    hint: "Inspecting termination status and exit codes.",
    back: "Run <strong>kubectl describe pod</strong> to inspect the <code>Last State</code> section showing exact container exit codes, termination signals, and reasons.",
    tags: ["Kubernetes", "kubectl describe", "Troubleshooting"]
  },
  {
    id: "k8s-ckad-fc-46",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes Jobs: Suspend & Resume",
    hint: "Temporarily pausing batch execution.",
    back: "Set <strong>spec.suspend: true</strong> on a Job to pause execution and terminate active worker pods, setting it to <strong>false</strong> to resume.",
    tags: ["Kubernetes", "Jobs", "Job Suspend"]
  },
  {
    id: "k8s-ckad-fc-47",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Kubernetes: terminationMessagePath",
    hint: "Capturing fatal crash summaries in pod status.",
    back: "Containers write exit diagnostics to <strong>terminationMessagePath</strong> (default <code>/dev/termination-log</code>) to display fatal error reasons directly in <code>kubectl describe</code>.",
    tags: ["Kubernetes", "terminationMessagePath", "Diagnostics"]
  },
  {
    id: "k8s-ckad-fc-48",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "Linux Capabilities: CAP_SYS_ADMIN Risk",
    hint: "Preventing root escalation.",
    back: "Never grant <strong>CAP_SYS_ADMIN</strong> to unprivileged containers; it confers broad kernel privileges that can be leveraged to escape container isolation.",
    tags: ["Kubernetes", "Security", "CAP_SYS_ADMIN"]
  },
  {
    id: "k8s-ckad-fc-49",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "CronJobs: History Limits",
    hint: "Pruning historical completed and failed job objects.",
    back: "Configure <strong>successfulJobsHistoryLimit</strong> and <strong>failedJobsHistoryLimit</strong> on CronJobs to prevent obsolete job objects from cluttering etcd.",
    tags: ["Kubernetes", "CronJobs", "History Limits"]
  },
  {
    id: "k8s-ckad-fc-50",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d1",
    front: "SecurityContext: seccompProfile",
    hint: "Restricting dangerous Linux syscalls.",
    back: "Configure <strong>seccompProfile: { type: RuntimeDefault }</strong> in securityContext to block non-standard Linux system calls and harden runtime security.",
    tags: ["Kubernetes", "seccompProfile", "Runtime Security"]
  }
];

export default K8S_CKAD_FLASHCARDS_2;
