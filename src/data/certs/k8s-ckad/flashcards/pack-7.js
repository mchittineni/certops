export const K8S_CKAD_FLASHCARDS_7 = [
  {
    id: "k8s-ckad-fc-151",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: Dynamic Storage Provisioning",
    hint: "Automated disk and PV creation via StorageClasses.",
    back: "A <strong>StorageClass</strong> invokes cloud storage CSI drivers to dynamically create persistent disks and PVs upon PVC creation.",
    tags: ["Kubernetes", "StorageClass", "Dynamic Provisioning"]
  },
  {
    id: "k8s-ckad-fc-152",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "StorageClass: WaitForFirstConsumer",
    hint: "Aligning volume zones with pod scheduling.",
    back: "Set <strong>volumeBindingMode: WaitForFirstConsumer</strong> in StorageClasses to ensure storage is provisioned in the exact zone where the consuming pod is placed.",
    tags: ["Kubernetes", "StorageClass", "WaitForFirstConsumer"]
  },
  {
    id: "k8s-ckad-fc-153",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "StorageClasses: allowVolumeExpansion",
    hint: "Online dynamic disk resizing.",
    back: "Enable <strong>allowVolumeExpansion: true</strong> on StorageClasses to allow expanding existing PVC storage quotas in-place.",
    tags: ["Kubernetes", "StorageClass", "Volume Expansion"]
  },
  {
    id: "k8s-ckad-fc-154",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Secrets: kubernetes.io/tls",
    hint: "Standard TLS certificate and key storage.",
    back: "Use secret type <strong>kubernetes.io/tls</strong> (with keys <code>tls.crt</code> and <code>tls.key</code>) for ingress and web server HTTPS certificates.",
    tags: ["Kubernetes", "Secrets", "TLS Secrets"]
  },
  {
    id: "k8s-ckad-fc-155",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Secrets: Base64 Encoding vs Encryption",
    hint: "Why base64 is not security.",
    back: "Kubernetes Secret YAML values are only <strong>base64 encoded, not encrypted</strong>; true encryption requires KMS integration or etcd encryption-at-rest.",
    tags: ["Kubernetes", "Secrets", "Base64 Encoding"]
  },
  {
    id: "k8s-ckad-fc-156",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Volumes: projected Volumes",
    hint: "Consolidating multiple sources into one mount path.",
    back: "Use <strong>projected volumes</strong> to merge ConfigMaps, Secrets, and Downward API files into a single unified container directory.",
    tags: ["Kubernetes", "projected volumes", "Configuration"]
  },
  {
    id: "k8s-ckad-fc-157",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMap Volumes: defaultMode",
    hint: "Setting file permissions on mounted scripts.",
    back: "Configure <strong>defaultMode: 0755</strong> on ConfigMap volumes to grant execute permissions on mounted scripts.",
    tags: ["Kubernetes", "ConfigMap", "defaultMode"]
  },
  {
    id: "k8s-ckad-fc-158",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "SecurityContext: runAsNonRoot Validation",
    hint: "Failing containers that attempt root execution.",
    back: "Setting <strong>runAsNonRoot: true</strong> causes the kubelet to block container startup if the image executes as UID 0 (root).",
    tags: ["Kubernetes", "SecurityContext", "runAsNonRoot"]
  },
  {
    id: "k8s-ckad-fc-159",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ServiceAccounts: Bound ServiceAccount Tokens",
    hint: "Time-limited and audience-scoped API tokens.",
    back: "Modern Kubernetes mounts <strong>Bound ServiceAccount Tokens</strong> that are short-lived, auto-rotated, and cryptographically bound to specific pod instances.",
    tags: ["Kubernetes", "ServiceAccount", "Bound Tokens"]
  },
  {
    id: "k8s-ckad-fc-160",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMaps: Volume vs Env Update Propagation",
    hint: "Why environment variables do not live-reload.",
    back: "<strong>Mounted ConfigMap volumes update live</strong> within ~1 minute, but <strong>environment variables never update</strong> without restarting the pod.",
    tags: ["Kubernetes", "ConfigMap", "Update Propagation"]
  },
  {
    id: "k8s-ckad-fc-161",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMap Caveat: subPath Does Not Live-Update",
    hint: "Why subPath files remain frozen.",
    back: "Files mounted using <strong>subPath do NOT receive live updates</strong> when ConfigMaps change; live reload requires mounting full directory volumes.",
    tags: ["Kubernetes", "ConfigMap", "subPath Caveat"]
  },
  {
    id: "k8s-ckad-fc-162",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: nonResourceURLs",
    hint: "Granting access to raw API server paths.",
    back: "Use <strong>nonResourceURLs: ['/metrics']</strong> in ClusterRoles to authorize access to raw HTTP endpoints like metrics and healthz.",
    tags: ["Kubernetes", "RBAC", "nonResourceURLs"]
  },
  {
    id: "k8s-ckad-fc-163",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "RBAC: resourceNames Field",
    hint: "Locking permissions to exact object names.",
    back: "Specify <strong>resourceNames: ['object-name']</strong> in a Role to restrict access exclusively to specific named instances.",
    tags: ["Kubernetes", "RBAC", "resourceNames"]
  },
  {
    id: "k8s-ckad-fc-164",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes Scheduling: nodeSelector",
    hint: "Simple label-based node matching.",
    back: "Use <strong>spec.nodeSelector: { key: value }</strong> to restrict pod scheduling to nodes carrying matching key-value labels.",
    tags: ["Kubernetes", "nodeSelector", "Scheduling"]
  },
  {
    id: "k8s-ckad-fc-165",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Node Affinity: Hard vs Soft Scheduling",
    hint: "required vs preferred scheduling rules.",
    back: "<strong>requiredDuringScheduling</strong> enforces hard constraints (pods stay Pending if unmet); <strong>preferredDuringScheduling</strong> expresses soft preferences.",
    tags: ["Kubernetes", "Node Affinity", "Scheduling"]
  },
  {
    id: "k8s-ckad-fc-166",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Anti-Affinity: Host & Zone Spreading",
    hint: "Dispersing replicas across fault domains.",
    back: "Configure <strong>podAntiAffinity</strong> with <code>topologyKey: kubernetes.io/hostname</code> to prevent multiple replicas from co-locating on the same physical node.",
    tags: ["Kubernetes", "podAntiAffinity", "High Availability"]
  },
  {
    id: "k8s-ckad-fc-167",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: topologySpreadConstraints",
    hint: "Evenly balancing pods across zones.",
    back: "Use <strong>topologySpreadConstraints</strong> with <code>maxSkew: 1</code> to guarantee balanced pod distribution across failure zones.",
    tags: ["Kubernetes", "topologySpreadConstraints", "maxSkew"]
  },
  {
    id: "k8s-ckad-fc-168",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Taints & Tolerations: NoSchedule vs. NoExecute",
    hint: "Blocking new pods vs evicting existing pods.",
    back: "<strong>NoSchedule</strong> blocks new pods from placement while preserving running pods; <strong>NoExecute</strong> immediately evicts running pods lacking tolerations.",
    tags: ["Kubernetes", "Taints", "NoSchedule vs NoExecute"]
  },
  {
    id: "k8s-ckad-fc-169",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Tolerations: tolerationSeconds",
    hint: "Delaying pod eviction on failing nodes.",
    back: "Configure <strong>tolerationSeconds: 300</strong> on NoExecute tolerations to delay eviction during transient node network blips.",
    tags: ["Kubernetes", "Tolerations", "tolerationSeconds"]
  },
  {
    id: "k8s-ckad-fc-170",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: PriorityClass & Preemption",
    hint: "Evicting lower-priority pods for critical workloads.",
    back: "Assign a high-value <strong>PriorityClass</strong> to critical workloads so the scheduler preempts lower-priority pods when cluster capacity is full.",
    tags: ["Kubernetes", "PriorityClass", "Preemption"]
  },
  {
    id: "k8s-ckad-fc-171",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Kubernetes: Static Pods",
    hint: "Direct kubelet file manifest supervision.",
    back: "<strong>Static Pods</strong> are created directly by the node kubelet reading manifests from <code>/etc/kubernetes/manifests/</code>, powering control plane bootstrap.",
    tags: ["Kubernetes", "Static Pods", "Control Plane"]
  },
  {
    id: "k8s-ckad-fc-172",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Scheduling: nodeName",
    hint: "Bypassing the kube-scheduler completely.",
    back: "Assigning <strong>spec.nodeName: &lt;node&gt;</strong> places the pod directly on the target host, completely bypassing the kube-scheduler.",
    tags: ["Kubernetes", "nodeName", "Direct Scheduling"]
  },
  {
    id: "k8s-ckad-fc-173",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Pod Security Admission: Namespace Labels",
    hint: "enforce vs audit vs warn.",
    back: "Label namespaces with <strong>pod-security.kubernetes.io/enforce: restricted</strong> to actively reject pods violating the hardened security standard.",
    tags: ["Kubernetes", "Pod Security Admission", "enforce mode"]
  },
  {
    id: "k8s-ckad-fc-174",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "Container Security: Host Namespaces Risk",
    hint: "Breaking host-level process and network boundaries.",
    back: "Enabling <strong>hostNetwork, hostPID, or hostIPC</strong> disables container namespace isolation, exposing node-level networking and processes to attackers.",
    tags: ["Kubernetes", "Security", "Host Namespaces"]
  },
  {
    id: "k8s-ckad-fc-175",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    front: "ConfigMaps: Imperative CLI Creation",
    hint: "Creating configmaps from literals.",
    back: "Use <strong>kubectl create configmap &lt;name&gt; --from-literal=KEY=VAL</strong> to generate ConfigMaps directly from CLI arguments.",
    tags: ["Kubernetes", "kubectl create configmap", "Imperative CLI"]
  }
];

export default K8S_CKAD_FLASHCARDS_7;
