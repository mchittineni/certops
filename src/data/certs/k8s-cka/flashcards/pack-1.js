export const K8S_CKA_FLASHCARDS = [
  {
    id: 'k8s-cka-fc-1',
    difficulty: 'easy',
    certId: 'k8s-cka',
    domainId: 'd4',
    front: 'Name the control plane components and what each owns.',
    hint: 'Five, one of which is the only thing that talks to etcd.',
    back: '<strong>kube-apiserver</strong> — the only component that reads/writes etcd; all requests go through it. <strong>etcd</strong> — the cluster state store. <strong>kube-scheduler</strong> — binds pending pods to nodes. <strong>kube-controller-manager</strong> — reconciliation loops (node, replicaset, endpoints…). <strong>cloud-controller-manager</strong> — cloud-provider integration (LB, routes, node lifecycle).',
    tags: ['Architecture', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-2',
    difficulty: 'medium',
    certId: 'k8s-cka',
    domainId: 'd2',
    front: 'A pod is stuck in Pending. What is your triage order?',
    hint: 'Events first, always.',
    back: '<code>kubectl describe pod</code> and read <strong>Events</strong>. Pending almost always means the scheduler could not place it: insufficient CPU/memory, an unsatisfied nodeSelector/affinity, a taint with no matching toleration, an unbound PVC, or no nodes Ready. <code>kubectl get events --sort-by=.lastTimestamp</code> and <code>kubectl top nodes</code> confirm which.',
    tags: ['Troubleshooting', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-3',
    difficulty: 'medium',
    certId: 'k8s-cka',
    domainId: 'd3',
    front: 'Taints and tolerations vs. node affinity — which repels and which attracts?',
    hint: 'Node-side versus pod-side.',
    back: '<strong>Taints</strong> are set on the node and <em>repel</em> pods that lack a matching <strong>toleration</strong> (effects: NoSchedule, PreferNoSchedule, NoExecute). <strong>Node affinity</strong> is set on the pod and <em>attracts</em> it to matching nodes (requiredDuringScheduling… is hard, preferredDuringScheduling… is soft). A toleration permits, it does not guarantee placement.',
    tags: ['Scheduling', 'Taints', 'Affinity']
  },
  {
    id: 'k8s-cka-fc-4',
    difficulty: 'easy',
    certId: 'k8s-cka',
    domainId: 'd5',
    front: 'Service types: ClusterIP, NodePort, LoadBalancer, ExternalName — plus Ingress.',
    hint: 'They stack.',
    back: '<strong>ClusterIP</strong> — internal-only virtual IP (default). <strong>NodePort</strong> — ClusterIP plus a port 30000–32767 on every node. <strong>LoadBalancer</strong> — NodePort plus a cloud load balancer. <strong>ExternalName</strong> — a CNAME to an external DNS name, no proxying. <strong>Ingress</strong> is not a Service type: it is L7 HTTP routing in front of Services, implemented by an ingress controller.',
    tags: ['Services', 'Networking', 'Ingress']
  },
  {
    id: 'k8s-cka-fc-5',
    difficulty: 'medium',
    certId: 'k8s-cka',
    domainId: 'd1',
    front: 'PV, PVC, StorageClass — and what do the reclaim policies do?',
    hint: 'Supply, demand, and the vending machine.',
    back: 'A <strong>PV</strong> is the actual piece of storage; a <strong>PVC</strong> is a pod\'s request for one; a <strong>StorageClass</strong> dynamically provisions a PV to satisfy the claim. Reclaim policy <strong>Delete</strong> destroys the backing volume when the PVC goes away; <strong>Retain</strong> keeps it (the PV moves to Released and needs manual cleanup before reuse).',
    tags: ['Storage', 'PV', 'PVC', 'StorageClass']
  },
  {
    id: 'k8s-cka-fc-6',
    difficulty: 'medium',
    certId: 'k8s-cka',
    domainId: 'd4',
    front: 'How do you safely take a node out of service for maintenance?',
    hint: 'Two verbs, then one to bring it back.',
    back: '<code>kubectl cordon NODE</code> marks it unschedulable, then <code>kubectl drain NODE --ignore-daemonsets --delete-emptydir-data</code> evicts the pods while respecting PodDisruptionBudgets. Afterwards <code>kubectl uncordon NODE</code>. Drain implies cordon; DaemonSet pods are not evicted, which is why the flag is needed.',
    tags: ['Cluster Maintenance', 'Drain', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-7',
    difficulty: 'hard',
    certId: 'k8s-cka',
    domainId: 'd4',
    front: 'How do you back up and restore etcd?',
    hint: 'etcdctl with API version 3 and three certs.',
    back: '<code>ETCDCTL_API=3 etcdctl snapshot save /backup/etcd.db --endpoints=https://127.0.0.1:2379 --cacert=… --cert=… --key=…</code>. Restore with <code>etcdctl snapshot restore</code> into a new data directory, then point the etcd static pod manifest at that directory and let kubelet restart it. Verify with <code>etcdctl snapshot status</code>.',
    tags: ['etcd', 'Backup', 'Cluster Maintenance']
  },
  {
    id: 'k8s-cka-fc-8',
    difficulty: 'easy',
    certId: 'k8s-cka',
    domainId: 'd3',
    front: 'Deployment vs. StatefulSet vs. DaemonSet vs. Job/CronJob',
    hint: 'Interchangeable, identity-bound, per-node, run-to-completion.',
    back: '<strong>Deployment</strong> — stateless, interchangeable replicas with rolling updates. <strong>StatefulSet</strong> — stable ordinal names, stable network identity, and a PVC per replica; ordered rollout. <strong>DaemonSet</strong> — one pod per (matching) node, for agents and CNI. <strong>Job</strong> — runs to completion; <strong>CronJob</strong> — schedules Jobs.',
    tags: ['Workloads', 'StatefulSet', 'DaemonSet']
  },
  {
    id: 'k8s-cka-fc-9',
    difficulty: 'hard',
    certId: 'k8s-cka',
    domainId: 'd5',
    front: 'What does a default-deny NetworkPolicy look like, and what is the default without one?',
    hint: 'Namespaces are open until they are not.',
    back: 'Without any NetworkPolicy selecting a pod, all ingress and egress is allowed. A policy with <code>podSelector: {}</code> and <code>policyTypes: [Ingress]</code> and no rules denies all ingress in that namespace. Policies are additive (whitelist only) and require a CNI that enforces them — Calico or Cilium do, plain Flannel does not.',
    tags: ['NetworkPolicy', 'Security', 'CNI']
  },
  {
    id: 'k8s-cka-fc-10',
    difficulty: 'easy',
    certId: 'k8s-cka',
    domainId: 'd2',
    front: 'Liveness vs. readiness vs. startup probe',
    hint: 'Restart, remove from endpoints, wait.',
    back: '<strong>Liveness</strong> failure restarts the container. <strong>Readiness</strong> failure removes the pod from Service endpoints but leaves it running. <strong>Startup</strong> probe disables the other two until it succeeds — the fix for slow-booting apps that a liveness probe would otherwise kill in a restart loop.',
    tags: ['Probes', 'Troubleshooting', 'Workloads']
  },
  {
    id: 'k8s-cka-fc-11',
    difficulty: 'medium',
    certId: 'k8s-cka',
    domainId: 'd4',
    front: 'What are the RBAC objects and how do they combine?',
    hint: 'Two scopes, two bindings.',
    back: '<strong>Role</strong> (namespaced) and <strong>ClusterRole</strong> (cluster-wide) define verbs on resources. <strong>RoleBinding</strong> grants a Role — or a ClusterRole, scoped to that namespace — to a subject. <strong>ClusterRoleBinding</strong> grants a ClusterRole cluster-wide. There is no deny rule: permissions are purely additive. Test with <code>kubectl auth can-i</code>.',
    tags: ['RBAC', 'Security', 'Cluster Architecture']
  },
  {
    id: 'k8s-cka-fc-12',
    difficulty: 'hard',
    certId: 'k8s-cka',
    domainId: 'd2',
    front: 'The kubelet on a node is down. Where do you look?',
    hint: 'It is a systemd unit, not a pod.',
    back: '<code>systemctl status kubelet</code> and <code>journalctl -u kubelet -f</code>. Common causes: a bad <code>/var/lib/kubelet/config.yaml</code>, expired client certificates, a swap/cgroup-driver mismatch with the container runtime, or the wrong <code>--container-runtime-endpoint</code>. Static pod manifests live in <code>/etc/kubernetes/manifests</code>.',
    tags: ['kubelet', 'Troubleshooting', 'Node']
  }
];

export default K8S_CKA_FLASHCARDS;
