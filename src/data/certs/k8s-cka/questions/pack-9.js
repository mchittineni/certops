export const K8S_CKA_QUESTIONS_9 = [
  {
    id: "k8s-cka-q-p9-1",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Metrics Server Not Reporting",
    scenario: "kubectl top nodes returns \"error: Metrics API not available\" on a cluster where the metrics-server deployment is running but its pod logs show TLS errors reaching kubelets.",
    question: "What is the usual cause in a self-managed cluster?",
    options: [
      { id: 'A', text: "The Metrics API requires a CustomResourceDefinition to be installed." },
      { id: 'B', text: "metrics-server must run on a control plane node." },
      { id: 'C', text: "The kubelet serving certificates are self-signed and not signed by the cluster CA, so metrics-server needs kubelet certificate rotation enabled or the appropriate TLS flag." },
      { id: 'D', text: "kubectl top requires the Prometheus adapter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "metrics-server scrapes each kubelet over TLS, and self-signed kubelet serving certificates fail verification unless serving certificate rotation signed by the cluster CA is enabled or metrics-server is told to skip verification in a lab. Placement does not matter, the Metrics API is registered through an APIService rather than a CRD, and the Prometheus adapter serves custom metrics rather than kubectl top.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/",
    tags: ["metrics-server", "TLS", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-2",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Purpose of the kube-system Namespace",
    scenario: "A new administrator asks whether application workloads should be deployed into kube-system for convenience.",
    question: "Which answer is correct?",
    options: [
      { id: 'A', text: "Yes, because pods there are exempt from scheduling constraints." },
      { id: 'B', text: "No - kube-system is reserved for cluster components and add-ons, and workloads there often inherit elevated privileges and critical priority classes." },
      { id: 'C', text: "It makes no difference; namespaces are purely cosmetic." },
      { id: 'D', text: "Yes, because kube-system has the highest resource quota by default." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kube-system holds control plane add-ons and system components, and placing applications there mixes blast radius, RBAC, and priority concerns that operators rely on being separate. It has no special quota, pods there are still scheduled normally, and namespaces carry real RBAC, quota, and policy boundaries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    tags: ["Namespaces", "Best Practices", "Cluster Administration"]
  },
  {
    id: "k8s-cka-q-p9-3",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Cluster Autoscaler Cannot Remove a Node",
    scenario: "A mostly empty node is never scaled down by the cluster autoscaler. It runs one pod created directly rather than by a controller, plus DaemonSet pods.",
    question: "Why is the node retained?",
    options: [
      { id: 'A', text: "The node has a taint the autoscaler cannot tolerate." },
      { id: 'B', text: "A bare pod with no controller cannot be safely rescheduled, so the autoscaler will not evict it and the node stays." },
      { id: 'C', text: "DaemonSet pods always block scale-down." },
      { id: 'D', text: "The autoscaler only removes nodes that are completely empty of processes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The cluster autoscaler refuses to remove a node hosting pods it cannot recreate elsewhere, and a pod with no owning controller is the classic blocker along with pods using local storage or restrictive disruption budgets. DaemonSet pods are explicitly ignored for scale-down decisions, and taints and background processes are not the criterion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/",
    tags: ["Cluster Autoscaler", "Scheduling", "Operations"]
  },
  {
    id: "k8s-cka-q-p9-4",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Applying a NetworkPolicy to Traffic From the Internet",
    scenario: "External clients reach an application through an ingress controller in the ingress-nginx namespace. A NetworkPolicy on the application pods must allow that traffic and nothing else.",
    question: "Which source selector is correct?",
    options: [
      { id: 'A', text: "No policy is needed; ingress controller traffic bypasses NetworkPolicy." },
      { id: 'B', text: "An egress rule to the ingress controller namespace." },
      { id: 'C', text: "An ingress rule allowing from the namespaceSelector matching ingress-nginx, because the traffic arrives from the controller pods rather than directly from the internet." },
      { id: 'D', text: "An ipBlock of 0.0.0.0/0, because the clients are on the internet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The ingress controller proxies the request, so from the perspective of the application pod the source is the controller pod, and selecting its namespace is both precise and stable. Allowing the whole internet range is far broader than needed, controller traffic is ordinary pod traffic subject to policy, and an egress rule governs the wrong direction.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Ingress", "Security"]
  },
  {
    id: "k8s-cka-q-p9-5",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Retention Policy for StatefulSet Claims",
    scenario: "A StatefulSet should delete the PersistentVolumeClaims created from its volumeClaimTemplates when the StatefulSet itself is deleted, but keep them when it is merely scaled down.",
    question: "Which configuration expresses that?",
    options: [
      { id: 'A', text: "Setting the PersistentVolume reclaimPolicy to Delete." },
      { id: 'B', text: "persistentVolumeClaimRetentionPolicy with whenDeleted: Retain and whenScaled: Delete." },
      { id: 'C', text: "persistentVolumeClaimRetentionPolicy with whenDeleted: Delete and whenScaled: Retain." },
      { id: 'D', text: "Adding an ownerReference from the PVC to the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The retention policy has separate knobs for the two lifecycle events, so Delete on deletion and Retain on scaling is exactly the described behaviour. Option B inverts it, the PV reclaim policy governs what happens after a claim is deleted rather than when, and hand-written owner references are not the supported mechanism.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSet", "PVC", "Storage"]
  },
  {
    id: "k8s-cka-q-p9-6",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "API Priority and Fairness Under Load",
    scenario: "During an incident, a runaway controller floods the API server with list requests and interactive kubectl commands start failing with 429 Too Many Requests.",
    question: "Which mechanism produced the 429 and how is it tuned?",
    options: [
      { id: 'A', text: "The kubelet event rate limiter." },
      { id: 'B', text: "API Priority and Fairness, tuned with FlowSchema and PriorityLevelConfiguration objects that classify requests and bound their concurrency." },
      { id: 'C', text: "etcd compaction throttling." },
      { id: 'D', text: "A NetworkPolicy rate limit on the API server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "API Priority and Fairness classifies inbound requests into flows through FlowSchemas and gives each priority level a share of concurrency, returning 429 when a level is saturated - which is what isolates a noisy controller from interactive traffic. NetworkPolicy does not rate limit, the kubelet event limiter caps event creation from a node, and etcd compaction is unrelated to HTTP status codes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/flow-control/",
    tags: ["API Priority and Fairness", "API Server", "Reliability"]
  },
  {
    id: "k8s-cka-q-p9-7",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Following Logs in Real Time",
    scenario: "An operator wants to watch new log lines from a pod as they are produced, starting from the last twenty lines.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl logs POD --previous --follow" },
      { id: 'B', text: "kubectl logs -f POD --tail=20" },
      { id: 'C', text: "kubectl logs POD --since=20" },
      { id: 'D', text: "kubectl get events -w" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "-f streams new output and --tail limits the initial backlog to twenty lines. --since expects a duration such as 20m rather than a bare number, following a previous terminated container is not possible because it produces no new output, and events are not application logs.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Logs", "kubectl", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-8",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Ordering StatefulSet Updates",
    scenario: "A StatefulSet update must be applied to only the highest-ordinal pods first for canary testing, leaving lower ordinals on the old revision.",
    question: "Which field supports that?",
    options: [
      { id: 'A', text: "updateStrategy.rollingUpdate.partition set to an ordinal above which pods are updated." },
      { id: 'B', text: "updateStrategy.type: OnDelete" },
      { id: 'C', text: "minReadySeconds set to a large value" },
      { id: 'D', text: "podManagementPolicy: Parallel" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A partition value means only pods with an ordinal greater than or equal to it are updated, which is the built-in canary control for StatefulSets. Parallel management affects creation ordering rather than update scope, OnDelete requires manual pod deletion for every update, and minReadySeconds only slows the roll.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/",
    tags: ["StatefulSet", "Canary", "Updates"]
  },
  {
    id: "k8s-cka-q-p9-9",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Where CoreDNS Configuration Lives",
    scenario: "An operator needs to add a forward rule so queries for internal.corp resolve through a specific upstream server.",
    question: "Which object is edited?",
    options: [
      { id: 'A', text: "The kube-dns Service definition." },
      { id: 'B', text: "The kubelet resolv.conf on each node." },
      { id: 'C', text: "The coredns ConfigMap in kube-system, which holds the Corefile." },
      { id: 'D', text: "The CoreDNS Deployment container arguments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CoreDNS reads its Corefile from the coredns ConfigMap in kube-system, so stub domains and forward rules are added there and picked up after a reload or rollout restart. Node resolver files affect the node rather than cluster DNS, the Service only exposes the pods, and the deployment arguments merely point at the Corefile path.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS", "DNS", "Configuration"]
  },
  {
    id: "k8s-cka-q-p9-10",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing Slow Pod Startup Across the Cluster",
    scenario: "Pods now take several minutes to reach Running everywhere. Events show a long gap between Scheduled and Pulling, and node CPU and memory are healthy.",
    question: "Which cause fits the evidence best?",
    options: [
      { id: 'A', text: "Image pulls are slow or serialised - a saturated registry, a cold image cache, or the kubelet serialising pulls - which the gap before Pulling and Pulled events reveals." },
      { id: 'B', text: "etcd has lost quorum." },
      { id: 'C', text: "The scheduler is overloaded, since pods take long to bind." },
      { id: 'D', text: "The Service endpoints controller is lagging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The pods are already Scheduled, so binding is not the bottleneck; the delay sits in the image lifecycle, which points at registry throughput, cold caches, or serialised pulls on the kubelet. Endpoint lag would affect traffic after startup, and a quorum loss would stop scheduling altogether rather than slow pulls.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["Images", "Performance", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-11",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Effect of Deleting a CustomResourceDefinition",
    scenario: "An operator deletes a CRD that has fifty custom resource instances in use by a running controller.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The deletion is rejected while instances exist." },
      { id: 'B', text: "The instances are converted to ConfigMaps." },
      { id: 'C', text: "All instances of that custom resource are deleted along with the CRD, which can trigger the controller finalizers and destroy the managed infrastructure." },
      { id: 'D', text: "The CRD is removed but the instances remain readable." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deleting a CRD garbage-collects every custom resource of that kind, and if the controller uses finalizers to tear down real infrastructure the effect can cascade far beyond the API - which is why CRD deletion deserves the same care as a database drop. The instances do not survive, the API server does not block the deletion, and no conversion occurs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
    tags: ["CRD", "Safety", "API"]
  },
  {
    id: "k8s-cka-q-p9-12",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "What Happens to emptyDir on Container Restart",
    scenario: "A container using an emptyDir volume crashes and is restarted by the kubelet on the same node.",
    question: "What is the state of the volume data?",
    options: [
      { id: 'A', text: "The data is copied to a PersistentVolume automatically." },
      { id: 'B', text: "The data is deleted on every container restart." },
      { id: 'C', text: "The data survives, because emptyDir is tied to the pod lifetime rather than the container lifetime." },
      { id: 'D', text: "The data survives even if the pod is deleted and recreated." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An emptyDir is created when the pod is assigned to a node and removed when the pod is removed, so a container restart within the same pod keeps the contents. It is not wiped per container, nothing is copied to durable storage, and deleting the pod does destroy the data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["emptyDir", "Volumes", "Pod Lifecycle"]
  },
  {
    id: "k8s-cka-q-p9-13",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Effect of a NoExecute Taint on Running Pods",
    scenario: "An administrator adds the taint maintenance=true:NoExecute to a node that already runs several pods without matching tolerations.",
    question: "What happens to those pods?",
    options: [
      { id: 'A', text: "They are evicted immediately, because NoExecute applies to already-running pods as well as new placements." },
      { id: 'B', text: "They are restarted in place on the same node." },
      { id: 'C', text: "They are paused until the taint is removed." },
      { id: 'D', text: "They continue running; only new pods are affected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "NoExecute is the only taint effect that acts on running pods: those without a matching toleration are evicted, and pods with a toleration carrying tolerationSeconds are evicted after that delay. NoSchedule and PreferNoSchedule affect placement only, and Kubernetes has no pause or in-place restart response to a taint.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints", "Eviction", "Scheduling"]
  },
  {
    id: "k8s-cka-q-p9-14",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Reaching a Service From a Node Rather Than a Pod",
    scenario: "An operator on a worker node runs curl against a Service ClusterIP and it works, but the same curl from a second cluster node fails.",
    question: "Which explanation is most plausible?",
    options: [
      { id: 'A', text: "kube-proxy is not running or has not programmed rules on the failing node, since ClusterIP reachability depends on per-node rules." },
      { id: 'B', text: "The Service needs to be recreated as NodePort to be reachable from nodes." },
      { id: 'C', text: "ClusterIPs are only reachable from the node that hosts the backend pod." },
      { id: 'D', text: "CoreDNS is only deployed on one node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each node reaches a ClusterIP through the iptables or IPVS rules kube-proxy installs locally, so a per-node difference points straight at kube-proxy health on the failing node. ClusterIPs are reachable from any node with working rules, no NodePort is required for node-local access, and the test used an IP address rather than DNS.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "Services", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-15",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Draining a Node That Runs Pods With Local Storage",
    scenario: "kubectl drain fails with an error stating that pods with local storage cannot be deleted without an extra flag.",
    question: "What should the operator consider before proceeding?",
    options: [
      { id: 'A', text: "Deleting the PersistentVolumeClaims first, which preserves the data." },
      { id: 'B', text: "Nothing; the flag is purely cosmetic." },
      { id: 'C', text: "Passing --delete-emptydir-data acknowledges that emptyDir contents on that node will be lost, so it should only be used once that data is known to be disposable." },
      { id: 'D', text: "Adding --force, which safely migrates the local data." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The guard exists because emptyDir data lives only on that node and is destroyed with the pod, so the flag is an explicit acknowledgement rather than a migration. --force applies to unmanaged pods and copies nothing, deleting PVCs destroys data rather than preserving it, and the guard is a genuine safety check.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Drain", "Storage", "Maintenance"]
  },
  {
    id: "k8s-cka-q-p9-16",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Checking Whether an Object Was Actually Changed",
    scenario: "After an apply, an operator wants to confirm which fields the API server accepted and what the current live state is.",
    question: "Which command is most direct?",
    options: [
      { id: 'A', text: "kubectl rollout history for any resource type." },
      { id: 'B', text: "kubectl logs on the API server pod." },
      { id: 'C', text: "kubectl get RESOURCE NAME -o yaml and compare with the manifest, or kubectl diff -f manifest.yaml before applying." },
      { id: 'D', text: "kubectl explain RESOURCE." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Reading the live object as YAML shows exactly what was persisted after defaulting and admission, and kubectl diff previews the change against the live state before applying. API server logs are noisy and not per-object, rollout history exists only for a few workload kinds, and explain documents the schema.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "Declarative", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-17",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Ephemeral Storage Requests and Limits",
    scenario: "A workload writes large temporary files and occasionally fills the node disk, disrupting other pods.",
    question: "Which declaration lets the kubelet contain the offender?",
    options: [
      { id: 'A', text: "A PersistentVolumeClaim with a quota." },
      { id: 'B', text: "A ResourceQuota on the namespace pod count." },
      { id: 'C', text: "requests and limits for ephemeral-storage on the container, so the kubelet evicts that pod when it exceeds its limit." },
      { id: 'D', text: "A memory limit, because page cache counts as disk usage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ephemeral-storage is a first-class resource covering the writable container layer, emptyDir volumes, and logs, so declaring requests and limits lets the scheduler account for it and the kubelet evict the pod that exceeds its own limit rather than an innocent neighbour. Memory limits govern a different resource, a PVC moves the data elsewhere rather than capping local usage, and a pod count quota does not bound disk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Ephemeral Storage", "Resources", "Eviction"]
  },
  {
    id: "k8s-cka-q-p9-18",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployment Rollout Blocked by a ResourceQuota",
    scenario: "A rolling update never creates new pods. Events on the ReplicaSet report \"exceeded quota: compute-resources, requested: requests.cpu=2, used: 18, limited: 20\".",
    question: "Why does the rollout stall and what resolves it?",
    options: [
      { id: 'A', text: "The surge pods would exceed the namespace CPU quota, so either the quota must be raised or maxSurge reduced to zero with a non-zero maxUnavailable." },
      { id: 'B', text: "The scheduler cannot find a node, unrelated to the quota." },
      { id: 'C', text: "The quota blocks deletions, so old pods cannot be removed." },
      { id: 'D', text: "Quotas only apply to new namespaces, so the message is spurious." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A rolling update creates extra pods before removing old ones, and that surge is charged against the namespace quota, so a nearly full quota deadlocks the rollout until headroom is created or the strategy stops surging. Quotas restrict creation rather than deletion, the message explicitly names the quota rather than node capacity, and quotas apply continuously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota", "Deployment", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-19",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Publishing Not-Ready Addresses",
    scenario: "A clustered application needs its peers to discover each other through DNS before any of them pass their readiness probe, otherwise the cluster can never form.",
    question: "Which Service setting allows that bootstrap?",
    options: [
      { id: 'A', text: "externalTrafficPolicy: Cluster" },
      { id: 'B', text: "Removing the readiness probe entirely." },
      { id: 'C', text: "publishNotReadyAddresses: true on the headless Service." },
      { id: 'D', text: "sessionAffinity: ClientIP" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "publishNotReadyAddresses makes DNS return peer addresses before readiness passes, which is how clustered systems break the chicken-and-egg bootstrap while keeping a meaningful readiness signal for client traffic. Session affinity and external traffic policy address unrelated concerns, and deleting the probe throws away real health information.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Headless", "StatefulSet"]
  },
  {
    id: "k8s-cka-q-p9-20",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Selecting Which Objects an Apply Prunes",
    scenario: "A directory of manifests is applied repeatedly, and objects removed from the directory should also be deleted from the cluster.",
    question: "Which approach does that safely?",
    options: [
      { id: 'A', text: "kubectl apply with pruning scoped by a label selector so only objects carrying that label are considered for deletion." },
      { id: 'B', text: "kubectl apply --overwrite=false" },
      { id: 'C', text: "kubectl replace --force for every manifest." },
      { id: 'D', text: "kubectl delete -f on the whole directory before each apply." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pruning removes cluster objects that are no longer present in the applied set, and scoping it with a label selector is what keeps the blast radius to the objects the pipeline owns. Deleting before applying causes an outage every run, replace --force recreates objects unnecessarily, and the overwrite flag only affects conflict handling.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "GitOps", "Declarative"]
  },
  {
    id: "k8s-cka-q-p9-21",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Which Object Owns the Pods of a Deployment",
    scenario: "An operator inspects a pod created by a Deployment and reads its ownerReferences.",
    question: "Which object is named there?",
    options: [
      { id: 'A', text: "The ReplicaSet created by the Deployment." },
      { id: 'B', text: "The Service selecting the pod." },
      { id: 'C', text: "The Deployment itself." },
      { id: 'D', text: "The Node running the pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Deployment owns ReplicaSets and each ReplicaSet owns its pods, so the pod ownerReference points at the ReplicaSet - which is why rollout history appears as a series of ReplicaSets. Services select pods by label without owning them, and nodes host pods without appearing in ownerReferences.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/garbage-collection/",
    tags: ["Deployment", "ReplicaSet", "Ownership"]
  },
  {
    id: "k8s-cka-q-p9-22",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Node Shows Ready but Pods Never Start There",
    scenario: "One node is Ready and untainted, yet the scheduler places nothing on it. describe node shows Unschedulable: true.",
    question: "What explains it?",
    options: [
      { id: 'A', text: "The node has no CNI plugin." },
      { id: 'B', text: "The scheduler has crashed." },
      { id: 'C', text: "The node was cordoned, so it is marked unschedulable and needs kubectl uncordon." },
      { id: 'D', text: "The node kubelet has a stale certificate." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Unschedulable: true is exactly what kubectl cordon sets, often left behind after maintenance, and uncordon clears it. A certificate problem or missing CNI would show as NotReady, and a crashed scheduler would leave pods Pending across the whole cluster rather than on one node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Nodes", "Cordon", "Troubleshooting"]
  },
  {
    id: "k8s-cka-q-p9-23",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Migrating Data Between StorageClasses",
    scenario: "A PVC on a slow StorageClass must move to a faster one with minimal downtime, and the CSI driver supports cloning within a class but not across classes.",
    question: "Which approach is realistic?",
    options: [
      { id: 'A', text: "Provision a new PVC on the fast class, run a copy job that mounts both claims, then repoint the workload at the new claim." },
      { id: 'B', text: "Edit the storageClassName field on the existing PVC." },
      { id: 'C', text: "Change the StorageClass name of the bound PersistentVolume." },
      { id: 'D', text: "Delete the PVC and recreate it with the new class, which preserves the data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A PVC storageClassName is immutable after binding, so migration means creating a claim on the target class, copying the data with a pod that mounts both, and switching the workload over. Editing the field on the claim is rejected, renaming the class on the PV does not move the underlying storage, and deleting the claim risks the data depending on the reclaim policy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Migration", "Operations"]
  },
  {
    id: "k8s-cka-q-p9-24",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "ExternalName Service Semantics",
    scenario: "A Service of type ExternalName maps to db.example.com. A pod connects to the Service name on port 5432.",
    question: "What actually happens?",
    options: [
      { id: 'A', text: "CoreDNS returns a CNAME to db.example.com and the pod connects directly to whatever that resolves to; no proxying and no port mapping occur." },
      { id: 'B', text: "The connection fails unless an Endpoints object is also created." },
      { id: 'C', text: "The Service allocates a ClusterIP that proxies to the external name." },
      { id: 'D', text: "kube-proxy forwards the connection to the external host and rewrites the port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ExternalName is purely a DNS-level alias: CoreDNS answers with a CNAME and the client connects directly, so there is no ClusterIP, no proxying, and no port translation. Endpoints are not involved because no data path is programmed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "ExternalName", "DNS"]
  },
  {
    id: "k8s-cka-q-p9-25",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Verifying a Cluster Upgrade Completed Everywhere",
    scenario: "After upgrading the control plane and worker nodes, the operator must confirm every component now reports the new version.",
    question: "Which two checks together give that confirmation? (Choose two.)",
    options: [
      { id: 'A', text: "kubectl get nodes, which shows the kubelet version per node." },
      { id: 'B', text: "kubectl top nodes, which shows node resource usage." },
      { id: 'C', text: "kubectl version, which shows the client and API server versions." },
      { id: 'D', text: "kubectl get events -A, which lists recent cluster events." }
    ],
    correctAnswers: ['A', 'C'],
    type: "multiple",
    explanation: "The node listing carries a VERSION column reporting each kubelet, and kubectl version reports the API server build, which together cover control plane and nodes. Resource usage and event listings say nothing about component versions.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Upgrades", "Verification", "Cluster Administration"]
  }
];

export default K8S_CKA_QUESTIONS_9;
