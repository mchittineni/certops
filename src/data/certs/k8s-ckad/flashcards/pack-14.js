export const K8S_CKAD_FLASHCARDS_14 = [
  {
    id: "k8s-ckad-fc-326",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "CronJob startingDeadlineSeconds and concurrencyPolicy (Dr Failover)",
    hint: "Preventing overlapping runs and queued job avalanches after outages.",
    back: "Configuring <strong>startingDeadlineSeconds</strong> drops stale executions after outages, while <strong>concurrencyPolicy: Forbid</strong> prevents overlapping CronJob runs from exhausting cluster resources.",
    tags: ["CronJob Management", "CronJob Policies", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-327",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "CronJob startingDeadlineSeconds and concurrencyPolicy (High Load Scale)",
    hint: "Preventing overlapping runs and queued job avalanches after outages.",
    back: "Configuring <strong>startingDeadlineSeconds</strong> drops stale executions after outages, while <strong>concurrencyPolicy: Forbid</strong> prevents overlapping CronJob runs from exhausting cluster resources.",
    tags: ["CronJob Management", "CronJob Policies", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-328",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "CronJob startingDeadlineSeconds and concurrencyPolicy (Security Compliance)",
    hint: "Preventing overlapping runs and queued job avalanches after outages.",
    back: "Configuring <strong>startingDeadlineSeconds</strong> drops stale executions after outages, while <strong>concurrencyPolicy: Forbid</strong> prevents overlapping CronJob runs from exhausting cluster resources.",
    tags: ["CronJob Management", "CronJob Policies", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-329",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "CronJob startingDeadlineSeconds and concurrencyPolicy (Hybrid Migration)",
    hint: "Preventing overlapping runs and queued job avalanches after outages.",
    back: "Configuring <strong>startingDeadlineSeconds</strong> drops stale executions after outages, while <strong>concurrencyPolicy: Forbid</strong> prevents overlapping CronJob runs from exhausting cluster resources.",
    tags: ["CronJob Management", "CronJob Policies", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-330",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "CronJob startingDeadlineSeconds and concurrencyPolicy (Resilience Failure)",
    hint: "Preventing overlapping runs and queued job avalanches after outages.",
    back: "Configuring <strong>startingDeadlineSeconds</strong> drops stale executions after outages, while <strong>concurrencyPolicy: Forbid</strong> prevents overlapping CronJob runs from exhausting cluster resources.",
    tags: ["CronJob Management", "CronJob Policies", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-331",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSet Parallel Pod Management (Dr Failover)",
    hint: "Launching and terminating stateful replicas concurrently without ordinal delays.",
    back: "Setting <strong>podManagementPolicy: Parallel</strong> on a StatefulSet creates and terminates replicas concurrently, eliminating sequential ordinal delays for workloads that do not need ordered startup.",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-332",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSet Parallel Pod Management (High Load Scale)",
    hint: "Launching and terminating stateful replicas concurrently without ordinal delays.",
    back: "Setting <strong>podManagementPolicy: Parallel</strong> on a StatefulSet creates and terminates replicas concurrently, eliminating sequential ordinal delays for workloads that do not need ordered startup.",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-333",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSet Parallel Pod Management (Security Compliance)",
    hint: "Launching and terminating stateful replicas concurrently without ordinal delays.",
    back: "Setting <strong>podManagementPolicy: Parallel</strong> on a StatefulSet creates and terminates replicas concurrently, eliminating sequential ordinal delays for workloads that do not need ordered startup.",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-334",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSet Parallel Pod Management (Hybrid Migration)",
    hint: "Launching and terminating stateful replicas concurrently without ordinal delays.",
    back: "Setting <strong>podManagementPolicy: Parallel</strong> on a StatefulSet creates and terminates replicas concurrently, eliminating sequential ordinal delays for workloads that do not need ordered startup.",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-335",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "StatefulSet Parallel Pod Management (Resilience Failure)",
    hint: "Launching and terminating stateful replicas concurrently without ordinal delays.",
    back: "Setting <strong>podManagementPolicy: Parallel</strong> on a StatefulSet creates and terminates replicas concurrently, eliminating sequential ordinal delays for workloads that do not need ordered startup.",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-336",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment revisionHistoryLimit (Dr Failover)",
    hint: "Pruning obsolete ReplicaSets to maintain API server hygiene.",
    back: "Setting <strong>revisionHistoryLimit</strong> on Deployments caps the number of retained ReplicaSets, enabling quick rollbacks while pruning old objects to prevent API server resource bloat.",
    tags: ["Resource Hygiene", "Revision History", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-337",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment revisionHistoryLimit (High Load Scale)",
    hint: "Pruning obsolete ReplicaSets to maintain API server hygiene.",
    back: "Setting <strong>revisionHistoryLimit</strong> on Deployments caps the number of retained ReplicaSets, enabling quick rollbacks while pruning old objects to prevent API server resource bloat.",
    tags: ["Resource Hygiene", "Revision History", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-338",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment revisionHistoryLimit (Security Compliance)",
    hint: "Pruning obsolete ReplicaSets to maintain API server hygiene.",
    back: "Setting <strong>revisionHistoryLimit</strong> on Deployments caps the number of retained ReplicaSets, enabling quick rollbacks while pruning old objects to prevent API server resource bloat.",
    tags: ["Resource Hygiene", "Revision History", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-339",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment revisionHistoryLimit (Hybrid Migration)",
    hint: "Pruning obsolete ReplicaSets to maintain API server hygiene.",
    back: "Setting <strong>revisionHistoryLimit</strong> on Deployments caps the number of retained ReplicaSets, enabling quick rollbacks while pruning old objects to prevent API server resource bloat.",
    tags: ["Resource Hygiene", "Revision History", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-340",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Deployment revisionHistoryLimit (Resilience Failure)",
    hint: "Pruning obsolete ReplicaSets to maintain API server hygiene.",
    back: "Setting <strong>revisionHistoryLimit</strong> on Deployments caps the number of retained ReplicaSets, enabling quick rollbacks while pruning old objects to prevent API server resource bloat.",
    tags: ["Resource Hygiene", "Revision History", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-341",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm Chart Packaging and Values Overrides (Dr Failover)",
    hint: "Managing parameterized multi-tier deployments across environments.",
    back: "<strong>Helm charts</strong> package parameterized Kubernetes manifests, allowing teams to deploy consistent architectures across multiple environments using environment-specific <code>values.yaml</code> overrides.",
    tags: ["Package Management", "Helm Charts", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-342",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm Chart Packaging and Values Overrides (High Load Scale)",
    hint: "Managing parameterized multi-tier deployments across environments.",
    back: "<strong>Helm charts</strong> package parameterized Kubernetes manifests, allowing teams to deploy consistent architectures across multiple environments using environment-specific <code>values.yaml</code> overrides.",
    tags: ["Package Management", "Helm Charts", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-343",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm Chart Packaging and Values Overrides (Security Compliance)",
    hint: "Managing parameterized multi-tier deployments across environments.",
    back: "<strong>Helm charts</strong> package parameterized Kubernetes manifests, allowing teams to deploy consistent architectures across multiple environments using environment-specific <code>values.yaml</code> overrides.",
    tags: ["Package Management", "Helm Charts", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-344",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm Chart Packaging and Values Overrides (Hybrid Migration)",
    hint: "Managing parameterized multi-tier deployments across environments.",
    back: "<strong>Helm charts</strong> package parameterized Kubernetes manifests, allowing teams to deploy consistent architectures across multiple environments using environment-specific <code>values.yaml</code> overrides.",
    tags: ["Package Management", "Helm Charts", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-345",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Helm Chart Packaging and Values Overrides (Resilience Failure)",
    hint: "Managing parameterized multi-tier deployments across environments.",
    back: "<strong>Helm charts</strong> package parameterized Kubernetes manifests, allowing teams to deploy consistent architectures across multiple environments using environment-specific <code>values.yaml</code> overrides.",
    tags: ["Package Management", "Helm Charts", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-fc-346",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize Base and Overlay Customizations (Dr Failover)",
    hint: "Template-free declarative manifest management across environments.",
    back: "<strong>Kustomize</strong> manages environment differences through declarative bases and overlays (patches, image tags, namespaces), offering clean configuration customization natively within <code>kubectl -k</code>.",
    tags: ["Manifest Customization", "Kustomize", "Dr Failover"]
  },
  {
    id: "k8s-ckad-fc-347",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize Base and Overlay Customizations (High Load Scale)",
    hint: "Template-free declarative manifest management across environments.",
    back: "<strong>Kustomize</strong> manages environment differences through declarative bases and overlays (patches, image tags, namespaces), offering clean configuration customization natively within <code>kubectl -k</code>.",
    tags: ["Manifest Customization", "Kustomize", "High Load Scale"]
  },
  {
    id: "k8s-ckad-fc-348",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize Base and Overlay Customizations (Security Compliance)",
    hint: "Template-free declarative manifest management across environments.",
    back: "<strong>Kustomize</strong> manages environment differences through declarative bases and overlays (patches, image tags, namespaces), offering clean configuration customization natively within <code>kubectl -k</code>.",
    tags: ["Manifest Customization", "Kustomize", "Security Compliance"]
  },
  {
    id: "k8s-ckad-fc-349",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize Base and Overlay Customizations (Hybrid Migration)",
    hint: "Template-free declarative manifest management across environments.",
    back: "<strong>Kustomize</strong> manages environment differences through declarative bases and overlays (patches, image tags, namespaces), offering clean configuration customization natively within <code>kubectl -k</code>.",
    tags: ["Manifest Customization", "Kustomize", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-fc-350",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    front: "Kustomize Base and Overlay Customizations (Resilience Failure)",
    hint: "Template-free declarative manifest management across environments.",
    back: "<strong>Kustomize</strong> manages environment differences through declarative bases and overlays (patches, image tags, namespaces), offering clean configuration customization natively within <code>kubectl -k</code>.",
    tags: ["Manifest Customization", "Kustomize", "Resilience Failure"]
  }
];

export default K8S_CKAD_FLASHCARDS_14;
