export const K8S_CKA_FLASHCARDS_5 = [
  {
    id: 'k8s-cka-fc-88', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'HPA prerequisites for CPU-based scaling.',
    hint: 'Two, and one is easy to forget.',
    back: '<strong>metrics-server</strong> serving the Metrics API, and <strong>CPU requests set on the pods</strong> — utilisation is a percentage <em>of the request</em>. Missing either gives <code>&lt;unknown&gt;</code> targets. HPA v2 also supports memory, custom, and external metrics.',
    tags: ['HPA', 'Autoscaling']
  },
  {
    id: 'k8s-cka-fc-89', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'etcd quorum arithmetic.',
    hint: 'Majority of members.',
    back: 'Quorum = <code>floor(n/2) + 1</code>. 3 members tolerate 1 failure, 5 tolerate 2. Even counts add no fault tolerance, so always run odd. Below quorum etcd goes read-only, and recovery means a snapshot restore into a new single-member cluster, then re-adding members.',
    tags: ['etcd', 'Quorum']
  },
  {
    id: 'k8s-cka-fc-90', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Do NetworkPolicies conflict? What happens with two policies on one pod?',
    hint: 'Allow-lists only.',
    back: 'They are purely <strong>additive allow-lists</strong> — the union of every policy selecting the pod is permitted. There is no deny rule, no ordering, no precedence. The only "deny" is the implicit one: once <em>any</em> policy selects a pod for a direction, everything not allowed is dropped.',
    tags: ['NetworkPolicy', 'Security']
  },
  {
    id: 'k8s-cka-fc-91', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'What happens to StatefulSet PVCs on scale-down and on delete?',
    hint: 'One policy, two knobs.',
    back: 'By default they are <strong>retained</strong> in both cases, so <code>db-2</code> gets its old volume back when you scale up again. Tune with <code>persistentVolumeClaimRetentionPolicy: {whenScaled, whenDeleted}</code>, each <em>Retain</em> or <em>Delete</em>.',
    tags: ['StatefulSet', 'PVC']
  },
  {
    id: 'k8s-cka-fc-92', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Discover every resource type the cluster serves.',
    hint: 'Including CRDs.',
    back: '<code>kubectl api-resources</code> — name, short name, API version, kind, and namespaced true/false. Add <code>--namespaced=false</code> for cluster-scoped ones. <code>kubectl api-versions</code> lists groups/versions; <code>kubectl explain TYPE.field --recursive</code> documents the schema.',
    tags: ['kubectl', 'API']
  },
  {
    id: 'k8s-cka-fc-93', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Pod IP works, Service ClusterIP does not, and endpoints exist. What is wrong?',
    hint: 'Ports.',
    back: 'A <strong>targetPort mismatch</strong> — the Service <code>port</code> is what clients dial, <code>targetPort</code> must be the container port. Endpoints existing proves the selector is right, so the failure is in the port mapping rather than pod selection.',
    tags: ['Services', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-94', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Turn on API server audit logging.',
    hint: 'Policy file plus two flags plus volumes.',
    back: 'Write an audit <strong>Policy</strong> (levels: None, Metadata, Request, RequestResponse) and pass <code>--audit-policy-file</code> and <code>--audit-log-path</code> to kube-apiserver, plus <code>--audit-log-maxage/maxbackup/maxsize</code>. Both host paths must be mounted into the static pod, or the API server will not start.',
    tags: ['Audit', 'Security']
  },
  {
    id: 'k8s-cka-fc-95', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'Native sidecar: why is it an init container?',
    hint: 'Ordering plus Job completion.',
    back: 'An init container with <code>restartPolicy: Always</code> starts <em>before</em> the app containers (guaranteed ordering), keeps running for the pod lifetime, and is <strong>excluded from Job completion</strong> — so a logging or proxy sidecar no longer hangs a Job forever. A plain extra container gives no ordering guarantee.',
    tags: ['Sidecar', 'Workloads']
  },
  {
    id: 'k8s-cka-fc-96', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A namespace has been Terminating for an hour.',
    hint: 'Finalizers.',
    back: 'Deletion blocks on <strong>finalizers</strong> — usually a custom resource whose controller is gone, or an unavailable aggregated <code>APIService</code>. Read <code>kubectl get ns NS -o yaml</code> status conditions; they name the resource group that cannot be enumerated. Fix the controller rather than force-removing finalizers.',
    tags: ['Namespaces', 'Finalizers']
  },
  {
    id: 'k8s-cka-fc-97', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd1',
    front: 'Make a StorageClass the cluster default.',
    hint: 'An annotation, not a field.',
    back: '<code>storageclass.kubernetes.io/is-default-class: "true"</code>. The DefaultStorageClass admission plugin stamps it onto PVCs that omit <code>storageClassName</code>. Only one class should carry it. A PVC naming a non-existent class just stays Pending forever.',
    tags: ['StorageClass', 'Defaults']
  },
  {
    id: 'k8s-cka-fc-98', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Node authorizer + NodeRestriction — what do they stop?',
    hint: 'A compromised kubelet.',
    back: 'The <strong>Node authorizer</strong> limits each kubelet to the objects tied to its own pods (their Secrets, ConfigMaps, PVCs). <strong>NodeRestriction</strong> admission additionally stops it editing other Node objects or setting privileged labels on itself. Together they contain a compromised node.',
    tags: ['Security', 'Authorization']
  },
  {
    id: 'k8s-cka-fc-99', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Why EndpointSlices instead of Endpoints?',
    hint: 'One object with 5,000 addresses.',
    back: '<strong>Scale.</strong> A single Endpoints object holding thousands of addresses was rewritten (and re-watched by every node) on any change. Slices shard membership into chunks (default max 100 endpoints each) and carry topology hints and per-address conditions.',
    tags: ['EndpointSlices', 'Scalability']
  },
  {
    id: 'k8s-cka-fc-100', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Labels vs annotations.',
    hint: 'Selectable vs not.',
    back: '<strong>Labels</strong> — short, syntax-restricted, <em>indexed</em>, used by selectors (Services, ReplicaSets, NetworkPolicies, node affinity). <strong>Annotations</strong> — arbitrary non-identifying metadata (URLs, checksums, tool config), never selectable, can be large.',
    tags: ['Labels', 'Annotations']
  },
  {
    id: 'k8s-cka-fc-101', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Where does persistent kubelet configuration live on a kubeadm node?',
    hint: 'Not a static pod.',
    back: '<code>/var/lib/kubelet/config.yaml</code> (a KubeletConfiguration object), with the systemd drop-in at <code>/etc/systemd/system/kubelet.service.d/10-kubeadm.conf</code> pointing at it. Edit, then <code>systemctl restart kubelet</code>. The kubelet is a systemd service, not a pod.',
    tags: ['kubelet', 'Configuration']
  },
  {
    id: 'k8s-cka-fc-102', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'Dual-stack: ipFamilyPolicy values.',
    hint: 'Three of them.',
    back: '<strong>SingleStack</strong> — one family (default). <strong>PreferDualStack</strong> — both if the cluster is dual-stack, otherwise one. <strong>RequireDualStack</strong> — both, or the Service fails. <code>ipFamilies</code> lists the families in order; the first is the primary.',
    tags: ['Dual-Stack', 'Services']
  },
  {
    id: 'k8s-cka-fc-103', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'Delete a controller but keep its pods running.',
    hint: 'Cascade modes.',
    back: '<code>kubectl delete deployment X --cascade=orphan</code>. The three modes: <em>background</em> (default — object deleted now, dependents cleaned up after), <em>foreground</em> (dependents first, object last), <em>orphan</em> (dependents survive, ownerReferences dropped).',
    tags: ['Garbage Collection', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-104', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'No kubectl on the node. How do you inspect containers?',
    hint: 'CRI, not Docker.',
    back: '<code>crictl ps -a</code>, <code>crictl logs ID</code>, <code>crictl inspect ID</code>, <code>crictl pods</code>, <code>crictl images</code>. Point it at the socket with <code>--runtime-endpoint unix:///run/containerd/containerd.sock</code> or <code>/etc/crictl.yaml</code>. The <code>docker</code> CLI does not see CRI containers.',
    tags: ['crictl', 'Container Runtime']
  },
  {
    id: 'k8s-cka-fc-105', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Mount only one key of a ConfigMap into a file.',
    hint: 'items list.',
    back: 'Use <code>items: [{key: app.properties, path: app.properties}]</code> in the configMap volume — only listed keys are projected. <code>defaultMode</code> sets permissions. Remember: <code>subPath</code> mounts of a single key do <strong>not</strong> get updates.',
    tags: ['ConfigMap', 'Volumes']
  },
  {
    id: 'k8s-cka-fc-106', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'API Priority and Fairness — what are FlowSchemas for?',
    hint: 'Why kubectl gets 429 during an incident.',
    back: 'APF classifies each request into a <strong>FlowSchema</strong>, which maps it to a <strong>PriorityLevelConfiguration</strong> with its own concurrency share and queues. A runaway controller saturates its own level and gets 429s instead of starving interactive traffic. Tunable per level.',
    tags: ['API Server', 'Reliability']
  },
  {
    id: 'k8s-cka-fc-107', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'restartPolicy values and where each belongs.',
    hint: 'Three, pod-level.',
    back: '<strong>Always</strong> — default; required for Deployments/StatefulSets/DaemonSets. <strong>OnFailure</strong> — restart only on non-zero exit; typical for Jobs. <strong>Never</strong> — leave the pod Failed or Succeeded. It is a <em>pod</em> field, and the kubelet restarts containers in place with exponential backoff.',
    tags: ['Pod Lifecycle', 'Workloads']
  },
  {
    id: 'k8s-cka-fc-108', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'What is NodeLocal DNSCache and when do you want it?',
    hint: 'Large clusters, conntrack.',
    back: 'A DaemonSet running a caching CoreDNS on every node, which pods query over a link-local address. It cuts DNS latency, reduces load on the central CoreDNS pods, and avoids conntrack table pressure from UDP DNS. Reach for it as node counts and query rates grow.',
    tags: ['CoreDNS', 'Scalability']
  },
  {
    id: 'k8s-cka-fc-109', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'kubectl says "connection to the server localhost:8080 was refused".',
    hint: 'Nothing is wrong with the cluster.',
    back: 'kubectl found <strong>no kubeconfig</strong> and fell back to its legacy default. Fix: <code>mkdir -p ~/.kube &amp;&amp; sudo cp /etc/kubernetes/admin.conf ~/.kube/config &amp;&amp; sudo chown $(id -u):$(id -g) ~/.kube/config</code>, or export <code>KUBECONFIG</code>.',
    tags: ['kubeconfig', 'Troubleshooting']
  },
  {
    id: 'k8s-cka-fc-110', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'CSI volume snapshots: which three objects?',
    hint: 'Class, request, content — plus the restore.',
    back: '<strong>VolumeSnapshotClass</strong> (which driver/parameters), <strong>VolumeSnapshot</strong> (namespaced request against a source PVC), <strong>VolumeSnapshotContent</strong> (the cluster-scoped actual snapshot). Restore by creating a PVC with <code>dataSource</code> pointing at the VolumeSnapshot.',
    tags: ['Volume Snapshots', 'CSI']
  },
  {
    id: 'k8s-cka-fc-111', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'ClusterRole aggregation — what problem does it solve?',
    hint: 'Extending view/edit/admin safely.',
    back: 'A ClusterRole with an <code>aggregationRule</code> absorbs the rules of every ClusterRole matching its label selector. So labelling your CRD reader role <code>rbac.authorization.k8s.io/aggregate-to-view: "true"</code> extends the built-in <em>view</em> role without editing it — edits there are lost on upgrade.',
    tags: ['RBAC', 'Aggregation']
  },
  {
    id: 'k8s-cka-fc-112', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'How do you point a cluster Service name at an external database?',
    hint: 'Two options, different mechanics.',
    back: '<strong>Selector-less Service + manual EndpointSlice/Endpoints</strong> — real ClusterIP, kube-proxy load-balances to the external IP, port mapping works. <strong>ExternalName Service</strong> — pure DNS CNAME, no ClusterIP, no proxying, no port translation.',
    tags: ['Services', 'External Services']
  }
];

export default K8S_CKA_FLASHCARDS_5;
