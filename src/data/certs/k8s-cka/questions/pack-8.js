export const K8S_CKA_QUESTIONS_8 = [
  {
    id: "k8s-cka-161",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Admission Control Order",
    scenario: "A cluster uses both a mutating webhook that injects a sidecar and a validating webhook that rejects pods without a sidecar.",
    question: "In which order does the API server run them?",
    options: [
      { id: 'A', text: "Authentication, authorization, mutating admission, validation, validating admission, persistence." },
      { id: 'B', text: "Authentication, authorization, validating admission, then mutating admission, then persistence." },
      { id: 'C', text: "Authentication, authorization, then both webhook types concurrently, then persistence." },
      { id: 'D', text: "Authentication, authorization, persistence, then admission against the stored object." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A request is authenticated and authorized, then mutating admission plugins and webhooks may change the object, then the object is validated and validating admission runs, and only after that is it persisted - which is why a validating webhook can rely on the sidecar already being injected. The other orders would make mutation invisible to validation or bypass admission entirely.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/",
    tags: ["Admission Control", "API Server", "Architecture"]
  },
  {
    id: "k8s-cka-162",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Updating a Container Image Imperatively",
    scenario: "The web container of the web deployment must move from nginx:1.25 to nginx:1.27, triggering a rolling update.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment/web" },
      { id: 'B', text: "kubectl patch deployment web --type=json -p latest" },
      { id: 'C', text: "kubectl set image deployment/web web=nginx:1.27" },
      { id: 'D', text: "kubectl replace deployment/web --image=nginx:1.27" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl set image updates the named container image on the deployment and triggers a rolling update. The patch shown is not valid JSON patch syntax, rollout restart recreates pods on the same image, and kubectl replace requires a full manifest and has no --image flag.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/",
    tags: ["kubectl", "Deployment", "Images"]
  },
  {
    id: "k8s-cka-163",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Why a NetworkPolicy Had No Effect",
    scenario: "A correct-looking default-deny NetworkPolicy was applied but all traffic still flows freely between pods.",
    question: "What is the most likely reason?",
    options: [
      { id: 'A', text: "The CNI plugin does not implement NetworkPolicy, so objects are stored but not enforced." },
      { id: 'B', text: "NetworkPolicies apply only to traffic entering the cluster from outside it." },
      { id: 'C', text: "NetworkPolicies need kube-proxy restarted before the rules take effect." },
      { id: 'D', text: "The policy has to be created in `kube-system` to apply cluster-wide." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "NetworkPolicy is an API that a network plugin must implement; with a plugin that does not support it, the objects are accepted by the API server and silently ignored. No kube-proxy restart is involved, policies are namespaced and belong where the pods are, and they govern pod-level traffic including pod-to-pod inside the cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "CNI", "Troubleshooting"]
  },
  {
    id: "k8s-cka-164",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Setting Ownership of Mounted Volume Files",
    scenario: "An application runs as UID 1000 and cannot write to its mounted PersistentVolume because the files are owned by root.",
    question: "Which pod-level setting fixes it for volume types that support ownership management?",
    options: [
      { id: 'A', text: "securityContext.runAsUser: 0 on the container" },
      { id: 'B', text: "automountServiceAccountToken: false" },
      { id: 'C', text: "securityContext.fsGroup: 1000 on the pod" },
      { id: 'D', text: "An initContainer running chmod 777 on the volume every start" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "fsGroup makes the kubelet set group ownership and the setgid bit on the volume so a non-root process in that supplementary group can write, with fsGroupChangePolicy controlling whether the recursive change is repeated. Running as root defeats the hardening goal, a chmod init container is a slow and permissive workaround, and the ServiceAccount token setting is unrelated.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/",
    tags: ["Security Context", "Storage", "Permissions"]
  },
  {
    id: "k8s-cka-165",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Which Log to Read for a Failed Scheduling Decision",
    scenario: "A pod is Pending with no scheduling event beyond \"0/6 nodes are available\", and the operator wants the scheduler own reasoning at higher detail.",
    question: "Where should they look?",
    options: [
      { id: 'A', text: "The etcd member logs on the control plane node" },
      { id: 'B', text: "The kube-scheduler pod's logs, at a higher verbosity" },
      { id: 'C', text: "The kubelet journal on each candidate node" },
      { id: 'D', text: "The CoreDNS pod logs in `kube-system`" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Filtering and scoring decisions happen inside kube-scheduler, so its logs - raised to a higher -v level if needed - carry the per-plugin detail behind the summary event. Kubelets only see pods already assigned to them, and etcd and DNS logs have nothing to do with placement.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
    tags: ["Scheduler", "Troubleshooting", "Logs"]
  },
  {
    id: "k8s-cka-166",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Defragmenting and Compacting etcd",
    scenario: "etcd reports the alarm NOSPACE and refuses writes, and the database size is at the default quota although few objects exist.",
    question: "Which sequence restores write availability?",
    options: [
      { id: 'A', text: "Delete the member's data directory and let it resync from the leader." },
      { id: 'B', text: "Restart kube-controller-manager to reduce the write volume it causes." },
      { id: 'C', text: "Compact to a recent revision, defragment each member, then disarm the alarm." },
      { id: 'D', text: "Raise the API server's request timeout so the writes have time to land." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A NOSPACE alarm follows history accumulation: compaction discards old revisions, defragmentation returns the freed space to the filesystem, and the alarm must then be explicitly disarmed before writes resume. Deleting the data directory destroys cluster state, and timeout or controller changes do not reclaim database space.",
    referenceUrl: "https://etcd.io/docs/latest/op-guide/maintenance/",
    tags: ["etcd", "Maintenance", "Operations"]
  },
  {
    id: "k8s-cka-167",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Purpose of a ClusterIP",
    scenario: "A junior engineer asks why a Service has an IP address that does not respond to ping and belongs to no interface.",
    question: "Which explanation is correct?",
    options: [
      { id: 'A', text: "The ClusterIP is assigned to the node's primary interface, so it answers only from that node." },
      { id: 'B', text: "A ClusterIP is virtual, implemented by kube-proxy rules that rewrite traffic to a pod; nothing answers it." },
      { id: 'C', text: "ClusterIPs carry only TCP and UDP, so ICMP is dropped by the Service's own rules." },
      { id: 'D', text: "The ClusterIP belongs to a hidden proxy pod, which must be running for it to answer." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A ClusterIP exists only as iptables or IPVS rules that DNAT matching traffic to endpoint addresses, so no interface holds it and ping usually fails while TCP to a defined port works. There is no proxy pod, the address is not bound to the node interface, and Services operate at layer 4 for TCP, UDP, and SCTP.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["Services", "ClusterIP", "Networking"]
  },
  {
    id: "k8s-cka-168",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Preventing a Pod From Being Placed on Spot Nodes",
    scenario: "Spot nodes carry the taint spot=true:NoSchedule. A critical workload must never land there, while a batch workload may.",
    question: "What is required for each?",
    options: [
      { id: 'A', text: "Both workloads need tolerations, each with a different effect declared." },
      { id: 'B', text: "The critical workload needs a toleration with `operator: DoesNotExist`." },
      { id: 'C', text: "The critical workload needs anti-affinity and the batch one a selector." },
      { id: 'D', text: "The critical workload needs nothing, and the batch one a toleration for the taint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A taint repels every pod that lacks a matching toleration, so the critical workload is excluded automatically and only the batch workload needs the toleration added. Anti-affinity and nodeSelectors solve different problems, and a toleration on the critical workload is exactly what must be avoided.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints", "Tolerations", "Scheduling"]
  },
  {
    id: "k8s-cka-169",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "kubectl Reports Connection Refused to localhost:8080",
    scenario: "On a freshly provisioned control plane node, kubectl get nodes returns \"The connection to the server localhost:8080 was refused\".",
    question: "What does that indicate?",
    options: [
      { id: 'A', text: "The API server is listening on a different port, so the endpoint has to be reconfigured." },
      { id: 'B', text: "The user has no RBAC permission to list nodes, which is what the refusal reflects." },
      { id: 'C', text: "etcd is down, so the API server cannot answer any list request from the client." },
      { id: 'D', text: "kubectl found no kubeconfig and fell back to localhost; point `KUBECONFIG` at `admin.conf`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "localhost:8080 is the built-in fallback kubectl uses when no kubeconfig is found, so the fix is copying /etc/kubernetes/admin.conf to ~/.kube/config or exporting KUBECONFIG. A wrong API server port would not produce the legacy default, an RBAC failure returns a forbidden error, and an etcd outage yields API errors rather than a refused local connection.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",
    tags: ["kubeconfig", "kubectl", "Troubleshooting"]
  },
  {
    id: "k8s-cka-170",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Data Loss Risk When Deleting a StorageClass",
    scenario: "An operator deletes a StorageClass that dynamically provisioned dozens of bound PersistentVolumes.",
    question: "What is the effect on existing volumes?",
    options: [
      { id: 'A', text: "The volumes become statically provisioned and lose their reclaim policy." },
      { id: 'B', text: "Bound volumes and their data are unaffected, but no new claims can be provisioned." },
      { id: 'C', text: "Every volume provisioned by that class is deleted along with it." },
      { id: 'D', text: "The pods using those volumes are evicted from their nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A StorageClass is only consulted at provisioning time, so removing it leaves existing PersistentVolumes bound and intact - each PV keeps its own reclaim policy - while future claims naming it stay Pending. Nothing is deleted, converted, or evicted by the removal.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/",
    tags: ["StorageClass", "Storage", "Operations"]
  },
  {
    id: "k8s-cka-171",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Reading a Value Out of an Object With JSONPath",
    scenario: "A script needs just the internal IP address of the node named worker1.",
    question: "Which command prints only that value?",
    options: [
      { id: 'A', text: "`kubectl get node worker1 -o jsonpath=\"{.status.addresses[0].type}\"`" },
      { id: 'B', text: "`kubectl describe node worker1 | grep InternalIP` on the control plane" },
      { id: 'C', text: "`kubectl get node worker1 -o jsonpath=\"{.status.addresses[?(@.type=='InternalIP')]}\"`" },
      { id: 'D', text: "`kubectl get node worker1 -o wide` and read the address column" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A JSONPath filter expression selects the address entry whose type is InternalIP and prints only its value, which is what a script can consume directly. Grepping describe output is brittle and returns extra lines, full YAML needs further parsing, and labels contain no addresses.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/jsonpath/",
    tags: ["kubectl", "JSONPath", "Automation"]
  },
  {
    id: "k8s-cka-172",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pausing a Deployment Mid-Change",
    scenario: "An operator must make several edits to a deployment - image, resources, and environment - and wants only one rollout at the end.",
    question: "Which workflow achieves that?",
    options: [
      { id: 'A', text: "Apply each change with --dry-run=server and then apply once." },
      { id: 'B', text: "kubectl rollout pause, make the edits, then kubectl rollout resume." },
      { id: 'C', text: "Set maxSurge to 0 during the edits." },
      { id: 'D', text: "Scale to zero, edit, then scale up." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pausing a Deployment stops the controller from acting on pod template changes, so several edits are batched into a single rollout when it is resumed. Scaling to zero causes an outage, a zero maxSurge with default maxUnavailable still rolls, and repeated server dry runs do not batch real changes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Rollout", "kubectl"]
  },
  {
    id: "k8s-cka-173",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Exposing UDP Traffic",
    scenario: "A DNS-like service inside the cluster must be reachable on UDP port 5353 as well as TCP 5353.",
    question: "How is that expressed on one Service?",
    options: [
      { id: 'A', text: "A single port entry, since UDP is implied alongside TCP" },
      { id: 'B', text: "Two named entries in `spec.ports`, one TCP and one UDP" },
      { id: 'C', text: "One port entry with `protocol: TCP,UDP` on the Service" },
      { id: 'D', text: "Two Services, since one supports a single protocol" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Service can list multiple ports, and each entry carries its own protocol; when more than one port is defined every entry must be named. There is no combined protocol value, one Service handles both protocols, and TCP is the default rather than UDP being implied.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "UDP", "Networking"]
  },
  {
    id: "k8s-cka-174",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pods Cannot Reach the Kubernetes API Service",
    scenario: "Pods fail to reach https://kubernetes.default.svc while node-level connectivity to the API server address is fine, and other Services work.",
    question: "Which cause fits best?",
    options: [
      { id: 'A', text: "The API server's serving certificate has expired, so the clients reject the connection." },
      { id: 'B', text: "CoreDNS is misconfigured for external names, so the in-cluster endpoint fails to resolve." },
      { id: 'C', text: "The pods have no ServiceAccount mounted, so they cannot authenticate to the API server." },
      { id: 'D', text: "A NetworkPolicy or kube-proxy problem is blocking traffic to the `kubernetes` Service ClusterIP." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The API is reachable from pods through the kubernetes Service ClusterIP, so when the node can reach the API but pods cannot, the fault lies in the pod network path - typically an egress NetworkPolicy that forgot the API endpoint, or stale kube-proxy rules for that Service. An expired certificate would break node access too, every pod gets a default ServiceAccount, and external DNS forwarding is unrelated to an in-cluster Service name.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Networking", "API Access", "Troubleshooting"]
  },
  {
    id: "k8s-cka-175",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Effect of --node-cidr-mask-size on Pod Capacity",
    scenario: "A cluster uses a pod CIDR of 10.244.0.0/16 with a node CIDR mask size of /24.",
    question: "What does that imply?",
    options: [
      { id: 'A', text: "Each pod gets a /24 of its own, so the range covers 256 pods in total." },
      { id: 'B', text: "Each node gets a /24 with about 254 pod addresses, and the range covers 256 nodes." },
      { id: 'C', text: "The mask governs Service ClusterIP allocation rather than pod addresses." },
      { id: 'D', text: "Each node gets 65,534 addresses, so the range supports a single node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The controller manager carves the cluster pod CIDR into per-node subnets of the configured mask size, so a /16 split into /24 blocks yields 256 node subnets of about 254 addresses each - a hard ceiling worth checking before a cluster grows. Pods receive single addresses rather than subnets, and Service IPs come from the separate Service CIDR.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
    tags: ["Networking", "CIDR", "Capacity Planning"]
  },
  {
    id: "k8s-cka-176",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Creating a Secret From a File",
    scenario: "A TLS certificate and private key on disk must become a Secret usable by an Ingress.",
    question: "Which command creates it correctly?",
    options: [
      { id: 'A', text: "kubectl apply -f tls.crt" },
      { id: 'B', text: "kubectl create configmap shop-tls --from-file=tls.crt --from-file=tls.key" },
      { id: 'C', text: "kubectl create secret tls shop-tls --cert=tls.crt --key=tls.key" },
      { id: 'D', text: "kubectl create secret generic shop-tls --from-literal=cert=tls.crt" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The tls subcommand creates a kubernetes.io/tls Secret with the required tls.crt and tls.key keys, which is what an Ingress expects. A generic Secret from a literal stores the filename rather than its contents, a ConfigMap is the wrong type for a private key, and a certificate file is not a Kubernetes manifest.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_secret_tls/",
    tags: ["Secrets", "TLS", "kubectl"]
  },
  {
    id: "k8s-cka-177",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "When minReadySeconds Matters",
    scenario: "New pods pass their readiness probe instantly but crash roughly twenty seconds later, and the rollout still completes and removes all old pods.",
    question: "Which setting would make the rollout wait long enough to notice?",
    options: [
      { id: 'A', text: "`progressDeadlineSeconds` set to 10, so the rollout fails if a pod is slow to come up." },
      { id: 'B', text: "`revisionHistoryLimit` set to 1, so a bad revision can be rolled back immediately." },
      { id: 'C', text: "`maxSurge` set to 100 percent, so the new pods run alongside the old ones first." },
      { id: 'D', text: "`minReadySeconds` longer than the crash window, so a pod must stay ready." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "minReadySeconds requires a new pod to remain ready for that duration before it is counted as available, so a rollout stalls instead of completing when pods die shortly after starting. progressDeadlineSeconds only bounds total rollout time, history limit trims revisions, and a larger surge merely creates more pods faster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Rollout", "Reliability"]
  },
  {
    id: "k8s-cka-178",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Pod-to-Pod Traffic Failing Only Across Nodes",
    scenario: "Pods on the same node communicate normally, but pod-to-pod traffic between different nodes times out. Services and DNS behave the same way.",
    question: "Where is the fault most likely?",
    options: [
      { id: 'A', text: "In the pod network overlay or inter-node routing — a CNI or firewall problem." },
      { id: 'B', text: "In the kubelet's configuration on each node, which programs the pod's own network namespace." },
      { id: 'C', text: "In the API server's admission plugins, which reject the pods attempting cross-node traffic." },
      { id: 'D', text: "In the Service's selector labels, which is why only same-node endpoints are being matched." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Intra-node traffic uses a local bridge while inter-node traffic depends on the overlay or route programming, so a clean split like this points at the CNI plugin or a firewall dropping its encapsulation or BGP traffic. Kubelet configuration, admission plugins, and Service selectors would not produce a same-node versus cross-node distinction.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
    tags: ["CNI", "Networking", "Troubleshooting"]
  },
  {
    id: "k8s-cka-179",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Interpreting a Forbidden Error",
    scenario: "A CI pipeline fails with: pods is forbidden: User \"system:serviceaccount:ci:deployer\" cannot create resource \"pods\" in API group \"\" in the namespace \"prod\".",
    question: "What does this tell the operator?",
    options: [
      { id: 'A', text: "The ServiceAccount's token is invalid, so it has to be recreated before the request will pass." },
      { id: 'B', text: "The `prod` namespace does not exist, so the request is refused before authorization runs." },
      { id: 'C', text: "An admission webhook rejected the pod, which the API server reports as a forbidden error." },
      { id: 'D', text: "Authentication passed and authorization failed, so the account needs a binding." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A forbidden message that names the authenticated user means the identity was accepted and the authorizer denied the verb, so the remedy is a Role or ClusterRole plus a binding in prod. An invalid token yields Unauthorized, a missing namespace yields a not found error, and webhook rejections cite the webhook name.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC", "Troubleshooting", "Authorization"]
  },
  {
    id: "k8s-cka-180",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Container Runtime Requirements for the kubelet",
    scenario: "A node is being prepared to join a modern Kubernetes cluster and the team asks what container runtime interface is required.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "The kubelet talks only to CRI runtimes such as containerd over a CRI socket; dockershim was removed." },
      { id: 'B', text: "Any OCI runtime can be used directly, since the kubelet speaks the OCI interface itself." },
      { id: 'C', text: "The kubelet runs containers itself, and the runtime only supplies the image layers." },
      { id: 'D', text: "The kubelet requires Docker Engine and communicates with its socket directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Since dockershim was removed, the kubelet requires a runtime implementing the Container Runtime Interface, configured through --container-runtime-endpoint. Docker Engine needs an adapter such as cri-dockerd, the kubelet delegates all container execution, and a low-level OCI runtime like runc sits beneath a CRI implementation rather than replacing it.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/",
    tags: ["Container Runtime", "CRI", "Nodes"]
  },
  {
    id: "k8s-cka-181",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Mounting Only One Key of a ConfigMap",
    scenario: "A ConfigMap holds five keys but only app.properties should appear in the container at /config/app.properties.",
    question: "Which volume configuration does that?",
    options: [
      { id: 'A', text: "A `secret` volume referencing the ConfigMap by name for that key." },
      { id: 'B', text: "A `configMap` volume with `defaultMode: 0400` over all of its keys." },
      { id: 'C', text: "A `configMap` volume with an `items` list mapping the one key to a path." },
      { id: 'D', text: "An `envFrom` reference to the ConfigMap in the container spec." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The items list projects only the named keys into the volume at the given paths, leaving the other four keys out. defaultMode changes file permissions rather than selection, envFrom produces environment variables, and a secret volume cannot reference a ConfigMap.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["ConfigMap", "Volumes", "Configuration"]
  },
  {
    id: "k8s-cka-182",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Choosing Between HPA and VPA",
    scenario: "A single-threaded application cannot use more than one CPU no matter how much load arrives, and its memory need grows with the dataset it holds.",
    question: "Which autoscaling approach fits best?",
    options: [
      { id: 'A', text: "The Vertical Pod Autoscaler, since it needs a larger allocation not more replicas." },
      { id: 'B', text: "The Horizontal Pod Autoscaler on CPU utilisation, adding replicas as the load rises." },
      { id: 'C', text: "The Cluster Autoscaler alone, since the node pool grows when the pod cannot fit." },
      { id: 'D', text: "Both HPA and VPA on the same CPU metric, so the workload scales in both directions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A workload that cannot parallelise gains nothing from more replicas, so the Vertical Pod Autoscaler adjusting requests and limits is the right tool. HPA scales replicas, the Cluster Autoscaler only adds nodes when pods are unschedulable, and running HPA and VPA on the same resource metric makes them fight.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/autoscaling/",
    tags: ["Autoscaling", "VPA", "Resources"]
  },
  {
    id: "k8s-cka-183",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Backing Up More Than etcd",
    scenario: "A disaster recovery runbook is being reviewed. It currently contains only an etcd snapshot step.",
    question: "What else must be preserved to rebuild a kubeadm control plane?",
    options: [
      { id: 'A', text: "The container images of every workload, since a restored cluster cannot pull them from a lost registry." },
      { id: 'B', text: "The `/etc/kubernetes/pki` CA material and the static pod manifests, since a restored etcd needs a matching CA." },
      { id: 'C', text: "The kubelet logs from each node, which the control plane replays to rebuild the node objects." },
      { id: 'D', text: "The CoreDNS Corefile, since cluster DNS is not stored in etcd alongside the other objects." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A restored etcd contains objects such as ServiceAccount tokens and certificates issued by the cluster CA, so losing /etc/kubernetes/pki means the restored control plane cannot authenticate its own components; the static pod manifests capture the API server configuration alongside it. Images come from registries, kubelet logs are diagnostics rather than state, and the Corefile is one object among many already in etcd.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["Backup", "Disaster Recovery", "Certificates"]
  },
  {
    id: "k8s-cka-184",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Multi-Port Service Targeting Named Container Ports",
    scenario: "A pod declares containerPort 8080 with the name http and containerPort 9090 with the name metrics. The Service should stay valid if those numbers change later.",
    question: "Which Service definition is most robust?",
    options: [
      { id: 'A', text: "Two Service ports with numeric `targetPort` values of 8080 and 9090." },
      { id: 'B', text: "One Service port whose `targetPort` is set to the backend pod's address." },
      { id: 'C', text: "Two named Service ports whose `targetPort` values are the container port names." },
      { id: 'D', text: "A headless Service, since named ports require `clusterIP: None` to work." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "targetPort accepts a container port name, so the Service follows the pod definition even if the numbers change - a useful indirection across many workloads. Numeric targets break silently on a port change, targetPort is never an IP address, and named ports work with any Service type.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Ports", "Networking"]
  },
  {
    id: "k8s-cka-185",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Sudden Mass Pod Restarts After a Node Reboot",
    scenario: "After a planned node reboot without draining, pods on that node all restarted and some Jobs re-ran their work.",
    question: "Which practice would have prevented the disruption?",
    options: [
      { id: 'A', text: "Raise `terminationGracePeriodSeconds` on every pod running on the node." },
      { id: 'B', text: "Delete the node object before rebooting so the pods reschedule first." },
      { id: 'C', text: "Set `restartPolicy: Never` so the pods are not restarted on the node." },
      { id: 'D', text: "Cordon and drain the node before rebooting, so disruption budgets are respected." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Draining evicts pods through the eviction API so replacements start elsewhere first and PodDisruptionBudgets are honoured, which is the whole point of the maintenance workflow. A Never restart policy leaves failed pods dead, deleting the node object is more disruptive rather than less, and a longer grace period does not help when the machine simply goes away.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Maintenance", "Drain", "Operations"]
  }
];

export default K8S_CKA_QUESTIONS_8;
