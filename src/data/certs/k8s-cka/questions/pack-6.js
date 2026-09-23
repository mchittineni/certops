export const K8S_CKA_QUESTIONS_6 = [
  {
    id: "k8s-cka-111",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Purpose of the Cloud Controller Manager",
    scenario: "A cluster is being migrated from an in-tree cloud provider to an external one, and the team must explain what functionality moves.",
    question: "Which responsibilities belong to the cloud-controller-manager?",
    options: [
      { id: 'A', text: "Scheduling pods onto nodes and enforcing the affinity rules they declare." },
      { id: 'B', text: "Node lifecycle against the cloud API, routes, and LoadBalancer provisioning." },
      { id: 'C', text: "Programming the iptables rules for each Service on every node in turn." },
      { id: 'D', text: "Serving the Kubernetes API and persisting each object into etcd." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The cloud-controller-manager isolates provider-specific loops: it confirms whether a node still exists in the cloud, configures routes, and creates load balancers for LoadBalancer Services. Scheduling belongs to kube-scheduler, API serving to kube-apiserver, and per-node Service rules to kube-proxy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cloud-controller/",
    tags: ["Architecture", "Cloud Controller", "Control Plane"]
  },
  {
    id: "k8s-cka-112",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Watching a Rollout to Completion",
    scenario: "After applying a new image, an operator wants the shell to block until the rollout finishes or fails.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl wait --for=condition=Ready deployment/web" },
      { id: 'B', text: "kubectl get deployment web --watch-only" },
      { id: 'C', text: "kubectl rollout history deployment/web" },
      { id: 'D', text: "kubectl rollout status deployment/web" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl rollout status blocks and streams progress until the deployment is complete or its progress deadline is exceeded, returning a non-zero exit code on failure. The watch flag streams object changes without a completion verdict, history lists past revisions, and Deployments expose Available and Progressing conditions rather than Ready.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/",
    tags: ["Deployment", "kubectl", "Rollout"]
  },
  {
    id: "k8s-cka-113",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Traffic Distribution With externalTrafficPolicy Local",
    scenario: "A LoadBalancer Service uses externalTrafficPolicy: Local. Three of five nodes run a backend pod, and the cloud load balancer sends equal traffic to all five nodes.",
    question: "What happens to the traffic and how is it normally avoided?",
    options: [
      { id: 'A', text: "kube-proxy schedules a backend pod onto each node so every node can answer the check." },
      { id: 'B', text: "Nodes with no local backend fail the health check and leave rotation." },
      { id: 'C', text: "Traffic to a node without a pod is forwarded on to another node with SNAT applied." },
      { id: 'D', text: "Traffic is dropped for good, and the Service has to be recreated with `Cluster` policy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With Local policy, kube-proxy only serves the Service on nodes that host a ready backend and fails the load balancer health check elsewhere, so the load balancer stops sending traffic there while client IPs are preserved. Forwarding with SNAT is the Cluster policy behaviour, the situation is self-correcting rather than permanent, and kube-proxy never creates pods.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/services/source-ip/",
    tags: ["Services", "LoadBalancer", "Networking"]
  },
  {
    id: "k8s-cka-114",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Read-Only Root Filesystem With Writable Scratch Space",
    scenario: "Hardening requires readOnlyRootFilesystem: true, but the application must still write temporary files to /tmp.",
    question: "Which change keeps both requirements?",
    options: [
      { id: 'A', text: "Run the container as root so it can write to the image's paths." },
      { id: 'B', text: "Set `readOnlyRootFilesystem: false` for that one container only." },
      { id: 'C', text: "Grant the container `SYS_ADMIN` so it can remount the path." },
      { id: 'D', text: "Mount an `emptyDir` at `/tmp` and keep the root filesystem read-only." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A writable volume mounted over the specific path gives the application scratch space without relaxing the read-only root, which is the standard pattern. Disabling the setting abandons the hardening requirement, SYS_ADMIN is a large privilege grant that does not make a read-only mount writable, and running as root does not either.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Security Context", "Volumes", "Hardening"]
  },
  {
    id: "k8s-cka-115",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSet Pods on Tainted Nodes",
    scenario: "A monitoring DaemonSet must also run on control plane nodes, which carry the NoSchedule control plane taint.",
    question: "What is required?",
    options: [
      { id: 'A', text: "Set `hostNetwork: true` on the DaemonSet so its pods bypass the node's taints." },
      { id: 'B', text: "Remove the `NoSchedule` taint from each of the control plane nodes in the cluster." },
      { id: 'C', text: "Add a toleration for `node-role.kubernetes.io/control-plane:NoSchedule` to the pod template." },
      { id: 'D', text: "Give the DaemonSet a `nodeSelector` for the control plane role label on those nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A toleration lets DaemonSet pods be placed on the tainted control plane nodes while keeping ordinary workloads off them. Removing the taint opens those nodes to every workload, hostNetwork changes the network namespace rather than schedulability, and a nodeSelector alone still loses to the taint.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSet", "Taints", "Tolerations"]
  },
  {
    id: "k8s-cka-116",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "ServiceAccount Token Projection",
    scenario: "An application needs a short-lived, audience-scoped token to authenticate to an external service, rather than a long-lived Secret-based ServiceAccount token.",
    question: "Which mechanism provides it?",
    options: [
      { id: 'A', text: "A projected volume with a `serviceAccountToken` source and an audience." },
      { id: 'B', text: "A Secret of type `kubernetes.io/service-account-token`, mounted by hand." },
      { id: 'C', text: "The `automountServiceAccountToken` field set to true on the pod spec." },
      { id: 'D', text: "A ConfigMap holding the token, mounted at the conventional path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Projected ServiceAccount tokens are issued by the TokenRequest API with a caller-specified audience and expiry, and the kubelet rotates them in place. A legacy token Secret is long-lived and not audience-bound, ConfigMaps are the wrong place for credentials, and automount only controls whether the default token is mounted at all.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccount", "Tokens", "Security"]
  },
  {
    id: "k8s-cka-117",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Testing Cluster DNS From a Throwaway Pod",
    scenario: "An operator wants to confirm that a Service name resolves from inside the cluster, without modifying any existing workload.",
    question: "Which command is a reasonable one-liner?",
    options: [
      { id: 'A', text: "`kubectl run tmp --rm -it --image=busybox -- nslookup api.web.svc.cluster.local`" },
      { id: 'B', text: "`kubectl get svc api -o jsonpath={.spec.clusterIP}` from the workstation" },
      { id: 'C', text: "`nslookup api.web.svc.cluster.local` run on the workstation itself" },
      { id: 'D', text: "`kubectl describe configmap coredns -n kube-system` to read the zone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A throwaway pod resolves the name using the cluster DNS configuration, which is the only place cluster.local names are valid, and --rm cleans it up afterwards. The workstation resolver knows nothing about cluster.local, reading the ClusterIP does not exercise DNS, and describing the Corefile shows configuration rather than resolution behaviour.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["DNS", "Troubleshooting", "kubectl"]
  },
  {
    id: "k8s-cka-118",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pods Evicted After a Node Became Unreachable",
    scenario: "A node lost network connectivity. After around five minutes, its pods were marked for deletion and recreated elsewhere.",
    question: "Which mechanism caused that delay and action?",
    options: [
      { id: 'A', text: "The node controller taints `unreachable:NoExecute`, and the 300s toleration expired." },
      { id: 'B', text: "The scheduler preempted those pods to free capacity for a higher-priority workload." },
      { id: 'C', text: "A PodDisruptionBudget triggered the eviction once the node stopped reporting in." },
      { id: 'D', text: "The kubelet on the unreachable node evicted its own pods before losing contact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a node stops reporting, the node controller taints it unreachable with the NoExecute effect, and pods carry a default toleration of 300 seconds for that taint - hence the roughly five minute delay before eviction. The unreachable kubelet cannot act, the scheduler preempts only for higher priority pending pods, and a PDB restricts evictions rather than causing them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints", "Eviction", "Nodes"]
  },
  {
    id: "k8s-cka-119",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Controlling How Long a Pod Has to Shut Down",
    scenario: "An application needs up to 60 seconds to drain in-flight requests after receiving SIGTERM before it is killed.",
    question: "Which pod field governs that window?",
    options: [
      { id: 'A', text: "activeDeadlineSeconds: 60" },
      { id: 'B', text: "terminationGracePeriodSeconds: 60" },
      { id: 'C', text: "minReadySeconds: 60" },
      { id: 'D', text: "progressDeadlineSeconds: 60" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "terminationGracePeriodSeconds is the time between SIGTERM and SIGKILL, and a preStop hook runs inside that window. activeDeadlineSeconds caps the total runtime of a pod or Job, progressDeadlineSeconds bounds a Deployment rollout, and minReadySeconds delays counting a new pod as available.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
    tags: ["Pod Lifecycle", "Graceful Shutdown", "Workloads"]
  },
  {
    id: "k8s-cka-120",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Volume Snapshots for a Stateful Workload",
    scenario: "A team wants point-in-time copies of a CSI-backed PersistentVolume that can be used to create new claims, using Kubernetes APIs rather than provider tooling.",
    question: "Which objects are involved?",
    options: [
      { id: 'A', text: "A StorageClass with `reclaimPolicy: Retain` and a cloned PersistentVolume object." },
      { id: 'B', text: "A CronJob that runs `tar` against the mounted volume into object storage." },
      { id: 'C', text: "A second PersistentVolumeClaim with the `ReadOnlyMany` access mode." },
      { id: 'D', text: "A `VolumeSnapshotClass`, a `VolumeSnapshot` of the source PVC, and a PVC with a `dataSource`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The CSI snapshot API uses a VolumeSnapshotClass to select the driver, a VolumeSnapshot bound to a VolumeSnapshotContent for the point-in-time copy, and a new PVC with a dataSource referencing the snapshot to restore it. Retaining a PV is not a snapshot, filesystem tar jobs are outside the storage API and rarely crash-consistent, and access modes do not create copies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volume-snapshots/",
    tags: ["Volume Snapshots", "CSI", "Storage"]
  },
  {
    id: "k8s-cka-121",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Difference Between apply and create",
    scenario: "A manifest is applied repeatedly by a CI pipeline as the file evolves.",
    question: "Why is kubectl apply preferred over kubectl create here?",
    options: [
      { id: 'A', text: "`apply` is a declarative create-or-update, while `create` fails if the object exists." },
      { id: 'B', text: "`apply` deletes and recreates the object each time, which is how it converges on the manifest." },
      { id: 'C', text: "`apply` bypasses admission control, which is why it completes faster on a busy API server." },
      { id: 'D', text: "`create` cannot read a multi-document YAML file, so it fails on a manifest with several objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "apply is the declarative verb: it creates the object if absent and merges changes if present, which is what a repeatedly-run pipeline needs. Both verbs pass admission control, create reads YAML perfectly well, and apply patches in place rather than recreating.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "Declarative", "GitOps"]
  },
  {
    id: "k8s-cka-122",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Restricting Egress to the Internet",
    scenario: "Pods labelled tier=backend must be able to reach 10.0.0.0/8 but must not reach any public address, using NetworkPolicy only.",
    question: "Which egress rule expresses that?",
    options: [
      { id: 'A', text: "An ingress rule with `from: [{ ipBlock: { cidr: 10.0.0.0/8 } }]` on the same selector." },
      { id: 'B', text: "An egress rule with `to: [{ ipBlock: { cidr: 10.0.0.0/8 } }]` in a policy selecting `tier=backend`." },
      { id: 'C', text: "A policy with no rules at all and `policyTypes: [Ingress]` over `tier=backend`." },
      { id: 'D', text: "An egress rule with `ipBlock` `0.0.0.0/0` and `except: [10.0.0.0/8]` on that selector." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Once a policy declares Egress for the selected pods, only the listed destinations are reachable, so allowing exactly 10.0.0.0/8 denies everything else - though a DNS exception is usually needed too. Allowing 0.0.0.0/0 with an except for the private range inverts the intent, an ingress rule controls inbound traffic, and a rule-less Ingress policy does nothing about egress.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Egress", "Security"]
  },
  {
    id: "k8s-cka-123",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Interpreting kubectl get pod Restart Counts",
    scenario: "A pod shows READY 1/1, STATUS Running, and RESTARTS 47 over three hours.",
    question: "What should the operator conclude?",
    options: [
      { id: 'A', text: "The pod has been rescheduled 47 times onto different nodes by the scheduler." },
      { id: 'B', text: "The container has been killed 47 times and is healthy now; the previous logs say why." },
      { id: 'C', text: "The readiness probe has failed 47 times since the pod was first started." },
      { id: 'D', text: "The deployment has rolled out 47 times, and the count follows the pod." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The restart count tracks container restarts within the same pod, so a high count with a currently healthy container points at repeated crashes or liveness kills, best investigated with kubectl logs --previous and the last terminated state. Rescheduling creates new pods with fresh counters, readiness failures do not restart containers, and rollouts replace pods entirely.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
    tags: ["Troubleshooting", "Pods", "Restarts"]
  },
  {
    id: "k8s-cka-124",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Why a PodDisruptionBudget Did Not Stop an Outage",
    scenario: "A PDB with minAvailable: 2 was configured, yet all three replicas went down when a node hardware failure occurred.",
    question: "Why did the budget not help?",
    options: [
      { id: 'A', text: "A `minAvailable` expressed as a count rather than a percentage is ignored by the eviction API." },
      { id: 'B', text: "A PodDisruptionBudget needs a matching `PriorityClass` on the pods before it takes effect." },
      { id: 'C', text: "A PodDisruptionBudget bounds voluntary disruptions through the eviction API; a hardware failure is not one." },
      { id: 'D', text: "A PodDisruptionBudget applies only to StatefulSets, whose replicas have stable identities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A PDB is consulted by the eviction API during voluntary actions such as drains and cluster autoscaler scale-down; a node dying is an involuntary disruption that no budget can prevent, which is why spreading replicas across nodes and zones matters. Absolute counts are valid, PDBs work with any controller, and no PriorityClass is required.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/",
    tags: ["PodDisruptionBudget", "Availability", "Reliability"]
  },
  {
    id: "k8s-cka-125",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Aggregating Permissions Into the view ClusterRole",
    scenario: "A CRD named backups.example.com is added, and users holding the built-in view ClusterRole should automatically gain read access to it without editing that ClusterRole.",
    question: "How is that achieved?",
    options: [
      { id: 'A', text: "Create a ClusterRole with read verbs on the resource, labelled `aggregate-to-view: \"true\"`." },
      { id: 'B', text: "Add the CRD's group to the default ServiceAccount's RoleBinding in each namespace." },
      { id: 'C', text: "Set `aggregation: view` in the CustomResourceDefinition's own spec block." },
      { id: 'D', text: "Edit the built-in `view` ClusterRole and add the rules to it directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ClusterRole aggregation collects the rules of every ClusterRole matching the aggregation label selector into the target role, so a labelled add-on role extends view automatically. Editing the built-in role is overwritten on upgrade, a ServiceAccount binding grants nothing to human users, and CRDs have no aggregation field.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC", "Aggregation", "CRD"]
  },
  {
    id: "k8s-cka-126",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Where PersistentVolumeClaims Live",
    scenario: "A pod in namespace app references a PVC named data, and an identical PVC named data exists in namespace other.",
    question: "Which claim is used?",
    options: [
      { id: 'A', text: "Whichever claim was created first, since claim names are cluster-wide." },
      { id: 'B', text: "Both, since the two claims are merged into one bound volume." },
      { id: 'C', text: "The claim in the pod's own namespace, since claims are namespaced." },
      { id: 'D', text: "Neither; the pod has to reference the PersistentVolume directly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PersistentVolumeClaims are namespaced objects and a pod resolves the name inside its own namespace, so the same claim name can safely exist in many namespaces. PVC names are not cluster-unique, claims are never merged, and pods reference claims rather than PersistentVolumes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["PVC", "Namespaces", "Storage"]
  },
  {
    id: "k8s-cka-127",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Service Without a Selector",
    scenario: "A Service must front a database running outside the cluster at a fixed IP address, while pods keep using a normal in-cluster Service name.",
    question: "How is that modelled?",
    options: [
      { id: 'A', text: "A Service with no selector, plus an EndpointSlice holding the external address." },
      { id: 'B', text: "A NetworkPolicy permitting egress from the workload to the database." },
      { id: 'C', text: "A `LoadBalancer` Service whose `clusterIP` is set to the external one." },
      { id: 'D', text: "A headless Service with a `podSelector` matching the database pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A selector-less Service means the endpoints controller does not manage membership, so an operator supplies the external address manually and pods keep using a stable cluster name and ClusterIP. clusterIP cannot be set to an arbitrary external address, a NetworkPolicy only permits traffic rather than providing a name, and there are no pods for a selector to match.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Endpoints", "External Services"]
  },
  {
    id: "k8s-cka-128",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Deployment Applied but No Pods Appear",
    scenario: "kubectl apply reported the deployment configured, kubectl get deployment shows 0/3 ready and 0 replicas created, and no pods and no ReplicaSet exist.",
    question: "Where should the investigation start?",
    options: [
      { id: 'A', text: "The CNI plugin's configuration, since pods cannot be created while the network is unready." },
      { id: 'B', text: "The kubelet on each worker, since it is what turns a scheduled pod into a running container." },
      { id: 'C', text: "The kube-controller-manager, since it creates the ReplicaSet and is not leading." },
      { id: 'D', text: "The Service selector, since the deployment's pods are not being matched to their endpoints." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Deployment with no ReplicaSet at all means nothing acted on the object, which points at the deployment controller inside kube-controller-manager - its pod status, logs, and leader election are the first checks. Kubelets and CNI only matter once pods exist, and Services are irrelevant to replica creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/components/",
    tags: ["Controller Manager", "Troubleshooting", "Control Plane"]
  },
  {
    id: "k8s-cka-129",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Setting Default Container Limits for a Namespace",
    scenario: "Developers keep submitting pods without resource requests, which harms scheduling decisions. Every container in the dev namespace should receive a default request and limit if it declares none.",
    question: "Which object supplies the defaults?",
    options: [
      { id: 'A', text: "A PriorityClass with a default value." },
      { id: 'B', text: "A LimitRange with default and defaultRequest values." },
      { id: 'C', text: "A MutatingAdmissionPolicy on Deployments only." },
      { id: 'D', text: "A ResourceQuota with hard limits." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A LimitRange injects defaultRequest and default limit values into containers that omit them, and can also enforce minimum and maximum values per container. ResourceQuota caps namespace totals and rejects rather than defaults, a policy scoped to Deployments would miss bare pods and other controllers, and PriorityClass has nothing to do with resources.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/",
    tags: ["LimitRange", "Resources", "Governance"]
  },
  {
    id: "k8s-cka-130",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Purpose of kubeadm init phase Commands",
    scenario: "An administrator needs to regenerate only the kubeconfig files on a control plane node without touching the rest of the installation.",
    question: "Which capability supports that?",
    options: [
      { id: 'A', text: "`kubeadm join --control-plane --skip-phases=all` on the same node." },
      { id: 'B', text: "`kubectl config view --raw` piped back into the kubeconfig file." },
      { id: 'C', text: "`kubeadm init phase kubeconfig all`, which runs that one phase in isolation." },
      { id: 'D', text: "`kubeadm reset --cleanup-tmp-dir`, which leaves the cluster running." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubeadm exposes its init workflow as individually runnable phases, so the kubeconfig phase can be re-run alone to rebuild admin.conf and the component kubeconfigs. There is no kubeconfig-only reset flag, join adds nodes rather than regenerating files, and kubectl has no regenerate subcommand.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init-phase/",
    tags: ["kubeadm", "kubeconfig", "Cluster Administration"]
  },
  {
    id: "k8s-cka-131",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Immutable ConfigMaps and Secrets",
    scenario: "A very large cluster suffers API server load from thousands of watches on ConfigMaps that never change after creation.",
    question: "Which setting reduces that load and what is the tradeoff?",
    options: [
      { id: 'A', text: "Converting them to Secrets, which the kubelet watches at a lower frequency." },
      { id: 'B', text: "The `kubernetes.io/no-watch` annotation, which drops the kubelet's watch." },
      { id: 'C', text: "`immutable: true`, which also encrypts the object's data at rest in etcd." },
      { id: 'D', text: "`immutable: true` stops the kubelet watching it; the object can then only be replaced." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Marking a ConfigMap or Secret immutable lets the kubelet stop watching it, cutting API server load significantly at scale, at the cost of having to delete and recreate the object to change it. Immutability is unrelated to encryption, there is no no-watch annotation, and Secrets are watched just like ConfigMaps.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/",
    tags: ["ConfigMap", "Scalability", "Configuration"]
  },
  {
    id: "k8s-cka-132",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Choosing Between iptables and IPVS Mode",
    scenario: "A cluster runs Services with thousands of endpoints and operators observe growing latency when kube-proxy reprograms rules.",
    question: "Why might IPVS mode help?",
    options: [
      { id: 'A', text: "IPVS looks up in a hash table and scales with Service count, where iptables chains grow linearly." },
      { id: 'B', text: "IPVS programs the pod routes itself, so the CNI plugin is no longer on the data path." },
      { id: 'C', text: "IPVS reads the Endpoints object directly, so EndpointSlices are not needed in the cluster." },
      { id: 'D', text: "IPVS provides layer 7 routing for HTTP Services, which iptables mode cannot express." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IPVS was added precisely for scale: kernel hash-based lookups and cheaper updates instead of long sequential iptables chains, plus several load balancing algorithms. It does not replace the CNI plugin, it operates at layer 4 rather than layer 7, and endpoint tracking still uses EndpointSlices.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "IPVS", "Performance"]
  },
  {
    id: "k8s-cka-133",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Checking Control Plane Component Health",
    scenario: "An operator wants a quick verdict on whether the scheduler and controller manager are healthy on a cluster where they run as static pods.",
    question: "Which two checks are appropriate? (Choose two.)",
    options: [
      { id: 'A', text: "kubectl top nodes to read component CPU usage." },
      { id: 'B', text: "kubectl get componentstatuses, which is the current recommended API." },
      { id: 'C', text: "kubectl get --raw /livez?verbose against the API server." },
      { id: 'D', text: "kubectl get pods -n kube-system to see the static pod status." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "Static control plane pods are mirrored into kube-system so their status and logs are visible through kubectl, and the /livez and /readyz health endpoints give a verbose per-check verdict. componentstatuses is deprecated and unreliable, and kubectl top reports node and pod resource usage rather than component health.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/health-checks/",
    tags: ["Health Checks", "Control Plane", "Troubleshooting"]
  },
  {
    id: "k8s-cka-134",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Job Retry Behaviour on Failure",
    scenario: "A Job with backoffLimit: 4 runs a task that exits non-zero every time.",
    question: "What is the outcome?",
    options: [
      { id: 'A', text: "The Job retries indefinitely until an operator deletes the object." },
      { id: 'B', text: "The Job is marked Complete, since its pods did run to termination." },
      { id: 'C', text: "The Job is suspended and waits for an operator to resume it." },
      { id: 'D', text: "The Job retries with backoff and is marked Failed once the budget runs out." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "backoffLimit caps the number of retries, each delayed by an increasing backoff, after which the Job controller records a Failed condition and stops creating pods. Retries are bounded, a non-zero exit is never a completion, and suspension is an explicit spec.suspend setting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/",
    tags: ["Jobs", "Retries", "Batch"]
  },
  {
    id: "k8s-cka-135",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Kustomize Overlays for Environment Differences",
    scenario: "The same application manifests must be deployed to staging and production with different replica counts and image tags, without duplicating the YAML.",
    question: "Which native kubectl capability supports that?",
    options: [
      { id: 'A', text: "`kubectl apply -f` with a `--set` flag for each overridden value." },
      { id: 'B', text: "`kubectl apply -k` with a base and per-environment Kustomize overlays." },
      { id: 'C', text: "`kubectl apply --prune` against a single combined manifest file." },
      { id: 'D', text: "`kubectl replace` with the environment variables expanded first." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kustomize is built into kubectl and applies strategic-merge or JSON patches from an overlay onto a shared base, which is exactly the shared-manifest-with-per-environment-differences case. kubectl has no --set flag, --prune deletes objects no longer in the manifest set, and shell substitution is a fragile templating hack rather than a supported mechanism.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Kustomize", "kubectl", "Configuration"]
  }
];

export default K8S_CKA_QUESTIONS_6;
