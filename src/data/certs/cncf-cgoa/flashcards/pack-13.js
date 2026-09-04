export const CNCF_CGOA_FLASHCARDS_13 = [
  {
    id: "cncf-cgoa-fc-301",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "GitOps Repository Strategies: Monorepo vs Polyrepo (Dr Failover)",
    hint: "Evaluating organizational access boundaries and holistic auditability.",
    back: "In GitOps, <strong>monorepos</strong> offer centralized visibility and cross-service atomic updates, while <strong>polyrepos</strong> provide granular per-service access control and isolated blast radiuses.",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-302",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "GitOps Repository Strategies: Monorepo vs Polyrepo (High Load Scale)",
    hint: "Evaluating organizational access boundaries and holistic auditability.",
    back: "In GitOps, <strong>monorepos</strong> offer centralized visibility and cross-service atomic updates, while <strong>polyrepos</strong> provide granular per-service access control and isolated blast radiuses.",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-303",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "GitOps Repository Strategies: Monorepo vs Polyrepo (Security Compliance)",
    hint: "Evaluating organizational access boundaries and holistic auditability.",
    back: "In GitOps, <strong>monorepos</strong> offer centralized visibility and cross-service atomic updates, while <strong>polyrepos</strong> provide granular per-service access control and isolated blast radiuses.",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-304",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "GitOps Repository Strategies: Monorepo vs Polyrepo (Hybrid Migration)",
    hint: "Evaluating organizational access boundaries and holistic auditability.",
    back: "In GitOps, <strong>monorepos</strong> offer centralized visibility and cross-service atomic updates, while <strong>polyrepos</strong> provide granular per-service access control and isolated blast radiuses.",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-305",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "GitOps Repository Strategies: Monorepo vs Polyrepo (Resilience Failure)",
    hint: "Evaluating organizational access boundaries and holistic auditability.",
    back: "In GitOps, <strong>monorepos</strong> offer centralized visibility and cross-service atomic updates, while <strong>polyrepos</strong> provide granular per-service access control and isolated blast radiuses.",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-306",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Environment Separation: Directories vs Branches (Dr Failover)",
    hint: "Avoiding branch drift and merge conflicts using directory-based overlays.",
    back: "Modeling environments via <strong>directories (Kustomize overlays)</strong> on a single trunk branch avoids the merge conflicts, drift, and divergence inherent in long-lived environment branches.",
    tags: ["Environment Modeling", "Directory vs Branch", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-307",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Environment Separation: Directories vs Branches (High Load Scale)",
    hint: "Avoiding branch drift and merge conflicts using directory-based overlays.",
    back: "Modeling environments via <strong>directories (Kustomize overlays)</strong> on a single trunk branch avoids the merge conflicts, drift, and divergence inherent in long-lived environment branches.",
    tags: ["Environment Modeling", "Directory vs Branch", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-308",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Environment Separation: Directories vs Branches (Security Compliance)",
    hint: "Avoiding branch drift and merge conflicts using directory-based overlays.",
    back: "Modeling environments via <strong>directories (Kustomize overlays)</strong> on a single trunk branch avoids the merge conflicts, drift, and divergence inherent in long-lived environment branches.",
    tags: ["Environment Modeling", "Directory vs Branch", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-309",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Environment Separation: Directories vs Branches (Hybrid Migration)",
    hint: "Avoiding branch drift and merge conflicts using directory-based overlays.",
    back: "Modeling environments via <strong>directories (Kustomize overlays)</strong> on a single trunk branch avoids the merge conflicts, drift, and divergence inherent in long-lived environment branches.",
    tags: ["Environment Modeling", "Directory vs Branch", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-310",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Environment Separation: Directories vs Branches (Resilience Failure)",
    hint: "Avoiding branch drift and merge conflicts using directory-based overlays.",
    back: "Modeling environments via <strong>directories (Kustomize overlays)</strong> on a single trunk branch avoids the merge conflicts, drift, and divergence inherent in long-lived environment branches.",
    tags: ["Environment Modeling", "Directory vs Branch", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-311",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Kustomize Bases and Overlays in GitOps (Dr Failover)",
    hint: "Template-free manifest customization across environments via declarative patches.",
    back: "Using <strong>Kustomize bases and overlays</strong> maintains DRY manifests by sharing common definitions in <code>base/</code> while applying environment-specific patches (replicas, ingress domains) in <code>overlays/</code>.",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-312",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Kustomize Bases and Overlays in GitOps (High Load Scale)",
    hint: "Template-free manifest customization across environments via declarative patches.",
    back: "Using <strong>Kustomize bases and overlays</strong> maintains DRY manifests by sharing common definitions in <code>base/</code> while applying environment-specific patches (replicas, ingress domains) in <code>overlays/</code>.",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-313",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Kustomize Bases and Overlays in GitOps (Security Compliance)",
    hint: "Template-free manifest customization across environments via declarative patches.",
    back: "Using <strong>Kustomize bases and overlays</strong> maintains DRY manifests by sharing common definitions in <code>base/</code> while applying environment-specific patches (replicas, ingress domains) in <code>overlays/</code>.",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-314",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Kustomize Bases and Overlays in GitOps (Hybrid Migration)",
    hint: "Template-free manifest customization across environments via declarative patches.",
    back: "Using <strong>Kustomize bases and overlays</strong> maintains DRY manifests by sharing common definitions in <code>base/</code> while applying environment-specific patches (replicas, ingress domains) in <code>overlays/</code>.",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-315",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Kustomize Bases and Overlays in GitOps (Resilience Failure)",
    hint: "Template-free manifest customization across environments via declarative patches.",
    back: "Using <strong>Kustomize bases and overlays</strong> maintains DRY manifests by sharing common definitions in <code>base/</code> while applying environment-specific patches (replicas, ingress domains) in <code>overlays/</code>.",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-316",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Declarative Helm Management in GitOps (Dr Failover)",
    hint: "Managing Helm charts and values.yaml declaratively via GitOps controllers.",
    back: "Declarative <strong>HelmReleases / Helm Applications</strong> allow GitOps controllers to manage Helm charts continuously, tracking custom <code>values.yaml</code> in Git while automating chart upgrades.",
    tags: ["Helm in GitOps", "Helm in GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-317",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Declarative Helm Management in GitOps (High Load Scale)",
    hint: "Managing Helm charts and values.yaml declaratively via GitOps controllers.",
    back: "Declarative <strong>HelmReleases / Helm Applications</strong> allow GitOps controllers to manage Helm charts continuously, tracking custom <code>values.yaml</code> in Git while automating chart upgrades.",
    tags: ["Helm in GitOps", "Helm in GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-318",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Declarative Helm Management in GitOps (Security Compliance)",
    hint: "Managing Helm charts and values.yaml declaratively via GitOps controllers.",
    back: "Declarative <strong>HelmReleases / Helm Applications</strong> allow GitOps controllers to manage Helm charts continuously, tracking custom <code>values.yaml</code> in Git while automating chart upgrades.",
    tags: ["Helm in GitOps", "Helm in GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-319",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Declarative Helm Management in GitOps (Hybrid Migration)",
    hint: "Managing Helm charts and values.yaml declaratively via GitOps controllers.",
    back: "Declarative <strong>HelmReleases / Helm Applications</strong> allow GitOps controllers to manage Helm charts continuously, tracking custom <code>values.yaml</code> in Git while automating chart upgrades.",
    tags: ["Helm in GitOps", "Helm in GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-320",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Declarative Helm Management in GitOps (Resilience Failure)",
    hint: "Managing Helm charts and values.yaml declaratively via GitOps controllers.",
    back: "Declarative <strong>HelmReleases / Helm Applications</strong> allow GitOps controllers to manage Helm charts continuously, tracking custom <code>values.yaml</code> in Git while automating chart upgrades.",
    tags: ["Helm in GitOps", "Helm in GitOps", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-fc-321",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Argo CD App of Apps Pattern (Dr Failover)",
    hint: "Declarative cluster bootstrapping using a root application to manage child apps.",
    back: "The <strong>App of Apps pattern</strong> uses a parent Argo CD Application to declaratively manage a collection of child Application manifests, enabling automated cluster bootstrapping from a single entry point.",
    tags: ["Argo CD Patterns", "App of Apps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-fc-322",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Argo CD App of Apps Pattern (High Load Scale)",
    hint: "Declarative cluster bootstrapping using a root application to manage child apps.",
    back: "The <strong>App of Apps pattern</strong> uses a parent Argo CD Application to declaratively manage a collection of child Application manifests, enabling automated cluster bootstrapping from a single entry point.",
    tags: ["Argo CD Patterns", "App of Apps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-fc-323",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Argo CD App of Apps Pattern (Security Compliance)",
    hint: "Declarative cluster bootstrapping using a root application to manage child apps.",
    back: "The <strong>App of Apps pattern</strong> uses a parent Argo CD Application to declaratively manage a collection of child Application manifests, enabling automated cluster bootstrapping from a single entry point.",
    tags: ["Argo CD Patterns", "App of Apps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-fc-324",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Argo CD App of Apps Pattern (Hybrid Migration)",
    hint: "Declarative cluster bootstrapping using a root application to manage child apps.",
    back: "The <strong>App of Apps pattern</strong> uses a parent Argo CD Application to declaratively manage a collection of child Application manifests, enabling automated cluster bootstrapping from a single entry point.",
    tags: ["Argo CD Patterns", "App of Apps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-fc-325",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    front: "Argo CD App of Apps Pattern (Resilience Failure)",
    hint: "Declarative cluster bootstrapping using a root application to manage child apps.",
    back: "The <strong>App of Apps pattern</strong> uses a parent Argo CD Application to declaratively manage a collection of child Application manifests, enabling automated cluster bootstrapping from a single entry point.",
    tags: ["Argo CD Patterns", "App of Apps", "Resilience Failure"]
  }
];

export default CNCF_CGOA_FLASHCARDS_13;
