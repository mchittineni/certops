export const K8S_CKA_QUESTIONS_7 = [
  {
    id: "k8s-cka-136",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Init Container Blocking Pod Startup",
    scenario: "A pod stays in status Init:0/1. Its init container waits for a database Service to answer before exiting.",
    question: "Which command shows why the init container is not finishing?",
    options: [
      { id: 'A', text: "kubectl exec POD -- ps aux" },
      { id: 'B', text: "kubectl get pod POD -o wide" },
      { id: 'C', text: "kubectl logs POD -c INIT_CONTAINER_NAME" },
      { id: 'D', text: "kubectl logs POD" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Init container output is only reachable by naming that container with -c, which is where the retry loop or DNS failure will be visible. Plain logs targets an app container that has not started, exec cannot attach because no regular container is running, and get -o wide adds no diagnostic detail.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-init-containers/",
    tags: ["Init Containers", "Troubleshooting", "Logs"]
  },
  {
    id: "k8s-cka-137",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Adding a Second Control Plane Node",
    scenario: "A single control plane cluster must become highly available by adding two more control plane nodes behind an existing load balancer endpoint.",
    question: "Which additional step does joining a control plane node require compared with joining a worker?",
    options: [
      { id: 'A', text: "The new node must be labelled node-role.kubernetes.io/control-plane before joining." },
      { id: 'B', text: "A separate bootstrap token type is required for control plane nodes." },
      { id: 'C', text: "etcd must be stopped on the first control plane node during the join." },
      { id: 'D', text: "The certificate key from kubeadm init phase upload-certs must be supplied with --control-plane --certificate-key so the new node can fetch the shared certificates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Control plane joins need the shared CA and other certificates, which kubeadm distributes through an encrypted Secret unlocked by the certificate key from upload-certs, passed alongside --control-plane. The role label is applied by kubeadm itself, etcd stays running to accept the new member, and the same bootstrap token type is used for both node kinds.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/",
    tags: ["kubeadm", "High Availability", "Control Plane"]
  },
  {
    id: "k8s-cka-138",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Restart Policy for a Batch Pod",
    scenario: "A pod should run one task and, if the process exits non-zero, be restarted by the kubelet on the same node; if it succeeds it must stay finished.",
    question: "Which restartPolicy matches?",
    options: [
      { id: 'A', text: "OnFailure" },
      { id: 'B', text: "Always" },
      { id: 'C', text: "Never" },
      { id: 'D', text: "IfNotPresent" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OnFailure restarts the container only on a non-zero exit and leaves a successful pod in the Succeeded phase. Always restarts even after success and is the default for long-running workloads, Never leaves a failed pod failed, and IfNotPresent is an image pull policy rather than a restart policy.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/",
    tags: ["Pod Lifecycle", "Batch", "Workloads"]
  },
  {
    id: "k8s-cka-139",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Scaling CoreDNS for a Growing Cluster",
    scenario: "A cluster grew from 20 to 200 nodes and DNS lookups have become slow, with CoreDNS pods showing sustained high CPU.",
    question: "Which response is appropriate?",
    options: [
      { id: 'A', text: "Set dnsPolicy: Default on every pod so they use the node resolver." },
      { id: 'B', text: "Increase CoreDNS replicas and resources, and consider NodeLocal DNSCache to reduce per-node query load." },
      { id: 'C', text: "Move CoreDNS to a DaemonSet on control plane nodes only." },
      { id: 'D', text: "Disable the cluster DNS Service and rely on /etc/hosts entries." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "DNS capacity scales with cluster size, so more CoreDNS replicas plus NodeLocal DNSCache - a per-node caching agent that cuts conntrack pressure and latency - is the standard remedy. Switching pods to the node resolver breaks cluster.local resolution, hosts files do not scale, and confining DNS to control plane nodes reduces rather than increases capacity.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/",
    tags: ["CoreDNS", "Scalability", "DNS"]
  },
  {
    id: "k8s-cka-140",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Static Provisioning Bind Requirements",
    scenario: "An administrator pre-created a PersistentVolume of 50Gi with accessModes ReadWriteOnce and storageClassName manual. A PVC requests 20Gi, ReadWriteOnce, storageClassName manual.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The claim is rejected because manual is not a real provisioner." },
      { id: 'B', text: "The claim binds to the 50Gi volume, because a PV may be larger than the request as long as class and access mode match." },
      { id: 'C', text: "The claim stays Pending because the sizes are not equal." },
      { id: 'D', text: "The PV is split into a 20Gi and a 30Gi volume." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Binding requires the class and access modes to match and the volume capacity to be at least the requested size, so the claim binds and gets the whole 50Gi. Sizes need not be equal, PersistentVolumes are never subdivided, and a StorageClass with no dynamic provisioner is a normal way to group statically provisioned volumes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Static Provisioning", "Binding"]
  },
  {
    id: "k8s-cka-141",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Worker Cannot Join: TLS Handshake Failure",
    scenario: "kubeadm join fails with an error about the CA certificate hash not matching the pinned public key.",
    question: "What does that indicate?",
    options: [
      { id: 'A', text: "The worker clock is ahead of the control plane clock." },
      { id: 'B', text: "The --discovery-token-ca-cert-hash value does not match the current cluster CA, usually because it was copied from an older cluster or the CA was regenerated." },
      { id: 'C', text: "The CNI plugin is not installed on the worker." },
      { id: 'D', text: "The bootstrap token has expired." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The CA certificate hash pins the control plane identity during discovery, so a mismatch means the hash belongs to a different or regenerated CA - regenerating the join command with kubeadm token create --print-join-command produces the correct value. An expired token yields an unauthorized error, clock skew produces certificate validity errors, and CNI is only needed after the node joins.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/",
    tags: ["kubeadm", "Certificates", "Troubleshooting"]
  },
  {
    id: "k8s-cka-142",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "What kubectl cluster-info Reports",
    scenario: "A new operator wants to confirm which endpoint kubectl is talking to and where cluster DNS is served.",
    question: "Which command prints that summary?",
    options: [
      { id: 'A', text: "kubectl config get-clusters" },
      { id: 'B', text: "kubectl cluster-info" },
      { id: 'C', text: "kubectl version --short" },
      { id: 'D', text: "kubectl get nodes -o wide" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl cluster-info prints the control plane URL and the addresses of core add-on services such as CoreDNS as seen through the API server. Node listings show workers, version reports client and server versions, and get-clusters lists kubeconfig entries without confirming reachability.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cluster-info/",
    tags: ["kubectl", "Cluster Administration", "Discovery"]
  },
  {
    id: "k8s-cka-143",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Why the Scheduler Ignores a Pod With nodeName Set",
    scenario: "A pod manifest sets spec.nodeName directly to node03. The node is cordoned and lacks capacity.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The scheduler moves the pod to a node with capacity." },
      { id: 'B', text: "The API server rejects the manifest." },
      { id: 'C', text: "The scheduler is bypassed entirely; the kubelet on node03 tries to run the pod and it may fail admission on the node for lack of resources." },
      { id: 'D', text: "The pod stays Pending until node03 is uncordoned." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting nodeName pre-binds the pod, so kube-scheduler never evaluates it and the cordon - which only affects scheduling decisions - is irrelevant; the node kubelet then admits or rejects it based on local resources. The scheduler does not relocate pre-bound pods, the pod is not Pending because it is already assigned, and the manifest is valid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
    tags: ["Scheduling", "nodeName", "Pods"]
  },
  {
    id: "k8s-cka-144",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Ingress Path Types",
    scenario: "An Ingress rule must match /api and every path beneath it, treating the path as URL path segments rather than a string prefix.",
    question: "Which pathType is correct?",
    options: [
      { id: 'A', text: "Exact" },
      { id: 'B', text: "Prefix" },
      { id: 'C', text: "Regex" },
      { id: 'D', text: "ImplementationSpecific" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Prefix matches on whole path segments, so /api matches /api and /api/v1 but not /apifoo. Exact matches only the literal path, ImplementationSpecific delegates the semantics to the controller and is therefore not portable, and Regex is not a valid pathType value.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "Routing", "Networking"]
  },
  {
    id: "k8s-cka-145",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Choosing Between ReadWriteOnce and ReadWriteOncePod",
    scenario: "A database must guarantee that only one pod at a time can write to its volume, even if two pods are accidentally scheduled onto the same node.",
    question: "Which access mode gives that guarantee?",
    options: [
      { id: 'A', text: "ReadWriteOncePod" },
      { id: 'B', text: "ReadWriteOnce" },
      { id: 'C', text: "ReadWriteMany" },
      { id: 'D', text: "ReadOnlyMany" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ReadWriteOnce restricts the volume to one node, which still allows several pods on that node to mount it; ReadWriteOncePod tightens the guarantee to a single pod cluster-wide, which is what a single-writer database needs. ReadWriteMany permits many writers and ReadOnlyMany forbids writing altogether.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Access Modes", "Storage", "Databases"]
  },
  {
    id: "k8s-cka-146",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Version Skew Between Control Plane and kubelet",
    scenario: "A cluster control plane runs 1.31 and an operator wants to know which kubelet versions are supported on the nodes.",
    question: "Which statement reflects the supported skew policy?",
    options: [
      { id: 'A', text: "Kubelets may be one minor version newer than the API server." },
      { id: 'B', text: "Kubelets may be up to three minor versions older than the API server, and must never be newer than it." },
      { id: 'C', text: "There is no supported skew policy; any combination works." },
      { id: 'D', text: "Kubelets must exactly match the API server minor version." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The version skew policy allows kubelets to lag the API server by up to three minor versions and forbids a kubelet newer than the control plane, which is why the control plane is always upgraded first. Exact matching is stricter than required, newer kubelets are unsupported, and the policy is very much enforced in practice.",
    referenceUrl: "https://kubernetes.io/releases/version-skew-policy/",
    tags: ["Upgrades", "Version Skew", "Cluster Administration"]
  },
  {
    id: "k8s-cka-147",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Finding Which Node Runs a Pod",
    scenario: "An operator needs the node name and pod IP for a specific pod in order to log into that machine.",
    question: "Which command shows both?",
    options: [
      { id: 'A', text: "kubectl get pod POD -o name" },
      { id: 'B', text: "kubectl get pod POD -o wide" },
      { id: 'C', text: "kubectl top pod POD" },
      { id: 'D', text: "kubectl logs POD" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The wide output adds the NODE and IP columns to the standard pod listing. -o name prints only the resource identifier, top shows resource usage, and logs show application output.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
    tags: ["kubectl", "Troubleshooting", "Pods"]
  },
  {
    id: "k8s-cka-148",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "ReplicaSet Adopting Existing Pods",
    scenario: "Three bare pods carry the label app=web. A ReplicaSet with selector app=web and replicas 3 is then created.",
    question: "What does the ReplicaSet do?",
    options: [
      { id: 'A', text: "It adopts the three existing pods by setting ownerReferences and creates none, because the desired count is already met." },
      { id: 'B', text: "It creates three additional pods, for six in total." },
      { id: 'C', text: "It deletes the bare pods and creates three of its own." },
      { id: 'D', text: "It refuses to start because the pods have no owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A ReplicaSet claims any pod matching its selector that has no controller owner, adopting the three existing pods and satisfying the replica count without creating more. It counts matching pods rather than only its own creations, adoption is normal behaviour, and it does not delete pods it can adopt.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/",
    tags: ["ReplicaSet", "Ownership", "Workloads"]
  },
  {
    id: "k8s-cka-149",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Debugging Intermittent Connection Resets Through a Service",
    scenario: "Clients see occasional connection resets when calling a Service during a rolling update, even though readiness probes are configured.",
    question: "Which change most directly reduces the resets?",
    options: [
      { id: 'A', text: "Switch the Service to type NodePort." },
      { id: 'B', text: "Increase the readiness probe failureThreshold." },
      { id: 'C', text: "Set terminationGracePeriodSeconds to 0 so pods exit quickly." },
      { id: 'D', text: "Add a preStop hook with a short sleep so the pod keeps serving while endpoint removal propagates to every node." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Endpoint removal and kube-proxy reprogramming are asynchronous with SIGTERM, so a terminating pod can still receive traffic; a brief preStop sleep keeps it serving until the data plane catches up. A zero grace period makes the race worse, the Service type does not change the race, and a higher failureThreshold delays marking a pod unready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/",
    tags: ["Graceful Shutdown", "Services", "Reliability"]
  },
  {
    id: "k8s-cka-150",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Diagnosing a Failing Liveness Probe",
    scenario: "Events on a pod repeat: \"Liveness probe failed: HTTP probe failed with statuscode: 500\" followed by \"Killing container\".",
    question: "What is the correct interpretation?",
    options: [
      { id: 'A', text: "The probe URL is unreachable because of a NetworkPolicy blocking the kubelet." },
      { id: 'B', text: "The container image is missing curl, which the probe requires." },
      { id: 'C', text: "The application health endpoint is returning an error, so the kubelet restarts the container; the application logs explain why the endpoint is unhealthy." },
      { id: 'D', text: "The pod exceeded its memory limit." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A status code 500 means the probe connected and the application answered unhealthily, so the fault is inside the application rather than in networking. A blocked probe reports a connection refused or timeout, HTTP probes are performed by the kubelet without any in-container tooling, and a memory kill reports OOMKilled.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
    tags: ["Probes", "Troubleshooting", "Reliability"]
  },
  {
    id: "k8s-cka-151",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Restricting a User to One Namespace",
    scenario: "A contractor authenticating with a client certificate whose CN is contractor must be able to fully manage objects in the sandbox namespace and see nothing elsewhere.",
    question: "Which RBAC objects implement that?",
    options: [
      { id: 'A', text: "A Role in sandbox granting the needed verbs, plus a RoleBinding in sandbox with a User subject named contractor." },
      { id: 'B', text: "A NetworkPolicy restricting the contractor to the sandbox namespace." },
      { id: 'C', text: "A ClusterRole plus a ClusterRoleBinding for the user." },
      { id: 'D', text: "A ServiceAccount in sandbox plus a RoleBinding." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A namespaced Role plus a RoleBinding whose subject kind is User and whose name matches the certificate CN grants exactly the intended scope. A ClusterRoleBinding would apply cluster-wide, a ServiceAccount is a different identity from the certificate user, and NetworkPolicy governs pod traffic rather than API authorization.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC", "Multi-tenancy", "Security"]
  },
  {
    id: "k8s-cka-152",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Injecting a Secret as an Environment Variable",
    scenario: "A container must receive the value of key password from a Secret named db-creds as the environment variable DB_PASSWORD.",
    question: "Which construct does that?",
    options: [
      { id: 'A', text: "An annotation secret.kubernetes.io/DB_PASSWORD on the pod." },
      { id: 'B', text: "env with name DB_PASSWORD and valueFrom.secretKeyRef naming db-creds and password." },
      { id: 'C', text: "A volumeMount of db-creds at /env/DB_PASSWORD." },
      { id: 'D', text: "envFrom.configMapRef naming db-creds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "secretKeyRef selects one key from a Secret and binds it to a named environment variable. configMapRef reads a ConfigMap rather than a Secret, mounting produces a file rather than an environment variable, and there is no such annotation mechanism.",
    referenceUrl: "https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/",
    tags: ["Secrets", "Configuration", "Pods"]
  },
  {
    id: "k8s-cka-153",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Scheduling Gates Holding a Pod Before Placement",
    scenario: "A platform must prevent a pod from being scheduled until an external quota controller confirms budget, without leaving the pod in a failed state or deleting it.",
    question: "Which mechanism is designed for this?",
    options: [
      { id: 'A', text: "Setting replicas to 0 until approval." },
      { id: 'B', text: "spec.schedulingGates, which keep the pod SchedulingGated until the gates are removed by the controller." },
      { id: 'C', text: "A NoExecute taint on every node." },
      { id: 'D', text: "A very high initialDelaySeconds on the readiness probe." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Scheduling gates let a controller hold a created pod in the SchedulingGated state and release it by removing the gate, which is exactly an external admission-then-schedule workflow. Probe delays apply after the pod is running, scaling to zero means the pod does not exist, and a cluster-wide NoExecute taint disrupts every workload.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-scheduling-readiness/",
    tags: ["Scheduling Gates", "Scheduling", "Platform"]
  },
  {
    id: "k8s-cka-154",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Session Affinity for a Stateful Frontend",
    scenario: "A legacy application keeps session state in memory, so requests from one client should keep reaching the same pod through a ClusterIP Service.",
    question: "Which Service field provides basic affinity?",
    options: [
      { id: 'A', text: "allocateLoadBalancerNodePorts: false" },
      { id: 'B', text: "publishNotReadyAddresses: true" },
      { id: 'C', text: "externalTrafficPolicy: Local" },
      { id: 'D', text: "sessionAffinity: ClientIP with an optional sessionAffinityConfig timeout." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "sessionAffinity: ClientIP makes kube-proxy hash on the client address so a client keeps hitting the same backend for the configured timeout. externalTrafficPolicy affects source IP and node selection for external traffic, publishNotReadyAddresses exposes unready pods, and the load balancer node port field concerns provisioning details.",
    referenceUrl: "https://kubernetes.io/docs/reference/networking/virtual-ips/",
    tags: ["Services", "Session Affinity", "Networking"]
  },
  {
    id: "k8s-cka-155",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Effect of Deleting a Node Object",
    scenario: "An operator runs kubectl delete node worker3 while the machine is still powered on and its kubelet is running.",
    question: "What happens?",
    options: [
      { id: 'A', text: "The machine is powered off by the control plane." },
      { id: 'B', text: "The pods on it are removed from the API and rescheduled elsewhere, but the kubelet may re-register the node unless it is drained and its kubelet stopped or reset." },
      { id: 'C', text: "The node object is recreated with the same pods intact." },
      { id: 'D', text: "Nothing happens until the node is cordoned first." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deleting the node object removes its pods from the cluster view so controllers recreate them elsewhere, but a live kubelet with valid credentials simply registers again - which is why decommissioning means drain, then delete, then kubeadm reset or shutdown. Kubernetes does not power off machines, re-registration does not restore the old pods, and deletion does not require a prior cordon.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/nodes/",
    tags: ["Nodes", "Lifecycle", "Cluster Administration"]
  },
  {
    id: "k8s-cka-156",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Copying a File Out of a Container",
    scenario: "A heap dump written to /tmp/dump.hprof inside a running container must be retrieved for offline analysis.",
    question: "Which command copies it to the workstation?",
    options: [
      { id: 'A', text: "kubectl exec POD -- cat /tmp/dump.hprof" },
      { id: 'B', text: "kubectl get pod POD -o yaml > dump.hprof" },
      { id: 'C', text: "kubectl logs POD > dump.hprof" },
      { id: 'D', text: "kubectl cp NAMESPACE/POD:/tmp/dump.hprof ./dump.hprof" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl cp transfers files in either direction between a container and the local filesystem, provided tar is available in the image. Logs capture stdout rather than files, piping cat through exec risks corrupting a binary file, and the pod manifest is unrelated to the dump.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cp/",
    tags: ["kubectl", "Debugging", "Files"]
  },
  {
    id: "k8s-cka-157",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "CronJob Concurrency Policy",
    scenario: "A backup CronJob sometimes runs longer than its schedule interval, and two overlapping runs corrupt the backup.",
    question: "Which setting prevents the overlap by skipping the new run?",
    options: [
      { id: 'A', text: "concurrencyPolicy: Replace" },
      { id: 'B', text: "concurrencyPolicy: Forbid" },
      { id: 'C', text: "concurrencyPolicy: Allow" },
      { id: 'D', text: "suspend: true" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Forbid skips the next scheduled run while the previous Job is still active. Replace cancels the running Job and starts a new one - which would abort a backup mid-flight - Allow is the default that permits the overlap, and suspend stops the schedule entirely.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["CronJob", "Concurrency", "Batch"]
  },
  {
    id: "k8s-cka-158",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Filesystem Full Inside a Container With Plenty of Node Disk",
    scenario: "A container reports no space left on device while the node has hundreds of gigabytes free. The pod mounts an emptyDir with sizeLimit set to 1Gi.",
    question: "What is happening?",
    options: [
      { id: 'A', text: "The emptyDir sizeLimit caps the volume, and exceeding it causes the pod to be evicted or writes to fail regardless of node capacity." },
      { id: 'B', text: "The PersistentVolume needs expanding." },
      { id: 'C', text: "The node inode table is exhausted." },
      { id: 'D', text: "The container image layer is read-only, so all writes fail." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A sizeLimit on an emptyDir bounds how much ephemeral storage the volume may consume, so hitting it produces out-of-space behaviour and eviction even on a mostly empty node. Inode exhaustion would affect every workload on the node, a read-only image layer would fail from the first write, and no PersistentVolume is involved.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/",
    tags: ["emptyDir", "Ephemeral Storage", "Troubleshooting"]
  },
  {
    id: "k8s-cka-159",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Multiple Ingress Rules for the Same Host",
    scenario: "Two teams each own an Ingress object for shop.example.com, one serving /cart and the other serving /search, both with the same IngressClass.",
    question: "What is the result with a compliant ingress controller?",
    options: [
      { id: 'A', text: "The second Ingress is rejected by the API server as a duplicate host." },
      { id: 'B', text: "The controller merges the rules for the shared host so both paths are served." },
      { id: 'C', text: "Only the alphabetically first Ingress is served." },
      { id: 'D', text: "The host is served round-robin, alternating between the two rule sets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Ingress objects sharing a host are combined by the controller into one virtual host with the union of their paths, which is how multi-team routing on a shared domain works; genuinely conflicting paths are the only ambiguous case. The API server does not enforce host uniqueness, and neither alphabetical precedence nor alternating rule sets is defined behaviour.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/ingress/",
    tags: ["Ingress", "Multi-tenancy", "Routing"]
  },
  {
    id: "k8s-cka-160",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Forcing Deletion of a Stuck Pod",
    scenario: "A pod remains Terminating long after its grace period because its node is unreachable, and the workload must be recreated promptly.",
    question: "What is the correct understanding of kubectl delete pod --force --grace-period=0?",
    options: [
      { id: 'A', text: "It sends SIGKILL to the container and waits for confirmation." },
      { id: 'B', text: "It removes the pod object from the API immediately without confirming the container stopped, which risks two instances running if the node returns - dangerous for single-writer workloads." },
      { id: 'C', text: "It is the recommended first response to any Terminating pod." },
      { id: 'D', text: "It automatically detaches any PersistentVolume safely." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Force deletion is an API-level removal that abandons the kubelet handshake, so the container may still be running on an unreachable node and a StatefulSet replacement could double-write. It cannot deliver a signal to an unreachable kubelet, it is a last resort rather than a first response, and volume detachment still depends on the node object and attach-detach controller.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/force-delete-stateful-set-pod/",
    tags: ["Pods", "Troubleshooting", "Safety"]
  }
];

export default K8S_CKA_QUESTIONS_7;
