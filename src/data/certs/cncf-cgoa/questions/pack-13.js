export const CNCF_CGOA_QUESTIONS_13 = [
  {
    id: "cncf-cgoa-301",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs Polyrepo Repository Patterns: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Repository Strategies to choose a repository strategy for an enterprise managing 100 microservices across dev, staging, and prod with unified visibility.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Managing multi-environment and multi-service configurations in monorepos vs polyrepos is under consideration.",
    options: [
      { id: 'A', text: "Polyrepos cannot support automated reconciliation." },
      { id: 'B', text: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service." },
      { id: 'C', text: "Store all configurations in unversioned cloud storage buckets." },
      { id: 'D', text: "Monorepos are forbidden in GitOps architectures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service. In GitOps, organizations choose between monorepo (all service manifests in one repo with directory partitioning) and polyrepo (each service has its own config repo). Monorepos simplify atomic multi-service updates and holistic auditing, while polyrepos offer finer-grained Git access boundaries.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-302",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs Polyrepo Repository Patterns: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Repository Strategies to choose a repository strategy for an enterprise managing 100 microservices across dev, staging, and prod with unified visibility.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Managing multi-environment and multi-service configurations in monorepos vs polyrepos is under consideration.",
    options: [
      { id: 'A', text: "Polyrepos cannot support automated reconciliation." },
      { id: 'B', text: "Store all configurations in unversioned cloud storage buckets." },
      { id: 'C', text: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service." },
      { id: 'D', text: "Monorepos are forbidden in GitOps architectures." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service. In GitOps, organizations choose between monorepo (all service manifests in one repo with directory partitioning) and polyrepo (each service has its own config repo). Monorepos simplify atomic multi-service updates and holistic auditing, while polyrepos offer finer-grained Git access boundaries.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-303",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs Polyrepo Repository Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Repository Strategies to choose a repository strategy for an enterprise managing 100 microservices across dev, staging, and prod with unified visibility.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Managing multi-environment and multi-service configurations in monorepos vs polyrepos is under consideration.",
    options: [
      { id: 'A', text: "Monorepos are forbidden in GitOps architectures." },
      { id: 'B', text: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service." },
      { id: 'C', text: "Store all configurations in unversioned cloud storage buckets." },
      { id: 'D', text: "Polyrepos cannot support automated reconciliation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service. In GitOps, organizations choose between monorepo (all service manifests in one repo with directory partitioning) and polyrepo (each service has its own config repo). Monorepos simplify atomic multi-service updates and holistic auditing, while polyrepos offer finer-grained Git access boundaries.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-304",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs Polyrepo Repository Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Repository Strategies to choose a repository strategy for an enterprise managing 100 microservices across dev, staging, and prod with unified visibility.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Managing multi-environment and multi-service configurations in monorepos vs polyrepos is under consideration.",
    options: [
      { id: 'A', text: "Store all configurations in unversioned cloud storage buckets." },
      { id: 'B', text: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service." },
      { id: 'C', text: "Monorepos are forbidden in GitOps architectures." },
      { id: 'D', text: "Polyrepos cannot support automated reconciliation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service. In GitOps, organizations choose between monorepo (all service manifests in one repo with directory partitioning) and polyrepo (each service has its own config repo). Monorepos simplify atomic multi-service updates and holistic auditing, while polyrepos offer finer-grained Git access boundaries.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-305",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs Polyrepo Repository Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Repository Strategies to choose a repository strategy for an enterprise managing 100 microservices across dev, staging, and prod with unified visibility.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Managing multi-environment and multi-service configurations in monorepos vs polyrepos is under consideration.",
    options: [
      { id: 'A', text: "Store all configurations in unversioned cloud storage buckets." },
      { id: 'B', text: "Polyrepos cannot support automated reconciliation." },
      { id: 'C', text: "Monorepos are forbidden in GitOps architectures." },
      { id: 'D', text: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Evaluate trade-offs: a configuration monorepo centralizes visibility and simplifies cross-service refactoring, while polyrepos provide strict permission isolation per service. In GitOps, organizations choose between monorepo (all service manifests in one repo with directory partitioning) and polyrepo (each service has its own config repo). Monorepos simplify atomic multi-service updates and holistic auditing, while polyrepos offer finer-grained Git access boundaries.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["Repository Strategies", "Monorepo vs Polyrepo", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-306",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Directory-Based vs Branch-Based Environment Separation: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Environment Modeling to model development, staging, and production environments in Git without suffering merge conflicts across long-lived branches.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Structuring environments using directory hierarchies (overlays) vs long-lived branches is under consideration.",
    options: [
      { id: 'A', text: "Create permanent long-lived Git branches (`dev`, `stage`, `prod`) and merge between them indefinitely." },
      { id: 'B', text: "Use separate Git repositories with no shared base templates." },
      { id: 'C', text: "Store all environments in the same flat directory with identical values." },
      { id: 'D', text: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches. Branch-based environments (`dev` branch, `prod` branch) suffer from severe merge drift and conflicts when back-porting hotfixes. The modern GitOps consensus favors directory-based modeling on a single trunk branch, using Kustomize bases and environment overlays to maintain DRY, conflict-free configurations.",
    referenceUrl: "https://www.weave.works/blog/gitops-environments-branching-vs-directory",
    tags: ["Environment Modeling", "Directory vs Branch", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-307",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Directory-Based vs Branch-Based Environment Separation: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Environment Modeling to model development, staging, and production environments in Git without suffering merge conflicts across long-lived branches.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Structuring environments using directory hierarchies (overlays) vs long-lived branches is under consideration.",
    options: [
      { id: 'A', text: "Create permanent long-lived Git branches (`dev`, `stage`, `prod`) and merge between them indefinitely." },
      { id: 'B', text: "Store all environments in the same flat directory with identical values." },
      { id: 'C', text: "Use separate Git repositories with no shared base templates." },
      { id: 'D', text: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches. Branch-based environments (`dev` branch, `prod` branch) suffer from severe merge drift and conflicts when back-porting hotfixes. The modern GitOps consensus favors directory-based modeling on a single trunk branch, using Kustomize bases and environment overlays to maintain DRY, conflict-free configurations.",
    referenceUrl: "https://www.weave.works/blog/gitops-environments-branching-vs-directory",
    tags: ["Environment Modeling", "Directory vs Branch", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-308",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Directory-Based vs Branch-Based Environment Separation: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Environment Modeling to model development, staging, and production environments in Git without suffering merge conflicts across long-lived branches.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Structuring environments using directory hierarchies (overlays) vs long-lived branches is under consideration.",
    options: [
      { id: 'A', text: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches." },
      { id: 'B', text: "Store all environments in the same flat directory with identical values." },
      { id: 'C', text: "Use separate Git repositories with no shared base templates." },
      { id: 'D', text: "Create permanent long-lived Git branches (`dev`, `stage`, `prod`) and merge between them indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches. Branch-based environments (`dev` branch, `prod` branch) suffer from severe merge drift and conflicts when back-porting hotfixes. The modern GitOps consensus favors directory-based modeling on a single trunk branch, using Kustomize bases and environment overlays to maintain DRY, conflict-free configurations.",
    referenceUrl: "https://www.weave.works/blog/gitops-environments-branching-vs-directory",
    tags: ["Environment Modeling", "Directory vs Branch", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-309",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Directory-Based vs Branch-Based Environment Separation: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Environment Modeling to model development, staging, and production environments in Git without suffering merge conflicts across long-lived branches.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Structuring environments using directory hierarchies (overlays) vs long-lived branches is under consideration.",
    options: [
      { id: 'A', text: "Use separate Git repositories with no shared base templates." },
      { id: 'B', text: "Create permanent long-lived Git branches (`dev`, `stage`, `prod`) and merge between them indefinitely." },
      { id: 'C', text: "Store all environments in the same flat directory with identical values." },
      { id: 'D', text: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches. Branch-based environments (`dev` branch, `prod` branch) suffer from severe merge drift and conflicts when back-porting hotfixes. The modern GitOps consensus favors directory-based modeling on a single trunk branch, using Kustomize bases and environment overlays to maintain DRY, conflict-free configurations.",
    referenceUrl: "https://www.weave.works/blog/gitops-environments-branching-vs-directory",
    tags: ["Environment Modeling", "Directory vs Branch", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-310",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Directory-Based vs Branch-Based Environment Separation: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Environment Modeling to model development, staging, and production environments in Git without suffering merge conflicts across long-lived branches.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Structuring environments using directory hierarchies (overlays) vs long-lived branches is under consideration.",
    options: [
      { id: 'A', text: "Store all environments in the same flat directory with identical values." },
      { id: 'B', text: "Create permanent long-lived Git branches (`dev`, `stage`, `prod`) and merge between them indefinitely." },
      { id: 'C', text: "Use separate Git repositories with no shared base templates." },
      { id: 'D', text: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a directory-based structure using Kustomize overlays (e.g., `envs/dev`, `envs/prod`) on a single trunk branch rather than permanent environment branches. Branch-based environments (`dev` branch, `prod` branch) suffer from severe merge drift and conflicts when back-porting hotfixes. The modern GitOps consensus favors directory-based modeling on a single trunk branch, using Kustomize bases and environment overlays to maintain DRY, conflict-free configurations.",
    referenceUrl: "https://www.weave.works/blog/gitops-environments-branching-vs-directory",
    tags: ["Environment Modeling", "Directory vs Branch", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-311",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize Overlays for Environment Parameterization: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Kustomize in GitOps to maintain a common microservice deployment manifest while customizing replica counts and resource limits for development and production.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Base and overlay architecture for environment-specific patches (replicas, resources, domains) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode production resource limits in the development environment." },
      { id: 'B', text: "Copy-paste the entire YAML manifest into separate folders and edit them by hand." },
      { id: 'C', text: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches." },
      { id: 'D', text: "Use sed text substitution commands executed inside runtime containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches. Kustomize provides template-free customization for Kubernetes manifests. A shared `base/` contains standard declarative resources, while `overlays/` apply targeted patches (e.g., replicas, image tags, environment variables, resource limits) for each specific deployment environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-312",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize Overlays for Environment Parameterization: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Kustomize in GitOps to maintain a common microservice deployment manifest while customizing replica counts and resource limits for development and production.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Base and overlay architecture for environment-specific patches (replicas, resources, domains) is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste the entire YAML manifest into separate folders and edit them by hand." },
      { id: 'B', text: "Hardcode production resource limits in the development environment." },
      { id: 'C', text: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches." },
      { id: 'D', text: "Use sed text substitution commands executed inside runtime containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches. Kustomize provides template-free customization for Kubernetes manifests. A shared `base/` contains standard declarative resources, while `overlays/` apply targeted patches (e.g., replicas, image tags, environment variables, resource limits) for each specific deployment environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-313",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize Overlays for Environment Parameterization: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Kustomize in GitOps to maintain a common microservice deployment manifest while customizing replica counts and resource limits for development and production.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Base and overlay architecture for environment-specific patches (replicas, resources, domains) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode production resource limits in the development environment." },
      { id: 'B', text: "Copy-paste the entire YAML manifest into separate folders and edit them by hand." },
      { id: 'C', text: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches." },
      { id: 'D', text: "Use sed text substitution commands executed inside runtime containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches. Kustomize provides template-free customization for Kubernetes manifests. A shared `base/` contains standard declarative resources, while `overlays/` apply targeted patches (e.g., replicas, image tags, environment variables, resource limits) for each specific deployment environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-314",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize Overlays for Environment Parameterization: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Kustomize in GitOps to maintain a common microservice deployment manifest while customizing replica counts and resource limits for development and production.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Base and overlay architecture for environment-specific patches (replicas, resources, domains) is under consideration.",
    options: [
      { id: 'A', text: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches." },
      { id: 'B', text: "Copy-paste the entire YAML manifest into separate folders and edit them by hand." },
      { id: 'C', text: "Hardcode production resource limits in the development environment." },
      { id: 'D', text: "Use sed text substitution commands executed inside runtime containers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches. Kustomize provides template-free customization for Kubernetes manifests. A shared `base/` contains standard declarative resources, while `overlays/` apply targeted patches (e.g., replicas, image tags, environment variables, resource limits) for each specific deployment environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-315",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize Overlays for Environment Parameterization: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Kustomize in GitOps to maintain a common microservice deployment manifest while customizing replica counts and resource limits for development and production.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Base and overlay architecture for environment-specific patches (replicas, resources, domains) is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste the entire YAML manifest into separate folders and edit them by hand." },
      { id: 'B', text: "Hardcode production resource limits in the development environment." },
      { id: 'C', text: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches." },
      { id: 'D', text: "Use sed text substitution commands executed inside runtime containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Structure configuration with a shared `base/` directory and environment-specific `overlays/dev` and `overlays/prod` directories containing Kustomize patches. Kustomize provides template-free customization for Kubernetes manifests. A shared `base/` contains standard declarative resources, while `overlays/` apply targeted patches (e.g., replicas, image tags, environment variables, resource limits) for each specific deployment environment.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
    tags: ["Kustomize in GitOps", "Kustomize Overlays", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-316",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm Charts and HelmReleases in GitOps: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Helm in GitOps to deploy and manage complex third-party software (like cert-manager or Prometheus) declaratively using GitOps controllers.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Managing third-party and internal applications using Helm charts with Git-managed values.yaml is under consideration.",
    options: [
      { id: 'A', text: "Avoid using Helm and write custom Go operators for all third-party software." },
      { id: 'B', text: "Run `helm install` manually from an administrator's laptop over a local terminal." },
      { id: 'C', text: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`." },
      { id: 'D', text: "Decompile Helm charts into raw static YAML and commit unmaintained manifests." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`. GitOps controllers natively manage Helm charts. By declaring Helm repositories, chart versions, and custom `values.yaml` in Git (using Argo CD Applications or Flux HelmReleases), the controller automatically reconciles releases without requiring manual CLI interactions.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Helm in GitOps", "Helm in GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-317",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm Charts and HelmReleases in GitOps: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Helm in GitOps to deploy and manage complex third-party software (like cert-manager or Prometheus) declaratively using GitOps controllers.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Managing third-party and internal applications using Helm charts with Git-managed values.yaml is under consideration.",
    options: [
      { id: 'A', text: "Avoid using Helm and write custom Go operators for all third-party software." },
      { id: 'B', text: "Run `helm install` manually from an administrator's laptop over a local terminal." },
      { id: 'C', text: "Decompile Helm charts into raw static YAML and commit unmaintained manifests." },
      { id: 'D', text: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`. GitOps controllers natively manage Helm charts. By declaring Helm repositories, chart versions, and custom `values.yaml` in Git (using Argo CD Applications or Flux HelmReleases), the controller automatically reconciles releases without requiring manual CLI interactions.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Helm in GitOps", "Helm in GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-318",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm Charts and HelmReleases in GitOps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Helm in GitOps to deploy and manage complex third-party software (like cert-manager or Prometheus) declaratively using GitOps controllers.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Managing third-party and internal applications using Helm charts with Git-managed values.yaml is under consideration.",
    options: [
      { id: 'A', text: "Decompile Helm charts into raw static YAML and commit unmaintained manifests." },
      { id: 'B', text: "Run `helm install` manually from an administrator's laptop over a local terminal." },
      { id: 'C', text: "Avoid using Helm and write custom Go operators for all third-party software." },
      { id: 'D', text: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`. GitOps controllers natively manage Helm charts. By declaring Helm repositories, chart versions, and custom `values.yaml` in Git (using Argo CD Applications or Flux HelmReleases), the controller automatically reconciles releases without requiring manual CLI interactions.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Helm in GitOps", "Helm in GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-319",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm Charts and HelmReleases in GitOps: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Helm in GitOps to deploy and manage complex third-party software (like cert-manager or Prometheus) declaratively using GitOps controllers.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Managing third-party and internal applications using Helm charts with Git-managed values.yaml is under consideration.",
    options: [
      { id: 'A', text: "Run `helm install` manually from an administrator's laptop over a local terminal." },
      { id: 'B', text: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`." },
      { id: 'C', text: "Avoid using Helm and write custom Go operators for all third-party software." },
      { id: 'D', text: "Decompile Helm charts into raw static YAML and commit unmaintained manifests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`. GitOps controllers natively manage Helm charts. By declaring Helm repositories, chart versions, and custom `values.yaml` in Git (using Argo CD Applications or Flux HelmReleases), the controller automatically reconciles releases without requiring manual CLI interactions.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Helm in GitOps", "Helm in GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-320",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm Charts and HelmReleases in GitOps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Helm in GitOps to deploy and manage complex third-party software (like cert-manager or Prometheus) declaratively using GitOps controllers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Managing third-party and internal applications using Helm charts with Git-managed values.yaml is under consideration.",
    options: [
      { id: 'A', text: "Avoid using Helm and write custom Go operators for all third-party software." },
      { id: 'B', text: "Decompile Helm charts into raw static YAML and commit unmaintained manifests." },
      { id: 'C', text: "Run `helm install` manually from an administrator's laptop over a local terminal." },
      { id: 'D', text: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Manage Helm charts declaratively using Argo CD `Application` manifests or Flux `HelmRelease` CRDs referencing versioned charts with Git-tracked `values.yaml`. GitOps controllers natively manage Helm charts. By declaring Helm repositories, chart versions, and custom `values.yaml` in Git (using Argo CD Applications or Flux HelmReleases), the controller automatically reconciles releases without requiring manual CLI interactions.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Helm in GitOps", "Helm in GitOps", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-321",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "App of Apps Pattern in Argo CD: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Argo CD Patterns to bootstrap and manage dozens of microservice applications across multiple cluster namespaces using a single declarative GitOps entrypoint.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Root Application managing multiple child Application custom resources is under consideration.",
    options: [
      { id: 'A', text: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests." },
      { id: 'B', text: "Manually create 50 separate Application resources by hand in the Argo CD web UI." },
      { id: 'C', text: "Deploy all 50 applications into a single monolithic namespace." },
      { id: 'D', text: "Write a bash script that executes `argocd app create` in a loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests. The 'App of Apps' pattern uses a root Argo CD `Application` that monitors a Git directory containing child `Application` custom resources. When a new child application manifest is added to the repository, Argo CD automatically discovers, creates, and syncs the new application.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps",
    tags: ["Argo CD Patterns", "App of Apps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-322",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "App of Apps Pattern in Argo CD: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Argo CD Patterns to bootstrap and manage dozens of microservice applications across multiple cluster namespaces using a single declarative GitOps entrypoint.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Root Application managing multiple child Application custom resources is under consideration.",
    options: [
      { id: 'A', text: "Manually create 50 separate Application resources by hand in the Argo CD web UI." },
      { id: 'B', text: "Deploy all 50 applications into a single monolithic namespace." },
      { id: 'C', text: "Write a bash script that executes `argocd app create` in a loop." },
      { id: 'D', text: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests. The 'App of Apps' pattern uses a root Argo CD `Application` that monitors a Git directory containing child `Application` custom resources. When a new child application manifest is added to the repository, Argo CD automatically discovers, creates, and syncs the new application.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps",
    tags: ["Argo CD Patterns", "App of Apps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-323",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "App of Apps Pattern in Argo CD: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Argo CD Patterns to bootstrap and manage dozens of microservice applications across multiple cluster namespaces using a single declarative GitOps entrypoint.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Root Application managing multiple child Application custom resources is under consideration.",
    options: [
      { id: 'A', text: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests." },
      { id: 'B', text: "Manually create 50 separate Application resources by hand in the Argo CD web UI." },
      { id: 'C', text: "Write a bash script that executes `argocd app create` in a loop." },
      { id: 'D', text: "Deploy all 50 applications into a single monolithic namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests. The 'App of Apps' pattern uses a root Argo CD `Application` that monitors a Git directory containing child `Application` custom resources. When a new child application manifest is added to the repository, Argo CD automatically discovers, creates, and syncs the new application.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps",
    tags: ["Argo CD Patterns", "App of Apps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-324",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "App of Apps Pattern in Argo CD: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Argo CD Patterns to bootstrap and manage dozens of microservice applications across multiple cluster namespaces using a single declarative GitOps entrypoint.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Root Application managing multiple child Application custom resources is under consideration.",
    options: [
      { id: 'A', text: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests." },
      { id: 'B', text: "Write a bash script that executes `argocd app create` in a loop." },
      { id: 'C', text: "Deploy all 50 applications into a single monolithic namespace." },
      { id: 'D', text: "Manually create 50 separate Application resources by hand in the Argo CD web UI." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests. The 'App of Apps' pattern uses a root Argo CD `Application` that monitors a Git directory containing child `Application` custom resources. When a new child application manifest is added to the repository, Argo CD automatically discovers, creates, and syncs the new application.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps",
    tags: ["Argo CD Patterns", "App of Apps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-325",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "App of Apps Pattern in Argo CD: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Argo CD Patterns to bootstrap and manage dozens of microservice applications across multiple cluster namespaces using a single declarative GitOps entrypoint.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Root Application managing multiple child Application custom resources is under consideration.",
    options: [
      { id: 'A', text: "Deploy all 50 applications into a single monolithic namespace." },
      { id: 'B', text: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests." },
      { id: 'C', text: "Manually create 50 separate Application resources by hand in the Argo CD web UI." },
      { id: 'D', text: "Write a bash script that executes `argocd app create` in a loop." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Argo CD 'App of Apps' pattern where a root `Application` resource points to a Git directory containing child `Application` manifests. The 'App of Apps' pattern uses a root Argo CD `Application` that monitors a Git directory containing child `Application` custom resources. When a new child application manifest is added to the repository, Argo CD automatically discovers, creates, and syncs the new application.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps",
    tags: ["Argo CD Patterns", "App of Apps", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_13;
