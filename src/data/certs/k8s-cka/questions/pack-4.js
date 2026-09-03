export const K8S_CKA_QUESTIONS_4 = [
  {
    id: "k8s-cka-61",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Restoring etcd From a Snapshot",
    scenario: "A control plane must be restored from /opt/etcd-backup.db into a fresh data directory at /var/lib/etcd-restore on a kubeadm node with stacked etcd.",
    question: "What must happen for the restored data to be used?",
    options: [
      { id: 'A', text: "Apply the snapshot with kubectl apply -f etcd-backup.db." },
      { id: 'B', text: "Run etcdctl snapshot restore with --data-dir=/var/lib/etcd-restore, then point the etcd static pod hostPath at that directory so the kubelet restarts etcd against it." },
      { id: 'C', text: "Copy the snapshot file into /var/lib/etcd and restart the kubelet." },
      { id: 'D', text: "Run etcdctl snapshot restore and the running etcd picks up the new data automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "snapshot restore writes a new member data directory, and etcd only uses it once the static pod manifest volume points there and the kubelet restarts the pod. A running etcd never rereads its data directory, the raw snapshot file is not a valid data directory, and a snapshot is not a Kubernetes manifest.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd", "Restore", "Disaster Recovery"]
  },
  {
    id: "k8s-cka-62",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Default Control Plane Taint",
    scenario: "A single-node kubeadm cluster refuses to schedule ordinary workloads onto its only node.",
    question: "Which taint is responsible and how is it removed?",
    options: [
      { id: 'A', text: "node.kubernetes.io/unreachable:NoExecute, removed by restarting the kubelet" },
      { id: 'B', text: "node.kubernetes.io/unschedulable:NoSchedule, removed with kubectl drain" },
      { id: 'C', text: "node.kubernetes.io/disk-pressure:NoSchedule, removed by freeing disk space" },
      { id: 'D', text: "node-role.kubernetes.io/control-plane:NoSchedule, removed with kubectl taint nodes NODE node-role.kubernetes.io/control-plane-" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubeadm taints control plane nodes with node-role.kubernetes.io/control-plane:NoSchedule, and the trailing dash syntax removes it so a single-node cluster can run workloads. The unreachable and disk-pressure taints are condition-driven and would show matching node conditions, and the unschedulable taint comes from cordon, which drain adds rather than removes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints", "kubeadm", "Scheduling"]
  },
  {
    id: "k8s-cka-63",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Egress Policy Must Still Allow DNS",
    scenario: "After applying a default-deny egress NetworkPolicy to a namespace, application pods can no longer resolve any hostname, though the policy explicitly allows their database CIDR.",
    question: "What is missing from the policy?",
    options: [
      { id: 'A', text: "An ingress rule allowing port 53 from CoreDNS." },
      { id: 'B', text: "An egress rule allowing UDP and TCP port 53 to the kube-system CoreDNS pods." },
      { id: 'C', text: "A dnsPolicy of ClusterFirstWithHostNet on each pod." },
      { id: 'D', text: "A hostAliases entry for the database hostname." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A default-deny egress policy blocks the DNS queries pods send to CoreDNS, so the policy needs an explicit egress rule to the kube-system DNS pods on port 53 over UDP and TCP. DNS replies are return traffic on an allowed connection rather than separate ingress, dnsPolicy changes which resolver is configured rather than whether the packets are permitted, and hostAliases would only paper over one name.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "DNS", "Egress"]
  },
  {
    id: "k8s-cka-64",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Zero-Downtime Rolling Update Settings",
    scenario: "A ten-replica deployment must never drop below ten available pods during an update, and extra pods may run temporarily.",
    question: "Which rolling update strategy achieves that?",
    options: [
      { id: 'A', text: "maxUnavailable: 50% and maxSurge: 50%" },
      { id: 'B', text: "maxUnavailable: 0 and maxSurge: 2" },
      { id: 'C', text: "maxUnavailable: 2 and maxSurge: 0" },
      { id: 'D', text: "strategy type Recreate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "maxUnavailable: 0 forbids the deployment from going below the desired count, and a non-zero maxSurge gives the controller room to create new pods before old ones are removed. A maxUnavailable of 2 with no surge guarantees two pods are unavailable, Recreate deletes every pod before starting new ones, and the 50 percent pair allows five pods to be unavailable at once.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Rolling Update", "Availability"]
  },
  {
    id: "k8s-cka-65",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Choosing Secret Over ConfigMap",
    scenario: "An application needs a database password injected at runtime, and the value must not appear in plain text in a ConfigMap.",
    question: "Which statement about Kubernetes Secrets is accurate?",
    options: [
      { id: 'A', text: "Secret values are hashed, so the original password cannot be recovered." },
      { id: 'B', text: "Secrets are stored outside etcd in a dedicated vault." },
      { id: 'C', text: "Secret data is base64-encoded in the API and is only encrypted at rest if encryption at rest is configured on the API server." },
      { id: 'D', text: "Secrets are encrypted end to end by default and cannot be read by cluster administrators." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Secrets are base64-encoded, not encrypted, unless an EncryptionConfiguration is enabled on the API server, so RBAC and encryption at rest are what actually protect them. They are not end-to-end encrypted, they live in etcd like every other object, and base64 is reversible rather than a hash.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets", "Security", "Configuration"]
  },
  {
    id: "k8s-cka-66",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Encrypting Secrets at Rest",
    scenario: "A compliance requirement states that Secret objects must be encrypted inside etcd, using a key managed on the control plane node.",
    question: "How is that enabled?",
    options: [
      { id: 'A', text: "Enable TLS between the API server and etcd." },
      { id: 'B', text: "Set encrypted: true in each Secret metadata." },
      { id: 'C', text: "Turn on the PodSecurity admission controller." },
      { id: 'D', text: "Provide an EncryptionConfiguration file and pass --encryption-provider-config to kube-apiserver, then rewrite existing Secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Encryption at rest is an API server feature configured with an EncryptionConfiguration listing providers such as aescbc or a KMS plugin, and existing objects stay in their old form until they are rewritten, typically with kubectl get secrets -A -o json | kubectl replace -f -. There is no per-object encrypted flag, TLS protects data in transit rather than at rest, and PodSecurity governs pod-level security standards.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Secrets", "Encryption", "API Server"]
  },
  {
    id: "k8s-cka-67",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Node Under Disk Pressure Evicting Pods",
    scenario: "Pods on one node are being evicted with the message \"The node was low on resource: ephemeral-storage\". The node condition DiskPressure is True.",
    question: "Which two actions address the cause? (Choose two.)",
    options: [
      { id: 'A', text: "Prune unused images and stopped containers on the node." },
      { id: 'B', text: "Add a toleration for node.kubernetes.io/disk-pressure so the pods stay." },
      { id: 'C', text: "Increase the pod memory limits." },
      { id: 'D', text: "Set ephemeral-storage requests and limits on the workloads writing large files." }
    ],
    correctAnswers: ['A', 'D'],
    type: "multiple",
    explanation: "Reclaiming disk on the node clears the DiskPressure condition, and declaring ephemeral-storage requests and limits lets the kubelet contain and evict only the offending workload instead of whichever pod happens to be running. Memory limits address a different resource, and tolerating the disk-pressure taint keeps pods on a node that is genuinely out of space.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Eviction", "Storage", "Troubleshooting"]
  },
  {
    id: "k8s-cka-68",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Choosing a Service Type for External Access on Bare Metal",
    scenario: "A bare-metal cluster with no cloud load balancer integration must expose a single HTTP application to users outside the cluster, and the team wants to avoid one external port per service.",
    question: "Which approach is the most appropriate?",
    options: [
      { id: 'A', text: "Use an ExternalName Service pointing at the pod IP." },
      { id: 'B', text: "Deploy an ingress controller reachable from outside, and route applications through Ingress objects." },
      { id: 'C', text: "Expose a NodePort per application and document the port numbers." },
      { id: 'D', text: "Create a LoadBalancer Service and wait for an external IP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An ingress controller gives one externally reachable entry point that routes many applications by host and path, which is the standard bare-metal answer. A LoadBalancer Service stays Pending without a cloud provider or a bare-metal implementation, NodePort per application is exactly the port sprawl to avoid, and ExternalName only returns a CNAME for an external DNS name.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",
    tags: ["Ingress", "Services", "Bare Metal"]
  },
  {
    id: "k8s-cka-69",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "CronJob Schedule Syntax",
    scenario: "A cleanup task must run at 02:30 every day.",
    question: "Which cron schedule expresses that?",
    options: [
      { id: 'A', text: "0 2 30 * *" },
      { id: 'B', text: "2 30 * * *" },
      { id: 'C', text: "30 2 * * *" },
      { id: 'D', text: "* 2 30 * *" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cron fields are minute, hour, day of month, month, day of week, so 02:30 daily is \"30 2 * * *\". The expression 2 30 * * * puts 30 in the hour field, which is invalid; * 2 30 * * runs every minute of hour 2 on the 30th; and 0 2 30 * * runs at 02:00 on the 30th of each month.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["CronJob", "Batch", "Workloads"]
  },
  {
    id: "k8s-cka-70",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Preemption by a Higher Priority Pod",
    scenario: "A cluster is full. A pod with a PriorityClass of value 1000000 is created and stays Pending briefly, then a lower priority pod on node02 is terminated.",
    question: "Which component made that decision and on what basis?",
    options: [
      { id: 'A', text: "The API server rejected the lower priority pod at admission time." },
      { id: 'B', text: "The ReplicaSet controller scaled down to free capacity." },
      { id: 'C', text: "The kubelet on node02 evicted the pod because of memory pressure." },
      { id: 'D', text: "kube-scheduler preempted lower priority pods on a node where eviction would make the pending pod schedulable." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When a pod with higher priority cannot be scheduled, kube-scheduler looks for a node where evicting lower priority pods would let it fit and deletes those victims, honouring their disruption budgets on a best-effort basis. Node-pressure eviction is a kubelet action driven by resource conditions, ReplicaSets do not free capacity for other workloads, and admission control does not delete running pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
    tags: ["Priority", "Preemption", "Scheduling"]
  },
  {
    id: "k8s-cka-71",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Enforcing Pod Security Standards on a Namespace",
    scenario: "A namespace must reject any pod that requests privileged mode or host namespaces, using the built-in admission controller rather than a third-party policy engine.",
    question: "Which configuration does that?",
    options: [
      { id: 'A', text: "Label the namespace with pod-security.kubernetes.io/enforce: restricted or baseline." },
      { id: 'B', text: "Add a ResourceQuota counting privileged pods." },
      { id: 'C', text: "Set securityContext.privileged: false on the namespace object." },
      { id: 'D', text: "Create a PodSecurityPolicy object with privileged: false." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security admission is configured by namespace labels selecting a level - privileged, baseline, or restricted - and a mode of enforce, audit, or warn; baseline already forbids privileged containers and host namespaces. PodSecurityPolicy was removed in v1.25, ResourceQuota counts objects and resource totals, and namespaces have no securityContext field.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Pod Security", "Admission", "Security"]
  },
  {
    id: "k8s-cka-72",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Expired Control Plane Certificates",
    scenario: "After a cluster sat powered off for over a year, kubectl reports \"x509: certificate has expired or is not yet valid\" and the API server will not start.",
    question: "Which command renews the kubeadm-managed certificates?",
    options: [
      { id: 'A', text: "systemctl restart kubelet" },
      { id: 'B', text: "kubeadm certs renew all, followed by restarting the control plane static pods and refreshing the admin kubeconfig" },
      { id: 'C', text: "kubeadm reset and rejoin the node" },
      { id: 'D', text: "kubectl certificate approve --all" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm certs renew all reissues the control plane certificates from the cluster CA, after which the static pods must be restarted and /etc/kubernetes/admin.conf regenerated because it embeds an expired client certificate. Approving CSRs requires a working API server, kubeadm reset destroys the control plane, and restarting the kubelet does not change certificate validity.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["Certificates", "kubeadm", "Troubleshooting"]
  },
  {
    id: "k8s-cka-73",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Reaching a Pod From a Laptop Without Exposing It",
    scenario: "A developer wants temporary access to a pod HTTP port from a workstation, with no Service, Ingress, or firewall change.",
    question: "Which command provides it?",
    options: [
      { id: 'A', text: "kubectl proxy --port=8080" },
      { id: 'B', text: "kubectl port-forward pod/api 8080:8080" },
      { id: 'C', text: "kubectl expose pod api --type=LoadBalancer" },
      { id: 'D', text: "kubectl attach pod/api" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl port-forward tunnels a local port to a port on the pod through the API server for as long as the command runs, requiring no cluster object. Exposing a LoadBalancer creates a permanent public endpoint, kubectl proxy exposes the Kubernetes API rather than the pod application port, and attach connects to container stdio.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/",
    tags: ["kubectl", "Networking", "Debugging"]
  },
  {
    id: "k8s-cka-74",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "subPath Mount Behaviour",
    scenario: "A ConfigMap is mounted with subPath so that only one key lands as /etc/nginx/nginx.conf without hiding the rest of the directory. The ConfigMap is later updated.",
    question: "What happens to the file inside the running container?",
    options: [
      { id: 'A', text: "It keeps the old contents, because subPath mounts are not updated when the ConfigMap changes." },
      { id: 'B', text: "The container is restarted automatically to pick up the change." },
      { id: 'C', text: "The pod is evicted and rescheduled." },
      { id: 'D', text: "It is updated within the kubelet sync period like any other ConfigMap volume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Volumes mounted with subPath do not receive ConfigMap or Secret updates, so the file stays stale until the pod is recreated - a common source of confusion when a whole-directory mount would have refreshed. Kubernetes does not restart containers or evict pods in response to a ConfigMap change unless a controller or operator is explicitly configured to do so.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["ConfigMap", "Volumes", "subPath"]
  },
  {
    id: "k8s-cka-75",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Highly Available Control Plane Topologies",
    scenario: "An organisation is choosing between running etcd on the control plane nodes and running it on dedicated machines.",
    question: "Which statement correctly contrasts the two topologies?",
    options: [
      { id: 'A', text: "A stacked topology couples an etcd member to each control plane node so losing one node loses both roles, while an external etcd topology decouples them at the cost of more machines." },
      { id: 'B', text: "A stacked topology cannot be created with kubeadm." },
      { id: 'C', text: "A stacked topology requires an odd number of etcd members while an external topology does not." },
      { id: 'D', text: "Only external etcd supports TLS between the API server and etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The tradeoff is coupling versus machine count: stacked etcd runs a member alongside each control plane instance so a node failure removes both, whereas external etcd isolates the datastore on its own hosts. Both topologies want an odd member count for quorum, both use TLS, and stacked is in fact the kubeadm default.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["High Availability", "etcd", "Architecture"]
  },
  {
    id: "k8s-cka-76",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSet Ordered Versus Parallel Pod Management",
    scenario: "A StatefulSet of five replicas takes far too long to roll out because each pod waits for the previous one to become Ready, and the application does not actually require ordering at startup.",
    question: "Which field speeds up creation and scaling?",
    options: [
      { id: 'A', text: "revisionHistoryLimit: 0" },
      { id: 'B', text: "terminationGracePeriodSeconds: 0" },
      { id: 'C', text: "podManagementPolicy: Parallel" },
      { id: 'D', text: "updateStrategy.type: OnDelete" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "podManagementPolicy: Parallel tells the StatefulSet controller to create and delete pods simultaneously instead of waiting for each ordinal, while keeping stable identities and volumes. OnDelete changes how updates are applied rather than creation order, revisionHistoryLimit only trims stored revisions, and a zero grace period forces unsafe termination.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSet", "Workloads", "Scaling"]
  },
  {
    id: "k8s-cka-77",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Reading Logs From a Specific Container",
    scenario: "A pod runs an application container named app and a sidecar named proxy. Only the sidecar output is needed.",
    question: "Which command returns it?",
    options: [
      { id: 'A', text: "kubectl describe pod POD | grep proxy" },
      { id: 'B', text: "kubectl logs POD --all-containers --tail=1" },
      { id: 'C', text: "kubectl logs POD --previous" },
      { id: 'D', text: "kubectl logs POD -c proxy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The -c flag selects one container inside a multi-container pod. --previous returns the last terminated instance of the default container, --all-containers mixes both streams, and describe shows object state rather than log output.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["Logs", "kubectl", "Troubleshooting"]
  },
  {
    id: "k8s-cka-78",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Choosing Between IngressClass and Annotations",
    scenario: "A cluster runs two ingress controllers and an Ingress must be handled by the one registered as nginx.",
    question: "What is the current, non-deprecated way to select it?",
    options: [
      { id: 'A', text: "Set spec.ingressClassName: nginx on the Ingress." },
      { id: 'B', text: "Set the kubernetes.io/ingress.class annotation." },
      { id: 'C', text: "Name the Ingress object nginx." },
      { id: 'D', text: "Add a label controller=nginx to the Ingress." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "spec.ingressClassName references an IngressClass resource and is the supported selection mechanism; a class can also be marked default for Ingresses that omit it. The kubernetes.io/ingress.class annotation is the deprecated predecessor, and object names and arbitrary labels do not select a controller.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "IngressClass", "Networking"]
  },
  {
    id: "k8s-cka-79",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kubelet Fails to Start After a Node Reboot",
    scenario: "After a reboot, the kubelet on a worker exits repeatedly. journalctl shows \"failed to run Kubelet: running with swap on is not supported, please disable swap\".",
    question: "Which remediation is correct for a standard cluster?",
    options: [
      { id: 'A', text: "Restart the container runtime." },
      { id: 'B', text: "Delete the node object and rejoin the cluster." },
      { id: 'C', text: "Disable swap with swapoff -a and comment the swap entry out of /etc/fstab so it stays off across reboots." },
      { id: 'D', text: "Reduce the pod memory requests on that node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet refuses to start with swap enabled unless swap support is deliberately configured, so turning swap off now and in fstab makes the fix survive the next reboot. Rejoining the node repeats the same failure, request tuning does not affect the startup check, and the runtime is not the component complaining.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/",
    tags: ["kubelet", "Nodes", "Troubleshooting"]
  },
  {
    id: "k8s-cka-80",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Extending the API With a CustomResourceDefinition",
    scenario: "A team wants kubectl get backups to work cluster-wide with server-side validation of the object schema, without running a separate API server.",
    question: "Which mechanism provides that?",
    options: [
      { id: 'A', text: "A CustomResourceDefinition with an OpenAPI v3 structural schema." },
      { id: 'B', text: "A ValidatingAdmissionWebhook on ConfigMaps." },
      { id: 'C', text: "A kubectl plugin that shells out to a database." },
      { id: 'D', text: "An APIService registering an aggregated API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CRD adds a new resource type to the existing API server and validates instances against its structural schema, which is exactly the requirement without extra infrastructure. An aggregated API server is the option that does require running a separate server, an admission webhook on ConfigMaps does not create a new resource type, and a kubectl plugin adds no server-side storage or validation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["CRD", "API", "Extensibility"]
  },
  {
    id: "k8s-cka-81",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Difference Between Requests and Limits",
    scenario: "A container declares a memory request of 256Mi and a memory limit of 512Mi.",
    question: "What do those two values control?",
    options: [
      { id: 'A', text: "Both values are advisory and are not enforced." },
      { id: 'B', text: "The request is what the scheduler reserves when placing the pod; the limit is the ceiling the kernel enforces at runtime." },
      { id: 'C', text: "The request applies to the pod and the limit applies to the namespace." },
      { id: 'D', text: "The request is the maximum the container may use; the limit is what the scheduler reserves." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Requests drive scheduling and are subtracted from node allocatable capacity, while limits are enforced by cgroups at runtime - CPU is throttled and memory over the limit is OOM killed. Describing the request as a maximum reverses the two roles, limits are genuinely enforced rather than advisory, and namespace-wide caps come from ResourceQuota rather than container limits.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resources", "Scheduling", "Limits"]
  },
  {
    id: "k8s-cka-82",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Why a PVC Stays Pending",
    scenario: "A PersistentVolumeClaim requesting 100Gi with storageClassName: fast stays Pending. No StorageClass named fast exists in the cluster.",
    question: "What is the outcome and the fix?",
    options: [
      { id: 'A', text: "The API server rejects the claim at creation time." },
      { id: 'B', text: "The default StorageClass is used automatically after a timeout." },
      { id: 'C', text: "No provisioner matches, so the claim stays Pending until the StorageClass exists or the claim references an existing class." },
      { id: 'D', text: "A PersistentVolume of 100Gi is created without a class." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Naming a non-existent StorageClass leaves the claim unmatched and unprovisioned, and it remains Pending indefinitely; the default class only applies when storageClassName is omitted entirely. The API server accepts the object because the class need not exist at creation time, and nothing provisions a volume on its own.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "PVC", "Troubleshooting"]
  },
  {
    id: "k8s-cka-83",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Reserved Address Ranges in a Cluster",
    scenario: "A cluster is being installed with --pod-network-cidr=10.244.0.0/16 and a Service CIDR of 10.96.0.0/12, on a network where the nodes themselves use 10.0.0.0/16.",
    question: "Which statement about these ranges is correct?",
    options: [
      { id: 'A', text: "The pod CIDR, the Service CIDR, and the node network must not overlap, because each is routed differently." },
      { id: 'B', text: "The node network must be inside the pod CIDR for pods to reach nodes." },
      { id: 'C', text: "The pod CIDR must be a subnet of the Service CIDR." },
      { id: 'D', text: "Service ClusterIPs are assigned from the pod CIDR." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod addresses come from the pod CIDR handled by the CNI plugin, Service virtual IPs come from the Service CIDR handled by kube-proxy, and node addresses come from the physical network - overlapping any two produces unroutable traffic. The other options all describe overlaps that would break exactly that separation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
    tags: ["Networking", "CIDR", "Cluster Installation"]
  },
  {
    id: "k8s-cka-84",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Switching kubectl Between Clusters",
    scenario: "An operator manages three clusters from one kubeconfig and needs to point kubectl at the staging cluster with the staging-admin user and the apps namespace.",
    question: "Which pair of commands is correct?",
    options: [
      { id: 'A', text: "kubectl config set-cluster staging, then kubectl config view" },
      { id: 'B', text: "kubectl config use-context staging, then kubectl config set-context --current --namespace=apps" },
      { id: 'C', text: "export KUBECONFIG=staging, then kubectl config get-users" },
      { id: 'D', text: "kubectl config unset current-context, then kubectl get pods -n apps" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "use-context switches the active cluster and user pair, and set-context --current --namespace changes the default namespace for that context. set-cluster only edits a cluster entry, unsetting the current context leaves kubectl with no target, and setting KUBECONFIG to a bare name points at a file that likely does not exist.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",
    tags: ["kubeconfig", "kubectl", "Cluster Administration"]
  },
  {
    id: "k8s-cka-85",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Deployment Stuck With Old and New Pods Running",
    scenario: "A rollout has been in progress for twenty minutes. Old pods are still serving and new pods stay in a not-ready state, and kubectl rollout status never completes.",
    question: "Which explanation matches the symptoms?",
    options: [
      { id: 'A', text: "The new pods fail their readiness probe, so maxUnavailable prevents the controller from removing more old pods." },
      { id: 'B', text: "The deployment strategy is Recreate, which keeps both versions running." },
      { id: 'C', text: "The Service selector matches only the old pods, which blocks the rollout." },
      { id: 'D', text: "The ReplicaSet controller has crashed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A rolling update advances only as new pods become Ready; if their readiness probe never passes, the deployment holds at the maxUnavailable boundary with both versions present, which is exactly the described stall. Recreate deletes all old pods first, a crashed controller would freeze many workloads rather than one rollout, and a Service selector affects traffic rather than rollout progress.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Probes", "Troubleshooting"]
  }
];

export default K8S_CKA_QUESTIONS_4;
