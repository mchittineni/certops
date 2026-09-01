export const K8S_CKA_QUESTIONS_10 = [
  {
    id: "k8s-cka-211",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Leader Election Among Control Plane Components",
    scenario: "Three control plane nodes each run a kube-scheduler and a kube-controller-manager, yet only one of each appears to be doing work.",
    question: "Why is that expected?",
    options: [
      { id: 'A', text: "Only the replica on the first control plane node is ever used, by design." },
      { id: 'B', text: "Those components run active/passive using a Lease object, so only the elected leader acts while the others stand by." },
      { id: 'C', text: "The other replicas have crashed and should be investigated." },
      { id: 'D', text: "Work is sharded by namespace across the three replicas." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kube-scheduler and kube-controller-manager use leader election through a Lease in kube-system so exactly one instance reconciles at a time, avoiding conflicting decisions; API servers by contrast are all active. Healthy standbys are normal rather than a fault, and there is no namespace sharding.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/leases/",
    tags: ["High Availability", "Control Plane", "Leader Election"]
  },
  {
    id: "k8s-cka-212",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "What Triggers a New ReplicaSet",
    scenario: "An operator changes the replica count of a deployment from three to five and separately changes a container environment variable.",
    question: "Which change creates a new ReplicaSet?",
    options: [
      { id: 'A', text: "The replica count change, because scaling is a new revision." },
      { id: 'B', text: "Neither; ReplicaSets are only created when the deployment is first applied." },
      { id: 'C', text: "Both changes create separate ReplicaSets." },
      { id: 'D', text: "The environment variable change, because it modifies the pod template." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A new ReplicaSet is created only when spec.template changes, since the template hash identifies the revision; scaling simply adjusts the replica count on the existing ReplicaSet. That is also why kubectl rollout restart works by stamping an annotation onto the template.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "ReplicaSet", "Rollout"]
  },
  {
    id: "k8s-cka-213",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "CoreDNS CrashLoopBackOff Immediately After Install",
    scenario: "On a freshly built cluster the CoreDNS pods crash-loop. Their logs end with a plugin/loop message about a forwarding loop detected in the upstream resolver.",
    question: "What is the cause and remedy?",
    options: [
      { id: 'A', text: "The cluster CIDR overlaps the Service CIDR." },
      { id: 'B', text: "The node resolv.conf points at a local stub resolver, so CoreDNS forwards to itself; point the kubelet at the real upstream resolv.conf or fix the node resolver." },
      { id: 'C', text: "The kube-dns Service has no ClusterIP." },
      { id: 'D', text: "The CoreDNS image is corrupt and must be re-pulled." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The loop plugin detects that CoreDNS is forwarding queries back to itself, which happens when the node resolv.conf lists a local stub such as 127.0.0.53; the fix is to point the kubelet resolvConf at the real upstream file or correct the node resolver. The other options would produce different symptoms entirely.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["CoreDNS", "DNS", "Troubleshooting"]
  },
  {
    id: "k8s-cka-214",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Interpreting PersistentVolume Phases",
    scenario: "A PersistentVolume shows the phase Released after its claim was deleted, and a new identical claim will not bind to it.",
    question: "Why, and what is required?",
    options: [
      { id: 'A', text: "The new claim must request exactly the same size to bind." },
      { id: 'B', text: "Released volumes rebind automatically after the reclaim timeout." },
      { id: 'C', text: "Released volumes are corrupt and must be deleted." },
      { id: 'D', text: "A Released volume still records its previous claim reference, so it does not rebind automatically; clear the claimRef or recreate the PV." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With a Retain policy the volume moves to Released and keeps the stale claimRef, deliberately preventing another claim from picking up data that belonged to someone else until an administrator intervenes. Size need only be at least the request, and there is no automatic rebinding timeout.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["PersistentVolume", "Storage", "Lifecycle"]
  },
  {
    id: "k8s-cka-215",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Which Objects Select Pods by Label",
    scenario: "A team is auditing why a pod is receiving traffic it should not.",
    question: "Which objects select pods by label and therefore could be responsible? (Choose two.)",
    options: [
      { id: 'A', text: "A Service, whose selector determines its endpoints." },
      { id: 'B', text: "A NetworkPolicy, whose podSelector decides which pods it governs." },
      { id: 'C', text: "A Node, which selects pods to run." },
      { id: 'D', text: "A StorageClass, which selects pods needing volumes." }
    ],
    correctAnswers: ['A', 'B'],
    type: "multiple",
    explanation: "Services build their endpoint list from a label selector, and NetworkPolicies use a podSelector to choose which pods their rules apply to, so an overly broad selector on either can route or permit unexpected traffic. Nodes host pods assigned by the scheduler rather than selecting them, and StorageClasses concern volume provisioning.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
    tags: ["Labels", "Services", "NetworkPolicy"]
  },
  {
    id: "k8s-cka-216",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Identity a kubelet Presents to the API Server",
    scenario: "An administrator is reviewing how the Node authorizer knows which node a request came from.",
    question: "Which certificate identity does a kubelet use?",
    options: [
      { id: 'A', text: "The cluster admin certificate from admin.conf." },
      { id: 'B', text: "A client certificate with CN system:node:NODENAME and organisation system:nodes." },
      { id: 'C', text: "An anonymous identity, with authorisation handled by the node IP address." },
      { id: 'D', text: "A ServiceAccount token from the kube-system namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The kubelet authenticates with a client certificate whose common name identifies the node and whose organisation places it in the system:nodes group, which is exactly what the Node authorizer keys off. Those certificates are bootstrapped by a token and rotated through CSRs.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Authentication", "kubelet", "Security"]
  },
  {
    id: "k8s-cka-217",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Difference Between describe and get -o yaml",
    scenario: "An engineer is deciding which command to reach for when a pod misbehaves.",
    question: "What does describe provide that get -o yaml does not?",
    options: [
      { id: 'A', text: "The exact persisted spec after defaulting and admission." },
      { id: 'B', text: "The resource usage metrics." },
      { id: 'C', text: "The Events list narrating what controllers and the kubelet have attempted, plus human-formatted fields." },
      { id: 'D', text: "The container logs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "describe aggregates the object with its related Events, which is where scheduling failures, image pull errors, and probe failures are narrated; get -o yaml gives the exact persisted object, which is better for confirming fields. Logs come from kubectl logs and usage from kubectl top.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/",
    tags: ["kubectl", "Troubleshooting", "Events"]
  },
  {
    id: "k8s-cka-218",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Exposing Pod Metadata to a Container",
    scenario: "An application must log its own pod name, namespace, and node name without querying the API server.",
    question: "Which mechanism supplies those values?",
    options: [
      { id: 'A', text: "The downward API, exposing fields such as metadata.name and spec.nodeName as environment variables or files." },
      { id: 'B', text: "A ServiceAccount token mounted into the pod." },
      { id: 'C', text: "The kubelet writing values into /etc/hosts." },
      { id: 'D', text: "A ConfigMap generated by the kubelet for each pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The downward API projects selected pod and container fields - name, namespace, UID, labels, annotations, node name, pod IP, and resource limits - into environment variables or volume files with no API call. No per-pod ConfigMap is generated, tokens authenticate rather than describe, and the hosts file carries only host entries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Pods", "Configuration"]
  },
  {
    id: "k8s-cka-219",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Choosing a Debugging Path for a Broken Service",
    scenario: "A Service is unreachable and the operator wants a systematic order of tests rather than guesswork.",
    question: "Which sequence isolates the layer fastest?",
    options: [
      { id: 'A', text: "Recreate the Service, then the Deployment, then the namespace." },
      { id: 'B', text: "Read the API server audit log first." },
      { id: 'C', text: "Check EndpointSlices, then curl the pod IP, then curl the ClusterIP, then test DNS resolution, then review NetworkPolicies." },
      { id: 'D', text: "Restart kube-proxy, then CoreDNS, then the application pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Testing from the backend outwards separates the layers cleanly: endpoints prove selection and readiness, the pod IP proves the application, the ClusterIP proves kube-proxy, name resolution proves DNS, and policy review explains selective blocking. Restarting or recreating components changes state before the cause is known.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Troubleshooting", "Services", "Networking"]
  },
  {
    id: "k8s-cka-220",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Prerequisites Before Joining a Cluster",
    scenario: "A new machine is being prepared for kubeadm join and the checklist is being reviewed.",
    question: "Which prerequisites are required? (Choose two.)",
    options: [
      { id: 'A', text: "kubectl installed and configured with admin.conf." },
      { id: 'B', text: "A CNI plugin binary compiled from source on that node." },
      { id: 'C', text: "The br_netfilter module loaded and net.bridge.bridge-nf-call-iptables set to 1." },
      { id: 'D', text: "Swap disabled, unless swap support has been deliberately configured." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "The kubelet refuses to start with swap on in a standard configuration, and bridged traffic must be visible to iptables for Service and pod networking to work, which is what br_netfilter and the sysctl provide. kubectl on a worker is optional, and CNI plugins are normally installed by the cluster add-on DaemonSet rather than built locally.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",
    tags: ["kubeadm", "Nodes", "Prerequisites"]
  },
  {
    id: "k8s-cka-221",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Read-Only Mount of a Volume",
    scenario: "A configuration volume must be mounted so that even a compromised process inside the container cannot alter it.",
    question: "Which setting enforces that?",
    options: [
      { id: 'A', text: "immutable: true on the ConfigMap." },
      { id: 'B', text: "readOnly: true on the volumeMount." },
      { id: 'C', text: "defaultMode: 0444 on the volume." },
      { id: 'D', text: "runAsNonRoot: true on the pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A readOnly volumeMount makes the mount itself read-only at the kernel level, which is the strongest of these guarantees; ConfigMap and Secret volumes are already read-only for this reason. File mode bits can be bypassed by a root process, immutability prevents API updates rather than in-container writes, and running as non-root is a different control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["Volumes", "Security", "Storage"]
  },
  {
    id: "k8s-cka-222",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Interpreting Node Conditions",
    scenario: "kubectl describe node shows MemoryPressure False, DiskPressure True, PIDPressure False, Ready True.",
    question: "What does that combination mean?",
    options: [
      { id: 'A', text: "The kubelet has stopped reporting." },
      { id: 'B', text: "The node is out of memory." },
      { id: 'C', text: "The node is broken and should be deleted." },
      { id: 'D', text: "The node is still accepting work in general but is low on disk, so the kubelet is reclaiming and may evict pods, and a disk-pressure taint discourages new placements." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Node conditions are independent signals: Ready True means the kubelet is healthy and reporting, while DiskPressure True triggers image and container garbage collection, then pod eviction, plus a NoSchedule taint. A stopped kubelet would show Ready as Unknown.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/nodes/",
    tags: ["Nodes", "Conditions", "Eviction"]
  },
  {
    id: "k8s-cka-223",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Guaranteed QoS Requirements",
    scenario: "A pod has two containers. The first sets equal CPU and memory requests and limits; the second sets only a memory limit.",
    question: "What is the pod QoS class?",
    options: [
      { id: 'A', text: "The pod is rejected as invalid." },
      { id: 'B', text: "BestEffort, because one container omits requests." },
      { id: 'C', text: "Guaranteed, because at least one container qualifies." },
      { id: 'D', text: "Burstable, because Guaranteed requires every container to set equal requests and limits for both CPU and memory." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "QoS is derived at pod level and Guaranteed demands that every container specifies CPU and memory limits with requests equal to them; one container falling short makes the whole pod Burstable. BestEffort requires no requests or limits anywhere, and the specification is perfectly valid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/",
    tags: ["QoS", "Resources", "Scheduling"]
  },
  {
    id: "k8s-cka-224",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Reducing DNS Query Load From a Chatty Application",
    scenario: "An application makes many outbound calls to external hostnames, and DNS query volume is high because each lookup tries several search domains first.",
    question: "Which pod setting reduces the wasted queries?",
    options: [
      { id: 'A', text: "hostNetwork: true." },
      { id: 'B', text: "dnsPolicy: None with no dnsConfig." },
      { id: 'C', text: "Increasing the CoreDNS cache TTL only." },
      { id: 'D', text: "A dnsConfig with a lower ndots option, so fully qualified external names are not tried against the cluster search domains first." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The default ndots value of 5 makes names with few dots be tried against each cluster search domain before being resolved absolutely, multiplying queries for external hostnames; lowering ndots or using a trailing dot avoids that. dnsPolicy None without a dnsConfig leaves the pod with no resolver, host networking changes far more than DNS, and caching helps repeat lookups but not the search-domain expansion itself.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["DNS", "Performance", "Networking"]
  },
  {
    id: "k8s-cka-225",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Purpose of the kubeconfig Context",
    scenario: "A kubeconfig contains three clusters, three users, and four contexts.",
    question: "What does a context define?",
    options: [
      { id: 'A', text: "A set of RBAC permissions granted to the user." },
      { id: 'B', text: "A list of resources kubectl may access." },
      { id: 'C', text: "The API server certificate authority." },
      { id: 'D', text: "A named combination of a cluster, a user, and an optional default namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A context is purely a client-side pairing of cluster, user, and default namespace, which is why four contexts can exist across three clusters. Permissions live in RBAC on the server, and the certificate authority is part of the cluster entry.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["kubeconfig", "kubectl", "Access"]
  },
  {
    id: "k8s-cka-226",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Choosing a Volume for Multi-Reader Reference Data",
    scenario: "A read-only reference dataset must be available to fifty pods spread across many nodes, and it never changes.",
    question: "Which approach is most appropriate?",
    options: [
      { id: 'A', text: "A hostPath volume on every node." },
      { id: 'B', text: "A ReadWriteOnce volume shared by all pods." },
      { id: 'C', text: "An emptyDir populated by an init container in each pod." },
      { id: 'D', text: "A PersistentVolume with ReadOnlyMany, or the data baked into the container image if it is small enough." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ReadOnlyMany allows many nodes to mount the same volume for reading, which fits immutable reference data, and small datasets are often simplest baked into the image. ReadWriteOnce cannot span nodes, hostPath requires distributing and maintaining copies per node, and re-fetching into emptyDir per pod wastes bandwidth and startup time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Access Modes", "Design"]
  },
  {
    id: "k8s-cka-227",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pods Cannot Be Created After a Certificate Rotation",
    scenario: "After rotating control plane certificates, kubectl works but new pods stay Pending and the scheduler logs show authentication failures.",
    question: "What was probably missed?",
    options: [
      { id: 'A', text: "The nodes need to rejoin the cluster." },
      { id: 'B', text: "The cluster CA was deleted." },
      { id: 'C', text: "etcd must be restored from a snapshot." },
      { id: 'D', text: "The component kubeconfigs in /etc/kubernetes were not regenerated or the static pods were not restarted, so the scheduler is still presenting an old certificate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubeadm certs renew reissues certificates but the control plane components keep using the credentials they loaded at start, and their kubeconfigs embed client certificates - so scheduler.conf, controller-manager.conf, and admin.conf must be regenerated and the static pods restarted. A deleted CA would break kubectl too, and neither rejoining nodes nor restoring etcd addresses stale component credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["Certificates", "Control Plane", "Troubleshooting"]
  },
  {
    id: "k8s-cka-228",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Effect of Deleting a Pod Managed by a Deployment",
    scenario: "An operator deletes a single pod belonging to a three-replica deployment.",
    question: "What happens next?",
    options: [
      { id: 'A', text: "Nothing happens until the deployment is reapplied." },
      { id: 'B', text: "The ReplicaSet observes the shortfall and creates a replacement pod with a new name." },
      { id: 'C', text: "The deployment is scaled down to two replicas permanently." },
      { id: 'D', text: "The same pod is recreated with its original name and IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The ReplicaSet controller continuously reconciles observed against desired replicas, so a deleted pod is replaced within seconds by a new pod with a new name and IP. Deployment replicas are unchanged by a pod deletion, and Deployment pods have no stable identity - that is what StatefulSets provide.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/",
    tags: ["ReplicaSet", "Reconciliation", "Workloads"]
  },
  {
    id: "k8s-cka-229",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Difference Between port and targetPort",
    scenario: "A Service defines port 80 and targetPort 8080, and the pod container listens on 8080.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "targetPort is the node port opened on every node." },
      { id: 'B', text: "Both values must match or the Service is invalid." },
      { id: 'C', text: "Clients connect on 8080 and the pod receives traffic on 80." },
      { id: 'D', text: "Clients connect to the ClusterIP on 80, and kube-proxy forwards to the pod on 8080." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "port is the Service-side port clients dial and targetPort is the container port traffic is delivered to, which is why the two are commonly different. They need not match, and the port exposed on every node is nodePort, a separate field.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Ports", "Networking"]
  },
  {
    id: "k8s-cka-230",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "What an APIService Object Does",
    scenario: "kubectl api-resources begins failing with an error mentioning v1beta1.metrics.k8s.io, and namespace deletions have started hanging.",
    question: "What is the relationship?",
    options: [
      { id: 'A', text: "APIService objects define CRDs, which must be deleted first." },
      { id: 'B', text: "An APIService registers an aggregated API server; when its backing service is unavailable, discovery fails and namespace finalization can block because resources of that group cannot be enumerated." },
      { id: 'C', text: "The error is cosmetic and unrelated to namespace deletion." },
      { id: 'D', text: "APIService controls RBAC for the metrics API only." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The aggregation layer proxies a group/version to another service, so a broken APIService breaks discovery for every client and prevents the namespace controller from confirming that no resources of that group remain - which is exactly why namespaces hang in Terminating. CRDs are a separate extension mechanism.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/",
    tags: ["API Aggregation", "Troubleshooting", "Namespaces"]
  },
  {
    id: "k8s-cka-231",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Tracing a PVC From Creation to a Mounted Volume",
    scenario: "A new StatefulSet pod is created with a volumeClaimTemplate on a CSI-backed StorageClass using WaitForFirstConsumer.",
    question: "Which sequence is correct?",
    options: [
      { id: 'A', text: "PVC created, scheduler selects a node, provisioner creates the PV and binds it, CSI controller attaches it to that node, CSI node plugin stages and publishes it into the pod." },
      { id: 'B', text: "PV created first, then the PVC binds, then the pod is scheduled to wherever the volume already exists." },
      { id: 'C', text: "The kubelet creates the volume directly through the cloud API." },
      { id: 'D', text: "The pod starts first and the volume is attached afterwards without staging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With WaitForFirstConsumer, binding and provisioning deliberately wait for the scheduler so the volume is created in the right topology, after which the controller plugin attaches and the node plugin stages and publishes it before the container starts. Immediate binding would provision before scheduling, and the kubelet delegates volume operations to CSI plugins.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["CSI", "Storage", "Scheduling"]
  },
  {
    id: "k8s-cka-232",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Choosing Which Component Log to Read",
    scenario: "Four symptoms are reported: a pod stuck Pending, a node NotReady, no ReplicaSet created for a new deployment, and every kubectl command failing.",
    question: "Which mapping of symptom to component is correct?",
    options: [
      { id: 'A', text: "All four to the kubelet, since it runs everything on the node." },
      { id: 'B', text: "Pending to the kubelet and NotReady to the scheduler." },
      { id: 'C', text: "Pending to kube-scheduler, NotReady to the kubelet, missing ReplicaSet to kube-controller-manager, and total failure to kube-apiserver or etcd." },
      { id: 'D', text: "All four to etcd, since it stores all state." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each control loop owns a distinct symptom: placement is the scheduler, node health reporting is the kubelet, creating dependent objects is the controller manager, and serving requests is the API server backed by etcd. Matching symptom to owning loop is the fastest way to pick the right log.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/",
    tags: ["Troubleshooting", "Architecture", "Control Plane"]
  },
  {
    id: "k8s-cka-233",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Suspending a CronJob Safely",
    scenario: "Scheduled jobs must stop running during a maintenance window but the CronJob definition must remain in the cluster.",
    question: "Which change achieves that?",
    options: [
      { id: 'A', text: "Setting spec.suspend to true on the CronJob, which stops new Jobs being created without affecting one already running." },
      { id: 'B', text: "Deleting the CronJob and recreating it afterwards." },
      { id: 'C', text: "Scaling the CronJob to zero replicas." },
      { id: 'D', text: "Setting concurrencyPolicy to Forbid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "suspend is the built-in pause switch: the controller stops creating Jobs at scheduled times and resumes when it is set back to false. Forbid only prevents overlapping runs, CronJobs have no replica count, and deleting and recreating loses history and risks being forgotten.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["CronJob", "Operations", "Batch"]
  },
  {
    id: "k8s-cka-234",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Why an Ingress Returns 503 With Healthy Pods",
    scenario: "An Ingress returns 503 for a host, while the backing pods are Running and Ready and their pod IPs answer correctly.",
    question: "Which cause fits best?",
    options: [
      { id: 'A', text: "The ingress controller needs its own PersistentVolume." },
      { id: 'B', text: "The pods are on a different node from the controller." },
      { id: 'C', text: "The Ingress backend references a Service name or port that does not resolve to endpoints - a typo, the wrong port name, or a Service in a different namespace." },
      { id: 'D', text: "The pods lack a liveness probe." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A 503 from an ingress controller means it has no healthy backend for that rule, and with the pods themselves healthy the fault is almost always the Service reference: wrong name, wrong port, or the Service living in another namespace, since Ingress backends are namespace-local. Probes, storage, and node placement would not produce this pattern.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "Troubleshooting", "Services"]
  },
  {
    id: "k8s-cka-235",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Effect of a Failing Admission Webhook",
    scenario: "A validating webhook backend becomes unavailable and pod creation begins failing cluster-wide.",
    question: "Which configuration decides that behaviour, and what is the trade-off?",
    options: [
      { id: 'A', text: "Only mutating webhooks can block requests." },
      { id: 'B', text: "Webhooks are always ignored when unreachable." },
      { id: 'C', text: "failurePolicy: Fail blocks requests when the webhook is unreachable, which is safer for policy but makes the webhook a cluster-wide dependency; Ignore trades enforcement for availability." },
      { id: 'D', text: "The API server retries indefinitely until the webhook responds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "failurePolicy governs what happens when a webhook cannot be reached, and Fail is the secure default that also turns the webhook into a critical dependency - which is why namespaceSelector, objectSelector, and timeouts are used to limit its scope. Both webhook types can reject requests, and the API server does not retry forever.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Control", "Reliability", "Security"]
  }
];

export default K8S_CKA_QUESTIONS_10;
