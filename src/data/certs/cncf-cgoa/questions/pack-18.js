export const CNCF_CGOA_QUESTIONS_18 = [
  {
    id: "cncf-cgoa-426",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Projects (AppProject) for Multi-Tenant Isolation: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Argo CD AppProject to restrict a tenant development team so their Argo CD applications can only deploy to the `tenant-a` namespace and only pull manifests from their own Git repository.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Restricting source repositories, destination clusters/namespaces, and RBAC via AppProjects is under consideration.",
    options: [
      { id: 'A', text: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles." },
      { id: 'B', text: "Deploy a separate Argo CD instance for every individual developer." },
      { id: 'C', text: "Rely on developers voluntarily deploying to the correct namespace." },
      { id: 'D', text: "Grant cluster-admin access to all developers in the default project." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles. Argo CD `AppProject` provides logical multi-tenancy. It enforces security boundaries by restricting which Git repositories an application can sync from, which target clusters and namespaces it can deploy into, and what cluster-scoped resources it is allowed to manage.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD AppProject", "AppProject", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-427",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Projects (AppProject) for Multi-Tenant Isolation: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Argo CD AppProject to restrict a tenant development team so their Argo CD applications can only deploy to the `tenant-a` namespace and only pull manifests from their own Git repository.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Restricting source repositories, destination clusters/namespaces, and RBAC via AppProjects is under consideration.",
    options: [
      { id: 'A', text: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles." },
      { id: 'B', text: "Deploy a separate Argo CD instance for every individual developer." },
      { id: 'C', text: "Rely on developers voluntarily deploying to the correct namespace." },
      { id: 'D', text: "Grant cluster-admin access to all developers in the default project." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles. Argo CD `AppProject` provides logical multi-tenancy. It enforces security boundaries by restricting which Git repositories an application can sync from, which target clusters and namespaces it can deploy into, and what cluster-scoped resources it is allowed to manage.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD AppProject", "AppProject", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-428",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Projects (AppProject) for Multi-Tenant Isolation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Argo CD AppProject to restrict a tenant development team so their Argo CD applications can only deploy to the `tenant-a` namespace and only pull manifests from their own Git repository.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Restricting source repositories, destination clusters/namespaces, and RBAC via AppProjects is under consideration.",
    options: [
      { id: 'A', text: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles." },
      { id: 'B', text: "Deploy a separate Argo CD instance for every individual developer." },
      { id: 'C', text: "Rely on developers voluntarily deploying to the correct namespace." },
      { id: 'D', text: "Grant cluster-admin access to all developers in the default project." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles. Argo CD `AppProject` provides logical multi-tenancy. It enforces security boundaries by restricting which Git repositories an application can sync from, which target clusters and namespaces it can deploy into, and what cluster-scoped resources it is allowed to manage.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD AppProject", "AppProject", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-429",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Projects (AppProject) for Multi-Tenant Isolation: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Argo CD AppProject to restrict a tenant development team so their Argo CD applications can only deploy to the `tenant-a` namespace and only pull manifests from their own Git repository.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Restricting source repositories, destination clusters/namespaces, and RBAC via AppProjects is under consideration.",
    options: [
      { id: 'A', text: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles." },
      { id: 'B', text: "Deploy a separate Argo CD instance for every individual developer." },
      { id: 'C', text: "Rely on developers voluntarily deploying to the correct namespace." },
      { id: 'D', text: "Grant cluster-admin access to all developers in the default project." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles. Argo CD `AppProject` provides logical multi-tenancy. It enforces security boundaries by restricting which Git repositories an application can sync from, which target clusters and namespaces it can deploy into, and what cluster-scoped resources it is allowed to manage.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD AppProject", "AppProject", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-430",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Projects (AppProject) for Multi-Tenant Isolation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Argo CD AppProject to restrict a tenant development team so their Argo CD applications can only deploy to the `tenant-a` namespace and only pull manifests from their own Git repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Restricting source repositories, destination clusters/namespaces, and RBAC via AppProjects is under consideration.",
    options: [
      { id: 'A', text: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles." },
      { id: 'B', text: "Deploy a separate Argo CD instance for every individual developer." },
      { id: 'C', text: "Rely on developers voluntarily deploying to the correct namespace." },
      { id: 'D', text: "Grant cluster-admin access to all developers in the default project." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Argo CD `AppProject` resource binding allowed source repositories, destination clusters/namespaces, and RBAC roles. Argo CD `AppProject` provides logical multi-tenancy. It enforces security boundaries by restricting which Git repositories an application can sync from, which target clusters and namespaces it can deploy into, and what cluster-scoped resources it is allowed to manage.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD AppProject", "AppProject", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-431",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps CI/CD Integration: Writing Back to Git: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates CI/CD Integration to integrate an automated GitHub Actions CI build pipeline with an Argo CD deployment repository.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? CI pipelines updating image tags in GitOps repos via git commit or pull requests is under consideration.",
    options: [
      { id: 'A', text: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account." },
      { id: 'B', text: "The CI pipeline connects directly to the Kubernetes API and runs `kubectl set image`." },
      { id: 'C', text: "The developer manually edits the image tag in Git after the CI build finishes." },
      { id: 'D', text: "The CI pipeline triggers a webhook on the developer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account. The standard interface between CI (build) and GitOps CD (deploy) is a Git commit. When the CI pipeline successfully builds, tests, and publishes a new immutable container image, it commits the new image tag to the environment overlay in the GitOps configuration repo, prompting the controller to sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#ci-build-and-gitops",
    tags: ["CI/CD Integration", "CI-to-GitOps Hand-off", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-432",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps CI/CD Integration: Writing Back to Git: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates CI/CD Integration to integrate an automated GitHub Actions CI build pipeline with an Argo CD deployment repository.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? CI pipelines updating image tags in GitOps repos via git commit or pull requests is under consideration.",
    options: [
      { id: 'A', text: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account." },
      { id: 'B', text: "The CI pipeline connects directly to the Kubernetes API and runs `kubectl set image`." },
      { id: 'C', text: "The developer manually edits the image tag in Git after the CI build finishes." },
      { id: 'D', text: "The CI pipeline triggers a webhook on the developer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account. The standard interface between CI (build) and GitOps CD (deploy) is a Git commit. When the CI pipeline successfully builds, tests, and publishes a new immutable container image, it commits the new image tag to the environment overlay in the GitOps configuration repo, prompting the controller to sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#ci-build-and-gitops",
    tags: ["CI/CD Integration", "CI-to-GitOps Hand-off", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-433",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps CI/CD Integration: Writing Back to Git: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates CI/CD Integration to integrate an automated GitHub Actions CI build pipeline with an Argo CD deployment repository.",
    question: "Which solution implements these mandatory GitOps security and governance controls? CI pipelines updating image tags in GitOps repos via git commit or pull requests is under consideration.",
    options: [
      { id: 'A', text: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account." },
      { id: 'B', text: "The CI pipeline connects directly to the Kubernetes API and runs `kubectl set image`." },
      { id: 'C', text: "The developer manually edits the image tag in Git after the CI build finishes." },
      { id: 'D', text: "The CI pipeline triggers a webhook on the developer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account. The standard interface between CI (build) and GitOps CD (deploy) is a Git commit. When the CI pipeline successfully builds, tests, and publishes a new immutable container image, it commits the new image tag to the environment overlay in the GitOps configuration repo, prompting the controller to sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#ci-build-and-gitops",
    tags: ["CI/CD Integration", "CI-to-GitOps Hand-off", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-434",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps CI/CD Integration: Writing Back to Git: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates CI/CD Integration to integrate an automated GitHub Actions CI build pipeline with an Argo CD deployment repository.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? CI pipelines updating image tags in GitOps repos via git commit or pull requests is under consideration.",
    options: [
      { id: 'A', text: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account." },
      { id: 'B', text: "The CI pipeline connects directly to the Kubernetes API and runs `kubectl set image`." },
      { id: 'C', text: "The developer manually edits the image tag in Git after the CI build finishes." },
      { id: 'D', text: "The CI pipeline triggers a webhook on the developer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account. The standard interface between CI (build) and GitOps CD (deploy) is a Git commit. When the CI pipeline successfully builds, tests, and publishes a new immutable container image, it commits the new image tag to the environment overlay in the GitOps configuration repo, prompting the controller to sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#ci-build-and-gitops",
    tags: ["CI/CD Integration", "CI-to-GitOps Hand-off", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-435",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps CI/CD Integration: Writing Back to Git: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates CI/CD Integration to integrate an automated GitHub Actions CI build pipeline with an Argo CD deployment repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? CI pipelines updating image tags in GitOps repos via git commit or pull requests is under consideration.",
    options: [
      { id: 'A', text: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account." },
      { id: 'B', text: "The CI pipeline connects directly to the Kubernetes API and runs `kubectl set image`." },
      { id: 'C', text: "The developer manually edits the image tag in Git after the CI build finishes." },
      { id: 'D', text: "The CI pipeline triggers a webhook on the developer's laptop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CI pipeline builds and pushes the container image to a registry, then commits the new image tag to the GitOps repository using a bot account. The standard interface between CI (build) and GitOps CD (deploy) is a Git commit. When the CI pipeline successfully builds, tests, and publishes a new immutable container image, it commits the new image tag to the environment overlay in the GitOps configuration repo, prompting the controller to sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#ci-build-and-gitops",
    tags: ["CI/CD Integration", "CI-to-GitOps Hand-off", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-436",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "PreSync, Sync, and PostSync Hooks in Argo CD: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Resource Hooks to execute a Slack notification Job and trigger a cache warm-up script only after all application pods have successfully deployed and become healthy.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Executing pre-deployment validations and post-deployment notifications with Argo CD hooks is under consideration.",
    options: [
      { id: 'A', text: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`." },
      { id: 'B', text: "Run the warm-up script before deploying pods." },
      { id: 'C', text: "Annotate the Job with `argocd.argoproj.io/hook: PreSync`." },
      { id: 'D', text: "Put the warm-up script inside an init container in the main application pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`. Argo CD resource hooks allow executing custom Jobs during synchronization lifecycle phases: `PreSync` (database migrations, validations), `Sync` (main deployment), `PostSync` (cache warm-up, notifications), and `SyncFail` (alerting on sync failure).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/",
    tags: ["Resource Hooks", "Resource Hooks", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-437",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "PreSync, Sync, and PostSync Hooks in Argo CD: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Resource Hooks to execute a Slack notification Job and trigger a cache warm-up script only after all application pods have successfully deployed and become healthy.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Executing pre-deployment validations and post-deployment notifications with Argo CD hooks is under consideration.",
    options: [
      { id: 'A', text: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`." },
      { id: 'B', text: "Run the warm-up script before deploying pods." },
      { id: 'C', text: "Annotate the Job with `argocd.argoproj.io/hook: PreSync`." },
      { id: 'D', text: "Put the warm-up script inside an init container in the main application pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`. Argo CD resource hooks allow executing custom Jobs during synchronization lifecycle phases: `PreSync` (database migrations, validations), `Sync` (main deployment), `PostSync` (cache warm-up, notifications), and `SyncFail` (alerting on sync failure).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/",
    tags: ["Resource Hooks", "Resource Hooks", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-438",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "PreSync, Sync, and PostSync Hooks in Argo CD: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Resource Hooks to execute a Slack notification Job and trigger a cache warm-up script only after all application pods have successfully deployed and become healthy.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Executing pre-deployment validations and post-deployment notifications with Argo CD hooks is under consideration.",
    options: [
      { id: 'A', text: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`." },
      { id: 'B', text: "Run the warm-up script before deploying pods." },
      { id: 'C', text: "Annotate the Job with `argocd.argoproj.io/hook: PreSync`." },
      { id: 'D', text: "Put the warm-up script inside an init container in the main application pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`. Argo CD resource hooks allow executing custom Jobs during synchronization lifecycle phases: `PreSync` (database migrations, validations), `Sync` (main deployment), `PostSync` (cache warm-up, notifications), and `SyncFail` (alerting on sync failure).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/",
    tags: ["Resource Hooks", "Resource Hooks", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-439",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "PreSync, Sync, and PostSync Hooks in Argo CD: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Resource Hooks to execute a Slack notification Job and trigger a cache warm-up script only after all application pods have successfully deployed and become healthy.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Executing pre-deployment validations and post-deployment notifications with Argo CD hooks is under consideration.",
    options: [
      { id: 'A', text: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`." },
      { id: 'B', text: "Run the warm-up script before deploying pods." },
      { id: 'C', text: "Annotate the Job with `argocd.argoproj.io/hook: PreSync`." },
      { id: 'D', text: "Put the warm-up script inside an init container in the main application pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`. Argo CD resource hooks allow executing custom Jobs during synchronization lifecycle phases: `PreSync` (database migrations, validations), `Sync` (main deployment), `PostSync` (cache warm-up, notifications), and `SyncFail` (alerting on sync failure).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/",
    tags: ["Resource Hooks", "Resource Hooks", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-440",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "PreSync, Sync, and PostSync Hooks in Argo CD: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Resource Hooks to execute a Slack notification Job and trigger a cache warm-up script only after all application pods have successfully deployed and become healthy.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Executing pre-deployment validations and post-deployment notifications with Argo CD hooks is under consideration.",
    options: [
      { id: 'A', text: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`." },
      { id: 'B', text: "Run the warm-up script before deploying pods." },
      { id: 'C', text: "Annotate the Job with `argocd.argoproj.io/hook: PreSync`." },
      { id: 'D', text: "Put the warm-up script inside an init container in the main application pod." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Annotate the notification and warm-up Jobs with `helm.sh/hook: post-install,post-upgrade` or `argocd.argoproj.io/hook: PostSync`. Argo CD resource hooks allow executing custom Jobs during synchronization lifecycle phases: `PreSync` (database migrations, validations), `Sync` (main deployment), `PostSync` (cache warm-up, notifications), and `SyncFail` (alerting on sync failure).",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/",
    tags: ["Resource Hooks", "Resource Hooks", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-441",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Helm Controller and Automatic Drift Correction: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Flux Helm Controller to ensure that an application installed via a Helm chart automatically recovers its original configuration if someone manually edits its ConfigMap in the cluster.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Continuously reconciling Helm chart state and recovering from manual modifications is under consideration.",
    options: [
      { id: 'A', text: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift." },
      { id: 'B', text: "Flux only installs Helm charts once and never reconciles them again." },
      { id: 'C', text: "Helm charts cannot be protected against manual cluster edits." },
      { id: 'D', text: "Manual edits must be approved by the Flux notification controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift. Unlike standalone Helm CLI (which only performs one-time installations and cannot detect drift), the Flux `helm-controller` operates a continuous reconciliation loop. It checks the live Helm release against the declared values in Git, automatically undoing manual cluster edits.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/#drift-detection",
    tags: ["Flux Helm Controller", "Flux Helm Drift", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-442",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Helm Controller and Automatic Drift Correction: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Flux Helm Controller to ensure that an application installed via a Helm chart automatically recovers its original configuration if someone manually edits its ConfigMap in the cluster.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Continuously reconciling Helm chart state and recovering from manual modifications is under consideration.",
    options: [
      { id: 'A', text: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift." },
      { id: 'B', text: "Flux only installs Helm charts once and never reconciles them again." },
      { id: 'C', text: "Helm charts cannot be protected against manual cluster edits." },
      { id: 'D', text: "Manual edits must be approved by the Flux notification controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift. Unlike standalone Helm CLI (which only performs one-time installations and cannot detect drift), the Flux `helm-controller` operates a continuous reconciliation loop. It checks the live Helm release against the declared values in Git, automatically undoing manual cluster edits.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/#drift-detection",
    tags: ["Flux Helm Controller", "Flux Helm Drift", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-443",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Helm Controller and Automatic Drift Correction: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Flux Helm Controller to ensure that an application installed via a Helm chart automatically recovers its original configuration if someone manually edits its ConfigMap in the cluster.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Continuously reconciling Helm chart state and recovering from manual modifications is under consideration.",
    options: [
      { id: 'A', text: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift." },
      { id: 'B', text: "Flux only installs Helm charts once and never reconciles them again." },
      { id: 'C', text: "Helm charts cannot be protected against manual cluster edits." },
      { id: 'D', text: "Manual edits must be approved by the Flux notification controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift. Unlike standalone Helm CLI (which only performs one-time installations and cannot detect drift), the Flux `helm-controller` operates a continuous reconciliation loop. It checks the live Helm release against the declared values in Git, automatically undoing manual cluster edits.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/#drift-detection",
    tags: ["Flux Helm Controller", "Flux Helm Drift", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-444",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Helm Controller and Automatic Drift Correction: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Flux Helm Controller to ensure that an application installed via a Helm chart automatically recovers its original configuration if someone manually edits its ConfigMap in the cluster.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Continuously reconciling Helm chart state and recovering from manual modifications is under consideration.",
    options: [
      { id: 'A', text: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift." },
      { id: 'B', text: "Flux only installs Helm charts once and never reconciles them again." },
      { id: 'C', text: "Helm charts cannot be protected against manual cluster edits." },
      { id: 'D', text: "Manual edits must be approved by the Flux notification controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift. Unlike standalone Helm CLI (which only performs one-time installations and cannot detect drift), the Flux `helm-controller` operates a continuous reconciliation loop. It checks the live Helm release against the declared values in Git, automatically undoing manual cluster edits.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/#drift-detection",
    tags: ["Flux Helm Controller", "Flux Helm Drift", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-445",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux Helm Controller and Automatic Drift Correction: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Flux Helm Controller to ensure that an application installed via a Helm chart automatically recovers its original configuration if someone manually edits its ConfigMap in the cluster.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Continuously reconciling Helm chart state and recovering from manual modifications is under consideration.",
    options: [
      { id: 'A', text: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift." },
      { id: 'B', text: "Flux only installs Helm charts once and never reconciles them again." },
      { id: 'C', text: "Helm charts cannot be protected against manual cluster edits." },
      { id: 'D', text: "Manual edits must be approved by the Flux notification controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux `helm-controller` continuously compares live Helm releases against Git-declared values and automatically re-applies the release upon drift. Unlike standalone Helm CLI (which only performs one-time installations and cannot detect drift), the Flux `helm-controller` operates a continuous reconciliation loop. It checks the live Helm release against the declared values in Git, automatically undoing manual cluster edits.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/#drift-detection",
    tags: ["Flux Helm Controller", "Flux Helm Drift", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-446",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps Observability and Prometheus Metrics: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Metrics to monitor the health and performance of the GitOps deployment engine and alert on applications stuck in OutOfSync or Degraded status.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Monitoring sync status, reconciliation latency, and controller health via Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules." },
      { id: 'B', text: "Inspect the Argo CD web dashboard manually 24/7." },
      { id: 'C', text: "Rely on customer complaints when deployments fail." },
      { id: 'D', text: "Disable metric scraping to save memory on monitoring servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules. Both Argo CD and Flux expose rich Prometheus metrics detailing sync status, reconciliation durations, Git polling latencies, and controller error counts. Metrics like `argocd_app_info{sync_status=\"OutOfSync\"}` power operational alerts and dashboards.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/",
    tags: ["GitOps Metrics", "GitOps Metrics", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-447",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps Observability and Prometheus Metrics: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Metrics to monitor the health and performance of the GitOps deployment engine and alert on applications stuck in OutOfSync or Degraded status.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Monitoring sync status, reconciliation latency, and controller health via Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules." },
      { id: 'B', text: "Inspect the Argo CD web dashboard manually 24/7." },
      { id: 'C', text: "Rely on customer complaints when deployments fail." },
      { id: 'D', text: "Disable metric scraping to save memory on monitoring servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules. Both Argo CD and Flux expose rich Prometheus metrics detailing sync status, reconciliation durations, Git polling latencies, and controller error counts. Metrics like `argocd_app_info{sync_status=\"OutOfSync\"}` power operational alerts and dashboards.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/",
    tags: ["GitOps Metrics", "GitOps Metrics", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-448",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps Observability and Prometheus Metrics: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Metrics to monitor the health and performance of the GitOps deployment engine and alert on applications stuck in OutOfSync or Degraded status.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Monitoring sync status, reconciliation latency, and controller health via Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules." },
      { id: 'B', text: "Inspect the Argo CD web dashboard manually 24/7." },
      { id: 'C', text: "Rely on customer complaints when deployments fail." },
      { id: 'D', text: "Disable metric scraping to save memory on monitoring servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules. Both Argo CD and Flux expose rich Prometheus metrics detailing sync status, reconciliation durations, Git polling latencies, and controller error counts. Metrics like `argocd_app_info{sync_status=\"OutOfSync\"}` power operational alerts and dashboards.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/",
    tags: ["GitOps Metrics", "GitOps Metrics", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-449",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps Observability and Prometheus Metrics: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Metrics to monitor the health and performance of the GitOps deployment engine and alert on applications stuck in OutOfSync or Degraded status.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Monitoring sync status, reconciliation latency, and controller health via Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules." },
      { id: 'B', text: "Inspect the Argo CD web dashboard manually 24/7." },
      { id: 'C', text: "Rely on customer complaints when deployments fail." },
      { id: 'D', text: "Disable metric scraping to save memory on monitoring servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules. Both Argo CD and Flux expose rich Prometheus metrics detailing sync status, reconciliation durations, Git polling latencies, and controller error counts. Metrics like `argocd_app_info{sync_status=\"OutOfSync\"}` power operational alerts and dashboards.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/",
    tags: ["GitOps Metrics", "GitOps Metrics", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-450",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "GitOps Observability and Prometheus Metrics: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Metrics to monitor the health and performance of the GitOps deployment engine and alert on applications stuck in OutOfSync or Degraded status.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Monitoring sync status, reconciliation latency, and controller health via Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules." },
      { id: 'B', text: "Inspect the Argo CD web dashboard manually 24/7." },
      { id: 'C', text: "Rely on customer complaints when deployments fail." },
      { id: 'D', text: "Disable metric scraping to save memory on monitoring servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scrape Prometheus metrics exposed by Argo CD or Flux (`argocd_app_info`, `gotk_reconcile_condition`) and configure alerting rules. Both Argo CD and Flux expose rich Prometheus metrics detailing sync status, reconciliation durations, Git polling latencies, and controller error counts. Metrics like `argocd_app_info{sync_status=\"OutOfSync\"}` power operational alerts and dashboards.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/",
    tags: ["GitOps Metrics", "GitOps Metrics", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_18;
