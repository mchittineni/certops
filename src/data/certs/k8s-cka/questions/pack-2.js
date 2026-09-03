export const K8S_CKA_QUESTIONS_2 = [
  {
    id: "k8s-cka-11",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Where kubeadm Writes Static Pod Manifests",
    scenario: "After a kubeadm init, the control plane components run as pods that the kubelet starts directly, without the scheduler being involved.",
    question: "Which directory does the kubelet watch for those manifests by default on a kubeadm cluster?",
    options: [
      { id: 'A', text: "/var/lib/kubelet/pods" },
      { id: 'B', text: "/etc/kubernetes/manifests" },
      { id: 'C', text: "/etc/kubernetes/pki" },
      { id: 'D', text: "/etc/systemd/system/kubelet.service.d" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm sets staticPodPath to /etc/kubernetes/manifests in the kubelet configuration, and the kubelet starts any pod manifest dropped there without the API server or scheduler. /var/lib/kubelet/pods holds runtime pod directories, /etc/kubernetes/pki holds cluster certificates, and the systemd drop-in directory configures the kubelet service itself.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["kubeadm", "Static Pods", "kubelet"]
  },
  {
    id: "k8s-cka-12",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Node Reporting NotReady After kubelet Restart",
    scenario: "A worker node shows status NotReady. kubectl describe node lists the condition Ready with status Unknown and the message \"Kubelet stopped posting node status\".",
    question: "What is the most direct next step on that node?",
    options: [
      { id: 'A', text: "Delete the node object so the scheduler stops considering it." },
      { id: 'B', text: "Restart kube-apiserver on the control plane node." },
      { id: 'C', text: "Inspect the kubelet service with systemctl status kubelet and journalctl -u kubelet." },
      { id: 'D', text: "Drain the node and reinstall the container runtime." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ready=Unknown with \"Kubelet stopped posting node status\" means the node controller has not heard from that kubelet inside the grace period, so the kubelet itself is the thing to inspect - its service state and journal will show a crash, a certificate problem, or loss of API server connectivity. Deleting the node object hides the symptom, reinstalling the runtime is an unverified guess, and the API server is clearly serving other nodes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
    tags: ["Troubleshooting", "kubelet", "Nodes"]
  },
  {
    id: "k8s-cka-13",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "PersistentVolume Reclaim Policy After PVC Deletion",
    scenario: "A statically provisioned PersistentVolume holds data that must survive the deletion of the PersistentVolumeClaim that used it, so that an administrator can inspect and manually recover the contents.",
    question: "Which persistentVolumeReclaimPolicy achieves that?",
    options: [
      { id: 'A', text: "Recycle" },
      { id: 'B', text: "Retain" },
      { id: 'C', text: "Preserve" },
      { id: 'D', text: "Delete" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retain leaves the PersistentVolume and its backing storage in place when the claim is deleted; the PV moves to the Released phase and an administrator reclaims the data manually. Delete removes both PV and backing volume, Recycle is deprecated and scrubs the volume with rm -rf, and Preserve is not a Kubernetes reclaim policy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "PersistentVolume", "Reclaim Policy"]
  },
  {
    id: "k8s-cka-14",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Default-Deny Ingress NetworkPolicy for a Namespace",
    scenario: "Security requires that pods in the payments namespace accept no incoming traffic unless a later policy explicitly allows it. Outgoing traffic must not be affected.",
    question: "Which NetworkPolicy spec implements the default-deny baseline?",
    options: [
      { id: 'A', text: "podSelector: {} with policyTypes: [Ingress] and no ingress rules." },
      { id: 'B', text: "namespaceSelector: {} with policyTypes: [Ingress] and no ingress rules." },
      { id: 'C', text: "podSelector: {} with policyTypes: [Ingress, Egress] and no rules." },
      { id: 'D', text: "podSelector matching every app label, with an ingress rule allowing 0.0.0.0/0." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An empty podSelector selects every pod in the policy namespace, and listing Ingress in policyTypes with no ingress rules denies all incoming traffic while leaving egress untouched. Listing both Ingress and Egress with no rules would also cut off all outbound traffic, an ingress rule allowing 0.0.0.0/0 explicitly permits everything, and namespaceSelector is only valid inside a rule - it is not a substitute for the top-level podSelector.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Security", "Networking"]
  },
  {
    id: "k8s-cka-15",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Safely Removing Workloads Before Node Maintenance",
    scenario: "A worker node must be rebooted for a kernel patch. Running pods should be evicted and rescheduled elsewhere, and no new pods should land on the node while it is down.",
    question: "Which command prepares the node?",
    options: [
      { id: 'A', text: "kubectl taint nodes node01 maintenance=true:PreferNoSchedule" },
      { id: 'B', text: "kubectl cordon node01" },
      { id: 'C', text: "kubectl drain node01 --ignore-daemonsets" },
      { id: 'D', text: "kubectl delete node node01" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl drain both cordons the node and evicts its pods, and --ignore-daemonsets is required because DaemonSet pods cannot be rescheduled elsewhere. cordon alone marks the node unschedulable but leaves running pods in place, deleting the node object removes it from the cluster instead of pausing it, and a PreferNoSchedule taint is only a soft hint that evicts nothing.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Maintenance", "Drain", "Scheduling"]
  },
  {
    id: "k8s-cka-16",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Backing Up etcd With etcdctl",
    scenario: "An administrator must take a point-in-time backup of a stacked etcd on a kubeadm control plane node, using the client certificates in /etc/kubernetes/pki/etcd.",
    question: "Which command produces the snapshot?",
    options: [
      { id: 'A', text: "ETCDCTL_API=3 etcdctl snapshot save /opt/snap.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key" },
      { id: 'B', text: "ETCDCTL_API=3 etcdctl snapshot restore /opt/snap.db" },
      { id: 'C', text: "kubectl get all --all-namespaces -o yaml > /opt/snap.yaml" },
      { id: 'D', text: "cp -r /var/lib/etcd /opt/snap.db while etcd is running" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "snapshot save against the local etcd endpoint with the CA, client certificate, and key is the supported way to capture a consistent point-in-time backup. Exporting objects with kubectl misses cluster state that lives only in etcd and is not point-in-time, snapshot restore is the recovery half of the workflow, and copying the data directory of a running etcd yields a torn, unusable copy.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd", "Backup", "Cluster Architecture"]
  },
  {
    id: "k8s-cka-17",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "ImagePullBackOff on a Private Registry",
    scenario: "A deployment referencing registry.internal/app:2.1 shows ImagePullBackOff. kubectl describe pod reports \"unauthorized: authentication required\" from the registry.",
    question: "What resolves the failure?",
    options: [
      { id: 'A', text: "Add a ServiceAccount token volume mount to the container." },
      { id: 'B', text: "Set imagePullPolicy to IfNotPresent on the container." },
      { id: 'C', text: "Increase the kubelet image pull timeout." },
      { id: 'D', text: "Create a docker-registry Secret and reference it in the pod spec imagePullSecrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An \"unauthorized\" error from the registry means the kubelet has no credentials for it, and the fix is a kubernetes.io/dockerconfigjson Secret referenced through imagePullSecrets on the pod spec or attached to its ServiceAccount. imagePullPolicy controls when a pull is attempted rather than how it authenticates, ServiceAccount tokens authenticate to the Kubernetes API and not to a registry, and a longer timeout does not supply credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Troubleshooting", "Images", "Secrets"]
  },
  {
    id: "k8s-cka-18",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Headless Service DNS for a StatefulSet",
    scenario: "A StatefulSet named db with three replicas in the data namespace needs stable per-pod DNS names so peers can address each other individually rather than through a load-balanced VIP.",
    question: "Which Service configuration provides per-pod DNS records?",
    options: [
      { id: 'A', text: "A Service with clusterIP: None referenced as the StatefulSet serviceName." },
      { id: 'B', text: "An ExternalName Service pointing at the pod IP addresses." },
      { id: 'C', text: "A NodePort Service with externalTrafficPolicy: Local." },
      { id: 'D', text: "A ClusterIP Service with sessionAffinity: ClientIP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A headless Service (clusterIP: None) makes CoreDNS return the pod A records directly, and naming it as the StatefulSet serviceName produces stable names of the form db-0.db.data.svc.cluster.local. Session affinity still routes through a single VIP, NodePort exposes the Service externally without per-pod names, and ExternalName only emits a CNAME to an external hostname.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSet", "DNS", "Headless Service"]
  },
  {
    id: "k8s-cka-19",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Rolling Back a Bad Deployment Revision",
    scenario: "A deployment was updated to an image with a fatal bug. The previous revision was healthy and the rollout history is intact.",
    question: "Which command returns the deployment to the previous revision?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment/api" },
      { id: 'B', text: "kubectl rollout undo deployment/api" },
      { id: 'C', text: "kubectl delete deployment/api and reapply the manifest" },
      { id: 'D', text: "kubectl rollout pause deployment/api" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl rollout undo rolls the deployment back to the prior revision recorded in its ReplicaSet history, optionally to a specific --to-revision. rollout restart re-creates pods on the same broken image, pause only stops further rollout progress, and deleting the deployment causes an outage and loses the revision history.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Rollout", "Workloads"]
  },
  {
    id: "k8s-cka-20",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "RBAC Binding Scope: Role vs ClusterRole",
    scenario: "A ServiceAccount named ci in the build namespace must be able to list pods in every namespace of the cluster.",
    question: "Which combination grants exactly that?",
    options: [
      { id: 'A', text: "A Role with pods/list in the build namespace plus a RoleBinding to the ServiceAccount." },
      { id: 'B', text: "A Role with pods/list plus a ClusterRoleBinding to the ServiceAccount." },
      { id: 'C', text: "A ClusterRole with pods/list plus a RoleBinding in the build namespace." },
      { id: 'D', text: "A ClusterRole with pods/list plus a ClusterRoleBinding to the ServiceAccount." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cluster-wide permission requires a ClusterRole bound with a ClusterRoleBinding; the binding kind decides the scope. A Role plus RoleBinding is limited to one namespace, a ClusterRole bound with a RoleBinding grants the permissions only inside that binding namespace, and a ClusterRoleBinding cannot reference a namespaced Role at all.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC", "Security", "Authorization"]
  },
  {
    id: "k8s-cka-21",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Service With No Endpoints",
    scenario: "Requests to a ClusterIP Service time out. kubectl get endpoints svc shows the ENDPOINTS column as none, although three healthy pods are running in the same namespace.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The Service selector does not match the pod labels." },
      { id: 'B', text: "CoreDNS has not created a record for the Service." },
      { id: 'C', text: "kube-proxy is running in iptables mode instead of IPVS." },
      { id: 'D', text: "The Service is missing a NodePort assignment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The endpoints controller populates EndpointSlices from pods whose labels match the Service selector and whose readiness probes pass, so an empty endpoint list points at a selector or readiness mismatch. kube-proxy mode affects how existing endpoints are programmed rather than whether they exist, ClusterIP Services need no NodePort, and a missing DNS record would produce a name resolution error rather than an empty endpoint list.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Troubleshooting", "Services", "Endpoints"]
  },
  {
    id: "k8s-cka-22",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Quality of Service Class and Eviction Order",
    scenario: "A node is under memory pressure and the kubelet must evict pods. Pod A sets equal CPU and memory requests and limits, pod B sets requests lower than limits, and pod C sets neither requests nor limits.",
    question: "Which pod does the kubelet evict first?",
    options: [
      { id: 'A', text: "Pod A, because Guaranteed pods hold the most reserved memory." },
      { id: 'B', text: "Pod C, because it is BestEffort." },
      { id: 'C', text: "The kubelet evicts them in pod creation order regardless of class." },
      { id: 'D', text: "Pod B, because Burstable pods exceed their requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pod C is BestEffort - no requests or limits - and BestEffort pods are evicted first under node memory pressure, followed by Burstable pods exceeding their requests, with Guaranteed pods last. Pod A is Guaranteed because requests equal limits, pod B is Burstable, and eviction ranks by QoS class and usage above requests rather than by creation time.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["QoS", "Eviction", "Resources"]
  },
  {
    id: "k8s-cka-23",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "In-Cluster DNS Name for a Service",
    scenario: "A pod in the web namespace must reach a Service named cache that lives in the data namespace, using the cluster DNS suffix cluster.local.",
    question: "Which fully qualified name resolves to that Service?",
    options: [
      { id: 'A', text: "cache.web.svc.cluster.local" },
      { id: 'B', text: "svc.cache.data.cluster.local" },
      { id: 'C', text: "data.cache.pod.cluster.local" },
      { id: 'D', text: "cache.data.svc.cluster.local" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service records follow the pattern service.namespace.svc.cluster-domain, so the cache Service in the data namespace is cache.data.svc.cluster.local. The form cache.web.svc.cluster.local points at the wrong namespace, the pod subdomain is used for pod IP records rather than Services, and the remaining variant scrambles the label order.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",
    tags: ["DNS", "Services", "CoreDNS"]
  },
  {
    id: "k8s-cka-24",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Access Mode for Multi-Node Read-Write Storage",
    scenario: "Three pods spread across three different nodes must all mount the same volume for reading and writing simultaneously, and the CSI driver supports it.",
    question: "Which access mode must the PersistentVolumeClaim request?",
    options: [
      { id: 'A', text: "ReadWriteOnce" },
      { id: 'B', text: "ReadOnlyMany" },
      { id: 'C', text: "ReadWriteOncePod" },
      { id: 'D', text: "ReadWriteMany" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ReadWriteMany is the only mode that lets many nodes mount the volume read-write at once, which is what pods on three different nodes need. ReadWriteOnce restricts read-write mounting to a single node, ReadOnlyMany forbids writes, and ReadWriteOncePod is the strictest mode of all - a single pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Access Modes", "PVC"]
  },
  {
    id: "k8s-cka-25",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Order of Operations for a kubeadm Cluster Upgrade",
    scenario: "A cluster must be upgraded from one minor version to the next using kubeadm, across one control plane node and several workers.",
    question: "Which sequence is correct for the first control plane node?",
    options: [
      { id: 'A', text: "Drain every worker first, then upgrade the control plane binaries in any order." },
      { id: 'B', text: "Upgrade the kubeadm binary, run kubeadm upgrade plan and apply, then drain the node and upgrade kubelet and kubectl, then uncordon." },
      { id: 'C', text: "Run kubeadm upgrade node on the control plane, then upgrade the kubeadm binary." },
      { id: 'D', text: "Upgrade the kubelet, then run kubeadm upgrade apply, then upgrade the kubeadm binary." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The documented order upgrades the kubeadm binary first, uses kubeadm upgrade plan and apply to move the control plane components, and only then drains the node to upgrade kubelet and kubectl before uncordoning. Upgrading the kubelet ahead of kubeadm inverts the dependency, workers are upgraded after the control plane rather than before, and kubeadm upgrade node is the command for additional control plane nodes and workers, not the first one.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["kubeadm", "Upgrade", "Cluster Architecture"]
  },
  {
    id: "k8s-cka-26",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Unreachable After an API Server Manifest Edit",
    scenario: "An administrator edited /etc/kubernetes/manifests/kube-apiserver.yaml on the single control plane node and now every kubectl command fails with a connection refused error.",
    question: "Which approach diagnoses the problem?",
    options: [
      { id: 'A', text: "Run kubectl logs -n kube-system kube-apiserver-cp01." },
      { id: 'B', text: "Inspect the container runtime directly with crictl ps -a and crictl logs, plus the kubelet journal." },
      { id: 'C', text: "Restart etcd and wait for the API server to re-register." },
      { id: 'D', text: "Delete the API server pod with kubectl so the kubelet re-creates it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With the API server down, every kubectl path is unavailable, so diagnosis has to happen on the node: crictl lists the exited API server container and its logs show the manifest error, and journalctl -u kubelet shows the kubelet failing to start the static pod. Reading logs or deleting the pod with kubectl both require a working API server, and restarting etcd does not fix an invalid API server manifest.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
    tags: ["Troubleshooting", "Control Plane", "crictl"]
  },
  {
    id: "k8s-cka-27",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSet Versus Deployment",
    scenario: "A log shipping agent must run exactly once on every node in the cluster, including nodes added later.",
    question: "Which workload resource fits?",
    options: [
      { id: 'A', text: "A StatefulSet with one replica per node." },
      { id: 'B', text: "A Deployment with replicas equal to the current node count." },
      { id: 'C', text: "A CronJob scheduled on every node." },
      { id: 'D', text: "A DaemonSet." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A DaemonSet places one pod on every eligible node and automatically adds pods to nodes that join later. A Deployment with a fixed replica count neither guarantees one pod per node nor adapts to new nodes, StatefulSets provide ordered identity rather than per-node placement, and CronJobs are time-triggered batch workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSet", "Workloads"]
  },
  {
    id: "k8s-cka-28",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Preserving Client Source IP Through a Service",
    scenario: "A LoadBalancer Service fronts an application that logs client IP addresses. Every request is logged with a node IP instead of the real client address.",
    question: "Which setting preserves the original client source IP?",
    options: [
      { id: 'A', text: "externalTrafficPolicy: Cluster" },
      { id: 'B', text: "sessionAffinity: ClientIP" },
      { id: 'C', text: "externalTrafficPolicy: Local" },
      { id: 'D', text: "internalTrafficPolicy: Local" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "externalTrafficPolicy: Local stops kube-proxy from SNATing external traffic and only routes to pods on the receiving node, which preserves the client source IP at the cost of possible traffic imbalance. Cluster is the default that hides the client IP behind a node address, internalTrafficPolicy governs traffic originating inside the cluster, and sessionAffinity only pins a client to one backend.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/services/source-ip/",
    tags: ["Services", "Networking", "Source IP"]
  },
  {
    id: "k8s-cka-29",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Which Controls Belong to the Scheduler",
    scenario: "A team is mapping which control plane component enforces each placement mechanism so they know where to look when a pod does not land where expected.",
    question: "Which of these are enforced by kube-scheduler when placing a pod? (Choose two.)",
    options: [
      { id: 'A', text: "ResourceQuota limits on a namespace." },
      { id: 'B', text: "Node affinity rules on the pod spec." },
      { id: 'C', text: "Taints with the NoSchedule effect." },
      { id: 'D', text: "Restarting containers that exit non-zero." }
    ],
    correctAnswers: ['B', 'C'],
    type: "multiple",
    explanation: "Node affinity and NoSchedule taints are both scheduling predicates evaluated by kube-scheduler when it selects a node for a pending pod. ResourceQuota is enforced by an admission controller in the API server before the object is ever persisted, and restarting exited containers is the kubelet job on the node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
    tags: ["Scheduler", "Architecture", "Scheduling"]
  },
  {
    id: "k8s-cka-30",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "ConfigMap Mounted as a Volume Versus envFrom",
    scenario: "An application reads its settings from a file at /etc/app/config.yaml and must pick up changes to that file without the pod being recreated.",
    question: "How should the ConfigMap be consumed?",
    options: [
      { id: 'A', text: "By baking the ConfigMap contents into the container image." },
      { id: 'B', text: "As a projected volume mount, because the kubelet refreshes mounted ConfigMap keys in place." },
      { id: 'C', text: "With envFrom.configMapRef so the values become environment variables." },
      { id: 'D', text: "With a single env entry using valueFrom.configMapKeyRef." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ConfigMap keys mounted as a volume are refreshed by the kubelet after an update - subject to the sync period and excluding subPath mounts - so an application that re-reads the file sees new values without a restart. Environment variables from envFrom or configMapKeyRef are resolved once at container start and never change, and baking configuration into the image makes every change a rebuild.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/",
    tags: ["ConfigMap", "Volumes", "Configuration"]
  },
  {
    id: "k8s-cka-31",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Viewing Resource Consumption Per Pod",
    scenario: "An operator wants to see live CPU and memory usage of the pods in the api namespace to find which one is driving node pressure. The metrics-server is installed.",
    question: "Which command shows that?",
    options: [
      { id: 'A', text: "kubectl get pods -n api -o wide" },
      { id: 'B', text: "kubectl top pods -n api" },
      { id: 'C', text: "kubectl logs -n api --all-containers" },
      { id: 'D', text: "kubectl describe namespace api" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl top pods reads live CPU and memory samples from the Metrics API served by metrics-server. describe namespace shows quotas and limit ranges rather than live usage, get -o wide adds node and IP columns only, and logs show application output with no resource data.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/",
    tags: ["Troubleshooting", "Metrics", "Resources"]
  },
  {
    id: "k8s-cka-32",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Preventing Voluntary Disruption From Taking Down a Quorum",
    scenario: "A five-replica quorum-based service must never drop below three available replicas while administrators drain nodes for maintenance.",
    question: "Which object enforces that during voluntary disruptions?",
    options: [
      { id: 'A', text: "A HorizontalPodAutoscaler with minReplicas: 3." },
      { id: 'B', text: "A ResourceQuota limiting pods to five." },
      { id: 'C', text: "A priorityClassName with a high value." },
      { id: 'D', text: "A PodDisruptionBudget with minAvailable: 3." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A PodDisruptionBudget with minAvailable: 3 makes the eviction API refuse evictions that would take availability below three, which is exactly what blocks an unsafe drain. ResourceQuota caps object counts, an HPA governs scaling decisions rather than evictions, and a PriorityClass affects preemption and scheduling order rather than disruption budgets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/",
    tags: ["PodDisruptionBudget", "Availability", "Scheduling"]
  },
  {
    id: "k8s-cka-33",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "CNI Plugin Missing on a New Node",
    scenario: "A freshly joined worker node stays NotReady and its kubelet log repeats \"network plugin is not ready: cni config uninitialized\". Pods scheduled there stay in ContainerCreating.",
    question: "What is the correct remedy?",
    options: [
      { id: 'A', text: "Install or repair the cluster CNI plugin so a config appears in /etc/cni/net.d." },
      { id: 'B', text: "Set the kubelet flag --fail-swap-on=false." },
      { id: 'C', text: "Restart kube-proxy on the control plane node." },
      { id: 'D', text: "Recreate the pods with hostNetwork: true permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet reports the node NotReady until a CNI configuration file exists in /etc/cni/net.d and the plugin binaries are present, so installing the cluster CNI - usually by letting its DaemonSet run on the node - is the fix. kube-proxy programs Service rules rather than pod networking, hostNetwork is a workaround that bypasses the problem, and the swap flag addresses a different startup failure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/addons/",
    tags: ["CNI", "Networking", "Troubleshooting"]
  },
  {
    id: "k8s-cka-34",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Component That Stores All Cluster State",
    scenario: "A disaster recovery plan must identify the single source of truth that has to be backed up to restore the cluster objects.",
    question: "Which component holds that state?",
    options: [
      { id: 'A', text: "etcd" },
      { id: 'B', text: "kube-proxy" },
      { id: 'C', text: "kube-controller-manager" },
      { id: 'D', text: "kubelet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "etcd is the consistent key-value store where the API server persists every Kubernetes object, so an etcd snapshot is what a restore depends on. The controller manager runs reconciliation loops without storing state, the kubelet manages pods on one node, and kube-proxy programs Service traffic rules.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/",
    tags: ["etcd", "Architecture", "Backup"]
  },
  {
    id: "k8s-cka-35",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pod Terminated With OOMKilled",
    scenario: "A container restarts repeatedly and kubectl describe pod shows Last State: Terminated with Reason: OOMKilled and Exit Code: 137.",
    question: "What does this indicate?",
    options: [
      { id: 'A', text: "The node ran out of disk and the kubelet evicted the pod." },
      { id: 'B', text: "The container exceeded its memory limit and the kernel killed it." },
      { id: 'C', text: "The image entrypoint exited normally after finishing its work." },
      { id: 'D', text: "The liveness probe failed and the kubelet restarted the container." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OOMKilled with exit code 137 means the cgroup memory limit was reached and the kernel OOM killer terminated the process, so the fix is a higher memory limit or a less memory-hungry workload. A failed liveness probe is reported as Reason: Error after a Killing event, disk-pressure eviction shows the pod as Evicted, and a normal exit reports code 0 with Reason: Completed.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/",
    tags: ["Troubleshooting", "OOMKilled", "Resources"]
  }
];

export default K8S_CKA_QUESTIONS_2;
