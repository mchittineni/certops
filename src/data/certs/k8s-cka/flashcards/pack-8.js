export const K8S_CKA_FLASHCARDS_8 = [
  {
    id: 'k8s-cka-fc-163', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'kubeadm init phases you might run on their own.',
    hint: 'The workflow is decomposable.',
    back: '<code>kubeadm init phase</code> exposes each step: <em>certs</em>, <em>kubeconfig</em>, <em>control-plane</em>, <em>etcd</em>, <em>upload-certs</em>, <em>bootstrap-token</em>, <em>addon</em>. Handy for regenerating just the kubeconfigs or certificates without reinstalling. <code>kubeadm upgrade node</code> and <code>kubeadm join phase</code> mirror this.',
    tags: ['kubeadm', 'Cluster Administration']
  },
  {
    id: 'k8s-cka-fc-164', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Change one container image on a Deployment.',
    hint: 'Container name required.',
    back: '<code>kubectl set image deployment/web web=nginx:1.27</code> — the part before <code>=</code> is the <em>container</em> name, not the deployment. <code>kubectl set</code> also handles <code>env</code>, <code>resources</code>, <code>serviceaccount</code>, and <code>image</code> across several resource kinds.',
    tags: ['kubectl', 'Deployment']
  },
  {
    id: 'k8s-cka-fc-165', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Deleting a StorageClass — what happens to existing volumes?',
    hint: 'Consulted only once.',
    back: '<strong>Nothing.</strong> A StorageClass is used at provisioning time only; bound PVs keep their own reclaim policy and data. The consequence is forward-looking: new PVCs naming that class stay Pending forever.',
    tags: ['StorageClass', 'Operations']
  },
  {
    id: 'k8s-cka-fc-166', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'ClusterIP does not answer ping. Is the Service broken?',
    hint: 'Nothing owns the address.',
    back: 'No — a ClusterIP is a <strong>virtual address</strong> that exists only as iptables/IPVS DNAT rules on each node. No interface holds it, so ICMP is meaningless; test with TCP to a defined <code>port</code> instead. If one node cannot reach it, suspect kube-proxy there.',
    tags: ['Services', 'Networking']
  },
  {
    id: 'k8s-cka-fc-167', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Scheduler gave you "0/6 nodes are available" and nothing else. Next step?',
    hint: 'Turn up the detail.',
    back: 'Read the full event — it enumerates reasons per node (insufficient cpu, taints, node affinity, unbound PVC). If that is not enough, raise <strong>kube-scheduler verbosity</strong> (<code>-v=4</code> or higher in its static pod manifest) and read its logs for per-plugin filter results.',
    tags: ['Scheduler', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-168', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'HPA or VPA — how do you choose?',
    hint: 'Can the workload parallelise?',
    back: '<strong>HPA</strong> — more replicas; right when the work shards across pods. <strong>VPA</strong> — bigger requests/limits; right for single-threaded or memory-bound workloads that cannot use more replicas. Do not run both on the same resource metric — they fight. The <strong>Cluster Autoscaler</strong> is a third thing: it adds nodes for unschedulable pods.',
    tags: ['Autoscaling', 'Resources']
  },
  {
    id: 'k8s-cka-fc-169', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'kubectl apply vs create vs replace.',
    hint: 'Declarative vs imperative.',
    back: '<strong>apply</strong> — declarative create-or-update, merges and records the config; safe to re-run. <strong>create</strong> — imperative; fails if the object exists. <strong>replace</strong> — full overwrite of an existing object; <code>--force</code> deletes and recreates it.',
    tags: ['kubectl', 'Declarative']
  },
  {
    id: 'k8s-cka-fc-170', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Why does a LoadBalancer Service stay Pending on bare metal?',
    hint: 'Nobody is listening.',
    back: 'There is no cloud provider (or bare-metal implementation such as MetalLB) to allocate an external IP, so the Service never gets one. On bare metal, the usual answer is an <strong>ingress controller</strong> exposed via NodePort or host network, with Ingress objects routing many apps through one entry point.',
    tags: ['Services', 'Bare Metal']
  },
  {
    id: 'k8s-cka-fc-171', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pods cannot reach kubernetes.default.svc but the node can reach the API server.',
    hint: 'Pod network path.',
    back: 'The pod path goes through the <strong>kubernetes Service ClusterIP</strong> in the default namespace, so suspect an egress <strong>NetworkPolicy</strong> that forgot the API endpoint, or stale/missing kube-proxy rules on that node. Node-level reachability proves the API server itself is fine.',
    tags: ['Networking', 'API Access']
  },
  {
    id: 'k8s-cka-fc-172', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Which resource covers container writable layer, logs, and emptyDir?',
    hint: 'A first-class resource name.',
    back: '<code>ephemeral-storage</code>. Declare requests and limits for it so the scheduler accounts for disk and the kubelet evicts the <em>offending</em> pod instead of a random neighbour when the node hits DiskPressure.',
    tags: ['Ephemeral Storage', 'Resources']
  },
  {
    id: 'k8s-cka-fc-173', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Kustomize in one card.',
    hint: 'Built into kubectl.',
    back: 'A <code>kustomization.yaml</code> lists resources plus transformations — <code>namePrefix</code>, <code>commonLabels</code>, <code>images</code>, <code>replicas</code>, <code>configMapGenerator</code>, and strategic-merge or JSON <code>patches</code>. Overlays reuse a shared base per environment. Apply with <code>kubectl apply -k DIR</code>; preview with <code>kubectl kustomize DIR</code>.',
    tags: ['Kustomize', 'Configuration']
  },
  {
    id: 'k8s-cka-fc-174', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'Follow logs from the last 20 lines onward.',
    hint: 'Two flags.',
    back: '<code>kubectl logs -f POD --tail=20</code>. Related: <code>--since=15m</code> or <code>--since-time=RFC3339</code>, <code>--timestamps</code>, <code>-l app=web --max-log-requests=N</code> to stream several pods, and <code>--previous</code> for the crashed instance.',
    tags: ['Logs', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-175', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'StatefulSet canary: update only the top ordinals.',
    hint: 'One integer.',
    back: '<code>updateStrategy.rollingUpdate.partition: N</code> — only pods with ordinal ≥ N are updated. Set it to <code>replicas-1</code> to canary a single pod, then lower it stepwise to 0 to complete the roll. StatefulSets update in <em>reverse</em> ordinal order.',
    tags: ['StatefulSet', 'Canary']
  },
  {
    id: 'k8s-cka-fc-176', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'iptables vs IPVS mode for kube-proxy.',
    hint: 'Linear vs hash.',
    back: '<strong>iptables</strong> — sequential rule chains; simple, but rule count and reprogramming cost grow with Services × endpoints. <strong>IPVS</strong> — kernel hash tables, cheaper updates at scale, and several LB algorithms (rr, lc, dh, sh). Neither replaces the CNI plugin; both are L4.',
    tags: ['kube-proxy', 'Performance']
  },
  {
    id: 'k8s-cka-fc-177', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Two ways to check control plane health.',
    hint: 'One is deprecated — avoid it.',
    back: '<code>kubectl get pods -n kube-system</code> for the static pods (plus <code>crictl</code> on the node if the API is down), and the API server endpoints <code>/livez?verbose</code>, <code>/readyz?verbose</code>, <code>/healthz</code> via <code>kubectl get --raw</code>. <code>componentstatuses</code> is deprecated and unreliable.',
    tags: ['Health Checks', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-178', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'What does immutable: true buy you on a ConfigMap or Secret?',
    hint: 'Watches.',
    back: 'The kubelet stops watching the object, which markedly cuts API server load in large clusters, and accidental edits become impossible. Cost: you must <strong>delete and recreate</strong> to change it (and roll the pods), and the flag itself cannot be reverted.',
    tags: ['ConfigMap', 'Scalability']
  },
  {
    id: 'k8s-cka-fc-179', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'What does minReadySeconds protect against?',
    hint: 'Pods that die 20 seconds in.',
    back: 'A new pod counts as <strong>available</strong> only after staying Ready for that long, so a rollout stalls instead of marching on when replacements pass readiness and then crash. Combine with <code>progressDeadlineSeconds</code> so the roll eventually reports failure.',
    tags: ['Deployment', 'Reliability']
  },
  {
    id: 'k8s-cka-fc-180', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'kubelet will not start: "running with swap on is not supported".',
    hint: 'Two places to fix it.',
    back: '<code>swapoff -a</code> now, and comment the swap line out of <code>/etc/fstab</code> so it stays off across reboots. (Swap support exists as an opt-in feature but standard kubeadm clusters expect it disabled.) Same class of node prerequisite as the required sysctls and kernel modules.',
    tags: ['kubelet', 'Nodes']
  },
  {
    id: 'k8s-cka-fc-181', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Node prerequisites before kubeadm join.',
    hint: 'Four things.',
    back: 'Swap off; a CRI runtime installed and running; kernel modules <code>overlay</code> and <code>br_netfilter</code> loaded; sysctls <code>net.bridge.bridge-nf-call-iptables=1</code> and <code>net.ipv4.ip_forward=1</code>. Plus matching kubeadm/kubelet/kubectl packages and reachability to the control plane endpoint on 6443.',
    tags: ['kubeadm', 'Nodes']
  },
  {
    id: 'k8s-cka-fc-182', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'publishNotReadyAddresses — why would you ever want that?',
    hint: 'Bootstrap chicken-and-egg.',
    back: 'Clustered systems must discover peers <em>before</em> any of them is ready — otherwise the cluster can never form. Setting it on the headless Service makes DNS return peer addresses regardless of readiness, while readiness still gates the client-facing Service.',
    tags: ['Services', 'StatefulSet']
  },
  {
    id: 'k8s-cka-fc-183', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Why is drain refusing to evict, and which flags override what?',
    hint: 'Three different guards.',
    back: '<code>--ignore-daemonsets</code> — DaemonSet pods cannot move. <code>--delete-emptydir-data</code> — acknowledges local scratch data will be lost. <code>--force</code> — evicts pods with no controller (they will <em>not</em> come back). PodDisruptionBudgets can also block; <code>--disable-eviction</code> bypasses them and is a last resort.',
    tags: ['Drain', 'Maintenance']
  },
  {
    id: 'k8s-cka-fc-184', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Two ways to consume a Secret in a pod.',
    hint: 'File or variable.',
    back: '<strong>Volume</strong> — each key becomes a file; updates propagate (unless subPath), and the whole Secret or selected <code>items</code> can be projected. <strong>Environment</strong> — <code>valueFrom.secretKeyRef</code> for one key or <code>envFrom.secretRef</code> for all; fixed at container start and visible in <code>/proc</code> and crash dumps.',
    tags: ['Secrets', 'Configuration']
  },
  {
    id: 'k8s-cka-fc-185', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A Deployment exists but there is no ReplicaSet and no pods.',
    hint: 'Nothing acted on it.',
    back: 'Suspect <strong>kube-controller-manager</strong> — crashed, not leader, or misconfigured. Check its static pod status and logs in kube-system. If the ReplicaSet exists but pods do not, look at quotas and admission; if pods exist but stay Pending, look at the scheduler.',
    tags: ['Controller Manager', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-186', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'What is the danger of kubectl delete pod --force --grace-period=0?',
    hint: 'The container may still be alive.',
    back: 'It deletes the API object <strong>without confirming the container stopped</strong>. On an unreachable node the process may still be running and writing, so a StatefulSet replacement can double-write and corrupt data. Use it only when you know the node is truly dead.',
    tags: ['Pods', 'Safety']
  },
  {
    id: 'k8s-cka-fc-187', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'ExternalName Service: what does the client actually get?',
    hint: 'Nothing is proxied.',
    back: 'A <strong>CNAME</strong> from CoreDNS to the external hostname — no ClusterIP, no kube-proxy rules, no port translation, and the client connects directly. So <code>port</code> on the Service is meaningless, and TLS hostname verification sees the external name.',
    tags: ['Services', 'ExternalName']
  }
];

export default K8S_CKA_FLASHCARDS_8;
