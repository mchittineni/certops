export const K8S_CKA_QUESTIONS_5 = [
  {
    id: "k8s-cka-86",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Distinguishing CreateContainerConfigError From ImagePullBackOff",
    scenario: "A pod reports CreateContainerConfigError. The image is present on the node and the registry is reachable.",
    question: "Which cause fits that status?",
    options: [
      { id: 'A', text: "The container exited non-zero on startup." },
      { id: 'B', text: "The registry credentials are wrong." },
      { id: 'C', text: "No node has enough memory for the pod." },
      { id: 'D', text: "The pod references a ConfigMap or Secret key that does not exist." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CreateContainerConfigError is raised when the kubelet cannot assemble the container configuration, almost always because a referenced ConfigMap, Secret, or key is missing. Bad credentials produce ImagePullBackOff, a non-zero exit produces CrashLoopBackOff, and insufficient memory leaves the pod Pending.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/",
    tags: ["Troubleshooting", "ConfigMap", "Secrets"]
  },
  {
    id: "k8s-cka-87",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Recovering etcd Quorum in a Three-Member Cluster",
    scenario: "Two of the three etcd members in an external etcd cluster are permanently lost. The remaining member is healthy but the cluster is read-only and the API server reports errors.",
    question: "Why is the cluster unavailable and what restores it?",
    options: [
      { id: 'A', text: "One of three members cannot form a majority, so the cluster must be rebuilt from a snapshot, typically by restoring a single-member cluster and re-adding members." },
      { id: 'B', text: "Restarting the API server re-elects a leader and restores writes." },
      { id: 'C', text: "Adding a fourth member restores quorum immediately." },
      { id: 'D', text: "etcd continues serving writes with any single surviving member once the others are removed from DNS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Raft requires a majority - two of three - so a lone survivor cannot commit writes, and the supported recovery is a snapshot restore into a new single-member cluster followed by growing it back. etcd does not serve writes without quorum regardless of DNS, the API server does not elect etcd leaders, and new members cannot join a cluster that cannot commit the membership change.",
    referenceUrl: "https://etcd.io/docs/latest/op-guide/recovery/",
    tags: ["etcd", "Quorum", "Disaster Recovery"]
  },
  {
    id: "k8s-cka-88",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "NodePort Range",
    scenario: "A Service of type NodePort is created without specifying a nodePort value.",
    question: "From which range does the API server allocate the port by default?",
    options: [
      { id: 'A', text: "8000-9000" },
      { id: 'B', text: "10250-10259" },
      { id: 'C', text: "30000-32767" },
      { id: 'D', text: "1024-65535" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The default service node port range is 30000-32767, configurable with the API server flag --service-node-port-range. The other ranges describe unprivileged ports generally, an arbitrary application range, and the kubelet and control plane component ports respectively.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "NodePort", "Networking"]
  },
  {
    id: "k8s-cka-89",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler Prerequisites",
    scenario: "An HPA targeting 60 percent CPU utilisation reports \"unknown\" for the current metric and never scales.",
    question: "Which two conditions must be satisfied for CPU-based autoscaling? (Choose two.)",
    options: [
      { id: 'A', text: "metrics-server must be installed and serving the Metrics API." },
      { id: 'B', text: "The pods must run with a Guaranteed QoS class." },
      { id: 'C', text: "The target pods must define CPU requests." },
      { id: 'D', text: "The deployment must set a PodDisruptionBudget." }
    ],
    correctAnswers: ['A', 'C'],
    type: "multiple",
    explanation: "Utilisation-based autoscaling is a percentage of the CPU request, so the pods must declare requests and metrics-server must supply live usage through the Metrics API. A PodDisruptionBudget governs evictions and has no role in autoscaling, and any QoS class works as long as requests exist.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["HPA", "Autoscaling", "Metrics"]
  },
  {
    id: "k8s-cka-90",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "StatefulSet volumeClaimTemplates Behaviour",
    scenario: "A StatefulSet with volumeClaimTemplates is scaled from three replicas down to one and later back up to three.",
    question: "What happens to the PersistentVolumeClaims of the removed pods?",
    options: [
      { id: 'A', text: "They are retained by default and reattached to the pods when the StatefulSet scales back up." },
      { id: 'B', text: "They are merged into the claim of the surviving replica." },
      { id: 'C', text: "They are deleted with the pods and new empty volumes are created on scale-up." },
      { id: 'D', text: "They are marked Released and require manual rebinding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PVCs generated from volumeClaimTemplates outlive their pods by default, keeping per-ordinal data so db-1 gets its original volume back when it returns; deletion behaviour can be changed with persistentVolumeClaimRetentionPolicy. The claims are not deleted, they stay Bound rather than Released, and claims are never merged.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSet", "Storage", "PVC"]
  },
  {
    id: "k8s-cka-91",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Two NetworkPolicies Selecting the Same Pod",
    scenario: "Pod X is selected by policy A, which allows ingress from namespace alpha, and by policy B, which allows ingress from namespace beta.",
    question: "What traffic can reach pod X?",
    options: [
      { id: 'A', text: "Only traffic matching both selectors simultaneously." },
      { id: 'B', text: "Only traffic from alpha, because the first policy wins." },
      { id: 'C', text: "Traffic from alpha and from beta, because policies are additive." },
      { id: 'D', text: "No traffic, because the two policies conflict." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NetworkPolicies are purely additive allow-lists: the union of every policy selecting a pod defines what is permitted, and there is no deny rule or ordering. Nothing conflicts, no policy takes precedence, and the rules are OR-ed rather than AND-ed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Security", "Networking"]
  },
  {
    id: "k8s-cka-92",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Listing Which Resources Exist in the API",
    scenario: "An administrator needs to know the short names, API groups, and namespacing of every resource type the cluster serves, including custom resources.",
    question: "Which command shows that?",
    options: [
      { id: 'A', text: "kubectl explain pod" },
      { id: 'B', text: "kubectl api-resources" },
      { id: 'C', text: "kubectl cluster-info dump" },
      { id: 'D', text: "kubectl get all -A" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl api-resources lists every served resource with its short name, API version, kind, and whether it is namespaced, including CRDs. kubectl get all covers only a small curated subset, explain documents one type schema, and cluster-info dump produces bulk diagnostic output.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_api-resources/",
    tags: ["kubectl", "API", "Discovery"]
  },
  {
    id: "k8s-cka-93",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Application Reachable by Pod IP But Not by Service",
    scenario: "curl to the pod IP on port 8080 succeeds from another pod, but curl to the Service ClusterIP on port 80 times out. The Service has endpoints listed.",
    question: "Which misconfiguration best explains it?",
    options: [
      { id: 'A', text: "The Service is missing an ownerReference to the deployment." },
      { id: 'B', text: "The Service targetPort does not match the port the container listens on." },
      { id: 'C', text: "The pod has no readiness probe." },
      { id: 'D', text: "CoreDNS is not running." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Endpoints exist so the selector is right, which leaves a port mapping error: a Service with port 80 must set targetPort 8080 to reach a container listening there. A missing readiness probe would not remove healthy endpoints, DNS failure would show as name resolution errors rather than a ClusterIP timeout, and Services need no ownerReference.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Services", "Troubleshooting", "Networking"]
  },
  {
    id: "k8s-cka-94",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Assigning a Pod to Nodes With Specific Hardware",
    scenario: "GPU nodes carry the label accelerator=nvidia-tesla. A training job must run only on those nodes, and should remain Pending if none are available.",
    question: "Which pod field expresses the hard requirement most simply?",
    options: [
      { id: 'A', text: "A toleration for the accelerator label" },
      { id: 'B', text: "nodeSelector: { accelerator: nvidia-tesla }" },
      { id: 'C', text: "preferredDuringSchedulingIgnoredDuringExecution node affinity on the label" },
      { id: 'D', text: "nodeName: gpu-node-01" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A nodeSelector is the simplest hard constraint: the scheduler considers only nodes carrying the label and leaves the pod Pending otherwise. Pinning nodeName bypasses the scheduler and targets one machine, the preferred affinity form is a soft hint that allows placement elsewhere, and tolerations relate to taints rather than labels.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
    tags: ["Scheduling", "nodeSelector", "Labels"]
  },
  {
    id: "k8s-cka-95",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "CSI Components and Their Roles",
    scenario: "A CSI driver is being installed and the manifests include a controller Deployment and a node DaemonSet.",
    question: "Which split of responsibilities is correct?",
    options: [
      { id: 'A', text: "The node component talks to the storage API and the controller runs inside each pod." },
      { id: 'B', text: "The controller mounts volumes into pods and the node component provisions storage." },
      { id: 'C', text: "The controller component handles provisioning, attaching, and snapshotting; the node component handles staging, mounting, and formatting on each node." },
      { id: 'D', text: "Both components perform identical work and one is a hot standby." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CSI splits cluster-wide operations - CreateVolume, ControllerPublish, snapshots - into a controller plugin, and per-node operations - NodeStageVolume and NodePublishVolume - into a DaemonSet that must run wherever volumes are mounted. The other options invert or duplicate those roles.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["CSI", "Storage", "Architecture"]
  },
  {
    id: "k8s-cka-96",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Generating a Manifest Without Creating the Object",
    scenario: "An operator wants the YAML for a deployment as a starting point for editing, without creating anything in the cluster.",
    question: "Which command prints it?",
    options: [
      { id: 'A', text: "kubectl apply -f - --dry-run=server" },
      { id: 'B', text: "kubectl get deployment web -o yaml" },
      { id: 'C', text: "kubectl explain deployment --recursive" },
      { id: 'D', text: "kubectl create deployment web --image=nginx --dry-run=client -o yaml" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A client-side dry run with -o yaml renders the object locally and sends nothing to the API server, which is the standard way to scaffold a manifest quickly. A server dry run still contacts the API server and needs input, get requires the object to already exist, and explain prints schema documentation rather than a manifest.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/conventions/",
    tags: ["kubectl", "Manifests", "Productivity"]
  },
  {
    id: "k8s-cka-97",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Enabling the API Server Audit Log",
    scenario: "Security requires a record of every request that mutates cluster objects, written to a file on the control plane node.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Setting audit: true on each namespace." },
      { id: 'B', text: "Turning on the NodeRestriction admission plugin." },
      { id: 'C', text: "Deploying metrics-server with audit mode enabled." },
      { id: 'D', text: "An audit policy file plus the kube-apiserver flags --audit-policy-file and --audit-log-path, with both paths mounted into the static pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Auditing is an API server feature: a policy file decides which requests are recorded and at which stage and level, and the log path flag says where to write, with both host paths added as volumes to the static pod manifest. Namespaces have no audit flag, metrics-server collects resource metrics, and NodeRestriction limits what kubelets may modify.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit", "API Server", "Security"]
  },
  {
    id: "k8s-cka-98",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Pod DNS Search Domains",
    scenario: "A pod in namespace web resolves the short name api successfully even though the Service is api.web.svc.cluster.local.",
    question: "Why does the short name work?",
    options: [
      { id: 'A', text: "The kubelet injects a hosts file entry for every Service." },
      { id: 'B', text: "CoreDNS creates an alias record for every short name." },
      { id: 'C', text: "The pod /etc/resolv.conf contains search domains including web.svc.cluster.local, so short names are expanded." },
      { id: 'D', text: "kube-proxy rewrites DNS queries for local Services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet writes a resolv.conf whose search list starts with the pod namespace, so an unqualified name is tried as api.web.svc.cluster.local first. CoreDNS serves the fully qualified names rather than aliases, kube-proxy does not touch DNS, and /etc/hosts contains only the pod own entries and any hostAliases.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["DNS", "Networking", "CoreDNS"]
  },
  {
    id: "k8s-cka-99",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Sidecar Containers as Restartable Init Containers",
    scenario: "A logging agent must start before the application container, keep running for the life of the pod, and not block pod completion in a Job.",
    question: "Which construct provides that in current Kubernetes?",
    options: [
      { id: 'A', text: "A second regular container listed before the application container." },
      { id: 'B', text: "An init container with restartPolicy: Always, which Kubernetes treats as a sidecar." },
      { id: 'C', text: "A plain init container without a restart policy." },
      { id: 'D', text: "An ephemeral container added at pod creation time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Native sidecars are declared as init containers with restartPolicy: Always - they start in order before the app containers, keep running alongside them, and are excluded from the completion criteria of a Job. Ordinary containers start concurrently with no ordering guarantee, a plain init container must exit before the app starts, and ephemeral containers can only be injected into an already-running pod for debugging.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Sidecar", "Init Containers", "Workloads"]
  },
  {
    id: "k8s-cka-100",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Namespace Stuck in Terminating",
    scenario: "A deleted namespace has remained in Terminating for an hour. Its objects appear gone but the namespace will not disappear.",
    question: "What is the usual cause?",
    options: [
      { id: 'A', text: "The namespace still has a ResourceQuota attached." },
      { id: 'B', text: "kube-proxy has not removed the Service rules yet." },
      { id: 'C', text: "etcd is out of disk space." },
      { id: 'D', text: "A finalizer is waiting on a resource whose controller or aggregated API is unavailable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Namespace deletion blocks on finalizers until every resource in it is cleaned up, and the common trigger is a custom resource whose controller or an aggregated APIService is down, visible in the namespace status conditions. Quotas are deleted like any other namespaced object, kube-proxy rules are not part of the finalization contract, and an etcd disk problem would break far more than one namespace.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/namespaces/",
    tags: ["Namespaces", "Finalizers", "Troubleshooting"]
  },
  {
    id: "k8s-cka-101",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Marking a StorageClass as Default",
    scenario: "Claims that omit storageClassName should be provisioned by the StorageClass named standard.",
    question: "How is that class marked as the cluster default?",
    options: [
      { id: 'A', text: "With the field spec.default: true." },
      { id: 'B', text: "By listing it first alphabetically." },
      { id: 'C', text: "By naming it default." },
      { id: 'D', text: "With the annotation storageclass.kubernetes.io/is-default-class: \"true\"." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The DefaultStorageClass admission plugin looks for the storageclass.kubernetes.io/is-default-class annotation and stamps that class onto claims with no class set. The object name, a non-existent spec field, and alphabetical order have no effect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/change-default-storage-class/",
    tags: ["StorageClass", "Storage", "Defaults"]
  },
  {
    id: "k8s-cka-102",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Authorization and the NodeRestriction Plugin",
    scenario: "A hardening review asks what stops a compromised kubelet from modifying pods on other nodes or editing arbitrary node objects.",
    question: "Which mechanism provides that limit?",
    options: [
      { id: 'A', text: "The AlwaysPullImages admission plugin." },
      { id: 'B', text: "The ServiceAccount token volume projection." },
      { id: 'C', text: "A default-deny NetworkPolicy in kube-system." },
      { id: 'D', text: "The Node authorizer combined with the NodeRestriction admission plugin." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Node authorizer grants each kubelet access only to the objects related to its own pods, and NodeRestriction additionally prevents it from modifying other node objects or their labels. AlwaysPullImages forces image pulls, NetworkPolicy filters traffic, and projected tokens improve token hygiene rather than restricting kubelet authority.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/node/",
    tags: ["Security", "Authorization", "kubelet"]
  },
  {
    id: "k8s-cka-103",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "EndpointSlices Replacing Endpoints",
    scenario: "A very large Service backs several thousand pods and the team is reviewing how membership is tracked.",
    question: "Why did Kubernetes introduce EndpointSlices?",
    options: [
      { id: 'A', text: "EndpointSlices allow Services to span clusters automatically." },
      { id: 'B', text: "EndpointSlices replace the need for kube-proxy." },
      { id: 'C', text: "EndpointSlices add layer 7 routing that Endpoints lacked." },
      { id: 'D', text: "A single Endpoints object holding thousands of addresses caused large, frequently rewritten objects; slices shard the membership into smaller chunks that scale and update more cheaply." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "EndpointSlices exist for scalability: membership is split across multiple smaller objects, reducing the watch and update cost that a single monolithic Endpoints object imposed, and they also carry topology and per-address condition data. They add no L7 routing, kube-proxy still programs the data plane, and multi-cluster Services require additional components.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/",
    tags: ["EndpointSlices", "Scalability", "Services"]
  },
  {
    id: "k8s-cka-104",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing a Slow API Server",
    scenario: "kubectl commands take many seconds. The API server pod is running and etcd shows high disk latency in its metrics.",
    question: "Which conclusion is best supported?",
    options: [
      { id: 'A', text: "The scheduler is overloaded and should be scaled out." },
      { id: 'B', text: "kube-proxy is throttling API traffic." },
      { id: 'C', text: "etcd write latency is the bottleneck, so faster disks or reduced write churn on the control plane are the fix." },
      { id: 'D', text: "CoreDNS needs more replicas." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Every API write is an etcd write, so etcd disk latency directly translates into slow API responses; etcd is notoriously sensitive to fsync latency and wants low-latency local storage. The scheduler runs as a single active leader and does not serve kubectl, kube-proxy does not proxy API traffic, and DNS capacity does not affect API latency.",
    referenceUrl: "https://etcd.io/docs/latest/op-guide/performance/",
    tags: ["etcd", "Performance", "Troubleshooting"]
  },
  {
    id: "k8s-cka-105",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Labels Versus Annotations",
    scenario: "A team wants to attach a long change-management ticket URL to a deployment, and separately to allow selection of the deployment pods by environment.",
    question: "Which mapping is correct?",
    options: [
      { id: 'A', text: "Both belong in annotations for consistency." },
      { id: 'B', text: "The ticket URL belongs in an annotation; the environment belongs in a label." },
      { id: 'C', text: "Both belong in labels so they can be selected." },
      { id: 'D', text: "The ticket URL belongs in a label and the environment in an annotation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Labels are indexed identifying metadata used by selectors and are limited to 63 characters of restricted syntax, while annotations hold arbitrary non-identifying data such as URLs and are never used for selection. Putting a URL in a label breaks the value syntax, and putting the environment in an annotation makes it unselectable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",
    tags: ["Labels", "Annotations", "Objects"]
  },
  {
    id: "k8s-cka-106",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Which Files Configure the kubelet on a kubeadm Node",
    scenario: "A kubelet setting such as the eviction threshold must be changed persistently on a kubeadm-managed node.",
    question: "Which file is the right place?",
    options: [
      { id: 'A', text: "/etc/kubernetes/manifests/kubelet.yaml" },
      { id: 'B', text: "/var/lib/kubelet/config.yaml, the KubeletConfiguration file the kubeadm-managed unit points at." },
      { id: 'C', text: "/etc/cni/net.d/10-flannel.conflist" },
      { id: 'D', text: "/etc/kubernetes/admin.conf" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm writes a KubeletConfiguration to /var/lib/kubelet/config.yaml and the systemd drop-in points the kubelet at it, so persistent settings go there followed by a kubelet restart. The kubelet is not a static pod, admin.conf is a kubeconfig for cluster access, and the CNI conflist configures pod networking.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/",
    tags: ["kubelet", "Configuration", "kubeadm"]
  },
  {
    id: "k8s-cka-107",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "hostPath Risks in a Multi-Tenant Cluster",
    scenario: "A developer proposes using a hostPath volume so their pod can write directly to /var/log on the node.",
    question: "Which objection is technically correct?",
    options: [
      { id: 'A', text: "hostPath data is deleted when the pod restarts." },
      { id: 'B', text: "hostPath requires a PersistentVolumeClaim to be created first." },
      { id: 'C', text: "hostPath volumes cannot be mounted read-write." },
      { id: 'D', text: "hostPath exposes the node filesystem to the pod, is not portable across nodes, and is disallowed by the baseline and restricted Pod Security Standards." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "hostPath gives a workload direct access to the node filesystem, which is both a privilege escalation path and a portability problem because the pod is tied to whatever node holds that data - which is why the baseline and restricted standards forbid it. It can be mounted read-write, it needs no claim, and its data persists on the node after the pod goes away.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["hostPath", "Security", "Storage"]
  },
  {
    id: "k8s-cka-108",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Dual-Stack Service Configuration",
    scenario: "A dual-stack cluster must expose a Service that answers on both an IPv4 and an IPv6 ClusterIP.",
    question: "Which Service setting achieves that?",
    options: [
      { id: 'A', text: "Two Services with the same selector and different clusterIP values." },
      { id: 'B', text: "externalTrafficPolicy: Local on an IPv6-only Service." },
      { id: 'C', text: "ipFamilyPolicy: RequireDualStack with both IPv4 and IPv6 listed in ipFamilies." },
      { id: 'D', text: "ipFamilyPolicy: SingleStack with ipFamilies listing both families." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "RequireDualStack asks the API server to allocate a ClusterIP from each family, and PreferDualStack degrades gracefully on a single-stack cluster. SingleStack allocates one address regardless of the ipFamilies list, two Services are a workaround rather than dual-stack, and externalTrafficPolicy concerns source IP preservation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dual-stack/",
    tags: ["Dual-Stack", "Services", "Networking"]
  },
  {
    id: "k8s-cka-109",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deleting a Deployment but Keeping Its Pods",
    scenario: "A deployment object must be removed for a migration while its running pods keep serving traffic until a replacement controller adopts them.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl delete deployment web --cascade=orphan" },
      { id: 'B', text: "kubectl scale deployment web --replicas=0 then delete it" },
      { id: 'C', text: "kubectl delete deployment web --force --grace-period=0" },
      { id: 'D', text: "kubectl delete deployment web --cascade=foreground" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "--cascade=orphan deletes only the named object and leaves its dependents - the ReplicaSet and pods - running without an owner. Force deletion still cascades to dependents by default, foreground cascade explicitly waits for dependents to be deleted first, and scaling to zero removes exactly the pods that must keep serving.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/garbage-collection/",
    tags: ["Garbage Collection", "kubectl", "Workloads"]
  },
  {
    id: "k8s-cka-110",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Container Runtime Inspection With crictl",
    scenario: "On a node where kubectl is unavailable, an operator must list running containers and read the logs of one of them directly from containerd.",
    question: "Which commands do that?",
    options: [
      { id: 'A', text: "systemctl status containerd and journalctl -u containerd only." },
      { id: 'B', text: "crictl ps to list containers and crictl logs CONTAINER_ID to read output." },
      { id: 'C', text: "kubeadm inspect containers." },
      { id: 'D', text: "docker ps and docker logs, which always work with containerd." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "crictl speaks the CRI directly, so ps and logs work against containerd or CRI-O without the API server. The docker CLI does not manage containerd CRI containers on a dockershim-free cluster, the containerd journal shows daemon messages rather than per-container output, and kubeadm has no inspect containers command.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/crictl/",
    tags: ["crictl", "Container Runtime", "Troubleshooting"]
  }
];

export default K8S_CKA_QUESTIONS_5;
