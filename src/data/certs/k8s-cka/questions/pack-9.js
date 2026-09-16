export const K8S_CKA_QUESTIONS_9 = [
  {
    id: "k8s-cka-186",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Metrics Server Not Reporting",
    scenario: "kubectl top nodes returns \"error: Metrics API not available\" on a cluster where the metrics-server deployment is running but its pod logs show TLS errors reaching kubelets.",
    question: "What is the usual cause in a self-managed cluster?",
    options: [
      { id: 'A', text: "The kubelet serving certificates are self-signed, so certificate rotation or the TLS flag is needed." },
      { id: 'B', text: "The Metrics API needs a CustomResourceDefinition installed before `kubectl top` can query it." },
      { id: 'C', text: "`kubectl top` needs the Prometheus adapter, since metrics-server serves only the HPA." },
      { id: 'D', text: "metrics-server has to run on a control plane node to reach the kubelet's read-only port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "metrics-server scrapes each kubelet over TLS, and self-signed kubelet serving certificates fail verification unless serving certificate rotation signed by the cluster CA is enabled or metrics-server is told to skip verification in a lab. Placement does not matter, the Metrics API is registered through an APIService rather than a CRD, and the Prometheus adapter serves custom metrics rather than kubectl top.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/",
    tags: ["metrics-server", "TLS", "Troubleshooting"]
  },
  {
    id: "k8s-cka-187",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Purpose of the kube-system Namespace",
    scenario: "A new administrator asks whether application workloads should be deployed into kube-system for convenience.",
    question: "Which answer is correct?",
    options: [
      { id: 'A', text: "Yes — `kube-system` carries the highest default resource quota in the cluster." },
      { id: 'B', text: "Yes — pods in `kube-system` are exempt from the scheduler's own constraints." },
      { id: 'C', text: "No — `kube-system` is for cluster components, whose privileges workloads inherit." },
      { id: 'D', text: "It makes no difference, since namespaces only scope names and quotas." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kube-system holds control plane add-ons and system components, and placing applications there mixes blast radius, RBAC, and priority concerns that operators rely on being separate. It has no special quota, pods there are still scheduled normally, and namespaces carry real RBAC, quota, and policy boundaries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    tags: ["Namespaces", "Best Practices", "Cluster Administration"]
  },
  {
    id: "k8s-cka-188",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Cluster Autoscaler Cannot Remove a Node",
    scenario: "A mostly empty node is never scaled down by the cluster autoscaler. It runs one pod created directly rather than by a controller, plus DaemonSet pods.",
    question: "Why is the node retained?",
    options: [
      { id: 'A', text: "A bare pod has no controller to recreate it, so the autoscaler will not evict it." },
      { id: 'B', text: "The autoscaler removes only nodes that are entirely empty of any process." },
      { id: 'C', text: "DaemonSet pods block scale-down, and one is running on that node." },
      { id: 'D', text: "The node carries a taint the autoscaler is not configured to tolerate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The cluster autoscaler refuses to remove a node hosting pods it cannot recreate elsewhere, and a pod with no owning controller is the classic blocker along with pods using local storage or restrictive disruption budgets. DaemonSet pods are explicitly ignored for scale-down decisions, and taints and background processes are not the criterion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/",
    tags: ["Cluster Autoscaler", "Scheduling", "Operations"]
  },
  {
    id: "k8s-cka-189",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Applying a NetworkPolicy to Traffic From the Internet",
    scenario: "External clients reach an application through an ingress controller in the ingress-nginx namespace. A NetworkPolicy on the application pods must allow that traffic and nothing else.",
    question: "Which source selector is correct?",
    options: [
      { id: 'A', text: "An ingress rule with an `ipBlock` of `0.0.0.0/0`, since the clients are out on the internet." },
      { id: 'B', text: "An egress rule to the ingress controller's namespace, so the reply path is permitted." },
      { id: 'C', text: "No policy at all, since ingress controller traffic is exempt from NetworkPolicy." },
      { id: 'D', text: "An ingress rule with a `namespaceSelector` for `ingress-nginx`, where the traffic comes from." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The ingress controller proxies the request, so from the perspective of the application pod the source is the controller pod, and selecting its namespace is both precise and stable. Allowing the whole internet range is far broader than needed, controller traffic is ordinary pod traffic subject to policy, and an egress rule governs the wrong direction.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Ingress", "Security"]
  },
  {
    id: "k8s-cka-190",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Retention Policy for StatefulSet Claims",
    scenario: "A StatefulSet should delete the PersistentVolumeClaims created from its volumeClaimTemplates when the StatefulSet itself is deleted, but keep them when it is merely scaled down.",
    question: "Which configuration expresses that?",
    options: [
      { id: 'A', text: "persistentVolumeClaimRetentionPolicy with whenDeleted: Retain and whenScaled: Delete." },
      { id: 'B', text: "Setting the PersistentVolume reclaimPolicy to Delete." },
      { id: 'C', text: "persistentVolumeClaimRetentionPolicy with whenDeleted: Delete and whenScaled: Retain." },
      { id: 'D', text: "Adding an ownerReference from the PVC to the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The retention policy has separate knobs for the two lifecycle events, so Delete on deletion and Retain on scaling is exactly the described behaviour. Retaining on deletion and deleting on scale-down inverts the requirement, the PV reclaim policy governs what happens after a claim is deleted rather than when, and hand-written owner references are not the supported mechanism.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSet", "PVC", "Storage"]
  },
  {
    id: "k8s-cka-191",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "API Priority and Fairness Under Load",
    scenario: "During an incident, a runaway controller floods the API server with list requests and interactive kubectl commands start failing with 429 Too Many Requests.",
    question: "Which mechanism produced the 429 and how is it tuned?",
    options: [
      { id: 'A', text: "The kubelet's event rate limiter, tuned through its `eventRecordQPS` setting." },
      { id: 'B', text: "etcd compaction throttling, tuned with the API server's compaction interval." },
      { id: 'C', text: "API Priority and Fairness, tuned with `FlowSchema` and `PriorityLevelConfiguration` objects." },
      { id: 'D', text: "The API server's `--max-requests-inflight` cap, tuned per control plane node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "API Priority and Fairness classifies inbound requests into flows through FlowSchemas and gives each priority level a share of concurrency, returning 429 when a level is saturated - which is what isolates a noisy controller from interactive traffic. NetworkPolicy does not rate limit, the kubelet event limiter caps event creation from a node, and etcd compaction is unrelated to HTTP status codes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/flow-control/",
    tags: ["API Priority and Fairness", "API Server", "Reliability"]
  },
  {
    id: "k8s-cka-192",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Following Logs in Real Time",
    scenario: "An operator wants to watch new log lines from a pod as they are produced, starting from the last twenty lines.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl get events -w" },
      { id: 'B', text: "kubectl logs POD --previous --follow" },
      { id: 'C', text: "kubectl logs -f POD --tail=20" },
      { id: 'D', text: "kubectl logs POD --since=20" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "-f streams new output and --tail limits the initial backlog to twenty lines. --since expects a duration such as 20m rather than a bare number, following a previous terminated container is not possible because it produces no new output, and events are not application logs.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Logs", "kubectl", "Troubleshooting"]
  },
  {
    id: "k8s-cka-193",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Ordering StatefulSet Updates",
    scenario: "A StatefulSet update must be applied to only the highest-ordinal pods first for canary testing, leaving lower ordinals on the old revision.",
    question: "Which field supports that?",
    options: [
      { id: 'A', text: "`minReadySeconds`, set high enough to pause between each replica." },
      { id: 'B', text: "`podManagementPolicy: Parallel`, which starts the replicas at once." },
      { id: 'C', text: "`updateStrategy.rollingUpdate.partition`, above which the ordinals are updated." },
      { id: 'D', text: "`updateStrategy.type: OnDelete`, which updates a pod when deleted." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A partition value means only pods with an ordinal greater than or equal to it are updated, which is the built-in canary control for StatefulSets. Parallel management affects creation ordering rather than update scope, OnDelete requires manual pod deletion for every update, and minReadySeconds only slows the roll.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/",
    tags: ["StatefulSet", "Canary", "Updates"]
  },
  {
    id: "k8s-cka-194",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Where CoreDNS Configuration Lives",
    scenario: "An operator needs to add a forward rule so queries for internal.corp resolve through a specific upstream server.",
    question: "Which object is edited?",
    options: [
      { id: 'A', text: "The CoreDNS Deployment's container arguments" },
      { id: 'B', text: "The `coredns` ConfigMap, which holds the Corefile" },
      { id: 'C', text: "The `kube-dns` Service definition's own spec" },
      { id: 'D', text: "The kubelet's `resolv.conf` on each node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CoreDNS reads its Corefile from the coredns ConfigMap in kube-system, so stub domains and forward rules are added there and picked up after a reload or rollout restart. Node resolver files affect the node rather than cluster DNS, the Service only exposes the pods, and the deployment arguments merely point at the Corefile path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS", "DNS", "Configuration"]
  },
  {
    id: "k8s-cka-195",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Slow Pod Startup Across the Cluster",
    scenario: "Pods now take several minutes to reach Running everywhere. Events show a long gap between Scheduled and Pulling, and node CPU and memory are healthy.",
    question: "Which cause fits the evidence best?",
    options: [
      { id: 'A', text: "Image pulls are slow or serialised, as the gap before `Pulled` shows." },
      { id: 'B', text: "The scheduler is overloaded, which is why the pods take so long to be bound to a node." },
      { id: 'C', text: "etcd has lost quorum, so the API server is slow to persist each pod's status update." },
      { id: 'D', text: "The endpoints controller is lagging, so the pods are ready before the Service reflects it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The pods are already Scheduled, so binding is not the bottleneck; the delay sits in the image lifecycle, which points at registry throughput, cold caches, or serialised pulls on the kubelet. Endpoint lag would affect traffic after startup, and a quorum loss would stop scheduling altogether rather than slow pulls.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["Images", "Performance", "Troubleshooting"]
  },
  {
    id: "k8s-cka-196",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Effect of Deleting a CustomResourceDefinition",
    scenario: "An operator deletes a CRD that has fifty custom resource instances in use by a running controller.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The instances are retained as unstructured objects until a matching CRD is applied again." },
      { id: 'B', text: "Every instance is deleted with the CRD, which can run finalizers and destroy infrastructure." },
      { id: 'C', text: "The deletion is refused while instances exist, so each object has to be removed first." },
      { id: 'D', text: "The CRD is removed and the instances stay readable through the aggregated discovery API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deleting a CRD garbage-collects every custom resource of that kind, and if the controller uses finalizers to tear down real infrastructure the effect can cascade far beyond the API - which is why CRD deletion deserves the same care as a database drop. The instances do not survive, the API server does not block the deletion, and no conversion occurs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
    tags: ["CRD", "Safety", "API"]
  },
  {
    id: "k8s-cka-197",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "What Happens to emptyDir on Container Restart",
    scenario: "A container using an emptyDir volume crashes and is restarted by the kubelet on the same node.",
    question: "What is the state of the volume data?",
    options: [
      { id: 'A', text: "The data survives, since `emptyDir` follows the pod rather than the container." },
      { id: 'B', text: "The data is discarded on every container restart within the pod." },
      { id: 'C', text: "The data is copied into a PersistentVolume by the kubelet first." },
      { id: 'D', text: "The data survives even the pod being deleted and recreated." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An emptyDir is created when the pod is assigned to a node and removed when the pod is removed, so a container restart within the same pod keeps the contents. It is not wiped per container, nothing is copied to durable storage, and deleting the pod does destroy the data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["emptyDir", "Volumes", "Pod Lifecycle"]
  },
  {
    id: "k8s-cka-198",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Effect of a NoExecute Taint on Running Pods",
    scenario: "An administrator adds the taint maintenance=true:NoExecute to a node that already runs several pods without matching tolerations.",
    question: "What happens to those pods?",
    options: [
      { id: 'A', text: "They are paused until the taint is removed from the node again." },
      { id: 'B', text: "They are restarted in place on the same node by the kubelet." },
      { id: 'C', text: "They keep running, since the taint only affects new placements." },
      { id: 'D', text: "They are evicted at once, since `NoExecute` applies to running pods as well." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "NoExecute is the only taint effect that acts on running pods: those without a matching toleration are evicted, and pods with a toleration carrying tolerationSeconds are evicted after that delay. NoSchedule and PreferNoSchedule affect placement only, and Kubernetes has no pause or in-place restart response to a taint.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints", "Eviction", "Scheduling"]
  },
  {
    id: "k8s-cka-199",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Reaching a Service From a Node Rather Than a Pod",
    scenario: "An operator on a worker node runs curl against a Service ClusterIP and it works, but the same curl from a second cluster node fails.",
    question: "Which explanation is most plausible?",
    options: [
      { id: 'A', text: "The Service has to be recreated as `NodePort` before it is reachable from a node." },
      { id: 'B', text: "CoreDNS runs on only one node, so the name resolves nowhere else in the cluster." },
      { id: 'C', text: "kube-proxy is not running on that node, and ClusterIP reachability needs its per-node rules." },
      { id: 'D', text: "ClusterIPs are reachable only from the node hosting the backend pod behind them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each node reaches a ClusterIP through the iptables or IPVS rules kube-proxy installs locally, so a per-node difference points straight at kube-proxy health on the failing node. ClusterIPs are reachable from any node with working rules, no NodePort is required for node-local access, and the test used an IP address rather than DNS.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "Services", "Troubleshooting"]
  },
  {
    id: "k8s-cka-200",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Draining a Node That Runs Pods With Local Storage",
    scenario: "kubectl drain fails with an error stating that pods with local storage cannot be deleted without an extra flag.",
    question: "What should the operator consider before proceeding?",
    options: [
      { id: 'A', text: "`--force` deletes pods with no controller, migrating their local data to the replacement pods." },
      { id: 'B', text: "The flag only silences a warning, since emptyDir volumes are reattached on the new node." },
      { id: 'C', text: "`--delete-emptydir-data` accepts that emptyDir contents on that node are lost, so use it only on disposable data." },
      { id: 'D', text: "Deleting the PersistentVolumeClaims first preserves the data, since the volumes are then released." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The guard exists because emptyDir data lives only on that node and is destroyed with the pod, so the flag is an explicit acknowledgement rather than a migration. --force applies to unmanaged pods and copies nothing, deleting PVCs destroys data rather than preserving it, and the guard is a genuine safety check.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Drain", "Storage", "Maintenance"]
  },
  {
    id: "k8s-cka-201",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Checking Whether an Object Was Actually Changed",
    scenario: "After an apply, an operator wants to confirm which fields the API server accepted and what the current live state is.",
    question: "Which command is most direct?",
    options: [
      { id: 'A', text: "`kubectl explain RESOURCE --recursive` to compare the schema with the manifest." },
      { id: 'B', text: "`kubectl get RESOURCE -o yaml` against the manifest, or `kubectl diff -f` before applying." },
      { id: 'C', text: "`kubectl logs` on the API server static pod to see what the apply actually sent." },
      { id: 'D', text: "`kubectl rollout history` on the resource to compare the stored revisions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Reading the live object as YAML shows exactly what was persisted after defaulting and admission, and kubectl diff previews the change against the live state before applying. API server logs are noisy and not per-object, rollout history exists only for a few workload kinds, and explain documents the schema.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "Declarative", "Troubleshooting"]
  },
  {
    id: "k8s-cka-202",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Ephemeral Storage Requests and Limits",
    scenario: "A workload writes large temporary files and occasionally fills the node disk, disrupting other pods.",
    question: "Which declaration lets the kubelet contain the offender?",
    options: [
      { id: 'A', text: "A `ResourceQuota` on the namespace's pod count, which bounds what it can write in total." },
      { id: 'B', text: "A memory limit, since the page cache backing those writes counts against it." },
      { id: 'C', text: "`ephemeral-storage` requests and limits, so the kubelet evicts that pod when it exceeds them." },
      { id: 'D', text: "A PersistentVolumeClaim with a quota, so the writes land on bounded storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ephemeral-storage is a first-class resource covering the writable container layer, emptyDir volumes, and logs, so declaring requests and limits lets the scheduler account for it and the kubelet evict the pod that exceeds its own limit rather than an innocent neighbour. Memory limits govern a different resource, a PVC moves the data elsewhere rather than capping local usage, and a pod count quota does not bound disk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Ephemeral Storage", "Resources", "Eviction"]
  },
  {
    id: "k8s-cka-203",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployment Rollout Blocked by a ResourceQuota",
    scenario: "A rolling update never creates new pods. Events on the ReplicaSet report \"exceeded quota: compute-resources, requested: requests.cpu=2, used: 18, limited: 20\".",
    question: "Why does the rollout stall and what resolves it?",
    options: [
      { id: 'A', text: "Quotas apply only to newly created namespaces, so the message is spurious here." },
      { id: 'B', text: "The scheduler cannot find a node with capacity, which is unrelated to the quota." },
      { id: 'C', text: "The quota blocks deletions as well, so the old pods cannot be removed first." },
      { id: 'D', text: "The surge pods would exceed the namespace CPU quota, so raise the quota or set `maxSurge: 0`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A rolling update creates extra pods before removing old ones, and that surge is charged against the namespace quota, so a nearly full quota deadlocks the rollout until headroom is created or the strategy stops surging. Quotas restrict creation rather than deletion, the message explicitly names the quota rather than node capacity, and quotas apply continuously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota", "Deployment", "Troubleshooting"]
  },
  {
    id: "k8s-cka-204",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Publishing Not-Ready Addresses",
    scenario: "A clustered application needs its peers to discover each other through DNS before any of them pass their readiness probe, otherwise the cluster can never form.",
    question: "Which Service setting allows that bootstrap?",
    options: [
      { id: 'A', text: "`publishNotReadyAddresses: true` on the headless Service" },
      { id: 'B', text: "Removing the readiness probe from the pod template" },
      { id: 'C', text: "`externalTrafficPolicy: Cluster` on the Service" },
      { id: 'D', text: "`sessionAffinity: ClientIP` on the Service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "publishNotReadyAddresses makes DNS return peer addresses before readiness passes, which is how clustered systems break the chicken-and-egg bootstrap while keeping a meaningful readiness signal for client traffic. Session affinity and external traffic policy address unrelated concerns, and deleting the probe throws away real health information.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Headless", "StatefulSet"]
  },
  {
    id: "k8s-cka-205",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Selecting Which Objects an Apply Prunes",
    scenario: "A directory of manifests is applied repeatedly, and objects removed from the directory should also be deleted from the cluster.",
    question: "Which approach does that safely?",
    options: [
      { id: 'A', text: "`kubectl replace --force` for each manifest, which recreates the objects in place." },
      { id: 'B', text: "`kubectl delete -f` over the directory before each apply of the new manifests." },
      { id: 'C', text: "`kubectl apply` with pruning scoped by a label selector, so only labelled objects are deleted." },
      { id: 'D', text: "`kubectl apply --overwrite=false`, which leaves removed objects untouched." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pruning removes cluster objects that are no longer present in the applied set, and scoping it with a label selector is what keeps the blast radius to the objects the pipeline owns. Deleting before applying causes an outage every run, replace --force recreates objects unnecessarily, and the overwrite flag only affects conflict handling.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "GitOps", "Declarative"]
  },
  {
    id: "k8s-cka-206",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Which Object Owns the Pods of a Deployment",
    scenario: "An operator inspects a pod created by a Deployment and reads its ownerReferences.",
    question: "Which object is named there?",
    options: [
      { id: 'A', text: "The Service selecting the pod." },
      { id: 'B', text: "The Deployment itself." },
      { id: 'C', text: "The ReplicaSet created by the Deployment." },
      { id: 'D', text: "The Node running the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Deployment owns ReplicaSets and each ReplicaSet owns its pods, so the pod ownerReference points at the ReplicaSet - which is why rollout history appears as a series of ReplicaSets. Services select pods by label without owning them, and nodes host pods without appearing in ownerReferences.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/garbage-collection/",
    tags: ["Deployment", "ReplicaSet", "Ownership"]
  },
  {
    id: "k8s-cka-207",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Node Shows Ready but Pods Never Start There",
    scenario: "One node is Ready and untainted, yet the scheduler places nothing on it. describe node shows Unschedulable: true.",
    question: "What explains it?",
    options: [
      { id: 'A', text: "The node was cordoned, so it is unschedulable until `kubectl uncordon`." },
      { id: 'B', text: "The node has no CNI plugin, so the kubelet reports it as unready." },
      { id: 'C', text: "The node's kubelet certificate is stale and needs to be rotated." },
      { id: 'D', text: "The scheduler has crashed and no pod is being placed at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unschedulable: true is exactly what kubectl cordon sets, often left behind after maintenance, and uncordon clears it. A certificate problem or missing CNI would show as NotReady, and a crashed scheduler would leave pods Pending across the whole cluster rather than on one node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Nodes", "Cordon", "Troubleshooting"]
  },
  {
    id: "k8s-cka-208",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Migrating Data Between StorageClasses",
    scenario: "A PVC on a slow StorageClass must move to a faster one with minimal downtime, and the CSI driver supports cloning within a class but not across classes.",
    question: "Which approach is realistic?",
    options: [
      { id: 'A', text: "Edit the `storageClassName` on the existing claim so it moves to the new class." },
      { id: 'B', text: "Change the `storageClassName` on the bound PersistentVolume to the new class." },
      { id: 'C', text: "Provision a new claim on the fast class, copy the data across, then repoint the workload." },
      { id: 'D', text: "Delete the claim and recreate it on the new class, which keeps the bound data." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A PVC storageClassName is immutable after binding, so migration means creating a claim on the target class, copying the data with a pod that mounts both, and switching the workload over. Editing the field on the claim is rejected, renaming the class on the PV does not move the underlying storage, and deleting the claim risks the data depending on the reclaim policy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Migration", "Operations"]
  },
  {
    id: "k8s-cka-209",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalName Service Semantics",
    scenario: "A Service of type ExternalName maps to db.example.com. A pod connects to the Service name on port 5432.",
    question: "What actually happens?",
    options: [
      { id: 'A', text: "CoreDNS returns a CNAME and the pod connects directly; no proxying or port mapping happens." },
      { id: 'B', text: "The Service is allocated a ClusterIP that proxies onward to the external name." },
      { id: 'C', text: "kube-proxy forwards the connection to the external host and rewrites the port." },
      { id: 'D', text: "The connection fails unless an Endpoints object is created alongside it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ExternalName is purely a DNS-level alias: CoreDNS answers with a CNAME and the client connects directly, so there is no ClusterIP, no proxying, and no port translation. Endpoints are not involved because no data path is programmed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "ExternalName", "DNS"]
  },
  {
    id: "k8s-cka-210",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Verifying a Cluster Upgrade Completed Everywhere",
    scenario: "After upgrading the control plane and worker nodes, the operator must confirm every component now reports the new version.",
    question: "Which two checks together give that confirmation? (Choose two.)",
    options: [
      { id: 'A', text: "kubectl version, which shows the client and API server versions." },
      { id: 'B', text: "kubectl get events -A, which lists recent cluster events." },
      { id: 'C', text: "kubectl get nodes, which shows the kubelet version per node." },
      { id: 'D', text: "kubectl top nodes, which shows node resource usage." }
    ],
    correctAnswers: ['A', 'C'],
    type: "multiple",
    explanation: "The node listing carries a VERSION column reporting each kubelet, and kubectl version reports the API server build, which together cover control plane and nodes. Resource usage and event listings say nothing about component versions.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Upgrades", "Verification", "Cluster Administration"]
  }
];

export default K8S_CKA_QUESTIONS_9;
