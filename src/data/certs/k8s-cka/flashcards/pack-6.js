export const K8S_CKA_FLASHCARDS_6 = [
  {
    id: 'k8s-cka-fc-113', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'What does the cloud-controller-manager own?',
    hint: 'Three loops.',
    back: '<strong>Node controller</strong> — does this node still exist in the cloud? <strong>Route controller</strong> — provider routes for pod networking. <strong>Service controller</strong> — provisions load balancers for <code>type: LoadBalancer</code>. Splitting it out is what lets providers ship out-of-tree.',
    tags: ['Architecture', 'Cloud Controller']
  },
  {
    id: 'k8s-cka-fc-114', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'The kubectl rollout subcommands.',
    hint: 'Five of them.',
    back: '<code>status</code> (block until done/failed), <code>history</code> (list revisions, <code>--revision=N</code> for detail), <code>undo</code> (<code>--to-revision=N</code>), <code>pause</code> / <code>resume</code> (batch several edits into one roll), <code>restart</code> (recreate pods on the same image).',
    tags: ['Deployment', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-115', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'readOnlyRootFilesystem is on but the app needs /tmp. Now what?',
    hint: 'Mount over the path.',
    back: 'Mount an <strong>emptyDir</strong> at <code>/tmp</code> (and any other writable path such as a cache or run directory). The root stays read-only, so a compromised process still cannot rewrite binaries. Never solve it by disabling the setting or running as root.',
    tags: ['Security Context', 'Volumes']
  },
  {
    id: 'k8s-cka-fc-116', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'What is a projected ServiceAccount token, and why prefer it?',
    hint: 'TokenRequest API.',
    back: 'A volume with a <code>serviceAccountToken</code> source: the kubelet gets a token from the <strong>TokenRequest</strong> API with a specific <code>audience</code> and <code>expirationSeconds</code>, and rotates it in place. Unlike legacy token Secrets it is short-lived, audience-bound, and bound to the pod lifetime.',
    tags: ['ServiceAccount', 'Security']
  },
  {
    id: 'k8s-cka-fc-117', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pods evicted about five minutes after a node went unreachable. Why five?',
    hint: 'A default toleration.',
    back: 'The node controller taints the node <code>node.kubernetes.io/unreachable:NoExecute</code>, and every pod gets a default toleration for it with <code>tolerationSeconds: 300</code>. Override per pod for faster or slower failover.',
    tags: ['Taints', 'Eviction']
  },
  {
    id: 'k8s-cka-fc-118', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'terminationGracePeriodSeconds vs activeDeadlineSeconds vs progressDeadlineSeconds vs minReadySeconds.',
    hint: 'Four different clocks.',
    back: '<strong>terminationGracePeriod</strong> — SIGTERM → SIGKILL window (default 30s; preStop runs inside it). <strong>activeDeadlineSeconds</strong> — max runtime of a pod/Job. <strong>progressDeadlineSeconds</strong> — a Deployment roll must progress within this (default 600s). <strong>minReadySeconds</strong> — how long a new pod must stay ready to count as available.',
    tags: ['Pod Lifecycle', 'Deployment']
  },
  {
    id: 'k8s-cka-fc-119', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'One-liner to test cluster DNS.',
    hint: 'Throwaway pod.',
    back: '<code>kubectl run tmp --rm -it --image=busybox:1.36 --restart=Never -- nslookup api.web.svc.cluster.local</code>. Cluster names only resolve <em>inside</em> the cluster, using the pod resolv.conf that the kubelet writes.',
    tags: ['DNS', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-120', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'etcd alarm NOSPACE. Recovery sequence.',
    hint: 'Three steps, in order.',
    back: '1. <strong>Compact</strong> to a recent revision (discard old history). 2. <strong>Defragment</strong> every member (return free pages to the filesystem). 3. <strong>Disarm</strong> the alarm — writes stay blocked until you do. Raising <code>--quota-backend-bytes</code> only buys time.',
    tags: ['etcd', 'Maintenance']
  },
  {
    id: 'k8s-cka-fc-121', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'How do you keep a workload off spot/preemptible nodes?',
    hint: 'You do nothing to it.',
    back: 'Taint the nodes (<code>spot=true:NoSchedule</code>) and add a <strong>toleration only to the workloads that may run there</strong>. Taints are opt-in by default: anything without the toleration is repelled automatically. Pair with node labels + nodeSelector if you also want to attract batch work there.',
    tags: ['Taints', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-122', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'RESTARTS is high but the pod is Running and Ready. What now?',
    hint: 'Look backwards.',
    back: 'The container has crashed or been killed that many times <em>within this pod</em>. Read <code>kubectl logs POD --previous</code> and <code>kubectl get pod POD -o jsonpath=\'{.status.containerStatuses[0].lastState}\'</code> for the exit code and reason (OOMKilled? Error after a liveness kill?).',
    tags: ['Troubleshooting', 'Pods']
  },
  {
    id: 'k8s-cka-fc-123', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Two Ingress objects for the same host with the same class.',
    hint: 'Not an error.',
    back: 'A compliant controller <strong>merges</strong> them into one virtual host with the union of their paths — that is how several teams share a domain. Genuine path conflicts are the only ambiguity; the API server does not enforce host uniqueness.',
    tags: ['Ingress', 'Multi-tenancy']
  },
  {
    id: 'k8s-cka-fc-124', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'What are scheduling gates for?',
    hint: 'Hold a pod before placement.',
    back: '<code>spec.schedulingGates</code> keeps a created pod in the <strong>SchedulingGated</strong> state until an external controller removes the gates — quota approval, capacity reservation, batch admission. Gates can only be removed, never added after creation.',
    tags: ['Scheduling Gates', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-125', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Create a Secret from files vs from literals.',
    hint: 'Three subcommands.',
    back: '<code>kubectl create secret generic db --from-literal=user=admin --from-file=./password.txt</code>; <code>kubectl create secret tls NAME --cert= --key=</code> (type kubernetes.io/tls); <code>kubectl create secret docker-registry NAME --docker-server/--docker-username/--docker-password</code> for imagePullSecrets.',
    tags: ['Secrets', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-126', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Order of operations for an inbound API request.',
    hint: 'Five stages.',
    back: '<strong>Authentication</strong> → <strong>Authorization</strong> (RBAC/Node/Webhook) → <strong>Mutating admission</strong> → <strong>Schema validation</strong> → <strong>Validating admission</strong> → persisted to etcd. That order is why a validating webhook can assume mutations already happened.',
    tags: ['API Server', 'Admission Control']
  },
  {
    id: 'k8s-cka-fc-127', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'You applied a NetworkPolicy and nothing changed. First suspicion?',
    hint: 'Not the YAML.',
    back: 'The <strong>CNI plugin does not implement NetworkPolicy</strong> (e.g. plain Flannel). The API server happily stores the object and nothing enforces it. Calico, Cilium, Antrea, Weave, and Canal do enforce. Verify by testing a deny you expect to bite.',
    tags: ['NetworkPolicy', 'CNI']
  },
  {
    id: 'k8s-cka-fc-128', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Read one field out of an object for a script.',
    hint: 'JSONPath with a filter.',
    back: '<code>kubectl get node N -o jsonpath="{.status.addresses[?(@.type==\'InternalIP\')].address}"</code>. Also handy: <code>-o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName</code> and <code>-o go-template</code>. Never grep <code>describe</code> output in a script.',
    tags: ['kubectl', 'JSONPath']
  },
  {
    id: 'k8s-cka-fc-129', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Deleting a CRD — what is the blast radius?',
    hint: 'Bigger than the CRD.',
    back: 'Every <strong>custom resource instance</strong> of that kind is garbage-collected, and if the controller uses finalizers to tear down real infrastructure, deleting the CRD can destroy cloud resources. Treat it like dropping a database table: back the instances up first.',
    tags: ['CRD', 'Safety']
  },
  {
    id: 'k8s-cka-fc-130', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Who owns the pods of a Deployment?',
    hint: 'Two levels.',
    back: 'Deployment → <strong>ReplicaSet</strong> → Pods. The pod <code>ownerReferences</code> names the ReplicaSet, which is why rollout history is a list of ReplicaSets and why <code>--cascade=orphan</code> on the Deployment leaves both the ReplicaSet and pods running.',
    tags: ['Deployment', 'Ownership']
  },
  {
    id: 'k8s-cka-fc-131', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'A container reports "no space left on device" but the node disk is empty.',
    hint: 'Check the volume spec.',
    back: 'An <code>emptyDir</code> with a <strong>sizeLimit</strong>, or an <code>ephemeral-storage</code> limit on the container — both cap usage independently of node capacity, and exceeding them fails writes or evicts the pod. Inode exhaustion is the other classic false-empty-disk cause.',
    tags: ['Ephemeral Storage', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-132', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Clients get resets during a rolling update even with readiness probes. Why?',
    hint: 'Two asynchronous things.',
    back: 'SIGTERM and endpoint removal race: kube-proxy on every node has not yet reprogrammed when the pod starts shutting down. Fix with a <strong>preStop hook that sleeps a few seconds</strong> (and a grace period long enough to cover it) so the pod keeps serving until the data plane catches up.',
    tags: ['Graceful Shutdown', 'Services']
  },
  {
    id: 'k8s-cka-fc-133', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'Copy a file out of a running container.',
    hint: 'It shells out to tar.',
    back: '<code>kubectl cp NS/POD:/path/in/container ./local -c CONTAINER</code>, and the reverse for uploads. Requires <code>tar</code> in the image — which is exactly why it fails on distroless images, where <code>kubectl debug</code> with a tooling image is the way.',
    tags: ['kubectl', 'Debugging']
  },
  {
    id: 'k8s-cka-fc-134', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'CronJob concurrencyPolicy options.',
    hint: 'Three, and one is destructive.',
    back: '<strong>Allow</strong> (default) — overlapping runs permitted. <strong>Forbid</strong> — skip the new run if the previous is still active. <strong>Replace</strong> — kill the running Job and start the new one. Backups want Forbid; Replace would abort a run mid-flight.',
    tags: ['CronJob', 'Concurrency']
  },
  {
    id: 'k8s-cka-fc-135', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'Same-node pod traffic works, cross-node does not. Diagnosis?',
    hint: 'Two different paths.',
    back: 'Intra-node traffic uses a local bridge; cross-node traffic needs the <strong>overlay or routes</strong>. So suspect the CNI plugin (misconfigured pod CIDR, crashed agent) or a firewall blocking its transport — VXLAN UDP 8472, Geneve 6081, WireGuard, or BGP 179 for Calico.',
    tags: ['CNI', 'Networking']
  },
  {
    id: 'k8s-cka-fc-136', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'A container runtime requirement in one line.',
    hint: 'Post-dockershim.',
    back: 'The kubelet speaks only <strong>CRI</strong> — containerd or CRI-O — via <code>--container-runtime-endpoint</code>. Dockershim was removed in v1.24; Docker Engine now needs the <code>cri-dockerd</code> adapter. runc/crun sit <em>below</em> the CRI runtime as OCI runtimes.',
    tags: ['Container Runtime', 'CRI']
  },
  {
    id: 'k8s-cka-fc-137', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Interpreting "pods is forbidden: User X cannot create resource pods".',
    hint: 'Which of the two gates failed?',
    back: 'Authentication <strong>succeeded</strong> (it knows who you are) and <strong>authorization failed</strong>. Fix with RBAC. Contrast: <em>Unauthorized</em> (401) means the credential itself was rejected, and a webhook denial names the webhook in the message.',
    tags: ['RBAC', 'Troubleshooting']
  }
];

export default K8S_CKA_FLASHCARDS_6;
