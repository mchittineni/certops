export const K8S_CKAD_FLASHCARDS_4 = [
  {
    id: "k8s-ckad-fc-76",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: progressDeadlineSeconds",
    hint: "Detecting stalled rollouts.",
    back: "Set <strong>progressDeadlineSeconds</strong> to detect stalled rollouts (e.g. ImagePullBackOff) and trigger automated alerts or rollbacks.",
    tags: ["Kubernetes", "Deployments", "progressDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-fc-77",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: Reverse Ordinal Termination",
    hint: "Ordered shutdown for stateful clusters.",
    back: "StatefulSets scale down in <strong>reverse ordinal order</strong> (pod-2 terminates completely before pod-1 starts shutting down).",
    tags: ["Kubernetes", "StatefulSets", "Ordered Scaling"]
  },
  {
    id: "k8s-ckad-fc-78",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: PVC Retention Policy",
    hint: "Automated cleanup of ordinal PVCs.",
    back: "Configure <strong>persistentVolumeClaimRetentionPolicy</strong> with <code>whenDeleted: Delete</code> to automatically purge PVCs when tearing down test StatefulSets.",
    tags: ["Kubernetes", "StatefulSets", "PVC Retention"]
  },
  {
    id: "k8s-ckad-fc-79",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "DaemonSets: Selective Node Scheduling",
    hint: "Targeting specific nodes with nodeSelector.",
    back: "Use <strong>nodeSelector</strong> or <strong>nodeAffinity</strong> in the DaemonSet pod template to deploy daemons exclusively to specific hardware classes (e.g. GPU nodes).",
    tags: ["Kubernetes", "DaemonSet", "nodeSelector"]
  },
  {
    id: "k8s-ckad-fc-80",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: Taints & Tolerations",
    hint: "Scheduling DaemonSets on control-plane nodes.",
    back: "Add a matching <strong>toleration</strong> to the DaemonSet pod spec to permit execution on tainted control-plane nodes.",
    tags: ["Kubernetes", "DaemonSet", "Tolerations"]
  },
  {
    id: "k8s-ckad-fc-81",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: kubectl rollout restart",
    hint: "Zero-downtime pod restarts.",
    back: "Run <strong>kubectl rollout restart deployment/&lt;name&gt;</strong> to cleanly restart all pods via a rolling update without modifying manifests.",
    tags: ["Kubernetes", "kubectl rollout restart", "Zero-Downtime Restart"]
  },
  {
    id: "k8s-ckad-fc-82",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "GitOps: Automated Drift Reconciliation",
    hint: "Enforcing Git as the single source of truth.",
    back: "GitOps engines like <strong>ArgoCD and Flux</strong> continuously compare live cluster state against Git, automatically reverting manual console/kubectl modifications.",
    tags: ["GitOps", "ArgoCD", "Drift Reconciliation"]
  },
  {
    id: "k8s-ckad-fc-83",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: Chart.yaml Metadata File",
    hint: "Defining chart name and version.",
    back: "The <strong>Chart.yaml</strong> file contains mandatory package metadata including chart name, version, and appVersion.",
    tags: ["Helm", "Chart.yaml", "Package Structure"]
  },
  {
    id: "k8s-ckad-fc-84",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: Linting & Local Template Rendering",
    hint: "Verifying manifests before cluster deployment.",
    back: "Use <strong>helm lint</strong> for syntax checks and <strong>helm template</strong> to render and inspect generated YAML locally without cluster access.",
    tags: ["Helm", "helm template", "helm lint"]
  },
  {
    id: "k8s-ckad-fc-85",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize: namePrefix Transformer",
    hint: "Prepending environment prefixes to resource names.",
    back: "Use <strong>namePrefix: &lt;prefix&gt;</strong> in kustomization.yaml to automatically prepend strings (e.g. <code>staging-</code>) to all generated resource names.",
    tags: ["Kubernetes", "Kustomize", "namePrefix"]
  },
  {
    id: "k8s-ckad-fc-86",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize: commonLabels",
    hint: "Propagating labels across manifests and selectors.",
    back: "Configure <strong>commonLabels</strong> in kustomization.yaml to automatically apply standard labels to all resources and their workload selectors.",
    tags: ["Kubernetes", "Kustomize", "commonLabels"]
  },
  {
    id: "k8s-ckad-fc-87",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Blue-Green Deployments: Instant Rollback",
    hint: "Zero-downtime recovery.",
    back: "Rolling back a Blue-Green deployment is <strong>instantaneous</strong> because the old Blue pods are still running; repointing the Service selector redirects traffic in seconds.",
    tags: ["Kubernetes", "Blue-Green", "Disaster Recovery"]
  },
  {
    id: "k8s-ckad-fc-88",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Progressive Delivery: Flagger & Argo Rollouts",
    hint: "Automating metric-driven canary releases.",
    back: "Tools like <strong>Flagger and Argo Rollouts</strong> automate metric-driven canary promotions, rolling back if Prometheus latency or error rates degrade.",
    tags: ["Kubernetes", "Flagger", "Progressive Delivery"]
  },
  {
    id: "k8s-ckad-fc-89",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: OnDelete Strategy",
    hint: "Manual control over stateful node restart timing.",
    back: "Under <strong>updateStrategy: OnDelete</strong>, StatefulSet pods are only updated when an administrator manually deletes each pod, enabling controlled maintenance.",
    tags: ["Kubernetes", "StatefulSets", "OnDelete"]
  },
  {
    id: "k8s-ckad-fc-90",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "ReplicaSets: Pod Adoption via Selectors",
    hint: "Adopting existing pods matching labels.",
    back: "ReplicaSets acquire and manage any pod whose labels match their <strong>matchLabels</strong> selector, adopting orphan pods into their replica count.",
    tags: ["Kubernetes", "ReplicaSet", "Label Selectors"]
  },
  {
    id: "k8s-ckad-fc-91",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: RollingUpdate Partition",
    hint: "Canary testing on stateful ordinals.",
    back: "Set <strong>rollingUpdate.partition: 4</strong> on a StatefulSet to update only pods with index &ge; 4 (e.g. pod-4), creating a stateful canary rollout.",
    tags: ["Kubernetes", "StatefulSets", "Partition"]
  },
  {
    id: "k8s-ckad-fc-92",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: Immutable Selectors",
    hint: "Why spec.selector cannot be altered after creation.",
    back: "The <strong>spec.selector</strong> on a Kubernetes Deployment is <strong>immutable</strong>; modifying it is rejected by the API server and requires a new Deployment.",
    tags: ["Kubernetes", "Deployments", "Selector Immutability"]
  },
  {
    id: "k8s-ckad-fc-93",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes: CronJob Controller",
    hint: "Automated cron-scheduled batch workloads.",
    back: "<strong>CronJobs</strong> schedule batch workloads using standard crontab syntax, spawning standard Kubernetes <strong>Jobs</strong> on each trigger.",
    tags: ["Kubernetes", "CronJobs", "Job Scheduling"]
  },
  {
    id: "k8s-ckad-fc-94",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: Chart Dependencies",
    hint: "Declaring subcharts in Chart.yaml.",
    back: "In Helm 3, declare subchart dependencies in the <strong>dependencies list inside Chart.yaml</strong> and download them using <code>helm dependency update</code>.",
    tags: ["Helm", "Chart Dependencies", "Helm 3"]
  },
  {
    id: "k8s-ckad-fc-95",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: minReadySeconds",
    hint: "Preventing premature old pod termination.",
    back: "Set <strong>minReadySeconds: 15</strong> to ensure new pods remain Ready for at least 15 seconds before the Deployment proceeds to terminate older replicas.",
    tags: ["Kubernetes", "Deployments", "minReadySeconds"]
  },
  {
    id: "k8s-ckad-fc-96",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "GitOps Secret Management: Sealed Secrets",
    hint: "Encrypting secrets for safe Git storage.",
    back: "Use <strong>Sealed Secrets</strong> to encrypt credentials into Git-safe Custom Resources that only the cluster-internal controller can decrypt.",
    tags: ["Kubernetes", "Sealed Secrets", "GitOps Security"]
  },
  {
    id: "k8s-ckad-fc-97",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm: --dry-run Simulation",
    hint: "Server-side schema validation without deploying.",
    back: "Run <strong>helm install --dry-run</strong> to submit rendered manifests to the Kubernetes API server for validation without creating cluster resources.",
    tags: ["Helm", "Dry-Run", "Validation"]
  },
  {
    id: "k8s-ckad-fc-98",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployments: spec.paused Status",
    hint: "Verifying paused rollout states.",
    back: "Check <strong>spec.paused: true</strong> in <code>kubectl get deployment &lt;name&gt; -o yaml</code> to confirm whether a deployment is paused.",
    tags: ["Kubernetes", "Deployments", "spec.paused"]
  },
  {
    id: "k8s-ckad-fc-99",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSets: Pod DNS FQDN Pattern",
    hint: "&lt;pod&gt;.&lt;service&gt;.&lt;ns&gt;.svc.cluster.local.",
    back: "StatefulSet pods resolve via predictable FQDNs: <strong>&lt;pod-name&gt;.&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local</strong>.",
    tags: ["Kubernetes", "StatefulSets", "CoreDNS"]
  },
  {
    id: "k8s-ckad-fc-100",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kubernetes Controllers: Workload Selection",
    hint: "Deployments vs StatefulSets vs DaemonSets.",
    back: "Match workloads to controllers: <strong>Deployment</strong> for stateless services, <strong>StatefulSet</strong> for clustered databases, and <strong>DaemonSet</strong> for node-level agents.",
    tags: ["Kubernetes", "Workload Controllers", "Architecture"]
  }
];

export default K8S_CKAD_FLASHCARDS_4;
