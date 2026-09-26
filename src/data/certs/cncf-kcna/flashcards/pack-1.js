export const CNCF_KCNA_FLASHCARDS_1 = [
  {
    id: "cncf-kcna-fc-1",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which components make up the control plane, and which run on every node?",
    hint: "Four plus one optional on one side; three on the other.",
    back: "<strong>Control plane</strong>: kube-apiserver, etcd, kube-scheduler, kube-controller-manager, plus cloud-controller-manager when the cluster runs on a cloud provider. <strong>Every node</strong>: kubelet, kube-proxy (or a network plugin that replaces it) and a CRI container runtime such as containerd or CRI-O. Control plane components can run on any machine, but are usually kept together on dedicated nodes.",
    tags: ["Architecture","Components"]
  },
  {
    id: "cncf-kcna-fc-2",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does etcd hold, and why is it the one thing you must back up?",
    hint: "Think about what is gone if only this is lost.",
    back: "etcd is the consistent, distributed <strong>key-value store for all cluster data</strong>: every API object, from Deployments and Services to Secrets and RBAC rules. Nodes, images and running containers can be rebuilt, but without etcd (or a snapshot of it) the cluster forgets everything it was told to run. Only the API server talks to it.",
    tags: ["etcd","Backup"]
  },
  {
    id: "cncf-kcna-fc-3",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are Lease objects used for in Kubernetes?",
    hint: "More than one job: nodes, and components that must not both act.",
    back: "A Lease (<code>coordination.k8s.io/v1</code>) is a lightweight object that a holder keeps renewing. Kubelets renew one per node in <strong>kube-node-lease</strong> as a cheap <strong>heartbeat</strong>. Control plane components such as kube-scheduler and kube-controller-manager use Leases in kube-system for <strong>leader election</strong>, so only one replica acts at a time. API servers also publish their identity with Leases.",
    tags: ["Leases","Leader election"]
  },
  {
    id: "cncf-kcna-fc-4",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Name some of the controllers bundled into kube-controller-manager.",
    hint: "One binary, many loops.",
    back: "kube-controller-manager runs many control loops in a single process, for example the <strong>Node</strong> controller (notices unreachable nodes), <strong>Job</strong> controller (creates Pods to run tasks to completion), <strong>EndpointSlice</strong> controller (links Services to Pods), <strong>ServiceAccount</strong> controller (creates default ServiceAccounts in new namespaces) and the ReplicaSet and Deployment controllers. Each watches the API server and moves actual state toward desired state.",
    tags: ["kube-controller-manager","Controllers"]
  },
  {
    id: "cncf-kcna-fc-5",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does the cloud-controller-manager do, and which controllers does it contain?",
    hint: "Everything that needs to talk to the provider API.",
    back: "It separates <strong>cloud-provider-specific logic</strong> from the core so providers can release on their own schedule. Its controllers: <strong>node</strong> (labels nodes with provider metadata and deletes Node objects whose VM is gone), <strong>route</strong> (programs cloud routes for Pod traffic) and <strong>service</strong> (creates cloud load balancers for <code>type: LoadBalancer</code> Services). Clusters on bare metal or a laptop do not run it.",
    tags: ["cloud-controller-manager"]
  },
  {
    id: "cncf-kcna-fc-6",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the kubelet responsible for?",
    hint: "The node agent, and not only for starting containers.",
    back: "The kubelet runs on every node and makes sure the containers described in the PodSpecs assigned to it are <strong>running and healthy</strong>: it asks the runtime via CRI to start them, mounts volumes, runs liveness, readiness and startup probes, and reports node and Pod status to the API server. It does not manage containers that Kubernetes did not create.",
    tags: ["kubelet","Nodes"]
  },
  {
    id: "cncf-kcna-fc-7",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "If the kubelet process restarts, what happens to the containers on that node?",
    hint: "The runtime owns the processes.",
    back: "They <strong>keep running</strong>. Containers are children of the container runtime (containerd or CRI-O), not of the kubelet. When the kubelet comes back it lists the running containers through CRI, reconciles them with the Pods assigned to its node and resumes probes and status reporting. Only if it stays down past the grace period does the control plane mark the node NotReady and, later, evict its Pods.",
    tags: ["kubelet","Container runtime"]
  },
  {
    id: "cncf-kcna-fc-8",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Does Kubernetes still use Docker Engine to run containers?",
    hint: "Something called a \"shim\" was removed.",
    back: "Not directly. The kubelet talks to runtimes through the <strong>Container Runtime Interface (CRI)</strong>. The built-in dockershim adapter was removed in <strong>Kubernetes 1.24</strong>, so nodes use a CRI runtime such as <strong>containerd</strong> or <strong>CRI-O</strong> (or Docker Engine via the external cri-dockerd adapter). Images built with Docker still work, because they are standard OCI images.",
    tags: ["CRI","Container runtime"]
  },
  {
    id: "cncf-kcna-fc-9",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Static Pod vs DaemonSet: how do they differ?",
    hint: "Who creates it, and can the API server change it?",
    back: "A <strong>static Pod</strong> is defined by a manifest file on one node and run directly by that node's kubelet, with no controller and no scheduler; the API only shows a read-only <em>mirror Pod</em>, and you change it by editing the file. kubeadm uses static Pods for the control plane itself. A <strong>DaemonSet</strong> is an API object whose controller creates one Pod per eligible node, is updated with <code>kubectl apply</code>, and supports rolling updates.",
    tags: ["Static Pods","DaemonSets"]
  },
  {
    id: "cncf-kcna-fc-10",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is a Kubernetes control loop (reconciliation loop)?",
    hint: "Like a thermostat.",
    back: "A controller repeatedly <strong>observes</strong> the current state through the API server, <strong>compares</strong> it with the desired state in the object spec, and <strong>acts</strong> to reduce the difference (create a Pod, delete an extra one, update status). Because it never stops, the system heals itself after failures without anyone re-running commands.",
    tags: ["Controllers","Reconciliation"]
  },
  {
    id: "cncf-kcna-fc-11",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How many etcd member failures can clusters of 3, 4, 5 and 7 members survive?",
    hint: "Quorum is a strict majority: floor(n/2) + 1.",
    back: "Tolerated failures = <strong>floor((n - 1) / 2)</strong>. 3 members: quorum 2, tolerates <strong>1</strong>. 4 members: quorum 3, still tolerates <strong>1</strong>. 5 members: quorum 3, tolerates <strong>2</strong>. 7 members: quorum 4, tolerates <strong>3</strong>. That is why etcd clusters use odd sizes: an even member adds cost and write latency without adding fault tolerance.",
    tags: ["etcd","Quorum","High availability"]
  },
  {
    id: "cncf-kcna-fc-12",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Stacked vs external etcd topology in an HA control plane: what is the trade-off?",
    hint: "Where the etcd members live relative to the API servers.",
    back: "<strong>Stacked</strong>: each control plane node runs an etcd member next to its API server. Fewer machines and simpler to set up, but losing a node loses both an API server and an etcd member. <strong>External</strong>: etcd runs on its own hosts. Failures are decoupled and etcd can be sized separately, at the cost of at least three extra machines. kubeadm uses stacked by default.",
    tags: ["etcd","High availability","kubeadm"]
  },
  {
    id: "cncf-kcna-fc-13",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which well-known node labels does Kubernetes set, and what are they used for?",
    hint: "Hostname, zone, architecture.",
    back: "The kubelet and cloud integration set labels such as <code>kubernetes.io/hostname</code>, <code>kubernetes.io/os</code>, <code>kubernetes.io/arch</code>, <code>topology.kubernetes.io/zone</code>, <code>topology.kubernetes.io/region</code> and <code>node.kubernetes.io/instance-type</code>. Workloads use them in nodeSelector, affinity and topology spread constraints, for example to spread replicas across zones or pin an image to arm64 nodes.",
    tags: ["Nodes","Labels"]
  },
  {
    id: "cncf-kcna-fc-14",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is resourceVersion used for on Kubernetes objects?",
    hint: "Two people edit the same object at once.",
    back: "Every object carries a <code>metadata.resourceVersion</code> that changes on each write. It enables <strong>optimistic concurrency</strong>: an update that sends a stale resourceVersion is rejected with <strong>409 Conflict</strong> instead of silently overwriting someone else's change. Watches also use it to resume the event stream from a known point. Treat it as opaque; do not compare values numerically.",
    tags: ["API","Concurrency"]
  },
  {
    id: "cncf-kcna-fc-15",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What makes something a Kubernetes \"object\"?",
    hint: "A record of intent.",
    back: "An object is a <strong>persistent entity stored in the API</strong> (and so in etcd) that represents part of the cluster's state: what apps run, on which nodes, with what policies. Creating one is a <strong>record of intent</strong>: once it exists, controllers work to make reality match it. Every object has a kind, metadata with a name and UID, usually a spec you write and a status the system writes.",
    tags: ["Objects","Desired state"]
  },
  {
    id: "cncf-kcna-fc-16",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the API aggregation layer, and which common add-on relies on it?",
    hint: "An extra API served by something other than kube-apiserver.",
    back: "The aggregation layer lets the API server <strong>proxy an entire API group to another server</strong> running in the cluster, registered with an <strong>APIService</strong> object. Clients call the normal API URL and kube-apiserver forwards the request. <strong>metrics-server</strong> uses it to serve <code>metrics.k8s.io</code>, which <code>kubectl top</code> and the HPA read. CRDs are the simpler alternative when you only need new object types stored in etcd.",
    tags: ["API aggregation","Extensibility"]
  },
  {
    id: "cncf-kcna-fc-17",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "At the highest level, what is a Kubernetes cluster made of?",
    hint: "Two kinds of machines.",
    back: "A cluster is a set of machines called <strong>nodes</strong>. The <strong>control plane</strong> makes global decisions (API, scheduling, reconciliation) and stores state in etcd; <strong>worker nodes</strong> run the application Pods. A production cluster spreads the control plane over several machines and has multiple workers, so that losing one machine does not take down the cluster or its apps.",
    tags: ["Architecture","Clusters"]
  },
  {
    id: "cncf-kcna-fc-18",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do alpha, beta and stable API versions (v1alpha1, v1beta1, v1) promise?",
    hint: "Default on or off, and how long it stays.",
    back: "<strong>Alpha</strong>: off by default, may change or disappear in any release, not for production. <strong>Beta</strong>: well tested; since 1.24 new beta APIs are off by default, and a beta version is deprecated and removed after its replacement ships (removal can come three releases after deprecation). <strong>Stable (GA)</strong>, such as <code>apps/v1</code>: will not be removed within the major version.",
    tags: ["API versions","Deprecation"]
  },
  {
    id: "cncf-kcna-fc-19",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is kubectl, and how does it interact with a cluster?",
    hint: "Just an API client.",
    back: "kubectl is the <strong>command-line client for the Kubernetes API</strong>. Every command becomes one or more authenticated <strong>HTTPS REST calls to kube-apiserver</strong>, using the cluster address and credentials from a kubeconfig. It never talks to nodes or etcd directly, so anything kubectl can do, a script or controller can do through the same API.",
    tags: ["kubectl","Kubernetes API"]
  },
  {
    id: "cncf-kcna-fc-20",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What exactly is a Pod?",
    hint: "Smallest unit, shared things.",
    back: "A Pod is the <strong>smallest deployable unit</strong> in Kubernetes: one or more containers scheduled together on the same node, sharing a <strong>network namespace</strong> (one IP, reachable over localhost) and optionally <strong>volumes</strong>. Most Pods run one main container; extra containers are helpers such as sidecars. Pods are disposable and are usually created by controllers, not by hand.",
    tags: ["Pods"]
  },
  {
    id: "cncf-kcna-fc-21",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which top-level fields does almost every Kubernetes manifest need?",
    hint: "Four keys; one of them is often replaced by data.",
    back: "<strong>apiVersion</strong> (group and version, such as <code>apps/v1</code>), <strong>kind</strong> (the object type), <strong>metadata</strong> (at least a name, plus namespace, labels, annotations) and <strong>spec</strong> (the desired state). Some kinds use other fields instead of spec, such as <code>data</code> in a ConfigMap or Secret. <code>status</code> is written by the system, not by you.",
    tags: ["Manifests","Objects"]
  },
  {
    id: "cncf-kcna-fc-22",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which four namespaces exist in a new cluster?",
    hint: "One for you, three for the system.",
    back: "<strong>default</strong> (where objects go when you do not name a namespace), <strong>kube-system</strong> (objects created by Kubernetes, such as CoreDNS and kube-proxy), <strong>kube-public</strong> (readable by all clients, including unauthenticated ones; holds cluster-info) and <strong>kube-node-lease</strong> (Lease objects used for node heartbeats).",
    tags: ["Namespaces"]
  },
  {
    id: "cncf-kcna-fc-23",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the syntax rules for label keys and values?",
    hint: "Optional prefix, then a short name.",
    back: "A key is an optional <strong>DNS subdomain prefix</strong> (up to 253 characters) and a slash, then a <strong>name of up to 63 characters</strong> (alphanumerics, dashes, underscores, dots; starts and ends alphanumeric), as in <code>app.kubernetes.io/name</code>. Values are also up to <strong>63 characters</strong> and may be empty. The <code>kubernetes.io/</code> and <code>k8s.io/</code> prefixes are reserved for core components. Anything longer belongs in an annotation.",
    tags: ["Labels","Metadata"]
  },
  {
    id: "cncf-kcna-fc-24",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Foreground, background and orphan cascading deletion: what does each do?",
    hint: "When do the dependents go, if at all?",
    back: "<strong>Background</strong> (default): the owner is deleted at once and the garbage collector removes dependents afterwards. <strong>Foreground</strong>: the owner enters a deletion-in-progress state with the <code>foregroundDeletion</code> finalizer and is removed only after its blocking dependents are gone. <strong>Orphan</strong> (<code>kubectl delete --cascade=orphan</code>): only the owner is deleted; dependents keep running with their ownerReferences removed.",
    tags: ["Garbage collection","Deletion"]
  },
  {
    id: "cncf-kcna-fc-25",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you scale the Kubernetes API server for high availability?",
    hint: "Where does it keep its state?",
    back: "kube-apiserver is <strong>stateless</strong>: all state lives in etcd. So you run several instances, typically one per control plane node, behind a <strong>load balancer</strong> that clients and kubelets use as the cluster endpoint. The scheduler and controller manager also run one per control plane node, but use <strong>leader election</strong> so only one instance is active at a time.",
    tags: ["kube-apiserver","High availability"]
  }
];

export default CNCF_KCNA_FLASHCARDS_1;
