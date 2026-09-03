export const K8S_CKAD_QUESTIONS_8 = [
  {
    id: "k8s-ckad-176",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secret Creation from File with Kubectl (kubectl create secret generic)",
    scenario: "A developer stores an API private key in a local file named `api-key.pem`. The developer needs to store this file inside a Kubernetes Secret named `api-secret` where the secret key is `key.pem`.",
    question: "Which kubectl command generates this Secret?",
    options: [
      { id: 'A', text: "kubectl apply secret api-secret -f api-key.pem" },
      { id: 'B', text: "kubectl create secret tls api-secret --key=api-key.pem" },
      { id: 'C', text: "kubectl create secret generic api-secret --from-file=key.pem=api-key.pem" },
      { id: 'D', text: "kubectl create secret api-secret --file=api-key.pem" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`kubectl create secret generic &lt;name&gt; --from-file=[key=]source-file` packages a local file into a secret key-value entry. Specifying `key.pem=api-key.pem` customizes the dictionary key name inside the secret.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/#create-a-secret",
    tags: ["Kubernetes", "kubectl create secret", "Secret Management"]
  },
  {
    id: "k8s-ckad-177",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolume Status Lifecycle: Available vs Bound vs Released vs Failed",
    scenario: "An administrator deletes a PersistentVolumeClaim (PVC), and the underlying PersistentVolume has reclaimPolicy: Retain.",
    question: "What status does the PersistentVolume transition to?",
    options: [
      { id: 'A', text: "Released" },
      { id: 'B', text: "Available" },
      { id: 'C', text: "Bound" },
      { id: 'D', text: "Failed" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the PV lifecycle: `Available` (ready to bind to a claim), `Bound` (attached to a PVC), `Released` (the claim was deleted, but the storage resource is not yet reclaimed), and `Failed` (automated reclamation failed).",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#phase",
    tags: ["Kubernetes", "Storage", "PV Phases"]
  },
  {
    id: "k8s-ckad-178",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolume Selector and Labels Matching",
    scenario: "An administrator creates a fast SSD PersistentVolume labeled `speed: fast`. A developer creates a PVC that must bind specifically to this SSD volume rather than standard spinning disks.",
    question: "Which PVC field matches labels on the PersistentVolume?",
    options: [
      { id: 'A', text: "spec.selector.matchLabels: { speed: fast }" },
      { id: 'B', text: "spec.storageClassName: fast alone" },
      { id: 'C', text: "spec.volumeName: fast" },
      { id: 'D', text: "spec.labels: { speed: fast }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PVCs support `spec.selector` (with `matchLabels` and `matchExpressions`). The persistent volume controller evaluates selectors against labels on available PVs, binding only to a PV with matching labels.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class-1",
    tags: ["Kubernetes", "Storage", "PV Selectors"]
  },
  {
    id: "k8s-ckad-179",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Raw Block Volume Provisioning (volumeMode: Block)",
    scenario: "A high-performance database requires direct, raw block device access without the overhead of an intermediate ext4 or xfs filesystem layer.",
    question: "Which setting on the PersistentVolume and PersistentVolumeClaim specifies a raw block device?",
    options: [
      { id: 'A', text: "accessMode: DirectIO" },
      { id: 'B', text: "volumeMode: Filesystem" },
      { id: 'C', text: "volumeMode: Block" },
      { id: 'D', text: "storageType: Raw" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes supports two `volumeMode` types: `Filesystem` (default, formatted with an OS filesystem) and `Block` (mounted as a raw block storage device inside the container using `volumeDevices` instead of `volumeMounts`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#raw-block-volume-support",
    tags: ["Kubernetes", "Raw Block Volumes", "Storage"]
  },
  {
    id: "k8s-ckad-180",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "StorageClass Default Annotation (storageclass.kubernetes.io/is-default-class)",
    scenario: "A developer creates a PersistentVolumeClaim without specifying storageClassName.",
    question: "How does Kubernetes determine which StorageClass to use for dynamic provisioning?",
    options: [
      { id: 'A', text: "It rejects the PVC with an error" },
      { id: 'B', text: "It uses local hostPath storage" },
      { id: 'C', text: "It uses the StorageClass annotated with storageclass.kubernetes.io/is-default-class: 'true'" },
      { id: 'D', text: "It uses the first StorageClass listed alphabetically" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a PVC omits `storageClassName`, Kubernetes checks for a StorageClass with the annotation `storageclass.kubernetes.io/is-default-class: \"true\"`. If found, that class is automatically used to dynamically provision the volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#default-storageclass",
    tags: ["Kubernetes", "StorageClass", "Default StorageClass"]
  },
  {
    id: "k8s-ckad-181",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PodSecurityContext: supplementalGroups for Secondary Group Access",
    scenario: "A container needs access to a file owned by secondary Linux group GID 5000.",
    question: "Which securityContext field adds supplementary group IDs to all processes in the pod?",
    options: [
      { id: 'A', text: "supplementalGroups: [5000]" },
      { id: 'B', text: "runAsGroup: 5000" },
      { id: 'C', text: "fsGroup: 5000" },
      { id: 'D', text: "groupList: [5000]" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`supplementalGroups` defines a list of secondary group IDs added to the first process run in each container in the Pod, allowing access to files owned by those group IDs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod",
    tags: ["Kubernetes", "SecurityContext", "supplementalGroups"]
  },
  {
    id: "k8s-ckad-182",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Linux Capabilities: NET_BIND_SERVICE for Low Port Binding",
    scenario: "An unprivileged container running as non-root user UID 10001 needs to bind to privileged TCP port 80 (ports < 1024).",
    question: "Which specific Linux capability grants permission to bind to privileged ports without running as root?",
    options: [
      { id: 'A', text: "CAP_NET_BIND_SERVICE" },
      { id: 'B', text: "CAP_SYS_ADMIN" },
      { id: 'C', text: "CAP_SETUID" },
      { id: 'D', text: "CAP_NET_ADMIN" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`CAP_NET_BIND_SERVICE` allows processes to bind to standard privileged network ports (< 1024) without requiring full root privileges (UID 0), maintaining least privilege for web servers.",
    referenceUrl: "https://man7.org/linux/man-pages/man7/capabilities.7.html",
    tags: ["Kubernetes", "Capabilities", "NET_BIND_SERVICE"]
  },
  {
    id: "k8s-ckad-183",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes Volume Mount Options (mountOptions in StorageClass)",
    scenario: "A storage administrator configures an NFS StorageClass that requires specific mount flags (nfsvers=4.1, noatime).",
    question: "Where are filesystem mount flags declared in Kubernetes?",
    options: [
      { id: 'A', text: "ConfigMap volume options" },
      { id: 'B', text: "spec.volumeMounts.options in the Pod" },
      { id: 'C', text: "Linux sysctl settings" },
      { id: 'D', text: "mountOptions field in the StorageClass (or PersistentVolume spec)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Filesystem mount options (such as `noatime`, `nfsvers=4.1`, `discard`) are configured in the `mountOptions` list in a `StorageClass` or `PersistentVolume` definition and passed directly to the OS `mount` command by the kubelet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options",
    tags: ["Kubernetes", "mountOptions", "Storage Tuning"]
  },
  {
    id: "k8s-ckad-184",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubelet Eviction Thresholds and Node Disk Pressure",
    scenario: "A worker node's root filesystem reaches 88% capacity, and the kubelet reports the DiskPressure condition to the control plane.",
    question: "Which pods does the kubelet evict first to reclaim disk space?",
    options: [
      { id: 'A', text: "Pods running in the BestEffort QoS class that consume the most disk space above requests" },
      { id: 'B', text: "Guaranteed QoS pods" },
      { id: 'C', text: "Pods with highest CPU limits" },
      { id: 'D', text: "System kube-proxy pods" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a node encounters resource pressure (MemoryPressure, DiskPressure), the kubelet evicts pods based on Quality of Service (QoS) and consumption. BestEffort pods without resource requests that consume the most resources are evicted first.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Kubernetes", "Node Eviction", "QoS Eviction"]
  },
  {
    id: "k8s-ckad-185",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Projected Volumes: Downward API Item Customization",
    scenario: "A developer uses a projected volume to expose pod labels to a file at /etc/podinfo/labels.",
    question: "How does the Downward API format labels inside the mounted file?",
    options: [
      { id: 'A', text: "As a YAML document" },
      { id: 'B', text: "As base64 encoded strings" },
      { id: 'C', text: "As standard key-value text pairs (labelKey=\"labelValue\" per line)" },
      { id: 'D', text: "As a JSON object" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When pod labels or annotations are projected via the Downward API, the kubelet writes them to the specified path as key-value lines formatted as `key=\"value\"`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/#capabilities-of-the-downward-api",
    tags: ["Kubernetes", "Downward API", "Projected Volumes"]
  },
  {
    id: "k8s-ckad-186",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "SecurityContext: AppArmor Profiles in Kubernetes 1.30+",
    scenario: "An enterprise security engineer enforces mandatory AppArmor profiles on all production containers.",
    question: "How is an AppArmor profile declared in Kubernetes 1.30+?",
    options: [
      { id: 'A', text: "In securityContext using appArmorProfile: { type: Localhost, localhostProfile: my-profile }" },
      { id: 'B', text: "Via pod annotations (container.apparmor.security.beta.kubernetes.io)" },
      { id: 'C', text: "In the Dockerfile ENTRYPOINT" },
      { id: 'D', text: "Through a custom bash script" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Starting in Kubernetes 1.30 (GA), AppArmor profiles are configured directly in the `securityContext` field (`appArmorProfile: { type: RuntimeDefault | Localhost }`) replacing legacy beta container annotations.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["Kubernetes", "AppArmor", "SecurityContext"]
  },
  {
    id: "k8s-ckad-187",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes Volume subPathExpr with Environment Variables",
    scenario: "A pod running in a multi-tenant StatefulSet needs each container to mount a directory on a shared volume that includes the pod's name dynamically (e.g. `/shared/$(POD_NAME)`).",
    question: "Which volumeMount property evaluates environment variables in the path?",
    options: [
      { id: 'A', text: "subPathExpr (e.g. subPathExpr: $(POD_NAME))" },
      { id: 'B', text: "subPath: $(POD_NAME)" },
      { id: 'C', text: "dynamicSubPath: $(POD_NAME)" },
      { id: 'D', text: "pathInterpolate: true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`subPathExpr` constructs a subPath directory using environment variables passed from the Downward API (e.g. `subPathExpr: $(POD_NAME)`), allowing multiple pods in a StatefulSet to isolate directory partitions on a shared volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#using-subpath-expanded-environment",
    tags: ["Kubernetes", "subPathExpr", "Dynamic Storage"]
  },
  {
    id: "k8s-ckad-188",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secret Key Name Validation Rules",
    scenario: "A developer creates a Kubernetes Secret containing configuration keys.",
    question: "Which characters are valid in Kubernetes Secret and ConfigMap data keys?",
    options: [
      { id: 'A', text: "Uppercase letters only" },
      { id: 'B', text: "Letters only without punctuation" },
      { id: 'C', text: "Alphanumeric characters, dashes (-), underscores (_), and dots (.) up to 253 characters" },
      { id: 'D', text: "Any UTF-8 character including spaces and slashes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Keys in `data` or `stringData` maps of ConfigMaps and Secrets must consist of alphanumeric characters, `-`, `_`, or `.`, and must not exceed 253 characters.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets",
    tags: ["Kubernetes", "Secrets", "Key Naming"]
  },
  {
    id: "k8s-ckad-189",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes stringData Field in Secrets",
    scenario: "A developer writes a Secret manifest in YAML and wants to avoid manually base64-encoding plaintext strings before pasting them.",
    question: "Which Secret field accepts raw unencoded strings?",
    options: [
      { id: 'A', text: "stringData" },
      { id: 'B', text: "rawSecrets" },
      { id: 'C', text: "data" },
      { id: 'D', text: "plainData" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `stringData` field allows creating Secrets with plaintext strings directly in YAML. When submitted to the API server, Kubernetes automatically converts `stringData` entries into base64-encoded `data` fields.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#overview-of-secrets",
    tags: ["Kubernetes", "Secrets", "stringData"]
  },
  {
    id: "k8s-ckad-190",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ResourceQuota Scopes (Terminating vs BestEffort)",
    scenario: "A cluster administrator wants to apply a ResourceQuota exclusively to ephemeral batch pods that run with active deadlines, without restricting long-running persistent service pods.",
    question: "Which ResourceQuota mechanism filters quota enforcement to specific pod categories?",
    options: [
      { id: 'A', text: "spec.scopes: [Terminating]" },
      { id: 'B', text: "spec.filter: { ephemeral: true }" },
      { id: 'C', text: "spec.selectors: [Jobs]" },
      { id: 'D', text: "spec.priorityLimit alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ResourceQuotas support `scopes`: `Terminating` (pods where `spec.activeDeadlineSeconds >= 0`), `NotTerminating` (pods with no deadline), `BestEffort` (best effort QoS), and `NotBestEffort`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/#quota-scopes",
    tags: ["Kubernetes", "ResourceQuota", "Quota Scopes"]
  },
  {
    id: "k8s-ckad-191",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC Aggregated ClusterRoles (rbac.authorization.k8s.io/aggregate-to-admin)",
    scenario: "A platform team installs a custom database operator providing custom `Database` CRDs. The operator wants cluster administrators to automatically gain permissions to manage `Database` resources without manually editing the built-in `admin` ClusterRole.",
    question: "Which RBAC feature combines multiple ClusterRoles into a unified role based on label selectors?",
    options: [
      { id: 'A', text: "Aggregated ClusterRoles (using aggregationRule.clusterRoleSelectors)" },
      { id: 'B', text: "RoleBindings" },
      { id: 'C', text: "ClusterRoleBindings" },
      { id: 'D', text: "Inherited Roles" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Aggregated ClusterRoles` use `aggregationRule` to dynamically merge permissions from other ClusterRoles carrying specific labels (e.g. `rbac.authorization.k8s.io/aggregate-to-admin: 'true'`) into built-in roles like `admin` or `edit`.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles",
    tags: ["Kubernetes", "RBAC", "Aggregated ClusterRoles"]
  },
  {
    id: "k8s-ckad-192",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod SecurityContext: seLinuxOptions Configuration",
    scenario: "An enterprise operating on Red Hat OpenShift or SELinux-enforced Kubernetes clusters requires a container to run with a specific SELinux type (`spc_t`) and level (`s0:c123,c456`).",
    question: "Which securityContext field defines SELinux labels for a container?",
    options: [
      { id: 'A', text: "securityContext.selinux: 'enforcing'" },
      { id: 'B', text: "securityContext.appArmorProfile" },
      { id: 'C', text: "securityContext.seLinuxOptions: { type: spc_t, level: 's0:c123,c456' }" },
      { id: 'D', text: "securityContext.capabilities" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`seLinuxOptions` in container or pod `securityContext` assigns SELinux labels (`user`, `role`, `type`, `level`) applied to container processes, integrating with host-level Mandatory Access Control (MAC).",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod",
    tags: ["Kubernetes", "SELinux", "SecurityContext"]
  },
  {
    id: "k8s-ckad-193",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "StorageClass Volume Reclaim Policy Configuration",
    scenario: "An enterprise platform team creates a StorageClass for development environments. All volumes dynamically provisioned by this StorageClass must automatically delete their underlying cloud disks when PVCs are deleted.",
    question: "Which StorageClass field configures this behavior?",
    options: [
      { id: 'A', text: "reclaimPolicy: Delete" },
      { id: 'B', text: "reclaimPolicy: Retain" },
      { id: 'C', text: "autoDelete: true" },
      { id: 'D', text: "cleanupPolicy: Purge" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `StorageClass` specifies the default `reclaimPolicy` for dynamically created PVs: `Delete` (deletes the underlying cloud disk upon PVC deletion) or `Retain` (preserves the cloud disk for manual recovery).",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#reclaim-policy",
    tags: ["Kubernetes", "StorageClass", "reclaimPolicy"]
  },
  {
    id: "k8s-ckad-194",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes LimitRange: maxLimitRequestRatio Parameter",
    scenario: "To prevent developers from configuring small CPU requests (to pass scheduling) and huge CPU limits (which can monopolize node CPU during bursts), an administrator wants to limit the ratio of limit to request to at most 3:1.",
    question: "Which LimitRange parameter restricts the maximum allowable ratio between limits and requests?",
    options: [
      { id: 'A', text: "maxBurstRatio: 3" },
      { id: 'B', text: "limitRatio: 3" },
      { id: 'C', text: "ratioCap: 3" },
      { id: 'D', text: "maxLimitRequestRatio: { cpu: 3 }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`maxLimitRequestRatio` in a `LimitRange` enforces a maximum ceiling on the ratio between a container's limit and request (e.g. limit cannot exceed 3x request), curbing aggressive bursting and ensuring fair scheduling.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/limit-range/#constraints-on-resource-quotas",
    tags: ["Kubernetes", "LimitRange", "maxLimitRequestRatio"]
  },
  {
    id: "k8s-ckad-195",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount Token Expiration and Refresh Mechanics",
    scenario: "A Go microservice uses the official client-go library inside a Kubernetes pod.",
    question: "How does the client handle the rotation of projected ServiceAccount tokens expiring every 1 hour?",
    options: [
      { id: 'A', text: "client-go automatically re-reads the token file from disk periodically before expiration, transparently handling token refreshes" },
      { id: 'B', text: "The client crashes with HTTP 401 and must be restarted by the kubelet" },
      { id: 'C', text: "The developer must write custom token rotation threads" },
      { id: 'D', text: "The application must restart every 60 minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The kubelet continuously refreshes projected token files on disk before expiration. Kubernetes SDKs (like `client-go`) automatically re-read the file periodically from disk, ensuring API requests continue without application restarts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#service-account-token-volume-projection",
    tags: ["Kubernetes", "ServiceAccount", "Token Rotation"]
  },
  {
    id: "k8s-ckad-196",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PersistentVolumeClaim Size Increase Online Behavior",
    scenario: "A developer edits a PVC to increase capacity from 50 GiB to 100 GiB.",
    question: "Can a PersistentVolumeClaim storage size be decreased in Kubernetes?",
    options: [
      { id: 'A', text: "Yes, PVCs can be shrunk anytime" },
      { id: 'B', text: "Only for NFS volumes" },
      { id: 'C', text: "Yes, if the pod is stopped" },
      { id: 'D', text: "No, Kubernetes and underlying storage provisioners do NOT support shrinking PVC sizes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Storage volume expansion is strictly one-way: storage volumes and filesystems can be expanded, but cannot be shrunk without data corruption. Attempting to reduce a PVC's storage request is rejected by the API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims",
    tags: ["Kubernetes", "Storage", "Volume Expansion"]
  },
  {
    id: "k8s-ckad-197",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod SecurityContext: Sysctls Configuration (safe vs unsafe sysctls)",
    scenario: "A high-throughput proxy pod needs to adjust kernel network parameters (e.g. net.ipv4.ip_local_port_range).",
    question: "Where are kernel parameters configured in a pod manifest?",
    options: [
      { id: 'A', text: "spec.securityContext.sysctls: [{ name: 'net.ipv4.ip_local_port_range', value: '1024 65535' }]" },
      { id: 'B', text: "In the container Dockerfile" },
      { id: 'C', text: "In ConfigMaps" },
      { id: 'D', text: "spec.containers[].sysctl" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`sysctls` are configured in `spec.securityContext.sysctls`. Kubernetes classifies sysctls into `safe` (namespaced and isolated, enabled by default) and `unsafe` (must be explicitly whitelisted on the kubelet daemon).",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/",
    tags: ["Kubernetes", "sysctls", "SecurityContext"]
  },
  {
    id: "k8s-ckad-198",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap Binary Data (binaryData Field)",
    scenario: "A developer needs to store a binary font file or gzip archive inside a Kubernetes ConfigMap.",
    question: "Which field stores base64-encoded binary content in a ConfigMap?",
    options: [
      { id: 'A', text: "binaryData" },
      { id: 'B', text: "data" },
      { id: 'C', text: "rawBytes" },
      { id: 'D', text: "blobData" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "While `data` contains standard UTF-8 string content, the `binaryData` field in a ConfigMap allows storing raw binary files encoded as base64 strings, decoded back into binary files when mounted as volumes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-object",
    tags: ["Kubernetes", "ConfigMap", "binaryData"]
  },
  {
    id: "k8s-ckad-199",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Ephemeral Storage Requests and Limits in Pods",
    scenario: "A batch pod downloads large temporary files into `/tmp` (mounted on local node disk). If the pod writes 50 GB to `/tmp`, it risks exhausting the node's disk.",
    question: "Which resource request and limit type bounds a container's local scratch storage usage?",
    options: [
      { id: 'A', text: "ephemeral-storage (e.g. limits: { ephemeral-storage: 10Gi })" },
      { id: 'B', text: "local-disk" },
      { id: 'C', text: "scratch-space" },
      { id: 'D', text: "disk-quota" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes supports `ephemeral-storage` in resource requests and limits. If a pod's local scratch disk usage (root filesystem, logs, and emptyDir volumes) exceeds its `limits.ephemeral-storage`, the kubelet evicts the pod to protect the node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage",
    tags: ["Kubernetes", "ephemeral-storage", "Resource Limits"]
  },
  {
    id: "k8s-ckad-200",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Secret Encryption at Rest in Etcd (EncryptionConfiguration)",
    scenario: "A compliance auditor inspects the physical etcd datastore and discovers that Secret values are stored as plain base64 text strings on the host disk.",
    question: "Which control plane configuration file enables cryptographic encryption-at-rest for Secrets in etcd?",
    options: [
      { id: 'A', text: "EncryptionConfiguration (passed to kube-apiserver via --encryption-provider-config)" },
      { id: 'B', text: "SecurityContext" },
      { id: 'C', text: "RBAC ClusterRole" },
      { id: 'D', text: "NetworkPolicy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`EncryptionConfiguration` instructs the `kube-apiserver` to encrypt resource data (such as Secrets) before writing them to `etcd` using providers like `aescbc`, `secretbox`, or external Cloud KMS plugins, ensuring at-rest data confidentiality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/",
    tags: ["Kubernetes", "etcd Encryption", "Data at Rest"]
  }
];

export default K8S_CKAD_QUESTIONS_8;
