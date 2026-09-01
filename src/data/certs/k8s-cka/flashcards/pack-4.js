export const K8S_CKA_FLASHCARDS_4 = [
  {
    id: 'k8s-cka-fc-63', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Restore etcd from a snapshot — the whole procedure.',
    hint: 'Restore is only step one.',
    back: '1. <code>etcdctl snapshot restore /opt/snap.db --data-dir=/var/lib/etcd-restore</code>. 2. Edit <code>/etc/kubernetes/manifests/etcd.yaml</code> so the data hostPath points at the new directory. 3. The kubelet restarts etcd. 4. Restart the API server if needed. A running etcd never re-reads its data dir.',
    tags: ['etcd', 'Restore']
  },
  {
    id: 'k8s-cka-fc-64', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'The control plane taint, and how to remove it.',
    hint: 'Trailing dash.',
    back: '<code>node-role.kubernetes.io/control-plane:NoSchedule</code>. Remove with <code>kubectl taint nodes NODE node-role.kubernetes.io/control-plane-</code> (note the trailing hyphen). Needed to run ordinary workloads on a single-node cluster.',
    tags: ['Taints', 'kubeadm']
  },
  {
    id: 'k8s-cka-fc-65', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd5',
    front: 'You applied default-deny egress and everything broke. What did you forget?',
    hint: 'Port 53.',
    back: '<strong>DNS.</strong> Every pod sends queries to CoreDNS, so a default-deny egress policy must allow UDP <em>and</em> TCP port 53 to the kube-system DNS pods. Replies are return traffic on an allowed connection — you do not need a matching ingress rule.',
    tags: ['NetworkPolicy', 'DNS']
  },
  {
    id: 'k8s-cka-fc-66', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'Are Kubernetes Secrets encrypted?',
    hint: 'base64 is not encryption.',
    back: 'No — Secret data is <strong>base64-encoded</strong> in the API and stored in etcd like any object. Real protection comes from (a) RBAC limiting who can read them, (b) <strong>encryption at rest</strong> via an EncryptionConfiguration on the API server, and (c) etcd disk encryption.',
    tags: ['Secrets', 'Security']
  },
  {
    id: 'k8s-cka-fc-67', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Node condition DiskPressure is True. What is the kubelet doing?',
    hint: 'Reclaim, then evict.',
    back: 'It first reclaims — garbage-collects unused images and dead containers — then <strong>evicts pods</strong>, worst QoS class and biggest ephemeral-storage offenders first, and taints the node <code>node.kubernetes.io/disk-pressure:NoSchedule</code>. Declare <code>ephemeral-storage</code> requests/limits so the right pod gets evicted.',
    tags: ['Eviction', 'Storage']
  },
  {
    id: 'k8s-cka-fc-68', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Cron field order, and 02:30 daily.',
    hint: 'Five fields.',
    back: '<code>minute hour day-of-month month day-of-week</code>. 02:30 every day is <code>30 2 * * *</code>. CronJob extras: <code>concurrencyPolicy</code> (Allow / Forbid / Replace), <code>startingDeadlineSeconds</code>, <code>suspend</code>, and the history limits.',
    tags: ['CronJob', 'Batch']
  },
  {
    id: 'k8s-cka-fc-69', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd3',
    front: 'Priority and preemption: who gets killed and by whom?',
    hint: 'The scheduler, not the kubelet.',
    back: 'A pending pod with a higher <code>priorityClassName</code> value makes <strong>kube-scheduler</strong> look for a node where evicting lower-priority pods would let it fit, and delete those victims (best-effort respect for PDBs). Distinct from kubelet <em>node-pressure eviction</em>, which is driven by resource conditions and QoS.',
    tags: ['Priority', 'Preemption']
  },
  {
    id: 'k8s-cka-fc-70', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Pod Security Admission: how is it turned on?',
    hint: 'Namespace labels.',
    back: 'Label the namespace: <code>pod-security.kubernetes.io/&lt;mode&gt;: &lt;level&gt;</code> where mode is <em>enforce | audit | warn</em> and level is <em>privileged | baseline | restricted</em>. Baseline blocks privileged containers, host namespaces, and hostPath; restricted also demands runAsNonRoot and dropped capabilities. PodSecurityPolicy was removed in v1.25.',
    tags: ['Pod Security', 'Admission']
  },
  {
    id: 'k8s-cka-fc-71', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'Control plane certificates expired. Recovery steps.',
    hint: 'Renew, restart, refresh kubeconfig.',
    back: '<code>kubeadm certs check-expiration</code> to see what died, <code>kubeadm certs renew all</code>, then restart the control plane static pods (move the manifests out and back, or restart the kubelet). Finally regenerate <code>/etc/kubernetes/admin.conf</code> — it embeds an expired client cert.',
    tags: ['Certificates', 'kubeadm']
  },
  {
    id: 'k8s-cka-fc-72', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd5',
    front: 'Temporary access to a pod port from your laptop.',
    hint: 'No cluster object created.',
    back: '<code>kubectl port-forward pod/api 8080:8080</code> (also works on <code>svc/</code> and <code>deployment/</code>). Tunnels through the API server for as long as the command runs. <code>kubectl proxy</code> is different — it exposes the <em>Kubernetes API</em> locally, not your app.',
    tags: ['kubectl', 'Debugging']
  },
  {
    id: 'k8s-cka-fc-73', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd4',
    front: 'Stacked vs external etcd.',
    hint: 'Coupling vs machines.',
    back: '<strong>Stacked</strong> (kubeadm default) — an etcd member on each control plane node; fewer machines, but one node failure removes an API server <em>and</em> an etcd member. <strong>External</strong> — etcd on dedicated hosts; more machines, independent failure domains. Both want an odd member count for quorum.',
    tags: ['High Availability', 'etcd']
  },
  {
    id: 'k8s-cka-fc-74', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'StatefulSet: podManagementPolicy and updateStrategy options.',
    hint: 'Creation order vs update order.',
    back: '<code>podManagementPolicy</code>: <em>OrderedReady</em> (default, one at a time) or <em>Parallel</em>. <code>updateStrategy</code>: <em>RollingUpdate</em> with <code>partition: N</code> (only ordinals ≥ N are updated — the canary knob) or <em>OnDelete</em> (you delete pods manually).',
    tags: ['StatefulSet', 'Updates']
  },
  {
    id: 'k8s-cka-fc-75', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd2',
    front: 'Logs from a specific container, and from the crashed instance.',
    hint: 'Two flags.',
    back: '<code>kubectl logs POD -c CONTAINER</code> for one container in a multi-container pod; <code>--previous</code> for the last <em>terminated</em> instance (essential for CrashLoopBackOff). Also <code>-f</code> to follow, <code>--tail=N</code>, <code>--since=10m</code>, <code>--all-containers</code>.',
    tags: ['Logs', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-76', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd1',
    front: 'What does fsGroup do?',
    hint: 'Non-root process, root-owned volume.',
    back: 'Pod-level <code>securityContext.fsGroup: N</code> makes the kubelet set group ownership (and setgid) on supported volumes so a non-root container can write. <code>fsGroupChangePolicy: OnRootMismatch</code> avoids re-chowning huge volumes on every start.',
    tags: ['Security Context', 'Storage']
  },
  {
    id: 'k8s-cka-fc-77', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Ingress pathType values.',
    hint: 'Only one is portable and greedy.',
    back: '<strong>Prefix</strong> — matches whole path <em>segments</em> (/api matches /api/v1, not /apifoo). <strong>Exact</strong> — literal match only. <strong>ImplementationSpecific</strong> — semantics up to the controller, so not portable. There is no Regex pathType.',
    tags: ['Ingress', 'Routing']
  },
  {
    id: 'k8s-cka-fc-78', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd2',
    front: 'etcd is slow. What is the number one cause?',
    hint: 'fsync.',
    back: '<strong>Disk write latency.</strong> Every API write is an etcd write with an fsync, so slow disks show up as slow kubectl. Watch <code>etcd_disk_wal_fsync_duration_seconds</code> and <code>backend_commit</code>. etcd wants low-latency local SSD, not network storage. Also watch out for a bloated DB needing compaction + defrag.',
    tags: ['etcd', 'Performance']
  },
  {
    id: 'k8s-cka-fc-79', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'CRD vs aggregated API server.',
    hint: 'One needs no extra process.',
    back: '<strong>CRD</strong> — declare a new resource type; the existing API server stores and validates it against an OpenAPI v3 structural schema. Cheap, and the right default. <strong>Aggregated API server</strong> — you run a real server registered via an <code>APIService</code>; needed for custom storage, subresource logic, or non-etcd backends.',
    tags: ['CRD', 'Extensibility']
  },
  {
    id: 'k8s-cka-fc-80', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd3',
    front: 'Requests vs limits — one sentence each.',
    hint: 'Scheduler vs kernel.',
    back: '<strong>Request</strong> — what the <em>scheduler</em> reserves from node allocatable when placing the pod. <strong>Limit</strong> — the ceiling the <em>kernel</em> enforces at runtime: CPU is throttled, memory over the limit is OOM killed. Requests affect placement; limits affect behaviour.',
    tags: ['Resources', 'Scheduling']
  },
  {
    id: 'k8s-cka-fc-81', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd4',
    front: 'Switch cluster and default namespace with kubectl config.',
    hint: 'Two subcommands.',
    back: '<code>kubectl config get-contexts</code>, <code>kubectl config use-context NAME</code>, then <code>kubectl config set-context --current --namespace=NS</code>. Multiple files can be merged with <code>KUBECONFIG=a:b</code>. <code>kubectl config view --minify</code> shows just the active context.',
    tags: ['kubeconfig', 'kubectl']
  },
  {
    id: 'k8s-cka-fc-82', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'The three address ranges in a cluster, and the rule about them.',
    hint: 'They must never collide.',
    back: '<strong>Node network</strong> (physical), <strong>pod CIDR</strong> (CNI, e.g. 10.244.0.0/16, split per node by <code>--node-cidr-mask-size</code>), <strong>Service CIDR</strong> (kube-proxy virtual IPs, e.g. 10.96.0.0/12). All three must be disjoint or traffic becomes unroutable.',
    tags: ['Networking', 'CIDR']
  },
  {
    id: 'k8s-cka-fc-83', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd2',
    front: 'A rollout is stuck with old and new pods both running. Why?',
    hint: 'Readiness gates progress.',
    back: 'New pods never become <strong>Ready</strong>, so the controller cannot remove more old pods without breaching <code>maxUnavailable</code>. Check the new pods readiness probe and logs; <code>kubectl rollout status</code> will eventually fail at <code>progressDeadlineSeconds</code> (default 600s).',
    tags: ['Deployment', 'Probes']
  },
  {
    id: 'k8s-cka-fc-84', difficulty: 'hard', certId: 'k8s-cka', domainId: 'd1',
    front: 'CSI: what runs where?',
    hint: 'Deployment plus DaemonSet.',
    back: '<strong>Controller plugin</strong> (Deployment) — CreateVolume/DeleteVolume, ControllerPublish (attach), snapshots; runs anywhere. <strong>Node plugin</strong> (DaemonSet) — NodeStageVolume and NodePublishVolume: format, mount, bind-mount into the pod; must run on every node that mounts volumes.',
    tags: ['CSI', 'Storage']
  },
  {
    id: 'k8s-cka-fc-85', difficulty: 'easy', certId: 'k8s-cka', domainId: 'd4',
    front: 'Scaffold a manifest without touching the cluster.',
    hint: 'Two flags you will use constantly.',
    back: '<code>kubectl create deployment web --image=nginx --dry-run=client -o yaml &gt; web.yaml</code>. Works for most <code>create</code> and <code>run</code> subcommands. <code>--dry-run=server</code> instead runs full admission without persisting — useful to test webhooks and defaults.',
    tags: ['kubectl', 'Manifests']
  },
  {
    id: 'k8s-cka-fc-86', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd3',
    front: 'DaemonSet on tainted (e.g. control plane) nodes.',
    hint: 'It is not automatic for custom taints.',
    back: 'Add a matching <strong>toleration</strong> to the DaemonSet pod template. The DaemonSet controller adds tolerations for node conditions (not-ready, unreachable, disk-pressure, unschedulable) automatically, but a control plane or custom taint needs an explicit one.',
    tags: ['DaemonSet', 'Tolerations']
  },
  {
    id: 'k8s-cka-fc-87', difficulty: 'medium', certId: 'k8s-cka', domainId: 'd5',
    front: 'Where does the NodePort range come from and what is it?',
    hint: 'One API server flag.',
    back: 'Default <strong>30000–32767</strong>, set by <code>--service-node-port-range</code> on kube-apiserver. A NodePort Service also gets a ClusterIP; a LoadBalancer Service is a NodePort Service plus a provisioned external LB.',
    tags: ['Services', 'NodePort']
  }
];

export default K8S_CKA_FLASHCARDS_4;
