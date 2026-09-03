export const K8S_CKAD_FLASHCARDS_8 = [
  {
    id: "k8s-ckad-fc-176",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Secrets: Imperative Creation from Files",
    hint: "Packaging credentials into secret keys.",
    back: "Run <strong>kubectl create secret generic &lt;name&gt; --from-file=key=file</strong> to package credential files into Kubernetes Secrets.",
    tags: ["Kubernetes", "kubectl create secret", "Secret Management"]
  },
  {
    id: "k8s-ckad-fc-177",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PersistentVolumes: Lifecycle Phases",
    hint: "Available, Bound, Released, and Failed.",
    back: "When a PVC is deleted on a Retained volume, the PV enters the <strong>Released</strong> phase, keeping data intact until manual cleanup.",
    tags: ["Kubernetes", "Storage", "PV Phases"]
  },
  {
    id: "k8s-ckad-fc-178",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PersistentVolumeClaims: Label Selectors",
    hint: "Binding claims to specific labeled PVs.",
    back: "Use <strong>spec.selector.matchLabels</strong> on a PVC to bind exclusively to PersistentVolumes carrying designated labels.",
    tags: ["Kubernetes", "Storage", "PV Selectors"]
  },
  {
    id: "k8s-ckad-fc-179",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Storage: volumeMode Block",
    hint: "Raw block devices for high-performance databases.",
    back: "Set <strong>volumeMode: Block</strong> on PVs and PVCs to mount raw block storage devices without filesystem overhead.",
    tags: ["Kubernetes", "Raw Block Volumes", "Storage"]
  },
  {
    id: "k8s-ckad-fc-180",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "StorageClasses: Default StorageClass Annotation",
    hint: "Handling PVCs without explicit class names.",
    back: "Kubernetes binds unassigned PVCs to the StorageClass marked with <strong>storageclass.kubernetes.io/is-default-class: 'true'</strong>.",
    tags: ["Kubernetes", "StorageClass", "Default StorageClass"]
  },
  {
    id: "k8s-ckad-fc-181",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext: supplementalGroups",
    hint: "Assigning secondary Linux group memberships.",
    back: "Use <strong>supplementalGroups: [&lt;gid&gt;]</strong> to grant container processes membership in additional secondary Linux groups.",
    tags: ["Kubernetes", "SecurityContext", "supplementalGroups"]
  },
  {
    id: "k8s-ckad-fc-182",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Linux Capabilities: NET_BIND_SERVICE",
    hint: "Binding ports &lt; 1024 as non-root.",
    back: "Grant <strong>CAP_NET_BIND_SERVICE</strong> in securityContext capabilities to allow non-root containers to bind to ports under 1024.",
    tags: ["Kubernetes", "Capabilities", "NET_BIND_SERVICE"]
  },
  {
    id: "k8s-ckad-fc-183",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Storage: mountOptions",
    hint: "Passing filesystem flags to the OS mount utility.",
    back: "Declare filesystem flags in the <strong>mountOptions</strong> field of StorageClasses or PVs to customize OS mount parameters.",
    tags: ["Kubernetes", "mountOptions", "Storage Tuning"]
  },
  {
    id: "k8s-ckad-fc-184",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubelet: Node Pressure Eviction Order",
    hint: "Evicting BestEffort workloads during disk pressure.",
    back: "During node pressure (DiskPressure/MemoryPressure), the kubelet evicts <strong>BestEffort pods</strong> first to protect Guaranteed workloads.",
    tags: ["Kubernetes", "Node Eviction", "QoS Eviction"]
  },
  {
    id: "k8s-ckad-fc-185",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Downward API: File Formatting",
    hint: "Key-value text formatting for projected metadata.",
    back: "Downward API files project labels and annotations as standard <strong>key=\"value\"</strong> text lines.",
    tags: ["Kubernetes", "Downward API", "Projected Volumes"]
  },
  {
    id: "k8s-ckad-fc-186",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes 1.30+: AppArmor in securityContext",
    hint: "Standard declarative AppArmor profiles.",
    back: "Declare <strong>securityContext.appArmorProfile</strong> directly in pod manifests (GA in k8s 1.30+) to enforce host AppArmor security rules.",
    tags: ["Kubernetes", "AppArmor", "SecurityContext"]
  },
  {
    id: "k8s-ckad-fc-187",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Volume Mounting: subPathExpr",
    hint: "Dynamic path interpolation from environment variables.",
    back: "Use <strong>subPathExpr: $(VAR_NAME)</strong> to dynamically construct mount paths using Downward API environment variables.",
    tags: ["Kubernetes", "subPathExpr", "Dynamic Storage"]
  },
  {
    id: "k8s-ckad-fc-188",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Secrets: Key Naming Rules",
    hint: "Alphanumeric, dashes, dots, and underscores.",
    back: "Secret and ConfigMap data keys must use <strong>alphanumeric characters, '-', '_', or '.'</strong> (e.g. <code>app.config-v1</code>).",
    tags: ["Kubernetes", "Secrets", "Key Naming"]
  },
  {
    id: "k8s-ckad-fc-189",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Secrets: stringData Convenience Field",
    hint: "Writing unencoded plaintext in YAML.",
    back: "Use the <strong>stringData</strong> field in Secret manifests to write plaintext strings directly; the API server base64-encodes them automatically.",
    tags: ["Kubernetes", "Secrets", "stringData"]
  },
  {
    id: "k8s-ckad-fc-190",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ResourceQuota: Quota Scopes",
    hint: "Filtering quota enforcement to specific pod types.",
    back: "Use <strong>spec.scopes: [Terminating]</strong> in ResourceQuotas to enforce resource boundaries exclusively on ephemeral batch workloads.",
    tags: ["Kubernetes", "ResourceQuota", "Quota Scopes"]
  },
  {
    id: "k8s-ckad-fc-191",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: Aggregated ClusterRoles",
    hint: "Dynamically extending built-in admin roles.",
    back: "Label ClusterRoles with <strong>aggregate-to-admin: 'true'</strong> to dynamically append CRD permissions into standard Kubernetes admin roles.",
    tags: ["Kubernetes", "RBAC", "Aggregated ClusterRoles"]
  },
  {
    id: "k8s-ckad-fc-192",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext: seLinuxOptions",
    hint: "Enforcing Mandatory Access Control labels.",
    back: "Configure <strong>seLinuxOptions</strong> to assign explicit SELinux security contexts (user, role, type, level) to container processes.",
    tags: ["Kubernetes", "SELinux", "SecurityContext"]
  },
  {
    id: "k8s-ckad-fc-193",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "StorageClasses: reclaimPolicy Delete",
    hint: "Automating cloud storage cleanup.",
    back: "Set <strong>reclaimPolicy: Delete</strong> in StorageClasses to automatically purge external cloud disks when developers delete PVCs.",
    tags: ["Kubernetes", "StorageClass", "reclaimPolicy"]
  },
  {
    id: "k8s-ckad-fc-194",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "LimitRange: maxLimitRequestRatio",
    hint: "Bounding bursting ratios.",
    back: "Configure <strong>maxLimitRequestRatio</strong> in a LimitRange to prevent extreme differences between container requests and limits.",
    tags: ["Kubernetes", "LimitRange", "maxLimitRequestRatio"]
  },
  {
    id: "k8s-ckad-fc-195",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ServiceAccount Tokens: Automated SDK Refresh",
    hint: "Transparent rotation in client libraries.",
    back: "The kubelet updates token files on disk before expiry; <strong>client-go re-reads updated tokens automatically</strong> with zero downtime.",
    tags: ["Kubernetes", "ServiceAccount", "Token Rotation"]
  },
  {
    id: "k8s-ckad-fc-196",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "PVC Sizing: Expansion vs Shrinking",
    hint: "Why PVCs cannot be decreased.",
    back: "Kubernetes supports <strong>expanding PVC storage only</strong>; decreasing PVC capacity is prohibited across all storage drivers.",
    tags: ["Kubernetes", "Storage", "Volume Expansion"]
  },
  {
    id: "k8s-ckad-fc-197",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext: sysctls",
    hint: "Configuring namespaced Linux kernel parameters.",
    back: "Configure <strong>spec.securityContext.sysctls</strong> to tune namespaced Linux network and kernel parameters directly from pod manifests.",
    tags: ["Kubernetes", "sysctls", "SecurityContext"]
  },
  {
    id: "k8s-ckad-fc-198",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMaps: binaryData Field",
    hint: "Storing non-UTF-8 binary assets in ConfigMaps.",
    back: "Use the <strong>binaryData</strong> field in ConfigMaps to store base64-encoded binary assets (e.g. certificates, compressed archives).",
    tags: ["Kubernetes", "ConfigMap", "binaryData"]
  },
  {
    id: "k8s-ckad-fc-199",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Resources: ephemeral-storage",
    hint: "Bounding local disk consumption.",
    back: "Specify <strong>limits.ephemeral-storage</strong> on containers to prevent runaway scratch writes from exhausting node disk capacity.",
    tags: ["Kubernetes", "ephemeral-storage", "Resource Limits"]
  },
  {
    id: "k8s-ckad-fc-200",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Security: EncryptionConfiguration",
    hint: "Encrypting secrets at rest in etcd.",
    back: "Deploy an <strong>EncryptionConfiguration</strong> on kube-apiserver to cryptographically encrypt Secrets before persisting them to etcd.",
    tags: ["Kubernetes", "etcd Encryption", "Data at Rest"]
  }
];

export default K8S_CKAD_FLASHCARDS_8;
