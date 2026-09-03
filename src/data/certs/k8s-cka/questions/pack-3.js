export const K8S_CKA_QUESTIONS_3 = [
  {
    id: "k8s-cka-36",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Generating a New Worker Join Token",
    scenario: "The bootstrap token printed by kubeadm init has expired and a new worker node must join the existing cluster.",
    question: "Which command produces a usable join command?",
    options: [
      { id: 'A', text: "kubectl create token default -n kube-system" },
      { id: 'B', text: "kubeadm reset on the control plane node" },
      { id: 'C', text: "kubeadm token create --print-join-command" },
      { id: 'D', text: "kubeadm init phase upload-certs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubeadm token create --print-join-command mints a fresh bootstrap token and prints the full kubeadm join line including the CA certificate hash. upload-certs is only for adding control plane nodes, kubeadm reset destroys the node configuration, and a ServiceAccount token is not a bootstrap credential.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-token/",
    tags: ["kubeadm", "Tokens", "Nodes"]
  },
  {
    id: "k8s-cka-37",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Cluster-Wide DNS Resolution Failure",
    scenario: "Pods across every namespace suddenly fail to resolve any name. Pod-to-pod traffic by IP address still works, and the CoreDNS deployment shows 0/2 pods ready.",
    question: "Which investigation is most likely to find the cause?",
    options: [
      { id: 'A', text: "Check the CoreDNS pod logs and events, plus the kube-dns Service endpoints in kube-system." },
      { id: 'B', text: "Increase the dnsPolicy timeout on each pod spec." },
      { id: 'C', text: "Edit /etc/resolv.conf inside each application pod." },
      { id: 'D', text: "Recreate every application Deployment so pods get new DNS settings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CoreDNS reporting no ready replicas is the cause rather than a symptom, so its pod logs, events, and the kube-dns Service endpoints show whether the Corefile is invalid, the pods are unschedulable, or the upstream resolver is unreachable. Editing resolv.conf in pods, recreating Deployments, and tuning dnsPolicy all leave the broken DNS backend in place.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/",
    tags: ["CoreDNS", "Troubleshooting", "DNS"]
  },
  {
    id: "k8s-cka-38",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Scaling a Deployment Imperatively",
    scenario: "During an unexpected traffic spike, the web deployment must go from three replicas to ten immediately, with no manifest edit.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl edit replicaset web" },
      { id: 'B', text: "kubectl autoscale deployment/web --max=10" },
      { id: 'C', text: "kubectl scale deployment/web --replicas=10" },
      { id: 'D', text: "kubectl set image deployment/web web=web:10" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl scale sets the replica count on the Deployment immediately. autoscale only creates an HPA that may or may not scale up right away, set image changes the container image, and editing the ReplicaSet directly is overwritten by the Deployment controller.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/",
    tags: ["Deployment", "Scaling", "kubectl"]
  },
  {
    id: "k8s-cka-39",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Expanding an Existing PersistentVolumeClaim",
    scenario: "A PVC bound to a CSI volume needs to grow from 20Gi to 50Gi without recreating the pod data.",
    question: "What must be true for the resize to succeed?",
    options: [
      { id: 'A', text: "The PersistentVolume capacity must be edited directly; PVCs are immutable." },
      { id: 'B', text: "The PVC must be deleted and recreated with the larger size." },
      { id: 'C', text: "The pod must set a resizePolicy of RestartContainer." },
      { id: 'D', text: "The StorageClass must set allowVolumeExpansion: true and the PVC spec.resources.requests.storage must be increased." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Volume expansion requires the StorageClass to allow it, after which raising the storage request on the PVC triggers the CSI driver to expand the volume and the kubelet to grow the filesystem. Editing the PV capacity by hand does not resize the backing volume, deleting the PVC risks the data, and resizePolicy applies to in-place CPU and memory resizing of containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Volume Expansion", "CSI"]
  },
  {
    id: "k8s-cka-40",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Allowing Traffic From One Namespace Only",
    scenario: "Pods labelled app=db in the data namespace must accept connections on port 5432 only from pods in the namespace labelled team=payments, and from nowhere else.",
    question: "Which NetworkPolicy rule expresses that?",
    options: [
      { id: 'A', text: "An ingress rule with from: [{ namespaceSelector: { matchLabels: { team: payments } } }] and ports: [{ port: 5432 }]." },
      { id: 'B', text: "An egress rule with to: [{ namespaceSelector: { matchLabels: { team: payments } } }]." },
      { id: 'C', text: "An ingress rule with ipBlock cidr set to the payments pod CIDR." },
      { id: 'D', text: "An ingress rule with from: [{ podSelector: { matchLabels: { team: payments } } }]." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "namespaceSelector matches the labels on the namespace object, so selecting team=payments and restricting the port to 5432 allows exactly the intended source. A bare podSelector only matches pods in the policy own namespace, an egress rule controls outbound traffic from the selected pods, and an ipBlock hard-codes addresses that change as pods reschedule.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Namespaces", "Security"]
  },
  {
    id: "k8s-cka-41",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Approving a Pending CertificateSigningRequest",
    scenario: "A new user submitted a CSR for client authentication. kubectl get csr shows the request in Pending state and the user cannot yet authenticate.",
    question: "Which command issues the certificate?",
    options: [
      { id: 'A', text: "kubectl auth reconcile -f role.yaml" },
      { id: 'B', text: "kubeadm certs renew all" },
      { id: 'C', text: "kubectl apply -f csr.yaml a second time" },
      { id: 'D', text: "kubectl certificate approve dev-user" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl certificate approve marks the CSR approved so the signing controller issues the certificate, which is then readable from status.certificate. Reapplying the CSR changes nothing, kubeadm certs renew rotates control plane certificates rather than user CSRs, and auth reconcile only creates RBAC objects.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/",
    tags: ["Certificates", "Authentication", "RBAC"]
  },
  {
    id: "k8s-cka-42",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Reading Cluster Events in Time Order",
    scenario: "Something went wrong in the last few minutes across several namespaces and the operator wants a chronological picture.",
    question: "Which command lists cluster events newest last, across all namespaces?",
    options: [
      { id: 'A', text: "kubectl logs -n kube-system --all-containers --since=5m" },
      { id: 'B', text: "kubectl describe events -A" },
      { id: 'C', text: "kubectl get all -A --show-labels" },
      { id: 'D', text: "kubectl get events -A --sort-by=.lastTimestamp" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl get events with -A and --sort-by=.lastTimestamp produces a chronological, cluster-wide event feed, which is the fastest triage view. describe expects a named object, control plane logs cover only kube-system components, and get all lists objects with no event history.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/",
    tags: ["Troubleshooting", "Events", "kubectl"]
  },
  {
    id: "k8s-cka-43",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Liveness Versus Readiness Probe Behaviour",
    scenario: "A service takes ninety seconds to warm its cache at startup. During that window it must not receive traffic, but it must also not be restarted.",
    question: "Which probe configuration fits?",
    options: [
      { id: 'A', text: "A startup probe alone, with no readiness probe." },
      { id: 'B', text: "A readiness probe on the health endpoint, plus a liveness probe with an initialDelaySeconds or startupProbe long enough to cover warm-up." },
      { id: 'C', text: "Only a readiness probe with failureThreshold: 1." },
      { id: 'D', text: "Only a liveness probe with a one-second period." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The readiness probe keeps the pod out of Service endpoints until the cache is warm, while a startup probe or a sufficient initial delay stops the liveness probe from killing the container during that window. An aggressive liveness-only setup restarts the pod forever, a readiness probe alone never detects a later deadlock, and a startup probe alone still admits traffic as soon as the container is running.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Probes", "Workloads", "Reliability"]
  },
  {
    id: "k8s-cka-44",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "What kube-proxy Actually Programs",
    scenario: "A new administrator asks what breaks if kube-proxy stops running on a node while the CNI plugin keeps working.",
    question: "Which statement is correct?",
    options: [
      { id: 'A', text: "DNS keeps working but pods lose their IP addresses." },
      { id: 'B', text: "Pod-to-pod traffic by pod IP keeps working, but new ClusterIP Service routing on that node is no longer programmed." },
      { id: 'C', text: "The node is marked NotReady within seconds." },
      { id: 'D', text: "All pod networking stops immediately, including pod IP traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kube-proxy translates Services into iptables or IPVS rules; the CNI plugin provides pod IP connectivity independently, so pod-to-pod traffic survives while Service virtual IP routing goes stale on that node. Pod addressing is not kube-proxy responsibility, DNS itself is a Service that will become unreachable rather than pods losing IPs, and node readiness is reported by the kubelet, not kube-proxy.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "Networking", "Services"]
  },
  {
    id: "k8s-cka-45",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Late Binding for Zone-Aware Volumes",
    scenario: "In a multi-zone cluster, PersistentVolumes are provisioned in a zone before the scheduler picks a node, and pods then fail to start because the chosen node is in a different zone.",
    question: "Which StorageClass setting prevents the mismatch?",
    options: [
      { id: 'A', text: "allowVolumeExpansion: true" },
      { id: 'B', text: "volumeBindingMode: WaitForFirstConsumer" },
      { id: 'C', text: "volumeBindingMode: Immediate" },
      { id: 'D', text: "reclaimPolicy: Retain" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "WaitForFirstConsumer delays binding and provisioning until a pod using the claim is scheduled, so the volume is created in the zone of the selected node. Immediate is the default that causes exactly this mismatch, the reclaim policy governs deletion behaviour, and expansion controls resizing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["Storage", "StorageClass", "Topology"]
  },
  {
    id: "k8s-cka-46",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Namespace Scoped Versus Cluster Scoped Resources",
    scenario: "An administrator is deciding which objects can be isolated per team by namespace.",
    question: "Which resource is cluster scoped rather than namespaced?",
    options: [
      { id: 'A', text: "PersistentVolume" },
      { id: 'B', text: "ServiceAccount" },
      { id: 'C', text: "Role" },
      { id: 'D', text: "ConfigMap" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PersistentVolume is a cluster-scoped object; the namespaced counterpart is the PersistentVolumeClaim that binds to it. ConfigMaps, Roles, and ServiceAccounts all live inside a namespace, which is why kubectl api-resources --namespaced=false is a useful check.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    tags: ["Namespaces", "API", "Architecture"]
  },
  {
    id: "k8s-cka-47",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pod Pending With Insufficient CPU",
    scenario: "A pod requesting 4 CPU stays Pending. describe shows the event \"0/3 nodes are available: 3 Insufficient cpu\".",
    question: "Which action can make the pod schedulable? (Choose two.)",
    options: [
      { id: 'A', text: "Add a toleration for node-role.kubernetes.io/control-plane." },
      { id: 'B', text: "Lower the CPU request to a value a node can satisfy." },
      { id: 'C', text: "Remove the CPU limit while leaving the request at 4." },
      { id: 'D', text: "Add a node with enough allocatable CPU." }
    ],
    correctAnswers: ['B', 'D'],
    type: "multiple",
    explanation: "The scheduler compares the CPU request against allocatable capacity, so either reducing the request or adding capacity resolves it. Removing the limit changes only the cgroup ceiling and leaves the request unchanged, and tolerating the control plane taint does not help unless a control plane node has four spare CPUs, which the event says no node does.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Scheduling", "Resources", "Troubleshooting"]
  },
  {
    id: "k8s-cka-48",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Job Completions and Parallelism",
    scenario: "A batch Job must process twelve work items, running at most four pods at any one time, and is finished only when twelve pods have completed successfully.",
    question: "Which Job spec matches?",
    options: [
      { id: 'A', text: "completions: 12 and parallelism: 4" },
      { id: 'B', text: "backoffLimit: 12 and parallelism: 4" },
      { id: 'C', text: "completions: 12 and backoffLimit: 4" },
      { id: 'D', text: "completions: 4 and parallelism: 12" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "completions is the number of successful pod runs required and parallelism caps how many run at once, so twelve and four express the requirement directly. Setting completions to 4 and parallelism to 12 inverts the two, and backoffLimit only counts retries before the Job is marked failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/",
    tags: ["Jobs", "Batch", "Workloads"]
  },
  {
    id: "k8s-cka-49",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Gateway API Versus Ingress",
    scenario: "A platform team wants route configuration owned by application teams while cluster operators keep control of the listener, TLS certificates, and load balancer address.",
    question: "Which model provides that split of responsibility?",
    options: [
      { id: 'A', text: "A single Ingress object per cluster shared by all teams." },
      { id: 'B', text: "One LoadBalancer Service per application team." },
      { id: 'C', text: "A NetworkPolicy per route with L7 path selectors." },
      { id: 'D', text: "Gateway API, where a GatewayClass and Gateway are operator-owned and HTTPRoutes are application-owned." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gateway API was designed around role separation: infrastructure providers own the GatewayClass, cluster operators own the Gateway and its listeners and TLS, and application developers attach HTTPRoutes. A shared Ingress mixes both concerns in one object, per-team LoadBalancers multiply external addresses and cost, and NetworkPolicy has no L7 routing at all.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/gateway/",
    tags: ["Gateway API", "Ingress", "Networking"]
  },
  {
    id: "k8s-cka-50",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Ephemeral Storage Shared Between Containers in a Pod",
    scenario: "Two containers in the same pod must exchange files through a directory that lives only as long as the pod.",
    question: "Which volume type fits?",
    options: [
      { id: 'A', text: "emptyDir" },
      { id: 'B', text: "hostPath" },
      { id: 'C', text: "persistentVolumeClaim" },
      { id: 'D', text: "configMap" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An emptyDir volume is created when the pod is assigned to a node, is mountable by every container in the pod, and is deleted with the pod - exactly the scratch space described. hostPath exposes a node directory with real security and portability risks, a PVC provides durable storage that outlives the pod, and a configMap volume is read-only configuration data.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["Volumes", "emptyDir", "Storage"]
  },
  {
    id: "k8s-cka-51",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Checking What a User Is Allowed to Do",
    scenario: "Before granting more permissions, an administrator wants to confirm whether the ServiceAccount build in namespace ci may already delete deployments there.",
    question: "Which command answers that?",
    options: [
      { id: 'A', text: "kubectl auth can-i delete deployments --as=system:serviceaccount:ci:build -n ci" },
      { id: 'B', text: "kubectl auth reconcile -n ci" },
      { id: 'C', text: "kubectl get rolebindings -n ci" },
      { id: 'D', text: "kubectl describe serviceaccount build -n ci" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl auth can-i with --as impersonation asks the API server authorizer directly and returns yes or no for that exact verb, resource, and namespace. Describing the ServiceAccount shows its secrets rather than its permissions, listing RoleBindings requires manual correlation with ClusterRoleBindings too, and auth reconcile writes RBAC objects instead of querying them.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/",
    tags: ["RBAC", "Authorization", "kubectl"]
  },
  {
    id: "k8s-cka-52",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Debugging a Distroless Container With No Shell",
    scenario: "A crashing container is built from a distroless image with no shell, so kubectl exec fails. The pod is still running and must not be recreated.",
    question: "Which approach gives an interactive debugging environment inside that pod?",
    options: [
      { id: 'A', text: "kubectl cp a shell binary into the container filesystem." },
      { id: 'B', text: "kubectl edit pod POD and add a sidecar container." },
      { id: 'C', text: "kubectl debug -it POD --image=busybox --target=app to attach an ephemeral container." },
      { id: 'D', text: "kubectl attach POD -c app" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl debug adds an ephemeral container to a running pod, and --target shares the process namespace of the named container so its filesystem and processes can be inspected with the tooling image. kubectl cp needs a working exec path for the tar step, most pod spec fields including containers are immutable so the edit is rejected, and attach only connects to the existing stdio of a container that has no shell.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Troubleshooting", "Ephemeral Containers", "kubectl debug"]
  },
  {
    id: "k8s-cka-53",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Spreading Replicas Evenly Across Zones",
    scenario: "A deployment must spread its replicas across availability zones so no zone carries more than one replica more than any other, and pods should still schedule if perfect balance is impossible.",
    question: "Which configuration expresses that?",
    options: [
      { id: 'A', text: "requiredDuringSchedulingIgnoredDuringExecution podAntiAffinity on the zone topology key." },
      { id: 'B', text: "A nodeSelector on topology.kubernetes.io/zone." },
      { id: 'C', text: "topologySpreadConstraints with maxSkew: 1, topologyKey: topology.kubernetes.io/zone and whenUnsatisfiable: ScheduleAnyway." },
      { id: 'D', text: "topologySpreadConstraints with maxSkew: 1 and whenUnsatisfiable: DoNotSchedule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A topology spread constraint with maxSkew 1 on the zone key encodes the balance requirement, and ScheduleAnyway keeps it a soft preference so pods still schedule when balance cannot be achieved. DoNotSchedule would leave pods Pending instead, zone-level required anti-affinity would cap the deployment at one pod per zone, and a nodeSelector pins everything to a single zone.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Scheduling", "High Availability"]
  },
  {
    id: "k8s-cka-54",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Quickly Exposing a Deployment Inside the Cluster",
    scenario: "A deployment named api listens on container port 8080 and needs a stable internal address on port 80 for other pods.",
    question: "Which command creates it in one step?",
    options: [
      { id: 'A', text: "kubectl create ingress api --rule=\"/=api:8080\"" },
      { id: 'B', text: "kubectl port-forward deployment/api 80:8080" },
      { id: 'C', text: "kubectl set port deployment/api 80" },
      { id: 'D', text: "kubectl expose deployment api --port=80 --target-port=8080" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl expose creates a ClusterIP Service whose port is 80 and whose targetPort is the container port 8080, with a selector copied from the deployment. port-forward is a temporary local tunnel tied to one kubectl process, an Ingress needs a Service to point at, and kubectl set port is not a command.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/",
    tags: ["Services", "kubectl", "Networking"]
  },
  {
    id: "k8s-cka-55",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Limiting Total Resource Consumption Per Namespace",
    scenario: "Each team namespace must not consume more than 20 CPU and 40Gi of memory in aggregate across all its pods.",
    question: "Which object enforces the aggregate cap?",
    options: [
      { id: 'A', text: "PriorityClass" },
      { id: 'B', text: "PodDisruptionBudget" },
      { id: 'C', text: "LimitRange" },
      { id: 'D', text: "ResourceQuota" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ResourceQuota caps the total requests and limits that all objects in a namespace may consume and rejects objects that would exceed it. LimitRange sets per-container defaults, minimums, and maximums rather than a namespace total, PriorityClass influences preemption, and a PodDisruptionBudget governs evictions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota", "Multi-tenancy", "Resources"]
  },
  {
    id: "k8s-cka-56",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Static Pod Not Starting After a Manifest Change",
    scenario: "A static pod manifest was placed in /etc/kubernetes/manifests on a worker node, but no pod appears and no event is recorded in the API server.",
    question: "Which check comes first?",
    options: [
      { id: 'A', text: "Confirm the kubelet staticPodPath in its config file and read journalctl -u kubelet for parse errors." },
      { id: 'B', text: "Check the scheduler logs for a placement failure." },
      { id: 'C', text: "Verify that a Deployment owns the static pod." },
      { id: 'D', text: "Run kubectl apply -f on the manifest from the control plane node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Static pods are started by the kubelet from a watched directory, so the two things that break them are a staticPodPath pointing elsewhere and a manifest the kubelet cannot parse - both visible in the kubelet configuration and journal. Applying the file with kubectl creates an unrelated API-managed pod, the scheduler is never involved in static pods, and static pods have no controller owner.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "kubelet", "Troubleshooting"]
  },
  {
    id: "k8s-cka-57",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Pod Stuck Terminating With a Volume Still Attached",
    scenario: "A pod using a CSI block volume is stuck in Terminating after its node crashed. The replacement pod cannot start because the volume is still attached to the dead node.",
    question: "Which action is the correct recovery?",
    options: [
      { id: 'A', text: "Delete the PersistentVolume so a new one is provisioned." },
      { id: 'B', text: "Restart kube-proxy on the surviving nodes." },
      { id: 'C', text: "Remove the finalizer from the PersistentVolumeClaim." },
      { id: 'D', text: "Delete the Node object for the crashed node so the attach-detach controller can force-detach the volume." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "While the Node object exists, Kubernetes assumes the kubelet may still be writing and refuses to detach; removing the Node object lets the attach-detach controller release the volume so it can attach elsewhere. Deleting the PV discards the data, stripping a PVC finalizer only hides bookkeeping and risks orphaning the volume, and kube-proxy plays no part in volume attachment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "CSI", "Troubleshooting"]
  },
  {
    id: "k8s-cka-58",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Container That Must Finish Before the App Starts",
    scenario: "A pod must run a schema migration to completion before its application container is allowed to start.",
    question: "Which pod construct guarantees that ordering?",
    options: [
      { id: 'A', text: "An initContainer running the migration." },
      { id: 'B', text: "A postStart lifecycle hook on the application container." },
      { id: 'C', text: "A separate Job with the same labels as the pod." },
      { id: 'D', text: "A sidecar container with a readiness probe." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Init containers run to completion in order before any regular container starts, which is precisely the migration-then-app ordering required. A sidecar starts alongside the app, a postStart hook runs after the app container has already been created, and a separate Job has no ordering relationship with the pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
    tags: ["Init Containers", "Pods", "Workloads"]
  },
  {
    id: "k8s-cka-59",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Terminating TLS at the Ingress",
    scenario: "An Ingress must serve https for shop.example.com using a certificate and key already held in a Secret named shop-tls in the same namespace.",
    question: "How is the certificate wired to the Ingress?",
    options: [
      { id: 'A', text: "An annotation naming the Secret on the backend Service." },
      { id: 'B', text: "A ConfigMap referencing the certificate path." },
      { id: 'C', text: "A volume mount of the Secret into the ingress controller pod." },
      { id: 'D', text: "A spec.tls entry listing the host shop.example.com and secretName shop-tls." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Ingress spec.tls list maps hosts to a kubernetes.io/tls Secret, and the ingress controller loads that certificate to terminate TLS for those hosts. Mounting the Secret into the controller bypasses the Ingress API, Services carry no TLS binding for Ingress, and ConfigMaps are the wrong object for private key material.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "TLS", "Secrets"]
  },
  {
    id: "k8s-cka-60",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Helm Release Upgrade Versus Reinstall",
    scenario: "A cluster add-on installed with Helm needs a new values file applied while keeping its release history and existing resources.",
    question: "Which command is appropriate?",
    options: [
      { id: 'A', text: "helm rollback RELEASE" },
      { id: 'B', text: "helm upgrade RELEASE CHART -f values.yaml" },
      { id: 'C', text: "helm uninstall RELEASE followed by helm install" },
      { id: 'D', text: "helm template CHART | kubectl apply -f -" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "helm upgrade renders the chart with the new values, applies the diff, and records a new revision that can later be rolled back. Uninstall and reinstall causes an outage and discards history, helm template plus kubectl apply drops Helm release tracking altogether, and rollback moves to a previous revision rather than applying new values.",
    referenceUrl: "https://helm.sh/docs/helm/helm_upgrade/",
    tags: ["Helm", "Add-ons", "Cluster Administration"]
  }
];

export default K8S_CKA_QUESTIONS_3;
