export const K8S_CKA_FLASHCARDS_10 = [
  {
    id: 'k8s-cka-fc-213', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Which control plane components are active/passive, and which are active/active?',
    hint: 'Leases.',
    back: '<strong>Active/passive</strong> via a Lease in kube-system: kube-scheduler, kube-controller-manager, cloud-controller-manager — only the leader acts. <strong>Active/active</strong>: kube-apiserver (all serve, behind a load balancer). etcd is a Raft quorum with one leader accepting writes.',
    tags: ['High Availability', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-214', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Scaling a Deployment vs editing its pod template.',
    hint: 'Only one makes a revision.',
    back: 'Changing <code>spec.template</code> creates a <strong>new ReplicaSet</strong> (a new revision, identified by the template hash). Changing <code>replicas</code> just scales the existing one — no revision, nothing to roll back to. That is why <code>rollout restart</code> works by stamping a template annotation.',
    tags: ['Deployment', 'ReplicaSet']
  },
  {
    id: 'k8s-cka-fc-215', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'A PV is Released and will not rebind. Why?',
    hint: 'It remembers its old claim.',
    back: 'With <code>Retain</code>, the PV keeps a <strong>stale <code>claimRef</code></strong> pointing at the deleted PVC — deliberately, so nobody accidentally inherits another team data. Clear <code>spec.claimRef</code> to make it <em>Available</em> again, then create a matching PVC.',
    tags: ['PersistentVolume', 'Recovery']
  },
  {
    id: 'k8s-cka-fc-216', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd2',
    front: 'Symptom → which component log?',
    hint: 'Match the loop that owns it.',
    back: 'Pod <strong>Pending</strong> → kube-scheduler. Node <strong>NotReady</strong> → kubelet. Deployment with <strong>no ReplicaSet</strong> → kube-controller-manager. <strong>Every</strong> kubectl failing → kube-apiserver or etcd. Pod running but crashing → the application, via <code>logs --previous</code>.',
    tags: ['Troubleshooting', 'Architecture']
  },
  {
    id: 'k8s-cka-fc-217', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'What is the downward API for?',
    hint: 'Self-knowledge without an API call.',
    back: 'Projecting pod and container fields into the container as env vars or files: <code>metadata.name</code>, <code>metadata.namespace</code>, <code>status.podIP</code>, <code>spec.nodeName</code>, labels, annotations, and resource requests/limits. Used for logging identity, metrics labels, and peer discovery.',
    tags: ['Downward API', 'Pods']
  },
  {
    id: 'k8s-cka-fc-218', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'What is a kubeconfig context?',
    hint: 'Three things, client-side only.',
    back: 'A named pairing of <strong>cluster + user + default namespace</strong>. Purely client-side — it grants nothing. Permissions come from RBAC on the server. <code>kubectl config get-contexts</code>, <code>use-context</code>, <code>set-context --current --namespace=</code>.',
    tags: ['kubeconfig', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-219', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'Ingress returns 503 but the pods are healthy.',
    hint: 'The controller has no backend.',
    back: 'The Ingress backend does not resolve to endpoints: wrong <strong>Service name</strong>, wrong <strong>port name or number</strong>, or the Service is in a <strong>different namespace</strong> (Ingress backends are namespace-local). Check <code>kubectl get endpointslices</code> for the referenced Service.',
    tags: ['Ingress', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-220', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'failurePolicy on an admission webhook.',
    hint: 'Security vs availability.',
    back: '<code>Fail</code> — requests are rejected when the webhook is unreachable: safe for policy, but the webhook becomes a cluster-wide dependency. <code>Ignore</code> — requests proceed unchecked. Limit the blast radius with <code>namespaceSelector</code>, <code>objectSelector</code>, and a short <code>timeoutSeconds</code>.',
    tags: ['Admission Control', 'Reliability']
  },
  {
    id: 'k8s-cka-fc-221', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Projected volumes.',
    hint: 'Several sources, one directory.',
    back: 'One volume combining <code>configMap</code>, <code>secret</code>, <code>downwardAPI</code>, and <code>serviceAccountToken</code> sources into a single directory — and the mechanism behind <strong>audience-scoped, auto-rotating</strong> ServiceAccount tokens.',
    tags: ['Projected Volumes', 'Configuration']
  },
  {
    id: 'k8s-cka-fc-222', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'How much of a node is already committed?',
    hint: 'Requests, not usage.',
    back: '<code>kubectl describe node NODE</code> → the <strong>Allocated resources</strong> section, showing request and limit totals against allocatable capacity. That is what the scheduler cares about. <code>kubectl top node</code> shows <em>actual</em> usage, which is a different question.',
    tags: ['Capacity', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-223', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'Should you set CPU limits?',
    hint: 'Compressible vs incompressible.',
    back: '<strong>Memory limits: yes</strong> — memory is incompressible, so the alternative to a limit is an unbounded pod taking down a node. <strong>CPU limits: debated</strong> — CPU is compressible, so a limit throttles the process even on an idle node, adding latency. Many teams set CPU requests without limits.',
    tags: ['Resources', 'Performance']
  },
  {
    id: 'k8s-cka-fc-224', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Why do external DNS lookups generate so many queries?',
    hint: 'ndots.',
    back: 'The default <code>ndots:5</code> means a name with fewer than five dots is tried against <strong>every cluster search domain first</strong>. Fix with a pod <code>dnsConfig</code> lowering <code>ndots</code>, or use a fully qualified name with a trailing dot.',
    tags: ['DNS', 'Performance']
  },
  {
    id: 'k8s-cka-fc-225', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'A broken APIService is hanging namespace deletion. Why?',
    hint: 'Finalization enumerates every group.',
    back: 'The namespace controller must confirm <strong>no resources of any group remain</strong>. If an aggregated <code>APIService</code> (say <code>v1beta1.metrics.k8s.io</code>) is unavailable, that group cannot be enumerated, so finalization blocks — and <code>kubectl api-resources</code> errors too.',
    tags: ['API Aggregation', 'Namespaces']
  },
  {
    id: 'k8s-cka-fc-226', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Guarantee a mount cannot be written, even by root.',
    hint: 'Mount option, not file mode.',
    back: '<code>readOnly: true</code> on the <strong>volumeMount</strong> — enforced by the kernel. File mode bits (<code>defaultMode</code>) can be bypassed by root inside the container. ConfigMap and Secret volumes are already read-only for exactly this reason.',
    tags: ['Volumes', 'Security']
  },
  {
    id: 'k8s-cka-fc-227', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Node conditions and what each one triggers.',
    hint: 'Four of them.',
    back: '<strong>Ready</strong> — kubelet healthy and reporting (Unknown = not reporting). <strong>MemoryPressure</strong>, <strong>DiskPressure</strong>, <strong>PIDPressure</strong> — each adds a <code>NoSchedule</code> taint and drives kubelet reclaim then eviction. They are independent: a node can be Ready <em>and</em> under disk pressure.',
    tags: ['Nodes', 'Conditions']
  },
  {
    id: 'k8s-cka-fc-228', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'You renewed certs and now the scheduler cannot authenticate.',
    hint: 'Two steps after renewal.',
    back: '<code>kubeadm certs renew all</code> reissues the files, but components keep the credentials they loaded — and <code>scheduler.conf</code>, <code>controller-manager.conf</code>, and <code>admin.conf</code> <strong>embed client certificates</strong>. Regenerate those kubeconfigs and <strong>restart the static pods</strong>.',
    tags: ['Certificates', 'Control Plane']
  },
  {
    id: 'k8s-cka-fc-229', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Pause a CronJob without deleting it.',
    hint: 'One boolean.',
    back: '<code>spec.suspend: true</code> — the controller stops creating Jobs at scheduled times; an already-running Job continues. Set it back to false to resume. Not the same as <code>concurrencyPolicy: Forbid</code>, which only prevents overlap.',
    tags: ['CronJob', 'Operations']
  },
  {
    id: 'k8s-cka-fc-230', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Why not just create bare pods?',
    hint: 'Nothing brings them back.',
    back: 'A bare pod has <strong>no controller</strong>: if its node dies, it is simply gone. A Deployment adds the reconciliation loop (maintain replica count, replace failures) plus rolling updates and rollback history. Bare pods also block cluster-autoscaler scale-down and complicate drains.',
    tags: ['Deployment', 'Fundamentals']
  },
  {
    id: 'k8s-cka-fc-231', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Pods in A reach B, but B cannot reach A.',
    hint: 'Directional and additive.',
    back: 'Normal NetworkPolicy behaviour: ingress and egress are evaluated <strong>separately per pod</strong>, and reply traffic on an established connection is allowed without its own rule. So a <em>new</em> connection the other way needs its own ingress (and possibly egress) allowance.',
    tags: ['NetworkPolicy', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-232', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'Recovering a namespace deleted by mistake, when PVs used Retain.',
    hint: 'The data is still there.',
    back: 'The PVs are <strong>Released</strong> with a stale <code>claimRef</code>. Recreate the namespace, clear <code>spec.claimRef</code> on each PV so it becomes <em>Available</em>, then create matching PVCs to rebind. Do not delete the PVs — with Retain, that is what still holds the data.',
    tags: ['Storage', 'Disaster Recovery']
  },
  {
    id: 'k8s-cka-fc-233', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'A workload never calls the API. Harden it.',
    hint: 'Stop projecting the token.',
    back: '<code>automountServiceAccountToken: false</code> on the pod spec or the ServiceAccount — the token is then never mounted, so it cannot be stolen from the container. Do <em>not</em> delete the default ServiceAccount; pod admission depends on it existing.',
    tags: ['ServiceAccount', 'Hardening']
  },
  {
    id: 'k8s-cka-fc-234', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'A Secret in another namespace will not mount.',
    hint: 'It never will.',
    back: 'Secret and ConfigMap references resolve <strong>within the pod own namespace</strong> — cross-namespace mounting is impossible by design. Create or replicate the object in the consuming namespace (a controller or external secrets operator usually does this).',
    tags: ['Secrets', 'Namespaces']
  },
  {
    id: 'k8s-cka-fc-235', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'A Job with a sidecar never finishes.',
    hint: 'What counts as done?',
    back: 'A pod is Succeeded only when <strong>all regular containers</strong> terminate — so an ordinary long-running sidecar hangs the Job forever. Declare it as a <strong>native sidecar</strong> (an init container with <code>restartPolicy: Always</code>), which is excluded from completion.',
    tags: ['Jobs', 'Sidecar']
  },
  {
    id: 'k8s-cka-fc-236', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'What does an etcd restore actually roll back?',
    hint: 'Metadata only.',
    back: 'Only the <strong>API objects</strong>. Real-world effects created after the snapshot — running containers, provisioned volumes, cloud load balancers — still exist and become <strong>orphaned</strong>, needing manual reconciliation. Kubelets never push their state back into etcd.',
    tags: ['etcd', 'Disaster Recovery']
  },
  {
    id: 'k8s-cka-fc-237', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Keep a Service reachable only from inside the cluster.',
    hint: 'The default already does most of it.',
    back: '<strong>ClusterIP</strong> (the default) — no external surface at all — plus a <strong>NetworkPolicy</strong> narrowing which pods may connect, and optionally <code>internalTrafficPolicy: Local</code>. NodePort and LoadBalancer create exposure you then have to defend.',
    tags: ['Services', 'Security']
  }
];

export default K8S_CKA_FLASHCARDS_10;
