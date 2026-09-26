export const CNCF_KCSA_FLASHCARDS_11 = [
  {
    id: "cncf-kcsa-fc-251",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Base64 in a Secret: what protection does it give?",
    hint: "Ask whether decoding needs a key.",
    back: "<strong>None.</strong> Base64 is a reversible <strong>encoding</strong> so binary data survives YAML and JSON. Anyone who can read the manifest, the API object or an etcd dump can decode it with <code>base64 -d</code>. Real protection comes from RBAC on secrets, encryption at rest for etcd, and keeping manifests out of source control.",
    tags: ["Secrets","Base64"]
  },
  {
    id: "cncf-kcsa-fc-252",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Name the built-in Secret types and what each one validates.",
    hint: "Opaque validates nothing.",
    back: "<strong>Opaque</strong>: arbitrary keys, no checks. <strong>kubernetes.io/tls</strong>: requires <code>tls.crt</code> and <code>tls.key</code>. <strong>kubernetes.io/dockerconfigjson</strong>: a docker config for image pulls. <strong>kubernetes.io/basic-auth</strong> and <strong>ssh-auth</strong>: username/password or an SSH key. <strong>kubernetes.io/service-account-token</strong>: legacy long-lived token. <strong>bootstrap.kubernetes.io/token</strong>: node bootstrap tokens. Types enforce shape, never encryption.",
    tags: ["Secrets","Secret types"]
  },
  {
    id: "cncf-kcsa-fc-253",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Can a pod reference a Secret from another namespace?",
    hint: "Namespace boundaries apply to references too.",
    back: "<strong>No.</strong> <code>secretKeyRef</code>, <code>envFrom</code>, Secret volumes, projected volumes and <code>imagePullSecrets</code> all resolve in the <strong>pod's own namespace</strong>. To share a value, create a copy in each namespace, ideally synced from an external store (External Secrets Operator, Secrets Store CSI Driver) so rotation happens in one place.",
    tags: ["Secrets","Namespaces"]
  },
  {
    id: "cncf-kcsa-fc-254",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Sealed Secrets: what is safe to commit, where is the decryption key, and what is the residual risk?",
    hint: "The controller holds the private half.",
    back: "The <strong>SealedSecret</strong> is encrypted with the controller's <strong>public key</strong>, so it is safe in Git. The <strong>private key</strong> lives in the cluster, in a Secret in the controller's namespace, and the controller decrypts into an <strong>ordinary Secret</strong>. Residual risks: the plaintext Secret still sits in etcd, anyone who can read the controller's key Secret can unseal everything, and the key must be backed up for disaster recovery. Scopes (strict, namespace-wide, cluster-wide) limit where a sealed value may be unsealed.",
    tags: ["Secrets","Sealed Secrets","GitOps"]
  },
  {
    id: "cncf-kcsa-fc-255",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Why does \"create pods\" in a namespace imply access to its Secrets?",
    hint: "Think about what a pod spec can reference.",
    back: "A pod spec can reference <strong>any Secret in its namespace</strong> as a volume or environment variable, and the kubelet delivers it without checking the pod creator's RBAC on secrets. The creator then reads it from inside the container. So workload-creation rights (pods, deployments, jobs, cronjobs) must be treated as <strong>secret-read rights</strong> for that namespace.",
    tags: ["Secrets","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-256",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which RBAC verbs on secrets expose Secret values?",
    hint: "More than one verb returns full objects.",
    back: "<strong>get</strong>, <strong>list</strong> and <strong>watch</strong> all return the full object including <code>data</code>. List and watch are just as sensitive as get, and more so because they cover every Secret in scope. Grant them only to identities that genuinely need values, scoped to a namespace, and prefer <code>resourceNames</code> with get when one Secret is enough.",
    tags: ["Secrets","RBAC verbs"]
  },
  {
    id: "cncf-kcsa-fc-257",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Secret as environment variable vs mounted volume: key differences?",
    hint: "Updates and leakage.",
    back: "<strong>Env var</strong>: fixed at container start, never updated, inherited by child processes and easy to leak in crash dumps or debug output. <strong>Volume</strong>: files on tmpfs, updated by the kubelet after the Secret changes (not when mounted with <code>subPath</code>), and readable only through the filesystem. Prefer volumes for credentials, especially ones that rotate.",
    tags: ["Secrets","Volumes","Env vars"]
  },
  {
    id: "cncf-kcsa-fc-258",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What does immutable: true on a Secret or ConfigMap do?",
    hint: "Two benefits, one trade-off.",
    back: "The API server <strong>rejects changes to data</strong> after creation, preventing accidental edits, and kubelets <strong>stop watching</strong> the object, which reduces API server load in large clusters. The trade-off: it cannot be reverted, and changing the value means creating a new object and pointing pods at it.",
    tags: ["Secrets","Immutable"]
  },
  {
    id: "cncf-kcsa-fc-259",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which RBAC verbs can resourceNames restrict, and which can it not?",
    hint: "A name must be known when the request is authorized.",
    back: "It restricts requests that name one object: <strong>get, update, patch, delete</strong>. It <strong>cannot restrict create</strong>, because the name is not part of the authorized URL, nor <strong>deletecollection</strong>. For <strong>list and watch</strong>, a resourceNames rule only authorizes requests that filter on <code>metadata.name</code> with a field selector. Use it to pin a controller to the one Secret it manages.",
    tags: ["RBAC","resourceNames"]
  },
  {
    id: "cncf-kcsa-fc-260",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Secrets Store CSI Driver vs External Secrets Operator vs Sealed Secrets: does a Kubernetes Secret end up in etcd?",
    hint: "Only one can avoid it entirely.",
    back: "<strong>Secrets Store CSI Driver</strong>: mounts values from an external store straight into the pod; no Secret object unless you turn on its optional sync. <strong>External Secrets Operator</strong>: syncs external values <strong>into</strong> Kubernetes Secrets. <strong>Sealed Secrets</strong>: stores encrypted SealedSecrets in Git; the in-cluster controller decrypts them <strong>into</strong> ordinary Secrets. Choose CSI when policy forbids Secrets in etcd.",
    tags: ["Secrets","External stores"]
  },
  {
    id: "cncf-kcsa-fc-261",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which Secret type holds registry credentials, and how is it used?",
    hint: "The kubelet needs it before any container starts.",
    back: "<strong>kubernetes.io/dockerconfigjson</strong> (a serialised <code>~/.docker/config.json</code>). Reference it in <code>imagePullSecrets</code> on the pod or attach it to the service account so every pod using that account inherits it. The kubelet and runtime use it to pull the image; it is never mounted into the application.",
    tags: ["Secrets","Image pull"]
  },
  {
    id: "cncf-kcsa-fc-262",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What do ResourceQuota scopes such as BestEffort, Terminating and PriorityClass do?",
    hint: "They choose which pods a quota counts.",
    back: "Scopes restrict a quota to <strong>matching pods</strong>: <strong>BestEffort</strong> or <strong>NotBestEffort</strong> by QoS, <strong>Terminating</strong> or <strong>NotTerminating</strong> by activeDeadlineSeconds, and a <code>scopeSelector</code> on <strong>PriorityClass</strong>, CrossNamespacePodAffinity and more. That lets a platform cap, say, high-priority or long-running pods per tenant separately from everything else.",
    tags: ["ResourceQuota","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-fc-263",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Is a namespace a security boundary?",
    hint: "List what it scopes and what it does not.",
    back: "Only partly. A namespace scopes <strong>names, RBAC, ResourceQuota, LimitRange and Pod Security Admission labels</strong>. It does <strong>not</strong> isolate network traffic (pods talk freely until NetworkPolicy applies), the node kernel, or cluster-scoped objects such as nodes, CRDs, PVs and ClusterRoles. Treat it as the unit you attach controls to, not as the control.",
    tags: ["Namespaces","Isolation"]
  },
  {
    id: "cncf-kcsa-fc-264",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What should every new tenant namespace get as a baseline isolation kit?",
    hint: "Identity, resources, network, pod rules.",
    back: "<strong>RoleBindings</strong> scoped to the namespace (no ClusterRoleBindings); a <strong>ResourceQuota</strong> and <strong>LimitRange</strong>; a <strong>default-deny NetworkPolicy</strong> plus explicit allows; <strong>Pod Security Admission labels</strong> (baseline or restricted); and dedicated <strong>service accounts</strong> with token automount off unless needed. Add dedicated nodes or sandboxed runtimes only when tenants are untrusted.",
    tags: ["Multi-tenancy","Namespaces"]
  },
  {
    id: "cncf-kcsa-fc-265",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "How do you keep a sensitive pod from sharing a node with untrusted pods?",
    hint: "Scheduling controls, with one that must be trustworthy.",
    back: "Give the sensitive workload <strong>dedicated nodes</strong>: taint them so others are repelled, and give the workload a toleration plus a nodeSelector or node affinity on an admin-controlled label (ideally under <code>node-restriction.kubernetes.io/</code>). Required <strong>podAntiAffinity</strong> against tenant labels can help, but labels are set by whoever creates pods, so do not rely on it alone.",
    tags: ["Node isolation","Scheduling"]
  },
  {
    id: "cncf-kcsa-fc-266",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What is the maximum size of a single Secret, and why does the limit exist?",
    hint: "The same limit applies to ConfigMaps.",
    back: "<strong>1 MiB</strong> of data per Secret. The limit protects the API server and kubelets from memory exhaustion by very large objects. Many small Secrets can still strain memory, which is why a <strong>ResourceQuota</strong> on <code>count/secrets</code> is a useful guard in tenant namespaces.",
    tags: ["Secrets","Limits"]
  },
  {
    id: "cncf-kcsa-fc-267",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which shared node resources can let one tenant's pod reach past namespace isolation?",
    hint: "Everything the pods on a node have in common.",
    back: "The <strong>kernel</strong> (exploits, syscalls), <strong>host namespaces</strong> (hostNetwork, hostPID, hostIPC), <strong>hostPath</strong> and node-local sockets, <strong>node-local services</strong> such as the kubelet and cloud metadata, the <strong>image cache</strong> (cached private images with IfNotPresent), and node <strong>CPU, memory, PIDs and disk</strong>. Pod Security, quotas and limits reduce these; dedicated nodes or sandboxes remove the shared kernel.",
    tags: ["Isolation","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-fc-268",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Why should tenants never get write access in kube-system?",
    hint: "What runs there, and with which identities?",
    back: "kube-system holds <strong>control plane and node agents</strong> (CoreDNS, kube-proxy, CNI and CSI components) whose pods are often <strong>privileged</strong> and whose service accounts have broad RBAC. Creating or editing workloads there lets a user borrow those identities or run privileged pods on every node. Keep it for the platform team, alongside kube-public and kube-node-lease.",
    tags: ["Namespaces","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-fc-269",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "ResourceQuota vs LimitRange: which controls what?",
    hint: "Namespace total vs per container.",
    back: "<strong>ResourceQuota</strong>: caps the <strong>aggregate</strong> in a namespace, such as total requests.cpu, limits.memory, pod count or object counts like <code>count/secrets</code>. <strong>LimitRange</strong>: sets <strong>per-container or per-pod</strong> defaults, minimums, maximums and limit-to-request ratios. With a quota on limits, add a LimitRange with defaults or pods that omit limits are rejected.",
    tags: ["ResourceQuota","LimitRange"]
  },
  {
    id: "cncf-kcsa-fc-270",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "ConfigMap vs Secret: what does Kubernetes actually do differently for Secrets?",
    hint: "Both are base64 or plain text in etcd by default.",
    back: "Secrets can be <strong>encrypted at rest</strong> separately via EncryptionConfiguration, are mounted on <strong>tmpfs</strong>, are sent by the kubelet only to nodes running pods that use them (Node authorizer), and are a <strong>separate RBAC resource</strong> so read access can be split from ConfigMaps. None of that is automatic encryption: an unencrypted cluster stores both in plaintext in etcd.",
    tags: ["Secrets","ConfigMaps"]
  },
  {
    id: "cncf-kcsa-fc-271",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "How can Secrets be stored declaratively in Git without committing plaintext?",
    hint: "Encrypt in Git, or keep only references.",
    back: "<strong>SOPS</strong>: encrypts values in the manifest with KMS, age or PGP keys; the GitOps tool decrypts at apply time. <strong>Sealed Secrets</strong>: encrypts with the in-cluster controller's public key. <strong>External Secrets Operator</strong> or the <strong>Secrets Store CSI Driver</strong>: Git holds only a reference; the value lives in an external manager. All three beat base64 in Git, which is plaintext.",
    tags: ["Secrets","GitOps"]
  },
  {
    id: "cncf-kcsa-fc-272",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "When should tenants get a virtual cluster instead of a namespace?",
    hint: "Think about cluster-scoped objects.",
    back: "When tenants need <strong>cluster-scoped</strong> control (their own CRDs, operators, webhooks, ClusterRoles) or conflicting versions of them, which namespaces cannot contain. A virtual cluster (for example vCluster) gives each tenant its own <strong>API server and datastore</strong>, syncing pods to the host cluster. Control plane isolation improves, but pods still share host nodes and kernels unless you also split the data plane.",
    tags: ["Virtual clusters","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-fc-273",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Which Kubernetes objects are cluster-scoped and so sit outside namespace isolation?",
    hint: "kubectl api-resources --namespaced=false",
    back: "Examples: <strong>Nodes, PersistentVolumes, StorageClasses, CustomResourceDefinitions, ClusterRoles and ClusterRoleBindings, Namespaces, PriorityClasses, RuntimeClasses, IngressClasses, and admission webhook configurations</strong>. A RoleBinding can never grant access to them, and any ClusterRoleBinding over them affects every tenant, so they stay with the platform team.",
    tags: ["Cluster-scoped","Multi-tenancy"]
  },
  {
    id: "cncf-kcsa-fc-274",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "Where does a mounted Secret volume live on the node?",
    hint: "Memory, not disk.",
    back: "On a <strong>tmpfs</strong> (RAM-backed) mount under the kubelet's pod directory, <code>/var/lib/kubelet/pods/&lt;uid&gt;/volumes/</code>. It is not written to persistent disk and is removed when the pod is deleted. Root on the node can still read it while the pod runs, which is why node compromise exposes the Secrets of that node's pods.",
    tags: ["Secrets","tmpfs"]
  },
  {
    id: "cncf-kcsa-fc-275",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d3",
    front: "What is the safe order for rotating a local encryption-at-rest key on an HA control plane?",
    hint: "Every API server must be able to read before any one writes with the new key.",
    back: "1. Add the new key as the <strong>second</strong> entry on every API server and restart them all, so all can decrypt it. 2. Move the new key to <strong>first</strong> on every server and restart again, so writes use it. 3. <strong>Rewrite all Secrets</strong> so they are re-encrypted. 4. Remove the old key and restart. Skipping step 1 lets one server write data the others cannot read.",
    tags: ["Encryption at rest","Key rotation"]
  }
];

export default CNCF_KCSA_FLASHCARDS_11;
