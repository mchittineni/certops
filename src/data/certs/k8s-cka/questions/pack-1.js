export const K8S_CKA_QUESTIONS = [
  {
    id: "k8s-cka-1",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Kubernetes Ingress Path-Based Routing",
    scenario: "Two Services, api-svc and web-svc, run in the shop namespace. Requests to shop.example.com/api must reach api-svc on port 8080 and every other path must reach web-svc on port 80, using a single external IP address.",
    question: "Which Kubernetes resource should be created?",
    options: [
      { id: 'A', text: "Two Services of type LoadBalancer, one per backend." },
      { id: 'B', text: "A single Service of type NodePort with two ports defined." },
      { id: 'C', text: "An Ingress with a host rule for shop.example.com and two path rules backed by the two Services, served by an ingress controller." },
      { id: 'D', text: "A NetworkPolicy selecting both Services with path-based ingress rules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ingress is the Kubernetes API for HTTP layer-7 routing: one entry point that dispatches by host and URL path to different backend Services, implemented by an ingress controller. Two LoadBalancer Services would consume two external IPs and cannot route by path, a NodePort Service maps ports rather than paths and targets one set of pods, and NetworkPolicy filters traffic at layer 3/4 and has no concept of URL paths.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "Networking", "Services"]
  },
  {
    id: "k8s-cka-2",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Claim and StorageClass Dynamic Provisioning",
    scenario: "A StatefulSet needs 20 GiB of persistent storage per replica. The administrator does not want to pre-create PersistentVolume objects by hand, and the cluster has a default StorageClass backed by a CSI driver.",
    question: "What happens when a PersistentVolumeClaim requesting 20Gi is created without specifying storageClassName?",
    options: [
      { id: 'A', text: "The claim is rejected by the API server because storageClassName is required." },
      { id: 'B', text: "The default StorageClass dynamically provisions a matching PersistentVolume and binds it to the claim." },
      { id: 'C', text: "The claim stays Pending until an administrator manually creates a matching PersistentVolume." },
      { id: 'D', text: "Kubernetes creates an emptyDir volume of 20 GiB on the node instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a PVC omits storageClassName and a StorageClass is marked as the cluster default, the provisioner named by that class creates a PersistentVolume matching the requested size and access mode and binds it automatically. Manual PV creation is only necessary with static provisioning or no default class, the field is optional so the API accepts it, and emptyDir is ephemeral node storage that PVCs never fall back to.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/",
    tags: ["Storage", "PVC", "StorageClass", "CSI"]
  },
  {
    id: "k8s-cka-3",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Anti-Affinity for High Availability Scheduling",
    scenario: "A Deployment runs three replicas of a critical API. During an incident, all three replicas were scheduled onto the same node and the node failure took the whole service down. The requirement is that the scheduler must refuse to place two replicas on the same node.",
    question: "Which pod specification achieves this?",
    options: [
      { id: 'A', text: "A podAffinity rule matching the app label, with topologyKey topology.kubernetes.io/zone." },
      { id: 'B', text: "requiredDuringSchedulingIgnoredDuringExecution podAntiAffinity matching the app label, with topologyKey kubernetes.io/hostname." },
      { id: 'C', text: "preferredDuringSchedulingIgnoredDuringExecution podAntiAffinity matching the app label, with topologyKey kubernetes.io/hostname." },
      { id: 'D', text: "A nodeSelector pinning the Deployment to three specific node names." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "requiredDuringSchedulingIgnoredDuringExecution makes the anti-affinity a hard constraint: with topologyKey kubernetes.io/hostname the scheduler will leave a replica Pending rather than co-locate it on a node that already runs a matching pod. The preferred form is a soft hint the scheduler may ignore under pressure, podAffinity attracts pods together - the opposite of the requirement - and a nodeSelector cannot express \"at most one per node\" and creates a new single point of failure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
    tags: ["Scheduling", "Anti-Affinity", "High Availability", "Workloads"]
  },
  {
    id: "k8s-cka-4",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "First Command for a CrashLoopBackOff Pod",
    scenario: "A pod in the payments namespace is reporting CrashLoopBackOff. The container starts, exits within a second, and Kubernetes restarts it with increasing backoff.",
    question: "Which command shows the output of the container instance that already exited?",
    options: [
      { id: 'A', text: "kubectl get pod POD -n payments -o wide" },
      { id: 'B', text: "kubectl rollout restart deployment/payments -n payments" },
      { id: 'C', text: "kubectl logs POD -n payments --previous" },
      { id: 'D', text: "kubectl exec -it POD -n payments -- sh" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The --previous flag returns the logs of the last terminated container instance, which is the only place the crash output survives once the container has been replaced. kubectl get -o wide shows scheduling details but no application output, kubectl exec cannot attach to a container that is not running, and restarting the rollout destroys the evidence.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Troubleshooting", "kubectl", "Logs"]
  },
  {
    id: "k8s-cka-5",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "The Only Component That Talks to etcd",
    scenario: "A new administrator is drawing the control plane data flow and needs to know which component reads and writes cluster state directly.",
    question: "Which control plane component communicates directly with etcd?",
    options: [
      { id: 'A', text: "kubelet" },
      { id: 'B', text: "kube-controller-manager" },
      { id: 'C', text: "kube-scheduler" },
      { id: 'D', text: "kube-apiserver" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The kube-apiserver is the sole client of etcd; every other component - the scheduler, the controller manager, kubelet, and kubectl - reads and writes cluster state through the API server. This single point of access is what makes API-server authentication, authorization, and admission control the complete security boundary for cluster state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/",
    tags: ["Architecture", "etcd", "API Server"]
  },
  {
    id: "k8s-cka-6",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Running an Agent on Every Node",
    scenario: "A platform team must run a log-collection agent on every node in the cluster, including nodes added later by the autoscaler, with exactly one instance per node.",
    question: "Which workload resource should they use?",
    options: [
      { id: 'A', text: "A Deployment with replicas equal to the current node count" },
      { id: 'B', text: "A CronJob scheduled every minute" },
      { id: 'C', text: "A DaemonSet" },
      { id: 'D', text: "A StatefulSet with pod anti-affinity" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A DaemonSet guarantees one pod per matching node and automatically schedules onto nodes as they join the cluster, which is why CNI plugins, log shippers, and node exporters are all deployed this way. A fixed-replica Deployment does not track node count, a StatefulSet adds identity and storage semantics an agent does not need, and a CronJob runs to completion rather than staying resident.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSet", "Workloads", "Scheduling"]
  },
  {
    id: "k8s-cka-7",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Draining a Node for Kernel Maintenance",
    scenario: "An administrator must apply a kernel patch to worker node-3. The node runs application pods plus a DaemonSet-managed CNI agent and a pod using an emptyDir volume for scratch data.",
    question: "Which command safely evicts the workloads while respecting PodDisruptionBudgets?",
    options: [
      { id: 'A', text: "kubectl taint nodes node-3 maintenance=true:PreferNoSchedule" },
      { id: 'B', text: "kubectl drain node-3 --ignore-daemonsets --delete-emptydir-data" },
      { id: 'C', text: "kubectl delete node node-3" },
      { id: 'D', text: "kubectl cordon node-3 and then reboot the host" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl drain marks the node unschedulable and evicts its pods through the Eviction API, which honours PodDisruptionBudgets. --ignore-daemonsets is required because DaemonSet pods are not evicted, and --delete-emptydir-data acknowledges the loss of scratch data. Deleting the node object removes it from the cluster without a graceful eviction, cordon alone leaves running pods to be killed by the reboot, and a PreferNoSchedule taint is only a soft hint.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Drain", "Cluster Maintenance", "PDB"]
  },
  {
    id: "k8s-cka-8",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Choosing the Right Probe for a Slow-Starting Application",
    scenario: "A Java service takes up to 150 seconds to warm its caches before it can serve requests. With a liveness probe configured at a 30-second initial delay, the container is repeatedly killed before it finishes starting.",
    question: "Which configuration resolves this correctly?",
    options: [
      { id: 'A', text: "Increase the liveness probe periodSeconds to 300 so it is checked less often." },
      { id: 'B', text: "Add a startupProbe with a generous failureThreshold, which disables the liveness and readiness probes until it succeeds." },
      { id: 'C', text: "Convert the liveness probe into a readiness probe with the same delay." },
      { id: 'D', text: "Remove the liveness probe entirely so the container is never restarted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A startupProbe exists precisely for slow-booting containers: while it is running, the liveness and readiness probes are held off, and only after it succeeds do they begin. Removing the liveness probe loses deadlock detection for the life of the pod, a longer period still allows an early failure to kill the container, and a readiness probe alone leaves the container unmonitored for hangs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/",
    tags: ["Probes", "Troubleshooting", "Startup Probe"]
  },
  {
    id: "k8s-cka-9",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Restoring etcd From a Snapshot on a Stacked Control Plane",
    scenario: "A single-control-plane kubeadm cluster has lost its etcd data directory after a disk failure. A snapshot taken 20 minutes earlier is available at /backup/etcd-snap.db. etcd runs as a static pod defined in /etc/kubernetes/manifests/etcd.yaml.",
    question: "Which two actions are part of the correct restore procedure? (Choose TWO)",
    options: [
      { id: 'A', text: "Copy the snapshot file directly over /var/lib/etcd/member/snap/db and restart kubelet." },
      { id: 'B', text: "Run kubectl apply -f /etc/kubernetes/manifests/etcd.yaml to restart the etcd pod." },
      { id: 'C', text: "Update the hostPath volume in /etc/kubernetes/manifests/etcd.yaml to point at the restored data directory so kubelet recreates the static pod." },
      { id: 'D', text: "Run ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd-snap.db --data-dir /var/lib/etcd-restored" },
      { id: 'E', text: "Run kubeadm reset on the control plane node before restoring the snapshot." }
    ],
    correctAnswers: ['C', 'D'],
    type: "multiple",
    explanation: "etcdctl snapshot restore rebuilds a fresh member data directory from the snapshot - it never writes into a live data directory. Because etcd is a static pod, pointing its hostPath volume at the restored directory and letting kubelet observe the manifest change is what brings the restored member up. kubectl apply does not manage static pods, kubeadm reset would destroy the rest of the control plane configuration, and copying a snapshot over the internal member files bypasses the restore process and corrupts the store.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd", "Backup", "Static Pods", "Restore"]
  },
  {
    id: "k8s-cka-10",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny Ingress With a Narrow Exception",
    scenario: "In the payments namespace, all pods must reject incoming traffic except that pods labelled app=api must be reachable on TCP 8080 from pods labelled app=frontend in the same namespace. The cluster runs Calico.",
    question: "Which statements about the required NetworkPolicy configuration are correct? (Choose TWO)",
    options: [
      { id: 'A', text: "A policy with podSelector: {} and policyTypes: [Ingress] and no ingress rules is needed to establish default-deny for the namespace." },
      { id: 'B', text: "The exception policy must set policyTypes: [Egress] because the traffic leaves the frontend pod." },
      { id: 'C', text: "A second policy selecting app=api with an ingress rule for podSelector app=frontend on port 8080 grants the exception, because policies are additive." },
      { id: 'D', text: "Without any NetworkPolicy, ingress to pods in the namespace is denied by default." },
      { id: 'E', text: "The default-deny policy must include an explicit deny rule listing the blocked sources." }
    ],
    correctAnswers: ['A', 'C'],
    type: "multiple",
    explanation: "NetworkPolicies are whitelist-only and additive: an empty-rule policy selecting all pods creates default-deny for ingress, and any further policy that selects a pod adds allowed sources on top. There is no deny rule syntax in the NetworkPolicy API. The exception governs traffic arriving at the api pods, so it is an Ingress policy on those pods rather than an Egress policy on the frontend. And with no policy selecting a pod at all, Kubernetes allows all traffic rather than denying it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Security", "Calico", "Networking"]
  }
];

export default K8S_CKA_QUESTIONS;
