export const K8S_CKAD_QUESTIONS_7 = [
  {
    id: "k8s-ckad-151",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Dynamic Storage Provisioning with StorageClasses",
    scenario: "A developer creates a PersistentVolumeClaim requesting 50 GiB of SSD storage. No administrator manually pre-created a PersistentVolume.",
    question: "Which Kubernetes mechanism automatically provisions the underlying cloud storage disk and creates the PV dynamically?",
    options: [
      { id: 'A', text: "Static Volume Binding" },
      { id: 'B', text: "LimitRange" },
      { id: 'C', text: "ResourceQuota" },
      { id: 'D', text: "StorageClass with a dynamic provisioner" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `StorageClass` describes the parameters and provisioner plugin (e.g. `kubernetes.io/aws-ebs`, `pd.csi.storage.gke.io`) for dynamic storage. When a PVC references a StorageClass, the provisioner creates the underlying cloud disk and PV automatically.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/",
    tags: ["Kubernetes", "StorageClass", "Dynamic Provisioning"]
  },
  {
    id: "k8s-ckad-152",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "StorageClass volumeBindingMode: WaitForFirstConsumer",
    scenario: "A developer creates a PVC for a database pod. In a multi-zone cluster, provisioning the cloud disk immediately in `zone-a` causes pod scheduling to fail if worker nodes in `zone-a` lack sufficient CPU.",
    question: "Which StorageClass volumeBindingMode delays volume provisioning until a pod using the PVC is scheduled to a specific node and zone?",
    options: [
      { id: 'A', text: "volumeBindingMode: WaitForFirstConsumer" },
      { id: 'B', text: "volumeBindingMode: Immediate" },
      { id: 'C', text: "volumeBindingMode: Delayed" },
      { id: 'D', text: "volumeBindingMode: Lazy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`volumeBindingMode: WaitForFirstConsumer` instructs the storage provisioner to wait until the pod requesting the PVC has been scheduled to a specific worker node. This guarantees the volume is provisioned in the exact availability zone where the pod will run.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["Kubernetes", "StorageClass", "WaitForFirstConsumer"]
  },
  {
    id: "k8s-ckad-153",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "StorageClass allowVolumeExpansion for Dynamic PVC Resizing",
    scenario: "A database PVC with 100 GiB capacity is 95% full. The administrator wants to resize the PVC to 200 GiB by editing `spec.resources.requests.storage` without deleting the PVC or recreating data.",
    question: "Which setting on the StorageClass enables in-place volume resizing?",
    options: [
      { id: 'A', text: "volumeResizeMode: Online" },
      { id: 'B', text: "allowVolumeExpansion: true" },
      { id: 'C', text: "reclaimPolicy: Resize" },
      { id: 'D', text: "dynamicResize: true" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting `allowVolumeExpansion: true` on a `StorageClass` allows users to increase the size of an existing PVC by editing its requested storage capacity. The underlying CSI driver expands the cloud storage volume and resizes the filesystem online.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#allow-volume-expansion",
    tags: ["Kubernetes", "StorageClass", "Volume Expansion"]
  },
  {
    id: "k8s-ckad-154",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes Secrets: Opaque vs kubernetes.io/tls vs dockerconfigjson",
    scenario: "An administrator creates a Secret containing a TLS certificate (`tls.crt`) and private key (`tls.key`) for HTTPS ingress termination.",
    question: "Which standard Kubernetes Secret type is designated for storing TLS private keys and certificates?",
    options: [
      { id: 'A', text: "kubernetes.io/tls" },
      { id: 'B', text: "Opaque" },
      { id: 'C', text: "kubernetes.io/dockerconfigjson" },
      { id: 'D', text: "kubernetes.io/service-account-token" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubernetes.io/tls` is the dedicated Secret type for TLS credentials. It requires two specific keys in its data map: `tls.crt` (the certificate chain) and `tls.key` (the unencrypted private key), validated by ingress controllers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets",
    tags: ["Kubernetes", "Secrets", "TLS Secrets"]
  },
  {
    id: "k8s-ckad-155",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Kubernetes Secrets Base64 Encoding vs True Encryption",
    scenario: "A junior engineer believes that Kubernetes Secrets are encrypted by default because the values in YAML manifests are scrambled strings like YWRtaW4=.",
    question: "What security misconception is occurring regarding Kubernetes Secrets?",
    options: [
      { id: 'A', text: "Secrets are encrypted with hardware HSMs automatically in all clusters" },
      { id: 'B', text: "Base64 requires a private decryption key" },
      { id: 'C', text: "Base64 encoding is an obfuscation encoding scheme, NOT encryption; anyone can decode base64 strings instantaneously using standard command-line tools" },
      { id: 'D', text: "Base64 is an irreversible AES-256 hash" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Base64 encoding (`echo -n YWRtaW4= | base64 -d`) is trivial to decode and provides zero cryptographic security. True secret protection requires enabling `EncryptionConfiguration` at rest in etcd and using RBAC or external secret operators.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/#security-properties",
    tags: ["Kubernetes", "Secrets", "Base64 Encoding"]
  },
  {
    id: "k8s-ckad-156",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Projected Volumes: Consolidating ConfigMaps, Secrets, and Downward API",
    scenario: "A container needs configuration files from a ConfigMap, a TLS certificate from a Secret, and the pod name from the Downward API, all mounted into a single unified directory `/etc/app/config`.",
    question: "Which Kubernetes volume type combines multiple volume sources into a single directory?",
    options: [
      { id: 'A', text: "projected volume" },
      { id: 'B', text: "configMap volume alone" },
      { id: 'C', text: "emptyDir volume with copy script" },
      { id: 'D', text: "hostPath volume" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `projected` volume maps several existing volume sources (ConfigMaps, Secrets, DownwardAPI, ServiceAccountTokens) into the exact same directory, combining multiple configuration and credential streams cleanly without complex directory structures.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/projected-volumes/",
    tags: ["Kubernetes", "projected volumes", "Configuration"]
  },
  {
    id: "k8s-ckad-157",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap Volume File Permissions (defaultMode)",
    scenario: "A shell script stored in a ConfigMap is mounted into a container at `/bin/entrypoint.sh`. The container process fails to execute the script with a `Permission denied` error because files are mounted with default `0644` permissions.",
    question: "Which volume setting configures the POSIX execution permissions of mounted ConfigMap files?",
    options: [
      { id: 'A', text: "runAsUser: 0" },
      { id: 'B', text: "securityContext: { allowExecution: true }" },
      { id: 'C', text: "defaultMode: 0755 (or 493 in decimal)" },
      { id: 'D', text: "mode: executable" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`defaultMode` on a ConfigMap or Secret volume defines the octal POSIX permissions applied to all mounted files. Setting `defaultMode: 0755` (rwxr-xr-x) grants execute permissions to the container process.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/volumes/#configmap",
    tags: ["Kubernetes", "ConfigMap", "defaultMode"]
  },
  {
    id: "k8s-ckad-158",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod SecurityContext: runAsNonRoot Enforcement",
    scenario: "A container image was built without specifying a USER directive, defaulting to root (UID 0). The pod manifest configures `securityContext: { runAsNonRoot: true }`.",
    question: "What happens when the kubelet attempts to run this container?",
    options: [
      { id: 'A', text: "The node reboots" },
      { id: 'B', text: "The container fails to start with CreateContainerConfigError and logs a validation failure indicating the container would run as root" },
      { id: 'C', text: "The container runs normally as root" },
      { id: 'D', text: "Kubernetes automatically changes the user to UID 1000" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When `runAsNonRoot: true` is configured, the kubelet validates the container image before startup. If the image specifies UID 0 or omits the USER directive, the kubelet refuses to start the container, failing with `CreateContainerConfigError`.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod",
    tags: ["Kubernetes", "SecurityContext", "runAsNonRoot"]
  },
  {
    id: "k8s-ckad-159",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Bound Service Account Token Volume Projection",
    scenario: "Modern Kubernetes versions (v1.22+) use the TokenRequest API for projected ServiceAccount tokens.",
    question: "How do these modern bound tokens differ from legacy Secret-based tokens?",
    options: [
      { id: 'A', text: "Bound tokens are time-limited (expiring after 1 hour), auditable, and cryptographically bound to the specific pod instance and cluster audience" },
      { id: 'B', text: "Bound tokens never expire" },
      { id: 'C', text: "Bound tokens can be reused on any cluster in the world" },
      { id: 'D', text: "Bound tokens are stored in plain text files in Git" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bound ServiceAccount tokens generated via the `TokenRequest` API are time-bound (automatically refreshed by the kubelet before expiry), audience-bound, and pod-bound (invalidated when the pod terminates), eliminating long-lived static credential leakage risks.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#service-account-token-volume-projection",
    tags: ["Kubernetes", "ServiceAccount", "Bound Tokens"]
  },
  {
    id: "k8s-ckad-160",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap Updates Propagation to Mounted Volumes vs Environment Variables",
    scenario: "A developer updates a ConfigMap in the cluster. Some pods consume the ConfigMap as environment variables (`envFrom`), while other pods consume it as a mounted directory volume (`volumeMounts`).",
    question: "How do the running pods observe the configuration update?",
    options: [
      { id: 'A', text: "Pods with mounted directory volumes receive updated files within minutes; pods using environment variables NEVER update until they are restarted" },
      { id: 'B', text: "Both types of pods update immediately in real time" },
      { id: 'C', text: "Neither pod updates until cluster restart" },
      { id: 'D', text: "Environment variable pods update, but volume mounts do not" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a ConfigMap is updated, mounted directory volumes are automatically updated by the kubelet within its sync period (typically ~1 minute). However, environment variables are only injected once at container launch; pods consuming env vars never receive updates without a restart.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically",
    tags: ["Kubernetes", "ConfigMap", "Update Propagation"]
  },
  {
    id: "k8s-ckad-161",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap subPath Mounts Do Not Receive Automatic Live Updates",
    scenario: "A developer mounts a file from a ConfigMap using `subPath: app.properties`. When the ConfigMap is updated, the developer notices that `/etc/app.properties` inside the running container does not update even after 30 minutes.",
    question: "What causes this behavior in Kubernetes volume management?",
    options: [
      { id: 'A', text: "ConfigMaps can only be updated once per month" },
      { id: 'B', text: "The file is read-only" },
      { id: 'C', text: "Containers using subPath volume mounts do NOT receive automatic ConfigMap updates" },
      { id: 'D', text: "The kubelet has crashed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A well-documented Kubernetes caveat: containers using `subPath` volume mounts do NOT receive automatic updates when the backing ConfigMap or Secret changes. If live updating is required, the whole directory must be mounted without `subPath`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically",
    tags: ["Kubernetes", "ConfigMap", "subPath Caveat"]
  },
  {
    id: "k8s-ckad-162",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC ClusterRole for Non-Resource URLs (/healthz, /metrics)",
    scenario: "A Prometheus monitoring system needs RBAC permission to scrape the Kubernetes API server's `/metrics` endpoint.",
    question: "Which field in a ClusterRole defines authorization for non-resource URLs?",
    options: [
      { id: 'A', text: "resources: ['metrics']" },
      { id: 'B', text: "apiGroups: ['metrics.k8s.io']" },
      { id: 'C', text: "nonResourceURLs: ['/metrics'] with verbs: ['get']" },
      { id: 'D', text: "urlRules: ['/metrics']" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Most RBAC rules govern API resources (Pods, Deployments). For raw endpoints on the API server (such as `/healthz`, `/metrics`, or `/livez`), ClusterRoles use `nonResourceURLs: ['/metrics']` with allowed HTTP verbs like `get`.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["Kubernetes", "RBAC", "nonResourceURLs"]
  },
  {
    id: "k8s-ckad-163",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "RBAC ResourceNames for Restricting Access to Specific Named Objects",
    scenario: "A developer needs read access to a specific Secret named `database-creds`, but must be blocked from reading any other Secrets in the namespace.",
    question: "Which RBAC field restricts role permissions to specific named resource instances?",
    options: [
      { id: 'A', text: "objectFilter: database-creds" },
      { id: 'B', text: "matchNames: ['database-creds']" },
      { id: 'C', text: "resources: ['secrets/database-creds']" },
      { id: 'D', text: "resourceNames: ['database-creds']" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "RBAC rules can restrict permissions to individual named resource instances by specifying `resourceNames: ['database-creds']`. When specified, the verb applies exclusively to that exact named object.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources",
    tags: ["Kubernetes", "RBAC", "resourceNames"]
  },
  {
    id: "k8s-ckad-164",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod NodeSelector for Simple Key-Value Placement",
    scenario: "An analytics workload must be scheduled exclusively on worker nodes with high-speed SSD storage (labeled `disktype: ssd`).",
    question: "Which simple Pod specification field matches exact key-value labels on nodes?",
    options: [
      { id: 'A', text: "spec.tolerations: { disktype: ssd }" },
      { id: 'B', text: "spec.nodeSelector: { disktype: ssd }" },
      { id: 'C', text: "spec.affinity.nodeAffinity alone" },
      { id: 'D', text: "spec.nodeName: ssd" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`nodeSelector` is the simplest form of node selection constraint. It specifies a map of key-value pairs; for the pod to be eligible to run on a node, the node must have each of the indicated key-value labels.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector",
    tags: ["Kubernetes", "nodeSelector", "Scheduling"]
  },
  {
    id: "k8s-ckad-165",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Node Affinity: requiredDuringScheduling vs preferredDuringScheduling",
    scenario: "A machine learning training pod requires GPU nodes (`accelerator: nvidia`). The pod must never be scheduled on non-GPU nodes under any circumstances.",
    question: "Which Node Affinity rule enforces hard scheduling constraints?",
    options: [
      { id: 'A', text: "requiredDuringSchedulingIgnoredDuringExecution" },
      { id: 'B', text: "preferredDuringSchedulingIgnoredDuringExecution" },
      { id: 'C', text: "requiredDuringSchedulingRequiredDuringExecution" },
      { id: 'D', text: "nodeSelector soft preference" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`requiredDuringSchedulingIgnoredDuringExecution` specifies a hard scheduling requirement (must be met for pod to be placed on a node). `preferredDuringSchedulingIgnoredDuringExecution` specifies a soft preference that the scheduler attempts to honor without blocking scheduling if unmet.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity",
    tags: ["Kubernetes", "Node Affinity", "Scheduling"]
  },
  {
    id: "k8s-ckad-166",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Anti-Affinity for High-Availability Spreading",
    scenario: "A high-availability payment service runs 3 replicas. To survive physical hardware failures, no two replicas of this deployment should run on the same physical worker node.",
    question: "Which Kubernetes feature prevents co-locating matching pods on the same node using topologyKey?",
    options: [
      { id: 'A', text: "DaemonSet" },
      { id: 'B', text: "podAntiAffinity with topologyKey: kubernetes.io/hostname" },
      { id: 'C', text: "nodeSelector" },
      { id: 'D', text: "PodDisruptionBudget alone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`podAntiAffinity` allows architects to prevent pods from being co-located on nodes or zones that share a specified `topologyKey` (e.g. `kubernetes.io/hostname` or `topology.kubernetes.io/zone`), guaranteeing geographic or host dispersion for disaster resilience.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Kubernetes", "podAntiAffinity", "High Availability"]
  },
  {
    id: "k8s-ckad-167",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Topology Spread Constraints: maxSkew Mechanics",
    scenario: "A cluster spans 3 availability zones (`zone-a`, `zone-b`, `zone-c`). A Deployment running 6 pods must distribute replicas evenly across all 3 zones, allowing a maximum difference of 1 pod between any two zones.",
    question: "Which Kubernetes feature and parameter enforce balanced pod distribution across failure zones?",
    options: [
      { id: 'A', text: "ClusterAutoscaler zone balance flag" },
      { id: 'B', text: "podAffinity with maxPods: 2" },
      { id: 'C', text: "topologySpreadConstraints with topologyKey: topology.kubernetes.io/zone and maxSkew: 1" },
      { id: 'D', text: "nodeSelector alone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`topologySpreadConstraints` control how Pods are spread across failure domains (regions, zones, nodes). `maxSkew: 1` defines the maximum allowable degree of unbalance between any two topology domains matching the label selector.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Kubernetes", "topologySpreadConstraints", "maxSkew"]
  },
  {
    id: "k8s-ckad-168",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Taints and Tolerations: NoSchedule vs PreferNoSchedule vs NoExecute",
    scenario: "A dedicated node pool is reserved for memory-intensive machine learning workloads. Standard web pods must not be scheduled on these nodes, but existing web pods already on the node do not need to be evicted immediately.",
    question: "Which taint effect prevents new pods from scheduling while leaving running pods intact?",
    options: [
      { id: 'A', text: "effect: NoSchedule" },
      { id: 'B', text: "effect: PreferNoSchedule" },
      { id: 'C', text: "effect: Drain" },
      { id: 'D', text: "effect: NoExecute (which immediately evicts existing pods)" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes supports three taint effects: `NoSchedule` (new pods without a matching toleration are not scheduled on the node; existing pods are unaffected), `PreferNoSchedule` (soft preference against scheduling), and `NoExecute` (new pods cannot schedule AND existing pods without matching tolerations are evicted immediately).",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Kubernetes", "Taints", "NoSchedule vs NoExecute"]
  },
  {
    id: "k8s-ckad-169",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Tolerations with tolerationSeconds for Graceful Node Eviction",
    scenario: "When a worker node experiences network partitions or becomes `NotReady`, Kubernetes adds a `node.kubernetes.io/unreachable:NoExecute` taint. A database pod must remain on the node for up to 300 seconds to allow transient network blips to recover before being evicted.",
    question: "Which toleration configuration delays eviction on unreachable nodes?",
    options: [
      { id: 'A', text: "retryAfter: 300" },
      { id: 'B', text: "terminationGracePeriodSeconds: 300" },
      { id: 'C', text: "activeDeadlineSeconds: 300" },
      { id: 'D', text: "toleration: { key: node.kubernetes.io/unreachable, operator: Exists, effect: NoExecute, tolerationSeconds: 300 }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adding a toleration for `node.kubernetes.io/unreachable:NoExecute` with `tolerationSeconds: 300` allows the pod to remain bound to the failing node for 5 minutes before the eviction controller terminates it, preventing premature evictions during transient network drops.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions",
    tags: ["Kubernetes", "Tolerations", "tolerationSeconds"]
  },
  {
    id: "k8s-ckad-170",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "PriorityClasses and Pod Preemption Mechanics",
    scenario: "A cluster reaches 100% capacity. A critical production payment pod must be scheduled immediately. Kubernetes evicts lower-priority batch pods to free up node compute resources for the critical pod.",
    question: "Which Kubernetes mechanism defines scheduling priority and enables preemption of lower-priority pods?",
    options: [
      { id: 'A', text: "QoS Guaranteed class alone" },
      { id: 'B', text: "LimitRange" },
      { id: 'C', text: "ResourceQuota" },
      { id: 'D', text: "PriorityClass (with value: 1000000 and preemptionPolicy: PreemptLowerPriority)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `PriorityClass` maps a name to an integer value (higher values indicate higher priority). When a high-priority pod cannot be scheduled due to lack of resources, the scheduler preempts (evicts) lower-priority pods from a node to make room.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
    tags: ["Kubernetes", "PriorityClass", "Preemption"]
  },
  {
    id: "k8s-ckad-171",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Static Pods: Kubelet Directory Manifest Supervision (/etc/kubernetes/manifests)",
    scenario: "In a Kubernetes cluster, core control plane components like `kube-apiserver` and `etcd` run as pods on master nodes before the API server itself is functional.",
    question: "How are these core control plane pods created and managed by the kubelet without the API server?",
    options: [
      { id: 'A', text: "By Docker Compose" },
      { id: 'B', text: "By systemd daemons running outside containers" },
      { id: 'C', text: "As Static Pods, managed directly by the kubelet reading manifests from /etc/kubernetes/manifests" },
      { id: 'D', text: "By Helm install on boot" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`Static Pods` are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches a local directory (conventionally `/etc/kubernetes/manifests/`) and creates or restarts pods defined by YAML files placed in that directory.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Kubernetes", "Static Pods", "Control Plane"]
  },
  {
    id: "k8s-ckad-172",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Manual Pod Scheduling via nodeName",
    scenario: "A systems testing script needs to bypass the Kubernetes kube-scheduler entirely and place a pod directly on a specific worker node named `worker-node-03`.",
    question: "Which field in the Pod specification bypasses the scheduler and binds the pod directly to a node?",
    options: [
      { id: 'A', text: "spec.nodeName: worker-node-03" },
      { id: 'B', text: "spec.nodeSelector: { name: worker-node-03 }" },
      { id: 'C', text: "spec.hostName: worker-node-03" },
      { id: 'D', text: "spec.targetNode: worker-node-03" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`nodeName` is the most direct form of node selection. If `spec.nodeName` is populated in a pod manifest, the kube-scheduler ignores the pod, and the kubelet running on the designated node immediately attempts to instantiate the containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename",
    tags: ["Kubernetes", "nodeName", "Direct Scheduling"]
  },
  {
    id: "k8s-ckad-173",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Admission Labels on Namespaces (enforce, audit, warn)",
    scenario: "A cluster administrator configures the built-in Pod Security Admission controller. In namespace `finance`, pods violating the `restricted` profile must be blocked from creation immediately.",
    question: "Which namespace label enforces this restriction?",
    options: [
      { id: 'A', text: "pod-security.kubernetes.io/enforce: restricted" },
      { id: 'B', text: "pod-security.kubernetes.io/audit: restricted" },
      { id: 'C', text: "pod-security.kubernetes.io/warn: restricted" },
      { id: 'D', text: "security.k8s.io/mode: enforce" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod Security Admission uses namespace labels with three modes: `enforce` (rejects non-compliant pods immediately), `audit` (logs audit violations without blocking), and `warn` (returns human-readable CLI warnings to users while allowing creation).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-admission/",
    tags: ["Kubernetes", "Pod Security Admission", "enforce mode"]
  },
  {
    id: "k8s-ckad-174",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Host Namespaces Isolation Risks (hostNetwork, hostPID, hostIPC)",
    scenario: "A developer writes a pod manifest containing hostNetwork: true, hostPID: true, and hostIPC: true.",
    question: "Why does this configuration violate container isolation principles?",
    options: [
      { id: 'A', text: "It forces the pod to run on master nodes only" },
      { id: 'B', text: "Kubernetes does not support host namespaces" },
      { id: 'C', text: "It exposes the host node's network interfaces, process table, and shared memory to the container, bypassing Linux namespace isolation" },
      { id: 'D', text: "It slows down network throughput by 50%" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting `hostNetwork: true`, `hostPID: true`, or `hostIPC: true` removes fundamental Linux namespace isolation boundaries. The container sees all network traffic on the host, can inspect or signal other processes running on the host OS, and can intercept IPC mechanisms.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline",
    tags: ["Kubernetes", "Security", "Host Namespaces"]
  },
  {
    id: "k8s-ckad-175",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ConfigMap Creation from Literal vs Files with Kubectl",
    scenario: "A developer needs to create a ConfigMap named `app-config` with key `DB_HOST` set to `db.internal.net` and key `DB_PORT` set to `5432` using a single imperative command.",
    question: "Which kubectl command accomplishes this?",
    options: [
      { id: 'A', text: "kubectl create configmap app-config --from-literal=DB_HOST=db.internal.net --from-literal=DB_PORT=5432" },
      { id: 'B', text: "kubectl create configmap app-config --set DB_HOST=db.internal.net,DB_PORT=5432" },
      { id: 'C', text: "kubectl apply configmap app-config --data DB_HOST=db.internal.net" },
      { id: 'D', text: "kubectl configmap create app-config -l DB_HOST=db.internal.net" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubectl create configmap &lt;name&gt; --from-literal=&lt;key&gt;=&lt;value&gt;` allows setting multiple key-value pairs directly from CLI arguments without creating temporary files on disk.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-configmaps-from-literal-values",
    tags: ["Kubernetes", "kubectl create configmap", "Imperative CLI"]
  }
];

export default K8S_CKAD_QUESTIONS_7;
