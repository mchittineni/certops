export const K8S_CKA_FLASHCARDS_2 = [
  {
    id: 'k8s-cka-fc-13', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Where does the kubelet look for static pod manifests on a kubeadm node?',
    hint: 'One directory, watched directly by the kubelet.',
    back: '<code>/etc/kubernetes/manifests</code> — set by <code>staticPodPath</code> in <code>/var/lib/kubelet/config.yaml</code>. Anything dropped there is started by the kubelet with no scheduler and no API server involvement, and mirrored back into <code>kube-system</code> as a read-only mirror pod.',
    tags: ['Static Pods', 'kubeadm']
  },
  {
    id: 'k8s-cka-fc-14', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'The three PersistentVolume reclaim policies.',
    hint: 'One of them is deprecated.',
    back: '<strong>Retain</strong> — PV and data survive PVC deletion; PV goes to <em>Released</em> and must be reclaimed by hand. <strong>Delete</strong> — PV and the backing storage are removed (the default for most dynamic provisioners). <strong>Recycle</strong> — deprecated; scrubbed the volume with <code>rm -rf</code>.',
    tags: ['Storage', 'PersistentVolume']
  },
  {
    id: 'k8s-cka-fc-15', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Write a default-deny-ingress NetworkPolicy in your head.',
    hint: 'Empty selector, one policyType, no rules.',
    back: '<code>podSelector: {}</code> selects every pod in the namespace, <code>policyTypes: [Ingress]</code> turns ingress filtering on, and <strong>no ingress rules</strong> means nothing is allowed. Egress is untouched. Add <code>Egress</code> to policyTypes for a full default-deny — but then remember to allow DNS on port 53.',
    tags: ['NetworkPolicy', 'Security']
  },
  {
    id: 'k8s-cka-fc-16', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'cordon vs drain vs delete node.',
    hint: 'Only one of them evicts.',
    back: '<strong>cordon</strong> — marks the node unschedulable; running pods stay. <strong>drain</strong> — cordons <em>and</em> evicts (needs <code>--ignore-daemonsets</code>, and <code>--delete-emptydir-data</code> if pods use emptyDir). <strong>delete node</strong> — removes the object from the API; a live kubelet will just re-register.',
    tags: ['Maintenance', 'Nodes']
  },
  {
    id: 'k8s-cka-fc-17', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'The etcd snapshot command, from memory.',
    hint: 'Three cert flags and an endpoint.',
    back: '<code>ETCDCTL_API=3 etcdctl snapshot save /opt/snap.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key</code>. Restore with <code>snapshot restore --data-dir=…</code> then repoint the etcd static pod at the new directory.',
    tags: ['etcd', 'Backup']
  },
  {
    id: 'k8s-cka-fc-18', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pod status decoder: CrashLoopBackOff, ImagePullBackOff, CreateContainerConfigError, Pending.',
    hint: 'Each points at a different layer.',
    back: '<strong>CrashLoopBackOff</strong> — container starts then exits; read <code>logs --previous</code>. <strong>ImagePullBackOff</strong> — registry or credentials; check <code>imagePullSecrets</code>. <strong>CreateContainerConfigError</strong> — a referenced ConfigMap/Secret key is missing. <strong>Pending</strong> — the scheduler could not place it; read the events.',
    tags: ['Troubleshooting', 'Pods']
  },
  {
    id: 'k8s-cka-fc-19', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'RBAC: which of the four objects decides the scope?',
    hint: 'Not the role.',
    back: 'The <strong>binding</strong> decides. Role+RoleBinding = one namespace. ClusterRole+ClusterRoleBinding = cluster-wide. <strong>ClusterRole+RoleBinding</strong> = the ClusterRole permissions, but only inside the binding namespace (the common way to reuse a shared role). Role+ClusterRoleBinding is invalid.',
    tags: ['RBAC', 'Authorization']
  },
  {
    id: 'k8s-cka-fc-20', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'The three QoS classes and their eviction order.',
    hint: 'Requests vs limits.',
    back: '<strong>Guaranteed</strong> — requests == limits for every resource in every container; evicted last. <strong>Burstable</strong> — requests set but below limits. <strong>BestEffort</strong> — no requests or limits; evicted first under node pressure. Within Burstable, pods furthest above their requests go first.',
    tags: ['QoS', 'Eviction']
  },
  {
    id: 'k8s-cka-fc-21', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'The cluster DNS name pattern for a Service and for a StatefulSet pod.',
    hint: 'Four labels, then five.',
    back: 'Service: <code>&lt;svc&gt;.&lt;ns&gt;.svc.cluster.local</code>. StatefulSet pod behind a headless Service: <code>&lt;pod&gt;.&lt;svc&gt;.&lt;ns&gt;.svc.cluster.local</code>, e.g. <code>db-0.db.data.svc.cluster.local</code>. Short names work because the pod resolv.conf search list starts with its own namespace.',
    tags: ['DNS', 'Services']
  },
  {
    id: 'k8s-cka-fc-22', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'The four PersistentVolume access modes.',
    hint: 'Node scope, except one.',
    back: '<strong>ReadWriteOnce (RWO)</strong> — read-write by one <em>node</em>. <strong>ReadOnlyMany (ROX)</strong> — read-only by many nodes. <strong>ReadWriteMany (RWX)</strong> — read-write by many nodes. <strong>ReadWriteOncePod (RWOP)</strong> — read-write by exactly one <em>pod</em>, the only true single-writer guarantee.',
    tags: ['Storage', 'Access Modes']
  },
  {
    id: 'k8s-cka-fc-23', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'The kubeadm upgrade order for the first control plane node.',
    hint: 'Binary, then control plane, then node.',
    back: '1. Upgrade the <code>kubeadm</code> package. 2. <code>kubeadm upgrade plan</code> then <code>kubeadm upgrade apply v1.X.Y</code>. 3. <code>kubectl drain</code> the node. 4. Upgrade <code>kubelet</code> and <code>kubectl</code>, then <code>systemctl restart kubelet</code>. 5. <code>kubectl uncordon</code>. Other nodes use <code>kubeadm upgrade node</code>.',
    tags: ['kubeadm', 'Upgrade']
  },
  {
    id: 'k8s-cka-fc-24', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A Service has no endpoints. What are the two usual causes?',
    hint: 'Match, then health.',
    back: '<strong>Selector mismatch</strong> — the Service <code>spec.selector</code> does not match the pod labels. <strong>Readiness</strong> — matching pods exist but fail their readiness probe, so they are excluded from EndpointSlices. Check with <code>kubectl get endpointslices -l kubernetes.io/service-name=SVC</code>.',
    tags: ['Services', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-25', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'externalTrafficPolicy: Cluster vs Local.',
    hint: 'One SNATs, one does not.',
    back: '<strong>Cluster</strong> (default) — traffic may be forwarded to a pod on another node, with SNAT, so the client IP is lost but load is even. <strong>Local</strong> — only pods on the receiving node are used, no SNAT, so the client IP is preserved; nodes with no backend fail the LB health check.',
    tags: ['Services', 'Source IP']
  },
  {
    id: 'k8s-cka-fc-26', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Deployment vs StatefulSet vs DaemonSet vs Job/CronJob.',
    hint: 'Identity, placement, completion.',
    back: '<strong>Deployment</strong> — interchangeable stateless replicas. <strong>StatefulSet</strong> — stable network identity and per-ordinal volumes, ordered by default. <strong>DaemonSet</strong> — one pod per (eligible) node. <strong>Job</strong> — run to completion; <strong>CronJob</strong> — Jobs on a schedule.',
    tags: ['Workloads', 'Controllers']
  },
  {
    id: 'k8s-cka-fc-27', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Which ConfigMap consumption methods pick up updates?',
    hint: 'One of the three mount styles does not.',
    back: '<strong>Volume mount</strong> — refreshed by the kubelet within the sync period. <strong>subPath mount</strong> — never refreshed. <strong>env / envFrom</strong> — resolved once at container start, never refreshed. Marking a ConfigMap <code>immutable: true</code> stops the watch entirely and cuts API server load.',
    tags: ['ConfigMap', 'Volumes']
  },
  {
    id: 'k8s-cka-fc-28', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd2',
    front: 'The API server is down. How do you debug it?',
    hint: 'kubectl is not available to you.',
    back: 'Work on the node: <code>crictl ps -a</code> to find the exited kube-apiserver container, <code>crictl logs &lt;id&gt;</code> for its error, and <code>journalctl -u kubelet</code> for static pod parse failures. Then fix <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code> — the kubelet restarts it automatically.',
    tags: ['Troubleshooting', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-29', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'PodDisruptionBudget: what does it actually protect against?',
    hint: 'Voluntary only.',
    back: 'Only <strong>voluntary</strong> disruptions that go through the eviction API — <code>kubectl drain</code>, cluster autoscaler scale-down, some operators. It does <em>not</em> protect against node crashes, kernel panics, or force deletion. Express it as <code>minAvailable</code> or <code>maxUnavailable</code>.',
    tags: ['PodDisruptionBudget', 'Availability']
  },
  {
    id: 'k8s-cka-fc-30', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Which common resources are cluster-scoped, not namespaced?',
    hint: 'kubectl api-resources --namespaced=false',
    back: 'Nodes, Namespaces, PersistentVolumes, StorageClasses, ClusterRoles and ClusterRoleBindings, CustomResourceDefinitions, IngressClasses, PriorityClasses, VolumeSnapshotClasses. Note the pairing: PV is cluster-scoped, its <strong>PVC is namespaced</strong>.',
    tags: ['API', 'Namespaces']
  },
  {
    id: 'k8s-cka-fc-31', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'What breaks if kube-proxy dies on a node — and what does not?',
    hint: 'Two different data planes.',
    back: '<strong>Breaks:</strong> new Service (ClusterIP/NodePort) routing on that node — rules go stale. <strong>Survives:</strong> pod-to-pod traffic by pod IP, which the CNI plugin provides. The node also stays Ready, because readiness is reported by the kubelet.',
    tags: ['kube-proxy', 'Networking']
  },
  {
    id: 'k8s-cka-fc-32', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'volumeBindingMode: Immediate vs WaitForFirstConsumer.',
    hint: 'Matters most in multi-zone clusters.',
    back: '<strong>Immediate</strong> — the volume is provisioned as soon as the PVC is created, before any pod is scheduled; in a multi-zone cluster it can land in the wrong zone. <strong>WaitForFirstConsumer</strong> — binding waits for a pod, so the volume is created in the zone of the chosen node.',
    tags: ['StorageClass', 'Topology']
  },
  {
    id: 'k8s-cka-fc-33', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'Your fastest four triage commands for a broken workload.',
    hint: 'Events, logs, state, usage.',
    back: '<code>kubectl describe pod POD</code> (read Events at the bottom), <code>kubectl logs POD -c CONTAINER --previous</code>, <code>kubectl get events -A --sort-by=.lastTimestamp</code>, <code>kubectl top pods/nodes</code>. Then <code>kubectl debug</code> for an ephemeral container if the image has no shell.',
    tags: ['Troubleshooting', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-34', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'topologySpreadConstraints: the four fields that matter.',
    hint: 'Skew, key, action, selector.',
    back: '<code>maxSkew</code> — allowed imbalance between topology domains. <code>topologyKey</code> — the node label defining a domain (<code>kubernetes.io/hostname</code>, <code>topology.kubernetes.io/zone</code>). <code>whenUnsatisfiable</code> — <em>DoNotSchedule</em> (hard) or <em>ScheduleAnyway</em> (soft). <code>labelSelector</code> — which pods count.',
    tags: ['Topology Spread', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-35', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'CNI vs kube-proxy vs CoreDNS — who does what?',
    hint: 'Addresses, virtual IPs, names.',
    back: '<strong>CNI plugin</strong> — gives each pod an IP and makes pod-to-pod routing work across nodes. <strong>kube-proxy</strong> — programs iptables/IPVS rules so Service virtual IPs reach endpoints. <strong>CoreDNS</strong> — resolves Service and pod names to those IPs. A failure in each one looks completely different.',
    tags: ['Networking', 'Architecture']
  },
  {
    id: 'k8s-cka-fc-36', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'What must be backed up to rebuild a kubeadm control plane?',
    hint: 'Two things, not one.',
    back: 'An <strong>etcd snapshot</strong> <em>and</em> <code>/etc/kubernetes/pki</code> (the cluster CA and keys). A restored etcd is unusable with a different CA, because tokens and certificates in it were issued by the original one. Keep the static pod manifests too.',
    tags: ['Backup', 'Disaster Recovery']
  },
  {
    id: 'k8s-cka-fc-37', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Exit code 137 with Reason: OOMKilled — what happened?',
    hint: '128 + 9.',
    back: 'The container hit its <strong>memory limit</strong> and the kernel OOM killer sent SIGKILL. Fix by raising <code>resources.limits.memory</code> or reducing usage. Contrast: a failed liveness probe shows a <em>Killing</em> event with Reason Error, and node pressure shows the pod as <em>Evicted</em>.',
    tags: ['OOMKilled', 'Resources']
  }
];

export default K8S_CKA_FLASHCARDS_2;
