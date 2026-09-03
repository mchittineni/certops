export const K8S_CKAD_FLASHCARDS_3 = [
  {
    id: "k8s-ckad-fc-51",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: maxSurge and maxUnavailable",
    hint: "Zero-downtime rolling update tuning.",
    back: "Configure <strong>maxUnavailable: 0</strong> and <strong>maxSurge: 3</strong> to ensure 100% serving capacity is preserved while bursting up to 3 temporary new pods during updates.",
    tags: ["Kubernetes", "Deployments", "RollingUpdate"]
  },
  {
    id: "k8s-ckad-fc-52",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: Recreate Strategy",
    hint: "Terminating all pods before launching new versions.",
    back: "Use <strong>strategy: { type: Recreate }</strong> when workloads cannot tolerate concurrent version execution or share single-writer RWO volumes.",
    tags: ["Kubernetes", "Deployments", "Recreate Strategy"]
  },
  {
    id: "k8s-ckad-fc-53",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: kubectl rollout undo",
    hint: "Reverting deployments to previous revisions.",
    back: "Execute <strong>kubectl rollout undo deployment/&lt;name&gt;</strong> to instantly revert a broken deployment to its prior working revision.",
    tags: ["Kubernetes", "kubectl rollout", "Rollback"]
  },
  {
    id: "k8s-ckad-fc-54",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: Pause & Resume",
    hint: "Batching multiple manifest changes into one rollout.",
    back: "Use <strong>kubectl rollout pause</strong> before applying multiple changes, followed by <strong>kubectl rollout resume</strong> to trigger a single combined rollout.",
    tags: ["Kubernetes", "Deployments", "Rollout Pause"]
  },
  {
    id: "k8s-ckad-fc-55",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: revisionHistoryLimit",
    hint: "Pruning obsolete ReplicaSets.",
    back: "Set <strong>revisionHistoryLimit: 5</strong> to restrict the number of historical ReplicaSets retained for rollbacks and keep namespaces tidy.",
    tags: ["Kubernetes", "Deployments", "revisionHistoryLimit"]
  },
  {
    id: "k8s-ckad-fc-56",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: Headless Service (clusterIP: None)",
    hint: "Providing stable per-pod DNS records.",
    back: "StatefulSets require a <strong>Headless Service (clusterIP: None)</strong> so CoreDNS can map stable individual DNS records directly to each sequential pod.",
    tags: ["Kubernetes", "StatefulSets", "Headless Service"]
  },
  {
    id: "k8s-ckad-fc-57",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: volumeClaimTemplates",
    hint: "Automated dedicated PVC provisioning per pod.",
    back: "<strong>volumeClaimTemplates</strong> dynamically provisions an independent PVC for each ordinal pod replica in a StatefulSet, binding storage permanently to pod identities.",
    tags: ["Kubernetes", "StatefulSets", "volumeClaimTemplates"]
  },
  {
    id: "k8s-ckad-fc-58",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: podManagementPolicy Parallel",
    hint: "Concurrent scaling for stateful pods.",
    back: "Set <strong>podManagementPolicy: Parallel</strong> on a StatefulSet to launch or terminate all stateful replicas concurrently instead of sequentially.",
    tags: ["Kubernetes", "StatefulSets", "podManagementPolicy"]
  },
  {
    id: "k8s-ckad-fc-59",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: DaemonSet Controller",
    hint: "Ensuring one pod per node.",
    back: "Use a <strong>DaemonSet</strong> to run background operational agents (e.g. node monitoring, log shipping) automatically on every node in the cluster.",
    tags: ["Kubernetes", "DaemonSet", "Node Agents"]
  },
  {
    id: "k8s-ckad-fc-60",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "DaemonSets: updateStrategy",
    hint: "RollingUpdate vs OnDelete.",
    back: "DaemonSets default to <strong>updateStrategy: RollingUpdate</strong>, updating one node's pod at a time; <strong>OnDelete</strong> waits for manual pod deletion.",
    tags: ["Kubernetes", "DaemonSet", "updateStrategy"]
  },
  {
    id: "k8s-ckad-fc-61",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment Patterns: Blue-Green Cutover",
    hint: "Instant traffic switching via Service selectors.",
    back: "Execute an instant Blue-Green cutover by updating the <strong>Service selector</strong> (e.g. from <code>version: v1</code> to <code>version: v2</code>) with zero downtime.",
    tags: ["Kubernetes", "Blue-Green", "Service Routing"]
  },
  {
    id: "k8s-ckad-fc-62",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment Patterns: Native Canary via Replicas",
    hint: "Weighted traffic via shared service selectors.",
    back: "Run two Deployments sharing the <strong>same Service selector</strong>; adjust replica counts (e.g. 9 v1 pods vs 1 v2 pod) to achieve a 10% canary traffic split.",
    tags: ["Kubernetes", "Canary", "Replica Ratios"]
  },
  {
    id: "k8s-ckad-fc-63",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: HorizontalPodAutoscaler (HPA)",
    hint: "Dynamic pod scaling on CPU and custom metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> monitors metrics (CPU, memory, custom metrics) and dynamically scales Deployment replica counts between minReplicas and maxReplicas.",
    tags: ["Kubernetes", "HPA", "Autoscaling"]
  },
  {
    id: "k8s-ckad-fc-64",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "HPA Prerequisite: Resource Requests",
    hint: "Why CPU requests are mandatory for HPA.",
    back: "HPA percentage utilization requires <strong>resources.requests</strong> on containers; without requests, the autoscaler cannot compute ratios and fails with <code>&lt;unknown&gt;</code>.",
    tags: ["Kubernetes", "HPA", "Resource Requests"]
  },
  {
    id: "k8s-ckad-fc-65",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "HPA: scaleDown Stabilization Window",
    hint: "Preventing flapping during temporary load drops.",
    back: "Configure <strong>behavior.scaleDown.stabilizationWindowSeconds</strong> (e.g. 300s) to ensure the HPA evaluates past peak load before terminating pods.",
    tags: ["Kubernetes", "HPA", "Stabilization Window"]
  },
  {
    id: "k8s-ckad-fc-66",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "VPA: updateMode Off",
    hint: "Non-intrusive resource recommendation generation.",
    back: "Set <strong>updateMode: Off</strong> in VPA to generate accurate CPU and memory sizing recommendations without restarting running pods.",
    tags: ["Kubernetes", "VPA", "Resource Sizing"]
  },
  {
    id: "k8s-ckad-fc-67",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize: Bases & Overlays",
    hint: "DRY environment management without templating.",
    back: "Structure configurations with a shared <strong>base/</strong> directory and environment-specific <strong>overlays/ (dev, staging, prod)</strong> applying targeted patches.",
    tags: ["Kubernetes", "Kustomize", "Overlays"]
  },
  {
    id: "k8s-ckad-fc-68",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize: configMapGenerator Hashing",
    hint: "Automated rolling restarts on config changes.",
    back: "<strong>configMapGenerator</strong> appends content hashes to ConfigMap names; updating the file modifies the pod template name reference, triggering an automatic rolling update.",
    tags: ["Kubernetes", "Kustomize", "configMapGenerator"]
  },
  {
    id: "k8s-ckad-fc-69",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize: JSON 6902 Patches",
    hint: "Surgical array index modifications.",
    back: "Use <strong>JSON 6902 patches</strong> (with <code>op: replace</code> and exact JSON paths) to target and modify specific array items in Kubernetes manifests.",
    tags: ["Kubernetes", "Kustomize", "JSON 6902"]
  },
  {
    id: "k8s-ckad-fc-70",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: Release Upgrades",
    hint: "Managing declarative application lifecycles.",
    back: "Run <strong>helm upgrade &lt;release&gt; &lt;chart&gt;</strong> to apply template and value modifications to an existing Kubernetes Helm release.",
    tags: ["Helm", "Package Management", "helm upgrade"]
  },
  {
    id: "k8s-ckad-fc-71",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: Dynamic Value Overrides (--set)",
    hint: "Injecting dynamic parameters in CI/CD.",
    back: "Use <strong>--set &lt;key&gt;=&lt;value&gt;</strong> on Helm CLI commands to override specific configuration parameters without altering values.yaml files.",
    tags: ["Helm", "--set", "CI/CD Deployment"]
  },
  {
    id: "k8s-ckad-fc-72",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: helm history",
    hint: "Auditing past release revisions.",
    back: "Run <strong>helm history &lt;release&gt;</strong> to audit release revisions, timestamps, and deployment statuses.",
    tags: ["Helm", "helm history", "Audit"]
  },
  {
    id: "k8s-ckad-fc-73",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: helm rollback",
    hint: "Reverting to specific revision numbers.",
    back: "Execute <strong>helm rollback &lt;release&gt; &lt;revision&gt;</strong> to roll back an application to an exact prior revision state.",
    tags: ["Helm", "helm rollback", "Disaster Recovery"]
  },
  {
    id: "k8s-ckad-fc-74",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "PodDisruptionBudget: minAvailable & maxUnavailable",
    hint: "Protecting applications during cluster maintenance.",
    back: "Define a PDB with <strong>minAvailable: 4</strong> to guarantee that voluntary node drains never reduce application capacity below 4 active pods.",
    tags: ["Kubernetes", "PDB", "High Availability"]
  },
  {
    id: "k8s-ckad-fc-75",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: kubectl rollout status",
    hint: "Blocking CI/CD until rollouts complete.",
    back: "Run <strong>kubectl rollout status deployment/&lt;name&gt; --timeout=300s</strong> in CI/CD scripts to verify healthy rollouts before marking pipeline steps successful.",
    tags: ["Kubernetes", "kubectl rollout status", "CI/CD Gates"]
  }
];

export default K8S_CKAD_FLASHCARDS_3;
