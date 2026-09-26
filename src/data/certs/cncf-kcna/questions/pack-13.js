export const CNCF_KCNA_QUESTIONS_13 = [
  {
    id: "cncf-kcna-301",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "kubectl tries localhost:8080",
    scenario: "On a freshly provisioned jump host, an engineer installs kubectl and runs kubectl get nodes. It fails with 'The connection to the server localhost:8080 was refused - did you specify the right host or port?'. The cluster itself is healthy and reachable from other machines.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The API server was moved to port 8080, and the firewall blocks that port" },
      { id: 'B', text: "kubectl found no kubeconfig, so it fell back to its built-in default address" },
      { id: 'C', text: "The kubelet on the jump host is stopped, so kubectl has no local proxy" },
      { id: 'D', text: "The engineer's RBAC role lacks list permission on nodes in the cluster" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Without a kubeconfig at ~/.kube/config, in the KUBECONFIG variable or passed with --kubeconfig, kubectl has no cluster address or credentials and falls back to localhost:8080, which produces exactly this message. Copying the kubeconfig (or setting KUBECONFIG) fixes it. API servers normally listen on 6443 or 443, and the error names localhost. Missing RBAC would return Forbidden from the real API server. kubectl does not depend on a local kubelet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["kubeconfig", "kubectl", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-302",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Certificate signed by unknown authority",
    scenario: "After a cluster was rebuilt with the same API server address, every kubectl command from a developer's laptop fails with 'x509: certificate signed by unknown authority'. Colleagues who downloaded a fresh kubeconfig this morning have no problem.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "Her kubeconfig still holds the old cluster's CA data, which no longer matches the server" },
      { id: 'B', text: "Her kubectl is older than the server, so it cannot parse the new API certificate" },
      { id: 'C', text: "Her laptop's clock is behind, so the new API server treats her kubeconfig token as expired" },
      { id: 'D', text: "Her RBAC RoleBinding was not recreated, so the new API server rejects her requests" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubeconfig's certificate-authority-data tells kubectl which CA to trust for the API server's TLS certificate. The rebuilt cluster has a new CA, so her stale kubeconfig cannot verify the server, while colleagues with a fresh file can. Missing RBAC would produce a Forbidden error after TLS succeeds, not an x509 error. An expired token yields Unauthorized, not a certificate-authority failure. kubectl version skew does not change how X.509 certificates are verified.",
    referenceUrl: "https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",
    tags: ["kubeconfig", "TLS", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-303",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Writes rejected, reads still fine",
    scenario: "On a self-managed cluster that runs many CronJobs, every kubectl apply and scale suddenly fails with 'etcdserver: mvcc: database space exceeded', while kubectl get commands keep working. All three etcd members are healthy and in quorum.",
    question: "What has happened, and what is the usual recovery?",
    options: [
      { id: 'A', text: "The worker nodes' disks are full; prune unused images on each node to free space for new objects" },
      { id: 'B', text: "etcd hit its storage quota and raised an alarm; compact and defragment it, then disarm the alarm" },
      { id: 'C', text: "etcd lost quorum and turned read-only; add a fourth member so that a majority is restored again" },
      { id: 'D', text: "The API server's watch cache is full; restart the kube-apiserver so the cache is rebuilt from etcd" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "etcd enforces a backend storage quota (2 GB by default); when the database, including old revisions, reaches it, etcd raises a NOSPACE alarm and rejects writes while still serving reads. Recovery is to compact old revisions, defragment to reclaim the space, and disarm the alarm, and then to keep automatic compaction working. Quorum loss would affect reads as well, and the members are stated to be healthy; adding a fourth member would not help. The watch cache does not reject writes with this etcd error. Worker node disks are unrelated to where etcd stores data.",
    referenceUrl: "https://etcd.io/docs/v3.5/op-guide/maintenance/",
    tags: ["etcd", "Troubleshooting", "Control plane"]
  },
  {
    id: "cncf-kcna-304",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "kubectl logs times out, kubectl get works",
    scenario: "After new worker nodes were added in a separate subnet, kubectl get and describe work for Pods on them, but kubectl logs and kubectl exec against those Pods fail with 'dial tcp 10.20.4.7:10250: i/o timeout'. The same commands work for Pods on the older nodes.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The new nodes cannot reach the API server port 6443 on the control plane" },
      { id: 'B', text: "The control plane cannot reach the kubelet port 10250 on the new nodes" },
      { id: 'C', text: "The container runtime on the new nodes does not write logs to the journal" },
      { id: 'D', text: "The Pods on the new nodes lack RBAC permission for the pods/log subresource" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl get and describe are answered by the API server from etcd, but logs, exec and port-forward are streamed by the API server connecting to the kubelet API on port 10250 of the node running the Pod. A timeout to that address means the new subnet's firewall blocks the control plane from reaching the kubelets. If the nodes could not reach port 6443 they would be NotReady. RBAC on pods/log applies to the user running kubectl, and a denial would say Forbidden, not time out. Container logs are served by the kubelet from files on the node, not from the journal.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/",
    tags: ["kubelet", "Networking", "kubectl logs"]
  },
  {
    id: "cncf-kcna-305",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pod stuck Terminating on a dead node",
    scenario: "A worker node lost power and will not come back. A standalone Pod that ran on it has shown Terminating for thirty minutes after a normal deletion request, because no kubelet is left to confirm the containers stopped. The team has verified the machine is truly off.",
    question: "How can the Pod object be removed from the API?",
    options: [
      { id: 'A', text: "kubectl drain NODE --ignore-daemonsets --timeout=0" },
      { id: 'B', text: "kubectl delete pod NAME --grace-period=0 --force" },
      { id: 'C', text: "kubectl cordon NODE and wait for a fresh eviction" },
      { id: 'D', text: "kubectl rollout restart pod NAME on another node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Normally the API server waits for the kubelet to confirm a Pod's containers have stopped. With the node permanently gone, a force delete with --grace-period=0 --force removes the object immediately; the documentation warns to use it only when you are sure the Pod is no longer running, as the team has confirmed. Draining uses evictions, which also wait on the missing kubelet. rollout restart works on workloads, not individual Pods. Cordoning only stops new Pods being scheduled to the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/force-delete-stateful-set-pod/",
    tags: ["Pods", "Force delete", "Nodes"]
  },
  {
    id: "cncf-kcna-306",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A namespace name the API rejects",
    scenario: "An automation script tries to create a namespace named Team_Analytics for a new group and receives an error that the name is invalid and must consist of lower case alphanumeric characters or '-'. The script's author assumed any string would work.",
    question: "What name would the API server accept?",
    options: [
      { id: 'A', text: "team.analytics.v2, with dots between the words" },
      { id: 'B', text: "team-analytics, all lower case with a hyphen" },
      { id: 'C', text: "team_analytics, lower case with an underscore" },
      { id: 'D', text: "Team-Analytics, mixed case with a hyphen" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Namespace names must be valid RFC 1123 DNS labels: at most 63 characters, only lower-case letters, digits and hyphens, starting and ending with an alphanumeric character, so team-analytics is accepted. Upper-case letters are not allowed. Underscores are not allowed in DNS labels. Dots are allowed in some object names, which are DNS subdomains, but not in namespace names, which must be single DNS labels. The same rule is why Service names can appear inside DNS names.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/names/",
    tags: ["Namespaces", "Naming"]
  },
  {
    id: "cncf-kcna-307",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Nothing can create Pods anymore",
    scenario: "Across every namespace, new Pods cannot be created. The ReplicaSet events read: failed calling webhook 'validate.policy.example.com': dial tcp 10.96.14.2:443: connect: connection refused. The policy engine's own Pods were evicted from a failed node an hour ago.",
    question: "What explains the outage, and what setting made it cluster-wide?",
    options: [
      { id: 'A', text: "The webhook's TLS certificate expired, so the API server disables admission for Pods until it is renewed again" },
      { id: 'B', text: "The validating webhook has failurePolicy: Fail, so every request it matches is rejected while its backend is down" },
      { id: 'C', text: "The validating webhook has failurePolicy: Ignore, so the API server queues all matching requests until it returns" },
      { id: 'D', text: "The webhook's Service lost its ClusterIP, so kube-proxy blocks all Pod creation until a new address is assigned" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Admission webhooks are called synchronously; with failurePolicy: Fail (the default for admissionregistration.k8s.io/v1), any error reaching the webhook rejects the request, so a webhook matching all Pods blocks Pod creation everywhere once its backend is gone. Restoring the webhook Pods, or temporarily narrowing or deleting the webhook configuration, recovers the cluster. failurePolicy: Ignore would let requests through, not queue them. The error shows the address is set but nothing listens there, and kube-proxy never blocks Pod creation. An expired certificate would show a TLS error, and admission is never disabled automatically.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission webhooks", "failurePolicy"]
  },
  {
    id: "cncf-kcna-308",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pods talk only within their own node",
    scenario: "After a network team tightened firewall rules between servers, Pods can still reach other Pods on the same node, but every connection to a Pod on a different node times out. The cluster's CNI plugin runs a VXLAN overlay between nodes.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The firewall now blocks UDP 53, so Pods can no longer resolve other Pods by name" },
      { id: 'B', text: "The firewall now blocks the UDP port the overlay uses to encapsulate Pod packets" },
      { id: 'C', text: "The firewall now blocks TCP 2379, so overlay agents that use etcd lose their route data" },
      { id: 'D', text: "The firewall now blocks TCP 6443, so kubelets can no longer reach the API server" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With a VXLAN overlay, Pod packets between nodes are encapsulated in UDP (commonly port 4789, or 8472 for Flannel's default), so a firewall that drops that port breaks cross-node Pod traffic while same-node traffic, which never leaves the host, keeps working. Blocking 6443 would make nodes NotReady rather than break only cross-node traffic. DNS would fail by name, but these are timeouts on direct connections. Agents that keep state in etcd only need it to learn about changes; routes already programmed keep forwarding, so losing etcd would not instantly break every cross-node connection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/networking/",
    tags: ["CNI", "Overlay", "Networking"]
  },
  {
    id: "cncf-kcna-309",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Service names resolve but go nowhere",
    scenario: "On a new cluster, Pods can reach each other by Pod IP, and Service names resolve to the right ClusterIPs, yet every connection to any ClusterIP times out. kubectl get daemonsets -n kube-system shows no kube-proxy DaemonSet, and no replacement for it was installed.",
    question: "Why do connections to ClusterIPs fail?",
    options: [
      { id: 'A', text: "No component publishes Service DNS records for Pods to look up" },
      { id: 'B', text: "No component assigns IP addresses to Pods from the node's Pod CIDR" },
      { id: 'C', text: "No component programs node rules that translate Service IPs to Pod IPs" },
      { id: 'D', text: "No component creates EndpointSlices for the Services' selectors" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A ClusterIP is a virtual address; kube-proxy (or a CNI plugin that replaces it with eBPF) programs iptables, IPVS or nftables rules on every node to translate it to a backend Pod IP. Without it, packets to ClusterIPs go nowhere. Pod IP assignment is working, since Pods reach each other directly. DNS is working, since names resolve to the right ClusterIPs. EndpointSlices are created by the control plane's controller, not by kube-proxy, so they exist but nothing on the nodes consumes them.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["kube-proxy", "Services", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-310",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Exit code 127 on every start",
    scenario: "After a change to a Deployment's command field, the container exits immediately and the Pod goes into CrashLoopBackOff. kubectl describe shows Last State: Terminated, Reason: Error, Exit Code: 127, and the previous logs contain 'start-server: not found'.",
    question: "What does this point to?",
    options: [
      { id: 'A', text: "The container was killed by the kernel for exceeding its memory limit" },
      { id: 'B', text: "The image could not be pulled because the registry refused the request" },
      { id: 'C', text: "The command names an executable that is not present in the image" },
      { id: 'D', text: "The container received SIGTERM from the kubelet during a normal stop" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Exit code 127 is the shell's 'command not found' status, and the log line confirms the new command refers to start-server, which is not in the image or not on its PATH. A memory-limit kill appears as OOMKilled with exit code 137. SIGTERM during a graceful stop yields 143 and happens when the Pod is being stopped, not on every start. A pull failure shows ImagePullBackOff and the container never runs, so there would be no exit code or logs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/determine-reason-pod-failure/",
    tags: ["Exit codes", "CrashLoopBackOff"]
  },
  {
    id: "cncf-kcna-311",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "A Deployment edit that changes nothing",
    scenario: "On a self-managed cluster, a developer changes a Deployment's image. kubectl get deployment shows the new generation in its metadata, but no new ReplicaSet is created, deleted Pods of other ReplicaSets are not replaced, and scheduling of existing Pending Pods still works.",
    question: "Which control-plane component is most likely not running?",
    options: [
      { id: 'A', text: "kube-controller-manager" },
      { id: 'B', text: "kube-apiserver" },
      { id: 'C', text: "cloud-controller-manager" },
      { id: 'D', text: "kube-scheduler" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Deployment and ReplicaSet controllers run inside kube-controller-manager; if it is down, spec changes are stored in etcd (the generation increases) but nothing reconciles them, so no new ReplicaSet appears and missing Pods are not replaced. The scheduler is evidently working because Pending Pods still get nodes. cloud-controller-manager handles cloud integrations such as nodes and load balancers, not ReplicaSets. The API server must be up, since the edit was accepted and can be read back.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/controller/",
    tags: ["kube-controller-manager", "Controllers"]
  },
  {
    id: "cncf-kcna-312",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pending with no events at all",
    scenario: "On a self-managed cluster, every newly created Pod stays Pending with an empty NODE column. kubectl describe shows no events for the Pods at all, not even a FailedScheduling message, although nodes are Ready with plenty of free capacity.",
    question: "Which component should the administrator check?",
    options: [
      { id: 'A', text: "The kube-scheduler Pod in the kube-system namespace" },
      { id: 'B', text: "The kubelet service running on each worker node" },
      { id: 'C', text: "The CoreDNS Deployment in the kube-system namespace" },
      { id: 'D', text: "The metrics-server Deployment in kube-system" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kube-scheduler assigns Pending Pods to nodes and records FailedScheduling events when it cannot. Pods with no node and no scheduler events at all mean the scheduler is not running or not processing Pods, so its Pod and logs are the place to look. Kubelets act only after a Pod is bound to their node. CoreDNS resolves names and plays no part in placement. metrics-server feeds kubectl top and autoscalers; the default scheduler uses resource requests, not live metrics.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
    tags: ["kube-scheduler", "Pending"]
  },
  {
    id: "cncf-kcna-313",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Every Service name fails at once",
    scenario: "Suddenly no Pod in any namespace can resolve Service names, although connections to Pod IPs still work. kubectl get pods -n kube-system -l k8s-app=kube-dns shows both CoreDNS Pods in CrashLoopBackOff after someone edited a shared configuration.",
    question: "Where should the engineer look next?",
    options: [
      { id: 'A', text: "The CoreDNS Pod logs and the coredns ConfigMap holding its Corefile" },
      { id: 'B', text: "The etcd member logs and the etcd data directory on control planes" },
      { id: 'C', text: "The kube-proxy DaemonSet logs and the kube-proxy ConfigMap on nodes" },
      { id: 'D', text: "The CNI plugin logs and the NetworkPolicy objects guarding CoreDNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CoreDNS reads its configuration from the Corefile in the coredns ConfigMap; a syntax error or bad plugin setting after an edit makes both replicas crash, and their logs usually name the offending line. kube-proxy problems break Service IP routing, but Pod-to-Pod IP traffic already works and CoreDNS itself is the component crashing. etcd failures affect the API, not DNS directly. The Pod network is fine since direct IP connections succeed, so the CNI plugin and policies are unlikely causes.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/",
    tags: ["CoreDNS", "DNS", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-314",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Autoscaler targets show unknown",
    scenario: "A HorizontalPodAutoscaler targets 70% CPU utilisation for a Deployment. kubectl get hpa shows TARGETS as unknown/70%, and its events say 'missing request for cpu in container app'. metrics-server is installed, and kubectl top pods works for these Pods.",
    question: "What should the team fix?",
    options: [
      { id: 'A', text: "Set resources.limits.memory on the app container in the Pod template" },
      { id: 'B', text: "Raise the HPA's maxReplicas so the autoscaler has room to compute usage" },
      { id: 'C', text: "Install kube-state-metrics so the autoscaler can read container usage" },
      { id: 'D', text: "Set resources.requests.cpu on the app container in the Pod template" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CPU utilisation in an HPA is calculated as usage divided by the container's CPU request, so without a request there is nothing to divide by and the target shows unknown, as the event states. Adding requests.cpu fixes it. A memory limit does not help a CPU utilisation target. Usage data is already available, since kubectl top works; kube-state-metrics exposes object state and is not what the HPA reads. maxReplicas bounds scaling but has no effect on computing the metric.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#how-does-a-horizontalpodautoscaler-work",
    tags: ["HPA", "Resource requests", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-315",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Node reports NotReady",
    scenario: "kubectl get nodes shows worker-5 as NotReady for the last ten minutes, and Pods on it are starting to be marked for eviction. The node is still reachable over SSH, and the other nodes are healthy.",
    question: "What should the engineer check first on worker-5?",
    options: [
      { id: 'A', text: "The Ingress controller logs for errors routing traffic to Pods on the node" },
      { id: 'B', text: "The kube-scheduler logs on the control plane for errors when placing new Pods" },
      { id: 'C', text: "The kubelet service status and its logs, for example with systemctl and journalctl" },
      { id: 'D', text: "The etcd member list to see whether worker-5 has dropped out of the quorum" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A node's Ready condition is maintained by its kubelet posting status and lease heartbeats; if the kubelet has stopped, crashed or cannot reach the API server, the node turns NotReady, so systemctl status kubelet and journalctl -u kubelet are the first places to look. The scheduler only places Pods and does not affect readiness. Ingress routing problems do not change node status. Worker nodes are not etcd members, so quorum is unrelated.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/",
    tags: ["Nodes", "kubelet", "NotReady"]
  },
  {
    id: "cncf-kcna-316",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Collecting diagnostics for a support ticket",
    scenario: "A vendor support engineer asks for a broad snapshot of a misbehaving cluster: node and Pod descriptions, events, and logs from the system Pods, bundled into files that can be attached to a ticket. The team has kubectl access only.",
    question: "Which command collects this in one step?",
    options: [
      { id: 'A', text: "kubectl logs -n kube-system --all-containers > diag" },
      { id: 'B', text: "kubectl get all -A -o yaml > ./diag/everything.yaml" },
      { id: 'C', text: "kubectl describe nodes > ./diag/nodes-summary.txt" },
      { id: 'D', text: "kubectl cluster-info dump --output-directory=./diag" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl cluster-info dump writes a large set of cluster state, including nodes, Pods, events and logs of system Pods (and, with --all-namespaces, every namespace), into a directory suitable for sharing with support. get all -A -o yaml returns only some workload resource types, with no logs or events. Describing nodes covers one resource type. kubectl logs needs a Pod, workload or label selector target, and even then it provides logs without cluster state.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cluster-info/kubectl_cluster-info_dump/",
    tags: ["kubectl", "Diagnostics"]
  },
  {
    id: "cncf-kcna-317",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Service has endpoints but refuses connections",
    scenario: "A Service named orders selects the right Pods, and kubectl get endpointslices shows three ready addresses on port 80. Calls to the Service fail with 'connection refused', yet kubectl exec into a Pod and curl localhost:8080 returns a healthy response.",
    question: "What is the most likely misconfiguration?",
    options: [
      { id: 'A', text: "The Service's selector matches no Pods in the orders namespace" },
      { id: 'B', text: "The Service's targetPort is 80, but the containers listen on 8080" },
      { id: 'C', text: "The Pods' readiness probes fail, so they are removed from rotation" },
      { id: 'D', text: "The Service type is ClusterIP, which refuses traffic from other Pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The endpoint slices list port 80 because that is the Service's targetPort, but the application listens on 8080, so connections reach the Pods on a port where nothing is listening and are refused. Setting targetPort to 8080 (or a named port) fixes it. A selector that matched nothing would leave the slices empty, not three addresses. Failing readiness probes would mark the endpoints not ready. ClusterIP is exactly the type meant for traffic from other Pods.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Services", "targetPort", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-318",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Unauthorized versus Forbidden",
    scenario: "A contractor's kubectl commands worked yesterday, but today every command, even kubectl get pods in his own namespace, fails with 'error: You must be logged in to the server (Unauthorized)'. Nobody has changed any RBAC objects in the cluster.",
    question: "What does this error indicate?",
    options: [
      { id: 'A', text: "The API server is unreachable, so kubectl cannot open the TLS connection" },
      { id: 'B', text: "The API server could not authenticate his credentials, such as an expired token" },
      { id: 'C', text: "The API server rejected the Pod list in admission because a webhook failed" },
      { id: 'D', text: "The API server authenticated him, but RBAC denies the verb on that resource" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Unauthorized (HTTP 401) means authentication failed: the API server could not establish who the caller is, typically because a token or client certificate has expired or been revoked, or an OIDC refresh failed, so refreshing his credentials is the fix. An authenticated user lacking permission gets Forbidden (HTTP 403), which names the user, verb and resource. Admission only runs on write requests, never on a list. An unreachable server gives connection or timeout errors, not an HTTP status.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authentication/",
    tags: ["Authentication", "Troubleshooting", "kubectl"]
  },
  {
    id: "cncf-kcna-319",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "No resources found, yet the app is up",
    scenario: "A new team member is told the billing application is running fine, but kubectl get pods returns 'No resources found in default namespace'. The billing team deploys everything into its own namespace called billing.",
    question: "What should she run to see the billing Pods?",
    options: [
      { id: 'A', text: "kubectl get pods -n billing" },
      { id: 'B', text: "kubectl get pods --field-selector=billing" },
      { id: 'C', text: "kubectl get billing pods" },
      { id: 'D', text: "kubectl get pods --selector=billing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl queries the current context's namespace, default here, unless told otherwise; -n billing (or --namespace) queries the billing namespace, and -A lists Pods across all namespaces. A label selector filters within the current namespace, and billing alone only matches Pods that carry a label key named billing. A field selector needs a field=value expression such as metadata.namespace=billing. kubectl get billing pods would try to list a resource type called billing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
    tags: ["Namespaces", "kubectl"]
  },
  {
    id: "cncf-kcna-320",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pod rejected for asking too much memory",
    scenario: "Creating a Pod in the sandbox namespace fails immediately with: 'maximum memory usage per Container is 1Gi, but limit is 2Gi'. The namespace has no ResourceQuota, and the nodes have plenty of free memory.",
    question: "Which object caused the rejection?",
    options: [
      { id: 'A', text: "A PodDisruptionBudget for the Pod" },
      { id: 'B', text: "A PriorityClass applied to the Pod" },
      { id: 'C', text: "A LimitRange in the namespace" },
      { id: 'D', text: "The kubelet's eviction threshold config" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A LimitRange sets per-container minimums, maximums and defaults in a namespace and is enforced at admission, so a container limit above its max is rejected with exactly this message. A PriorityClass affects scheduling order and preemption, not size limits. Kubelet eviction thresholds act on running Pods under node pressure, never at creation time. A PodDisruptionBudget governs voluntary evictions and has no memory settings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/",
    tags: ["LimitRange", "Admission"]
  },
  {
    id: "cncf-kcna-321",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Namespace stuck in Terminating",
    scenario: "A team deleted the namespace legacy a day ago, but it still shows Terminating. Its status conditions report that some custom resources remain, and the operator that owned those resources was uninstalled before the namespace was deleted.",
    question: "What is holding the namespace, and what is the usual resolution?",
    options: [
      { id: 'A', text: "An etcd compaction lag; wait for the next compaction to purge the namespace records" },
      { id: 'B', text: "Finalizers on the leftover custom resources; reinstall the operator or remove the finalizers" },
      { id: 'C', text: "A ResourceQuota counting the custom resources; delete it so the namespace removal can finish" },
      { id: 'D', text: "A PodDisruptionBudget left by the operator; scale its Pods to zero so eviction can proceed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A finalizer tells the API server to wait for a controller to finish clean-up before an object is removed. With the operator gone, nobody clears the finalizers on its custom resources, so they never disappear and the namespace cannot finish deleting. Reinstalling the operator lets it finish, or, knowing the external clean-up will not happen, an administrator can remove the finalizers by hand. A ResourceQuota does not block deletion. PodDisruptionBudgets apply to evictions, not namespace deletion. etcd compaction does not affect object deletion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/",
    tags: ["Finalizers", "Namespaces", "Troubleshooting"]
  },
  {
    id: "cncf-kcna-322",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "kubectl cannot reach a kubeadm control plane",
    scenario: "On a single control-plane kubeadm cluster, every kubectl command fails with 'connection refused' on port 6443 after an administrator edited an API server flag. Worker nodes and running Pods are unaffected. The administrator is logged in to the control-plane node.",
    question: "Where should she look to find and fix the problem?",
    options: [
      { id: 'A', text: "The kube-apiserver static Pod manifest in /etc/kubernetes/manifests, plus container logs via crictl" },
      { id: 'B', text: "The kube-apiserver Deployment in kube-system, using kubectl rollout undo to restore the flags" },
      { id: 'C', text: "The kubelet config on each worker node, since workers host the API server replicas in kubeadm" },
      { id: 'D', text: "The CoreDNS ConfigMap, since kubectl resolves the API server through cluster DNS on port 6443" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubeadm runs the API server as a static Pod whose manifest lives in /etc/kubernetes/manifests; the kubelet recreates it whenever the file changes, so a bad flag stops the API server and kubectl with it. Fixing the manifest recovers it, and crictl ps -a with crictl logs shows why the container is failing while the API is unreachable. There is no kube-apiserver Deployment, and kubectl cannot work while the API is down anyway. Workers do not host API server replicas in kubeadm. kubectl reaches the API through its kubeconfig address, not cluster DNS.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "kube-apiserver", "crictl"]
  },
  {
    id: "cncf-kcna-323",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Probes pass behind a default-deny policy",
    scenario: "After a default-deny ingress NetworkPolicy is applied to the api namespace, calls from other Pods to the api Pods fail as expected. Yet the kubelet's HTTP liveness and readiness probes against those same Pods keep passing, and no Pod restarts.",
    question: "Why do the probes still succeed?",
    options: [
      { id: 'A', text: "The kubelet caches the last probe result and replays it while policies are applied" },
      { id: 'B', text: "Traffic from the Pod's own node is always allowed into a Pod isolated for ingress" },
      { id: 'C', text: "Probe requests reach containers through the API server, bypassing all Pod traffic" },
      { id: 'D', text: "Default-deny ingress policies apply only to Service traffic, not requests to Pod IPs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The NetworkPolicy specification states that when a Pod is isolated for ingress, connections from the Pod's own node are still allowed, alongside whatever the ingress rules allow. The kubelet runs probes from the node, so they pass while other Pods are blocked. Probes do not travel through the API server; the kubelet connects to the Pod IP directly. Policies filter traffic to Pods regardless of whether it was addressed to a Service or a Pod IP. The kubelet does not replay cached probe results.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource",
    tags: ["NetworkPolicy", "Probes"]
  },
  {
    id: "cncf-kcna-324",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Pods stuck in ContainerCreating",
    scenario: "New Pods scheduled to one node stay in ContainerCreating. kubectl describe shows 'Failed to create pod sandbox' with the network plugin reporting that no IP addresses are available in the node's range. Pods on other nodes start normally.",
    question: "Which component's problem is this?",
    options: [
      { id: 'A', text: "The CNI plugin's IP address management for that node's Pod CIDR" },
      { id: 'B', text: "The kube-proxy rules that map Service IPs to Pods on that node" },
      { id: 'C', text: "The kube-scheduler plugin that scores that node's allocatable resources" },
      { id: 'D', text: "The container registry's rate limit on image pulls from that node" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Creating the Pod sandbox includes calling the CNI plugin to set up networking and allocate an IP; the error says the plugin's IP address management has no free addresses left in the node's Pod CIDR (often from leaked allocations or a small range). The scheduler already placed the Pods, so scoring is not involved. Registry rate limits appear as image pull errors, which come after the sandbox exists. kube-proxy handles Service IPs and does not assign Pod IPs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/",
    tags: ["CNI", "IPAM", "ContainerCreating"]
  },
  {
    id: "cncf-kcna-325",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d2",
    domainName: "Container Orchestration",
    title: "Seeing the full live object",
    scenario: "A Deployment behaves differently from what its manifest in Git describes. The engineer suspects defaults or a mutating webhook changed fields, and she wants to see every field of the live object, including status, exactly as stored in the cluster.",
    question: "Which command shows that?",
    options: [
      { id: 'A', text: "kubectl get deployment api -o yaml" },
      { id: 'B', text: "kubectl explain deployment.spec" },
      { id: 'C', text: "kubectl apply --dry-run=client -f api.yaml" },
      { id: 'D', text: "kubectl rollout status deployment/api" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl get with -o yaml prints the complete live object from the API server, including defaulted fields, anything mutating webhooks added, and the status section, so it can be compared with the manifest in Git. kubectl explain documents the schema of a field, not the live object. A client-side dry run processes the local file without contacting the server's admission chain, so it cannot show what was mutated. rollout status only reports progress of the current rollout.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/",
    tags: ["kubectl get", "YAML", "Troubleshooting"]
  }
];

export default CNCF_KCNA_QUESTIONS_13;
