export const CNCF_CGOA_QUESTIONS_16 = [
  {
    id: "cncf-cgoa-376",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Architecture: API Server, Repo Server, and Application Controller: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Argo CD Architecture to understand which Argo CD internal component is responsible for cloning the Git repository and generating Kubernetes manifests.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Understanding the role of Argo CD core components: server, repo-server, application-controller is under consideration.",
    options: [
      { id: 'A', text: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller." },
      { id: 'B', text: "The `argocd-server` API server handles all Git cloning and manifest rendering directly." },
      { id: 'C', text: "The Kubernetes kube-apiserver renders HCL and Helm charts." },
      { id: 'D', text: "Manifest rendering is performed inside the user's browser client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller. Argo CD decomposes duties across microservices: `argocd-server` exposes the gRPC/REST API and Web UI; `argocd-repo-server` clones Git repositories and generates raw Kubernetes manifests; `argocd-application-controller` continuously compares live state against desired state and executes synchronization.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-377",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Architecture: API Server, Repo Server, and Application Controller: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Argo CD Architecture to understand which Argo CD internal component is responsible for cloning the Git repository and generating Kubernetes manifests.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Understanding the role of Argo CD core components: server, repo-server, application-controller is under consideration.",
    options: [
      { id: 'A', text: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller." },
      { id: 'B', text: "The `argocd-server` API server handles all Git cloning and manifest rendering directly." },
      { id: 'C', text: "The Kubernetes kube-apiserver renders HCL and Helm charts." },
      { id: 'D', text: "Manifest rendering is performed inside the user's browser client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller. Argo CD decomposes duties across microservices: `argocd-server` exposes the gRPC/REST API and Web UI; `argocd-repo-server` clones Git repositories and generates raw Kubernetes manifests; `argocd-application-controller` continuously compares live state against desired state and executes synchronization.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-378",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Architecture: API Server, Repo Server, and Application Controller: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Argo CD Architecture to understand which Argo CD internal component is responsible for cloning the Git repository and generating Kubernetes manifests.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Understanding the role of Argo CD core components: server, repo-server, application-controller is under consideration.",
    options: [
      { id: 'A', text: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller." },
      { id: 'B', text: "The `argocd-server` API server handles all Git cloning and manifest rendering directly." },
      { id: 'C', text: "The Kubernetes kube-apiserver renders HCL and Helm charts." },
      { id: 'D', text: "Manifest rendering is performed inside the user's browser client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller. Argo CD decomposes duties across microservices: `argocd-server` exposes the gRPC/REST API and Web UI; `argocd-repo-server` clones Git repositories and generates raw Kubernetes manifests; `argocd-application-controller` continuously compares live state against desired state and executes synchronization.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-379",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Architecture: API Server, Repo Server, and Application Controller: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Argo CD Architecture to understand which Argo CD internal component is responsible for cloning the Git repository and generating Kubernetes manifests.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Understanding the role of Argo CD core components: server, repo-server, application-controller is under consideration.",
    options: [
      { id: 'A', text: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller." },
      { id: 'B', text: "The `argocd-server` API server handles all Git cloning and manifest rendering directly." },
      { id: 'C', text: "The Kubernetes kube-apiserver renders HCL and Helm charts." },
      { id: 'D', text: "Manifest rendering is performed inside the user's browser client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller. Argo CD decomposes duties across microservices: `argocd-server` exposes the gRPC/REST API and Web UI; `argocd-repo-server` clones Git repositories and generates raw Kubernetes manifests; `argocd-application-controller` continuously compares live state against desired state and executes synchronization.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-380",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Architecture: API Server, Repo Server, and Application Controller: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Argo CD Architecture to understand which Argo CD internal component is responsible for cloning the Git repository and generating Kubernetes manifests.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Understanding the role of Argo CD core components: server, repo-server, application-controller is under consideration.",
    options: [
      { id: 'A', text: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller." },
      { id: 'B', text: "The `argocd-server` API server handles all Git cloning and manifest rendering directly." },
      { id: 'C', text: "The Kubernetes kube-apiserver renders HCL and Helm charts." },
      { id: 'D', text: "Manifest rendering is performed inside the user's browser client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `argo-cd-repo-server` clones the repository, renders manifests (via Kustomize, Helm, or plugins), and returns them to the controller. Argo CD decomposes duties across microservices: `argocd-server` exposes the gRPC/REST API and Web UI; `argocd-repo-server` clones Git repositories and generates raw Kubernetes manifests; `argocd-application-controller` continuously compares live state against desired state and executes synchronization.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/",
    tags: ["Argo CD Architecture", "Argo CD Architecture", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-381",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Synchronization Options: Auto-Sync, Prune, and Self-Heal: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Argo CD Sync Options to configure an Argo CD application to automatically deploy new Git commits, delete orphaned resources, and revert out-of-band manual changes.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Configuring automated synchronization with Prune and SelfHeal enabled is under consideration.",
    options: [
      { id: 'A', text: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification." },
      { id: 'B', text: "Disable auto-sync and require engineers to click the 'Sync' button in the UI for every commit." },
      { id: 'C', text: "Set `prune: false` so deleted resources remain running in the cluster indefinitely." },
      { id: 'D', text: "Rely on a nightly cron job running `kubectl apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification. Argo CD automated sync policies provide complete convergence. Setting `automated: {}` automatically syncs when Git commits land. `prune: true` deletes resources removed from Git, and `selfHeal: true` automatically reverts manual modifications made directly to the cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-382",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Synchronization Options: Auto-Sync, Prune, and Self-Heal: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Argo CD Sync Options to configure an Argo CD application to automatically deploy new Git commits, delete orphaned resources, and revert out-of-band manual changes.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Configuring automated synchronization with Prune and SelfHeal enabled is under consideration.",
    options: [
      { id: 'A', text: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification." },
      { id: 'B', text: "Disable auto-sync and require engineers to click the 'Sync' button in the UI for every commit." },
      { id: 'C', text: "Set `prune: false` so deleted resources remain running in the cluster indefinitely." },
      { id: 'D', text: "Rely on a nightly cron job running `kubectl apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification. Argo CD automated sync policies provide complete convergence. Setting `automated: {}` automatically syncs when Git commits land. `prune: true` deletes resources removed from Git, and `selfHeal: true` automatically reverts manual modifications made directly to the cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-383",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Synchronization Options: Auto-Sync, Prune, and Self-Heal: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Argo CD Sync Options to configure an Argo CD application to automatically deploy new Git commits, delete orphaned resources, and revert out-of-band manual changes.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Configuring automated synchronization with Prune and SelfHeal enabled is under consideration.",
    options: [
      { id: 'A', text: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification." },
      { id: 'B', text: "Disable auto-sync and require engineers to click the 'Sync' button in the UI for every commit." },
      { id: 'C', text: "Set `prune: false` so deleted resources remain running in the cluster indefinitely." },
      { id: 'D', text: "Rely on a nightly cron job running `kubectl apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification. Argo CD automated sync policies provide complete convergence. Setting `automated: {}` automatically syncs when Git commits land. `prune: true` deletes resources removed from Git, and `selfHeal: true` automatically reverts manual modifications made directly to the cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-384",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Synchronization Options: Auto-Sync, Prune, and Self-Heal: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Argo CD Sync Options to configure an Argo CD application to automatically deploy new Git commits, delete orphaned resources, and revert out-of-band manual changes.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Configuring automated synchronization with Prune and SelfHeal enabled is under consideration.",
    options: [
      { id: 'A', text: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification." },
      { id: 'B', text: "Disable auto-sync and require engineers to click the 'Sync' button in the UI for every commit." },
      { id: 'C', text: "Set `prune: false` so deleted resources remain running in the cluster indefinitely." },
      { id: 'D', text: "Rely on a nightly cron job running `kubectl apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification. Argo CD automated sync policies provide complete convergence. Setting `automated: {}` automatically syncs when Git commits land. `prune: true` deletes resources removed from Git, and `selfHeal: true` automatically reverts manual modifications made directly to the cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-385",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Synchronization Options: Auto-Sync, Prune, and Self-Heal: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Argo CD Sync Options to configure an Argo CD application to automatically deploy new Git commits, delete orphaned resources, and revert out-of-band manual changes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Configuring automated synchronization with Prune and SelfHeal enabled is under consideration.",
    options: [
      { id: 'A', text: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification." },
      { id: 'B', text: "Disable auto-sync and require engineers to click the 'Sync' button in the UI for every commit." },
      { id: 'C', text: "Set `prune: false` so deleted resources remain running in the cluster indefinitely." },
      { id: 'D', text: "Rely on a nightly cron job running `kubectl apply`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `automated: { prune: true, selfHeal: true }` inside the application sync policy specification. Argo CD automated sync policies provide complete convergence. Setting `automated: {}` automatically syncs when Git commits land. `prune: true` deletes resources removed from Git, and `selfHeal: true` automatically reverts manual modifications made directly to the cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/",
    tags: ["Argo CD Sync Options", "Argo CD Auto-Sync", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-386",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Sync Waves and Resource Hooks: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Sync Waves & Hooks to ensure a database schema migration Job runs and succeeds before new application backend pods are rolled out.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Orchestrating multi-phase deployments using argocd.argoproj.io/sync-wave annotations is under consideration.",
    options: [
      { id: 'A', text: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`." },
      { id: 'B', text: "Deploy the migration and application simultaneously and hope the database finishes first." },
      { id: 'C', text: "Put both resources in the same YAML file with no annotations." },
      { id: 'D', text: "Sync waves are not supported in Argo CD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`. Argo CD Sync Waves order resource synchronization. Resources in wave `0` are applied first. Argo CD waits for all resources in wave `0` to reach a healthy status before applying resources in wave `1`, allowing clean orchestration of migrations, dependencies, and application rollouts.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-387",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Sync Waves and Resource Hooks: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Sync Waves & Hooks to ensure a database schema migration Job runs and succeeds before new application backend pods are rolled out.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Orchestrating multi-phase deployments using argocd.argoproj.io/sync-wave annotations is under consideration.",
    options: [
      { id: 'A', text: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`." },
      { id: 'B', text: "Deploy the migration and application simultaneously and hope the database finishes first." },
      { id: 'C', text: "Put both resources in the same YAML file with no annotations." },
      { id: 'D', text: "Sync waves are not supported in Argo CD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`. Argo CD Sync Waves order resource synchronization. Resources in wave `0` are applied first. Argo CD waits for all resources in wave `0` to reach a healthy status before applying resources in wave `1`, allowing clean orchestration of migrations, dependencies, and application rollouts.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Sync Waves & Hooks", "Sync Waves", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-388",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Sync Waves and Resource Hooks: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Sync Waves & Hooks to ensure a database schema migration Job runs and succeeds before new application backend pods are rolled out.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Orchestrating multi-phase deployments using argocd.argoproj.io/sync-wave annotations is under consideration.",
    options: [
      { id: 'A', text: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`." },
      { id: 'B', text: "Deploy the migration and application simultaneously and hope the database finishes first." },
      { id: 'C', text: "Put both resources in the same YAML file with no annotations." },
      { id: 'D', text: "Sync waves are not supported in Argo CD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`. Argo CD Sync Waves order resource synchronization. Resources in wave `0` are applied first. Argo CD waits for all resources in wave `0` to reach a healthy status before applying resources in wave `1`, allowing clean orchestration of migrations, dependencies, and application rollouts.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-389",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Sync Waves and Resource Hooks: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Sync Waves & Hooks to ensure a database schema migration Job runs and succeeds before new application backend pods are rolled out.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Orchestrating multi-phase deployments using argocd.argoproj.io/sync-wave annotations is under consideration.",
    options: [
      { id: 'A', text: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`." },
      { id: 'B', text: "Deploy the migration and application simultaneously and hope the database finishes first." },
      { id: 'C', text: "Put both resources in the same YAML file with no annotations." },
      { id: 'D', text: "Sync waves are not supported in Argo CD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`. Argo CD Sync Waves order resource synchronization. Resources in wave `0` are applied first. Argo CD waits for all resources in wave `0` to reach a healthy status before applying resources in wave `1`, allowing clean orchestration of migrations, dependencies, and application rollouts.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-390",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Sync Waves and Resource Hooks: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Sync Waves & Hooks to ensure a database schema migration Job runs and succeeds before new application backend pods are rolled out.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Orchestrating multi-phase deployments using argocd.argoproj.io/sync-wave annotations is under consideration.",
    options: [
      { id: 'A', text: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`." },
      { id: 'B', text: "Deploy the migration and application simultaneously and hope the database finishes first." },
      { id: 'C', text: "Put both resources in the same YAML file with no annotations." },
      { id: 'D', text: "Sync waves are not supported in Argo CD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the migration Job with `sync-wave: \"0\"` and the application Deployment with `sync-wave: \"1\"`. Argo CD Sync Waves order resource synchronization. Resources in wave `0` are applied first. Argo CD waits for all resources in wave `0` to reach a healthy status before applying resources in wave `1`, allowing clean orchestration of migrations, dependencies, and application rollouts.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Sync Waves & Hooks", "Sync Waves", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-391",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Progressive Delivery with Argo Rollouts: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Progressive Delivery to execute a canary release of a containerized service with automated metric analysis (e.g., Prometheus 5xx error rate) determining promotion or rollback.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Canary and Blue-Green deployments with automated analysis using Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`." },
      { id: 'B', text: "Use a standard Kubernetes Deployment and manually change replica counts by hand." },
      { id: 'C', text: "Switch 100% of user traffic to the new version immediately without analysis." },
      { id: 'D', text: "Deploy the new version to a separate unmonitored test cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`. Argo Rollouts replaces the standard Kubernetes Deployment with a `Rollout` controller supporting advanced canary and blue-green strategies. Linking an `AnalysisTemplate` queries metrics (Prometheus, Datadog) at each canary step, automatically aborting and rolling back if error thresholds are exceeded.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Argo Rollouts", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-392",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Progressive Delivery with Argo Rollouts: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Progressive Delivery to execute a canary release of a containerized service with automated metric analysis (e.g., Prometheus 5xx error rate) determining promotion or rollback.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Canary and Blue-Green deployments with automated analysis using Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`." },
      { id: 'B', text: "Use a standard Kubernetes Deployment and manually change replica counts by hand." },
      { id: 'C', text: "Switch 100% of user traffic to the new version immediately without analysis." },
      { id: 'D', text: "Deploy the new version to a separate unmonitored test cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`. Argo Rollouts replaces the standard Kubernetes Deployment with a `Rollout` controller supporting advanced canary and blue-green strategies. Linking an `AnalysisTemplate` queries metrics (Prometheus, Datadog) at each canary step, automatically aborting and rolling back if error thresholds are exceeded.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Argo Rollouts", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-393",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Progressive Delivery with Argo Rollouts: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Progressive Delivery to execute a canary release of a containerized service with automated metric analysis (e.g., Prometheus 5xx error rate) determining promotion or rollback.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Canary and Blue-Green deployments with automated analysis using Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`." },
      { id: 'B', text: "Use a standard Kubernetes Deployment and manually change replica counts by hand." },
      { id: 'C', text: "Switch 100% of user traffic to the new version immediately without analysis." },
      { id: 'D', text: "Deploy the new version to a separate unmonitored test cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`. Argo Rollouts replaces the standard Kubernetes Deployment with a `Rollout` controller supporting advanced canary and blue-green strategies. Linking an `AnalysisTemplate` queries metrics (Prometheus, Datadog) at each canary step, automatically aborting and rolling back if error thresholds are exceeded.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Argo Rollouts", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-394",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Progressive Delivery with Argo Rollouts: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Progressive Delivery to execute a canary release of a containerized service with automated metric analysis (e.g., Prometheus 5xx error rate) determining promotion or rollback.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Canary and Blue-Green deployments with automated analysis using Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`." },
      { id: 'B', text: "Use a standard Kubernetes Deployment and manually change replica counts by hand." },
      { id: 'C', text: "Switch 100% of user traffic to the new version immediately without analysis." },
      { id: 'D', text: "Deploy the new version to a separate unmonitored test cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`. Argo Rollouts replaces the standard Kubernetes Deployment with a `Rollout` controller supporting advanced canary and blue-green strategies. Linking an `AnalysisTemplate` queries metrics (Prometheus, Datadog) at each canary step, automatically aborting and rolling back if error thresholds are exceeded.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Argo Rollouts", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-395",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Progressive Delivery with Argo Rollouts: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Progressive Delivery to execute a canary release of a containerized service with automated metric analysis (e.g., Prometheus 5xx error rate) determining promotion or rollback.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Canary and Blue-Green deployments with automated analysis using Argo Rollouts is under consideration.",
    options: [
      { id: 'A', text: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`." },
      { id: 'B', text: "Use a standard Kubernetes Deployment and manually change replica counts by hand." },
      { id: 'C', text: "Switch 100% of user traffic to the new version immediately without analysis." },
      { id: 'D', text: "Deploy the new version to a separate unmonitored test cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the Kubernetes Deployment with an Argo `Rollout` resource configured with canary steps and an `AnalysisTemplate`. Argo Rollouts replaces the standard Kubernetes Deployment with a `Rollout` controller supporting advanced canary and blue-green strategies. Linking an `AnalysisTemplate` queries metrics (Prometheus, Datadog) at each canary step, automatically aborting and rolling back if error thresholds are exceeded.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive Delivery", "Argo Rollouts", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-396",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Core Architecture: GitRepository and Kustomization CRDs: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Flux Architecture to understand how Flux v2 organizes GitOps reconciliation through distinct Kubernetes Custom Resource Definitions.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Decoupling source acquisition (Source Controller) from manifest application (Kustomize Controller) is under consideration.",
    options: [
      { id: 'A', text: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller." },
      { id: 'B', text: "Flux runs as a single monolithic process that bypasses the Kubernetes API." },
      { id: 'C', text: "Flux requires an external SQL database to track Git commits." },
      { id: 'D', text: "Source acquisition and manifest application are locked into a single indivisible CRD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller. Flux v2 is composed of specialized Kubernetes controllers. The `source-controller` watches and pulls Git repos, Helm charts, or OCI artifacts (`GitRepository`). The `kustomize-controller` evaluates Kustomize overlays and applies the generated manifests to the cluster.",
    referenceUrl: "https://fluxcd.io/flux/components/",
    tags: ["Flux Architecture", "Flux Architecture", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-397",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Core Architecture: GitRepository and Kustomization CRDs: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Flux Architecture to understand how Flux v2 organizes GitOps reconciliation through distinct Kubernetes Custom Resource Definitions.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Decoupling source acquisition (Source Controller) from manifest application (Kustomize Controller) is under consideration.",
    options: [
      { id: 'A', text: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller." },
      { id: 'B', text: "Flux runs as a single monolithic process that bypasses the Kubernetes API." },
      { id: 'C', text: "Flux requires an external SQL database to track Git commits." },
      { id: 'D', text: "Source acquisition and manifest application are locked into a single indivisible CRD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller. Flux v2 is composed of specialized Kubernetes controllers. The `source-controller` watches and pulls Git repos, Helm charts, or OCI artifacts (`GitRepository`). The `kustomize-controller` evaluates Kustomize overlays and applies the generated manifests to the cluster.",
    referenceUrl: "https://fluxcd.io/flux/components/",
    tags: ["Flux Architecture", "Flux Architecture", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-398",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Core Architecture: GitRepository and Kustomization CRDs: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Flux Architecture to understand how Flux v2 organizes GitOps reconciliation through distinct Kubernetes Custom Resource Definitions.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Decoupling source acquisition (Source Controller) from manifest application (Kustomize Controller) is under consideration.",
    options: [
      { id: 'A', text: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller." },
      { id: 'B', text: "Flux runs as a single monolithic process that bypasses the Kubernetes API." },
      { id: 'C', text: "Flux requires an external SQL database to track Git commits." },
      { id: 'D', text: "Source acquisition and manifest application are locked into a single indivisible CRD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller. Flux v2 is composed of specialized Kubernetes controllers. The `source-controller` watches and pulls Git repos, Helm charts, or OCI artifacts (`GitRepository`). The `kustomize-controller` evaluates Kustomize overlays and applies the generated manifests to the cluster.",
    referenceUrl: "https://fluxcd.io/flux/components/",
    tags: ["Flux Architecture", "Flux Architecture", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-399",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Core Architecture: GitRepository and Kustomization CRDs: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Flux Architecture to understand how Flux v2 organizes GitOps reconciliation through distinct Kubernetes Custom Resource Definitions.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Decoupling source acquisition (Source Controller) from manifest application (Kustomize Controller) is under consideration.",
    options: [
      { id: 'A', text: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller." },
      { id: 'B', text: "Flux runs as a single monolithic process that bypasses the Kubernetes API." },
      { id: 'C', text: "Flux requires an external SQL database to track Git commits." },
      { id: 'D', text: "Source acquisition and manifest application are locked into a single indivisible CRD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller. Flux v2 is composed of specialized Kubernetes controllers. The `source-controller` watches and pulls Git repos, Helm charts, or OCI artifacts (`GitRepository`). The `kustomize-controller` evaluates Kustomize overlays and applies the generated manifests to the cluster.",
    referenceUrl: "https://fluxcd.io/flux/components/",
    tags: ["Flux Architecture", "Flux Architecture", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-400",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Core Architecture: GitRepository and Kustomization CRDs: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Flux Architecture to understand how Flux v2 organizes GitOps reconciliation through distinct Kubernetes Custom Resource Definitions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Decoupling source acquisition (Source Controller) from manifest application (Kustomize Controller) is under consideration.",
    options: [
      { id: 'A', text: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller." },
      { id: 'B', text: "Flux runs as a single monolithic process that bypasses the Kubernetes API." },
      { id: 'C', text: "Flux requires an external SQL database to track Git commits." },
      { id: 'D', text: "Source acquisition and manifest application are locked into a single indivisible CRD." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux uses a `GitRepository` (or OCIRepository) managed by source-controller, and a `Kustomization` managed by kustomize-controller. Flux v2 is composed of specialized Kubernetes controllers. The `source-controller` watches and pulls Git repos, Helm charts, or OCI artifacts (`GitRepository`). The `kustomize-controller` evaluates Kustomize overlays and applies the generated manifests to the cluster.",
    referenceUrl: "https://fluxcd.io/flux/components/",
    tags: ["Flux Architecture", "Flux Architecture", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_16;
