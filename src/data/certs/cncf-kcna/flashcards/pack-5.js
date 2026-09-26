export const CNCF_KCNA_FLASHCARDS_5 = [
  {
    id: "cncf-kcna-fc-101",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a CustomResourceDefinition declare?",
    hint: "Names, scope, versions, schema.",
    back: "A CRD declares the API <strong>group</strong>, the <strong>names</strong> (plural, singular, kind, optional shortNames), the <strong>scope</strong> (Namespaced or Cluster) and one or more <strong>versions</strong>, each with an OpenAPI v3 schema and <code>served</code> and <code>storage</code> flags. Its name must be <code>&lt;plural&gt;.&lt;group&gt;</code>, such as <code>backups.example.com</code>.",
    tags: ["CRDs"]
  },
  {
    id: "cncf-kcna-fc-102",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the five Operator capability levels?",
    hint: "From installing to running itself.",
    back: "The Operator Framework maturity model: <strong>1 Basic install</strong> (provisioning), <strong>2 Seamless upgrades</strong> (version and patch upgrades), <strong>3 Full lifecycle</strong> (backup, restore, failure recovery), <strong>4 Deep insights</strong> (metrics, alerts, log processing) and <strong>5 Auto pilot</strong> (auto-scaling, auto-tuning, abnormality detection). Many Helm-based operators stop at level 2.",
    tags: ["Operators"]
  },
  {
    id: "cncf-kcna-fc-103",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do multiple versions of a CRD coexist?",
    hint: "Served vs stored, and who converts.",
    back: "Several versions can be <code>served</code>, but exactly one is the <code>storage</code> version written to etcd. With conversion strategy <strong>None</strong>, only apiVersion is rewritten, so schemas must be compatible. With <strong>Webhook</strong>, the API server calls a conversion webhook to translate objects between versions. After changing the storage version, existing objects must be rewritten to migrate them.",
    tags: ["CRDs","Versioning"]
  },
  {
    id: "cncf-kcna-fc-104",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How can a CRD enforce rules that a plain OpenAPI schema cannot express?",
    hint: "An expression language, evaluated in the API server.",
    back: "Add <code>x-kubernetes-validations</code> rules written in <strong>CEL</strong> to the schema, for example <code>self.minReplicas &lt;= self.maxReplicas</code>, or transition rules that compare against <code>oldSelf</code> to make a field immutable. The API server evaluates them on create and update, so no validating webhook has to run.",
    tags: ["CRDs","CEL","Validation"]
  },
  {
    id: "cncf-kcna-fc-105",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Custom resource vs custom controller: what does each do on its own?",
    hint: "Data vs behavior.",
    back: "A <strong>custom resource</strong> only stores structured data in the API; creating one makes nothing happen by itself. A <strong>custom controller</strong> watches resources and acts to reconcile them. Combine the two, with domain knowledge built in, and you have an <strong>Operator</strong>. Some custom resources are consumed by existing tools instead of their own controller.",
    tags: ["CRDs","Controllers"]
  },
  {
    id: "cncf-kcna-fc-106",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How is CPU expressed in Kubernetes resource requests?",
    hint: "Cores and millicores.",
    back: "<strong>1 CPU</strong> = one vCPU or core (a hyperthread on bare metal). Fractions use millicores: <code>500m</code> = 0.5 CPU, <code>100m</code> = 0.1 CPU; <code>0.5</code> is also valid. The smallest precision is <strong>1m</strong>. CPU is an absolute amount: 1 CPU means the same on a 2-core and a 64-core node.",
    tags: ["Resource units","CPU"]
  },
  {
    id: "cncf-kcna-fc-107",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which memory suffixes does Kubernetes accept, and what is the classic mistake?",
    hint: "Case matters.",
    back: "Decimal: <code>k, M, G, T</code> (powers of 1000). Binary: <code>Ki, Mi, Gi, Ti</code> (powers of 1024). <code>128Mi</code> = 134,217,728 bytes; <code>128M</code> = 128,000,000 bytes. The classic mistake is a lowercase <code>m</code>: <code>128m</code> means 0.128 <strong>bytes</strong>, because m is the milli suffix.",
    tags: ["Resource units","Memory"]
  },
  {
    id: "cncf-kcna-fc-108",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which fields can a LimitRange set for containers?",
    hint: "Two defaults, two bounds and a ratio.",
    back: "<code>defaultRequest</code> (request injected when none is set), <code>default</code> (limit injected when none is set), <code>min</code> and <code>max</code> (allowed bounds, enforced at admission) and <code>maxLimitRequestRatio</code> (how far a limit may exceed its request). A LimitRange can also constrain Pods as a whole and PersistentVolumeClaim sizes. It affects only objects created after it exists.",
    tags: ["LimitRange"]
  },
  {
    id: "cncf-kcna-fc-109",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What can kubectl apply -f take as input?",
    hint: "More than a single file.",
    back: "A single <strong>file</strong>, several <code>-f</code> flags, a <strong>directory</strong> (every .yaml, .yml and .json file in it; add <code>-R</code> for subdirectories), a <strong>URL</strong>, or <code>-</code> for stdin. A file may hold several objects separated by <code>---</code>. For Kustomize directories use <code>-k</code> instead of <code>-f</code>.",
    tags: ["kubectl","Declarative management"]
  },
  {
    id: "cncf-kcna-fc-110",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does enabling the status subresource on a CRD change?",
    hint: "Two endpoints, two owners.",
    back: "The object gets a separate <code>/status</code> endpoint. Writes to the main endpoint <strong>ignore status changes</strong>, and writes to /status <strong>ignore everything but status</strong>, so users own spec and the controller owns status and RBAC can separate them. Spec changes increment <code>metadata.generation</code>, which controllers echo back as <code>status.observedGeneration</code> once reconciled.",
    tags: ["CRDs","Subresources"]
  },
  {
    id: "cncf-kcna-fc-111",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you add, change and remove a label with kubectl?",
    hint: "An equals sign, a flag, and a trailing dash.",
    back: "Add: <code>kubectl label pod web env=prod</code>. Change an existing value: add <code>--overwrite</code>, otherwise kubectl refuses. Remove: append a dash to the key, <code>kubectl label pod web env-</code>. <code>kubectl annotate</code> uses the same syntax for annotations. Use <code>-l</code> or <code>--all</code> to label many objects at once.",
    tags: ["kubectl","Labels"]
  },
  {
    id: "cncf-kcna-fc-112",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which ways can kubectl delete select what to delete?",
    hint: "By name, by file, by label, or everything of a kind.",
    back: "By <strong>type and name</strong> (<code>kubectl delete pod web-1</code>), by <strong>file</strong> (<code>-f app.yaml</code>, deleting what it defines), by <strong>label</strong> (<code>-l app=demo</code>) or every object of a kind in the namespace with <code>--all</code>. Pods get their normal grace period; <code>--grace-period</code> changes it, and <code>--force</code> skips waiting for confirmation from the kubelet.",
    tags: ["kubectl","Object management"]
  },
  {
    id: "cncf-kcna-fc-113",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Name some admission plugins that kube-apiserver enables by default.",
    hint: "Quotas, defaults, and security are all admission.",
    back: "Examples: <strong>NamespaceLifecycle</strong> (no new objects in terminating namespaces), <strong>LimitRanger</strong>, <strong>ResourceQuota</strong>, <strong>ServiceAccount</strong>, <strong>DefaultStorageClass</strong>, <strong>DefaultTolerationSeconds</strong>, <strong>PodSecurity</strong>, <strong>Priority</strong>, plus <strong>MutatingAdmissionWebhook</strong>, <strong>ValidatingAdmissionWebhook</strong> and <strong>ValidatingAdmissionPolicy</strong>. Others, such as AlwaysPullImages, are opt-in via <code>--enable-admission-plugins</code>.",
    tags: ["Admission control"]
  },
  {
    id: "cncf-kcna-fc-114",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does kubectl edit do, and what is the risk?",
    hint: "Live object, local editor.",
    back: "It downloads the live object, opens it in the editor from <code>KUBE_EDITOR</code> or <code>EDITOR</code>, and sends the result back when you save; invalid edits are rejected and the file is reopened. The risk is <strong>drift</strong>: the change is not in your manifests or Git, and the next <code>kubectl apply</code> or GitOps sync may silently undo it.",
    tags: ["kubectl","Drift"]
  },
  {
    id: "cncf-kcna-fc-115",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which core resources and providers make up Cluster API?",
    hint: "Clusters and machines, plus pluggable providers.",
    back: "Resources: <strong>Cluster</strong>, <strong>Machine</strong> (one node), <strong>MachineSet</strong> and <strong>MachineDeployment</strong> (like ReplicaSet and Deployment, for machines, with rolling replacement), and <strong>MachineHealthCheck</strong> (replaces unhealthy machines). Providers plug in: <strong>infrastructure</strong> (AWS, Azure, vSphere, bare metal), <strong>bootstrap</strong> (usually kubeadm) and <strong>control plane</strong>.",
    tags: ["Cluster API"]
  },
  {
    id: "cncf-kcna-fc-116",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why are Kubernetes nodes usually replaced rather than patched in place?",
    hint: "Cattle, not pets.",
    back: "Replacing nodes from a <strong>versioned, tested image</strong> keeps every node identical, avoids configuration drift, makes rollback easy (go back to the old image) and exercises the drain-and-reschedule path regularly. It relies on workloads tolerating rescheduling: multiple replicas, PodDisruptionBudgets, state in PersistentVolumes. Managed node pools, Karpenter and Cluster API automate it.",
    tags: ["Node management","Immutable infrastructure"]
  },
  {
    id: "cncf-kcna-fc-117",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Pod CIDR, Service CIDR and node network: what is each and why must they not overlap?",
    hint: "Three address spaces.",
    back: "<strong>Node network</strong>: the machines' own addresses. <strong>Pod CIDR</strong> (<code>--pod-network-cidr</code> / cluster-cidr): addresses the network plugin gives Pods. <strong>Service CIDR</strong> (<code>--service-cluster-ip-range</code>): virtual ClusterIPs that exist only in kube-proxy rules. If they overlap, packets are routed to the wrong place. All three should also avoid ranges used elsewhere on the corporate network.",
    tags: ["Networking","IP addressing"]
  },
  {
    id: "cncf-kcna-fc-118",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What can kubectl wait wait for?",
    hint: "Conditions, deletion, or any field.",
    back: "<code>--for=condition=Ready</code> (or Available, Complete, and so on) waits for a status condition; <code>--for=delete</code> waits until objects are gone; <code>--for=jsonpath='{.status.phase}'=Running</code> waits for any field value; <code>--for=create</code> waits for an object to appear. <code>--timeout</code> bounds the wait and a non-zero exit signals failure, which suits pipelines.",
    tags: ["kubectl","Automation"]
  },
  {
    id: "cncf-kcna-fc-119",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does API Priority and Fairness protect the API server from?",
    hint: "One noisy client.",
    back: "API Priority and Fairness (APF) sorts incoming requests with <strong>FlowSchemas</strong> into <strong>priority levels</strong>, each with a share of the API server's concurrency, and queues requests fairly between flows. A misbehaving controller that floods the API is throttled within its own level, answered with HTTP 429 when its queues are full, while system traffic such as node heartbeats and leader election keeps flowing.",
    tags: ["API server","APF"]
  },
  {
    id: "cncf-kcna-fc-120",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you read the status of a ResourceQuota?",
    hint: "Two columns.",
    back: "<code>kubectl describe resourcequota</code> (or <code>describe namespace</code>) lists each tracked resource with <strong>Used</strong> and <strong>Hard</strong>. A new object is rejected at admission if it would push Used past Hard, with an <em>exceeded quota</em> error naming the resource. Existing objects are not removed when a quota is lowered.",
    tags: ["ResourceQuota","kubectl"]
  },
  {
    id: "cncf-kcna-fc-121",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which built-in signers does the Kubernetes certificates API offer?",
    hint: "Clients, kubelet clients, kubelet serving.",
    back: "<code>kubernetes.io/kube-apiserver-client</code> (client certs for users and tools, approved by an admin), <code>kubernetes.io/kube-apiserver-client-kubelet</code> (kubelet client certs, auto-approved for bootstrapping nodes) and <code>kubernetes.io/kubelet-serving</code> (kubelet serving certs). Approve or deny with <code>kubectl certificate approve|deny</code>; the signed cert appears in the CSR's status.",
    tags: ["Certificates","CSR"]
  },
  {
    id: "cncf-kcna-fc-122",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "On a kubeadm cluster, why is admin.conf no longer the ultimate break-glass credential?",
    hint: "Two files since 1.29.",
    back: "Since Kubernetes 1.29, kubeadm's <code>admin.conf</code> carries the group <strong>kubeadm:cluster-admins</strong>, which is bound to the cluster-admin ClusterRole, so the binding can be removed or audited like any RBAC grant. A separate <code>super-admin.conf</code> is in <strong>system:masters</strong>, which bypasses RBAC entirely; keep it off shared machines and use it only for emergencies.",
    tags: ["kubeadm","RBAC"]
  },
  {
    id: "cncf-kcna-fc-123",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How can kubectl sort output or show only the columns you want?",
    hint: "Two flags that take JSONPath.",
    back: "<code>--sort-by=.metadata.creationTimestamp</code> (or <code>.status.containerStatuses[0].restartCount</code>) orders rows by any field. <code>-o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName</code> prints a table with just those columns. Both use JSONPath expressions relative to each object.",
    tags: ["kubectl","Output formats"]
  },
  {
    id: "cncf-kcna-fc-124",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What do kubectl config view --minify, --raw and --flatten do?",
    hint: "Trim, reveal, embed.",
    back: "<code>--minify</code> shows only the current context and the cluster and user it uses. <code>--raw</code> shows certificate data and tokens instead of redacting them. <code>--flatten</code> embeds referenced certificate files as inline data so the output is self-contained. Together they produce a portable single-context kubeconfig; treat it as a secret.",
    tags: ["kubeconfig","kubectl"]
  },
  {
    id: "cncf-kcna-fc-125",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does basic kubectl JSONPath syntax look like?",
    hint: "Curly braces and dots.",
    back: "Expressions go in <code>{}</code> and walk the object from the root: <code>{.metadata.name}</code>, <code>{.items[*].metadata.name}</code> (every item), <code>{.items[0].status.podIP}</code> (first item), filters such as <code>{.items[?(@.status.phase==\"Running\")].metadata.name}</code>, and <code>{range .items[*]}{.metadata.name}{\"\\n\"}{end}</code> for one line per item.",
    tags: ["kubectl","JSONPath"]
  }
];

export default CNCF_KCNA_FLASHCARDS_5;
