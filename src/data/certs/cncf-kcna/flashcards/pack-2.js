export const CNCF_KCNA_FLASHCARDS_2 = [
  {
    id: "cncf-kcna-fc-26",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do init containers differ from regular app containers?",
    hint: "Order and completion.",
    back: "Init containers run <strong>one at a time, in order</strong>, and each must <strong>exit successfully</strong> before the next starts; the app containers start only after all of them finish. If one fails, the kubelet retries it (subject to the Pod restartPolicy). They do not support liveness or readiness probes, and are ideal for setup steps: waiting for a dependency, fetching config, running a migration check.",
    tags: ["Init containers","Pods"]
  },
  {
    id: "cncf-kcna-fc-27",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Native sidecar containers: how are they declared and how do they start and stop?",
    hint: "They live in a list you might not expect.",
    back: "Declare them under <code>initContainers</code> with <code>restartPolicy: Always</code> (stable in 1.33). They <strong>start before</strong> the app containers, in order with other init containers, but the kubelet does not wait for them to exit; it moves on once they have started (or pass a startup probe). They keep running, restart if they crash, may have probes, and are <strong>stopped after</strong> the app containers end, so they no longer block Job completion.",
    tags: ["Sidecar containers"]
  },
  {
    id: "cncf-kcna-fc-28",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a Service selector do?",
    hint: "Labels in, endpoints out.",
    back: "The selector is a set of labels; every Pod in the <strong>same namespace</strong> whose labels match becomes a candidate backend, and the EndpointSlice controller lists the <strong>ready</strong> ones as endpoints. Traffic to the Service is spread across them. If nothing matches, the Service exists but has no endpoints and connections fail. A Service without a selector gets no automatic endpoints.",
    tags: ["Services","Selectors"]
  },
  {
    id: "cncf-kcna-fc-29",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do a Pod's hostname and subdomain fields do?",
    hint: "They combine with a headless Service.",
    back: "A Pod's hostname defaults to its <strong>name</strong>; <code>spec.hostname</code> overrides it. If <code>spec.subdomain</code> names a <strong>headless Service</strong> in the same namespace, the Pod also gets a DNS record <code>hostname.subdomain.namespace.svc.cluster.local</code>. StatefulSets set both automatically, which is how <code>db-0.db</code> names work.",
    tags: ["Pods","DNS"]
  },
  {
    id: "cncf-kcna-fc-30",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Liveness vs readiness vs startup probe: what happens when each fails?",
    hint: "Restart, remove from traffic, or wait.",
    back: "<strong>Liveness</strong> failure: the kubelet <strong>restarts the container</strong>. <strong>Readiness</strong> failure: the Pod is marked not ready and <strong>removed from Service endpoints</strong>; no restart. <strong>Startup</strong> probe: while it has not yet succeeded, liveness and readiness checks are held off, protecting slow-starting apps; if it fails past its threshold, the container is restarted.",
    tags: ["Probes"]
  },
  {
    id: "cncf-kcna-fc-31",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which check mechanisms can a Kubernetes probe use?",
    hint: "Four handler types.",
    back: "<strong>httpGet</strong> (success on a 200-399 status code), <strong>tcpSocket</strong> (success if the port accepts a connection), <strong>exec</strong> (success if the command in the container exits 0) and <strong>grpc</strong> (uses the standard gRPC health checking protocol). Timing is tuned with initialDelaySeconds, periodSeconds, timeoutSeconds, failureThreshold and successThreshold.",
    tags: ["Probes"]
  },
  {
    id: "cncf-kcna-fc-32",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Summarize the four Service types.",
    hint: "Internal, node port, cloud, DNS alias.",
    back: "<strong>ClusterIP</strong> (default): a virtual IP reachable only inside the cluster. <strong>NodePort</strong>: ClusterIP plus a port opened on every node (30000-32767 by default). <strong>LoadBalancer</strong>: NodePort plus an external load balancer from the cloud provider or a bare-metal implementation. <strong>ExternalName</strong>: a DNS CNAME to an outside hostname, with no proxying. A headless Service is a ClusterIP Service with <code>clusterIP: None</code>.",
    tags: ["Services"]
  },
  {
    id: "cncf-kcna-fc-33",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "In a Service, what do port, targetPort and nodePort each mean?",
    hint: "Client side, Pod side, node side.",
    back: "<strong>port</strong>: the port clients use on the Service's cluster IP. <strong>targetPort</strong>: the port (number or container port <em>name</em>) on the backend Pods; defaults to the same value as port. <strong>nodePort</strong>: for NodePort and LoadBalancer types, the port opened on every node; auto-assigned from the node-port range if omitted.",
    tags: ["Services","Ports"]
  },
  {
    id: "cncf-kcna-fc-34",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How can a Service point at backends that are not Pods selected by labels?",
    hint: "Leave something out and supply the rest yourself.",
    back: "Create the Service <strong>without a selector</strong>. Kubernetes then creates no endpoints for it, and you add an <strong>EndpointSlice</strong> yourself (labeled <code>kubernetes.io/service-name: &lt;svc&gt;</code>) listing the backend IPs and ports, such as a database on a VM. Clients still use the normal Service name and cluster IP. For a backend reachable by DNS name only, ExternalName is simpler.",
    tags: ["Services","EndpointSlices"]
  },
  {
    id: "cncf-kcna-fc-35",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Name three common multi-container Pod patterns.",
    hint: "Helper beside, proxy out, translator.",
    back: "<strong>Sidecar</strong>: extends the main container, for example shipping its logs or syncing files. <strong>Ambassador</strong>: a proxy that represents an outside service to the app over localhost, such as a database connection proxy. <strong>Adapter</strong>: transforms the app's output into a standard format, such as exposing legacy metrics as Prometheus metrics. Use them only when the containers must share a lifecycle and a node.",
    tags: ["Pods","Design patterns"]
  },
  {
    id: "cncf-kcna-fc-36",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Pod vs ReplicaSet vs Deployment: which should you create for a stateless app?",
    hint: "Pick the level that gives rollouts.",
    back: "Create a <strong>Deployment</strong>. It manages ReplicaSets, which keep a set number of Pod replicas running, and adds <strong>rolling updates and rollbacks</strong> by creating a new ReplicaSet for each Pod template change. Bare Pods are not replaced if they die, and a ReplicaSet on its own cannot roll out a new version. You rarely touch ReplicaSets directly.",
    tags: ["Deployments","ReplicaSets"]
  },
  {
    id: "cncf-kcna-fc-37",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which conditions does a Deployment report, and when is a rollout considered stuck?",
    hint: "A deadline, in seconds.",
    back: "Deployment status conditions include <strong>Progressing</strong>, <strong>Available</strong> and <strong>ReplicaFailure</strong>. If a rollout makes no progress within <code>progressDeadlineSeconds</code> (default <strong>600</strong>), Progressing becomes False with reason <code>ProgressDeadlineExceeded</code>; <code>kubectl rollout status</code> then exits non-zero. Kubernetes does not roll back automatically.",
    tags: ["Deployments","Rollouts"]
  },
  {
    id: "cncf-kcna-fc-38",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the pod-template-hash label for?",
    hint: "Look at a ReplicaSet name.",
    back: "The Deployment controller adds a <code>pod-template-hash</code> label, a hash of the Pod template, to each ReplicaSet's selector and Pods, and uses it as the ReplicaSet name suffix. It keeps the ReplicaSets of one Deployment from selecting each other's Pods, since they share the same user-defined labels. Do not set or change it yourself.",
    tags: ["Deployments","Labels"]
  },
  {
    id: "cncf-kcna-fc-39",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why does kubectl get pods show \"Completed\" or \"CrashLoopBackOff\" when those are not phases?",
    hint: "kubectl summarizes.",
    back: "The <strong>STATUS column is a summary</strong> computed by kubectl from the phase and container states, often the most relevant container <em>reason</em>. Completed usually means phase Succeeded; CrashLoopBackOff means phase Running with a container Waiting to restart. Use <code>kubectl get pod -o yaml</code> or <code>kubectl describe pod</code> to see the real phase and states.",
    tags: ["kubectl","Pod lifecycle"]
  },
  {
    id: "cncf-kcna-fc-40",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the Pod restartPolicy values, and which is the default?",
    hint: "Three values; Deployments need one of them.",
    back: "<strong>Always</strong> (default; required for Deployment, ReplicaSet, StatefulSet and DaemonSet Pods), <strong>OnFailure</strong> (restart only on non-zero exit) and <strong>Never</strong>. The policy applies to all app containers in the Pod, and restarts happen in place on the same node, with exponential back-off. Jobs must use OnFailure or Never.",
    tags: ["restartPolicy","Pods"]
  },
  {
    id: "cncf-kcna-fc-41",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Will a ReplicaSet take over an existing bare Pod that matches its selector?",
    hint: "Owner references decide.",
    back: "<strong>Yes</strong>, if the Pod has <strong>no controller ownerReference</strong> and its labels match the selector, the ReplicaSet adopts it and counts it toward replicas, possibly deleting its own Pods to stay at the desired count. That is why bare Pods should not carry labels that match a controller's selector. Pods owned by another controller are never adopted.",
    tags: ["ReplicaSets","Owner references"]
  },
  {
    id: "cncf-kcna-fc-42",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Is a Pod ever moved to another node?",
    hint: "Think replace, not migrate.",
    back: "<strong>No.</strong> A Pod is bound to one node for its whole lifetime. If the node fails or the Pod is evicted, the Pod is deleted, and a controller creates a <strong>new Pod</strong> with a new name, UID and IP, which the scheduler may place elsewhere. Volumes that are not node-local, such as network-backed PersistentVolumes, can be reattached to the replacement.",
    tags: ["Pods","Scheduling"]
  },
  {
    id: "cncf-kcna-fc-43",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Where do Deployment Pod names like web-5d8f7c9b6-x2kqp come from?",
    hint: "Three parts.",
    back: "<strong>Deployment name</strong> (web) + <strong>pod-template-hash</strong> of the ReplicaSet (5d8f7c9b6) + a <strong>random suffix</strong> for each Pod (x2kqp). The Pod's hostname is its name, so it changes every time the Pod is replaced. StatefulSet Pods instead get stable ordinal names such as db-0, db-1.",
    tags: ["Deployments","Object names"]
  },
  {
    id: "cncf-kcna-fc-44",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does the kubelet's restart back-off behave for a crashing container?",
    hint: "It doubles, but not forever.",
    back: "By default the delay between restarts starts at <strong>10 seconds</strong> and <strong>doubles</strong> (10s, 20s, 40s ...) up to a cap of <strong>five minutes</strong>. Once a container runs for 10 minutes without trouble, the back-off resets. During the wait the container shows Waiting with reason CrashLoopBackOff, and the RESTARTS count in kubectl keeps climbing.",
    tags: ["CrashLoopBackOff","kubelet"]
  },
  {
    id: "cncf-kcna-fc-45",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does a preStop hook interact with terminationGracePeriodSeconds?",
    hint: "Same clock.",
    back: "The <strong>preStop</strong> hook runs first when a Pod is terminating, and <strong>SIGTERM is sent after it completes</strong>. Both share one budget: the grace period (default <strong>30s</strong>) starts at deletion, so a long preStop leaves less time for the app to handle SIGTERM before SIGKILL. A common use is a short sleep so load balancers stop sending traffic before the app shuts down.",
    tags: ["Pod lifecycle","Hooks"]
  },
  {
    id: "cncf-kcna-fc-46",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Give examples of namespaced and of cluster-scoped kinds.",
    hint: "kubectl api-resources --namespaced=...",
    back: "<strong>Namespaced</strong>: Pods, Deployments, Services, ConfigMaps, Secrets, PersistentVolumeClaims, ServiceAccounts, Roles, RoleBindings. <strong>Cluster-scoped</strong>: Nodes, Namespaces, PersistentVolumes, StorageClasses, ClusterRoles, ClusterRoleBindings, CustomResourceDefinitions. <code>kubectl api-resources --namespaced=true|false</code> prints the full list.",
    tags: ["Namespaces","API resources"]
  },
  {
    id: "cncf-kcna-fc-47",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What naming rules apply to most Kubernetes object names?",
    hint: "Borrowed from DNS.",
    back: "Most resources use <strong>DNS subdomain names</strong>: up to <strong>253 characters</strong>, lowercase alphanumerics, <code>-</code> and <code>.</code>, starting and ending alphanumeric. Some kinds, such as Services and Namespaces, need stricter <strong>DNS label names</strong>: up to <strong>63 characters</strong>, no dots. The UID, by contrast, is generated by Kubernetes and unique across the cluster's lifetime.",
    tags: ["Object names"]
  },
  {
    id: "cncf-kcna-fc-48",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "With imagePullPolicy: Always, does every container start download the whole image?",
    hint: "What is actually compared?",
    back: "<strong>No.</strong> Always means the kubelet asks the registry to <strong>resolve the tag to a digest</strong> on each start; if the node already has that digest cached, no layers are downloaded. It costs a registry round trip and fails if the registry is unreachable. Referencing images by <strong>digest</strong> (<code>image@sha256:...</code>) pins exact content regardless of policy.",
    tags: ["Images","imagePullPolicy"]
  },
  {
    id: "cncf-kcna-fc-49",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When a container restarts inside a Pod, what stays the same?",
    hint: "The Pod itself did not change.",
    back: "The <strong>Pod name, UID, IP address and node</strong> stay the same, and <code>emptyDir</code> volumes keep their data, because only the container was restarted. The container's own writable filesystem is fresh. The RESTARTS count increases, and <code>kubectl logs --previous</code> shows the output of the terminated instance.",
    tags: ["Pods","Containers"]
  },
  {
    id: "cncf-kcna-fc-50",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which kubectl command shows a Pod's recent events and container states?",
    hint: "More than get, more human than -o yaml.",
    back: "<strong>kubectl describe pod &lt;name&gt;</strong>. It prints the node, labels, container states with last termination reasons and exit codes, probe settings, volumes, conditions and, at the bottom, <strong>Events</strong> such as Scheduled, Pulling, Started, BackOff or FailedScheduling. Events are kept only for a limited time (one hour by default).",
    tags: ["kubectl","Events"]
  }
];

export default CNCF_KCNA_FLASHCARDS_2;
