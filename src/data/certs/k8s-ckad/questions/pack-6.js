export const K8S_CKAD_QUESTIONS_6 = [
  {
    id: "k8s-ckad-126",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Port Forwarding for Local Debugging (kubectl port-forward)",
    scenario: "A backend database pod runs in a private Kubernetes cluster with no external LoadBalancer or Ingress. A developer needs to connect to the database on port 5432 from their local laptop using a desktop SQL client.",
    question: "Which kubectl command securely tunnels local port 5432 to the remote pod?",
    options: [
      { id: 'A', text: "kubectl port-forward pod/&lt;pod-name&gt; 5432:5432" },
      { id: 'B', text: "kubectl proxy --port=5432" },
      { id: 'C', text: "kubectl attach pod/&lt;pod-name&gt; -p 5432" },
      { id: 'D', text: "kubectl exec -it &lt;pod-name&gt; -- nc" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubectl port-forward` forwards connections from a local port on the developer's workstation to a port on a remote Kubernetes Pod, Service, or Deployment via the Kubernetes API server tunnel, allowing direct local inspection of private cluster workloads.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/",
    tags: ["Kubernetes", "kubectl port-forward", "Local Debugging"]
  },
  {
    id: "k8s-ckad-127",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Container Exec for Interactive Shell Access (kubectl exec)",
    scenario: "An engineer needs to inspect files inside a running container named `app` within pod `web-server-79d8f`.",
    question: "Which kubectl command opens an interactive bash session inside the container?",
    options: [
      { id: 'A', text: "kubectl exec -it web-server-79d8f -c app -- /bin/bash" },
      { id: 'B', text: "kubectl logs web-server-79d8f --shell" },
      { id: 'C', text: "kubectl attach web-server-79d8f -c app" },
      { id: 'D', text: "kubectl run web-server-79d8f -it -- /bin/bash" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubectl exec -it &lt;pod-name&gt; -c &lt;container-name&gt; -- &lt;command&gt;` opens an interactive pseudo-TTY (`-t`) with standard input (`-i`), executing the specified shell binary (`/bin/bash` or `/bin/sh`) inside the container process namespace.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container/",
    tags: ["Kubernetes", "kubectl exec", "Interactive Debugging"]
  },
  {
    id: "k8s-ckad-128",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Kubernetes Node NotReady Status Diagnostics",
    scenario: "A worker node transitions to `NotReady` status. Pods scheduled on that node stop serving traffic.",
    question: "Which node daemon is responsible for reporting node health heartbeats to the control plane?",
    options: [
      { id: 'A', text: "kube-proxy" },
      { id: 'B', text: "kubelet" },
      { id: 'C', text: "CoreDNS" },
      { id: 'D', text: "kube-scheduler" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `kubelet` is the primary node agent. It reports node status and heartbeats to the control plane API server. If the kubelet crashes, runs out of memory, or loses network connectivity, the control plane marks the node as `NotReady`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/nodes/#condition",
    tags: ["Kubernetes", "kubelet", "Node Health"]
  },
  {
    id: "k8s-ckad-129",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Readiness Gate for External Load Balancer Health (readinessGates)",
    scenario: "An enterprise uses an external Cloud Load Balancer (AWS ALB or Google Cloud NEG) that registers pod IPs directly. A pod passing its internal container readiness probe must not receive traffic until the external load balancer target group also reports it healthy.",
    question: "Which Pod-level configuration field defines custom conditions that must be satisfied before the pod is considered Ready?",
    options: [
      { id: 'A', text: "spec.readinessGates" },
      { id: 'B', text: "spec.startupProbe" },
      { id: 'C', text: "spec.readinessProbe.external" },
      { id: 'D', text: "spec.tolerations" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`readinessGates` allow pod authors to define custom condition types (e.g. `target-health.alb.ingress.k8s.aws`). The pod is not considered Ready (and endpoints are withheld) until both container readiness probes and all readinessGates evaluate to `True`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate",
    tags: ["Kubernetes", "readinessGates", "External Health Checks"]
  },
  {
    id: "k8s-ckad-130",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Liveness Probe InitialDelay Tuning and CPU Spikes",
    scenario: "A Java container experiences occasional CPU spikes during heavy garbage collection cycles. During these spikes, an HTTP liveness probe with `timeoutSeconds: 1` times out, causing the kubelet to repeatedly kill and restart the container.",
    question: "How should the developer adjust the liveness probe parameters to prevent unnecessary restarts during transient load?",
    options: [
      { id: 'A', text: "Increase timeoutSeconds (e.g. to 5s) and failureThreshold (e.g. to 3 or 5)" },
      { id: 'B', text: "Decrease periodSeconds to 1s" },
      { id: 'C', text: "Change livenessProbe to a tcpSocket on port 80" },
      { id: 'D', text: "Delete the readiness probe" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Aggressive liveness probes cause instability. Increasing `timeoutSeconds` (giving slow responses time to reply) and increasing `failureThreshold` (allowing multiple consecutive timeouts before taking action) prevents transient CPU spikes or GC pauses from triggering restarts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes",
    tags: ["Kubernetes", "livenessProbe Tuning", "Stability"]
  },
  {
    id: "k8s-ckad-131",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Container Log Rotation Configuration on Worker Nodes",
    scenario: "A high-throughput application generates 10 GB of stdout logs per hour on a worker node.",
    question: "How does Kubernetes prevent container logs from consuming the entire node filesystem disk space?",
    options: [
      { id: 'A', text: "The kubelet automatically rotates container logs based on containerLogMaxSize and containerLogMaxFiles configuration flags" },
      { id: 'B', text: "Logs are deleted immediately after being written" },
      { id: 'C', text: "Applications must implement logrotate inside Dockerfiles" },
      { id: 'D', text: "Kubernetes does not rotate container logs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `kubelet` manages container log rotation. Using flags such as `containerLogMaxSize` (default 10Mi) and `containerLogMaxFiles` (default 5), the kubelet automatically rotates and prunes log files on node disk to avoid disk exhaustion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation",
    tags: ["Kubernetes", "Log Rotation", "kubelet"]
  },
  {
    id: "k8s-ckad-132",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "JSON Path Output Formatting with Kubectl (-o jsonpath)",
    scenario: "A DevOps automation script needs to extract the internal IP addresses of all running pods in the `default` namespace as a space-separated list.",
    question: "Which kubectl command extracts this information using JSONPath?",
    options: [
      { id: 'A', text: "kubectl get pods -n default -o jsonpath='{.items[*].status.podIP}'" },
      { id: 'B', text: "kubectl get pods -n default -o yaml" },
      { id: 'C', text: "kubectl describe pods | grep IP" },
      { id: 'D', text: "kubectl get pods --format=ip" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`-o jsonpath='&lt;template&gt;'` is a powerful kubectl output formatter. `{.items[*].status.podIP}` traverses the JSON array of pods and extracts only the `status.podIP` field for each item, returning clean text for bash scripts.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/jsonpath/",
    tags: ["Kubernetes", "kubectl jsonpath", "Automation"]
  },
  {
    id: "k8s-ckad-133",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Custom Columns Output Formatting with Kubectl (-o custom-columns)",
    scenario: "A developer wants a customized CLI table showing: `POD_NAME` and `NODE_NAME` for all pods in the cluster.",
    question: "Which kubectl option creates a custom tabular output?",
    options: [
      { id: 'A', text: "kubectl get pods -o wide alone" },
      { id: 'B', text: "kubectl get pods -o table" },
      { id: 'C', text: "kubectl get pods --columns=name,node" },
      { id: 'D', text: "kubectl get pods -o custom-columns=POD_NAME:.metadata.name,NODE_NAME:.spec.nodeName" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`-o custom-columns=&lt;header&gt;:&lt;jsonpath&gt;,...` defines custom tabular column headers and mappings, producing clean, structured tables tailored for terminal inspection.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/overview/#custom-columns",
    tags: ["Kubernetes", "custom-columns", "CLI Formatting"]
  },
  {
    id: "k8s-ckad-134",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "OpenTelemetry (OTel) Collector Architecture in Kubernetes",
    scenario: "An enterprise adopts OpenTelemetry for unified observability. Application pods emit distributed traces, metrics, and logs using OTLP protocol over gRPC.",
    question: "Which component receives OTLP telemetry from multiple pods, processes/enriches the data, and exports it to multiple backend APMs?",
    options: [
      { id: 'A', text: "Metrics Server" },
      { id: 'B', text: "Fluentd standalone" },
      { id: 'C', text: "CoreDNS" },
      { id: 'D', text: "OpenTelemetry Collector (deployed as a DaemonSet or Sidecar)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `OpenTelemetry Collector` offers a vendor-agnostic implementation on how to receive, process, and export telemetry data. Deployed as a DaemonSet or sidecar proxy, it buffers, filters, and transforms OTLP traces and metrics before forwarding to storage backends.",
    referenceUrl: "https://opentelemetry.io/docs/collector/",
    tags: ["Observability", "OpenTelemetry", "OTel Collector"]
  },
  {
    id: "k8s-ckad-135",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Phase vs Container States in Kubernetes",
    scenario: "A developer checks a pod's status using `kubectl get pod` and `kubectl describe pod`.",
    question: "What is the fundamental difference between `Pod Phase` and `Container States` in the Kubernetes API?",
    options: [
      { id: 'A', text: "Pod Phase applies only to Jobs; Container States apply to Deployments" },
      { id: 'B', text: "Pod Phase is a high-level summary of the pod lifecycle (Pending, Running, Succeeded, Failed); Container States track individual container lifecycles (Waiting, Running, Terminated)" },
      { id: 'C', text: "There is no difference between Phase and State" },
      { id: 'D', text: "Container States dictate node placement; Pod Phase controls networking" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Pod's `status.phase` is a high-level lifecycle category (`Pending`, `Running`, `Succeeded`, `Failed`, `Unknown`). Within `status.containerStatuses`, each container has fine-grained `state` information (`waiting`, `running`, `terminated`) including exact exit codes and reasons.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase",
    tags: ["Kubernetes", "Pod Lifecycle", "Phases and States"]
  },
  {
    id: "k8s-ckad-136",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Debugging Pod DNS Resolution Failures with nslookup / dig",
    scenario: "A pod fails to connect to a microservice named `order-service` in the same namespace.",
    question: "How can an engineer verify whether CoreDNS is resolving the service name correctly from inside a debug pod?",
    options: [
      { id: 'A', text: "Run ping 8.8.8.8" },
      { id: 'B', text: "Check the Docker daemon logs" },
      { id: 'C', text: "Run nslookup order-service (or dig order-service) inside the pod or a debug container" },
      { id: 'D', text: "Inspect /etc/hosts on the node" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Running `nslookup &lt;service-name&gt;` inside a pod tests CoreDNS service discovery. It queries the nameserver defined in `/etc/resolv.conf` (the CoreDNS ClusterIP) and verifies whether the service resolves to its expected cluster IP address.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["Kubernetes", "CoreDNS", "DNS Troubleshooting"]
  },
  {
    id: "k8s-ckad-137",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Pod Termination: Graceful Shutdown with SIGTERM vs SIGKILL",
    scenario: "A Kubernetes pod is scheduled for termination during a rolling update.",
    question: "What is the sequence of operating system signals sent to the container processes during shutdown?",
    options: [
      { id: 'A', text: "Kubernetes sends SIGTERM to the root process, waits for terminationGracePeriodSeconds, and sends SIGKILL if the process has not exited" },
      { id: 'B', text: "Kubernetes sends SIGKILL immediately" },
      { id: 'C', text: "Kubernetes sends SIGHUP, followed by SIGSTOP" },
      { id: 'D', text: "Kubernetes reboots the node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes enforces graceful termination: it first executes any defined `preStop` hook, then sends `SIGTERM` to allow the process to flush buffers and close connections. If the process does not terminate within `terminationGracePeriodSeconds` (default 30s), the kubelet sends `SIGKILL` to forcefully terminate it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination",
    tags: ["Kubernetes", "Pod Termination", "SIGTERM and SIGKILL"]
  },
  {
    id: "k8s-ckad-138",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d3",
    domainName: "Application Observability and Maintenance",
    title: "Startup Probes with failureThreshold for Large Boot Windows",
    scenario: "A legacy application takes an unpredictable amount of time to boot (between 60 and 180 seconds), but once running, it must respond to health checks within 2 seconds.",
    question: "How should the developer configure a startupProbe to accommodate up to 200 seconds of boot time with 10-second checks?",
    options: [
      { id: 'A', text: "livenessProbe with initialDelaySeconds: 200" },
      { id: 'B', text: "readinessProbe with timeoutSeconds: 200" },
      { id: 'C', text: "startupProbe: { periodSeconds: 200, failureThreshold: 1 }" },
      { id: 'D', text: "startupProbe: { httpGet: { path: /healthz, port: 8080 }, periodSeconds: 10, failureThreshold: 20 }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Multiplying `periodSeconds: 10` by `failureThreshold: 20` yields a maximum startup window of 200 seconds (10s * 20 attempts = 200s). Once the startup probe succeeds, normal liveness checks take over with strict 2-second timeouts, combining boot tolerance with rapid failure detection.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes",
    tags: ["Kubernetes", "startupProbe", "Tuning"]
  },
  {
    id: "k8s-ckad-139",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap Volume Mounts: Directory vs subPath Mounting",
    scenario: "A developer mounts a ConfigMap containing `nginx.conf` into `/etc/nginx` in a container. By default, mounting the volume erases all other default configuration files already present in `/etc/nginx`.",
    question: "Which volumeMount configuration injects only the specific `nginx.conf` file without overwriting other existing files in the directory?",
    options: [
      { id: 'A', text: "mountOnly: nginx.conf" },
      { id: 'B', text: "subPath: nginx.conf" },
      { id: 'C', text: "mountPropagation: HostToContainer" },
      { id: 'D', text: "readOnly: true alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Using `subPath: nginx.conf` in a `volumeMount` mounts a single specific file from a ConfigMap or Secret volume directly into a container directory without masking or obliterating the other pre-existing files in that destination directory.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#using-subpath",
    tags: ["Kubernetes", "ConfigMap", "subPath"]
  },
  {
    id: "k8s-ckad-140",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable ConfigMaps and Secrets for Performance and Safety",
    scenario: "A Kubernetes cluster hosts 1,000 pods reading static configuration from a large ConfigMap. Kubelets continuously watch and poll the API server for changes to this ConfigMap, generating significant control plane load.",
    question: "Which property marks a ConfigMap as unchanging, reducing API server watch load and protecting it from accidental edits?",
    options: [
      { id: 'A', text: "immutable: true" },
      { id: 'B', text: "readOnly: true in ConfigMap metadata" },
      { id: 'C', text: "frozen: true" },
      { id: 'D', text: "static: true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting `immutable: true` on a ConfigMap or Secret explicitly informs Kubernetes that its data will not change. Kubelets cease watching the resource, drastically slashing API server load. Furthermore, accidental edits to the ConfigMap are rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Kubernetes", "ConfigMap", "immutable"]
  },
  {
    id: "k8s-ckad-141",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount Token Automount Disabling (automountServiceAccountToken)",
    scenario: "A web frontend pod only serves static HTML files and has no need to communicate with the Kubernetes API server. A security benchmark mandates disabling default API credential injection.",
    question: "Which setting prevents Kubernetes from automatically mounting API tokens at /var/run/secrets/kubernetes.io/serviceaccount?",
    options: [
      { id: 'A', text: "serviceAccountName: none" },
      { id: 'B', text: "securityContext: { unauthenticated: true }" },
      { id: 'C', text: "disableToken: true" },
      { id: 'D', text: "automountServiceAccountToken: false (on the Pod or ServiceAccount spec)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "By default, Kubernetes mounts a JWT API token and CA certificate into every pod at `/var/run/secrets/kubernetes.io/serviceaccount`. Setting `automountServiceAccountToken: false` on the Pod spec or ServiceAccount disables this credential injection.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Kubernetes", "ServiceAccount", "Security Hardening"]
  },
  {
    id: "k8s-ckad-142",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC: Roles vs ClusterRoles Scope Distinction",
    scenario: "A security team defines permissions allowing an operator to list and delete Pods. The permissions must apply exclusively within the `development` namespace, not cluster-wide.",
    question: "Which RBAC resource should be created to define namespace-scoped permissions?",
    options: [
      { id: 'A', text: "GlobalRole" },
      { id: 'B', text: "Role (paired with a RoleBinding)" },
      { id: 'C', text: "ClusterRole (paired with a ClusterRoleBinding)" },
      { id: 'D', text: "ClusterRoleBinding alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `Role` always defines permissions scoped to a single specific namespace. In contrast, a `ClusterRole` defines permissions for cluster-wide resources (like Nodes or PVs) or non-namespaced endpoints, or can be bound across namespaces.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["Kubernetes", "RBAC", "Role vs ClusterRole"]
  },
  {
    id: "k8s-ckad-143",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC: RoleBinding with ClusterRole for Namespaced Reusability",
    scenario: "An organization defines a standard `pod-reader` ClusterRole granting read permissions on pods. An administrator wants user `alice` to have these permissions, but only within the `marketing` namespace.",
    question: "How should the administrator bind the ClusterRole to user alice?",
    options: [
      { id: 'A', text: "Create a ClusterRoleBinding" },
      { id: 'B', text: "Create a RoleBinding in the marketing namespace referencing the ClusterRole in roleRef" },
      { id: 'C', text: "Duplicate the ClusterRole as a Role manually" },
      { id: 'D', text: "ClusterRoles can only be used with ClusterRoleBindings" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A `RoleBinding` can reference a `ClusterRole` in its `roleRef`. When done, the permissions defined in the ClusterRole are granted to the subject exclusively within the namespace of the RoleBinding, allowing organizations to reuse standard ClusterRoles across namespaces.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding",
    tags: ["Kubernetes", "RBAC", "RoleBinding"]
  },
  {
    id: "k8s-ckad-144",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC Verbs and API Groups Configuration",
    scenario: "A developer writes a custom controller that creates, updates, and deletes Deployments in the apps API group.",
    question: "Which RBAC apiGroups, resources, and verbs must be declared in the Role?",
    options: [
      { id: 'A', text: "apiGroups: [''], resources: ['deployments'], verbs: ['all']" },
      { id: 'B', text: "apiGroups: ['apps'], resources: ['deployments'], verbs: ['create', 'update', 'delete', 'get', 'list', 'watch']" },
      { id: 'C', text: "apiGroups: ['extensions'], resources: ['apps'], verbs: ['manage']" },
      { id: 'D', text: "apiGroups: ['k8s.io'], resources: ['deployments'], verbs: ['admin']" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployments belong to the `apps` API group (`apiGroups: ['apps']`). Standard Kubernetes RBAC verbs are `get`, `list`, `watch`, `create`, `update`, `patch`, and `delete`. The core API group is represented as `\"\"`.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-example",
    tags: ["Kubernetes", "RBAC", "Verbs and Resources"]
  },
  {
    id: "k8s-ckad-145",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Testing Permissions via kubectl auth can-i",
    scenario: "Before running an automated pipeline, an engineer needs to test whether the `ci-deployer` ServiceAccount in namespace `staging` has permission to delete secrets.",
    question: "Which kubectl command verifies these permissions?",
    options: [
      { id: 'A', text: "kubectl get rbac --user=ci-deployer" },
      { id: 'B', text: "kubectl auth can-i delete secrets -n staging --as=system:serviceaccount:staging:ci-deployer" },
      { id: 'C', text: "kubectl describe serviceaccount ci-deployer" },
      { id: 'D', text: "kubectl test rbac delete secrets" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl auth can-i &lt;verb&gt; &lt;resource&gt;` evaluates the authorization API. Adding `--as=&lt;principal&gt;` allows administrators to impersonate users or ServiceAccounts (`system:serviceaccount:&lt;namespace&gt;:&lt;name&gt;`) to verify permissions safely.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access",
    tags: ["Kubernetes", "RBAC", "kubectl auth can-i"]
  },
  {
    id: "k8s-ckad-146",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ResourceQuota: Namespaced Resource Aggregation Caps",
    scenario: "A cluster administrator must ensure that teams using the `dev-team-a` namespace do not consume more than 20 vCPUs and 40 GiB of memory across all their pods combined.",
    question: "Which Kubernetes resource enforces aggregate compute and object count limits per namespace?",
    options: [
      { id: 'A', text: "PriorityClass" },
      { id: 'B', text: "HorizontalPodAutoscaler" },
      { id: 'C', text: "LimitRange" },
      { id: 'D', text: "ResourceQuota" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `ResourceQuota` provides constraints that limit aggregate resource consumption per namespace. It can limit total CPU requests, CPU limits, memory, storage requests, and total count of objects (e.g. max 10 Services, 50 ConfigMaps).",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Kubernetes", "ResourceQuota", "Namespace Governance"]
  },
  {
    id: "k8s-ckad-147",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "LimitRange: Default Container Requests and Limits",
    scenario: "In a multi-tenant namespace, developers frequently deploy pods without defining CPU or memory requests. When a ResourceQuota is applied, pods without requests are rejected by the API server.",
    question: "Which Kubernetes resource automatically assigns default CPU and memory requests and limits to containers created without them?",
    options: [
      { id: 'A', text: "LimitRange" },
      { id: 'B', text: "ResourceQuota" },
      { id: 'C', text: "MutatingAdmissionWebhook alone" },
      { id: 'D', text: "PodSecurityPolicy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `LimitRange` enforces min/max compute resource boundaries on individual pods or containers in a namespace. Crucially, it can specify `default` (limits) and `defaultRequest` (requests) automatically injected into containers that do not define them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/",
    tags: ["Kubernetes", "LimitRange", "Default Resources"]
  },
  {
    id: "k8s-ckad-148",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolume AccessModes: ReadWriteOnce vs ReadOnlyMany vs ReadWriteMany",
    scenario: "A distributed web application with 10 pods across multiple worker nodes requires shared read-write access to a single persistent storage filesystem (e.g. NFS or GlusterFS).",
    question: "Which PersistentVolume accessMode allows simultaneous read-write access by multiple nodes?",
    options: [
      { id: 'A', text: "ReadWriteMany (RWX)" },
      { id: 'B', text: "ReadWriteOnce (RWO)" },
      { id: 'C', text: "ReadOnlyMany (ROX)" },
      { id: 'D', text: "ReadWriteOncePod (RWOP)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes PVs support four access modes: `ReadWriteOnce` (RWO, mountable as read-write by a single node), `ReadOnlyMany` (ROX, mountable read-only by many nodes), `ReadWriteMany` (RWX, mountable as read-write by many nodes), and `ReadWriteOncePod` (RWOP, single pod).",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Kubernetes", "Storage", "AccessModes"]
  },
  {
    id: "k8s-ckad-149",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolume AccessMode: ReadWriteOncePod (RWOP)",
    scenario: "A stateful database requires strict exclusive disk access. The database disk must be accessible by only one single Pod across the entire cluster, even if another pod runs on the same node.",
    question: "Which PersistentVolume accessMode restricts access to a single pod?",
    options: [
      { id: 'A', text: "ReadWriteOnce (RWO)" },
      { id: 'B', text: "ReadWriteOncePod (RWOP)" },
      { id: 'C', text: "ReadWriteMany (RWX)" },
      { id: 'D', text: "ReadOnlyMany (ROX)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`ReadWriteOncePod` (RWOP) restricts volume access to a single Pod across the entire cluster. In contrast, standard `ReadWriteOnce` (RWO) allows multiple pods running on the same node to mount the volume simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes",
    tags: ["Kubernetes", "Storage", "ReadWriteOncePod"]
  },
  {
    id: "k8s-ckad-150",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolume Reclaim Policies: Retain vs Delete vs Recycle",
    scenario: "When a PersistentVolumeClaim (PVC) bound to an underlying PersistentVolume (PV) is deleted, the data on the underlying disk must be preserved for manual archiving and analysis.",
    question: "Which PersistentVolume reclaimPolicy keeps the underlying storage volume intact after PVC deletion?",
    options: [
      { id: 'A', text: "persistentVolumeReclaimPolicy: Delete" },
      { id: 'B', text: "persistentVolumeReclaimPolicy: Archive" },
      { id: 'C', text: "persistentVolumeReclaimPolicy: Retain" },
      { id: 'D', text: "persistentVolumeReclaimPolicy: Recycle" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Under `reclaimPolicy: Retain`, deleting a PVC leaves the PV and its underlying external storage asset intact. The PV transitions to `Released` status, preventing other claims from binding until an administrator manually cleans up or reclaims it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming",
    tags: ["Kubernetes", "Storage", "reclaimPolicy"]
  }
];

export default K8S_CKAD_QUESTIONS_6;
