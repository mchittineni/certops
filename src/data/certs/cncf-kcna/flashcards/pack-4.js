export const CNCF_KCNA_FLASHCARDS_4 = [
  {
    id: "cncf-kcna-fc-76",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does kubeadm do for you, and what does it deliberately leave out?",
    hint: "It bootstraps; it does not provision.",
    back: "kubeadm <strong>bootstraps a minimum viable, conformant cluster</strong> on machines you already have: certificates, control plane static Pods, kubeconfigs, bootstrap tokens for joining, CoreDNS and kube-proxy, plus upgrades. It does <strong>not</strong> create machines, install the container runtime or kubelet packages, or install a <strong>CNI network plugin</strong>; those are your job.",
    tags: ["kubeadm"]
  },
  {
    id: "cncf-kcna-fc-77",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What files does kubeadm init leave on the first control plane node?",
    hint: "Three directories under /etc/kubernetes.",
    back: "<code>/etc/kubernetes/pki/</code>: the cluster CA, etcd CA and component certificates. <code>/etc/kubernetes/manifests/</code>: static Pod manifests for kube-apiserver, kube-controller-manager, kube-scheduler and etcd. <code>/etc/kubernetes/*.conf</code>: kubeconfigs such as <code>admin.conf</code> (full admin access) and ones for the controller manager, scheduler and kubelet.",
    tags: ["kubeadm","Certificates"]
  },
  {
    id: "cncf-kcna-fc-78",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is a kubeadm bootstrap token, and how long does it last?",
    hint: "Six characters, a dot, sixteen characters.",
    back: "A short-lived bearer token of the form <code>abcdef.0123456789abcdef</code>, stored as a Secret in kube-system, that lets a new node authenticate just enough to request its kubelet certificate. Tokens created by kubeadm expire after <strong>24 hours</strong> by default. <code>kubeadm token list</code> shows them; <code>kubeadm token create --print-join-command</code> makes a new one.",
    tags: ["kubeadm","Bootstrap tokens"]
  },
  {
    id: "cncf-kcna-fc-79",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does etcdctl snapshot save need to connect to a kubeadm etcd member?",
    hint: "An address and three TLS files.",
    back: "<code>--endpoints</code> (such as https://127.0.0.1:2379), and TLS credentials because etcd requires client certificates: <code>--cacert</code> (etcd CA), <code>--cert</code> and <code>--key</code> (a client cert, for example the healthcheck-client or apiserver-etcd-client pair under <code>/etc/kubernetes/pki/</code>). Store snapshots off the node, and test restores regularly.",
    tags: ["etcd","Backup"]
  },
  {
    id: "cncf-kcna-fc-80",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "etcdctl vs etcdutl: which one restores a snapshot?",
    hint: "One talks to a live server; one works on files.",
    back: "<strong>etcdctl</strong> is the network client: <code>snapshot save</code>, member and key operations against a running cluster. <strong>etcdutl</strong> works directly on data files offline: <code>snapshot restore</code> and <code>snapshot status</code>. The etcdctl versions of restore and status were deprecated in etcd 3.5 and removed in 3.6. A restore writes a new data directory that etcd is then started on.",
    tags: ["etcd","Restore"]
  },
  {
    id: "cncf-kcna-fc-81",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why does etcd need compaction and defragmentation, and what happens if it fills up?",
    hint: "History, free pages, and a space quota.",
    back: "etcd keeps old revisions of every key; <strong>compaction</strong> discards history older than a revision (kube-apiserver requests it every 5 minutes by default). Compaction frees space inside the database file, and <strong>defragmentation</strong> returns it to the filesystem. If the database exceeds its <strong>space quota</strong> (2 GiB default), etcd raises a NOSPACE alarm and rejects writes, so the cluster goes effectively read-only until space is recovered and the alarm cleared.",
    tags: ["etcd","Maintenance"]
  },
  {
    id: "cncf-kcna-fc-82",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the steps to upgrade a worker node in a kubeadm cluster?",
    hint: "Evict, upgrade tools, upgrade config, upgrade agent, readmit.",
    back: "1. <code>kubectl drain</code> the node. 2. Upgrade the <strong>kubeadm</strong> package. 3. <code>kubeadm upgrade node</code> to update the local kubelet configuration. 4. Upgrade the <strong>kubelet</strong> (and kubectl) packages and restart the kubelet. 5. <code>kubectl uncordon</code> the node. Do workers one or a few at a time, after the control plane is on the new version.",
    tags: ["Upgrades","kubeadm"]
  },
  {
    id: "cncf-kcna-fc-83",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do the three numbers in a Kubernetes version like 1.34.2 mean?",
    hint: "Semantic versioning.",
    back: "<strong>1</strong> is the major version, <strong>34</strong> the minor version (a feature release, about three per year), and <strong>2</strong> the patch release (bug and security fixes for that minor, shipped roughly monthly). Skew and upgrade rules are stated in minor versions; patch upgrades within a minor are low risk and can be applied directly.",
    tags: ["Releases","Versions"]
  },
  {
    id: "cncf-kcna-fc-84",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What kinds of limits can a ResourceQuota enforce in a namespace?",
    hint: "Compute, storage, and counts.",
    back: "<strong>Compute</strong>: totals of <code>requests.cpu</code>, <code>requests.memory</code>, <code>limits.cpu</code>, <code>limits.memory</code>, extended resources such as GPUs. <strong>Storage</strong>: total <code>requests.storage</code>, number of PVCs, per StorageClass. <strong>Object counts</strong>: pods, services, <code>services.loadbalancers</code>, <code>services.nodeports</code>, secrets, configmaps, or <code>count/&lt;resource&gt;.&lt;group&gt;</code> for most kinds.",
    tags: ["ResourceQuota"]
  },
  {
    id: "cncf-kcna-fc-85",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Besides an etcd snapshot, how can a cluster be backed up, and what is the trade-off?",
    hint: "Back up through the API instead.",
    back: "Tools such as <strong>Velero</strong> back up <strong>through the Kubernetes API</strong>: they export objects (optionally per namespace or label) and trigger volume snapshots or file copies for PersistentVolumes. That works on managed clusters where etcd is not accessible and allows selective restores or migration to another cluster. An etcd snapshot is a complete, consistent copy of all objects but holds no volume data and restores only to the same cluster.",
    tags: ["Backup","Velero"]
  },
  {
    id: "cncf-kcna-fc-86",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "In what order does kubectl look for its kubeconfig?",
    hint: "Flag, variable, default path.",
    back: "1. The <code>--kubeconfig</code> flag, if given (only that file is used). 2. The <strong>KUBECONFIG</strong> environment variable, a list of files that are merged. 3. The default file <code>~/.kube/config</code>. Within the chosen config, <code>--context</code>, <code>--cluster</code>, <code>--user</code> and <code>-n</code> flags override the current context for one command.",
    tags: ["kubeconfig","kubectl"]
  },
  {
    id: "cncf-kcna-fc-87",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Managed Kubernetes vs self-managed: what is the trade-off?",
    hint: "Who holds the pager for etcd?",
    back: "<strong>Managed</strong> (EKS, GKE, AKS and others): the provider runs and upgrades the control plane and etcd, often with an SLA and integrated identity, storage and load balancers; you give up some control over versions and flags. <strong>Self-managed</strong> (kubeadm, bare metal): full control and no provider dependency, but you own backups, certificates, upgrades and control plane availability.",
    tags: ["Managed Kubernetes"]
  },
  {
    id: "cncf-kcna-fc-88",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which tools run a Kubernetes cluster on a single laptop?",
    hint: "Containers, VMs, or a small binary.",
    back: "<strong>kind</strong> runs each node as a container and is popular in CI. <strong>minikube</strong> runs a cluster in a VM or container with handy add-ons. <strong>k3d</strong> wraps <strong>k3s</strong> in containers. All are for development and testing; they are quick to create and delete, and none replace a production cluster.",
    tags: ["Local development","kind"]
  },
  {
    id: "cncf-kcna-fc-89",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a highly available kubeadm control plane need?",
    hint: "A stable endpoint and enough members.",
    back: "At least <strong>three control plane nodes</strong> (so stacked etcd keeps quorum when one fails), a <strong>load balancer or virtual IP</strong> in front of the API servers, and <code>kubeadm init --control-plane-endpoint</code> set to that address so every kubelet and kubeconfig uses it. Additional control plane nodes join with <code>kubeadm join --control-plane</code>.",
    tags: ["High availability","kubeadm"]
  },
  {
    id: "cncf-kcna-fc-90",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does kubeadm reset do, and what does it leave behind?",
    hint: "It is not a complete clean-up.",
    back: "<code>kubeadm reset</code> reverses what kubeadm init or join did on <strong>that node</strong>: it removes the static Pod manifests, local etcd data on a control plane node, certificates and kubeconfigs under /etc/kubernetes. It does <strong>not</strong> clean up CNI configuration, iptables or IPVS rules, or the <code>~/.kube/config</code> file, and it does not remove the Node object from the rest of the cluster.",
    tags: ["kubeadm"]
  },
  {
    id: "cncf-kcna-fc-91",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When are namespaces enough, and when do you need separate clusters?",
    hint: "Soft vs hard boundaries.",
    back: "<strong>Namespaces</strong> give a naming scope plus a place to attach RBAC, ResourceQuotas and NetworkPolicies: fine for teams or environments that trust each other. <strong>Separate clusters</strong> are needed for hard isolation: untrusted tenants, different compliance zones, different Kubernetes versions, or keeping a production blast radius away from dev. Nodes and cluster-scoped resources are shared across namespaces.",
    tags: ["Namespaces","Multi-tenancy"]
  },
  {
    id: "cncf-kcna-fc-92",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How long must a deprecated Kubernetes API version keep being served?",
    hint: "Depends on its stability level.",
    back: "<strong>GA</strong> versions (v1) are not removed within the major version. <strong>Beta</strong> versions must be served for at least <strong>9 months or 3 releases</strong> (whichever is longer) after deprecation. <strong>Alpha</strong> versions can be removed in any release without notice. Deprecated APIs return a warning header, which kubectl prints.",
    tags: ["API deprecation"]
  },
  {
    id: "cncf-kcna-fc-93",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does client-side kubectl apply decide which fields to delete?",
    hint: "A three-way comparison and an annotation.",
    back: "kubectl stores the last applied manifest in the <code>kubectl.kubernetes.io/last-applied-configuration</code> annotation. On the next apply it does a <strong>three-way merge</strong> of the new file, that annotation and the live object: fields in the new file are set; fields that were in the last applied config but are gone from the file are <strong>removed</strong>; fields set by others (such as status or an autoscaler) are left alone.",
    tags: ["kubectl","Declarative management"]
  },
  {
    id: "cncf-kcna-fc-94",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are Kubernetes feature gates?",
    hint: "On/off switches for maturing features.",
    back: "Feature gates are named flags (<code>--feature-gates=Name=true</code>) on components such as kube-apiserver and the kubelet that switch features on or off. <strong>Alpha</strong> features are off by default, <strong>beta</strong> features are usually on, and once a feature is <strong>GA</strong> its gate is locked on and later removed. Managed services often do not let you change them.",
    tags: ["Feature gates","Releases"]
  },
  {
    id: "cncf-kcna-fc-95",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "kubectl api-resources vs kubectl api-versions: what does each list?",
    hint: "Kinds vs group versions.",
    back: "<strong>api-resources</strong> lists every resource type the server serves, with short names, API group, whether it is namespaced and its kind. <strong>api-versions</strong> lists only the group/version strings served, such as <code>apps/v1</code> or <code>batch/v1</code>. Both come from the API discovery endpoints, so they include CRDs and aggregated APIs.",
    tags: ["kubectl","API discovery"]
  },
  {
    id: "cncf-kcna-fc-96",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is --pod-network-cidr in kubeadm init, and how does it relate to the CNI plugin?",
    hint: "Addresses for Pods, not for nodes.",
    back: "It sets the IP range from which <strong>Pod IPs</strong> are allocated (the controller manager splits it into per-node Pod CIDRs). Some CNI plugins, such as Flannel, expect a specific range and read these per-node allocations; others, such as Calico or Cilium, can manage their own IP pools. It must not overlap the node network or the Service CIDR (<code>--service-cidr</code>).",
    tags: ["kubeadm","CNI","Networking"]
  },
  {
    id: "cncf-kcna-fc-97",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do kubectl plugins work?",
    hint: "A naming convention on your PATH.",
    back: "Any executable on your PATH named <code>kubectl-&lt;name&gt;</code> becomes <code>kubectl &lt;name&gt;</code>; <code>kubectl plugin list</code> shows those found. <strong>Krew</strong>, a Kubernetes SIG project, is a plugin manager with an index of community plugins. Plugins run with your kubeconfig and permissions, so install them only from sources you trust.",
    tags: ["kubectl","Plugins"]
  },
  {
    id: "cncf-kcna-fc-98",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is k3s?",
    hint: "Lightweight, single binary.",
    back: "k3s is a <strong>lightweight, certified Kubernetes distribution</strong> packaged as a single binary, a CNCF sandbox project. It bundles containerd, a CNI plugin and other add-ons, and uses an embedded SQLite datastore by default, with embedded etcd or external databases as options. It targets edge devices, IoT, CI and small clusters.",
    tags: ["Distributions","k3s"]
  },
  {
    id: "cncf-kcna-fc-99",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does \"Certified Kubernetes\" mean for a distribution or managed service?",
    hint: "Passing the same tests.",
    back: "The CNCF <strong>Certified Kubernetes</strong> program confirms that a product passes the upstream <strong>conformance test suite</strong> for a given version, so standard APIs behave the same everywhere and workloads are portable between vendors. Tools such as Sonobuoy or Hydrophone run those conformance tests against a cluster. Certification must be renewed for new versions.",
    tags: ["Conformance","CNCF"]
  },
  {
    id: "cncf-kcna-fc-100",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you run one kubectl command against another context or namespace without switching?",
    hint: "Per-command flags.",
    back: "Add <code>--context=NAME</code> to target a different kubeconfig context and <code>-n NAMESPACE</code> (or <code>--namespace</code>) for a different namespace, for example <code>kubectl --context prod -n payments get pods</code>. The current context and its default namespace stay unchanged, which is safer in scripts than calling use-context.",
    tags: ["kubectl","Contexts"]
  }
];

export default CNCF_KCNA_FLASHCARDS_4;
