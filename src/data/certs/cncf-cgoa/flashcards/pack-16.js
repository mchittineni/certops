export const CNCF_CGOA_FLASHCARDS_16 = [
  {
    id: "cncf-cgoa-fc-376",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Component Architecture (Dr Failover)",
    hint: "Decomposing duties between API server, repo-server, and application-controller.",
    back: "The <strong>argocd-repo-server</strong> clones repositories and renders manifests, while the <strong>application-controller</strong> compares live cluster state against desired state to drive sync operations.",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-377",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Component Architecture (High Load Scale)",
    hint: "Decomposing duties between API server, repo-server, and application-controller.",
    back: "The <strong>argocd-repo-server</strong> clones repositories and renders manifests, while the <strong>application-controller</strong> compares live cluster state against desired state to drive sync operations.",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-378",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Component Architecture (Security Compliance)",
    hint: "Decomposing duties between API server, repo-server, and application-controller.",
    back: "The <strong>argocd-repo-server</strong> clones repositories and renders manifests, while the <strong>application-controller</strong> compares live cluster state against desired state to drive sync operations.",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-379",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Component Architecture (Hybrid Migration)",
    hint: "Decomposing duties between API server, repo-server, and application-controller.",
    back: "The <strong>argocd-repo-server</strong> clones repositories and renders manifests, while the <strong>application-controller</strong> compares live cluster state against desired state to drive sync operations.",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-380",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Component Architecture (Resilience Failure)",
    hint: "Decomposing duties between API server, repo-server, and application-controller.",
    back: "The <strong>argocd-repo-server</strong> clones repositories and renders manifests, while the <strong>application-controller</strong> compares live cluster state against desired state to drive sync operations.",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-381",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Automated Sync with Prune and SelfHeal (Dr Failover)",
    hint: "Achieving full continuous convergence and automated drift remediation.",
    back: "Configuring <strong>automated sync with prune: true and selfHeal: true</strong> ensures Argo CD automatically deploys new commits, removes orphaned resources, and reverts out-of-band cluster modifications.",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-382",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Automated Sync with Prune and SelfHeal (High Load Scale)",
    hint: "Achieving full continuous convergence and automated drift remediation.",
    back: "Configuring <strong>automated sync with prune: true and selfHeal: true</strong> ensures Argo CD automatically deploys new commits, removes orphaned resources, and reverts out-of-band cluster modifications.",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-383",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Automated Sync with Prune and SelfHeal (Security Compliance)",
    hint: "Achieving full continuous convergence and automated drift remediation.",
    back: "Configuring <strong>automated sync with prune: true and selfHeal: true</strong> ensures Argo CD automatically deploys new commits, removes orphaned resources, and reverts out-of-band cluster modifications.",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-384",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Automated Sync with Prune and SelfHeal (Hybrid Migration)",
    hint: "Achieving full continuous convergence and automated drift remediation.",
    back: "Configuring <strong>automated sync with prune: true and selfHeal: true</strong> ensures Argo CD automatically deploys new commits, removes orphaned resources, and reverts out-of-band cluster modifications.",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-385",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Automated Sync with Prune and SelfHeal (Resilience Failure)",
    hint: "Achieving full continuous convergence and automated drift remediation.",
    back: "Configuring <strong>automated sync with prune: true and selfHeal: true</strong> ensures Argo CD automatically deploys new commits, removes orphaned resources, and reverts out-of-band cluster modifications.",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-386",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Sync Waves and Hooks (Dr Failover)",
    hint: "Ordered phased deployments using sync-wave annotations.",
    back: "Annotating resources with <strong>argocd.argoproj.io/sync-wave</strong> orchestrates phased deployments, ensuring early wave components (like database migrations) become healthy before downstream workloads deploy.",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-387",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Sync Waves and Hooks (High Load Scale)",
    hint: "Ordered phased deployments using sync-wave annotations.",
    back: "Annotating resources with <strong>argocd.argoproj.io/sync-wave</strong> orchestrates phased deployments, ensuring early wave components (like database migrations) become healthy before downstream workloads deploy.",
    tags: ["Sync Waves & Hooks", "Sync Waves", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-388",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Sync Waves and Hooks (Security Compliance)",
    hint: "Ordered phased deployments using sync-wave annotations.",
    back: "Annotating resources with <strong>argocd.argoproj.io/sync-wave</strong> orchestrates phased deployments, ensuring early wave components (like database migrations) become healthy before downstream workloads deploy.",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-389",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Sync Waves and Hooks (Hybrid Migration)",
    hint: "Ordered phased deployments using sync-wave annotations.",
    back: "Annotating resources with <strong>argocd.argoproj.io/sync-wave</strong> orchestrates phased deployments, ensuring early wave components (like database migrations) become healthy before downstream workloads deploy.",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-390",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo CD Sync Waves and Hooks (Resilience Failure)",
    hint: "Ordered phased deployments using sync-wave annotations.",
    back: "Annotating resources with <strong>argocd.argoproj.io/sync-wave</strong> orchestrates phased deployments, ensuring early wave components (like database migrations) become healthy before downstream workloads deploy.",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-391",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo Rollouts Canary Progressive Delivery (Dr Failover)",
    hint: "Automated canary traffic shifting and metric-driven promotion/rollback.",
    back: "<strong>Argo Rollouts</strong> enables advanced canary and blue-green releases, integrating <code>AnalysisTemplate</code> resources to automatically promote or roll back releases based on live Prometheus metrics.",
    tags: ["Progressive Delivery", "Argo Rollouts", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-392",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo Rollouts Canary Progressive Delivery (High Load Scale)",
    hint: "Automated canary traffic shifting and metric-driven promotion/rollback.",
    back: "<strong>Argo Rollouts</strong> enables advanced canary and blue-green releases, integrating <code>AnalysisTemplate</code> resources to automatically promote or roll back releases based on live Prometheus metrics.",
    tags: ["Progressive Delivery", "Argo Rollouts", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-393",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo Rollouts Canary Progressive Delivery (Security Compliance)",
    hint: "Automated canary traffic shifting and metric-driven promotion/rollback.",
    back: "<strong>Argo Rollouts</strong> enables advanced canary and blue-green releases, integrating <code>AnalysisTemplate</code> resources to automatically promote or roll back releases based on live Prometheus metrics.",
    tags: ["Progressive Delivery", "Argo Rollouts", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-394",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo Rollouts Canary Progressive Delivery (Hybrid Migration)",
    hint: "Automated canary traffic shifting and metric-driven promotion/rollback.",
    back: "<strong>Argo Rollouts</strong> enables advanced canary and blue-green releases, integrating <code>AnalysisTemplate</code> resources to automatically promote or roll back releases based on live Prometheus metrics.",
    tags: ["Progressive Delivery", "Argo Rollouts", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-395",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Argo Rollouts Canary Progressive Delivery (Resilience Failure)",
    hint: "Automated canary traffic shifting and metric-driven promotion/rollback.",
    back: "<strong>Argo Rollouts</strong> enables advanced canary and blue-green releases, integrating <code>AnalysisTemplate</code> resources to automatically promote or roll back releases based on live Prometheus metrics.",
    tags: ["Progressive Delivery", "Argo Rollouts", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-396",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Flux v2 Controller and CRD Architecture (Dr Failover)",
    hint: "Decoupling source management from manifest reconciliation via specialized controllers.",
    back: "Flux v2 decouples responsibilities: <strong>source-controller</strong> manages <code>GitRepository</code> sources, while <strong>kustomize-controller</strong> manages <code>Kustomization</code> reconciliation and health checks.",
    tags: ["Flux Architecture", "Flux Architecture", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-397",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Flux v2 Controller and CRD Architecture (High Load Scale)",
    hint: "Decoupling source management from manifest reconciliation via specialized controllers.",
    back: "Flux v2 decouples responsibilities: <strong>source-controller</strong> manages <code>GitRepository</code> sources, while <strong>kustomize-controller</strong> manages <code>Kustomization</code> reconciliation and health checks.",
    tags: ["Flux Architecture", "Flux Architecture", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-398",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Flux v2 Controller and CRD Architecture (Security Compliance)",
    hint: "Decoupling source management from manifest reconciliation via specialized controllers.",
    back: "Flux v2 decouples responsibilities: <strong>source-controller</strong> manages <code>GitRepository</code> sources, while <strong>kustomize-controller</strong> manages <code>Kustomization</code> reconciliation and health checks.",
    tags: ["Flux Architecture", "Flux Architecture", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-399",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Flux v2 Controller and CRD Architecture (Hybrid Migration)",
    hint: "Decoupling source management from manifest reconciliation via specialized controllers.",
    back: "Flux v2 decouples responsibilities: <strong>source-controller</strong> manages <code>GitRepository</code> sources, while <strong>kustomize-controller</strong> manages <code>Kustomization</code> reconciliation and health checks.",
    tags: ["Flux Architecture", "Flux Architecture", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-400",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    front: "Flux v2 Controller and CRD Architecture (Resilience Failure)",
    hint: "Decoupling source management from manifest reconciliation via specialized controllers.",
    back: "Flux v2 decouples responsibilities: <strong>source-controller</strong> manages <code>GitRepository</code> sources, while <strong>kustomize-controller</strong> manages <code>Kustomization</code> reconciliation and health checks.",
    tags: ["Flux Architecture", "Flux Architecture", "Resilience Failure"]
  }
];

export default CNCF_CGOA_FLASHCARDS_16;
